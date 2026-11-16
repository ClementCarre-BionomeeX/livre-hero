// Lot ii3 of "Le Trésor des Taiseurs": Port-Vasier (the wreckers' port at the end of the delta), Salomé Brac and
// La Bavarde (four ways to win her over), the Écumeurs of the Widow Corbière (deal, defy, ally, diving and bluffing
// contests), the sea route vasier <-> ecueils with its legs and eight sea events, the coast region, three side
// quests (the chart-maker's plate, the chapel's ex-voto, the tavern-keeper's son), five treasures.
var R = "@route";
var P = {};

// ==================================================================== the port (hub) and the town
Object.assign(P, {
  IIM_port: { act: "II", title: "Port-Vasier", place: "vasier", hub: true, routes: true, backName: "le port de Port-Vasier",
    text: [
      { first: true, text: "La route des vasières finit sur une digue de pierres noires, et Port-Vasier commence au bout, d'un seul coup, dans une odeur de goudron chaud, de varech et de poisson qui sèche sur des claies. Le port n'a pas de quai : il a la vase. À marée basse, les barques y sont couchées sur le flanc, et les gens vont de l'une à l'autre sur des planches posées en travers, un panier à la hanche." },
      { first: true, text: "Les maisons sont faites de bateaux. Tu reconnais une étrave dans un pignon, un bordé goudronné en guise de mur, un sabord de cabine qui sert de fenêtre à une boulangerie. Au bout de la jetée, une grande carcasse de navire échouée, des herbes sur le pont, porte un pavillon rouge barré d'or : la maison des Écumeurs. Plus près, sur la vase, une gabare de mer à voile au tiers, coque noire, nom peint en lettres blanches à la proue : *La Bavarde*." },
      { first: true, text: "La place du port {{echo#iim_place|sent la marée et la friture|garde la voix d'un crieur : « Trois noyés de la Banque cette année, et la Banque paie les cercueils, remerciez la Banque »}}. Des enfants jouent aux osselets avec des vertèbres de morue sur une ancre couchée." },
      { again: true, when: "day", text: "Port-Vasier, la vase luisante, les claies de poisson, le pavillon rouge des Écumeurs au bout de la jetée. Des femmes ravaudent des filets assises sur des coques retournées." },
      { again: true, when: "night", text: "Port-Vasier, la nuit. Des lanternes pendent aux étraves des maisons, et ces proues éclairées, tournées vers la mer, ont l'air d'une flotte échouée qui attendrait encore l'ordre d'appareiller. La marée monte en clapotant sous les planches. Le Hareng Saur est la seule porte encore ouverte, et elle chante." },
      { with: "lison", once: true, text: "Lison renifle l'air avec une grimace. « Port-Vasier. Ils vendent tout ce que la mer rend, et un peu de ce qu'elle n'a pas encore rendu. Garde ta bourse sous ta chemise. Les gens d'ici {{oreille#iim_lison_vasier|ne nous aiment pas beaucoup|en veulent aux Joncs-Bas depuis que ma grand-mère a refusé de rallumer le phare de l'Ouïe}}. »" },
      { with: "tibere", once: true, text: "Tibère regarde la jetée, les Écumeurs, la carcasse. « Au Guet, on envoyait ici les sergents qu'on voulait voir démissionner. Il y en a un qui est resté. Il tient une buvette, maintenant. »" },
      { after: "mandat", once: true, text: "Sur la porte du comptoir de la Banque, à l'angle de la place, une affiche neuve claque au vent. Ton signalement. On a mal dessiné ton nez." },
      { after: "salome:jointe", text: "La Bavarde flotte à présent au bout de son amarre, voile ferlée, prête. Salomé a fait repeindre le nom à la proue." },
      { after: "iim:ecumeurs_allies", text: "Sur la jetée, un Écumeur te salue en touchant son bonnet rouge. Ici, ça vaut un sauf-conduit." },
      { after: "iim:ecumeurs_ennemis", text: "Sur la jetée, deux Écumeurs crachent dans la vase quand tu passes, et ils attendent que tu le voies." },
    ],
    choices: [
      { label: "La taverne du Hareng Saur, sous son enseigne de poisson sec", to: "IIM_hareng" },
      { label: "La Bavarde, couchée sur la vase", hide: { has: "salome:jointe" }, to: "IIM_bavarde" },
      { label: "Monter à bord de La Bavarde", hide: { not: { has: "salome:jointe" } }, to: "IIM_bord" },
      { label: "Le chantier de radoub, au fond de l'anse", to: "IIM_chantier" },
      { label: "Le marché aux épaves, sous sa charpente de mâts", to: "IIM_marche" },
      { label: "L'échoppe de l'écrivain de cartes marines", to: "IIM_cartes" },
      { label: "La chapelle des noyés, sur la butte", to: "IIM_chapelle" },
      { label: "Le comptoir de la Banque Marrel", to: "IIM_facteur" },
      { label: "La jetée, jusqu'à la carcasse des Écumeurs", to: "IIM_ecumeurs" },
      { label: "Marcher sur la jetée, à la nuit, quand la marée descend", if: { night: true }, why: "Il faut attendre la nuit et la marée basse.", hide: { seen: "IIM_digue" }, to: "IIM_digue" },
    ] },

  IIM_hareng: { act: "II", title: "Le Hareng Saur", place: "vasier", backName: "la salle du Hareng Saur",
    taverne: { mise: 2, adversaire: "un écumeur borgne" }, shop: "iim_hareng",
    text: [
      { first: true, text: "Une salle basse, bâtie dans la cale d'un caboteur qu'on a tiré à terre et coupé en deux. Les membrures courbes font le plafond. Il y a des filets aux murs, un tonneau de rhum sur des tréteaux, et une odeur de hareng fumé si épaisse qu'on la mâche. Derrière le comptoir, une femme large aux avant-bras rouges essuie des gobelets d'étain : Clervie Hamon, la patronne." },
      { first: true, text: "« Vous venez des marais, dit-elle sans te regarder. Ça se voit aux bottes. Vous cherchez un bateau. Tout le monde qui vient des marais cherche un bateau. » Elle pose un gobelet devant toi. « Pour où ? » Tu dis les Écueils. Elle repose le torchon. « Les Écueils ? Les patrons d'ici n'y vont {{oreille#iim_clervie_paie|plus depuis la tempête d'automne|plus depuis que la Banque les paie pour rester au port}}. »" },
      { again: true, when: "day", text: "Le Hareng Saur à l'heure creuse : deux vieux pilotes qui jouent aux dés, Clervie qui compte ses tonneaux, un chat sur le comptoir." },
      { again: true, when: "night", text: "Le Hareng Saur plein à craquer, la fumée des pipes, un violon de bord qui joue faux, des Écumeurs aux bonnets rouges à la grande table. On chante une chanson où une noyée revient chercher son homme." },
      { before: "salome:jointe", text: "Au fond, seule à une table contre la membrure, une femme aux cheveux gris coupés court boit sans se presser. Une cicatrice blanche lui tire le coin de la bouche. Clervie suit ton regard. « Salomé Brac. Elle a le meilleur bateau du port, et elle ne sort plus. Ne lui parlez pas de sa femme. »" },
      { after: "iim:jaouen_libre", text: "Jaouen sert en salle, un tablier noué trop haut. Il te remplit ton gobelet sans que tu le demandes." },
    ],
    choices: [
      { label: "Écouter les tables, le cornet contre l'oreille", hide: { seen: "IIM_rumeurs" }, to: "IIM_rumeurs" },
      { label: "Demander à Clervie pourquoi elle a l'air d'attendre quelqu'un", hide: { any: [{ seen: "IIM_q_jaouen" }, { quest: "IIM_jaouen" }] }, to: "IIM_q_jaouen" },
      { label: "Annoncer à Clervie que la dette de Jaouen est effacée", big: true, hide: { any: [{ not: { has: "iim:jaouen_libre" } }, { quest: "IIM_jaouen" }] }, to: "IIM_q_jaouen_fin" },
      { label: "T'asseoir à la table de Salomé Brac", if: { night: true }, why: "Salomé ne vient boire ici que le soir.", hide: { any: [{ has: "salome:jointe" }, { seen: "IIM_salome_nuit" }] }, to: "IIM_salome_nuit" },
      { back: "IIM_port" },
    ] },

  IIM_rumeurs: { act: "II", title: "Ce que disent les tables", place: "vasier", backName: "la salle du Hareng Saur",
    text: [
      "Tu t'assieds dos au mur, un gobelet devant toi, et tu portes le cornet à ton oreille comme on se gratte la tempe. La salle change de son. Les rires restent des rires ; certains mots, dans certaines bouches, se mettent à trembler.",
      "À la table des pilotes, un vieux au bonnet de laine raconte en tapant sur la table : « Un monsieur de la ville est passé la semaine dernière, {{oreille#iim_lothaire_vu|pour acheter du poisson fumé|des gants gris aux mains, et il a loué Le Fidèle pour les Écueils à la prochaine lune}}. Il payait en ducats neufs. »",
      "Deux pêcheuses, plus loin, parlent du prix de la sardine. « La Banque reprend les barques de ceux qui ne paient pas, dit l'une. Moi, {{oreille|je paierai à la Saint-Jean|j'ai déjà vendu la barque à la Veuve, en cachette, pour qu'elle la cache au fond de sa carcasse}}. »",
      "À la grande table, un Écumeur tout en épaules lève son gobelet. « À la Veuve, qui {{oreille#iim_veuve_peur|n'a peur de rien|n'a pas dormi depuis que le Fidèle mouille dans la rade}} ! » Les autres boivent.",
      "Le violoneux, entre deux airs, dit au patron d'une barque : « Salomé Brac plongeait plus profond que n'importe qui ici. Maintenant, elle {{oreille|boit, et c'est son droit|vient tous les soirs regarder la porte, comme si quelqu'un allait entrer avec de l'eau plein les cheveux}}. »",
      { with: "lison", text: "Lison se penche vers toi, la bouche dans son gobelet. « Tu les écoutes avec ça, hein. Moi, je les écoute avec mes oreilles. Le vieux au bonnet ment quand il dit poisson fumé. Ça s'entend sans os. »" },
    ],
    fx: { ep: ["perso", 400] },
    choices: [{ back: "IIM_hareng" }] },

  IIM_chantier: { act: "II", title: "Le chantier de radoub", place: "vasier", backName: "le chantier de radoub",
    text: [
      { first: true, text: "Au fond de l'anse, sur une grève de galets noirs, des coques montées sur des tins de bois attendent qu'on les soigne. On calfate, on brûle de vieux brais dans des chaudrons, on scie des bordages en long, un homme dessus et un homme dessous dans la fosse. Le maître du chantier, Goulven Tréhorel, a une barbe grise tressée et un doigt en moins à chaque main." },
      { first: true, text: "« Si c'est pour une coque, j'en ai trois à vendre, dit-il. Il y en a {{pie|une solide comme un rocher|une dont la quille est pourrie sous la peinture fraîche, au droit du grand mât}}, une qui a besoin d'amour, et une que je ne vendrais pas à mon pire ennemi. Elles coûtent le même prix. À vous de deviner. »" },
      { again: true, text: "Le chantier, la fumée du brai, les scies. Goulven lève la main sans lâcher son maillet." },
      "Au bout de la grève, à moitié enfouie dans les galets, une très vieille carcasse sert de réserve à bois : une quille immense, noire comme du charbon, et des membrures plus épaisses qu'une cuisse. « Ça, dit Goulven, c'est un vaisseau du temps de la reine. On l'a trouvé dans la vase quand mon grand-père était petit. Du chêne qui ne pourrit plus. On en tire des chevilles. »",
      { after: "iim:bavarde_saisie", before: "iim:bavarde_libre", text: "« La Bavarde ? Je l'ai radoubée l'automne dernier, dit Goulven. Salomé me doit encore le cuivre de la carène. C'est pour ça que la Banque a mis sa chaîne : ils ont racheté ma créance. Moi, je l'aurais attendue dix ans. »" },
    ],
    choices: [
      { label: "Examiner la vieille quille du temps de la reine", hide: { seen: "IIM_quille" }, to: "IIM_quille" },
      { label: "Aller au comptoir de la Banque, pour la dette de Salomé Brac", hide: { any: [{ seen: "IIM_service" }, { has: "iim:bavarde_libre" }] }, if: { seen: "IIM_bavarde" }, why: "Tu ne connais pas encore Salomé Brac.", fx: { flag: "iim:bavarde_saisie" }, to: "IIM_service" },
      { back: "IIM_port" },
    ] },

  IIM_quille: { act: "II", title: "La quille de la reine", place: "vasier", backName: "la vieille quille",
    text: [
      "Tu enjambes les membrures. Le bois est si dur que ton couteau y glisse. Des chevilles de chêne, larges comme un pouce, sortent de la quille à intervalles réguliers, et une plaque de plomb clouée sur l'étambot porte des lettres effacées par la mer.",
      "Sous la plaque, au ras de l'étambot, une des chevilles {{pie#iim_cheville|est comme les autres, noire et fendue|est plus claire que les autres, et tournée à la main : un bouchon, pas une cheville}}. La plaque elle-même porte, gravé à la pointe, *{{loupe#iim_plaque|LA COURONNE DE SEL · SALVÈZE|LA COURONNE DE SEL · LE SCEAU DORT DANS LA QUILLE}}*.",
      { with: "gildas", text: "Frère Gildas passe la main sur la plaque de plomb, lentement, et la retire. « Un vaisseau royal, dit-il. Il en reste peu. Les Comptoirs les ont brûlés presque tous, la première année. »" },
      { if: { has: "metier:mains" }, text: "Tes mains connaissent ce genre de bois. Une cheville qu'on a tournée à la main pour boucher un trou, on la sent sous le doigt avant de la voir : elle est lisse là où les autres sont fibreuses." },
    ],
    choices: [
      { label: "Dévisser la cheville claire avec la pointe de ton couteau", hide: { any: [{ not: { any: [{ voile: "iim_cheville" }, { voile: "iim_plaque" }, { has: "metier:mains" }] } }, { has: "tresor:iim_sceau" }] },
        fx: { item: "iim_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iim_sceau", ep: ["perso", 800] }, to: "IIM_quille_sceau" },
      { label: "Demander à Goulven si tu peux fouiller la quille", hide: { has: "tresor:iim_sceau" }, test: { dom: "social", diff: -10, label: "Obtenir de fouiller un bois précieux", help: [{ if: { fac: "hautes", min: 10 }, v: 10 }, { with: "tibere", v: 5 }] },
        win: { fx: { item: "iim_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iim_sceau", ep: ["perso", 600] }, to: "IIM_quille_sceau" },
        lose: { fx: { ep: ["perso", 100] }, to: "IIM_chantier" } },
      { back: "IIM_chantier" },
    ] },

  IIM_quille_sceau: { act: "II", title: "Le sceau dans la quille", place: "vasier", backName: "la vieille quille",
    text: [
      "La cheville vient avec un bruit de bouchon. Derrière, dans un trou percé à la tarière et bourré de laine grasse, quelque chose de lourd roule dans ta paume : un sceau de bronze noirci, gros comme un œuf, avec une poignée en forme de poisson. Sur la face, à l'envers, une reine assise, la main sur la bouche.",
      "Goulven, qui t'a suivi{e} des yeux depuis ses tins, s'approche, regarde, et siffle entre ses dents. « Trois générations qu'on taille des chevilles là-dedans. » Il hausse les épaules. « Gardez-le. Le chêne est à moi. Ce qu'il y avait dedans était à elle. »",
    ],
    choices: [{ back: "IIM_chantier" }] },

  IIM_marche: { act: "II", title: "Le marché aux épaves", place: "vasier", backName: "le marché aux épaves", shop: "iim_marche",
    text: [
      { first: true, text: "Une halle sans murs, dont la charpente est faite de vieux mâts plantés dans la vase. Dessous, sur des tréteaux, tout ce que la mer a rendu cette saison : des tonneaux défoncés, des cordages, des poulies, des bottes dépareillées, des coffres vides, une figure de proue en forme de femme qui a perdu son nez et garde malgré tout l'air de vous juger, des bouteilles de verre vert encore bouchées. Chaque objet porte un bout de ficelle et un prix écrit à la craie." },
      { first: true, text: "L'étal le plus grand appartient à Gaïd, la fripière d'épaves, une petite femme ridée qui fume une pipe en terre et regarde ta bourse avant ton visage. Elle travaille pour la Veuve Corbière : un dixième de chaque vente part à la carcasse." },
      { again: true, text: "Le marché aux épaves. Gaïd tire sur sa pipe et lève un sourcil. « Il est arrivé du neuf. Rien pour vous. »" },
      "Au bout de l'étal, une boîte de bois flotté porte une étiquette à la craie : *{{loupe#iim_etiquette|lot de la Sainte-Agnès, 3 liards|lot de la chapelle, ne pas vendre aux gens du pays}}*. Dedans, des ex-voto de cire fondue, des chapelets de nacre, une lampe de cuivre.",
    ],
    choices: [
      { label: "Fouiller l'étal des curiosités de Gaïd", hide: { seen: "IIM_etal" }, to: "IIM_etal" },
      { label: "Montrer à Gaïd la carte sur parchemin que Lhermite t'a décrite", hide: { any: [{ not: { has: "iim:carte_cherche" } }, { seen: "IIM_q_carte_marche" }] }, to: "IIM_q_carte_marche" },
      { label: "Demander à Gaïd qui lui a vendu la boîte de la chapelle", hide: { any: [{ not: { has: "iim:exvoto_cherche" } }, { seen: "IIM_q_exvoto_piste" }] }, to: "IIM_q_exvoto_piste" },
      { back: "IIM_port" },
    ] },

  IIM_etal: { act: "II", title: "L'étal des curiosités", place: "vasier", backName: "l'étal de Gaïd",
    text: [
      "Gaïd pose devant toi, avec des gestes de reliquaire, ce qu'elle appelle ses belles pièces. Il y a d'abord un collier : « Les perles de la reine Ysaure, remontées de Sorne par mon pauvre mari. Quatre-vingts liards, parce que c'est vous. » Les perles {{pie#iim_perles|ont l'orient laiteux des vraies perles de mer|sont des billes de verre soufflé trempées dans une colle d'écailles de poisson}}.",
      "Il y a ensuite, dans un fouillis de clous rouillés, une boîte à sel noircie que Gaïd ne regarde même pas : « Ça, deux liards. » La boîte {{pie#iim_saliere|est de l'étain bon marché, cabossé|est d'argent massif sous la crasse, avec un poinçon de l'orfèvre de la reine sous le pied}}.",
      "Il y a enfin une lunette de marine en laiton, dont Gaïd dit qu'elle voit jusqu'aux Écueils. Elle {{pie|est un bel instrument de pilote|a une lentille fêlée, collée à la résine, qui fait voir deux phares au lieu d'un}}.",
      { with: "tibere", text: "Tibère soupèse le collier et le repose. « Ma femme avait le même. Il venait des Halles. Il a fondu au soleil, le premier été. »" },
    ],
    choices: [
      { label: "Acheter le collier des perles de la reine (80 liards)", hide: { has: "iim:perles_achetees" }, fx: { gold: -80, item: "iim_perles", flag: "iim:perles_achetees" }, to: "IIM_etal_fin" },
      { label: "Acheter la vieille boîte à sel pour deux liards, d'un air distrait", hide: { any: [{ not: { voile: "iim_saliere" } }, { has: "tresor:iim_saliere" }] }, fx: { gold: -2, item: "iim_tr_saliere", clock: { tresors: 1 }, flag: "tresor:iim_saliere", ep: ["perso", 700] }, to: "IIM_etal_fin" },
      { label: "Dire à Gaïd, à voix basse, de quoi sont faites ses perles", hide: { any: [{ not: { voile: "iim_perles" } }, { has: "iim:gaid_confondue" }] }, fx: { flag: "iim:gaid_confondue", fac: { ecumeurs: 3 }, gold: 10 }, to: "IIM_etal_gaid" },
      { label: "Acheter la lunette de marine (30 liards)", hide: { has: "iim:lunette" }, fx: { gold: -30, flag: "iim:lunette" }, to: "IIM_etal_fin" },
      { back: "IIM_marche" },
    ] },

  IIM_etal_fin: { act: "II", title: "Marché conclu", place: "vasier", backName: "l'étal de Gaïd",
    text: [
      "Gaïd empoche les pièces sans les compter : elle les a comptées pendant qu'elles sortaient de ta bourse. Elle enveloppe ton achat dans un morceau de voile goudronnée et le noue avec un bout de ligne.",
      { after: "tresor:iim_saliere", text: "La boîte à sel pèse dans ta poche plus lourd que de l'étain. Tu la nettoieras plus tard, loin de l'étal." },
      { after: "iim:perles_achetees", text: "Le collier tient chaud dans ta main. Gaïd te regarde l'emporter avec une tendresse sincère, celle qu'on a pour un client." },
    ],
    choices: [{ back: "IIM_marche" }] },

  IIM_etal_gaid: { act: "II", title: "Les perles de Gaïd", place: "vasier", backName: "l'étal de Gaïd",
    text: [
      "Tu prends une perle entre deux ongles et tu la grattes. Une écaille de colle se détache, et dessous le verre brille, net et bête. Gaïd regarde ta main, puis ton visage, et tire longuement sur sa pipe.",
      "« Bon œil, dit-elle enfin. Les gens de la ville, d'habitude, ils voient Sorne et ils sortent la bourse. » Elle te glisse dix liards dans la paume en refermant tes doigts dessus. « Pour votre silence. Et dites à la Veuve que Gaïd vous a trouvé{e} honnête. Ça vous ouvrira la carcasse. »",
    ],
    choices: [{ back: "IIM_marche" }] },
});

