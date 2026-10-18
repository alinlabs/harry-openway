const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Implementing IN | EN Language Tabs in Header & Bilingual Data Architecture ===');

// ==========================================
// 1. Update src/slide/slidesData.ts
// ==========================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
const slidesDataContent = `export type Language = 'IN' | 'EN';

export interface SlideMetadata {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  durationEstimate: string;
  speakerNotes: {
    purpose: string;
    talkingPoints: string[];
    potentialQuestions: string[];
    suggestedAnswer: string;
  };
}

export const SLIDES_DATA_BY_LANG: Record<Language, SlideMetadata[]> = {
  IN: [
    {
      id: 1,
      title: "Profil Eksekutif & Latar Belakang Profesional",
      subtitle: "Harry M. Gultom – Kandidat Senior Business Development Executive",
      category: "Profil & Nilai Tambah",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membangun impresi awal yang kredibel dan meyakinkan dewan direksi mengenai kematangan pengalaman B2B IT sales 16 tahun serta penguasaan ekosistem perbankan.",
        talkingPoints: [
          "Selamat pagi. Saya Harry, saya membawa 16 tahun pengalaman di industri IT dan B2B sales.",
          "Meskipun secara personal saya tidak memegang akun bank secara langsung, rekam jejak saya sangat erat di industri ini.",
          "Saya memiliki pengalaman panjang sebagai support komersial bagi tim sales yang menangani bank, serta bertindak sebagai Sales Manager yang memimpin tim sales untuk bank-bank terkemuka.",
          "Saya sangat paham bagaimana ekosistem IT, bahasa komersial, dan tata kelola orang perbankan bergerak.",
          "Keahlian utama saya tidak hanya membuka pintu baru, tetapi secara aktif mengelola hubungan strategis dengan klien lama untuk menjaga retensi tinggi serta menumbuhkan peluang bisnis baru."
        ],
        potentialQuestions: [
          "Bagaimana Anda memposisikan diri untuk akun perbankan jika belum memegang akun bank secara langsung sebagai single contributor?"
        ],
        suggestedAnswer: "Saya memposisikan diri sebagai orchestrator strategis. Dengan memimpin dan mensupport tim sales untuk bank-bank besar selama 16 tahun, saya menguasai bahasa komersial C-Level, dinamika komite pengadaan perbankan, dan cara menyelaraskan tim teknis dengan ekspektasi pengambil keputusan."
      }
    },
    {
      id: 2,
      title: "Kondisi Pasar, Potensi & Posisi Kompetitor",
      subtitle: "Katalis Bank Indonesia BSPI 2030 & Vektor Migrasi OpenWay",
      category: "Lanskap Pasar & Kompetitif",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Meyakinkan audiens bahwa Harry memahami urgensi pasar saat ini dan tahu persis di mana ceruk pasar terbesar yang siap dimenangkan OpenWay.",
        talkingPoints: [
          "Meningkatnya kebutuhan pasar Indonesia saat ini sangat dipengaruhi oleh kebijakan Bank Indonesia melalui BSPI 2030 yang mewajibkan modernisasi infrastruktur pembayaran.",
          "OpenWay melalui platform WAY4 sudah memimpin di bank besar seperti BRI, Finnet, dan ASBANDA.",
          "Namun, celah pertumbuhan ke depan ada pada bank-bank komersial menengah yang sistem legacy-nya (seperti ACI atau Fiserv) mulai kesulitan memenuhi standar kepatuhan regulasi baru ini.",
          "Tantangan BD kita adalah masuk ke meja Direksi mereka sebelum kompetitor lain mengambil kesempatan ini."
        ],
        potentialQuestions: [
          "Mengapa bank menengah enggan mengganti sistem lama mereka meskipun ada regulasi BSPI?"
        ],
        suggestedAnswer: "Ketakutan terbesar mereka adalah downtime dan risiko kegagalan migrasi inti. Oleh karena itu, kita masuk dengan pendekatan Dual Engine dan migrasi bertahap, bukan 'big-bang replacement'."
      }
    }
  ],
  EN: [
    {
      id: 1,
      title: "Executive Profile & Professional Background",
      subtitle: "Harry M. Gultom – Senior Business Development Executive Candidate",
      category: "Profile & Value Delivery",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Build a highly credible first impression with the executive board regarding 16 years of enterprise B2B IT sales acumen and deep banking ecosystem navigation.",
        talkingPoints: [
          "Good morning. I'm Harry, bringing 16 years of proven experience across the IT industry and enterprise B2B sales.",
          "While I haven't held direct bank accounts as a solo individual contributor, my track record is deeply rooted in this ecosystem.",
          "I have extensive experience providing commercial leadership and support for sales teams handling tier-1 banks, as well as serving as Sales Manager leading banking-focused teams.",
          "I thoroughly understand the IT architecture, commercial dialect, and procurement governance of financial institutions.",
          "My core strength lies not only in opening new enterprise doors, but also in actively farming strategic long-term relationships to secure high retention and expand customer lifetime value."
        ],
        potentialQuestions: [
          "How do you position yourself for banking accounts without having served as a direct single-contributor account owner?"
        ],
        suggestedAnswer: "I position myself as a strategic commercial orchestrator. By leading and enabling sales teams for major banks over 16 years, I have mastered C-Level commercial dialogue, banking procurement committees, and aligning technical pre-sales with executive decision criteria."
      }
    },
    {
      id: 2,
      title: "Market Conditions, Potential & Competitor Positioning",
      subtitle: "Bank Indonesia BSPI 2030 Catalyst & OpenWay Migration Vector",
      category: "Market & Competitive Landscape",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Convince the panel that Harry clearly understands the current market window and exactly where OpenWay can capture maximum market share.",
        talkingPoints: [
          "The surging demand in the Indonesian market is heavily driven by Bank Indonesia's BSPI 2030 mandate, which requires modernized payment infrastructure.",
          "OpenWay's WAY4 platform already commands national dominance across tier-1 anchors: BRI, Finnet, and ASBANDA/BPDNet.",
          "However, the major commercial expansion vector lies in commercial and mid-tier banks whose legacy stacks (such as ACI or Fiserv) struggle to comply with open microservices mandates.",
          "Our BD mission is to enter their C-suite boardrooms ahead of rival vendors to secure early migration pipeline."
        ],
        potentialQuestions: [
          "Why are mid-tier banks hesitant to replace legacy systems despite BSPI compliance pressures?"
        ],
        suggestedAnswer: "Their primary concern is catastrophic downtime and migration risk. We overcome this with our proven Dual-Engine hybrid migration approach, avoiding high-risk big-bang switchovers."
      }
    }
  ]
};

export const getSlidesData = (lang: Language = 'IN'): SlideMetadata[] => {
  return SLIDES_DATA_BY_LANG[lang] || SLIDES_DATA_BY_LANG['IN'];
};

// Default export for backward compatibility
export const SLIDES_DATA = SLIDES_DATA_BY_LANG['IN'];
`;
fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts');

