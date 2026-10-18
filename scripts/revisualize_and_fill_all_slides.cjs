const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Batch Revisualization & Zero-Void Density Enforcement ===');

let updatedFiles = 0;

for (let i = 1; i <= 19; i++) {
  const pad = String(i).padStart(2, '0');
  const filePath = path.join(__dirname, `../src/slide/${pad}/index.tsx`);
  if (!fs.existsSync(filePath)) continue;

  let code = fs.readFileSync(filePath, 'utf8');
  const orig = code;

  // 1. Enlarge Quadrant Chart containers for prominent visual presence
  code = code.replace(/h-50 sm:h-52/g, 'h-54 sm:h-58');

  // 2. Enlarge 3D / Lottie containers so visuals are commanding and tall
  code = code.replace(/min-h-\[260px\] sm:min-h-\[290px\]/g, 'min-h-[285px] sm:min-h-[310px]');
  code = code.replace(/min-h-\[240px\] sm:min-h-\[270px\]/g, 'min-h-[280px] sm:min-h-[305px]');

  // 3. Enlarge Action Cards hero metrics on Slides 12-14, 16-18
  code = code.replace(/text-lg sm:text-xl font-black text-blue-600/g, 'text-2xl sm:text-3xl font-black text-blue-600');
  code = code.replace(/text-lg font-black text-blue-600/g, 'text-2xl sm:text-3xl font-black text-blue-600');
  code = code.replace(/text-base sm:text-lg font-black text-slate-900 font-mono/g, 'text-xl sm:text-2xl font-black text-slate-900 font-mono');

  // 4. Strengthen card titles across all slides to be bold, black, and punchy
  code = code.replace(/text-sm sm:text-base font-bold text-slate-900/g, 'text-sm sm:text-base font-black text-slate-900');
  code = code.replace(/text-xs sm:text-sm font-bold text-slate-900/g, 'text-xs sm:text-sm font-black text-slate-900');

  // 5. Ensure bottom value pillars are bold and readable
  code = code.replace(/text-xs font-bold text-slate-900/g, 'text-xs sm:text-[13px] font-black text-slate-900');
  code = code.replace(/text-\[11px\] font-bold text-slate-900/g, 'text-xs sm:text-[13px] font-black text-slate-900');
  code = code.replace(/text-xs font-mono font-bold text-blue-700/g, 'text-xs sm:text-sm font-mono font-black text-blue-700');
  code = code.replace(/text-\[10px\] font-mono font-bold text-blue-700/g, 'text-xs sm:text-sm font-mono font-black text-blue-700');

  // 6. Ensure takeaway bar is crisp and clear
  code = code.replace(/text-\[10px\] flex items-center gap-1\.5 font-inter/g, 'text-[11px] sm:text-xs flex items-center gap-2 font-inter font-medium');
  code = code.replace(/text-\[10px\] font-mono/g, 'text-[11px] sm:text-xs font-mono font-bold');

  if (code !== orig) {
    fs.writeFileSync(filePath, code, 'utf8');
    updatedFiles++;
    console.log(`Updated Slide ${pad}`);
  }
}

console.log(`Completed revisualization batch across ${updatedFiles} slides!`);
