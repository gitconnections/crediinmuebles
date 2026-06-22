import React from 'react';
import Link from 'next/link';
import content from '@/content.json';
import SocialIcon from '@/components/SocialIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-full md:col-span-1">
          <Link href="#" className="text-3xl font-bold text-primary font-poppins mb-4 block">
            {content.nav.logoName}
          </Link>
          <p className="text-white/80 leading-relaxed">
            {content.footer.tagline}
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold font-poppins mb-6">Navegación</h3>
          <ul className="space-y-3">
            {content.footer.nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold font-poppins mb-6">Contacto</h3>
          <div className="flex flex-wrap gap-6 mb-8">
            {content.footer.social.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform}
                value={social.value}
                className="text-white/80 hover:text-primary transition-colors duration-200"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/20 text-center">
        <p className="text-white/60 text-sm">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
