# Storolo

Welcome to Storolo! A modern Next.js application with Supabase integration.

## 🚀 Live Demo

**🌐 Production URL:** https://storolo-1ro1djykd-korhan-bozs-projects.vercel.app

## 🚀 Getting Started

This project is built with:
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Backend as a Service
- **Vercel** - Deployment platform

## 📋 Prerequisites

- Node.js 18+ (already installed)
- Git (already configured)
- Supabase account (already have)
- Vercel account (already connected)

## 🔧 Supabase Setup

### 1. Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `storolo`
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to you
5. Click "Create new project"

### 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key
3. Update your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3. Set Environment Variables in Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `storolo` project
3. Go to **Settings** → **Environment Variables**
4. Add the same environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Test the Connection

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)
3. Click "Test Supabase Connection" button
4. You should see "✅ Supabase connection successful!"

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment

This project is automatically deployed to Vercel:

- **Production**: https://storolo-1ro1djykd-korhan-bozs-projects.vercel.app
- **GitHub Integration**: Automatic deployments on push to main branch
- **Preview Deployments**: Automatic preview deployments for pull requests

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   └── SupabaseExample.tsx
├── lib/                 # Utility libraries
│   └── supabase.ts      # Supabase client
└── ...
```

## 🔗 Next Steps

- [x] Set up GitHub repository
- [x] Set up Supabase integration
- [x] Set up Vercel deployment
- [ ] Set up database tables in Supabase
- [ ] Add authentication
- [ ] Create API routes
- [ ] Add more features

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs) 