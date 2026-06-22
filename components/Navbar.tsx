"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import SocialIcon from '@/components/SocialIcon';
import content from '@/content.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappContact = content.contact.contactMethods.find(c => c.platform === 'whatsapp');
  const ctaDestination = whatsappContact ? {
    platform: whatsappContact.platform,
    value: whatsappContact.value,
    label: content.nav.cta
  } : { platform: 'email', value: content.contact.contactMethods.find(c => c.platform === 'email')?.value || '', label: content.nav.cta };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold font-poppins ${isScrolled ? 'text-foreground' : 'text-white'}`} aria-label={content.nav.logoText}>
          {content.nav.logoText}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ul className={`flex space-x-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {ctaDestination.value && (
            <SocialIcon
              platform={ctaDestination.platform as any}
              value={ctaDestination.value}
              className="bg-accent text-white px-6 py-2 rounded-xl hover:bg-accent/90 transition-colors duration-200 font-semibold"
            >
              {ctaDestination.label}
            </SocialIcon>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm py-4">
          <ul className="flex flex-col items-center space-y-4 text-foreground">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-lg hover:text-accent transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {ctaDestination.value && (
              <li>
                <SocialIcon
                  platform={ctaDestination.platform as any}
                  value={ctaDestination.value}
                  className="bg-accent text-white px-6 py-2 rounded-xl hover:bg-accent/90 transition-colors duration-200 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {ctaDestination.label}
                </SocialIcon>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
