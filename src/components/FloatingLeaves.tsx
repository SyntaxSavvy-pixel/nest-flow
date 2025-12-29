import { motion } from "framer-motion";

interface LeafProps {
  delay?: number;
  duration?: number;
  startX?: number;
  startY?: number;
  size?: number;
  rotation?: number;
}

const Leaf = ({ delay = 0, duration = 8, startX = 0, startY = -20, size = 20, rotation = 0 }: LeafProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${startX}%`, top: startY }}
      initial={{ opacity: 0, y: startY, rotate: rotation, x: 0 }}
      animate={{
        opacity: [0, 0.7, 0.7, 0],
        y: [startY, startY + 400, startY + 800],
        x: [0, 30, -20, 40, 0],
        rotate: [rotation, rotation + 180, rotation + 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-teal/40"
      >
        <path
          d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5C6 20 8.8 21 12 21c5.5 0 10-4.5 10-10S17.5 2 12 2z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M12 2c0 5 2 8 5 10-3 2-5 5-5 10 0-5-2-8-5-10 3-2 5-5 5-10z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
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
    size: 16 + Math.random() * 12,
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
