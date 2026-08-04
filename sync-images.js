import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const sourceDirs = [
  './gallery images',
  './CALABAR SCHOOLS'
];

let sourceDir = '';
for (const dir of sourceDirs) {
  if (fs.existsSync(dir)) {
    sourceDir = dir;
    break;
  }
}

const destDir = './src/components';

if (sourceDir) {
  const files = fs.readdirSync(sourceDir);
  console.log(`Found ${files.length} raw files in ${sourceDir}`);
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  let copiedCount = 0;
  let skippedCount = 0;

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const srcPath = path.join(sourceDir, file);
      
      // Sanitize filename to avoid build or reference problems in Vite
      const cleanName = file
        .replace(/\s+/g, '_')
        .replace(/[()]/g, '')
        .toLowerCase();
        
      const destFile = `gallery_calabar_${cleanName}`;
      const destPath = path.join(destDir, destFile);

      // Copy and optimize if it doesn't exist or the source file is newer
      let shouldProcess = !fs.existsSync(destPath);
      if (fs.existsSync(destPath)) {
        const srcStats = fs.statSync(srcPath);
        const destStats = fs.statSync(destPath);
        if (srcStats.mtime > destStats.mtime) {
          shouldProcess = true;
        }
      }

      if (shouldProcess) {
        try {
          // Use convert to resize to max 640px and high compression (quality 60) for extreme performance
          execSync(`convert "${srcPath}" -resize "640x640>" -quality 60 "${destPath}"`);
          console.log(`  Processed & Compressed: ${file} -> ${destFile}`);
          copiedCount++;
        } catch (err) {
          // Fallback to direct copy if convert fails
          try {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  Copied (Direct - convert failed): ${file} -> ${destFile}`);
            copiedCount++;
          } catch (copyErr) {
            console.error(`  [ERROR] Failed to copy ${file}:`, copyErr.message);
          }
        }
      } else {
        skippedCount++;
      }
    }
  });

  console.log(`Synchronization complete! Processed/Compressed: ${copiedCount}, Skipped: ${skippedCount}`);
} else {
  console.log("No raw source directories found; skipping synchronization. Using pre-existing optimized gallery images under src/components.");
}
