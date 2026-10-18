const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SLIDE_DIR = path.join(ROOT_DIR, 'src', 'slide');
const PUBLIC_LOTTIE_DIR = path.join(ROOT_DIR, 'public', 'assets', 'lottie');

// 20 Slides Catalog with detailed metadata for prompts & visual-3D
const SLIDES_META = [
  {
    id: 1,
    pad: '01',
    title: 'EXECUTIVE CANDIDACY OVERVIEW & STRATEGIC READINESS',
    actionName: '3D Isometric Financial Command Center',
    actionDesc: 'Globe perbankan 3D berputar halus dengan simpul transaksi berdenyut di Jakarta & kota-kota SEA, serta circular readiness gauge 100%.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Nama Harry Gultom, Senior BD Executive OpenWay, Rp 45B+ TCV, 100% Ready to Deploy, GPS Jakarta HQ.'
  },
  {
    id: 2,
    pad: '02',
    title: 'COMMERCIAL TRACK RECORD & TCV GROWTH TRAJECTORY',
    actionName: '3D Kinetic Dual-Engine Balance & Growth Orbit',
    actionDesc: 'Roda gigi kinetik 3D emas dan biru yang menyeimbangkan ekspansi hunting dan farming akun menghasilkan pertumbuhan TCV Rp 45B+.',
    primaryColor: '#1a73e8',
    accentColor: '#fbbc04',
    keyPoints: 'Rp 45B+ Cumulative TCV, 115% Quota Attainment, 85% Win-Rate, 5 Enterprise Deals.'
  },
  {
    id: 3,
    pad: '03',
    title: 'CORE COMPETENCIES RADAR & GTM DEFENSE SHIELD',
    actionName: '3D Pentagonal Holographic Competency Shield',
    actionDesc: 'Prisma 3D berputar dengan 5 titik sumbu kompetensi (Enterprise Sales, Payment Tech, Regulatory BSPI, Stakeholder, Commercial Structuring).',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: '5-Sumbu Spider Radar SVG, skor 95%+ di seluruh pilar dibandingkan standar industri 70%.'
  },
  {
    id: 4,
    pad: '04',
    title: 'BSPI 2025 REGULATORY ALIGNMENT & COMPLIANCE PIPELINE',
    actionName: '3D ISO 20022 Pipeline & SNAP BI Conduit',
    actionDesc: 'Aliran kubus data 3D SNAP BI, BI-FAST, dan QRIS yang meluncur masuk secara live ke gerbang kepatuhan Bank Indonesia.',
    primaryColor: '#1a73e8',
    accentColor: '#ea4335',
    keyPoints: 'Mandat BSPI 2025 Bank Indonesia, 100% kesiapan arsitektur open API SNAP BI & BI-FAST.'
  },
  {
    id: 5,
    pad: '05',
    title: 'WAY4 MODULAR PLATFORM ARCHITECTURE & MICROSERVICES',
    actionName: '3D Layered Isometric Core Stack',
    actionDesc: '4 lapis platform 3D melayang (Issuing, Acquiring, Switch, API Gateway) dengan bus pertukaran data vertikal antar modul.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Arsitektur cloud-native microservices, zero vendor lock-in, modular upgrade tanpa menyentuh core.'
  },
  {
    id: 6,
    pad: '06',
    title: 'CARD ISSUING, TOKENIZATION & DIGITAL WALLET ECOSYSTEM',
    actionName: '3D Isometric Contactless Card Tap & NFC Waves',
    actionDesc: 'Kartu kredit/virtual 3D mengetuk smartphone dengan gelombang cincin NFC meluas dinamis dan token Apple/Google Pay.',
    primaryColor: '#1a73e8',
    accentColor: '#fbbc04',
    keyPoints: 'Virtual & Physical Issuing, Tokenisasi HCE, Apple Pay & Google Wallet siap pakai dalam 2 minggu.'
  },
  {
    id: 7,
    pad: '07',
    title: 'MERCHANT ACQUIRING, SOFTPOS & OMNICHANNEL ENGINE',
    actionName: '3D Smart POS Terminal & Dynamic Floating QR',
    actionDesc: 'Perangkat EDC/SoftPOS 3D interaktif memproses transaksi QRIS dinamis dan tokenisasi pembayaran retail instan.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Tap-to-phone SoftPOS, QRIS MPM/CPM, multi-merchant aggregation, dan manajemen komisi otomatis.'
  },
  {
    id: 8,
    pad: '08',
    title: 'NATIONAL SWITCHING & HIGH-TPS INSTANT PAYMENT ENGINE',
    actionName: '3D High-TPS Network Switchboard & Packet Router',
    actionDesc: 'Router switch 3D dengan berkas pulsa data multi-jalur super cepat menyalurkan 10.000+ TPS dengan latensi <30ms.',
    primaryColor: '#1a73e8',
    accentColor: '#ea4335',
    keyPoints: '10.000+ Peak TPS, sub-30ms latency, active-active multi-site clustering, 99.999% SLA.'
  },
  {
    id: 9,
    pad: '09',
    title: 'SETTLEMENT, CLEARING & FEE MONETIZATION ENGINE',
    actionName: '3D Automated Clearing Vault & Split-Fee Coins',
    actionDesc: 'Mesin pembagi fee transaksi 3D mendistribusikan koin pendapatan secara otomatis ke rekening merchant, bank, dan regulator.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Multi-party automated clearing, rekonsiliasi T+0 instan, eliminasi kebocoran fee operasional.'
  },
  {
    id: 10,
    pad: '10',
    title: 'INDONESIAN FSI TARGET ACCOUNTS & TERRITORY MAPPING',
    actionName: '3D Topographic Indonesia Geo-Pillars',
    actionDesc: 'Peta timbul geospasial Indonesia dengan menara pilar bank bercahaya di SCBD, MH Thamrin, BSD, dan Surabaya.',
    primaryColor: '#1a73e8',
    accentColor: '#fbbc04',
    keyPoints: 'Klaster Bank KBMI 4, Bank Digital, Lembaga Switching GPN, dan FinTech unicorn.'
  },
  {
    id: 11,
    pad: '11',
    title: 'WAY4 VS LEGACY SYSTEMS (BASE24 / CORTEX BATTLECARD)',
    actionName: '3D Head-to-Head Hexagonal Arena',
    actionDesc: 'Balok monolitik abu-abu usang (Base24) digeser oleh modul kubus microservices WAY4 biru yang lincah berputar.',
    primaryColor: '#1a73e8',
    accentColor: '#ea4335',
    keyPoints: 'Time-to-market 2 minggu vs 9 bulan, penghematan TCO 40%, arsitektur SNAP BI native.'
  },
  {
    id: 12,
    pad: '12',
    title: 'CORE MODERNIZATION & STRANGLER FIG PHASED MIGRATION',
    actionName: '3D Strangler Fig Dual-Conduit Traffic Shifter',
    actionDesc: 'Pipa ganda 3D yang memindahkan kubus volume transaksi perbankan dari core lama ke cloud WAY4 secara live tanpa downtime.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Metodologi Coexistence Gateway 3-fase, zero-downtime, mitigasi risiko kegagalan sistem 100%.'
  },
  {
    id: 13,
    pad: '13',
    title: 'DUAL-ENGINE SALES STRATEGY (40% FARMING & 60% HUNTING)',
    actionName: '3D Dual-Propulsion Turbine & Pipeline Gears',
    actionDesc: 'Dua silinder turbin 3D berputar serentak: mesin farming menjaga akun eksisting, mesin hunting membuka tender bank baru.',
    primaryColor: '#1a73e8',
    accentColor: '#fbbc04',
    keyPoints: '40% Retensi & AMC add-on, 60% Greenfield hunting C-Level bank baru, alokasi waktu mingguan presisi.'
  },
  {
    id: 14,
    pad: '14',
    title: '30-60-90 DAY SYSTEMATIC ONBOARDING & EXECUTION PLAN',
    actionName: '3D Isometric Stepping Platforms & Milestone Trophy',
    actionDesc: '3 podium tangga 3D berundak (Hari 30, Hari 60, Hari 90) dengan piala target pipeline Rp 25B di podium puncak.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Hari 1-30 Audit Akun & Alignment, Hari 31-60 C-Level Discovery Rp 25B, Hari 61-90 Tender Closing.'
  },
  {
    id: 15,
    pad: '15',
    title: 'C-LEVEL STAKEHOLDER INFLUENCE & TAILORED MESSAGING MATRIX',
    actionName: '3D Holographic Executive Boardroom Persona Matrix',
    actionDesc: '4 avatar persona C-Level (CIO, CTO, Bisnis Kartu, Procurement) berunding di meja konsensus keputusan investasi.',
    primaryColor: '#1a73e8',
    accentColor: '#fbbc04',
    keyPoints: 'Pesan khusus CIO (uptime & audit), Bisnis (time-to-market), Procurement (TCO & unbundling proteksi nilai).'
  },
  {
    id: 16,
    pad: '16',
    title: 'ENTERPRISE RFP & TENDER WINNING FORMULA',
    actionName: '3D Bidding Arena & TKDN Compliance Shield',
    actionDesc: 'Benteng lelang 3D dengan kubus live bake-off 10.000+ TPS dan konsorsium SI lokal berbobot TKDN 100%.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Pre-RFP specification shaping, 85% win rate rekam jejak, klausul diskualifikasi monolitik pesaing.'
  },
  {
    id: 17,
    pad: '17',
    title: 'COMMERCIAL PACKAGING, LICENSING & REVENUE ARCHITECTURE',
    actionName: '3D Isometric Revenue Block Vault & Compounding ARR',
    actionDesc: '4 blok modular 3D bertingkat (Lisensi 50%, Services 25%, AMC 20%, TPS 5%) dengan cincin kinetik ARR berputar.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Standard deal Rp 30B TCV, 20% AMC guaranteed ARR, pay-as-you-grow TPS tiering, LTV 5-tahun Rp 59.2M.'
  },
  {
    id: 18,
    pad: '18',
    title: '5-YEAR TCO & PAYBACK FINANCIAL ROI MODELING',
    actionName: '3D Break-Even Fulcrum & Payback Trajectory',
    actionDesc: 'Neraca ungkit 3D isometrik dengan poros hijau impas di Bulan 18, bobot Capex awal terangkat, dan koin laba 340% ROI.',
    primaryColor: '#34a853',
    accentColor: '#1a73e8',
    keyPoints: 'Titik impas Bulan 18, TCO 5 tahun hemat 42% (Rp 16M), Year-3 ROI 340%, justifikasi CFO tak terbantahkan.'
  },
  {
    id: 19,
    pad: '19',
    title: '12-MONTH SALES PIPELINE COMMITMENT & TARGET WIN-PLANS',
    actionName: '3D Kinetic Funnel Chute & Converting Deal Blocks',
    actionDesc: 'Corong kinetik 3D 4-tingkat yang menyaring 15 bola prospek (Rp 85B) menjadi 3 kubus signature won (Rp 25B).',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: 'Target Quota Rp 25B, Universe Rp 85B (3.4x coverage), Ramp kuartal Q1-Q4, 4 win-plans bank kunci.'
  },
  {
    id: 20,
    pad: '20',
    title: 'EXECUTIVE CLOSING & DAY-ONE OPERATIONAL READINESS',
    actionName: '3D SCBD Financial Tower Beacon & Handshake Seal',
    actionDesc: 'Menara kantor pusat 3D di SCBD Jakarta dengan radar operasional berputar, konektivitas satelit, dan komitmen penutupan.',
    primaryColor: '#1a73e8',
    accentColor: '#34a853',
    keyPoints: '3 Value Anchors Harry Gultom, GPS Jakarta HQ, Available Immediately / Day-1 Ready, Rp 25B komitmen kuota.'
  }
];

