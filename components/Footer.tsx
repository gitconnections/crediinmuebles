import Link from 'next/link';
import SocialIcon from '@/components/SocialIcon';
import content from '@/content.json';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="col-span-full md:col-span-1">
            <Link href="/" className="text-3xl font-bold font-poppins mb-4 block hover:text-primary transition-colors">
              {content.nav.logoText}
            </Link>
            <p className="text-white/70 text-sm">
              {content.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6 text-white">Navegación</h3>
            <ul className="space-y-3">
              {content.footer.nav.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold font-poppins mb-6 text-white">Contacto y Redes</h3>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {content.footer.social.map((social, index) => (
                <SocialIcon
                  key={index}
                  platform={social.platform as any}
                  value={social.value}
                  className="text-white/70 hover:text-primary transition-colors text-2xl"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-white/50 text-sm">
          {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
