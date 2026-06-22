'use client';

import Link from 'next/link';
import Aurora from '@/components/reactbits/Aurora';
import Reveal from '@/components/reactbits/Reveal';

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="overlay"
        amplitude={0.2}
        className="absolute inset-0 opacity-50"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
            ¿Estás listo para invertir con confianza?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. ¡Contáctanos hoy mismo para obtener más información y cotizar tu lote!
          </p>
          <Link
            href="#contacto"
            className="px-10 py-4 bg-accent text-white rounded-[10px] text-lg font-semibold shadow-xl hover:bg-accent/90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Cotiza tu lote ahora
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
