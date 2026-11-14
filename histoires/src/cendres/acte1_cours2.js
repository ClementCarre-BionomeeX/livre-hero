// Act I · one more corner in two opening hubs: the rehearsal of the queen's musicians for the Fête, where the old
// harpist has forgotten the end of every piece (Lisandre leads, "tu" feminine); and the fort's archer tower, where the
// old master-at-arms keeps a book of every man he trained (Ysolde leads, "tu" feminine). Plus, in Act III, an old
// watchtower on the white plain (the child leads, "tu").
function P(base) { return function (o) { return Object.assign({ noLead: true }, base, o); }; }
var LI = P({ act: "I", place: "vasselin" }), YS = P({ act: "I", place: "brenne" }), T3 = P({ act: "III", place: "plaine" });
module.exports = {
  LI_k_repetition: LI({ title: "La répétition",
    text: [
      "Dans la galerie haute, au-dessus de la grande salle, les musiciens de la reine répètent pour la Fête. Douze, en livrée bleue. Ils jouent bien. Ils jouent très bien. Et, à chaque morceau, ils s'arrêtent, tous ensemble, deux mesures avant la fin, et ils se regardent.",
      "Le vieux Maître Grégoire, à la harpe, qui dirige depuis trente ans, a les mains suspendues au-dessus des cordes. « La fin, dit-il. Je ne sais plus la fin. D'aucun morceau. Je sais le début, le milieu. Et puis plus rien. » Les autres attendent. Ils ne la savent plus non plus. Ils l'ont toujours suivi, lui.",
    ],
    choices: [
      { label: "Leur chanter la fin, toi", test: { dom: "social", label: "Les fins", help: [{ if: { item: "luth" }, v: 15 }, { if: { seen: "LI_aubrac" }, v: 5 }] },
        win: { fx: { flag: "lisandre:fins", ep: ["perso", 700] }, to: "LI_k_repetition_ok" }, lose: { to: "LI_k_repetition_rate" } },
      { label: "Les laisser chercher", to: "LI_cour" },
    ] }),
  LI_k_repetition_ok: LI({ title: "Les deux mesures",
    text: [
      "Tu chantes les deux mesures. Juste les deux dernières, celles qui ferment. Maître Grégoire écoute, la tête penchée sur sa harpe, et ses mains retombent sur les cordes, et elles jouent la fin. Les autres suivent.",
      "Vous le faites pour tous les morceaux de la Fête. Neuf. Tu chantes neuf fins. À la dernière, Grégoire pleure un peu dans sa barbe. « Je n'aurais pas cru qu'on puisse oublier comment ça finit, dit-il. On croit toujours que c'est le début qu'on perdra. »",
    ],
    choices: [{ back: "LI_cour" }] }),
  LI_k_repetition_rate: LI({ title: "La galerie",
    text: ["Tu chantes une fin. Ce n'est pas la bonne. Grégoire secoue la tête, poliment. Tu en essaies une autre. Les musiciens se regardent. Au bout d'une heure, ils décident de finir chaque morceau par un accord, n'importe lequel, très fort, pour qu'on applaudisse. Ça marchera. On applaudit toujours après un accord très fort."],
    choices: [{ back: "LI_cour" }] }),

  YS_k_maitre: YS({ title: "Le maître d'armes",
    text: [
      "Dans la tour des archers, le vieux Gerbold, maître d'armes de Brenne depuis le temps de ton grand-père, graisse des arbalètes. Il a soixante-dix ans, un œil crevé, et il t'a appris à tenir une épée quand tu avais six ans, en te tapant sur les doigts avec une baguette de saule.",
      "Sur une étagère, au-dessus de l'établi, un gros livre relié de cuir. Le livre des hommes. Chaque garçon qu'il a formé, depuis cinquante ans, avec son nom, son village, son défaut, et, plus tard, d'une autre encre, ce qu'il est devenu.",
      "« Tu veux voir ta page ? » dit-il sans lever la tête.",
    ],
    choices: [
      { label: "« Oui. »", fx: { ep: ["perso", 400] }, to: "YS_k_maitre_page" },
      { label: "« Montre-moi les pages de la Lisse. »", fx: { flag: "ysolde:gerbold", ep: ["perso", 600] }, to: "YS_k_maitre_lisse" },
    ] }),
  YS_k_maitre_page: YS({ title: "Ta page",
    text: ["Il l'ouvre, presque au milieu. *Ysolde, fille du capitaine. Six ans. Défaut : frappe trop fort, trop tôt. N'attend pas.* Et en dessous, d'une encre plus récente : *Capitaine. Frappe toujours trop fort. Attend un peu mieux.* Il referme le livre. « J'écrirai la suite quand tu reviendras, dit-il. Reviens. »"],
    choices: [{ back: "YS_cour" }] }),
  YS_k_maitre_lisse: YS({ title: "Les pages de la Lisse",
    text: [
      "Il te regarde longtemps de son œil valide. Puis il ouvre le livre aux dernières pages. Les garçons de ta compagnie, ceux de la guerre. Et à côté de beaucoup de noms, de sa main, la même ligne, recopiée encore et encore : *Lisse, le quatorze brumaire.*",
      "Il n'a rien écrit d'autre. Ni mort, ni blessé, ni rentré. Seulement la date, et le nom du pont.",
      "« Ils sont rentrés, dit-il. Presque tous. Mais je n'ai pas su quoi écrire après. Eux-mêmes ignorent ce qu'ils ont fait là-bas. Ils disent que leur mémoire est vide. » Il referme le livre. « Moi, je me souviens de leurs têtes, quand ils sont rentrés. Ça, je ne l'ai pas écrit. »",
    ],
    choices: [{ back: "YS_cour" }] }),

  III_p_tour_guet: T3({ title: "La tour de guet",
    text: [
      "Au milieu de la plaine blanche, une tour de guet en ruine. De pierre, de chez vous, avec les créneaux d'en bas et une meurtrière tournée vers le nord. Quelqu'un, il y a très longtemps, l'a oubliée tout entière, et elle est venue ici.",
      "En haut, un guetteur. Vieux, en cotte rouillée, une trompe de corne à la ceinture. Il regarde le nord. Il regarde toujours le nord. « Je dois sonner quand ils arrivent, dit-il sans se retourner. Les Orsans. Je n'ai jamais sonné. Ils ne sont jamais venus. »",
    ],
    choices: [
      { label: "« Ils ne viendront pas. Vous pouvez descendre. »", fx: { ep: ["perso", 500], flag: "iii:guetteur" }, to: "III_p_tour_guet_descendre" },
      { label: "Le laisser à son guet", to: "III_plaine" },
    ] }),
  III_p_tour_guet_descendre: T3({ title: "La trompe",
    text: [
      "Il se retourne. Il te regarde, et il te voit, et il fronce les sourcils, comme devant une chose qu'il ne comprend pas. « Tu as leurs yeux, dit-il. Les Orsans. » Il ne lève pas sa trompe. Il te regarde encore. « Ils ont des yeux d'enfant, alors. On ne m'avait pas dit. »",
      "Il descend. Lentement, marche après marche. En bas, il pose sa trompe contre le mur de la tour, et il part, à pied, vers les tours blanches, sans se retourner. C'est la première fois depuis trois cents ans qu'il tourne le dos au nord.",
    ],
    choices: [{ back: "III_plaine" }] }),
};
