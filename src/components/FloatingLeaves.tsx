import { motion } from "framer-motion";
import leafImage from "@/assets/leaf.png";

interface LeafProps {
  delay?: number;
  duration?: number;
  startX?: number;
  startY?: number;
  size?: number;
  rotation?: number;
}

const Leaf = ({ delay = 0, duration = 8, startX = 0, startY = -20, size = 40, rotation = 0 }: LeafProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${startX}%`, top: startY }}
      initial={{ opacity: 0, y: startY, rotate: rotation, x: 0 }}
      animate={{
        opacity: [0, 0.85, 0.85, 0],
        y: [startY, startY + 400, startY + 800],
        x: [0, 30, -20, 40, 0],
        rotate: [rotation, rotation + 45, rotation + 90],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <img
        src={leafImage}
        alt=""
        style={{ width: size, height: 'auto' }}
        className="drop-shadow-sm"
      />
    </motion.div>
  );
};

interface FloatingLeavesProps {
  count?: number;
  className?: string;
}

const FloatingLeaves = ({ count = 6, className = "" }: FloatingLeavesProps) => {
  const leaves = Array.from({ length: count }, (_, i) => ({
    delay: i * 1.5,
    duration: 10 + Math.random() * 5,
    startX: 10 + (i * 80 / count) + Math.random() * 10,
    startY: -30 - Math.random() * 50,
    size: 30 + Math.random() * 20,
    rotation: Math.random() * 360,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </div>
  );
};

export default FloatingLeaves;
