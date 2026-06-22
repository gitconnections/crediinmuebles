'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1696537970979-40a1eb9901c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODMwNDJ8MHwxfHNlYXJjaHwxfHxJbm1vYmlsaWFyaWElMjB0ZXJyZW5vcyUyMEludmllcnRlJTIwY29uJTIwY29uZmlhbnphJTIwZW4lMjB0ZXJyZW5vcyUyMHklMjBwcm95ZWN0b3MlMjBpbm1vYmlsaWFyaW9zfGVufDF8MHx8fDE3ODIxMzkxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Vista aérea de una ciudad con muchos edificios y áreas verdes, simbolizando inversión inmobiliaria."
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-10"></div>

      {/* Aurora Background (Subtle) */}
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="multiply"
        amplitude={0.1}
        className="absolute inset-0 opacity-40 z-20"
      />

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-md">
          Inmobiliaria
        </span>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 font-poppins leading-tight">
          <BlurText text="Con un lote siempre ganas" delay={0.2} animateBy="words" className="text-white" />
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Compre un lote o terreno con seguridad y confiabilidad, asegurando su futuro con inversiones sólidas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#cta"
            className="px-10 py-4 bg-accent text-white rounded-[10px] text-lg font-semibold shadow-xl hover:bg-accent/90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Cotiza tu lote
          </Link>
          <Link
            href="#features"
            className="px-10 py-4 border border-white text-white rounded-[10px] text-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Conoce más
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown size={36} className="text-white opacity-75" />
      </div>
    </section>
  );
}
