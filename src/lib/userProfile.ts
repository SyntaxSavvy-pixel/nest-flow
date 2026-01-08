// User Profile Service - Avatar Management
import { supabase } from "@/integrations/supabase/client";

export interface UserProfile {
  avatarId?: string;
  firstName?: string;
  lastName?: string;
}

// Get user profile data including avatar
export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    // Avatar is stored in user_metadata
    const avatarId = user.user_metadata?.avatarId;
    const firstName = user.user_metadata?.firstName;
    const lastName = user.user_metadata?.lastName;

    return {
      avatarId,
      firstName,
      lastName,
    };
  } catch (error) {
    console.error("Error getting user profile:", error);
    return null;
  }
};

// Update user avatar
export const updateUserAvatar = async (avatarId: string): Promise<boolean> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase.auth.updateUser({
      data: {
        avatarId,
      }
    });

    if (error) {
      console.error("Error updating avatar:", error);
      return false;
    }

    // Broadcast the avatar change event for extension sync
    broadcastAvatarChange(avatarId);

    return true;
  } catch (error) {
    console.error("Error updating avatar:", error);
    return false;
  }
};

// Update user profile
export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<boolean> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase.auth.updateUser({
      data: profile
    });

    if (error) {
      console.error("Error updating profile:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error updating profile:", error);
    return false;
  }
};

// Broadcast avatar change to extension
const broadcastAvatarChange = (avatarId: string) => {
  // Use BroadcastChannel API to sync with extension
  const channel = new BroadcastChannel('tabkeep-sync');
  channel.postMessage({
    type: 'AVATAR_UPDATED',
    avatarId,
    timestamp: Date.now(),
  });
  channel.close();

  // Also store in localStorage as fallback
  localStorage.setItem('tabkeep-avatar', avatarId);

  // Send message to Chrome extension if available
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
    try {
      chrome.runtime.sendMessage({
        type: 'AVATAR_UPDATED',
        avatarId,
      });
    } catch (error) {
      // Extension might not be installed, ignore error
      console.log('Chrome extension not available for sync');
    }
  }

  // Also sync to chrome.storage.sync if available
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
    try {
      chrome.storage.sync.set({ userAvatar: avatarId });
    } catch (error) {
      console.log('Chrome storage sync not available');
    }
  }
};

// Listen for avatar changes from extension
export const listenForAvatarChanges = (callback: (avatarId: string) => void) => {
  const channel = new BroadcastChannel('tabkeep-sync');
  channel.onmessage = (event) => {
    if (event.data.type === 'AVATAR_UPDATED') {
      callback(event.data.avatarId);
    }
  };
  return () => channel.close();
};
