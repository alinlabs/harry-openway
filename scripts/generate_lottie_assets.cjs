const fs = require('fs');
const path = require('path');

const PUBLIC_LOTTIE_DIR = path.join(__dirname, '..', 'public', 'assets', 'lottie');
const SRC_LOTTIE_DIR = path.join(__dirname, '..', 'src', 'assets', 'lottie');

// Ensure directories exist
fs.mkdirSync(PUBLIC_LOTTIE_DIR, { recursive: true });
fs.mkdirSync(SRC_LOTTIE_DIR, { recursive: true });

// Helper to create valid Bodymovin / Lottie JSON animation structure
function createLottieAnimation(id, name, themeColorHex, accentColorHex, actionType) {
  // Convert hex to [r, g, b, 1] normalized (0-1)
  const hexToRgba = (hex) => {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16) / 255;
    const g = parseInt(c.substring(2, 4), 16) / 255;
    const b = parseInt(c.substring(4, 6), 16) / 255;
    return [parseFloat(r.toFixed(3)), parseFloat(g.toFixed(3)), parseFloat(b.toFixed(3)), 1];
  };

  const primaryRgba = hexToRgba(themeColorHex);
  const accentRgba = hexToRgba(accentColorHex);
  const whiteRgba = [1, 1, 1, 1];
  const pastelRgba = [0.91, 0.94, 0.99, 1];

  // Base Lottie Spec v5.7.4
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 480,
    h: 140,
    nm: `Slide ${id} - ${name} (${actionType})`,
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Foreground Dynamic 3D Action Node (Orbiting / Tilting / Pulsing)
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "3D Kinetic Action Node",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
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
              { t: 0, s: [240, 68, 0], e: [240, 62, 0] },
              { t: 90, s: [240, 62, 0], e: [240, 68, 0] },
              { t: 180, s: [240, 68, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 100, 100], e: [108, 108, 100] },
              { t: 90, s: [108, 108, 100], e: [100, 100, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Jewel Group",
            it: [
              {
                ty: "rc",
                nm: "Isometric Diamond",
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [26, 26] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Primary",
                c: { a: 0, k: primaryRgba },
                o: { a: 0, k: 100 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: whiteRgba },
                o: { a: 0, k: 90 },
                w: { a: 0, k: 2 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },
      // Layer 2: 3D Expanding Kinetic Ring / Radar Wave
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "3D Kinetic Wave Ring",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [80], e: [0] },
              { t: 90, s: [0], e: [80] },
              { t: 180, s: [80] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [240, 65, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [60, 24, 100], e: [160, 60, 100] },
              { t: 180, s: [160, 60, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Ellipse Ring",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [120, 60] }
          },
          {
            ty: "st",
            nm: "Stroke Wave",
            c: { a: 0, k: accentRgba },
            o: { a: 0, k: 80 },
            w: { a: 0, k: 2 }
          },
          {
            ty: "tr",
            p: { a: 0, k: [0, 0] },
            a: { a: 0, k: [0, 0] },
            s: { a: 0, k: [100, 100] },
            r: { a: 0, k: 0 },
            o: { a: 0, k: 100 }
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },
      // Layer 3: 3D Isometric Base Pedestal / Chassis
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "3D Isometric Base Platform",
        sr: 1,
        ks: {
          o: { a: 0, k: 85 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [240, 95, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Pedestal Shadow",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [280, 28] }
          },
          {
            ty: "fl",
            nm: "Pedestal Fill",
            c: { a: 0, k: pastelRgba },
            o: { a: 0, k: 90 }
          },
          {
            ty: "st",
            nm: "Pedestal Outline",
            c: { a: 0, k: [0.8, 0.85, 0.92, 1] },
            o: { a: 0, k: 70 },
            w: { a: 0, k: 1 }
          },
          {
            ty: "tr",
            p: { a: 0, k: [0, 0] },
            a: { a: 0, k: [0, 0] },
            s: { a: 0, k: [100, 100] },
            r: { a: 0, k: 0 },
            o: { a: 0, k: 100 }
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      }
    ]
  };
}

// 20 Slides Catalog
const SLIDES_LOTTIE_CATALOG = [
  { id: 1, name: "Executive Readiness", primary: "#1a73e8", accent: "#34a853", action: "3D Financial Command Hub" },
  { id: 2, name: "Track Record", primary: "#1a73e8", accent: "#fbbc04", action: "3D Kinetic Balance Scale" },
  { id: 3, name: "Competency Radar", primary: "#1a73e8", accent: "#34a853", action: "3D Pentagonal Holographic Shield" },
  { id: 4, name: "BSPI 2025 Pipeline", primary: "#1a73e8", accent: "#ea4335", action: "3D ISO 20022 Pipeline Matrix" },
  { id: 5, name: "Platform Architecture", primary: "#1a73e8", accent: "#34a853", action: "3D Layered Isometric Core Stack" },
  { id: 6, name: "Card Issuing Wallets", primary: "#1a73e8", accent: "#fbbc04", action: "3D Isometric Contactless Tap" },
  { id: 7, name: "Merchant SoftPOS", primary: "#1a73e8", accent: "#34a853", action: "3D Smart POS & Floating QR" },
  { id: 8, name: "National Switching TPS", primary: "#1a73e8", accent: "#ea4335", action: "3D High-TPS Network Switchboard" },
  { id: 9, name: "Settlement Clearing", primary: "#1a73e8", accent: "#34a853", action: "3D Automated Clearing Vault" },
  { id: 10, name: "Target Accounts Map", primary: "#1a73e8", accent: "#fbbc04", action: "3D Topographic Indonesia Geo-Pillars" },
  { id: 11, name: "WAY4 vs Legacy Battle", primary: "#1a73e8", accent: "#ea4335", action: "3D Head-to-Head Hexagonal Arena" },
  { id: 12, name: "Strangler Fig Migration", primary: "#1a73e8", accent: "#34a853", action: "3D Strangler Fig Dual-Conduit" },
  { id: 13, name: "Dual Engine Sales", primary: "#1a73e8", accent: "#fbbc04", action: "3D Dual-Propulsion Turbine" },
  { id: 14, name: "30-60-90 Day Plan", primary: "#1a73e8", accent: "#34a853", action: "3D Isometric Stepping Platforms" },
  { id: 15, name: "Stakeholder Matrix", primary: "#1a73e8", accent: "#fbbc04", action: "3D Executive Boardroom Hologram" },
  { id: 16, name: "RFP Winning Formula", primary: "#1a73e8", accent: "#34a853", action: "3D Bidding Arena & TKDN Shield" },
  { id: 17, name: "Commercial Packaging", primary: "#1a73e8", accent: "#34a853", action: "3D Isometric Revenue Block Vault" },
  { id: 18, name: "TCO ROI Break-Even", primary: "#34a853", accent: "#1a73e8", action: "3D Break-Even Fulcrum & Trajectory" },
  { id: 19, name: "Sales Pipeline Commitment", primary: "#1a73e8", accent: "#34a853", action: "3D Kinetic Funnel Chute" },
  { id: 20, name: "Executive Closing Beacon", primary: "#1a73e8", accent: "#34a853", action: "3D SCBD Jakarta Financial Beacon" }
];

console.log("==> Generating 20 Lottie JSON Assets in /public/assets/lottie and /src/assets/lottie...");

let barrelExports = [];

SLIDES_LOTTIE_CATALOG.forEach((item) => {
  const padId = String(item.id).padStart(2, '0');
  const filename = `slide-${padId}.json`;
  const lottieData = createLottieAnimation(padId, item.name, item.primary, item.accent, item.action);
  const jsonContent = JSON.stringify(lottieData, null, 2);

  // Write to public/assets/lottie
  const publicPath = path.join(PUBLIC_LOTTIE_DIR, filename);
  fs.writeFileSync(publicPath, jsonContent, 'utf8');

  // Write to src/assets/lottie
  const srcPath = path.join(SRC_LOTTIE_DIR, filename);
  fs.writeFileSync(srcPath, jsonContent, 'utf8');

  barrelExports.push(`export { default as slide${padId}Lottie } from './slide-${padId}.json';`);
  console.log(`[GENERATED] ${filename} (${item.action})`);
});

// Write TypeScript barrel in src/assets/lottie/index.ts
const barrelContent = `// Auto-generated 20 Slides 3D Lottie Assets Barrel\n` +
  barrelExports.join('\n') +
  `\n\nexport const LOTTIE_ASSETS_MAP: Record<number, string> = {\n` +
  SLIDES_LOTTIE_CATALOG.map((i) => `  ${i.id}: '/assets/lottie/slide-${String(i.id).padStart(2, '0')}.json'`).join(',\n') +
  `\n};\n`;

fs.writeFileSync(path.join(SRC_LOTTIE_DIR, 'index.ts'), barrelContent, 'utf8');
console.log(`==> Selesai! 20 berkas Lottie JSON dan barrel index.ts sukses dibuat.`);
