import React from 'react';
import Link from 'next/link';
import content from '@/content.json';
import SocialIcon from '@/components/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';
import Aurora from '@/components/reactbits/Aurora';

const SectionFinalCta: React.FC = () => {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const ctaHref = whatsappContact ? whatsappContact.value : '#contacto';

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend={0.5}
        amplitude={0.6}
        className="opacity-30"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 max-w-4xl mx-auto">
            {content.finalCta.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            {content.finalCta.description}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <SocialIcon
            platform="whatsapp"
            value={ctaHref}
            className="inline-flex bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-colors duration-200 shadow-xl"
          >
            {content.finalCta.cta}
          </SocialIcon>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionFinalCta;
