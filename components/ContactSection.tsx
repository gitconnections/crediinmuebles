"use client";

import SocialIcon from '@/components/reactbits/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function ContactSection() {
  return (
    <section id={content.contact.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins mb-8 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto text-primary">
            {content.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-foreground/80 mb-16">
            {content.contact.description}
          </p>
        </Reveal>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {content.contact.items.map((item, index) => (
            <Reveal key={item.platform} delay={0.3 + index * 0.1}>
              <SocialIcon
                platform={item.platform}
                value={item.value}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors transform hover:-translate-y-1"
              >
                {item.label}
              </SocialIcon>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="flex justify-center gap-4 text-primary">
            {content.contact.socials.map((social, index) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                value={social.value}
                className="text-primary hover:text-accent transition-colors"
                size={32}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
