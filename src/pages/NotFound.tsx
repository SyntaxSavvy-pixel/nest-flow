import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import birdsImage from "@/assets/404-birds.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e8ecf0] dark:bg-background px-6 py-12">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-foreground leading-tight mb-3">
          Looks like there's not{" "}
          <br className="hidden sm:block" />
          enough space for that{" "}
          <span className="inline-block border-2 border-charcoal dark:border-foreground px-2 rounded-md">
            page
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          Error 404 Page not found
        </p>

        {/* Birds Image */}
        <div className="mb-8">
          <img
            src={birdsImage}
            alt="Cute birds looking confused with browser tabs"
            className="w-full max-w-2xl rounded-2xl shadow-lg"
          />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm md:text-base">
            If you believe this is a mistake, please let us know and we'll get it sorted out.
          </p>

          <Button asChild variant="hero" size="lg" className="shrink-0">
            <Link to="/">
              Go back to home page
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
