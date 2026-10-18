const fs = require('fs');
const path = require('path');

console.log('=== REMEDYING EMPTY SPACES ACROSS ALL SLIDES (PADAT, BERJARAK, MEWAH) ===');

// 1. Scale up Lottie in all visual-3D.tsx components
const visualSlides = ['01', '02', '03', '07', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
let visualCount = 0;
for (const s of visualSlides) {
  const p = path.join('src', 'slide', s, 'visual-3D.tsx');
  if (fs.existsSync(p)) {
    let code = fs.readFileSync(p, 'utf8');
    if (code.includes('className="w-full h-full max-h-[270px]')) {
      code = code.replace(
        'className="w-full h-full max-h-[270px] object-contain drop-shadow-xs"',
        'className="w-full h-full min-h-[260px] max-h-[340px] scale-120 object-contain drop-shadow-sm"'
      );
      fs.writeFileSync(p, code, 'utf8');
      visualCount++;
      console.log(`[VISUAL-3D] Scaled up Lottie in Slide ${s}`);
    }
  }
}
console.log(`==> Scaled ${visualCount} visual-3D components.`);

// 2. Harmonize Slides 07, 11, 15, 19 (Split 6:6 on Right side with rich card heights)
const pairSlides = ['07', '11', '15', '19'];
for (const s of pairSlides) {
  const p = path.join('src', 'slide', s, 'index.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');

    // Right column split: change md:col-span-7 to md:col-span-6 and md:col-span-5 to md:col-span-6
    content = content.replace(
      '<div className="md:col-span-7 h-full min-h-[260px] sm:min-h-[290px] flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">',
      '<div className="md:col-span-6 h-full min-h-[260px] sm:min-h-[290px] flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">'
    );
    content = content.replace(
      '<div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">',
      '<div className="md:col-span-6 flex flex-col justify-between h-full border-l border-slate-200/80 pl-4 space-y-2.5">'
    );

    // Expand Left column cards
    content = content.replace(
      '<div className="space-y-1.5 pt-2 border-t border-slate-100">',
      '<div className="flex-1 flex flex-col justify-between space-y-2 mt-1.5 pt-1 border-t border-slate-100">'
    );

    // Expand card padding on left items
    content = content.replace(
      /className="p-2\.5 rounded-lg border border-slate-200\/80 bg-slate-50\/70 text-left select-none pointer-events-none cursor-default"/g,
      'className="p-3 sm:p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/80 text-left select-none pointer-events-none cursor-default flex-1 flex flex-col justify-between"'
    );

    // Elevate hero metric number
    content = content.replace(
      'className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5"',
      'className="text-3xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight my-1"'
    );

    // Elevate hero metric card
    content = content.replace(
      'className="p-2.5 rounded bg-slate-50/80 border border-slate-200/70"',
      'className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex flex-col justify-between flex-1"'
    );

    fs.writeFileSync(p, content, 'utf8');
    console.log(`[HARMONIZED] Slide ${s} balanced 6:6 with rich card heights.`);
  }
}

// 3. Enrich Slides 12, 13, 14, 16, 17, 18 with 3 full specs tiles and rich card padding
const initiativeSlides = ['12', '13', '14', '16', '17', '18'];
for (const s of initiativeSlides) {
  const p = path.join('src', 'slide', s, 'index.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');

    // Replace 2-spec slice with all 3 specs in 3-column grid
    const oldSpecBlock = `<div className="grid grid-cols-2 gap-2 py-1">
              {card.specs?.slice(0, 2).map((spec, spIdx) => (
                <div key={spIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold truncate">
                    {spec.label}
                  </div>
                  <div className="text-sm sm:text-base font-black text-blue-700 font-mono mt-0.5 truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>`;

    const newSpecBlock = `<div className="grid grid-cols-3 gap-1.5 py-1.5">
              {card.specs?.map((spec, spIdx) => (
                <div key={spIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold truncate">
                    {spec.label}
                  </div>
                  <div className="text-xs sm:text-[13px] font-black text-blue-700 font-mono mt-0.5 truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>`;

    if (content.includes('card.specs?.slice(0, 2)')) {
      content = content.replace(oldSpecBlock, newSpecBlock);
      fs.writeFileSync(p, content, 'utf8');
      console.log(`[INITIATIVE] Slide ${s} enriched with full 3-spec KPI tiles.`);
    }
  }
}

console.log('=== BATCH EXECUTION FINISHED SUCCESSFULLY ===');