// ==================================================================== the chart-maker, the chapel, the Bank's office, the jetty
Object.assign(P, {
  IIM_cartes: { act: "II", title: "L'écrivain de cartes", place: "vasier", backName: "l'échoppe de Maître Lhermite",
    text: [
      { first: true, text: "Une échoppe étroite entre deux maisons-bateaux, avec une enseigne en forme de compas. Dedans, des cartes partout : épinglées aux murs, roulées dans des paniers, tendues sur des cadres pour sécher. Elles sentent la colle de peau et l'encre de noix. Un vieil homme aux lunettes épaisses comme des fonds de bouteille y colle son nez, une plume à la main : Maître Brieuc Lhermite, qui a dessiné toutes les côtes du delta." },
      { first: true, text: "Un garçon roux aux doigts noirs d'encre broie du noir de fumée dans un mortier, au fond. Il lève les yeux sur toi, les baisse aussitôt. « Bleiz, mon apprenti, dit Lhermite. Il a de bonnes mains et une mauvaise tête. »" },
      { again: true, text: "L'échoppe de Lhermite, ses cartes qui sèchent, l'odeur de colle. Le vieil homme te reconnaît à la voix." },
      "Au-dessus de l'établi, une grande carte des Écueils, la plus belle de l'échoppe, porte dans un cartouche orné : *{{loupe#iim_carte_ouie|Phare de l'Ouïe, feu éteint depuis cent ans|Phare de l'Ouïe : on y entre par la mer, sous la lanterne, quand la mer descend}}*. Tout autour, des chiffres minuscules donnent la profondeur, brasse par brasse.",
      { before: "iim:carte", text: "« Si c'est la carte des Écueils que vous voulez, dit Lhermite sans lever le nez, je ne peux plus vous la tirer. On m'a volé la plaque. Trente ans de sondes, gravées sur cuivre. Il en court déjà des copies au marché, mauvaises, avec des passes là où il y a des roches. Des gens vont se noyer avec mon nom en bas de la feuille. »" },
      { after: "iim:carte", text: "La plaque de cuivre a repris sa place sur la presse. Lhermite la caresse en passant, comme on flatte un chien." },
    ],
    choices: [
      { label: "Proposer à Lhermite de retrouver sa plaque", hide: { any: [{ has: "iim:carte_cherche" }, { quest: "IIM_carte" }] }, fx: { flag: "iim:carte_cherche", questSeen: "IIM_carte" }, to: "IIM_q_carte" },
      { label: "Parler à Bleiz, seul à seul, pendant que son maître dessine", hide: { any: [{ not: { has: "iim:carte_cherche" } }, { seen: "IIM_q_carte_bleiz" }, { quest: "IIM_carte" }] }, to: "IIM_q_carte_bleiz" },
      { label: "Rendre la plaque de cuivre à Maître Lhermite", hide: { any: [{ not: { item: "iim_plaque" } }, { quest: "IIM_carte" }] }, fx: { drop: "iim_plaque" }, to: "IIM_q_carte_fin" },
      { back: "IIM_port" },
    ] },

  IIM_q_carte: { act: "II", title: "La plaque volée", place: "vasier", backName: "l'échoppe de Maître Lhermite",
    text: [
      "Lhermite pose sa plume. Il te regarde longtemps, ou plutôt il regarde la forme claire que tu fais devant sa fenêtre. « Retrouvez-la, et je vous tire la carte des Écueils pour rien. La seule juste. Avec elle, on passe la ceinture des Sourds sans toucher. »",
      "« Qui l'a prise ? Un voleur de nuit. La porte était fermée le matin, et le volet aussi. » Au fond, le mortier de Bleiz s'est arrêté. « Mon apprenti {{oreille#iim_bleiz_couvre|dormait à l'étage, il n'a rien entendu|a passé cette nuit-là ailleurs, et je fais semblant de l'ignorer}}, dit le vieil homme. Les copies, elles, se vendent au marché aux épaves. Gaïd en a sûrement. »",
      { with: "lison", text: "Lison feuillette les cartes d'un doigt. « Les Joncs-Bas sont là-dessus, dit-elle. Juste. Même le chenal des anguilles. Ce vieux-là a ramé partout. »" },
    ],
    choices: [{ back: "IIM_cartes" }] },

  IIM_q_carte_bleiz: { act: "II", title: "Bleiz", place: "vasier", backName: "l'échoppe de Maître Lhermite",
    text: [
      "Tu t'accroupis près du mortier. Bleiz broie plus fort. Il a dix-neuf ans, peut-être, des taches d'encre jusqu'aux coudes et des cernes de joueur. « Je dormais, dit-il avant que tu aies rien demandé. Là-haut. Je {{oreille#iim_bleiz_ment|n'ai rien entendu de la nuit|l'ai vendue au facteur de la Banque, vingt ducats, pour payer Riwal, et le vieux le sait}}. »",
      { after: "voile:iim_bleiz_couvre", text: "Tu n'as pas besoin de lui dire que son maître l'a couvert. Ça se lit à la façon dont il évite de regarder vers l'établi." },
    ],
    choices: [
      { label: "« Le facteur de la Banque t'a payé combien ? »", hide: { not: { voile: "iim_bleiz_ment" } }, fx: { flag: "iim:plaque_segur", ep: ["perso", 400] }, to: "IIM_q_carte_aveu" },
      { label: "Lui dire que les copies fausses noieront des gens, et attendre", test: { dom: "social", diff: -10, label: "Faire parler un garçon qui a honte", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "lison", v: 5 }] },
        win: { fx: { flag: "iim:plaque_segur", ep: ["perso", 400] }, to: "IIM_q_carte_aveu" }, lose: { fx: { ep: ["perso", 100] }, to: "IIM_cartes" } },
      { back: "IIM_cartes" },
    ] },

  IIM_q_carte_aveu: { act: "II", title: "L'aveu de Bleiz", place: "vasier", backName: "l'échoppe de Maître Lhermite",
    text: [
      "Le pilon s'arrête. Bleiz regarde ses mains noires. « Vingt ducats. Je devais trente liards à Riwal, aux dés, et Riwal ajoute un liard par jour. Le facteur m'a dit qu'il voulait seulement tirer une copie, pour un bateau de la Banque, et qu'il rendrait la plaque. Il ne l'a pas rendue. »",
      "« Les copies du marché, c'est pas lui. C'est Riwal, qui les a fait graver de mémoire, mal, par un tonnelier. » Il baisse la voix. « La plaque est dans le comptoir de la Banque, dans le coffre de Ségur. Le Fidèle part avec une copie juste. Tous les autres partiront avec des fausses. »",
    ],
    fx: { clue: "iim_c_plaque" },
    choices: [{ back: "IIM_cartes" }] },

  IIM_q_carte_fin: { act: "II", title: "La carte des Écueils", place: "vasier", backName: "l'échoppe de Maître Lhermite",
    text: [
      "Lhermite prend la plaque à deux mains, la tourne vers la fenêtre, et suit les creux du bout de l'ongle, longtemps, comme on lit. Puis il l'encre, la pose sur la presse, et tire une feuille. L'odeur de l'encre fraîche emplit l'échoppe.",
      "« La ceinture des Sourds, dit-il en soufflant sur le papier. Trois passes, et une seule bonne : celle-ci, au nord, quand la mer est à mi-marée. L'Ouïe est derrière. » Il te tend la carte. « Et vous direz à Bleiz qu'il peut rester. Je dirai qu'il a retrouvé la plaque. Il aura honte toute sa vie, c'est assez. »",
      { with: "salome", text: "Salomé prend la carte, la tourne, la retourne. « C'est la bonne, dit-elle. Maïwenn en avait une comme ça. Elle est au fond avec elle. »" },
    ],
    fx: { item: "iim_carte_ecueils", quest: "IIM_carte", flag: "iim:carte", fac: { hautes: 5 }, ep: ["perso", 1200] },
    choices: [{ back: "IIM_cartes" }] },

  IIM_chapelle: { act: "II", title: "La chapelle des noyés", place: "vasier", backName: "la chapelle des noyés",
    text: [
      { first: true, text: "Sur la butte qui domine le port, une chapelle basse, aux murs chaulés, au toit de lauzes vertes de mousse. La porte est un panneau de cale. Dedans, les murs sont couverts du sol au plafond de planches de bordé, et sur chaque planche, un nom gravé au couteau, une date, parfois un bateau. Des ex-voto pendent à la charpente : des navires de bois, de cire, d'os, qui tournent doucement dans le courant d'air, chacun sur son fil, avec la lenteur de ce qui a renoncé à arriver." },
      { first: true, text: "Un vieil homme en soutane rapiécée grave un nom à la lueur d'une chandelle, la langue entre les dents : Tugdual, le sacristain. Il te fait signe d'attendre, finit sa lettre, souffle sur les copeaux." },
      { again: true, text: "La chapelle des noyés, les noms aux murs, les navires qui tournent. Tugdual grave, toujours un nom de plus." },
      "La chapelle {{echo#iim_chapelle_maiwenn|sent la cire froide et le sel|garde une voix de femme, basse, un matin : « Il veut que je descende seule, et c'est lui qui tiendra la corde. Salomé, s'il remonte sans moi, regarde ses mains »}}. Devant l'autel, quelqu'un a laissé une lanterne de la nuit des Lanternes, éteinte, et une cordelette de chanvre nouée en huit.",
      "Au-dessus de l'autel, la charpente {{echo#iim_chapelle_ouie|grince sous le vent de mer|rend une voix d'homme très ancienne : « Éteignez l'Ouïe. Que les Comptoirs se perdent dans les Sourds, et nous avec s'il le faut »}}.",
      { before: "iim:exvoto", text: "Au milieu de la charpente, un crochet de fer pend, vide, au bout de sa chaîne. Autour de lui, les autres ex-voto ont l'air de garder une place." },
    ],
    choices: [
      { label: "Demander à Tugdual pourquoi le grand crochet est vide", hide: { any: [{ has: "iim:exvoto_cherche" }, { quest: "IIM_exvoto" }] }, fx: { flag: "iim:exvoto_cherche", questSeen: "IIM_exvoto" }, to: "IIM_q_exvoto" },
      { label: "Lire le mur des noms", hide: { seen: "IIM_mur" }, to: "IIM_mur" },
      { label: "Rendre le navire d'argent à Tugdual", hide: { any: [{ not: { item: "iim_exvoto" } }, { quest: "IIM_exvoto" }] }, fx: { drop: "iim_exvoto" }, to: "IIM_q_exvoto_fin" },
      { label: "Répéter à Salomé, tout bas, ce que la chapelle t'a rendu", with: "salome", hide: { any: [{ not: { voile: "iim_chapelle_maiwenn" } }, { has: "iim:maiwenn_voix" }] }, fx: { flag: "iim:maiwenn_voix", conf: { salome: 10 }, ep: ["perso", 1000] }, to: "IIM_chapelle_salome" },
      { back: "IIM_port" },
    ] },

  IIM_mur: { act: "II", title: "Le mur des noms", place: "vasier", backName: "la chapelle des noyés",
    text: [
      "Les noms les plus anciens sont en haut, si usés qu'on les lit du doigt. Les plus récents sont en bas, à hauteur de main, et la sève sort encore de certains. Beaucoup de Corbière. Des Hamon. Des Tréhorel. Une planche entière pour la grande tempête d'il y a vingt ans, quarante noms, et un seul bateau.",
      "Près de la porte, une planche plus claire porte : *{{loupe#iim_planche|Maïwenn Brac, plongeuse, écueil des Sourds. Que la mer la garde|Maïwenn Brac, plongeuse, écueil des Sourds. La corde est remontée coupée. Je le dis ici, puisqu'ils ne veulent pas l'entendre en bas}}*. Les lettres du dessous ont été tracées à la pointe d'un clou, très fin, sous les grandes.",
      "Tugdual s'est approché derrière toi. « Elle vient chaque semaine, dit-il. Salomé. Elle touche la planche et elle repart. Elle {{oreille|vient seulement toucher le bois|a gravé le dessous elle-même, une nuit, et elle croit que je dormais}}. »",
    ],
    fx: { ep: ["perso", 300] },
    choices: [{ back: "IIM_chapelle" }] },

  IIM_chapelle_salome: { act: "II", title: "Ce que la chapelle a gardé", place: "vasier", with: "salome", backName: "la chapelle des noyés",
    text: [
      { with: "salome", text: "Tu lui dis les mots tels que le diapason te les a rendus, sans rien y mettre. Salomé reste immobile. Elle regarde la lanterne éteinte devant l'autel, et la cordelette nouée en huit, et tu comprends que c'est elle qui les a posées là." },
      { with: "salome", text: "« Regarde ses mains, répète-t-elle. Je les ai regardées. Il avait ses gants gris. Il les a toujours. » Elle se mord la lèvre jusqu'à ce que la cicatrice blanchisse. « Merci. Je savais. Maintenant, je l'ai entendue le dire. Ça change tout. »" },
    ],
    choices: [{ back: "IIM_chapelle" }] },

  IIM_q_exvoto: { act: "II", title: "Le crochet vide", place: "vasier", backName: "la chapelle des noyés",
    text: [
      "Tugdual pose son couteau. « Le navire d'argent. Les veuves de la grande tempête l'ont fait faire, il y a vingt ans, en fondant leurs alliances. Quarante alliances. Il y avait les noms sous la quille. On l'a volé à la nuit des Lanternes, pendant que tout le port était sur l'eau. »",
      "« Je ne demande pas qui. » Il reprend son couteau. « Je {{oreille#iim_tugdual_sait|n'ai aucune idée de qui a fait ça|sais très bien qui, c'est le fils de Clervie, et je veux épargner sa mère}}. Si vous le trouvez au marché, rachetez-le, je vous rendrai l'argent. Je n'ai pas grand-chose. »",
    ],
    fx: { ep: ["perso", 300] },
    choices: [{ back: "IIM_chapelle" }] },

  IIM_q_exvoto_piste: { act: "II", title: "La boîte de la chapelle", place: "vasier", backName: "l'étal de Gaïd",
    text: [
      "Gaïd regarde la boîte, puis toi, et tire sur sa pipe. « La boîte, c'est Riwal qui me l'a donnée à vendre. Le navire d'argent était dedans. Riwal l'a repris le lendemain : il a dit que c'était trop beau pour mon étal. Il l'a là-bas, dans la carcasse. »",
      "« Riwal l'a eu de qui ? » Gaïd hausse les épaules. « D'un garçon qui lui devait de l'argent. Ils lui doivent tous de l'argent. » Elle ajoute, plus bas, en regardant ailleurs : « Un garçon {{oreille#iim_gaid_jaouen|que je ne connais pas|qui sert au Hareng Saur, et qui a pleuré en le posant sur mon étal}}. »",
    ],
    fx: { flag: "iim:exvoto_riwal", ep: ["perso", 300] },
    choices: [{ back: "IIM_marche" }] },

  IIM_q_exvoto_fin: { act: "II", title: "Le navire d'argent", place: "vasier", backName: "la chapelle des noyés",
    text: [
      "Tugdual prend le navire d'argent dans ses mains abîmées, le retourne, lit les noms sous la quille du bout du pouce, un par un, en remuant les lèvres. Puis il monte sur un tabouret et l'accroche au grand crochet. Le petit navire tourne une fois sur lui-même, s'arrête, et pointe sa proue vers la mer.",
      "« Les veuves viendront demain, dit Tugdual. Je ne leur dirai pas qui l'a pris. Je leur dirai qui l'a rapporté. » Il te bénit d'un geste, maladroitement, comme on fait quand on a perdu l'habitude.",
      { after: "iim:jaouen_libre", text: "« Et le petit Hamon, ajoute-t-il, il viendra sonner la cloche dimanche. Je le lui ai demandé. Il a dit oui. »" },
    ],
    fx: { quest: "IIM_exvoto", flag: "iim:exvoto", fac: { hautes: 10, ecumeurs: -2 }, ep: ["perso", 1200] },
    choices: [{ back: "IIM_chapelle" }] },

  IIM_facteur: { act: "II", title: "Le comptoir de la Banque", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      { first: true, text: "La seule maison de pierre de Port-Vasier, ce qui renseigne assez sur le chemin que prend ici l'argent des autres : deux étages, des barreaux aux fenêtres, une plaque de cuivre poli à la porte, *Banque Marrel · Comptoir de Port-Vasier*. Dedans, un comptoir de chêne, une balance, des registres, et un homme rasé de près dans un habit noir que le sel a blanchi aux coutures : Maître Ségur, le facteur. Deux gardes en vareuse jouent aux cartes près du poêle." },
      { first: true, text: "« Vous venez emprunter, dit Ségur avec un sourire aimable. Tout le monde vient emprunter. La Banque {{oreille#iim_segur_preter|aime aider les gens de la mer|aime prêter aux pêcheurs qui ne rendront pas, parce qu'ensuite elle a leur barque}}. »" },
      { again: true, text: "Le comptoir de la Banque. Ségur lève les yeux de son registre et sourit, du même sourire." },
      { after: "mandat", text: "Sur la porte, ton signalement. Ségur te regarde, puis regarde l'affiche, puis te regarde encore. « {{oreille#iim_segur_mandat|Vous ressemblez à quelqu'un|Cinquante ducats, et Lothaire Brunel veut l'instrument intact, je n'ai que deux gardes}}, dit-il doucement. »" },
      "Derrière le comptoir, sur un pupitre, un gros registre relié de toile goudronnée reste ouvert. Le titre, en haut de la page, dit *Plongées et locations*.",
    ],
    choices: [
      { label: "Lire le registre de Ségur pendant qu'il a le dos tourné", hide: { seen: "IIM_registre" }, test: { dom: "discretion", diff: -10, label: "Lire un registre sous le nez d'un banquier", help: [{ if: { has: "metier:lire" }, v: 15 }, { with: "lison", v: 5 }] },
        win: { to: "IIM_registre" }, lose: { fx: { fac: { banque: -3 } }, to: "IIM_facteur_chasse" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { seen: "IIM_registre" }, test: { dom: "social", diff: 0, label: "Tibère occupe le facteur avec une histoire de Guet" },
        win: { fx: { conf: { tibere: 3 } }, to: "IIM_registre" }, lose: { to: "IIM_facteur_chasse" } },
      { label: "Demander à voir le registre, comme un client qui veut louer un bateau", hide: { seen: "IIM_registre" }, test: { dom: "social", diff: -20, label: "Se faire passer pour un client sérieux", help: [{ if: { gold: { min: 100 } }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "IIM_registre" }, lose: { to: "IIM_facteur_chasse" } },
      { label: "Réclamer à Ségur la plaque de cuivre de Maître Lhermite", hide: { any: [{ not: { has: "iim:plaque_segur" } }, { item: "iim_plaque" }, { quest: "IIM_carte" }] }, to: "IIM_q_carte_coffre" },
      { label: "Parler de la saisie de La Bavarde", hide: { any: [{ not: { has: "iim:bavarde_saisie" } }, { has: "iim:bavarde_libre" }] }, to: "IIM_service" },
      { back: "IIM_port" },
    ] },

  IIM_facteur_chasse: { act: "II", title: "Dehors", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      "Ségur referme le registre d'un coup sec, sans cesser de sourire. « La Banque prête, dit-il. Elle ne montre pas. » Un des gardes se lève, pose ses cartes, et t'ouvre la porte en grand, très poliment.",
      { after: "mandat", text: "Derrière toi, tu entends Ségur dire au garde, assez fort pour que tu l'entendes : « Note l'heure. » Il n'envoie personne. Pas encore." },
      "Sur la place, le vent de mer te prend en pleine figure. Il y a d'autres façons de savoir ce que la Banque fait à Port-Vasier : les tables du Hareng Saur, la carcasse des Écumeurs, et la nuit.",
    ],
    choices: [{ back: "IIM_port" }] },

  IIM_registre: { act: "II", title: "Plongées et locations", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      "Le registre est tenu d'une belle main de clerc, en colonnes : date, bateau, patron, objet, somme. Tu remontes les pages. Trois ans en arrière, une ligne : *{{loupe#iim_registre_corde|9 mai. Le Fidèle. Plongée sur l'écueil des Sourds pour M. Brunel. Plongeuse M. Brac, disparue. Rien remonté|9 mai. Le Fidèle. Plongée pour M. Brunel. Corde tenue par M. Brunel lui-même. Un coffret remonté, porté à son compte, hors registre}}*.",
      "Et tout en bas de la dernière page, d'une encre encore fraîche : *{{loupe#iim_registre_fidele|Le Fidèle, location au mois, pêche au large|Le Fidèle, pour M. Brunel, les Écueils, l'Ouïe, nouvelle lune. Douze hommes armés}}*.",
      { if: { has: "metier:lire" }, text: "Tu connais les registres de prêteurs. Une ligne portée hors registre, dans un livre de la Banque, se signe toujours en marge d'une croix minuscule. Il y a une croix au 9 mai." },
    ],
    fx: { ep: ["perso", 600] },
    choices: [{ back: "IIM_facteur" }] },

  IIM_digue: { act: "II", title: "La jetée, à la nuit", place: "vasier", when: "night", backName: "la jetée",
    text: [
      "La marée descend vite, en suçant les pierres. Tu marches sur la jetée jusqu'à mi-chemin de la carcasse, une lanterne sourde à la main ; de part et d'autre, la vase découverte luit faiblement, comme le dos d'une bête qui dormirait sous le port. Les pierres de la jetée, en bas, sont de grosses pierres taillées, plus vieilles que le port : un ancien môle, du temps où l'on venait ici en vaisseau.",
      "Près de la carcasse, deux silhouettes parlent bas, sous le pavillon. L'une porte le bonnet rouge des Écumeurs, l'autre un habit noir blanchi aux coutures. « La Veuve {{oreille#iim_riwal_vend|ne saura rien de notre affaire|ne saura pas que je lui vends ses propres routes, tant que vous payez en or, Maître Ségur}}, dit le bonnet rouge. » Riwal. L'autre lui remet une bourse.",
      "En contrebas, découverte par la marée, une niche entre deux blocs. Dedans, pris dans la vase, {{pie#iim_fanal|un vieux fanal rouillé, tordu|un fanal de bronze doré sous le vert-de-gris, aux armes de la reine}}.",
    ],
    fx: { ep: ["perso", 400] },
    choices: [
      { label: "Descendre entre les blocs, à la marée qui baisse, chercher le fanal", hide: { has: "tresor:iim_fanal" }, test: { dom: "nature", diff: -10, label: "Descendre sur des pierres glissantes, de nuit", help: [{ if: { voile: "iim_fanal" }, v: 15 }, { if: { item: "corde" }, v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { item: "iim_tr_fanal", clock: { tresors: 1 }, flag: "tresor:iim_fanal", ep: ["perso", 800] }, to: "IIM_digue_fanal" },
        lose: { fx: { pv: -4 }, to: "IIM_digue_chute" } },
      { back: "IIM_port" },
    ] },

  IIM_digue_fanal: { act: "II", title: "Le fanal", place: "vasier", backName: "la jetée",
    text: [
      "Tu descends de bloc en bloc, la corde à la main, et la vase te prend jusqu'à la cheville. Le fanal vient avec un bruit de succion. Il est lourd, plein de boue ; tu le vides en le secouant, et sous tes doigts le métal est lisse, froid, ouvragé.",
      "Là-haut, sur la jetée, Riwal et l'homme en noir se sont séparés. Personne n'a regardé en bas. Tu remontes avec un fanal de la reine sous le bras et de la vase jusqu'aux genoux.",
    ],
    choices: [{ back: "IIM_port" }] },

  IIM_digue_chute: { act: "II", title: "Dans la vase", place: "vasier", backName: "la jetée",
    text: [
      "Une pierre roule sous ta botte, et tu tombes de toute ta hauteur dans la vase, entre deux blocs. Elle te tient les jambes et ne les rend pas. La marée a fini de descendre ; elle va remonter.",
      "Tu t'en sors en rampant sur le dos, à plat, comme les pêcheurs à pied t'ont appris à le faire en criant de loin, quand tu es arrivé{e} dans les marais. Tu remontes sur la jetée sans le fanal, trempé{e}, une écorchure au mollet. Il sera encore là demain. La vase garde bien.",
    ],
    choices: [{ back: "IIM_port" }] },
});

