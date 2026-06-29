"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import SocialIcon from '@/components/reactbits/SocialIcon';
import HeroShowcase from '@/components/loteamiento/HeroShowcase';
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

      {/* Gray frosted blur over the photo so the background stays subtle */}
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-slate-700/65 to-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:py-28 lg:grid-cols-2 lg:gap-12">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-fade-in-up">
            {content.hero.eyebrow}
          </span>
          <BlurText
            text={content.hero.headline}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6"
            delay={0.2}
            animateBy="words"
          />
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-500">
            {content.hero.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-700">
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
            <Link
              href="/loteamiento"
              className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Ver mapa de lotes
            </Link>
          </div>
        </div>

        {/* Right: interactive showcase */}
        <div className="w-full animate-fade-in-up animation-delay-700">
          <HeroShowcase />
        </div>
      </div>

      {/* Scroll indicator — pinned to the viewport bottom, legible over the photo */}
      <Link
        href="#invertir"
        className="group absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1 text-white [text-shadow:0_1px_4px_rgb(0_0_0/0.6)] transition-colors hover:text-accent"
        aria-label={content.hero.scrollIndicator}
      >
        <span className="text-sm font-medium">{content.hero.scrollIndicator}</span>
        <span className="flex size-9 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/40 backdrop-blur-sm animate-bounce drop-shadow">
          <ArrowDown size={20} aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
