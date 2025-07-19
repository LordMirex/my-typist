
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="animate-fade-in">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
