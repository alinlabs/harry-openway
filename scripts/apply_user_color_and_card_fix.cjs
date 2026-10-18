const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Applying User Requests 8, 9 & 10 ===');

// 1. Check Slide 01
const s01Path = path.join(__dirname, '../src/slide/01/index.tsx');
let s01 = fs.readFileSync(s01Path, 'utf8');

// Ensure title above description is pure text-black
s01 = s01.replace(/text-slate-900 pt-0.5/g, 'text-black font-extrabold pt-0.5');
s01 = s01.replace(/text-slate-500 font-semibold uppercase/g, 'text-slate-500 font-semibold uppercase');
fs.writeFileSync(s01Path, s01, 'utf8');
console.log('Slide 01 updated.');

// 2. Iterate through Slide 02 to 07
for (let i = 2; i <= 7; i++) {
  const num = i < 10 ? '0' + i : '' + i;
  const slidePath = path.join(__dirname, `../src/slide/${num}/index.tsx`);
  if (!fs.existsSync(slidePath)) continue;

  let content = fs.readFileSync(slidePath, 'utf8');

  // Request 8:
  // a) small title above main title: gray (text-slate-500 / text-slate-400)
  // Ensure header category & catalyst are text-slate-500
  content = content.replace(
    /<div className="text-\[11px\] font-semibold uppercase tracking-wider[^"]*">/g,
    '<div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">'
  );
  content = content.replace(/<span className="text-slate-500">\{header\.category\}<\/span>/g, '<span className="text-slate-400">{header.category}</span>');
  content = content.replace(/<span className="text-slate-500 font-normal">\{header\.catalyst\}<\/span>/g, '<span className="text-slate-400 font-normal">{header.catalyst}</span>');

  // b) main title bold & big: blue (text-blue-600)
  content = content.replace(
    /<h1 className="[^"]*font-black[^"]*\{header\.title\}[^<]*<\/h1>/g,
    '<h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{header.title}</h1>'
  );

  // c) text judul diatas deskripsi warnanya hitam (text-black)
  content = content.replace(
    /<h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">/g,
    '<h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">'
  );

  // Request 9:
  // "perbaiki di bawah deskripsi itu seperti ada card card dimulai dari halaman 3 - 7
  // itu buatkan tidak ada yang di klik dulu karna tujuannya karna hanya untuk di tampilkan jadi normal
  // dan tidak ada outline biru atau kuning pada card nya atau tidk ada card status aktif di card tersebut"

  // Neutralize cards below description:
  // Remove any pointer-events, active ring, or colored borders
  content = content.replace(
    /className="p-2(?:\.5)? rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left"/g,
    'className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-left select-none pointer-events-none cursor-default"'
  );

  // Remove blue/amber/yellow highlight badges on header inside cards
  content = content.replace(/text-blue-600 flex items-center gap-1 font-mono text-\[9px\]/g, 'text-slate-400 flex items-center gap-1 font-mono text-[9px]');
  content = content.replace(/text-amber-600 flex items-center gap-1 font-mono text-\[9px\] font-bold/g, 'text-slate-400 flex items-center gap-1 font-mono text-[9px]');
  content = content.replace(/text-emerald-600 flex items-center gap-1 font-mono text-\[9px\] font-bold/g, 'text-slate-400 flex items-center gap-1 font-mono text-[9px]');

  // Neutralize metric cards on the right (which had blue-50 border-blue-100 or amber-50 border-amber-100)
  content = content.replace(/bg-blue-50\/50 border border-blue-100/g, 'bg-slate-50/80 border border-slate-200/70');
  content = content.replace(/bg-amber-50\/50 border border-amber-100/g, 'bg-slate-50/80 border border-slate-200/70');

  // Neutralize bottom 4 pillar cards so there are no yellow or blue outline borders
  content = content.replace(
    /'#fbbc04': 'border-\[#fbbc04\] bg-\[#fef7e0\]\/40 text-\[#b08000\]',/g,
    "'#fbbc04': 'border-slate-200 bg-slate-50/60 text-slate-700',"
  );
  content = content.replace(
    /'#1a73e8': 'border-\[#1a73e8\] bg-\[#e8f0fe\]\/40 text-\[#1a73e8\]',/g,
    "'#1a73e8': 'border-slate-200 bg-slate-50/60 text-slate-700',"
  );
  content = content.replace(
    /'#ea4335': 'border-\[#ea4335\] bg-\[#fce8e6\]\/40 text-\[#c5221f\]',/g,
    "'#ea4335': 'border-slate-200 bg-slate-50/60 text-slate-700',"
  );
  content = content.replace(
    /'#34a853': 'border-\[#34a853\] bg-\[#e6f4ea\]\/40 text-\[#137333\]',/g,
    "'#34a853': 'border-slate-200 bg-slate-50/60 text-slate-700',"
  );

  fs.writeFileSync(slidePath, content, 'utf8');
  console.log(`Slide ${num} updated.`);
}

console.log('All slides updated successfully.');
