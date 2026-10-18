const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Starting Slide 06 Implementation Batch ===');

// Ensure directory src/slide/06 exists
const slide06Dir = path.join(__dirname, '../src/slide/06');
fs.mkdirSync(slide06Dir, { recursive: true });

// ==============================================================
// 1. Create src/slide/06/lottie.json (3D Clean Governance Shield)
// ==============================================================
const lottieSlide06 = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "3D Clean Governance Shield & Growth Orbit",
  ddd: 0,
  assets: [],
  layers: [
    // Layer 1: Ground Shadow (Perspective Ellipse)
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ground Shadow",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [35] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [55] },
            { t: 180, s: [35] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 260, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [95, 24, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [112, 28, 100] },
            { t: 180, s: [95, 24, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [150, 42] } },
            { ty: "fl", c: { a: 0, k: [0.08, 0.12, 0.22, 0.35] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 2: Orbiting Dual-Track Growth Ribbon Ring
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Dual-Track Growth Ribbon Ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 180, s: [360] }
          ]
        },
        p: { a: 0, k: [150, 140, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 48, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [210, 210] } },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 8 } },
                { n: "g", nm: "gap", v: { a: 0, k: 6 } }
              ]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 3: 3D Governance Shield Outer Rim (Green #34a853)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Governance Shield Outer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 140, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 134, 0] },
            { t: 180, s: [150, 140, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [106, 106, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            // Shield Path
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [20, -10], [0, -35], [-20, -10]],
                  o: [[0, 0], [0, 0], [-20, 10], [0, 35], [20, 10]],
                  v: [[-48, -48], [48, -48], [48, 12], [0, 56], [-48, 12]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.2, 0.66, 0.33, 0.95] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.9, 0.96, 0.92, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Gold Shield Inset
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 0], [15, -8], [0, -26], [-15, -8]],
                  o: [[0, 0], [0, 0], [-15, 8], [0, 26], [15, 8]],
                  v: [[-36, -38], [36, -38], [36, 8], [0, 42], [-36, 8]]
                }
              }
            },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 0.2] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.98, 0.74, 0.02, 0.8] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 4: Audit Verified Checkmark (Center of Shield)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Audit Pass Checkmark",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [150, 140, 0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [150, 134, 0] },
            { t: 180, s: [150, 140, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [108, 108, 100] },
            { t: 180, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-16, -2], [-5, 10], [18, -12]]
                }
              }
            },
            { ty: "st", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 4.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 5: Sparkle Top Left (Gold #fbbc04)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Sparkle Top Left",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [30] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [35] },
            { t: 180, s: [30] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 180, s: [180] }
          ]
        },
        p: { a: 0, k: [75, 80, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [80, 80, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [12, 12] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    },

    // Layer 6: Sparkle Bottom Right (Blue #1a73e8)
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Sparkle Bottom Right",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [25] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [100] },
            { t: 180, s: [25] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [180], e: [0] },
            { t: 180, s: [0] }
          ]
        },
        p: { a: 0, k: [225, 195, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [75, 75, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [10, 10] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 45 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 180
    }
  ]
};

const slide06LottiePath = path.join(slide06Dir, 'lottie.json');
fs.writeFileSync(slide06LottiePath, JSON.stringify(lottieSlide06, null, 2), 'utf8');
console.log('[OK] Created src/slide/06/lottie.json');

// Also save to public/assets/lottie/slide-06.json
const publicLottiePath = path.join(__dirname, '../public/assets/lottie/slide-06.json');
fs.writeFileSync(publicLottiePath, JSON.stringify(lottieSlide06, null, 2), 'utf8');
console.log('[OK] Created public/assets/lottie/slide-06.json');

