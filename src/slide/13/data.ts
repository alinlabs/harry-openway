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

export const SLIDE13_DATA: Record<Language, {
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
      catalyst: "Tahap 2 [Hari 31 - 60]: Penetrasi Pasar & Akses C-Level",
      title: "Hari 31 - 60: Penetrasi Pasar, Pemetaan C-Level & Discovery Meeting"
    },
    descriptionTitle: "Aktivasi Jaringan Ring-2, Akses Pintu Direksi & Presentasi Solusi Dual Engine",
    descriptionText: "Bulan kedua adalah fase pergerakan eksternal agresif namun terukur. Mengaktifkan jaringan ring kedua untuk menembus pintu C-Level bank komersial menengah dalam <14 hari, menyusun Buying Centre Dossier, serta membuka minimal 2 discovery meeting resmi membawa proposisi Dual Engine tanpa risiko downtime.",
    cardsTitle: "Inisiatif & Deliverables Utama Hari 31 - 60",
    cardsBadge: "Akses C-Level",
    cards: [
      {
            "id": "d60_ring2",
            "code": "#01",
            "title": "Aktivasi Ring Kedua & Penyusunan Buying Centre Dossier",
            "badgeLabel": "Intelijen Akun",
            "mandate": "Memetakan pengambil keputusan kunci di 3 bank komersial menengah target (Direktur IT, Bisnis, Risiko)",
            "deliverable": "Dossier profil 3 bank target lengkap dengan kendala sistem lama dan jendela tender",
            "riskMitigation": "Menghindari pendekatan acak atau cold calling yang tidak efektif",
            "steps": [
                  {
                        "phase": "Tahap 1: Profiling",
                        "action": "Audit kendala sistem legacy perbankan & jadwal evaluasi anggaran"
                  },
                  {
                        "phase": "Tahap 2: Stakeholder",
                        "action": "Pemetaan matriks pengaruh C-Level (Direktur IT, Bisnis, Risiko)"
                  },
                  {
                        "phase": "Tahap 3: Dossier",
                        "action": "Finalisasi dossier intelijen akun komersial siap pakai"
                  }
            ],
            "specs": [
                  {
                        "label": "Bank Target",
                        "value": "3 Bank Komersial"
                  },
                  {
                        "label": "Metode Akses",
                        "value": "Warm Network"
                  },
                  {
                        "label": "Output Dossier",
                        "value": "100% Lengkap"
                  }
            ]
      },
      {
            "id": "d60_access",
            "code": "#02",
            "title": "Warm Introduction C-Level dalam Waktu <14 Hari",
            "badgeLabel": "Akses Direksi",
            "mandate": "Mengamankan pertemuan tingkat direksi melalui koneksi terpercaya di ekosistem perbankan",
            "deliverable": "Jadwal executive meeting langsung dengan Direktur IT/CTO dan Kepala Divisi Pembayaran",
            "riskMitigation": "Memotong siklus birokrasi perbankan berbulan-bulan menjadi hitungan hari",
            "steps": [
                  {
                        "phase": "Tahap 1: Outreach",
                        "action": "Aktivasi introduksi personal melalui jejaring terpercaya industri"
                  },
                  {
                        "phase": "Tahap 2: Briefing",
                        "action": "Penyampaian executive brief 1 lembar mengenai urgensi BSPI 2030"
                  },
                  {
                        "phase": "Tahap 3: Meeting",
                        "action": "Penetapan jadwal discovery meeting resmi dengan Direksi C-Suite"
                  }
            ],
            "specs": [
                  {
                        "label": "Kecepatan Akses",
                        "value": "< 14 Hari"
                  },
                  {
                        "label": "Level Pertemuan",
                        "value": "Direksi / C-Suite"
                  },
                  {
                        "label": "Target Jadwal",
                        "value": "Min. 2 Bank"
                  }
            ]
      },
      {
            "id": "d60_dual",
            "code": "#03",
            "title": "Presentasi Solusi Dual Engine & Pre-RFP Shaping",
            "badgeLabel": "Dual Engine Pitch",
            "mandate": "Memaparkan arsitektur koeksistensi paralel WAY4 yang memitigasi ketakutan dewan direksi atas risiko downtime",
            "deliverable": "Executive brief solusi Dual Engine dan rancangan kriteria tender yang selaras dengan BSPI 2030",
            "riskMitigation": "Menetralkan keberatan dewan direksi mengenai gangguan operasional perbankan",
            "steps": [
                  {
                        "phase": "Tahap 1: Pitching",
                        "action": "Presentasi arsitektur Dual Engine tanpa risiko downtime operasional"
                  },
                  {
                        "phase": "Tahap 2: TOR Framing",
                        "action": "Penyelarasan kriteria teknis RFP dengan kapabilitas modular WAY4"
                  },
                  {
                        "phase": "Tahap 3: Advokasi",
                        "action": "Penguncian dukungan awal Direktur IT untuk uji konsep lapangan"
                  }
            ],
            "specs": [
                  {
                        "label": "Resiko Downtime",
                        "value": "Nol (Zero Risk)"
                  },
                  {
                        "label": "Strategi Tender",
                        "value": "Pre-RFP Shaping"
                  },
                  {
                        "label": "Konsensus Klien",
                        "value": "Strong Buy-In"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Target Evaluasi Hari Ke-60",
      tcoTitle: "Buying Centre Dossier",
      tcoValue: "3 Bank Target",
      tcoSub: "Profil C-Level & peta arsitektur lengkap",
      speedTitle: "Discovery Meeting Resmi",
      speedValue: "2+ Pertemuan",
      speedSub: "Tingkat Direktur IT / C-Suite",
      mandateTitle: "Kecepatan Akses Direksi",
      mandateValue: "<14 Hari",
      mandateSub: "Aktivasi personal warm network ring-2"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "Akses Pintu C-Level",
        subtitle: "Menghubungkan proposisi WAY4 langsung ke pengambil keputusan tertinggi",
        metric: "Pintu Terbuka",
        tag: "Akses Direksi",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Eliminasi Ketakutan Migrasi",
        subtitle: "Membuktikan bahwa sistem lama tidak perlu dimatikan mendadak",
        metric: "Zero Downtime",
        tag: "Mitigasi Risiko",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Pengaruh Pra-Tender",
        subtitle: "Memasukkan kriteria modularitas dan SNAP BI sebelum tender dibuka",
        metric: "Pre-RFP Lock",
        tag: "Komersial",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Kualifikasi Kebutuhan Nyata",
        subtitle: "Mengidentifikasi tanggal pasti tender dan alokasi anggaran belanja",
        metric: "Budget Match",
        tag: "Pipeline",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Hari ke-60 berhasil membuka akses dewan direksi bank target, menyajikan proposisi Dual Engine, dan mengunci komitmen discovery teknis.",
      target: "3 Dossier Bank Target · 2 Discovery Meeting Direksi"
    }
  },
  EN: {
    header: {
      category: "Action Plan Deep Dive",
      catalyst: "Phase 2 [Days 31 - 60]: Market Penetration & C-Level Access",
      title: "Days 31 - 60: Market Penetration, C-Level Access & Discovery Meetings"
    },
    descriptionTitle: "Ring-2 Network Activation, Boardroom Access & Dual Engine Presentation",
    descriptionText: "The second month shifts outward into disciplined commercial offense. Activating trusted ring-2 executive networks to unlock mid-tier bank boardrooms in <14 days, compiling comprehensive Buying Centre Dossiers, and conducting at least 2 executive discovery sessions with Dual Engine risk-free migration.",
    cardsTitle: "Key Initiatives & Deliverables for Days 31 - 60",
    cardsBadge: "C-Level Access",
    cards: [
      {
            "id": "d60_ring2",
            "code": "#01",
            "title": "Ring-2 Ecosystem Activation & Buying Centre Dossier",
            "badgeLabel": "Account Intelligence",
            "mandate": "Mapping key decision-makers across 3 targeted mid-tier commercial banks (IT, Business, Risk Directors)",
            "deliverable": "Intelligence dossier profiling 3 banks with legacy vulnerabilities and tender timelines",
            "riskMitigation": "Eliminating random spray-and-pray tactics or ineffective cold calls",
            "steps": [
                  {
                        "phase": "Phase 1: Profiling",
                        "action": "Audit legacy platform pain points & budget review cycles"
                  },
                  {
                        "phase": "Phase 2: Influence",
                        "action": "Map C-Level decision matrix across IT, Business & Compliance"
                  },
                  {
                        "phase": "Phase 3: Dossier",
                        "action": "Finalize actionable account commercial dossiers"
                  }
            ],
            "specs": [
                  {
                        "label": "Target Banks",
                        "value": "3 Mid-Tier Banks"
                  },
                  {
                        "label": "Approach",
                        "value": "Warm Network"
                  },
                  {
                        "label": "Dossier Output",
                        "value": "100% Complete"
                  }
            ]
      },
      {
            "id": "d60_access",
            "code": "#02",
            "title": "C-Level Warm Introductions within <14 Days",
            "badgeLabel": "Board Access",
            "mandate": "Securing board-level discovery sessions leveraging trusted executive industry relationships",
            "deliverable": "Confirmed executive boardroom calendar with IT Directors/CTOs and Heads of Payments",
            "riskMitigation": "Compressing months of bureaucratic gatekeeping into a 14-day direct sprint",
            "steps": [
                  {
                        "phase": "Phase 1: Outreach",
                        "action": "Activate warm personal intros through senior trusted alumni"
                  },
                  {
                        "phase": "Phase 2: Briefing",
                        "action": "Deliver concise 1-page executive brief on BSPI 2030 deadlines"
                  },
                  {
                        "phase": "Phase 3: Booking",
                        "action": "Lock boardroom discovery meetings with C-Suite leadership"
                  }
            ],
            "specs": [
                  {
                        "label": "Access Velocity",
                        "value": "< 14 Days"
                  },
                  {
                        "label": "Meeting Level",
                        "value": "Board / C-Suite"
                  },
                  {
                        "label": "Target Volume",
                        "value": "Min. 2 Banks"
                  }
            ]
      },
      {
            "id": "d60_dual",
            "code": "#03",
            "title": "Dual Engine Pitch & Pre-RFP Requirement Shaping",
            "badgeLabel": "Dual Engine Pitch",
            "mandate": "Demonstrating WAY4 parallel coexistence architecture that completely eliminates cutover downtime fears",
            "deliverable": "Executive brief on Dual Engine coexistence and tender requirement criteria mapped to BSPI 2030",
            "riskMitigation": "Neutralizing board resistance regarding core transactional disruption",
            "steps": [
                  {
                        "phase": "Phase 1: Pitching",
                        "action": "Present Dual Engine zero-downtime parallel migration pathway"
                  },
                  {
                        "phase": "Phase 2: TOR Shaping",
                        "action": "Align tender evaluation criteria with WAY4 modular advantages"
                  },
                  {
                        "phase": "Phase 3: Advocacy",
                        "action": "Secure IT Director consensus for technical proof of concept"
                  }
            ],
            "specs": [
                  {
                        "label": "Cutover Risk",
                        "value": "Zero Downtime"
                  },
                  {
                        "label": "Tender Method",
                        "value": "Pre-RFP Shaping"
                  },
                  {
                        "label": "Client Buy-In",
                        "value": "Board Confirmed"
                  }
            ]
      }
],
    metrics: {
      advantageTitle: "Day 60 Success Benchmarks",
      tcoTitle: "Buying Centre Dossiers",
      tcoValue: "3 Target Banks",
      tcoSub: "C-Level contacts & architectural maps",
      speedTitle: "Formal Discovery Meetings",
      speedValue: "2+ Sessions",
      speedSub: "IT Director & C-Suite level",
      mandateTitle: "Board Access Velocity",
      mandateValue: "<14 Days",
      mandateSub: "Ring-2 warm personal network engagement"
    },
    pillars: [
      {
        id: "p1",
        index: "01",
        title: "C-Level Door Openers",
        subtitle: "Connecting WAY4 value directly with highest executive decision makers",
        metric: "Doors Open",
        tag: "Board Access",
        accentColor: "#1d4ed8"
      },
      {
        id: "p2",
        index: "02",
        title: "Migration Fear De-Risking",
        subtitle: "Proving legacy switches do not face catastrophic cutover shutdowns",
        metric: "Zero Downtime",
        tag: "De-Risking",
        accentColor: "#1d4ed8"
      },
      {
        id: "p3",
        index: "03",
        title: "Pre-Tender Criteria Shaping",
        subtitle: "Injecting modularity and SNAP BI requirements before RFPs go public",
        metric: "Pre-RFP Lock",
        tag: "Commercial",
        accentColor: "#1d4ed8"
      },
      {
        id: "p4",
        index: "04",
        title: "Real Budget Qualification",
        subtitle: "Identifying exact replacement project dates and Capex allocations",
        metric: "Budget Match",
        tag: "Pipeline",
        accentColor: "#1d4ed8"
      }
    ],
    takeaway: {
      proof: "Day 60 unlocks direct board access in target banks, presents the Dual Engine proposition, and secures technical discovery commitments.",
      target: "3 Target Bank Dossiers · 2 Executive Discovery Sessions"
    }
  }
};
