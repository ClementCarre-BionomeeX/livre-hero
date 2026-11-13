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

## Thème adulte (13/11)

- `adult: { themes: ["Meurtre et violence", "Manipulation psychologique", …] }` (histoire) : la carte de la bibliothèque porte un grand bandeau « Thème adulte ». « Nouvelle partie » (ou « Jouer à plusieurs ») ouvre d'abord un avertissement qui liste ces thèmes, avec « J'ai compris » pour continuer et un gros bouton rouge « Revenir à la bibliothèque ». Le validateur refuse une liste vide.

## Portraits des gens, brouillard, chemin, musique (13/11)

- `people.<id>.f` : `true` pour une femme, `false` pour un homme. Sans lui, le moteur devine d'après le titre (Mère, Dame, Sire, Frère…) ou le « elle / il » de la description ; un portrait apparaît alors à côté du nom dans l'onglet Gens.
- La carte du carnet est sous le brouillard : elle se dégage autour des lieux connus et le long des routes parcourues. Rien à déclarer ; le lecteur peut l'enlever dans ses réglages.
- « Le chemin dans le livre » (onglet Frise) dessine l'arbre des pages lues, acte par acte (`act` des passages), et un rond gris sans titre pour chaque chemin offert mais jamais pris. Les liens de retour (`back`) ne comptent pas.
- La petite musique (option du lecteur) prend un air par région (`region` du lieu), sinon par `ambiance`, et un air de combat. Rien à déclarer.

## Visages : âge, traits, marques (13/11)

Tout personnage (`people`, `companions`, `heroes`) peut déclarer son visage avec `face` ; ce qui n'est pas déclaré reste tiré du nom. Le validateur refuse tout mot hors de ces listes (`Moteur.FACE`).

```js
anseau: { name: "Anseau", face: { age: "ancien", marks: ["balafre", "lunettes"] }, desc: "…" }
```

- `age` : `enfant`, `jeune`, `adulte`, `mur`, `ancien`. Sans `hair`, les cheveux grisonnent (`mur`) ou blanchissent (`ancien`) tout seuls.
- `skin` : `porcelaine`, `clair`, `ivoire`, `beige`, `dore`, `hale`, `cuivre`, `brun`, `acajou`, `ebene` (ou `#rrggbb`).
- `hair` : `noir`, `brun`, `chatain`, `noisette`, `roux`, `cuivre`, `blond`, `platine`, `gris`, `blanc`, `acajou` ; `iris` : `noir`, `brun`, `noisette`, `vert`, `bleu`, `gris`, `clair`.
- `eyes` : `amande`, `ronds`, `brides`, `tombants`, `lourds` ; `nose` : `fin`, `large`, `busque`, `retrousse` ; `lips` : `fines`, `pleines` ; `shape` : `ovale`, `rond`, `carre`, `allonge`.
- `coif` : `court`, `milong`, `long`, `boucles`, `crepus`, `tresses`, `locks`, `chignon`, `degarni`, `couronne`, `rase`, `foulard`, `turban`, `capuche` ; `beard` : `sans`, `moustache`, `barbe`, `longue`.
- `marks` (liste) : `rousseur`, `grain`, `vitiligo`, `tache` (de naissance), `cicatrice`, `balafre`, `brulure`, `bandeau`, `oeil_voile`, `aveugle`, `vairons`, `lunettes`, `appareil` (auditif), `tatouage`.
- Les blessures du moment ne se déclarent pas : le moteur les dessine d'après les points de vie (une ecchymose sous la moitié, un bandage sous le quart) et les efface à la guérison, pour le héros comme pour les compagnons.
- Le lecteur compose son propre visage avec les mêmes mots à la création du héros (`s.face`).

## Sixième série (13/11) : taverne, scènes pressantes, regards, mystères résolus

