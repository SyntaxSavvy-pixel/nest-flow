// Extension Bridge - Communication between web dashboard and Chrome extension

let extensionInstalled = false;

// Listen for extension detection message
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'TABKEEP_EXTENSION_DETECTED') {
      extensionInstalled = true;
      console.log('✅ TabKeep extension detected');
    }
  });
}

/**
 * Check if the TabKeep extension is installed
 */
export const isExtensionInstalled = (): boolean => {
  return extensionInstalled;
};

/**
 * Send avatar update to extension
 */
export const sendAvatarUpdate = (avatarImageUrl: string): void => {
  if (!extensionInstalled) {
    console.log('⚠️ Extension not detected, skipping avatar sync');
    return;
  }

  window.postMessage({
    type: 'TABKEEP_PROFILE_UPDATE',
    avatarImage: avatarImageUrl,
    timestamp: Date.now()
  }, window.location.origin);

  console.log('🎨 Avatar update sent to extension:', avatarImageUrl);
};

/**
 * Send auth data to extension
 */
export const sendAuthData = (authData: {
  syncToken: string;
  userId: string;
  userEmail?: string;
  avatarImage?: string;
}): void => {
  if (!extensionInstalled) {
    console.log('⚠️ Extension not detected, skipping auth sync');
    return;
  }

  window.postMessage({
    type: 'TABKEEP_AUTH_SUCCESS',
    ...authData,
    timestamp: Date.now()
  }, window.location.origin);

  console.log('🔐 Auth data sent to extension');
};
