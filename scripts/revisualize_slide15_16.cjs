const fs = require('fs');
const path = require('path');

console.log('==> Starting Revisualization Script for Slide 15 and Slide 16...');

const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to convert hex to Lottie rgba array [r, g, b, a] in 0-1 range
function hexToRgba(hex, alpha = 1) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [parseFloat(r.toFixed(3)), parseFloat(g.toFixed(3)), parseFloat(b.toFixed(3)), alpha];
}

// ============================================================================
// 1. GENERATE LOTTIE JSON FOR SLIDE 15: 3D Holographic Executive Boardroom
// ============================================================================
function generateLottieSlide15() {
  const blue = hexToRgba('#1a73e8');
  const green = hexToRgba('#34a853');
  const amber = hexToRgba('#fbbc04');
  const purple = hexToRgba('#9333ea');
  const white = [1, 1, 1, 1];

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 520,
    h: 220,
    nm: "Slide 15 - 3D Executive Boardroom Hologram",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Central Rotating WAY4 Consensus Core
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "WAY4 Consensus Core",
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
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [95, 95, 100], e: [115, 115, 100] },
              { t: 90, s: [115, 115, 100], e: [95, 95, 100] },
              { t: 180, s: [95, 95, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Core Diamond",
            it: [
              {
                ty: "rc",
                nm: "Diamond Shape",
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [32, 32] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Blue",
                c: { a: 0, k: blue },
                o: { a: 0, k: 95 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
                o: { a: 0, k: 100 },
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
      // Layer 2: Pulsing Boardroom Consensus Radar Wave
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Consensus Radar Wave",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [85], e: [0] },
              { t: 180, s: [0] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [50, 25, 100], e: [260, 130, 100] },
              { t: 180, s: [260, 130, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Wave Ellipse",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [140, 70] }
          },
          {
            ty: "st",
            nm: "Stroke Amber",
            c: { a: 0, k: amber },
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
      // Layer 3: 4 Orbiting Persona Satellites (Multi-Threading Hologram)
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "4 C-Level Persona Holograms",
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
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 50, 100] }
        },
        ao: 0,
        shapes: [
          // Satellite 1: CIO (Top North)
          {
            ty: "gr",
            nm: "CIO Node",
            it: [
              {
                ty: "el",
                nm: "Dot CIO",
                p: { a: 0, k: [0, -90] },
                s: { a: 0, k: [16, 16] }
              },
              {
                ty: "fl",
                nm: "Fill Blue",
                c: { a: 0, k: blue },
                o: { a: 0, k: 100 }
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
          },
          // Satellite 2: Cards (Right East)
          {
            ty: "gr",
            nm: "Cards Node",
            it: [
              {
                ty: "el",
                nm: "Dot Cards",
                p: { a: 0, k: [180, 0] },
                s: { a: 0, k: [16, 16] }
              },
              {
                ty: "fl",
                nm: "Fill Green",
                c: { a: 0, k: green },
                o: { a: 0, k: 100 }
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
          },
          // Satellite 3: CFO (Bottom South)
          {
            ty: "gr",
            nm: "CFO Node",
            it: [
              {
                ty: "el",
                nm: "Dot CFO",
                p: { a: 0, k: [0, 90] },
                s: { a: 0, k: [16, 16] }
              },
              {
                ty: "fl",
                nm: "Fill Amber",
                c: { a: 0, k: amber },
                o: { a: 0, k: 100 }
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
          },
          // Satellite 4: Compliance (Left West)
          {
            ty: "gr",
            nm: "Compliance Node",
            it: [
              {
                ty: "el",
                nm: "Dot Compliance",
                p: { a: 0, k: [-180, 0] },
                s: { a: 0, k: [16, 16] }
              },
              {
                ty: "fl",
                nm: "Fill Purple",
                c: { a: 0, k: purple },
                o: { a: 0, k: 100 }
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
      }
    ]
  };
}

// ============================================================================
// 2. GENERATE LOTTIE JSON FOR SLIDE 16: 3D Bidding Arena & TKDN Shield
// ============================================================================
function generateLottieSlide16() {
  const blue = hexToRgba('#1a73e8');
  const green = hexToRgba('#34a853');
  const coral = hexToRgba('#ea4335');
  const white = [1, 1, 1, 1];

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 520,
    h: 220,
    nm: "Slide 16 - 3D Bidding Arena & TKDN Shield",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Central 10,250 TPS Stress-Test Cube
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "10k TPS Stress Cube",
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
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 100, 100], e: [112, 112, 100] },
              { t: 90, s: [112, 112, 100], e: [100, 100, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            nm: "Cube Group",
            it: [
              {
                ty: "rc",
                nm: "Central Cube",
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [34, 34] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Green",
                c: { a: 0, k: green },
                o: { a: 0, k: 95 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 2.5 }
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
      // Layer 2: TKDN Protective Shield Energy Ring (Pulsing Ellipse)
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "TKDN Shield Wave",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [80], e: [0] },
              { t: 180, s: [0] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [60, 30, 100], e: [240, 120, 100] },
              { t: 180, s: [240, 120, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Shield Oval",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [150, 75] }
          },
          {
            ty: "st",
            nm: "Stroke Blue",
            c: { a: 0, k: blue },
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
      // Layer 3: 3 SI Consortium Bastions & Competitor Deflection Particle Beam
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "SI Bastions & Deflection",
        sr: 1,
        ks: {
          o: { a: 0, k: 90 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], e: [-360] },
              { t: 180, s: [-360] }
            ]
          },
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 50, 100] }
        },
        ao: 0,
        shapes: [
          // Tower 1 (Mastersystem)
          {
            ty: "gr",
            nm: "Bastion 1",
            it: [
              {
                ty: "rc",
                nm: "Bastion Rect 1",
                p: { a: 0, k: [0, -85] },
                s: { a: 0, k: [18, 18] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Blue",
                c: { a: 0, k: blue },
                o: { a: 0, k: 90 }
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
          },
          // Tower 2 (Multipolar)
          {
            ty: "gr",
            nm: "Bastion 2",
            it: [
              {
                ty: "rc",
                nm: "Bastion Rect 2",
                p: { a: 0, k: [150, 45] },
                s: { a: 0, k: [18, 18] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Green",
                c: { a: 0, k: green },
                o: { a: 0, k: 90 }
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
          },
          // Tower 3 (Metrodata)
          {
            ty: "gr",
            nm: "Bastion 3",
            it: [
              {
                ty: "rc",
                nm: "Bastion Rect 3",
                p: { a: 0, k: [-150, 45] },
                s: { a: 0, k: [18, 18] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Coral",
                c: { a: 0, k: coral },
                o: { a: 0, k: 90 }
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
      }
    ]
  };
}

// Write Lottie JSON files
const lottie15 = JSON.stringify(generateLottieSlide15(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/15/lottie.json'), lottie15, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-15.json'), lottie15, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-15.json'), lottie15, 'utf8');
console.log('[OK] Generated Slide 15 Lottie JSON files');

const lottie16 = JSON.stringify(generateLottieSlide16(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/16/lottie.json'), lottie16, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-16.json'), lottie16, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-16.json'), lottie16, 'utf8');
console.log('[OK] Generated Slide 16 Lottie JSON files');

// ============================================================================
// 3. WRITE SLIDE 15: data.ts
// ============================================================================
const slide15DataContent = `export interface StakeholderPersona {
  id: 'cio' | 'cards' | 'compliance' | 'cfo';
  role: string;
  roleShort: string;
  subtitle: string;
  quadrantName: string;
  quadrantCode: string;
  primaryAgenda: string;
  way4StrategicMessage: string;
  engagementTactic: string;
  riskMitigation: string;
  accentColor: string;
  pastelBg: string;
  borderColor: string;
  metrics: { label: string; value: string }[];
  nodeCoords: { x: number; y: number };
}

export interface Slide15SummaryMetric {
  label: string;
  value: string;
  sublabel: string;
  accentColor: string;
}

export const STAKEHOLDER_PERSONAS_DATA: StakeholderPersona[] = [
  {
    id: 'cio',
    role: 'Chief Information Officer / CTO',
    roleShort: 'CIO / CTO',
    subtitle: 'Technical Sign-Off Authority',
    quadrantName: 'High Authority • Tech',
    quadrantCode: 'Q1',
    primaryAgenda: 'Uptime 99.999% & zero-downtime microservices',
    way4StrategicMessage: 'Cloud-native hardware-agnostic & Strangler Fig',
    engagementTactic: 'Live bake-off 10.000+ TPS benchmark',
    riskMitigation: 'Zero-risk rollback & parallel runtime',
    accentColor: '#1a73e8',
    pastelBg: '#f8fafd',
    borderColor: '#bfdbfe',
    metrics: [
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Deployment', value: 'Kubernetes' },
      { label: 'Migration', value: 'Strangler Fig' }
    ],
    nodeCoords: { x: 260, y: 40 }
  },
  {
    id: 'cards',
    role: 'Head of Cards & Digital Payments',
    roleShort: 'Head of Cards',
    subtitle: 'Business & Economic Champion',
    quadrantName: 'High Authority • Business',
    quadrantCode: 'Q2',
    primaryAgenda: 'Time-to-market cepat & fee-based income',
    way4StrategicMessage: 'No-code rule engine & multi-currency wallet',
    engagementTactic: 'Live prototype demo penerbitan instan',
    riskMitigation: 'Eliminasi keterlambatan rilis vendor lama',
    accentColor: '#34a853',
    pastelBg: '#f6fcf8',
    borderColor: '#bbf7d0',
    metrics: [
      { label: 'Launch Speed', value: '< 2 Minggu' },
      { label: 'Card Issuing', value: 'Virtual & Instant' },
      { label: 'Fee Engine', value: 'Multi-Valas' }
    ],
    nodeCoords: { x: 440, y: 110 }
  },
  {
    id: 'compliance',
    role: 'Chief Compliance & Risk Officer',
    roleShort: 'Chief Compliance',
    subtitle: 'Regulatory Guardian & Risk',
    quadrantName: 'Governance • Regulatory',
    quadrantCode: 'Q3',
    primaryAgenda: 'Kepatuhan mutlak regulasi BI & audit OJK',
    way4StrategicMessage: 'SNAP BI native & PCI-DSS 4.0 certified',
    engagementTactic: 'Audit matrix & dossier sertifikasi keamanan',
    riskMitigation: 'Nol penalti regulasi & kedaulatan data lokal',
    accentColor: '#9333ea',
    pastelBg: '#faf5ff',
    borderColor: '#e9d5ff',
    metrics: [
      { label: 'Regulasi BI', value: '100% Compliant' },
      { label: 'Security', value: 'PCI-DSS 4.0' },
      { label: 'Audit OJK', value: 'Zero Penalty' }
    ],
    nodeCoords: { x: 80, y: 110 }
  },
  {
    id: 'cfo',
    role: 'CFO & Head of Procurement',
    roleShort: 'CFO / Procurement',
    subtitle: 'Commercial Gatekeeper & ROI',
    quadrantName: 'Governance • Commercial',
    quadrantCode: 'Q4',
    primaryAgenda: 'Prediktabilitas TCO 5 tahun & efisiensi Capex',
    way4StrategicMessage: 'TCO hemat 42% & garansi cap AMC 20%',
    engagementTactic: 'Financial ROI modeling & simulasi payback',
    riskMitigation: 'Mencegah hidden cost lisensi vendor lama',
    accentColor: '#fbbc04',
    pastelBg: '#fefcf6',
    borderColor: '#fde68a',
    metrics: [
      { label: 'TCO Saving', value: '42% Lower' },
      { label: 'AMC Cap', value: '20% Fixed' },
      { label: 'Payback', value: '< 18 Bulan' }
    ],
    nodeCoords: { x: 260, y: 180 }
  }
];

export const MULTI_THREADING_PROTOCOLS = [
  {
    pillar: 'Paralelisasi Engagement',
    desc: 'Simultan ke 4 C-Level tanpa bottleneck'
  },
  {
    pillar: 'Mitigasi Rotasi Direksi',
    desc: 'Konsensus institusional lintas divisi'
  },
  {
    pillar: 'Tailored Messaging',
    desc: 'Teknis, komersial, bisnis, kepatuhan'
  }
];

export const SLIDE15_SUMMARY_METRICS: Slide15SummaryMetric[] = [
  {
    label: 'Buying Center',
    value: '4 C-Suite',
    sublabel: 'Simultaneous Multi-Thread',
    accentColor: '#1a73e8'
  },
  {
    label: 'Deal Acceleration',
    value: '-35%',
    sublabel: 'Cycle Time Reduction',
    accentColor: '#34a853'
  },
  {
    label: 'Executive Churn Risk',
    value: 'Zero-SPOF',
    sublabel: 'Institutional Consensus',
    accentColor: '#9333ea'
  },
  {
    label: 'Contract Protection',
    value: '20% AMC',
    sublabel: 'Capped Opex Guarantee',
    accentColor: '#fbbc04'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/15/data.ts'), slide15DataContent, 'utf8');
console.log('[OK] Written src/slide/15/data.ts');

// ============================================================================
// 4. WRITE SLIDE 15: container.tsx
// ============================================================================
const slide15ContainerContent = `import { useState } from 'react';
import {
  STAKEHOLDER_PERSONAS_DATA,
  MULTI_THREADING_PROTOCOLS,
  SLIDE15_SUMMARY_METRICS,
  StakeholderPersona,
  Slide15SummaryMetric
} from './data';

export interface Slide15Controller {
  personas: StakeholderPersona[];
  summaryMetrics: Slide15SummaryMetric[];
  protocols: typeof MULTI_THREADING_PROTOCOLS;
  hoveredPersonaId: string | null;
  setHoveredPersonaId: (id: string | null) => void;
  selectedPersona: StakeholderPersona;
}

export function useSlide15Container(): Slide15Controller {
  const [hoveredPersonaId, setHoveredPersonaId] = useState<string | null>(null);

  const selectedPersona =
    STAKEHOLDER_PERSONAS_DATA.find((p) => p.id === hoveredPersonaId) ||
    STAKEHOLDER_PERSONAS_DATA[0];

  return {
    personas: STAKEHOLDER_PERSONAS_DATA,
    summaryMetrics: SLIDE15_SUMMARY_METRICS,
    protocols: MULTI_THREADING_PROTOCOLS,
    hoveredPersonaId,
    setHoveredPersonaId,
    selectedPersona
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/15/container.tsx'), slide15ContainerContent, 'utf8');
console.log('[OK] Written src/slide/15/container.tsx');

// ============================================================================
// 5. WRITE SLIDE 15: visual-3D.tsx
// ============================================================================
const slide15Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { STAKEHOLDER_PERSONAS_DATA } from './data';
import { Cpu, CreditCard, ShieldAlert, Coins, Sparkles, CheckCircle2 } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  hoveredId?: string | null;
  onHoverPersona?: (id: string | null) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  hoveredId = null,
  onHoverPersona
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Telemetry Top Bar (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D Holographic Executive Boardroom Persona Matrix
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-600 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>100% Consensus Alignment</span>
        </div>
      </div>

      {/* 3D Isometric Boardroom Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Holographic Isometric Boardroom Table & Multi-Thread Beams */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible"
          viewBox="0 0 520 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="boardroomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="centerCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a73e8" />
              <stop offset="100%" stopColor="#174ea6" />
            </linearGradient>
          </defs>

          {/* 3D Isometric Boardroom Table Slab */}
          <ellipse cx="260" cy="110" rx="190" ry="72" fill="url(#boardroomGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="260" cy="110" rx="160" ry="60" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          
          {/* Depth Extrusion for 3D Table */}
          <path d="M 70 110 C 70 150 450 150 450 110 L 450 118 C 450 158 70 158 70 118 Z" fill="#cbd5e1" opacity="0.5" />

          {/* 4 Laser Multi-Thread Beams radiating to C-Level Nodes */}
          {/* Beam to North CIO (260, 40) */}
          <line x1="260" y1="110" x2="260" y2="40" stroke="#1a73e8" strokeWidth="2" strokeDasharray="8 6" className="animate-[dash_3s_linear_infinite]" />
          {/* Beam to East Cards (440, 110) */}
          <line x1="260" y1="110" x2="440" y2="110" stroke="#34a853" strokeWidth="2" strokeDasharray="8 6" className="animate-[dash_3s_linear_infinite]" />
          {/* Beam to South CFO (260, 180) */}
          <line x1="260" y1="110" x2="260" y2="180" stroke="#fbbc04" strokeWidth="2" strokeDasharray="8 6" className="animate-[dash_3s_linear_infinite]" />
          {/* Beam to West Compliance (80, 110) */}
          <line x1="260" y1="110" x2="80" y2="110" stroke="#9333ea" strokeWidth="2" strokeDasharray="8 6" className="animate-[dash_3s_linear_infinite]" />

          {/* Center: WAY4 Core Investment Consensus Node */}
          <circle cx="260" cy="110" r="28" fill="url(#centerCoreGrad)" stroke="#ffffff" strokeWidth="2" />
          <circle cx="260" cy="110" r="34" fill="none" stroke="#1a73e8" strokeWidth="1" opacity="0.4" className="animate-ping" />
          <text x="260" y="107" textAnchor="middle" className="text-[10px] font-black fill-white tracking-wider font-inter">
            WAY4
          </text>
          <text x="260" y="118" textAnchor="middle" className="text-[7.5px] font-mono fill-blue-100 font-bold">
            CONSENSUS
          </text>

          {/* Node 1: CIO / CTO (North: 260, 40) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onMouseEnter={() => onHoverPersona && onHoverPersona('cio')}
            onMouseLeave={() => onHoverPersona && onHoverPersona(null)}
          >
            <rect x="210" y="24" width="100" height="32" rx="6" fill="#ffffff" stroke={hoveredId === 'cio' ? '#1a73e8' : '#e2e8f0'} strokeWidth={hoveredId === 'cio' ? 2 : 1} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
            <circle cx="222" cy="40" r="5" fill="#1a73e8" />
            <text x="233" y="36" className="text-[8.5px] font-bold fill-slate-900 font-inter">CIO / CTO</text>
            <text x="233" y="47" className="text-[7.5px] font-mono font-semibold fill-blue-600">99.999% SLA</text>
          </g>

          {/* Node 2: Head of Cards (East: 440, 110) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onMouseEnter={() => onHoverPersona && onHoverPersona('cards')}
            onMouseLeave={() => onHoverPersona && onHoverPersona(null)}
          >
            <rect x="390" y="94" width="105" height="32" rx="6" fill="#ffffff" stroke={hoveredId === 'cards' ? '#34a853' : '#e2e8f0'} strokeWidth={hoveredId === 'cards' ? 2 : 1} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
            <circle cx="402" cy="110" r="5" fill="#34a853" />
            <text x="413" y="106" className="text-[8.5px] font-bold fill-slate-900 font-inter">HEAD OF CARDS</text>
            <text x="413" y="117" className="text-[7.5px] font-mono font-semibold fill-emerald-600">&lt; 2 Wk Launch</text>
          </g>

          {/* Node 3: CFO / Procurement (South: 260, 180) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onMouseEnter={() => onHoverPersona && onHoverPersona('cfo')}
            onMouseLeave={() => onHoverPersona && onHoverPersona(null)}
          >
            <rect x="205" y="164" width="110" height="32" rx="6" fill="#ffffff" stroke={hoveredId === 'cfo' ? '#fbbc04' : '#e2e8f0'} strokeWidth={hoveredId === 'cfo' ? 2 : 1} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
            <circle cx="217" cy="180" r="5" fill="#fbbc04" />
            <text x="228" y="176" className="text-[8.5px] font-bold fill-slate-900 font-inter">CFO / PROCUREMENT</text>
            <text x="228" y="187" className="text-[7.5px] font-mono font-semibold fill-amber-600">-42% TCO Saving</text>
          </g>

          {/* Node 4: Chief Compliance (West: 80, 110) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onMouseEnter={() => onHoverPersona && onHoverPersona('compliance')}
            onMouseLeave={() => onHoverPersona && onHoverPersona(null)}
          >
            <rect x="25" y="94" width="110" height="32" rx="6" fill="#ffffff" stroke={hoveredId === 'compliance' ? '#9333ea' : '#e2e8f0'} strokeWidth={hoveredId === 'compliance' ? 2 : 1} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
            <circle cx="37" cy="110" r="5" fill="#9333ea" />
            <text x="48" y="106" className="text-[8.5px] font-bold fill-slate-900 font-inter">CHIEF COMPLIANCE</text>
            <text x="48" y="117" className="text-[7.5px] font-mono font-semibold fill-purple-600">SNAP BI Compliant</text>
          </g>
        </svg>
      </div>

      {/* 4 Multi-Threading Footnote Pillars (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">CIO: Tech Sign-Off</div>
          <div className="text-[8px] text-slate-500 font-medium">Cloud-Native Strangler Fig</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-emerald-700">Cards: Business Growth</div>
          <div className="text-[8px] text-slate-500 font-medium">Virtual Cards & Instant Fee</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-purple-700">Risk: Full Compliance</div>
          <div className="text-[8px] text-slate-500 font-medium">SNAP BI & PCI-DSS 4.0</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-amber-700">CFO: ROI & Cap AMC</div>
          <div className="text-[8px] text-slate-500 font-medium">42% TCO & Payback &lt; 18 Mo</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/15/visual-3D.tsx'), slide15Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/15/visual-3D.tsx');

// ============================================================================
// 6. WRITE SLIDE 15: index.tsx
// ============================================================================
const slide15IndexContent = `import React from 'react';
import { useSlide15Container } from './container';
import { Visual3D } from './visual-3D';
import {
  Users,
  CheckCircle2,
  Cpu,
  CreditCard,
  ShieldAlert,
  Coins,
  ShieldCheck,
  Zap,
  Network,
  ArrowRight
} from 'lucide-react';

export const Slide15: React.FC = () => {
  const {
    personas,
    summaryMetrics,
    protocols,
    hoveredPersonaId,
    setHoveredPersonaId
  } = useSlide15Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Header Metadata Bar (Flat Mounted, Monoline, Zero-Badge) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            C-Level Stakeholder Influence & Buying Center Dossier
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 15: 2x2 Authority vs Governance Matrix & Multi-Threading Protocol
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1a73e8]" />
            <span className="text-[11px] font-bold">CIO (Tech)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#34a853]" />
            <span className="text-[11px] font-bold">Cards (Biz)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9333ea]" />
            <span className="text-[11px] font-bold">Risk (Gov)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#fbbc04]" />
            <span className="text-[11px] font-bold">CFO (Cost)</span>
          </div>
        </div>
      </div>

      {/* 2. Top Summary KPI Metrics Strip (Flat Canvas) */}
      <div className="grid grid-cols-4 gap-3 py-1.5 border-b border-slate-100 shrink-0">
        {summaryMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-2 bg-slate-50/70 border border-slate-100 flex items-center justify-between"
          >
            <div>
              <div className="text-[9.5px] uppercase font-bold tracking-wider text-slate-500">
                {metric.label}
              </div>
              <div
                className="text-base font-black font-inter tabular-nums mt-0.5"
                style={{ color: metric.accentColor }}
              >
                {metric.value}
              </div>
              <div className="text-[9px] text-slate-500 font-medium">
                {metric.sublabel}
              </div>
            </div>
            <div
              className="w-1 h-7 rounded-full"
              style={{ backgroundColor: metric.accentColor }}
            />
          </div>
        ))}
      </div>

      {/* 3. Main Content Split: Left (5 Cols) Visual 3D Holographic Boardroom | Right (7 Cols) Buying Center Dossier */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 3D Visual Boardroom Component Flat Mounted */}
        <div className="col-span-5 flex flex-col justify-between border border-slate-100 p-2 bg-slate-50/40">
          <Visual3D
            hoveredId={hoveredPersonaId}
            onHoverPersona={setHoveredPersonaId}
          />
        </div>

        {/* Right Column (Span 7): 4 C-Level Personas Complete Breakdown (Zero-Click, 1-3 Words Ultra-Minim Teks) */}
        <div className="col-span-7 flex flex-col justify-between space-y-1.5 border-l border-slate-100 pl-3">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                C-Level Persona Tailored Messaging Dossier
              </span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold font-inter tabular-nums">
              Multi-Thread Alignment
            </span>
          </div>

          {/* 4 Personas Cards (Zero-Click, Strict Inter Typography) */}
          <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
            {personas.map((p) => {
              const isHovered = hoveredPersonaId === p.id;

              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setHoveredPersonaId(p.id)}
                  onMouseLeave={() => setHoveredPersonaId(null)}
                  className={\`p-2 border transition-all flex flex-col justify-between \${
                    isHovered
                      ? 'border-blue-400 bg-white shadow-xs'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white'
                  }\`}
                  style={{
                    borderTopWidth: '3px',
                    borderTopColor: p.accentColor
                  }}
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        {p.id === 'cio' && <Cpu className="w-3.5 h-3.5 text-blue-600" />}
                        {p.id === 'cards' && <CreditCard className="w-3.5 h-3.5 text-emerald-600" />}
                        {p.id === 'compliance' && <ShieldAlert className="w-3.5 h-3.5 text-purple-600" />}
                        {p.id === 'cfo' && <Coins className="w-3.5 h-3.5 text-amber-600" />}
                        <span className="text-[10.5px] font-bold text-slate-900 leading-tight">
                          {p.roleShort}
                        </span>
                      </div>
                      <span
                        className="text-[9px] font-bold font-mono"
                        style={{ color: p.accentColor }}
                      >
                        {p.quadrantCode}
                      </span>
                    </div>

                    {/* Agenda & WAY4 Value (Ultra-Minim Teks, 1-3 Words) */}
                    <div className="space-y-1 text-[9.5px]">
                      <div className="p-1 bg-white border border-slate-100">
                        <span className="text-[8px] uppercase font-bold text-slate-400 block">
                          Agenda Prioritas:
                        </span>
                        <span className="text-slate-800 font-semibold block leading-tight">
                          {p.primaryAgenda}
                        </span>
                      </div>

                      <div className="p-1 bg-white border border-slate-100">
                        <span
                          className="text-[8px] uppercase font-bold block"
                          style={{ color: p.accentColor }}
                        >
                          Solusi WAY4:
                        </span>
                        <span className="text-slate-900 font-bold block leading-tight">
                          {p.way4StrategicMessage}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Pills (Flat, Tabular Inter) */}
                  <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-100 mt-1 text-center">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/80 p-0.5 border border-slate-100">
                        <div className="text-[7.5px] text-slate-400 font-medium truncate">{m.label}</div>
                        <div className="text-[8.5px] font-bold font-inter tabular-nums text-slate-800 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Protocol Strip */}
          <div className="p-1.5 bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-between text-xs shrink-0">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-slate-800 text-[10px]">
                <strong className="font-semibold text-emerald-950">Protokol Penetrasi Paralel: </strong>
                Membangun konsensus kelembagaan simultan di seluruh lini teknis, bisnis, kepatuhan, dan keuangan.
              </span>
            </div>
            <span className="text-[10px] font-bold font-inter tabular-nums text-emerald-700 shrink-0 pl-2">
              Zero-SPOF Guaranteed
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Strategic Executive Takeaway */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Penetrasi buying center perbankan secara paralel mempercepat siklus keputusan (<strong className="text-slate-900 font-semibold">-35% Deal Cycle</strong>) serta mengamankan dukungan institusional permanen.
          </span>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Strategi:</span>
          <span className="text-blue-700 font-black text-xs tabular-nums">
            Consensus-Driven Closing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide15;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/15/index.tsx'), slide15IndexContent, 'utf8');
console.log('[OK] Written src/slide/15/index.tsx');

// ============================================================================
// 7. WRITE SLIDE 16: data.ts
// ============================================================================
const slide16DataContent = `export interface TenderStage {
  stageNumber: string;
  stageCode: string;
  title: string;
  objective: string;
  disqualificationTactic: string;
  competitorImpact: string;
  deliverable: string;
  keyAction: string;
  accentColor: string;
}

export interface CompetitorDisplacement {
  competitor: string;
  legacyFlaw: string;
  way4RfpClause: string;
  outcome: string;
  accent: string;
}

export interface SiPartnerConsortium {
  name: string;
  role: string;
  coverage: string;
  tkdnContribution: string;
}

export interface BakeOffMetric {
  metric: string;
  way4Value: string;
  competitorValue: string;
  advantage: string;
  status: 'superior' | 'critical';
}

export interface Slide16SummaryMetric {
  label: string;
  value: string;
  sub: string;
  accent: string;
}

export const TENDER_STAGES_DATA: TenderStage[] = [
  {
    stageNumber: '01',
    stageCode: 'PRE-RFP',
    title: 'Pre-RFP Shaping',
    objective: 'Pengondisian spesifikasi teknis RFI/RFP bank sebelum tender resmi dibuka',
    disqualificationTactic: 'Klausul arsitektur cloud-native microservices & ISO 20022',
    competitorImpact: 'Diskualifikasi switch monolitik (ACI BASE24 / FIS) di seleksi awal',
    deliverable: 'RFP Specs Aligned with WAY4',
    keyAction: 'RFI Advisory bersama CIO/CTO',
    accentColor: '#1a73e8'
  },
  {
    stageNumber: '02',
    stageCode: 'CONSORTIUM',
    title: 'SI Consortium & TKDN',
    objective: 'Penyusunan penawaran teknis 100% compliant dan konsorsium integrator lokal',
    disqualificationTactic: 'Kemitraan Tier-1 lokal untuk skor TKDN maksimal & Level-1 SLA',
    competitorImpact: 'Menutup akses SI utama bagi vendor asing tanpa aliansi lokal',
    deliverable: 'Top-Scored Bid Document',
    keyAction: 'MoU Mastersystem & Multipolar',
    accentColor: '#8ab4f8'
  },
  {
    stageNumber: '03',
    stageCode: 'BAKE-OFF',
    title: 'POC Live Bake-Off',
    objective: 'Uji performa live stress test 10.000+ TPS langsung di datacenter bank',
    disqualificationTactic: 'Stress test 10.000+ TPS stabil & latensi sub-45ms saat beban puncak',
    competitorImpact: 'Membuktikan kegagalan arsitektur lama saat spike transaksi BI-FAST',
    deliverable: '10k+ TPS Stress Certificate',
    keyAction: 'Live Benchmark Demonstration',
    accentColor: '#34a853'
  },
  {
    stageNumber: '04',
    stageCode: 'CLOSURE',
    title: 'Commercial Closing',
    objective: 'Negosiasi kontrak akhir, mitigasi risiko capex, dan penandatanganan kesepakatan',
    disqualificationTactic: 'Lisensi transparan, penghematan TCO 42%, dan garansi cap AMC 20%',
    competitorImpact: 'Mengalahkan lisensi mahal kompetitor dengan hidden capex tak terduga',
    deliverable: 'Enterprise Master Contract',
    keyAction: 'C-Level Commercial Agreement',
    accentColor: '#137333'
  }
];

export const COMPETITOR_DISPLACEMENTS: CompetitorDisplacement[] = [
  {
    competitor: 'ACI BASE24',
    legacyFlaw: 'Hardware proprietary, time-to-market 6-9 bulan',
    way4RfpClause: 'Klausul: Cloud-native & Rule Engine < 2 minggu',
    outcome: 'Disqualified Administrasi',
    accent: '#ea4335'
  },
  {
    competitor: 'FIS Cortex',
    legacyFlaw: 'Kompleksitas SNAP BI & multi-valas terbatas',
    way4RfpClause: 'Klausul: Native SNAP BI & zero-downtime hot reload',
    outcome: 'Gugur Stage 2 Compliance',
    accent: '#ea4335'
  },
  {
    competitor: 'BPC SmartVista',
    legacyFlaw: 'Rating analis di bawah Gartner Top-Rated Leader',
    way4RfpClause: 'Klausul: Bukti referensi global Tier-1 Bank',
    outcome: 'Outscored Bobot Teknis',
    accent: '#fbbc04'
  },
  {
    competitor: 'In-House Switch',
    legacyFlaw: 'Bottleneck latensi > 250ms saat spike BI-FAST',
    way4RfpClause: 'Klausul: Stress test 10.000+ TPS latensi < 45ms',
    outcome: 'Eliminasi Live Bake-Off',
    accent: '#ea4335'
  }
];

export const SI_CONSORTIUM_PARTNERS: SiPartnerConsortium[] = [
  {
    name: 'Mastersystem Infotama',
    role: 'Tier-1 Enterprise Systems Integrator',
    coverage: 'Mandiri, BRI, BCA Datacenter',
    tkdnContribution: '40%+ TKDN & Level-1/2 On-Site Support'
  },
  {
    name: 'Multipolar Technology',
    role: 'FSI Core & Network Specialist',
    coverage: 'BNI, Permata, Danamon, BJB',
    tkdnContribution: 'Managed Services & 24/7 National NOC'
  },
  {
    name: 'Metrodata Electronics',
    role: 'Cloud & Security Deployment',
    coverage: 'Bank Digital & FinTech Unicorn',
    tkdnContribution: 'Hybrid Cloud & Security Hardening'
  }
];

export const POC_BAKE_OFF_METRICS: BakeOffMetric[] = [
  {
    metric: 'Peak Stress',
    way4Value: '10,250 TPS',
    competitorValue: '2,400 TPS (Drop)',
    advantage: '4.2x Throughput',
    status: 'superior'
  },
  {
    metric: 'Latency ISO',
    way4Value: '42 ms',
    competitorValue: '285 ms (Lag)',
    advantage: '85% Faster',
    status: 'superior'
  },
  {
    metric: 'ISO 20022 Engine',
    way4Value: '100% Native',
    competitorValue: 'Wrapper Lag',
    advantage: 'Zero Translation',
    status: 'superior'
  },
  {
    metric: 'High Availability',
    way4Value: 'Active-Active',
    competitorValue: 'Active-Passive',
    advantage: 'Zero Downtime',
    status: 'critical'
  }
];

export const SLIDE16_SUMMARY_METRICS: Slide16SummaryMetric[] = [
  {
    label: 'Historical Win Rate',
    value: '85%',
    sub: 'Enterprise FSI Tenders',
    accent: '#1a73e8'
  },
  {
    label: 'Technical Compliance',
    value: '100%',
    sub: 'RFP Bid Scoring Track',
    accent: '#34a853'
  },
  {
    label: 'Local Consortium',
    value: 'Tier-1',
    sub: 'TKDN Compliant SI Partners',
    accent: '#1a73e8'
  },
  {
    label: 'Live POC Stress',
    value: '10k+ TPS',
    sub: 'Sub-45ms Verified Latency',
    accent: '#137333'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/16/data.ts'), slide16DataContent, 'utf8');
console.log('[OK] Written src/slide/16/data.ts');

// ============================================================================
// 8. WRITE SLIDE 16: container.tsx
// ============================================================================
const slide16ContainerContent = `import { useState } from 'react';
import {
  TENDER_STAGES_DATA,
  COMPETITOR_DISPLACEMENTS,
  SI_CONSORTIUM_PARTNERS,
  POC_BAKE_OFF_METRICS,
  SLIDE16_SUMMARY_METRICS,
  TenderStage,
  CompetitorDisplacement,
  SiPartnerConsortium,
  BakeOffMetric,
  Slide16SummaryMetric
} from './data';

export interface Slide16Controller {
  stages: TenderStage[];
  competitors: CompetitorDisplacement[];
  consortiumPartners: SiPartnerConsortium[];
  bakeOffMetrics: BakeOffMetric[];
  summaryMetrics: Slide16SummaryMetric[];
  activeStageIndex: number;
  setActiveStageIndex: (index: number) => void;
  selectedStage: TenderStage;
}

export function useSlide16Container(): Slide16Controller {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const selectedStage = TENDER_STAGES_DATA[activeStageIndex];

  return {
    stages: TENDER_STAGES_DATA,
    competitors: COMPETITOR_DISPLACEMENTS,
    consortiumPartners: SI_CONSORTIUM_PARTNERS,
    bakeOffMetrics: POC_BAKE_OFF_METRICS,
    summaryMetrics: SLIDE16_SUMMARY_METRICS,
    activeStageIndex,
    setActiveStageIndex,
    selectedStage
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/16/container.tsx'), slide16ContainerContent, 'utf8');
console.log('[OK] Written src/slide/16/container.tsx');

// ============================================================================
// 9. WRITE SLIDE 16: visual-3D.tsx
// ============================================================================
const slide16Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { Award, ShieldCheck, Zap, ShieldAlert, Cpu } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  activeStage?: number;
  onInteract?: () => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  activeStage = 0,
  onInteract
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Status Indicator Header (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D Bidding Arena & TKDN Compliance Shield
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1 text-blue-600 font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>85% Win-Rate</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% TKDN</span>
          </span>
        </div>
      </div>

      {/* 3D Isometric Fortress & Bake-Off Cube Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Isometric Fortress SVG Overlay */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible pointer-events-none"
          viewBox="0 0 520 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fortressBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cubeStressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34a853" />
              <stop offset="100%" stopColor="#137333" />
            </linearGradient>
          </defs>

          {/* 3D Hexagonal Fortress Base Floor */}
          <polygon
            points="260,35 440,75 440,145 260,185 80,145 80,75"
            fill="url(#fortressBaseGrad)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          {/* Depth Wall of Fortress */}
          <polygon
            points="80,145 260,185 440,145 440,155 260,195 80,155"
            fill="#cbd5e1"
            opacity="0.8"
          />

          {/* Inner Defensive Shield Ring (TKDN Perimeter) */}
          <ellipse cx="260" cy="110" rx="130" ry="48" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />

          {/* Central 3D Cube: 10,250 TPS Live Bake-Off Engine */}
          <g transform="translate(0, -6)">
            {/* Top Face of Cube */}
            <polygon points="260,82 295,98 260,114 225,98" fill="#34a853" stroke="#ffffff" strokeWidth="1.5" />
            {/* Left Face of Cube */}
            <polygon points="225,98 260,114 260,142 225,126" fill="#1e7e34" stroke="#ffffff" strokeWidth="1" />
            {/* Right Face of Cube */}
            <polygon points="260,114 295,98 295,126 260,142" fill="#137333" stroke="#ffffff" strokeWidth="1" />

            <circle cx="260" cy="100" r="14" fill="#ffffff" opacity="0.9" />
            <text x="260" y="103" textAnchor="middle" className="text-[7.5px] font-black fill-slate-900 font-mono">
              10k+
            </text>
            <text x="260" y="152" textAnchor="middle" className="text-[8px] font-black fill-emerald-800 font-inter">
              LIVE BAKE-OFF (10,250 TPS)
            </text>
          </g>

          {/* Left SI Bastion Tower: Mastersystem */}
          <g transform="translate(130, 85)">
            <rect x="0" y="0" width="76" height="26" rx="4" fill="#ffffff" stroke="#1a73e8" strokeWidth="1" />
            <circle cx="8" cy="13" r="3" fill="#1a73e8" />
            <text x="16" y="11" className="text-[7px] font-bold fill-slate-900 font-inter">MASTERSYSTEM</text>
            <text x="16" y="21" className="text-[8px] font-mono font-bold fill-blue-600">40%+ TKDN</text>
          </g>

          {/* Right SI Bastion Tower: Multipolar */}
          <g transform="translate(315, 85)">
            <rect x="0" y="0" width="76" height="26" rx="4" fill="#ffffff" stroke="#34a853" strokeWidth="1" />
            <circle cx="8" cy="13" r="3" fill="#34a853" />
            <text x="16" y="11" className="text-[7px] font-bold fill-slate-900 font-inter">MULTIPOLAR</text>
            <text x="16" y="21" className="text-[8px] font-mono font-bold fill-emerald-600">FSI Core SI</text>
          </g>

          {/* Deflection Barriers against Competitors */}
          <g transform="translate(25, 30)">
            <rect x="0" y="0" width="85" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
            <text x="6" y="14" className="text-[7.5px] font-bold fill-red-700 font-inter">✕ ACI BASE24 DISQUALIFIED</text>
          </g>
          <g transform="translate(410, 30)">
            <rect x="0" y="0" width="85" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
            <text x="6" y="14" className="text-[7.5px] font-bold fill-red-700 font-inter">✕ FIS CORTEX GUGUR</text>
          </g>
        </svg>
      </div>

      {/* Bottom 4 Active Bidding Milestones (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">01. Pre-RFP Shaping</div>
          <div className="text-[8px] text-slate-500 font-medium">Cloud-Native Criteria</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-600">02. SI Consortium</div>
          <div className="text-[8px] text-slate-500 font-medium">100% TKDN Compliance</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-emerald-700">03. Live Bake-Off</div>
          <div className="text-[8px] text-slate-500 font-medium">10,250 TPS Sub-45ms</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-emerald-800">04. Contract Won</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 25B Max TCV</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/16/visual-3D.tsx'), slide16Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/16/visual-3D.tsx');

// ============================================================================
// 10. WRITE SLIDE 16: index.tsx
// ============================================================================
const slide16IndexContent = `import React from 'react';
import { useSlide16Container } from './container';
import { Visual3D } from './visual-3D';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Scale,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const Slide16: React.FC = () => {
  const {
    stages,
    competitors,
    consortiumPartners,
    bakeOffMetrics,
    summaryMetrics,
    activeStageIndex,
    setActiveStageIndex
  } = useSlide16Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Top Meta Line (Strictly Flat, No Badges) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            Enterprise RFP & Tender Winning Formula
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 16: 4-Stage Strategic Bidding, SI Consortium & Competitor Displacement
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900">85% Win-Rate</span>
            <span className="text-slate-400">Track Record</span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900">100% Technical</span>
            <span className="text-slate-400">Compliance</span>
          </div>
        </div>
      </div>

      {/* 2. Top Summary KPI Metrics Strip (Flat Canvas) */}
      <div className="grid grid-cols-4 gap-3 py-1.5 border-b border-slate-100 shrink-0">
        {summaryMetrics.map((m, idx) => (
          <div
            key={idx}
            className="p-2 bg-slate-50/70 border border-slate-100 flex items-center justify-between"
          >
            <div>
              <div className="text-[9.5px] uppercase font-bold tracking-wider text-slate-500">
                {m.label}
              </div>
              <div
                className="text-base font-black font-inter tabular-nums mt-0.5"
                style={{ color: m.accent }}
              >
                {m.value}
              </div>
              <div className="text-[9px] text-slate-500 font-medium">
                {m.sub}
              </div>
            </div>
            <div
              className="w-1 h-7 rounded-full"
              style={{ backgroundColor: m.accent }}
            />
          </div>
        ))}
      </div>

      {/* 3. Main Content Split: Left (5 Cols) 4-Stage Tender Flow & SI Consortium | Right (7 Cols) Visual 3D + Live Bake-off & Competitor Displacement */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 4-Stage Bidding Flow & Tier-1 SI Consortium */}
        <div className="col-span-5 flex flex-col justify-between space-y-2 pr-1">
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-3.5 bg-blue-600 rounded-xs" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                4 Tahapan Memenangkan Tender Bank
              </span>
            </div>
            <span className="text-[10px] font-mono font-semibold text-blue-600">
              End-to-End Playbook
            </span>
          </div>

          {/* 4 Stages Detailed Grid (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
            {stages.map((st, idx) => (
              <div
                key={st.stageNumber}
                onMouseEnter={() => setActiveStageIndex(idx)}
                className={\`p-2 rounded-lg border transition-all text-left flex flex-col justify-between \${
                  activeStageIndex === idx
                    ? 'border-blue-400 bg-blue-50/30 shadow-xs'
                    : 'border-slate-100 bg-slate-50/40 hover:bg-white'
                }\`}
              >
                <div>
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] font-black text-blue-600">
                        {st.stageNumber}
                      </span>
                      <span className="text-[10.5px] font-bold text-slate-900 leading-tight">
                        {st.title}
                      </span>
                    </div>
                    <span className="text-[8.5px] font-mono font-bold text-slate-400">
                      {st.stageCode}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="bg-white p-1 border border-slate-100">
                      <span className="text-[7.5px] uppercase font-bold text-slate-400 block">
                        Taktik Diskualifikasi:
                      </span>
                      <p className="text-[9.5px] text-slate-800 font-semibold leading-tight">
                        {st.disqualificationTactic}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100 mt-1 flex items-center justify-between text-[8.5px]">
                  <span className="text-blue-700 font-bold truncate">
                    ✓ {st.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tier-1 Local SI Consortium Bar (TKDN Strategy) */}
          <div className="p-2 rounded-lg bg-slate-50/60 border border-slate-100 shrink-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">
                  Konsorsium Kemitraan SI Lokal (TKDN 100%)
                </span>
              </div>
              <span className="text-[9px] font-mono font-semibold text-emerald-600">
                Level 1-2 SLA
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[9px]">
              {consortiumPartners.map((partner, pIdx) => (
                <div key={pIdx} className="bg-white p-1 border border-slate-100 border-l-2 border-l-blue-500">
                  <div className="font-bold text-slate-900 leading-tight">
                    {partner.name}
                  </div>
                  <div className="text-[8px] text-slate-500 truncate leading-tight">
                    {partner.coverage}
                  </div>
                  <div className="text-[8px] text-emerald-700 font-semibold mt-0.5">
                    {partner.tkdnContribution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Span 7): 3D Visual Arena + Live Bake-off & Competitor Displacement */}
        <div className="col-span-7 flex flex-col justify-between space-y-2 border-l border-slate-100 pl-3">
          {/* Main 3D Visual Arena Component */}
          <div className="h-44 border border-slate-100 p-2 bg-slate-50/40 shrink-0">
            <Visual3D activeStage={activeStageIndex} />
          </div>

          {/* Live POC Bake-Off & Competitor Displacement Side-by-Side Grid */}
          <div className="grid grid-cols-12 gap-2 flex-1 min-h-0">
            {/* Left 6 cols: Live POC Bake-Off Benchmark Table */}
            <div className="col-span-6 p-2 bg-emerald-50/20 border border-emerald-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-emerald-100/60">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-600" />
                    POC Live Bake-Off (10k+ TPS)
                  </span>
                  <span className="text-[8px] font-mono text-emerald-700 font-bold">Stress Validated</span>
                </div>

                <div className="space-y-1">
                  {bakeOffMetrics.map((bm, bIdx) => (
                    <div key={bIdx} className="grid grid-cols-12 items-center text-[9px] py-0.5 border-b border-emerald-100/40 last:border-0">
                      <span className="col-span-4 font-semibold text-slate-700 truncate">{bm.metric}</span>
                      <span className="col-span-4 font-mono font-bold text-blue-700">{bm.way4Value}</span>
                      <span className="col-span-4 font-mono font-semibold text-emerald-700 text-right truncate">{bm.advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-1 border-t border-emerald-100 text-[8.5px] text-emerald-900 font-semibold flex items-center justify-between">
                <span>Hasil Pengujian:</span>
                <span className="text-emerald-700 font-bold">Unggul 4.2x Throughput</span>
              </div>
            </div>

            {/* Right 6 cols: Factual Competitor Displacement Table */}
            <div className="col-span-6 p-2 bg-slate-50/50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                    <Scale className="w-3 h-3 text-blue-600" />
                    Displacement Pesaing Bank
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 font-bold">Zero-Legacy</span>
                </div>

                <div className="space-y-1">
                  {competitors.map((comp, cIdx) => (
                    <div key={cIdx} className="p-1 bg-white border border-slate-100 text-[9px] flex items-center justify-between">
                      <span className="font-bold text-slate-800">{comp.competitor}</span>
                      <span className="font-semibold text-red-600 text-[8.5px]">{comp.outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-1 border-t border-slate-100 text-[8.5px] text-slate-600 flex items-center justify-between">
                <span className="font-medium text-slate-500">Strategi Tender:</span>
                <span className="text-blue-700 font-bold">Pre-RFP Disqualification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Takeaway Strip (Strictly Zero Badge) */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Pengondisian spesifikasi teknis RFI & klausul cloud-native sejak awal mendiskualifikasi switch monolitik pesaing sebelum lelang formal dibuka.
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-blue-700">
          <span>85% Historical Tender Win-Rate</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Slide16;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/16/index.tsx'), slide16IndexContent, 'utf8');
console.log('[OK] Written src/slide/16/index.tsx');

console.log('==> Revisualization Complete for Slide 15 and Slide 16!');
