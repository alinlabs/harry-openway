export type Language = 'IN' | 'EN';

export interface AccountDossierItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface QuadrantPoint {
  id: string;
  name: string;
  tier: string;
  quadrant: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  x: number; // 0 - 100
  y: number; // 0 - 100
  systems: string;
  dealWindow: string;
  tcoImpact: string;
}

export interface BenchmarkStat {
  label: string;
  legacyVal: string;
  way4Val: string;
  improvement: string;
  percentage: number; // 0-100 for bar width
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE04_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  accountSpecs: AccountDossierItem[];
  cSuitePersonas: {
    role: string;
    mandate: string;
    painPoint: string;
    strategy: string;
  }[];
  quadrantTitle: string;
  quadrantSubtitle: string;
  quadrantLabels: {
    q1: { title: string; badge: string; desc: string };
    q2: { title: string; badge: string; desc: string };
    q3: { title: string; badge: string; desc: string };
    q4: { title: string; badge: string; desc: string };
  };
  quadrantPoints: QuadrantPoint[];
  tcoTitle: string;
  tcoSubtitle: string;
  benchmarks: BenchmarkStat[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Strategic Account Planning · Tier 1 C-Suite Dossier",
      catalyst: "Identifikasi & Klasifikasi Prospek by Data",
      title: "Tier 1: Dewan Direksi, CTO & Komite Keputusan FSI"
    },
    dossierTitle: "Planning Account Note: Penetrasi C-Level Perbankan",
    dossierSubtitle: "Klasifikasi Prospek KBMI 4 & KBMI 3 Berbasis Data Arsitektur & Siklus Kontrak",
    dossierSummary: "Strategi penetrasi C-Suite tanpa cold calling melalui jaringan Ring-2. Menyelaraskan proposal lisensi WAY4 langsung dengan agenda Direktur IT, CFO, dan Direktur Kepatuhan: efisiensi 5-Year TCO 35% dan jaminan zero downtime migrasi.",
    accountSpecs: [
      { label: "Target Segment", value: "KBMI 4 & KBMI 3", sub: "Top 10 Bank Komersial Nasional", highlight: true },
      { label: "Existing Switch", value: "ACI Base24 & Postilion", sub: "38% Market Share terpasang >10 thn" },
      { label: "Critical Vulnerability", value: "+28% Lisensi / 3 Thn", sub: "Vendor lock-in & bottleneck TPS" },
      { label: "Akses Ring-2 Penetrasi", value: "< 14 Hari ke Direksi", sub: "Melalui Asosiasi & Konsorsium FSI", highlight: true }
    ],
    cSuitePersonas: [
      {
        role: "Direktur IT / CTO",
        mandate: "Modernisasi Core Switch & Skalabilitas Cloud-Ready",
        painPoint: "Risiko downtime saat migrasi & ketergantungan hardware proprietary.",
        strategy: "Validasi arsitektur koeksistensi paralel (Dual Engine) tanpa cut-over berisiko."
      },
      {
        role: "Direktur Keuangan / CFO",
        mandate: "Optimalisasi Capital Expenditure & Kepastian 5-Yr TCO",
        painPoint: "Kenaikan biaya renewal lisensi per-core tak terkendali dari vendor legacy.",
        strategy: "Model komparasi finansial TCO 5 tahun: penghematan bersih hingga 35% (Rp 42 Miliar)."
      },
      {
        role: "Direktur Kepatuhan & Risiko",
        mandate: "Kepatuhan Penuh Standar BI SNAP & POJK No. 11 Ketahanan Siber",
        painPoint: "Sistem legacy lambat mengadopsi regulasi Open Banking Bank Indonesia.",
        strategy: "Sertifikasi native ISO 20022 dan garansi audit kesesuaian regulasi perbankan."
      }
    ],
    quadrantTitle: "Kuadran Klasifikasi Akun Prospek FSI",
    quadrantSubtitle: "Sumbu X: Urgensi Modernisasi · Sumbu Y: Otoritas Anggaran C-Level",
    quadrantLabels: {
      q1: { title: "P1: Primary Core Replacement", badge: "Urgensi Tinggi · Otoritas Penuh", desc: "KBMI 4 / Bank BUMN besar dengan lisensi Base24 expired <12 bln" },
      q2: { title: "P2: Strategic Pre-Emption", badge: "Urgensi Sedang · Otoritas Penuh", desc: "KBMI 3 Komersial dengan agenda digitalisasi transaksi nasional" },
      q3: { title: "P3: Agile Speed Deployment", badge: "Urgensi Tinggi · Otoritas Menengah", desc: "Bank Digital & Unit Usaha Syariah yang butuh go-live kilat" },
      q4: { title: "P4: Executive Nurturing", badge: "Urgensi Sedang · Evaluasi Awal", desc: "BPD Progresif & Lembaga Pembiayaan Multifinance besar" }
    },
    quadrantPoints: [
      { id: "p1", name: "Bank BUMN Tier-1 (KBMI 4)", tier: "KBMI 4", quadrant: "Q1", x: 82, y: 88, systems: "Base24 Legacy", dealWindow: "Q2 2026", tcoImpact: "Hemat Rp 45M" },
      { id: "p2", name: "Bank Swasta Nasional (KBMI 3)", tier: "KBMI 3", quadrant: "Q2", x: 42, y: 78, systems: "Postilion Switch", dealWindow: "Q3 2026", tcoImpact: "Hemat Rp 28M" },
      { id: "p3", name: "Konsorsium Bank Digital", tier: "Digital Bank", quadrant: "Q3", x: 88, y: 38, systems: "Custom In-House", dealWindow: "Q1 2026", tcoImpact: "Hemat Rp 18M" },
      { id: "p4", name: "Bank Pembangunan Daerah (BPD)", tier: "BPD Tier-2", quadrant: "Q4", x: 35, y: 32, systems: "Fiserv Switch", dealWindow: "Q4 2026", tcoImpact: "Hemat Rp 15M" }
    ],
    tcoTitle: "Komparasi Data Finansial 5-Year TCO (Dalam Miliar Rupiah)",
    tcoSubtitle: "Analisis Biaya Total Kepemilikan: Lisensi, Hardware, Maintenance & Operasional",
    benchmarks: [
      { label: "Biaya Lisensi Core (5 Tahun)", legacyVal: "Rp 54 M", way4Val: "Rp 32 M", improvement: "Hemat 40.7%", percentage: 59 },
      { label: "Hardware & Infrastructure", legacyVal: "Rp 38 M", way4Val: "Rp 22 M", improvement: "Hemat 42.1%", percentage: 58 },
      { label: "Dukungan & Custom Maintenance", legacyVal: "Rp 28 M", way4Val: "Rp 24 M", improvement: "Hemat 14.3%", percentage: 86 }
    ],
    pillars: [
      { index: "01", tag: "C-LEVEL ACCESS", title: "Warm Network Ring-2", subtitle: "Akses Direksi <14 hari tanpa birokrasi dingin", metric: "14 Hari" },
      { index: "02", tag: "FINANCIAL MODEL", title: "Efisiensi 5-Yr TCO", subtitle: "Pengurangan total pengeluaran lisensi & server", metric: "-35% TCO" },
      { index: "03", tag: "RISK ELIMINATION", title: "Dual Engine Coexistence", subtitle: "Migrasi paralel tanpa downtime transaksi", metric: "Zero Downtime" },
      { index: "04", tag: "REGULATION", title: "Sertifikasi SNAP BI", subtitle: "Kepatuhan native Bank Indonesia & OJK POJK 11", metric: "100% Native" }
    ],
    takeaway: {
      proof: "Dukungan track record 12 tahun di Astra mengelola portofolio Mayor Accounts & kepatuhan governance ketat.",
      target: "Pipeline Potensial Tier 1: Target Deal Size Rp 30M - 60M per Bank KBMI"
    }
  },
  EN: {
    header: {
      category: "Strategic Account Planning · Tier 1 C-Suite Dossier",
      catalyst: "Data-Driven Prospect Identification & Classification",
      title: "Tier 1: Board of Directors, CTO & FSI Decision Committee"
    },
    dossierTitle: "Planning Account Note: Banking C-Level Penetration",
    dossierSubtitle: "KBMI 4 & KBMI 3 Prospect Classification by Architecture Data & Contract Cycles",
    dossierSummary: "C-Suite penetration strategy bypassing cold outreach via trusted Ring-2 network. Aligning WAY4 value proposition directly to IT Director, CFO, and Chief Risk Officer priorities: 35% 5-Year TCO reduction and zero-downtime migration.",
    accountSpecs: [
      { label: "Target Segment", value: "KBMI 4 & KBMI 3", sub: "Top 10 National Commercial Banks", highlight: true },
      { label: "Existing Switch", value: "ACI Base24 & Postilion", sub: "38% Market Share installed >10 yrs" },
      { label: "Critical Vulnerability", value: "+28% License / 3 Yrs", sub: "Vendor lock-in & TPS bottlenecks" },
      { label: "Ring-2 Penetration Access", value: "< 14 Days to Board", sub: "Via Banking Consortia & Associations", highlight: true }
    ],
    cSuitePersonas: [
      {
        role: "IT Director / CTO",
        mandate: "Core Switch Modernization & Cloud-Native Scalability",
        painPoint: "Transaction downtime risks during migration & proprietary hardware lock-in.",
        strategy: "Validate parallel side-by-side coexistence architecture without risky cutovers."
      },
      {
        role: "Chief Financial Officer (CFO)",
        mandate: "CapEx Optimization & 5-Year TCO Predictability",
        painPoint: "Uncontrolled per-core license renewal hikes from incumbent vendors.",
        strategy: "5-Year comparative TCO financial model: net savings up to 35% (IDR 42 Billion)."
      },
      {
        role: "Chief Compliance Officer (CRO)",
        mandate: "Full Compliance with BI SNAP & OJK POJK 11 Cyber Resilience",
        painPoint: "Legacy engines struggle to support Open Banking standards natively.",
        strategy: "Native ISO 20022 certification and guaranteed regulatory audit compliance."
      }
    ],
    quadrantTitle: "FSI Prospect Classification Quadrant",
    quadrantSubtitle: "X-Axis: Modernization Urgency · Y-Axis: C-Level Budget Authority",
    quadrantLabels: {
      q1: { title: "P1: Primary Core Replacement", badge: "High Urgency · Full Authority", desc: "Top Tier-1 Banks with Base24 contracts expiring <12 mos" },
      q2: { title: "P2: Strategic Pre-Emption", badge: "Medium Urgency · Full Authority", desc: "National Commercial Banks planning core payments upgrade" },
      q3: { title: "P3: Agile Speed Deployment", badge: "High Urgency · Moderate Authority", desc: "Digital Banks needing rapid go-live within 4 months" },
      q4: { title: "P4: Executive Nurturing", badge: "Medium Urgency · Early Discovery", desc: "Regional Development Banks & Leading Multifinance firms" }
    },
    quadrantPoints: [
      { id: "p1", name: "State-Owned Tier-1 (KBMI 4)", tier: "KBMI 4", quadrant: "Q1", x: 82, y: 88, systems: "Base24 Legacy", dealWindow: "Q2 2026", tcoImpact: "Save IDR 45B" },
      { id: "p2", name: "Private Commercial (KBMI 3)", tier: "KBMI 3", quadrant: "Q2", x: 42, y: 78, systems: "Postilion Switch", dealWindow: "Q3 2026", tcoImpact: "Save IDR 28B" },
      { id: "p3", name: "Digital Bank Consortium", tier: "Digital Bank", quadrant: "Q3", x: 88, y: 38, systems: "Custom In-House", dealWindow: "Q1 2026", tcoImpact: "Save IDR 18B" },
      { id: "p4", name: "Regional Development Bank (BPD)", tier: "BPD Tier-2", quadrant: "Q4", x: 35, y: 32, systems: "Fiserv Switch", dealWindow: "Q4 2026", tcoImpact: "Save IDR 15B" }
    ],
    tcoTitle: "5-Year TCO Comparative Data (in IDR Billion)",
    tcoSubtitle: "Total Cost of Ownership Analysis: License, Infrastructure, Maintenance & Operations",
    benchmarks: [
      { label: "Core License Fees (5 Yrs)", legacyVal: "IDR 54 B", way4Val: "IDR 32 B", improvement: "Save 40.7%", percentage: 59 },
      { label: "Hardware & Infrastructure", legacyVal: "IDR 38 B", way4Val: "IDR 22 B", improvement: "Save 42.1%", percentage: 58 },
      { label: "Support & Custom Maintenance", legacyVal: "IDR 28 B", way4Val: "IDR 24 B", improvement: "Save 14.3%", percentage: 86 }
    ],
    pillars: [
      { index: "01", tag: "C-LEVEL ACCESS", title: "Warm Network Ring-2", subtitle: "Board access in <14 days with zero cold calls", metric: "14 Days" },
      { index: "02", tag: "FINANCIAL MODEL", title: "5-Yr TCO Efficiency", subtitle: "Reduction in total license & server footprint", metric: "-35% TCO" },
      { index: "03", tag: "RISK ELIMINATION", title: "Dual Engine Coexistence", subtitle: "Parallel migration without downtime risk", metric: "Zero Downtime" },
      { index: "04", tag: "REGULATION", title: "SNAP BI Certified", subtitle: "Native compliance with BI & OJK POJK 11", metric: "100% Native" }
    ],
    takeaway: {
      proof: "Backed by 12-year track record at Astra managing Major Accounts and rigorous corporate governance.",
      target: "Tier 1 Pipeline Potential: Target Deal Size IDR 30B - 60B per KBMI Bank"
    }
  }
};