// ==================================================================== Salomé Brac and La Bavarde
Object.assign(P, {
  IIM_bavarde: { act: "II", title: "La Bavarde", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      { first: true, text: "La Bavarde est couchée sur la vase, la quille enfoncée, le mât penché vers la ville. C'est une gabare de mer, large, haute de franc-bord, au bordage noir et à la voile au tiers roulée sur sa vergue. Une femme en culottes de toile, pieds nus dans la vase jusqu'aux mollets, gratte la carène au racloir. Les coquillages tombent en pluie." },
      { first: true, text: "Elle se redresse quand ton ombre passe sur la coque. Quarante ans, plus peut-être ; des cheveux gris coupés au couteau, des épaules de nageuse, et une cicatrice blanche qui tire le coin de sa bouche vers le bas. « Le bateau ne se loue pas, dit-elle. Et je ne plonge plus. Si c'est l'un ou l'autre, vous pouvez repartir. »" },
      { again: true, before: "salome:jointe", text: "Salomé gratte toujours sa carène, au même endroit, comme si la coque allait lui répondre. Elle te voit venir et ne s'arrête pas." },
      "Tu dis les Écueils. Le racloir s'arrête. « Les Écueils, répète Salomé. On y va pour la pêche aux congres, et on en revient. Moi, {{oreille#iim_salome_peur|je n'ai rien à y faire|j'ai détourné les yeux de l'écueil des Sourds pendant trois ans, et j'ai peur qu'il me regarde}}. »",
      "À la poupe, une grosse chaîne neuve entoure la mèche du gouvernail et descend jusqu'à une borne de pierre plantée dans la vase. Un plomb y pend, frappé d'un besant : le sceau de la Banque Marrel. « Et puis, de toute façon, dit Salomé en suivant ton regard, La Bavarde {{oreille#iim_salome_chaine|est très bien ici|est à la Banque tant que je n'ai pas payé, et la Banque est la seule à qui je refuse de devoir}}. »",
      { with: "lison", text: "Lison s'est arrêtée sur la planche, au-dessus de la vase. Elle regarde la coque, pas la femme. « Belle gabare, dit-elle. Construite pour porter lourd par gros temps. Ça doit faire mal de la voir couchée. »" },
      { with: "gildas", text: "Frère Gildas reste en retrait, les mains dans les manches. Salomé le regarde une fois, s'arrête sur la bure, et détourne les yeux." },
    ],
    fx: { flag: "iim:bavarde_saisie", meet: "iim_segur" },
    choices: [
      { label: "« Parlez-moi de l'écueil des Sourds. »", hide: { seen: "IIM_salome_maiwenn" }, to: "IIM_salome_maiwenn" },
      { label: "Lui offrir de l'argent pour la traversée", hide: { seen: "IIM_voie_argent" }, to: "IIM_voie_argent" },
      { label: "Lui dire la vérité : ce que tu cherches aux Écueils, et pourquoi", hide: { seen: "IIM_voie_verite" }, to: "IIM_voie_verite" },
      { label: "« Le Fidèle part pour les Écueils à la nouvelle lune. Lothaire Brunel est à bord. »", hide: { not: { has: "iim:lothaire_sait" } }, big: true, to: "IIM_voie_lothaire" },
      { label: "Lui proposer de t'occuper de la chaîne de la Banque", hide: { any: [{ seen: "IIM_service" }, { has: "iim:bavarde_libre" }] }, to: "IIM_service" },
      { label: "« La Bavarde est libre. La chaîne est par terre. »", hide: { not: { has: "iim:bavarde_libre" } }, big: true, to: "IIM_service_fait" },
      { back: "IIM_port" },
    ] },

  IIM_salome_maiwenn: { act: "II", title: "L'écueil des Sourds", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Salomé lâche le racloir dans la vase et s'essuie les mains sur ses cuisses. Elle grimpe à bord par l'échelle de corde et revient avec deux gobelets et une bouteille de rhum. Vous vous asseyez sur le plat-bord, les pieds au-dessus de la vase.",
      "« Ma femme plongeait aux Écueils pour la Banque, dit-elle. Maïwenn. On était les deux meilleures du port. La Banque payait un ducat la descente, pour chercher les épaves du temps de la reine. Un matin, sur les Sourds, elle est descendue, et la corde {{oreille#iim_salome_corde|s'est prise dans la roche|est remontée coupée, et l'homme qui la tenait m'a dit qu'elle avait glissé}}. On ne l'a jamais retrouvée. »",
      "Elle se lève, descend dans la cale, et remonte avec un bout de chanvre goudronné long comme l'avant-bras, qu'elle garde enveloppé dans un linge. Elle te le tend. Le bout {{pie#iim_corde_bout|est effiloché, mangé par la roche des Sourds|est tranché net, en biais, d'un seul coup de lame bien affûtée}}.",
      "« Depuis, je ne plonge plus. J'ai essayé une fois. Au premier pied d'eau, {{oreille#iim_salome_noir|j'ai eu froid, voilà tout|j'ai vu ses cheveux dans le noir, et j'ai remonté si vite que j'ai saigné des oreilles}}. »",
      { with: "tibere", text: "Tibère se racle la gorge. « Celui qui tenait la corde, dit-il, c'était qui ? » Salomé le regarde longtemps. « Un homme de la Banque. Avec des gants. » Elle s'en tient là, et Tibère aussi." },
    ],
    fx: { ep: ["perso", 500], conf: { salome: 3 } },
    choices: [
      { label: "« Ce bout de corde a été coupé. »", hide: { any: [{ not: { voile: "iim_corde_bout" } }, { seen: "IIM_salome_coupe" }] }, to: "IIM_salome_coupe" },
      { back: "IIM_bavarde" },
    ] },

  IIM_salome_coupe: { act: "II", title: "La corde", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Tu poses le doigt sur la coupe, là où les fibres sont toutes à la même longueur. Salomé regarde ton doigt. Sa main serre le gobelet si fort que l'étain se plie un peu.",
      "« Je le sais, dit-elle. Je le sais depuis trois ans. Ici, on me rit au nez, parce que la Banque paie tout le monde. Il {{oreille#iim_salome_soupcon|a dit qu'elle avait glissé, et c'est peut-être vrai|tenait la corde, il avait un couteau à la ceinture, et il est remonté avec un coffret sous sa cape}}. » Elle respire. « Je n'ai pas de preuve. J'ai un bout de corde, et le souvenir de ses gants. »",
      "Elle reprend le bout de chanvre, le renveloppe, et le garde contre elle. « Vous êtes {{oreille|bien la première à le voir|la première personne en trois ans à le voir sans que je le montre du doigt, et ça me fait plus peur que tout le reste}}. »",
    ],
    fx: { clue: "iim_c_corde", conf: { salome: 5 }, flag: "iim:corde_vue", ep: ["perso", 700] },
    choices: [{ back: "IIM_bavarde" }] },

  IIM_salome_nuit: { act: "II", title: "Salomé, le soir", place: "vasier", when: "night", backName: "la table de Salomé",
    text: [
      "Tu t'assieds en face d'elle. Salomé ne lève pas les yeux. Elle fait tourner son gobelet, lentement, sur le bois de la table, et regarde la porte chaque fois qu'elle s'ouvre. Il y a trois gobelets vides devant elle, alignés comme des pions.",
      "« Vous voulez un bateau, dit-elle. Je n'ai pas de bateau. J'ai une coque qui appartient à la Banque et une femme au fond de l'eau. » Elle boit. « Elle s'appelait Maïwenn. Elle chantait faux. Elle {{oreille#iim_salome_chante|chantait faux et ça me faisait rire|chantait faux, et le dernier matin elle m'a dit de ne pas venir sur le Fidèle, que l'homme aux gants voulait qu'elle plonge seule}}. »",
      "La porte s'ouvre. Un pêcheur entre, mouillé. Salomé le regarde, puis revient à son gobelet. « Le gant gris, dit-elle à mi-voix, comme on dit un juron. Il {{oreille#iim_salome_gant|est un homme de la Banque comme un autre|reviendra, ils reviennent toujours là où ils ont pris quelque chose, et ce jour-là je veux être sur l'eau}}. »",
      { with: "lison", text: "Lison a pris la chaise d'à côté sans demander, et pose son coude sur la table. « Ma grand-mère dit qu'on ne pleure pas les noyés, dit-elle. Qu'on leur parle. » Salomé la regarde pour la première fois. « Ta grand-mère est une Vasse. » Lison hausse une épaule. « Personne n'est parfait. »" },
    ],
    fx: { conf: { salome: 3 }, ep: ["perso", 500] },
    choices: [
      { label: "« L'homme aux gants s'appelle Lothaire Brunel. Il va revenir aux Écueils. »", hide: { any: [{ not: { voile: "iim_salome_gant" } }, { has: "salome:jointe" }] }, fx: { flag: "iim:lothaire_sait" }, to: "IIM_voie_lothaire" },
      { label: "Lui payer un rhum, et l'écouter jusqu'à la fermeture", fx: { gold: -2, conf: { salome: 5 } }, to: "IIM_salome_ecoute" },
      { back: "IIM_hareng" },
    ] },

  IIM_salome_ecoute: { act: "II", title: "Jusqu'à la fermeture", place: "vasier", when: "night", takes: 3, backName: "le Hareng Saur",
    text: [
      "Tu l'écoutes. Elle parle de La Bavarde, que son père a construite et qu'il a appelée ainsi parce que sa femme ne se taisait jamais. Elle parle de la façon dont on descend, la pierre au pied, en soufflant tout l'air avant, pour que le ventre ne cherche pas la surface. Elle parle des Écueils, des passes, de la ceinture des Sourds, du phare de l'Ouïe éteint depuis cent ans où les mouettes nichent dans la lanterne.",
      "Elle ne parle plus de Maïwenn. Mais à la fermeture, quand Clervie retourne les tabourets sur les tables, Salomé se lève, met sa veste, et dit sans te regarder : « Venez me voir au bateau, demain. {{oreille#iim_salome_demain|On parlera du prix|Je n'ai pas encore dit oui, mais j'ai arrêté de dire non, et ça me fait peur}}. »",
    ],
    fx: { flag: "iim:salome_ecoutee", ep: ["perso", 300] },
    choices: [{ back: "IIM_port" }] },

  IIM_voie_argent: { act: "II", title: "Le prix d'une traversée", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Salomé te regarde des pieds à la tête, comme on soupèse un sac de sel. « Cinq ducats, dit-elle. Cent liards. Payés avant de lever l'ancre. Le vivre en plus. Et c'est cher {{oreille#iim_salome_prix|parce que c'est le prix du risque|parce que c'est ce que je dois à Goulven pour le cuivre, et à la Banque pour la chaîne, et je n'ose pas le dire}}. »",
      { after: "iim:bavarde_libre", text: "« Pour la chaîne, ajoute-t-elle, vous avez déjà payé votre part. Disons trois ducats. »" },
      { with: "tibere", text: "Tibère fait un bruit de gorge. « Cent liards. Pour ce prix-là, au Guet, on vous louait un sergent pour un mois, et le sergent était sobre. »" },
    ],
    choices: [
      { label: "Payer les cent liards", hide: { has: "iim:bavarde_libre" }, fx: { gold: -100, flag: "iim:voie_argent", conf: { salome: -3 } }, to: "IIM_salome_oui" },
      { label: "Payer soixante liards, ce que coûte la carène", hide: { has: "iim:bavarde_libre" }, fx: { gold: -60, flag: "iim:voie_argent", conf: { salome: -2 } }, if: { voile: "iim_salome_prix" }, why: "Il faudrait savoir ce qu'elle doit vraiment.", to: "IIM_salome_oui" },
      { label: "Payer les soixante liards", hide: { not: { has: "iim:bavarde_libre" } }, fx: { gold: -60, flag: "iim:voie_argent" }, to: "IIM_salome_oui" },
      { label: "Marchander, comme au marché", hide: { has: "iim:bavarde_libre" }, test: { dom: "social", diff: -20, label: "Marchander avec une femme qui ne veut pas partir", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { has: "iim:salome_ecoutee" }, v: 15 }] },
        win: { fx: { gold: -50, flag: "iim:voie_argent" }, to: "IIM_salome_oui" }, lose: { fx: { conf: { salome: -3 } }, to: "IIM_salome_non" } },
      { back: "IIM_bavarde" },
    ] },

  IIM_voie_verite: { act: "II", title: "Ce que tu cherches", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Tu lui dis Odeline, le cornet, les feuillets d'un registre que des gens ont caché il y a trois cents ans dans des lieux où l'on ne va plus. Tu lui dis que l'un d'eux est aux Écueils, sous l'Ouïe, et que la Banque le cherche pour le brûler. Salomé t'écoute en grattant la vase de ses ongles avec la pointe de son couteau.",
      { after: "taiseurs:connus", text: "Tu lui dis les Taiseurs aussi, puisque tu sais ce qu'ils sont. Salomé lève la tête au nom. « Les gens de l'Ouïe, dit-elle. Mon grand-père disait qu'ils ont éteint le phare pour noyer les Comptoirs. On les maudit encore, ici. »", else: "Tu gardes une part pour toi ; une autre part t'échappe encore. Elle entend les trous dans ton histoire, et elle les laisse passer." },
      "« Un trésor de la reine, dit-elle enfin. Maïwenn y croyait. Elle plongeait pour la Banque en se disant qu'elle le trouverait avant eux. Elle {{oreille#iim_salome_tresor|était trop crédule|l'avait trouvé, je crois, la veille de sa mort, et elle n'a pas eu le temps de me dire où}}. »",
    ],
    choices: [
      { label: "La convaincre que Maïwenn aurait voulu qu'elle y aille", test: { dom: "social", diff: -10, label: "Toucher juste sans toucher la plaie", help: [{ if: { has: "taiseurs:connus" }, v: 15 }, { if: { has: "iim:corde_vue" }, v: 10 }, { if: { has: "iim:salome_ecoutee" }, v: 10 }, { with: "lison", v: 5 }] },
        win: { fx: { flag: "iim:voie_verite", conf: { salome: 5 } }, to: "IIM_salome_oui" }, lose: { fx: { conf: { salome: -3 } }, to: "IIM_salome_non" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "social", diff: 0, label: "Lison parle à Salomé en gens des eaux" },
        win: { fx: { flag: "iim:voie_verite", conf: { salome: 5, lison: 3 } }, to: "IIM_salome_oui" }, lose: { to: "IIM_salome_non" } },
      { label: "« Elle l'avait trouvé. Vous le savez. Venez finir ce qu'elle a commencé. »", hide: { not: { voile: "iim_salome_tresor" } }, fx: { flag: "iim:voie_verite", conf: { salome: 8 }, ep: ["perso", 600] }, to: "IIM_salome_oui" },
      { back: "IIM_bavarde" },
    ] },

  IIM_voie_lothaire: { act: "II", title: "Le gant gris", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Tu lui dis Le Fidèle, la nouvelle lune, les douze hommes armés, et le nom de celui qui les paie. Lothaire Brunel. Salomé se tait. Elle range son couteau dans sa gaine, très lentement, et tu vois ses mains trembler pendant qu'elle le fait.",
      "« Brunel, dit-elle. Je ne savais pas son nom. À la Banque, on l'appelait Monsieur. » Elle regarde vers le large, vers la ligne grise où commence la mer. « Il va retourner aux Sourds. {{oreille#iim_salome_retour|C'est son affaire|Il va passer au-dessus d'elle, avec ses gants, et je serai à quai en train de gratter des moules}}. »",
      "Elle se tourne vers toi. Sa voix est plate, sans rien dedans. « Je pars. Avec vous ou sans vous. Si c'est avec vous, vous payez le vivre, et vous m'aidez à faire sauter cette chaîne. »",
      { with: "tibere", text: "Tibère a baissé les yeux en entendant le nom de Lothaire. Il trouve soudain beaucoup d'intérêt à ses bottes." },
    ],
    fx: { flag: "iim:voie_lothaire", conf: { salome: 8 }, ep: ["perso", 800] },
    choices: [
      { label: "« La chaîne est déjà par terre. »", hide: { not: { has: "iim:bavarde_libre" } }, to: "IIM_salome_oui" },
      { label: "Lui promettre de briser la chaîne avec elle", hide: { has: "iim:bavarde_libre" }, to: "IIM_service" },
    ] },

  IIM_salome_non: { act: "II", title: "Non", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      "Salomé secoue la tête. Elle reprend son racloir et retourne à sa carène. « Non, dit-elle. Pas pour ça. Pas encore. » Le racloir gratte, gratte, au même endroit.",
      "Tu restes un moment sur la planche. Elle ajoute, sans se retourner : « Revenez avec autre chose que de l'argent ou des histoires de reine. {{oreille#iim_salome_autre|Quelque chose de vrai|Quelque chose qui me donne une raison de passer au-dessus des Sourds sans mourir de peur}}. »",
      { with: "lison", text: "Sur le chemin, Lison donne un coup de pied dans une coquille d'huître. « Elle dira oui. Elle cherche quelqu'un à qui dire oui depuis trois ans. Il faut juste lui donner la bonne raison. »" },
    ],
    fx: { ep: ["perso", 200] },
    choices: [{ back: "IIM_port" }] },
});

