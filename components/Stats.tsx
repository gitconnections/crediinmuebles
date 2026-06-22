"use client";

import { CountUp } from '@/components/reactbits/CountUp';
import { Reveal } from '@/components/reactbits/Reveal';

export function Stats() {
  return (
    <section id="stats" className="py-24 md:py-32 bg-gradient-to-br from-[#07cedc] to-[#0c4c8a] text-white rounded-t-[10px] -mt-4 relative z-40 shadow-2xl">
      <div className="container mx-auto px-4 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-12 leading-tight">
            Nuestra experiencia y presencia en el mercado
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={0.2}>
            <div className="p-8 bg-white/10 rounded-[10px] shadow-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-6xl font-bold font-poppins mb-4">
                <CountUp to={4} duration={2} />+
              </p>
              <h3 className="text-xl font-semibold font-poppins mb-2">Años de experiencia</h3>
              <p className="text-lg opacity-90">
                Más de 4 años de experiencia en el mercado inmobiliario, facilitando el acceso a la compra de terrenos y
                proyectos inmobiliarios.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-white/10 rounded-[10px] shadow-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-6xl font-bold font-poppins mb-4">
                <CountUp to={15427} duration={2.5} separator=',' />+
              </p>
              <h3 className="text-xl font-semibold font-poppins mb-2">Contactos mensuales</h3>
              <p className="text-lg opacity-90">
                Más de 15.427 contactos mensuales a nivel nacional, demostrando nuestra presencia y alcance en el
                mercado.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="p-8 bg-white/10 rounded-[10px] shadow-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-6xl font-bold font-poppins mb-4">
                <CountUp to={1746} duration={3} separator=',' />+
              </p>
              <h3 className="text-xl font-semibold font-poppins mb-2">Metros cuadrados</h3>
              <p className="text-lg opacity-90">
                Más de 1.746 metros cuadrados de infraestructura construida, reflejando nuestra capacidad para ejecutar
                proyectos de alta calidad.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
