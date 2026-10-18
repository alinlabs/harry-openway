export type Language = 'IN' | 'EN';

export interface ComplianceSpecItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface RegulatoryPillarDetail {
  mandateName: string;
  regulator: string;
  scope: string;
  complianceProof: string;
  auditSignOff: string;
}

export interface ComplianceRadarPoint {
  dimension: string;
  way4Score: number; // 0-100
  legacyScore: number; // 0-100
  keyStandard: string;
}

export interface RoadmapMilestone {
  quarter: string;
  milestone: string;
  deliverable: string;
  status: string;
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE10_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  complianceSpecs: ComplianceSpecItem[];
  regulatoryPillars: RegulatoryPillarDetail[];
  radarTitle: string;
  radarSubtitle: string;
  radarPoints: ComplianceRadarPoint[];
  roadmapTitle: string;
  roadmapSubtitle: string;
  roadmapMilestones: RoadmapMilestone[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Core Stack Deep Dive · Layer 1 [Fondasi]",
      catalyst: "Mandat Bank Indonesia, Kedaulatan Data & Standar Kepatuhan Tertinggi",
      title: "Layer 1: Fondasi Kepatuhan Regulasi & Standar BSPI 2030"
    },
    dossierTitle: "Planning Account Note: Jaminan Kepatuhan Mutlak Dewan Komisaris & Auditor",
    dossierSubtitle: "Standar Blueprint Sistem Pembayaran Indonesia (BSPI 2030) & POJK No. 11/2022 Ketahanan Siber",
    dossierSummary: "Memberikan kepastian hukum dan kepatuhan audit 100% bagi Dewan Komisaris, Direktur Kepatuhan, dan Auditor Perbankan. Seluruh arsitektur WAY4 selaras secara native dengan mandat Bank Indonesia (BSPI 2030, SNAP BI, ISO 20022), regulasi OJK kedaulatan data di tanah air, didukung rekam jejak integritas pengadaan Astra (ABO).",
    complianceSpecs: [
      { label: "Standar Bank Indonesia", value: "BSPI 2030 & SNAP BI", sub: "Kepatuhan Open Banking native 100%", highlight: true },
      { label: "Ketahanan Siber OJK", value: "POJK No. 11/2022", sub: "RTO <60 detik & kedaulatan data", highlight: true },
      { label: "Standar Enkripsi Siber", value: "PCI-DSS Level 1", sub: "Sertifikasi keamanan transaksi tertinggi" },
      { label: "Integritas Tata Kelola", value: "Zero Dispute Audit", sub: "Benchmark Astra Business Operations" }
    ],
    regulatoryPillars: [
      {
        mandateName: "BSPI 2030 & BI-FAST / SNAP",
        regulator: "Bank Indonesia",
        scope: "Standarisasi Open API pembayaran nasional, interkoneksi switching, dan kedaulatan rupiah.",
        complianceProof: "Arsitektur WAY4 bersertifikasi SNAP BI native tanpa middleware pihak ketiga.",
        auditSignOff: "Lolos verifikasi spesifikasi teknis Bank Indonesia."
      },
      {
        mandateName: "POJK No. 11/POJK.03/2022",
        regulator: "Otoritas Jasa Keuangan (OJK)",
        scope: "Ketahanan dan keamanan siber bank umum, pusat data kedaulatan wilayah RI, dan RTO ketat.",
        complianceProof: "Dukungan penuh deployment on-premise maupun sovereign hybrid cloud di Indonesia.",
        auditSignOff: "Kepatuhan audit operasional tanpa disclaimer regulator."
      },
      {
        mandateName: "PCI-DSS L1 & ISO 20022 Native",
        regulator: "PCI Security Standards & ISO",
        scope: "Enkripsi data kartu pemegang rekening, perlindungan data pribadi (UU PDP), dan format pesan global.",
        complianceProof: "Sertifikasi PCI-DSS Level 1 tervalidasi tahunan dan pemrosesan native ISO 20022.",
        auditSignOff: "Standar industri global yang diakui bank multinasional."
      }
    ],
    radarTitle: "Matriks Komparasi 5 Dimensi Kepatuhan Regulasi",
    radarSubtitle: "Skor Kepatuhan Standar Perbankan: OpenWay WAY4 vs Incumbent Legacy",
    radarPoints: [
      { dimension: "Kepatuhan SNAP BI Native", way4Score: 100, legacyScore: 55, keyStandard: "Zero Middleware Bawaan" },
      { dimension: "Format Pesan ISO 20022", way4Score: 100, legacyScore: 60, keyStandard: "Native Data Dictionary" },
      { dimension: "Ketahanan Siber POJK 11 (RTO)", way4Score: 98, legacyScore: 68, keyStandard: "Failover <60 Detik" },
      { dimension: "Kedaulatan Data Finansial RI", way4Score: 100, legacyScore: 80, keyStandard: "On-Premise / Sovereign Cloud" },
      { dimension: "Integritas Pengadaan (Bebas Sengketa)", way4Score: 100, legacyScore: 75, keyStandard: "Standar Audit Astra ABO" }
    ],
    roadmapTitle: "Roadmap Kepatuhan Regulasi & Kesiapan Audit",
    roadmapSubtitle: "Tahapan Terstruktur Memastikan Zero-Audit Finding dari OJK & Bank Indonesia",
    roadmapMilestones: [
      { quarter: "M-1 s/d M-2", milestone: "Regulatory Gap Analysis", deliverable: "Pemetaan kesenjangan teknis & penyusunan dossier kepatuhan SNAP BI", status: "Fase Awal" },
      { quarter: "M-3 s/d M-4", milestone: "Audit Siber POJK 11", deliverable: "Uji penetrasi siber, simulasi Disaster Recovery RTO, & lokalisasi data", status: "Validasi" },
      { quarter: "M-5 s/d M-6", milestone: "Sertifikasi Penuh & Sign-Off", deliverable: "Persetujuan formal Dewan Komisaris, CRO, dan auditor perbankan", status: "Selesai" }
    ],
    pillars: [
      { index: "01", tag: "BI STANDARDS", title: "BSPI 2030 Native", subtitle: "Kepatuhan arsitektur sistem pembayaran nasional", metric: "100% Native" },
      { index: "02", tag: "CYBER DEFENSE", title: "POJK 11 Compliant", subtitle: "Standar ketahanan siber & Disaster Recovery <60s", metric: "RTO <60s" },
      { index: "03", tag: "DATA SOVEREIGN", title: "Kedaulatan Data RI", subtitle: "Penyimpanan data transaksi aman di wilayah NKRI", metric: "100% Lokal" },
      { index: "04", tag: "GOVERNANCE", title: "Audit Bersih ABO", subtitle: "Jaminan integritas pengadaan Astra tanpa sengketa", metric: "Zero Dispute" }
    ],
    takeaway: {
      proof: "Dukungan track record 12 tahun di Astra dalam proyek BUMN dan pemerintahan: 100% taat regulasi dan bebas temuan audit.",
      target: "Layer 1 Target: Memberikan Rasa Aman Mutlak bagi Komite Kepatuhan & Dewan Komisaris Bank"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive · Layer 1 [Foundation]",
      catalyst: "Bank Indonesia Mandates, Data Sovereignty & Highest Regulatory Standards",
      title: "Layer 1: Regulatory Compliance Foundation & BSPI 2030 Standards"
    },
    dossierTitle: "Planning Account Note: Absolute Regulatory Confidence for Board of Commissioners & Auditors",
    dossierSubtitle: "Indonesia Payment System Blueprint (BSPI 2030) & OJK POJK No. 11/2022 Cyber Resilience",
    dossierSummary: "Providing 100% legal clarity and audit assurance for Board of Commissioners, Chief Risk Officers, and banking auditors. The entire WAY4 architecture aligns natively with Bank Indonesia mandates (BSPI 2030, SNAP BI, ISO 20022), OJK onshore data sovereignty, backed by Astra's proven procurement governance (ABO).",
    complianceSpecs: [
      { label: "Bank Indonesia Mandate", value: "BSPI 2030 & SNAP BI", sub: "100% native Open Banking compliance", highlight: true },
      { label: "OJK Cyber Resilience", value: "POJK No. 11/2022", sub: "RTO <60 seconds & data sovereignty", highlight: true },
      { label: "Cyber Encryption Standard", value: "PCI-DSS Level 1", sub: "Highest payment transaction security certification" },
      { label: "Governance Integrity", value: "Zero Dispute Audit", sub: "Astra Business Operations benchmark" }
    ],
    regulatoryPillars: [
      {
        mandateName: "BSPI 2030 & BI-FAST / SNAP",
        regulator: "Bank Indonesia",
        scope: "National Open API standards, switching interconnection, and domestic currency transaction sovereignty.",
        complianceProof: "WAY4 architecture is natively certified for SNAP BI without third-party integration software.",
        auditSignOff: "Verified against official Bank Indonesia technical specifications."
      },
      {
        mandateName: "POJK No. 11/POJK.03/2022",
        regulator: "Financial Services Authority (OJK)",
        scope: "Commercial bank cyber resilience, data centers strictly within Indonesian territory, and strict RTO.",
        complianceProof: "Complete support for on-premise and sovereign hybrid cloud deployment models.",
        auditSignOff: "Operational audit compliance without regulator disclaimer."
      },
      {
        mandateName: "PCI-DSS L1 & ISO 20022 Native",
        regulator: "PCI Security Standards & ISO",
        scope: "End-to-end cardholder data encryption, personal data protection act (UU PDP), and global financial messaging.",
        complianceProof: "Annual PCI-DSS Level 1 audit verification and native ISO 20022 data dictionary handling.",
        auditSignOff: "Global enterprise standard recognized by multinational financial institutions."
      }
    ],
    radarTitle: "5-Dimension Regulatory Compliance Comparison Matrix",
    radarSubtitle: "Banking Standard Compliance Scores: OpenWay WAY4 vs Incumbent Legacy",
    radarPoints: [
      { dimension: "Native SNAP BI Compliance", way4Score: 100, legacyScore: 55, keyStandard: "Zero Middleware Needed" },
      { dimension: "ISO 20022 Message Standard", way4Score: 100, legacyScore: 60, keyStandard: "Native Data Dictionary" },
      { dimension: "POJK 11 Cyber Resilience (RTO)", way4Score: 98, legacyScore: 68, keyStandard: "Failover <60 Seconds" },
      { dimension: "Indonesian Data Sovereignty", way4Score: 100, legacyScore: 80, keyStandard: "On-Premise / Sovereign Cloud" },
      { dimension: "Procurement Governance Integrity", way4Score: 100, legacyScore: 75, keyStandard: "Astra ABO Audit Benchmark" }
    ],
    roadmapTitle: "Regulatory Compliance & Audit Readiness Roadmap",
    roadmapSubtitle: "Structured Phasing Guaranteeing Zero-Audit Findings from Regulators",
    roadmapMilestones: [
      { quarter: "M-1 to M-2", milestone: "Regulatory Gap Analysis", deliverable: "Technical gap assessment & SNAP BI compliance dossier preparation", status: "Phase 1" },
      { quarter: "M-3 to M-4", milestone: "POJK 11 Cyber Audit", deliverable: "Penetration testing, Disaster Recovery RTO simulation, & data residency check", status: "Validation" },
      { quarter: "M-5 to M-6", milestone: "Full Certification Sign-Off", deliverable: "Formal sign-off by Board of Commissioners, CRO, and external auditors", status: "Sign-Off" }
    ],
    pillars: [
      { index: "01", tag: "BI STANDARDS", title: "BSPI 2030 Native", subtitle: "Full alignment with national payment system mandates", metric: "100% Native" },
      { index: "02", tag: "CYBER DEFENSE", title: "POJK 11 Compliant", subtitle: "Cyber resilience & Disaster Recovery failover <60s", metric: "RTO <60s" },
      { index: "03", tag: "DATA SOVEREIGN", title: "National Data Residency", subtitle: "Secure financial transaction data stored on Indonesian soil", metric: "100% Local" },
      { index: "04", tag: "GOVERNANCE", title: "Clean ABO Audit", subtitle: "Astra procurement integrity guarantee with zero legal disputes", metric: "Zero Dispute" }
    ],
    takeaway: {
      proof: "Backed by 12-year track record at Astra delivering state-owned and government projects: 100% regulatory compliance.",
      target: "Layer 1 Target: Provide Absolute Security for Bank Compliance Committees & Board of Commissioners"
    }
  }
};
