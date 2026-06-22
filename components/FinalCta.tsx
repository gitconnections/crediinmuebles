"use client";

import SocialIcon from '@/components/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function FinalCta() {
  const whatsappContact = content.contact.contactMethods.find(c => c.platform === 'whatsapp');
  const ctaDestination = whatsappContact ? {
    platform: whatsappContact.platform,
    value: whatsappContact.value,
    label: content.finalCta.cta
  } : { platform: 'email', value: content.contact.contactMethods.find(c => c.platform === 'email')?.value || '', label: content.finalCta.cta };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
            {content.finalCta.headline}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {content.finalCta.subhead}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          {ctaDestination.value && (
            <SocialIcon
              platform={ctaDestination.platform as any}
              value={ctaDestination.value}
              className="bg-accent text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-accent/90 transition-colors shadow-lg inline-flex items-center gap-3"
            >
              {ctaDestination.label}
            </SocialIcon>
          )}
        </Reveal>
      </div>
    </section>
  );
}
