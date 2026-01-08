'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { getUserProfile } from '@/lib/userProfile';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ExtensionAuthPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [syncToken, setSyncToken] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
          // User not logged in, redirect to login
          window.location.href = '/auth?returnTo=/extension-auth';
          return;
        }

        setUserEmail(user.email || '');

        // Get or generate sync token
        const profile = await getUserProfile();

        if (!profile || !profile.syncToken) {
          throw new Error('Failed to generate sync token');
        }

        setSyncToken(profile.syncToken);

        // Send message to extension via multiple channels
        sendToExtension({
          type: 'AUTH_SUCCESS',
          userId: user.id,
          email: user.email,
          syncToken: profile.syncToken,
          avatarId: profile.avatarId,
        });

        setStatus('success');
      } catch (error) {
        console.error('Extension auth error:', error);
        setStatus('error');
      }
    };

    handleAuth();
  }, []);

  const sendToExtension = (data: any) => {
    // Prepare the auth message in the format expected by background.js
    const authMessage = {
      type: 'TABKEEP_AUTH_SUCCESS',
      syncToken: data.syncToken,
      userId: data.userId,
      userEmail: data.email,
      avatarId: data.avatarId,
      timestamp: Date.now(),
    };

    console.log('📤 Sending auth message to extension...');

    // Method 1: window.postMessage to content script (most reliable)
    // The content script will relay this to the background script
    try {
      window.postMessage(authMessage, window.location.origin);
      console.log('✅ Auth message posted to content script');
    } catch (error) {
      console.error('❌ postMessage failed:', error);
    }

    // Method 2: localStorage (fallback for extension to read)
    try {
      localStorage.setItem('tabkeep-auth', JSON.stringify(authMessage));
      localStorage.setItem('tabkeep-sync-token', data.syncToken);
      console.log('✅ Auth data saved to localStorage');
    } catch (error) {
      console.error('❌ localStorage failed:', error);
    }

    // Listen for confirmation from content script
    const confirmationListener = (event: MessageEvent) => {
      if (event.data && event.data.type === 'TABKEEP_AUTH_CONFIRMED') {
        console.log('✅ Auth confirmed by extension!');
        window.removeEventListener('message', confirmationListener);
      }
    };
    window.addEventListener('message', confirmationListener);

    // Remove listener after 5 seconds to prevent memory leak
    setTimeout(() => {
      window.removeEventListener('message', confirmationListener);
    }, 5000);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(syncToken);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {status === 'loading' && (
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Connecting Extension...
            </h2>
            <p className="text-gray-600">
              Setting up your TabKeep sync
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Extension Connected! 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Your TabKeep extension is now synced with your account
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Account
              </p>
              <p className="text-gray-900 font-mono text-sm break-all">
                {userEmail}
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Sync Token
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs font-mono bg-white px-3 py-2 rounded border border-blue-200 break-all">
                  {syncToken}
                </code>
                <button
                  onClick={copyToken}
                  className="px-3 py-2 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.close()}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Close This Window
              </button>
              <a
                href="/dashboard"
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
              >
                Go to Dashboard
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              You can now return to your extension. All your tabs and data will sync automatically.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Connection Failed
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't connect your extension. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
