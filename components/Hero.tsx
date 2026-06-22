"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';
import SocialIcon from '@/components/SocialIcon';
import content from '@/content.json';

export default function Hero() {
  const whatsappContact = content.contact.contactMethods.find(c => c.platform === 'whatsapp');
  const ctaPrimaryDestination = whatsappContact ? {
    platform: whatsappContact.platform,
    value: whatsappContact.value,
    label: content.hero.ctaPrimary
  } : { platform: 'email', value: content.contact.contactMethods.find(c => c.platform === 'email')?.value || '', label: content.hero.ctaPrimary };

  const ctaSecondaryDestination = whatsappContact ? {
    platform: whatsappContact.platform,
    value: whatsappContact.value,
    label: content.hero.ctaSecondary
  } : { platform: 'email', value: content.contact.contactMethods.find(c => c.platform === 'email')?.value || '', label: content.hero.ctaSecondary };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src={content.hero.heroImage.src}
        alt={content.hero.heroImage.alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" aria-hidden="true"></div>

      <Aurora
        colorStops={[content.colors.primary, content.colors.secondary, content.colors.accent]}
        blend={0.5}
        amplitude={0.2}
        className="absolute inset-0 opacity-40"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up delay-100">
          {content.hero.eyebrow}
        </span>
        <BlurText
          text={content.hero.headline}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-balance"
          delay={0.2}
          animateBy="words"
        />
        <p className="text-lg sm:text-xl mb-10 max-w-2xl text-white/90 animate-fade-in-up delay-700">
          {content.hero.subhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-900">
          {ctaPrimaryDestination.value && (
            <SocialIcon
              platform={ctaPrimaryDestination.platform as any}
              value={ctaPrimaryDestination.value}
              className="bg-accent text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
            >
              {ctaPrimaryDestination.label}
            </SocialIcon>
          )}
          {ctaSecondaryDestination.value && (
            <SocialIcon
              platform={ctaSecondaryDestination.platform as any}
              value={ctaSecondaryDestination.value}
              className="bg-white/10 text-white px-8 py-3 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors shadow-lg"
            >
              {ctaSecondaryDestination.label}
            </SocialIcon>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#inversion" className="text-white text-2xl" aria-label="Scroll down">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
}
