import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  comingSoon?: boolean;
}

const SocialLoginButton = ({
  icon,
  label,
  onClick,
  disabled = false,
  comingSoon = false,
}: SocialLoginButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={!disabled && !comingSoon ? onClick : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`
        relative w-full h-12 rounded-xl border border-border/50 bg-background
        flex items-center justify-center gap-3 font-medium text-foreground
        overflow-hidden transition-all duration-300
        ${comingSoon ? "cursor-not-allowed opacity-70" : "hover:border-primary/50"}
      `}
      whileTap={!disabled && !comingSoon ? { scale: 0.98 } : {}}
    >
      {/* Glow effect that follows cursor */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: 150,
          height: 150,
          background: comingSoon
            ? "radial-gradient(circle, rgba(156, 163, 175, 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: isHovered && !comingSoon
            ? `0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)`
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {icon}
        <span>{comingSoon ? `${label} (Coming Soon)` : label}</span>
      </span>
    </motion.button>
  );
};

export default SocialLoginButton;
