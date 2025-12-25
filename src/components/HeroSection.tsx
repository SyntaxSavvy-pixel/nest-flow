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
            <div className="relative group">
              {/* Glow effect behind bird */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-primary/10 to-amber/20 rounded-full blur-3xl scale-110 -z-10 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 bg-teal/5 rounded-full blur-2xl scale-75 -z-10 animate-pulse" />
              <img 
                src={birdMascot} 
                alt="TabKeep bird mascot holding a basket of tabs" 
                className="relative w-80 md:w-96 lg:w-[450px] animate-float-slow drop-shadow-[0_20px_50px_rgba(0,128,128,0.3)] hover:drop-shadow-[0_30px_60px_rgba(0,128,128,0.4)] transition-all duration-500"
                style={{ filter: "contrast(1.02) saturate(1.1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
