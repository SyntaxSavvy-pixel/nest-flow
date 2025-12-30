import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import FloatingLeaves from "./FloatingLeaves";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Perfect to get started",
    features: [
      "Save up to 100 tabs",
      "3 collections (Now, Later, Someday)",
      "Basic search",
      "Chrome, Firefox & Edge",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Calm",
    price: "4",
    period: "/month",
    description: "For peaceful browsing",
    features: [
      "Unlimited tabs",
      "Unlimited collections",
      "Smart search & tags",
      "Auto-organize by topic",
      "Cross-device sync",
      "Priority support",
    ],
    cta: "Get Calm",
    featured: true,
  },
  {
    name: "Yearly",
    price: "36",
    period: "/year",
    description: "Save 25% — best value",
    features: [
      "Everything in Calm",
      "2 months free",
      "Early access to features",
      "Annual supporter badge",
    ],
    cta: "Go Yearly",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
      <FloatingLeaves count={5} overlay />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-block text-sm font-medium text-teal uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free, upgrade when it feels right. No tricks, no hidden fees.
          </p>
        </ScrollReveal>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <TiltCard tiltIntensity={plan.featured ? 5 : 7}>
                <div 
                  className={`relative p-8 rounded-2xl transition-all duration-300 h-full ${
                    plan.featured 
                      ? 'gradient-primary text-primary-foreground shadow-medium' 
                      : 'bg-card border border-border shadow-soft'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber text-charcoal text-sm font-semibold rounded-full">
                      Most popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className={`font-display text-xl font-bold mb-2 ${plan.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-display font-bold ${plan.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                        ${plan.price}
                      </span>
                      <span className={plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-amber' : 'text-teal'}`} />
                        <span className={`text-sm ${plan.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.featured ? "outline" : "default"}
                    className={`w-full ${plan.featured ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
        
        <ScrollReveal delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Built by someone who was overwhelmed by the internet. We get it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
