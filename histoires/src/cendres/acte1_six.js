// Act I · six roads, played in chapters. At the end of each chapter the reader comes back to the crossroads
// (C_carrefour) and picks whom to follow next; each hero resumes where the reader left them, and reads what the
// others did. Rounds go in lockstep: nobody starts chapter k before every written road has finished chapter k-1.
// A chapter end does fx { flag: "ch:<hero>:<k>", resume: <where this hero picks up> } then goes to C_carrefour.
var TEAMS = { enfant: "enfant", ysolde: "ysolde", pie: "pie", hylas: "hylas", corbe: "corbe", lisandre: "lisandre" };
// The written chapters of each road, in order (label shown at the crossroads).
var CHAPTERS = {
  enfant: { name: "L'enfant de Sauvelune", ch: ["Sauvelune · la fête des foins, la première neige", "La route de Pallanche"] },
  ysolde: { name: "Ysolde de Brenne", ch: ["Brenne · un ordre de la reine, le village de Hautvent", "La route de Varre · une colonne de cent vingt noms"] },
  hylas: { name: "Maître Hylas", ch: ["La Chancellerie des Noms · un registre interdit", "Le vin de Corvanne · la veille de la Fête"] },
  lisandre: { name: "Lisandre", ch: ["La cour de Vasselin · une ballade commandée", "Le cortège · la grande salle de la tour"] },
  corbe: { name: "Corbe", ch: ["Les Hautes-Combes · un rite au bord de la neige", "La crête des Combes · la porte du Nord"] },
  pie: { name: "Pie", ch: ["Les toits de Pallanche · une sœur à retrouver", "La tour noire · la veille de la Fête"] },
};
var SOON = [
];
var WRITTEN = Object.keys(CHAPTERS);
function done(h, k) { return { has: "ch:" + h + ":" + k }; }
function chapterChoices() {
  var out = [];
  WRITTEN.forEach(function (h) {
    CHAPTERS[h].ch.forEach(function (label, i) {
      var k = i + 1, hide = k > 1 ? { any: [done(h, k), { not: done(h, k - 1) }] } : done(h, k);
      var others = WRITTEN.filter(function (o) { return o !== h; }).map(function (o) { return done(o, k - 1); });
      out.push({ label: CHAPTERS[h].name + " · chapitre " + k + " · " + label, hide: hide,
        if: k > 1 ? { all: others } : undefined, why: "Les autres chemins doivent d'abord arriver jusque-là.",
        fx: { team: h }, to: "@team", big: true });
    });
  });
  SOON.forEach(function (label) { out.push({ label: label, if: { has: "jamais:ecrit" }, why: "Ce chemin s'écrit encore.", to: "C_carrefour" }); });
  var last = WRITTEN.map(function (h) { return done(h, CHAPTERS[h].ch.length); });
  out.push({ label: "La Nuit des Cloches", if: { all: last }, why: "Tous les chemins doivent d'abord arriver à Pallanche.", to: "C_nuit", big: true });
  out.forEach(function (c) { if (c.if === undefined) delete c.if; });
  return out;
}

