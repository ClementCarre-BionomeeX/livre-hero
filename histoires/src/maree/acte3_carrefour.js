// Les Fils de la Marée · act III, the crossroads: the Night of the Lanterns, three books played in the order the reader
// picks, from eight in the evening to midnight. Each chapter ends with fx { flag: "ch3:<hero>" } and comes back here.
// Who goes first acts first: Léonce saved or silenced, Nella out of the Tour or still in it, a key brought or lost,
// and the others find it. When all three are done, midnight (minuit.js): the coffer, the testimony, the vote.
function done(h) { return { has: "ch3:" + h }; }
var ALL = { all: [done("sevan"), done("jasse"), done("oriane")] };
module.exports = {
  C3: { act: "III", title: "La Nuit des Lanternes", hub: true, noLead: true, backName: "la Nuit des Lanternes",
    text: [
      { first: true, text: "La troisième nuit des Hautes-Eaux, l'eau monte jusqu'aux marches du palais du Conseil. On allume une lanterne à chaque fenêtre de la ville, des milliers, et la lagune devient un second ciel posé sous le premier. À minuit, sur la tour du palais, on allume la plus grande, celle du Doyen. Cette année, personne n'a le droit de l'allumer." },
      { first: true, text: "La loi est claire. Avant que la grande lanterne brûle, on tire le testament de la Doyenne du coffre aux trois serrures, et on le lit. Puis le Conseil vote. Si personne n'a vingt et une voix quand la marée tourne, à une heure, le siège reste vide jusqu'aux Hautes-Eaux suivantes, et la ville attend un an." },
      { first: true, text: "Trois personnes ont quatre heures. Celle que tu suis la première agit la première. Les deux autres trouveront la nuit telle qu'elle l'a laissée." },
      { if: { all: [done("sevan"), { not: done("jasse") }, { not: done("oriane") }] }, text: "Pendant que Sévan Aldric marchait dans la ville aux lanternes, un passeur attendait la marée, et une secrétaire comptait des voix." },
      { if: { all: [done("jasse"), { not: done("sevan") }, { not: done("oriane") }] }, text: "Pendant que Jasse Ferrant faisait sa nuit sur l'eau, un médecin et une secrétaire faisaient la leur, aux mêmes heures." },
      { if: { all: [done("oriane"), { not: done("sevan") }, { not: done("jasse") }] }, text: "Pendant qu'Oriane Valcor attendait au palais, un médecin et un passeur traversaient la ville, chacun de son côté." },
      { if: { count: [done("sevan"), done("jasse"), done("oriane")], min: 2, max: 2 }, text: "Il reste quatre heures à raconter. Elles ont eu lieu en même temps que les autres." },
      { if: ALL, text: "Minuit approche. Sur les marches du palais, l'eau lèche la troisième pierre. Les conseillers montent, un par un, les pieds mouillés." },
    ],
    choices: [
      { label: "Sévan Aldric · la Nuit des Lanternes", hide: done("sevan"), fx: { team: "sevan" }, to: "S3", big: true },
      { label: "Jasse Ferrant · la Nuit des Lanternes", hide: done("jasse"), fx: { team: "jasse" }, to: "J3", big: true },
      { label: "Oriane Valcor · la Nuit des Lanternes", hide: done("oriane"), fx: { team: "oriane" }, to: "O3", big: true },
      { label: "Minuit", if: ALL, why: "Les trois nuits doivent d'abord être racontées.", to: "Z", big: true },
    ] },
};
