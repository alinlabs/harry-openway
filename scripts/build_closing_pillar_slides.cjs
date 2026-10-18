const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const SLIDE_DIR = path.join(SRC_DIR, 'slide');

console.log('=== [EXECUTE-PROMPT.md] Starting Closing Pillar Slides 16, 17, 18 Generator & 19-Slide Architecture ===');

// Helper to convert hex to Lottie rgba [r, g, b, 1]
function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [parseFloat(r.toFixed(3)), parseFloat(g.toFixed(3)), parseFloat(b.toFixed(3)), alpha];
}

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

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function removeDirRecursive(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

// -------------------------------------------------------------
// STEP 1: SHIFT EXISTING SLIDE 16 -> 19 (BATTLECARD)
// -------------------------------------------------------------
console.log('==> Step 1: Shifting Slide 16 -> 19 (Battlecard)...');

const dir16 = path.join(SLIDE_DIR, '16');
const dir19 = path.join(SLIDE_DIR, '19');
if (fs.existsSync(dir16)) {
  removeDirRecursive(dir19);
  copyDirRecursive(dir16, dir19);
  // Update internal names in 19
  const d19Path = path.join(dir19, 'data.ts');
  if (fs.existsSync(d19Path)) {
    let c = fs.readFileSync(d19Path, 'utf8');
    c = c.replace(/SLIDE16_DATA/g, 'SLIDE19_DATA');
    fs.writeFileSync(d19Path, c, 'utf8');
  }
  const c19Path = path.join(dir19, 'container.tsx');
  if (fs.existsSync(c19Path)) {
    let c = fs.readFileSync(c19Path, 'utf8');
    c = c.replace(/SLIDE16_DATA/g, 'SLIDE19_DATA');
    c = c.replace(/Slide16Controller/g, 'Slide19Controller');
    c = c.replace(/useSlide16Container/g, 'useSlide19Container');
    fs.writeFileSync(c19Path, c, 'utf8');
  }
  const i19Path = path.join(dir19, 'index.tsx');
  if (fs.existsSync(i19Path)) {
    let c = fs.readFileSync(i19Path, 'utf8');
    c = c.replace(/useSlide16Container/g, 'useSlide19Container');
    c = c.replace(/Slide16Props/g, 'Slide19Props');
    c = c.replace(/Slide16/g, 'Slide19');
    fs.writeFileSync(i19Path, c, 'utf8');
  }
  console.log('[OK] Shifted 16 -> 19 (Battlecard)');
}

// Clear dir16, prepare dir16, dir17, dir18
removeDirRecursive(dir16);
const dir17 = path.join(SLIDE_DIR, '17');
const dir18 = path.join(SLIDE_DIR, '18');
removeDirRecursive(dir17);
removeDirRecursive(dir18);

fs.mkdirSync(dir16, { recursive: true });
fs.mkdirSync(dir17, { recursive: true });
fs.mkdirSync(dir18, { recursive: true });

// -------------------------------------------------------------
// STEP 2: BUILD SLIDE 16 - PILAR 1 DEEP DIVE (TATA KELOLA PENGADAAN BERSIH)
// -------------------------------------------------------------
console.log('==> Step 2: Creating Slide 16 (Pilar 1 Deep Dive - Clean Procurement Governance)...');

const s16Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE16_DATA: Record<Language, {
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
      category: "Komitmen Integritas Deep Dive",
      catalyst: "Pilar 1: Tata Kelola Pengadaan Bersih",
      title: "Pilar 1: Integritas Pengadaan Bersih & Bebas Sengketa Audit"
    },
    descriptionTitle: "Standar Tata Kelola Setara LKPP/BUMN, Nol Benturan Kepentingan & Transparansi 100%",
    descriptionText: "Membawa reputasi integritas tanpa kompromi selama 16 tahun di industri IT perbankan dan enterprise. Menjamin setiap proses penjualan mulai dari Pre-RFP, penyusunan TOR, hingga kontrak final memenuhi standar tata kelola tertinggi setara BUMN dan LKPP, bebas dari sengketa hukum atau catatan disclaimer audit.",
    cardsTitle: "Inisiatif & Pilar Pengadaan Bersih Terverifikasi",
    cardsBadge: "Tata Kelola Bersih",
    cards: [
      {
        id: "p1_lkpp",
        code: "#01",
        title: "Standar Pengadaan Terbuka Setara LKPP/BUMN",
        badgeLabel: "Standar LKPP",
        mandate: "Kepatuhan mutlak terhadap prinsip pengadaan: efisien, efektif, transparan, terbuka, bersaing, adil, dan akuntabel",
        deliverable: "Berkas administrasi tender lengkap, dokumen pemenuhan kualifikasi vendor, dan rekam jejak bebas blacklist",
        riskMitigation: "Mengeliminasi potensi pembatalan tender atau sanggahan dari peserta lelang kompetitor"
      },
      {
        id: "p1_integrity",
        code: "#02",
        title: "Pakta Integritas & Anti-Benturan Kepentingan",
        badgeLabel: "Pakta Integritas",
        mandate: "Menandatangani dan mematuhi pakta integritas resmi perbankan, bebas dari segala bentuk gratifikasi atau kickback",
        deliverable: "Dokumen deklarasi transparansi komersial dan penegakan kode etik bisnis OpenWay di meja klien",
        riskMitigation: "Melindungi brand OpenWay dan jajaran direksi dari risiko hukum, reputasi, dan kepatuhan"
      },
      {
        id: "p1_audit",
        code: "#03",
        title: "Dokumen Audit-Ready 100% & Kepatuhan Statutory",
        badgeLabel: "Audit-Ready",
        mandate: "Penyusunan dokumentasi komersial yang rapi dan transparan untuk audit internal bank, OJK, dan auditor independen",
        deliverable: "Dossier arsip kontrak terpadu dengan logging proses tender yang jelas dan akuntabel",
        riskMitigation: "Mencegah temuan audit pasca-implementasi dan sanksi administratif regulator"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Keandalan Tata Kelola",
      tcoTitle: "Rekam Jejak Kepatuhan",
      tcoValue: "100% Bersih",
      tcoSub: "16 tahun reputasi bebas sengketa hukum",
      speedTitle: "Standar Pengadaan",
      speedValue: "Setara LKPP",
      speedSub: "Kepatuhan tata kelola BUMN & FSI ketat",
      mandateTitle: "Catatan Audit Eksternal",
      mandateValue: "Nol Temuan",
      mandateSub: "Audit-ready internal bank & regulator"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Reputasi Etika 16 Tahun",
        subtitle: "Kredibilitas tak bercela di ekosistem perbankan dan enterprise",
        metric: "16+ Tahun",
        tag: "Integritas",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Transparansi Komersial",
        subtitle: "Skema harga dan delivery yang jelas tanpa biaya tersembunyi",
        metric: "Transparan",
        tag: "Tata Kelola",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Mitigasi Sengketa Tender",
        subtitle: "Prosedur lelang patuh hukum mencegah gugatan atau sanggahan lelang",
        metric: "Zero Dispute",
        tag: "Hukum",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Proteksi Brand OpenWay",
        subtitle: "Menjaga marwah dan reputasi global platform WAY4 di Indonesia",
        metric: "Brand Shield",
        tag: "Kepatuhan",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pilar 1 memberikan garansi mutlak bagi manajemen OpenWay bahwa pertumbuhan penjualan dicapai dengan cara-cara bermartabat, legal, dan aman jangka panjang.",
      target: "100% Audit-Ready · Nol Sengketa Hukum"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 1: Clean Procurement Governance",
      title: "Pillar 1: Clean Procurement Integrity & Zero Audit Dispute"
    },
    descriptionTitle: "LKPP/SOE Equivalent Governance Benchmarks, Zero Conflict of Interest & 100% Transparency",
    descriptionText: "Upholding an uncompromised 16-year reputation of commercial integrity across enterprise and banking sectors. Ensuring every deal stage from Pre-RFP shaping and TOR draft to final contract adheres to strict state-owned enterprise (BUMN) and LKPP benchmarks, completely free from legal disputes or audit findings.",
    cardsTitle: "Key Verified Clean Procurement Initiatives",
    cardsBadge: "Clean Governance",
    cards: [
      {
        id: "p1_lkpp",
        code: "#01",
        title: "Open Tender Benchmarks Equivalent to LKPP/SOE",
        badgeLabel: "LKPP Standard",
        mandate: "Strict compliance with procurement principles: efficiency, transparency, open competition, fairness, and accountability",
        deliverable: "Complete tender qualification dossiers, verified certifications, and unblemished vendor track records",
        riskMitigation: "Eliminating tender disqualification risks or post-award competitor disputes"
      },
      {
        id: "p1_integrity",
        code: "#02",
        title: "Integrity Pacts & Anti-Conflict of Interest",
        badgeLabel: "Integrity Pact",
        mandate: "Signing formal institutional integrity pacts, strictly barring any form of kickbacks or gratuity",
        deliverable: "Signed commercial transparency declarations enforcing OpenWay's ethical code in client boardrooms",
        riskMitigation: "Shielding OpenWay leadership and brand equity from statutory, legal, and compliance exposures"
      },
      {
        id: "p1_audit",
        code: "#03",
        title: "100% Audit-Ready Commercial Dossiers",
        badgeLabel: "Audit-Ready",
        mandate: "Meticulous documentation prepared for internal bank audits, Central Bank reviews, and independent statutory audits",
        deliverable: "Comprehensive contract archives with traceable and accountable procurement evaluation trails",
        riskMitigation: "Preventing post-implementation audit findings, audit disclaimers, or regulatory penalties"
      }
    ],
    metrics: {
      advantageTitle: "Governance Reliability Parameters",
      tcoTitle: "Compliance Track Record",
      tcoValue: "100% Clean",
      tcoSub: "16-year dispute-free legal reputation",
      speedTitle: "Procurement Benchmark",
      speedValue: "LKPP Equivalent",
      speedSub: "Strict SOE & banking oversight compliance",
      mandateTitle: "External Audit Notes",
      mandateValue: "Zero Findings",
      mandateSub: "Audit-ready for banks & regulators"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "16-Year Ethical Track Record",
        subtitle: "Unblemished professional credibility across banking and enterprise sectors",
        metric: "16+ Years",
        tag: "Integrity",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Commercial Transparency",
        subtitle: "Clear pricing structures and transparent delivery commitments with zero hidden fees",
        metric: "Transparent",
        tag: "Governance",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Tender Dispute Mitigation",
        subtitle: "Lawfully grounded tender procedures preventing vendor protests or legal challenges",
        metric: "Zero Dispute",
        tag: "Legal",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "OpenWay Brand Protection",
        subtitle: "Safeguarding OpenWay's global market prestige and Tier-1 leadership in Indonesia",
        metric: "Brand Shield",
        tag: "Compliance",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pillar 1 guarantees OpenWay executive leadership that commercial growth is won with honor, lawful rigor, and long-term security.",
      target: "100% Audit-Ready · Zero Legal Disputes"
    }
  }
};
`;

const s16Lottie = makeBaseLottie("Pillar 1 Clean Governance Lottie", [
  makeRectLayer(1, "Base Platform Slabs Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Pillar 1 Integrity Green Slab", 280, 50, 250, 220, "#e6f4ea", "#34a853", 3),
  makeRectLayer(3, "Audit-Ready Shield Bar", 200, 28, 250, 210, "#ffffff", "#34a853", 2),
  makeCircleLayer(4, "Center Integrity Shield Node", 56, 250, 120, "#34a853", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "LKPP Compliance Left Node", 32, 140, 130, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(6, "Anti-Conflict Right Node", 32, 360, 130, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "Zero Dispute Audit Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s16Visual = `import React from 'react';
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

