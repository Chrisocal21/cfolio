const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'photography');
const outputDir = path.join(__dirname, 'public', 'photography-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(inputDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext) && file !== 'README.md';
});

console.log(`Found ${files.length} images to optimize...\n`);

// Optimize each image
Promise.all(
  files.map(async (file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(2);
    
    try {
      await sharp(inputPath)
        .resize(1920, 1080, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 85,
          progressive: true
        })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
      
      console.log(`✓ ${file}`);
      console.log(`  ${originalSize} KB → ${newSize} KB (${savings}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  })
).then(() => {
  console.log('✅ All images optimized!');
  console.log(`\nOptimized images saved to: ${outputDir}`);
  console.log('\nNext steps:');
  console.log('1. Review the optimized images');
  console.log('2. If satisfied, replace the original files:');
  console.log('   - Delete files in public/photography');
  console.log('   - Move files from public/photography-optimized to public/photography');
}).catch(error => {
  console.error('Error during optimization:', error);
});
