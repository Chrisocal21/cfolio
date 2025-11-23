# My Portfolio (Next.js + TypeScript)

A modern portfolio site built with Next.js 14, TypeScript, and React - showcasing photography and tech projects.

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
cfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   └── page.module.css      # Page-specific styles
│   └── components/
│       ├── Navigation.tsx       # Nav component
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section
│       ├── Work.tsx             # Projects section
│       ├── Contact.tsx          # Contact section
│       ├── Footer.tsx           # Footer component
│       └── *.module.css         # Component styles
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 📝 Customization Guide

### Change the Site Name
The placeholder name `MY_PORTFOLIO` appears in:
- `src/components/Navigation.tsx` (line 7)
- `src/components/Footer.tsx` (line 7)
- `src/app/layout.tsx` (line 6-7) - Update metadata title and description

### Personalize Content
- **Your Name**: Edit `src/components/Hero.tsx` - Replace `[Your Name]`
- **Tagline**: Edit the subtitle in `Hero.tsx`
- **About Section**: Update content in `src/components/About.tsx`
- **Contact Links**: Update social links in `src/components/Contact.tsx`

### Customize Colors
Edit CSS variables in `src/app/globals.css` (lines 6-12):
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --text-light: #6b7280;
  --bg-color: #ffffff;
  --bg-secondary: #f9fafb;
  --border-color: #e5e7eb;
}
```

## 🌐 Deploy to Vercel

### Option 1: Import from GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js and deploys!

### Option 2: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

Your site will be live instantly with automatic HTTPS and global CDN! ⚡

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (scoped styling)
- **React**: 18.3
- **Deployment**: Vercel (recommended)

## ✨ Features

- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ CSS Modules for scoped styling
- ✅ Component-based architecture
- ✅ Fully responsive design
- ✅ SEO-ready with metadata
- ✅ Zero runtime JavaScript for static content
- ✅ Optimized for performance
- ✅ Easy to extend and customize

## 🔄 Migration from HTML

The site has been converted from plain HTML to:
- React components (TSX)
- TypeScript for type safety
- CSS Modules for component-scoped styles
- Next.js App Router for modern React patterns
- Automatic code splitting and optimization

## 📚 Next Steps

Check out `PORTFOLIO-BUILD-GUIDE.md` for a comprehensive checklist on adding:
- 📷 Photo galleries
- 🌐 Project showcases
- 📱 Mobile app demos
- 💻 Code snippets
- And much more!

---

Ready to build an amazing portfolio! 🎉
