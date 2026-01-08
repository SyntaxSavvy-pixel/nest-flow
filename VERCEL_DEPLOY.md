# Deploy TabKeep to Vercel - Step by Step

Follow these exact steps to deploy your app live in 10 minutes.

---

## 📋 Step 1: Install Vercel CLI (2 minutes)

Open your terminal and run:

```bash
npm install -g vercel
```

Wait for it to finish installing.

---

## 🔑 Step 2: Login to Vercel (1 minute)

In your terminal, run:

```bash
vercel login
```

**What happens:**
- It will ask you to choose login method
- Choose: **GitHub** (recommended) or **Email**
- A browser window will open
- Click "Continue with GitHub" or verify your email
- Come back to terminal when it says "Success!"

---

## 🚀 Step 3: Deploy (3 minutes)

**Navigate to your project:**
```bash
cd nest-flow
```

**Start deployment:**
```bash
vercel
```

**Vercel will ask you questions - Answer like this:**

1. **"Set up and deploy?"** → Press **Enter** (Yes)

2. **"Which scope?"** → Press **Enter** (your account)

3. **"Link to existing project?"** → Type **`n`** and press **Enter** (No, new project)

4. **"What's your project's name?"** → Type **`tabkeep`** and press **Enter**

5. **"In which directory is your code located?"** → Press **Enter** (current directory)

6. **"Want to modify the settings?"** → Type **`n`** and press **Enter** (No, auto-detected is fine)

**Wait 1-2 minutes...**

You'll see:
```
✅ Production: https://tabkeep-xxxx.vercel.app
```

🎉 **YOUR SITE IS LIVE!** But wait... it won't work yet because we need to add Supabase keys.

---

## 🔐 Step 4: Add Environment Variables (2 minutes)

**Option A: Using Vercel CLI (Faster)**

```bash
vercel env add VITE_SUPABASE_URL
```
Paste: `https://pskrdnqtlqahwvnufrnj.supabase.co`
Press Enter

```bash
vercel env add VITE_SUPABASE_PUBLISHABLE_KEY
```
Paste: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3JkbnF0bHFhaHd2bnVmcm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NTY4NTIsImV4cCI6MjA4MzIzMjg1Mn0.xIEskBhD7Qh4GKC_UszI0YGv0hrEmyRlWZmqA3AqCZc`
Press Enter

**Option B: Using Vercel Dashboard (Visual)**

1. Go to: https://vercel.com/dashboard
2. Click your **"tabkeep"** project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in sidebar
5. Add these two variables:

**Variable 1:**
- Name: `VITE_SUPABASE_URL`
- Value: `https://pskrdnqtlqahwvnufrnj.supabase.co`
- Environments: Check all 3 boxes (Production, Preview, Development)
- Click "Save"

**Variable 2:**
- Name: `VITE_SUPABASE_PUBLISHABLE_KEY`
- Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3JkbnF0bHFhaHd2bnVmcm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NTY4NTIsImV4cCI6MjA4MzIzMjg1Mn0.xIEskBhD7Qh4GKC_UszI0YGv0hrEmyRlWZmqA3AqCZc`
- Environments: Check all 3 boxes
- Click "Save"

---

## 🔄 Step 5: Redeploy with Environment Variables (1 minute)

Now that environment variables are added, redeploy:

```bash
vercel --prod
```

Wait 1-2 minutes...

**DONE! 🎉**

You'll see:
```
✅ Production: https://tabkeep-xxxx.vercel.app
```

---

## ✅ Step 6: Test Your Live Site (2 minutes)

1. Open your Vercel URL (the one that ends in `.vercel.app`)
2. Click around - landing page should load ✅
3. Go to `/auth` - try signing up with email ✅
4. Go to `/dashboard` - should redirect to auth if not logged in ✅

---

## 🌐 Step 7: Add Custom Domain (Optional - 5 minutes)

**If you have tabkeep.app domain:**

1. Go to: https://vercel.com/dashboard
2. Click your "tabkeep" project
3. Click "Settings" → "Domains"
4. Click "Add"
5. Enter: `tabkeep.app`
6. Click "Add"
7. Vercel will show you DNS records
8. Go to your domain registrar (Namecheap, GoDaddy, etc.)
9. Add the DNS records Vercel shows you
10. Wait 5-60 minutes for DNS to propagate

**If you don't have a domain yet:**
- Your Vercel URL works perfectly fine!
- You can buy a domain later

---

## 🔗 Update Supabase URLs

**IMPORTANT:** Tell Supabase about your new URL:

1. Go to: https://supabase.com/dashboard/project/pskrdnqtlqahwvnufrnj/auth/url-configuration

2. Add your Vercel URL:
   - Site URL: `https://tabkeep-xxxx.vercel.app` (your actual URL)
   - Redirect URLs: `https://tabkeep-xxxx.vercel.app/**`

3. Click "Save"

---

## 🎯 You're Live!

**What you have now:**
- ✅ Live website on Vercel
- ✅ HTTPS (automatic)
- ✅ Connected to your Supabase
- ✅ Authentication working
- ✅ Auto-deploys from GitHub (if you push changes)

**Your URLs:**
- Development: http://localhost:8080
- Production: https://tabkeep-xxxx.vercel.app (or tabkeep.app)

---

## 🚀 Future Deployments

**Every time you make changes:**

```bash
git add .
git commit -m "your changes"
git push
```

Vercel automatically deploys! No need to run `vercel` command again.

---

## 🆘 Troubleshooting

**Site shows blank page?**
- Check environment variables are added
- Redeploy with `vercel --prod`

**Authentication not working?**
- Make sure you added Vercel URL to Supabase redirect URLs
- Check browser console for errors

**Build failed?**
- Run `npm run build` locally first
- Fix any TypeScript errors
- Try deploying again

---

## 📱 Next Steps

1. Test authentication on live site
2. Run the Supabase SQL schema (if you haven't)
3. Share your live link!
4. Add custom domain (optional)

**Your live site:** Check your terminal for the URL! 🎉
