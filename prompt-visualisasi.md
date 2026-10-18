# PANDUAN MASTER IMPLEMENTASI VISUALISASI 3D & ASSETS LOTTIE.JSON (prompt-visualisasi.md)
## Standarisasi Engine Grafis 3D, Asset Lottie.JSON (/public/assets/lottie/), Matriks Interaktif & Ultra-Minim Teks

Dokumen ini merupakan **Pedoman Visualisasi Induk** yang diselaraskan 100% dengan rangkaian `prompt1.md` hingga `prompt7.md` serta `SYSTEM-INSTRUCTION.md` untuk implementasi visual pada setiap modul slide presentasi Harry Gultom.

> **ATURAN MUTLAK (CORE MANDATE):**
> 1. **ASSETS LOTTIE.JSON NYATA & VISUAL-3D DI DIREKTORI SLIDE**:
>    - Setiap slide WAJIB memiliki komponen visual mandiri di foldernya: `src/slide/[NN]/visual-3D.tsx` dan berkas animasi pendukung `lottie.json`.
>    - Dilarang keras membuat animasi berupa loading bar/dash progress bar biasa!
>    - Lottie JSON merepresentasikan aksi nyata kontekstual 3D perbankan (kartu mengetuk NFC, kubus microservices melayang bertukar data, router switch kecepatan tinggi, diagram isometrik berlapis, matriks stakeholder berputar, dsb).
> 2. **LOTTIE PLAYER ENGINE TERINTEGRASI**:
>    - Di-render dalam `src/slide/[NN]/visual-3D.tsx` menggunakan komponen `<LottiePlayer animationData={lottieData} />` yang didukung pustaka `lottie-web` dengan renderer SVG 60fps murni, zero-lag, dan offline-ready.
> 3. **ULTRA-MINIM TEKS (85% - 90% VISUAL DOMINANCE)**:
>    - Maksimal **1-3 kata** per label/metrik.
>    - Dilarang menulis deskripsi teks panjang atau paragraf lebih dari 2 baris di kanvas utama.
>    - Seluruh narasi mendalam, penjelasan teknis, dan skrip interview tersimpan di **Speaker Notes Drawer** (`slidesData.ts`).
> 4. **STRICT ZERO-CLICK INFORMATION POLICY**:
>    - Seluruh data numerik, diagram, visual 3D, dan pilar komersial tampil utuh seketika tanpa perlu mekanisme klik.
> 5. **PURE WHITE CANVAS & GOOGLE PASTEL PALETTE**:
>    - Latar kanvas `#ffffff` bersih, menempel flat (`bg-transparent`), font **Inter** 100% untuk seluruh teks dan angka numerik (`font-inter tabular-nums font-mono`).
>    - Skema warna elegan berbasis palet Google Pastel: Biru Google (`#1a73e8`, pastel: `#e8f0fe`) sebagai warna utama, Merah Google (`#ea4335`, pastel: `#fce8e6`), Kuning/Amber Google (`#fbbc04`, pastel: `#fef7e0`), dan Hijau Google (`#34a853`, pastel: `#e6f4ea`).
> 6. **ZERO TOP META STRIP**:
>    - Dilarang menampilkan strip koordinat GPS, regional hub, atau label kandidasi di bagian atas halaman slide.
> 7. **ZERO VISUAL TITLE & ZERO TEXT CARDS (PURE VISUAL FOCUS)**:
>    - Mutlak dilarang menampilkan teks judul seperti "3D Banking Infrastructure", "3D Executive Profile", atau strip judul apa pun di dalam area visual.
>    - Mutlak dilarang menyematkan kartu-kartu teks (*text cards*) atau badges berteks di dalam wadah visual Lottie.
>    - Area visual dan kartu visual didedikasikan 100% murni untuk visual grafis, animasi Lottie multi-layer yang hidup, dan estetika presentasi tanpa distraksi teks.

---

### 1. Katalog Lengkap 7 Asset Lottie.JSON & Aksi 3D Tiap Halaman

