import { Lightbulb, Check, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Suggestion {
  id: string;
  text: string;
  action: () => void;
}

interface SmartSuggestionsProps {
  suggestions: Suggestion[];
  onUpgrade?: () => void;
}

const SmartSuggestions = ({ suggestions, onUpgrade }: SmartSuggestionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="gradient-card rounded-2xl p-6 border border-border/50 shadow-soft"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-accent-foreground" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Smart Suggestions
        </h3>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            onClick={suggestion.action}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-left group"
          >
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm text-foreground flex-1">
              {suggestion.text}
            </span>
          </button>
        ))}

        <button
          className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-left"
        >
          <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
            <FolderOpen className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <span className="text-sm text-foreground">
            Organize tabs by project
          </span>
        </button>
      </div>

      {onUpgrade && (
        <Button
          onClick={onUpgrade}
          className="w-full mt-4 h-11 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-soft"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Upgrade for Auto-Close
        </Button>
      )}
    </motion.div>
  );
};

export default SmartSuggestions;
