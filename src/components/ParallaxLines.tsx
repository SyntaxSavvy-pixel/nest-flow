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

  // Create multiple lines with different parallax speeds and positions
  const lines = [
    { color: "teal", speed: 0.3, thickness: 3, startY: 400, opacity: 0.4, angle: -8 },
    { color: "teal", speed: 0.5, thickness: 2, startY: 800, opacity: 0.25, angle: 5 },
    { color: "primary", speed: 0.2, thickness: 4, startY: 1200, opacity: 0.3, angle: -3 },
    { color: "teal", speed: 0.4, thickness: 2, startY: 1800, opacity: 0.2, angle: 10 },
    { color: "primary", speed: 0.6, thickness: 3, startY: 2400, opacity: 0.35, angle: -6 },
    { color: "teal", speed: 0.25, thickness: 2, startY: 3000, opacity: 0.15, angle: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {lines.map((line, index) => (
        <ParallaxLine
          key={index}
          scrollY={scrollY}
          windowHeight={windowHeight}
          {...line}
        />
      ))}
    </div>
  );
};

interface ParallaxLineProps {
  scrollY: any;
  windowHeight: number;
  color: string;
  speed: number;
  thickness: number;
  startY: number;
  opacity: number;
  angle: number;
}

const ParallaxLine = ({
  scrollY,
  windowHeight,
  color,
  speed,
  thickness,
  startY,
  opacity,
  angle,
}: ParallaxLineProps) => {
  // Transform scroll position to line movement
  const y = useTransform(scrollY, [0, 5000], [startY, startY - 2000 * speed]);
  const x = useTransform(scrollY, [0, 5000], [-200, 400 * speed]);
  const lineOpacity = useTransform(
    scrollY,
    [startY - 500, startY, startY + windowHeight, startY + windowHeight + 500],
    [0, opacity, opacity, 0]
  );

  const colorClass = color === "teal" ? "bg-teal" : "bg-primary";

  return (
    <motion.div
      className={`absolute w-[200vw] ${colorClass}`}
      style={{
        height: thickness,
        y,
        x,
        opacity: lineOpacity,
        rotate: angle,
        left: "-50%",
        filter: "blur(0.5px)",
      }}
    />
  );
};

export default ParallaxLines;
