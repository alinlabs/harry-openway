export type Language = 'IN' | 'EN';

export interface BattlecardTactic {
  id: string;
  tacticNumber: string;
  title: string;
  subtitle: string;
  mechanism: string;
  commercialImpact: string;
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
}

export interface TacticalPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE19_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  tacticsTitle: string;
  tactics: BattlecardTactic[];
  metrics: {
    advantageTitle: string;
    migrationRiskTitle: string;
    migrationRiskValue: string;
    migrationRiskSub: string;
    tcoModelTitle: string;
    tcoModelValue: string;
    tcoModelSub: string;
    deploySpeedTitle: string;
    deploySpeedValue: string;
    deploySpeedSub: string;
    competitiveEdgeTitle: string;
    competitiveEdgeValue: string;
    competitiveEdgeSub: string;
  };
  pillars: TacticalPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Lampiran Taktis (Appendix)",
      catalyst: "Battlecard Kompetitif & Strategi",
      title: "Strategi De-Risking Dual Engine & Kemasan Komersial Fleksibel"
    },
    descriptionTitle: "Migrasi Paralel, Jaminan Tanpa Downtime & Model OPEX/CAPEX",
    descriptionText: "Menghilangkan friksi migrasi inti dan keraguan dewan direksi. Berjalan berdampingan secara paralel dengan sistem lama (ACI/Fiserv), mengalihkan kanal digital lincah terlebih dahulu, dan menyusun skema lisensi fleksibel untuk mempercepat pendapatan berbasis biaya (fee-based income).",
    tacticsTitle: "Tiga Pilar Senjata Taktis Komersial (Battlecard)",
    tactics: [
      {
        id: "tactic_dual_engine",
        tacticNumber: "01",
        title: "Strategi Dual Engine (Koeksistensi Paralel)",
        subtitle: "Menjalankan engine WAY4 berdampingan dengan core lama tanpa big-bang",
        mechanism: "Produk digital berisiko rendah (QRIS & e-wallet) dialihkan ke WAY4 terlebih dahulu untuk menguji stabilitas sebelum portofolio utama dimigrasikan.",
        commercialImpact: "Menghilangkan 100% risiko downtime & ketakutan direksi",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Dual Engine"
      },
      {
        id: "tactic_zero_downtime",
        tacticNumber: "02",
        title: "Garansi Ketersediaan Zero-Downtime 99.999%",
        subtitle: "Mitigasi kerugian operasional dan penalti Bank Indonesia",
        mechanism: "Arsitektur cloud-native microservices memastikan replikasi data real-time dua arah tanpa gangguan pada nasabah perbankan.",
        commercialImpact: "Kepatuhan penuh mandat regulasi BSPI 2030",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Nol Downtime"
      },
      {
        id: "tactic_flexible_commercial",
        tacticNumber: "03",
        title: "Kemasan Komersial Fleksibel (OPEX vs CAPEX)",
        subtitle: "Menyesuaikan struktur lisensi dengan batasan anggaran bank",
        mechanism: "Pilihan lisensi perpetual bertahap atau model langganan berbasis transaksi (OPEX) yang membingkai WAY4 sebagai mesin pencetak fee income instan.",
        commercialImpact: "Mempercepat persetujuan komite anggaran & CFO",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "OPEX / CAPEX"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Tolak Ukur Battlecard",
      migrationRiskTitle: "Risiko Migrasi Sistem",
      migrationRiskValue: "Nol Downtime",
      migrationRiskSub: "Pendekatan Dual Engine paralel",
      tcoModelTitle: "Fleksibilitas Komersial",
      tcoModelValue: "OPEX / CAPEX",
      tcoModelSub: "Skema berbasis transaksi",
      deploySpeedTitle: "Kecepatan Peluncuran Produk",
      deploySpeedValue: "2-4 Minggu",
      deploySpeedSub: "Kanal QRIS, Wallet & SNAP",
      competitiveEdgeTitle: "Keunggulan vs ACI / Fiserv",
      competitiveEdgeValue: "40% TCO",
      competitiveEdgeSub: "Biaya 5 tahun jauh lebih efisien"
    },
    pillars: [
      {
        id: "pillar_dual_transition",
        index: "01",
        title: "Transisi Dual Engine",
        subtitle: "Koeksistensi paralel menghilangkan risiko kegagalan sistem inti",
        metric: "Tanpa Risiko",
        tag: "De-Risking",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_digital_phasing",
        index: "02",
        title: "Fase Digital-First",
        subtitle: "Migrasi transaksi QRIS & wallet terlebih dahulu untuk bukti nyata",
        metric: "Dampak Instan",
        tag: "Agilitas",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_cfo_friendly",
        index: "03",
        title: "Struktur Ramah CFO",
        subtitle: "Menyelaraskan skema lisensi dengan arus kas dan model komersial bank",
        metric: "Fleksibel",
        tag: "Komersial",
        accentColor: "#34a853"
      },
      {
        id: "pillar_fee_monetization",
        index: "04",
        title: "Monetisasi Cepat Fee Income",
        subtitle: "Mempercepat time-to-market kanal digital penghasil laba transaksi",
        metric: "ROI Cepat",
        tag: "Pertumbuhan",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Strategi Dual Engine mendobrak resistensi dewan direksi: menjamin nol risiko kegagalan sistem inti dan mempercepat pendapatan komersial.",
      target: "Strategi Taktis: Battlecard Kompetitif WAY4"
    }
  },
  EN: {
    header: {
      category: "Tactical Appendix",
      catalyst: "Competitive Battlecard & Strategy",
      title: "Dual Engine De-Risking Strategy & Commercial Packaging"
    },
    descriptionTitle: "Parallel Migration, Zero-Downtime Guarantee & OPEX/CAPEX Models",
    descriptionText: "Eliminating enterprise switching friction and executive board hesitation. Co-existing seamlessly alongside legacy mainframes (ACI/Fiserv), routing agile digital channels first, and structuring cash-flow friendly licensing to monetize fast fee-based revenue.",
    tacticsTitle: "Three Pillars of Commercial Tactical Battlecard",
    tactics: [
      {
        id: "tactic_dual_engine",
        tacticNumber: "01",
        title: "Dual Engine Strategy (Parallel Co-existence)",
        subtitle: "Running WAY4 alongside legacy engines without high-risk big-bang switchover",
        mechanism: "Low-risk digital traffic (QRIS, e-wallets, virtual cards) is routed through WAY4 first to validate stability before migrating core account portfolios.",
        commercialImpact: "Eliminates 100% of executive downtime fears",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Dual Engine"
      },
      {
        id: "tactic_zero_downtime",
        tacticNumber: "02",
        title: "99.999% Zero-Downtime SLA Guarantee",
        subtitle: "Mitigating operational losses and central bank regulatory penalties",
        mechanism: "Cloud-native microservices architecture ensures seamless bidirectional data synchronization with zero interruption to banking consumers.",
        commercialImpact: "Full compliance with Bank Indonesia BSPI 2030",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Zero Downtime"
      },
      {
        id: "tactic_flexible_commercial",
        tacticNumber: "03",
        title: "Flexible Commercial Packaging (OPEX vs. CAPEX)",
        subtitle: "Aligning licensing structures with bank financial and cash flow realities",
        mechanism: "Phased perpetual licensing or transaction-based subscription (OPEX), framing WAY4 as a self-funding digital fee-income generating engine.",
        commercialImpact: "Accelerates CFO & budget committee approval",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "OPEX / CAPEX"
      }
    ],
    metrics: {
      advantageTitle: "Battlecard Competitive Benchmarks",
      migrationRiskTitle: "Core Migration Risk",
      migrationRiskValue: "Zero Downtime",
      migrationRiskSub: "Dual Engine parallel deployment",
      tcoModelTitle: "Commercial Flexibility",
      tcoModelValue: "OPEX / CAPEX",
      tcoModelSub: "Transaction-linked models",
      deploySpeedTitle: "Digital Product Rollout",
      deploySpeedValue: "2-4 Weeks",
      deploySpeedSub: "QRIS, Wallet & SNAP channels",
      competitiveEdgeTitle: "Edge vs. ACI / Fiserv",
      competitiveEdgeValue: "40% TCO",
      competitiveEdgeSub: "Substantially lower 5-year cost"
    },
    pillars: [
      {
        id: "pillar_dual_transition",
        index: "01",
        title: "Dual Engine Transition",
        subtitle: "Parallel co-existence de-risks critical switching core replacement",
        metric: "Zero Downtime",
        tag: "De-Risking",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_digital_phasing",
        index: "02",
        title: "Digital-First Phasing",
        subtitle: "Migrating agile QRIS and wallet traffic in phase one for quick wins",
        metric: "Instant Impact",
        tag: "Agility",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_cfo_friendly",
        index: "03",
        title: "CFO-Friendly Packaging",
        subtitle: "Tailoring perpetual vs subscription OPEX to bank budget constraints",
        metric: "Flexible OPEX",
        tag: "Commercial",
        accentColor: "#34a853"
      },
      {
        id: "pillar_fee_monetization",
        index: "04",
        title: "Fast Fee Monetization",
        subtitle: "Accelerating time-to-market for instant transaction income generation",
        metric: "Fast ROI",
        tag: "Growth",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "The Dual Engine strategy dissolves boardroom resistance: guaranteeing zero core failure risk while accelerating new revenue.",
      target: "Tactical Strategy: WAY4 Competitive Battlecard"
    }
  }
};
