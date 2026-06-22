"use client";

import Image from 'next/image';
import Reveal from '@/components/reactbits/Reveal';

const images = [
  { src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/02-x23b7m.webp', alt: 'Vista aérea de un desarrollo inmobiliario con casas y áreas verdes', width: 600, height: 400 },
  { src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/03-1skdjic.webp', alt: 'Terreno urbanizado con calles y servicios básicos listos para construcción', width: 400, height: 600 },
  { src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/04-1dwj1vo.webp', alt: 'Maqueta de un complejo residencial moderno con diseños arquitectónicos atractivos', width: 600, height: 400 },
  { src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/05-m2bc7y.webp', alt: 'Vista de un lote de terreno con potencial para desarrollo, rodeado de naturaleza', width: 400, height: 400 },
  { src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/06-1dwsjq3.png', alt: 'Detalle de la construcción de una vivienda, mostrando materiales de calidad', width: 600, height: 300 },
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center text-foreground mb-16 leading-tight">
            Nuestros proyectos: seguridad, confiabilidad y respaldo
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-semibold">
                    {img.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
