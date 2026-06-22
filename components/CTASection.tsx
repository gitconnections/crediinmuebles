"use client";

import Link from 'next/link';
import Reveal from '@/components/reactbits/Reveal';

const CTASection = () => {
  return (
    <section id="cta-final" className="py-24 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight">
            ¿Estás listo para invertir con confianza?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. ¡Contáctanos hoy mismo para obtener más información y cotizar tu lote!
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="#contact"
            className="inline-block px-12 py-5 bg-white text-primary font-semibold text-xl rounded-lg shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Cotiza tu lote ahora
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
