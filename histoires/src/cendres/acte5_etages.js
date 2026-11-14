// Act V · more floors of the tower of the Greffiers on the last night, off the Bureau des Cessions: the room of the
// erased maps, the greffiers' chapel (where Hylas's name was carved in advance in Act I), and the kitchens where the
// tower's servants still stand. The child leads ("tu").
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  V_e_cartes: P({ title: "La salle des cartes", place: "pallanche",
    text: [
      "Une salle longue, au deuxième étage, où l'on garde les cartes du royaume. Des centaines, sur des tables, aux murs, roulées dans des casiers. Et toutes sont en train de s'effacer. Sous tes yeux. Les noms des villages pâlissent, puis les routes, puis les rivières, et il ne reste que le blanc du vélin, un blanc qui gagne, lentement, du nord vers le sud.",
      "Sur la plus grande carte, au centre de la salle, il ne reste plus que Pallanche, la tour, et un petit cercle de rues autour. Tout le reste est blanc.",
    ],
    choices: [
      { label: "Écrire les noms à la main, de mémoire, sur la grande carte", test: { dom: "savoir", label: "La carte", help: [{ if: { present: "linette" }, v: 20 }, { if: { present: "hylas" }, v: 15 }, { if: { present: "corbe" }, v: 5 }, { if: { item: "carte_orsan" }, v: 10 }] },
        win: { fx: { flag: "v:carte", ep: ["perso", 1500] }, to: "V_e_cartes_ok" }, lose: { to: "V_e_cartes_rate" } },
      { back: "V_t_cessions" },
    ] }),
  V_e_cartes_ok: P({ title: "Les noms", place: "pallanche",
    text: [
      "Tu prends une plume sur une table. Tu écris. Sauvelune, en haut, à gauche. Pont-de-Saule, en dessous. La Sauve, d'un trait. Les Combes. Le moutier. Le col de l'Ourse. Tout ce que tu as traversé, et tout ce que les autres ont traversé, qu'ils te dictent, penchés sur ton épaule : Brenne, Hautvent, Vasselin, la Lisse, Lisse-en-Corvanne.",
      "L'encre tient. Le blanc s'arrête aux noms que vous écrivez, comme la neige s'arrête au bord d'un toit. Il continue partout ailleurs. Mais là où vous avez écrit, il y a quelque chose, de nouveau.",
    ],
    choices: [{ back: "V_t_cessions" }] }),
  V_e_cartes_rate: P({ title: "Le blanc", place: "pallanche",
    text: ["Tu écris Sauvelune. L'encre pâlit avant que tu aies fini le *e*. Tu recommences. Elle pâlit encore. Le blanc va plus vite que ta main. Tu reposes la plume. Tu n'as pas le temps. Il faut monter."],
    choices: [{ back: "V_t_cessions" }] }),

  V_e_chapelle: P({ title: "La chapelle des greffiers", place: "pallanche",
    text: [
      "La petite chapelle de la tour, froide, qui sent la cire. Le mur du fond porte les noms des greffiers morts, trois siècles de plumes gravés dans la pierre.",
      "Les derniers noms ont été gravés cette nuit. La pierre est vive. Il y en a des dizaines. Les dix greffiers du porche. Ceux du scriptorium. Des noms de la ville, aussi, des gens qui n'ont jamais tenu une plume, avec l'année de naissance, un trait, et celle-ci.",
      { if: { has: "hy:mur=dit" }, text: "Le mur a été gratté, en bas, il y a longtemps : des traces de ciseau, là où le frère Gauvain a effacé des noms gravés d'avance. Par-dessus, on en a regravé d'autres." },
      { if: { has: "iii:muette" }, text: "Au-dessus de l'autel, dans le petit clocheton, la cloche de la chapelle est revenue. Fendue de haut en bas. Personne ne l'a raccrochée : elle est là, c'est tout. Quand tu passes la porte, elle sonne une note, une seule, fausse, double, et se tait." },
      { with: "hylas", text: "Hylas pose les mains sur la pierre. Il lit. Il s'arrête, tout en bas. « Le mien, dit-il, très calme. Encore. Il est têtu. » Il continue de lire. Il s'arrête une deuxième fois. Le nom qu'il a trouvé, il le garde pour lui." },
    ],
    choices: [
      { label: "Chercher ton propre nom", fx: { flag: "v:chapelle" }, to: "V_e_chapelle_nom" },
      { back: "V_t_cessions" },
    ] }),
  V_e_chapelle_nom: P({ title: "Deux noms", place: "pallanche",
    text: [
      "Tu cherches. Tu le trouves, en bas, le dernier, la pierre encore poudreuse. Ton nom de Sauvelune. Et à côté, de la même main, l'autre. Celui que ta mère chantait.",
      "Il n'y a pas de date de mort. Il y a une date de naissance, et un trait, et rien après le trait. Il n'a pas su quoi écrire. Ou il attend de voir.",
    ],
    choices: [{ back: "V_t_cessions" }] }),

  V_e_cuisines: P({ title: "Les cuisines de la tour", place: "pallanche",
    text: [
      "Au fond d'un couloir, les cuisines. Une grande pièce voûtée, chaude, la seule pièce chaude de la tour. Le feu brûle. Les marmites fument. Et les cuisiniers, les marmitons, les servantes, une vingtaine, sont immobiles, chacun à son poste, une louche levée, un couteau sur une carotte, une main dans la pâte. Ils sourient. Ils ont cédé aussi.",
      "Sur la grande table, un plateau. Une soupe, du pain, une pomme, préparés pour quelqu'un. Il y a un billet à côté, d'une écriture de cuisinière : *Pour M. le Greffier-Majeur. Il oublie de manger.*",
      { if: { all: [{ has: "hylas:mahaut" }, { present: "hylas" }] }, text: "Hylas fait le tour de la pièce, une main sur chaque épaule immobile. Il s'arrête devant une grosse femme au tablier, une cuillère en bois levée vers un marmiton. « Mahaut, dit-il. Elle criait toujours. » Il lui baisse le bras, doucement, pour qu'elle ne reste pas comme ça." },
      { with: "gaspard", text: "Gaspard regarde le pain. Il le prend, le soupèse, le respire. « Bon pain, dit-il. Elle savait faire. » Il le repose sur le plateau, exactement au même endroit." },
    ],
    choices: [
      { label: "Monter le plateau", fx: { item: "plateau_mordace", flag: "v:plateau" }, to: "V_e_cuisines_plateau" },
      { label: "Manger, et repartir", fx: { pv: 6, food: 2 }, to: "V_t_cessions" },
    ] }),
  V_e_cuisines_plateau: P({ title: "Le plateau", place: "pallanche",
    text: ["Tu prends le plateau. Il est lourd, et la soupe est encore chaude. Tu le prends d'instinct. Tu sais seulement que quelqu'un, dans cette tour, pensait encore à lui ce soir, assez pour lui faire une soupe, et que ça doit bien compter pour quelque chose."],
    choices: [{ back: "V_t_cessions" }] }),
};
