export type Language = 'IN' | 'EN';

export interface BlueprintSpecItem {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

export interface ClientBlueprintCase {
  client: string;
  badge: string;
  scaleMetric: string;
  architectureHighlight: string;
  replicationValue: string;
}

export interface MigrationStage {
  stage: string;
  percent: number;
  label: string;
  riskStatus: string;
  action: string;
}

export interface ReliabilityStat {
  metric: string;
  provenValue: string;
  benchmarkStandard: string;
  status: string;
}

export interface BottomPillar {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
}

export const SLIDE09_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  dossierTitle: string;
  dossierSubtitle: string;
  dossierSummary: string;
  blueprintSpecs: BlueprintSpecItem[];
  clientCases: ClientBlueprintCase[];
  migrationTitle: string;
  migrationSubtitle: string;
  migrationStages: MigrationStage[];
  reliabilityTitle: string;
  reliabilitySubtitle: string;
  reliabilityStats: ReliabilityStat[];
  pillars: BottomPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Core Stack Deep Dive · Layer 2 [Tengah]",
      catalyst: "Replikasi Keberhasilan Teruji BRI, Finnet & ASBANDA ke Bank Komersial",
      title: "Layer 2: Cetak Biru Platform Inti WAY4 & Replikasi Tier-1"
    },
    dossierTitle: "Planning Account Note: Eliminasi Total Risiko Migrasi Melalui Bukti Teruji Skala Nasional",
    dossierSubtitle: "Bank Menengah Tidak Perlu Menjadi Kelinci Percobaan Teknologi: Cetak Biru Teruji Menahan 10.000+ TPS",
    dossierSummary: "Kekhawatiran terbesar direksi bank adalah downtime transaksi saat migrasi core switch. OpenWay memiliki modal kredibilitas tak terbantahkan di Indonesia: memproses transaksi skala terbesar di Bank BRI, Finnet, dan jaringan ASBANDA. Melalui arsitektur Dual Engine, migrasi dialihkan secara bertahap tanpa sedetik pun risiko cut-over fatal.",
    blueprintSpecs: [
      { label: "Volume Teruji Nasional", value: "50+ Juta Txn/Hari", sub: "Memproses transaksi raksasa perbankan", highlight: true },
      { label: "Uji Stres Puncak TPS", value: "10.000+ TPS Sustained", sub: "Beban puncak libur nasional & Harbolnas", highlight: true },
      { label: "Ketersediaan Sistem", value: "99.999% SLA Uptime", sub: "Downtime kurang dari 5 menit/tahun" },
      { label: "Arsitektur Migrasi", value: "Dual Engine Coexistence", sub: "Rollback instan zero downtime risk" }
    ],
    clientCases: [
      {
        client: "Bank BRI (Terbesar di Indonesia)",
        badge: "Micro-Banking & Agen BRILink",
        scaleMetric: "30+ Juta Txn Harian",
        architectureHighlight: "Pemrosesan transaksi kartu debit, ATM switching, dan jaringan ribuan agen laku pandai.",
        replicationValue: "Membuktikan ketahanan sistem terhadap lonjakan transaksi ekstrem di pelosok nusantara."
      },
      {
        client: "Finnet Indonesia (Telkom Group)",
        badge: "National Payment Gateway",
        scaleMetric: "Switching Multikonsorsium",
        architectureHighlight: "Interkoneksi switching nasional, biller aggregator, dan pemrosesan multi-institusi.",
        replicationValue: "Cetak biru integrasi terbuka multi-protokol yang siap direplikasi ke bank swasta."
      },
      {
        client: "ASBANDA / BPDNet",
        badge: "Konsorsium BPD Seluruh Indonesia",
        scaleMetric: "27 Bank Daerah Terhubung",
        architectureHighlight: "Platform switching bersama yang menstandarisasi transaksi perbankan regional.",
        replicationValue: "Bukti keberhasilan replikasi satu platform inti ke berbagai bank daerah dengan efisiensi tinggi."
      }
    ],
    migrationTitle: "Arsitektur Migrasi Paralel: Dual Engine Coexistence",
    migrationSubtitle: "Pengalihan Beban Transaksi Bertahap Menghilangkan Risiko 'Big-Bang Cutover'",
    migrationStages: [
      { stage: "Fase 1: Side-by-Side Standby", percent: 10, label: "Pilot Internal & Uji Beban Bayangan (Shadow Routing)", riskStatus: "Zero Risk", action: "Sinkronisasi data real-time tanpa memengaruhi nasabah" },
      { stage: "Fase 2: Non-Critical Routing", percent: 30, label: "Pengalihan Transaksi Kartu Tertentu & Terminal Terpilih", riskStatus: "Controlled", action: "Validasi performa TPS & kepatuhan pelaporan regulator" },
      { stage: "Fase 3: Core Volume Split", percent: 70, label: "Mayoritas Beban Transaksi Dialihkan ke WAY4 Engine", riskStatus: "Stable High", action: "Sistem legacy menjadi failover otomatis cadangan" },
      { stage: "Fase 4: Full Switchover", percent: 100, label: "Peralihan Penuh 100% Menjadi Platform Inti Utama", riskStatus: "Complete", action: "Decommissioning sistem lama & efisiensi biaya lisensi tuntas" }
    ],
    reliabilityTitle: "Metrik Keandalan Platform Inti Terverifikasi",
    reliabilitySubtitle: "Standar Ketahanan Industri Perbankan Kelas Dunia",
    reliabilityStats: [
      { metric: "SLA Ketersediaan Layanan", provenValue: "99.999%", benchmarkStandard: "Standar Bank Indonesia (99.5%)", status: "Terlampaui" },
      { metric: "RPO (Recovery Point Objective)", provenValue: "0 Detik", benchmarkStandard: "Nol Data Transaksi Hilang", status: "Zero Loss" },
      { metric: "RTO (Recovery Time Objective)", provenValue: "< 60 Detik", benchmarkStandard: "Regulasi OJK (< 2 Jam)", status: "120x Lebih Cepat" }
    ],
    pillars: [
      { index: "01", tag: "PROVEN TRACK", title: "Cetak Biru Tier-1", subtitle: "Teruji di BRI, Finnet, dan jaringan ASBANDA", metric: "50M+ Txn" },
      { index: "02", tag: "ZERO DOWNTIME", title: "Dual Engine Coexistence", subtitle: "Eliminasi total risiko cutover migrasi sistem", metric: "Nol Resiko" },
      { index: "03", tag: "PEAK CAPACITY", title: "10.000+ TPS Sustained", subtitle: "Menahan lonjakan transaksi puncak nasional", metric: "10k TPS" },
      { index: "04", tag: "BEST PRACTICE", title: "Waktu Implementasi 50%", subtitle: "Template siap pakai memangkas durasi proyek", metric: "-50% Waktu" }
    ],
    takeaway: {
      proof: "Didukung pengalaman 12 tahun Astra dalam mengelola proyek mission-critical korporasi besar berstandar keandalan tertinggi.",
      target: "Layer 2 Target: Menutup Keraguan Teknis Bank Komersial Menengah dengan Replikasi Kredibilitas Tier-1"
    }
  },
  EN: {
    header: {
      category: "Core Stack Deep Dive · Layer 2 [Middle]",
      catalyst: "Replication of Battle-Tested Success at BRI, Finnet & ASBANDA to Commercial Banks",
      title: "Layer 2: WAY4 Core Platform Blueprint & Tier-1 Replication"
    },
    dossierTitle: "Planning Account Note: Eliminating Migration Risks via Proven National Track Record",
    dossierSubtitle: "Mid-Tier Banks Need Not Act as Technology Guinea Pigs: Blueprints Proven Under 10,000+ TPS",
    dossierSummary: "Bank executives' primary fear is transaction downtime during core switch replacement. OpenWay holds unassailable credibility in Indonesia: processing the country's largest transaction volumes at Bank BRI, Finnet, and the ASBANDA network. Using Dual Engine coexistence, traffic transitions gradually with zero cutover risk.",
    blueprintSpecs: [
      { label: "Proven National Volume", value: "50+ Million Txn/Day", sub: "Processing Indonesia's largest banking flows", highlight: true },
      { label: "Stress Test Peak TPS", value: "10,000+ TPS Sustained", sub: "Survives holiday and national shopping spikes", highlight: true },
      { label: "High Availability SLA", value: "99.999% SLA Uptime", sub: "Less than 5 minutes unplanned downtime/year" },
      { label: "Migration Architecture", value: "Dual Engine Coexistence", sub: "Instant automated rollback with zero disruption" }
    ],
    clientCases: [
      {
        client: "Bank BRI (Indonesia's Largest Bank)",
        badge: "Micro-Banking & BRILink Network",
        scaleMetric: "30+ Million Daily Txn",
        architectureHighlight: "Core debit switching, ATM interchange, and nationwide agent banking network.",
        replicationValue: "Demonstrates platform resilience under extreme transaction surges in remote regions."
      },
      {
        client: "Finnet Indonesia (Telkom Group)",
        badge: "National Payment Gateway",
        scaleMetric: "Multi-Consortium Switching",
        architectureHighlight: "National payment gateway backbone, multi-biller switching, and clearing hub.",
        replicationValue: "Open multi-protocol integration blueprint ready for private commercial bank adoption."
      },
      {
        client: "ASBANDA / BPDNet",
        badge: "Nationwide Regional Bank Consortium",
        scaleMetric: "27 Regional Banks Connected",
        architectureHighlight: "Shared payment switching hub standardizing regional government bank transactions.",
        replicationValue: "Proves one core platform can be efficiently deployed across multiple distinct banking entities."
      }
    ],
    migrationTitle: "Parallel Migration Architecture: Dual Engine Coexistence",
    migrationSubtitle: "Phased Transaction Traffic Shift Eliminates High-Risk 'Big-Bang' Cutovers",
    migrationStages: [
      { stage: "Stage 1: Side-by-Side Standby", percent: 10, label: "Internal Pilot & Shadow Load Testing", riskStatus: "Zero Risk", action: "Real-time data synchronization with zero customer impact" },
      { stage: "Stage 2: Non-Critical Routing", percent: 30, label: "Selective Card Program & POS Terminal Traffic Shift", riskStatus: "Controlled", action: "Validate TPS throughput and regulatory reporting parity" },
      { stage: "Stage 3: Core Volume Split", percent: 70, label: "Majority Payment Volume Routed to WAY4 Engine", riskStatus: "Stable High", action: "Legacy switch operates as live hot-standby fallback" },
      { stage: "Stage 4: Full Switchover", percent: 100, label: "100% Core Production Traffic on WAY4 Platform", riskStatus: "Complete", action: "Full legacy decommissioning and license fee optimization" }
    ],
    reliabilityTitle: "Verified Core Platform Reliability Metrics",
    reliabilitySubtitle: "Meeting the Highest Global and Central Bank Resilience Standards",
    reliabilityStats: [
      { metric: "Service Availability SLA", provenValue: "99.999%", benchmarkStandard: "Bank Indonesia Minimum (99.5%)", status: "Surpassed" },
      { metric: "RPO (Recovery Point Objective)", provenValue: "0 Seconds", benchmarkStandard: "Zero Transaction Data Loss", status: "Zero Loss" },
      { metric: "RTO (Recovery Time Objective)", provenValue: "< 60 Seconds", benchmarkStandard: "OJK Regulatory Cap (< 2 Hours)", status: "120x Faster" }
    ],
    pillars: [
      { index: "01", tag: "PROVEN TRACK", title: "Tier-1 Blueprint", subtitle: "Battle-tested at BRI, Finnet, and ASBANDA", metric: "50M+ Txn" },
      { index: "02", tag: "ZERO DOWNTIME", title: "Dual Engine Coexistence", subtitle: "Eliminates risky single cutover migration points", metric: "Zero Risk" },
      { index: "03", tag: "PEAK CAPACITY", title: "10,000+ TPS Sustained", subtitle: "Easily absorbs national transaction peak loads", metric: "10k TPS" },
      { index: "04", tag: "BEST PRACTICE", title: "50% Faster Rollout", subtitle: "Pre-configured templates cut project duration in half", metric: "-50% Time" }
    ],
    takeaway: {
      proof: "Backed by Astra's 12-year history delivering mission-critical enterprise systems with flawless governance.",
      target: "Layer 2 Target: Overcome Mid-Tier Bank Risk Aversion via Proven Tier-1 National Credibility"
    }
  }
};
