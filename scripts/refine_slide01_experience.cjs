const fs = require('fs');
const path = require('path');

const SLIDE_DIR = path.join(__dirname, '../src/slide');

console.log('=== [EXECUTE-PROMPT.md] Refining Slide 01 & slidesData.ts Experience Clarification ===');

// 1. Update src/slide/01/data.ts
const s01DataPath = path.join(SLIDE_DIR, '01/data.ts');
const newS01Data = `export type Language = 'IN' | 'EN';

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
      subtitle: "Total 16 Tahun Karier B2B IT · Spesifik 12 Tahun di Astragraphia (Astra Group)"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Kandidat Senior Business Development Executive",
      targetCompany: "OpenWay Group",
      experienceYears: "Total 16 Tahun B2B IT",
      tcvRecord: "12 Thn di Astragraphia",
      focusArea: "Major Accounts (FSI, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Siap Diterjunkan",
      tpsCapacity: "Astra Operations",
      latencyBenchmark: "Jembatan C-Level",
      quotaAttainment: "Retensi Tinggi"
    },
    description: "Membawa total 16 tahun rekam jejak karier di industri IT dan enterprise B2B sales (keseluruhan mencakup Astra), di mana 12 tahun di antaranya secara spesifik didedikasikan di Astragraphia (Astra Group) mengelola Major Accounts: Finansial & Banking, Oil & Gas, Big Accounts, serta Government (Kementerian, Lembaga & Badan Negara) berbasis disiplin Astra Business Operations (ABO).",
    quickStats: [
      { label: "Total Karier", value: "16 Tahun", sub: "Enterprise B2B IT" },
      { label: "Spesifik Astra", value: "12 Tahun", sub: "Astragraphia Sales" },
      { label: "Portofolio", value: "FSI, Oil/Gas", sub: "Gov & Big Accounts" }
    ],
    dimensionsLabel: "Fondasi Rekam Jejak & Tata Kelola",
    dimensions: [
      { label: "Total Pengalaman B2B Enterprise IT", score: 100, unit: "16 Tahun Total" },
      { label: "Spesifik di Astragraphia (Astra Group)", score: 100, unit: "12 Tahun Major Accounts" },
      { label: "Astra Business Operations (ABO) & Gov", score: 100, unit: "Standar Astra & LKPP" }
    ],
    pillars: [
      {
        id: "total_experience",
        index: "01",
        title: "Total 16 Tahun Karier (12 Tahun Astra)",
        subtitle: "Rekam Jejak Enterprise B2B IT, 12 Tahun Spesifik di Astragraphia",
        metric: "16 Thn Total",
        metricLabel: "Total Karier",
        accentColor: "#1a73e8"
      },
      {
        id: "major_accounts",
        index: "02",
        title: "Major Accounts (FSI, Oil & Gas, Gov)",
        subtitle: "Senior Sales Support Akun Perbankan, Energi & Kementerian / Lembaga",
        metric: "Major Accounts",
        metricLabel: "Spesifik Astra",
        accentColor: "#34a853"
      },
      {
        id: "astra_operations",
        index: "03",
        title: "Astra Business Operations (ABO)",
        subtitle: "Standar Tata Kelola Korporasi Astra, Disiplin Sales & 100% Audit-Ready",
        metric: "Astra Standard",
        metricLabel: "Disiplin Operasi",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Total 16 tahun karier B2B IT dengan 12 tahun spesifik di Astragraphia mengelola Major Accounts (FSI, Oil & Gas, Gov) berdisiplin Astra Business Operations untuk akselerasi WAY4.",
      alignment: "Kesiapan Enterprise: 100% Hari Pertama"
    }
  },
  EN: {
    eyebrow: {
      category: "Executive Profile",
      subtitle: "Total 16 Years B2B IT Career · 12 Dedicated Years at Astragraphia (Astra Group)"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Senior Business Development Executive Candidate",
      targetCompany: "OpenWay Group",
      experienceYears: "Total 16 Years B2B IT",
      tcvRecord: "12 Yrs at Astragraphia",
      focusArea: "Major Accounts (FSI, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Ready to Deploy",
      tpsCapacity: "Astra Operations",
      latencyBenchmark: "C-Level Bridge",
      quotaAttainment: "High Retention"
    },
    description: "Bringing a total 16-year career track record across enterprise IT and B2B sales (inclusive of Astra), with 12 dedicated years specifically at Astragraphia (Astra Group) managing Major Accounts: Financial & Banking, Oil & Gas, Big Corporate Accounts, and Government (Ministries, State Agencies & Public Bodies) powered by Astra Business Operations (ABO) discipline.",
    quickStats: [
      { label: "Total Career", value: "16 Years", sub: "Enterprise B2B IT" },
      { label: "Specific Astra", value: "12 Years", sub: "Astragraphia Sales" },
      { label: "Portfolio", value: "FSI, Oil/Gas", sub: "Gov & Big Accounts" }
    ],
    dimensionsLabel: "Track Record & Governance Foundation",
    dimensions: [
      { label: "Total Enterprise B2B IT Career", score: 100, unit: "16 Years Total" },
      { label: "Specific at Astragraphia (Astra Group)", score: 100, unit: "12 Years Major Accounts" },
      { label: "Astra Business Operations (ABO) & Gov", score: 100, unit: "Astra Standard & LKPP" }
    ],
    pillars: [
      {
        id: "total_experience",
        index: "01",
        title: "Total 16 Years Career (12 Years Astra)",
        subtitle: "Enterprise B2B IT Track Record with 12 Years Specifically at Astragraphia",
        metric: "16 Yrs Total",
        metricLabel: "Total Career",
        accentColor: "#1a73e8"
      },
      {
        id: "major_accounts",
        index: "02",
        title: "Major Accounts (FSI, Oil & Gas, Gov)",
        subtitle: "Senior Sales Support for Banking, Energy & Ministries / State Agencies",
        metric: "Major Accounts",
        metricLabel: "Specific Astra",
        accentColor: "#34a853"
      },
      {
        id: "astra_operations",
        index: "03",
        title: "Astra Business Operations (ABO)",
        subtitle: "Astra Corporate Governance Standards, Sales Discipline & 100% Audit Readiness",
        metric: "Astra Standard",
        metricLabel: "Operational Rigor",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Total 16-year B2B IT career with 12 specific years commanding Astragraphia Major Accounts (FSI, Oil & Gas, Gov) backed by Astra Business Operations discipline.",
      alignment: "Enterprise Alignment: 100% Day-One"
    }
  }
};

// Legacy exports for compatibility
export const CANDIDATE_PROFILE = SLIDE01_DATA['IN'].profile;
export const VALUE_PILLARS = SLIDE01_DATA['IN'].pillars;
export const READINESS_DIMENSIONS = SLIDE01_DATA['IN'].dimensions;
`;

