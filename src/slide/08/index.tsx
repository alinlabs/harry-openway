import { ExecutiveQuadrantChart } from '../../components/ExecutiveQuadrantChart';
import React from 'react';
import { useSlide08Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Smartphone, TrendingUp, Sparkles, Building2, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide08Props {
  language?: Language;
}

export const Slide08: React.FC<Slide08Props> = ({ language = 'IN' }) => {
  const {
    header,
    dossierTitle,
    dossierSubtitle,
    dossierSummary,
    marketSpecs,
    digitalModules,
    quadrantTitle,
    quadrantSubtitle,
    quadrantPoints,
    selectedPointId,
    setSelectedPointId,
    selectedPoint,
    activeModuleIndex,
    setActiveModuleIndex,
    benchmarkTitle,
    benchmarkSubtitle,
    benchmarks,
    pillars,
    takeaway
  } = useSlide08Container(language);

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
        {/* Left Column: Planning Account Note & Digital Channel Dossier */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>Layer 3 Market Dossier</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 font-semibold">Digital Banking Expansion</span>
            </div>
            <h2 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
              {dossierTitle}
            </h2>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">
              {dossierSubtitle}
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed mt-1.5 border-l-2 border-blue-500 pl-2 bg-blue-50/30 py-1 rounded-r">
              {dossierSummary}
            </p>
          </div>

          {/* Market Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {marketSpecs.map((spec, i) => (
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

          {/* Interactive Digital Module Tabs */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-blue-600" />
                <span>Katalog Modul Digital Bernilai Tinggi</span>
              </span>
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Click to Switch</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {digitalModules.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activeModuleIndex === idx
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{m.name.split(' ')[1] || m.name}</div>
                </button>
              ))}
            </div>

            {/* Active Module Card */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-left space-y-1">
              <div className="text-[10px] font-bold text-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-1 truncate">
                  <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                  <span className="truncate">{digitalModules[activeModuleIndex].name}</span>
                </div>
                <span className="text-[8px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  {digitalModules[activeModuleIndex].tag}
                </span>
              </div>
              <div className="text-[9px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 leading-snug">
                <strong className="text-slate-800">Dampak Bisnis: </strong>{digitalModules[activeModuleIndex].impact}
              </div>
              <div className="text-[9px] text-blue-800 bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100 leading-snug">
                <strong className="text-slate-900">Solusi: </strong>{digitalModules[activeModuleIndex].painPointSolved}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Data Statistik, Kuadran Peluang Pasar & Benchmark Capex */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Top Half of Right: 2x2 Market Opportunity Quadrant */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>{quadrantTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {quadrantSubtitle}
                </div>
              </div>
              <div className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Opportunity Matrix
              </div>
            </div>

            {/* Visual 2x2 Cartesian Grid with Dots, Projection Lines & Explicit Coordinates */}
            <div className="relative h-44 sm:h-48 lg:h-50 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shadow-2xs">
              <ExecutiveQuadrantChart
                xAxisLabel="Kecepatan Go-Live"
                yAxisLabel="Fee-Based Income"
                points={quadrantPoints}
                selectedPointId={selectedPointId}
                onSelectPoint={setSelectedPointId}
                quadrantLabels={{
                  q1: "Q1: Quick Revenue Engine",
                  q2: "Q2: Strategic Moat",
                  q3: "Q3: Card Retention",
                  q4: "Q4: Niche Specialized"
                }}
                getPointLabel={(pt) => pt.module || pt.segment || pt.id}
              />
            </div>

            {/* Selected Segment Detail */}
            <div className="mt-2 p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-800 uppercase mr-2">
                  Segmen: {selectedPoint.segment}
                </span>
                <span className="text-[9px] text-slate-600 font-medium">
                  Target: <strong className="text-slate-800">{selectedPoint.targetBanks}</strong> · Siklus: <strong className="text-blue-700">{selectedPoint.dealWindow}</strong>
                </span>
              </div>
              <div className="text-[9px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                {selectedPoint.capexSavings}
              </div>
            </div>
          </div>

          {/* Bottom Half of Right: Benchmark Finansial & Akumulasi ROI (Ascending Growth Line & Area Chart) */}
          <div className="p-2.5 rounded-xl border border-slate-200/80 bg-white/90 text-left space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>{benchmarkTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {benchmarkSubtitle}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-[8px] font-mono font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-0.5 bg-slate-400 inline-block" />
                    <span>Konvensional</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-0.5 bg-blue-600 inline-block" />
                    <span className="font-bold text-blue-700">WAY4 Overlay</span>
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  +340% Total ROI
                </span>
              </div>
            </div>

            {/* SVG Ascending Cumulative ROI Area & Step Curve Chart */}
            <div className="bg-slate-50/70 p-2 rounded-lg border border-slate-200">
              <div className="relative w-full h-22">
                <svg className="w-full h-full overflow-visible font-inter" viewBox="0 0 460 85">
                  <defs>
                    <linearGradient id="way4RoiGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="40" y1="12" x2="445" y2="12" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="40" y1="38" x2="445" y2="38" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="40" y1="64" x2="445" y2="64" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Y Axis Values (Rp Miliar) */}
                  <text x="34" y="15" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">60M</text>
                  <text x="34" y="41" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">30M</text>
                  <text x="34" y="67" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">0M</text>

                  {/* Conventional Legacy Flat Baseline (Dashed) */}
                  {/* Points: (55, 61), (150, 58), (250, 56), (350, 54), (430, 52) */}
                  <path
                    d="M 55,61 L 150,58 L 250,56 L 350,54 L 430,52"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                  />
                  <circle cx="55" cy="61" r="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="150" cy="58" r="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="250" cy="56" r="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="350" cy="54" r="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="430" cy="52" r="3" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
                  <text x="430" y="48" textAnchor="end" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="700">Konvensional: 12M</text>

                  {/* WAY4 Ascending Cumulative Growth Area */}
                  {/* Points: (55, 56 [8.2M]), (150, 46 [21.5M]), (250, 32 [36.8M]), (350, 22 [49.0M]), (430, 9 [64.8M]) */}
                  <path
                    d="M 55,56 L 150,46 L 250,32 L 350,22 L 430,9 L 430,64 L 55,64 Z"
                    fill="url(#way4RoiGrad)"
                  />
                  <path
                    d="M 55,56 L 150,46 L 250,32 L 350,22 L 430,9"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.2"
                  />
                  <circle cx="55" cy="56" r="2.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="150" cy="46" r="2.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="250" cy="32" r="2.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="350" cy="22" r="2.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="430" cy="9" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="430" y="5" textAnchor="end" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">WAY4: Rp 64.8M (+340% ROI)</text>

                  {/* X Axis Values (Timeline Scale) */}
                  <text x="55" y="75" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">Thn 1 (Go-Live)</text>
                  <text x="150" y="75" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">Thn 2 (-82% Capex)</text>
                  <text x="250" y="75" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">Thn 3 (Fee Scale)</text>
                  <text x="350" y="75" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">Thn 4 (Ecosystem)</text>
                  <text x="430" y="75" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontFamily="monospace" fontWeight="800">Thn 5 (Max Value)</text>
                </svg>
              </div>

              {/* 4 Financial Efficiency Micro-KPIs Grid Strip */}
              <div className="grid grid-cols-4 gap-1.5 pt-1.5 border-t border-slate-200 mt-1">
                <div className="p-1 rounded bg-white border border-slate-200/80 text-left">
                  <div className="text-[7.5px] font-mono text-slate-400 uppercase font-bold truncate">EDC Capex Saved</div>
                  <div className="text-[9.5px] font-mono font-bold text-blue-700 truncate">-82.2% (SoftPOS)</div>
                </div>
                <div className="p-1 rounded bg-white border border-slate-200/80 text-left">
                  <div className="text-[7.5px] font-mono text-slate-400 uppercase font-bold truncate">Time-to-Market</div>
                  <div className="text-[9.5px] font-mono font-bold text-blue-700 truncate">8 - 12 Minggu</div>
                </div>
                <div className="p-1 rounded bg-white border border-slate-200/80 text-left">
                  <div className="text-[7.5px] font-mono text-slate-400 uppercase font-bold truncate">API Maintenance</div>
                  <div className="text-[9.5px] font-mono font-bold text-slate-800 truncate">-70.8% TCO</div>
                </div>
                <div className="p-1 rounded bg-white border border-slate-200/80 text-left">
                  <div className="text-[7.5px] font-mono text-slate-400 uppercase font-bold truncate">SNAP BI Gateway</div>
                  <div className="text-[9.5px] font-mono font-bold text-slate-800 truncate">100% Native</div>
                </div>
              </div>
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

export default Slide08;
