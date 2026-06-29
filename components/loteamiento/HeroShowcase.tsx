'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MousePointer2, CheckCircle2 } from 'lucide-react';
import data from '@/data/loteamiento.json';
import { STATUS, COMMON_STYLE } from './status';
import type { LoteamientoData } from './types';

const D = data as LoteamientoData;
const MAP_BG = '#f8fafc'; // gris casi blanco

// tight content bbox (lots + common areas) — the full-overview frame
const CB = (() => {
  let x0 = 1e9,
    y0 = 1e9,
    x1 = -1e9,
    y1 = -1e9;
  const eat = (pts: string) =>
    pts.split(' ').forEach((xy) => {
      const [x, y] = xy.split(',').map(Number);
      x0 = Math.min(x0, x);
      y0 = Math.min(y0, y);
      x1 = Math.max(x1, x);
      y1 = Math.max(y1, y);
    });
  D.lots.forEach((l) => eat(l.points));
  D.commonAreas.forEach((a) => eat(a.points));
  const pad = 12;
  return { x: x0 - pad, y: y0 - pad, w: x1 - x0 + 2 * pad, h: y1 - y0 + 2 * pad };
})();
const ASPECT = CB.w / CB.h;

// pick a credible "available" target lot near the centre, away from common areas
const TARGET = (() => {
  const cx = CB.x + CB.w * 0.5;
  const cy = CB.y + CB.h * 0.45;
  const far = (lx: number, ly: number) => D.commonAreas.every((a) => Math.hypot(lx - a.cx, ly - a.cy) > 34);
  const cands = D.lots.filter((l) => l.status === 'disponible' && far(l.cx, l.cy));
  cands.sort((a, b) => Math.hypot(a.cx - cx, a.cy - cy) - Math.hypot(b.cx - cx, b.cy - cy));
  return cands[0] ?? D.lots[0];
})();

// zoomed-in frame (same aspect as CB) centred on the target
const ZOOM = (() => {
  const w = CB.w * 0.5;
  const h = CB.h * 0.5;
  const x = Math.min(Math.max(TARGET.cx - w / 2, CB.x), CB.x + CB.w - w);
  const y = Math.min(Math.max(TARGET.cy - h / 2, CB.y), CB.y + CB.h - h);
  return { x, y, w, h };
})();

const STEPS = [{ cap: 'Explora la urbanización' }, { cap: 'Selecciona tu terreno' }, { cap: 'Conversa por WhatsApp' }, { cap: '¡Lote reservado!' }];
const DUR = [2000, 2200, 4200, 2400];
const CHAT = [
  { who: 'asesor', text: `¿Reservamos el lote ${TARGET.id}?` },
  { who: 'user', text: 'Sí 🙌 Deposité el adelanto de Bs 2.000 ✅' },
  { who: 'asesor', text: '¡Pago verificado! Registro tu reserva ✍️' },
];

type Rect = { x: number; y: number; w: number; h: number };

