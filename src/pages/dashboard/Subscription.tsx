import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to get started",
    cta: "Current Plan",
    current: true,
  },
  {
    name: "Pro",
    price: "$4",
    period: "month",
    description: "For peaceful, organized browsing",
    cta: "Upgrade",
    featured: true,
  },
  {
    name: "Pro Annual",
    price: "$36",
    period: "year",
    description: "Save $12 (just $3/month!)",
    cta: "Upgrade",
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "one-time",
    description: "Pay once, own forever",
    cta: "Get Lifetime",
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

const Subscription = () => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-4 h-4 text-teal" />
      ) : (
        <span className="text-muted-foreground/40">—</span>
      );
    }
    return <span className="text-[11px] md:text-xs text-muted-foreground">{value}</span>;
  };

  return (
    <DashboardLayout title="Subscription" subtitle="Manage your plan and billing">
      <div className="space-y-8">
        {/* Current Plan Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl gradient-primary text-primary-foreground"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Plan</p>
              <h2 className="text-2xl font-display font-bold">Free Plan</h2>
              <p className="text-sm opacity-80 mt-1">You're using 23 of 50 tabs</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-display font-bold">46%</p>
              <p className="text-sm opacity-80">capacity used</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Grid Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden min-w-[600px]">
            {/* Plan Headers */}
            <div className="grid grid-cols-5">
              <div className="p-3 md:p-4 bg-secondary/30 border-b border-border flex items-center">
                <span className="text-xs md:text-sm font-medium text-muted-foreground">Compare plans</span>
              </div>
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-3 md:p-4 text-center border-b border-border flex flex-col items-center justify-center ${plan.featured ? 'bg-primary/5 border-x-2 border-t-2 border-primary' : ''} ${plan.current ? 'bg-secondary/20' : ''}`}
                >
                  {plan.featured && (
                    <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-medium rounded-full mb-1">
                      Popular
                    </span>
                  )}
                  {plan.current && (
                    <span className="inline-block px-2 py-0.5 bg-secondary text-foreground text-[10px] md:text-xs font-medium rounded-full mb-1">
                      Current
                    </span>
                  )}
                  <h3 className="font-display text-xs md:text-base font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-0.5 md:mt-1">
                    <span className="text-lg md:text-2xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">/{plan.period}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 hidden md:block">{plan.description}</p>
                </div>
              ))}
            </div>

            {/* Features Table */}
            <Table>
              <TableBody>
                {features.map((feature, idx) => (
                  <TableRow key={feature.name} className={idx % 2 === 0 ? 'bg-secondary/5' : ''}>
                    <TableCell className="font-medium text-foreground w-[20%] py-2 md:py-3 px-3 md:px-4 text-[11px] md:text-sm">
                      {feature.name}
                    </TableCell>
                    <TableCell className={`w-[20%] py-2 md:py-3 px-2 ${plans[0].current ? 'bg-secondary/10' : ''}`}>
                      <div className="flex items-center justify-center">
                        {renderCell(feature.free)}
                      </div>
                    </TableCell>
                    <TableCell className={`w-[20%] py-2 md:py-3 px-2 ${plans[1].featured ? 'bg-primary/5 border-x-2 border-primary' : ''}`}>
                      <div className="flex items-center justify-center">
                        {renderCell(feature.pro)}
                      </div>
                    </TableCell>
                    <TableCell className="w-[20%] py-2 md:py-3 px-2">
                      <div className="flex items-center justify-center">
                        {renderCell(feature.annual)}
                      </div>
                    </TableCell>
                    <TableCell className="w-[20%] py-2 md:py-3 px-2">
                      <div className="flex items-center justify-center">
                        {renderCell(feature.lifetime)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* CTA Row */}
            <div className="grid grid-cols-5 border-t border-border">
              <div className="p-3 md:p-4 bg-secondary/30" />
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-3 md:p-4 flex items-center justify-center ${plan.featured ? 'bg-primary/5 border-x-2 border-b-2 border-primary rounded-b-lg' : ''}`}
                >
                  <Button 
                    variant={plan.current ? "outline" : plan.featured ? "default" : "outline"}
                    size="sm"
                    className={`w-full max-w-[100px] text-[11px] md:text-sm ${plan.featured ? 'gradient-primary text-primary-foreground' : ''}`}
                    disabled={plan.current}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
