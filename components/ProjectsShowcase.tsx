"use client";

import Image from 'next/image';
import { Reveal } from '@/components/reactbits/Reveal';

const images = [
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/02-x23b7m.webp',
    alt: 'Vista aérea de un desarrollo inmobiliario con lotes marcados',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/03-1skdjic.webp',
    alt: 'Terreno baldío con señal de venta y montañas al fondo',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/04-1dwj1vo.webp',
    alt: 'Maqueta de un proyecto de viviendas con áreas verdes',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/05-m2bc7y.webp',
    alt: 'Familia feliz en un terreno, mirando al horizonte',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/06-1dwsjq3.png',
    alt: 'Planos de construcción y herramientas de diseño arquitectónico',
    span: 'col-span-1 row-span-1',
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#ffffff]">
      <div className="container mx-auto px-4 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-[#000000] leading-tight">
            Invierte con confianza en terrenos y proyectos inmobiliarios
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. Nuestros
            proyectos son diseñados para satisfacer tus necesidades y superar tus expectativas. Con un lote siempre
            ganas: seguridad, confiabilidad y respaldo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <Reveal key={img.src} delay={0.1 + index * 0.05} className={`${img.span} overflow-hidden rounded-[10px]`}>
              <div className="relative w-full h-full aspect-square md:aspect-auto group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-[10px] group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