// ==========================================
// 2. Update src/slide/01/data.ts
// ==========================================
const slide01DataPath = path.join(__dirname, '../src/slide/01/data.ts');
const slide01DataContent = `export type Language = 'IN' | 'EN';

export interface ValuePillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  accentColor: string;
}

export interface CandidateProfile {
  name: string;
  role: string;
  targetCompany: string;
  experienceYears: string;
  tcvRecord: string;
  focusArea: string;
  readinessScore: number;
  readinessLabel: string;
  tpsCapacity: string;
  latencyBenchmark: string;
  quotaAttainment: string;
}

export interface ReadinessDimension {
  label: string;
  score: number;
  unit: string;
}

export const SLIDE01_DATA: Record<Language, {
  eyebrow: { category: string; subtitle: string };
  profile: CandidateProfile;
  description: string;
  quickStats: { label: string; value: string; sub: string }[];
  dimensionsLabel: string;
  dimensions: ReadinessDimension[];
  pillars: ValuePillar[];
  takeaway: { proof: string; alignment: string };
}> = {
  IN: {
    eyebrow: {
      category: "Profil Eksekutif",
      subtitle: "16 Tahun Pengalaman Enterprise IT & B2B Sales"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Kandidat Senior Business Development Executive",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Tahun Enterprise IT",
      tcvRecord: "16+ Tahun",
      focusArea: "Navigasi Akun Strategis & Retensi Tinggi",
      readinessScore: 100,
      readinessLabel: "Siap Diterjunkan",
      tpsCapacity: "Enterprise IT",
      latencyBenchmark: "Jembatan C-Level",
      quotaAttainment: "Retensi Tinggi"
    },
    description: "Membawa 16 tahun rekam jejak di industri IT dan enterprise B2B sales. Teruji memimpin dan mensupport tim komersial untuk bank-bank terkemuka, menguasai navigasi akun strategis, retensi tinggi, serta memaksimalkan customer lifetime value.",
    quickStats: [
      { label: "Keahlian B2B", value: "16+ Tahun", sub: "Enterprise IT" },
      { label: "Target Pasar", value: "Bank Tier-1", sub: "Lintas-Fungsi" },
      { label: "Fokus Inti", value: "Retensi Tinggi", sub: "LTV Strategis" }
    ],
    dimensionsLabel: "Kualifikasi Eksekutif Teruji",
    dimensions: [
      { label: "Pengalaman IT Enterprise", score: 100, unit: "16+ Tahun" },
      { label: "Kepemimpinan Tim Sales Bank", score: 100, unit: "Lintas-Fungsi" },
      { label: "Retensi Akun & Farming", score: 100, unit: "LTV Tinggi" }
    ],
    pillars: [
      {
        id: "account_navigation",
        index: "01",
        title: "Navigasi Akun Strategis",
        subtitle: "Manajemen Hubungan Organisasi & Retensi",
        metric: "Retensi Tinggi",
        metricLabel: "Kompetensi Inti",
        accentColor: "#1a73e8"
      },
      {
        id: "cross_functional_bridge",
        index: "02",
        title: "Jembatan Lintas-Fungsi",
        subtitle: "Memimpin & Mensupport Sales IT Perbankan",
        metric: "Perbankan Tier-1",
        metricLabel: "Ekosistem Teruji",
        accentColor: "#34a853"
      },
      {
        id: "value_delivery",
        index: "03",
        title: "Pengiriman Nilai Proaktif",
        subtitle: "Memaksimalkan Customer Lifetime Value",
        metric: "Ekspansi LTV",
        metricLabel: "Account Farming",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Keahlian membuka pintu baru, mengelola akun strategis, dan memimpin tim komersial di ekosistem perbankan.",
      alignment: "Kesiapan Enterprise: 100% Hari Pertama"
    }
  },
  EN: {
    eyebrow: {
      category: "Executive Profile",
      subtitle: "16 Years Enterprise IT & B2B Sales"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Senior Business Development Executive Candidate",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Years Enterprise IT",
      tcvRecord: "16+ Years",
      focusArea: "Strategic Account Navigation & Retention",
      readinessScore: 100,
      readinessLabel: "Ready to Deploy",
      tpsCapacity: "Enterprise IT",
      latencyBenchmark: "C-Level Bridge",
      quotaAttainment: "High Retention"
    },
    description: "Bringing 16 years of proven track record across IT and enterprise B2B sales. Proven commercial leadership and support for leading banks, mastering strategic account navigation, client retention, and maximizing customer lifetime value.",
    quickStats: [
      { label: "B2B Expertise", value: "16+ Years", sub: "Enterprise IT" },
      { label: "Target Sphere", value: "Tier-1 Banks", sub: "Cross-Functional" },
      { label: "Core Focus", value: "High Retention", sub: "Strategic LTV" }
    ],
    dimensionsLabel: "Proven Executive Qualifications",
    dimensions: [
      { label: "Enterprise IT Experience", score: 100, unit: "16+ Years" },
      { label: "Banking Team Leadership", score: 100, unit: "Cross-Functional" },
      { label: "Account Retention & Farming", score: 100, unit: "High LTV" }
    ],
    pillars: [
      {
        id: "account_navigation",
        index: "01",
        title: "Strategic Account Navigation",
        subtitle: "Organizational Management & Retention",
        metric: "High Retention",
        metricLabel: "Core Competency",
        accentColor: "#1a73e8"
      },
      {
        id: "cross_functional_bridge",
        index: "02",
        title: "Cross-Functional Bridge",
        subtitle: "Managing & Supporting Tech Sales for Banks",
        metric: "Tier-1 Banking",
        metricLabel: "Proven Ecosystem",
        accentColor: "#34a853"
      },
      {
        id: "value_delivery",
        index: "03",
        title: "Proactive Value Delivery",
        subtitle: "Maximizing Customer Lifetime Value",
        metric: "Expansion LTV",
        metricLabel: "Account Farming",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Expertise in opening new enterprise doors, navigating accounts, and leading commercial teams in banking.",
      alignment: "Enterprise Alignment: 100% Day-One"
    }
  }
};

// Legacy exports for compatibility
export const CANDIDATE_PROFILE = SLIDE01_DATA['IN'].profile;
export const VALUE_PILLARS = SLIDE01_DATA['IN'].pillars;
export const READINESS_DIMENSIONS = SLIDE01_DATA['IN'].dimensions;
`;
fs.writeFileSync(slide01DataPath, slide01DataContent, 'utf8');
console.log('[OK] Updated src/slide/01/data.ts');

