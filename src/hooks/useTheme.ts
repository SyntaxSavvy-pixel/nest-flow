import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";
type ColorTheme = "Teal" | "Blue" | "Purple" | "Rose" | "Orange" | "Green";

const getSystemTheme = () => 
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const [mode, setMode] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme-mode");
    return (stored as Theme) || "system";
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const stored = localStorage.getItem("color-theme");
    return (stored as ColorTheme) || "Teal";
  });

  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme-mode") as Theme;
    if (stored === "system" || !stored) {
      return getSystemTheme();
    }
    return stored as "light" | "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    
    let actualTheme: "light" | "dark";
    if (mode === "system") {
      actualTheme = getSystemTheme();
    } else {
      actualTheme = mode;
    }
    
    setResolvedMode(actualTheme);
    
    if (actualTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("color-theme", colorTheme);
    // Color theme implementation can be extended here
  }, [colorTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (mode !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setResolvedMode(getSystemTheme());
      if (getSystemTheme() === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  return {
    mode,
    setMode,
    colorTheme,
    setColorTheme,
    resolvedMode,
    isDark: resolvedMode === "dark",
  };
};
