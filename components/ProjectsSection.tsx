import Image from 'next/image';
import Reveal from '@/components/reactbits/Reveal';
import { FileText, Briefcase, CreditCard, Award } from 'lucide-react';
import content from '@/content.json';

const IconMap: { [key: string]: React.ElementType } = {
  FileText,
  Briefcase,
  CreditCard,
  Award,
};

export default function ProjectsSection() {
  return (
    <section id={content.projects.id} className="py-24 sm:py-32 bg-gray-50 text-foreground">
      <div className="container mx-auto px-4">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-6 text-primary">
            {content.projects.title}
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto mb-16">
            {content.projects.description}
          </p>
        </Reveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {content.projects.items.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <Reveal key={index} delay={0.1 * index + 0.5}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-secondary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary mb-4">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-2 text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm flex-grow">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.images.map((image, index) => (
            <Reveal key={index} delay={0.1 * index + 0.7}>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
