// Act I · road of Pie, in two chapters. Chapter 1, "Les toits de Pallanche": a job for the Veuve in a greffier's house,
// the ledger of the Bureau des Cessions (the city buys memories), the name of Linette among the "pages blanches",
// and four ways into the black tower (the laundry cart Corneille knows, a memory sold at the Bureau, the belfry of
// Saint-Gilles, a forged seal). Chapter 2, "La tour noire": the eve of the Fête, the way in, the scriptorium of the
// pages blanches, Maître Hylas in the archives, and what Pie carries out: his sister, her memories, or the list.
var PI = { place: "pallanche", noLead: true };
function P(o) { return Object.assign({ act: "I" }, PI, o); }
module.exports = {
  // ================================================================ chapter 1 · les toits de Pallanche
  PI_toits: P({ title: "Les toits de Pallanche",
    fx: { questSeen: "PI_linette" },
    text: [
      "D'en haut, Pallanche est une autre ville. On ne voit plus les rues, ni la boue, ni les milices, ni les mendiants qui dorment debout contre les murs. On voit des toits. Des milliers de toits d'ardoise et de tuile, qui se chevauchent comme les écailles d'un poisson mort, et des cheminées, et entre les cheminées, les clochers. Cent, dit-on. Tu les as comptés, une fois, à quatorze ans. Il y en a quatre-vingt-dix-sept. Tu n'as jamais dit à personne que la ville mentait.",
      "C'est le soir du onze juillet. Il fait lourd. Assis à califourchon sur le faîte de la maison des Tanneurs, les jambes dans le vide, tu manges une poire volée en regardant la seule chose de Pallanche qui ne soit pas un toit : la tour noire de la Chancellerie des Noms, au milieu de la ville, sans une fenêtre, avec à son sommet la plume et la clé croisées, en fer, qui se découpent sur le couchant.",
      "Linette est là-dedans. Ça fait un an. Un an et onze jours.",
      "Tu étais au cachot de la porte Saint-Gilles pour un faux laissez-passer, trois mois, quand Maître Corneille l'a vendue. Corneille, le vieux faussaire qui t'avait appris à tenir une plume, qui vous avait recueillis tous les deux sous le pont des Teinturiers à la mort de votre mère. Il l'a vendue aux Greffiers pour payer ses dettes. Ils achètent les orphelins, paraît-il. Ils en font des scribes. Des *pages blanches*, comme on dit dans les bas-quartiers, en baissant la voix.",
      "Quand tu es sorti, Corneille avait disparu, et la tour n'avait toujours pas de porte pour les gens comme toi.",
      "Ce soir, tu as du travail. La Veuve t'a donné une adresse : la maison d'un greffier de la rue des Scelleurs, qui garde chez lui, paraît-il, un coffret qu'elle veut. Tu lui dois de l'argent. Tu lui dois beaucoup d'argent. Tu ne sais pas dire non à la Veuve.",
    ],
    choices: [
      { label: "Courir sur les toits jusqu'à la rue des Scelleurs", to: "PI_scelleurs" },
    ] }),

  PI_scelleurs: P({ title: "La rue des Scelleurs",
    text: [
      "La rue des Scelleurs est une rue de gens qui ont de l'argent et peur de le perdre : des maisons étroites et hautes, des volets ferrés, des lanternes à chaque porte. La maison du greffier est la quatrième. Trois étages, un toit d'ardoise trop raide, et une lucarne au dernier, entrouverte à cause de la chaleur.",
      "Les gens qui ont peur de perdre leur argent oublient toujours la chaleur.",
      "En bas, devant la porte, un homme en noir fait les cent pas : un garde de la Chancellerie, avec une hallebarde et l'air de quelqu'un qu'on a mis là pour rien. C'est la première fois que tu vois un garde noir devant une maison particulière.",
    ],
    choices: [
      { label: "Descendre par la lucarne, en silence", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { ep: ["perso", 500] }, to: "PI_bureau_maison" }, lose: { fx: { flag: "pie:bruit" }, to: "PI_ardoise" } },
      { label: "Jeter une tuile à l'autre bout de la rue pour éloigner le garde avant de descendre", test: { dom: "social", label: "Ruse", diff: -10 },
        win: { fx: { ep: ["perso", 500] }, to: "PI_bureau_maison" }, lose: { fx: { flag: "pie:bruit" }, to: "PI_ardoise" } },
    ] }),

  PI_ardoise: P({ title: "Une ardoise",
    text: [
      "Une ardoise se détache sous ton talon, glisse, rebondit sur la gouttière et s'écrase dans la rue avec un bruit de vaisselle. Le garde lève la tête. Il ne crie pas. Il ouvre la porte avec une clé, et tu l'entends monter l'escalier, marche après marche, lentement, comme quelqu'un qui sait qu'il n'y a qu'une sortie.",
    ],
    choices: [
      { label: "L'attendre en haut de l'escalier, dans le noir", to: "PI_garde_maison" },
      { label: "Te glisser dans la cheminée et attendre qu'il reparte", test: { dom: "discretion", label: "Discrétion", diff: -10 },
        win: { fx: { time: 1 }, to: "PI_bureau_maison" }, lose: { to: "PI_garde_maison" } },
    ] }),

  PI_garde_maison: P({ title: "Le garde noir",
    combat: { title: "Le garde de la Chancellerie", enemies: ["garde_noir"], terrain: "bati", range: "contact",
      flee: { dom: "discretion", label: "Sauter par la lucarne sur le toit d'en face", fx: { flag: "pie:fui_scelleurs" }, to: "PI_veuve_mains_vides" },
      win: { fx: { ep: ["seance", 800], flag: "pie:garde_assomme" }, to: "PI_bureau_maison" },
      lose: { fx: { flag: "pie:fui_scelleurs" }, to: "PI_veuve_mains_vides" } },
    text: [
      "Il arrive sur le palier avec sa lanterne. Il est grand, jeune, il a peur, et la peur le rend rapide. Sa hallebarde balaie l'espace entre vous. Dans le couloir étroit, c'est elle qui a l'avantage. Dans le noir, c'est toi.",
    ],
    choices: [] }),

  PI_bureau_maison: P({ title: "Le cabinet du greffier",
    text: [
      "Le cabinet est au troisième, sous les combles. Un pupitre, une chaise, des étagères de registres reliés de noir, une odeur de cire et d'encre. Et sous le pupitre, vissé au plancher, le coffret : de chêne cerclé de fer, pas plus grand qu'une miche de pain, avec une serrure de Varre à trois gorges. Une belle serrure. Tu la caresses comme on caresse un chat.",
      "Saint Anselme, ton crochet le plus fin, et saint Brice, le coudé. Une minute. La serrure soupire et s'ouvre.",
      "Dans le coffret, il n'y a pas d'or. Il y a des petits carrés de vélin, des centaines, pliés en deux, rangés debout comme des cartes. Tu en déplies un. *Bureau des Cessions. Cédé par Jehan Peyrol, portefaix : un souvenir. Objet : le visage de sa fille Aliette, morte en couches. Prix payé : quatre sous.*",
      "Un autre. *Cédé par Marion Lebas, blanchisseuse : un souvenir. Objet : la nuit où son mari l'a battue. Prix payé : deux sous.*",
      "Un autre. Un autre. Des portefaix, des lavandières, des soldats, des putains, des enfants. Des souvenirs vendus pour le prix d'une soupe. Tu as entendu parler du Bureau, dans les bas-quartiers. Une rumeur, une blague. *Si t'as faim, va vendre ta grand-mère au Bureau.* Tu ne savais pas que c'était vrai.",
    ],
    choices: [
      { label: "Fouiller les registres sur les étagères", test: { dom: "savoir", label: "Lecture" },
        win: { fx: { clue: "n_cessions", ep: ["perso", 600] }, to: "PI_registre_pages" },
        lose: { fx: { clue: "n_cessions", time: 1 }, to: "PI_registre_pages" } },
      { label: "Prendre le coffret et filer", fx: { item: "coffret_cessions" }, to: "PI_veuve" },
    ] }),

  PI_registre_pages: P({ title: "Les pages blanches",
    fx: { item: "coffret_cessions", clue: "n_pages" },
    text: [
      "Les registres sont des comptes. Des colonnes de noms, de dates, de sous. Et sur la dernière étagère, un registre plus mince, relié de gris, dont le dos dit seulement : *Pages.*",
      "Ce sont des enfants. *Page Trois, sept ans, achetée à l'hospice Sainte-Claire, deux écus. Page Neuf, dix ans, achetée à sa tante, trois écus.* En face de chaque nom, une colonne, *Cession complète*, et une date.",
      "*Page Onze. Linette, neuf ans, des Teinturiers. Vendue par M. Corneille, faussaire, quatre écus. Cession complète : le trois juillet de l'an dernier.*",
      "Quatre écus. Tu restes longtemps assis par terre, le registre sur les genoux, dans l'odeur de cire. Quand tu te relèves, tu as arraché la page. Tu ne te souviens pas de l'avoir fait.",
    ],
    choices: [{ label: "Partir, le coffret sous le bras et la page contre ta peau", fx: { item: "page_pages", flag: "pie:sait_page" }, to: "PI_veuve" }] }),

  PI_veuve_mains_vides: P({ title: "Les mains vides",
    text: [
      "Tu cours sur les toits jusqu'à ce que tes poumons brûlent, puis tu te laisses tomber dans une cour, derrière une teinturerie, et tu vomis dans une cuve de garance. Tu n'as rien. Tu as un garde noir qui a vu ta tête, et une dette qui vient de grossir.",
      "Tu y vas quand même. On ne fait pas attendre la Veuve.",
    ],
    choices: [{ label: "Aller chez la Veuve, les mains vides", fx: { flag: "pie:echec_scelleurs" }, to: "PI_veuve" }] }),

  PI_veuve: P({ title: "La Veuve", shop: "veuve",
    fx: { meet: "veuve" },
    text: [
      "La Veuve tient boutique de ferronnerie au fond d'une impasse des Teinturiers. Il y a des grilles, des clous, des serrures, et dans l'arrière-boutique, tout ce qu'on a volé dans Pallanche depuis vingt ans. Elle est petite, ronde, vêtue de noir depuis la mort d'un mari dont personne ne sait s'il a existé, et elle a les yeux les plus gentils que tu aies jamais vus. C'est ce qui fait si peur.",
      { if: { item: "coffret_cessions" }, text: "Elle ouvre le coffret, déplie trois reçus, les replie. « Bien, dit-elle. Très bien. Tu sais ce que c'est ? » Tu dis que oui. « Alors tu sais ce que ça vaut. Pas pour moi. Pour ceux à qui c'est. Il y a des gens, dans cette ville, qui paieraient cher pour savoir ce qu'ils ont vendu. »" },
      { if: { has: "pie:echec_scelleurs" }, text: "« Rien, dit-elle doucement, quand tu as fini. Et un garde noir qui connaît ta tête. » Elle te verse un verre de vin. « Tu me devais quarante écus, Pie. Maintenant, tu m'en dois cinquante. »" },
      "Tu lui parles de Linette. Tu ne voulais pas, mais tu le fais. La Veuve t'écoute sans t'interrompre, en tricotant.",
      "« La tour, dit-elle. Personne n'entre dans la tour. Sauf ceux qui ont une raison d'y être. Les greffiers, les gardes, les blanchisseuses qui viennent chercher le linge, et les pauvres gens qui vont vendre au Bureau, au rez-de-chaussée. Et le soir de la Fête, la tour ouvre ses portes à tout Pallanche : on monte écrire son nom dans le Grand Livre, et on redescend. Mais les pages blanches ne sont pas au rez-de-chaussée, mon garçon. »",
      "Elle pose son tricot. « Il te faudrait un sceau de greffier. Un vrai. Ou un faux assez bon pour passer pour un vrai, et ça, c'est ton métier, pas le mien. Je peux te trouver la cire, le vélin, et un modèle. Il me faudrait en échange une chose de la tour. N'importe laquelle, tant qu'elle vient de là-haut. Et ta dette est effacée. »",
    ],
    choices: [
      { label: "Accepter le marché de la Veuve : un faux sceau contre une chose de la tour", hide: { has: "pie:plan_sceau" }, fx: { flag: "pie:plan_sceau", item: "faux_sceau_brut" }, to: "PI_ville" },
      { label: "Lui vendre le coffret des reçus pour réduire ta dette", hide: { not: { item: "coffret_cessions" } }, fx: { drop: "coffret_cessions", gold: 15, flag: "pie:coffret_vendu" }, to: "PI_ville" },
      { label: "Garder le coffret. Ces reçus appartiennent à ceux qui ont vendu", hide: { not: { item: "coffret_cessions" } }, fx: { flag: "pie:coffret_garde" }, to: "PI_ville" },
      { back: "PI_ville" },
    ] }),

  // ---------------------------------------------------------------- the city (hub of chapter 1)
  PI_ville: P({ title: "Les bas-quartiers", hub: true,
    text: [
      "Pallanche, les jours avant la Fête des Noms. Les bas-quartiers sentent la teinture, le poisson et la sueur. Partout, des gens arrivent de la campagne avec leurs morts dans la tête, pour les faire inscrire dans le Grand Livre. Les auberges sont pleines. Les cloches sonnent toutes les heures, et on ne s'entend plus.",
      { before: "pie:modele_sceau", if: { has: "pie:plan_sceau" }, text: "Dans ta poche, le vélin et la cire noire de la Veuve. Il te manque un modèle de sceau, et du temps." },
      { after: "pie:modele_sceau", before: "pie:faux_sceau", if: { has: "pie:plan_sceau" }, text: "Dans ta poche, le vélin, la cire noire de la Veuve et l'empreinte d'un sceau de greffier. Il ne te manque plus que du temps." },
      { once: true, if: { all: [{ has: "ch:ysolde:1" }, { not: { has: "ch:ysolde:2" } }] }, text: "Au marché aux poissons, on dit qu'une colonne de Corvannais arrive par la route de Varre, pour être jugés à la Fête. On dit cent. On dit mille. On dit ça de toutes les colonnes." },
      "La tour noire est au bout de toutes les rues. Il te faut un moyen d'y entrer.",
    ],
    choices: [
      { label: "Retrouver Maître Corneille, qui a vendu ta sœur", to: "PI_corneille_cherche", hide: { seen: "PI_corneille_cherche" } },
      { label: "Le Bureau des Cessions, au pied de la tour", to: "PI_bureau", hide: { seen: "PI_bureau" } },
      { label: "Le clocher de Saint-Gilles, d'où l'on voit dans la cour de la Chancellerie", to: "PI_sonneur", hide: { seen: "PI_sonneur" } },
      { label: "La place aux Clercs, où les greffiers inscrivent les noms", to: "PI_place_clercs", hide: { seen: "PI_place_clercs" } },
      { label: "Mouche, sur les toits du marché aux Toiles", to: "PI_Q_mouche", hide: { seen: "PI_Q_mouche" } },
      { label: "Grélot, sur le toit de la halle aux Draps", to: "PI_Q_course", hide: { seen: "PI_Q_course" } },
      { label: "Une gamine assise sur ta marche", to: "PI_Q_fiole", hide: { seen: "PI_Q_fiole" } },
      { label: "Le tripot, sous le Pont-Neuf", to: "PI_k_tripot", hide: { seen: "PI_k_tripot" } },
      { label: "Une vieille, une couverture étalée au pied de la tour", to: "PI_k_brocante", hide: { seen: "PI_k_brocante" } },
      { label: "Le lavoir, au bout de la rue des Teinturiers", to: "PI_k_lavoir", hide: { seen: "PI_k_lavoir" } },
      { label: "Graver le faux sceau dans ton grenier", once: true, hide: { not: { has: "pie:plan_sceau" } }, if: { has: "pie:modele_sceau" }, why: "Il te faut un modèle : un vrai sceau de greffier, ou son empreinte.", to: "PI_graver", tag: "Plan" },
      { label: "Rentrer dormir : tu sais comment entrer dans la tour", if: { any: [{ has: "pie:plan_linge" }, { has: "pie:plan_cession" }, { has: "pie:plan_clocher" }, { has: "pie:faux_sceau" }] },
        why: "Tu n'as encore aucun moyen d'entrer dans la tour.", to: "PI_veille", big: true },
    ] }),

  // Corneille: the old forger who sold Linette
  PI_corneille_cherche: P({ title: "Où est Corneille ?",
    fx: { meet: "corneille", questSeen: "PI_corneille" },
    text: [
      "Il te faut deux heures et trois pots de vin pour retrouver sa trace. Corneille n'a pas quitté Pallanche. Il est descendu, simplement, d'un étage à l'autre de la ville, comme une pierre au fond d'un puits : des Teinturiers aux Tanneurs, des Tanneurs aux Abattoirs, et des Abattoirs à la Fosse, sous les arches du vieux pont, là où on ne descend que pour mourir ou pour boire.",
      "Il est assis contre un pilier, une cruche de vin aigre entre les genoux. Il a maigri. Ses mains tremblent si fort qu'il ne pourrait plus tenir une plume. Il te regarde arriver sans te reconnaître, puis il te reconnaît, et il ne bouge pas.",
      "« Pie, dit-il. Je me demandais combien de temps ça te prendrait. »",
    ],
    choices: [
      { label: "« Pourquoi ? »", to: "PI_corneille_pourquoi" },
      { label: "Le saisir par le col et le traîner jusqu'à l'eau", to: "PI_corneille_eau" },
    ] }),

  PI_corneille_pourquoi: P({ title: "Quatre écus",
    text: [
      "« Parce que je devais douze écus à la Veuve, dit-il, et qu'elle allait me casser les mains. Parce qu'ils m'en ont donné quatre, et que le Bureau m'a donné le reste. » Il rit, sans joie. « J'ai vendu au Bureau, aussi. Tu veux savoir quoi ? Le jour où je vous ai trouvés sous le pont, toi et la petite. Six sous. C'est ce que ça valait. »",
      "Il boit. « Je ne me souviens pas de vous avoir recueillis, Pie. Je sais que je l'ai fait. Je ne m'en souviens pas. Alors la vendre, ce n'était pas si difficile. C'était vendre l'enfant d'un autre. »",
      "Il lève vers toi des yeux rouges. « Je sais comment on entre dans la tour. C'est moi qui y ai mené la petite. Par la porte du linge, derrière, avec les charrettes des lavandières du quai Saint-Jean. Les gardes ne regardent jamais sous les draps sales. Personne ne regarde jamais sous les draps sales. »",
    ],
    choices: [
      { label: "Le laisser là, avec son vin et ce qu'il n'a plus", fx: { flag: ["pie:plan_linge", "corneille:laisse"], quest: "PI_corneille", ep: ["perso", 600] }, to: "PI_corneille_fin" },
      { label: "Lui donner tes six sous. Pour le pont", fx: { flag: ["pie:plan_linge", "corneille:pardonne"], gold: -6, quest: "PI_corneille", ep: ["perso", 900] }, if: { gold: { min: 6 } }, why: "Tu n'as même pas six sous.", to: "PI_corneille_pardon" },
      { label: "Lui raconter, toi, le jour du pont. Qu'il le sache, au moins", before: "pie:oublie_corneille", tag: "Souvenir", to: "PI_corneille_raconte" },
    ] }),

  PI_corneille_raconte: P({ title: "Le jour du pont",
    text: [
      "Tu t'assieds à côté de lui, contre le pilier. Tu lui racontes. La pluie, ce soir-là. Votre mère qu'on venait de jeter dans la fosse commune des quais. Linette, quatre ans, qui ne pleurait pas, qui ne disait rien, qui tenait ta main si fort que tu avais les doigts blancs. Et cet homme maigre, avec des taches d'encre jusqu'aux coudes, qui s'est penché sous l'arche et qui a dit : *Vous avez faim ? Moi aussi. Venez.*",
      "Corneille t'écoute. À la fin, il pleure, sans bruit, sans essuyer ses larmes. « C'était moi, ça ? »",
      "« C'était toi. »",
      "Il hoche la tête longtemps. Puis il dit : « Les charrettes des lavandières. Le quai Saint-Jean, à l'aube. Et la troisième marche de l'escalier du linge craque. Saute-la. » Il ferme les yeux. « Va la chercher, Pie. Moi, je ne la connais plus. »",
    ],
    choices: [{ label: "Le laisser dormir", fx: { flag: ["pie:plan_linge", "corneille:raconte", "pie:marche"], quest: "PI_corneille", ep: ["perso", 1200] }, to: "PI_ville" }] }),

  PI_corneille_pardon: P({ title: "Six sous",
    text: [
      "Il regarde les six pièces dans sa main. Il ne comprend pas. Tu ne lui expliques pas. Tu ne sais pas toi-même. Peut-être que tu as voulu racheter ce qu'il a vendu, au même prix. Peut-être que tu as voulu qu'il se souvienne d'une chose, au moins, et que cette chose-là soit toi.",
      "Quand tu remontes l'escalier de la Fosse, tu l'entends qui rit, ou qui pleure.",
    ],
    choices: [{ back: "PI_ville" }] }),

  PI_corneille_fin: P({ title: "La Fosse",
    text: ["Tu remontes l'escalier de la Fosse sans te retourner. Il ne t'appelle pas. Tu sais déjà que tu reviendras, un jour, et qu'il ne sera plus là, et que tu ne sauras jamais s'il se souvenait de toi."],
    choices: [{ back: "PI_ville" }] }),

  PI_corneille_eau: P({ title: "L'eau noire",
    text: [
      "Il ne se débat pas. Tu le traînes sur les pierres glissantes jusqu'au bord de la Pallante, et tu lui enfonces la tête dans l'eau noire, une fois, deux fois. Il remonte en toussant. Il ne demande pas grâce. Il dit, entre deux quintes : « Les charrettes. Du linge. Quai Saint-Jean. C'est par là que je l'ai fait entrer. Vas-y. Ou noie-moi. Les deux me vont. »",
    ],
    choices: [
      { label: "Le lâcher", fx: { flag: ["pie:plan_linge", "corneille:laisse"], quest: "PI_corneille" }, to: "PI_corneille_fin" },
      { label: "Le maintenir sous l'eau", tag: "Irréversible", stain: true, fx: { flag: ["pie:plan_linge", "corneille:noye", "pie:sang"], quest: "PI_corneille" }, to: "PI_corneille_noye" },
    ] }),

  PI_corneille_noye: P({ title: "La Pallante",
    text: [
      "Ça dure moins longtemps que tu ne croyais. Après, l'eau redevient lisse, et le courant l'emporte sous les arches, vers les Abattoirs, vers la mer, vers nulle part. Personne n'a rien vu. Personne ne regarde jamais, à la Fosse.",
      "Tu restes accroupi au bord de l'eau jusqu'à ce que tes mains arrêtent de trembler. Elles ne s'arrêtent pas.",
    ],
    choices: [{ back: "PI_ville" }] }),

  // the Bureau des Cessions: sell a memory, get a cédant's token for the lower floor
  PI_bureau: P({ title: "Le Bureau des Cessions",
    fx: { questSeen: "PI_bureau", meet: "baudoin" },
    text: [
      "Le Bureau des Cessions occupe une salle basse au pied de la tour, avec une porte à elle, sur la rue, et une file d'attente qui fait le tour du pâté de maisons. Des pauvres gens. Des femmes avec des enfants dans les bras, des vieux, des soldats démobilisés avec leur jambe de bois. Ils ne parlent pas. Ils avancent.",
      "À l'intérieur, derrière un comptoir, un jeune greffier au visage doux, Frère Baudoin, reçoit chacun avec un sourire. « Qu'est-ce que vous voulez céder ? » On lui dit. Il écrit. Puis il ouvre un petit coffret de plomb, il en sort une pincée de quelque chose de blanc, et il souffle doucement, comme sur une bougie, au visage du cédant.",
      { first: true, text: "La femme devant toi a vendu le souvenir de son premier enfant, mort à deux ans. Trois sous. Elle sort en souriant." },
      "Chaque cédant reçoit un jeton de bois, pour revenir. Derrière le comptoir, une porte mène aux étages. Un garde l'ouvre pour les *gros cédants*, ceux qui reviennent, ceux qu'on monte voir là-haut.",
    ],
    choices: [
      { label: "Vendre un souvenir. Juste un. Pour le jeton, et pour la porte", tag: "Souvenir", to: "PI_bureau_vendre" },
      { label: "Observer, et voler un jeton dans la file", test: { dom: "discretion", label: "Larcin", diff: -10 },
        win: { fx: { flag: "pie:plan_cession", item: "jeton_bureau", ep: ["perso", 600], quest: "PI_bureau" }, to: "PI_bureau_jeton" },
        lose: { fx: { flag: "pie:repere_bureau" }, to: "PI_bureau_rate" } },
      { label: "Repartir, avec la nausée", back: "PI_ville" },
    ] }),

  PI_bureau_vendre: P({ title: "Ce que vaut Pie",
    text: [
      "Frère Baudoin t'accueille avec le même sourire. « Qu'est-ce que vous voulez céder ? » Tu sais exactement ce que tu ne veux pas céder. Le reste est une liste, et elle est plus courte que tu ne croyais.",
    ],
    choices: [
      { label: "Ton premier vol : une pomme, à six ans, et la peur", tag: "Souvenir donné", stain: true, if: { souv: "pie:vol" }, why: "Tu l'as déjà vendu.",
        fx: { souv: "pie:vol", gold: 3, item: "jeton_bureau", flag: ["pie:plan_cession", "pie:a_vendu"], quest: "PI_bureau", ep: ["perso", 800] }, to: "PI_bureau_vendu" },
      { label: "Maître Corneille : celui qui vous a recueillis, puis qui a vendu ta sœur", tag: "Souvenir donné", stain: true, if: { souv: "pie:maitre" }, why: "Tu l'as déjà vendu.",
        fx: { souv: "pie:maitre", gold: 2, item: "jeton_bureau", flag: ["pie:plan_cession", "pie:a_vendu", "pie:oublie_corneille"], quest: "PI_bureau", ep: ["perso", 800] }, to: "PI_bureau_vendu" },
      { label: "La dette : ce que tu dois à la Veuve, et pourquoi", tag: "Souvenir donné", stain: true, if: { souv: "pie:dette" }, why: "Tu l'as déjà vendu.",
        fx: { souv: "pie:dette", gold: 5, item: "jeton_bureau", flag: ["pie:plan_cession", "pie:a_vendu", "pie:oublie_dette"], quest: "PI_bureau", ep: ["perso", 800] }, to: "PI_bureau_vendu" },
      { label: "Non. Pas ici. Pas comme eux", to: "PI_bureau" },
    ] }),

  PI_bureau_vendu: P({ title: "Un souffle",
    text: [
      "Frère Baudoin écrit, d'une écriture ronde d'écolier. Il ouvre le coffret de plomb. La poudre blanche est froide, même à un pied de ton visage. Il souffle.",
      "Ça ne fait pas mal. C'est comme se réveiller d'une sieste en plein après-midi, sans savoir l'heure, avec l'impression d'avoir rêvé de quelque chose d'important. Tu cherches. Il n'y a rien à chercher. Il y a juste un endroit, quelque part derrière tes yeux, où le sol est plus lisse qu'ailleurs.",
      "« Et voilà », dit Baudoin. Il te tend des pièces, un reçu, et un jeton de bois peint d'une plume. « Revenez quand vous voulez. Le soir de la Fête, nous recevons là-haut. Les gros cédants sont toujours les bienvenus. »",
      { if: { has: "pie:oublie_dette" }, text: "En sortant, tu penses à la Veuve, à son tricot, à ses yeux gentils. Tu ne sais plus pourquoi elle te fait peur. Tu sais que tu devrais." },
    ],
    choices: [{ back: "PI_ville" }] }),

  PI_bureau_jeton: P({ title: "Le jeton",
    text: [
      "Un vieux soldat, une jambe de bois, le jeton qui dépasse de sa ceinture. Tu le frôles dans la file, tu t'excuses, tu passes. Le jeton est dans ta manche. Le soldat ne se retourne pas. Il ne se souviendrait pas de toi, de toute façon. Il est déjà venu trois fois.",
      "C'est un jeton de bois peint d'une plume. *Gros cédant. Étage des Cessions.* Avec ça, le soir de la Fête, on t'ouvrira la porte derrière le comptoir.",
    ],
    choices: [{ back: "PI_ville" }] }),

  PI_bureau_rate: P({ title: "La main dans la ceinture",
    text: [
      "Le vieux soldat te saisit le poignet avec une force que tu n'attendais pas. « Petit voleur, dit-il, sans colère. Qu'est-ce que tu veux prendre à un homme qui a tout vendu ? » Il te lâche. Mais le garde de la porte t'a vu. Il t'a regardé longtemps. Il se souviendra de toi, lui.",
    ],
    choices: [{ label: "Partir avant qu'il appelle", to: "PI_ville" }] }),

  // the belfry of Saint-Gilles: a side quest with a bell-ringer who is losing his bells
  PI_sonneur: P({ title: "Le sonneur de Saint-Gilles",
    fx: { meet: "anseau", questSeen: "PI_sonneur" },
    text: [
      { first: true, text: "Le clocher de Saint-Gilles est le plus haut des bas-quartiers, et le seul d'où l'on voie par-dessus le mur de la Chancellerie, dans sa cour intérieure. Tu y montais, enfant, avec Linette, pour regarder les feux de la Saint-Jean. Le sonneur, Anseau, vous laissait faire, en échange de pommes." },
      "Anseau est toujours là. Il a soixante-dix ans. Il est assis au milieu de ses huit cloches, sous les poutres, et il pleure.",
      { first: true, text: "« Je ne sais plus, dit-il. Je ne sais plus laquelle est laquelle. Quarante ans que je les sonne. Margot, Bénigne, la Grosse, la Muette… J'ai su leurs noms toute ma vie. Ce matin, je ne savais plus. » Il te montre ses mains. Il y a, dans les plis de ses paumes, une poussière blanche, très fine, qui ne part pas quand il les frotte. « On a sonné vêpres avec la cloche des morts. Tout le quartier a cru que l'évêque était mort. »" },
    ],
    choices: [
      { label: "Retrouver avec lui le nom de chaque cloche", test: { dom: "savoir", label: "Mémoire", help: [{ if: { souv: "pie:toits" }, v: 15 }] },
        win: { fx: { flag: ["pie:plan_clocher", "anseau:cloches"], quest: "PI_sonneur", ep: ["perso", 900] }, to: "PI_sonneur_noms" },
        lose: { fx: { flag: "anseau:perdu" }, to: "PI_sonneur_rate" } },
      { label: "Regarder d'où vient la poussière blanche", once: true, test: { dom: "nature", label: "Observation" },
        win: { fx: { clue: "n_poudre", ep: ["perso", 500] }, to: "PI_sonneur_poudre" }, lose: { to: "PI_sonneur_poudre_rate" } },
    ] }),

  PI_sonneur_noms: P({ title: "Margot, Bénigne, la Grosse",
    text: [
      "Vous y passez l'après-midi. Tu te souviens de choses que tu ne savais pas savoir : que Margot est la plus petite et qu'elle sonne l'aube, que la Muette n'a pas de battant depuis la peste et qu'on la frappe au marteau, que Bénigne a une fêlure qui la fait chanter faux, comme ta mère. Tu les touches une par une. Tu dis leurs noms. Anseau les répète.",
      "À la fin, il les sait toutes. Il te serre dans ses bras, il sent la sueur et le suif. « Je te dois quelque chose, petit. »",
      "Tu lui montres la tour, de l'autre côté du mur. « Le soir de la Fête. La corde de la Grosse. Assez longue pour descendre du clocher jusqu'au mur. »",
      "Il regarde longtemps la tour noire. « La Grosse a cent pas de corde, dit-il. Et le soir de la Fête, je sonne avec toutes les autres. Personne n'entendra rien. »",
    ],
    choices: [{ back: "PI_ville" }] }),

  PI_sonneur_rate: P({ title: "La Muette",
    text: [
      "Tu essaies. Vous mélangez Margot et Bénigne, vous perdez la Grosse, et Anseau finit par te repousser, très doucement. « Va-t'en, petit. Tu ne les connais pas mieux que moi. » Quand tu redescends l'escalier, il frappe la Muette au marteau, encore et encore, et c'est le seul nom qui lui reste.",
    ],
    choices: [{ fx: { quest: "PI_sonneur" }, back: "PI_ville" }] }),

  PI_sonneur_poudre: P({ title: "D'où vient la poudre",
    text: [
      "Elle est partout, une fois qu'on sait la voir : dans les rainures des poutres, sur les marches, dans la mousse des gouttières. Une poudre blanche, plus fine que la farine, qui ne fond pas au soleil et qui est froide au doigt. Et elle forme des traînées. Toutes les traînées vont dans le même sens : vers le mur de la Chancellerie, de l'autre côté de la rue.",
    ],
    choices: [{ back: "PI_sonneur" }] }),

  PI_sonneur_poudre_rate: P({ title: "De la farine",
    text: ["De la poussière, de la farine, de la chaux. Tu ne vois rien de plus. Les vieux ont toujours les mains blanches de quelque chose."],
    choices: [{ back: "PI_sonneur" }] }),

  // the place aux Clercs: a greffier's seal for a model
  PI_place_clercs: P({ title: "La place aux Clercs",
    text: [
      "Sur la place aux Clercs, dix pupitres alignés à l'ombre des tilleuls, et derrière chacun un greffier en noir, qui inscrit gratuitement, dans un grand livre relié de rouge, le nom de qui le demande : *le Grand Livre de la Fête*. Les gens font la queue depuis l'aube. On donne le nom d'un mort, d'un enfant, le sien. Le greffier écrit, sèche à la poudre blanche, et sourit. Les gens repartent en pleurant de joie. *Que nul ne soit oublié.*",
      "Une femme donne son propre nom. En repartant, elle s'arrête au bord de la place, regarde autour d'elle, puis reprend sa route.",
      "Le greffier du troisième pupitre a posé son sceau d'argent à côté de l'encrier. Pour signer les reçus.",
    ],
    choices: [
      { label: "Prendre l'empreinte du sceau dans un morceau de cire, pendant qu'il écrit", hide: { not: { has: "pie:plan_sceau" } }, test: { dom: "discretion", label: "Larcin" },
        win: { fx: { flag: "pie:modele_sceau", ep: ["perso", 600] }, to: "PI_empreinte" }, lose: { fx: { flag: "pie:repere_clercs" }, to: "PI_empreinte_rate" } },
      { label: "Faire inscrire le nom de Linette dans le Grand Livre", fx: { flag: "pie:linette_inscrite" }, to: "PI_inscrire" },
      { back: "PI_ville" },
    ] }),

  PI_empreinte: P({ title: "L'empreinte",
    text: ["Tu demandes au greffier d'inscrire ta mère. *Jeanne, blanchisseuse.* Pendant qu'il écrit, ta main traîne sur le pupitre, le pouce sur le sceau, la cire tiède dans ta paume. Quand tu repars, tu as dans ta poche une plume et une clé, à l'envers, nettes comme une gravure."],
    choices: [{ fx: { flag: "pie:mere_inscrite" }, back: "PI_ville" }] }),

  PI_empreinte_rate: P({ title: "Le regard",
    text: ["Le greffier lève les yeux au moment où ton pouce touche le sceau. Il ne dit rien. Il pose la main dessus, et il te regarde jusqu'à ce que tu partes. Ton modèle, ce n'est pas ici que tu le prendras."],
    choices: [{ back: "PI_ville" }] }),

  PI_inscrire: P({ title: "Linette, des Teinturiers",
    text: [
      "Le greffier écrit. *Linette, des Teinturiers.* Il sèche l'encre avec la poudre blanche. Il te sourit. « Elle ne sera pas oubliée. »",
      "Pendant une seconde, en traversant la place, tu ne te souviens plus de la couleur de ses cheveux. Puis ça revient. Châtain. Châtain clair, avec un épi derrière.",
    ],
    choices: [{ label: "Repartir, vite", back: "PI_ville" }] }),

  PI_graver: P({ takes: "morning", title: "Le faux sceau",
    text: [
      "Ton grenier sent la cire chaude et l'huile de lampe. Tu graves toute la nuit, au burin, dans un morceau de laiton récupéré sur une boucle de ceinture, la plume et la clé croisées, à l'envers, d'après l'empreinte. Au matin, tu as les yeux qui brûlent, et un sceau qui ne passerait pas sous la loupe d'un greffier, mais qui passera sous la lanterne d'un garde.",
    ],
    choices: [{ label: "Le ranger", fx: { flag: "pie:faux_sceau", item: "faux_sceau", drop: "faux_sceau_brut", time: 8, ep: ["perso", 800] }, to: "PI_ville" }] }),

  // end of chapter 1
  PI_veille: P({ title: "Le grenier",
    text: [
      "Tu dors dans ton grenier de la rue des Cordiers, sous les tuiles, là où il fait trop chaud en été et trop froid en hiver, et où personne ne vient jamais. Tu as étalé sur le plancher tout ce que tu sais de la tour. Ce n'est pas beaucoup.",
      { if: { item: "page_pages" }, text: "La page arrachée au registre gris est sous ton oreiller. *Page Onze. Cession complète.* Tu la relis sans la lire." },
      "Il reste trois jours avant la Fête. Tu as trois jours pour te préparer, et ensuite une seule nuit.",
    ],
    choices: [{ label: "Dormir", fx: { flag: "ch:pie:1", resume: "PI_jour" }, to: "C_carrefour" }] }),

  // ================================================================ chapter 2 · la tour noire
  PI_jour: P({ title: "La veille de la Fête",
    fx: { time: 60 },
    text: [
      "Trois jours ont passé. Pallanche a doublé de volume. On dort dans les rues, sur les marches des églises, dans les barques du port. Demain soir, c'est la Nuit des Cloches, et ce soir, la tour ouvre ses portes basses aux premiers pèlerins.",
      { if: { has: "ysolde:voie=obeit" }, text: "Ce matin, une colonne de Corvannais attachés à une corde est entrée dans la tour par la porte de l'Est, sous l'escorte d'une chevalière aux armes de Brenne. La foule les a hués. Tu as compté. Cent dix-huit. Aucun n'est ressorti." },
      { if: { has: "ysolde:voie=deserte" }, text: "Ce matin, dans les faubourgs de l'Est, il y a eu du grabuge : une colonne de prisonniers qui s'est égaillée dans les ruelles, des soldats de la reine qui coupaient les cordes au lieu de les tenir, des gardes noirs qui couraient. Les Teinturiers en parlent encore. On dit que la chevalière est recherchée." },
      { if: { has: "ysolde:voie=ruse" }, text: "Une colonne de prisonniers est entrée dans la tour, ce matin. Une chevalière la conduisait. Il paraît qu'il manquait des noms, et qu'un petit greffier en gris a recompté trois fois, devant la porte, en remuant les lèvres." },
      { if: { seen: "EN_pallanche" }, text: "Devant la grille de la Chancellerie, une silhouette en habits de montagne demande à voir Maître Hylas. Les gardes ne l'écoutent pas. Elle insiste. Tu la regardes depuis le toit d'en face, parce qu'elle a l'air aussi perdue que toi le jour où tu es sorti du cachot." },
    ],
    choices: [
      { label: "Descendre parler à cette personne des montagnes", hide: { not: { seen: "EN_pallanche" } }, fx: { flag: "croise:pie_enfant" }, to: "PI_enfant" },
      { label: "Préparer ton entrée dans la tour", to: "PI_choix_entree" },
    ] }),

  PI_enfant: P({ title: "Quelqu'un qui cherche Hylas",
    text: [
      "Tu te laisses glisser le long d'une gouttière et tu rattrapes la silhouette au coin de la rue des Cordiers. De près, c'est quelqu'un de jeune, avec des yeux trop vieux, et une lettre pliée en quatre qu'il serre dans sa main comme on tient une rampe.",
      "« Hylas, dis-tu. Le vieux greffier aveugle. Il ne sort pas par la grille. Il sort par la porte des Teinturiers, derrière, chaque soir à vêpres, pour aller boire du vin de Corvanne chez la mère Tissot. Tout le monde le sait, dans le quartier. Personne ne le dit aux gens d'en haut. »",
      "Tu ne sais pas pourquoi tu le dis. Il a de la poussière blanche sur la manche.",
    ],
    choices: [{ label: "Repartir sur les toits", fx: { ep: ["perso", 500] }, to: "PI_choix_entree" }] }),

  PI_choix_entree: P({ title: "Quatre portes",
    text: [
      "La tour a quatre portes pour un homme comme toi, et tu n'en passeras qu'une.",
      { if: { has: "pie:plan_linge" }, text: "Les charrettes du linge, au quai Saint-Jean, à l'aube, sous les draps sales." },
      { if: { has: "pie:plan_cession" }, text: "Le jeton du Bureau, et la porte derrière le comptoir." },
      { if: { has: "pie:plan_clocher" }, text: "La corde de la Grosse, du clocher de Saint-Gilles jusqu'au mur." },
      { if: { has: "pie:faux_sceau" }, text: "Le faux sceau, la robe noire volée sur une corde à linge, et le front d'un greffier." },
    ],
    choices: [
      { label: "Sous les draps sales, dans la charrette des lavandières", hide: { not: { has: "pie:plan_linge" } }, to: "PI_linge" },
      { label: "Par le Bureau, avec le jeton des gros cédants", hide: { not: { has: "pie:plan_cession" } }, to: "PI_cession" },
      { label: "Par la corde de la Grosse, au-dessus de la rue", hide: { not: { has: "pie:plan_clocher" } }, to: "PI_corde" },
      { label: "Par la grande porte, en robe noire, avec le faux sceau", hide: { not: { has: "pie:faux_sceau" } }, to: "PI_sceau" },
    ] }),

  PI_linge: P({ title: "Les draps sales",
    text: [
      "Les lavandières du quai Saint-Jean sont six, fortes comme des portefaix, et la plus vieille te regarde grimper dans la charrette sans rien dire. Elle tire un drap sur toi. Il sent la sueur, le sang, l'urine, l'encre. Le linge des greffiers. La charrette s'ébranle.",
      "Au bout d'un temps qui n'en finit pas, des voix, une grille, des pavés plus lisses. Une main soulève le drap, à un pouce de ton visage, et le laisse retomber. Puis on décharge. Tu attends d'être seul. Tu sors.",
      "L'escalier du linge monte en colimaçon dans l'épaisseur du mur.",
    ],
    choices: [
      { label: "Monter, en sautant la troisième marche", hide: { not: { has: "pie:marche" } }, fx: { ep: ["perso", 400] }, to: "PI_scriptorium" },
      { label: "Monter, sans un bruit", hide: { has: "pie:marche" }, test: { dom: "discretion", label: "Discrétion" },
        win: { to: "PI_scriptorium" }, lose: { fx: { flag: "pie:alerte" }, to: "PI_garde_escalier" } },
    ] }),

  PI_cession: P({ title: "L'étage des Cessions",
    text: [
      "Au Bureau, Frère Baudoin regarde ton jeton, te regarde, et sourit. « Un gros cédant. Bienvenue. On vous attend là-haut. » Un garde t'ouvre la porte derrière le comptoir. Un escalier, un couloir aux murs nus, une salle d'attente où des gens sont assis sur des bancs, les mains sur les genoux, et regardent le mur.",
      "Personne ne les surveille. Il n'y a pas besoin. Ils ne savent plus pourquoi ils pourraient partir.",
      { if: { has: "pie:a_vendu" }, text: "Tu reconnais, sur le banc du fond, un vieux soldat à la jambe de bois qui attendait dans la file, le jour où tu as vendu. Il te sourit comme à un inconnu. Tu te demandes combien de fois il est monté ici." },
      "Au bout du couloir, une porte entrouverte, et le grattement de quarante plumes.",
    ],
    choices: [
      { label: "Traverser la salle comme si on t'avait appelé, et passer la porte", test: { dom: "social", label: "Aplomb", help: [{ if: { has: "pie:a_vendu" }, v: 10 }] },
        win: { to: "PI_scriptorium" }, lose: { fx: { flag: "pie:alerte" }, to: "PI_garde_escalier" } },
    ] }),

  PI_corde: P({ title: "La corde de la Grosse",
    text: [
      "Il est minuit. Dans le clocher de Saint-Gilles, Anseau a noué la corde de la Grosse à la poutre maîtresse et lancé l'autre bout, lesté d'un marteau, par-dessus la rue, jusqu'au créneau du mur de la Chancellerie. La corde est tendue au-dessus du vide, à soixante pieds des pavés. En bas, la rue est pleine de pèlerins qui chantent.",
      "« Je sonne quand tu es au milieu, dit Anseau. Comme ça, si tu tombes, personne n'entendra. » Il rit. Il ne plaisante pas.",
    ],
    choices: [
      { label: "Traverser, à la force des bras", test: { dom: "nature", label: "Escalade", help: [{ if: { souv: "pie:toits" }, v: 15 }] },
        win: { fx: { ep: ["perso", 600] }, to: "PI_scriptorium" }, lose: { fx: { flag: "pie:blesse", pv: -4 }, to: "PI_corde_chute" } },
    ] }),

  PI_corde_chute: P({ title: "Les mains ouvertes",
    text: [
      "Au milieu, tes mains s'ouvrent toutes seules. Tu tombes. La corde te fouette la cuisse, tu la rattrapes par le genou, par le coude, tu restes pendu la tête en bas au-dessus de la rue, et au-dessus de toi, toutes les cloches de Saint-Gilles se mettent à sonner. Personne ne lève la tête. Tu finis par atteindre le mur, en sang, en pleurant de rage. Tu y es.",
    ],
    choices: [{ label: "Te glisser dans la cour", to: "PI_scriptorium" }] }),

  PI_sceau: P({ title: "La grande porte",
    text: [
      "Tu as volé la robe sur une corde à linge des Clercs. Elle est trop longue. Tu l'as raccourcie à la dague. Le sceau de laiton pend à ton cou sur un cordon noir. Aux portes, dans le flot des greffiers qui rentrent de la place, tu montres le sceau sans t'arrêter, comme les autres, avec l'air ennuyé des gens qui ont du travail.",
    ],
    choices: [
      { label: "Passer", test: { dom: "social", label: "Aplomb", diff: -10 },
        win: { fx: { ep: ["perso", 600] }, to: "PI_scriptorium" }, lose: { fx: { flag: "pie:alerte" }, to: "PI_garde_escalier" } },
    ] }),

  PI_garde_escalier: P({ title: "Qui va là ?",
    combat: { title: "Le garde noir", enemies: ["garde_noir"], terrain: "bati", range: "contact",
      talk: { label: "« Frère Baudoin m'a fait monter. Va le lui demander, si tu ne me crois pas. »", diff: -20, win: { fx: { ep: ["perso", 500] }, to: "PI_scriptorium" } },
      win: { fx: { ep: ["seance", 1000], flag: "pie:garde_tue" }, to: "PI_scriptorium" },
      lose: { fx: { flag: "pie:pris" }, to: "PI_cachot" } },
    text: ["Un garde noir te barre le chemin, la main sur la poignée de son épée. Il te regarde de la tête aux pieds. « Toi, dit-il. Tu n'as rien à faire ici. »"],
    choices: [] }),

  PI_cachot: P({ title: "La cellule",
    text: [
      "Tu te réveilles dans une cellule sans fenêtre, avec la tête qui bourdonne. Ils t'ont fouillé. Ils n'ont pas trouvé saint Brice, cousu dans l'ourlet de ta chemise. Ils ne le trouvent jamais.",
      "La serrure est vieille. Ce sont toujours les prisons qui ont les plus vieilles serrures.",
    ],
    choices: [{ label: "Saint Brice, au travail", fx: { time: 2 }, to: "PI_scriptorium" }] }),

  PI_scriptorium: P({ title: "Les pages blanches",
    fx: { clue: "n_pages", meet: "linette_p" },
    text: [
      "C'est une longue salle voûtée, éclairée par des lampes à huile pendues au plafond. Quarante pupitres, en quatre rangs. À chaque pupitre, un enfant, en robe grise, la tête rasée, qui écrit. Ils ne lèvent pas les yeux. Ils ne parlent pas. On n'entend que le grattement des plumes, quarante plumes, comme une pluie fine sur un toit.",
      "Ils recopient des noms. Des listes de noms, sans fin, d'un registre ouvert sur un lutrin vers un grand livre relié de rouge.",
      "Elle est au deuxième rang, la sixième. Tu la reconnais à l'épi derrière la tête, qui repousse même rasé. Elle a dix ans maintenant. Elle a grandi.",
      { before: "pie:oublie_corneille", text: "Elle a des taches d'encre jusqu'aux coudes, comme Corneille." },
      { after: "pie:oublie_corneille", text: "Elle a des taches d'encre jusqu'aux coudes." },
      "Tu t'approches. Tu t'accroupis à côté d'elle. Tu dis : « Linette. »",
      { if: { not: { seen: "PI_sceau" } }, text: "Elle lève les yeux. Ils sont gris, comme ceux de votre mère. Ils ne te reconnaissent pas. « Je suis Page Onze, dit-elle poliment. Vous êtes un greffier ? Vous n'avez pas de robe. »" },
      { if: { seen: "PI_sceau" }, text: "Elle lève les yeux. Ils sont gris, comme ceux de votre mère. Ils ne te reconnaissent pas. « Je suis Page Onze, dit-elle poliment. Vous êtes un greffier ? Votre robe est coupée de travers. »" },
      { if: { has: "linette:nom_dit" }, text: "Puis, plus bas, sans quitter sa page des yeux : « Avant, je m'appelais Linette. C'est un maître qui me l'a dit. Je n'ai pas le droit de le savoir. »" },
    ],
    choices: [
      { label: "« Je suis Pie. Ton frère. Tu dormais contre moi, sous le pont des Teinturiers. »", to: "PI_linette_parle" },
      { label: "Poser le sifflet de saule sur son pupitre", hide: { not: { item: "sifflet_linette" } }, to: "PI_linette_sifflet" },
      { label: "Lui donner ton souvenir d'elle. Qu'elle sache, au moins, qu'on l'a aimée", tag: "Souvenir donné", stain: true, if: { souv: "pie:linette" }, why: "Tu ne l'as plus.",
        fx: { souv: "pie:linette", flag: "pie:souvenir_donne", ep: ["perso", 1500] }, to: "PI_linette_souvenir" },
    ] }),

  PI_linette_parle: P({ title: "Page Onze",
    text: [
      "Elle t'écoute avec attention, comme on écoute une leçon. Quand tu as fini, elle hoche la tête. « C'est une belle histoire. Je peux l'écrire ? On n'a pas le droit d'écrire ce qui n'est pas dans le registre, mais je la garderais pour moi. »",
      "Tu ne réponds pas. Elle se remet à écrire. Sa main ne tremble pas. *Mathieu Brun, des Aulnes. Jacquette Brun, des Aulnes. Hugues Brun…*",
    ],
    choices: [{ label: "Chercher où ils gardent ce qu'ils lui ont pris", to: "PI_archives" }] }),

  PI_linette_souvenir: P({ title: "Linette qui dort contre lui",
    text: [
      "Tu ne sais pas comment on fait. Tu fais comme Baudoin : tu prends son visage dans tes mains, et tu souffles. Doucement. Les nuits sous le pont. Le manteau. Son poids contre toi, sa respiration de petit animal, ses pieds froids sur ton ventre. Tu le lui donnes, tout, sans rien garder.",
      "Quand tu la lâches, quelque chose a changé dans ses yeux. Elle te regarde comme on regarde un endroit où on a vécu. « J'avais froid aux pieds, dit-elle. Tu râlais. »",
      "Tu ne sais pas de quoi elle parle. Tu sais que c'est vrai. Tu as un trou dans la poitrine de la forme d'une petite fille, et elle te prend la main.",
    ],
    choices: [{ label: "Chercher la sortie, sa main dans la tienne", fx: { flag: "pie:linette_suit" }, to: "PI_archives" }] }),

  PI_archives: P({ title: "Les archives des cessions",
    fx: { meet: "hylas_p" },
    text: [
      "Derrière le scriptorium, une porte basse, et derrière la porte, des étagères qui montent jusqu'à la voûte, chargées de petites boîtes de plomb, chacune avec une étiquette. Des milliers. *Peyrol, Jehan. Lebas, Marion.*",
      { after: "pie:linette_suit", text: "Linette s'est arrêtée sur le seuil, sans lâcher le chambranle. Elle regarde les étagères." },
      "Tu trouves la boîte de Linette au troisième rang. *Page Onze. Cession complète.* Elle est lourde, et froide, et quand tu la prends, tu entends à travers le plomb un rire de petite fille.",
      "Sur le grand pupitre du fond, ouvert, un registre relié de rouge sombre, plus grand que les autres, et sur la page, une liste, d'une écriture fine et serrée : *Nuit des Cloches. Les cent, ensemble, à minuit. Grand Livre : versement complet.*",
      "« Ne bouge pas », dit une voix derrière toi.",
      "Un vieil homme en robe noire est assis dans l'ombre, entre deux étagères, une canne d'ébène sur les genoux. Ses yeux sont blancs. Il est aveugle. Il ne bouge pas non plus.",
      { if: { seen: "PI_linge" }, text: "« Tu sens la suie, le plomb des gouttières et la sueur des lavandières, dit-il. Tu n'es pas un greffier. Tu es venu voler. Vole. Mais écoute d'abord. »" },
      { if: { not: { seen: "PI_linge" } }, text: "« Tu sens la suie et le plomb des gouttières, dit-il. Tu n'es pas un greffier. Tu es venu voler. Vole. Mais écoute d'abord. »" },
    ],
    choices: [{ label: "Écouter le vieil aveugle", to: "PI_hylas" }] }),

  PI_hylas: P({ title: "Maître Hylas",
    text: [
      "« Je m'appelle Hylas. Je suis greffier depuis cinquante ans. Ce que tu tiens dans la main, c'est la mémoire d'un enfant. Ce qui est ouvert sur ce pupitre, tu l'as lu. Tu n'as que deux mains, et l'alarme sonnera dans un quart d'heure, quand le garde de la ronde passera devant le scriptorium et comptera ses pages. »",
      "Il tourne vers toi ses yeux blancs. « Prends la boîte, et ta sœur retrouvera qui elle était. Prends la page du registre, et quelqu'un, en ville, pourra la lire. Prends l'enfant, si elle veut te suivre, et vous serez deux à courir. Les trois, tu n'y arriveras pas. Je le sais. J'ai essayé, une fois. »",
      { if: { all: [{ has: "croise:pie_enfant" }, { has: "hylas:oublie_enfant" }] }, text: "Tu lui dis que quelqu'un des montagnes le cherche, avec une lettre. Il fronce les sourcils, comme quelqu'un qui cherche un mot. « Je ne connais personne dans les montagnes », dit-il. Puis, après un temps : « Où ça ? »" },
      { if: { all: [{ has: "croise:pie_enfant" }, { not: { has: "hylas:oublie_enfant" } }] }, text: "Tu lui dis que quelqu'un des montagnes le cherche, avec une lettre. Il se fige. Pour la première fois, il a l'air vieux. « Déjà, dit-il. Il neige déjà, alors. » Il se lève. « Va. Je dois aller boire chez la mère Tissot, ce soir. Il y a quelqu'un que je dois attendre. »" },
      "Au loin, dans les couloirs, des pas, et le tintement d'un trousseau de clés.",
    ],
    choices: [
      { label: "La boîte de plomb : ses souvenirs. Tu reviendras pour elle", fx: { item: "boite_linette", flag: ["pie:choix=boite", "pie:hylas"], quest: "PI_linette", ep: ["histoire", 3000] }, to: "PI_fuite" },
      { label: "La page du registre : que Pallanche sache ce qui l'attend", fx: { item: "liste_nuit", clue: "n_nuit", flag: ["pie:choix=liste", "pie:hylas"], quest: "PI_linette", ep: ["histoire", 3000] }, to: "PI_fuite" },
      { label: "Linette elle-même. Elle se souviendra plus tard. Ou jamais", fx: { join: "linette", flag: ["pie:choix=linette", "pie:hylas"], quest: "PI_linette", ep: ["histoire", 3000] }, to: "PI_fuite" },
    ] }),

  PI_fuite: P({ title: "L'alarme",
    text: [
      "La cloche d'alarme de la tour sonne, une seule, sèche, au-dessus de ta tête. Dans le scriptorium, quarante plumes s'arrêtent en même temps. Des portes claquent. Tu cours.",
      { before: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette court à côté de toi, sans lâcher ta main, sans poser de questions, comme quelqu'un à qui on a appris à obéir à tout le monde." },
      { after: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette court à côté de toi, sans lâcher ta main, sans poser de questions." },
      { before: "pie:souvenir_donne", if: { has: "pie:choix=boite" }, text: "La boîte de plomb te glace la poitrine à travers ta chemise. Derrière toi, au deuxième rang du scriptorium, une petite fille en gris s'est remise à écrire." },
      { after: "pie:souvenir_donne", if: { has: "pie:choix=boite" }, text: "La boîte de plomb te glace la poitrine à travers ta chemise. Derrière toi, au deuxième rang du scriptorium, une petite fille en gris n'a pas repris sa plume. Elle regarde la porte." },
      { before: "pie:souvenir_donne", if: { has: "pie:choix=liste" }, text: "La page arrachée crisse sous ta chemise. Derrière toi, Linette s'est remise à écrire." },
      { after: "pie:souvenir_donne", if: { has: "pie:choix=liste" }, text: "La page arrachée crisse sous ta chemise. Derrière toi, Linette n'a pas repris sa plume. Elle regarde la porte." },
      "Deux gardes noirs, au bout du couloir, entre toi et la fenêtre.",
    ],
    choices: [
      { label: "Te battre pour passer", fight: { title: "Les gardes de la tour", enemies: [{ id: "garde_noir", n: 2 }], terrain: "bati",
        win: { fx: { ep: ["seance", 1500] }, to: "PI_fenetre" }, lose: { fx: { flag: "pie:blesse" }, to: "PI_fenetre_blesse" } } },
      { label: "Prendre l'autre couloir, au hasard, et courir plus vite qu'eux", test: { dom: "discretion", label: "Fuite", help: [{ if: { has: "pie:choix=linette" }, v: -10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "PI_fenetre" }, lose: { fx: { flag: "pie:blesse" }, to: "PI_fenetre_blesse" } },
    ] }),

  PI_fenetre_blesse: P({ title: "Une lame dans le dos",
    fx: { pv: -3 },
    text: ["Une lame t'ouvre le dos de l'épaule à la hanche, pas profond, juste assez pour que tu sentes ta chemise coller. Tu ne t'arrêtes pas. Tu trouves une fenêtre. Tu ne regardes pas en bas."],
    choices: [{ label: "Sauter", to: "PI_fenetre" }] }),

  PI_fenetre: P({ title: "Les toits",
    text: [
      "Les toits. Enfin. Tu cours sur les ardoises de la Chancellerie, puis sur celles du marché couvert, puis sur celles des Teinturiers, et derrière toi, les cris et les lanternes s'éloignent, parce que personne, dans cette ville, ne connaît les toits comme toi. Personne.",
      { if: { has: "pie:choix=linette" }, text: "Linette ne glisse pas une fois. Elle te suit de toit en toit, pieds nus, comme si elle l'avait toujours fait. Elle l'a toujours fait. Elle ne s'en souvient pas." },
    ],
    choices: [{ label: "Rentrer au grenier", to: "PI_fin" }] }),

  PI_fin: P({ title: "Pie, à l'aube de la Fête",
    fx: { flag: "prologue:pie", catchup: 4, catchupWhy: "les toits de Pallanche", ep: ["histoire", 4000] },
    text: [
      "L'aube se lève sur Pallanche, le jour de la Fête des Noms. De ton grenier, tu vois la tour noire, et sur la place aux Clercs, déjà, les files d'attente devant les pupitres.",
      { if: { has: "pie:choix=boite" }, text: "La boîte de plomb est sur le plancher, entre tes genoux. Elle rit, parfois, très bas. Tu ne sais pas l'ouvrir. Tu ne sais pas si tu as le droit. Linette est restée là-bas. Tu y retourneras. Tu l'as promis à une boîte." },
      { if: { has: "pie:choix=liste" }, text: "La page du registre est dépliée devant toi. *Les cent, ensemble, à minuit.* Il te reste une journée pour trouver quelqu'un qui te croira. Un voleur. Un faussaire. Tu ris, tout seul, dans ton grenier." },
      { before: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette dort sur ta paillasse, roulée en boule, les pieds froids. Elle ne sait pas qui tu es. Elle t'a demandé, avant de s'endormir, si tu étais son nouveau maître. Tu as dit non. Elle n'a pas compris." },
      { after: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette dort sur ta paillasse, roulée en boule, les pieds froids. De toi, elle n'a que les nuits sous le pont. Elle t'a demandé ton nom, avant de s'endormir. Elle l'a répété deux fois." },
      { before: "pie:choix=linette", if: { has: "pie:souvenir_donne" }, text: "Tu ne te souviens plus des nuits sous le pont. Tu sais seulement qu'il y a eu quelque chose, et que tu l'as donné, et que c'était ce que tu avais de mieux." },
      { after: "pie:choix=linette", if: { has: "pie:souvenir_donne" }, text: "Tu ne te souviens plus des nuits sous le pont. Tu sais seulement, quand tu la regardes, qu'il y a eu quelque chose, et que tu l'as donné, et que c'était ce que tu avais de mieux." },
      { if: { has: "corneille:noye" }, text: "Tu as encore, sous les ongles, la vase de la Pallante." },
      "Ce soir, c'est la Nuit des Cloches.",
    ],
    choices: [{ label: "Attendre la nuit", fx: { flag: "ch:pie:2" }, to: "C_carrefour" }] }),
};