module.exports = {
  C_six: { act: "I", title: "Six chemins",
    text: [
      "Six personnes, en ce mois de juillet, ne savent pas encore qu'elles ont rendez-vous. Elles s'ignorent. Leur seul point commun : il va neiger sur elles, et qu'elles vont s'en souvenir.",
      "Le livre les suit par chapitres. À la fin de chacun, c'est toi qui choisis qui suivre : chacun reprend là où tu l'as laissé. Ce que fait l'un, les autres le trouveront sur leur route : une gourde tendue, une porte laissée ouverte, un homme qu'on a laissé partir ou qu'on a pendu.",
      "Tous les chemins commencent le même jour de juillet, aux quatre coins d'Esquarre. Tous mènent à Pallanche, la ville aux cent cloches, pour la Fête des Noms.",
    ],
    choices: [{ label: "Ouvrir le livre", fx: { assign: TEAMS }, to: "C_carrefour", big: true }] },

  // The crossroads between chapters: a few lines that echo what the last chapter changed, then the choice.
  C_carrefour: { act: "I", title: "Les chemins",
    text: [
      { if: { not: { any: [done("enfant", 1), done("ysolde", 1)] } }, text: "Le onze juillet, au matin. À Sauvelune, dans la montagne, on sort les tréteaux pour la fête des foins. À Brenne, sur la frontière de l'Est, un messager de la reine galope depuis deux jours." },
      { if: { all: [done("enfant", 1), { not: done("ysolde", 1) }] }, text: "La même nuit, à quatre jours de cheval vers l'est, il n'a pas neigé. Dans la forteresse de Brenne, une femme a dormi trois heures, tout habillée, l'épée contre le lit, comme toutes les nuits depuis quinze ans. Ce matin, un messager de la reine va frapper à sa porte." },
      { if: { all: [done("ysolde", 1), { not: done("enfant", 1) }] }, text: "Pendant que la colonne se forme sur le pré de Hautvent, à l'autre bout du royaume, dans un village de montagne, on danse encore. Il va neiger cette nuit-là. Personne ne le sait." },
      { if: { all: [done("ysolde", 1), { not: done("enfant", 2) }, { has: "thibaut:sort=libre" }] }, text: "Sur la rive de Corvanne, un déserteur et sa famille marchent vers l'est. Ils ne reviendront pas. C'est la seule chose qui finira bien, cette semaine." },
      { if: { all: [done("ysolde", 1), { not: done("enfant", 2) }, { has: "thibaut:sort=livre" }] }, text: "Au bas d'une liste, d'une écriture minuscule, un cent dix-neuvième nom vient d'être ajouté. Celle qui l'a laissé écrire ne l'oubliera pas." },
      { if: { all: [done("ysolde", 1), { not: done("enfant", 2) }, { has: "hautvent:sang" }] }, text: "Il y a du sang dans la poussière de Hautvent, et deux tisserands qu'on a dû porter jusqu'à la colonne. Sur la route de Pallanche, quelqu'un les verra passer." },
      { if: { all: [done("enfant", 2), { not: done("ysolde", 2) }] }, text: "L'enfant de Sauvelune dort dans une auberge de la rue des Cordiers. À quelques lieues de là, au pied du col de Varre, une colonne s'arrête pour la nuit, et une chevalière ne dort pas." },
      { if: { all: [done("ysolde", 2), { not: done("enfant", 2) }] }, text: "Ysolde attend la Nuit des Cloches dans Pallanche. Sur la route des montagnes, quelqu'un marche vers la même ville, avec un nom que plus personne ne connaît." },
      { if: { all: [{ has: "ch:pie:1" }, { not: { has: "ch:pie:2" } }] }, text: "Rue des Cordiers, sous les tuiles, quelqu'un a étalé sur un plancher tout ce qu'il sait d'une tour sans fenêtres." },
      { if: { all: [{ has: "ch:hylas:1" }, { not: { has: "ch:hylas:2" } }] }, text: "Au septième étage de la tour noire, côté nord, un vieil homme est allongé dans un noir qui est, pour lui, le même que le jour." },
      { if: { all: [{ has: "ch:corbe:1" }, { not: { has: "ch:corbe:2" } }] }, text: "Au bord du blanc, sur les Hautes-Combes, quelqu'un dort roulé dans une peau de renne, un arc contre la poitrine." },
      { if: { all: [{ has: "ch:lisandre:1" }, { not: { has: "ch:lisandre:2" } }] }, text: "Sur la route de la vallée, quarante voitures montent vers Pallanche au son des grelots." },
      "Qui suis-tu ?",
    ],
    choices: chapterChoices() },

  C_nuit: { act: "I", title: "La veille de la Nuit des Cloches",
    text: [
      "Les chemins se sont arrêtés à Pallanche, à quelques rues les uns des autres.",
      { if: { all: [{ has: "croise:parle_ysolde" }, { has: "ysolde:voie=obeit" }] }, text: "L'enfant a parlé de la neige à une chevalière qui a livré sa colonne à la tour noire. Elle s'en souvient. C'est bien la seule." },
      { if: { all: [{ has: "croise:eau_rodric" }, { not: { has: "ysolde:voie=obeit" } }] }, text: "Quelque part dans la ville, un géant aux trois cloches est libre, et il n'a pas oublié la gourde qu'on lui a tendue sur la route des Cloches." },
      { if: { has: "pie:choix=liste" }, text: "Dans un grenier de la rue des Cordiers, une page arrachée attend que quelqu'un veuille bien la lire." },
      { if: { has: "pie:choix=linette" }, text: "Dans un grenier de la rue des Cordiers, une petite fille en gris dort, les pieds froids." },
      { if: { has: "hylas:voie=attendre" }, text: "Chez la mère Tissot, un vieil aveugle attend, la clé de la taverne dans la main." },
      { if: { has: "corbe:voie_bran=donne" }, text: "Dans une écurie de la porte du Nord, un garde en noir dort dans la paille, la main d'une sauvageonne dans la sienne." },
      { if: { has: "lisandre:voie=autre" }, text: "Dans une chambre du palais de la Couronne, face à la tour, une chanteuse de cour regarde la nuit sans fermer les rideaux." },
    ],
    choices: [{ label: "La Nuit des Cloches", to: "N_soir", big: true }] },

};
