const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const SLIDE_DIR = path.join(SRC_DIR, 'slide');

console.log('=== [EXECUTE-PROMPT.md] Starting Action Plan Slides 12, 13, 14 Generator & 16-Slide Architecture ===');

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
// STEP 1: SHIFT EXISTING SLIDES 13 -> 16, 12 -> 15
// -------------------------------------------------------------
console.log('==> Step 1: Shifting existing slides (13->16, 12->15)...');

// 1. Shift 13 -> 16 (Battlecard)
const dir13 = path.join(SLIDE_DIR, '13');
const dir16 = path.join(SLIDE_DIR, '16');
if (fs.existsSync(dir13)) {
  removeDirRecursive(dir16);
  copyDirRecursive(dir13, dir16);
  // Update internal names in 16
  const d16Path = path.join(dir16, 'data.ts');
  if (fs.existsSync(d16Path)) {
    let c = fs.readFileSync(d16Path, 'utf8');
    c = c.replace(/SLIDE13_DATA/g, 'SLIDE16_DATA');
    fs.writeFileSync(d16Path, c, 'utf8');
  }
  const c16Path = path.join(dir16, 'container.tsx');
  if (fs.existsSync(c16Path)) {
    let c = fs.readFileSync(c16Path, 'utf8');
    c = c.replace(/SLIDE13_DATA/g, 'SLIDE16_DATA');
    c = c.replace(/Slide13Controller/g, 'Slide16Controller');
    c = c.replace(/useSlide13Container/g, 'useSlide16Container');
    fs.writeFileSync(c16Path, c, 'utf8');
  }
  const i16Path = path.join(dir16, 'index.tsx');
  if (fs.existsSync(i16Path)) {
    let c = fs.readFileSync(i16Path, 'utf8');
    c = c.replace(/useSlide13Container/g, 'useSlide16Container');
    c = c.replace(/Slide13Props/g, 'Slide16Props');
    c = c.replace(/Slide13/g, 'Slide16');
    fs.writeFileSync(i16Path, c, 'utf8');
  }
  console.log('[OK] Shifted 13 -> 16 (Battlecard)');
}

// 2. Shift 12 -> 15 (Conclusion & Governance)
const dir12 = path.join(SLIDE_DIR, '12');
const dir15 = path.join(SLIDE_DIR, '15');
if (fs.existsSync(dir12)) {
  removeDirRecursive(dir15);
  copyDirRecursive(dir12, dir15);
  // Update internal names in 15
  const d15Path = path.join(dir15, 'data.ts');
  if (fs.existsSync(d15Path)) {
    let c = fs.readFileSync(d15Path, 'utf8');
    c = c.replace(/SLIDE12_DATA/g, 'SLIDE15_DATA');
    fs.writeFileSync(d15Path, c, 'utf8');
  }
  const c15Path = path.join(dir15, 'container.tsx');
  if (fs.existsSync(c15Path)) {
    let c = fs.readFileSync(c15Path, 'utf8');
    c = c.replace(/SLIDE12_DATA/g, 'SLIDE15_DATA');
    c = c.replace(/Slide12Controller/g, 'Slide15Controller');
    c = c.replace(/useSlide12Container/g, 'useSlide15Container');
    fs.writeFileSync(c15Path, c, 'utf8');
  }
  const i15Path = path.join(dir15, 'index.tsx');
  if (fs.existsSync(i15Path)) {
    let c = fs.readFileSync(i15Path, 'utf8');
    c = c.replace(/useSlide12Container/g, 'useSlide15Container');
    c = c.replace(/Slide12Props/g, 'Slide15Props');
    c = c.replace(/Slide12/g, 'Slide15');
    fs.writeFileSync(i15Path, c, 'utf8');
  }
  console.log('[OK] Shifted 12 -> 15 (Conclusion & Governance)');
}

// Clear old dir12 and dir13, and prepare dir14
removeDirRecursive(dir12);
removeDirRecursive(dir13);
const dir14 = path.join(SLIDE_DIR, '14');
removeDirRecursive(dir14);

fs.mkdirSync(dir12, { recursive: true });
fs.mkdirSync(dir13, { recursive: true });
fs.mkdirSync(dir14, { recursive: true });

// -------------------------------------------------------------
// STEP 2: BUILD SLIDE 12 - TAHAP 1 DEEP DIVE (HARI 1 - 30)
// -------------------------------------------------------------
console.log('==> Step 2: Creating Slide 12 (Tahap 1 Deep Dive - Hari 1 - 30)...');

