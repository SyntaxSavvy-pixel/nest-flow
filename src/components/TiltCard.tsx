import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ 
  children, 
  className,
  tiltIntensity = 10,
  glareEnabled = true 
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltIntensity;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltIntensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
      
      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
          animate={{
            opacity: Math.abs(rotateX) + Math.abs(rotateY) > 0 ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
