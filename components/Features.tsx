"use client";

import React from 'react';
import Reveal from '@/components/reactbits/Reveal';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-foreground/10 flex flex-col items-start">
    <div className="text-accent mb-4 text-4xl p-3 rounded-full bg-accent/10">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-foreground mb-3 font-poppins">
      {title}
    </h3>
    <p className="text-foreground/70 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Revisión documental minuciosa',
      description: 'Garantizamos la seguridad y confiabilidad de tu inversión con un análisis exhaustivo de todos los documentos.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75V10.5m0 0a2.25 2.25 0 00-2.25-2.25H13.5m0 0A2.25 2.25 0 0011.25 10.5H9.75M18 7.5v3M13.5 7.5H3C2.337 7.5 2 7.837 2 8.5v12c0 .663.337 1 1 1h10.5c.663 0 1-.337 1-1V9.75m-7.5 0h7.5m-7.5 3h7.5m-7.5 3h7.5M3 10.5H2v-2.5a.5.5 0 01.5-.5h1.5v3z" />
        </svg>
      ),
      title: 'Equipo multidisciplinario',
      description: 'Nuestro equipo de expertos asegura la ejecución y entrega de proyectos de alta calidad, desde la concepción hasta la finalización.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182L12 10.5M12 18L9.75 21M12 6v-1.5m0 0A2.25 2.25 0 009.75 3h4.5A2.25 2.25 0 0014.25 4.5M12 6v-1.5m-4.5 0h9" />
        </svg>
      ),
      title: 'Planes de pago personalizados',
      description: 'Ofrecemos opciones de financiamiento flexibles y adaptadas a tus necesidades y presupuesto para que tu inversión sea posible.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Garantía de satisfacción y respaldo',
      description: 'Brindamos tranquilidad y confianza en tu inversión, asegurando que cada proyecto cumpla con los más altos estándares de calidad.'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center text-foreground mb-16 leading-tight">
            Nuestra solución para tus necesidades inmobiliarias
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
