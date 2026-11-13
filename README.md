# Livre-jeu

Des romans dont tu tiens la plume : un moteur de livre dont vous êtes le héros (règles RMU simplifiées, voyages,
combats, compagnons, carnet) et ses histoires, jouables en ligne ou sans réseau.

## Jouer

- **Appli installable** : ouvrir la page GitHub Pages du dépôt une fois avec du réseau, puis « Ajouter à l'écran
  d'accueil » (Safari sur iPad/iPhone : bouton Partager ; Chrome sur Android : menu ⋮). Elle s'ouvre ensuite sans réseau.
- **Fichier seul** : `site/livre-jeu-complet.html` (produit par `node tests/site.js`, aussi en ligne à côté du site)
  s'ouvre directement dans un navigateur d'ordinateur, sans rien d'autre. `site/index.html`, lui, lit les livres à côté
  de lui (`site/histoires/`) : il démarre plus vite, mais a besoin d'être servi (GitHub Pages, ou l'appli installée).
- **Sur claude.ai** : la page `dist/index.html` (produite par `node tests/build.js`) est publiée comme artefact.

Les sauvegardes restent dans l'appareil (le navigateur) pour la version hors ligne, et dans claude.ai pour l'artefact.
La section « Sauvegardes » de la bibliothèque exporte tout dans un fichier et le réimporte ailleurs ; la partie la plus
récente l'emporte.

## Organisation

| Dossier | Contenu |
| --- | --- |
| `src/` | le moteur (`moteur.js`), le jeu à plusieurs (`multi.js`), le validateur des histoires (`validateur.js`) |
| `app/` | l'interface (`app.js`, `app.css`), les polices et les icônes de l'appli installable |
| `histoires/src/<id>/` | les sources des histoires ; `histoires/<id>.json` en est la version construite |
| `tests/` | construction (`build.js`, `site.js`, `page.js`) et tests |
| `outils/grimoire-clair/` | la police « Grimoire Clair » (Atkinson Hyperlegible + empattements de livre) et son script de fabrication |

## Construire

```sh
node tests/build.js      # construit et valide les histoires, écrit histoires/*.json et dist/index.html
node tests/site.js       # écrit site/ : la version hors ligne (à partir de histoires/*.json)
```

Chaque push sur `main` republie la version hors ligne sur GitHub Pages (`.github/workflows/pages.yml`).

Essais visuels : `node tests/captures.js site/index.html captures/apres` photographie les écrans principaux (téléphone
et tablette) ; `node tests/captures.js --compare captures/avant captures/apres captures/comparaison` les compare. Sur
chaque pull request, `.github/workflows/captures.yml` fait les deux versions sur la même machine et met le rapport
dans le résumé du run (images dans l'artefact « captures »).
