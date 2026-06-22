import Reveal from '@/components/reactbits/Reveal';
import { FileCheck, Users, Wallet } from 'lucide-react';
import content from '@/content.json';

const IconMap: { [key: string]: React.ElementType } = {
  FileCheck,
  Users,
  Wallet,
};

export default function SolutionSection() {
  return (
    <section id={content.solution.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-6 text-primary">
            {content.solution.title}
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto mb-16">
            {content.solution.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.solution.items.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <Reveal key={index} delay={0.1 * index + 0.5}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                    {IconComponent && <IconComponent size={36} />}
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-4 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 flex-grow">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
