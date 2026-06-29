import Link from 'next/link';
import { MapPinned, MousePointerClick, MessageCircle, CheckCircle2 } from 'lucide-react';
import HeroShowcase from '@/components/loteamiento/HeroShowcase';

const PASOS = [
  { icon: MousePointerClick, text: 'Explora el plano y elige tu terreno' },
  { icon: MessageCircle, text: 'Conversa con un asesor por WhatsApp' },
  { icon: CheckCircle2, text: 'Reserva con un adelanto y queda a tu nombre' },
];

export default function LoteamientoSection() {
  return (
    <section id="lotes" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            <MapPinned size={16} />
            Mapa interactivo
          </span>
          <h2 className="mt-4 font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
            Elige tu lote en el mapa de la urbanización
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Visualiza en tiempo real qué lotes están <b className="text-green-600">disponibles</b>,{' '}
            <b className="text-amber-600">reservados</b> o <b className="text-red-600">vendidos</b>. Haz clic en
            cualquier terreno para ver su superficie, ventajas y precio, y resérvalo al instante.
          </p>

          <ul className="mt-6 space-y-3">
            {PASOS.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-slate-700">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <p.icon size={18} />
                </span>
                {p.text}
              </li>
            ))}
          </ul>

          <Link
            href="/loteamiento"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent/90"
          >
            <MapPinned size={18} />
            Abrir mapa de lotes
          </Link>
        </div>

        {/* showcase */}
        <HeroShowcase />
      </div>
    </section>
  );
}
