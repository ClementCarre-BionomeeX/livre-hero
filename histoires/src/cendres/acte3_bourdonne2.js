// Act III · two more bells of Bourdonne (the child leads, "tu" masculine), off III_c_ville once the Sonneuse has spoken:
// a leper's hand-bell carried by a man the world chose to forget (iii:lepreux); and a cracked chapel bell lying on the
// cobbles, the Muette of the Chancellery tower, silent twenty years (reads hylas:muette; iii:muette is heard in
// V_e_chapelle).
var A = { act: "III", noLead: true, place: "cloches" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_c_ville" }];
module.exports = {
  III_c_lepreux: P({ title: "La clochette du ladre",
    text: [
      "Dans une rue étroite entre deux clochers, un homme marche, enveloppé d'un manteau gris à capuchon, une clochette à main pendue à la ceinture. Elle sonne à chaque pas. Un son aigre, sec, qu'on n'oublie pas quand on l'a entendu une fois sur une route de campagne. *Attention, il passe.* La cloche d'un lépreux.",
      "Il s'arrête en te voyant. Il recule contre le mur, pour te laisser la rue, comme on le lui a appris. Sous le capuchon, tu ne vois rien. « Il ne faut pas approcher, dit-il. Je sonne pour ça. » Il ne sait plus pourquoi il ne faut pas. Il sait seulement qu'il doit sonner. On a voulu l'oublier, là-haut, de toutes ses forces. On y est arrivé. Mais la cloche, personne n'a pensé à l'oublier.",
    ],
    choices: [
      { label: "Marcher à côté de lui, et sonner sa cloche pour lui", fx: { flag: "iii:lepreux", ep: ["perso", 800] }, to: "III_c_lepreux_marcher" },
      { label: "Lui demander son nom", fx: { ep: ["perso", 300] }, to: "III_c_lepreux_nom" },
    ] }),
  III_c_lepreux_marcher: P({ title: "Attention, il passe",
    text: ["Tu détaches la clochette de sa ceinture. Il te laisse faire, sans comprendre. Tu marches à côté de lui, pas devant, pas derrière : à côté. Tu sonnes. Les gens de Bourdonne lèvent la tête, comme ils le font pour chaque cloche, et ils le voient. Ils le regardent passer. Personne ne s'écarte. Personne ne s'approche non plus. Mais ils le regardent, et c'est la première fois depuis si longtemps que quelqu'un le regarde, au lieu de seulement l'entendre, qu'il s'arrête au milieu de la rue et rabat son capuchon. Il a un visage. Tu le savais. Lui, il l'avait oublié."],
    choices: BACK }),
  III_c_lepreux_nom: P({ title: "Ladre",
    text: ["« Mon nom ? » Il réfléchit, sous le capuchon. « Ladre, dit-il. On m'appelait Ladre. Ce n'est pas un nom. C'est ce que j'avais. » Il se tait. « Avant, j'en avais un autre. Ma femme le disait le soir. Elle est partie quand j'ai commencé à sonner. Je ne lui en veux pas. » Il reprend sa marche, au rythme de sa cloche. Tu le regardes s'éloigner. À chaque pas, *attention, il passe*, et personne pour se retourner."],
    choices: BACK }),
  III_c_muette: P({ title: "La cloche fendue",
    text: [
      "Au pied d'un clocher vide, posée à même les pavés, une cloche de chapelle. Pas très grande, de bronze sombre, et fendue de haut en bas, d'une fêlure fine comme un cheveu. Autour de la panse, en relief, une plume et une clé croisées. Les armes de la Chancellerie.",
      "« Celle-là est arrivée il y a vingt ans, dit la Sonneuse, qui t'a suivi. Toute seule. Elle n'a pas sonné une fois depuis. Ce n'est pas qu'on l'ait oubliée, là-haut : c'est qu'on a voulu ne plus l'entendre. Quelqu'un l'a fendue exprès. Les cloches qu'on fait taire, elles viennent ici quand même. »",
      { if: { has: "hylas:muette" }, text: "Une cloche de chapelle, aux armes de la Chancellerie, qui ne sonne plus. À Pallanche, on l'appelait la Muette." },
      { with: "hylas", text: "Hylas s'est approché. Il voit, ici, et il ferme pourtant les yeux. Il pose la main à plat sur le bronze froid. Il suit la fêlure du bout des doigts, de haut en bas. Il ne dit rien. Il garde la main dessus un long moment, comme sur l'épaule de quelqu'un qu'on retrouve après une longue absence et qui a beaucoup changé." },
    ],
    choices: [
      { label: "La frapper, une fois, du plat de la main", test: { dom: "magie", label: "La Muette", help: [{ if: { present: "hylas" }, v: 20 }, { if: { has: "hylas:muette" }, v: 10 }, { if: { has: "iii:sonneuse" }, v: 5 }] },
        win: { fx: { flag: "iii:muette", ep: ["perso", 1000] }, to: "III_c_muette_sonne" }, lose: { to: "III_c_muette_silence" } },
      { label: "La laisser se taire", to: "III_c_ville" },
    ] }),
  III_c_muette_sonne: P({ title: "Une note fêlée",
    text: ["Tu frappes. Du plat de la main, comme on frappe à une porte. La cloche fendue sonne. Une note fausse, double, qui grince dans la fêlure comme une voix qui a trop crié, et qui tient, qui tient, longtemps, jusqu'à ce que tous les clochers de Bourdonne se soient tus pour l'écouter. La Sonneuse a fermé les yeux. « Là-haut, dit-elle, quelqu'un l'a entendue. Dans une tour, quelque part. Elle a sonné pour lui. » Elle ne dit pas qui. Elle ne le sait peut-être pas."],
    choices: BACK }),
  III_c_muette_silence: P({ title: "La fêlure",
    text: ["Tu frappes. Ta main rebondit sur le bronze avec un bruit mat, de pierre, de bois mort. Rien. La fêlure a mangé le son. La Sonneuse hoche la tête. « Elle ne veut pas, dit-elle. Ou elle ne peut plus. Ça revient au même, pour une cloche. » Tu laisses ta main un moment sur le métal, qui ne se réchauffe pas. Puis tu l'enlèves. Elle reste là, sur les pavés, à attendre quelqu'un qui saura comment s'y prendre."],
    choices: BACK }),
};
