import { Button } from "@/components/ui/button";
import birdMascot from "@/assets/bird-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Too many tabs.
                <br />
                <span className="text-gradient">One calm place.</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                A cozy nest for your scattered tabs. Collect, organize, and find them whenever you need — without the clutter.
              </p>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button variant="hero" size="lg">
                Add to Chrome — It's free
              </Button>
            </div>
            
            <p 
              className="text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              Also available for Firefox & Edge. No account required.
            </p>
          </div>
          
          {/* Mascot illustration */}
          <div 
            className="flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group cursor-pointer">
              {/* Animated glow rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-primary/20 to-amber/30 rounded-full blur-3xl scale-125 -z-10 animate-pulse-glow" />
              <div className="absolute inset-0 bg-teal/10 rounded-full blur-2xl scale-90 -z-10 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -inset-4 bg-gradient-radial from-amber/10 to-transparent rounded-full blur-xl -z-10 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              
              {/* Main bird image with combined animations */}
              <img 
                src={birdMascot} 
                alt="TabKeep bird mascot holding a basket of tabs" 
                className="relative w-80 md:w-96 lg:w-[450px] animate-bounce-gentle drop-shadow-[0_25px_60px_rgba(0,128,128,0.35)] group-hover:drop-shadow-[0_35px_70px_rgba(0,128,128,0.5)] group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Floating sparkle effects */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-amber rounded-full animate-float opacity-60" style={{ animationDelay: "0.2s" }} />
              <div className="absolute top-20 left-5 w-2 h-2 bg-teal-light rounded-full animate-float opacity-50" style={{ animationDelay: "0.8s" }} />
              <div className="absolute bottom-20 right-5 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1.2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
