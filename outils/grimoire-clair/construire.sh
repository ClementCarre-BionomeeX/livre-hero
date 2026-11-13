#!/bin/sh
# Rebuilds app/polices/GrimoireClair-*.woff2 from Atkinson Hyperlegible (SIL OFL 1.1).
# Needs: python3, pip install fonttools brotli skia-pathops
set -e
cd "$(dirname "$0")"
mkdir -p .sources
B=https://raw.githubusercontent.com/google/fonts/main/ofl/atkinsonhyperlegible
for st in Regular Bold Italic BoldItalic; do
  [ -f .sources/$st.ttf ] || curl -sSL -o .sources/$st.ttf $B/AtkinsonHyperlegible-$st.ttf
  name=$st; [ $st = BoldItalic ] && name="Bold Italic"
  python3 build.py .sources/$st.ttf .sources/GrimoireClair-$st.ttf "$name"
  python3 -c "from fontTools.ttLib import TTFont; t = TTFont('.sources/GrimoireClair-$st.ttf'); t.flavor = 'woff2'; t.save('../../app/polices/GrimoireClair-$st.woff2')"
done
