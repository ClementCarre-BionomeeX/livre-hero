// L'Île Folle-Aiguille · side story « La main sur la joue » (owes its question to Hawthorne's The Birthmark: is a flaw
// worth a life, and whose flaw is it, the face's or the eye's?). Act III, Victorine at the Red Reef: a topman with a
// wine-red mark on his face brings her a pot of the caustic crust scraped from the crater and begs her to burn the mark
// away, because the forecastle has decided that the calm is his fault. She hears him, tests the crust, goes up to the
// forecastle to find who started the talk, tries the crust on the edge of the mark, then decides: she burns it all
// (tk:brule), she refuses and faces the men herself (tk:equipage), or she leaves the choice to him after the trial, and
// he keeps his face (tk:garde). Wired in A3w_ecueil.
module.exports = {
  passages: {
    TK_marque: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      fx: { meet: "kervarec" },
      text: [
        "Il frappe à la porte de l'infirmerie à la nuit tombée, quand le récif a cessé de fumer rouge et fume gris, et qu'on entend la roche, au loin, cliqueter en refroidissant comme une batterie de cuisine qu'on range. Il entre de profil. Il garde le profil droit tourné vers la lanterne, comme on présente le bon côté d'une pièce de monnaie douteuse.",
        "C'est un gabier de mât de misaine, Maëlan Kervarec, vingt-deux ans, des épaules de portefaix et une voix d'enfant de chœur. Il pose sur la table un pot de grès, bouché d'un chiffon. Puis il se tourne. Toute la joue gauche, de la tempe à la mâchoire, et le cou jusqu'au col, est couverte d'une tache couleur de vin, aux bords nets, en forme de main ouverte, les cinq doigts écartés sur la pommette, la paume sous l'oreille. On dirait que quelqu'un l'a giflé à sa naissance, et que la gifle est restée.",
        "« C'est de la croûte du cratère, dit-il. Celle qui brûle. J'en ai gratté plein le pot. On m'a dit que vous saviez vous en servir. Je voudrais que vous m'enleviez ça. »",
        "Il ajoute, très vite, comme on avale un remède : « Ce soir. Avant qu'on reparte. »"
      ],
      choices: [
        { label: "Lui demander pourquoi ce soir", to: "TK_pourquoi", hide: { seen: "TK_pourquoi" } },
        { label: "Ouvrir le pot et examiner la croûte", to: "TK_croute", hide: { seen: "TK_croute" } },
        { label: "Monter au gaillard d'avant, entendre ce qu'on y dit", to: "TK_gaillard", if: { any: [{ seen: "TK_pourquoi" }, { seen: "TK_croute" }] }, why: "Elle ne sait encore rien de ce qu'on dit de lui." }
      ] },
    TK_pourquoi: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Il s'assied sur le tabouret, les mains entre les genoux. Il raconte sans s'arrêter, de la voix égale de quelqu'un qui a répété dans sa tête tout l'après-midi.",
        "Il est né avec. Sa mère disait que c'était la main d'un ange, qui l'avait retenu au bord quand il avait voulu repartir, le jour de sa naissance. Au village, les filles disaient autre chose, et dansaient avec ses frères. À bord, pendant sept ans, il a été « le Gifle », sans méchanceté, comme on est le Rouquin ou le Grand. Il grimpe plus vite que tout le monde. On l'aime bien, là-haut.",
        "Et puis le vent est tombé. Au bout de huit jours de calme, quelqu'un a dit, au gaillard, qu'un navire qui porte un homme marqué porte sa malchance avec lui, et qu'on a vu des équipages entiers se dessécher pour un seul. Au bout de dix jours, il a trouvé un poisson mort dans son hamac, la gueule ouverte. Au bout de douze, on ne lui passe plus la gamelle. On la pose par terre, devant lui, et on s'écarte.",
        "« Je sais bien que c'est des bêtises, dit-il. Mais s'il n'y a pas de vent demain, ni après-demain, les bêtises vont devenir quelque chose. Il y a des hommes qui ont soif, là-haut. Un homme qui a soif, vous lui montrez une raison, il la prend. Moi, je ne veux pas être la raison. Je veux être comme eux. »",
        "Victorine regarde la main sur la joue. Elle remarque, sans le vouloir, que la tache est belle : d'un rouge profond, régulier, avec des nuances de prune vers le cou, comme les veines d'un marbre ancien. Elle se garde bien de le lui dire."
      ],
      choices: [
        { label: "Ouvrir le pot et examiner la croûte", to: "TK_croute", hide: { seen: "TK_croute" } },
        { label: "Monter au gaillard d'avant, entendre ce qu'on y dit", to: "TK_gaillard" }
      ] },
    TK_croute: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        { if: { seen: "XQ_v_sel" }, text: "Elle la reconnaît avant d'ôter le chiffon, à l'odeur : c'est la croûte qu'elle a grattée elle-même, l'autre jour, au bord du cratère, et qui lui a laissé sur le dos de la main un petit cercle de peau morte, net comme une pièce. Le cercle est encore là. Elle le regarde." },
        { if: { not: { seen: "XQ_v_sel" } }, text: "Elle ôte le chiffon. Une odeur d'œuf pourri et de pharmacie monte du pot. Dedans, des aiguilles blanches et jaunes, cristallines, comme du givre ramassé sur une tombe. Elle en mouille une pincée et la pose sur une feuille de chou de la cambuse. La feuille noircit en cercle, d'un coup, et le cercle s'arrête net, comme tracé au compas." },
        "Un caustique. Un caustique de premier ordre, qui mord la chair et s'arrête au bord, comme un chien bien dressé. Les apothicaires de la Haute-Ville, à Varnèse, en vendraient le pot au prix d'un cheval. Avec cela, on peut enlever une verrue en une matinée, un tatouage en trois, une tache de vin en une semaine, couche après couche, jusqu'à la peau blanche de dessous.",
        "Elle fait le compte de ce qu'elle sait. La tache descend jusqu'au cou, là où battent les grosses veines. Une plaie de cette taille, ouverte, dans la chaleur du calme, avec l'eau croupie de la barrique et les mouches qui montent de la cale, s'infecte en trois jours sur cinq. Et le visage, après, sera celui d'un homme brûlé, rouge, luisant, tiré, avec un œil qui ne fermera plus tout à fait.",
        "Elle referme le pot. Il la regarde faire. Il a compris, à sa figure, que c'était possible. Le reste, il a décidé de ne pas l'entendre."
      ],
      choices: [
        { label: "Lui demander pourquoi ce soir", to: "TK_pourquoi", hide: { seen: "TK_pourquoi" } },
        { label: "Monter au gaillard d'avant, entendre ce qu'on y dit", to: "TK_gaillard" }
      ] },
    TK_gaillard: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      fx: { meet: "cariou" },
      text: [
        "Le gaillard d'avant, la nuit du calme, ressemble à une salle d'hôpital où les malades auraient décidé de jouer aux cartes. On dort sur le pont, à cause de la chaleur, en rangées, la chemise ouverte. On parle bas. Quand Victorine monte l'échelle, sa lanterne à la main, les voix s'arrêtent, comme des grillons quand on marche dans l'herbe, puis reprennent un peu plus loin.",
        "Elle s'assied sur un rouleau de cordage, défait une bande, en refait une à un homme qui s'est coupé sur la roche rouge, et elle écoute. Il faut une demi-heure. Puis le nom vient, de lui-même, comme une bulle remonte d'une vase : le Gifle. On en parle sans haine. On en parle comme on parle du temps. « Tant qu'il est à bord », dit quelqu'un. Et quelqu'un d'autre : « C'est le père Cariou qui l'a vu le premier. »",
        "Le père Cariou est assis à l'écart, contre le guindeau, à fumer une pipe vide. Un vieux gabier à la retraite des vergues, qui a été aux baleines, aux glaces, aux Mers chaudes, et qui ne s'est jamais remis d'avoir survécu à tout. Il la regarde venir avec ses petits yeux de goéland."
      ],
      choices: [
        { label: "S'asseoir près du père Cariou et lui parler", to: "TK_cariou" },
        { label: "Laisser le gaillard à ses cartes et faire un essai sur la tache", to: "TK_essai" }
      ] },
    TK_cariou: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "« Je l'ai vu le premier, dit le père Cariou, c'est vrai. Je l'ai dit le premier, c'est vrai aussi. Asseyez-vous, docteur. Vous allez me dire que c'est une bêtise de vieux marin. Je vous réponds d'avance : oui.",
        "« Seulement, voyez-vous, un équipage dans un calme, c'est une marmite. Ça chauffe. Ça chauffe sans bruit, des jours, et un matin, ça déborde. Quand ça déborde, ça déborde sur quelqu'un. Le capitaine. Le cuisinier. Le passager qui a trop de bagages. Moi, j'ai vu une marmite déborder sur un capitaine, aux Mers chaudes, il y a trente ans. On l'a trouvé dans l'eau, le matin. Trois hommes ont été pendus pour lui, au port, et j'ai porté les cordes. »",
        "Il tire sur sa pipe vide. Il fait un petit bruit de soufflet crevé.",
        "« Alors, quand la marmite chauffe, je lui donne quelque chose. Un petit quelque chose, sans danger. Un gars marqué qui grimpe bien, que personne n'osera toucher parce qu'il est plus fort que tous. On en parle, on lui pose la gamelle par terre, ça fait de la vapeur, ça soulage. Et la capitaine garde sa tête. Vous trouvez ça laid ? C'est laid. C'est de la cuisine. »",
        "« Et s'il se fait brûler la figure, ce soir, pour que votre vapeur s'en aille ? » demande Victorine.",
        "Le vieux la regarde longtemps. « Alors je trouverai autre chose, dit-il. Il y a toujours autre chose. Vous, par exemple. Une femme à bord, docteur. On n'y avait pas encore pensé. »"
      ],
      choices: [
        { label: "Laisser le vieux à sa pipe et faire un essai sur la tache", to: "TK_essai" }
      ] },
    TK_essai: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Maëlan attend à la même place, sur le tabouret, les mains entre les genoux. Il n'a pas bougé. Il a seulement retiré sa chemise, pour être prêt.",
        { if: { seen: "TK_cariou" }, text: "Elle ne lui rapporte rien de ce que le vieux a dit. Elle garde la cuisine du père Cariou pour elle, comme on garde un médicament dont on ne connaît pas encore la dose." },
        "Elle lui dit qu'elle va faire un essai, d'abord. Un seul. Un ongle de croûte, au bord de la tache, sous l'oreille, là où les cheveux le cacheront. Il dit oui. Il dit oui avant qu'elle ait fini.",
        "Elle mouille la pincée. Elle la pose. Il ne bouge pas. La peau blanchit, puis rougit, puis se ride, avec un petit grésillement de lard dans la poêle, et l'odeur monte, l'odeur douce, écœurante, de la chair qui cuit. Les mâchoires du gabier saillent sous la peau comme des cordages sous l'effort. Une larme coule de l'œil gauche, une seule, au milieu de la tache, toute droite, et tombe sur la table.",
        "Elle essuie. Il reste, sous l'oreille, un cercle de peau blanche et morte, grand comme un ongle. Autour, la main rouge, intacte, avec un ongle de moins.",
        "« Encore, dit-il d'une voix étranglée. Toute la main. Ce soir. »",
        "Elle fait le calcul : il faudrait quatre-vingts fois ce qu'il vient de supporter. Elle regarde le cercle blanc. Elle regarde la main rouge, qui, à la lueur de la lanterne, a l'air vivante, posée là, sur ce visage, comme une main qui console."
      ],
      choices: [
        { label: "Tout brûler, cette nuit, puisqu'il le demande", fx: { flag: "tk:brule" }, to: "TK_brule" },
        { label: "Refuser, et monter elle-même au gaillard parler aux hommes", fx: { flag: "tk:equipage" }, to: "TK_equipage" },
        { label: "Lui tendre le miroir de la trousse, et le laisser décider", fx: { flag: "tk:garde" }, to: "TK_miroir" }
      ] },
    TK_brule: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle le fait. Elle se dit qu'il est majeur, qu'il est maître de sa peau, et qu'une passagère aurait mauvaise grâce à lui faire la leçon sur la vie d'un équipage. Elle se le dit plusieurs fois, en préparant les linges.",
        "Cela dure jusqu'à l'aube. Elle travaille doigt par doigt, comme un graveur, d'abord le pouce, sur la tempe, puis l'index, puis les autres. Elle lui donne du laudanum, puis encore. Il serre entre ses dents une lanière de cuir qu'elle lui a donnée et qu'il coupe en deux vers trois heures. À la fin, il ne crie plus. Il regarde le plafond, et des larmes coulent seules, de l'œil gauche, comme d'une gouttière.",
        "À l'aube, la main a disparu. À sa place, il y a une plaie, une seule, à vif, de la tempe au col, qui suinte et qui luit. Elle la couvre de linges mouillés au vinaigre. Elle se lave les mains. Elle s'aperçoit qu'elle tremble, et qu'elle a faim, et qu'elle a honte d'avoir faim."
      ],
      choices: [
        { label: "Veiller sur la plaie, les jours suivants", to: "TK_fievre" }
      ] },
    TK_fievre: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "mer",
      text: [
        "La fièvre vient le deuxième jour, comme elle l'avait compté. Elle monte vite, et elle sent mauvais. La plaie tourne au jaune sur les bords. Victorine la nettoie quatre fois par jour, à l'eau bouillie, à la charpie, au vinaigre, à tout ce qu'elle a, et passe trois nuits sur le tabouret, à lui tenir la main, la vraie, celle du bout du bras, qui est brûlante et qui serre fort.",
        "Il délire. Il parle à sa mère. Il lui dit qu'il a rendu la main à l'ange. Il dit qu'on lui pose la gamelle sur la table, maintenant, comme aux autres. Il le dit en riant, et le rire lui tire la joue, et la plaie se rouvre.",
        "Le quatrième jour, la fièvre tombe. La plaie sèche. Elle sèche mal, en tirant, et elle tire vers le bas la paupière gauche, qui ne ferme plus qu'à moitié."
      ],
      choices: [
        { label: "Le laisser se regarder", to: "TK_fin_brule" }
      ] },
    TK_fin_brule: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "mer",
      text: [
        "Il demande un miroir le cinquième jour. Elle le lui tend. Il se regarde longtemps. Il y a, à la place de la main, une peau neuve, rose, luisante, plissée comme une pomme cuite, et un œil qui pleure tout seul.",
        "« C'est parti, dit-il. Merci, docteur. » Il le dit sincèrement. C'est le pire.",
        "Il remonte à son poste à la fin de la semaine. Au gaillard, on lui passe la gamelle de la main à la main, comme aux autres. On l'appelle le Brûlé. Il grimpe un peu moins vite. Il est content. Le père Cariou, qui le regarde passer, croise un instant le regard de Victorine, à l'autre bout du pont, et hausse les épaules, comme un cuisinier dont on a gâché la sauce et qui en a vu d'autres."
      ],
      choices: [
        { label: "Revenir à l'Écueil-Rouge", fx: { quest: "TK" }, back: "A3w_ecueil" }
      ] },
    TK_equipage: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle dit non. Elle le dit doucement, puis une deuxième fois, moins doucement, quand il se lève pour prendre le pot lui-même. Elle met le pot dans son coffre, et la clef du coffre dans sa poche. Puis elle reprend sa lanterne et elle remonte au gaillard d'avant, avec lui derrière elle, qui proteste à voix basse, comme un enfant qu'on emmène chez le dentiste.",
        "Elle pose la lanterne au milieu des hamacs. Les discours, elle les laisse aux avocats. Elle demande à voir les gencives de ceux qui sont réveillés. Elle passe de l'un à l'autre, la lanterne levée. Elle en compte onze qui saignent. Elle dit les onze noms, à voix haute, un par un. Puis elle dit que le calme a une cause, que cette cause s'appelle le biscuit pourri et le lard tourné, qu'elle a un nom savant et qu'elle le leur épargnera, et qu'aucun gabier, marqué ou pas, n'a jamais fait saigner la gencive d'un autre homme en grimpant plus vite que lui.",
        { if: { seen: "TK_cariou" }, text: "Puis elle se tourne vers le guindeau. « Père Cariou, dit-elle, vous qui avez l'expérience des marmites. Quand celle-ci débordera, elle débordera sur le biscuit. Je vous laisse le dire à votre façon. Vous parlez mieux que moi. » Le vieux la regarde, longtemps, avec ses yeux de goéland. Puis il ôte sa pipe vide de sa bouche, et il dit, pour tout le gaillard : « Elle a raison, les gars. C'est le biscuit. » Il le dit comme on retire une carte d'un jeu." },
        { if: { not: { seen: "TK_cariou" } }, text: "Les hommes l'écoutent. Ils ne disent rien. Elle ne sait pas s'ils la croient. Elle sait seulement qu'ils ont, pour la première fois depuis douze jours, quelque chose d'autre à regarder qu'une tache rouge : leurs propres dents, dans le petit miroir qu'elle fait passer de main en main." }
      ],
      choices: [
        { label: "Suivre Maëlan jusqu'à l'infirmerie", to: "TK_fin_equipage" }
      ] },
    TK_fin_equipage: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Le lendemain, on passe la gamelle au Gifle de la main à la main. Pas tout le monde : trois hommes la posent encore par terre. Mais on la passe. Le poisson mort ne revient pas.",
        "Maëlan lui en veut, un peu, et il a raison : elle a choisi pour lui, et elle a décidé qu'il garderait sa figure parce qu'elle la trouvait belle et qu'elle ne voulait pas la gâcher. Il le lui dit, sans colère, en passant devant l'infirmerie, une semaine plus tard. Elle répond que c'est exact.",
        "Le pot de croûte reste au fond de son coffre. Elle s'en sert, plus tard, pour une verrue, un cor, une morsure de murène. Chaque fois, elle pense à la main ouverte, sur la joue, et au petit cercle blanc, sous l'oreille, qu'elle y a laissé, et qui ne s'en ira plus."
      ],
      choices: [
        { label: "Revenir à l'Écueil-Rouge", fx: { quest: "TK" }, back: "A3w_ecueil" }
      ] },
    TK_miroir: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle prend dans sa trousse le petit miroir rond qui sert à examiner les gorges. Elle le lui tend. Elle lui dit : regardez. Puis elle lui dit ce qu'elle sait : quatre-vingts fois ce qu'il vient de supporter ; trois chances sur cinq que la plaie pourrisse ; un œil qui ne fermera plus ; une figure de brûlé, à vingt-deux ans, pour le reste de sa vie. Elle dit qu'elle le fera, s'il le veut encore demain matin. Elle dit qu'elle ne le fera pas ce soir.",
        "Il prend le miroir. Il regarde la main. Il ne l'avait jamais regardée de si près, dit-il, à la lanterne, avec un miroir de docteur. Chez lui, il n'y avait qu'un éclat de vitre accroché au mur, et sa mère l'avait accroché trop haut.",
        "Il regarde le petit cercle blanc, sous l'oreille, qui l'élance. Il touche du bout du doigt les cinq doigts rouges, un par un, la paume, le poignet qui descend dans le cou. Il dit, au bout d'un long moment : « Elle a l'air de me tenir. »",
        "Il rend le miroir. Il remet sa chemise. Il dit qu'il va réfléchir, et il monte se coucher."
      ],
      choices: [
        { label: "Attendre le matin", to: "TK_fin_garde" }
      ] },
    TK_fin_garde: { act: "III", title: "La main sur la joue", place: "cormorane", ambiance: "mer",
      text: [
        "Le matin passe sans lui. Il descend à midi, pour faire panser le cercle blanc, qui suppure un peu. Il ne parle pas du reste. Elle non plus.",
        "Le soir, au gaillard, quand on pose sa gamelle par terre, il la ramasse, il s'assied au milieu des autres, et il mange, la joue gauche tournée vers eux, en pleine lumière, comme on pose une carte sur la table. On le laisse faire. Au bout de trois soirs, quelqu'un lui passe le pain. C'est le père Cariou, qui a besoin de place pour ses jambes, dit-il, et qui ne regarde personne en le faisant.",
        "Victorine garde le pot de croûte au fond de son coffre. Elle y pense quelquefois, la nuit. Elle se demande ce qu'elle aurait fait, si le garçon avait redescendu l'échelle à l'aube, la chemise déjà ôtée. Elle ne trouve pas la réponse, et elle soupçonne qu'il le savait, et qu'il est resté en haut exprès, pour lui épargner la question."
      ],
      choices: [
        { label: "Revenir à l'Écueil-Rouge", fx: { quest: "TK" }, back: "A3w_ecueil" }
      ] }
  },
  extras: {
    people: {
      kervarec: { name: "Maëlan Kervarec", aka: ["le Gifle"], qui: "Gabier de misaine de la Cormorane, vingt-deux ans, une tache de vin en forme de main sur la joue gauche." },
      cariou: { name: "le père Cariou", qui: "Vieux gabier de la Cormorane, revenu des baleines et des glaces, qui fume une pipe vide contre le guindeau." }
    },
    quests: [
      { id: "TK", act: "III", kind: "annexe", title: "La main sur la joue", start: "TK_marque", doit: "tachenaissance", echo: ["tk:brule", "tk:equipage", "tk:garde"] }
    ]
  }
};
