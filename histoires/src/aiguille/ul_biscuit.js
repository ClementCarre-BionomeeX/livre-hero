// L'Île Folle-Aiguille · side story « La guerre du biscuit » (owes its question to Gulliver's Travels and its war over
// the right end of an egg: how does a war over nothing begin, and can anyone stop it once it has begun?). Act III, the
// mousse in the Sargasso calm: idleness and heat set the starboard watch against the larboard watch over the right way
// to rid a ship's biscuit of its weevils, by knocking it on the left side or the right. Within three days it is a
// matter of honour, then of fists, and both watches agree to take the child, who belongs to neither, as judge. The
// child rules for one side (ul:camp), mocks both and refuses to rule (ul:rire), or decrees a third way that offends
// everybody (ul:milieu). Wired in A3n_jours.
module.exports = {
  passages: {
    UL_kerdiles: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "Kerdilès est assis sur un canon, à tribord, en train d'affûter son couteau sur une pierre, à petits coups réguliers, en regardant de l'autre côté du pont, où Péron fait semblant de ne pas le voir. C'est un gabier de trente ans, sec, nerveux, avec une moustache qu'il entretient comme un jardin.",
        "Tu lui demandes pourquoi le côté droit. Il t'explique, avec une patience de maître d'école, la marque du boulanger, le côté plat, la fuite des charançons. Tu lui demandes s'il le croit vraiment. Il s'arrête d'affûter. Il réfléchit. Il dit qu'il ne s'est jamais posé la question avant le huitième jour du calme. Il dit qu'il l'a dit pour rire. Il dit que maintenant, il ne peut plus reculer, parce que toute la bordée de tribord le regarde.",
        "Puis il dit, en reprenant sa pierre, que de toute façon, l'affaire n'est pas là. Il dit que Péron, à Morlenc, la veille de l'appareillage, a dansé quatre fois avec une fille de la Basse-Fosse, une rousse, au bal du Quai-aux-Harengs, et que c'était la sienne, à lui, Kerdilès, depuis deux ans, et que Péron le savait. Il dit que le biscuit, c'est en attendant.",
        "Il fait jouer la lame à la lumière. Il dit qu'il aimerait mieux se battre pour la fille que pour les charançons, parce qu'au moins, ce serait propre. Mais qu'on ne peut pas se battre pour une fille qui est restée à Morlenc et qui a dansé avec qui elle voulait. Alors on se bat pour le biscuit. Il dit que c'est plus simple, et que tout le monde peut s'en mêler."
      ],
      choices: [
        { back: "UL_charancons", label: "Retourner au milieu du pont" }
      ] },
    UL_peron: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "Péron boude au pied du mât de misaine, les bras croisés, avec la figure d'un enfant qu'on a privé de dessert. C'est un grand garçon de vingt-cinq ans, de l'intérieur des terres, qui parle avec un accent de paysan que les gens de la côte imitent dans son dos. Il a un œil au beurre noir. Il le porte comme une décoration.",
        "Tu lui demandes pourquoi le côté gauche. Il dit que chez lui, à la ferme, son grand-père cognait le pain noir à gauche pour en faire tomber les vers, et que son grand-père n'était pas un imbécile. Il dit ça avec une dignité soudaine. Il dit que ceux de tribord le traitent de paysan depuis Morlenc, qu'ils imitent sa façon de dire « la mer », et qu'il en a assez.",
        "Il dit que la fille du bal, il ne savait pas qu'elle était à Kerdilès. Il dit qu'elle ne le lui a pas dit, et qu'elle riait, et qu'elle dansait bien, et que c'est la première fille de la côte qui ne se moquait pas de son accent. Il dit qu'il a été heureux pendant quatre danses, et qu'il paie depuis trois semaines, et qu'il trouve que c'est cher.",
        "Il décroise les bras. Il regarde, de l'autre côté du pont, Kerdilès qui affûte son couteau. Il dit, plus bas, que si on lui avait demandé pardon pour l'accent, il aurait demandé pardon pour la fille. Mais personne ne demande jamais pardon le premier, sur un navire. C'est une question de bord."
      ],
      choices: [
        { back: "UL_charancons", label: "Retourner au milieu du pont" }
      ] },
    UL_charancons: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        { first: true, text: "Le biscuit de mer, au vingtième jour d'un voyage, est un caillou plat, gris, dur comme une semelle, habité. Les charançons y creusent des galeries, de petits vers blancs y font leur nid, et l'on dit, à bord, que le biscuit marche tout seul dans les soutes. Pour le manger, il faut d'abord le déloger : on le cogne contre la table, et les bêtes tombent. Tout le monde le fait. Personne n'y a jamais réfléchi." },
        { first: true, text: "Jusqu'au huitième jour du calme. Ce jour-là, au repas de midi, Kerdilès, de la bordée de tribord, fait remarquer à haute voix que ceux de bâbord cognent leur biscuit du côté gauche, comme des paysans, alors que tout marin qui se respecte le cogne du côté droit, celui de la marque du boulanger, parce que les charançons fuient vers le côté plat. Il le dit pour rire. Personne ne rit. Péron, de bâbord, répond que les charançons fuient vers le côté bombé, que tout le monde le sait depuis toujours, et que ceux de tribord n'ont jamais su manger proprement." },
        { first: true, text: "Le lendemain, à midi, il y a deux tables. Le surlendemain, on ne se passe plus le sel. Le troisième jour, il y a un œil au beurre noir, une chemise déchirée, et une phrase sur la mère de quelqu'un. Gobert, consulté, dit que le biscuit se cogne comme on veut, et se fait traiter de traître par les deux bords à la fois. Il se retire, outré, dans la soute aux voiles." },
        { again: true, text: "Les deux bordées mangent à deux tables, et le biscuit se cogne des deux côtés à la fois, avec un bruit de guerre." }
      ],
      choices: [
        { label: "Aller trouver Kerdilès, de tribord, pendant qu'il fourbit son couteau", to: "UL_kerdiles", hide: { seen: "UL_kerdiles" } },
        { label: "Aller trouver Péron, de bâbord, qui boude au pied du mât de misaine", to: "UL_peron", hide: { seen: "UL_peron" } },
        { label: "Écouter les deux bordées, qui te cherchent", to: "UL_juge" }
      ] },
    UL_juge: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "On vient te chercher dans ton hamac. Les deux bordées se sont mises d'accord sur une seule chose : il faut un juge, et le juge ne peut être d'aucun bord. Tu es mousse. Tu dors à l'avant, mais tu manges où on te met. Tu es, disent-ils, le seul homme impartial du navire. Tu fais remarquer que tu as seize ans. On te répond que ça n'a pas d'importance, et que c'est même mieux, parce que les enfants ne mentent pas, ce qui prouve qu'ils ne t'ont jamais vu{e} mentir à Gobert.",
        "Le procès se tient au pied du grand mât, dans la chaleur blanche de midi, devant tout l'équipage assis sur les panneaux. Kerdilès plaide pour le côté droit. Il apporte des preuves : un biscuit cogné à droite, dont il fait tomber quatre charançons, qu'il compte un par un sur le pont. Péron plaide pour le côté gauche. Il cogne, il compte : cinq. Kerdilès crie à la tricherie, le biscuit était plus habité. On apporte d'autres biscuits. On compte. On recompte. Les charançons, indifférents, courent sur le pont dans toutes les directions.",
        "Au bout de deux heures, la question a changé de nature. Il ne s'agit plus de charançons. Il s'agit de savoir lequel des deux bords est composé de vrais marins, et lequel de paysans, de lâches, de cocus et de mangeurs de bouillie. On attend ton jugement. Tu vois, dans les yeux des deux bordées, que quel que soit ton verdict, il y aura du sang ce soir, et que le seul vrai ennemi à bord, c'est le calme, et l'ennui, et la soif, et que personne n'a le droit de cogner le calme du bon côté.",
      ],
      choices: [
        { label: "Donner raison à un bord : le droit, celui de la marque du boulanger", fx: { flag: "ul:camp" }, to: "UL_camp" },
        { label: "Éclater de rire, et refuser de juger une guerre de charançons", fx: { flag: "ul:rire" }, to: "UL_rire" },
        { label: "Décréter qu'on cognera désormais le biscuit par le milieu", fx: { flag: "ul:milieu" }, to: "UL_milieu" },
      ] },
    UL_camp: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "Tu prononces ton jugement, avec toute la gravité dont tu es capable : le côté droit. Celui de la marque du boulanger. Tu donnes des raisons, que tu inventes à mesure, sur les galeries des charançons et la cuisson du four. Tribord exulte. On te porte en triomphe autour du grand mât. Kerdilès t'embrasse sur les deux joues. Bâbord se tait, et se lève, et redescend dans l'entrepont, avec la dignité des vaincus qui préparent leur revanche.",
        "Ce soir-là, ton hamac a été coupé. Tu tombes sur le plancher, à deux heures du matin, au milieu des rires étouffés. Le lendemain, ta ration de biscuit a été cognée, très soigneusement, du côté gauche, devant toi, par un homme de bâbord qui te regarde dans les yeux. Pendant trois jours, bâbord ne t'adresse plus la parole. Tribord t'adopte, te protège, te donne les meilleurs morceaux, et tu comprends, au bout de trois jours, que tu es devenu{e} un drapeau, et qu'un drapeau ne s'appartient pas.",
        "La guerre du biscuit ne finit pas. Elle s'endort, quand le vent revient et qu'il y a de nouveau du travail. Mais elle ne finit pas. Des mois plus tard, à bord, on cogne encore son biscuit à droite ou à gauche selon son bord, et l'on se regarde de travers, et les nouveaux venus apprennent la règle avant de savoir pourquoi. Tu as tranché une question qui n'existait pas, et tu l'as rendue éternelle. C'est, te dit un jour Lagadec, comme ça que commencent toutes les guerres, et comme ça qu'elles ne finissent pas.",
      ],
      choices: [{ label: "Regagner l'entrepont", fx: { quest: "UL" }, back: "A3n_jours" }] },
    UL_rire: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "Tu regardes les charançons qui courent sur le pont, et les deux bordées penchées dessus, des hommes faits, barbus, tatoués, qui comptent des vers en se traitant de cocus. Et tu ris. Tu ne le fais pas exprès. Ça monte d'un coup, du ventre, un fou rire de seize ans, irrésistible, qui te plie en deux et te fait pleurer. Tu essaies de t'arrêter. Tu ne peux pas. Tu montres les charançons du doigt. Tu montres Kerdilès. Tu montres Péron. Tu ris plus fort.",
        "Les deux bordées te regardent, d'abord outrées. Puis quelqu'un, au fond, un vieux de bâbord, se met à rire aussi. Puis un de tribord. Puis Kerdilès lui-même, qui regarde son biscuit et ses quatre charançons alignés, et qui éclate, d'un grand rire de baleine. Péron résiste plus longtemps. Puis il cède. En cinq minutes, l'équipage entier rit, au pied du grand mât, sous le soleil, au milieu des herbes, à en avoir mal aux côtes, de rien, de lui-même, du calme, de l'ennui, de tout.",
        "Gobert sort de la soute aux voiles, attiré par le bruit. Il regarde son équipage plié en deux, et il dit que les Sargues les ont rendus fous, tous, et qu'il demandera à la médecin une purge pour l'ensemble. Ça les fait rire encore plus. La guerre du biscuit est finie. On n'en parle plus. Ou plutôt, on en parle encore, tous les soirs, mais pour en rire. Tu n'as rien jugé. Tu as seulement fait voir à des hommes ce qu'ils faisaient. Tu ne savais pas que ça pouvait suffire. Ça ne suffit pas toujours, te dit Lagadec. Ce jour-là, si.",
      ],
      choices: [{ label: "Regagner l'entrepont", fx: { quest: "UL" }, back: "A3n_jours" }] },
    UL_milieu: { act: "III", title: "La guerre du biscuit", place: "sargues", ambiance: "mer",
      text: [
        "Tu réfléchis longtemps, la tête dans les mains, comme un vrai juge. Puis tu te lèves. Tu prends un biscuit. Tu le poses à plat sur la table. Et tu le frappes, au milieu, avec le manche de ton couteau, d'un coup sec. Il se fend en deux. Les charançons tombent des deux côtés à la fois. Tu déclares que, désormais, à bord de la Cormorane, le biscuit se cogne par le milieu, et que les deux bords auront raison ensemble, puisque chacun aura la moitié des charançons.",
        "Il y a un silence stupéfait. Puis les deux bordées, d'une seule voix, crient au scandale. Tribord dit que c'est une trahison. Bâbord dit que c'est une insulte. Ils sont d'accord pour la première fois depuis trois jours : ton jugement est le pire qu'on ait jamais rendu sur un navire. Kerdilès et Péron, côte à côte, te traitent de tous les noms, et s'aperçoivent au bout d'un moment qu'ils te traitent des mêmes. Ils se regardent. Ils sont gênés.",
        "Pendant une semaine, tu es l'ennemi commun. On te cache ton écuelle. On te fait laver le pont deux fois. Mais les deux bordées remangent à la même table, pour pouvoir dire du mal de toi ensemble, et l'on se repasse le sel. Le jour où le vent revient, Kerdilès vient te trouver, et te dit, à voix basse, qu'il a essayé de cogner par le milieu, en cachette, et que ça marche très bien. Il te demande de ne le dire à personne. Le soir, Péron vient te dire exactement la même chose. Tu promets aux deux. Tu as fait la paix en te faisant haïr. Tu trouves que c'est un métier ingrat, et tu comprends un peu mieux les juges.",
      ],
      choices: [{ label: "Regagner l'entrepont", fx: { quest: "UL" }, back: "A3n_jours" }] },
  },
  extras: {
    quests: [
      { id: "UL", act: "III", kind: "annexe", title: "La guerre du biscuit", start: "UL_charancons", doit: "gulliver", echo: ["ul:camp", "ul:rire", "ul:milieu"] },
    ],
  },
};
