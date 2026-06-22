'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary font-poppins">
          Crediinmuebles
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#cta"
            className="px-6 py-3 bg-primary text-white rounded-[10px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            Cotiza tu lote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold text-lg py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="w-fit px-8 py-4 bg-primary text-white rounded-[10px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg mt-4"
            >
              Cotiza tu lote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
