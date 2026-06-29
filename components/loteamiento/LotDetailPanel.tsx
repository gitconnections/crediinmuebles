'use client';

import { X, Ruler, TrendingUp, MapPin, DollarSign, CheckCircle2 } from 'lucide-react';
import { STATUS } from './status';
import type { Lot } from './types';

export default function LotDetailPanel({
  lot,
  onClose,
  onReservar,
}: {
  lot: Lot | null;
  onClose: () => void;
  onReservar: (lot: Lot) => void;
}) {
  if (!lot) return null;
  const s = STATUS[lot.status];

  return (
    <aside
      className="pointer-events-auto flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur md:w-80"
      role="dialog"
      aria-label={`Detalles del lote ${lot.id}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Manzana {lot.manzana} · Lote {lot.numero}
          </p>
          <h3 className="font-poppins text-2xl font-bold text-slate-900">{lot.id}</h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={18} />
        </button>
      </div>

      <span
        className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold"
        style={{ backgroundColor: s.soft, color: s.color }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
        {s.label}
      </span>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <Stat icon={<Ruler size={16} />} label="Superficie" value={`${lot.areaM2} m²`} />
        <Stat icon={<TrendingUp size={16} />} label="Inclinación" value={`${lot.inclinacionPct}%`} />
        <Stat
          icon={<DollarSign size={16} />}
          label="Precio ref."
          value={`USD ${lot.precioUSD.toLocaleString('es')}`}
        />
        <Stat
          icon={<MapPin size={16} />}
          label="Precio / m²"
          value={`USD ${Math.round(lot.precioUSD / lot.areaM2)}`}
        />
      </dl>

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">Ventajas</p>
        <ul className="flex flex-wrap gap-2">
          {lot.ventajas.map((v) => (
            <li
              key={v}
              className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              <CheckCircle2 size={13} />
              {v}
            </li>
          ))}
        </ul>
      </div>

      {lot.status === 'disponible' && (
        <button
          onClick={() => onReservar(lot)}
          className="mt-1 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent/90"
        >
          Reservar este lote
        </button>
      )}
      {lot.status === 'reservado' && (
        <p className="mt-1 rounded-lg bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-700">
          Reservado · adelanto recibido
        </p>
      )}
    </aside>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <dt className="mb-1 flex items-center gap-1.5 text-xs text-slate-400">
        {icon}
        {label}
      </dt>
      <dd className="font-poppins text-lg font-bold text-slate-900">{value}</dd>
    </div>
  );
}
