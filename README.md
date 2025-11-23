# My Portfolio

A clean, modern portfolio landing page ready to showcase your work.

## 🚀 Quick Start

This is a simple static website that can be deployed immediately to GitHub Pages or Vercel.

## 📝 Customization Guide

### Change the Site Name
The placeholder name `MY_PORTFOLIO` appears in two places:

1. **index.html** - Line 7 (page title) and Line 15 (logo)
2. **index.html** - Line 53 (footer)

Simply search for `MY_PORTFOLIO` and replace with your chosen name.

### Personalize Content
- **Your Name**: Line 22 in `index.html` - Replace `[Your Name]`
- **Tagline**: Line 23 in `index.html` - Update the subtitle
- **About Section**: Lines 30-32 - Add your bio and skills
- **Contact Links**: Lines 43-47 - Add your actual social media and email links

### Customize Colors
Edit the color variables in `styles.css` (lines 10-16):
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
```

## 🌐 Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Set Source to "Deploy from a branch"
5. Select `main` branch and `/ (root)` folder
6. Click Save

Your site will be live at: `https://yourusername.github.io/your-repo/`

## ⚡ Deploy to Vercel

### Option 1: Import from GitHub
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Option 2: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

Your site will be live at a Vercel URL instantly!

## 📁 Project Structure
```
cfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── README.md       # This file
└── .gitignore      # Git ignore rules
```

## 🛠️ Built With
- Pure HTML5
- Pure CSS3
- No frameworks or dependencies
- Fully responsive design

## 📱 Features
- Modern, clean design
- Fully responsive (mobile, tablet, desktop)
- Smooth hover effects
- Easy to customize
- Zero dependencies
- Fast loading

---

Ready to deploy! 🎉
