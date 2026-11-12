// Act IV · the inn at Pont-de-Saule a year later (the child leads, "tu" masculine), off IV_ps: the fiddlers who played
// at the Fête des Noms in Sauvelune and have lost their tunes since the white snow; the innkeeper's guest book where the
// names fade overnight. iv:violons=appris when the boy hums them the Sauvelune dance back.
var A = { act: "IV", noLead: true, place: "pontsaule" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir dans la salle", to: "IV_ps_auberge" }];
module.exports = {
  IV_ps_auberge: P({ title: "L'auberge du Saule", hub: true,
    text: [
      "L'auberge du Saule, au bout du pont. Une grande salle basse, enfumée, avec des jambons au plafond et un feu trop fort. Il y a du monde, mais on parle bas. Personne ne chante. À Pont-de-Saule, avant, on chantait toujours, à l'auberge, même quand il n'y avait rien à fêter.",
    ],
    choices: [
      { label: "Les trois violoneux, à la table du fond", hide: { seen: "IV_ps_violons" }, to: "IV_ps_violons" },
      { label: "L'aubergiste, derrière son comptoir, avec son grand livre", hide: { seen: "IV_ps_livre" }, to: "IV_ps_livre" },
      { label: "Manger une soupe au coin du feu", fx: { gold: -1, pv: 4, food: 1 }, hide: { seen: "IV_ps_soupe" }, to: "IV_ps_soupe" },
      { label: "Ressortir sur le pont", to: "IV_ps" },
    ] }),
  IV_ps_soupe: P({ title: "La soupe",
    text: ["Une soupe aux choux, épaisse, avec un os à moelle qui flotte au milieu. La servante la pose devant toi sans un mot, puis elle reste là, à te regarder manger, le torchon sur l'épaule. « Tu es le fils du meunier de là-haut, dit-elle enfin. Celui qui est parti. » Tu dis oui. Elle hoche la tête. « Je me demandais si j'avais rêvé. » Elle repart. Elle t'apporte du pain, ensuite, sans que tu en demandes."],
    choices: BACK }),
  IV_ps_violons: P({ title: "Les violoneux",
    text: [
      "À la table du fond, trois hommes, trois violons posés devant eux, à côté des pichets. Tu les reconnais. Les violons de Pont-de-Saule, qui jouaient sur le perron de l'auberge, à Sauvelune, le jour de la Fête, à peu près ensemble.",
      "Ils ne jouent plus. « On sait encore les tenir, dit le plus vieux, un grand sec à moustache. On sait accorder. On sait l'archet. Mais les airs sont partis. Tous. Depuis la neige. On pose l'archet, et rien ne vient. » Il boit. « Trente ans de bals. Il ne m'en reste pas un. »",
    ],
    choices: [
      { label: "Leur fredonner l'air de la Fête de Sauvelune", test: { dom: "social", label: "L'air", help: [{ if: { has: "tess:bal" }, v: 15 }, { if: { present: "lisandre" }, v: 20 }, { if: { has: "pim:nom" }, v: 10 }, { if: { has: "iv:foins" }, v: 10 }] },
        win: { fx: { flag: "iv:violons=appris", ep: ["perso", 1000] }, to: "IV_ps_violons_air" }, lose: { to: "IV_ps_violons_rate" } },
      { label: "Leur payer un pichet, et les laisser", fx: { gold: -1 }, to: "IV_ps_auberge" },
    ] }),
  IV_ps_violons_air: P({ title: "La bourrée de Sauvelune",
    text: [
      "Tu fredonnes. Mal, d'abord. Puis tu retrouves le rythme, celui que tu as dans les pieds plus que dans la tête : la bourrée de la Fête, celle qu'on danse sur la place quand les lampions sont allumés. Le vieux te regarde. Il prend son violon. Il cherche, sur les cordes, en suivant ta voix. Il trouve une note. Puis deux.",
      "Le deuxième violoneux le rejoint. Puis le troisième, qui fait la basse. Au bout de trois tours, ils n'ont plus besoin de toi. Ils jouent. Pas tout à fait ensemble, à peu près, comme avant. Dans la salle, quelqu'un tape du pied. Puis un autre. La servante pose son torchon.",
      "Le vieux ne s'arrête pas de jouer pour te parler. Il te fait seulement un signe de la tête, en mesure, sans manquer un temps.",
    ],
    choices: BACK }),
  IV_ps_violons_rate: P({ title: "Un air",
    text: ["Tu fredonnes. Ce qui sort n'est pas la bourrée. C'est un air d'ailleurs, lent, en boucles, que tu ne te savais pas connaître. Les violoneux t'écoutent, perplexes. « Ce n'est pas d'ici, ça, dit le vieux. C'est joli. Mais ce n'est pas d'ici. » Il repose son archet. Tu t'arrêtes. Tu ne sais pas d'où vient cet air. Tu le sais très bien. Tu n'as pas envie de le dire."],
    choices: BACK }),
  IV_ps_livre: P({ title: "Le livre des voyageurs",
    text: [
      "Sur le comptoir, un grand livre ouvert, avec une plume attachée par une ficelle. Le livre des voyageurs : chacun y écrit son nom en arrivant, pour la loi. L'aubergiste, un gros homme chauve, le tourne vers toi. « Ton nom, s'il te plaît. C'est la loi. »",
      "Tu regardes la page. Elle est à moitié vide. Pas parce qu'il n'y a eu personne. Parce que les noms des jours passés ont pâli, jusqu'à disparaître. Il ne reste que ceux d'hier et d'aujourd'hui. Avant, c'est du papier propre, avec, par endroits, un reste de boucle, un point sur un i.",
      "« Ça fait ça depuis la neige, dit l'aubergiste. Je recopie, le soir, de mémoire. Mais je ne me souviens pas de tout le monde. » Il hausse les épaules. « La loi, elle ne dit rien sur ce qu'il faut faire quand l'encre s'en va. »",
    ],
    choices: [
      { label: "Écrire ton nom, appuyé, en repassant chaque lettre trois fois", fx: { ep: ["perso", 300] }, to: "IV_ps_livre_nom" },
      { label: "Lui proposer d'écrire au crayon, à la place de l'encre", fx: { ep: ["perso", 400], flag: "iv:livre_crayon" }, to: "IV_ps_livre_crayon" },
    ] }),
  IV_ps_livre_nom: P({ title: "Trois fois",
    text: ["Tu écris ton nom. Tu repasses chaque lettre, trois fois, en appuyant si fort que la plume crisse et que le papier se creuse. L'aubergiste te regarde faire, sans rien dire. Demain, l'encre sera partie. Mais il restera le creux, dans le papier, et en passant le doigt dessus, on pourra lire, comme un aveugle lit. L'aubergiste passe le doigt, déjà, pour essayer. Il hoche la tête."],
    choices: BACK }),
  IV_ps_livre_crayon: P({ title: "Le crayon",
    text: ["Il te regarde comme si tu avais dit une bêtise. Puis il fouille sous son comptoir, et il sort un bout de mine de plomb, de celles dont se servent les charpentiers. Il écrit un nom, le sien, dans la marge. Il le regarde. Il frotte du pouce. Le plomb tient, il ne pâlit pas, pas tout de suite en tout cas. « On verra demain », dit-il. Mais il a déjà retourné la page d'hier, et il recopie, au crayon, la langue entre les dents, les noms qui restent, avant qu'ils s'en aillent."],
    choices: BACK }),
};
