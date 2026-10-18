const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Starting Slide 07 Implementation Batch ===');

// Ensure directory src/slide/07 exists
const slide07Dir = path.join(__dirname, '../src/slide/07');
fs.mkdirSync(slide07Dir, { recursive: true });

// ==============================================================
// 1. Create src/slide/07/lottie.json (Dual Engine Parallel Turbines)
// ==============================================================
const lottieSlide07 = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "Dual Engine Parallel Co-existence Turbines",
  ddd: 0,
  assets: [],
  layers: [
    // Layer 1: Ground Shadow (Perspective Ellipse)
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ground Shadow",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [35] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [55] },
            { t: 180, s: [35] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 260, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [110, 26, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [125, 30, 100] },
            { t: 180, s: [110, 26, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [180, 44] } },
            { ty: "fl", c: { a: 0, k: [0.08, 0.12, 0.22, 0.35] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 2: Synchronous Transmission Belt & Laser Stream
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Synchronous Transmission Belt",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [50] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [90] },
            { t: 180, s: [50] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 140, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[-55, -25], [55, -25]]
                }
              }
            },
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[-55, 25], [55, 25]]
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 6 } },
                { n: "g", nm: "gap", v: { a: 0, k: 4 } }
              ]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 3: Engine 1 (Left - Legacy Host Engine, Red/Amber #ea4335)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Turbine 1 - Legacy Mainframe Engine",
      sr: 1,
      ks: {
        o: { a: 0, k: 90 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 180, s: [360] }
          ]
        },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [95, 140, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [95, 136, 0] },
            { t: 180, s: [95, 140, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [68, 68] } },
            { ty: "fl", c: { a: 0, k: [0.92, 0.26, 0.21, 0.9] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.99, 0.91, 0.9, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Rotor Blades
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [46, 8] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "rc", d: 1, s: { a: 0, k: [8, 46] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 4: Engine 2 (Right - Modern WAY4 Cloud Engine, Blue #1a73e8 & Green #34a853)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Turbine 2 - WAY4 Cloud Engine",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [360], e: [0] },
            { t: 180, s: [0] }
          ]
        },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [205, 140, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [205, 134, 0] },
            { t: 180, s: [205, 140, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [108, 108, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [76, 76] } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Hexagonal / Star Rotor
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [52, 10] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "rc", d: 1, s: { a: 0, k: [10, 52] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        },
        // Center Core Beacon
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [20, 20] } },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 5: Floating Digital Revenue Coins (Gold #fbbc04)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Fee-based Income Digital Coin",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [80] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [100] },
            { t: 180, s: [80] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 85, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 75, 0] },
            { t: 180, s: [150, 85, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [24, 24] } },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 6: Sparkle Top Center (Gold #fbbc04)
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Sparkle Top Center",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [30] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [35] },
            { t: 180, s: [30] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 180, s: [180] }
          ]
        },
        p: { a: 0, k: [150, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [80, 80, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [12, 12] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    }
  ]
};

const slide07LottiePath = path.join(slide07Dir, 'lottie.json');
fs.writeFileSync(slide07LottiePath, JSON.stringify(lottieSlide07, null, 2), 'utf8');
console.log('[OK] Created src/slide/07/lottie.json');

// Also save to public/assets/lottie/slide-07.json
const publicLottiePath = path.join(__dirname, '../public/assets/lottie/slide-07.json');
fs.writeFileSync(publicLottiePath, JSON.stringify(lottieSlide07, null, 2), 'utf8');
console.log('[OK] Created public/assets/lottie/slide-07.json');

// ==============================================================
// 2. Create src/slide/07/data.ts (Bilingual IN | EN)
// ==============================================================
const slide07DataPath = path.join(slide07Dir, 'data.ts');
const slide07DataContent = `export type Language = 'IN' | 'EN';

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

export const SLIDE07_DATA: Record<Language, {
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
`;
fs.writeFileSync(slide07DataPath, slide07DataContent, 'utf8');
console.log('[OK] Created src/slide/07/data.ts');

// ==============================================================
// 3. Create src/slide/07/container.tsx
// ==============================================================
const slide07ContainerPath = path.join(slide07Dir, 'container.tsx');
const slide07ContainerContent = `import { useState } from 'react';
import {
  SLIDE07_DATA,
  Language,
  BattlecardTactic,
  TacticalPillar
} from './data';

export interface Slide07Controller {
  header: typeof SLIDE07_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  tacticsTitle: string;
  tactics: BattlecardTactic[];
  metrics: typeof SLIDE07_DATA['IN']['metrics'];
  pillars: TacticalPillar[];
  takeaway: typeof SLIDE07_DATA['IN']['takeaway'];
  activeTacticIndex: number;
  setActiveTacticIndex: (index: number) => void;
}

export function useSlide07Container(language: Language = 'IN'): Slide07Controller {
  const [activeTacticIndex, setActiveTacticIndex] = useState<number>(0);
  const data = SLIDE07_DATA[language] || SLIDE07_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    tacticsTitle: data.tacticsTitle,
    tactics: data.tactics,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeTacticIndex,
    setActiveTacticIndex
  };
}
`;
fs.writeFileSync(slide07ContainerPath, slide07ContainerContent, 'utf8');
console.log('[OK] Created src/slide/07/container.tsx');

// ==============================================================
// 4. Create src/slide/07/visual-3D.tsx
// ==============================================================
const slide07VisualPath = path.join(slide07Dir, 'visual-3D.tsx');
const slide07VisualContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeTacticIndex?: number;
  onSelectTactic?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      {/* Pure Visual Canvas: 100% Focused on Dual Engine Parallel Turbines Lottie Engine (Zero Title, Zero Text Cards) */}
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[220px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(slide07VisualPath, slide07VisualContent, 'utf8');
console.log('[OK] Created src/slide/07/visual-3D.tsx');

// ==============================================================
// 5. Create src/slide/07/index.tsx
// ==============================================================
const slide07IndexPath = path.join(slide07Dir, 'index.tsx');
const slide07IndexContent = `import React from 'react';
import { useSlide07Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide07Props {
  language?: Language;
}

export const Slide07: React.FC<Slide07Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    tacticsTitle,
    tactics,
    metrics,
    pillars,
    takeaway,
    activeTacticIndex,
    setActiveTacticIndex
  } = useSlide07Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Slide Header: Rata Tengah 2 Baris (Sub Judul Kecil Diatas & Judul Utama Besar 1-Line) */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Dual Engine Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Battlecard Tactics Stack */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Three Battlecard Tactics Cards: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
              <span>{tacticsTitle}</span>
              <span className="text-amber-600 flex items-center gap-1 font-mono text-[9px] font-bold">
                <Zap className="w-3 h-3" />
                <span>Dual Engine Advantage</span>
              </span>
            </div>

            {tactics.map((tactic, idx) => {
              const isActive = idx === activeTacticIndex;
              return (
                <div
                  key={tactic.id}
                  onClick={() => setActiveTacticIndex(idx)}
                  className={"p-2 rounded-lg border text-left transition-all cursor-pointer " + (
                    isActive
                      ? "bg-amber-50/80 border-amber-500/80 shadow-2xs ring-1 ring-amber-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-amber-700 bg-amber-100/70 px-1.5 py-0.2 rounded">
                        #{tactic.tacticNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {tactic.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.2 rounded " + (
                      idx === 0 ? "bg-amber-100/70 text-amber-800" :
                      idx === 1 ? "bg-emerald-100/70 text-emerald-800" :
                      "bg-blue-100/70 text-blue-700"
                    )}>
                      {tactic.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {tactic.mechanism}
                  </div>

                  <div className="text-[9px] text-slate-500 mt-1 pt-0.5 border-t border-slate-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{tactic.commercialImpact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Dual Engine Turbines Lottie Engine + Battlecard Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Dual Engine Turbines */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activeTacticIndex={activeTacticIndex}
              onSelectTactic={setActiveTacticIndex}
            />
          </div>

          {/* Strategic Metrics & Battlecard Parameters (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-amber-50/50 border border-amber-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.migrationRiskTitle}
                </div>
                <div className="text-2xl font-black text-amber-700 font-inter tabular-nums mt-0.5">
                  {metrics.migrationRiskValue}
                </div>
                <div className="text-[10px] text-amber-600 font-medium">
                  {metrics.migrationRiskSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.tcoModelTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.tcoModelValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.tcoModelSub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.deploySpeedTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.deploySpeedValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.deploySpeedSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.competitiveEdgeTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.competitiveEdgeValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.competitiveEdgeSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Tactical Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => {
          const pastelStyles: Record<string, string> = {
            '#ea4335': 'border-[#ea4335] bg-[#fce8e6]/40 text-[#c5221f]',
            '#1a73e8': 'border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]',
            '#34a853': 'border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]',
            '#fbbc04': 'border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]',
          };
          const style = pastelStyles[pillar.accentColor] || 'border-amber-600 bg-slate-50/60 text-amber-700';
          const parts = style.split(' ');
          const borderBg = parts.slice(0, 2).join(' ');
          const textCol = parts[2];

          return (
            <div
              key={pillar.id}
              className={"p-2.5 rounded-xl border-l-2 transition-all flex flex-col justify-between " + borderBg}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  {pillar.index}
                </span>
                <span className={"text-[9px] font-mono font-bold " + textCol}>
                  {pillar.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
                <span className={"text-[10px] font-mono font-bold " + textCol}>
                  {pillar.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide07;
`;
fs.writeFileSync(slide07IndexPath, slide07IndexContent, 'utf8');
console.log('[OK] Created src/slide/07/index.tsx');

// ==============================================================
// 6. Update src/slide/slidesData.ts to add Slide 7 in IN & EN
// ==============================================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
let slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

const slide07MetadataIN = `    {
      id: 7,
      title: "Lampiran Taktis (Appendix) – Battlecard Kompetitif",
      subtitle: "Strategi De-Risking Dual Engine & Kemasan Komersial Fleksibel",
      category: "Lampiran Taktis",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menghadapi keraguan atau pertanyaan teknis-komersial mendalam dari tim seleksi mengenai cara mengatasi resistensi bank terhadap biaya dan risiko migrasi sistem inti.",
        talkingPoints: [
          "Sebagai lampiran taktis, saya menyertakan Competitive Battlecard ini untuk mengatasi keraguan dewan direksi bank.",
          "Ketika berhadapan dengan ketakutan bank akan risiko migrasi sistem inti, senjata utama saya adalah menawarkan Strategi Dual Engine.",
          "Kita jalankan platform WAY4 sebagai engine pendamping secara paralel dengan mesin lama mereka (ACI / Fiserv).",
          "Kita pindahkan transaksi produk digital berisiko rendah seperti QRIS atau e-wallet ke WAY4 terlebih dahulu. Setelah sistem terbukti stabil tanpa downtime, barulah portofolio utama dimigrasikan bertahap.",
          "Taktik komersial ini juga didukung oleh Commercial Packaging fleksibel (Opex vs Capex) agar ramah anggaran, serta membingkai teknologi WAY4 sebagai mesin penghasil fee-based income instan bagi bank."
        ],
        potentialQuestions: [
          "Apakah bank mau membayar biaya dua sistem berjalan bersamaan selama fase Dual Engine?"
        ],
        suggestedAnswer: "Ya, karena biaya risiko downtime satu jam saja di perbankan jauh lebih besar daripada biaya lisensi transisi. Selain itu, skema lisensi Opex/berbasis transaksi dari WAY4 meringankan beban awal bank."
      }
    }`;

const slide07MetadataEN = `    {
      id: 7,
      title: "Tactical Appendix – Competitive Battlecard",
      subtitle: "Dual Engine De-Risking Strategy & Commercial Packaging",
      category: "Tactical Appendix",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Overcome deep technical and commercial hesitation from the evaluation panel regarding bank resistance to core migration risk and transition licensing fees.",
        talkingPoints: [
          "As an actionable appendix, I include this Competitive Battlecard to neutralize bank boardroom hesitation.",
          "When facing executive fears of core switching replacement, my primary strategy is proposing the Dual Engine architecture.",
          "We operate WAY4 alongside their legacy engine (ACI/Fiserv) as a parallel co-existence platform.",
          "We route agile, lower-risk digital transactions like QRIS and e-wallets through WAY4 first to prove stability and performance before migrating core account portfolios.",
          "This is backed by flexible commercial packaging (Opex vs Capex) to accommodate bank cash flows and frame WAY4 as an instant fee-based income generating engine."
        ],
        potentialQuestions: [
          "Will commercial banks agree to finance dual running systems during the transition phase?"
        ],
        suggestedAnswer: "Yes, because the commercial and reputational cost of a single hour of core switching downtime far outweighs transition licensing. Furthermore, WAY4's flexible transaction-based OPEX structure minimizes upfront cash outlay."
      }
    }`;

// Insert into IN array if not already there
if (!slidesDataContent.includes('Lampiran Taktis (Appendix) – Battlecard Kompetitif')) {
  slidesDataContent = slidesDataContent.replace(
    /id:\s*6,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
    (match) => match + ',\n' + slide07MetadataIN
  );
}

// Insert into EN array if not already there
if (!slidesDataContent.includes('Tactical Appendix – Competitive Battlecard')) {
  const parts = slidesDataContent.split('EN: [');
  if (parts.length > 1) {
    const enPart = parts[1].replace(
      /id:\s*6,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
      (match) => match + ',\n' + slide07MetadataEN
    );
    slidesDataContent = parts[0] + 'EN: [' + enPart;
  }
}

fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts with Slide 07');

// ==============================================================
// 7. Update src/App.tsx to import & render Slide07
// ==============================================================
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Add import if not present
if (!appContent.includes("import { Slide07 } from './slide/07';")) {
  appContent = appContent.replace(
    "import { Slide06 } from './slide/06';",
    "import { Slide06 } from './slide/06';\nimport { Slide07 } from './slide/07';"
  );
}

// Update switch statement in renderSlideContent
if (!appContent.includes('case 6:')) {
  appContent = appContent.replace(
    /case 5:\s*return <Slide06 language=\{language\} \/>;/,
    "case 5:\n        return <Slide06 language={language} />;\n      case 6:\n        return <Slide07 language={language} />;"
  );
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx with Slide 07 render');

console.log('=== Slide 07 Batch Implementation Completed Successfully! ===');
