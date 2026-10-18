import React from 'react';
import { useSlide03Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide03Props {
  language?: Language;
}

export const Slide03: React.FC<Slide03Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionText,
    dossierTitle,
    tiers,
    metrics,
    pillars,
    takeaway,
    activeTierIndex,
    setActiveTierIndex
  } = useSlide03Container(language);

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

      {/* 2. Main Strategic Account Mapping Canvas: Merata Atas Bawah, Bebas Ruang Kosong */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 my-0 py-2 sm:py-2.5">
        {/* Left Column: Buying Centre Dossier (3-Tier Stakeholder Stack) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-2">
          {/* 3-Tier Stakeholder Dossier Cards: Flat-Mounted, Tabular Inter, Filling Space Generously */}
          <div className="flex-1 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1">
              <span className="font-black text-slate-900">{dossierTitle}</span>
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                3 Tiers
              </span>
            </div>

            {tiers.map((tier, idx) => (
              <div
                key={tier.id}
                className="p-3 sm:p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/80 text-left select-none pointer-events-none cursor-default flex-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[11px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      {tier.tierNumber}
                    </span>
                    <span className="font-black text-xs sm:text-sm text-slate-900 truncate">
                      {tier.roleTitle}
                    </span>
                  </div>
                  {(() => {
                    const badgeColors = [
                      'bg-blue-50 text-blue-700 border border-blue-200',
                      'bg-indigo-50 text-indigo-700 border border-indigo-200',
                      'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    ];
                    const badgeCls = badgeColors[idx % badgeColors.length];
                    return (
                      <span className={"text-[11px] sm:text-xs font-mono font-bold font-bold px-2 py-0.5 rounded " + badgeCls}>
                        {tier.badgeLabel}
                      </span>
                    );
                  })()}
                </div>

                <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-relaxed">
                  {tier.personas}
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-blue-800 font-medium mt-1.5 pt-1 border-t border-slate-200/60 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{tier.strategicApproach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Stakeholder Radar Orbit Visual + RFP Winning Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch h-full">
          {/* Main 3D Action Component with Kinetic Orbit Engine: Filling Space Vertically */}
          <div className="md:col-span-6 h-full min-h-[200px] sm:min-h-[230px] lg:min-h-[260px] flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">
            <Visual3D
              activeTierIndex={activeTierIndex}
              onSelectTier={setActiveTierIndex}
              className="w-full h-full"
            />
          </div>

          {/* Strategic Metrics & RFP Formula Parameters: Evenly Distributed Vertically */}
          <div className="md:col-span-6 flex flex-col justify-between h-full border-l border-slate-200/80 pl-4 space-y-2.5">
            <div className="space-y-1 text-left flex-1 flex flex-col justify-between">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex flex-col justify-between flex-1">
                <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">
                  {metrics.winRateTitle}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight my-1">
                  {metrics.winRateValue}
                </div>
                <div className="text-xs text-blue-800 font-semibold">
                  {metrics.winRateSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold truncate">
                  {metrics.accessVelocityTitle}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                  {metrics.accessVelocityValue}
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 truncate">
                  {metrics.accessVelocitySub}
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold truncate">
                  {metrics.preRfpTitle}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                  {metrics.preRfpValue}
                </div>
                <div className="text-[10px] text-blue-700 font-semibold mt-0.5 truncate">
                  {metrics.preRfpSub}
                </div>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-left">
              <div className="text-[9.5px] uppercase tracking-wider text-emerald-800 font-bold">
                {metrics.governanceTitle}
              </div>
              <div className="text-xs sm:text-sm font-black text-emerald-950 font-inter mt-0.5">
                {metrics.governanceValue}
              </div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                {metrics.governanceSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Winning Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2.5 pb-1 border-t border-slate-200 shrink-0">
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
              className={"p-3.5 rounded-xl border-l-3 transition-all flex flex-col justify-between shadow-2xs " + borderBg}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  {pillar.index}
                </span>
                <span className={"text-[11px] sm:text-xs font-mono font-bold font-bold " + textCol}>
                  {pillar.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug font-inter">
                  {pillar.title}
                </h3>
                <p className="text-[10.5px] text-slate-600 font-medium font-inter mt-0.5 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="text-right mt-2 pt-1 border-t border-slate-200/60">
                <span className={"text-xs font-mono font-black " + textCol}>
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

export default Slide03;
