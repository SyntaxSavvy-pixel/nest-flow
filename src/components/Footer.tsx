import { Feather } from "lucide-react";
import { Link } from "react-router-dom";
import SupportDialog from "./SupportDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
              <Feather className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">TabKeep</span>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <SupportDialog>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </button>
            </SupportDialog>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} TabKeep. Made with calm in mind 🪺
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;