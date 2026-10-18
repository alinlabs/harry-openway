import React from 'react';
import { useSlide01Container } from './container';
import { IndonesiaLeafletMap } from './IndonesiaLeafletMap';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide01Props {
  language?: Language;
}

export const Slide01: React.FC<Slide01Props> = ({ language = 'IN' }) => {
  const {
    eyebrow,
    profile,
    description,
    quickStats,
    pillars,
    takeaway
  } = useSlide01Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Main Executive Canvas: Split 5:7 Grid with Pure 16:9 Indonesia Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center flex-1 min-h-0 my-0 py-2 sm:py-2.5">
        {/* Left Column: Executive Identity & Fast Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="text-slate-500">{eyebrow.category}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">{eyebrow.subtitle}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight leading-none">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl font-black text-black pt-0.5">
              {profile.role}
            </p>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
            {description}
          </p>

          {/* Quick Stats Line: Flat-Mounted, Tabular Inter Numbers, Zero-Badge */}
          <div className="grid grid-cols-3 gap-2.5 pt-2.5 border-t border-slate-100 text-left">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums font-mono tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-blue-700 font-bold mt-1.5 truncate">
                  {stat.label}
                </div>
                <div className="text-[9.5px] text-slate-500 font-medium mt-0.5 truncate">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pure Indonesia Leaflet Map (16:9 Aspect Ratio) */}
        <div className="lg:col-span-7 flex items-center justify-center h-full w-full">
          <div className="w-full max-w-[620px]">
            <IndonesiaLeafletMap language={language} className="w-full shadow-xs" />
          </div>
        </div>
      </div>

      {/* 2. Three Value Pillars: Flat-Mounted Grid, Zero-Badge, Corporate Minimalist Palette */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-100 shrink-0">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-3 rounded-xl border-l-2 border-blue-600 bg-slate-50/70 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <div>
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight font-inter">
                  {pillar.title}
                </h3>
                <div className="text-[10px] text-slate-500 font-medium font-inter">
                  {pillar.subtitle}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs sm:text-sm font-mono font-black text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.alignment}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide01;
