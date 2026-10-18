const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Starting Slide 03 Implementation Batch ===');

// Ensure directory src/slide/03 exists
const slide03Dir = path.join(__dirname, '../src/slide/03');
fs.mkdirSync(slide03Dir, { recursive: true });

// ==============================================================
// 1. Create src/slide/03/lottie.json (3-Tier Stakeholder Orbit)
// ==============================================================
const lottieSlide03 = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "FSI 3-Tier Stakeholder Orbit Radar",
  ddd: 0,
  assets: [],
  layers: [
    // Layer 1: Ground Shadow
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
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [90, 24, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [110, 28, 100] },
            { t: 180, s: [90, 24, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [140, 40] } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.15, 0.25, 0.35] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 2: Outer Radar Orbit Ring (Pulse & Rotate)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Outer Orbit Ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 180, s: [360] }
          ]
        },
        p: { a: 0, k: [150, 145, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 52, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [220, 220] } },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 8 } },
                { n: "g", nm: "gap", v: { a: 0, k: 6 } }
              ]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 3: Inner Radar Orbit Ring
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Inner Orbit Ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 50 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [360], e: [0] },
            { t: 180, s: [0] }
          ]
        },
        p: { a: 0, k: [150, 145, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 52, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [140, 140] } },
            { ty: "st", c: { a: 0, k: [0.2, 0.65, 0.33, 1] }, o: { a: 0, k: 80 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 4: Central WAY4 Core Hub
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Central WAY4 Hub",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 145, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 140, 0] },
            { t: 180, s: [150, 145, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [98, 98, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [104, 104, 100] },
            { t: 180, s: [98, 98, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [56, 56] } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Core Ring
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [28, 28] } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 90 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 5: Node 1 - Decision Makers (Top C-Level, Blue #1a73e8)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Node Decision Makers",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 75, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 70, 0] },
            { t: 180, s: [150, 75, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [112, 112, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [38, 38] } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.91, 0.94, 0.99, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [14, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 6: Node 2 - Key Influencers (Left-Bottom, Amber #fbbc04)
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Node Key Influencers",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [70, 185, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [66, 188, 0] },
            { t: 180, s: [70, 185, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [110, 110, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [34, 34] } },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [1, 0.97, 0.88, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [12, 12] } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 7: Node 3 - Gatekeepers (Right-Bottom, Green #34a853)
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Node Gatekeepers",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [230, 185, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [234, 188, 0] },
            { t: 180, s: [230, 185, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [110, 110, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [34, 34] } },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.9, 0.96, 0.92, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [10, 10] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 8: Connecting Laser Rays (Pulsing between core and nodes)
    {
      ddd: 0,
      ind: 8,
      ty: 4,
      nm: "Radar Beam Lines",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [40] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [90] },
            { t: 180, s: [40] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 145, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            // Line to Node 1 (Top)
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[0, 0], [0, -70]]
                }
              }
            },
            // Line to Node 2 (Left-Bottom)
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[0, 0], [-80, 40]]
                }
              }
            },
            // Line to Node 3 (Right-Bottom)
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[0, 0], [80, 40]]
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

    // Layer 9: Sparkle 1 Top Right
    {
      ddd: 0,
      ind: 9,
      ty: 4,
      nm: "Sparkle Top Right",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [20] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [30] },
            { t: 180, s: [20] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 180, s: [180] }
          ]
        },
        p: { a: 0, k: [235, 75, 0] },
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

const slide03LottiePath = path.join(slide03Dir, 'lottie.json');
fs.writeFileSync(slide03LottiePath, JSON.stringify(lottieSlide03, null, 2), 'utf8');
console.log('[OK] Created src/slide/03/lottie.json');

// Also save to public/assets/lottie/slide-03.json for asset catalog completeness
const publicLottiePath = path.join(__dirname, '../public/assets/lottie/slide-03.json');
fs.writeFileSync(publicLottiePath, JSON.stringify(lottieSlide03, null, 2), 'utf8');
console.log('[OK] Created public/assets/lottie/slide-03.json');

// ==============================================================
// 2. Create src/slide/03/data.ts (Bilingual IN | EN)
// ==============================================================
const slide03DataPath = path.join(slide03Dir, 'data.ts');
const slide03DataContent = `export type Language = 'IN' | 'EN';

export interface StakeholderTier {
  id: string;
  tierNumber: string;
  roleTitle: string;
  personas: string;
  mandate: string;
  strategicApproach: string;
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
}

export interface WinningPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE03_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  dossierTitle: string;
  tiers: StakeholderTier[];
  metrics: {
    advantageTitle: string;
    winRateTitle: string;
    winRateValue: string;
    winRateSub: string;
    accessVelocityTitle: string;
    accessVelocityValue: string;
    accessVelocitySub: string;
    preRfpTitle: string;
    preRfpValue: string;
    preRfpSub: string;
    governanceTitle: string;
    governanceValue: string;
    governanceSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Metodologi Eksekusi",
      catalyst: "Pemetaan Akun Strategis FSI",
      title: "Buying Centre Dossier & Formula Kemenangan Tender"
    },
    descriptionTitle: "Pre-RFP Shaping & Orkestrasi 3-Tier Stakeholder",
    descriptionText: "Navigasi B2B enterprise yang sistematis menembus hierarki perbankan. Memenangkan tender bernilai puluhan miliar rupiah melalui pemetaan pengaruh terstruktur dan mempengaruhi kriteria tender jauh sebelum RFP resmi dibuka.",
    dossierTitle: "Struktur Komite Pembelian (Buying Centre Dossier)",
    tiers: [
      {
        id: "decision_makers",
        tierNumber: "Tier 1",
        roleTitle: "Decision Makers (C-Level & Direksi IT)",
        personas: "Direktur IT / Operasional, CTO, Direktur Bisnis Konsumer",
        mandate: "Otorisasi akhir anggaran, keselarasan visi strategis, mitigasi downtime",
        strategicApproach: "Akses C-Level via warm introduction ring kedua, presentasi ROI & TCO 5 tahun",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Otorisasi Akhir"
      },
      {
        id: "key_influencers",
        tierNumber: "Tier 2",
        roleTitle: "Key Influencers (Arsitektur & Operasional)",
        personas: "VP Enterprise Architecture, Head of Cards, VP IT Operations",
        mandate: "Evaluasi teknis, kepatuhan microservices BSPI 2030, skalabilitas TPS",
        strategicApproach: "Discovery mendalam tantangan sistem legacy, lokakarya teknis WAY4",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Evaluator Teknis"
      },
      {
        id: "gatekeepers",
        tierNumber: "Tier 3",
        roleTitle: "Gatekeepers (Pengadaan & Tata Kelola)",
        personas: "Komite Pengadaan (Procurement), Legal & Vendor Risk Management",
        mandate: "Kepatuhan tata kelola, transparansi kontrak, verifikasi audit formal",
        strategicApproach: "Dokumentasi tender bersih 100% auditable (standar ketat setara LKPP)",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Kepatuhan Hukum"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Formula Kemenangan RFP",
      winRateTitle: "Target Win Probability",
      winRateValue: "85%+",
      winRateSub: "Dengan Pre-RFP Shaping Terencana",
      accessVelocityTitle: "Kecepatan Akses C-Level",
      accessVelocityValue: "<14 Hari",
      accessVelocitySub: "Via Ring-2 Warm Introduction",
      preRfpTitle: "Jendela Pre-RFP Shaping",
      preRfpValue: "3-6 Bulan",
      preRfpSub: "Sebelum Dokumen Tender Rilis",
      governanceTitle: "Integritas & Audit Tata Kelola",
      governanceValue: "100% Auditable",
      governanceSub: "Bebas sengketa & teruji di regulasi perbankan"
    },
    pillars: [
      {
        id: "pillar_pre_rfp",
        index: "01",
        title: "Pre-RFP Shaping Kriteria",
        subtitle: "Menyuntikkan standar WAY4 ke dokumen kebutuhan bank sebelum tender",
        metric: "Kriteria Unggul",
        tag: "Inisiasi Awal",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_intro",
        index: "02",
        title: "Navigasi Ring-2 Warm Network",
        subtitle: "Menembus birokrasi bank melalui relasi terpercaya tanpa cold calling",
        metric: "Akses C-Level",
        tag: "Hubungan Kuat",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine",
        index: "03",
        title: "Solusi Dual Engine Bebas Risiko",
        subtitle: "Menghilangkan ketakutan dewan direksi atas risiko downtime migrasi",
        metric: "Zero Downtime",
        tag: "Diferensiasi",
        accentColor: "#34a853"
      },
      {
        id: "pillar_governance",
        index: "04",
        title: "Tata Kelola Pengadaan 100% Bersih",
        subtitle: "Memastikan proses komersial patuh audit dan standar ketat institusi",
        metric: "100% Auditable",
        tag: "Integritas",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Komite pengadaan perbankan dimenangkan melalui orkestrasi pra-tender dan kepatuhan tata kelola bersih.",
      target: "Metodologi Penetrasi: Bank Tier-1 & Komersial"
    }
  },
  EN: {
    header: {
      category: "Actionable Methodology",
      catalyst: "Strategic FSI Account Mapping",
      title: "Buying Centre Dossier & RFP Winning Formula"
    },
    descriptionTitle: "Pre-RFP Shaping & 3-Tier Stakeholder Orchestration",
    descriptionText: "Structured enterprise B2B navigation across banking hierarchies. Unlocking multi-million dollar contracts through disciplined influence mapping and shaping tender criteria well before formal RFP issuance.",
    dossierTitle: "Buying Centre Committee Structure (Influence Matrix)",
    tiers: [
      {
        id: "decision_makers",
        tierNumber: "Tier 1",
        roleTitle: "Decision Makers (C-Level & IT Boardroom)",
        personas: "IT / Ops Director, CTO, Consumer Banking Director",
        mandate: "Final CAPEX/OPEX signoff, strategic roadmap alignment, migration risk",
        strategicApproach: "Direct C-Suite dialogue via 2nd-degree warm introductions, 5-Year TCO ROI",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Final Signoff"
      },
      {
        id: "key_influencers",
        tierNumber: "Tier 2",
        roleTitle: "Key Influencers (Architecture & Operations)",
        personas: "VP Enterprise Architecture, Head of Cards, VP IT Operations",
        mandate: "Technical feasibility, BSPI 2030 microservices, TPS throughput benchmarking",
        strategicApproach: "Deep architectural discovery on legacy pain points, WAY4 technical demos",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Tech Evaluators"
      },
      {
        id: "gatekeepers",
        tierNumber: "Tier 3",
        roleTitle: "Gatekeepers (Procurement & Governance)",
        personas: "Procurement Committee, Legal Counsel, Vendor Risk Management",
        mandate: "Procurement compliance, contract transparency, audit verification",
        strategicApproach: "100% auditable tender documentation aligned with strict compliance criteria",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Legal & Audit"
      }
    ],
    metrics: {
      advantageTitle: "RFP Winning Formula Parameters",
      winRateTitle: "Target Win Probability",
      winRateValue: "85%+",
      winRateSub: "With Disciplined Pre-RFP Shaping",
      accessVelocityTitle: "C-Level Access Velocity",
      accessVelocityValue: "<14 Days",
      accessVelocitySub: "Via Ring-2 Warm Introductions",
      preRfpTitle: "Pre-RFP Shaping Window",
      preRfpValue: "3-6 Months",
      preRfpSub: "Ahead of Public Tender Issuance",
      governanceTitle: "Governance & Audit Cleanliness",
      governanceValue: "100% Auditable",
      governanceSub: "Zero-dispute procurement track record"
    },
    pillars: [
      {
        id: "pillar_pre_rfp",
        index: "01",
        title: "Pre-RFP Requirement Shaping",
        subtitle: "Embedding WAY4 technical USPs into bank specifications prior to tender",
        metric: "Shaped Spec",
        tag: "Early Phase",
        accentColor: "#ea4335"
      },
      {
        id: "pillar_warm_intro",
        index: "02",
        title: "Ring-2 Warm Network Access",
        subtitle: "Penetrating complex bank hierarchies through trusted referral channels",
        metric: "C-Level Path",
        tag: "High Trust",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_dual_engine",
        index: "03",
        title: "Dual-Engine De-Risking Strategy",
        subtitle: "Neutralizing executive fears of switching downtime and operational failure",
        metric: "Zero Downtime",
        tag: "Edge Value",
        accentColor: "#34a853"
      },
      {
        id: "pillar_governance",
        index: "04",
        title: "100% Auditable Procurement",
        subtitle: "Guaranteeing immaculate tender compliance and governance integrity",
        metric: "100% Auditable",
        tag: "Clean Process",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Banking procurement committees are won through disciplined pre-tender shaping and clean governance compliance.",
      target: "Penetration Framework: Tier-1 & Commercial Banks"
    }
  }
};
`;
fs.writeFileSync(slide03DataPath, slide03DataContent, 'utf8');
console.log('[OK] Created src/slide/03/data.ts');

// ==============================================================
// 3. Create src/slide/03/container.tsx
// ==============================================================
const slide03ContainerPath = path.join(slide03Dir, 'container.tsx');
const slide03ContainerContent = `import { useState } from 'react';
import {
  SLIDE03_DATA,
  Language,
  StakeholderTier,
  WinningPillar
} from './data';

export interface Slide03Controller {
  header: typeof SLIDE03_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  dossierTitle: string;
  tiers: StakeholderTier[];
  metrics: typeof SLIDE03_DATA['IN']['metrics'];
  pillars: WinningPillar[];
  takeaway: typeof SLIDE03_DATA['IN']['takeaway'];
  activeTierIndex: number;
  setActiveTierIndex: (index: number) => void;
}

export function useSlide03Container(language: Language = 'IN'): Slide03Controller {
  const [activeTierIndex, setActiveTierIndex] = useState<number>(0);
  const data = SLIDE03_DATA[language] || SLIDE03_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    dossierTitle: data.dossierTitle,
    tiers: data.tiers,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeTierIndex,
    setActiveTierIndex
  };
}
`;
fs.writeFileSync(slide03ContainerPath, slide03ContainerContent, 'utf8');
console.log('[OK] Created src/slide/03/container.tsx');

// ==============================================================
// 4. Create src/slide/03/visual-3D.tsx
// ==============================================================
const slide03VisualPath = path.join(slide03Dir, 'visual-3D.tsx');
const slide03VisualContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeTierIndex?: number;
  onSelectTier?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      {/* Pure Visual Canvas: 100% Focused on 3-Tier Radar Orbit Engine (Zero Title, Zero Text Cards) */}
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
fs.writeFileSync(slide03VisualPath, slide03VisualContent, 'utf8');
console.log('[OK] Created src/slide/03/visual-3D.tsx');

// ==============================================================
// 5. Create src/slide/03/index.tsx
// ==============================================================
const slide03IndexPath = path.join(slide03Dir, 'index.tsx');
const slide03IndexContent = `import React from 'react';
import { useSlide03Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide03Props {
  language?: Language;
}

export const Slide03: React.FC<Slide03Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    dossierTitle,
    tiers,
    metrics,
    pillars,
    takeaway,
    activeTierIndex,
    setActiveTierIndex
  } = useSlide03Container(language);

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

      {/* 2. Main Strategic Account Mapping Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Buying Centre Dossier (3-Tier Stakeholder Stack) */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* 3-Tier Stakeholder Dossier Cards: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
              {dossierTitle}
            </div>

            {tiers.map((tier, idx) => {
              const isActive = idx === activeTierIndex;
              return (
                <div
                  key={tier.id}
                  onClick={() => setActiveTierIndex(idx)}
                  className={"p-2.5 rounded-lg border text-left transition-all cursor-pointer " + (
                    isActive
                      ? "bg-blue-50/80 border-blue-500/80 shadow-2xs ring-1 ring-blue-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-slate-400">
                        {tier.tierNumber}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {tier.roleTitle}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.2 rounded " + (
                      idx === 0 ? "bg-blue-100/70 text-blue-700" :
                      idx === 1 ? "bg-amber-100/70 text-amber-800" :
                      "bg-emerald-100/70 text-emerald-800"
                    )}>
                      {tier.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {tier.personas}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                    <span className="truncate">{tier.strategicApproach}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Stakeholder Radar Orbit Visual + RFP Winning Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Kinetic Orbit Engine */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activeTierIndex={activeTierIndex}
              onSelectTier={setActiveTierIndex}
            />
          </div>

          {/* Strategic Metrics & RFP Formula Parameters (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-blue-50/50 border border-blue-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.winRateTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.winRateValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.winRateSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.accessVelocityTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.accessVelocityValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.accessVelocitySub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.preRfpTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.preRfpValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.preRfpSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.governanceTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.governanceValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.governanceSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Winning Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
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

export default Slide03;
`;
fs.writeFileSync(slide03IndexPath, slide03IndexContent, 'utf8');
console.log('[OK] Created src/slide/03/index.tsx');

// ==============================================================
// 6. Update src/slide/slidesData.ts to add Slide 3 in IN & EN
// ==============================================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
let slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

const slide03MetadataIN = `    {
      id: 3,
      title: "Metodologi Eksekusi & Pemetaan Akun FSI",
      subtitle: "Buying Centre Dossier & Formula Kemenangan Tender RFP",
      category: "Metodologi & Eksekusi",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan bahwa Harry memiliki metodologi yang sistematis, teruji, dan tidak bergantung pada keberuntungan dalam memenangkan proyek bernilai puluhan miliar rupiah.",
        talkingPoints: [
          "Saya menerapkan metodologi Strategic FSI Account Mapping dan menyusun Buying Centre Dossier seperti yang terlihat di slide ini.",
          "Di industri perbankan, keputusan dibeli oleh sebuah komite. Saya secara sistematis memetakan pengambil keputusan (Decision Makers), siapa yang memengaruhi keputusan (Key Influencers), dan siapa yang menjaga regulasi pengadaan (Gatekeepers).",
          "Melalui ekosistem ring kedua saya, saya menggali informasi intelijen dari level Influencers untuk tahu masalah sistem mereka, lalu menggunakannya untuk melakukan warm introduction langsung ke tingkat Direksi IT (C-Level).",
          "Pendekatan ini juga krusial untuk Enterprise RFP & Tender Winning Formula saya. Strategi saya dimulai jauh sebelum tender dibuka (Pre-RFP Shaping), yakni mempengaruhi kriteria kebutuhan bank sejak awal agar selaras dengan keunggulan utama WAY4.",
          "Pengalaman saya selama belasan tahun membantu saya untuk menavigasi struktur perusahaan yang kompleks serta benturan kepentingan internal di antara para pengambil keputusan ini, guna memastikan proses pengadaan berjalan dengan tingkat kemenangan yang tinggi."
        ],
        potentialQuestions: [
          "Bagaimana jika bank sudah memiliki vendor preferensi sebelum tender diumumkan?"
        ],
        suggestedAnswer: "Inilah fungsi Pre-RFP Shaping. Kita menyuntikkan kriteria kepatuhan BSPI 2030, skalabilitas cloud-native, dan kapabilitas SNAP BI yang hanya bisa dipenuhi secara native oleh WAY4."
      }
    }`;

const slide03MetadataEN = `    {
      id: 3,
      title: "Actionable Methodology – Strategic FSI Account Mapping",
      subtitle: "Buying Centre Dossier & Enterprise RFP Winning Formula",
      category: "Actionable Methodology",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Prove that Harry operates on a structured, repeatable enterprise methodology rather than relying on chance to win multi-million-dollar banking contracts.",
        talkingPoints: [
          "I execute with a disciplined Strategic FSI Account Mapping methodology and build a comprehensive Buying Centre Dossier.",
          "In banking, technology decisions are made by collective committees. I systematically map Decision Makers (C-Level), Key Influencers (Enterprise Architects & Heads of Cards), and Gatekeepers (Procurement & Legal).",
          "Leveraging my secondary warm ecosystem, I uncover technical pain points from influencers to execute targeted warm introductions directly into the IT Boardroom.",
          "This feeds directly into our Enterprise RFP & Tender Winning Formula. Our campaign begins well before tender issuance through Pre-RFP Shaping, steering technical requirements to match WAY4 strengths.",
          "My 16-year track record navigating complex internal matrix structures ensures smooth procurement progression with an exceptionally high win probability."
        ],
        potentialQuestions: [
          "What if the target bank already has an incumbent preferred vendor before RFP release?"
        ],
        suggestedAnswer: "That is precisely why Pre-RFP Shaping is vital. We embed non-negotiable BSPI 2030 compliance criteria, cloud-native scalability, and open API microservices standards that only WAY4 satisfies natively."
      }
    }`;

// Insert into IN array if not already there
if (!slidesDataContent.includes('Buying Centre Dossier & Formula Kemenangan Tender RFP')) {
  slidesDataContent = slidesDataContent.replace(
    /id:\s*2,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
    (match) => match + ',\n' + slide03MetadataIN
  );
}

// Insert into EN array if not already there
if (!slidesDataContent.includes('Buying Centre Dossier & Enterprise RFP Winning Formula')) {
  // Replace the second occurrence for EN
  const parts = slidesDataContent.split('EN: [');
  if (parts.length > 1) {
    const enPart = parts[1].replace(
      /id:\s*2,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
      (match) => match + ',\n' + slide03MetadataEN
    );
    slidesDataContent = parts[0] + 'EN: [' + enPart;
  }
}

fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts with Slide 03');

// ==============================================================
// 7. Update src/App.tsx to import & render Slide03
// ==============================================================
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Add import if not present
if (!appContent.includes("import { Slide03 } from './slide/03';")) {
  appContent = appContent.replace(
    "import { Slide02 } from './slide/02';",
    "import { Slide02 } from './slide/02';\nimport { Slide03 } from './slide/03';"
  );
}

// Update switch statement in renderSlideContent
if (!appContent.includes('case 2:')) {
  appContent = appContent.replace(
    /case 1:\s*return <Slide02 language=\{language\} \/>;/,
    "case 1:\n        return <Slide02 language={language} />;\n      case 2:\n        return <Slide03 language={language} />;"
  );
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx with Slide 03 render');

console.log('=== Slide 03 Batch Implementation Completed Successfully! ===');
