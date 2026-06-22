import Reveal from '@/components/reactbits/Reveal';
import SocialIcon from '@/components/reactbits/SocialIcon';
import content from '@/content.json';

export default function ContactSection() {
  return (
    <section id={content.contact.id} className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6 text-primary">
            {content.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-lg sm:text-xl text-foreground/80 mb-12">
            {content.contact.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.contact.items.map((item, index) => (
            <Reveal key={index} delay={0.1 * index + 0.5}>
              <SocialIcon
                platform={item.platform as any}
                value={item.value}
                className="w-full flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-primary/90 transform hover:-translate-y-1 transition-all duration-300"
              >
                {item.label}
              </SocialIcon>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div className="flex justify-center items-center gap-6 mt-8">
            {content.contact.social.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform as any}
                value={social.value}
                className="text-primary hover:text-accent transition-colors duration-300"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
