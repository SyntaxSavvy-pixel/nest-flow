import { useState, useEffect } from "react";
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
  Feather,
  ChevronLeft,
  ChevronRight
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
  const location = useLocation();
  const navigate = useNavigate();

  // Load collapsed state from localStorage, default to true (collapsed)
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Save to localStorage whenever state changes (only when user toggles)
  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

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
          width: isCollapsed ? 72 : 280,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
              "hover:scale-[1.02] active:scale-[0.98]",
              "group relative"
            )}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm">Collapse</span>
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
                title={isCollapsed ? item.label : undefined}
                className={cn(
                  "w-full flex items-center rounded-xl",
                  "transition-all duration-200",
                  "text-left relative group",
                  isCollapsed ? "justify-center px-4 py-3" : "gap-3 px-4 py-3",
                  active
                    ? "gradient-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 flex-shrink-0",
                  active ? "text-primary-foreground" : "text-muted-foreground"
                )} />

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className={cn(
                    "absolute left-full ml-2 px-3 py-2 rounded-lg",
                    "bg-popover text-popover-foreground text-sm font-medium",
                    "shadow-lg border border-border",
                    "opacity-0 group-hover:opacity-100",
                    "pointer-events-none transition-opacity whitespace-nowrap z-50",
                    "invisible group-hover:visible"
                  )}>
                    {item.label}
                    {item.badge && (
                      <span className="block text-xs opacity-70 mt-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

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

      {/* Spacer for main content - matches sidebar width exactly */}
      <motion.div
        initial={false}
        animate={{
          width: isCollapsed ? 72 : 280,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-shrink-0"
      />
    </>
  );
};

export default DashboardSidebar;
