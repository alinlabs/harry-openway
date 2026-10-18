const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Setting all titles above cards to Bold & Black ===');

for (let i = 2; i <= 7; i++) {
  const num = i < 10 ? '0' + i : '' + i;
  const slidePath = path.join(__dirname, `../src/slide/${num}/index.tsx`);
  if (!fs.existsSync(slidePath)) continue;

  let content = fs.readFileSync(slidePath, 'utf8');

  // Replace text-slate-600 in the title container above cards with font-bold text-black
  content = content.replace(
    /<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1\.5">/g,
    '<div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1 mb-1.5">'
  );

  // For Slide 02
  content = content.replace(
    /<span>\{benchmarkLabels\.dimension\}<\/span>/g,
    '<span className="font-bold text-black">{benchmarkLabels.dimension}</span>'
  );

  // For Slide 03
  content = content.replace(
    /<span>\{dossierTitle\}<\/span>/g,
    '<span className="font-bold text-black">{dossierTitle}</span>'
  );

  // For Slide 04
  content = content.replace(
    /<span>\{frameworkTitle\}<\/span>/g,
    '<span className="font-bold text-black">{frameworkTitle}</span>'
  );

  // For Slide 05
  content = content.replace(
    /<span>\{phasesTitle\}<\/span>/g,
    '<span className="font-bold text-black">{phasesTitle}</span>'
  );

  // For Slide 06
  content = content.replace(
    /<span>\{commitmentsTitle\}<\/span>/g,
    '<span className="font-bold text-black">{commitmentsTitle}</span>'
  );

  // For Slide 07
  content = content.replace(
    /<span>\{tacticsTitle\}<\/span>/g,
    '<span className="font-bold text-black">{tacticsTitle}</span>'
  );

  fs.writeFileSync(slidePath, content, 'utf8');
  console.log(`Slide ${num} updated to bold & black title.`);
}

console.log('All card titles are now bold & black!');
