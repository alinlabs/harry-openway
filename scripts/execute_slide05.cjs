const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Starting Slide 05 Implementation Batch ===');

// Ensure directory src/slide/05 exists
const slide05Dir = path.join(__dirname, '../src/slide/05');
fs.mkdirSync(slide05Dir, { recursive: true });

// ==============================================================
// 1. Create src/slide/05/lottie.json (3-Tier Stepped Podiums)
// ==============================================================
const lottieSlide05 = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "30-60-90 Day Ascending Stepped Podiums",
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
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 26, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [116, 30, 100] },
            { t: 180, s: [100, 26, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [170, 45] } },
            { ty: "fl", c: { a: 0, k: [0.08, 0.12, 0.22, 0.35] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 2: Connecting Ascending Roadmap Guide Lines
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Ascending Trajectory Guide Line",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [45] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [90] },
            { t: 180, s: [45] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 160, 0] },
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
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-70, 40], [0, 0], [70, -40]]
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
                { n: "g", nm: "gap", v: { a: 0, k: 5 } }
              ]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 3: Podium 1 (Days 1 - 30: Internal Learning, Blue #1a73e8, Left)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Podium 1 - Days 1 to 30",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [80, 200, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [80, 196, 0] },
            { t: 180, s: [80, 200, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [104, 104, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
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
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -18], [42, 0], [0, 18], [-42, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.91, 0.94, 0.99, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Step Indicator
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -9], [22, 0], [0, 9], [-22, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 0.9] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 4: Podium 2 (Days 31 - 60: C-Level Discovery, Amber #fbbc04, Middle)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Podium 2 - Days 31 to 60",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 155, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 150, 0] },
            { t: 180, s: [150, 155, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [105, 105, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
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
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -20], [46, 0], [0, 20], [-46, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 0.97, 0.88, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -10], [25, 0], [0, 10], [-25, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 0.9] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 5: Podium 3 (Days 61 - 90: Pipeline Commitment, Green #34a853, Right Highest)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Podium 3 - Days 61 to 90 Peak",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [220, 110, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [220, 104, 0] },
            { t: 180, s: [220, 110, 0] }
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
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -22], [50, 0], [0, 22], [-50, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.9, 0.96, 0.92, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -11], [28, 0], [0, 11], [-28, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 0.9] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 6: Floating Flag / Achievement Target Badge above Podium 3
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Target Pipeline Flag Badge",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [85] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [100] },
            { t: 180, s: [85] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [220, 68, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [220, 60, 0] },
            { t: 180, s: [220, 68, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [18, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 7: Twinkling Sparkle Star Top Right
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Twinkling Sparkle",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [25] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [35] },
            { t: 180, s: [25] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 180, s: [180] }
          ]
        },
        p: { a: 0, k: [255, 60, 0] },
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

const slide05LottiePath = path.join(slide05Dir, 'lottie.json');
fs.writeFileSync(slide05LottiePath, JSON.stringify(lottieSlide05, null, 2), 'utf8');
console.log('[OK] Created src/slide/05/lottie.json');

// Also save to public/assets/lottie/slide-05.json
const publicLottiePath = path.join(__dirname, '../public/assets/lottie/slide-05.json');
fs.writeFileSync(publicLottiePath, JSON.stringify(lottieSlide05, null, 2), 'utf8');
console.log('[OK] Created public/assets/lottie/slide-05.json');

// ==============================================================
// 2. Create src/slide/05/data.ts (Bilingual IN | EN)
// ==============================================================
const slide05DataPath = path.join(slide05Dir, 'data.ts');
const slide05DataContent = `export type Language = 'IN' | 'EN';

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

export const SLIDE05_DATA: Record<Language, {
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
`;
fs.writeFileSync(slide05DataPath, slide05DataContent, 'utf8');
console.log('[OK] Created src/slide/05/data.ts');

// ==============================================================
// 3. Create src/slide/05/container.tsx
// ==============================================================
const slide05ContainerPath = path.join(slide05Dir, 'container.tsx');
const slide05ContainerContent = `import { useState } from 'react';
import {
  SLIDE05_DATA,
  Language,
  ExecutionPhase,
  RoadmapPillar
} from './data';

export interface Slide05Controller {
  header: typeof SLIDE05_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  phasesTitle: string;
  phases: ExecutionPhase[];
  metrics: typeof SLIDE05_DATA['IN']['metrics'];
  pillars: RoadmapPillar[];
  takeaway: typeof SLIDE05_DATA['IN']['takeaway'];
  activePhaseIndex: number;
  setActivePhaseIndex: (index: number) => void;
}

export function useSlide05Container(language: Language = 'IN'): Slide05Controller {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const data = SLIDE05_DATA[language] || SLIDE05_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    phasesTitle: data.phasesTitle,
    phases: data.phases,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activePhaseIndex,
    setActivePhaseIndex
  };
}
`;
fs.writeFileSync(slide05ContainerPath, slide05ContainerContent, 'utf8');
console.log('[OK] Created src/slide/05/container.tsx');

// ==============================================================
// 4. Create src/slide/05/visual-3D.tsx
// ==============================================================
const slide05VisualPath = path.join(slide05Dir, 'visual-3D.tsx');
const slide05VisualContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activePhaseIndex?: number;
  onSelectPhase?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      {/* Pure Visual Canvas: 100% Focused on 30-60-90 Day Stepped Podiums Lottie Engine (Zero Title, Zero Text Cards) */}
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
fs.writeFileSync(slide05VisualPath, slide05VisualContent, 'utf8');
console.log('[OK] Created src/slide/05/visual-3D.tsx');

// ==============================================================
// 5. Create src/slide/05/index.tsx
// ==============================================================
const slide05IndexPath = path.join(slide05Dir, 'index.tsx');
const slide05IndexContent = `import React from 'react';
import { useSlide05Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CalendarCheck2, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide05Props {
  language?: Language;
}

export const Slide05: React.FC<Slide05Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    phasesTitle,
    phases,
    metrics,
    pillars,
    takeaway,
    activePhaseIndex,
    setActivePhaseIndex
  } = useSlide05Container(language);

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

      {/* 2. Main 30-60-90 Roadmap Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & 30-60-90 Phased Execution Stack */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Phased Execution Cards (Days 30, 60, 90): Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
              <span>{phasesTitle}</span>
              <span className="text-blue-600 flex items-center gap-1 font-mono text-[9px]">
                <CalendarCheck2 className="w-3 h-3" />
                <span>3 Sprints</span>
              </span>
            </div>

            {phases.map((phase, idx) => {
              const isActive = idx === activePhaseIndex;
              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={"p-2 rounded-lg border text-left transition-all cursor-pointer " + (
                    isActive
                      ? "bg-blue-50/80 border-blue-500/80 shadow-2xs ring-1 ring-blue-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-blue-700 bg-blue-100/70 px-1.5 py-0.2 rounded">
                        {phase.phaseCode}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {phase.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.2 rounded " + (
                      idx === 0 ? "bg-blue-100/70 text-blue-700" :
                      idx === 1 ? "bg-amber-100/70 text-amber-800" :
                      "bg-emerald-100/70 text-emerald-800"
                    )}>
                      {phase.badgeLabel}
                    </span>
                  </div>

                  <ul className="text-[10px] text-slate-600 font-medium space-y-0.5 pl-1 my-1">
                    {phase.deliverables.slice(0, 2).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[9px] text-slate-500 mt-1 pt-0.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-slate-700 truncate">{phase.milestones}</span>
                    <span className="font-mono text-[9px] text-blue-600 font-bold shrink-0 ml-1">{phase.timeframe}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Stepped Podiums Lottie Engine + Execution Benchmarks */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Kinetic Podiums */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activePhaseIndex={activePhaseIndex}
              onSelectPhase={setActivePhaseIndex}
            />
          </div>

          {/* Strategic Metrics & Day-90 Benchmarks (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-blue-50/50 border border-blue-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.pipelineCommitmentTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.pipelineCommitmentValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.pipelineCommitmentSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.targetDossiersTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.targetDossiersValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.targetDossiersSub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.activeDiscoveryTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.activeDiscoveryValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.activeDiscoverySub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.accountExpansionTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.accountExpansionValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.accountExpansionSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Roadmap Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => {
          const pastelStyles: Record<string, string> = {
            '#ea4335': 'border-[#ea4335] bg-[#fce8e6]/40 text-[#c5221f]',
            '#fbbc04': 'border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]',
            '#34a853': 'border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]',
            '#1a73e8': 'border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]',
          };
          const style = pastelStyles[pillar.accentColor] || 'border-blue-600 bg-slate-50/60 text-blue-700';
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
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide05;
`;
fs.writeFileSync(slide05IndexPath, slide05IndexContent, 'utf8');
console.log('[OK] Created src/slide/05/index.tsx');

// ==============================================================
// 6. Update src/slide/slidesData.ts to add Slide 5 in IN & EN
// ==============================================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
let slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

const slide05MetadataIN = `    {
      id: 5,
      title: "Rencana Aksi Strategis 30-60-90 Hari & Komitmen Pipeline",
      subtitle: "Akselerasi Ramp-Up, Akses C-Level & Pembangunan Pipeline 12 Bulan",
      category: "Peta Jalan Strategis",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberi kepastian kepada manajemen OpenWay bahwa Harry tidak membutuhkan waktu lama untuk adaptasi (low ramp-up period) dan memiliki rencana aksi yang jelas sejak hari pertama.",
        talkingPoints: [
          "Untuk memastikan kontribusi nyata, saya telah menyusun rencana eksekusi 90 hari pertama yang terukur.",
          "Pada 30 hari pertama, fokus saya adalah menyerap cetak biru sukses internal kita di BRI, Finnet, dan ASBANDA, membangun titik komunikasi tepercaya dengan pemangku kepentingan di akun existing, serta menyiapkan kerangka pemodelan 5-Year TCO & Financial ROI.",
          "Pada hari ke-31 hingga 60, saya mengaktifkan jaringan ring kedua saya untuk menyusun Buying Centre Dossier pada bank target dan masuk langsung ke C-Level IT membawa solusi Dual Engine.",
          "Di hari ke-61 hingga 90 dan seterusnya, saya fokus mengeksekusi rencana perluasan akun serta berkomitmen membangun 12-Month Sales Pipeline yang sehat dan terukur sejak kuartal pertama saya bergabung."
        ],
        potentialQuestions: [
          "Apa tolak ukur keberhasilan utama Anda pada hari ke-90?"
        ],
        suggestedAnswer: "Minimal 3 Buying Centre Dossier bank target lengkap dengan kontak C-Level, 2 proposal discovery aktif membawa solusi Dual Engine, serta identifikasi peluang add-on modul pada minimal 1 akun existing."
      }
    }`;

const slide05MetadataEN = `    {
      id: 5,
      title: "Strategic 30-60-90 Day Execution Plan & Pipeline Commitment",
      subtitle: "Ramp-Up Velocity, C-Level Access & 12-Month Pipeline Creation",
      category: "Strategic Roadmap",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Assure OpenWay leadership of an immediate zero-lag ramp-up period, demonstrating structured initiative and committed pipeline delivery from day one.",
        talkingPoints: [
          "To guarantee tangible commercial value, I have designed a rigorous 90-day execution roadmap.",
          "In Days 1 - 30, my focus is mastering our Tier-1 production blueprints (BRI, Finnet, ASBANDA), establishing trusted stakeholder touchpoints across existing accounts, and synthesizing our 5-Year TCO & Financial ROI framework.",
          "In Days 31 - 60, I mobilize my secondary executive network to build Buying Centre Dossiers on target commercial banks and initiate C-Suite discovery meetings presenting our Dual Engine value proposition.",
          "In Days 61 - 90 & beyond, I execute account expansion and lock in a qualified, healthy 12-Month Sales Pipeline from my very first quarter."
        ],
        potentialQuestions: [
          "What is your primary tangible success metric on Day 90?"
        ],
        suggestedAnswer: "A minimum of 3 completed target bank Buying Centre Dossiers with validated C-Level contacts, 2 active Dual Engine discovery proposals, and at least 1 qualified add-on module upsell opportunity identified in existing accounts."
      }
    }`;

// Insert into IN array if not already there
if (!slidesDataContent.includes('Rencana Aksi Strategis 30-60-90 Hari & Komitmen Pipeline')) {
  slidesDataContent = slidesDataContent.replace(
    /id:\s*4,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
    (match) => match + ',\n' + slide05MetadataIN
  );
}

// Insert into EN array if not already there
if (!slidesDataContent.includes('Strategic 30-60-90 Day Execution Plan & Pipeline Commitment')) {
  const parts = slidesDataContent.split('EN: [');
  if (parts.length > 1) {
    const enPart = parts[1].replace(
      /id:\s*4,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
      (match) => match + ',\n' + slide05MetadataEN
    );
    slidesDataContent = parts[0] + 'EN: [' + enPart;
  }
}

fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts with Slide 05');

// ==============================================================
// 7. Update src/App.tsx to import & render Slide05
// ==============================================================
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Add import if not present
if (!appContent.includes("import { Slide05 } from './slide/05';")) {
  appContent = appContent.replace(
    "import { Slide04 } from './slide/04';",
    "import { Slide04 } from './slide/04';\nimport { Slide05 } from './slide/05';"
  );
}

// Update switch statement in renderSlideContent
if (!appContent.includes('case 4:')) {
  appContent = appContent.replace(
    /case 3:\s*return <Slide04 language=\{language\} \/>;/,
    "case 3:\n        return <Slide04 language={language} />;\n      case 4:\n        return <Slide05 language={language} />;"
  );
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx with Slide 05 render');

console.log('=== Slide 05 Batch Implementation Completed Successfully! ===');