fs.writeFileSync(s01DataPath, newS01Data, 'utf8');
console.log('[OK] Updated src/slide/01/data.ts');

// 2. Update src/slide/slidesData.ts Slide 01
const slidesDataPath = path.join(SLIDE_DIR, 'slidesData.ts');
let sdContent = fs.readFileSync(slidesDataPath, 'utf8');

const inSlide1OldRegex = /\{\s*id:\s*1,\s*title:\s*"Profil Eksekutif[\s\S]*?suggestedAnswer:[\s\S]*?\}\s*\},/m;
const inSlide1New = `{
      id: 1,
      title: "Profil Eksekutif & Latar Belakang Profesional",
      subtitle: "Harry M. Gultom – Total 16 Tahun IT B2B (Spesifik 12 Tahun di Astragraphia - Astra Group)",
      category: "Profil & Nilai Tambah",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membangun impresi awal yang sangat kredibel, proporsional, dan terpercaya di hadapan dewan direksi: total karier 16 tahun B2B IT (sudah mencakup keseluruhan dengan Astra), di mana 12 tahun di antaranya secara spesifik dihabiskan di Astragraphia (Astra Group) mengelola Major Accounts (Finansial, Oil & Gas, Big Accounts, Government), didukung disiplin Astra Business Operations (ABO).",
        talkingPoints: [
          "Selamat pagi Bapak/Ibu Dewan Direksi dan Tim Evaluator OpenWay. Saya Harry M. Gultom.",
          "Total perjalanan karier saya di industri IT dan enterprise B2B sales adalah 16 tahun secara keseluruhan — angka 16 tahun ini sudah mencakup keseluruhan perjalanan karier saya bersama ekosistem Astra.",
          "Di dalam rentang 16 tahun tersebut, tonggak terpenting selama 12 tahun penuh secara spesifik saya dedikasikan di PT Astra Graphia Tbk (Astragraphia), bagian dari ekosistem konglomerasi Astra International.",
          "Di Astragraphia selama 12 tahun tersebut, saya memegang peran sebagai Sales dan Senior Sales Support yang secara khusus mengelola akun-akun yang diklasifikasikan sebagai Major Accounts (Big Accounts).",
          "Portofolio Major Accounts yang saya tangani sangat komprehensif, mencakup sektor Finansial & Industri Perbankan, sektor Minyak & Gas (Oil & Gas), Big Corporate Accounts, serta Sektor Pemerintahan (Kementerian, Lembaga Negara, dan Badan Pemerintahan).",
          "Selama 12 tahun di Astra, saya dibentuk oleh disiplin Astra Business Operations (ABO) — metodologi manajemen operasional Astra kelas dunia yang menanamkan disiplin eksekusi terstruktur, ketajaman analisis kebutuhan bisnis, akurasi pemodelan komersial, dan kepatuhan pengadaan yang bersih tanpa sengketa.",
          "Meskipun di perbankan saya bertindak sebagai commercial orchestrator dan support komersial senior bagi tim sales yang menangani bank, pengalaman 12 tahun mengelola Major Accounts di Astra ini memberi saya keunggulan unik: saya sangat fasih berbicara di tingkat direksi C-Level, memahami dinamika pengadaan institusional yang rumit, dan memiliki ketahanan hubungan (relationship endurance) untuk menjaga retensi akun eksisting sekaligus mengonversi peluang baru."
        ],
        potentialQuestions: [
          "Bisa diperjelas komposisi pengalaman 16 tahun total dan 12 tahun di Astragraphia?",
          "Bagaimana pengalaman 12 tahun di Astragraphia memegang Major Accounts relevan dengan penjualan platform switching perbankan WAY4?"
        ],
        suggestedAnswer: "Total 16 tahun adalah keseluruhan perjalanan karier saya di industri B2B IT sales. Dari 16 tahun tersebut, 12 tahun secara spesifik saya habiskan di Astragraphia memegang Major Accounts (Finansial, Oil & Gas, Big Accounts, dan Kementerian), sementara tahun-tahun lainnya saya bertindak mensupport dan mengarahkan tim sales untuk akun-akun perbankan enterprise. Pengalaman di Astra dengan standar Astra Business Operations (ABO) melatih saya membedah kebutuhan bisnis C-Level secara terstruktur, membangun business case finansial TCO yang akurat, serta menjaga kepatuhan pengadaan 100% tanpa sengketa."
      }
    },`;

sdContent = sdContent.replace(inSlide1OldRegex, inSlide1New);

const enSlide1OldRegex = /\{\s*id:\s*1,\s*title:\s*"Executive Profile[\s\S]*?suggestedAnswer:[\s\S]*?\}\s*\},/m;
const enSlide1New = `{
      id: 1,
      title: "Executive Profile & Professional Background",
      subtitle: "Harry M. Gultom – Total 16 Years B2B IT (12 Specific Years at Astragraphia - Astra Group)",
      category: "Profile & Value Proposition",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Establish an authentic, crystal-clear executive impression: 16 years total enterprise B2B IT career (inclusive of Astra), with 12 dedicated years specifically at Astragraphia (Astra Group) managing Major Accounts across Financial/Banking, Oil & Gas, Big Corporates, and Government, backed by Astra Business Operations (ABO) discipline.",
        talkingPoints: [
          "Good morning to the Board of Directors and OpenWay Evaluation Panel. I am Harry M. Gultom.",
          "My total professional career across enterprise IT and B2B sales spans 16 years overall — this 16-year figure encompasses my entire career journey including my tenure with the Astra ecosystem.",
          "Within this 16-year timeline, a core milestone of 12 full dedicated years was spent specifically at PT Astra Graphia Tbk (Astragraphia), a core member of the Astra International conglomerate.",
          "At Astragraphia over those 12 years, I served as Sales and Senior Sales Support with dedicated responsibility for Major Accounts (Big Enterprise Accounts).",
          "My portfolio of Major Accounts spanned the Financial & Banking Industry, Oil & Gas/Energy sector, Big Corporates, and Government sectors including Ministries, State Agencies, and Public Institutions.",
          "Throughout my 12 years at Astra, I was molded by Astra Business Operations (ABO) — Astra's world-class operating model instilling structured deal qualification, precise financial modeling, impeccable commercial governance, and exceptional long-term client retention.",
          "Having led commercial strategy and supported enterprise sales teams for leading financial institutions, this 12-year Major Account foundation equips me with immediate C-Suite fluency and institutional procurement mastery to accelerate OpenWay's WAY4 expansion."
        ],
        potentialQuestions: [
          "Could you clarify the composition between your 16 years overall career and 12 years at Astragraphia?",
          "How does your 12-year Astragraphia Major Accounts background directly translate to selling WAY4 core banking platforms?"
        ],
        suggestedAnswer: "The 16 years represents my total overall career across B2B enterprise IT sales. Within those 16 years, 12 years were specifically dedicated at Astragraphia managing Major Accounts (Financial, Oil & Gas, Big Corporates, and Government), while other years involved leading and supporting commercial sales teams for enterprise banking accounts. Astra Business Operations (ABO) trained me in rigorous stakeholder discovery, verified financial TCO modeling, and uncompromised procurement compliance, enabling me to engage bank CTOs and Boardrooms from Day One."
      }
    },`;

sdContent = sdContent.replace(enSlide1OldRegex, enSlide1New);

fs.writeFileSync(slidesDataPath, sdContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts Slide 01 metadata and speaker notes');

console.log('=== [EXECUTE-PROMPT.md] All updates for experience clarification completed! ===');
