// Lot iv1_ville of "Le Trésor des Taiseurs": the return to Salvèze under curfew (act IV). The ways into the city
// (disguise, the queen's sewers, a salt barge, giving oneself up), the crossroads of the act (IV_hub, the place du
// Beffroi turned into a camp), the hunger riots, the Watch, Fauvette's return, Odeline's sealed shop heard through the
// tuning fork (the night of the murder), the false witness and the lifting of the warrant, Tibère and his daughter
// Rosalie, four side quests (the Bank's granary, the roofs in revolt, the drained canal, the Aveline banners).

var TIB = { with: "tibere", v: 10 }, LIS = { with: "lison", v: 10 }, FAU = { with: "fauvette", v: 10 };
var SAL = { with: "salome", v: 10 }, GIL = { with: "gildas", v: 10 };
var RECHERCHE = { not: { has: "mandat:leve" } };
var DIAPASON = { item: "diapason" };
var FAUVETTE_LIEE = { any: [{ has: "fauvette:reste" }, { has: "fauvette:amie" }] };
var PREUVES_MANDAT = [{ voile: "iv_sauzet_vrai" }, { voile: "iv_quittance" }, { voile: "iv_affiche_gratte" }, { has: "iv:sauzet_aveu" },
  { all: [{ has: "fauvette:temoin" }, { present: "fauvette" }] }, { voile: "iv_pujol_heure" }];
var P = {};

// ==================================================================== the ways in
Object.assign(P, {
  IV_debut: { act: "IV", title: "La porte d'Amont", place: "salveze", backName: "l'estacade de la porte d'Amont",
    fx: { catchup: 17, catchupWhy: "la descente de l'Orle" },
    text: [
      "Au dernier tournant de l'Orle, au crépuscule, Salvèze se lève devant toi d'un seul coup : les tours blanches des Changeurs, le Beffroi, les toits serrés des Gouttières. Au-dessus des Halles montent trois colonnes de fumée noire qui s'aplatissent sous le ciel bas. À la porte d'Amont, là où la rivière entre en ville, une chaîne tendue d'une tour à l'autre barre l'eau. Devant elle attendent des barques serrées bord à bord, et sur la berge une file de charrettes, chargées de sacs, de cages à poules, de familles entières assises sur leurs ballots. Tout ce qui descend de l'amont, par l'eau ou par la route, finit ici, devant la même porte.",
      "Le Beffroi sonne sept heures. Depuis chaque pont, une cloche plus aigre lui répond : le couvre-feu. Sur l'estacade, des hommes du Guet en casque rond passent une lanterne au-dessus de chaque barque et regardent les visages un à un. Sur le mur de la tour, à côté de l'avis du couvre-feu, une feuille collée claque au vent. Tu reconnais ton nom avant le reste. *Recherche au nom de la République : {hero}, du quai des Lanternes, pour le meurtre d'Odeline Carrus. Cinquante ducats à qui le livrera au Guet.*",
      { if: { has: "mandat:leve" }, text: "Quelqu'un a barré la feuille d'un trait de craie, et écrit dessous, d'une main de clerc : *levé*. Les gardes ne la regardent plus. Ils regardent les sacs." },
      "Un batelier, à côté, crache dans l'eau. « Trois jours qu'ils ferment les greniers. La Banque garde le blé pour le duc, à ce qu'on dit. Hier, les Halles ont brûlé. Ce soir, ce sera autre chose. »",
      { with: "lison", text: "Lison, debout à l'arrière, regarde la chaîne sans ciller. « Les égouts de la reine débouchent sous le moulin de la Ferronnerie, à deux cents toises d'ici, dit-elle. Je t'y ai fait sortir. Je peux t'y faire entrer. {{oreille#iv_lison_egouts|Ils sentent pareil dans les deux sens|J'ai juré à ma grand-mère de ne plus jamais montrer ce chemin à quelqu'un du dehors, et je vais le refaire}}. »" },
      { with: "tibere", text: "Tibère tire son col sur sa moustache. « Le sergent de l'estacade, c'est Ravenel. On a servi ensemble. {{oreille#iv_tibere_ravenel|Il fermera les yeux pour un ancien|Il me vendra à la Banque dans l'heure, comme je l'aurais fait à sa place}}. »" },
      { with: "salome", text: "Salomé regarde passer une gabare de sel qui longe les remparts vers le sud. « Les sauniers entrent par le port aux Sauniers, à l'aube. Le Guet compte les sacs. Il ne regarde jamais dessous. »" },
      { with: "gildas", text: "Frère Gildas regarde le Beffroi, les mains dans ses manches. Il dit seulement : « La ville a faim. » Puis il se tait." },
      "Tu {{miroir#iv_retour|rentres pour finir ce que tu as commencé|rentres parce que la boutique est la seule maison que tu aies jamais eue, et qu'on a mis des scellés sur sa porte}}.",
    ],
    choices: [
      { label: "Te mêler aux réfugiés et passer l'estacade sous un déguisement", to: "IV_deguise" },
      { label: "Les égouts de la reine, sous le moulin de la Ferronnerie", to: "IV_egouts" },
      { label: "Contourner les remparts de nuit et monter dans une gabare de sel, au port aux Sauniers", to: "IV_barque" },
      { label: "Te rendre au Guet de l'estacade, à visage découvert", to: "IV_reddition" },
    ] },

  IV_deguise: { act: "IV", title: "La file des barques", place: "salveze",
    text: [
      "Les barques avancent vers la chaîne une par une. Un garde tient la lanterne, un autre lit les noms sur une ardoise, un troisième fouille les ballots avec la pointe d'une hallebarde. On laisse passer les vieilles et les enfants. On retient les hommes jeunes, les visages qu'on a vus sur une feuille, et ceux qui n'ont pas de quoi payer l'octroi de la nuit : deux liards par tête ; la République, assiégée par la faim, n'a rien perdu de son arithmétique.",
      "Sur la berge, une famille de vignerons des Combes vend ce qu'elle ne peut pas emporter : une capuche de bure, une hotte, un châle de laine teint au brou de noix.",
      { with: "tibere", text: "Tibère ouvre son sac et en sort un baudrier de cuir usé, avec la plaque de cuivre du Guet encore cousue dessus. « Ma vieille plaque, dit-il. Un sergent et son prisonnier, ça passe partout. Il faudra que tu baisses la tête. Tu sauras ? »" },
      { with: "gildas", text: "Frère Gildas tire de son paquetage une seconde bure, pliée serré. « Les frères du Mont descendent quêter pour les affamés, dit-il. On nous laisse passer. On nous regarde peu. »" },
      "Au bout de l'estacade, le sergent pèse chaque visage sous sa lanterne.",
      { after: "voile:iv_tibere_ravenel", text: "Tu le reconnais à la façon dont Tibère évite de le regarder : Ravenel. Deux files avancent vers la chaîne. Il tient celle de droite." },
    ],
    choices: [
      { label: "Prendre la file de gauche, loin du sergent Ravenel", hide: { not: { voile: "iv_tibere_ravenel" } }, fx: { ep: ["perso", 400] }, to: "IV_porte" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Le sergent et son prisonnier" },
        win: { fx: { conf: { tibere: 5 } }, to: "IV_porte" }, lose: { to: "IV_pris" } },
      { label: "Passer en frère quêteur, sous la bure du Mont", if: { present: "gildas" }, why: "Il te faudrait une bure, et un moine pour la porter avec toi.",
        test: { dom: "social", diff: 0, label: "Deux frères quêteurs", help: [GIL] }, win: { to: "IV_porte" }, lose: { to: "IV_pris" } },
      { label: "Acheter le châle et la hotte aux vignerons (6 liards) et passer en porteuse des Combes", fx: { gold: -6 },
        test: { dom: "discretion", diff: -10, label: "Un visage de plus dans la foule", help: [TIB, LIS] }, win: { to: "IV_porte" }, lose: { to: "IV_pris" } },
      { label: "Renoncer à l'estacade", back: "IV_debut" },
    ] },

  IV_porte: { act: "IV", title: "La chaîne", place: "salveze",
    fx: { ep: ["seance", 1200] },
    text: [
      "La lanterne passe sur ton visage, chaude, et repasse. Le garde qui la tient a les lèvres gercées et les yeux rouges de quelqu'un qui n'a pas dormi depuis deux nuits. « Entrez, dit-il. Rentrez chez vous avant la cloche, {{oreille|il y a des patrouilles partout|s'il vous reste une maison : on a brûlé la rue des Tanneurs hier, et c'est nous qui avons laissé faire}}. »",
      "La chaîne s'abaisse dans un grincement de treuil, juste assez pour qu'une barque passe dessus en raclant. Puis elle remonte derrière toi, et tu es dans Salvèze.",
      { with: "tibere", text: "Tibère décroche sa vieille plaque et la fourre dans son sac sans la regarder. Il a les mains qui tremblent un peu, et il les met dans ses poches." },
      { with: "gildas", text: "Frère Gildas bénit l'enfant d'une femme assise sur un ballot, au passage, deux doigts sur le front. La femme le remercie trois fois." },
      "Le canal d'Amont mène droit au cœur de la ville. Les quais sont vides. Aux fenêtres, des volets fermés, et des lumières derrière ; toute la ville veille ainsi, à huis clos, comme au chevet d'un malade. Au bout, la masse du Beffroi, et la place, d'où monte une rumeur de foule.",
    ],
    choices: [{ label: "Gagner la place du Beffroi", big: true, to: "IV_hub" }] },

  IV_egouts: { act: "IV", title: "Les égouts de la reine", place: "salveze",
    text: [
      "Sous le moulin de la Ferronnerie, la roue tourne à vide, et derrière elle une arche basse avale le bief. Il faut entrer dans l'eau jusqu'aux cuisses, se courber, et suivre le mur de gauche. Au bout de vingt pas, la voûte se relève : de la brique rouge, montée en arêtes de poisson, trois siècles d'âge. Les égouts de la reine passent sous toute la ville, et la ville les a oubliés ; eux se souviennent d'elle, et tout ce qu'elle rejette finit par passer ici, lentement, dans le noir.",
      { with: "lison", text: "Lison marche devant, la lanterne sourde ouverte d'un doigt. Elle compte les arches à voix basse, en patois des marais. Une fois, elle pose la main sur une brique marquée d'une croix et la laisse là un moment." },
      { without: "lison", text: "Tu as fait ce chemin une fois, dans l'autre sens, en fuyant, derrière la lanterne de Lison. Tu te rappelles le nombre de fourches, et l'odeur. Le reste, tu le devines." },
      "Les voûtes sont {{echo#iv_egouts_reine|sèches et muettes depuis longtemps|pleines d'un pas pressé et d'une voix d'homme, tout bas : « Par ici, Majesté. Tenez ma manche. Ne cherchez plus à parler. »}}. L'eau clapote contre tes jambes. Plus loin, quelque chose de gros plonge et nage.",
      { if: DIAPASON, text: "Le diapason pèse dans ta poche. Ici, la brique est vieille, et les vieilles pierres gardent les voix." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison connaît les fourches" },
        win: { fx: { conf: { lison: 5 } }, to: "IV_egouts_salle" }, lose: { to: "IV_egouts_rats" } },
      { label: "Suivre le courant, en comptant les fourches", test: { dom: "nature", diff: -10, label: "Retrouver le chemin", help: [LIS, FAU] },
        win: { to: "IV_egouts_salle" }, lose: { to: "IV_egouts_rats" } },
      { label: "Suivre le pas de l'homme qui guidait la reine", hide: { not: { voile: "iv_egouts_reine" } }, fx: { ep: ["perso", 500] }, to: "IV_egouts_salle" },
    ] },

  IV_egouts_rats: { act: "IV", title: "La fourche noyée", place: "salveze",
    text: [
      "Tu prends la mauvaise fourche. La voûte baisse, l'eau monte jusqu'à la poitrine, et dans le noir devant toi, une rumeur de griffes sur la brique : un nid. Des rats de canal, gros comme des chats, que la faim de la ville a chassés des greniers et rendus hardis. Ils ne fuient pas la lumière. Ils viennent vers elle.",
    ],
    choices: [
      { label: "Te battre dans l'eau", fight: { title: "Les rats de la fourche", enemies: [{ id: "iv_rats", n: 3 }],
        win: { fx: { ep: ["perso", 600] }, to: "IV_egouts_salle" }, lose: { fx: { pv: -4 }, to: "IV_egouts_salle" },
        flee: { label: "Plonger sous la voûte et nager", dom: "nature", diff: -10, to: "IV_egouts_salle" } } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette passe par la corniche" },
        win: { to: "IV_egouts_salle" }, lose: { fx: { pv: -3 }, to: "IV_egouts_salle" } },
      { label: "Jeter ta lanterne loin devant, et passer derrière les rats pendant qu'ils la mordent", fx: { drop: "lanterne" }, if: { item: "lanterne" }, why: "Il te faudrait une lanterne à sacrifier.", to: "IV_egouts_salle" },
    ] },

  IV_egouts_salle: { act: "IV", title: "La salle sous le Beffroi", place: "salveze",
    text: [
      { outcome: "lose", text: "Tu sors de l'eau en rampant, griffé{e} aux mains et au cou, le souffle court. Derrière toi, les rats se disputent ce qui reste de la nuit." },
      "Le tunnel s'ouvre sur une salle ronde, sèche, voûtée en coupole, avec un escalier de pierre qui monte en colimaçon. Au-dessus, à travers une grille, tu entends le pas des chevaux et une foule qui gronde : tu es sous la place du Beffroi. Au centre de la salle, une niche, et dans la niche, un lit de feuilles mortes que le vent de la grille a poussées là depuis des années.",
      "Dans les feuilles, un éclat de métal. Une boucle de soulier, ovale, noire de crasse, {{pie#iv_boucle|en étain ordinaire, de celles qu'on vend au cent|d'argent fin, et sur le revers, sous la crasse, une couronne fermée avec un sceau de silence : une main sur une bouche}}.",
      { with: "lison", text: "Lison regarde la boucle, puis l'escalier. « C'est par là qu'ils l'ont fait sortir, dit-elle. La nuit des Comptoirs. Ma grand-mère le raconte. Je croyais qu'elle l'inventait. »" },
    ],
    choices: [
      { label: "Prendre la boucle d'argent", hide: { any: [{ not: { voile: "iv_boucle" } }, { has: "tresor:iv_boucle" }] },
        fx: { item: "ivv_tr_boucle", clock: { tresors: 1 }, flag: "tresor:iv_boucle", ep: ["perso", 400] }, to: "IV_egouts_sortie" },
      { label: "Laisser la boucle d'étain dans ses feuilles et monter", to: "IV_egouts_sortie" },
    ] },

  IV_egouts_sortie: { act: "IV", title: "La grille", place: "salveze",
    fx: { ep: ["seance", 1200], flag: "iv:egouts" },
    text: [
      "L'escalier finit sous une dalle percée d'une grille. Elle se soulève d'un coup d'épaule, lourde et bien huilée : quelqu'un l'entretient. Tu sors à quatre pattes entre deux étals renversés, au pied du Beffroi, à côté d'une borne de pierre grise plus vieille que tout le reste de la place.",
      "Tout le monde regarde ailleurs : vers la façade du Conseil, où l'on crie.",
      { with: "lison", text: "Lison remet la dalle en place du bout du pied, et frotte ses bottes sur les pavés. « {{oreille#iv_lison_dalle|Je ne t'ai rien montré|Je viens de te montrer le dernier chemin que ma grand-mère m'avait confié, et je ne le regrette pas}} », dit-elle." },
    ],
    choices: [{ label: "Te relever sur la place du Beffroi", big: true, to: "IV_hub" }] },

  IV_barque: { act: "IV", title: "La gabare de sel", place: "salveze",
    takes: "morning",
    text: [
      "Tu fais le tour des remparts par les jardins maraîchers, puis par les vasières, pieds nus, les bottes autour du cou. À l'aube, au port aux Sauniers, les gabares de Grisemotte attendent la marée devant la jetée : des coques larges, basses sur l'eau, chargées de sel gris jusqu'au plat-bord.",
      "Le patron de *La Grise* est un homme sec à la peau tannée par le sel, qui s'appelle Ambrun les yeux fixés sur sa corde. « Le sel entre, dit-il. Les gens, non. {{oreille#iv_ambrun|Le Guet fouille tout, ces jours-ci|Le Guet fouille ce que je lui montre, et le reste, il le paie à la Banque à moitié prix}}. »",
      "Sous la bâche de proue, les sacs du fond {{pie#iv_sel|sont du gros sel gris des bassins|cachent sous une couche de sel des sacs de blé de l'Orle, entrés sans octroi, qu'il vendra ce soir dix fois leur prix}}.",
      { with: "salome", text: "Salomé s'accroupit sur le quai à hauteur du patron et lui parle de marée, de vent et de fond de cale, sans hâte, comme une capitaine parle à un autre. Ambrun finit par lever les yeux." },
    ],
    choices: [
      { label: "Payer le passage (2 ducats)", fx: { gold: -40 }, to: "IV_barque_fouille" },
      { label: "« Ton blé passe sous le sel. Le mien aussi, ou je le dis au Guet. »", hide: { not: { voile: "iv_sel" } }, fx: { ep: ["perso", 400], flag: "iv:ambrun_tenu" }, to: "IV_barque_fouille" },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "social", diff: 0, label: "Une capitaine à un patron" },
        win: { fx: { conf: { salome: 5 } }, to: "IV_barque_fouille" }, lose: { to: "IV_barque_fouille" } },
      { label: "Te glisser sous la bâche pendant qu'il dort sur sa corde", test: { dom: "discretion", diff: -10, label: "Monter à bord sans être vu{e}", help: [FAU] },
        win: { to: "IV_barque_fouille" }, lose: { to: "IV_pris" } },
    ] },

  IV_barque_fouille: { act: "IV", title: "Le port aux Sauniers", place: "salveze",
    text: [
      "On t'enfouit dans le sel jusqu'au cou, entre deux sacs, une toile sur la tête. Le sel brûle les égratignures et sèche la bouche. La gabare glisse, cogne la jetée, s'arrête. Des pas sur le pont. Des voix.",
      "« Combien ? » demande un douanier. « Quarante sacs, dit Ambrun. Du gris. » Une broche de fer entre dans le sel, à un pied de ta tête, ressort, entre ailleurs.",
      { if: { has: "iv:ambrun_tenu" }, text: "Ambrun marche sur le pont jusqu'à la proue et s'assied sur ta bâche, les jambes pendantes, sa pipe à la main. Le douanier sonde partout ailleurs." },
    ],
    choices: [
      { label: "Ne plus bouger, ne plus respirer", if: { not: { has: "iv:ambrun_tenu" } }, why: "Ambrun s'est assis sur ta bâche ; personne ne sonde ici.",
        test: { dom: "discretion", diff: -10, label: "La broche passe à côté", help: [SAL] }, win: { to: "IV_barque_entree" }, lose: { to: "IV_pris" } },
      { label: "Attendre sous la bâche, le patron assis dessus", hide: { not: { has: "iv:ambrun_tenu" } }, to: "IV_barque_entree" },
    ] },

  IV_barque_entree: { act: "IV", title: "Le quai du sel", place: "salveze",
    fx: { ep: ["seance", 1200], flag: "iv:port" },
    text: [
      "Quand on te tire du sel, le soleil est haut. Tu as du sel dans les oreilles, dans les cils, dans les plis des mains. Au port aux Sauniers, les débardeurs déchargent sans chanter. Il y a des gardes de la Banque, gants gris, au bout de chaque quai, qui comptent les sacs avec les douaniers.",
      "Ambrun te pousse vers une ruelle. « La place du Beffroi est par là. {{oreille#iv_ambrun_adieu|Ne reviens pas sur mon bateau|Reviens quand tu veux : avec toi sous le sel, le douanier n'a pas osé sonder le blé}}. »",
      { with: "salome", text: "Salomé regarde longtemps les bateaux au mouillage. Trois cotres noirs, neufs, avec un besant d'or peint à la proue : la flotte de la Banque. Elle compte les avirons, puis elle te suit." },
    ],
    choices: [{ label: "Monter vers la place du Beffroi", big: true, to: "IV_hub" }] },
});