// ==================================================================== the Bank's chain on La Bavarde (the service), Salomé joins
Object.assign(P, {
  IIM_service: { act: "II", title: "La chaîne de la Banque", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      "Au comptoir de la Banque, Ségur sort l'acte de saisie d'un tiroir sans même chercher : il savait où il était. « La créance de Maître Tréhorel, rachetée par la Banque. Le cuivre de la carène, soixante liards, et les intérêts. Cent vingt liards en tout. Madame Brac peut payer quand elle veut. La Banque {{oreille#iim_segur_bavarde|est patiente|a reçu l'ordre de garder La Bavarde à quai jusqu'à la nouvelle lune, payée ou pas}}. »",
      "Il pose l'acte sur le comptoir, tourné vers toi, avec la politesse d'un homme qui sait que tu ne peux rien y faire. Dehors, sur la vase, la chaîne neuve brille autour du gouvernail.",
      { after: "voile:iim_segur_bavarde", text: "Payer ne suffira peut-être pas. Ségur a un ordre, et l'ordre a une date." },
    ],
    choices: [
      { label: "Payer les cent vingt liards", fx: { gold: -120, flag: ["iim:chaine_payee", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: 2 } }, to: "IIM_service_fait" },
      { label: "Lire l'acte de saisie, de près", hide: { seen: "IIM_service_acte" }, to: "IIM_service_acte" },
      { label: "Descendre sur la vase à la nuit, avec une lime", if: { night: true }, why: "Ce genre de chaîne se coupe la nuit.", to: "IIM_service_nuit" },
      { label: "Demander à la Veuve Corbière de prêter deux hommes et une masse", hide: { not: { has: "iim:ecumeurs_allies" } }, fx: { flag: ["iim:chaine_ecumeurs", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: -5, ecumeurs: 2 } }, to: "IIM_service_fait" },
      { back: "IIM_port" },
    ] },

  IIM_service_acte: { act: "II", title: "L'acte de saisie", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      "Tu tires l'acte vers toi. Une belle écriture de clerc, un sceau de cire noire, deux signatures. *Saisie de la gabare La Bavarde, patronne S. Brac, posée le cinq mars, au titre de la créance de G. Tréhorel, {{loupe#iim_acte_date|rachetée par la Banque le premier mars|rachetée par la Banque le douze mars, la date grattée et récrite par-dessus}}.*",
      { if: { has: "metier:lire" }, text: "Le grattoir a laissé un léger velours sur le papier, à l'endroit de la date. Tu as vu cent reconnaissances de dettes arrangées de cette façon. Celle-ci est faite proprement, par quelqu'un qui en a l'habitude." },
      "Ségur te regarde lire, les mains croisées sur son gilet. Il {{oreille|attend que tu aies fini, poliment|n'a aucune envie qu'un inspecteur du Conseil vienne compter ses saisies cette année}}, et il sourit pour que ça ne se voie pas.",
    ],
    choices: [
      { label: "Poser le doigt sur la date grattée, et regarder Ségur", hide: { not: { voile: "iim_acte_date" } }, fx: { flag: ["iim:chaine_ruse", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: -3 }, ep: ["perso", 900] }, to: "IIM_service_fait" },
      { label: "Chercher la faille dans l'acte, clause par clause", test: { dom: "savoir", diff: -20, label: "Retourner un acte de banquier", help: [{ if: { has: "metier:lire" }, v: 20 }, { with: "gildas", v: 10 }] },
        win: { fx: { flag: ["iim:chaine_ruse", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: -3 }, ep: ["perso", 700] }, to: "IIM_service_fait" },
        lose: { fx: { ep: ["perso", 100] }, to: "IIM_service" } },
      { back: "IIM_service" },
    ] },

  IIM_service_nuit: { act: "II", title: "La chaîne, la nuit", place: "vasier", when: "night", backName: "la vase, sous La Bavarde",
    text: [
      "La marée est basse, la lune cachée. Tu descends sur la vase par la planche, sans lanterne. La Bavarde est une grande ombre couchée, d'un noir plus épais que celui du port, et la vase, sous tes bottes, cède et se referme avec un soupir à chaque pas. À vingt pas, une cabane de planches, une lueur sous la porte : le garde de la Banque, qui veille la saisie, et qui tousse.",
      "La chaîne fait trois tours autour de la mèche du gouvernail et finit dans un cadenas gros comme un poing, {{pie#iim_cadenas|neuf et solide, de fer forgé|neuf, mais à ressort de laiton, de ceux qu'on ouvre avec un clou tordu si l'on sait où appuyer}}.",
      { with: "tibere", text: "Tibère regarde la cabane. « Je connais ce genre de garde, murmure-t-il. Il a froid, il s'ennuie, il est payé une misère. Je vais lui tenir compagnie. Ce que tu fais pendant ce temps, je ne l'ai pas vu. »" },
    ],
    choices: [
      { label: "Ouvrir le cadenas avec un clou tordu", hide: { not: { voile: "iim_cadenas" } }, fx: { flag: ["iim:chaine_forcee", "iim:bavarde_libre", "iim:voie_service"], ep: ["perso", 800] }, to: "IIM_service_fait" },
      { label: "Limer la chaîne, maille après maille, sans bruit", test: { dom: "discretion", diff: -10, label: "Limer une chaîne à vingt pas d'un garde", help: [{ if: { item: "crochets" }, v: 10 }, { with: "lison", v: 10 }, { if: { arch: "voleur" }, v: 10 }, { if: { has: "iim:segur_prime" }, v: 10 }] },
        win: { fx: { flag: ["iim:chaine_forcee", "iim:bavarde_libre", "iim:voie_service"], ep: ["perso", 700] }, to: "IIM_service_fait" },
        lose: { fx: { fac: { banque: -3 } }, to: "IIM_service_garde" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère fait boire le garde" },
        win: { fx: { flag: ["iim:chaine_forcee", "iim:bavarde_libre", "iim:voie_service"], conf: { tibere: 5 }, ep: ["perso", 700] }, to: "IIM_service_fait" },
        lose: { to: "IIM_service_garde" } },
      { label: "Aller frapper à la cabane, et régler ça avec le garde", fight: { title: "Le garde de la saisie", enemies: [{ id: "iim_garde_banque", n: 1 }], spare: true,
        win: { fx: { flag: ["iim:chaine_forcee", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: -5 }, ep: ["perso", 800] }, to: "IIM_service_fait" },
        lose: { fx: { pv: -3, fac: { banque: -5 } }, to: "IIM_service_rate" },
        flee: { label: "Remonter la planche en courant", dom: "discretion", diff: -10, to: "IIM_port" },
        calm: { to: "IIM_service_fait" } } },
      { back: "IIM_port" },
    ] },

  IIM_service_garde: { act: "II", title: "Le garde", place: "vasier", when: "night", backName: "la vase, sous La Bavarde",
    text: [
      "La lime crisse sur une maille. La toux s'arrête. La porte de la cabane s'ouvre, et un homme sort, un gourdin dans une main, une lanterne dans l'autre, en bras de chemise. Il lève la lanterne. Il te voit.",
      "« Ah, dit-il, et il crache. Voilà pourquoi on me paie. »",
    ],
    combat: { title: "Le garde de la saisie", enemies: [{ id: "iim_garde_banque", n: 1 }], spare: true,
      win: { fx: { flag: ["iim:chaine_forcee", "iim:bavarde_libre", "iim:voie_service"], fac: { banque: -5 }, ep: ["perso", 700] }, to: "IIM_service_fait" },
      lose: { fx: { pv: -3, fac: { banque: -5 } }, to: "IIM_service_rate" },
      flee: { label: "Remonter la planche en courant", dom: "discretion", diff: -10, to: "IIM_port" },
      calm: { to: "IIM_service_fait" } },
    choices: [{ back: "IIM_port" }] },

  IIM_service_rate: { act: "II", title: "La vase", place: "vasier", backName: "le port de Port-Vasier",
    text: [
      "Tu te réveilles dans la vase, la joue dans la boue froide, le gourdin du garde encore dans les côtes. La marée remonte et te lèche les bottes. La chaîne est entière. Le cadenas brille.",
      "Au matin, Ségur fait afficher sur la porte du comptoir un avis : *Toute atteinte aux saisies de la Banque sera punie d'amende et de fers.* Il n'y a pas ton nom. Il te salue quand tu passes, aimablement.",
      "Il reste d'autres façons d'ôter cette chaîne : le payer, retourner son acte contre lui, ou trouver des bras plus nombreux que les siens.",
    ],
    choices: [{ back: "IIM_port" }] },

  IIM_service_fait: { act: "II", title: "La chaîne par terre", place: "vasier", backName: "La Bavarde, sur la vase",
    text: [
      { after: "iim:chaine_payee", text: "Ségur compte les pièces deux fois, signe la mainlevée avec une grimace aimable, et envoie son garde ôter la chaîne. « La Banque est toujours contente d'être payée, dit-il. Même quand elle ne s'y attend pas. »" },
      { after: "iim:chaine_ruse", text: "Ségur regarde ton doigt sur la date pendant un long moment. Puis il prend une plume, écrit trois lignes sur une feuille, la sable, et te la tend. Une mainlevée. « Une erreur de clerc, dit-il. Je le renverrai. » Il ne renverra personne." },
      { after: "iim:chaine_forcee", text: "La chaîne glisse dans la vase avec un bruit lourd, mouillé, et s'y enfonce lentement, comme si la vase l'avait attendue. Le cadenas reste fermé, au bout, inutile." },
      { after: "iim:chaine_ecumeurs", text: "Deux Écumeurs descendent sur la vase en plein jour, une masse sur l'épaule, et font sauter la chaîne en trois coups, sous les fenêtres du comptoir. Ségur regarde derrière sa vitre. Il ne sort pas." },
      "Salomé est sur la planche quand tu reviens. Elle regarde la chaîne, puis toi. Elle descend sur la vase pieds nus, pose la main sur la mèche du gouvernail, libre, et la fait jouer, à droite, à gauche, comme on vérifie qu'un poignet n'est pas cassé.",
      "« Je paie mes dettes, dit-elle. Je vous dois une traversée. » Elle remonte sur la planche. « {{oreille#iim_salome_dette|Juste une|Une traversée, et peut-être plus, si vous avez le courage de me regarder passer au-dessus des Sourds}}. »",
    ],
    fx: { flag: "iim:bavarde_libre", conf: { salome: 10 }, ep: ["perso", 800] },
    choices: [{ label: "Lui serrer la main", big: true, to: "IIM_salome_oui" }] },

  IIM_salome_oui: { act: "II", title: "Salomé Brac", place: "vasier", backName: "La Bavarde",
    text: [
      { after: "iim:voie_argent", text: "Salomé compte les pièces une à une dans sa paume, les met dans une bourse de cuir qu'elle pend à son cou, sous sa chemise. « Le vivre en plus, rappelle-t-elle. Et vous obéissez à bord. Moi, j'accepte vos prix ; vous, vous acceptez mes ordres. »" },
      { after: "iim:voie_verite", text: "Salomé reste un moment silencieuse, la main à plat sur le bordage de La Bavarde. « Elle aurait voulu, dit-elle. Elle aurait déjà largué les amarres, et elle m'aurait traitée de vieille poule. » Elle a un petit rire qui lui fait mal." },
      { after: "iim:voie_lothaire", text: "Salomé ne sourit pas. Elle regarde vers le large, et ses yeux sont très secs. « On part avant la nouvelle lune, dit-elle. Je veux être là quand Le Fidèle arrivera. Je veux voir ses gants. »" },
      { after: "iim:voie_service", before: "iim:voie_lothaire", text: "Salomé tape deux fois du plat de la main sur le bordage, comme on flatte une bête. « Elle a besoin de sortir, dit-elle. Moi aussi, peut-être. »" },
      { if: { not: { has: "iim:bavarde_libre" } }, text: "« La chaîne, ajoute-t-elle, je m'en charge. Je vendrai le canot à la Veuve. J'aurais dû le faire il y a trois ans. »" },
      "Elle te tend la main. Elle a une poigne de plongeuse, sèche et dure, et des cals au creux des doigts. « Salomé Brac, de La Bavarde, dit-elle, comme si tu ne le savais pas. Bienvenue à bord. Ne touchez jamais à mes nœuds. »",
      { with: "lison", text: "Lison serre la main de Salomé à son tour, d'un geste bref. « Lison Vasse. Je sais ramer. » « Moi aussi, dit Salomé. On verra qui rame. »" },
      { with: "tibere", text: "Tibère salue d'un coup de menton. « Tibère Gaucelm. J'ai le mal de mer. » Salomé hoche la tête. « On a des seaux. »" },
      { with: "gildas", text: "Frère Gildas incline la tête. Salomé le regarde un moment, la bure, les mains croisées, et dit seulement : « À bord, on prie en silence. » Gildas sourit. « C'est la seule façon que je connaisse. »" },
    ],
    fx: { join: "salome", flag: "salome:jointe", fac: { hautes: 3 }, ep: ["seance", 1500] },
    choices: [
      { label: "Monter à bord de La Bavarde, et préparer le départ", big: true, to: "IIM_bord" },
      { back: "IIM_port" },
    ] },

  IIM_bord: { act: "II", title: "À bord de La Bavarde", place: "vasier", backName: "le pont de La Bavarde",
    text: [
      { first: true, text: "La Bavarde flotte enfin, sur la marée montante, au bout de son amarre. Le pont est propre, les cordages lovés à plat comme des galettes, chaque chose à sa place, avec cette netteté qu'on trouve chez les gens qui vivent dans peu d'espace. À l'avant, une petite cabine où l'on tient assis ; à l'arrière, la barre, longue, polie par les mains." },
      { again: true, text: "Le pont de La Bavarde. Salomé, à genoux, épisse un bout de cordage, et ne lève pas la tête." },
      { with: "salome", text: "Salomé passe d'un bord à l'autre, vérifie une poulie, tire sur un hauban, regarde le ciel. « Deux étapes jusqu'aux Écueils, si le vent veut bien. On largue depuis le port, quand tu veux. {{oreille#iim_salome_largue|J'ai hâte|J'ai les mains qui tremblent chaque fois que je touche la barre, et c'est la première fois en trois ans}}. »" },
      { after: "ecueils:ouverte", with: "salome", text: "Depuis les Écueils, Salomé dort à bord. Elle dit que la terre bouge trop." },
    ],
    choices: [
      { label: "Charger trois jours de vivres (6 liards)", fx: { gold: -6, food: 3 }, once: true, to: "IIM_bord_vivres" },
      { label: "Parler à Salomé, pendant qu'elle épisse", with: "salome", hide: { seen: "IIM_bord_salome" }, to: "IIM_bord_salome" },
      { label: "Montrer à Salomé la carte des Écueils de Lhermite", with: "salome", hide: { any: [{ not: { item: "iim_carte_ecueils" } }, { seen: "IIM_bord_carte" }] }, to: "IIM_bord_carte" },
      { back: "IIM_port" },
    ] },

  IIM_bord_vivres: { act: "II", title: "Le vivre", place: "vasier", backName: "le pont de La Bavarde",
    text: [
      "Tu remontes du marché avec un sac de biscuit de mer, deux harengs saurs enfilés sur une ficelle, un fromage dur, un tonnelet d'eau douce et une bouteille de rhum que Clervie a glissée dans le sac sans la compter.",
      { with: "salome", text: "Salomé arrime le tout dans la cale, le tonnelet calé entre deux sacs de lest. Elle sent le rhum, sourit. « Clervie. Elle donne à boire à tous ceux qui partent. Elle dit que ça les fait revenir. »" },
    ],
    choices: [{ back: "IIM_bord" }] },

  IIM_bord_salome: { act: "II", title: "Salomé épisse", place: "vasier", with: "salome", backName: "le pont de La Bavarde",
    text: [
      { with: "salome", text: "Tu t'assieds sur le panneau de cale. Salomé défait les torons d'un bout de cordage avec un épissoir d'os et les refait entrer dans l'autre bout, un par un, dessus, dessous. Ses doigts vont tout seuls." },
      { with: "salome", text: "« Tu veux savoir si je vais plonger, dit-elle. Aux Écueils. Si je vais descendre te chercher ton feuillet. » Elle serre l'épissure. « Je {{oreille#iim_salome_plongerai|ne plongerai pas, c'est fini|ne sais pas, et pour la première fois en trois ans j'hésite avant de dire non}}. »" },
      { with: "salome", text: "« Et lui, dit-elle encore, plus bas. S'il est là-bas. Je {{oreille#iim_salome_tuer|veux seulement le regarder en face|ne sais pas ce que je ferai, et j'ai un couteau, et c'est ça qui me fait peur}}. Je n'ai pas de preuve. Un bout de corde, c'est une corde. »" },
      { with: "salome", after: "iim:maiwenn_voix", text: "Elle s'arrête d'épisser. « Ce que tu m'as dit, à la chapelle. Je l'entends tout le temps, depuis. Regarde ses mains. » Elle reprend l'épissure." },
    ],
    fx: { conf: { salome: 5 }, ep: ["perso", 500] },
    choices: [{ back: "IIM_bord" }] },

  IIM_bord_carte: { act: "II", title: "La carte sur le pont", place: "vasier", with: "salome", backName: "le pont de La Bavarde",
    text: [
      { with: "salome", text: "Salomé étale la carte sur le panneau de cale, pose son couteau sur un coin et une pierre de lest sur l'autre. Elle suit la ceinture des Sourds du bout de l'ongle, la passe du nord, les sondes, et s'arrête sur l'Ouïe." },
      { with: "salome", text: "« Lhermite, dit-elle. C'est sa main. On ne fait pas mieux. Avec ça, on passe à mi-marée là où le Fidèle devra attendre l'étale. » Elle relève la tête. « On aura une demi-journée d'avance sur eux. Peut-être plus. »" },
    ],
    fx: { flag: "iim:passe_nord", conf: { salome: 3 } },
    choices: [{ back: "IIM_bord" }] },
});

