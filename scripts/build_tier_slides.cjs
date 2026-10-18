const fs = require('fs');
const path = require('path');

const SLIDE_DIR = path.join(__dirname, '../src/slide');

console.log('=== [EXECUTE-PROMPT.md] Generating Slides 04, 05, 06 & Updating App.tsx / slidesData.ts ===');

// Helper to convert hex to Lottie rgba [r, g, b, 1]
function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [parseFloat(r.toFixed(3)), parseFloat(g.toFixed(3)), parseFloat(b.toFixed(3)), alpha];
}

// Helper to build a clean, valid Bodymovin shape layer
function makeRectLayer(index, name, w, h, x, y, fillColorHex, strokeColorHex = null, strokeWidth = 2, opacity = 100) {
  const shapes = [
    {
      ty: "rc",
      d: 1,
      s: { a: 0, k: [w, h] },
      p: { a: 0, k: [0, 0] },
      r: { a: 0, k: 8 },
      nm: name + " Rect"
    },
    {
      ty: "fl",
      c: { a: 0, k: hexToRgba(fillColorHex) },
      o: { a: 0, k: opacity },
      r: 1,
      bm: 0,
      nm: name + " Fill"
    }
  ];

  if (strokeColorHex) {
    shapes.push({
      ty: "st",
      c: { a: 0, k: hexToRgba(strokeColorHex) },
      o: { a: 0, k: 100 },
      w: { a: 0, k: strokeWidth },
      lc: 2,
      lj: 2,
      bm: 0,
      nm: name + " Stroke"
    });
  }

  shapes.push({
    ty: "tr",
    p: { a: 0, k: [0, 0] },
    a: { a: 0, k: [0, 0] },
    s: { a: 0, k: [100, 100] },
    r: { a: 0, k: 0 },
    o: { a: 0, k: 100 },
    sk: { a: 0, k: 0 },
    sa: { a: 0, k: 0 },
    nm: "Transform"
  });

  return {
    ddd: 0,
    ind: index,
    ty: 4,
    nm: name,
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [x, y, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] }
    },
    ao: 0,
    shapes: [{
      ty: "gr",
      it: shapes,
      nm: name + " Group",
      np: shapes.length,
      cix: 2,
      bm: 0
    }],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0
  };
}

function makeCircleLayer(index, name, size, x, y, fillColorHex, strokeColorHex = null, strokeWidth = 2, opacity = 100, animatedScale = false) {
  const shapes = [
    {
      ty: "el",
      d: 1,
      s: { a: 0, k: [size, size] },
      p: { a: 0, k: [0, 0] },
      nm: name + " Path"
    },
    {
      ty: "fl",
      c: { a: 0, k: hexToRgba(fillColorHex) },
      o: { a: 0, k: opacity },
      r: 1,
      bm: 0,
      nm: name + " Fill"
    }
  ];

  if (strokeColorHex) {
    shapes.push({
      ty: "st",
      c: { a: 0, k: hexToRgba(strokeColorHex) },
      o: { a: 0, k: 100 },
      w: { a: 0, k: strokeWidth },
      lc: 2,
      lj: 2,
      bm: 0,
      nm: name + " Stroke"
    });
  }

  shapes.push({
    ty: "tr",
    p: { a: 0, k: [0, 0] },
    a: { a: 0, k: [0, 0] },
    s: { a: 0, k: [100, 100] },
    r: { a: 0, k: 0 },
    o: { a: 0, k: 100 },
    sk: { a: 0, k: 0 },
    sa: { a: 0, k: 0 },
    nm: "Transform"
  });

  const scaleProp = animatedScale ? {
    a: 1,
    k: [
      { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [95, 95, 100] },
      { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 90, s: [105, 105, 100] },
      { t: 180, s: [95, 95, 100] }
    ]
  } : { a: 0, k: [100, 100, 100] };

  return {
    ddd: 0,
    ind: index,
    ty: 4,
    nm: name,
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [x, y, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: scaleProp
    },
    ao: 0,
    shapes: [{
      ty: "gr",
      it: shapes,
      nm: name + " Group",
      np: shapes.length,
      cix: 2,
      bm: 0
    }],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0
  };
}

function makeBaseLottie(nm, layers) {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 500,
    h: 360,
    nm: nm,
    ddd: 0,
    assets: [],
    layers: layers
  };
}

// -------------------------------------------------------------
// 1. SLIDE 04: Tier 1 Deep Dive - Decision Makers (C-Level & Board)
// -------------------------------------------------------------
const s04Data = `export type Language = 'IN' | 'EN';

export interface ActionCard {
  id: string;
  code: string;
  title: string;
  badgeLabel: string;
  mandate: string;
  deliverable: string;
  riskMitigation: string;
}

export interface WinningPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE04_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  cardsTitle: string;
  cardsBadge: string;
  cards: ActionCard[];
  metrics: {
    advantageTitle: string;
    tcoTitle: string;
    tcoValue: string;
    tcoSub: string;
    speedTitle: string;
    speedValue: string;
    speedSub: string;
    mandateTitle: string;
    mandateValue: string;
    mandateSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Pemetaan Tier 1: Decision Makers",
      title: "Tier 1: Dewan Direksi, CTO & Komite Keputusan FSI"
    },
    descriptionTitle: "Akses C-Level Ring-2 & Pemodelan Finansial TCO 5-Tahun",
    descriptionText: "Membuka pintu dewan direksi bank melalui warm network ring kedua dan menyelaraskan proposisi nilai WAY4 langsung dengan KPI strategis C-Level: efisiensi biaya kepemilikan 5 tahun (TCO), percepatan time-to-market modul digital, dan eliminasi total risiko kegagalan operasional (zero downtime).",
    cardsTitle: "Profil & Strategi Keterlibatan Tier 1 (C-Suite)",
    cardsBadge: "Executive Board",
    cards: [
      {
        id: "t1_cto",
        code: "#01",
        title: "Direktur IT & Chief Technology Officer (CTO)",
        badgeLabel: "Arsitektur Inti",
        mandate: "Modernisasi core switch legacy, kepatuhan BSPI 2030, kedaulatan arsitektur cloud-native",
        deliverable: "Executive Briefing: Perbandingan teknis monolitik vs microservices WAY4",
        riskMitigation: "Jaminan koeksistensi paralel tanpa merombak sistem yang sedang berjalan"
      },
      {
        id: "t1_biz",
        code: "#02",
        title: "Direktur Bisnis Konsumer & Transaksi Ritel",
        badgeLabel: "Pertumbuhan Revenue",
        mandate: "Peningkatan pendapatan berbasis fee (fee-based income), akuisisi merchant cepat",
        deliverable: "Katalog Modul Digital: SoftPOS, QRIS Cross-Border & In-App Digital Wallet",
        riskMitigation: "Peluncuran modul instan 3-4 bulan tanpa menunggu restrukturisasi core"
      },
      {
        id: "t1_cro",
        code: "#03",
        title: "Direktur Manajemen Risiko & Kepatuhan",
        badgeLabel: "Mitigasi Risiko",
        mandate: "Kepatuhan audit Bank Indonesia, OJK, dan standar keamanan data internasional PCI-DSS",
        deliverable: "Compliance Dossier: Sertifikasi SNAP BI dan track record audit 100% auditable",
        riskMitigation: "Track record global zero-breach dan standar tata kelola ketat"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Kemenangan C-Suite",
      tcoTitle: "Penghematan TCO 5 Tahun",
      tcoValue: "35%+",
      tcoSub: "Efisiensi lisensi & infrastruktur vs legacy",
      speedTitle: "Kecepatan Akses C-Level",
      speedValue: "<14 Hari",
      speedSub: "Akses pintu direksi via warm network ring-2",
      mandateTitle: "Mitigasi Risiko Downtime",
      mandateValue: "Zero Downtime",
      mandateSub: "Jaminan koeksistensi paralel Dual Engine"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Pemodelan Finansial 5-Yr TCO",
        subtitle: "Menyajikan kalkulasi Capex vs Opex komparatif di meja direksi",
        metric: "ROI Nyata",
        tag: "Finansial C-Level",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Warm Introduction Ring-2",
        subtitle: "Akses personal melalui jaringan perbankan terpercaya tanpa cold calling",
        metric: "Akses Instan",
        tag: "Jaringan Kredibel",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Dual Engine Co-existence",
        subtitle: "Menenangkan kekhawatiran dewan direksi atas risiko kegagalan migrasi inti",
        metric: "Tanpa Risiko",
        tag: "Mitigasi Direksi",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Sponsorship Mandat Strategis",
        subtitle: "Mengunci komitmen C-Level sebelum tender resmi dibuka",
        metric: "Dukungan Penuh",
        tag: "Pre-RFP Lock",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "C-Level perbankan membutuhkan kepastian TCO terukur dan kepatuhan regulasi mutlak.",
      target: "Akses C-Level <14 Hari · Sponsorship Mandat 100%"
    }
  },
  EN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Tier 1 Stakeholder Mapping: Decision Makers",
      title: "Tier 1: Executive Board, CTO & Bank Decision Committee"
    },
    descriptionTitle: "Ring-2 C-Suite Access & 5-Year Financial TCO Modeling",
    descriptionText: "Opening bank boardroom doors via warm ring-2 trusted executive networks, aligning WAY4's strategic value proposition directly with C-Level mandates: 5-year Total Cost of Ownership (TCO) predictability, accelerated digital module time-to-market, and total mitigation of operational failure risk.",
    cardsTitle: "Tier 1 (C-Suite) Strategic Engagement Profiles",
    cardsBadge: "Executive Board",
    cards: [
      {
        id: "t1_cto",
        code: "#01",
        title: "IT Director & Chief Technology Officer (CTO)",
        badgeLabel: "Core Architecture",
        mandate: "Legacy core switch modernization, BSPI 2030 compliance, cloud-native architecture sovereignty",
        deliverable: "Executive Briefing: Monolithic vs WAY4 microservices technical comparison",
        riskMitigation: "Guaranteed parallel co-existence without disrupting active systems"
      },
      {
        id: "t1_biz",
        code: "#02",
        title: "Director of Consumer Business & Retail Banking",
        badgeLabel: "Revenue Velocity",
        mandate: "Accelerate fee-based income, rapid merchant onboarding, mobile transaction dominance",
        deliverable: "Digital Module Catalog: SoftPOS, Cross-Border QRIS & In-App Digital Wallet",
        riskMitigation: "Instant modular go-live in 3-4 months without waiting for core restructuring"
      },
      {
        id: "t1_cro",
        code: "#03",
        title: "Chief Risk Officer & Head of Compliance",
        badgeLabel: "Risk Mitigation",
        mandate: "Strict compliance with Bank Indonesia, OJK, and international PCI-DSS security standards",
        deliverable: "Compliance Dossier: SNAP BI certifications and 100% auditable governance record",
        riskMitigation: "Proven global zero-breach track record and high-governance standards"
      }
    ],
    metrics: {
      advantageTitle: "C-Suite Winning Parameters",
      tcoTitle: "5-Year TCO Savings",
      tcoValue: "35%+",
      tcoSub: "License & infra efficiency vs legacy stack",
      speedTitle: "C-Level Access Velocity",
      speedValue: "<14 Days",
      speedSub: "Boardroom entry via ring-2 warm network",
      mandateTitle: "Downtime Risk Mitigation",
      mandateValue: "Zero Downtime",
      mandateSub: "Dual Engine parallel co-existence assurance"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "5-Yr Financial TCO Modeling",
        subtitle: "Delivering comparative Capex vs Opex financial calculations to the boardroom",
        metric: "Proven ROI",
        tag: "C-Level Finance",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Ring-2 Warm Introductions",
        subtitle: "Personal access through trusted enterprise banking networks without cold outreach",
        metric: "Direct Access",
        tag: "Trusted Network",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Dual Engine Co-existence",
        subtitle: "Alleviating boardroom anxiety regarding core migration downtime and operational failure",
        metric: "Risk-Free",
        tag: "Board Assurance",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Strategic Mandate Sponsorship",
        subtitle: "Securing executive C-Level alignment and sponsorship prior to formal tender release",
        metric: "Full Buy-in",
        tag: "Pre-RFP Lock",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "FSI boardrooms demand verified TCO certainty, zero downtime risk, and absolute regulatory compliance.",
      target: "C-Level Access <14 Days · 100% Mandate Sponsorship"
    }
  }
};
`;

