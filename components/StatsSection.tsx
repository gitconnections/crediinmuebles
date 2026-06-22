"use client";

import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function StatsSection() {
  return (
    <section id={content.stats.id} className="py-24 sm:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins mb-16 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            {content.stats.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.stats.items.map((item, index) => (
            <Reveal key={item.label} delay={0.2 + index * 0.1}>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-sm">
                <p className="text-6xl font-bold font-poppins text-accent mb-4">
                  <CountUp to={item.value} duration={2} separator="," />
                </p>
                <p className="text-lg font-medium leading-relaxed text-white/90 max-w-xs">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
