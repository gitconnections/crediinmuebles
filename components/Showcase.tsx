"use client";

import Image from 'next/image';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function Showcase() {
  return (
    <section id={content.showcase.id} className="py-24 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 text-foreground leading-tight">
            {content.showcase.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.showcase.images.map((image, index) => (
            <Reveal key={index} delay={0.2 + index * 0.05}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
