#!/bin/sh
# renders index.html into a text-based A4 pdf
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/download/VAHAN_SAHAKYAN__SR_SWE.pdf" \
  "file://$PWD/index.html"
