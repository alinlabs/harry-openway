const fs = require('fs');
const path = require('path');

// Fix Slide 03
const s3Path = path.join(__dirname, '../src/slide/03/index.tsx');
let s3 = fs.readFileSync(s3Path, 'utf8');
s3 = s3.replace(
  /\{tiers\.map\(\(tier\) => \([\s\S]*?className="p-2\.5 rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left transition-colors"[\s\S]*?\{tier\.strategicApproach\}<\/span>\s*<\/div>\s*<\/div>\s*\);\s*\}\)\}/,
  `{tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {tier.tierNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {tier.roleTitle}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tier.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {tier.personas}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{tier.strategicApproach}</span>
                  </div>
                </div>
              ))}`
);
fs.writeFileSync(s3Path, s3, 'utf8');
console.log('Fixed Slide 03');

// Fix Slide 04
const s4Path = path.join(__dirname, '../src/slide/04/index.tsx');
let s4 = fs.readFileSync(s4Path, 'utf8');
s4 = s4.replace(
  /\{layers\.map\(\(layer\) => \([\s\S]*?className="p-2 rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left transition-colors"[\s\S]*?<\/div>\s*<\/div>\s*\);\s*\}\)\}/,
  `{layers.map((layer) => (
                <div
                  key={layer.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {layer.layerNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {layer.name}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {layer.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {layer.focusTitle}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {layer.components.slice(0, 3).map((comp, cIdx) => (
                      <span key={cIdx} className="text-[9px] text-slate-500 bg-white/80 px-1.5 py-0.5 rounded border border-slate-200/70 font-mono">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}`
);
fs.writeFileSync(s4Path, s4, 'utf8');
console.log('Fixed Slide 04');

// Fix Slide 05
const s5Path = path.join(__dirname, '../src/slide/05/index.tsx');
let s5 = fs.readFileSync(s5Path, 'utf8');
s5 = s5.replace(
  /\{phases\.map\(\(phase\) => \([\s\S]*?className="p-2 rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left transition-colors"[\s\S]*?<\/ul>\s*<\/div>\s*\);\s*\}\)\}/,
  `{phases.map((phase) => (
                <div
                  key={phase.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                        {phase.phaseCode}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {phase.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {phase.badgeLabel}
                    </span>
                  </div>

                  <ul className="text-[10px] text-slate-600 font-medium space-y-0.5 pl-1 my-1">
                    {phase.deliverables.slice(0, 2).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}`
);
fs.writeFileSync(s5Path, s5, 'utf8');
console.log('Fixed Slide 05');

// Fix Slide 06
const s6Path = path.join(__dirname, '../src/slide/06/index.tsx');
let s6 = fs.readFileSync(s6Path, 'utf8');
s6 = s6.replace(
  /\{commitments\.map\(\(item\) => \([\s\S]*?className="p-2 rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left transition-colors"[\s\S]*?<\/div>\s*<\/div>\s*\);\s*\}\)\}/,
  `{commitments.map((item) => (
                <div
                  key={item.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                        #{item.pillarIndex}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {item.scope}
                  </div>

                  <div className="text-[9px] text-slate-500 mt-1 pt-0.5 border-t border-slate-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{item.evidence}</span>
                  </div>
                </div>
              ))}`
);
fs.writeFileSync(s6Path, s6, 'utf8');
console.log('Fixed Slide 06');

// Fix Slide 07
const s7Path = path.join(__dirname, '../src/slide/07/index.tsx');
let s7 = fs.readFileSync(s7Path, 'utf8');
s7 = s7.replace(
  /\{tactics\.map\(\(tactic\) => \([\s\S]*?className="p-2 rounded-lg border border-slate-200\/80 bg-slate-50\/80 text-left transition-colors"[\s\S]*?<\/div>\s*<\/div>\s*\);\s*\}\)\}/,
  `{tactics.map((tactic) => (
                <div
                  key={tactic.id}
                  className="p-2 rounded-lg border border-slate-200/80 bg-slate-50/80 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                        #{tactic.tacticNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {tactic.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tactic.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {tactic.mechanism}
                  </div>

                  <div className="text-[9px] text-slate-500 mt-1 pt-0.5 border-t border-slate-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{tactic.commercialImpact}</span>
                  </div>
                </div>
              ))}`
);
fs.writeFileSync(s7Path, s7, 'utf8');
console.log('Fixed Slide 07');
