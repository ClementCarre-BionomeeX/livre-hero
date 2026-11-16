# Écrire un scénario à plusieurs

Règle de Clément (11/11) : les scénarios multi sont écrits pour le multi. Kardan et les Cendres restent solo. Le moteur multi est dans `src/multi.js` ; la page l'utilise pour les deux façons de jouer (même appareil avec écran caché, salle commune entre appareils).

## Déclarer le scénario

```js
multi: { min: 2, max: 4 },   // nombre de joueurs
```

Sans `multi`, le livre n'offre que « Nouvelle partie ». Avec `multi`, il n'offre que « Jouer à plusieurs ».

Deux modèles :
- **Un héros par joueur** (pas de `heroes`) : chaque joueur crée son héros, dans le même monde. Exemples : `vaudrenne`, `pages`.
- **Héros partagés** (`heroes`, comme les Cendres) : les héros du scénario sont répartis entre les joueurs ; un choix qui passe à un héros ou une équipe d'un autre joueur lui est fermé. Les parties se fusionnent à chaque rendez-vous.

## Les rendez-vous (charnières)

Un joueur attend les autres :
- **au premier passage d'un nouvel acte** (automatique : on se retrouve tous au début de l'acte II, III…) ;
- **sur un passage marqué `charniere: true`** (un grand tournant, juste avant un choix décisif) ;
- **quand il n'a plus aucun choix ouvert** (par exemple au carrefour des chapitres, quand ses héros ont fini le tour).

Quand tout le monde attend, les parties se synchronisent et l'histoire reprend.

## Ce qui passe d'un joueur à l'autre

- Modèle « un héros par joueur » : seules les marques qui commencent par `monde:` passent d'un joueur à l'autre, à chaque rendez-vous. Tout ce qui doit compter chez l'autre s'écrit donc `fx: { flag: "monde:…" }`, et se lit `{ has: "monde:…" }`.
- Modèle « héros partagés » : tout l'état est fusionné (ce que chacun a changé est gardé ; les nombres s'additionnent ; sinon le premier arrivé l'emporte).
- Un passage de fin se relit après la dernière synchronisation : son texte peut dépendre de ce que les autres ont fait jusqu'au bout.

## Choix du monde et rôles

```js
{ label: "Ouvrir les vannes", monde: "vannes", option: "ouvertes", ... }   // le premier décide pour tous
{ label: "Panser les chevaux", role: "matin", option: "ecurie", ... }      // chaque option ne va qu'à un joueur
```

- `monde` : le premier joueur qui prend une option la fixe pour tout le monde ; les autres ne voient plus qu'elle, les autres options fermées (« Léo a déjà tranché : … »).
- `role` : premier servi, mais pour se répartir le travail ; une option prise par un joueur est fermée aux autres (« C'est Léo qui s'en charge. »), et un joueur ne peut prendre qu'une option par rôle. C'est l'outil pour séparer les joueurs (l'un à l'écurie, l'autre à l'armurerie) et faire que chacun rapporte une pièce du puzzle.
- `option` est facultatif (sinon le libellé sert d'identifiant).

## À trois : voter, savoir qui tient quel poste, mettre en commun (9.6)

```js
multi: { min: 3, max: 3, commun: true },
scrutins: { plan: { title: "Par où entrer", options: { toit: "Par les toits", cave: "Par les caves" }, tie: "dispute", tieSay: "Trois avis, trois voix.", secret: false } },
…
{ label: "Par les toits", voix: "plan", option: "toit", to: "URNE" }     // chacun donne sa voix
```

- **Vote** (`voix` + `story.scrutins`) : chaque joueur donne sa voix, sans voir celle des autres. Le moteur compte au rendez-vous suivant, quand tout le monde a voté : la majorité l'emporte ; sans majorité, c'est l'option `tie` du scrutin (un désaccord que l'histoire a écrit), ou à défaut la première voix donnée. Chacun lit le dépouillement (« 2 voix pour … (Mila, Tom) » ; `secret: true` tait les noms). Le résultat se lit `{ scrutin: "plan", is: "toit" }` ; la voix de chacun `{ voix: "plan", is: "cave" }`. La forme sûre : la page du vote, puis une page `charniere: true` où l'on attend (« les cailloux sont dans le chapeau »), puis un aiguillage `branch` selon le résultat.
- **Postes** : quand un joueur prend un choix `role`, le moteur retient son poste ; il se lit `{ role: "acte2", is: "main" }` (plus besoin de poser un drapeau à la main). `{qui:acte2:main}` donne le nom du héros qui tient ce poste, `{qui:acte2:main:e}` (ou `il`, `Il`, `le`, `lui`) s'accorde avec lui ; tant que personne ne l'a pris (ou en solo) : « l'un de vous ». Écrire ces phrases dans un paragraphe que le titulaire ne lit pas (`{ if: { not: { role: "acte2", is: "main" } }, … }`), puisque le livre lui dit « tu ».
- **Mise en commun** (`multi.commun: true`) : à chaque rendez-vous, chacun reçoit les indices trouvés par les autres (« Mila rapporte : … »). Un indice `prive: true` reste à celui qui l'a trouvé. Ce qu'un héros a *vécu* se teste donc par un drapeau, et ce qu'il *sait* par un indice.

Le partenaire fantôme du validateur vote lui aussi (n'importe quelle issue du scrutin, égalité comprise) et rapporte des indices des actes déjà joués. Exemple : `tests/trois-test.js`, et « Les Trois Clefs d'Aiguemorne » (`troisclefs`).

## Nommer les autres

`{autre}` dans un texte donne le nom du ou des héros des autres joueurs (« Mila », « Mila et Tom »). En solo, il vaut « l'autre ». Depuis la 8.4, on accorde avec le héros de l'autre joueur : `{autre:e}`, `{autre:il}`, `{autre:Il}`, `{autre:le}`, `{autre:lui}` (« {autre} est assis{autre:e} »). Pour « vous » au pluriel, préférer une tournure sans participe accordé (« vous avez pris », plutôt que « vous êtes assis »).

## Secrets, apartés, interludes (8.4)

Une histoire à deux peut donner à chaque héros des secrets (`story.secrets`), les faire dire sur les passages `aparte: true`, et jouer en début d'acte un interlude différent pour chaque rôle (`story.interludes`). Voir GUIDE-TAGS.md, section « À deux ». Exemple : `adeux` (« Le Pli de Brumefond »).

## Garder le scénario jouable

- Chaque condition qui dépend d'un autre joueur (`monde:…`) a un chemin de secours (un jet plus difficile, un autre passage) : l'autre a pu échouer.
- Le validateur joue le scénario en solo ; `node tests/multi-test.js` le joue à plusieurs (choix au hasard, rendez-vous, synchronisations) et doit finir toutes les parties sans blocage.

## Salle commune (plusieurs appareils)

Les joueurs doivent être connectés à claude.ai et invités sur la page par e-mail avec le droit **Éditeur** (sur un compte individuel, c'est le seul droit qui permet d'écrire dans la sauvegarde partagée ; pas si la page est aussi partagée par lien public). La salle est gardée dans la base de la page : `salles/<id>`, une fiche par place (`joueurs/`), une par choix du monde ou rôle (`monde/`).
