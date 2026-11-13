# Guide d'écriture d'un lot de « Le Sceau de Malvoran »

À lire avec `BIBLE.md` (l'intrigue, les lots, les drapeaux), `base.js` (ce qui est déjà déclaré),
`/home/user/lh/GUIDE-TAGS.md` (les tags et ce que le moteur garantit) et, comme modèle de forme, les fichiers de
« Le Témoin » : `/home/user/lh/histoires/src/temoin/acte1_a.js`, `base.js`, `evenements.js`, et de « Kardan »
(`histoires/src/kardan/acte2.js`) pour les combats.

## 1. Le fichier

`histoires/src/malvoran/<lot>.js` (nom exact donné dans ta mission), en CommonJS :

```js
// <Une ligne en anglais : ce que contient ce lot>
var H = [{ with: "pip", v: 5 }]; // des constantes ou petites fonctions d'aide sont permises si elles PRODUISENT des données
module.exports = {
  passages: {
    PT_abords: { act: "P", title: "Sous le rempart", place: "chateau", hub: true, text: [ … ], choices: [ … ] },
    …
  },
  extras: {
    people: { aglae: { name: "Aglaé", f: true, face: { age: "mur" }, desc: "…" } },
    items: { … }, enemies: { … }, quests: [ … ], routes: [ … ], regions: { … }, events: { … },
    shops: { … }, banter: [ … ], achievements: { … }, clues: { … },   // clues : seulement des indices EN PLUS de base.js
  },
};
```

Tout ce qui sort du module doit être de la **donnée JSON** : pas de fonction dans `text`, `choices`, `if`, `to`.
Les conditions sont des objets (`{ has: "x" }`, `{ not: … }`, `{ all: [ … ] }`, `{ any: [ … ] }`, `{ clues: "R1", min: 2 }`,
`{ present: "coliane" }`, `{ loyal: "aubin" }`, `{ conf: "thavary", min: 50 }`, `{ mark: { min: 1 } }`, `{ item: "x" }`,
`{ relic: "clou" }`, `{ given: "clou" }`, `{ relics: { min: 2 } }`, `{ gold: { min: 5 } }`, `{ is: { meunier: "livre" } }`,
`{ seen: "PASSAGE" }`, `{ quest: "id" }`, `{ clock: "voix", min: 3 }`, `{ level: { min: 5 } }`, `{ night: true }`, `{ fac: "ordre", min: 10 }`,
`{ arch: "voleur" }`, `{ count: [ … ], min: 2 }`). Une condition `gold/food/pv` s'écrit toujours `{ min, max }`.

Un identifiant déclaré deux fois (passage, personnage, objet, quête, route…) fait échouer la construction : utilise
les préfixes de ton lot pour tout ce que tu crées (passages, objets, ennemis, personnages, quêtes, routes, régions
(sauf celles que la mission t'attribue), événements). Avant de créer un personnage ou un objet, regarde s'il existe
déjà dans `base.js` ou dans un lot déjà écrit (`grep -rn "id:" histoires/src/malvoran/`).

## 2. Un passage

| Clé | Rôle |
|---|---|
| `act` | `"P"`, `"I"`, `"II"`, `"III"`, `"IV"`, `"V"` (obligatoire, sauf événements de route) |
| `title` | titre court (un lieu ou un moment) |
| `place` | id du lieu (base.js `world.places`) ; `null` pour une scène de route |
| `hub: true` | carrefour (joue une discussion de compagnons due, avant) |
| `routes: true` | propose les routes du lieu à la fin de la page (pour un carrefour de lieu) |
| `backName` | nom affiché quand on y revient (« la cour du château ») |
| `text` | tableau de paragraphes : une chaîne, ou `{ text, if, with, without, when, after, before, first, again, once, outcome, else }` |
| `fx` | effets à la première visite (`fxEvery` : à chaque visite) |
| `choices` | tableau de choix |
| `combat` | un combat qui se lance en arrivant (voir 4) |
| `shop: "id"` | une boutique (déclarée dans `extras.shops`) |
| `taverne: { mise: 2, adversaire: "un muletier" }` | une table de Chandelle |
| `takes: "evening"|"night"|"morning"|"day"|"noon"|<heures>` | la scène fait passer le temps |
| `urgent: 20` | scène pressante (secondes) ; un choix doit porter `timeout: true` |
| `end: true` | une fin (lot V2 seulement) |
| `ambiance` | si différente de celle du lieu |

Un choix :

| Clé | Rôle |
|---|---|
| `label` | texte du bouton (nomme toujours le lieu où l'on arrive si ça change de lieu) |
| `to` | passage suivant ; ou `back: "PASSAGE"` pour revenir à un passage déjà traversé (OBLIGATOIRE pour tout retour : jamais de libellé « Revenir… » écrit à la main ; le validateur le refuse). `back: "@route"` après un événement de route. |
| `fx` | effets |
| `if` + `why` | condition ; fausse = choix grisé avec sa raison |
| `hide` | condition pour cacher (piste faite : `hide: { seen: "X" }`) |
| `who: "coliane"` | « Laisse-moi faire » : n'apparaît que si ce compagnon est là ; le jet utilise ses bonus |
| `test: { dom, diff, label, help: [{ with: "pip", v: 10 }, { if: { item: "corde" }, v: 10 }] }` + `win: { fx, to }`, `lose: { fx, to }` | un jet ; `dom` ∈ combat, magie, discretion, nature, savoir, social ; `diff` 0, -10, -20, -30 |
| `fight: { … }` | un combat (voir 4) |
| `big: true` | bouton mis en avant (avancée de l'histoire) |
| `exit: true` | quitte l'acte (le mode « tout jouer » le retient tant que des quêtes restent) |
| `tag: "Marque +1", stain: true` | étiquette visible ; violet si ça tache |
| `once: true` | disparaît une fois pris |
| `refuse: true` | refuser définitivement la quête en cours |

## 3. Effets (`fx`)

`flag` (chaîne ou liste), `unflag`, `set: { cle: "valeur" }`, `clue` (id d'indice), `mark` (±1), `ep: ["perso"|"seance"|"histoire", n]`
(perso 10-1000, seance 100-5000, histoire 500-10000), `catchup: <niveau>` + `catchupWhy`, `join`, `met` (compagnon
rencontré sans rejoindre), `leave`, `conf: { id: ±n }`, `fear: { id: ±n }`, `fac: { id: ±n }`, `relic`, `give`, `relicLose`,
`item`, `drop`, `gold` (± sous), `food` (± jours), `pv` (± ou "max"), `rest: true`, `time` (heures), `until` (heure),
`stamp`, `reveal` (lieu sur la carte), `meet` (personnage de `people`), `regard: { id: "mefiant" }`, `clock: { voix: 1 }`,
`quest` (quête accomplie), `questSeen` (quête découverte), `note` (une ligne affichée).

Barème indicatif d'EP par acte : P 200-800 par scène, I 300-1500, II 500-2500, III 800-3500, IV 1000-4500, V 1500-6000 ;
le grand moment d'un acte : `["histoire", 3000-8000]`. Le `catchup` de l'entracte comble le reste.

## 4. Combats

```js
{ label: "Dégainer", fight: { title: "La grande porte", enemies: [{ id: "troll_garde", n: 2 }], terrain: "nature" /* ou omis */, range: "loin" /* facultatif */,
  spare: true /* on peut l'apaiser (sorts de sommeil, chant) */,
  win: { fx: { … }, to: "X" }, lose: { fx: { … }, to: "Y" },          // perdre mène TOUJOURS à une suite
  flee: { label: "Reculer jusqu'au sentier", dom: "discretion", diff: -10, to: "Z" },
  calm: { to: "W" } } }
```
Ou `combat: { … }` sur le passage (le combat se lance à l'arrivée). Ennemis : déclarés dans `base.js` ou dans tes
`extras.enemies` (`{ name, look, pv, att, def, dmg, flank?, ranged?, desc }`, `look` ∈ loup, rat, ombre, humain, serpent,
araignee, oiseau, ours). Échelle (héros de niveau L) : ordinaire pv ≈ 6+2L, att ≈ 20+3L, def ≈ 10+L, dmg ≈ 3+L/4 ;
chef ×3 en pv, +10 att. Le moteur gère tout le reste (techniques de classe, compagnons, rangs, ordres).

## 5. Routes, régions, événements (voyages joués)

```js
routes: [{ id: "r_crete", name: "Le sentier de la crête", from: "bornes", to: "chateau", steps: 2, region: "crete",
  label: "Monter au château par le sentier de la crête", labelBack: "Redescendre aux Trois-Bornes",
  if: { … }, why: "…", legs: [{ step: 1, passage: "PC_bergere", if: { not: { seen: "PC_bergere" } } }] }],
regions: { crete: { name: "La crête", ambiance: "montagne", chance: 0.5, events: ["EP_eboulis"], quiet: ["…", "…", "…"], camp: ["…", "…"] } },
events: { EP_eboulis: { passage: "EP_eboulis", weight: 2 } },
```
Une étape = 6 heures. Toute route à double sens a `label` ET `labelBack`, ou `twoWay: false`. Les passages de leg et
d'événement n'ont pas de `place` (ou `place: null`) et finissent par `{ label: "Reprendre la route", back: "@route" }`
ou `{ back: "@route" }`. Les événements sont rejoués au hasard : écris-les pour qu'ils tiennent seuls, et utilise
`hide`/`if` ou `once` s'ils posent un drapeau. Une route déjà parcourue se refait vite, sans événement : si le premier
voyage d'une région est entièrement écrit en legs, donne à la région `repeatChance: 0.4` pour que ses événements pas
encore vus viennent aux voyages suivants.

## 6. Quêtes

`extras.quests: [{ id: "P_marteau", act: "P", kind: "annexe", title: "Le marteau de Durn", start: "PB_forge", echo: "durn:marteau" }]`.
`fx: { questSeen: "P_marteau" }` quand on la découvre (si `start` ne suffit pas), `fx: { quest: "P_marteau" }` quand elle
est finie (TOUTES les issues d'une quête, même ratées, doivent finir par `quest`, ou par un choix `refuse: true`).
`closes: { has: "…" }` si elle devient impossible. Le drapeau d'`echo` doit être posé par la quête : les lots suivants et
l'épilogue le relisent. La quête principale de l'acte doit être accomplie AVANT le choix `exit: true` de sortie.

## 7. Tags (rappel de GUIDE-TAGS.md)

- Tout paragraphe où un compagnon parle ou agit porte `with: "id"`. Tout paragraphe qui suppose qu'il est absent :
  `without`. Personne avec toi : `without: "any"`.
- Heure : `when: "day"` / `"night"` dans un lieu où l'on revient.
- Événement facultatif passé : `after: "drapeau_ou_passage"` ; pas encore : `before`.
- `first: true` (texte de la première visite), `again: true` (visites suivantes), `once: true`.
- `else: "…"` sur un paragraphe sous condition pour ne perdre aucune information.
- Un carrefour (`hub`) doit avoir un texte `first` et un texte `again`.
- Un passage où l'on revient souvent : textes courts au retour.

## 8. Style (règles de Clément, non négociables)

- Roman, deuxième personne du présent. Registre adulte et précis : les enfants de Clément lisent très bien, et des
  adultes jouent aussi. Pas de mots d'enfant, pas de morale appuyée, pas de narrateur qui fait des clins d'œil.
- Paragraphes de 2 à 6 phrases, 2 à 5 paragraphes par passage (plus pour les grands moments). Dialogues entre
  guillemets français « … ». Italique `*…*` pour les écrits.
- Des personnages avec leurs intérêts, qui peuvent mentir, se tromper, se taire. Des détails concrets (outils,
  nourriture, odeurs, métiers, argent).
- **Indices** : un indice est donné une seule fois (`fx: { clue: "…" }` au moment où on le découvre), et le texte le
  pose sec. Jamais de rappel, jamais de phrase qui relie deux indices, jamais « Tu ne sais pas encore que… ».
- Pas de comparaisons forcées (« salé comme une larme »), pas de personnifications gratuites, pas d'anachronismes
  (pas de minutes, pas de « ok », pas de tournures modernes), pas de mots doublés.
- Accord du héros : tournures neutres ; à défaut `{e}` (« fatigué{e} »). Jamais d'accord irrégulier sur le héros.
- Le nom du héros : `{hero}`. Le maître : écris trois paragraphes conditionnés `{ if: { has: "maitre:hauberte" }, … }`,
  `ortie`, `maelle`, ou une tournure qui ne nomme pas.
- Chaque obstacle important : au moins trois façons (force, parole, discrétion ou savoir), et un `who` de compagnon
  quand il est là. Jamais d'impasse. Un échec mène à une suite intéressante, pas à un mur.
- Petits choix → petits échos (une phrase plus loin, une jauge) ; grands choix → un lieu, un compagnon, une fin change.
- Réagir à ce que le joueur a fait avant (passé du héros, Marque, compagnons, choix des lots précédents) par des
  paragraphes conditionnés.
- Les noms : vérifie qu'un prénom n'est pas déjà pris (`grep -rn "Prénom" histoires/src/malvoran/`).

## 9. Vérifier

`cd /home/user/lh && node histoires/src/malvoran/verifier-lot.js <lot>` : erreurs de ton lot (à corriger toutes),
remarques, lecture stricte, et passages visés pas encore écrits (ils doivent être exactement les coutures de la
bible, section 10.2). Lance-le souvent. `node -e "require('./histoires/src/malvoran/index.js')"` pour les doublons.
