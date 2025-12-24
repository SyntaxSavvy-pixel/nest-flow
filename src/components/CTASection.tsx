import { Button } from "@/components/ui/button";
import birdMascot from "@/assets/bird-hero.png";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section id="download" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="none">
            <div className="mb-8">
              <img 
                src={birdMascot} 
                alt="TabKeep bird mascot" 
                className="w-32 h-32 mx-auto animate-float-slow object-contain"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready for a calmer browser?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands who've found peace with their tabs. It takes 10 seconds to start.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Add to Chrome — Free
              </Button>
              <Button variant="outline" size="lg">
                Other Browsers
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
