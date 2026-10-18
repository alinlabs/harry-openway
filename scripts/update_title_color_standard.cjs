const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Updating Title Color Standard Across All Slides ===');
console.log('Rule: Description title = BLACK, Small eyebrow title = GRAY, Large bold main title = BLUE');

// 1. Update Slide 01
const slide01Path = path.join(__dirname, '../src/slide/01/index.tsx');
let slide01Content = fs.readFileSync(slide01Path, 'utf8');

// Update eyebrow to slate-500 gray
slide01Content = slide01Content.replace(
  /<div className="text-\[11px\] font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-2">/,
  '<div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">'
);
slide01Content = slide01Content.replace(
  /<span>\{eyebrow\.category\}<\/span>/,
  '<span className="text-slate-500">{eyebrow.category}</span>'
);

// Update main title to blue-600
slide01Content = slide01Content.replace(
  /<h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">/,
  '<h1 className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight leading-none">'
);

// Update role title above description to slate-900 black
slide01Content = slide01Content.replace(
  /<p className="text-base font-semibold text-blue-600 pt-0\.5">/,
  '<p className="text-base font-bold text-slate-900 pt-0.5">'
);

fs.writeFileSync(slide01Path, slide01Content, 'utf8');
console.log('[OK] Updated src/slide/01/index.tsx');

// 2. Update Slides 02 to 07
for (let i = 2; i <= 7; i++) {
  const num = i < 10 ? '0' + i : '' + i;
  const slidePath = path.join(__dirname, `../src/slide/${num}/index.tsx`);
  let content = fs.readFileSync(slidePath, 'utf8');

  // Eyebrow div: text-blue-600 -> text-slate-500
  content = content.replace(
    /text-\[11px\] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2/,
    'text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center justify-center gap-2'
  );
  content = content.replace(
    /<span>\{header\.category\}<\/span>/,
    '<span className="text-slate-500">{header.category}</span>'
  );

  // Main title: text-slate-900 -> text-blue-600
  content = content.replace(
    /text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight/,
    'text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight'
  );

  // Description title in left column: text-blue-600 -> text-slate-900
  content = content.replace(
    /text-sm sm:text-base font-bold text-blue-600 tracking-tight/g,
    'text-sm sm:text-base font-bold text-slate-900 tracking-tight'
  );

  fs.writeFileSync(slidePath, content, 'utf8');
  console.log(`[OK] Updated src/slide/${num}/index.tsx`);
}

// 3. Update SYSTEM-INSTRUCTION.md to preserve this standard
const systemInstructionPath = path.join(__dirname, '../SYSTEM-INSTRUCTION.md');
let systemContent = fs.readFileSync(systemInstructionPath, 'utf8');

systemContent = systemContent.replace(
  /1\. \*\*Line 1 - Sub Judul Kecil Diatas \(Kategori \/ Eyebrow\)\*\*:[^]*?text-blue-600\)\./,
  '1. **Line 1 - Sub Judul Kecil Diatas (Kategori / Eyebrow)**: Teks pengantar konteks (misal: `"Market Conditions & Potential · Regulatory Catalyst: BSPI 2030"`), rata tengah bernuansa **ABU-ABU** (`flex items-center justify-center text-center text-[11px] font-semibold uppercase tracking-wider text-slate-500`).'
);

systemContent = systemContent.replace(
  /2\. \*\*Line 2 - Judul Utama Besar\*\*:[^]*?font-black text-slate-900 tracking-tight leading-tight\)\./,
  '2. **Line 2 - Judul Utama Besar**: (misal: `"Indonesia Payment Market & WAY4 Vector"`), WAJIB **1 LINE / SATU BARIS** utuh, tebal dan berwarna **BIRU GOOGLE** (`whitespace-nowrap overflow-hidden text-ellipsis`, ukuran responsif proporsional `text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight`).'
);

systemContent = systemContent.replace(
  /Teks deskriptor topik \(misal: `"Legacy Monolith Migration to Cloud-Native Switching"`\) diposisikan di \*\*kolom kiri sebagai Judul Deskripsi\*\* \(`text-sm sm:text-base font-bold text-blue-600 tracking-tight`\)/,
  'Teks deskriptor topik (misal: `"Legacy Monolith Migration to Cloud-Native Switching"`) diposisikan di **kolom kiri sebagai Judul Deskripsi** berwarna **HITAM** (`text-sm sm:text-base font-bold text-slate-900 tracking-tight`)'
);

fs.writeFileSync(systemInstructionPath, systemContent, 'utf8');
console.log('[OK] Updated SYSTEM-INSTRUCTION.md standard documentation');

console.log('=== All Title Color Updates Completed Successfully! ===');
