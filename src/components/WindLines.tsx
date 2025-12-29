import { motion } from "framer-motion";

interface WindLineProps {
  delay?: number;
  duration?: number;
  startY?: number;
  direction?: "left" | "right";
  thickness?: number;
}

const WindLine = ({ 
  delay = 0, 
  duration = 4, 
  startY = 50, 
  direction = "right",
  thickness = 1 
}: WindLineProps) => {
  const isRight = direction === "right";
  
  return (
    <motion.div
      className="absolute pointer-events-none h-px"
      style={{ 
        top: `${startY}%`,
        left: isRight ? "-10%" : "auto",
        right: isRight ? "auto" : "-10%",
        width: "40%",
        height: thickness,
        background: `linear-gradient(${isRight ? "90deg" : "270deg"}, transparent, hsl(var(--teal) / 0.15), hsl(var(--teal) / 0.3), hsl(var(--teal) / 0.15), transparent)`,
      }}
      initial={{ 
        opacity: 0, 
        x: isRight ? "-100%" : "100%",
        scaleX: 0.3,
      }}
      animate={{
        opacity: [0, 0.8, 0.8, 0],
        x: isRight ? ["0%", "250%"] : ["0%", "-250%"],
        scaleX: [0.3, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
        repeatDelay: 2,
      }}
    />
  );
};

interface CurvedWindProps {
  delay?: number;
  startY?: number;
  direction?: "left" | "right";
}

const CurvedWind = ({ delay = 0, startY = 30, direction = "right" }: CurvedWindProps) => {
  const isRight = direction === "right";
  
  return (
    <motion.svg
      className="absolute pointer-events-none"
      style={{
        top: `${startY}%`,
        left: isRight ? "-5%" : "auto",
        right: isRight ? "auto" : "-5%",
        transform: isRight ? "none" : "scaleX(-1)",
      }}
      width="300"
      height="80"
      viewBox="0 0 300 80"
      fill="none"
      initial={{ opacity: 0, x: isRight ? -100 : 100 }}
      animate={{ 
        opacity: [0, 0.5, 0.5, 0],
        x: isRight ? [-100, 400] : [100, -400],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
        repeatDelay: 3,
      }}
    >
      <motion.path
        d="M0 40 Q75 20 150 40 T300 40"
        stroke="hsl(var(--teal) / 0.2)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 6,
          delay,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1],
          repeatDelay: 3,
        }}
      />
      <motion.path
        d="M20 50 Q95 30 170 50 T320 50"
        stroke="hsl(var(--teal) / 0.15)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 6,
          delay: delay + 0.3,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1],
          repeatDelay: 3,
        }}
      />
    </motion.svg>
  );
};

interface WindLinesProps {
  variant?: "horizontal" | "curved" | "mixed";
  className?: string;
}

const WindLines = ({ variant = "mixed", className = "" }: WindLinesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {(variant === "horizontal" || variant === "mixed") && (
        <>
          <WindLine delay={0} duration={5} startY={20} direction="right" thickness={1} />
          <WindLine delay={2} duration={4} startY={45} direction="left" thickness={1.5} />
          <WindLine delay={4} duration={5} startY={70} direction="right" thickness={1} />
        </>
      )}
      {(variant === "curved" || variant === "mixed") && (
        <>
          <CurvedWind delay={1} startY={30} direction="right" />
          <CurvedWind delay={4} startY={60} direction="left" />
        </>
      )}
    </div>
  );
};

export default WindLines;
