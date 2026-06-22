import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center justify-center w-16 h-16 bg-[#07cedc]/10 text-[#07cedc] rounded-full mb-6">
      {icon}
    </div>
    <h3 className="font-poppins text-2xl font-semibold text-[#0f172a] mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function Features() {
  const featuresData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3-6-4.5-4.5L9 9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: 'Revisión documental minuciosa',
      description: 'Garantiza la seguridad y confiabilidad de tu inversión. Nos aseguramos de que cada proyecto cumpla con todos los requisitos legales y técnicos.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a4.5 4.5 0 0 0 2.343-3.375M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 12.75V18m-4.773-2.134A9.154 9.154 0 0 0 12 18.75c2.347 0 4.556-.757 6.31-2.086M9.456 16.162A4.5 4.5 0 0 0 9 12.75V15m-2.25-4.875A3.75 3.75 0 0 0 7.5 12.75V15m6.75-4.875c.04.04.08.08.12.12m-.12-.12a3.75 3.75 0 0 1 3.75 3.75V15m-15-2.25A9.154 9.154 0 0 0 12 18.75c2.347 0 4.556-.757 6.31-2.086M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      ),
      title: 'Equipo multidisciplinario',
      description: 'Asegura la ejecución y entrega de proyectos de alta calidad. Contamos con expertos en cada área para tu tranquilidad.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.072 60.072 0 0 1 15.794 0m-15.794 0A18.025 18.025 0 0 0 5.25 21V5.25A2.25 2.25 0 0 1 7.5 3h4.5A2.25 2.25 0 0 1 14.25 5.25V21M4.5 9h15m-15 4.5h15m-15 4.5h15" />
        </svg>
      ),
      title: 'Planes de pago personalizados y flexibles',
      description: 'Se adapta a tus necesidades y presupuesto. Ofrecemos opciones que facilitan tu inversión sin comprometer tu estabilidad financiera.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: 'Garantía de satisfacción y respaldo',
      description: 'Brinda tranquilidad y confianza en tu inversión. Nuestro compromiso es tu satisfacción a largo plazo con cada proyecto.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-16 leading-tight">
          Nuestra solución para tus necesidades inmobiliarias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
