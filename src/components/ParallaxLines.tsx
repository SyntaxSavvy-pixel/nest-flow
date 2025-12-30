import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxLines = () => {
  const { scrollY } = useScroll();

  // Create multiple curved lines positioned throughout the page
  const lines = [
    { color: "teal", speed: 0.15, thickness: 3, baseY: 200, opacity: 0.4, curve: "wave1" },
    { color: "primary", speed: 0.25, thickness: 4, baseY: 500, opacity: 0.35, curve: "wave2" },
    { color: "teal", speed: 0.1, thickness: 2, baseY: 900, opacity: 0.3, curve: "wave3" },
    { color: "primary", speed: 0.2, thickness: 3, baseY: 1400, opacity: 0.35, curve: "wave1" },
    { color: "teal", speed: 0.18, thickness: 2, baseY: 2000, opacity: 0.3, curve: "wave2" },
    { color: "primary", speed: 0.12, thickness: 3, baseY: 2600, opacity: 0.35, curve: "wave3" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
      {lines.map((line, index) => (
        <ParallaxCurve
          key={index}
          scrollY={scrollY}
          {...line}
        />
      ))}
    </div>
  );
};

interface ParallaxCurveProps {
  scrollY: any;
  color: string;
  speed: number;
  thickness: number;
  baseY: number;
  opacity: number;
  curve: string;
}

// Different wave path patterns - more dramatic curves
const wavePaths = {
  wave1: "M-100,50 C100,10 300,90 500,50 C700,10 900,90 1100,50 C1300,10 1500,90 1700,50 C1900,10 2100,90 2300,50 C2500,10 2700,90 2900,50",
  wave2: "M-100,60 C150,100 350,20 550,60 C750,100 950,20 1150,60 C1350,100 1550,20 1750,60 C1950,100 2150,20 2350,60 C2550,100 2750,20 2950,60",
  wave3: "M-100,40 C200,80 400,10 600,50 C800,90 1000,20 1200,40 C1400,80 1600,10 1800,50 C2000,90 2200,20 2400,40 C2600,80 2800,10 3000,50",
};

const ParallaxCurve = ({
  scrollY,
  color,
  speed,
  thickness,
  baseY,
  opacity,
  curve,
}: ParallaxCurveProps) => {
  // Parallax movement - lines move up slower than scroll
  const y = useTransform(scrollY, [0, 3000], [baseY, baseY - 800 * speed]);
  const x = useTransform(scrollY, [0, 3000], [0, 150 * speed]);

  const strokeColor = color === "teal" ? "hsl(var(--teal))" : "hsl(var(--primary))";
  const pathD = wavePaths[curve as keyof typeof wavePaths];

  return (
    <motion.svg
      className="absolute h-32"
      style={{
        y,
        x,
        opacity,
        left: "-20%",
        width: "140vw",
      }}
      viewBox="0 0 3000 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={thickness}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default ParallaxLines;
