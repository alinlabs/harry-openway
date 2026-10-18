export type Language = 'IN' | 'EN';

export interface StakeholderTier {
  id: string;
  tierNumber: string;
  roleTitle: string;
  personas: string;
  mandate: string;
  strategicApproach: string;
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
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

export const SLIDE03_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  dossierTitle: string;
  tiers: StakeholderTier[];
  metrics: {
    advantageTitle: string;
    winRateTitle: string;
    winRateValue: string;
    winRateSub: string;
    accessVelocityTitle: string;
    accessVelocityValue: string;
    accessVelocitySub: string;
    preRfpTitle: string;
    preRfpValue: string;
    preRfpSub: string;
    governanceTitle: string;
    governanceValue: string;
    governanceSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Metodologi Eksekusi",
      catalyst: "Pemetaan Akun Strategis FSI",
      title: "Buying Centre Dossier & Formula Kemenangan Tender"
    },
    descriptionTitle: "Pre-RFP Shaping & Orkestrasi 3-Tier Stakeholder",
    descriptionText: "Navigasi B2B enterprise yang sistematis menembus hierarki perbankan. Memenangkan tender bernilai puluhan miliar rupiah melalui pemetaan pengaruh terstruktur dan mempengaruhi kriteria tender jauh sebelum RFP resmi dibuka.",
    dossierTitle: "Struktur Komite Pembelian (Buying Centre Dossier)",
    tiers: [
      {
        id: "decision_makers",
        tierNumber: "Tier 1",
        roleTitle: "Decision Makers (C-Level & Direksi IT)",
        personas: "Direktur IT / Operasional, CTO, Direktur Bisnis Konsumer",
        mandate: "Otorisasi akhir anggaran, keselarasan visi strategis, mitigasi downtime",
        strategicApproach: "Akses C-Level via warm introduction ring kedua, presentasi ROI & TCO 5 tahun",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Otorisasi Akhir"
      },
      {
        id: "key_influencers",
        tierNumber: "Tier 2",
        roleTitle: "Key Influencers (Arsitektur & Operasional)",
        personas: "VP Enterprise Architecture, Head of Cards, VP IT Operations",
        mandate: "Evaluasi teknis, kepatuhan microservices BSPI 2030, skalabilitas TPS",
        strategicApproach: "Discovery mendalam tantangan sistem legacy, lokakarya teknis WAY4",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Evaluator Teknis"
      },
      {
        id: "gatekeepers",
        tierNumber: "Tier 3",
        roleTitle: "Gatekeepers (Pengadaan & Tata Kelola)",
        personas: "Komite Pengadaan (Procurement), Legal & Vendor Risk Management",
        mandate: "Kepatuhan tata kelola, transparansi kontrak, verifikasi audit formal",
        strategicApproach: "Dokumentasi tender bersih 100% auditable (standar ketat setara LKPP)",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Kepatuhan Hukum"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Formula Kemenangan RFP",
      winRateTitle: "Target Win Probability",
      winRateValue: "85%+",
      winRateSub: "Dengan Pre-RFP Shaping Terencana",
      accessVelocityTitle: "Kecepatan Akses C-Level",
      accessVelocityValue: "<14 Hari",
      accessVelocitySub: "Via Ring-2 Warm Introduction",
      preRfpTitle: "Jendela Pre-RFP Shaping",
      preRfpValue: "3-6 Bulan",
      preRfpSub: "Sebelum Dokumen Tender Rilis",
      governanceTitle: "Integritas & Audit Tata Kelola",
      governanceValue: "100% Auditable",
      governanceSub: "Bebas sengketa & teruji di regulasi perbankan"
    },
    pillars: [
      {
        id: "pillar_pre_rfp",
        index: "01",
        title: "Pre-RFP Shaping Kriteria",
        subtitle: "Menyuntikkan standar WAY4 ke dokumen kebutuhan bank sebelum tender",
        metric: "Kriteria Unggul",
        tag: "Inisiasi Awal",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_intro",
        index: "02",
        title: "Navigasi Ring-2 Warm Network",
        subtitle: "Menembus birokrasi bank melalui relasi terpercaya tanpa cold calling",
        metric: "Akses C-Level",
        tag: "Hubungan Kuat",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine",
        index: "03",
        title: "Solusi Dual Engine Bebas Risiko",
        subtitle: "Menghilangkan ketakutan dewan direksi atas risiko downtime migrasi",
        metric: "Zero Downtime",
        tag: "Diferensiasi",
        accentColor: "#34a853"
      },
      {
        id: "pillar_governance",
        index: "04",
        title: "Tata Kelola Pengadaan 100% Bersih",
        subtitle: "Memastikan proses komersial patuh audit dan standar ketat institusi",
        metric: "100% Auditable",
        tag: "Integritas",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Komite pengadaan perbankan dimenangkan melalui orkestrasi pra-tender dan kepatuhan tata kelola bersih.",
      target: "Metodologi Penetrasi: Bank Tier-1 & Komersial"
    }
  },
  EN: {
    header: {
      category: "Actionable Methodology",
      catalyst: "Strategic FSI Account Mapping",
      title: "Buying Centre Dossier & RFP Winning Formula"
    },
    descriptionTitle: "Pre-RFP Shaping & 3-Tier Stakeholder Orchestration",
    descriptionText: "Structured enterprise B2B navigation across banking hierarchies. Unlocking multi-million dollar contracts through disciplined influence mapping and shaping tender criteria well before formal RFP issuance.",
    dossierTitle: "Buying Centre Committee Structure (Influence Matrix)",
    tiers: [
      {
        id: "decision_makers",
        tierNumber: "Tier 1",
        roleTitle: "Decision Makers (C-Level & IT Boardroom)",
        personas: "IT / Ops Director, CTO, Consumer Banking Director",
        mandate: "Final CAPEX/OPEX signoff, strategic roadmap alignment, migration risk",
        strategicApproach: "Direct C-Suite dialogue via 2nd-degree warm introductions, 5-Year TCO ROI",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Final Signoff"
      },
      {
        id: "key_influencers",
        tierNumber: "Tier 2",
        roleTitle: "Key Influencers (Architecture & Operations)",
        personas: "VP Enterprise Architecture, Head of Cards, VP IT Operations",
        mandate: "Technical feasibility, BSPI 2030 microservices, TPS throughput benchmarking",
        strategicApproach: "Deep architectural discovery on legacy pain points, WAY4 technical demos",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Tech Evaluators"
      },
      {
        id: "gatekeepers",
        tierNumber: "Tier 3",
        roleTitle: "Gatekeepers (Procurement & Governance)",
        personas: "Procurement Committee, Legal Counsel, Vendor Risk Management",
        mandate: "Procurement compliance, contract transparency, audit verification",
        strategicApproach: "100% auditable tender documentation aligned with strict compliance criteria",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Legal & Audit"
      }
    ],
    metrics: {
      advantageTitle: "RFP Winning Formula Parameters",
      winRateTitle: "Target Win Probability",
      winRateValue: "85%+",
      winRateSub: "With Disciplined Pre-RFP Shaping",
      accessVelocityTitle: "C-Level Access Velocity",
      accessVelocityValue: "<14 Days",
      accessVelocitySub: "Via Ring-2 Warm Introductions",
      preRfpTitle: "Pre-RFP Shaping Window",
      preRfpValue: "3-6 Months",
      preRfpSub: "Ahead of Public Tender Issuance",
      governanceTitle: "Governance & Audit Cleanliness",
      governanceValue: "100% Auditable",
      governanceSub: "Zero-dispute procurement track record"
    },
    pillars: [
      {
        id: "pillar_pre_rfp",
        index: "01",
        title: "Pre-RFP Requirement Shaping",
        subtitle: "Embedding WAY4 technical USPs into bank specifications prior to tender",
        metric: "Shaped Spec",
        tag: "Early Phase",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_intro",
        index: "02",
        title: "Ring-2 Warm Network Access",
        subtitle: "Penetrating complex bank hierarchies through trusted referral channels",
        metric: "C-Level Path",
        tag: "High Trust",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine",
        index: "03",
        title: "Dual-Engine De-Risking Strategy",
        subtitle: "Neutralizing executive fears of switching downtime and operational failure",
        metric: "Zero Downtime",
        tag: "Edge Value",
        accentColor: "#34a853"
      },
      {
        id: "pillar_governance",
        index: "04",
        title: "100% Auditable Procurement",
        subtitle: "Guaranteeing immaculate tender compliance and governance integrity",
        metric: "100% Auditable",
        tag: "Clean Process",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Banking procurement committees are won through disciplined pre-tender shaping and clean governance compliance.",
      target: "Penetration Framework: Tier-1 & Commercial Banks"
    }
  }
};