// Slide 04 Lottie JSON: Executive Boardroom & C-Suite Orbit
const s04Lottie = makeBaseLottie("Tier 1 Decision Makers Lottie", [
  makeCircleLayer(1, "Boardroom Radar Orbit Outer", 320, 250, 180, "#e8f0fe", "#1a73e8", 1.5, 40),
  makeCircleLayer(2, "Boardroom Radar Orbit Mid", 220, 250, 180, "#fce8e6", "#ea4335", 1.5, 50),
  makeCircleLayer(3, "Boardroom Radar Orbit Core", 130, 250, 180, "#e6f4ea", "#34a853", 2, 70),
  makeCircleLayer(4, "Center C-Level Hub Node", 60, 250, 180, "#1a73e8", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "CTO Node", 34, 150, 120, "#ea4335", "#ffffff", 2, 90),
  makeCircleLayer(6, "Business Director Node", 34, 350, 120, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "CRO Compliance Node", 34, 250, 290, "#34a853", "#ffffff", 2, 90),
  makeRectLayer(8, "Boardroom Pedestal Base", 280, 24, 250, 330, "#f1f3f4", "#dadce0", 1)
]);

// Slide 04 visual-3D.tsx
const s04Visual = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[220px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
`;

// Slide 04 container.tsx
const s04Container = `import { useState } from 'react';
import { SLIDE04_DATA, Language } from './data';

export const useSlide04Container = (language: Language = 'IN') => {
  const data = SLIDE04_DATA[language] || SLIDE04_DATA.IN;
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    cardsTitle: data.cardsTitle,
    cardsBadge: data.cardsBadge,
    cards: data.cards,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCardIndex,
    setActiveCardIndex
  };
};
`;

// Slide 04 index.tsx
const s04Index = `import React from 'react';
import { useSlide04Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Crown } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide04Props {
  language?: Language;
}

