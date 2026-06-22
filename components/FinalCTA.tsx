"use client";

import Link from 'next/link';
import { Aurora } from '@/components/reactbits/Aurora';
import { Reveal } from '@/components/reactbits/Reveal';

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-gradient-to-br from-[#0c4c8a] to-[#07cedc] text-white overflow-hidden rounded-t-[10px] -mt-4 z-40 shadow-2xl">
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="soft-light"
        amplitude={0.2}
        className="absolute inset-0 opacity-30"
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight">
            ¿Estás listo para invertir con confianza?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. ¡Contáctanos hoy
            mismo para obtener más información y cotizar tu lote!
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="#contact"
            className="px-10 py-5 bg-[#d83a3a] text-white text-xl font-semibold rounded-[10px] shadow-xl hover:bg-[#a32b2b] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Cotiza tu lote ahora
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