const s16Container = `import { useState } from 'react';
import { SLIDE16_DATA, Language } from './data';

export const useSlide16Container = (language: Language = 'IN') => {
  const data = SLIDE16_DATA[language] || SLIDE16_DATA.IN;
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

const s16Index = `import React from 'react';
import { useSlide16Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Shield } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide16Props {
  language?: Language;
}

export const Slide16: React.FC<Slide16Props> = ({ language = 'IN' }) => {
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
  } = useSlide16Container(language);

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
        {/* Left Column: Context & Pillar 1 Cards */}
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
                <Shield className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-emerald-50 text-emerald-700 border border-emerald-100/60',
                'bg-blue-50 text-blue-700 border border-blue-100/60',
                'bg-amber-50 text-amber-700 border border-amber-100/60'
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
                <div className="text-2xl font-black text-emerald-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium">
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
              <span className="text-[10px] font-mono font-bold text-emerald-700">
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

export default Slide16;
`;

fs.writeFileSync(path.join(dir16, 'data.ts'), s16Data, 'utf8');
fs.writeFileSync(path.join(dir16, 'lottie.json'), JSON.stringify(s16Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir16, 'visual-3D.tsx'), s16Visual, 'utf8');
fs.writeFileSync(path.join(dir16, 'container.tsx'), s16Container, 'utf8');
fs.writeFileSync(path.join(dir16, 'index.tsx'), s16Index, 'utf8');
console.log('[OK] Created Slide 16');

// -------------------------------------------------------------
// STEP 3: BUILD SLIDE 17 - PILAR 2 DEEP DIVE (ORKESTRASI PEMANGKU KEPENTINGAN)
// -------------------------------------------------------------
console.log('==> Step 3: Creating Slide 17 (Pilar 2 Deep Dive - Stakeholder Orchestration)...');

const s17Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE17_DATA: Record<Language, {
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
      category: "Komitmen Integritas Deep Dive",
      catalyst: "Pilar 2: Orkestrasi Pemangku Kepentingan",
      title: "Pilar 2: Orkestrasi Pemangku Kepentingan & Sinergi Lintas Fungsi"
    },
    descriptionTitle: "Menjembatani C-Level, Divisi Legal, Komite Pengadaan & Tim Teknis OpenWay",
    descriptionText: "Penjualan solusi perbankan bernilai tinggi bukan sekadar aktivitas individu, melainkan orkestrasi simfoni yang rumit. Berperan sebagai konduktor komersial yang menyelaraskan visi C-Suite, mitigasi risiko Legal/Compliance, kepatuhan komite pengadaan, dan kapabilitas tim Pre-Sales/Delivery OpenWay menuju satu konsensus kesepakatan.",
    cardsTitle: "Inisiatif & Fasilitasi Lintas Fungsi Utama",
    cardsBadge: "Orkestrator",
    cards: [
      {
        id: "p2_csuite",
        code: "#01",
        title: "Penyelarasan Bahasa C-Suite dengan Tim Pre-Sales Teknis",
        badgeLabel: "Executive Bridge",
        mandate: "Menerjemahkan visi strategis direksi ke dalam arsitektur teknis konkret yang disiapkan tim solusi WAY4",
        deliverable: "Executive summary komparatif dan deck presentasi yang fokus pada dampak bisnis serta ROI terukur",
        riskMitigation: "Mencegah presentasi teknis yang membingungkan atau gagal memikat perhatian pengambil keputusan C-Level"
      },
      {
        id: "p2_legal",
        code: "#02",
        title: "Negosiasi Kontrak & Manajemen Risiko Bersama Divisi Legal",
        badgeLabel: "Legal Harmony",
        mandate: "Mengurai hambatan klausul SLA, liabilitas, kedaulatan data, dan perlindungan IP bersama legal bank",
        deliverable: "Draft kontrak berimbang yang dapat diterima kedua belah pihak tanpa menunda jadwal penandatanganan",
        riskMitigation: "Mencegah kebuntuan negosiasi klausul hukum yang kerap menunda kesepakatan di menit-menit akhir"
      },
      {
        id: "p2_procure",
        code: "#03",
        title: "Fasilitasi Harmonis dengan Komite Pengadaan (Procurement)",
        badgeLabel: "Procurement Sync",
        mandate: "Memastikan seluruh persyaratan komersial, garansi bank, dan skema penagihan sesuai regulasi internal perbankan",
        deliverable: "Proposal komersial transparan dengan simulasi pentahapan pembayaran sesuai milestone proyek",
        riskMitigation: "Mempercepat penerbitan Purchase Order (PO) dan menghindari dispute penagihan pasca go-live"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Keberhasilan Orkestrasi",
      tcoTitle: "Tingkat Konsensus Deal",
      tcoValue: "100% Selaras",
      tcoSub: "Bisnis, Legal, Pengadaan & Teknis",
      speedTitle: "Efisiensi Siklus Negosiasi",
      speedValue: "-40% Waktu",
      speedSub: "Mereduksi friksi birokrasi legal",
      mandateTitle: "Sinergi Pre-Sales",
      mandateValue: "Harmonis",
      mandateSub: "Dukungan penuh tim solusi OpenWay"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Bahasa Komersial C-Level",
        subtitle: "Mampu menyajikan kalkulasi finansial di meja Direktur Utama & CFO",
        metric: "Bahasa C-Level",
        tag: "Komunikasi",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Penyelarasan Pre-Sales",
        subtitle: "Menjadikan tim teknis pahlawan solusi di hadapan arsitek bank",
        metric: "Sinergi Erat",
        tag: "Solusi",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Harmonisasi Legal",
        subtitle: "Mengurai bahasa hukum tanpa mengorbankan keamanan kontrak OpenWay",
        metric: "Win-Win",
        tag: "Legal",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Mitigasi Friksi Pengadaan",
        subtitle: "Memastikan PO diterbitkan tepat waktu sesuai target kuartal",
        metric: "Fast Track",
        tag: "Eksekusi",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pilar 2 menjamin bahwa seluruh kesepakatan bernilai puluhan miliar rupiah dieksekusi dengan orkestrasi yang matang, menyatukan seluruh pihak tanpa friksi.",
      target: "100% Ekosistem Selaras · Siklus Negosiasi Cepat"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 2: Stakeholder Orchestration",
      title: "Pillar 2: Stakeholder Orchestration & Cross-Functional Synergy"
    },
    descriptionTitle: "Uniting C-Level, Legal Divisions, Procurement & OpenWay Technical Teams",
    descriptionText: "High-value banking enterprise sales is never a lone-wolf endeavor, but a sophisticated orchestral alignment. Acting as a strategic commercial conductor bridging C-Suite vision, Legal and Compliance risk frameworks, procurement mandates, and OpenWay Pre-Sales and Delivery teams into unified boardroom consensus.",
    cardsTitle: "Key Cross-Functional Orchestration Initiatives",
    cardsBadge: "Orchestrator",
    cards: [
      {
        id: "p2_csuite",
        code: "#01",
        title: "Bridging C-Suite Strategy with Technical Pre-Sales Teams",
        badgeLabel: "Executive Bridge",
        mandate: "Translating boardroom strategic priorities into concrete technical architectures prepared by WAY4 solution leads",
        deliverable: "Executive business summaries and board presentations focused on business impact and verified ROI",
        riskMitigation: "Preventing overly complex technical jargon that fails to captivate C-Suite decision makers"
      },
      {
        id: "p2_legal",
        code: "#02",
        title: "Contract Negotiations & Risk Management with Legal Counsel",
        badgeLabel: "Legal Harmony",
        mandate: "Resolving bottlenecks surrounding SLAs, liabilities, data sovereignty, and IP rights collaboratively",
        deliverable: "Balanced contract frameworks acceptable to both parties without delaying scheduled execution timelines",
        riskMitigation: "Eliminating legal stalemates that frequently jeopardize enterprise deals at the eleventh hour"
      },
      {
        id: "p2_procure",
        code: "#03",
        title: "Seamless Alignment with Bank Procurement Committees",
        badgeLabel: "Procurement Sync",
        mandate: "Ensuring commercial models, bank guarantees, and invoicing milestones strictly align with bank policies",
        deliverable: "Transparent commercial proposals with milestone-driven payment phased schedules",
        riskMitigation: "Accelerating Purchase Order (PO) sign-offs while preventing post-implementation billing disputes"
      }
    ],
    metrics: {
      advantageTitle: "Orchestration Success Benchmarks",
      tcoTitle: "Deal Consensus Rate",
      tcoValue: "100% Aligned",
      tcoSub: "Business, Legal, Procurement & Tech",
      speedTitle: "Negotiation Efficiency",
      speedValue: "-40% Time",
      speedSub: "Compressing legal bureaucratic friction",
      mandateTitle: "Pre-Sales Synergy",
      mandateValue: "Harmonious",
      mandateSub: "Complete OpenWay solution backing"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "C-Level Commercial Fluency",
        subtitle: "Delivering financial ROI models in front of Chief Executive & Financial Officers",
        metric: "C-Level Fluency",
        tag: "Executive",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Pre-Sales Team Synergy",
        subtitle: "Positioning technical engineers as hero solution architects before client banks",
        metric: "Tight Synergy",
        tag: "Solutions",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Legal Risk Harmonization",
        subtitle: "Demystifying contractual terms without compromising OpenWay commercial security",
        metric: "Win-Win",
        tag: "Legal",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Procurement Friction De-Risking",
        subtitle: "Ensuring PO release matches targeted quarterly revenue milestones",
        metric: "Fast Track",
        tag: "Execution",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pillar 2 ensures multi-million dollar deals are executed through mature cross-functional alignment, uniting all stakeholders without friction.",
      target: "100% Ecosystem Consensus · Accelerated Cycle"
    }
  }
};
`;

