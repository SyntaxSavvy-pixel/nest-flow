import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Sun, Moon, Monitor, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const colorThemes = [
  { name: "Teal", primary: "#0d9488", secondary: "#f5f5f0" },
  { name: "Blue", primary: "#3b82f6", secondary: "#f0f5ff" },
  { name: "Purple", primary: "#8b5cf6", secondary: "#f5f0ff" },
  { name: "Rose", primary: "#e11d48", secondary: "#fff0f3" },
  { name: "Orange", primary: "#ea580c", secondary: "#fff5f0" },
  { name: "Green", primary: "#16a34a", secondary: "#f0fff5" },
];

const modeOptions = [
  { id: "light", label: "Light", icon: Sun, description: "Bright and clean" },
  { id: "dark", label: "Dark", icon: Moon, description: "Easy on the eyes" },
  { id: "system", label: "System", icon: Monitor, description: "Match your device" },
];

const Themes = () => {
  const [selectedTheme, setSelectedTheme] = useState("Teal");
  const [selectedMode, setSelectedMode] = useState("light");

  return (
    <DashboardLayout title="Themes" subtitle="Customize your TabKeep appearance">
      <div className="space-y-8">
        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Appearance Mode
              </CardTitle>
              <CardDescription>Choose your preferred appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {modeOptions.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`relative p-6 rounded-xl border-2 transition-all text-center ${
                      selectedMode === mode.id
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-border hover:bg-secondary/50"
                    }`}
                  >
                    {selectedMode === mode.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <mode.icon className={`w-8 h-8 mx-auto mb-3 ${
                      selectedMode === mode.id ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <p className="font-medium text-foreground">{mode.label}</p>
                    <p className="text-sm text-muted-foreground">{mode.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Color Themes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-display">Color Theme</CardTitle>
              <CardDescription>Select your accent color</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme.name)}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      selectedTheme === theme.name
                        ? "border-primary"
                        : "border-border/50 hover:border-border"
                    }`}
                  >
                    {selectedTheme === theme.name && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <div 
                      className="w-full aspect-square rounded-lg mb-3"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` 
                      }}
                    />
                    <p className="text-sm font-medium text-foreground text-center">{theme.name}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-display">Preview</CardTitle>
              <CardDescription>See how your theme looks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-xl bg-secondary/50 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary" />
                  <div className="flex-1">
                    <div className="h-4 w-32 rounded bg-foreground/20" />
                    <div className="h-3 w-48 rounded bg-muted-foreground/20 mt-2" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-lg bg-card border border-border/50" />
                  <div className="h-20 rounded-lg bg-card border border-border/50" />
                  <div className="h-20 rounded-lg bg-card border border-border/50" />
                </div>
                <div className="flex gap-3">
                  <div className="h-10 px-6 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-sm text-primary-foreground">Primary</span>
                  </div>
                  <div className="h-10 px-6 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-sm text-foreground">Secondary</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Themes;
