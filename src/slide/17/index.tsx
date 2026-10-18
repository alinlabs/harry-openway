import React from 'react';
import { useSlide17Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Users } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide17Props {
  language?: Language;
}

export const Slide17: React.FC<Slide17Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide17Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header: Kategori Abu-Abu, Judul Utama Biru Bold & Deskripsi Langsung di Bawah Judul (Tanpa Judul Deskripsi) */}
      <div className="text-center space-y-1 pt-2 sm:pt-3 pb-1 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
        {/* Deskripsi langsung berada di bawah judul utama */}
        <p className="text-xs sm:text-[12.5px] text-slate-600 max-w-4xl mx-auto leading-relaxed pt-0.5 px-4 font-normal">
          {descriptionText}
        </p>
      </div>

      {/* 2. Top Evaluation Benchmark Strip */}
      <div className="flex items-center justify-between bg-slate-50/90 border border-slate-200/80 rounded-lg px-3 py-1.5 my-1 shrink-0">
        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-black text-slate-900">
          <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[10px] border border-blue-200 font-bold">
            {cardsBadge}
          </span>
          <span className="text-[11px] text-slate-700 font-semibold">{cardsTitle}</span>
        </div>

        {/* 3 Key Target Micro-Benchmarks */}
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-medium">{metrics.tcoTitle}:</span>
            <span className="font-black text-blue-700 font-mono text-xs sm:text-sm">{metrics.tcoValue}</span>
          </div>
          <span className="text-slate-300">·</span>
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-medium">{metrics.speedTitle}:</span>
            <span className="font-black text-slate-900 font-mono text-xs sm:text-sm">{metrics.speedValue}</span>
          </div>
          <span className="text-slate-300">·</span>
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-medium">{metrics.mandateTitle}:</span>
            <span className="font-black text-slate-900 font-mono text-xs sm:text-sm">{metrics.mandateValue}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Executive Canvas: Penjabaran Penuh 3 Inisiatif Langsung Tampil Side-by-Side (Tanpa Tab & Tanpa Lottie) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 min-h-0 my-0 py-2 sm:py-2.5 items-stretch">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between space-y-2.5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs text-left"
          >
            {/* 1. Header & Codes */}
            <div>
              <div className="flex items-center justify-between gap-1.5 mb-2">
                <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  {card.code}
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {card.badgeLabel}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug tracking-tight">
                {card.title}
              </h3>
            </div>

            {/* 2. Core Mandate / Key Value Thesis */}
            <div className="text-xs text-slate-700 font-medium leading-relaxed border-l-2 border-blue-600 pl-2.5 py-1 bg-blue-50/40 rounded-r">
              <span className="font-bold text-slate-900">
                {language === 'EN' ? 'Mandate: ' : 'Mandat: '}
              </span>
              {card.mandate}
            </div>

            {/* 3. Hero Key Metrics (2 Primary Metrics with Big Bold Font) */}
            <div className="grid grid-cols-2 gap-2 py-1">
              {card.specs?.slice(0, 2).map((spec, spIdx) => (
                <div key={spIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold truncate">
                    {spec.label}
                  </div>
                  <div className="text-sm sm:text-base font-black text-blue-700 font-mono mt-0.5 truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Strategic Deliverable Badge */}
            <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-950 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-bold text-emerald-900 block text-[10px] uppercase font-mono tracking-wider">
                  {language === 'EN' ? 'Primary Deliverable' : 'Deliverable Utama'}
                </span>
                <span className="font-medium text-[11px] text-slate-800 line-clamp-2">{card.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Four Value Pillars: Neutral Clean Borders, Blue & Slate accents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1.5 border-t border-slate-100 shrink-0">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2 rounded-xl border border-slate-200 bg-slate-50/60 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[8.5px] font-mono font-bold text-slate-600">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-[9px] text-slate-500 font-medium mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1 pt-0.5 border-t border-slate-100/60">
              <span className="text-xs sm:text-sm font-mono font-black text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Bottom Proof & Takeaway Bar - Strict Blue & Slate */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs mt-0.5 shrink-0">
        <div className="text-slate-600 text-[10.5px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[10.5px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide17;