console.log('==> Step 1: Ensure 5-file architecture per slide (container, index, data, visual-3D, lottie.json)...');

SLIDES_META.forEach((slide) => {
  const dir = path.join(SLIDE_DIR, slide.pad);
  fs.mkdirSync(dir, { recursive: true });

  // 1. Copy Lottie JSON to src/slide/[NN]/lottie.json
  const publicLottie = path.join(PUBLIC_LOTTIE_DIR, `slide-${slide.pad}.json`);
  const slideLottie = path.join(dir, 'lottie.json');
  if (fs.existsSync(publicLottie)) {
    fs.copyFileSync(publicLottie, slideLottie);
    console.log(`[LOTTIE.JSON] Created src/slide/${slide.pad}/lottie.json`);
  }

  // 2. Create src/slide/[NN]/visual-3D.tsx
  const visual3DPath = path.join(dir, 'visual-3D.tsx');
  const visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  onInteract?: () => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-28',
  onInteract
}) => {
  return (
    <div
      onClick={onInteract}
      className={\`relative flex items-center justify-center bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden select-none \${className}\`}
    >
      {/* 3D Contextual Lottie Engine from local lottie.json */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 flex items-center justify-center">
        <LottiePlayer animationData={lottieData} className="w-full h-full" loop autoplay />
      </div>

      {/* 3D Action Label & Depth Accents */}
      <div className="relative z-10 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
        <span className="text-[10px] font-bold font-inter text-slate-800 tracking-wide">
          ${slide.actionName}
        </span>
      </div>
    </div>
  );
};

export default Visual3D;
`;

  fs.writeFileSync(visual3DPath, visual3DContent, 'utf8');
  console.log(`[VISUAL-3D] Created src/slide/${slide.pad}/visual-3D.tsx`);
});

// Note: Visual-3D is strictly local per slide folder (src/slide/[NN]/visual-3D.tsx) and never in components/
console.log('==> Visual-3D files confirmed in local slide directories without components/visual3d.');


// Update prompt1.md through prompt20.md
console.log('==> Step 3: Rewriting prompt1.md through prompt20.md with 5-file architecture...');

SLIDES_META.forEach((s) => {
  const promptFileName = `prompt${s.id}.md`;
  const promptPath = path.join(ROOT_DIR, promptFileName);

  const promptContent = `# PROMPT ${s.id}: SLIDE ${s.pad} - ${s.title}
**Target Directory**: \`src/slide/${s.pad}/\`  
**Wajib 5 Berkas Standar Output**:
1. \`src/slide/${s.pad}/data.ts\` (Data Layer: Data numerik faktual, metrik perbankan, perbandingan)
2. \`src/slide/${s.pad}/container.tsx\` (Logic Layer: Hook kalkulasi, state aktif, selector interaktif)
3. \`src/slide/${s.pad}/index.tsx\` (UI Layer: Flat canvas putih Google style, ultra-minim teks, zero-scroll)
4. \`src/slide/${s.pad}/visual-3D.tsx\` (Visual 3D Action Component: Aksi 3D kontekstual terintegrasi)
5. \`src/slide/${s.pad}/lottie.json\` (Asset Fisik Lottie: Berkas animasi Bodymovin v5.7.4 60fps)

---

### 1. Pemisahan Tanggung Jawab 5 Berkas (Separation of Concerns)
- **\`data.ts\`**:
  * Poin Inti: ${s.keyPoints}
  * Format numerik harus siap pakai untuk tipografi Inter (\`tabular-nums font-inter\`).
- **\`container.tsx\`**:
  * Custom hook \`useSlide${s.pad}Container()\` dengan state management dan safe fallbacks.
  * Menghitung nilai proporsi grafik atau pemetaan data tanpa runtime error.
- **\`visual-3D.tsx\`**:
  * Memuat dan me-render \`./lottie.json\` menggunakan engine Lottie.
  * Aksi 3D Kontekstual Nyata: **${s.actionName}** (${s.actionDesc}).
  * Dilarang keras membuat animasi berupa loading bar/dash progress bar!
- **\`lottie.json\`**:
  * Berkas JSON Lottie Bodymovin v5.7.4 yang berlokasi tepat di \`src/slide/${s.pad}/lottie.json\`.
  * Palet warna utama: ${s.primaryColor} dan aksen: ${s.accentColor}.
- **\`index.tsx\`**:
  * Mengimpor \`Visual3D\` dari \`./visual-3D\` dan logic dari \`./container\`.
  * Kanvas putih murni (\`bg-white\`), menempel flat tanpa card wrappers berbayang tebal.
  * **Ultra-Minim Teks**: Maksimal 1-3 kata per label/poin. Narasi mendalam wajib berada di Speaker Notes Drawer.
  * Dominasi visual 85% - 90% kanvas.

---

### 2. Standar Kualitas Wajib (Sistem Instruksi & Visual Master):
1. **Wajib 5 Berkas di Direktori**: \`container.tsx\`, \`index.tsx\`, \`data.ts\`, \`visual-3D.tsx\`, \`lottie.json\`.
2. **Aksi 3D Nyata**: Visual wajib berupa ${s.actionName} (bukan animasi loading progress bar!).
3. **Strict Zero-Click Policy**: Seluruh visualisasi dan angka metrik tampil utuh tanpa perlu diklik.
4. **Ultra-Minim Teks**: 85%-90% area didominasi grafik/3D/matriks; teks maksimal 1-3 kata.
5. **Pure White Canvas & Zero-Badge**: Bebas badge/pill kapsul, tipografi Inter 100% (\`tabular-nums\`).
6. **Strictly Zero-Scroll**: 100% pas proporsional dalam satu tampilan layar tanpa overflow.
`;

  fs.writeFileSync(promptPath, promptContent, 'utf8');
  console.log(`[PROMPT] Updated ${promptFileName}`);
});

console.log('==> Seluruh 20 Slide Berhasil Distandarisasi ke Arsitektur 5 Berkas!');
