const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Updating Card Badges and Section Titles ===');

// --- SLIDE 03 ---
const s03Path = path.join(__dirname, '../src/slide/03/index.tsx');
let s03 = fs.readFileSync(s03Path, 'utf8');

s03 = s03.replace(
  /<div className="text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">\s*\{dossierTitle\}\s*<\/div>/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">
              <span>{dossierTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/60">
                3 Tiers
              </span>
            </div>`
);

s03 = s03.replace(
  /\{tiers\.map\(\(tier\)/,
  `{tiers.map((tier, idx)`
);

s03 = s03.replace(
  /<span className="text-\[9px\] font-mono font-bold px-1\.5 py-0\.5 rounded bg-slate-100 text-slate-600">\s*\{tier\.badgeLabel\}\s*<\/span>/,
  `{(() => {
                      const badgeColors = [
                        'bg-blue-50 text-blue-700 border border-blue-100/60',
                        'bg-indigo-50 text-indigo-700 border border-indigo-100/60',
                        'bg-emerald-50 text-emerald-700 border border-emerald-100/60'
                      ];
                      const badgeCls = badgeColors[idx % badgeColors.length];
                      return (
                        <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                          {tier.badgeLabel}
                        </span>
                      );
                    })()}`
);

fs.writeFileSync(s03Path, s03, 'utf8');
console.log('Slide 03 updated.');

// --- SLIDE 04 ---
const s04Path = path.join(__dirname, '../src/slide/04/index.tsx');
let s04 = fs.readFileSync(s04Path, 'utf8');

s04 = s04.replace(
  /<div className="flex items-center justify-between text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">[\s\S]*?<\/div>/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">
              <span>{frameworkTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/60 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>3 Slabs</span>
              </span>
            </div>`
);

s04 = s04.replace(
  /\{layers\.map\(\(layer\)/,
  `{layers.map((layer, idx)`
);

s04 = s04.replace(
  /<span className="text-\[9px\] font-mono font-bold px-1\.5 py-0\.5 rounded bg-slate-100 text-slate-600">\s*\{layer\.badgeLabel\}\s*<\/span>/,
  `{(() => {
                      const badgeColors = [
                        'bg-blue-50 text-blue-700 border border-blue-100/60',
                        'bg-indigo-50 text-indigo-700 border border-indigo-100/60',
                        'bg-emerald-50 text-emerald-700 border border-emerald-100/60'
                      ];
                      const badgeCls = badgeColors[idx % badgeColors.length];
                      return (
                        <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                          {layer.badgeLabel}
                        </span>
                      );
                    })()}`
);

fs.writeFileSync(s04Path, s04, 'utf8');
console.log('Slide 04 updated.');

// --- SLIDE 05 ---
const s05Path = path.join(__dirname, '../src/slide/05/index.tsx');
let s05 = fs.readFileSync(s05Path, 'utf8');

s05 = s05.replace(
  /<div className="flex items-center justify-between text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">[\s\S]*?<\/div>/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">
              <span>{phasesTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/60 flex items-center gap-1">
                <CalendarCheck2 className="w-3 h-3" />
                <span>3 Sprints</span>
              </span>
            </div>`
);

s05 = s05.replace(
  /\{phases\.map\(\(phase\)/,
  `{phases.map((phase, idx)`
);

s05 = s05.replace(
  /<span className="text-\[9px\] font-mono font-bold px-1\.5 py-0\.5 rounded bg-slate-100 text-slate-600">\s*\{phase\.badgeLabel\}\s*<\/span>/,
  `{(() => {
                      const badgeColors = [
                        'bg-amber-50 text-amber-700 border border-amber-100/60',
                        'bg-blue-50 text-blue-700 border border-blue-100/60',
                        'bg-emerald-50 text-emerald-700 border border-emerald-100/60'
                      ];
                      const badgeCls = badgeColors[idx % badgeColors.length];
                      return (
                        <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                          {phase.badgeLabel}
                        </span>
                      );
                    })()}`
);

fs.writeFileSync(s05Path, s05, 'utf8');
console.log('Slide 05 updated.');

// --- SLIDE 06 ---
const s06Path = path.join(__dirname, '../src/slide/06/index.tsx');
let s06 = fs.readFileSync(s06Path, 'utf8');

s06 = s06.replace(
  /<div className="flex items-center justify-between text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">[\s\S]*?<\/div>/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">
              <span>{commitmentsTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/60 flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>100% Verified</span>
              </span>
            </div>`
);

s06 = s06.replace(
  /\{commitments\.map\(\(item\)/,
  `{commitments.map((item, idx)`
);

s06 = s06.replace(
  /<span className="text-\[9px\] font-mono font-bold px-1\.5 py-0\.5 rounded bg-slate-100 text-slate-600">\s*\{item\.badgeLabel\}\s*<\/span>/,
  `{(() => {
                      const badgeColors = [
                        'bg-emerald-50 text-emerald-700 border border-emerald-100/60',
                        'bg-blue-50 text-blue-700 border border-blue-100/60',
                        'bg-indigo-50 text-indigo-700 border border-indigo-100/60'
                      ];
                      const badgeCls = badgeColors[idx % badgeColors.length];
                      return (
                        <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                          {item.badgeLabel}
                        </span>
                      );
                    })()}`
);

fs.writeFileSync(s06Path, s06, 'utf8');
console.log('Slide 06 updated.');

// --- SLIDE 07 ---
const s07Path = path.join(__dirname, '../src/slide/07/index.tsx');
let s07 = fs.readFileSync(s07Path, 'utf8');

s07 = s07.replace(
  /<div className="flex items-center justify-between text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">[\s\S]*?<\/div>/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">
              <span>{tacticsTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100/60 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Dual Engine Advantage</span>
              </span>
            </div>`
);

s07 = s07.replace(
  /\{tactics\.map\(\(tactic\)/,
  `{tactics.map((tactic, idx)`
);

s07 = s07.replace(
  /<span className="text-\[9px\] font-mono font-bold px-1\.5 py-0\.5 rounded bg-slate-100 text-slate-600">\s*\{tactic\.badgeLabel\}\s*<\/span>/,
  `{(() => {
                      const badgeColors = [
                        'bg-blue-50 text-blue-700 border border-blue-100/60',
                        'bg-emerald-50 text-emerald-700 border border-emerald-100/60',
                        'bg-amber-50 text-amber-700 border border-amber-100/60'
                      ];
                      const badgeCls = badgeColors[idx % badgeColors.length];
                      return (
                        <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                          {tactic.badgeLabel}
                        </span>
                      );
                    })()}`
);

fs.writeFileSync(s07Path, s07, 'utf8');
console.log('Slide 07 updated.');

// --- SLIDE 02 ---
const s02Path = path.join(__dirname, '../src/slide/02/index.tsx');
let s02 = fs.readFileSync(s02Path, 'utf8');
s02 = s02.replace(
  /<div className="flex items-center justify-between text-\[10px\] font-semibold uppercase tracking-wider text-slate-400 px-1">/,
  `<div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1 mb-1.5">`
);
fs.writeFileSync(s02Path, s02, 'utf8');
console.log('Slide 02 updated.');

console.log('Done updating card badges and section titles!');
