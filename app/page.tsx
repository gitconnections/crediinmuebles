import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvestSection from '@/components/InvestSection';
import StatsSection from '@/components/StatsSection';
import ConcernsSection from '@/components/ConcernsSection';
import SolutionSection from '@/components/SolutionSection';
import ProjectsSection from '@/components/ProjectsSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import CreditsSection from '@/components/CreditsSection';
import LoteamientoSection from '@/components/LoteamientoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <InvestSection />
        <StatsSection />
        <ConcernsSection />
        <SolutionSection />
        <ProjectsSection />
        <ShowcaseSection />
        <ContactSection />
        <FinalCta />
      </main>
      <CreditsSection />
      <LoteamientoSection />
      <Footer />
    </div>
  );
}
