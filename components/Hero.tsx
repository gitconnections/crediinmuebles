"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BlurText } from '@/components/reactbits/BlurText';
import { Aurora } from '@/components/reactbits/Aurora';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden rounded-bl-[10px] rounded-br-[10px]">
      <Image
        src="https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/01-x7nfwr.png"
        alt="Terreno con vista al mar y casa moderna"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0c4c8a] to-[#07cedc] opacity-70"></div>
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="soft-light"
        amplitude={0.2}
        className="absolute inset-0 z-20 opacity-30"
      />

      <div className="relative z-30 flex flex-col items-center justify-center p-8 max-w-4xl mx-auto">
        <span className="inline-block bg-[#d83a3a] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-md">
          Inmobiliaria
        </span>
        <h1 className="text-6xl md:text-7xl font-bold font-poppins tracking-tight mb-6 drop-shadow-lg leading-tight">
          <BlurText text="Con un lote siempre ganas" delay={0.1} animateBy="words" className="text-white" />
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-inter drop-shadow-md">
          Compre un lote o terreno con seguridad y confiabilidad
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#cta"
            className="px-10 py-5 bg-[#07cedc] text-white text-xl font-semibold rounded-[10px] shadow-xl hover:bg-[#0c4c8a] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Cotiza tu lote
          </Link>
          <Link
            href="#features"
            className="px-10 py-5 border-2 border-white text-white text-xl font-semibold rounded-[10px] shadow-xl hover:bg-white hover:text-[#0c4c8a] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Explora proyectos
          </Link>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
