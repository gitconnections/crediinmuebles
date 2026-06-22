"use client";

import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function StatsSection() {
  return (
    <section id={content.stats.id} className="py-24 sm:py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
            {content.stats.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {content.stats.items.map((item, index) => (
            <Reveal key={index} delay={0.1 * index + 0.3}>
              <div className="flex flex-col items-center">
                <CountUp
                  to={item.value}
                  duration={2.5}
                  separator=","
                  className="text-5xl sm:text-6xl font-bold font-heading text-white mb-3"
                />
                <p className="text-lg text-white/90 max-w-xs">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
