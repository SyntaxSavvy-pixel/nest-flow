import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBg?: string;
  delay?: number;
}

const StatsCard = ({ icon, value, label, iconBg = "bg-secondary", delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="gradient-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-medium transition-shadow"
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        iconBg
      )}>
        {icon}
      </div>
      <div className="font-display text-3xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsCard;
