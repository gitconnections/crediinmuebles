"use client";

import { ShieldCheck, Handshake, LifeBuoy } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

const IconMap: { [key: string]: React.ElementType } = {
  ShieldCheck,
  Handshake,
  LifeBuoy,
};

export default function Investment() {
  return (
    <section id={content.investment.id} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8 text-foreground leading-tight">
            {content.investment.title}
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-16 max-w-3xl mx-auto">
            {content.investment.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.investment.features.map((feature, index) => {
            const IconComponent = IconMap[feature.icon];
            return (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {IconComponent && <IconComponent size={32} strokeWidth={2.5} />}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
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
