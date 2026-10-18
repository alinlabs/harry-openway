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

export const SLIDE14_DATA: Record<Language, {
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
      catalyst: "Tahap 3 [Hari 61 - 90+]: Akselerasi Pipeline & Closing",
      title: "Hari 61 - 90+: Akselerasi Pipeline, Validasi PoC & Komitmen Penjualan"
    },
    descriptionTitle: "Validasi Teknis Lapangan, Cross-Selling Modul Eksisting & Pembangunan Pipeline 12 Bulan",
    descriptionText: "Bulan ketiga adalah momentum panen hasil dan pembuktian komitmen jangka panjang. Menjalankan Proof of Concept (PoC) terukur untuk mengunci advokasi teknis komite, mengeksekusi cross-selling modul add-on bernilai tinggi ke akun eksisting, serta membangun komitmen pipeline 12 bulan senilai puluhan miliar rupiah yang siap diaudit.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 61 - 90+",
    cardsBadge: "Pipeline Closing",
    cards: [
      {
            "id": "d90_poc",
            "code": "#01",
            "title": "Pelaksanaan Proof of Concept (PoC) & Uji Beban Terukur",
            "badgeLabel": "Validasi PoC",
            "mandate": "Memperagakan performa sub-detik TPS, kemudahan konfigurasi produk, dan kepatuhan SNAP BI di hadapan tim teknis bank",
            "deliverable": "Laporan resmi hasil uji PoC yang ditandatangani arsitek bank sebagai rekomendasi komite",
            "riskMitigation": "Mengubah keraguan evaluator teknis menjadi kepastian dukungan 100%",
            "steps": [
                  {
                        "phase": "Tahap 1: Persiapan",
                        "action": "Setup lingkungan pengujian sandbox & integrasi API SNAP BI"
                  },
                  {
                        "phase": "Tahap 2: Stresstest",
                        "action": "Simulasi beban 10.000+ TPS dengan latensi sub-detik terverifikasi"
                  },
                  {
                        "phase": "Tahap 3: Sertifikasi",
                        "action": "Penerbitan Berita Acara PoC bertanda tangan arsitek utama bank"
                  }
            ],
            "specs": [
                  {
                        "label": "Kapasitas TPS",
                        "value": "10.000+ TPS"
                  },
                  {
                        "label": "Standar API",
                        "value": "SNAP BI 100%"
                  },
                  {
                        "label": "Dukungan Teknis",
                        "value": "100% Sign-Off"
                  }
            ]
      },
      {
            "id": "d90_farming",
            "code": "#02",
            "title": "Eksekusi Cross-Selling Modul Add-on ke Akun Eksisting",
            "badgeLabel": "Farming Closing",
            "mandate": "Menutup kesepakatan penjualan modul tambahan (SoftPOS, Digital Wallet, SNAP BI Gateway) pada akun existing",
            "deliverable": "Surat Pesanan Kerja (PO) atau amandemen kontrak ekspansi lisensi modul baru",
            "riskMitigation": "Mempercepat revenue perolehan tanpa harus menunggu siklus tender bank baru yang panjang",
            "steps": [
                  {
                        "phase": "Tahap 1: Solusi",
                        "action": "Penyusunan business proposal modul add-on spesifik kebutuhan akun"
                  },
                  {
                        "phase": "Tahap 2: Komersial",
                        "action": "Negosiasi skema lisensi ekspansi & penyesuaian SLA pemeliharaan"
                  },
                  {
                        "phase": "Tahap 3: Closing",
                        "action": "Eksekusi Purchase Order (PO) amandemen kontrak lisensi"
                  }
            ],
            "specs": [
                  {
                        "label": "Target Modul",
                        "value": "Min. 1 Modul"
                  },
                  {
                        "label": "Waktu Closing",
                        "value": "< 90 Hari"
                  },
                  {
                        "label": "Tipe Pendapatan",
                        "value": "Quick-Win ARR"
                  }
            ]
      },
      {
            "id": "d90_pipeline",
            "code": "#03",
            "title": "Penguncian Komitmen Sales Pipeline 12 Bulan",
            "badgeLabel": "Komitmen Pipeline",
            "mandate": "Mengorganisir seluruh peluang terkualifikasi ke dalam pipeline terstruktur dan siap diaudit manajemen",
            "deliverable": "Dashboard pipeline penjualan 12 bulan dengan tahapan deal, perkiraan nilai kontrak, dan waktu closing",
            "riskMitigation": "Menjamin visibilitas pendapatan jangka panjang dan target penjualan tahunan OpenWay tercapai",
            "steps": [
                  {
                        "phase": "Tahap 1: Audit Nilai",
                        "action": "Kualifikasi peluang komersial perbankan dengan metodologi MEDDIC"
                  },
                  {
                        "phase": "Tahap 2: Estimasi",
                        "action": "Penetapan nilai kontrak dan jadwal pentahapan implementasi"
                  },
                  {
                        "phase": "Tahap 3: Komitmen",
                        "action": "Penyerahan dashboard pipeline terverifikasi ke manajemen regional"
                  }
            ],
            "specs": [
                  {
                        "label": "Horizon Waktu",
                        "value": "12 Bulan Penuh"
                  },
                  {
                        "label": "Kualitas Data",
                        "value": "Audit-Ready"
                  },
                  {
                        "label": "Valuasi Target",
                        "value": "Puluhan Miliar"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-90",
      tcoTitle: "Komitmen Pipeline 12-Bulan",
      tcoValue: "12-Bulan Penuh",
      tcoSub: "Peluang terverifikasi & siap diaudit",
      speedTitle: "Validasi PoC Teknis",
      speedValue: "100% Berhasil",
      speedSub: "Lulus uji kepatuhan SNAP BI & TPS",
      mandateTitle: "Peluang Cross-Selling",
      mandateValue: "Min. 1 Modul",
      mandateSub: "Ekspansi modul baru di akun existing"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Kepercayaan Evaluator Teknis",
        subtitle: "Menjadikan tim arsitek bank sebagai promoter aktif penawaran WAY4",
        metric: "100% Buy-in",
        tag: "Advokasi",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Pendapatan Cepat (Quick Wins)",
        subtitle: "Menghasilkan revenue dari akun existing selagi menunggu tender bank baru",
        metric: "Quick Win",
        tag: "Revenue",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Ketahanan Pipeline Tahunan",
        subtitle: "Menghindari kekosongan proyek dengan pipeline berlapis multi-klien",
        metric: "High Value",
        tag: "Pipeline",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Kesiapan Tender Formal",
        subtitle: "Dokumen teknis dan komersial siap saat RFP resmi dirilis ke publik",
        metric: "Tender Ready",
        tag: "Closing",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Hari ke-90 membuktikan bahwa Harry bukan sekadar berjanji, melainkan menghadirkan hasil nyata: pipeline puluhan miliar rupiah yang terverifikasi.",
      target: "12-Month Sales Pipeline Terkunci · 100% PoC Approval"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 3 [Days 61 - 90+]: Pipeline Acceleration & Closing",
      title: "Days 61 - 90+: Pipeline Acceleration, PoC Validation & Sales Commitment"
    },
    descriptionTitle: "Field PoC Validation, Existing Account Add-ons & 12-Month Pipeline Commitment",
    descriptionText: "The third month is the conversion milestone proving long-term commercial delivery. Running focused Proof of Concept (PoC) benchmarks to cement technical advocacy, executing high-margin module cross-sells into existing accounts, and locking an audit-ready multi-billion IDR 12-month sales pipeline.",
    cardsTitle: "Key Initiatives & Deliverables for Days 61 - 90+",
    cardsBadge: "Pipeline Closing",
    cards: [
      {
            "id": "d90_poc",
            "code": "#01",
            "title": "Targeted Proof of Concept (PoC) & High-Load Validation",
            "badgeLabel": "PoC Validation",
            "mandate": "Demonstrating sub-second TPS speeds, agile product configuration, and SNAP BI compliance to bank architects",
            "deliverable": "Formal PoC sign-off report endorsed by bank technical committee as official award basis",
            "riskMitigation": "Transforming technical evaluator skepticism into unanimous championship",
            "steps": [
                  {
                        "phase": "Phase 1: Setup",
                        "action": "Deploy sandbox test environment and connect SNAP BI test harness"
                  },
                  {
                        "phase": "Phase 2: Stress",
                        "action": "Execute 10,000+ TPS stress test verifying sub-second latency"
                  },
                  {
                        "phase": "Phase 3: Endorse",
                        "action": "Acquire formal technical acceptance certificate from lead architect"
                  }
            ],
            "specs": [
                  {
                        "label": "Throughput",
                        "value": "10,000+ TPS"
                  },
                  {
                        "label": "Standard",
                        "value": "SNAP BI 100%"
                  },
                  {
                        "label": "Tech Sign-Off",
                        "value": "Unanimous"
                  }
            ]
      },
      {
            "id": "d90_farming",
            "code": "#02",
            "title": "Cross-Selling Add-on Modules into Existing Accounts",
            "badgeLabel": "Farming Closing",
            "mandate": "Closing incremental module deals (SoftPOS, Digital Wallet, SNAP BI Gateway) with existing client base",
            "deliverable": "Executed Purchase Order (PO) or license contract amendment for new functional modules",
            "riskMitigation": "Accelerating revenue recognition without awaiting lengthy new bank tender cycles",
            "steps": [
                  {
                        "phase": "Phase 1: Pitch",
                        "action": "Formulate bespoke add-on expansion proposals tailored to PICs"
                  },
                  {
                        "phase": "Phase 2: Terms",
                        "action": "Negotiate favorable expansion license terms and maintenance tiers"
                  },
                  {
                        "phase": "Phase 3: Award",
                        "action": "Secure Purchase Order (PO) contract amendment"
                  }
            ],
            "specs": [
                  {
                        "label": "Module Target",
                        "value": "Min. 1 Module"
                  },
                  {
                        "label": "Closing SLA",
                        "value": "< 90 Days"
                  },
                  {
                        "label": "Revenue Type",
                        "value": "Quick-Win ARR"
                  }
            ]
      },
      {
            "id": "d90_pipeline",
            "code": "#03",
            "title": "12-Month Sales Pipeline Commitment & Lock-In",
            "badgeLabel": "Pipeline Commitment",
            "mandate": "Consolidating all qualified opportunities into an audit-ready, predictable commercial pipeline",
            "deliverable": "12-month commercial pipeline dashboard with deal stages, contract estimates, and closing timelines",
            "riskMitigation": "Securing multi-year revenue transparency and ensuring annual quota attainment",
            "steps": [
                  {
                        "phase": "Phase 1: Qualify",
                        "action": "Rigorously qualify deals using verified enterprise MEDDIC gates"
                  },
                  {
                        "phase": "Phase 2: Valuation",
                        "action": "Establish defensible contract valuations & rollout timelines"
                  },
                  {
                        "phase": "Phase 3: Review",
                        "action": "Present board-level pipeline audit dashboard to leadership"
                  }
            ],
            "specs": [
                  {
                        "label": "Time Horizon",
                        "value": "Full 12-Month"
                  },
                  {
                        "label": "Integrity",
                        "value": "Audit-Ready"
                  },
                  {
                        "label": "Target Value",
                        "value": "Tens of Billions"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Day 90 Success Benchmarks",
      tcoTitle: "12-Month Pipeline Commitment",
      tcoValue: "Full 12-Months",
      tcoSub: "Verified & audit-ready opportunities",
      speedTitle: "Technical PoC Validation",
      speedValue: "100% Success",
      speedSub: "Passed SNAP BI & TPS benchmark tests",
      mandateTitle: "Cross-Selling Opportunities",
      mandateValue: "Min. 1 Module",
      mandateSub: "New module add-ons in existing accounts"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Technical Evaluator Trust",
        subtitle: "Transforming bank architects into active promoters of WAY4 solutions",
        metric: "100% Buy-in",
        tag: "Advocacy",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Immediate Quick Wins",
        subtitle: "Generating high-margin revenue from existing accounts while courting new bank tenders",
        metric: "Quick Win",
        tag: "Revenue",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Annual Pipeline Resilience",
        subtitle: "Eliminating revenue droughts through multi-tiered multi-client opportunities",
        metric: "High Value",
        tag: "Pipeline",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Formal Tender Readiness",
        subtitle: "Comprehensive commercial and technical documentation primed before official RFP release",
        metric: "Tender Ready",
        tag: "Closing",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Day 90 proves Harry delivers measurable commercial execution: an audit-ready multi-billion IDR pipeline.",
      target: "12-Month Sales Pipeline Locked · 100% PoC Approval"
    }
  }
};
