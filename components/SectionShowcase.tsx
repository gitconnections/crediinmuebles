import React from 'react';
import Image from 'next/image';
import content from '@/content.json';
import Reveal from '@/components/reactbits/Reveal';

const SectionShowcase: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground font-poppins mb-6">
            {content.showcase.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            {content.showcase.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.showcase.images.map((image, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="group relative block w-full h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
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
};

export default SectionShowcase;
