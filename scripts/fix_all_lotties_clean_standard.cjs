const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Rebuilding Slides 03-07 Lottie Assets with Clean Bodymovin Standard ===');

// Helper to convert hex to Lottie rgba [r, g, b, 1]
function hexToRgba(hex, alpha = 1) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [parseFloat(r.toFixed(3)), parseFloat(g.toFixed(3)), parseFloat(b.toFixed(3)), alpha];
}

const BLUE = hexToRgba('#1a73e8');
const GREEN = hexToRgba('#34a853');
const AMBER = hexToRgba('#fbbc04');
const RED = hexToRgba('#ea4335');
const WHITE = [1, 1, 1, 1];
const SHADOW_COLOR = [0.55, 0.62, 0.72, 1];
const PASTEL_BLUE = [0.91, 0.94, 0.99, 1];
const PASTEL_GREEN = [0.9, 0.96, 0.92, 1];
const PASTEL_AMBER = [0.99, 0.97, 0.88, 1];

// Standard Sparkle shape builder
function createSparkleLayer(ind, name, pos, color, initScale = [50, 50, 100], peakScale = [115, 115, 100]) {
  return {
    ddd: 0,
    ind,
    ty: 4,
    nm: name,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [20] },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 45, s: [100] },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [20] },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 135, s: [100] },
          { t: 180, s: [20] }
        ]
      },
      r: {
        a: 1,
        k: [
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
          { t: 180, s: [180] }
        ]
      },
      p: { a: 0, k: [pos[0], pos[1], 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: initScale },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 45, s: peakScale },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: initScale },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 135, s: peakScale },
          { t: 180, s: initScale }
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          { ty: "rc", d: 1, s: { a: 0, k: [14, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
          { ty: "fl", c: { a: 0, k: color }, o: { a: 0, k: 100 } },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0
  };
}

// Standard Ground Shadow layer builder
function createGroundShadowLayer(ind, pos = [150, 245, 0], size = [110, 20]) {
  return {
    ddd: 0,
    ind,
    ty: 4,
    nm: "Ground Shadow",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [32] },
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [18] },
          { t: 180, s: [32] }
        ]
      },
      r: { a: 0, k: 0 },
      p: { a: 0, k: pos },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [100, 100, 100] },
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [82, 82, 100] },
          { t: 180, s: [100, 100, 100] }
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "Shadow Oval",
        it: [
          { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: size } },
          { ty: "fl", c: { a: 0, k: SHADOW_COLOR }, o: { a: 0, k: 100 } },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0
  };
}

// Standard Ambient Glow layer builder
function createAmbientGlowLayer(ind, color = PASTEL_BLUE, size = [200, 200]) {
  return {
    ddd: 0,
    ind,
    ty: 4,
    nm: "Ambient Glow",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [45] },
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [70] },
          { t: 180, s: [45] }
        ]
      },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [150, 140, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [95, 95, 100] },
          { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [108, 108, 100] },
          { t: 180, s: [95, 95, 100] }
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "Soft Disc",
        it: [
          { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: size } },
          { ty: "fl", c: { a: 0, k: color }, o: { a: 0, k: 100 } },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0
  };
}

