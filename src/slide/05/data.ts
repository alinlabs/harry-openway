export type Language = 'IN' | 'EN';

export interface TechSpecItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface TechQuadrantPoint {
  id: string;
  name: string;
  type: string;
  x: number; // 0-100 TPS Throughput
  y: number; // 0-100 Modern Architecture / Cloud readiness
  tps: string;
  latency: string;
  snapBiStatus: string;
}

export interface TechBenchmark {
  metric: string;
  way4Value: string;
  legacyValue: string;
  advantage: string;
  progressPercent: number; // 0-100
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE05_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  techSpecs: TechSpecItem[];
  influencerRoles: {
    role: string;
    focus: string;
    concern: string;
    championHook: string;
  }[];
  quadrantTitle: string;
  quadrantSubtitle: string;
  quadrantLabels: {
    q1: { title: string; desc: string };
    q2: { title: string; desc: string };
    q3: { title: string; desc: string };
    q4: { title: string; desc: string };
  };
  quadrantPoints: TechQuadrantPoint[];
  benchmarkTitle: string;
  benchmarkSubtitle: string;
  benchmarks: TechBenchmark[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Technical Evaluation Dossier · Tier 2 Architecture & Ops",
      catalyst: "Benchmark Kinerja & Uji Beban Transaksi Nyata",
      title: "Tier 2: Arsitektur Enterprise, VP Operasional & Tim Evaluasi"
    },
    dossierTitle: "Planning Account Note: Konversi Evaluator Menjadi Internal Champion",
    dossierSubtitle: "Uji Stres 10.000+ TPS, Standar Native SNAP BI, & Arsitektur Dual Engine Coexistence",
    dossierSummary: "Menghadapi evaluator teknis yang skeptis melalui bukti komparatif empiris. Lokakarya arsitektur mikro, benchmark latensi sub-detik, serta pembuktian kemudahan konfigurasi produk baru tanpa downtime sistem legacy.",
    techSpecs: [
      { label: "Target Evaluator", value: "VP Enterprise Arch & Ops", sub: "Arsitek Sistem & Head of Cards", highlight: true },
      { label: "Throughput Uji Beban", value: "10.500 TPS Sustained", sub: "Peak load peak season perbankan", highlight: true },
      { label: "Latensi Switching P99", value: "< 85 Milidetik", sub: "10x lebih responsif vs legacy (850ms)" },
      { label: "Kepatuhan BI SNAP", value: "100% Native Certified", sub: "Zero custom bridge coding" }
    ],
    influencerRoles: [
      {
        role: "VP Enterprise Architecture",
        focus: "Modularitas Microservices & Kesiapan Cloud",
        concern: "Sistem core lama berbentuk monolitik, sulit didecoupling dengan modul modern.",
        championHook: "Arsitektur WAY4 berorientasi modular: decoupling modul switching, CMS, dan gateway SNAP BI."
      },
      {
        role: "Head of Cards & Payment Switch",
        focus: "Time-to-Market Peluncuran Produk Kartu & QRIS",
        concern: "Siklus rilis produk kartu baru pada sistem legacy memakan waktu 6 hingga 9 bulan.",
        championHook: "Konfigurasi kartu kredit, debit, dan virtual card instan via parameter rule engine (<5 hari)."
      },
      {
        role: "VP IT Operations & Infra",
        focus: "Zero Downtime SLA 99.999% & Recovery Cepat",
        concern: "Risiko kegagalan cut-over transaksi nasional dan sanksi audit regulator BI.",
        championHook: "Side-by-side coexistence: routing transaksi split bertahap dengan rollback instan otomatis."
      }
    ],
    quadrantTitle: "Kuadran Skalabilitas Arsitektur Switch FSI",
    quadrantSubtitle: "Sumbu X: Throughput Transaksi (TPS) · Sumbu Y: Kesiapan Cloud & Open API",
    quadrantLabels: {
      q1: { title: "Next-Gen Cloud-Native Switch", desc: "Throughput tinggi (>10k TPS) & arsitektur modern SNAP BI" },
      q2: { title: "API Gateway Hybrid", desc: "Open API siap namun throughput core terbatas oleh engine lama" },
      q3: { title: "High-Volume Monolith", desc: "TPS besar namun terkunci arsitektur mainframe kaku" },
      q4: { title: "Legacy Technical Debt", desc: "Sistem usang (>10 thn), latensi tinggi & sulit integrasi" }
    },
    quadrantPoints: [
      { id: "tp1", name: "OpenWay WAY4 Core", type: "WAY4 Platform", x: 88, y: 90, tps: "10.500 TPS", latency: "65-85 ms", snapBiStatus: "Native 100%" },
      { id: "tp2", name: "Incumbent ACI Base24", type: "Legacy Monolith", x: 68, y: 30, tps: "4.200 TPS", latency: "650 ms", snapBiStatus: "Needs Custom Bridge" },
      { id: "tp3", name: "Postilion Legacy Switch", type: "Client-Server", x: 45, y: 38, tps: "2.800 TPS", latency: "720 ms", snapBiStatus: "Separate Middleware" },
      { id: "tp4", name: "In-House Custom Switch", type: "Legacy Hybrid", x: 30, y: 48, tps: "1.500 TPS", latency: "850 ms", snapBiStatus: "Partial Compliance" }
    ],
    benchmarkTitle: "Hasil Uji Benchmark Kinerja: WAY4 vs Sistem Incumbent",
    benchmarkSubtitle: "Data Riil Pengujian Beban Transaksi, Latensi, dan Siklus Konfigurasi Produk",
    benchmarks: [
      { metric: "Throughput Transaksi (TPS)", way4Value: "10.500 TPS", legacyValue: "3.200 TPS", advantage: "3.2x Lebih Tinggi", progressPercent: 92 },
      { metric: "Latensi Transaksi Rata-Rata (P99)", way4Value: "85 ms", legacyValue: "850 ms", advantage: "10x Lebih Cepat", progressPercent: 90 },
      { metric: "Time-to-Market Produk Baru", way4Value: "3-5 Hari", legacyValue: "6-9 Bulan", advantage: "Konfigurasi No-Code", progressPercent: 95 },
      { metric: "Kepatuhan SNAP BI & ISO 20022", way4Value: "Native Bawaan", legacyValue: "Custom Gateway", advantage: "Zero Extra License", progressPercent: 100 }
    ],
    pillars: [
      { index: "01", tag: "THROUGHPUT", title: "10.000+ TPS Tested", subtitle: "Mendukung lonjakan volume transaksi perbankan", metric: "10.5k TPS" },
      { index: "02", tag: "SPEED", title: "Sub-100ms Latensi", subtitle: "Respons instan untuk transaksi kartu & QRIS nasional", metric: "85 ms" },
      { index: "03", tag: "COMPLIANCE", title: "Native SNAP BI & BI-FAST", subtitle: "Standar terverifikasi Bank Indonesia tanpa modul luar", metric: "ISO 20022" },
      { index: "04", tag: "NO-CODE CONFIG", title: "Agile Card Issuance", subtitle: "Peluncuran skema kartu baru dalam hitungan hari", metric: "< 5 Hari" }
    ],
    takeaway: {
      proof: "Dukungan tim teknis senior Astra & OpenWay untuk PoC live demo langsung di server lab bank target.",
      target: "Tujuan Tier 2: Evaluator Teknis Berubah Menjadi Internal Champion Sebelum RFP Terbit"
    }
  },
  EN: {
    header: {
      category: "Technical Evaluation Dossier · Tier 2 Architecture & Ops",
      catalyst: "Real Transaction Benchmark & Stress Test Performance",
      title: "Tier 2: Enterprise Architecture, VP Operations & Evaluation Team"
    },
    dossierTitle: "Planning Account Note: Converting Technical Evaluators into Champions",
    dossierSubtitle: "10,000+ TPS Stress Test, Native SNAP BI Standards & Dual Engine Coexistence",
    dossierSummary: "Addressing skeptical technical evaluators through empirical comparative proof. Deep-dive architectural workshops, sub-100ms latency benchmarks, and demonstrating zero-downtime card product configurations.",
    techSpecs: [
      { label: "Target Evaluators", value: "VP Enterprise Arch & Ops", sub: "Enterprise Architects & Head of Cards", highlight: true },
      { label: "Stress Test Throughput", value: "10,500 TPS Sustained", sub: "Banking peak season stress load", highlight: true },
      { label: "Switching Latency P99", value: "< 85 Milliseconds", sub: "10x faster vs incumbent (850ms)" },
      { label: "BI SNAP Compliance", value: "100% Native Certified", sub: "Zero custom middleware needed" }
    ],
    influencerRoles: [
      {
        role: "VP Enterprise Architecture",
        focus: "Microservices Modularity & Cloud Readiness",
        concern: "Legacy core switch is tightly coupled monolith, hard to integrate with modern apps.",
        championHook: "WAY4 decoupled architecture: independent switching, card management, and SNAP BI gateway."
      },
      {
        role: "Head of Cards & Payment Switch",
        focus: "Time-to-Market for Digital Cards & QRIS",
        concern: "New card product lifecycle on legacy systems requires 6 to 9 months of coding.",
        championHook: "Instant credit, debit, and virtual card parameterization via no-code rule engine (<5 days)."
      },
      {
        role: "VP IT Operations & Infra",
        focus: "Zero Downtime SLA 99.999% & High Availability",
        concern: "Risk of national transaction cutover failures and central bank regulatory fines.",
        championHook: "Side-by-side coexistence: gradual split-routing with instantaneous automated rollback."
      }
    ],
    quadrantTitle: "FSI Switch Architecture Scalability Quadrant",
    quadrantSubtitle: "X-Axis: Transaction Throughput (TPS) · Y-Axis: Cloud Readiness & Open API",
    quadrantLabels: {
      q1: { title: "Next-Gen Cloud-Native Switch", desc: "High throughput (>10k TPS) & modern SNAP BI architecture" },
      q2: { title: "API Gateway Hybrid", desc: "Open API ready but core throughput constrained by older engine" },
      q3: { title: "High-Volume Monolith", desc: "High TPS but locked inside rigid mainframe architecture" },
      q4: { title: "Legacy Technical Debt", desc: "Aging system (>10 yrs), high latency & painful integration" }
    },
    quadrantPoints: [
      { id: "tp1", name: "OpenWay WAY4 Core", type: "WAY4 Platform", x: 88, y: 90, tps: "10,500 TPS", latency: "65-85 ms", snapBiStatus: "Native 100%" },
      { id: "tp2", name: "Incumbent ACI Base24", type: "Legacy Monolith", x: 68, y: 30, tps: "4,200 TPS", latency: "650 ms", snapBiStatus: "Needs Custom Bridge" },
      { id: "tp3", name: "Postilion Legacy Switch", type: "Client-Server", x: 45, y: 38, tps: "2,800 TPS", latency: "720 ms", snapBiStatus: "Separate Middleware" },
      { id: "tp4", name: "In-House Custom Switch", type: "Legacy Hybrid", x: 30, y: 48, tps: "1,500 TPS", latency: "850 ms", snapBiStatus: "Partial Compliance" }
    ],
    benchmarkTitle: "Performance Benchmark Results: WAY4 vs Incumbents",
    benchmarkSubtitle: "Empirical Stress Test Data: Throughput, Latency, and Card Product Time-to-Market",
    benchmarks: [
      { metric: "Transaction Throughput (TPS)", way4Value: "10,500 TPS", legacyValue: "3,200 TPS", advantage: "3.2x Higher", progressPercent: 92 },
      { metric: "Average Switching Latency (P99)", way4Value: "85 ms", legacyValue: "850 ms", advantage: "10x Faster", progressPercent: 90 },
      { metric: "New Product Time-to-Market", way4Value: "3-5 Days", legacyValue: "6-9 Months", advantage: "No-Code Rule Engine", progressPercent: 95 },
      { metric: "SNAP BI & ISO 20022 Compliance", way4Value: "Built-In Native", legacyValue: "Custom Bridge", advantage: "Zero Extra License", progressPercent: 100 }
    ],
    pillars: [
      { index: "01", tag: "THROUGHPUT", title: "10,000+ TPS Tested", subtitle: "Effortlessly handles national transaction surges", metric: "10.5k TPS" },
      { index: "02", tag: "SPEED", title: "Sub-100ms Latency", subtitle: "Instant response for card & national QRIS payments", metric: "85 ms" },
      { index: "03", tag: "COMPLIANCE", title: "Native SNAP BI & BI-FAST", subtitle: "Bank Indonesia verified without third-party middleware", metric: "ISO 20022" },
      { index: "04", tag: "NO-CODE CONFIG", title: "Agile Card Issuance", subtitle: "Launch customized card programs in days", metric: "< 5 Days" }
    ],
    takeaway: {
      proof: "Backed by Astra & OpenWay technical solution architects for live PoC trials on target bank environments.",
      target: "Tier 2 Objective: Convert Technical Evaluators into Champions Before Official RFP Release"
    }
  }
};
