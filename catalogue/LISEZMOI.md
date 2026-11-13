# Catalogue partagé

Les histoires que des familles proposent aux autres. Chaque fichier `<id>.json` est une histoire complète, telle que
l'éditeur l'exporte. À chaque publication du site, `tests/site.js` vérifie chaque histoire comme un import (une
histoire refusée par le vérificateur est laissée de côté) et écrit `site/catalogue/index.json`, que la page lit.

Pour proposer une histoire : dans l'éditeur, onglet « L'histoire », bouton « Proposer cette histoire ». Le fichier
est téléchargé et la page GitHub de dépôt s'ouvre ; une fois la proposition acceptée, l'histoire apparaît dans le
catalogue de tous les sites.

Le catalogue est public. Chaque histoire indique son âge conseillé (`age`) et, si elle en a, ses thèmes adultes
(`adult.themes`) : la bibliothèque les montre avant de l'ajouter et avant de l'ouvrir.
