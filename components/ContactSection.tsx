"use client";

import SocialIcon from '@/components/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function ContactSection() {
  return (
    <section id={content.contact.id} className="py-24 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-foreground leading-tight">
            {content.contact.title}
          </h2>
        </Reveal>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {content.contact.contactMethods.map((method, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1}>
              <SocialIcon
                platform={method.platform as any}
                value={method.value}
                className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                {method.label}
              </SocialIcon>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="text-lg text-foreground/70 mb-8">O síguenos en nuestras redes:</p>
          <div className="flex justify-center gap-6">
            {content.contact.socialMedia.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform as any}
                value={social.value}
                className="text-foreground/70 hover:text-primary transition-colors"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