// ==========================================
// 3. Update src/slide/01/container.tsx
// ==========================================
const slide01ContainerPath = path.join(__dirname, '../src/slide/01/container.tsx');
const slide01ContainerContent = `import {
  SLIDE01_DATA,
  Language,
  ValuePillar,
  CandidateProfile,
  ReadinessDimension
} from './data';

export interface Slide01Controller {
  eyebrow: { category: string; subtitle: string };
  profile: CandidateProfile;
  description: string;
  quickStats: { label: string; value: string; sub: string }[];
  dimensionsLabel: string;
  dimensions: ReadinessDimension[];
  pillars: ValuePillar[];
  takeaway: { proof: string; alignment: string };
  gaugeRadius: number;
  gaugeCircumference: number;
  gaugeOffset: number;
}

export function useSlide01Container(language: Language = 'IN'): Slide01Controller {
  const data = SLIDE01_DATA[language] || SLIDE01_DATA['IN'];
  
  const gaugeRadius = 45;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const gaugeOffset = gaugeCircumference - (data.profile.readinessScore / 100) * gaugeCircumference;

  return {
    eyebrow: data.eyebrow,
    profile: data.profile,
    description: data.description,
    quickStats: data.quickStats,
    dimensionsLabel: data.dimensionsLabel,
    dimensions: data.dimensions,
    pillars: data.pillars,
    takeaway: data.takeaway,
    gaugeRadius,
    gaugeCircumference,
    gaugeOffset
  };
}
`;
fs.writeFileSync(slide01ContainerPath, slide01ContainerContent, 'utf8');
console.log('[OK] Updated src/slide/01/container.tsx');

