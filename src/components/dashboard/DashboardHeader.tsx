import { LogOut, Crown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { getUserProfile, listenForAvatarChanges } from "@/lib/userProfile";
import { getAvatarById } from "@/lib/pixelAvatars";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  isPro?: boolean;
  userEmail?: string;
}

const DashboardHeader = ({ title, subtitle, isPro = false, userEmail }: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentAvatarId, setCurrentAvatarId] = useState<string | undefined>();

  // Load user avatar on mount
  useEffect(() => {
    const loadAvatar = async () => {
      const profile = await getUserProfile();
      if (profile?.avatarId) {
        setCurrentAvatarId(profile.avatarId);
      }
    };
    loadAvatar();

    // Listen for avatar changes
    const unsubscribe = listenForAvatarChanges((avatarId) => {
      setCurrentAvatarId(avatarId);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    navigate("/");
  };

  const getInitials = (email?: string) => {
    if (!email) return "U";
    return email.charAt(0).toUpperCase();
  };

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isPro && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/20 border border-accent/30">
            <Crown className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">PRO</span>
          </div>
        )}

        <div
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-soft cursor-pointer hover:border-primary/50 transition-all"
          onClick={() => navigate("/dashboard/profile")}
          title="Go to Profile"
        >
          {currentAvatarId && getAvatarById(currentAvatarId) ? (
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: getAvatarById(currentAvatarId)!.svg }}
            />
          ) : (
            <User className="w-5 h-5 text-primary-foreground" />
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="rounded-xl border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
