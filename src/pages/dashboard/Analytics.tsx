import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Bookmark, Trash2, FolderOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const weeklyData = [
  { day: "Mon", saved: 12, deleted: 3 },
  { day: "Tue", saved: 8, deleted: 5 },
  { day: "Wed", saved: 15, deleted: 2 },
  { day: "Thu", saved: 10, deleted: 4 },
  { day: "Fri", saved: 18, deleted: 6 },
  { day: "Sat", saved: 6, deleted: 1 },
  { day: "Sun", saved: 4, deleted: 2 },
];

const categoryData = [
  { name: "Work", tabs: 45 },
  { name: "Research", tabs: 32 },
  { name: "Shopping", tabs: 18 },
  { name: "Social", tabs: 12 },
  { name: "News", tabs: 8 },
];

const stats = [
  { label: "Tabs Saved This Week", value: "73", change: "+12%", trend: "up", icon: Bookmark },
  { label: "Tabs Cleaned Up", value: "23", change: "+8%", trend: "up", icon: Trash2 },
  { label: "Avg. Time to Organize", value: "2.3m", change: "-15%", trend: "down", icon: Clock },
  { label: "Active Workspaces", value: "5", change: "0%", trend: "neutral", icon: FolderOpen },
];

const Analytics = () => {
  return (
    <DashboardLayout title="Analytics" subtitle="Track your tab management habits">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {stat.trend === "up" && <TrendingUp className="w-4 h-4" />}
                      {stat.trend === "down" && <TrendingDown className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-display">Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="saved"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary) / 0.2)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-display">Tabs by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="tabs" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
