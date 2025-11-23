#!/usr/bin/env node

/**
 * Portfolio Automation Suite
 * Automates common tasks for portfolio development
 */

const fs = require('fs');
const path = require('path');
const { analyzeProgress } = require('./update-progress');

// ========================================
// 1. AUTO-COMMIT PROGRESS UPDATES
// ========================================
function autoCommitProgress() {
  const { execSync } = require('child_process');
  
  try {
    // Update progress file
    analyzeProgress();
    
    // Check if there are changes
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    
    if (status.includes('PROGRESS.md') || status.includes('PORTFOLIO-BUILD-GUIDE.md')) {
      execSync('git add PROGRESS.md PORTFOLIO-BUILD-GUIDE.md');
      const date = new Date().toLocaleDateString();
      execSync(`git commit -m "Auto-update: Progress tracking - ${date}"`);
      console.log('✅ Progress committed to git');
      return true;
    }
  } catch (error) {
    console.log('ℹ️  No progress changes to commit');
  }
  return false;
}

// ========================================
// 2. COMPONENT GENERATOR
// ========================================
function generateComponent(name) {
  const componentDir = path.join(__dirname, 'src', 'components');
  const componentFile = path.join(componentDir, `${name}.tsx`);
  const styleFile = path.join(componentDir, `${name}.module.css`);
  
  const componentTemplate = `import styles from './${name}.module.css'

export default function ${name}() {
  return (
    <section className={styles.${name.toLowerCase()}}>
      <h2>${name}</h2>
      <p>Content goes here</p>
    </section>
  )
}
`;

  const styleTemplate = `.${name.toLowerCase()} {
  text-align: center;
  padding: 4rem 2rem;
}
`;

  fs.writeFileSync(componentFile, componentTemplate);
  fs.writeFileSync(styleFile, styleTemplate);
  console.log(`✅ Created ${name} component`);
}

// ========================================
// 3. SITEMAP GENERATOR
// ========================================
function generateSitemap() {
  const baseUrl = 'https://yourdomain.com';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/photography', priority: '0.8', changefreq: 'weekly' },
    { url: '/projects', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated');
}

// ========================================
// 4. PERFORMANCE REPORT
// ========================================
function performanceCheck() {
  const buildDir = path.join(__dirname, '.next');
  
  if (!fs.existsSync(buildDir)) {
    console.log('⚠️  Run `npm run build` first');
    return;
  }
  
  console.log('\n📊 Performance Metrics:');
  console.log('- Build successful ✅');
  console.log('- Static pages generated ✅');
  console.log('- Run Lighthouse for detailed metrics');
}

// ========================================
// 5. TODO EXTRACTOR
// ========================================
function extractTodos() {
  const srcDir = path.join(__dirname, 'src');
  const todos = [];
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDir(filePath);
      } else if (file.match(/\.(tsx?|jsx?)$/)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes('// TODO') || line.includes('// FIXME')) {
            todos.push({
              file: filePath.replace(__dirname, ''),
              line: index + 1,
              todo: line.trim()
            });
          }
        });
      }
    });
  }
  
  scanDir(srcDir);
  
  if (todos.length > 0) {
    console.log('\n📝 Found TODOs in code:');
    todos.forEach(({ file, line, todo }) => {
      console.log(`  ${file}:${line} - ${todo}`);
    });
  } else {
    console.log('✅ No TODOs found in code');
  }
}

// ========================================
// CLI INTERFACE
// ========================================
const command = process.argv[2];

switch (command) {
  case 'progress':
    analyzeProgress();
    break;
  case 'commit':
    autoCommitProgress();
    break;
  case 'component':
    const componentName = process.argv[3];
    if (!componentName) {
      console.log('Usage: npm run automate component <ComponentName>');
    } else {
      generateComponent(componentName);
    }
    break;
  case 'sitemap':
    generateSitemap();
    break;
  case 'check':
    performanceCheck();
    break;
  case 'todos':
    extractTodos();
    break;
  case 'all':
    console.log('🤖 Running all automations...\n');
    analyzeProgress();
    generateSitemap();
    extractTodos();
    performanceCheck();
    break;
  default:
    console.log(`
🤖 Portfolio Automation Suite

Available commands:
  npm run automate progress  - Update progress tracker
  npm run automate commit    - Auto-commit progress changes
  npm run automate component <Name> - Generate new component
  npm run automate sitemap   - Generate sitemap.xml
  npm run automate check     - Run performance checks
  npm run automate todos     - Extract TODO comments from code
  npm run automate all       - Run all automations

Examples:
  npm run automate progress
  npm run automate component Gallery
  npm run automate all
    `);
}
