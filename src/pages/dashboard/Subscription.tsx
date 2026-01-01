import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
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
    period: "/month",
    description: "For peaceful, organized browsing",
    cta: "Upgrade",
    featured: true,
  },
  {
    name: "Pro Annual",
    price: "$36",
    period: "/year",
    description: "Save $12 (just $3/month!)",
    cta: "Upgrade",
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "one-time",
    description: "Pay once, own forever",
    cta: "Get Lifetime",
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

const Subscription = () => {
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
        >
          <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
            {/* Plan Headers */}
            <div className="grid grid-cols-5 border-b border-border">
              <div className="p-4 md:p-6 bg-secondary/30">
                <span className="text-sm font-medium text-muted-foreground">Compare plans</span>
              </div>
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-4 md:p-6 text-center ${plan.featured ? 'bg-primary/5 border-x-2 border-t-2 border-primary' : ''} ${plan.current ? 'bg-secondary/20' : ''}`}
                >
                  {plan.limited && (
                    <div className="flex items-center justify-center gap-1 text-amber text-xs font-medium mb-2">
                      <Zap className="w-3 h-3" />
                      Limited offer
                    </div>
                  )}
                  {plan.featured && (
                    <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      Popular
                    </span>
                  )}
                  {plan.current && (
                    <span className="inline-block px-2 py-0.5 bg-secondary text-foreground text-xs font-medium rounded-full mb-2">
                      Current
                    </span>
                  )}
                  <h3 className="font-display text-sm md:text-lg font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-1 md:mt-2">
                    <span className="text-xl md:text-3xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-xs md:text-sm">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 hidden md:block">{plan.description}</p>
                </div>
              ))}
            </div>

            {/* Features Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableBody>
                  {features.map((feature, idx) => (
                    <TableRow key={feature.name} className={idx % 2 === 0 ? 'bg-secondary/10' : ''}>
                      <TableCell className="font-medium text-foreground w-1/5 py-3 md:py-4 text-xs md:text-sm">
                        {feature.name}
                      </TableCell>
                      <TableCell className={`text-center py-3 md:py-4 ${plans[0].current ? 'bg-secondary/10' : ''}`}>
                        {renderCell(feature.free)}
                      </TableCell>
                      <TableCell className={`text-center py-3 md:py-4 ${plans[1].featured ? 'bg-primary/5 border-x-2 border-primary' : ''}`}>
                        {renderCell(feature.pro)}
                      </TableCell>
                      <TableCell className="text-center py-3 md:py-4">
                        {renderCell(feature.annual)}
                      </TableCell>
                      <TableCell className="text-center py-3 md:py-4">
                        {renderCell(feature.lifetime)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* CTA Row */}
            <div className="grid grid-cols-5 border-t border-border">
              <div className="p-4 md:p-6 bg-secondary/30" />
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-4 md:p-6 text-center ${plan.featured ? 'bg-primary/5 border-x-2 border-b-2 border-primary rounded-b-lg' : ''}`}
                >
                  <Button 
                    variant={plan.current ? "outline" : plan.featured ? "default" : "outline"}
                    size="sm"
                    className={`w-full ${plan.featured ? 'gradient-primary text-primary-foreground' : ''}`}
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
