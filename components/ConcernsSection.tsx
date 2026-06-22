import Reveal from '@/components/reactbits/Reveal';
import { ShieldOff, FileWarning, TrendingDown } from 'lucide-react';
import content from '@/content.json';

const IconMap: { [key: string]: React.ElementType } = {
  ShieldOff,
  FileWarning,
  TrendingDown,
};

export default function ConcernsSection() {
  return (
    <section id={content.concerns.id} className="py-24 sm:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
            {content.concerns.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.concerns.items.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <Reveal key={index} delay={0.1 * index + 0.3}>
                <div className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full">
                  {IconComponent && <IconComponent size={48} className="text-accent mb-6" />}
                  <h3 className="text-xl font-semibold font-heading mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 flex-grow">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
