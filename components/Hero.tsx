"use client";

import Image from 'next/image';
import Link from 'next/link';
import BlurText from '@/components/reactbits/BlurText';
import Aurora from '@/components/reactbits/Aurora';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/01-x7nfwr.png"
        alt="Terreno con paisaje montañoso y cielo azul"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/70 to-accent/60 -z-10"></div>
      <Aurora
        colorStops={['#07cedc', '#0c4c8a', '#d83a3a']}
        blend="multiply"
        amplitude={0.5}
        className="absolute inset-0 -z-20 opacity-30"
      />

      <div className="relative z-10 text-white p-6 max-w-4xl mx-auto">
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
          Inmobiliaria
        </span>
        <h1 className="text-6xl md:text-7xl font-bold font-poppins tracking-tight mb-6 leading-tight">
          <BlurText text="Con un lote siempre ganas" animateBy="words" delay={0.2} className="text-white" />
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-inter max-w-2xl mx-auto opacity-90">
          Compre un lote o terreno con seguridad y confiabilidad
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#cta-final"
            className="px-10 py-4 bg-accent text-white font-semibold text-lg rounded-lg shadow-xl hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Cotiza tu lote
          </Link>
          <Link
            href="#features"
            className="px-10 py-4 bg-white/20 text-white font-semibold text-lg rounded-lg border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explora nuestros proyectos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
