# Tags de scénario et garanties du moteur

Principe (Clément, 12/11) : le scénario dit des choses avec des tags, le moteur fait le reste. Un scénario bien tagué est bien joué, sans que l'auteur ait à écrire de conditions.

## Les tags

Ils se posent sur un paragraphe de `text`, sur un choix, ou sur un passage entier (sauf `first`, `again`, `once`).

| Tag | Sens | Exemple |
|---|---|---|
| `with: "id"` ou `["a", "b"]` | Ces compagnons sont là | `{ with: "sidonie", text: "Sidonie mesure la paroi des yeux." }` |
| `without: "id"` | Ce compagnon n'est pas là | `{ with: "linette", without: "pie", text: "…" }` |
| `with: "any"` / `without: "any"` | Le héros est accompagné / il est seul | `{ without: "any", text: "Personne pour te voir faire." }` |
| `when: "day"` ou `"night"` | Le jour, ou la nuit | `{ when: "night", text: "Dans la fente, trois étoiles." }` |
| `after: "tag"` | Cet événement a eu lieu : un drapeau posé, ou un passage déjà lu (son identifiant) | `{ after: "ilse:sauvee", text: "…" }` |
| `before: "tag"` | Il n'a pas encore eu lieu | `{ before: "pal:plan", text: "…" }` |
| `first: true` | Première visite du passage | texte d'arrivée |
| `again: true` | Visites suivantes | texte de retour |
| `outcome: "win"`, `"lose"`, `"flee"`, `"calm"` | On arrive ici par un jet réussi ou raté, une victoire, une défaite, une fuite, un apaisement | `{ outcome: "lose", text: "Tu boites encore." }` |
| `takes: "evening"`, `"night"`, `"morning"`, `"day"`, `"noon"` ou un nombre d'heures (sur un passage) | La scène fait passer le temps : l'horloge avance jusque-là, le bouton qui y mène l'annonce (« le temps passe : jusqu'au soir ») et la page le dit entre parenthèses | `takes: "night"` sur une veillée |
| `back: true` (sur un passage) | Le moteur ajoute le retour au dernier carrefour, avec son nom | une scène annexe |
| `back: "PASSAGE"` (sur un choix, à la place de `to`) | Retour vers un passage où l'on était déjà : le moteur écrit « Revenir : <nom> ». Un libellé d'auteur n'est gardé que s'il dit plus que le retour, et le bouton montre alors « → <nom> ». `back: true` = le dernier carrefour visité | `{ back: "PI_ville" }` |
| `backName: "…"` (sur un passage) | Le nom à afficher quand on y revient, si le titre est un moment (« Le soir ») plutôt qu'un lieu | `backName: "la table de l'Ancre"` |
| `refuse: true` (sur un choix) | Refuser la quête en cours : le bouton porte « refus définitif », le journal la note refusée, on n'y revient pas | `{ label: "Je n'ai pas le temps", refuse: true, to: "PLACE" }` |
| `once: true` | Dit pendant une seule visite (un indice ne se répète pas) ; sur un choix : il disparaît une fois pris | |

Sur un passage entier, `with`, `without`, `when`, `after` et `before` sont la distribution de la scène : le moteur ne propose aucun choix qui y mène tant qu'elle n'est pas réunie.

Tout paragraphe sous condition ou sous tag accepte `else: "…"`, le texte donné quand la condition ne tient pas : c'est la façon sûre de ne perdre aucune information.

Les aides d'un jet (`test.help`) lisent les mêmes tags : `{ with: "corbe", v: 10 }`.

`if` et `hide` restent disponibles pour les cas que les tags ne couvrent pas.

## Ce que le moteur garantit seul

