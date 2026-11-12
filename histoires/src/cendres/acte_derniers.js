// Two last corners. Act I (Ysolde leads, "tu" feminine), off YS_cour: her father's room in the Wolf tower, kept as he
// left it, with a sealed letter "for when she is captain" (ysolde:lettre_pere helps the Thibaut ruse). Act V (the child
// leads, "tu" masculine), off V_t_cessions: the claims window of the Bureau, where for three centuries anyone could ask
// for a memory back and no claim was ever granted; a clerk still sits there (v:reclamation=<whom>).
function P(base) { return function (o) { return Object.assign({ noLead: true }, base, o); }; }
var YS = P({ act: "I", place: "brenne" }), V = P({ act: "V", place: "pallanche" });
var YS_BACK = [{ back: "YS_cour" }], V_BACK = [{ back: "V_t_cessions" }];
module.exports = {
  YS_k_chambre_pere: YS({ title: "La chambre de la tour du Loup",
    text: [
      "En haut de la tour du Loup, la chambre de ton père. Personne n'y dort depuis sa mort. Tu y montes une fois par an, le jour anniversaire, et tu ne touches à rien. Le lit étroit, de soldat. Le râtelier vide, où pendait l'épée que tu portes. Le coffre de campagne, au pied du lit, avec ses initiales au fer rouge. Une odeur de cuir et de cire, qui s'en va un peu plus chaque année.",
      "Sur le coffre, depuis toujours, une lettre. Pliée, cachetée au loup, et sur le dessus, de son écriture penchée, de la main gauche : *À Ysolde, quand elle sera capitaine.* Tu es capitaine depuis des années. Tu ne l'as jamais ouverte. Tu t'es toujours dit que tu n'étais pas encore assez capitaine pour ça.",
    ],
    choices: [
      { label: "Briser le cachet", fx: { flag: "ysolde:lettre_pere", ep: ["perso", 600] }, to: "YS_k_chambre_lettre" },
      { label: "La laisser sur le coffre, encore une année", fx: { ep: ["perso", 200] }, to: "YS_k_chambre_close" },
    ] }),
  YS_k_chambre_lettre: YS({ title: "La main gauche",
    text: [
      "Une seule feuille. Peu de lignes. Il n'a jamais aimé écrire.",
      "*Tu obéiras toute ta vie. C'est le métier, et tu le feras bien, mieux que moi. Mais une fois, une seule, tu désobéiras. Tu sauras quand. Choisis bien laquelle, parce qu'on n'en a qu'une, et qu'après, on n'est plus tout à fait capitaine. On est autre chose. Je ne sais pas quoi. Je n'ai pas eu le courage de le savoir.*",
      "*Ton père, qui t'a appris l'épée trop tôt et le reste trop tard.*",
      "Tu replies la lettre. Tu la glisses dans ton pourpoint, contre ta peau.",
      { before: "YS:colonne", text: "Par la meurtrière, en bas, la cour : tes hommes graissent leurs selles, et Frère Sévrin attend, à la fenêtre de la chambre des hôtes." },
      { after: "YS:colonne", text: "Par la meurtrière, au-delà des murs, la colonne attend dans l'herbe, et Frère Sévrin compte et recompte." },
    ],
    choices: YS_BACK }),
  YS_k_chambre_close: YS({ title: "Encore une année",
    text: ["Tu poses deux doigts sur le cachet de cire, sur le loup, comme on pose deux doigts sur le front de quelqu'un qui dort. Puis tu les retires. Pas encore. Tu redescends l'escalier de la tour, marche après marche, en comptant comme quand tu étais petite. Quatre-vingt-deux. Tu ne sais pas ce qu'il y a dans la lettre. Tu sais que tu n'es pas prête à ce que ce soit la dernière chose qu'il t'ait dite."],
    choices: YS_BACK }),
  V_e_reclamations: V({ title: "Le guichet des réclamations",
    text: [
      "Au fond du Bureau des Cessions, derrière les bocaux, une petite porte, et derrière la porte, un guichet. Une grille de fer, une planche, un encrier. Au-dessus, une plaque de cuivre : RÉCLAMATIONS. Derrière la grille, un vieux clerc, assis, la plume prête. Il n'a pas cédé. Il n'a jamais eu besoin : personne ne vient jamais le voir.",
      "« Trois cents ans, dit-il, quand tu t'approches. Trois cents ans qu'on peut réclamer un souvenir cédé. C'est le règlement de la fondation, article neuf. Personne ne l'a jamais lu. Personne n'est jamais venu. » Il trempe sa plume. « Vous êtes le premier. Que réclamez-vous ? Et pour qui ? »",
    ],
    choices: [
      { label: "« Pour Sauvelune. Tout ce qu'on lui a pris. »", fx: { flag: ["v:reclamation", "v:reclamation=sauvelune"], ep: ["perso", 1000] }, to: "V_e_reclamations_depot" },
      { label: "« Pour Linette. Page Onze. »", hide: { not: { any: [{ present: "linette" }, { present: "pie" }] } }, fx: { flag: ["v:reclamation", "v:reclamation=linette"], ep: ["perso", 1000] }, to: "V_e_reclamations_depot" },
      { label: "« Pour moi. Ce qu'on m'a pris, quand j'avais deux ans. »", fx: { flag: ["v:reclamation", "v:reclamation=moi"], ep: ["perso", 1000] }, to: "V_e_reclamations_depot" },
    ] }),
  V_e_reclamations_depot: V({ title: "Article neuf",
    text: [
      "Il écrit. Lentement, en belle ronde, sur un formulaire tracé il y a trois siècles et qui n'a jamais servi, ta réclamation, ton nom, la date, l'heure. Il souffle sur l'encre. Il tamponne. Il range le formulaire dans un casier vide, le premier d'une rangée de cent.",
      "« Réclamation enregistrée, dit-il. Elle sera examinée. » Tu demandes quand. Il réfléchit. « Le règlement ne dit pas. » Il te tend un reçu. Un vrai, avec le sceau de la plume et de la clé. *Réclamation numéro un.* Tu le prends. Ça ne rend rien. Mais c'est écrit, quelque part, dans la tour, cette nuit, qu'on a demandé. Et le clerc, derrière sa grille, sourit, comme personne n'a souri à ce guichet en trois cents ans.",
    ],
    choices: V_BACK }),
};
