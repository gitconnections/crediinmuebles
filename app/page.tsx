import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <StatsSection />
        <ProblemSolutionSection />
        <ShowcaseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