// ==========================================
// 4. Update src/slide/01/index.tsx
// ==========================================
const slide01IndexPath = path.join(__dirname, '../src/slide/01/index.tsx');
const slide01IndexContent = `import React from 'react';
import { useSlide01Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide01Props {
  language?: Language;
}

export const Slide01: React.FC<Slide01Props> = ({ language = 'IN' }) => {
  const {
    eyebrow,
    profile,
    description,
    quickStats,
    dimensionsLabel,
    dimensions,
    pillars,
    takeaway,
    gaugeRadius,
    gaugeCircumference,
    gaugeOffset
  } = useSlide01Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Main Executive Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Executive Identity & Fast Metrics */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>{eyebrow.category}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">{eyebrow.subtitle}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-blue-600 pt-0.5">
              {profile.role}
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* Quick Stats Line: Flat-Mounted, Tabular Inter Numbers, Zero-Badge */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100 text-left">
            {quickStats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">{stat.label}</div>
                <div className="text-sm font-bold text-slate-900 tabular-nums font-mono">{stat.value}</div>
                <div className="text-[10px] text-emerald-600 font-medium">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Command Center Visual + 100% Circular Readiness Speedometer */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Integrated Lottie & Isometric Architecture */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D />
          </div>

          {/* Circular Readiness Speedometer Gauge SVG: 100% Ready to Deploy (Zero-Click) */}
          <div className="md:col-span-5 flex flex-col items-center text-center border-l border-slate-100 pl-4 space-y-2.5">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 110 110">
                <circle
                  cx="55"
                  cy="55"
                  r={gaugeRadius}
                  stroke="#f1f5f9"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="55"
                  cy="55"
                  r={gaugeRadius}
                  stroke="#1a73e8"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={gaugeCircumference}
                  strokeDashoffset={gaugeOffset}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-slate-900 tabular-nums font-inter">
                  {profile.readinessScore}%
                </span>
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tight font-inter">
                  {profile.readinessLabel}
                </span>
              </div>
            </div>

            {/* Direct Open Executive Breakdown (Zero-Click, All Visible at Once) */}
            <div className="w-full space-y-1.5 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                {dimensionsLabel}
              </div>
              {dimensions.map((dim, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px]"
                >
                  <span className="truncate font-medium text-slate-700">{dim.label}</span>
                  <span className="font-mono font-bold text-blue-700 ml-2 shrink-0">
                    {dim.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Three Value Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Accents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => {
          const borderColors: Record<string, string> = {
            '#1a73e8': 'border-[#1a73e8] bg-[#e8f0fe]/40',
            '#34a853': 'border-[#34a853] bg-[#e6f4ea]/40',
            '#fbbc04': 'border-[#fbbc04] bg-[#fef7e0]/40',
          };
          const borderStyle = borderColors[pillar.accentColor] || 'border-blue-600 bg-slate-50/60';

          const textColors: Record<string, string> = {
            '#1a73e8': 'text-[#1a73e8]',
            '#34a853': 'text-[#34a853]',
            '#fbbc04': 'text-[#b08000]',
          };
          const textStyle = textColors[pillar.accentColor] || 'text-blue-700';

          return (
            <div
              key={pillar.id}
              className={"p-3 rounded-xl border-l-2 transition-all flex items-center justify-between " + borderStyle}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  {pillar.index}
                </span>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                    {pillar.title}
                  </h3>
                  <div className="text-[10px] text-slate-500 font-medium font-inter">
                    {pillar.subtitle}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={"text-xs font-mono font-bold " + textStyle}>
                  {pillar.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold text-[11px] font-mono">
          <span>{takeaway.alignment}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide01;
`;
fs.writeFileSync(slide01IndexPath, slide01IndexContent, 'utf8');
console.log('[OK] Updated src/slide/01/index.tsx');

