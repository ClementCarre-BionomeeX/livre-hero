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

## Le Sceau de Malvoran (13/11)

- `repeatChance: 0.4` sur une région : une route déjà parcourue se refait vite, sans événement ; avec ce tag, les événements de la région pas encore vus peuvent encore venir aux voyages suivants (utile quand le premier voyage est entièrement écrit en étapes).
- `relicLose: "anneau"` : retire cette relique-là (un vol), au lieu d'une relique au hasard.
- `set: { cle: "valeur" }` : pose le drapeau `cle=valeur` (comme `flag: "cle=valeur"`).
- Les branches `win`, `lose`, `flee`, `calm` d'un jet ou d'un combat acceptent `back: "PASSAGE"` comme un choix.
- En mode « tout jouer », la quête principale de l'acte ne retient plus la sortie (elle se finit souvent après) : seules les quêtes annexes la retiennent. Une quête annexe qui peut devenir impossible doit déclarer `closes`.
- Une histoire sans héros prédéfinis demande au lecteur, à la création, si le livre lui parle au masculin ou au féminin ; le texte s'accorde avec `{e}`.

## Une soirée (13/11, 7.8) : le chemin et la seconde lecture

| Où | Clé | Sens |
|---|---|---|
| choix (ou branche `win` / `lose` d'un jet ou d'un combat) | `via: "fuite"` | Le chemin que ce choix donne à la page où il mène. Ce n'est pas une condition du choix. |
| paragraphe, choix | `via: "fuite"` ou `["fuite", "PASSAGE"]` | Montré si l'on est arrivé ici par un choix portant ce `via`, ou en venant de ce passage (un combat ou une route entre les deux ne compte pas). Le validateur refuse un `via` qu'aucun choix ne donne et qui n'est pas un passage. |
| condition | `{ via: "fuite" }` | La même chose dans un `if` ou un `hide` (pour un choix qui dépend du chemin pris). |
| paragraphe, choix, passage | `second: true` | Seconde lecture : seulement si le lecteur a déjà trouvé une fin de cette histoire, dans une partie précédente. `second: "gue"` : seulement après cette fin-là. Un paragraphe de seconde lecture porte un ✧ discret dans la marge. Sur un passage, c'est la distribution de la scène : aucun choix n'y mène en première lecture. |
| condition | `{ second: true }` | La même chose dans un `if`. |
| passage | `takes: "midnight"` | La scène mène jusqu'à minuit (« Minuit sonne. »). Pour avancer l'horloge sans rien écrire : `fx: { until: 0 }`. |
| `world.start` | `hour: 17` | L'heure à laquelle commence l'histoire (8 h sans elle). |

Le moteur accorde désormais les boutons comme le texte : `{e}` dans un libellé de choix ou de jet devient « e » au féminin.
L'appli sait quelles fins chaque lecteur a trouvées ; elle le dit au moteur au début d'une partie (`s.second`). Le validateur
joue deux parties sur cinq en seconde lecture.

## Enquête en ville (14/11, 7.9) : témoins, contradictions, accusation

