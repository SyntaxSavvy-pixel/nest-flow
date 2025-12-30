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

interface LeafAnimationProps extends LeafProps {
  swayDirection?: 'left' | 'right' | 'center';
}

const Leaf = ({ 
  delay = 0, 
  duration = 15, 
  startX = 0, 
  startY = -20, 
  size = 40, 
  rotation = 0,
  swayDirection = 'center'
}: LeafAnimationProps) => {
  const swayPatterns = {
    left: [-10, -40, -20, -60, -30],
    right: [10, 40, 20, 60, 30],
    center: [0, 25, -15, 35, -10, 20],
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${startX}%`, top: startY }}
      initial={{ opacity: 0, y: startY, rotate: rotation, x: 0 }}
      animate={{
        opacity: [0, 0.7, 0.75, 0.7, 0],
        y: [startY, startY + 300, startY + 600, startY + 900],
        x: swayPatterns[swayDirection],
        rotate: [rotation, rotation + 30, rotation + 60, rotation + 90],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.4, 0.0, 0.2, 1],
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

// Props interface moved to component definition

interface FloatingLeavesProps {
  count?: number;
  className?: string;
  overlay?: boolean;
}

const FloatingLeaves = ({ count = 6, className = "", overlay = false }: FloatingLeavesProps) => {
  const swayDirections: Array<'left' | 'right' | 'center'> = ['left', 'right', 'center'];
  
  const leaves = Array.from({ length: count }, (_, i) => ({
    delay: i * 2.5,
    duration: 18 + Math.random() * 8,
    startX: 5 + (i * 90 / count) + (Math.random() * 8 - 4),
    startY: -40 - Math.random() * 80,
    size: 50 + Math.random() * 40,
    rotation: Math.random() * 360,
    swayDirection: swayDirections[i % 3],
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${overlay ? 'z-20' : 'z-0'} ${className}`}>
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </div>
  );
};

export default FloatingLeaves;
