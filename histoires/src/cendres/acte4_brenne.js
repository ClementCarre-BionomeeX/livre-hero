// Act IV · the Lisse front: the queen's army around the fort of Brenne, Ysolde (back with the child, or captain of the
// van all year, asking for the bridge so that this time it does not burn), Queen Isaure, Hautvent between the lines
// (Rodric, Maëlle), the crossing to the Corvanne camp, Lisandre (who crossed over during the year if she did not fall
// with the child) and Ilan, the margravine Ottilie. Ends on the eve of the battle.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var YS_AVEC = { has: "rupture:avec:ysolde" }, LI_AVEC = { has: "rupture:avec:lisandre" };
var LISSE_SAIT = { any: [{ has: "ysolde:lisse_sait" }, { has: "sud4:demande=lisse" }] };
module.exports = {
  IV_r_est: P({ title: "La route de l'est", place: null,
    text: [
      "La route de l'est suit la Pallante, puis remonte vers les Marches. Plus vous approchez de la Lisse, plus la route est vide. Les villages sont fermés. Les champs ne sont pas fauchés. Les gens sont partis vers l'ouest, ou se terrent.",
      "À un carrefour, un pendu. Un soldat de la reine, avec un écriteau : *Déserteur.* Et dessous, quelqu'un a ajouté au charbon, d'une écriture d'enfant, son nom, son village, et l'âge qu'il avait. Dix-sept ans.",
      { with: "ysolde", text: "Ysolde coupe la corde. Elle se tait. Elle creuse elle-même, au bord du chemin, avec sa dague et ses mains, et quand le trou est assez profond, elle y couche le garçon, et elle grave sur une pierre ce qu'il y avait sur l'écriteau, tout, sauf le mot déserteur." },
    ],
    choices: [{ label: "Continuer", to: "@route" }] }),

  IV_br_arrivee: P({ title: "Le camp de la reine", place: "brenne",
    text: [
      "Le fort de Brenne, gris, sur son éperon, au-dessus de la vallée de la Lisse. Autour de lui, une ville de toile : l'armée d'Esquarre, huit mille hommes, des tentes à perte de vue, des chevaux, des forges, des cuisines, la fumée de mille feux.",
      "À une lieue en aval, là où la Lisse fait un coude, un pont de pierre blanche, neuf, propre. Et sur l'autre rive, une autre ville de toile, aux bannières bleues : Corvanne.",
      "Entre les deux, dans un repli de la rivière, quarante maisons basses aux toits de lauze. Hautvent.",
      { with: "ysolde", text: "Ysolde regarde le pont. Ses yeux ne glissent plus dessus. Ils s'y posent, et ils restent." },
    ],
    choices: [{ label: "Entrer dans le camp", to: "IV_br" }] }),

  IV_br: P({ title: "Brenne", place: "brenne", hub: true,
    text: [
      "Le camp bourdonne. Partout, des hommes qui aiguisent, qui comptent, qui écrivent des lettres qu'ils n'enverront pas. Sur les tentes des officiers, on a peint les noms en grosses lettres. Sur les tentes des soldats, chacun a écrit le sien, à la craie, au-dessus de l'entrée.",
    ],
    choices: [
      { label: "Le fort, et la compagnie de Brenne", hide: { seen: "IV_br_fort" }, to: "IV_br_fort" },
      { label: "Demander audience à la reine", hide: { seen: "IV_br_reine" }, to: "IV_br_reine" },
      { label: "Descendre à Hautvent", hide: { seen: "IV_br_hautvent" }, to: "IV_br_hautvent" },
      { label: "Passer la Lisse, vers le camp de Corvanne", if: { seen: "IV_br_hautvent" }, why: "Il faut un passeur. À Hautvent, on en trouvera un.", hide: { seen: "IV_cv_rive" }, to: "IV_cv_rive" },
      { label: "Le lieutenant Herbelot, devant la tente des éclaireurs", hide: { seen: "IV_P_debut" }, to: "IV_P_debut" },
      { label: "Faire le chemin de ronde avec Ysolde", hide: { any: [{ seen: "IV_V_ysolde" }, { not: { present: "ysolde" } }] }, to: "IV_V_ysolde" },
      { label: "Ton frère, assis à l'écart, sans son masque", hide: { any: [{ seen: "IV_V_sansnom" }, { not: { present: "sansnom" } }] }, to: "IV_V_sansnom" },
      { label: "Gaspard et son pot de levain", hide: { any: [{ seen: "IV_V_gaspard" }, { not: { present: "gaspard" } }] }, to: "IV_V_gaspard" },
      { label: "Linette, aux archives du fort, à minuit", hide: { any: [{ seen: "IV_V_linette" }, { not: { present: "linette" } }] }, to: "IV_V_linette" },
      { label: "Boire le vin de Corvanne avec Rodric", hide: { any: [{ seen: "IV_V_rodric" }, { not: { present: "rodric" } }] }, to: "IV_V_rodric" },
      { label: "La cage de la cour basse", hide: { seen: "IV_Q_thibaut" }, to: "IV_Q_thibaut" },
      { label: "Maëlle, sous l'auvent du grand métier", hide: { any: [{ seen: "IV_Q_tap" }, { not: { seen: "IV_br_hautvent" } }] }, to: "IV_Q_tap" },
      { label: "Recueillir les noms du camp de la reine", hide: { any: [{ not: { has: "iv:tap_promis" } }, { seen: "IV_Q_tap_esq" }, { seen: "IV_Q_tap_fin" }] }, to: "IV_Q_tap_esq" },
      { label: "Repasser la Lisse, chercher les noms de Corvanne", hide: { any: [{ not: { has: "iv:tap_promis" } }, { seen: "IV_Q_tap_cv" }, { not: { seen: "IV_cv_rive" } }, { seen: "IV_Q_tap_fin" }] }, to: "IV_Q_tap_cv" },
      { label: "Porter les noms à Hautvent, pour la nuit des métiers", hide: { any: [{ not: { has: "iv:tap_promis" } }, { seen: "IV_Q_tap_fin" }] }, if: { any: [{ seen: "IV_Q_tap_esq" }, { seen: "IV_Q_tap_cv" }] }, why: "Tu n'as encore aucun nom à lui apporter.", to: "IV_Q_tap_fin" },
      { label: "L'infirmerie, sous la grande tente", hide: { seen: "IV_br_infirmerie" }, to: "IV_br_infirmerie" },
      { label: "Des sapeurs, au pied du tilleul de la cour", hide: { any: [{ seen: "IV_br_tilleul" }, { not: { present: "ysolde" } }] }, to: "IV_br_tilleul" },
      { label: "Le puits du fort, où les femmes tirent l'eau", hide: { seen: "IV_br_puits" }, to: "IV_br_puits" },
      { label: "L'aumônier et son enclume, devant la chapelle de toile", hide: { seen: "IV_br_plaques" }, to: "IV_br_plaques" },
      { label: "Un garçon de Brenne, d'une quinzaine d'années", hide: { any: [{ seen: "IV_br_recrue" }, { not: { seen: "YS_Q_recrue" } }] }, to: "IV_br_recrue" },
      { label: "Ysolde descend sous le fort", hide: { any: [{ seen: "IV_C_ysolde" }, { not: { present: "ysolde" } }] }, to: "IV_C_ysolde" },
      { label: "Lisandre, seule au bord de l'eau, qui cherche un couplet", hide: { any: [{ seen: "IV_C_lisandre" }, { not: { present: "lisandre" } }, { not: { seen: "IV_cv_rive" } }] }, to: "IV_C_lisandre" },
      { label: "Ton frère, sur un banc, devant chez Maëlle", hide: { any: [{ seen: "IV_C_sansnom" }, { not: { present: "sansnom" } }, { not: { seen: "IV_br_hautvent" } }] }, to: "IV_C_sansnom" },
      { label: "Gaspard et le four de campagne", hide: { any: [{ seen: "IV_C_gaspard" }, { not: { present: "gaspard" } }] }, to: "IV_C_gaspard" },
      { label: "Rodric, chez Maëlle, avec ses trois cloches", hide: { any: [{ seen: "IV_C_rodric" }, { not: { present: "rodric" } }, { not: { seen: "IV_br_hautvent" } }] }, to: "IV_C_rodric" },
      { label: "Repasser la Lisse, jusqu'au village de Lisse-en-Corvanne", hide: { any: [{ seen: "IV_Q_lisse" }, { not: { seen: "IV_cv_rive" } }] }, to: "IV_Q_lisse" },
      { label: "La veille de la bataille", if: { all: [{ seen: "IV_br_reine" }, { seen: "IV_cv_rive" }] }, why: "Il reste des gens à voir, des deux côtés de la rivière.", to: "IV_br_veille", big: true },
    ] }),

  // ---- Ysolde
  IV_br_fort: P({ title: "La tour du Loup", place: "brenne",
    text: [
      { if: YS_AVEC, text: "La compagnie de Brenne campe dans la cour du fort. Quarante hommes. Gautier, le vieux sergent, est assis sur un tonneau, à recoudre une sangle. Il lève les yeux. Il voit Ysolde. Il pose la sangle. Il se lève, très lentement, parce qu'il a soixante-cinq ans et un genou qui ne veut plus. « Capitaine », dit-il. Et il pleure, devant ses hommes, sans se cacher, et aucun de ses hommes ne rit." },
      { if: YS_AVEC, text: "On leur a donné un autre capitaine, cet hiver. Un jeune comte de la cour, qui ne sait pas où est le pont. Les quarante ne lui obéissent qu'à moitié. « On vous attendait, dit Gautier. On ne savait pas qu'on vous attendait. Maintenant on sait. »" },
      { if: { not: YS_AVEC }, text: "Ysolde est en haut de la tour du Loup, seule, à regarder le pont. Elle se retourne en entendant tes pas dans l'escalier. Elle a des cheveux gris, maintenant, sur les tempes. Elle a trente-trois ans." },
      { if: { not: YS_AVEC }, text: "« Tu es tombé, dit-elle. Je t'ai vu tomber. J'avais la main tendue, et elle est restée vide, par ta faute ou par la mienne. » Elle se tait. « Ensuite, j'ai fait ce que je sais faire. Je suis revenue à la reine. Je lui ai demandé une seule chose : le commandement du pont de Lisse. Elle me l'a donné. Personne d'autre n'en voulait. »" },
      { if: { all: [{ not: YS_AVEC }, LISSE_SAIT] }, text: "« Je sais ce que j'ai fait sur ce pont, dit-elle. Je l'ai lu. Je ne m'en souviens pas, et je le sais, et c'est pire. Alors cette fois, je le tiens. Et cette fois, il ne brûlera pas. Tout le monde passera. Les nôtres, les leurs, les chèvres. Je l'ai juré. À personne. À moi. »" },
      { if: { all: [{ not: YS_AVEC }, { not: LISSE_SAIT }] }, text: "« Je ne sais toujours pas ce qui s'est passé sur ce pont, dit-elle. Mais tout le monde, ici, change de voix quand on en parle. Alors je le tiens, et je verrai bien. Peut-être que ça reviendra. Peut-être que c'est ce que je mérite. »" },
    ],
    choices: [
      { label: "« Viens avec nous, cette nuit. On passe la Lisse, on va parler à Corvanne. »", hide: YS_AVEC, test: { dom: "social", label: "Ysolde", help: [{ if: { conf: "ysolde", min: 40 }, v: 20 }, { if: { has: "ysolde:sait_cerf" }, v: 10 }, { if: { has: "ame:lisse" }, v: 15 }] },
        win: { fx: { join: "ysolde", flag: "ysolde:iv=vient", conf: { ysolde: 10 }, ep: ["perso", 2000] }, to: "IV_br_ysolde_vient" },
        lose: { fx: { flag: "ysolde:iv=pont" }, to: "IV_br_ysolde_reste" } },
      { label: "La laisser à son pont", hide: YS_AVEC, fx: { flag: "ysolde:iv=pont" }, to: "IV_br_ysolde_reste" },
      { label: "Laisser Ysolde reprendre sa compagnie", hide: { not: YS_AVEC }, to: "IV_br_ysolde_compagnie" },
    ] }),

  IV_br_ysolde_compagnie: P({ title: "La compagnie", place: "brenne",
    text: [
      "Ysolde fait le tour de ses quarante hommes, un par un. Elle dit le nom de chacun. Elle ne se trompe pas une fois. Puis elle va voir le jeune comte, dans sa tente, et elle en ressort une demi-heure plus tard avec le commandement de la compagnie, et le comte en ressort avec l'air de quelqu'un qui a enfin compris quelque chose.",
      { if: { has: "ame:lisse" }, text: "Le soir, elle descend à la rivière, là où les trois cents de Lisse se sont assis dans l'herbe, en rang. Elle s'assied avec eux. Elle se tait. Eux non plus." },
      "« Je reste avec vous, te dit-elle ensuite. Mais demain, je prendrai le pont. Personne d'autre ne le tiendra comme il faut. »",
    ],
    choices: [{ fx: { flag: ["ysolde:iv=compagnie", "ysolde:pont"], conf: { ysolde: 5 } }, back: "IV_br" }] }),

  IV_br_ysolde_vient: P({ title: "Ce soir", place: "brenne",
    text: ["Elle regarde le pont encore un moment. Puis elle décroche son manteau. « Une nuit, dit-elle. Je serai revenue avant l'aube. Gautier tiendra. Gautier tient toujours. » Elle descend l'escalier devant toi, deux marches à la fois."],
    choices: [{ fx: { flag: "ysolde:pont" }, back: "IV_br" }] }),

  IV_br_ysolde_reste: P({ title: "Le pont", place: "brenne",
    text: ["« Non, dit-elle. Pas cette fois. Ma place est ici. Si je pars une nuit, quelqu'un d'autre le tiendra. Et quelqu'un d'autre, je sais ce qu'il fera. » Elle se retourne vers le pont. « Va parler à Corvanne. Dis-leur que la capitaine de Brenne tient le pont. Ils sauront ce que ça veut dire. Ou ils croiront le savoir. »"],
    choices: [{ fx: { flag: "ysolde:pont" }, back: "IV_br" }] }),

  // ---- The queen
  IV_br_reine: P({ title: "La reine", place: "brenne",
    text: [
      "La tente de la reine est au centre du camp, grande, bleue et argent, et presque vide : une table, des cartes, deux chaises, un lit de camp. Isaure d'Esquarre est assise, les coudes sur les cartes. Cinquante et un ans. Elle a l'air d'en avoir soixante, maintenant, et pas seulement aux mains.",
      { if: { has: "isaure:registre" }, text: "« On m'a apporté un livre, l'an dernier, dit-elle. Je l'ai lu. Toutes les pages. Ce que j'ai vendu, et à qui, et pour quoi. Mon fils. Un bourg de Corvanne. Un pont. » Elle a un rire sec. « J'ai fermé sa Chancellerie. Je l'ai déclaré traître. Et hier, je lui ai écrit pour lui demander de céder Corvanne. Parce que je ne sais rien faire d'autre. »" },
      { if: { not: { has: "isaure:registre" } }, text: "« Le Greffier-Majeur dit que vous pouvez finir cette guerre, dit-elle. Qu'une ligne suffit, et un passeur. Il dit que le passeur, c'est vous. » Elle te regarde, longtemps. « Vous n'avez pas l'air de grand-chose. »" },
      { if: { has: "isaure:brisee" }, text: "Sur la table, sous les cartes, une feuille pliée en quatre, usée aux plis. Tu sais ce que c'est : la feuille d'Aymeric, son fils, que Mordace lui avait prise et que vous lui avez rendue. Elle la touche du bout des doigts, de temps en temps, sans la regarder." },
      { if: { has: "proces:tour=rendu" }, text: "« Il y a six mois, une nuit, je me suis réveillée, dit-elle tout à coup. Je savais quelque chose que je ne savais pas en m'endormant. Un homme dans une tente, des épaules de bœuf, un genou qui fait mal. Il disait : il faut que ce soit fait vite, et une fois. » Elle lève les yeux. « C'était mon ancêtre. J'ai sa voix. J'ai dit cette phrase-là, moi, mot pour mot, au conseil, il y a trois ans, avant Lisse. »" },
    ],
    choices: [{ label: "« Qu'est-ce que vous voulez, Majesté ? »", to: "IV_br_reine2" }] }),

  IV_br_reine2: P({ title: "Ce que veut une reine", place: "brenne",
    text: [
      "« Ne pas recommencer, dit-elle. C'est tout. Je ne demande même pas de gagner. Demain à l'aube, huit mille hommes de chaque côté vont se jeter sur un pont large de six pas. Le premier qui arrivera au milieu le fera sauter, ou le brûlera, parce que c'est ce qu'on fait des ponts. Et dans trois ans, on cédera ce souvenir-là aussi, pour pouvoir recommencer. »",
      "« Si Corvanne veut parler, je parlerai. Mais Corvanne ne veut pas. Corvanne a perdu onze villages dans la neige, et Corvanne croit que c'est moi. Et la vérité, c'est que c'est peut-être moi. Je ne sais plus ce que j'ai signé. »",
      "Elle se lève. « Allez voir Corvanne. Dites-leur ce que vous voulez. Si vous revenez avec une raison de ne pas me battre demain, je l'écouterai. Sinon, je ferai ce que je dois. Et si à l'aube il n'y a rien, j'enverrai un mot à Pallanche. Une ligne. »",
    ],
    choices: [{ fx: { flag: "reine:iv=parle", clue: "n_reine_lisse" }, back: "IV_br" }] }),

  // ---- Hautvent
  IV_br_hautvent: P({ title: "Hautvent", place: "brenne",
    text: [
      "Hautvent est entre les deux armées, dans son repli de rivière, et il tisse. Les métiers battent sous les auvents comme si de rien n'était. Le linge sèche. Il n'y a plus que des femmes, des enfants, des vieux, et un homme.",
      "Il est assis devant la maison de sa sœur, un manche de hache sur les genoux, trois petites cloches cousues à l'épaule de son pourpoint, qui tintent quand il respire. Rodric. Il te voit.",
      { if: { has: "rodric:oublie_champion" }, text: "Il te salue poliment. Il ne sait plus très bien qui tu es. Puis il fronce les sourcils, et il dit : « Le tournoi. Il y avait un tournoi. Tu étais là. » Il a l'air content d'avoir trouvé." },
      { if: { not: { has: "rodric:oublie_champion" } }, text: "Il se lève, lourdement. « Te voilà, dit-il. On disait que tu étais mort. Moi, je disais que tu étais tombé. Ce n'est pas pareil. »" },
      "Maëlle sort de la maison, les manches retroussées. Elle soutient tous les regards, le tien compris. Derrière elle, Ilse, sept ans, avec sa poupée.",
      { if: { has: "iv:perrine" }, text: "Sous un auvent, une femme file, une tache de vin sur la joue. Tu t'approches. Tu lui dis la phrase d'Hersende, mot pour mot, avec le genièvre. Elle s'arrête de filer. Elle te regarde comme on regarde quelqu'un qui vient de dire une chose très étrange et très juste. « Du genièvre, répète-t-elle. Oui. » Elle reprend son fuseau. Le soir, toute la rue sent le pâté de lièvre. Elle ne sait pas pour qui elle le fait. Elle en garde une part, sur la fenêtre, enveloppée dans un linge." },
      { with: "ysolde", text: "Maëlle voit Ysolde. Elle ne crache pas, cette fois. Elle dit seulement : « Capitaine. » Ysolde répond : « Maëlle. » Et elles restent comme ça, à se regarder, jusqu'à ce qu'Ilse aille prendre la main d'Ysolde, comme si c'était évident." },
    ],
    choices: [{ label: "« Rodric. On a besoin d'un passeur. »", to: "IV_br_rodric" }] }),

  IV_br_rodric: P({ title: "Le passeur", place: "brenne",
    text: [
      "« Un passeur, répète Rodric. Pour aller chez les Bleus. » Il gratte sa barbe. « J'ai une barque. Mon beau-frère avait une barque. Elle est sous le saule, en aval. Elle n'a pas servi depuis le quatorze brumaire. »",
      "Maëlle dit, sans se retourner : « Il ramenait les gens de Lisse vers Corvanne, cette nuit-là. Avec la barque. Il a fait onze voyages. Au douzième, il est monté sur le pont, pour aider une vieille avec sa chèvre. »",
      "Rodric se lève. « Je vous passe. Et je reste avec vous. J'ai dit à ma sœur que je ne reviendrais à Hautvent que quand il n'y aura plus d'armée de chaque côté. » Il regarde Maëlle. « Elle a dit : alors ne reviens pas. Elle plaisante. Je crois. »",
    ],
    choices: [{ label: "Convenir de se retrouver au saule, à la nuit", fx: { join: "rodric", flag: "rodric:iv", ep: ["perso", 1000] }, to: "IV_br" }] }),

  // ---- The Corvanne camp
  IV_cv_rive: P({ title: "La traversée", place: "brenne",
    text: [
      "La barque est noire, étroite, et elle prend l'eau. Rodric rame en silence. Vous passez à cent pas en aval du pont, sous les peupliers. Le pont, dans la nuit, est blanc comme un os.",
      "Sur l'autre rive, des sentinelles en manteau bleu. Elles vous voient arriver. Elles ne tirent pas : Rodric chante, à mi-voix, une chanson en corvannais, une chanson de mariniers, et l'une des sentinelles chante le couplet suivant.",
      { if: { not: LI_AVEC }, text: "Au sommet de la berge, quelqu'un vous attend, une lanterne à la main, un manteau bleu sur les épaules. Une femme. Elle lève la lanterne. C'est Lisandre." },
      { if: LI_AVEC, text: "Lisandre saute de la barque avant qu'elle touche la rive, dans l'eau jusqu'aux genoux. Elle remonte la berge en courant. Elle cherche quelqu'un." },
    ],
    choices: [
      { label: "Monter jusqu'à elle", hide: LI_AVEC, to: "IV_cv_lisandre" },
      { label: "La suivre", hide: { not: LI_AVEC }, to: "IV_cv_lisandre_cherche" },
    ] }),

  IV_cv_lisandre: P({ title: "L'autre rive", place: "brenne",
    text: [
      "Elle porte le bleu de Corvanne. Elle a les cheveux coupés court, à la mode d'ici. Elle te regarde, et elle sourit, d'un sourire de travers, loin des sourires de cour, celui d'une femme qui a appris à rire de sa propre voix.",
      "« Je suis passée de l'autre côté, dit-elle. Après la chute. Je suis descendue du col, j'ai marché jusqu'à la Lisse, et j'ai traversé. Je cherchais quelqu'un. » Elle hausse les épaules. « À Vasselin, on dit que je suis une traîtresse. Ici, on dit que je suis une espionne. Les deux ont raison, un peu. »",
      { if: { any: [{ has: "lisandre:ilan_dit" }, { has: "lisandre:ilan_ment" }] }, text: "« Il est là, dit-elle. Ilan. Il est le chancelier de la margrave, maintenant. Il ne se souvenait pas de moi. Trois jours, il y a deux ans, c'est peu. Alors je lui ai raconté. Il a écouté. Il a dit que c'était une belle histoire. Puis, un soir, il m'a demandé de la raconter encore. »" },
      { if: { has: "lisandre:ilan_livre" }, text: "« Il est là, dit-elle. Ilan. Le chancelier de la margrave. Il est sorti des cachots de Vasselin au printemps, dans un échange de prisonniers. C'est moi qui l'y avais mis. Je suis venue lui dire pardon. Il m'a regardée comme on regarde un pont qu'on a vu brûler. Il ne m'a pas chassée. C'est tout ce que je sais. »" },
      { if: { not: { any: [{ has: "lisandre:ilan_dit" }, { has: "lisandre:ilan_ment" }, { has: "lisandre:ilan_livre" }] } }, text: "« Je cherchais un garçon que j'ai évité, il y a deux ans, dans une galerie de cartes, dit-elle. Je ne sais même pas pourquoi. Je l'ai trouvé. Il ne m'a jamais vue. C'est peut-être mieux. Il est le chancelier de la margrave. »" },
      { if: { souv: "lisandre:voix" }, text: "Elle chante pour les soldats de Corvanne, le soir. Avec sa vraie voix, rauque, trop grave. Ils ne savent pas que c'est la voix d'une traîtresse. Ils trouvent que c'est la voix d'une femme qui a perdu quelqu'un. Ils ont raison aussi." },
    ],
    choices: [{ label: "« Mène-nous à la margrave. »", fx: { join: "lisandre", flag: "lisandre:iv=corvanne", conf: { lisandre: 10 }, ep: ["perso", 1500] }, to: "IV_cv_margrave" }] }),

  IV_cv_lisandre_cherche: P({ title: "Ilan", place: "brenne",
    text: [
      "Elle demande aux sentinelles, en corvannais, avec l'accent de la cour. Elles la regardent. L'une d'elles finit par montrer la grande tente bleue, au milieu du camp. « Le chancelier », dit-elle.",
      "Lisandre s'arrête. « Il est chancelier, dit-elle. Il était secrétaire. Il avait de l'encre sur les doigts et il riait trop fort. » Elle respire. « Un an. Il a pu se passer beaucoup de choses en un an. »",
    ],
    choices: [{ label: "Aller à la tente bleue", fx: { flag: "lisandre:iv=avec" }, to: "IV_cv_margrave" }] }),

  IV_cv_margrave: P({ title: "La margrave", place: "brenne",
    text: [
      "Dans la grande tente bleue, autour d'une carte de la Lisse, une femme de soixante ans en cuirasse, le visage carré, les cheveux blancs tirés en arrière : Ottilie, margrave de Corvanne. À côté d'elle, un homme de trente ans, maigre, de l'encre sur les doigts. Ilan.",
      "Il voit Lisandre. Il se tait. Il pose sa plume.",
      "« Esquarre envoie des enfants, maintenant ? dit la margrave. Ou des fantômes ? » Elle te regarde. Ses yeux s'arrêtent sur les tiens. « Gris presque blancs. On en avait, dans les vieilles familles de la Lisse. Avant. »",
      "« Onze villages, dit-elle. Onze villages de Corvanne, dans la neige blanche, cet hiver. On y est entrés au printemps. Les gens y étaient. Ils avaient perdu nos noms, et jusqu'au souvenir d'être de Corvanne. Ils parlaient esquarrois. » Elle frappe la carte. « Votre reine nous prend nos villages sans tirer l'épée. Demain, nous tirerons la nôtre. »",
    ],
    choices: [
      { label: "Lui dire la vérité : Mordace, les fondateurs, la digue, l'Outre-Blanc", test: { dom: "social", label: "La vérité", help: [{ if: { present: "lisandre" }, v: 15 }, { if: { item: "registre_anselin" }, v: 15 }, { if: { has: "aelan:dit_les_noms" }, v: 10 }, { if: { present: "sansnom" }, v: 10 }] },
        win: { fx: { flag: ["corvanne:iv=ecoute", "corvanne:sait_mordace"], ep: ["perso", 2500] }, to: "IV_cv_ecoute" },
        lose: { fx: { flag: "corvanne:iv=doute" }, to: "IV_cv_doute" } },
      { label: "Lui dire ce que Mordace propose à la reine : céder Corvanne", fx: { flag: ["corvanne:iv=menace", "corvanne:sait_cession"], ep: ["perso", 1500] }, to: "IV_cv_menace" },
    ] }),

  IV_cv_ecoute: P({ title: "La margrave écoute", place: "brenne",
    text: [
      "Tu racontes. La plaine blanche, la ville aux tours, les cinq dans la glace, le registre barré, la tour de Pallanche et la queue devant le porche. Ilan prend des notes, au début. Puis il arrête.",
      { if: { item: "registre_anselin" }, text: "Tu poses le registre d'Anselin sur la carte de la Lisse. Tu l'ouvres. Tu lis, à voix haute, une page de noms barrés. La margrave écoute. À la cinquième ligne, elle dit : « Attendez. » Elle te fait relire un nom. C'est le nom d'un hameau de la Lisse, côté Corvanne, qui n'existe plus depuis trois siècles. Sa grand-mère le chantait." },
      "Quand tu as fini, la margrave reste longtemps silencieuse. « Si c'est vrai, dit-elle, ce n'est pas votre reine qui nous prend nos villages. C'est un greffier qui nous prend à tous. » Elle regarde Ilan. Ilan hoche la tête. « Je ne retirerai pas mon armée, dit-elle. Je ne suis pas folle. Mais demain, à l'aube, je ne serai pas la première à poser le pied sur ce pont. »",
    ],
    choices: [{ label: "« C'est assez. »", fx: { flag: "corvanne:attend" }, to: "IV_cv_ilan" }] }),

  IV_cv_doute: P({ title: "La margrave doute", place: "brenne",
    text: [
      "Tu racontes. Elle t'écoute, poliment, comme on écoute un conteur sur une place. À la fin, elle dit : « C'est une belle histoire. Les Esquarrois ont toujours eu de belles histoires. » Elle se lève. « Raccompagnez-les à leur barque. Demain, à l'aube, nous verrons ce que vaut leur pont. »",
      "Ilan reste immobile. Il te regarde, puis il regarde Lisandre. Il voudrait y croire, et il se méfie de cette envie.",
    ],
    choices: [{ label: "Sortir de la tente", to: "IV_cv_ilan" }] }),

  IV_cv_menace: P({ title: "Une ligne", place: "brenne",
    text: [
      "Tu le lui dis : une ligne dans le Grand Livre, et demain Corvanne n'aura jamais existé. Elle te regarde comme on regarde quelqu'un qui vient de tirer un couteau.",
      "Puis elle rit. Un rire bref, de vieux soldat. « Alors c'est ça. Elle n'a pas besoin de gagner. Il lui suffit d'écrire. » Elle se tourne vers Ilan. « Les hommes d'Ostrel passent la rivière cette nuit, au gué. On attaque le fort avant l'aube, avant que l'encre sèche. »",
      "Ilan pâlit. « Margrave. »",
      "« Avant l'aube, chancelier. »",
    ],
    choices: [{ label: "Sortir de la tente", fx: { flag: "corvanne:attaque_nuit" }, to: "IV_cv_ilan" }] }),

  IV_cv_ilan: P({ title: "Ilan", place: "brenne",
    text: [
      "Dehors, Ilan vous rattrape. Il a l'air d'un homme qui a pris une décision dans les dix derniers pas.",
      { with: "lisandre", text: "Il s'arrête devant Lisandre. « Raconte-la encore, dit-il. L'histoire. Celle des trois jours. » Elle le regarde. « Maintenant ? » « Maintenant. Je ne sais pas si demain il y aura quelqu'un pour s'en souvenir. »" },
      { with: "lisandre", text: "Elle la raconte. Il écoute. À la fin, il t'épargne le « belle histoire ». Il dit : « C'était moi. » Et ce n'est pas un souvenir qui revient, tu le vois bien. C'est une décision." },
      { if: { has: "corvanne:attaque_nuit" }, text: "« Les hommes d'Ostrel, dit-il. Quatre cents, au gué de l'ancien pont, à la troisième heure. Si votre capitaine de Brenne les attend là, la surprise tombe, et la margrave pourra attendre l'aube. » Il te tend un papier. « Je trahis mon pays. Je crois. Ou je le sauve. Demain on saura. »" },
      { if: { not: { has: "corvanne:attaque_nuit" } }, text: "« Demain, dit-il, je serai sur la rive, à côté d'elle. Si quelqu'un, de votre côté, s'avance sur le pont sans arme, je lui dirai de ne pas tirer. Elle m'écoute, parfois. » Il hésite. « Pas toujours. »" },
    ],
    choices: [{ label: "Faire un tour dans le camp avant de repartir", to: "IV_cv_camp" }] }),

  // ---- The eve
  IV_br_veille: P({ title: "La veille", place: "brenne",
    text: [
      "La nuit tombe sur la Lisse. Des deux côtés, des milliers de feux. Des deux côtés, des hommes qui chantent, pour ne pas penser, et ce sont parfois les mêmes chansons.",
      { if: { has: "corvanne:attaque_nuit" }, text: "À la troisième heure, au gué de l'ancien pont, quatre cents hommes de Corvanne entrent dans l'eau en silence. Sur la berge d'Esquarre, Gautier les attend, avec la compagnie de Brenne, et des torches qu'il n'allume pas. Il les laisse sortir de l'eau. Il les laisse voir qu'ils sont vus. Puis il dit, très fort, en corvannais : « Rentrez chez vous. Il est tard. » Ils rentrent." },
      { if: { has: "clan:descend" }, text: "Sur la crête au-dessus du camp, des tambours. Le clan du Corbeau est arrivé. Il ne descend pas vers l'armée. Il s'installe sur la colline, entre les deux rives, et il commence à chanter le chant des morts." },
      "Tu ne dors pas. Tu regardes le pont, blanc comme un os, au milieu de la rivière.",
      "Demain, quelqu'un va devoir s'avancer dessus.",
    ],
    choices: [{ label: "Attendre l'aube", fx: { flag: "iv:veille", ep: ["histoire", 3000] }, to: "IV_l_aube", big: true }] }),
};
