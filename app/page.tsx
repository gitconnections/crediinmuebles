import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Stats } from '@/components/Stats';
import { Solutions } from '@/components/Solutions';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Solutions />
        <ProjectsShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
