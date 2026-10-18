const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const SLIDE_DIR = path.join(SRC_DIR, 'slide');

console.log('=== [EXECUTE-PROMPT.md] Updating Astragraphia Major Accounts Background in Slide 01 & slidesData.ts ===');

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
      subtitle: "16+ Tahun Enterprise IT · 12 Tahun Astragraphia (Astra Group)"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Kandidat Senior Business Development Executive",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Tahun Enterprise B2B IT",
      tcvRecord: "12 Thn Astragraphia",
      focusArea: "Major Accounts (FSI, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Siap Diterjunkan",
      tpsCapacity: "Astra Operations",
      latencyBenchmark: "Jembatan C-Level",
      quotaAttainment: "Retensi Tinggi"
    },
    description: "16+ tahun rekam jejak B2B IT Sales, termasuk 12 tahun di Astragraphia (Astra Group) sebagai Senior Sales & Sales Support yang mengelola Major Accounts lintas sektor: Finansial & Banking, Oil & Gas, Big Accounts Korporasi, serta Government (Kementerian, Lembaga & Badan Negara) berbasis disiplin Astra Business Operations (ABO).",
    quickStats: [
      { label: "Astragraphia", value: "12 Tahun", sub: "Astra Group Sales" },
      { label: "Major Accounts", value: "FSI & Oil/Gas", sub: "Big Corporate" },
      { label: "Sektor Publik", value: "Kementerian", sub: "Lembaga & Badan" }
    ],
    dimensionsLabel: "Fondasi Kompetensi & Tata Kelola",
    dimensions: [
      { label: "Astragraphia Major Accounts", score: 100, unit: "12 Tahun" },
      { label: "Astra Business Operations (ABO)", score: 100, unit: "Disiplin Astra" },
      { label: "Government (Kementerian & Lembaga)", score: 100, unit: "Setara LKPP" }
    ],
    pillars: [
      {
        id: "major_accounts",
        index: "01",
        title: "Major Account Mastery (Astragraphia)",
        subtitle: "12 Tahun Mengelola Akun Finansial, Oil & Gas dan Big Corporate",
        metric: "12 Thn Astra",
        metricLabel: "Major Accounts",
        accentColor: "#1a73e8"
      },
      {
        id: "astra_operations",
        index: "02",
        title: "Astra Business Operations (ABO)",
        subtitle: "Standar Tata Kelola Korporasi, Disiplin Sales & Customer Retention",
        metric: "Astra Standard",
        metricLabel: "Disiplin Operasi",
        accentColor: "#34a853"
      },
      {
        id: "government_governance",
        index: "03",
        title: "Government & Enterprise Governance",
        subtitle: "Kementerian, Lembaga Negara, Badan & Standar Pengadaan Bersih",
        metric: "100% Auditable",
        metricLabel: "Nol Sengketa",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "Pengalaman 12 tahun Astragraphia memegang Major Accounts (FSI, Oil & Gas, Gov) berpadu disiplin Astra Business Operations untuk melipatgandakan penetrasi WAY4.",
      alignment: "Kesiapan Enterprise: 100% Hari Pertama"
    }
  },
  EN: {
    eyebrow: {
      category: "Executive Profile",
      subtitle: "16+ Years Enterprise IT · 12 Years Astragraphia (Astra Group)"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Senior Business Development Executive Candidate",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Years Enterprise B2B IT",
      tcvRecord: "12 Yrs Astragraphia",
      focusArea: "Major Accounts (FSI, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Ready to Deploy",
      tpsCapacity: "Astra Operations",
      latencyBenchmark: "C-Level Bridge",
      quotaAttainment: "High Retention"
    },
    description: "16+ years of enterprise B2B IT sales track record, including 12 dedicated years at Astragraphia (Astra Group) as Senior Sales & Sales Support managing high-stakes Major Accounts across Financial & Banking, Oil & Gas, Big Corporates, and Government (Ministries, State Agencies & Public Bodies) powered by Astra Business Operations (ABO) discipline.",
    quickStats: [
      { label: "Astragraphia", value: "12 Years", sub: "Astra Group Sales" },
      { label: "Major Accounts", value: "FSI & Oil/Gas", sub: "Big Corporate" },
      { label: "Public Sector", value: "Ministries", sub: "Agencies & Bodies" }
    ],
    dimensionsLabel: "Competency & Governance Foundation",
    dimensions: [
      { label: "Astragraphia Major Accounts", score: 100, unit: "12 Years" },
      { label: "Astra Business Operations (ABO)", score: 100, unit: "Astra Standard" },
      { label: "Government (Ministries & Agencies)", score: 100, unit: "LKPP Compliant" }
    ],
    pillars: [
      {
        id: "major_accounts",
        index: "01",
        title: "Major Account Mastery (Astragraphia)",
        subtitle: "12 Years Managing Financial, Oil & Gas, and Big Corporate Accounts",
        metric: "12 Yrs Astra",
        metricLabel: "Major Accounts",
        accentColor: "#1a73e8"
      },
      {
        id: "astra_operations",
        index: "02",
        title: "Astra Business Operations (ABO)",
        subtitle: "World-Class Corporate Governance, Sales Discipline & Client Retention",
        metric: "Astra Standard",
        metricLabel: "Operational Rigor",
        accentColor: "#34a853"
      },
      {
        id: "government_governance",
        index: "03",
        title: "Government & Enterprise Governance",
        subtitle: "Ministries, State Agencies, Public Bodies & Clean Procurement Standards",
        metric: "100% Auditable",
        metricLabel: "Zero Disputes",
        accentColor: "#fbbc04"
      }
    ],
    takeaway: {
      proof: "12 years at Astragraphia commanding Major Accounts (FSI, Oil & Gas, Gov) combined with Astra Business Operations discipline to accelerate WAY4 market leadership.",
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

// 2. Update speaker notes in src/slide/slidesData.ts for Slide 01
const slidesDataPath = path.join(SLIDE_DIR, 'slidesData.ts');
let sdContent = fs.readFileSync(slidesDataPath, 'utf8');

// Replace Slide 01 in IN
const inSlide1OldRegex = /\{\s*id:\s*1,\s*title:\s*"Profil Eksekutif[\s\S]*?suggestedAnswer:[\s\S]*?\}\s*\},/m;
const inSlide1New = `{
      id: 1,
      title: "Profil Eksekutif & Latar Belakang Profesional",
      subtitle: "Harry M. Gultom – 16+ Tahun IT B2B, 12 Tahun Astragraphia (Astra Group)",
      category: "Profil & Nilai Tambah",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membangun impresi awal yang sangat kredibel, otentik, dan terpercaya di hadapan dewan direksi mengenai 12 tahun pengalaman di Astragraphia (Astra Group) mengelola Major Accounts (Finansial, Oil & Gas, Big Accounts, Government), disiplin Astra Business Operations (ABO), serta kesiapan memimpin bisnis WAY4.",
        talkingPoints: [
          "Selamat pagi Bapak/Ibu Dewan Direksi dan Tim Evaluator OpenWay. Saya Harry M. Gultom, membawa 16+ tahun pengalaman dedikasi di industri IT dan B2B enterprise sales.",
          "Sebagian besar perjalanan profesional saya—selama 12 tahun penuh—saya dedikasikan di PT Astra Graphia Tbk (Astragraphia), bagian dari ekosistem konglomerasi Astra International.",
          "Di Astragraphia, saya memegang peran sebagai Sales dan Senior Sales Support yang secara khusus mengelola akun-akun yang diklasifikasikan sebagai Major Accounts (Big Accounts).",
          "Portofolio Major Accounts yang saya tangani sangat komprehensif, mencakup sektor Finansial & Industri Perbankan, sektor Minyak & Gas (Oil & Gas), Big Corporate Accounts, serta Sektor Pemerintahan (Kementerian, Lembaga Negara, dan Badan Pemerintahan).",
          "Dari Astragraphia dan Astra Group, saya menyerap standar Astra Business Operations (ABO) — metodologi manajemen korporasi kelas dunia yang menanamkan disiplin eksekusi, ketajaman analisis kebutuhan klien, tata kelola pengadaan yang bersih, dan kemampuan menjaga retensi akun eksisting dalam jangka panjang.",
          "Meskipun di perbankan saya bertindak sebagai commercial orchestrator dan support komersial senior bagi tim sales yang menangani bank, pengalaman 12 tahun mengelola Major Accounts di Astra ini memberi saya keunggulan unik: saya sangat fasih berbicara di tingkat direksi C-Level, memahami dinamika pengadaan institusional yang rumit, dan siap membawa kredibilitas ini untuk memperluas pasar WAY4."
        ],
        potentialQuestions: [
          "Bagaimana pengalaman 12 tahun di Astragraphia memegang Major Accounts relevan dengan penjualan platform switching perbankan WAY4?",
          "Bagaimana Anda menerapkan prinsip Astra Business Operations (ABO) dalam penetrasi pasar OpenWay?"
        ],
        suggestedAnswer: "Major Accounts di Astragraphia mencakup perbankan finansial, oil & gas, dan kementerian dengan nilai kontrak puluhan miliar dan proses birokrasi yang kompleks. Prinsip Astra Business Operations (ABO) melatih saya untuk membedah kebutuhan bisnis secara terstruktur, membangun business case finansial TCO yang akurat, serta menjaga kepatuhan dan integritas pengadaan 100% tanpa sengketa. Kematangan ini membuat saya siap langsung berhadapan dengan direksi bank target WAY4 tanpa masa adaptasi."
      }
    },`;

sdContent = sdContent.replace(inSlide1OldRegex, inSlide1New);

// Replace Slide 01 in EN
const enSlide1OldRegex = /\{\s*id:\s*1,\s*title:\s*"Executive Profile[\s\S]*?suggestedAnswer:[\s\S]*?\}\s*\},/m;
const enSlide1New = `{
      id: 1,
      title: "Executive Profile & Professional Background",
      subtitle: "Harry M. Gultom – 16+ Years B2B IT, 12 Years Astragraphia (Astra Group)",
      category: "Profile & Value Proposition",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Establish an immediate, highly authentic executive impression regarding 12 years of dedicated leadership at Astragraphia (Astra Group) managing Major Accounts across Financial/Banking, Oil & Gas, Big Corporates, and Government, backed by Astra Business Operations (ABO) discipline.",
        talkingPoints: [
          "Good morning to the Board of Directors and OpenWay Evaluation Panel. I am Harry M. Gultom, bringing over 16 years of dedicated experience in enterprise IT and B2B technology sales.",
          "A foundational 12-year chapter of my career was spent at PT Astra Graphia Tbk (Astragraphia), a prominent member of the Astra International conglomerate.",
          "At Astragraphia, I served as Sales and Senior Sales Support with dedicated responsibility for Major Accounts (Big Enterprise Accounts).",
          "My portfolio of Major Accounts spanned the Financial & Banking Industry, Oil & Gas/Energy sector, Big Corporates, and Government sectors including Ministries, State Agencies, and Public Institutions.",
          "From Astra Group, I internalized the rigorous discipline of Astra Business Operations (ABO) — a world-class operating model instilling structured deal qualification, precise financial modeling, impeccable commercial governance, and exceptional long-term client retention.",
          "Having led commercial strategy and supported enterprise sales teams for leading financial institutions, this 12-year Major Account foundation equips me with immediate C-Suite fluency and institutional procurement mastery to accelerate OpenWay's WAY4 expansion."
        ],
        potentialQuestions: [
          "How does your 12-year Astragraphia Major Accounts background directly translate to selling WAY4 core banking platforms?",
          "How will you apply Astra Business Operations (ABO) discipline to OpenWay's sales pipeline?"
        ],
        suggestedAnswer: "Astragraphia Major Accounts encompass multi-million dollar contracts with top banks, multinational oil & gas majors, and government ministries. Astra Business Operations (ABO) trained me in rigorous stakeholder discovery, verified financial TCO modeling, and uncompromised procurement compliance. This institutional maturity enables me to engage bank CTOs and Boardrooms from Day One with zero ramp-up delay."
      }
    },`;

sdContent = sdContent.replace(enSlide1OldRegex, enSlide1New);

fs.writeFileSync(slidesDataPath, sdContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts Slide 01 metadata and speaker notes');

console.log('=== [EXECUTE-PROMPT.md] All updates for Astragraphia background completed! ===');
