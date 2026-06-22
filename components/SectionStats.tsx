import React from 'react';
import content from '@/content.json';
import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';

const SectionStats: React.FC = () => {
  return (
    <section id="estadisticas" className="py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold text-center font-poppins mb-16">
            {content.stats.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {content.stats.items.map((item, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="p-6">
                <p className="text-5xl lg:text-6xl font-extrabold font-poppins mb-4">
                  <CountUp to={item.value} duration={2.5} separator="," />
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
