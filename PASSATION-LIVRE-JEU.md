# Passation : du livre-jeu « Le Sceau de Malvoran » à une application de livres dont vous êtes le héros

*Écrit le 11/11/2026 depuis le projet RMU, pour un nouveau projet qui n'a pas accès à ses fichiers. Tout ce qu'il
faut est ici : la méthode, la structure, les règles du jeu simplifié, le format des données, la fiche de personnage et
le script qui teste tous les chemins. Le code est donné en entier là où il sert de modèle.*

---

## 1. Ce qui existe et ce que les enfants ont aimé

Un livre-jeu web (une page HTML, du JavaScript sans bibliothèque), joué de bout en bout :

- un prologue et 5 actes, du niveau 1 au niveau 30 ;
- 122 passages (« scènes »), environ 400 choix ;
- 5 compagnons avec leur histoire personnelle, 3 factions, 3 reliques, 5 grands mystères à résoudre par indices ;
- 6 fins, chacune avec un épilogue qui reprend tous les choix faits (village, royaumes, chaque compagnon, le maître du
  héros, Pip, le dragon…) ;
- un carnet du héros toujours visible à côté de la page (la fiche de personnage observable, section 6) ;
- un bouton « Choix précédent » (on revient en arrière pour essayer l'autre chemin) et une vue « Coulisses » qui
  montre l'état interne (les tags posés) ;
- une sauvegarde automatique dans le navigateur.

Ce qui marche avec les enfants : les compagnons qui réagissent, les choix qui changent vraiment la suite, les jets de
dés visibles avec leur calcul, Gloup (un petit monstre de bave qu'on peut épargner, laver et garder), et le fait de
pouvoir tout faire : chaque piste, chaque petite quête, chaque scène au coin du feu.

---

## 2. La méthode d'écriture (ce qu'on a tiré des tutoriels et des grands RPG)

Sources lues : l'auteur principal de Baldur's Gate 3 (structure en toile d'araignée), The Alexandrian (scénarios en
nœuds, règle des trois indices), Christy Tucker et Sam Kabo Ashwell (branche et goulet), Nathan Savant (structure non
linéaire « pizza graduée »), Alborov (l'illusion du choix), Tyranny et Pillars of Eternity (compagnons, Confiance et
Crainte, interventions, discussions entre compagnons), Planescape (la mécanique porte le thème).

Les règles qu'on en tire, à appliquer à toute histoire générée :

1. **Une toile, pas un arbre.** Tous les chemins reviennent vers un centre. Un arbre laisse le joueur « au bout d'une
   branche sans retour » et coûte une fortune à écrire (1 + 3 + 9 + 27…).
2. **Beaucoup de chemins, peu de fins.** BG3 a « 17 000 fins » qui sont des routes ; les vraies fins se comptent sur
   les doigts. Ici : 6 fins, rendues uniques par les lignes d'épilogue.
3. **Branche et goulet.** Chaque acte s'ouvre, laisse faire les pistes dans n'importe quel ordre, puis se resserre sur
   un seul climax. L'état (les choix) passe à l'acte suivant.
4. **Pizza graduée : porte → carrefour → climax.** Une scène d'entrée linéaire, un carrefour ouvert (le « hub ») avec
   ses pistes, puis l'entonnoir vers le chef de l'acte. Chaque acte pose UNE question, écrite dans le carnet
   (« Qui a souillé le puits ? »).
5. **Règle des trois indices.** Toute conclusion que le joueur doit tirer a au moins trois indices, de natures
   différentes (rumeur, témoin, document, jet de savoir, objet, acte du méchant). On en exige deux pour avancer.
6. **Trois façons de passer.** Chaque obstacle important se franchit par la force, la parole, la discrétion ou le
   savoir. Chaque archétype a donc toujours une bonne option.
7. **Un méchant qui agit (horloge).** Si le joueur traîne, le méchant avance : une horloge compte les allers-retours,
   et au seuil, un évènement change le monde (les champs pourrissent, un lieu est pillé, le village brûle). Ça ne
   bloque jamais l'histoire : le monde change, l'histoire continue, et le méchant laisse un indice.
8. **Jamais « je ne sais pas quoi faire ».** Même après un échec, il y a toujours une suite. Un combat perdu n'est pas
   un « game over » : on se réveille au temple, l'histoire continue autrement.
9. **Pas de mauvais choix.** Chaque option d'un choix d'acte mène à quelque chose qui vaut la peine d'être joué.
10. **Un vrai choix est annoncé et coûteux.** On voit ce qu'on engage (« Marque +1 »). Les petits choix donnent de
    petits échos (une phrase, une jauge qui bouge) ; les grands changent un lieu, un compagnon, une fin.
11. **Réagir à tout, même un peu.** Chaque acte du joueur est noté (un tag), et le texte des scènes suivantes le cite
    (« Toi, tu as vendu nos bêtes malades l'an passé »).
12. **La mécanique porte le thème.** Thème : *ce qu'on garde, ce qu'on donne*. Les reliques se gardent ou se donnent
    (et ce qu'on a donné revient à la fin), la Marque offre du pouvoir contre une tache.

### 2.1 Trois niveaux de choix

| Niveau | Combien | Exemple | Effet |
| --- | --- | --- | --- |
| **Scène** (comment) | beaucoup | parler au meunier, se battre, fouiller la nuit | une phrase d'écho, une jauge, un peu d'EP |
| **Acte** (qui) | 2 à 3 par acte | livrer le meunier, le protéger, prendre son marché | change le climax de l'acte, un lieu, un compagnon |
| **Campagne** (quoi) | 5 en tout | reliques, issue de la guerre, sort du dragon, la Marque, la loyauté des compagnons | choisit la fin et les lignes d'épilogue |

Garde-fous : un acte finit toujours sur un seul climax ; au plus 3 choix d'acte par acte ; une douzaine de variables
de campagne en tout.

### 2.2 La tentation : « la Marque »

À la fin du prologue, le héros peut toucher la pierre fendue et recevoir la Marque. Elle donne du pouvoir (des options
de plus, plus faciles) et chaque usage l'augmente. Une Marque haute ouvre les fins sombres et ferme les fins lumineuses ;
certains compagnons la détestent. Refuser tous les cadeaux est aussi un choix, avec un coût (des épreuves plus dures).
Dans les choix, une option qui tache est marquée en violet avec son prix (« Marque +1 »).

### 2.3 Les compagnons (leçons de Tyranny et Pillars of Eternity)

- Chaque compagnon porte une **blessure** liée au thème (ce qu'on lui a pris) et a ce qu'il **aime** et ce qu'il
  **déteste**, affichés dans le carnet.
- **Deux jauges, pas une : Confiance et Crainte** (0 à 100). Elles ne sont pas opposées. Confiance ≥ 50 = loyal :
  il reste même quand on fait un choix qu'il n'aime pas, il suit nos conseils, il peut se sacrifier à la fin. Si la
  Confiance tombe sous 20 après un acte qu'il déteste, il part, sauf si la Crainte (≥ 50) le retient.
- **« Laisse-moi faire »** : dans une scène, un compagnon présent propose sa propre solution, avec SES bonus (pas ceux
  du héros). Ces choix n'apparaissent que s'il est dans le groupe.
- **Discussions au coin du feu** : quand le groupe revient au carrefour, une scène entre deux compagnons se joue une
  fois si les deux sont là (« Tu as perdu tes souvenirs. Moi, je voudrais perdre les miens. On échange ? »).
- **Un arc par compagnon, avec plusieurs fins** (acte IV) : par exemple Coliane retrouve l'homme qui a livré son
  village : pitié, vengeance ou justice. Le joueur conseille ; le compagnon ne suit le conseil que s'il est loyal.
- **Tous rencontrés avant le milieu de l'histoire**, pour que choisir qui vient soit un vrai choix.

### 2.4 « Ton passé » (création, d'après Tyranny)

Après l'archétype, trois questions à trois réponses, qui posent les premiers tags : qui servais-tu (une faction de
départ), qu'as-tu fait quand la tache est venue (aidé, fui, profité : le village s'en souvient, « profité » donne déjà
la Marque 1), qui était ton maître (un PNJ qu'on reverra en allié, en victime ou en ennemi selon nos choix).

---

## 3. Le scénario « Le Sceau de Malvoran » (exemple complet)

**Thème :** ce qu'on garde, ce qu'on donne. **Révélation finale :** Malvoran, « le monstre » enfermé sous le Sceau,
était le sixième fondateur, celui qui a le plus donné ; les cinq autres l'ont enchaîné pour qu'il tienne la porte. La
**Voix** (une femme de vase qui a poussé dans sa douleur) est la vraie méchante, et elle agit pendant tout le jeu.
Pip, une petite lumière avec des yeux, est le guide : c'est la lumière que tenait la main de pierre de Malvoran.

| Acte | Niveaux | Question | Carrefour (pistes, dans n'importe quel ordre) | Choix d'acte | Climax |
| --- | --- | --- | --- | --- | --- |
| Prologue | 1-3 | Qu'y a-t-il sous le château des trolls ? | 3 façons de passer le roi troll (combat, discrétion, parole) | prendre l'éclat (Marque) ou non | la pierre fendue, Pip |
| I · La tache | 3-7 | Qui a souillé le puits ? | repaire du Rouvre (Coliane, Gloup), herboriste (remède de Lise), sanctuaire, auberge (rumeurs), fausse piste (la vieille Berthe, à défendre ou non), surveiller le moulin | livrer le meunier, le protéger, prendre son marché (Marque) | le gardien de vase sous le moulin |
| II · Les gardiens | 7-13 | Qui gardait le Sceau ? | la forge (épreuve, Charline), la chapelle noyée (Aubin, les moines morts), les héritiers (l'anneau, Thavary), un cultiste blessé | jeton de l'Ordre, du Cercle, les deux, aucun ; garder ou donner chaque relique | l'embuscade de Veyra et de la Voix |
| III · Les couronnes | 13-19 | Qui profite de la guerre ? | camp d'Aldaran (le conseiller taché), camp de Vel-Orin (la lettre codée), tombeau des fondateurs, fort du traître, la nuit de Thavary | Aldaran, Vel-Orin, ou la paix (si 2 preuves) ; changer de camp une fois | la bataille du gué, le duel contre son maître |
| IV · La souillure | 19-25 | Que reste-t-il à sauver ? | la tour aux 4 ailes (un arc de compagnon par aile), le temple (la révélation), l'antre du dragon, la lettre du vieux maître, les reliques réunies, l'arc de Coliane | le dragon : le purifier, le tuer, le lier par la Marque | le dragon |
| V · Le Sceau | 25-30 | Que donnes-tu ? | 5 étages qui rappellent chaque acte : le puits (le meunier revient en ami ou en ennemi), la forge (le conseiller), la chapelle (Thavary trahit-elle ?), le fort (Veyra), le glacier (le dragon selon son sort) | la fin | la Voix, puis Malvoran |

**Entre deux actes**, un « entracte » résume le temps libre et remonte le héros au niveau de l'acte suivant.

### 3.1 Les six fins et leurs conditions

| Fin | Il faut | Ce qui se passe |
| --- | --- | --- |
| **Rescellé** | les 3 reliques en main | le Sceau est renouvelé ; quelqu'un prend la place de Malvoran : un compagnon loyal, Pip, ou le héros |
| **Libéré et guéri** | la révélation connue, Marque ≤ 1, le prêtre ou la magicienne loyal | Malvoran est libéré et soigné, la Voix sèche, la terre guérit |
| **Détruit** | dragon purifié ou tué, 2 reliques | le Sceau et Malvoran sont détruits, les reliques aussi ; la souillure reste à soigner à la main |
| **Le nouveau maître** | Marque ≥ 4 | le héros prend la place et commande à la souillure |
| **Le marché** | accepter l'offre de la Voix | la paix grise, la Voix règne dans l'ombre |
| **La Voix triomphe** | tomber deux fois contre la Voix | le monde est souillé |

Les options impossibles restent visibles, grisées, avec leur raison (« Il faut une Marque de 1 au plus… ») : l'enfant
voit ce qu'il aurait fallu faire.

### 3.2 Ce que donner rapporte (le thème joué)

Une relique donnée en route (au forgeron, à l'Ordre, à la famille qui la possédait) revient à l'acte V, rendue par
ceux à qui on l'a confiée. Donner n'est jamais une perte pure, et c'est souvent ce qui ouvre la meilleure fin.

### 3.3 Les petites quêtes

Chaque carrefour a des pistes obligatoires (au moins deux indices pour avancer) et des pistes facultatives : une
fausse piste qui garde quelque chose d'intéressant (Berthe, innocente, qu'on défend ou non), une rencontre (le cultiste
blessé : le soigner, le menacer, ou Coliane le reconnaît), des coffres, une tournée à l'auberge, une scène de nuit.
Chacune laisse un tag qui revient plus tard (Berthe apporte des tisanes au village, le cultiste devient un chef du
Cercle que Coliane retrouve à l'acte IV, et il est cité dans l'épilogue). **Règle : toute petite quête a un écho
plus tard.** C'est ce qui donne envie de tout faire.

---

## 4. Le système de jeu simplifié

Le livre remplace les règles complètes (Rolemaster Unified) par un système à six domaines. À reprendre tel quel ou
à simplifier encore pour les plus petits.

- **Six archétypes** (Guerrier, Rôdeur, Voleur, Mage, Prêtre, Barde), chacun avec un bonus dans **six domaines** :
  Combat, Magie, Discrétion, Nature, Savoir, Social (de 0 à 35).
- **Progression :** +3 par niveau dans les domaines forts (bonus ≥ 20), +1 dans les autres.
- **Jet :** d100 « ouvert » (96-100 : on relance et on ajoute ; 01-05 : on relance et on retranche) + bonus du domaine
  + difficulté (0 normal, −10 difficile, −20 très difficile, −30 folie) + aide (compagnons, reliques, préparation).
  **Réussite à 101.** Le calcul complet s'affiche (« d100 ouvert 72 + Social 41 − 10 (difficulté) + 10 (aide) = 113 →
  réussite »).
- **Un compagnon qui intervient** jette avec ses propres bonus.
- **Pas de mort définitive :** un échec mène toujours à une suite (blessé, en retard, réveil au temple), jamais à la
  fin du livre, sauf la défaite finale (avec une seconde chance).
- **Expérience :** 10 000 EP par niveau ; chaque gain est nommé par sa sorte (évènement personnel, de séance,
  d'histoire ; mineur, modéré, majeur, chacun dans une fourchette). Un « rattrapage » à chaque entracte garantit le
  niveau de l'acte suivant.
- **Effets** (tout ce qu'un choix peut faire) : poser ou ôter un tag, donner un indice, Marque ±, EP, rattrapage de
  niveau, un compagnon rejoint / est rencontré / part, Confiance et Crainte ±, réputation de faction ±, gagner, donner
  ou perdre une relique, avancer une horloge, une note affichée.

---

## 5. Le format des données (le cœur à réutiliser pour un générateur)

Une histoire est un dictionnaire `P` de **passages**. Un passage :

```js
P.I_hub = {
  act: "I",                 // l'acte (pour la règle et la question du carnet)
  title: "Brumefeuille · les pistes",
  hub: true,                // carrefour : joue d'abord une discussion de compagnons en attente
  fx: { … },                // effets à la PREMIÈRE visite seulement (fxEvery : à chaque visite)
  text: function (s) { … }, // ou un tableau de paragraphes ; le texte lit l'état s pour réagir
  choices: [ … ],           // ou une fonction (s) -> choix
  end: true,                // seulement pour une fin
};
```

Un choix :

| Champ | Rôle |
| --- | --- |
| `label` | le texte du bouton |
| `to` | le passage suivant (texte, ou fonction (s) → id, ou `"@ret"` pour revenir au carrefour après une discussion) |
| `fx` | les effets (objet, ou fonction (s) → objet) |
| `if` + `why` | condition ; si elle est fausse, le choix est **grisé avec sa raison** |
| `hide` | condition pour cacher le choix (piste déjà faite) |
| `who` | « Laisse-moi faire » : n'apparaît que si ce compagnon est dans le groupe, jette avec ses bonus |
| `test` | un jet : `{ dom, diff, label, help(s) }`, puis `win: { fx, to }` et `lose: { fx, to }` |
| `tag`, `stain`, `big` | une étiquette visible (« Marque +1 »), en violet si elle tache ; un bouton mis en avant |
| `restart` | recommencer (sur les fins) |

L'état du héros (sérialisable en JSON, donc sauvegardable et annulable) :

```js
{ node: "start", name: "", arch: "", ep: 10000, mark: 0,
  flags: {},  // les tags : "choix:meunier=livre", "berthe:sauvee", "R1:revele"…
  clues: {}, conf: {}, fear: {}, fac: {}, met: {},   // indices, Confiance, Crainte, factions, compagnons
  relics: [], given: [], clock: {}, seen: {}, ret: null, events: [] }
```

**Règle des tags :** tout ce que le joueur fait devient un tag lisible (`choix:meunier=protege`, `gloup:lave`,
`thavary:libre`). Le texte, les conditions et les épilogues ne lisent que ces tags. C'est ce qui rend un générateur
possible : il produit des passages qui posent et lisent des tags.

### 5.1 Exemple réel : le carrefour de l'acte I et le choix d'acte

```js
P.I_hub = { act: "I", title: "Brumefeuille · les pistes", hub: true, text: function (s) {
  var t = ["La question de l'acte est dans ton carnet : <i>Qui a souillé le puits ?</i> Tu peux suivre les pistes dans l'ordre que tu veux. Mais la tache, elle, n'attend pas."];
  var n = clueCount(s, "R1");
  t.push(n === 0 ? "Tu n'as encore aucun indice." : n === 1 ? "Tu as un indice. Un deuxième, et tu sauras à qui parler." : "Tu en sais assez pour aller trouver le coupable.");
  if ((s.clock.I || 0) === 2 && !has(s, "I:voix")) t.push("<p class=\"voix\">Le soir tombe trop vite sur Brumefeuille. L'eau du puits monte d'un pouce.</p>");
  return t; },
  choices: [
    { label: "La forêt du Rouvre : suivre les bêtes souillées jusqu'à leur repaire.", hide: function (s) { return has(s, "I:repaire"); }, fx: { clock: { I: 1 } }, to: leadTo("I_den") },
    { label: "L'auberge du Chaudron : écouter ce qui se dit.", hide: function (s) { return has(s, "I:auberge"); }, to: "I_inn" },
    { label: "Coliane : « Je vais traîner autour du moulin cette nuit. »", who: "coliane", hide: function (s) { return has(s, "I:coliane-moulin"); },
      test: { dom: "discretion", diff: 0, label: "Stalking" },
      win: { fx: { flag: "I:coliane-moulin", clue: "r1_empreinte", conf: { coliane: 5 } }, to: "I_hub" },
      lose: { fx: { flag: "I:coliane-moulin", note: "Coliane revient bredouille." }, to: "I_hub" } },
    { label: "Aller trouver Barthélemy avec ce que tu sais.", big: true, if: function (s) { return clueCount(s, "R1") >= 2; },
      why: "Il te faut au moins deux indices (il y en a six à trouver).", to: "I_miller" },
  ] };

// l'horloge du méchant : au 3e aller-retour sans la vérité, la Voix agit avant la piste choisie
function voixDue(s) { return (s.clock.I || 0) >= 3 && !has(s, "I:voix") && !has(s, "R1:revele"); }
function leadTo(id) { return function (s) { return voixDue(s) ? "I_voix" : id; }; }

// choix d'acte : trois options, aucune « mauvaise », une qui tache
P.I_miller = { act: "I", title: "Barthélemy", fx: { flag: "R1:revele", ep: ["histMin", 1000] }, text: [ /* … */ ],
  choices: [
    { label: "Le livrer au village.", fx: { flag: "choix:meunier=livre", fac: { brumefeuille: 20 }, conf: { coliane: 5 } }, to: "I_source_door" },
    { label: "Le protéger. Il sait où la Voix lui parle.", fx: { flag: "choix:meunier=protege", fac: { brumefeuille: -10 } }, to: "I_source_door" },
    { label: "Prendre le marché toi-même.", tag: "Marque +1", stain: true,
      fx: { flag: "choix:meunier=marche", mark: 1, conf: { coliane: -10 }, fear: { coliane: 15 } }, to: "I_source_door" },
  ] };

// une discussion de compagnons, jouée une fois au retour au carrefour
BANTER.push({ id: "B_coliane_gloup", if: function (s) { return present(s, "coliane") && present(s, "gloup"); } });
P.B_coliane_gloup = { act: "I", title: "Au coin du feu", banter: true, text: [ /* … */ ],
  choices: [ { label: "« On les sauvera, ceux qui peuvent l'être. »", fx: { conf: { coliane: 5, gloup: 5 } }, to: "@ret" } ] };
```

### 5.2 Les épilogues (une ligne par personne, choisie par les tags)

```js
line = has(s, "coliane:pardon") ? "Coliane a rebâti son village. Elle y a planté un pommier par habitant mort."
  : has(s, "coliane:vengeance") ? "Coliane a repris la route seule. Elle ne sourit jamais."
  : has(s, "coliane:justice") ? "Coliane a témoigné au procès, puis elle est devenue capitaine de la garde."
  : st === "gone" ? "Coliane est partie un matin, sans un mot."
  : "Coliane voyage toujours. Elle t'écrit, mal, une fois par an.";
```

Les sections de l'épilogue : le village, les PNJ du premier acte, les royaumes, les factions, chaque compagnon, le
maître du héros, Pip, le dragon, les autres (la vieille du marais, le roi troll, la famille de l'anneau…). Chaque
petite quête a sa ligne ici : c'est la récompense de les avoir faites.

---

## 6. La fiche de personnage observable (le carnet)

Toujours visible à droite de la page (en dessous sur téléphone), mise à jour à chaque choix :

1. **Le héros :** nom, archétype, niveau, EP avec une barre vers le niveau suivant, la Marque en pastilles violettes.
2. **La question de l'acte.**
3. **Les indices**, rangés par mystère, avec le compte (« R1 · Le meunier a passé un marché · 2/6 · révélé »).
4. **Les compagnons :** rôle, ce qu'ils aiment et détestent, deux barres Confiance et Crainte, et leur état (dans le
   groupe, loyal, parti, rencontré).
5. **Reliques et factions :** pastilles (gardée, donnée, volée), réputation de chaque faction.
6. **Ce qui pèsera sur la fin :** les variables de campagne lues dans les tags (« Le meunier : protégé », « Reliques :
   2 gardées, 1 donnée », « Le dragon : purifié », « Loyaux : Coliane, Gloup »).
7. **Coulisses** (bouton) : tous les tags posés, pour les parents ou pour comprendre.

Au-dessus de la page, une **règle des actes** (niveaux 1 à 30, un segment par acte, un repère au niveau actuel).

Chaque choix affiche ses **effets** juste au-dessus du texte suivant, en petites bandes colorées : le jet et son
calcul, « Indice (R1) : … », « Coliane · Confiance +5 », « La Marque grandit : 2 », « +900 EP · Évènement de séance
modéré », « Niveau 5 ! ».

---

## 7. Le moteur de règles (code complet, sans dépendance au navigateur)

Ce fichier ne touche pas à la page : on peut le tester dans Node. Il dépend de quelques données (`ARCHS`, `COMPANIONS`,
`CLUES`, `FACTIONS`, `RELICS`, `EP`, `EP_PER_LEVEL`, `DOMAINS`, `P`, `BANTER`) et des petites fonctions de la
section 7.1.

```js
"use strict";
// Rules of the gamebook: state, rolls, effects, choices. No DOM here, so tests can run it in Node.

// Intent: create() -> State
// Why: one fresh state per play-through, shaped like the campaign tags it stands for.
function freshState() {
  return { node: "start", name: "", arch: "", ep: EP_PER_LEVEL, mark: 0, flags: {}, clues: {}, conf: {}, fear: {}, fac: {},
    met: {}, relics: [], given: [], clock: {}, seen: {}, ret: null, events: [] };
}

// Intent: compute(State) -> Level
// Why: Core Law 12.4, a level per 10,000 EP; the campaign stops at 30.
function level(s) { return Math.min(30, Math.max(1, Math.floor(s.ep / EP_PER_LEVEL))); }

var RNG = Math.random;
// Intent: roll() -> Number ! random
// Why: RMU open-ended d100: 96-100 rolls again and adds, 01-05 rolls again and subtracts.
function openD100() {
  function d() { return 1 + Math.floor(RNG() * 100); }
  var r = d(), total = r, x;
  if (r >= 96) { do { x = d(); total += x; } while (x >= 96); }
  else if (r <= 5) { do { x = d(); total -= x; } while (x >= 96); }
  return total;
}

// Intent: compute(State, Domain, Companion?) -> Number
// Why: a simplified skill bonus for the book: domain bonus of the archetype (or of the companion who steps in),
// plus 3 a level in strong domains (20 and more), 1 in the others.
function bonus(s, dom, who) {
  var base = who ? (COMPANIONS[who].bonus[dom] || 0) : ((ARCHS[s.arch] || ARCHS.guerrier).bonus[dom] || 0);
  return base + (base >= 20 ? 3 : 1) * (level(s) - 1);
}

// Intent: apply(State, Effect) -> () ! writes(State)
// Why: the effect vocabulary of the campaign file, applied in one place:
// flag(s), clue(s), mark, ep [kind, value], catchup level, join/met/leave companions, conf/fear, fac, relic, give,
// relicLose, clock {name: n}, note, unflag; catchupWhy names where the catch-up EP come from.
function apply(s, fx) {
  if (!fx) return;
  if (typeof fx === "function") fx = fx(s) || {};
  function ev(text, cls) { s.events.push({ text: text, cls: cls || "" }); }
  var i, k, c;
  var flags = [].concat(fx.flag || [], fx.flag2 || [], fx.flags || []);
  for (i = 0; i < flags.length; i++) s.flags[flags[i]] = true;
  var unflags = [].concat(fx.unflag || []);
  for (i = 0; i < unflags.length; i++) delete s.flags[unflags[i]];
  var clues = [].concat(fx.clue || [], fx.clues || []);
  for (i = 0; i < clues.length; i++) {
    if (!CLUES[clues[i]]) throw new Error("unknown clue " + clues[i]);
    if (!s.clues[clues[i]]) { s.clues[clues[i]] = true; ev("Indice (" + CLUES[clues[i]].rev + ") : " + CLUES[clues[i]].text, "good"); }
  }
  if (fx.mark) { s.mark = Math.max(0, s.mark + fx.mark); ev(fx.mark > 0 ? "La Marque grandit : " + s.mark : "La Marque pâlit : " + s.mark, "stain"); }
  if (fx.ep) {
    var kind = EP[fx.ep[0]], v = fx.ep[1], lv = level(s);
    if (!kind) throw new Error("unknown EP kind " + fx.ep[0]);
    s.ep += v;
    ev("+" + v.toLocaleString("fr-FR") + " EP · " + kind[2] + " (" + kind[0] + " à " + kind[1].toLocaleString("fr-FR") + ", Core Law 12.4)");
    if (level(s) > lv) ev("Niveau " + level(s) + " !", "good");
  }
  if (fx.catchup) {
    var target = fx.catchup * EP_PER_LEVEL;
    if (s.ep < target) {
      var lv2 = level(s), gain = target - s.ep;
      s.ep = target;
      ev("+" + gain.toLocaleString("fr-FR") + " EP · " + (fx.catchupWhy || "contenu libre de l'entracte (histoires du Conteur, annonces, donjons du monde, chasses)"));
      if (level(s) > lv2) ev("Niveau " + level(s) + " !", "good");
    }
  }
  var joins = [].concat(fx.join || []);
  for (i = 0; i < joins.length; i++) {
    c = joins[i];
    if (s.met[c] !== "party") { s.met[c] = "party"; if (s.conf[c] == null) s.conf[c] = 30; if (s.fear[c] == null) s.fear[c] = 0; ev(COMPANIONS[c].name + " rejoint le groupe.", "good"); }
  }
  var mets = [].concat(fx.met || []);
  for (i = 0; i < mets.length; i++) {
    c = mets[i];
    if (!s.met[c]) { s.met[c] = "met"; if (s.conf[c] == null) s.conf[c] = 20; if (s.fear[c] == null) s.fear[c] = 0; }
  }
  var leaves = [].concat(fx.leave || []);
  for (i = 0; i < leaves.length; i++) { c = leaves[i]; if (s.met[c] === "party") { s.met[c] = "gone"; ev(COMPANIONS[c].name + " quitte le groupe.", "bad"); } }
  [["conf", "Confiance"], ["fear", "Crainte"]].forEach(function (m) {
    var key = m[0], label = m[1];
    if (!fx[key]) return;
    for (k in fx[key]) {
      if (!s.met[k] || s.met[k] === "gone") continue;
      var d = fx[key][k];
      s[key][k] = Math.max(0, Math.min(100, (s[key][k] || 0) + d));
      ev(COMPANIONS[k].name + " · " + label + " " + (d > 0 ? "+" : "−") + Math.abs(d), (d > 0) === (key === "conf") ? "good" : "bad");
    }
  });
  // A companion with Confiance under 20 leaves after a deed he hates, unless Crainte holds him (Tyranny lesson)
  for (k in COMPANIONS) {
    if (s.met[k] === "party" && fx.conf && fx.conf[k] < 0 && (s.conf[k] || 0) < 20 && (s.fear[k] || 0) < 50) {
      s.met[k] = "gone"; ev(COMPANIONS[k].name + " ne te fait plus confiance et s'en va.", "bad");
    }
  }
  if (fx.fac) for (k in fx.fac) {
    s.fac[k] = Math.max(-100, Math.min(100, (s.fac[k] || 0) + fx.fac[k]));
    ev(FACTIONS[k] + " · " + (fx.fac[k] > 0 ? "+" : "−") + Math.abs(fx.fac[k]), fx.fac[k] > 0 ? "good" : "bad");
  }
  if (fx.relic && s.relics.indexOf(fx.relic) < 0) { s.relics.push(fx.relic); ev("Relique : " + RELICS[fx.relic], "good"); }
  if (fx.give && s.given.indexOf(fx.give) < 0) { s.given.push(fx.give); var at = s.relics.indexOf(fx.give); if (at >= 0) s.relics.splice(at, 1); ev("Donnée : " + RELICS[fx.give]); }
  if (fx.relicLose && s.relics.length) { var r = s.relics.pop(); s.flags["vole:" + r] = true; ev("Perdue : " + RELICS[r], "bad"); }
  if (fx.clock) for (k in fx.clock) s.clock[k] = (s.clock[k] || 0) + fx.clock[k];
  if (fx.note) ev(fx.note, fx.noteCls || "");
}

// Intent: compute(State, Passage) -> Text*
function textOf(s, p) { return typeof p.text === "function" ? p.text(s) : (p.text || []); }
// Intent: compute(State, Passage) -> Choice*
// Why: the choices a player sees: hidden ones dropped, a companion's interjection only when he is in the party.
function choicesOf(s, p) {
  var cs = typeof p.choices === "function" ? p.choices(s) : (p.choices || []);
  return cs.filter(function (c) { return !(c.hide && c.hide(s)) && !(c.who && !present(s, c.who)); });
}
// Intent: validate(State, Choice) -> Flag
function allowed(s, c) { return !c.if || !!c.if(s); }

// Intent: get(State, Target) -> Id
function target(s, to) {
  var id = typeof to === "function" ? to(s) : to;
  if (id === "@ret") id = s.ret;
  return id;
}

// Intent: apply(State, Id) -> () ! writes(State)
// Why: entering a passage applies its effects on the first visit only (`fxEvery` on every visit), and a hub first
// plays one banter scene that is due (each once).
function enter(s, id) {
  if (!P[id]) throw new Error("unknown passage " + id + " from " + s.node);
  if (P[id].hub) {
    for (var i = 0; i < BANTER.length; i++) {
      var b = BANTER[i];
      if (!s.seen[b.id] && b.if(s)) { s.ret = id; id = b.id; break; }
    }
  }
  s.node = id;
  var first = !s.seen[id];
  s.seen[id] = (s.seen[id] || 0) + 1;
  if (first) apply(s, P[id].fx);
  apply(s, P[id].fxEvery);
}

// Intent: apply(State, Choice) -> () ! writes(State), random
// Why: one step of play: a roll if the choice has one (absolute maneuver, success at 101, Core Law Table 5-1),
// the choice's effects, then the passage it leads to.
function choose(s, c) {
  s.events = [];
  if (c.test) {
    var t = c.test;
    var r = openD100();
    var help = t.help ? t.help(s) : 0;
    var b = bonus(s, t.dom, c.who);
    var total = r + b + (t.diff || 0) + help;
    var ok = total >= 101;
    var who = c.who ? COMPANIONS[c.who].name + " : " : "";
    s.events.push({ text: who + "jet de " + t.label + " · d100 ouvert " + r + " + " + DOMAINS[t.dom] + " " + b +
      (t.diff ? (t.diff > 0 ? " + " : " − ") + Math.abs(t.diff) + " (difficulté)" : "") + (help ? (help > 0 ? " + " : " − ") + Math.abs(help) + " (aide)" : "") +
      " = " + total + " → " + (ok ? "réussite" : "échec") + " (101 pour réussir)", cls: ok ? "good" : "bad" });
    apply(s, c.fx);
    var branch = ok ? c.win : c.lose;
    apply(s, branch.fx);
    enter(s, target(s, branch.to));
  } else {
    apply(s, c.fx);
    enter(s, target(s, c.to));
  }
}
```

### 7.1 Les données de base et les petites fonctions

```js
var ARCHS = {
  guerrier: { label: "Guerrier", tip: "Fighter : armes et armures.", bonus: { combat: 35, magie: 0, discretion: 5, nature: 10, savoir: 0, social: 10 } },
  rodeur:   { label: "Rôdeur", tip: "Ranger : arc, pistes, survie.", bonus: { combat: 25, magie: 5, discretion: 20, nature: 35, savoir: 5, social: 5 } },
  voleur:   { label: "Voleur", tip: "Thief : discrétion, serrures, ruse.", bonus: { combat: 15, magie: 0, discretion: 35, nature: 10, savoir: 10, social: 20 } },
  mage:     { label: "Mage", tip: "Magician : sorts d'Essence.", bonus: { combat: 0, magie: 35, discretion: 5, nature: 5, savoir: 30, social: 10 } },
  pretre:   { label: "Prêtre", tip: "Cleric : soins et sorts de Channeling.", bonus: { combat: 10, magie: 30, discretion: 0, nature: 10, savoir: 20, social: 25 } },
  barde:    { label: "Barde", tip: "Bard : chants, savoir, parole.", bonus: { combat: 10, magie: 20, discretion: 15, nature: 5, savoir: 25, social: 35 } },
};
var DOMAINS = { combat: "Combat", magie: "Magie", discretion: "Discrétion", nature: "Nature", savoir: "Savoir", social: "Social" };


// Core Law 12.4 event kinds: every EP gain is named by its kind and stays inside its range.
var EP = {
  persoMin: [10, 100, "Événement personnel mineur"], persoMod: [100, 500, "Événement personnel modéré"],
  persoMaj: [500, 1000, "Événement personnel majeur"],
  seanceMin: [100, 500, "Événement de séance mineur"], seanceMod: [500, 1000, "Événement de séance modéré"],
  seanceMaj: [1000, 5000, "Événement de séance majeur"],
  histMin: [500, 1000, "Événement d'histoire mineur"], histMod: [1000, 5000, "Événement d'histoire modéré"],
  histMaj: [5000, 10000, "Événement d'histoire majeur"],
};
var EP_PER_LEVEL = 10000; // Core Law 12.4: a level every 10,000 EP

// The passages, filled by acte0.js … fins.js
var P = {};
// Banter scenes between companions, played once when the party comes back to a hub (Avellone, PoE update 60)
var BANTER = [];

// ---------------------------------------------------------------- helpers used by passages
// Intent: validate(State, Flag) -> Flag
function has(s, f) { return !!s.flags[f]; }
// Intent: compute(State, Revelation) -> Count
function clueCount(s, rev) { return Object.keys(s.clues).filter(function (k) { return CLUES[k].rev === rev; }).length; }
// Intent: compute(State) -> Count
function relicCount(s) { return s.relics.length; }
// Intent: validate(State, Companion) -> Flag
function present(s, c) { return s.met[c] === "party"; }
// Intent: validate(State, Companion) -> Flag
// Why: loyal = in the party with Confiance 50 or more (scenario doc 5.2).
function loyal(s, c) { return present(s, c) && (s.conf[c] || 0) >= 50; }
// Intent: compute(State) -> Count
function partySize(s) { return Object.keys(COMPANIONS).filter(function (c) { return present(s, c); }).length; }
// Intent: get(State) -> Text
function heroName(s) { return s.name || "Colin"; }
// Intent: get(State) -> MasterId?
function master(s) { return s.flags["maitre:ysolde"] ? "ysolde" : s.flags["maitre:ortie"] ? "ortie" : s.flags["maitre:maelle"] ? "maelle" : null; }
// Intent: format(State, Companion, Text, Text) -> Text
// Why: French agreement for the two female companions.
function acc(c, m, f) { return COMPANIONS[c].f ? f : m; }
```

Les noms de règles anglais (« Core Law 12.4 », « Stalking »…) viennent de Rolemaster ; dans une application à
part, on peut les remplacer par des noms simples.

---

## 8. Le test de tous les chemins (indispensable pour un générateur)

Le script charge les données et les règles dans Node, vérifie chaque lien, puis joue 13 200 parties au hasard (choix
au hasard, choix « curieux » vers des passages jamais vus, dés toujours réussis, dés toujours ratés). Il signale :
liens cassés, erreurs, textes avec `undefined`, impasses (aucun choix possible), boucles, passages jamais atteints,
choix jamais pris, fins atteintes, niveau à chaque entracte. Résultat final du livre : aucune erreur, aucune impasse,
122 passages tous atteints, tous les choix pris, les 6 fins atteintes. **Un générateur d'histoires doit faire passer
ce test à chaque histoire produite.**

```js
"use strict";
// Path test of the gamebook: loads the data and rules in a VM, checks every static target, then plays many random
// games (uniform, curious, all-success, all-failure) and reports errors, dead ends, unreached passages and endings.
const fs = require("fs"), vm = require("vm"), path = require("path");
const dir = path.join(__dirname, "..", "site", "donnees");
const ctx = vm.createContext({ console, Math, JSON, Object, Array, String, Number, Error });
for (const f of ["commun", "regles", "acte0", "acte1", "acte2", "acte3", "acte4", "acte5", "fins"])
  vm.runInContext(fs.readFileSync(path.join(dir, f + ".js"), "utf8"), ctx, { filename: f + ".js" });
const G = vm.runInContext("({ P, BANTER, CLUES, freshState, enter, choose, choicesOf, allowed, textOf, level, ARCHS, setRng: function (f) { RNG = f; } })", ctx);
const P = G.P, ids = Object.keys(P);
let problems = [];

// static targets
for (const id of ids) {
  const cs = typeof P[id].choices === "function" ? [] : (P[id].choices || []);
  for (const c of cs) for (const t of [c.to, c.win && c.win.to, c.lose && c.lose.to])
    if (typeof t === "string" && t !== "@ret" && !P[t]) problems.push(`static: ${id} → ${t} missing`);
  if (!P[id].end && P[id].kind !== "create" && !P[id].choices) problems.push(`static: ${id} has no choices`);
}
for (const b of G.BANTER) if (!P[b.id]) problems.push(`banter ${b.id} has no passage`);

const shown = {}, okc = {}, taken = {}, interLv = {};
const seen = {}, endings = {}, levels = {}, errs = {}, dead = {};
function play(mode, seed) {
  let x = seed;
  const rnd = () => { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; };
  G.setRng(mode === "win" ? () => 0.9 : mode === "lose" ? () => 0.1 : rnd);
  const s = G.freshState();
  const archs = Object.keys(G.ARCHS);
  s.arch = archs[Math.floor(rnd() * archs.length)]; s.name = "Test";
  G.enter(s, "passe1");
  for (let step = 0; step < 800; step++) {
    seen[s.node] = (seen[s.node] || 0) + 1;
    const p = P[s.node];
    try { G.textOf(s, p).forEach(t => { if (typeof t !== "string") throw new Error("text not string"); if (/undefined|NaN|\[object/.test(t)) throw new Error("bad text: " + t.slice(0, 80)); }); }
    catch (e) { errs[s.node + ": " + e.message] = 1; return; }
    if (p.end) { endings[s.node] = (endings[s.node] || 0) + 1; const lv = G.level(s); levels[lv] = (levels[lv] || 0) + 1; return; }
    if (/_inter$/.test(s.node)) { const k = s.node; interLv[k] = interLv[k] || {}; const lv = G.level(s); interLv[k][lv] = (interLv[k][lv] || 0) + 1; }
    const all = G.choicesOf(s, p);
    all.forEach(c => { const k = s.node + " | " + c.label.slice(0, 60); shown[k] = (shown[k] || 0) + 1; if (G.allowed(s, c)) okc[k] = (okc[k] || 0) + 1; });
    const cs = all.filter(c => G.allowed(s, c) && !c.restart);
    if (!cs.length) { dead[s.node] = (dead[s.node] || 0) + 1; return; }
    let c;
    if (mode === "curious") { const fresh = cs.filter(c => typeof c.to === "string" && !seen[c.to]); c = (fresh.length ? fresh : cs)[Math.floor(rnd() * (fresh.length || cs.length))]; }
    else c = cs[Math.floor(rnd() * cs.length)];
    taken[s.node + " | " + c.label.slice(0, 60)] = 1;
    try { G.choose(s, c); } catch (e) { errs[s.node + " / " + c.label.slice(0, 40) + ": " + e.message] = 1; return; }
    for (const ev of s.events) if (/undefined|NaN/.test(ev.text)) errs[s.node + " event: " + ev.text.slice(0, 80)] = 1;
  }
  errs["loop near " + s.node] = 1;
}
let n = 0;
for (const mode of ["uniform", "curious", "win", "lose"]) for (let i = 1; i <= (mode === "uniform" || mode === "curious" ? 6000 : 600); i++) { play(mode, i * 7919); n++; }

console.log("games:", n, "passages:", ids.length);
console.log("problems:", problems.length ? problems : "none");
console.log("errors:", Object.keys(errs).length ? Object.keys(errs) : "none");
console.log("dead ends:", Object.keys(dead).length ? dead : "none");
console.log("unreached:", ids.filter(id => !seen[id] && id !== "start"));
console.log("endings:", endings);
console.log("final levels:", levels);

const statChoices = typeof P === "object" ? [] : [];
for (const id of ids) { const p = P[id]; if (typeof p.choices !== "function") (p.choices || []).forEach(c => { if (!c.restart) { const k = id + " | " + c.label.slice(0, 60); if (!taken[k]) statChoices.push(k + (shown[k] ? (okc[k] ? " (allowed " + okc[k] + "x, never taken)" : " (shown " + shown[k] + "x, never allowed)") : " (never shown)")); } }); }
console.log("choices never taken:", statChoices);
console.log("level after each catch-up:", interLv);
```

Il existe aussi un petit test Playwright qui joue une partie entière dans Chromium (clic au hasard sur les choix
jusqu'à une fin, retour arrière, rechargement de la sauvegarde, largeur téléphone), et vérifie qu'il n'y a aucune
erreur dans la console.

---

## 9. Pistes pour l'application « générateur d'histoires »

Recommandations (à discuter avec Clément) :

1. **Garder le format de données tel quel** (passages, choix, effets, tags) : il a fait ses preuves, il est testable,
   et un générateur (ou une IA) peut produire des fichiers de ce format.
2. **Générer par patrons de structure, pas par texte libre :** un acte = porte + carrefour (3 à 6 pistes dont une
   fausse piste et une ou deux petites quêtes) + choix d'acte (3 options) + climax ; chaque mystère = 4 à 6 indices
   répartis sur les pistes (on en exige 2) ; chaque compagnon = blessure, aime / déteste, intervention par acte, une
   discussion par paire, un arc à 3 fins ; une horloge par acte.
3. **Chaque petite quête pose un tag relu plus tard** (un écho dans un acte suivant et une ligne d'épilogue). Le
   générateur le vérifie : tag posé jamais lu = quête sans conséquence.
4. **Le test des chemins après chaque génération** : liens, impasses, fins atteignables, niveau par acte, choix
   jamais possibles.
5. **Fiche de personnage observable dès le début** (section 6), avec la question de l'acte et les jauges des
   compagnons : c'est ce que les enfants regardent entre deux choix.
6. **Système de jeu à six domaines** (section 4), ou plus simple encore pour les petits (trois domaines : Force,
   Ruse, Cœur ; d20 + bonus contre une difficulté) ; garder le calcul visible.
7. **« Choix précédent » et Coulisses** : on rejoue l'autre chemin sans tout recommencer.

### Choix déjà faits dans le livre, à revoir si besoin

- Les jets sont un simple d100 + domaine (pas de combat détaillé).
- Au 3e lieu de l'acte II, le Cercle a déjà tout pillé, sauf si on a écouté le cultiste blessé.
- Les reliques données reviennent à l'acte V.
- Un compagnon ne suit le conseil du joueur que s'il est loyal (Confiance ≥ 50).
- Une seconde chance contre la Voix, puis la fin « La Voix triomphe ».
- Pour sceller le Sceau, celui qui prend la place de Malvoran est un compagnon loyal, Pip ou le héros.
- Les fins lumineuses montent au niveau 30, « Le marché » au niveau 29.
- Noms inventés : Ombeline, Veyra, Durn, Morn, Orsini, Vendrel, Aldric, Ilsa, Corvin, Nerys, Brann, Edrin, Ardhal,
  Lise, Barthélemy, Berthe, Margot, Aglaé.
