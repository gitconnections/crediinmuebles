"use client";

import Reveal from '@/components/reactbits/Reveal';
import { FileCheck, Users, DollarSign } from 'lucide-react';
import content from '@/content.json';

const iconMap = {
  "Revisión documental minuciosa": FileCheck,
  "Equipo multidisciplinario": Users,
  "Planes de pago personalizados": DollarSign,
};

export default function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins text-center mb-8 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            {content.solution.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-white/90 mb-16">
            {content.solution.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.solution.items.map((item, index) => {
            const IconComponent = iconMap[item.title as keyof typeof iconMap] || FileCheck;
            return (
              <Reveal key={item.title} delay={0.3 + index * 0.1}>
                <div className="bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="bg-accent/20 text-accent p-4 rounded-full mb-6">
                    <IconComponent size={36} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold font-poppins mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
