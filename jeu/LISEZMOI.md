# Le Sceau de Malvoran, le jeu vidéo

Jeu de rôle sur tablette et PC, demandé par Clément le 27/11 : « un jeu vidéo complet pour mes enfants sur ce scénario et
avec les règles RMU qu'on va simplifier pour les jeu-vidéoïser ». Façon Tales of Maj'Eyal, en hexagones, sur les lieux
du livre. Cadrage : https://claude.ai/artifact/5qJ8XzUXKZHhDLcESUKubK

- **L'histoire** est celle du livre : le jeu lit `../histoires/malvoran.json` et fait tourner `../src/moteur.js` tel quel
  (`src/moteur.ts`). Le livre reste la seule source ; son validateur le garde.
- **Les lieux** (`src/lieu.ts`) sont tirés de la page « carrefour » (`hub`) de chaque lieu : ses choix deviennent des
  bâtiments, des pierres, un lavoir… où l'on marche, ses routes des sorties au bord. Même dessin à chaque visite.
- **Les combats** (`src/combat.ts`) se jouent sur la carte du lieu, avec les chiffres du livre (d100 ouvert, réussi à
  101, dégâts de l'arme + 1 par 10 au-delà, critique à 50 au-delà) et le coup du héros du livre lui-même (`heroStrike`).

Choix du jeu (pas des règles RMU) : un tour = jusqu'à 4 cases puis une action ; +15 de flanc, +30 dans le dos ; tir à
10 cases en ligne libre ; initiative tirée une fois (d100 ouvert + moitié du Combat) ; les compagnons jouent seuls pour
l'instant.

```sh
npm install
npm run dev        # http://localhost:5173
npm test           # règles et lieux (vitest)
npm run build && npm run essai   # une partie d'essai du prologue dans Chromium, captures dans captures/
```
