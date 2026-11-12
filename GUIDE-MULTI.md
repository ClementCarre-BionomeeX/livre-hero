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

## Nommer les autres

`{autre}` dans un texte (pas dans un libellé de choix) donne le nom du ou des héros des autres joueurs (« Mila », « Mila et Tom »). En solo, il vaut « l'autre ». Ne pas accorder en genre autour de `{autre}` : on ne sait pas qui le joueur a créé.

## Garder le scénario jouable

- Chaque condition qui dépend d'un autre joueur (`monde:…`) a un chemin de secours (un jet plus difficile, un autre passage) : l'autre a pu échouer.
- Le validateur joue le scénario en solo ; `node tests/multi-test.js` le joue à plusieurs (choix au hasard, rendez-vous, synchronisations) et doit finir toutes les parties sans blocage.

## Salle commune (plusieurs appareils)

Les joueurs doivent être connectés à claude.ai et invités sur la page par e-mail avec le droit **Éditeur** (sur un compte individuel, c'est le seul droit qui permet d'écrire dans la sauvegarde partagée ; pas si la page est aussi partagée par lien public). La salle est gardée dans la base de la page : `salles/<id>`, une fiche par place (`joueurs/`), une par choix du monde ou rôle (`monde/`).