// ==========================================
// 5. Update src/slide/02/data.ts
// ==========================================
const slide02DataPath = path.join(__dirname, '../src/slide/02/data.ts');
const slide02DataContent = `export type Language = 'IN' | 'EN';

export interface CompetitorMetric {
  feature: string;
  way4: string;
  legacy: string;
  status: 'superior' | 'advantage';
}

export interface MarketPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export interface InfrastructureHub {
  client: string;
  category: string;
  volume: string;
  status: string;
  color: string;
}

export const INFRASTRUCTURE_HUBS: InfrastructureHub[] = [
  { client: "Bank BRI", category: "Tier-1 Core Switching", volume: "100M+ Cards", status: "National Anchor", color: "#1a73e8" },
  { client: "Finnet", category: "National GPN Gateway", volume: "Multi-Million TPS", status: "Active Switch", color: "#34a853" },
  { client: "ASBANDA", category: "BPDNet Regional Hub", volume: "27 Regional Banks", status: "Consortium", color: "#fbbc04" },
  { client: "Mid-Tier Target", category: "Commercial Bank Migration", volume: "High Growth Pipeline", status: "Target Opportunity", color: "#1a73e8" }
];

export const SLIDE02_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  benchmarkLabels: {
    dimension: string;
    way4: string;
    legacy: string;
  };
  comparison: CompetitorMetric[];
  metrics: {
    advantageTitle: string;
    tcoTitle: string;
    tcoValue: string;
    tcoSub: string;
    velocityTitle: string;
    velocityValue: string;
    velocitySub: string;
    tpsTitle: string;
    tpsValue: string;
    tpsSub: string;
    anchorTitle: string;
    anchorValue: string;
    anchorSub: string;
  };
  pillars: MarketPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Kondisi Pasar & Potensi",
      catalyst: "Katalis Regulasi: BSPI 2030",
      title: "Pasar Pembayaran Indonesia & Vektor WAY4"
    },
    descriptionTitle: "Migrasi Monolitik Legasi ke Switching Cloud-Native",
    descriptionText: "Pasar switching perbankan Indonesia didominasi sistem legasi kaku (ACI / Fiserv) yang tertekan mandat BSPI 2030. OpenWay memimpin di Tier-1 nasional (BRI, Finnet, ASBANDA), membuka ceruk pertumbuhan besar pada migrasi bank komersial & menengah.",
    benchmarkLabels: {
      dimension: "Dimensi Arsitektur Utama",
      way4: "WAY4 Cloud",
      legacy: "Monolitik Legasi"
    },
    comparison: [
      {
        feature: "Time-to-Market",
        way4: "2 Minggu (Microservices)",
        legacy: "6 - 9 Bulan (Monolitik)",
        status: "superior"
      },
      {
        feature: "BSPI 2030 & SNAP BI",
        way4: "Dukungan Native Bawaan",
        legacy: "Patch Middleware Rumit",
        status: "superior"
      },
      {
        feature: "Agilitas Implementasi",
        way4: "Cloud-Native / Hybrid",
        legacy: "Hardware Kaku Eksklusif",
        status: "advantage"
      },
      {
        feature: "Profil TCO 5 Tahun",
        way4: "Fleksibel OPEX / CAPEX",
        legacy: "Biaya Pemeliharaan Tinggi",
        status: "superior"
      }
    ],
    metrics: {
      advantageTitle: "Keunggulan Finansial & Komersial",
      tcoTitle: "Reduksi TCO 5 Tahun",
      tcoValue: "Reduksi 40% 5 Thn",
      tcoSub: "Dibandingkan Monolitik Kaku",
      velocityTitle: "Kecepatan Peluncuran",
      velocityValue: "2 Minggu",
      velocitySub: "Microservices",
      tpsTitle: "Throughput",
      tpsValue: "10.000+",
      tpsSub: "TPS Cloud",
      anchorTitle: "Jangkar Nasional Teruji",
      anchorValue: "Tier-1 BRI, Finnet, ASBANDA",
      anchorSub: "Fondasi replikasi bank komersial menengah"
    },
    pillars: [
      {
        id: "legacy_landscape",
        index: "01",
        title: "Switching Legasi Volume Tinggi",
        subtitle: "Didominasi arsitektur kaku ACI / Fiserv di bawah tekanan tinggi",
        metric: "Saturasi Legasi",
        tag: "Kondisi Pasar",
        accentColor: "#ea4335"
      },
      {
        id: "bspi_catalyst",
        index: "02",
        title: "Mandat Katalis BSPI 2030",
        subtitle: "Kerangka Bank Indonesia mewajibkan infrastruktur terbuka & microservices",
        metric: "Mandat Regulasi",
        tag: "Katalis",
        accentColor: "#1a73e8"
      },
      {
        id: "openway_strength",
        index: "03",
        title: "Kekuatan Pasar WAY4 Tanpa Tanding",
        subtitle: "Tulang punggung teruji yang menggerakkan BRI, Finnet, dan ASBANDA",
        metric: "Dominasi Tier-1",
        tag: "Basis Teruji",
        accentColor: "#34a853"
      },
      {
        id: "next_wave",
        index: "04",
        title: "Gelombang Berikutnya: Bank Menengah",
        subtitle: "Bank komersial tertekan untuk migrasi ke switching cloud-native modern",
        metric: "Pipeline Mendesak",
        tag: "Pertumbuhan Baru",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Katalis BSPI 2030 Bank Indonesia mendesak bank komersial migrasi ke arsitektur modern berbiaya efisien.",
      target: "Target Pasar: Bank Komersial & Mid-Tier"
    }
  },
  EN: {
    header: {
      category: "Market Conditions & Potential",
      catalyst: "Regulatory Catalyst: BSPI 2030",
      title: "Indonesia Payment Market & WAY4 Vector"
    },
    descriptionTitle: "Legacy Monolith Migration to Cloud-Native Switching",
    descriptionText: "The Indonesian banking switching market is dominated by rigid legacy systems (ACI / Fiserv) pressured by the BSPI 2030 mandate. OpenWay leads in national Tier-1 (BRI, Finnet, ASBANDA), unlocking massive growth in commercial & mid-tier bank migration.",
    benchmarkLabels: {
      dimension: "Key Architectural Dimension",
      way4: "WAY4 Cloud",
      legacy: "Legacy Monolith"
    },
    comparison: [
      {
        feature: "Time-to-Market",
        way4: "2 Weeks (Microservices)",
        legacy: "6 - 9 Months (Monolith)",
        status: "superior"
      },
      {
        feature: "BSPI 2030 & SNAP BI",
        way4: "Native Built-in Support",
        legacy: "Heavy Middleware Patch",
        status: "superior"
      },
      {
        feature: "Deployment Agility",
        way4: "Cloud-Native / Hybrid",
        legacy: "Rigid Proprietary HW",
        status: "advantage"
      },
      {
        feature: "5-Year TCO Profile",
        way4: "Flexible OPEX / CAPEX",
        legacy: "Severe Maintenance Fees",
        status: "superior"
      }
    ],
    metrics: {
      advantageTitle: "Financial & Commercial Advantage",
      tcoTitle: "5-Year TCO Reduction",
      tcoValue: "40% 5-Yr Reduction",
      tcoSub: "Versus Rigid Monoliths",
      velocityTitle: "Launch Velocity",
      velocityValue: "2 Weeks",
      velocitySub: "Microservices",
      tpsTitle: "Throughput",
      tpsValue: "10,000+",
      tpsSub: "Cloud TPS",
      anchorTitle: "Proven National Anchor",
      anchorValue: "Tier-1 BRI, Finnet, ASBANDA",
      anchorSub: "Foundation for mid-tier replication"
    },
    pillars: [
      {
        id: "legacy_landscape",
        index: "01",
        title: "High-Volume Legacy Switching",
        subtitle: "Dominated by rigid ACI / Fiserv architectures under severe strain",
        metric: "Legacy Saturation",
        tag: "Market State",
        accentColor: "#ea4335"
      },
      {
        id: "bspi_catalyst",
        index: "02",
        title: "Mandatory BSPI 2030 Catalyst",
        subtitle: "Bank Indonesia framework mandates open infrastructure & microservices",
        metric: "Regulatory Mandate",
        tag: "Catalyst",
        accentColor: "#1a73e8"
      },
      {
        id: "openway_strength",
        index: "03",
        title: "Unrivaled WAY4 Market Strength",
        subtitle: "Proven backbone powering BRI, Finnet, and ASBANDA/BPDNet",
        metric: "Tier-1 Hegemony",
        tag: "Proven Base",
        accentColor: "#34a853"
      },
      {
        id: "next_wave",
        index: "04",
        title: "The Next Wave: Mid-Tier Banks",
        subtitle: "Commercial banks pressured to migrate to modern cloud-native switching",
        metric: "Urgent Pipeline",
        tag: "Next Growth",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Bank Indonesia BSPI 2030 catalyst urgently drives commercial banks to cost-efficient modern architecture.",
      target: "Target Market: Commercial & Mid-Tier Banks"
    }
  }
};

// Legacy exports for compatibility
export const MARKET_SUMMARY = {
  regulatoryDriver: "Bank Indonesia BSPI 2030",
  currentDominance: "Tier-1 BRI, Finnet, ASBANDA",
  growthTarget: "Commercial & Mid-Tier Banks",
  migrationTCO: "40% 5-Yr Reduction",
  timeToMarket: "2 Weeks vs 6-9 Months",
  scalability: "10,000+ TPS Cloud-Native"
};
export const COMPETITOR_COMPARISON = SLIDE02_DATA['IN'].comparison;
export const MARKET_PILLARS = SLIDE02_DATA['IN'].pillars;
`;
fs.writeFileSync(slide02DataPath, slide02DataContent, 'utf8');
console.log('[OK] Updated src/slide/02/data.ts');

