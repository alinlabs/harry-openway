const fs = require('fs');
const path = require('path');

console.log('--- Starting Batch Execution: Centered Header & 1-Line Main Title Standard (Excluding Slide 1) ---');

// 1. Update SYSTEM-INSTRUCTION.md
const sysInstPath = path.join(__dirname, '../SYSTEM-INSTRUCTION.md');
if (fs.existsSync(sysInstPath)) {
  let content = fs.readFileSync(sysInstPath, 'utf8');

  const rule11 = `
11. **Standar Judul Rata Tengah & 1 Line (Kecuali Slide 1)**:
    - Di seluruh halaman/slide (Slide 2 hingga 7, KECUALI Slide 1 yang mempertahankan layout profil eksekutif spesifik), struktur header/judul slide WAJIB diposisikan di bagian atas dengan format **RATA TENGAH (\`text-center\`)**:
      * **Kategori / Eyebrow**: Teks pengantar konteks (misal: \`"Market Conditions & Potential · Regulatory Catalyst: BSPI 2030"\`) diposisikan rata tengah (\`flex items-center justify-center text-center\`).
      * **Judul Utama Slide**: (misal: \`"Indonesia Payment Market & WAY4 Vector"\`): WAJIB **1 LINE / SATU BARIS** utuh (\`whitespace-nowrap overflow-hidden text-ellipsis\`, ukuran responsif proporsional \`text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight\`, dilarang membungkus/wrap ke 2 baris).
      * **Sub Judul / Deskriptor**: (misal: \`"Legacy Monolith Migration to Cloud-Native Switching"\`) diposisikan rata tengah di bawah judul utama (\`text-center text-blue-600 font-semibold\`).
    - Penataan ini menjamin tampilan slide simetris, berimbang, dan memberikan panggung optimal pada komponen visual 3D/Lottie serta pilar data komparasi di bawahnya.
`;

  if (!content.includes('Standar Judul Rata Tengah & 1 Line')) {
    content = content.replace(
      '### 4. Protokol Eksekusi & Pemeliharaan',
      `${rule11.trim()}\n\n---\n\n### 4. Protokol Eksekusi & Pemeliharaan`
    );
    fs.writeFileSync(sysInstPath, content, 'utf8');
    console.log('✓ SYSTEM-INSTRUCTION.md updated with Rule 11 (Centered & 1-Line Title Standard).');
  } else {
    console.log('• SYSTEM-INSTRUCTION.md already contains Rule 11.');
  }
}

// 2. Update prompt-visualisasi.md
const promptVisPath = path.join(__dirname, '../prompt-visualisasi.md');
if (fs.existsSync(promptVisPath)) {
  let content = fs.readFileSync(promptVisPath, 'utf8');
  const visRule = `
### 4. Standar Header & Judul Slide (Rata Tengah & 1 Line - Kecuali Slide 1)
- Untuk semua slide (Slide 2 hingga 7, kecuali Slide 1):
  * **Posisi Header**: Terletak di bagian atas slide secara horizontal penuh dan simetris (*full-width top header*).
  * **Rata Tengah Total**: Eyebrow kategori, judul utama, dan sub-judul deskriptor diposisikan rata tengah (\`text-center\`).
  * **Judul Utama 1 Baris (1-Line Guarantee)**: Judul utama seperti *"Indonesia Payment Market & WAY4 Vector"* WAJIB tampil dalam 1 baris (\`whitespace-nowrap\`), tanpa terpotong atau membungkus ke 2 baris.
  * **Keseimbangan Visual**: Penempatan judul di tengah atas membebaskan kanvas di bawahnya sehingga area Visual 3D Lottie dan pilar data memiliki proporsi luas dan simetris.
`;

  if (!content.includes('Standar Header & Judul Slide (Rata Tengah & 1 Line')) {
    content += `\n${visRule.trim()}\n`;
    fs.writeFileSync(promptVisPath, content, 'utf8');
    console.log('✓ prompt-visualisasi.md updated with Centered & 1-Line Title Standard.');
  } else {
    console.log('• prompt-visualisasi.md already updated.');
  }
}

// 3. Update prompt2.md to prompt7.md
const promptsToUpdate = ['prompt2.md', 'prompt3.md', 'prompt4.md', 'prompt5.md', 'prompt6.md', 'prompt7.md'];

promptsToUpdate.forEach((filename) => {
  const filePath = path.join(__dirname, '..', filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const centerTitleRule = `- **Judul Rata Tengah & 1 Line (Strict Center & Single Line)**: Struktur judul slide diposisikan rata tengah di bagian atas (\`text-center\`):
  * Kategori / Eyebrow rata tengah (\`flex items-center justify-center text-center\`).
  * Judul utama WAJIB 1 line / satu baris utuh (\`whitespace-nowrap\`, ukuran proporsional \`text-2xl sm:text-3xl\`, tanpa wrap ke baris kedua).
  * Sub-deskriptor rata tengah di bawah judul utama (\`text-center\`).`;

    if (!content.includes('Judul Rata Tengah & 1 Line')) {
      // Insert into Section 2
      content = content.replace(
        /- \*\*Fokus Murni Visual/,
        `${centerTitleRule}\n- **Fokus Murni Visual`
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${filename} updated with Centered & 1-Line Title rule.`);
    } else {
      console.log(`• ${filename} already has Centered & 1-Line Title rule.`);
    }
  }
});

// 4. Update src/slide/02/index.tsx
const slide02Path = path.join(__dirname, '../src/slide/02/index.tsx');
if (fs.existsSync(slide02Path)) {
  let content = fs.readFileSync(slide02Path, 'utf8');

  // Replace layout so Header is Centered at top, 1-line title, and left column starts with description & benchmark
  const targetOldStructure = `      {/* 1. Main Market & Positioning Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Market Context & Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>Market Conditions & Potential</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Regulatory Catalyst: BSPI 2030</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Indonesia Payment Market & WAY4 Vector
            </h1>
            <p className="text-sm font-semibold text-blue-600 pt-0.5">
              Legacy Monolith Migration to Cloud-Native Switching
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">`;

  const newStructure = `      {/* 1. Slide Header: Rata Tengah & 1-Line Main Title (Strict Standard - Kecuali Slide 1) */}
      <div className="text-center space-y-1 mb-1 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>Market Conditions & Potential</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">Regulatory Catalyst: BSPI 2030</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          Indonesia Payment Market & WAY4 Vector
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-blue-600">
          Legacy Monolith Migration to Cloud-Native Switching
        </p>
      </div>

      {/* 2. Main Market & Positioning Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Market Context & Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 space-y-2.5">
          <p className="text-xs text-slate-600 leading-relaxed">`;

  if (content.includes(targetOldStructure)) {
    content = content.replace(targetOldStructure, newStructure);
    // Also update any comment numbered 2 and 3 to match
    content = content.replace(
      '{/* 2. Four Market Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}',
      '{/* 3. Four Market Pillars: Flat-Mounted Grid, Zero-Badge, Google Pastel Palette */}'
    );
    content = content.replace(
      '{/* 3. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}',
      '{/* 4. Bottom Proof & Takeaway Bar: Strict Zero-Badge, Direct Inter Typography */}'
    );
    fs.writeFileSync(slide02Path, content, 'utf8');
    console.log('✓ src/slide/02/index.tsx updated with centered 1-line header.');
  } else {
    console.log('• Warning: Target structure not found directly in src/slide/02/index.tsx. Checking current content.');
  }
}

console.log('--- Batch Execution Complete ---');
