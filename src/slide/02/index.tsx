import React from 'react';
import { useSlide02Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide02Props {
  language?: Language;
}

export const Slide02: React.FC<Slide02Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionText,
    benchmarkLabels,
    comparison,
    metrics,
    pillars,
    takeaway,
    activeHubIndex,
    setActiveHubIndex
  } = useSlide02Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Slide Header: Rata Tengah (Sub Judul Kecil Diatas, Judul Utama Besar, & Deskripsi di Bawah Langsung Judul Utama) */}
      <div className="text-center space-y-1 pt-1.5 sm:pt-2 pb-1.5 sm:pb-2 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
        {/* Deskripsi langsung berada di tengah rata tengah bawah langsung judul utama */}
        <p className="text-xs sm:text-[12.5px] text-slate-600 max-w-4xl mx-auto leading-relaxed pt-0.5 px-4 font-normal">
          {descriptionText}
        </p>
      </div>

      {/* 2. Main Market & Positioning Canvas: Merata Atas Bawah, Bebas Ruang Kosong */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 my-0 py-2 sm:py-2.5">
        {/* Left Column: Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-2">
          {/* Head-to-Head Technical Benchmark: Rich Comparison Cards Filling Vertical Space */}
          <div className="flex-1 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1">
              <span className="font-black text-slate-900">{benchmarkLabels.dimension}</span>
              <div className="flex items-center gap-3">
                <span className="text-blue-700 font-black text-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{benchmarkLabels.way4}</span>
                </span>
                <span className="text-slate-400 font-semibold text-xs flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>{benchmarkLabels.legacy}</span>
                </span>
              </div>
            </div>

            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/80 flex flex-col justify-between flex-1 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-black text-xs sm:text-sm text-slate-900 truncate">
                    {item.feature}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    Dimensi #{idx + 1}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-blue-50/90 border border-blue-200/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-black text-blue-800 text-xs sm:text-[13px] font-mono truncate">{item.way4}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/80 border border-slate-200/70 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold text-slate-500 text-[11px] sm:text-xs truncate line-through decoration-slate-300">{item.legacy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Infrastructure Command Center + Key Strategic Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch h-full">
          {/* Main 3D Action Component with Lottie Engine & National Hubs */}
          <div className="md:col-span-6 h-full min-h-[200px] sm:min-h-[230px] lg:min-h-[260px] flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">
            <Visual3D
              activeHubIndex={activeHubIndex}
              onSelectHub={setActiveHubIndex}
              className="w-full h-full"
            />
          </div>

          {/* Strategic Metrics & Market Velocity (Zero-Click, Tabular Numbers) */}
          <div className="md:col-span-6 flex flex-col justify-between h-full border-l border-slate-200/80 pl-4 space-y-2.5">
            <div className="space-y-1 text-left flex-1 flex flex-col justify-between">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex flex-col justify-between flex-1">
                <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">
                  {metrics.tcoTitle}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight my-1">
                  {metrics.tcoValue}
                </div>
                <div className="text-xs text-blue-800 font-semibold">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold truncate">
                  {metrics.velocityTitle}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                  {metrics.velocityValue}
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 truncate">
                  {metrics.velocitySub}
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold truncate">
                  {metrics.tpsTitle}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                  {metrics.tpsValue}
                </div>
                <div className="text-[10px] text-blue-700 font-semibold mt-0.5 truncate">
                  {metrics.tpsSub}
                </div>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-left">
              <div className="text-[9.5px] uppercase tracking-wider text-emerald-800 font-bold">
                {metrics.anchorTitle}
              </div>
              <div className="text-xs sm:text-sm font-black text-emerald-950 font-inter mt-0.5">
                {metrics.anchorValue}
              </div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                {metrics.anchorSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Market Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => {
          const pastelStyles: Record<string, string> = {
            '#ea4335': 'border-slate-200 bg-slate-50/60 text-slate-700',
            '#fbbc04': 'border-slate-200 bg-slate-50/60 text-slate-700',
            '#34a853': 'border-slate-200 bg-slate-50/60 text-slate-700',
            '#1a73e8': 'border-slate-200 bg-slate-50/60 text-slate-700',
          };
          const style = pastelStyles[pillar.accentColor] || 'border-blue-600 bg-slate-50/60 text-blue-700';
          const parts = style.split(' ');
          const borderBg = parts.slice(0, 2).join(' ');
          const textCol = parts[2];

          return (
            <div
              key={pillar.id}
              className={"p-3 sm:p-3.5 rounded-xl border-l-3 transition-all flex flex-col justify-between shadow-2xs " + borderBg}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] sm:text-xs font-mono font-bold font-bold text-slate-400">
                  {pillar.index}
                </span>
                <span className={"text-[9px] font-mono font-bold " + textCol}>
                  {pillar.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight font-inter">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
                <span className={"text-[11px] sm:text-xs font-mono font-bold font-bold " + textCol}>
                  {pillar.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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

export default Slide02;
