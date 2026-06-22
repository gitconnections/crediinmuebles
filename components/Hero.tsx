"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import content from '@/content.json';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';
import SocialIcon from '@/components/SocialIcon';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const ctaPrimaryHref = whatsappContact ? whatsappContact.value : '#contacto';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src={content.hero.backgroundImage}
        alt={content.hero.altText}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" aria-hidden="true"></div>

      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend={0.6}
        amplitude={0.7}
        className="opacity-40"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 max-w-5xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-accent/20 px-4 py-1 text-xs sm:text-sm font-semibold text-accent ring-1 ring-inset ring-accent/20 mb-6 animate-fade-in-up">
          {content.hero.eyebrow}
        </span>

        <BlurText
          text={content.hero.headline}
          className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white text-balance max-w-4xl mb-6"
          delay={0.3}
        />

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-500">
          {content.hero.subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-700">
          <SocialIcon
            platform="whatsapp"
            value={ctaPrimaryHref}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            {content.hero.ctaPrimary}
          </SocialIcon>
          <Link
            href="#proyectos"
            className="text-white border border-white/50 hover:border-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            {content.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#proyectos" aria-label="Desplazarse hacia abajo">
          <ChevronDown className="h-8 w-8 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
