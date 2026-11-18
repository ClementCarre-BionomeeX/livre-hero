// L'Île Folle-Aiguille · side story « Le chirurgien des deux humeurs » (owes its question to Jekyll and Hyde: what does a
// man become when he lets out what he keeps down?). Act II, the doctor: a young surgeon applies, too brilliant, too pale,
// with trembling morning hands; at night in the Basse-Fosse, a laughing man in his coat. Hire him or not. The voyage part
// (the night prowler on board, the pharmacy, the weaning, or the man lost to the other one) is in xj_bord.js.
module.exports = {
  passages: {
    XJ_debut: { act: "II", title: "Le jeune chirurgien", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "vauclair" },
      text: [
        "Il se présente au Cormoran un matin de pluie, son chapeau à la main, ses diplômes dans un étui de cuir sous le bras. Émeric Vauclair, vingt-huit ans, docteur de la Faculté de Morlenc, reçu premier de sa promotion, ancien interne à l'Hôtel-Dieu. Il demande la place d'aide-chirurgien de la Cormorane.",
        "C'est un jeune homme mince, très pâle, aux cheveux châtains fins comme ceux d'un enfant, aux yeux gris très doux, avec des mains d'une finesse de pianiste. Il parle bas, poliment, en choisissant ses mots. Il sourit avec timidité, comme quelqu'un qui s'excuse d'occuper de la place. Il a l'air de quelqu'un qui n'a jamais fait de mal à une mouche, et qui le regrette un peu.",
        "Victorine lit ses certificats. Ils sont excellents. Trop excellents : on ne quitte pas l'Hôtel-Dieu avec de tels certificats pour courir les mers comme aide d'une médecin de village sans diplôme. Le dernier, du directeur de l'Hôtel-Dieu, est daté de trois mois. Il porte, au bas, une ligne d'une autre encre : *Démissionnaire pour raisons de santé.*",
      ],
      choices: [
        { label: "L'interroger sur la médecine", to: "XJ_examen" },
        { label: "« Pour quelles raisons de santé ? »", to: "XJ_sante" },
      ] },
    XJ_examen: { act: "II", title: "Le jeune chirurgien", place: "quai_hollandes",
      text: [
        "Victorine l'interroge comme on l'a interrogée, autrefois, sous sa perruque d'emprunt : les fractures ouvertes, les fièvres tierces, la ligature des artères, le traitement du scorbut, les doses de laudanum. Il répond à tout. Il répond mieux qu'elle ne l'aurait fait. Il cite des auteurs qu'elle n'a jamais pu se procurer, en latin, en italien, en allemand ; il corrige poliment une de ses questions, qui contenait une erreur.",
        "Sur le laudanum, il est intarissable. Il connaît tout, les doses, les effets, les accoutumances, les sevrages. Il en parle avec une exactitude passionnée, presque tendre, comme on parle d'un parent.",
        "Puis il remarque que ses mains tremblent, posées sur ses genoux, et il les cache dans ses manches.",
      ],
      choices: [{ label: "« Pour quelles raisons de santé, docteur ? »", to: "XJ_sante" }] },
    XJ_sante: { act: "II", title: "Le jeune chirurgien", place: "quai_hollandes",
      text: [
        "Émeric Vauclair baisse les yeux.",
        "« Je dors mal, Madame. Depuis des années. J'ai composé une teinture, pour dormir, de ma propre invention ; elle me réussit. Elle me réussit trop bien, peut-être. Le directeur a jugé que je n'étais pas toujours… égal. » Il relève les yeux, et ils sont pleins d'une franchise désarmante. « Je veux partir loin. Je veux être utile, loin. Je veux m'éloigner de… de certaines habitudes. De certains quartiers. De quelqu'un.",
        "— De qui ? »",
        "Il sourit, très doucement.",
        "« De moi, peut-être. »",
      ],
      choices: [
        { label: "L'engager", fx: { recrue: "vauclair", flag: "vauclair:engage", regard: { vauclair: "redevable" } }, to: "XJ_engage" },
        { label: "Lui dire de revenir demain, et le suivre ce soir", to: "XJ_nuit" },
        { label: "Lui dire de revenir dans deux jours, et se renseigner sur lui", to: "XJ_enquete" },
        { label: "Refuser", refuse: true, to: "XJ_refuse" },
      ] },
    XJ_nuit: { act: "II", title: "La nuit de la Basse-Fosse", place: "basse_fosse", ambiance: "nuit", takes: "night",
      text: [
        "Victorine le suit à la tombée de la nuit, une mante sombre sur sa robe grise, comme elle suivait autrefois Hector vers les tripots, pour savoir combien il perdait. Le jeune homme marche vite, tête basse, les mains dans les poches. Il descend vers la Basse-Fosse. Il entre dans une taverne sans enseigne, au fond d'une impasse, où l'on n'entre pas pour boire.",
        "Elle attend sous un porche, une heure, deux heures, en grelottant. Puis la porte s'ouvre.",
        "Un homme sort en riant. Il porte le manteau de Vauclair, le chapeau de Vauclair. Il a sa taille, à peu près. Mais il ne marche pas comme lui : il marche en se dandinant, les coudes écartés, en occupant toute la ruelle, comme un homme qui veut qu'on le bouscule pour avoir le plaisir de rendre. Il rit tout seul, d'un rire aigu, saccadé, hilare. Un mendiant, assis contre un mur, tend la main. L'homme s'arrête, le regarde, rit plus fort, et lui donne un coup de pied dans le ventre. Puis il jette une poignée de pièces dans la boue, sur le mendiant plié en deux, et s'en va en chantonnant.",
        "Il passe sous le réverbère, à dix pas de Victorine. Elle voit son visage. C'est celui de Vauclair. C'est le même visage, exactement ; et c'est un autre visage, comme un portrait de lui fait par quelqu'un qui le haïssait. Les yeux sont les mêmes yeux gris. Ils ne sont plus doux du tout.",
      ],
      choices: [
        { label: "Courir soigner le mendiant", fx: { flag: "vauclair:gris_vu" }, to: "XJ_mendiant" },
        { label: "Suivre l'homme qui rit", fx: { flag: "vauclair:gris_vu" }, to: "XJ_suivre" },
      ] },
    XJ_mendiant: { act: "II", title: "La nuit de la Basse-Fosse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le mendiant a une côte cassée et la lèvre fendue. Il ramasse les pièces dans la boue avant de se laisser soigner, et il en a ramassé dix-sept quand Victorine le convainc de s'allonger. « Il vient souvent, dit-il en grimaçant. Le monsieur gris. Il cogne, puis il paie. Il paie bien. Les gars d'ici l'aiment pas, mais ils l'attendent. » Il crache un peu de sang. « Le jour, y a un autre monsieur, tout pareil, qui vient soigner les gosses de l'impasse pour rien. Je crois que c'est son frère. Ils se ressemblent tant qu'on dirait un seul. »",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "XJ_lendemain" }] },
    XJ_suivre: { act: "II", title: "La nuit de la Basse-Fosse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Elle le suit jusqu'au fleuve. Il s'arrête sur le quai désert et se penche sur l'eau noire, longtemps, comme s'il y cherchait son reflet. Puis il rit de nouveau, plus bas.",
        "« Je sais que tu es là, dit-il sans se retourner. La femme en gris. La médecin de village. Tu m'as suivi depuis l'impasse ; tu marches comme une gouvernante. » Il se retourne. Il sourit de toutes ses dents. « Il t'a plu, l'autre, n'est-ce pas ? Le doux, le poli, le premier de sa promotion ? Il plaît à tout le monde. Moi, je ne plais à personne. Mais moi, au moins, je m'amuse. »",
        "Il soulève son chapeau, profondément, et s'en va dans la nuit en sifflant. Victorine reste seule sur le quai. Elle a froid jusqu'aux os, et ce n'est pas la nuit.",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "XJ_lendemain" }] },
    XJ_lendemain: { act: "II", title: "Le lendemain", place: "quai_hollandes",
      text: [
        "Le lendemain matin, Émeric Vauclair se présente au Cormoran à l'heure dite, rasé, poli, pâle, son chapeau à la main. Il a les yeux cernés, les mains qui tremblent, une écorchure aux jointures de la main droite qu'il ne semble pas remarquer.",
        "« Avez-vous réfléchi, Madame ? demande-t-il avec une timidité parfaite.",
        "— J'ai vu, docteur. Hier soir. Le quai, l'impasse, le mendiant. »",
        "Il pâlit. Il ne nie pas. Il ferme les yeux, et quand il les rouvre, ils sont pleins de larmes et d'une sorte de soulagement terrible, comme ceux d'un malade à qui l'on dit enfin le nom de sa maladie.",
        "« Alors vous savez, dit-il. Il s'appelle Monsieur Gris. C'est lui qui a choisi son nom. Il vient le soir, quand je prends ma teinture, et il garde tout ce que je veux oublier. Il ne vient plus si je n'en prends pas. Mais si je n'en prends pas, je ne dors pas, et si je ne dors pas… » Il s'interrompt. « Emmenez-moi, Madame. Loin d'ici, loin de l'impasse. Je vous en supplie. Ou alors dénoncez-moi. Mais ne me laissez pas seul avec lui. »",
      ],
      choices: [
        { label: "L'engager, et garder la teinture sous ta clef", fx: { recrue: "vauclair", flag: ["vauclair:engage", "vauclair:averti"], regard: { vauclair: "redevable" } }, to: "XJ_engage" },
        { label: "Refuser, et le confier aux sœurs de l'hospice", refuse: true, fx: { flag: "vauclair:hospice" }, to: "XJ_refuse" },
      ] },
    XJ_engage: { act: "II", title: "L'aide-chirurgien", place: "cormorane",
      text: [
        "Émeric Vauclair monte à bord de la Cormorane avec une malle de livres, une trousse d'instruments d'argent qui vaut plus que le navire, et une petite fiole brune enveloppée dans un mouchoir.",
        { if: { has: "vauclair:averti" }, text: "Il tend la fiole à Victorine, sur la passerelle. Elle la range dans le placard de la pharmacie, sous clef, à côté du laudanum. Il regarde la clef disparaître sous sa robe avec une expression qu'elle n'oubliera pas : un mélange de gratitude et de faim." },
        { if: { not: { has: "vauclair:averti" } }, text: "Il garde la fiole dans la poche intérieure de son habit, contre son cœur, et la touche, de temps en temps, du bout des doigts, comme on vérifie qu'un portefeuille est encore là." },
        "La capitaine Ribaud le regarde passer avec une méfiance de principe, Gobert avec une méfiance d'expérience. Les matelots, eux, l'adorent dès le premier jour : il soigne les ampoules, les cors et les dents gâtées avec une douceur de mère, et refuse tout paiement.",
      ],
      choices: [{ back: "A2v_jours" }] },
    XJ_refuse: { act: "II", title: "Le jeune chirurgien", place: "quai_hollandes",
      text: [
        { if: { has: "vauclair:hospice" }, text: "Victorine l'accompagne elle-même à l'hospice de la Marine et le confie à la sœur supérieure, qui en a vu d'autres et n'en est que plus douce. Vauclair la remercie à la porte, avec une politesse parfaite. Ses mains tremblent. Elle ne saura jamais s'il est resté." },
        { if: { not: { has: "vauclair:hospice" } }, text: "Émeric Vauclair remet ses diplômes dans leur étui, salue profondément, et s'en va sous la pluie. Victorine le regarde partir par la fenêtre. Il marche tête basse, très droit, très poli. Au coin de la rue, il hésite, et tourne vers la Basse-Fosse." },
      ],
      choices: [{ back: "A2v_jours" }] },
  },
  extras: {
    quests: [
      { id: "XJ", act: "III", kind: "annexe", title: "Le chirurgien des deux humeurs", start: "XJ_debut", doit: "jekyll", echo: ["vauclair:sauve", "vauclair:livre", "vauclair:gris"] },
    ],
    people: {
      vauclair: { name: "Émeric Vauclair", aka: ["Vauclair", "le jeune chirurgien", "l'aide-chirurgien"], f: false,
        face: { age: "jeune", skin: "porcelaine", hair: "chatain", coif: "milong", beard: "sans", eyes: "tombants", iris: "gris", nose: "fin", lips: "fines", shape: "allonge", marks: [] },
        desc: "Docteur de la Faculté de Morlenc, vingt-huit ans.", qui: "Le jeune chirurgien pâle, trop poli.",
        aspect: { allure: "mince, timide, des mains de pianiste", visage: "très pâle, yeux gris très doux", voix: "basse, polie" } },
    },
  },
};
