'use client';

import { ShieldCheck, Handshake, Gem } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description: 'Proyectos con revisión documental minuciosa y respaldo legal para tu tranquilidad.',
  },
  {
    icon: Handshake,
    title: 'Confiabilidad',
    description: 'Más de 4 años de experiencia en el mercado, garantizando una inversión segura y transparente.',
  },
  {
    icon: Gem,
    title: 'Respaldo',
    description: 'Un equipo multidisciplinario comprometido con la calidad y la entrega de tus proyectos.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8 font-poppins leading-tight">
            Invierte con confianza en terrenos y proyectos inmobiliarios
          </h2>
          <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. Nuestros proyectos
            son diseñados para satisfacer tus necesidades y superar tus expectativas. Con un lote siempre ganas:
            seguridad, confiabilidad y respaldo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal delay={0.1 + index * 0.1} key={feature.title}>
              <div className="bg-white p-8 rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col justify-start items-center text-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
                  <feature.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
