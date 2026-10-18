const fs = require('fs');
const path = require('path');

console.log('==> Starting Revisualization Script for Slide 17 and Slide 18...');

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
// 1. GENERATE LOTTIE JSON FOR SLIDE 17: 3D Isometric Revenue Block Vault
// ============================================================================
function generateLottieSlide17() {
  const blue = hexToRgba('#1a73e8');
  const green = hexToRgba('#34a853');
  const amber = hexToRgba('#fbbc04');
  const coral = hexToRgba('#ea4335');
  const white = [1, 1, 1, 1];

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 520,
    h: 220,
    nm: "Slide 17 - 3D Revenue Block Vault & ARR Ring",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Central Compounding ARR Kinetic Ring (20% Recurring)
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Compounding ARR Ring",
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
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 50, 100], e: [110, 55, 100] },
              { t: 90, s: [110, 55, 100], e: [100, 50, 100] },
              { t: 180, s: [100, 50, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "ARR Ring Ellipse",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [170, 85] }
          },
          {
            ty: "st",
            nm: "Stroke Green",
            c: { a: 0, k: green },
            o: { a: 0, k: 85 },
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
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      },
      // Layer 2: 4 Tiered Modular Vault Blocks (Lisensi 50%, Services 25%, AMC 20%, TPS 5%)
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "4 Tiered Vault Blocks",
        sr: 1,
        ks: {
          o: { a: 0, k: 95 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 100, 100], e: [105, 105, 100] },
              { t: 90, s: [105, 105, 100], e: [100, 100, 100] },
              { t: 180, s: [100, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          // Block 1: License 50% (Blue)
          {
            ty: "gr",
            nm: "License Block",
            it: [
              {
                ty: "rc",
                nm: "Rect 50%",
                p: { a: 0, k: [-150, 0] },
                s: { a: 0, k: [38, 38] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Blue",
                c: { a: 0, k: blue },
                o: { a: 0, k: 90 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
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
          },
          // Block 2: Services 25% (Amber)
          {
            ty: "gr",
            nm: "Services Block",
            it: [
              {
                ty: "rc",
                nm: "Rect 25%",
                p: { a: 0, k: [-50, 0] },
                s: { a: 0, k: [32, 32] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Amber",
                c: { a: 0, k: amber },
                o: { a: 0, k: 90 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
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
          },
          // Block 3: AMC 20% (Green)
          {
            ty: "gr",
            nm: "AMC Block",
            it: [
              {
                ty: "rc",
                nm: "Rect 20%",
                p: { a: 0, k: [50, 0] },
                s: { a: 0, k: [30, 30] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Green",
                c: { a: 0, k: green },
                o: { a: 0, k: 90 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
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
          },
          // Block 4: TPS Tiering 5% (Coral)
          {
            ty: "gr",
            nm: "TPS Block",
            it: [
              {
                ty: "rc",
                nm: "Rect 5%",
                p: { a: 0, k: [150, 0] },
                s: { a: 0, k: [24, 24] },
                r: { a: 0, k: 45 }
              },
              {
                ty: "fl",
                nm: "Fill Coral",
                c: { a: 0, k: coral },
                o: { a: 0, k: 90 }
              },
              {
                ty: "st",
                nm: "Stroke White",
                c: { a: 0, k: white },
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
      }
    ]
  };
}

// ============================================================================
// 2. GENERATE LOTTIE JSON FOR SLIDE 18: 3D Break-Even Fulcrum & Payback Trajectory
// ============================================================================
function generateLottieSlide18() {
  const green = hexToRgba('#34a853');
  const blue = hexToRgba('#1a73e8');
  const coral = hexToRgba('#ea4335');
  const amber = hexToRgba('#fbbc04');
  const white = [1, 1, 1, 1];

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 520,
    h: 220,
    nm: "Slide 18 - 3D Break-Even Fulcrum & Payback",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Month 18 Pivoting Center Green Fulcrum Wave
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Month 18 Fulcrum Pulse",
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
              { t: 0, s: [40, 20, 100], e: [220, 110, 100] },
              { t: 180, s: [220, 110, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Pulse Oval",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [120, 60] }
          },
          {
            ty: "st",
            nm: "Stroke Green",
            c: { a: 0, k: green },
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
      // Layer 2: 3D Tilting Balance Lever (Capex -> ROI Profit Coins)
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "3D Tilted Lever Beam",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [-6], e: [-4] },
              { t: 90, s: [-4], e: [-6] },
              { t: 180, s: [-6] }
            ]
          },
          p: { a: 0, k: [260, 110, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          // Steel Balance Beam
          {
            ty: "gr",
            nm: "Balance Bar",
            it: [
              {
                ty: "rc",
                nm: "Beam Rect",
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [320, 10] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                nm: "Fill Steel",
                c: { a: 0, k: blue },
                o: { a: 0, k: 80 }
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
          // Left Pan: Initial Capex (Red)
          {
            ty: "gr",
            nm: "Left Pan Capex",
            it: [
              {
                ty: "rc",
                nm: "Weight Rect",
                p: { a: 0, k: [-150, 15] },
                s: { a: 0, k: [28, 20] },
                r: { a: 0, k: 0 }
              },
              {
                ty: "fl",
                nm: "Fill Red",
                c: { a: 0, k: coral },
                o: { a: 0, k: 85 }
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
          // Right Pan: 340% ROI Net Profit (Green / Gold Coins)
          {
            ty: "gr",
            nm: "Right Pan Profit",
            it: [
              {
                ty: "el",
                nm: "Coin 1",
                p: { a: 0, k: [150, -15] },
                s: { a: 0, k: [26, 26] }
              },
              {
                ty: "fl",
                nm: "Fill Gold",
                c: { a: 0, k: amber },
                o: { a: 0, k: 95 }
              },
              {
                ty: "st",
                nm: "Stroke Green",
                c: { a: 0, k: green },
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
      }
    ]
  };
}

// Write Lottie JSON files
const lottie17 = JSON.stringify(generateLottieSlide17(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/17/lottie.json'), lottie17, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-17.json'), lottie17, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-17.json'), lottie17, 'utf8');
console.log('[OK] Generated Slide 17 Lottie JSON files');

const lottie18 = JSON.stringify(generateLottieSlide18(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/18/lottie.json'), lottie18, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-18.json'), lottie18, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-18.json'), lottie18, 'utf8');
console.log('[OK] Generated Slide 18 Lottie JSON files');

// ============================================================================
// 3. WRITE SLIDE 17: data.ts (Ultra-Minim Teks, Factual 4-Pillar Commercial)
// ============================================================================
const slide17DataContent = `export interface PricingPillar {
  id: string;
  pillarNumber: string;
  name: string;
  feeType: string;
  sharePercentage: number;
  valueEstIdr: string;
  color: string;
  accentBg: string;
  borderColor: string;
  scopeDeliverable: string;
  revenueNature: 'One-Time Capex' | 'Milestone Services' | 'Recurring ARR' | 'Elastic Upsell';
  slaTerms: string;
}

export interface CommercialOption {
  id: string;
  category: string;
  targetClient: string;
  pricingStructure: string;
  openwayAdvantage: string;
  clientBenefit: string;
  color: string;
}

export interface TpsTier {
  range: string;
  monthlyFee: string;
  overageRate: string;
  supportLevel: string;
  activeTarget: string;
}

export interface FiveYearProjectionYear {
  year: string;
  newLicense: number;
  services: number;
  amcRecurring: number;
  tpsUpsell: number;
  totalAnnual: number;
  cumulativeValue: number;
}

export interface Slide17SummaryMetric {
  label: string;
  value: string;
  sub: string;
  accent: string;
}

export const PRICING_PILLARS: PricingPillar[] = [
  {
    id: 'core-license',
    pillarNumber: '01',
    name: 'Software Core License',
    feeType: 'Perpetual / RTU',
    sharePercentage: 50,
    valueEstIdr: 'Rp 15.0 M',
    color: '#1a73e8',
    accentBg: '#e8f0fe',
    borderColor: '#bfdbfe',
    scopeDeliverable: 'Issuing, Acquiring, Switch, API SNAP BI',
    revenueNature: 'One-Time Capex',
    slaTerms: 'Enterprise Perpetual / RTU'
  },
  {
    id: 'prof-services',
    pillarNumber: '02',
    name: 'Professional Services',
    feeType: 'Milestone Delivery',
    sharePercentage: 25,
    valueEstIdr: 'Rp 7.5 M',
    color: '#fbbc04',
    accentBg: '#fef7e0',
    borderColor: '#fde68a',
    scopeDeliverable: 'SI Konsorsium Lokal (TKDN 100%), PMO, UAT',
    revenueNature: 'Milestone Services',
    slaTerms: 'Sign-off BAST Milestone'
  },
  {
    id: 'recurring-amc',
    pillarNumber: '03',
    name: 'Annual Maintenance (AMC)',
    feeType: '20% Guaranteed ARR',
    sharePercentage: 20,
    valueEstIdr: 'Rp 3.0 M/thn',
    color: '#34a853',
    accentBg: '#e6f4ea',
    borderColor: '#bbf7d0',
    scopeDeliverable: 'Support 24/7 Level 3, update regulasi BI/OJK',
    revenueNature: 'Recurring ARR',
    slaTerms: 'TAM Dedicated & Resolusi &lt; 15m'
  },
  {
    id: 'tps-expansion',
    pillarNumber: '04',
    name: 'Capacity TPS Expansion',
    feeType: 'Elastic Scaling Tier',
    sharePercentage: 5,
    valueEstIdr: 'Rp 1.5 M',
    color: '#ea4335',
    accentBg: '#fce8e6',
    borderColor: '#fca5a5',
    scopeDeliverable: 'Lisensi ekspansi throughput (1k ke 10k+ TPS)',
    revenueNature: 'Elastic Upsell',
    slaTerms: 'Pay-as-you-grow Tiering'
  }
];

export const COMMERCIAL_OPTIONS: CommercialOption[] = [
  {
    id: 'perpetual',
    category: 'Bank KBMI 3-4 (Enterprise)',
    targetClient: 'Bank Mandiri, BRI, BCA, BNI',
    pricingStructure: 'Perpetual Core License + 20% AMC',
    openwayAdvantage: 'High Day-1 Cashflow & Predictable ARR',
    clientBenefit: 'Kepemilikan Aset & Capex Efisien',
    color: '#1a73e8'
  },
  {
    id: 'saas-digital',
    category: 'Bank Digital & FinTech',
    targetClient: 'Jago, Allo Bank, SeaBank, FinTech',
    pricingStructure: 'Subscription SaaS Berbasis Kartu Aktif',
    openwayAdvantage: 'Compounding Monthly Recurring Revenue',
    clientBenefit: 'Zero Upfront Capex & Elastic Scaling',
    color: '#34a853'
  },
  {
    id: 'hybrid-switch',
    category: 'National Switching (GPN)',
    targetClient: 'Artajasa, Rintis (Prima), Alto',
    pricingStructure: 'Hybrid Base License + Per-Transaction Fee',
    openwayAdvantage: 'Volume-Driven Exponential Upside',
    clientBenefit: 'Alignment Langsung Volume Transaksi',
    color: '#fbbc04'
  }
];

export const TPS_TIERS: TpsTier[] = [
  {
    range: '0 - 1,000 TPS',
    monthlyFee: 'Included in Base',
    overageRate: 'Rp 0',
    supportLevel: 'SLA 99.95%',
    activeTarget: 'Phase 1 Go-Live'
  },
  {
    range: '1,001 - 5,000 TPS',
    monthlyFee: '+Rp 25 Juta/bln',
    overageRate: 'Rp 12/tx',
    supportLevel: 'SLA 99.99%',
    activeTarget: 'Ramp-up Bulan 6-12'
  },
  {
    range: '5,001 - 10,000+ TPS',
    monthlyFee: '+Rp 65 Juta/bln',
    overageRate: 'Rp 8/tx',
    supportLevel: 'SLA 99.999%',
    activeTarget: 'Scale-out Enterprise'
  }
];

export const FIVE_YEAR_PROJECTION: FiveYearProjectionYear[] = [
  { year: 'Tahun 1', newLicense: 15.0, services: 7.5, amcRecurring: 0.0, tpsUpsell: 0.0, totalAnnual: 22.5, cumulativeValue: 22.5 },
  { year: 'Tahun 2', newLicense: 2.0, services: 1.5, amcRecurring: 3.0, tpsUpsell: 0.5, totalAnnual: 7.0, cumulativeValue: 29.5 },
  { year: 'Tahun 3', newLicense: 3.0, services: 2.0, amcRecurring: 3.4, tpsUpsell: 0.8, totalAnnual: 9.2, cumulativeValue: 38.7 },
  { year: 'Tahun 4', newLicense: 2.5, services: 1.5, amcRecurring: 4.0, tpsUpsell: 1.2, totalAnnual: 9.2, cumulativeValue: 47.9 },
  { year: 'Tahun 5', newLicense: 3.5, services: 2.0, amcRecurring: 4.5, tpsUpsell: 1.3, totalAnnual: 11.3, cumulativeValue: 59.2 }
];

export const SLIDE17_SUMMARY_METRICS: Slide17SummaryMetric[] = [
  {
    label: 'Standard Deal TCV',
    value: 'Rp 30.0 M',
    sub: 'Core + Services + AMC',
    accent: '#1a73e8'
  },
  {
    label: 'Guaranteed ARR',
    value: '20% AMC',
    sub: 'Rp 3.0 M/thn Recurring',
    accent: '#34a853'
  },
  {
    label: '5-Year Account LTV',
    value: 'Rp 59.2 M',
    sub: 'Compounding Expansion',
    accent: '#1a73e8'
  },
  {
    label: 'Elastic Scaling',
    value: '10k+ TPS',
    sub: 'Pay-As-You-Grow Model',
    accent: '#137333'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/17/data.ts'), slide17DataContent, 'utf8');
console.log('[OK] Written src/slide/17/data.ts');

// ============================================================================
// 4. WRITE SLIDE 17: container.tsx
// ============================================================================
const slide17ContainerContent = `import { useState } from 'react';
import {
  PRICING_PILLARS,
  COMMERCIAL_OPTIONS,
  TPS_TIERS,
  FIVE_YEAR_PROJECTION,
  SLIDE17_SUMMARY_METRICS,
  PricingPillar,
  CommercialOption,
  TpsTier,
  FiveYearProjectionYear,
  Slide17SummaryMetric
} from './data';

export interface Slide17Controller {
  pillars: PricingPillar[];
  commercialOptions: CommercialOption[];
  tpsTiers: TpsTier[];
  fiveYearProjection: FiveYearProjectionYear[];
  summaryMetrics: Slide17SummaryMetric[];
  activePillarIndex: number;
  setActivePillarIndex: (index: number) => void;
  activeModelIndex: number;
  setActiveModelIndex: (index: number) => void;
  selectedPillar: PricingPillar;
  totalInitialContractValue: string;
}

export function useSlide17Container(): Slide17Controller {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);

  const selectedPillar = PRICING_PILLARS[activePillarIndex] || PRICING_PILLARS[0];

  return {
    pillars: PRICING_PILLARS,
    commercialOptions: COMMERCIAL_OPTIONS,
    tpsTiers: TPS_TIERS,
    fiveYearProjection: FIVE_YEAR_PROJECTION,
    summaryMetrics: SLIDE17_SUMMARY_METRICS,
    activePillarIndex,
    setActivePillarIndex,
    activeModelIndex,
    setActiveModelIndex,
    selectedPillar,
    totalInitialContractValue: 'Rp 30.0 M'
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/17/container.tsx'), slide17ContainerContent, 'utf8');
console.log('[OK] Written src/slide/17/container.tsx');

// ============================================================================
// 5. WRITE SLIDE 17: visual-3D.tsx
// ============================================================================
const slide17Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { PRICING_PILLARS } from './data';
import { DollarSign, Repeat, Zap, ShieldCheck } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  activePillarIndex?: number;
  onPillarSelect?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  activePillarIndex = 0,
  onPillarSelect
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Telemetry Top Bar (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D Isometric Revenue Block Vault & Compounding ARR
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
          <span className="flex items-center gap-1 text-blue-600 font-bold">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Rp 30B Baseline</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <Repeat className="w-3.5 h-3.5" />
            <span>20% AMC ARR</span>
          </span>
        </div>
      </div>

      {/* 3D Isometric Revenue Vault Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Isometric 4 Revenue Blocks SVG Overlay */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible select-none"
          viewBox="0 0 520 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topFaceBlue17" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <linearGradient id="topFaceAmber17" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="topFaceGreen17" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d1fae5" />
            </linearGradient>
            <linearGradient id="topFaceCoral17" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fee2e2" />
            </linearGradient>
          </defs>

          {/* Coordinate Isometric Axis Grid */}
          <g opacity="0.35">
            <line x1="20" y1="130" x2="500" y2="130" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
          </g>

          {/* Pillar 01: Core License (50% / Rp 15.0M) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onPillarSelect?.(0)}
            transform={activePillarIndex === 0 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="80" cy="125" rx="36" ry="12" fill="#94a3b8" opacity="0.2" />
            <polygon points="80,50 115,68 80,86 45,68" fill="url(#topFaceBlue17)" stroke="#93c5fd" strokeWidth="1.2" />
            <polygon points="45,68 80,86 80,120 45,102" fill="#2563eb" />
            <polygon points="80,86 115,68 115,102 80,120" fill="#1d4ed8" />
            <text x="80" y="72" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="900" fontFamily="Inter">50%</text>
            <text x="80" y="142" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="800" fontFamily="Inter">Lisensi Core</text>
            <text x="80" y="153" textAnchor="middle" fill="#64748b" fontSize="8" className="font-mono" fontFamily="Inter">Rp 15.0 M</text>
          </g>

          {/* Flow Connector 1 to 2 */}
          <path d="M 115,85 C 145,75 160,85 175,82" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />

          {/* Pillar 02: Professional Services (25% / Rp 7.5M) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onPillarSelect?.(1)}
            transform={activePillarIndex === 1 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="205" cy="125" rx="32" ry="11" fill="#94a3b8" opacity="0.2" />
            <polygon points="205,62 236,78 205,94 174,78" fill="url(#topFaceAmber17)" stroke="#fde68a" strokeWidth="1.2" />
            <polygon points="174,78 205,94 205,120 174,104" fill="#f59e0b" />
            <polygon points="205,94 236,78 236,104 205,120" fill="#d97706" />
            <text x="205" y="82" textAnchor="middle" fill="#92400e" fontSize="10.5" fontWeight="900" fontFamily="Inter">25%</text>
            <text x="205" y="142" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="800" fontFamily="Inter">Services (SI)</text>
            <text x="205" y="153" textAnchor="middle" fill="#64748b" fontSize="8" className="font-mono" fontFamily="Inter">Rp 7.5 M</text>
          </g>

          {/* Flow Connector 2 to 3 */}
          <path d="M 236,88 C 265,80 285,85 305,82" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />

          {/* Pillar 03: AMC 20% Recurring ARR (Green) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onPillarSelect?.(2)}
            transform={activePillarIndex === 2 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="335" cy="125" rx="32" ry="11" fill="#94a3b8" opacity="0.2" />
            <ellipse cx="335" cy="82" rx="42" ry="16" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" className="animate-spin" />
            <circle cx="377" cy="82" r="3.5" fill="#10b981" className="animate-ping" />
            <polygon points="335,66 364,81 335,96 306,81" fill="url(#topFaceGreen17)" stroke="#a7f3d0" strokeWidth="1.2" />
            <polygon points="306,81 335,96 335,120 306,105" fill="#10b981" />
            <polygon points="335,96 364,81 364,105 335,120" fill="#059669" />
            <text x="335" y="85" textAnchor="middle" fill="#065f46" fontSize="10.5" fontWeight="900" fontFamily="Inter">20%</text>
            <text x="335" y="142" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="800" fontFamily="Inter">AMC 20% ARR</text>
            <text x="335" y="153" textAnchor="middle" fill="#059669" fontSize="8" className="font-mono" fontFamily="Inter">Rp 3.0 M/thn</text>
          </g>

          {/* Flow Connector 3 to 4 */}
          <path d="M 364,90 C 395,85 410,88 425,86" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />

          {/* Pillar 04: Capacity TPS Tiering (5%) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onPillarSelect?.(3)}
            transform={activePillarIndex === 3 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="455" cy="125" rx="28" ry="10" fill="#94a3b8" opacity="0.2" />
            <polygon points="455,74 480,87 455,100 430,87" fill="url(#topFaceCoral17)" stroke="#fecaca" strokeWidth="1.2" />
            <polygon points="430,87 455,100 455,120 430,107" fill="#ef4444" />
            <polygon points="455,100 480,87 480,107 455,120" fill="#dc2626" />
            <text x="455" y="90" textAnchor="middle" fill="#991b1b" fontSize="9.5" fontWeight="900" fontFamily="Inter">5%</text>
            <text x="455" y="142" textAnchor="middle" fill="#b91c1c" fontSize="9" fontWeight="800" fontFamily="Inter">TPS Tiering</text>
            <text x="455" y="153" textAnchor="middle" fill="#64748b" fontSize="8" className="font-mono" fontFamily="Inter">Rp 1.5 M</text>
          </g>
        </svg>
      </div>

      {/* 4 Pillars Bottom Telemetry Footnote (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">Lisensi Core (50%)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 15.0M One-Time RTU</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-amber-700">Services (25%)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 7.5M Milestone BAST</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-emerald-700">AMC 20% (20%)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 3.0M/thn Recurring ARR</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-red-700">TPS Tiering (5%)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 1.5M Elastic Scaling</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/17/visual-3D.tsx'), slide17Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/17/visual-3D.tsx');

// ============================================================================
// 6. WRITE SLIDE 17: index.tsx
// ============================================================================
const slide17IndexContent = `import React from 'react';
import { useSlide17Container } from './container';
import { Visual3D } from './visual-3D';
import {
  DollarSign,
  Repeat,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers
} from 'lucide-react';

export const Slide17: React.FC = () => {
  const {
    pillars,
    commercialOptions,
    tpsTiers,
    fiveYearProjection,
    summaryMetrics,
    activePillarIndex,
    setActivePillarIndex,
    activeModelIndex,
    setActiveModelIndex,
    totalInitialContractValue
  } = useSlide17Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Top Meta Line (Strictly Flat Canvas, Zero Badge) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            Commercial Packaging, Licensing & Revenue Architecture
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 17: 4-Pillar Deal Structuring, 20% AMC Protection & Compounding ARR
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900 font-mono">{totalInitialContractValue}</span>
            <span className="text-slate-400">Baseline TCV</span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1.5">
            <Repeat className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 font-mono">20% AMC</span>
            <span className="text-slate-400">Guaranteed ARR</span>
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

      {/* 3. Main Content Split: Left (5 Cols) 3D Revenue Vault & Pillars | Right (7 Cols) 5-Year ARR Compounding & Models */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 3D Visual Vault Component & 4 Pillars Breakdown */}
        <div className="col-span-5 flex flex-col justify-between space-y-2 pr-1">
          {/* Main 3D Visual Vault */}
          <div className="h-44 border border-slate-100 p-2 bg-slate-50/40 shrink-0">
            <Visual3D
              activePillarIndex={activePillarIndex}
              onPillarSelect={setActivePillarIndex}
            />
          </div>

          {/* 4 Pillars Breakdown Grid (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
            {pillars.map((p, idx) => (
              <div
                key={p.id}
                onMouseEnter={() => setActivePillarIndex(idx)}
                className={\`p-2 rounded-lg border transition-all text-left flex flex-col justify-between \${
                  activePillarIndex === idx
                    ? 'border-blue-400 bg-white shadow-xs'
                    : 'border-slate-100 bg-slate-50/50 hover:bg-white'
                }\`}
                style={{
                  borderTopWidth: '3px',
                  borderTopColor: p.color
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold font-mono text-slate-400">
                      Pilar {p.pillarNumber}
                    </span>
                    <span
                      className="text-[10px] font-black font-inter tabular-nums"
                      style={{ color: p.color }}
                    >
                      {p.sharePercentage}%
                    </span>
                  </div>
                  <div className="text-[10.5px] font-bold text-slate-900 leading-tight">
                    {p.name}
                  </div>
                  <div className="text-[9px] font-mono font-bold text-slate-700 mt-0.5">
                    {p.valueEstIdr}
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100 mt-1 text-[8.5px] text-slate-600 truncate font-medium">
                  {p.scopeDeliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Span 7): 5-Year ARR Compounding Trajectory & Commercial Models */}
        <div className="col-span-7 flex flex-col justify-between space-y-2 border-l border-slate-100 pl-3">
          {/* Section 1: 5-Year LTV Compounding Projection Table */}
          <div className="p-2 bg-slate-50/60 border border-slate-100 flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-blue-600" />
                Proyeksi LTV 5-Tahun Akun Bank (Compounding ARR Rp 59.2M)
              </span>
              <span className="text-[9px] font-mono text-emerald-700 font-bold">+163% Growth</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 text-center text-[9px]">
              {fiveYearProjection.map((yr, yIdx) => (
                <div key={yIdx} className="bg-white p-1.5 border border-slate-100 flex flex-col justify-between">
                  <div className="font-bold text-slate-500 text-[8px] uppercase">{yr.year}</div>
                  <div className="text-[11px] font-black font-inter tabular-nums text-blue-700 my-0.5">
                    Rp {yr.cumulativeValue.toFixed(1)}M
                  </div>
                  <div className="text-[7.5px] text-emerald-600 font-semibold font-mono">
                    +{yr.totalAnnual.toFixed(1)}M /thn
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: 3 Commercial Fit Models (Perpetual, SaaS, Hybrid) */}
          <div className="space-y-1.5 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-0.5 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-600" />
                3 Opsi Struktur Komersial Klien FSI
              </span>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold">Client Tailored</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {commercialOptions.map((opt, oIdx) => (
                <div
                  key={opt.id}
                  onMouseEnter={() => setActiveModelIndex(oIdx)}
                  className={\`p-2 border transition-all flex flex-col justify-between text-[9px] \${
                    activeModelIndex === oIdx
                      ? 'border-blue-400 bg-blue-50/20'
                      : 'border-slate-100 bg-white'
                  }\`}
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: opt.color
                  }}
                >
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">
                      {opt.category}
                    </div>
                    <div className="text-[8px] text-slate-400 font-medium truncate mt-0.5">
                      {opt.targetClient}
                    </div>
                    <div className="font-semibold text-slate-800 mt-1 leading-tight text-[8.5px]">
                      {opt.pricingStructure}
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-100 mt-1 text-[8px] text-emerald-700 font-bold truncate">
                    ✓ {opt.openwayAdvantage}
                  </div>
                </div>
              ))}
            </div>

            {/* Elastic TPS Tiering Strip */}
            <div className="p-1.5 bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-between text-[9.5px]">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-slate-800">
                  <strong className="font-semibold text-emerald-950">Elastic TPS Tiering: </strong>
                  1,000 TPS baseline included. Scaling ke 5k-10k+ TPS memicu add-on lisensi otomatis tanpa re-tender.
                </span>
              </div>
              <span className="text-[10px] font-bold font-inter tabular-nums text-emerald-700 shrink-0 pl-2">
                Pay-As-You-Grow
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Strategic Executive Takeaway */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Kombinasi lisensi Day-1 yang substansial (Rp 15M) dan garansi AMC 20% mengamankan pendapatan berulang (<strong className="text-slate-900 font-semibold">Rp 3.0M ARR</strong>) yang tahan terhadap fluktuasi Capex tahunan.
          </span>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Model Lisensi:</span>
          <span className="text-blue-700 font-black text-xs tabular-nums">
            Compounding ARR Model
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide17;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/17/index.tsx'), slide17IndexContent, 'utf8');
console.log('[OK] Written src/slide/17/index.tsx');

// ============================================================================
// 7. WRITE SLIDE 18: data.ts (Ultra-Minim Teks, Factual 5-Year TCO & Break-Even)
// ============================================================================
const slide18DataContent = `export interface TcoComparison {
  id: string;
  category: string;
  legacySwitch: string;
  legacyCostNum: number;
  way4Platform: string;
  way4CostNum: number;
  savingsPercentage: string;
  savingsAmount: string;
  isSaving: boolean;
  driverDetail: string;
}

export interface CashflowPoint {
  month: number;
  label: string;
  quarter: string;
  cumulativeNetIdr: number;
  way4CumulativeCost: number;
  legacyCumulativeCost: number;
  milestoneTitle: string;
  phase: 'Capex Deployment' | 'Break-Even Inflection' | 'Compounding Net Gain';
}

export interface FinancialMetric {
  label: string;
  value: string;
  sublabel: string;
  accentColor: string;
}

export const TCO_COMPARISONS: TcoComparison[] = [
  {
    id: 'hardware',
    category: 'Hardware & Infrastructure',
    legacySwitch: 'Mainframe HP NonStop / IBM',
    legacyCostNum: 10.0,
    way4Platform: 'Private Cloud Kubernetes',
    way4CostNum: 4.0,
    savingsPercentage: '-60%',
    savingsAmount: 'Hemat Rp 6.0 M',
    isSaving: true,
    driverDetail: 'Eliminasi sewa mainframe proprietary & tier-4 datacenter'
  },
  {
    id: 'licensing',
    category: 'Software Licensing',
    legacySwitch: 'Lisensi modul per-core & add-on',
    legacyCostNum: 14.0,
    way4Platform: 'Unified Platform all-in-one',
    way4CostNum: 9.0,
    savingsPercentage: '-35%',
    savingsAmount: 'Hemat Rp 5.0 M',
    isSaving: true,
    driverDetail: 'Mencakup Issuing, Acquiring, Switch & SNAP BI'
  },
  {
    id: 'downtime',
    category: 'Downtime & SLA Losses',
    legacySwitch: 'Bottleneck peak & denda BI',
    legacyCostNum: 8.0,
    way4Platform: 'SLA 99.999% Zero-Downtime',
    way4CostNum: 2.0,
    savingsPercentage: '-75%',
    savingsAmount: 'Hemat Rp 6.0 M',
    isSaving: true,
    driverDetail: 'Mencegah kegagalan transaksi Harbolnas & THR payroll'
  },
  {
    id: 'changes',
    category: 'Change Requests & Agile',
    legacySwitch: 'Rilis 6-9 bulan per fitur',
    legacyCostNum: 6.0,
    way4Platform: 'No-code Rule Engine &lt; 2 minggu',
    way4CostNum: 7.0,
    savingsPercentage: '+16%',
    savingsAmount: '+Rp 1.0 M Ops',
    isSaving: false,
    driverDetail: 'Investasi mandiri mempercepat time-to-market fee income'
  }
];

export const CASHFLOW_TIMELINE: CashflowPoint[] = [
  {
    month: 0,
    label: 'Bulan 0',
    quarter: 'Q1',
    cumulativeNetIdr: -15.0,
    way4CumulativeCost: 15.0,
    legacyCumulativeCost: 3.5,
    milestoneTitle: 'Lisensi & Kick-off',
    phase: 'Capex Deployment'
  },
  {
    month: 6,
    label: 'Bulan 6',
    quarter: 'Q2',
    cumulativeNetIdr: -11.0,
    way4CumulativeCost: 18.0,
    legacyCumulativeCost: 7.0,
    milestoneTitle: 'UAT & Sandbox SNAP BI',
    phase: 'Capex Deployment'
  },
  {
    month: 12,
    label: 'Bulan 12',
    quarter: 'Q4',
    cumulativeNetIdr: -6.0,
    way4CumulativeCost: 19.5,
    legacyCumulativeCost: 13.5,
    milestoneTitle: 'Go-Live Pilot Transaksi',
    phase: 'Capex Deployment'
  },
  {
    month: 18,
    label: 'Bulan 18 ★',
    quarter: 'Y2 Q2',
    cumulativeNetIdr: 0.0,
    way4CumulativeCost: 20.0,
    legacyCumulativeCost: 20.0,
    milestoneTitle: 'Titik Impas (Break-Even)',
    phase: 'Break-Even Inflection'
  },
  {
    month: 24,
    label: 'Bulan 24',
    quarter: 'Y2 Q4',
    cumulativeNetIdr: 8.5,
    way4CumulativeCost: 20.5,
    legacyCumulativeCost: 29.0,
    milestoneTitle: 'Net Positive Cashflow',
    phase: 'Compounding Net Gain'
  },
  {
    month: 36,
    label: 'Bulan 36',
    quarter: 'Y3 Q4',
    cumulativeNetIdr: 26.0,
    way4CumulativeCost: 22.0,
    legacyCumulativeCost: 38.0,
    milestoneTitle: 'Cumulative Net ROI 340%',
    phase: 'Compounding Net Gain'
  }
];

export const FINANCIAL_METRICS: FinancialMetric[] = [
  {
    label: 'Break-Even Point',
    value: 'Bulan 18',
    sublabel: 'Rapid Capex Payback',
    accentColor: '#34a853'
  },
  {
    label: '5-Year Cumulative TCO',
    value: '-42%',
    sublabel: 'Hemat Rp 16.0 Milyar',
    accentColor: '#1a73e8'
  },
  {
    label: 'Year-3 Net ROI',
    value: '340%',
    sublabel: 'Compounding Return',
    accentColor: '#34a853'
  },
  {
    label: 'Total TCO 5-Tahun',
    value: 'Rp 22.0 M',
    sublabel: 'vs Legacy Rp 38.0 M',
    accentColor: '#137333'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/18/data.ts'), slide18DataContent, 'utf8');
console.log('[OK] Written src/slide/18/data.ts');

// ============================================================================
// 8. WRITE SLIDE 18: container.tsx
// ============================================================================
const slide18ContainerContent = `import { useState } from 'react';
import {
  TCO_COMPARISONS,
  CASHFLOW_TIMELINE,
  FINANCIAL_METRICS,
  TcoComparison,
  CashflowPoint,
  FinancialMetric
} from './data';

export interface Slide18Controller {
  comparisons: TcoComparison[];
  cashflowTimeline: CashflowPoint[];
  financialMetrics: FinancialMetric[];
  activeComparisonIndex: number;
  setActiveComparisonIndex: (index: number) => void;
  activeMonthIndex: number;
  setActiveMonthIndex: (index: number) => void;
  selectedCashflowPoint: CashflowPoint;
  breakEvenMonth: number;
}

export function useSlide18Container(): Slide18Controller {
  const [activeComparisonIndex, setActiveComparisonIndex] = useState<number>(0);
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(3); // Default Month 18

  const selectedCashflowPoint =
    CASHFLOW_TIMELINE[activeMonthIndex] || CASHFLOW_TIMELINE[3];

  return {
    comparisons: TCO_COMPARISONS,
    cashflowTimeline: CASHFLOW_TIMELINE,
    financialMetrics: FINANCIAL_METRICS,
    activeComparisonIndex,
    setActiveComparisonIndex,
    activeMonthIndex,
    setActiveMonthIndex,
    selectedCashflowPoint,
    breakEvenMonth: 18
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/18/container.tsx'), slide18ContainerContent, 'utf8');
console.log('[OK] Written src/slide/18/container.tsx');

// ============================================================================
// 9. WRITE SLIDE 18: visual-3D.tsx
// ============================================================================
const slide18Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { Clock, ArrowDownRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  activeMonth?: number;
  onSelectMonth?: (month: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  activeMonth = 18,
  onSelectMonth
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Telemetry Top Bar (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D Break-Even Fulcrum & Payback Trajectory
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Bulan 18 Impas</span>
          </span>
          <span className="flex items-center gap-1 text-blue-600 font-bold">
            <ArrowDownRight className="w-3.5 h-3.5" />
            <span>-42% TCO Hemat</span>
          </span>
        </div>
      </div>

      {/* 3D Lever & Fulcrum Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Lever Fulcrum SVG Overlay */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible select-none"
          viewBox="0 0 520 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldCoinGrad18" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
            <linearGradient id="greenPivotGrad18" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34a853" />
              <stop offset="100%" stopColor="#137333" />
            </linearGradient>
            <linearGradient id="steelBeamGrad18" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="45%" stopColor="#94a3b8" />
              <stop offset="55%" stopColor="#34a853" />
              <stop offset="100%" stopColor="#1a73e8" />
            </linearGradient>
          </defs>

          {/* Isometric Ground Base Shadow */}
          <ellipse cx="260" cy="145" rx="160" ry="14" fill="#94a3b8" opacity="0.18" />

          {/* 3D Center Fulcrum Base (Month 18 Pivot) */}
          <g transform="translate(0, 10)">
            <polygon points="260,80 295,130 225,130" fill="#64748b" />
            <polygon points="260,80 295,130 260,136 225,130" fill="#475569" />
            <circle cx="260" cy="76" r="10" fill="url(#greenPivotGrad18)" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="260" cy="76" r="18" fill="none" stroke="#34a853" strokeWidth="1.5" className="animate-ping" opacity="0.5" />
            <text x="260" y="152" textAnchor="middle" fill="#137333" fontSize="10" fontWeight="900" fontFamily="Inter">
              ★ BULAN 18: TITIK IMPAS (RP 0 NET)
            </text>
          </g>

          {/* 3D Tilted Balance Lever */}
          <g transform="translate(0, 8)">
            <polygon points="90,92 430,46 430,56 90,102" fill="url(#steelBeamGrad18)" />
            <line x1="90" y1="92" x2="430" y2="46" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />

            {/* Left Pan: Capex Awal (Red) */}
            <g transform="translate(90, 98)">
              <line x1="0" y1="0" x2="0" y2="18" stroke="#94a3b8" strokeWidth="1.5" />
              <ellipse cx="0" cy="20" rx="32" ry="9" fill="#f87171" stroke="#dc2626" strokeWidth="1" />
              <polygon points="0,8 16,16 0,24 -16,16" fill="#fee2e2" stroke="#fca5a5" />
              <polygon points="-16,16 0,24 0,30 -16,22" fill="#ef4444" />
              <polygon points="0,24 16,16 16,22 0,30" fill="#b91c1c" />
              <text x="0" y="40" textAnchor="middle" fill="#b91c1c" fontSize="8.5" fontWeight="800" fontFamily="Inter">Capex Awal</text>
              <text x="0" y="50" textAnchor="middle" fill="#64748b" fontSize="7.5" className="font-mono" fontFamily="Inter">-Rp 15.0M</text>
            </g>

            {/* Right Pan: Net Profit 340% ROI (Green / Gold Coins) */}
            <g transform="translate(430, 52)">
              <line x1="0" y1="0" x2="0" y2="18" stroke="#10b981" strokeWidth="1.5" />
              <ellipse cx="0" cy="20" rx="36" ry="10" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
              <ellipse cx="-10" cy="14" rx="10" ry="4.5" fill="url(#goldCoinGrad18)" stroke="#a16207" strokeWidth="0.8" />
              <ellipse cx="10" cy="14" rx="10" ry="4.5" fill="url(#goldCoinGrad18)" stroke="#a16207" strokeWidth="0.8" />
              <ellipse cx="0" cy="8" rx="11" ry="5" fill="url(#goldCoinGrad18)" stroke="#a16207" strokeWidth="0.8" />
              <text x="0" y="40" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="900" fontFamily="Inter">340% ROI Net</text>
              <text x="0" y="50" textAnchor="middle" fill="#059669" fontSize="7.5" className="font-mono" fontFamily="Inter">+Rp 26.0M</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Bottom Timeline Milestones (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-red-600">Bulan 0: Capex</div>
          <div className="text-[8px] text-slate-500 font-medium">-Rp 15.0M Kick-Off</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-amber-600">Bulan 12: Go-Live</div>
          <div className="text-[8px] text-slate-500 font-medium">-Rp 6.0M Ramp-Up</div>
        </div>
        <div className="p-1 bg-emerald-50 border border-emerald-200">
          <div className="text-[8.5px] font-bold text-emerald-700">Bulan 18: Impas ★</div>
          <div className="text-[8px] text-emerald-800 font-bold">Rp 0 Break-Even</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">Bulan 36: Laba</div>
          <div className="text-[8px] text-slate-500 font-medium">+Rp 26.0M 340% ROI</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/18/visual-3D.tsx'), slide18Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/18/visual-3D.tsx');

// ============================================================================
// 10. WRITE SLIDE 18: index.tsx
// ============================================================================
const slide18IndexContent = `import React from 'react';
import { useSlide18Container } from './container';
import { Visual3D } from './visual-3D';
import {
  Clock,
  ArrowDownRight,
  TrendingUp,
  CheckCircle2,
  Scale,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const Slide18: React.FC = () => {
  const {
    comparisons,
    cashflowTimeline,
    financialMetrics,
    activeComparisonIndex,
    setActiveComparisonIndex,
    activeMonthIndex,
    setActiveMonthIndex,
    selectedCashflowPoint,
    breakEvenMonth
  } = useSlide18Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Top Meta Line (Strictly Flat Canvas, Zero Badge) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            5-Year TCO & Payback Financial ROI Modeling
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 18: 5-Year Cumulative TCO Optimization & 18-Month Break-Even Analysis
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 font-mono">18 Bulan</span>
            <span className="text-slate-400">Titik Impas</span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1.5">
            <ArrowDownRight className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900 font-mono">-42% TCO</span>
            <span className="text-slate-400">Hemat Rp 16.0M</span>
          </div>
        </div>
      </div>

      {/* 2. Top Summary KPI Metrics Strip (Flat Canvas) */}
      <div className="grid grid-cols-4 gap-3 py-1.5 border-b border-slate-100 shrink-0">
        {financialMetrics.map((m, idx) => (
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
                style={{ color: m.accentColor }}
              >
                {m.value}
              </div>
              <div className="text-[9px] text-slate-500 font-medium">
                {m.sublabel}
              </div>
            </div>
            <div
              className="w-1 h-7 rounded-full"
              style={{ backgroundColor: m.accentColor }}
            />
          </div>
        ))}
      </div>

      {/* 3. Main Content Split: Left (5 Cols) 3D Fulcrum & Cashflow | Right (7 Cols) 4-Pillar TCO Comparison & Cumulative Bar */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 3D Visual Fulcrum & 36-Month Timeline */}
        <div className="col-span-5 flex flex-col justify-between space-y-2 pr-1">
          {/* Main 3D Fulcrum Balance */}
          <div className="h-44 border border-slate-100 p-2 bg-slate-50/40 shrink-0">
            <Visual3D activeMonth={breakEvenMonth} />
          </div>

          {/* 36-Month Cashflow Trajectory Steps (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="p-2 bg-slate-50/60 border border-slate-100 flex flex-col justify-between flex-1 min-h-0">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                Trajektori Arus Kas 36-Bulan
              </span>
              <span className="text-[8.5px] font-mono text-emerald-700 font-bold">18-Mo Payback</span>
            </div>

            <div className="space-y-1">
              {cashflowTimeline.map((cp, cIdx) => (
                <div
                  key={cIdx}
                  onMouseEnter={() => setActiveMonthIndex(cIdx)}
                  className={\`p-1.5 rounded border transition-all flex items-center justify-between text-[9px] \${
                    cp.month === breakEvenMonth
                      ? 'bg-emerald-50/80 border-emerald-300 font-bold'
                      : activeMonthIndex === cIdx
                      ? 'bg-white border-blue-300 shadow-xs'
                      : 'bg-white border-slate-100'
                  }\`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-500">{cp.label}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-800 font-medium truncate">{cp.milestoneTitle}</span>
                  </div>
                  <span
                    className={\`font-mono font-bold tabular-nums \${
                      cp.cumulativeNetIdr < 0
                        ? 'text-red-600'
                        : cp.cumulativeNetIdr === 0
                        ? 'text-emerald-700 font-black'
                        : 'text-emerald-600'
                    }\`}
                  >
                    {cp.cumulativeNetIdr > 0 ? \`+\${cp.cumulativeNetIdr.toFixed(1)}M\` : \`\${cp.cumulativeNetIdr.toFixed(1)}M\`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Span 7): 4-Pillar Factual TCO Comparison & Cumulative Bar */}
        <div className="col-span-7 flex flex-col justify-between space-y-2 border-l border-slate-100 pl-3">
          {/* Section 1: 5-Year Cumulative TCO Comparison Bar (Legacy vs WAY4) */}
          <div className="p-2 bg-slate-50/60 border border-slate-100 shrink-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <Scale className="w-3 h-3 text-blue-600" />
                Komparasi Total Biaya Kepemilikan (TCO 5-Tahun)
              </span>
              <span className="text-[9.5px] font-mono font-black text-emerald-700">Hemat Rp 16.0 M (-42%)</span>
            </div>

            <div className="space-y-1.5 text-[9.5px]">
              {/* Legacy Bar */}
              <div>
                <div className="flex items-center justify-between text-[8.5px] text-slate-600 mb-0.5">
                  <span className="font-semibold">Switch Legacy (ACI / FIS / Mainframe):</span>
                  <span className="font-mono font-bold text-red-600">Rp 38.0 M</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              {/* WAY4 Bar */}
              <div>
                <div className="flex items-center justify-between text-[8.5px] text-slate-600 mb-0.5">
                  <span className="font-semibold text-blue-700">WAY4 Digital Payment Platform:</span>
                  <span className="font-mono font-bold text-emerald-700">Rp 22.0 M (-42%)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '58%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: 4-Pillar TCO Detailed Breakdown (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="space-y-1.5 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-0.5 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">
                4 Pilar Penghematan Biaya FSI Faktual
              </span>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold">CFO Audit Grade</span>
            </div>

            <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
              {comparisons.map((c, idx) => (
                <div
                  key={c.id}
                  onMouseEnter={() => setActiveComparisonIndex(idx)}
                  className={\`p-2 rounded-lg border transition-all flex flex-col justify-between \${
                    activeComparisonIndex === idx
                      ? 'border-blue-400 bg-white shadow-xs'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white'
                  }\`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9.5px] font-bold text-slate-900 leading-tight">
                        {c.category}
                      </span>
                      <span
                        className={\`text-[9px] font-mono font-black \${
                          c.isSaving ? 'text-emerald-700' : 'text-amber-600'
                        }\`}
                      >
                        {c.savingsPercentage}
                      </span>
                    </div>

                    <div className="space-y-1 text-[8.5px]">
                      <div className="bg-white p-1 border border-slate-100 flex items-center justify-between">
                        <span className="text-slate-500">Legacy:</span>
                        <span className="font-mono font-semibold text-slate-700">Rp {c.legacyCostNum.toFixed(1)}M</span>
                      </div>
                      <div className="bg-white p-1 border border-slate-100 flex items-center justify-between">
                        <span className="text-blue-700 font-semibold">WAY4:</span>
                        <span className="font-mono font-bold text-blue-700">Rp {c.way4CostNum.toFixed(1)}M</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-100 mt-1 text-[8px] text-slate-600 font-medium truncate">
                    {c.driverDetail}
                  </div>
                </div>
              ))}
            </div>

            {/* CFO Sign-off Protection Strip */}
            <div className="p-1.5 bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-between text-[9.5px]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-slate-800">
                  <strong className="font-semibold text-emerald-950">Justifikasi CFO: </strong>
                  Pengurangan footprint server, eliminasi denda downtime, dan payback &lt; 18 bulan memberikan kepastian persetujuan komite investasi bank.
                </span>
              </div>
              <span className="text-[10px] font-bold font-inter tabular-nums text-emerald-700 shrink-0 pl-2">
                Audit Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Strategic Executive Takeaway */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Investasi WAY4 mencapai titik impas penuh di <strong className="text-slate-900 font-semibold">Bulan 18</strong> dan menghasilkan laba kumulatif <strong className="text-slate-900 font-semibold">340% ROI</strong> di Tahun ke-3 berkat efisiensi Opex 42%.
          </span>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Justifikasi:</span>
          <span className="text-emerald-700 font-black text-xs tabular-nums">
            CFO-Approved Payback
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide18;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/18/index.tsx'), slide18IndexContent, 'utf8');
console.log('[OK] Written src/slide/18/index.tsx');

console.log('==> Revisualization Complete for Slide 17 and Slide 18!');
