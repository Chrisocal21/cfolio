# 📟 Portfolio Commands Reference

Quick reference for all available npm scripts and automation commands.

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
**What it does:** Starts Next.js development server at http://localhost:3000 with hot reload.

**Details:** 
- Enables Fast Refresh for instant updates without losing component state
- Shows detailed error messages and stack traces in the browser
- Includes source maps for easier debugging
- Watches for file changes and automatically recompiles
- Runs in development mode (slower but with helpful debug info)

**When to use:** During active development when you want to see changes instantly.

### Build for Production
```bash
npm run build
```
**What it does:** Creates optimized production build in `.next/` directory.

**Details:**
- Minifies JavaScript and CSS for smaller file sizes
- Optimizes images and static assets
- Generates static HTML pages where possible
- Creates optimized bundles with code splitting
- Runs TypeScript type checking
- Validates all pages compile successfully
- Typical build time: 10-30 seconds

**When to use:** Before deploying to production or testing production performance locally.

### Start Production Server
```bash
npm start
```
**What it does:** Runs the production build locally (must run `npm run build` first).

**Details:**
- Serves the optimized production build from `.next/` directory
- Uses production-level caching and optimizations
- No hot reload or Fast Refresh (changes require rebuild)
- Faster performance than dev mode
- Mimics how your site will run on Vercel

**When to use:** Testing the production build locally before deploying, or running final QA checks.

### Run Linter
```bash
npm run lint
```
**What it does:** Checks code for linting errors using ESLint.

**Details:**
- Scans all TypeScript and JavaScript files for code quality issues
- Checks for unused variables, imports, and potential bugs
- Enforces Next.js best practices and React hooks rules
- Reports accessibility issues in JSX
- Can auto-fix some issues with `--fix` flag
- Runs automatically during `npm run build`

**When to use:** Before committing code or when you see warnings in your editor.

---

## 🤖 Automation Commands

### Update Progress Tracker
```bash
npm run progress
```
**What it does:** Analyzes `PORTFOLIO-BUILD-GUIDE.md` and updates `PROGRESS.md` with completion percentage.

**Details:**
- Scans the build guide for all checkbox items `[ ]` and `[x]`
- Calculates completion percentage (completed/total)
- Extracts recently completed items marked with ✅
- Generates a formatted progress report
- Updates `PROGRESS.md` with current stats and date
- Takes ~1 second to run

**When to use:** After completing tasks in the build guide, or to check your current progress.

### Run Automation Suite
```bash
npm run automate [command]
```

**Available automation commands:**

#### 1. Update Progress
```bash
npm run automate progress
```
**What it does:** Same as `npm run progress` - updates progress tracker.

**Details:**
- Identical functionality to `npm run progress`
- Part of the larger automation suite
- Can be chained with other automation commands
- Outputs completion stats to console

**When to use:** When running multiple automation tasks together.

#### 2. Auto-Commit Progress
```bash
npm run automate commit
```
**What it does:** Automatically commits progress changes to git with timestamp.

**Details:**
- Runs progress update first
- Checks git status for changes to PROGRESS.md or PORTFOLIO-BUILD-GUIDE.md
- Stages only the progress-related files
- Creates a commit with auto-generated message including current date
- Does nothing if no changes detected
- Does NOT push to remote (you control when to push)

**When to use:** Quick way to save progress updates without manually writing commit messages.

#### 3. Generate Component
```bash
npm run automate component <ComponentName>
```
**What it does:** Creates a new React component with TypeScript and CSS module.

**Details:**
- Generates a functional React component with TypeScript
- Creates matching CSS Module file with basic styling
- Uses proper naming conventions (PascalCase for component)
- Includes imports and export statement
- Pre-configured with section structure and placeholder content
- Both files are immediately ready to use

**Example:**
```bash
npm run automate component PhotoGallery
```
Creates:
- `src/components/PhotoGallery.tsx` - Component with basic structure
- `src/components/PhotoGallery.module.css` - Scoped styles

