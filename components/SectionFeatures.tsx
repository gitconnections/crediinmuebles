import React from 'react';
import { Building, ShieldCheck, Handshake, DollarSign, Users, FileText } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';

interface FeatureItem {
  title: string;
  description: string;
}

interface SectionFeaturesProps {
  id: string;
  title: string;
  description?: string;
  items?: FeatureItem[];
  iconType?: 'circle' | 'icon'; // 'circle' for accent circle, 'icon' for lucide icon
}

const getIconComponent = (title: string) => {
  switch (title.toLowerCase()) {
    case 'proyectos seguros y confiables': return ShieldCheck;
    case 'transparencia y plazos': return FileText;
    case 'calidad y valor a largo plazo': return Building;
    case 'revisión documental minuciosa': return FileText;
    case 'equipo multidisciplinario': return Users;
    case 'planes de pago personalizados y flexibles': return DollarSign;
    case 'garantía de satisfacción y respaldo': return Handshake;
    default: return Building;
  }
};

const SectionFeatures: React.FC<SectionFeaturesProps> = ({ id, title, description, items, iconType = 'icon' }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground font-poppins mb-6">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="text-lg text-center text-foreground/70 max-w-3xl mx-auto mb-16">
              {description}
            </p>
          </Reveal>
        )}

        {items && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => {
              const Icon = getIconComponent(item.title);
              return (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {iconType === 'circle' ? (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6 flex-shrink-0">
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                    ) : (
                      <Icon size={40} className="text-primary mb-6 flex-shrink-0" strokeWidth={2} />
                    )}
                    <h3 className="text-xl font-semibold text-foreground font-poppins mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionFeatures;
