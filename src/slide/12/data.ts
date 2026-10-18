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

export const SLIDE12_DATA: Record<Language, {
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
      category: "Rencana Aksi Deep Dive",
      catalyst: "Tahap 1 [Hari 1 - 30]: Fondasi Internal & Audit",
      title: "Hari 1 - 30: Penyerapan Internal, Audit Akun & Pemodelan TCO"
    },
    descriptionTitle: "Penguasaan Arsitektur WAY4, Hubungan Klien Eksisting & Kalkulasi Finansial ROI",
    descriptionText: "Bulan pertama didedikasikan untuk membangun fondasi operasional yang kokoh tanpa jeda ramp-up. Menyerap cetak biru produksi Tier-1 bersama tim teknis OpenWay, menjalin kedekatan dengan akun eksisting untuk menjaga retensi 100%, serta merumuskan template kalkulator 5-Year TCO siap pakai untuk C-Level.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 1 - 30",
    cardsBadge: "Pondasi & Audit",
    cards: [
      {
            "id": "d30_internal",
            "code": "#01",
            "title": "Penyerapan Teknis & Arsitektur Produk WAY4",
            "badgeLabel": "Produk & Solusi",
            "mandate": "Menguasai modul WAY4 CMS, Switching, Clearing, dan Open API SNAP BI bersama tim Pre-Sales",
            "deliverable": "Dossier teknis produk dan ringkasan arsitektur referensi untuk presentasi komersial",
            "riskMitigation": "Eliminasi miskomunikasi teknis saat berhadapan langsung dengan arsitek bank",
            "steps": [
                  {
                        "phase": "Tahap 1: Audit",
                        "action": "Bedah blueprint teknis WAY4 di BRI & Finnet bersama Pre-Sales"
                  },
                  {
                        "phase": "Tahap 2: Sinergi",
                        "action": "Simulasi alur transaksi SNAP BI & matriks perbandingan kompetitor"
                  },
                  {
                        "phase": "Tahap 3: Finalisasi",
                        "action": "Rilis dossier arsitektur dan battlecard komersial siap pakai"
                  }
            ],
            "specs": [
                  {
                        "label": "Siklus",
                        "value": "Hari 1 - 10"
                  },
                  {
                        "label": "PIC Lead",
                        "value": "Pre-Sales & Harry"
                  },
                  {
                        "label": "Standar",
                        "value": "Turnkey Ready"
                  }
            ]
      },
      {
            "id": "d30_farming",
            "code": "#02",
            "title": "Asesmen Relasi & Account Farming Akun Eksisting",
            "badgeLabel": "Retensi Klien",
            "mandate": "Kunjungan silaturahmi formal ke PIC operasional dan komersial di BRI, Finnet, dan ASBANDA",
            "deliverable": "Peta kesehatan relasi klien, audit SLA, dan identifikasi peluang add-on modul baru",
            "riskMitigation": "Mencegah risiko churn klien lama dan mengamankan recurring fee pemeliharaan",
            "steps": [
                  {
                        "phase": "Tahap 1: Pemetaan",
                        "action": "Audit kepuasan SLA dan logging tiket operasional berjalan"
                  },
                  {
                        "phase": "Tahap 2: Kunjungan",
                        "action": "Pertemuan silaturahmi formal ke pimpinan divisi perbankan"
                  },
                  {
                        "phase": "Tahap 3: Upsell Map",
                        "action": "Identifikasi potensi modul ekspansi (SoftPOS & QRIS)"
                  }
            ],
            "specs": [
                  {
                        "label": "Target Retensi",
                        "value": "100% Zero Churn"
                  },
                  {
                        "label": "Cakupan Akun",
                        "value": "BRI, Finnet, BPD"
                  },
                  {
                        "label": "Status Hubungan",
                        "value": "Warm & Secure"
                  }
            ]
      },
      {
            "id": "d30_tco",
            "code": "#03",
            "title": "Formulasi Kalkulator Finansial 5-Year TCO",
            "badgeLabel": "Finansial ROI",
            "mandate": "Menyusun model komparasi Capex vs Opex yang membuktikan efisiensi migrasi ke WAY4",
            "deliverable": "Spreadsheet model TCO interaktif dengan parameter lisensi, server, dan efisiensi energi",
            "riskMitigation": "Menghadapi CFO bank dengan argumen penghematan biaya terukur hingga 35%",
            "steps": [
                  {
                        "phase": "Tahap 1: Formulasi",
                        "action": "Kompilasi komponen biaya server, lisensi, & pemeliharaan"
                  },
                  {
                        "phase": "Tahap 2: Komparasi",
                        "action": "Pemodelan skenario Capex tradisional vs Opex Dual Engine"
                  },
                  {
                        "phase": "Tahap 3: Validasi",
                        "action": "Simulasi ROI 5 tahun dengan pembuktian efisiensi hingga 35%"
                  }
            ],
            "specs": [
                  {
                        "label": "Kalkulasi ROI",
                        "value": "5-Tahun Teruji"
                  },
                  {
                        "label": "Target Efisiensi",
                        "value": "Hingga 35%"
                  },
                  {
                        "label": "Format Model",
                        "value": "C-Level Ready"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-30",
      tcoTitle: "Retensi Akun Eksisting",
      tcoValue: "100% Aman",
      tcoSub: "Kunjungan & hubungan hangat klien lama",
      speedTitle: "Kesiapan Model TCO",
      speedValue: "Siap Pakai",
      speedSub: "Kalkulator Capex/Opex terverifikasi",
      mandateTitle: "Waktu Ramp-Up Tim",
      mandateValue: "<30 Hari",
      mandateSub: "Penguasaan penuh katalog produk WAY4"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Sinergi Tim Pre-Sales",
        subtitle: "Penyelarasan komersial dan kapabilitas teknis secara intensif",
        metric: "100% Aligned",
        tag: "Internal",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Audit Kepuasan Klien",
        subtitle: "Menjaga stabilitas kontrak existing tanpa celah risiko",
        metric: "Zero Churn",
        tag: "Retensi",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Validasi Kasus Bisnis",
        subtitle: "Senjata argumen finansial siap tanding di meja direksi bank",
        metric: "Data-Driven",
        tag: "Finansial",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Kesiapan Alat Tempur",
        subtitle: "Format proposal, deck perbankan, dan battlecard siap pakai",
        metric: "Turnkey Ready",
        tag: "Eksekusi",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Hari ke-30 mengunci fondasi internal yang kokoh, memastikan retensi akun eksisting, dan menyiapkan amunisi proposal bernilai tinggi.",
      target: "Fondasi Internal 100% · Model TCO Siap Pakai"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 1 [Days 1 - 30]: Internal Foundation & Audit",
      title: "Days 1 - 30: Internal Onboarding, Account Audit & TCO Modeling"
    },
    descriptionTitle: "WAY4 Architecture Mastery, Existing Client Nurturing & Financial ROI Modeling",
    descriptionText: "The first month is dedicated to establishing an unassailable operational base with zero ramp-up lag. Absorbing Tier-1 production blueprints alongside OpenWay technical leads, engaging existing banking accounts to ensure 100% retention, and formulating turnkey 5-Year TCO financial calculators.",
    cardsTitle: "Key Initiatives & Deliverables for Days 1 - 30",
    cardsBadge: "Foundation & Audit",
    cards: [
      {
            "id": "d30_internal",
            "code": "#01",
            "title": "Technical & Product Architecture Immersion",
            "badgeLabel": "Product & Solution",
            "mandate": "Deeply mastering WAY4 CMS, Switching, Clearing, and SNAP BI Open APIs with Pre-Sales teams",
            "deliverable": "Product technical dossier and reference architecture handbook for executive meetings",
            "riskMitigation": "Eliminating technical miscommunication when engaging bank lead architects directly",
            "steps": [
                  {
                        "phase": "Phase 1: Audit",
                        "action": "Dissect live WAY4 production blueprints at BRI & Finnet"
                  },
                  {
                        "phase": "Phase 2: Synergy",
                        "action": "Simulate SNAP BI transaction flows & competitor benchmarks"
                  },
                  {
                        "phase": "Phase 3: Rollout",
                        "action": "Release architecture dossier & commercial battlecards"
                  }
            ],
            "specs": [
                  {
                        "label": "Timeline",
                        "value": "Days 1 - 10"
                  },
                  {
                        "label": "Lead PIC",
                        "value": "Pre-Sales & Harry"
                  },
                  {
                        "label": "Benchmark",
                        "value": "Turnkey Ready"
                  }
            ]
      },
      {
            "id": "d30_farming",
            "code": "#02",
            "title": "Existing Account Relationship Assessment & Farming",
            "badgeLabel": "Client Retention",
            "mandate": "Formal discovery and relationship check-ins with PICs at BRI, Finnet, and ASBANDA",
            "deliverable": "Account relationship health matrix, SLA audits, and new module add-on opportunities",
            "riskMitigation": "Preventing account churn risks while securing existing maintenance recurring revenue",
            "steps": [
                  {
                        "phase": "Phase 1: Mapping",
                        "action": "Audit ongoing SLA satisfaction and open service tickets"
                  },
                  {
                        "phase": "Phase 2: Discovery",
                        "action": "Formal executive meetings with banking division heads"
                  },
                  {
                        "phase": "Phase 3: Upsell Map",
                        "action": "Identify high-yield expansion modules (SoftPOS & QRIS)"
                  }
            ],
            "specs": [
                  {
                        "label": "Retention Target",
                        "value": "100% Zero Churn"
                  },
                  {
                        "label": "Account Scope",
                        "value": "BRI, Finnet, BPDs"
                  },
                  {
                        "label": "Status",
                        "value": "Warm & Secure"
                  }
            ]
      },
      {
            "id": "d30_tco",
            "code": "#03",
            "title": "5-Year TCO & Financial ROI Calculator Formulation",
            "badgeLabel": "Financial ROI",
            "mandate": "Formulating comparative Capex vs Opex models proving migration cost-efficiencies to WAY4",
            "deliverable": "Interactive TCO spreadsheet model incorporating licensing, servers, and power savings",
            "riskMitigation": "Addressing bank CFOs with verified financial proof showing up to 35% savings",
            "steps": [
                  {
                        "phase": "Phase 1: Formula",
                        "action": "Compile hardware, license fees, and operational cost baselines"
                  },
                  {
                        "phase": "Phase 2: Compare",
                        "action": "Model traditional Capex vs modular Dual Engine Opex curves"
                  },
                  {
                        "phase": "Phase 3: Validate",
                        "action": "Simulate 5-year ROI proving verifiable 35% cost reduction"
                  }
            ],
            "specs": [
                  {
                        "label": "ROI Horizon",
                        "value": "5-Year Verified"
                  },
                  {
                        "label": "Cost Efficiency",
                        "value": "Up to 35%"
                  },
                  {
                        "label": "Deliverable",
                        "value": "C-Level Ready"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Day 30 Success Benchmarks",
      tcoTitle: "Existing Account Retention",
      tcoValue: "100% Secure",
      tcoSub: "Check-ins & warm stakeholder ties",
      speedTitle: "TCO Model Readiness",
      speedValue: "Turnkey Ready",
      speedSub: "Verified Capex/Opex calculators",
      mandateTitle: "Team Ramp-Up Velocity",
      mandateValue: "<30 Days",
      mandateSub: "Complete mastery of WAY4 stack"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Pre-Sales Synergy",
        subtitle: "Intensive commercial and technical capability alignment",
        metric: "100% Aligned",
        tag: "Internal",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Client Health Audit",
        subtitle: "Preserving existing contract stability without vulnerability",
        metric: "Zero Churn",
        tag: "Retention",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Business Case Validation",
        subtitle: "Financially grounded weapons ready for bank boardroom scrutiny",
        metric: "Data-Driven",
        tag: "Finance",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Pitch Collateral Readiness",
        subtitle: "Tailored bank pitch decks, proposals, and battlecards",
        metric: "Turnkey Ready",
        tag: "Execution",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Day 30 secures an airtight internal foundation, guarantees client retention, and preps high-value commercial assets.",
      target: "100% Internal Foundation · Turnkey TCO Model"
    }
  }
};
