-- Add sync_token column to profiles table
-- This enables Web Browser Extension Sync (WBES)

-- Add sync_token column
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS sync_token TEXT UNIQUE;

-- Add index for fast lookup by sync token
CREATE INDEX IF NOT EXISTS idx_profiles_sync_token ON public.profiles(sync_token);

-- Add comment to explain the column
COMMENT ON COLUMN public.profiles.sync_token IS 'WBES token for syncing user data between web app and browser extension. Format: WBES + 50 random alphanumeric characters.';