export const Slide04: React.FC<Slide04Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide04Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Tier 1 C-Suite Action Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Cards under description - Bold & Hitam Title, Pastel Badge, No Outline */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1 mb-1.5">
              <span className="font-bold text-black">{cardsTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/60 flex items-center gap-1">
                <Crown className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-blue-50 text-blue-700 border border-blue-100/60',
                'bg-amber-50 text-amber-700 border border-amber-100/60',
                'bg-emerald-50 text-emerald-700 border border-emerald-100/60'
              ];
              const badgeCls = badgeColors[idx % badgeColors.length];
              return (
                <div
                  key={card.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-left select-none pointer-events-none cursor-default"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {card.code}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {card.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                      {card.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {card.mandate}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{card.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-slate-50/80 border border-slate-200/70">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.speedTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.speedValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.speedSub}
                </div>
              </div>

              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.mandateTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.mandateValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.mandateSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
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

export default Slide04;
`;

// -------------------------------------------------------------
// 2. SLIDE 05: Tier 2 Deep Dive - Key Influencers (Architecture & VP)
// -------------------------------------------------------------
const s05Data = `export type Language = 'IN' | 'EN';

export interface ActionCard {
  id: string;
  code: string;
  title: string;
  badgeLabel: string;
  mandate: string;
  deliverable: string;
  riskMitigation: string;
}

export interface WinningPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE05_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  cardsTitle: string;
  cardsBadge: string;
  cards: ActionCard[];
  metrics: {
    advantageTitle: string;
    tpsTitle: string;
    tpsValue: string;
    tpsSub: string;
    slaTitle: string;
    slaValue: string;
    slaSub: string;
    pocTitle: string;
    pocValue: string;
    pocSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Pemetaan Tier 2: Key Influencers",
      title: "Tier 2: Arsitektur Enterprise, VP Operasional & Tim Evaluasi"
    },
    descriptionTitle: "Lokakarya Arsitektur Teknis, Benchmark TPS & Validasi PoC",
    descriptionText: "Mendekati evaluator teknis bank melalui deep technical discovery atas kendala arsitektur legacy mereka (ACI/Fiserv). Memperagakan keunggulan WAY4 modular microservices, latensi sub-detik pada 10.000+ TPS, dan kemudahan integrasi API SNAP BI untuk menumbuhkan 'Internal Champion' di level manajerial.",
    cardsTitle: "Profil & Strategi Keterlibatan Tier 2 (Technical Champions)",
    cardsBadge: "Technical Champions",
    cards: [
      {
        id: "t2_ea",
        code: "#01",
        title: "VP Enterprise Architecture & Cloud Infra",
        badgeLabel: "Arsitektur BSPI",
        mandate: "Menghindari vendor lock-in, migrasi containerized, standardisasi Open-API SNAP BI",
        deliverable: "Arsitektur Referensi: Desain microservices WAY4 & blueprint cloud-native",
        riskMitigation: "Benchmark interoperabilitas multicloud & integrasi sistem legacy"
      },
      {
        id: "t2_cards",
        code: "#02",
        title: "Head of Cards, Payments & Merchant PMO",
        badgeLabel: "Produk Pembayaran",
        mandate: "Fitur kartu debit/kredit fleksibel, parameterisasi promosi merchant real-time",
        deliverable: "Demo Produk WAY4: Simulasi konfigurasi produk baru dalam hitungan hari (zero-code)",
        riskMitigation: "Memangkas waktu peluncuran produk dari 9 bulan menjadi <3 minggu"
      },
      {
        id: "t2_ops",
        code: "#03",
        title: "VP IT Operations, Switching & Settlement",
        badgeLabel: "Stabilitas TPS",
        mandate: "Kestabilan transaksi puncak (Harbolnas/Gajian), rekonsiliasi dan settlement instan",
        deliverable: "Hasil Uji Beban: Stress test WAY4 10.000+ TPS dengan latensi <15ms",
        riskMitigation: "Arsitektur fail-over otomatis dan continuous 24/7 availability"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Evaluasi Teknis",
      tpsTitle: "Kapasitas Throughput TPS",
      tpsValue: "10,000+ TPS",
      tpsSub: "Benchmarked sub-second transaction latency",
      slaTitle: "Ketersediaan Operasional",
      slaValue: "99.999%",
      slaSub: "Arsitektur cloud-native high availability",
      pocTitle: "Keberhasilan Validasi PoC",
      pocValue: "100% Lulus",
      pocSub: "Uji kepatuhan SNAP BI & simulasi transaksi"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Technical Discovery Workshop",
        subtitle: "Membedah hambatan operasional arsitektur legacy klien bersama tim arsitek bank",
        metric: "Solusi Tepat",
        tag: "Discovery Teknis",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Proof of Concept (PoC) Terukur",
        subtitle: "Menunjukkan kecepatan konfigurasi produk dan latensi transaksi WAY4 secara langsung",
        metric: "Uji Nyata",
        tag: "Validasi Lapangan",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Kepatuhan SNAP BI Native",
        subtitle: "Menghubungkan ekosistem API payment gateway tanpa memerlukan middleware kustom tambahan",
        metric: "100% Native",
        tag: "Standardisasi BI",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Internal Technical Champions",
        subtitle: "Mengubah evaluator teknis menjadi promotor utama WAY4 di dalam komite pemilihan",
        metric: "Dukungan Kuat",
        tag: "Advokasi Internal",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Evaluator teknis dan tim arsitek membutuhkan kejelasan integrasi API dan ketahanan throughput TPS teruji.",
      target: "10,000+ TPS Teruji · Advokasi Internal 100%"
    }
  },
  EN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Tier 2 Stakeholder Mapping: Key Influencers",
      title: "Tier 2: Enterprise Architecture, Business VPs & Technical PMO"
    },
    descriptionTitle: "Architecture Discovery Workshops, TPS Benchmarks & PoC Validation",
    descriptionText: "Engaging bank technical evaluators through deep technical discovery into legacy architecture bottlenecks (ACI/Fiserv). Demonstrating WAY4's modular microservices advantages, sub-second latency at 10,000+ TPS, and native SNAP BI API interoperability to groom active internal technical champions.",
    cardsTitle: "Tier 2 (Key Influencers) Strategic Engagement Profiles",
    cardsBadge: "Technical Champions",
    cards: [
      {
        id: "t2_ea",
        code: "#01",
        title: "VP Enterprise Architecture & Cloud Infrastructure",
        badgeLabel: "BSPI Architecture",
        mandate: "Eliminate vendor lock-in, enable containerized deployment, standardize Open-API SNAP BI",
        deliverable: "Reference Architecture: WAY4 microservices blueprint & cloud-native design",
        riskMitigation: "Multicloud interoperability benchmark & parallel legacy coexistence"
      },
      {
        id: "t2_cards",
        code: "#02",
        title: "Head of Cards, Payments & Merchant PMO",
        badgeLabel: "Payment Products",
        mandate: "Flexible debit/credit card issuance, real-time merchant promotion parameterization",
        deliverable: "WAY4 Live Showcase: Parameterizing new payment products in days without coding",
        riskMitigation: "Compressing product release cycles from 9 months to <3 weeks"
      },
      {
        id: "t2_ops",
        code: "#03",
        title: "VP IT Operations, Switching & Settlement",
        badgeLabel: "TPS Stability",
        mandate: "Peak shopping load resilience (Payday/Flash Sales), instant reconciliation & settlement",
        deliverable: "Stress Test Audit: WAY4 benchmark at 10,000+ TPS with <15ms response latency",
        riskMitigation: "Automated active-active failover and continuous 24/7 mission-critical availability"
      }
    ],
    metrics: {
      advantageTitle: "Technical Evaluation Parameters",
      tpsTitle: "Throughput Capacity",
      tpsValue: "10,000+ TPS",
      tpsSub: "Benchmarked sub-second transaction latency",
      slaTitle: "Operational Availability",
      slaValue: "99.999%",
      slaSub: "Cloud-native high availability SLA",
      pocTitle: "PoC Validation Success Rate",
      pocValue: "100% Passed",
      pocSub: "Verified SNAP BI compliance & simulated loads"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Technical Discovery Workshop",
        subtitle: "Unpacking legacy core system bottlenecks collaboratively with bank lead architects",
        metric: "Precise Fit",
        tag: "Tech Discovery",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Measured Proof of Concept (PoC)",
        subtitle: "Demonstrating rapid product parameterization and transaction latency live under stress",
        metric: "Field Proven",
        tag: "Live Validation",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Native SNAP BI Compliance",
        subtitle: "Connecting the national payment gateway ecosystem without third-party middleware",
        metric: "100% Native",
        tag: "National Standards",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Internal Technical Champions",
        subtitle: "Converting technical architects into key vocal advocates within the tender committee",
        metric: "Strong Buy-in",
        tag: "Internal Advocacy",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Technical architects require verifiable API interoperability, sub-second TPS latency, and zero vendor lock-in.",
      target: "10,000+ Benchmarked TPS · 100% Technical Advocacy"
    }
  }
};
`;

// Slide 05 Lottie JSON: Architecture Stack & High-TPS Engine
const s05Lottie = makeBaseLottie("Tier 2 Key Influencers Lottie", [
  makeRectLayer(1, "Base Server Chassis", 340, 40, 250, 310, "#e8eaed", "#bdc1c6", 2),
  makeRectLayer(2, "Middle Processing Slabs", 300, 35, 250, 250, "#e8f0fe", "#1a73e8", 2),
  makeRectLayer(3, "High-TPS Engine Slab", 260, 35, 250, 190, "#fef7e0", "#fbbc04", 2),
  makeRectLayer(4, "Top Microservices Gateway", 220, 35, 250, 130, "#e6f4ea", "#34a853", 2),
  makeCircleLayer(5, "Core TPS Pulse Hub", 50, 250, 65, "#1a73e8", "#ffffff", 2, 100, true),
  makeCircleLayer(6, "API Node Left", 24, 160, 130, "#34a853", "#ffffff", 1.5, 90),
  makeCircleLayer(7, "API Node Right", 24, 340, 130, "#fbbc04", "#ffffff", 1.5, 90)
]);

// Slide 05 visual-3D.tsx
const s05Visual = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[220px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
`;

// Slide 05 container.tsx
const s05Container = `import { useState } from 'react';
import { SLIDE05_DATA, Language } from './data';

export const useSlide05Container = (language: Language = 'IN') => {
  const data = SLIDE05_DATA[language] || SLIDE05_DATA.IN;
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    cardsTitle: data.cardsTitle,
    cardsBadge: data.cardsBadge,
    cards: data.cards,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCardIndex,
    setActiveCardIndex
  };
};
`;

// Slide 05 index.tsx
const s05Index = `import React from 'react';
import { useSlide05Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide05Props {
  language?: Language;
}

export const Slide05: React.FC<Slide05Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide05Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Tier 2 Key Influencer Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Cards under description - Bold & Hitam Title, Pastel Badge, No Outline */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1 mb-1.5">
              <span className="font-bold text-black">{cardsTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100/60 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-blue-50 text-blue-700 border border-blue-100/60',
                'bg-indigo-50 text-indigo-700 border border-indigo-100/60',
                'bg-emerald-50 text-emerald-700 border border-emerald-100/60'
              ];
              const badgeCls = badgeColors[idx % badgeColors.length];
              return (
                <div
                  key={card.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-left select-none pointer-events-none cursor-default"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {card.code}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {card.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                      {card.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {card.mandate}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{card.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-slate-50/80 border border-slate-200/70">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tpsTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tpsValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tpsSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.slaTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.slaValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.slaSub}
                </div>
              </div>

              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.pocTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.pocValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.pocSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
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

export default Slide05;
`;

