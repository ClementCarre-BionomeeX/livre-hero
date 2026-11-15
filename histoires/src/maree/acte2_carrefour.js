// Les Fils de la Marée · act II, the crossroads: the day of masks, three books played in the order the reader picks.
// Each chapter ends with fx { flag: "ch2:<hero>" } and comes back here; who went first is what the others find (Léonce
// gone or taken, a key passed on, a cell visited). When all three are done, the night of the Lanterns (act III).
function done(h) { return { has: "ch2:" + h }; }
var ALL = { all: [done("sevan"), done("jasse"), done("oriane")] };
module.exports = {
  C2: { act: "II", title: "Le jour des masques", hub: true, noLead: true, backName: "le jour des masques",
    text: [
      { first: true, text: "Le deuxième jour des Hautes-Eaux, Escalombre se masque. C'est la loi la plus ancienne de la lagune, plus vieille que le Conseil : du lever au coucher du soleil, personne n'a de visage. Les pêcheurs portent des têtes de mouette, les conseillers des loups de velours, les enfants des museaux de chat en carton. On dit que c'est pour tromper la peste, qui ne sait plus qui emporter." },
      { first: true, text: "On dit aussi que c'est le jour où l'on fait ce qu'on n'oserait pas faire avec son visage." },
      { first: true, text: "Trois personnes se réveillent dans la ville masquée. Ce qu'elles font aujourd'hui arrive à la même heure, en trois endroits. C'est toi qui décides par qui commencer : celui que tu suis le premier agit le premier, et les autres trouveront ce qu'il a laissé." },
      { if: { all: [done("sevan"), { not: done("jasse") }, { not: done("oriane") }] }, text: "Pendant que Sévan Aldric vivait sa journée, à l'autre bout de la lagune, un passeur et une secrétaire vivaient la leur, aux mêmes heures." },
      { if: { all: [done("jasse"), { not: done("sevan") }, { not: done("oriane") }] }, text: "Pendant que Jasse Ferrant vivait sa journée, au palais et au Temple, deux autres vivaient la leur, aux mêmes heures." },
      { if: { all: [done("oriane"), { not: done("sevan") }, { not: done("jasse") }] }, text: "Pendant qu'Oriane Valcor vivait sa journée, un médecin et un passeur vivaient la leur, aux mêmes heures." },
      { if: { count: [done("sevan"), done("jasse"), done("oriane")], min: 2, max: 2 }, text: "Il reste une journée à raconter. Elle s'est passée en même temps que les deux autres." },
      { if: ALL, text: "Le soleil se couche sur les Passes. Les masques tombent. Demain soir, la Nuit des Lanternes." },
    ],
    choices: [
      { label: "Sévan Aldric · le jour des masques", hide: done("sevan"), fx: { team: "sevan" }, to: "S2V", big: true },
      { label: "Jasse Ferrant · le jour des masques", hide: done("jasse"), fx: { team: "jasse" }, to: "J2V", big: true },
      { label: "Oriane Valcor · le jour des masques", hide: done("oriane"), fx: { team: "oriane" }, to: "O2V", big: true },
      { label: "La Nuit des Lanternes", if: ALL, why: "Les trois journées doivent d'abord être racontées.", to: "C3", big: true },
    ] },
};