const s17Lottie = makeBaseLottie("Pillar 2 Stakeholder Orchestration Lottie", [
  makeRectLayer(1, "Base Platform Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Pillar 2 Blue Orchestra Slab", 280, 50, 250, 220, "#e8f0fe", "#1a73e8", 3),
  makeRectLayer(3, "Cross-Functional Sync Bar", 200, 28, 250, 210, "#ffffff", "#1a73e8", 2),
  makeCircleLayer(4, "Center Conductor Hub Node", 56, 250, 120, "#1a73e8", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "C-Suite Bridge Left Node", 32, 140, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(6, "Legal Division Right Node", 32, 360, 130, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "Procurement Committee Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s17Visual = `import React from 'react';
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

const s17Container = `import { useState } from 'react';
import { SLIDE17_DATA, Language } from './data';

export const useSlide17Container = (language: Language = 'IN') => {
  const data = SLIDE17_DATA[language] || SLIDE17_DATA.IN;
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

const s17Index = `import React from 'react';
import { useSlide17Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Users } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide17Props {
  language?: Language;
}

export const Slide17: React.FC<Slide17Props> = ({ language = 'IN' }) => {
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
  } = useSlide17Container(language);

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
        {/* Left Column: Context & Pillar 2 Cards */}
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
                <Users className="w-3 h-3" />
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

export default Slide17;
`;

fs.writeFileSync(path.join(dir17, 'data.ts'), s17Data, 'utf8');
fs.writeFileSync(path.join(dir17, 'lottie.json'), JSON.stringify(s17Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir17, 'visual-3D.tsx'), s17Visual, 'utf8');
fs.writeFileSync(path.join(dir17, 'container.tsx'), s17Container, 'utf8');
fs.writeFileSync(path.join(dir17, 'index.tsx'), s17Index, 'utf8');
console.log('[OK] Created Slide 17');

// -------------------------------------------------------------
// STEP 4: BUILD SLIDE 18 - PILAR 3 DEEP DIVE (PENGEMBANGAN DIRI BERKELANJUTAN & BAHASA INGGRIS GLOBAL)
// -------------------------------------------------------------
console.log('==> Step 4: Creating Slide 18 (Pilar 3 Deep Dive - Continuous Growth & Global English Fluency)...');

const s18Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE18_DATA: Record<Language, {
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
      category: "Komitmen Integritas Deep Dive",
      catalyst: "Pilar 3: Pengembangan Diri Berkelanjutan",
      title: "Pilar 3: Pengembangan Diri Berkelanjutan & Kemampuan Bahasa Global"
    },
    descriptionTitle: "Les Privat Bahasa Inggris Bisnis Intensif, Penguasaan Domain & Representasi Regional",
    descriptionText: "Komitmen pengembangan diri yang transparan, terukur, dan berkelanjutan. Secara proaktif mengikuti les privat Bahasa Inggris bisnis intensif bersama tutor profesional untuk memastikan komunikasi tingkat regional OpenWay berjalan prima, sekaligus mendalami sertifikasi sistem pembayaran digital guna menghadirkan wawasan terdepan bagi klien perbankan.",
    cardsTitle: "Inisiatif Pengembangan Diri & Representasi Global",
    cardsBadge: "Perbaikan Diri",
    cards: [
      {
        id: "p3_english",
        code: "#01",
        title: "Kursus Privat Intensif Business English Enterprise",
        badgeLabel: "Bahasa Global",
        mandate: "Les privat intensif bersama tutor profesional berfokus pada presentasi komersial dan negosiasi C-Level",
        deliverable: "Kemampuan artikulasi strategi, pitching proposal, dan partisipasi aktif dalam dewan regional OpenWay",
        riskMitigation: "Menghilangkan hambatan komunikasi saat berkolaborasi dengan jajaran manajemen internasional OpenWay"
      },
      {
        id: "p3_domain",
        code: "#02",
        title: "Pendalaman Domain Pengetahuan Sistem Pembayaran (FSI)",
        badgeLabel: "Domain Perbankan",
        mandate: "Mengikuti perkembangan standar ISO 20022, regulasi SNAP Bank Indonesia, dan tren SoftPOS/Cloud Switching global",
        deliverable: "Kesiapan sebagai thought leader yang mampu memberikan konsultasi bernilai tambah bagi klien bank",
        riskMitigation: "Mencegah keusangan pengetahuan di tengah disrupsi teknologi pembayaran digital yang cepat"
      },
      {
        id: "p3_apac",
        code: "#03",
        title: "Kesiapan Representasi Regional OpenWay di Asia Pasifik",
        badgeLabel: "Representasi APAC",
        mandate: "Siap mewakili OpenWay dalam forum perbankan internasional, seminar industri fintech, dan sesi evaluasi regional",
        deliverable: "Presentasi komersial berstandar internasional yang mencerminkan martabat dan keunggulan OpenWay",
        riskMitigation: "Menjaga konsistensi citra merek OpenWay sebagai penyedia platform pembayaran nomor satu di dunia"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Pengembangan Diri",
      tcoTitle: "Pelatihan Bahasa Inggris",
      tcoValue: "3x Seminggu",
      tcoSub: "Les privat intensif dengan tutor bisnis",
      speedTitle: "Kesiapan Komunikasi Global",
      speedValue: "Siap Regional",
      speedSub: "Kelancaran rapat dewan & pitching C-Level",
      mandateTitle: "Akreditasi Domain FSI",
      mandateValue: "Continuous",
      mandateSub: "Kepatuhan standar industri pembayaran global"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Disiplin Pembelajaran Mandiri",
        subtitle: "Menginvestasikan waktu dan sumber daya secara independen demi keunggulan peran",
        metric: "Self-Driven",
        tag: "Disiplin",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Kelancaran Rapat Regional",
        subtitle: "Mampu mempresentasikan pipeline Indonesia di hadapan pimpinan global OpenWay",
        metric: "Global Fluency",
        tag: "Bahasa",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Wawasan Industri Terkini",
        subtitle: "Memahami dinamika tren fintech, QRIS cross-border, dan kedaulatan data",
        metric: "Domain Expert",
        tag: "Wawasan",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "Integritas Representasi",
        subtitle: "Menjaga reputasi profesional Harry dan OpenWay di setiap forum publik",
        metric: "Excellence",
        tag: "Representasi",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pilar 3 adalah bukti komitmen kerendahan hati dan kemauan belajar Harry: tidak pernah berpuas diri, melainkan terus berkembang agar selalu siap mewakili OpenWay di kancah regional.",
      target: "Kelancaran Bahasa Inggris Regional · Keunggulan Representasi 100%"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 3: Continuous Professional Growth",
      title: "Pillar 3: Continuous Professional Growth & Global English Fluency"
    },
    descriptionTitle: "Intensive Business English Coaching, Domain Mastery & Regional Representation",
    descriptionText: "A transparent, disciplined, and measurable commitment to continuous self-improvement. Proactively undertaking intensive business English private coaching to ensure flawless regional executive communication across OpenWay global teams, while deepening payment domain knowledge to bring cutting-edge insights to banking clients.",
    cardsTitle: "Key Continuous Growth & Global Representation Initiatives",
    cardsBadge: "Self Improvement",
    cards: [
      {
        id: "p3_english",
        code: "#01",
        title: "Intensive Enterprise Business English Coaching",
        badgeLabel: "Global English",
        mandate: "Private executive coaching 2-3 times per week focused on commercial enterprise pitching and C-Level discussions",
        deliverable: "Confident commercial articulation, seamless proposal pitching, and active participation in OpenWay regional boards",
        riskMitigation: "Eliminating communication friction when collaborating with OpenWay's international executive management"
      },
      {
        id: "p3_domain",
        code: "#02",
        title: "FSI Payment System Domain Mastery",
        badgeLabel: "Banking Domain",
        mandate: "Deepening mastery over ISO 20022 message protocols, SNAP Bank Indonesia mandates, and global SoftPOS architectures",
        deliverable: "Positioning as a trusted consultative thought leader delivering high value-add perspectives to bank clients",
        riskMitigation: "Guarding against knowledge obsolescence amidst rapid payment technology advancements"
      },
      {
        id: "p3_apac",
        code: "#03",
        title: "OpenWay Asia-Pacific Regional Representation Readiness",
        badgeLabel: "APAC Ready",
        mandate: "Representing OpenWay impeccably at international banking conventions, fintech summits, and regional QBRs",
        deliverable: "World-class commercial presentations embodying OpenWay's market stature and technology leadership",
        riskMitigation: "Maintaining brand prestige as the global top-ranked digital payments software provider"
      }
    ],
    metrics: {
      advantageTitle: "Personal Growth Parameters",
      tcoTitle: "English Coaching Rhythm",
      tcoValue: "3x Weekly",
      tcoSub: "Intensive private coaching with business tutor",
      speedTitle: "Global Communication Readiness",
      speedValue: "APAC Ready",
      speedSub: "Boardroom fluency & C-Level pitching",
      mandateTitle: "FSI Domain Accreditation",
      mandateValue: "Continuous",
      mandateSub: "Global payment standards alignment"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Disciplined Self-Driven Learning",
        subtitle: "Proactively investing time and personal resources toward role excellence",
        metric: "Self-Driven",
        tag: "Discipline",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Regional Meeting Fluency",
        subtitle: "Articulating Indonesia commercial pipelines seamlessly before global OpenWay leadership",
        metric: "Global Fluency",
        tag: "English",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Current Industry Insights",
        subtitle: "Mastering fintech trends, cross-border QRIS developments, and data sovereignty",
        metric: "Domain Expert",
        tag: "Insights",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "Representation Integrity",
        subtitle: "Upholding Harry's and OpenWay's professional stature in every public forum",
        metric: "Excellence",
        tag: "Representation",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Pillar 3 demonstrates humility, drive, and continuous growth: never complacent, continually evolving to represent OpenWay regionally with distinction.",
      target: "Regional English Fluency · 100% Representation Stature"
    }
  }
};
`;

const s18Lottie = makeBaseLottie("Pillar 3 Continuous Growth Lottie", [
  makeRectLayer(1, "Base Platform Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Pillar 3 Amber Growth Slab", 280, 50, 250, 220, "#fef7e0", "#fbbc04", 3),
  makeRectLayer(3, "Continuous Growth Trajectory Bar", 200, 28, 250, 210, "#ffffff", "#fbbc04", 2),
  makeCircleLayer(4, "Center Global Representation Hub", 56, 250, 120, "#fbbc04", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "Business English Left Node", 32, 140, 130, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(6, "Payment Domain Right Node", 32, 360, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(7, "APAC Regional Presence Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s18Visual = `import React from 'react';
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

const s18Container = `import { useState } from 'react';
import { SLIDE18_DATA, Language } from './data';

export const useSlide18Container = (language: Language = 'IN') => {
  const data = SLIDE18_DATA[language] || SLIDE18_DATA.IN;
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

const s18Index = `import React from 'react';
import { useSlide18Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide18Props {
  language?: Language;
}

export const Slide18: React.FC<Slide18Props> = ({ language = 'IN' }) => {
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
  } = useSlide18Container(language);

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
        {/* Left Column: Context & Pillar 3 Cards */}
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
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100/60 flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-amber-50 text-amber-700 border border-amber-100/60',
                'bg-blue-50 text-blue-700 border border-blue-100/60',
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
                <div className="text-2xl font-black text-amber-600 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-amber-700 font-medium">
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
              <span className="text-[10px] font-mono font-bold text-amber-600">
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

export default Slide18;
`;

fs.writeFileSync(path.join(dir18, 'data.ts'), s18Data, 'utf8');
fs.writeFileSync(path.join(dir18, 'lottie.json'), JSON.stringify(s18Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir18, 'visual-3D.tsx'), s18Visual, 'utf8');
fs.writeFileSync(path.join(dir18, 'container.tsx'), s18Container, 'utf8');
fs.writeFileSync(path.join(dir18, 'index.tsx'), s18Index, 'utf8');
console.log('[OK] Created Slide 18');

// -------------------------------------------------------------
// STEP 5: UPDATE slidesData.ts WITH 19 SLIDES METADATA
// -------------------------------------------------------------
console.log('==> Step 5: Updating slidesData.ts with all 19 slides metadata & speaker notes...');

const slidesDataContent = `export type Language = 'IN' | 'EN';

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
          "Bagaimana Anda memposisikan diri untuk akun perbankan jika belum memegang akun bank secara langsung sebagai single contributor?"
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
      title: "Layer 3: Peluang Pasar, Kanal Digital & Integrasi Open API",
      subtitle: "Ekspansi Bank Komersial Menengah, Ekosistem Fintech & Modul Bernilai Tinggi",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menjelaskan cara membuka kanal pendapatan baru perbankan secara kilat lewat modul digital modern WAY4 tanpa mengganggu sistem inti.",
        talkingPoints: [
          "Pada Layer 3 (lapisan teratas), fokus saya adalah membuka ceruk pasar baru di bank komersial menengah dan lembaga non-bank fintech.",
          "Bank-bank menengah saat ini terkendala merilis produk baru karena core lama mereka kaku. Melalui WAY4 Digital Modules, kita berikan solusi instan: Open API SNAP BI, Digital Wallet, dan SoftPOS.",
          "Implementasi modul ini dapat go-live dalam waktu kurang dari 3 bulan, memberikan perolehan fee-based income cepat bagi bank.",
          "Khusus SoftPOS, ini adalah diferensiator besar karena bank bisa mengeliminasi biaya capex pengadaan mesin EDC fisik hingga 60%."
        ],
        potentialQuestions: [
          "Apakah integrasi Open API SNAP BI memerlukan lisensi pihak ketiga tambahan?",
          "Seberapa cepat modul SoftPOS dapat diterapkan pada merchant perbankan?"
        ],
        suggestedAnswer: "Modul SNAP BI pada WAY4 sudah native bersertifikasi Bank Indonesia tanpa middleware tambahan. Untuk SoftPOS, integrasi mobile SDK siap pakai dapat diluncurkan ke merchant mitra dalam waktu 6-8 minggu."
      }
    },
    {
      id: 9,
      title: "Layer 2: Cetak Biru Platform Inti WAY4 & Replikasi Tier-1",
      subtitle: "Replikasi Keberhasilan Teruji BRI, Finnet & ASBANDA ke Bank Komersial",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Meyakinkan komite bank bahwa solusi platform inti WAY4 telah teruji di skala nasional tertinggi sehingga bebas dari risiko kegagalan.",
        talkingPoints: [
          "Pada Layer 2 (lapisan tengah), strategi utama saya adalah Replikasi Keberhasilan (Success Replication).",
          "OpenWay memiliki modal kredibilitas tak terbantahkan di Indonesia: memproses transaksi skala raksasa di Bank BRI, Finnet, dan jaringan ASBANDA/BPDNet.",
          "Ketika berbicara dengan bank komersial menengah, pesan saya sangat tegas: Anda tidak perlu bereksperimen atau menjadi kelinci percobaan teknologi baru. Solusi WAY4 sudah teruji menahan 10.000+ TPS saat puncak transaksi nasional.",
          "Dengan arsitektur Dual Engine, kami menjamin migrasi bertahap tanpa sedetik pun downtime atau risiko cutover fatal."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan bank bahwa implementasi WAY4 tidak akan menguras resource internal mereka?",
          "Apakah blueprint BRI bisa langsung diterapkan ke bank dengan skala aset lebih kecil?"
        ],
        suggestedAnswer: "Cetak biru Tier-1 OpenWay bersifat modular. Kami menyederhanakan konfigurasi untuk bank menengah menggunakan template best-practice yang sudah jadi, sehingga waktu implementasi terpangkas separuh dibanding proyek konvensional."
      }
    },
    {
      id: 10,
      title: "Layer 1: Fondasi Kepatuhan Regulasi & Standar BSPI 2030",
      subtitle: "Mandat Bank Indonesia, Kedaulatan Data & Standar Kepatuhan Tertinggi",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan rasa aman mutlak bagi Dewan Komisaris, Direktur Kepatuhan, dan Auditor bahwa transformasi perbankan ini 100% taat asas dan berintegritas tinggi.",
        talkingPoints: [
          "Pada Layer 1 (lapisan fondasi), kita menyentuh pilar terpenting dalam industri perbankan: Kepatuhan Regulasi dan Tata Kelola Bersih.",
          "Seluruh arsitektur WAY4 selaras secara native dengan Blueprint Sistem Pembayaran Indonesia (BSPI 2030) dari Bank Indonesia, standar ISO 20022, serta sertifikasi PCI-DSS Level 1.",
          "Kedaulatan data finansial nasabah dijamin penuh baik dengan deployment on-premise maupun sovereign cloud di Indonesia.",
          "Dari sisi personal, saya menggaransi proses pengadaan dengan integritas 100%, bebas benturan kepentingan, setara dengan standar ketat pengadaan BUMN dan LKPP."
        ],
        potentialQuestions: [
          "Bagaimana kesiapan WAY4 menghadapi pembaruan regulasi Bank Indonesia di masa mendatang?",
          "Apakah OpenWay bersedia menandatangani pakta integritas dan Service Level Agreement kepatuhan?"
        ],
        suggestedAnswer: "Arsitektur WAY4 berbasis microservices yang fleksibel, sehingga adaptasi terhadap regulasi baru hanya memerlukan update modul konfigurasi tanpa merombak sistem dasar. Kami selalu siap menandatangani SLA kepatuhan dan pakta integritas resmi."
      }
    },
    {
      id: 11,
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
      id: 12,
      title: "Hari 1 - 30: Penyerapan Internal, Audit Akun & Pemodelan TCO",
      subtitle: "Penguasaan Arsitektur WAY4, Hubungan Klien Eksisting & Kalkulasi Finansial ROI",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan kedisiplinan eksekusi pada 30 hari pertama: menyerap kapabilitas teknis produk WAY4, mengamankan retensi klien eksisting, dan memvalidasi alat tempur komersial.",
        talkingPoints: [
          "Bulan pertama adalah periode penguncian fondasi internal. Saya tidak membuang waktu dengan ramp-up pasif.",
          "Saya bekerja erat dengan tim Pre-Sales untuk menguasai arsitektur produksi WAY4 yang telah berjalan di BRI, Finnet, dan ASBANDA.",
          "Secara paralel, saya melakukan audit relasi dan kunjungan silaturahmi formal ke klien eksisting guna memastikan zero churn dan membuka percakapan add-on modul.",
          "Saya juga merumuskan spreadsheet pemodelan 5-Year TCO yang menjadi senjata wajib saat berhadapan dengan Direktur Keuangan (CFO) bank."
        ],
        potentialQuestions: [
          "Bagaimana Anda membagi waktu antara belajar produk internal dan menemui klien eksisting di bulan pertama?",
          "Apakah pemodelan TCO memperhitungkan biaya migrasi data nasabah?"
        ],
        suggestedAnswer: "Saya mengalokasikan 50% waktu untuk penyerapan produk bersama Pre-Sales dan 50% untuk kunjungan relasi akun eksisting. Pemodelan TCO kami mencakup kalkulasi total komparatif: lisensi, infrastruktur server, dan de-risking biaya migrasi paralel Dual Engine."
      }
    },
    {
      id: 13,
      title: "Hari 31 - 60: Penetrasi Pasar, Pemetaan C-Level & Discovery Meeting",
      subtitle: "Aktivasi Jaringan Ring-2, Akses Pintu Direksi & Presentasi Solusi Dual Engine",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan taktik agresif namun terukur dalam menembus dewan direksi bank target dalam waktu <14 hari menggunakan kekuatan warm network ring-2.",
        talkingPoints: [
          "Pada bulan kedua, saya bergerak ke luar dengan agresif melalui ekosistem ring kedua saya.",
          "Saya menyusun Buying Centre Dossier untuk 3 bank komersial menengah target, memetakan isu sistem legacy mereka sebelum pertemuan dimulai.",
          "Melalui warm introduction, saya membuka pintu direksi dalam waktu kurang dari 14 hari tanpa cold calling yang tidak efektif.",
          "Fokus discovery meeting adalah meredakan ketakutan dewan direksi mengenai kegagalan cutover dengan mempresentasikan proposisi Dual Engine tanpa risiko downtime."
        ],
        potentialQuestions: [
          "Bagaimana jika Direktur IT bank target menolak bertemu karena merasa sistem lama mereka masih cukup?",
          "Berapa target discovery meeting yang realistis dibuka dalam 30 hari kedua?"
        ],
        suggestedAnswer: "Saya tidak menjual penggantian total, melainkan mengangkat risiko kepatuhan BSPI 2030 dan peluang kanal fee-based baru seperti SNAP BI dan SoftPOS. Target saya adalah minimal 2 discovery meeting formal di level C-Suite."
      }
    },
    {
      id: 14,
      title: "Hari 61 - 90+: Akselerasi Pipeline, Validasi PoC & Komitmen Penjualan",
      subtitle: "Validasi Teknis Lapangan, Cross-Selling Modul Eksisting & Pembangunan Pipeline 12 Bulan",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan hasil konkret di akhir kuartal pertama: validasi PoC lapangan, penutupan penjualan modul add-on akun eksisting, dan komitmen pipeline 12 bulan puluhan miliar rupiah.",
        talkingPoints: [
          "Bulan ketiga adalah momentum pembuktian hasil (conversion milestone).",
          "Kami menjalankan Proof of Concept (PoC) terukur untuk membuktikan ketahanan 10.000+ TPS dan integrasi Open API SNAP BI di hadapan evaluator teknis bank.",
          "Sekaligus, saya mengejar quick-win melalui closing cross-selling modul add-on (Digital Wallet, SoftPOS) ke akun eksisting guna mempercepat perolehan revenue.",
          "Di hari ke-90, saya berkomitmen menyerahkan dashboard pipeline penjualan 12 bulan senilai puluhan miliar rupiah yang terverifikasi, transparan, dan siap diaudit manajemen OpenWay."
        ],
        potentialQuestions: [
          "Apakah 90 hari cukup untuk menghasilkan pipeline penjualan yang siap tender?",
          "Berapa estimasi nilai pipeline yang siap dikomitmenkan di hari ke-90?"
        ],
        suggestedAnswer: "Dengan metodologi Pre-RFP Shaping dan aktivasi warm network, 90 hari sangat realistis untuk mengunci minimal 2-3 peluang bank komersial dan 1 modul ekspansi akun eksisting, menghasilkan estimasi pipeline tahunan senilai Rp 20 - 40 Miliar."
      }
    },
    {
      id: 15,
      title: "Tata Kelola Bersih, Kepercayaan Pemangku Kepentingan & Perbaikan Diri",
      subtitle: "Tiga Pilar Integritas, Eksekusi Lintas Fungsi & Komitmen Pertumbuhan Jangka Panjang",
      category: "Komitmen Penutup",
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
      id: 16,
      title: "Pilar 1: Integritas Pengadaan Bersih & Bebas Sengketa Audit",
      subtitle: "Standar Tata Kelola Setara LKPP/BUMN, Nol Benturan Kepentingan & Transparansi 100%",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan jaminan mutlak bagi manajemen OpenWay bahwa seluruh deal dimenangkan dengan integritas etika tinggi, patuh hukum, dan bebas dari risiko sengketa audit.",
        talkingPoints: [
          "Pada Pilar 1, saya menggaransi 100% tata kelola pengadaan bersih setara standar BUMN dan LKPP.",
          "Saya memiliki rekam jejak 16 tahun tanpa pernah terlibat sengketa hukum atau catatan disclaimer audit.",
          "Setiap proses tender dikawal dengan pakta integritas ketat, melindungi brand OpenWay dan dewan direksi dari risiko gratifikasi.",
          "Dokumentasi tender disusun rapi dan transparan sejak Pre-RFP hingga kontrak final, siap diaudit sewaktu-waktu oleh OJK dan auditor eksternal."
        ],
        potentialQuestions: [
          "Bagaimana Anda memastikan kepatuhan pengadaan tetap terjaga saat menghadapi tekanan target penjualan?",
          "Apakah Anda bersedia menandatangani pakta integritas dan kode etik resmi OpenWay?"
        ],
        suggestedAnswer: "Saya memegang prinsip bahwa kesepakatan terbaik adalah kesepakatan yang aman dan berkelanjutan. Saya 100% siap menandatangani pakta integritas dan selalu mengutamakan tata kelola yang bersih di atas segalanya."
      }
    },
    {
      id: 17,
      title: "Pilar 2: Orkestrasi Pemangku Kepentingan & Sinergi Lintas Fungsi",
      subtitle: "Menjembatani C-Level, Divisi Legal, Komite Pengadaan & Tim Teknis OpenWay",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan kematangan Harry sebagai dirigen komersial yang mampu menyatukan seluruh pihak internal dan eksternal tanpa friksi birokrasi.",
        talkingPoints: [
          "Pada Pilar 2, saya berperan sebagai orchestrator yang menyelaraskan seluruh pemangku kepentingan.",
          "Penjualan platform perbankan melibatkan C-Level, Divisi Legal, Komite Pengadaan, dan tim Pre-Sales teknis.",
          "Saya menjembatani perbedaan bahasa: menerjemahkan arsitektur teknis menjadi business case bagi direksi, serta mengurai klausul liabilitas bersama divisi Legal.",
          "Dengan pendekatan sinergis ini, siklus negosiasi kontrak dapat dipangkas hingga 40% lebih cepat."
        ],
        potentialQuestions: [
          "Bagaimana mengatasi kebuntuan negosiasi klausul SLA dengan tim legal bank?",
          "Bagaimana Anda membagi peran dengan Pre-Sales Director OpenWay saat presentasi di hadapan C-Level?"
        ],
        suggestedAnswer: "Saya memfasilitasi titik temu win-win dengan menawarkan klausul SLA berjenjang yang adil. Di hadapan C-Level, saya membuka dengan strategi bisnis dan TCO, kemudian menyerahkan kendali arsitektur mendalam kepada Pre-Sales secara terhormat."
      }
    },
    {
      id: 18,
      title: "Pilar 3: Pengembangan Diri Berkelanjutan & Kemampuan Bahasa Global",
      subtitle: "Les Privat Bahasa Inggris Bisnis Intensif, Penguasaan Domain & Representasi Regional",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan komitmen belajar mandiri dan kerendahan hati profesional Harry untuk selalu siap menjadi duta komersial OpenWay di tingkat regional Asia Pasifik.",
        talkingPoints: [
          "Pada Pilar 3, saya menunjukkan komitmen nyata perbaikan diri berkelanjutan.",
          "Saya secara proaktif mengambil les privat Bahasa Inggris bisnis intensif 2-3 kali seminggu bersama tutor profesional.",
          "Tujuannya adalah memastikan komunikasi yang fasih dan percaya diri di hadapan jajaran pimpinan regional OpenWay dan forum internasional.",
          "Di sisi lain, saya terus memperdalam wawasan sistem pembayaran modern (ISO 20022, SNAP BI, SoftPOS) agar selalu menjadi mitra diskusi bernilai tinggi bagi perbankan."
        ],
        potentialQuestions: [
          "Sejauh mana progres kemampuan bahasa Inggris bisnis Anda saat ini?",
          "Apakah Anda siap mewakili OpenWay dalam forum perbankan internasional di Singapura atau regional?"
        ],
        suggestedAnswer: "Progres saya sangat konsisten dan terfokus pada enterprise presentation. Saya sangat siap mewakili OpenWay di kancah regional APAC dengan persiapan matang dan dedikasi profesional penuh."
      }
    },
    {
      id: 19,
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
      category: "Market & Competitive Landscape",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Convince the panel that Harry deeply understands current market urgency, competitive dynamics, and where OpenWay can capture dominant market share.",
        talkingPoints: [
          "The surging modernization need in Indonesia is primarily driven by Bank Indonesia's BSPI 2030 blueprint, mandating modern open payments.",
          "OpenWay's WAY4 platform already commands premier leadership in top-tier accounts like BRI, Finnet, and ASBANDA.",
          "However, the major high-growth frontier lies in commercial mid-tier banks whose legacy stacks (ACI or Fiserv) struggle to meet modern standards.",
          "Our business development mission is getting to their Boardrooms before competitors seize this displacement window."
        ],
        potentialQuestions: [
          "Why are mid-tier banks hesitating to replace aging legacy systems despite clear regulatory mandates?"
        ],
        suggestedAnswer: "Their primary anxiety is downtime and catastrophic cutover risk. We address this directly with our parallel Dual Engine co-existence strategy rather than an all-at-once high-risk replacement."
      }
    },
    {
      id: 3,
      title: "Execution Methodology & FSI Account Mapping",
      subtitle: "Buying Centre Dossier & Enterprise RFP Winning Formula",
      category: "Methodology & Execution",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate structured, disciplined enterprise sales methodology ensuring high win rates for multi-million dollar banking engagements.",
        talkingPoints: [
          "I execute systematic FSI Account Mapping and compile Buying Centre Dossiers as shown on screen.",
          "In banking, decisions are owned by a 3-tier committee: Decision Makers (Tier 1), Key Influencers (Tier 2), and Gatekeepers (Tier 3).",
          "Leveraging my trusted ring-2 network, I gather operational intelligence from influencers, using it to secure warm introductions directly to IT Directors and C-Suite leaders.",
          "This approach feeds directly into our Enterprise Tender Winning Formula through proactive Pre-RFP Shaping."
        ],
        potentialQuestions: [
          "What if a target bank already has an incumbent vendor preference prior to formal RFP publication?"
        ],
        suggestedAnswer: "This is precisely the purpose of Pre-RFP Shaping. We educate the committee early on BSPI 2030 compliance, cloud-native scale, and native SNAP BI benchmarks that only WAY4 can deliver natively."
      }
    },
    {
      id: 4,
      title: "Tier 1: Executive Board, CTO & Bank Decision Committee",
      subtitle: "Ring-2 C-Suite Access & 5-Year Financial TCO Modeling",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate tactical mastery in penetrating boardrooms, presenting comparative financial models, and eliminating board anxiety over migration risk.",
        talkingPoints: [
          "In Tier 1, my laser focus is the Executive Board: IT Director/CTO, Retail Business Director, and Head of Compliance.",
          "I penetrate boardrooms within 14 days leveraging warm ring-2 trusted networks rather than cold outreach.",
          "I speak the language of strategy and ROI: 5-Year TCO modeling delivering up to 35% savings, and zero-downtime guarantees through Dual Engine architecture.",
          "The objective is locking in strategic executive sponsorship prior to formal tender publication."
        ],
        potentialQuestions: [
          "What is the single biggest anxiety bank directors hold regarding legacy switch migration?",
          "How do you prove the 35% TCO savings claim before the Chief Financial Officer?"
        ],
        suggestedAnswer: "Their biggest fear is payment downtime during national shopping peaks. We eliminate this with our parallel Dual Engine model where the legacy switch remains active as fallback, while TCO is proven through reduced per-core licensing and on-prem hardware consolidation."
      }
    },
    {
      id: 5,
      title: "Tier 2: Enterprise Architecture, Business VPs & Technical PMO",
      subtitle: "Architecture Discovery Workshops, TPS Benchmarks & PoC Validation",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Showcase how to engage technical evaluators and enterprise architects to turn them into staunch internal champions for WAY4.",
        talkingPoints: [
          "In Tier 2, I collaborate directly with VP Enterprise Architecture, Head of Cards, and VP IT Operations.",
          "They are skeptical technical evaluators. My approach is deep architectural discovery workshops unpacking their legacy bottlenecks.",
          "We validate WAY4 capabilities through benchmarked 10,000+ TPS load tests at sub-second latency and native SNAP BI compliance.",
          "By solving their technical headaches, these evaluators become vocal Internal Champions championing WAY4 in the tender evaluation committee."
        ],
        potentialQuestions: [
          "How do you convince architects accustomed to legacy ACI or Fiserv workflows for decades?",
          "Can WAY4 prove SNAP BI compliance without external third-party middleware?"
        ],
        suggestedAnswer: "Bank architects are constantly frustrated by 6-9 month lead times to release new card products on legacy switches. We demonstrate new product parameterization on WAY4 live in days without coding, supported by a 100% certified native SNAP BI gateway."
      }
    },
    {
      id: 6,
      title: "Tier 3: Procurement Committee, Legal Division & Vendor Governance",
      subtitle: "Pre-RFP Criteria Shaping, 100% Audit Readiness & Flexible Licensing",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Emphasize clean procurement governance, 100% audit readiness, and flexible commercial contract options to ensure smooth deal closure.",
        talkingPoints: [
          "In Tier 3, formal gatekeeping sits with Procurement Committees, Legal counsel, and Vendor Risk Management (VRM).",
          "My success key is ethical Pre-RFP Shaping: influencing requirements 3-6 months ahead so open standards align naturally with WAY4 strengths.",
          "I maintain an unblemished procurement track record meeting the highest BUMN and LKPP enterprise benchmarks (100% auditable, zero dispute).",
          "We also offer flexible commercial structures: perpetual Capex, Opex subscriptions, or transaction-based revenue sharing."
        ],
        potentialQuestions: [
          "How do you ensure Pre-RFP shaping does not infringe upon bank ethics or anti-monopoly rules?",
          "Is OpenWay open to performance-based billing structures?"
        ],
        suggestedAnswer: "Our Pre-RFP shaping focuses on open industry standards (BSPI 2030 compliance and modern microservices), not proprietary brand lock-in clauses. We provide comprehensive VRM dossiers and transparent tiered licensing models."
      }
    },
    {
      id: 7,
      title: "Growth Strategy – Success Replication & Account Expansion",
      subtitle: "3D Isometric Core Stack Framework & Dual-Growth Engine",
      category: "Growth Strategy",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate the perfect synthesis between OpenWay's world-class platform and Harry's field execution in scaling pipeline value.",
        talkingPoints: [
          "My strongest asset is disciplined commercial execution and account navigation.",
          "As shown on this 3D isometric core stack diagram, I integrate all growth pillars visually.",
          "My strategy is rooted in Success Replication and Account Expansion.",
          "On the middle layer (Layer 2), I deconstruct proven blueprints from BRI, Finnet, and ASBANDA to replicate them into commercial mid-tier banks on Layer 3.",
          "Simultaneously, I uncover latent needs in existing accounts to upsell high-margin digital modules such as Digital Wallet, SoftPOS, and Open-API SNAP BI Gateways."
        ],
        potentialQuestions: [
          "Which WAY4 module offers the quickest upsell adoption in existing banking clients?"
        ],
        suggestedAnswer: "The Digital Wallet, SoftPOS, and SNAP BI Gateway modules, allowing banks to integrate instantly with merchants and fintechs without touching their core switch."
      }
    },
    {
      id: 8,
      title: "Layer 3: Market Opportunities, Digital Channels & Open APIs",
      subtitle: "Commercial Bank Expansion, Fintech Ecosystems & High-Value Add-ons",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Explain how to unlock rapid, non-disruptive fee revenue for banks via modern WAY4 digital modules without awaiting core overhaul.",
        talkingPoints: [
          "In Layer 3 (top tier), my focus is unlocking commercial mid-tier banks and non-bank fintech aggregators.",
          "Mid-tier banks struggle to launch modern digital features due to legacy rigidity. WAY4 Digital Modules provide instant answers: SNAP BI Open APIs, Digital Wallets, and SoftPOS.",
          "These modules achieve production go-live in under 3 months, immediately expanding retail transaction fees for the bank.",
          "Specifically, SoftPOS is a huge game changer, slashing physical merchant POS terminal capex and maintenance logistics by up to 60%."
        ],
        potentialQuestions: [
          "Does native SNAP BI open API integration require third-party middleware licenses?",
          "How fast can the SoftPOS mobile solution be deployed across bank merchants?"
        ],
        suggestedAnswer: "WAY4's SNAP BI module is 100% native and certified by Bank Indonesia without third-party gateways. SoftPOS turnkey mobile SDKs can be rolled out to retail merchant networks in 6 to 8 weeks."
      }
    },
    {
      id: 9,
      title: "Layer 2: WAY4 Core Platform Blueprints & Tier-1 Replication",
      subtitle: "Replicating Proven BRI, Finnet & ASBANDA Blueprints into Commercial Banks",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Convince banking leadership that WAY4's core platform is battle-tested at the highest national volumes, eliminating experimental risk.",
        talkingPoints: [
          "In Layer 2 (middle tier), my core commercial driver is Success Replication.",
          "OpenWay holds unmatched production credibility in Indonesia: processing massive transaction volumes at Bank BRI, Finnet, and ASBANDA/BPDNet.",
          "When pitching to commercial mid-tier banks, my message is clear: you do not need to be an experimental guinea pig. WAY4 has repeatedly handled 10,000+ TPS peaks.",
          "Our parallel Dual Engine strategy guarantees a gradual, risk-free transition with zero operational downtime."
        ],
        potentialQuestions: [
          "How do you ensure WAY4 implementation does not overwhelm bank internal IT resources?",
          "Can Tier-1 blueprints from giant banks like BRI apply seamlessly to smaller commercial banks?"
        ],
        suggestedAnswer: "OpenWay's architecture is modular and parameter-driven. We utilize battle-tested configuration blueprints tailored for commercial banks, cutting deployment timelines in half compared to bespoke builds."
      }
    },
    {
      id: 10,
      title: "Layer 1: Regulatory Compliance Foundation & BSPI 2030",
      subtitle: "Bank Indonesia Regulatory Mandate, Data Sovereignty & Audit Readiness",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide absolute peace of mind for the Board of Commissioners, Compliance Directors, and statutory auditors that core modernization is 100% lawful and ethical.",
        talkingPoints: [
          "In Layer 1 (foundation), we anchor the most critical pillar in banking: Regulatory Compliance and Clean Governance.",
          "WAY4 architecture is natively harmonized with Bank Indonesia's BSPI 2030 blueprint, ISO 20022 message schemes, and PCI-DSS Level 1 security.",
          "Financial data sovereignty is preserved whether deployed on-premises or across domestic sovereign cloud infrastructure.",
          "Commercially, I guarantee 100% procurement integrity, free of conflicts of interest, aligning with BUMN and LKPP governance standards."
        ],
        potentialQuestions: [
          "How agile is WAY4 in adapting to future Bank Indonesia regulatory revisions?",
          "Is OpenWay willing to commit to formal compliance SLAs and integrity pacts?"
        ],
        suggestedAnswer: "WAY4's microservices architecture allows rapid regulatory updates via parameter configuration without recoding base systems. We routinely sign formal compliance SLAs and integrity pacts."
      }
    },
    {
      id: 11,
      title: "Structured 30-60-90 Day Execution Roadmap",
      subtitle: "Systematic Milestones & High-Velocity Pipeline Generation",
      category: "Execution Roadmap",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide a tangible, highly disciplined 90-day action plan demonstrating commercial velocity and immediate impact.",
        talkingPoints: [
          "Here I lay out a transparent, measurable 30-60-90 day action plan.",
          "Days 1-30: Master WAY4 product blueprints, conduct account farming with existing clients, and build 5-Year TCO models.",
          "Days 31-60: External outreach. Map C-Level targets across mid-tier commercial banks via ring-2 networks, securing at least 2 active discovery meetings.",
          "Days 61-90: Accelerate qualified opportunities, initiate proof-of-concepts, and commit to generating an audit-ready multi-billion IDR annual sales pipeline."
        ],
        potentialQuestions: [
          "What concrete milestone will OpenWay leadership be able to evaluate at Day 30?"
        ],
        suggestedAnswer: "At least 3 complete target bank Buying Centre Dossiers with validated C-Level contacts, 2 active discovery proposals, and at least 1 identified module upsell opportunity in existing accounts."
      }
    },
    {
      id: 12,
      title: "Days 1 - 30: Internal Onboarding, Account Audit & TCO Modeling",
      subtitle: "WAY4 Architecture Mastery, Existing Client Nurturing & Financial ROI Modeling",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Showcase disciplined Day 1-30 execution: internalizing WAY4 production architectures, securing existing client retention, and validating C-level financial models.",
        talkingPoints: [
          "Month one is the internal foundation phase. I do not waste time in passive onboarding.",
          "I partner closely with Pre-Sales to master production WAY4 architectures deployed at BRI, Finnet, and ASBANDA.",
          "Simultaneously, I conduct formal discovery visits with existing accounts to ensure zero churn and uncover add-on module opportunities.",
          "I also build our 5-Year TCO spreadsheet model to equip commercial discussions before bank CFOs."
        ],
        potentialQuestions: [
          "How do you balance learning internal technology and visiting clients during month one?",
          "Does the TCO model account for customer data migration costs?"
        ],
        suggestedAnswer: "I split time 50/50 between Pre-Sales technical deep dives and relationship farming. Our TCO model is comprehensive, capturing licensing, hardware consolidation, and Dual Engine de-risked parallel migration."
      }
    },
    {
      id: 13,
      title: "Days 31 - 60: Market Penetration, C-Level Access & Discovery Meetings",
      subtitle: "Ring-2 Network Activation, Boardroom Access & Dual Engine Presentation",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate aggressive yet disciplined penetration of target bank boardrooms in <14 days leveraging warm ring-2 networks.",
        talkingPoints: [
          "In month two, I shift outward proactively via my trusted ring-2 network.",
          "I build comprehensive Buying Centre Dossiers for 3 target mid-tier commercial banks, diagnosing their legacy pain points beforehand.",
          "Leveraging warm introductions, I secure direct boardroom access in <14 days without ineffective cold calling.",
          "The discovery focus is dispelling board downtime fears through our Dual Engine parallel migration architecture."
        ],
        potentialQuestions: [
          "What if a target bank IT Director refuses a meeting stating their legacy switch is adequate?",
          "How many discovery meetings do you commit to securing in month two?"
        ],
        suggestedAnswer: "I do not pitch a high-risk rip-and-replace, but rather highlight BSPI 2030 regulatory deadlines and modern fee-income modules like SNAP BI and SoftPOS. My commitment is at least 2 formal C-Suite discovery sessions."
      }
    },
    {
      id: 14,
      title: "Days 61 - 90+: Pipeline Acceleration, PoC Validation & Sales Commitment",
      subtitle: "Field PoC Validation, Existing Account Add-ons & 12-Month Pipeline Commitment",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Deliver tangible end-of-quarter results: field PoC sign-offs, closing existing account module expansions, and locking an audit-ready multi-billion IDR 12-month sales pipeline.",
        talkingPoints: [
          "Month three is our conversion milestone.",
          "We execute targeted Proof of Concept (PoC) tests demonstrating 10,000+ TPS and native SNAP BI compliance before bank architects.",
          "Concurrently, I close add-on module cross-sells (Digital Wallet, SoftPOS) with existing accounts for rapid fee revenue.",
          "At Day 90, I present an audit-ready 12-month sales pipeline dashboard representing tens of billions of IDR in verified potential."
        ],
        potentialQuestions: [
          "Is 90 days sufficient to build a tender-ready enterprise banking pipeline?",
          "What is the estimated value of the pipeline committed at Day 90?"
        ],
        suggestedAnswer: "With Pre-RFP Shaping and warm network activation, 90 days is completely achievable to mature 2-3 mid-tier bank pursuits and 1 existing account expansion, yielding a pipeline of IDR 20 - 40 Billion."
      }
    },
    {
      id: 15,
      title: "Clean Governance, Stakeholder Trust & Continuous Self-Improvement",
      subtitle: "Three Pillars of Integrity, Cross-Functional Execution & Long-Term Commitment",
      category: "Closing Commitment",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Conclude the presentation with an impression of rock-solid moral integrity, execution readiness, and continuous self-improvement.",
        talkingPoints: [
          "In closing, I want to emphasize my 3 core commitments to OpenWay Group.",
          "First, 100% Procurement Integrity. Backed by extensive experience meeting strict enterprise and LKPP standards, I ensure all sales processes are compliant and dispute-free.",
          "Second, serving as a cohesive cross-functional bridge between technical delivery and commercial executive teams.",
          "Third, dedication to continuous personal growth. I actively pursue banking certifications and take private professional business English courses to represent OpenWay impeccably on regional stages."
        ],
        potentialQuestions: [
          "What is your commitment to ongoing professional business English proficiency?"
        ],
        suggestedAnswer: "I maintain disciplined self-development, taking intensive private business English training focused on enterprise presentations to ensure flawless regional and global communication."
      }
    },
    {
      id: 16,
      title: "Pillar 1: Clean Procurement Integrity & Zero Audit Dispute",
      subtitle: "LKPP/SOE Equivalent Governance Benchmarks, Zero Conflict of Interest & 100% Transparency",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide absolute peace of mind for OpenWay leadership that all commercial victories are won with high ethical standards, full statutory compliance, and zero audit disputes.",
        talkingPoints: [
          "In Pillar 1, I guarantee 100% clean procurement governance equivalent to BUMN and LKPP benchmarks.",
          "I carry an unblemished 16-year career track record free of ethical or statutory disputes.",
          "Every tender proceeding is governed by formal integrity pacts, shielding OpenWay and its executive leadership from reputational risk.",
          "Tender documentation is structured transparently from Pre-RFP to final award, audit-ready for banking regulators at all times."
        ],
        potentialQuestions: [
          "How do you maintain procurement compliance under aggressive commercial quota pressure?",
          "Are you willing to sign OpenWay's official integrity pact and compliance code?"
        ],
        suggestedAnswer: "The most sustainable deal is an honorable, compliant deal. I am 100% prepared to execute formal integrity pacts and always prioritize lawful, audit-ready governance above all."
      }
    },
    {
      id: 17,
      title: "Pillar 2: Stakeholder Orchestration & Cross-Functional Synergy",
      subtitle: "Uniting C-Level, Legal Divisions, Procurement & OpenWay Technical Teams",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate commercial maturity as a strategic conductor capable of aligning internal and external stakeholders without bureaucratic drag.",
        talkingPoints: [
          "In Pillar 2, I orchestrate complex enterprise stakeholders toward unanimous agreement.",
          "Enterprise banking deals involve C-Suite leaders, Legal departments, Procurement panels, and Pre-Sales engineers.",
          "I bridge diverse vernaculars: translating technical capabilities into boardroom financial impact, and resolving contractual liabilities with bank legal counsel.",
          "Through this cohesive alignment, enterprise contract negotiation cycles are compressed by up to 40%."
        ],
        potentialQuestions: [
          "How do you resolve SLA liability deadlocks with bank legal departments?",
          "How do you coordinate with OpenWay's Pre-Sales leadership during C-Suite briefings?"
        ],
        suggestedAnswer: "I facilitate balanced, win-win SLA tiers that safeguard both parties. In boardroom sessions, I anchor commercial ROI and strategy, seamlessly handing deep architectural demonstrations over to Pre-Sales leadership."
      }
    },
    {
      id: 18,
      title: "Pillar 3: Continuous Professional Growth & Global English Fluency",
      subtitle: "Intensive Business English Coaching, Domain Mastery & Regional Representation",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate professional humility, disciplined self-driven development, and full readiness to represent OpenWay across the Asia-Pacific region.",
        talkingPoints: [
          "In Pillar 3, I make a transparent, measurable commitment to ongoing self-improvement.",
          "I proactively engage private enterprise business English tutoring 2-3 times weekly.",
          "This ensures articulate, confident communication before OpenWay's regional executive boards and global forums.",
          "Simultaneously, I continuously deepen my payment domain mastery (ISO 20022, SNAP BI, SoftPOS) to remain a high-value consultative advisor to banking clients."
        ],
        potentialQuestions: [
          "How is your business English proficiency progressing currently?",
          "Are you prepared to represent OpenWay at international payment forums in Singapore or regionally?"
        ],
        suggestedAnswer: "My progress is steady and highly targeted toward enterprise presentations. I am fully ready to represent OpenWay across the APAC region with meticulous preparation and dedication."
      }
    },
    {
      id: 19,
      title: "Tactical Appendix: Competitive Battlecard & Objection Handling",
      subtitle: "WAY4 Platform Differentiation vs Monolithic Legacy Systems",
      category: "Tactical Appendix",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide Harry with conclusive commercial objection-handling frameworks to address any competitive or migration doubts from bank boards.",
        talkingPoints: [
          "This tactical battlecard appendix addresses critical boardroom questions and competitive displacement scenarios.",
          "If banks cite high upfront Capex licenses, I present flexible commercial models (phased Opex or transaction-based fees).",
          "If they fear migration risks from ACI or Fiserv, I demonstrate our Dual Engine strategy: parallel co-existence ensuring continuous uptime while migrating new channels.",
          "With WAY4's cloud-native modularity, OpenWay stands not merely as a software vendor, but as a strategic long-term modernization partner."
        ],
        potentialQuestions: [
          "How do you prove to banks that parallel Dual Engine migration will not double operational overhead?"
        ],
        suggestedAnswer: "WAY4's automated SNAP BI integration gateway synchronizes data in the background without manual human intervention, keeping daily operational bank workload completely normal."
      }
    }
  ]
};

