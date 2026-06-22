import React from 'react';
import content from '@/content.json';
import SocialIcon from '@/components/SocialIcon';
import Reveal from '@/components/reactbits/Reveal';

const SectionContact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground font-poppins mb-6">
            {content.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            {content.contact.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {content.contact.items.map((item, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <SocialIcon
                platform={item.platform}
                value={item.value}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg h-full"
              >
                <span className="text-xl font-semibold mt-3 font-poppins">{item.label}</span>
              </SocialIcon>
            </Reveal>
          ))}
        </div>

        {content.contact.social.length > 0 && (
          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <h3 className="text-2xl font-semibold text-foreground font-poppins mb-6">Síguenos en nuestras redes</h3>
              <div className="flex justify-center gap-6">
                {content.contact.social.map((social, index) => (
                  <SocialIcon
                    key={index}
                    platform={social.platform}
                    value={social.value}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default SectionContact;
