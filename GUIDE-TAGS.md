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

## Ce que le moteur ne peut pas deviner

Qu'un paragraphe sans tag suppose un compagnon présent, une heure, ou un événement passé. La règle d'écriture : dès qu'un paragraphe fait agir un compagnon, parle du soleil ou de la nuit dans un lieu où l'on revient, ou s'appuie sur un événement facultatif, il porte le tag correspondant.

## Outils d'auteur

- `node tests/build.js` : construit, valide, liste ce que le moteur a rattrapé.
- `node tests/graphe.js` : écrit `dist/graphe.html`, le graphe de chaque scénario (passages, flèches typées selon les tags).
- `node tests/quetes-ouvertes.js <id>` : liste les quêtes dont l'entrée se ferme après une première visite alors qu'on peut en ressortir sans l'avoir finie.
- `node tests/tags-test.js` : vérifie les tags sur une histoire minuscule.
