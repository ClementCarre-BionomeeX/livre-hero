# Romans à lire : du texte brut aux pages du livre

Outils qui ont servi à faire entrer les romans de H. G. Wells (16/11/2026) dans la bibliothèque, en lecture
(`lecture: true`, comme « Le Monde perdu »).

1. Nettoyer la source en une liste de chapitres et de paragraphes :
   `gdm.py` (Gutenberg n° 60656, traduction Davray : retire les légendes des gravures, recolle les paragraphes coupés),
   `gut.py` (texte brut d'un miroir Gutenberg dont les chapitres s'ouvrent sur « CHAPITRE N. » : Dumas…), `hi.py` (export Wikisource de la traduction d'Achille Laurent), `elg.py` (exports TEI d'Ebooks libres et gratuits
   sans `<label>` de chapitre : Verne, Dumas… ; notes de l'auteur remises à leur appel, images marquées `[FIGURE]`). `typo.py` aligne la typographie sur les autres livres.
2. `split.py chapitres.json pages.json 750` : découpe chaque chapitre en pages d'environ 750 mots, aux limites de
   paragraphe, et imprime le début et la fin de chaque page pour écrire les titres.
3. `livre.py fiche.py pages.json histoires/src/<id>` : écrit le livre (base, chapitres, résumés, gens, lieux, mots,
   pages). La fiche donne les titres des pages, leurs lieux, les gens (aka, qui, aspect, face) et les mots ; `fx.meet`
   est posé seul à la première page où un nom de la personne apparaît.

Sources : les sites de textes (Wikisource, Gutenberg, Gallica) sont fermés depuis les conteneurs ; Gutenberg passe par
les miroirs GitHub (GITenberg, orkeilius/gutenberg_fr_mirror), Wikisource par des exports déposés sur GitHub.

Un livre dont le texte demande des retouches (images à remplacer, grilles) a un script `fiches/<id>_texte.py` qui passe
entre l'extraction et `split.py` (ex. `centre_texte.py` pour les runes de « Voyage au centre de la Terre »).
