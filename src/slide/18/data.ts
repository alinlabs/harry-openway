export type Language = 'IN' | 'EN';

export interface ActionCard {
  id: string;
  code: string;
  title: string;
  badgeLabel: string;
  mandate: string;
  deliverable: string;
  riskMitigation: string;
  steps: { phase: string; action: string }[];
  specs: { label: string; value: string }[];
}

export interface WinningPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accentColor: string;
}

export const SLIDE18_DATA: Record<Language, {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  cardsTitle: string;
  cardsBadge: string;
  cards: ActionCard[];
  metrics: {
    advantageTitle: string;
    tcoTitle: string;
    tcoValue: string;
    tcoSub: string;
    speedTitle: string;
    speedValue: string;
    speedSub: string;
    mandateTitle: string;
    mandateValue: string;
    mandateSub: string;
  };
  pillars: WinningPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
}> = {
  IN: {
    header: {
      category: "Komitmen Integritas Deep Dive",
      catalyst: "Pilar 3: Pengembangan Diri Berkelanjutan",
      title: "Pilar 3: Pengembangan Diri Berkelanjutan & Kemampuan Bahasa Global"
    },
    descriptionTitle: "Les Privat Bahasa Inggris Bisnis Intensif, Penguasaan Domain & Representasi Regional",
    descriptionText: "Komitmen pengembangan diri yang transparan, terukur, dan berkelanjutan. Secara proaktif mengikuti les privat Bahasa Inggris bisnis intensif bersama tutor profesional untuk memastikan komunikasi tingkat regional OpenWay berjalan prima, sekaligus mendalami sertifikasi sistem pembayaran digital guna menghadirkan wawasan terdepan bagi klien perbankan.",
    cardsTitle: "Inisiatif Pengembangan Diri & Representasi Global",
    cardsBadge: "Perbaikan Diri",
    cards: [
      {
            "id": "p3_english",
            "code": "#01",
            "title": "Kursus Privat Intensif Business English Enterprise",
            "badgeLabel": "Bahasa Global",
            "mandate": "Les privat intensif bersama tutor profesional berfokus pada presentasi komersial dan negosiasi C-Level",
            "deliverable": "Kemampuan artikulasi strategi, pitching proposal, dan partisipasi aktif dalam dewan regional OpenWay",
            "riskMitigation": "Menghilangkan hambatan komunikasi saat berkolaborasi dengan jajaran manajemen internasional OpenWay",
            "steps": [
                  {
                        "phase": "Tahap 1: Pelatihan",
                        "action": "Les privat terstruktur 3x seminggu berfokus pada terminologi FSI global"
                  },
                  {
                        "phase": "Tahap 2: Simulasi",
                        "action": "Latihan simulasi negosiasi kontrak C-Level dan presentasi regional"
                  },
                  {
                        "phase": "Tahap 3: Kelancaran",
                        "action": "Penyampaian komersial lancar dan percaya diri di panggung internasional"
                  }
            ],
            "specs": [
                  {
                        "label": "Frekuensi",
                        "value": "3x Seminggu"
                  },
                  {
                        "label": "Fokus Domain",
                        "value": "Enterprise Tech"
                  },
                  {
                        "label": "Kesiapan",
                        "value": "Fasih & Percaya Diri"
                  }
            ]
      },
      {
            "id": "p3_domain",
            "code": "#02",
            "title": "Pendalaman Domain Pengetahuan Sistem Pembayaran (FSI)",
            "badgeLabel": "Domain Perbankan",
            "mandate": "Mengikuti perkembangan standar ISO 20022, regulasi SNAP Bank Indonesia, dan tren SoftPOS/Cloud Switching global",
            "deliverable": "Kesiapan sebagai thought leader yang mampu memberikan konsultasi bernilai tambah bagi klien bank",
            "riskMitigation": "Mencegah keusangan pengetahuan di tengah disrupsi teknologi pembayaran digital yang cepat",
            "steps": [
                  {
                        "phase": "Tahap 1: Sertifikasi",
                        "action": "Studi mendalam regulasi BSPI 2030, BI-FAST, dan standar ISO 20022"
                  },
                  {
                        "phase": "Tahap 2: Tren Global",
                        "action": "Eksplorasi arsitektur cloud switching, SoftPOS, dan payment hub"
                  },
                  {
                        "phase": "Tahap 3: Advisory",
                        "action": "Penyusunan whitepaper konsultatif bagi pengambil keputusan perbankan"
                  }
            ],
            "specs": [
                  {
                        "label": "Regulasi Utama",
                        "value": "BSPI 2030 / SNAP"
                  },
                  {
                        "label": "Standar Pesan",
                        "value": "ISO 20022 Aligned"
                  },
                  {
                        "label": "Peran Diskusi",
                        "value": "Trusted Advisor"
                  }
            ]
      },
      {
            "id": "p3_apac",
            "code": "#03",
            "title": "Kesiapan Representasi Regional OpenWay di Asia Pasifik",
            "badgeLabel": "Representasi APAC",
            "mandate": "Siap mewakili OpenWay dalam forum perbankan internasional, seminar industri fintech, dan sesi evaluasi regional",
            "deliverable": "Presentasi komersial berstandar internasional yang mencerminkan martabat dan keunggulan OpenWay",
            "riskMitigation": "Menjaga konsistensi citra merek OpenWay sebagai penyedia platform pembayaran nomor satu di dunia",
            "steps": [
                  {
                        "phase": "Tahap 1: Sinergi",
                        "action": "Penyelarasan berkala dengan tim regional OpenWay Asia Pasifik"
                  },
                  {
                        "phase": "Tahap 2: Forum",
                        "action": "Kesiapan menjadi representasi OpenWay di forum industri pembayaran"
                  },
                  {
                        "phase": "Tahap 3: Duta Brand",
                        "action": "Membawa marwah dan kepemimpinan pasar WAY4 di level regional"
                  }
            ],
            "specs": [
                  {
                        "label": "Jangkauan Wilayah",
                        "value": "Regional APAC"
                  },
                  {
                        "label": "Representasi",
                        "value": "Duta Komersial"
                  },
                  {
                        "label": "Reputasi Brand",
                        "value": "Tier-1 Global"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Parameter Pengembangan Diri",
      tcoTitle: "Pelatihan Bahasa Inggris",
      tcoValue: "3x Seminggu",
      tcoSub: "Les privat intensif dengan tutor bisnis",
      speedTitle: "Kesiapan Komunikasi Global",
      speedValue: "Siap Regional",
      speedSub: "Kelancaran rapat dewan & pitching C-Level",
      mandateTitle: "Akreditasi Domain FSI",
      mandateValue: "Continuous",
      mandateSub: "Kepatuhan standar industri pembayaran global"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Disiplin Pembelajaran Mandiri",
        subtitle: "Menginvestasikan waktu dan sumber daya secara independen demi keunggulan peran",
        metric: "Self-Driven",
        tag: "Disiplin",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Kelancaran Rapat Regional",
        subtitle: "Mampu mempresentasikan pipeline Indonesia di hadapan pimpinan global OpenWay",
        metric: "Global Fluency",
        tag: "Bahasa",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Wawasan Industri Terkini",
        subtitle: "Memahami dinamika tren fintech, QRIS cross-border, dan kedaulatan data",
        metric: "Domain Expert",
        tag: "Wawasan",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Integritas Representasi",
        subtitle: "Menjaga reputasi profesional Harry dan OpenWay di setiap forum publik",
        metric: "Excellence",
        tag: "Representasi",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pilar 3 adalah bukti komitmen kerendahan hati dan kemauan belajar Harry: tidak pernah berpuas diri, melainkan terus berkembang agar selalu siap mewakili OpenWay di kancah regional.",
      target: "Kelancaran Bahasa Inggris Regional · Keunggulan Representasi 100%"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 3: Continuous Professional Growth",
      title: "Pillar 3: Continuous Professional Growth & Global English Fluency"
    },
    descriptionTitle: "Intensive Business English Coaching, Domain Mastery & Regional Representation",
    descriptionText: "A transparent, disciplined, and measurable commitment to continuous self-improvement. Proactively undertaking intensive business English private coaching to ensure flawless regional executive communication across OpenWay global teams, while deepening payment domain knowledge to bring cutting-edge insights to banking clients.",
    cardsTitle: "Key Continuous Growth & Global Representation Initiatives",
    cardsBadge: "Self Improvement",
    cards: [
      {
            "id": "p3_english",
            "code": "#01",
            "title": "Intensive Business English Coaching for Enterprise Tech",
            "badgeLabel": "Global English",
            "mandate": "Intensive private tutoring with certified corporate coaches focusing on commercial pitches and C-Level negotiations",
            "deliverable": "Articulate strategic messaging, flawless proposal pitching, and active participation in OpenWay APAC reviews",
            "riskMitigation": "Eliminating language barriers when collaborating with global OpenWay leadership",
            "steps": [
                  {
                        "phase": "Phase 1: Training",
                        "action": "Structured coaching 3x weekly tailored to enterprise fintech terminology"
                  },
                  {
                        "phase": "Phase 2: Simulation",
                        "action": "Mock C-Level negotiation drills and regional APAC presentation rehearsals"
                  },
                  {
                        "phase": "Phase 3: Fluency",
                        "action": "Confident, articulate delivery across international forums"
                  }
            ],
            "specs": [
                  {
                        "label": "Frequency",
                        "value": "3x Weekly"
                  },
                  {
                        "label": "Focus Area",
                        "value": "Enterprise Tech"
                  },
                  {
                        "label": "Preparedness",
                        "value": "Fluent & Confident"
                  }
            ]
      },
      {
            "id": "p3_domain",
            "code": "#02",
            "title": "Advanced Payments Domain Immersion (FSI Specialization)",
            "badgeLabel": "Banking Domain",
            "mandate": "Staying ahead of ISO 20022 standards, Bank Indonesia SNAP protocols, and global cloud-switching innovations",
            "deliverable": "Ready to act as a thought leader delivering high-value consultative insights to banking boards",
            "riskMitigation": "Preventing domain knowledge decay amidst rapid payment disruption",
            "steps": [
                  {
                        "phase": "Phase 1: Standards",
                        "action": "Deep-dive study on BSPI 2030 roadmaps, BI-FAST, and ISO 20022 schemas"
                  },
                  {
                        "phase": "Phase 2: Trends",
                        "action": "Benchmarking global cloud payment hubs, SoftPOS, and microservices"
                  },
                  {
                        "phase": "Phase 3: Advisory",
                        "action": "Authoring consultative executive briefs for prospective banking clients"
                  }
            ],
            "specs": [
                  {
                        "label": "Core Roadmap",
                        "value": "BSPI 2030 / SNAP"
                  },
                  {
                        "label": "Messaging Standard",
                        "value": "ISO 20022 Aligned"
                  },
                  {
                        "label": "Client Advisory",
                        "value": "Trusted Advisor"
                  }
            ]
      },
      {
            "id": "p3_apac",
            "code": "#03",
            "title": "OpenWay Regional Representation Readiness in APAC",
            "badgeLabel": "APAC Ambassador",
            "mandate": "Fully prepared to represent OpenWay in international banking forums, fintech summits, and regional briefings",
            "deliverable": "International-grade commercial presentations upholding OpenWay's premier global brand status",
            "riskMitigation": "Maintaining consistent, dignified representation of OpenWay as the world's leading payment software company",
            "steps": [
                  {
                        "phase": "Phase 1: Alignment",
                        "action": "Regular coordination with OpenWay Asia-Pacific leadership"
                  },
                  {
                        "phase": "Phase 2: Forums",
                        "action": "Active presence and speaking readiness across regional banking conferences"
                  },
                  {
                        "phase": "Phase 3: Ambassador",
                        "action": "Safeguarding WAY4 market prestige and Tier-1 reputation across APAC"
                  }
            ],
            "specs": [
                  {
                        "label": "Geographic Scope",
                        "value": "APAC Regional"
                  },
                  {
                        "label": "Commercial Role",
                        "value": "Brand Ambassador"
                  },
                  {
                        "label": "Market Standing",
                        "value": "Global Tier-1"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Personal Growth Parameters",
      tcoTitle: "English Coaching Rhythm",
      tcoValue: "3x Weekly",
      tcoSub: "Intensive private coaching with business tutor",
      speedTitle: "Global Communication Readiness",
      speedValue: "APAC Ready",
      speedSub: "Boardroom fluency & C-Level pitching",
      mandateTitle: "FSI Domain Accreditation",
      mandateValue: "Continuous",
      mandateSub: "Global payment standards alignment"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Disciplined Self-Driven Learning",
        subtitle: "Proactively investing time and personal resources toward role excellence",
        metric: "Self-Driven",
        tag: "Discipline",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Regional Meeting Fluency",
        subtitle: "Articulating Indonesia commercial pipelines seamlessly before global OpenWay leadership",
        metric: "Global Fluency",
        tag: "English",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Current Industry Insights",
        subtitle: "Mastering fintech trends, cross-border QRIS developments, and data sovereignty",
        metric: "Domain Expert",
        tag: "Insights",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Representation Integrity",
        subtitle: "Upholding Harry's and OpenWay's professional stature in every public forum",
        metric: "Excellence",
        tag: "Representation",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pillar 3 demonstrates humility, drive, and continuous growth: never complacent, continually evolving to represent OpenWay regionally with distinction.",
      target: "Regional English Fluency · 100% Representation Stature"
    }
  }
};
