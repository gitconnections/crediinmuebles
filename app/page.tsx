import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Investment from '@/components/Investment';
import Stats from '@/components/Stats';
import Challenges from '@/components/Challenges';
import Solution from '@/components/Solution';
import Projects from '@/components/Projects';
import Showcase from '@/components/Showcase';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Investment />
        <Stats />
        <Challenges />
        <Solution />
        <Projects />
        <Showcase />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
};
