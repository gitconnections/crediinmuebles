"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import content from '@/content.json';
import SocialIcon from '@/components/SocialIcon';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
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
  const ctaHref = whatsappContact ? `https://wa.me/${whatsappContact.value.replace(/[^0-9]/g, '')}` : '#contacto';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold text-primary font-poppins">
          {content.nav.logoName}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {content.nav.links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-foreground/80 hover:text-primary transition-colors duration-200 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              {link.label}
            </Link>
          ))}
          <SocialIcon
            platform="whatsapp"
            value={whatsappContact?.value || ''}
            className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
          >
            {content.nav.cta}
          </SocialIcon>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
            {isOpen ? <X className={`h-8 w-8 ${isScrolled ? 'text-foreground' : 'text-white'}`} /> : <Menu className={`h-8 w-8 ${isScrolled ? 'text-foreground' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md py-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-4">
            {content.nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <SocialIcon
              platform="whatsapp"
              value={whatsappContact?.value || ''}
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {content.nav.cta}
            </SocialIcon>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
