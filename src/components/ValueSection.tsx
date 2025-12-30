import { Heart, Search, Smile } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import FloatingLeaves from "./FloatingLeaves";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Collect tabs without stress",
    description: "One click saves any tab to your nest. No pressure, no complicated folders — just peace of mind.",
  },
  {
    icon: Search,
    title: "Find them instantly later",
    description: "Smart search finds what you saved, even if you forgot the name. Your tabs remember for you.",
  },
  {
    icon: Smile,
    title: "Feel lighter when closing",
    description: "Close 50 tabs without anxiety. They're safe in your nest, waiting for when you need them.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ValueSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <FloatingLeaves count={4} />
      
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-block text-sm font-medium text-teal uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why choose us
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why your tabs love TabKeep
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for people who open just one more tab and end up with thirty. We get it.
          </p>
        </ScrollReveal>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div key={value.title} variants={itemVariants}>
              <TiltCard tiltIntensity={6}>
                <div className="group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-500 h-full">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="w-7 h-7 text-teal" />
                  </motion.div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
