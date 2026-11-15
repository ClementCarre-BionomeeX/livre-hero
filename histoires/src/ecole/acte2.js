// Act II, « L'hiver » (days 7 to 12): the subject of the great exam, Maître Salvanhac lost at the port and his
// notebook, the storm on the dike, the duel of Verre, the second Thursday tea, the winter concert; and in the library,
// the three things the old master hid (the cipher, the sealed cabinet, the torn page).
module.exports = {
  B_hiver: {
    act: "II", title: "L'annonce", place: "cour",
    text: [
      "L'hiver arrive en une nuit. Au matin du septième jour, les tilleuls sont blancs, le puits fume, et la cloche appelle tout le collège dans la grande salle des actes, sous les portraits des recteurs, pour l'annonce du sujet de l'examen.",
      "Le Recteur monte à la tribune. Il parle d'abord de la digue, avec émotion : trente ans qu'elle tient, trente ans que la ville dort tranquille. Puis il baisse la voix. « Mais la pierre s'use, mes enfants. Les signes s'effacent sous le sel. Il faut que le collège apprenne à les refaire, et le collège, c'est vous. » Un murmure parcourt la salle. « Cette année, chaque élève, de la première à la quatrième année, présentera au grand examen de printemps une reprise d'un signe de la digue, devant la ville, sur la pierre même. »",
      "Dame Castagnet, assise au premier rang des maîtres, reste de pierre. Maître Vilmorin se gratte la moustache. Maître Salvanhac regarde ses mains.",
      "On distribue les signes par tirage au sort, année par année. Les premières années reçoivent les petits signes du parapet, les plus simples. Quand vient ton tour, le Recteur lève la main avant que tu plonges la tienne dans l'urne. « Pour notre bourse de Brèches, dit-il en souriant, je voudrais quelque chose de plus beau. J'ai vu sa main au thé du jeudi. » Il écrit lui-même sur un billet, le plie, et te le tend.",
      "Sur le billet : « La Tête. »",
      "Un silence, puis des chuchotements dans toute la salle. La Tête est le plus grand signe de la digue, celui qui reçoit la mer le premier. On ne le donne même pas aux quatrièmes années.",
    ],
    fx: { meet: "daubrac", ep: ["seance", 300] },
    choices: [
      { label: "Remercier le Recteur, et prendre le billet", fx: { trait: { franchise: -1 }, regard: { daubrac: "cordial" } }, to: "B_hiver_suite" },
      { label: "Lui demander, devant tout le monde, pourquoi toi", fx: { trait: { audace: 1, franchise: 1 } }, to: "B_hiver_question" },
    ],
  },
  B_hiver_question: {
    act: "II", title: "L'annonce", place: "cour",
    text: [
      "Ta voix résonne dans la grande salle, plus fort que tu ne l'aurais voulu. Deux cents têtes se tournent vers toi.",
      "Le Recteur, loin de se fâcher, sourit plus largement. « Parce que la digue a été dessinée par un élève de troisième année, mon enfant, et qu'on m'a dit qu'il était fou. Il faut toujours donner sa chance à un fou. » La salle rit. Il te tend le billet. Tu le prends.",
    ],
    choices: [{ label: "Sortir avec les autres", to: "B_hiver_suite" }],
  },
  B_hiver_suite: {
    act: "II", title: "L'annonce", place: "cour",
    text: [
      "Dans la cour, on s'écarte sur ton passage. Les uns te plaignent, les autres te jalousent, et la plupart pensent que le Recteur s'amuse à te voir échouer.",
      { with: "yse", text: "Ysé lit le billet par-dessus ton épaule. « La Tête. Il te déteste ou il t'adore. Dans les deux cas, je n'aimerais pas être à ta place. » Elle réfléchit. « Si, en fait. J'aimerais bien. »" },
      { with: "jodoc", text: "Jodoc a tiré un petit signe de parapet, un nœud de tenue. Le même que l'épreuve d'automne. Il le regarde comme on regarde une condamnation." },
      "Valérien passe près de toi sans s'arrêter. Il a tiré un signe de troisième année, l'Œil, et il garde cela pour lui. Il te regarde, puis il regarde son oncle, qui sort de la salle au bras de Dame Castagnet en riant.",
    ],
    choices: [{ back: "H_cour" }],
  },
  B_perdu: {
    act: "II", title: "Le maître perdu", place: "port",
    text: [
      "Le huitième jour, au milieu de l'après-midi, Nanon sort de sa loge en courant, son tricot à la main, et t'attrape par la manche. « Maître Salvanhac est sorti ce matin par le portail et il n'est pas rentré. Il n'a pas son manteau. Dame Castagnet est au conseil. Va voir en ville, toi, tu as de bonnes jambes. Commence par le port. »",
      "Tu descends la rue en escalier en courant, puis les quais, en demandant aux pêcheurs. On l'a vu. Un vieux en robe noire, sans manteau, qui parlait à un oiseau. Il allait vers la halle.",
      "Tu le trouves au milieu de la halle aux poissons, debout devant un étal, très droit, les mains derrière le dos, le merle sur l'épaule, au milieu des cris et des écailles. Il parle à la poissonnière, une grande femme aux mains rouges, qui le regarde, figée, un maquereau à la main.",
      "« Vous êtes en retard, Mademoiselle Arlaud, dit-il d'une voix douce et sévère. L'épreuve est ce soir. Nous avons encore le signe de la Tête à vérifier. Le poisson attendra. »",
      "La poissonnière lâche le maquereau.",
    ],
    fx: { meet: "maud" },
    choices: [{ label: "Prendre doucement le bras du vieux maître", to: "B_carnet" }],
  },
  B_carnet: {
    act: "II", title: "Le carnet", place: "port",
    text: [
      "Tu poses la main sur le bras de Maître Salvanhac. Il se tourne vers toi, te regarde, et ses yeux pâles reviennent lentement de très loin. Il voit la halle, les poissons, ses pieds trempés, la femme devant lui. Il se demande ce qu'il fait là.",
      "« Pardonnez-moi, Madame, dit-il à la poissonnière. Je vous ai prise pour quelqu'un. » Elle le regarde comme on regarde un fantôme.",
      "Sur le chemin du collège, il marche lentement, appuyé sur ton bras, et grelotte dans sa robe. Au pied de la rue en escalier, il s'arrête, fouille dans sa poche et en sort un carnet de cuir noir, gonflé de feuilles volantes. « Gardez-le, dit-il. Je ne sais plus à qui il est. Je l'ai sur moi depuis des années, et chaque fois que je l'ouvre, {{fx:efface|je ne comprends plus mon écriture}}. Vous avez une main qui écoute. Peut-être qu'il vous parlera. »",
      "Il te met le carnet dans les mains, et il reprend la montée, et il te demande ton nom.",
    ],
    fx: { item: "carnet", ep: ["seance", 400] },
    choices: [{ label: "Le ramener jusqu'au portail", to: "B_ramene" }],
  },
  B_ramene: {
    act: "II", title: "Le portail", place: "cour",
    text: [
      "Nanon vous attend au portail avec une couverture. Dame Castagnet sort du conseil en courant, ce que personne au collège ne l'a jamais vue faire. Elle prend Maître Salvanhac par les épaules, l'enveloppe dans la couverture, et l'emmène vers l'escalier des maîtres.",
      "Sur le seuil, elle se retourne vers toi. « Merci », dit-elle. Un seul mot, mais de sa part, c'est un discours.",
    ],
    fx: { regard: { castagnet: "cordial" } },
    choices: [{ back: "H_cour" }],
  },

  // ------------------------------------------------------------------ the storm
  B_tempete: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Le neuvième jour, à la tombée de la nuit, le vent tourne au sud-ouest et se met à hurler. À huit heures, la cloche du collège sonne le tocsin, un coup toutes les cinq secondes, et Dame Castagnet traverse le dortoir avec une lanterne : « Tout le monde à la digue. Robes, manteaux, lanternes. Les premières années portent la lumière, les autres chantent. Vite. »",
      "La digue, sous la tempête, n'a plus rien de la promenade d'automne. Les vagues montent à l'assaut des blocs, plus hautes que les maisons du port, et retombent en grondant sur le parapet. Tout le collège est là, en ligne, sur toute la longueur, des lanternes à la main, et les élèves de Chant, épaule contre épaule, chantent. Leur chant passe dans la pierre, et la pierre gronde, et la vague recule.",
      "Puis, au bout de la digue, à la Tête, quelque chose craque. Un bruit énorme, sec, comme un arbre qui se fend. Le grondement de la digue se brise, devient une note fausse, déchirante, et la vague suivante passe par-dessus le parapet et balaie la chaussée.",
      "On court vers la Tête. Le grand signe est fendu de haut en bas, et l'eau entre par la fente. Le Recteur est déjà là, devant, les deux mains ouvertes vers la pierre. Dame Castagnet arrive, et derrière elle tout le chœur, en courant.",
    ],
    fx: { ep: ["seance", 500] },
    choices: [
      { label: "Joindre ta voix au chœur de Dame Castagnet", test: { dom: "magie", diff: -10, label: "Magie", help: [{ if: { is: { art: "chant" } }, v: 20 }] }, win: { to: "B_chant_ok" }, lose: { to: "B_chant_ko" } },
      { label: "Courir vers le pêcheur que la vague a jeté au bas du parapet", fx: { trait: { audace: 2 } }, test: { dom: "nature", diff: -10, label: "Nature", help: [{ with: "jodoc", v: 15 }] }, win: { to: "B_pecheur_ok" }, lose: { to: "B_pecheur_ko" } },
      { label: "Lever ta lanterne et ne pas quitter le Recteur des yeux", fx: { trait: { audace: -1 } }, to: "B_recteur" },
    ],
  },
  B_chant_ok: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Tu te glisses dans le chœur, entre deux élèves de quatrième année, et tu cherches la note. Dame Castagnet chante, la tête renversée, une note grave et immense qui semble sortir de la pierre elle-même. Tu la trouves. Tu la tiens. Ta poitrine vibre, tes dents vibrent, le granit vibre sous tes pieds.",
      "La fente du grand signe se resserre, lentement, sans se fermer tout à fait. La vague suivante frappe la Tête, et recule. La suivante aussi. Le chœur chante toute la nuit, par relais. À l'aube, le vent tombe. La digue tient, fendue, avec une voix fausse.",
      "En redescendant, Dame Castagnet passe près de toi, la voix brisée, et te touche l'épaule, une seconde.",
    ],
    fx: { pratique: { magie: 2, social: 1 }, regard: { castagnet: "cordial" } },
    choices: [{ label: "Rentrer au collège à l'aube", to: "B_tempete_fin" }],
  },
  B_chant_ko: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Tu te glisses dans le chœur et tu cherches la note. Elle est trop grave pour toi. Ta voix se brise, repart, se brise encore. Un élève de quatrième année te pousse doucement hors du rang. « Tiens la lumière. On a besoin de lumière aussi. »",
      "Tu tiens la lumière. Toute la nuit, ta lanterne au bout du bras, tu regardes le chœur tenir la mer par la voix, relais après relais. À l'aube, le vent tombe. La digue tient, fendue, avec une voix fausse.",
    ],
    fx: { pratique: { magie: 1 } },
    choices: [{ label: "Rentrer au collège à l'aube", to: "B_tempete_fin" }],
  },
  B_pecheur_ok: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Un pêcheur venu aider a été jeté par la vague au pied du parapet, côté ville, et se débat dans l'eau noire du port, accroché à un anneau d'amarrage. Tu te jettes à plat ventre sur la pierre trempée et tu lui tends ta baguette, puis ta main.",
      { with: "jodoc", text: "Jodoc s'allonge sur tes jambes pour que tu ne glisses pas, et quand le pêcheur saisit ta main, il tire, et vous tirez tous les deux, et l'homme sort de l'eau comme un poisson." },
      { without: "jodoc", text: "Le pêcheur saisit ta main. Il est lourd, l'eau le tire. Tu cales tes pieds contre une borne et tu tires, de toutes tes forces, jusqu'à ce qu'il retrouve l'anneau, puis la pierre, puis le parapet." },
      "Il reste assis contre le mur, à cracher de l'eau de mer. C'est un homme d'une cinquantaine d'années, à la barbe grise. Il te serre la main, très fort, en silence.",
      "Avant de partir, il fouille dans sa vareuse et te met dans la paume un galet de la digue, poli par la mer, gravé d'un petit signe. « Ma femme me l'a donné le jour de nos noces, dit-il. Il chante, quand on le serre. Il chante juste. »",
    ],
    fx: { item: "pierre_chant", flag: "pecheur:sauve", pratique: { nature: 1 }, ep: ["histoire", 400] },
    choices: [{ label: "Rentrer au collège à l'aube", to: "B_tempete_fin" }],
  },
  B_pecheur_ko: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Tu cours vers le pêcheur, mais la vague suivante te jette contre le parapet. Tu te relèves, sonné{e}, les genoux en sang. Quand tu arrives, deux élèves de quatrième année l'ont déjà sorti de l'eau avec une gaffe. Il est vivant.",
      "Tu passes le reste de la nuit à tenir ta lanterne en boitant, et à regarder le chœur tenir la mer.",
    ],
    fx: { pratique: { nature: 1 } },
    choices: [{ label: "Rentrer au collège à l'aube", to: "B_tempete_fin" }],
  },
  B_recteur: {
    act: "II", title: "La tempête", place: "digue",
    text: [
      "Tu lèves ta lanterne aussi haut que tu peux, pour éclairer la Tête, et tu regardes le Recteur.",
      "Il est debout devant le signe fendu, les mains ouvertes, tendues vers la pierre. Il devrait tracer. Tout le monde, derrière lui, attend qu'il trace : c'est lui qui a dessiné la digue. Ses mains restent ouvertes, et ses lèvres bougent, et il ne trace rien. Une vague passe et le trempe jusqu'à la taille. Il recule d'un pas.",
      "C'est Dame Castagnet qui l'écarte, d'une main, sans le regarder, et qui se met à chanter. Le chœur la suit. La fente se resserre un peu. La vague recule.",
      "Le Recteur reste derrière elle, trempé, les bras le long du corps. Il te voit, toi et ta lanterne. Pendant une seconde, sur son visage, il y a une expression que tu ne lui connais pas.",
    ],
    fx: { clue: "s_tempete" },
    choices: [{ label: "Rentrer au collège à l'aube", to: "B_tempete_fin" }],
  },
  B_tempete_fin: {
    act: "II", title: "Le matin d'après", place: "dortoir",
    text: [
      "Le collège remonte la colline au petit jour, trempé, épuisé, en silence. Au dortoir, personne ne dort. On s'assoit sur les lits, on se frotte les mains devant le poêle, on écoute.",
      "Depuis la digue, malgré le vent tombé, un son monte jusqu'aux lucarnes : un bourdonnement grave et faux, qui ne s'arrête plus.",
    ],
    choices: [{ label: "Te coucher quelques heures", takes: "morning", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ the duel of Verre
  B_duel: {
    act: "II", title: "Le duel de Verre", place: "salles", duel: "d_hiver", duelLabel: "Lever les mains et dresser tes reflets",
    text: [
      "Le dixième jour, Maître Vilmorin réunit ses élèves et ceux qui veulent regarder dans la salle du Verre, volets fermés. « Exercice d'hiver, annonce-t-il. Duels de reflets, deux par deux. Le premier qui prend trois fois un reflet pour son adversaire a perdu. » Il consulte sa liste, sourit, et lève les sourcils. « Vaucombe, et notre bourse de Brèches. Le collège entier va me remercier. »",
      { if: { has: "val:battu" }, text: "Valérien se lève en silence. Il se souvient de la cour des tilleuls. Il te regarde sans colère, avec attention, comme on regarde un problème." },
      { if: { seen: "A_duel_perdu" }, text: "Valérien se lève en souriant. « Une deuxième leçon. Avec plaisir. » Mais il ne sourit qu'un instant. Il te regarde avec attention, comme on regarde un problème." },
      { if: { seen: "A_refus" }, text: "Valérien se lève avec un soupir. « Le berger qui ne se bat pas. On va voir s'il se cache bien. »" },
      { with: "yse", text: "Ysé te souffle : « Il a changé de méthode. Depuis l'automne, il ne fait plus que des feintes, au Verre. Il a appris. »" },
    ],
    choices: [
      { label: "Dire à Maître Vilmorin que tu préfères regarder", if: { trait: "audace", max: -2 }, fx: { trait: { audace: -1 } }, to: "B_refus" },
    ],
  },
  B_duel_gagne: {
    act: "II", title: "Le duel de Verre", place: "salles",
    text: [
      "Ta troisième touche est la bonne : un reflet de toi, posé à sa gauche, sur lequel Valérien lance tout ce qu'il a, pendant que tu es à sa droite. La bougie s'éteint. Maître Vilmorin rouvre les volets en applaudissant.",
      "Valérien reste au milieu de la salle, les mains encore levées, puis il les baisse, ramasse sa robe et sort.",
    ],
    fx: { regard: { valerien: "curieux" } },
    choices: [
      { label: "Le suivre dans le couloir", to: "B_duel_neveu" },
      { label: "Le laisser partir", back: "H_salles" },
    ],
  },
  B_duel_neveu: {
    act: "II", title: "Le neveu", place: "salles",
    text: [
      "Au bout du couloir, au pied de l'escalier des maîtres, le Recteur attend son neveu. Tu t'arrêtes derrière une colonne. Le Recteur parle bas, d'une voix très douce, que tu entends à moitié.",
      "« … devant un boursier. Devant Vilmorin, qui le racontera à tout le collège avant ce soir. Je t'ai élevé et je t'ai donné mon nom pour mieux que ça, Valérien. » Valérien se tient très droit, les yeux fixes. « Oui, mon oncle. » « Tu sais ce qu'on dit de moi, en ville. Tu sais ce que j'ai fait à dix-neuf ans. » « Oui, mon oncle. »",
      "Le Recteur lui caresse la joue, tendrement, et remonte l'escalier. Valérien reste seul au pied des marches. Il reste immobile un long moment, les yeux secs, puis il se tourne, et il te voit derrière ta colonne.",
      "Il passe devant toi, les lèvres serrées, et s'éloigne.",
    ],
    fx: { flag: "val:vu_oncle" },
    choices: [{ back: "H_salles" }],
  },
  B_duel_perdu: {
    act: "II", title: "Le duel de Verre", place: "salles",
    text: [
      "La troisième touche est pour lui : tu lances ton reflet sur un des siens, et le vrai Valérien est derrière toi, la main sur ton épaule. Maître Vilmorin rouvre les volets. Les élèves applaudissent Valérien, qui salue à peine.",
      "Plus tard, dans le couloir, il te rattrape. « Tu attaques mes reflets les plus proches, dit-il sans préambule. Toujours. Tu le faisais déjà à la baguette, en automne. » Il hésite. « Je te dis ça parce que la prochaine fois, je veux gagner contre quelqu'un qui ne se laisse pas lire comme un livre de première année. »",
      "Il s'en va avant que tu répondes.",
    ],
    fx: { regard: { valerien: "curieux" } },
    choices: [{ back: "H_salles" }],
  },
  B_refus: {
    act: "II", title: "Le duel de Verre", place: "salles",
    text: [
      "Maître Vilmorin te regarde, étonné, puis il hausse les épaules avec bonne humeur. « Comme tu voudras. Regarder, c'est déjà du Verre. » Il appelle un autre élève.",
      "Valérien se bat contre un garçon de deuxième année et gagne en trois passes. Il ne te regarde pas une fois.",
    ],
    choices: [{ back: "H_salles" }],
  },

  // ------------------------------------------------------------------ the second tea
  B_the: {
    act: "II", title: "Le thé du jeudi", place: "cour",
    text: [
      "Le onzième jour est un jeudi, et ton tour de service revient. Nanon te tend le tablier blanc en silence.",
      "Le salon du Recteur, la table ronde, les quatre maîtres. Maître Salvanhac est assis le dos très droit, les mains à plat sur la nappe. Il regarde la théière comme on regarde un visage qu'on devrait connaître. Le Recteur parle avec gravité de la tempête, de la Tête qu'il faudra refaire, des élèves qui ont tenu toute la nuit. Dame Castagnet garde le silence.",
      "Sur la desserte, derrière le fauteuil du Recteur, à côté du sucrier, le petit godet d'argent fermé de son couvercle.",
    ],
    choices: [
      { label: "Remplacer le contenu du godet par ton encre de thé, en passant derrière le fauteuil", if: { item: "encre_leurre" }, why: "Il te faudrait de quoi remplacer ce qu'il y a dans le godet : une encre ordinaire, de la même couleur.",
        test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ if: { has: "logis:vu" }, v: 10 }, { if: { is: { art: "verre" } }, v: 10 }] }, win: { to: "B_the_echange" }, lose: { to: "B_the_rate" } },
      { label: "Garder les yeux sur la main du Recteur", if: { not: { clue: "o_main" } }, hide: { clue: "o_main" }, to: "B_the_vu" },
      { label: "Servir le thé sans rien regarder", to: "B_the_service" },
    ],
  },
  B_the_echange: {
    act: "II", title: "Le thé du jeudi", place: "cour",
    text: [
      "Tu ressers Maître Vilmorin, puis tu passes derrière le fauteuil du Recteur avec ton plateau, pour gagner la desserte. Ton dos cache tes mains. Le couvercle du godet. Le flacon de Jodoc, débouché dans ta manche. Tu verses le contenu du godet dans le sucrier vide, tu remplis le godet de ton encre, tu refermes. Trois secondes. Une odeur de violette te monte au nez.",
      "Quand tu te retournes avec la théière, personne ne te regarde, sauf le merle.",
      "Une heure plus tard, le Recteur pose sa main sur celle de son vieil ami, trempe son index sous la table, et trace son petit signe, en riant d'une plaisanterie de Vilmorin. Le doigt laisse une trace brune. Une trace d'encre ordinaire, qui ne retient rien.",
      "Tu emportes le sucrier à la cuisine, et tu le laves trois fois.",
    ],
    fx: { flag: "salvanhac:protege", drop: "encre_leurre", quest: "II_salvanhac", ep: ["histoire", 1000] },
    choices: [{ label: "Rapporter les tasses à la cuisine", to: "H_cour" }],
  },
  B_the_rate: {
    act: "II", title: "Le thé du jeudi", place: "cour",
    text: [
      "Tu passes derrière le fauteuil du Recteur, tu poses le plateau, tu tends la main vers le godet d'argent. Le Recteur se retourne. Il te regarde, puis il regarde ta main, à un pouce du couvercle.",
      "« Le sucre est à gauche, mon enfant », dit-il avec douceur. Il prend lui-même le godet, le glisse dans la poche de sa robe, et revient à la conversation. Il t'ignore jusqu'à la fin du thé.",
      "En partant, tu sens son regard dans ton dos jusqu'au bout du couloir.",
    ],
    fx: { regard: { daubrac: "mefiant" }, flag: "recteur:soupconne" },
    choices: [{ label: "Rapporter les tasses à la cuisine", to: "H_cour" }],
  },
  B_the_vu: {
    act: "II", title: "Le thé du jeudi", place: "cour",
    text: [
      "Tu ressers, et tu regardes. Au milieu d'une phrase, le Recteur tend la main derrière lui vers la desserte, ouvre le godet d'argent, y trempe l'index, très naturellement. Puis il pose sa main sur celle de Maître Salvanhac, sur la nappe, et du bout du doigt, il trace un petit signe rapide sur le dos de la main du vieux maître. Une trace brune, à peine visible, couleur de thé. Maître Salvanhac ne remarque rien.",
      "Le Recteur referme le godet. Tu as déjà détourné les yeux.",
    ],
    fx: { clue: "o_main" },
    choices: [{ label: "Rapporter les tasses à la cuisine", to: "H_cour" }],
  },
  B_the_service: {
    act: "II", title: "Le thé du jeudi", place: "cour",
    text: [
      "Tu sers et tu ressers, les yeux sur ta théière. La conversation passe au-dessus de toi. Une fois, du coin de l'œil, tu vois la main du Recteur posée sur celle de Maître Salvanhac, amicalement. Le vieux maître sourit, d'un sourire un peu vide.",
      "Quand tu ressors, il te demande, dans l'escalier, si tu sais où il habite.",
    ],
    choices: [{ label: "Le raccompagner jusqu'à sa chambre", to: "H_salles" }],
  },

  // ------------------------------------------------------------------ the winter concert
  B_concert: {
    act: "II", title: "Le concert d'hiver", place: "salles",
    text: [
      "Le douzième soir, le plus long de l'année, le collège donne son concert d'hiver dans la salle ronde du Chant, comme chaque année. Les notables de la ville sont là, en manteaux de fourrure, assis sur des bancs qu'on a montés de la chapelle. Le Recteur, au premier rang, salue tout le monde.",
      "Le chœur de Dame Castagnet chante les chants d'hiver, puis, comme le veut la tradition, le chant de la digue : celui qui fait vibrer la pierre les nuits de tempête. La voûte parfaite renvoie chaque note. C'est très beau.",
      "Et à la dernière mesure, de très loin, par les fenêtres fermées, la digue répond. Une note grave, et fausse, qui traverse la ville et monte jusqu'au collège et se mêle au chœur, et le chœur, une seconde, hésite.",
      "Dame Castagnet fait tenir la note jusqu'au bout, sans ciller. Les applaudissements viennent tard, et un peu mal à l'aise.",
      { with: "yse", text: "Ysé se penche vers toi. « Tu as entendu ? » Tu fais oui de la tête. « Tout le monde a entendu. Tout le monde fait semblant. »" },
      { if: { has: "valerien:allie" }, text: "Au troisième rang, Valérien a fermé les yeux." },
      "Après le concert, en sortant, tu vois le Recteur seul sur le seuil de la salle, qui regarde vers la mer.",
    ],
    fx: { ep: ["seance", 300] },
    choices: [{ back: "H_dortoir" }],
  },

  // ------------------------------------------------------------------ what the old master hid
  Z_carnet: {
    act: "II", title: "Le carnet", place: "dortoir", puzzle: "p_chiffre", back: true,
    text: [
      "Tu t'assois sur ton lit, sous la lucarne, et tu ouvres le carnet de Maître Salvanhac. Les premières pages sont d'une écriture ample et sûre, les dernières d'une main qui tremble et qui se répète. Entre les deux, trente ans de notes, de signes, de listes.",
      { with: "yse", text: "Ysé s'assoit à côté de toi et lit par-dessus ton épaule, les genoux sous le menton." },
      { if: { item: "lanterne" }, text: "Le dos de la dernière page est jauni par plaques, comme un papier qui aurait pris l'humidité. Tu approches ta lanterne de papier. {{encre:lanterne|À la chaleur, des lettres brunes montent dans la feuille, une à une, d'une main jeune et sûre : « Pardonne-moi, Solène. »}}" },
    ],
  },
  Z_carnet_lu: {
    act: "II", title: "La ligne déchiffrée", place: "dortoir",
    text: [
      "Tu recules chaque lettre, une à une, en comptant sur tes doigts, et tu écris ce qui vient au crayon sous la ligne chiffrée. {{fx:ecrit|Trois mots en capitales}}, dans l'écriture de Maître Salvanhac, trente ans plus tard.",
      { with: "yse", text: "Ysé lit par-dessus ton épaule, et sa main se crispe sur ton bras. « La bibliothèque, souffle-t-elle. La nuit. Il faudra y aller la nuit. »" },
    ],
    fx: { clue: "s_message", ep: ["seance", 300] },
    choices: [{ back: "H_dortoir" }],
  },
  Z_frag_1: {
    act: "II", title: "Le Traité des marées", place: "bibliotheque", back: true,
    text: [
      "Le Traité des marées, tome II, est un gros volume poussiéreux, rangé à sa place aux sciences de la mer. Tu le feuillettes une page à la fois. Au milieu du chapitre des marées d'équinoxe, entre deux pages, une bande de papier jauni, longue comme la main, couverte d'une belle écriture.",
      "Tu la glisses dans ton carnet.",
    ],
    fx: { flag: "frag:1", item: "frag", questSeen: "II_page" },
  },
  Z_frag_2: {
    act: "II", title: "Les Psaumes de la côte", place: "bibliotheque", back: true,
    text: [
      "Les Psaumes de la côte sont un petit livre de prières de pêcheurs, relié en peau de phoque. Sœur Mélisande te le donne elle-même, en t'observant de son oreille droite. Tu le feuillettes à la table la plus éloignée de son bureau.",
      "Glissée sous la garde de la reliure, contre le carton, une bande de papier jauni. La même écriture.",
    ],
    fx: { flag: "frag:2", item: "frag", questSeen: "II_page" },
  },
  Z_frag_3: {
    act: "II", title: "L'Herbier de Maître Ancel", place: "bibliotheque", back: true,
    text: [
      "L'Herbier de Maître Ancel n'est pas à sa place, aux sciences naturelles. Tu finis par le trouver au fond du deuxième étage, coincé entre deux herbiers de cuisine. Il est plein de plantes séchées, fines comme du papier de soie.",
      "Entre une salicorne et une criste-marine, une bande de papier jauni, pressée à plat comme une fleur.",
    ],
    fx: { flag: "frag:3", item: "frag", questSeen: "II_page" },
  },
  Z_frag_4: {
    act: "II", title: "La Grammaire des signes anciens", place: "bibliotheque", back: true,
    text: [
      "La Grammaire des signes anciens est rangée tout en haut de la troisième galerie, si haut que l'échelle à roulettes ne suffit pas : il faut monter sur le dernier barreau et se hisser sur la pointe des pieds. L'échelle oscille. En bas, Sœur Mélisande lève la tête, et la baisse.",
      "Le livre est énorme. À la page des signes de tenue, une bande de papier jauni, pliée en deux.",
    ],
    fx: { flag: "frag:4", item: "frag", questSeen: "II_page" },
  },
  Z_page: {
    act: "II", title: "Les quatre morceaux", place: "bibliotheque", puzzle: "p_page", back: true,
    text: [
      "Tu choisis une table au fond, loin du bureau de Sœur Mélisande, et tu étales les quatre bandes de papier sous la lampe verte.",
    ],
  },
  Z_page_ok: {
    act: "II", title: "La page", place: "bibliotheque",
    text: [
      "Les déchirures se rejoignent. Tu colles les quatre bandes au dos sur une feuille de papier de soie, avec la colle de peau que Sœur Mélisande laisse sur les tables, et tu laisses sécher sous un dictionnaire.",
      "Une heure plus tard, tu tiens une page entière : une page de titre, calligraphiée avec soin, à l'encre brune.",
    ],
    fx: { item: "page", clue: "s_page", drop: "frag", quest: "II_page", ep: ["histoire", 1200] },
    choices: [{ back: "H_biblio" }],
  },
  Z_cabinet: {
    act: "II", title: "Le cabinet scellé", place: "bibliotheque", puzzle: "p_cabinet",
    text: [
      "Minuit sonne au clocher. Tu as attendu que la lampe de Sœur Mélisande s'éteigne, et tu es entré{e} par la petite porte de l'escalier de service, qu'on ne ferme jamais. La bibliothèque est noire et immense. Tes pas résonnent sur les dalles. Au fond, derrière la grille entrouverte, le cabinet des maîtres.",
      { with: "yse", text: "Ysé tient la chandelle, en cachant la flamme de sa main. Elle respire très vite." },
      { with: "jodoc", text: "Jodoc fait le guet à la porte de l'escalier, immense dans l'ombre." },
    ],
    choices: [{ back: "H_biblio" }],
  },
  Z_cahier: {
    act: "II", title: "Le cabinet ouvert", place: "bibliotheque",
    text: [
      "Le cadenas s'ouvre avec un déclic qui te paraît assez fort pour réveiller le collège. Tu défais la chaîne, maillon par maillon, et tu ouvres les deux battants.",
      "Dedans, des livres reliés de noir, des fioles, des rouleaux cachetés, l'odeur douce et pourrie des vieux papiers. Et sur l'étagère du bas, posé à plat, seul, un cahier relié de toil{{or:s6|e}} bleue, gondolé par l'eau, aux coins rongés.",
      "Tu l'ouvres. Des signes. Des pages et des pages de signes, à l'encre brune, d'une main fine et sûre. Tu les reconnais. Ce sont les signes de la digue, un par un, avec des flèches, des calculs, des {{fx:rature|ratures}}, des essais manqués, des notes. Tu tournes les pages jusqu'à la Tête. Elle est là, dessinée trois fois, avec dans la marge une ligne de musique.",
      "Tu refermes le cabinet, tu remets la chaîne, tu refermes le cadenas, et tu brouilles les molettes. Le cahier est sous ta robe, contre ta peau.",
    ],
    fx: { item: "cahier", clue: "s_cahier", flag: "cahier:trouve", quest: "II_cabinet", pratique: { magie: 2, savoir: 1 }, ep: ["histoire", 1500] },
    choices: [{ back: "H_dortoir" }],
  },
  Z_cabinet_ko: {
    act: "II", title: "Le cadenas bloqué", place: "bibliotheque",
    text: [
      "À la troisième erreur, quelque chose claque à l'intérieur du cadenas. Les molettes se bloquent. Tu as beau tirer, tourner, secouer, plus rien ne bouge : le mécanisme s'est fermé pour de bon, comme un poing.",
      "Il faudrait démonter l'armoire elle-même, ou ses gonds : un travail pour un ouvrier, avec des outils. Tu repars dans le noir.",
    ],
    choices: [{ back: "H_dortoir" }],
  },
  Z_gonds: {
    act: "II", title: "Les gonds", place: "bibliotheque",
    text: [
      "Jodoc examine les gonds du cabinet à la lueur de ta chandelle, longuement, comme un médecin. « Du travail de Valcourt, chuchote-t-il. Vieux. Bien fait. Les goupilles sont serties à froid. » Il sort de sa poche un chasse-goupille, un petit maillet enveloppé de chiffon, et se met au travail en silence.",
      "Au bout d'une heure, le battant gauche se décolle de l'armoire. Vous le soulevez à deux, très doucement, de quoi passer un bras. Ta main trouve, sur l'étagère du bas, un cahier de toile bleue.",
      "Jodoc remet les goupilles, une à une. « Personne ne verra rien, dit-il. C'est la première fois que je fais un travail difficile devant quelqu'un sans trembler. » Il réfléchit. « Il faut dire que je ne voyais pas tes yeux. »",
    ],
    fx: { item: "cahier", clue: "s_cahier", flag: "cahier:trouve", quest: "II_cabinet", conf: { jodoc: 15 }, pratique: { magie: 2, savoir: 1 }, ep: ["histoire", 1500] },
    choices: [{ back: "H_dortoir" }],
  },
  Z_gonds_rate: {
    act: "II", title: "Les gonds", place: "bibliotheque",
    text: [
      "Jodoc travaille une heure sur les goupilles. Elles refusent de bouger. Quand il force, le maillet glisse et frappe le fer, et le coup résonne dans toute la bibliothèque. Vous soufflez la chandelle et restez accroupis dans le noir, le cœur battant. Personne ne vient.",
      "« Demain, chuchote Jodoc. J'apporterai de l'huile. »",
    ],
    choices: [{ back: "H_dortoir" }],
  },
};
