import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  className?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  label?: string;
}

const VideoPlaceholder = ({ 
  className,
  aspectRatio = "16:9",
  label = "Video Preview"
}: VideoPlaceholderProps) => {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal/5 to-charcoal/10 border border-border/50",
        aspectClasses[aspectRatio],
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-primary/5" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Center play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-medium cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
        </motion.div>
      </div>
      
      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
          {label}
        </span>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-teal/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
      </div>
    </motion.div>
  );
};

export default VideoPlaceholder;
