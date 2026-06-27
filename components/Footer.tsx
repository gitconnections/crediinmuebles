import Link from 'next/link';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="col-span-full lg:col-span-1 text-center md:text-left">
          <Link href="/" className="text-3xl font-bold font-poppins uppercase tracking-wide mb-4 block" aria-label={content.footer.logo}>
            <span className="text-gray-100">Credi</span>
            <span className="text-primary">Inmuebles</span>
          </Link>
          <p className="text-white/80 leading-relaxed max-w-xs mx-auto md:mx-0">
            {content.footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold font-poppins mb-6 text-primary">Navegación</h3>
          <ul className="space-y-3">
            {content.footer.nav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-accent transition-colors text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold font-poppins mb-6 text-primary">Contacto</h3>
          <ul className="space-y-3">
            {content.contact.items.map((item) => (
              <li key={item.platform}>
                <SocialIcon
                  platform={item.platform}
                  value={item.value}
                  className="text-white/80 hover:text-accent transition-colors text-lg inline-flex items-center gap-2"
                >
                  {item.label}
                </SocialIcon>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold font-poppins mb-6 text-primary">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {content.contact.socials.map((social) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                value={social.value}
                className="text-white/80 hover:text-accent transition-colors"
                size={28}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
