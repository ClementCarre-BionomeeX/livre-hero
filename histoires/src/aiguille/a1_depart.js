// L'Île Folle-Aiguille · act I, chapter 3: the departure. The Fanal after the night, the father who will not tell and
// gives a tinderbox, the salt on the threshold, the hamlet's goodbyes, the baron's carriage.
module.exports = {
  passages: {
    A1_d_retour: { act: "I", title: "Le Fanal, au matin", place: "fanal_salle",
      text: [
        "Le Fanal a l'air d'un homme qu'on a battu. La porte de la cour pend sur un seul gond ; les volets du rez-de-chaussée sont arrachés ; il y a du verre partout, des chopes brisées, des bancs renversés, et sur le mur près du comptoir, à hauteur d'homme, une traînée brune que Zélie frotte à la brosse en récitant tous les proverbes qu'elle connaît sur la vengeance divine. Elle en connaît beaucoup.",
        "La chambre de la mer a été fouillée jusqu'aux planches. Le lit clos est éventré ; le coffre, vidé et renversé. Le Gabier, cousu dans son drap, a été jeté par terre. Quelqu'un l'a remis sur le lit, depuis. Quelqu'un lui a recroisé les mains.",
        { if: { has: "lazare:blesse" }, text: "Ton père est couché dans la petite chambre derrière la cuisine, la poitrine serrée dans des bandes de toile que Zélie a coupées dans ses meilleurs draps. Il est gris. Il a de la fièvre. Quand il te voit entrer, il essaie de se lever, et retombe, et jure, ce qui veut dire qu'il guérira." },
        { if: { has: "lazare:indemne" }, text: "Ton père est debout dans la cour, un marteau à la main, à remettre la porte sur ses gonds. Il a un bleu sur la pommette et les jointures écorchées. Quand il te voit arriver, il pose le marteau, s'essuie les mains à son tablier, et te regarde descendre de la carriole sans faire un pas, comme on regarde une chose qu'on n'osait plus espérer." },
      ],
      choices: [{ label: "Aller à ton père", to: "A1_d_pere" }] },
    A1_d_pere: { act: "I", title: "Ton père", place: "fanal_salle",
      text: [
        "Tu lui racontes tout : la médecin, la Garenne, le baron, le navire, Morlenc. Il écoute. Quand tu dis « mousse », il ferme les yeux.",
        "« Tu partiras, dit-il. Bien sûr. Je ne t'en empêcherai pas. On ne retient pas quelqu'un qui a vu la carte. Moi non plus, on ne m'a pas retenu. »",
      ],
      choices: [
        { label: "« Raconte-moi. Ce que tu sais. Ce que tu as fait. »", to: "A1_d_pere_tais" },
        { label: "« La Maraude. Tu étais à bord. »", if: { any: [{ has: "exvoto:vu" }, { has: "carnet:lu" }, { has: "nuit:cave" }] }, why: "Tu ne sais rien de son passé.", to: "A1_d_pere_maraude" },
        { label: "« Et le couteau de la cave ? »", if: { has: "lazare:couteau_vu" }, why: "Tu ignores ce qu'il cache.", to: "A1_d_pere_couteau" },
      ] },
    A1_d_pere_tais: { act: "I", title: "Ton père", place: "fanal_salle",
      text: [
        "Ton père te regarde longtemps. Puis il secoue la tête, une fois, lentement.",
        "« Il y a des choses qu'un père doit dire à son enfant, dit-il. Celle-là, je la garde. Pour toi, ou pour moi : je ne sais plus. » Il serre les dents. « Tu la trouveras peut-être là-bas. Alors tu sauras. Et tu me jugeras. Ce sera ton droit. »",
      ],
      choices: [{ label: "Attendre qu'il continue", to: "A1_d_briquet" }] },
    A1_d_pere_maraude: { act: "I", title: "Ton père", place: "fanal_salle",
      text: [
        "Ton père se fige. Le nom du navire est tombé entre vous comme une pierre dans un puits, et vous écoutez tous les deux le temps qu'elle met à toucher le fond.",
        "« J'avais quatorze ans », dit-il.",
        "C'est tout. Il ne dit rien d'autre. Il a dit ces cinq mots comme on avoue une faute, et comme on présente une excuse, et tu ne sais pas lequel des deux tu viens d'entendre ; peut-être qu'il ne le sait pas non plus.",
      ],
      choices: [{ label: "Ne pas insister", fx: { flag: "lazare:aveu" }, to: "A1_d_briquet" }] },
    A1_d_pere_couteau: { act: "I", title: "Ton père", place: "fanal_salle",
      text: [
        "Ton père détourne les yeux vers la fenêtre, vers la mer.",
        "« Il est à la mer, maintenant, dit-il. Je l'y ai jeté cette nuit, avant qu'ils arrivent. Vingt ans que je voulais le faire. Il a fallu des forbans pour me décider. » Il rit, d'un rire qui fait mal à voir. « Les autres hommes gardent un couteau pour se défendre. Moi, je le gardais pour me souvenir. Ce n'est pas plus intelligent. »",
      ],
      choices: [{ label: "Ne pas insister", to: "A1_d_briquet" }] },
    A1_d_briquet: { act: "I", title: "Le briquet", place: "fanal_salle",
      text: [
        "Ton père fouille dans la poche de son tablier et en sort un briquet d'amadou, un petit boîtier de métal blanc, usé, poli par des années de pouce. Tu l'as vu toute ta vie : c'est avec lui qu'il allume la lanterne du pignon chaque soir.",
        "Sur le couvercle, gravées maladroitement, une ancre et une croix aux bras évasés.",
        "« Il est d'argent, dit-il. D'une pièce qu'on a fondue, il y a longtemps. Prends-le. Là-bas, tu en auras besoin ; il y fait sombre, même en plein jour, à certains endroits. »",
        "Il te le met dans la main et te referme les doigts dessus, comme le Gabier avec la piastre, le premier soir. Puis il dit encore, très bas, si bas que tu n'es pas sûr{e} d'avoir bien entendu :",
        "« Là-bas, il y avait des enfants. »",
      ],
      choices: [{ label: "Garder le briquet", fx: { item: "briquet", regard: { lazare: "allie" } }, to: "A1_d_zelie" }] },
    A1_d_zelie: { act: "I", title: "Le sel", place: "fanal_cuisine",
      text: [
        "Zélie a mis ton baluchon sur la table de la cuisine : deux chemises, une vareuse de rechange, des chaussettes qu'elle a tricotées en trois nuits, un pot de rillettes, et un petit sac de toile plein de gros sel gris.",
        "« Le sel, dit-elle, c'est pour le seuil. Le jour où tu entres dans une maison où l'on t'a fait du mal, tu en jettes une poignée en sortant. Ce que tu y as apporté, tu le laisses. Ce qu'ils t'ont pris, tu le reprends. »",
        { if: { has: "zelie:confie" }, text: "Elle te regarde par-dessus ses lunettes. « Ton père aussi, je lui en avais donné, quand il est revenu de là-bas. Il ne s'en est jamais servi. C'est pour ça qu'il boite encore. »" },
        { if: { is: { mere: "chale" } }, text: "Puis elle décroche le châle bleu de ta mère, le plie en quatre et le glisse dans le baluchon. « Il a déjà fait les mers du nord sur ses épaules à elle. Il peut bien faire celles du sud sur les tiennes. »" },
        "Elle t'embrasse sur les deux joues, sèchement, et te pousse dehors. « Va. Je déteste les adieux. Ça fait tourner le lait. »",
      ],
      choices: [{ label: "Prendre le baluchon", fx: { item: "sel_zelie" }, to: "A1_d_hameau" }] },
    A1_d_hameau: { act: "I", title: "Les adieux", place: "hameau",
      text: [
        "La nouvelle a fait le tour du hameau avant le lever du soleil ; Annaïg s'en est chargée. Quand la voiture du baron s'arrête au bout de la lande, attelée de quatre chevaux gris qui fument dans le froid, tout Pointe-aux-Corneilles est là pour la regarder, comme on regarde passer un enterrement de riche.",
        "Le père Pochon te serre la main, longuement, et te donne un conseil : « En mer, ne te fie jamais à un capitaine qui sourit, à un cuisinier maigre, ni à un vent qui tourne le dimanche. » Il réfléchit. « Ni à rien, en fait. Mais ces trois-là, surtout. »",
        { if: { regard: { annaig: "redevable" } }, text: "Annaïg te glisse une lettre dans la poche, pliée en quatre. « Pour Guénolé. Tu la posteras à Morlenc ; c'est plus près de lui. » Elle t'embrasse sur le front, comme le soir de la tempête, et retourne en courant vers ses enfants sans se retourner." },
        { if: { has: "fouques:averti" }, text: "Le brigadier Fouques est venu aussi, en grand uniforme. Il te fait un salut militaire très solennel, puis se penche vers le baron pour lui demander si l'expédition a acquitté les droits de sortie. Le baron lui donne une pièce d'or. Le brigadier repart radieux, sans avoir eu de réponse." },
        { if: { has: "fouques:piastre" }, text: "À la boutonnière de son grand uniforme, le brigadier porte, percée d'un trou et pendue à un ruban, une piastre d'argent étrangère. Il l'appelle sa décoration. Personne n'a jamais su qui la lui avait décernée." },
        { if: { has: "fanal:signal" }, text: "Sur la lande, au bord du chemin, un grand homme en vareuse que tu as vu deux fois dans ta vie, et toujours de nuit, te fait un petit signe de la main : trois fois, comme une lanterne." },
        { if: { has: "fanal:signal_noir" }, text: "Le Grand Yves est là aussi, enrhumé, qui tousse dans son mouchoir. Il te regarde passer avec une sorte de respect bourru, le respect qu'on doit à ceux qui vous ont coûté une nuit de mer et qui ne s'en sont pas excusés." },
        { if: { has: "fanal:lavoir" }, text: "Derrière la foule, cinq femmes en coiffe blanche, veuves de la mer, se tiennent un peu à l'écart. L'une d'elles est Annaïg. Une autre est Zélie, qui n'est jamais allée au lavoir de nuit, à l'en croire, et qui te regarde comme on regarde quelqu'un qui partage un secret." },
        "Le Gabier a été enterré à l'aube dans le petit cimetière de Sainte-Anne, sous une croix de bois neuve où l'abbé Morisseau, venu de Varnèse sans traîner, a fait graver un nom qu'il a mal orthographié. Personne n'a su comment le corriger.",
      ],
      choices: [{ label: "Monter dans la voiture", to: "A1_d_depart" }] },
    A1_d_depart: { act: "I", title: "Le départ", place: "falaise",
      text: [
        "Victorine Davrigny est déjà dans la voiture, en face du baron, sa sacoche noire sur les genoux, raide comme une femme qui va à un procès. Le baron t'accueille avec un sourire et une couverture de fourrure. « Le mousse ! dit-il. Le premier membre de l'équipage. Asseyez-vous, matelot. Nous avons trois jours de route et une île à trouver. »",
        "Ton père est sur le seuil du Fanal.",
        { if: { has: "lazare:blesse" }, text: "Il s'est levé malgré Zélie, malgré la fièvre, et il se tient au chambranle de la porte, gris, en chemise, la poitrine bandée, une main levée." },
        { if: { has: "lazare:indemne" }, text: "Il est debout dans la porte qu'il a remise sur ses gonds, son marteau à la main, une main levée." },
        "La voiture s'ébranle. La lande défile. Tu te retournes, et tu vois le Fanal rapetisser sur sa falaise, la maison de granit bâtie de travers, et sur le pignon la lanterne de cuivre, éteinte en plein jour, qui continue de regarder la mer pour toi.",
      ],
      choices: [{ label: "Morlenc", to: "C2", big: true }] },
  },
  extras: {
    items: {
      briquet: { name: "Le briquet de ton père", kind: "divers", keep: true, price: 0, desc: "Un briquet d'amadou en argent usé, gravé d'une ancre et d'une croix aux bras évasés. Ton père en allumait la lanterne du pignon." },
      sel_zelie: { name: "Le sel de Zélie", kind: "divers", keep: true, price: 0, desc: "Un petit sac de gros sel gris, pour le seuil des maisons où l'on t'a fait du mal." },
    },
  },
};
