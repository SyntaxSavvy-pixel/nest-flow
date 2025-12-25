import { Feather } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow">
            <Feather className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">TabKeep</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How it works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="/auth" 
            className="inline-flex items-center justify-center h-10 px-5 rounded-xl font-semibold gradient-primary text-primary-foreground shadow-soft hover:shadow-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