- La destination s'affiche sur le bouton (« → Lieu ») pour toute route et pour tout choix d'un carrefour (`hub` ou `routes`) qui change de lieu. Dans une scène, rien n'est affiché, pour ne pas éventer la suite.
- Une page n'est jamais vide : à défaut de texte, la description du lieu.
- Deux boutons portant le même texte ne s'affichent jamais ensemble.
- Il reste toujours un choix possible (hors parties à plusieurs, où l'attente est voulue).
- Un choix qui coûte de l'or (`fx.gold` négatif) ou donne un objet (`fx.drop`) est grisé si on ne l'a pas, dès qu'une autre issue existe. Un objet compte comme présent s'il est dans le sac du héros ou dans celui d'un autre héros qui marche avec lui ; c'est de ce sac qu'il sort.
- Un choix mène toujours quelque part.

Chaque fois que le moteur rattrape une faute d'écriture, il la note (`s.guards`), et `node tests/build.js` la liste : « § passage : … (rattrapé par le moteur) ». C'est cette liste qu'il faut lire, pas le nombre de parties finies.

## Quêtes, réputation, monnaie (12/11)

- Une quête quittée en cours de route reste proposée à son carrefour tant qu'elle n'est ni finie, ni refusée, ni manquée, même si le choix porte `hide: { seen: … }` ; la page dit « (Tu reprends : …) ».
- Une quête est **manquée** quand son acte est passé, ou quand sa condition `closes` (déclarée dans la quête) est vraie. Le journal la note, un message le dit une fois.
- `conf` et `fear` changent aussi pour un compagnon absent, sans rien afficher ; à son retour il dit un mot (texte par défaut, ou `rep: { up, down, fearUp, fearDown }` sur le compagnon, `{n}` = son nom). Un compagnon jamais rencontré garde ce qu'il a entendu jusqu'à la rencontre.
- L'or se compte dans une seule unité ; `world.money = { units: [{ name, plural, value, short }] }` dit comment l'histoire l'affiche (les Cendres : 1 écu = 20 sous).
- Une page déjà lue et sans texte de retour (`first`, `again`, `once`) se replie : « Tu connais déjà cette page. Relire ».

Règle (Clément, 12/11) : **aucun retour écrit à la main**. Tout choix qui ramène à un passage déjà traversé s'écrit avec `back`.

## Ce que le moteur ne peut pas deviner

Qu'un paragraphe sans tag suppose un compagnon présent, une heure, ou un événement passé. La règle d'écriture : dès qu'un paragraphe fait agir un compagnon, parle du soleil ou de la nuit dans un lieu où l'on revient, ou s'appuie sur un événement facultatif, il porte le tag correspondant.

## Outils d'auteur

- `node tests/build.js` : construit, valide, liste ce que le moteur a rattrapé.
- `node tests/graphe.js` : écrit `dist/graphe.html`, le graphe de chaque scénario (passages, flèches typées selon les tags).
- `node tests/quetes-ouvertes.js <id>` : liste les quêtes dont l'entrée se ferme après une première visite alors qu'on peut en ressortir sans l'avoir finie.
- `node tests/tags-test.js` : vérifie les tags sur une histoire minuscule.

## Habillage, ambiance, hauts faits, fins (12/11)

| Où | Clé | Sens |
|---|---|---|
| histoire | `skin: "parchemin"` | L'habillage du livre : `parchemin`, `givre`, `sable`, `enluminure` (sans clé : sobre). Le lecteur peut le remplacer dans ses réglages. |
| lieu, région, route ou passage | `ambiance: "foret"` | Le son et la vignette du moment : `foret`, `ville`, `village`, `montagne`, `neige`, `souterrain`, `eau`, `route`, `chateau`, `temple`, `champs`, `mer`. Le moteur met de lui-même `combat` pendant un combat et `route` en voyage. |
| histoire | `achievements: { id: { title, desc, if } }` | Hauts faits propres à l'histoire (une condition JSON). Cachés au lecteur tant qu'il ne les a pas. Le moteur en a huit pour toutes les histoires (victoires, critique, jet ouvert, acte complet, loyauté, voyageur, limier). |
| histoire | `endings: { id: { title } }` | Titres des fins, si besoin. Sinon : une marque `fin:<id>` posée par le passage de la fin prend le titre de ce passage ; sans marque `fin:`, chaque passage `end` est une fin. |

La difficulté (Conteur, Aventurier, Héroïque) se choisit à la création ; le moteur ajuste les jets du héros et les adversaires, l'histoire n'a rien à déclarer.

## Outils d'auteur ajoutés (12/11)

- `node tests/verif.js <id> [tag|indice|objet|compagnon]` : la lecture stricte (tags posés jamais relus, indices et objets que rien ne donne, compagnon qui agit sans `with`). `tests/build.js` en donne le compte.
- `node tests/page-seule.js` : réécrit `dist/index.html` sans le long test des chemins.
- Dans l'appli, « Atelier d'auteur » : essayer n'importe quel passage, l'éditeur d'histoires, les signalements des lecteurs (collection `signalements` de la page).

## Lecture et jeunes lecteurs (12/11, 2e série)
- `glossary` (histoire) : `{ "forme|forme2": "définition" }`. Les mots rares sont soulignés de pointillés à leur première apparition sur une page ; un appui ouvre la définition. Les histoires fournies partagent `histoires/src/glossaire.js` (environ 200 mots) ; une histoire peut en ajouter. Définitions purement lexicales, sans rien de l'intrigue.
- `nudge` (passage) : la phrase du « coup de pouce » pour ce passage. Sans elle, le moteur (`M.nudgeOf`) oriente seul : choix vers des pages pas encore lues (marqués ✦), techniques en combat, ou carnet. Option des réglages, désactivée par défaut, deux fois par acte.
- `desc` (adversaire) : une phrase pour le bestiaire. Le moteur note les adversaires rencontrés (`s.beasts`) ; lieux connus et objets eus complètent l'atlas, gardés par lecteur sur toutes ses parties.
- `kid` (histoire) : posé par l'atelier des jeunes auteurs (`{ author, profil }`).
- Lecture à voix haute : phrase par phrase (surlignée), paroles entre « » lues par une seconde voix si l'option est cochée. Règle de lecture en option.

## Portraits et blasons (13/11, 3e série)

- Les héros et compagnons ont un portrait dessiné par l'appli (buste, marque de la classe, couleurs tirées du nom). `f: true` sur un compagnon donne un portrait féminin ; rien d'autre à déclarer.
- Chaque faction a un blason tiré de son identifiant. Pour imposer le sien : `blasons: { <faction>: { field: "azur", other: "or", division: "parti", charge: "tour", chargeT: "argent" } }` au niveau de l'histoire. Émaux : or, argent, gueules, azur, sinople, sable, pourpre. Partitions : plein, parti, coupe, bande, ecartele, chevron, chef. Meubles : etoile, besant, croix, croissant, tour, cle, montagne, plume.
- Les mots du glossaire ouverts par un lecteur vont dans son carnet de mots (onglet Mots) et nourrissent le jeu des mots : une bonne définition sert deux fois.

## Combat, route et bestiaire (13/11, 4e série)

- Plan de bataille, bruitages, voyage animé, fin d'acte illustrée : rien à déclarer, le moteur garde les coups de chaque passe (`combat.hits`) et l'appli suit la route et les actes.
- Cartes du bestiaire : la silhouette est devinée d'après le nom de l'adversaire ; pour l'imposer, `look` sur l'ennemi (`loup`, `rat`, `ombre`, `humain`, `serpent`, `araignee`, `oiseau`, `ours`). Le conseil de la carte vient seulement de ses règles (`ranged`, `flank`, défense, vie, attaque), jamais de l'histoire. `desc` s'affiche sur la carte.