**When to use:** Starting a new feature or section to save time on boilerplate.

#### 4. Generate Sitemap
```bash
npm run automate sitemap
```
**What it does:** Creates `public/sitemap.xml` for SEO optimization.

**Details:**
- Generates XML sitemap following sitemap.org protocol
- Includes all main pages with priority and change frequency
- Helps search engines discover and index your pages
- Updates automatically each time you run the command
- Located in `public/` so it's accessible at `/sitemap.xml`
- Includes: Home, Photography, Projects, About, Contact pages

**When to use:** After adding new pages, or before submitting site to Google Search Console.

#### 5. Performance Check
```bash
npm run automate check
```
**What it does:** Runs basic performance checks on your build.

**Details:**
- Verifies that `.next/` build directory exists
- Confirms successful build completion
- Reports on static page generation
- Reminds you to run Lighthouse for detailed metrics
- Quick sanity check before deployment
- Requires running `npm run build` first

**When to use:** After building, to quickly verify everything compiled correctly.

#### 6. Extract TODOs
```bash
npm run automate todos
```
**What it does:** Scans all TypeScript/JavaScript files for `// TODO` and `// FIXME` comments.

**Details:**
- Recursively searches entire `src/` directory
- Finds comments containing `// TODO` or `// FIXME`
- Reports file path, line number, and comment text
- Helps track in-code tasks and technical debt
- Useful for team collaboration and code reviews
- Outputs in easy-to-read format

**When to use:** Before major releases, during code reviews, or planning sprint work.

#### 7. Run All Automations
```bash
npm run automate all
```
**What it does:** Executes all automation tasks in sequence.

**Details:**
- Runs in order: progress → sitemap → todos → performance check
- Each task's output is shown in console
- Continues even if one task has warnings
- Comprehensive health check of your project
- Takes 2-5 seconds depending on project size
- Great for pre-deployment verification

**Includes:**
- Updates progress tracker
- Generates fresh sitemap
- Extracts all TODO comments
- Runs performance check

**When to use:** End of day wrap-up, before pushing major changes, or weekly project health check.

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
**What it does:** Installs all project dependencies from `package.json`.

**Details:**
- Downloads packages from npm registry
- Creates `node_modules/` folder with all dependencies
- Generates `package-lock.json` for reproducible builds
- Installs both dependencies and devDependencies
- Typical install time: 20-60 seconds
- Required after cloning repo or pulling package.json changes

**When to use:** First time setting up project, after pulling changes that modified package.json, or when node_modules is deleted.

### Update Packages
```bash
npm update
```
**What it does:** Updates all packages to their latest compatible versions.

**Details:**
- Updates packages within version ranges specified in package.json
- Respects semantic versioning (^14.0.0 updates to 14.x.x, not 15.x.x)
- Updates package-lock.json with new versions
- Safer than manually editing package.json
- Does not update to breaking changes (major versions)
- Test thoroughly after updating

**When to use:** Monthly maintenance, security updates, or getting latest patches and features.

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
**What it does:** Deploys to Vercel (requires `npm i -g vercel` first).

**Details:**
- Creates a preview deployment (not production)
- Uploads your code to Vercel's servers
- Runs build automatically in Vercel's infrastructure
- Generates unique preview URL (e.g., project-abc123.vercel.app)
- Allows testing before deploying to production
- First run requires authentication and project linking
- Subsequent runs are faster (cached builds)

**When to use:** Testing features in production-like environment, sharing work with clients, or QA testing.

### Deploy to Vercel (Production)
```bash
vercel --prod
```
**What it does:** Deploys directly to production environment.

**Details:**
- Skips preview and deploys straight to your main domain
- Updates live site immediately
- Runs production build with optimizations
- Updates production URL (e.g., yoursite.com or project.vercel.app)
- No rollback prompt (be sure you want to deploy!)
- Recommended to test with preview deployment first

**When to use:** After testing preview deployment, when ready to update live site with new features or fixes.

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
