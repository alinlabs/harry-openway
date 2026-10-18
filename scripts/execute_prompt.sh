#!/usr/bin/env bash
# EXECUTE PROMPT RUNNER (Shell Script Engine)
# Usage: ./scripts/execute_prompt.sh [1-20 | all]

set -e

SLIDE_ARG=${1:-1}
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "======================================================"
echo "🚀 [BASH ENGINE] Executing Slide Prompt via Shell..."
echo "======================================================"

if command -v node >/dev/null 2>&1; then
  node "$ROOT_DIR/scripts/execute_prompt.cjs" "$SLIDE_ARG"
elif command -v python3 >/dev/null 2>&1; then
  python3 "$ROOT_DIR/scripts/execute_prompt.py" "$SLIDE_ARG"
else
  echo "❌ Node.js atau Python 3 dibutuhkan untuk menjalankan engine script."
  exit 1
fi
