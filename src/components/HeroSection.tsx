import { Button } from "@/components/ui/button";
import birdMascotVideo from "@/assets/bird-hero.mp4";
import { motion } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-white dark:bg-white">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <motion.h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Too many tabs.
                <br />
                <span className="text-gradient">One calm place.</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                A cozy nest for your scattered tabs. Collect, organize, and find them whenever you need — without the clutter.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button variant="hero" size="lg">
                Add to Chrome — It's free
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Also available for Firefox & Edge. No account required.
            </motion.p>
          </div>
          
          {/* Mascot illustration */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
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
          </motion.div>
        </div>
        
        {/* Video showcase placeholder */}
        <motion.div 
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <VideoPlaceholder 
            aspectRatio="16:9"
            label="See TabKeep in action"
            className="max-w-4xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
