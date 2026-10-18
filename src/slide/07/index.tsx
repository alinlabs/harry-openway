import React from 'react';
import { useSlide07Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide07Props {
  language?: Language;
}

export const Slide07: React.FC<Slide07Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    frameworkTitle,
    layers,
    metrics,
    pillars,
    takeaway,
    activeLayerIndex,
    setActiveLayerIndex
  } = useSlide07Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Slide Header: Rata Tengah 2 Baris (Sub Judul Kecil Diatas & Judul Utama Besar 1-Line) */}
      <div className="text-center space-y-1 pt-2 sm:pt-3 pb-2 sm:pb-3 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main 3D Core Stack Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 my-0 py-2 sm:py-2.5">
        {/* Left Column: Context & 3D Isometric Stack Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* 3-Tier Layer Stack Cards: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1 mb-1.5">
              <span className="font-bold text-black">{frameworkTitle}</span>
              <span className="text-[11px] sm:text-xs font-mono font-bold font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/60 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>3 Slabs</span>
              </span>
            </div>

            {layers.map((layer, idx) => (
                <div
                  key={layer.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-left select-none pointer-events-none cursor-default"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {layer.layerNumber}
                      </span>
                      <span className="font-black text-xs sm:text-sm text-slate-900 truncate">
                        {layer.name}
                      </span>
                    </div>
                    {(() => {
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
                    })()}
                  </div>

                  <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-tight">
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
              ))}
          </div>
        </div>

        {/* Right Column: 3D Isometric Slabs Lottie Engine + Dual Growth Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Kinetic Platform Slabs */}
          <div className="md:col-span-7 h-full min-h-[200px] sm:min-h-[230px] lg:min-h-[260px] flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">
            <Visual3D
              activeLayerIndex={activeLayerIndex}
              onSelectLayer={setActiveLayerIndex}
            />
          </div>

          {/* Strategic Metrics & Dual Growth Parameters (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-slate-50/80 border border-slate-200/70">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.pipelineGrowthTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.pipelineGrowthValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.pipelineGrowthSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.replicatedWinsTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.replicatedWinsValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.replicatedWinsSub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.crossSellingTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.crossSellingValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.crossSellingSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.bspiReadyTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.bspiReadyValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.bspiReadySub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Growth Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
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

export default Slide07;
