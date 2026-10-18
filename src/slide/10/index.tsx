import React from 'react';
import { useSlide10Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, ShieldAlert, Scale, BarChart3, Clock } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide10Props {
  language?: Language;
}

export const Slide10: React.FC<Slide10Props> = ({ language = 'IN' }) => {
  const {
    header,
    dossierTitle,
    dossierSubtitle,
    dossierSummary,
    complianceSpecs,
    regulatoryPillars,
    activePillarIndex,
    setActivePillarIndex,
    radarTitle,
    radarSubtitle,
    radarPoints,
    selectedRadarIndex,
    roadmapTitle,
    roadmapSubtitle,
    roadmapMilestones,
    pillars,
    takeaway
  } = useSlide10Container(language);

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
        {/* Left Column: Planning Account Note & Regulatory Foundation Dossier */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                <Scale className="w-3 h-3 text-blue-600" />
                <span>Layer 1 Regulatory Dossier</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 font-semibold">Bank Indonesia & OJK Audit</span>
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

          {/* Compliance Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {complianceSpecs.map((spec, i) => (
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

          {/* Interactive Regulatory Mandate Tabs */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-blue-600" />
                <span>Pilar Mandat Regulasi & Pengawasan</span>
              </span>
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Click to Switch</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {regulatoryPillars.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activePillarIndex === idx
                      ? 'bg-blue-700 text-white border-blue-800 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{p.mandateName.split(' ')[0]}</div>
                </button>
              ))}
            </div>

            {/* Active Mandate Detail Card */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-left space-y-1">
              <div className="text-[10px] font-bold text-slate-900 flex items-center justify-between">
                <span className="truncate">{regulatoryPillars[activePillarIndex].mandateName}</span>
                <span className="text-[8px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  {regulatoryPillars[activePillarIndex].regulator}
                </span>
              </div>
              <div className="text-[9px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 leading-snug">
                <strong className="text-slate-800">Cakupan Mandat: </strong>{regulatoryPillars[activePillarIndex].scope}
              </div>
              <div className="text-[9px] text-blue-800 bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100 leading-snug">
                <strong className="text-blue-900">Bukti Kepatuhan: </strong>{regulatoryPillars[activePillarIndex].complianceProof}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Data Statistik, Matriks Kepatuhan 5 Dimensi & Roadmap Audit */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Top Half of Right: 5-Dimension Regulatory Compliance Matrix */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{radarTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {radarSubtitle}
                </div>
              </div>
              <div className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Composite: 99.6% Kepatuhan
              </div>
            </div>

            {/* Pentagonal Spider / Radar Chart ("Spiderman Chart") */}
            <div className="bg-slate-50/70 p-2 rounded-lg border border-slate-200 flex flex-col items-center">
              <div className="flex items-center justify-between w-full text-[8px] font-mono px-2 mb-0.5">
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2 h-2 rounded-xs border border-slate-400 inline-block"></span> Legacy (Rata-rata 67%)
                </span>
                <span className="flex items-center gap-1 text-blue-700 font-bold">
                  <span className="w-2 h-2 rounded-xs bg-blue-600 inline-block"></span> WAY4 (Rata-rata 99.6%)
                </span>
              </div>

              {/* Spider / Radar SVG */}
              <div className="relative w-44 h-36 flex items-center justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 170">
                  {[14, 28, 42, 56, 70].map((r, i) => {
                    const points = [0, 1, 2, 3, 4].map(idx => {
                      const angle = (idx * 2 * Math.PI) / 5 - Math.PI / 2;
                      const x = 100 + r * Math.cos(angle);
                      const y = 85 + r * Math.sin(angle);
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    }).join(' ');
                    return (
                      <polygon
                        key={i}
                        points={points}
                        fill="transparent"
                        stroke="#cbd5e1"
                        strokeWidth={i === 4 ? "1.5" : "0.75"}
                        strokeDasharray={i === 4 ? "none" : "2 2"}
                      />
                    );
                  })}

                  {[0, 1, 2, 3, 4].map(idx => {
                    const angle = (idx * 2 * Math.PI) / 5 - Math.PI / 2;
                    const x = 100 + 70 * Math.cos(angle);
                    const y = 85 + 70 * Math.sin(angle);
                    return (
                      <line
                        key={idx}
                        x1="100"
                        y1="85"
                        x2={x.toFixed(1)}
                        y2={y.toFixed(1)}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Legacy Incumbent Polygon */}
                  <polygon
                    points="100,47 136,72 121,114 74,120 61,72"
                    fill="rgba(148, 163, 184, 0.15)"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />

                  {/* OpenWay WAY4 Polygon */}
                  <polygon
                    points="100,16 166,63 141,141 59,141 34,63"
                    fill="rgba(37, 99, 235, 0.25)"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />

                  {[
                    [100, 16],
                    [166, 63],
                    [141, 141],
                    [59, 141],
                    [34, 63]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
                  ))}

                  <text x="100" y="8" textAnchor="middle" className="text-[7px] font-bold fill-slate-800 font-inter">SNAP BI (100%)</text>
                  <text x="175" y="65" textAnchor="start" className="text-[7px] font-bold fill-slate-800 font-inter">ISO 20022 (100%)</text>
                  <text x="145" y="152" textAnchor="start" className="text-[7px] font-bold fill-slate-800 font-inter">POJK 11 (98%)</text>
                  <text x="55" y="152" textAnchor="end" className="text-[7px] font-bold fill-slate-800 font-inter">Sovereignty (100%)</text>
                  <text x="25" y="65" textAnchor="end" className="text-[7px] font-bold fill-slate-800 font-inter">Audit ABO (100%)</text>
                </svg>
              </div>
            </div>

            {/* Selected Dimension Detail Strip */}
            <div className="mt-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-800 uppercase mr-1.5">
                  Standar Kunci:
                </span>
                <span className="text-[9px] text-slate-700 font-medium">
                  {radarPoints[selectedRadarIndex].dimension} ➔ <strong className="text-blue-900">{radarPoints[selectedRadarIndex].keyStandard}</strong>
                </span>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-2" />
            </div>
          </div>

          {/* Bottom Half of Right: Structured Roadmap & Audit Readiness */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90 text-left space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{roadmapTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {roadmapSubtitle}
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Zero Finding Target
              </span>
            </div>

            {/* Roadmap Stages */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {roadmapMilestones.map((m, idx) => (
                <div key={idx} className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-left space-y-1">
                  <div className="flex items-center justify-between text-[8px] font-mono font-bold text-blue-800">
                    <span>{m.quarter}</span>
                    <span className="bg-blue-100/70 text-blue-800 px-1 rounded">{m.status}</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-900 leading-tight">
                    {m.milestone}
                  </div>
                  <div className="text-[8px] text-slate-500 font-medium leading-snug">
                    {m.deliverable}
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

export default Slide10;