const s12Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE12_DATA: Record<Language, {
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
      category: "Rencana Aksi Deep Dive",
      catalyst: "Tahap 1 [Hari 1 - 30]: Fondasi Internal & Audit",
      title: "Hari 1 - 30: Penyerapan Internal, Audit Akun & Pemodelan TCO"
    },
    descriptionTitle: "Penguasaan Arsitektur WAY4, Hubungan Klien Eksisting & Kalkulasi Finansial ROI",
    descriptionText: "Bulan pertama didedikasikan untuk membangun fondasi operasional yang kokoh tanpa jeda ramp-up. Menyerap cetak biru produksi Tier-1 bersama tim teknis OpenWay, menjalin kedekatan dengan akun eksisting untuk menjaga retensi 100%, serta merumuskan template kalkulator 5-Year TCO siap pakai untuk C-Level.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 1 - 30",
    cardsBadge: "Pondasi & Audit",
    cards: [
      {
        id: "d30_internal",
        code: "#01",
        title: "Penyerapan Teknis & Arsitektur Produk WAY4",
        badgeLabel: "Produk & Solusi",
        mandate: "Menguasai modul WAY4 CMS, Switching, Clearing, dan Open API SNAP BI bersama tim Pre-Sales",
        deliverable: "Dossier teknis produk dan ringkasan arsitektur referensi untuk presentasi komersial",
        riskMitigation: "Eliminasi miskomunikasi teknis saat berhadapan langsung dengan arsitek bank"
      },
      {
        id: "d30_farming",
        code: "#02",
        title: "Asesmen Relasi & Account Farming Akun Eksisting",
        badgeLabel: "Retensi Klien",
        mandate: "Kunjungan silaturahmi formal ke PIC operasional dan komersial di BRI, Finnet, dan ASBANDA",
        deliverable: "Peta kesehatan relasi klien, audit SLA, dan identifikasi peluang add-on modul baru",
        riskMitigation: "Mencegah risiko churn klien lama dan mengamankan recurring fee pemeliharaan"
      },
      {
        id: "d30_tco",
        code: "#03",
        title: "Formulasi Kalkulator Finansial 5-Year TCO",
        badgeLabel: "Finansial ROI",
        mandate: "Menyusun model komparasi Capex vs Opex yang membuktikan efisiensi migrasi ke WAY4",
        deliverable: "Spreadsheet model TCO interaktif dengan parameter lisensi, server, dan efisiensi energi",
        riskMitigation: "Menghadapi CFO bank dengan argumen penghematan biaya terukur hingga 35%"
      }
    ],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-30",
      tcoTitle: "Retensi Akun Eksisting",
      tcoValue: "100% Aman",
      tcoSub: "Kunjungan & hubungan hangat klien lama",
      speedTitle: "Kesiapan Model TCO",
      speedValue: "Siap Pakai",
      speedSub: "Kalkulator Capex/Opex terverifikasi",
      mandateTitle: "Waktu Ramp-Up Tim",
      mandateValue: "<30 Hari",
      mandateSub: "Penguasaan penuh katalog produk WAY4"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Sinergi Tim Pre-Sales",
        subtitle: "Penyelarasan komersial dan kapabilitas teknis secara intensif",
        metric: "100% Aligned",
        tag: "Internal",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Audit Kepuasan Klien",
        subtitle: "Menjaga stabilitas kontrak existing tanpa celah risiko",
        metric: "Zero Churn",
        tag: "Retensi",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Validasi Kasus Bisnis",
        subtitle: "Senjata argumen finansial siap tanding di meja direksi bank",
        metric: "Data-Driven",
        tag: "Finansial",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Kesiapan Alat Tempur",
        subtitle: "Format proposal, deck perbankan, dan battlecard siap pakai",
        metric: "Turnkey Ready",
        tag: "Eksekusi",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Hari ke-30 mengunci fondasi internal yang kokoh, memastikan retensi akun eksisting, dan menyiapkan amunisi proposal bernilai tinggi.",
      target: "Fondasi Internal 100% · Model TCO Siap Pakai"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 1 [Days 1 - 30]: Internal Foundation & Audit",
      title: "Days 1 - 30: Internal Onboarding, Account Audit & TCO Modeling"
    },
    descriptionTitle: "WAY4 Architecture Mastery, Existing Client Nurturing & Financial ROI Modeling",
    descriptionText: "The first month is dedicated to establishing an unassailable operational base with zero ramp-up lag. Absorbing Tier-1 production blueprints alongside OpenWay technical leads, engaging existing banking accounts to ensure 100% retention, and formulating turnkey 5-Year TCO financial calculators.",
    cardsTitle: "Key Initiatives & Deliverables for Days 1 - 30",
    cardsBadge: "Foundation & Audit",
    cards: [
      {
        id: "d30_internal",
        code: "#01",
        title: "Technical & Product Architecture Immersion",
        badgeLabel: "Product & Solution",
        mandate: "Deeply mastering WAY4 CMS, Switching, Clearing, and SNAP BI Open APIs with Pre-Sales teams",
        deliverable: "Product technical dossier and reference architecture handbook for executive meetings",
        riskMitigation: "Eliminating technical miscommunication when engaging bank lead architects directly"
      },
      {
        id: "d30_farming",
        code: "#02",
        title: "Existing Account Relationship Assessment & Farming",
        badgeLabel: "Client Retention",
        mandate: "Formal discovery and relationship check-ins with PICs at BRI, Finnet, and ASBANDA",
        deliverable: "Account relationship health matrix, SLA audits, and new module add-on opportunities",
        riskMitigation: "Preventing account churn risks while securing existing maintenance recurring revenue"
      },
      {
        id: "d30_tco",
        code: "#03",
        title: "5-Year TCO & Financial ROI Calculator Formulation",
        badgeLabel: "Financial ROI",
        mandate: "Formulating comparative Capex vs Opex models proving migration cost-efficiencies to WAY4",
        deliverable: "Interactive TCO spreadsheet model incorporating licensing, servers, and power savings",
        riskMitigation: "Addressing bank CFOs with verified financial proof showing up to 35% savings"
      }
    ],
    metrics: {
      advantageTitle: "Day 30 Success Benchmarks",
      tcoTitle: "Existing Account Retention",
      tcoValue: "100% Secure",
      tcoSub: "Check-ins & warm stakeholder ties",
      speedTitle: "TCO Model Readiness",
      speedValue: "Turnkey Ready",
      speedSub: "Verified Capex/Opex calculators",
      mandateTitle: "Team Ramp-Up Velocity",
      mandateValue: "<30 Days",
      mandateSub: "Complete mastery of WAY4 stack"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Pre-Sales Synergy",
        subtitle: "Intensive commercial and technical capability alignment",
        metric: "100% Aligned",
        tag: "Internal",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Client Health Audit",
        subtitle: "Preserving existing contract stability without vulnerability",
        metric: "Zero Churn",
        tag: "Retention",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Business Case Validation",
        subtitle: "Financially grounded weapons ready for bank boardroom scrutiny",
        metric: "Data-Driven",
        tag: "Finance",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Pitch Collateral Readiness",
        subtitle: "Tailored bank pitch decks, proposals, and battlecards",
        metric: "Turnkey Ready",
        tag: "Execution",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Day 30 secures an airtight internal foundation, guarantees client retention, and preps high-value commercial assets.",
      target: "100% Internal Foundation · Turnkey TCO Model"
    }
  }
};
`;

const s12Lottie = makeBaseLottie("Phase 1 Days 1-30 Lottie", [
  makeRectLayer(1, "Base Foundation Platform", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Phase 1 Foundation Slab", 280, 50, 250, 220, "#e8f0fe", "#1a73e8", 3),
  makeRectLayer(3, "Audit Checklist Bar", 200, 28, 250, 210, "#ffffff", "#1a73e8", 2),
  makeCircleLayer(4, "Center Hub Node", 56, 250, 120, "#1a73e8", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "Pre-Sales Team Left Node", 32, 140, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(6, "Existing Client Farming Node", 32, 360, 130, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "5-Year TCO Model Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s12Visual = `import React from 'react';
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

