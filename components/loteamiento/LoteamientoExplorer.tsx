'use client';

import { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import { Plus, Minus, Maximize2, Move, Download, RotateCcw } from 'lucide-react';
import data from '@/data/loteamiento.json';
import { STATUS } from './status';
import LotDetailPanel from './LotDetailPanel';
import CommonAreaShape from './CommonArea';
import ReservaModal from './ReservaModal';
import type { LoteamientoData, Lot, LotStatus, CommonArea } from './types';

const D = data as LoteamientoData;
const [VBW, VBH] = (() => {
  const p = D.viewBox.split(' ').map(Number);
  return [p[2], p[3]];
})();

const STATUS_KEYS: LotStatus[] = ['disponible', 'reservado', 'vendido'];
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const EDITS_KEY = 'loteamiento:edits';
const COVER_MARGIN = 4;
const RAD = Math.PI / 180;
const DATA_VERSION = JSON.stringify([D.entrada, D.entradaAngleDeg, D.commonAreas.map((a) => [a.cx, a.cy, a.angleDeg])]);

type Edit = { dx: number; dy: number; rot: number };
type Edits = Record<string, Edit>;
const ZERO: Edit = { dx: 0, dy: 0, rot: 0 };

function covers(area: CommonArea, t: Edit, lcx: number, lcy: number): boolean {
  const dx = lcx - (area.cx + t.dx);
  const dy = lcy - (area.cy + t.dy);
  if (area.shape === 'circle') return Math.hypot(dx, dy) < (area.r ?? 0) + COVER_MARGIN;
  const a = -(area.angleDeg + t.rot) * RAD;
  const lx = dx * Math.cos(a) - dy * Math.sin(a);
  const ly = dx * Math.sin(a) + dy * Math.cos(a);
  return Math.abs(lx) <= (area.w ?? 0) / 2 + COVER_MARGIN && Math.abs(ly) <= (area.h ?? 0) / 2 + COVER_MARGIN;
}

export default function LoteamientoExplorer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [active, setActive] = useState<Record<LotStatus, boolean>>({ disponible: true, reservado: true, vendido: true });
  const [editMode, setEditMode] = useState(false);
  const [edits, setEdits] = useState<Edits>({});
  const [overrides, setOverrides] = useState<Record<string, LotStatus>>({});
  const [reservaLot, setReservaLot] = useState<Lot | null>(null);

  const pan = useRef<{ mx: number; my: number; vx: number; vy: number } | null>(null);
  const grab = useRef<
    | { key: string; mode: 'move'; wx: number; wy: number; t0: Edit }
    | { key: string; mode: 'rotate'; cx: number; cy: number; ang0: number; t0: Edit }
    | null
  >(null);
  // active touch/mouse pointers (viewBox coords) for pinch-to-zoom
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinch = useRef<{ dist0: number; k0: number; wx: number; wy: number } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(EDITS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.v === DATA_VERSION && saved.e) setEdits(saved.e);
        else localStorage.removeItem(EDITS_KEY);
      }
    } catch {
      /* ignore */
    }
  }, []);
  const persist = (e: Edits) => {
    setEdits(e);
    try {
      localStorage.setItem(EDITS_KEY, JSON.stringify({ v: DATA_VERSION, e }));
    } catch {
      /* ignore */
    }
  };
  const getT = useCallback((key: string): Edit => edits[key] ?? ZERO, [edits]);
  const eff = useCallback((l: Lot): LotStatus => overrides[l.id] ?? l.status, [overrides]);

  const coveredIds = useMemo(() => {
    const set = new Set<string>();
    for (const l of D.lots) {
      for (let i = 0; i < D.commonAreas.length; i++) {
        if (covers(D.commonAreas[i], edits[`a${i}`] ?? ZERO, l.cx, l.cy)) {
          set.add(l.id);
          break;
        }
      }
    }
    return set;
  }, [edits]);

  const counts = useMemo(() => {
    const c: Record<LotStatus, number> = { disponible: 0, reservado: 0, vendido: 0 };
    D.lots.forEach((l) => {
      if (!coveredIds.has(l.id)) c[overrides[l.id] ?? l.status] += 1;
    });
    return c;
  }, [coveredIds, overrides]);

  const selected = useMemo(() => {
    const l = D.lots.find((x) => x.id === selectedId);
    return l ? { ...l, status: overrides[l.id] ?? l.status } : null;
  }, [selectedId, overrides]);

  const toVB = useCallback((clientX: number, clientY: number) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: ((clientX - r.left) / r.width) * VBW, y: ((clientY - r.top) / r.height) * VBH };
  }, []);
  // viewBox px -> world (pre-view) coords; only used for area editing (view is constant during a drag)
  const toWorld = useCallback(
    (clientX: number, clientY: number) => {
      const m = toVB(clientX, clientY);
      return { x: (m.x - view.x) / view.k, y: (m.y - view.y) / view.k };
    },
    [toVB, view],
  );

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      const m = toVB(e.clientX, e.clientY);
      setView((v) => {
        const k = clamp(v.k * (e.deltaY < 0 ? 1.18 : 1 / 1.18), 1, 9);
        const wx = (m.x - v.x) / v.k;
        const wy = (m.y - v.y) / v.k;
        return { k, x: m.x - wx * k, y: m.y - wy * k };
      });
    },
    [toVB],
  );

  const startMove = (key: string) => (e: React.PointerEvent) => {
    if (!editMode) return;
    e.stopPropagation();
    svgRef.current?.setPointerCapture(e.pointerId);
    const w = toWorld(e.clientX, e.clientY);
    grab.current = { key, mode: 'move', wx: w.x, wy: w.y, t0: getT(key) };
  };
  const startRotate = (key: string, ecx: number, ecy: number) => (e: React.PointerEvent) => {
    if (!editMode) return;
    e.stopPropagation();
    svgRef.current?.setPointerCapture(e.pointerId);
    const w = toWorld(e.clientX, e.clientY);
    grab.current = { key, mode: 'rotate', cx: ecx, cy: ecy, ang0: Math.atan2(w.y - ecy, w.x - ecx), t0: getT(key) };
  };

  const startPinch = () => {
    const [a, b] = [...pointers.current.values()];
    const dist0 = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    pinch.current = { dist0, k0: view.k, wx: (mx - view.x) / view.k, wy: (my - view.y) / view.k };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    // NOTE: do NOT setPointerCapture here — it would steal the pointer from the
    // lot polygons (suppressing click/selection) and break multi-touch pinch.
    const m = toVB(e.clientX, e.clientY);
    pointers.current.set(e.pointerId, m);
    if (grab.current) return; // area editing in progress
    if (pointers.current.size >= 2) {
      pan.current = null;
      startPinch();
    } else {
      pan.current = { mx: m.x, my: m.y, vx: view.x, vy: view.y };
    }
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, toVB(e.clientX, e.clientY));

    const g = grab.current;
    if (g) {
      const w = toWorld(e.clientX, e.clientY);
      if (g.mode === 'move') {
        setEdits((o) => ({ ...o, [g.key]: { ...g.t0, dx: g.t0.dx + (w.x - g.wx), dy: g.t0.dy + (w.y - g.wy) } }));
      } else {
        const deg = (Math.atan2(w.y - g.cy, w.x - g.cx) - g.ang0) / RAD;
        setEdits((o) => ({ ...o, [g.key]: { ...g.t0, rot: g.t0.rot + deg } }));
      }
      return;
    }

    // pinch-to-zoom (two pointers): scale by finger spread, pan by midpoint
    if (pinch.current && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const k = clamp((pinch.current.k0 * dist) / pinch.current.dist0, 1, 9);
      setView({ k, x: mx - pinch.current.wx * k, y: my - pinch.current.wy * k });
      return;
    }

    if (!pan.current) return;
    const m = toVB(e.clientX, e.clientY);
    const p = pan.current;
    setView((v) => ({ ...v, x: p.vx + (m.x - p.mx), y: p.vy + (m.y - p.my) }));
  };
  const endPointer = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (grab.current) {
      grab.current = null;
      persist(edits);
    }
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 1) {
      // a finger lifted from a pinch → resume single-finger pan smoothly
      const [m] = [...pointers.current.values()];
      pan.current = { mx: m.x, my: m.y, vx: view.x, vy: view.y };
    } else if (pointers.current.size === 0) {
      pan.current = null;
    }
  };

  const zoomBy = (f: number) =>
    setView((v) => {
      const k = clamp(v.k * f, 1, 9);
      const wx = (VBW / 2 - v.x) / v.k;
      const wy = (VBH / 2 - v.y) / v.k;
      return { k, x: VBW / 2 - wx * k, y: VBH / 2 - wy * k };
    });
  const reset = () => setView({ k: 1, x: 0, y: 0 });
  const resetEdits = () => persist({});

  const downloadJson = () => {
    const rot = (px: number, py: number, cx: number, cy: number, deg: number) => {
      const a = deg * RAD;
      const dx = px - cx;
      const dy = py - cy;
      return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
    };
    const et = getT('entrada');
    const out = {
      ...D,
      entrada: [D.entrada[0] + et.dx, D.entrada[1] + et.dy],
      commonAreas: D.commonAreas.map((a, i) => {
        const t = getT(`a${i}`);
        const pts = a.points
          .split(' ')
          .map((xy) => {
            const [x, y] = xy.split(',').map(Number);
            const [rx, ry] = rot(x, y, a.cx, a.cy, t.rot);
            return `${(rx + t.dx).toFixed(1)},${(ry + t.dy).toFixed(1)}`;
          })
          .join(' ');
        return { ...a, cx: +(a.cx + t.dx).toFixed(1), cy: +(a.cy + t.dy).toFixed(1), angleDeg: +(a.angleDeg + t.rot).toFixed(1), points: pts };
      }),
    };
    const blob = new Blob([JSON.stringify(out, null, 1)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'loteamiento.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const showLabels = view.k > 2.6;
  const et = getT('entrada');

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8fafc]">
      <svg
        ref={svgRef}
        viewBox={D.viewBox}
        className="h-full w-full touch-none"
        style={{ cursor: pan.current ? 'grabbing' : 'grab' }}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onPointerLeave={endPointer}
      >
        <rect x={0} y={0} width={VBW} height={VBH} fill="#f8fafc" onClick={() => setSelectedId(null)} />
        <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
          {/* streets */}
          {D.streets.map((s, i) =>
            s.type === 'avenida' ? (
              <polyline key={`av${i}`} points={s.points} fill="none" stroke="#e2e8f0" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={0.8} />
            ) : null,
          )}
          {D.streets.map((s, i) => (
            <polyline key={`s${i}`} points={s.points} fill="none" stroke="#aab4c2" strokeWidth={s.type === 'avenida' ? 1.6 : 1} strokeLinecap="round" strokeLinejoin="round" />
          ))}

          {/* lots */}
          {D.lots.map((l) => {
            if (coveredIds.has(l.id)) return null;
            const st = overrides[l.id] ?? l.status;
            const s = STATUS[st];
            const on = active[st];
            const isSel = l.id === selectedId;
            return (
              <polygon
                key={l.id}
                points={l.points}
                fill={s.color}
                fillOpacity={on ? (isSel ? 1 : 0.82) : 0.08}
                stroke={isSel ? '#0f172a' : '#ffffff'}
                strokeWidth={isSel ? 1.6 : 0.5}
                className="cursor-pointer transition-[fill-opacity]"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!editMode) setSelectedId(l.id);
                }}
              >
                <title>{`Lote ${l.id} — ${STATUS[st].label} — ${l.areaM2} m²`}</title>
              </polygon>
            );
          })}

          {showLabels &&
            D.lots.map((l) =>
              active[overrides[l.id] ?? l.status] && !coveredIds.has(l.id) ? (
                <text key={`t${l.id}`} x={l.cx} y={l.cy} textAnchor="middle" dominantBaseline="middle" className="pointer-events-none select-none" style={{ fontSize: 3.4, fontWeight: 700, fill: '#fff' }}>
                  {l.numero}
                </text>
              ) : null,
            )}

          {/* common areas (move + rotate in edit mode) */}
          {D.commonAreas.map((a, i) => {
            const key = `a${i}`;
            const t = getT(key);
            const ecx = a.cx + t.dx;
            const ecy = a.cy + t.dy;
            const half = a.shape === 'circle' ? a.r ?? 0 : (a.h ?? 0) / 2;
            return (
              <g key={`c${i}`}>
                <g transform={`translate(${t.dx} ${t.dy})`} onPointerDown={startMove(key)} style={{ cursor: editMode ? 'move' : 'default' }}>
                  <CommonAreaShape a={a} extraRot={t.rot} />
                </g>
                {editMode && (
                  <g transform={`translate(${ecx} ${ecy}) rotate(${a.angleDeg + t.rot})`}>
                    {a.shape === 'circle' ? (
                      <circle cx={0} cy={0} r={a.r} fill="transparent" stroke="#4f46e5" strokeWidth={1} strokeDasharray="3 2" pointerEvents="none" />
                    ) : (
                      <rect x={-(a.w ?? 0) / 2} y={-half} width={a.w} height={a.h} fill="transparent" stroke="#4f46e5" strokeWidth={1} strokeDasharray="3 2" pointerEvents="none" />
                    )}
                    {a.shape === 'rect' && (
                      <>
                        <line x1={0} y1={-half} x2={0} y2={-half - 9} stroke="#4f46e5" strokeWidth={1} />
                        <circle cx={0} cy={-half - 9} r={3.4} fill="#4f46e5" stroke="#fff" strokeWidth={1} style={{ cursor: 'grab' }} onPointerDown={startRotate(key, ecx, ecy)} />
                      </>
                    )}
                  </g>
                )}
              </g>
            );
          })}

          {/* entrada (move only in edit mode) */}
          <g transform={`translate(${et.dx} ${et.dy})`} onPointerDown={startMove('entrada')} style={{ cursor: editMode ? 'move' : 'default' }}>
            <g transform={`translate(${D.entrada[0]} ${D.entrada[1]}) rotate(${D.entradaAngleDeg})`}>
              <rect x={-2} y={-1.4} width={20} height={2.8} rx={1} fill="#cbd5e1" />
              <rect x={-3.4} y={-6} width={2.6} height={12} rx={0.6} fill="#4f46e5" />
              <rect x={5.6} y={-6} width={2.6} height={12} rx={0.6} fill="#4f46e5" />
              <rect x={-3.4} y={-8.4} width={11.6} height={3} rx={1} fill="#4f46e5" />
              <text x={2.4} y={-6.2} textAnchor="middle" className="select-none" style={{ fontSize: 2.1, fontWeight: 700, fill: '#fff', letterSpacing: 0.2 }}>
                INGRESO
              </text>
            </g>
            <text
              x={D.entrada[0] + 2}
              y={D.entrada[1] + 11}
              textAnchor="middle"
              className="pointer-events-none select-none"
              style={{ fontSize: 6, fontWeight: 700, fill: '#4f46e5', paintOrder: 'stroke', stroke: '#fff', strokeWidth: 1.6, strokeLinejoin: 'round' }}
            >
              Entrada principal
            </text>
            {editMode && <circle cx={D.entrada[0] + 2} cy={D.entrada[1] - 4} r={9} fill="transparent" stroke="#4f46e5" strokeWidth={1} strokeDasharray="3 2" pointerEvents="none" />}
          </g>
        </g>
      </svg>

      {/* header / legend */}
      <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-3">
        <div className="pointer-events-auto rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
          <p className="font-poppins text-sm font-bold text-slate-900">Mapa de lotes</p>
          <p className="text-xs text-slate-500">
            {D.lots.length - coveredIds.size} lotes · {D.meta.manzanas} manzanas
          </p>
        </div>
        <div className="pointer-events-auto flex flex-col gap-1.5 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
          {STATUS_KEYS.map((k) => (
            <button key={k} onClick={() => setActive((a) => ({ ...a, [k]: !a[k] }))} className={`flex items-center gap-2 rounded-lg px-2 py-1 text-sm transition-opacity ${active[k] ? 'opacity-100' : 'opacity-40'}`}>
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: STATUS[k].color }} />
              <span className="font-medium text-slate-700">{STATUS[k].label}</span>
              <span className="ml-auto text-xs font-semibold text-slate-400">{counts[k]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* edit toolbar */}
      <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
        <button
          onClick={() => {
            setEditMode((e) => !e);
            setSelectedId(null);
          }}
          className={`pointer-events-auto inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-lg transition-colors ${
            editMode ? 'bg-accent text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Move size={16} />
          {editMode ? 'Editando áreas…' : 'Editar áreas'}
        </button>
        {editMode && (
          <div className="pointer-events-auto flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
            <p className="max-w-[13rem] text-xs text-slate-500">
              <b>Arrastra</b> el cuerpo para mover. Usa el <b>punto de arriba</b> para rotar. Los lotes debajo se ocultan solos.
            </p>
            <button onClick={downloadJson} className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90">
              <Download size={15} />
              Descargar JSON
            </button>
            <button onClick={resetEdits} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-50">
              <RotateCcw size={14} />
              Restablecer posiciones
            </button>
          </div>
        )}
      </div>

      {/* zoom controls */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
        <ZoomBtn onClick={() => zoomBy(1.4)} label="Acercar">
          <Plus size={18} />
        </ZoomBtn>
        <ZoomBtn onClick={() => zoomBy(1 / 1.4)} label="Alejar">
          <Minus size={18} />
        </ZoomBtn>
        <ZoomBtn onClick={reset} label="Restablecer vista">
          <Maximize2 size={16} />
        </ZoomBtn>
      </div>

      {!editMode && (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex justify-center md:inset-auto md:right-4 md:top-20">
          <LotDetailPanel lot={selected} onClose={() => setSelectedId(null)} onReservar={(l) => setReservaLot(l)} />
        </div>
      )}

      {reservaLot && (
        <ReservaModal
          lot={reservaLot}
          onClose={() => setReservaLot(null)}
          onReserved={(id) => setOverrides((o) => ({ ...o, [id]: 'reservado' }))}
        />
      )}
    </div>
  );
}

function ZoomBtn({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-colors hover:bg-slate-50">
      {children}
    </button>
  );
}