// ==============================================================
// 2. Create src/slide/06/data.ts (Bilingual IN | EN)
// ==============================================================
const slide06DataPath = path.join(slide06Dir, 'data.ts');
const slide06DataContent = `export type Language = 'IN' | 'EN';

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

export const SLIDE06_DATA: Record<Language, {
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
    descriptionTitle: "Pengadaan 100% Patuh Audit, Nol Risiko Hukum & Jalur Pengembangan Diri",
    descriptionText: "Menyelaraskan ambisi komersial tinggi dengan kepatuhan institusional dan etika tanpa kompromi. Teruji menyeimbangkan kepentingan klien, prinsipal teknologi, dan kerangka pengadaan ketat (setara standar LKPP) dengan rekam jejak bebas dari masalah hukum atau audit.",
    commitmentsTitle: "Tiga Pilar Integritas & Pertumbuhan Komersial",
    commitments: [
      {
        id: "commit_clean_governance",
        pillarIndex: "01",
        title: "Eksekusi Pengadaan 100% Bersih (LKPP Equivalent)",
        subtitle: "Menjamin proses komersial bebas sengketa hukum dan siap audit",
        scope: "Pengalaman teruji memenangkan proyek strategis Kemensos menyelaraskan PPK, pemilik merk, dan penyedia dana.",
        evidence: "100% Bersih & Nol Catatan Audit",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Tata Kelola Bersih"
      },
      {
        id: "commit_stakeholder_orchestration",
        pillarIndex: "02",
        title: "Orkestrasi Pemangku Kepentingan Terpadu",
        subtitle: "Mengamankan pengambil keputusan dan memfasilitasi tim teknis",
        scope: "Menjembatani C-Level, panitia pengadaan, divisi legal, dan tim Pre-Sales OpenWay menuju konsensus bersama.",
        evidence: "Fasilitasi Sempurna di Depan Klien",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Orkestrator"
      },
      {
        id: "commit_parallel_growth",
        pillarIndex: "03",
        title: "Pengembangan Diri Paralel: Intensif Bahasa Inggris",
        subtitle: "Komitmen transparan percepatan kelancaran forum internasional",
        scope: "Les privat intensif dengan private tutor guna mengakselerasi kelancaran percakapan di rapat dewan regional OpenWay.",
        evidence: "Progresif Bersama Private Tutor",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Perbaikan Diri"
      }
    ],
    metrics: {
      advantageTitle: "Parameter Integritas & Keselarasan",
      auditTrackTitle: "Rekam Jejak Kepatuhan",
      auditTrackValue: "100% Bersih",
      auditTrackSub: "Nol sengketa atau temuan audit",
      governanceStandardTitle: "Standar Pengadaan",
      governanceStandardValue: "Setara LKPP",
      governanceStandardSub: "Pengawasan institusional ketat",
      consensusTitle: "Keselarasan Ekosistem",
      consensusValue: "Konsensus Penuh",
      consensusSub: "C-Level, Legal & Prinsipal",
      englishGrowthTitle: "Akreditasi Bahasa Inggris",
      englishGrowthValue: "Intensif Tutor",
      englishGrowthSub: "Percepatan kelancaran global"
    },
    pillars: [
      {
        id: "pillar_clean_legacy",
        index: "01",
        title: "Rekam Jejak Kepatuhan Bersih",
        subtitle: "Pengalaman puluhan tahun bebas dari tuntutan etika atau hukum",
        metric: "100% Auditable",
        tag: "Integritas",
        accentColor: "#34a853"
      },
      {
        id: "pillar_institutional_trust",
        index: "02",
        title: "Kepercayaan Institusional",
        subtitle: "Menyeimbangkan kepentingan komite pengadaan dan dewan direksi",
        metric: "Jembatan C-Level",
        tag: "Kredibilitas",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_english_sprint",
        index: "03",
        title: "Percepatan Bahasa Inggris",
        subtitle: "Meningkatkan kepercayaan diri dalam forum eksekutif multinasional",
        metric: "Les Intensif",
        tag: "Pertumbuhan",
        accentColor: "#fbbc04"
      },
      {
        id: "pillar_day_one_ready",
        index: "04",
        title: "Komitmen Kesiapan Hari Pertama",
        subtitle: "Siap diterjunkan langsung memenangkan pasar switching Indonesia",
        metric: "100% Day-One",
        tag: "Komitmen",
        accentColor: "#ea4335"
      }
    ],
    takeaway: {
      proof: "Menghantarkan kesepakatan bernilai tinggi yang bersih, aman, dan patuh hukum tanpa risiko audit masa depan bagi OpenWay.",
      target: "Komitmen Eksekutif: 100% Siap Diterjunkan"
    }
  },
  EN: {
    header: {
      category: "Closing Commitment",
      catalyst: "Ethical Excellence & Clean Governance",
      title: "Clean Governance, Stakeholder Trust & Personal Growth"
    },
    descriptionTitle: "100% Auditable Procurement, Zero Legal Risk & Parallel Growth Track",
    descriptionText: "Aligning aggressive commercial drive with institutional compliance and flawless ethics. Proven capability in balancing client demands, technology providers, and strict public procurement frameworks (LKPP standard equivalent) with zero historical audit disputes.",
    commitmentsTitle: "Three Pillars of Integrity & Commercial Delivery",
    commitments: [
      {
        id: "commit_clean_governance",
        pillarIndex: "01",
        title: "100% Clean Procurement Execution (LKPP Standard)",
        subtitle: "Guaranteeing dispute-free, fully audit-ready commercial deals",
        scope: "Proven track record orchestrating Kemensos multi-stakeholder project aligning PPK, brand owner, and funding body under strict compliance.",
        evidence: "100% Clean & Zero Audit Findings",
        accentColor: "#34a853",
        bgPastel: "border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]",
        badgeLabel: "Clean Governance"
      },
      {
        id: "commit_stakeholder_orchestration",
        pillarIndex: "02",
        title: "Masterful Stakeholder Orchestration",
        subtitle: "Securing key decision-makers and empowering technical presales",
        scope: "Bridging IT C-Level, procurement committees, legal counsel, and OpenWay solution architects into unified consensus.",
        evidence: "Flawless Client-Facing Facilitation",
        accentColor: "#1a73e8",
        bgPastel: "border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]",
        badgeLabel: "Orchestration"
      },
      {
        id: "commit_parallel_growth",
        pillarIndex: "03",
        title: "Parallel Growth Track: Active English Refinement",
        subtitle: "Transparent commitment to fast-tracking international fluency",
        scope: "Intensive 1-on-1 private tutoring to rapidly elevate confidence and conversational fluency for multinational executive forums.",
        evidence: "Progressive Private Tutoring",
        accentColor: "#fbbc04",
        bgPastel: "border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]",
        badgeLabel: "Self-Improvement"
      }
    ],
    metrics: {
      advantageTitle: "Governance & Alignment Parameters",
      auditTrackTitle: "Compliance Track Record",
      auditTrackValue: "100% Clean",
      auditTrackSub: "Zero compliance disputes or findings",
      governanceStandardTitle: "Procurement Benchmark",
      governanceStandardValue: "LKPP Equivalent",
      governanceStandardSub: "High scrutiny institutional rigor",
      consensusTitle: "Ecosystem Alignment",
      consensusValue: "Full Consensus",
      consensusSub: "C-Level, Legal & Vendor alignment",
      englishGrowthTitle: "English Proficiency Sprint",
      englishGrowthValue: "Private Tutor",
      englishGrowthSub: "Rapid global fluency acceleration"
    },
    pillars: [
      {
        id: "pillar_clean_legacy",
        index: "01",
        title: "Clean Compliance Track Record",
        subtitle: "Decades of enterprise sales with zero ethical or legal disputes",
        metric: "100% Auditable",
        tag: "Integrity",
        accentColor: "#34a853"
      },
      {
        id: "pillar_institutional_trust",
        index: "02",
        title: "Institutional Trust & Gravitas",
        subtitle: "Balancing strict procurement committees with boardroom imperatives",
        metric: "C-Level Bridge",
        tag: "Credibility",
        accentColor: "#1a73e8"
      },
      {
        id: "pillar_english_sprint",
        index: "03",
        title: "English Fluency Acceleration",
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
`;
fs.writeFileSync(slide06DataPath, slide06DataContent, 'utf8');
console.log('[OK] Created src/slide/06/data.ts');

