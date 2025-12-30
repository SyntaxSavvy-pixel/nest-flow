import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import QuotesSection from "@/components/QuotesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxLines from "@/components/ParallaxLines";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxLines />
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <QuotesSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