// ==============================================================
// 1. SLIDE 03: 3-Tier Stakeholder Orbit Radar
// ==============================================================
function buildSlide03Lottie() {
  return {
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
      createSparkleLayer(1, "Sparkle Top Left", [72, 68], BLUE),
      createSparkleLayer(2, "Sparkle Bottom Right", [228, 204], AMBER),
      
      // Layer 3: Decision Makers Orbiting Node (Top-center, Google Blue #1a73e8)
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Decision Makers Node",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 72, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 60, 0] },
              { t: 180, s: [150, 72, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [100, 100, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [112, 112, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Node Badge",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [46, 24] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 12 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Inner Icon",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [10, 10] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 4: Key Influencers Node (Left orbit, Amber #fbbc04)
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Key Influencers Node",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [82, 168, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [74, 168, 0] },
              { t: 180, s: [82, 168, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [100, 100, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [110, 110, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Node Badge",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [46, 24] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 12 } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Inner Core",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [8, 8] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 5: Gatekeepers Node (Right orbit, Green #34a853)
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Gatekeepers Node",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [218, 168, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [226, 168, 0] },
              { t: 180, s: [218, 168, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [100, 100, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [110, 110, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Node Badge",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [46, 24] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 12 } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Inner Core",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [10, 10] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 6: Central WAY4 Core Hub (Rotating diamond)
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Central WAY4 Hub",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
              { t: 180, s: [360] }
            ]
          },
          p: { a: 0, k: [150, 145, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [95, 95, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [110, 110, 100] },
              { t: 180, s: [95, 95, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Hub Diamond",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [40, 40] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Hub Center",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [16, 16] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 7: Outer Orbit Ring (Clean SVG ellipse stroke)
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "Outer Orbit Ring",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [60] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [90] },
              { t: 180, s: [60] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [150, 145, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Ring",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [160, 120] } },
              { ty: "st", c: { a: 0, k: BLUE }, o: { a: 0, k: 80 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      createGroundShadowLayer(8, [150, 245, 0], [130, 24]),
      createAmbientGlowLayer(9, PASTEL_BLUE, [210, 210])
    ]
  };
}

// ==============================================================
// 2. SLIDE 04: 3 Isometric Stacked Slabs (Core Stack Framework)
// ==============================================================
function buildSlide04Lottie() {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 300,
    h: 300,
    nm: "3D Isometric Core Stack Framework",
    ddd: 0,
    assets: [],
    layers: [
      createSparkleLayer(1, "Sparkle Top Left", [74, 60], BLUE),
      createSparkleLayer(2, "Sparkle Top Right", [226, 60], GREEN),

      // Layer 3: Floating Microservices Sync Diamond
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Floating Sync Diamond",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
              { t: 180, s: [360] }
            ]
          },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 72, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 58, 0] },
              { t: 180, s: [150, 72, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [90, 90, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [110, 110, 100] },
              { t: 180, s: [90, 90, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Diamond",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [22, 22] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 4 } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 4: Top Slab (Layer 3: Mid-Tier Commercial Expansion, Google Blue)
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Top Slab - Market Expansion",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 106, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 98, 0] },
              { t: 180, s: [150, 106, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Slab Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [130, 26] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Beacon Dot",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [-45, 0] }, s: { a: 0, k: [8, 8] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 5: Middle Slab (Layer 2: Proven Tier-1 Blueprints, Green #34a853)
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Middle Slab - Tier-1 Blueprints",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 148, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 144, 0] },
              { t: 180, s: [150, 148, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Slab Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [146, 28] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Beacon Dot",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [-52, 0] }, s: { a: 0, k: [8, 8] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 6: Foundation Slab (Layer 1: BSPI 2030 Mandate Foundation)
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Foundation Slab - BSPI 2030",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [150, 190, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Slab Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [164, 30] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: [0.12, 0.23, 0.54, 1] }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Foundation Accent",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [140, 6] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      createGroundShadowLayer(7, [150, 245, 0], [150, 24]),
      createAmbientGlowLayer(8, PASTEL_GREEN, [220, 220])
    ]
  };
}

// ==============================================================
// 3. SLIDE 05: 3 Ascending Stepped Podiums (30-60-90 Day Plan)
// ==============================================================
function buildSlide05Lottie() {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 300,
    h: 300,
    nm: "Strategic 30-60-90 Day Execution Stepped Podiums",
    ddd: 0,
    assets: [],
    layers: [
      createSparkleLayer(1, "Sparkle Top Right", [230, 50], AMBER),
      createSparkleLayer(2, "Sparkle Left", [65, 120], BLUE),

      // Layer 3: Pipeline Trophy Target Star
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Pipeline Trophy Star",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
              { t: 180, s: [360] }
            ]
          },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [215, 75, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [215, 62, 0] },
              { t: 180, s: [215, 75, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [95, 95, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [115, 115, 100] },
              { t: 180, s: [95, 95, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Star Badge",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [26, 26] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 6 } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Inner Core",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [10, 10] } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 4: Podium 3 - Day 90 (Tallest, Green #34a853)
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Podium 3 - Day 90",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [215, 160, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Podium Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [48, 100] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Badge Cap",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [32, 16] }, p: { a: 0, k: [0, -38] }, r: { a: 0, k: 4 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 90 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 5: Podium 2 - Day 60 (Mid height, Amber #fbbc04)
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Podium 2 - Day 60",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [150, 175, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Podium Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [48, 70] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Badge Cap",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [32, 14] }, p: { a: 0, k: [0, -24] }, r: { a: 0, k: 4 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 90 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 6: Podium 1 - Day 30 (Base height, Google Blue)
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Podium 1 - Day 30",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [85, 190, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Podium Body",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [48, 42] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Badge Cap",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [32, 12] }, p: { a: 0, k: [0, -10] }, r: { a: 0, k: 4 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 90 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      createGroundShadowLayer(7, [150, 245, 0], [150, 24]),
      createAmbientGlowLayer(8, PASTEL_AMBER, [210, 210])
    ]
  };
}

// ==============================================================
// 4. SLIDE 06: Auditable Compliance Shield & Dual Growth Gears
// ==============================================================
function buildSlide06Lottie() {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 300,
    h: 300,
    nm: "Auditable Compliance Shield & Dual Growth Gears",
    ddd: 0,
    assets: [],
    layers: [
      createSparkleLayer(1, "Sparkle Top Left", [72, 60], GREEN),
      createSparkleLayer(2, "Sparkle Top Right", [228, 60], AMBER),

      // Layer 3: Central Auditable Compliance Shield (Floating)
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Compliance Shield",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 120, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 106, 0] },
              { t: 180, s: [150, 120, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [100, 100, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [110, 110, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Shield Outer",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [66, 76] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 22 } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Shield Inner Star",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [22, 22] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 4 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 4: Growth Gear 1 - Clean Governance (Rotating clockwise)
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Gear 1 - Clean Governance",
        sr: 1,
        ks: {
          o: { a: 0, k: 90 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
              { t: 180, s: [360] }
            ]
          },
          p: { a: 0, k: [96, 185, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Teeth Cross 1",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [56, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Teeth Cross 2",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [14, 56] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Gear Center",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [38, 38] } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 5: Growth Gear 2 - Continuous Growth (Rotating counter-clockwise)
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Gear 2 - Continuous Growth",
        sr: 1,
        ks: {
          o: { a: 0, k: 90 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [360] },
              { t: 180, s: [0] }
            ]
          },
          p: { a: 0, k: [204, 185, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Teeth Cross 1",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [56, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Teeth Cross 2",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [14, 56] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Gear Center",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [38, 38] } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      createGroundShadowLayer(6, [150, 245, 0], [140, 22]),
      createAmbientGlowLayer(7, PASTEL_GREEN, [210, 210])
    ]
  };
}

// ==============================================================
// 5. SLIDE 07: Dual Engine Parallel Co-existence Turbines
// ==============================================================
function buildSlide07Lottie() {
  return {
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
      createSparkleLayer(1, "Sparkle Top Center", [150, 52], AMBER),

      // Layer 2: Floating Digital Revenue Coin (Gold)
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Revenue Coin",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [150, 88, 0] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [150, 74, 0] },
              { t: 180, s: [150, 88, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [95, 95, 100] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [115, 115, 100] },
              { t: 180, s: [95, 95, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Coin Disc",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [26, 26] } },
              { ty: "fl", c: { a: 0, k: AMBER }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Coin Emblem",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [8, 8] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
              { ty: "fl", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 3: Turbine 1 - Legacy Mainframe Engine (Left - Red #ea4335)
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Turbine 1 - Legacy Host",
        sr: 1,
        ks: {
          o: { a: 0, k: 90 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
              { t: 180, s: [360] }
            ]
          },
          p: { a: 0, k: [95, 148, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Rotor Blades 1",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [56, 12] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: RED }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Rotor Blades 2",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [12, 56] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: RED }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Turbine Core",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [46, 46] } },
              { ty: "fl", c: { a: 0, k: [0.92, 0.26, 0.21, 1] }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 4: Turbine 2 - Modern WAY4 Cloud Engine (Right - Blue #1a73e8)
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
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [360] },
              { t: 180, s: [0] }
            ]
          },
          p: { a: 0, k: [205, 148, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Rotor Blades 1",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [60, 14] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Rotor Blades 2",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [14, 60] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 100 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Turbine Core",
            it: [
              { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [50, 50] } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 100 } },
              { ty: "st", c: { a: 0, k: WHITE }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      // Layer 5: Parallel Co-existence Transmission Loop
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Synchronous Transmission Belt",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 0, s: [60] },
              { i: { x: [0.65], y: [1] }, o: { x: [0.35], y: [0] }, t: 90, s: [95] },
              { t: 180, s: [60] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [150, 148, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Transmission Line Top",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [110, 4] }, p: { a: 0, k: [0, -18] }, r: { a: 0, k: 2 } },
              { ty: "fl", c: { a: 0, k: BLUE }, o: { a: 0, k: 90 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          },
          {
            ty: "gr",
            nm: "Transmission Line Bottom",
            it: [
              { ty: "rc", d: 1, s: { a: 0, k: [110, 4] }, p: { a: 0, k: [0, 18] }, r: { a: 0, k: 2 } },
              { ty: "fl", c: { a: 0, k: GREEN }, o: { a: 0, k: 90 } },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },

      createGroundShadowLayer(6, [150, 245, 0], [150, 24]),
      createAmbientGlowLayer(7, PASTEL_BLUE, [210, 210])
    ]
  };
}

// ==============================================================
// EXECUTION: Write and update all slides 03 - 07
// ==============================================================
const slides = [
  { id: '03', data: buildSlide03Lottie() },
  { id: '04', data: buildSlide04Lottie() },
  { id: '05', data: buildSlide05Lottie() },
  { id: '06', data: buildSlide06Lottie() },
  { id: '07', data: buildSlide07Lottie() }
];

slides.forEach(({ id, data }) => {
  const slidePath = path.join(__dirname, `../src/slide/${id}/lottie.json`);
  const publicPath = path.join(__dirname, `../public/assets/lottie/slide-${id}.json`);
  
  fs.writeFileSync(slidePath, JSON.stringify(data, null, 2), 'utf8');
  fs.writeFileSync(publicPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[OK] Successfully wrote clean standard Bodymovin lottie.json for Slide ${id}`);
});

console.log('=== All Lottie Assets Rebuilt and Verified Successfully! ===');
