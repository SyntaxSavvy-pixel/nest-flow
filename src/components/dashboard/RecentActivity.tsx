import { X, Save, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ActivityType = "closed" | "saved" | "opened";

interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  timestamp: string;
  highlighted?: boolean;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

const activityConfig: Record<ActivityType, { icon: React.ElementType; iconColor: string; bgColor: string }> = {
  closed: { 
    icon: X, 
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  saved: { 
    icon: Save, 
    iconColor: "text-primary",
    bgColor: "bg-primary/10"
  },
  opened: { 
    icon: FolderOpen, 
    iconColor: "text-accent-foreground",
    bgColor: "bg-accent/20"
  },
};

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="gradient-card rounded-2xl p-6 border border-border/50 shadow-soft"
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h3>

      <div className="space-y-2">
        {activities.map((activity, index) => {
          const config = activityConfig[activity.type];
          const Icon = config.icon;
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-colors",
                activity.highlighted 
                  ? "bg-primary/15 border border-primary/30" 
                  : "hover:bg-secondary"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                config.bgColor
              )}>
                <Icon className={cn("w-4 h-4", config.iconColor)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecentActivity;
