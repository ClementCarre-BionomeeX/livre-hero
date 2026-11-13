# Grimoire Clair

La police « Grimoire » du livre-jeu : un livre ancien qu'on lit sans buter.

- **Les lettres** sont celles d'Atkinson Hyperlegible (Braille Institute), dessinées pour qu'on ne les confonde pas :
  b d p q chacune différente (le q a une queue, le p un pied, le b un éperon), I à barres, l à crochet, 1 à drapeau,
  0 barré, ouvertures larges, grand œil.
- **L'allure de livre** vient de ce que `build.py` ajoute : des empattements à congé au pied des fûts, des empattements
  de tête en biseau (à gauche, comme une plume) en haut des minuscules, des barres plates au bout des diagonales, des becs
  sur E F L T Z, et un peu plus d'air entre les lettres (14/1000 de chaque côté).
- **Les lettrines** sont du CSS (`app/app.css`, police « Grimoire ») : la lettre en gras dans un cadre doré à rinceaux
  (`lettrine.svg`, recopié dans app.css).

Quatre styles : normal, gras, italique, gras italique (≈ 18 Ko chacun en woff2, accents français compris).

## Reconstruire

```sh
pip install fonttools brotli skia-pathops
sh outils/grimoire-clair/construire.sh   # écrit app/polices/GrimoireClair-*.woff2
```

## Licence

SIL Open Font License 1.1 (`OFL.txt`). Atkinson Hyperlegible est sous OFL ; une version modifiée doit porter un autre
nom, d'où « Grimoire Clair ».
