import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Bell, Key, Trash2, LogOut, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Profile = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    weekly: false,
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <DashboardLayout title="Profile" subtitle="Manage your account settings">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1"
        >
          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto">
                  <User className="w-12 h-12 text-primary-foreground" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Camera className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mt-4">John Doe</h3>
              <p className="text-muted-foreground text-sm">john@example.com</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Free Plan
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Personal Info */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={notifications.email} 
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Browser notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified in your browser</p>
                </div>
                <Switch 
                  checked={notifications.browser} 
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, browser: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Weekly digest</p>
                  <p className="text-sm text-muted-foreground">Summary of your tab activity</p>
                </div>
                <Switch 
                  checked={notifications.weekly} 
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weekly: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="font-display text-destructive flex items-center gap-2">
                <Key className="w-5 h-5" />
                Account Actions
              </CardTitle>
              <CardDescription>Manage your account access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log Out
                </Button>
                <Button variant="outline" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
