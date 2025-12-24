import { MousePointer, Feather, FolderOpen } from "lucide-react";
import birdFlying from "@/assets/bird-flying.png";
import nestWithTabs from "@/assets/nest-with-tabs.png";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Open a tab",
    description: "Browse like normal. When you find something worth keeping, you'll know.",
    illustration: null,
  },
  {
    number: "02",
    icon: Feather,
    title: "Bird collects it",
    description: "One click, and our friendly bird swoops in to save your tab. No fuss.",
    illustration: birdFlying,
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
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to digital peace
          </p>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={step.number}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <span className="text-5xl font-display font-bold text-teal/20">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground max-w-md">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Illustration */}
                  <div className="flex-1 flex justify-center">
                    {step.illustration ? (
                      <img 
                        src={step.illustration} 
                        alt={step.title}
                        className="w-48 md:w-64 drop-shadow-lg"
                      />
                    ) : (
                      <div className="w-48 md:w-64 h-48 md:h-64 rounded-2xl bg-cream-dark border border-border flex items-center justify-center">
                        <div className="w-32 h-20 rounded-lg border-2 border-dashed border-teal/30 flex items-center justify-center">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-teal/40" />
                            <div className="w-3 h-3 rounded-full bg-amber/40" />
                            <div className="w-3 h-3 rounded-full bg-teal/40" />
                          </div>
                        </div>
                      </div>
                    )}
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
