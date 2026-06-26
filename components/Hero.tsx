"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Hero() {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');
  const ctaHref = whatsappContact ? whatsappContact.value : '#contacto';

  // Flatter aurora waves on mobile; fuller on larger screens.
  const [auroraAmplitude, setAuroraAmplitude] = useState(0.2);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setAuroraAmplitude(mq.matches ? 0.2 : 0.06);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

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
        colorStops={['#07cedc', '#0c4c8a', '#b45309']}
        blend="lighten"
        amplitude={auroraAmplitude}
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

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-700">
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
