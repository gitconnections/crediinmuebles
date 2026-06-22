"use client";

import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function InvestSection() {
  return (
    <section id={content.invest.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins text-center mb-8 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto text-primary">
            {content.invest.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-foreground/80">
            {content.invest.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
