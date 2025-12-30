import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxLines = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create multiple curved lines with different parallax speeds
  const lines = [
    { color: "teal", speed: 0.3, thickness: 3, startY: 300, opacity: 0.35, curve: "wave1" },
    { color: "teal", speed: 0.5, thickness: 2, startY: 700, opacity: 0.25, curve: "wave2" },
    { color: "primary", speed: 0.2, thickness: 4, startY: 1100, opacity: 0.3, curve: "wave3" },
    { color: "teal", speed: 0.4, thickness: 2, startY: 1600, opacity: 0.2, curve: "wave1" },
    { color: "primary", speed: 0.55, thickness: 3, startY: 2200, opacity: 0.3, curve: "wave2" },
    { color: "teal", speed: 0.25, thickness: 2, startY: 2800, opacity: 0.2, curve: "wave3" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {lines.map((line, index) => (
        <ParallaxCurve
          key={index}
          scrollY={scrollY}
          windowHeight={windowHeight}
          {...line}
        />
      ))}
    </div>
  );
};

interface ParallaxCurveProps {
  scrollY: any;
  windowHeight: number;
  color: string;
  speed: number;
  thickness: number;
  startY: number;
  opacity: number;
  curve: string;
}

// Different wave path patterns
const wavePaths = {
  wave1: "M-100,50 C150,0 350,100 550,50 C750,0 950,100 1150,50 C1350,0 1550,100 1750,50 C1950,0 2150,100 2350,50",
  wave2: "M-100,50 C100,100 300,0 500,50 C700,100 900,0 1100,50 C1300,100 1500,0 1700,50 C1900,100 2100,0 2300,50",
  wave3: "M-100,30 C200,80 400,20 600,70 C800,30 1000,80 1200,30 C1400,80 1600,20 1800,70 C2000,30 2200,80 2400,30",
};

const ParallaxCurve = ({
  scrollY,
  windowHeight,
  color,
  speed,
  thickness,
  startY,
  opacity,
  curve,
}: ParallaxCurveProps) => {
  // Transform scroll position to line movement
  const y = useTransform(scrollY, [0, 5000], [startY, startY - 1800 * speed]);
  const x = useTransform(scrollY, [0, 5000], [-100, 300 * speed]);
  const lineOpacity = useTransform(
    scrollY,
    [startY - 600, startY - 200, startY + windowHeight, startY + windowHeight + 400],
    [0, opacity, opacity, 0]
  );

  const strokeColor = color === "teal" ? "hsl(var(--teal))" : "hsl(var(--primary))";
  const pathD = wavePaths[curve as keyof typeof wavePaths];

  return (
    <motion.svg
      className="absolute w-[200vw] h-24"
      style={{
        y,
        x,
        opacity: lineOpacity,
        left: "-50%",
      }}
      viewBox="0 0 2400 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={thickness}
        strokeLinecap="round"
        style={{
          filter: "blur(0.5px)",
        }}
      />
    </motion.svg>
  );
};

export default ParallaxLines;
