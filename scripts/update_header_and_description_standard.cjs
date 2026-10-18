const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md STANDARD] Updating Header (2-Line Center) and Left Description Title ===');

// 1. Update src/slide/02/index.tsx
const slide02Path = path.join(__dirname, '../src/slide/02/index.tsx');
if (fs.existsSync(slide02Path)) {
  let content = fs.readFileSync(slide02Path, 'utf8');

  // Replace Header & Left Column in Slide02
  const oldHeaderAndLeft = `      {/* 1. Slide Header: Rata Tengah & 1-Line Main Title (Strict Standard - Kecuali Slide 1) */}
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
          <p className="text-xs text-slate-600 leading-relaxed">
            Pasar switching perbankan Indonesia didominasi sistem legasi kaku (ACI / Fiserv) yang tertekan mandat BSPI 2030. OpenWay memimpin di Tier-1 nasional (BRI, Finnet, ASBANDA), membuka ceruk pertumbuhan besar pada migrasi bank komersial & menengah.
          </p>`;

  const newHeaderAndLeft = `      {/* 1. Slide Header: Rata Tengah 2 Baris (Sub Judul Kecil Diatas & Judul Utama Besar 1-Line) - Kecuali Slide 1 */}
      <div className="text-center space-y-1 mb-2 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>Market Conditions & Potential</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">Regulatory Catalyst: BSPI 2030</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          Indonesia Payment Market & WAY4 Vector
        </h1>
      </div>

      {/* 2. Main Market & Positioning Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Market Context & Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              Legacy Monolith Migration to Cloud-Native Switching
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              Pasar switching perbankan Indonesia didominasi sistem legasi kaku (ACI / Fiserv) yang tertekan mandat BSPI 2030. OpenWay memimpin di Tier-1 nasional (BRI, Finnet, ASBANDA), membuka ceruk pertumbuhan besar pada migrasi bank komersial & menengah.
            </p>
          </div>`;

  if (content.includes(oldHeaderAndLeft)) {
    content = content.replace(oldHeaderAndLeft, newHeaderAndLeft);
    fs.writeFileSync(slide02Path, content, 'utf8');
    console.log('[OK] Updated src/slide/02/index.tsx');
  } else {
    console.log('[WARN] Target pattern not found in src/slide/02/index.tsx, applying regex fallback...');
    // Regex replacement for robustness
    const regexHeader = /<div className="text-center space-y-1 mb-1 shrink-0">[\s\S]*?<\/div>[\s\S]*?<div className="lg:col-span-5 space-y-2\.5">\s*<p className="text-xs text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/;
    if (regexHeader.test(content)) {
      content = content.replace(regexHeader, (match, descText) => {
        return `<div className="text-center space-y-1 mb-2 shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-2">
          <span>Market Conditions & Potential</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">Regulatory Catalyst: BSPI 2030</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          Indonesia Payment Market & WAY4 Vector
        </h1>
      </div>

      {/* 2. Main Market & Positioning Canvas: 85%-90% Visual Dominance (Split 5:7 Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto py-1">
        {/* Left Column: Market Context & Head-to-Head Architectural Comparison */}
        <div className="lg:col-span-5 space-y-2.5">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-blue-600 tracking-tight">
              Legacy Monolith Migration to Cloud-Native Switching
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">${descText.trim()}</p>
          </div>`;
      });
      fs.writeFileSync(slide02Path, content, 'utf8');
      console.log('[OK] Applied regex fallback to src/slide/02/index.tsx');
    } else {
      console.error('[ERROR] Could not match header in src/slide/02/index.tsx');
    }
  }
}

