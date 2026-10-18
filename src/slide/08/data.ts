export type Language = 'IN' | 'EN';

export interface MarketSpecItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface MarketOpportunityPoint {
  id: string;
  segment: string;
  module: string;
  x: number; // 0-100 Time to Go-Live Speed
  y: number; // 0-100 Fee-Based Income Potential
  dealWindow: string;
  capexSavings: string;
  targetBanks: string;
}

export interface DigitalModuleItem {
  name: string;
  tag: string;
  impact: string;
  painPointSolved: string;
  revenueModel: string;
}

export interface DigitalBenchmark {
  label: string;
  conventional: string;
  way4Solution: string;
  efficiency: string;
  percentage: number;
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE08_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  marketSpecs: MarketSpecItem[];
  digitalModules: DigitalModuleItem[];
  quadrantTitle: string;
  quadrantSubtitle: string;
  quadrantLabels: {
    q1: { title: string; desc: string };
    q2: { title: string; desc: string };
    q3: { title: string; desc: string };
    q4: { title: string; desc: string };
  };
  quadrantPoints: MarketOpportunityPoint[];
  benchmarkTitle: string;
  benchmarkSubtitle: string;
  benchmarks: DigitalBenchmark[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Core Stack Deep Dive · Layer 3 [Atas]",
      catalyst: "Ekspansi Bank Menengah, Ekosistem Fintech & Monetisasi Modul Bernilai Tinggi",
      title: "Layer 3: Peluang Pasar, Kanal Digital & Integrasi Open API"
    },
    dossierTitle: "Planning Account Note: Monetisasi Cepat Kanal Digital & Ekosistem Merchant",
    dossierSubtitle: "Ekspansi 40+ Bank Komersial Menengah & Digital Tanpa Menunggu Migrasi Core 2 Tahun",
    dossierSummary: "Bank-bank menengah membutuhkan fee-based income kilat tanpa merombak core switch lama. Modul digital overlay WAY4 (SoftPOS, Digital Wallet, Open API SNAP BI) dapat go-live dalam 8-12 minggu, memangkas biaya capex mesin EDC hingga 65% dan menghubungkan ekosistem fintech secara native.",
    marketSpecs: [
      { label: "Target Pasar Potensial", value: "40+ Bank Menengah", sub: "KBMI 3/2 & Bank Digital Nasional", highlight: true },
      { label: "Waktu Go-Live Modul", value: "8 - 12 Minggu", sub: "Integrasi overlay tanpa ganggu core", highlight: true },
      { label: "Efisiensi Capex EDC", value: "Hemat hingga 65%", sub: "Migrasi SoftPOS smartphone Android" },
      { label: "Konektivitas Open API", value: "Native SNAP BI", sub: "Koneksi instan fintech & e-commerce" }
    ],
    digitalModules: [
      {
        name: "WAY4 SoftPOS (Tap-on-Phone)",
        tag: "Inovasi Merchant",
        impact: "Mengubah smartphone Android merchant menjadi mesin EDC penerima kartu & QRIS.",
        painPointSolved: "Eliminasi biaya pembelian mesin EDC fisik (Rp 4.5 Juta/unit) dan biaya logistik servis.",
        revenueModel: "Biaya setup software terjangkau + bagi hasil MDR transaksi merchant mikro."
      },
      {
        name: "Digital Wallet & Instant Tokenization",
        tag: "Digital Banking",
        impact: "Penerbitan kartu debit/kredit virtual instan dengan dukungan tokenisasi Apple Pay & Google Pay.",
        painPointSolved: "Mengatasi ketergantungan pencetakan kartu fisik plastik yang memakan waktu 14 hari.",
        revenueModel: "Peningkatan volume transaksi e-commerce & retensi nasabah usia produktif."
      },
      {
        name: "SNAP BI Open API Payment Gateway",
        tag: "Ekosistem Fintech",
        impact: "Gateway standar Bank Indonesia untuk integrasi instan dengan marketplace unicorn & multifinance.",
        painPointSolved: "Menghindari koding kustom integrasi API individual yang memakan waktu 6-8 bulan.",
        revenueModel: "Fee-based income per API call transfer, direct debit, dan virtual account."
      }
    ],
    quadrantTitle: "Kuadran Peluang Monetisasi Modul Digital FSI",
    quadrantSubtitle: "Sumbu X: Kecepatan Go-Live (Bulan) · Sumbu Y: Potensi Fee-Based Income",
    quadrantLabels: {
      q1: { title: "Quick Revenue Engine", desc: "Go-live kilat (<3 bln) & potensi pendapatan komisi tinggi" },
      q2: { title: "Strategic Ecosystem Moat", desc: "Kemitraan strategis fintech unicorn dengan volume masif" },
      q3: { title: "Volume & Card Retention", desc: "Digital wallet & virtual card untuk akuisisi nasabah muda" },
      q4: { title: "Niche Specialized Add-on", desc: "Modul korporasi multi-currency & supply chain finance" }
    },
    quadrantPoints: [
      { id: "m1", segment: "Merchant SoftPOS Acquirer", module: "SoftPOS Engine", x: 85, y: 88, dealWindow: "Q2 2026", capexSavings: "Hemat Capex 65%", targetBanks: "15 Bank Komersial" },
      { id: "m2", segment: "Ekosistem Fintech & E-Commerce", module: "SNAP BI Open API", x: 75, y: 82, dealWindow: "Q1 2026", capexSavings: "Zero Custom Bridge", targetBanks: "10 Bank Digital & BUMN" },
      { id: "m3", segment: "Virtual Card & Tokenization", module: "Digital Wallet", x: 80, y: 55, dealWindow: "Q3 2026", capexSavings: "Hemat Kartu Fisik", targetBanks: "12 Bank Konsumer" },
      { id: "m4", segment: "BPD Regional Cash Management", module: "Host-to-Host Gov", x: 40, y: 65, dealWindow: "Q4 2026", capexSavings: "Integritas Pemda", targetBanks: "8 BPD Terpilih" }
    ],
    benchmarkTitle: "Efisiensi Finansial & Operasional Modul Digital WAY4",
    benchmarkSubtitle: "Komparasi Pendekatan Konvensional vs Solusi Digital Overlay WAY4",
    benchmarks: [
      { label: "Biaya Akuisisi Terminal Merchant (per 10.000 titik)", conventional: "Rp 45 Miliar (Mesin EDC)", way4Solution: "Rp 8 Miliar (SoftPOS)", efficiency: "Hemat 82.2%", percentage: 82 },
      { label: "Time-to-Market Peluncuran Modul", conventional: "36 - 48 Minggu", way4Solution: "8 - 12 Minggu", efficiency: "4x Lebih Cepat", percentage: 75 },
      { label: "Biaya Pemeliharaan & Integrasi API Tahunan", conventional: "Rp 12 Miliar", way4Solution: "Rp 3.5 Miliar", efficiency: "Hemat 70.8%", percentage: 71 }
    ],
    pillars: [
      { index: "01", tag: "RAPID GO-LIVE", title: "< 90 Hari Deployment", subtitle: "Solusi overlay plug-and-play tanpa rombak core", metric: "8-12 Mgg" },
      { index: "02", tag: "CAPEX SAVINGS", title: "65% Efisiensi EDC", subtitle: "Eliminasi ketergantungan pengadaan hardware fisik", metric: "-65% Capex" },
      { index: "03", tag: "API NATIVE", title: "Gateway SNAP BI", subtitle: "Standar Bank Indonesia siap pakai untuk fintech", metric: "100% Native" },
      { index: "04", tag: "FEE-BASED", title: "+38% Transaksi", subtitle: "Percepatan pertumbuhan komisi transaksi merchant", metric: "+38% Vol" }
    ],
    takeaway: {
      proof: "Modul digital WAY4 telah diimplementasikan sukses di puluhan institusi finansial global dan regional.",
      target: "Layer 3 Target: Pipeline Penjualan Add-on Senilai Rp 15M - 25M dari Akun Eksisting & Menengah"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive · Layer 3 [Top]",
      catalyst: "Mid-Tier Bank Expansion, Fintech Ecosystems & High-Value Module Monetization",
      title: "Layer 3: Market Opportunity, Digital Channels & Open API Integration"
    },
    dossierTitle: "Planning Account Note: Rapid Monetization of Digital Channels & Merchant Ecosystems",
    dossierSubtitle: "Expansion Across 40+ Mid-Tier Commercial & Digital Banks Without 2-Year Core Delays",
    dossierSummary: "Mid-tier banks urgently require rapid fee-based income without overhauling legacy core switches. WAY4 overlay digital modules (SoftPOS, Digital Wallet, Open API SNAP BI) go live within 8-12 weeks, cutting physical EDC CAPEX by up to 65% while natively connecting fintech ecosystems.",
    marketSpecs: [
      { label: "Target Market Pipeline", value: "40+ Mid-Tier Banks", sub: "KBMI 3/2 & National Digital Banks", highlight: true },
      { label: "Module Go-Live Window", value: "8 - 12 Weeks", sub: "Overlay integration without core downtime", highlight: true },
      { label: "EDC CAPEX Reduction", value: "Up to 65% Savings", sub: "Android smartphone SoftPOS migration" },
      { label: "Open API Connectivity", value: "Native SNAP BI", sub: "Instant hook to fintechs & marketplaces" }
    ],
    digitalModules: [
      {
        name: "WAY4 SoftPOS (Tap-on-Phone)",
        tag: "Merchant Innovation",
        impact: "Transforms commercial Android smartphones into contactless card & QRIS payment terminals.",
        painPointSolved: "Eliminates physical EDC hardware acquisition (IDR 4.5M/unit) and field maintenance costs.",
        revenueModel: "Low software onboarding fee + recurring MDR transaction revenue sharing."
      },
      {
        name: "Digital Wallet & Instant Tokenization",
        tag: "Digital Banking",
        impact: "Instant virtual debit/credit card issuance with native Apple Pay & Google Pay tokenization.",
        painPointSolved: "Overcomes 14-day plastic card printing and physical courier delivery delays.",
        revenueModel: "Higher e-commerce transaction frequency & retention of tech-savvy depositors."
      },
      {
        name: "SNAP BI Open API Payment Gateway",
        tag: "Fintech Ecosystem",
        impact: "Bank Indonesia standard gateway for seamless connections to unicorn platforms and multifinance.",
        painPointSolved: "Avoids 6-8 months of custom bilateral point-to-point API development per partner.",
        revenueModel: "Fee-based income per API call across transfer, direct debit, and virtual accounts."
      }
    ],
    quadrantTitle: "FSI Digital Module Monetization Matrix",
    quadrantSubtitle: "X-Axis: Go-Live Speed (Months) · Y-Axis: Fee-Based Income Potential",
    quadrantLabels: {
      q1: { title: "Quick Revenue Engine", desc: "Rapid go-live (<3 mos) with high fee-based income return" },
      q2: { title: "Strategic Ecosystem Moat", desc: "Fintech unicorn partnerships driving high-volume payments" },
      q3: { title: "Volume & Card Retention", desc: "Digital wallet & virtual card programs attracting depositors" },
      q4: { title: "Niche Specialized Add-on", desc: "Corporate multi-currency wallet & supply chain tools" }
    },
    quadrantPoints: [
      { id: "m1", segment: "Merchant SoftPOS Acquirer", module: "SoftPOS Engine", x: 85, y: 88, dealWindow: "Q2 2026", capexSavings: "Save 65% Capex", targetBanks: "15 Commercial Banks" },
      { id: "m2", segment: "Fintech & E-Commerce Hub", module: "SNAP BI Open API", x: 75, y: 82, dealWindow: "Q1 2026", capexSavings: "Zero Custom Bridge", targetBanks: "10 Digital & SOE Banks" },
      { id: "m3", segment: "Virtual Card & Tokenization", module: "Digital Wallet", x: 80, y: 55, dealWindow: "Q3 2026", capexSavings: "Cut Plastic Issuance", targetBanks: "12 Consumer Banks" },
      { id: "m4", segment: "Regional Gov Cash Management", module: "Host-to-Host Gov", x: 40, y: 65, dealWindow: "Q4 2026", capexSavings: "Gov Audit Integrity", targetBanks: "8 Regional Banks" }
    ],
    benchmarkTitle: "Financial & Operational Efficiency of WAY4 Digital Modules",
    benchmarkSubtitle: "Comparative Analysis: Conventional Hardware vs WAY4 Digital Overlay",
    benchmarks: [
      { label: "Merchant POS Terminal Fleet Cost (per 10k units)", conventional: "IDR 45 Billion (Physical EDC)", way4Solution: "IDR 8 Billion (SoftPOS)", efficiency: "Save 82.2%", percentage: 82 },
      { label: "Module Go-Live Time-to-Market", conventional: "36 - 48 Weeks", way4Solution: "8 - 12 Weeks", efficiency: "4x Faster", percentage: 75 },
      { label: "Annual API Maintenance & Integration Costs", conventional: "IDR 12 Billion", way4Solution: "IDR 3.5 Billion", efficiency: "Save 70.8%", percentage: 71 }
    ],
    pillars: [
      { index: "01", tag: "RAPID GO-LIVE", title: "< 90 Days Deployment", subtitle: "Plug-and-play overlay avoiding core switch replacement", metric: "8-12 Wks" },
      { index: "02", tag: "CAPEX SAVINGS", title: "65% EDC Cost Cut", subtitle: "Eliminates reliance on expensive physical POS hardware", metric: "-65% Capex" },
      { index: "03", tag: "API NATIVE", title: "SNAP BI Gateway", subtitle: "Pre-certified Bank Indonesia open banking connection", metric: "100% Native" },
      { index: "04", tag: "FEE-BASED", title: "+38% Txn Volume", subtitle: "Accelerates growth of merchant fee-based revenues", metric: "+38% Vol" }
    ],
    takeaway: {
      proof: "WAY4 digital modules are successfully deployed across dozens of leading global and regional financial institutions.",
      target: "Layer 3 Target: IDR 15B - 25B Add-On Sales Pipeline from Existing and Mid-Tier Accounts"
    }
  }
};
