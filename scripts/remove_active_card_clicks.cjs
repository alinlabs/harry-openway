const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Removing Card Clicks and Active Outline States from Slides 03-07 ===');

// 1. Slide 03
const slide03Path = path.join(__dirname, '../src/slide/03/index.tsx');
let slide03 = fs.readFileSync(slide03Path, 'utf8');

slide03 = slide03.replace(
  /\{tiers\.map\(\(tier, idx\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{tier\.id\}[\s\S]*?onClick=\{[\s\S]*?className=\{[\s\S]*?\}[\s\S]*?>/,
  `{tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left transition-colors"`
);
// replace closing bracket of map
slide03 = slide03.replace(
  /\s*\}\);\s*\}\)\}\s*<\/div>/,
  `\n                </div>\n              ))}\n          </div>`
);
// Clean up badge styling
slide03 = slide03.replace(
  /<span className=\{\s*"text-\[9px\] font-mono font-bold px-1\.5 py-0\.2 rounded " \+\s*\([\s\S]*?\)\s*\}>/,
  '<span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">'
);
fs.writeFileSync(slide03Path, slide03, 'utf8');
console.log('[OK] Updated Slide 03');

// 2. Slide 04
const slide04Path = path.join(__dirname, '../src/slide/04/index.tsx');
let slide04 = fs.readFileSync(slide04Path, 'utf8');

slide04 = slide04.replace(
  /\{layers\.map\(\(layer, idx\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{layer\.id\}[\s\S]*?onClick=\{[\s\S]*?className=\{[\s\S]*?\}[\s\S]*?>/,
  `{layers.map((layer) => (
                <div
                  key={layer.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left transition-colors"`
);
slide04 = slide04.replace(
  /\s*\}\);\s*\}\)\}\s*<\/div>/,
  `\n                </div>\n              ))}\n          </div>`
);
slide04 = slide04.replace(
  /<span className=\{\s*"text-\[9px\] font-mono font-bold px-1\.5 py-0\.2 rounded " \+\s*\([\s\S]*?\)\s*\}>/,
  '<span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">'
);
fs.writeFileSync(slide04Path, slide04, 'utf8');
console.log('[OK] Updated Slide 04');

// 3. Slide 05
const slide05Path = path.join(__dirname, '../src/slide/05/index.tsx');
let slide05 = fs.readFileSync(slide05Path, 'utf8');

slide05 = slide05.replace(
  /\{phases\.map\(\(phase, idx\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{phase\.id\}[\s\S]*?onClick=\{[\s\S]*?className=\{[\s\S]*?\}[\s\S]*?>/,
  `{phases.map((phase) => (
                <div
                  key={phase.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left transition-colors"`
);
slide05 = slide05.replace(
  /\s*\}\);\s*\}\)\}\s*<\/div>/,
  `\n                </div>\n              ))}\n          </div>`
);
slide05 = slide05.replace(
  /<span className=\{\s*"text-\[9px\] font-mono font-bold px-1\.5 py-0\.2 rounded " \+\s*\([\s\S]*?\)\s*\}>/,
  '<span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">'
);
fs.writeFileSync(slide05Path, slide05, 'utf8');
console.log('[OK] Updated Slide 05');

// 4. Slide 06
const slide06Path = path.join(__dirname, '../src/slide/06/index.tsx');
let slide06 = fs.readFileSync(slide06Path, 'utf8');

slide06 = slide06.replace(
  /\{commitments\.map\(\(item, idx\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{item\.id\}[\s\S]*?onClick=\{[\s\S]*?className=\{[\s\S]*?\}[\s\S]*?>/,
  `{commitments.map((item) => (
                <div
                  key={item.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left transition-colors"`
);
slide06 = slide06.replace(
  /\s*\}\);\s*\}\)\}\s*<\/div>/,
  `\n                </div>\n              ))}\n          </div>`
);
slide06 = slide06.replace(
  /<span className=\{\s*"text-\[9px\] font-mono font-bold px-1\.5 py-0\.2 rounded " \+\s*\([\s\S]*?\)\s*\}>/,
  '<span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">'
);
fs.writeFileSync(slide06Path, slide06, 'utf8');
console.log('[OK] Updated Slide 06');

// 5. Slide 07
const slide07Path = path.join(__dirname, '../src/slide/07/index.tsx');
let slide07 = fs.readFileSync(slide07Path, 'utf8');

slide07 = slide07.replace(
  /\{tactics\.map\(\(tactic, idx\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{tactic\.id\}[\s\S]*?onClick=\{[\s\S]*?className=\{[\s\S]*?\}[\s\S]*?>/,
  `{tactics.map((tactic) => (
                <div
                  key={tactic.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left transition-colors"`
);
slide07 = slide07.replace(
  /\s*\}\);\s*\}\)\}\s*<\/div>/,
  `\n                </div>\n              ))}\n          </div>`
);
slide07 = slide07.replace(
  /<span className=\{\s*"text-\[9px\] font-mono font-bold px-1\.5 py-0\.2 rounded " \+\s*\([\s\S]*?\)\s*\}>/,
  '<span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">'
);
fs.writeFileSync(slide07Path, slide07, 'utf8');
console.log('[OK] Updated Slide 07');

console.log('=== All Card States Updated to Static Clean Display ===');
