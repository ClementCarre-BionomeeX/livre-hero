// Act I · prologue of Ysolde de Brenne: the queen's order, the fort (the archives and the receipt, the greffier's
// room), the seizure of Hautvent (Rodric, Thibaut), the march by the Varre pass (the ford of Lisse, Ilse's fever and
// the Hospice, the leaden reliquary), and the choice at the gates of Pallanche: obey, desert, or deceive.
module.exports = {
  // ---------------------------------------------------------------- the fort
  YS_aube: { act: "I", title: "Brenne, au lever du jour", place: "brenne",
    fx: { meet: "gautier" },
    text: [
      "La brume monte de la Lisse comme tous les matins d'été, épaisse, blanche, et noie la vallée jusqu'aux créneaux. Du haut de la tour du Loup, tu ne vois que le haut des peupliers de l'autre rive, et le clocher de Saint-Ours, côté Corvanne, qui dépasse comme un mât de navire coulé. Les sentinelles mangent leur pain sur le chemin de ronde. L'air sent le levain chaud et le fer mouillé. C'est l'odeur de ta vie.",
      "Tu as trente-deux ans. Tu commandes Brenne depuis six ans, quarante hommes, soixante chevaux, et une frontière de neuf lieues que trois années de guerre n'ont pas réussi à déplacer d'un pied. La paix est signée depuis deux ans. Des deux côtés, on en doute, mais tout le monde fait semblant, et c'est peut-être ça, la paix.",
      "Gautier monte l'escalier de la tour en soufflant. Il a soixante ans, une jambe raide et une moustache qui a connu ton père. Il te tend un gobelet de vin chaud sans rien demander, comme tous les matins.",
      "« Rien à signaler, capitaine. Sauf un cavalier sur la route de l'ouest. Il porte du gris. » Il crache par-dessus le parapet. « Et du gris, chez nous, c'est rarement une bonne nouvelle. »",
      "Tu regardes vers l'aval, là où la Lisse fait un coude. On a reconstruit le pont, là-bas, depuis la guerre. Un beau pont neuf de pierre blanche. Chaque fois que tes yeux s'y posent, ils glissent, comme sur une vitre mouillée, et tu as mal derrière le front, un mal sourd, précis, comme une dent qui manque.",
    ],
    choices: [
      { label: "Regarder le pont, malgré la douleur, et essayer de te souvenir", to: "YS_pont_regard" },
      { label: "Descendre accueillir le cavalier", to: "YS_ordre" },
    ] },

  YS_pont_regard: { act: "I", title: "Le pont de Lisse", place: "brenne",
    fx: { flag: "ysolde:pont_regarde", ep: ["perso", 300] },
    text: [
      "Tu te forces. Tu fixes le pont comme on fixe un adversaire dans un duel, sans ciller.",
      "Rien ne vient. Pas une image. Tu sais qu'il y a eu une bataille au pont de Lisse, la dernière de la guerre, le quatorze brumaire, il y a deux ans et demi. Tu sais que tu y étais, parce que c'est écrit dans tes états de service, et que tu as reçu pour ça la croix d'argent que tu ne portes jamais. Tu sais tout ce qu'on peut savoir de l'extérieur. De l'intérieur, il n'y a rien. Un trou, propre, aux bords nets, comme taillé au couteau.",
      "La douleur monte, monte, et tu dois t'appuyer au créneau.",
      "Gautier détourne les yeux. Il fait ça chaque fois que tu regardes le pont. Tu ne l'avais jamais remarqué.",
    ],
    choices: [{ label: "Descendre accueillir le cavalier", to: "YS_ordre" }] },

  YS_ordre: { act: "I", title: "L'ordre", place: "brenne",
    fx: { meet: "sevrin", item: "ordre_royal", flag: "YS:ordre_lu", questSeen: "YS_ordre" },
    text: [
      "Le cavalier gris attend dans la cour, à côté de sa mule, et il a froid. C'est la première chose que tu remarques : en plein mois de juillet, il a les mains enfoncées dans ses manches et il souffle dessus. Un homme d'une quarantaine d'années, maigre, pâle, au crâne rasé de près, en robe grise de greffier, avec une sacoche de cuir en bandoulière qu'il serre contre lui comme on serre un enfant.",
      "« Frère Sévrin, de la Chancellerie des Noms, dit-il en s'inclinant. J'ai l'honneur de vous porter un ordre de Sa Majesté, capitaine. »",
      "Le parchemin porte le grand sceau rouge d'Isaure, celui que tu as vu trois fois dans ta vie, et dessous, un petit sceau de cire noire : une plume et une clé croisées. Tu le lis debout, dans la cour. Tu le relis.",
      "*Saisir les habitants de Hautvent. Les conduire à Pallanche, à la Chancellerie des Noms. Pour y être inscrits.*",
      "Hautvent est à une heure de cheval, en aval. Un village de tisserands, trois cents âmes, la moitié parlant corvannais, l'autre moitié mariée à la première moitié. On y fait de la contrebande de laine depuis que la frontière existe. Tout le monde le sait. Ton père le savait. Personne n'y a jamais trouvé à redire.",
      "« Tous ? demandes-tu. Les enfants aussi ? »",
      "« Tous ceux dont le nom est sur la liste, capitaine. » Frère Sévrin sourit. Il a de petites dents. « Cent dix-huit. »",
    ],
    choices: [
      { label: "« Inscrits. Qu'est-ce que ça veut dire, au juste, inscrits ? »", to: "YS_sevrin", hide: { seen: "YS_sevrin" } },
      { label: "« Bien. Je ferai préparer mes hommes. » Et le laisser dans la cour", to: "YS_cour" },
    ] },

  YS_sevrin: { act: "I", title: "Frère Sévrin", place: "brenne",
    fx: { ep: ["perso", 300] },
    text: [
      "« Inscrits, capitaine, signifie inscrits. » Il rajuste sa sacoche. « La Chancellerie tient le registre du royaume. Ceux qui ont trahi la Couronne, on les y inscrit, et on décide de ce qu'il convient de garder d'eux. »",
      "« De garder d'eux. »",
      "« De leur mémoire. On ne pend plus, capitaine, à Pallanche. On ne mutile plus. On est devenu civilisé. On efface ce qui pose problème, et on rend à la société des gens neufs, sans rancune. C'est beaucoup plus humain. » Il penche la tête. « Vous en savez quelque chose, d'ailleurs. Vous avez déjà rendu service à la Chancellerie. »",
      "Tu te tais. De quoi parle-t-il ?",
      "« Ah, dit-il doucement, en te regardant. Non. Bien sûr. Vous ne vous en souvenez pas. C'est normal. C'est même le signe que c'était bien fait. »",
    ],
    choices: [
      { label: "Le prendre au col", test: { dom: "combat", label: "Intimidation" },
        win: { fx: { flag: "sevrin:peur", ep: ["perso", 300] }, to: "YS_sevrin_col" },
        lose: { fx: { flag: "sevrin:mefiant" }, to: "YS_sevrin_col_rate" } },
      { label: "Le laisser parler, et retenir chacun de ses mots", fx: { flag: "sevrin:ecoute" }, to: "YS_cour" },
    ] },

  YS_sevrin_col: { act: "I", title: "Le col d'un greffier", place: "brenne",
    text: [
      "Tu l'empoignes par le devant de sa robe et tu le soulèves sur la pointe des pieds. Il est léger. Il sent l'encre et le froid. « De quoi est-ce que je ne me souviens pas, Frère ? »",
      "Il a peur. Ses yeux vont à ta main, à tes hommes qui regardent, à sa sacoche. Mais il sourit encore, avec ses petites dents. « Demandez à vos archives, capitaine. Vous signez tout. Vous avez toujours tout signé. » Tu le lâches. Il se rajuste, sans hâte. « Je mettrai cela sur le compte de la chaleur. »",
    ],
    choices: [{ label: "Le laisser", to: "YS_cour" }] },

  YS_sevrin_col_rate: { act: "I", title: "Le col d'un greffier", place: "brenne",
    text: [
      "Tu tends la main vers lui, et il recule d'un pas, très vite, la main sur sa sacoche. Quelque chose dans son geste t'arrête : la façon dont il serre le rabat, comme un homme qui tient un couteau sous son manteau.",
      "« Je vous conseille de ne pas faire ça, capitaine, dit-il très doucement. Pour votre bien. Vous avez déjà perdu assez de choses. »",
    ],
    choices: [{ label: "Baisser la main", to: "YS_cour" }] },

  YS_cour: { act: "I", title: "La cour de Brenne", place: "brenne", hub: true, routes: true, shop: "armurerie",
    text: [
      "La cour de Brenne est un carré de pavés gris entre quatre murs gris, avec au milieu un puits et un tilleul que ton grand-père a planté et que personne n'ose couper, bien qu'il gêne les manœuvres.",
      { before: "YS:colonne", text: "Les hommes ont appris la nouvelle. Ils graissent leurs selles sans parler. Quelques-uns ont de la famille à Hautvent ; tu le sais, et ils savent que tu le sais." },
      { if: { not: { has: "YS:colonne" } }, text: "Frère Sévrin s'est installé dans la chambre des hôtes, au-dessus de la porte. Il attend. Le chemin de Hautvent part de la poterne de l'est." },
      { if: { has: "YS:colonne" }, text: "La colonne attend hors des murs, sur la route de l'ouest : cent dix-huit personnes assises dans l'herbe, attachées par une longue corde, et tes hommes à cheval autour. Frère Sévrin compte et recompte, en remuant les lèvres." },
      { if: { all: [{ has: "YS:colonne" }, { has: "ysolde:fers=faits" }] }, text: "Sous la corde, à chaque poignet, les fers de Hugues. On les entend quand quelqu'un bouge. Personne ne bouge beaucoup." },
      { if: { all: [{ has: "YS:colonne" }, { has: "ysolde:fers=mauvais" }] }, text: "Sous la corde, à chaque poignet, les fers de Hugues. Ils brillent. Ils ont l'air solides. Toi seule sais." },
    ],
    choices: [
      { label: "Le sergent Gautier, à l'écurie", to: "YS_gautier", hide: { seen: "YS_gautier" }, before: "YS:colonne" },
      { label: "Les archives du fort, sous la tour du Loup", to: "YS_archives", hide: { has: "ysolde:recu" } },
      { label: "La chambre du Frère Sévrin, pendant qu'il est aux latrines", before: "YS:colonne", to: "YS_chambre", hide: { has: "YS:chambre" } },
      { label: "La chapelle, où est enterré ton père", to: "YS_chapelle", hide: { seen: "YS_chapelle" } },
      { label: "Le poteau du boucher, derrière l'écurie", to: "YS_Q_cheval", hide: { seen: "YS_Q_cheval" }, before: "YS:colonne" },
      { label: "Les recrues de printemps, dans la cour", to: "YS_Q_recrue", hide: { seen: "YS_Q_recrue" }, before: "YS:colonne" },
      { label: "La tour des archers, chez le vieux Gerbold", to: "YS_k_maitre", hide: { seen: "YS_k_maitre" }, before: "YS:colonne" },
      { label: "Le tilleul de ton grand-père", to: "YS_k_tilleul", hide: { seen: "YS_k_tilleul" } },
      { label: "Le puits, où les femmes tirent l'eau", to: "YS_k_puits", hide: { seen: "YS_k_puits" } },
      { label: "La chambre de ton père, en haut de la tour du Loup", to: "YS_k_chambre_pere", hide: { seen: "YS_k_chambre_pere" } },
      { label: "La forge, sous la tour du Loup", to: "YS_Q_forge", hide: { any: [{ seen: "YS_Q_forge" }, { has: "YS:colonne" }] } },
      { label: "Reprendre la route de Pallanche avec la colonne", if: { has: "YS:colonne" }, why: "Il faut d'abord saisir Hautvent.", travel: "r_colonne" },
    ] },

  YS_gautier: { act: "I", title: "Gautier", place: "brenne",
    fx: { meet: "thibaut" },
    text: [
      "Gautier panse la jambe d'un cheval dans la pénombre de l'écurie, accroupi, sa jambe raide tendue de côté. Il ne lève pas la tête quand tu entres.",
      "« Hautvent, dit-il. Le petit Thibaut y est. Celui qu'on a porté déserteur le mois dernier. Il a une femme là-bas, une tisserande. Un enfant, je crois. » Il serre la bande. « Je vous le dis pour que vous ne soyez pas surprise. Moi, je n'aime pas qu'on me surprenne. »",
      "Tu t'appuies au montant de la stalle. « Gautier. Le pont de Lisse. »",
      "Ses mains s'arrêtent.",
      "« Tu y étais, dis-tu. Tu étais avec moi. »",
      "Il se relève lentement, en s'appuyant au flanc du cheval. Il te regarde en face, ce qu'il ne fait jamais. « J'y étais, capitaine. Et vous m'avez ordonné, après, de ne plus jamais vous en parler. Vous me l'avez ordonné, et vous me l'avez fait jurer sur la tombe de votre père. » Il s'essuie les mains. « Alors je ne vous en parlerai pas. Ce que vous avez oublié, vous avez voulu l'oublier. Moi, je n'ai pas eu cette chance. »",
    ],
    choices: [
      { label: "« Je te délie de ton serment. Parle. »", test: { dom: "social", label: "Autorité", diff: -20 },
        win: { fx: { flag: "gautier:parle", ep: ["perso", 600] }, to: "YS_gautier_parle" },
        lose: { fx: { flag: "gautier:refuse" }, to: "YS_gautier_refus" } },
      { label: "Le laisser à son cheval", fx: { flag: "gautier:respecte" }, to: "YS_cour" },
    ] },

  YS_gautier_parle: { act: "I", title: "Ce que dit Gautier", place: "brenne",
    text: [
      "Il se tait longtemps. Puis il dit une seule chose, à voix basse, en regardant le cheval.",
      "« Il y avait des gens sur le pont, capitaine. Pas des soldats. Des gens. Et il y avait un ordre. Et vous étiez la seule à pouvoir le donner, ou à ne pas le donner. » Il secoue la tête. « Le reste, ne me le demandez pas. Pas aujourd'hui. Je vous en prie. »",
      "C'est la première fois de ta vie que tu entends Gautier prier quelqu'un.",
    ],
    choices: [{ label: "Le laisser", to: "YS_cour" }] },

  YS_gautier_refus: { act: "I", title: "Le serment", place: "brenne",
    text: [
      "« Non, capitaine. » Il dit ça d'une voix égale. « Un serment sur la tombe de votre père, on ne le délie pas dans une écurie. Si vous voulez savoir, cherchez. Vous avez toujours tout écrit. Vous écriviez même la couleur du ciel dans le registre, les jours de bataille. »",
    ],
    choices: [{ label: "Le laisser", to: "YS_cour" }] },

  YS_archives: { act: "I", title: "Les archives du fort", place: "brenne",
    fx: { questSeen: "YS_trou" },
    text: [
      "Sous la tour du Loup, une salle voûtée qui sent le salpêtre : les registres du fort depuis sa fondation, rangés sur des étagères de chêne noir. Les tiens sont sur la dernière, cinq gros volumes reliés de veau, remplis de ton écriture droite et serrée. Les rondes, les rations, les chevaux ferrés, les déserteurs, les morts. Et la couleur du ciel, les jours de bataille.",
      { after: "gautier:refuse", text: "Gautier a raison." },
      "Le registre de l'an de la paix. Brumaire. Tu tournes les pages. Le treize : *ciel bas, pluie fine, l'ennemi masse ses gens sur la rive est.* Le quinze : *ciel clair. Quarante-trois hommes valides. Trois blessés. Paix signée à Varre.*",
      "Le quatorze n'existe pas. La page a été coupée, au rasoir, si près de la reliure qu'il fallait la chercher pour la voir.",
    ],
    choices: [
      { label: "Fouiller la reliure, les pages voisines, le dos du registre", test: { dom: "savoir", label: "Fouille" },
        win: { fx: { item: "recu_lisse", clue: "n_recu", flag: "ysolde:recu", quest: "YS_trou", ep: ["perso", 800] }, to: "YS_recu" },
        lose: { fx: { time: 3 }, to: "YS_archives_long" } },
    ] },

  YS_archives_long: { act: "I", title: "Trois heures", place: "brenne",
    fx: { item: "recu_lisse", clue: "n_recu", flag: "ysolde:recu", quest: "YS_trou", ep: ["perso", 500] },
    text: [
      "Tu cherches trois heures, à la chandelle. Tu ouvres chaque registre, tu secoues chaque page. Les hommes, dans la cour, se demandent ce que fait la capitaine dans les caves. Rien. Rien. Et puis, en remettant le dernier volume à sa place, tu le fais tomber, et un petit carré de vélin s'échappe de sous la garde de cuir, où quelqu'un l'avait glissé exprès.",
    ],
    choices: [{ label: "Le lire", to: "YS_recu" }] },

  YS_recu: { act: "I", title: "Le reçu", place: "brenne",
    text: [
      "C'est un reçu. Un reçu en bonne et due forme, comme ceux que tu signes pour l'avoine et les fers. En-tête de la Chancellerie des Noms, plume et clé croisées.",
      "*Cédé par Dame Ysolde de Brenne, capitaine : un souvenir. Objet : le pont de Lisse, la nuit du quatorze brumaire. Motif : service de la Couronne. Prix payé : rien.*",
      "Et au bas, ta signature. L'original. La tienne, avec la barre du *Y* qui part trop haut parce que ton père t'a appris à écrire de la main gauche avant qu'on te force à la droite.",
      "Tu as vendu ce souvenir. Pour rien. Tu l'as vendu toi-même, de ta main, et ensuite tu as caché le reçu dans ton propre registre, là où tu le trouverais si un jour tu le cherchais.",
      "Quelqu'un, en toi, voulait que tu cherches.",
    ],
    choices: [{ label: "Plier le reçu et le garder sur toi", to: "YS_cour" }] },

  YS_chambre: { act: "I", title: "La chambre des hôtes", place: "brenne",
    fx: { flag: "YS:chambre" },
    text: [
      "La chambre des hôtes est au-dessus de la porte, une pièce étroite avec un lit, un coffre, une fenêtre sur la route. Sévrin a allumé un feu. En juillet. La pièce est une étuve. Sa sacoche est posée sur le lit, ouverte. Il n'en a sorti qu'un carnet gris et un étui à plumes. Le reste est encore dedans, enveloppé dans un linge noir.",
      "Tu as le temps d'un chapelet. Le temps qu'il revienne des latrines, au bout du chemin de ronde.",
    ],
    choices: [
      { label: "Lire le carnet gris, vite", test: { dom: "discretion", label: "Discrétion", help: [{ if: { has: "sevrin:peur" }, v: 10 }] },
        win: { fx: { item: "carnet_sevrin", clue: "n_livraison", ep: ["perso", 700] }, to: "YS_carnet" },
        lose: { fx: { flag: "sevrin:mefiant" }, to: "YS_chambre_surprise" } },
      { label: "Défaire le linge noir et regarder ce qu'il cache", test: { dom: "discretion", label: "Discrétion", diff: -10 },
        win: { fx: { clue: "n_boite", flag: "ysolde:vu_reliquaire", ep: ["perso", 700] }, to: "YS_reliquaire" },
        lose: { fx: { flag: "sevrin:mefiant" }, to: "YS_chambre_surprise" } },
    ] },

  YS_carnet: { act: "I", title: "Le carnet gris", place: "brenne",
    text: [
      "Une écriture minuscule, régulière, sans une rature. Des listes. *Roncière : livré. Chaumont : livré. Les Aulnes : livré.* Des villages dont tu n'as jamais entendu parler, ou alors tu en as entendu parler et tu as oublié. *Hautvent : 118 noms, dont 41 enfants. Livraison à la Chancellerie avant la Fête. Payé par la Couronne, sur le trésor de guerre.*",
      "Et à la dernière page, cette note, qui te fait froid dans le dos, dans la chaleur de l'étuve :",
      "*Note pour M. : la capitaine de Brenne ne se souvient pas de Lisse. L'effacement tient. Elle obéira.*",
      "Tu glisses le carnet dans ton pourpoint. Tu entends le pas de Sévrin sur le chemin de ronde.",
    ],
    choices: [{ back: "YS_cour" }] },

  YS_reliquaire: { act: "I", title: "Le linge noir", place: "brenne",
    text: [
      "Sous le linge noir, une boîte de plomb grande comme la main, scellée de cire noire, plume et clé croisées. Elle est froide, si froide que tes doigts collent au métal. Tu la soulèves. Elle pèse plus lourd que du plomb.",
      "Et elle chuchote. Tu approches l'oreille, malgré toi. Ce sont des voix, très loin, très faibles, des centaines, qui disent toutes quelque chose en même temps. Des noms. Tu crois en reconnaître un, au milieu des autres, et ton cœur s'arrête : *Bruyère.* Le nom de ta jument, morte sous toi à Corvanne.",
      "Non. Tu as dû rêver. Tu reposes la boîte, tu remets le linge. Tes doigts sont blancs de froid jusqu'aux phalanges.",
    ],
    choices: [{ label: "Sortir avant qu'il revienne", back: "YS_cour" }] },

  YS_chambre_surprise: { act: "I", title: "Surprise", place: "brenne",
    fx: { clue: "n_boite" },
    text: [
      "Tu n'as pas entendu la porte. Il est là, sur le seuil, les mains dans les manches. Il reste calme, presque aimable. Il soupire.",
      "« Capitaine. » Il entre, prend la boîte de plomb sous le linge noir, sans hâte, et l'entrouvre d'un doigt, juste un doigt, face à toi. Il en sort un froid, un souffle blanc. « Oubliez cette dernière minute. »",
      "Tu es dans la cour. Tu as oublié pourquoi. Tu as froid aux mains, en plein juillet. Tu as l'impression d'avoir monté un escalier, quelque part, et de l'avoir descendu. Au-dessus de la porte, à la fenêtre de la chambre des hôtes, Frère Sévrin te regarde et te salue de la tête, poliment.",
      "Tu sais une chose, sans savoir comment tu la sais : il porte la neige dans une boîte.",
    ],
    choices: [{ label: "Rester là, à regarder tes mains", to: "YS_cour" }] },

  YS_chapelle: { act: "I", title: "La chapelle", place: "brenne",
    fx: { ep: ["perso", 300] },
    text: [
      "La chapelle de Brenne est petite, basse, avec un loup sculpté sur chaque chapiteau. Ton père est sous la troisième dalle, avec sa propre épée de bois sur la poitrine, comme il l'avait demandé : il disait que la vraie, celle de fer, devait servir encore.",
      { if: { souv: "ysolde:pere" }, text: "Tu la portes à ton côté. *Elle est lourde, pour que tu n'oublies jamais ce qu'elle coûte.* Tu avais huit ans. Tu pouvais à peine la soulever." },
      { if: { not: { souv: "ysolde:pere" } }, text: "Tu portes son épée. Tu ne sais plus le jour où il te l'a mise en main. Tu sais seulement qu'elle est lourde." },
      "Tu t'agenouilles. Prier, tu as toujours ignoré comment on fait. Tu parles. « Ils veulent que j'emmène un village entier à Pallanche, pour qu'on lui vide la tête. Les enfants aussi. Et la reine a signé. » Tu attends. « Tu aurais fait quoi, toi ? »",
      "Ton père se tait, comme il s'est toujours tu devant tes vraies questions. Il disait : *c'est toi qui commandes.*",
    ],
    choices: [{ label: "Te relever", to: "YS_cour" }] },

  // ---------------------------------------------------------------- Hautvent
  YS_hautvent: { act: "I", title: "Hautvent, à l'aube", place: "hautvent",
    fx: { meet: ["maelle"], questSeen: "YS_thibaut", until: 5 },
    text: [
      "Vous arrivez à Hautvent avant l'aube, au pas, sans torches. Le village dort dans un repli de la Lisse, quarante maisons basses aux toits de lauze, les métiers à tisser silencieux sous les auvents. Le linge sèche entre les maisons. Un chien aboie, puis se tait.",
      "Tu as disposé tes hommes en cercle autour des dernières maisons, sur la berge, sur le chemin de Corvanne. Personne ne sortira. Frère Sévrin attend derrière toi, en selle, sa sacoche contre le ventre.",
      "Au milieu du village, devant la maison la plus grande, une femme est déjà debout, les bras croisés. La quarantaine, des cheveux gris tirés en arrière, un châle de laine écarlate. Elle te regarde venir. Elle savait. Tout le monde, ici, sait toujours tout avant.",
      "« Capitaine de Brenne, dit-elle, en esquarrois, avec l'accent de l'autre rive. Je m'appelle Maëlle. Qu'est-ce que vous venez prendre, cette fois ? »",
    ],
    choices: [
      { label: "Lui dire la vérité, et lui demander de faire sortir le village sans qu'il y ait de sang", test: { dom: "social", label: "Parole", help: [{ if: { has: "ysolde:recu" }, v: 10 }] },
        win: { fx: { flag: "hautvent:parole", ep: ["perso", 800] }, to: "YS_hautvent_parole" },
        lose: { fx: { flag: "hautvent:refus" }, to: "YS_hautvent_force" } },
      { label: "Donner le signal. On fait sortir tout le monde, maison par maison", fx: { flag: "hautvent:force" }, to: "YS_hautvent_force" },
    ] },

  YS_hautvent_parole: { act: "I", title: "Maëlle", place: "hautvent",
    text: [
      "Tu lui dis tout. L'ordre, le sceau, la Chancellerie, le mot *inscrits*, et ce que tu crois qu'il veut dire. Tu le dis assez fort pour que les volets entrouverts l'entendent. Sévrin, derrière toi, se raidit sur sa selle.",
      "Maëlle t'écoute sans broncher. Quand tu as fini, elle hoche la tête, une fois.",
      "« Vous êtes la première à nous dire la vérité, dit-elle. Ça ne change rien. Mais vous êtes la première. » Elle se retourne vers les maisons et dit quelque chose en corvannais, une phrase brève, et les portes s'ouvrent une à une. Les gens sortent, habillés, des baluchons à la main. Ils savaient. Ils s'étaient préparés.",
      "Un seul ne rejoint pas les autres. Devant la maison de Maëlle, sur le seuil, un homme immense à barbe grise vient de se lever, une hache d'armes à la main.",
    ],
    choices: [{ label: "Aller à lui", to: "YS_rodric_rencontre" }] },

  YS_hautvent_force: { act: "I", title: "Maison par maison", place: "hautvent",
    combat: { title: "Les hommes de Hautvent", enemies: [{ id: "paysan_hautvent", n: 2 }], terrain: "bati",
      talk: { label: "Crier que personne ne sera tué", diff: -10, win: { fx: { ep: ["perso", 500] }, to: "YS_rodric_rencontre" } },
      win: { fx: { ep: ["seance", 800], flag: "hautvent:sang" }, to: "YS_rodric_rencontre" },
      lose: { fx: { flag: "hautvent:humiliee" }, to: "YS_rodric_rencontre" } },
    text: [
      "Les portes s'ouvrent sous les bottes de tes hommes. Des cris, en corvannais et en esquarrois. Deux tisserands sortent d'une grange avec des fourches et se jettent sur toi, droit sur la capitaine, comme si ta chute pouvait tout arrêter.",
    ] },

  YS_rodric_rencontre: { act: "I", title: "Trois-Cloches", place: "hautvent",
    fx: { met: "rodric" },
    text: [
      "L'homme qui t'attend devant la maison de Maëlle est plus grand que toi d'une tête et demie. Une barbe grise, des bras couverts de vieilles cicatrices blanches, une hache d'armes corvannaise, de celles qu'on ne vend pas aux civils. Et sur la poitrine, au bout d'une chaîne, trois petites cloches de bronze qui tintent quand il respire.",
      "Tu le connais. Pas son visage : les trois cloches. Tout soldat de l'Est connaît Rodric Trois-Cloches, le capitaine corvannais qui sonnait une cloche chaque fois qu'il perdait un fils, et qui en a sonné trois.",
      "« Ma sœur, dit-il en montrant Maëlle du menton. Je suis venu voir ma sœur. Pendant la paix. On a encore le droit, pendant la paix ? » Il fait tourner sa hache, lentement. « Tu ne te souviens pas de moi, chevalière. Moi, je me souviens de toi. »",
      "Derrière toi, Sévrin dit d'une voix aiguë : « Celui-là n'est pas sur la liste. Mais il y sera. »",
    ],
    choices: [
      { label: "Lever ton épée et le défier", to: "YS_rodric_duel" },
      { label: "Baisser ton épée. « Personne ne mourra ici ce matin, capitaine. Ni toi, ni moi. »", test: { dom: "social", label: "Parole", diff: -10, help: [{ if: { has: "hautvent:parole" }, v: 20 }] },
        win: { fx: { flag: "rodric:rendu", conf: { rodric: 10 }, ep: ["perso", 800] }, to: "YS_rodric_rendu" },
        lose: { to: "YS_rodric_duel" } },
    ] },

  YS_rodric_duel: { act: "I", title: "Le duel", place: "hautvent",
    combat: { title: "Rodric Trois-Cloches", enemies: ["rodric_e"], terrain: "bati",
      talk: { label: "« Rends-toi, et je te jure que ta sœur ne sera pas séparée de ses enfants. »", diff: -20, win: { fx: { flag: "rodric:rendu", conf: { rodric: 5 }, ep: ["perso", 800] }, to: "YS_rodric_rendu" } },
      win: { fx: { flag: "rodric:vaincu", ep: ["seance", 1500] }, to: "YS_rodric_vaincu" },
      lose: { fx: { flag: "rodric:vainqueur" }, to: "YS_rodric_vainqueur" } },
    text: ["Il ne charge pas. Il attend, la hache basse, que tu viennes. Les trois cloches tintent à chaque respiration."] },

  YS_rodric_rendu: { act: "I", title: "La hache dans l'herbe", place: "hautvent",
    text: [
      "Il te regarde longtemps. Puis il jette sa hache dans l'herbe, à tes pieds, et tend les poignets à tes hommes.",
      "« Pour ma sœur, dit-il. Pas pour toi. » Il baisse la voix, pour que toi seule entendes. « Et parce que tu as déjà baissé ton épée une fois devant moi. Tu ne t'en souviens pas non plus, hein ? »",
    ],
    choices: [{ label: "Le faire attacher avec les autres", to: "YS_thibaut" }] },

  YS_rodric_vaincu: { act: "I", title: "À genoux", place: "hautvent",
    text: [
      "Ta lame passe sous sa garde et l'ouvre au flanc, juste assez. Il tombe à genoux dans la poussière, les cloches sonnant toutes les trois ensemble. Il ne lâche pas sa hache. Tu la lui arraches.",
      "« Bien, dit-il en crachant du sang. Bien, chevalière. Tu n'as rien perdu. » Il rit. « Rien, sauf ce que tu as vendu. »",
    ],
    choices: [{ label: "Le faire attacher avec les autres", to: "YS_thibaut" }] },

  YS_rodric_vainqueur: { act: "I", title: "Dans la poussière", place: "hautvent",
    text: [
      "Tu es à terre, sur le dos, sa hache à un pouce de ta gorge. Tes hommes ont leurs arbalètes levées sur lui, et il le sait, et il s'en moque.",
      "Il te regarde. Puis il relève sa hache, lentement, et la pose à côté de toi. « Je pourrais, dit-il. Je ne l'ai pas fait la dernière fois non plus. » Il tend les poignets à tes hommes. « Prenez-moi. Ma sœur ne partira pas sans moi. »",
    ],
    choices: [{ label: "Te relever", to: "YS_thibaut" }] },

  // ---------------------------------------------------------------- Thibaut (side quest)
  YS_thibaut: { act: "I", title: "Le déserteur", place: "hautvent",
    fx: { flag: "YS:hautvent_pris" },
    text: [
      "On rassemble les gens sur le pré, devant l'église. Sévrin passe dans les rangs avec sa liste, et demande à chacun son nom, et le coche. Les enfants pleurent. Les vieux se taisent. Un homme vomit.",
      "Et au bout du rang, il y a Thibaut. Dix-neuf ans, toujours le même visage d'enfant trop vite grandi, en chemise de tisserand, avec à côté de lui une fille blonde qui tient un nouveau-né contre sa poitrine. Il te regarde. Il soutient ton regard, les mains vides.",
      "Tes hommes l'ont reconnu. Ils te regardent aussi. La règle est simple : un déserteur repris est pendu à la première branche. Tu as pendu deux hommes en six ans. Tu te souviens de leurs noms.",
      "Sévrin s'approche, sa liste à la main. « Celui-là ? Il n'est pas sur la liste. Mais s'il est d'ici… »",
    ],
    choices: [
      { label: "« Il n'est pas d'ici. C'est un de mes hommes. Je le reprends. » Et laisser sa femme et l'enfant dans la colonne", fx: { flag: "thibaut:sort=repris", quest: "YS_thibaut", conf: {}, ep: ["perso", 600] }, to: "YS_thibaut_repris" },
      { label: "« Il est d'ici. Inscrivez-le. » Qu'il reste avec sa femme, où qu'on les emmène", fx: { flag: "thibaut:sort=livre", quest: "YS_thibaut", ep: ["perso", 600] }, to: "YS_thibaut_livre" },
      { label: "Le faire passer de l'autre côté de la Lisse, avec sa femme et l'enfant, pendant que Sévrin compte", test: { dom: "discretion", label: "Discrétion", help: [{ if: { not: { has: "sevrin:mefiant" } }, v: 10 }, { if: { has: "ysolde:lettre_pere" }, v: 10 }] },
        win: { fx: { flag: "thibaut:sort=libre", quest: "YS_thibaut", ep: ["perso", 1000] }, to: "YS_thibaut_libre" },
        lose: { fx: { flag: ["thibaut:sort=livre", "sevrin:mefiant"], quest: "YS_thibaut", ep: ["perso", 300] }, to: "YS_thibaut_rate" } },
    ] },

  YS_thibaut_repris: { act: "I", title: "Repris", place: "hautvent",
    text: [
      "Thibaut se tait. Il embrasse sa femme, longuement, et l'enfant, sur le front. Puis il traverse le pré et vient se mettre à côté de tes hommes, dans le rang, comme au retour d'une permission un peu longue. On lui rend son épée. Il la prend sans la regarder.",
      "Pendant toute la marche, il chevauchera à hauteur de sa femme, sur le flanc de la colonne, sans jamais lui parler. Tes hommes ne le pendront pas. Mais aucun ne lui adressera plus la parole.",
    ],
    choices: [{ label: "Former la colonne", fx: { flag: "ch:ysolde:1", resume: "YS_colonne" }, to: "C_carrefour" }] },

  YS_thibaut_livre: { act: "I", title: "Inscrit", place: "hautvent",
    text: [
      "Sévrin écrit le nom de Thibaut au bas de sa liste, d'une écriture minuscule. *Cent dix-neuf.*",
      "Thibaut te regarde avec quelque chose qui ressemble à de la reconnaissance, et c'est le pire. Il prend la main de sa femme. Tes hommes regardent ailleurs. Gautier, à cheval derrière toi, dit très bas : « Ça vaut mieux qu'une branche. Peut-être. »",
    ],
    choices: [{ label: "Former la colonne", fx: { flag: "ch:ysolde:1", resume: "YS_colonne" }, to: "C_carrefour" }] },

  YS_thibaut_libre: { act: "I", title: "L'autre rive", place: "hautvent",
    text: [
      "Tu fais signe à Gautier. Il comprend tout de suite. Pendant que Sévrin compte et recompte sur le pré, le dos tourné, Gautier emmène Thibaut, sa femme et l'enfant derrière l'église, jusqu'à la berge, jusqu'à la barque des passeurs. Tous se taisent. Tes hommes regardent le ciel avec un intérêt soudain.",
      "Quand Sévrin se retourne, la barque est au milieu de la Lisse. Il regarde ailleurs, par hasard ou par choix. Ils ne sont pas sur sa liste.",
      "De l'autre côté, sur la rive de Corvanne, Thibaut lève la main. La réponse te reste dans la gorge.",
    ],
    choices: [{ label: "Former la colonne", fx: { flag: "ch:ysolde:1", resume: "YS_colonne" }, to: "C_carrefour" }] },

  YS_thibaut_rate: { act: "I", title: "La barque", place: "hautvent",
    text: [
      "Ils sont à mi-chemin de la berge quand Sévrin lève la tête. Il ne crie pas. Il fait un signe, et deux gardes en noir, que tu n'avais pas vus arriver, sortent de derrière l'église et ramènent Thibaut et sa femme par le bras.",
      "Sévrin ajoute un nom à sa liste. Puis il te regarde, longuement, et il écrit autre chose, au dos de la feuille. Tu sais que c'est ton nom.",
    ],
    choices: [{ label: "Former la colonne", fx: { flag: "ch:ysolde:1", resume: "YS_colonne" }, to: "C_carrefour" }] },

  YS_hautvent_retour: { act: "I", title: "Hautvent vide", place: "hautvent", routes: true, leave: true,
    text: ["Le village est vide. Les métiers à tisser sont restés montés sous les auvents, avec leurs pièces de laine à moitié faites. Un chat dort sur un seuil. Il n'y a plus personne pour le chasser."],
    choices: [] },

  YS_colonne: { act: "I", title: "La colonne", place: "brenne", routes: true,
    fx: { flag: "YS:colonne", ep: ["seance", 1000] },
    text: [
      "La colonne remonte vers Brenne, puis prend la route de l'ouest, celle de Varre et de Pallanche. Cent dix-huit personnes à pied, attachées par une corde qui court de poignet en poignet, sauf les enfants, qu'on a laissés libres parce qu'ils ne s'enfuiront pas sans leurs parents. Quarante cavaliers autour. Frère Sévrin au milieu, sur sa mule grise, qui compte.",
      "Quatre jours jusqu'à Pallanche. Le col de Varre au milieu. Tu as fait cette route cent fois, en guerre et en paix. Tu ne l'as jamais faite à la tête de ça.",
      { if: { met: "rodric" }, text: "Rodric marche en tête de la corde, juste derrière ta jument. Il se tait. Les trois cloches tintent à chacun de ses pas, et elles te poursuivent jusque dans tes pensées." },
    ],
    choices: [{ label: "Prendre la route de Varre", travel: "r_colonne" }] },

  // ---------------------------------------------------------------- the march
  YS_riviere: { act: "I", title: "Le gué de Lisse", place: null,
    text: [
      "La route passe la Lisse au gué de l'ancien pont, en aval de Brenne. Le pont neuf est à cent pas, blanc, propre, mais Sévrin préfère le gué : plus discret, dit-il. Les prisonniers entrent dans l'eau jusqu'aux genoux, la corde tendue entre eux, les enfants sur les épaules.",
      "Au milieu du gué, tu regardes en amont. Le pont. Les piles neuves, et, sous l'eau, entre elles, les piles anciennes, noircies. Brûlées.",
      "Le mal te prend derrière le front, si fort que tu dois te tenir au pommeau de ta selle. Une femme de Hautvent, dans l'eau, à côté de ta jument, lève la tête vers toi, et crache. Pas sur toi : dans l'eau, devant toi. « Lisse », dit-elle, comme une insulte.",
      "Maëlle, un peu plus loin, te regarde. Elle ne crache pas.",
    ],
    choices: [
      { label: "Demander à Maëlle ce qui s'est passé au pont de Lisse", to: "YS_maelle_lisse" },
      { label: "Faire presser le pas", to: "@route" },
    ] },

  YS_maelle_lisse: { act: "I", title: "Ce que sait Maëlle", place: null,
    fx: { flag: "maelle:lisse", ep: ["perso", 400] },
    text: [
      "Maëlle marche dans l'eau à côté de ton étrier. Elle prend son temps pour répondre.",
      "« Demande à ta mémoire, capitaine. » Elle te regarde. « Ah. Non. Tu ne peux pas. » Elle se tait quelques pas. « Mon mari était sur le pont, cette nuit-là. Il ramenait les gens de Lisse vers Corvanne. Des familles. On fuyait la guerre, de ce côté-là aussi. » Elle sort de l'eau, sur la berge. « Il n'est pas revenu. C'est tout ce que je sais. Le reste, mon frère le sait. Demande-lui. S'il veut bien te le dire. »",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  YS_ilse: { act: "I", title: "La fièvre", place: null,
    fx: { meet: "ilse", questSeen: "YS_ilse" },
    text: [
      "Au deuxième jour, dans la montée du col de Varre, une petite fille s'effondre sur la route. Six ans, des cheveux roux en broussaille, une poupée de laine grise serrée contre elle. Ilse, la plus jeune de Maëlle. Elle brûle de fièvre. Ses lèvres sont blanches.",
      "Maëlle s'agenouille, la prend dans ses bras, et lève les yeux vers toi. Elle se tient là, sans rien demander, aujourd'hui comme demain.",
      "« On ne s'arrête pas, dit Sévrin depuis sa mule. Nous sommes attendus avant la Fête. La petite peut monter dans une charrette. »",
      "Il n'y a pas de charrette. À deux heures de là, en haut du col, l'Hospice des Neiges, où les prêtresses soignent les voyageurs depuis cinq cents ans. C'est un détour d'une demi-journée.",
    ],
    choices: [
      { label: "Faire le détour par l'Hospice, malgré Sévrin", fx: { flag: "ilse:hospice", time: 6, ep: ["perso", 500] }, to: "YS_hospice" },
      { label: "Prendre Ilse en selle devant toi, et la veiller toi-même pendant la marche", test: { dom: "nature", label: "Soins", help: [{ if: { item: "onguent" }, v: 15 }, { if: { item: "miel" }, v: 10 }] },
        win: { fx: { flag: ["ilse:sauvee", "ilse:selle"], quest: "YS_ilse", ep: ["perso", 800], item: "poupee" }, to: "YS_ilse_selle" },
        lose: { fx: { flag: "ilse:faible", quest: "YS_ilse" }, to: "YS_ilse_faible" } },
      { label: "« On ne s'arrête pas. » Et faire porter la petite par sa mère", fx: { flag: "ilse:portee", quest: "YS_ilse" }, to: "YS_ilse_portee" },
    ] },

  YS_hospice: { act: "I", title: "L'Hospice des Neiges", place: null, shop: "hospice",
    fx: { met: "ombeline", meet: "ombeline_p", flag: ["ilse:sauvee"], quest: "YS_ilse" },
    text: [
      "L'Hospice est une longue maison de pierre accrochée sous le col, avec un toit si pentu qu'il touche presque terre, et une cloche qu'on sonne par temps de brouillard pour guider les égarés. Une femme vous attend sur le seuil, comme si elle savait. Elle est vieille, très droite, vêtue de laine blanche, et elle a les yeux les plus fatigués que tu aies jamais vus.",
      "« Mère Ombeline, dit-elle. Donnez-moi l'enfant. »",
      "Elle prend Ilse, pose une main sur son front, une autre sur sa poitrine, et ferme les yeux. Tu vois son visage se crisper, comme sous une douleur. Puis Ilse ouvre les yeux, et elle sourit, et elle demande sa poupée.",
      "« La fièvre n'était rien, dit Ombeline. C'était la peur qui la tuait. La peur de ce qu'on va lui faire, là-bas. Je la lui ai prise. » Elle se redresse, avec peine. « Je prends les peurs, les chagrins, les souvenirs qui font mourir. Je les garde. J'en ai beaucoup. »",
      "Puis elle te regarde, toi, longuement. « Vous, ma fille, vous portez un trou. Je les vois. Celui-là, on vous l'a fait. On ne se le fait pas tout seul, un trou si propre. »",
      { if: { has: "ysolde:recu" }, text: "Tu penses au reçu, dans ton pourpoint. *Signé : Y. de Brenne.* « Je l'ai signé, dis-tu. — On signe beaucoup de choses, ma fille, quand on a un couteau sous la gorge. Même quand le couteau est une couronne. »" },
    ],
    choices: [
      { label: "Lui demander ce qu'on fait des gens, à la Chancellerie", fx: { flag: "ombeline:chancellerie", ep: ["perso", 400] }, to: "YS_hospice_parle" },
      { label: "La remercier et repartir", to: "@route" },
    ] },

  YS_hospice_parle: { act: "I", title: "Ce que sait Ombeline", place: null,
    text: [
      "« On les vide, dit Ombeline simplement. On leur prend tout ce qui les attache : leurs morts, leurs colères, leurs pays. Puis on les vend comme domestiques, comme soldats, comme ouvriers. Des gens parfaits. Sans rancune. Sans racines. » Elle regarde la colonne, dehors, sur la route. « Et ce qu'on leur prend, on le garde. Là-haut, dans la tour noire. Personne ne sait pourquoi. »",
      "« J'ai des enfants, ici, qui sont revenus de là-bas, dit-elle encore. On les appelle les pages blanches. Ils ne savent pas leur nom. Ils écrivent très bien. »",
    ],
    choices: [{ back: "@route" }] },

  YS_ilse_selle: { act: "I", title: "Bruyère", place: null,
    text: [
      "Tu prends l'enfant devant toi, sur ta selle, enroulée dans ton manteau. Tu lui fais boire de l'eau de neige, à petites gorgées, et tu lui mouilles le front à chaque source. Elle se tait pendant des heures. Puis, au soir, elle te demande comment s'appelle ta jument.",
      "« Grisaille. »",
      "Elle réfléchit. « Ma poupée, elle s'appelle Bruyère. » Tu manques de lâcher les rênes. *Bruyère.* « Tu veux la tenir ? » Elle te tend la poupée de laine grise, à qui il manque un œil, et s'endort contre toi. Au matin, la fièvre est tombée. Elle ne te reprend pas la poupée. Elle dit qu'elle te la prête.",
    ],
    choices: [{ back: "@route" }] },

  YS_ilse_faible: { act: "I", title: "Toute la nuit", place: null,
    text: [
      "Tu la portes devant toi toute la journée, enroulée dans ton manteau. La fièvre ne tombe pas. Au soir, elle délire en corvannais, elle appelle son père, et Maëlle marche à côté de ta jument, la main sur la jambe de sa fille, sans dire un mot.",
      "Au matin, Ilse vit. Elle est faible comme un oiseau tombé du nid. Elle vivra, peut-être. Si on la laisse vivre, là où vous l'emmenez.",
    ],
    choices: [{ back: "@route" }] },

  YS_ilse_portee: { act: "I", title: "Sur le dos de sa mère", place: null,
    text: [
      "Maëlle prend sa fille sur son dos, attachée par un châle, et elle marche. La corde tire sur son poignet à chaque pas. Elle garde son allure, les yeux sur la route.",
      "Rodric, derrière elle, te regarde, lui. Les trois cloches tintent. Tu as l'impression qu'il compte.",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  // the enfant's road crosses the column (EN_colonne, played in the enfant's chapter 3): the same moment, seen from the saddle
  YS_croise: { act: "I", title: "Quelqu'un des montagnes", place: null,
    fx: { ep: ["perso", 300] },
    text: [
      "Au milieu du troisième jour, la colonne rejoint la route des Cloches, qui monte de la plaine vers Pallanche. Il y a du monde : des charrettes de fête, des pèlerins, des colporteurs, qui s'écartent sur le bas-côté en voyant les boucliers au loup et la longue corde.",
      "Parmi eux, quelqu'un de jeune, seul, avec un sac de montagne et des chaussures usées jusqu'à la trame. Tu le remarques parce qu'il ne regarde pas les soldats. Il regarde les prisonniers, un par un, comme s'il cherchait un visage. Ou comme s'il voulait se souvenir de tous.",
      { if: { has: "croise:eau_rodric" }, text: "Il sort une gourde et la tend à Rodric. Un de tes hommes lève sa lance. Tu tournes la tête, tu croises le regard de ce jeune voyageur, et tu fais un petit signe à ton homme : *laisse.* D'instinct. Rodric boit toute la gourde d'un trait, et il dit son nom, et tu l'entends le dire comme on fait un serment." },
      { if: { has: "croise:parle_ysolde" }, text: "Puis il court à côté de ta jument, et il te parle. D'un village de montagne où il a neigé en juillet. D'une neige qui ne fond pas. De gens qui ne se reconnaissent plus. D'une chose qui vient la nuit et qui porte au front une plume et une clé croisées." },
      { if: { all: [{ has: "croise:parle_ysolde" }, { has: "ysolde:vu_reliquaire" }] }, text: "Ta main se serre sur les rênes si fort que la jument encense." },
      { if: { has: "croise:parle_ysolde" }, text: "« Rentre chez toi », dis-tu, et tu te rends compte, en le disant, que c'est précisément ce que ce voyageur ne peut plus faire. « Non. Pardon. Va à Pallanche, puisque tu y vas. Et ne parle de ça à personne qui porte du noir. » Derrière toi, à dix pas, Sévrin a sorti sa plume." },
      { if: { not: { any: [{ has: "croise:eau_rodric" }, { has: "croise:parle_ysolde" }] } }, text: "Il s'écarte pour vous laisser passer, comme les autres. Tu sens son regard dans ton dos pendant une lieue. Tu regardes devant toi, par vieille discipline." },
    ],
    choices: [
      { hide: { not: { has: "croise:parle_ysolde" } }, fx: { flag: ["ysolde:sait_neige", "sevrin:mefiant"] }, back: "@route" },
      { hide: { has: "croise:parle_ysolde" }, back: "@route" },
    ] },

  YS_boite: { act: "I", title: "La nuit du reliquaire", place: null,
    fx: { clue: "n_boite", until: 23 },
    text: [
      "La troisième nuit, au camp, de l'autre côté du col, un homme essaie de s'enfuir. Un vieux tisserand, Anselin, soixante ans, qui a scié sa corde avec une pierre pendant des heures. On le rattrape dans les genévriers. On le ramène au feu.",
      "Frère Sévrin se lève. Il pose sa sacoche sur ses genoux, en sort la boîte de plomb dans son linge noir. Il fait asseoir le vieil homme devant lui.",
      "« Pourquoi fuyais-tu, Anselin ? »",
      "« Mes petits-enfants. Ils sont à Corvanne, chez leur mère. Je voulais les revoir. Une fois. »",
      "« Bien. » Sévrin entrouvre la boîte, d'un doigt. Un souffle blanc en sort, glacé, qui fait se coucher les flammes du feu. « Oublie tes petits-enfants, Anselin. »",
      "Le vieux regarde dans la boîte. Ses yeux deviennent vagues, puis paisibles. Il se lève, retourne à sa place dans le rang, se rassied, et sourit aux étoiles. Il a cessé de fuir : tous les chemins lui sont fermés.",
      "Autour du feu, cent dix-sept personnes ont vu. Tes hommes ont vu. Toi, tu as vu.",
    ],
    choices: [
      { label: "Arracher la boîte des mains de Sévrin", test: { dom: "combat", label: "Vitesse" },
        win: { fx: { flag: ["sevrin:affronte", "ysolde:boite_prise"], ep: ["perso", 800], fac: { greffiers: -10 } }, to: "YS_boite_prise" },
        lose: { fx: { flag: ["sevrin:affronte", "sevrin:mefiant"] }, to: "YS_boite_rate" } },
      { label: "« Plus jamais ça dans mon camp, Frère. Sous mes ordres, ça n'arrive pas. »", test: { dom: "social", label: "Autorité", help: [{ if: { item: "carnet_sevrin" }, v: 10 }, { if: { has: "sevrin:peur" }, v: 10 }] },
        win: { fx: { flag: "sevrin:recule", ep: ["perso", 600] }, to: "YS_boite_ordre" },
        lose: { fx: { flag: "sevrin:mefiant" }, to: "YS_boite_ordre_rate" } },
      { label: "Ne rien dire. Ce n'est pas ton affaire, c'est celle de la Chancellerie", fx: { flag: "ysolde:silence", fac: { greffiers: 5 } }, to: "@route" },
    ] },

  YS_boite_prise: { act: "I", title: "La boîte", place: null,
    text: [
      "Tu as la boîte dans la main avant qu'il ait fini de la refermer. Elle est si froide qu'elle te brûle. Sévrin se lève d'un bond, le visage blanc, pour la première fois sans sourire.",
      "« Rendez-la-moi, capitaine. Vous ne savez pas ce que vous tenez. »",
      "« Je sais exactement ce que je tiens. » Tu la refermes, d'un coup sec. Les voix, dedans, se taisent. « Et je la garderai jusqu'à Pallanche. »",
      "Il te la laisse, forcé : tes quarante hommes se sont levés autour du feu. Mais il te regarde, longuement, et tu sais qu'il s'en souviendra. Lui, il se souvient de tout.",
      "Le vieil Anselin ne se souvient toujours pas de ses petits-enfants. La boîte prend. Elle ne rend pas.",
    ],
    choices: [{ label: "Garder la boîte près de toi pour la nuit", fx: { item: "reliquaire" }, to: "@route" }] },

  YS_boite_rate: { act: "I", title: "Le souffle blanc", place: null,
    text: [
      "Il est plus vif que tu ne le croyais. Il recule, la boîte contre lui, et l'entrouvre face à toi. Le souffle blanc te passe sur le visage. « Asseyez-vous, capitaine. »",
      "Tu t'assieds. Pourquoi t'étais-tu levée ? Tu l'as oublié. Il y a un vieil homme, en face, qui sourit aux étoiles, et ça te paraît normal. Tout te paraît normal. Ce n'est qu'au matin, en te réveillant, que tu sens le froid sur tes joues, et que tu comprends que tu as perdu quelque chose. Une minute. Tu ne sais pas laquelle.",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  YS_boite_ordre: { act: "I", title: "Sous mes ordres", place: null,
    text: [
      "Tu parles bas, et cela suffit. Tes quarante hommes se sont levés derrière toi, sans que tu le leur demandes, et ont posé la main sur leur épée.",
      "Sévrin referme la boîte. Il regarde tes hommes, puis toi. « Comme il vous plaira, capitaine. Jusqu'à Pallanche. » Il sourit, de ses petites dents. « Après Pallanche, vous ne commanderez plus rien. »",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  YS_boite_ordre_rate: { act: "I", title: "La Chancellerie", place: null,
    text: [
      "« Vous oubliez à qui vous parlez, capitaine. » Il ne referme pas la boîte. Il la tourne vers tes hommes, lentement, comme on promène une lanterne. Ils reculent. Tous. Même Gautier. « L'ordre porte le sceau de la reine. Et le mien. Si quelqu'un, ici, veut oublier qui il sert, je peux l'y aider. »",
      "Les hommes restent assis. Il referme la boîte. Il a gagné. Pour cette nuit.",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  YS_rodric: { act: "I", title: "La dernière nuit", place: null,
    fx: { flag: "rodric:lisse", ep: ["seance", 1000] },
    text: [
      "La dernière nuit avant Pallanche, tu fais le tour du camp seule. Rodric ne dort pas. Il est assis dans l'herbe, au bout de sa corde, et il te regarde venir.",
      { if: { has: "croise:eau_rodric" }, text: "« Un paysan m'a donné à boire, cet après-midi, sur la route, dit-il. Un jeune, qui venait des montagnes. Ton soldat voulait l'en empêcher, et tu as fait signe de laisser faire. » Il sourit. « Tu fais souvent ça. Laisser faire. »" },
      "Tu t'assieds à côté de lui. La raison t'échappe. Lui trouve cela naturel.",
      "« Le pont de Lisse, dis-tu. »",
      "Il prend son temps. Les trois cloches tintent quand il respire. « J'étais de l'autre côté, sur la rive de Corvanne, avec mes hommes. Et sur le pont, il y avait des gens qui fuyaient. Des familles de Lisse, des deux côtés de la frontière, avec leurs charrettes et leurs chèvres. Et toi, tu tenais la tête du pont, côté Esquarre, avec tes quarante hommes. Et il y avait un ordre. *Que personne ne passe.* »",
      "Il se tait.",
      "« Et alors ? »",
      "« Et alors le pont a brûlé. » Il te regarde. « Avec les gens dessus. Je l'ai vu brûler. J'ai vu qui tenait les torches. Mais il faisait nuit, chevalière. Et je suis vieux, et je hais les Esquarrois depuis trente ans. Alors je ne te dirai pas ce que j'ai vu. Parce que je ne suis pas sûr que ce soit ce que j'ai vu. » Il se recouche dans l'herbe. « Va dormir. Demain, tu vas devoir choisir quelque chose. Je le sens. Tu as la tête de quelqu'un qui va choisir. »",
    ],
    choices: [{ label: "Rester là jusqu'à l'aube", to: "@route" }] },

  // ---------------------------------------------------------------- the gates of Pallanche: the fork
  YS_pallanche: { act: "I", title: "Les portes de Pallanche", place: "pallanche",
    fx: { quest: "YS_ordre" },
    text: [
      "Pallanche à l'aube, de l'est : des murs ocre, cent clochers, et au milieu la tour noire de la Chancellerie, sans fenêtres, couronnée d'une plume et d'une clé de fer. Les cloches sonnent prime, l'une après l'autre, en vague. La colonne s'arrête devant la porte de l'Est. Derrière la porte, une rue droite mène jusqu'à la tour. Une heure de marche. Après, ce ne sera plus ton affaire.",
      "Frère Sévrin descend de sa mule. Il compte une dernière fois. « Cent dix-huit, dit-il. Parfait. Vous serez remerciée, capitaine. La reine sait reconnaître ceux qui la servent sans poser de questions. »",
      { if: { has: "ysolde:recu" }, text: "Le reçu brûle dans ton pourpoint. *Service de la Couronne. Prix payé : rien.*" },
      { if: { item: "carnet_sevrin" }, text: "Le carnet gris est contre ta poitrine. *Roncière : livré. Chaumont : livré.* *Elle obéira.*" },
      { if: { item: "reliquaire" }, text: "La boîte de plomb est dans ta fonte de selle. Elle chuchote. Elle n'a pas cessé de chuchoter de toute la nuit." },
      "Tes quarante hommes attendent. Gautier attend. Rodric attend, debout, au bout de sa corde, et Maëlle, et Ilse, et les cent quinze autres. Tous se taisent. Tout le monde te regarde.",
      "Tu as la tête de quelqu'un qui va choisir.",
    ],
    choices: [
      { label: "Obéir. Livrer la colonne à la Chancellerie, comme la reine l'a ordonné", big: true, tag: "Ysolde reste fidèle à la Couronne",
        fx: { flag: "ysolde:voie=obeit", fac: { couronne: 20, greffiers: 10 }, conf: { rodric: -20 }, ep: ["histoire", 3000] }, to: "YS_obeit" },
      { label: "Déserter. Couper la corde, lier Sévrin, et rendre ces gens à leur rive", big: true, tag: "Ysolde trahit la Couronne",
        fx: { flag: "ysolde:voie=deserte", fac: { couronne: -30, greffiers: -20 }, conf: { rodric: 25 }, ep: ["histoire", 3000] }, to: "YS_deserte" },
      { label: "Ruser. Livrer la colonne, mais faire disparaître Rodric, Maëlle et ses enfants avant la porte", big: true, tag: "Sauver une famille, pas un village",
        if: { any: [{ has: "sevrin:recule" }, { has: "ysolde:boite_prise" }, { not: { has: "sevrin:mefiant" } }] }, why: "Sévrin te surveille de trop près.",
        fx: { flag: "ysolde:voie=ruse", fac: { couronne: 5 }, conf: { rodric: 10 }, ep: ["histoire", 3000] }, to: "YS_ruse" },
    ] },

  YS_obeit: { act: "I", title: "La porte de l'Est", place: "pallanche",
    text: [
      "Tu fais signe. La colonne repart. Elle passe sous la porte, dans la rue droite, entre les maisons pavoisées pour la Fête des Noms. Les gens, aux fenêtres, regardent passer les prisonniers en mangeant des beignets. *QUE NUL NE SOIT OUBLIÉ*, disent les banderoles.",
      "Rodric passe à côté de ta jument. Il ne te regarde pas. Les trois cloches tintent. Maëlle passe, Ilse sur sa hanche. Ilse te fait un petit signe de la main.",
      "À la grille de la tour noire, des gardes en noir prennent la corde des mains de tes hommes. Les prisonniers entrent dans la cour, un par un. La grille se referme. Sévrin se retourne, te salue, et entre à son tour.",
      "On te loge au palais du gouverneur, en chambre d'honneur. On te fait savoir que la reine elle-même sera à Pallanche pour la Nuit des Cloches, et qu'elle souhaite te voir. Tu dînes seule. Tu ne manges pas.",
      "Ton devoir est fait. C'est la chose la plus facile que tu aies jamais faite, et tu ne dors pas de la nuit.",
    ],
    choices: [{ label: "Attendre la Nuit des Cloches", to: "YS_fin" }] },

  YS_deserte: { act: "I", title: "La corde", place: "pallanche",
    text: [
      "Tu tires ton épée. Sévrin a le temps de comprendre ; il porte la main à sa sacoche. Gautier est plus rapide : il lui tord le bras, l'assied dans la poussière, et lui arrache la sacoche avec un plaisir évident.",
      "Tu tranches la corde. D'un seul coup, au premier poignet, celui de Rodric. Puis au deuxième. Tes hommes te regardent faire.",
    ],
    choices: [
      { label: "Te tourner vers tes quarante hommes et leur parler", test: { dom: "social", label: "Commandement", help: [{ if: { has: "hautvent:parole" }, v: 10 }, { if: { has: "thibaut:sort=libre" }, v: 10 }, { if: { has: "sevrin:recule" }, v: 10 }, { if: { has: "gautier:parle" }, v: 10 }] },
        win: { fx: { flag: "ysolde:hommes=suivent", ep: ["perso", 1000] }, to: "YS_deserte_suivent" },
        lose: { fx: { flag: "ysolde:hommes=divises" }, to: "YS_deserte_divises" } },
    ] },

  YS_deserte_suivent: { act: "I", title: "Les quarante", place: "pallanche",
    text: [
      "Tu ne fais pas de discours. Tu dis seulement : « Je ne livre pas des enfants à une boîte. Ceux qui veulent rentrer à Brenne, rentrez, je ne vous en voudrai pas. Ceux qui veulent rester, restez. »",
      "Personne ne rentre. Gautier le premier descend de cheval et se met à couper des cordes. Puis tous, l'un après l'autre.",
      "Vous laissez Sévrin attaché à sa propre mule, bâillonné, à la porte de l'Est, avec sa liste sur les genoux. Les gens de Hautvent se dispersent dans les faubourgs, dans les champs, sur les routes du nord et de l'est. Rodric reste. Il te tend la main, et tu la prends.",
      "« Maintenant, dit-il, tu es une traîtresse, chevalière. Bienvenue chez nous. »",
      "Tu te caches dans Pallanche, dans une auberge de rouliers près des abattoirs, avec Gautier et une poignée d'hommes. Les autres se fondent dans la ville en fête. Tu as une seule idée : la reine sera là pour la Nuit des Cloches. Et tu veux la regarder en face.",
    ],
    choices: [{ label: "Attendre la Nuit des Cloches", fx: { join: "rodric" }, to: "YS_fin" }] },

  YS_deserte_divises: { act: "I", title: "Les quarante, moins vingt", place: "pallanche",
    text: [
      "La moitié de tes hommes te suit. L'autre moitié recule, fait tourner ses chevaux, et passe la porte de l'Est au galop. Ils vont donner l'alerte. Tu ne peux pas leur en vouloir. Ils ont des femmes, des enfants, des dettes de jeu. Tu connais leurs noms.",
      "Vous avez le temps de couper les cordes et de disperser la colonne dans les faubourgs avant que les gardes noirs n'arrivent. Pas tous. Une trentaine de gens de Hautvent sont repris, là, sous tes yeux, et emmenés vers la tour. Tu ne peux rien faire.",
      "Rodric, Maëlle et ses enfants sont avec toi, dans une auberge de rouliers près des abattoirs, avec Gautier. Rodric te regarde. « La moitié, dit-il. C'est déjà beaucoup plus que la dernière fois. »",
    ],
    choices: [{ label: "Attendre la Nuit des Cloches", fx: { join: "rodric", flag: "hautvent:trente_repris" }, to: "YS_fin" }] },

  YS_ruse: { act: "I", title: "Une famille", place: "pallanche",
    text: [
      "Tu appelles Sévrin à part, sous prétexte de lui faire signer le reçu de la livraison. Gautier, pendant ce temps, fait sortir du rang Rodric, Maëlle et les trois enfants, et les pousse dans une ruelle, où les attend une charrette de foin qu'il a payée de sa poche.",
      "Quand Sévrin revient, la colonne repart. Il compte, en marchant. *Cent dix-sept, cent seize…* Il fronce les sourcils. Il recompte. Il te regarde. Tu soutiens son regard.",
      "« La fièvre, dis-tu. Au col. La mère et ses trois petits. Et l'homme aux cloches s'est jeté dans le ravin pour ne pas être pris. C'est dans mon rapport. »",
      "Il doute, et il manque de preuves. Il raye cinq noms, d'une écriture minuscule.",
      "Le reste de la colonne entre dans la tour noire. Cent treize personnes. Tu les regardes passer. Tu as sauvé une famille. Tu en as livré vingt.",
    ],
    choices: [{ label: "Attendre la Nuit des Cloches", fx: { met: "rodric", flag: "rodric:cache" }, to: "YS_fin" }] },

  YS_fin: { act: "I", title: "Ysolde, à Pallanche", place: "pallanche",
    fx: { flag: "prologue:ysolde", catchup: 4, catchupWhy: "la route de Brenne à Pallanche", ep: ["histoire", 4000] },
    text: [
      "Pallanche se prépare pour la Fête des Noms. Partout, des banderoles, des lampions, des greffiers à leurs pupitres sur les places, des files de gens qui veulent faire inscrire le nom de leurs morts. Les cloches sonnent toutes les heures, et chaque fois tu sursautes.",
      { if: { has: "ysolde:recu" }, text: "Tu as relu le reçu vingt fois. Ta signature. Ta propre main. Tu as vendu ce souvenir pour le service de la Couronne. Pour rien. La reine sera là, demain soir." },
      { if: { not: { has: "ysolde:recu" } }, text: "Le trou dans ta mémoire te fait mal, comme une dent. Rodric a dit : *le pont a brûlé, avec les gens dessus.* Tu n'as plus besoin de te souvenir pour savoir que ça te concerne." },
      "Demain, c'est la Nuit des Cloches.",
    ],
    choices: [{ label: "Attendre la nuit", fx: { flag: "ch:ysolde:2" }, to: "C_carrefour" }] },

  // ---------------------------------------------------------------- road events of the Marches
  E_corbeaux_marches: { act: "I", title: "Les corbeaux", place: null,
    text: ["Un vol de corbeaux suit la colonne depuis le matin, de peuplier en peuplier, sans crier. Les gens de Hautvent les regardent avec inquiétude. « Ils suivent les morts, dit une vieille. Ils savent avant nous. »"],
    choices: [
      { label: "« Ils suivent les vivants qui ont du pain, la mère. Rien d'autre. »", fx: { ep: ["perso", 200] }, to: "@route" },
      { label: "Les laisser suivre", to: "@route" },
    ] },

  E_patrouille: { act: "I", title: "La patrouille de Corvanne", place: null,
    text: [
      "Sur l'autre rive de la Lisse, une patrouille de Corvanne, six cavaliers en manteaux verts, s'arrête et regarde passer la colonne. L'un d'eux crie quelque chose en corvannais. Les gens de Hautvent tournent la tête. Une femme répond, en criant aussi. Les cavaliers mettent la main à l'épée.",
      "La paix est signée depuis deux ans. Elle tient à un cri.",
    ],
    choices: [
      { label: "Lever la main, paume ouverte, vers l'autre rive, et attendre", test: { dom: "social", label: "Sang-froid" },
        win: { fx: { ep: ["perso", 600] }, to: "@route" },
        lose: { fx: { flag: "corvanne:incident", ep: ["perso", 200] }, to: "E_patrouille_tir" } },
      { label: "Faire presser le pas, sans regarder l'autre rive", to: "@route" },
    ] },

  E_patrouille_tir: { act: "I", title: "Une flèche", place: null,
    text: ["Une flèche part de l'autre rive. Elle se plante dans la berge, à trois pas de ta jument. Un avertissement. Les cavaliers verts font demi-tour et disparaissent dans les saules. Ce soir, quelqu'un écrira un rapport, à Corvanne, et quelqu'un d'autre le lira, à Vasselin."],
    choices: [{ label: "Continuer", to: "@route" }] },
};
