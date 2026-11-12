// Act III · the black forest and the hamlet of Ellerune: the burnt trees of the valley that was set on fire, the Orsans
// who live there outside time, the language the child speaks in his sleep, the cradle with the bear, and Maëra, the
// woman who sings the song of his white dream: she gave her child to a greffier twenty years ago so that one of them
// would live up there. Hylas, if he fell with the child, has to say it. The child leads ("tu").
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  III_e_lisiere: P({ title: "Les arbres noirs", place: null,
    text: [
      "La forêt commence d'un coup, sans lisière, comme un mur. Des arbres hauts, droits, noirs du pied à la cime. Pas d'écorce : du charbon. Pas de feuilles. Ils ont brûlé debout, il y a longtemps, et ils sont restés debout.",
      "Sous le blanc, le sol est gris. Tu y mets la main. De la cendre, fine, tiède, si épaisse que tu n'en trouves pas le fond.",
      { with: "corbe", text: "Corbe s'est arrêtée à l'entrée. « La Vallée des Cendres, dit-elle. C'est le nom qu'on ne dit pas, au clan. Je ne savais pas que c'était un vrai endroit. »" },
      { with: "hylas", text: "Hylas s'est arrêté aussi. Il connaît le chemin. Ça se voit à la façon dont il ne cherche pas où mettre les pieds." },
    ],
    choices: [{ label: "Entrer dans la forêt", to: "@route" }] }),

  III_e_ruisseau: P({ title: "Le ruisseau de cendre", place: null,
    text: [
      "Un ruisseau traverse la forêt. Il ne coule pas d'eau : de la cendre, lente, grise, qui fait un bruit de sable.",
      "Sur la cendre, quelque chose flotte, et descend vers toi. Un jouet. Un ours sculpté dans du bois clair, gros comme le poing, avec une couronne gravée au couteau. Il tourne doucement sur lui-même.",
      "Tu le ramasses. Il est tiède. Tu le connais. Tu ne sais pas d'où.",
    ],
    choices: [{ label: "Le garder, et remonter le ruisseau", fx: { item: "ours_bois" }, to: "@route" }] }),

  III_e_hameau: P({ title: "Ellerune", place: "enfance", hub: true,
    text: [
      { first: true, text: "Une clairière, au milieu des arbres noirs. Des maisons rondes, en pierre sèche, au toit de chaume. De la fumée qui monte. Des gens. Ils fendent du bois qui ne brûle plus, ils puisent dans un puits sans eau, ils filent une laine qui ne finit jamais. Ils font les gestes d'un village, sans fin, depuis trois cents ans." },
      { first: true, text: "Ils te regardent passer. Ils se parlent à voix basse, dans une langue que tu n'as jamais apprise." },
      { first: true, text: "Tu la comprends." },
      { again: true, text: "Ils te regardent passer, et se parlent à voix basse." },
      { once: true, if: { has: "passe:reveur" }, text: "Agathe disait que tu parlais en dormant, et pas dans une langue d'ici. C'était celle-là." },
    ],
    choices: [
      { label: "Écouter ce qu'ils disent", hide: { seen: "III_e_langue" }, to: "III_e_langue" },
      { label: "La maison où quelqu'un chante", hide: { seen: "III_e_mere" }, to: "III_e_mere" },
      { label: "La maison vide, au bout du hameau", hide: { seen: "III_e_maison" }, to: "III_e_maison" },
      { label: "Hylas, resté à l'orée de la clairière", hide: { any: [{ seen: "III_e_hylas" }, { not: { present: "hylas" } }, { not: { seen: "III_e_mere" } }] }, to: "III_e_hylas" },
      { label: "L'homme qui fend du bois noir", hide: { any: [{ seen: "III_el_fendeur" }, { not: { seen: "III_e_langue" } }] }, to: "III_el_fendeur" },
      { label: "La vieille qui file, devant sa porte", hide: { seen: "III_el_fileuse" }, to: "III_el_fileuse" },
      { label: "Les enfants, autour du puits sans eau", hide: { seen: "III_el_puits" }, to: "III_el_puits" },
      { label: "Le four, au milieu du hameau", hide: { seen: "III_el_four" }, to: "III_el_four" },
      { label: "Les pierres levées, derrière la dernière maison", hide: { seen: "III_el_tombes" }, to: "III_el_tombes" },
      { label: "Un garçon assis sur un toit, une corne en bandoulière", after: "enfant:langue", hide: { seen: "III_el_guetteur" }, to: "III_el_guetteur" },
      { label: "Le rebord de la fenêtre de la maison vide", after: "enfant:langue", hide: { any: [{ seen: "III_el_jouets" }, { not: { seen: "III_e_maison" } }] }, to: "III_el_jouets" },
      { label: "Une fille, les bras croisés, à la lisière", hide: { seen: "III_F_lisiere" }, to: "III_F_lisiere" },
      { label: "Repartir vers les tours blanches", if: { seen: "III_e_mere" }, why: "Pas avant d'avoir trouvé la voix qui chante.", to: "III_e_depart", big: true },
    ] }),

  III_e_langue: P({ title: "Ce qu'ils disent", place: "enfance",
    text: [
      "Deux vieilles femmes, au puits. « C'est lui, dit l'une. Regarde ses mains. » L'autre : « Le petit de Maëra. Celui qui est parti avec la lanterne. » La première : « Il est revenu, alors. Ils reviennent tous. Le bourdon a sonné. »",
      "Un homme qui fend du bois, sans lever les yeux : « Il ne devrait pas être ici. Il était le seul à être là-haut. Le seul de nous à être vivant. »",
      "Tu leur parles. Les mots viennent tout seuls, dans ta bouche, comme si tu les avais toujours eus. Les deux vieilles se taisent. Puis l'une d'elles se met à pleurer.",
      { with: "lisandre", text: "Lisandre te regarde parler. Elle ne comprend pas un mot. Elle comprend la musique. Elle te regarde comme on regarde quelqu'un pour la première fois." },
    ],
    choices: [{ fx: { flag: "enfant:langue" }, back: "III_e_hameau" }] }),

  III_e_maison: P({ title: "Le berceau", place: "enfance",
    text: [
      "La dernière maison du hameau est vide. Propre. Quelqu'un vient y faire le ménage. Il y a un lit, une table, un métier à tisser, et dans un coin, un berceau de bois sculpté, avec un ours couronné sur le chevet.",
      { if: { item: "ours_bois" }, text: "Tu sors de ta poche l'ours de bois du ruisseau, et tu le tiens un moment contre le chevet." },
      "Le berceau est vide. Dans le creux du petit matelas de laine, il y a encore la forme d'un enfant. Elle n'a pas bougé depuis vingt ans.",
    ],
    choices: [{ fx: { flag: "enfant:berceau" }, back: "III_e_hameau" }] }),

  III_e_mere: P({ title: "Maëra", place: "enfance",
    fx: { meet: "maera" },
    text: [
      "La voix vient d'une maison ronde, porte ouverte. Une femme chante en filant. Une berceuse. Quatre notes qui montent, trois qui descendent.",
      { if: { souv: "enfant:reve" }, text: "C'est la voix de ton rêve. La voix qui chantait sur la plaine blanche, ton plus vieux souvenir. Tu restes sur le seuil, incapable de faire un pas." },
      { if: { not: { souv: "enfant:reve" } }, text: "Tu ne la connais pas. Tu restes sur le seuil quand même, sans savoir pourquoi tu ne peux pas faire un pas." },
      "Elle lève les yeux. Elle est jeune. Trente ans, peut-être. Des cheveux noirs, des yeux gris presque blancs. Elle te regarde longtemps. Le fuseau tourne encore, tout seul, puis s'arrête.",
      "« Tu as ses mains, dit-elle. Les mains de mon petit. » Elle pose le fuseau. « Il avait deux ans. Je l'ai donné à un homme des villes, un greffier, avec une lanterne. Il y a vingt ans, là-haut. Pour nous, ce matin. » Elle sourit. « Je lui ai dit : emporte-le. Qu'au moins un de nous vive là-haut, au soleil, avec un nom que personne n'a effacé. »",
    ],
    choices: [
      { label: "« C'est moi. »", fx: { flag: "maera:sait", ep: ["perso", 2500] }, to: "III_e_mere_dit" },
      { label: "Ne rien dire. Lui demander seulement de chanter encore", fx: { flag: "maera:chante", ep: ["perso", 1500] }, to: "III_e_mere_chante" },
    ] }),

  III_e_mere_dit: P({ title: "C'est moi", place: "enfance",
    text: [
      "Elle ne dit rien. Elle se lève. Elle vient à toi, lentement, et elle te prend le visage dans les mains, comme Hylas faisait pour lire. Elle te lit.",
      "« Tu es grand », dit-elle. C'est tout ce qu'elle dit, pendant longtemps.",
      { if: { souv: "enfant:agathe" }, text: "Tu penses à Agathe, à ses joues rouges, à sa façon de te pousser une mèche derrière l'oreille. Maëra te pousse une mèche derrière l'oreille. Tu ne sais pas si tu as le droit d'avoir deux mères. Tu les as." },
      { if: { not: { souv: "enfant:agathe" } }, text: "Elle te pousse une mèche derrière l'oreille. Personne ne t'a jamais fait ça. Tu en es sûr." },
      "« Ton nom, dit-elle. Ton vrai nom. C'est ton père qui te l'a donné. Il est à Valcendre. Ce n'est pas à moi de te le dire. Il faut que ce soit lui. »",
    ],
    choices: [{ label: "Rester un peu", fx: { conf: { enfant: 10 } }, to: "III_e_hameau" }] }),

  III_e_mere_chante: P({ title: "La berceuse", place: "enfance",
    text: [
      "Elle te regarde un moment de plus. Puis elle reprend son fuseau et elle chante. Quatre notes qui montent, trois qui descendent. Tu t'assieds sur le seuil, le dos contre le chambranle.",
      "Tu t'endors. Tu ne t'étais pas endormi depuis la chute. Tu dors une heure, ou un jour. Quand tu te réveilles, elle a posé une couverture sur toi.",
      "Elle ne t'a rien demandé. Elle sait. Elle a décidé de ne pas te le faire dire.",
    ],
    choices: [{ fx: { flag: "enfant:berceuse" }, back: "III_e_hameau" }] }),

  III_e_hylas: P({ title: "La lanterne", place: "enfance",
    text: [
      "Hylas n'est pas entré dans la clairière. Il est assis sur une souche noire, à l'orée, ses yeux qui voient fixés sur la maison de Maëra.",
      "Tu t'assieds à côté de lui. Tu ne dis rien. C'est lui qui parle.",
      { if: { has: "hylas:oublie_enfant" }, text: "« Je ne m'en souvenais plus, dit-il. Je l'ai donné à la neige, à Pallanche, pour que Mordace ne puisse jamais le prendre. Et puis on est entrés dans cette forêt, et j'ai su où mettre les pieds. Et puis elle a chanté. » Il serre les mains. « Il est revenu par morceaux. Le froid. La lanterne. Ton poids, sur mon dos. Elle, sur le seuil. »" },
      { if: { not: { has: "hylas:oublie_enfant" } }, text: "« Vingt ans que je me prépare à te le dire, dit-il. J'avais écrit le discours. Je l'ai relu chaque année. » Il a un petit rire. « Je ne m'en souviens plus. Pas un mot. »" },
      "« Je cherchais le registre noir, dans le Nord. Je suis passé par le col. Je suis entré. Elle m'a donné un enfant de deux ans, endormi, et elle m'a dit : emporte-le. Je l'ai porté trois jours. Le blanc m'a pris les yeux, en sortant. Je ne les ai pas regrettés. » Il tourne la tête vers toi. « Je t'ai laissé à un meunier de Sauvelune parce qu'il avait l'air bon, et que sa femme avait perdu un enfant au printemps. Je suis revenu te voir, de loin, chaque année. Et je ne t'ai jamais rien dit. »",
    ],
    choices: [
      { label: "« Merci. »", fx: { flag: ["hylas:avoue", "enfant:pardonne_hylas"], conf: { hylas: 15 }, ep: ["perso", 2000] }, to: "III_e_hylas_merci" },
      { label: "« Tu aurais dû me le dire. »", fx: { flag: ["hylas:avoue", "enfant:reproche_hylas"], conf: { hylas: -5 }, ep: ["perso", 2000] }, to: "III_e_hylas_reproche" },
    ] }),

  III_e_hylas_merci: P({ title: "Merci", place: "enfance",
    text: ["Hylas te regarde. Il ne s'attendait pas à ça. Il ouvre la bouche, la referme. Puis il se lève, très droit, et entre enfin dans la clairière, et va jusqu'au seuil de Maëra. Elle lève les yeux. Elle le reconnaît. Elle lui sourit, comme on sourit à quelqu'un qui a tenu parole."],
    choices: [{ back: "III_e_hameau" }] }),

  III_e_hylas_reproche: P({ title: "Tu aurais dû", place: "enfance",
    text: ["« Oui », dit Hylas. Il ne se défend pas. Il ne s'excuse pas. Il reste assis sur sa souche. Au bout d'un long moment, il dit : « Je crois que j'avais peur que tu partes. Que tu veuilles revenir ici. » Il regarde la clairière. « Et tu y es. »"],
    choices: [{ back: "III_e_hameau" }] }),

  III_e_depart: P({ title: "Le départ", place: "enfance",
    fx: { flag: "acte3:enfance_fini", ep: ["histoire", 3000] },
    text: [
      "Maëra t'accompagne jusqu'au bout de la clairière. Elle te donne du pain, qu'elle a cuit dans un four sans feu, et qui est chaud.",
      { if: { has: "maera:sait" }, text: "« Va voir ton père, dit-elle. Il ne sait pas que tu es là. Il croit que tu vis au soleil. Il va être en colère, et heureux, et il ne saura pas lequel montrer. Laisse-lui le temps. »" },
      { if: { not: { has: "maera:sait" } }, text: "« Les tours blanches, dit-elle. Valcendre. Quelqu'un là-bas a besoin de te voir. » Elle n'explique pas qui." },
      "Au-delà des arbres noirs, la plaine, et au bout, les tours. Elles ne reculent plus quand tu marches vers elles.",
    ],
    choices: [{ label: "Retrouver la plaine blanche", fx: { food: 2 }, to: "III_plaine" }] }),
};
