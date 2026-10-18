const fs = require('fs');
const path = require('path');

console.log('==> Starting Revisualization Script for Slide 19 and Slide 20...');

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
// 1. GENERATE LOTTIE JSON FOR SLIDE 19: 3D Kinetic Funnel Chute & Converting Deals
// ============================================================================
function generateLottieSlide19() {
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
    nm: "Slide 19 - 3D Kinetic Funnel Chute",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: Central Funnel Suction Wave (Pulsing Ellipse)
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Funnel Suction Wave",
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
              { t: 0, s: [50, 25, 100], e: [240, 120, 100] },
              { t: 180, s: [240, 120, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Wave Ring",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [140, 70] }
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
      // Layer 2: 4 Tiered Funnel Rings (Intake -> Qualification -> RFP -> Closed-Won)
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "4 Funnel Chute Rings",
        sr: 1,
        ks: {
          o: { a: 0, k: 90 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 110, 0] },
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
          // Ring 1: Universe Rp 85B (Intake)
          {
            ty: "gr",
            nm: "Ring Universe",
            it: [
              {
                ty: "el",
                nm: "Oval 1",
                p: { a: 0, k: [-160, -5] },
                s: { a: 0, k: [80, 40] }
              },
              {
                ty: "st",
                nm: "Stroke Grey",
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
            ]
          },
          // Ring 2: Qualified Rp 55B
          {
            ty: "gr",
            nm: "Ring Qualified",
            it: [
              {
                ty: "el",
                nm: "Oval 2",
                p: { a: 0, k: [-50, 0] },
                s: { a: 0, k: [68, 34] }
              },
              {
                ty: "st",
                nm: "Stroke Amber",
                c: { a: 0, k: amber },
                o: { a: 0, k: 85 },
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
          // Ring 3: RFP POC Rp 35B
          {
            ty: "gr",
            nm: "Ring RFP",
            it: [
              {
                ty: "el",
                nm: "Oval 3",
                p: { a: 0, k: [50, 5] },
                s: { a: 0, k: [56, 28] }
              },
              {
                ty: "st",
                nm: "Stroke Blue",
                c: { a: 0, k: blue },
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
          // Ring 4: Won Output Rp 25B (Green Vault)
          {
            ty: "gr",
            nm: "Ring Won",
            it: [
              {
                ty: "rc",
                nm: "Won Cube",
                p: { a: 0, k: [160, 10] },
                s: { a: 0, k: [32, 32] },
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
// 2. GENERATE LOTTIE JSON FOR SLIDE 20: 3D SCBD Financial Tower Beacon
// ============================================================================
function generateLottieSlide20() {
  const blue = hexToRgba('#1a73e8');
  const green = hexToRgba('#34a853');
  const white = [1, 1, 1, 1];

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 520,
    h: 220,
    nm: "Slide 20 - 3D SCBD Financial Tower Beacon",
    ddd: 0,
    assets: [],
    layers: [
      // Layer 1: 360-Degree Rotating Radar Beam
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Radar Beam Sweep",
        sr: 1,
        ks: {
          o: { a: 0, k: 80 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], e: [360] },
              { t: 180, s: [360] }
            ]
          },
          p: { a: 0, k: [260, 65, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 45, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Radar Ring",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [180, 180] }
          },
          {
            ty: "st",
            nm: "Stroke Emerald",
            c: { a: 0, k: green },
            o: { a: 0, k: 75 },
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
      // Layer 2: GPS Pulsing Beacon Wave
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "GPS Beacon Pulse",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [90], e: [0] },
              { t: 180, s: [0] }
            ]
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 65, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [20, 10, 100], e: [200, 100, 100] },
              { t: 180, s: [200, 100, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Beacon Oval",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [100, 50] }
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
      // Layer 3: Central SCBD Tower Crown Beacon
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Tower Crown Spire",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [260, 65, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [90, 90, 100], e: [110, 110, 100] },
              { t: 90, s: [110, 110, 100], e: [90, 90, 100] },
              { t: 180, s: [90, 90, 100] }
            ]
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "el",
            nm: "Spire Light",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [16, 16] }
          },
          {
            ty: "fl",
            nm: "Fill Green",
            c: { a: 0, k: green },
            o: { a: 0, k: 100 }
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
const lottie19 = JSON.stringify(generateLottieSlide19(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/19/lottie.json'), lottie19, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-19.json'), lottie19, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-19.json'), lottie19, 'utf8');
console.log('[OK] Generated Slide 19 Lottie JSON files');

const lottie20 = JSON.stringify(generateLottieSlide20(), null, 2);
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/20/lottie.json'), lottie20, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public/assets/lottie/slide-20.json'), lottie20, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'src/assets/lottie/slide-20.json'), lottie20, 'utf8');
console.log('[OK] Generated Slide 20 Lottie JSON files');

// ============================================================================
// 3. WRITE SLIDE 19: data.ts (Ultra-Minim Teks, Factual Pipeline Data)
// ============================================================================
const slide19DataContent = `export interface FunnelStage {
  stageNumber: string;
  name: string;
  count: number;
  valueIdrBillion: number;
  valueFormatted: string;
  conversionRate: string;
  stageNature: string;
  color: string;
}

export interface QuarterlyRamp {
  quarter: string;
  targetQuota: string;
  pipelineCoverage: string;
  focusDeliverable: string;
  percentageQuota: number;
  color: string;
}

export interface SignatureWinPlan {
  id: string;
  targetTier: string;
  bankCodeName: string;
  estimatedTcv: string;
  stageName: string;
  way4SolutionFit: string;
  closingHorizon: string;
  winProbability: string;
  color: string;
}

export interface Slide19SummaryMetric {
  label: string;
  value: string;
  sub: string;
  accent: string;
}

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    stageNumber: '01',
    name: 'Universe Prospek',
    count: 15,
    valueIdrBillion: 85.0,
    valueFormatted: 'Rp 85.0 M',
    conversionRate: '100% Base',
    stageNature: 'KBMI 3-4, Digital & GPN',
    color: '#64748b'
  },
  {
    stageNumber: '02',
    name: 'Qualified Discovery',
    count: 9,
    valueIdrBillion: 55.0,
    valueFormatted: 'Rp 55.0 M',
    conversionRate: '64.7% Lolos',
    stageNature: 'Budget & C-Level Sponsor',
    color: '#fbbc04'
  },
  {
    stageNumber: '03',
    name: 'RFP & Live POC',
    count: 5,
    valueIdrBillion: 35.0,
    valueFormatted: 'Rp 35.0 M',
    conversionRate: '41.2% Valid',
    stageNature: 'Bake-Off 10k+ TPS Aktif',
    color: '#1a73e8'
  },
  {
    stageNumber: '04',
    name: 'Closed-Won Quota',
    count: 3,
    valueIdrBillion: 25.0,
    valueFormatted: 'Rp 25.0 M',
    conversionRate: '29.4% Quota',
    stageNature: 'Kontrak Menang Definitif',
    color: '#34a853'
  }
];

export const QUARTERLY_RAMP: QuarterlyRamp[] = [
  {
    quarter: 'Q1',
    targetQuota: 'Rp 3.0 M',
    pipelineCoverage: 'Rp 20.0 M Pipeline',
    focusDeliverable: 'Discovery 15 Akun & Pre-RFP Advisory',
    percentageQuota: 12,
    color: '#64748b'
  },
  {
    quarter: 'Q2',
    targetQuota: 'Rp 6.0 M',
    pipelineCoverage: 'Rp 35.0 M Pipeline',
    focusDeliverable: 'POC Bake-Off & Aliansi SI Lokal',
    percentageQuota: 24,
    color: '#fbbc04'
  },
  {
    quarter: 'Q3',
    targetQuota: 'Rp 8.0 M',
    pipelineCoverage: 'Rp 45.0 M Pipeline',
    focusDeliverable: 'Closing Deal Bank KBMI 3 & Add-on',
    percentageQuota: 32,
    color: '#1a73e8'
  },
  {
    quarter: 'Q4',
    targetQuota: 'Rp 8.0 M',
    pipelineCoverage: 'Rp 50.0 M Pipeline',
    focusDeliverable: 'Closing Signature Deal KBMI 4',
    percentageQuota: 32,
    color: '#34a853'
  }
];

export const SIGNATURE_WIN_PLANS: SignatureWinPlan[] = [
  {
    id: 'kbmi4-core',
    targetTier: 'Bank KBMI 4 Enterprise',
    bankCodeName: 'Signature Tier-1 Bank (Mandiri / BRI)',
    estimatedTcv: 'Rp 18.0 M',
    stageName: 'Pre-RFP Shaping',
    way4SolutionFit: 'Switching Modernization & Strangler Fig',
    closingHorizon: 'Q3 - Q4',
    winProbability: '75%',
    color: '#1a73e8'
  },
  {
    id: 'switch-gpn',
    targetTier: 'Lembaga Switching Nasional',
    bankCodeName: 'National Switch Network (GPN)',
    estimatedTcv: 'Rp 12.0 M',
    stageName: 'Discovery & Advisory',
    way4SolutionFit: 'High-Speed BI-FAST & QRIS 10k+ TPS',
    closingHorizon: 'Q2 - Q3',
    winProbability: '80%',
    color: '#34a853'
  },
  {
    id: 'digital-bank',
    targetTier: 'Bank Digital / Unicorn',
    bankCodeName: 'Top Digital Bank (Allo / Jago)',
    estimatedTcv: 'Rp 6.5 M',
    stageName: 'POC Live Bake-Off',
    way4SolutionFit: 'Cardless Virtual & Instant Fee Engine',
    closingHorizon: 'Q2',
    winProbability: '85%',
    color: '#fbbc04'
  },
  {
    id: 'regional-bpd',
    targetTier: 'Bank Pembangunan Daerah (BPD)',
    bankCodeName: 'Regional Champion BPD (BJB / Jatim)',
    estimatedTcv: 'Rp 4.5 M',
    stageName: 'RFP Proposal Defense',
    way4SolutionFit: 'SNAP BI Gateway & QRIS Merchant',
    closingHorizon: 'Q1 - Q2',
    winProbability: '90%',
    color: '#137333'
  }
];

export const SLIDE19_SUMMARY_METRICS: Slide19SummaryMetric[] = [
  {
    label: 'Target Quota 12-Bulan',
    value: 'Rp 25.0 M',
    sub: 'Commitment Win Target',
    accent: '#34a853'
  },
  {
    label: 'Pipeline Universe',
    value: 'Rp 85.0 M',
    sub: '15 Qualified Accounts',
    accent: '#1a73e8'
  },
  {
    label: 'Pipeline Coverage',
    value: '3.4x Quota',
    sub: 'Healthy Enterprise Ratio',
    accent: '#1a73e8'
  },
  {
    label: 'Signature Win-Plans',
    value: '4 Akun Kunci',
    sub: 'KBMI 4, GPN, Digital & BPD',
    accent: '#137333'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/19/data.ts'), slide19DataContent, 'utf8');
console.log('[OK] Written src/slide/19/data.ts');

// ============================================================================
// 4. WRITE SLIDE 19: container.tsx
// ============================================================================
const slide19ContainerContent = `import { useState } from 'react';
import {
  FUNNEL_STAGES,
  QUARTERLY_RAMP,
  SIGNATURE_WIN_PLANS,
  SLIDE19_SUMMARY_METRICS,
  FunnelStage,
  QuarterlyRamp,
  SignatureWinPlan,
  Slide19SummaryMetric
} from './data';

export interface Slide19Controller {
  funnelStages: FunnelStage[];
  quarterlyRamp: QuarterlyRamp[];
  winPlans: SignatureWinPlan[];
  summaryMetrics: Slide19SummaryMetric[];
  activeStageIndex: number;
  setActiveStageIndex: (index: number) => void;
  selectedPlanIndex: number;
  setSelectedPlanIndex: (index: number) => void;
  selectedPlan: SignatureWinPlan;
}

export function useSlide19Container(): Slide19Controller {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(3); // Default Closed-Won
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);

  const selectedPlan = SIGNATURE_WIN_PLANS[selectedPlanIndex] || SIGNATURE_WIN_PLANS[0];

  return {
    funnelStages: FUNNEL_STAGES,
    quarterlyRamp: QUARTERLY_RAMP,
    winPlans: SIGNATURE_WIN_PLANS,
    summaryMetrics: SLIDE19_SUMMARY_METRICS,
    activeStageIndex,
    setActiveStageIndex,
    selectedPlanIndex,
    setSelectedPlanIndex,
    selectedPlan
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/19/container.tsx'), slide19ContainerContent, 'utf8');
console.log('[OK] Written src/slide/19/container.tsx');

// ============================================================================
// 5. WRITE SLIDE 19: visual-3D.tsx
// ============================================================================
const slide19Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { FUNNEL_STAGES } from './data';
import { Target, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  activeStageIndex?: number;
  onStageSelect?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  activeStageIndex = 3,
  onStageSelect
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Telemetry Top Bar (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D Kinetic Funnel Chute & Converting Deal Blocks
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
          <span className="flex items-center gap-1 text-blue-600 font-bold">
            <Target className="w-3.5 h-3.5" />
            <span>3.4x Coverage</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Rp 25B Quota</span>
          </span>
        </div>
      </div>

      {/* 3D Isometric Funnel Chute Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Isometric Funnel SVG Overlay */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible select-none"
          viewBox="0 0 520 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chuteStage1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            <linearGradient id="chuteStage2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="chuteStage3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <linearGradient id="chuteStage4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d1fae5" />
            </linearGradient>
          </defs>

          {/* Coordinate Axis Grid */}
          <ellipse cx="260" cy="145" rx="160" ry="12" fill="#94a3b8" opacity="0.15" />

          {/* Stage 01: Top Chute Intake (Rp 85B Universe) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onStageSelect?.(0)}
            transform={activeStageIndex === 0 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="80" cy="90" rx="48" ry="18" fill="url(#chuteStage1)" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="80" cy="90" rx="38" ry="13" fill="#e2e8f0" />
            <circle cx="65" cy="88" r="5" fill="#94a3b8" stroke="#ffffff" strokeWidth="1" />
            <circle cx="80" cy="86" r="6" fill="#64748b" stroke="#ffffff" strokeWidth="1" />
            <circle cx="95" cy="89" r="5.5" fill="#475569" stroke="#ffffff" strokeWidth="1" />
            <text x="80" y="125" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="900" fontFamily="Inter">
              01. UNIVERSE
            </text>
            <text x="80" y="136" textAnchor="middle" fill="#64748b" fontSize="8" className="font-mono" fontFamily="Inter">
              Rp 85.0 M (15 Akun)
            </text>
          </g>

          {/* Connector 1 to 2 */}
          <path d="M 128,90 C 155,90 165,95 185,95" fill="none" stroke="#fbbc04" strokeWidth="2.5" strokeDasharray="4 3" />

          {/* Stage 02: Qualified Discovery (Rp 55B) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onStageSelect?.(1)}
            transform={activeStageIndex === 1 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="205" cy="95" rx="38" ry="15" fill="url(#chuteStage2)" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="195" cy="93" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
            <circle cx="215" cy="95" r="5" fill="#d97706" stroke="#ffffff" strokeWidth="1" />
            <text x="205" y="125" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="900" fontFamily="Inter">
              02. QUALIFIED
            </text>
            <text x="205" y="136" textAnchor="middle" fill="#b45309" fontSize="8" className="font-mono" fontFamily="Inter">
              Rp 55.0 M (9 Akun)
            </text>
          </g>

          {/* Connector 2 to 3 */}
          <path d="M 243,95 C 270,95 280,100 300,100" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="4 3" />

          {/* Stage 03: RFP & POC Bake-Off (Rp 35B) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onStageSelect?.(2)}
            transform={activeStageIndex === 2 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="325" cy="100" rx="32" ry="13" fill="url(#chuteStage3)" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="318,98 322,94 326,98 322,102" fill="#2563eb" stroke="#ffffff" strokeWidth="0.8" />
            <polygon points="328,100 332,96 336,100 332,104" fill="#1d4ed8" stroke="#ffffff" strokeWidth="0.8" />
            <text x="325" y="125" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="900" fontFamily="Inter">
              03. RFP & POC
            </text>
            <text x="325" y="136" textAnchor="middle" fill="#1e40af" fontSize="8" className="font-mono" fontFamily="Inter">
              Rp 35.0 M (5 Akun)
            </text>
          </g>

          {/* Connector 3 to 4 */}
          <path d="M 357,100 C 385,100 395,105 415,105" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 3" />

          {/* Stage 04: Closed-Won Output Vault (Rp 25B Quota) */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => onStageSelect?.(3)}
            transform={activeStageIndex === 3 ? 'translate(0, -6)' : 'translate(0, 0)'}
          >
            <ellipse cx="445" cy="105" rx="34" ry="14" fill="url(#chuteStage4)" stroke="#10b981" strokeWidth="2" />
            <polygon points="445,85 460,94 445,103 430,94" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
            <polygon points="430,94 445,103 445,114 430,105" fill="#10b981" />
            <polygon points="445,103 460,94 460,105 445,114" fill="#047857" />
            <circle cx="445" cy="94" r="3.5" fill="#ffffff" className="animate-ping" />
            <text x="445" y="125" textAnchor="middle" fill="#065f46" fontSize="9.5" fontWeight="900" fontFamily="Inter">
              04. CLOSED-WON
            </text>
            <text x="445" y="136" textAnchor="middle" fill="#047857" fontSize="8" className="font-mono font-bold" fontFamily="Inter">
              ★ Rp 25.0 M (Quota)
            </text>
          </g>
        </svg>
      </div>

      {/* 4 Funnel Stages Bottom Telemetry Footnote (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-slate-700">Universe (15 Akun)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 85.0M Top FSI Target</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-amber-700">Qualified (9 Akun)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 55.0M C-Level Sponsor</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">RFP POC (5 Akun)</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 35.0M Bake-Off 10k TPS</div>
        </div>
        <div className="p-1 bg-emerald-50 border border-emerald-200">
          <div className="text-[8.5px] font-bold text-emerald-800">Closed-Won (3 Akun)</div>
          <div className="text-[8px] text-emerald-700 font-bold">★ Rp 25.0M Quota Reached</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/19/visual-3D.tsx'), slide19Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/19/visual-3D.tsx');

// ============================================================================
// 6. WRITE SLIDE 19: index.tsx
// ============================================================================
const slide19IndexContent = `import React from 'react';
import { useSlide19Container } from './container';
import { Visual3D } from './visual-3D';
import {
  Target,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const Slide19: React.FC = () => {
  const {
    funnelStages,
    quarterlyRamp,
    winPlans,
    summaryMetrics,
    activeStageIndex,
    setActiveStageIndex,
    selectedPlanIndex,
    setSelectedPlanIndex
  } = useSlide19Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Top Meta Line (Strictly Flat Canvas, Zero Badge) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            12-Month Sales Pipeline Commitment & Win-Plans
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 19: Rp 85.0 M Universe to Rp 25.0 M Closed-Won Quota (3.4x Coverage)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900 font-mono">Rp 25.0 Miliar</span>
            <span className="text-slate-400">Target Quota</span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 font-mono">4 Akun</span>
            <span className="text-slate-400">Signature Deals</span>
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

      {/* 3. Main Content Split: Left (5 Cols) 3D Funnel Chute | Right (7 Cols) 4 Signature Win-Plans & Ramp */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 3D Visual Funnel & Conversion Stages */}
        <div className="col-span-5 flex flex-col justify-between space-y-2 pr-1">
          {/* Main 3D Visual Funnel */}
          <div className="h-44 border border-slate-100 p-2 bg-slate-50/40 shrink-0">
            <Visual3D
              activeStageIndex={activeStageIndex}
              onStageSelect={setActiveStageIndex}
            />
          </div>

          {/* 4 Funnel Conversion Table (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
            {funnelStages.map((st, idx) => (
              <div
                key={st.stageNumber}
                onMouseEnter={() => setActiveStageIndex(idx)}
                className={\`p-2 rounded-lg border transition-all text-left flex flex-col justify-between \${
                  activeStageIndex === idx
                    ? 'border-blue-400 bg-white shadow-xs'
                    : 'border-slate-100 bg-slate-50/50 hover:bg-white'
                }\`}
                style={{
                  borderTopWidth: '3px',
                  borderTopColor: st.color
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8.5px] font-mono text-slate-400 font-bold">
                      Tahap {st.stageNumber}
                    </span>
                    <span className="text-[9.5px] font-mono font-bold" style={{ color: st.color }}>
                      {st.count} Akun
                    </span>
                  </div>
                  <div className="text-[10.5px] font-bold text-slate-900 leading-tight">
                    {st.name}
                  </div>
                  <div className="text-[10px] font-mono font-black text-slate-800 mt-0.5">
                    {st.valueFormatted}
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100 mt-1 flex items-center justify-between text-[8px] text-slate-500 font-medium">
                  <span className="truncate">{st.stageNature}</span>
                  <span className="font-mono font-bold text-emerald-700 ml-1">{st.conversionRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Span 7): 4 Signature Win-Plans & Quarterly Ramp Q1-Q4 */}
        <div className="col-span-7 flex flex-col justify-between space-y-2 border-l border-slate-100 pl-3">
          {/* Section 1: 4 Signature Bank Win-Plans Matrix */}
          <div className="space-y-1.5 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-0.5 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-blue-600" />
                4 Rencana Kemenangan Akun Kunci (Signature Win-Plans)
              </span>
              <span className="text-[8.5px] font-mono text-emerald-700 font-bold">Rp 41.0M High-Probability</span>
            </div>

            <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
              {winPlans.map((wp, wIdx) => (
                <div
                  key={wp.id}
                  onMouseEnter={() => setSelectedPlanIndex(wIdx)}
                  className={\`p-2 border transition-all flex flex-col justify-between text-[9px] \${
                    selectedPlanIndex === wIdx
                      ? 'border-blue-400 bg-blue-50/20'
                      : 'border-slate-100 bg-white'
                  }\`}
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: wp.color
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] text-slate-400 font-semibold uppercase">{wp.targetTier}</span>
                      <span className="font-mono font-bold text-emerald-700 text-[8.5px]">{wp.winProbability} Win</span>
                    </div>
                    <div className="font-bold text-slate-900 leading-tight">
                      {wp.bankCodeName}
                    </div>
                    <div className="font-mono font-black text-blue-700 text-[10px] mt-0.5">
                      {wp.estimatedTcv} TCV
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-100 mt-1 flex items-center justify-between text-[8px]">
                    <span className="text-slate-600 truncate">{wp.way4SolutionFit}</span>
                    <span className="font-mono font-bold text-slate-500 ml-1">{wp.closingHorizon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Quarterly Ramp-up Bar Q1-Q4 */}
          <div className="p-2 bg-slate-50/60 border border-slate-100 shrink-0">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                Target Ramp-up Kuartalan (Total Target Quota Rp 25.0 M)
              </span>
              <span className="text-[8.5px] font-mono text-slate-500 font-bold">100% Quota Achievement</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-center text-[9px]">
              {quarterlyRamp.map((q, qIdx) => (
                <div key={qIdx} className="bg-white p-1 border border-slate-100 flex flex-col justify-between">
                  <div className="font-bold text-slate-500 text-[8px] uppercase">{q.quarter} ({q.percentageQuota}%)</div>
                  <div className="text-[11px] font-black font-inter tabular-nums text-slate-900 my-0.5">
                    {q.targetQuota}
                  </div>
                  <div className="text-[7.5px] text-blue-600 font-semibold truncate font-mono">
                    {q.pipelineCoverage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Strategic Executive Takeaway */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Pipeline Universe sebesar <strong className="text-slate-900 font-semibold">Rp 85.0 Miliar (3.4x Quota)</strong> memberikan jaminan pencapaian target penutupan kontrak definitif sebesar <strong className="text-slate-900 font-semibold">Rp 25.0 Miliar</strong> dalam 12 bulan pertama.
          </span>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Komitmen:</span>
          <span className="text-emerald-700 font-black text-xs tabular-nums">
            100% Quota Achievement
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide19;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/19/index.tsx'), slide19IndexContent, 'utf8');
console.log('[OK] Written src/slide/19/index.tsx');

// ============================================================================
// 7. WRITE SLIDE 20: data.ts (Ultra-Minim Teks, Factual Closing & Readiness)
// ============================================================================
const slide20DataContent = `export interface StrategicValueAnchor {
  id: string;
  pillarNumber: string;
  title: string;
  executiveProof: string;
  marketValidation: string;
  color: string;
}

export interface RoadmapStep {
  dayRange: string;
  phaseName: string;
  deliverableTitle: string;
  metricGoal: string;
  color: string;
}

export interface CandidateDossier {
  name: string;
  targetRole: string;
  regionalOffice: string;
  coordinates: string;
  status: string;
  expectedCommitment: string;
}

export interface Slide20SummaryMetric {
  label: string;
  value: string;
  sub: string;
  accent: string;
}

export const STRATEGIC_ANCHORS: StrategicValueAnchor[] = [
  {
    id: 'anchor-domain',
    pillarNumber: '01',
    title: 'Domain Authority',
    executiveProof: '10+ Tahun Spesialis FSI Enterprise',
    marketValidation: 'Penguasaan arsitektur ISO 20022 SNAP BI, switching & core banking',
    color: '#1a73e8'
  },
  {
    id: 'anchor-deals',
    pillarNumber: '02',
    title: 'Commercial Track Record',
    executiveProof: 'Rp 45B+ Closed TCV Rekam Jejak',
    marketValidation: '85% win rate tender dan rekam jejak konsistensi kuota tahunan',
    color: '#34a853'
  },
  {
    id: 'anchor-network',
    pillarNumber: '03',
    title: 'C-Level Rolodex Access',
    executiveProof: 'Akses Langsung Direksi Bank KBMI',
    marketValidation: 'Relasi dekat dengan CIO, CTO, Head of Cards, & tim procurement',
    color: '#fbbc04'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    dayRange: 'Hari 1 - 10',
    phaseName: 'Audit & Penyelarasan',
    deliverableTitle: 'Sinkronisasi solusi WAY4 & audit akun aktif',
    metricGoal: '100% Internal Alignment',
    color: '#64748b'
  },
  {
    dayRange: 'Hari 11 - 20',
    phaseName: 'C-Level Discovery',
    deliverableTitle: 'Gelar 15 discovery meeting dengan direksi bank',
    metricGoal: 'Rp 35B Qualified Pipeline',
    color: '#1a73e8'
  },
  {
    dayRange: 'Hari 21 - 30',
    phaseName: 'RFP Shaping & POC',
    deliverableTitle: 'Partisipasi tender resmi & konsorsium SI lokal',
    metricGoal: '2 Tender Bids Submitted',
    color: '#34a853'
  }
];

export const CANDIDATE_DOSSIER: CandidateDossier = {
  name: 'Harry Gultom',
  targetRole: 'Senior Business Development Executive',
  regionalOffice: 'OpenWay Group Indonesia & SEA',
  coordinates: '-6.2088° S, 106.8456° E (SCBD Jakarta)',
  status: 'Available Immediately / Day-1 Ready',
  expectedCommitment: 'Rp 25.0 Miliar Quota Commitment'
};

export const SLIDE20_SUMMARY_METRICS: Slide20SummaryMetric[] = [
  {
    label: 'Deployment Readiness',
    value: 'Day-1 Ready',
    sub: 'Available Immediately',
    accent: '#34a853'
  },
  {
    label: 'Target Quota Year-1',
    value: 'Rp 25.0 M',
    sub: 'Closed-Won Target',
    accent: '#1a73e8'
  },
  {
    label: 'FSI Track Record',
    value: 'Rp 45B+ TCV',
    sub: 'Enterprise Closed Deals',
    accent: '#1a73e8'
  },
  {
    label: 'Strategic Fit',
    value: '100% Matched',
    sub: 'WAY4 Commercial Scaling',
    accent: '#137333'
  }
];
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/20/data.ts'), slide20DataContent, 'utf8');
console.log('[OK] Written src/slide/20/data.ts');

// ============================================================================
// 8. WRITE SLIDE 20: container.tsx
// ============================================================================
const slide20ContainerContent = `import { useState } from 'react';
import {
  STRATEGIC_ANCHORS,
  ROADMAP_STEPS,
  CANDIDATE_DOSSIER,
  SLIDE20_SUMMARY_METRICS,
  StrategicValueAnchor,
  RoadmapStep,
  CandidateDossier,
  Slide20SummaryMetric
} from './data';

export interface Slide20Controller {
  anchors: StrategicValueAnchor[];
  roadmap: RoadmapStep[];
  candidate: CandidateDossier;
  summaryMetrics: Slide20SummaryMetric[];
  activeAnchorIndex: number;
  setActiveAnchorIndex: (index: number) => void;
  isActionConfirmed: boolean;
  handleActionClick: () => void;
}

export function useSlide20Container(): Slide20Controller {
  const [activeAnchorIndex, setActiveAnchorIndex] = useState<number>(0);
  const [isActionConfirmed, setIsActionConfirmed] = useState<boolean>(true);

  const handleActionClick = () => {
    setIsActionConfirmed(true);
  };

  return {
    anchors: STRATEGIC_ANCHORS,
    roadmap: ROADMAP_STEPS,
    candidate: CANDIDATE_DOSSIER,
    summaryMetrics: SLIDE20_SUMMARY_METRICS,
    activeAnchorIndex,
    setActiveAnchorIndex,
    isActionConfirmed,
    handleActionClick
  };
}
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/20/container.tsx'), slide20ContainerContent, 'utf8');
console.log('[OK] Written src/slide/20/container.tsx');

// ============================================================================
// 9. WRITE SLIDE 20: visual-3D.tsx
// ============================================================================
const slide20Visual3DContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';
import { MapPin, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface Visual3DProps {
  className?: string;
  onInteract?: () => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full',
  onInteract
}) => {
  return (
    <div className={\`relative w-full h-full flex flex-col justify-between overflow-hidden select-none \${className}\`}>
      {/* 3D Telemetry Top Bar (Monoline, Zero Badge) */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1.5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-inter">
            3D SCBD Financial Tower Beacon & Handshake Seal
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Day-1 Ready</span>
          </span>
          <span className="flex items-center gap-1 text-blue-600 font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>SCBD Jakarta</span>
          </span>
        </div>
      </div>

      {/* 3D Isometric SCBD Tower Canvas Area */}
      <div className="relative flex-1 w-full min-h-[175px] flex items-center justify-center overflow-hidden">
        {/* Layer 1: Lottie Engine Background (Bodymovin v5.7.4 60fps) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-70 z-0">
          <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[180px]" loop autoplay />
        </div>

        {/* Layer 2: 3D Isometric SCBD Skyline & Central Tower SVG Overlay */}
        <svg
          className="relative z-10 w-full h-full max-h-[180px] overflow-visible select-none"
          viewBox="0 0 520 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="towerRoofGrad20" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <linearGradient id="towerLeftGrad20" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="towerRightGrad20" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
          </defs>

          {/* Ground Foundation Shadow */}
          <ellipse cx="260" cy="140" rx="160" ry="14" fill="#94a3b8" opacity="0.18" />

          {/* Secondary Skyline Tower 1: Bank KBMI 4 */}
          <g opacity="0.6">
            <polygon points="175,85 195,95 175,105 155,95" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
            <polygon points="155,95 175,105 175,135 155,125" fill="#94a3b8" />
            <polygon points="175,105 195,95 195,125 175,135" fill="#64748b" />
            <text x="175" y="150" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="Inter" fontWeight="700">KBMI 4</text>
          </g>

          {/* Secondary Skyline Tower 2: National Switch Hub */}
          <g opacity="0.6">
            <polygon points="345,85 365,95 345,105 325,95" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
            <polygon points="325,95 345,105 345,135 325,125" fill="#94a3b8" />
            <polygon points="345,105 365,95 365,125 345,135" fill="#64748b" />
            <text x="345" y="150" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="Inter" fontWeight="700">GPN HUB</text>
          </g>

          {/* Primary Command Center Tower: SCBD Jakarta (OpenWay HQ) */}
          <g className="transition-transform hover:scale-105 cursor-pointer">
            <polygon points="260,110 305,130 260,150 215,130" fill="#f8fafc" stroke="#bfdbfe" strokeWidth="1" />
            <polygon points="235,90 260,102 260,132 235,120" fill="url(#towerLeftGrad20)" />
            <polygon points="260,102 285,90 285,120 260,132" fill="url(#towerRightGrad20)" />
            <polygon points="260,75 285,90 260,102 235,90" fill="url(#towerRoofGrad20)" stroke="#93c5fd" strokeWidth="1.2" />

            {/* Tower Spire & Antenna */}
            <line x1="260" y1="75" x2="260" y2="40" stroke="#10b981" strokeWidth="2.5" />
            <ellipse cx="260" cy="40" rx="70" ry="24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 4" className="animate-spin" />
            <circle cx="260" cy="40" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            <circle cx="260" cy="40" r="10" fill="none" stroke="#34a853" strokeWidth="1.5" className="animate-ping" />

            <text x="260" y="152" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="900" fontFamily="Inter">
              JAKARTA FINANCIAL HUB (SCBD)
            </text>
            <text x="260" y="164" textAnchor="middle" fill="#64748b" fontSize="8" className="font-mono" fontFamily="Inter">
              -6.2088° S, 106.8456° E
            </text>
          </g>

          {/* Satellite Radar Connection Rays */}
          <line x1="260" y1="40" x2="175" y2="85" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
          <line x1="260" y1="40" x2="345" y2="85" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
        </svg>
      </div>

      {/* Bottom 4 Active Candidate Telemetry Footnote (Zero-Click, Ultra-Minim Teks) */}
      <div className="grid grid-cols-4 gap-2 pt-1 border-t border-slate-100 shrink-0 text-center">
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-blue-700">Domain FSI</div>
          <div className="text-[8px] text-slate-500 font-medium">10+ Thn Pembayaran Enterprise</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-emerald-700">Rekam Jejak</div>
          <div className="text-[8px] text-slate-500 font-medium">Rp 45B+ Closed TCV</div>
        </div>
        <div className="p-1 bg-slate-50 border border-slate-100">
          <div className="text-[8.5px] font-bold text-amber-700">C-Level Network</div>
          <div className="text-[8px] text-slate-500 font-medium">Akses Direksi Bank KBMI</div>
        </div>
        <div className="p-1 bg-emerald-50 border border-emerald-200">
          <div className="text-[8.5px] font-bold text-emerald-800">Status Kandidat</div>
          <div className="text-[8px] text-emerald-700 font-bold">★ Available Immediately</div>
        </div>
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/20/visual-3D.tsx'), slide20Visual3DContent, 'utf8');
console.log('[OK] Written src/slide/20/visual-3D.tsx');

// ============================================================================
// 10. WRITE SLIDE 20: index.tsx
// ============================================================================
const slide20IndexContent = `import React from 'react';
import { useSlide20Container } from './container';
import { Visual3D } from './visual-3D';
import {
  CheckCircle2,
  MapPin,
  Check,
  ShieldCheck,
  ArrowRight,
  Send,
  Globe2,
  Briefcase
} from 'lucide-react';

export const Slide20: React.FC = () => {
  const {
    anchors,
    roadmap,
    candidate,
    summaryMetrics,
    activeAnchorIndex,
    setActiveAnchorIndex
  } = useSlide20Container();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-white text-slate-800 font-inter select-none">
      {/* 1. Top Meta Line (Strictly Flat Canvas, Zero Badge) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            Executive Closing & Day-One Operational Readiness
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-medium text-slate-500">
            Slide 20: Strategic Value Anchors, 30-Day Deployment Roadmap & Commercial Commitment
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-slate-900">Available Immediately</span>
            <span className="text-slate-400">Day-1 Ready</span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900">Jakarta Hub</span>
            <span className="text-slate-400">SCBD</span>
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

      {/* 3. Main Content Split: Left (5 Cols) 3D SCBD Beacon & Profile | Right (7 Cols) 3 Strategic Anchors & Roadmap */}
      <div className="grid grid-cols-12 gap-3.5 flex-1 my-1.5 min-h-0 items-stretch">
        {/* Left Column (Span 5): 3D Visual SCBD Beacon & Candidate Profile */}
        <div className="col-span-5 flex flex-col justify-between space-y-2 pr-1">
          {/* Main 3D Visual Beacon */}
          <div className="h-44 border border-slate-100 p-2 bg-slate-50/40 shrink-0">
            <Visual3D />
          </div>

          {/* Candidate Profile Strip (Zero-Click, Ultra-Minim Teks, 1-3 Words) */}
          <div className="p-2.5 bg-slate-50/60 border border-slate-100 flex flex-col justify-between flex-1 min-h-0">
            <div>
              <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  Profil Eksekutif Kandidat
                </span>
                <span className="text-[8.5px] font-mono text-emerald-700 font-bold">Verified FSI Specialist</span>
              </div>

              <div className="space-y-1 text-[9.5px]">
                <div className="bg-white p-1.5 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-500">Nama Kandidat:</span>
                  <span className="font-bold text-slate-900">{candidate.name}</span>
                </div>
                <div className="bg-white p-1.5 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-500">Posisi Sasaran:</span>
                  <span className="font-bold text-blue-700">{candidate.targetRole}</span>
                </div>
                <div className="bg-white p-1.5 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-500">Lokasi / Hub:</span>
                  <span className="font-mono font-semibold text-slate-800">{candidate.coordinates}</span>
                </div>
              </div>
            </div>

            <div className="p-1.5 bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wide">
                ★ Status: {candidate.status}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Span 7): 3 Strategic Value Anchors & 30-Day Deployment Roadmap */}
        <div className="col-span-7 flex flex-col justify-between space-y-2 border-l border-slate-100 pl-3">
          {/* Section 1: 3 Strategic Value Anchors */}
          <div className="space-y-1.5 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-0.5 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                3 Jangkar Nilai Strategis Harry Gultom
              </span>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold">Day-1 Impact</span>
            </div>

            <div className="space-y-1.5">
              {anchors.map((anc, aIdx) => (
                <div
                  key={anc.id}
                  onMouseEnter={() => setActiveAnchorIndex(aIdx)}
                  className={\`p-2 border transition-all flex flex-col justify-between text-[9px] \${
                    activeAnchorIndex === aIdx
                      ? 'border-blue-400 bg-blue-50/20'
                      : 'border-slate-100 bg-white'
                  }\`}
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: anc.color
                  }}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 text-[10px]">
                      {anc.pillarNumber}. {anc.title}
                    </span>
                    <span className="font-mono font-bold text-blue-700 text-[9px]">
                      {anc.executiveProof}
                    </span>
                  </div>
                  <div className="text-slate-600 text-[8.5px] leading-tight">
                    {anc.marketValidation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: 30-Day Systematic Rapid Deployment Roadmap */}
          <div className="p-2 bg-slate-50/60 border border-slate-100 shrink-0">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1">
                <Globe2 className="w-3 h-3 text-emerald-600" />
                Roadmap Aksi Cepat 30-Hari Pertama
              </span>
              <span className="text-[8.5px] font-mono text-emerald-700 font-bold">Execution Plan</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-[8.5px]">
              {roadmap.map((rm, rIdx) => (
                <div key={rIdx} className="bg-white p-1.5 border border-slate-100 flex flex-col justify-between">
                  <div className="font-mono font-bold text-blue-700 text-[8px] uppercase">{rm.dayRange}</div>
                  <div className="font-bold text-slate-900 leading-tight my-0.5">{rm.phaseName}</div>
                  <div className="text-[7.5px] text-slate-500 truncate">{rm.deliverableTitle}</div>
                  <div className="text-[7.5px] text-emerald-700 font-bold mt-1 font-mono">✓ {rm.metricGoal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Strategic Executive Takeaway */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-600 text-[10.5px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Dengan pemahaman domain pembayaran enterprise, jaringan C-Level perbankan teruji, dan rekam jejak <strong className="text-slate-900 font-semibold">Rp 45B+ TCV</strong>, Harry Gultom siap membawa OpenWay memenangkan pasar Indonesia.
          </span>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Komitmen Penutupan:</span>
          <span className="text-blue-700 font-black text-xs tabular-nums">
            Ready to Scale OpenWay
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide20;
`;
fs.writeFileSync(path.join(ROOT_DIR, 'src/slide/20/index.tsx'), slide20IndexContent, 'utf8');
console.log('[OK] Written src/slide/20/index.tsx');

console.log('==> Revisualization Complete for Slide 19 and Slide 20!');
