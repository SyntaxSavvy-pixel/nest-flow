import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CreditCard, 
  BarChart3, 
  Shield, 
  User, 
  Palette,
  Menu,
  X,
  Feather
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: CreditCard, label: "Subscription", href: "/dashboard/subscription" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Shield, label: "VPN", href: "/dashboard/vpn", badge: "Free Sembold" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Palette, label: "Themes", href: "/dashboard/themes" },
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsCollapsed(true)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isCollapsed ? 80 : 280,
        }}
        className={cn(
          "fixed left-0 top-0 h-screen z-50",
          "bg-card border-r border-border/50",
          "flex flex-col",
          "transition-shadow duration-300",
          !isCollapsed && "shadow-medium"
        )}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <motion.a 
            href="/" 
            className="flex items-center gap-3 overflow-hidden"
            animate={{ opacity: isCollapsed ? 0 : 1 }}
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft flex-shrink-0">
              <Feather className="w-5 h-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <span className="font-display text-xl font-bold text-foreground whitespace-nowrap">
                TabKeep
              </span>
            )}
          </motion.a>
        </div>

        {/* Toggle Button */}
        <div className="px-4 mb-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "w-full h-12 rounded-xl gradient-primary",
              "flex items-center justify-center gap-2",
              "text-primary-foreground font-medium",
              "shadow-soft hover:shadow-medium transition-all",
              "hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5" />
            ) : (
              <>
                <Menu className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
                  "transition-all duration-200",
                  "text-left",
                  active 
                    ? "gradient-primary text-primary-foreground shadow-soft" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 flex-shrink-0",
                  active ? "text-primary-foreground" : "text-muted-foreground"
                )} />
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <span className={cn(
                      "block font-medium truncate",
                      active && "text-primary-foreground"
                    )}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs opacity-70 truncate block">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </motion.aside>

      {/* Spacer for main content */}
      <div className={cn(
        "flex-shrink-0 transition-all duration-300",
        isCollapsed ? "w-20" : "w-[280px]"
      )} />
    </>
  );
};

export default DashboardSidebar;
