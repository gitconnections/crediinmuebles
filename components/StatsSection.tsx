'use client';

import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';

const stats = [
  {
    value: 4,
    label: 'Años de experiencia en el mercado inmobiliario',
    suffix: '+',
  },
  {
    value: 15427,
    label: 'Contactos mensuales a nivel nacional',
    suffix: '+',
  },
  {
    value: 1746,
    label: 'Metros cuadrados de infraestructura construida',
    suffix: '+',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-24 md:py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins leading-tight">
            Nuestra experiencia y presencia en el mercado
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <Reveal delay={0.1 + index * 0.1} key={stat.label}>
              <div className="text-center">
                <p className="text-6xl md:text-7xl font-bold mb-4 font-poppins">
                  <CountUp to={stat.value} duration={2} separator="," />{stat.suffix}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold opacity-90">
                  {stat.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
