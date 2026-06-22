'use client';

import Image from 'next/image';
import Reveal from '@/components/reactbits/Reveal';

const clientImages = [
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/01-x7nfwr.png',
    alt: 'Proyecto inmobiliario moderno con vista aérea',
    type: 'cover',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/02-x23b7m.webp',
    alt: 'Diseño arquitectónico de un edificio moderno',
    type: 'cover',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/03-1skdjic.webp',
    alt: 'Logo de Crediinmuebles sobre fondo blanco',
    type: 'contain',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/04-1dwj1vo.webp',
    alt: 'Render de un proyecto residencial con áreas verdes',
    type: 'cover',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/05-m2bc7y.webp',
    alt: 'Edificio en construcción con grúas',
    type: 'cover',
  },
  {
    src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/06-1dwsjq3.png',
    alt: 'Diseño de un complejo de apartamentos',
    type: 'cover',
  },
  {
    src: 'https://images.unsplash.com/photo-1550480808-de32e58c7ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODMwNDJ8MHwxfHNlYXJjaHwyfHxJbm1vYmlsaWFyaWElMjB0ZXJyZW5vcyUyMEludmllcnRlJTIwY29uJTIwY29uZmlhbnphJTIwZW4lMjB0ZXJyZW5vcyUyMHklMjBwcm95ZWN0b3MlMjBpbm1vYmlsaWFyaW9zfGVufDF8MHx8fDE3ODIxMzkxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Perspectiva forzada de edificios modernos',
    type: 'cover',
  },
  {
    src: 'https://images.unsplash.com/photo-1585060179500-8b4a620e15f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODMwNDJ8MHwxfHNlYXJjaHwzfHxJbm1vYmlsaWFyaWElMjB0ZXJyZW5vcyUyMEludmllcnRlJTIwY29uJTIwY29uZmlhbnphJTIwZW4lMjB0ZXJyZW5vcyUyMHklMjBwcm95ZWN0b3MlMjBpbm1vYmlsaWFyaW9zfGVufDF8MHx8fDE3ODIxMzkxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Terreno verde con árboles, ideal para desarrollo',
    type: 'cover',
  },
];

export default function ShowcaseSection() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8 font-poppins leading-tight">
            Nuestros proyectos: seguridad, confiabilidad y respaldo
          </h2>
          <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            Nuestros proyectos están diseñados para satisfacer tus necesidades y superar tus expectativas. Cada uno de nuestros proyectos cuenta con las siguientes características:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientImages.map((image, index) => (
            <Reveal delay={0.1 + index * 0.05} key={image.src}>
              <div className="relative w-full aspect-video rounded-[10px] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`transition-transform duration-500 group-hover:scale-105 ${image.type === 'contain' ? 'object-contain p-4 bg-white' : 'object-cover'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