// -------------------------------------------------------------
// 3. SLIDE 06: Tier 3 Deep Dive - Gatekeepers (Procurement & Legal)
// -------------------------------------------------------------
const s06Data = `export type Language = 'IN' | 'EN';

export interface ActionCard {
  id: string;
  code: string;
  title: string;
  badgeLabel: string;
  mandate: string;
  deliverable: string;
  riskMitigation: string;
}

export interface WinningPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE06_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  cardsTitle: string;
  cardsBadge: string;
  cards: ActionCard[];
  metrics: {
    advantageTitle: string;
    auditTitle: string;
    auditValue: string;
    auditSub: string;
    windowTitle: string;
    windowValue: string;
    windowSub: string;
    disputeTitle: string;
    disputeValue: string;
    disputeSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Pemetaan Tier 3: Gatekeepers",
      title: "Tier 3: Komite Pengadaan, Divisi Legal & Tata Kelola Tender"
    },
    descriptionTitle: "Pre-RFP Shaping Kriteria, Integritas Audit 100% & Skema Lisensi Fleksibel",
    descriptionText: "Menavigasi gerbang pengadaan (procurement gatekeepers) melalui strategi pre-RFP shaping yang etis dan terstruktur. Menyusun spesifikasi tender yang 100% auditable (standar setara LKPP/BUMN), memverifikasi mitigasi risiko vendor (VRM), dan menyusun struktur kontrak komersial yang transparan serta fleksibel.",
    cardsTitle: "Profil & Strategi Keterlibatan Tier 3 (Gatekeepers)",
    cardsBadge: "Procurement & VRM",
    cards: [
      {
        id: "t3_proc",
        code: "#01",
        title: "Komite Pengadaan (Procurement & Sourcing)",
        badgeLabel: "Tata Kelola Tender",
        mandate: "Transparansi tender, kepatuhan prosedur pengadaan formal bank, rasionalisasi penawaran harga",
        deliverable: "Spesifikasi Pre-RFP Terinci: Mengunci kriteria microservices, cloud-native & SNAP BI",
        riskMitigation: "Mencegah bias vendor dengan spesifikasi fungsional objektif dan terstandar"
      },
      {
        id: "t3_legal",
        code: "#02",
        title: "Divisi Legal, Kontrak & Kepatuhan Bank",
        badgeLabel: "Perjanjian Hukum",
        mandate: "Kepastian klausul SLA ketersediaan, perlindungan data pribadi (UU PDP), hak kekayaan intelektual",
        deliverable: "Draf Master Service Agreement (MSA) standar perbankan dengan klausul ganti rugi jelas",
        riskMitigation: "Struktur hukum bersih bebas sengketa dan perlindungan yurisdiksi lokal"
      },
      {
        id: "t3_vrm",
        code: "#03",
        title: "Vendor Risk Management (VRM) & Internal Audit",
        badgeLabel: "Kepatuhan Audit",
        mandate: "Kelayakan finansial vendor, audit kesinambungan bisnis (BCP/DRP), sertifikasi ISO 27001",
        deliverable: "Vendor Risk Dossier: Audit finansial OpenWay, sertifikasi keamanan global dan lokal",
        riskMitigation: "Verifikasi menyeluruh kesiapan Disaster Recovery Plan berskala enterprise"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Integritas Pengadaan",
      auditTitle: "Kepatuhan Audit Formal",
      auditValue: "100% Auditable",
      auditSub: "Bebas catatan sengketa & setara standar LKPP",
      windowTitle: "Jendela Pre-RFP Shaping",
      windowValue: "3-6 Bulan",
      windowSub: "Sebelum dokumen tender resmi dirilis bank",
      disputeTitle: "Rekam Jejak Sengketa",
      disputeValue: "Zero Dispute",
      disputeSub: "16 tahun reputasi pengadaan enterprise bersih"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Pre-RFP Shaping Etis",
        subtitle: "Menyuntikkan standar keunggulan WAY4 ke dalam draf RFI/RFP bank sebelum tender dibuka",
        metric: "Kunci Kriteria",
        tag: "Inisiasi Awal",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Integritas Tata Kelola 100%",
        subtitle: "Dokumentasi tender lengkap, akurat, dan dapat diaudit oleh OJK maupun BPKP/LKPP",
        metric: "Bebas Risiko",
        tag: "Kepatuhan Penuh",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Skema Lisensi Fleksibel",
        subtitle: "Opsi lisensi Capex perpetual, Opex berbasis langganan, atau revenue-sharing transaksi",
        metric: "Model Fleksibel",
        tag: "Struktur Finansial",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Dossier Mitigasi VRM Lengkap",
        subtitle: "Paket verifikasi risiko vendor lengkap untuk mempercepat persetujuan komite risiko bank",
        metric: "Persetujuan Cepat",
        tag: "Akselerasi Tender",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Komite pengadaan dan legal memerlukan transparansi dokumen, mitigasi risiko vendor, dan audit tender bersih.",
      target: "100% Kepatuhan Audit · Pre-RFP Window 3-6 Bulan"
    }
  },
  EN: {
    header: {
      category: "Buying Centre Deep Dive",
      catalyst: "Tier 3 Stakeholder Mapping: Gatekeepers",
      title: "Tier 3: Procurement Committee, Legal Division & Tender Governance"
    },
    descriptionTitle: "Pre-RFP Criteria Shaping, 100% Audit Integrity & Flexible Commercial Licensing",
    descriptionText: "Navigating formal procurement gatekeepers through structured, ethical pre-RFP shaping. Formulating 100% auditable tender criteria (comparable to rigorous LKPP/SOE standards), clearing Vendor Risk Management (VRM) audits, and packaging transparent, flexible commercial licensing models.",
    cardsTitle: "Tier 3 (Gatekeepers) Strategic Engagement Profiles",
    cardsBadge: "Procurement & VRM",
    cards: [
      {
        id: "t3_proc",
        code: "#01",
        title: "Procurement Committee & Strategic Sourcing",
        badgeLabel: "Tender Governance",
        mandate: "Procurement transparency, strict compliance with formal bank tender codes, price benchmarking",
        deliverable: "Granular Pre-RFP Specifications: Locking microservices, cloud-native & SNAP BI criteria",
        riskMitigation: "Eliminating subjective vendor bias via standardized, objective functional criteria"
      },
      {
        id: "t3_legal",
        code: "#02",
        title: "Legal, Contract & Bank Compliance Division",
        badgeLabel: "Legal Contract",
        mandate: "Contractual SLA guarantees, Personal Data Protection compliance (UU PDP), IP rights clarity",
        deliverable: "FSI-Standard Master Service Agreement (MSA) with balanced liability & warranty clauses",
        riskMitigation: "Dispute-free legal structures ensuring complete local jurisdiction protection"
      },
      {
        id: "t3_vrm",
        code: "#03",
        title: "Vendor Risk Management (VRM) & Internal Audit",
        badgeLabel: "Audit Compliance",
        mandate: "Vendor financial solvency audit, Business Continuity (BCP/DRP) audit, ISO 27001 validation",
        deliverable: "Comprehensive VRM Dossier: OpenWay financial audits and enterprise security certifications",
        riskMitigation: "Rigorous verification of enterprise-grade Disaster Recovery capabilities"
      }
    ],
    metrics: {
      advantageTitle: "Procurement Integrity Parameters",
      auditTitle: "Formal Audit Compliance",
      auditValue: "100% Auditable",
      auditSub: "Zero dispute record matching strict SOE standards",
      windowTitle: "Pre-RFP Shaping Window",
      windowValue: "3-6 Months",
      windowSub: "Before formal bank RFP publication",
      disputeTitle: "Legal Dispute Track Record",
      disputeValue: "Zero Disputes",
      disputeSub: "16-year clean enterprise procurement reputation"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Ethical Pre-RFP Shaping",
        subtitle: "Injecting WAY4's structural advantages into early bank RFI/RFP specifications",
        metric: "Locked Criteria",
        tag: "Early Initiation",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "100% Governance Integrity",
        subtitle: "Complete, audit-ready documentation compliant with OJK, BPKP, and SOE standards",
        metric: "Zero Risk",
        tag: "Full Compliance",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Flexible Licensing Models",
        subtitle: "Perpetual Capex, subscription-based Opex, or transaction-linked revenue-sharing options",
        metric: "Flexible Models",
        tag: "Financial Fit",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Complete VRM Risk Package",
        subtitle: "Comprehensive vendor diligence dossier accelerating bank risk committee clearances",
        metric: "Fast Clearance",
        tag: "Tender Velocity",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Procurement committees and legal auditors require total transparency, zero vendor risk, and clean procurement compliance.",
      target: "100% Audit Compliance · 3-6 Month Pre-RFP Window"
    }
  }
};
`;

// Slide 06 Lottie JSON: Procurement & Legal Governance Shield
const s06Lottie = makeBaseLottie("Tier 3 Gatekeepers Lottie", [
  makeRectLayer(1, "Procurement Platform Base", 320, 26, 250, 310, "#e8eaed", "#bdc1c6", 2),
  makeCircleLayer(2, "Outer Audit Compliance Ring", 260, 250, 170, "#e6f4ea", "#34a853", 2, 50),
  makeCircleLayer(3, "Inner Legal Verification Ring", 170, 250, 170, "#e8f0fe", "#1a73e8", 2, 70),
  makeCircleLayer(4, "Center Procurement Shield Emblem", 75, 250, 170, "#34a853", "#ffffff", 3, 100, true),
  makeRectLayer(5, "Tender Spec Checklist 1", 160, 14, 250, 110, "#ffffff", "#34a853", 1.5, 95),
  makeRectLayer(6, "Tender Spec Checklist 2", 140, 14, 250, 230, "#ffffff", "#1a73e8", 1.5, 95)
]);

