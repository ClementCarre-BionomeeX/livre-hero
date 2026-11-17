// Le Douzième Coup · chapter 9, the one who stays, second half (act III, afternoon and night of 18 June 601).
// Inside the Fair taken at the eleventh stroke. Hub `K09r_foule`, at the First milestone: the alley of the forty
// clockmakers, whose watches start again in the walker's round (`r:vu_quarante`), Ragot's stall
// (`monde:montre_aubespin`), a painted board with a name on it (`monde:concours_gagne`), the meadow of the painted
// suns and the players' notice (`monde:florizel_piece`), the black booth and the blind woman (`r:sibylle`), small
// people of the great alley (the pickpocket, the hoop, the hour-seller), gleaners at work under the footbridge
// (`r:rodeurs_battus` | `r:rodeurs_denonces` | `r:rodeurs_laisses`), a tight place and a spilled pinch
// (`r:femme_peur`). Dusk: the Regent's train overhead (`r:line_signe`, `r:vu_cortege`, `r:aubespin_dessus`).
// Night among the carts, and the hill that glitters (`r:vu_colline`). Midnight at the First (B09).
var P = {};
var UNE_PINCEE = { stock: "sable", min: 3 };
var LESTE = [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }];

Object.assign(P, {
  K09r_tantot: { act: "III", title: "Midi, de ce côté", place: "foire", ambiance: "ville",
    text: [
      "Tu refermes le Cahier. Autour de toi, rien n'a changé de place, et rien n'en changera : le bourgeois prune, l'enfant de chœur, le gamin à cheval sur la borne. Il est midi à leur cadran depuis soixante ans. Au tien, d'après le soleil, qui marche pour toi seul{e} au-dessus de cette plaine arrêtée, il est une heure.",
      "Tu as devant toi un après-midi, et dix mille personnes. La Régente ne passera qu'à la brune.",
      "Du haut des marches, entre deux épaules, tu prends tes repères. Au nord, une allée étroite où tout brille : des cuivres, des verres, des émaux. Au midi, un pré, des mâts, une corde tendue, quelque chose de jaune dessus. Devant, la grande allée, sous l'ombre rayée de la Passerelle, jusqu'au mur doré. {autre} a marché là il y a quatre jours, dans le bruit.",
    ],
    choices: [{ label: "Descendre dans la foule", to: "K09r_foule", big: true }] },

  K09r_foule: { act: "III", title: "Sous la Première", backName: "la Première", place: "foire", ambiance: "ville", hub: true,
    text: [
      { first: true, text: "On apprend la foule comme on apprend un bois. Il y a des sentes : les endroits où les gens s'étaient écartés d'une voiture, d'une flaque, d'un chien. Il y a des clairières, devant les baraques où l'on avait fait cercle. Il y a des fourrés, qu'on contourne. Tu vas de biais, la note de la cloche sur les épaules, le froissement du chiffre aux oreilles, et dès que tu t'arrêtes, tu es seul{e} au monde." },
      { again: true, text: "La borne de marbre, sa grappe de curieux, le gamin à califourchon. La note revient dès le premier pas." },
    ],
    choices: [
      { label: "L'allée où tout brille", to: "K09r_horlogers" },
      { label: "Le pré, la corde, la chose jaune", to: "K09r_soleils" },
      { label: "Une baraque de toile noire, que la foule évite", to: "K09r_sibylle" },
      { label: "La grande allée, sous la Passerelle", to: "K09r_allee" },
      { label: "Laisser venir la brune", to: "K09r_brune", big: true },
    ] },

  // ---------- the clockmakers ----------
  K09r_horlogers: { act: "III", title: "Quarante étals qui se taisent", backName: "l'allée des horlogers", place: "foire", ambiance: "ville", fx: { flag: "r:vu_quarante" },
    text: [
      { first: true, text: "Quarante étals, vingt de chaque côté, et sur chacun des cadrans par douzaines. Des horloges de fer à poids de pierre, des pendules à colonnes, des montres en forme de croix, de tulipe, de tête de mort. Les marchands sont sortis de derrière leurs tréteaux pour compter avec tout le monde, et se tiennent au milieu de l'allée, le nez en l'air, les pouces au gilet." },
      { first: true, text: "Tout est arrêté, et rien n'est d'accord. Tu le vois au premier étal : une pendule dit midi moins quatre, sa voisine midi et six, une montre en tulipe midi juste. Elles se sont tues au même instant, sur le même coup, et chacune a gardé l'heure qu'elle croyait. C'est le plus grand cabinet d'erreurs du royaume. On y lit, à la minute, de combien chacun de ces messieurs trompait sa pratique." },
      { first: true, text: "Tu fais trois pas. Derrière toi, quelque chose gratte." },
      { first: true, text: "Tu te retournes. Sur l'étal que tu viens de longer, une pendule à colonnes a repris son balancier ; il va, il vient, il ralentit, il s'arrête à mesure que tu t'éloignes. Tu avances. À ta droite, une montre se met à battre, puis deux, puis dix, tout un drap de montres, un grésillement de sauterelles qui naît sous ton coude et meurt dans ton dos. Tu promènes ton rond de temps le long de l'allée, et les quarante étals te font, l'un après l'autre, leur tic-tac, comme des chiens qui aboient au passage d'une voiture." },
      { first: true, text: "{autre} a écrit qu'ici pas deux ne disaient la même heure. Tu peux lui répondre qu'elles ne disent plus rien, sauf aux gens qui passent, et qu'elles recommencent alors à mentir, chacune de son côté, avec une fidélité touchante." },
      { again: true, text: "Les quarante étals, les marchands le nez en l'air. Le grésillement te suit le long des tréteaux." },
      { first: true, with: "rouget", text: "Rouget a trouvé le jeu en dix pas. Il court le long d'un étal, s'arrête net, repart, et rit de les entendre démarrer et caler. « C'est moi qui les fais marcher ! Regarde ! Je suis l'horloger ! » Un marchand à gilet brodé le contemple, de très haut, sans le voir, avec le mépris qu'il avait pour un autre gamin, il y a soixante ans." },
    ],
    choices: [
      { label: "Une enseigne : *Au Noyer d'Or*", hide: { seen: "K09r_ragot" }, to: "K09r_ragot" },
      { label: "Au bout de l'allée, une estrade nue, et un tableau noir", hide: { seen: "K09r_estrade" }, to: "K09r_estrade" },
      { label: "Un étal de vieilles montres, vendues au poids", hide: { seen: "K09r_ferraille" }, to: "K09r_ferraille" },
      { back: "K09r_foule" },
    ] },

  K09r_ragot: { act: "III", title: "Au Noyer d'Or", place: "foire", ambiance: "ville",
    text: [
      "L'enseigne a un noyer d'or sur fond vert. Dessous, des plateaux de poirier, de buis, d'ébène, cirés, posés sur du drap : un marchand de bois qui avait compris qu'on vend mieux ce qui reluit.",
      "Il est là. Rose, rond, ciré comme ses planches, il n'a pas quitté son étal pour compter : il comptait en vendant. Il tient par le bouton de l'habit un monsieur à perruque, il a la tête levée vers la Tour, l'index de l'autre main dressé sur le onzième coup, et sur la figure le sourire d'un homme qui prend la cloche à témoin de ce qu'il affirme. Le monsieur à perruque a l'air de quelqu'un qui cherche son bouton.",
      { after: "monde:montre_aubespin", text: "Au milieu de l'étal, à la place d'honneur, une cloche de verre sur un coussin de velours rouge. Le coussin porte encore un rond, plus foncé, de la taille d'une montre. À la place, une carte, d'une belle ronde : *Vendue à monsieur le sous-maître de la Guilde. Maître Ragot fournit les connaisseurs.* Il a gardé la cloche pour montrer la carte." },
      { after: "monde:montre_aubespin", text: "Cent vingt écus, a écrit {autre}, sans marchander. Tu regardes ce rond de velours. C'est par là qu'un homme de trente ans a mis la main sur un nom de ferme ; il lui a fallu quarante ans pour venir frapper à la porte." },
      { before: "monde:montre_aubespin", text: "Au milieu de l'étal, à la place d'honneur, une cloche de verre sur un coussin de velours rouge, vide. Le velours n'a aucune marque. Maître Ragot expose une cloche, pour le cas où il lui viendrait quelque chose à mettre dessous." },
      { before: "monde:noyer_sauve", text: "Contre le fond de la baraque, debout, il reste un plateau de noyer, large d'une aune, d'un brun de miel. Les deux autres sont vendus : on voit leurs places sur le drap. Tu connais ce bois. Il vient d'une cour où il y a deux noyers, et la place d'un troisième." },
    ],
    choices: [{ back: "K09r_horlogers" }] },

  K09r_estrade: { act: "III", title: "Le tableau du concours", place: "foire", ambiance: "ville",
    text: [
      "La tente bleue est partie : la Guilde, le jour du Grand Midi, avait à faire là-haut. Il reste le plancher de l'estrade, douze marques d'établis dans la poussière, et, cloué à un poteau, le tableau noir où l'on proclame.",
      "*Concours des apprentis, pour le Grand Midi de l'an 541. Trois épreuves. Jugé par monsieur le sous-maître.*",
      { after: "monde:concours_gagne", text: "*Premier : {autre}, des Trois-Noyers. Trente écus et la clef.*" },
      { after: "monde:concours_gagne", text: "C'est écrit à la craie, d'une main de greffier, avec un paraphe. La craie a soixante ans et pas un grain n'en est tombé. Tu lis le nom une fois, deux fois. Tu l'as vu à l'encre dans un registre de religieuses ; le voici en public, à hauteur d'homme, sur la place de la plus grande foire du royaume, où dix mille personnes ont pu le lire pendant quatre jours et l'ont oublié le cinquième." },
      { after: "monde:concours_gagne", text: "Tu passes le doigt dessous, sans toucher. La Chronique dit : *un inconnu que nul ne put nommer.* La Chronique n'est pas venue à la Foire." },
      { before: "monde:concours_gagne", text: "*Premier : Aymon Foliot, de la colline des Jurés. Trente écus et la clef.*" },
      { before: "monde:concours_gagne", text: "C'est écrit à la craie, d'une main de greffier, avec un paraphe. Un nom de la ville, comme chaque année. La craie a soixante ans et pas un grain n'en est tombé." },
      { with: "jehan", text: "Jehan lit par-dessus ton épaule. « La clef. Chez nous, on dit que les veilleurs de cuivre de la colline laissent passer une clef de bronze, et rien d'autre. On le dit pour rire, à la chambrée : personne n'a de clef, et personne n'a envie d'aller voir. »" },
    ],
    choices: [{ back: "K09r_horlogers" }] },

  K09r_ferraille: { act: "III", title: "Au poids", place: "foire", ambiance: "ville",
    text: [
      "Un étal de rien, au bout du rang : une planche, une balance de fripier, et des montres mortes en tas, vendues au poids du laiton. La vieille qui le tenait s'est levée pour compter, une main sur les reins.",
      "Tu passes. Le tas ne dit rien. Tu repasses, plus lentement : rien. C'est le seul étal de l'allée qui se taise quand on marche. Ces montres-là étaient arrêtées avant la cloche ; elles n'ont rien à reprendre.",
      "Puis, au fond du tas, sous une boîte sans verre, il vient un bruit. Un seul battement, net, et un second. Tu écartes du doigt. C'est une petite montre d'argent noirci, sans aiguilles, que personne n'avait remontée depuis des années et qui avait encore un tour de ressort au ventre. Elle a attendu soixante ans de plus, sous les autres, qu'un passant lui prête de quoi le dépenser.",
      "Elle bat huit fois. Tu les comptes. Puis le ressort est au bout, et elle s'arrête pour son propre compte, sans avoir besoin de personne.",
    ],
    choices: [{ back: "K09r_horlogers" }] },

  // ---------- the meadow ----------
  K09r_soleils: { act: "III", title: "Le pré des soleils", backName: "le pré des bateleurs", place: "foire", ambiance: "champs",
    text: [
      { first: true, text: "La chose jaune est une femme. Elle est sur une corde, à douze pieds du sol, entre deux mâts, en maillot jaune, un flageolet aux lèvres. Elle marchait à reculons. Elle a un pied posé et l'autre en l'air, loin derrière elle, qui cherche la corde, et elle ne la trouvera pas avant le douzième coup. Sous elle, cent figures levées ; mais c'est la Tour qu'elles regardent, par-dessus son épaule. On l'a laissée seule là-haut au plus beau de son tour." },
      { first: true, text: "Elle seule, de toute la Foire, n'a pas tourné la tête. On voit pourquoi. On ne compte pas les coups d'une cloche quand on a un pied en l'air." },
      { first: true, text: "Un ours est debout au milieu d'un rond, les pattes de devant ballantes, avec sa gravité de notaire ; son meneur lui a lâché la chaîne pour se signer. Sur une voiture, un homme en habit rouge tient au bout d'une pince, bien haut, une dent qu'il vient d'ôter ; son patient, la bouche ouverte, regarde la Tour ; et le tambour, à côté, a les baguettes levées sur un roulement qui n'a plus de cri à couvrir." },
      { again: true, text: "La femme en jaune sur sa corde, l'ours, la dent au bout de la pince." },
      { first: true, text: "Au fond du pré, contre le mur d'une petite chapelle grise, il y a une place vide. Quatre trous de roues dans l'herbe, les marques de tréteaux de vingt pieds, et un poteau, avec une affiche." },
    ],
    choices: [
      { label: "Lire l'affiche", hide: { seen: "K09r_affiche" }, to: "K09r_affiche" },
      { label: "Passer sous la corde", hide: { seen: "K09r_corde" }, to: "K09r_corde" },
      { back: "K09r_foule" },
    ] },

  K09r_affiche: { act: "III", title: "Par permission du Chapitre", place: "foire", ambiance: "champs",
    text: [
      "Elle est peinte à la main, sur une toile, avec un soleil à chaque coin.",
      "*LA TROUPE DE MAÎTRE FLORIZEL, par permission de messieurs du Chapitre, donnera ce jour du Grand Midi, à onze heures, sur le parvis de la Tour, devant la Reine, le MYSTÈRE DES DOUZE HEURES, avec son horloge à douze portes. Le pré fait relâche. On ne rend pas l'argent : on ne l'a pas pris.*",
      { after: "monde:piece_silence", text: "Dessous, une bande de papier collée de travers, d'une écriture qui a couru : *NOUVEAU. Pour cette seule fois, il paraîtra quelqu'un à la Douzième Porte. Elle ne dira rien. Venez voir ce qu'elle ne dit pas.*" },
      { after: "monde:piece_mot", text: "Dessous, une bande de papier collée de travers, d'une écriture qui a couru : *NOUVEAU. Pour cette seule fois, il paraîtra quelqu'un à la Douzième Porte. Elle dira une parole, que le Livre lui donne. Venez l'entendre.*" },
      { after: "monde:piece_corde", text: "Dessous, une bande de papier collée de travers, d'une écriture qui a couru : *NOUVEAU. Pour cette seule fois, il paraîtra quelqu'un à la Douzième Porte, une corde à la main. Venez voir ce qu'elle en fait.*" },
      { after: "monde:florizel_piece", text: "Tu relis la bande. *J'y ai fait mettre quelqu'un*, a écrit {autre}. *Si tu passes devant, regarde derrière cette porte.* La porte est à une lieue, sur un parvis, dans une horloge de carton haute comme une maison. Le Mystère commençait à onze heures. À midi, on en était à la fin." },
      { before: "monde:florizel_piece", text: "Tu connais l'usage, par les Veilleurs, qui le racontent : onze portes s'ouvrent sur onze figures, la douzième s'ouvre sur rien, et l'on se signe. La troupe a joué cela trente ans. Elle le jouait ce jour-là. À midi, on en était à la fin." },
    ],
    choices: [{ back: "K09r_soleils" }] },

  K09r_corde: { act: "III", title: "Un pied en l'air", place: "foire", ambiance: "champs",
    text: [
      "Tu passes sous la corde, et tu lèves la tête. D'en bas, on voit la semelle de son chausson, blanche de résine, et le dessous de son menton. Elle a trente ans, des bras de lavandière, et, au coin de l'œil, la petite ride des gens qui font une chose difficile en ayant l'air de s'amuser.",
      "Ton rond de temps monte moins haut que tes mains levées. Elle est à douze pieds. Le flageolet, pourtant, a laissé quelque chose : tu passes juste dessous, et il te tombe sur la tête trois notes, grêles, d'un air à danser, qui étaient restées accrochées là comme du linge.",
      "Tu t'écartes. Si le coup revient un jour, elle reposera le pied, elle finira sa mesure, et elle saluera un public qui regardait ailleurs. Elle ne saura jamais qu'elle a tenu soixante ans sur une jambe. C'est le plus long tour qu'on ait fait sur une corde, et personne ne lui en dira rien.",
    ],
    choices: [{ back: "K09r_soleils" }] },

  // ---------- the black booth ----------
  K09r_sibylle: { act: "III", title: "La baraque noire", backName: "la baraque noire", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "Elle est entre un marchand de gaufres et un montreur de puces, et la foule, autour, fait un coude. De la toile noire, sans un mot, sans une étoile peinte. La portière pend." },
      { first: true, text: "Dedans, il fait sombre. Une chandelle tient sa flamme droite sur une table. Deux tabourets. Sur l'un, une très vieille femme, toute petite, les yeux couverts de la taie bleuâtre des aveugles. Elle a un tricot sur les genoux, les aiguilles croisées au milieu d'une maille." },
      { first: true, text: "Elle seule, de tous ceux que tu as vus aujourd'hui, a la tête baissée. Les autres comptaient en regardant la Tour. Elle comptait dans sa laine : il y a onze mailles sur l'aiguille de droite." },
      { first: true, text: "Au mur de toile, les Veilleurs ont épinglé un carton. *La mère Sept-Heures. On ne l'éveille pas. Elle l'a demandé.*" },
      { again: true, before: "r:sibylle", text: "La chandelle, la table, la vieille sur son tricot. Le carton des Veilleurs." },
      { again: true, after: "r:sibylle", text: "La vieille tricote sa douzième maille depuis soixante ans, et tu sais à présent qu'elle la tient exprès." },
    ],
    choices: [
      { label: "T'asseoir sur l'autre tabouret, et poser une pincée sur sa main", hide: { has: "r:sibylle" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:sibylle", ep: ["histoire", 500] }, to: "K09r_sibylle_eveil" },
      { back: "K09r_foule" },
    ] },

  K09r_sibylle_eveil: { act: "III", title: "Une main qui commence à l'heure", place: "foire", ambiance: "ville",
    text: [
      "Les aiguilles finissent la maille. La vieille ne sursaute pas. Elle tourne sa figure de côté, à la façon des gens qui écoutent un bruit dans un mur.",
      "« Encore un. » Sa voix est sèche comme une feuille. « Le dernier avait une robe grise et sentait la lampe. Il m'a demandé si sa femme l'avait aimé. Je lui ai lu la main, je lui ai dit ce que j'y trouvais, et il est parti sans payer. Combien cela fait-il, pour vous autres ? »",
      "Tu dis : trente-cinq ans depuis ce frère-là. Soixante depuis la cloche.",
      "« Soixante. » Elle range la chose quelque part, sans émotion. « J'en avais quatre-vingt-quatre. Me voilà la plus vieille femme du royaume, et je n'ai pas pris une ride. Donne. » Elle a déjà ta main. Ses doigts sont légers, tièdes ; son pouce trouve ta paume et se met en marche.",
      { after: "monde:sibylle", text: "« Des cordes. Des sacs. Tu portes. Tu passes où l'on ne passe pas. » Le pouce remonte. « Celle-ci commence où il faut : au bas du pouce, le jour qu'on vient au monde. Bien. J'en ai eu une, voilà quatre jours, qui commençait trop tard. Une main d'horloger. Je lui ai rendu son écu. »" },
      { before: "monde:sibylle", text: "« Des cordes. Des sacs. Tu portes. Tu passes où l'on ne passe pas. » Le pouce remonte. « Celle-ci commence où il faut : au bas du pouce, le jour qu'on vient au monde. Bien. »" },
      "Le pouce s'arrête. Il revient. Il repart.",
      { after: "monde:sibylle", text: "« C'est la même. » Elle a dit cela très bas. « La main diffère : la tienne a de la corne où l'autre avait du froid. La ligne est la même. Elle met le pied où l'autre l'a mis. Je le lui ai dit : *il y a quelqu'un qui marche dans tes pas, très loin derrière, et tout près.* Je ne pensais pas le tenir si tôt. »" },
      { before: "monde:sibylle", text: "« Tiens. » Elle a dit cela très bas. « Celle-ci suit quelqu'un. Elle met le pied où un autre l'a mis, pas pour pas. Il marche devant toi, très loin devant, et tout près. Je ne l'ai pas eu dans ma baraque ; je l'aurais reconnu à ta main. »" },
      "Elle suit encore. « Elle va droit. Puis elle a un trou. Tout petit : un grain. Les deux bords se touchent presque, et de l'autre côté du trou... » Le pouce cherche. « De l'autre côté, vous êtes deux sur la même ligne, et il y a une main de trop, posée sur une chose froide. Une vieille main. Elle y est depuis longtemps. Je ne lis pas plus loin : il n'y a rien d'écrit plus loin, ni pour toi ni pour personne. »",
      "Elle te lâche. Tu sens, sous tes doigts, le sable qui achève de descendre. « Reprends ta pincée, si cela se reprend. Je ne me fais pas payer par quelqu'un qui en manquera. Et dis à tes robes grises de laisser ma lampe éteinte. » Elle a retrouvé ses aiguilles. « J'ai défendu qu'on m'éveille parce que je sais ce qu'on vient me demander. On vient me demander si cela finira. Je suis aveugle, mon enfant : j'ai entendu onze coups, et j'attends l'autre, comme tout le monde. Seulement, moi, je sais que j'attends. »",
      "Les aiguilles se croisent. La douzième maille reste sur la pointe.",
    ],
    choices: [{ back: "K09r_sibylle" }] },

  // ---------- the great alley ----------
  K09r_allee: { act: "III", title: "Sous la Passerelle", backName: "la grande allée", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "La Passerelle fait à la grande allée un plafond de madriers, à dix pieds, d'où tombe un jour rayé. Dessous, les quatre mille de l'allée sont debout dans une pénombre de halle, zébrés de soleil, la figure levée vers une tour qu'on leur a cachée en 542 et qu'ils regardent quand même, à travers le chêne." },
      { first: true, text: "Les pilotis descendent parmi eux, où l'on a pu. L'un est planté entre un mari et sa femme, qui se donnaient le bras : on a fait passer le bras autour. Un autre a obligé de scier le coin d'un éventaire. Sur chaque poteau, à hauteur d'œil, une petite plaque de cuivre : le nom du Régent qui l'a posé, et l'année." },
      { first: true, text: "C'est le quartier des petites gens de la Foire, ceux qui n'avaient ni baraque ni tréteau et qui vendaient debout." },
      { again: true, text: "L'ombre rayée, les pilotis, les quatre mille qui regardent à travers le bois." },
      { first: true, with: "jehan", text: "Jehan marche le nez en l'air, à compter les solives. « Quinze pas d'un pilotis à l'autre. Deux toises de large. Trois hommes de front, pas quatre. » Il s'aperçoit que tu le regardes. « C'est le métier qui remonte. On ne m'a pas appris à voir un pont sans me demander comment on le tient. »" },
    ],
    choices: [
      { label: "Un parasol jaune, un pliant, une montre", hide: { seen: "K09r_heure" }, to: "K09r_heure" },
      { label: "Un garçon de quinze ans, la main dans la poche d'un autre", hide: { seen: "K09r_tirelaine" }, to: "K09r_tirelaine" },
      { label: "Un cerceau, debout tout seul au milieu de l'allée", hide: { seen: "K09r_cerceau" }, to: "K09r_cerceau" },
      { label: "Plus loin, entre deux pilotis, des gens qui bougent", hide: { any: [{ has: "r:rodeurs_battus" }, { has: "r:rodeurs_denonces" }, { has: "r:rodeurs_laisses" }] }, to: "K09r_rodeurs" },
      { back: "K09r_foule" },
    ] },

  K09r_heure: { act: "III", title: "L'heure, un liard", place: "foire", ambiance: "ville",
    text: [
      "Il a un pliant, un parasol jaune et une montre : c'est tout son fonds. La montre est un gros oignon d'argent, bosselé, qu'il porte au cou par une chaîne de puits. On lui donnait un liard, il ouvrait le couvercle, il disait l'heure, et les gens des fermes repartaient contents.",
      "Il est debout, le couvercle ouvert, la clef dans le trou du cadran, le pouce et l'index dessus. Seul de toute l'allée, il a les yeux sur sa montre, de tout près, en fronçant le nez, et l'oreille tournée vers le ciel. Tu comprends son geste : il la remettait. Tous les jours, à midi, sur la grosse cloche, comme font les pauvres. Il avait amené les aiguilles sur le douze, et il attendait le dernier coup pour lâcher la clef.",
      "Il l'attend. Son oignon est, de toute la Foire, la seule montre qui soit à l'heure de la Tour, et elle le restera jusqu'à ce qu'il ôte ses doigts.",
      "Tu passes contre lui. L'oignon se met à battre dans ton rond, lourd, tranquille, les aiguilles tenues par la clef. Tu le laisses. Il a vendu de l'heure toute sa vie ; on lui en a laissé soixante ans dans la main, et il n'en a pas l'usage.",
    ],
    choices: [{ back: "K09r_allee" }] },

  K09r_tirelaine: { act: "III", title: "Priez pour lui aussi", place: "foire", ambiance: "ville",
    text: [
      "Le bourgeois est gros, en habit noisette, le menton levé, heureux. Derrière lui, tout contre, un garçon maigre regarde la Tour comme tout le monde, avec la même bouche arrondie sur le onze ; et sa main droite, pendant ce temps, est entrée jusqu'au poignet dans la basque de l'habit noisette.",
      "Il avait choisi son moment en artiste. Une foule qui compte les coups de midi a les deux yeux au ciel et les deux mains vides : c'est l'instant du métier. Il lui restait un coup de cloche pour ressortir. Il a, au poignet, un petit oiseau à queue fourchue, tatoué en bleu.",
      "Les Veilleurs ont pendu à son cou, par une ficelle rouge, un carton. *Tire-laine. On ne sait pas son nom. Il est ici pour toujours, la main dans le sac. Priez pour lui aussi.*",
      "Tu connais cette main-là : tu l'as eue. Tu regardes le garçon. Soixante ans de flagrant délit, sous les yeux de trois générations de pèlerins, avec un écriteau. Aucun juge n'a jamais condamné personne à cela. Quelqu'un, pourtant, lui remplit une lampe.",
      { with: "rouget", text: "Rouget examine la prise en connaisseur. « Il a les doigts trop loin. Fallait deux doigts, pas la main. » Il réfléchit. « Remarque, il s'est pas fait prendre. Ça fait soixante ans, et l'autre a toujours rien senti. »" },
    ],
    choices: [{ back: "K09r_allee" }] },

  K09r_cerceau: { act: "III", title: "Un cerceau", place: "foire", ambiance: "ville",
    text: [
      "Il est en bois de châtaignier, haut comme une table, et il se tient debout au milieu d'une sente, sur sa tranche, sans personne. Il roulait. Une baguette l'avait lancé, et il allait devant lui, entre les jambes des gens, penché d'un rien sur la gauche, comme penchent les cerceaux qui vont tourner.",
      "L'enfant est à six pas, la baguette levée, la bouche ouverte. C'est une petite fille en sarrau bleu. La cloche sonnait pour les grands. Elle, elle courait après son cerceau, parmi dix mille grandes personnes qui s'étaient arrêtées de marcher toutes à la fois, ce qui lui faisait de la place.",
      "Tu contournes le cerceau. Il entre dans ton rond : il avance d'un demi-tour, avec un petit bruit de bois sur le gravier, penche encore, et s'arrête quand tu es passé{e}, un peu plus près de tomber. Tu t'en vas vite. Tu refuses d'être la main qui aura couché ce cerceau.",
    ],
    choices: [{ back: "K09r_allee" }] },

  K09r_rodeurs: { act: "III", title: "Des glaneurs de ville", place: "foire", ambiance: "ville",
    text: [
      "Ils sont trois, sous la Passerelle, à l'endroit où l'ombre est la plus épaisse et où les Veilleurs, du chaume, n'ont pas de vue. Deux hommes et une femme, en gris, des sabliers neufs au cou : du sable de la cantine, payé comptant. Ils ont l'accent de Port-Régent, et ils travaillent au ciseau.",
      "Tu connais le glanage. On prend ce que les gens ont laissé, dans des maisons vides, et l'on se raconte que cela ne manque à personne. Ceux-là font autre chose. Ils vont de dormant en dormant, d'un pas de moissonneur, et ils coupent : les cordons de bourse, les chaînes de cou, les boutons d'argent, et les nattes des femmes, qu'on vend aux perruquiers de Port-Régent. Les pris se laissent faire. Cela simplifie.",
      "La femme a un sac de toile, déjà lourd. Elle t'a vu{e}. Elle fait un signe aux deux autres, sans cesser de couper, de l'air dont on montre un chien à quelqu'un.",
      "« C'est pris, ici, dit le plus grand. De la Première à la porte, c'est à nous jusqu'au Serment. On a payé le brigadier. Va glaner tes fermes. »",
      { with: "jehan", text: "Jehan a porté la main à sa hanche, où il n'a plus de sabre. « Article neuf, dit-il entre ses dents. *Qui touche au corps d'un dormant est pendu sur place.* C'est le seul article que j'aurais appliqué de bon cœur. On ne nous le faisait jamais appliquer. » Il regarde le sac. « Maintenant je sais pourquoi. »" },
      { with: "rouget", text: "Rouget s'est mis derrière toi. Tu l'entends ramasser un caillou." },
    ],
    choices: [
      { label: "« Posez le sac. »", fight: { title: "Sous la Passerelle", enemies: [{ id: "glaneur_rival", n: 2 }], terrain: "ville",
        win: { fx: { flag: "r:rodeurs_battus", stock: { sable: 2 }, ep: ["seance", 700] }, to: "K09r_rodeurs_fin" }, lose: { fx: { pv: 3, stock: { sable: -1 }, flag: "r:rodeurs_laisses" }, to: "K09r_rodeurs_fin" } } },
      { label: "Aller dire deux mots aux manteaux blancs de la rampe", test: { dom: "social", diff: 5, label: "Se faire croire d'un garde de la Régente", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "r:regente_parle" }, v: 15 }, { if: { has: "r:veilleurs_amis" }, v: 10 }] },
        win: { fx: { flag: "r:rodeurs_denonces", ep: ["seance", 500] }, to: "K09r_rodeurs_fin" }, lose: { fx: { flag: "r:rodeurs_laisses" }, to: "K09r_rodeurs_fin" } },
      { label: "Passer : tu as glané, toi aussi, et tu n'as de leçon à faire à personne", fx: { flag: "r:rodeurs_laisses" }, to: "K09r_rodeurs_fin" },
    ] },

  K09r_rodeurs_fin: { act: "III", title: "Un sac de toile", place: "foire", ambiance: "ville",
    text: [
      { after: "r:rodeurs_battus", text: "Les ciseaux sont une mauvaise arme : ils demandent qu'on soit près. Le grand l'apprend le premier. Le second glisse entre deux dormants, se cogne à un troisième, qui ne cède pas plus qu'une borne, et tombe assis. La femme a lâché le sac pour courir ; elle court bien, de biais, en personne qui connaît les sentes." },
      { after: "r:rodeurs_battus", text: "Tu ouvres le sac. Des bourses, des croix, des alliances, trois dés à coudre en argent, une tabatière ; et sept nattes, blondes, brunes, une grise, nouées d'une ficelle. Tu ne sauras jamais à qui rendre chaque chose. Tu portes le sac au pied du premier pilotis, sous la plaque du premier Régent, où les Veilleurs passent chaque matin. Tu gardes leurs sabliers : ce sable-là n'a pas d'autre maître." },
      { after: "r:rodeurs_denonces", text: "Les manteaux blancs t'écoutent en regardant tes mains, puis ton sablier, puis l'un l'autre. Le plus vieux a un fils à la Foire, sous la bannière verte ; cela se voit à la façon dont il serre sa pique. « Article neuf, dit-il seulement. Reste ici. » Ils descendent sous la Passerelle à quatre, sans courir. Tu entends un cri, bref, une course. Ils remontent avec trois paires de poignets liés, et le sac." },
      { after: "r:rodeurs_denonces", text: "« Le brigadier de la Deuxième touche sa part, dit-il. On le sait. On ne peut rien : la Deuxième est à la Maîtrise. » Il te regarde enfin en face. « Toi, tu es de quel bord ? Tu as des mains de glaneur et tu dénonces des glaneurs. » Il n'attend pas la réponse. « Va-t'en avant que Son Altesse passe. Elle déteste qu'on pende les jours de fête. »" },
      { if: { all: [{ has: "r:rodeurs_laisses" }, { not: { has: "r:rodeurs_battus" } }, { not: { has: "r:rodeurs_denonces" } }] }, text: "Tu passes, ou l'on te fait passer. Derrière toi, le bruit reprend : un petit claquement d'acier, régulier, appliqué, pareil à celui d'un tailleur qui coupe du drap. Il te suit longtemps sous les madriers. Les quatre mille de la grande allée regardent la Tour, la bouche sur le onze, et se laissent faire." },
      { if: { all: [{ has: "r:rodeurs_laisses" }, { not: { has: "r:rodeurs_battus" } }, { not: { has: "r:rodeurs_denonces" } }] }, text: "Tu as glané des gonds, des cuillers, un chandelier. Tu t'es dit que cela ne manquait à personne. Tu cherches où passe, au juste, la différence entre eux et toi, et tu la trouves ; mais il a fallu chercher." },
    ],
    choices: [{ back: "K09r_allee" }] },

  // ---------- dusk: the Regent's train ----------
  K09r_brune: { act: "III", title: "À la brune", place: "foire", ambiance: "ville",
    text: [
      "Le soleil descend, pour toi. Il allonge ton ombre sur des gens qui n'en ont qu'une, courte, ramassée sous leurs pieds : celle de midi. Vers le soir, la Foire prise devient une chose que l'œil accepte mal. Le ciel rougit au-dessus de dix mille figures éclairées d'en haut, en plein, par une lumière qui n'est plus nulle part.",
      "Du côté du chaume, il vient une rumeur. Des fers sur du bois. Les manteaux blancs de la rampe se sont redressés.",
      "Pour voir passer la Régente, il y a le chaume, avec les pèlerins, de loin. Il y a aussi le dessous de la Passerelle, où personne ne va : les madriers ont du jour entre eux, large comme un doigt, et l'on y a tout un cortège à dix pieds au-dessus de la tête.",
    ],
    choices: [
      { label: "Te glisser sous les madriers, à hauteur de la Première", test: { dom: "discretion", diff: 5, label: "Passer dans un fourré de dormants, à la nuit tombante", help: LESTE },
        win: { fx: { flag: "r:vu_cortege" }, to: "K09r_cortege" }, lose: { fx: { flag: ["r:vu_cortege", "r:femme_peur"], stock: { sable: -1 } }, to: "K09r_femme" }, big: true },
      { label: "Regarder du chaume, parmi les pliants", to: "K09r_cortege_loin" },
    ] },

  K09r_femme: { act: "III", title: "Douze ?", place: "foire", ambiance: "ville",
    text: [
      "Le passage est étroit : une femme en fichu à fleurs, un tonneau, le coude d'un grand diable de charretier. Tu t'y engages de profil. Le coude ne cède pas ; ton épaule tourne, ta main cherche un appui, et ton sablier de corne, pris entre deux poitrines, bascule.",
      "Il en tombe une pincée. Tu la vois partir, grise, brillante, lente, et se poser comme une poussière sur le dos d'une main qui tenait un panier.",
      "La femme au fichu respire. Elle achève le mot qu'elle avait aux lèvres : « ...onze. » Elle sourit à la Tour. Elle attend. Son sourire tient le temps qu'il faut pour un coup de cloche, puis le temps d'un second, et il commence à se défaire par les yeux.",
      "« Douze ? » dit-elle, tout doucement, à sa voisine. La voisine ne répond pas. La femme lui touche le bras : le bras est de pierre. Elle tourne la tête. Elle voit le charretier, la bouche ouverte ; un enfant, un doigt en l'air ; dix mille personnes, et pas un souffle. Elle te voit, toi, plaqué{e} contre un tonneau, la main sur ton sablier.",
      "Tu ouvres la bouche pour dire quelque chose. Tu n'as rien de prêt. Le sable d'une pincée tombée dure le temps d'un Pater : elle n'a que celui de comprendre qu'il y a quelque chose à comprendre. Sa figure est en train de changer quand le gris la reprend.",
      "Elle reste ainsi. La tête tournée, les sourcils levés, la bouche sur une question. Dans toute la Foire, dix mille figures attendent une fête. Il y en a une, à présent, qui a peur, et qui aura peur aussi longtemps que cela durera. Les Veilleurs la trouveront. Ils lui chercheront un nom.",
      "Tu passes. Tu tiens ton sablier à deux mains.",
    ],
    choices: [{ label: "Gagner l'ombre des madriers", to: "K09r_cortege", big: true }] },

  K09r_cortege: { act: "III", title: "Des semelles", place: "foire", ambiance: "ville",
    text: [
      "Tu es sous la Passerelle, le dos à un pilotis, entre un marchand de sifflets et une nourrice. Au-dessus de toi, le chêne se met à vivre.",
      "Les chevaux d'abord. Quarante, au pas, ferrés à glace pour le bois ; chaque sabot fait descendre entre les madriers un fil de poussière, qui s'arrête à mi-hauteur et y reste, de sorte que le cortège laisse sous lui, à mesure, un rideau gris pendu dans l'air. Puis des bottes : les manteaux blancs, par quatre. Tu vois des semelles, des éperons, le bas d'une pique.",
      "Puis un pas seul, léger, de femme, au milieu de la chaussée. Il s'arrête juste au-dessus de la Première. Par la fente, tu as un ourlet de drap blanc, une main dégantée posée sur le garde-fou, et, quand elle se penche, la moitié d'une figure de vingt-huit ans qui regarde en bas.",
      "Elle regarde les dormants. Elle le fait chaque année, à cet endroit ; les Veilleurs disent qu'elle y allume elle-même une lampe. Cette fois, elle reste plus longtemps que la lampe ne le demande. Elle a sous elle quatre mille visages levés vers une tour, et qui passent à travers elle sans la voir.",
      { after: "r:regente_depeche", text: "« Quel âge avaient-ils, quand mon aïeul a bâti ceci ? » La voix est nette. Quelqu'un répond : le même, Altesse. « Le même. » Un temps. « Il est passé au-dessus d'eux en 542, et il a écrit *provisoire* sur une plaque. Qu'on me donne le texte de cette plaque, ce soir. »" },
      { before: "r:regente_depeche", text: "« Allumez », dit-elle enfin, d'une voix lasse. Une flamme prend, au-dessus de toi, et se tient droite. Le pas léger repart." },
      "Derrière elle, un pas égal. Celui-là ne s'arrête pas au garde-fou, ne se penche pas. Il s'arrête sur la fente même, de sorte que tu as au-dessus du front deux semelles minces, bien cirées, et, entre elles, un filet de sable gris qui descend d'un sablier porté à la ceinture : du sable qui tombe, lui, jusqu'en bas, jusqu'à ta manche.",
      { after: "r:aubespin_flaire", text: "« Les souris sont arrivées avant nous, Altesse », dit la voix égale, sans se baisser. On l'entend sourire. « Elles ont passé la Deuxième ce matin. Elles auront soif. La Foire donne soif. » Les deux semelles restent encore le temps de trois respirations, que tu ne prends pas. Puis elles s'en vont." },
      { before: "r:aubespin_flaire", text: "La voix égale dit quelque chose du temps qu'il fera pour le Serment. Les deux semelles restent le temps de trois respirations, puis s'en vont. Il a gardé les yeux devant lui. Tu en es moins tranquille : cet homme-là se dispense de regarder ce qu'il sait." },
      "Après lui, les casaques noires. Quatre d'entre elles marchent au pas, lourdement, en gens qui portent : des brancards, une chaise fermée, de cuir, à rideaux. La berline n'a pas pu monter la rampe. On a mis la vieille en chaise.",
      { after: "r:veilleurs_parvis", text: "Et derrière la chaise, longtemps, à n'en plus finir, des sandales. Trois cents Veilleurs, deux par deux, la lampe à la main ; leur pas fait sur le chêne un bruit de pluie. La Doyenne a tenu parole. Ils montent au Serment, pour une fois, avec autre chose que des prières." },
    ],
    choices: [
      { label: "Frapper trois coups sous la chaise, du manche de ton couteau", hide: { has: "r:line_signe" }, test: { dom: "discretion", diff: 5, label: "Trois coups que quatre porteurs n'entendront pas", help: [{ if: { voie: "leste" }, v: 10 }, { if: { has: "r:line_vue_abbaye" }, v: 15 }, { if: { has: "r:boite_line" }, v: 5 }] },
        win: { fx: { flag: "r:line_signe", ep: ["perso", 500] }, to: "K09r_cortege_fin" }, lose: { fx: { flag: "r:aubespin_dessus" }, to: "K09r_cortege_fin" } },
      { label: "Laisser passer, sans un geste", to: "K09r_cortege_fin" },
    ] },

  K09r_cortege_fin: { act: "III", title: "Ce qui tombe d'une chaise", place: "foire", ambiance: "ville",
    text: [
      { outcome: "win", text: "Trois coups, sous le plancher de la chaise, entre deux pas des porteurs, à la mesure de leur marche : ils les prennent pour un madrier qui joue. La chaise continue. Tu la suis par en dessous, de pilotis en pilotis, le nez en l'air." },
      { outcome: "win", text: "Au quatrième pilotis, quelque chose passe par la fente. C'est petit, cela brille, et cela tombe pour de bon, puisque cela vient de quelqu'un qui porte du sable : une vis. Une vis d'acier, longue comme l'ongle, bleue, de ce bleu de gorge de pigeon. Tu la reçois dans ta paume." },
      { outcome: "win", after: "r:boite_line", text: "Tu connais ses sœurs. Tu en as défait quatre ce matin, de l'ongle du pouce. Elle a su que tu avais trouvé la boîte, ou elle a voulu savoir ; et elle vient de te répondre par la seule lettre qu'on lui ait laissée." },
      { outcome: "win", before: "r:boite_line", text: "Une vis bleue. Elle en a toujours trois ou quatre dans le coin de son tablier, comme d'autres ont des miettes. C'est tout ce qu'on lui a laissé pour écrire, et elle a écrit : *je t'ai entendu{e}.*" },
      { outcome: "lose", text: "Trois coups. Le premier porte ; le second tombe sur un pas, et le troisième à côté. Au-dessus de toi, un porteur dit : « Halte. » La chaise s'arrête. Une botte frappe le madrier, du talon, pour l'essayer." },
      { outcome: "lose", text: "« Laissez, dit une voix de très vieille femme, derrière le cuir, d'un ton d'ennui. C'est mon genou. Il fait ce bruit-là depuis la Saint-Martin. Marchez, mes enfants : vous me secouez moins quand vous marchez. » La chaise repart. Mais plus loin, sur la chaussée, le pas égal s'est arrêté une seconde, et il a repris." },
      { if: { not: { any: [{ has: "r:line_signe" }, { has: "r:aubespin_dessus" }] } }, text: "Tu laisses passer la chaise. Elle a un petit balancement de berceau. À la fente, tu ne vois que du cuir, des sangles, le bout d'une canne. Tu aurais pu frapper. Tu as pensé aux deux semelles cirées, et tu as gardé ton couteau dans ta manche." },
      "Le cortège s'éloigne, vers le mur doré, sur son pont. Les lampes de la Passerelle s'allument une à une derrière lui, de cent pas en cent pas, et dessinent dans le soir une ligne de points jaunes au-dessus d'une mer de têtes. Sous les madriers, le rideau de poussière pend toujours, sans tomber.",
    ],
    choices: [{ label: "Regagner le chaume, pour la nuit", to: "K09r_nuit", big: true }] },

  K09r_cortege_loin: { act: "III", title: "Un pont de lumières", place: "foire", ambiance: "champs",
    text: [
      "Tu t'assois sur le chaume, parmi les pliants. Les pèlerins se sont levés, par respect, et se sont rassis, par fatigue. Le cortège monte la rampe : quarante chevaux, des manteaux blancs par quatre, une femme à pied, en blanc, toute droite, qui s'arrête une fois, au-dessus de la Première, le temps d'allumer une lampe.",
      "Derrière elle, un homme en gris, mince, qui ne s'arrête pas. Puis des casaques noires, et, portée à quatre, une chaise fermée, de cuir, à rideaux. La berline n'a pas pu monter. On a mis la vieille en chaise.",
      { after: "r:veilleurs_parvis", text: "Et derrière la chaise, deux par deux, trois cents manteaux gris, la lampe à la main. Autour de toi, les vieux se poussent du coude. « Les Veilleurs montent. Ils ne sont jamais montés. » Une femme se signe." },
      "De loin, c'est une procession sur un pont, au-dessus d'une eau immobile. La vieille en châle noir, à côté de toi, la regarde s'éloigner. « Elle passe sur ma mère tous les ans, dit-elle sans colère. Elle marche doucement. C'est déjà cela. »",
      "Les lampes de la Passerelle s'allument une à une, de cent pas en cent pas, jusqu'au mur doré.",
    ],
    choices: [{ label: "Chercher une place pour la nuit", to: "K09r_nuit", big: true }] },

  // ---------- night ----------
  K09r_nuit: { act: "III", title: "La colline qui luit", place: "foire", ambiance: "champs", fx: { flag: "r:vu_colline" },
    text: [
      "Les Veilleurs du chaume donnent la soupe à qui se présente, sans demander de nom, à la lueur du mur de lampes. On te fait une place sous une charrette, entre deux familles. Tu manges. Tu remets dans ton sablier ce que la journée t'a laissé.",
      { with: "rouget", text: "Rouget s'est roulé dans une bâche. « Demain on entre, hein. Dans la vraie. » Il bâille. « Dis, quand on sera là-haut, tu crois que le gars du halage, on peut lui ramener son père ? Sur le dos ? » Il dort avant que tu aies trouvé comment lui répondre qu'un pris pèse plus que sa maison." },
      { with: "jehan", text: "Jehan monte la garde, par habitude, assis contre une roue. « La porte d'Occident a un poste de la Garde, dedans. Vingt hommes, du sable double. Mais le canal entre sous le rempart par une voûte, et la voûte n'a qu'une herse, que personne n'a baissée en 541. » Il te regarde. « Je te dis cela. Je ne sais pas encore si j'irai avec toi jusque-là. »" },
      "La nuit vient, sur la plaine, pour ceux qui ont du temps. Et tu vois alors une chose que le jour cachait.",
      "La Foire prise garde son midi. Sur dix mille têtes, sur les toiles, sur les bannières, il reste une clarté blanche, d'aplomb, sans source, comme si chaque chose avait bu son soleil et le rendait ; on dirait, sous les étoiles, un champ de neige éclairé par en dedans. Au-dessus, la Passerelle tend son collier de points jaunes.",
      "Plus loin, le mur de la ville est d'or pâle. Et plus loin encore, plus haut, le Mont-Cadran luit. Sa clarté est d'une autre sorte : un gris de perle, froid, qui tremble un peu, et qui couvre la colline du pied de la Tour jusqu'aux premiers toits, comme une gelée blanche en juin. Tu connais cette couleur. Tu en portes au cou.",
      "Il en vient donc de là. Il en vient assez, au pied de la Tour, pour qu'on le voie d'une lieue. Les glaneurs le ramassent à la cuiller, au bord des champs, et se battent pour une fiole ; là-haut, il y en a une colline.",
      "Vers le milieu de la nuit, tu te lèves. La Première est à trois cents pas, dans la clarté blanche. On y lit sans chandelle.",
    ],
    choices: [{ label: "Retourner à la borne, entre les dormants", to: "B09", big: true }] },
});

module.exports = { passages: P, extras: {} };
