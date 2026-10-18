export type Language = 'IN' | 'EN';

export interface SlideMetadata {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  durationEstimate: string;
  speakerNotes: {
    purpose: string;
    talkingPoints: string[];
    potentialQuestions: string[];
    suggestedAnswer: string;
  };
}

export const SLIDES_DATA_BY_LANG: Record<Language, SlideMetadata[]> = {
  IN: [
    {
      id: 1,
      title: "Profil Eksekutif & Latar Belakang Profesional",
      subtitle: "Harry M. Gultom – 16+ Tahun Enterprise IT B2B",
      category: "Profil & Nilai Tambah",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membangun impresi awal yang kredibel di hadapan dewan direksi mengenai 16+ tahun pengalaman karir IT B2B: 12 tahun spesifik di PT Astra Graphia Tbk mengelola Major Accounts (Financial/Industry, Oil & Gas, Big Accounts, Government), kepemimpinan sebagai Branch Manager di PT Perdana Jatiputra, serta Nasional Sales Manager di PT SMI Tbk.",
        talkingPoints: [
          "Selamat pagi Bapak/Ibu Dewan Direksi dan Tim Evaluator OpenWay. Saya Harry M. Gultom, membawa total 16+ tahun rekam jejak profesional di industri IT dan enterprise B2B sales.",
          "Dari perjalanan tersebut, 12 tahun spesifik saya dedikasikan di PT Astra Graphia Tbk (Astragraphia) memegang akun-akun strategis Major Accounts (Financial & Industry, Oil & Gas, dan Government).",
          "Kompetensi manajerial saya diperkaya saat dipercaya sebagai Branch Manager di PT Perdana Jatiputra memimpin operasional cabang dan penetrasi solusi enterprise, serta sebagai Nasional Sales Manager di PT SMI Tbk memimpin strategi dan ekspansi penjualan berskala nasional.",
          "Portofolio Major Accounts dan rekam jejak kepemimpinan sales ini membekali saya metode sistematis dalam membedah TCO, merancang strategi nilai tambah, dan menjaga tata kelola pengadaan bersih 100% tanpa sengketa.",
          "Kombinasi 16+ tahun pengalaman komprehensif ini memberikan kredibilitas institusional yang kuat untuk langsung masuk ke meja C-Level bank target WAY4 dan mengakselerasi pipeline pertumbuhan OpenWay."
        ],
        potentialQuestions: [
          "Bagaimana kepemimpinan manajerial dan pengalaman Major Accounts Anda relevan dengan akselerasi platform switching perbankan WAY4?",
          "Bagaimana Anda menyusun strategi penetrasi pasar enterprise perbankan nasional?"
        ],
        suggestedAnswer: "Portofolio Major Accounts di Astragraphia, kepemimpinan operasional cabang di PT Perdana Jatiputra, dan manajemen sales skala nasional di PT SMI Tbk membentuk kapabilitas komprehensif: pemahaman mendalam terhadap proses procurement korporasi, kepemimpinan tim, serta kemampuan menutup deal bernilai strategis tinggi. Ini memungkinkan saya langsung mengonversi peluang perbankan Tier-1 dan Tier-2 untuk platform WAY4 dari Hari Pertama."
      }
    },
    {
      id: 2,
      title: "Kondisi Pasar, Potensi & Posisi Kompetitor",
      subtitle: "Katalis Bank Indonesia BSPI 2030 & Vektor Migrasi OpenWay",
      category: "Lanskap Pasar & Kompetitif",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Meyakinkan audiens bahwa Harry memahami urgensi pasar saat ini dan tahu persis di mana ceruk pasar terbesar yang siap dimenangkan OpenWay.",
        talkingPoints: [
          "Meningkatnya kebutuhan pasar Indonesia saat ini sangat dipengaruhi oleh kebijakan Bank Indonesia melalui BSPI 2030 yang mewajibkan modernisasi infrastruktur pembayaran.",
          "OpenWay melalui platform WAY4 sudah memimpin di bank besar seperti BRI, Finnet, dan ASBANDA.",
          "Namun, celah pertumbuhan ke depan ada pada bank-bank komersial menengah yang sistem legacy-nya (seperti ACI atau Fiserv) mulai kesulitan memenuhi standar kepatuhan regulasi baru ini.",
          "Tantangan BD kita adalah masuk ke meja Direksi mereka sebelum kompetitor lain mengambil kesempatan ini."
        ],
        potentialQuestions: [
          "Mengapa bank menengah enggan mengganti sistem lama mereka meskipun ada regulasi BSPI?"
        ],
        suggestedAnswer: "Ketakutan terbesar mereka adalah downtime dan risiko kegagalan migrasi inti. Oleh karena itu, kita masuk dengan pendekatan Dual Engine dan migrasi bertahap, bukan 'big-bang replacement'."
      }
    },
    {
      id: 3,
      title: "Metodologi Eksekusi & Pemetaan Akun FSI",
      subtitle: "Buying Centre Dossier & Formula Kemenangan Tender RFP",
      category: "Metodologi & Eksekusi",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan bahwa Harry memiliki metodologi yang sistematis, teruji, dan tidak bergantung pada keberuntungan dalam memenangkan proyek bernilai puluhan miliar rupiah.",
        talkingPoints: [
          "Saya menerapkan metodologi Strategic FSI Account Mapping dan menyusun Buying Centre Dossier seperti yang terlihat di slide ini.",
          "Di industri perbankan, keputusan dibeli oleh sebuah komite 3 tingkat: Decision Makers (Tier 1), Key Influencers (Tier 2), dan Gatekeepers (Tier 3).",
          "Melalui ekosistem ring kedua saya, saya menggali informasi intelijen dari level Influencers untuk tahu masalah sistem mereka, lalu menggunakannya untuk melakukan warm introduction langsung ke tingkat Direksi IT (C-Level).",
          "Pendekatan ini juga krusial untuk Enterprise RFP & Tender Winning Formula saya melalui Pre-RFP Shaping terencana."
        ],
        potentialQuestions: [
          "Bagaimana jika bank sudah memiliki vendor preferensi sebelum tender diumumkan?"
        ],
        suggestedAnswer: "Inilah fungsi Pre-RFP Shaping. Kita menyuntikkan kriteria kepatuhan BSPI 2030, skalabilitas cloud-native, dan kapabilitas SNAP BI yang hanya bisa dipenuhi secara native oleh WAY4."
      }
    },
    {
      id: 4,
      title: "Tier 1: Dewan Direksi, CTO & Komite Keputusan FSI",
      subtitle: "Akses C-Level Ring-2 & Pemodelan Finansial TCO 5-Tahun",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan taktik spesifik menembus dewan direksi, membangun business case komparatif, dan mengeliminasi ketakutan dewan direksi atas risiko kegagalan proyek perbankan.",
        talkingPoints: [
          "Pada Tier 1, fokus saya adalah Dewan Direksi: Direktur IT/CTO, Direktur Bisnis Ritel, dan Direktur Kepatuhan.",
          "Saya menembus pintu direksi dalam waktu kurang dari 14 hari melalui warm network ring kedua tanpa cold calling.",
          "Bahasa yang saya bawa adalah bahasa finansial dan strategi: pemodelan 5-Year TCO dengan efisiensi lisensi hingga 35%, serta jaminan zero downtime lewat strategi koeksistensi paralel Dual Engine.",
          "Tujuannya adalah mengamankan sponsorship mandat strategis dewan direksi sebelum tender resmi dimulai."
        ],
        potentialQuestions: [
          "Apa kekhawatiran terbesar direksi bank ketika diajak berbicara penggantian core switch lama?",
          "Bagaimana membuktikan klaim penghematan TCO 35% di hadapan Direktur Keuangan?"
        ],
        suggestedAnswer: "Kekhawatiran terbesar direksi adalah risiko downtime transaksi nasional dan sanksi regulator. Kami menepisnya dengan membuktikan model koeksistensi paralel di mana sistem legacy tetap aktif sebagai fallback, sementara simulasi TCO dihitung berbasis pengurangan biaya lisensi per-core dan penghematan server on-premise."
      }
    },
    {
      id: 5,
      title: "Tier 2: Arsitektur Enterprise, VP Operasional & Tim Evaluasi",
      subtitle: "Lokakarya Arsitektur Teknis, Benchmark TPS & Validasi PoC",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan cara merangkul evaluator teknis dan arsitek bank agar menjadi pendukung setia (Internal Champions) dari solusi WAY4.",
        talkingPoints: [
          "Pada Tier 2, saya berhadapan langsung dengan VP Enterprise Architecture, Head of Cards, dan VP IT Operations.",
          "Mereka adalah evaluator teknis yang sangat skeptis terhadap janji pemasaran. Pendekatan saya adalah deep technical discovery workshop untuk membedah beban sistem legacy mereka.",
          "Kami buktikan kapabilitas WAY4 lewat uji beban nyata 10.000+ TPS dengan latensi sub-detik, serta kepatuhan native standar Bank Indonesia SNAP BI.",
          "Dengan memecahkan masalah arsitektur mereka, evaluator teknis ini bertransformasi menjadi Internal Champions yang memperjuangkan WAY4 di dalam komite evaluasi tender."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan arsitek bank yang sudah terbiasa dengan sistem ACI atau Fiserv selama puluhan tahun?",
          "Apakah WAY4 dapat membuktikan kepatuhan SNAP BI tanpa modul tambahan?"
        ],
        suggestedAnswer: "Arsitek bank sering kali frustrasi karena sistem lama lambat untuk merilis produk baru (butuh 6-9 bulan). Kami memperlihatkan konfigurasi produk baru di WAY4 yang tuntas dalam beberapa hari tanpa koding kustom, didukung gateway SNAP BI bawaan yang 100% tersertifikasi Bank Indonesia."
      }
    },
    {
      id: 6,
      title: "Tier 3: Komite Pengadaan, Divisi Legal & Tata Kelola Tender",
      subtitle: "Pre-RFP Shaping Kriteria, Integritas Audit 100% & Skema Lisensi Fleksibel",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menegaskan komitmen tata kelola pengadaan bersih, kepatuhan audit formal, dan fleksibilitas kontrak komersial yang aman dari sengketa.",
        talkingPoints: [
          "Di Tier 3, gerbang penentu formal ada di tangan Komite Pengadaan, Divisi Legal, dan Vendor Risk Management (VRM).",
          "Kunci sukses saya adalah Pre-RFP Shaping yang beretika: mempengaruhi dokumen persyaratan tender 3 hingga 6 bulan sebelum rilis resmi agar kriteria standar selaras dengan keunggulan WAY4.",
          "Saya memiliki rekam jejak integritas pengadaan yang bersih, setara dengan standar ketat LKPP dan BUMN perbankan (100% auditable, zero dispute).",
          "Kami juga menawarkan fleksibilitas kontrak komersial: opsi Capex perpetual, Opex langganan, hingga revenue-sharing transaksi untuk mempermudah persetujuan legal dan pengadaan."
        ],
        potentialQuestions: [
          "Bagaimana Anda memastikan proses Pre-RFP shaping tidak melanggar ketentuan anti-monopoli atau kode etik bank?",
          "Apakah OpenWay fleksibel terhadap skema penagihan berbasis performa?"
        ],
        suggestedAnswer: "Pre-RFP shaping kami berfokus pada edukasi standar industri terbuka (seperti kepatuhan BSPI 2030 dan arsitektur microservices modern), bukan klausul merek tertutup. Kami menyediakan dossier VRM lengkap dan opsi lisensi berjenjang yang transparan serta bebas audit disclaimer."
      }
    },
    {
      id: 7,
      title: "Strategi Pertumbuhan – Replikasi Keberhasilan & Ekspansi Akun",
      subtitle: "3D Isometric Core Stack Framework & Mesin Pertumbuhan Ganda",
      category: "Strategi Pertumbuhan",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan sinergi sempurna antara keunggulan produk OpenWay dengan kemampuan eksekusi lapangan Harry dalam melipatgandakan pipeline penjualan.",
        talkingPoints: [
          "Kekuatan terbesar saya ada pada aspek eksekusi dan implementasi komersial terstruktur.",
          "Seperti yang kita lihat pada diagram isometrik 3D core stack ini, saya mengintegrasikan seluruh elemen pertumbuhan secara visual.",
          "Strategi saya berbasis Success Replication dan Account Expansion.",
          "Di lapisan tengah (Layer 2), saya membedah cetak biru kesuksesan OpenWay di akun besar seperti BRI, Finnet, dan ASBANDA untuk direplikasi ke bank-bank komersial menengah di lapisan atas (Layer 3).",
          "Sekaligus, saya mengidentifikasi kebutuhan tersembunyi dari klien eksisting untuk cross-selling modul WAY4 baru seperti Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway."
        ],
        potentialQuestions: [
          "Modul apa dari WAY4 yang paling mudah diekspansi ke akun existing saat ini?"
        ],
        suggestedAnswer: "Modul Digital Wallet, SoftPOS, dan Open-API SNAP BI Gateway yang sangat dibutuhkan bank untuk integrasi instan dengan merchant dan fintech unicorn tanpa harus merombak core lama mereka."
      }
    },
    {
      id: 8,
      title: "Layer 3: Peluang Pasar, Kanal Digital & Integrasi Open API",
      subtitle: "Ekspansi Bank Komersial Menengah, Ekosistem Fintech & Modul Bernilai Tinggi",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menjelaskan cara membuka kanal pendapatan baru perbankan secara kilat lewat modul digital modern WAY4 tanpa mengganggu sistem inti.",
        talkingPoints: [
          "Pada Layer 3 (lapisan teratas), fokus saya adalah membuka ceruk pasar baru di bank komersial menengah dan lembaga non-bank fintech.",
          "Bank-bank menengah saat ini terkendala merilis produk baru karena core lama mereka kaku. Melalui WAY4 Digital Modules, kita berikan solusi instan: Open API SNAP BI, Digital Wallet, dan SoftPOS.",
          "Implementasi modul ini dapat go-live dalam waktu kurang dari 3 bulan, memberikan perolehan fee-based income cepat bagi bank.",
          "Khusus SoftPOS, ini adalah diferensiator besar karena bank bisa mengeliminasi biaya capex pengadaan mesin EDC fisik hingga 60%."
        ],
        potentialQuestions: [
          "Apakah integrasi Open API SNAP BI memerlukan lisensi pihak ketiga tambahan?",
          "Seberapa cepat modul SoftPOS dapat diterapkan pada merchant perbankan?"
        ],
        suggestedAnswer: "Modul SNAP BI pada WAY4 sudah native bersertifikasi Bank Indonesia tanpa middleware tambahan. Untuk SoftPOS, integrasi mobile SDK siap pakai dapat diluncurkan ke merchant mitra dalam waktu 6-8 minggu."
      }
    },
    {
      id: 9,
      title: "Layer 2: Cetak Biru Platform Inti WAY4 & Replikasi Tier-1",
      subtitle: "Replikasi Keberhasilan Teruji BRI, Finnet & ASBANDA ke Bank Komersial",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Meyakinkan komite bank bahwa solusi platform inti WAY4 telah teruji di skala nasional tertinggi sehingga bebas dari risiko kegagalan.",
        talkingPoints: [
          "Pada Layer 2 (lapisan tengah), strategi utama saya adalah Replikasi Keberhasilan (Success Replication).",
          "OpenWay memiliki modal kredibilitas tak terbantahkan di Indonesia: memproses transaksi skala raksasa di Bank BRI, Finnet, dan jaringan ASBANDA/BPDNet.",
          "Ketika berbicara dengan bank komersial menengah, pesan saya sangat tegas: Anda tidak perlu bereksperimen atau menjadi kelinci percobaan teknologi baru. Solusi WAY4 sudah teruji menahan 10.000+ TPS saat puncak transaksi nasional.",
          "Dengan arsitektur Dual Engine, kami menjamin migrasi bertahap tanpa sedetik pun downtime atau risiko cutover fatal."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan bank bahwa implementasi WAY4 tidak akan menguras resource internal mereka?",
          "Apakah blueprint BRI bisa langsung diterapkan ke bank dengan skala aset lebih kecil?"
        ],
        suggestedAnswer: "Cetak biru Tier-1 OpenWay bersifat modular. Kami menyederhanakan konfigurasi untuk bank menengah menggunakan template best-practice yang sudah jadi, sehingga waktu implementasi terpangkas separuh dibanding proyek konvensional."
      }
    },
    {
      id: 10,
      title: "Layer 1: Fondasi Kepatuhan Regulasi & Standar BSPI 2030",
      subtitle: "Mandat Bank Indonesia, Kedaulatan Data & Standar Kepatuhan Tertinggi",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan rasa aman mutlak bagi Dewan Komisaris, Direktur Kepatuhan, dan Auditor bahwa transformasi perbankan ini 100% taat asas dan berintegritas tinggi.",
        talkingPoints: [
          "Pada Layer 1 (lapisan fondasi), kita menyentuh pilar terpenting dalam industri perbankan: Kepatuhan Regulasi dan Tata Kelola Bersih.",
          "Seluruh arsitektur WAY4 selaras secara native dengan Blueprint Sistem Pembayaran Indonesia (BSPI 2030) dari Bank Indonesia, standar ISO 20022, serta sertifikasi PCI-DSS Level 1.",
          "Kedaulatan data finansial nasabah dijamin penuh baik dengan deployment on-premise maupun sovereign cloud di Indonesia.",
          "Dari sisi personal, saya menggaransi proses pengadaan dengan integritas 100%, bebas benturan kepentingan, setara dengan standar ketat pengadaan BUMN dan LKPP."
        ],
        potentialQuestions: [
          "Bagaimana kesiapan WAY4 menghadapi pembaruan regulasi Bank Indonesia di masa mendatang?",
          "Apakah OpenWay bersedia menandatangani pakta integritas dan Service Level Agreement kepatuhan?"
        ],
        suggestedAnswer: "Arsitektur WAY4 berbasis microservices yang fleksibel, sehingga adaptasi terhadap regulasi baru hanya memerlukan update modul konfigurasi tanpa merombak sistem dasar. Kami selalu siap menandatangani SLA kepatuhan dan pakta integritas resmi."
      }
    },
    {
      id: 11,
      title: "Rencana Aksi Eksekusi 30-60-90 Hari Terukur",
      subtitle: "Milestone Terstruktur & Akselerasi Pipeline Penjualan",
      category: "Rencana Eksekusi",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan komitmen nyata yang terukur pada 90 hari pertama Harry menjabat untuk membuktikan kecepatan eksekusi dan kontribusi langsung.",
        talkingPoints: [
          "Di slide ini, saya menjabarkan rencana aksi 30-60-90 hari yang sangat terstruktur dan terukur.",
          "Hari 1-30: Fokus pada penyerapan internal blueprint WAY4, membangun hubungan hangat dengan klien eksisting (farming), serta merumuskan pemodelan 5-Year TCO.",
          "Hari 31-60: Mulai bergerak ke luar. Memetakan C-Level target bank menengah melalui ring-2, serta membuka minimal 2 discovery meeting baru membawa proposisi Dual Engine.",
          "Hari 61-90: Mengakselerasi peluang menjadi pipeline terkualifikasi, mendorong proof-of-concept, dan berkomitmen membangun pipeline penjualan tahunan senilai puluhan miliar rupiah yang siap diaudit."
        ],
        potentialQuestions: [
          "Apa output konkret yang bisa dievaluasi manajemen OpenWay di akhir hari ke-30?"
        ],
        suggestedAnswer: "Minimal 3 Buying Centre Dossier bank target yang lengkap dengan kontak C-Level tervalidasi, 2 proposal discovery Dual Engine yang aktif, dan setidaknya 1 peluang upsell modul tambahan yang teridentifikasi di akun existing."
      }
    },
    {
      id: 12,
      title: "Hari 1 - 30: Penyerapan Internal, Audit Akun & Pemodelan TCO",
      subtitle: "Penguasaan Arsitektur WAY4, Hubungan Klien Eksisting & Kalkulasi Finansial ROI",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memperlihatkan kedisiplinan eksekusi pada 30 hari pertama: menyerap kapabilitas teknis produk WAY4, mengamankan retensi klien eksisting, dan memvalidasi alat tempur komersial.",
        talkingPoints: [
          "Bulan pertama adalah periode penguncian fondasi internal. Saya tidak membuang waktu dengan ramp-up pasif.",
          "Saya bekerja erat dengan tim Pre-Sales untuk menguasai arsitektur produksi WAY4 yang telah berjalan di BRI, Finnet, dan ASBANDA.",
          "Secara paralel, saya melakukan audit relasi dan kunjungan silaturahmi formal ke klien eksisting guna memastikan zero churn dan membuka percakapan add-on modul.",
          "Saya juga merumuskan spreadsheet pemodelan 5-Year TCO yang menjadi senjata wajib saat berhadapan dengan Direktur Keuangan (CFO) bank."
        ],
        potentialQuestions: [
          "Bagaimana Anda membagi waktu antara belajar produk internal dan menemui klien eksisting di bulan pertama?",
          "Apakah pemodelan TCO memperhitungkan biaya migrasi data nasabah?"
        ],
        suggestedAnswer: "Saya mengalokasikan 50% waktu untuk penyerapan produk bersama Pre-Sales dan 50% untuk kunjungan relasi akun eksisting. Pemodelan TCO kami mencakup kalkulasi total komparatif: lisensi, infrastruktur server, dan de-risking biaya migrasi paralel Dual Engine."
      }
    },
    {
      id: 13,
      title: "Hari 31 - 60: Penetrasi Pasar, Pemetaan C-Level & Discovery Meeting",
      subtitle: "Aktivasi Jaringan Ring-2, Akses Pintu Direksi & Presentasi Solusi Dual Engine",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan taktik agresif namun terukur dalam menembus dewan direksi bank target dalam waktu <14 hari menggunakan kekuatan warm network ring-2.",
        talkingPoints: [
          "Pada bulan kedua, saya bergerak ke luar dengan agresif melalui ekosistem ring kedua saya.",
          "Saya menyusun Buying Centre Dossier untuk 3 bank komersial menengah target, memetakan isu sistem legacy mereka sebelum pertemuan dimulai.",
          "Melalui warm introduction, saya membuka pintu direksi dalam waktu kurang dari 14 hari tanpa cold calling yang tidak efektif.",
          "Fokus discovery meeting adalah meredakan ketakutan dewan direksi mengenai kegagalan cutover dengan mempresentasikan proposisi Dual Engine tanpa risiko downtime."
        ],
        potentialQuestions: [
          "Bagaimana jika Direktur IT bank target menolak bertemu karena merasa sistem lama mereka masih cukup?",
          "Berapa target discovery meeting yang realistis dibuka dalam 30 hari kedua?"
        ],
        suggestedAnswer: "Saya tidak menjual penggantian total, melainkan mengangkat risiko kepatuhan BSPI 2030 dan peluang kanal fee-based baru seperti SNAP BI dan SoftPOS. Target saya adalah minimal 2 discovery meeting formal di level C-Suite."
      }
    },
    {
      id: 14,
      title: "Hari 61 - 90+: Akselerasi Pipeline, Validasi PoC & Komitmen Penjualan",
      subtitle: "Validasi Teknis Lapangan, Cross-Selling Modul Eksisting & Pembangunan Pipeline 12 Bulan",
      category: "Rencana Aksi Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan hasil konkret di akhir kuartal pertama: validasi PoC lapangan, penutupan penjualan modul add-on akun eksisting, dan komitmen pipeline 12 bulan puluhan miliar rupiah.",
        talkingPoints: [
          "Bulan ketiga adalah momentum pembuktian hasil (conversion milestone).",
          "Kami menjalankan Proof of Concept (PoC) terukur untuk membuktikan ketahanan 10.000+ TPS dan integrasi Open API SNAP BI di hadapan evaluator teknis bank.",
          "Sekaligus, saya mengejar quick-win melalui closing cross-selling modul add-on (Digital Wallet, SoftPOS) ke akun eksisting guna mempercepat perolehan revenue.",
          "Di hari ke-90, saya berkomitmen menyerahkan dashboard pipeline penjualan 12 bulan senilai puluhan miliar rupiah yang terverifikasi, transparan, dan siap diaudit manajemen OpenWay."
        ],
        potentialQuestions: [
          "Apakah 90 hari cukup untuk menghasilkan pipeline penjualan yang siap tender?",
          "Berapa estimasi nilai pipeline yang siap dikomitmenkan di hari ke-90?"
        ],
        suggestedAnswer: "Dengan metodologi Pre-RFP Shaping dan aktivasi warm network, 90 hari sangat realistis untuk mengunci minimal 2-3 peluang bank komersial dan 1 modul ekspansi akun eksisting, menghasilkan estimasi pipeline tahunan senilai Rp 20 - 40 Miliar."
      }
    },
    {
      id: 15,
      title: "Tata Kelola Bersih, Kepercayaan Pemangku Kepentingan & Perbaikan Diri",
      subtitle: "Tiga Pilar Integritas, Eksekusi Lintas Fungsi & Komitmen Pertumbuhan Jangka Panjang",
      category: "Komitmen Penutup",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menutup presentasi dengan kesan integritas moral yang kokoh, kesiapan eksekusi, dan komitmen pengembangan diri yang transparan.",
        talkingPoints: [
          "Sebagai penutup, saya ingin menegaskan kembali 3 komitmen utama saya untuk OpenWay Group.",
          "Pertama, Integritas dan Tata Kelola Pengadaan Bersih 100%. Berbekal pengalaman panjang di sektor enterprise yang setara dengan standar ketat pengadaan pemerintah (LKPP), saya menjamin setiap proses penjualan terbebas dari benturan kepentingan dan patuh hukum.",
          "Kedua, saya siap menjadi bridge cross-functional yang solid antara tim teknis, delivery, dan komersial.",
          "Ketiga, saya berkomitmen pada continuous self-improvement. Saya secara mandiri terus memperdalam sertifikasi domain perbankan dan mengikuti les privat Bahasa Inggris profesional untuk memastikan representasi OpenWay di tingkat regional dan global tetap prima."
        ],
        potentialQuestions: [
          "Bagaimana komitmen Anda dalam meningkatkan kemampuan bahasa Inggris bisnis Anda?"
        ],
        suggestedAnswer: "Saya sangat disiplin dalam perbaikan diri. Saya secara proaktif mengambil les privat bahasa Inggris bisnis intensif dengan fokus presentasi komersial enterprise untuk memastikan komunikasi di tingkat regional berjalan mulus."
      }
    },
    {
      id: 16,
      title: "Pilar 1: Integritas Pengadaan Bersih & Bebas Sengketa Audit",
      subtitle: "Standar Tata Kelola Setara LKPP/BUMN, Nol Benturan Kepentingan & Transparansi 100%",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Memberikan jaminan mutlak bagi manajemen OpenWay bahwa seluruh deal dimenangkan dengan integritas etika tinggi, patuh hukum, dan bebas dari risiko sengketa audit.",
        talkingPoints: [
          "Pada Pilar 1, saya menggaransi 100% tata kelola pengadaan bersih setara standar BUMN dan LKPP.",
          "Saya memiliki rekam jejak 16 tahun tanpa pernah terlibat sengketa hukum atau catatan disclaimer audit.",
          "Setiap proses tender dikawal dengan pakta integritas ketat, melindungi brand OpenWay dan dewan direksi dari risiko gratifikasi.",
          "Dokumentasi tender disusun rapi dan transparan sejak Pre-RFP hingga kontrak final, siap diaudit sewaktu-waktu oleh OJK dan auditor eksternal."
        ],
        potentialQuestions: [
          "Bagaimana Anda memastikan kepatuhan pengadaan tetap terjaga saat menghadapi tekanan target penjualan?",
          "Apakah Anda bersedia menandatangani pakta integritas dan kode etik resmi OpenWay?"
        ],
        suggestedAnswer: "Saya memegang prinsip bahwa kesepakatan terbaik adalah kesepakatan yang aman dan berkelanjutan. Saya 100% siap menandatangani pakta integritas dan selalu mengutamakan tata kelola yang bersih di atas segalanya."
      }
    },
    {
      id: 17,
      title: "Pilar 2: Orkestrasi Pemangku Kepentingan & Sinergi Lintas Fungsi",
      subtitle: "Menjembatani C-Level, Divisi Legal, Komite Pengadaan & Tim Teknis OpenWay",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menunjukkan kematangan Harry sebagai dirigen komersial yang mampu menyatukan seluruh pihak internal dan eksternal tanpa friksi birokrasi.",
        talkingPoints: [
          "Pada Pilar 2, saya berperan sebagai orchestrator yang menyelaraskan seluruh pemangku kepentingan.",
          "Penjualan platform perbankan melibatkan C-Level, Divisi Legal, Komite Pengadaan, dan tim Pre-Sales teknis.",
          "Saya menjembatani perbedaan bahasa: menerjemahkan arsitektur teknis menjadi business case bagi direksi, serta mengurai klausul liabilitas bersama divisi Legal.",
          "Dengan pendekatan sinergis ini, siklus negosiasi kontrak dapat dipangkas hingga 40% lebih cepat."
        ],
        potentialQuestions: [
          "Bagaimana mengatasi kebuntuan negosiasi klausul SLA dengan tim legal bank?",
          "Bagaimana Anda membagi peran dengan Pre-Sales Director OpenWay saat presentasi di hadapan C-Level?"
        ],
        suggestedAnswer: "Saya memfasilitasi titik temu win-win dengan menawarkan klausul SLA berjenjang yang adil. Di hadapan C-Level, saya membuka dengan strategi bisnis dan TCO, kemudian menyerahkan kendali arsitektur mendalam kepada Pre-Sales secara terhormat."
      }
    },
    {
      id: 18,
      title: "Pilar 3: Pengembangan Diri Berkelanjutan & Kemampuan Bahasa Global",
      subtitle: "Les Privat Bahasa Inggris Bisnis Intensif, Penguasaan Domain & Representasi Regional",
      category: "Komitmen Integritas Deep Dive",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Membuktikan komitmen belajar mandiri dan kerendahan hati profesional Harry untuk selalu siap menjadi duta komersial OpenWay di tingkat regional Asia Pasifik.",
        talkingPoints: [
          "Pada Pilar 3, saya menunjukkan komitmen nyata perbaikan diri berkelanjutan.",
          "Saya secara proaktif mengambil les privat Bahasa Inggris bisnis intensif 2-3 kali seminggu bersama tutor profesional.",
          "Tujuannya adalah memastikan komunikasi yang fasih dan percaya diri di hadapan jajaran pimpinan regional OpenWay dan forum internasional.",
          "Di sisi lain, saya terus memperdalam wawasan sistem pembayaran modern (ISO 20022, SNAP BI, SoftPOS) agar selalu menjadi mitra diskusi bernilai tinggi bagi perbankan."
        ],
        potentialQuestions: [
          "Sejauh mana progres kemampuan bahasa Inggris bisnis Anda saat ini?",
          "Apakah Anda siap mewakili OpenWay dalam forum perbankan internasional di Singapura atau regional?"
        ],
        suggestedAnswer: "Progres saya sangat konsisten dan terfokus pada enterprise presentation. Saya sangat siap mewakili OpenWay di kancah regional APAC dengan persiapan matang dan dedikasi profesional penuh."
      }
    },
    {
      id: 19,
      title: "Lampiran Taktis: Battlecard Kompetitif & Strategi",
      subtitle: "Diferensiasi Platform WAY4 vs Sistem Warisan Legacy",
      category: "Lampiran Taktis",
      durationEstimate: "2 menit",
      speakerNotes: {
        purpose: "Menyediakan senjata argumen pamungkas bagi Harry dalam menjawab keraguan bank mengenai risiko migrasi dan komparasi langsung dengan kompetitor.",
        talkingPoints: [
          "Slide lampiran ini saya siapkan sebagai Competitive Battlecard taktis dalam menghadapi pertanyaan kritis dewan direksi.",
          "Jika bank mengeluhkan mahalnya lisensi Capex di awal, saya menawarkan fleksibilitas model komersial (Opex bertahap atau fee berbasis transaksi).",
          "Jika mereka takut risiko migrasi dari ACI atau Fiserv, saya presentasikan strategi Dual Engine: sistem lama tetap berjalan paralel, sementara produk digital baru dialihkan ke WAY4 secara bertahap.",
          "Dengan arsitektur cloud-native dan modularitas WAY4, kita memposisikan OpenWay bukan sekadar vendor software, melainkan mitra transformasi strategis jangka panjang."
        ],
        potentialQuestions: [
          "Bagaimana meyakinkan bank bahwa migrasi paralel Dual Engine tidak membebani tim operasional mereka dua kali lipat?"
        ],
        suggestedAnswer: "Dengan gateway integrasi SNAP BI otomatis dari WAY4, sinkronisasi data antar sistem terjadi di background tanpa perlu intervensi manual dari tim operasional bank, sehingga beban kerja harian tetap normal."
      }
    }
  ],
  EN: [
    {
      id: 1,
      title: "Executive Profile & Professional Background",
      subtitle: "Harry M. Gultom – 16+ Years Enterprise B2B IT",
      category: "Profile & Value Proposition",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Establish an executive impression regarding 16+ years of total enterprise IT experience: 12 dedicated years at PT Astra Graphia Tbk managing Major Accounts (Financial/Industry, Oil & Gas, Government), managerial leadership as Branch Manager at PT Perdana Jatiputra, and National Sales Manager at PT SMI Tbk.",
        talkingPoints: [
          "Good morning to the Board of Directors and OpenWay Evaluation Panel. I am Harry M. Gultom, bringing over 16 years of comprehensive career experience in enterprise IT and B2B technology sales.",
          "Of that journey, 12 dedicated years were spent at PT Astra Graphia Tbk (Astragraphia) managing high-impact Major Accounts across Financial & Industry, Oil & Gas, and Government.",
          "My executive capabilities were further reinforced as Branch Manager at PT Perdana Jatiputra leading regional branch operations and enterprise imaging solutions, and as National Sales Manager at PT SMI Tbk driving nationwide B2B sales expansion.",
          "This track record of managing Major Accounts and multi-tiered sales teams instills disciplined TCO modeling, structured discovery, and clean dispute-free procurement governance.",
          "The synthesis of this 16+ year career equips me with direct C-Suite fluency and institutional credibility to drive WAY4's market expansion from Day One."
        ],
        potentialQuestions: [
          "How does your managerial leadership and Major Accounts background translate to accelerating WAY4 core banking adoption?",
          "How do you approach high-stakes enterprise sales strategy across national banking accounts?"
        ],
        suggestedAnswer: "Managing Major Accounts at Astragraphia, leading branch operations at PT Perdana Jatiputra, and driving national sales at PT SMI Tbk provide deep enterprise fluency: institutional understanding of banking procurement, senior stakeholder engagement, and the discipline needed to close large-ticket core banking transformations. This allows me to immediately target Tier-1 and Tier-2 accounts for OpenWay WAY4."
      }
    },
    {
      id: 2,
      title: "Market Conditions, Potential & Competitor Positioning",
      subtitle: "Bank Indonesia BSPI 2030 Catalyst & OpenWay Migration Vectors",
      category: "Market & Competitive Landscape",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Convince the panel that Harry deeply understands current market urgency, competitive dynamics, and where OpenWay can capture dominant market share.",
        talkingPoints: [
          "The surging modernization need in Indonesia is primarily driven by Bank Indonesia's BSPI 2030 blueprint, mandating modern open payments.",
          "OpenWay's WAY4 platform already commands premier leadership in top-tier accounts like BRI, Finnet, and ASBANDA.",
          "However, the major high-growth frontier lies in commercial mid-tier banks whose legacy stacks (ACI or Fiserv) struggle to meet modern standards.",
          "Our business development mission is getting to their Boardrooms before competitors seize this displacement window."
        ],
        potentialQuestions: [
          "Why are mid-tier banks hesitating to replace aging legacy systems despite clear regulatory mandates?"
        ],
        suggestedAnswer: "Their primary anxiety is downtime and catastrophic cutover risk. We address this directly with our parallel Dual Engine co-existence strategy rather than an all-at-once high-risk replacement."
      }
    },
    {
      id: 3,
      title: "Execution Methodology & FSI Account Mapping",
      subtitle: "Buying Centre Dossier & Enterprise RFP Winning Formula",
      category: "Methodology & Execution",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate structured, disciplined enterprise sales methodology ensuring high win rates for multi-million dollar banking engagements.",
        talkingPoints: [
          "I execute systematic FSI Account Mapping and compile Buying Centre Dossiers as shown on screen.",
          "In banking, decisions are owned by a 3-tier committee: Decision Makers (Tier 1), Key Influencers (Tier 2), and Gatekeepers (Tier 3).",
          "Leveraging my trusted ring-2 network, I gather operational intelligence from influencers, using it to secure warm introductions directly to IT Directors and C-Suite leaders.",
          "This approach feeds directly into our Enterprise Tender Winning Formula through proactive Pre-RFP Shaping."
        ],
        potentialQuestions: [
          "What if a target bank already has an incumbent vendor preference prior to formal RFP publication?"
        ],
        suggestedAnswer: "This is precisely the purpose of Pre-RFP Shaping. We educate the committee early on BSPI 2030 compliance, cloud-native scale, and native SNAP BI benchmarks that only WAY4 can deliver natively."
      }
    },
    {
      id: 4,
      title: "Tier 1: Executive Board, CTO & Bank Decision Committee",
      subtitle: "Ring-2 C-Suite Access & 5-Year Financial TCO Modeling",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate tactical mastery in penetrating boardrooms, presenting comparative financial models, and eliminating board anxiety over migration risk.",
        talkingPoints: [
          "In Tier 1, my laser focus is the Executive Board: IT Director/CTO, Retail Business Director, and Head of Compliance.",
          "I penetrate boardrooms within 14 days leveraging warm ring-2 trusted networks rather than cold outreach.",
          "I speak the language of strategy and ROI: 5-Year TCO modeling delivering up to 35% savings, and zero-downtime guarantees through Dual Engine architecture.",
          "The objective is locking in strategic executive sponsorship prior to formal tender publication."
        ],
        potentialQuestions: [
          "What is the single biggest anxiety bank directors hold regarding legacy switch migration?",
          "How do you prove the 35% TCO savings claim before the Chief Financial Officer?"
        ],
        suggestedAnswer: "Their biggest fear is payment downtime during national shopping peaks. We eliminate this with our parallel Dual Engine model where the legacy switch remains active as fallback, while TCO is proven through reduced per-core licensing and on-prem hardware consolidation."
      }
    },
    {
      id: 5,
      title: "Tier 2: Enterprise Architecture, Business VPs & Technical PMO",
      subtitle: "Architecture Discovery Workshops, TPS Benchmarks & PoC Validation",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Showcase how to engage technical evaluators and enterprise architects to turn them into staunch internal champions for WAY4.",
        talkingPoints: [
          "In Tier 2, I collaborate directly with VP Enterprise Architecture, Head of Cards, and VP IT Operations.",
          "They are skeptical technical evaluators. My approach is deep architectural discovery workshops unpacking their legacy bottlenecks.",
          "We validate WAY4 capabilities through benchmarked 10,000+ TPS load tests at sub-second latency and native SNAP BI compliance.",
          "By solving their technical headaches, these evaluators become vocal Internal Champions championing WAY4 in the tender evaluation committee."
        ],
        potentialQuestions: [
          "How do you convince architects accustomed to legacy ACI or Fiserv workflows for decades?",
          "Can WAY4 prove SNAP BI compliance without external third-party middleware?"
        ],
        suggestedAnswer: "Bank architects are constantly frustrated by 6-9 month lead times to release new card products on legacy switches. We demonstrate new product parameterization on WAY4 live in days without coding, supported by a 100% certified native SNAP BI gateway."
      }
    },
    {
      id: 6,
      title: "Tier 3: Procurement Committee, Legal Division & Vendor Governance",
      subtitle: "Pre-RFP Criteria Shaping, 100% Audit Readiness & Flexible Licensing",
      category: "Buying Centre Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Emphasize clean procurement governance, 100% audit readiness, and flexible commercial contract options to ensure smooth deal closure.",
        talkingPoints: [
          "In Tier 3, formal gatekeeping sits with Procurement Committees, Legal counsel, and Vendor Risk Management (VRM).",
          "My success key is ethical Pre-RFP Shaping: influencing requirements 3-6 months ahead so open standards align naturally with WAY4 strengths.",
          "I maintain an unblemished procurement track record meeting the highest BUMN and LKPP enterprise benchmarks (100% auditable, zero dispute).",
          "We also offer flexible commercial structures: perpetual Capex, Opex subscriptions, or transaction-based revenue sharing."
        ],
        potentialQuestions: [
          "How do you ensure Pre-RFP shaping does not infringe upon bank ethics or anti-monopoly rules?",
          "Is OpenWay open to performance-based billing structures?"
        ],
        suggestedAnswer: "Our Pre-RFP shaping focuses on open industry standards (BSPI 2030 compliance and modern microservices), not proprietary brand lock-in clauses. We provide comprehensive VRM dossiers and transparent tiered licensing models."
      }
    },
    {
      id: 7,
      title: "Growth Strategy – Success Replication & Account Expansion",
      subtitle: "3D Isometric Core Stack Framework & Dual-Growth Engine",
      category: "Growth Strategy",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate the perfect synthesis between OpenWay's world-class platform and Harry's field execution in scaling pipeline value.",
        talkingPoints: [
          "My strongest asset is disciplined commercial execution and account navigation.",
          "As shown on this 3D isometric core stack diagram, I integrate all growth pillars visually.",
          "My strategy is rooted in Success Replication and Account Expansion.",
          "On the middle layer (Layer 2), I deconstruct proven blueprints from BRI, Finnet, and ASBANDA to replicate them into commercial mid-tier banks on Layer 3.",
          "Simultaneously, I uncover latent needs in existing accounts to upsell high-margin digital modules such as Digital Wallet, SoftPOS, and Open-API SNAP BI Gateways."
        ],
        potentialQuestions: [
          "Which WAY4 module offers the quickest upsell adoption in existing banking clients?"
        ],
        suggestedAnswer: "The Digital Wallet, SoftPOS, and SNAP BI Gateway modules, allowing banks to integrate instantly with merchants and fintechs without touching their core switch."
      }
    },
    {
      id: 8,
      title: "Layer 3: Market Opportunities, Digital Channels & Open APIs",
      subtitle: "Commercial Bank Expansion, Fintech Ecosystems & High-Value Add-ons",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Explain how to unlock rapid, non-disruptive fee revenue for banks via modern WAY4 digital modules without awaiting core overhaul.",
        talkingPoints: [
          "In Layer 3 (top tier), my focus is unlocking commercial mid-tier banks and non-bank fintech aggregators.",
          "Mid-tier banks struggle to launch modern digital features due to legacy rigidity. WAY4 Digital Modules provide instant answers: SNAP BI Open APIs, Digital Wallets, and SoftPOS.",
          "These modules achieve production go-live in under 3 months, immediately expanding retail transaction fees for the bank.",
          "Specifically, SoftPOS is a huge game changer, slashing physical merchant POS terminal capex and maintenance logistics by up to 60%."
        ],
        potentialQuestions: [
          "Does native SNAP BI open API integration require third-party middleware licenses?",
          "How fast can the SoftPOS mobile solution be deployed across bank merchants?"
        ],
        suggestedAnswer: "WAY4's SNAP BI module is 100% native and certified by Bank Indonesia without third-party gateways. SoftPOS turnkey mobile SDKs can be rolled out to retail merchant networks in 6 to 8 weeks."
      }
    },
    {
      id: 9,
      title: "Layer 2: WAY4 Core Platform Blueprints & Tier-1 Replication",
      subtitle: "Replicating Proven BRI, Finnet & ASBANDA Blueprints into Commercial Banks",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Convince banking leadership that WAY4's core platform is battle-tested at the highest national volumes, eliminating experimental risk.",
        talkingPoints: [
          "In Layer 2 (middle tier), my core commercial driver is Success Replication.",
          "OpenWay holds unmatched production credibility in Indonesia: processing massive transaction volumes at Bank BRI, Finnet, and ASBANDA/BPDNet.",
          "When pitching to commercial mid-tier banks, my message is clear: you do not need to be an experimental guinea pig. WAY4 has repeatedly handled 10,000+ TPS peaks.",
          "Our parallel Dual Engine strategy guarantees a gradual, risk-free transition with zero operational downtime."
        ],
        potentialQuestions: [
          "How do you ensure WAY4 implementation does not overwhelm bank internal IT resources?",
          "Can Tier-1 blueprints from giant banks like BRI apply seamlessly to smaller commercial banks?"
        ],
        suggestedAnswer: "OpenWay's architecture is modular and parameter-driven. We utilize battle-tested configuration blueprints tailored for commercial banks, cutting deployment timelines in half compared to bespoke builds."
      }
    },
    {
      id: 10,
      title: "Layer 1: Regulatory Compliance Foundation & BSPI 2030",
      subtitle: "Bank Indonesia Regulatory Mandate, Data Sovereignty & Audit Readiness",
      category: "Core Stack Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide absolute peace of mind for the Board of Commissioners, Compliance Directors, and statutory auditors that core modernization is 100% lawful and ethical.",
        talkingPoints: [
          "In Layer 1 (foundation), we anchor the most critical pillar in banking: Regulatory Compliance and Clean Governance.",
          "WAY4 architecture is natively harmonized with Bank Indonesia's BSPI 2030 blueprint, ISO 20022 message schemes, and PCI-DSS Level 1 security.",
          "Financial data sovereignty is preserved whether deployed on-premises or across domestic sovereign cloud infrastructure.",
          "Commercially, I guarantee 100% procurement integrity, free of conflicts of interest, aligning with BUMN and LKPP governance standards."
        ],
        potentialQuestions: [
          "How agile is WAY4 in adapting to future Bank Indonesia regulatory revisions?",
          "Is OpenWay willing to commit to formal compliance SLAs and integrity pacts?"
        ],
        suggestedAnswer: "WAY4's microservices architecture allows rapid regulatory updates via parameter configuration without recoding base systems. We routinely sign formal compliance SLAs and integrity pacts."
      }
    },
    {
      id: 11,
      title: "Structured 30-60-90 Day Execution Roadmap",
      subtitle: "Systematic Milestones & High-Velocity Pipeline Generation",
      category: "Execution Roadmap",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide a tangible, highly disciplined 90-day action plan demonstrating commercial velocity and immediate impact.",
        talkingPoints: [
          "Here I lay out a transparent, measurable 30-60-90 day action plan.",
          "Days 1-30: Master WAY4 product blueprints, conduct account farming with existing clients, and build 5-Year TCO models.",
          "Days 31-60: External outreach. Map C-Level targets across mid-tier commercial banks via ring-2 networks, securing at least 2 active discovery meetings.",
          "Days 61-90: Accelerate qualified opportunities, initiate proof-of-concepts, and commit to generating an audit-ready multi-billion IDR annual sales pipeline."
        ],
        potentialQuestions: [
          "What concrete milestone will OpenWay leadership be able to evaluate at Day 30?"
        ],
        suggestedAnswer: "At least 3 complete target bank Buying Centre Dossiers with validated C-Level contacts, 2 active discovery proposals, and at least 1 identified module upsell opportunity in existing accounts."
      }
    },
    {
      id: 12,
      title: "Days 1 - 30: Internal Onboarding, Account Audit & TCO Modeling",
      subtitle: "WAY4 Architecture Mastery, Existing Client Nurturing & Financial ROI Modeling",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Showcase disciplined Day 1-30 execution: internalizing WAY4 production architectures, securing existing client retention, and validating C-level financial models.",
        talkingPoints: [
          "Month one is the internal foundation phase. I do not waste time in passive onboarding.",
          "I partner closely with Pre-Sales to master production WAY4 architectures deployed at BRI, Finnet, and ASBANDA.",
          "Simultaneously, I conduct formal discovery visits with existing accounts to ensure zero churn and uncover add-on module opportunities.",
          "I also build our 5-Year TCO spreadsheet model to equip commercial discussions before bank CFOs."
        ],
        potentialQuestions: [
          "How do you balance learning internal technology and visiting clients during month one?",
          "Does the TCO model account for customer data migration costs?"
        ],
        suggestedAnswer: "I split time 50/50 between Pre-Sales technical deep dives and relationship farming. Our TCO model is comprehensive, capturing licensing, hardware consolidation, and Dual Engine de-risked parallel migration."
      }
    },
    {
      id: 13,
      title: "Days 31 - 60: Market Penetration, C-Level Access & Discovery Meetings",
      subtitle: "Ring-2 Network Activation, Boardroom Access & Dual Engine Presentation",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate aggressive yet disciplined penetration of target bank boardrooms in <14 days leveraging warm ring-2 networks.",
        talkingPoints: [
          "In month two, I shift outward proactively via my trusted ring-2 network.",
          "I build comprehensive Buying Centre Dossiers for 3 target mid-tier commercial banks, diagnosing their legacy pain points beforehand.",
          "Leveraging warm introductions, I secure direct boardroom access in <14 days without ineffective cold calling.",
          "The discovery focus is dispelling board downtime fears through our Dual Engine parallel migration architecture."
        ],
        potentialQuestions: [
          "What if a target bank IT Director refuses a meeting stating their legacy switch is adequate?",
          "How many discovery meetings do you commit to securing in month two?"
        ],
        suggestedAnswer: "I do not pitch a high-risk rip-and-replace, but rather highlight BSPI 2030 regulatory deadlines and modern fee-income modules like SNAP BI and SoftPOS. My commitment is at least 2 formal C-Suite discovery sessions."
      }
    },
    {
      id: 14,
      title: "Days 61 - 90+: Pipeline Acceleration, PoC Validation & Sales Commitment",
      subtitle: "Field PoC Validation, Existing Account Add-ons & 12-Month Pipeline Commitment",
      category: "Action Plan Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Deliver tangible end-of-quarter results: field PoC sign-offs, closing existing account module expansions, and locking an audit-ready multi-billion IDR 12-month sales pipeline.",
        talkingPoints: [
          "Month three is our conversion milestone.",
          "We execute targeted Proof of Concept (PoC) tests demonstrating 10,000+ TPS and native SNAP BI compliance before bank architects.",
          "Concurrently, I close add-on module cross-sells (Digital Wallet, SoftPOS) with existing accounts for rapid fee revenue.",
          "At Day 90, I present an audit-ready 12-month sales pipeline dashboard representing tens of billions of IDR in verified potential."
        ],
        potentialQuestions: [
          "Is 90 days sufficient to build a tender-ready enterprise banking pipeline?",
          "What is the estimated value of the pipeline committed at Day 90?"
        ],
        suggestedAnswer: "With Pre-RFP Shaping and warm network activation, 90 days is completely achievable to mature 2-3 mid-tier bank pursuits and 1 existing account expansion, yielding a pipeline of IDR 20 - 40 Billion."
      }
    },
    {
      id: 15,
      title: "Clean Governance, Stakeholder Trust & Continuous Self-Improvement",
      subtitle: "Three Pillars of Integrity, Cross-Functional Execution & Long-Term Commitment",
      category: "Closing Commitment",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Conclude the presentation with an impression of rock-solid moral integrity, execution readiness, and continuous self-improvement.",
        talkingPoints: [
          "In closing, I want to emphasize my 3 core commitments to OpenWay Group.",
          "First, 100% Procurement Integrity. Backed by extensive experience meeting strict enterprise and LKPP standards, I ensure all sales processes are compliant and dispute-free.",
          "Second, serving as a cohesive cross-functional bridge between technical delivery and commercial executive teams.",
          "Third, dedication to continuous personal growth. I actively pursue banking certifications and take private professional business English courses to represent OpenWay impeccably on regional stages."
        ],
        potentialQuestions: [
          "What is your commitment to ongoing professional business English proficiency?"
        ],
        suggestedAnswer: "I maintain disciplined self-development, taking intensive private business English training focused on enterprise presentations to ensure flawless regional and global communication."
      }
    },
    {
      id: 16,
      title: "Pillar 1: Clean Procurement Integrity & Zero Audit Dispute",
      subtitle: "LKPP/SOE Equivalent Governance Benchmarks, Zero Conflict of Interest & 100% Transparency",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide absolute peace of mind for OpenWay leadership that all commercial victories are won with high ethical standards, full statutory compliance, and zero audit disputes.",
        talkingPoints: [
          "In Pillar 1, I guarantee 100% clean procurement governance equivalent to BUMN and LKPP benchmarks.",
          "I carry an unblemished 16-year career track record free of ethical or statutory disputes.",
          "Every tender proceeding is governed by formal integrity pacts, shielding OpenWay and its executive leadership from reputational risk.",
          "Tender documentation is structured transparently from Pre-RFP to final award, audit-ready for banking regulators at all times."
        ],
        potentialQuestions: [
          "How do you maintain procurement compliance under aggressive commercial quota pressure?",
          "Are you willing to sign OpenWay's official integrity pact and compliance code?"
        ],
        suggestedAnswer: "The most sustainable deal is an honorable, compliant deal. I am 100% prepared to execute formal integrity pacts and always prioritize lawful, audit-ready governance above all."
      }
    },
    {
      id: 17,
      title: "Pillar 2: Stakeholder Orchestration & Cross-Functional Synergy",
      subtitle: "Uniting C-Level, Legal Divisions, Procurement & OpenWay Technical Teams",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate commercial maturity as a strategic conductor capable of aligning internal and external stakeholders without bureaucratic drag.",
        talkingPoints: [
          "In Pillar 2, I orchestrate complex enterprise stakeholders toward unanimous agreement.",
          "Enterprise banking deals involve C-Suite leaders, Legal departments, Procurement panels, and Pre-Sales engineers.",
          "I bridge diverse vernaculars: translating technical capabilities into boardroom financial impact, and resolving contractual liabilities with bank legal counsel.",
          "Through this cohesive alignment, enterprise contract negotiation cycles are compressed by up to 40%."
        ],
        potentialQuestions: [
          "How do you resolve SLA liability deadlocks with bank legal departments?",
          "How do you coordinate with OpenWay's Pre-Sales leadership during C-Suite briefings?"
        ],
        suggestedAnswer: "I facilitate balanced, win-win SLA tiers that safeguard both parties. In boardroom sessions, I anchor commercial ROI and strategy, seamlessly handing deep architectural demonstrations over to Pre-Sales leadership."
      }
    },
    {
      id: 18,
      title: "Pillar 3: Continuous Professional Growth & Global English Fluency",
      subtitle: "Intensive Business English Coaching, Domain Mastery & Regional Representation",
      category: "Integrity Commitment Deep Dive",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Demonstrate professional humility, disciplined self-driven development, and full readiness to represent OpenWay across the Asia-Pacific region.",
        talkingPoints: [
          "In Pillar 3, I make a transparent, measurable commitment to ongoing self-improvement.",
          "I proactively engage private enterprise business English tutoring 2-3 times weekly.",
          "This ensures articulate, confident communication before OpenWay's regional executive boards and global forums.",
          "Simultaneously, I continuously deepen my payment domain mastery (ISO 20022, SNAP BI, SoftPOS) to remain a high-value consultative advisor to banking clients."
        ],
        potentialQuestions: [
          "How is your business English proficiency progressing currently?",
          "Are you prepared to represent OpenWay at international payment forums in Singapore or regionally?"
        ],
        suggestedAnswer: "My progress is steady and highly targeted toward enterprise presentations. I am fully ready to represent OpenWay across the APAC region with meticulous preparation and dedication."
      }
    },
    {
      id: 19,
      title: "Tactical Appendix: Competitive Battlecard & Objection Handling",
      subtitle: "WAY4 Platform Differentiation vs Monolithic Legacy Systems",
      category: "Tactical Appendix",
      durationEstimate: "2 minutes",
      speakerNotes: {
        purpose: "Provide Harry with conclusive commercial objection-handling frameworks to address any competitive or migration doubts from bank boards.",
        talkingPoints: [
          "This tactical battlecard appendix addresses critical boardroom questions and competitive displacement scenarios.",
          "If banks cite high upfront Capex licenses, I present flexible commercial models (phased Opex or transaction-based fees).",
          "If they fear migration risks from ACI or Fiserv, I demonstrate our Dual Engine strategy: parallel co-existence ensuring continuous uptime while migrating new channels.",
          "With WAY4's cloud-native modularity, OpenWay stands not merely as a software vendor, but as a strategic long-term modernization partner."
        ],
        potentialQuestions: [
          "How do you prove to banks that parallel Dual Engine migration will not double operational overhead?"
        ],
        suggestedAnswer: "WAY4's automated SNAP BI integration gateway synchronizes data in the background without manual human intervention, keeping daily operational bank workload completely normal."
      }
    }
  ]
};

export function getSlidesData(lang: Language = 'IN'): SlideMetadata[] {
  return SLIDES_DATA_BY_LANG[lang] || SLIDES_DATA_BY_LANG.IN;
}