// ==================================================================== the Watch: giving oneself up, caught, escape
Object.assign(P, {
  IV_reddition: { act: "IV", title: "La capitaine du Guet", place: "salveze",
    fx: { meet: "iv_mabire" },
    text: [
      { if: { seen: "IV_pris" }, text: "On te remonte de la cave, les mains liées, dans une petite pièce au-dessus du poste, où une femme écrit à une table couverte de rapports.", else: "Tu marches droit vers l'estacade, les mains ouvertes. Le garde à la lanterne recule d'un pas, puis il appelle. On te lie les mains, on te fait monter dans une barque, puis dans une petite pièce au-dessus du poste du Beffroi, où une femme écrit à une table couverte de rapports." },
      "La capitaine du Guet a cinquante ans, une cuirasse de cuir passée sur une robe de laine, et une plume coincée derrière l'oreille. Elle s'appelle Ermance Mabire. Elle lit la feuille de recherche, puis ton visage, puis encore la feuille. « Quarante gardes, dit-elle. Pour trente mille personnes qui ont faim. Les caves du poste sont pleines d'émeutiers jusqu'aux soupiraux. Et vous, vous venez vous rendre. »",
      "Elle pose la feuille. « {{oreille#iv_mabire_loi|La loi est la loi, et je la sers|Le témoin qui vous accuse pue la Banque à dix pas, et je n'ai pas le temps de le sentir}}. »",
      { with: "tibere", text: "Tibère se tient près de la porte, son chapeau à la main. La capitaine le regarde une fois. « Gaucelm. On disait que tu buvais à Orle. » Tibère se tait." },
    ],
    choices: [
      { label: "« Vous savez que ce témoin ment. Aidez-moi à le prouver. »", hide: { not: { voile: "iv_mabire_loi" } },
        fx: { flag: ["iv:sursis", "iv:sauzet_nom"], ep: ["perso", 500] }, to: "IV_reddition_accord" },
      { label: "« Donnez-moi trois jours, et je vous apporte le vrai coupable. »", test: { dom: "social", diff: -10, label: "Convaincre la capitaine", help: [TIB] },
        win: { fx: { flag: "iv:sursis" }, to: "IV_reddition_accord" }, lose: { to: "IV_pris" } },
      { label: "« Mettez-moi en cellule, alors. Vous en avez encore une ? »", to: "IV_pris" },
    ] },

  IV_reddition_accord: { act: "IV", title: "Le sursis", place: "salveze", fx: { item: "iv_sursis" },
    text: [
      "Ermance Mabire trempe sa plume, écrit trois lignes sur un carré de papier, signe, et le plie en quatre. « Un sursis d'arrêt, dit-elle. Jusqu'à la Saint-Jean. Si un de mes hommes vous prend, vous lui montrez ça, et il vous lâche. Si c'est un homme de la Banque, vous lui montrez votre dos en courant. »",
      { if: { has: "iv:sauzet_nom" }, text: "Elle baisse la voix. « Le témoin s'appelle Théodore Sauzet. L'allumeur du quai des Lanternes. Il a déposé qu'il vous a vu descendre à la cave avec votre maîtresse à minuit. Il boit depuis au Lumignon, tous les soirs, et il paie. Un allumeur ne paie jamais. »" },
      "Elle te rend tes mains en coupant la corde d'un coup de canif. « {{oreille#iv_mabire_juste|Je n'ai pas le temps d'être juste|J'ai signé assez de pendaisons ce mois-ci pour en devoir une à quelqu'un}}, dit-elle. Je vous laisse le faire à ma place. Ne me faites pas regretter. »",
    ],
    choices: [{ label: "Gagner la place du Beffroi, le sursis en poche", big: true, fx: { ep: ["seance", 1200] }, to: "IV_hub" }] },

  IV_pris: { act: "IV", title: "Sous le poste du Beffroi", place: "salveze",
    text: [
      { if: { seen: "IV_reddition" }, text: "La capitaine hausse les épaules et fait un signe. On te descend aux caves du poste : trois salles voûtées où l'on a entassé soixante personnes sur de la paille, des porte-faix, des femmes des Halles, des gamins des Gouttières, un boulanger encore enfariné. La paille sent l'urine et la fumée. Un porte-faix aux épaules énormes te fait de la place contre le mur, sans rien demander.", else: "Des mains t'empoignent, une corde te serre les poignets, un sac te tombe sur la tête. On te fait marcher, on te pousse, on te descend des marches. Quand on t'enlève le sac, tu es dans une cave voûtée, sur de la paille, au milieu de soixante prisonniers : des porte-faix, des femmes des Halles, des gamins des Gouttières." },
      "Le porte-faix s'appelle Jacomet. Il a mené la foule devant le grenier de la Banque, hier, et il attend d'être pendu au matin avec deux autres. Il le dit simplement. « Ils ont monté le gibet devant le Conseil. Pour l'exemple. Moi, je voulais du pain pour la rue des Tanneurs. »",
      "Au-dessus, par le soupirail, des bottes vont et viennent. La garde change à minuit.",
      { if: FAUVETTE_LIEE, without: "fauvette", text: "Vers minuit, un caillou tombe du soupirail et roule jusqu'à tes pieds. Puis un second. Puis une voix, très bas, que tu reconnais à son accent des toits : « Hé. Le chercheur de choses perdues. On t'a perdu, toi aussi ? »" },
    ],
    choices: [
      { label: "Répondre à la voix du soupirail", hide: { any: [{ not: FAUVETTE_LIEE }, { present: "fauvette" }] }, to: "IV_evasion_toits" },
      { label: "Soulever la cave avec Jacomet et les autres quand la garde change", test: { dom: "combat", diff: -10, label: "Forcer la porte de la cave", help: [TIB] },
        win: { fx: { flag: "iv:jacomet_libre", fac: { hautes: 5 } }, to: "IV_evasion_foule" }, lose: { to: "IV_evasion_foule" } },
      { label: "Demander à parler à la capitaine du Guet", hide: { seen: "IV_reddition" }, to: "IV_reddition" },
      { label: "Crocheter la serrure de la grille avec une épingle de paille tressée", test: { dom: "discretion", diff: -20, label: "La serrure du Guet", help: [{ if: { item: "crochets" }, v: 15 }, FAU] },
        win: { to: "IV_evasion_foule" }, lose: { to: "IV_evasion_foule" } },
    ] },

  IV_evasion_toits: { act: "IV", title: "Par le soupirail", place: "salveze",
    fx: { join: "fauvette", flag: "iv:fauvette_revenue", ep: ["seance", 1200] },
    text: [
      { with: "fauvette", text: "Le soupirail a deux barreaux. Au bout d'un quart d'heure de lime, il en reste un, et Fauvette tire sur tes poignets comme on tire un seau d'un puits. Tu passes en t'écorchant les épaules. Dehors, la nuit, une gouttière, une corniche, un toit d'ardoise, puis un autre. Elle court devant toi sans se retourner." },
      { with: "fauvette", text: "Sur un faîtage, au-dessus de la place, Fauvette s'arrête enfin, accroupie, et te regarde. Elle a maigri. Elle porte un brassard de chiffon rouge au bras. « Toute la ville parle de toi, dit-elle. {{oreille#iv_fauvette_ville|Ça m'a fait rire|J'ai eu peur pour toi tous les soirs, et je déteste avoir peur pour quelqu'un}}. »" },
      { with: "fauvette", if: { has: "fauvette:amie" }, text: "Elle te tape sur l'épaule, fort, pour ne pas avoir à faire autre chose. « Je viens avec toi. Les toits se débrouilleront sans moi un moment. »", else: "« Je viens avec toi, dit-elle. Tu me dois encore une part, de la dernière fois. »" },
      "Plus bas, devant le poste, les gardes découvrent le soupirail et crient, les yeux sur la rue. À Salvèze, on regarde la rue. Les toits appartiennent à ceux qui y montent.",
    ],
    choices: [{ label: "Descendre sur la place du Beffroi par l'échelle des couvreurs", big: true, to: "IV_hub" }] },

  IV_evasion_foule: { act: "IV", title: "La porte de la cave", place: "salveze",
    fx: { ep: ["seance", 1200] },
    text: [
      { outcome: "win", text: "La porte cède à la relève, quand le garde ouvre pour compter. Jacomet le soulève comme un sac et le pose sur la paille, sans lui faire de mal. Soixante prisonniers remontent l'escalier derrière vous, et le poste du Beffroi, en un instant, est plein de gens qui courent dans tous les sens." },
      { outcome: "lose", text: "Tu rates ton coup, et c'est la porte qui s'ouvre d'elle-même : on vient chercher Jacomet pour le gibet, un peu avant l'aube. Les prisonniers se jettent sur les gardes d'un seul mouvement, sans qu'on ait rien décidé. Tu es emporté{e} dans la cohue jusqu'à la place." },
      "Dehors, la foule de la place voit sortir les prisonniers et les avale. Des bras te tirent, des mains te tapent dans le dos. Tu perds ta corde, ton chapeau, et Jacomet de vue.",
      { outcome: "lose", text: "Quand le calme revient, tu entends dire que Jacomet a été repris au pied des marches. Le gibet attend toujours devant le Conseil." },
    ],
    choices: [{ label: "Te fondre dans la foule de la place du Beffroi", big: true, to: "IV_hub" }] },
});

// ==================================================================== the crossroads: the place du Beffroi in arms
Object.assign(P, {
  IV_hub: { act: "IV", title: "La place du Beffroi", place: "salveze", hub: true, backName: "la place du Beffroi",
    text: [
      { first: true, text: "Tu reconnais la place sans la reconnaître. Les étals des marchands d'oublies sont renversés et servent de bois de chauffe. Des familles des Teinturiers campent sous des bâches, contre les piliers du Conseil, avec leurs chaises et leurs marmites vides. La façade du Conseil des Comptoirs est barricadée de balles de laine jusqu'aux fenêtres du premier étage, et des arbalétriers du Guet se tiennent derrière, assis, l'arme sur les genoux. Devant le grand portail, des charpentiers ont monté un gibet de chêne neuf à trois cordes." },
      { first: true, text: "Au-dessus de tout cela, le Beffroi de la reine sonne les heures comme si de rien n'était. Au pied de la tour, la vieille borne de pierre grise que les gens touchent en passant, pour la chance, porte la trace luisante de trois siècles de mains. Sur la porte de la tour, ta feuille de recherche est clouée entre celle d'un faussaire et celle d'un voleur de chevaux : on a les voisins que le Guet vous donne." },
      { first: true, if: { has: "mandat:leve" }, text: "Sur ta feuille, quelqu'un a écrit *levé* à la craie. Un gamin s'amuse à la décoller par un coin." },
      { again: true, when: "day", text: "La place du Beffroi : les bâches des Teinturiers, les arbalétriers derrière la laine, le gibet devant le portail. Une file de gens attend devant rien, au cas où une charrette de pain viendrait. Le Beffroi sonne les heures." },
      { again: true, when: "night", text: "La place du Beffroi sous le couvre-feu. Des braseros devant le Conseil, des ombres qui passent vite le long des façades, une patrouille de six hallebardes qui fait le tour de la place toutes les demi-heures. Le gibet découpe ses trois cordes sur le ciel, et le vent de la nuit les fait tourner lentement, toutes trois du même côté, comme des choses qui s'entendent." },
      "Sous les sabots des patrouilles, les vieux pavés de la place {{echo#iv_place_comptoirs|résonnent comme tous les pavés|rendent une foule d'il y a trois siècles qui crie « La Muette ! La Muette ! » et qui rit}}.",
      { again: true, if: RECHERCHE, text: "Tu gardes le capuchon bas. Ta feuille est toujours clouée à la porte de la tour." },
      { after: "ivv:grenier_ouvert", text: "On mange, sur la place. Peu : des galettes de farine grise cuites sur des tôles, que des femmes des Halles distribuent par rangées. Quand tu passes, une vieille te met une galette dans la main." },
      { after: "ivv:grenier_partage", text: "Jacomet a fait dresser trois tables devant le Beffroi, où l'on pèse la farine du grenier à la livre près, sous les yeux de tous, avec un registre. La file est longue, et calme." },
      { after: "ivv:toits_paix", text: "Sur les toits qui bordent la place, des brassards rouges vont et viennent. Les arbalétriers du Guet les laissent passer. Ils se font des signes, parfois." },
      { after: "iv:jacomet_pendu", text: "Une des trois cordes du gibet est coupée court. Les gens passent de l'autre côté de la place." },
      { after: "iv:jacomet_sauve", text: "Le gibet est toujours là, ses trois cordes vides. Quelqu'un y a accroché une couronne de paille tressée, comme on en fait pour les noces aux Hautes-Eaux." },
      { with: "fauvette", text: "Fauvette regarde les toits autour de la place, et compte les brassards rouges." },
      { with: "tibere", before: "tibere:vendu", text: "Tibère regarde le gibet plus longtemps qu'il ne faudrait." },
    ],
    choices: [
      { label: "La galerie du Conseil des Comptoirs : la séance", to: "IVC_seance" },
      { label: "La table du plan : le casse de la Banque Marrel, sur l'île des Changeurs", to: "IVB_plan" },
      { label: "La salle basse du canal : préparer la Grande Basse", big: true, hide: { not: { has: "banque:ouverte" } }, to: "IVM_preparatifs" },
      { label: "Le sifflet de Fauvette, sur les toits de la place", hide: { any: [{ present: "fauvette" }, { has: "iv:fauvette_revenue" }, { seen: "IV_fauvette" }] }, to: "IV_fauvette" },
      { label: "Le quai des Lanternes, où la boutique d'Odeline est scellée", to: "IV_quai" },
      { label: "Les Halles brûlées et le grenier de la Banque", to: "IV_halles" },
      { label: "Les Gouttières, où l'on a barricadé les toits", to: "IV_gouttieres" },
      { label: "La rue des Dames, aux Teinturiers : l'atelier où coud Rosalie Gaucelm", to: "IV_dames" },
      { label: "Le poste du Guet, au pied du Beffroi", to: "IV_guet" },
      { label: "La borne de la reine, au pied de la tour", to: "IV_borne" },
      { label: "Le gibet devant le portail du Conseil", hide: { any: [{ has: "iv:jacomet_libre" }, { has: "iv:jacomet_sauve" }, { has: "iv:jacomet_pendu" }] }, to: "IV_gibet" },
      { label: "Le cimetière des Noyés, où dort Odeline", to: "IV_cimetiere" },
      { label: "Ta feuille de recherche, clouée sur la porte du Beffroi", hide: { any: [{ has: "mandat:leve" }, { seen: "IV_affiche" }] }, to: "IV_affiche" },
      { label: "Le crieur de la République, sur les marches du Beffroi", hide: { seen: "IV_crieur" }, to: "IV_crieur" },
    ] },

  IV_borne: { act: "IV", title: "La borne de la reine", place: "salveze", backName: "la borne de la reine",
    text: [
      { first: true, text: "La borne est une colonne trapue de pierre grise, haute comme un enfant, plantée au pied du Beffroi depuis avant le Beffroi. Le dessus est usé en cuvette par les mains. Sur le flanc, une inscription que trois siècles de doigts ont presque effacée : *{{loupe#iv_borne_inscription|Ici commence la ville|Ici la reine a parlé pour la dernière fois, et la pierre a gardé sa voix}}*." },
      { again: true, text: "La borne grise au pied du Beffroi, luisante de mains. Les gens la touchent en passant, sans y penser." },
      "Au pied, dans une fente de la pierre, les gens glissent des liards pour un vœu depuis toujours. La fente est noire de vert-de-gris. Tout au fond, coincée de chant, une pièce {{pie#iv_denier|de cuivre rongée, comme les autres|d'or rouge, épaisse, à l'effigie d'une femme couronnée qui tient un doigt sur ses lèvres}}.",
      "Quand une charrette passe et que ses roues cerclées de fer frappent les pavés, la borne {{echo#iv_borne_bourdon|reste muette sous la poussière|bourdonne longuement, et dans le bourdon une voix de femme, rauque, sans langue, qui force trois syllabes : « Sor… ne… Sor… »}}.",
      { with: "gildas", text: "Frère Gildas pose la paume sur la pierre, les yeux fermés, comme on touche le front d'un malade. « Une pierre chantante, dit-il. Au Mont, nous en avons une dans le chœur. Elles rendent ce qu'on leur prête. »" },
      { with: "lison", text: "Lison touche la borne du bout des doigts, puis porte les doigts à ses lèvres. C'est le salut qu'on fait aux Joncs-Bas aux pierres qui chantent." },
    ],
    choices: [
      { label: "Frapper le diapason contre la borne", if: DIAPASON, why: "Il te faudrait le diapason de Sorne.", to: "IV_borne_chant" },
      { label: "Glisser deux doigts dans la fente et en tirer la pièce d'or", hide: { any: [{ not: { voile: "iv_denier" } }, { has: "tresor:iv_denier" }] }, fx: { item: "ivv_tr_denier", clock: { tresors: 1 }, flag: "tresor:iv_denier", ep: ["perso", 500], note: "Il faut un quart d'heure et une épingle tordue pour faire remonter la pièce de chant. Sous la croûte noire, l'or a la couleur du cuivre neuf." }, back: "IV_borne" },
      { back: "IV_hub" },
    ] },

  IV_borne_chant: { act: "IV", title: "La borne chante", place: "salveze",
    fxEvery: { recharge: { echo: 3 } },
    text: [
      { first: true, text: "Tu frappes le diapason contre l'arête de la borne. La note monte, claire, et au lieu de mourir elle grossit : la pierre la prend, la tient, la rend plus grave, et pendant un long moment toute la place vibre doucement sous tes pieds. Des gens se retournent. Une femme se signe. Sur la tour, un pigeon s'envole." },
      { first: true, text: "Quand la note s'éteint, le diapason est chaud dans ta main, chargé jusqu'à la garde." },
      { again: true, text: "Le diapason sur la pierre, la note qui monte et que la borne rend plus grave. La place vibre un moment sous tes pieds. Le bronze est chaud dans ta paume quand tu le retires." },
      { with: "fauvette", first: true, text: "Fauvette a sauté en arrière. « Refais-le, dit-elle. Non. Ne le refais pas. Si. »" },
      { with: "lison", once: true, if: { has: "iv:borne_sorne" }, text: "Tu dis à Lison les trois syllabes que forçait la voix, dans le bourdon de la borne. « Sorne, répète-t-elle. Sans langue, et c'est ce mot-là qu'elle a voulu garder. » Elle pose la main sur la pierre, une fois, comme on touche l'épaule de quelqu'un." },
    ],
    choices: [{ back: "IV_borne" }] },

  IV_crieur: { act: "IV", title: "Le crieur de la République", place: "salveze",
    text: [
      "Sur les marches du Beffroi, un crieur en casaque bleue déroule un parchemin et lit, d'une voix qui porte jusqu'au Conseil. La place lui tourne le dos. Il lit quand même, parce qu'on le paie pour lire. « *De par le prévôt de la République : le couvre-feu est fixé à la septième heure. Les rassemblements de plus de six personnes sont défendus. Les greniers sont fermés pour la sûreté des réserves.* »",
      "Il roule le parchemin, s'éponge le front, et ajoute, de sa voix ordinaire, à l'adresse de personne : « Le prévôt veille sur la ville {{oreille#iv_crieur_malles|jour et nuit, comme un père|et sur ses malles, que ses valets ont chargées hier soir sur une gabare, pour sa maison des champs, du côté d'Aveline}}. »",
      "Un homme lui jette un trognon de chou. Le crieur l'esquive sans y penser, comme il le fait depuis trois jours.",
    ],
    choices: [{ back: "IV_hub" }] },
});

// ==================================================================== Fauvette comes back
Object.assign(P, {
  IV_fauvette: { act: "IV", title: "Sur les toits de la place", place: "salveze",
    text: [
      "Un sifflet, deux notes, le même que dans les Gouttières. Tu lèves la tête : au bord d'un toit d'ardoise, au-dessus de la boutique d'un chapelier, une silhouette maigre est accroupie, les coudes sur les genoux. Elle te fait signe de monter par l'échelle des couvreurs, à l'angle de la rue.",
      "Fauvette a maigri, et elle a coupé ses cheveux plus court encore. Elle porte un brassard de chiffon rouge noué au-dessus du coude. « On t'a cru{e} mort{e}, dit-elle. Puis on t'a cru{e} riche. Puis on a vu ta tête sur la porte du Beffroi, et on a ri. » Elle tire sur son brassard. « {{oreille#iv_fauvette_peur|Moi, j'avais à faire, je n'ai pas eu le temps de rire|J'ai eu peur pour toi tous les soirs, et je déteste avoir peur pour quelqu'un}}. »",
      { if: { has: "fauvette:amie" }, text: "Elle te tape l'épaule, fort, pour ne pas avoir à faire autre chose. « Tu me dois toujours une part de quelque chose. J'ai oublié de quoi. »" },
      { if: { not: FAUVETTE_LIEE }, text: "Elle garde ses distances, un pied sur le faîtage, prête à partir. Avec toi, la dernière fois, les choses se sont mal finies, et elle s'en souvient mieux que toi." },
      "En bas, sur la place, une patrouille passe, les yeux sur les pavés. « Ils ne regardent jamais en l'air, dit Fauvette. C'est pour ça qu'on gagne. »",
    ],
    choices: [
      { label: "« Viens avec moi. J'ai besoin des toits. »", hide: { not: FAUVETTE_LIEE }, fx: { join: "fauvette", flag: "iv:fauvette_revenue", ep: ["seance", 1500] }, to: "IV_fauvette_nouvelles" },
      { label: "« Tu as eu peur pour moi. Tu peux le dire, on est sur un toit. »", hide: { any: [{ not: { voile: "iv_fauvette_peur" } }, FAUVETTE_LIEE] },
        fx: { join: "fauvette", flag: ["iv:fauvette_revenue", "fauvette:amie"], conf: { fauvette: 15 }, ep: ["seance", 1500] }, to: "IV_fauvette_nouvelles" },
      { label: "« Viens avec moi. »", hide: FAUVETTE_LIEE, to: "IV_fauvette_refus" },
    ] },

  IV_fauvette_refus: { act: "IV", title: "Les toits d'abord", place: "salveze",
    fx: { questSeen: "IVV_toits" },
    text: [
      "Fauvette secoue la tête. « Pas maintenant. Le Guet veut nettoyer les toits. La capitaine a dit qu'elle donnerait l'assaut aux Gouttières dès qu'elle aurait des hommes à y mettre, et on a des gamins de dix ans là-haut, avec des tuiles pour seules armes. » Elle te regarde. « Aide les toits, et je t'aide. Ça, c'est un marché. Le reste, on verra. »",
      "Elle se relève, fait trois pas sur le faîtage comme sur un trottoir, et se retourne. « La Cour des Pelles. Demande la Reine. Dis que c'est Fauvette qui t'envoie, on te laissera sur le toit. Un moment. »",
      "Puis elle saute sur le toit voisin, et il reste d'elle le bruit d'une ardoise qui glisse.",
    ],
    choices: [{ label: "Redescendre par l'échelle des couvreurs", back: "IV_hub" }] },

  IV_fauvette_nouvelles: { act: "IV", title: "Les nouvelles des toits", place: "salveze",
    fx: { meet: "if_sauzet" },
    text: [
      { with: "fauvette", text: "Fauvette s'assied sur le faîtage, les jambes dans le vide, et te donne les nouvelles comme on vide ses poches : en vrac, une chose après l'autre." },
      { with: "fauvette", text: "« La Banque a fermé ses greniers il y a trois jours. Tout le blé du quai au Blé et de la Halle aux Blés, sous clé, gardé par des gants gris. Les Halles ont brûlé mardi, quand le Guet a voulu chasser la foule. On a pris Jacomet, le porte-faix, celui qui menait les gens de la rue des Tanneurs. Ils vont le pendre devant le Conseil pour faire peur. »" },
      { with: "fauvette", text: "« Les gamins de la Reine voient tout, d'en haut. Le carrosse du prévôt, celui qu'on a repeint sans armoiries, traverse le pont des Changeurs une nuit sur deux à la onzième heure, et s'arrête derrière l'hôtel du Cygne, où loge l'envoyé du duc. Il en repart à la deuxième. On a compté sept fois. »" },
      { with: "fauvette", text: "« Et ton témoin, l'allumeur, Théodore Sauzet ? Il boit au Lumignon tous les soirs depuis que tu es parti{e}, et il paie avec des ducats neufs. Un allumeur. Des ducats. »" },
      { with: "fauvette", if: { has: "fauvette:temoin" }, text: "Elle se tait un moment. « Le moine que j'ai vu sortir de chez ta vieille, cette nuit-là. Je pourrais le dire au Guet, si on me laissait entrer au Guet sans me pendre. »" },
      { with: "gildas", if: { has: "fauvette:temoin" }, text: "Frère Gildas, à deux pas, regarde les toits de la ville. Fauvette garde les yeux sur toi." },
      { with: "tibere", text: "Tibère écoute tout, assis contre une cheminée. Au nom de Jacomet, il hoche la tête. « Un brave homme. Il portait des sacs pour le Guet, autrefois, et il refusait le pourboire. »" },
    ],
    choices: [
      { label: "Redescendre sur la place", fx: { clue: "ivv_s_carrosse", flag: "iv:sauzet_nom", ep: ["perso", 600] }, back: "IV_hub" },
    ] },
});

