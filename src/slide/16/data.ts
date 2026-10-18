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

export const SLIDE16_DATA: Record<Language, {
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
      catalyst: "Pilar 1: Tata Kelola Pengadaan Bersih",
      title: "Pilar 1: Integritas Pengadaan Bersih & Bebas Sengketa Audit"
    },
    descriptionTitle: "Standar Tata Kelola Setara LKPP/BUMN, Nol Benturan Kepentingan & Transparansi 100%",
    descriptionText: "Membawa reputasi integritas tanpa kompromi selama 16 tahun di industri IT perbankan dan enterprise. Menjamin setiap proses penjualan mulai dari Pre-RFP, penyusunan TOR, hingga kontrak final memenuhi standar tata kelola tertinggi setara BUMN dan LKPP, bebas dari sengketa hukum atau catatan disclaimer audit.",
    cardsTitle: "Inisiatif & Pilar Pengadaan Bersih Terverifikasi",
    cardsBadge: "Tata Kelola Bersih",
    cards: [
      {
            "id": "p1_lkpp",
            "code": "#01",
            "title": "Standar Pengadaan Terbuka Setara LKPP/BUMN",
            "badgeLabel": "Standar LKPP",
            "mandate": "Kepatuhan mutlak terhadap prinsip pengadaan: efisien, efektif, transparan, terbuka, bersaing, adil, dan akuntabel",
            "deliverable": "Berkas administrasi tender lengkap, dokumen pemenuhan kualifikasi vendor, dan rekam jejak bebas blacklist",
            "riskMitigation": "Mengeliminasi potensi pembatalan tender atau sanggahan dari peserta lelang kompetitor",
            "steps": [
                  {
                        "phase": "Tahap 1: Kualifikasi",
                        "action": "Audit kelengkapan legalitas perusahaan, izin edar, & perpajakan"
                  },
                  {
                        "phase": "Tahap 2: Standardisasi",
                        "action": "Penerapan matriks pemenuhan TOR teknis sesuai kaidah LKPP"
                  },
                  {
                        "phase": "Tahap 3: Verifikasi",
                        "action": "Pemeriksaan berkas tender bebas dari celah sanggahan kompetitor"
                  }
            ],
            "specs": [
                  {
                        "label": "Standar Acuan",
                        "value": "LKPP / BUMN"
                  },
                  {
                        "label": "Rekam Jejak",
                        "value": "100% Bebas Cacat"
                  },
                  {
                        "label": "Risiko Sanggah",
                        "value": "Zero Dispute"
                  }
            ]
      },
      {
            "id": "p1_integrity",
            "code": "#02",
            "title": "Pakta Integritas & Anti-Benturan Kepentingan",
            "badgeLabel": "Pakta Integritas",
            "mandate": "Menandatangani dan mematuhi pakta integritas resmi perbankan, bebas dari segala bentuk gratifikasi atau kickback",
            "deliverable": "Dokumen deklarasi transparansi komersial dan penegakan kode etik bisnis OpenWay di meja klien",
            "riskMitigation": "Melindungi brand OpenWay dan jajaran direksi dari risiko hukum, reputasi, dan kepatuhan",
            "steps": [
                  {
                        "phase": "Tahap 1: Deklarasi",
                        "action": "Penandatanganan pakta integritas resmi bebas gratifikasi"
                  },
                  {
                        "phase": "Tahap 2: Sosialisasi",
                        "action": "Penegakan batas etika komersial kepada komite pengadaan klien"
                  },
                  {
                        "phase": "Tahap 3: Penjagaan",
                        "action": "Monitoring kepatuhan tanpa toleransi pada seluruh siklus deal"
                  }
            ],
            "specs": [
                  {
                        "label": "Benturan Kepentingan",
                        "value": "Nol (Zero)"
                  },
                  {
                        "label": "Pakta Integritas",
                        "value": "Resmi & Sah"
                  },
                  {
                        "label": "Proteksi Reputasi",
                        "value": "100% Terjaga"
                  }
            ]
      },
      {
            "id": "p1_audit",
            "code": "#03",
            "title": "Dokumen Audit-Ready 100% & Kepatuhan Statutory",
            "badgeLabel": "Audit-Ready",
            "mandate": "Penyusunan dokumentasi komersial yang rapi dan transparan untuk audit internal bank, OJK, dan auditor independen",
            "deliverable": "Dossier arsip kontrak terpadu dengan logging proses tender yang jelas dan akuntabel",
            "riskMitigation": "Mencegah temuan audit pasca-implementasi dan sanksi administratif regulator",
            "steps": [
                  {
                        "phase": "Tahap 1: Pencatatan",
                        "action": "Logging seluruh korespondensi komersial dan amandemen harga"
                  },
                  {
                        "phase": "Tahap 2: Pengarsipan",
                        "action": "Integrasi dokumen Pre-RFP, TOR, proposal, hingga SPK/kontrak"
                  },
                  {
                        "phase": "Tahap 3: Review",
                        "action": "Validasi kepatuhan siap uji petik oleh OJK dan auditor eksternal"
                  }
            ],
            "specs": [
                  {
                        "label": "Kesiapan Audit",
                        "value": "100% Audit-Ready"
                  },
                  {
                        "label": "Catatan Audit",
                        "value": "Nol Temuan"
                  },
                  {
                        "label": "Kepatuhan Hukum",
                        "value": "Statutory Sesuai"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Parameter Keandalan Tata Kelola",
      tcoTitle: "Rekam Jejak Kepatuhan",
      tcoValue: "100% Bersih",
      tcoSub: "16 tahun reputasi bebas sengketa hukum",
      speedTitle: "Standar Pengadaan",
      speedValue: "Setara LKPP",
      speedSub: "Kepatuhan tata kelola BUMN & FSI ketat",
      mandateTitle: "Catatan Audit Eksternal",
      mandateValue: "Nol Temuan",
      mandateSub: "Audit-ready internal bank & regulator"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Reputasi Etika 16 Tahun",
        subtitle: "Kredibilitas tak bercela di ekosistem perbankan dan enterprise",
        metric: "16+ Tahun",
        tag: "Integritas",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Transparansi Komersial",
        subtitle: "Skema harga dan delivery yang jelas tanpa biaya tersembunyi",
        metric: "Transparan",
        tag: "Tata Kelola",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Mitigasi Sengketa Tender",
        subtitle: "Prosedur lelang patuh hukum mencegah gugatan atau sanggahan lelang",
        metric: "Zero Dispute",
        tag: "Hukum",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Proteksi Brand OpenWay",
        subtitle: "Menjaga marwah dan reputasi global platform WAY4 di Indonesia",
        metric: "Brand Shield",
        tag: "Kepatuhan",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pilar 1 memberikan garansi mutlak bagi manajemen OpenWay bahwa pertumbuhan penjualan dicapai dengan cara-cara bermartabat, legal, dan aman jangka panjang.",
      target: "100% Audit-Ready · Nol Sengketa Hukum"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 1: Clean Procurement Governance",
      title: "Pillar 1: Clean Procurement Integrity & Zero Audit Dispute"
    },
    descriptionTitle: "LKPP/SOE Equivalent Governance Benchmarks, Zero Conflict of Interest & 100% Transparency",
    descriptionText: "Upholding an uncompromised 16-year reputation of commercial integrity across enterprise and banking sectors. Ensuring every deal stage from Pre-RFP shaping and TOR draft to final contract adheres to strict state-owned enterprise (BUMN) and LKPP benchmarks, completely free from legal disputes or audit findings.",
    cardsTitle: "Key Verified Clean Procurement Initiatives",
    cardsBadge: "Clean Governance",
    cards: [
      {
            "id": "p1_lkpp",
            "code": "#01",
            "title": "Open Tender Benchmarks Equivalent to LKPP/SOE",
            "badgeLabel": "LKPP Standard",
            "mandate": "Strict compliance with procurement principles: efficiency, transparency, open competition, fairness, and accountability",
            "deliverable": "Complete tender qualification dossiers, verified certifications, and unblemished vendor track records",
            "riskMitigation": "Eliminating tender disqualification risks or post-award competitor disputes",
            "steps": [
                  {
                        "phase": "Phase 1: Qualify",
                        "action": "Audit corporate legalities, certifications, and compliance standing"
                  },
                  {
                        "phase": "Phase 2: Standard",
                        "action": "Apply rigorous technical TOR compliance matrices per SOE codes"
                  },
                  {
                        "phase": "Phase 3: Verify",
                        "action": "Pre-screen bidding submissions preventing any competitor protest"
                  }
            ],
            "specs": [
                  {
                        "label": "Benchmark",
                        "value": "LKPP / SOE Codes"
                  },
                  {
                        "label": "Track Record",
                        "value": "100% Clean"
                  },
                  {
                        "label": "Protest Risk",
                        "value": "Zero Dispute"
                  }
            ]
      },
      {
            "id": "p1_integrity",
            "code": "#02",
            "title": "Integrity Pacts & Anti-Conflict of Interest",
            "badgeLabel": "Integrity Pact",
            "mandate": "Signing formal institutional integrity pacts, strictly barring any form of kickbacks or gratuity",
            "deliverable": "Signed commercial transparency declarations enforcing OpenWay's ethical code in client boardrooms",
            "riskMitigation": "Shielding OpenWay leadership and brand equity from statutory, legal, and compliance exposures",
            "steps": [
                  {
                        "phase": "Phase 1: Declaration",
                        "action": "Execute binding anti-gratuity and anti-kickback integrity pact"
                  },
                  {
                        "phase": "Phase 2: Enforcement",
                        "action": "Communicate strict commercial ethical boundaries to buyers"
                  },
                  {
                        "phase": "Phase 3: Governance",
                        "action": "Enforce zero-tolerance compliance across entire deal lifecycle"
                  }
            ],
            "specs": [
                  {
                        "label": "Conflict Risk",
                        "value": "Zero (None)"
                  },
                  {
                        "label": "Integrity Pact",
                        "value": "Legally Binding"
                  },
                  {
                        "label": "Brand Shield",
                        "value": "100% Guarded"
                  }
            ]
      },
      {
            "id": "p1_audit",
            "code": "#03",
            "title": "100% Audit-Ready Commercial Dossiers",
            "badgeLabel": "Audit-Ready",
            "mandate": "Meticulous documentation prepared for internal bank audits, Central Bank reviews, and independent statutory audits",
            "deliverable": "Comprehensive contract archives with traceable and accountable procurement evaluation trails",
            "riskMitigation": "Preventing post-implementation audit findings, audit disclaimers, or regulatory penalties",
            "steps": [
                  {
                        "phase": "Phase 1: Logging",
                        "action": "Record end-to-end commercial exchanges and price iterations"
                  },
                  {
                        "phase": "Phase 2: Archive",
                        "action": "Unify Pre-RFP, TOR, final bids, and formal contracts into vault"
                  },
                  {
                        "phase": "Phase 3: Review",
                        "action": "Audit-proof files ready for Central Bank and Big-4 inspection"
                  }
            ],
            "specs": [
                  {
                        "label": "Audit Readiness",
                        "value": "100% Verified"
                  },
                  {
                        "label": "Audit Notes",
                        "value": "Zero Findings"
                  },
                  {
                        "label": "Regulatory Fit",
                        "value": "Bank Indonesia"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Governance Reliability Parameters",
      tcoTitle: "Compliance Track Record",
      tcoValue: "100% Clean",
      tcoSub: "16-year dispute-free legal reputation",
      speedTitle: "Procurement Benchmark",
      speedValue: "LKPP Equivalent",
      speedSub: "Strict SOE & banking oversight compliance",
      mandateTitle: "External Audit Notes",
      mandateValue: "Zero Findings",
      mandateSub: "Audit-ready for banks & regulators"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "16-Year Ethical Track Record",
        subtitle: "Unblemished professional credibility across banking and enterprise sectors",
        metric: "16+ Years",
        tag: "Integrity",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Commercial Transparency",
        subtitle: "Clear pricing structures and transparent delivery commitments with zero hidden fees",
        metric: "Transparent",
        tag: "Governance",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Tender Dispute Mitigation",
        subtitle: "Lawfully grounded tender procedures preventing vendor protests or legal challenges",
        metric: "Zero Dispute",
        tag: "Legal",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "OpenWay Brand Protection",
        subtitle: "Safeguarding OpenWay's global market prestige and Tier-1 leadership in Indonesia",
        metric: "Brand Shield",
        tag: "Compliance",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pillar 1 guarantees OpenWay executive leadership that commercial growth is won with honor, lawful rigor, and long-term security.",
      target: "100% Audit-Ready · Zero Legal Disputes"
    }
  }
};