// ==========================================
// 6. Update src/slide/02/container.tsx
// ==========================================
const slide02ContainerPath = path.join(__dirname, '../src/slide/02/container.tsx');
const slide02ContainerContent = `import { useState } from 'react';
import {
  SLIDE02_DATA,
  INFRASTRUCTURE_HUBS,
  Language,
  CompetitorMetric,
  MarketPillar,
  InfrastructureHub
} from './data';

export interface Slide02Controller {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  benchmarkLabels: {
    dimension: string;
    way4: string;
    legacy: string;
  };
  comparison: CompetitorMetric[];
  metrics: typeof SLIDE02_DATA['IN']['metrics'];
  hubs: InfrastructureHub[];
  pillars: MarketPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
  activeHubIndex: number;
  setActiveHubIndex: (index: number) => void;
}

export function useSlide02Container(language: Language = 'IN'): Slide02Controller {
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const data = SLIDE02_DATA[language] || SLIDE02_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    benchmarkLabels: data.benchmarkLabels,
    comparison: data.comparison,
    metrics: data.metrics,
    hubs: INFRASTRUCTURE_HUBS,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeHubIndex,
    setActiveHubIndex
  };
}
`;
fs.writeFileSync(slide02ContainerPath, slide02ContainerContent, 'utf8');
console.log('[OK] Updated src/slide/02/container.tsx');

// ==========================================
// 7. Update src/slide/02/index.tsx
// ==========================================
const slide02IndexPath = path.join(__dirname, '../src/slide/02/index.tsx');
const slide02IndexContent = `import React from 'react';
import { useSlide02Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide02Props {
  language?: Language;
}

export const Slide02: React.FC<Slide02Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    benchmarkLabels,
    comparison,
    metrics,
    pillars,
    takeaway,
    activeHubIndex,
    setActiveHubIndex
  } = useSlide02Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Slide Header: Rata Tengah 2 Baris (Sub Judul Kecil Diatas & Judul Utama Besar 1-Line) - Kecuali Slide 1 */}
      <div className="text-center space-y-1 mb-2 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Market & Positioning Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Market Context & Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Head-to-Head Technical Benchmark: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1">
              <span>{benchmarkLabels.dimension}</span>
              <span className="text-blue-600">{benchmarkLabels.way4}</span>
              <span className="text-red-500">{benchmarkLabels.legacy}</span>
            </div>

            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="p-2 rounded bg-slate-50/80 border border-slate-100 flex items-center justify-between text-[11px]"
              >
                <div className="font-medium text-slate-800 truncate max-w-[140px] sm:max-w-[160px]">
                  {item.feature}
                </div>
                <div className="flex items-center gap-1 font-mono font-bold text-blue-700 text-[10px]">
                  <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>{item.way4}</span>
                </div>
                <div className="flex items-center gap-1 font-mono font-medium text-slate-500 text-[10px]">
                  <XCircle className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{item.legacy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Infrastructure Command Center + Key Strategic Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Lottie Engine & National Hubs */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activeHubIndex={activeHubIndex}
              onSelectHub={setActiveHubIndex}
            />
          </div>

          {/* Strategic Metrics & Market Velocity (Zero-Click, Tabular Numbers) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-blue-50/50 border border-blue-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.tcoTitle}
                </div>
                <div className="text-2xl font-black text-blue-700 font-inter tabular-nums mt-0.5">
                  {metrics.tcoValue}
                </div>
                <div className="text-[10px] text-blue-600 font-medium">
                  {metrics.tcoSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.velocityTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.velocityValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.velocitySub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.tpsTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.tpsValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.tpsSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.anchorTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.anchorValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.anchorSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Market Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
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

export default Slide02;
`;
fs.writeFileSync(slide02IndexPath, slide02IndexContent, 'utf8');
console.log('[OK] Updated src/slide/02/index.tsx');

