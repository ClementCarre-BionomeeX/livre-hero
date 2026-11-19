// La Super Retraite · the three crossroads, one at dawn of each day. At two, each player takes his own hero's chapter
// here (the other one is closed to him), comes back when it ends, and waits; once both chapters are told, the world is
// merged and « La suite » opens. Alone, the reader tells both, in the order he likes. What one hero did in a chapter
// reaches the other in the next one.
function done(n, h) { return { has: "ch" + n + ":" + h }; }
function both(n) { return { all: [done(n, "barnabe"), done(n, "ernestine")] }; }
function hub(n, act, title, text, next, nextLabel) {
  return { act: act, title: title, place: "carrefour", hub: true, noLead: true, backName: title.toLowerCase(), text: text,
    choices: [
      { label: "Barnabé · " + ["le fournil de la rue des Mitrons", "le pain modèle", "la Baguette Éternelle"][n - 1], hide: done(n, "barnabe"), fx: { team: "barnabe" }, to: "B" + n + "_" + ["fournil", "aube", "aube"][n - 1], big: true },
      { label: "Ernestine · " + ["la forge de l'oued", "la porte du coffre", "la clé du coffre"][n - 1], hide: done(n, "ernestine"), fx: { team: "ernestine" }, to: "E" + n + "_" + ["forge", "aube", "aube"][n - 1], big: true },
      { label: nextLabel, if: both(n), why: "Les deux journées doivent d'abord être racontées.", to: next, big: true },
    ] };
}
var C1 = hub(1, "I", "Le 29 décembre", [
  { first: true, text: "Le 29 décembre 1899, à quatre heures du matin, Mirevaux dort sous un ciel de verre noir. Le gel a blanchi la fontaine du Carrefour. Sur tous les murs, les affiches de la Caisse de la Super Retraite montrent un vieil homme rond, en chapeau neuf, qui sourit au siècle prochain." },
  { first: true, text: "Deux lumières seulement brillent dans la ville. À l'ouest, rue des Mitrons, la bouche rouge d'un four à pain. À l'est, au faubourg de l'oued, le feu d'une forge. Entre les deux, il y a le Carrefour, la banque de marbre, et trois jours avant le siècle." },
  { first: true, text: "À deux, chacun prend son héros. Seul, tu choisis par qui commencer : ce que l'un fait aujourd'hui, l'autre le trouvera demain." },
  { if: { all: [done(1, "barnabe"), { not: done(1, "ernestine") }] }, text: "Pendant que le four de la rue des Mitrons chauffait, la forge de l'oued, elle aussi, a vécu sa journée." },
  { if: { all: [done(1, "ernestine"), { not: done(1, "barnabe") }] }, text: "Pendant que la forge de l'oued soufflait, le four de la rue des Mitrons, lui aussi, a vécu sa journée." },
  { if: both(1), text: "La nuit du 29 au 30 décembre s'achève. Il reste deux jours au siècle." },
], "C2", "Le 30 décembre");
C1.fx = { assign: { barnabe: "barnabe", ernestine: "ernestine" } };
var C2 = hub(2, "II", "Le 30 décembre", [
  { first: true, text: "Le 30 décembre se lève gris et dur. Le gel tient les gouttières. Sur la porte de la Banque Sorbier, un employé colle une affiche fraîche : *Plus qu'un jour avant le Siècle ! Grande Assemblée des Cotisants, Salle des Fêtes, demain soir. Rafraîchissements offerts.*" },
  { first: true, if: { has: "pacte=allies" }, text: "Cette nuit, au faubourg, un boulanger et une forgeronne ont parlé jusqu'à deux heures du matin, assis sur l'enclume, de pain, d'acier et de siècles. Ils se sont quittés sans savoir s'ils étaient associés ou amis. Ils ont rendez-vous ce soir, à la forge, pour la coulée." },
  { first: true, if: { has: "pacte=rivaux" }, text: "Cette nuit, au faubourg, un boulanger et une forgeronne se sont quittés fâchés, chacun persuadé d'avoir le dernier mot. Ils ont pourtant compris la même chose, chacun de son côté : le pain sans l'acier meurt le soir, l'acier sans le pain ressemble à un gourdin. Aucun des deux ne le dira le premier." },
  { if: { all: [done(2, "barnabe"), { not: done(2, "ernestine") }] }, text: "Pendant que Barnabé cuisait sa baguette et courait la ville, Ernestine a passé la même journée, de la banque à la forge." },
  { if: { all: [done(2, "ernestine"), { not: done(2, "barnabe") }] }, text: "Pendant qu'Ernestine posait sa porte et chauffait son creuset, Barnabé a passé la même journée, du fournil au Carrefour." },
  { if: both(2), text: "La nuit de la coulée s'achève. Demain, le siècle." },
], "C3", "Le 31 décembre");
var C3 = hub(3, "III", "Le 31 décembre", [
  { first: true, text: "Le 31 décembre 1899 est un dimanche. Les cloches des trois églises sonnent la messe à des heures légèrement différentes, comme toujours, et Mirevaux se réveille dans un vacarme de bronze." },
  { first: true, if: { has: "baguettes=deux" }, text: "Dans la forge de l'oued, sur un chiffon propre, refroidissent deux baguettes d'acier blanc. Elles brillent comme des miroirs. Elles ont des grignes, des bulles, une croûte. Elles ne passeront pas." },
  { first: true, if: { not: { has: "baguettes=deux" } }, text: "Dans la forge de l'oued, sur un chiffon propre, refroidit une baguette d'acier blanc. Elle brille comme un miroir. Elle a des grignes, des bulles, une croûte. Elle ne passera pas." },
  { first: true, text: "À dix heures du soir, les pains du concours doivent être remis à la Salle des Fêtes. À minuit, le siècle change. À minuit quarante, le train de nuit part pour la capitale." },
  { if: { all: [done(3, "barnabe"), { not: done(3, "ernestine") }] }, text: "Pendant que Barnabé traversait la dernière journée du siècle, Ernestine traversait la sienne, une clé dans la poche." },
  { if: { all: [done(3, "ernestine"), { not: done(3, "barnabe") }] }, text: "Pendant qu'Ernestine traversait la dernière journée du siècle, Barnabé traversait la sienne, une baguette sous le bras." },
  { if: both(3), text: "Il est onze heures et demie du soir. Toute la ville marche vers la Salle des Fêtes." },
], "Z_minuit", "Minuit");
module.exports = { C1: C1, C2: C2, C3: C3 };