export default function HeroShowcase() {
  const [step, setStep] = useState(0);
  const [chat, setChat] = useState(0);
  const [vb, setVb] = useState<Rect>(CB);
  const vbRef = useRef<Rect>(CB);
  const rafRef = useRef<number>(0);

  // step loop
  useEffect(() => {
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), DUR[step]);
    return () => clearTimeout(t);
  }, [step]);

  // zoom: overview on step 0, zoomed-in for selection/chat/reserve
  useEffect(() => {
    const to = step === 0 ? CB : ZOOM;
    const from = vbRef.current;
    const start = performance.now();
    const dur = 850;
    cancelAnimationFrame(rafRef.current);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const cur = {
        x: from.x + (to.x - from.x) * e,
        y: from.y + (to.y - from.y) * e,
        w: from.w + (to.w - from.w) * e,
        h: from.h + (to.h - from.h) * e,
      };
      vbRef.current = cur;
      setVb(cur);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [step]);

  // chat bubbles + confirmation during step 2
  useEffect(() => {
    if (step === 0) setChat(0);
    if (step === 2) {
      const ts = [
        setTimeout(() => setChat(1), 400),
        setTimeout(() => setChat(2), 1700),
        setTimeout(() => setChat(3), 2900),
        setTimeout(() => setChat(4), 3900), // "reserva confirmada" banner
      ];
      return () => ts.forEach(clearTimeout);
    }
  }, [step]);

  const cursorActive = step >= 1;
  const confirmed = chat >= 4 || step === 3;
  const reserved = confirmed;
  const showChat = step === 2 || step === 3;
  const targetStatus = reserved ? STATUS.reservado : STATUS.disponible;
  const px = (cx: number) => ((cx - vb.x) / vb.w) * 100;
  const py = (cy: number) => ((cy - vb.y) / vb.h) * 100;

  return (
    <Link
      href="/loteamiento"
      aria-label="Abrir el mapa de lotes"
      className="group mx-auto block w-full max-w-md focus:outline-none"
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] group-hover:ring-2 group-hover:ring-accent">
        {/* faux app bar */}
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[11px] font-medium text-slate-400">crediinmuebles · mapa de lotes (demo)</span>
        </div>

        {/* map */}
        <div className="relative" style={{ aspectRatio: `${ASPECT}`, backgroundColor: MAP_BG }}>
          <svg viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`} className="h-full w-full" preserveAspectRatio="xMidYMid meet">
            {D.streets.map((s, i) => (
              <polyline key={i} points={s.points} fill="none" stroke="#d4dae2" strokeWidth={s.type === 'avenida' ? 1.6 : 1} strokeLinecap="round" strokeLinejoin="round" />
            ))}
            {D.lots.map((l) => {
              if (l.id === TARGET.id) return null;
              const s = STATUS[l.status];
              return <polygon key={l.id} points={l.points} fill={s.color} fillOpacity={0.82} stroke="#fff" strokeWidth={0.5} />;
            })}
            {D.commonAreas
              .filter((a) => a.type !== 'cancha')
              .map((a, i) => {
                const st = COMMON_STYLE[a.type];
                return <polygon key={i} points={a.points} fill={st.fill} stroke={st.stroke} strokeWidth={0.7} />;
              })}
            <polygon
              points={TARGET.points}
              fill={targetStatus.color}
              fillOpacity={1}
              stroke={cursorActive ? '#0f172a' : '#fff'}
              strokeWidth={cursorActive ? 1.6 : 0.5}
              style={{ transition: 'fill 0.5s ease' }}
            />
          </svg>

          {/* animated cursor */}
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-[900ms] ease-out"
            style={{ left: `${cursorActive ? px(TARGET.cx) : 14}%`, top: `${cursorActive ? py(TARGET.cy) : 18}%`, opacity: showChat ? 0 : 1 }}
          >
            <MousePointer2 size={22} className="fill-white text-slate-800 drop-shadow" />
          </div>

          {/* reserved badge */}
          {reserved && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[150%] animate-fade-in rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg"
              style={{ left: `${px(TARGET.cx)}%`, top: `${py(TARGET.cy)}%` }}
            >
              RESERVADO
            </div>
          )}

          {/* mini WhatsApp chat overlay */}
          <div
            className={`absolute inset-x-3 bottom-3 z-20 origin-bottom rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-300 ${
              showChat ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 rounded-t-xl bg-[#075E54] px-3 py-1.5 text-white">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[10px] font-bold">CM</span>
              <span className="text-xs font-semibold">Carla · WhatsApp</span>
              <span className="ml-auto h-2 w-2 rounded-full bg-[#25D366]" />
            </div>
            <div className="space-y-1.5 px-3 py-2" style={{ backgroundColor: '#ece5dd' }}>
              {CHAT.slice(0, Math.min(chat, 3)).map((m, i) => (
                <div key={i} className={`flex ${m.who === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span
                    className={`max-w-[82%] rounded-lg px-2.5 py-1 text-[11px] leading-snug shadow-sm ${
                      m.who === 'user' ? 'rounded-br-none bg-[#d9fdd3] text-slate-800' : 'rounded-bl-none bg-white text-slate-700'
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              {confirmed && (
                <div className="flex animate-scale-in items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-2 text-white shadow-md">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <div className="leading-tight">
                    <p className="text-[13px] font-extrabold">¡Reserva confirmada! 🎉</p>
                    <p className="text-[10px] text-white/90">Lote {TARGET.id} reservado a tu nombre · 7 días</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* caption + step dots */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-2.5">
          <span className="text-sm font-semibold text-slate-700">{STEPS[step].cap}</span>
          <span className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === step ? 'w-4 bg-accent' : 'w-1.5 bg-slate-300'}`} />
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
}
