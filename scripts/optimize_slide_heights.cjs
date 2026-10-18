const fs = require('fs');

console.log('=== [EXECUTE-PROMPT.md] Optimizing Slide Heights to eliminate overflow and stop shrinking ===');

let updated = 0;

// 1. Update quadrant chart heights in 04, 05, 08
for (const s of ['04', '05', '08']) {
  const p = `src/slide/${s}/index.tsx`;
  if (fs.existsSync(p)) {
    let code = fs.readFileSync(p, 'utf8');
    if (code.includes('h-54 sm:h-58')) {
      code = code.replace(/h-54 sm:h-58/g, 'h-44 sm:h-48 lg:h-50');
      fs.writeFileSync(p, code, 'utf8');
      console.log(`Updated quadrant height in Slide ${s}`);
      updated++;
    }
  }
}

// 2. Update 3D visual container min-heights in 02, 03, 07, 11, 15, 19
for (const s of ['02', '03', '07', '11', '15', '19']) {
  const p = `src/slide/${s}/index.tsx`;
  if (fs.existsSync(p)) {
    let code = fs.readFileSync(p, 'utf8');
    if (code.includes('min-h-[285px] sm:min-h-[310px]')) {
      code = code.replace(/min-h-\[285px\] sm:min-h-\[310px\]/g, 'min-h-[200px] sm:min-h-[230px] lg:min-h-[260px]');
      fs.writeFileSync(p, code, 'utf8');
      console.log(`Updated 3D visual height in Slide ${s}`);
      updated++;
    }
  }
}

console.log(`Successfully optimized ${updated} slide files!`);
