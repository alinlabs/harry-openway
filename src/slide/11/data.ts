export type Language = 'IN' | 'EN';

export interface ExecutionPhase {
  id: string;
  phaseCode: string;
  timeframe: string;
  title: string;
  deliverables: string[];
  milestones: string;
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
}

export interface RoadmapPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE11_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  phasesTitle: string;
  phases: ExecutionPhase[];
  metrics: {
    advantageTitle: string;
    pipelineCommitmentTitle: string;
    pipelineCommitmentValue: string;
    pipelineCommitmentSub: string;
    targetDossiersTitle: string;
    targetDossiersValue: string;
    targetDossiersSub: string;
    activeDiscoveryTitle: string;
    activeDiscoveryValue: string;
    activeDiscoverySub: string;
    accountExpansionTitle: string;
    accountExpansionValue: string;
    accountExpansionSub: string;
  };
  pillars: RoadmapPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Peta Jalan Strategis",
      catalyst: "Ritme Eksekusi Terukur",
      title: "Rencana Aksi Strategis 30-60-90 Hari & Komitmen Pipeline"
    },
    descriptionTitle: "Akselerasi Ramp-Up, Akses C-Level & Pembangunan Pipeline 12 Bulan",
    descriptionText: "Peta jalan terukur untuk akselerasi adaptasi dan pendapatan bisnis. Bertransisi cepat dari penyerapan cetak biru internal dan perkuatan akun eksisting menuju penetrasi C-Level proaktif, hingga terbentuknya komitmen pipeline 12 bulan yang sehat dan teruji.",
    phasesTitle: "Rencana Bertahap 30-60-90 Hari (Cadence Eksekusi)",
    phases: [
      {
        id: "phase_1_days_30",
        phaseCode: "Hari 1 - 30",
        timeframe: "Bulan 1",
        title: "Penyerapan Internal & Asesmen Akun Eksisting",
        deliverables: [
          "Kuasai cetak biru produksi Tier-1 (BRI, Finnet, ASBANDA) bersama Pre-Sales",
          "Bangun titik temu tepercaya dengan pemangku kepentingan akun eksisting",
          "Susun kerangka pemodelan 5-Year TCO & Financial ROI untuk bank target"
        ],
        milestones: "Fondasi operasional & kerangka kalkulasi ROI siap pakai",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Fondasi & Audit"
      },
      {
        id: "phase_2_days_60",
        phaseCode: "Hari 31 - 60",
        timeframe: "Bulan 2",
        title: "Pemetaan Relasi & Inisiasi Discovery C-Level",
        deliverables: [
          "Aktivasi jaringan ring kedua untuk menyusun Buying Centre Dossier bank target",
          "Kunci warm introduction langsung ke level Direksi IT / C-Level",
          "Luncurkan discovery meeting resmi membawa proposisi nilai Dual Engine"
        ],
        milestones: "Akses C-Level terkunci membawa solusi tanpa risiko downtime",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Akses C-Level"
      },
      {
        id: "phase_3_days_90",
        phaseCode: "Hari 61 - 90+",
        timeframe: "Bulan 3",
        title: "Komitmen Pipeline 12 Bulan & Ekspansi Akun",
        deliverables: [
          "Kunci komitmen 12-Month Sales Pipeline yang sehat, teruji, dan siap audit",
          "Eksekusi proposal tender Pre-RFP Shaping pada bank komersial target",
          "Cross-selling modul add-on WAY4 (SNAP BI, Wallet, SoftPOS) ke akun binaan"
        ],
        milestones: "Pipeline terukur 12 bulan & monetisasi add-on akun eksisting",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Pipeline Closing"
      }
    ],
    metrics: {
      advantageTitle: "Tolak Ukur Keberhasilan Hari Ke-90",
      pipelineCommitmentTitle: "Komitmen Penjualan",
      pipelineCommitmentValue: "12-Bulan Pipeline",
      pipelineCommitmentSub: "Terverifikasi kualifikasi B2B",
      targetDossiersTitle: "Buying Centre Dossier",
      targetDossiersValue: "3+ Bank Target",
      targetDossiersSub: "Kontak C-Level & peta pengaruh",
      activeDiscoveryTitle: "Discovery Aktif",
      activeDiscoveryValue: "2 Proposal",
      activeDiscoverySub: "Membawa solusi Dual Engine",
      accountExpansionTitle: "Ekspansi Akun Eksisting",
      accountExpansionValue: "1+ Add-On Modul",
      accountExpansionSub: "Peluang SNAP / SoftPOS teridentifikasi"
    },
    pillars: [
      {
        id: "pillar_zero_lag",
        index: "01",
        title: "Adaptasi Cepat Tanpa Jeda",
        subtitle: "Menyerap arsitektur produksi WAY4 dan langsung siap diterjunkan",
        metric: "Kesiapan Hari-1",
        tag: "Ramp-Up",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_network",
        index: "02",
        title: "Aktivasi Relasi Ring Kedua",
        subtitle: "Memobilisasi jaringan terpercaya menembus sekat birokrasi bank",
        metric: "<14 Hari C-Level",
        tag: "Kecepatan Akses",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine_pitch",
        index: "03",
        title: "Proposisi Nilai Dual Engine",
        subtitle: "Mendobrak keraguan migrasi sistem lama dengan jaminan zero-downtime",
        metric: "Diferensiasi",
        tag: "Solusi Teruji",
        accentColor: "#34a853"
      },
      {
        id: "pillar_pipeline_lock",
        index: "04",
        title: "Komitmen Pipeline 12 Bulan",
        subtitle: "Membangun aliran proyek multi-tahun terukur sejak kuartal pertama",
        metric: "Pipeline Sehat",
        tag: "Hasil Terukur",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Peta jalan 90 hari pertama menjamin ramp-up singkat, komitmen pipeline 12 bulan yang sehat, dan kontribusi komersial nyata sejak kuartal awal.",
      target: "Peta Jalan Eksekusi: Komitmen 90 Hari"
    }
  },
  EN: {
    header: {
      category: "Strategic Roadmap",
      catalyst: "Measurable Execution Cadence",
      title: "30-60-90 Day Strategic Action Plan & Pipeline Commitment"
    },
    descriptionTitle: "Ramp-Up Velocity, C-Level Access & 12-Month Pipeline Creation",
    descriptionText: "A predictable, phased onboarding and revenue acceleration roadmap. Transitioning swiftly from internal blueprint absorption and existing client rapport to proactive C-Suite engagement, culminating in a committed, audit-ready 12-month enterprise pipeline.",
    phasesTitle: "30-60-90 Day Phased Execution Cadence",
    phases: [
      {
        id: "phase_1_days_30",
        phaseCode: "Days 1 - 30",
        timeframe: "Month 1",
        title: "Internal Learning & Existing Account Assessment",
        deliverables: [
          "Master Tier-1 production blueprints (BRI, Finnet, ASBANDA) with regional Pre-Sales",
          "Establish trusted stakeholder touchpoints across existing assigned accounts",
          "Synthesize 5-Year TCO & Financial ROI modelling frameworks for targeted banks"
        ],
        milestones: "Operational readiness & turnkey executive ROI pitch deck established",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Foundation & Audit"
      },
      {
        id: "phase_2_days_60",
        phaseCode: "Days 31 - 60",
        timeframe: "Month 2",
        title: "Relationship Mapping & C-Level Discovery Acceleration",
        deliverables: [
          "Mobilize second-degree network to assemble target bank Buying Centre Dossiers",
          "Secure warm introductions directly into target bank IT Director & C-Suite",
          "Launch formal discovery sessions anchored on the Dual Engine value proposition"
        ],
        milestones: "C-Level access unlocked with zero-downtime migration de-risking",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "C-Level Access"
      },
      {
        id: "phase_3_days_90",
        phaseCode: "Days 61 - 90+",
        timeframe: "Month 3",
        title: "12-Month Pipeline Commitment & Account Expansion",
        deliverables: [
          "Lock in a robust, audit-ready 12-Month Sales Pipeline commitment",
          "Initiate Pre-RFP Shaping proposals for high-priority commercial target banks",
          "Drive revenue expansion by upselling add-on WAY4 modules (SNAP, Wallet, SoftPOS)"
        ],
        milestones: "Healthy 12-month pipeline locked & existing account expansion initiated",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Pipeline Closing"
      }
    ],
    metrics: {
      advantageTitle: "Day-90 Key Success Benchmarks",
      pipelineCommitmentTitle: "Sales Commitment",
      pipelineCommitmentValue: "12-Month Pipeline",
      pipelineCommitmentSub: "Enterprise qualified opportunities",
      targetDossiersTitle: "Buying Centre Dossiers",
      targetDossiersValue: "3+ Target Banks",
      targetDossiersSub: "With C-Level contacts & matrix",
      activeDiscoveryTitle: "Active Discoveries",
      activeDiscoveryValue: "2 Proposals",
      activeDiscoverySub: "Carrying Dual Engine architecture",
      accountExpansionTitle: "Account Expansion",
      accountExpansionValue: "1+ Add-On Module",
      accountExpansionSub: "SNAP / SoftPOS upsell identified"
    },
    pillars: [
      {
        id: "pillar_zero_lag",
        index: "01",
        title: "Zero Ramp-Up Delay",
        subtitle: "Rapidly absorbing WAY4 production architecture for immediate field deployment",
        metric: "Day-1 Ready",
        tag: "Ramp-Up",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_network",
        index: "02",
        title: "Warm Network Mobilization",
        subtitle: "Leveraging trusted 2nd-degree executive relationships across banking hierarchies",
        metric: "<14 Days C-Level",
        tag: "Access Speed",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine_pitch",
        index: "03",
        title: "Dual Engine Value Pitch",
        subtitle: "Overcoming bank boardroom migration fears with guaranteed zero-downtime switchover",
        metric: "Edge Pitch",
        tag: "Proven Tech",
        accentColor: "#34a853"
      },
      {
        id: "pillar_pipeline_lock",
        index: "04",
        title: "12-Month Pipeline Lock",
        subtitle: "Delivering predictable multi-year enterprise contract value from quarter one",
        metric: "Healthy Flow",
        tag: "Results",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "The 30-60-90 day plan ensures zero ramp-up delay, a robust 12-month pipeline commitment, and tangible commercial delivery from quarter one.",
      target: "Execution Roadmap: 90-Day Commitment"
    }
  }
};
