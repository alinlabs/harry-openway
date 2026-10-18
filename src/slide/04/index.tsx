import { ExecutiveQuadrantChart } from '../../components/ExecutiveQuadrantChart';
import React from 'react';
import { useSlide04Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Users, Target, Building2, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide04Props {
  language?: Language;
}

export const Slide04: React.FC<Slide04Props> = ({ language = 'IN' }) => {
  const {
    header,
    dossierTitle,
    dossierSubtitle,
    dossierSummary,
    accountSpecs,
    cSuitePersonas,
    quadrantTitle,
    quadrantSubtitle,
    quadrantLabels,
    quadrantPoints,
    selectedPointId,
    setSelectedPointId,
    selectedPoint,
    activePersonaIndex,
    setActivePersonaIndex,
    tcoTitle,
    tcoSubtitle,
    benchmarks,
    pillars,
    takeaway
  } = useSlide04Container(language);

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
        {/* Left Column: Planning Account Note & C-Suite Dossier */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                <Target className="w-3 h-3 text-blue-600" />
                <span>Account Dossier</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 font-semibold">Tier 1 Decision Matrix</span>
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

          {/* Account Key Specs Grid (Identifikasi Prospek by Data) */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {accountSpecs.map((spec, i) => (
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

          {/* Interactive C-Suite Persona Tabs */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-blue-600" />
                <span>Target Stakeholder Mandate & Strategy</span>
              </span>
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Click to Switch</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {cSuitePersonas.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePersonaIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activePersonaIndex === idx
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{p.role}</div>
                </button>
              ))}
            </div>

            {/* Active Persona Strategy Card */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-left space-y-1">
              <div className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-500">Mandat:</span>
                <span className="truncate">{cSuitePersonas[activePersonaIndex].mandate}</span>
              </div>
              <div className="text-[9px] text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 flex items-start gap-1">
                <span className="font-bold shrink-0">Pain Point:</span>
                <span className="leading-snug">{cSuitePersonas[activePersonaIndex].painPoint}</span>
              </div>
              <div className="text-[9px] text-blue-800 bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100 flex items-start gap-1">
                <span className="font-bold shrink-0">Strategi Penetrasi:</span>
                <span className="leading-snug">{cSuitePersonas[activePersonaIndex].strategy}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Data Statistik, Kuadran 2x2 & TCO Benchmark */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Top Half of Right: 2x2 Strategic Quadrant */}
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
                2x2 Decision Matrix
              </div>
            </div>

            {/* Visual 2x2 Cartesian Grid with Dots, Projection Lines & Explicit Coordinates */}
            <div className="relative h-44 sm:h-48 lg:h-50 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shadow-2xs">
              <ExecutiveQuadrantChart
                xAxisLabel="Urgensi Modernisasi"
                yAxisLabel="Otoritas C-Level"
                points={quadrantPoints}
                selectedPointId={selectedPointId}
                onSelectPoint={setSelectedPointId}
                quadrantLabels={{
                  q1: "Q1: P1 Priority Migration",
                  q2: "Q2: Strategic Pre-Emption",
                  q3: "Q3: Rapid Go-Live",
                  q4: "Q4: Executive Nurturing"
                }}
                getPointLabel={(pt) => pt.tier || pt.name || pt.id}
              />
            </div>

            {/* Selected Account Detail Strip */}
            <div className="mt-2 p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-700 uppercase mr-2">
                  Target Dipilih: {selectedPoint.name}
                </span>
                <span className="text-[9px] text-slate-600 font-medium">
                  Switch: <strong className="text-slate-800">{selectedPoint.systems}</strong> · Siklus Tender: <strong className="text-blue-700">{selectedPoint.dealWindow}</strong>
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-bold font-extrabold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                {selectedPoint.tcoImpact}
              </div>
            </div>
          </div>

          {/* Bottom Half of Right: 5-Year TCO Financial Comparison - Grouped Vertical Column Chart */}
          <div className="p-2.5 rounded-xl border border-slate-200/80 bg-white/90 text-left space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>{tcoTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {tcoSubtitle}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-[8px] font-mono font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-slate-300 inline-block" />
                    <span>Legacy</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-blue-600 inline-block" />
                    <span>WAY4</span>
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Hemat Bersih 35%
                </span>
              </div>
            </div>

            {/* SVG Grouped Vertical Column Chart */}
            <div className="bg-slate-50/70 p-2 rounded-lg border border-slate-200">
              <svg viewBox="0 0 460 102" className="w-full h-24 overflow-visible font-inter">
                {/* Horizontal Guide Lines */}
                <line x1="35" y1="12" x2="445" y2="12" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="35" y1="46" x2="445" y2="46" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="35" y1="80" x2="445" y2="80" stroke="#cbd5e1" strokeWidth="1.2" />

                {/* Y-Axis Value Labels */}
                <text x="30" y="15" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">60M</text>
                <text x="30" y="49" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">30M</text>
                <text x="30" y="83" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">0M</text>

                {/* Group 1: Lisensi Core (Rp 54M vs Rp 32M) - X Center: 105 */}
                <g>
                  {/* Legacy Bar: 54/60 * 68 = 61.2px */}
                  <rect x="85" y={80 - 61.2} width="18" height="61.2" rx="2" fill="#cbd5e1" />
                  <text x="94" y={80 - 63} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">54M</text>

                  {/* WAY4 Bar: 32/60 * 68 = 36.3px */}
                  <rect x="107" y={80 - 36.3} width="18" height="36.3" rx="2" fill="#2563eb" />
                  <text x="116" y={80 - 38} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">32M</text>

                  {/* Delta Savings Badge */}
                  <rect x="91" y="8" width="28" height="10" rx="2" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
                  <text x="105" y="15.5" textAnchor="middle" fill="#1d4ed8" fontSize="6.5" fontFamily="monospace" fontWeight="700">-40.7%</text>

                  {/* Category Label */}
                  <text x="105" y="93" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700">Lisensi Core Switch</text>
                </g>

                {/* Group 2: Hardware & Server (Rp 38M vs Rp 22M) - X Center: 240 */}
                <g>
                  {/* Legacy Bar: 38/60 * 68 = 43px */}
                  <rect x="220" y={80 - 43} width="18" height="43" rx="2" fill="#cbd5e1" />
                  <text x="229" y={80 - 45} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">38M</text>

                  {/* WAY4 Bar: 22/60 * 68 = 24.9px */}
                  <rect x="242" y={80 - 24.9} width="18" height="24.9" rx="2" fill="#2563eb" />
                  <text x="251" y={80 - 27} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">22M</text>

                  {/* Delta Savings Badge */}
                  <rect x="226" y="8" width="28" height="10" rx="2" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
                  <text x="240" y="15.5" textAnchor="middle" fill="#1d4ed8" fontSize="6.5" fontFamily="monospace" fontWeight="700">-42.1%</text>

                  {/* Category Label */}
                  <text x="240" y="93" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700">Hardware & Infra</text>
                </g>

                {/* Group 3: Maintenance & Support (Rp 28M vs Rp 24M) - X Center: 375 */}
                <g>
                  {/* Legacy Bar: 28/60 * 68 = 31.7px */}
                  <rect x="355" y={80 - 31.7} width="18" height="31.7" rx="2" fill="#cbd5e1" />
                  <text x="364" y={80 - 34} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">28M</text>

                  {/* WAY4 Bar: 24/60 * 68 = 27.2px */}
                  <rect x="377" y={80 - 27.2} width="18" height="27.2" rx="2" fill="#2563eb" />
                  <text x="386" y={80 - 29} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">24M</text>

                  {/* Delta Savings Badge */}
                  <rect x="361" y="8" width="28" height="10" rx="2" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
                  <text x="375" y="15.5" textAnchor="middle" fill="#1d4ed8" fontSize="6.5" fontFamily="monospace" fontWeight="700">-14.3%</text>

                  {/* Category Label */}
                  <text x="375" y="93" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700">Custom Maintenance</text>
                </g>
              </svg>
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

export default Slide04;