// Slide 06 visual-3D.tsx
const s06Visual = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[220px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
`;

// Slide 06 container.tsx
const s06Container = `import { useState } from 'react';
import { SLIDE06_DATA, Language } from './data';

export const useSlide06Container = (language: Language = 'IN') => {
  const data = SLIDE06_DATA[language] || SLIDE06_DATA.IN;
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    cardsTitle: data.cardsTitle,
    cardsBadge: data.cardsBadge,
    cards: data.cards,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCardIndex,
    setActiveCardIndex
  };
};
`;

// Slide 06 index.tsx
const s06Index = `import React from 'react';
import { useSlide06Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide06Props {
  language?: Language;
}

export const Slide06: React.FC<Slide06Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    cardsTitle,
    cardsBadge,
    cards,
    metrics,
    pillars,
    takeaway
  } = useSlide06Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Header 2 Baris: Abu-Abu Kecil di Atas, Biru Bold di Judul Utama */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2">
          <span className="text-slate-400">{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Executive Canvas (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Tier 3 Gatekeeper Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-black tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Cards under description - Bold & Hitam Title, Pastel Badge, No Outline */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black px-1 mb-1.5">
              <span className="font-bold text-black">{cardsTitle}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/60 flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-emerald-50 text-emerald-700 border border-emerald-100/60',
                'bg-blue-50 text-blue-700 border border-blue-100/60',
                'bg-indigo-50 text-indigo-700 border border-indigo-100/60'
              ];
              const badgeCls = badgeColors[idx % badgeColors.length];
              return (
                <div
                  key={card.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-left select-none pointer-events-none cursor-default"
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {card.code}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {card.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.5 rounded " + badgeCls}>
                      {card.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {card.mandate}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{card.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual + Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-bold text-black uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-slate-50/80 border border-slate-200/70">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.auditTitle}
                </div>
                <div className="text-2xl font-black text-emerald-700 font-inter tabular-nums mt-0.5">
                  {metrics.auditValue}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium">
                  {metrics.auditSub}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-left pt-1 border-t border-slate-100">
              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.windowTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.windowValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.windowSub}
                </div>
              </div>

              <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.disputeTitle}
                </div>
                <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                  {metrics.disputeValue}
                </div>
                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                  {metrics.disputeSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Value Pillars: Neutral Clean Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {pillar.index}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-600">
                {pillar.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
              <span className="text-[10px] font-mono font-bold text-blue-700">
                {pillar.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar */}
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

export default Slide06;
`;

// Helper to write files to disk
function writeSlideDir(dirNum, dataStr, lottieObj, visualStr, containerStr, indexStr) {
  const targetDir = path.join(SLIDE_DIR, dirNum);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  fs.writeFileSync(path.join(targetDir, 'data.ts'), dataStr, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'lottie.json'), JSON.stringify(lottieObj, null, 2), 'utf8');
  fs.writeFileSync(path.join(targetDir, 'visual-3D.tsx'), visualStr, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'container.tsx'), containerStr, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexStr, 'utf8');

  // Also mirror to public/assets/lottie/slide-XX.json for robustness
  const publicDir = path.join(__dirname, '../public/assets/lottie');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, `slide-${dirNum}.json`), JSON.stringify(lottieObj, null, 2), 'utf8');
}

// Write Slide 04, 05, 06
writeSlideDir('04', s04Data, s04Lottie, s04Visual, s04Container, s04Index);
console.log('Slide 04 (Tier 1 Deep Dive) generated successfully.');

writeSlideDir('05', s05Data, s05Lottie, s05Visual, s05Container, s05Index);
console.log('Slide 05 (Tier 2 Deep Dive) generated successfully.');

writeSlideDir('06', s06Data, s06Lottie, s06Visual, s06Container, s06Index);
console.log('Slide 06 (Tier 3 Deep Dive) generated successfully.');

// -------------------------------------------------------------
// 4. Update slidesData.ts for 10 Slides (IN & EN)
// -------------------------------------------------------------
const slidesDataPath = path.join(SLIDE_DIR, 'slidesData.ts');
const newSlidesData = `export type Language = 'IN' | 'EN';

export interface SlideMetadata {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  durationEstimate: string;
  speakerNotes: {
    purpose: string;
    talkingPoints: string[];
    potentialQuestions: string[];
    suggestedAnswer: string;
  };
}

export const SLIDES_DATA_BY_LANG: Record<Language, SlideMetadata[]> = {
  IN: [
    {
      id: 1,
      title: "Profil Eksekutif & Latar Belakang Profesional",
      subtitle: "Harry M. Gultom – Kandidat Senior Business Development Executive",
      category: "Profil & Nilai Tambah",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membangun impresi awal yang kredibel dan meyakinkan dewan direksi mengenai kematangan pengalaman B2B IT sales 16 tahun serta penguasaan ekosistem perbankan.",
        talkingPoints: [
          "Selamat pagi. Saya Harry, saya membawa 16 tahun pengalaman di industri IT dan B2B sales.",
          "Meskipun secara personal saya tidak memegang akun bank secara langsung, rekam jejak saya sangat erat di industri ini.",
          "Saya memiliki pengalaman panjang sebagai support komersial bagi tim sales yang menangani bank, serta bertindak sebagai Sales Manager yang memimpin tim sales untuk bank-bank terkemuka.",
          "Saya sangat paham bagaimana ekosistem IT, bahasa komersial, dan tata kelola orang perbankan bergerak.",
          "Keahlian utama saya tidak hanya membuka pintu baru, tetapi secara aktif mengelola hubungan strategis dengan klien lama untuk menjaga retensi tinggi serta menumbuhkan peluang bisnis baru."
        ],
        potentialQuestions: [
          "Bagaimana Anda memposisicionkan diri untuk akun perbankan jika belum memegang akun bank secara langsung sebagai single contributor?"
        ],
        suggestedAnswer: "Saya memposisikan diri sebagai orchestrator strategis. Dengan memimpin dan mensupport tim sales untuk bank-bank besar selama 16 tahun, saya menguasai bahasa komersial C-Level, dinamika komite pengadaan perbankan, dan cara menyelaraskan tim teknis dengan ekspektasi pengambil keputusan."
      }
    },
    {
      id: 2,
      title: "Kondisi Pasar, Potensi & Posisi Kompetitor",
      subtitle: "Katalis Bank Indonesia BSPI 2030 & Vektor Migrasi OpenWay",
      category: "Lanskap Pasar & Kompetitif",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Meyakinkan audiens bahwa Harry memahami urgensi pasar saat ini dan tahu persis di mana ceruk pasar terbesar yang siap dimenangkan OpenWay.",
        talkingPoints: [
          "Meningkatnya kebutuhan pasar Indonesia saat ini sangat dipengaruhi oleh kebijakan Bank Indonesia melalui BSPI 2030 yang mewajibkan modernisasi infrastruktur pembayaran.",
          "OpenWay melalui platform WAY4 sudah memimpin di bank besar seperti BRI, Finnet, dan ASBANDA.",
          "Namun, celah pertumbuhan ke depan ada pada bank-bank komersial menengah yang sistem legacy-nya (seperti ACI atau Fiserv) mulai kesulitan memenuhi standar kepatuhan regulasi baru ini.",
          "Tantangan BD kita adalah masuk ke meja Direksi mereka sebelum kompetitor lain mengambil kesempatan ini."
        ],
        potentialQuestions: [
          "Mengapa bank menengah enggan mengganti sistem lama mereka meskipun ada regulasi BSPI?"
        ],
        suggestedAnswer: "Ketakutan terbesar mereka adalah downtime dan risiko kegagalan migrasi inti. Oleh karena itu, kita masuk dengan pendekatan Dual Engine dan migrasi bertahap, bukan 'big-bang replacement'."
      }
    },
    {
      id: 3,
      title: "Metodologi Eksekusi & Pemetaan Akun FSI",
      subtitle: "Buying Centre Dossier & Formula Kemenangan Tender RFP",
      category: "Metodologi & Eksekusi",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan bahwa Harry memiliki metodologi yang sistematis, teruji, dan tidak bergantung pada keberuntungan dalam memenangkan proyek bernilai puluhan miliar rupiah.",
        talkingPoints: [
          "Saya menerapkan metodologi Strategic FSI Account Mapping dan menyusun Buying Centre Dossier seperti yang terlihat di slide ini.",
          "Di industri perbankan, keputusan dibeli oleh sebuah komite 3 tingkat: Decision Makers (Tier 1), Key Influencers (Tier 2), dan Gatekeepers (Tier 3).",
          "Melalui ekosistem ring kedua saya, saya menggali informasi intelijen dari level Influencers untuk tahu masalah sistem mereka, lalu menggunakannya untuk melakukan warm introduction langsung ke tingkat Direksi IT (C-Level).",
          "Pendekatan ini juga krusial untuk Enterprise RFP & Tender Winning Formula saya melalui Pre-RFP Shaping terencana."
        ],
        potentialQuestions: [
          "Bagaimana jika bank sudah memiliki vendor preferensi sebelum tender diumumkan?"
        ],
        suggestedAnswer: "Inilah fungsi Pre-RFP Shaping. Kita menyuntikkan kriteria kepatuhan BSPI 2030, skalabilitas cloud-native, dan kapabilitas SNAP BI yang hanya bisa dipenuhi secara native oleh WAY4."
      }
    },
    {
      id: 4,
      title: "Tier 1: Dewan Direksi, CTO & Komite Keputusan FSI",
      subtitle: "Akses C-Level Ring-2 & Pemodelan Finansial TCO 5-Tahun",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan taktik spesifik menembus dewan direksi, membangun business case komparatif, dan mengeliminasi ketakutan dewan direksi atas risiko kegagalan proyek perbankan.",
        talkingPoints: [
          "Pada Tier 1, fokus saya adalah Dewan Direksi: Direktur IT/CTO, Direktur Bisnis Ritel, dan Direktur Kepatuhan.",
          "Saya menembus pintu direksi dalam waktu kurang dari 14 hari melalui warm network ring kedua tanpa cold calling.",
          "Bahasa yang saya bawa adalah bahasa finansial dan strategi: pemodelan 5-Year TCO dengan efisiensi lisensi hingga 35%, serta jaminan zero downtime lewat strategi koeksistensi paralel Dual Engine.",
          "Tujuannya adalah mengamankan sponsorship mandat strategis dewan direksi sebelum tender resmi dimulai."
        ],
        potentialQuestions: [
          "Apa kekhawatiran terbesar direksi bank ketika diajak berbicara penggantian core switch lama?",
          "Bagaimana membuktikan klaim penghematan TCO 35% di hadapan Direktur Keuangan?"
        ],
        suggestedAnswer: "Kekhawatiran terbesar direksi adalah risiko downtime transaksi nasional dan sanksi regulator. Kami menepisnya dengan membuktikan model koeksistensi paralel di mana sistem legacy tetap aktif sebagai fallback, sementara simulasi TCO dihitung berbasis pengurangan biaya lisensi per-core dan penghematan server on-premise."
      }
    },
    {
      id: 5,
      title: "Tier 2: Arsitektur Enterprise, VP Operasional & Tim Evaluasi",
      subtitle: "Lokakarya Arsitektur Teknis, Benchmark TPS & Validasi PoC",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan cara merangkul evaluator teknis dan arsitek bank agar menjadi pendukung setia (Internal Champions) dari solusi WAY4.",
        talkingPoints: [
          "Pada Tier 2, saya berhadapan langsung dengan VP Enterprise Architecture, Head of Cards, dan VP IT Operations.",
          "Mereka adalah evaluator teknis yang sangat skeptis terhadap janji pemasaran. Pendekatan saya adalah deep technical discovery workshop untuk membedah beban sistem legacy mereka.",
          "Kami buktikan kapabilitas WAY4 lewat uji beban nyata 10.000+ TPS dengan latensi sub-detik, serta kepatuhan native standar Bank Indonesia SNAP BI.",
          "Dengan memecahkan masalah arsitektur mereka, evaluator teknis ini bertransformasi menjadi Internal Champions yang memperjuangkan WAY4 di dalam komite evaluasi tender."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan arsitek bank yang sudah terbiasa dengan sistem ACI atau Fiserv selama puluhan tahun?",
          "Apakah WAY4 dapat membuktikan kepatuhan SNAP BI tanpa modul tambahan?"
        ],
        suggestedAnswer: "Arsitek bank sering kali frustrasi karena sistem lama lambat untuk merilis produk baru (butuh 6-9 bulan). Kami memperlihatkan konfigurasi produk baru di WAY4 yang tuntas dalam beberapa hari tanpa koding kustom, didukung gateway SNAP BI bawaan yang 100% tersertifikasi Bank Indonesia."
      }
    },
    {
      id: 6,
      title: "Tier 3: Komite Pengadaan, Divisi Legal & Tata Kelola Tender",
      subtitle: "Pre-RFP Shaping Kriteria, Integritas Audit 100% & Skema Lisensi Fleksibel",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menegaskan komitmen tata kelola pengadaan bersih, kepatuhan audit formal, dan fleksibilitas kontrak komersial yang aman dari sengketa.",
        talkingPoints: [
          "Di Tier 3, gerbang penentu formal ada di tangan Komite Pengadaan, Divisi Legal, dan Vendor Risk Management (VRM).",
          "Kunci sukses saya adalah Pre-RFP Shaping yang beretika: mempengaruhi dokumen persyaratan tender 3 hingga 6 bulan sebelum rilis resmi agar kriteria standar selaras dengan keunggulan WAY4.",
          "Saya memiliki rekam jejak integritas pengadaan yang bersih, setara dengan standar ketat LKPP dan BUMN perbankan (100% auditable, zero dispute).",
          "Kami juga menawarkan fleksibilitas kontrak komersial: opsi Capex perpetual, Opex langganan, hingga revenue-sharing transaksi untuk mempermudah persetujuan legal dan pengadaan."
        ],
        potentialQuestions: [
          "Bagaimana Anda memastikan proses Pre-RFP shaping tidak melanggar ketentuan anti-monopoli atau kode etik bank?",
          "Apakah OpenWay fleksibel terhadap skema penagihan berbasis performa?"
        ],
        suggestedAnswer: "Pre-RFP shaping kami berfokus pada edukasi standar industri terbuka (seperti kepatuhan BSPI 2030 dan arsitektur microservices modern), bukan klausul merek tertutup. Kami menyediakan dossier VRM lengkap dan opsi lisensi berjenjang yang transparan serta bebas audit disclaimer."
      }
    },
    {
      id: 7,
      title: "Strategi Pertumbuhan – Replikasi Keberhasilan & Ekspansi Akun",
      subtitle: "3D Isometric Core Stack Framework & Mesin Pertumbuhan Ganda",
      category: "Strategi Pertumbuhan",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan sinergi sempurna antara keunggulan produk OpenWay dengan kemampuan eksekusi lapangan Harry dalam melipatgandakan pipeline penjualan.",
        talkingPoints: [
          "Kekuatan terbesar saya ada pada aspek eksekusi dan implementasi komersial terstruktur.",
          "Seperti yang kita lihat pada diagram isometrik 3D core stack ini, saya mengintegrasikan seluruh elemen pertumbuhan secara visual.",
          "Strategi saya berbasis Success Replication dan Account Expansion.",
          "Di lapisan tengah (Layer 2), saya membedah cetak biru kesuksesan OpenWay di akun besar seperti BRI, Finnet, dan ASBANDA untuk direplikasi ke bank-bank komersial menengah di lapisan atas (Layer 3).",
          "Sekaligus, saya mengidentifikasi kebutuhan tersembunyi dari klien eksisting untuk cross-selling modul WAY4 baru seperti Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway."
        ],
        potentialQuestions: [
          "Modul apa dari WAY4 yang paling mudah diekspansi ke akun existing saat ini?"
        ],
        suggestedAnswer: "Modul Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway yang sangat dibutuhkan bank untuk integrasi instan dengan merchant dan fintech unicorn tanpa harus merombak core lama mereka."
      }
    },
    {
      id: 8,
      title: "Rencana Aksi Eksekusi 30-60-90 Hari Terukur",
      subtitle: "Milestone Terstruktur & Akselerasi Pipeline Penjualan",
      category: "Rencana Eksekusi",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan komitmen nyata yang terukur pada 90 hari pertama Harry menjabat untuk membuktikan kecepatan eksekusi dan kontribusi langsung.",
        talkingPoints: [
          "Di slide ini, saya menjabarkan rencana aksi 30-60-90 hari yang sangat terstruktur dan terukur.",
          "Hari 1-30: Fokus pada penyerapan internal blueprint WAY4, membangun hubungan hangat dengan klien eksisting (farming), serta merumuskan pemodelan 5-Year TCO.",
          "Hari 31-60: Mulai bergerak ke luar. Memetakan C-Level target bank menengah melalui ring-2, serta membuka minimal 2 discovery meeting baru membawa proposisi Dual Engine.",
          "Hari 61-90: Mengakselerasi peluang menjadi pipeline terkualifikasi, mendorong proof-of-concept, dan berkomitmen membangun pipeline penjualan tahunan senilai puluhan miliar rupiah yang siap diaudit."
        ],
        potentialQuestions: [
          "Apa output konkret yang bisa dievaluasi manajemen OpenWay di akhir hari ke-30?"
        ],
        suggestedAnswer: "Minimal 3 Buying Centre Dossier bank target yang lengkap dengan kontak C-Level tervalidasi, 2 proposal discovery Dual Engine yang aktif, dan setidaknya 1 peluang upsell modul tambahan yang teridentifikasi di akun existing."
      }
    },
    {
      id: 9,
      title: "Kesimpulan, Integritas & Tata Kelola Bersih",
      subtitle: "Komitmen Pertumbuhan Berkelanjutan & Eksekusi Tanpa Kompromi",
      category: "Kesimpulan & Tata Kelola",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menutup presentasi dengan kesan integritas moral yang kokoh, kesiapan eksekusi, dan komitmen pengembangan diri yang transparan.",
        talkingPoints: [
          "Sebagai penutup, saya ingin menegaskan kembali 3 komitmen utama saya untuk OpenWay Group.",
          "Pertama, Integritas dan Tata Kelola Pengadaan Bersih 100%. Berbekal pengalaman panjang di sektor enterprise yang setara dengan standar ketat pengadaan pemerintah (LKPP), saya menjamin setiap proses penjualan terbebas dari benturan kepentingan dan patuh hukum.",
          "Kedua, saya siap menjadi bridge cross-functional yang solid antara tim teknis, delivery, dan komersial.",
          "Ketiga, saya berkomitmen pada continuous self-improvement. Saya secara mandiri terus memperdalam sertifikasi domain perbankan dan mengikuti les privat Bahasa Inggris profesional untuk memastikan representasi OpenWay di tingkat regional dan global tetap prima."
        ],
        potentialQuestions: [
          "Bagaimana komitmen Anda dalam meningkatkan kemampuan bahasa Inggris bisnis Anda?"
        ],
        suggestedAnswer: "Saya sangat disiplin dalam perbaikan diri. Saya secara proaktif mengambil les privat bahasa Inggris bisnis intensif dengan fokus presentasi komersial enterprise untuk memastikan komunikasi di tingkat regional berjalan mulus."
      }
    },
    {
      id: 10,
      title: "Lampiran Taktis: Battlecard Kompetitif & Strategi",
      subtitle: "Diferensiasi Platform WAY4 vs Sistem Warisan Legacy",
      category: "Lampiran Taktis",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menyediakan senjata argumen pamungkas bagi Harry dalam menjawab keraguan bank mengenai risiko migrasi dan komparasi langsung dengan kompetitor.",
        talkingPoints: [
          "Slide lampiran ini saya siapkan sebagai Competitive Battlecard taktis dalam menghadapi pertanyaan kritis dewan direksi.",
          "Jika bank mengeluhkan mahalnya lisensi Capex di awal, saya menawarkan fleksibilitas model komersial (Opex bertahap atau fee berbasis transaksi).",
          "Jika mereka takut risiko migrasi dari ACI atau Fiserv, saya presentasikan strategi Dual Engine: sistem lama tetap berjalan paralel, sementara produk digital baru dialihkan ke WAY4 secara bertahap.",
          "Dengan arsitektur cloud-native dan modularitas WAY4, kita memposisikan OpenWay bukan sekadar vendor software, melainkan mitra transformasi strategis jangka panjang."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan bank bahwa migrasi paralel Dual Engine tidak membebani tim operasional mereka dua kali lipat?"
        ],
        suggestedAnswer: "Dengan gateway integrasi SNAP BI otomatis dari WAY4, sinkronisasi data antar sistem terjadi di background tanpa perlu intervensi manual dari tim operasional bank, sehingga beban kerja harian tetap normal."
      }
    }
  ],
  EN: [
    {
      id: 1,
      title: "Executive Profile & Professional Background",
      subtitle: "Harry M. Gultom – Senior Business Development Executive Candidate",
      category: "Profile & Value Proposition",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Establish an immediate, highly credible executive impression regarding 16 years of enterprise B2B IT sales experience and deep mastery of the banking ecosystem.",
        talkingPoints: [
          "Good morning. I am Harry, bringing 16 years of dedicated experience across enterprise IT and B2B technology sales.",
          "While I have not personally served as an exclusive dedicated single-contributor account rep for major banks, my career has been deeply intertwined with the banking and enterprise FSI sector.",
          "I have extensive experience leading and managing enterprise sales teams, supporting commercial deals for Tier-1 banks, and navigating complex procurement ecosystems.",
          "I thoroughly understand banking IT architectures, procurement governance, and C-Suite stakeholder dynamics.",
          "My core strength lies in opening high-value enterprise doors and actively nurturing existing client relationships to maintain high retention and uncover new expansion opportunities."
        ],
        potentialQuestions: [
          "How do you position yourself for dedicated banking accounts if you haven't managed bank accounts directly as a single contributor?"
        ],
        suggestedAnswer: "I position myself as a strategic commercial orchestrator. Having led and commercially supported enterprise sales teams for leading banks over 16 years, I master C-Level language, procurement committee dynamics, and technical-to-executive alignment."
      }
    },
    {
      id: 2,
      title: "Market Conditions, Potential & Competitor Positioning",
      subtitle: "Bank Indonesia BSPI 2030 Catalyst & OpenWay Migration Vectors",
      category: "Market Landscape & Competitive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Convince leadership that Harry understands market timing and knows exactly where the greatest enterprise revenue opportunities exist.",
        talkingPoints: [
          "The surge in Indonesian enterprise banking modernization is driven by Bank Indonesia's BSPI 2030 regulatory mandate.",
          "OpenWay's WAY4 platform has established strong dominance in key national institutions such as BRI, Finnet, and ASBANDA/BPDNet.",
          "However, the largest immediate growth frontier lies in mid-tier commercial and regional banks whose legacy monolithic stacks (like ACI or Fiserv) cannot meet modern compliance standards.",
          "Our business development priority is engaging bank executive boards proactively before legacy incumbents lock them into rigid long-term renewals."
        ],
        potentialQuestions: [
          "Why are mid-tier banks hesitant to replace their legacy core systems despite BSPI regulations?"
        ],
        suggestedAnswer: "Their primary anxiety is core transaction downtime and migration failure. We eliminate this fear by introducing our Dual Engine gradual migration model rather than a risky 'big-bang replacement'."
      }
    },
    {
      id: 3,
      title: "Execution Methodology & Strategic FSI Account Mapping",
      subtitle: "Buying Centre Dossier & RFP Tender Winning Formula",
      category: "Methodology & Execution",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Prove a repeatable, rigorous enterprise methodology that does not rely on chance to win multi-million dollar contracts.",
        talkingPoints: [
          "I deploy a structured Strategic FSI Account Mapping methodology and formulate a formal Buying Centre Dossier across 3 distinct tiers.",
          "In enterprise banking, decisions are made by a structured committee: Decision Makers (Tier 1), Key Influencers (Tier 2), and Gatekeepers (Tier 3).",
          "Using my trusted ring-2 professional network, I gather operational intelligence from influencers and leverage that to execute warm introductions directly to IT Directors and C-Suite executives.",
          "This methodology is foundational to our Pre-RFP Shaping tender winning formula."
        ],
        potentialQuestions: [
          "What happens if a bank already has an informal vendor preference before an RFP is issued?"
        ],
        suggestedAnswer: "That is precisely why we execute Pre-RFP Shaping. We inject objective criteria—such as BSPI 2030 compliance, cloud-native scalability, and native SNAP BI interoperability—that only WAY4 natively satisfies."
      }
    },
    {
      id: 4,
      title: "Tier 1: Executive Board, CTO & Bank Decision Committee",
      subtitle: "Ring-2 C-Suite Access & 5-Year Financial TCO Modeling",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate specific tactics for boardroom engagement, comparative financial business cases, and eliminating executive fear of failure.",
        talkingPoints: [
          "On Tier 1, my exclusive focus is the Executive Board: IT Director/CTO, Consumer Banking Director, and Risk Director.",
          "I penetrate boardroom doors in under 14 days via ring-2 warm trusted networks without relying on cold calls.",
          "The language I speak is strategic ROI and risk mitigation: 5-year TCO modeling saving up to 35%, backed by zero-downtime parallel co-existence guarantees.",
          "The objective is locking executive sponsorship before formal tender parameters are published."
        ],
        potentialQuestions: [
          "What is the single biggest fear of bank directors when discussing core switch modernization?",
          "How do you defend a 35% TCO reduction claim in front of a bank CFO?"
        ],
        suggestedAnswer: "Their single biggest fear is core transactional downtime and regulatory penalties. We resolve this by proving parallel co-existence where the legacy switch remains operational, while TCO models reflect reduced per-core licensing and on-premise hardware retirement."
      }
    },
    {
      id: 5,
      title: "Tier 2: Enterprise Architecture, Business VPs & Technical PMO",
      subtitle: "Architecture Discovery Workshops, TPS Benchmarks & PoC Validation",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Showcase how to engage technical evaluators and enterprise architects to turn them into active internal champions for WAY4.",
        talkingPoints: [
          "On Tier 2, I collaborate directly with the VP of Enterprise Architecture, Head of Cards, and VP of IT Operations.",
          "Technical evaluators are naturally skeptical of sales promises. My approach is deep technical discovery workshops unpacking their legacy architecture bottlenecks.",
          "We prove WAY4's technical superiority live through 10,000+ TPS stress test benchmarks with sub-second latency and certified SNAP BI compliance.",
          "By solving their operational pain points, we convert technical architects into vocal internal champions defending WAY4 in committee evaluations."
        ],
        potentialQuestions: [
          "How do you win over bank architects who have operated legacy systems like ACI or Fiserv for decades?",
          "Can WAY4 prove SNAP BI compliance without requiring additional middleware?"
        ],
        suggestedAnswer: "Legacy architects are frequently frustrated by rigid codebases requiring 6-9 months to launch new payment products. We demonstrate WAY4's live product parameterization in days with zero custom code, supported by native Bank Indonesia SNAP BI certification."
      }
    },
    {
      id: 6,
      title: "Tier 3: Procurement Committee, Legal Division & Tender Governance",
      subtitle: "Pre-RFP Criteria Shaping, 100% Audit Integrity & Flexible Commercial Licensing",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Emphasize clean procurement governance, 100% audit integrity, and dispute-free commercial contract flexibility.",
        talkingPoints: [
          "On Tier 3, formal contract authorization lies with the Procurement Committee, Legal Division, and Vendor Risk Management (VRM).",
          "My success driver is ethical Pre-RFP Shaping: influencing requirements 3 to 6 months prior to formal tender publication so specifications align with WAY4's strengths.",
          "I uphold an immaculate enterprise governance track record equivalent to strict SOE and government (LKPP) procurement standards—100% auditable, zero disputes.",
          "We also structure commercial contracts flexibly: Capex perpetual, Opex subscription, or transaction-linked revenue share to streamline legal clearance."
        ],
        potentialQuestions: [
          "How do you ensure Pre-RFP shaping does not violate anti-competition regulations or bank procurement ethics?",
          "Is OpenWay willing to adopt performance-linked commercial structures?"
        ],
        suggestedAnswer: "Our Pre-RFP shaping focuses on open industry standards (such as BSPI 2030 compliance and microservices scalability) rather than proprietary brand lock-in. We deliver complete VRM diligence packages and tiered commercial models with zero audit disclaimer risk."
      }
    },
    {
      id: 7,
      title: "Growth Strategy – Success Replication & Account Expansion",
      subtitle: "3D Isometric Core Stack Framework & Dual-Growth Engine",
      category: "Growth Strategy",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate commercial execution synergy between OpenWay's product capabilities and Harry's field execution in multiplying the sales pipeline.",
        talkingPoints: [
          "My core strength centers on structured commercial execution and systematic expansion.",
          "As shown on this 3D isometric core stack, I visually synchronize every layer of our commercial expansion.",
          "The strategy is anchored on Success Replication and Account Expansion.",
          "In the middle layer (Layer 2), I dissect OpenWay's proven blueprints in Tier-1 banks (BRI, Finnet, ASBANDA) to replicate across mid-tier commercial banks in Layer 3.",
          "Simultaneously, I proactively farm existing accounts to cross-sell high-margin modern modules including Digital Wallet, SoftPOS, and Open-API SNAP BI Gateway."
        ],
        potentialQuestions: [
          "Which WAY4 module offers the fastest expansion path into existing accounts today?"
        ],
        suggestedAnswer: "Digital Wallet, SoftPOS, and Open-API SNAP BI Gateway modules, which banks urgently require to integrate instantly with merchants and fintechs without overhauling core switching systems."
      }
    },
    {
      id: 8,
      title: "Strategic 30-60-90 Day Execution Plan",
      subtitle: "Structured Milestones & Accelerated Sales Pipeline Velocity",
      category: "Execution Plan",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide a tangible, disciplined commercial roadmap for Harry's first 90 days to prove rapid onboarding and immediate pipeline contribution.",
        talkingPoints: [
          "This slide outlines my disciplined, phased 30-60-90 day execution roadmap.",
          "Days 1-30: Focus on absorbing WAY4 blueprints, conducting strategic farming reviews with existing accounts, and formulating comparative 5-year TCO models.",
          "Days 31-60: Transition outward to map target mid-tier C-Levels via warm ring-2 networks, opening at least 2 active Dual Engine discovery meetings.",
          "Days 61-90: Accelerate qualified opportunities, advance proof-of-concept validations, and commit to securing a healthy, audit-ready multi-million dollar annual sales pipeline."
        ],
        potentialQuestions: [
          "What concrete deliverable can OpenWay leadership evaluate at the end of Day 30?"
        ],
        suggestedAnswer: "A minimum of 3 completed target bank Buying Centre Dossiers with validated C-Level contacts, 2 active Dual Engine discovery proposals, and at least 1 qualified add-on module upsell opportunity identified in existing accounts."
      }
    },
    {
      id: 9,
      title: "Conclusion, Integrity & Clean Governance",
      subtitle: "Sustainable Growth Commitment & Uncompromising Execution",
      category: "Conclusion & Governance",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Close with an indelible impression of uncompromising integrity, field readiness, and transparent continuous self-improvement.",
        talkingPoints: [
          "In conclusion, I want to reaffirm my 3 foundational commitments to OpenWay Group.",
          "First, Uncompromising Integrity and 100% Clean Procurement. Backed by extensive experience adhering to the strictest enterprise and public standards (LKPP), I ensure every deal is legally sound, transparent, and audit-proof.",
          "Second, serving as a reliable cross-functional bridge aligning technical architects, delivery teams, and executive clients.",
          "Third, continuous personal development: proactively deepening specialized banking certifications and undertaking professional English tutoring to ensure seamless regional representation."
        ],
        potentialQuestions: [
          "How are you actively developing your business English proficiency?"
        ],
        suggestedAnswer: "I am deeply committed to self-improvement, currently taking intensive private business English tutoring focused on executive commercial presentations to ensure seamless cross-border collaboration across regional leadership."
      }
    },
    {
      id: 10,
      title: "Tactical Appendix: Competitive Battlecard & Strategy",
      subtitle: "WAY4 Platform Differentiation vs Legacy Monolithic Systems",
      category: "Tactical Appendix",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide conclusive battlecard arguments answering critical client hesitations regarding migration risks and competitor comparisons.",
        talkingPoints: [
          "This appendix slide serves as our tactical Competitive Battlecard when addressing tough boardroom inquiries.",
          "If banks cite high upfront Capex constraints, I present our flexible commercial options (phased Opex or transaction-linked licensing).",
          "If they fear migration risks from incumbent monoliths (ACI or Fiserv), I present our Dual Engine strategy: running legacy systems in parallel while migrating agile digital channels first.",
          "With WAY4's cloud-native modularity, OpenWay stands not merely as a software vendor, but as a long-term strategic transformation partner."
        ],
        potentialQuestions: [
          "How do you convince banks that Dual Engine parallel migration won't double their operational workload?"
        ],
        suggestedAnswer: "By utilizing WAY4's automated SNAP BI integration gateway, background data synchronization occurs seamlessly without requiring manual intervention from bank operations teams, preserving normal daily workflows."
      }
    }
  ]
};
`;
fs.writeFileSync(slidesDataPath, newSlidesData, 'utf8');
console.log('slidesData.ts updated with all 10 slides.');

// -------------------------------------------------------------
// 5. Update App.tsx for 10 Slides
// -------------------------------------------------------------
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Replace imports
const newImports = `import Slide01 from './slide/01';
import Slide02 from './slide/02';
import Slide03 from './slide/03';
import Slide04 from './slide/04';
import Slide05 from './slide/05';
import Slide06 from './slide/06';
import Slide07 from './slide/07';
import Slide08 from './slide/08';
import Slide09 from './slide/09';
import Slide10 from './slide/10';`;

appContent = appContent.replace(
  /import Slide01[\s\S]*?import Slide07 from '\.\/slide\/07';/,
  newImports
);

// Replace renderSlideContent switch cases
const newSwitch = `    switch (currentSlideIndex) {
      case 0:
        return <Slide01 language={language} />;
      case 1:
        return <Slide02 language={language} />;
      case 2:
        return <Slide03 language={language} />;
      case 3:
        return <Slide04 language={language} />;
      case 4:
        return <Slide05 language={language} />;
      case 5:
        return <Slide06 language={language} />;
      case 6:
        return <Slide07 language={language} />;
      case 7:
        return <Slide08 language={language} />;
      case 8:
        return <Slide09 language={language} />;
      case 9:
        return <Slide10 language={language} />;
      default:
        return <Slide01 language={language} />;
    }`;

appContent = appContent.replace(
  /switch \(currentSlideIndex\) \{[\s\S]*?default:[\s\S]*?return <Slide01 language=\{language\} \/>;\s*\}/,
  newSwitch
);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('App.tsx updated with all 10 slides.');

console.log('=== All 10 slides and App.tsx successfully generated! ===');
