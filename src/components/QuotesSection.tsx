import { motion } from "framer-motion";
import FloatingLeaves from "./FloatingLeaves";

const quotes = [
  {
    text: "Clarity is a form of productivity.",
    emphasis: "Clarity",
  },
  {
    text: "You don't need more tabs. You need peace.",
    emphasis: "peace",
  },
  {
    text: "Organize later. Focus now.",
    emphasis: "Focus now",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const QuotesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-dark relative overflow-hidden">
      <FloatingLeaves count={3} />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {quotes.map((quote, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6"
                variants={itemVariants}
              >
                <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{quote.text.split(quote.emphasis).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-gradient not-italic font-semibold">{quote.emphasis}</span>
                      )}
                    </span>
                  ))}"
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
