// Act III · two more sights of the white plain (the child leads, "tu" masculine), off III_plaine once the walkers have
// been heard: a ferryman whose river was forgotten, sitting in his boat on the snow (iii:passeur), and a royal courier
// on foot with a sack of letters whose addresses have faded, who has lost his piebald horse (reads III_B_cheval).
var A = { act: "III", noLead: true, place: "plaine" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Reprendre la marche", to: "III_plaine" }];
module.exports = {
  III_p_passeur: P({ title: "Le passeur",
    text: [
      "Une barque, au milieu du blanc. Une vraie barque, à fond plat, goudronnée, avec une perche couchée en travers et une corde à l'avant, nouée à rien. Dedans, un homme assis, le chapeau sur les yeux, qui attend. Il n'y a pas d'eau. Il n'y a jamais eu d'eau ici. L'homme a l'air d'attendre qu'elle vienne.",
      "Il relève son chapeau quand tu approches. « Vous voulez passer ? demande-t-il. Ça fait un denier. » Passer quoi ? Il regarde autour de lui. Il fronce les sourcils. « La... » Il cherche. Il ne trouve pas. « Elle avait un nom, dit-il. Elle était large comme ça, verte au printemps, jaune après l'orage. J'y ai passé des gens pendant quarante ans. Je ne sais plus comment elle s'appelait. Alors elle est partie. »",
    ],
    choices: [
      { label: "Lui donner le nom de la rivière que tu connais le mieux : la Sauve", fx: { flag: "iii:passeur", ep: ["perso", 600] }, to: "III_p_passeur_sauve" },
      { label: "Payer le denier, et monter dans la barque", fx: { gold: -1, ep: ["perso", 300] }, to: "III_p_passeur_monter" },
    ] }),
  III_p_passeur_sauve: P({ title: "La Sauve",
    text: [
      "« La Sauve », dis-tu. Il répète. « La Sauve. » Il goûte le mot, longtemps. Ce n'est pas le bon. Tu le vois dans ses yeux. Mais sous la barque, très faiblement, la neige s'assombrit, devient grise, puis transparente, et pendant un instant, un seul, il y a un filet d'eau qui passe sous la quille, avec un bruit de source.",
      "Il pose la main sur le bordage. Il sent l'eau. Il ferme les yeux. « Ce n'est pas la mienne, dit-il. Mais c'est une rivière. » L'eau est déjà repartie. Il reprend sa perche, quand même, et il la plante dans la neige, et il pousse, et la barque avance d'une longueur, sur rien. « Je vais la chercher, dit-il. Il y en a peut-être une autre qui attend un passeur. »",
    ],
    choices: BACK }),
  III_p_passeur_monter: P({ title: "La traversée",
    text: ["Tu paies. Il prend le denier, il le mord, par habitude. Tu montes. Il plante sa perche dans la neige et pousse, et la barque ne bouge pas, et il pousse quand même, en cadence, en te racontant les crues, les noyés, les noces qu'il a passées sur l'autre rive, une vache qui avait sauté en plein milieu. Au bout d'un moment, il dit : « Voilà. On y est. » Tu descends. Tu es exactement là où tu étais. Il te salue de son chapeau, très content. Tu as traversé quelque chose. Tu ne sais pas quoi."],
    choices: BACK }),
  III_p_courrier: P({ title: "Le courrier à pied",
    text: [
      "Un homme en livrée bleue, couronne et plume brodées sur la poitrine, marche dans le blanc avec un sac de cuir sur l'épaule, si lourd qu'il penche. Un courrier de la reine. Il n'a pas de cheval. Il a des bottes de cavalier, faites pour l'étrier, pas pour la marche, et elles l'ont écorché jusqu'au sang.",
      "« Les lettres, dit-il, sans s'arrêter. Il faut que je les remette. » Il ouvre le sac en marchant, te montre : des centaines de plis, cachetés. Pas un n'a d'adresse. Les adresses sont parties les premières, dit-il. Avant les noms. Avant tout. Il ne sait plus à qui elles sont. Il les porte quand même.",
      { if: { seen: "III_B_cheval" }, text: "Il te demande, comme on demande l'heure, si tu n'aurais pas vu un cheval pie, noir et blanc, avec une sacoche. Le sien. Il l'a perdu en route. Il y avait dedans le pli le plus pressé de tous. Tu l'as vu : il marchait au milieu des chèvres d'une bergère, la tête droite, à quelques heures d'ici." },
    ],
    choices: [
      { label: "Lui dire où est son cheval", hide: { not: { seen: "III_B_cheval" } }, fx: { flag: "iii:courrier_cheval", ep: ["perso", 600] }, to: "III_p_courrier_cheval" },
      { label: "L'aider à trier, en devinant à qui sont les lettres", test: { dom: "savoir", label: "Les lettres sans adresse", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "linette" }, v: 15 }] },
        win: { fx: { flag: "iii:courrier_tri", ep: ["perso", 800] }, to: "III_p_courrier_tri" }, lose: { to: "III_p_courrier_poids" } },
    ] }),
  III_p_courrier_cheval: P({ title: "Le cheval pie",
    text: [
      "Il s'arrête net. C'est la première fois qu'il s'arrête depuis qu'il est entré dans le blanc ; il chancelle, comme quelqu'un qui descend d'un bateau. « Domino, dit-il. Il s'appelle Domino. C'est ma fille qui l'a appelé comme ça, à cause des taches. Je trouvais ça bête. »",
      "Tu lui montres la direction. Il remonte le sac sur son épaule. Il te serre la main, très fort, comme on serre la main d'un notaire qui vient de vous annoncer un héritage. Puis il part, en boitant, vers les clochettes des chèvres, et il ne marche plus du même pas. Il ne marche plus vers nulle part. Il marche vers son cheval.",
    ],
    choices: BACK }),
  III_p_courrier_tri: P({ title: "Le tri",
    text: ["Vous vous asseyez dans la neige, le sac entre vous. Tu prends les plis un par un. Tu les sens, tu les pèses, tu regardes le cachet, l'écriture du dos, la façon de plier. Celle-ci sent la lavande : une femme, à sa sœur. Celle-ci est cachetée à la cire de chandelle, en hâte : une dette. Celle-ci, épaisse, mal pliée, avec un brin de foin dedans : un garçon de ferme à sa promise. Tu ne trouves pas une seule adresse. Mais à la fin, il y a des tas, et chaque tas a un nom que vous avez inventé. Il les remet dans le sac, dans l'ordre. Il dit que c'est la première fois que le sac est plus léger."],
    choices: BACK }),
  III_p_courrier_poids: P({ title: "Le poids du sac",
    text: ["Tu prends une lettre, puis une autre. Tu ne sais pas. Tu ne sais rien de ces gens. Tu les rends au courrier, une à une, et il les remet dans le sac, sans reproche. « Ce n'est pas grave, dit-il. Je les porte. Quelqu'un les reconnaîtra. Il suffit de marcher assez longtemps. » Il repart, le sac sur l'épaule, penché. Tu le regardes s'éloigner jusqu'à ce qu'il ne soit plus qu'une tache bleue, puis plus rien."],
    choices: BACK }),
};
