import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import birdMascot from "@/assets/bird-hero.gif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <img 
            src={birdMascot} 
            alt="TabKeep bird looking confused" 
            className="w-40 h-40 mx-auto opacity-50 grayscale"
          />
        </div>
        
        <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This tab flew away. Let's get you back home.
        </p>
        
        <Button asChild variant="hero" size="lg">
          <Link to="/">
            <Home className="w-5 h-5" />
            Return to Nest
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
