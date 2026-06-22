"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        py-4 px-6 lg:px-12`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold font-poppins ${isScrolled ? 'text-primary' : 'text-white'}`}>
          {content.nav.logo}
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
        {/* Mobile menu (optional, can be added later) */}
        <div className="md:hidden">
          {/* Placeholder for a mobile menu button/icon */}
          <button className={`text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>☰</button>
        </div>
      </div>
    </nav>
  );
}