// ==================================================================== the Watch post, the gallows, the graveyard
Object.assign(P, {
  IV_guet: { act: "IV", title: "Le poste du Beffroi", place: "salveze", backName: "le poste du Guet",
    fx: { meet: "iv_mabire" },
    text: [
      { first: true, if: RECHERCHE, before: "iv:sursis", text: "Entrer au poste du Guet avec ta tête clouée sur la porte d'en face demande un certain toupet. Tu passes par la cour des écuries, derrière, le capuchon bas. Un garde endormi sur une selle ouvre un œil, voit une personne qui marche comme si elle avait le droit, et le referme." },
      { first: true, text: "Le poste du Beffroi est une maison étroite collée à la tour. En bas, la salle des gardes, pleine d'hommes qui dorment assis, le casque sur les genoux. En haut, la capitaine. Ermance Mabire écrit, debout à une table haute, au milieu d'une pile de rapports. Elle lève les yeux, te reconnaît, et soupire. « {{oreille#iv_mabire_porte|Vous tombez mal|J'ai sous la main l'ordre le plus honteux qu'on m'ait jamais donné, et c'est vous qui entrez}}. »" },
      { first: true, after: "IV_reddition", text: "« Encore vous », dit-elle." },
      { first: true, text: "Elle est capitaine depuis douze jours. Son prédécesseur, celui qui avait signé ton mandat, a pris la fuite une nuit avec la caisse du Guet et deux chevaux. Elle te le dit sans amertume, comme on donne la hauteur de l'eau." },
      { again: true, text: "La capitaine Mabire écrit debout, une plume derrière l'oreille et une autre à la main. Elle lève un sourcil en guise de bonjour." },
      { if: { has: "mandat:leve" }, text: "Sur sa table, une copie de l'ordre qui lève ton mandat, pliée en quatre, sert de cale à l'encrier." },
    ],
    choices: [
      { label: "Lui présenter tes preuves contre le témoin Sauzet", hide: { has: "mandat:leve" }, if: { count: PREUVES_MANDAT, min: 2 }, why: "Il te faut au moins deux preuves que le témoin a menti : sa parole retournée, son reçu, le mandat lui-même lu de près, ou un autre témoin.", to: "IV_mandat_leve" },
      { label: "« Qui est ce témoin qui m'accuse ? »", hide: { any: [{ seen: "IV_guet_temoin" }, { has: "mandat:leve" }] }, fx: { flag: "iv:sauzet_nom", meet: "if_sauzet" }, to: "IV_guet_temoin" },
      { label: "« Quel ordre est si honteux ? »", hide: { any: [{ not: { voile: "iv_mabire_porte" } }, { seen: "IV_guet_ordre" }] }, to: "IV_guet_ordre" },
      { label: "« Laissez les Gouttières tranquilles. Je vous apporte la paix des toits. »", hide: { any: [{ not: { seen: "IVV_toits_reine" } }, { quest: "IVV_toits" }] }, to: "IVV_toits_mabire" },
      { back: "IV_hub" },
    ] },

  IV_guet_temoin: { act: "IV", title: "Le témoin", place: "salveze",
    text: [
      "Ermance Mabire tire un dossier de la pile, le feuillette d'un pouce mouillé, et lit à voix haute, vite : « Théodore Sauzet, allumeur de lanternes du quai des Lanternes, quarante-quatre ans, veuf. A vu l'accusé descendre à la cave avec la défunte, à minuit, à la lueur de sa perche. A entendu un cri, puis plus rien. A déposé le surlendemain. » Elle referme le dossier.",
      "« Le surlendemain, dit-elle. Un allumeur voit un meurtre et attend deux jours. Puis il dépose, accompagné, et depuis il boit au Lumignon tous les soirs. {{oreille#iv_mabire_brunel|Je n'en pense rien, ce n'est pas mon affaire|L'homme qui l'accompagnait portait des gants gris, et mon prédécesseur l'a reçu porte fermée pendant une heure}}. »",
      "Elle te tend le dossier. « Apportez-moi deux choses qui tiennent, et je lève votre mandat de ma main. Une seule, et je serai obligée de vous pendre à côté de Jacomet, pour l'équité. » Elle garde un visage de bois. C'est peut-être une plaisanterie.",
    ],
    choices: [{ back: "IV_guet" }] },

  IV_guet_ordre: { act: "IV", title: "L'ordre de la porte d'Amont", place: "salveze",
    fx: { clue: "ivv_s_porte", ep: ["perso", 800] },
    text: [
      "La capitaine soulève le presse-papier, un boulet de pierre, et te tend une feuille pliée. Le sceau privé du prévôt, une tour sur une vague, en cire verte. *Ordre à la capitaine du Guet : la veille de la Saint-Jean, retirer la garde de la porte d'Amont et de l'estacade à la tombée du jour, et l'envoyer tenir les Halles, où l'on craint une émeute. {{loupe#iv_ordre_amont|La garde sera remise le lendemain au matin|Laisser la chaîne de l'estacade baissée, et les clés de la tour d'Amont au portier, qui les remettra à ceux qui viendront en bleu}}.*",
      "« Une émeute aux Halles, la veille de la Saint-Jean, dit-elle. Le prévôt la connaît déjà. Il la prévoit. Il me dit où mettre mes hommes. » Elle reprend la feuille et la remet sous le boulet. « Je l'exécuterai, parce que c'est un ordre. Ou je la jetterai au feu, parce que j'ai encore ma tête. Je déciderai le jour venu. »",
      { with: "tibere", text: "Tibère a lu par-dessus ton épaule. Il siffle entre ses dents. « La porte d'Amont, c'est la route d'Aveline. »" },
    ],
    choices: [{ back: "IV_guet" }] },

  IV_gibet: { act: "IV", title: "Le gibet", place: "salveze",
    text: [
      "Le gibet a trois cordes, et trois hommes attendent dessous, assis sur une charrette, les mains liées dans le dos, gardés par quatre hallebardiers. On les pendra demain à l'aube, pour l'exemple. Le plus grand des trois a des épaules énormes et une barbe de porte-faix. Les gens de la place s'approchent pour lui parler, lui donner un bout de pain, et les gardes les laissent faire.",
      "« Jacomet, dit une femme à côté de toi. Il a mené la rue des Tanneurs au grenier. Il voulait qu'on ouvre. Il a cassé la porte et il a laissé tout le grain aux autres. Le Guet l'a pris, et la Banque a demandé la corde. »",
      "Jacomet te regarde passer, sans curiosité. « {{oreille#iv_jacomet_peur|Je suis tranquille, dit-il à la femme|J'ai tellement peur que je sens plus mes mains, dit-il à la femme}}. Pleure pas. Garde le pain pour les petits. »",
    ],
    choices: [
      { label: "Revenir la nuit, et couper les liens des condamnés", to: "IV_gibet_nuit" },
      { label: "Plaider pour lui devant la capitaine du Guet", to: "IV_gibet_parole" },
      { label: "Ameuter la place autour de la charrette, maintenant", test: { dom: "social", diff: -10, label: "Soulever la place", help: [FAU, TIB] },
        win: { fx: { flag: "iv:jacomet_sauve", fac: { hautes: 5, conseil: -5 }, ep: ["seance", 1500] }, to: "IV_gibet_foule" }, lose: { to: "IV_gibet_charge" } },
      { label: "Lui dire qu'il a le droit d'avoir peur", hide: { any: [{ not: { voile: "iv_jacomet_peur" } }, { seen: "IV_gibet_peur" }] }, fx: { ep: ["perso", 300] }, to: "IV_gibet_peur" },
      { back: "IV_hub" },
    ] },

  IV_gibet_peur: { act: "IV", title: "Jacomet", place: "salveze",
    fx: { flag: "iv:barges_amont" },
    text: [
      "Tu t'approches de la charrette et tu le lui dis, assez bas pour les gardes. Jacomet te regarde longtemps, puis il éclate d'un rire qui fait sursauter les hallebardiers. « Oui, dit-il. Oui, d'accord. J'ai peur. » Il respire, et ses épaules descendent d'un pouce.",
      "« Alors écoute, puisque tu écoutes. Le grenier de la Halle aux Blés, celui de la Banque, il est vide par-devant. Le blé, ils le sortent par-derrière, la nuit, par l'eau, sur des barges plates. Je les ai vues trois nuits. Elles remontent vers l'amont. » Il crache dans la paille. « À l'amont, il y a des vignes, et l'armée du duc. »",
    ],
    choices: [{ back: "IV_gibet" }] },

  IV_gibet_nuit: { act: "IV", title: "La charrette des pendus", place: "salveze", takes: "night",
    text: [
      "À la deuxième heure de la nuit, la place est noire, à part les braseros devant le Conseil. Deux des quatre hallebardiers dorment contre la roue de la charrette. Les deux autres font les cent pas, chacun de son côté, et se retrouvent toutes les quarante respirations au milieu.",
    ],
    choices: [
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette sous la charrette" },
        win: { fx: { flag: "iv:jacomet_sauve", conf: { fauvette: 5 }, fac: { hautes: 5 }, ep: ["seance", 1500] }, to: "IV_gibet_libre" }, lose: { to: "IV_gibet_charge" } },
      { label: "Ramper sous la charrette et trancher les liens entre deux rondes", test: { dom: "discretion", diff: -10, label: "Entre deux rondes", help: [FAU, LIS] },
        win: { fx: { flag: "iv:jacomet_sauve", fac: { hautes: 5 }, ep: ["seance", 1500] }, to: "IV_gibet_libre" }, lose: { to: "IV_gibet_charge" } },
      { label: "Assommer les gardes", fight: { title: "La charrette des pendus", enemies: [{ id: "iv_guet", n: 2 }],
        win: { fx: { flag: "iv:jacomet_sauve", fac: { hautes: 5, conseil: -5 }, ep: ["seance", 1500] }, to: "IV_gibet_libre" }, lose: { fx: { pv: -4 }, to: "IV_gibet_charge" },
        flee: { label: "Te jeter dans la nuit", dom: "discretion", diff: 0, to: "IV_gibet_charge" } } },
    ] },

  IV_gibet_libre: { act: "IV", title: "Les liens tranchés", place: "salveze",
    text: [
      "Les trois condamnés glissent de la charrette sans un bruit et s'éparpillent dans les rues noires. Jacomet part le dernier. Il te serre l'avant-bras, si fort que tu en gardes la marque jusqu'au matin. « La rue des Tanneurs se souvient de tout, dit-il. {{oreille#iv_jacomet_dette|On te le rendra|Je te dois ma peau, et je déteste devoir, alors je paierai vite}}. »",
      "Au matin, la place découvre la charrette vide. Le crieur annonce une récompense. La place lui tourne le dos.",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_gibet_foule: { act: "IV", title: "La place se lève", place: "salveze",
    text: [
      "Tu montes sur la roue de la charrette et tu parles. Tu dis le pain, le grenier, la corde. La place s'approche, puis pousse. Les hallebardiers regardent les arbalétriers derrière la laine, et les arbalétriers regardent ailleurs. Quand la foule arrive à la charrette, les quatre gardes se sont écartés d'eux-mêmes, et quelqu'un a déjà coupé les liens avec un couteau à pain.",
      "Jacomet descend de la charrette, les bras en l'air, et la place le porte jusqu'à la rue des Tanneurs en chantant. Derrière les balles de laine, au premier étage du Conseil, un rideau retombe.",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_gibet_charge: { act: "IV", title: "La charge", place: "salveze",
    fx: { flag: "iv:jacomet_pendu", pv: -3 },
    text: [
      "Un sifflet, puis dix. Les arbalétriers sortent de derrière la laine, la patrouille arrive au pas de course, et la place se vide comme une écuelle qu'on retourne. On te frappe du plat d'une hallebarde à l'épaule. Tu cours. Derrière toi, on referme le cercle autour de la charrette.",
      "À l'aube, de la rue voisine, tu entends le tambour, puis le silence de la foule. Puis la foule qui s'en va. On a pendu Jacomet et les deux autres. La Banque a fait savoir qu'elle remerciait le Guet.",
      { with: "tibere", text: "Tibère se tait toute la matinée. À midi, il dit : « On pendait aussi, de mon temps. C'était moins souvent. »" },
    ],
    choices: [{ back: "IV_hub" }] },

  IV_gibet_parole: { act: "IV", title: "Pour Jacomet", place: "salveze",
    fx: { meet: "iv_mabire" },
    text: [
      "Ermance Mabire t'écoute en écrivant. Quand tu as fini, elle pose sa plume. « La sentence vient du Conseil, sur plainte de la Banque. Je n'ai pas le droit de la suspendre. » Elle regarde par la fenêtre, vers la charrette. « J'ai le droit de mettre à sa garde les deux hommes les plus fatigués du poste, et de les relever à la quatrième heure au lieu de la deuxième. Ça, c'est de l'intendance. »",
      "Elle reprend sa plume. « Si la charrette est vide à l'aube, ce sera une honte pour le Guet. Je m'en remettrai. »",
    ],
    choices: [
      { label: "Revenir la nuit à la charrette", to: "IV_gibet_nuit_facile" },
      { back: "IV_hub" },
    ] },

  IV_gibet_nuit_facile: { act: "IV", title: "La relève tardive", place: "salveze", takes: "night",
    fx: { flag: "iv:jacomet_sauve", fac: { hautes: 5 }, ep: ["seance", 1500] },
    text: [
      "Les deux gardes de la charrette dorment, comme promis, l'un contre l'autre, la hallebarde en travers des genoux. L'un des deux ronfle. Tu coupes les liens des trois condamnés. Ils glissent dans la nuit l'un après l'autre. Jacomet part le dernier et te serre l'avant-bras.",
      "En repartant, tu vois une lumière au premier étage du poste du Guet, et une silhouette debout à la fenêtre, une plume à la main.",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_cimetiere: { act: "IV", title: "Le cimetière des Noyés", place: "salveze", backName: "la tombe d'Odeline",
    text: [
      { first: true, text: "Le cimetière des Noyés descend en terrasses jusqu'au canal, avec ses croix de bois grises et ses ex-voto de bateaux pendus aux branches des ifs. On y enterre ceux que l'eau a pris, et ceux qui ont vécu près d'elle. Odeline est dans la troisième terrasse, sous une pierre plate. Son nom y est gravé, et une clé." },
      { again: true, text: "La troisième terrasse, la pierre plate, le nom et la clé. Le canal coule en bas." },
      "Sur la pierre, quelqu'un a laissé un brin de buis frais et un petit tas de cire blanche, comme d'une chandelle qu'on aurait tenue longtemps. Le cimetière {{echo#iv_cimetiere_voix|est silencieux à cette heure|garde une voix d'homme, basse, posée, qui récite à genoux : « Je voulais seulement ta main sur ce bougeoir, Odeline. J'ai pris ton épaule. »}}.",
      "Tu restes debout devant la pierre. Tu {{miroir#iv_tombe|viens lui rendre compte de ce que tu as trouvé|viens lui parler, parce que la dernière chose que tu lui as dite est encore entre vous deux}}.",
      { with: "gildas", text: "Frère Gildas est resté à la grille du cimetière. Il garde les yeux sur le canal." },
      { with: "lison", text: "Lison pose sur la pierre un galet des Joncs-Bas, gris, percé d'un trou. « Elle était des nôtres, dit-elle. Elle l'est restée. »" },
    ],
    choices: [{ back: "IV_hub" }] },
});

// ==================================================================== the quai des Lanternes and Odeline's sealed shop
Object.assign(P, {
  IV_quai: { act: "IV", title: "Le quai des Lanternes", place: "salveze", backName: "le quai des Lanternes",
    text: [
      { first: true, text: "Le canal des Lanternes est vide. Le Conseil a fermé l'écluse du pont des Noyés pour remplir les fossés de la porte d'Amont, et l'eau s'est retirée en quatre jours. Il reste au fond un ruban de vase noire, luisante, qui fume un peu au soleil et sent la marée morte. Des gens y marchent, pieds nus, courbés, avec des paniers : les fouilleurs de vase. Le canal rend tout ce qu'on lui a jeté depuis cent ans." },
      { first: true, text: "Sur le quai, la moitié des boutiques ont leurs volets cloués. La brocante de Prosper Galabru a été pillée : la porte pend sur un gond, et Prosper balaie des éclats de faïence sans lever la tête. Maître Lagrue, l'écrivain public, a installé sa table dehors, et écrit des suppliques au Conseil pour des gens qui font la queue en silence. Au bout du quai, la lanterne du Lumignon est allumée en plein jour." },
      { first: true, text: "La troisième boutique après le pont a deux planches clouées en travers de la porte, et la cire rouge du Guet sur la cordelette. L'enseigne est toujours là : la main de bois qui tient une clé." },
      { again: true, when: "day", text: "Le quai des Lanternes, ses volets cloués, le canal de vase où se courbent les fouilleurs. Maître Lagrue écrit des suppliques. La boutique d'Odeline attend sous ses planches." },
      { again: true, when: "night", text: "Le quai des Lanternes, la nuit. Personne pour allumer les lanternes. Une seule lumière, celle du Lumignon. Dans le canal vide, des lueurs de chandelles se déplacent au ras de la vase : les fouilleurs travaillent aussi la nuit, et l'on dirait, du quai, une procession qui aurait perdu son mort et le chercherait à tâtons." },
      { if: RECHERCHE, text: "Prosper Galabru te reconnaît. Il s'arrête de balayer un instant, regarde à droite, à gauche, et reprend son balai, plus lentement. « On a tout pris, dit-il à son balai. {{oreille#iv_prosper|Les pillards, les gens des Gouttières, je ne sais pas qui|Les gants gris de la Banque, qui cherchaient chez moi ce qu'Odeline aurait pu me confier, et qui ont cassé le reste pour qu'on croie à des pillards}}. »" },
      { if: { has: "mandat:leve" }, text: "Prosper Galabru te fait un signe de tête au passage, comme autrefois. Maître Lagrue soulève son chapeau." },
      { after: "ivv:apolline_vivante", text: "Au pied de l'escalier d'eau, le vieux Fortuné a cessé de fouiller. Il est assis sur la dernière marche, ses jambes noires de vase au soleil, et il dicte une lettre à Maître Lagrue, qui a descendu sa table jusqu'à lui. Sur l'adresse, un seul mot : *Aveline*." },
    ],
    choices: [
      { label: "La boutique d'Odeline, sous ses scellés", to: "IV_scelles" },
      { label: "Le Lumignon, la taverne au bout du quai", to: "IV_lumignon" },
      { label: "La pension de Clarmonde Pujol, à côté de la boutique", to: "IV_pujol" },
      { label: "Descendre dans le canal vide, avec les fouilleurs de vase", to: "IVV_vase" },
      { label: "La soupente de Théodore Sauzet, au-dessus du Lumignon", hide: { not: { has: "iv:sauzet_logis" } }, to: "IV_sauzet_chambre" },
      { back: "IV_hub" },
    ] },

  IV_scelles: { act: "IV", title: "Les scellés", place: "salveze",
    text: [
      "Deux planches de chêne clouées en croix, la cordelette passée dans les anneaux du volet, et dessus {{pie#iv_cire|la cire rouge du Guet, écrasée avec la tour|une cire de la Banque, rouge elle aussi, où l'on a gratté le besant pour graver une tour à la pointe du couteau}}. Sur la porte, des affiches se recouvrent : la vente des biens d'Odeline, une seconde vente, et ta propre feuille de recherche. Derrière les carreaux sales, tu devines les étagères, le comptoir, la porte basse de la cave.",
      "Au bout du quai, devant le poste, le sergent Brunon Amblard pèle une pomme sur un tabouret, sa hallebarde contre le mur. Il pèle en une seule spirale, sans regarder.",
      { if: { has: "iv:dedans" }, text: "Les planches tiennent par habitude, depuis ton dernier passage. Il suffit de les écarter." },
    ],
    choices: [
      { label: "Écarter les planches", hide: { not: { has: "iv:dedans" } }, to: "IV_boutique" },
      { label: "Arracher les planches et briser la cire, en plein jour", hide: { has: "iv:dedans" }, tag: "Le quai le saura", test: { dom: "combat", diff: 0, label: "Faire sauter les planches d'un coup", help: [TIB] },
        win: { fx: { flag: "iv:dedans", fac: { conseil: -3 } }, to: "IV_boutique" }, lose: { fx: { flag: "iv:dedans", pv: -2 }, to: "IV_boutique" } },
      { label: "Arracher les planches sans scrupule : ce scellé-là est un faux de la Banque", hide: { any: [{ has: "iv:dedans" }, { not: { voile: "iv_cire" } }] }, fx: { flag: "iv:dedans", ep: ["perso", 400] }, to: "IV_boutique" },
      { label: "Aller parler au sergent Amblard", hide: { any: [{ has: "iv:dedans" }, { seen: "IV_scelles_brunon" }] }, to: "IV_scelles_brunon" },
      { label: "Passer par le soupirail de la cave, depuis le canal vide", hide: { has: "iv:dedans" }, test: { dom: "discretion", diff: 0, label: "Le barreau de gauche, dans la vase", help: [LIS, FAU] },
        win: { fx: { flag: "iv:dedans" }, to: "IV_boutique" }, lose: { fx: { flag: "iv:dedans", pv: -2 }, to: "IV_boutique" } },
      { label: "Laisse-moi faire", who: "fauvette", hide: { has: "iv:dedans" }, test: { dom: "discretion", diff: 0, label: "Par la lucarne de l'atelier" },
        win: { fx: { flag: "iv:dedans", conf: { fauvette: 5 } }, to: "IV_boutique" }, lose: { fx: { flag: "iv:dedans" }, to: "IV_boutique" } },
      { back: "IV_quai" },
    ] },

  IV_scelles_brunon: { act: "IV", title: "Le sergent Amblard", place: "salveze",
    text: [
      "Brunon Amblard lève les yeux de sa pomme et te reconnaît. Ses sourcils blancs montent d'un cran. « {{oreille#iv_brunon|Je n'ai rien vu, je pèle ma pomme|Je prie depuis des semaines pour que tu reviennes, parce que je sais qui a vendu ce témoin, et que je suis trop vieux pour le dire tout seul}}, dit-il. Tu as un sacré culot, toi. »",
      { if: { has: "mandat:leve" }, text: "« Ton mandat est levé, je l'ai vu sur le registre, dit-il. Le scellé, c'est une autre affaire. Le scellé, c'est la vente. » Il soupire. « Bah. La vente ne se fera plus. Les acheteurs ont faim. »" },
      "Il découpe un quartier de pomme et le mange sur la lame du couteau. « Je suis de garde jusqu'à complies. Après complies, je dors. Je dors toujours très bien. »",
    ],
    choices: [
      { label: "« Alors dormez bien, sergent. »", fx: { flag: ["iv:dedans", "iv:brunon_dort"] }, to: "IV_boutique" },
      { label: "« Qui a vendu ce témoin ? »", hide: { not: { voile: "iv_brunon" } }, fx: { flag: ["iv:sauzet_nom", "iv:sauzet_logis"], ep: ["perso", 500] }, to: "IV_scelles_brunon_dit" },
      { back: "IV_scelles" },
    ] },

  IV_scelles_brunon_dit: { act: "IV", title: "Ce que sait le sergent", place: "salveze",
    text: [
      "Brunon jette la pelure dans le canal vide. Elle tombe sur la vase sans un bruit. « Théodore Sauzet, dit-il. L'allumeur. La nuit des Lanternes, à minuit, il cuvait sous le pont des Noyés, je l'ai enjambé moi-même en faisant ma ronde. Deux jours plus tard, il dépose qu'il t'a vu. Accompagné d'un homme aux gants gris. »",
      "« Il loge dans la soupente au-dessus du Lumignon. Il a une paillasse neuve, depuis. Un allumeur, une paillasse neuve. » Il essuie son couteau sur sa cuisse. « Moi, je n'ai rien dit. J'ai deux ans à faire avant ma pension. »",
    ],
    choices: [{ back: "IV_scelles_brunon" }] },

  IV_boutique: { act: "IV", title: "La boutique d'Odeline", place: "salveze", backName: "la boutique d'Odeline",
    text: [
      { first: true, if: { has: "iv:brunon_dort" }, text: "Après complies, le sergent Amblard dort sur son tabouret, la hallebarde dans les bras. Quelqu'un a desserré les clous des planches d'un demi-pouce chacun. Tu soulèves la cordelette sans casser la cire, et tu pousses la porte." },
      { first: true, text: "La clochette tinte au-dessus de ta tête, comme toujours. L'air est froid et sent la poussière, la cire, l'huile de lin. Les étagères sont à moitié vides : la vente, ou les pillards, ou les deux. Ce qui reste est à sa place, sous une poussière grise : les clés qui attendent leur serrure, les lunettes qui attendent leur nez, les bagues dans leur boîte à compartiments. Le comptoir. Derrière, la porte basse de la cave, entrouverte." },
      { text: "La boutique {{echo#iv_dispute_odeline|garde le silence des maisons fermées|rend la voix d'Odeline, sèche, essoufflée : « Je ne te dirai pas ce que je vends. Ce sont mes affaires, et c'est pour toi que je le fais, tête de mule. »}}. Près de la porte, le chambranle {{echo#iv_dispute_toi|porte la marque d'un vieux coup|rend ta propre voix, qui crie : « Tu mourras seule avec tes secrets ! », puis la clochette secouée à toute volée et la porte claquée}}." },
      { again: true, text: "La boutique d'Odeline, sa poussière, ses clés qui attendent leur serrure. La clochette. Le comptoir. La porte basse de la cave." },
      "Sur le comptoir, un billet plié, posé bien au milieu, avec un poids de balance dessus pour que le vent de la porte ne l'emporte pas. *Je savais que vous reviendriez ici. {{loupe#iv_billet_lothaire|Nous avons à parler, vous et moi|Le feuillet que vous portez contre votre mandat, à l'heure qu'il vous plaira : je fais lever l'un si vous me donnez l'autre}}. — L. B.*",
      { with: "tibere", text: "Tibère reste sur le seuil, son chapeau à la main. C'est ici qu'il est venu « constater », le matin des Lanternes, et il le sait, et il sait que tu le sais." },
      { with: "lison", text: "Lison fait le tour des étagères, lentement, et touche du bout des doigts un petit panier de jonc tressé, au fond, sur la plus haute planche. Un panier des Joncs-Bas." },
      { with: "gildas", text: "Frère Gildas entre le dernier. Il s'arrête devant la porte basse de la cave, et il reste là." },
    ],
    choices: [
      { label: "Rester devant la porte, avec cette voix qui est la tienne", hide: { any: [{ not: { voile: "iv_dispute_toi" } }, { seen: "IV_boutique_dix" }] }, to: "IV_boutique_dix" },
      { label: "Monter à l'atelier", to: "IV_atelier_odeline" },
      { label: "Descendre l'escalier de la cave", to: "IV_escalier" },
      { back: "IV_quai" },
    ] },

  IV_boutique_dix: { act: "IV", title: "Dix heures", place: "salveze",
    fx: { ep: ["perso", 800] },
    text: [
      "Tu restes devant la porte, la main sur le chambranle, là où ta voix vient de sortir du bois. Tu avais oublié le « tête de mule ». Tu avais oublié qu'elle avait dit « pour toi ». Tu te souvenais de ta phrase à toi, entière, chaque mot.",
      { if: { has: "miroir:vu" }, text: "Le miroir te l'avait déjà montrée, cette nuit-là, au Mont. Ici, c'est autre chose : c'est le bois de la porte qui s'en souvient, et la clochette." },
      { if: { not: { has: "miroir:vu" } }, text: "Au Guet, le matin, tu as dit que tu ne l'avais pas vue depuis le matin. Tu t'es cru{e}, un temps. La porte, elle, a gardé l'heure." },
      { with: "lison", text: "Lison a entendu, à ta figure, ce que tu as entendu. Elle se tait. Puis elle dit : « Ma grand-mère dit que les dernières paroles sont celles qu'on choisit le moins. » Elle n'ajoute rien." },
      { with: "fauvette", text: "Fauvette s'est assise sur le comptoir, les jambes ballantes. « Moi, j'ai dit pire à des gens qui sont toujours vivants, dit-elle. Ça ne t'aide pas, hein. »" },
      { with: "tibere", text: "Tibère, sur le seuil, regarde ses bottes. « La logeuse a entendu crier à dix heures, dit-il. C'est ça qu'elle a dit au Guet. Juste ça. »" },
    ],
    choices: [{ back: "IV_boutique" }] },

  IV_atelier_odeline: { act: "IV", title: "L'atelier", place: "salveze",
    text: [
      "L'atelier, sous le toit, a gardé l'odeur de la colle de peau. L'établi d'Odeline, ses limes rangées par taille, sa loupe de bijoutier sur son pied de cuivre. La boîte à double fond est restée ouverte, vide, comme tu l'avais laissée. Sur le mur, au-dessus de l'établi, son livre de comptes pend à un clou, ouvert à la dernière page écrite.",
      "*Pour L. B., le secret de la tour de la reine : deux mille ducats, la moitié à la remise.* Puis, plus bas, d'une encre plus pâle : *{{loupe#iv_comptes|Payer le couvreur avant l'hiver|Mille pour la dette de l'enfant, mille pour qu'il ait de quoi partir, et que la Banque ne le trouve jamais}}.*",
      { if: { has: "poids:dette" }, text: "La dette de l'enfant. Tu ne lui avais jamais dit, pour tes quinze ducats. Elle le savait." },
      { with: "fauvette", text: "Fauvette passe la tête par la lucarne et regarde l'établi. « C'est là que j'ai pris l'œil, dit-elle. Sur ce coin-là. J'ai failli prendre la loupe aussi. Elle pesait trop lourd. »" },
    ],
    choices: [{ back: "IV_boutique" }] },
});

// ==================================================================== the cellar stairs at midnight (the tuning fork)
Object.assign(P, {
  IV_escalier: { act: "IV", title: "L'escalier de la cave", place: "salveze", backName: "l'escalier de la cave",
    text: [
      "L'escalier de la cave est raide, en pierre, quatorze marches usées en creux au milieu, sans rampe. Tu as trouvé Odeline en bas, le matin des Lanternes, la tête contre la dernière marche. Quelqu'un a lavé la pierre, depuis. Il reste une ombre plus claire.",
      { if: DIAPASON, text: "Le diapason pèse dans ta poche. C'est ici que la pierre se souvient le mieux : la pierre des caves, que personne ne touche, où les voix descendent et restent.", else: "Sans le diapason, la cave est une cave : quatorze marches, une ombre claire, un soupirail." },
      "L'escalier {{echo#iv_minuit_voix|craque sous ton poids comme toujours|rend une voix d'homme, basse et posée, que tu connais : « Odeline. Tu ne vendras pas ce qui n'est pas à toi. Donne-moi le cornet, et je m'en vais. »}}. Sur la troisième marche, la pierre {{echo#iv_minuit_bougeoir|est tachée d'une vieille cire|rend un choc de cuivre contre l'os, un souffle d'homme coupé net, puis le bougeoir qui roule}}. En bas, la dernière marche {{echo#iv_minuit_chute|est froide et propre|rend une chute, longue, marche après marche, puis la voix de l'homme, cassée : « Odeline. Odeline, réponds-moi. Seigneur, qu'est-ce que j'ai fait. »}}.",
      { with: "gildas", text: "Frère Gildas est resté en haut de l'escalier, dans l'encadrement de la porte basse, une main sur le chambranle. Il te regarde descendre." },
    ],
    choices: [
      { label: "Lever les yeux vers Frère Gildas, en haut des marches", hide: { any: [{ not: { voile: "iv_minuit_voix" } }, { not: { present: "gildas" } }, { has: "gildas:demasque" }] }, to: "IV_boutique_gildas" },
      { label: "Rester assis{e} sur les marches, avec cette voix", hide: { any: [{ not: { voile: "iv_minuit_voix" } }, { present: "gildas" }, { has: "gildas:demasque" }] }, to: "IV_boutique_apprend" },
      { label: "Rester assis{e} sur les marches, avec ce que tu savais déjà", hide: { any: [{ not: { voile: "iv_minuit_voix" } }, { not: { has: "gildas:demasque" } }, { seen: "IV_boutique_confirme" }] }, to: "IV_boutique_confirme" },
      { label: "Aller ranimer le diapason à la borne du Beffroi", hide: { any: [{ voile: "iv_minuit_voix" }, { not: DIAPASON }] }, back: "IV_hub" },
      { label: "Descendre jusqu'à la cave", to: "IV_cave" },
      { label: "Remonter dans la boutique", hide: { all: [{ voile: "iv_minuit_voix" }, { not: { seen: "IV_boutique_apprend" } }, { not: { seen: "IV_boutique_confirme" } }, { not: { seen: "IV_boutique_gildas" } }] }, back: "IV_boutique" },
    ] },

  IV_boutique_apprend: { act: "IV", title: "La voix de minuit", place: "salveze",
    fx: { flag: ["gildas:demasque", "odeline:verite"], ep: ["histoire", 4000] },
    text: [
      "Tu t'assieds sur la septième marche, parce que tes jambes le décident. La voix a les mots courts et l'accent du Mont, cette façon de poser chaque syllabe comme une pierre dans un mur. Tu l'as entendue lire des chartes, réciter des psaumes, te dire « prenez garde à la marche ». Frère Gildas.",
      "Il est venu à minuit. Il voulait le cornet. Elle l'a frappé avec le bougeoir de cuivre, celui qui est toujours sur le comptoir, avec sa bobèche tordue. Il l'a repoussée. Elle est tombée. Il l'a appelée. Le matin, toi, tu as trouvé le bougeoir de cuivre à sa place sur le comptoir. Quelqu'un l'y avait remis.",
      { if: { has: "gildas:mort" }, text: "Il est mort. Tu ne pourras rien lui demander. Il reste cette voix, ici, dans la pierre, qui demande à Odeline de répondre.", else: "Il est loin d'ici, quelque part entre le Mont et la ville, avec sa capuche et sa cicatrice à la racine des cheveux." },
      { with: "lison", text: "Lison s'assied deux marches au-dessus de toi. « Le Gardien, dit-elle. Ma grand-mère savait qu'il était descendu en ville, cet hiver-là. » Elle serre les poings sur ses genoux. « Elle me l'a dit après. Après. »" },
      { with: "tibere", text: "Tibère, en haut, dit d'une voix enrouée : « J'ai écrit *accident* dans mon rapport. J'ai écrit *accident*, et j'ai pris l'argent de la Banque le même jour. »" },
      { with: "fauvette", text: "Fauvette, accroupie sur la marche du haut, a les yeux très ouverts. « Un moine, dit-elle tout bas. J'ai vu un moine sortir. C'était lui. »" },
      { with: "salome", text: "Salomé descend trois marches et pose une main sur ton épaule, lourde, et l'y laisse. Elle connaît ce genre de nouvelle. Elle sait que les mots, là-dessus, ne servent à rien." },
      "Tu {{miroir#iv_apprend|as enfin le nom que tu cherchais|as enfin un coupable, et tu sens, honteusement, que ta phrase de dix heures pèse un peu moins lourd}}.",
    ],
    choices: [{ label: "Remonter dans la boutique", back: "IV_boutique" }] },

  IV_boutique_confirme: { act: "IV", title: "Ce que dit la pierre", place: "salveze",
    fx: { flag: "odeline:verite", ep: ["perso", 1500] },
    text: [
      "Tu savais. Le Mont te l'avait appris. Mais savoir et entendre sont deux choses, et la pierre de la cave te rend les deux voix ensemble, la sienne et celle d'Odeline, à l'endroit exact où elles se sont croisées.",
      { if: { has: "gildas:pardonne" }, text: "Tu lui as pardonné, là-haut. Tu le pensais. Assis{e} ici, avec le bruit de la chute dans la pierre, tu découvres qu'un pardon se donne plusieurs fois, et que c'est la deuxième qui coûte." },
      { if: { has: "gildas:chasse" }, text: "Tu l'as chassé. Il marche quelque part, seul, avec cette voix-là dans la tête. Toi, tu l'as maintenant dans la tienne." },
      { if: { has: "gildas:mort" }, text: "Il est mort. Il reste de lui cette voix dans la pierre, qui appelle Odeline et qui attend qu'elle réponde." },
      { with: "gildas", text: "Frère Gildas est descendu sans bruit jusqu'à la marche au-dessus de toi. Il ne peut pas entendre ce que rend la pierre, mais il le lit sur ton visage. « C'était la troisième marche, dit-il. Je compte les marches de cet escalier toutes les nuits depuis. »" },
      { with: "gildas", text: "Tu te tais. Il se tait aussi. Le diapason s'éteint dans ta main." },
    ],
    choices: [{ label: "Remonter dans la boutique", back: "IV_boutique" }] },

  IV_boutique_gildas: { act: "IV", title: "En haut des marches", place: "salveze",
    text: [
      "Tu lèves les yeux. Frère Gildas est debout en haut de l'escalier, là où il était cette nuit-là, à minuit, dans l'encadrement de la porte basse. La lumière de la boutique est derrière lui. Tu ne vois pas son visage. Tu vois sa main sur le chambranle.",
      "Il comprend. Tu le sais à la façon dont sa main lâche le bois. « Vous l'avez entendue », dit-il.",
      "Il descend une marche, puis s'arrête. Il pousse sa capuche en arrière. À la racine de ses cheveux gris, sur le front, une cicatrice en croissant, blanche, de la largeur d'une bobèche de bougeoir.",
      { with: "lison", text: "Lison s'est placée entre lui et la porte, sa gaffe à la main." },
      { with: "tibere", text: "Tibère a la main sur sa masse. Il attend ton signe, et rien d'autre." },
      { with: "fauvette", text: "Fauvette a son rasoir ouvert le long de la cuisse. « C'est lui, dit-elle. C'est le moine de minuit. »" },
    ],
    choices: [
      { label: "« Dis-le. Tout, depuis le début. »", fx: { flag: ["gildas:demasque", "odeline:verite", "gildas:aveu"], ep: ["histoire", 4500] }, to: "IV_gildas_aveu" },
      { label: "« Va-t'en. Que je ne te revoie jamais. »", fx: { flag: ["gildas:demasque", "odeline:verite", "gildas:chasse"], leave: "gildas", ep: ["histoire", 4000] }, to: "IV_gildas_chasse" },
      { label: "Monter les marches vers lui, les poings fermés", fx: { flag: ["gildas:demasque", "odeline:verite"], ep: ["histoire", 4000] }, to: "IV_gildas_coup" },
    ] },

  IV_gildas_coup: { act: "IV", title: "Les poings", place: "salveze",
    text: [
      "Tu montes. Il reste où il est. Ton poing le prend à la mâchoire, et il recule d'un pas contre le chambranle, et il reste debout, les mains le long du corps. Il saigne de la lèvre. Il te regarde. Il attend le deuxième coup.",
      "Le deuxième coup reste dans ton bras. Tu le sens, tout entier, qui pèse, et qui ne part pas.",
      { with: "tibere", text: "Tibère a fait un pas, puis il s'est arrêté. Il a vu assez d'hommes frapper un homme qui se laisse faire pour savoir comment ça finit." },
    ],
    choices: [
      { label: "« Dis-le. Tout. »", fx: { flag: "gildas:aveu" }, to: "IV_gildas_aveu" },
      { label: "« Va-t'en. »", fx: { flag: "gildas:chasse", leave: "gildas" }, to: "IV_gildas_chasse" },
    ] },

  IV_gildas_aveu: { act: "IV", title: "L'aveu de Frère Gildas", place: "salveze",
    text: [
      "Il s'assied sur la marche du haut, les mains ouvertes sur les genoux. Il parle comme il lit les chartes : lentement, chaque mot posé, sans rien enjoliver.",
      "« Je suis le Gardien. Le serment des Taiseurs est sous ma garde. Odeline était née Vasse. Elle allait vendre à la Banque le secret du Beffroi, et derrière lui les six autres. Je suis venu pour lui reprendre le cornet de sa mère, rien d'autre. Je l'ai attendue à minuit. Elle avait déjà le bougeoir à la main quand elle m'a ouvert. »",
      "« Elle m'a frappé ici. » Il touche la cicatrice. « J'ai levé le bras. Je l'ai poussée. Je voulais l'écarter de moi. Elle était au bord de la première marche. » Il regarde la troisième marche. « Je suis descendu. Elle était morte. J'ai cherché le cornet, parce que j'étais venu pour lui, et que je ne savais plus quoi faire d'autre. J'ai remis le bougeoir sur le comptoir. Puis je suis parti, et j'ai prié jusqu'à l'aube sous le pont des Noyés, et à l'aube, c'est vous qui êtes rentré{e}. »",
      { if: { has: "i4:chute_entendue" }, text: "« Tu l'as appelée, en bas, dis-tu. *Odeline, je t'en prie.* Les marches me l'ont rendu. » Gildas ferme les yeux. « Je l'ai appelée jusqu'à ce que la chandelle s'éteigne, dit-il. Après, je n'ai plus osé dire son nom. »" },
      { if: { has: "pq:lanterne_lue" }, text: "Tu lui demandes s'il a écrit la lanterne repêchée au matin, *à moi le pardon*. « Sous le pont, avant l'aube, dit-il. À l'encre de noix du scriptorium. Je l'ai posée sur l'eau pour qu'elle s'en aille. Elle est revenue jusqu'à vous. »" },
      "« Ensuite, je suis venu à vous. Pour le cornet, d'abord. Puis pour vous. » Il se tait. Puis : « Je n'ai pas de deuxième phrase. Je n'en ai jamais eu. »",
      { with: "lison", text: "Lison a baissé sa gaffe. Elle pleure sans bruit, la mâchoire serrée, et elle te regarde, toi, pour savoir ce que tu vas faire." },
    ],
    choices: [
      { label: "« Je te pardonne. Reste. »", fx: { flag: "gildas:pardonne", conf: { gildas: 15 }, ep: ["histoire", 2000] }, to: "IV_gildas_pardon" },
      { label: "« Va le dire au Guet. Lève mon mandat avec ta voix. »", fx: { flag: ["mandat:leve", "iv:gildas_guet"], leave: "gildas", ep: ["histoire", 3000] }, to: "IV_gildas_guet" },
      { label: "« Va-t'en. »", fx: { flag: "gildas:chasse", leave: "gildas" }, to: "IV_gildas_chasse" },
    ] },

  IV_gildas_pardon: { act: "IV", title: "Le pardon", place: "salveze",
    text: [
      "Il te regarde longtemps, comme s'il cherchait le piège dans tes mots. Il n'en trouve pas. Il baisse la tête et reste ainsi, les mains ouvertes, sans rien dire, pendant que la poussière de la boutique tombe dans le rai de lumière.",
      "« Je ne le mérite pas, dit-il enfin. C'est sans doute pour cela que vous me le donnez. »",
      "Tu {{miroir#iv_pardon|lui pardonnes parce que c'est juste|lui pardonnes parce que tu as besoin, toi aussi, qu'on puisse pardonner la dernière phrase qu'on a dite à Odeline}}.",
      { with: "tibere", text: "Tibère grogne et lâche sa masse. « Bon, dit-il. Bon. Moi, je l'aurais pendu. Mais on ne m'a jamais rien pardonné, alors je ne suis pas juge. »" },
    ],
    choices: [{ label: "Remonter dans la boutique", back: "IV_boutique" }] },

  IV_gildas_guet: { act: "IV", title: "Le Gardien au Guet", place: "salveze",
    text: [
      "Frère Gildas remet sa capuche, puis la repousse en arrière. « Oui, dit-il. Ce sera plus juste comme ça. » Il monte les marches, traverse la boutique, ouvre la porte. La clochette tinte. Il descend les trois marches du quai, les mains dans ses manches, et il marche vers le poste du Beffroi sans se retourner.",
      "Le soir, sur la porte du Beffroi, quelqu'un a barré ta feuille de recherche d'un trait de craie, et écrit dessous : *levé*. On dit sur la place qu'un moine du Mont s'est présenté à la capitaine du Guet et lui a parlé une heure, porte fermée. On dit qu'elle l'a gardé, et qu'il a demandé du papier et une plume.",
      { with: "lison", text: "Lison regarde la porte refermée. « Ma grand-mère ne lui pardonnera pas d'avoir parlé à un étranger, dit-elle. Même pour ça. »" },
    ],
    choices: [{ label: "Remonter dans la boutique vide", back: "IV_boutique" }] },

  IV_gildas_chasse: { act: "IV", title: "La porte", place: "salveze",
    text: [
      "Il se lève, sans hâte, et remet sa capuche. Il traverse la boutique. Devant le comptoir, il s'arrête, regarde le bougeoir de cuivre à sa place, avec sa bobèche tordue, et le touche du bout du doigt. Puis il ouvre la porte. La clochette tinte. Il est parti.",
      "Par la fenêtre, tu le vois descendre le quai, une silhouette grise parmi les gens qui font la queue chez Maître Lagrue, puis plus rien.",
      { with: "lison", text: "Lison ferme la porte derrière lui. « Les Joncs-Bas le reprendront, dit-elle. Ou ils le jugeront. Chez nous, c'est parfois la même chose. »" },
    ],
    choices: [{ label: "Remonter dans la boutique", back: "IV_boutique" }] },

  IV_cave: { act: "IV", title: "La cave", place: "salveze",
    text: [
      "La cave d'Odeline : une voûte basse, des caisses, des malles, l'odeur de la terre et du canal. Le soupirail donne sur la vase, à hauteur d'œil, avec son barreau de gauche qui tient par habitude. Contre le mur, l'établi de cave où elle rangeait ce qu'on venait reprendre.",
      "Sous l'escalier, dans le renfoncement où Odeline mettait les balais, une dalle {{pie#iv_dalle|pareille aux autres, scellée au mortier|dont le mortier est fait de cendre et de suif, qu'on gratte à l'ongle : une cache}}.",
    ],
    choices: [
      { label: "Gratter le mortier de la dalle sous l'escalier", hide: { any: [{ not: { voile: "iv_dalle" } }, { has: "tresor:iv_broche" }] }, to: "IV_cave_broche" },
      { label: "Remonter l'escalier", back: "IV_escalier" },
    ] },

  IV_cave_broche: { act: "IV", title: "La cache d'Odeline", place: "salveze",
    fx: { item: "ivv_tr_broche", clock: { tresors: 1 }, flag: "tresor:iv_broche", gold: 60, ep: ["perso", 800] },
    text: [
      "La dalle se soulève. Dessous, une boîte de fer-blanc enveloppée dans un linge huilé. Dedans, trois ducats d'or roulés dans un papier, et une broche d'argent noirci en forme de roseau, avec un grain d'ambre au bout de la tige.",
      "Le papier porte deux lignes de la main d'Odeline : *La broche de ma mère. Les Vasse la portaient le jour où on les mariait. Elle te revient, d'une façon ou d'une autre.*",
      { with: "lison", text: "Lison regarde la broche, puis toi, puis la broche. « Ma grand-mère a la même, dit-elle. Il y en a sept, aux Joncs-Bas. Il y en avait huit. »" },
    ],
    choices: [{ label: "Remonter l'escalier", back: "IV_escalier" }] },
});

// ==================================================================== the false witness and the lifting of the warrant
Object.assign(P, {
  IV_affiche: { act: "IV", title: "La feuille de recherche", place: "salveze",
    text: [
      "Tu t'approches de la porte du Beffroi, le capuchon bas, comme un badaud. La feuille est imprimée sur un mauvais papier gris, déjà gondolée par la pluie. Ton nom en grandes lettres, et dessous, en petites, les attendus du Guet.",
      "*Pour le meurtre d'Odeline Carrus, poussée dans l'escalier de sa cave la nuit des Lanternes. Témoins : Clarmonde Pujol, logeuse, qui a entendu la dispute de dix heures ; {{loupe#iv_affiche_gratte|Théodore Sauzet, allumeur du quai, qui a vu l'accusé descendre à la cave à minuit avec la défunte|Théodore Sauzet, allumeur du quai, présenté au capitaine par Lothaire Brunel, de la Banque Marrel ; ces derniers mots grattés sur la planche avant le tirage}}.*",
      "À côté, un gamin des Gouttières te regarde, regarde la feuille, et te regarde encore. Puis il siffle entre ses doigts, deux notes, et s'en va en courant.",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_pujol: { act: "IV", title: "La pension Pujol", place: "salveze", backName: "la pension Pujol",
    text: [
      { first: true, text: "La pension de Clarmonde Pujol est la maison collée à la boutique d'Odeline : trois étages de chambres à la semaine pour bateliers et commis. La porte est ouverte. Dans la salle du bas, Clarmonde fait cuire une soupe d'orties et de pain sec pour ses pensionnaires, une cuillère de bois dans une main et un chapelet dans l'autre. Elle te voit, lâche la cuillère, et la laisse par terre." },
      { again: true, text: "La salle basse de la pension Pujol, la soupe d'orties, le chapelet. Clarmonde te regarde entrer avec une sorte de soulagement fatigué." },
      { text: "« Je n'ai dit que ce que j'avais entendu, dit-elle tout de suite. La dispute. Dix heures. Toi qui criais, elle qui criait, et la porte. Tout le quai vous a entendus. » Elle s'essuie les mains sur son tablier, plusieurs fois. « Ensuite j'ai dormi. J'ai dit ça au Guet, {{oreille#iv_pujol_heure|et c'est tout ce qu'il y avait à dire|et j'ai tu la voix d'homme de minuit, à travers le mur, parce que le monsieur aux gants gris m'a dit que ça compliquerait tout, et m'a payé mon terme}}. »" },
      { after: "iv:pujol_aide", text: "Ça sent le lard, dans la soupe d'orties. Clarmonde t'en sert une écuelle d'office et reste debout à te regarder la manger, comme Odeline le faisait." },
      { with: "tibere", text: "Tibère salue Clarmonde d'un signe de tête. Elle se souvient de lui, le matin des Lanternes, avec son carnet. Elle détourne les yeux." },
    ],
    choices: [
      { label: "« La voix d'homme de minuit, vous la direz à la capitaine du Guet ? »", hide: { any: [{ not: { voile: "iv_pujol_heure" } }, { has: "iv:pujol_temoigne" }] }, fx: { flag: "iv:pujol_temoigne", ep: ["perso", 600] }, to: "IV_pujol_minuit" },
      { label: "Lui laisser de quoi nourrir ses pensionnaires (1 ducat)", hide: { has: "iv:pujol_aide" }, fx: { gold: -20, flag: "iv:pujol_aide", fac: { hautes: 2 } }, back: "IV_pujol" },
      { back: "IV_quai" },
    ] },

  IV_pujol_minuit: { act: "IV", title: "Minuit, à travers le mur", place: "salveze",
    text: [
      "Clarmonde s'assied sur le banc, d'un coup. « Une voix d'homme, dit-elle. Pas la tienne. Une voix grave, lente, polie, comme un curé. Elle a parlé un moment avec Odeline. Puis il y a eu un bruit, et l'homme a appelé son nom deux fois. Je me suis dit que c'était un client. Je me suis rendormie. »",
      "Elle tord son tablier. « Le monsieur aux gants gris est venu le lendemain. Il a payé mon terme de trois mois. Il m'a dit que si je parlais de minuit, on m'accuserait de ne pas être allée voir. » Elle lève les yeux. « J'irai chez la capitaine. Elle a une fille, je la connais, elle est blanchisseuse au lavoir du Pont-Rouge. »",
    ],
    choices: [{ back: "IV_pujol" }] },

  IV_lumignon: { act: "IV", title: "Le Lumignon", place: "salveze", backName: "la salle du Lumignon",
    text: [
      { first: true, text: "Le Lumignon est la seule taverne du quai encore ouverte. Une salle basse, des tonneaux, un feu de bois de démolition qui sent la peinture brûlée. Une dizaine de buveurs, peu de vin, beaucoup d'eau-de-vie de grain mauvaise. Le patron essuie un gobelet. « Ici, {{oreille#iv_patron_lumignon|on paie comptant, crédit à personne|on fait crédit aux gants gris, et ils paient le silence en plus}}. » Près du feu, un homme maigre aux joues mangées de barbe paie une tournée à trois débardeurs avec un ducat neuf qu'il fait sonner sur la table. Sa perche d'allumeur est posée contre le mur." },
      { again: true, text: "La salle basse du Lumignon, le feu qui sent la peinture. Les buveurs te regardent entrer, puis regardent leur gobelet." },
      { if: { not: { has: "iv:sauzet_fui" } }, text: "Théodore Sauzet lève son gobelet vers les débardeurs. « Moi, j'ai l'œil, dit-il. Un allumeur, ça voit dans le noir. Ce que j'ai vu cette nuit-là, je l'ai vu {{oreille#iv_sauzet_vrai|à minuit, à la lueur de ma perche, comme je l'ai dit au Guet|nulle part : à minuit j'étais ivre mort sous le pont des Noyés comme la moitié du quai, et on m'a payé pour le reste}}. »", else: "La place près du feu est vide." },
      { if: { has: "iv:sauzet_vivant" }, text: "Le patron, en essuyant son gobelet, dit à qui veut l'entendre que Sauzet dort au poste du Beffroi, dans une cellule qu'il a demandée lui-même, et qu'il y boit de l'eau." },
      { if: { all: [{ seen: "IV_sauzet_mort" }, { not: { has: "iv:sauzet_vivant" } }] }, text: "Au pied du tonneau, près du feu, le patron a jeté du sable sur le plancher. On pose les pieds à côté." },
      { if: { all: [{ has: "iv:sauzet_fui" }, { not: { has: "iv:sauzet_vivant" } }, { not: { seen: "IV_sauzet_mort" } }] }, text: "On dit que l'allumeur a quitté le quai." },
      { with: "tibere", text: "Tibère, à ton oreille : « L'homme au fond, près de la porte de la cour. Gants gris dans sa ceinture. Il ne boit pas. »" },
    ],
    choices: [
      { label: "« Sous le pont des Noyés, ivre mort. Tu veux que je trouve qui t'a enjambé ? »", hide: { any: [{ not: { voile: "iv_sauzet_vrai" } }, { has: "iv:sauzet_aveu" }, { has: "iv:sauzet_fui" }] }, fx: { ep: ["perso", 600] }, to: "IV_sauzet_aveu" },
      { label: "T'asseoir en face de lui et le faire parler", hide: { any: [{ has: "iv:sauzet_aveu" }, { has: "iv:sauzet_fui" }] }, test: { dom: "social", diff: -10, label: "Retourner le témoin", help: [TIB, FAU, { if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "IV_sauzet_aveu" }, lose: { to: "IV_sauzet_spadassins" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { any: [{ has: "iv:sauzet_aveu" }, { has: "iv:sauzet_fui" }] }, test: { dom: "social", diff: 0, label: "Un interrogatoire de sergent" },
        win: { fx: { conf: { tibere: 5 } }, to: "IV_sauzet_aveu" }, lose: { to: "IV_sauzet_spadassins" } },
      { label: "Le prendre au collet et le traîner dans la cour", hide: { any: [{ has: "iv:sauzet_aveu" }, { has: "iv:sauzet_fui" }] }, test: { dom: "combat", diff: 0, label: "Plus vite que l'homme aux gants gris", help: [TIB, SAL] },
        win: { to: "IV_sauzet_aveu" }, lose: { to: "IV_sauzet_spadassins" } },
      { label: "Le laisser boire, et le suivre quand il rentre", hide: { any: [{ has: "iv:sauzet_logis" }, { has: "iv:sauzet_fui" }] }, test: { dom: "discretion", diff: 0, label: "Suivre un ivrogne dans le noir", help: [FAU] },
        win: { fx: { flag: "iv:sauzet_logis" }, to: "IV_sauzet_chambre" }, lose: { fx: { flag: "iv:sauzet_logis" }, to: "IV_sauzet_chambre" } },
      { back: "IV_quai" },
    ] },

  IV_sauzet_aveu: { act: "IV", title: "L'aveu de l'allumeur", place: "salveze",
    fx: { flag: "iv:sauzet_aveu", ep: ["seance", 2000] },
    text: [
      "Sauzet se défait d'un coup, comme une lanterne de papier sous la pluie. « Je dormais, dit-il. Sous le pont. Tout le monde le sait. Deux jours après, un homme est venu me trouver. Il savait que je devais trente ducats au comptoir du quai, pour les dés. Il m'a dit que la dette disparaîtrait si je disais ce qu'il me dirait. Il m'a fait répéter trois fois. »",
      "« Ses gants étaient gris. Il parlait doucement. Il m'a dit que tu avais tué la vieille de toute façon, que je ne faisais qu'aider la justice. » Il te regarde, les yeux pleins d'eau. « Je l'ai cru, parce que c'était plus facile. »",
      "Maître Lagrue, appelé du quai, écrit tout sur une feuille de bonne qualité, à la table près du feu, sans une rature. Sauzet signe d'une croix. Deux débardeurs signent comme témoins. Lagrue sable l'encre, plie la feuille en trois, et te la tend.",
      "Près de la porte de la cour, l'homme aux gants gris s'est levé.",
    ],
    choices: [
      { label: "Te mettre entre l'homme aux gants gris et l'allumeur", fight: { title: "Les gants gris du Lumignon", enemies: [{ id: "iv_spadassin", n: 2 }],
        win: { fx: { ep: ["seance", 1500], fac: { banque: -5 } }, to: "IV_sauzet_sauve" }, lose: { fx: { pv: -4 }, to: "IV_sauzet_mort" },
        flee: { label: "Pousser Sauzet par la porte de la cour", dom: "discretion", diff: -10, to: "IV_sauzet_sauve" } } },
      { label: "Renverser la table et faire sortir Sauzet par la trappe de la cave", test: { dom: "discretion", diff: -10, label: "La trappe du Lumignon", help: [FAU, LIS] },
        win: { to: "IV_sauzet_sauve" }, lose: { to: "IV_sauzet_mort" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Par le toit de la cour" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IV_sauzet_sauve" }, lose: { to: "IV_sauzet_mort" } },
    ] },

  IV_sauzet_sauve: { act: "IV", title: "L'allumeur sauvé", place: "salveze",
    fx: { flag: ["iv:sauzet_fui", "iv:sauzet_vivant"] },
    text: [
      { outcome: "win", text: "Les deux spadassins sont à terre, au milieu des gobelets renversés. Le patron du Lumignon les regarde, puis regarde son feu, et décide qu'il n'a rien vu." },
      "Tu emmènes Sauzet par les ruelles jusqu'au poste du Beffroi, où il demande lui-même une cellule. « Une cellule, dit-il. Avec une serrure. De l'intérieur, si possible. » La capitaine Mabire le regarde par-dessus sa plume et fait signe qu'on l'enferme.",
      { with: "tibere", text: "Tibère regarde Sauzet descendre aux caves. « Il a eu de la chance, dit-il. La Banque efface ses dettes, d'habitude, avec le débiteur. »" },
    ],
    choices: [{ label: "Repasser par la place du Beffroi", back: "IV_hub" }] },

  IV_sauzet_mort: { act: "IV", title: "La lame", place: "salveze",
    fx: { flag: "iv:sauzet_fui", unflag: "iv:sauzet_aveu", fac: { banque: -5 } },
    text: [
      "Tout va trop vite. Un banc renversé, un cri, une lame courte qui entre et sort sous les côtes de l'allumeur. Sauzet s'assied par terre contre le tonneau, l'air étonné. L'homme aux gants gris lui prend la feuille de Lagrue des mains au passage et sort par la cour sans courir. L'autre te tient en respect jusqu'à la porte, puis disparaît à son tour.",
      "Théodore Sauzet meurt avant qu'on ait trouvé un barbier. Il a encore un ducat neuf dans la main.",
      { if: { voile: "iv_sauzet_vrai" }, text: "Tu as entendu ce qu'il gardait sous ses mots. Ça, personne ne te l'a pris." },
    ],
    choices: [{ label: "Quitter le Lumignon", back: "IV_quai" }] },

  IV_sauzet_chambre: { act: "IV", title: "La soupente de l'allumeur", place: "salveze",
    text: [
      { outcome: "lose", text: "Tu le suis trop près. Dans la cour du Lumignon, il se retourne, te reconnaît, pousse un cri de chat et s'enfuit par la ruelle. Tu montes quand même l'escalier de bois jusqu'à sa porte, qui ferme mal." },
      "La soupente au-dessus du Lumignon est une pente de toit sous laquelle on tient assis. Des perches d'allumeur, des mèches, un bidon d'huile, une chandelle. Une paillasse neuve, bourrée de paille fraîche, avec une couverture de laine qui sent encore le marchand. Un allumeur, une paillasse neuve.",
      { if: { all: [{ not: { has: "iv:sauzet_fui" } }, { not: { seen: "IV_sauzet_spadassins" } }] }, text: "Sauzet ronfle dessus, tout habillé, ses bottes aux pieds. Il dort toujours quand tu glisses la main dans la paille, sous sa tête.", else: "La soupente est vide. Quelqu'un l'a fouillée avant toi, sans soin, mais pas la paillasse : elle est neuve, et personne ne pense à fouiller ce qui est neuf." },
      "Dans la paille, une feuille pliée en huit. Une quittance du comptoir du quai de la Banque Marrel. *Reçu de Théodore Sauzet, allumeur, la somme de trente ducats, qui solde sa dette de jeu envers la maison.* {{loupe#iv_quittance|Pour acquit, le commis du quai|Dette remise sans paiement, pour la déposition faite au Guet le troisième jour après les Lanternes, telle qu'elle lui a été dictée. Ne pas inscrire au grand livre. — L. B.}}",
    ],
    choices: [{ label: "Prendre la quittance et redescendre", hide: { item: "iv_quittance" }, fx: { item: "iv_quittance", ep: ["perso", 500] }, back: "IV_quai" }, { label: "Redescendre sans rien toucher", back: "IV_quai" }] },

  IV_mandat_leve: { act: "IV", title: "Le mandat levé", place: "salveze",
    fx: { flag: ["mandat:leve", "iv:plainte_brunel"], ep: ["histoire", 3500] },
    text: [
      "Ermance Mabire t'écoute sans t'interrompre, et pose chaque pièce sur sa table, l'une à côté de l'autre, comme un joueur abat ses cartes.",
      { if: { voile: "iv_quittance" }, text: "La quittance, d'abord. Elle la tient à la fenêtre, dans le jour, puis sous ta loupe, et elle lit à voix haute la ligne du dessous, lentement. « *Telle qu'elle lui a été dictée.* L. B. » Elle repose la feuille." },
      { if: { has: "iv:sauzet_aveu" }, text: "La déposition de Sauzet, de la main de Maître Lagrue, avec la croix de l'allumeur et deux témoins. Elle la lit deux fois." },
      { if: { voile: "iv_affiche_gratte" }, text: "Elle fait décrocher ta feuille de la porte du Beffroi et la regarde de près, contre la vitre : les mots grattés reparaissent en creux dans le papier. Elle siffle entre ses dents." },
      { if: { voile: "iv_pujol_heure" }, text: "Tu dis la voix d'homme que Clarmonde Pujol a entendue à minuit, à travers le mur, et le terme payé par l'homme aux gants gris. La capitaine envoie un garde la chercher." },
      { if: { has: "iv:pujol_temoigne" }, text: "Clarmonde Pujol arrive avant même le garde, son chapelet dans les mains. Elle parle un quart d'heure, sans s'arrêter. La capitaine l'écoute, et la remercie." },
      { if: { all: [{ has: "fauvette:temoin" }, { present: "fauvette" }] }, text: "Fauvette, debout contre le mur, les bras croisés, dit le moine qui sortait de la boutique à minuit. La capitaine la regarde longtemps. « Je te connais, dit-elle. Tu m'as volé une montre, il y a deux ans. » Elle écrit quand même." },
      "Puis elle prend une feuille vierge, trempe sa plume, et écrit vite, sans lever les yeux. *Le mandat d'arrêt contre {hero}, du quai des Lanternes, est levé. Plainte est portée contre Lothaire Brunel, de la Banque Marrel, pour subornation de témoin.* Elle signe, sable, et souffle sur l'encre.",
      "« La plainte ne servira à rien, dit-elle. La Banque a de meilleurs avocats que la République. Mais elle sera écrite. » Elle te tend une copie. « Vous êtes libre. Ça ne veut pas dire en sûreté. »",
      "Tu {{miroir#iv_libre|respires enfin, l'âme en paix|respires, et tu penses que le mandat disait vrai sur un point : ce soir-là, tu l'as laissée seule}}.",
      { with: "tibere", text: "Tibère regarde la feuille par-dessus ton épaule et rit, d'un rire bref qui lui fait mal quelque part. « Levé, dit-il. Et la plainte contre Brunel. Je voudrais voir sa tête. »" },
    ],
    choices: [{ label: "Descendre sur la place, libre", back: "IV_hub" }] },
});

// ==================================================================== the burnt Halles and the Bank's granary (side quest IVV_grenier)
var JACOMET = { any: [{ has: "iv:jacomet_libre" }, { has: "iv:jacomet_sauve" }] };
Object.assign(P, {
  IV_sauzet_spadassins: { act: "IV", title: "Les gants gris", place: "salveze",
    text: [
      "Sauzet se lève d'un bond, renverse son gobelet et crie vers le fond de la salle : « Monsieur ! Monsieur, c'est lui ! » L'homme aux gants gris se lève de sa table près de la porte de la cour, sans hâte, et un second sort de la cour derrière lui. Les débardeurs s'écartent avec leurs gobelets. Le patron du Lumignon descend à la cave.",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les gants gris du Lumignon", enemies: [{ id: "iv_spadassin", n: 2 }],
        win: { fx: { ep: ["seance", 1500], fac: { banque: -5 } }, to: "IV_sauzet_aveu" }, lose: { fx: { pv: -4, flag: "iv:sauzet_fui" }, to: "IV_quai" },
        flee: { label: "Sortir par la cour", dom: "discretion", diff: 0, to: "IV_quai" } } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Une voix de sergent dans une taverne" },
        win: { fx: { conf: { tibere: 5 } }, to: "IV_sauzet_aveu" }, lose: { fx: { flag: "iv:sauzet_fui" }, to: "IV_sauzet_chambre" } },
    ] },

  IV_halles: { act: "IV", title: "Les Halles brûlées", place: "salveze", backName: "les Halles brûlées",
    text: [
      { first: true, text: "Des Halles, il reste la charpente, noire, debout par miracle, et le toit de tuiles effondré au milieu en un tas qui fume encore quand il pleut. Ça sent le bois mouillé, le cuir brûlé et le sucre caramélisé des confiseurs. Des gens fouillent les décombres avec des bâtons. D'autres vendent, sur des tréteaux, ce qu'ils ont trouvé, ou pris. Une boulangère assise sur son pétrin vide dit à qui veut l'entendre : « Mon four est froid {{oreille#iv_boulangere|depuis trois jours, faute de farine|depuis que le commis de la Banque m'a payée pour l'éteindre, et j'ai pris l'argent parce que j'avais quatre enfants}}. »" },
      { first: true, text: "Au fond, intact, le grenier de la Halle aux Blés : un bâtiment de pierre à trois étages, des portes de chêne cloutées de fer, des fenêtres à barreaux. Sur la porte, un placard de la Banque Marrel : *Réserves de la République. Défense d'approcher.* Devant, six gardes en gants gris, l'arbalète à la hanche. Face à eux, à vingt pas, une foule qui attend, assise par terre, debout, couchée." },
      { again: true, when: "day", text: "Les Halles brûlées, leur charpente noire, les tréteaux des revendeurs. Au fond, le grenier de pierre, ses gants gris, et la foule assise en face." },
      { again: true, when: "night", text: "Les Halles, la nuit : des feux de décombres, des silhouettes qui fouillent à la lanterne. Devant le grenier, les gardes ont allumé des torches. La foule est toujours là, plus silencieuse ; il y a, entre elle et les torches, vingt pas de pavés où personne ne tousse." },
      { if: { all: [JACOMET, { not: { quest: "IVV_grenier" } }] }, text: "Jacomet est au premier rang de la foule, assis sur une borne, les bras croisés. On vient lui parler à l'oreille, un par un. Il te voit, et lève la main." },
      { after: "ivv:grenier_ouvert", text: "Les portes du grenier pendent, défoncées. Il reste de la farine sur les pavés, piétinée, grise, et des enfants qui la ramassent à la cuillère." },
      { after: "ivv:grenier_partage", text: "Devant le grenier ouvert, une file calme, et des tables où l'on pèse. Jacomet tient le registre, en comptant sur ses doigts." },
      { after: "ivv:grenier_perdu", text: "Le grenier est ouvert, vide, ses portes battent. La Banque n'a plus besoin de le garder." },
      { after: "ivv:barges_coulees", text: "Derrière le grenier, sur le canal des Changeurs, des gamins repêchent à la gaffe des sacs gonflés d'eau, et leurs mères font sécher le blé sur des draps, à même les pavés. Une barge à demi coulée montre son bordé à la surface." },
    ],
    choices: [
      { label: "Le grenier de la Halle aux Blés", hide: { quest: "IVV_grenier" }, to: "IVV_grenier" },
      { label: "Le revendeur au collier, sur son tréteau", hide: { seen: "IV_halles_pillard" }, to: "IV_halles_pillard" },
      { back: "IV_hub" },
    ] },

  IV_halles_pillard: { act: "IV", title: "Le collier de Corisande", place: "salveze",
    text: [
      "Un jeune homme aux mains noires de suie a étalé sur un tréteau ses trouvailles : des cuillers tordues, une balance de changeur, un chandelier, et au milieu, sur un mouchoir, un collier lourd à pendentifs ronds. « Le collier de Corisande Marrel, dit-il. Volé dans son propre hôtel, la nuit du feu. Je le laisse à trois ducats, parce que la Banque le cherche et que je veux plus le voir. »",
      "Le collier {{pie#iv_collier|est d'un or épais et jaune, qui pèse dans la paume|est du laiton doré au bain, dont la dorure part déjà aux angles, et les pierres sont du verre de Murène}}.",
      { with: "fauvette", text: "Fauvette prend le collier, le soupèse, le mord, et le repose. « Laiton, dit-elle. Je l'aurais dit sans le mordre, mais on mord, pour la forme. »" },
    ],
    choices: [
      { label: "Acheter le collier (3 ducats)", fx: { gold: -60, item: "ivv_faux_collier" }, back: "IV_halles" },
      { label: "« Du laiton doré au bain. Cherche un autre client. »", hide: { not: { voile: "iv_collier" } }, fx: { ep: ["perso", 300] }, back: "IV_halles" },
      { label: "Passer ton chemin", back: "IV_halles" },
    ] },

  IVV_grenier: { act: "IV", title: "Le grenier de la Halle aux Blés", place: "salveze", backName: "le grenier de la Halle aux Blés",
    fx: { questSeen: "IVV_grenier" },
    text: [
      { first: true, text: "Tu traverses les vingt pas qui séparent la foule des gardes. La foule te regarde passer. Le chef des gardes est un homme à la barbe carrée, la casaque noire de la Banque sur une cotte de mailles, qui mâche une paille. Il te regarde venir avec ennui." },
      { first: true, text: "« Le grenier est {{oreille#iv_grenier_vide|vide depuis la Chandeleur, la République a tout mangé|plein aux deux tiers, douze cents sacs, et on charge les barges par-derrière cette nuit encore}}, dit-il, assez fort pour la foule. Rentrez chez vous. Les réserves sont à la République, la Banque les garde pour elle. » Il crache la paille. « Pour la République, je veux dire. »" },
      { again: true, text: "Le chef des gardes mâche sa paille devant les portes cloutées. La foule attend derrière toi." },
      { if: JACOMET, text: "Jacomet s'est levé de sa borne et s'est approché derrière toi, à trois pas. « On attend ton signe, dit-il tout bas. Les gens des Tanneurs ont des crochets. Ils ont surtout faim. »" },
      { if: { all: [{ not: JACOMET }, { not: { has: "iv:jacomet_pendu" } }] }, text: "Dans la foule, derrière toi, quelqu'un crie le nom de Jacomet, et d'autres reprennent. Celui qui menait la rue des Tanneurs attend la corde, sous le gibet du Conseil. Les autres attendent qu'on leur dise par où commencer." },
      { if: { has: "iv:jacomet_pendu" }, text: "Dans la foule, des femmes portent un brassard noir pour Jacomet, pendu devant le Conseil. Elles te regardent, toi, et elles attendent." },
      { if: { has: "iv:barges_amont" }, text: "Tu te souviens de ce que Jacomet t'a dit sous le gibet : par-derrière, la nuit, par l'eau." },
    ],
    choices: [
      { label: "Faire le tour du grenier par le canal, de nuit", to: "IVV_grenier_eau" },
      { label: "Lancer la foule sur les portes", to: "IVV_grenier_charge" },
      { label: "Parlementer avec le chef des gardes", test: { dom: "social", diff: -20, label: "Faire ouvrir la Banque", help: [TIB, { if: { has: "mandat:leve" }, v: 10 }, { if: { has: "ib:ordonnance_lue" }, v: 10 }] },
        win: { fx: { fac: { banque: -3 } }, to: "IVV_grenier_entree" }, lose: { to: "IVV_grenier_refus" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: -10, label: "Par les gouttières du grenier" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IVV_grenier_dedans" }, lose: { to: "IVV_grenier_refus" } },
      { back: "IV_halles" },
    ] },

  IVV_grenier_refus: { act: "IV", title: "Les arbalètes", place: "salveze",
    text: [
      "Le chef des gardes lève la main, et six arbalètes se lèvent avec elle. « Assez, dit-il. Recule, ou je fais tirer. Sur toi d'abord. Les autres comprendront. »",
      "Tu recules. La foule recule avec toi, d'un pas, comme une marée. Personne n'est mort. Personne n'a mangé.",
    ],
    choices: [{ back: "IVV_grenier" }] },

  IVV_grenier_entree: { act: "IV", title: "Une porte entrouverte", place: "salveze",
    text: [
      { if: { has: "ivv:grenier_treve" }, text: "Derrière toi, la foule s'est assise sur les pavés, les crochets posés à plat devant elle. Le chef des gardes a vu deux mille personnes s'arrêter à ta voix, et il en tire ses conclusions." },
      "Le chef des gardes t'écoute, mâchonne, regarde la foule, regarde ses six hommes, refait le compte. « Cinq liards la journée, dit-il enfin, et je ne suis pas payé pour mourir. » Il tire une clé de sa ceinture. « Tu entres seul{e}. Tu regardes. Tu ressors, et tu dis à ces gens qu'il n'y a rien. Après, je ne te connais pas. »",
      "La petite porte, à côté de la grande, s'ouvre sur l'odeur chaude et sèche du blé.",
    ],
    choices: [{ label: "Entrer dans le grenier", to: "IVV_grenier_dedans" }] },

  IVV_grenier_eau: { act: "IV", title: "Les barges de minuit", place: "salveze", takes: "night",
    text: [
      "Derrière le grenier, côté canal, une porte de chargement s'ouvre au ras de l'eau. À minuit, deux barges plates y sont amarrées, et des porte-faix silencieux y descendent des sacs, un par un, sous les ordres d'un commis de la Banque qui coche sur une tablette. Pour toute lumière, une lanterne sourde, à peine ouverte.",
      "Les sacs portent une marque à la craie que tu lis mal dans le noir. Les bateliers ont les manteaux bleus des rouliers d'amont, et ils parlent avec l'accent d'Aveline.",
    ],
    choices: [
      { label: "Te glisser dans le grenier par la porte de chargement", test: { dom: "discretion", diff: -10, label: "Entre deux sacs", help: [FAU, LIS, { if: { voile: "iv_grenier_vide" }, v: 10 }, { if: { has: "iv:barges_amont" }, v: 10 }] },
        win: { to: "IVV_grenier_dedans" }, lose: { to: "IVV_grenier_charge" } },
      { label: "Couper les amarres des barges et les laisser partir à la dérive", test: { dom: "nature", diff: 0, label: "Les amarres dans le noir", help: [SAL, LIS] },
        win: { fx: { flag: "ivv:barges_coulees", fac: { banque: -5 }, ep: ["perso", 800] }, to: "IVV_grenier_barges" }, lose: { to: "IVV_grenier_charge" } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: 0, label: "Salomé ouvre les bondes des barges" },
        win: { fx: { flag: "ivv:barges_coulees", conf: { salome: 5 }, fac: { banque: -5 }, ep: ["perso", 800] }, to: "IVV_grenier_barges" }, lose: { to: "IVV_grenier_charge" } },
    ] },

  IVV_grenier_barges: { act: "IV", title: "Les barges à la dérive", place: "salveze",
    text: [
      "Les barges s'écartent du quai sans un bruit, chargées à ras bord, et prennent le courant. Le commis s'en aperçoit quand elles sont déjà à vingt toises. Il crie. Les porte-faix lâchent les sacs et courent le long du quai. Une des barges, trop lourde d'un côté, s'incline doucement et embarque l'eau du canal. Le blé d'Aveline coule par le fond du canal des Changeurs.",
      { with: "salome", text: "Salomé s'essuie les mains sur ses cuisses. « Ce n'était pas une barque de mer, dit-elle. Ça ne compte presque pas. »" },
      "Dans la cohue, la porte de chargement est restée ouverte.",
    ],
    choices: [{ label: "Entrer par la porte de chargement", to: "IVV_grenier_dedans" }] },

  IVV_grenier_dedans: { act: "IV", title: "Dans le grenier", place: "salveze",
    fx: { meet: "iv_jacomet" },
    text: [
      "Le grenier est une cathédrale de poutres et de poussière dorée. Des sacs empilés jusqu'aux solives, sur trois étages, rangés par rangées numérotées. Ça sent le blé chaud, la souris, la toile de jute. Au rez-de-chaussée, contre le mur, les sacs marqués d'un cercle blanc, *Réserve de la République*, {{pie#iv_sacs_republique|sont pleins et lourds comme les autres|sont du sable de rivière sous un pied de blé, cousus serré, pour qu'on les compte pleins devant le Conseil}}.",
      "Sur un pupitre de commis, près de la porte de chargement, un registre ouvert, la plume encore dans l'encrier. La dernière page porte des colonnes de chiffres d'une écriture ronde. *{{loupe#iv_registre_grenier|Sorties pour les boulangeries du quai, quatre cents sacs|Quatre cents sacs, de nuit, par barges, vers l'amont, pour l'intendance du duc. Contreseing du prévôt, sous son sceau privé}}.*",
      "Dans la poussière, entre deux rangées de sacs, un éclat de bronze verdi : une matrice de sceau ronde, grosse comme une noix, tombée là on ne sait quand. Autour du blason, une légende {{pie#iv_sceau_grenetier|effacée par l'usure|lisible encore : grenetier de la reine Ysaure, et un épi entre deux mains jointes}}.",
    ],
    choices: [
      { label: "Ramasser la matrice de sceau", hide: { any: [{ not: { voile: "iv_sceau_grenetier" } }, { has: "tresor:iv_sceau" }] }, fx: { item: "ivv_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iv_sceau", ep: ["perso", 500] }, back: "IVV_grenier_dedans" },
      { label: "Ouvrir les grandes portes de l'intérieur, et laisser entrer la foule", fx: { flag: "ivv:grenier_ouvert", quest: "IVV_grenier", fac: { hautes: 10, banque: -10 }, ep: ["seance", 2500] }, to: "IVV_grenier_ouvert" },
      { label: "Faire venir Jacomet par la porte de chargement, et partager le blé à la livre, avec un registre", hide: { not: JACOMET },
        fx: { flag: "ivv:grenier_partage", quest: "IVV_grenier", fac: { hautes: 15, banque: -10, conseil: 5 }, ep: ["seance", 3000] }, to: "IVV_grenier_partage" },
      { label: "Montrer les sacs de sable à la foule, un par un", hide: { not: { voile: "iv_sacs_republique" } },
        fx: { flag: ["ivv:grenier_partage", "ivv:sable"], quest: "IVV_grenier", fac: { hautes: 15, banque: -15 }, ep: ["seance", 3000] }, to: "IVV_grenier_sable" },
    ] },

  IVV_grenier_ouvert: { act: "IV", title: "Les portes ouvertes", place: "salveze",
    text: [
      "Tu soulèves la barre de chêne. Les deux battants s'ouvrent vers l'extérieur sous la poussée de la foule avant même que tu aies fini. La place entière entre en un seul souffle. Les six gardes jettent leurs arbalètes et se sauvent par les Halles. On arrache les sacs, on les crève, on remplit des tabliers, des chapeaux, des bonnets.",
      "Une femme tombe dans la poussée. On la relève. Un vieux reste sous un tas de sacs écroulés, et on met longtemps à le dégager. Il vit. Le soir, toute la rue des Tanneurs cuit des galettes, et l'odeur monte jusqu'au Beffroi.",
      { if: { not: JACOMET }, text: "Il a fallu une heure au Guet pour arriver. Quand il arrive, il n'y a plus rien à garder." },
    ],
    choices: [{ label: "Laisser la foule au grenier", back: "IV_halles" }] },

  IVV_grenier_partage: { act: "IV", title: "La livre de blé", place: "salveze",
    text: [
      "Jacomet entre par la porte de chargement avec dix porte-faix de la rue des Tanneurs. Il regarde les sacs jusqu'aux solives et se tait un long moment. Puis il fait apporter trois tables, une balance de changeur prise aux Halles, et le registre du commis, dont il arrache la dernière page pour te la donner.",
      "On ouvre les grandes portes. On fait des files. Une livre par bouche, et deux pour les enfants. Jacomet pèse, un porte-faix écrit les noms. Quand les gardes de la Banque reviennent avec le Guet, ils trouvent une file de deux mille personnes qui avancent en silence, et la capitaine Mabire fait mettre ses hallebardiers des deux côtés de la file, pour l'ordre, et pas autrement.",
      { with: "tibere", text: "Tibère pèse à la troisième table. Il triche sur le poids, au bénéfice des vieilles. Les autres peseurs regardent ailleurs." },
    ],
    choices: [{ label: "Laisser Jacomet à ses balances", back: "IV_halles" }] },

  IVV_grenier_sable: { act: "IV", title: "Le sable de la République", place: "salveze",
    text: [
      "Tu ouvres les grandes portes, et avant que la foule se jette sur le blé, tu tires un sac au cercle blanc jusqu'au seuil et tu le crèves au couteau. Un pied de blé coule sur les pavés. Puis du sable, gris, mouillé, qui ne s'arrête plus. La foule s'arrête. Tu en crèves un second. Un troisième.",
      "« La réserve de la République », dit quelqu'un. Et la phrase fait le tour des Halles, puis de la ville, avant le soir. Le lendemain, au Conseil, on ne parle que de ça. La foule, elle, emporte le vrai blé, et le partage avec une sorte de calme terrible.",
      { if: JACOMET, text: "Jacomet a mis un sac de sable de côté, cousu, intact. « Pour le Conseil, dit-il. Je le leur porterai moi-même. »" },
    ],
    choices: [{ label: "Laisser les Halles à leur colère", back: "IV_halles" }] },

  IVV_grenier_charge: { act: "IV", title: "La charge du grenier", place: "salveze",
    text: [
      "La foule part sur les portes avec des crochets de quai et des barres de fer. Les gardes tirent une volée, une seule, trop haute ou trop basse, et la foule crie et recule et revient. Le chef des gardes siffle. Du coin des Halles débouche une patrouille du Guet en courant, menée par un sergent à la voix énorme. Entre les deux, toi.",
    ],
    choices: [
      { label: "Tenir la porte contre les gardes et le Guet", fight: { title: "La porte du grenier", enemies: [{ id: "iv_spadassin", n: 2 }, { id: "iv_sergent", n: 1 }],
        win: { fx: { flag: "ivv:grenier_ouvert", quest: "IVV_grenier", fac: { hautes: 10, banque: -10, conseil: -5 }, ep: ["seance", 2500] }, to: "IVV_grenier_ouvert" },
        lose: { fx: { flag: "ivv:grenier_perdu", quest: "IVV_grenier", pv: -5 }, to: "IVV_grenier_fin" },
        flee: { label: "Te jeter dans les décombres des Halles", dom: "discretion", diff: 0, to: "IVV_grenier_fin" } } },
      { label: "Te jeter entre la foule et les arbalètes, les bras ouverts", test: { dom: "social", diff: -10, label: "Arrêter la charge", help: [TIB, GIL] },
        win: { fx: { flag: "ivv:grenier_treve" }, to: "IVV_grenier_entree" }, lose: { fx: { flag: "ivv:grenier_perdu", quest: "IVV_grenier", pv: -3 }, to: "IVV_grenier_fin" } },
    ] },

  IVV_grenier_fin: { act: "IV", title: "Le grenier vidé", place: "salveze",
    fx: { flag: "ivv:grenier_perdu", quest: "IVV_grenier" },
    text: [
      "Le Guet tient les Halles jusqu'à la nuit. La foule s'en va, en portant ses blessés sur des portes arrachées. Pendant ce temps, derrière le grenier, côté canal, les barges plates chargent sans se cacher. À l'aube, le grenier est ouvert, vide, et ses portes battent au vent. La Banque fait savoir qu'elle n'a plus rien à garder.",
      { if: JACOMET, text: "Jacomet a une entaille à l'épaule et une autre au front. Il te regarde passer sans te reprocher rien. « On a essayé, dit-il. C'est déjà ça, à Salvèze. »" },
    ],
    choices: [{ back: "IV_halles" }] },
});

// ==================================================================== the Gouttières in revolt (side quest IVV_toits)
Object.assign(P, {
  IV_gouttieres: { act: "IV", title: "Les Gouttières en révolte", place: "salveze", backName: "les toits des Gouttières",
    fx: { questSeen: "IVV_toits" },
    text: [
      { first: true, text: "Les Gouttières ont fermé leurs rues. Au bas de chaque ruelle, des charrettes renversées, des portes arrachées, des tonneaux remplis de pavés. En haut, sur les toits, les passerelles de planches qui relient les maisons ont été doublées, et derrière les cheminées guettent des gamins avec des brassards de chiffon rouge, des tas de tuiles à portée de main. Le Guet s'est arrêté au bas des rues. Il attend." },
      { first: true, text: "En bas, dans les ruelles, des femmes font la queue devant une marmite unique, une soupe de pois que la Reine des Gouttières fait cuire dans la cour de l'ancienne fabrique de pelles. En haut, on surveille la ville." },
      { again: true, before: "IVV_toits_paix", text: "Les barricades au bas des ruelles, les brassards rouges sur les toits. Un sifflet de deux notes court de cheminée en cheminée quand tu entres." },
      { after: "ivv:toits_paix", text: "Les barricades sont toujours là, mais on a ouvert un passage dans chacune, assez large pour une charrette. Sur les toits, les brassards rouges saluent les hallebardiers du bas, de loin." },
      { after: "ivv:toits_assaut", text: "Les Gouttières sentent encore la fumée de l'assaut. Des tuiles brisées jonchent les ruelles. On répare les passerelles en silence." },
      { with: "fauvette", text: "Fauvette siffle deux notes, et trois brassards rouges se lèvent derrière trois cheminées pour la saluer. Elle sourit sans le vouloir." },
      { before: "ivv:toits_paix", text: "Au bas de la première barricade, un gamin de dix ans te barre le passage avec un bâton. « {{oreille#iv_gamin|On n'a peur de rien, ici|J'ai peur tout le temps, mais la Reine dit que ça ne se voit pas d'en bas}} », dit-il. Puis il s'écarte." },
      { if: RECHERCHE, text: "Ici, ta tête sur la porte du Beffroi te vaut plutôt des sourires. On t'appelle « l'assassin du quai », avec une sorte de respect." },
    ],
    choices: [
      { label: "La Cour des Pelles, où la Reine des Gouttières fait cuire sa soupe", to: "IVV_toits_reine" },
      { label: "Monter sur les toits, attendre l'assaut avec les brassards rouges", hide: { any: [{ not: { seen: "IVV_toits_reine" } }, { quest: "IVV_toits" }] }, to: "IVV_toits_assaut" },
      { back: "IV_hub" },
    ] },

  IVV_toits_reine: { act: "IV", title: "La Reine des Gouttières", place: "salveze",
    text: [
      "Margaux Pelle tourne elle-même la soupe, dans une cuve de teinturier, avec une pelle de boulanger. Cinquante ans, des bras de lavandière, une robe de velours rouge usée aux coudes, et à chaque doigt une bague, toutes fausses sauf une. Elle te regarde arriver en continuant de tourner.",
      "« Les toits {{oreille#iv_reine_tenir|tiendront aussi longtemps qu'il faudra|tiendront une heure : j'ai trente gamins, quatre arbalètes, et plus de pois pour la semaine prochaine}}, dit-elle. La capitaine peut venir avec ses quarante hommes. On a des tuiles pour quatre-vingts. »",
      "Derrière elle, un grand garçon roux, qu'on appelle Pique-Prune, aide à porter les écuelles. Il sourit à tout le monde. « La Reine a raison, dit-il. {{oreille#iv_pique_prune|On ne vendra jamais les toits|J'ai déjà vendu les toits : l'heure de la relève et le chemin des passerelles, au gant gris du pont des Changeurs, pour dix ducats}}. »",
      { with: "fauvette", text: "Fauvette embrasse la Reine sur les deux joues, ce qui fait rire la cour entière, et se met à servir la soupe sans qu'on le lui demande." },
      { if: { has: "ig:reine_amie" }, text: "La Reine te reconnaît, et lève deux doigts. « Toi, dit-elle. Tu as une dette envers moi, ou c'est moi qui en ai une. Je ne sais plus. Ça me plaît. »" },
      "« Le Guet attaque à l'aube, un de ces jours, dit la Reine. Les gants gris de la Banque viendront avec. Eux, ils veulent nettoyer. Les toits savent trop de choses sur les comptes de la Banque. » Elle repose sa pelle. « Si tu veux m'aider, fais que l'assaut n'ait pas lieu. Ou viens sur les toits quand il aura lieu. »",
    ],
    choices: [
      { label: "« Ton Pique-Prune a vendu les toits. »", hide: { any: [{ not: { voile: "iv_pique_prune" } }, { seen: "IVV_toits_mouchard" }] }, fx: { ep: ["perso", 800] }, to: "IVV_toits_mouchard" },
      { label: "« Laisse-moi parler à la capitaine du Guet. »", hide: { quest: "IVV_toits" }, back: "IV_hub" },
      { label: "« Je viendrai sur les toits. »", hide: { quest: "IVV_toits" }, to: "IVV_toits_assaut" },
      { back: "IV_gouttieres" },
    ] },

  IVV_toits_mouchard: { act: "IV", title: "Pique-Prune", place: "salveze",
    fx: { flag: "ivv:mouchard", fac: { banque: -3 } },
    text: [
      "Tu le dis à la Reine, à voix basse. Elle regarde Pique-Prune, qui porte toujours ses écuelles en souriant, et cela lui suffit. Elle a pesé des voleurs toute sa vie. Elle fait un signe. Deux hommes prennent Pique-Prune sous les bras, gentiment, et l'emmènent dans la fabrique. Il continue de sourire, un moment, puis il arrête.",
      "Une heure plus tard, la Reine revient, et s'essuie les mains. « Dix ducats, dit-elle. L'heure de la relève, les passerelles du nord, la trappe du lavoir. Ils devaient passer par le lavoir. » Elle crache dans la soupe, puis se ravise et remue. « Il est vivant. Il a le nez de travers. Il ira vendre ailleurs. »",
      "« L'assaut viendra par le lavoir, dit-elle. Et nous, on y sera. Ou alors on n'y sera pas, et ils trouveront des pelles. »",
    ],
    choices: [{ back: "IVV_toits_reine" }] },

  IVV_toits_mabire: { act: "IV", title: "La paix des toits", place: "salveze",
    text: [
      "Ermance Mabire pose sa plume et croise les mains. « Les Gouttières, dit-elle. La Banque veut que je les nettoie. La Banque paie le Guet, depuis le mois dernier, puisque la République ne paie plus. » Elle te regarde. « Donnez-moi une raison de ne pas le faire que je puisse écrire dans un rapport. »",
      { if: { has: "ivv:mouchard" }, text: "Tu lui dis que l'assaut est vendu d'avance, et qu'on l'attend au lavoir. Elle hausse un sourcil. « Alors j'y perdrais des hommes pour rien. Voilà une raison. »" },
    ],
    choices: [
      { label: "« Le prévôt veut vos hommes aux Halles la veille de la Saint-Jean. Gardez-les entiers. »", hide: { not: { seen: "IV_guet_ordre" } }, fx: { ep: ["perso", 600] }, to: "IVV_toits_paix" },
      { label: "« L'assaut est éventé. Vous perdrez des hommes au lavoir pour la Banque. »", hide: { not: { has: "ivv:mouchard" } }, to: "IVV_toits_paix" },
      { label: "« Les toits arrêteront le pillage des Halles. Vous aurez la paix en bas, ils l'auront en haut. »", test: { dom: "social", diff: -10, label: "Un marché entre la capitaine et la Reine", help: [FAU, TIB] },
        win: { to: "IVV_toits_paix" }, lose: { to: "IVV_toits_refus" } },
      { back: "IV_guet" },
    ] },

  IVV_toits_refus: { act: "IV", title: "L'assaut maintenu", place: "salveze",
    text: [
      "« Non, dit Ermance Mabire. Je n'ai pas le droit de traiter avec des voleurs. J'ai seulement le droit de les pendre, quand je les attrape. » Elle reprend sa plume. « L'assaut est pour demain à l'aube. Je ne vous l'ai pas dit. »",
    ],
    choices: [
      { label: "Courir prévenir les toits, et monter avec eux", to: "IVV_toits_assaut" },
      { back: "IV_guet" },
    ] },

  IVV_toits_paix: { act: "IV", title: "La trêve des toits", place: "salveze",
    fx: { flag: "ivv:toits_paix", quest: "IVV_toits", fac: { hautes: 5 }, ep: ["seance", 3000] },
    text: [
      "La capitaine Mabire réfléchit longtemps, la plume en l'air. Puis elle écrit, et lit à voix haute ce qu'elle écrit. *Le Guet suspend toute opération dans le quartier des Gouttières, faute d'hommes, et compte sur les gens du quartier pour y tenir l'ordre.* Elle signe. « Faute d'hommes, dit-elle. C'est vrai, en plus. »",
      "Aux Gouttières, la Reine lit le papier, le plie, le glisse dans son corsage. Puis elle va chercher, dans un sac de toile au fond de la fabrique, un calice de vermeil enveloppé dans un torchon. « Volé à la chapelle de Saint-Rémoud pendant le feu des Halles. Un gamin me l'a vendu. Je l'ai payé. » Elle te le tend. « Il {{pie#iv_calice|est doré sur du cuivre, comme tout ce qu'on vole dans les chapelles|est de vermeil massif, et le pied porte gravé le nom de la donatrice, en lettres anciennes : Ysaure}}. Fais-en ce que tu veux. Rends-le, garde-le. Moi, je ne veux plus le voir dans ma cour. »",
      { if: { not: { present: "fauvette" } }, text: "Sur le toit d'en face, Fauvette te regarde, accroupie, les coudes sur les genoux. Elle descend par la gouttière, saute dans la cour, et vient se planter devant toi. « Marché tenu, dit-elle. Je viens. »" },
    ],
    choices: [
      { label: "Prendre le calice", fx: { item: "ivv_tr_calice", clock: { tresors: 1 }, flag: "tresor:iv_calice" }, to: "IVV_toits_fauvette" },
    ] },

  IVV_toits_assaut: { act: "IV", title: "L'assaut des toits", place: "salveze", takes: "morning",
    text: [
      "L'aube est grise et humide, les ardoises glissent. Tu es couché{e} derrière une cheminée, entre deux gamins de douze ans qui tiennent chacun une tuile dans chaque main. En bas, les tambours du Guet. Puis des pas, beaucoup, dans les escaliers des maisons, et sur les passerelles du nord, des silhouettes en gants gris qui avancent courbées, une lame courte à la main.",
      { if: { has: "ivv:mouchard" }, text: "Rien ne vient par le lavoir. La Reine y a mis ses hommes quand même, au cas où, et le reste sur les passerelles du nord, où les gants gris arrivent en croyant surprendre tout le monde." },
      { with: "fauvette", text: "Fauvette est debout sur le faîtage, sans se cacher. Elle siffle deux notes. Trente tuiles partent en même temps." },
    ],
    choices: [
      { label: "Tenir la passerelle du nord", fight: { title: "La passerelle du nord", enemies: [{ id: "iv_spadassin", n: 3 }], range: "loin",
        win: { fx: { flag: "ivv:toits_assaut", quest: "IVV_toits", fac: { banque: -10, hautes: 5 }, ep: ["seance", 3000] }, to: "IVV_toits_tenus" },
        lose: { fx: { flag: "ivv:toits_assaut", quest: "IVV_toits", pv: -5 }, to: "IVV_toits_perdus" },
        flee: { label: "Sauter sur le toit voisin", dom: "discretion", diff: -10, to: "IVV_toits_perdus" } } },
      { label: "Couper les cordes de la passerelle quand ils seront dessus", test: { dom: "discretion", diff: -10, label: "Le bon moment", help: [FAU, { if: { has: "ivv:mouchard" }, v: 15 }] },
        win: { fx: { flag: "ivv:toits_assaut", quest: "IVV_toits", fac: { banque: -10, hautes: 5 }, ep: ["seance", 3000] }, to: "IVV_toits_tenus" },
        lose: { fx: { flag: "ivv:toits_assaut", quest: "IVV_toits", pv: -3 }, to: "IVV_toits_perdus" } },
    ] },

  IVV_toits_tenus: { act: "IV", title: "Les toits tenus", place: "salveze",
    text: [
      "Les gants gris refluent par les escaliers, en portant leurs blessés. Le Guet est resté en bas : les hallebardiers ont passé la matinée au pied des maisons, à regarder les tuiles tomber, et on dit qu'aucun n'a levé son arme. À midi, les tambours repartent. Les Gouttières tiennent.",
      "La Reine monte sur le toit de la fabrique, en robe de velours, et regarde la ville. « Ils reviendront, dit-elle. Mais ils ont appris le chemin du lavoir. Le prochain, on le changera. »",
      "Elle te met dans les mains un calice de vermeil enveloppé dans un torchon. « Volé à Saint-Rémoud pendant le feu des Halles. Je l'ai payé. Prends-le. Les Gouttières paient leurs dettes. » Le calice {{pie#iv_calice|est doré sur du cuivre, comme tout ce qu'on vole dans les chapelles|est de vermeil massif, et le pied porte gravé le nom de la donatrice, en lettres anciennes : Ysaure}}.",
      { if: { not: { present: "fauvette" } }, text: "Fauvette saute du toit d'en face, en sang au coude et radieuse. « Marché tenu, dit-elle. Je viens. »" },
    ],
    choices: [
      { label: "Prendre le calice", fx: { item: "ivv_tr_calice", clock: { tresors: 1 }, flag: "tresor:iv_calice" }, to: "IVV_toits_fauvette" },
    ] },

  IVV_toits_perdus: { act: "IV", title: "Les toits perdus", place: "salveze",
    text: [
      "Les gants gris passent la passerelle du nord, puis celle de l'est. Les gamins se replient de toit en toit, en jetant leurs dernières tuiles. Toi aussi. À midi, la Banque tient les toits du nord, et la Reine a déménagé sa cuve de soupe dans une cave dont on ne connaît que l'odeur.",
      "Le soir, le Guet repart, la Banque laisse quatre hommes sur la fabrique de pelles. Ils y ont froid. Les Gouttières les regardent d'en face, sans rien jeter. Elles attendent.",
      { if: { not: { present: "fauvette" } }, text: "Fauvette te retrouve dans une gouttière, le visage noir de suie. « On a perdu, dit-elle. On perd souvent. Je viens quand même. »" },
    ],
    choices: [
      { label: "Redescendre avec Fauvette", hide: { present: "fauvette" }, fx: { join: "fauvette", flag: "iv:fauvette_revenue", ep: ["perso", 800] }, back: "IV_gouttieres" },
      { label: "Redescendre des toits", hide: { not: { present: "fauvette" } }, back: "IV_gouttieres" },
    ] },

  IVV_toits_fauvette: { act: "IV", title: "Sur le toit de la fabrique", place: "salveze",
    text: [
      { if: { present: "fauvette" }, text: "Fauvette s'assied à côté de toi sur le faîtage de la fabrique, les jambes dans le vide. Elle regarde la ville. « Tu vois, dit-elle. Les toits, c'est la seule partie de Salvèze qui n'appartient à personne. »", else: "Fauvette s'assied à côté de toi sur le faîtage de la fabrique, les jambes dans le vide, son brassard rouge dénoué sur les genoux. « Je viens, dit-elle. Jusqu'au bout de ton affaire, quelle qu'elle soit. Après, on verra. »" },
      { if: { has: "tresor:iv_calice" }, text: "Elle tourne le calice entre tes mains, le soupèse du regard, et ne le touche pas. « Ysaure, dit-elle. Ta reine muette. Elle est partout, ces temps-ci. »" },
    ],
    choices: [
      { label: "« Viens. »", hide: { present: "fauvette" }, fx: { join: "fauvette", flag: ["iv:fauvette_revenue", "fauvette:amie"], conf: { fauvette: 10 }, ep: ["perso", 800] }, back: "IV_gouttieres" },
      { label: "Redescendre des toits", hide: { not: { present: "fauvette" } }, fx: { conf: { fauvette: 5 } }, back: "IV_gouttieres" },
    ] },
});

// ==================================================================== the drained canal (side quest IVV_vase)
Object.assign(P, {
  IVV_vase: { act: "IV", title: "Le canal vide", place: "salveze", backName: "le fond du canal des Lanternes",
    fx: { meet: "iv_fortune" },
    text: [
      { first: true, text: "Tu descends l'escalier d'eau devant la boutique d'Odeline, et tes bottes s'enfoncent jusqu'aux chevilles dans une vase tiède qui garde la forme de ton pied. Le fond du canal est un pays : des carcasses de barques, des roues de charrette, des bouteilles par centaines, des os, des chaudrons percés, et partout les lanternes de papier de la dernière fête, collées à plat dans la boue comme des feuilles mortes." },
      { text: "Au pied de l'escalier, la marche la plus basse, verdie, {{echo#iv_lanterne_odeline|luit de vase|rend la voix d'Odeline, un soir de fête, tout bas, au-dessus de l'eau : « Pour ma mère. Et pour la mère de l'enfant, là-bas aux Joncs, qui me l'a confié il y a vingt ans. »}}." },
      { again: true, text: "Le fond du canal, la vase tiède, les lanternes de papier collées dans la boue. Les fouilleurs, courbés, qui avancent d'un pas par heure." },
      "Un vieil homme en chemise, les jambes nues et noires jusqu'aux cuisses, plante un bâton ferré dans la vase tous les trois pas, et écoute ce qui sonne. C'est le vieux Fortuné, qui fouille ce canal depuis soixante ans. Il te regarde et ne s'arrête pas. « Ce qui est dans la vase {{oreille#iv_fortune|est à moi, depuis soixante ans, c'est la coutume du canal|est à ceux qui l'ont perdu, et moi je cherche depuis vingt ans l'anneau de ma fille, qui s'est noyée sous le pont des Noyés}}. Cherche ailleurs. »",
      "Autour de lui, ce que la vase a déjà rendu sèche sur une toile : des bagues, des boucles, une poupée de bois, une petite croix, et une lanterne de procession {{pie#iv_lanterne_argent|en fer-blanc noirci, bonne pour la ferraille|en argent repoussé, sous la crasse, aux armes de la confrérie des bateliers, dissoute il y a cent ans}}.",
    ],
    choices: [
      { label: "« Je cherche les choses perdues, moi aussi. C'est mon métier. Cherchons ensemble. »", hide: { seen: "IVV_vase_fouille" }, to: "IVV_vase_fouille" },
      { label: "« L'anneau de votre fille. Dites-moi comment il était. »", hide: { any: [{ not: { voile: "iv_fortune" } }, { seen: "IVV_vase_fouille" }] }, fx: { ep: ["perso", 400], flag: "ivv:anneau_cherche" }, to: "IVV_vase_fouille" },
      { label: "Lui acheter la lanterne de fer-blanc pour la ferraille (5 liards)", hide: { any: [{ not: { voile: "iv_lanterne_argent" } }, { has: "tresor:iv_lanterne" }] }, fx: { gold: -5, item: "ivv_tr_lanterne", clock: { tresors: 1 }, flag: "tresor:iv_lanterne", ep: ["perso", 300] }, back: "IVV_vase" },
      { back: "IV_quai" },
    ] },

  IVV_vase_fouille: { act: "IV", title: "La fouille", place: "salveze", takes: 4,
    text: [
      "Fortuné te prête un bâton ferré et te montre : planter, écouter, planter. Le bois sonne sourd sur la vase, mat sur le bois pourri, clair sur le métal. Il faut des heures pour que l'oreille apprenne. Odeline disait que les mains trouvent avant la tête.",
      { if: { has: "ivv:anneau_cherche" }, text: "« Un anneau d'argent, dit Fortuné, sans te regarder. Tout simple. Avec un nœud gravé dedans. Elle s'appelait Apolline. Elle avait dix-sept ans. C'est la première fois que je le dis à quelqu'un qui fouille. »" },
    ],
    choices: [
      { label: "Fouiller au bâton, comme le vieux te le montre", test: { dom: "nature", diff: -10, label: "Écouter ce qui sonne", help: [LIS, SAL, { if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IVV_vase_trouve" }, lose: { to: "IVV_vase_trouve" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison et la vase, deux vieilles connaissances" },
        win: { fx: { conf: { lison: 5 } }, to: "IVV_vase_trouve" }, lose: { to: "IVV_vase_trouve" } },
      { label: "Fouiller au pied du pont des Noyés, à l'endroit où l'on jette les lanternes", hide: { not: { voile: "iv_lanterne_odeline" } }, fx: { ep: ["perso", 500] }, to: "IVV_vase_trouve" },
    ] },

  IVV_vase_trouve: { act: "IV", title: "Ce que rend la vase", place: "salveze",
    text: [
      { outcome: "lose", text: "Tu fouilles jusqu'au soir, et la vase te rend des tessons, une cuiller d'étain, un fer à cheval, et une sangsue que Fortuné t'enlève du mollet avec une pincée de sel. En partant, au ras de la dernière marche, ton pied cogne quelque chose de dur sous la boue." },
      "Une boîte de fer, grosse comme un pain, ficelée de cuir pourri. Dedans, roulées dans une toile cirée, des lettres, une mèche de cheveux, et, au fond, un petit anneau d'argent tout simple, avec un nœud gravé à l'intérieur.",
      "Les lettres sont d'une écriture de jeune fille, à l'encre pâle, à moitié bue par l'eau. *{{loupe#iv_lettres_apolline|Mon cher amour, je t'attendrai sous le pont le soir des Lanternes|Mon père ne doit rien savoir : je pars avec toi le soir des Lanternes, et je jetterai l'anneau dans le canal pour qu'il croie que je me suis noyée}}.* Signé : *Apolline*.",
      "Fortuné s'est arrêté de fouiller. Il regarde l'anneau dans ta main, de loin, sans approcher.",
    ],
    choices: [
      { label: "Lui donner l'anneau, sans les lettres", fx: { flag: "ivv:vase_rendu", quest: "IVV_vase", fac: { hautes: 3 }, ep: ["seance", 2000] }, to: "IVV_vase_anneau" },
      { label: "Lui donner l'anneau et lui lire ce que dit l'encre cachée", hide: { not: { voile: "iv_lettres_apolline" } }, fx: { flag: ["ivv:vase_rendu", "ivv:apolline_vivante"], quest: "IVV_vase", fac: { hautes: 5 }, ep: ["seance", 2500] }, to: "IVV_vase_apolline" },
      { label: "Garder la boîte, et vendre l'anneau aux Changeurs", fx: { flag: "ivv:vase_garde", quest: "IVV_vase", gold: 40 }, to: "IVV_vase_garde" },
    ] },

  IVV_vase_anneau: { act: "IV", title: "L'anneau d'Apolline", place: "salveze",
    text: [
      "Fortuné prend l'anneau entre ses doigts noirs de vase, le frotte contre sa chemise, et regarde le nœud gravé à l'intérieur. Il hoche la tête plusieurs fois. Puis il le glisse à son petit doigt, où il n'entre qu'à moitié, et reprend son bâton.",
      "« Prends la lanterne, dit-il sans se retourner. Celle de fer-blanc. Elle encombre ma toile. »",
    ],
    choices: [{ label: "Prendre la lanterne", hide: { has: "tresor:iv_lanterne" }, fx: { item: "ivv_tr_lanterne", clock: { tresors: 1 }, flag: "tresor:iv_lanterne" }, back: "IVV_vase" }, { back: "IVV_vase" }] },

  IVV_vase_apolline: { act: "IV", title: "Apolline", place: "salveze",
    text: [
      "Tu lis à voix haute ce que dit la seconde encre. Fortuné t'écoute jusqu'au bout, debout dans la vase, le bâton planté. Puis il s'assied, d'un coup, sur une carcasse de barque, et il rit, et il pleure, et il rit, et les autres fouilleurs se redressent pour le regarder.",
      "« Partie, dit-il. Partie avec le fils du tonnelier, cette canaille. Vingt ans que je fouille pour une fille qui vit à Aveline avec six enfants, sûrement, et un mari qui boit. » Il s'essuie le nez. « Vingt ans. Ah, la garce. Ah, la belle garce. »",
      "Il te met la lanterne dans les bras. « Elle est en argent, dit-il. Je le sais depuis le premier jour. Prends-la. J'ai plus besoin de fouiller. »",
    ],
    choices: [{ label: "Remonter l'escalier d'eau, la lanterne dans les bras", hide: { has: "tresor:iv_lanterne" }, fx: { item: "ivv_tr_lanterne", clock: { tresors: 1 }, flag: "tresor:iv_lanterne" }, back: "IV_quai" }, { back: "IV_quai" }] },

  IVV_vase_garde: { act: "IV", title: "L'anneau vendu", place: "salveze",
    text: [
      "Un changeur de l'île te donne deux ducats de l'anneau, sans regarder le nœud. Tu gardes les lettres au fond de ton sac.",
      "Le lendemain, au fond du canal, le vieux Fortuné plante son bâton tous les trois pas, et écoute ce qui sonne. Il le fait depuis vingt ans. Il le fera demain.",
      "Tu {{miroir#iv_vase_garde|as fait une affaire, comme on en fait cent par an sur le quai|as fait exactement ce qu'Odeline t'a appris à ne jamais faire, et tu le sais depuis le premier liard}}.",
    ],
    choices: [{ back: "IV_quai" }] },
});

// ==================================================================== the rue des Dames: Rosalie, the blue banners (side quest IVV_bannieres), Tibère's choice
var TIBERE_ESPION = { all: [{ present: "tibere" }, { not: { has: "tibere:double" } }, { not: { has: "tibere:vendu" } }] };
Object.assign(P, {
  IV_dames: { act: "IV", title: "La rue des Dames", place: "salveze", backName: "l'atelier de la rue des Dames",
    fx: { meet: "iv_lhoste", questSeen: "IVV_bannieres" },
    text: [
      { first: true, text: "La rue des Dames, aux Teinturiers, sent l'urine de cuve, le pastel et l'alun. Les ruisseaux qui courent au milieu des pavés sont bleus, rouges, jaunes selon l'heure. La moitié des ateliers sont fermés ; les teinturiers sont partis vers l'amont avec leurs familles, ou campent sur la place du Beffroi. L'atelier de Maîtresse Lesueur, lui, travaille : on entend par la fenêtre ouverte le bruit de douze aiguilles et le chant d'une apprentie." },
      { first: true, text: "Dans la grande salle, douze filles cousent à la lumière, sur deux longues tables. Elles cousent des casaques noires à besant d'or : les livrées des nouveaux gardes de la Banque. Il y en a des piles jusqu'au plafond. Sur le seuil, un garde en gants gris, une arbalète à l'épaule, mâche une croûte." },
      { first: true, text: "Maîtresse Brigitte Lesueur se lève de son tabouret, les lunettes au bout du nez, un mètre de couturière autour du cou. « Des commandes, dit-elle. {{oreille#iv_lhoste_commandes|Rien que des commandes de la Banque, ces temps-ci|Des commandes de la Banque le jour, et la nuit, dans l'arrière-salle, une autre que je voudrais n'avoir jamais acceptée}}. Si c'est pour une robe, il faudra attendre la paix. »" },
      { again: true, text: "L'atelier de la rue des Dames, ses douze aiguilles, ses piles de casaques noires. Le garde en gants gris mâche toujours sur le seuil." },
      { again: true, if: { has: "ivv:lhoste_mefiante" }, text: "Maîtresse Lesueur te suit des yeux d'une table à l'autre. Elle garde la clé de l'arrière-salle dans son poing fermé tant que tu restes dans l'atelier." },
      "Au bout de la seconde table, une fille de seize ans, brune, les cheveux tirés en chignon, coud sans lever les yeux, plus vite que les autres. Rosalie Gaucelm.",
      { with: "tibere", text: "Tibère s'est arrêté sur le seuil, à côté du garde, son chapeau à la main. Il regarde sa fille coudre, et il reste là." },
      { if: { has: "iiid:rosalie_banque" }, text: "On t'a dit, à Orle, que la Banque la logeait dans les combles de l'hôtel Marrel. Le garde du seuil est là pour la ramener le soir." },
    ],
    choices: [
      { label: "Parler à Rosalie", hide: { seen: "IVV_bannieres_rosalie" }, to: "IVV_bannieres_rosalie" },
      { label: "« Montrez-moi votre arrière-salle, maîtresse. »", hide: { any: [{ not: { voile: "iv_lhoste_commandes" } }, { seen: "IVV_bannieres_arriere" }] }, to: "IVV_bannieres_arriere" },
      { label: "Pousser la porte de l'arrière-salle pendant que la maîtresse a le dos tourné", hide: { any: [{ voile: "iv_lhoste_commandes" }, { seen: "IVV_bannieres_arriere" }] }, test: { dom: "discretion", diff: -10, label: "Derrière les piles de casaques", help: [FAU] },
        win: { to: "IVV_bannieres_arriere" }, lose: { fx: { flag: "ivv:lhoste_mefiante" }, to: "IVV_bannieres_nuit" } },
      { label: "Attendre la nuit devant l'atelier, quand l'intendant passera prendre sa commande", hide: { any: [{ not: { seen: "IVV_bannieres_arriere" } }, { quest: "IVV_bannieres" }] }, to: "IVV_bannieres_nuit" },
      { label: "Raccompagner Tibère dehors", hide: { any: [{ not: TIBERE_ESPION }, { not: { seen: "IVV_bannieres_rosalie" } }, { seen: "IV_tibere_offre" }] }, to: "IV_tibere_offre" },
      { back: "IV_hub" },
    ] },

  IVV_bannieres_rosalie: { act: "IV", title: "Rosalie", place: "salveze",
    fx: { meet: "rosalie" },
    text: [
      "Rosalie garde les yeux sur sa couture. Elle a des doigts rouges de piqûres, et le dé de fer lui fait une bague. « Je sais qui vous êtes, dit-elle. Votre tête est sur la porte du Beffroi. Mon père travaillait pour vous, à ce qu'on dit. » Elle tire son fil. « {{oreille#iv_rosalie_pere|Je ne lui parle plus, ça ne me regarde pas|Je demande de ses nouvelles à tous les gens d'Orle qui passent, et je fais semblant que c'est pour savoir s'il est mort}}. »",
      "« La Banque me loge et me nourrit, dit-elle encore. Il y a des filles des Teinturiers qui mangent de l'herbe. Moi, j'ai du pain blanc, et un lit dans les combles de l'hôtel Marrel, avec trois autres. On {{oreille#iv_rosalie_marrel|est bien traitées, il faut le dire|ferme la porte des combles à clé le soir, de l'extérieur, et le garde du seuil dort devant}}. »",
      { with: "tibere", text: "Tibère s'est approché, à trois pas. Rosalie l'a vu entrer. Elle coud plus vite. « Bonjour, papa », dit-elle sans lever les yeux, d'une voix plate. Tibère ouvre la bouche, la referme, et tourne son chapeau entre ses mains." },
      { with: "tibere", text: "« Tu manges bien ? » dit-il enfin. Rosalie pose son aiguille. Elle le regarde, pour la première fois. « Mieux que toi, à ce que je vois. » Puis elle reprend son aiguille, et ses yeux sont mouillés, et elle coud quand même, droit." },
      { if: { has: "tibere:parti" }, without: "tibere", text: "« On m'a dit qu'il était parti, ajoute-t-elle. Encore. Il part, c'est ce qu'il sait faire. » Elle casse son fil avec les dents." },
      { if: { not: { has: "tibere:parti" } }, without: "tibere", text: "« Il est vivant ? demande-t-elle, d'un ton de rien. Bon. Ne lui dites pas que j'ai demandé. »" },
    ],
    choices: [
      { label: "« Il pense à toi tous les jours. Il me l'a dit, sans le dire. »", without: "tibere", hide: { has: "tibere:parti" }, fx: { conf: { tibere: 5 }, flag: "iv:rosalie_message" }, back: "IV_dames" },
      { label: "« Les combles fermés à clé. Tu veux en sortir ? »", hide: { not: { voile: "iv_rosalie_marrel" } }, fx: { flag: "iv:rosalie_promesse", ep: ["perso", 600] }, to: "IVV_bannieres_promesse" },
      { label: "La laisser coudre", back: "IV_dames" },
    ] },

  IVV_bannieres_promesse: { act: "IV", title: "Une promesse à Rosalie", place: "salveze",
    text: [
      "Rosalie te regarde, longtemps, comme on regarde un prêteur. « Où j'irais ? » Puis, plus bas : « La nuit, l'intendant du prévôt vient prendre la commande de l'arrière-salle. Le garde sort pour l'aider à charger. Pendant ce temps-là, il n'y a personne au seuil. »",
      "« Si j'étais à la porte à ce moment-là, dit-elle, et si quelqu'un m'attendait dehors, peut-être. » Elle reprend son aiguille. « Ne le dites pas à mon père. Il gâcherait tout. Il gâche tout. »",
      { with: "tibere", text: "Tibère a entendu. Il fait semblant de regarder les casaques noires. Il a les mains qui tremblent." },
    ],
    choices: [{ back: "IV_dames" }] },

  IVV_bannieres_arriere: { act: "IV", title: "L'arrière-salle", place: "salveze",
    fx: { clue: "ivv_s_bannieres", ep: ["perso", 1000] },
    text: [
      { if: { voile: "iv_lhoste_commandes" }, text: "Maîtresse Lesueur te regarde longtemps, puis elle détache une clé de sa ceinture et ouvre l'arrière-salle elle-même. « Je ne vous ai rien montré, dit-elle. Je vais à la cuisine. »", else: "Tu te glisses dans l'arrière-salle et tu tires la porte derrière toi." },
      "Sur une table à tréteaux, pliées en piles bien nettes, des bannières de drap, longues comme un homme, à trois glands d'argent. Elles sont teintes d'un bleu {{pie#iv_bleu_aveline|de Salvèze, comme les casaques du crieur|d'Aveline, ce bleu sombre au pastel du nord qu'on ne fait pas ici, la couleur des cuirasses du duc}}. On en compte soixante. Sur chacune, à la place du blason, un rond de toile blanche cousu à grands points, qu'on décousera le jour venu.",
      "Épinglé à la première pile, un bon de commande. *Soixante bannières de drap bleu, glands d'argent, pour les fêtes de la Saint-Jean. {{loupe#iv_bon_bannieres|Payé comptant|Pour la maison du prévôt, par son intendant, à livrer de nuit la veille de la Saint-Jean, sans écrire nulle part le nom du client}}.*",
      { with: "tibere", text: "Tibère soulève un coin de rond blanc avec son ongle. Dessous, déjà brodé, un fer de lance d'argent sur le bleu. « Les armes d'Aveline, dit-il. J'ai vu les mêmes sur un tambour, à la frontière, il y a vingt ans. »" },
      { with: "fauvette", text: "Fauvette fait le tour de la table en sifflotant. « Soixante, dit-elle. Ça brûle bien, le drap. »" },
    ],
    choices: [
      { label: "Prendre une bannière, pliée sous ton manteau", hide: { has: "ivv:banniere_prise" }, fx: { flag: "ivv:banniere_prise" }, back: "IV_dames" },
      { label: "Ressortir sans toucher à rien", back: "IV_dames" },
    ] },

  IVV_bannieres_nuit: { act: "IV", title: "La commande du prévôt", place: "salveze", takes: "night",
    text: [
      { outcome: "lose", text: "La porte de l'arrière-salle grince. Maîtresse Lesueur se retourne d'un bloc, très pâle, et te met dehors. Par la fenêtre, tu la vois fermer l'arrière-salle à clé, les mains tremblantes. Tu attends la nuit au coin de la rue, sous un auvent de teinturier." },
      "À la onzième heure, une charrette bâchée s'arrête devant l'atelier, tirée par un cheval aux sabots entourés de chiffons. Un homme en manteau sans couleur en descend, avec quatre valets armés d'épées de ville. L'intendant du prévôt frappe deux coups. Maîtresse Lesueur ouvre. Le garde de la Banque sort pour aider à charger les ballots de drap bleu.",
      { if: { has: "iv:rosalie_promesse" }, text: "Le seuil est vide. Derrière la porte de l'atelier, dans l'ombre, une silhouette de fille, un baluchon contre la poitrine, qui te cherche des yeux." },
    ],
    choices: [
      { label: "Mettre le feu à la charrette pendant qu'ils chargent", test: { dom: "discretion", diff: -10, label: "Une braise sous la bâche", help: [FAU, LIS] },
        win: { fx: { flag: "ivv:bannieres_brulees", quest: "IVV_bannieres", fac: { conseil: 5 }, ep: ["seance", 2500] }, to: "IVV_bannieres_feu" },
        lose: { to: "IVV_bannieres_combat" } },
      { label: "Attaquer l'intendant et ses valets", to: "IVV_bannieres_combat" },
      { label: "Suivre la charrette jusqu'où elle va", test: { dom: "discretion", diff: 0, label: "Une charrette dans la nuit", help: [FAU] },
        win: { fx: { flag: "ivv:bannieres_preuve", quest: "IVV_bannieres", ep: ["seance", 2500] }, to: "IVV_bannieres_suivie" },
        lose: { fx: { flag: "ivv:bannieres_perdues", quest: "IVV_bannieres" }, to: "IVV_bannieres_perdues" } },
    ] },

  IVV_bannieres_combat: { act: "IV", title: "Les valets du prévôt", place: "salveze",
    text: [
      "L'intendant crie un ordre, et les quatre valets tirent leurs épées de ville d'un même geste. Ils savent s'en servir. Le garde de la Banque, lui, recule jusqu'au coin de la rue et regarde.",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les valets du prévôt", enemies: [{ id: "iv_homme_prevot", n: 3 }],
        win: { fx: { flag: "ivv:bannieres_brulees", quest: "IVV_bannieres", fac: { conseil: 5 }, ep: ["seance", 2500] }, to: "IVV_bannieres_feu" },
        lose: { fx: { flag: "ivv:bannieres_perdues", quest: "IVV_bannieres", pv: -5 }, to: "IVV_bannieres_perdues" },
        flee: { label: "Fuir par les ruisseaux de teinture", dom: "discretion", diff: 0, to: "IVV_bannieres_perdues" } } },
    ] },

  IVV_bannieres_feu: { act: "IV", title: "Le drap bleu brûle", place: "salveze",
    text: [
      "Le drap prend mal, puis d'un coup. La bâche flambe, le cheval hennit et part au galop avec la charrette en feu derrière lui, jusqu'au bout de la rue des Dames, où elle verse dans le ruisseau de teinture. L'intendant court derrière, en manteau sans couleur, et s'arrête, et regarde brûler soixante bannières d'Aveline au milieu d'une eau bleue.",
      "Au matin, il reste une flaque noire, des glands d'argent fondus, et un fer de lance brodé que la flamme a épargné. Tu le ramasses.",
      { if: { has: "iv:rosalie_promesse" }, text: "Rosalie est sortie par le seuil vide pendant que tout le monde courait. Elle te rejoint au coin de la rue, son baluchon serré. Tu l'emmènes à la pension de Clarmonde Pujol, qui lui donne un lit et une écuelle de soupe d'orties sans poser de question." },
    ],
    choices: [{ label: "Rentrer avant l'aube", to: "IVV_bannieres_rosalie_fin" }] },

  IVV_bannieres_suivie: { act: "IV", title: "L'hôtel Delisle", place: "salveze",
    text: [
      "La charrette ne va pas loin. Elle traverse le pont des Teinturiers, longe le canal du Conseil, et s'engage sous le porche d'un hôtel de pierre grise dont les fenêtres sont toutes noires, sauf une. Sur le fronton, sculptée, une tour sur une vague : l'hôtel Delisle, la maison du prévôt.",
      "Les valets déchargent les ballots dans la cour. À la fenêtre éclairée, un vieil homme en robe de chambre regarde la scène, une chandelle à la main, puis tire le rideau.",
      { if: { has: "iv:rosalie_promesse" }, text: "Quand tu reviens rue des Dames, Rosalie attend au coin, son baluchon serré, grelottante. Elle est sortie par le seuil vide. Tu l'emmènes à la pension de Clarmonde Pujol, qui lui donne un lit sans poser de question." },
    ],
    choices: [{ label: "Rentrer avant l'aube", to: "IVV_bannieres_rosalie_fin" }] },

  IVV_bannieres_perdues: { act: "IV", title: "La charrette partie", place: "salveze",
    text: [
      "La charrette s'éloigne au pas, ses sabots enveloppés de chiffons, et tourne au coin de la rue. Tu la perds dans le noir. L'atelier referme ses volets. Maîtresse Lesueur éteint sa chandelle.",
      { if: { has: "iv:rosalie_promesse" }, text: "Au seuil, la silhouette de Rosalie a disparu. Le garde de la Banque, revenu, s'est assis devant la porte, son arbalète sur les genoux. Elle est rentrée. Ou on l'a fait rentrer." },
    ],
    choices: [{ back: "IV_dames" }] },

  IVV_bannieres_rosalie_fin: { act: "IV", title: "Avant l'aube", place: "salveze",
    text: [
      { if: { has: "iv:rosalie_promesse" }, text: "À la pension Pujol, Rosalie s'endort tout habillée sur un lit trop grand, son dé de fer encore au doigt. Clarmonde ferme la porte sur elle sans bruit. « Je la garde, dit-elle. J'ai gardé pire. »", else: "La rue des Dames retrouve son silence. Les ruisseaux coulent noirs, sans teinture, jusqu'au matin." },
      { if: { has: "iv:rosalie_promesse" }, with: "tibere", text: "Tibère est resté assis sur les marches de la pension jusqu'à l'aube. Il n'est pas entré. Au matin, Rosalie a ouvert la fenêtre, l'a vu, et l'a regardé un long moment en silence. Puis elle a laissé la fenêtre ouverte." },
    ],
    choices: [{ label: "Laisser dormir Rosalie", hide: { not: { has: "iv:rosalie_promesse" } }, fx: { flag: "iv:rosalie_sauvee", conf: { tibere: 15 }, ep: ["perso", 1000] }, back: "IV_hub" }, { label: "Laisser la rue des Dames à sa nuit", hide: { has: "iv:rosalie_promesse" }, back: "IV_hub" }] },

  IV_tibere_offre: { act: "IV", title: "Le billet du seuil", place: "salveze",
    text: [
      "Sur le seuil, en passant, le garde de la Banque glisse un billet plié dans la main de Tibère, sans le regarder, comme on rend la monnaie. Tibère le met dans sa poche aussitôt. Dehors, dans la rue, il marche un moment à côté de toi, les yeux sur les ruisseaux de teinture.",
      "« Le cordonnier de la rue d'à côté, dit-il. {{oreille#iv_tibere_billet|Il me doit une paire de bottes depuis l'hiver|C'est Brunel : Rosalie garde son pain blanc et son lit si je lui dis ce soir où tu dors, et ce que tu prépares contre la Banque}}. » Il tousse. « Je vais boire un coup, ce soir. Seul. Ne m'attends pas. »",
      { if: { has: "tibere:espion" }, text: "Tu sais qui le payait, autrefois, cinq ducats la semaine. Il sait que tu le sais." },
    ],
    choices: [
      { label: "« Montre-moi ce billet, Tibère. Je sais ce qu'il dit. »", hide: { not: { voile: "iv_tibere_billet" } }, fx: { ep: ["perso", 800] }, to: "IV_tibere_retenu" },
      { label: "« C'est Brunel, n'est-ce pas ? »", hide: { any: [{ voile: "iv_tibere_billet" }, { not: { has: "tibere:espion" } }] }, test: { dom: "social", diff: -10, label: "Le faire parler avant ce soir" },
        win: { to: "IV_tibere_retenu" }, lose: { to: "IV_tibere_vendu" } },
      { label: "Le laisser aller boire", to: "IV_tibere_vendu" },
    ] },

  IV_tibere_retenu: { act: "IV", title: "Tibère", place: "salveze",
    text: [
      "Tibère sort le billet de sa poche, le déplie, et te le tend, d'un geste lourd. *Ce soir, la Lanterne Rouge, la onzième heure. Où dort-il, combien sont-ils, quand frappent-ils. La petite garde son lit.* La signature manque. Elle serait de trop.",
      "« J'allais y aller, dit-il. Je te le dis, parce que tu l'as entendu de toute façon, avec ton os. J'allais y aller, et j'allais lui dire la moitié, la mauvaise moitié, et j'allais me croire malin. » Il s'assoit sur une borne. « Je ne suis pas malin. Je suis un père qui a joué sa maison aux dés. Ils ont ma fille dans un grenier fermé à clé. »",
      { if: { has: "iv:rosalie_promesse" }, text: "Tu lui dis pour la promesse, pour le seuil vide, pour la nuit de la commande. Il te regarde, la bouche ouverte, comme un homme qui a soif et à qui on tend un seau." },
    ],
    choices: [
      { label: "« Va à ton rendez-vous. Dis à Brunel ce que nous déciderons ensemble. »", fx: { flag: "tibere:double", conf: { tibere: 15 }, ep: ["seance", 2500] }, to: "IV_tibere_double" },
      { label: "« Je sortirai Rosalie de là. Toi, tu restes avec moi, et tu n'y vas pas. »", fx: { flag: ["iv:rosalie_promesse", "tibere:aveu"], conf: { tibere: 10 }, ep: ["seance", 2000] }, back: "IV_hub" },
      { label: "« Va-t'en, Tibère. Va retrouver ta fille, et ne reviens pas. »", fx: { flag: "tibere:parti", leave: "tibere" }, to: "IV_tibere_parti" },
    ] },

  IV_tibere_double: { act: "IV", title: "La Lanterne Rouge", place: "salveze", takes: "night",
    text: [
      "Tibère rentre à la deuxième heure, l'haleine chargée et l'œil clair. Il s'assied en face de toi, pose ses deux mains sur la table. « Il m'a cru, dit-il. Brunel. Il m'a écouté une heure, avec son cornet dans l'oreille, et il m'a cru. »",
      "« J'ai pensé à Rosalie tout le temps que je parlais. Rien qu'à elle. Il entend ce qu'on pense, ce type. Alors j'ai pensé à ma fille. Il a entendu un père qui a peur. C'était vrai. » Il rit, sans joie. « Le reste, je l'ai dit. Le reste, c'était faux. »",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_tibere_parti: { act: "IV", title: "Le dos de Tibère", place: "salveze",
    text: [
      "Tibère te regarde, longtemps. Puis il remet son chapeau, et il descend la rue des Dames, vers l'atelier, d'un pas de sergent, droit, comme on va prendre une garde. Au seuil, il dit quelque chose au garde de la Banque. Le garde rit. Tibère le frappe une fois, au menton, et entre.",
      "Il reste absent toute la journée. Le soir, on dit dans la rue qu'un vieil homme et une fille de seize ans ont pris la route de l'amont dans la charrette d'un teinturier, et que la fille ne parlait pas au vieil homme, et qu'elle lui tenait la manche.",
    ],
    choices: [{ back: "IV_hub" }] },

  IV_tibere_vendu: { act: "IV", title: "La place vide", place: "salveze",
    fx: { flag: "tibere:vendu", leave: "tibere", conf: { tibere: -15 } },
    text: [
      "Tibère part boire, seul, à la tombée du jour. Il ne revient pas. Au matin, sa couverture est pliée au carré à l'endroit où il dormait, avec sa vieille plaque du Guet posée dessus, comme on rend une arme.",
      "À midi, tu comprends pourquoi. Devant la porte de l'endroit où tu as dormi, trois hommes en gants gris attendent, adossés au mur d'en face. Ils savent ton nom. Ils savent combien vous êtes. Ils savent l'heure où tu sors.",
    ],
    choices: [{ label: "Sortir quand même", to: "IV_embuscade" }] },

  IV_embuscade: { act: "IV", title: "Les gants gris", place: "salveze",
    text: [
      "Ils se décollent du mur ensemble quand tu sors. Le premier tire une lame courte. Le deuxième fait le tour par la gauche. Le troisième, plus vieux, garde ses mains dans ses poches et regarde, comme un contremaître. « Brunel vous salue, dit-il. Il a payé cher pour ce rendez-vous. Il a payé un père. »",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le rendez-vous de Brunel", enemies: [{ id: "iv_spadassin", n: 3 }],
        win: { fx: { ep: ["seance", 3000], fac: { banque: -5 } }, to: "IV_embuscade_fin" }, lose: { fx: { pv: -6, gold: -40 }, to: "IV_embuscade_fin" },
        flee: { label: "Par les toits", dom: "discretion", diff: -10, to: "IV_embuscade_fin" } } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette et ses cheminées" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IV_embuscade_fin" }, lose: { fx: { pv: -4 }, to: "IV_embuscade_fin" } },
    ] },

  IV_embuscade_fin: { act: "IV", title: "Après les gants gris", place: "salveze",
    text: [
      { outcome: "win", text: "Les trois hommes sont à terre, ou en fuite. Le plus vieux a laissé tomber sa bourse en courant. Dedans, cinq ducats neufs, et un billet : *Pour G., ce qui reste dû.*" },
      { outcome: "lose", text: "Tu te réveilles dans le ruisseau, la bouche pleine de sang et de teinture, ta bourse partie, une côte qui proteste à chaque souffle. Ils ne voulaient pas te tuer. Ils voulaient que tu saches qu'ils pouvaient." },
      { outcome: "flee", text: "Tu cours de toit en toit jusqu'à ce que tes jambes refusent. Derrière toi, la rue reste vide. Ils savent où tu dors." },
      "Tu {{miroir#iv_tibere_trahi|t'en veux de ne pas avoir vu venir Tibère|savais, depuis la rue des Dames, qu'il irait, et tu l'as laissé aller pour n'avoir pas à le retenir}}.",
    ],
    choices: [{ back: "IV_hub" }] },
});

// ==================================================================== FIN DES PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      iv_mabire: { name: "Ermance Mabire", qui: "Capitaine du Guet de Salvèze.", aspect: { allure: "cinquante ans, à sa table de rapports", habits: "cuirasse de cuir sur une robe de laine", signe: "plume derrière l'oreille" }, f: true, face: { age: "mur", coif: "chignon", hair: "gris" }, desc: "Capitaine du Guet de Salvèze depuis que son prédécesseur a fui avec la caisse. Quarante gardes, trente mille affamés, et une plume derrière l'oreille. Elle n'a plus le temps d'être juste, et elle le regrette." },
      iv_jacomet: { name: "Jacomet", qui: "Porte-faix de la rue des Tanneurs.", aspect: { allure: "porte-faix fort et calme", signe: "soulève un homme comme un sac" }, f: false, face: { age: "adulte", beard: "barbe", coif: "court" }, desc: "Porte-faix de la rue des Tanneurs. Il a mené la foule devant le grenier de la Banque, cassé la porte, et laissé tout le grain aux autres." },
      iv_lhoste: { name: "Maîtresse Brigitte Lesueur", qui: "Maîtresse couturière de la rue des Dames, aux Teinturiers.", aspect: { allure: "maîtresse d'atelier affairée", signe: "lunettes au bout du nez, mètre au cou" }, f: true, face: { age: "mur", coif: "foulard", marks: ["lunettes"] }, desc: "Maîtresse couturière de la rue des Dames, aux Teinturiers. Douze apprenties, des commandes de la Banque, et une autre, plus discrète." },
      iv_fortune: { name: "Le vieux Fortuné", qui: "Fouilleur de vase du canal des Lanternes depuis soixante ans.", aspect: { allure: "vieil homme courbé sur la vase", habits: "chemise, jambes nues noires de boue", signe: "bâton ferré planté tous les trois pas" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Fouilleur de vase depuis soixante ans. Il connaît le fond du canal des Lanternes comme sa poche, et sa poche est pleine de choses qui ne sont pas à lui." },
      iv_ambrun: { name: "Ambrun", qui: "Patron de La Grise, gabare de sel de Grisemotte.", aspect: { allure: "homme sec, peau tannée par le sel", signe: "corde à la main, pipe" }, f: false, face: { age: "mur", skin: "hale", coif: "court" }, desc: "Patron de La Grise, gabare de sel de Grisemotte. Il fait entrer le sel, et parfois autre chose dessous." },
    },
    items: {
      ivv_tr_boucle: { name: "La boucle de la reine", kind: "tresor", price: 140, desc: "Une boucle de soulier d'argent fin, ovale. Au revers, une couronne fermée et une main posée sur une bouche. Trouvée sous le Beffroi, dans la salle où finissent les égouts de la reine." },
      ivv_tr_denier: { name: "Le denier d'or d'Ysaure", kind: "tresor", price: 160, desc: "Une pièce d'or rouge de l'an quatre du règne d'Ysaure : une reine qui tient un doigt sur ses lèvres, une tour sur l'eau. Tirée de la fente aux vœux de la borne du Beffroi." },
      ivv_tr_lanterne: { name: "La lanterne d'argent", kind: "tresor", price: 150, desc: "Une lanterne de procession en argent repoussé, aux armes d'une confrérie de bateliers dissoute. Rendue par la vase du canal des Lanternes." },
      ivv_tr_broche: { name: "La broche des Vasse", kind: "tresor", price: 120, bonus: { social: 5 }, desc: "Une broche d'argent noirci en forme de roseau, avec un grain d'ambre au bout. Odeline l'avait cachée sous la troisième marche de sa cave. Les gens des Hautes-Eaux la reconnaissent." },
      ivv_tr_calice: { name: "Le calice de Saint-Rémoud", kind: "tresor", price: 180, desc: "Un calice de vermeil, volé dans une chapelle des Halles pendant l'incendie et racheté par la Reine des Gouttières. Le pied porte un nom de donatrice : Ysaure." },
      ivv_tr_sceau: { name: "Le sceau du grenetier", kind: "tresor", price: 110, bonus: { savoir: 5 }, desc: "Une matrice de sceau en bronze, au nom du grenetier de la reine, qui marquait les sacs du blé royal. Trouvée dans la poussière du grenier de la Banque." },
      ivv_faux_collier: { name: "Le « collier de Corisande »", kind: "tresor", price: 3, desc: "Un collier lourd et jaune, vendu par un pillard des Halles comme volé chez la tête de la Banque." },
      iv_quittance: { name: "La quittance de Théodore Sauzet", kind: "document", form: "lettre", hand: "soignee", unique: true,
        text: "*Banque Marrel, comptoir du quai.*\n\n*Reçu de Théodore Sauzet, allumeur, la somme de trente ducats, qui solde sa dette de jeu envers la maison.* {{loupe#iv_quittance|Pour acquit, le commis du quai|Dette remise sans paiement, pour la déposition faite au Guet le troisième jour après les Lanternes, telle qu'elle lui a été dictée. Ne pas inscrire au grand livre. — L. B.}}\n\n*Salvèze, le quatrième jour après la nuit des Lanternes.*",
        desc: "Une quittance de la Banque, pliée en huit, trouvée dans la paillasse de l'allumeur." },
      iv_sursis: { name: "Le sursis de la capitaine", kind: "document", form: "billet", unique: true, text: "*Sursis d'arrêt jusqu'à la Saint-Jean pour la personne dite {hero}. Le Guet la laisse aller. — E. Mabire, capitaine.*", desc: "Trois lignes d'une écriture rapide, sur un carré de papier plié en quatre." },
    },
    enemies: {
      iv_rats: { name: "Rat des égouts", look: "rat", pv: 22, att: 60, def: 20, dmg: 6, flank: true, desc: "Gros comme un chat, chassé des greniers par la faim de la ville." },
      iv_guet: { name: "Garde du Guet", look: "humain", pv: 40, att: 70, def: 27, dmg: 8, desc: "Casque rond, hallebarde courte, deux nuits sans sommeil, et des ordres qu'il ne comprend plus." },
      iv_sergent: { name: "Sergent du Guet", look: "humain", pv: 110, att: 82, def: 30, dmg: 9, desc: "Un vieux sergent à la voix qui porte d'un bout de la rue à l'autre. Il charge le premier." },
      iv_spadassin: { name: "Spadassin de la Banque", look: "humain", pv: 42, att: 74, def: 28, dmg: 8, desc: "Gants gris, lame courte, payé double depuis les émeutes." },
      iv_emeutier: { name: "Émeutier affamé", look: "humain", pv: 34, att: 62, def: 22, dmg: 7, desc: "Un crochet de quai, une barre de fer, trois jours sans pain." },
      iv_homme_prevot: { name: "Homme de main du prévôt", look: "humain", pv: 44, att: 74, def: 28, dmg: 8, desc: "Livrée sans couleur, épée de ville, et l'habitude des besognes de nuit." },
    },
    clues: {
      ivv_s_carrosse: { rev: "S", text: "Fauvette : le carrosse du prévôt, repeint sans armoiries, passe le pont des Changeurs une nuit sur deux à la onzième heure, s'arrête derrière l'hôtel du Cygne où loge l'envoyé du duc, et en repart à la deuxième." },
      ivv_s_porte: { rev: "S", text: "Ordre du prévôt, sous son sceau privé, à la capitaine du Guet : la veille de la Saint-Jean, retirer la garde de la porte d'Amont et de l'estacade, et l'envoyer aux Halles, où l'on « craint » une émeute." },
      ivv_s_malles: { rev: "S", text: "Le crieur de la République : les valets du prévôt ont chargé ses malles sur une gabare, pour sa maison des champs, du côté d'Aveline." },
      ivv_s_barges: { rev: "S", text: "Registre du grenier de la Halle aux Blés : quatre cents sacs sortis de nuit par barges, vers l'amont, « pour l'intendance du duc », avec le contreseing du prévôt." },
      ivv_s_bannieres: { rev: "S", text: "Atelier de Maîtresse Lesueur : soixante bannières bleues aux trois glands d'argent, les couleurs d'Aveline, commandées par l'intendant du prévôt, à livrer la veille de la Saint-Jean." },
    },
    veils: {
      iv_crieur_malles: { fx: { clue: "ivv_s_malles", ep: ["perso", 400] } },
      iv_mabire_brunel: { fx: { ep: ["perso", 400] } },
      iv_borne_inscription: { fx: { ep: ["perso", 500] } },
      iv_borne_bourdon: { fx: { ep: ["perso", 600], flag: "iv:borne_sorne" } },
      iv_egouts_reine: { fx: { ep: ["perso", 400] } },
      iv_cimetiere_voix: { fx: { ep: ["perso", 600] } },
      iv_tombe: { fx: { ep: ["perso", 500] } },
      iv_retour: { fx: { ep: ["perso", 400] } },
      iv_quittance: { fx: { ep: ["perso", 800] } },
      iv_registre_grenier: { fx: { clue: "ivv_s_barges", ep: ["perso", 800] } },
      iv_bleu_aveline: { fx: { ep: ["perso", 500] } },
      iv_bon_bannieres: { fx: { ep: ["perso", 600] } },
      iv_ordre_amont: { fx: { ep: ["perso", 600], flag: "iv:cles_amont" } },
      iv_place_comptoirs: { fx: { ep: ["perso", 400] } },
      iv_lanterne_odeline: { fx: { ep: ["perso", 600] } },
      iv_prosper: { fx: { ep: ["perso", 300], fac: { banque: -2 } } },
      iv_boulangere: { fx: { ep: ["perso", 300] } },
      iv_minuit_bougeoir: { fx: { ep: ["perso", 800] } },
      iv_minuit_chute: { fx: { ep: ["perso", 800] } },
      iv_dispute_odeline: { fx: { ep: ["perso", 600] } },
      iv_dispute_toi: { fx: { ep: ["perso", 600] } },
    },
    quests: [
      { id: "IVV_grenier", act: "IV", kind: "annexe", title: "Le grenier de la Halle aux Blés", start: "IV_halles", echo: ["ivv:grenier_ouvert", "ivv:grenier_partage", "ivv:grenier_perdu"] },
      { id: "IVV_toits", act: "IV", kind: "annexe", title: "La révolte des toits", start: "IV_gouttieres", echo: ["ivv:toits_paix", "ivv:toits_assaut"] },
      { id: "IVV_vase", act: "IV", kind: "annexe", title: "Ce que rend la vase", start: "IVV_vase", echo: ["ivv:vase_rendu", "ivv:vase_garde"] },
      { id: "IVV_bannieres", act: "IV", kind: "annexe", title: "Les bannières bleues", start: "IV_dames", echo: ["ivv:bannieres_brulees", "ivv:bannieres_preuve", "ivv:bannieres_perdues"] },
    ],
    achievements: {
      iv_ville_debout: { title: "La ville debout", desc: "Ouvrir le grenier, apaiser les toits, rendre ce que rend la vase, et trouver les bannières bleues.",
        if: { all: [{ quest: "IVV_grenier" }, { quest: "IVV_toits" }, { quest: "IVV_vase" }, { quest: "IVV_bannieres" }] } },
    },
  },
};
