import { MousePointer, Feather, FolderOpen } from "lucide-react";
import birdFlying from "@/assets/bird-flying.png";
import birdCollecting from "@/assets/bird-collecting.png";
import nestWithTabs from "@/assets/nest-with-tabs.png";
import ScrollReveal from "./ScrollReveal";
import FloatingLeaves from "./FloatingLeaves";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Open a tab",
    description: "Browse like normal. When you find something worth keeping, you'll know.",
    illustration: birdFlying,
  },
  {
    number: "02",
    icon: Feather,
    title: "Bird collects it",
    description: "One click, and our friendly bird swoops in to save your tab. No fuss.",
    illustration: birdCollecting,
  },
  {
    number: "03",
    icon: FolderOpen,
    title: "Safe in your nest",
    description: "Your tabs rest in organized groups — Now, Later, Someday. Ready when you are.",
    illustration: nestWithTabs,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <FloatingLeaves count={5} />
      
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <motion.span 
            className="inline-block text-sm font-medium text-teal uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple & intuitive
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to digital peace
          </p>
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={step.number}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div 
                      className="inline-flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="text-6xl font-display font-bold text-teal/15">
                        {step.number}
                      </span>
                      <motion.div 
                        className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                    </motion.div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Illustration with 3D Tilt */}
                  <div className="flex-1 flex justify-center w-full">
                    <TiltCard 
                      className="w-full max-w-md"
                      tiltIntensity={8}
                    >
                      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cream to-cream-dark border border-border/30 shadow-soft">
                        <motion.img 
                          src={step.illustration} 
                          alt={step.title}
                          className="w-full max-w-[280px] mx-auto drop-shadow-lg"
                          style={{ transform: "translateZ(50px)" }}
                        />
                      </div>
                    </TiltCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