// ==============================================================
// 3. Create src/slide/06/container.tsx
// ==============================================================
const slide06ContainerPath = path.join(slide06Dir, 'container.tsx');
const slide06ContainerContent = `import { useState } from 'react';
import {
  SLIDE06_DATA,
  Language,
  GovernanceCommitment,
  ClosingPillar
} from './data';

export interface Slide06Controller {
  header: typeof SLIDE06_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  commitmentsTitle: string;
  commitments: GovernanceCommitment[];
  metrics: typeof SLIDE06_DATA['IN']['metrics'];
  pillars: ClosingPillar[];
  takeaway: typeof SLIDE06_DATA['IN']['takeaway'];
  activeCommitmentIndex: number;
  setActiveCommitmentIndex: (index: number) => void;
}

export function useSlide06Container(language: Language = 'IN'): Slide06Controller {
  const [activeCommitmentIndex, setActiveCommitmentIndex] = useState<number>(0);
  const data = SLIDE06_DATA[language] || SLIDE06_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    commitmentsTitle: data.commitmentsTitle,
    commitments: data.commitments,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCommitmentIndex,
    setActiveCommitmentIndex
  };
}
`;
fs.writeFileSync(slide06ContainerPath, slide06ContainerContent, 'utf8');
console.log('[OK] Created src/slide/06/container.tsx');

