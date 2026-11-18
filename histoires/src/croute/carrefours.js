// La Grande Fonte · the crossroads of acts II and III: the two days read in the order the reader picks. Each chapter
// ends with fx { flag: "ch2:<hero>" } (or ch3) and comes back here; who goes first acts first, and the other finds
// what was left (the offer at the boutique, the Doux appeased or beaten, the baker denounced or invited).
function done(n, h) { return { has: "ch" + n + ":" + h }; }
var ALL2 = { all: [done(2, "ruines"), done(2, "octave")] };
var ALL3 = { all: [done(3, "ruines"), done(3, "octave")] };
module.exports = {
  C2: { act: "II", title: "Le deuxième jour", hub: true, noLead: true, backName: "le deuxième jour",
    text: [
      { first: true, text: "Le deuxième jour de la canicule se lève sur le désert à quarante et un degrés. À l'ouest, à Mirevaux, les Demi-Sel chargent ce qui reste de leur dieu sur un camion. À l'est, au Domaine, une petite porte s'ouvre dans un mur, et un majordome en sort, assis sur une moto sans moteur que deux valets poussent." },
      { first: true, text: "Entre les deux, il y a la route, droite comme une règle, et au kilomètre 66, une boutique de marbre où ils arriveront tous les deux au crépuscule." },
      { first: true, text: "C'est toi qui choisis par qui commencer. Celui que tu suis le premier agit le premier ; l'autre trouvera sur sa route ce qu'il aura laissé." },
      { if: { all: [done(2, "ruines"), { not: done(2, "octave") }] }, text: "Pendant que le convoi des Demi-Sel traversait le désert, un majordome le traversait dans l'autre sens, aux mêmes heures." },
      { if: { all: [done(2, "octave"), { not: done(2, "ruines") }] }, text: "Pendant qu'Octave traversait le désert, le convoi des Demi-Sel le traversait dans l'autre sens, aux mêmes heures." },
      { if: ALL2, text: "La nuit tombe sur le kilomètre 66. Demain, les grilles." },
    ],
    choices: [
      { label: "Ruines · la route des Demi-Sel", hide: done(2, "ruines"), fx: { team: "ruines" }, to: "R2_aube", big: true },
      { label: "Octave · la route du majordome", hide: done(2, "octave"), fx: { team: "octave" }, to: "O2_aube", big: true },
      { label: "Le troisième jour", if: ALL2, why: "Les deux routes doivent d'abord être racontées.", to: "C3", big: true },
    ] },
  C3: { act: "III", title: "Le troisième jour", hub: true, noLead: true, backName: "le troisième jour",
    text: [
      { first: true, text: "Le troisième jour, il fait quarante-quatre degrés à l'ombre, et il n'y a plus d'ombre. Devant les grilles dorées du Domaine, un camion s'arrête, chargé d'un ange qui n'a presque plus de forme. Derrière les grilles, sur le grand perron, des valets dressent les tables du gala de la Super Retraite." },
      { first: true, text: "Le gala commence au coucher du soleil. Les grilles sont entre les deux mondes, hautes de six mètres, dorées à la feuille. Ce qui se passe d'un côté, l'autre le voit à travers les barreaux." },
      { first: true, text: "C'est toi, encore, qui choisis par qui commencer." },
      { if: { all: [done(3, "ruines"), { not: done(3, "octave") }] }, text: "Devant les grilles, le soleil descend. Derrière elles, un majordome a passé le même après-midi." },
      { if: { all: [done(3, "octave"), { not: done(3, "ruines") }] }, text: "Derrière les grilles, le soleil descend. Devant elles, un motard a passé le même après-midi." },
      { if: ALL3, text: "Le soleil touche l'horizon. Le gala commence." },
    ],
    choices: [
      { label: "Ruines · devant les grilles", hide: done(3, "ruines"), fx: { team: "ruines" }, to: "R3_arrivee", big: true },
      { label: "Octave · derrière les grilles", hide: done(3, "octave"), fx: { team: "octave" }, to: "O3_retour", big: true },
      { label: "Le coucher du soleil", if: ALL3, why: "Les deux après-midi doivent d'abord être racontés.", to: "Z_soleil", big: true },
    ] },
};
