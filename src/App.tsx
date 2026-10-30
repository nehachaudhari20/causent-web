import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import IndustrySignals from '@/components/IndustrySignals';
import SolutionSection from '@/components/SolutionSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <IndustrySignals />
        <SolutionSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
