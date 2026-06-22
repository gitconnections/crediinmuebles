"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Hero() {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const primaryColor = content.colors.primary;
  const secondaryColor = content.colors.secondary;

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={content.hero.backgroundImage.src}
        alt={content.hero.backgroundImage.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-10"></div>

      {/* Aurora Background (subtle layer) */}
      <Aurora
        colorStops={[primaryColor, secondaryColor, primaryColor]}
        className="absolute inset-0 opacity-40 z-20"
        blend="lighten"
        amplitude={0.1}
      />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 py-24 sm:py-32 max-w-5xl mx-auto">
        <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in delay-200">
          {content.hero.eyebrow}
        </span>

        <BlurText
          text={content.hero.headline}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-4xl text-balance"
          delay={0.3}
          animateBy="words"
        />

        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl animate-fade-in delay-700">
          {content.hero.subhead}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-900">
          {whatsappContact && (
            <SocialIcon
              platform={whatsappContact.platform as any}
              value={whatsappContact.value}
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-accent/90 transform hover:-translate-y-1 transition-all duration-300"
            >
              {content.hero.ctaPrimary}
            </SocialIcon>
          )}
          <Link
            href="#invierte"
            className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            Descubre más
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce delay-1000">
          <span className="text-sm mb-2">{content.hero.scrollIndicator}</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
