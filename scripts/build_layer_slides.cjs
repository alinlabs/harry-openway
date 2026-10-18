const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const SLIDE_DIR = path.join(SRC_DIR, 'slide');

console.log('=== [EXECUTE-PROMPT.md] Starting Layer Slides 08, 09, 10 Generator & 13-Slide Architecture ===');

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

// -------------------------------------------------------------
// STEP 1: SHIFT EXISTING SLIDES 10 -> 13, 09 -> 12, 08 -> 11
// -------------------------------------------------------------
console.log('==> Step 1: Shifting existing slides (10->13, 09->12, 08->11)...');

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

// 1. Shift 10 -> 13
const dir10 = path.join(SLIDE_DIR, '10');
const dir13 = path.join(SLIDE_DIR, '13');
if (fs.existsSync(dir10)) {
  removeDirRecursive(dir13);
  copyDirRecursive(dir10, dir13);
  // Update internal names in 13
  const d13Path = path.join(dir13, 'data.ts');
  if (fs.existsSync(d13Path)) {
    let c = fs.readFileSync(d13Path, 'utf8');
    c = c.replace(/SLIDE10_DATA/g, 'SLIDE13_DATA');
    fs.writeFileSync(d13Path, c, 'utf8');
  }
  const c13Path = path.join(dir13, 'container.tsx');
  if (fs.existsSync(c13Path)) {
    let c = fs.readFileSync(c13Path, 'utf8');
    c = c.replace(/SLIDE10_DATA/g, 'SLIDE13_DATA');
    c = c.replace(/Slide10Controller/g, 'Slide13Controller');
    c = c.replace(/useSlide10Container/g, 'useSlide13Container');
    fs.writeFileSync(c13Path, c, 'utf8');
  }
  const i13Path = path.join(dir13, 'index.tsx');
  if (fs.existsSync(i13Path)) {
    let c = fs.readFileSync(i13Path, 'utf8');
    c = c.replace(/useSlide10Container/g, 'useSlide13Container');
    c = c.replace(/Slide10Props/g, 'Slide13Props');
    c = c.replace(/Slide10/g, 'Slide13');
    fs.writeFileSync(i13Path, c, 'utf8');
  }
  console.log('[OK] Shifted 10 -> 13 (Battlecard)');
}

// 2. Shift 09 -> 12
const dir09 = path.join(SLIDE_DIR, '09');
const dir12 = path.join(SLIDE_DIR, '12');
if (fs.existsSync(dir09)) {
  removeDirRecursive(dir12);
  copyDirRecursive(dir09, dir12);
  // Update internal names in 12
  const d12Path = path.join(dir12, 'data.ts');
  if (fs.existsSync(d12Path)) {
    let c = fs.readFileSync(d12Path, 'utf8');
    c = c.replace(/SLIDE09_DATA/g, 'SLIDE12_DATA');
    fs.writeFileSync(d12Path, c, 'utf8');
  }
  const c12Path = path.join(dir12, 'container.tsx');
  if (fs.existsSync(c12Path)) {
    let c = fs.readFileSync(c12Path, 'utf8');
    c = c.replace(/SLIDE09_DATA/g, 'SLIDE12_DATA');
    c = c.replace(/Slide09Controller/g, 'Slide12Controller');
    c = c.replace(/useSlide09Container/g, 'useSlide12Container');
    fs.writeFileSync(c12Path, c, 'utf8');
  }
  const i12Path = path.join(dir12, 'index.tsx');
  if (fs.existsSync(i12Path)) {
    let c = fs.readFileSync(i12Path, 'utf8');
    c = c.replace(/useSlide09Container/g, 'useSlide12Container');
    c = c.replace(/Slide09Props/g, 'Slide12Props');
    c = c.replace(/Slide09/g, 'Slide12');
    fs.writeFileSync(i12Path, c, 'utf8');
  }
  console.log('[OK] Shifted 09 -> 12 (Conclusion & Governance)');
}

// 3. Shift 08 -> 11
const dir08 = path.join(SLIDE_DIR, '08');
const dir11 = path.join(SLIDE_DIR, '11');
if (fs.existsSync(dir08)) {
  removeDirRecursive(dir11);
  copyDirRecursive(dir08, dir11);
  // Update internal names in 11
  const d11Path = path.join(dir11, 'data.ts');
  if (fs.existsSync(d11Path)) {
    let c = fs.readFileSync(d11Path, 'utf8');
    c = c.replace(/SLIDE08_DATA/g, 'SLIDE11_DATA');
    fs.writeFileSync(d11Path, c, 'utf8');
  }
  const c11Path = path.join(dir11, 'container.tsx');
  if (fs.existsSync(c11Path)) {
    let c = fs.readFileSync(c11Path, 'utf8');
    c = c.replace(/SLIDE08_DATA/g, 'SLIDE11_DATA');
    c = c.replace(/Slide08Controller/g, 'Slide11Controller');
    c = c.replace(/useSlide08Container/g, 'useSlide11Container');
    fs.writeFileSync(c11Path, c, 'utf8');
  }
  const i11Path = path.join(dir11, 'index.tsx');
  if (fs.existsSync(i11Path)) {
    let c = fs.readFileSync(i11Path, 'utf8');
    c = c.replace(/useSlide08Container/g, 'useSlide11Container');
    c = c.replace(/Slide08Props/g, 'Slide11Props');
    c = c.replace(/Slide08/g, 'Slide11');
    fs.writeFileSync(i11Path, c, 'utf8');
  }
  console.log('[OK] Shifted 08 -> 11 (30-60-90 Days Plan)');
}

