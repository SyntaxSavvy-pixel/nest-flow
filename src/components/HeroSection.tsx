import { Button } from "@/components/ui/button";
import birdMascotVideo from "@/assets/bird-hero.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-white dark:bg-white">
      
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
              {/* Animated bird video */}
              <video 
                src={birdMascotVideo} 
                autoPlay
                muted
                playsInline
                className="relative w-80 md:w-96 lg:w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