// ==========================================
// 8. Update src/header.tsx
// ==========================================
const headerPath = path.join(__dirname, '../src/header.tsx');
const headerContent = `import React from 'react';
import { Language } from './slide/slidesData';

export interface HeaderProps {
  currentSlideIndex?: number;
  totalSlides?: number;
  slideTitle?: string;
  category?: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  showNotes?: boolean;
  onToggleNotes?: () => void;
  onToggleOverview?: () => void;
  timerSeconds?: number;
  isTimerRunning?: boolean;
  onToggleTimer?: () => void;
  onResetTimer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 sm:px-10 md:px-16 lg:px-20 py-3 z-30 flex items-center justify-between gap-4 shrink-0 font-sans">
      {/* Left: Judul Utama & Sub Judul - Hitam Semua, No Circle Image */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs tracking-wider shrink-0 shadow-xs select-none">
          OW
        </div>
        <div className="flex flex-col text-left">
          <h1 className="text-sm sm:text-base font-extrabold text-black tracking-tight leading-tight">
            Sales Executive WAY4
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-black tracking-normal leading-tight mt-0.5">
            By Harry Gultom
          </p>
        </div>
      </div>

      {/* Right: Tab Bahasa IN | EN (Tanpa Icon Zoom In/Out) */}
      <div className="flex items-center shrink-0">
        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            onClick={() => onLanguageChange('IN')}
            className={"px-3 py-1 rounded-md text-xs font-bold transition-all " + (
              language === 'IN'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            )}
            title="Bahasa Indonesia"
            aria-label="Pilih Bahasa Indonesia"
          >
            IN
          </button>
          <span className="text-slate-300 px-1 text-xs select-none font-light">|</span>
          <button
            onClick={() => onLanguageChange('EN')}
            className={"px-3 py-1 rounded-md text-xs font-bold transition-all " + (
              language === 'EN'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            )}
            title="English Language"
            aria-label="Select English Language"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
`;
fs.writeFileSync(headerPath, headerContent, 'utf8');
console.log('[OK] Updated src/header.tsx');

