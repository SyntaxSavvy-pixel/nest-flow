import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Zap, Lock, MapPin, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const servers = [
  { country: "United States", city: "New York", ping: "24ms", load: 45 },
  { country: "United Kingdom", city: "London", ping: "38ms", load: 62 },
  { country: "Germany", city: "Frankfurt", ping: "42ms", load: 38 },
  { country: "Japan", city: "Tokyo", ping: "112ms", load: 28 },
  { country: "Australia", city: "Sydney", ping: "156ms", load: 22 },
];

const features = [
  { icon: Shield, label: "Military-grade encryption", description: "AES-256 encryption" },
  { icon: Zap, label: "Lightning fast speeds", description: "No bandwidth limits" },
  { icon: Lock, label: "No-logs policy", description: "Your privacy protected" },
  { icon: Globe, label: "Global network", description: "50+ server locations" },
];

const VPN = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState(servers[0]);

  return (
    <DashboardLayout title="VPN" subtitle="Secure your browsing with TabKeep VPN">
      <div className="space-y-8">
        {/* Connection Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`border-2 transition-colors ${isConnected ? "border-green-500/50 bg-green-500/5" : "border-border/50"}`}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                    isConnected ? "bg-green-500/20" : "bg-secondary"
                  }`}>
                    <Shield className={`w-10 h-10 ${isConnected ? "text-green-500" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      {isConnected ? "Connected" : "Disconnected"}
                    </h2>
                    <p className="text-muted-foreground">
                      {isConnected 
                        ? `${selectedServer.city}, ${selectedServer.country}` 
                        : "Your connection is not protected"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {isConnected ? "Protected" : "Unprotected"}
                  </span>
                  <Switch
                    checked={isConnected}
                    onCheckedChange={setIsConnected}
                    className="scale-125"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Server Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-border/50 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Server Locations
                </CardTitle>
                <CardDescription>Choose your preferred server</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {servers.map((server) => (
                  <button
                    key={server.city}
                    onClick={() => setSelectedServer(server)}
                    className={`w-full p-4 rounded-xl border transition-all text-left ${
                      selectedServer.city === server.city
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-border hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{server.country}</p>
                        <p className="text-sm text-muted-foreground">{server.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{server.ping}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-secondary overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${server.load}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{server.load}%</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  VPN Features
                </CardTitle>
                <CardDescription>Included with Sembold partnership</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={feature.label} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{feature.label}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <Button className="w-full gradient-primary text-primary-foreground">
                    Learn More About Sembold VPN
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VPN;
