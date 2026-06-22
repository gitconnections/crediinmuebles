"use client";

import Reveal from '@/components/reactbits/Reveal';
import { FileText, Users, Handshake, CheckCircle } from 'lucide-react';
import content from '@/content.json';

const iconMap = {
  "Revisión documental minuciosa": FileText,
  "Equipo multidisciplinario": Users,
  "Planes de pago personalizados y flexibles": Handshake,
  "Garantía de satisfacción y respaldo": CheckCircle,
};

export default function ProjectsSection() {
  return (
    <section id={content.projects.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins text-center mb-8 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto text-primary">
            {content.projects.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-foreground/80 mb-16">
            {content.projects.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.projects.items.map((item, index) => {
            const IconComponent = iconMap[item.title as keyof typeof iconMap] || CheckCircle;
            return (
              <Reveal key={item.title} delay={0.3 + index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                  <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
                    <IconComponent size={36} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
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