// ==============================================================
// 4. Create src/slide/06/visual-3D.tsx
// ==============================================================
const slide06VisualPath = path.join(slide06Dir, 'visual-3D.tsx');
const slide06VisualContent = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeCommitmentIndex?: number;
  onSelectCommitment?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      {/* Pure Visual Canvas: 100% Focused on 3D Clean Governance Shield Lottie Engine (Zero Title, Zero Text Cards) */}
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[220px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
`;
fs.writeFileSync(slide06VisualPath, slide06VisualContent, 'utf8');
console.log('[OK] Created src/slide/06/visual-3D.tsx');

// ==============================================================
// 5. Create src/slide/06/index.tsx
// ==============================================================
const slide06IndexPath = path.join(slide06Dir, 'index.tsx');
const slide06IndexContent = `import React from 'react';
import { useSlide06Container } from './container';
import { Visual3D } from './visual-3D';
import { ArrowUpRight, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { Language } from '../slidesData';

export interface Slide06Props {
  language?: Language;
}

export const Slide06: React.FC<Slide06Props> = ({ language = 'IN' }) => {
  const {
    header,
    descriptionTitle,
    descriptionText,
    commitmentsTitle,
    commitments,
    metrics,
    pillars,
    takeaway,
    activeCommitmentIndex,
    setActiveCommitmentIndex
  } = useSlide06Container(language);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent text-slate-800 font-inter select-none">
      {/* 1. Slide Header: Rata Tengah 2 Baris (Sub Judul Kecil Diatas & Judul Utama Besar 1-Line) */}
      <div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>{header.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">{header.catalyst}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {header.title}
        </h1>
      </div>

      {/* 2. Main Clean Governance Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Context & Governance / Personal Growth Stack */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              {descriptionTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              {descriptionText}
            </p>
          </div>

          {/* Three Commitments Cards: Flat-Mounted, Tabular Inter, Zero-Badge */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
              <span>{commitmentsTitle}</span>
              <span className="text-emerald-600 flex items-center gap-1 font-mono text-[9px] font-bold">
                <Award className="w-3 h-3" />
                <span>100% Verified</span>
              </span>
            </div>

            {commitments.map((item, idx) => {
              const isActive = idx === activeCommitmentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCommitmentIndex(idx)}
                  className={"p-2 rounded-lg border text-left transition-all cursor-pointer " + (
                    isActive
                      ? "bg-emerald-50/80 border-emerald-500/80 shadow-2xs ring-1 ring-emerald-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">
                        #{item.pillarIndex}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {item.title}
                      </span>
                    </div>
                    <span className={"text-[9px] font-mono font-bold px-1.5 py-0.2 rounded " + (
                      idx === 0 ? "bg-emerald-100/70 text-emerald-800" :
                      idx === 1 ? "bg-blue-100/70 text-blue-700" :
                      "bg-amber-100/70 text-amber-800"
                    )}>
                      {item.badgeLabel}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-600 font-medium leading-tight">
                    {item.scope}
                  </div>

                  <div className="text-[9px] text-slate-500 mt-1 pt-0.5 border-t border-slate-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{item.evidence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Clean Governance Shield Lottie Engine + Institutional Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main 3D Action Component with Bodymovin Shield & Verification Ring */}
          <div className="md:col-span-7 h-56 flex flex-col justify-between">
            <Visual3D
              activeCommitmentIndex={activeCommitmentIndex}
              onSelectCommitment={setActiveCommitmentIndex}
            />
          </div>

          {/* Strategic Metrics & Governance Standards (Tabular Inter, Zero-Click) */}
          <div className="md:col-span-5 flex flex-col justify-between border-l border-slate-100 pl-4 space-y-2.5">
            <div className="space-y-1 text-left">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {metrics.advantageTitle}
              </div>
              <div className="p-2.5 rounded bg-emerald-50/50 border border-emerald-100">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {metrics.auditTrackTitle}
                </div>
                <div className="text-2xl font-black text-emerald-700 font-inter tabular-nums mt-0.5">
                  {metrics.auditTrackValue}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium">
                  {metrics.auditTrackSub}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.governanceStandardTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.governanceStandardValue}
                </div>
                <div className="text-[9px] text-blue-600 font-medium">
                  {metrics.governanceStandardSub}
                </div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  {metrics.consensusTitle}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                  {metrics.consensusValue}
                </div>
                <div className="text-[9px] text-emerald-600 font-medium">
                  {metrics.consensusSub}
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50/90 border border-slate-100 text-left">
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                {metrics.englishGrowthTitle}
              </div>
              <div className="text-xs font-bold text-slate-800 font-inter mt-0.5">
                {metrics.englishGrowthValue}
              </div>
              <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                {metrics.englishGrowthSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Closing Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {pillars.map((pillar) => {
          const pastelStyles: Record<string, string> = {
            '#34a853': 'border-[#34a853] bg-[#e6f4ea]/40 text-[#137333]',
            '#1a73e8': 'border-[#1a73e8] bg-[#e8f0fe]/40 text-[#1a73e8]',
            '#fbbc04': 'border-[#fbbc04] bg-[#fef7e0]/40 text-[#b08000]',
            '#ea4335': 'border-[#ea4335] bg-[#fce8e6]/40 text-[#c5221f]',
          };
          const style = pastelStyles[pillar.accentColor] || 'border-emerald-600 bg-slate-50/60 text-emerald-700';
          const parts = style.split(' ');
          const borderBg = parts.slice(0, 2).join(' ');
          const textCol = parts[2];

          return (
            <div
              key={pillar.id}
              className={"p-2.5 rounded-xl border-l-2 transition-all flex flex-col justify-between " + borderBg}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  {pillar.index}
                </span>
                <span className={"text-[9px] font-mono font-bold " + textCol}>
                  {pillar.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 leading-tight font-inter">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium font-inter mt-0.5 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="text-right mt-1.5 pt-1 border-t border-slate-100/60">
                <span className={"text-[10px] font-mono font-bold " + textCol}>
                  {pillar.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs mt-1 shrink-0">
        <div className="text-slate-600 text-[11px] flex items-center gap-2 font-inter">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{takeaway.proof}</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-700 font-bold text-[11px] font-mono">
          <span>{takeaway.target}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default Slide06;
`;
fs.writeFileSync(slide06IndexPath, slide06IndexContent, 'utf8');
console.log('[OK] Created src/slide/06/index.tsx');

// ==============================================================
// 6. Update src/slide/slidesData.ts to add Slide 6 in IN & EN
// ==============================================================
const slidesDataPath = path.join(__dirname, '../src/slide/slidesData.ts');
let slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

const slide06MetadataIN = `    {
      id: 6,
      title: "Penutup & Tata Kelola Bersih (Closing)",
      subtitle: "Tata Kelola Bersih, Kepercayaan Pemangku Kepentingan & Perbaikan Diri",
      category: "Komitmen Penutup",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menutup presentasi dengan menunjukkan kematangan karakter, integritas tata kelola bebas risiko audit, dan transparansi area pengembangan diri.",
        talkingPoints: [
          "Sebagai penutup, kekuatan utama saya adalah mengorkestrasi kesepakatan bernilai besar yang bersih, aman, dan patuh hukum.",
          "Pengalaman saya memenangkan proyek strategis di Kementerian Sosial dengan menyelaraskan PPK, pemilik merk, dan pemilik dana sepenuhnya di bawah aturan ketat LKPP membuktikan bahwa seluruh transaksi berjalan tanpa masalah hukum atau temuan audit di kemudian hari.",
          "Peran saya adalah mengamankan pengambil keputusan dan memastikan tim teknis serta produk WAY4 terfasilitasi dengan sempurna di depan klien.",
          "Dan demikianlah cara saya mengelola kekurangan saya. Secara paralel, saya sedang mengejar kelancaran berbahasa Inggris saya secara intensif bersama private tutor."
        ],
        potentialQuestions: [
          "Bagaimana Anda memastikan koordinasi dengan tim regional OpenWay yang berbahasa Inggris berjalan lancar?"
        ],
        suggestedAnswer: "Komunikasi tertulis dan teknis saya sudah sangat memadai, dan untuk percakapan langsung, les privat intensif yang saya jalankan saat ini secara progresif meningkatkan kelancaran dan kepercayaan diri saya dalam forum resmi internasional."
      }
    }`;

const slide06MetadataEN = `    {
      id: 6,
      title: "Conclusion & Clean Governance (Closing)",
      subtitle: "Clean Governance, Stakeholder Trust & Personal Growth",
      category: "Closing Commitment",
      durationEstimate: "2 mins",
      speakerNotes: {
        purpose: "Close the interview presentation with mature executive character, unassailable procurement compliance, and transparent personal growth momentum.",
        talkingPoints: [
          "In closing, my core value is orchestrating multi-million dollar deals that are legally immaculate, secure, and audit-proof.",
          "My proven experience delivering strategic public tenders (LKPP equivalent) demonstrates that aligning procurement committees, brand owners, and financial bodies yields zero post-procurement compliance disputes.",
          "My mission is securing executive decision-makers and ensuring our technical presales and WAY4 platform shine flawlessly before client leadership.",
          "That's how I manage my weaknesses. At the same time, I am fast-tracking my English fluency by taking intensive lessons with a private tutor. Thank you."
        ],
        potentialQuestions: [
          "How do you ensure seamless collaboration with English-speaking regional teams across OpenWay?"
        ],
        suggestedAnswer: "My written and technical communication is already solid, and for executive dialogue, my ongoing intensive private tutoring is rapidly compounding my fluency and confidence for international boardroom forums."
      }
    }`;

// Insert into IN array if not already there
if (!slidesDataContent.includes('Penutup & Tata Kelola Bersih (Closing)')) {
  slidesDataContent = slidesDataContent.replace(
    /id:\s*5,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
    (match) => match + ',\n' + slide06MetadataIN
  );
}

// Insert into EN array if not already there
if (!slidesDataContent.includes('Conclusion & Clean Governance (Closing)')) {
  const parts = slidesDataContent.split('EN: [');
  if (parts.length > 1) {
    const enPart = parts[1].replace(
      /id:\s*5,[\s\S]*?suggestedAnswer:.*?\n\s*}\s*\n\s*}/,
      (match) => match + ',\n' + slide06MetadataEN
    );
    slidesDataContent = parts[0] + 'EN: [' + enPart;
  }
}

fs.writeFileSync(slidesDataPath, slidesDataContent, 'utf8');
console.log('[OK] Updated src/slide/slidesData.ts with Slide 06');

// ==============================================================
// 7. Update src/App.tsx to import & render Slide06
// ==============================================================
const appPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Add import if not present
if (!appContent.includes("import { Slide06 } from './slide/06';")) {
  appContent = appContent.replace(
    "import { Slide05 } from './slide/05';",
    "import { Slide05 } from './slide/05';\nimport { Slide06 } from './slide/06';"
  );
}

// Update switch statement in renderSlideContent
if (!appContent.includes('case 5:')) {
  appContent = appContent.replace(
    /case 4:\s*return <Slide05 language=\{language\} \/>;/,
    "case 4:\n        return <Slide05 language={language} />;\n      case 5:\n        return <Slide06 language={language} />;"
  );
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('[OK] Updated src/App.tsx with Slide 06 render');

console.log('=== Slide 06 Batch Implementation Completed Successfully! ===');
