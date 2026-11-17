// L'Île Folle-Aiguille · act V, the crossroads of the treasure. Before the first carrefour, a branch decides whether
// anyone among the loyal knows how to correct the bearings (correction:connue: the deciphered parchment, Brother
// Calixte's table, the pilot of Brisegrève, or the hermit himself), and whether the mutineers know it too (the pilot's
// pact with the cook: correction:mutins). Three chapters: V.1 the deviation (the child at the singing rock, the
// doctor at the altar), V.2 under the Wells (the child with the hermit, the doctor through the tunnel, or in a second
// reading the cook), V.3 the departure (the child or the doctor), which ends the book.
function played(ch, who) { return { has: "regard:" + ch + "=" + who }; }
var CORR = { any: [{ has: "correction:parchemin" }, { has: "correction:calixte" }, { item: "table_calixte" }, { has: "brousse:secret" }, { marin: "brousse", is: "abord" }, { has: "dagrel:aveu_mousse" }] };
module.exports = {
  passages: {
    C5: { act: "V", title: "Le trésor", branch: [
      { if: CORR, fx: { flag: "correction:connue" }, to: "C5_mutins" },
      { to: "C5_mutins" },
    ] },
    C5_mutins: { act: "V", title: "Le trésor", branch: [
      { if: { all: [{ has: "brousse:pacte" }, { not: { has: "fargue:tue_brousse" } }] }, fx: { flag: "correction:mutins" }, to: "C5_carrefour" },
      { to: "C5_carrefour" },
    ] },
    C5_carrefour: { act: "V", title: "La déviation", place: "sylve", hub: true, noLead: true, backName: "Folle-Aiguille", ambiance: "nature",
      text: [
        { first: true, text: "Il y a sur Folle-Aiguille, ce matin-là, trois partis, trois copies d'une carte qui ment, et une seule chose que tout le monde sait : l'argent est là, quelque part, sous les pieds, depuis vingt et un ans, et il y a plus de gens sur l'île pour le chercher qu'il n'y a de pelles." },
        { first: true, text: "La carte donne trois relèvements. Trois croix, et à côté de chacune, deux lignes d'une écriture penchée, nette, de capitaine : tel amer au tel quart, tel autre au tel quart. On les a tous lus. On les a tous suivis, pour certains. On a tous creusé dans la vase, dans le sable, dans le vide." },
        { first: true, if: { has: "correction:connue" }, text: "Mais quelqu'un, parmi les vôtres, sait maintenant que l'aiguille ne ment pas : elle se trompe toujours de la même façon, au même endroit. Et qu'on peut la corriger." },
        { first: true, if: { has: "correction:mutins" }, text: "Et quelqu'un, chez les mutins, le sait aussi. Le vieux pilote de Brisegrève a fait un pacte avec le cuisinier, dans les Sargues, et il a tenu parole." },
        { first: true, text: "Ce jour-là, tu le vivras avec l'une ou l'autre." },
        { again: true, text: "Trois partis, trois relèvements, une aiguille qui tourne." },
      ],
      choices: [
        { label: "{joueur} · la pierre qui sonne", fx: { team: "mousse", set: { "regard:V.1": "mousse" } }, to: "A5m_debut", big: true },
        { label: "Victorine Davrigny · l'autel", fx: { team: "victorine", set: { "regard:V.1": "victorine" } }, to: "A5v_debut", big: true },
      ] },
    C5_fin: { act: "V", title: "La déviation", branch: [
      { if: played("V.1", "mousse"), to: "C5_fin_v" },
      { if: { any: [{ has: "correction:connue" }, { has: "dagrel:demasque" }, { has: "pierre:vue" }] }, fx: { flag: ["m5:defaut", "tresor:couchant"] }, to: "C5_fin_v" },
      { fx: { flag: "m5:defaut" }, to: "C5_fin_v" },
    ] },
    C5_fin_v: { act: "V", title: "La déviation", branch: [
      { if: played("V.1", "victorine"), to: "C5_recit" },
      { fx: { flag: ["v5:defaut", "autel:ouvert"] }, to: "C5_recit" },
    ] },
    C5_recit: { act: "V", title: "La déviation", place: "sylve", ambiance: "nuit",
      text: [
        "Le soir de ce jour-là, l'île sait ce qu'elle cachait, à moitié.",
        { if: { all: [{ has: "m5:defaut" }, { has: "tresor:couchant" }] }, text: "{joueur} a trouvé la première cache, à l'ouest, sous un rocher percé que le vent fait chanter : des coffres pourris, et dedans, des piastres, des milliers, noires d'oxyde, qui sont redevenues blanches en une minute sous le pouce." },
        { if: { all: [{ has: "m5:defaut" }, { not: { has: "tresor:couchant" } }] }, text: "{joueur} a suivi les relèvements tels qu'ils sont écrits, et a creusé, comme tout le monde, dans le sable d'une plage où il n'y avait rien." },
        { if: { has: "v5:defaut" }, text: "À la chapelle, on a soulevé la dalle de l'autel. Dessous, il y avait un trou, et le trou était vide, et au fond du trou, un passage s'enfonçait sous la terre, vers le nord, par où quelqu'un, il y a longtemps, avait emporté ce qui s'y trouvait." },
        { if: { has: "fargue:retourne" }, text: "Et le cuisinier a changé de camp, ou plutôt il en a fondé un, à lui seul, avec un couteau de cuisine et un mort." },
        { if: { has: "mousse:otage" }, text: "Et les mutins tiennent l'enfant du Fanal, et l'enfant du Fanal sait où est le reste." },
        "Il reste la troisième croix. Celle du nord. Celle des collines qui fument. Tous les chemins y mènent, désormais : les relèvements corrigés, les galeries, le tunnel de l'autel, et un vieil homme qui sait.",
      ],
      choices: [{ label: "Sous les Puits", to: "C5b", big: true }] },

    C5b: { act: "V", title: "Sous les Puits", place: "puits", hub: true, noLead: true, backName: "les Puits", ambiance: "nuit",
      text: [
        { first: true, text: "Les collines du nord sont rousses le jour, noires la nuit, et toujours chaudes. Des fumées montent des trous. Le sol sonne creux sous le pied, par endroits, comme le plancher d'une maison où il y aurait une cave que personne n'a jamais ouverte." },
        { first: true, text: "Il y en a une. Au fond d'une galerie, derrière un mur, sous une inscription de prêtre. Ici gît le compte de tous." },
        { first: true, text: "Ce jour-là, tu le vivras avec l'un ou l'autre." },
        { again: true, text: "Les collines rousses, les fumées, le sol qui sonne creux." },
      ],
      choices: [
        { label: "{joueur} · le mur", fx: { team: "mousse", set: { "regard:V.2": "mousse" } }, to: "A5n_debut", big: true },
        { label: "Victorine Davrigny · le tunnel", fx: { team: "victorine", set: { "regard:V.2": "victorine" } }, to: "A5w_debut", big: true },
        { label: "Lucien Fargue · le capitaine", second: true, fx: { team: "fargue", set: { "regard:V.2": "fargue" } }, to: "A5f_debut", big: true },
      ] },
    C5b_fin: { act: "V", title: "Sous les Puits", branch: [
      { if: played("V.2", "mousse"), to: "C5b_fin_v" },
      { fx: { flag: "m5b:defaut" }, to: "C5b_fin_v" },
    ] },
    C5b_fin_v: { act: "V", title: "Sous les Puits", branch: [
      { if: played("V.2", "victorine"), to: "C5b_recit" },
      { fx: { flag: "v5b:defaut" }, to: "C5b_recit" },
    ] },
    C5b_recit: { act: "V", title: "Le livre", place: "puits", ambiance: "nuit",
      text: [
        "On a ouvert le mur. Derrière, il y avait l'argent, et le livre, et ceux qui avaient bâti le mur.",
        { if: { has: "livre=baron" }, text: "Le livre de bord de la Maraude est dans les mains du baron Clavières, qui le serre contre sa poitrine comme un enfant serre un jouet qu'on veut lui prendre." },
        { if: { has: "livre=echevins" }, text: "Le livre de bord de la Maraude est cousu dans la doublure de la trousse de Victorine Davrigny, entre le stéthoscope de buis et les lancettes, à l'endroit exact où elle avait cousu la carte, à Morlenc." },
        { if: { has: "livre=brule" }, text: "Le livre de bord de la Maraude n'existe plus. Il a brûlé au fond d'une galerie, page à page, à la flamme d'une lanterne, et la peau de requin a fait en brûlant une odeur de poisson grillé que personne n'oubliera." },
        { if: { has: "livre=fargue" }, text: "Le livre de bord de la Maraude est dans la chemise de Lucien Fargue, contre sa peau, et il le sent à chaque pas, comme une main posée sur son cœur." },
        { if: { has: "livre=dagrel" }, text: "Le livre de bord de la Maraude est retourné à celui qui l'a écrit. Jéricho Dagrel le tient sous son bras, et il sourit, et personne ne sait ce qu'il en fera." },
        { if: { has: "livre=jeanne" }, text: "Le livre de bord de la Maraude est dans la grotte derrière la cascade, entre les mains de Jeanne Brasdefer, qui ne sait pas lire, et qui le fera lire à Morlenc, au premier rang." },
        "Il ne reste qu'à partir. C'est toujours ce qu'il y a de plus difficile, sur une île.",
      ],
      choices: [{ label: "Le départ", to: "C5c", big: true }] },

    C5c: { act: "V", title: "Le départ", place: "anse_morte", hub: true, noLead: true, backName: "l'Anse-Morte", ambiance: "mer",
      text: [
        { first: true, text: "Le vent tourne au nord-est le lendemain, le vent de retour, celui que les marins attendaient depuis l'Anse-Morte sans le dire. Il souffle dans l'œil du rocher, à l'ouest, et le rocher chante, toute la journée, sans s'arrêter, comme une cloche qui sonne un départ." },
        { first: true, text: "Qui part ? Avec quoi ? Sur quel navire ? Et qui reste ? Ce sont les dernières questions de l'île. Ce sont les seules qui comptent, au bout du compte." },
        { first: true, text: "Ce dernier jour, tu le vivras avec l'une ou l'autre." },
        { again: true, text: "Le vent de retour. Le rocher qui chante." },
      ],
      choices: [
        { label: "{joueur} · le départ", fx: { team: "mousse", set: { "regard:V.3": "mousse" } }, to: "A5o_debut", big: true },
        { label: "Victorine Davrigny · le départ", fx: { team: "victorine", set: { "regard:V.3": "victorine" } }, to: "A5x_debut", big: true },
      ] },
  },
  extras: {
    places: {
      rocher: { ambiance: "nature", name: "Le rocher qui sonne", map: "ile", region: "couchant", x: 26, y: 30, desc: "Un rocher rond, isolé sur une pente nue, percé d'un trou où le vent chante." },
      galerie: { ambiance: "nuit", name: "La galerie murée", map: "ile", region: "collines", x: 58, y: 14, desc: "Au fond de la galerie neuve des Puits, un mur de moellons et une inscription latine." },
    },
  },
};
