import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function FinalCta() {
  const whatsappContact = content.contact.items.find(item => item.platform === 'whatsapp');

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-8">
          {content.finalCta.title}
        </h2>
        {whatsappContact && (
          <SocialIcon
            platform={whatsappContact.platform as any}
            value={whatsappContact.value}
            className="inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-4 rounded-lg font-semibold text-xl shadow-lg hover:bg-accent/90 transform hover:-translate-y-1 transition-all duration-300"
          >
            {content.finalCta.cta}
          </SocialIcon>
        )}
      </div>
    </section>
  );
}
