import { motion } from "framer-motion";
import { Palette, Sun, Moon, Monitor, Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useTheme } from "@/hooks/useTheme";

const colorThemes = [
  { name: "Teal", primary: "#0d9488", secondary: "#f5f5f0" },
  { name: "Blue", primary: "#3b82f6", secondary: "#f0f5ff" },
  { name: "Purple", primary: "#8b5cf6", secondary: "#f5f0ff" },
  { name: "Rose", primary: "#e11d48", secondary: "#fff0f3" },
  { name: "Orange", primary: "#ea580c", secondary: "#fff5f0" },
  { name: "Green", primary: "#16a34a", secondary: "#f0fff5" },
];

const modeOptions = [
  { id: "light" as const, label: "Light", icon: Sun, description: "Bright and clean" },
  { id: "dark" as const, label: "Dark", icon: Moon, description: "Easy on the eyes" },
  { id: "system" as const, label: "System", icon: Monitor, description: "Match your device" },
];

const Themes = () => {
  const { mode, setMode, colorTheme, setColorTheme, isDark } = useTheme();

  return (
    <DashboardLayout title="Themes" subtitle="Customize your TabKeep appearance">
      <div className="space-y-8">
        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-border/50 overflow-hidden">
            {/* Subtle animated gradient border for dark mode */}
            {isDark && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />
            )}
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                Appearance Mode
              </CardTitle>
              <CardDescription>Choose your preferred appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {modeOptions.map((modeOption) => (
                  <motion.button
                    key={modeOption.id}
                    onClick={() => setMode(modeOption.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-6 rounded-xl border-2 transition-all text-center group ${
                      mode === modeOption.id
                        ? "border-primary bg-primary/5 shadow-glow"
                        : "border-border/50 hover:border-border hover:bg-secondary/50"
                    }`}
                  >
                    {mode === modeOption.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 rounded-full gradient-primary flex items-center justify-center shadow-md"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </motion.div>
                    )}
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all ${
                      mode === modeOption.id 
                        ? "bg-primary/15" 
                        : "bg-secondary group-hover:bg-secondary/80"
                    }`}>
                      <modeOption.icon className={`w-7 h-7 transition-colors ${
                        mode === modeOption.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`} />
                    </div>
                    <p className="font-semibold text-foreground">{modeOption.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{modeOption.description}</p>
                  </motion.button>
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
              <CardTitle className="font-display flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                Color Theme
              </CardTitle>
              <CardDescription>Select your accent color</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {colorThemes.map((theme) => (
                  <motion.button
                    key={theme.name}
                    onClick={() => setColorTheme(theme.name as any)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      colorTheme === theme.name
                        ? "border-primary shadow-lg"
                        : "border-border/50 hover:border-border"
                    }`}
                  >
                    {colorTheme === theme.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                        style={{ background: theme.primary }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                    <div 
                      className="w-full aspect-square rounded-lg mb-3 shadow-inner"
                      style={{ 
                        background: isDark 
                          ? `linear-gradient(135deg, ${theme.primary}, hsl(225, 22%, 11%))` 
                          : `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` 
                      }}
                    />
                    <p className="text-sm font-medium text-foreground text-center">{theme.name}</p>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-border/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="font-display">Live Preview</CardTitle>
              <CardDescription>See how your theme looks in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`p-6 rounded-xl space-y-5 transition-colors ${
                isDark 
                  ? "bg-gradient-to-br from-secondary to-background border border-border/50" 
                  : "bg-secondary/50"
              }`}>
                {/* Header preview */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary shadow-glow" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 rounded-full bg-foreground/20" />
                    <div className="h-3 w-48 rounded-full bg-muted-foreground/20" />
                  </div>
                </div>
                
                {/* Cards preview */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`h-20 rounded-lg border border-border/50 transition-all ${
                        isDark ? "bg-card/80 hover:bg-card" : "bg-card hover:shadow-md"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Buttons preview */}
                <div className="flex gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 px-6 rounded-lg gradient-primary flex items-center justify-center shadow-glow cursor-pointer"
                  >
                    <span className="text-sm font-medium text-primary-foreground">Primary</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 px-6 rounded-lg bg-secondary border border-border/50 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-sm font-medium text-foreground">Secondary</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 px-6 rounded-lg bg-muted flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-sm text-muted-foreground">Muted</span>
                  </motion.div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                  <div className={`w-2 h-2 rounded-full ${isDark ? "bg-primary animate-pulse" : "bg-primary"}`} />
                  <span className="text-xs text-muted-foreground">
                    Currently using {isDark ? "dark" : "light"} mode
                    {mode === "system" && " (system preference)"}
                  </span>
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