// Remove old 08, 09, 10 dirs to write fresh content
removeDirRecursive(dir08);
removeDirRecursive(dir09);
removeDirRecursive(dir10);

fs.mkdirSync(dir08, { recursive: true });
fs.mkdirSync(dir09, { recursive: true });
fs.mkdirSync(dir10, { recursive: true });

// -------------------------------------------------------------
// STEP 2: BUILD SLIDE 08 - LAYER 3 DEEP DIVE (PELUANG PASAR & KANAL DIGITAL BARU)
// -------------------------------------------------------------
console.log('==> Step 2: Creating Slide 08 (Layer 3 Deep Dive - Market Opportunities & Digital Channels)...');

const s08Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE08_DATA: Record<Language, {
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
      category: "Core Stack Deep Dive",
      catalyst: "Layer 3 [Atas]: Ekspansi Pasar & Kanal Digital",
      title: "Layer 3: Peluang Pasar, Kanal Digital & Integrasi Open API"
    },
    descriptionTitle: "Ekspansi Bank Komersial, Ekosistem Fintech & Monetisasi Modul Baru",
    descriptionText: "Membuka pasar baru pada bank komersial menengah melalui adopsi modul digital modern WAY4. Mengakselerasi time-to-market peluncuran produk tanpa merombak core lama, serta menghubungkan ekosistem merchant dan fintech unicorn secara native melalui Open API SNAP BI.",
    cardsTitle: "Katalog Modul Digital & Vektor Ekspansi Pasar",
    cardsBadge: "Ekspansi Pasar",
    cards: [
      {
        id: "l3_snap",
        code: "#01",
        title: "Open API SNAP BI Gateway & Integrasi Pembayaran",
        badgeLabel: "Standardisasi BI",
        mandate: "Standarisasi interkoneksi open banking Bank Indonesia, integrasi instan ke fintech unicorn & aggregators",
        deliverable: "Modul Gateway SNAP BI bawaan dengan otentikasi ISO 20022 dan latensi transaksi sub-detik",
        riskMitigation: "Pemasangan tanpa gateway middleware pihak ketiga, mengeliminasi titik kegagalan integrasi"
      },
      {
        id: "l3_wallet",
        code: "#02",
        title: "Digital Wallet Engine & In-App Payment",
        badgeLabel: "Fintech Ready",
        mandate: "White-label wallet perbankan, saldo tersimpan (stored-value), loyalty reward closed & open-loop",
        deliverable: "WAY4 Digital Wallet Engine multi-channel dengan integrasi mobile banking instan",
        riskMitigation: "Sertifikasi keamanan standar industri dan pemisahan ledger transaksi real-time"
      },
      {
        id: "l3_softpos",
        code: "#03",
        title: "Merchant SoftPOS & QRIS Cross-Border",
        badgeLabel: "Merchant Acquirer",
        mandate: "Penerimaan transaksi nirsentuh NFC via smartphone tanpa hardware EDC konvensional",
        deliverable: "Aplikasi WAY4 SoftPOS tersertifikasi Visa/Mastercard & modul QRIS Cross-Border",
        riskMitigation: "Pengurangan drastis capex hardware bank dan eliminasi biaya logistik mesin EDC fisik"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Keunggulan Kanal Digital",
      tcoTitle: "Time-to-Market Modul",
      tcoValue: "<3 Bulan",
      tcoSub: "vs 9-12 bulan di arsitektur monolitik",
      speedTitle: "Efisiensi Capex EDC Fisik",
      speedValue: "-60% Biaya",
      speedSub: "SoftPOS memangkas armada hardware fisik",
      mandateTitle: "Konektivitas Open API",
      mandateValue: "100% Native",
      mandateSub: "Standar Bank Indonesia SNAP BI Gateway"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Agilitas Modul Digital",
        subtitle: "Peluncuran fitur transaksi baru tanpa merombak sistem perbankan inti",
        metric: "Peluncuran Kilat",
        tag: "Time-to-Market",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Inklusi Ekosistem Fintech",
        subtitle: "Koneksi langsung ke e-commerce unicorn, payment gateway, dan fintech peer-to-peer",
        metric: "Ekosistem Luas",
        tag: "Interkoneksi",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Monetisasi Fee-Based Income",
        subtitle: "Mendongkrak volume transaksi perbankan dan penerimaan biaya layanan merchant",
        metric: "Revenue Naik",
        tag: "Profitabilitas",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "Penetrasi Merchant SoftPOS",
        subtitle: "Mengubah smartphone merchant menjadi terminal pembayaran nirsentuh seketika",
        metric: "Zero Hardware",
        tag: "Efisiensi Bank",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 3 memberikan pendapatan baru bagi bank secara cepat tanpa menunggu perombakan core sistem lama.",
      target: "Time-to-Market <3 Bulan · 100% Native SNAP BI"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive",
      catalyst: "Layer 3 [Top]: Market Expansion & Digital Channels",
      title: "Layer 3: Market Opportunities, Digital Channels & Open APIs"
    },
    descriptionTitle: "Commercial Bank Expansion, Fintech Ecosystems & High-Value Add-ons",
    descriptionText: "Unlocking new revenue frontiers across commercial mid-tier banks via modern WAY4 digital modules. Accelerating product time-to-market without touching legacy core switches, connecting merchant and fintech ecosystems natively through SNAP BI Open APIs.",
    cardsTitle: "Digital Module Catalog & Market Expansion Vectors",
    cardsBadge: "Market Expansion",
    cards: [
      {
        id: "l3_snap",
        code: "#01",
        title: "Open API SNAP BI Gateway & Payment Integration",
        badgeLabel: "BI Standard",
        mandate: "Bank Indonesia open banking interconnection compliance, instant fintech unicorn & aggregator integration",
        deliverable: "Built-in SNAP BI Gateway module with ISO 20022 authentication and sub-second transaction latency",
        riskMitigation: "Zero third-party middleware patching, eliminating operational integration failure points"
      },
      {
        id: "l3_wallet",
        code: "#02",
        title: "Digital Wallet Engine & In-App Payment",
        badgeLabel: "Fintech Ready",
        mandate: "Bank white-label wallets, stored-value accounts, and closed/open-loop merchant loyalty rewards",
        deliverable: "Omnichannel WAY4 Digital Wallet Engine with plug-and-play mobile banking SDKs",
        riskMitigation: "Industry-standard security certification with real-time isolated transaction ledgers"
      },
      {
        id: "l3_softpos",
        code: "#03",
        title: "Merchant SoftPOS & Cross-Border QRIS",
        badgeLabel: "Merchant Acquirer",
        mandate: "Contactless NFC merchant payment acceptance on consumer smartphones without bulky EDC hardware",
        deliverable: "Visa/Mastercard certified WAY4 SoftPOS application and Regional Cross-Border QRIS module",
        riskMitigation: "Drastic hardware capex reduction and elimination of physical EDC maintenance logistics"
      }
    ],
    metrics: {
      advantageTitle: "Digital Channel Advantage Parameters",
      tcoTitle: "Module Time-to-Market",
      tcoValue: "<3 Months",
      tcoSub: "vs 9-12 months on monolithic systems",
      speedTitle: "Physical EDC Capex Savings",
      speedValue: "-60% Cost",
      speedSub: "SoftPOS replaces dedicated hardware fleets",
      mandateTitle: "Open API Connectivity",
      mandateValue: "100% Native",
      mandateSub: "Bank Indonesia SNAP BI Gateway Standard"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Digital Module Agility",
        subtitle: "Rapid rollout of new payment channels without re-architecting core legacy banking",
        metric: "Rapid Launch",
        tag: "Time-to-Market",
        accentColor: "#fbbc04"
      },
      {
        id: "p2",
        index: "02",
        title: "Fintech Ecosystem Inclusion",
        subtitle: "Direct native connectivity into major e-commerce unicorns, superapps, and gateways",
        metric: "Broad Ecosystem",
        tag: "Interconnection",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Fee-Based Income Monetization",
        subtitle: "Substantially growing retail payment transaction volumes and merchant service charges",
        metric: "Revenue Growth",
        tag: "Profitability",
        accentColor: "#34a853"
      },
      {
        id: "p4",
        index: "04",
        title: "SoftPOS Merchant Penetration",
        subtitle: "Instantly converting merchant smartphones into secure, contactless payment terminals",
        metric: "Zero Hardware",
        tag: "Bank Efficiency",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 3 delivers fast, non-disruptive fee revenue for banks without awaiting massive core overhaul.",
      target: "Time-to-Market <3 Months · 100% Native SNAP BI"
    }
  }
};
`;

const s08Lottie = makeBaseLottie("Layer 3 Digital Channels Lottie", [
  makeRectLayer(1, "Base Isometric Shadow", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Layer 3 Top Golden Slab", 280, 50, 250, 220, "#fef7e0", "#fbbc04", 3),
  makeRectLayer(3, "Digital Wallet Engine Card", 180, 28, 250, 210, "#ffffff", "#fbbc04", 1.5),
  makeCircleLayer(4, "Center Mobile NFC Node", 56, 250, 120, "#fbbc04", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "SNAP BI API Left Node", 32, 140, 130, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(6, "SoftPOS Merchant Right Node", 32, 360, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(7, "QRIS Cross-Border Top Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s08Visual = `import React from 'react';
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

