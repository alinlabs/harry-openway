export type Language = 'IN' | 'EN';

export interface GovernanceSpecItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface TenderCriteriaItem {
  id: string;
  criterion: string;
  weight: number; // e.g. 35
  way4Score: number; // e.g. 96
  legacyScore: number; // e.g. 72
  shapingStrategy: string;
}

export interface CommercialModelOption {
  model: string;
  type: string;
  idealFor: string;
  structure: string;
  riskAllocation: string;
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE06_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  governanceSpecs: GovernanceSpecItem[];
  gatekeeperRoles: {
    role: string;
    focus: string;
    complianceReq: string;
    shapingTactic: string;
  }[];
  matrixTitle: string;
  matrixSubtitle: string;
  tenderCriteria: TenderCriteriaItem[];
  commercialTitle: string;
  commercialSubtitle: string;
  commercialModels: CommercialModelOption[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Procurement & Governance Dossier · Tier 3 Gatekeepers",
      catalyst: "Pre-RFP Shaping, Integritas Audit 100% & Skema Komersial Fleksibel",
      title: "Tier 3: Komite Pengadaan, Divisi Legal & Tata Kelola Tender"
    },
    dossierTitle: "Planning Account Note: Kemenangan Formal Tender & Kepatuhan Tata Kelola",
    dossierSubtitle: "Pre-RFP Shaping 3-6 Bulan Sebelum Dokumen Resmi Terbit & Standar Audit Astra (ABO)",
    dossierSummary: "Mengamankan kemenangan tender sebelum dokumen resmi dirilis melalui Pre-RFP Shaping yang beretika. Menyelaraskan kriteria tender dengan keunggulan native WAY4, menjamin integritas audit tanpa celah sengketa hukum, dan menyediakan fleksibilitas lisensi Capex/Opex.",
    governanceSpecs: [
      { label: "Target Gatekeeper", value: "Procurement & Legal", sub: "Vendor Risk Mgmt (VRM) & Audit", highlight: true },
      { label: "Jendela Pre-RFP Shaping", value: "3 - 6 Bulan", sub: "Sebelum dokumen tender dipublikasi", highlight: true },
      { label: "Integritas Pengadaan", value: "100% Auditable", sub: "Benchmark LKPP & BUMN (Zero Dispute)" },
      { label: "Regulasi Kepatuhan", value: "POJK 11 & BI SNAP", sub: "Klausul ketahanan data perbankan" }
    ],
    gatekeeperRoles: [
      {
        role: "Head of Procurement / Panitia Tender",
        focus: "Kepastian Skor Komersial & Verifikasi Rekam Jejak Vendor",
        complianceReq: "Kepatuhan SOP Pengadaan Barang & Jasa Perbankan tanpa risiko sanggahan vendor pesaing.",
        shapingTactic: "Memasukkan bobot 5-Year TCO dan uji PoC live demo ke dalam pembobotan evaluasi komersial."
      },
      {
        role: "Divisi Legal & Kontrak",
        focus: "Mitigasi Sengketa Kontrak & Kepemilikan Data Perbankan",
        complianceReq: "Klausul lokalisasi data nasional sesuai POJK No. 11/2022 & jaminan SLA kontraktual 99.999%.",
        shapingTactic: "Penyusunan draft Service Level Agreement (SLA) berstandar internasional dengan penalti terukur."
      },
      {
        role: "Vendor Risk Management (VRM) & Audit",
        focus: "Keamanan Finansial Vendor & Sertifikasi Siber Global",
        complianceReq: "Sertifikasi PCI-DSS Level 1, ISO 27001, dan kepatuhan regulasi perlindungan data pribadi (UU PDP).",
        shapingTactic: "Pemberian dossier sertifikasi internasional OpenWay WAY4 yang telah diaudit oleh firma Big 4."
      }
    ],
    matrixTitle: "Matriks Pembobotan Tender (Pre-RFP Weighted Scoring)",
    matrixSubtitle: "Simulasi Pembobotan Kriteria Penilaian Vendor: WAY4 vs Incumbent Legacy",
    tenderCriteria: [
      { id: "c1", criterion: "Kepatuhan Arsitektur & SNAP BI Native", weight: 35, way4Score: 96, legacyScore: 72, shapingStrategy: "Kriteria sertifikasi native ISO 20022 tanpa middleware bridge luar" },
      { id: "c2", criterion: "Efisiensi 5-Year TCO & Model Lisensi", weight: 30, way4Score: 94, legacyScore: 68, shapingStrategy: "Penilaian berbasis Total Cost of Ownership 5 tahun (bukan harga inisial saja)" },
      { id: "c3", criterion: "Mitigasi Risiko Migrasi (Dual Engine)", weight: 20, way4Score: 98, legacyScore: 65, shapingStrategy: "Klausul uji coba side-by-side paralel tanpa pemotongan downtime mendadak" },
      { id: "c4", criterion: "Dukungan Lokal & Rekam Jejak FSI", weight: 15, way4Score: 92, legacyScore: 82, shapingStrategy: "Jaminan kehadiran tim lokal berintegritas tinggi (Astra Business Operations)" }
    ],
    commercialTitle: "Pilihan Skema Lisensi Fleksibel (Commercial Structuring)",
    commercialSubtitle: "Fleksibilitas Kontrak Komersial untuk Mempermudah Persetujuan Legal & Anggaran Bank",
    commercialModels: [
      { model: "Perpetual Capex", type: "On-Premise Capitalized", idealFor: "Bank KBMI 4 & BUMN", structure: "Lisensi permanen di muka dengan biaya pemeliharaan tahunan terprediksi", riskAllocation: "Capex diserap dalam 5 tahun depresiasi aset TI" },
      { model: "Subscription Opex", type: "Annual Recurring License", idealFor: "Bank Komersial & Digital", structure: "Biaya lisensi tahunan berbasis kapasitas volume transaksi aktif", riskAllocation: "Opex fleksibel disesuaikan dengan pertumbuhan bisnis" },
      { model: "Transaction Share", type: "Volume-Based Royalty", idealFor: "FinTech & Multifinance", structure: "Biaya per transaksi sukses tanpa beban modal besar di awal", riskAllocation: "Penyelarasan risiko langsung dengan keberhasilan pasar" }
    ],
    pillars: [
      { index: "01", tag: "PRE-RFP SHAPING", title: "3-6 Bulan Proaktif", subtitle: "Mempengaruhi kriteria kualifikasi sebelum tender dirilis", metric: "3-6 Bulan" },
      { index: "02", tag: "AUDIT INTEGRITY", title: "Zero Dispute Record", subtitle: "Standar tata kelola bersih Astra Business Operations (ABO)", metric: "100% Bersih" },
      { index: "03", tag: "SCORING MATRIX", title: "95+ Skor Evaluasi", subtitle: "Keunggulan mutlak pada kriteria teknis & TCO komparatif", metric: "Skor 95.2" },
      { index: "04", tag: "COMMERCIAL", title: "Capex & Opex Flexible", subtitle: "Pilihan kontrak disesuaikan dengan pagu anggaran bank", metric: "3 Pilihan" }
    ],
    takeaway: {
      proof: "Dukungan tata kelola Astra: 100% kepatuhan audit pengadaan, bebas sengketa hukum, dan integritas tingkat BUMN.",
      target: "Tujuan Tier 3: Mengamankan Posisi Pemenang Tunggal / Single Source Preferred Bidder"
    }
  },
  EN: {
    header: {
      category: "Procurement & Governance Dossier · Tier 3 Gatekeepers",
      catalyst: "Pre-RFP Shaping, 100% Audit Integrity & Flexible Commercial Structuring",
      title: "Tier 3: Procurement Committee, Legal Division & Tender Governance"
    },
    dossierTitle: "Planning Account Note: Formal Tender Victory & Governance Compliance",
    dossierSubtitle: "Pre-RFP Shaping 3-6 Months Prior to Release & Astra Business Operations (ABO) Audit Standards",
    dossierSummary: "Securing formal tender victories before official tender publication through ethical Pre-RFP Shaping. Aligning tender specifications with WAY4 native strengths, guaranteeing audit integrity with zero legal disputes, and providing Capex/Opex licensing flexibility.",
    governanceSpecs: [
      { label: "Target Gatekeeper", value: "Procurement & Legal", sub: "Vendor Risk Mgmt (VRM) & Audit", highlight: true },
      { label: "Pre-RFP Shaping Window", value: "3 - 6 Months", sub: "Prior to official RFP publication", highlight: true },
      { label: "Procurement Integrity", value: "100% Auditable", sub: "LKPP & State-Owned Benchmark (Zero Dispute)" },
      { label: "Compliance Mandate", value: "POJK 11 & BI SNAP", sub: "Banking cyber resilience clauses" }
    ],
    gatekeeperRoles: [
      {
        role: "Head of Procurement / Tender Committee",
        focus: "Commercial Scoring Predictability & Track Record Verification",
        complianceReq: "Adherence to banking procurement SOPs with zero risk of vendor bid protests.",
        shapingTactic: "Embed 5-Year TCO weighting and live PoC benchmark scoring into commercial evaluation."
      },
      {
        role: "Legal & Contracts Division",
        focus: "Contractual Dispute Mitigation & Banking Data Sovereignty",
        complianceReq: "Data localization under POJK No. 11/2022 & contractual SLA guarantee of 99.999%.",
        shapingTactic: "Draft standard Service Level Agreement (SLA) with clearly defined financial remedies."
      },
      {
        role: "Vendor Risk Management (VRM) & Audit",
        focus: "Vendor Financial Solvency & Global Cyber Certifications",
        complianceReq: "PCI-DSS Level 1, ISO 27001, and personal data protection act (UU PDP) compliance.",
        shapingTactic: "Submit complete Big-4 audited compliance dossiers and OpenWay global credentials."
      }
    ],
    matrixTitle: "Tender Evaluation Matrix (Pre-RFP Weighted Scoring)",
    matrixSubtitle: "Vendor Scoring Simulation: WAY4 vs Incumbent Legacy Switch",
    tenderCriteria: [
      { id: "c1", criterion: "Architecture & Native SNAP BI Compliance", weight: 35, way4Score: 96, legacyScore: 72, shapingStrategy: "Mandate native ISO 20022 certification without third-party bridges" },
      { id: "c2", criterion: "5-Year TCO Efficiency & Licensing Model", weight: 30, way4Score: 94, legacyScore: 68, shapingStrategy: "Evaluate total 5-year ownership costs rather than upfront price alone" },
      { id: "c3", criterion: "Migration Risk Mitigation (Dual Engine)", weight: 20, way4Score: 98, legacyScore: 65, shapingStrategy: "Require proven side-by-side coexistence without cutover downtime" },
      { id: "c4", criterion: "Local Support & Proven FSI Reputation", weight: 15, way4Score: 92, legacyScore: 82, shapingStrategy: "Ensure dedicated local presence with Astra corporate governance" }
    ],
    commercialTitle: "Flexible Licensing Options (Commercial Structuring)",
    commercialSubtitle: "Commercial Contracting Flexibility to Facilitate Legal and Budgetary Approvals",
    commercialModels: [
      { model: "Perpetual Capex", type: "On-Premise Capitalized", idealFor: "KBMI 4 & State-Owned Banks", structure: "Upfront perpetual license with predictable annual maintenance", riskAllocation: "Capex amortized over 5-year IT asset cycle" },
      { model: "Subscription Opex", type: "Annual Recurring License", idealFor: "Commercial & Digital Banks", structure: "Annual subscription based on active transaction throughput tier", riskAllocation: "Flexible Opex scaling with business growth" },
      { model: "Transaction Share", type: "Volume-Based Royalty", idealFor: "FinTech & Multifinance", structure: "Pay-as-you-grow per successful transaction without heavy initial outlay", riskAllocation: "Aligns risk directly with transaction volume success" }
    ],
    pillars: [
      { index: "01", tag: "PRE-RFP SHAPING", title: "3-6 Mos Proactive", subtitle: "Shape evaluation criteria before tender is released", metric: "3-6 Mos" },
      { index: "02", tag: "AUDIT INTEGRITY", title: "Zero Dispute Record", subtitle: "Clean governance benchmark of Astra Business Operations", metric: "100% Clean" },
      { index: "03", tag: "SCORING MATRIX", title: "95+ Composite Score", subtitle: "Decisive lead in technical compliance and TCO metrics", metric: "Score 95.2" },
      { index: "04", tag: "COMMERCIAL", title: "Capex & Opex Flexible", subtitle: "Tailored commercial structures fitting bank budget caps", metric: "3 Models" }
    ],
    takeaway: {
      proof: "Astra governance backing: 100% procurement audit compliance, zero legal disputes, enterprise reliability.",
      target: "Tier 3 Objective: Secure Single Source / Preferred Bidder Ranking in Formal RFP"
    }
  }
};
