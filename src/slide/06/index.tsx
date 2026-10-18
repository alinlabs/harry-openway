import React from 'react';
import { useSlide06Container } from './container';
import { ArrowUpRight, ShieldCheck, CheckCircle2, FileCheck2, Scale, BarChart3, BadgeCheck } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide06Props {
  language?: Language;
}

export const Slide06: React.FC<Slide06Props> = ({ language = 'IN' }) => {
  const {
    header,
    dossierTitle,
    dossierSubtitle,
    dossierSummary,
    governanceSpecs,
    gatekeeperRoles,
    matrixTitle,
    matrixSubtitle,
    tenderCriteria,
    selectedCriterionId,
    setSelectedCriterionId,
    selectedCriterion,
    activeGatekeeperIndex,
    setActiveGatekeeperIndex,
    commercialTitle,
    commercialSubtitle,
    commercialModels,
    activeCommercialIndex,
    setActiveCommercialIndex,
    pillars,
    takeaway
  } = useSlide06Container(language);

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
        {/* Left Column: Governance Dossier & Pre-RFP Shaping Strategy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] sm:text-xs font-mono font-bold font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                <FileCheck2 className="w-3 h-3 text-blue-600" />
                <span>Governance Dossier</span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 font-semibold">Tier 3 Tender Committee</span>
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

          {/* Governance Key Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {governanceSpecs.map((spec, i) => (
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

          {/* Interactive Gatekeeper Persona Tabs */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Scale className="w-3 h-3 text-blue-600" />
                <span>Gatekeeper Focus & Shaping Tactics</span>
              </span>
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Click to Switch</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {gatekeeperRoles.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGatekeeperIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activeGatekeeperIndex === idx
                      ? 'bg-blue-700 text-white border-blue-800 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{g.role}</div>
                </button>
              ))}
            </div>

            {/* Active Gatekeeper Card */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-left space-y-1">
              <div className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-500">Prioritas:</span>
                <span className="truncate">{gatekeeperRoles[activeGatekeeperIndex].focus}</span>
              </div>
              <div className="text-[9px] text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 flex items-start gap-1">
                <span className="font-bold shrink-0">Syarat Audit:</span>
                <span className="leading-snug">{gatekeeperRoles[activeGatekeeperIndex].complianceReq}</span>
              </div>
              <div className="text-[9px] text-blue-800 bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100 flex items-start gap-1">
                <span className="font-bold shrink-0">Taktik Pre-RFP:</span>
                <span className="leading-snug">{gatekeeperRoles[activeGatekeeperIndex].shapingTactic}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Data Statistik, Scoring Matrix & Commercial Structure */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Top Half of Right: Pre-RFP Weighted Scoring Matrix */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{matrixTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {matrixSubtitle}
                </div>
              </div>
              <div className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Composite: 95.2 vs 71.8
              </div>
            </div>

            {/* SVG Clustered Vertical Column Bar Chart (Pre-RFP Tender Evaluation Matrix) */}
            <div className="bg-slate-50/70 p-2 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between text-[8px] font-mono px-1 mb-1 text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2 rounded-xs bg-slate-300 inline-block" />
                    <span>Incumbent Legacy</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2 rounded-xs bg-blue-600 inline-block" />
                    <span className="font-bold text-blue-700">OpenWay WAY4</span>
                  </span>
                </div>
                <span className="text-slate-400">Evaluasi Pembobotan Pre-RFP</span>
              </div>

              <div className="relative w-full h-24">
                <svg className="w-full h-full overflow-visible font-inter" viewBox="0 0 460 92">
                  {/* Guide lines */}
                  <line x1="30" y1="14" x2="445" y2="14" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="30" y1="44" x2="445" y2="44" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="30" y1="74" x2="445" y2="74" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Y Axis Values */}
                  <text x="24" y="17" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">100</text>
                  <text x="24" y="47" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">50</text>
                  <text x="24" y="77" textAnchor="end" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">0</text>

                  {/* Group 1: SNAP BI Native [35%] - Legacy 72, WAY4 96 */}
                  <g>
                    <rect x="52" y={74 - 43.2} width="16" height="43.2" rx="2" fill="#cbd5e1" />
                    <text x="60" y={74 - 45} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">72</text>

                    <rect x="71" y={74 - 57.6} width="16" height="57.6" rx="2" fill="#2563eb" />
                    <text x="79" y={74 - 59.5} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">96</text>

                    <rect x="89" y="10" width="18" height="9" rx="2" fill="#dbeafe" />
                    <text x="98" y="16.5" textAnchor="middle" fill="#1e40af" fontSize="6.5" fontFamily="monospace" fontWeight="700">+24</text>

                    <text x="70" y="86" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700">SNAP BI [35%]</text>
                  </g>

                  {/* Group 2: 5-Yr TCO [30%] - Legacy 68, WAY4 94 */}
                  <g>
                    <rect x="152" y={74 - 40.8} width="16" height="40.8" rx="2" fill="#cbd5e1" />
                    <text x="160" y={74 - 42.5} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">68</text>

                    <rect x="171" y={74 - 56.4} width="16" height="56.4" rx="2" fill="#2563eb" />
                    <text x="179" y={74 - 58.5} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">94</text>

                    <rect x="189" y="10" width="18" height="9" rx="2" fill="#dbeafe" />
                    <text x="198" y="16.5" textAnchor="middle" fill="#1e40af" fontSize="6.5" fontFamily="monospace" fontWeight="700">+26</text>

                    <text x="170" y="86" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700">5-Yr TCO [30%]</text>
                  </g>

                  {/* Group 3: Dual Engine [20%] - Legacy 65, WAY4 98 */}
                  <g>
                    <rect x="252" y={74 - 39.0} width="16" height="39.0" rx="2" fill="#cbd5e1" />
                    <text x="260" y={74 - 41} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">65</text>

                    <rect x="271" y={74 - 58.8} width="16" height="58.8" rx="2" fill="#2563eb" />
                    <text x="279" y={74 - 60.5} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">98</text>

                    <rect x="289" y="10" width="18" height="9" rx="2" fill="#dbeafe" />
                    <text x="298" y="16.5" textAnchor="middle" fill="#1e40af" fontSize="6.5" fontFamily="monospace" fontWeight="700">+33</text>

                    <text x="270" y="86" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700">Dual Engine [20%]</text>
                  </g>

                  {/* Group 4: Dukungan FSI [15%] - Legacy 82, WAY4 92 */}
                  <g>
                    <rect x="352" y={74 - 49.2} width="16" height="49.2" rx="2" fill="#cbd5e1" />
                    <text x="360" y={74 - 51} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="600">82</text>

                    <rect x="371" y={74 - 55.2} width="16" height="55.2" rx="2" fill="#2563eb" />
                    <text x="379" y={74 - 57} textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace" fontWeight="800">92</text>

                    <rect x="389" y="10" width="18" height="9" rx="2" fill="#dbeafe" />
                    <text x="398" y="16.5" textAnchor="middle" fill="#1e40af" fontSize="6.5" fontFamily="monospace" fontWeight="700">+10</text>

                    <text x="370" y="86" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700">Dukungan FSI [15%]</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Selected Shaping Strategy Detail */}
            <div className="mt-2 p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-800 uppercase mr-1.5">
                  Taktik Pre-RFP Shaping:
                </span>
                <span className="text-[9px] text-slate-700 font-medium">
                  {selectedCriterion.shapingStrategy}
                </span>
              </div>
              <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
            </div>
          </div>

          {/* Bottom Half of Right: Flexible Commercial Structuring */}
          <div className="p-3 rounded-xl border border-slate-200/80 bg-white/90 text-left space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5 text-blue-600" />
                  <span>{commercialTitle}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium">
                  {commercialSubtitle}
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Persetujuan Cepat
              </span>
            </div>

            {/* Commercial Options Tabs */}
            <div className="grid grid-cols-3 gap-1 pt-1">
              {commercialModels.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCommercialIndex(idx)}
                  className={`px-2 py-1.5 rounded text-[10px] font-bold text-left transition-all border ${
                    activeCommercialIndex === idx
                      ? 'bg-blue-700 text-white border-blue-800 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="truncate">{m.model}</div>
                  <div className={`text-[8px] font-normal truncate ${
                    activeCommercialIndex === idx ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {m.idealFor}
                  </div>
                </button>
              ))}
            </div>

            {/* Commercial Detail Box */}
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-[9px] text-slate-700 flex items-start gap-1">
                <strong className="text-slate-900 shrink-0">Struktur:</strong>
                <span className="leading-snug">{commercialModels[activeCommercialIndex].structure}</span>
              </div>
              <div className="text-[9px] text-blue-800 flex items-start gap-1">
                <strong className="shrink-0">Alokasi Risiko:</strong>
                <span className="leading-snug">{commercialModels[activeCommercialIndex].riskAllocation}</span>
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

export default Slide06;
