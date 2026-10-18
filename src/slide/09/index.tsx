import React from 'react';
import { useSlide09Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Server, Award, GitBranch, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide09Props {
  language?: Language;
}

export const Slide09: React.FC<Slide09Props> = ({ language = 'IN' }) => {
  const {
    header,
    dossierTitle,
    dossierSubtitle,
    dossierSummary,
    blueprintSpecs,
    clientCases,
    activeClientIndex,
    setActiveClientIndex,
    migrationTitle,
    migrationSubtitle,
    migrationStages,
    activeStageIndex,
    reliabilityTitle,
    reliabilitySubtitle,
    reliabilityStats,
    pillars,
    takeaway
  } = useSlide09Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1 pt-2 sm:pt-3 pb-2 sm:pb-3 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas: Split 5.5 : 6.5 Grid (Dossier Left, Visual Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 my-0 py-2 sm:py-2.5">
        {/* Left Column: Planning Account Note & National Tier-1 Blueprint */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                <Award className="w-3 h-3 text-blue-600" />
                <span>Tier-1 National Blueprint</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 font-semibold">Zero Migration Risk</span>
            </div>
            <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
              {dossierTitle}
            </h2>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">
              {dossierSubtitle}
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed mt-1.5 border-l-2 border-blue-500 pl-2 bg-blue-50/30 py-1 rounded-r">
              {dossierSummary}
            </p>
          </div>

          {/* Blueprint Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {blueprintSpecs.map((spec, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg border text-left ${
                  spec.highlight
                    ? 'bg-blue-50/60 border-blue-200 text-blue-900'
                    : 'bg-white/80 border-slate-200 text-slate-800'
                }`}
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {spec.label}
                </div>
                <div className="text-xs font-black text-slate-900 mt-0.5 tracking-tight">
                  {spec.value}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5 truncate">
                  {spec.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Tier-1 Client Case Studies */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Server className="w-3 h-3 text-blue-600" />
                <span>Rekam Jejak Klien Teruji di Indonesia</span>
              </span>
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Click to Switch</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {clientCases.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveClientIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activeClientIndex === idx
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{c.client.split(' ')[1] || c.client}</div>
                </button>
              ))}
            </div>

            {/* Active Case Detail Card */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-left space-y-1">
              <div className="text-[10px] font-bold text-slate-900 flex items-center justify-between">
                <span className="truncate">{clientCases[activeClientIndex].client}</span>
                <span className="text-[8px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  {clientCases[activeClientIndex].scaleMetric}
                </span>
              </div>
              <div className="text-[9px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 leading-snug">
                <strong className="text-slate-800">Skala Arsitektur: </strong>{clientCases[activeClientIndex].architectureHighlight}
              </div>
              <div className="text-[9px] text-blue-800 bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100 leading-snug">
                <strong className="text-blue-900">Nilai Replikasi: </strong>{clientCases[activeClientIndex].replicationValue}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Dual Engine Coexistence & SLA Benchmark */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Top Half of Right: Dual Engine Migration Stages Funnel */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-blue-600" />
                  <span>{migrationTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {migrationSubtitle}
                </div>
              </div>
              <div className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Zero Downtime
              </div>
            </div>

            {/* Ascending S-Curve Dual Engine Migration Handover Chart */}
            <div className="bg-slate-50/70 p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between text-[8px] font-mono mb-1.5">
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2 h-0.5 bg-slate-400 inline-block"></span> Legacy Engine (Phased Down)
                </span>
                <span className="flex items-center gap-1 text-blue-700 font-bold">
                  <span className="w-2 h-0.5 bg-blue-600 inline-block"></span> WAY4 Engine (Ascending)
                </span>
              </div>

              {/* SVG S-Curve Handover Visual */}
              <div className="relative w-full h-16">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                  <line x1="0" y1="15" x2="300" y2="15" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="0" y1="35" x2="300" y2="35" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="0" y1="55" x2="300" y2="55" stroke="#e2e8f0" strokeDasharray="3 3" />

                  <defs>
                    <linearGradient id="way4Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 10,60 C 80,55 140,30 220,15 L 290,8 L 290,65 L 10,65 Z"
                    fill="url(#way4Gradient)"
                  />

                  <path
                    d="M 10,10 C 80,15 140,40 220,55 L 290,64"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />

                  <path
                    d="M 10,60 C 80,55 140,30 220,15 L 290,8"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                  />

                  <circle cx="20" cy="59" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="95" cy="46" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="195" cy="22" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="285" cy="8" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>

              {/* Stage Tags Bar */}
              <div className="grid grid-cols-4 gap-1 text-[8px] font-mono text-center pt-1.5 border-t border-slate-200 mt-1">
                <div>
                  <span className="font-bold text-slate-800 block">Fase 1</span>
                  <span className="text-slate-500">10% Pilot</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Fase 2</span>
                  <span className="text-slate-500">30% Card POS</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Fase 3</span>
                  <span className="text-blue-700 font-bold block">70% Core</span>
                </div>
                <div>
                  <span className="font-black text-blue-700 block">Fase 4</span>
                  <span className="text-blue-700 font-bold">100% WAY4</span>
                </div>
              </div>
            </div>

            {/* Active Stage Detail Action Strip */}
            <div className="mt-2 p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-800 uppercase mr-1.5">
                  Fase Dipilih: {migrationStages[activeStageIndex].label}
                </span>
                <div className="text-[9px] text-slate-600 font-medium mt-0.5">
                  Mekanisme: <strong className="text-slate-800">{migrationStages[activeStageIndex].action}</strong>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
            </div>
          </div>

          {/* Bottom Half of Right: Verified Reliability SLA Metrics */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90 text-left space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>{reliabilityTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {reliabilitySubtitle}
                </div>
              </div>
              <span className="text-xs sm:text-sm font-mono font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Tier-1 Benchmark
              </span>
            </div>

            {/* Reliability Table / Cards */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {reliabilityStats.map((r, idx) => (
                <div key={idx} className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-left space-y-0.5">
                  <div className="text-[8px] font-mono uppercase tracking-wider text-slate-400 font-semibold truncate">
                    {r.metric}
                  </div>
                  <div className="text-sm font-black text-blue-700 font-inter">
                    {r.provenValue}
                  </div>
                  <div className="text-[8px] text-slate-500 font-medium truncate">
                    {r.benchmarkStandard}
                  </div>
                  <div className="text-[8px] font-mono font-bold text-blue-700 pt-0.5">
                    ✓ {r.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1 border-t border-slate-100 shrink-0">
        {pillars.map((pillar) => (
          <div
            key={pillar.index}
            className="p-2 rounded-xl border border-slate-200 bg-slate-50/70 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[8px] font-mono font-bold text-slate-600 uppercase">
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
            <div className="text-right mt-1 pt-0.5 border-t border-slate-200/50">
              <span className="text-xs sm:text-sm font-mono font-black text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs mt-0.5 shrink-0">
        <div className="text-slate-600 text-[11px] sm:text-xs flex items-center gap-2 font-inter font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] sm:text-xs font-mono font-bold">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default Slide09;
