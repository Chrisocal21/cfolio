# 📟 Portfolio Commands Reference

Quick reference for all available npm scripts and automation commands.

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Next.js development server at http://localhost:3000 with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized production build in `.next/` directory.

### Start Production Server
```bash
npm start
```
Runs the production build locally (must run `npm run build` first).

### Run Linter
```bash
npm run lint
```
Checks code for linting errors using ESLint.

---

## 🤖 Automation Commands

### Update Progress Tracker
```bash
npm run progress
```
Analyzes `PORTFOLIO-BUILD-GUIDE.md` and updates `PROGRESS.md` with completion percentage.

### Run Automation Suite
```bash
npm run automate [command]
```

**Available automation commands:**

#### 1. Update Progress
```bash
npm run automate progress
```
Same as `npm run progress` - updates progress tracker.

#### 2. Auto-Commit Progress
```bash
npm run automate commit
```
Automatically commits progress changes to git with timestamp.

#### 3. Generate Component
```bash
npm run automate component <ComponentName>
```
Creates a new React component with TypeScript and CSS module.

**Example:**
```bash
npm run automate component PhotoGallery
```
Creates:
- `src/components/PhotoGallery.tsx`
- `src/components/PhotoGallery.module.css`

#### 4. Generate Sitemap
```bash
npm run automate sitemap
```
Creates `public/sitemap.xml` for SEO optimization.

#### 5. Performance Check
```bash
npm run automate check
```
Runs basic performance checks on your build.

#### 6. Extract TODOs
```bash
npm run automate todos
```
Scans all TypeScript/JavaScript files for `// TODO` and `// FIXME` comments.

#### 7. Run All Automations
```bash
npm run automate all
```
Executes all automation tasks in sequence:
- Updates progress
- Generates sitemap
- Extracts TODOs
- Runs performance check

#### 8. Show Help
```bash
npm run automate
```
Displays all available automation commands with examples.

---

## 📦 Package Management

### Install Dependencies
```bash
npm install
```
Installs all project dependencies from `package.json`.

### Update Packages
```bash
npm update
```
Updates all packages to their latest compatible versions.

### Check for Outdated Packages
```bash
npm outdated
```
Lists packages that have newer versions available.

---

## 🔧 Git Commands (via automation)

### Check Status
```bash
git status
```
Shows current branch and changed files.

### Add Changes
```bash
git add .
```
Stages all changes for commit.

### Commit Changes
```bash
git commit -m "Your message"
```
Commits staged changes with a message.

**Or use automation:**
```bash
npm run automate commit
```

### Push to GitHub
```bash
git push
```
Pushes commits to remote repository.

---

## 🌐 Deployment

### Deploy to Vercel (CLI)
```bash
vercel
```
Deploys to Vercel (requires `npm i -g vercel` first).

### Deploy to Vercel (Production)
```bash
vercel --prod
```
Deploys directly to production environment.

---

## 🧪 Testing & Quality

### Type Check
```bash
npx tsc --noEmit
```
Checks TypeScript types without building.

### Format Code (if prettier installed)
```bash
npx prettier --write .
```
Auto-formats all code files.

---

## 📊 Quick Workflows

### Daily Development
```bash
npm run dev
```
Start coding and see changes live!

### Before Committing
```bash
npm run lint
npm run build
npm run automate progress
git add .
git commit -m "Description"
git push
```

### Generate New Feature
```bash
npm run automate component FeatureName
# Edit the new files in src/components/
npm run dev
```

### Check Progress
```bash
npm run progress
# Opens PROGRESS.md to see completion percentage
```

### Deployment
```bash
npm run build
# Check for errors
git add .
git commit -m "Deploy: Feature description"
git push
# Vercel auto-deploys from GitHub
```

---

## 🎯 Custom Scripts

You can add more scripts to `package.json`:

```json
"scripts": {
  "your-command": "your-script.js"
}
```

Then run with:
```bash
npm run your-command
```

---

## 💡 Pro Tips

1. **Use Tab Completion**: Type `npm run` and press Tab to see all available scripts
2. **Chain Commands**: Use `;` to run multiple commands:
   ```bash
   npm run build ; npm run automate progress
   ```
3. **Background Tasks**: Add `&` at the end to run in background (bash/zsh)
4. **Stop Dev Server**: Press `Ctrl+C` in terminal
5. **Clear Cache**: Delete `.next` folder if you have build issues
   ```bash
   Remove-Item -Recurse -Force .next
   ```

---

## 🆘 Troubleshooting Commands

### Clear Next.js Cache
```bash
Remove-Item -Recurse -Force .next
```

### Reinstall Dependencies
```bash
Remove-Item -Recurse -Force node_modules
npm install
```

### Fix Git Issues
```bash
git reset --hard origin/main
```

### Check Node/NPM Versions
```bash
node --version
npm --version
```

---

*Last Updated: November 22, 2025*
