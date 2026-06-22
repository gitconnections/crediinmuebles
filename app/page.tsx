import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionFeatures from '@/components/SectionFeatures';
import SectionStats from '@/components/SectionStats';
import SectionShowcase from '@/components/SectionShowcase';
import SectionContact from '@/components/SectionContact';
import SectionFinalCta from '@/components/SectionFinalCta';
import Footer from '@/components/Footer';
import content from '@/content.json';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionFeatures
          id="inversion-confianza"
          title={content.features.section1.title}
          description={content.features.section1.description}
        />
        <SectionFeatures
          id="desafios"
          title={content.features.section3.title}
          description={content.features.section3.description}
          items={content.features.section3.items}
          iconType="circle"
        />
        <SectionFeatures
          id="soluciones"
          title={content.features.section4.title}
          description={content.features.section4.description}
          items={content.features.section4.items}
          iconType="icon"
        />
        <SectionShowcase />
        <SectionFeatures
          id="proyectos-caracteristicas"
          title={content.features.section5.title}
          description={content.features.section5.description}
          items={content.features.section5.items}
          iconType="circle"
        />
        <SectionStats />
        <SectionContact />
        <SectionFinalCta />
      </main>
      <Footer />
    </>
  );
}