// 2. Update SYSTEM-INSTRUCTION.md
const sysInstPath = path.join(__dirname, '../SYSTEM-INSTRUCTION.md');
if (fs.existsSync(sysInstPath)) {
  let content = fs.readFileSync(sysInstPath, 'utf8');
  const targetRule = `11. **Standar Judul Rata Tengah & 1 Line (Kecuali Slide 1)**:
    - Di seluruh halaman/slide (Slide 2 hingga 7, KECUALI Slide 1 yang mempertahankan layout profil eksekutif spesifik), struktur header/judul slide WAJIB diposisikan di bagian atas dengan format **RATA TENGAH (\`text-center\`)**:
      * **Kategori / Eyebrow**: Teks pengantar konteks (misal: \`"Market Conditions & Potential · Regulatory Catalyst: BSPI 2030"\`) diposisikan rata tengah (\`flex items-center justify-center text-center\`).
      * **Judul Utama Slide**: (misal: \`"Indonesia Payment Market & WAY4 Vector"\`): WAJIB **1 LINE / SATU BARIS** utuh (\`whitespace-nowrap overflow-hidden text-ellipsis\`, ukuran responsif proporsional \`text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight\`, dilarang membungkus/wrap ke 2 baris).
      * **Sub Judul / Deskriptor**: (misal: \`"Legacy Monolith Migration to Cloud-Native Switching"\`) diposisikan rata tengah di bawah judul utama (\`text-center text-blue-600 font-semibold\`).
    - Penataan ini menjamin tampilan slide simetris, berimbang, dan memberikan panggung optimal pada komponen visual 3D/Lottie serta pilar data komparasi di bawahnya.`;

  const newRule = `11. **Standar Header 2 Baris di Tengah & Judul Deskripsi di Kiri (Kecuali Slide 1)**:
    - Di seluruh halaman/slide (Slide 2 hingga 7, KECUALI Slide 1 yang mempertahankan layout profil eksekutif spesifik), struktur judul WAJIB mengikuti standarisasi:
      * **Header Rata Tengah (Hanya 2 Line)**:
        1. **Line 1 - Sub Judul Kecil Diatas (Kategori / Eyebrow)**: Teks pengantar konteks (misal: \`"Market Conditions & Potential · Regulatory Catalyst: BSPI 2030"\`), rata tengah (\`flex items-center justify-center text-center text-[11px] font-semibold uppercase tracking-wider text-blue-600\`).
        2. **Line 2 - Judul Utama Besar**: (misal: \`"Indonesia Payment Market & WAY4 Vector"\`), WAJIB **1 LINE / SATU BARIS** utuh (\`whitespace-nowrap overflow-hidden text-ellipsis\`, ukuran responsif proporsional \`text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight\`).
        *DILARANG menaruh baris ketiga (sub-judul deskriptor) di tengah.*
      * **Judul Deskripsi di Kiri**:
        Teks deskriptor topik (misal: \`"Legacy Monolith Migration to Cloud-Native Switching"\`) diposisikan di **kolom kiri sebagai Judul Deskripsi** (\`text-sm sm:text-base font-bold text-blue-600 tracking-tight\`) langsung di atas paragraf narasi/deskripsi konteks pasar, bukan di tengah.
    - Penataan ini menjamin tampilan slide simetris, berimbang, bersih tanpa tumpukan teks di tengah, dan memberikan panggung optimal pada komponen visual 3D/Lottie serta pilar data komparasi di bawahnya.`;

  if (content.includes(targetRule)) {
    content = content.replace(targetRule, newRule);
    fs.writeFileSync(sysInstPath, content, 'utf8');
    console.log('[OK] Updated SYSTEM-INSTRUCTION.md');
  } else {
    // Regex replace rule 11
    const regexSys = /11\.\s*\*\*Standar Judul Rata Tengah[\s\S]*?(?=---\s*\n\s*### 4)/;
    if (regexSys.test(content)) {
      content = content.replace(regexSys, newRule.trim() + '\n\n');
      fs.writeFileSync(sysInstPath, content, 'utf8');
      console.log('[OK] Applied regex replacement for Rule 11 in SYSTEM-INSTRUCTION.md');
    }
  }
}

// 3. Update prompt-visualisasi.md
const promptVisPath = path.join(__dirname, '../prompt-visualisasi.md');
if (fs.existsSync(promptVisPath)) {
  let content = fs.readFileSync(promptVisPath, 'utf8');
  const oldVisRule = `### 4. Standar Header & Judul Slide (Rata Tengah & 1 Line - Kecuali Slide 1)
- Untuk semua slide (Slide 2 hingga 7, kecuali Slide 1):
  * **Posisi Header**: Terletak di bagian atas slide secara horizontal penuh dan simetris (*full-width top header*).
  * **Rata Tengah Total**: Eyebrow kategori, judul utama, dan sub-judul deskriptor diposisikan rata tengah (\`text-center\`).
  * **Judul Utama 1 Baris (1-Line Guarantee)**: Judul utama seperti *"Indonesia Payment Market & WAY4 Vector"* WAJIB tampil dalam 1 baris (\`whitespace-nowrap\`), tanpa terpotong atau membungkus ke 2 baris.
  * **Keseimbangan Visual**: Penempatan judul di tengah atas membebaskan kanvas di bawahnya sehingga area Visual 3D Lottie dan pilar data memiliki proporsi luas dan simetris.`;

  const newVisRule = `### 4. Standar Header 2 Baris di Tengah & Judul Deskripsi di Kiri (Kecuali Slide 1)
- Untuk semua slide (Slide 2 hingga 7, kecuali Slide 1):
  * **Header Rata Tengah (Hanya 2 Baris)**:
    - Baris 1: Sub judul kecil di atas (Kategori / Eyebrow).
    - Baris 2: Judul utama besar dalam 1 baris utuh (\`whitespace-nowrap\`), tanpa terpotong atau membungkus.
    - Dilarang menempatkan baris ke-3 di tengah.
  * **Judul Deskripsi di Kiri**:
    - Judul deskriptor (seperti *"Legacy Monolith Migration to Cloud-Native Switching"*) diposisikan di kolom kiri di atas teks narasi/deskripsi, bukan di tengah.
  * **Keseimbangan Visual**: Bagian tengah atas bersih dan elegan dengan hanya 2 baris, sementara kolom kiri memiliki struktur hierarki deskripsi yang rapi dan kuat.`;

  if (content.includes(oldVisRule)) {
    content = content.replace(oldVisRule, newVisRule);
    fs.writeFileSync(promptVisPath, content, 'utf8');
    console.log('[OK] Updated prompt-visualisasi.md');
  } else {
    const regexVis = /### 4\.\s*Standar Header & Judul Slide[\s\S]*$/;
    if (regexVis.test(content)) {
      content = content.replace(regexVis, newVisRule.trim() + '\n');
      fs.writeFileSync(promptVisPath, content, 'utf8');
      console.log('[OK] Applied regex replacement in prompt-visualisasi.md');
    }
  }
}

// 4. Update prompt2.md to prompt7.md
const promptFiles = ['prompt2.md', 'prompt3.md', 'prompt4.md', 'prompt5.md', 'prompt6.md', 'prompt7.md'];
promptFiles.forEach((file) => {
  const pPath = path.join(__dirname, '..', file);
  if (fs.existsSync(pPath)) {
    let content = fs.readFileSync(pPath, 'utf8');
    
    // Pattern to replace
    const oldPromptRule = `- **Judul Rata Tengah & 1 Line (Strict Center & Single Line)**: Struktur judul slide diposisikan rata tengah di bagian atas (\`text-center\`):
  * Kategori / Eyebrow rata tengah (\`flex items-center justify-center text-center\`).
  * Judul utama WAJIB 1 line / satu baris utuh (\`whitespace-nowrap\`, ukuran proporsional \`text-2xl sm:text-3xl\`, tanpa wrap ke baris kedua).
  * Sub-deskriptor rata tengah di bawah judul utama (\`text-center\`).`;

    const newPromptRule = `- **Header 2 Baris di Tengah & Judul Deskripsi di Kiri (Strict Standard)**:
  * Header Tengah (Hanya 2 Baris):
    - Baris 1: Sub-judul kecil di atas / Eyebrow (\`flex items-center justify-center text-center\`).
    - Baris 2: Judul utama besar WAJIB 1 line / satu baris utuh (\`whitespace-nowrap\`, ukuran \`text-2xl sm:text-3xl lg:text-3xl font-black\`).
    - Dilarang menaruh baris ketiga di tengah.
  * Judul Deskripsi di Kiri: Teks sub-deskriptor topik (misal: \`Legacy Monolith Migration to Cloud-Native Switching\`) diposisikan sebagai judul deskripsi di kolom kiri (\`text-sm sm:text-base font-bold text-blue-600\`) tepat di atas teks paragraf deskripsi.`;

    if (content.includes(oldPromptRule)) {
      content = content.replace(oldPromptRule, newPromptRule);
      fs.writeFileSync(pPath, content, 'utf8');
      console.log(`[OK] Updated ${file}`);
    } else {
      const regexPrompt = /- \*\*Judul Rata Tengah[\s\S]*?(?=- \*\*Fokus Murni Visual)/;
      if (regexPrompt.test(content)) {
        content = content.replace(regexPrompt, newPromptRule + '\n');
        fs.writeFileSync(pPath, content, 'utf8');
        console.log(`[OK] Applied regex replacement in ${file}`);
      }
    }
  }
});

console.log('=== Batch Script Execution Finished Successfully ===');