| Où | Clé | Sens |
|---|---|---|
| `people.<id>` | `at: [{ when, place, talk, see, label, if, from, until, takes }]` | Les heures et les lieux d'un personnage. `when` : `matin` (6-12 h), `midi` (12-14 h), `apresmidi` (14-18 h), `soir` (18-21 h), `nuit` (21-6 h), ou une liste ; sans `when`, à toute heure. Sur un carrefour (`hub`) de ce lieu, le moteur ajoute la phrase `see` et un choix vers `talk` (libellé `label`), qui prend une heure (`takes: 0` pour aucune) et vaut rencontre. `from` / `until` : `{ day, hour }`. |
| `people.<id>` | `confront: { <indice ou document>: "PASSAGE" }`, `shrug: ["…"]` | Ce que fait le témoin quand on lui montre cet indice : la page de sa réaction. Sinon il hausse les épaules (une des phrases `shrug`). |
| passage | `montrer: "<id>"` | Ajoute « Montrer quelque chose à … » : le lecteur choisit un indice ou un document pas encore montré à cette personne. |
| passage | `back: true` | La scène se termine par le retour au dernier carrefour, écrit par le moteur ; elle peut n'avoir aucun autre choix. |
| `story.contradictions` | `[{ a, b, clue, fx }]` | Deux indices (ou documents) qui se contredisent vraiment. Quand le lecteur les relie (carnet, tableau), le moteur donne l'indice `clue`. Une mauvaise paire ne coûte rien. |
| indice | `fades: { day, hour }` | L'indice s'efface à ce moment (pluie, enterrement, départ) s'il n'a pas été trouvé avant. |
| paragraphe, choix | `fresh: "<indice>"` | Montré tant que l'indice peut encore être trouvé. Sur un choix qui prend du temps, le moteur regarde à l'heure où le choix finit. |
| indice | `leurre: true` | Fausse piste : ne compte jamais comme preuve ni pour « Fin limier » ; l'appli la marque une fois le mystère résolu. |
| objet | `kind: "document", text, form, hand, clue` | Un document qu'on relit dans l'onglet Documents (`form` : `lettre`, `registre`, `acte`, `billet` ; `hand` : `soignee`, `hative`, `tremblee`, `imprimee`). `clue` : l'indice qu'il porte ; on le montre et on le donne en preuve par cet indice, sur une seule ligne. |
| `story.rumors` | `{ <salle>: [{ id, text, true, fx, if }] }` | Les rumeurs d'une salle ; `true` dit si elle est vraie (l'appli le montre après coup). |
| passage | `rumeur: "<salle>"` | Une rumeur pas encore entendue est ajoutée au texte à chaque visite. |
| `story.deadline` | `{ day, hour, to, acts }` | À cette heure, la page suivante est `to`, quoi qu'on fasse (drapeau `echeance`) ; l'horloge s'arrête sur l'heure dite. |
| mystère | `suspects, motives, answer: { person, motive, proofs }, accuseText, plan` | L'accusation : les suspects (seuls ceux rencontrés sont proposés), les mobiles, la bonne réponse. `plan: { hours, places, people, truth }` remplit l'onglet Reconstitution. |
| passage | `accuse: { mystery, to, label }` | Ajoute l'accusation en trois temps. Le moteur pose `accuse-<m>-qui=…`, `-mobile=…`, `-preuve=…` et, pour chaque partie juste, `accuse:<m>:qui`, `:mobile`, `:preuve`, puis va à `to` (une liste `{ if, to }`). |
| paragraphe, choix | `regard: { <id>: "cordial" }` | Selon la façon dont la personne voit le héros (`neutre` tant que rien ne l'a changée). |
| `world.start` | `clock: true` | L'heure s'affiche à l'heure près (« Jour 2, 15 h (après-midi) »). |

Le validateur vérifie les horaires, les réactions, les rumeurs, les contradictions, l'échéance et l'accusation (la
réponse doit être parmi les suspects et les mobiles, les preuves doivent exister et ne pas être des leurres), et sa
recherche des passages jamais atteints sait montrer, relier et accuser.

## Le siège (14/11, 8.0) : réserves, monde en marche, dettes, conseils, camps, liens, batailles

| Où | Clé | Sens |
|---|---|---|
| `story.stocks` | `{ <id>: { name, short, unit, plural, start, max, pill, bad, by, eat, byLabel, extra, spoil, desc } }` | Les réserves de la ville (blé, moral, maladie). Chaque nouveau jour, le moteur retire `eat` (un nombre, ou `{ <valeur>: n }` selon l'état `by`, par exemple la ration en vigueur), plus chaque `extra: [{ if, n }]` qui tient. `spoil: { every, share, if }` : une part qui pourrit tous les `every` jours. `pill` : affichée en haut de l'écran. `bad` : une jauge qui fait du mal en montant. |
| condition | `stock: "<id>", min, max` · `days: "<id>", min, max` | La réserve, ou le nombre de jours qu'elle durera au train actuel. |
| `story.march` | `[{ id, at: { day, hour }, until, if, acts, fx, say, title, to }]` | Le monde avance sans le héros : à l'heure dite (et si `if` tient), le moteur pose `marche:<id>`, applique `fx`, écrit `say` dans le fil, et impose la scène `to` (seulement dans les actes `acts`). Le temps d'un choix s'arrête sur l'heure de la scène. Sans `at`, l'événement arrive dès que `if` tient. |
| quête | `due: { day, hour }` | Passé ce moment, la quête est manquée. |
| boutique | `scarce: "<stock>"`, `moves: [{ if, x, say }]`, `sells: [{ item, price, if }]` | Les prix suivent la rareté de la réserve, et chaque `move` qui tient les multiplie par `x` (sa phrase `say` s'affiche). |
| `story.promises` | `{ <id>: { to, text, kind, due, gold, stock, keeps, breaks, collect, kept, broken } }` | Une promesse ou une dette (`kind: "dette"`, `gold` à rendre). `keeps` / `breaks` : conditions qui la tiennent ou la rompent ; à `due`, elle est rompue si elle court encore, et le créancier vient (scène `collect`). `kept` / `broken` : le regard de la personne ensuite. On rembourse là où est le créancier. |
| fx | `promise`, `keep`, `break`, `forgive` | Faire, tenir, rompre une promesse, ou en être délié. |
| condition | `promise: "<id>", is: "en cours" \| "tenue" \| "rompue"` | |
| `story.councils`, `story.motions` | `{ <conseil>: { title, hero, order, members: { <personne>: { absent } } } }`, `{ <motion>: { council, title, text, shown, lean, say, heroSay, fx: { adopte, rejete } } }` | Un conseil et ses motions. `lean` : le vote de chacun (`pour`, `contre`, `abstention`, `indecis` tiré au sort). |
| passage | `council: { motion, to, label }` | Ouvre le vote : chaque membre présent vote dans l'ordre, puis le héros. Le moteur pose `vote:<m>` et `vote-<m>=adopte\|rejete`, applique `fx`, puis va à `to`. |
| fx | `sway: { <motion>: { <membre>: "pour" } }`, `sound: { <motion>: [membres] }` | Faire changer un vote ; apprendre comment quelqu'un votera (onglet Conseil). |
| condition | `vote: "<m>", is: "adopte" \| "rejete"`, `hero: "pour"` · `lean: { member, is }` | |
| `story.camps` | `{ <id>: { name, leader, rivals, desc } }` | Les camps. `fx: { camp: "<id>" }` y range le héros (`camp:<id>`) ; le chef d'un camp quitté le voit trahi. Un paragraphe ou un choix `camp: "<id>"` se ferme quand le héros a rejoint un rival. Condition `camp: "<id>"` (ou `"none"`). |
| `story.ties` | `[{ id, a, b, kind, label, if }]` | Qui est avec qui (`sert`, `allie`, `dette`, `secret`, `ennemi`…). `fx: { tie: "<id>" }` le fait découvrir ; l'onglet « Qui est avec qui » le dessine. |
| `story.battles` | `{ <id>: { title, intro, posts: [{ id, name, def, key, if, lost }], troops: [{ id, name, force, if, desc }], waves: [{ text, hits }], orders: [{ id, label, post, def, once, if }], maxLost, win: { to, fx }, lose: { to, fx } } }` | Une bataille rangée. Le lecteur place ses troupes et lui-même sur les postes, puis donne un ordre à chaque vague. Un poste clé perdu, ou plus de `maxLost` postes perdus, et la bataille est perdue. `lose.to` peut être une liste `{ if, to }`. |
| passage | `battle: "<id>"` | Ouvre la bataille. Le moteur pose `bataille-<id>=gagnee\|perdue` ; condition `battle: "<id>", is: "win" \| "lose", losses`. |
| passage | `epilogue: true` + `story.epilogue: [{ if, text }]`, `epilogueTitle` | Sur une fin, le moteur ajoute les lignes d'épilogue qui tiennent : ce que sont devenus les choix du lecteur. Le validateur compte ces lignes comme l'écho des quêtes. |
| `world` | `noFood: true` | Pas de jauge de vivres personnelle : c'est la ville qui mange. |
| passage | `creditor: "<personne>"` | Le créancier est là : le choix « Rembourser » s'ajoute. |

## En mer (14/11, 8.1) : météo, saisons, blessures, rencontres, établi, veillées

| Où | Clé | Sens |
|---|---|---|
| `story.seasons` | `[{ id, name, from }]` | Les saisons, chacune à partir du jour `from`. Condition et tag `saison: "<id>"`. |
| `story.weather` | `{ by, every, start, kinds: { <id>: { name, desc, mod, say } }, regions: { <état>: { <temps>: poids } }, seasons: { <saison>: { <temps>: +poids } } }` | Le temps qu'il fait. Toutes les `every` heures, le moteur tire un temps selon la région (la valeur de l'état `by`) et la saison. `mod` : bonus ou malus des tests du héros ; `say` s'écrit dans le fil au changement. L'en-tête montre la saison et le ciel. |
| fx | `meteo: "<temps>"` ou `{ is, hours }` | Impose un temps (pour `hours` heures). |
| tag, condition | `temps: "<id>"` ou liste | Le paragraphe ou le choix ne vaut que par ce temps. |
| `story.wounds` | `{ <id>: { name, desc, mod, days, tended, scar, mark } }` | Les blessures : malus `mod` aux tests pendant `days` jours (`tended` jours une fois soignée). `scar` : une cicatrice reste, qui ajoute la marque `mark` au portrait et pose `cicatrice:<id>`. |
| fx | `blessure: "<id>"`, `soigner: "<id>" \| true`, `guerir: "<id>" \| true` | Blesser, soigner (la guérison va plus vite), guérir tout de suite. |
| condition | `blessure: true \| false \| "<id>"`, `cicatrice: "<id>"`, `fatigue: { min, max }` | |
| fx | `fatigue: n` | La fatigue du héros (0 à 5) : une nuit de sommeil la remet à zéro. |
| `story.encounters` | `{ by, every, chance, list: [{ to, region, saison, temps, if, weight, once }] }` | En revenant à un carrefour, après `every` heures au moins, le moteur peut jouer une rencontre de la région, de la saison et du temps qu'il fait. La scène finit par `back: true`. |
| `story.recipes` | `{ <id>: { make, of, keep, label, say, with, if, fx, anywhere } }` | Ce qu'on assemble : sur un passage `atelier: true`, le choix « Assembler : … » paraît dès qu'on a une pièce, grisé avec ce qui manque. Pose `fait:<id>`. |
| `story.vigils` | `[{ to, with, label, if }]` | Sur un passage `veillee: true`, la nuit, veiller avec un compagnon présent : une veillée par nuit, chaque scène une fois. |
| objet | `reveals: [lieux]` | Une carte : l'avoir fait paraître ces lieux sur la carte. |
| `story` | `stocksTab`, `stocksLabel`, `battlesLabel` | Le nom de l'onglet des réserves et de ses rubriques (« Le navire » au lieu de « La ville »). |

## L'école (15/11, 8.2) : pratique, traits de caractère, duels réglés, énigmes, rêves

| Où | Clé | Sens |
|---|---|---|
| `story.practice` | `{ every, step, max, doms, say }` | Progresser par l'usage : chaque jet du héros compte un usage de son domaine ; tous les `every` usages (3 par défaut), le domaine gagne `step` (5) jusqu'à `max` (15). `doms` restreint les domaines, `say` s'écrit dans le fil (`{dom}`, `{n}`). |
| fx | `pratique: { <dom>: n }` | Compte `n` usages d'un coup (une leçon, une nuit de travail). |
| `story.traits` | `{ <id>: { name, low, high, mid } }` | Les traits de caractère : un axe de −5 à +5. `low` / `high` / `mid` nomment le héros selon son côté ; `{e}` s'accorde. Le portrait les montre. |
| fx | `trait: { <id>: ±n }` | Déplace le héros sur l'axe. Quand il change de côté, le fil le dit. |
| condition | `{ trait, min, max }` | Un choix grisé hors de ce caractère (« Ce n'est pas dans ton caractère »), un paragraphe qui ne paraît que pour ce caractère. |
| `story.duels` | `{ <id>: { title, foe, foeName, rule, touches, dom, skill, intro, style, tells, say, labels, adapt, adaptWeight, winText, loseText, win, lose } }` | Un duel réglé contre un personnage de `people`. Attaque, parade, feinte : la parade arrête l'attaque, l'attaque perce la feinte, la feinte trompe la parade ; deux coups pareils se jouent au jet (`dom`, `skill`). `style` : les poids des coups de l'adversaire. `tells` : ce qui le trahit avant son coup (vu plus souvent avec un bon bonus). L'adversaire retient l'habitude du héros d'un duel à l'autre et joue ce qui la bat (`adapt: false` pour l'en empêcher). `win` / `lose` : `{ to, fx }`. |
| passage | `duel: "<id>"`, `duelLabel` | Le passage ouvre le duel (choix « Saluer, et prendre ta garde »). Le duel fini pose `duel:<id>` et l'état `duel-<id>` (`gagne` ou `perdu`). |
| condition | `{ duel: "<id>", is: "win" \| "lose" }` | |
| `story.puzzles` | `{ <id>: { kind, title, text, answer, tries, wrongText, tryLabel, label, leave, hint, force, win, lose } }` | Une énigme qu'on manipule sur la page. `kind: "molettes"` (`wheels`: une liste de symboles par molette, `answer`: un symbole par molette), `"chiffre"` (`cipher`: le texte chiffré ; `answer`: une réponse ou une liste, sans compter accents, majuscules ni espaces), `"ordre"` (`pieces`: les morceaux, `answer`: leurs numéros dans le bon ordre). `tries` : les essais avant l'échec (`lose`). `hint: [{ if, text }]` : un indice qui paraît quand sa condition tient. `force: { dom, diff, takes, label, fail }` : un jet à la place, une fois par visite. Hésiter (rien proposé) ne coûte rien ; partir laisse l'énigme ouverte. Résolue, elle pose `enigme:<id>`. |
| passage | `puzzle: "<id>"`, `puzzleLabel` | Le passage ouvre l'énigme. |
| `story.dreams` | `[{ to, if, weight }]`, `story.dreamChance` | En arrivant sur un passage `reveil: true` (le matin), le moteur joue d'abord un rêve dont la condition tient, une fois chacun, un par nuit. Le rêve finit par `back: true`. |

Pièges : un choix `test` sur une énigme compte aussi un usage pour la pratique ; une condition `after` lit un drapeau ou un passage vu, pas un indice (écrire `after: "enigme:<id>"` plutôt que l'id de l'indice). Les parties d'essai du validateur tapent la bonne réponse d'une énigme sept fois sur dix. Un passage `duel` déjà joué n'a plus de choix : cacher son entrée avec `hide: { duel: "<id>" }`.

## Le huis clos (15/11, 8.3) : versions, souvenirs, se taire, conscience, angoisse, attachements

| Où | Clé | Sens |
|---|---|---|
| `story.topics` | `{ <id>: { title, solved } }` | Les sujets sur lesquels chacun donne sa version (« La nuit de l'étang »). `solved` : le drapeau qui dit la vérité connue ; l'onglet Versions montre alors, pour chaque version, si elle était vraie. |
| `story.accounts` | `{ <id>: { by, topic, text, short, true, belie } }` | Une version, gardée mot pour mot dans l'onglet Versions. `by` : une personne de `people`, ou `"hero"` (ce dont le héros croit se souvenir). `true` : `true`, `false` ou `"partiel"`. `belie` : le passage joué quand on la met en doute devant celui qui l'a donnée. |
| fx | `recit: "<version>"` | Le héros entend cette version (une ligne dans le fil : « La version d'Odile · … »). |
| passage | `devant: "<personne>"` (ou liste) | Cette personne est en face du héros : pour chaque version d'elle que le lecteur a marquée « J'en doute » dans l'onglet Versions, le choix « Mettre en doute sa version : « … » » s'ajoute, une fois. |
| passage | `seul: true` | Le héros est seul : il peut revenir sur sa propre version (si le lecteur en doute), et ce qu'il a fait lui revient (voir `gestes`). |
| condition | `recit`, `doute`, `dementi` : `"<version>"` | Version entendue, marquée « J'en doute », mise en doute devant la personne. Le passage `belie` est joué avec le chemin `via: "doute"`. |
| passage | `souvenir: "Il y a douze ans"` | Une scène du passé jouée au présent. L'horloge s'arrête (rien ne passe : ni temps, ni monde en marche, ni échéance, ni panique) ; `back: true` y devient « Revenir au présent », qui ramène à la page et à l'heure qu'on avait quittées. Ce qu'on choisit dans le souvenir reste (`set`, `trait`). Pas de `hub`, `routes` ni `place`. |
| passage | `silence: { who, to \| back, label, fx, if, hide, via, takes }` | Quelqu'un attend une réponse : le choix « Te taire » s'ajoute (libellé `label`), en italique. Dans une scène `urgent` sans `timeout`, c'est lui qui est pris quand le temps est écoulé. |
| condition | `{ silences: "<personne>" \| "*", min, max }` | Le nombre de silences gardés devant cette personne, ou en tout. |
| `story.gestes` | `{ <id>: { name, poids, echoes: ["…" \| { text, if, tendre, else }] } }` | Ce que le héros a fait et qui lui pèse (fouiller, mentir, signer, brûler). Rien ne s'affiche sur le moment ; ensuite, sur un passage `seul` ou `reveil`, ou juste après un silence, une ligne d'écho revient en italique, chacune une fois, pas plus d'une tous les deux choix. |
| fx | `geste: "<id>"` | Le héros l'a fait : `poids` s'ajoute au poids qu'il porte. |
| condition | `{ geste: "<id>" }`, `{ poids: { min, max } }` | |
| choix | `labels: [{ if, label }]` | Le même choix, dit autrement selon ce qui tient (par exemple selon le poids porté). |
| `story.dread` | `{ name, start, max, trouble, sleep, mod: { from, per }, panic: { to, acts }, levels: [{ min, word }], say: { trouble, calm } }` | L'angoisse (0 à `max`). Au-delà de `trouble`, la page se trouble (les paragraphes `trouble` remplacent les `calme`, l'appli brouille légèrement le texte si le lecteur le veut), et un indice trouvé alors est marqué « noté dans le trouble ». À partir de `mod.from`, chaque point compte `per` aux jets. Le sommeil retire `sleep`. À `max`, la page suivante est `panic.to`. |
| fx, condition | `angoisse: ±n` · `{ angoisse: { min, max } }` | |
| paragraphe, choix | `trouble: true`, `calme: true` | Seulement quand le héros est troublé, ou calme. Les deux ensemble disent la même chose vue de deux façons. |
| `story.attachments` | `{ <personne>: { tendre } }` | Les liens du héros (0 à 5), muets : jamais affichés comme un chiffre. `tendre: true` : ce lien peut devenir tendre. |
| fx, condition | `attache: { <personne>: ±n }` · `{ attache: "<personne>", min, max }` | |
| paragraphe, choix, passage | `tendre: true` (avec `else`) | Une ligne ou une scène tendre. Le lecteur choisit dans ses réglages de les montrer, de les rendre discrètes, ou de les masquer (alors `else` est dit à la place, et un choix tendre disparaît). |

Pièges : une version n'est mise en doute qu'une fois ; le passage `belie` finit en général par `back: true`. Un souvenir ouvert depuis une page qui n'a qu'un seul choix y ramène : donner à cette page un retour (`back: true`) et cacher l'entrée du souvenir une fois vu. Les silences dans un souvenir comptent aussi.

## À deux (15/11, 8.4) : secrets, apartés, interludes, accords avec l'autre joueur

Pour une histoire à deux joueurs, un héros chacun (`multi`, voir GUIDE-MULTI.md). Le scénario déclare ; le moteur range les secrets, offre les aveux, joue les interludes et les fait passer d'un joueur à l'autre aux rendez-vous.

| Où | Clé | Sens |
|---|---|---|
| `story.secrets` | `{ <id>: { title, text, aveu, say, if } }` | Ce qu'un héros cache à l'autre. `aveu` : la scène où il le dit (un passage sans acte ni lieu, qui finit par `back: true`). `say` : le libellé du choix (« Lui dire : <title> » sans lui). `if` : quand on peut le dire. |
| fx | `secret: "<id>"` | Le héros porte ce secret (« Ce que tu caches »). |
| fx | `surprend: "<id>"` | Le héros apprend le secret de l'autre dans son dos (« Ce que tu as surpris »). L'autre n'en sait rien, sauf si le scénario pose aussi une marque `monde:`. |
| fx | `confier: "<id>"` | Le héros le dit à l'autre : la marque `monde:confie:<id>`, que l'autre joueur reçoit au rendez-vous suivant, avec une ligne « X t'a confié : … ». |
| passage | `aparte: true` | Les deux héros sont seuls ensemble (une chambre, un refuge, un bac). Pour chaque secret que le héros garde encore et dont la scène d'aveu existe, le choix « Lui dire : … » s'ajoute ; la scène d'aveu revient à l'aparté. |
| condition | `{ secret: "<id>" }` · `{ confie: "<id>" }` · `{ garde: "<id>" }` | Le héros le sait (le sien, surpris, ou confié par l'autre) · il a été dit · le héros le porte et ne l'a pas encore dit. |
| `story.interludes` | `[{ act, to, if }]` | En entrant dans l'acte `act`, avant sa première page, le moteur joue le premier interlude dont la condition tient, une fois. Avec `if: { has: "role:…" }`, chaque joueur lit le sien. |
| passage | `interlude: { who, where }` (ou `"Nom"`) | Une scène racontée du point de vue de quelqu'un d'autre (`who` : une personne de `people`, ou un nom). L'horloge s'arrête comme dans un souvenir ; `back: true` devient « Revenir à <héros> » et ramène à la première page de l'acte. Pas d'`act`, de `place`, de `hub` ni de fin. |
| texte | `{autre:e}`, `{autre:il}`, `{autre:Il}`, `{autre:le}`, `{autre:lui}` | S'accordent avec le héros de l'autre joueur (« {autre} est assis{autre:e} »). À plusieurs autres : le pluriel ; seul : le masculin. |

Onglet du carnet « Secrets » (seulement si l'histoire en déclare) : ce que tu caches (gardé ou dit), ce qu'on t'a confié, ce que tu as surpris. L'autre joueur ne le voit jamais.

Le validateur joue une histoire à plusieurs en solo avec un **partenaire fantôme** : à chaque rendez-vous (nouvel acte, passage `charniere`), il pose au hasard des marques `monde:` que le scénario sait poser ailleurs que dans un choix du monde, et dit certains secrets, comme l'autre joueur aurait pu le faire. `node tests/multi-test.js` joue l'histoire à deux pour de vrai.

Pièges : une scène d'aveu ou un interlude qui porterait `act` changerait l'acte du joueur et déclencherait un rendez-vous ; le validateur le refuse. Ce qu'un joueur fait n'arrive chez l'autre qu'au rendez-vous suivant : écrire les réactions de l'autre après une `charniere` ou un début d'acte. Ce qui ne regarde qu'un héros (« j'ai pris l'argent ») gagne à porter aussi une marque sans `monde:`, que le partenaire fantôme ne touche pas.

## La fiche suit l'histoire (15/11, 8.5) : voies, ce que l'histoire utilise, carnet rangé

Le héros d'une histoire n'est pas toujours guerrier ou mage. Une histoire peut nommer ses propres **voies** : le métier ou l'origine que le joueur choisit dans « Ton passé ». Le moteur garde les six classes en dessous pour les règles (techniques de combat, sorts, points de vie).

| Où | Clé | Sens |
|---|---|---|
| `story.voies` | `{ <id>: { label, labelF, tip, like, bonus, kit } }` | `label` (et `labelF` au féminin) : le nom montré partout (fiche, carnet, récit). `like` : la classe dont la voie suit les règles (`guerrier`, `rodeur`, `voleur`, `mage`, `pretre`, `barde`). `bonus` : les bonus de domaine de la voie (les domaines absents gardent ceux de la classe). `kit` : les objets de départ (sinon le kit de la classe ; `[]` pour aucun). |
| réponse du passé | `fx: { voie: "<id>" }` | Le héros prend cette voie. Toutes les réponses d'une même question en donnent une, ou aucune. |
| `story.voie` | `"<id>"` | Une seule voie possible (Le Témoin : arpenteur). Aucune question n'est nécessaire. |
| condition | `{ voie: "<id>" }` | Le héros a cette voie. `{ arch: … }` lit toujours la classe en dessous. |

Quand l'histoire déclare des voies, la création du héros ne montre plus « Ta voie : Guerrier, Rôdeur… » : chaque réponse de la question du passé affiche la voie et ses deux meilleurs domaines. Le validateur refuse une voie sans libellé, un `like` inconnu, un domaine inconnu, une question dont une partie des réponses seulement donnent une voie, et une histoire à voies où rien ne donne de voie.

**Ce que l'histoire utilise** (`M.usesOf(story)`, lu une fois dans les tags) : combat (un passage `combat` ou un choix `fight`), points de vie (combat, effets `pv` ou `heal`), bourse (boutiques ou effets `gold`), vivres (effets `food`, routes, bivouac ; `world.noFood` les coupe), fatigue (routes, effets `fatigue`, blessures). La barre du haut, l'onglet Héros et la fiche à imprimer ne montrent que cela. Une valeur touchée malgré tout (des points de vie perdus) réapparaît d'elle-même.

**Carnet** : un onglet n'apparaît que si l'histoire a de quoi le remplir (quêtes, indices, mystères pour Soupçons et Tableau, compagnons, gens, plus d'un lieu pour la carte, ennemis ou lieux pour le Bestiaire). Au-delà de neuf onglets, ils sont rangés en quatre parties (Toi, L'enquête, Le monde, Le livre ; `TAB_GROUPS` dans app.js) : un nouvel onglet doit y être ajouté, sinon il tombe dans « Toi ».

**Première fois** : la première fois qu'un lecteur rencontre un combat, un duel, une bataille, un conseil, une énigme, un aparté, un souvenir, un interlude, « Montrer », l'accusation, « Te taire » ou l'établi, quelques lignes expliquent le geste (`FIRST_USE` dans app.js), une seule fois par lecteur (`profil.helpSeen`).

**Bibliothèque** : rangée par la taille du livre (moins de 100 passages : histoires courtes ; moins de 1 000 : romans ; au-delà : grands romans ; à plusieurs à part), filtre « Pour tous » / « Thèmes adultes », et « En savoir plus » sur chaque livre (durée, actes, fins, ce qu'on y fait, d'après les tags, sans rien de l'intrigue). Le temps de lecture d'une partie vaut au moins la moitié des mots du livre : le plus court chemin sous-estimait les histoires à carrefours.

## Les mots à effets (15/11, 8.6) : effets, mots-clés, trouvailles, envers, encre, page selon l'état du héros

Idée de Clément : des mots qui bougent, qui changent de couleur, des lettres à trouver dans le texte. Le scénario les déclare par une balise dans le texte ; le moteur les retire de tout ce qui n'est pas la page affichée (voix, syllabes, recherche, relecture, temps de lecture, validateur), et l'appli les dessine.

| Balise | Sens |
|---|---|
| `{{fx:<effet>\|texte}}` | Le texte prend un effet : `tremble`, `ondule`, `irise`, `chuchote`, `efface`, `rature`, `ecrit` (lettre à lettre), `lueur`. |
| `{{cle:<id>\|mot}}` ou `{{cle:mot}}` | Mot-clé de règle : un toucher ouvre sa définition. Le moteur en connaît (fatigue, blessure, cicatrice, angoisse, jet, EP, PV, confiance, promesse, la Marque) ; l'histoire ajoute les siens dans `story.keywords: { <id>: { forms, def } }`. Dans les événements, les mots du moteur sont reconnus seuls, une fois par écran. |
| `{{or:<id>\|texte}}` | Trouvaille cachée : rien ne la signale ; un toucher la révèle une fois par partie. `story.trouvailles: { <id>: { title, text, fx } }`, `story.trouvaillesName` (« lettres d'or »). Conditions `{ trouvaille: "<id>" }` et `{ trouvailles: n }`. |
| `{{envers:texte}}` | Écrit à l'envers (miroir) ; un toucher le remet à l'endroit. |
| `{{encre:<objet>\|texte}}` | Encre invisible : le texte n'existe que si le héros porte l'objet (la lanterne de Solène). Pour un paragraphe entier, préférer `{ if: { item: … }, text: … }` avec la balise dedans. |
| `{{tache:texte}}` | Le mot est sous une tache d'encre : la page le montre noyé, la voix et la recherche le sautent. |

**La page suit l'état du héros** (`M.moodOf`, réglage « La page suit l'état du héros ») : `trouble` (angoisse au-delà de la moitié), `blesse` (un quart des points de vie ou moins), `epuise` (fatigue 3 ou plus). Une histoire ajoute les siens : `story.moods: [{ if: <condition>, mood: "ivre" | "fievre" | … }]`, le premier qui tient l'emporte.

Réglage « Mots à effets » : animés, discrets (couleurs sans mouvement), aucun. « Réduire les animations » du système coupe les mouvements.

Le validateur refuse une balise inconnue ou mal fermée, un effet, un mot-clé, une trouvaille ou un objet inconnus, une trouvaille cachée nulle part, un mot-clé d'histoire sans définition, une humeur inconnue. Les parties au hasard touchent la moitié des trouvailles visibles, et une balise restée dans le texte lu est une erreur.

Exemple en place : « Le Cahier de Solène » (six lettres d'or, le miroir du cours de Verre, la lanterne qui révèle le carnet).

## Tous ensemble (15/11)

`tests/ensemble-test.js` fait jouer dans une seule petite histoire la voie, la route avec un combat et une compagne, la météo, les saisons, une blessure, les rencontres, une veillée, les réserves, le monde en marche, une dette, un conseil, une bataille, l'épilogue, la pratique, un trait, un duel, une énigme, un rêve, une version, un souvenir, un silence, un geste, l'angoisse, les mots à effets et une trouvaille. C'est aussi l'exemple le plus court de chaque mécanisme : partir de là pour en essayer un dans une nouvelle histoire.

## La route use (15/11, 8.6) : le ciel suit les routes, la fatigue, les blessures du mauvais temps

La fatigue des routes, les blessures du temps et l'effet du temps sur les jets ne jouent qu'en difficulté Héroïque (Clément, 15/11 : un livre doit toujours pouvoir se finir). Aux autres niveaux, le ciel change et se dit, sans rien de plus. La météo d'une histoire qui n'est pas `by: "route"` (la mer) garde ses effets à tous les niveaux.

| Où | Clé | Sens |
|---|---|---|
| `story.weather` | `by: "route"` | Le temps se tire dans la table de la région de la route parcourue (`world.regions`), ou de la région du lieu (`places.<id>.region`), ou de `lieu` (au village, sous un toit). Le ciel se met à jour à chaque étape. |
| région du monde | `tiring: n` | Un point de fatigue toutes les `n` étapes sur cette région (le bivouac et le sommeil l'effacent). |
| temps | `hurts: { wound, chance, say }` | Sous ce ciel, à chaque étape de route, une chance (0,25 sans `chance`) de prendre cette blessure de `story.wounds`, avec la phrase `say`. Au village, le ciel pèse seulement sur les jets. |

En place dans Kardan (canicule, vent de sable, froid des profondeurs), Malvoran (pluie, brume, neige, verglas, miasmes de la terre souillée) et les Cendres (neige, bourrasque, brouillard givrant, verglas). Le validateur refuse une région de météo inconnue, une blessure inconnue dans `hurts`, un `tiring` qui n'est pas un nombre entier d'étapes.

## Le monde de ce livre (15/11, 8.6) : entrer dans l'univers avant la première page

Clément (15/11) : toutes les histoires démarrent dans l'action, et le lecteur ignore les coutumes, la monnaie, les croyances, qui gouverne. `story.lore` donne ce qu'un habitant sait sans y penser. Rien de l'intrigue, rien de ce que le héros doit découvrir : seulement le décor commun.

| Où | Clé | Sens |
|---|---|---|
| `story.lore` | `pages: [{ title, text }]` | La page « Le monde de ce livre » : pliée sur la fiche du livre et à la création du héros, ouverte en tête de l'onglet Mots du carnet. `text` : une phrase ou une liste de paragraphes (gras et italique comme ailleurs). Deux à quatre pages courtes. |
| `story.lore` | `names: { "Nom\|Variante": "phrase" }` | Les noms du monde (lieux, fêtes, ordres, monnaies, dieux). Le premier de chaque page est souligné en or et s'ouvre d'un toucher. La casse compte : « Rive » est un nom, « rive » reste un mot. La liste complète s'affiche sous la page dans le carnet. Réglage « Fiches du monde ». |

Les noms suivent le glossaire : une seule fois par page, jamais dans un bouton, ni dans ce que lit la voix. Le validateur refuse une page sans titre ou sans texte et un nom sans sa phrase. Exemple : `tests/monde-test.js`.

## Qui est qui : noms touchables, aspect, rappels (15/11)

Pour le lecteur qui a du mal à suivre les personnages par leur nom. Le lecteur l'active dans ses réglages (« Aide pour suivre les personnages ») ; l'histoire ne fait que déclarer.

| Où | Clé | Sens |
|---|---|---|
| `people.<id>` ou `companions.<id>` | `aka: ["Challenger", "le professeur"]` | Les formes qui nomment la personne dans le texte. Sans `aka`, le moteur prend le nom (avant la virgule) et ses mots en majuscule jusqu'à une particule (de, d', du : « de Brenne » est souvent un lieu), sans les titres (Le vieux, Frère, Dame…). Deux personnes qui partagent une forme : elle ne lie personne (sauf si c'est la même personne sous deux identifiants, même `name`). Une forme en minuscules accepte la majuscule de début de phrase. |
| `people.<id>` | `qui: "L'aubergiste du Puits-Vert."` | Qui est la personne pour le héros, en une phrase (la bulle). Sans `qui` : `role`, puis `desc`. |
| `people.<id>` ou `companions.<id>` | `aspect: { allure, visage, habits, signe, voix }` | Comment elle est, en cinq groupes fixes de quelques mots (8 au plus) : le lecteur peut en accoler à son nom dans tout le livre. Sans `visage`, le moteur en tire un de `face` (cheveux, barbe, marques). |
| passage (fx) | `aspect: { hesna: { habits: "robe de fête jaune" } }` | Elle change d'allure : seules les clés données changent. |
| passage (fx) | `qui: { hesna: "…" }` | Ce que le héros sait d'elle change (une révélation). |
| texte | `{{gens:hesna|la patronne}}` / `{{gens:aucun|Brune}}` | Forcer un lien sur des mots qui la désignent, ou l'empêcher (un nom qui est aussi un mot courant). |

Seules les personnes rencontrées (`meet`) et les compagnons connus sont repérés, pour ne rien dévoiler : posez `meet` sur la page où chacun entre en scène. Le moteur retient le lieu et le jour de la première rencontre. Les choix du lecteur (traits rappelés, « Ma description » écrite avec ses mots, « je connais son nom ») vont dans ses réglages, par histoire. En option, un bandeau « Dans cette scène » montre en haut de page les visages des personnes que la page nomme.

Toute la bibliothèque déclare ses `aspect` (15/11). Une nouvelle histoire fait de même pour chaque personnage, en ne prenant rien qui dévoile une surprise.

## Plusieurs vies, beaucoup de fins (15/11, 8.8) : pistes déjà suivies, fins composées, aiguillages, héros prédéfinis

Pour « Les Fils de la Marée » (Clément, 15/11 : trois actes, deux heures par partie, des centaines de fins, des choix qui changent vraiment la suite).

| Où | Clé | Sens |
|---|---|---|
| appli | pistes déjà suivies | Sous chaque choix déjà pris dans une partie précédente de ce lecteur, la mention « déjà suivie ». Réglage « Pistes déjà suivies » (activé par défaut). La fiche du lecteur montre la part des pistes explorées. Rien à écrire dans l'histoire. |
| `story.fates` | `[{ who, label, list: [{ id, title, if, text, dens }] }]` | Les destins. Sur une fin marquée `epilogue`, après l'épilogue, une phrase par personnage suivi : le premier destin de sa liste dont la condition tient, le dernier par défaut. Une fin trouvée = le dénouement + le destin de chacun ; l'appli compte les combinaisons trouvées sur le nombre déclaré. |
| destin | `dens: "id"` ou `["id", …]` | Les dénouements (`fx.flag: "fin:<id>"`) qu'un destin peut suivre. Sans `dens`, tous. Sert au compte des fins possibles : déclarer honnêtement. |
| passage | `branch: [{ if, to, fx }]` | Un aiguillage : le moteur passe tout de suite au premier `to` dont la condition tient, en appliquant son `fx`. Ni texte ni choix ; le dernier sans condition. Sert à lire l'état (qui a fait quoi avant) sans montrer de page. |
| `story.heroes` | sans héros `player` | Histoire à héros prédéfinis : la création montre « Tu suivras » et la liste des héros, sans nom, genre, voie ni visage à choisir. |

Règle de construction (la Marée) : chaque acte se lit en ordre libre au carrefour, et le héros suivi le premier agit le premier (un témoin sauvé ou perdu, une clef trouvée, une alliée gagnée). Les choix posent des états (`fx.set`), lus plus loin par les aiguillages et les conditions, jusqu'au dénouement. Le validateur vérifie les cibles et conditions des aiguillages et ne compte pas un aiguillage comme passage jamais atteint.

## Chemins qui se dévoilent (15/11, 8.9) : personnes à suivre, savoir gardé, raccourcis

| Où | Clé | Sens |
|---|---|---|
| histoire | `leads: { id: { name, desc, start, if, hint, label, fx } }` | Les personnes qu'on peut suivre, chacune un héros de `heroes` (avec sa fiche dans `companions`). `if` : la condition qui l'ouvre (`second`, `lore`…) ; `hint` : la phrase montrée sur le bouton grisé tant qu'elle est fermée (sans rien éventer). |
| passage | `leads: true` | Le moteur écrit un choix par personne de `leads` : « Suivre Maëlle », qui la met en tête (`fx.lead`) et mène à son `start`. Les fermées restent grisées avec leur `hint`. |
| histoire | `savoirs: { id: { title, text } }` | Ce qu'un lecteur garde d'une partie à l'autre. |
| effet | `learn: "id"` ou `["a", "b"]` | Le lecteur garde ce savoir pour toutes ses parties suivantes de l'histoire. L'appli l'écrit dans son profil tout de suite (une partie laissée en route l'a quand même appris). Le moteur le dit : « Tu gardes pour les parties suivantes : … ». |
| condition | `{ savoir: "id" }` ou `{ savoir: ["a", "b"] }` | Ce lecteur a appris ce savoir (dans cette partie ou une autre). |
| condition | `{ lu: "PASSAGE" }` | Ce lecteur a lu ce passage dans une partie précédente (il y a pris un choix). |
| passage | `skip: { to, label, fx }` | Raccourci : si le lecteur a déjà lu ce passage dans une autre partie, un choix de plus, « Tu connais la suite : passer » (ou `label`), mène à `to` avec les effets `fx` (ce que la scène sautée aurait donné). |

Le moteur marque d'un ✧ un choix ouvert grâce à une partie précédente (`savoir`, `lu`, `second` dans son `if`, ou tag `second`), tant que le lecteur ne l'a jamais pris. À une fin, l'appli nomme les personnes que cette fin vient d'ouvrir. Onglet « L'intrigue » du carnet : personnes ouvertes et fermées, savoir gardé, fins trouvées. Le validateur joue deux parties sur cinq avec une partie du savoir et des pages lues.