const s08Container = `import { useState } from 'react';
import { SLIDE08_DATA, Language } from './data';

export const useSlide08Container = (language: Language = 'IN') => {
  const data = SLIDE08_DATA[language] || SLIDE08_DATA.IN;
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

const s08Index = `import React from 'react';
import { useSlide08Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Smartphone } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide08Props {
  language?: Language;
}

export const Slide08: React.FC<Slide08Props> = ({ language = 'IN' }) => {
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
  } = useSlide08Container(language);

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
        {/* Left Column: Context & Layer 3 Digital Channel Cards */}
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
                <Smartphone className="w-3 h-3" />
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

export default Slide08;
`;

fs.writeFileSync(path.join(dir08, 'data.ts'), s08Data, 'utf8');
fs.writeFileSync(path.join(dir08, 'lottie.json'), JSON.stringify(s08Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir08, 'visual-3D.tsx'), s08Visual, 'utf8');
fs.writeFileSync(path.join(dir08, 'container.tsx'), s08Container, 'utf8');
fs.writeFileSync(path.join(dir08, 'index.tsx'), s08Index, 'utf8');
console.log('[OK] Created Slide 08');

// -------------------------------------------------------------
// STEP 3: BUILD SLIDE 09 - LAYER 2 DEEP DIVE (WAY4 CORE PLATFORM & TIER-1 BLUEPRINTS)
// -------------------------------------------------------------
console.log('==> Step 3: Creating Slide 09 (Layer 2 Deep Dive - WAY4 Core Platform & Tier-1 Blueprints)...');

const s09Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE09_DATA: Record<Language, {
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
      category: "Core Stack Deep Dive",
      catalyst: "Layer 2 [Tengah]: Cetak Biru Inti WAY4",
      title: "Layer 2: Cetak Biru Platform Inti WAY4 & Replikasi Tier-1"
    },
    descriptionTitle: "Replikasi Cetak Biru Teruji BRI, Finnet & ASBANDA ke Bank Komersial",
    descriptionText: "Mengurangi risiko implementasi bank komersial dengan mengadopsi platform inti WAY4 yang sudah terbukti menangani skala transaksi terbesar di Indonesia. Menghadirkan engine switching 10.000+ TPS, Card Management System terlengkap, dan strategi migrasi Dual Engine tanpa downtime operasional.",
    cardsTitle: "Cetak Biru Produksi Platform Inti WAY4",
    cardsBadge: "Platform Inti",
    cards: [
      {
        id: "l2_cms",
        code: "#01",
        title: "WAY4 Card Management System (CMS) Enterprise",
        badgeLabel: "CMS & Issuing",
        mandate: "Penerbitan kartu debit, kredit, kartu virtual multi-valuta, manajemen parameter limit instan",
        deliverable: "Modul WAY4 CMS lengkap dengan rule-engine dinamis tanpa intervensi source code",
        riskMitigation: "Konfigurasi produk baru dalam hitungan hari, bukan 6-9 bulan seperti di legacy"
      },
      {
        id: "l2_switch",
        code: "#02",
        title: "High-Throughput Switching & National Clearing",
        badgeLabel: "10.000+ TPS",
        mandate: "Pemrosesan transaksi volume tinggi saat hari gajian & flash sale dengan latensi <15ms",
        deliverable: "Engine switching multi-bank dengan integrasi GPN, BI-FAST, Visa, Mastercard, JCB",
        riskMitigation: "Arsitektur cloud-native active-active dengan failover otomatis tanpa jeda"
      },
      {
        id: "l2_dual",
        code: "#03",
        title: "Strategi Migrasi Paralel Dual Engine",
        badgeLabel: "Zero Downtime",
        mandate: "Menghentikan ketakutan direksi terhadap kegagalan migrasi 'big bang' dari sistem legacy",
        deliverable: "Arsitektur gateway koeksistensi: sistem lama tetap aktif sembari memindahkan volume ke WAY4",
        riskMitigation: "Kemampuan rollback instan tanpa gangguan layanan perbankan satu detik pun"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Keandalan Platform Inti",
      tcoTitle: "Kapasitas Throughput",
      tcoValue: "10,000+ TPS",
      tcoSub: "Benchmarked sub-second transaction latency",
      speedTitle: "Jangkar Tier-1 Teruji",
      speedValue: "3 Blueprint",
      speedSub: "BRI, Finnet, ASBANDA/BPDNet",
      mandateTitle: "Jaminan Ketersediaan",
      mandateValue: "99.999% SLA",
      mandateSub: "Arsitektur cloud-native zero downtime"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Produksi Skala Nasional",
        subtitle: "Teruji di bank terbesar Indonesia menangani puluhan juta transaksi harian",
        metric: "Teruji Nyata",
        tag: "Validasi Lapangan",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Migrasi Tanpa Downtime",
        subtitle: "Dual Engine memindahkan lalu lintas data tanpa risiko cutover mendadak",
        metric: "Zero Disruption",
        tag: "Mitigasi Risiko",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "Parameterisasi No-Code",
        subtitle: "Tim bisnis dapat merilis jenis kartu dan promosi baru tanpa ketergantungan programmer",
        metric: "Agilitas Bisnis",
        tag: "Efisiensi Opex",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Interoperabilitas Standar Global",
        subtitle: "Standarisasi ISO 20022 siap integrasi pembayaran regional dan jaringan global",
        metric: "Standar Dunia",
        tag: "Masa Depan",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 2 membuktikan bahwa bank komersial tidak perlu mengambil risiko eksperimen; solusi WAY4 sudah teruji di level tertinggi perbankan nasional.",
      target: "10.000+ TPS Teruji · 99.999% Availability"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive",
      catalyst: "Layer 2 [Middle]: WAY4 Core Platform",
      title: "Layer 2: WAY4 Core Platform Blueprints & Tier-1 Replication"
    },
    descriptionTitle: "Replicating Proven BRI, Finnet & ASBANDA Blueprints into Commercial Banks",
    descriptionText: "De-risking commercial bank core modernization by replicating WAY4 platform blueprints proven at Indonesia's highest transaction volumes. Delivering 10,000+ TPS switching engines, robust Card Management Systems, and parallel Dual Engine zero-downtime migration.",
    cardsTitle: "WAY4 Core Production Platform Blueprints",
    cardsBadge: "Core Platform",
    cards: [
      {
        id: "l2_cms",
        code: "#01",
        title: "WAY4 Enterprise Card Management System (CMS)",
        badgeLabel: "CMS & Issuing",
        mandate: "Multi-currency debit, credit, virtual card issuance, dynamic limit & fee management",
        deliverable: "Comprehensive WAY4 CMS module with dynamic business rule-engines without code edits",
        riskMitigation: "Configuring new card products in days rather than 6-9 months on legacy stacks"
      },
      {
        id: "l2_switch",
        code: "#02",
        title: "High-Throughput Switching & National Clearing",
        badgeLabel: "10,000+ TPS",
        mandate: "Peak payday transaction processing resilience with sub-15ms processing latency",
        deliverable: "Multi-bank switching engine integrated natively with GPN, BI-FAST, Visa, Mastercard",
        riskMitigation: "Active-active cloud-native architecture with seamless zero-latency failover"
      },
      {
        id: "l2_dual",
        code: "#03",
        title: "Parallel Dual Engine Migration Strategy",
        badgeLabel: "Zero Downtime",
        mandate: "Alleviating boardroom panic over high-risk 'big-bang' legacy switch cutover failures",
        deliverable: "Parallel co-existence gateway architecture: legacy stays live while migrating traffic to WAY4",
        riskMitigation: "Instant rollback assurance with zero seconds of banking service disruption"
      }
    ],
    metrics: {
      advantageTitle: "Core Reliability Advantage Parameters",
      tcoTitle: "Throughput Capacity",
      tcoValue: "10,000+ TPS",
      tcoSub: "Benchmarked sub-second transaction latency",
      speedTitle: "Proven Tier-1 Anchors",
      speedValue: "3 Blueprints",
      speedSub: "BRI, Finnet, ASBANDA/BPDNet",
      mandateTitle: "Availability SLA",
      mandateValue: "99.999% SLA",
      mandateSub: "Cloud-native zero downtime architecture"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "National Scale Production",
        subtitle: "Field-proven at Indonesia's largest banks processing tens of millions of daily transactions",
        metric: "Field Proven",
        tag: "Validation",
        accentColor: "#1a73e8"
      },
      {
        id: "p2",
        index: "02",
        title: "Zero-Downtime Migration",
        subtitle: "Dual Engine shifts live traffic gradually without catastrophic cutover hazards",
        metric: "Zero Disruption",
        tag: "De-Risking",
        accentColor: "#34a853"
      },
      {
        id: "p3",
        index: "03",
        title: "No-Code Business Parameterization",
        subtitle: "Business units roll out new card products and promotions without IT dev backlogs",
        metric: "Business Agility",
        tag: "Opex Efficiency",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Global Interoperability",
        subtitle: "ISO 20022 message standardization ready for regional and global payment schemes",
        metric: "Global Standard",
        tag: "Future Ready",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 2 assures commercial bank leadership that WAY4 is thoroughly tested at national scale with zero experimental risk.",
      target: "10,000+ Benchmarked TPS · 99.999% Availability"
    }
  }
};
`;