| Slide | Nama Halaman | Aksi Nyata Kontekstual 3D | Lokasi Berkas Lottie JSON | Palet Warna Google Pastel |
| :--- | :--- | :--- | :--- | :--- |
| **01** | Executive Profile & Background | Hub komando perbankan beroperasi real-time & kartu identitas eksekutif 16 tahun IT B2B | `src/slide/01/lottie.json` | Google Blue Utama (`#1a73e8`), Pastel Blue (`#e8f0fe`), Green (`#34a853`) |
| **02** | Market Conditions & Positioning | Matriks pergeseran pasar dari monolitik legasi (ACI/Fiserv) ke arsitektur cloud WAY4 BSPI 2030 | `src/slide/02/lottie.json` | Google Blue Utama (`#1a73e8`), Red (`#ea4335`), Pastel Red (`#fce8e6`), Yellow (`#fbbc04`) |
| **03** | Strategic FSI Account Mapping | Orbit interaktif 3-tier stakeholder: Decision Makers, Key Influencers, Gatekeepers | `src/slide/03/lottie.json` | Google Blue Utama (`#1a73e8`), Pastel Yellow (`#fef7e0`), Amber (`#fbbc04`), Green (`#34a853`) |
| **04** | Core Stack & Success Replication | 3 Slab isometrik berlapis (Compliance BSPI, Tier-1 Blueprints, Market Expansion) | `src/slide/04/lottie.json` | Google Blue Utama (`#1a73e8`), Green (`#34a853`), Pastel Green (`#e6f4ea`), Yellow (`#fbbc04`) |
| **05** | Strategic 30-60-90 Day Plan | 3 Podium tangga berundak menuju komitmen pipeline 12 bulan (Hari 30, 60, 90) | `src/slide/05/lottie.json` | Google Blue Utama (`#1a73e8`), Pastel Blue (`#e8f0fe`), Green (`#34a853`), Amber (`#fbbc04`) |
| **06** | Conclusion & Clean Governance | Perisai kepatuhan 100% auditable (LKPP equivalent) & mesin pertumbuhan ganda bilingual | `src/slide/06/lottie.json` | Google Green (`#34a853`), Pastel Green (`#e6f4ea`), Blue Utama (`#1a73e8`), Gold (`#fbbc04`) |
| **07** | Tactic & Competitive Battlecard | Arsitektur gerbang paralel Dual Engine: migrasi bertahap tanpa risiko downtime | `src/slide/07/lottie.json` | Google Blue Utama (`#1a73e8`), Pastel Blue (`#e8f0fe`), Red/Amber (`#ea4335`/`#fbbc04`) |

---

### 2. Standar Implementasi visual-3D.tsx & Penggunaan LottiePlayer

Setiap visual 3D wajib berada mandiri di direktori slide masing-masing (`src/slide/[NN]/visual-3D.tsx`):

```tsx
// Di dalam src/slide/[NN]/visual-3D.tsx:
import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export const Visual3D: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[190px] flex items-center justify-center overflow-hidden">
      {/* Layer 1: Lottie Kinetic 3D Engine */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-0">
        <LottiePlayer animationData={lottieData} className="w-full h-full max-h-[190px]" loop autoplay />
      </div>
      {/* Layer 2: Real-time SVG Isometric Overlay / Diagrams */}
    </div>
  );
};
export default Visual3D;
```

---

### 3. Protokol Ultra-Minim Teks & Dominasi Visual (85%-90%)
- **Teks Maksimal 1-3 Kata**: Seluruh label data numerik dibuat singkat padat (misal: "16+ Tahun", "KBMI 1-4", "Dual Engine", "BSPI 2030").
- **Visual Menguasai Kanvas**: 85%-90% area layar diisi oleh: Objek 3D Lottie, diagram alokasi isometrik, matriks stakeholder, dan timeline eksekusi.
- **Strictly Zero-Scroll**: Layout dikunci pada tinggi 100vh (`h-full overflow-hidden`).

### 4. Standar Header 2 Baris di Tengah & Judul Deskripsi di Kiri (Kecuali Slide 1)
- Untuk semua slide (Slide 2 hingga 7, kecuali Slide 1):
  * **Spasial & Breathing Room (Slide 2 dan Seterusnya)**:
    - Tidak menempel mepet ke header navigasi atas (`pt-3 sm:pt-5`).
    - Menyisakan ruang lega yang cukup di bawah judul (`pb-4 sm:pb-6`) sebelum konten grid dimulai.
  * **Header Rata Tengah (Hanya 2 Baris)**:
    - Baris 1: Sub judul kecil di atas (Kategori / Eyebrow).
    - Baris 2: Judul utama besar dalam 1 baris utuh (`whitespace-nowrap`), tanpa terpotong atau membungkus.
    - Dilarang menempatkan baris ke-3 di tengah.
  * **Judul Deskripsi di Kiri**:
    - Judul deskriptor (seperti *"Legacy Monolith Migration to Cloud-Native Switching"*) diposisikan di kolom kiri di atas teks narasi/deskripsi, bukan di tengah.
  * **Keseimbangan Visual**: Bagian tengah atas bersih dan elegan dengan hanya 2 baris, sementara kolom kiri memiliki struktur hierarki deskripsi yang rapi dan kuat.
