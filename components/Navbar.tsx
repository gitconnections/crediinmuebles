"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import SocialIcon from '@/components/reactbits/SocialIcon';
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

  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold font-heading ${isScrolled ? 'text-primary' : 'text-white'}`}>
          {content.nav.logoText}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ul className={`flex space-x-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-accent transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {whatsappContact && (
            <SocialIcon
              platform={whatsappContact.platform as any}
              value={whatsappContact.value}
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              {content.nav.cta}
            </SocialIcon>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-foreground">
          {content.nav.links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setIsOpen(false)} className="text-lg hover:text-accent transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
          {whatsappContact && (
            <li>
              <SocialIcon
                platform={whatsappContact.platform as any}
                value={whatsappContact.value}
                className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300 mt-4"
              >
                {content.nav.cta}
              </SocialIcon>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
