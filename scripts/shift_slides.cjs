const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Reorganizing 7 Slides to 10 Slides (Tier 1-3 Dedicated Slides) ===');

const SLIDE_DIR = path.join(__dirname, '../src/slide');

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Shift old slides 04..07 to 07..10:
// First, backup old slides 04, 05, 06, 07 to temporary locations
const temp04 = path.join(SLIDE_DIR, '_temp_04');
const temp05 = path.join(SLIDE_DIR, '_temp_05');
const temp06 = path.join(SLIDE_DIR, '_temp_06');
const temp07 = path.join(SLIDE_DIR, '_temp_07');

if (fs.existsSync(path.join(SLIDE_DIR, '04'))) copyDirSync(path.join(SLIDE_DIR, '04'), temp04);
if (fs.existsSync(path.join(SLIDE_DIR, '05'))) copyDirSync(path.join(SLIDE_DIR, '05'), temp05);
if (fs.existsSync(path.join(SLIDE_DIR, '06'))) copyDirSync(path.join(SLIDE_DIR, '06'), temp06);
if (fs.existsSync(path.join(SLIDE_DIR, '07'))) copyDirSync(path.join(SLIDE_DIR, '07'), temp07);

console.log('Backed up slides 04-07 to temp directories.');

// Helper to rewrite names inside a shifted slide
function renameSlideFiles(targetDir, oldNum, newNum) {
  const files = ['index.tsx', 'container.tsx', 'data.ts', 'visual-3D.tsx'];
  for (const f of files) {
    const filePath = path.join(targetDir, f);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const oldRegex1 = new RegExp(`Slide${oldNum}`, 'g');
      const oldRegex2 = new RegExp(`slide${oldNum}`, 'g');
      const oldRegex3 = new RegExp(`SLIDE${oldNum}`, 'g');
      const oldRegex4 = new RegExp(`slide-${oldNum}`, 'g');
      content = content.replace(oldRegex1, `Slide${newNum}`);
      content = content.replace(oldRegex2, `slide${newNum}`);
      content = content.replace(oldRegex3, `SLIDE${newNum}`);
      content = content.replace(oldRegex4, `slide-${newNum}`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

// Destination targets:
// Former 07 becomes 10
const dir10 = path.join(SLIDE_DIR, '10');
copyDirSync(temp07, dir10);
renameSlideFiles(dir10, '07', '10');
console.log('Created Slide 10 from old Slide 07.');

// Former 06 becomes 09
const dir09 = path.join(SLIDE_DIR, '09');
copyDirSync(temp06, dir09);
renameSlideFiles(dir09, '06', '09');
console.log('Created Slide 09 from old Slide 06.');

// Former 05 becomes 08
const dir08 = path.join(SLIDE_DIR, '08');
copyDirSync(temp05, dir08);
renameSlideFiles(dir08, '05', '08');
console.log('Created Slide 08 from old Slide 05.');

// Former 04 becomes 07
const dir07 = path.join(SLIDE_DIR, '07');
copyDirSync(temp04, dir07);
renameSlideFiles(dir07, '04', '07');
console.log('Created Slide 07 from old Slide 04.');

// Clean up temp dirs
fs.rmSync(temp04, { recursive: true, force: true });
fs.rmSync(temp05, { recursive: true, force: true });
fs.rmSync(temp06, { recursive: true, force: true });
fs.rmSync(temp07, { recursive: true, force: true });
console.log('Cleaned up temporary directories.');

console.log('Shift completed. Ready to create Slide 04, 05, and 06.');