// ==================================================================== the chart quest, continued
Object.assign(P, {
  IIM_q_carte_marche: { act: "II", title: "Les fausses cartes", place: "vasier", backName: "l'étal de Gaïd",
    text: [
      "Gaïd sort d'un panier une liasse de cartes roulées, attachées d'un ruban. « Les Écueils, par Lhermite, deux liards la feuille. Ça part bien. Les patrons qui n'ont jamais osé y aller en achètent pour rêver. »",
      "Tu déroules une feuille. Le dessin est celui de Lhermite, à première vue : les mêmes îles, le même cartouche, le phare. Mais la passe du nord, à travers la ceinture des Sourds, {{pie#iim_fausse_passe|est tracée large et sûre, avec ses sondes|est tracée là où les sondes de l'original disent deux pieds d'eau à marée basse, sur une roche}}. En bas, la signature de Lhermite est faite d'une main lourde, qui a appuyé.",
      "« Qui vous les fournit ? » Gaïd hausse les épaules. « Riwal. Il {{oreille#iim_gaid_riwal|les tient d'un graveur de Salvèze|les fait faire chez le tonnelier, et la Veuve n'en sait rien}}. »",
    ],
    fx: { ep: ["perso", 300] },
    choices: [
      { label: "Acheter toute la liasse et la jeter au feu du chantier (20 liards)", hide: { has: "iim:fausses_brulees" }, fx: { gold: -20, flag: "iim:fausses_brulees", fac: { hautes: 5 }, ep: ["perso", 500] }, to: "IIM_marche" },
      { back: "IIM_marche" },
    ] },

  IIM_q_carte_coffre: { act: "II", title: "La plaque de cuivre", place: "vasier", backName: "le comptoir de la Banque Marrel",
    text: [
      "Tu dis le nom de Lhermite. Ségur pose sa plume, essuie le bec sur un chiffon, avec soin. « Une plaque de cuivre ? Je {{oreille#iim_segur_plaque|n'ai jamais vu une chose pareille|l'ai fait copier pour le Fidèle, elle a servi, mais ici tout se paie}}, dit-il. Le comptoir achète des créances, pas des gravures. »",
      "Derrière lui, contre le mur, un coffre ferré, cadenassé, dont la clé pend à sa chaîne de montre. Un des gardes dort à moitié sur sa chaise.",
    ],
    choices: [
      { label: "« Vingt liards, puisqu'elle ne vous sert plus. »", hide: { not: { voile: "iim_segur_plaque" } }, fx: { gold: -20, item: "iim_plaque", ep: ["perso", 500] }, to: "IIM_q_carte_rendue" },
      { label: "Lui parler de l'inspecteur du Conseil, et des copies qui noient les patrons", test: { dom: "social", diff: -20, label: "Faire peur à un banquier", help: [{ if: { has: "iim:fausses_brulees" }, v: 10 }, { if: { has: "iim:chaine_ruse" }, v: 15 }, { with: "tibere", v: 10 }] },
        win: { fx: { item: "iim_plaque", fac: { banque: -3 }, ep: ["perso", 600] }, to: "IIM_q_carte_rendue" }, lose: { fx: { fac: { banque: -2 } }, to: "IIM_facteur_chasse" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: -10, label: "Lison ouvre le coffre pendant que tu parles" },
        win: { fx: { item: "iim_plaque", conf: { lison: 3 }, ep: ["perso", 600] }, to: "IIM_q_carte_rendue" }, lose: { to: "IIM_facteur_chasse" } },
      { label: "Passer la nuit, par la fenêtre de derrière", if: { night: true }, why: "Il faut que le comptoir soit fermé.", test: { dom: "discretion", diff: -20, label: "Forcer un comptoir de la Banque", help: [{ if: { item: "crochets" }, v: 15 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { item: "iim_plaque", fac: { banque: -5 }, ep: ["perso", 700] }, to: "IIM_q_carte_rendue" }, lose: { fx: { pv: -3, fac: { banque: -5 } }, to: "IIM_facteur_chasse" } },
      { back: "IIM_facteur" },
    ] },

  IIM_q_carte_rendue: { act: "II", title: "Le cuivre", place: "vasier", backName: "le port de Port-Vasier",
    text: [
      "La plaque est lourde, froide, grande comme un plateau. Les Écueils y sont gravés à l'envers, en creux : il faut la tourner vers le jour et lire les chiffres de droite à gauche. Le cuivre est rayé à un coin, là où le burin de Bleiz a glissé, un jour, et où Lhermite a dû le gronder.",
      { with: "lison", text: "Lison passe le doigt dans le chenal gravé des Joncs-Bas, au bord de la plaque. « Il a mis l'arbre mort, dit-elle. Au coude du chenal. Il est tombé l'an dernier, mais il était là. »" },
    ],
    choices: [{ back: "IIM_port" }] },
});

// ==================================================================== the Écumeurs of the Widow Corbière
Object.assign(P, {
  IIM_ecumeurs: { act: "II", title: "La carcasse des Écumeurs", place: "vasier", backName: "la carcasse des Écumeurs",
    text: [
      { first: true, text: "Au bout de la jetée, la carcasse est encore plus grande qu'elle n'en avait l'air : un trois-mâts de commerce échoué sur un banc de sable il y a cinquante ans, dont on a coupé les mâts et ouvert le flanc pour en faire une maison. Une passerelle de planches monte jusqu'à une porte taillée dans le bordé. Sur le pont, des cordages qui sèchent, des tonneaux, des caisses marquées de dix marques différentes, toutes de maisons de Salvèze qui ne les reverront pas." },
      { first: true, text: "Un homme rasé, une barbe noire taillée court, t'attend en haut de la passerelle, les pouces dans la ceinture. Il sourit beaucoup. « Riwal, dit-il. Second de la Veuve. On vous a vu{e} arriver, on vous a vu{e} parler à Salomé, on vous a vu{e} acheter des harengs. La Veuve veut savoir ce que vous cherchez chez nous. Moi aussi. Moi, {{oreille#iim_riwal_accueil|par simple curiosité|parce que la Banque me paie pour savoir qui monte sur cette passerelle}}. »" },
      { again: true, text: "La carcasse des Écumeurs, la passerelle, les bonnets rouges. Riwal sourit en haut des planches." },
      { if: { all: [{ has: "iim:quart_veuve" }, { has: "ecueils:ouverte" }] }, text: "Un Écumeur au bonnet rouge t'attend en haut de la passerelle, une ardoise sous le bras. « Le quart de la Veuve, dit-il. On a vu *La Bavarde* rentrer des Écueils. La Veuve sait attendre, mais elle compte. »" },
      { after: "iim:ecumeurs_ennemis", text: "Deux Écumeurs croisent les bras en travers de la passerelle. Riwal, derrière eux, a perdu son sourire." },
      "Le pont {{echo#iim_pont_carcasse|craque sous les pas et sent le goudron|garde des cris anciens : « Coupez la drisse ! Coupez ! La Banque nous rattrape ! »}}. Contre le grand mât coupé, un banc de bois fait face à la mer.",
      { with: "tibere", text: "Tibère a mis la main sur sa masse sans y penser, puis l'a retirée en voyant combien ils sont. « Au Guet, on disait qu'il fallait venir ici à cinquante, dit-il. On n'est jamais venus. »" },
    ],
    choices: [
      { label: "Demander à voir la Veuve Corbière", hide: { has: "iim:ecumeurs_ennemis" }, to: "IIM_corbiere" },
      { label: "Exiger de voir la Veuve, et passer en force la passerelle", hide: { not: { has: "iim:ecumeurs_ennemis" } }, to: "IIM_bagarre" },
      { label: "Parler à Riwal de la dette de Jaouen Hamon", hide: { any: [{ not: { has: "iim:jaouen_cherche" } }, { quest: "IIM_jaouen" }, { seen: "IIM_q_jaouen_riwal" }] }, to: "IIM_q_jaouen_riwal" },
      { label: "Demander à Riwal le navire d'argent de la chapelle", hide: { any: [{ not: { has: "iim:exvoto_riwal" } }, { item: "iim_exvoto" }, { quest: "IIM_exvoto" }] }, to: "IIM_q_exvoto_riwal" },
      { back: "IIM_port" },
    ] },

  IIM_corbiere: { act: "II", title: "La Veuve Corbière", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      { first: true, text: "La grande chambre de l'ancien capitaine, à la poupe, éclairée par une rangée de fenêtres aux vitres verdâtres. Des cartes, des registres, une table couverte de pièces triées par pays. Assise dans un fauteuil de chêne trop grand pour elle, une femme de soixante ans, petite, en noir, un foulard noir serré sur des cheveux blancs, une balafre en travers du menton : Armance Corbière, la Veuve. Un chat roux dort sur ses genoux. Elle ne se lève pas." },
      { first: true, text: "« Asseyez-vous, dit-elle. Vous allez aux Écueils, avec Salomé ou sans elle. Je le sais parce que tout le port le sait. Je veux savoir ce que vous me donnerez pour que mes garçons ne vous coulent pas en route. Les Écueils sont à nous. {{oreille#iim_veuve_ecueils|Depuis toujours|Depuis toujours, et le Fidèle de la Banque va nous les prendre si je ne trouve pas quelqu'un d'assez fou pour passer avant lui}}. »" },
      { again: true, text: "Armance Corbière caresse son chat et te regarde entrer. « Encore vous. Bien. J'aime les gens qui reviennent. Ils ont toujours quelque chose à vendre. »" },
      { after: "iim:ecumeurs_allies", text: "La Veuve te fait servir un rhum sans le demander. C'est son rhum à elle, celui de la bouteille carrée." },
      "Sur la table, sous un presse-papier de plomb, une lettre au sceau noir de la Banque. *{{loupe#iim_lettre_veuve|La Banque Marrel offre à Madame Corbière la protection de ses navires|La Banque Marrel rachètera la flotte de Madame Corbière à la Saint-Jean, de gré ou par saisie}}.*",
    ],
    choices: [
      { label: "Lui proposer un partage : le dixième de ce que tu trouveras aux Écueils", hide: { any: [{ has: "iim:ecumeurs_allies" }, { seen: "IIM_corbiere_partage" }] }, to: "IIM_corbiere_partage" },
      { label: "« Vos garçons me respecteront quand je les aurai battus. »", hide: { any: [{ has: "iim:ecumeurs_allies" }, { seen: "IIM_defi" }] }, to: "IIM_defi" },
      { label: "« Riwal vend vos routes à la Banque. Je l'ai entendu, sur la jetée. »", big: true, hide: { any: [{ not: { voile: "iim_riwal_vend" } }, { has: "iim:riwal_demasque" }] }, to: "IIM_corbiere_riwal" },
      { label: "« La Banque va saisir votre flotte à la Saint-Jean. C'est écrit sous votre presse-papier. »", hide: { any: [{ not: { voile: "iim_lettre_veuve" } }, { has: "iim:ecumeurs_allies" }] }, fx: { fac: { ecumeurs: 5 } }, to: "IIM_corbiere_lettre" },
      { label: "L'interroger sur le jour où Maïwenn Brac s'est noyée", hide: { seen: "IIM_corbiere_maiwenn" }, to: "IIM_corbiere_maiwenn" },
      { label: "Refuser tout partage, et le lui dire en face", hide: { any: [{ has: "iim:ecumeurs_allies" }, { has: "iim:ecumeurs_ennemis" }] }, fx: { flag: "iim:ecumeurs_ennemis", fac: { ecumeurs: -15 } }, to: "IIM_corbiere_refus" },
      { back: "IIM_ecumeurs" },
    ] },

  IIM_corbiere_partage: { act: "II", title: "Le dixième", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "Armance Corbière gratte le chat derrière l'oreille. « Le dixième, dit-elle. De quoi ? Vous ne savez pas ce que vous trouverez. Moi non plus. Un dixième de rien, c'est rien. » Elle sourit, et sa balafre se plie. « Un quart. Et ma parole que mes garçons vous laissent passer, à l'aller et au retour. »",
      "« Un quart, c'est {{oreille#iim_veuve_quart|mon dernier mot|beaucoup trop, je prendrai un dixième si on me laisse ma fierté devant Riwal}}. »",
    ],
    choices: [
      { label: "Accepter le quart, et lui serrer la main", fx: { flag: ["iim:ecumeurs_allies", "iim:quart_veuve"], fac: { ecumeurs: 15 } }, to: "IIM_alliance" },
      { label: "« Un dixième, et je dirai à Riwal que c'est un quart. »", hide: { not: { voile: "iim_veuve_quart" } }, fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 15 }, ep: ["perso", 600] }, to: "IIM_alliance" },
      { label: "Marchander, pied à pied", test: { dom: "social", diff: -10, label: "Marchander avec la Veuve", help: [{ if: { has: "iim:gaid_confondue" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { if: { has: "iim:veuve_peur" }, v: 10 }] },
        win: { fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 15 }, ep: ["perso", 500] }, to: "IIM_alliance" }, lose: { fx: { fac: { ecumeurs: -2 } }, to: "IIM_corbiere" } },
    ] },

  IIM_corbiere_lettre: { act: "II", title: "La lettre de la Banque", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "Armance soulève le presse-papier, prend la lettre, la tient devant la fenêtre. Elle ne voit rien que la belle écriture du dessus. Elle te regarde. « Vous lisez sous l'encre, dit-elle. On disait ça des gens de l'Ouïe, autrefois. »",
      "Elle repose la lettre, très doucement. « De gré ou par saisie. » Elle caresse le chat, qui se réveille et la regarde. « Mon mari a construit cette flotte en trente ans. Je l'ai doublée en dix. Ils veulent la prendre en une saison. » Elle relève la tête. « Bien. Ce qui fait du tort à la Banque me fait du bien. Allez aux Écueils, et prenez-leur ce qu'ils veulent. Mes garçons vous laisseront passer. »",
    ],
    fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 10, banque: -2 }, ep: ["perso", 700] },
    choices: [{ label: "Lui serrer la main", to: "IIM_alliance" }] },

  IIM_corbiere_riwal: { act: "II", title: "Riwal", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "La Veuve se tait longtemps. Le chat saute de ses genoux. Elle se lève, et elle est plus petite debout qu'assise. Elle va à la porte, l'ouvre, et dit d'une voix ordinaire : « Riwal. Viens. »",
      "Riwal entre en souriant. Le sourire tombe quand il voit ton visage. « Maître Ségur, dit Armance. La jetée. Une bourse. » Riwal ouvre la bouche. « Je {{oreille#iim_riwal_aveu|ne sais pas de quoi elle parle|savais que ça finirait comme ça, et j'ai cent ducats cousus dans ma vareuse}}, Veuve. »",
      "Armance appelle deux hommes. Riwal ne se débat pas. On l'emmène, et la porte se ferme. La Veuve revient s'asseoir, ramasse le chat, et ses mains tremblent un peu. « Dix-huit ans qu'il est mon second, dit-elle. Il a appris à compter sur mes genoux. » Elle se tait. Puis : « Ses dettes sont à moi, à présent. Tout ce qu'on lui devait, on me le doit. Et moi, je vous dois. »",
    ],
    fx: { flag: ["iim:riwal_demasque", "iim:ecumeurs_allies"], fac: { ecumeurs: 20, banque: -5 }, ep: ["seance", 1200] },
    choices: [
      { label: "« Jaouen Hamon devait de l'argent à Riwal. »", hide: { any: [{ not: { has: "iim:jaouen_cherche" } }, { quest: "IIM_jaouen" }, { has: "iim:jaouen_libre" }] }, fx: { flag: "iim:jaouen_libre" }, to: "IIM_corbiere_dettes" },
      { label: "« Riwal avait un navire d'argent qui appartient à la chapelle. »", hide: { any: [{ not: { has: "iim:exvoto_riwal" } }, { item: "iim_exvoto" }, { quest: "IIM_exvoto" }] }, fx: { item: "iim_exvoto" }, to: "IIM_corbiere_exvoto" },
      { label: "Lui serrer la main", to: "IIM_alliance" },
    ] },

  IIM_corbiere_exvoto: { act: "II", title: "Le navire d'argent", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "On rapporte de la cabine de Riwal un sac de toile. Armance le vide sur la table : des bourses, des reconnaissances de dettes, un couteau à manche d'ivoire, et, enveloppé dans un mouchoir, un petit navire d'argent à trois mâts. La Veuve le prend, le retourne, lit les noms sous la quille. Elle s'arrête sur l'un d'eux.",
      "« Corbière, dit-elle. Mon mari. » Elle te le tend. « Rendez-le à Tugdual. Dites-lui que la Veuve n'en savait rien. C'est vrai, pour une fois. »",
    ],
    choices: [
      { label: "« Jaouen Hamon devait de l'argent à Riwal. »", hide: { any: [{ not: { has: "iim:jaouen_cherche" } }, { quest: "IIM_jaouen" }, { has: "iim:jaouen_libre" }] }, fx: { flag: "iim:jaouen_libre" }, to: "IIM_corbiere_dettes" },
      { label: "Prendre le navire d'argent, et serrer la main de la Veuve", to: "IIM_alliance" },
    ] },

  IIM_corbiere_maiwenn: { act: "II", title: "Le jour du Fidèle", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "Armance regarde par les vitres verdâtres, vers la rade. « Le neuf mai, il y a trois ans. J'avais un bateau aux Sourds, ce jour-là, pour la pêche aux congres. Mon patron a vu le Fidèle mouiller sur l'écueil. Il a vu la petite Brac descendre. Il a vu l'homme aux gants tenir la corde. »",
      "« Mon patron {{oreille#iim_veuve_coffret|n'a rien vu d'autre, le brouillard est tombé|a vu l'homme aux gants remonter un coffret sur la corde, le cacher sous sa cape, et puis la corde est remontée seule}}. » Elle caresse le chat. « Ce sont des histoires de pêcheurs. Je ne les répète pas. Surtout pas à Salomé. Elle irait le tuer, et la Banque la pendrait. »",
      { with: "salome", text: "Salomé est restée près de la porte. Elle ne dit rien. Elle a les poings fermés si fort que ses jointures sont blanches, et Armance, qui l'a vue, ne la regarde pas." },
    ],
    fx: { ep: ["perso", 500] },
    choices: [{ back: "IIM_corbiere" }] },

  IIM_corbiere_refus: { act: "II", title: "Le refus", place: "vasier", backName: "la carcasse des Écumeurs",
    text: [
      "Armance Corbière t'écoute jusqu'au bout. Puis elle hoche la tête, plusieurs fois, comme on fait quand un marchand annonce un prix qu'on attendait. « Bien, dit-elle. C'est clair. J'aime ce qui est clair. »",
      "Elle sonne une petite cloche. Deux hommes t'escortent jusqu'en bas de la passerelle, sans te toucher. En bas, l'un d'eux crache dans la vase, juste à côté de ta botte. « Bonne mer, dit-il. Elle est grande. On y croise du monde. »",
    ],
    choices: [{ back: "IIM_port" }] },

  IIM_alliance: { act: "II", title: "Le pavillon rouge", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "Armance Corbière ouvre un coffre à ses pieds et en sort un carré d'étamine rouge, barré d'or, plié en huit. Elle te le tend. « Hissez ça en tête de mât si quelqu'un vous serre de trop près, en mer. Mes garçons passeront au large. Et s'il s'agit du Fidèle, mes garçons {{oreille#iim_veuve_fidele|regarderont ailleurs|viendront, parce que je n'attends que ça}}. »",
      "Elle te sert un rhum, dans un verre de Salvèze taillé, le seul de la chambre. « À la Muette, dit-elle en levant le sien. Que ses trésors aillent à tous ceux qui ne sont pas la Banque. » Tu bois. C'est fort, et ça sent le poivre et le bois brûlé.",
      { with: "salome", text: "Salomé, près de la porte, ne boit pas. Armance lève son verre vers elle quand même. « Salomé. Je suis contente que tu sortes. » Salomé hoche la tête, une fois." },
    ],
    fx: { flag: "iim:pavillon", ep: ["perso", 800] },
    choices: [{ back: "IIM_ecumeurs" }] },
});

