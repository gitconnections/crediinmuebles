"use client";

import React from 'react';
import CountUp from '@/components/reactbits/CountUp';
import Reveal from '@/components/reactbits/Reveal';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem: React.FC<StatProps> = ({ value, label, suffix = '', prefix = '' }) => (
  <div className="text-center">
    <p className="text-5xl md:text-6xl font-bold text-white font-poppins mb-3">
      {prefix}<CountUp to={value} separator="," duration={2} />{suffix}
    </p>
    <p className="text-lg md:text-xl text-white/80 font-inter">
      {label}
    </p>
  </div>
);

const Stats = () => {
  const statsData = [
    { value: 4, label: 'años de experiencia', suffix: '+' },
    { value: 15427, label: 'contactos mensuales', suffix: '+' },
    { value: 1746, label: 'm² de infraestructura', suffix: '+' },
  ];

  return (
    <section id="stats" className="py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 leading-tight">
            Nuestra experiencia y presencia en el mercado
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <Reveal key={index} delay={0.1 + index * 0.15}>
              <StatItem {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
