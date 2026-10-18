export type Language = 'IN' | 'EN';

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
      subtitle: "16+ Tahun Enterprise IT B2B"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Kandidat Senior Business Development Executive",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Tahun Total IT B2B",
      tcvRecord: "12 Tahun di Astragraphia",
      focusArea: "Major Accounts (Financial, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Siap Diterjunkan",
      tpsCapacity: "Astra Operations",
      latencyBenchmark: "Jembatan C-Level",
      quotaAttainment: "Retensi Tinggi"
    },
    description: "Membawa 16+ tahun rekam jejak profesional di industri IT B2B Enterprise secara komprehensif: 12 tahun berdedikasi di PT Astra Graphia Tbk menangani Major Accounts strategis (Financial & Industry, Oil & Gas, dan Government), serta diperkuat kepemimpinan manajerial sebagai Branch Manager di PT Perdana Jatiputra dan Nasional Sales Manager di PT SMI Tbk. Kombinasi tata kelola enterprise terstruktur dan eksekusi komersial tingkat tinggi siap mengakselerasi penetrasi pasar platform OpenWay WAY4.",
    quickStats: [
      { label: "Total Karir IT", value: "16+ Tahun", sub: "B2B Enterprise" },
      { label: "Spesifik Astra", value: "12 Tahun", sub: "PT Astra Graphia Tbk" },
      { label: "Manajerial & Sales", value: "BM & NSM", sub: "Perdana & SMI Tbk" }
    ],
    dimensionsLabel: "Portofolio Major Account & Pengalaman Manajerial",
    dimensions: [
      { label: "Major Accounts (Astragraphia)", score: 100, unit: "FSI · Migas · Gov" },
      { label: "Branch Manager (PT Perdana Jatiputra)", score: 100, unit: "Kepemimpinan Cabang" },
      { label: "Nasional Sales Manager (PT SMI Tbk)", score: 100, unit: "Cakupan Nasional" }
    ],
    pillars: [
      {
        id: "major_accounts",
        index: "01",
        title: "Major Account Sales & Support (Astragraphia)",
        subtitle: "12 Tahun Memegang Akun Financial & Industry, Oil & Gas, dan Big Accounts",
        metric: "12 Thn di Astra",
        metricLabel: "Major Accounts",
        accentColor: "#2563eb"
      },
      {
        id: "perdana_jatiputra",
        index: "02",
        title: "Branch Manager (PT Perdana Jatiputra)",
        subtitle: "Kepemimpinan Operasional Cabang, Penetrasi Solusi Enterprise & P&L",
        metric: "Branch Manager",
        metricLabel: "PT Perdana Jatiputra",
        accentColor: "#2563eb"
      },
      {
        id: "smi_tbk",
        index: "03",
        title: "Nasional Sales Manager (PT SMI Tbk)",
        subtitle: "Ekspansi Penjualan Skala Nasional, Tata Kelola Tim & Kemitraan Strategis B2B",
        metric: "National Sales",
        metricLabel: "PT SMI Tbk",
        accentColor: "#2563eb"
      }
    ],
    takeaway: {
      proof: "Fondasi 16+ tahun IT: 12 tahun di Astragraphia (FSI/Migas/Gov), Branch Manager PT Perdana Jatiputra, dan Nasional Sales Manager PT SMI Tbk siap mempercepat ekspansi WAY4.",
      alignment: "Kesiapan Eksekutif: 100% Hari Pertama"
    }
  },
  EN: {
    eyebrow: {
      category: "Executive Profile",
      subtitle: "16+ Years Enterprise B2B IT"
    },
    profile: {
      name: "Harry M. Gultom",
      role: "Senior Business Development Executive Candidate",
      targetCompany: "OpenWay Group",
      experienceYears: "16+ Years Total IT B2B",
      tcvRecord: "12 Years at Astragraphia",
      focusArea: "Major Accounts (Financial, Oil & Gas, Gov)",
      readinessScore: 100,
      readinessLabel: "Ready to Deploy",
      tpsCapacity: "Enterprise Operations",
      latencyBenchmark: "C-Level Bridge",
      quotaAttainment: "High Retention"
    },
    description: "Bringing 16+ years of comprehensive B2B enterprise IT sales leadership: 12 dedicated years at PT Astra Graphia Tbk managing high-impact Major Accounts across Financial & Industry, Oil & Gas, and Government, complemented by executive leadership as Branch Manager at PT Perdana Jatiputra and National Sales Manager at PT SMI Tbk. Ready to accelerate market penetration and C-level engagements for OpenWay WAY4.",
    quickStats: [
      { label: "Total IT Career", value: "16+ Years", sub: "Enterprise B2B" },
      { label: "Dedicated at Astra", value: "12 Years", sub: "PT Astra Graphia Tbk" },
      { label: "Managerial Scope", value: "BM & NSM", sub: "Perdana & SMI Tbk" }
    ],
    dimensionsLabel: "Executive Leadership & Major Account Track Record",
    dimensions: [
      { label: "Major Accounts (Astragraphia)", score: 100, unit: "FSI · Energy · Gov" },
      { label: "Branch Manager (PT Perdana Jatiputra)", score: 100, unit: "Branch Leadership" },
      { label: "National Sales Manager (PT SMI Tbk)", score: 100, unit: "Nationwide Scope" }
    ],
    pillars: [
      {
        id: "major_accounts",
        index: "01",
        title: "Major Account Sales & Support (Astragraphia)",
        subtitle: "12 Years Managing Financial & Industry, Oil & Gas, and Big Enterprise Accounts",
        metric: "12 Yrs at Astra",
        metricLabel: "Major Accounts",
        accentColor: "#2563eb"
      },
      {
        id: "perdana_jatiputra",
        index: "02",
        title: "Branch Manager (PT Perdana Jatiputra)",
        subtitle: "Branch Operational Leadership, Enterprise Solution Sales & Regional P&L",
        metric: "Branch Manager",
        metricLabel: "PT Perdana Jatiputra",
        accentColor: "#2563eb"
      },
      {
        id: "smi_tbk",
        index: "03",
        title: "National Sales Manager (PT SMI Tbk)",
        subtitle: "Nationwide Sales Strategy, Team Leadership & Strategic B2B Partnerships",
        metric: "National Sales",
        metricLabel: "PT SMI Tbk",
        accentColor: "#2563eb"
      }
    ],
    takeaway: {
      proof: "16+ years total IT career (12 years at Astragraphia, Branch Manager at PT Perdana Jatiputra, and National Sales Manager at PT SMI Tbk) primed to scale WAY4.",
      alignment: "Enterprise Alignment: 100% Day-One"
    }
  }
};

// Legacy exports for compatibility
export const CANDIDATE_PROFILE = SLIDE01_DATA['IN'].profile;
export const VALUE_PILLARS = SLIDE01_DATA['IN'].pillars;
export const READINESS_DIMENSIONS = SLIDE01_DATA['IN'].dimensions;
