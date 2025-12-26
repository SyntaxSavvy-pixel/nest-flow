import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Layers, Grid3X3, Clock, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import SmartSuggestions from "@/components/dashboard/SmartSuggestions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session?.user) {
          navigate("/auth");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSuggestionAction = (action: string) => {
    toast({
      title: "Action triggered",
      description: `${action} - This feature will be available soon!`,
    });
  };

  // Mock data - replace with real data later
  const stats = {
    activeTabs: 12,
    workspaces: 3,
    savedTime: "45%",
    pendingTasks: 2,
  };

  const suggestions = [
    {
      id: "1",
      text: "Close inactive tabs older than 24h",
      action: () => handleSuggestionAction("Close inactive tabs"),
    },
  ];

  const activities = [
    {
      id: "1",
      type: "closed" as const,
      title: "Tab 'Project X' closed",
      timestamp: "Today, 10:30 AM",
    },
    {
      id: "2",
      type: "saved" as const,
      title: "Workspace 'Research' saved",
      timestamp: "Yesterday, 4:15 PM",
      highlighted: true,
    },
    {
      id: "3",
      type: "saved" as const,
      title: "Workspace 'Research' saved",
      timestamp: "Yesterday, 4:15 PM",
    },
    {
      id: "4",
      type: "closed" as const,
      title: "Tab 'Project' closed",
      timestamp: "2 days ago",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const userName = user?.email?.split("@")[0] || "User";
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <DashboardHeader
          title="Dashboard"
          subtitle="Manage your tabs and settings"
          isPro={false}
          userEmail={user?.email}
        />

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Welcome back, <span className="text-gradient">{displayName}!</span>
          </h2>
          <p className="text-muted-foreground mt-1">
            Here's what's new today
          </p>
        </motion.div>

        {/* Stats Grid and Suggestions */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                icon={<Layers className="w-6 h-6 text-primary" />}
                value={stats.activeTabs}
                label="Active Tabs"
                iconBg="bg-primary/10"
                delay={0}
              />
              <StatsCard
                icon={<Grid3X3 className="w-6 h-6 text-accent-foreground" />}
                value={stats.workspaces}
                label="Workspaces"
                iconBg="bg-accent/20"
                delay={0.1}
              />
              <StatsCard
                icon={<Clock className="w-6 h-6 text-primary" />}
                value={stats.savedTime}
                label="Saved Time"
                iconBg="bg-primary/10"
                delay={0.2}
              />
              <StatsCard
                icon={<ListTodo className="w-6 h-6 text-muted-foreground" />}
                value={stats.pendingTasks}
                label="Pending Tasks"
                iconBg="bg-secondary"
                delay={0.3}
              />
            </div>
          </div>

          <div className="xl:col-span-1">
            <SmartSuggestions
              suggestions={suggestions}
              onUpgrade={() => navigate("/dashboard/subscription")}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="max-w-2xl">
          <RecentActivity activities={activities} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
