"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Hero() {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const ctaHref = whatsappContact ? whatsappContact.value : '#contacto';

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={content.images.heroBackground.src}
        alt={content.images.heroBackground.alt}
        fill
        priority
        className="object-cover"
      />

      {/* Aurora Effect */}
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="lighten"
        amplitude={0.2}
        className="absolute inset-0 opacity-40"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 sm:py-32">
        <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-fade-in-up">
          {content.hero.eyebrow}
        </span>
        <BlurText
          text={content.hero.headline}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-5xl mx-auto mb-6"
          delay={0.2}
          animateBy="words"
        />
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-500">
          {content.hero.subhead}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-700">
          {whatsappContact ? (
            <SocialIcon
              platform={whatsappContact.platform}
              value={ctaHref}
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent/90 transition-colors transform hover:-translate-y-1"
            >
              {content.hero.ctaPrimary}
            </SocialIcon>
          ) : (
            <Link
              href={ctaHref}
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent/90 transition-colors transform hover:-translate-y-1"
            >
              {content.hero.ctaPrimary}
            </Link>
          )}
        </div>

        <Link
          href="#invertir"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-bounce"
          aria-label={content.hero.scrollIndicator}
        >
          <span className="text-sm mb-1">{content.hero.scrollIndicator}</span>
          <ArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
}
