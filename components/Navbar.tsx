"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Solid navbar only once the hero is fully scrolled past (i.e. we're into
    // the second section). The hero is the first <section> on the page.
    const hero = document.querySelector('section');
    if (!hero) return;

    const navbarHeight = 72; // approx fixed navbar height
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: `-${navbarHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');

  // Solid styling when scrolled OR when the mobile menu is open
  const isSolid = isScrolled || isMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isSolid ? 'bg-gray-200/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        py-4 px-6 lg:px-12`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-poppins uppercase tracking-wide" aria-label={content.nav.logo}>
          <span className={isSolid ? 'text-secondary' : 'text-white'}>Credi</span>
          <span className="text-primary">Inmuebles</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-lg font-semibold transition-colors hover:text-accent
                    ${isScrolled ? 'text-foreground' : 'text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {whatsappContact && (
            <SocialIcon
              platform={whatsappContact.platform}
              value={whatsappContact.value}
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              {content.nav.cta}
            </SocialIcon>
          )}
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`text-2xl leading-none ${isSolid ? 'text-foreground' : 'text-white'}`}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col space-y-4 pt-2 pb-4">
          {content.nav.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-semibold text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {whatsappContact && (
          <SocialIcon
            platform={whatsappContact.platform}
            value={whatsappContact.value}
            className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            {content.nav.cta}
          </SocialIcon>
        )}
      </div>
    </nav>
  );
}
