"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
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

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="#hero" className="text-2xl font-bold text-foreground font-poppins">
          Crediinmuebles
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-foreground/80">
            <li>
              <Link href="#features" className="hover:text-primary transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#showcase" className="hover:text-primary transition-colors">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#stats" className="hover:text-primary transition-colors">
                Nosotros
              </Link>
            </li>
          </ul>
          <Link
            href="#cta-final"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Cotiza tu lote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
