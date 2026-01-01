import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import FloatingLeaves from "./FloatingLeaves";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    period: "/month",
    description: "For peaceful, organized browsing",
    cta: "Get Pro",
    featured: true,
  },
  {
    name: "Pro Annual",
    price: "$36",
    period: "/year",
    description: "Save $12 (just $3/month!)",
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
  { name: "Saved tabs", free: "Up to 50", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Collections", free: "3 (Now, Later, Someday)", pro: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Search", free: "Basic", pro: "Smart search & tags", annual: "Smart search & tags", lifetime: "Smart search & tags" },
  { name: "Devices", free: "1 device", pro: "5 devices", annual: "5 devices", lifetime: "5 devices" },
  { name: "Browsers", free: "Chrome only", pro: "Chrome, Firefox & Edge", annual: "Chrome, Firefox & Edge", lifetime: "Chrome, Firefox & Edge" },
  { name: "AI auto-organize", free: false, pro: true, annual: true, lifetime: true },
  { name: "Auto-close unused tabs", free: false, pro: true, annual: true, lifetime: true },
  { name: "Cross-device sync", free: false, pro: true, annual: true, lifetime: true },
  { name: "Analytics dashboard", free: false, pro: true, annual: true, lifetime: true },
  { name: "Custom themes", free: false, pro: true, annual: true, lifetime: true },
  { name: "Priority support", free: false, pro: true, annual: true, lifetime: "VIP priority" },
  { name: "Export your data", free: false, pro: true, annual: true, lifetime: true },
  { name: "Early access to features", free: false, pro: false, annual: true, lifetime: true },
  { name: "Annual supporter badge", free: false, pro: false, annual: true, lifetime: false },
  { name: "Lock in current price", free: false, pro: false, annual: true, lifetime: true },
  { name: "All future updates", free: false, pro: false, annual: false, lifetime: true },
];

const PricingSection = () => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-teal mx-auto" />
      ) : (
        <span className="text-muted-foreground/40">—</span>
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

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

        {/* Pricing Grid Table */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
            {/* Plan Headers */}
            <div className="grid grid-cols-5 border-b border-border">
              <div className="p-6 bg-secondary/30">
                <span className="text-sm font-medium text-muted-foreground">Compare plans</span>
              </div>
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-6 text-center ${plan.featured ? 'bg-primary/5 border-x-2 border-t-2 border-primary' : ''}`}
                >
                  {plan.limited && (
                    <div className="flex items-center justify-center gap-1 text-amber text-xs font-medium mb-2">
                      <Zap className="w-3 h-3" />
                      Limited time offer
                    </div>
                  )}
                  {plan.featured && (
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
                </div>
              ))}
            </div>

            {/* Features Table */}
            <Table>
              <TableBody>
                {features.map((feature, idx) => (
                  <TableRow key={feature.name} className={idx % 2 === 0 ? 'bg-secondary/10' : ''}>
                    <TableCell className="font-medium text-foreground w-1/5 py-4">
                      {feature.name}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {renderCell(feature.free)}
                    </TableCell>
                    <TableCell className={`text-center py-4 ${plans[1].featured ? 'bg-primary/5 border-x-2 border-primary' : ''}`}>
                      {renderCell(feature.pro)}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {renderCell(feature.annual)}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {renderCell(feature.lifetime)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* CTA Row */}
            <div className="grid grid-cols-5 border-t border-border">
              <div className="p-6 bg-secondary/30" />
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-6 text-center ${plan.featured ? 'bg-primary/5 border-x-2 border-b-2 border-primary rounded-b-lg' : ''}`}
                >
                  <Button 
                    variant={plan.featured ? "default" : "outline"}
                    className={`w-full ${plan.featured ? 'gradient-primary text-primary-foreground' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
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