// ==================================================================== Riwal's debts: Jaouen, the ex-voto; the challenges
Object.assign(P, {
  IIM_corbiere_dettes: { act: "II", title: "Les dettes de Riwal", place: "vasier", backName: "la grande chambre de la carcasse",
    text: [
      "Armance fouille dans le sac de Riwal qu'on lui a apporté, en sort une liasse de reconnaissances de dettes nouées d'une ficelle, et les feuillette comme on compte des harengs. Elle en tire une. *Jaouen Hamon doit à Riwal trois ducats.* Dessous, d'une autre encre, des chiffres ajoutés chaque semaine, jusqu'à onze ducats.",
      "Elle déchire le papier en deux, puis en quatre, et laisse tomber les morceaux dans le seau à charbon. « Le fils de Clervie. Elle m'a gardé une table pendant vingt ans, au Hareng, quand mon homme était en mer. Dites-lui que c'est fait. Et dites au garçon de ne plus jouer aux dés avec des gens qui sourient. »",
    ],
    choices: [
      { label: "« Riwal avait un navire d'argent qui appartient à la chapelle. »", hide: { any: [{ not: { has: "iim:exvoto_riwal" } }, { item: "iim_exvoto" }, { quest: "IIM_exvoto" }] }, fx: { item: "iim_exvoto" }, to: "IIM_corbiere_exvoto" },
      { label: "Serrer la main de la Veuve", to: "IIM_alliance" },
    ] },

  IIM_q_jaouen: { act: "II", title: "Clervie", place: "vasier", backName: "la salle du Hareng Saur",
    text: [
      "Clervie pose son torchon. « J'ai l'air d'attendre ? » Elle regarde la porte de la cuisine. Un garçon de dix-sept ans, maigre, en tablier, y récure un chaudron de toutes ses forces. « Mon fils. Jaouen. Il doit de l'argent à Riwal, aux dés. Trois ducats, au début. Riwal ajoute un ducat par semaine. »",
      "« Et maintenant Riwal dit qu'il effacera tout si Jaouen part avec les Écumeurs pour la prochaine pêche. » Elle dit pêche comme on dit un gros mot. « Une gabare de la Banque, au large. Les Écumeurs mettent toujours les nouveaux devant, à l'abordage. »",
      "Jaouen a entendu son nom. Il s'approche en s'essuyant les mains. « Je {{oreille#iim_jaouen_vol|ne dois presque plus rien, maman exagère|ai déjà volé le navire d'argent de la chapelle pour le payer, et ça n'a pas suffi}}, dit-il. Je peux partir. Je sais nager. »",
    ],
    fx: { flag: "iim:jaouen_cherche", questSeen: "IIM_jaouen", ep: ["perso", 300] },
    choices: [
      { label: "Promettre à Clervie d'aller parler à Riwal", to: "IIM_hareng" },
      { label: "« Ce ne sont pas mes affaires. »", refuse: true, back: "IIM_hareng" },
    ] },

  IIM_q_jaouen_riwal: { act: "II", title: "Les comptes de Riwal", place: "vasier", backName: "la carcasse des Écumeurs",
    text: [
      "Riwal t'écoute en souriant, les pouces dans sa ceinture. « Le petit Hamon. Onze ducats, à ce jour. C'est que le temps passe. » Il sort un carnet, le feuillette, l'air désolé. « La dette {{oreille#iim_riwal_dette|est la dette, je n'y peux rien|ne m'intéresse pas, je veux le garçon devant à l'abordage, parce que sa mère m'a refusé un jour}}. »",
      "« Mais je suis un homme raisonnable. Payez la moitié, et je déchire. Ou jouez-la, aux menteurs, contre moi. Les Écumeurs aiment jouer. »",
    ],
    choices: [
      { label: "Payer la moitié : cinq ducats et demi (110 liards)", fx: { gold: -110, flag: ["iim:jaouen_libre", "iim:jaouen_paye"] }, to: "IIM_q_jaouen_dechire" },
      { label: "Jouer la dette de Jaouen au jeu des menteurs", hide: { has: "iim:riwal_demasque" }, fx: { flag: "iim:bluff_jaouen" }, to: "IIM_bluff" },
      { label: "« La Veuve aimerait savoir ce que tu faisais sur la jetée avec Maître Ségur. »", hide: { not: { voile: "iim_riwal_vend" } }, fx: { flag: ["iim:jaouen_libre", "iim:riwal_tient"], ep: ["perso", 700] }, to: "IIM_q_jaouen_dechire" },
      { back: "IIM_ecumeurs" },
    ] },

  IIM_q_jaouen_dechire: { act: "II", title: "Le papier déchiré", place: "vasier", backName: "la carcasse des Écumeurs",
    text: [
      { after: "iim:jaouen_paye", text: "Riwal compte les pièces, une à une, en les faisant sonner sur le bordé. Puis il sort la reconnaissance de dette de son carnet, et la déchire devant toi, lentement, en deux. « Affaire faite, dit-il. Le petit a de la chance d'avoir des amis riches. »" },
      { after: "iim:riwal_tient", text: "Le sourire de Riwal reste en place, mais le reste de son visage s'est figé. Il regarde par-dessus ton épaule, vers la poupe, vers la grande chambre. Puis il sort la reconnaissance de dette, la déchire, et en jette les morceaux à l'eau. « Je ne sais pas ce que vous croyez avoir entendu, dit-il tout bas. Gardez-le pour vous, et on est quittes. » Tu ne dis rien. Ça peut servir plus tard." },
    ],
    choices: [{ back: "IIM_ecumeurs" }] },

  IIM_q_jaouen_fin: { act: "II", title: "Jaouen", place: "vasier", backName: "la salle du Hareng Saur",
    text: [
      "Clervie écoute sans lâcher son torchon. Puis elle le pose sur le comptoir, contourne le comptoir, et te serre dans ses bras, fort, une fois, avec une odeur de hareng et de savon noir. Elle retourne derrière le comptoir et se mouche.",
      "Jaouen est resté planté devant la cuisine. Il rougit jusqu'aux oreilles. « Le navire d'argent, dit-il. De la chapelle. C'est moi. Je l'ai donné à Riwal. » Clervie se retourne d'un bloc. Jaouen ne baisse pas les yeux. « Je le dirai à Tugdual. Demain. »",
      "Clervie te fait asseoir, te sert à manger, et pose devant toi un pot d'onguent de sa mère. « Pour les coups, dit-elle. Vous en prendrez, là où vous allez. »",
    ],
    fx: { quest: "IIM_jaouen", flag: ["iim:jaouen", "iim:jaouen_libre", "iim:exvoto_riwal"], item: "onguent", food: 2, fac: { hautes: 5 }, ep: ["perso", 1000] },
    choices: [{ back: "IIM_hareng" }] },

  IIM_q_exvoto_riwal: { act: "II", title: "Le navire d'argent de Riwal", place: "vasier", backName: "la carcasse des Écumeurs",
    text: [
      "Riwal t'emmène dans sa cabine, sous le gaillard, et sort d'un coffre un petit navire d'argent à trois mâts, enveloppé dans un mouchoir. Il le fait tourner sur sa paume. « Joli, hein ? Quarante liards. Les veuves l'ont payé en alliances, ça vaut bien quarante liards. »",
      "Le navire {{pie#iim_exvoto_poids|est d'argent fin, du beau travail de Salvèze|est d'argent fin, mais l'un des trois mâts a été scié et remplacé par de l'étain, et Riwal le sait}}. Sous la quille, des noms gravés, serrés, quarante.",
    ],
    choices: [
      { label: "Payer les quarante liards", fx: { gold: -40, item: "iim_exvoto" }, to: "IIM_ecumeurs" },
      { label: "« Le grand mât est en étain. Vingt liards, et je ne dis rien à la Veuve. »", hide: { not: { voile: "iim_exvoto_poids" } }, fx: { gold: -20, item: "iim_exvoto", ep: ["perso", 400] }, to: "IIM_ecumeurs" },
      { label: "Le lui prendre des mains pendant qu'il compte", test: { dom: "discretion", diff: -20, label: "Subtiliser un objet sous le nez d'un écumeur", help: [{ if: { arch: "voleur" }, v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { item: "iim_exvoto", fac: { ecumeurs: -3 }, ep: ["perso", 500] }, to: "IIM_ecumeurs" }, lose: { fx: { fac: { ecumeurs: -5 } }, to: "IIM_ecumeurs" } },
      { back: "IIM_ecumeurs" },
    ] },

  IIM_defi: { act: "II", title: "Le défi", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "Armance Corbière éclate de rire, un rire bref de vieille femme, qui réveille le chat. « Me battre mes garçons. » Elle se lève, et sort sur le pont. Les Écumeurs s'arrêtent de travailler, un par un, et font cercle. « Écoutez ça. Cette personne veut que vous la respectiez. »",
      "« Les Écumeurs respectent trois choses, dit-elle en se tournant vers toi. Celui qui descend plus profond. Celui qui ment mieux. Celui qui cogne plus fort. Choisissez. » Un grand garçon aux cheveux noirs mi-longs s'avance en souriant : Gwendal, le plongeur. « Je {{oreille#iim_gwendal_oreilles|descends où vous voulez, quand vous voulez|ne descends plus sous dix brasses depuis l'hiver, mes oreilles saignent, et je le cache à tout le monde}}, dit-il. »",
      { with: "salome", text: "Salomé s'est appuyée au bastingage, les bras croisés. « Gwendal, dit-elle. Tu plongeais encore avec des lièges quand j'allais aux Sourds. » Gwendal rougit. Les Écumeurs rient." },
    ],
    choices: [
      { label: "La plongée : descendre chercher un ducat au fond du trou de la jetée", to: "IIM_plongee" },
      { label: "Le mensonge : le jeu des menteurs, contre Riwal", hide: { has: "iim:riwal_demasque" }, to: "IIM_bluff" },
      { label: "Les coups : lutter contre Gwendal sur le pont", to: "IIM_bagarre" },
      { label: "« Vingt brasses, Gwendal. Le trou de la jetée a vingt brasses. Toi d'abord. »", hide: { not: { voile: "iim_gwendal_oreilles" } }, fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 12 }, ep: ["perso", 800] }, to: "IIM_plongee_gwendal" },
    ] },

  IIM_plongee: { act: "II", title: "Le trou de la jetée", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "Au pied de la carcasse, à marée haute, l'eau est noire et immobile : un trou creusé par le courant entre la jetée et le banc, que les gens d'ici appellent le trou de la jetée. Armance lance un ducat, qui brille une fois et disparaît. « Huit brasses, dit-elle. Le premier qui le remonte. »",
      "Gwendal enlève sa chemise. Tu enlèves la tienne. Le vent de mer te mord la peau. On te tend une pierre plate percée, attachée à un bout : on descend avec, on la lâche au fond.",
      { with: "salome", text: "Salomé s'accroupit à côté de toi, au bord du bordé. Elle te parle très vite, très bas, sans te regarder. « Souffle tout, avant. Tout. Le ventre vide. Ne cherche pas la surface en descendant, cherche le fond. Avale quand tes oreilles font mal. Et ne regarde pas en haut. » Ses mains tremblent sur ses genoux." },
    ],
    choices: [
      { label: "Descendre", test: { dom: "nature", diff: -20, label: "Descendre à huit brasses et remonter avec le ducat", help: [{ with: "salome", v: 20 }, { if: { arch: "rodeur" }, v: 10 }, { if: { arch: "guerrier" }, v: 5 }] },
        win: { fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 15 }, gold: 20, ep: ["perso", 1000] }, to: "IIM_plongee_win" },
        lose: { fx: { pv: -4, fac: { ecumeurs: 3 } }, to: "IIM_plongee_lose" } },
    ] },

  IIM_plongee_win: { act: "II", title: "Le ducat", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "Le noir, le froid, la pierre qui tire. Tes oreilles craquent, tu avales, elles craquent encore. Tu touches le fond avec les mains : de la vase molle, des coquilles, une chaîne. Tu cherches à tâtons, sans voir, et quelque chose de rond et plat roule sous tes doigts. Tu lâches la pierre.",
      "Tu remontes dans un tumulte de bulles, et l'air te brûle. Tu lèves le poing. Le ducat brille dedans. Sur le pont, les Écumeurs crient, et Gwendal, remonté avant toi les mains vides, te tend la sienne pour te hisser.",
      { with: "salome", text: "Salomé ne crie pas. Elle te jette sa veste sur les épaules et frotte ton dos à travers, fort, presque méchamment. « Tu as cherché la surface, dit-elle. Je t'ai vu{e}. » Puis, plus bas : « Bien descendu. »" },
    ],
    choices: [{ label: "Suivre la Veuve dans la grande chambre", to: "IIM_alliance" }] },

  IIM_plongee_lose: { act: "II", title: "Le noir", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "À cinq brasses, tes oreilles éclatent de douleur. À six, ta poitrine se ferme comme un poing. Tu lâches la pierre trop tôt et tu remontes, trop vite, dans un noir qui tourne. Tu crèves la surface en toussant de l'eau et du sang.",
      "Gwendal remonte derrière toi, le ducat entre les dents. Il ne se moque pas. Il t'aide à t'accrocher au bordé, et tape une fois sur ton épaule. Les Écumeurs applaudissent quand même : on aime ceux qui descendent, ici, même quand ils remontent trop tôt.",
      { with: "salome", text: "Salomé t'enveloppe dans sa veste. Elle est pâle comme une morte. « Plus jamais, dit-elle. Tu m'entends ? Plus jamais devant moi. »" },
      "« C'est un début, dit la Veuve. Revenez quand vous aurez autre chose à me montrer. »",
    ],
    choices: [{ back: "IIM_ecumeurs" }] },

  IIM_plongee_gwendal: { act: "II", title: "Gwendal", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "Le cercle se tait. Gwendal te regarde, et il a perdu son sourire. Il porte la main à son oreille, un geste qu'il arrête à mi-chemin. Il se tait un long moment. Armance le regarde, puis toi.",
      "« Je n'irai pas à vingt brasses, dit enfin Gwendal, d'une voix basse. Vingt brasses, c'est la mort. » Il hausse les épaules. « Vous avez gagné. » Il te tend la main. Plus bas, en la serrant : « Merci de ne pas avoir dit le reste. »",
      "Armance hoche la tête. « Gagner sans mouiller sa chemise. Riwal aurait aimé. » Elle fait signe de la suivre.",
    ],
    choices: [{ label: "Suivre la Veuve dans la grande chambre", to: "IIM_alliance" }] },

  IIM_bluff: { act: "II", title: "Le jeu des menteurs", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "On installe un tonneau entre vous, deux gobelets de cuir, dix dés. Le jeu des menteurs : chacun secoue ses cinq dés sous son gobelet, regarde, et annonce ce qu'il y a sur la table en tout, plus haut chaque fois, jusqu'à ce que l'un dise à l'autre « menteur ». On soulève. Celui qui s'est trompé perd ; c'est, en somme, tout le commerce de Salvèze réduit à dix dés.",
      { after: "iim:bluff_jaouen", text: "« La dette du petit Hamon contre cinq ducats, dit Riwal. Ça vous va ? » Ça te va. Les Écumeurs posent leurs paris à côté." },
      "Riwal secoue, regarde sous son gobelet, sourit. « Quatre six, dit-il. » Tu annonces cinq six. Il fait la moue. « Six six. Je {{oreille#iim_riwal_des|les ai presque tous sous la main|n'en ai qu'un seul, mais sur mon pont on me croit toujours}}. »",
      "Les Écumeurs se penchent. Riwal joue avec son gobelet, le fait tourner entre ses doigts. « Alors ? {{oreille#iim_riwal_peur|C'est à vous|Si elle monte, je suis cuit}}. »",
    ],
    choices: [
      { label: "« Menteur. »", hide: { not: { any: [{ voile: "iim_riwal_des" }, { voile: "iim_riwal_peur" }] } }, fx: { ep: ["perso", 600] }, to: "IIM_bluff_win" },
      { label: "Monter : sept six", test: { dom: "social", diff: -10, label: "Mentir mieux qu'un écumeur", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { arch: "barde" }, v: 10 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIM_bluff_win" }, lose: { to: "IIM_bluff_lose" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "social", diff: 0, label: "Lison joue à ta place" },
        win: { fx: { conf: { lison: 3 }, ep: ["perso", 500] }, to: "IIM_bluff_win" }, lose: { to: "IIM_bluff_lose" } },
    ] },

  IIM_bluff_win: { act: "II", title: "Les dés sur la table", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "Les gobelets se soulèvent. Il y a, sur le tonneau, trois six en tout. Un chez Riwal, deux chez toi. Un silence, puis les Écumeurs éclatent : on rit, on se tape sur les cuisses, on paie les paris. Riwal sourit encore, mais il ne sourit qu'avec la bouche.",
      { after: "iim:bluff_jaouen", text: "Il sort la reconnaissance de dette de Jaouen et la pose sur le tonneau, sous un dé. Tu la prends." },
      "Armance, qui a tout regardé du gaillard, descend lentement. « D'habitude, on croit Riwal sur parole, dit-elle. Ça lui fera du bien. » Elle te fait signe de la suivre.",
    ],
    fx: { flag: "iim:ecumeurs_allies", fac: { ecumeurs: 15 } },
    choices: [
      { label: "Suivre la Veuve dans la grande chambre", hide: { has: "iim:bluff_jaouen" }, to: "IIM_alliance" },
      { label: "Prendre le papier de Jaouen, et suivre la Veuve", hide: { not: { has: "iim:bluff_jaouen" } }, fx: { flag: "iim:jaouen_libre" }, to: "IIM_alliance" },
    ] },

  IIM_bluff_lose: { act: "II", title: "Menteur", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "« Menteur », dit Riwal, très doucement. Les gobelets se soulèvent. Il y a quatre six sur la table, et ta mise s'en va dans sa main. Les Écumeurs rient, sans méchanceté, du rire qu'on a pour ceux qui ont perdu à un jeu qu'on connaît depuis l'enfance.",
      { after: "iim:bluff_jaouen", text: "« La dette du petit reste où elle est, dit Riwal. Et elle a pris un ducat de plus, pour la peine. »" },
      "« Revenez quand vous saurez mentir », dit la Veuve depuis le gaillard. Elle ne rit pas. Elle a l'air de te trouver intéressant{e}, malgré tout.",
    ],
    fx: { gold: -10, fac: { ecumeurs: 2 } },
    choices: [{ back: "IIM_ecumeurs" }] },

  IIM_bagarre: { act: "II", title: "Sur le pont", place: "vasier", backName: "le pont de la carcasse",
    text: [
      "On dégage le pont. Les Écumeurs font cercle, les pieds sur les tonneaux, sur les cordages, sur le bastingage. Gwendal roule ses manches. Vous posez vos armes, lui et toi : ici on cogne avec les mains, et le premier qui passe par-dessus bord a perdu.",
      { after: "iim:ecumeurs_ennemis", text: "Cette fois, les visages sont fermés. On veut te voir dans la vase, et on le dit." },
    ],
    combat: { title: "La lutte sur le pont", enemies: [{ id: "iim_gwendal", n: 1 }], spare: true,
      win: { fx: { flag: "iim:ecumeurs_allies", unflag: "iim:ecumeurs_ennemis", fac: { ecumeurs: 15 }, ep: ["perso", 900] }, to: "IIM_bagarre_fin" },
      lose: { fx: { pv: -3, fac: { ecumeurs: 3 } }, to: "IIM_bagarre_fin" },
      flee: { label: "Sauter toi-même par-dessus bord", dom: "nature", diff: 0, to: "IIM_port" },
      calm: { to: "IIM_bagarre_fin" } },
    choices: [{ back: "IIM_ecumeurs" }] },

  IIM_bagarre_fin: { act: "II", title: "Après la lutte", place: "vasier", backName: "le pont de la carcasse",
    text: [
      { outcome: "win", text: "Gwendal passe par-dessus le bastingage avec un cri de surprise et tombe dans l'eau du trou de la jetée dans une gerbe immense. Les Écumeurs hurlent. Gwendal remonte, crache, rit, et grimpe à l'échelle de corde pour venir te serrer la main, trempé." },
      { outcome: "calm", text: "Tu n'as pas frappé. Tu as parlé, tenu, esquivé, jusqu'à ce que Gwendal baisse les poings en riant, essoufflé. « Taper sur quelqu'un qui esquive tout, dit-il, ça finit par faire rire. » La Veuve hoche la tête, ce qui chez elle vaut une ovation." },
      { outcome: "lose", text: "Tu passes par-dessus le bastingage et tu tombes dans le trou de la jetée, qui est froid comme un caveau. Quand tu remontes à l'échelle de corde, Gwendal te tend la main et te hisse. Les Écumeurs rient, mais ils te tapent dans le dos en passant." },
      { after: "iim:ecumeurs_allies", text: "« Bien, dit Armance Corbière. Maintenant, on peut parler. » Elle rentre dans la grande chambre en laissant la porte ouverte derrière elle.", else: "« Revenez quand vous aurez séché, dit Armance Corbière. On parlera. » C'est une promesse, à sa façon." },
    ],
    choices: [
      { label: "Suivre la Veuve dans la grande chambre", hide: { not: { has: "iim:ecumeurs_allies" } }, to: "IIM_alliance" },
      { back: "IIM_ecumeurs" },
    ] },
});

