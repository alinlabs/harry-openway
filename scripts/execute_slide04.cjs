const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Starting Slide 04 Implementation Batch ===');

// Ensure directory src/slide/04 exists
const slide04Dir = path.join(__dirname, '../src/slide/04');
fs.mkdirSync(slide04Dir, { recursive: true });

// ==============================================================
// 1. Create src/slide/04/lottie.json (3-Tier Isometric Core Slabs)
// ==============================================================
const lottieSlide04 = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "3D Isometric Core Stack Platform Slabs",
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
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [118, 30, 100] },
            { t: 180, s: [100, 26, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [160, 48] } },
            { ty: "fl", c: { a: 0, k: [0.08, 0.12, 0.22, 0.35] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 2: Connecting Vertical Energy Beams
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Vertical Integration Energy Beams",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [40] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [85] },
            { t: 180, s: [40] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 150, 0] },
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
                  v: [[-60, 70], [-60, -70]]
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
                  v: [[60, 70], [60, -70]]
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 1.5 },
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 5 } },
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

    // Layer 3: Layer 1 Bottom Slab (Compliance & Foundation BSPI 2030, Green #34a853)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Layer 1 Bottom Slab (Compliance)",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 215, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 212, 0] },
            { t: 180, s: [150, 215, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [103, 103, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            // Isometric Slab Base (Diamond Polygon)
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -22], [90, 0], [0, 22], [-90, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.9, 0.96, 0.92, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Slab Grid lines
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
                  v: [[0, -12], [50, 0], [0, 12], [-50, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.12, 0.52, 0.25, 0.8] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 4: Layer 2 Middle Slab (Core Platform Blueprints WAY4, Blue #1a73e8)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Layer 2 Middle Slab (Core Platform WAY4)",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 150, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 144, 0] },
            { t: 180, s: [150, 150, 0] }
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
            // Isometric Slab Base
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -22], [90, 0], [0, 22], [-90, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.91, 0.94, 0.99, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Central WAY4 Core Processor Badge on middle slab
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
                  v: [[0, -12], [50, 0], [0, 12], [-50, 0]]
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

    // Layer 5: Layer 3 Top Slab (Market Opportunities & Open API SNAP, Amber #fbbc04)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Layer 3 Top Slab (Market Opportunities & SNAP)",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 85, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 76, 0] },
            { t: 180, s: [150, 85, 0] }
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
            // Isometric Slab Base
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -22], [90, 0], [0, 22], [-90, 0]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 0.97, 0.88, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Floating Channel Nodes on Top Slab
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [-30, 0] }, s: { a: 0, k: [14, 14] } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [30, 0] }, s: { a: 0, k: [14, 14] } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [18, 18] } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 6: Sparkle Top Left
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Sparkle Top Left",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [30] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [40] },
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
        p: { a: 0, k: [70, 75, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [80, 80, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [12, 12] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 7: Sparkle Bottom Right
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Sparkle Bottom Right",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [20] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [100] },
            { t: 180, s: [20] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [180], e: [0] },
            { t: 180, s: [0] }
          ]
        },
        p: { a: 0, k: [230, 205, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [70, 70, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [10, 10] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    }
  ]
};

const slide04LottiePath = path.join(slide04Dir, 'lottie.json');
fs.writeFileSync(slide04LottiePath, JSON.stringify(lottieSlide04, null, 2), 'utf8');
console.log('[OK] Created src/slide/04/lottie.json');

// Also save to public/assets/lottie/slide-04.json
const publicLottiePath = path.join(__dirname, '../public/assets/lottie/slide-04.json');
fs.writeFileSync(publicLottiePath, JSON.stringify(lottieSlide04, null, 2), 'utf8');
console.log('[OK] Created public/assets/lottie/slide-04.json');

// ==============================================================
// 2. Create src/slide/04/data.ts (Bilingual IN | EN)
// ==============================================================
const slide04DataPath = path.join(slide04Dir, 'data.ts');
const slide04DataContent = `export type Language = 'IN' | 'EN';

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

export const SLIDE04_DATA: Record<Language, {
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
`;
fs.writeFileSync(slide04DataPath, slide04DataContent, 'utf8');
console.log('[OK] Created src/slide/04/data.ts');

// ==============================================================
// 3. Create src/slide/04/container.tsx
// ==============================================================
const slide04ContainerPath = path.join(slide04Dir, 'container.tsx');
const slide04ContainerContent = `import { useState } from 'react';
import {
  SLIDE04_DATA,
  Language,
  CoreStackLayer,
  GrowthPillar
} from './data';

export interface Slide04Controller {
  header: typeof SLIDE04_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  frameworkTitle: string;
  layers: CoreStackLayer[];
  metrics: typeof SLIDE04_DATA['IN']['metrics'];
  pillars: GrowthPillar[];
  takeaway: typeof SLIDE04_DATA['IN']['takeaway'];
  activeLayerIndex: number;
  setActiveLayerIndex: (index: number) => void;
}

export function useSlide04Container(language: Language = 'IN'): Slide04Controller {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const data = SLIDE04_DATA[language] || SLIDE04_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    frameworkTitle: data.frameworkTitle,
    layers: data.layers,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeLayerIndex,
    setActiveLayerIndex
  };
}
`;
fs.writeFileSync(slide04ContainerPath, slide04ContainerContent, 'utf8');
console.log('[OK] Created src/slide/04/container.tsx');

// ==============================================================
// 4. Create src/slide/04/visual-3D.tsx
// ==============================================================
const slide04VisualPath = path.join(slide04Dir, 'visual-3D.tsx');
const slide04VisualContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeLayerIndex?: number;
  onSelectLayer?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      {/* Pure Visual Canvas: 100% Focused on 3D Isometric Slabs Lottie Engine (Zero Title, Zero Text Cards) */}
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
fs.writeFileSync(slide04VisualPath, slide04VisualContent, 'utf8');
console.log('[OK] Created src/slide/04/visual-3D.tsx');

// ==============================================================
// 5. Create src/slide/04/index.tsx
// ==============================================================
const slide04IndexPath = path.join(slide04Dir, 'index.tsx');
const slide04IndexContent = `import React from 'react';
import { useSlide04Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide04Props {
  language?: Language;
}

export const Slide04: React.FC<Slide04Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    frameworkTitle,
    layers,
    metrics,
    pillars,
    takeaway,
    activeLayerIndex,
    setActiveLayerIndex
  } = useSlide04Container(language);

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

      {/* 2. Main 3D Core Stack Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & 3D Isometric Stack Breakdown */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* 3-Tier Layer Stack Cards: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
              <span>{frameworkTitle}</span>
              <span className="text-blue-600 flex items-center gap-1 font-mono text-[9px]">
                <Layers className="w-3 h-3" />
                <span>3 Slabs</span>
              </span>
            </div>

            {layers.map((layer, idx) => {
              const isActive = idx === activeLayerIndex;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={"p-2 rounded-lg border text-left transition-all cursor-pointer " + (
                    isActive
                      ? "bg-blue-50/80 border-blue-500/80 shadow-2xs ring-1 ring-blue-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {layer.layerNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {layer.name}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.2 rounded " + (
                      idx === 0 ? "bg-amber-100/70 text-amber-800" :
                      idx === 1 ? "bg-blue-100/70 text-blue-700" :
                      "bg-emerald-100/70 text-emerald-800"
                    )}>
                      {layer.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {layer.focusTitle}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {layer.components.slice(0, 3).map((comp, cIdx) => (
                      <span key={cIdx} className="text-[9px] text-slate-500 bg-white/80 px-1.5 py-0.5 rounded border border-slate-200/70 font-mono">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Isometric Slabs Lottie Engine + Dual Growth Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Kinetic Platform Slabs */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activeLayerIndex={activeLayerIndex}
              onSelectLayer={setActiveLayerIndex}
            />
          </div>

          {/* Strategic Metrics & Dual Growth Parameters (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-blue-50/50 border border-blue-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.pipelineGrowthTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.pipelineGrowthValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.pipelineGrowthSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.replicatedWinsTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.replicatedWinsValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.replicatedWinsSub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.crossSellingTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.crossSellingValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.crossSellingSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.bspiReadyTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.bspiReadyValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.bspiReadySub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Growth Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
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

export default Slide04;
`;
fs.writeFileSync(slide04IndexPath, slide04IndexContent, 'utf8');
console.log('[OK] Created src/slide/04/index.tsx');

// ==============================================================
// 6. Update src/slide/slidesData.ts to add Slide 4 in IN & EN
// ==============================================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
let slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

const slide04MetadataIN = `    {
      id: 4,
      title: "Strategi Pertumbuhan – Replikasi Keberhasilan & Ekspansi Akun",
      subtitle: "3D Isometric Core Stack Framework & Mesin Pertumbuhan Ganda",
      category: "Strategi Pertumbuhan",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan sinergi sempurna antara keunggulan produk OpenWay dengan kemampuan eksekusi lapangan Harry dalam melipatgandakan pipeline penjualan.",
        talkingPoints: [
          "Kekuatan terbesar saya ada pada aspek eksekusi dan implementasi komersial terstruktur.",
          "Seperti yang kita lihat pada diagram isometrik 3D core stack ini, saya mengintegrasikan seluruh elemen pertumbuhan secara visual.",
          "Strategi saya berbasis Success Replication dan Account Expansion.",
          "Di lapisan tengah (Layer 2), saya membedah cetak biru kesuksesan OpenWay di akun besar seperti BRI, Finnet, dan ASBANDA untuk direplikasi ke bank-bank komersial menengah di lapisan atas (Layer 3).",
          "Sekaligus, saya mengidentifikasi kebutuhan tersembunyi dari klien eksisting untuk cross-selling modul WAY4 baru seperti Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway.",
          "Seluruh eksekusi ini ditopang kuat oleh fondasi kepatuhan regulasi BSPI 2030 di lapisan bawah (Layer 1)."
        ],
        potentialQuestions: [
          "Modul apa dari WAY4 yang paling mudah diekspansi ke akun existing saat ini?"
        ],
        suggestedAnswer: "Modul Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway yang sangat dibutuhkan bank untuk integrasi instan dengan merchant dan fintech unicorn tanpa harus merombak core lama mereka."
      }
    }`;

const slide04MetadataEN = `    {
      id: 4,
      title: "Growth Strategy – Success Replication & Account Expansion",
      subtitle: "3D Isometric Core Stack Framework & Dual-Growth Engine",
      category: "Growth Strategy",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Demonstrate the seamless synergy between OpenWay's world-class technology and Harry's field enterprise execution to multiply pipeline growth.",
        talkingPoints: [
          "My greatest value lies in disciplined enterprise sales execution and process-driven pipeline development.",
          "As shown on this 3D isometric core stack, I visually synchronize every layer of our commercial expansion.",
          "My strategy operates on Dual Engines: Success Replication and Account Expansion.",
          "In the middle tier (Layer 2), I systematically deconstruct OpenWay's Tier-1 blueprints (BRI, Finnet, ASBANDA) to duplicate those proven production reference architectures into commercial mid-tier banks (Layer 3).",
          "Simultaneously, I proactively farm existing accounts to cross-sell high-margin modern modules including Digital Wallet, SoftPOS, and Open-API SNAP BI Gateway.",
          "All of this is firmly underpinned by Bank Indonesia's BSPI 2030 regulatory mandate at the foundation (Layer 1)."
        ],
        potentialQuestions: [
          "Which WAY4 modules offer the fastest cross-sell traction into existing accounts today?"
        ],
        suggestedAnswer: "Digital Wallet, SoftPOS, and Open-API SNAP BI Gateway modules, which banks urgently require to enable instant merchant onboarding and unicorn fintech connectivity."
      }
    }`;

// Insert into IN array if not already there
if (!slidesDataContent.includes('3D Isometric Core Stack Framework & Mesin Pertumbuhan Ganda')) {
  slidesDataContent = slidesDataContent.replace(
    /id:\s*3,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
    (match) => match + ',\n' + slide04MetadataIN
  );
}

// Insert into EN array if not already there
if (!slidesDataContent.includes('3D Isometric Core Stack Framework & Dual-Growth Engine')) {
  const parts = slidesDataContent.split('EN: [');
  if (parts.length > 1) {
    const enPart = parts[1].replace(
      /id:\s*3,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
      (match) => match + ',\n' + slide04MetadataEN
    );
    slidesDataContent = parts[0] + 'EN: [' + enPart;
  }
}

fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts with Slide 04');

// ==============================================================
// 7. Update src/App.tsx to import & render Slide04
// ==============================================================
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Add import if not present
if (!appContent.includes("import { Slide04 } from './slide/04';")) {
  appContent = appContent.replace(
    "import { Slide03 } from './slide/03';",
    "import { Slide03 } from './slide/03';\nimport { Slide04 } from './slide/04';"
  );
}

// Update switch statement in renderSlideContent
if (!appContent.includes('case 3:')) {
  appContent = appContent.replace(
    /case 2:\s*return <Slide03 language=\{language\} \/>;/,
    "case 2:\n        return <Slide03 language={language} />;\n      case 3:\n        return <Slide04 language={language} />;"
  );
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx with Slide 04 render');

console.log('=== Slide 04 Batch Implementation Completed Successfully! ===');
