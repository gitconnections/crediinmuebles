import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import Stats from '@/components/Stats';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Reveal from '@/components/reactbits/Reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="intro-text" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-8 leading-tight">
                Invierte con confianza en terrenos y proyectos inmobiliarios
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. Nuestros proyectos son diseñados para satisfacer tus necesidades y superar tus expectativas. Con un lote siempre ganas: seguridad, confiabilidad y respaldo.
              </p>
            </Reveal>
          </div>
        </section>

        <Features />

        <section id="concerns" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-8 leading-tight">
                ¿Qué te preocupa al invertir en un proyecto inmobiliario?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                La dificultad para encontrar proyectos seguros y confiables, el miedo a la falta de transparencia en la documentación y al incumplimiento de los plazos de entrega, y la preocupación por la calidad de la construcción y el valor a largo plazo de la inversión. Estos son algunos de los desafíos que enfrentas al invertir en un proyecto inmobiliario.
              </p>
            </Reveal>
          </div>
        </section>

        <Showcase />
        <Stats />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
