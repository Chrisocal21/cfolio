// Progress Tracker Automation Script
// Run this to update PROGRESS.md from PORTFOLIO-BUILD-GUIDE.md

const fs = require('fs');
const path = require('path');

const guideFile = path.join(__dirname, 'PORTFOLIO-BUILD-GUIDE.md');
const progressFile = path.join(__dirname, 'PROGRESS.md');

function analyzeProgress() {
  const content = fs.readFileSync(guideFile, 'utf8');
  
  // Count completed vs total checkboxes
  const totalBoxes = (content.match(/- \[[ x]\]/g) || []).length;
  const completedBoxes = (content.match(/- \[x\]/g) || []).length;
  const percentage = Math.round((completedBoxes / totalBoxes) * 100);
  
  // Extract completed items with ✅
  const completedItems = [];
  const lines = content.split('\n');
  lines.forEach(line => {
    if (line.includes('[x]') && line.includes('✅')) {
      const item = line.replace(/- \[x\]/, '').replace(/✅/g, '').trim();
      if (item) completedItems.push(item);
    }
  });
  
  // Generate progress report
  const report = `# Portfolio Progress Tracker

**Last Updated:** ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

## 📊 Overall Progress: ${percentage}% Complete

**Completed:** ${completedBoxes} / ${totalBoxes} items

### ✅ Recently Completed
${completedItems.slice(-10).map(item => `- ${item}`).join('\n') || '- No items yet'}

### 📊 Progress Breakdown
- Total Checklist Items: ${totalBoxes}
- Completed: ${completedBoxes}
- Remaining: ${totalBoxes - completedBoxes}

---

*Auto-generated from PORTFOLIO-BUILD-GUIDE.md*
*Run \`node update-progress.js\` to refresh this file*
`;

  fs.writeFileSync(progressFile, report);
  console.log(`✅ Progress updated: ${percentage}% complete (${completedBoxes}/${totalBoxes})`);
}

// Run if called directly
if (require.main === module) {
  analyzeProgress();
}

module.exports = { analyzeProgress };
