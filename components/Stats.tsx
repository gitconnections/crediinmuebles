"use client";

import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function Stats() {
  return (
    <section id={content.stats.id} className="py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 leading-tight">
            {content.stats.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.stats.items.map((stat, index) => {
            const numberValue = parseInt(stat.value.replace(/[^\d]/g, ''), 10);
            return (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold font-poppins mb-4 text-white drop-shadow-md">
                    <CountUp to={numberValue} separator="," duration={2} />
                    {stat.value.includes('años') && ' años'}
                    {stat.value.includes('metros') && ' m²'}
                  </div>
                  <p className="text-lg text-white/90 max-w-xs mx-auto">
                    {stat.label.replace('{value}', stat.value)}
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
