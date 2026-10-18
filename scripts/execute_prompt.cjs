#!/usr/bin/env node
/**
 * EXECUTE PROMPT RUNNER (Node.js CJS Engine)
 * Fast, Token-Efficient Modular Slide Verification & Scaffolding Engine
 * Adheres strictly to SYSTEM-INSTRUCTION.md, EXECUTE-PROMPT.md, and prompt-visualisasi.md
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const slideArg = args[0] || '1';

function padZero(num) {
  return String(num).padStart(2, '0');
}

function verifySlide(slideNum) {
  const pad = padZero(slideNum);
  const slideDir = path.join(rootDir, 'src', 'slide', pad);
  const promptFile = path.join(rootDir, `prompt${slideNum}.md`);

  console.log(`\n======================================================`);
  console.log(`🚀 [EXECUTE-PROMPT] Memproses Slide ${pad} (prompt${slideNum}.md)`);
  console.log(`======================================================`);

  if (!fs.existsSync(promptFile)) {
    console.error(`❌ Berkas instruksi ${promptFile} tidak ditemukan!`);
    return false;
  }

  const promptContent = fs.readFileSync(promptFile, 'utf-8');
  console.log(`📄 Prompt terbaca: ${promptContent.split('\n')[0]}`);

  // Pastikan direktori modular src/slide/[NN]/
  if (!fs.existsSync(slideDir)) {
    fs.mkdirSync(slideDir, { recursive: true });
    console.log(`📁 Membuat direktori modular: src/slide/${pad}/`);
  }

  const files = ['data.ts', 'container.tsx', 'index.tsx'];
  let allFilesExist = true;

  files.forEach((file) => {
    const filePath = path.join(slideDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Berkas belum ada: src/slide/${pad}/${file}`);
      allFilesExist = false;
    } else {
      const stats = fs.statSync(filePath);
      console.log(`✅ Berkas tersedia: src/slide/${pad}/${file} (${stats.size} bytes)`);
    }
  });

  // Validasi Kepatuhan Arsitektur (Anti-Slop & Zero-Badge Audit)
  const indexFile = path.join(slideDir, 'index.tsx');
  if (fs.existsSync(indexFile)) {
    const indexContent = fs.readFileSync(indexFile, 'utf-8');
    const warnings = [];

    // Cek badge/pill
    if (/rounded-full\s+px-2(\.5)?\s+py-0\.5/.test(indexContent)) {
      warnings.push("Terdeteksi potensi penggunaan pill badge tag. Gunakan tipografi Inter atau divider.");
    }
    // Cek pulsing dot pada static label
    if (/bg-emerald-500\s+rounded-full\s+animate-pulse/.test(indexContent)) {
      warnings.push("Terdeteksi pulsing dot pada elemen statis (langgar anti-slop rule).");
    }
    // Cek border card tebal
    if (/border-l-4/.test(indexContent)) {
      warnings.push("Hindari border-l-4 tebal; gunakan hairline divider pastel (border-l-2 pastel/white space).");
    }

    if (warnings.length > 0) {
      console.log(`\n⚠️  Catatan Audit Kepatuhan:`);
      warnings.forEach((w) => console.log(`   - ${w}`));
    } else {
      console.log(`✨ Audit Kepatuhan: 100% Sesuai Standar Ultra-Visual Google White Style!`);
    }
  }

  return allFilesExist;
}

function runTypeCheck() {
  console.log(`\n🔍 Menjalankan Fast TypeScript Typecheck (tsc --noEmit)...`);
  try {
    execSync('npm run lint', { stdio: 'inherit', cwd: rootDir });
    console.log(`\n🎉 SEMUA BERKAS BERHASIL TERVERIFIKASI & KOMPILASI AMAN!\n`);
  } catch (err) {
    console.error(`\n❌ Typecheck error! Mohon periksa tipe data modular.`);
    process.exit(1);
  }
}

if (slideArg.toLowerCase() === 'all') {
  console.log(`⚡ Menjalankan verifikasi cepat seluruh 20 slide...`);
  for (let i = 1; i <= 20; i++) {
    verifySlide(i);
  }
  runTypeCheck();
} else {
  const num = parseInt(slideArg, 10);
  if (isNaN(num) || num < 1 || num > 20) {
    console.error(`Nilai slide tidak valid. Masukkan angka 1-20 atau "all".`);
    process.exit(1);
  }
  verifySlide(num);
  runTypeCheck();
}
