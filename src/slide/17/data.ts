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

export const SLIDE17_DATA: Record<Language, {
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
      catalyst: "Pilar 2: Orkestrasi Pemangku Kepentingan",
      title: "Pilar 2: Orkestrasi Pemangku Kepentingan & Sinergi Lintas Fungsi"
    },
    descriptionTitle: "Menjembatani C-Level, Divisi Legal, Komite Pengadaan & Tim Teknis OpenWay",
    descriptionText: "Penjualan solusi perbankan bernilai tinggi bukan sekadar aktivitas individu, melainkan orkestrasi simfoni yang rumit. Berperan sebagai konduktor komersial yang menyelaraskan visi C-Suite, mitigasi risiko Legal/Compliance, kepatuhan komite pengadaan, dan kapabilitas tim Pre-Sales/Delivery OpenWay menuju satu konsensus kesepakatan.",
    cardsTitle: "Inisiatif & Fasilitasi Lintas Fungsi Utama",
    cardsBadge: "Orkestrator",
    cards: [
      {
            "id": "p2_csuite",
            "code": "#01",
            "title": "Penyelarasan Bahasa C-Suite dengan Tim Pre-Sales Teknis",
            "badgeLabel": "Executive Bridge",
            "mandate": "Menerjemahkan visi strategis direksi ke dalam arsitektur teknis konkret yang disiapkan tim solusi WAY4",
            "deliverable": "Executive summary komparatif dan deck presentasi yang fokus pada dampak bisnis serta ROI terukur",
            "riskMitigation": "Mencegah presentasi teknis yang membingungkan atau gagal memikat perhatian pengambil keputusan C-Level",
            "steps": [
                  {
                        "phase": "Tahap 1: Ekstraksi",
                        "action": "Ekstraksi KPI bisnis C-Level (efisiensi biaya, kepatuhan, revenue)"
                  },
                  {
                        "phase": "Tahap 2: Translasi",
                        "action": "Konversi spesifikasi modul WAY4 ke dalam matriks ROI bisnis"
                  },
                  {
                        "phase": "Tahap 3: Orkestrasi",
                        "action": "Fasilitasi sesi paparan C-Suite bersama Pre-Sales Director"
                  }
            ],
            "specs": [
                  {
                        "label": "Sasaran Pemangku",
                        "value": "Direksi C-Suite"
                  },
                  {
                        "label": "Bahasa Paparan",
                        "value": "Bisnis & ROI"
                  },
                  {
                        "label": "Tingkat Resonansi",
                        "value": "100% Relevan"
                  }
            ]
      },
      {
            "id": "p2_legal",
            "code": "#02",
            "title": "Negosiasi Kontrak & Manajemen Risiko Bersama Divisi Legal",
            "badgeLabel": "Legal Harmony",
            "mandate": "Mengurai hambatan klausul SLA, liabilitas, kedaulatan data, dan perlindungan IP bersama legal bank",
            "deliverable": "Draft kontrak berimbang yang dapat diterima kedua belah pihak tanpa menunda jadwal penandatanganan",
            "riskMitigation": "Mencegah kebuntuan negosiasi klausul hukum yang kerap menunda kesepakatan di menit-menit akhir",
            "steps": [
                  {
                        "phase": "Tahap 1: Review",
                        "action": "Pemetaan pasal krusial (SLA, limitasi liabilitas, kepatuhan data)"
                  },
                  {
                        "phase": "Tahap 2: Negosiasi",
                        "action": "Perumusan klausul win-win berimbang yang melindungi kedua pihak"
                  },
                  {
                        "phase": "Tahap 3: Clearance",
                        "action": "Persetujuan resmi penasihat hukum bank tanpa friksi berkepanjangan"
                  }
            ],
            "specs": [
                  {
                        "label": "Efisiensi Waktu",
                        "value": "-40% Siklus"
                  },
                  {
                        "label": "Klausul SLA",
                        "value": "Win-Win Seimbang"
                  },
                  {
                        "label": "Status Kontrak",
                        "value": "Clean Clearance"
                  }
            ]
      },
      {
            "id": "p2_procure",
            "code": "#03",
            "title": "Fasilitasi Harmonis dengan Komite Pengadaan (Procurement)",
            "badgeLabel": "Procurement Sync",
            "mandate": "Memastikan seluruh persyaratan komersial, garansi bank, dan skema penagihan sesuai regulasi internal perbankan",
            "deliverable": "Proposal komersial transparan dengan simulasi pentahapan pembayaran sesuai milestone proyek",
            "riskMitigation": "Mempercepat penerbitan Purchase Order (PO) dan menghindari dispute penagihan pasca go-live",
            "steps": [
                  {
                        "phase": "Tahap 1: Penyelarasan",
                        "action": "Klarifikasi skema pembayaran, jaminan bank, dan delivery milestones"
                  },
                  {
                        "phase": "Tahap 2: Dokumentasi",
                        "action": "Penyusunan berkas komersial formal sesuai aturan komite"
                  },
                  {
                        "phase": "Tahap 3: Penagihan",
                        "action": "Pengawalan proses PO hingga jadwal invoicing tanpa hambatan"
                  }
            ],
            "specs": [
                  {
                        "label": "Siklus PO",
                        "value": "Cepat & Tertib"
                  },
                  {
                        "label": "Skema Tagihan",
                        "value": "Milestone-Based"
                  },
                  {
                        "label": "Potensi Sengketa",
                        "value": "Nol (Zero)"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Parameter Keberhasilan Orkestrasi",
      tcoTitle: "Tingkat Konsensus Deal",
      tcoValue: "100% Selaras",
      tcoSub: "Bisnis, Legal, Pengadaan & Teknis",
      speedTitle: "Efisiensi Siklus Negosiasi",
      speedValue: "-40% Waktu",
      speedSub: "Mereduksi friksi birokrasi legal",
      mandateTitle: "Sinergi Pre-Sales",
      mandateValue: "Harmonis",
      mandateSub: "Dukungan penuh tim solusi OpenWay"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Bahasa Komersial C-Level",
        subtitle: "Mampu menyajikan kalkulasi finansial di meja Direktur Utama & CFO",
        metric: "Bahasa C-Level",
        tag: "Komunikasi",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Penyelarasan Pre-Sales",
        subtitle: "Menjadikan tim teknis pahlawan solusi di hadapan arsitek bank",
        metric: "Sinergi Erat",
        tag: "Solusi",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Harmonisasi Legal",
        subtitle: "Mengurai bahasa hukum tanpa mengorbankan keamanan kontrak OpenWay",
        metric: "Win-Win",
        tag: "Legal",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Mitigasi Friksi Pengadaan",
        subtitle: "Memastikan PO diterbitkan tepat waktu sesuai target kuartal",
        metric: "Fast Track",
        tag: "Eksekusi",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pilar 2 menjamin bahwa seluruh kesepakatan bernilai puluhan miliar rupiah dieksekusi dengan orkestrasi yang matang, menyatukan seluruh pihak tanpa friksi.",
      target: "100% Ekosistem Selaras · Siklus Negosiasi Cepat"
    }
  },
  EN: {
    header: {
      category: "Integrity Commitment Deep Dive",
      catalyst: "Pillar 2: Stakeholder Orchestration",
      title: "Pillar 2: Stakeholder Orchestration & Cross-Functional Synergy"
    },
    descriptionTitle: "Uniting C-Level, Legal Divisions, Procurement & OpenWay Technical Teams",
    descriptionText: "High-value banking enterprise sales is never a lone-wolf endeavor, but a sophisticated orchestral alignment. Acting as a strategic commercial conductor bridging C-Suite vision, Legal and Compliance risk frameworks, procurement mandates, and OpenWay Pre-Sales and Delivery teams into unified boardroom consensus.",
    cardsTitle: "Key Cross-Functional Orchestration Initiatives",
    cardsBadge: "Orchestrator",
    cards: [
      {
            "id": "p2_csuite",
            "code": "#01",
            "title": "Executive Language Translation: C-Suite & Pre-Sales",
            "badgeLabel": "Executive Bridge",
            "mandate": "Translating board-level business mandates into verified architectural constructs delivered by WAY4 solution leads",
            "deliverable": "Comparative executive summaries and business decks highlighting bottom-line ROI and BSPI alignment",
            "riskMitigation": "Preventing overly complex technical jargon from alienating C-Suite financial decision-makers",
            "steps": [
                  {
                        "phase": "Phase 1: Extract",
                        "action": "Capture core C-Suite priorities: cost reduction, compliance, growth"
                  },
                  {
                        "phase": "Phase 2: Translate",
                        "action": "Convert WAY4 deep tech capabilities into clear financial ROI curves"
                  },
                  {
                        "phase": "Phase 3: Orchestrate",
                        "action": "Co-lead boardroom presentations alongside Pre-Sales Director"
                  }
            ],
            "specs": [
                  {
                        "label": "Target Audience",
                        "value": "C-Suite Board"
                  },
                  {
                        "label": "Pitch Language",
                        "value": "Business & ROI"
                  },
                  {
                        "label": "Resonance",
                        "value": "100% Impactful"
                  }
            ]
      },
      {
            "id": "p2_legal",
            "code": "#02",
            "title": "Contract Negotiation & Risk Management with Legal Counsel",
            "badgeLabel": "Legal Harmony",
            "mandate": "Navigating SLA clauses, liability caps, data residency mandates, and IP protection alongside bank legal teams",
            "deliverable": "Balanced master services agreements acceptable to both sides without delaying signature milestones",
            "riskMitigation": "Preventing costly 11th-hour legal gridlocks that traditionally stall multi-million deals",
            "steps": [
                  {
                        "phase": "Phase 1: Triage",
                        "action": "Map high-risk clauses: tiered SLAs, liability caps, data residency"
                  },
                  {
                        "phase": "Phase 2: Harmonize",
                        "action": "Formulate balanced win-win phrasing safeguarding mutual rights"
                  },
                  {
                        "phase": "Phase 3: Clearance",
                        "action": "Secure definitive legal counsel sign-off without friction"
                  }
            ],
            "specs": [
                  {
                        "label": "Cycle Time",
                        "value": "-40% Speedup"
                  },
                  {
                        "label": "SLA Clauses",
                        "value": "Win-Win Balanced"
                  },
                  {
                        "label": "Legal Status",
                        "value": "Clean Clearance"
                  }
            ]
      },
      {
            "id": "p2_procure",
            "code": "#03",
            "title": "Harmonious Facilitation with Bank Procurement Committees",
            "badgeLabel": "Procurement Sync",
            "mandate": "Ensuring all commercial terms, bank performance bonds, and billing milestones conform to banking rules",
            "deliverable": "Transparent commercial quotation package with phased billing schedules aligned to project deliverables",
            "riskMitigation": "Expediting Purchase Order (PO) issuance while preventing post-implementation billing disputes",
            "steps": [
                  {
                        "phase": "Phase 1: Alignment",
                        "action": "Clarify billing milestones, bank guarantees, and deliverables"
                  },
                  {
                        "phase": "Phase 2: Packaging",
                        "action": "Assemble formal quotation files complying with procurement rules"
                  },
                  {
                        "phase": "Phase 3: Execution",
                        "action": "Accelerate PO issuance and smooth invoicing procedures"
                  }
            ],
            "specs": [
                  {
                        "label": "PO Velocity",
                        "value": "Expedited"
                  },
                  {
                        "label": "Payment Terms",
                        "value": "Milestone Phased"
                  },
                  {
                        "label": "Dispute Rate",
                        "value": "Zero (None)"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Orchestration Success Benchmarks",
      tcoTitle: "Deal Consensus Rate",
      tcoValue: "100% Aligned",
      tcoSub: "Business, Legal, Procurement & Tech",
      speedTitle: "Negotiation Efficiency",
      speedValue: "-40% Time",
      speedSub: "Compressing legal bureaucratic friction",
      mandateTitle: "Pre-Sales Synergy",
      mandateValue: "Harmonious",
      mandateSub: "Complete OpenWay solution backing"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "C-Level Commercial Fluency",
        subtitle: "Delivering financial ROI models in front of Chief Executive & Financial Officers",
        metric: "C-Level Fluency",
        tag: "Executive",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Pre-Sales Team Synergy",
        subtitle: "Positioning technical engineers as hero solution architects before client banks",
        metric: "Tight Synergy",
        tag: "Solutions",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Legal Risk Harmonization",
        subtitle: "Demystifying contractual terms without compromising OpenWay commercial security",
        metric: "Win-Win",
        tag: "Legal",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Procurement Friction De-Risking",
        subtitle: "Ensuring PO release matches targeted quarterly revenue milestones",
        metric: "Fast Track",
        tag: "Execution",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Pillar 2 ensures multi-million dollar deals are executed through mature cross-functional alignment, uniting all stakeholders without friction.",
      target: "100% Ecosystem Consensus · Accelerated Cycle"
    }
  }
};
