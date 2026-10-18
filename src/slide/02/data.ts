export type Language = 'IN' | 'EN';

export interface CompetitorMetric {
  feature: string;
  way4: string;
  legacy: string;
  status: 'superior' | 'advantage';
}

export interface MarketPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export interface InfrastructureHub {
  client: string;
  category: string;
  volume: string;
  status: string;
  color: string;
}

export const INFRASTRUCTURE_HUBS: InfrastructureHub[] = [
  { client: "Bank BRI", category: "Tier-1 Core Switching", volume: "100M+ Cards", status: "National Anchor", color: "#1a73e8" },
  { client: "Finnet", category: "National GPN Gateway", volume: "Multi-Million TPS", status: "Active Switch", color: "#34a853" },
  { client: "ASBANDA", category: "BPDNet Regional Hub", volume: "27 Regional Banks", status: "Consortium", color: "#fbbc04" },
  { client: "Mid-Tier Target", category: "Commercial Bank Migration", volume: "High Growth Pipeline", status: "Target Opportunity", color: "#1a73e8" }
];

export const SLIDE02_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  benchmarkLabels: {
    dimension: string;
    way4: string;
    legacy: string;
  };
  comparison: CompetitorMetric[];
  metrics: {
    advantageTitle: string;
    tcoTitle: string;
    tcoValue: string;
    tcoSub: string;
    velocityTitle: string;
    velocityValue: string;
    velocitySub: string;
    tpsTitle: string;
    tpsValue: string;
    tpsSub: string;
    anchorTitle: string;
    anchorValue: string;
    anchorSub: string;
  };
  pillars: MarketPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Kondisi Pasar & Potensi",
      catalyst: "Katalis Regulasi: BSPI 2030",
      title: "Pasar Pembayaran Indonesia & Vektor WAY4"
    },
    descriptionTitle: "Migrasi Monolitik Legasi ke Switching Cloud-Native",
    descriptionText: "Pasar switching perbankan Indonesia didominasi sistem legasi kaku (ACI / Fiserv) yang tertekan mandat BSPI 2030. OpenWay memimpin di Tier-1 nasional (BRI, Finnet, ASBANDA), membuka ceruk pertumbuhan besar pada migrasi bank komersial & menengah.",
    benchmarkLabels: {
      dimension: "Dimensi Arsitektur Utama",
      way4: "WAY4 Cloud",
      legacy: "Monolitik Legasi"
    },
    comparison: [
      {
        feature: "Time-to-Market",
        way4: "2 Minggu (Microservices)",
        legacy: "6 - 9 Bulan (Monolitik)",
        status: "superior"
      },
      {
        feature: "BSPI 2030 & SNAP BI",
        way4: "Dukungan Native Bawaan",
        legacy: "Patch Middleware Rumit",
        status: "superior"
      },
      {
        feature: "Agilitas Implementasi",
        way4: "Cloud-Native / Hybrid",
        legacy: "Hardware Kaku Eksklusif",
        status: "advantage"
      },
      {
        feature: "Profil TCO 5 Tahun",
        way4: "Fleksibel OPEX / CAPEX",
        legacy: "Biaya Pemeliharaan Tinggi",
        status: "superior"
      }
    ],
    metrics: {
      advantageTitle: "Keunggulan Finansial & Komersial",
      tcoTitle: "Reduksi TCO 5 Tahun",
      tcoValue: "Reduksi 40% 5 Thn",
      tcoSub: "Dibandingkan Monolitik Kaku",
      velocityTitle: "Kecepatan Peluncuran",
      velocityValue: "2 Minggu",
      velocitySub: "Microservices",
      tpsTitle: "Throughput",
      tpsValue: "10.000+",
      tpsSub: "TPS Cloud",
      anchorTitle: "Jangkar Nasional Teruji",
      anchorValue: "Tier-1 BRI, Finnet, ASBANDA",
      anchorSub: "Fondasi replikasi bank komersial menengah"
    },
    pillars: [
      {
        id: "legacy_landscape",
        index: "01",
        title: "Switching Legasi Volume Tinggi",
        subtitle: "Didominasi arsitektur kaku ACI / Fiserv di bawah tekanan tinggi",
        metric: "Saturasi Legasi",
        tag: "Kondisi Pasar",
        accentColor: "#ea4335"
      },
      {
        id: "bspi_catalyst",
        index: "02",
        title: "Mandat Katalis BSPI 2030",
        subtitle: "Kerangka Bank Indonesia mewajibkan infrastruktur terbuka & microservices",
        metric: "Mandat Regulasi",
        tag: "Katalis",
        accentColor: "#1a73e8"
      },
      {
        id: "openway_strength",
        index: "03",
        title: "Kekuatan Pasar WAY4 Tanpa Tanding",
        subtitle: "Tulang punggung teruji yang menggerakkan BRI, Finnet, dan ASBANDA",
        metric: "Dominasi Tier-1",
        tag: "Basis Teruji",
        accentColor: "#34a853"
      },
      {
        id: "next_wave",
        index: "04",
        title: "Gelombang Berikutnya: Bank Menengah",
        subtitle: "Bank komersial tertekan untuk migrasi ke switching cloud-native modern",
        metric: "Pipeline Mendesak",
        tag: "Pertumbuhan Baru",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Katalis BSPI 2030 Bank Indonesia mendesak bank komersial migrasi ke arsitektur modern berbiaya efisien.",
      target: "Target Pasar: Bank Komersial & Mid-Tier"
    }
  },
  EN: {
    header: {
      category: "Market Conditions & Potential",
      catalyst: "Regulatory Catalyst: BSPI 2030",
      title: "Indonesia Payment Market & WAY4 Vector"
    },
    descriptionTitle: "Legacy Monolith Migration to Cloud-Native Switching",
    descriptionText: "The Indonesian banking switching market is dominated by rigid legacy systems (ACI / Fiserv) pressured by the BSPI 2030 mandate. OpenWay leads in national Tier-1 (BRI, Finnet, ASBANDA), unlocking massive growth in commercial & mid-tier bank migration.",
    benchmarkLabels: {
      dimension: "Key Architectural Dimension",
      way4: "WAY4 Cloud",
      legacy: "Legacy Monolith"
    },
    comparison: [
      {
        feature: "Time-to-Market",
        way4: "2 Weeks (Microservices)",
        legacy: "6 - 9 Months (Monolith)",
        status: "superior"
      },
      {
        feature: "BSPI 2030 & SNAP BI",
        way4: "Native Built-in Support",
        legacy: "Heavy Middleware Patch",
        status: "superior"
      },
      {
        feature: "Deployment Agility",
        way4: "Cloud-Native / Hybrid",
        legacy: "Rigid Proprietary HW",
        status: "advantage"
      },
      {
        feature: "5-Year TCO Profile",
        way4: "Flexible OPEX / CAPEX",
        legacy: "Severe Maintenance Fees",
        status: "superior"
      }
    ],
    metrics: {
      advantageTitle: "Financial & Commercial Advantage",
      tcoTitle: "5-Year TCO Reduction",
      tcoValue: "40% 5-Yr Reduction",
      tcoSub: "Versus Rigid Monoliths",
      velocityTitle: "Launch Velocity",
      velocityValue: "2 Weeks",
      velocitySub: "Microservices",
      tpsTitle: "Throughput",
      tpsValue: "10,000+",
      tpsSub: "Cloud TPS",
      anchorTitle: "Proven National Anchor",
      anchorValue: "Tier-1 BRI, Finnet, ASBANDA",
      anchorSub: "Foundation for mid-tier replication"
    },
    pillars: [
      {
        id: "legacy_landscape",
        index: "01",
        title: "High-Volume Legacy Switching",
        subtitle: "Dominated by rigid ACI / Fiserv architectures under severe strain",
        metric: "Legacy Saturation",
        tag: "Market State",
        accentColor: "#ea4335"
      },
      {
        id: "bspi_catalyst",
        index: "02",
        title: "Mandatory BSPI 2030 Catalyst",
        subtitle: "Bank Indonesia framework mandates open infrastructure & microservices",
        metric: "Regulatory Mandate",
        tag: "Catalyst",
        accentColor: "#1a73e8"
      },
      {
        id: "openway_strength",
        index: "03",
        title: "Unrivaled WAY4 Market Strength",
        subtitle: "Proven backbone powering BRI, Finnet, and ASBANDA/BPDNet",
        metric: "Tier-1 Hegemony",
        tag: "Proven Base",
        accentColor: "#34a853"
      },
      {
        id: "next_wave",
        index: "04",
        title: "The Next Wave: Mid-Tier Banks",
        subtitle: "Commercial banks pressured to migrate to modern cloud-native switching",
        metric: "Urgent Pipeline",
        tag: "Next Growth",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Bank Indonesia BSPI 2030 catalyst urgently drives commercial banks to cost-efficient modern architecture.",
      target: "Target Market: Commercial & Mid-Tier Banks"
    }
  }
};

// Legacy exports for compatibility
export const MARKET_SUMMARY = {
  regulatoryDriver: "Bank Indonesia BSPI 2030",
  currentDominance: "Tier-1 BRI, Finnet, ASBANDA",
  growthTarget: "Commercial & Mid-Tier Banks",
  migrationTCO: "40% 5-Yr Reduction",
  timeToMarket: "2 Weeks vs 6-9 Months",
  scalability: "10,000+ TPS Cloud-Native"
};
export const COMPETITOR_COMPARISON = SLIDE02_DATA['IN'].comparison;
export const MARKET_PILLARS = SLIDE02_DATA['IN'].pillars;