| Où | Clé | Sens |
|---|---|---|
| passage | `taverne: { mise: 2, adversaire: "un muletier" }` | Une table de jeu, « la Chandelle » : le moteur ajoute « S'asseoir à la table de Chandelle · mise … ». On lance un dé à six faces autant qu'on veut et on additionne ; un 1 éteint la chandelle. L'adversaire joue d'abord. La mise sort de la bourse en s'asseyant, une victoire la rend doublée, une égalité la rend. Trois parties par jour au plus. Écrire `adversaire` sans article majuscule (« un marinier »). |
| passage | `urgent: 25` | Scène pressante : le lecteur a ce nombre de secondes (5 à 120) pour choisir, à la première lecture seulement. Le lecteur peut couper le minuteur dans ses réglages. |
| choix | `timeout: true` | Dans une scène `urgent`, le choix pris quand le temps est écoulé. Obligatoire (le validateur le demande ; sans lui, le moteur prend le dernier choix et le note comme faute). |
| effet | `regard: { hesna: "mefiant" }` | Ce qu'une personne (people ou companions) pense désormais du héros. Rien n'est dit sur la page ; l'onglet Gens l'affiche (option du lecteur). Mots : `hostile`, `mefiant`, `distant`, `neutre`, `curieux`, `cordial`, `allie`, `redevable`, `craintif`, `admiratif`, `trahi`, `rancunier`. |
| mystère | `solved: "drapeau"` | Le drapeau (ou le passage lu) qui marque le moment où l'histoire a donné la réponse. Avant, l'onglet Soupçons ne juge rien. |
| mystère | `answer: { person: "aurele", text: "Aurèle, ton frère." }` | La réponse, montrée une fois `solved` atteint. Avec `person`, chaque soupçon qui nommait quelqu'un est marqué juste ou faux, et le carnet dit depuis quand le lecteur avait vu juste. |

Rien à déclarer pour : « Sans retour » (choisi à la création), le tableau d'enquête, la recherche dans le carnet, le clavier, « Comparer en famille » (l'appli garde le choix fait à chaque page, par sa place parmi les choix du passage : réordonner les choix d'un passage fausse la comparaison des parties déjà finies).

## Septième série (13/11)

- **Ennemi `fearless: true`** : cet adversaire ne fuit jamais. Sans ce tag, un adversaire gravement blessé, ou dont la bande est à moitié tombée, peut prendre la fuite. Le dernier debout ne fuit jamais, pour que le texte de victoire reste vrai. Une fuite compte comme un adversaire hors de combat.
- **Récit du combat** : à la fin de chaque combat, le moteur écrit quelques lignes (événement `tale`). L'auteur n'a rien à faire.
- **Conséquences muettes** : les changements de confiance et de crainte d'un compagnon portent la marque `conseq`, et le lecteur peut les masquer dans ses Réglages. Ne pas compter sur ces lignes pour faire passer une information au lecteur.
- **Jetons de destin** : en mode « Sans retour », trois relances par acte pour un jet raté. Ils sont gérés par l'appli et l'auteur n'a rien à faire.
- **Histoire `cover: { motif, color }`** : la couverture dessinée dans la bibliothèque. Motifs possibles : `dedale`, `flocon`, `sceau`, `oeil`, `vanne`, `ecu`, `etoile` (le motif par défaut). `color` est la couleur de la toile, par exemple `"#4f3a22"`.
- **Gravures, plans de ville, thème musical par lieu, voix des personnages** : le moteur s'en charge à partir de ce qui existe déjà (ambiance du lieu, passages vus dans un lieu, région, `name` des gens et des compagnons). La voix d'un personnage est retrouvée quand son nom figure dans le même paragraphe que ses paroles.

## Outils d'auteur (7.5)

- `author: "…"` et `age: 10` (au niveau de l'histoire) : l'auteur et l'âge conseillé, montrés dans la bibliothèque et
  le catalogue partagé. Les thèmes adultes restent dans `adult: { themes: [...] }`.
- `back: true` sans libellé est accepté par le vérificateur : le moteur écrit « Revenir : … » vers le dernier
  carrefour. Le vérificateur prépare désormais l'histoire comme le jeu (les `back: "passage"` reçoivent destination et
  libellé), si bien qu'une histoire écrite dans l'éditeur ou importée se vérifie comme une histoire fournie.
- `node tests/relecture.js [id] [--all]` : la relecture de style (phrases de plus de 40 mots, mot de 7 lettres ou plus
  répété à moins de 15 mots, paragraphes de plus de 180 mots, mots longs employés une seule fois, espaces et
  guillemets à la française, choix de plus de 90 signes). Mêmes règles que l'onglet « Relecture » de l'éditeur.
- `catalogue/<id>.json` : une histoire proposée au catalogue partagé ; `tests/site.js` la vérifie et l'ajoute à
  `site/catalogue/index.json`.
