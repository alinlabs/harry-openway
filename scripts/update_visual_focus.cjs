const fs = require('fs');
const path = require('path');

console.log('--- Starting Batch Update: Pure Visual Focus & Zero Title Enforcement ---');

// 1. Update SYSTEM-INSTRUCTION.md
const sysInstPath = path.join(__dirname, '../SYSTEM-INSTRUCTION.md');
if (fs.existsSync(sysInstPath)) {
  let sysInst = fs.readFileSync(sysInstPath, 'utf8');
  
  const visualRule = `
9. **Fokus Murni Visual (Zero Visual Title & Zero Text Cards di Area Visual)**:
   - Di seluruh halaman (Slide 1–7), area visual (Visual 3D & Lottie container) WAJIB murni fokus pada visual grafis dan animasi (Pure Visual Focus).
   - **Mutlak Dilarang**: Menampilkan teks judul seperti "3D Banking Infrastructure", "3D Executive Profile", atau strip telemetry bertulisan judul di dalam area visual.
   - **Mutlak Dilarang**: Menaruh kartu-kartu teks overlay (*floating text cards/badges*) yang mengotori kanvas visual. Kartu visual harus fokus pada konten visual saja.
   - Wadah visual harus bersih, elegan, flat-mounted, transparan atau pure white, memberikan panggung penuh pada keindahan animasi Lottie multi-layer berkualitas tinggi tanpa distorsi elemen teks.
`;

  if (!sysInst.includes('Fokus Murni Visual (Zero Visual Title')) {
    // Insert after rule 8 or 9
    sysInst = sysInst.replace(
      '9. **Dominan Visual 3D & Lottie Engine Kontekstual',
      visualRule.trim() + '\n\n10. **Dominan Visual 3D & Lottie Engine Kontekstual'
    );
    fs.writeFileSync(sysInstPath, sysInst, 'utf8');
    console.log('✓ SYSTEM-INSTRUCTION.md updated with Pure Visual Focus rule.');
  } else {
    console.log('• SYSTEM-INSTRUCTION.md already contains Pure Visual Focus rule.');
  }
}

// 2. Update prompt-visualisasi.md
const promptVisPath = path.join(__dirname, '../prompt-visualisasi.md');
if (fs.existsSync(promptVisPath)) {
  let promptVis = fs.readFileSync(promptVisPath, 'utf8');
  
  const rule7 = `> 7. **ZERO VISUAL TITLE & ZERO TEXT CARDS (PURE VISUAL FOCUS)**:
>    - Mutlak dilarang menampilkan teks judul seperti "3D Banking Infrastructure", "3D Executive Profile", atau strip judul apa pun di dalam area visual.
>    - Mutlak dilarang menyematkan kartu-kartu teks (*text cards*) atau badges berteks di dalam wadah visual Lottie.
>    - Area visual dan kartu visual didedikasikan 100% murni untuk visual grafis, animasi Lottie multi-layer yang hidup, dan estetika presentasi tanpa distraksi teks.\n`;

  if (!promptVis.includes('ZERO VISUAL TITLE & ZERO TEXT CARDS')) {
    promptVis = promptVis.replace(
      '> 6. **ZERO TOP META STRIP**:\n>    - Dilarang menampilkan strip koordinat GPS, regional hub, atau label kandidasi di bagian atas halaman slide.\n',
      `> 6. **ZERO TOP META STRIP**:\n>    - Dilarang menampilkan strip koordinat GPS, regional hub, atau label kandidasi di bagian atas halaman slide.\n${rule7}`
    );
    fs.writeFileSync(promptVisPath, promptVis, 'utf8');
    console.log('✓ prompt-visualisasi.md updated with rule 7 Pure Visual Focus.');
  } else {
    console.log('• prompt-visualisasi.md already updated.');
  }
}

// 3. Update all prompts: prompt1.md through prompt7.md
for (let i = 1; i <= 7; i++) {
  const pPath = path.join(__dirname, `../prompt${i}.md`);
  if (fs.existsSync(pPath)) {
    let content = fs.readFileSync(pPath, 'utf8');

    // Add visual focus rule in Section 2
    if (!content.includes('Fokus Murni Visual (Zero Visual Title')) {
      content = content.replace(
        '- **Top Meta Strip**: TIDAK ADA strip koordinat, GPS, atau regional hub di atas slide.\n',
        `- **Top Meta Strip**: TIDAK ADA strip koordinat, GPS, atau regional hub di atas slide.\n- **Fokus Murni Visual (Zero Visual Title & Zero Text Cards)**: Wadah visual (Visual 3D & Lottie) mutlak tanpa teks judul (seperti '3D Banking Infrastructure', '3D Executive Profile', dsb.) dan tanpa kartu-kartu teks overlay. Area visual 100% fokus murni pada visual grafis dan animasi Lottie berkualitas tinggi.\n`
      );
    }

    // Also update Section 4 or Visual 3D description
    if (content.includes('## 4. Visual 3D & Blueprint Interaktif') && !content.includes('Fokus Visual: Murni visual tanpa teks judul')) {
      content = content.replace(
        '## 4. Visual 3D & Blueprint Interaktif (Lottie-Sample Standard)\n',
        '## 4. Visual 3D & Blueprint Interaktif (Lottie-Sample Standard)\n- **Fokus Visual**: Murni visual tanpa teks judul seperti "3D Banking Infrastructure" dan tanpa kartu-kartu teks overlay di dalam kanvas visual. Frame visual murni menampilkan estetika animasi Lottie secara elegan dan bersih.\n'
      );
    }

    fs.writeFileSync(pPath, content, 'utf8');
    console.log(`✓ prompt${i}.md updated for Pure Visual Focus.`);
  }
}

// 4. Update src/slide/01/visual-3D.tsx to be Pure Visual Focus
const slide01VisPath = path.join(__dirname, '../src/slide/01/visual-3D.tsx');
if (fs.existsSync(slide01VisPath)) {
  const slide01VisCode = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeNodeIndex?: number;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={\`relative w-full h-full flex items-center justify-center overflow-hidden select-none \${className}\`}>
      {/* Pure Visual Canvas: 100% Focused on Multi-Layer Illustrated Lottie Engine (Zero Title, Zero Text Cards) */}
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
  fs.writeFileSync(slide01VisPath, slide01VisCode, 'utf8');
  console.log('✓ src/slide/01/visual-3D.tsx updated to Pure Visual Focus.');
}

// 5. Update src/slide/02/visual-3D.tsx to be Pure Visual Focus
const slide02VisPath = path.join(__dirname, '../src/slide/02/visual-3D.tsx');
if (fs.existsSync(slide02VisPath)) {
  const slide02VisCode = `import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeHubIndex?: number;
  onSelectHub?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={\`relative w-full h-full flex items-center justify-center overflow-hidden select-none \${className}\`}>
      {/* Pure Visual Canvas: 100% Focused on Modern Cloud-Native & Banking Lottie Engine (Zero Title, Zero Text Cards) */}
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
  fs.writeFileSync(slide02VisPath, slide02VisCode, 'utf8');
  console.log('✓ src/slide/02/visual-3D.tsx updated to Pure Visual Focus.');
}

console.log('--- Batch Update Completed Successfully ---');
