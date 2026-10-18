const fs = require('fs');
const path = require('path');

console.log('=== [EXECUTE-PROMPT.md] Adjusting Slide Header Vertical Spacing (Slide 2 & Onward) ===');

// 1. Update src/slide/02/index.tsx
const slide02Path = path.join(__dirname, '../src/slide/02/index.tsx');
if (fs.existsSync(slide02Path)) {
  let content = fs.readFileSync(slide02Path, 'utf8');

  // Replace header div class to add top spacing (pt-3 sm:pt-5) and bottom spacing (pb-4 sm:pb-6)
  const oldHeader = `<div className="text-center space-y-1 mb-2 shrink-0">`;
  const newHeader = `<div className="text-center space-y-1.5 pt-3 sm:pt-5 pb-4 sm:pb-6 shrink-0">`;

  if (content.includes(oldHeader)) {
    content = content.replace(oldHeader, newHeader);
    fs.writeFileSync(slide02Path, content, 'utf8');
    console.log('[OK] Updated header spacing in src/slide/02/index.tsx');
  } else {
    // Regex replace
    content = content.replace(
      /<div className="text-center space-y-1(?: mb-\d+)? shrink-0">/,
      newHeader
    );
    fs.writeFileSync(slide02Path, content, 'utf8');
    console.log('[OK] Applied regex replacement for header spacing in src/slide/02/index.tsx');
  }
}

// 2. Update SYSTEM-INSTRUCTION.md Rule 11
const sysInstPath = path.join(__dirname, '../SYSTEM-INSTRUCTION.md');
if (fs.existsSync(sysInstPath)) {
  let content = fs.readFileSync(sysInstPath, 'utf8');

  const oldRule11Pointers = `      * **Header Rata Tengah (Hanya 2 Line)**:`;
  const spacingSpecification = `      * **Spasial & Breathing Room (Jarak Vertikal)**:
        - Header slide diposisikan sedikit lebih ke bawah (\`pt-3 sm:pt-5\`), tidak menempel ketat di batas header navigasi atas.
        - Menyisakan ruang lega di bawah judul (\`pb-4 sm:pb-6\`) sebelum kanvas pilar visual dan data dimulai.
      * **Header Rata Tengah (Hanya 2 Line)**:`;

  if (content.includes(oldRule11Pointers) && !content.includes('Breathing Room (Jarak Vertikal)')) {
    content = content.replace(oldRule11Pointers, spacingSpecification);
    fs.writeFileSync(sysInstPath, content, 'utf8');
    console.log('[OK] Updated SYSTEM-INSTRUCTION.md Rule 11 with spacing guideline');
  }
}

// 3. Update prompt-visualisasi.md Section 4
const promptVisPath = path.join(__dirname, '../prompt-visualisasi.md');
if (fs.existsSync(promptVisPath)) {
  let content = fs.readFileSync(promptVisPath, 'utf8');

  const oldVisRule = `  * **Header Rata Tengah (Hanya 2 Baris)**:`;
  const newVisRule = `  * **Spasial & Breathing Room (Slide 2 dan Seterusnya)**:
    - Tidak menempel mepet ke header navigasi atas (\`pt-3 sm:pt-5\`).
    - Menyisakan ruang lega yang cukup di bawah judul (\`pb-4 sm:pb-6\`) sebelum konten grid dimulai.
  * **Header Rata Tengah (Hanya 2 Baris)**:`;

  if (content.includes(oldVisRule) && !content.includes('Spasial & Breathing Room')) {
    content = content.replace(oldVisRule, newVisRule);
    fs.writeFileSync(promptVisPath, content, 'utf8');
    console.log('[OK] Updated prompt-visualisasi.md with spacing guideline');
  }
}

// 4. Update prompt2.md to prompt7.md
const promptFiles = ['prompt2.md', 'prompt3.md', 'prompt4.md', 'prompt5.md', 'prompt6.md', 'prompt7.md'];
promptFiles.forEach((file) => {
  const pPath = path.join(__dirname, '..', file);
  if (fs.existsSync(pPath)) {
    let content = fs.readFileSync(pPath, 'utf8');
    const oldPromptRule = `  * Header Tengah (Hanya 2 Baris):`;
    const newPromptRule = `  * Spasial & Breathing Room: Diposisikan lebih ke bawah (\`pt-3 sm:pt-5\`), tidak mepet di batas atas header, dan menyisakan banyak ruang lega di bawah judul (\`pb-4 sm:pb-6\`).
  * Header Tengah (Hanya 2 Baris):`;

    if (content.includes(oldPromptRule) && !content.includes('Breathing Room:')) {
      content = content.replace(oldPromptRule, newPromptRule);
      fs.writeFileSync(pPath, content, 'utf8');
      console.log(`[OK] Updated ${file} with header vertical spacing rule`);
    }
  }
});

console.log('=== Batch Spacing Update Finished Successfully ===');
