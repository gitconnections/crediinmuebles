import Link from 'next/link';
import { ArrowLeft, Info } from 'lucide-react';
import type { Metadata } from 'next';
import LoteamientoExplorer from '@/components/loteamiento/LoteamientoExplorer';

export const metadata: Metadata = {
  title: 'Mapa de lotes | Crediinmuebles',
  description: 'Explora los lotes disponibles, reservados y vendidos. Haz clic en un lote para ver superficie, ventajas y precio.',
};

export default function LoteamientoPage() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-accent"
        >
          <ArrowLeft size={18} />
          Volver
        </Link>
        <div className="flex items-center gap-2">
          <h1 className="font-poppins text-base font-bold text-slate-900 sm:text-lg">Plano interactivo de lotes</h1>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">
            Demo
          </span>
        </div>
        <span className="hidden text-xs text-slate-400 sm:block">arrastra y haz zoom</span>
      </header>
      {/* demo disclaimer */}
      <div className="flex shrink-0 items-center justify-center gap-2 bg-amber-50 px-4 py-1.5 text-center text-xs text-amber-800">
        <Info size={13} className="shrink-0" />
        <span>
          Demostración: el plano, los estados (disponible/reservado/vendido) y los precios son <b>ficticios</b>.
        </span>
      </div>
      <main className="relative flex-1">
        <LoteamientoExplorer />
      </main>
    </div>
  );
}
