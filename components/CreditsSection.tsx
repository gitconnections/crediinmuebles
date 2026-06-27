"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FileSearch, ArrowRight } from 'lucide-react';
import Squares from '@/components/reactbits/Squares';
import Reveal from '@/components/reactbits/Reveal';
import content from '@/content.json';

export default function CreditsSection() {
  const [oscar, fazt] = content.credits.people;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-[#081830] py-20 sm:py-28">
      {/* Dynamic animated grid background (on-palette) */}
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <Squares
          direction="diagonal"
          speed={0.4}
          squareSize={46}
          borderColor="rgba(7, 206, 220, 0.18)"
          hoverFillColor="rgba(7, 206, 220, 0.10)"
          vignetteColor="8, 24, 48"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary ring-1 ring-primary/40">
            {content.credits.eyebrow}
          </span>
          <h2 className="mt-4 font-poppins text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {content.credits.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            {/* Oscar Cortez */}
            <a
              href={oscar.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10 sm:w-auto sm:flex-1"
            >
              <span className="relative inline-block">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <Image
                  src={oscar.image}
                  alt={oscar.name}
                  width={96}
                  height={96}
                  className="relative size-24 rounded-full object-cover ring-2 ring-white/20"
                />
              </span>
              <div>
                <p className="font-poppins text-lg font-bold text-white">{oscar.name}</p>
                <p className="text-sm text-primary">{oscar.role}</p>
              </div>
            </a>

            {/* Connector */}
            <span className="font-poppins text-2xl font-bold text-white/40" aria-hidden="true">
              ×
            </span>

            {/* FaztDeploy */}
            <a
              href={fazt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10 sm:w-auto sm:flex-1"
            >
              <span className="flex size-24 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 transition-colors duration-300 group-hover:bg-white/15">
                <Image
                  src={fazt.logo}
                  alt={fazt.name}
                  width={52}
                  height={52}
                  className="size-12"
                />
              </span>
              <div>
                <p className="font-poppins text-lg font-bold text-white">{fazt.name}</p>
                <p className="text-sm text-primary">{fazt.role}</p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Auditoría del sitio actual */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/[0.07] p-6 text-center backdrop-blur-sm sm:flex-row sm:text-left">
            <FileSearch className="shrink-0 text-primary" size={32} aria-hidden="true" />
            <p className="flex-1 text-sm leading-relaxed text-white/85">
              {content.credits.audit.label}
            </p>
            <Link
              href={content.credits.audit.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/90"
            >
              {content.credits.audit.cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={0.25}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/60">
            {content.credits.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
