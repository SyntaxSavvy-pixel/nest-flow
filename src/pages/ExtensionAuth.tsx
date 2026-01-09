import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getUserProfile } from "@/lib/userProfile";
import { getAvatarById } from "@/lib/pixelAvatars";
import { sendAuthData } from "@/lib/extensionBridge";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

/**
 * Extension Auth Bridge Page
 * This page handles authentication flow from the Chrome extension
 * After successful login, it sends the sync token back to the extension
 */
const ExtensionAuth = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [message, setMessage] = useState('Connecting to TabKeep...');

  useEffect(() => {
    handleExtensionAuth();
  }, []);

  const handleExtensionAuth = async () => {
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Not authenticated, redirect to login
        setMessage('Redirecting to login...');
        setTimeout(() => {
          navigate('/auth?returnTo=extension-auth');
        }, 1000);
        return;
      }

      // User is authenticated, get their profile (this generates sync token if needed)
      const profile = await getUserProfile();

      if (!profile || !profile.syncToken) {
        throw new Error('Failed to generate sync token');
      }

      // Get avatar image URL if available
      let avatarImageUrl = '';
      if (profile.avatarId) {
        const avatar = getAvatarById(profile.avatarId);
        if (avatar) {
          // Use the full image URL for the extension
          avatarImageUrl = window.location.origin + avatar.imageUrl;
        }
      }

      // Send sync token and user data to extension via postMessage bridge
      sendAuthData({
        syncToken: profile.syncToken,
        userId: session.user.id,
        userEmail: session.user.email,
        avatarImage: avatarImageUrl,
      });

      // Also store in chrome.storage.sync if available
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
        try {
          const storageData: Record<string, any> = {
            tabkeepSyncToken: profile.syncToken,
            tabkeepUserId: session.user.id,
            tabkeepUserEmail: session.user.email,
            authTimestamp: Date.now(),
          };

          if (avatarImageUrl) {
            storageData.avatarImage = avatarImageUrl;
          }

          await chrome.storage.sync.set(storageData);
        } catch (err) {
          console.log('Could not save to chrome storage:', err);
        }
      }

      // Store in localStorage as fallback
      localStorage.setItem('tabkeep-sync-token', profile.syncToken);
      localStorage.setItem('tabkeep-user-id', session.user.id);
      localStorage.setItem('tabkeep-user-email', session.user.email || '');

      // Show success message
      setStatus('success');
      setMessage('Authentication successful! Redirecting to dashboard...');

      // Auto-redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard?source=extension');
      }, 2000);

    } catch (error) {
      console.error('Extension auth error:', error);
      setStatus('error');
      setMessage('Authentication failed. Please try again.');

      setTimeout(() => {
        navigate('/auth');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="max-w-md w-full mx-4">
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo */}
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="white" fillOpacity="0.2"/>
                <g transform="translate(4, 4)">
                  <path
                    d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8 2 22"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 15H9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            {/* Status Icon */}
            <div>
              {status === 'checking' && (
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              )}
              {status === 'success' && (
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              )}
              {status === 'error' && (
                <XCircle className="w-12 h-12 text-destructive" />
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                {status === 'checking' && 'Connecting Extension'}
                {status === 'success' && 'Connected!'}
                {status === 'error' && 'Connection Failed'}
              </h1>
              <p className="text-muted-foreground text-sm">
                {message}
              </p>
            </div>

            {/* Additional Info */}
            {status === 'success' && (
              <div className="bg-secondary/20 rounded-lg p-4 w-full">
                <p className="text-xs text-muted-foreground">
                  Your TabKeep extension is now synced with your account.
                  All your settings, avatars, and bookmarks will sync automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionAuth;