const s12Container = `import { useState } from 'react';
import { SLIDE12_DATA, Language } from './data';

export const useSlide12Container = (language: Language = 'IN') => {
  const data = SLIDE12_DATA[language] || SLIDE12_DATA.IN;
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

const s12Index = `import React from 'react';
import { useSlide12Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Search } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide12Props {
  language?: Language;
}

export const Slide12: React.FC<Slide12Props> = ({ language = 'IN' }) => {
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
  } = useSlide12Container(language);

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
        {/* Left Column: Context & Phase 1 Cards */}
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
                <Search className="w-3 h-3" />
                <span>{cardsBadge}</span>
              </span>
            </div>

            {cards.map((card, idx) => {
              const badgeColors = [
                'bg-blue-50 text-blue-700 border border-blue-100/60',
                'bg-emerald-50 text-emerald-700 border border-emerald-100/60',
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

export default Slide12;
`;

fs.writeFileSync(path.join(dir12, 'data.ts'), s12Data, 'utf8');
fs.writeFileSync(path.join(dir12, 'lottie.json'), JSON.stringify(s12Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir12, 'visual-3D.tsx'), s12Visual, 'utf8');
fs.writeFileSync(path.join(dir12, 'container.tsx'), s12Container, 'utf8');
fs.writeFileSync(path.join(dir12, 'index.tsx'), s12Index, 'utf8');
console.log('[OK] Created Slide 12');

// -------------------------------------------------------------
// STEP 3: BUILD SLIDE 13 - TAHAP 2 DEEP DIVE (HARI 31 - 60)
// -------------------------------------------------------------
console.log('==> Step 3: Creating Slide 13 (Tahap 2 Deep Dive - Hari 31 - 60)...');

const s13Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE13_DATA: Record<Language, {
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
      category: "Rencana Aksi Deep Dive",
      catalyst: "Tahap 2 [Hari 31 - 60]: Penetrasi Pasar & Akses C-Level",
      title: "Hari 31 - 60: Penetrasi Pasar, Pemetaan C-Level & Discovery Meeting"
    },
    descriptionTitle: "Aktivasi Jaringan Ring-2, Akses Pintu Direksi & Presentasi Solusi Dual Engine",
    descriptionText: "Bulan kedua adalah fase pergerakan eksternal agresif namun terukur. Mengaktifkan jaringan ring kedua untuk menembus pintu C-Level bank komersial menengah dalam <14 hari, menyusun Buying Centre Dossier, serta membuka minimal 2 discovery meeting resmi membawa proposisi Dual Engine tanpa risiko downtime.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 31 - 60",
    cardsBadge: "Akses C-Level",
    cards: [
      {
        id: "d60_ring2",
        code: "#01",
        title: "Aktivasi Ring Kedua & Penyusunan Buying Centre Dossier",
        badgeLabel: "Intelijen Akun",
        mandate: "Memetakan pengambil keputusan kunci di 3 bank komersial menengah target (Direktur IT, Bisnis, Risiko)",
        deliverable: "Dossier profil 3 bank target lengkap dengan kendala sistem lama dan jendela tender",
        riskMitigation: "Menghindari pendekatan acak atau cold calling yang tidak efektif"
      },
      {
        id: "d60_access",
        code: "#02",
        title: "Warm Introduction C-Level dalam Waktu <14 Hari",
        badgeLabel: "Akses Direksi",
        mandate: "Mengamankan pertemuan tingkat direksi melalui koneksi terpercaya di ekosistem perbankan",
        deliverable: "Jadwal executive meeting langsung dengan Direktur IT/CTO dan Kepala Divisi Pembayaran",
        riskMitigation: "Memotong siklus birokrasi perbankan berbulan-bulan menjadi hitungan hari"
      },
      {
        id: "d60_dual",
        code: "#03",
        title: "Presentasi Solusi Dual Engine & Pre-RFP Shaping",
        badgeLabel: "Dual Engine Pitch",
        mandate: "Memaparkan arsitektur koeksistensi paralel WAY4 yang memitigasi ketakutan dewan direksi atas risiko downtime",
        deliverable: "Executive brief solusi Dual Engine dan rancangan kriteria tender yang selaras dengan BSPI 2030",
        riskMitigation: "Menetralkan keberatan dewan direksi mengenai gangguan operasional perbankan"
      }
    ],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-60",
      tcoTitle: "Buying Centre Dossier",
      tcoValue: "3 Bank Target",
      tcoSub: "Profil C-Level & peta arsitektur lengkap",
      speedTitle: "Discovery Meeting Resmi",
      speedValue: "2+ Pertemuan",
      speedSub: "Tingkat Direktur IT / C-Suite",
      mandateTitle: "Kecepatan Akses Direksi",
      mandateValue: "<14 Hari",
      mandateSub: "Aktivasi personal warm network ring-2"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Akses Pintu C-Level",
        subtitle: "Menghubungkan proposisi WAY4 langsung ke pengambil keputusan tertinggi",
        metric: "Pintu Terbuka",
        tag: "Akses Direksi",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Eliminasi Ketakutan Migrasi",
        subtitle: "Membuktikan bahwa sistem lama tidak perlu dimatikan mendadak",
        metric: "Zero Downtime",
        tag: "Mitigasi Risiko",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Pengaruh Pra-Tender",
        subtitle: "Memasukkan kriteria modularitas dan SNAP BI sebelum tender dibuka",
        metric: "Pre-RFP Lock",
        tag: "Komersial",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "Kualifikasi Kebutuhan Nyata",
        subtitle: "Mengidentifikasi tanggal pasti tender dan alokasi anggaran belanja",
        metric: "Budget Match",
        tag: "Pipeline",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Hari ke-60 berhasil membuka akses dewan direksi bank target, menyajikan proposisi Dual Engine, dan mengunci komitmen discovery teknis.",
      target: "3 Dossier Bank Target · 2 Discovery Meeting Direksi"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 2 [Days 31 - 60]: Market Penetration & C-Level Access",
      title: "Days 31 - 60: Market Penetration, C-Level Access & Discovery Meetings"
    },
    descriptionTitle: "Ring-2 Network Activation, Boardroom Access & Dual Engine Presentation",
    descriptionText: "The second month shifts outward into disciplined commercial offense. Activating trusted ring-2 executive networks to unlock mid-tier bank boardrooms in <14 days, compiling comprehensive Buying Centre Dossiers, and conducting at least 2 executive discovery sessions with Dual Engine risk-free migration.",
    cardsTitle: "Key Initiatives & Deliverables for Days 31 - 60",
    cardsBadge: "C-Level Access",
    cards: [
      {
        id: "d60_ring2",
        code: "#01",
        title: "Ring-2 Network Activation & Buying Centre Dossiers",
        badgeLabel: "Account Intelligence",
        mandate: "Mapping key decision-makers across 3 targeted mid-tier commercial banks (CTO, Retail Business, Risk)",
        deliverable: "Comprehensive profile dossiers on 3 target banks outlining legacy pain points and replacement windows",
        riskMitigation: "Eliminating spray-and-pray cold outreach that wastes valuable commercial momentum"
      },
      {
        id: "d60_access",
        code: "#02",
        title: "Warm C-Level Introductions within <14 Days",
        badgeLabel: "Boardroom Access",
        mandate: "Securing boardroom-level discussions leveraging trusted relationships across the banking ecosystem",
        deliverable: "Confirmed executive briefing sessions with IT Directors/CTOs and Heads of Digital Payments",
        riskMitigation: "Compressing months of enterprise bureaucratic friction into matter of days"
      },
      {
        id: "d60_dual",
        code: "#03",
        title: "Dual Engine Presentation & Pre-RFP Shaping",
        badgeLabel: "Dual Engine Pitch",
        mandate: "Showcasing WAY4's parallel co-existence architecture to defuse board panic over downtime risks",
        deliverable: "Executive Dual Engine brief and baseline tender specifications aligned with BSPI 2030",
        riskMitigation: "Neutralizing board hesitation regarding operational payment disruptions"
      }
    ],
    metrics: {
      advantageTitle: "Day 60 Success Benchmarks",
      tcoTitle: "Buying Centre Dossiers",
      tcoValue: "3 Target Banks",
      tcoSub: "C-Level contacts & architectural maps",
      speedTitle: "Formal Discovery Meetings",
      speedValue: "2+ Sessions",
      speedSub: "IT Director & C-Suite level",
      mandateTitle: "Board Access Velocity",
      mandateValue: "<14 Days",
      mandateSub: "Ring-2 warm personal network engagement"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "C-Level Door Openers",
        subtitle: "Connecting WAY4 value directly with highest executive decision makers",
        metric: "Doors Open",
        tag: "Board Access",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Migration Fear De-Risking",
        subtitle: "Proving legacy switches do not face catastrophic cutover shutdowns",
        metric: "Zero Downtime",
        tag: "De-Risking",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Pre-Tender Criteria Shaping",
        subtitle: "Injecting modularity and SNAP BI requirements before RFPs go public",
        metric: "Pre-RFP Lock",
        tag: "Commercial",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "Real Budget Qualification",
        subtitle: "Identifying exact replacement project dates and Capex allocations",
        metric: "Budget Match",
        tag: "Pipeline",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Day 60 unlocks direct board access in target banks, presents the Dual Engine proposition, and secures technical discovery commitments.",
      target: "3 Target Bank Dossiers · 2 Executive Discovery Sessions"
    }
  }
};
`;

const s13Lottie = makeBaseLottie("Phase 2 Days 31-60 Lottie", [
  makeRectLayer(1, "Base Platform Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Phase 2 C-Level Slab", 280, 50, 250, 220, "#fef7e0", "#fbbc04", 3),
  makeRectLayer(3, "Discovery Meeting Radar Bar", 200, 28, 250, 210, "#ffffff", "#fbbc04", 2),
  makeCircleLayer(4, "Center Radar Pulse Node", 56, 250, 120, "#fbbc04", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "Ring-2 Network Left Node", 32, 140, 130, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(6, "C-Level Boardroom Right Node", 32, 360, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(7, "Dual Engine Solution Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s13Visual = `import React from 'react';
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

const s13Container = `import { useState } from 'react';
import { SLIDE13_DATA, Language } from './data';

export const useSlide13Container = (language: Language = 'IN') => {
  const data = SLIDE13_DATA[language] || SLIDE13_DATA.IN;
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

const s13Index = `import React from 'react';
import { useSlide13Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Target } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide13Props {
  language?: Language;
}

export const Slide13: React.FC<Slide13Props> = ({ language = 'IN' }) => {
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
  } = useSlide13Container(language);

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
        {/* Left Column: Context & Phase 2 Cards */}
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
                <Target className="w-3 h-3" />
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

export default Slide13;
`;

fs.writeFileSync(path.join(dir13, 'data.ts'), s13Data, 'utf8');
fs.writeFileSync(path.join(dir13, 'lottie.json'), JSON.stringify(s13Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir13, 'visual-3D.tsx'), s13Visual, 'utf8');
fs.writeFileSync(path.join(dir13, 'container.tsx'), s13Container, 'utf8');
fs.writeFileSync(path.join(dir13, 'index.tsx'), s13Index, 'utf8');
console.log('[OK] Created Slide 13');

// -------------------------------------------------------------
// STEP 4: BUILD SLIDE 14 - TAHAP 3 DEEP DIVE (HARI 61 - 90+)
// -------------------------------------------------------------
console.log('==> Step 4: Creating Slide 14 (Tahap 3 Deep Dive - Hari 61 - 90+)...');

const s14Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE14_DATA: Record<Language, {
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
      category: "Rencana Aksi Deep Dive",
      catalyst: "Tahap 3 [Hari 61 - 90+]: Akselerasi Pipeline & Closing",
      title: "Hari 61 - 90+: Akselerasi Pipeline, Validasi PoC & Komitmen Penjualan"
    },
    descriptionTitle: "Validasi Teknis Lapangan, Cross-Selling Modul Eksisting & Pembangunan Pipeline 12 Bulan",
    descriptionText: "Bulan ketiga adalah momentum panen hasil dan pembuktian komitmen jangka panjang. Menjalankan Proof of Concept (PoC) terukur untuk mengunci advokasi teknis komite, mengeksekusi cross-selling modul add-on bernilai tinggi ke akun eksisting, serta membangun komitmen pipeline 12 bulan senilai puluhan miliar rupiah yang siap diaudit.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 61 - 90+",
    cardsBadge: "Pipeline Closing",
    cards: [
      {
        id: "d90_poc",
        code: "#01",
        title: "Pelaksanaan Proof of Concept (PoC) & Uji Beban Terukur",
        badgeLabel: "Validasi PoC",
        mandate: "Memperagakan performa sub-detik TPS, kemudahan konfigurasi produk, dan kepatuhan SNAP BI di hadapan tim teknis bank",
        deliverable: "Laporan resmi hasil uji PoC yang ditandatangani arsitek bank sebagai rekomendasi komite",
        riskMitigation: "Mengubah keraguan evaluator teknis menjadi kepastian dukungan 100%"
      },
      {
        id: "d90_farming",
        code: "#02",
        title: "Eksekusi Cross-Selling Modul Add-on ke Akun Eksisting",
        badgeLabel: "Farming Closing",
        mandate: "Menutup kesepakatan penjualan modul tambahan (SoftPOS, Digital Wallet, SNAP BI Gateway) pada akun existing",
        deliverable: "Surat Pesanan Kerja (PO) atau amandemen kontrak ekspansi lisensi modul baru",
        riskMitigation: "Mempercepat revenue perolehan tanpa harus menunggu siklus tender bank baru yang panjang"
      },
      {
        id: "d90_pipeline",
        code: "#03",
        title: "Penguncian Komitmen Sales Pipeline 12 Bulan",
        badgeLabel: "Komitmen Pipeline",
        mandate: "Mengorganisir seluruh peluang terkualifikasi ke dalam pipeline terstruktur dan siap diaudit manajemen",
        deliverable: "Dashboard pipeline penjualan 12 bulan dengan tahapan deal, perkiraan nilai kontrak, dan waktu closing",
        riskMitigation: "Menjamin visibilitas pendapatan jangka panjang dan target penjualan tahunan OpenWay tercapai"
      }
    ],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-90",
      tcoTitle: "Komitmen Pipeline 12-Bulan",
      tcoValue: "12-Bulan Penuh",
      tcoSub: "Peluang terverifikasi & siap diaudit",
      speedTitle: "Validasi PoC Teknis",
      speedValue: "100% Berhasil",
      speedSub: "Lulus uji kepatuhan SNAP BI & TPS",
      mandateTitle: "Peluang Cross-Selling",
      mandateValue: "Min. 1 Modul",
      mandateSub: "Ekspansi modul baru di akun existing"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Kepercayaan Evaluator Teknis",
        subtitle: "Menjadikan tim arsitek bank sebagai promoter aktif penawaran WAY4",
        metric: "100% Buy-in",
        tag: "Advokasi",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Pendapatan Cepat (Quick Wins)",
        subtitle: "Menghasilkan revenue dari akun existing selagi menunggu tender bank baru",
        metric: "Quick Win",
        tag: "Revenue",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Ketahanan Pipeline Tahunan",
        subtitle: "Menghindari kekosongan proyek dengan pipeline berlapis multi-klien",
        metric: "High Value",
        tag: "Pipeline",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Kesiapan Tender Formal",
        subtitle: "Dokumen teknis dan komersial siap saat RFP resmi dirilis ke publik",
        metric: "Tender Ready",
        tag: "Closing",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Hari ke-90 membuktikan bahwa Harry bukan sekadar berjanji, melainkan menghadirkan hasil nyata: pipeline puluhan miliar rupiah yang terverifikasi.",
      target: "12-Month Sales Pipeline Terkunci · 100% PoC Approval"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 3 [Days 61 - 90+]: Pipeline Acceleration & Closing",
      title: "Days 61 - 90+: Pipeline Acceleration, PoC Validation & Sales Commitment"
    },
    descriptionTitle: "Field PoC Validation, Existing Account Add-ons & 12-Month Pipeline Commitment",
    descriptionText: "The third month is the conversion milestone proving long-term commercial delivery. Running focused Proof of Concept (PoC) benchmarks to cement technical advocacy, executing high-margin module cross-sells into existing accounts, and locking an audit-ready multi-billion IDR 12-month sales pipeline.",
    cardsTitle: "Key Initiatives & Deliverables for Days 61 - 90+",
    cardsBadge: "Pipeline Closing",
    cards: [
      {
        id: "d90_poc",
        code: "#01",
        title: "Proof of Concept (PoC) & Benchmark Execution",
        badgeLabel: "PoC Validation",
        mandate: "Demonstrating sub-second TPS latency, rapid product parameterization, and SNAP BI compliance before bank architects",
        deliverable: "Formal PoC sign-off report endorsed by bank technical leadership as key tender recommendation",
        riskMitigation: "Transforming technical evaluator skepticism into verified 100% advocacy"
      },
      {
        id: "d90_farming",
        code: "#02",
        title: "Existing Account Add-on Cross-Selling Execution",
        badgeLabel: "Farming Closing",
        mandate: "Closing add-on module expansions (SoftPOS, Digital Wallet, SNAP BI Gateway) with existing clients",
        deliverable: "Signed Purchase Orders (PO) or contract amendments for expanded module licenses",
        riskMitigation: "Accelerating near-term revenue generation without waiting for lengthy new bank tender cycles"
      },
      {
        id: "d90_pipeline",
        code: "#03",
        title: "12-Month Sales Pipeline Locking & Audit Readiness",
        badgeLabel: "Pipeline Commitment",
        mandate: "Structuring all qualified enterprise opportunities into a robust, auditable 12-month commercial pipeline",
        deliverable: "12-month sales pipeline dashboard detailing deal stages, weighted contract values, and closing timelines",
        riskMitigation: "Securing long-term revenue predictability and ensuring OpenWay annual quota achievement"
      }
    ],
    metrics: {
      advantageTitle: "Day 90 Success Benchmarks",
      tcoTitle: "12-Month Pipeline Commitment",
      tcoValue: "Full 12-Months",
      tcoSub: "Verified & audit-ready opportunities",
      speedTitle: "Technical PoC Validation",
      speedValue: "100% Success",
      speedSub: "Passed SNAP BI & TPS benchmark tests",
      mandateTitle: "Cross-Selling Opportunities",
      mandateValue: "Min. 1 Module",
      mandateSub: "New module add-ons in existing accounts"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Technical Evaluator Trust",
        subtitle: "Transforming bank architects into active promoters of WAY4 solutions",
        metric: "100% Buy-in",
        tag: "Advocacy",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Immediate Quick Wins",
        subtitle: "Generating high-margin revenue from existing accounts while courting new bank tenders",
        metric: "Quick Win",
        tag: "Revenue",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Annual Pipeline Resilience",
        subtitle: "Eliminating revenue droughts through multi-tiered multi-client opportunities",
        metric: "High Value",
        tag: "Pipeline",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Formal Tender Readiness",
        subtitle: "Comprehensive commercial and technical documentation primed before official RFP release",
        metric: "Tender Ready",
        tag: "Closing",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Day 90 proves Harry delivers measurable commercial execution: an audit-ready multi-billion IDR pipeline.",
      target: "12-Month Sales Pipeline Locked · 100% PoC Approval"
    }
  }
};
`;

const s14Lottie = makeBaseLottie("Phase 3 Days 61-90 Lottie", [
  makeRectLayer(1, "Base Platform Slabs Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Phase 3 Pipeline Victory Slab", 280, 50, 250, 220, "#e6f4ea", "#34a853", 3),
  makeRectLayer(3, "12-Month Sales Pipeline Bar", 200, 28, 250, 210, "#ffffff", "#34a853", 2),
  makeCircleLayer(4, "Center Pipeline Hub Node", 56, 250, 120, "#34a853", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "PoC Sign-off Left Node", 32, 140, 130, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(6, "Module Add-on Right Node", 32, 360, 130, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "12-Month Pipeline Trophy Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s14Visual = `import React from 'react';
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

const s14Container = `import { useState } from 'react';
import { SLIDE14_DATA, Language } from './data';

export const useSlide14Container = (language: Language = 'IN') => {
  const data = SLIDE14_DATA[language] || SLIDE14_DATA.IN;
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

const s14Index = `import React from 'react';
import { useSlide14Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide14Props {
  language?: Language;
}

export const Slide14: React.FC<Slide14Props> = ({ language = 'IN' }) => {
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
  } = useSlide14Container(language);

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
        {/* Left Column: Context & Phase 3 Cards */}
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
                <TrendingUp className="w-3 h-3" />
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

export default Slide14;
`;

fs.writeFileSync(path.join(dir14, 'data.ts'), s14Data, 'utf8');
fs.writeFileSync(path.join(dir14, 'lottie.json'), JSON.stringify(s14Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir14, 'visual-3D.tsx'), s14Visual, 'utf8');
fs.writeFileSync(path.join(dir14, 'container.tsx'), s14Container, 'utf8');
fs.writeFileSync(path.join(dir14, 'index.tsx'), s14Index, 'utf8');
console.log('[OK] Created Slide 14');

// -------------------------------------------------------------
// STEP 5: UPDATE slidesData.ts WITH 16 SLIDES METADATA
// -------------------------------------------------------------
console.log('==> Step 5: Updating slidesData.ts with all 16 slides metadata & speaker notes...');

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
      id: 16,
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
      title: "Conclusion, Integrity & Clean Enterprise Governance",
      subtitle: "Commitment to Sustainable Growth & Uncompromised Execution",
      category: "Conclusion & Governance",
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
console.log('[OK] Updated slidesData.ts for 16 slides');

// -------------------------------------------------------------
// STEP 6: UPDATE App.tsx WITH ALL 16 SLIDES
// -------------------------------------------------------------
console.log('==> Step 6: Updating App.tsx to support all 16 slides...');

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
console.log('[OK] Updated App.tsx for 16 slides');

console.log('=== [EXECUTE-PROMPT.md] All operations for 16 slides completed successfully! ===');
