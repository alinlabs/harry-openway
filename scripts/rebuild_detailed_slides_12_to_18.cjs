const fs = require('fs');
const path = require('path');

console.log('===> [EXECUTE-PROMPT.md] Rebuilding detailed execution visuals and strict palette for Slides 12, 13, 14, 16, 17, 18...');

// ==========================================
// 1. SLIDE 12
// ==========================================
const s12Content = `import React from 'react';
import { useSlide12Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Clock, ArrowRight, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide12Props {
  language?: Language;
}

export const Slide12: React.FC<Slide12Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide12Container(language);

  const phaseSteps = [
    { period: 'Hari 01 - 10', title: cards[0]?.title || 'Penyerapan Teknis WAY4', deliverable: cards[0]?.deliverable || 'Reference Architecture Deck', code: 'FASE 1' },
    { period: 'Hari 11 - 20', title: cards[1]?.title || 'Account Farming Eksisting', deliverable: cards[1]?.deliverable || 'Health Audit & Add-on Pipeline', code: 'FASE 2' },
    { period: 'Hari 21 - 30', title: cards[2]?.title || 'Formulasi 5-Yr TCO', deliverable: cards[2]?.deliverable || 'Spreadsheet ROI (-35% TCO)', code: 'FASE 3' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & High-Fidelity 30-Day Execution Pipeline */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Sequential 3-Phase Execution Roadmap Pipeline (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Structured Pipeline Timeline Flow */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {phaseSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  {/* Timeline Node */}
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < phaseSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span className="truncate">{step.title}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {step.period}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600 flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate"><strong className="text-slate-800">Deliverable:</strong> {step.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide12;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/12/index.tsx'), s12Content, 'utf8');
console.log('===> [OK] Updated Slide 12 with Sequential Roadmap Pipeline & Strict Palette');

// ==========================================
// 2. SLIDE 13
// ==========================================
const s13Content = `import React from 'react';
import { useSlide13Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Target, FastForward, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide13Props {
  language?: Language;
}

export const Slide13: React.FC<Slide13Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide13Container(language);

  const funnelStages = [
    { stage: 'Stage 01', target: 'Intelijen Ring-2', action: 'Pemetaan 3 Bank Komersial Target', output: 'Buying Centre Dossier Lengkap', badge: '< 7 Hari' },
    { stage: 'Stage 02', target: 'Akses Direksi', action: 'Warm Introduction C-Level Cepat', output: '2+ Jadwal Pertemuan Direktur IT / CTO', badge: '< 14 Hari' },
    { stage: 'Stage 03', target: 'Pre-RFP Shaping', action: 'Presentasi Solusi Dual Engine', output: 'Kriteria Tender BSPI 2030 Terkunci', badge: 'Hari 30-60' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & High-Velocity C-Level Conversion Pipeline */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* High-Velocity C-Level Conversion Funnel Visual (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <FastForward className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Velocity Funnel Steps */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {funnelStages.map((stage, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < funnelStages.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span>{stage.target}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {stage.badge}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600 font-medium">
                      {stage.action}
                    </div>
                    <div className="text-[9px] text-blue-700 font-bold flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{stage.output}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide13;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/13/index.tsx'), s13Content, 'utf8');
console.log('===> [OK] Updated Slide 13 with High-Velocity Conversion Pipeline & Strict Palette');

// ==========================================
// 3. SLIDE 14
// ==========================================
const s14Content = `import React from 'react';
import { useSlide14Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide14Props {
  language?: Language;
}

export const Slide14: React.FC<Slide14Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide14Container(language);

  const conversionTracks = [
    { track: 'Track A', label: 'Validasi PoC Teknis', mandate: 'Uji Stres 10.000+ TPS & Native SNAP BI', deliverable: 'Laporan Rekomendasi Resmi Arsitek Bank' },
    { track: 'Track B', label: 'Cross-Selling Add-on', mandate: 'Penjualan Modul SoftPOS & Digital Wallet', deliverable: 'Purchase Order (PO) Ekspansi Lisensi' },
    { track: 'Track C', label: 'Penguncian Pipeline', mandate: 'Organisasi Peluang Tahunan Siap Audit', deliverable: 'Dashboard Pipeline 12-Bulan (Rp 20M - 40M)' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Conversion Engine Architecture */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Conversion Engine Architecture Board (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Structured Dual-Track Conversion Execution Grid */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {conversionTracks.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < conversionTracks.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span>{item.label}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {item.track}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600 font-medium">
                      {item.mandate}
                    </div>
                    <div className="text-[9px] text-blue-700 font-bold flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{item.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide14;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/14/index.tsx'), s14Content, 'utf8');
console.log('===> [OK] Updated Slide 14 with Pipeline Conversion Board & Strict Palette');

// ==========================================
// 4. SLIDE 16: Pilar 1 - Integritas Pengadaan Bersih
// ==========================================
const s16Content = `import React from 'react';
import { useSlide16Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Shield, Lock } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide16Props {
  language?: Language;
}

export const Slide16: React.FC<Slide16Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide16Container(language);

  const governanceGates = [
    { gate: 'Gate 01', title: 'Standar Terbuka Setara LKPP / BUMN', standard: 'Transparan, akuntabel, adil, bersaing sehat', output: 'Verifikasi Bebas Blacklist & Sanggahan Peserta' },
    { gate: 'Gate 02', title: 'Pakta Integritas & Anti-Gratifikasi', standard: 'Deklarasi etika penegakan kode etik komersial', output: 'Perlindungan Reputasi & Hukum Resmi Bertandatangan' },
    { gate: 'Gate 03', title: 'Dokumentasi Audit-Ready 100%', standard: 'Logging transparan untuk OJK & auditor eksternal', output: 'Dossier Bersih Bebas Disclaimer Temuan Audit' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & 3-Gate Procurement Firewall */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* 3-Tier Procurement Governance Checkpoint Matrix (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Governance Gate Checkpoints */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {governanceGates.map((gate, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < governanceGates.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span>{gate.title}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {gate.gate}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600 font-medium">
                      {gate.standard}
                    </div>
                    <div className="text-[9px] text-blue-700 font-bold flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{gate.output}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide16;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/16/index.tsx'), s16Content, 'utf8');
console.log('===> [OK] Updated Slide 16 with Procurement Firewall Matrix & Strict Palette');

// ==========================================
// 5. SLIDE 17: Pilar 2 - Orkestrasi Pemangku Kepentingan
// ==========================================
const s17Content = `import React from 'react';
import { useSlide17Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Users, Network } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide17Props {
  language?: Language;
}

export const Slide17: React.FC<Slide17Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide17Container(language);

  const orchestrationBridges = [
    { axis: 'Sumbu 01', bridge: 'C-Suite ⟷ Pre-Sales Teknis', focus: 'Menerjemahkan visi bisnis ke arsitektur teknis', output: 'Executive Summary ROI & Business Case' },
    { axis: 'Sumbu 02', bridge: 'Legal ⟷ Manajemen Risiko (VRM)', focus: 'Klausul SLA 99.999%, kedaulatan data & liabilitas', output: 'Draft Kontrak Berimbang Tanpa Kebuntuan' },
    { axis: 'Sumbu 03', bridge: 'Komite Pengadaan (Procurement)', focus: 'Pentahapan pembayaran & transparansi PO tender', output: 'Penerbitan PO -40% Waktu Lebih Cepat' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Stakeholder Bridge Matrix */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Stakeholder Alignment Matrix (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <Network className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Orchestration Bridge Items */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {orchestrationBridges.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < orchestrationBridges.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span>{item.bridge}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {item.axis}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600 font-medium">
                      {item.focus}
                    </div>
                    <div className="text-[9px] text-blue-700 font-bold flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{item.output}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide17;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/17/index.tsx'), s17Content, 'utf8');
console.log('===> [OK] Updated Slide 17 with Stakeholder Bridge Matrix & Strict Palette');

// ==========================================
// 6. SLIDE 18: Pilar 3 - Pengembangan Diri Berkelanjutan
// ==========================================
const s18Content = `import React from 'react';
import { useSlide18Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide18Props {
  language?: Language;
}

export const Slide18: React.FC<Slide18Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide18Container(language);

  const selfImprovementCadence = [
    { track: 'Fokus 01', program: 'Les Privat Business English Intensif', frequency: '3x Seminggu', output: 'Kelancaran Pitching & Negosiasi C-Suite Regional' },
    { track: 'Fokus 02', program: 'Domain Akreditasi Pembayaran FSI', frequency: 'Berkelanjutan', output: 'Penguasaan ISO 20022, SNAP BI & Cloud SoftPOS' },
    { track: 'Fokus 03', program: 'Kesiapan Representasi Regional APAC', frequency: 'Siap Mandat', output: 'Presentasi Internasional Mewakili Martabat OpenWay' }
  ];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-4 pb-3 sm:pb-4 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Professional Excellence Roadmap */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Professional Development Cadence Matrix (Replaces generic cards) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-black px-1">
              <span className="font-bold text-black flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>{cardsTitle}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {/* Development Cadence Tracks */}
            <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/90 space-y-2">
              {selfImprovementCadence.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-2.5 text-left">
                  <div className="flex flex-col items-center shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </div>
                    {idx < selfImprovementCadence.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200/80 my-0.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-900 mb-0.5">
                      <span>{item.program}</span>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold shrink-0">
                        {item.frequency}
                      </span>
                    </div>
                    <div className="text-[9px] text-blue-700 font-bold flex items-center gap-1 mt-1 pt-1 border-t border-slate-100">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{item.output}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-200/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide18;
`;

fs.writeFileSync(path.join(__dirname, '../src/slide/18/index.tsx'), s18Content, 'utf8');
console.log('===> [OK] Updated Slide 18 with Cadence Execution Matrix & Strict Palette');

console.log('===> [SUCCESS] All 6 slides (12, 13, 14, 16, 17, 18) updated to executive execution visuals and strict palette!');
