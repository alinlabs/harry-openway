export type Language = 'IN' | 'EN';

export interface CoreStackLayer {
  id: string;
  layerNumber: string;
  name: string;
  focusTitle: string;
  description: string;
  components: string[];
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
}

export interface GrowthPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE07_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  frameworkTitle: string;
  layers: CoreStackLayer[];
  metrics: {
    advantageTitle: string;
    pipelineGrowthTitle: string;
    pipelineGrowthValue: string;
    pipelineGrowthSub: string;
    replicatedWinsTitle: string;
    replicatedWinsValue: string;
    replicatedWinsSub: string;
    crossSellingTitle: string;
    crossSellingValue: string;
    crossSellingSub: string;
    bspiReadyTitle: string;
    bspiReadyValue: string;
    bspiReadySub: string;
  };
  pillars: GrowthPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Strategi Pertumbuhan",
      catalyst: "Replikasi Keberhasilan & Ekspansi Akun",
      title: "3D Isometric Core Stack Framework & Mesin Pertumbuhan Ganda"
    },
    descriptionTitle: "Replikasi Cetak Biru Tier-1 & Ekspansi Akun Bernilai Tinggi",
    descriptionText: "Pengembangan pipeline berbasis proses terukur dan terprediksi. Membedah cetak biru produksi Tier-1 (BRI, Finnet, ASBANDA) secara sistematis untuk mereplikasi kesuksesan ke bank komersial menengah, sekaligus melakukan cross-selling modul bernilai tinggi ke akun eksisting.",
    frameworkTitle: "3D Isometric Core Stack Architecture",
    layers: [
      {
        id: "layer_3_digital",
        layerNumber: "Layer 3 [Atas]",
        name: "Peluang Pasar & Kanal Digital Baru",
        focusTitle: "Ekspansi Bank Komersial & Open API",
        description: "Membuka pasar baru bank menengah dan integrasi ekosistem fintech unicorn.",
        components: ["Open API SNAP BI Gateway", "Digital Wallet Engine", "Merchant SoftPOS Solution", "Omnichannel Switch"],
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Ekspansi Pasar"
      },
      {
        id: "layer_2_core",
        layerNumber: "Layer 2 [Tengah]",
        name: "Cetak Biru Platform Inti WAY4",
        focusTitle: "Replikasi Teruji Tier-1 Nasional",
        description: "Mereplikasi keandalan infrastruktur teruji dari BRI, Finnet, dan ASBANDA ke klien baru.",
        components: ["WAY4 Card Management System", "High-TPS Core Switching", "Clearing & Multi-Bank Settlement", "Dual Engine Migration"],
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Inti WAY4"
      },
      {
        id: "layer_1_foundation",
        layerNumber: "Layer 1 [Fondasi]",
        name: "Kepatuhan Regulasi & Tata Kelola",
        focusTitle: "Mandat Bank Indonesia BSPI 2030",
        description: "Menjamin mitigasi risiko operasional, zero-downtime, dan kepatuhan audit 100%.",
        components: ["Kepatuhan BSPI 2030 Native", "Arsitektur Microservices ISO 20022", "Audit-Ready Governance", "Mitigasi Risiko Downtime"],
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Fondasi Kepatuhan"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Mesin Pertumbuhan Ganda",
      pipelineGrowthTitle: "Multiplikasi Pipeline",
      pipelineGrowthValue: "2.5x Pipeline",
      pipelineGrowthSub: "Replikasi Bank Baru + Cross-Selling",
      replicatedWinsTitle: "Jangkar Tier-1 Teruji",
      replicatedWinsValue: "3 Cetak Biru",
      replicatedWinsSub: "BRI, Finnet, ASBANDA/BPDNet",
      crossSellingTitle: "Modul Ekspansi Unggulan",
      crossSellingValue: "SNAP & SoftPOS",
      crossSellingSub: "Margin tinggi untuk akun eksisting",
      bspiReadyTitle: "Kesiapan Regulasi BSPI 2030",
      bspiReadyValue: "100% Native",
      bspiReadySub: "Tanpa patch middleware rumit"
    },
    pillars: [
      {
        id: "pillar_internal_learning",
        index: "01",
        title: "Deep Internal Learning",
        subtitle: "Membedah cetak biru keberhasilan implementasi akun besar Tier-1",
        metric: "Playbook Teruji",
        tag: "Fondasi Awal",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_mid_tier_replication",
        index: "02",
        title: "Replikasi Bank Menengah",
        subtitle: "Menawarkan solusi proven tanpa risiko eksperimen bagi bank komersial",
        metric: "Akselerasi Sales",
        tag: "Replikasi",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_account_farming",
        index: "03",
        title: "Account Farming & Cross-Selling",
        subtitle: "Memaksimalkan customer LTV melalui add-on modul modern (Wallet & SoftPOS)",
        metric: "Ekspansi LTV",
        tag: "Nilai Tambah",
        accentColor: "#34a853"
      },
      {
        id: "pillar_bspi_harmony",
        index: "04",
        title: "Harmonisasi Regulasi BSPI",
        subtitle: "Memastikan transformasi perbankan patuh arah regulasi Bank Indonesia",
        metric: "Bebas Risiko",
        tag: "Kepatuhan",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "OpenWay menghadirkan teknologi switching kelas dunia; saya menghantarkan navigasi akun enterprise untuk membuka ceruk pasar baru.",
      target: "Cetak Biru Pertumbuhan: Replikasi & Ekspansi"
    }
  },
  EN: {
    header: {
      category: "Growth Strategy",
      catalyst: "Success Replication & Account Expansion",
      title: "3D Isometric Core Stack Framework & Dual-Growth Engine"
    },
    descriptionTitle: "Tier-1 Blueprint Replication & High-Value Account Farming",
    descriptionText: "Predictable, process-driven pipeline development. Systematically unpacking Tier-1 production blueprints (BRI, Finnet, ASBANDA) to duplicate enterprise wins into commercial mid-tier banks while upselling high-margin modules to existing accounts.",
    frameworkTitle: "3D Isometric Core Stack Architecture",
    layers: [
      {
        id: "layer_3_digital",
        layerNumber: "Layer 3 [Top]",
        name: "Market Opportunities & Digital Channels",
        focusTitle: "Commercial Bank Expansion & Open APIs",
        description: "Unlocking new commercial bank logos and enabling instant fintech unicorn integrations.",
        components: ["Open API SNAP BI Gateway", "Digital Wallet Engine", "Merchant SoftPOS Solution", "Omnichannel Switch"],
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Market Expansion"
      },
      {
        id: "layer_2_core",
        layerNumber: "Layer 2 [Middle]",
        name: "Core Platform Blueprints (WAY4)",
        focusTitle: "Proven National Tier-1 Replication",
        description: "Replicating proven production performance from BRI, Finnet, and ASBANDA into new banks.",
        components: ["WAY4 Card Management System", "High-TPS Core Switching", "Clearing & Multi-Bank Settlement", "Dual Engine Migration"],
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "WAY4 Core"
      },
      {
        id: "layer_1_foundation",
        layerNumber: "Layer 1 [Bottom]",
        name: "Compliance & Foundation (BSPI 2030)",
        focusTitle: "Bank Indonesia Regulatory Mandate",
        description: "Guaranteeing operational risk mitigation, zero-downtime, and 100% auditable governance.",
        components: ["Native BSPI 2030 Compliance", "ISO 20022 Microservices Stack", "Audit-Ready Governance", "Downtime De-Risking"],
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Compliance Base"
      }
    ],
    metrics: {
      advantageTitle: "Dual-Growth Engine Parameters",
      pipelineGrowthTitle: "Pipeline Multiplication",
      pipelineGrowthValue: "2.5x Pipeline",
      pipelineGrowthSub: "New Logo Replication + Upsell",
      replicatedWinsTitle: "Proven Tier-1 Anchors",
      replicatedWinsValue: "3 Blueprints",
      replicatedWinsSub: "BRI, Finnet, ASBANDA/BPDNet",
      crossSellingTitle: "Key Add-on Modules",
      crossSellingValue: "SNAP & SoftPOS",
      crossSellingSub: "High margin expansion for accounts",
      bspiReadyTitle: "BSPI 2030 Compliance",
      bspiReadyValue: "100% Native",
      bspiReadySub: "Zero complex middleware patching"
    },
    pillars: [
      {
        id: "pillar_internal_learning",
        index: "01",
        title: "Deep Internal Learning",
        subtitle: "Deconstructing Tier-1 blueprints to build an unassailable commercial playbook",
        metric: "Proven Playbook",
        tag: "Foundation",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_mid_tier_replication",
        index: "02",
        title: "Mid-Tier Bank Replication",
        subtitle: "Pitching risk-free, proven production reference architectures to commercial banks",
        metric: "Accelerated Sales",
        tag: "Replication",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_account_farming",
        index: "03",
        title: "Account Farming & Upselling",
        subtitle: "Maximizing client lifetime value through modern digital modules (Wallet & SoftPOS)",
        metric: "Expanded LTV",
        tag: "Value Add",
        accentColor: "#34a853"
      },
      {
        id: "pillar_bspi_harmony",
        index: "04",
        title: "BSPI 2030 Regulatory Harmony",
        subtitle: "Ensuring banking transformation aligns seamlessly with central bank mandates",
        metric: "Risk-Free Deploy",
        tag: "Compliance",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "OpenWay delivers world-class payment technology; I deliver enterprise execution and network navigation to unlock new markets.",
      target: "Growth Blueprint: Replication & Expansion"
    }
  }
};
