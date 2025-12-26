import { motion } from "framer-motion";
import { Check, Zap, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 100 saved tabs", "3 workspaces", "Basic organization", "7-day tab history"],
    current: true,
    icon: Sparkles,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For power users",
    features: ["Unlimited saved tabs", "Unlimited workspaces", "Smart suggestions", "30-day tab history", "Priority support"],
    popular: true,
    icon: Zap,
  },
  {
    name: "Team",
    price: "$19",
    period: "/month",
    description: "Collaborate with your team",
    features: ["Everything in Pro", "Team workspaces", "Shared collections", "Admin controls", "Analytics dashboard"],
    icon: Crown,
  },
];

const Subscription = () => {
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
              <p className="text-sm opacity-80 mt-1">You're using 47 of 100 tabs</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-display font-bold">47%</p>
              <p className="text-sm opacity-80">capacity used</p>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${plan.popular ? "border-primary shadow-medium" : "border-border/50"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-display">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-2">
                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.current ? "opacity-50" : plan.popular ? "gradient-primary text-primary-foreground" : ""}`}
                    variant={plan.current ? "outline" : plan.popular ? "default" : "secondary"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
