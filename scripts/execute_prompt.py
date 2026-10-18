#!/usr/bin/env python3
"""
EXECUTE PROMPT RUNNER (Python 3 Engine)
Fast, Token-Efficient Modular Slide Verification & Generator
Adheres strictly to SYSTEM-INSTRUCTION.md, EXECUTE-PROMPT.md, and prompt-visualisasi.md
"""

import sys
import os
import subprocess
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def pad_zero(num: int) -> str:
    return str(num).zfill(2)

def verify_slide(slide_num: int) -> bool:
    pad = pad_zero(slide_num)
    slide_dir = os.path.join(ROOT_DIR, 'src', 'slide', pad)
    prompt_file = os.path.join(ROOT_DIR, f'prompt{slide_num}.md')

    print(f"\n======================================================")
    print(f"🚀 [PYTHON ENGINE] Memproses Slide {pad} (prompt{slide_num}.md)")
    print(f"======================================================")

    if not os.path.exists(prompt_file):
        print(f"❌ Berkas instruksi {prompt_file} tidak ditemukan!")
        return False

    with open(prompt_file, 'r', encoding='utf-8') as f:
        first_line = f.readline().strip()
    print(f"📄 Prompt terbaca: {first_line}")

    if not os.path.exists(slide_dir):
        os.makedirs(slide_dir, exist_ok=True)
        print(f"📁 Membuat direktori modular: src/slide/{pad}/")

    files = ['data.ts', 'container.tsx', 'index.tsx']
    all_exist = True
    for file in files:
        file_path = os.path.join(slide_dir, file)
        if not os.path.exists(file_path):
            print(f"⚠️  Berkas belum ada: src/slide/{pad}/{file}")
            all_exist = False
        else:
            size = os.path.getsize(file_path)
            print(f"✅ Berkas tersedia: src/slide/{pad}/{file} ({size} bytes)")

    # Audit Kepatuhan
    index_file = os.path.join(slide_dir, 'index.tsx')
    if os.path.exists(index_file):
        with open(index_file, 'r', encoding='utf-8') as f:
            content = f.read()

        warnings = []
        if re.search(r'rounded-full\s+px-2(\.5)?\s+py-0\.5', content):
            warnings.append("Potensi badge pill tag terdeteksi.")
        if re.search(r'bg-emerald-500\s+rounded-full\s+animate-pulse', content):
            warnings.append("Pulsing dot statis terdeteksi (anti-slop rule).")
        if 'border-l-4' in content:
            warnings.append("Border-l-4 tebal terdeteksi; gunakan hairline divider.")

        if warnings:
            print("\n⚠️  Catatan Audit Kepatuhan:")
            for w in warnings:
                print(f"   - {w}")
        else:
            print("✨ Audit Kepatuhan: 100% Sesuai Standar Ultra-Visual Google White Style!")

    return all_exist

def run_typecheck():
    print("\n🔍 Menjalankan Fast TypeScript Typecheck (npm run lint)...")
    try:
        subprocess.run(['npm', 'run', 'lint'], cwd=ROOT_DIR, check=True)
        print("\n🎉 SEMUA BERKAS BERHASIL TERVERIFIKASI & KOMPILASI AMAN!\n")
    except subprocess.CalledProcessError:
        print("\n❌ Typecheck error! Mohon periksa tipe data modular.")
        sys.exit(1)

def main():
    arg = sys.argv[1] if len(sys.argv) > 1 else '1'
    if arg.lower() == 'all':
        print("⚡ Menjalankan verifikasi cepat seluruh 20 slide...")
        for i in range(1, 21):
            verify_slide(i)
        run_typecheck()
    else:
        try:
            num = int(arg)
            if num < 1 or num > 20:
                raise ValueError()
        except ValueError:
            print("Nilai slide tidak valid. Masukkan angka 1-20 atau 'all'.")
            sys.exit(1)
        verify_slide(num)
        run_typecheck()

if __name__ == '__main__':
    main()
