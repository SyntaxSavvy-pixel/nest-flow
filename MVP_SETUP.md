# TabKeep MVP Setup - Quick Start Guide

Your Supabase is now connected! Follow these steps to complete the MVP setup.

## ✅ Step 1: Database Schema (5 minutes)

1. **Open Supabase SQL Editor:**
   - Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/sql

2. **Run the MVP Schema:**
   - Open the file: `supabase-mvp-schema.sql`
   - Copy ALL the content
   - Paste into Supabase SQL Editor
   - Click **"Run"** button (or press Ctrl/Cmd + Enter)
   - Wait for success message

3. **Verify Tables Created:**
   - Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/editor
   - You should see these tables:
     - ✅ profiles
     - ✅ saved_tabs
     - ✅ user_sessions
     - ✅ usage_analytics
     - ✅ payments

## ✅ Step 2: Enable Authentication (1 minute)

### Email Authentication (Already enabled by default)
1. Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/auth/providers
2. Email provider should be ON by default ✅

> **Note:** Social logins (Google/GitHub) are marked as "Coming Soon" and disabled for now. You can enable them later when you get more users!

## ✅ Step 3: Configure Site URLs (2 minutes)

1. **Go to:** https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/auth/url-configuration

2. **Add Site URL:**
   - Development: `http://localhost:8080`
   - Click "Add URL"

3. **Add Redirect URLs:**
   - `http://localhost:8080/**` (for wildcard)
   - `http://localhost:8080/dashboard` (specific)
   - Click "Add URL" for each

## ✅ Step 4: Test Your Setup

1. **Restart your dev server:**
   ```bash
   cd nest-flow
   npm run dev
   ```

2. **Test Authentication:**
   - Open: http://localhost:8080/auth
   - Try signing up with email (Google/GitHub are "Coming Soon" for now)

3. **Verify User Created:**
   - Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/auth/users
   - You should see your test user
   - Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/editor
   - Check `profiles` table - should have 1 row (auto-created!)

## 🎯 What's Working Now:

- ✅ **Authentication** - Email/Password (social logins coming soon)
- ✅ **User Profiles** - Auto-created on signup
- ✅ **Tab Saving** - Database ready (connect extension next)
- ✅ **Analytics Tracking** - Track user activity
- ✅ **Payment Tracking** - Ready for Stripe integration
- ✅ **Security** - Row Level Security (RLS) enabled

## 🚀 Next Steps (After MVP Testing):

1. **Stripe Integration** - Connect payment webhooks
2. **Extension Integration** - Connect Chrome extension to this backend
3. **Email Templates** - Customize auth emails
4. **Production Domain** - Add tabkeep.app URLs

## 🔗 Quick Links:

- **Dashboard:** https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj
- **Database:** https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/editor
- **Auth Users:** https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/auth/users
- **SQL Editor:** https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/sql

---

**Questions?** Let me know and I'll help you debug!
