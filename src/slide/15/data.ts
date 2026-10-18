export type Language = 'IN' | 'EN';

export interface GovernanceCommitment {
  id: string;
  pillarIndex: string;
  title: string;
  subtitle: string;
  scope: string;
  evidence: string;
  accentColor: string;
  bgPastel: string;
  badgeLabel: string;
}

export interface ClosingPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE15_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  commitmentsTitle: string;
  commitments: GovernanceCommitment[];
  metrics: {
    advantageTitle: string;
    auditTrackTitle: string;
    auditTrackValue: string;
    auditTrackSub: string;
    governanceStandardTitle: string;
    governanceStandardValue: string;
    governanceStandardSub: string;
    consensusTitle: string;
    consensusValue: string;
    consensusSub: string;
    englishGrowthTitle: string;
    englishGrowthValue: string;
    englishGrowthSub: string;
  };
  pillars: ClosingPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Komitmen Penutup",
      catalyst: "Integritas Tata Kelola & Eksekusi Bersih",
      title: "Tata Kelola Bersih, Kepercayaan Pemangku Kepentingan & Perbaikan Diri"
    },
    descriptionTitle: "Prinsip Zero-Litigation, Keselarasan Konsensus & Pertumbuhan Kapabilitas Eksekutif",
    descriptionText: "Menutup kesepakatan bernilai jutaan dolar membutuhkan lebih dari sekadar keunggulan teknologi; hal ini menuntut standar kepatuhan hukum tanpa cela, mitigasi risiko audit pasca-pengadaan, serta komitmen gigih dalam meningkatkan kapabilitas pribadi untuk mewakili OpenWay di forum perbankan internasional.",
    commitmentsTitle: "Tiga Pilar Komitmen Eksekusi Harry Gultom",
    commitments: [
      {
        id: "gov_clean_execution",
        pillarIndex: "1",
        title: "Eksekusi Pengadaan 100% Bersih & Nol Sengketa Hukum",
        subtitle: "Standar integritas setara LKPP dan kepatuhan perbankan institusional tanpa celah litigasi",
        scope: "Seluruh proses komersial dijalankan melalui jalur governance resmi bank (Komite Pengadaan, Legal, Risk).",
        evidence: "Rekam jejak 12 tahun Astragraphia tanpa catatan sengketa hukum atau kegagalan audit komersial.",
        accentColor: "#34a853",
        bgPastel: "bg-emerald-50/70 border-emerald-200/80",
        badgeLabel: "100% Bersih"
      },
      {
        id: "gov_stakeholder_trust",
        pillarIndex: "2",
        title: "Penyelarasan Konsensus Lintas Pemangku Kepentingan",
        subtitle: "Menjembatani friksi antara tim IT, Operasional, Risiko & Dewan Direksi",
        scope: "Membangun business case TCO yang meyakinkan CFO sekaligus memenuhi mandat kepatuhan BI bagi Direksi.",
        evidence: "Pengalaman mengonsolidasikan konsensus pengadaan skala puluhan miliar di berbagai bank dan institusi.",
        accentColor: "#1a73e8",
        bgPastel: "bg-blue-50/70 border-blue-200/80",
        badgeLabel: "Konsensus C-Level"
      },
      {
        id: "gov_self_growth",
        pillarIndex: "3",
        title: "Komitmen Perbaikan Diri: Bahasa Inggris & Kapabilitas Global",
        subtitle: "Peningkatan intensif kelancaran bahasa Inggris untuk kesiapan presentasi regional",
        scope: "Mengikuti kursus intensif conversational & executive English untuk memastikan artikulasi bernilai tinggi di forum APAC.",
        evidence: "Kemauan proaktif untuk terus berkembang agar setara dengan standar komunikasi global OpenWay.",
        accentColor: "#fbbc04",
        bgPastel: "bg-amber-50/70 border-amber-200/80",
        badgeLabel: "Peningkatan Aktif"
      }
    ],
    metrics: {
      advantageTitle: "Standar Integritas & Kesiapan Eksekusi",
      auditTrackTitle: "Rekam Jejak Kepatuhan",
      auditTrackValue: "100% Bersih",
      auditTrackSub: "Nol sengketa hukum & audit komersial",
      governanceStandardTitle: "Standar Tata Kelola",
      governanceStandardValue: "Setara LKPP",
      governanceStandardSub: "Pengadaan institusional aman",
      consensusTitle: "Penyelarasan Pemangku",
      consensusValue: "Lintas C-Level",
      consensusSub: "IT, Risiko, Legal & Direksi",
      englishGrowthTitle: "Fokus Pengembangan Diri",
      englishGrowthValue: "Bahasa Inggris Eksekutif",
      englishGrowthSub: "Kursus intensif untuk kesiapan APAC"
    },
    pillars: [
      {
        id: "pillar_clean_procurement",
        index: "01",
        title: "Eksekusi Pengadaan Bersih",
        subtitle: "Kepatuhan penuh pada regulasi BI & tata kelola internal perbankan",
        metric: "100% Kepatuhan",
        tag: "Integritas",
        accentColor: "#34a853"
      },
      {
        id: "pillar_multistakeholder",
        index: "02",
        title: "Kepercayaan Pemangku Kepentingan",
        subtitle: "Membangun advokasi jangka panjang dari tim teknis hingga Boardroom",
        metric: "Konsensus C-Suite",
        tag: "Kemitraan",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_continuous_learning",
        index: "03",
        title: "Pengembangan Diri Berkelanjutan",
        subtitle: "Meningkatkan kelancaran bahasa Inggris untuk forum eksekutif multinasional",
        metric: "Bimbingan Intensif",
        tag: "Jalur Tumbuh",
        accentColor: "#fbbc04"
      },
      {
        id: "pillar_day_one_ready",
        index: "04",
        title: "Komitmen Nilai Hari Pertama",
        subtitle: "Siap diterjunkan langsung untuk memenangkan pasar switching Indonesia",
        metric: "100% Hari Pertama",
        tag: "Komitmen",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Menghadirkan kesepakatan enterprise bernilai tinggi yang bersih, aman, dan auditable secara hukum tanpa risiko pasca-tender bagi OpenWay.",
      target: "Komitmen Eksekutif: 100% Siap Diterjunkan"
    }
  },
  EN: {
    header: {
      category: "Closing Commitment",
      catalyst: "Governance Integrity & Clean Commercial Execution",
      title: "Clean Governance, Stakeholder Trust & Self-Improvement"
    },
    descriptionTitle: "Zero-Litigation Principles, Consensus Alignment & Executive Capability Growth",
    descriptionText: "Closing multi-million dollar banking platform deals requires more than technical excellence; it demands uncompromised legal compliance, proactive mitigation of post-procurement audit risks, and relentless commitment to executive skill enhancement.",
    commitmentsTitle: "Harry Gultom's Three Core Execution Commitments",
    commitments: [
      {
        id: "gov_clean_execution",
        pillarIndex: "1",
        title: "100% Clean Procurement & Zero Legal Disputes",
        subtitle: "LKPP-grade institutional compliance and airtight banking governance without litigation risk",
        scope: "All commercial engagements executed strictly through bank procurement, risk, and legal committees.",
        evidence: "12-year Astragraphia track record with zero legal disputes or failed commercial audits.",
        accentColor: "#34a853",
        bgPastel: "bg-emerald-50/70 border-emerald-200/80",
        badgeLabel: "100% Clean"
      },
      {
        id: "gov_stakeholder_trust",
        pillarIndex: "2",
        title: "Cross-Functional Stakeholder Consensus Alignment",
        subtitle: "Bridging friction between IT teams, Operations, Risk, and the Executive Boardroom",
        scope: "Delivering defensible TCO business cases for CFOs while fulfilling Bank Indonesia compliance mandates.",
        evidence: "Proven record consolidating procurement consensus across major banks and state-owned enterprises.",
        accentColor: "#1a73e8",
        bgPastel: "bg-blue-50/70 border-blue-200/80",
        badgeLabel: "C-Level Consensus"
      },
      {
        id: "gov_self_growth",
        pillarIndex: "3",
        title: "Continuous Self-Improvement: English & Global Executive Presence",
        subtitle: "Dedicated intensive coaching to master APAC regional enterprise presentation fluency",
        scope: "Engaged in active business English coaching to ensure high-impact articulation across international forums.",
        evidence: "Proactive growth mindset dedicated to aligning with OpenWay's global operating standards.",
        accentColor: "#fbbc04",
        bgPastel: "bg-amber-50/70 border-amber-200/80",
        badgeLabel: "Active Growth"
      }
    ],
    metrics: {
      advantageTitle: "Integrity Standards & Execution Readiness",
      auditTrackTitle: "Compliance Record",
      auditTrackValue: "100% Clean",
      auditTrackSub: "Zero legal disputes & commercial audits",
      governanceStandardTitle: "Governance Standard",
      governanceStandardValue: "LKPP Grade",
      governanceStandardSub: "Secure institutional procurement",
      consensusTitle: "Stakeholder Alignment",
      consensusValue: "Cross C-Level",
      consensusSub: "IT, Risk, Legal & Board",
      englishGrowthTitle: "Growth Commitment",
      englishGrowthValue: "Executive English",
      englishGrowthSub: "Intensive coaching for APAC readiness"
    },
    pillars: [
      {
        id: "pillar_clean_procurement",
        index: "01",
        title: "Clean Procurement Execution",
        subtitle: "Full compliance with BI regulations and internal bank governance policies",
        metric: "100% Compliant",
        tag: "Integrity",
        accentColor: "#34a853"
      },
      {
        id: "pillar_multistakeholder",
        index: "02",
        title: "Stakeholder Trust & Consensus",
        subtitle: "Building long-term advocacy across technical teams and executive boardrooms",
        metric: "C-Suite Consensus",
        tag: "Partnership",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_continuous_learning",
        index: "03",
        title: "Continuous Self-Development",
        subtitle: "Enhancing verbal confidence across multinational executive forums",
        metric: "Intensive Tutoring",
        tag: "Growth Track",
        accentColor: "#fbbc04"
      },
      {
        id: "pillar_day_one_ready",
        index: "04",
        title: "Day-One Value Commitment",
        subtitle: "Ready to deploy immediately to conquer the Indonesian switching market",
        metric: "100% Day-One",
        tag: "Commitment",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Delivering high-value enterprise deals that are clean, secure, and legally auditable with zero post-procurement risk for OpenWay.",
      target: "Executive Commitment: 100% Ready to Deploy"
    }
  }
};
