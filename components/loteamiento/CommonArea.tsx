'use client';

import type { CommonArea } from './types';

/** Decorative, "invented" rendering of each common area so the demo looks credible. */
export default function CommonAreaShape({ a, extraRot = 0 }: { a: CommonArea; extraRot?: number }) {
  const t = `translate(${a.cx} ${a.cy}) rotate(${a.angleDeg + extraRot})`;
  return (
    <g>
      <g transform={t}>
        {a.type === 'cancha' && <Cancha w={a.w!} h={a.h!} />}
        {a.type === 'parque' && <Parque w={a.w!} h={a.h!} />}
        {a.type === 'mercado' && <Mercado w={a.w!} h={a.h!} />}
        {a.type === 'plaza' && <Plaza r={a.r!} />}
      </g>
      <Label x={a.cx} y={a.cy - (a.shape === 'circle' ? a.r! : a.h! / 2) - 4} text={a.name} />
    </g>
  );
}

function Label({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className="pointer-events-none select-none"
      style={{
        fontSize: 6,
        fontWeight: 700,
        fill: '#334155',
        paintOrder: 'stroke',
        stroke: '#fff',
        strokeWidth: 1.6,
        strokeLinejoin: 'round',
      }}
    >
      {text}
    </text>
  );
}

/** Football pitch with stripes, center line/circle and goal boxes. */
function Cancha({ w, h }: { w: number; h: number }) {
  const x = -w / 2;
  const y = -h / 2;
  const stripes = 6;
  const sw = w / stripes;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={1.5} fill="#3f9c54" stroke="#2f7d41" strokeWidth={0.8} />
      {Array.from({ length: stripes }).map((_, i) =>
        i % 2 === 0 ? (
          <rect key={i} x={x + i * sw} y={y} width={sw} height={h} fill="#46a85c" />
        ) : null,
      )}
      <g fill="none" stroke="#ffffff" strokeWidth={0.5} opacity={0.9}>
        <rect x={x + 1} y={y + 1} width={w - 2} height={h - 2} />
        <line x1={0} y1={y + 1} x2={0} y2={y + h - 1} />
        <circle cx={0} cy={0} r={h * 0.16} />
        <rect x={x + 1} y={-h * 0.28} width={w * 0.1} height={h * 0.56} />
        <rect x={w / 2 - 1 - w * 0.1} y={-h * 0.28} width={w * 0.1} height={h * 0.56} />
      </g>
    </g>
  );
}

/** Green park: lawn, winding path and scattered trees. */
function Parque({ w, h }: { w: number; h: number }) {
  const x = -w / 2;
  const y = -h / 2;
  const trees = [
    [-0.32, -0.28],
    [-0.05, -0.33],
    [0.28, -0.2],
    [0.38, 0.12],
    [0.1, 0.3],
    [-0.22, 0.28],
    [-0.4, 0.05],
    [0.0, 0.02],
  ];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="#cde6a8" stroke="#6aa64a" strokeWidth={0.8} />
      <path
        d={`M ${x + 2} ${y + h * 0.7} Q 0 ${y + h * 0.3} ${x + w - 2} ${y + h * 0.6}`}
        fill="none"
        stroke="#e7d8b0"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {trees.map(([fx, fy], i) => (
        <g key={i} transform={`translate(${fx * w} ${fy * h})`}>
          <circle r={2.6} fill="#3f8f43" stroke="#2f6f33" strokeWidth={0.4} />
          <circle r={1.2} fill="#4fa552" />
        </g>
      ))}
    </g>
  );
}

/** Market hall: building with a striped (awning) roof and stalls. */
function Mercado({ w, h }: { w: number; h: number }) {
  const x = -w / 2;
  const y = -h / 2;
  const cols = 5;
  const cw = w / cols;
  const colors = ['#7c3aed', '#a78bfa'];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={1.5} fill="#f3efff" stroke="#7c3aed" strokeWidth={0.8} />
      {/* awning roof */}
      {Array.from({ length: cols }).map((_, i) => (
        <rect key={i} x={x + i * cw} y={y} width={cw} height={h * 0.32} fill={colors[i % 2]} />
      ))}
      {/* stalls */}
      {Array.from({ length: cols }).map((_, i) => (
        <rect
          key={`s${i}`}
          x={x + i * cw + cw * 0.18}
          y={y + h * 0.5}
          width={cw * 0.64}
          height={h * 0.34}
          rx={0.6}
          fill="#ddd6fe"
          stroke="#7c3aed"
          strokeWidth={0.3}
        />
      ))}
    </g>
  );
}

/** Plaza: round paved area with fountain and radial paths. */
function Plaza({ r }: { r: number }) {
  return (
    <g>
      <circle r={r} fill="#d7f3f7" stroke="#0891b2" strokeWidth={0.8} />
      <circle r={r * 0.62} fill="none" stroke="#7dd3fc" strokeWidth={0.6} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (Math.PI / 4) * i;
        return (
          <line
            key={i}
            x1={Math.cos(a) * r * 0.62}
            y1={Math.sin(a) * r * 0.62}
            x2={Math.cos(a) * r}
            y2={Math.sin(a) * r}
            stroke="#bae6fd"
            strokeWidth={0.5}
          />
        );
      })}
      <circle r={r * 0.26} fill="#38bdf8" stroke="#0891b2" strokeWidth={0.5} />
      <circle r={r * 0.1} fill="#0891b2" />
    </g>
  );
}
