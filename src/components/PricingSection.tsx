import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to get started",
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$4",
    period: "month",
    description: "For peaceful browsing",
    cta: "Get Pro",
    featured: true,
  },
  {
    name: "Pro Annual",
    price: "$36",
    period: "year",
    description: "Save $12 (just $3/mo)",
    cta: "Go Annual",
    featured: false,
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "one-time",
    description: "Pay once, own forever",
    cta: "Get Lifetime",
    featured: false,
    limited: true,
  },
];

const features = [
  // Core tab management - Free is usable, Pro is powerful
  { name: "Saved tabs", free: "100", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Tab collections", free: "5", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Devices synced", free: "2", pro: "5", annual: "10", lifetime: "15" },
  
  // Automation - the real upgrade incentive
  { name: "Auto-close timers", free: "1 active", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Auto-group tabs", free: false, pro: true, annual: true, lifetime: true },
  { name: "Schedule tab actions", free: false, pro: true, annual: true, lifetime: true },
  
  // AI features - gives real value, limited for free
  { name: "AI search", free: "10/day", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "AI auto-organize", free: false, pro: true, annual: true, lifetime: true },
  { name: "Smart suggestions", free: false, pro: true, annual: true, lifetime: true },
  
  // Privacy & customization
  { name: "VPN protection", free: "1 location", pro: "All locations", annual: "All locations", lifetime: "All locations" },
  { name: "Custom themes", free: "3 themes", pro: "All themes", annual: "All themes", lifetime: "All themes" },
  
  // Support & extras
  { name: "Tab analytics", free: "Basic", pro: "Full insights", annual: "Full insights", lifetime: "Full insights" },
  { name: "Export your data", free: true, pro: true, annual: true, lifetime: true },
  { name: "Priority support", free: false, pro: true, annual: true, lifetime: true },
  { name: "Early access", free: false, pro: false, annual: true, lifetime: true },
];

const PricingSection = () => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 text-teal" />
        </div>
      ) : (
        <span className="text-muted-foreground/30">—</span>
      );
    }
    return <span className="text-xs text-muted-foreground">{value}</span>;
  };

  return (
    <section id="pricing" className="py-20 md:py-24 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <motion.span 
            className="inline-block text-sm font-medium text-teal uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Simple, honest pricing
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Start free, upgrade when it feels right.
          </p>
        </ScrollReveal>

        {/* Compact Pricing Table */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
            <table className="w-full">
              {/* Header Row */}
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left bg-secondary/20 w-[20%]">
                    <span className="text-xs font-medium text-muted-foreground">Features</span>
                  </th>
                  {plans.map((plan) => (
                    <th 
                      key={plan.name} 
                      className={`p-4 text-center w-[20%] ${plan.featured ? 'bg-primary/5' : ''}`}
                    >
                      {plan.limited && (
                        <div className="flex items-center justify-center gap-1 text-amber text-[10px] font-medium mb-1">
                          <Zap className="w-2.5 h-2.5" />
                          Limited
                        </div>
                      )}
                      {plan.featured && (
                        <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded-full mb-1">
                          Popular
                        </span>
                      )}
                      <div className="font-display text-sm font-bold text-foreground">{plan.name}</div>
                      <div className="mt-1">
                        <span className="text-xl font-display font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground text-[10px]">/{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Rows */}
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={feature.name} className={`border-b border-border/50 ${idx % 2 === 0 ? 'bg-secondary/5' : ''}`}>
                    <td className="px-4 py-2.5 text-sm text-foreground">
                      {feature.name}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {renderCell(feature.free)}
                    </td>
                    <td className={`px-4 py-2.5 text-center ${plans[1].featured ? 'bg-primary/5' : ''}`}>
                      {renderCell(feature.pro)}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {renderCell(feature.annual)}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {renderCell(feature.lifetime)}
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* CTA Row */}
              <tfoot>
                <tr>
                  <td className="p-4 bg-secondary/20" />
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className={`p-4 text-center ${plan.featured ? 'bg-primary/5' : ''}`}
                    >
                      <Button 
                        variant={plan.featured ? "default" : "outline"}
                        size="sm"
                        className={`w-full text-xs ${plan.featured ? 'gradient-primary text-primary-foreground' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>
        
        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Built by someone who was overwhelmed by the internet. We get it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
