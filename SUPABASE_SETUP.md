# TabKeep - Supabase Setup Guide

This app has been disconnected from Lovable's infrastructure. Follow these steps to set up your own Supabase backend.

## Step 1: Create a New Supabase Project

1. Go to https://supabase.com
2. Sign up or log in with your own account (use your GitHub or Google account)
3. Click "New Project"
4. Fill in:
   - **Name:** TabKeep
   - **Database Password:** Choose a strong password (save it!)
   - **Region:** Choose closest to your users
   - **Pricing Plan:** Start with Free tier

## Step 2: Get Your Project Credentials

1. Once your project is created, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 3: Update Your .env File

Open `nest-flow/.env` and update:

```env
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key-here"
```

## Step 4: Set Up Authentication

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable the providers you want:
   - ✅ Email (enabled by default)
   - ✅ Google OAuth (requires Google Cloud Console setup)
   - ✅ GitHub OAuth (requires GitHub OAuth App setup)

### Setting up Google OAuth:
1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth credentials
5. Add authorized redirect URI: `https://your-project-ref.supabase.co/auth/v1/callback`
6. Copy Client ID and Secret to Supabase

### Setting up GitHub OAuth:
1. Go to https://github.com/settings/developers
2. Create new OAuth App
3. Set callback URL: `https://your-project-ref.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase

## Step 5: Create Database Tables (if needed)

Your app may need specific tables. Check `src/integrations/supabase/types.ts` to see what database structure is expected.

You can create tables in Supabase by:
1. Go to **Table Editor** in Supabase Dashboard
2. Click "Create a new table"
3. Or use the SQL Editor to run migrations

## Step 6: Configure URL Redirects

In Supabase Dashboard:
1. Go to **Authentication** → **URL Configuration**
2. Add your site URL:
   - Development: `http://localhost:8080`
   - Production: `https://tabkeep.app`

## Step 7: Restart Your Dev Server

```bash
cd nest-flow
npm run dev
```

## Testing Authentication

1. Go to http://localhost:8080/auth
2. Try signing up with email or Google
3. Check Supabase Dashboard → Authentication → Users to see new users

## Useful Supabase Resources

- Dashboard: https://supabase.com/dashboard
- Documentation: https://supabase.com/docs
- Auth Docs: https://supabase.com/docs/guides/auth

---

**Note:** The old Lovable Supabase instance has been completely removed. This is now your own independent TabKeep backend.
