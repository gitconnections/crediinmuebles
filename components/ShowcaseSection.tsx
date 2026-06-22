"use client";

import Image from 'next/image';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function ShowcaseSection() {
  return (
    <section id={content.showcase.id} className="py-24 sm:py-32 bg-gray-50 text-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins text-center mb-16 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto text-primary">
            {content.showcase.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.showcase.images.map((image, index) => (
            <Reveal key={image.src} delay={0.2 + index * 0.05}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
