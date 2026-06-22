"use client";

import { FileText, Briefcase, Wallet, Award } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

const IconMap: { [key: string]: React.ElementType } = {
  FileText,
  Briefcase,
  Wallet,
  Award,
};

export default function Projects() {
  return (
    <section id={content.projects.id} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8 text-foreground leading-tight">
            {content.projects.title}
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-16 max-w-3xl mx-auto">
            {content.projects.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.projects.items.map((project, index) => {
            const IconComponent = IconMap[project.icon];
            return (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-5">
                    {IconComponent && <IconComponent size={28} strokeWidth={2.5} />}
                  </div>
                  <h3 className="text-lg font-semibold font-poppins mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
