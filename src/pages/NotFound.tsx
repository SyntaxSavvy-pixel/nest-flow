import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import birdsImage from "@/assets/404-birds.png";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    // Go back to the previous page, or home if no history
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e8ecf0] dark:bg-background px-6 py-12 overflow-hidden">
      <div className="w-full max-w-4xl text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-foreground leading-tight mb-3"
        >
          Looks like there's not{" "}
          <br className="hidden sm:block" />
          enough space for that{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="inline-block border-2 border-charcoal dark:border-foreground px-2 rounded-md"
          >
            page
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-muted-foreground text-sm md:text-base mb-10"
        >
          Error 404 Page not found
        </motion.p>

        {/* Birds Image - Non-grabbable */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mb-10 flex justify-center"
        >
          <img
            src={birdsImage}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="w-full max-w-2xl rounded-2xl pointer-events-none select-none"
            style={{ userSelect: "none", WebkitUserDrag: "none" } as React.CSSProperties}
            onContextMenu={(e) => e.preventDefault()}
          />
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            If you believe this is a mistake, please let us know and we'll get it sorted out.
          </p>

          <Button onClick={handleGoBack} variant="hero" size="lg" className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
