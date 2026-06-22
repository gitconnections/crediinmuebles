import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function InvestSection() {
  return (
    <section id={content.invest.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6 text-primary">
            {content.invest.title}
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            {content.invest.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
