# TabKeep Web Dashboard

> **Too many tabs. One calm place.**

The web dashboard for TabKeep - a beautiful tab management solution built with React, TypeScript, and modern web technologies.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

## 📦 What's Inside

### Pages (11 total)

**Public Pages:**
- `/` - Landing page with animations
- `/auth` - Login/signup page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

**Dashboard Pages:**
- `/dashboard` - Main dashboard
- `/dashboard/analytics` - Tab analytics & charts
- `/dashboard/subscription` - Pricing & subscription management
- `/dashboard/vpn` - VPN integration (Sembold)
- `/dashboard/profile` - User profile & settings
- `/dashboard/themes` - Theme customization

### Features

✅ **Authentication** - Google OAuth + Email/Password
✅ **Dashboard** - Stats, analytics, recent activity
✅ **Analytics** - Tab usage charts & insights
✅ **VPN Integration** - Sembold VPN partnership
✅ **Theme System** - 6 color themes + dark/light mode
✅ **Subscription** - Free, Pro, Pro Annual, Lifetime plans
✅ **Profile Management** - Settings & preferences
✅ **Responsive Design** - Mobile-friendly
✅ **Animations** - Framer Motion & scroll effects

### Components

- **74+ UI Components** - shadcn/ui library
- **Custom Components** - Landing page elements
- **Dashboard Components** - Specialized layouts
- **Hooks** - Custom React hooks

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Supabase** - Backend & authentication
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Recharts** - Data visualization

## 📁 Project Structure

```
src/
├── pages/              # Route pages
│   ├── Index.tsx      # Landing page
│   ├── Auth.tsx       # Authentication
│   ├── Dashboard.tsx  # Dashboard home
│   └── dashboard/     # Dashboard sub-pages
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   └── dashboard/     # Dashboard-specific
├── hooks/             # Custom hooks
├── integrations/      # Third-party integrations
└── lib/               # Utilities
```

## 🎨 Design System

### Brand Colors
- **Primary**: Teal (#14B8A6)
- **Accent**: Purple/Blue gradient (#6366F1 → #8B5CF6)

### Typography
- **Display**: Fraunces (serif)
- **Body**: DM Sans (sans-serif)

### Themes
- 6 color themes: Teal, Blue, Purple, Rose, Orange, Green
- Light/Dark/System mode

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run build:dev    # Build in dev mode
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Environment Variables

Create a `.env` file with your own Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

📝 **Need help setting up Supabase?** See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for complete instructions on creating your own Supabase project.

## 🚢 Deployment

### Recommended Platforms

- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔗 Related Projects

- **Chrome Extension** - Tab management extension (`../extension/`)
- **Main Repo** - [TabKeep App](../README.md)

## 📄 License

Copyright © 2026 TabKeep

## 🔗 Links

- **Website**: [tabkeep.app](https://tabkeep.app)
- **Twitter**: [@tabkeep](https://twitter.com/tabkeep)
- **Extension**: Chrome Web Store (Coming Soon)

---

**Built with ❤️ for a calmer browsing experience.**
