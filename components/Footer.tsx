import Link from 'next/link';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-3xl font-bold font-heading mb-4 block">
            {content.companyName}
          </Link>
          <p className="text-white/80 text-sm leading-relaxed">
            {content.footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold font-heading mb-4">Navegación</h3>
          <ul className="space-y-3">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white/80 hover:text-accent transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold font-heading mb-4">Contáctanos</h3>
          <ul className="space-y-3">
            {content.contact.items.map((item, index) => (
              <li key={index}>
                <SocialIcon
                  platform={item.platform as any}
                  value={item.value}
                  className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-sm">{item.label.replace('Envíanos un ', '').replace('Escríbenos un ', '').replace('Llámanos por ', '')}</span>
                </SocialIcon>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold font-heading mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            {content.contact.social.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform as any}
                value={social.value}
                className="text-white/80 hover:text-accent transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
