// Act II · the routes cross: on the hill above Pallanche the six split into two companies of three. Corbe goes north
// (her clan), Lisandre south (her court); the reader chooses who goes with whom among the four others. Then the book
// alternates between the companies by chapters (C2_carrefour), in lockstep, like the roads of Act I.
var OTHERS = ["enfant", "ysolde", "pie", "hylas"];
var NAMES = { enfant: "l'enfant de Sauvelune", ysolde: "Ysolde", pie: "Pie", hylas: "Maître Hylas" };
// Each company's chapters, in order; the north is led by Corbe, the south by Lisandre.
var CHAPTERS = {
  nord: { name: "La compagnie du Nord", lead: "corbe", ch: ["La montée aux Combes", "La grotte des Corbeaux", "Le moutier des Veilleurs", "Le cirque des Moissons", "Le col de l'Ourse"] },
  sud: { name: "La compagnie du Sud", lead: "lisandre", ch: ["La route de Vasselin", "La reine de nuit", "Le Tournoi de la Paix", "La grâce de la reine", "Le registre noir"] },
};
function done(t, k) { return { has: "ch2:" + t + ":" + k }; }
function splits() {
  var out = [];
  for (var i = 0; i < OTHERS.length; i++) for (var j = i + 1; j < OTHERS.length; j++) {
    var north = [OTHERS[i], OTHERS[j]], south = OTHERS.filter(function (h) { return north.indexOf(h) < 0; });
    var assign = { corbe: "nord", lisandre: "sud", rodric: north.indexOf("ysolde") >= 0 ? "nord" : "sud", linette: north.indexOf("pie") >= 0 ? "nord" : "sud" };
    north.forEach(function (h) { assign[h] = "nord"; }); south.forEach(function (h) { assign[h] = "sud"; });
    out.push({ label: "Au nord avec Corbe : " + NAMES[north[0]] + " et " + NAMES[north[1]] + ". Au sud avec Lisandre : " + NAMES[south[0]] + " et " + NAMES[south[1]] + ".",
      fx: { assign: assign, flag: north.map(function (h) { return "nord:" + h; }).concat(south.map(function (h) { return "sud:" + h; })) }, to: "C2_carrefour" });
  }
  return out;
}
function chapterChoices() {
  var out = [], teams = Object.keys(CHAPTERS);
  teams.forEach(function (t) {
    CHAPTERS[t].ch.forEach(function (label, i) {
      var k = i + 1, hide = k > 1 ? { any: [done(t, k), { not: done(t, k - 1) }] } : done(t, k);
      var c = { label: CHAPTERS[t].name + " · chapitre " + k + " · " + label, hide: hide, fx: { team: t, lead: CHAPTERS[t].lead, leadQuiet: true }, to: "@team", big: true };
      if (k > 1) { c.if = { all: teams.filter(function (o) { return o !== t; }).map(function (o) { return done(o, k - 1); }) }; c.why = "L'autre compagnie doit d'abord arriver jusque-là."; }
      out.push(c);
    });
  });
  var last = teams.map(function (t) { return done(t, CHAPTERS[t].ch.length); });
  out.push({ label: "Le col de l'Ourse : les deux compagnies se retrouvent", if: { all: last }, why: "Les deux compagnies doivent d'abord arriver jusque-là.", to: "II_R_col", big: true });
  return out;
}
module.exports = {
  II_conseil: { act: "II", title: "Sur la colline", place: "collines", noLead: true,
    text: [
      "Le soleil est haut, maintenant. Vous êtes toujours assis dans l'herbe, au sommet de la colline, au-dessus d'une ville blanche. Personne n'a dormi. Quelqu'un a partagé un pain. Quelqu'un d'autre a dit, il y a une heure : « Et maintenant ? » et personne n'a répondu.",
      "C'est Corbe qui parle la première. Elle montre le nord, les Hautes-Combes, à l'horizon, blanches jusqu'aux crêtes. « Ça vient de là. Du col de l'Ourse. Mon clan l'attend depuis cent ans. Si quelqu'un sait ce que c'est, c'est eux. Ou les morts. »",
      { if: { has: "lisandre:lettre" }, text: "Lisandre sort de son corsage une lettre cachetée de noir et la pose dans l'herbe. Personne ne la touche. « Il est à Vasselin, dit-elle. Ou il y sera ce soir. Il garde tout, il l'écrit. Et la reine lui doit quelque chose qu'elle ne se rappelle plus. »" },
      { if: { not: { has: "lisandre:lettre" } }, text: "Lisandre montre le sud, la vallée de la Pallante, la route de la cour. « La reine rentre à Vasselin. Mordace la suivra : il ne la quitte plus depuis le printemps. Tout ce qu'il sait, il l'écrit. Et ce qu'il écrit, il le garde près de lui. »" },
      { if: { not: { has: "hylas:oublie_enfant" } }, text: "Hylas ne dit rien. Il a la tête tournée vers le nord, lui aussi. Puis, à voix basse : « Le registre des Fondateurs. Il ne l'a pas laissé dans la tour. Pas cette nuit. »" },
      { if: { has: "hylas:oublie_enfant" }, text: "Hylas ne dit rien. Il tourne la tête vers l'enfant de Sauvelune, de temps en temps, comme on vérifie qu'une porte est fermée." },
      "Il faut aller des deux côtés à la fois. Il faut se séparer. Le nord avec Corbe, qui connaît les Combes ; le sud avec Lisandre, qui connaît la cour. Et les quatre autres, deux de chaque côté.",
    ],
    choices: splits() },

  C2_carrefour: { act: "II", title: "Les deux compagnies", noLead: true,
    text: [
      { if: { not: { any: [done("nord", 1), done("sud", 1)] } }, text: "Vous vous séparez au pied de la colline, à l'endroit où la route se divise. Personne ne dit adieu. Vous vous êtes promis de vous retrouver au col de l'Ourse, avant la fin du mois. Personne ne sait si c'est possible." },
      { if: { all: [done("nord", 1), { not: done("sud", 1) }] }, text: "Pendant que la compagnie du Nord monte vers le camp du Corbeau, celle du Sud descend la vallée de la Pallante, entre des vignes où personne ne vendange plus." },
      { if: { all: [done("sud", 1), { not: done("nord", 1) }] }, text: "Pendant que la compagnie du Sud entre à Vasselin, celle du Nord marche sur la crête, avec le blanc à sa gauche." },
      { if: { all: [done("nord", 1), done("sud", 1), { not: { any: [done("nord", 2), done("sud", 2)] } }] }, text: "Au Sud, un billet plié en huit attend Lisandre à l'Ancre. Au Nord, Askel attend sa fille devant sa tente, chaussée pour la marche." },
      { if: { all: [done("nord", 2), done("sud", 2), { not: { any: [done("nord", 3), done("sud", 3)] } }] }, text: "Au Nord, une ombre grande comme un clocher a traversé le lac noir vers l'est. Au Sud, on monte les tribunes du pré du Roi." },
      { if: { all: [done("nord", 3), done("sud", 3), { not: { any: [done("nord", 4), done("sud", 4)] } }] }, text: "Au Sud, la mêlée est à midi. Au Nord, les traces du géant montent vers les cirques où les bêtes vont mourir." },
      { if: { all: [done("nord", 4), done("sud", 4), { not: { any: [done("nord", 5), done("sud", 5)] } }] }, text: "Au Nord, les tambours du clan montent vers le col. Au Sud, une Tour reste allumée toute la nuit au-dessus de Vasselin." },
      "Quelle compagnie suis-tu ?",
    ],
    choices: chapterChoices() },

  Z2_suite: { act: "II", title: "Fin de l'Acte II",
    text: [
      "Ici s'achève l'Acte II. Le royaume s'est déchiré au col de l'Ourse, et le groupe est dispersé.",
      { if: { souvenirs: "enfant", max: 6 }, text: "L'enfant de Sauvelune a déjà donné une part de sa vie à la neige." },
    ],
    choices: [{ label: "Acte III · L'Outre-Blanc", to: "III_reveil", big: true }] },
};