// ==========================================
// 9. Update src/layout.tsx
// ==========================================
const layoutPath = path.join(__dirname, '../src/layout.tsx');
const layoutContent = `import React, { ReactNode } from 'react';
import Header, { HeaderProps } from './header';
import BottomNavigasi, { BottomNavigasiProps } from './bottomnavigasi';
import { X, BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { SlideMetadata } from './slide/slidesData';

export interface LayoutProps {
  children: ReactNode;
  headerProps: HeaderProps;
  bottomNavProps: BottomNavigasiProps;
  showNotes: boolean;
  onCloseNotes: () => void;
  activeSlideData: SlideMetadata;
  showOverview: boolean;
  onCloseOverview: () => void;
  allSlides: SlideMetadata[];
  onSelectSlide: (index: number) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps,
  bottomNavProps,
  showNotes,
  onCloseNotes,
  activeSlideData,
  showOverview,
  onCloseOverview,
  allSlides,
  onSelectSlide
}) => {
  return (
    <div className="h-screen w-screen bg-white text-slate-800 flex flex-col justify-between overflow-hidden relative select-none font-sans">
      {/* Top Header - Always Fixed at Top */}
      <Header {...headerProps} />

      {/* Main Slide Presentation Stage: Mounted directly on pure white canvas, matching Header & Footer horizontal spacing */}
      <main className="flex-1 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-3 overflow-hidden relative min-h-0 flex flex-col justify-between bg-transparent">
        {children}
      </main>

      {/* Bottom Navigation - Always Fixed at Bottom */}
      <BottomNavigasi {...bottomNavProps} />

      {/* Speaker Notes Drawer (Offcanvas / Side Panel) - Bright Google Light Theme */}
      {showNotes && (
        <aside 
          className="fixed top-0 right-0 h-full w-full sm:w-96 md:w-[420px] bg-white/98 border-l border-slate-200 shadow-2xl z-50 p-4 flex flex-col justify-between backdrop-blur-xl animate-in slide-in-from-right duration-200"
        >
          <div className="overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {headerProps.language === 'IN' ? 'Catatan Pembicara (Harry Gultom)' : 'Speaker Notes (Harry Gultom)'}
                </h3>
              </div>
              <button
                onClick={onCloseNotes}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                title="Tutup (Esc / N)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-3 p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs">
              <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
                Slide {activeSlideData.id} of {allSlides.length} • {activeSlideData.durationEstimate}
              </div>
              <div className="font-bold text-slate-900 mt-0.5 text-xs">{activeSlideData.title}</div>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                {headerProps.language === 'IN' ? 'Tujuan Strategis:' : 'Strategic Purpose:'}
              </div>
              <p className="text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 leading-relaxed">
                {activeSlideData.speakerNotes.purpose}
              </p>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                {headerProps.language === 'IN' ? 'Script / Poin Bicara Interview:' : 'Script / Key Talking Points:'}
              </div>
              <div className="space-y-1.5">
                {activeSlideData.speakerNotes.talkingPoints.map((point, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-800 leading-relaxed">
                    <span className="font-bold text-blue-600 mr-1.5">{idx + 1}.</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-1 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-amber-600" />
                {headerProps.language === 'IN' ? 'Antisipasi Pertanyaan Interviewer:' : 'Anticipated Interview Questions:'}
              </div>
              <div className="space-y-1.5">
                {activeSlideData.speakerNotes.potentialQuestions.map((q, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-950">
                    <strong className="text-amber-800 font-semibold">Q:</strong> "{q}"
                  </div>
                ))}
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-[11px] text-emerald-950 mt-1">
                  <strong className="text-emerald-700 font-semibold block mb-0.5">
                    {headerProps.language === 'IN' ? 'Saran Jawaban:' : 'Suggested Answer:'}
                  </strong>
                  {activeSlideData.speakerNotes.suggestedAnswer}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 text-center text-[10px] text-slate-500">
            {headerProps.language === 'IN' ? 'Tekan N untuk buka/tutup' : 'Press N to toggle notes'}
          </div>
        </aside>
      )}

      {/* Overview Grid Modal */}
      {showOverview && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl p-4 sm:p-5 shadow-2xl max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {headerProps.language === 'IN' ? 'Daftar Slide Presentasi OpenWay' : 'OpenWay Presentation Slide Index'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {headerProps.language === 'IN' ? 'Klik pada salah satu slide untuk melompat seketika' : 'Click on any slide to navigate directly'}
                </p>
              </div>
              <button
                onClick={onCloseOverview}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 overflow-y-auto p-1 max-h-[75vh]">
              {allSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(idx);
                    onCloseOverview();
                  }}
                  className={"p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between min-h-[95px] " + (
                    idx === headerProps.currentSlideIndex
                      ? 'bg-blue-50/90 border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                      <span className="font-mono font-bold text-blue-600">#{String(slide.id).padStart(2, '0')}</span>
                      <span>{slide.durationEstimate}</span>
                    </div>
                    <h4 className="text-[11px] font-bold text-slate-900 leading-tight line-clamp-2">
                      {slide.title}
                    </h4>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-200/80 text-[9px] text-slate-500 flex items-center justify-between">
                    <span className="text-blue-700 font-medium truncate">{slide.category}</span>
                    {idx === headerProps.currentSlideIndex && (
                      <span className="text-emerald-600 font-bold">
                        {headerProps.language === 'IN' ? 'Aktif' : 'Active'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
`;
fs.writeFileSync(layoutPath, layoutContent, 'utf8');
console.log('[OK] Updated src/layout.tsx');

// ==========================================
// 10. Update src/App.tsx
// ==========================================
const appPath = path.join(__dirname, '../src/App.tsx');
const appContent = `import React, { useState, useEffect, useCallback } from 'react';
import Layout from './layout';
import { getSlidesData, Language } from './slide/slidesData';
import { Slide01 } from './slide/01';
import { Slide02 } from './slide/02';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [language, setLanguage] = useState<Language>('IN');
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const slidesData = getSlidesData(language);
  const totalSlides = slidesData.length;
  const currentSlide = slidesData[currentSlideIndex] || slidesData[0];

  // Stopwatch timer
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Autoplay progression
  useEffect(() => {
    let autoInterval: any = null;
    if (isAutoplay && totalSlides > 1) {
      autoInterval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      }, 12000);
    }
    return () => clearInterval(autoInterval);
  }, [isAutoplay, totalSlides]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        setShowOverview((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 0:
        return <Slide01 language={language} />;
      case 1:
        return <Slide02 language={language} />;
      default:
        return <Slide01 language={language} />;
    }
  };

  return (
    <Layout
      headerProps={{
        currentSlideIndex,
        totalSlides,
        slideTitle: currentSlide.title,
        category: currentSlide.category,
        language,
        onLanguageChange: (lang: Language) => setLanguage(lang),
        showNotes,
        onToggleNotes: () => setShowNotes(!showNotes),
        onToggleOverview: () => setShowOverview(!showOverview),
        timerSeconds,
        isTimerRunning,
        onToggleTimer: () => setIsTimerRunning(!isTimerRunning),
        onResetTimer: () => setTimerSeconds(0)
      }}
      bottomNavProps={{
        currentSlideIndex,
        totalSlides,
        onNext: handleNext,
        onPrev: handlePrev,
        onSelectSlide: handleSelectSlide,
        isFirst: currentSlideIndex === 0,
        isLast: currentSlideIndex === totalSlides - 1,
        isAutoplay,
        onToggleAutoplay: () => setIsAutoplay(!isAutoplay),
        slideTitles: slidesData.map((s) => s.title)
      }}
      showNotes={showNotes}
      onCloseNotes={() => setShowNotes(false)}
      activeSlideData={currentSlide}
      showOverview={showOverview}
      onCloseOverview={() => setShowOverview(false)}
      allSlides={slidesData}
      onSelectSlide={handleSelectSlide}
    >
      {renderSlideContent()}
    </Layout>
  );
}
`;
fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx');

console.log('=== All files updated successfully! ===');
