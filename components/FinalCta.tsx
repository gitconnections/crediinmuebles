"use client";

import Link from 'next/link';
import SocialIcon from '@/components/reactbits/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function FinalCta() {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const ctaHref = whatsappContact ? whatsappContact.value : '#contacto';

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold font-poppins mb-12 tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            {content.finalCta.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          {whatsappContact ? (
            <SocialIcon
              platform={whatsappContact.platform}
              value={ctaHref}
              className="inline-flex bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:bg-accent/90 transition-colors transform hover:-translate-y-1"
            >
              {content.finalCta.ctaText}
            </SocialIcon>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:bg-accent/90 transition-colors transform hover:-translate-y-1"
            >
              {content.finalCta.ctaText}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