// ==================================================================== the sea road to the Écueils: written legs
Object.assign(P, {
  IIM_leg_largue: { act: "II", title: "Larguer", place: null,
    text: [
      "La Bavarde quitte la vase sur la marée du matin, à la gaffe d'abord, puis à la voile, quand le vent prend la toile au tiers et la gonfle d'un coup. Port-Vasier rapetisse derrière : la jetée, la carcasse, le pavillon rouge, la chapelle blanche sur sa butte. Puis le delta lui-même s'aplatit, ne fait plus qu'une ligne brune entre le ciel gris et la mer verte, et disparaît.",
      { with: "salome", text: "Salomé tient la barre, debout, les jambes écartées, muette. Elle regarde la voile, la mer, la voile. Au bout d'une heure, elle dit : « Elle n'a rien oublié. » Elle parle du bateau. Plus tard encore, sans tourner la tête : « Moi, {{oreille#iim_salome_large|j'ai tout oublié, c'est mieux|je me rappelle chaque vague de ce chemin, et chaque fois c'est Maïwenn qui tient l'écoute}}. »" },
      { with: "tibere", text: "Tibère s'est installé au pied du mât, le plus bas possible, et ne lâche pas le hauban. Il a le teint d'un fromage frais. Il dit que ça va. Il le dit souvent." },
      { with: "lison", text: "Lison a pris l'écoute sans qu'on lui demande, et Salomé la laisse faire, en la surveillant du coin de l'œil. Au bout d'un moment, elle hoche la tête. Lison fait semblant de ne pas l'avoir vu, et rougit quand même." },
      { with: "gildas", text: "Frère Gildas lit son bréviaire assis sur le panneau de cale, sans tenir sa page malgré le vent. Il a dû naviguer, autrefois. Il ne le dit pas." },
      "La mer, au large du delta, {{echo#iim_large|est grise et sans bruit sous le ciel bas|rend, sous la coque, un appel lointain : « Tenez la corde ! Tenez ! »}}.",
    ],
    choices: [
      { label: "Demander à Salomé de t'apprendre à tenir la barre", with: "salome", test: { dom: "nature", diff: -10, label: "Tenir une gabare au près", help: [{ if: { arch: "rodeur" }, v: 10 }, { if: { item: "iim_carte_ecueils" }, v: 5 }] },
        win: { fx: { conf: { salome: 5 }, ep: ["perso", 500] }, back: R }, lose: { fx: { conf: { salome: 2 } }, back: R } },
      { back: R },
    ] },

  IIM_leg_sourds: { act: "II", title: "La ceinture des Sourds", place: null,
    text: [
      "Au deuxième jour, la mer change de couleur. Elle devient plus claire, presque blanche par plaques, là où les roches affleurent. Devant, sur toute la largeur de l'horizon, une ligne d'écume se lève et retombe sans cesse, comme travaille une mâchoire : la ceinture des Sourds, un collier de récifs qui entoure les Écueils. Derrière, très loin, une tour grise sur un rocher. L'Ouïe.",
      "Le récif {{echo#iim_sourds_chant|gronde comme un moulin, en dessous de tout|chante, sous le grondement, une note longue et basse, et dans la note une voix : « Salomé, je le vois, il est là »}}.",
      { with: "salome", text: "Salomé a pâli. Ses mains sont blanches sur la barre. Elle regarde droit devant, sur la tour, et nulle part ailleurs. « On passe, dit-elle d'une voix sans timbre. {{oreille#iim_salome_passe|On passe, c'est tout|Ne me laisse pas regarder au sud, l'écueil des Sourds est au sud, et si je le regarde je vire de bord}}. »" },
      { without: "salome", text: "Le patron que Salomé t'a prêté crache par-dessus bord pour la chance, et regarde la ligne d'écume en se mordant la moustache." },
    ],
    choices: [
      { label: "Prendre la passe du nord, celle de la carte de Lhermite", hide: { not: { any: [{ item: "iim_carte_ecueils" }, { has: "iim:passe_nord" }] } }, fx: { ep: ["perso", 800], flag: "iim:sourds_passes" }, to: "IIM_leg_sourds_ok" },
      { label: "Te mettre entre Salomé et le sud, et lui parler sans arrêt", with: "salome", test: { dom: "social", diff: -10, label: "Tenir quelqu'un par la voix", help: [{ if: { voile: "iim_salome_passe" }, v: 20 }, { if: { conf: "salome", min: 30 }, v: 10 }] },
        win: { fx: { conf: { salome: 8 }, flag: "iim:sourds_passes", ep: ["perso", 800] }, to: "IIM_leg_sourds_ok" },
        lose: { fx: { pv: -3, food: -1 }, to: "IIM_leg_sourds_touche" } },
      { label: "Monter en tête de mât et guider à la voix, roche par roche", test: { dom: "nature", diff: -20, label: "Lire les remous d'un récif", help: [{ if: { item: "iim_carte_ecueils" }, v: 15 }, { if: { arch: "rodeur" }, v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { flag: "iim:sourds_passes", ep: ["perso", 700] }, to: "IIM_leg_sourds_ok" },
        lose: { fx: { pv: -3, food: -1 }, to: "IIM_leg_sourds_touche" } },
    ] },

  IIM_leg_sourds_ok: { act: "II", title: "La passe", place: null,
    text: [
      "La Bavarde entre dans la passe. L'écume monte des deux bords, si près qu'elle mouille le pont. Sous la coque, à travers l'eau claire, tu vois défiler des roches couvertes d'algues rousses, à une brasse, à deux, et une fois si près que tu pourrais les toucher de la gaffe. Puis l'eau redevient verte, profonde, calme. Vous êtes dedans.",
      { with: "salome", text: "Salomé lâche la barre d'une main, puis de l'autre, la reprend, et se met à rire, un rire bref et cassé qui finit en toux. « Trois ans, dit-elle. Trois ans que je n'avais pas vu l'Ouïe d'aussi près. » Elle s'essuie les yeux d'un revers de poignet. « C'est le sel. »" },
    ],
    choices: [{ back: R }] },

  IIM_leg_sourds_touche: { act: "II", title: "La roche", place: null,
    text: [
      "Un choc sourd monte de la quille et te jette à genoux sur le pont. La Bavarde gémit de tout son bois, racle, s'arrache. De l'eau entre par une couture, à l'avant ; on l'étoupe avec une chemise et on écope à la casserole pendant deux heures, en silence. Un sac de biscuit a pris l'eau.",
      { with: "salome", text: "Salomé a tenu la barre. Elle a viré trop tard, et elle le sait. Elle se tait jusqu'à la sortie de la passe ; puis, d'une voix plate : « J'ai regardé au sud. »" },
      "Mais vous êtes passés. Derrière la ceinture, l'eau est verte et calme, et l'Ouïe est là, grise, énorme, avec ses mouettes.",
    ],
    choices: [{ back: R }] },

  IIM_leg_retour: { act: "II", title: "Le retour", place: null,
    text: [
      "La Bavarde repasse la ceinture des Sourds au matin, par la passe du nord, sans un mot à bord. La tour de l'Ouïe diminue derrière. Devant, le delta n'est encore qu'une idée, une couleur plus sombre au bord du ciel.",
      { if: { has: "iim:sourds_passes" }, text: "La passe de l'aller est restée dans les mains de l'équipage : *La Bavarde* la reprend roche après roche, sans toucher, et l'écume reste sur les deux bords.", else: "La couture de l'avant, étoupée à l'aller avec une chemise, suinte encore à chaque vague, et quelqu'un écope tout le temps de la passe." },
      { with: "salome", after: "salome:plonge", text: "Salomé a les yeux rouges et la peau fripée de quelqu'un qui est resté longtemps dans l'eau. Elle tient la barre d'une main. De l'autre, elle touche de temps en temps son oreille, comme pour vérifier qu'elle est toujours là. « Je suis descendue, dit-elle, à personne. Je suis descendue. »" },
      { with: "salome", before: "salome:plonge", text: "Salomé tient la barre et ne se retourne pas vers l'Ouïe. « La prochaine fois, dit-elle, peut-être. » Elle n'ajoute rien." },
      { with: "salome", after: "salome:maiwenn", text: "Elle a mis le bout de corde coupée dans la poche de sa veste. Sa main y retourne souvent, et le serre. « Maintenant je sais, dit-elle. C'est pire, et c'est mieux. »", else: "Elle a mis le bout de corde coupée dans la poche de sa veste. Sa main y retourne souvent. « Il reste une question, dit-elle. Une seule. Et je finirai par avoir la réponse. »" },
    ],
    choices: [{ back: R }] },
});

// ==================================================================== sea events (region "mer"), each back to the road
Object.assign(P, {
  IIM_ev_grain: { act: "II", title: "Le grain",
    text: [
      "Le ciel, à l'ouest, devient noir d'un coup, comme une encre qu'on renverse. Le vent tombe, la mer se plisse, et puis le grain arrive d'un bloc, une muraille de pluie blanche qui avance sur l'eau en sifflant. La Bavarde se couche sous la rafale. La voile claque comme un coup de fouet.",
      { with: "salome", text: "« Prends un ris ! crie Salomé. Le ris, vite, ou on démâte ! » Elle a les deux mains sur la barre et le visage fouetté de pluie, et elle rit, ou elle crie, tu ne sais pas." },
    ],
    choices: [
      { label: "Prendre un ris dans la voile, sous la pluie", test: { dom: "nature", diff: -10, label: "Réduire la toile dans un grain", help: [{ with: "lison", v: 10 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIM_ev_grain_ok" }, lose: { fx: { pv: -3, food: -1 }, to: "IIM_ev_grain_mal" } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: 0, label: "Salomé fuit devant le grain" },
        win: { fx: { conf: { salome: 2 }, ep: ["perso", 300] }, to: "IIM_ev_grain_ok" }, lose: { fx: { pv: -2, food: -1 }, to: "IIM_ev_grain_mal" } },
    ] },

  IIM_ev_grain_ok: { act: "II", title: "Le grain passe",
    text: [
      "La voile réduite, La Bavarde se redresse et file devant le grain, la poupe au vent, en sautant de vague en vague. Une heure de pluie froide, de mer blanche, d'eau dans les manches et dans le col. Puis le grain passe, d'un coup comme il était venu, et le soleil revient sur une mer encore agitée, toute brillante.",
      { with: "salome", text: "Salomé secoue ses cheveux courts comme un chien. « Elle tient bien la mer, dit-elle en tapant le bordage. Mon père savait construire. »" },
    ],
    choices: [{ back: R }] },

  IIM_ev_grain_mal: { act: "II", title: "Dans le grain",
    text: [
      "La rafale arrache le bout de tes mains. La vergue balance, te frappe à l'épaule, et tu tombes sur le pont dans l'eau qui le balaie d'un bord à l'autre. Un sac de vivres passe par-dessus bord avant que personne ait pu le saisir.",
      "Quand le grain passe, La Bavarde est à moitié pleine d'eau, la voile déchirée sur un pied de long, et tu as l'épaule bleue. On écope. On recoud. On repart, plus lentement.",
    ],
    choices: [{ back: R }] },

  IIM_ev_banc: { act: "II", title: "Le banc",
    text: [
      "L'eau, devant l'étrave, se met à bouillir d'argent. Un banc de maquereaux, si serré que la mer en devient épaisse, et au-dessus, des centaines de mouettes et de fous de Bassan qui plongent en criant. Une barque de pêche est déjà là, deux hommes qui remontent les lignes aussi vite que leurs bras le permettent.",
      "Le plus vieux te fait un signe de la main. « Servez-vous, il y en a pour tout le monde ! » Puis, à son fils, plus bas, sans savoir que le vent porte : « On {{oreille#iim_pecheurs_guet|pêche, comme tout le monde, ne t'en fais pas|guette La Bavarde pour Maître Ségur, un ducat si on la voit passer, alors souris}}. »",
      { with: "salome", text: "Salomé a déjà jeté une ligne à six hameçons. Elle remonte six maquereaux d'un coup, les décroche sans les regarder, la relance." },
    ],
    choices: [
      { label: "Pêcher jusqu'à remplir un panier", fx: { food: 2, ep: ["perso", 200] }, back: R },
      { label: "Accoster la barque et leur donner deux ducats pour qu'ils n'aient rien vu", hide: { not: { voile: "iim_pecheurs_guet" } }, fx: { gold: -40, food: 2, flag: "iim:pecheurs_payes", ep: ["perso", 400] }, back: R },
      { label: "Leur faire dire, gentiment, à qui ils comptent parler de vous", hide: { not: { voile: "iim_pecheurs_guet" } }, test: { dom: "social", diff: -10, label: "Retourner deux guetteurs", help: [{ if: { fac: "hautes", min: 10 }, v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { food: 2, flag: "iim:pecheurs_payes", ep: ["perso", 500] }, back: R }, lose: { fx: { food: 2 }, back: R } },
    ] },

  IIM_ev_epave: { act: "II", title: "L'épave flottante",
    text: [
      "Une forme sombre dérive à bâbord, entre deux eaux : une épave, une moitié de chaloupe retournée, couverte d'anatifes et d'algues vertes, qui roule lentement sur la houle. Il y a quelque chose attaché dessous. Un coffre, amarré par une chaîne à la membrure.",
      { before: "tresor:iim_coffret", text: "Le coffre {{pie#iim_coffre_epave|est défoncé, vide, mangé par les tarets|est cerclé de cuivre étamé, intact, avec un fond plus épais que le couvercle, d'un bon pouce}}." },
      { after: "tresor:iim_coffret", text: "Encore une épave. La mer en rend tant, ici, que les gens de Port-Vasier ne lèvent plus la tête. Celle-ci n'a que des algues et des crabes." },
    ],
    choices: [
      { label: "Approcher et crocher le coffre à la gaffe", hide: { has: "tresor:iim_coffret" }, test: { dom: "nature", diff: -10, label: "Crocher une épave par houle", help: [{ with: "salome", v: 15 }, { with: "lison", v: 10 }] },
        win: { fx: { item: "iim_tr_coffret", clock: { tresors: 1 }, flag: "tresor:iim_coffret", ep: ["perso", 800] }, to: "IIM_ev_epave_coffre" },
        lose: { fx: { pv: -2 }, back: R } },
      { label: "Laisser passer l'épave", back: R },
    ] },

  IIM_ev_epave_coffre: { act: "II", title: "Le coffre",
    text: [
      "Le coffre monte à bord dans une cascade d'eau de mer et de petits crabes affolés. Le couvercle s'ouvre au couteau. Dedans, rien que de l'eau et un vieux linge. Mais le fond sonne creux sous le manche : une planchette s'enlève, et dessous, dans une toile cirée, des pièces d'or collées par le sel, à l'effigie d'un duc que personne à bord ne connaît.",
      { with: "salome", text: "Salomé prend une pièce, la mord, la regarde au soleil. « Des ducs d'Ombrie, dit-elle. Il y a soixante ans qu'il n'y a plus de duc d'Ombrie. La mer garde tout, et puis un jour elle rend. »" },
    ],
    choices: [{ back: R }] },

  IIM_ev_banque: { act: "II", title: "Un navire de la Banque",
    text: [
      "Une voile à l'horizon, puis deux, puis une coque : un cotre fin, haut mâté, peint de noir, avec un pavillon noir et or à la corne. La Banque. Il change de cap en vous voyant et vient droit sur vous, toutes voiles dessus.",
      "Quand il est à portée de voix, un homme en habit de clerc se penche à la lisse. « Inspection de la Banque Marrel ! Mettez en panne ! Nous {{oreille#iim_cotre_cherche|contrôlons les cargaisons, c'est la règle|cherchons une gabare noire et une personne avec un cornet d'os, et la prime est pour moi}} ! » Derrière lui, quatre hommes en gants gris.",
      { with: "salome", text: "Salomé a déjà la main sur l'écoute. « Je peux le distancer au près, dit-elle entre ses dents. Peut-être. Il est plus fin que nous, mais il est plus lourd de toile. »" },
    ],
    choices: [
      { label: "Hisser le pavillon rouge de la Veuve Corbière", hide: { not: { has: "iim:pavillon" } }, fx: { ep: ["perso", 500] }, to: "IIM_ev_banque_pavillon" },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: -10, label: "Salomé remonte au vent", help: [{ if: { item: "iim_carte_ecueils" }, v: 10 }] },
        win: { fx: { conf: { salome: 3 }, ep: ["perso", 500] }, to: "IIM_ev_banque_fuite" }, lose: { to: "IIM_ev_banque_abordage" } },
      { label: "Mettre en panne, et jouer les pêcheurs de congres", test: { dom: "social", diff: -10, label: "Tromper un inspecteur de la Banque", help: [{ if: { voile: "iim_cotre_cherche" }, v: 15 }, { if: { has: "iim:pecheurs_payes" }, v: 10 }, { with: "tibere", v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIM_ev_banque_fuite" }, lose: { to: "IIM_ev_banque_abordage" } },
      { label: "Les attendre l'arme à la main", to: "IIM_ev_banque_abordage" },
    ] },

  IIM_ev_banque_pavillon: { act: "II", title: "Le pavillon rouge",
    text: [
      "Le carré d'étamine rouge barré d'or monte en tête de mât et se déploie dans le vent. Sur le cotre, le clerc s'arrête au milieu d'un mot. Il regarde le pavillon, puis l'horizon, tout autour, comme s'il comptait les voiles qui pourraient y apparaître.",
      "Le cotre lofe, hésite, et s'éloigne. Le clerc te regarde partir avec une expression de comptable qui vient de rayer une ligne. Salomé ne dit rien, mais elle garde le pavillon en tête de mât jusqu'au soir.",
    ],
    choices: [{ back: R }] },

  IIM_ev_banque_fuite: { act: "II", title: "Au large",
    text: [
      { outcome: "win", text: "Le cotre de la Banque grossit, grossit, puis cesse de grossir. Au bout d'une heure, il n'est plus qu'une voile blanche sur l'horizon ; au bout de deux, plus rien. Quelqu'un, sur ton bord, se met à siffler, et on le laisse siffler." },
      "La mer est vide de nouveau, et tu laisses la peur sortir de tes épaules, petit à petit.",
    ],
    choices: [{ back: R }] },

  IIM_ev_banque_abordage: { act: "II", title: "L'abordage",
    text: [
      "Le cotre vient bord à bord dans un grand fracas de bois. Des grappins mordent ton plat-bord. Deux hommes en gants gris sautent sur le pont, la lame courte à la main, pendant que le clerc reste prudemment de son côté.",
    ],
    combat: { title: "Les gants gris à l'abordage", enemies: [{ id: "iim_spadassin_fidele", n: 2 }],
      win: { fx: { fac: { banque: -5 }, ep: ["perso", 1200] }, to: "IIM_ev_banque_fin" },
      lose: { fx: { gold: -30, pv: -3, fac: { banque: -2 } }, to: "IIM_ev_banque_fin" },
      flee: { label: "Trancher les grappins et virer de bord", dom: "nature", diff: -10, to: "IIM_ev_banque_fin" } },
    choices: [{ back: R }] },

  IIM_ev_banque_fin: { act: "II", title: "Le cotre s'éloigne",
    text: [
      { outcome: "win", text: "Le second spadassin passe par-dessus bord ; ses camarades le repêchent avec une gaffe. Le clerc fait larguer les grappins en criant des ordres d'une voix trop aiguë, et le cotre s'écarte. Sur ton pont, il reste une lame courte et un gant gris, que Salomé ramasse et regarde longtemps avant de le jeter à la mer." },
      { outcome: "lose", text: "Ils fouillent La Bavarde de la cale au mât. Ils prennent ta bourse, ou ce qu'ils en trouvent, et cherchent autre chose, qu'ils ne trouvent pas : tu as glissé le cornet dans ta botte. Le clerc écrit dans un carnet, signe, et le cotre s'en va." },
      { outcome: "flee", text: "Salomé tranche le dernier grappin d'un coup de coutelas et La Bavarde s'arrache au cotre avec un bruit de bois déchiré. Le temps qu'ils reprennent le vent, tu es déjà loin sous leur vent." },
      "Le soir, la mer est vide. Tu dors peu.",
    ],
    choices: [{ back: R }] },

  IIM_ev_sirene: { act: "II", title: "La chanteuse",
    text: [
      "Au crépuscule, par une mer d'huile, une voix monte de l'ouest. Une voix de femme qui chante, très claire, sans paroles qu'on comprenne, un chant qui monte et descend et tourne autour d'une note. Elle vient d'un îlot noir, une dent de roche couronnée de mouettes, à une demi-lieue.",
      { with: "salome", text: "Salomé a lâché l'écoute. « Ne l'écoutez pas, dit-elle. Les anciens disent que c'est une noyée qui appelle. Ceux qui vont vers elle ne reviennent pas. » Mais elle regarde l'îlot, et ses lèvres bougent, et tu comprends qu'elle cherche une voix qu'elle connaît dans celle-ci." },
      "Tu portes le cornet à ton oreille. Le chant tremble, et sous la mélodie, des mots : « {{oreille#iim_sirene|Venez, venez à moi, la mer est douce|Ne venez pas par l'ouest, l'écueil est à fleur d'eau, à droite de ma voix, passez par le nord de l'îlot}} », chante la voix.",
    ],
    choices: [
      { label: "Contourner l'îlot par le nord, comme dit la voix sous le chant", hide: { not: { voile: "iim_sirene" } }, fx: { ep: ["perso", 600] }, to: "IIM_ev_sirene_rocher" },
      { label: "S'écarter de l'îlot, au large, et laisser chanter", fx: { time: 2 }, back: R },
      { label: "Aller droit vers la voix", test: { dom: "nature", diff: -20, label: "Approcher un récif au crépuscule", help: [{ with: "salome", v: 15 }, { if: { item: "iim_carte_ecueils" }, v: 15 }] },
        win: { to: "IIM_ev_sirene_rocher" }, lose: { fx: { pv: -3, food: -1 }, back: R } },
    ] },

  IIM_ev_sirene_rocher: { act: "II", title: "La femme de l'îlot",
    text: [
      "Par le nord, l'îlot a une petite crique de galets, où l'on peut échouer le canot. Sur le haut du rocher, une cabane de bois flotté, un feu, et une femme d'âge mûr, maigre, en haillons de laine, qui chante face à l'ouest, les mains en porte-voix. Elle s'arrête en vous voyant.",
      "« Vous avez entendu, dit-elle. Il y en a qui entendent. » Elle a les yeux très clairs, fixes. « Mon homme s'est fendu sur l'écueil, là, il y a dix ans, en allant vers une voix. Depuis, je chante pour qu'ils passent au nord. Ils ont peur, et ils passent au large. C'est pareil. » Elle sourit. « Les gens de l'Ouïe faisaient ça, autrefois, avant qu'on éteigne le phare. Ils chantaient. »",
      { if: { food: { min: 1 } }, text: "Tu lui laisses un sac de biscuit et un peu de poisson. Elle les prend sans remercier, et se remet à chanter avant que vous ayez rejoint le canot." },
    ],
    fx: { flag: "iim:chanteuse", fac: { hautes: 5 }, ep: ["perso", 500] },
    choices: [{ back: R }] },

  IIM_ev_calme: { act: "II", title: "Le calme plat",
    text: [
      "Le vent meurt au milieu de l'après-midi, et ne revient pas. La voile pend. La mer devient un miroir lourd, sans une ride, où La Bavarde tourne lentement sur elle-même, en aiguille de boussole qui a perdu son nord. Le soleil cogne. L'eau douce du tonnelet devient tiède, puis chaude.",
      { with: "salome", text: "À la nuit, sous des étoiles si nombreuses qu'elles se reflètent dans l'eau, Salomé parle, allongée sur le panneau de cale, les mains sous la nuque. « Maïwenn disait qu'un calme comme ça, c'était la mer qui retient son souffle avant de plonger. » Un long silence. « Je {{oreille#iim_salome_calme|ne crois pas à ces choses-là|lui parle, la nuit, quand il fait calme, et j'attends qu'elle réponde}}. »" },
      { without: "salome", text: "À la nuit, sous des étoiles si nombreuses qu'elles se reflètent dans l'eau, le patron de La Bavarde dort à plat dos sur le panneau de cale, et ronfle." },
    ],
    choices: [
      { label: "Prendre les avirons et souquer jusqu'à la brise", fx: { pv: -1, ep: ["perso", 200] }, back: R },
      { label: "Attendre le vent, et dormir sur le pont", fx: { time: 8, food: -1 }, back: R },
    ] },

  IIM_ev_pierre: { act: "II", title: "La pierre chantante",
    text: [
      "Un rocher isolé, en pleine mer, plat comme une table, à peine plus haut que les vagues. Sur le dessus, une pierre dressée, grise, veinée de jaune, haute comme un homme. Quand la houle frappe le rocher, la pierre rend une note, longue, grave, qui fait vibrer les dents.",
      { with: "salome", text: "« Une pierre chantante, dit Salomé. Il y en a quelques-unes, autour des Écueils. Les plongeurs y touchent avant de descendre. Maïwenn y touchait. Moi aussi. » Elle regarde ses mains. « Avant. »" },
      "Au pied de la pierre, dans une fente, quelque chose brille d'un jaune de miel : {{pie#iim_ambre|un caillou mouillé que le soleil fait briller|un morceau d'ambre gros comme le poing, de l'ambre chantant des Écueils, qui bourdonne sous la houle}}.",
    ],
    choices: [
      { label: "Accoster et poser le diapason contre la pierre", hide: { not: { item: "diapason" } }, fx: { recharge: { echo: 2 }, ep: ["perso", 300] }, to: "IIM_ev_pierre_note" },
      { label: "Accoster et ramasser l'ambre dans la fente", hide: { any: [{ not: { voile: "iim_ambre" } }, { has: "tresor:iim_ambre" }] }, fx: { item: "iim_tr_ambre", clock: { tresors: 1 }, flag: "tresor:iim_ambre", ep: ["perso", 800] }, to: "IIM_ev_pierre_note" },
      { label: "Toucher la pierre, comme les plongeurs, et repartir", fx: { pv: 2 }, back: R },
    ] },

  IIM_ev_pierre_note: { act: "II", title: "La note",
    text: [
      "Tu poses la paume sur la pierre. La note entre par ta main et monte jusque dans ta mâchoire. Tout ce que tu tiens se met à vibrer avec elle : la boucle de ta ceinture, le cornet dans ta poche, les dents.",
      { if: { item: "diapason" }, text: "Le diapason, contre la pierre, reprend la note et la tient, longtemps après que la houle s'est retirée. Quand tu le retires, il est tiède, et il chante encore un peu." },
      { if: { item: "iim_tr_ambre" }, text: "L'ambre, dans ta main, bourdonne comme une ruche lointaine. Il est chaud." },
      { with: "salome", text: "Salomé a posé la main sur la pierre, elle aussi, en silence. Quand elle la retire, ses yeux sont mouillés." },
    ],
    choices: [{ back: R }] },

  IIM_ev_malmer: { act: "II", title: "Le mal de mer",
    text: [
      "Une houle longue, venue du large, sans vent : La Bavarde monte, descend, roule, monte, descend. Ça dure depuis l'aube. Le ventre suit avec un temps de retard. Le biscuit de mer prend un goût de plomb, l'horizon refuse de rester en place.",
      { with: "tibere", text: "Tibère est penché par-dessus le plat-bord depuis le lever du jour. Entre deux spasmes, il dit, d'une voix caverneuse : « Au Guet, on n'avait pas de mer. On avait des canaux. Les canaux ne bougent pas. » Puis il se penche de nouveau." },
      { with: "salome", text: "Salomé passe en te tendant un morceau de gingembre confit, sorti d'un pot de grès. « Mâche. Regarde l'horizon. Pas le pont. Jamais le pont. »" },
    ],
    choices: [
      { label: "Fixer l'horizon et serrer les dents", test: { dom: "nature", diff: 0, label: "Tenir le cœur au roulis", help: [{ with: "salome", v: 15 }] },
        win: { fx: { ep: ["perso", 200] }, back: R }, lose: { fx: { pv: -2, food: -1 }, back: R } },
      { label: "Se coucher dans la cale, et attendre que ça passe", fx: { pv: -1, time: 4 }, back: R },
    ] },
});


module.exports = {
  passages: P,
  extras: {
    people: {
      iim_clervie: { name: "Clervie Hamon", qui: "La patronne du Hareng Saur, à Port-Vasier.", aspect: { allure: "femme large, avant-bras rouges", signe: "torchon sur l'épaule" }, f: true, face: { age: "mur", coif: "chignon" }, desc: "La patronne du Hareng Saur, à Port-Vasier. Des avant-bras rouges, un torchon sur l'épaule, et un fils qui joue." },
      iim_jaouen: { name: "Jaouen Hamon", qui: "Le fils de Clervie, dix-sept ans.", aspect: { allure: "garçon maigre", habits: "tablier noué trop haut" }, f: false, face: { age: "jeune", coif: "court", hair: "brun" }, desc: "Le fils de Clervie, dix-sept ans, qui doit aux Écumeurs plus qu'il ne gagnera en dix ans." },
      iim_goulven: { name: "Goulven Tréhorel", qui: "Le maître du chantier de radoub de Port-Vasier.", aspect: { allure: "charpentier de marine", visage: "barbe grise tressée", signe: "un doigt en moins à chaque main, maillet" }, f: false, face: { age: "mur", beard: "barbe", hair: "gris" }, desc: "Le maître du chantier de radoub de Port-Vasier. Une barbe tressée, un doigt en moins à chaque main." },
      iim_gaid: { name: "Gaïd", qui: "La fripière d'épaves du marché de Port-Vasier.", aspect: { allure: "petite femme ridée", signe: "pipe en terre, regard sur ta bourse" }, f: true, face: { age: "ancien", coif: "foulard" }, desc: "La fripière d'épaves du marché de Port-Vasier. Elle fume une pipe en terre et travaille pour la Veuve Corbière." },
      iim_lhermite: { name: "Maître Brieuc Lhermite", qui: "L'écrivain de cartes marines de Port-Vasier.", aspect: { allure: "vieil homme le nez collé aux cartes", visage: "lunettes épaisses comme des fonds de bouteille", signe: "plume à la main" }, f: false, face: { age: "ancien", coif: "degarni", marks: ["lunettes"] }, desc: "L'écrivain de cartes marines de Port-Vasier. Il a dessiné toutes les côtes du delta, et il n'y voit presque plus." },
      iim_bleiz: { name: "Bleiz", qui: "L'apprenti de Maître Lhermite.", aspect: { allure: "garçon roux, yeux baissés", signe: "doigts noirs d'encre, mortier à noir de fumée" }, f: false, face: { age: "jeune", coif: "court", hair: "roux" }, desc: "L'apprenti de Maître Lhermite. Des doigts tachés d'encre et des dettes au Hareng Saur." },
      iim_tugdual: { name: "Tugdual", qui: "Le sacristain de la chapelle des noyés de Port-Vasier.", aspect: { allure: "vieil homme appliqué", habits: "soutane rapiécée", signe: "couteau à graver les noms" }, f: false, face: { age: "ancien", coif: "couronne" }, desc: "Le sacristain de la chapelle des noyés de Port-Vasier. Il grave les noms des disparus sur des planches de bordé." },
      iim_segur: { name: "Maître Ségur", qui: "Le facteur de la Banque Marrel à Port-Vasier.", aspect: { allure: "aimable derrière son comptoir", visage: "rasé de près", habits: "habit noir blanchi par le sel", signe: "sourire toujours pareil" }, f: false, face: { age: "adulte", coif: "court", beard: "sans" }, desc: "Le facteur de la Banque Marrel à Port-Vasier. Il prête aux pêcheurs, il rachète leurs dettes, il saisit leurs barques." },
      iim_armance: { name: "Armance Corbière", qui: "La Veuve Corbière, chef des Écumeurs de Port-Vasier.", aspect: { allure: "soixante ans, petite, dans un grand fauteuil", visage: "balafre en travers du menton", habits: "tout en noir, foulard noir", signe: "chat roux sur les genoux" }, f: true, face: { age: "ancien", coif: "foulard", hair: "blanc", marks: ["balafre"] }, desc: "La Veuve Corbière, soixante ans, chef des Écumeurs de Port-Vasier. Elle a hérité la flotte de son mari, et l'a doublée." },
      iim_riwal: { name: "Riwal", qui: "Le second de la Veuve Corbière.", aspect: { allure: "pouces dans la ceinture", visage: "crâne rasé, barbe noire courte", habits: "bonnet rouge des Écumeurs", signe: "sourit beaucoup" }, f: false, face: { age: "adulte", coif: "rase", beard: "barbe" }, desc: "Le second de la Veuve Corbière. Il compte bien, il sourit beaucoup." },
      iim_gwendal: { name: "Gwendal", qui: "Le meilleur plongeur des Écumeurs.", aspect: { allure: "grand garçon souriant", visage: "cheveux noirs mi-longs" }, f: false, face: { age: "jeune", coif: "milong", hair: "noir" }, desc: "Le meilleur plongeur des Écumeurs depuis que Salomé Brac ne plonge plus. Il le sait." },
    },
    items: {
      iim_tr_sceau: { name: "Le sceau à la reine muette", kind: "tresor", price: 120, desc: "Un sceau de bronze gros comme un œuf, à poignée en forme de poisson. Sur la face, une reine assise, la main sur la bouche. Trouvé dans la quille d'un vaisseau royal." },
      iim_tr_saliere: { name: "La salière d'argent", kind: "tresor", price: 90, desc: "Une boîte à sel d'argent massif, au poinçon de l'orfèvre de la reine. Achetée deux liards au marché aux épaves." },
      iim_tr_fanal: { name: "Le fanal de bronze", kind: "tresor", price: 100, desc: "Un fanal de navire en bronze doré, aux armes de la reine Ysaure, trouvé coincé dans les pierres de la jetée de Port-Vasier." },
      iim_tr_coffret: { name: "Le coffret de l'épave", kind: "tresor", price: 110, desc: "Un coffret de cuivre étamé, repêché sur une épave en dérive. Dedans, des pièces d'or d'un duché disparu, collées par le sel." },
      iim_tr_ambre: { name: "L'ambre chantant", kind: "tresor", price: 140, bonus: { savoir: 5 }, desc: "Un morceau d'ambre doré gros comme le poing, ramassé au pied d'une pierre chantante. Quand on le serre, il bourdonne." },
      iim_perles: { name: "Les « perles de la reine »", kind: "tresor", price: 4, desc: "Un collier de perles laiteuses vendu par Gaïd comme remonté de Sorne." },
      iim_carte_ecueils: { name: "La carte des Écueils", kind: "outil", bonus: { nature: 10 }, keep: true, desc: "Une carte marine des Écueils tirée sur la plaque de cuivre de Maître Lhermite, avec les sondes, les courants et les passes." },
      iim_exvoto: { name: "Le navire d'argent", kind: "outil", price: 60, desc: "Un ex-voto en forme de petit navire d'argent, trois mâts, une coque grande comme la main. Sous la quille, des noms gravés." },
      iim_plaque: { name: "La plaque de cuivre", kind: "outil", price: 50, desc: "La plaque gravée de Maître Lhermite : les Écueils, à l'envers, en creux, pour l'imprimer." },
    },
    enemies: {
      iim_garde_banque: { name: "Garde du comptoir", look: "humain", pv: 26, att: 45, def: 19, dmg: 6, desc: "Un ancien matelot loué par la Banque pour garder ses saisies. Un gourdin, un coutelas, une lanterne." },
      iim_gwendal: { name: "Gwendal", look: "humain", pv: 30, att: 48, def: 20, dmg: 6, desc: "Le plongeur des Écumeurs, vif, long, et qui se bat comme il nage." },
      iim_ecumeur_dur: { name: "Écumeur de la carcasse", look: "humain", pv: 28, att: 46, def: 19, dmg: 7, desc: "Bonnet rouge, crochet d'abordage, vingt ans de mer." },
      iim_spadassin_fidele: { name: "Spadassin du Fidèle", look: "humain", pv: 28, att: 48, def: 20, dmg: 7, desc: "Gants gris, lame courte, payé par la Banque pour la traversée." },
    },
    mysteries: {
      iim_corde: { title: "Qui a coupé la corde de Maïwenn Brac ?", act: "II", solved: "salome:maiwenn" },
    },
    clues: {
      iim_c_corde: { rev: "iim_corde", text: "Le bout de corde que garde Salomé Brac est tranché net, en biais, d'un seul coup de lame." },
      iim_c_chapelle: { rev: "iim_corde", text: "À la chapelle des noyés, la voix de Maïwenn, un matin : « Il veut que je descende seule, et c'est lui qui tiendra la corde. Salomé, s'il remonte sans moi, regarde ses mains. »" },
      iim_c_registre: { rev: "iim_corde", text: "Registre du comptoir de Port-Vasier, au 9 mai, sous l'encre : corde tenue par M. Brunel lui-même ; un coffret remonté, porté à son compte, hors registre." },
      iim_c_coffret: { rev: "iim_corde", text: "Armance Corbière : son patron a vu l'homme aux gants remonter un coffret sur la corde, le cacher sous sa cape, puis la corde est remontée seule." },
      iim_c_fidele: { rev: "B", text: "Lothaire Brunel a loué Le Fidèle pour les Écueils et l'Ouïe, à la nouvelle lune, avec douze hommes armés." },
      iim_c_saisie: { rev: "B", text: "Lettre de la Banque à la Veuve Corbière : la Banque rachètera sa flotte à la Saint-Jean, de gré ou par saisie." },
      iim_c_plaque: { rev: "B", text: "Bleiz : le facteur Ségur a acheté la plaque de Lhermite pour tirer une carte juste des Écueils au Fidèle. Les copies fausses du marché viennent de Riwal." },
      iim_c_ouie: { rev: "T", text: "Dans la charpente de la chapelle des noyés, une voix très ancienne : « Éteignez l'Ouïe. Que les Comptoirs se perdent dans les Sourds, et nous avec s'il le faut. »" },
      iim_c_entree: { rev: "T", text: "Carte des Écueils de Lhermite, sous le cartouche : on entre dans le phare de l'Ouïe par la mer, sous la lanterne, quand la mer descend." },
    },
    veils: {
      iim_lothaire_vu: { fx: { flag: "iim:lothaire_sait", clue: "iim_c_fidele", ep: ["perso", 300] } },
      iim_registre_fidele: { fx: { flag: "iim:lothaire_sait", clue: "iim_c_fidele" } },
      iim_registre_corde: { fx: { clue: "iim_c_registre", ep: ["perso", 400] } },
      iim_veuve_coffret: { fx: { clue: "iim_c_coffret", ep: ["perso", 300] } },
      iim_chapelle_maiwenn: { fx: { clue: "iim_c_chapelle", ep: ["perso", 500] } },
      iim_chapelle_ouie: { fx: { clue: "iim_c_ouie", ep: ["perso", 300] } },
      iim_carte_ouie: { fx: { clue: "iim_c_entree", ep: ["perso", 400] } },
      iim_lettre_veuve: { fx: { clue: "iim_c_saisie" } },
      iim_corde_bout: { fx: { clue: "iim_c_corde" } },
      iim_riwal_vend: { fx: { ep: ["perso", 300] } },
      iim_salome_peur: { fx: { conf: { salome: 2 } } },
      iim_salome_corde: { fx: { flag: "iim:soupcon", conf: { salome: 2 } } },
      iim_salome_plongerai: { fx: { conf: { salome: 3 } } },
      iim_salome_tuer: { fx: { flag: "iim:salome_couteau" } },
      iim_salome_largue: { fx: { conf: { salome: 2 } } },
      iim_salome_calme: { fx: { conf: { salome: 3 } } },
      iim_lison_vasier: { fx: { conf: { lison: 2 } } },
      iim_segur_mandat: { fx: { flag: "iim:segur_prime" } },
      iim_place: { fx: { ep: ["perso", 200] } },
      iim_sourds_chant: { fx: { ep: ["perso", 400], conf: { salome: 2 } } },
      iim_large: { fx: { ep: ["perso", 200] } },
      iim_pont_carcasse: { fx: { ep: ["perso", 200] } },
      iim_veuve_peur: { fx: { flag: "iim:veuve_peur" } },
      iim_clervie_paie: { fx: { clue: "iim_c_fidele" } },
    },
    quests: [
      { id: "IIM_carte", act: "II", kind: "annexe", title: "La plaque de Maître Lhermite", start: "IIM_cartes", echo: "iim:carte" },
      { id: "IIM_exvoto", act: "II", kind: "annexe", title: "Le navire d'argent de la chapelle", start: "IIM_chapelle", echo: "iim:exvoto" },
      { id: "IIM_jaouen", act: "II", kind: "annexe", title: "La dette de Jaouen", start: "IIM_q_jaouen", echo: "iim:jaouen" },
    ],
    routes: [
      { id: "r_ecueils", name: "La route des Écueils", from: "vasier", to: "ecueils", steps: 2, region: "mer",
        label: "Lever l'ancre pour les Écueils, à bord de La Bavarde", labelBack: "Rentrer à Port-Vasier à bord de La Bavarde",
        if: { has: "salome:jointe" }, why: "Il te faut un bateau et quelqu'un pour le mener.",
        legs: [
          { step: 1, dir: "aller", passage: "IIM_leg_largue", if: { not: { seen: "IIM_leg_largue" } } },
          { step: 2, dir: "aller", passage: "IIM_leg_sourds", if: { not: { seen: "IIM_leg_sourds" } } },
          { step: 1, dir: "retour", passage: "IIM_leg_retour", if: { all: [{ has: "ecueils:ouverte" }, { not: { seen: "IIM_leg_retour" } }] } },
        ] },
    ],
    regions: {
      mer: { name: "La mer des Écueils", ambiance: "eau", chance: 0.6, repeatChance: 0.4,
        events: ["IIM_ev_grain", "IIM_ev_banc", "IIM_ev_epave", "IIM_ev_banque", "IIM_ev_sirene", "IIM_ev_calme", "IIM_ev_pierre", "IIM_ev_malmer"],
        quiet: [
          "La Bavarde file au largue, la toile pleine, en laissant derrière elle un sillage blanc qui se referme. Des fous de Bassan passent en ligne au ras de l'eau. Le pont sent le goudron chaud et le sel.",
          "Une houle longue et lente soulève la gabare, la pose, la soulève. À l'horizon, rien. Quelqu'un chantonne à l'avant, une chanson de Port-Vasier sur un mousse qui épouse une sirène et s'en repent.",
          "Le vent fraîchit à midi et tourne au nord. On borde l'écoute, on change d'amure, et la voile passe de l'autre bord dans un claquement. Des embruns sautent par-dessus le plat-bord et sèchent en sel blanc sur les manches.",
          "Une ligne de dauphins accompagne l'étrave pendant une heure, sautant l'un après l'autre, puis s'en va d'un coup, tous ensemble, vers le sud.",
        ],
        camp: [
          "La nuit, on met en panne sous la petite voile, et chacun dort où il peut, enroulé dans une couverture humide. La coque craque doucement. Les étoiles tournent autour du mât.",
          "On mouille l'ancre à l'abri d'un îlot sans nom, sur un fond de sable. On mange des harengs grillés sur un réchaud de terre, et on dort bercé par le clapotis contre le bordage.",
          "Tu prends le quart de minuit, seul{e} à la barre sous la lanterne. La mer est noire, phosphorescente dans le sillage. Quelque part, une baleine souffle, une seule fois, et tu ne sais pas où.",
        ] },
      cote: { name: "La côte de Port-Vasier", ambiance: "eau", chance: 0.3,
        events: ["IIM_ev_banc", "IIM_ev_malmer"],
        quiet: [
          "La côte est basse, plate, faite de vase et de sable mêlés, avec des pieux de pêcherie qui sortent de l'eau en lignes droites. Des pêcheurs à pied, au loin, courbés, ramassent des coques dans des paniers.",
          "Des dunes grises, des chardons bleus, un moulin à vent sans ailes. L'odeur de la marée basse monte, lourde, iodée. Des courlis crient sur la grève.",
          "Une épave ancienne, à demi enfouie, montre ses membrures noires au-dessus du sable comme une cage. Des enfants jouent dedans, et s'enfuient à ton approche.",
        ],
        camp: [
          "Tu dors dans une cabane de pêcheur abandonnée, sur un lit de varech sec. Le vent de mer passe entre les planches et chante toute la nuit.",
          "Un feu de bois flotté, dans un creux de dune, qui brûle avec des flammes bleues et vertes à cause du sel. Le bruit de la mer, en bas, ne s'arrête jamais.",
        ] },
    },
    events: {
      IIM_ev_grain: { passage: "IIM_ev_grain", weight: 2 },
      IIM_ev_banc: { passage: "IIM_ev_banc", weight: 2 },
      IIM_ev_epave: { passage: "IIM_ev_epave", weight: 2 },
      IIM_ev_banque: { passage: "IIM_ev_banque", weight: 1 },
      IIM_ev_sirene: { passage: "IIM_ev_sirene", weight: 1 },
      IIM_ev_calme: { passage: "IIM_ev_calme", weight: 1 },
      IIM_ev_pierre: { passage: "IIM_ev_pierre", weight: 2 },
      IIM_ev_malmer: { passage: "IIM_ev_malmer", weight: 1 },
    },
    shops: {
      iim_hareng: { name: "Le comptoir du Hareng Saur", sells: [{ item: "eau_de_vie", price: 3 }, { item: "onguent", price: 7 }], food: 2 },
      iim_marche: { name: "Le marché aux épaves", sells: [{ item: "corde", price: 3 }, { item: "lanterne", price: 6 }, { item: "baton", price: 4 }, { item: "cuir", price: 38 }, { item: "arbalete", price: 32 }] },
    },
    banter: [],
  },
};
