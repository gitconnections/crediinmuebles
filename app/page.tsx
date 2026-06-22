import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvestSection from '@/components/InvestSection';
import ConcernsSection from '@/components/ConcernsSection';
import SolutionSection from '@/components/SolutionSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InvestSection />
        <ConcernsSection />
        <SolutionSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