const s09Lottie = makeBaseLottie("Layer 2 Core Switching Slabs Lottie", [
  makeRectLayer(1, "Base Server Chassis", 320, 24, 250, 310, "#f1f3f4", "#dadce0", 1),
  makeRectLayer(2, "Layer 2 Middle Blue Slab", 280, 50, 250, 220, "#e8f0fe", "#1a73e8", 3),
  makeRectLayer(3, "High-TPS Core Switching Bar", 200, 28, 250, 210, "#ffffff", "#1a73e8", 2),
  makeCircleLayer(4, "Center Core Switching Hub", 56, 250, 120, "#1a73e8", "#ffffff", 3, 100, true),
  makeCircleLayer(5, "CMS Card Issuing Left Node", 32, 140, 130, "#34a853", "#ffffff", 2, 90),
  makeCircleLayer(6, "Dual Engine Migration Right Node", 32, 360, 130, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(7, "BI-FAST & GPN Clearing Node", 26, 250, 50, "#ea4335", "#ffffff", 2, 90)
]);

const s09Visual = `import React from 'react';
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

const s09Container = `import { useState } from 'react';
import { SLIDE09_DATA, Language } from './data';

export const useSlide09Container = (language: Language = 'IN') => {
  const data = SLIDE09_DATA[language] || SLIDE09_DATA.IN;
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

const s09Index = `import React from 'react';
import { useSlide09Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide09Props {
  language?: Language;
}

export const Slide09: React.FC<Slide09Props> = ({ language = 'IN' }) => {
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
  } = useSlide09Container(language);

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
        {/* Left Column: Context & Layer 2 Core Platform Cards */}
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
                <Layers className="w-3 h-3" />
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

export default Slide09;
`;

fs.writeFileSync(path.join(dir09, 'data.ts'), s09Data, 'utf8');
fs.writeFileSync(path.join(dir09, 'lottie.json'), JSON.stringify(s09Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir09, 'visual-3D.tsx'), s09Visual, 'utf8');
fs.writeFileSync(path.join(dir09, 'container.tsx'), s09Container, 'utf8');
fs.writeFileSync(path.join(dir09, 'index.tsx'), s09Index, 'utf8');
console.log('[OK] Created Slide 09');

// -------------------------------------------------------------
// STEP 4: BUILD SLIDE 10 - LAYER 1 DEEP DIVE (COMPLIANCE & FOUNDATION BSPI 2030)
// -------------------------------------------------------------
console.log('==> Step 4: Creating Slide 10 (Layer 1 Deep Dive - Compliance & Foundation BSPI 2030)...');

const s10Data = `export type Language = 'IN' | 'EN';

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

export const SLIDE10_DATA: Record<Language, {
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
      category: "Core Stack Deep Dive",
      catalyst: "Layer 1 [Fondasi]: Kepatuhan & Tata Kelola",
      title: "Layer 1: Fondasi Kepatuhan Regulasi & Standar BSPI 2030"
    },
    descriptionTitle: "Mandat Bank Indonesia, Kedaulatan Data & Standar Kepatuhan Tertinggi",
    descriptionText: "Fondasi kokoh yang memastikan seluruh modernisasi perbankan memenuhi regulasi Bank Indonesia BSPI 2030, kepatuhan OJK, dan standar keamanan PCI-DSS Level 1. Dilengkapi tata kelola pengadaan berintegritas tinggi setara standar BUMN dan LKPP, menjamin proyek 100% bebas sengketa audit.",
    cardsTitle: "Pilar Regulasi, Kedaulatan & Tata Kelola Bersih",
    cardsBadge: "Fondasi Kepatuhan",
    cards: [
      {
        id: "l1_bspi",
        code: "#01",
        title: "Mandat Blueprint Sistem Pembayaran Indonesia (BSPI 2030)",
        badgeLabel: "BSPI 2030",
        mandate: "Kepatuhan penuh atas arah kebijakan sistem pembayaran Bank Indonesia menuju ekosistem digital terbuka",
        deliverable: "Arsitektur modern modular yang mendukung Open API standar nasional dan pelaporan regulator",
        riskMitigation: "Menghindarkan bank dari penalti regulator dan kewajiban audit berulang"
      },
      {
        id: "l1_pci",
        code: "#02",
        title: "Sertifikasi Keamanan Transaksi & PCI-DSS Level 1",
        badgeLabel: "PCI-DSS L1",
        mandate: "Perlindungan data nasabah dengan enkripsi data-at-rest dan data-in-transit berstandar militer",
        deliverable: "Modul HSM (Hardware Security Module) terintegrasi dan sistem tokenisasi data kartu",
        riskMitigation: "Perlindungan mutlak dari ancaman kebocoran data dengan track record global zero breach"
      },
      {
        id: "l1_gov",
        code: "#03",
        title: "Tata Kelola Pengadaan Bersih & 100% Auditable",
        badgeLabel: "Zero Dispute",
        mandate: "Menjaga integritas komersial dan proses tender tanpa celah benturan kepentingan",
        deliverable: "Dossier kepatuhan vendor lengkap dengan rekam jejak integritas setara LKPP/BUMN",
        riskMitigation: "Proses pengadaan transparan, terprediksi, dan lolos audit kepatuhan internal/eksternal"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Kepatuhan & Tata Kelola",
      tcoTitle: "Kepatuhan Regulasi",
      tcoValue: "100% Native",
      tcoSub: "Selaras penuh roadmap BI BSPI 2030",
      speedTitle: "Sertifikasi Keamanan",
      speedValue: "PCI-DSS L1",
      speedSub: "Standar keamanan perbankan tertinggi",
      mandateTitle: "Rekam Jejak Kepatuhan",
      mandateValue: "Zero Dispute",
      mandateSub: "16 tahun reputasi komersial bersih & auditable"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Kepastian Regulasi Bank Indonesia",
        subtitle: "Menyelaraskan strategi TI bank dengan mandat regulator nasional",
        metric: "100% Patuh",
        tag: "Mandat BI",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Kedaulatan Data Finansial",
        subtitle: "Fleksibilitas deployment on-premise atau private cloud di dalam wilayah hukum Indonesia",
        metric: "Data Sovereign",
        tag: "Kedaulatan Data",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Perlindungan Risiko Operasional",
        subtitle: "Menghilangkan titik kritis risiko kepatuhan yang dapat menghentikan bisnis perbankan",
        metric: "Risk Shield",
        tag: "Mitigasi Risiko",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Integritas Komersial Tanpa Kompromi",
        subtitle: "Menjamin proses pengadaan yang bersih, transparan, dan dapat dipertanggungjawabkan",
        metric: "100% Auditable",
        tag: "Tata Kelola",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 1 memberikan rasa aman bagi dewan direksi dan komisaris bahwa transformasi perbankan ini 100% patuh hukum dan berintegritas tinggi.",
      target: "100% BSPI 2030 Native · Zero Audit Dispute"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive",
      catalyst: "Layer 1 [Bottom]: Regulatory & Governance",
      title: "Layer 1: Regulatory Compliance Foundation & BSPI 2030"
    },
    descriptionTitle: "Bank Indonesia Regulatory Mandate, Data Sovereignty & Audit Readiness",
    descriptionText: "The rock-solid foundation ensuring all banking modernization adheres strictly to Bank Indonesia BSPI 2030 mandates, OJK regulations, and PCI-DSS Level 1 security standards. Backed by high-integrity enterprise governance meeting BUMN and LKPP benchmarks, guaranteeing zero audit disputes.",
    cardsTitle: "Regulatory Pillars, Sovereignty & Governance",
    cardsBadge: "Compliance Base",
    cards: [
      {
        id: "l1_bspi",
        code: "#01",
        title: "Bank Indonesia Payment System Blueprint Mandate (BSPI 2030)",
        badgeLabel: "BSPI 2030",
        mandate: "Strict adherence to central bank payment modernizations towards an open, interconnected financial ecosystem",
        deliverable: "Modular cloud-native architecture natively supporting national open APIs and regulatory audit telemetry",
        riskMitigation: "De-risking banks from non-compliance fines, regulatory sanctions, and continuous audit disclaimers"
      },
      {
        id: "l1_pci",
        code: "#02",
        title: "Transaction Security & PCI-DSS Level 1 Certification",
        badgeLabel: "PCI-DSS L1",
        mandate: "Military-grade end-to-end encryption for data-at-rest and data-in-transit across all payment nodes",
        deliverable: "Integrated Hardware Security Module (HSM) connectors and high-speed card data tokenization",
        riskMitigation: "Absolute protection against data breaches backed by OpenWay's global zero-breach track record"
      },
      {
        id: "l1_gov",
        code: "#03",
        title: "Clean Enterprise Procurement Governance & 100% Auditable",
        badgeLabel: "Zero Dispute",
        mandate: "Upholding uncompromised commercial ethics and conflict-of-interest-free tender proceedings",
        deliverable: "Turnkey vendor risk dossiers meeting stringent state-owned enterprise (BUMN) and LKPP benchmarks",
        riskMitigation: "Transparent, predictable procurement pipelines passing all internal and statutory audits"
      }
    ],
    metrics: {
      advantageTitle: "Compliance & Governance Parameters",
      tcoTitle: "Regulatory Compliance",
      tcoValue: "100% Native",
      tcoSub: "Fully aligned with BI BSPI 2030 roadmap",
      speedTitle: "Security Certification",
      speedValue: "PCI-DSS L1",
      speedSub: "Highest tier banking security benchmark",
      mandateTitle: "Governance Track Record",
      mandateValue: "Zero Dispute",
      mandateSub: "16-year dispute-free clean enterprise reputation"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Bank Indonesia Regulatory Certainty",
        subtitle: "Harmonizing bank IT transformation directly with central bank directives",
        metric: "100% Compliant",
        tag: "BI Mandate",
        accentColor: "#34a853"
      },
      {
        id: "p2",
        index: "02",
        title: "Financial Data Sovereignty",
        subtitle: "Flexible deployment options on-premises or private sovereign cloud in Indonesia",
        metric: "Data Sovereign",
        tag: "Sovereignty",
        accentColor: "#1a73e8"
      },
      {
        id: "p3",
        index: "03",
        title: "Operational Risk Insulation",
        subtitle: "Eliminating critical compliance bottlenecks that could halt commercial banking licenses",
        metric: "Risk Shield",
        tag: "De-Risking",
        accentColor: "#fbbc04"
      },
      {
        id: "p4",
        index: "04",
        title: "Uncompromising Commercial Integrity",
        subtitle: "Ensuring clean, ethical, and fully accountable commercial procurement management",
        metric: "100% Auditable",
        tag: "Clean Gov",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Layer 1 provides absolute peace of mind for bank boards and commissioners that core transformation is fully compliant and ethical.",
      target: "100% BSPI 2030 Native · Zero Audit Dispute"
    }
  }
};
`;

const s10Lottie = makeBaseLottie("Layer 1 Foundation Compliance Lottie", [
  makeRectLayer(1, "Base Server Chassis Foundation", 340, 50, 250, 280, "#e6f4ea", "#34a853", 3),
  makeRectLayer(2, "Compliance Shield Slab Bar", 240, 28, 250, 270, "#ffffff", "#34a853", 2),
  makeCircleLayer(3, "Center Security Shield Node", 60, 250, 160, "#34a853", "#ffffff", 3, 100, true),
  makeCircleLayer(4, "Bank Indonesia BSPI Left Node", 32, 140, 170, "#1a73e8", "#ffffff", 2, 90),
  makeCircleLayer(5, "PCI-DSS Right Node", 32, 360, 170, "#fbbc04", "#ffffff", 2, 90),
  makeCircleLayer(6, "Audit Shield Top Node", 28, 250, 70, "#ea4335", "#ffffff", 2, 90)
]);

const s10Visual = `import React from 'react';
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

const s10Container = `import { useState } from 'react';
import { SLIDE10_DATA, Language } from './data';

export const useSlide10Container = (language: Language = 'IN') => {
  const data = SLIDE10_DATA[language] || SLIDE10_DATA.IN;
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

const s10Index = `import React from 'react';
import { useSlide10Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Shield } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide10Props {
  language?: Language;
}

export const Slide10: React.FC<Slide10Props> = ({ language = 'IN' }) => {
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
  } = useSlide10Container(language);

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
        {/* Left Column: Context & Layer 1 Compliance Cards */}
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

export default Slide10;
`;

fs.writeFileSync(path.join(dir10, 'data.ts'), s10Data, 'utf8');
fs.writeFileSync(path.join(dir10, 'lottie.json'), JSON.stringify(s10Lottie, null, 2), 'utf8');
fs.writeFileSync(path.join(dir10, 'visual-3D.tsx'), s10Visual, 'utf8');
fs.writeFileSync(path.join(dir10, 'container.tsx'), s10Container, 'utf8');
fs.writeFileSync(path.join(dir10, 'index.tsx'), s10Index, 'utf8');
console.log('[OK] Created Slide 10');

// -------------------------------------------------------------
// STEP 5: UPDATE slidesData.ts WITH 13 SLIDES METADATA
// -------------------------------------------------------------
console.log('==> Step 5: Updating slidesData.ts with all 13 slides metadata & speaker notes...');

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
      id: 13,
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
      id: 13,
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
console.log('[OK] Updated slidesData.ts');

// -------------------------------------------------------------
// STEP 6: UPDATE App.tsx WITH ALL 13 SLIDES
// -------------------------------------------------------------
console.log('==> Step 6: Updating App.tsx to support all 13 slides...');

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
console.log('[OK] Updated App.tsx');

console.log('=== [EXECUTE-PROMPT.md] All operations completed successfully! ===');