export function getSlidesData(lang: Language = 'IN'): SlideMetadata[] {
  return SLIDES_DATA_BY_LANG[lang] || SLIDES_DATA_BY_LANG.IN;
}
`;

fs.writeFileSync(path.join(SLIDE_DIR, 'slidesData.ts'), slidesDataContent, 'utf8');
console.log('[OK] Updated slidesData.ts for 19 slides');

// -------------------------------------------------------------
// STEP 6: UPDATE App.tsx WITH ALL 19 SLIDES
// -------------------------------------------------------------
console.log('==> Step 6: Updating App.tsx to support all 19 slides...');

const appTsxContent = `import React, { useState, useEffect, useCallback } from 'react';
import Layout from './layout';
import { getSlidesData, Language, SlideMetadata } from './slide/slidesData';
import { Slide01 } from './slide/01';
import { Slide02 } from './slide/02';
import { Slide03 } from './slide/03';
import { Slide04 } from './slide/04';
import { Slide05 } from './slide/05';
import { Slide06 } from './slide/06';
import { Slide07 } from './slide/07';
import { Slide08 } from './slide/08';
import { Slide09 } from './slide/09';
import { Slide10 } from './slide/10';
import { Slide11 } from './slide/11';
import { Slide12 } from './slide/12';
import { Slide13 } from './slide/13';
import { Slide14 } from './slide/14';
import { Slide15 } from './slide/15';
import { Slide16 } from './slide/16';
import { Slide17 } from './slide/17';
import { Slide18 } from './slide/18';
import { Slide19 } from './slide/19';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [language, setLanguage] = useState<Language>('IN');
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const slidesData = getSlidesData(language);
  const totalSlides = slidesData.length;
  const currentSlide = slidesData[currentSlideIndex] || slidesData[0];

  // Stopwatch timer
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Autoplay progression
  useEffect(() => {
    let autoInterval: any = null;
    if (isAutoplay && totalSlides > 1) {
      autoInterval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      }, 12000);
    }
    return () => clearInterval(autoInterval);
  }, [isAutoplay, totalSlides]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        setShowOverview((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const renderSlideContent = () => {
    switch (currentSlideIndex) {
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
      case 10:
        return <Slide11 language={language} />;
      case 11:
        return <Slide12 language={language} />;
      case 12:
        return <Slide13 language={language} />;
      case 13:
        return <Slide14 language={language} />;
      case 14:
        return <Slide15 language={language} />;
      case 15:
        return <Slide16 language={language} />;
      case 16:
        return <Slide17 language={language} />;
      case 17:
        return <Slide18 language={language} />;
      case 18:
        return <Slide19 language={language} />;
      default:
        return <Slide01 language={language} />;
    }
  };

  return (
    <Layout
      headerProps={{
        currentSlideIndex,
        totalSlides,
        slideTitle: currentSlide.title,
        category: currentSlide.category,
        language,
        onLanguageChange: (lang: Language) => setLanguage(lang),
        showNotes,
        onToggleNotes: () => setShowNotes(!showNotes),
        onToggleOverview: () => setShowOverview(!showOverview),
        timerSeconds,
        isTimerRunning,
        onToggleTimer: () => setIsTimerRunning(!isTimerRunning),
        onResetTimer: () => setTimerSeconds(0)
      }}
      bottomNavProps={{
        currentSlideIndex,
        totalSlides,
        onNext: handleNext,
        onPrev: handlePrev,
        onSelectSlide: handleSelectSlide,
        isFirst: currentSlideIndex === 0,
        isLast: currentSlideIndex === totalSlides - 1,
        isAutoplay,
        onToggleAutoplay: () => setIsAutoplay(!isAutoplay),
        slideTitles: slidesData.map((s: SlideMetadata) => s.title)
      }}
      showNotes={showNotes}
      onCloseNotes={() => setShowNotes(false)}
      activeSlideData={currentSlide}
      showOverview={showOverview}
      onCloseOverview={() => setShowOverview(false)}
      allSlides={slidesData}
      onSelectSlide={handleSelectSlide}
    >
      {renderSlideContent()}
    </Layout>
  );
}
`;

fs.writeFileSync(path.join(SRC_DIR, 'App.tsx'), appTsxContent, 'utf8');
console.log('[OK] Updated App.tsx for 19 slides');

console.log('=== [EXECUTE-PROMPT.md] All operations for 19 slides completed successfully! ===');
