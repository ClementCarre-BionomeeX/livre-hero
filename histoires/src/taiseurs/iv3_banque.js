// Lot iv3 of "Le Trésor des Taiseurs": the break-in at the Banque Marrel (four plans: the Queen's sewers, the Mint
// next door, Corisande's ball, a bribed clerk), the debtors' cells and the deposit hall, the crypt of the old palace
// (the fifth cache, f_banque), Lothaire's study (the twin horn, his notebooks, the Pimpante casket, the stolen leaf),
// the confrontations with Lothaire and Corisande, the Bank's prison and the escape, and two side quests.

var HUB = "IV_hub";
var IN_BAL = { all: [{ seen: "IVB_bal_habit" }, { not: { seen: "IVB_bal_porte" } }] };   // Rosalie met while being fitted for the ball
var P = {};

// ==================================================================== the plan
Object.assign(P, {
  IVB_plan: { act: "IV", title: "Le plan de l'île des Changeurs", place: "salveze", hub: true, backName: "la table du plan",
    text: [
      { first: true, text: "Tu as payé trois ducats à un arpenteur sans travail le plan de l'île des Changeurs, et tu l'as étalé sur la table, entre une chandelle de suif et une miche entamée. Une feuille de cadastre, propre, à l'encre brune. Au milieu de l'île, un rectangle plus épais que les autres : la Banque Marrel. Quatre étages au-dessus du sol, deux au-dessous, et sous les deux, une ligne pointillée que l'arpenteur a tracée sans la nommer. Le vieux palais de la reine. La cinquième cache dort là-dessous." },
      { first: true, text: "À gauche de la Banque, collée à elle, la Monnaie de la République, où l'on frappe les ducats. Au-dessous de l'île, les égouts de la reine, qui datent d'avant les marchands et passent sous tout. Sur le quai, l'hôtel particulier de Corisande Marrel, où l'on donne un bal dans quatre jours pour la Saint-Joseph. Et dans la Banque, quarante commis, dont au moins un doit de l'argent à quelqu'un. Tu poses un doigt sur chacun des quatre endroits, l'un après l'autre." },
      { first: true, if: { all: [{ has: "mandat" }, { not: { has: "mandat:leve" } }] }, text: "Ton signalement est cloué au pont des Changeurs, sous les armes de la République. On t'y décrit assez mal pour que tu passes de jour, la capuche basse. Assez bien pour que tu évites de t'y attarder." },
      { first: true, with: "lison", text: "Lison pose sa gaffe contre le mur et met l'index sur les égouts, sans hésiter. « Je connais ces voûtes. L'eau monte à la marée, et on y trouve des choses qui mordent. Pour le reste, c'est le chemin le plus court entre deux points, comme dit ma grand-mère quand elle parle de la mort. »" },
      { first: true, with: "fauvette", text: "Fauvette tourne autour de la table, sans s'asseoir. Elle regarde le bal. « Quatre cents invités, des escaliers de service, des valets qui changent tous les soirs. Les riches sont faciles à voler quand ils dansent. Ils ont les mains prises. »" },
      { first: true, with: "tibere", text: "Tibère tapote le rectangle de la Banque avec un ongle noir. « Les gardes du bas sont d'anciens hommes à moi. Payés double, nourris, et pas un qui sache lire. » Il garde le doigt là un moment de plus que nécessaire." },
      { first: true, with: "gildas", text: "Frère Gildas suit la ligne pointillée du palais, sans la toucher. « Les Taiseurs ont bâti sous les marchands, et les marchands ont bâti par-dessus sans savoir. » Il retire la main et la cache dans sa manche." },
      { first: true, with: "salome", text: "Salomé tourne le dos au plan. Elle regarde la fenêtre, d'où l'on voit, au-dessus des toits, le pignon blanc de la Banque. « Lothaire Brunel a son cabinet là-dedans, dit-elle. C'est tout ce que j'ai besoin de savoir. »" },
      { again: true, before: "banque:ouverte", text: "Le plan de l'île est toujours sur la table, piqué de quatre épingles. La chandelle a coulé dessus, à l'endroit de la Monnaie, une goutte de suif que personne n'a grattée." },
      { again: true, after: "banque:ouverte", text: "Le plan de l'île est roulé dans un coin, taché, inutile. Tu l'as regardé si longtemps que tu en connais chaque trait de plume, et tu n'as plus besoin de lui." },
    ],
    choices: [
      { label: "Aller voir la Banque de près, depuis le quai des Changeurs", hide: { any: [{ seen: "IVB_ile" }, { has: "ivb:dedans" }] }, to: "IVB_ile" },
      { label: "Entrer par les égouts de la reine", big: true, hide: { has: "ivb:dedans" }, fx: { flag: "ivb:plan_egouts" }, to: "IVB_eg_depart" },
      { label: "Entrer par la Monnaie, qui partage un mur avec la Banque", big: true, hide: { has: "ivb:dedans" }, fx: { flag: "ivb:plan_monnaie" }, to: "IVB_mo_atelier" },
      { label: "Entrer par la grande porte, au bal de Corisande Marrel", big: true, hide: { has: "ivb:dedans" }, fx: { flag: "ivb:plan_bal" }, to: "IVB_bal_invit" },
      { label: "Entrer avec la clé d'un commis qui a besoin d'argent", big: true, hide: { has: "ivb:dedans" }, fx: { flag: "ivb:plan_commis" }, to: "IVB_cm_commis" },
      { label: "L'atelier de couture de la rue des Dames", hide: { seen: "IVB_ro_atelier" }, to: "IVB_ro_atelier" },
      { label: "La femme qui attend devant la Banque depuis trois jours", hide: { seen: "IVB_ag_ursule" }, to: "IVB_ag_ursule" },
      { label: "Rendre à Rosalie ce que tu as pris pour elle", hide: { any: [{ not: { item: "ivb_acte_rosalie" } }, { quest: "IVB_rosalie" }] }, to: "IVB_ro_rendre" },
      { back: HUB },
    ] },

  IVB_ile: { act: "IV", title: "Le quai des Changeurs", place: "changeurs", takes: 2,
    text: [
      "Le quai des Changeurs est presque vide, couvre-feu oblige. Deux changeurs ont gardé leurs tables ouvertes sous les arcades, avec des balances de cuivre et un garde chacun. Tu achètes un cornet de châtaignes grillées et tu t'adosses au parapet, en face de la Banque Marrel, comme quelqu'un qui flâne au bord de l'eau.",
      "L'hôtel est de pierre blanche, lisse, sans une sculpture, avec des fenêtres hautes grillées de fer jusqu'au deuxième étage. La base des murs, au ras de l'eau, {{pie#ivb_ile_base|est du même blanc que le reste, simplement plus sale|est d'une autre pierre, grise et plus dure, montée sans mortier : les fondations du palais de la reine, sur lesquelles les marchands ont posé leur maison}}. Une grille de fer ferme une arche basse, à fleur d'eau, d'où sort un filet d'eau noire : la bouche d'un égout.",
      "Au-dessus de la porte, une plaque de bronze. *Maison Marrel. {{loupe#ivb_ile_plaque|Fidélité, prudence, patience|Bâtie sur la pierre de la Muette, l'an premier de la République. Qui creuse plus bas creuse sa tombe}}.*",
      "Deux gardes en manteau noir à boutons d'or font les cent pas devant l'entrée. L'un dit à l'autre, assez fort pour la rue : « On relève à {{oreille#ivb_releve|minuit, comme toujours, et le sergent fait la ronde du bas|la troisième heure, et la ronde du bas dort une heure avant, dans la salle des dépôts, sur les coffres}}. » L'autre rit et souffle dans ses mains.",
      { with: "tibere", text: "Tibère a reconnu le garde qui rit. Il tourne le dos au quai et rabat son chapeau. « Hugues Pérachon, dit-il bas. Je l'ai fait entrer au Guet. Il me doit sa place, et il le sait. »" },
      { with: "lison", text: "Lison regarde l'arche de l'égout et compte les marches d'eau sur la pierre. « Marée haute à la deuxième heure, cette semaine. Il faudra passer avant, ou après. Pendant, on se noie. »" },
      "Au deuxième étage, une seule fenêtre est éclairée. Derrière la grille, une silhouette d'homme passe et repasse, les mains derrière le dos. Il porte des gants gris.",
    ],
    choices: [{ back: "IVB_plan" }] },
});

// ==================================================================== the Queen's sewers
Object.assign(P, {
  IVB_eg_depart: { act: "IV", title: "Les égouts de la reine", place: "changeurs", takes: "night",
    text: [
      "Une heure avant minuit, dans une ruelle derrière la halle aux poissons, une plaque de fonte se soulève sur un trou rond. Une odeur monte, d'eau croupie, de vase et de vieux sel. Des barreaux de fer scellés dans la paroi descendent dans le noir.",
      "Les égouts de la reine ont trois cents ans. Les marchands ont bâti la ville dessus, et ils y ont jeté leurs eaux sales, sans jamais y descendre. Les égoutiers disent que les voûtes sont plus hautes qu'une église, que les galeries vont jusqu'à la mer, et qu'il y a dessous des salles où l'on entend parler des gens morts. Les égoutiers boivent beaucoup.",
      { with: "lison", text: "Lison descend la première, sans lumière, comme on descend un escalier de chez soi. Sa voix remonte, déjà lointaine. « Pose les pieds où je les pose, et ne touche pas l'eau avec les mains. Il y a des choses dedans. »" },
      { with: "fauvette", without: "lison", text: "Fauvette s'est noué un foulard sur le nez. « Les gamins des Gouttières descendent là-dedans pour échapper au Guet, dit-elle. Ceux qui connaissent le chemin remontent. » Elle te regarde. « Je connais le chemin jusqu'à l'île. Après, on verra. »" },
      { without: ["lison", "fauvette"], text: "Tu descends en tête, avec ta lanterne. Au fond, le bruit de l'eau, qui coule dans plusieurs directions à la fois." },
      { if: { has: "iv:egouts" }, text: "L'odeur, tu la connais : tu es entré{e} en ville par ces voûtes, sous le moulin de la Ferronnerie. Tes pieds se souviennent des marches avant toi." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison lit les eaux de la reine" },
        win: { fx: { ep: ["perso", 1500], conf: { lison: 5 } }, to: "IVB_eg_galerie" }, lose: { to: "IVB_eg_rats" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette prend le chemin des gamins" },
        win: { fx: { ep: ["perso", 1500], conf: { fauvette: 5 } }, to: "IVB_eg_galerie" }, lose: { to: "IVB_eg_rats" } },
      { label: "Payer un égoutier pour qu'il te trace le chemin à la craie", if: { gold: { min: 60 } }, why: "Il faut trois ducats.", fx: { gold: -60 }, to: "IVB_eg_galerie" },
      { label: "Chercher toi-même le courant qui va vers l'île", test: { dom: "nature", diff: -10, label: "S'orienter sous la ville", help: [{ if: { item: "lanterne" }, v: 10 }, { if: { arch: "rodeur" }, v: 10 }, { if: { has: "iv:egouts" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "IVB_eg_galerie" }, lose: { to: "IVB_eg_rats" } },
    ] },

  IVB_eg_rats: { act: "IV", title: "Le nid", place: "changeurs",
    text: [
      "Tu as pris une galerie de trop. Elle descend, se rétrécit, et finit dans une salle ronde où les eaux de trois quartiers se rejoignent dans un bassin. Sur les bords du bassin, une masse grise bouge : des rats gros comme des chats, des dizaines, sur un nid de paille pourrie, d'os et de chiffons.",
      "Ils lèvent tous la tête en même temps. Les plus gros descendent du nid, sans se presser, et viennent se placer entre toi et la galerie d'où tu viens.",
      { with: "lison", text: "Lison fait tourner sa gaffe et place le fer devant elle. « Ne recule pas. Ils attaquent les dos. »" },
      { with: "tibere", text: "Tibère a sorti sa masse. « Au Guet, on les comptait par centaines, l'été. Ils sont toujours revenus. »" },
    ],
    choices: [
      { label: "Les affronter", fight: { title: "Le nid des égouts", enemies: [{ id: "ivb_rat", n: 4 }], terrain: "souterrain",
        win: { fx: { ep: ["perso", 1500] }, to: "IVB_eg_vanne" }, lose: { fx: { pv: -4 }, to: "IVB_eg_vanne" },
        flee: { label: "Reculer jusqu'à la galerie haute", dom: "discretion", diff: -10, to: "IVB_eg_vanne" } } },
      { label: "Jeter ta lanterne allumée sur la paille du nid", if: { item: "lanterne" }, why: "Il te faudrait une lanterne.", fx: { drop: "lanterne", ep: ["perso", 1000] }, to: "IVB_eg_vanne" },
      { label: "Lancer à manger loin derrière eux, et passer pendant qu'ils se battent", if: { food: { min: 1 } }, why: "Tu n'as rien à leur lancer.", fx: { food: -1, ep: ["perso", 800] }, to: "IVB_eg_vanne" },
    ] },

  IVB_eg_galerie: { act: "IV", title: "La grande galerie", place: "changeurs",
    text: [
      "La galerie s'élargit d'un coup, et la lanterne ne trouve plus la voûte. Tu marches sur un trottoir de pierre, large comme une rue, le long d'un canal d'eau noire qui coule lentement vers l'île. Les pierres {{pie#ivb_eg_pierres|sont noires, grasses, sans âge|sont taillées à l'équerre et marquées chacune d'un petit signe de tâcheron : un croissant, le même partout, celui des Taiseurs}}.",
      "Tous les cinquante pas, une niche dans la paroi, avec un banc de pierre. On a fait ces égouts pour que des gens y marchent et s'y reposent. Dans l'une des niches, quelqu'un a laissé une bouteille vide et un bout de corde neuve.",
      "L'endroit {{echo#ivb_eg_contre|résonne de l'eau qui coule, et de rien d'autre|résonne d'une voix d'homme, enrouée, d'il y a quelques nuits : « Le troisième barreau de la grille de la Banque, je l'ai scié à l'hiver. Il tient avec de la cire noire. Tu tires, il vient. »}}.",
      { with: "lison", text: "Lison s'arrête devant une niche et passe la main sur le banc. « Ma grand-mère dit que la reine est sortie par ici, la nuit des Comptoirs. Qu'on l'a rattrapée plus loin. » Elle reprend la marche sans attendre de réponse." },
      { with: "fauvette", text: "Fauvette ramasse la bouteille vide, la renifle et la repose. « Des contrebandiers. Ils passent le sel de la Saline sous l'île sans payer la gabelle. Ils doivent avoir une porte, quelque part. »" },
    ],
    choices: [
      { label: "Suivre l'odeur de tabac vers une niche éclairée", hide: { seen: "IVB_eg_contrebandiers" }, to: "IVB_eg_contrebandiers" },
      { label: "Suivre le canal vers l'île", to: "IVB_eg_vanne" },
    ] },

  IVB_eg_vanne: { act: "IV", title: "La vanne", place: "changeurs", urgent: 30,
    text: [
      { outcome: "lose", text: "Tu sors du nid avec des morsures aux mollets, qui saignent et qui brûlent." },
      "La galerie finit sur une vanne. Une porte de chêne ferré, haute de deux hommes, coulisse dans des rainures de pierre ; une grande roue de fer la manœuvre, avec une chaîne et un contrepoids. Elle est fermée. Derrière, l'île. Devant, sous tes pieds, l'eau commence à monter.",
      "La marée entre dans la Salve. Tu l'entends arriver : un grondement qui vient des galeries basses, et l'eau du canal qui change de sens et vient lécher le trottoir. Dans un moment, elle couvrira la galerie jusqu'à la voûte.",
      "Le contrepoids pend dans un puits, au bout de sa chaîne. C'est un bloc de {{pie#ivb_eg_contrepoids|fonte, massif, trop lourd pour un homme|bois peint en noir, creux, et la chaîne est fixée à un crochet qu'une main peut décrocher : il suffit de le libérer pour que la vanne remonte seule}}.",
      { with: "lison", text: "Lison regarde l'eau monter, puis la roue. « Il y a un tour de main, dit-elle. Les éclusiers des marais le font sans y penser. Laisse-moi la roue. »" },
    ],
    choices: [
      { label: "Décrocher le faux contrepoids", hide: { not: { voile: "ivb_eg_contrepoids" } }, fx: { ep: ["perso", 1500] }, to: "IVB_eg_grille" },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison et la roue de l'éclusier" },
        win: { fx: { conf: { lison: 5 }, ep: ["perso", 1200] }, to: "IVB_eg_grille" }, lose: { to: "IVB_eg_emporte" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "combat", diff: 0, label: "Tibère pèse sur la roue" },
        win: { fx: { conf: { tibere: 5 }, ep: ["perso", 1200] }, to: "IVB_eg_grille" }, lose: { to: "IVB_eg_emporte" } },
      { label: "Tourner la roue de toutes tes forces", test: { dom: "combat", diff: -10, label: "Lever une vanne contre la marée" },
        win: { fx: { ep: ["perso", 1000] }, to: "IVB_eg_grille" }, lose: { to: "IVB_eg_emporte" } },
      { label: "Grimper par le puits du contrepoids", test: { dom: "discretion", diff: -10, label: "Monter par une chaîne mouillée", help: [{ if: { item: "corde" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "IVB_eg_grille" }, lose: { to: "IVB_eg_emporte" } },
      { label: "Hésiter encore", timeout: true, to: "IVB_eg_emporte" },
    ] },

  IVB_eg_emporte: { act: "IV", title: "La citerne", place: "changeurs",
    text: [
      "L'eau te prend aux genoux, puis à la taille, puis t'arrache au trottoir. Tu roules dans le noir, tu bois, tu heurtes une pierre de l'épaule, et le courant te pousse sous la vanne, par une fente que tu n'avais pas vue, dans une eau plus calme. Tu remontes à la surface en crachant.",
      "Une citerne. Des piliers de brique, une voûte basse, et sur un côté un escalier qui sort de l'eau vers une porte éclairée. La lanterne a disparu. Quelqu'un tient une torche en haut de l'escalier, et quelqu'un d'autre une arbalète.",
      "« Encore un contrebandier, dit la voix de la torche. Sors de là, et lentement. La Banque aime les gens qui sortent lentement. »",
      { with: "any", text: "Tes compagnons sont sortis de l'eau avant toi, plus loin, derrière un pilier. Tu les vois dans l'ombre. Les gardes n'ont d'yeux que pour toi." },
    ],
    choices: [
      { label: "Sortir de l'eau, les mains ouvertes", fx: { flag: ["ivb:dedans", "ivb:prison"], pv: -3 }, to: "IVB_pr_cellule" },
      { label: "Plonger, et chercher sous l'eau un autre passage", test: { dom: "nature", diff: -20, label: "Nager sous les piliers" },
        win: { fx: { pv: -3, ep: ["perso", 1500] }, to: "IVB_eg_murs" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"], pv: -5 }, to: "IVB_pr_cellule" } },
      { label: "Charger l'escalier", fight: { title: "La citerne", enemies: [{ id: "ivb_garde", n: 2 }],
        win: { fx: { flag: ["ivb:dedans", "ivb:alerte"], ep: ["perso", 2000] }, to: "IVB_sous" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" } } },
    ] },

  IVB_eg_grille: { act: "IV", title: "La grille de la Banque", place: "changeurs",
    text: [
      "Au-delà de la vanne, la galerie monte doucement et l'eau reste en bas. Une grille ferme le passage : des barreaux neufs, gros comme le poignet, scellés au plomb dans la vieille pierre, avec une porte au milieu fermée d'un cadenas de laiton. Au-dessus, gravé au burin dans un linteau tout neuf : *Banque Marrel. Défense d'entrer.*",
      "Le cadenas {{pie#ivb_eg_cadenas|est un beau cadenas de laiton à secret, de ceux qu'on paie cher|est une pièce de vitrine : le laiton est épais, la serrure dedans est une serrure de coffre à linge, à deux gorges}}. Derrière la grille, la galerie continue et devient un couloir de pierre sèche.",
      { with: "fauvette", text: "Fauvette mesure l'écart des barreaux avec sa main, puis avec sa tête. Elle sourit. « Moi, je passe. Toi, je ne sais pas. »" },
    ],
    choices: [
      { label: "Tirer le troisième barreau", hide: { not: { voile: "ivb_eg_contre" } }, fx: { ep: ["perso", 1500] }, to: "IVB_eg_murs" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette passe entre les barreaux" },
        win: { fx: { conf: { fauvette: 5 }, ep: ["perso", 1200] }, to: "IVB_eg_murs" }, lose: { fx: { pv: -2 }, to: "IVB_eg_murs" } },
      { label: "Crocheter le cadenas", test: { dom: "discretion", diff: -10, label: "Ouvrir un cadenas de laiton", help: [{ if: { item: "crochets" }, v: 15 }, { if: { voile: "ivb_eg_cadenas" }, v: 20 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "IVB_eg_murs" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_eg_murs" } },
      { label: "Desceller un barreau de force, à coups de pierre", test: { dom: "combat", diff: -10, label: "Arracher un barreau au plomb" },
        win: { fx: { flag: "ivb:alerte", ep: ["perso", 1000] }, to: "IVB_eg_murs" }, lose: { fx: { pv: -3, flag: "ivb:alerte" }, to: "IVB_eg_murs" } },
    ] },

  IVB_eg_murs: { act: "IV", title: "Le mur du palais", place: "changeurs",
    text: [
      { outcome: "lose", text: "Tu passes, mais le fer a crié contre la pierre, longtemps. Quelque part au-dessus, une porte s'ouvre et se referme." },
      "Le couloir de la Banque est fait de pierre sèche et de poutres neuves. À main gauche, un escalier de bois monte vers une lumière : les caves de la Banque, les chambres fortes. À main droite, le couloir s'arrête contre un mur plus ancien, que les maçons de la Banque ont laissé tel quel parce qu'il portait tout le reste.",
      "Ce mur {{pie#ivb_eg_porte_muree|est une maçonnerie grossière, sans ouverture|cache une porte murée : une arche de pierre grise, bouchée de briques plus jeunes, dont le mortier s'effrite déjà sous l'ongle}}. Au pied du mur, l'eau suinte et s'en va par une rigole vers le bas, vers un endroit plus profond que le couloir.",
      { with: "gildas", text: "Frère Gildas pose la paume à plat sur la vieille pierre et reste ainsi un moment, les yeux fermés. « C'est le palais, dit-il. Le dessous du palais. » Sa main tremble un peu quand il la retire." },
    ],
    choices: [
      { label: "Défaire les briques de la porte murée, et descendre", hide: { not: { voile: "ivb_eg_porte_muree" } }, fx: { flag: "ivb:dedans", ep: ["perso", 1500] }, to: "IVB_crypte" },
      { label: "Monter l'escalier de bois vers les caves de la Banque", fx: { flag: "ivb:dedans" }, to: "IVB_sous" },
    ] },
});

// ==================================================================== the Mint next door
Object.assign(P, {
  IVB_mo_atelier: { act: "IV", title: "La cave du graveur", place: "changeurs",
    text: [
      "Euphrasie Rigaud a gravé pendant vingt ans les coins de la Monnaie de la République, les poinçons d'acier qui frappent les ducats. On l'a renvoyé l'an dernier pour avoir gravé, dans son temps libre, des coins un peu trop semblables aux vrais. On l'a laissé vivre : il savait trop de choses sur les ducats de la République. Il vit maintenant dans la cave d'une teinturerie, sur le quai des Teinturiers, juste en face de la Monnaie, de l'autre côté du bras d'eau.",
      "La cave sent l'alun, l'urine de teinturier et le métal chaud. Un petit creuset rougeoie sur un réchaud de braise. Rigaud est un homme maigre, aux yeux rouges, avec une loupe de bijoutier vissée dans l'orbite gauche, qu'il garde pour te regarder. Ses doigts sont tachés de noir jusqu'à la deuxième phalange.",
      "« Le mur ? dit-il quand tu as fini. Oui, il y a un mur. La fonderie de la Monnaie est adossée à la Banque depuis toujours. Les Marrel ont fait leurs caves contre nos fourneaux, pour la chaleur. » Il sourit avec la moitié de la bouche. « Je {{oreille#ivb_rigaud|travaille seul, et je ne parle à personne de ce que je fais|vends à Lothaire Brunel tout ce qu'on me dit dans cette cave, deux ducats la nouvelle, et toi tu vaux bien dix}}. Vous voulez passer par la Monnaie : il vous faut quelqu'un qui connaît la Monnaie. »",
      { with: "tibere", text: "Tibère s'est assis sur un tonneau, près de l'escalier, les yeux fixés sur Rigaud. « Je l'ai arrêté deux fois, dit-il. Il a toujours eu de bons amis. »" },
      { if: { has: "metier:lire" }, text: "Sur l'établi, sous un chiffon, des feuilles de papier timbré aux armes de la République, à moitié remplies d'une écriture de notaire. Rigaud fabrique aussi des actes." },
    ],
    choices: [
      { label: "Parler de son prix", to: "IVB_mo_marche" },
      { back: "IVB_plan" },
    ] },

  IVB_mo_marche: { act: "IV", title: "Le prix de Rigaud", place: "changeurs",
    text: [
      "Rigaud retire le creuset du feu avec une pince et verse un filet de métal clair dans un moule de sable. « Vingt ducats, dit-il sans lever les yeux. Pour la nuit, la clé de la petite porte de la fonderie, et l'endroit du mur. Dix maintenant, dix après. »",
      "Le moule fume. Rigaud le tapote avec la pince. « Et je vous accompagne jusqu'au mur. Il y a un veilleur, dans la cour. Il me connaît. »",
      { after: "voile:ivb_rigaud", text: "Tu le regardes travailler. Ses mains sont calmes ; le reste de lui guette l'escalier." },
    ],
    choices: [
      { label: "Lui dire que tu sais ce que Lothaire Brunel lui paie la nouvelle", hide: { not: { voile: "ivb_rigaud" } }, fx: { flag: "ivb:rigaud_tenu", ep: ["perso", 1500] }, to: "IVB_mo_tenu" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère rappelle à Rigaud ses deux arrestations" },
        win: { fx: { flag: "ivb:rigaud_tenu", conf: { tibere: 5 }, ep: ["perso", 1200] }, to: "IVB_mo_tenu" }, lose: { fx: { gold: -400 }, to: "IVB_mo_nuit" } },
      { label: "Payer vingt ducats", if: { gold: { min: 400 } }, why: "Il te faut vingt ducats.", fx: { gold: -400 }, to: "IVB_mo_nuit" },
      { label: "Lui promettre le double, une fois la Banque ouverte", test: { dom: "social", diff: -10, label: "Faire crédit à un faussaire", help: [{ if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IVB_mo_nuit" }, lose: { fx: { gold: -400 }, to: "IVB_mo_nuit" } },
    ] },

  IVB_mo_tenu: { act: "IV", title: "Un graveur tenu", place: "changeurs",
    text: [
      "Rigaud repose la pince très doucement sur l'établi. Il retire enfin sa loupe de l'orbite, l'essuie sur sa chemise, la remet. Le moule refroidit entre vous deux, et le métal y passe du rouge au gris.",
      "« Brunel paie pour savoir, dit-il. Il ne paie pas pour qu'on lui obéisse. » Il fouille dans un pot de grès, en sort une clé de fer noircie et la pose devant toi. « La petite porte de la fonderie. Le veilleur dort dans la loge à partir de minuit, il boit. Le mur, c'est le fond du grand fourneau, à gauche, là où la brique a noirci en forme de main. » Il hésite. « Je ne viendrai pas. Brunel saurait que j'y étais, rien qu'à me regarder demain. »",
      "Tu prends la clé. Elle est encore tiède du pot, posé trop près du réchaud.",
    ],
    choices: [
      { label: "Traverser le bras d'eau jusqu'à la Monnaie, à minuit", big: true, takes: "night", to: "IVB_mo_nuit" },
    ] },

  IVB_mo_nuit: { act: "IV", title: "La cour de la Monnaie", place: "changeurs", takes: "night",
    text: [
      "La Monnaie de la République est une cour carrée, fermée de hauts murs, avec des bâtiments bas tout autour : la fonderie, la salle des balanciers, la salle des pesées, le trésor. La nuit, tout y est éteint sauf une lanterne au-dessus de la loge du veilleur. L'air sent encore la braise et le métal.",
      { if: { has: "ivb:rigaud_tenu" }, text: "La clé de Rigaud tourne dans la petite porte avec un bruit gras. Personne ne t'attend de l'autre côté." },
      { if: { not: { has: "ivb:rigaud_tenu" } }, text: "Rigaud t'attend devant la petite porte, sa clé à la main. Il ouvre, s'efface, te fait signe de passer. Il reste un pas derrière toi." },
      "Dans la salle des pesées, sous une fenêtre, des piles de ducats neufs attendent dans des plateaux de bois, rangées par cent. Les pièces {{pie#ivb_mo_ducats|brillent d'un or jaune et franc, de la frappe de l'année|sont d'un or pâle, coupé d'un quart de cuivre : la République paie ses dettes en fausse monnaie, et sa propre Monnaie la frappe}}.",
      { with: "fauvette", text: "Fauvette passe la main au-dessus des plateaux, sans les toucher, comme au-dessus d'un feu. Puis elle met les mains dans ses poches. « Pas ce soir », dit-elle à personne." },
    ],
    choices: [
      { label: "Suivre Rigaud vers la fonderie", hide: { has: "ivb:rigaud_tenu" }, to: "IVB_mo_trahi" },
      { label: "Traverser la cour jusqu'à la fonderie", hide: { not: { has: "ivb:rigaud_tenu" } }, to: "IVB_mo_garde" },
      { label: "Prendre une poignée de ducats dans les plateaux", once: true, fx: { gold: 200, mark: 1, ep: ["perso", 200] }, to: "IVB_mo_nuit" },
    ] },

  IVB_mo_garde: { act: "IV", title: "Le veilleur de la Monnaie", place: "changeurs",
    text: [
      "La loge du veilleur est une cabane de planches contre le mur de la fonderie. La porte est ouverte. Un vieil homme y est assis sur un tabouret, une couverture sur les genoux, une pique appuyée à l'épaule. Il est bien éveillé : il te regarde traverser la cour depuis le début.",
      "« La fonderie est fermée, dit-il sans se lever. La République ne frappe plus la nuit. Elle frappe {{oreille#ivb_veilleur|le jour, comme il se doit, devant les contrôleurs|le jour, avec moins d'or chaque mois, et moi je suis payé en ducats de cuivre comme tout le monde}}. » Il pose la main sur sa pique, pas plus.",
      { with: "tibere", text: "Tibère s'avance dans la lumière de la lanterne, chapeau bas. Le vieil homme le reconnaît, et ses épaules s'abaissent un peu." },
    ],
    choices: [
      { label: "Lui parler de ses ducats de cuivre, et de qui les lui donne", hide: { not: { voile: "ivb_veilleur" } }, fx: { ep: ["perso", 1500], fac: { banque: -3 } }, to: "IVB_mo_mur" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère et un vieux veilleur" },
        win: { fx: { conf: { tibere: 3 }, ep: ["perso", 1200] }, to: "IVB_mo_mur" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_mo_mur" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette passe derrière la loge" },
        win: { fx: { conf: { fauvette: 3 }, ep: ["perso", 1200] }, to: "IVB_mo_mur" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_mo_mur" } },
      { label: "Lui glisser cinq ducats sur la couverture", if: { gold: { min: 100 } }, why: "Il te faut cinq ducats.", fx: { gold: -100 }, to: "IVB_mo_mur" },
      { label: "Le désarmer, vite, sans lui faire mal", test: { dom: "combat", diff: 0, label: "Prendre la pique d'un vieil homme" },
        win: { fx: { ep: ["perso", 1000] }, to: "IVB_mo_mur" }, lose: { fx: { flag: "ivb:alerte", pv: -3 }, to: "IVB_mo_mur" } },
    ] },

  IVB_mo_trahi: { act: "IV", title: "La fonderie", place: "changeurs",
    text: [
      "La fonderie est longue et basse, voûtée de brique, avec trois grands fourneaux éteints au fond. Rigaud entre derrière toi et referme la porte. Puis il recule, et il recule encore, jusqu'à l'angle de la pièce où une lanterne s'allume.",
      "Quatre gardes en manteau noir à boutons d'or. Et derrière eux, appuyé au fourneau du milieu, Lothaire Brunel, les gants gris croisés sur le pommeau de sa canne. Il te regarde avec un intérêt poli.",
      "« Vous pensez : le graveur m'a vendu{e}, dit-il doucement. C'est exact. Vous pensez aussi au mur du fourneau de gauche. » Il sourit. « Vous pensez fort, pour quelqu'un qui porte un cornet. »",
      { with: "any", text: "Tes compagnons se sont mis de part et d'autre de toi." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "La fonderie de la Monnaie", enemies: [{ id: "ivb_garde", n: 3 }],
        win: { fx: { flag: ["ivb:alerte", "ivb:lothaire_vu"], ep: ["perso", 2500] }, to: "IVB_mo_mur" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" },
        flee: { label: "Te jeter derrière le fourneau de gauche", dom: "discretion", diff: -10, to: "IVB_mo_mur" } } },
      { label: "Te rendre, et garder tes forces pour plus tard", fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "combat", diff: 0, label: "La gaffe de Lison décroche la lanterne" },
        win: { fx: { flag: "ivb:alerte", conf: { lison: 5 } }, to: "IVB_mo_mur" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" } },
    ] },

  IVB_mo_mur: { act: "IV", title: "Le mur mitoyen", place: "changeurs",
    text: [
      { outcome: ["win", "flee"], text: "Derrière toi, dans la fonderie, des cris, une lanterne renversée, et le bruit de bottes qui courent. Tu as peu de temps." },
      "Le fond du grand fourneau de gauche est un mur de brique noircie, chaud encore au toucher. À hauteur d'homme, la suie dessine sur la brique une tache en forme de main ouverte. Ce mur {{pie#ivb_mo_conduit|est épais de quatre pieds, plein, solide|sonne creux sous la main noire : c'est la brique d'un vieux conduit de cheminée du palais, qu'on a bouché et qui descend tout droit sous la Banque}}.",
      "Rigaud parlait d'un mur. Il y a en effet un mur, et derrière le mur, la Banque. La brique, au milieu de la main noire, s'effrite un peu sous l'ongle.",
      { with: "gildas", text: "Frère Gildas frotte la suie du pouce et découvre, sous la tache, un petit croissant gravé dans une brique plus ancienne que les autres. Il le montre en silence." },
    ],
    choices: [
      { label: "Ouvrir le vieux conduit et t'y laisser glisser", hide: { not: { voile: "ivb_mo_conduit" } }, fx: { flag: "ivb:dedans", ep: ["perso", 1500] }, to: "IVB_mo_percee" },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "savoir", diff: 0, label: "Gildas suit les croissants dans la brique" },
        win: { fx: { flag: "ivb:dedans", ep: ["perso", 1200] }, to: "IVB_mo_percee" }, lose: { fx: { flag: ["ivb:dedans", "ivb:alerte"] }, to: "IVB_mo_percee" } },
      { label: "Défoncer la brique au milieu de la main noire", test: { dom: "combat", diff: -10, label: "Percer un mur de fourneau" },
        win: { fx: { flag: ["ivb:dedans", "ivb:alerte"], ep: ["perso", 1000] }, to: "IVB_mo_percee" }, lose: { fx: { flag: ["ivb:dedans", "ivb:alerte"], pv: -3 }, to: "IVB_mo_percee" } },
      { label: "Desceller les briques une à une, au couteau", test: { dom: "discretion", diff: -10, label: "Ouvrir un mur sans bruit", help: [{ if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { flag: "ivb:dedans", ep: ["perso", 1200] }, to: "IVB_mo_percee" }, lose: { fx: { flag: ["ivb:dedans", "ivb:alerte"] }, to: "IVB_mo_percee" } },
    ] },

  IVB_mo_percee: { act: "IV", title: "Le conduit", place: "changeurs",
    text: [
      "Le conduit est étroit, tapissé d'une suie froide qui colle aux mains et au visage. Tu descends en appui sur les coudes et les genoux, dans le noir, pendant un temps long. La brique devient pierre. La pierre devient plus froide.",
      "En bas, le conduit se divise. Une branche remonte un peu, vers une lumière jaune et un bruit de voix : les caves de la Banque. L'autre descend encore, raide, vers une odeur de pierre mouillée et un silence très ancien.",
      { if: { has: "ivb:alerte" }, text: "Au-dessus de toi, dans la Monnaie, on crie ton signalement. Les cloches de l'île restent muettes, pour l'instant." },
    ],
    choices: [
      { label: "Prendre la branche qui monte vers la lumière jaune et les voix", to: "IVB_sous" },
      { label: "Descendre vers le silence", to: "IVB_crypte" },
    ] },
});

// ==================================================================== Corisande's ball
Object.assign(P, {
  IVB_bal_invit: { act: "IV", title: "Le carton d'invitation", place: "salveze",
    text: [
      "Le bal de la Saint-Joseph chez Corisande Marrel est un bal masqué. C'est une tradition de la maison depuis deux siècles : une nuit par an, les grandes familles de Salvèze dansent sans visage dans l'hôtel de la Banque, et l'on dit que les mariages de l'année s'y décident, et les faillites aussi. Cette année, avec le couvre-feu, la disette et le duc aux portes, on a cru que Corisande annulerait. Elle a doublé les musiciens.",
      "Il faut un carton. Tu en as vu un, chez un brocanteur du quai qui l'avait reçu en gage d'un fils de famille : un rectangle de vélin crème, bordé d'or, scellé de cire noire. *La maison Marrel prie {{loupe#ivb_carton|Monsieur le fils Vernier et sa compagnie|le porteur de montrer ce carton par le coin gauche, le pouce sur la cire. Les cartons tenus autrement sont faux}} de lui faire l'honneur de sa présence.*",
      { with: "fauvette", text: "Fauvette retourne le carton entre ses doigts. « Quatre cents comme ça, distribués hier par des valets. Il y en a bien un qui traîne dans une poche mal cousue. »" },
      { with: "tibere", text: "Tibère se gratte la moustache. « La Banque engage des extras pour servir, les soirs de bal. Des anciens du Guet, souvent. Ça paie trois liards, et on mange les restes. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette fait les poches d'un invité" },
        win: { fx: { flag: "ivb:carton", conf: { fauvette: 5 }, ep: ["perso", 1200] }, to: "IVB_bal_habit" }, lose: { fx: { flag: "ivb:carton" }, to: "IVB_bal_habit" } },
      { label: "Te faire engager comme valet de la soirée", test: { dom: "social", diff: 0, label: "Se faire embaucher pour servir", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { flag: "ivb:valet", ep: ["perso", 1000] }, to: "IVB_bal_porte" }, lose: { to: "IVB_bal_habit" } },
      { label: "Racheter au brocanteur le carton du fils Vernier", if: { gold: { min: 200 } }, why: "Il en veut dix ducats.", fx: { gold: -200, flag: "ivb:carton" }, to: "IVB_bal_habit" },
      { label: "Copier le carton, cire et dorure comprises", test: { dom: "savoir", diff: -10, label: "Contrefaire un carton de la Banque", help: [{ if: { has: "metier:lire" }, v: 10 }, { if: { voile: "ivb_carton" }, v: 15 }] },
        win: { fx: { flag: "ivb:carton", ep: ["perso", 1200] }, to: "IVB_bal_habit" }, lose: { fx: { flag: "ivb:carton_faux" }, to: "IVB_bal_habit" } },
      { back: "IVB_plan" },
    ] },

  IVB_bal_habit: { act: "IV", title: "Le costume", place: "salveze",
    text: [
      "Un masque se trouve chez n'importe quel cartier. Un habit de bal, en trois jours, se trouve rue des Dames, chez maîtresse Brigitte Lesueur, qui habille la moitié des Changeurs et prête l'autre moitié à la journée, quand les Changeurs ont des revers.",
      "L'atelier est une longue pièce sous les toits, encombrée de mannequins de son, de rouleaux de drap, de rubans pendus à des clous. Une apprentie de seize ans, rousse, la bouche pleine d'épingles, prend tes mesures en silence. Maîtresse Lesueur choisit pour toi un habit de velours sombre, déjà porté, qu'il faudra reprendre aux épaules.",
      "« Il a appartenu {{oreille#ivb_lesueur|à un monsieur qui est parti en voyage|à un Fourcaud qui l'a laissé en gage chez moi avant de se jeter dans la Salve, en janvier}}, dit-elle. Il porte bonheur. »",
      { with: "tibere", text: "Tibère est resté sur le palier. Il regarde l'apprentie rousse par la porte entrouverte, et l'apprentie garde les yeux sur son ouvrage. Ses doigts s'arrêtent sur une épingle, puis repartent." },
    ],
    choices: [
      { label: "Payer l'habit et le masque", if: { gold: { min: 160 } }, why: "Il faut huit ducats.", fx: { gold: -160 }, to: "IVB_bal_porte" },
      { label: "Le louer pour une nuit, contre la promesse de le rendre intact", test: { dom: "social", diff: 0, label: "Convaincre une couturière" },
        win: { to: "IVB_bal_porte" }, lose: { fx: { gold: -60 }, to: "IVB_bal_porte" } },
      { label: "Parler à l'apprentie rousse", hide: { seen: "IVB_ro_atelier" }, to: "IVB_ro_atelier" },
    ] },

  IVB_bal_porte: { act: "IV", title: "La porte de l'hôtel Marrel", place: "changeurs", takes: "night",
    text: [
      "L'hôtel Marrel donne sur le quai par une cour d'honneur pavée de blanc, où des valets en livrée noire portent des torches. Les carrosses s'arrêtent au portail, et les masques descendent : des loups de velours, des visages d'oiseaux, une lune d'argent. La musique vient des fenêtres du premier étage, toutes ouvertes malgré le froid.",
      { if: { has: "ivb:valet" }, text: "Tu entres par la porte des cuisines, en livrée, avec un plateau. Personne ne regarde un plateau." },
      { if: { not: { has: "ivb:valet" } }, text: "Au pied du perron, le majordome reçoit les cartons. C'est un homme grand et pâle, aux mains gantées de blanc, qui regarde chaque carton et chaque masque, l'un après l'autre." },
      { if: { not: { has: "ivb:valet" } }, text: "« La maison {{oreille#ivb_majordome|vous souhaite une belle soirée, et vous prie d'entrer|a ordre de signaler à Monsieur Brunel tout masque qui arrive seul après dix heures, et vous arrivez sans compagnie}}, dit-il en te rendant ton carton. »" },
    ],
    choices: [
      { label: "Entrer avec ton plateau", hide: { not: { has: "ivb:valet" } }, to: "IVB_bal_salle" },
      { label: "Revenir au portail et entrer au bras d'un groupe de masques qui arrive", hide: { any: [{ not: { voile: "ivb_majordome" } }, { has: "ivb:valet" }] }, fx: { ep: ["perso", 1500] }, to: "IVB_bal_salle" },
      { label: "Montrer le carton par le coin gauche, le pouce sur la cire", hide: { any: [{ not: { voile: "ivb_carton" } }, { has: "ivb:valet" }] }, fx: { ep: ["perso", 1000] }, to: "IVB_bal_salle" },
      { label: "Entrer, avec l'aisance de qui est attendu{e}", hide: { has: "ivb:valet" }, test: { dom: "social", diff: -10, label: "Passer devant le majordome", help: [{ if: { has: "ivb:carton" }, v: 10 }, { if: { has: "ivb:carton_faux" }, v: -10 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "IVB_bal_salle" }, lose: { fx: { flag: "ivb:signale" }, to: "IVB_bal_salle" } },
      { label: "Laisse-moi faire", who: "fauvette", hide: { has: "ivb:valet" }, test: { dom: "discretion", diff: 0, label: "Fauvette ouvre une fenêtre du rez-de-chaussée" },
        win: { fx: { conf: { fauvette: 3 }, ep: ["perso", 1000] }, to: "IVB_bal_couloir" }, lose: { fx: { flag: "ivb:signale" }, to: "IVB_bal_salle" } },
    ] },

  IVB_bal_salle: { act: "IV", title: "La salle de bal", place: "changeurs",
    text: [
      "La grande salle de l'hôtel Marrel tient tout le premier étage : un parquet de chêne ciré, trois lustres de cristal, des glaces aux murs qui multiplient les masques à l'infini. On danse la pavane. Sur une estrade, douze musiciens. Le long des murs, des buffets chargés de pâtés, de pyramides d'oranges, de vins de l'Orle. Dehors, dans la ville, on fait la queue depuis l'aube devant les boulangeries.",
      "Les conversations passent près de toi comme des barques. Une dame en loup de satin rouge dit à une autre : « Nos perles sont {{oreille|au coffre pour la saison, avec ce qu'on entend en ville|à la salle des dépôts de la Banque depuis Noël, en gage, et Corisande le sait, et elle me regarde}}. » Un homme gras, masqué en hibou, rit trop fort : « Le duc ? Le duc {{oreille|n'osera jamais passer la Salve|a déjà acheté la moitié du Conseil, et j'attends mon tour}}. »",
      "Un jeune homme au masque de renard tient un verre plein. « Ma mère {{oreille#ivb_renard|vous présente ses amitiés, madame|a mis en gage ses bagues pour payer cet habit, et le commis Sabran les lui a estimées au tiers}} », dit-il à une vieille dame qui passe.",
      { if: { has: "ivb:signale" }, text: "Le majordome est monté derrière toi. Il parle à l'oreille d'un valet, qui part vers le fond de la salle sans courir." },
      { with: "fauvette", text: "Fauvette a trouvé quelque part un masque de chat et une robe trop grande. Elle prend une orange au buffet et la met dans son corsage, puis une autre." },
    ],
    choices: [
      { label: "T'approcher de Corisande Marrel, sans masque, au bout de la salle", to: "IVB_bal_corisande" },
      { label: "Écouter le groupe du buffet, autour d'un vieil homme en noir", hide: { seen: "IVB_bal_prevot" }, to: "IVB_bal_prevot" },
      { label: "Le balcon, où un masque bleu fume seul", hide: { any: [{ seen: "IVB_bal_amaury" }, { not: { seen: "IVB_bal_prevot" } }] }, to: "IVB_bal_amaury" },
      { label: "Glisser vers la petite porte des valets, derrière les musiciens", to: "IVB_bal_lothaire" },
    ] },

  IVB_bal_prevot: { act: "IV", title: "Le buffet", place: "changeurs",
    text: [
      "Au buffet, un vieil homme en habit noir tient sa cour sans masque, parce qu'on le reconnaîtrait de toute façon : Haumont Delisle, le prévôt de la République. À côté de lui, un homme de quarante ans, élégant, aux cheveux mi-longs, en loup de velours bleu, le seul de la salle qui porte une épée de cour.",
      "« La République, dit le prévôt à son petit cercle, {{oreille#ivb_prevot|paiera le duc à la Saint-Jean, jusqu'au dernier ducat|ouvrira la porte des Sauniers le jour que nous dirons, et elle s'en remettra}}. » On applaudit. Le masque bleu lève son verre.",
      "« Le duc mon maître, dit le masque bleu d'une voix agréable, {{oreille#ivb_amaury|admire la ténacité de Salvèze|trouve que Salvèze coûte moins cher à acheter qu'à assiéger, et il a raison}}. »",
      { with: "tibere", text: "Tibère, derrière toi, a pâli sous ses rides. « Le prévôt, souffle-t-il. Si on me voit ici… » Il recule d'un pas dans l'ombre d'une colonne." },
    ],
    choices: [
      { back: "IVB_bal_salle" },
    ] },

  IVB_bal_corisande: { act: "IV", title: "Corisande Marrel", place: "changeurs",
    text: [
      "Corisande Marrel reste assise, à l'écart de la danse. Elle a pris place dans un fauteuil à haut dossier, au bout de la salle, en robe de soie grise, sans masque et sans bijou, les cheveux blancs tirés en chignon. Une canne d'ébène est posée contre le bras du fauteuil. Les invités viennent la saluer, s'inclinent, repartent. Elle a pour chacun un mot, et le regard de quelqu'un qui compte.",
      { if: { not: { seen: "IIID_cor_offre" } }, text: "Quand ton tour vient, elle te regarde longtemps. « Un masque que je ne connais pas, dit-elle. C'est rare, chez moi. Vous êtes de quelle maison ? » Elle enchaîne sans attendre. « Peu importe. On m'a toujours présenté des gens qui me devaient quelque chose. »" },
      { if: { seen: "IIID_cor_offre" }, text: "Quand ton tour vient, elle te regarde longtemps. « Le masque est de trop, dit-elle à voix basse. Je vous ai fait asseoir à ma table, à Orle, et je vous ai offert dix mille ducats. Je reconnais les gens à qui j'ai fait un prix. » Elle sourit pour les invités qui regardent." },
      { if: { has: "iiid:cor_refus" }, text: "« Vous m'avez dit non, là-bas. Vous voici chez moi quand même. J'en conclus que vous cherchez ici autre chose que mon argent. »" },
      { if: { all: [{ any: [{ has: "iiid:cor_accord" }, { has: "iiid:cor_feinte" }] }, { not: { has: "iiid:feinte_eventee" } }] }, text: "« Vous m'avez donné la main, là-bas, dit-elle. Un associé entre par la grande porte, d'habitude, et sans masque. »" },
      { if: { has: "iiid:feinte_eventee" }, text: "« Vous m'avez dit oui, là-bas, et Brunel a entendu le reste. Je vous croyais sur la route du sud. »" },
      "« Vous trouvez peut-être indécent qu'on danse, dit-elle encore, quand la ville a faim. On danse {{oreille#ivb_cs_peur|parce que Salvèze doit montrer au duc qu'elle tient debout|parce que si je ferme ma porte ce soir, demain la ville saura que la Banque est morte, et mon petit-fils sera pendu avec moi à la grille}}. » Elle sourit à peine. « La faim passe. La confiance, quand elle s'en va, ne revient pas. »",
      "« Et vous cherchez quoi, chez moi, masque ? {{oreille#ivb_cs_fait|Un mari, un prêt, une place ?|Ce que cherchait la vieille Carrus ? J'ai signé le mandat contre son élève sans lire la déposition, parce que Lothaire me l'a demandé}} »",
    ],
    choices: [
      { label: "Lui répondre que tu cherches la même chose qu'elle", fx: { ep: ["perso", 800], flag: "ivb:cs_bal" }, to: "IVB_bal_lothaire" },
      { label: "T'incliner et t'éloigner", to: "IVB_bal_lothaire" },
    ] },

  IVB_bal_lothaire: { act: "IV", title: "Les gants gris", place: "changeurs",
    text: [
      "Tu n'as pas fait dix pas vers la porte des valets qu'une main gantée de gris se pose sur ton bras, légère. Lothaire Brunel porte un masque de héron, long bec d'ivoire, et il le relève sur son front pour te sourire. Au creux de son oreille gauche, un petit cornet d'os cerclé d'argent, presque invisible dans ses cheveux.",
      "« Vous pensez à l'escalier de service, dit-il. Deuxième porte, à gauche, celle qui a une vraie serrure. » Il garde la main sur ton bras. « Et maintenant, vous pensez que j'entends. C'est vrai. Et vous pensez à votre dague. C'est inutile, il y a quatre des miens dans cette salle. » Il s'incline un peu. « Dansons, voulez-vous ? Pendant une pavane, on peut dire beaucoup de choses. »",
      "« Je {{oreille#ivb_lo_bal|vous admire, sincèrement, vous et votre maîtresse|vous déteste d'entendre ce que j'entends, et de l'entendre mieux que moi, sans avoir rien payé pour ça}} », dit-il en t'entraînant.",
      { if: { has: "taiseurs:serment" }, text: "Aux Joncs-Bas, on t'a appris à penser en deux couches, comme on parle. La couche du dessus, pour les autres ; celle du dessous, pour soi." },
    ],
    choices: [
      { label: "Penser à autre chose, très fort, pendant toute la danse", labels: [{ if: { has: "taiseurs:serment" }, label: "Penser en double, comme on te l'a appris aux Joncs-Bas" }],
        test: { dom: "magie", diff: -10, label: "Tromper une oreille qui entend tout", help: [{ if: { has: "taiseurs:serment" }, v: 25 }, { if: { has: "miroir:vu" }, v: 10 }] },
        win: { fx: { ep: ["perso", 2000] }, to: "IVB_bal_couloir" }, lose: { to: "IVB_bal_pris" } },
      { label: "Lui dire à voix basse ce que tu as entendu sous ses mots", hide: { not: { voile: "ivb_lo_bal" } }, fx: { ep: ["perso", 1500] }, to: "IVB_bal_couloir" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette renverse un plateau d'oranges" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IVB_bal_couloir" }, lose: { to: "IVB_bal_pris" } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "combat", diff: 0, label: "Salomé bouscule Lothaire" },
        win: { fx: { conf: { salome: 3 } }, to: "IVB_bal_couloir" }, lose: { to: "IVB_bal_pris" } },
      { label: "Danser, et le laisser parler", to: "IVB_bal_pris" },
    ] },

  IVB_bal_couloir: { act: "IV", title: "L'escalier de service", place: "changeurs",
    text: [
      "L'escalier de service descend en colimaçon derrière une porte tendue de damas, et la musique s'éteint à chaque marche. En bas, un couloir dallé, des portes de chêne : la lingerie, l'argenterie, les caves à vin. Une odeur de cire et de bois ciré, puis, plus loin, de pierre froide.",
      "Il y a deux portes au fond. La première {{pie#ivb_bal_porte|est une porte de cave ordinaire, avec une serrure de fer|est une porte peinte en trompe-l'œil sur un mur plein : la serrure est un dessin, les gonds sont des clous}}. La seconde est une porte basse, ferrée, avec une vraie serrure, qui descend.",
      { outcome: "win", with: "fauvette", text: "Fauvette te rejoint en bas, une orange dans chaque main, essoufflée et ravie. « Il y a des gens qui glissent sur les oranges, là-haut. Beaucoup de gens. »" },
    ],
    choices: [
      { label: "Prendre la porte basse ferrée", fx: { flag: "ivb:dedans" }, to: "IVB_sous" },
    ] },

  IVB_bal_pris: { act: "IV", title: "Pendant la pavane", place: "changeurs",
    text: [
      "La pavane dure longtemps. Lothaire danse bien, avec une politesse appliquée, et il parle à voix basse, à chaque fois que la figure vous rapproche. Il te dit ce que tu penses, dans l'ordre, au moment où tu le penses. Il te dit le nom de ta maîtresse, l'escalier de sa cave, et ce que tu lui as dit la nuit des Lanternes.",
      "À la dernière figure, il te rend à quatre hommes en livrée qui se sont approchés sans bruit. « Ce masque a trop bu, dit-il assez fort pour les voisins. Raccompagnez-le au frais, je vous prie. » Les quatre hommes te prennent par les coudes. Ils ont de la force et l'habitude.",
      { with: "any", text: "Tes compagnons, dans la foule des masques, ont vu. Ils attendent leur moment." },
    ],
    choices: [
      { label: "Te laisser emmener, sans un mot", fx: { flag: ["ivb:dedans", "ivb:prison", "ivb:lothaire_vu"] }, to: "IVB_pr_cellule" },
      { label: "Te dégager dans l'escalier de service", fight: { title: "L'escalier de service", enemies: [{ id: "ivb_garde", n: 2 }],
        win: { fx: { flag: ["ivb:dedans", "ivb:alerte"], ep: ["perso", 2000] }, to: "IVB_sous" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" },
        flee: { label: "Te jeter dans l'escalier", dom: "discretion", diff: -10, to: "IVB_bal_couloir" } } },
      { label: "Crier au feu, en pleine salle de bal", test: { dom: "social", diff: -10, label: "Semer la panique chez les riches" },
        win: { fx: { flag: "ivb:alerte", ep: ["perso", 1200] }, to: "IVB_bal_couloir" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" } },
    ] },
});

// ==================================================================== the clerk
Object.assign(P, {
  IVB_cm_commis: { act: "IV", title: "Au Trébuchet", place: "changeurs",
    text: [
      "Les commis de la Banque Marrel boivent au Trébuchet, une taverne basse du quai des Changeurs, où le patron tient les comptes de ses clients sur une ardoise et prête sur l'ardoise à dix pour cent la semaine. On y joue aux dés dans l'arrière-salle, sous une lampe à huile qui fume. Les commis y perdent leurs gages le samedi et les regagnent rarement.",
      "Isaïe Sabran est commis aux dépôts : c'est lui qui reçoit les gages des grandes familles, les estime, les inscrit au registre et les range dans la salle des dépôts, sous la Banque. Il a trente ans, une redingote propre aux coudes lustrés, des mains très blanches. Il perd. Il joue petit, avec application, et il perd quand même.",
      "Tu t'assieds en face de lui. Il lève les yeux et les rabaisse aussitôt sur les dés. « Je {{oreille#ivb_sabran|joue pour me distraire des chiffres, voilà tout|dois quatre-vingts ducats à Lothaire Brunel, qui a racheté mes billets au patron, et chaque samedi il me demande un service de plus}} », dit-il quand tu lui demandes s'il gagne souvent.",
      { with: "tibere", text: "Tibère regarde les dés rouler avec une attention que tu lui connais, les mains loin des dés. Sa main droite, posée sur la table, se ferme et s'ouvre." },
    ],
    choices: [
      { label: "Prendre place à la table, et jouer contre lui", hide: { seen: "IVB_cm_jeu" }, to: "IVB_cm_jeu" },
      { label: "Lui faire une proposition", to: "IVB_cm_offre" },
      { back: "IVB_plan" },
    ] },

  IVB_cm_offre: { act: "IV", title: "La proposition", place: "changeurs",
    text: [
      "Tu attends que la partie finisse, que Sabran ait perdu ses derniers liards, et tu le suis dehors, sur le quai. Il marche vite, la tête dans les épaules. Quand tu le rattrapes, il s'arrête sous un réverbère éteint et te regarde comme on regarde un créancier.",
      "« Une clé, dit-il quand tu as fini. La porte des commis, à l'arrière, sur la ruelle des Peseurs. Et le registre des dépôts, une heure. » Il rit sans joie. « Vous savez ce que la Banque fait aux commis qui ouvrent la porte la nuit ? Elle les garde. Il y a des cellules, sous la salle des dépôts. On y met les débiteurs, et quelques commis. »",
      { after: "voile:ivb_renard", text: "Tu te souviens d'un jeune homme au masque de renard, et de bagues estimées au tiers par le commis Sabran." },
    ],
    choices: [
      { label: "Lui demander où passent les deux tiers des bagues qu'il estime au tiers", hide: { not: { voile: "ivb_renard" } }, fx: { flag: "ivb:sabran_tenu", ep: ["perso", 1500] }, to: "IVB_cm_registres" },
      { label: "Lui offrir de quoi payer Lothaire Brunel", hide: { not: { voile: "ivb_sabran" } }, if: { gold: { min: 600 } }, why: "Il te faudrait trente ducats.", fx: { gold: -600, flag: "ivb:sabran_tenu", ep: ["perso", 1200] }, to: "IVB_cm_registres" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère parle à un joueur, en joueur" },
        win: { fx: { flag: "ivb:sabran_tenu", conf: { tibere: 5 }, ep: ["perso", 1200] }, to: "IVB_cm_registres" }, lose: { to: "IVB_cm_registres" } },
      { label: "Lui promettre dix ducats ce soir, et dix après", if: { gold: { min: 200 } }, why: "Il te faut dix ducats.", fx: { gold: -200 }, to: "IVB_cm_registres" },
      { label: "Le menacer, simplement", test: { dom: "combat", diff: 0, label: "Faire peur à un commis" },
        win: { to: "IVB_cm_registres" }, lose: { fx: { fac: { banque: -5 } }, to: "IVB_cm_registres" } },
    ] },

  IVB_cm_registres: { act: "IV", title: "La salle des comptes", place: "changeurs",
    text: [
      "Le lendemain, à l'heure où les commis dînent, Sabran te fait entrer dans la salle des comptes par une porte de côté. Une longue salle voûtée, quarante pupitres alignés, des fenêtres grillées sur le canal, et le long des murs, du sol à la voûte, les registres de la Banque reliés de veau noir. Il t'ouvre le registre des dépôts sur un lutrin et va se planter près de la porte, en sueur.",
      "Les pages sont tenues d'une écriture ronde de commis. Tu tournes. *Gage n° 311, maison Delisle : parure de perles en trois rangs, estimée quatre cents ducats, prêtés {{loupe#ivb_reg_delisle|au taux de la maison|sur l'ordre de Madame, sans intérêt, contre la promesse de garder fermée la porte des Sauniers}}.*",
      "Plus loin, au chapitre des fondations : *Caves basses du palais, {{loupe#ivb_reg_crypte|murées en l'an 112 par décision du conseil de la maison|murées en l'an 112. L'escalier de la crypte part du vieux puits de la salle des dépôts, derrière le casier aux armes des Vasse}}.* Et sur une page de frais : *Recherches, L. B. : {{loupe#ivb_reg_tibere|cinq ducats la semaine, fournitures diverses|cinq ducats la semaine à T. G., pour ses rapports sur l'élève de la vieille Carrus}}.*",
      "Au registre des créances, sous la lettre G : *Gaucelm, Tibère, ancien sergent. Cent quarante ducats. {{loupe#ivb_reg_rosalie|Caution : néant|Caution : sa fille Rosalie, seize ans, son travail chez la couturière Lesueur jusqu'à extinction de la dette. L'acte original au casier des créances, salle des dépôts}}.*",
      "Le premier registre de tous, le plus vieux, est enchaîné à part. Une seule ligne sur la première page, d'une encre brunie : *Compte premier : {{loupe#ivb_reg_muette|fonds propres de la maison, intouchables|ce que la maison doit à la reine, depuis la nuit des Comptoirs. À ne jamais solder}}.*",
      { with: "tibere", after: "voile:ivb_reg_tibere", text: "Tibère lit par-dessus ton épaule. Il se tait. Il se retourne vers la fenêtre, et tu vois sa nuque devenir rouge, lentement, jusqu'aux oreilles." },
    ],
    choices: [
      { label: "Regarder Tibère", with: "tibere", hide: { any: [{ not: { voile: "ivb_reg_tibere" } }, { seen: "IVB_tibere_aveu" }] }, to: "IVB_tibere_aveu" },
      { label: "Refermer le registre, et attendre la nuit à la porte des commis", big: true, takes: "night", to: "IVB_cm_nuit" },
    ] },

  IVB_cm_nuit: { act: "IV", title: "La porte des commis", place: "changeurs",
    text: [
      "La ruelle des Peseurs est une fente entre deux murs aveugles, à l'arrière de la Banque, où l'on sort les ordures et rentre le bois. À la deuxième heure, la porte des commis s'entrouvre sur un rai de chandelle, et le visage blanc de Sabran apparaît dans l'entrebâillement.",
      { if: { has: "ivb:sabran_tenu" }, text: "« Vite, souffle-t-il. La ronde du bas passe dans une demi-heure. » Il te met une clé dans la main, une grosse clé de fer, et s'efface dans le noir de la ruelle avant que tu aies pu le remercier. Ses pas s'éloignent en courant." },
      { if: { not: { has: "ivb:sabran_tenu" } }, text: "« Entrez, dit-il, et il recule pour te laisser passer, plus loin qu'il ne faudrait. Je {{oreille#ivb_sabran_nuit|reste ici pour faire le guet, la ronde passe bientôt|ai vendu cette porte une deuxième fois, à Lothaire Brunel, pour mes quatre-vingts ducats}}. »" },
    ],
    choices: [
      { label: "Entrer", hide: { not: { has: "ivb:sabran_tenu" } }, fx: { flag: "ivb:dedans", ep: ["perso", 1500] }, to: "IVB_sous" },
      { label: "Entrer", hide: { has: "ivb:sabran_tenu" }, to: "IVB_cm_trahi" },
      { label: "Saisir Sabran au collet et le faire passer devant toi", hide: { any: [{ has: "ivb:sabran_tenu" }, { not: { voile: "ivb_sabran_nuit" } }] }, fx: { ep: ["perso", 1500] }, to: "IVB_cm_trahi" },
    ] },

  IVB_cm_trahi: { act: "IV", title: "Le couloir des commis", place: "changeurs",
    text: [
      "Le couloir des commis est long et nu. Au fond, trois gardes attendent sous une lanterne, l'épée au fourreau. Un quatrième, un sergent gras aux joues couperosées, tient une arbalète armée. Il a l'air fatigué de quelqu'un qui attend depuis le début de la nuit.",
      { if: { voile: "ivb_sabran_nuit" }, text: "Tu tiens Sabran devant toi, par le col. Le sergent hésite à tirer à travers un commis de la maison. Ça te laisse le temps d'un souffle." },
      { with: "tibere", text: "Le sergent voit Tibère, et sa bouche s'ouvre. « Sergent Gaucelm… » C'est Hugues Pérachon, qui doit sa place à Tibère." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère rappelle à Pérachon ce qu'il lui doit" },
        win: { fx: { flag: "ivb:dedans", conf: { tibere: 10 }, ep: ["perso", 2000] }, to: "IVB_sous" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" } },
      { label: "Te battre", fight: { title: "Le couloir des commis", enemies: [{ id: "ivb_garde", n: 3 }],
        win: { fx: { flag: ["ivb:dedans", "ivb:alerte"], ep: ["perso", 2500] }, to: "IVB_sous" }, lose: { fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" },
        flee: { label: "Pousser Sabran sur eux et courir", dom: "discretion", diff: -10, to: "IVB_sous" } } },
      { label: "Lever les mains", fx: { flag: ["ivb:dedans", "ivb:prison"] }, to: "IVB_pr_cellule" },
    ] },
});

// ==================================================================== side quests: Rosalie's thread, Jocelyn Agasse's lock
Object.assign(P, {
  IVB_ro_atelier: { act: "IV", title: "L'atelier Lesueur", place: "salveze", fx: { questSeen: "IVB_rosalie" },
    text: [
      "L'atelier de maîtresse Lesueur, rue des Dames, est une longue pièce sous les toits où six apprenties cousent à la lumière de deux fenêtres. Il fait froid ; on a économisé le bois. La plus jeune, une rousse de seize ans aux doigts couverts de piqûres, coud près de la fenêtre de gauche, là où il fait le plus clair et le plus froid. Rosalie Gaucelm.",
      "Elle t'écoute sans lever les yeux de son ourlet. « Je {{oreille#ivb_rosalie|suis payée comme les autres, et je n'ai besoin de personne|ne suis pas payée du tout : la maîtresse envoie mes gages à la Banque, chaque samedi, pour les dettes de mon père, et ça durera jusqu'à ce que je sois vieille}}, dit-elle. Mon père, je ne le vois plus. Ça me va. »",
      "« Ce que je voudrais, dit-elle encore, en cassant son fil avec les dents, c'est {{oreille#ivb_rosalie_veut|un manteau neuf pour l'hiver prochain, comme tout le monde|un papier, un seul, qui est dans un casier de la Banque avec mon nom dessus, et le voir brûler}}. »",
      { with: "tibere", text: "Tibère est resté dans l'escalier. Rosalie l'a vu par la porte ouverte. Elle continue de coudre, plus vite, et ses points sont de travers." },
      { if: { voile: "ivb_reg_rosalie" }, text: "Tu as lu son nom au registre des créances, sous celui de son père, à la ligne de la caution." },
    ],
    choices: [
      { label: "Lui promettre de trouver ce papier dans la Banque", hide: IN_BAL, fx: { flag: "ivb:rosalie_promis", ep: ["perso", 500] }, back: "IVB_plan" },
      { label: "Lui promettre de trouver ce papier dans la Banque", hide: { not: IN_BAL }, fx: { flag: "ivb:rosalie_promis", ep: ["perso", 500] }, back: "IVB_bal_habit" },
      { label: "Laisse-moi faire", who: "tibere", hide: IN_BAL, test: { dom: "social", diff: -10, label: "Tibère parle à sa fille" },
        win: { fx: { flag: ["ivb:rosalie_promis", "ivb:tibere_rosalie"], conf: { tibere: 10 }, ep: ["perso", 1500] }, to: "IVB_plan" }, lose: { fx: { conf: { tibere: -5 } }, to: "IVB_plan" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { not: IN_BAL }, test: { dom: "social", diff: -10, label: "Tibère parle à sa fille" },
        win: { fx: { flag: ["ivb:rosalie_promis", "ivb:tibere_rosalie"], conf: { tibere: 10 }, ep: ["perso", 1500] }, to: "IVB_bal_habit" }, lose: { fx: { conf: { tibere: -5 } }, to: "IVB_bal_habit" } },
      { back: "IVB_plan", hide: IN_BAL },
      { back: "IVB_bal_habit", hide: { not: IN_BAL } },
    ] },

  IVB_ro_rendre: { act: "IV", title: "Le papier de Rosalie", place: "salveze",
    text: [
      "Tu remontes l'escalier de la rue des Dames à l'heure où les apprenties s'en vont. Rosalie est restée la dernière pour balayer les fils. Tu lui tends l'acte : une feuille de parchemin pliée en quatre, avec le sceau de la Banque, la signature de son père, et son propre nom, à la ligne de la caution, écrit par un commis qui ignore son visage.",
      { if: { has: "ivb:rosalie_promis" }, text: "« Vous l'aviez promis, dit-elle sans le prendre encore. Les gens promettent beaucoup, dans cet escalier. C'est la première fois que quelqu'un le remonte avec le papier. »" },
      "Elle le lit deux fois, en remuant les lèvres. Puis elle ouvre le poêle froid, y met l'acte, et le regarde. « Il me faudrait du feu », dit-elle.",
      { with: "tibere", text: "Tibère sort de sa poche un briquet d'amadou, s'agenouille devant le poêle avec un craquement de genoux, et bat le briquet jusqu'à ce que l'amadou prenne. Le parchemin se tord, noircit, s'enflamme. Rosalie regarde le feu. Puis elle regarde son père, toujours à genoux, et pose la main sur son épaule, juste un moment." },
      { without: "tibere", text: "Tu bats le briquet. Le parchemin se tord, noircit, s'enflamme d'un coup. Rosalie regarde le feu jusqu'au bout, jusqu'à ce qu'il ne reste qu'un peu de cendre et le sceau de cire fondu en larme rouge." },
      "« Je ne sais pas comment on remercie, dit-elle. Je n'ai jamais eu à le faire. » Elle prend sur la table une paire de gants qu'elle vient de finir, de bonne peau grise, et te les tend.",
    ],
    fx: { quest: "IVB_rosalie", flag: "ivb:rosalie_libre", drop: "ivb_acte_rosalie", item: "ivb_gants_rosalie", conf: { tibere: 15 }, fac: { hautes: 3 }, ep: ["perso", 2500] },
    choices: [{ back: "IVB_plan" }] },

  IVB_ag_ursule: { act: "IV", title: "La femme du serrurier", place: "changeurs", fx: { questSeen: "IVB_agasse" },
    text: [
      "Elle se tient debout sur le quai des Changeurs, en face de la Banque, depuis trois jours, avec un panier à ses pieds et un châle sur la tête. Les gardes de la porte l'ont chassée deux fois. Elle revient. Ursule Agasse a cinquante ans, des mains rouges de lavandière et un visage fermé comme une boîte.",
      "« Mon mari, Jocelyn, est serrurier, dit-elle quand tu t'arrêtes. Il a fait toutes les serrures de la Banque, les grandes et les petites, pendant deux ans. Quand il a eu fini, ils l'ont mis dans leurs cellules. Pour dettes, disent-ils. Jocelyn n'a jamais dû un liard. »",
      "Elle regarde la porte de la Banque. « Il {{oreille#ivb_ursule|ne m'a jamais rien dit de son travail, c'était un secret de métier|m'a dit, la veille du jour où ils l'ont pris : la grande serrure s'ouvre à l'envers, comme une montre qu'on remonte, et la clé ne sert à rien si on ne le sait pas}}. Ils ont peur qu'il parle, voilà tout. Moi, je veux qu'il rentre. »",
      { with: "fauvette", text: "Fauvette s'accroupit à côté du panier et regarde ce qu'il y a dedans : un pain, un pot de soupe froide, une chemise propre. « Tu lui apportes ça tous les jours ? » Ursule hoche la tête. « Ils me le prennent tous les jours », dit-elle." },
    ],
    choices: [
      { label: "Lui promettre de ramener Jocelyn", fx: { flag: "ivb:agasse_promis", ep: ["perso", 500] }, to: "IVB_ag_atelier" },
      { back: "IVB_plan" },
    ] },

  IVB_ag_atelier: { act: "IV", title: "L'atelier du serrurier", place: "changeurs",
    text: [
      "Ursule t'emmène chez elle, rue des Forges, deux pièces au-dessus d'un atelier aux volets fermés. L'atelier de Jocelyn est resté comme il l'a laissé : les étaux, les limes rangées par taille, une forge froide, des serrures démontées sur l'établi comme des bêtes ouvertes.",
      "Sur un clou, un carnet de croquis à couverture de toile. Des pênes, des gorges, des clés à double panneton. À la dernière page, un dessin de serrure ronde, énorme, avec cette note : *Commande Marrel, la grande porte du bas. {{loupe#ivb_ag_plan|Trois gorges, pêne dormant, clé de laiton|Elle s'ouvre à l'envers, trois tours vers la gauche. À droite, elle bloque et sonne une cloche dans la loge des gardes}}.*",
      "« Prenez-le, si ça peut servir, dit Ursule. Il dessinait tout. Il disait que le papier se souvient mieux que les hommes. »",
    ],
    fx: { item: "ivb_carnet_agasse" },
    choices: [{ back: "IVB_plan" }] },
});

// ==================================================================== under the Bank: the vaults, the deposits, the cells
Object.assign(P, {
  IVB_sous: { act: "IV", title: "Sous la Banque", place: "changeurs", hub: true, backName: "le couloir des chambres fortes",
    text: [
      { first: true, outcome: ["win", "flee"], text: "Tu reprends ton souffle contre un mur. Personne derrière toi, pour l'instant." },
      { first: true, text: "Le premier sous-sol de la Banque Marrel est un couloir voûté, long de cent pas, pavé de dalles usées en creux par trois siècles de commis. Des lanternes de fer pendent de la voûte, une sur deux allumée. De chaque côté, des portes épaisses, bardées de fer, avec des numéros peints : les chambres fortes. Au bout, une grille ouvragée ferme la salle des dépôts. Une porte plus basse, sur la gauche, porte un judas grillagé : les cellules." },
      { first: true, text: "Ça sent la cire, l'encre, la pierre humide et l'argent : une odeur de métal froid, que tu connais des boutiques de changeurs. Quelque part, très loin au-dessus, une horloge sonne la deuxième heure. Le couloir {{echo#ivb_sous|est silencieux, sous la ville endormie|garde la voix de Corisande, il y a trois nuits : « Si le duc entre, Lothaire, tu brûles le registre premier, et ensuite tu brûles la crypte. Tout. »}}." },
      { again: true, text: "Le couloir des chambres fortes, ses lanternes, ses portes numérotées. Au bout, la grille des dépôts. À gauche, le judas des cellules." },
      { if: { has: "ivb:alerte" }, before: "IVB_ronde", text: "Au-dessus de toi, des pas pressés traversent un plancher, et une cloche sonne trois coups, s'arrête, recommence. On te cherche." },
      { with: "fauvette", first: true, text: "Fauvette pose l'oreille contre la porte de la première chambre forte, puis contre la deuxième. « Celle-là sonne plein, dit-elle. Celle-là sonne vide. Tous ces gens qui croient avoir de l'or ici… »" },
      { with: "salome", first: true, text: "Salomé lève les yeux vers la voûte, vers les étages au-dessus. « Son cabinet est là-haut, dit-elle. Je veux le voir avant de partir. »" },
    ],
    choices: [
      { label: "Des pas dans l'escalier : la ronde du bas", big: true, hide: { any: [{ seen: "IVB_ronde" }, { not: { has: "ivb:alerte" } }] }, to: "IVB_ronde" },
      { label: "Entrer dans la salle des dépôts", to: "IVB_depots" },
      { label: "La chambre forte numéro un, la plus grande", hide: { seen: "IVB_sous_chambre" }, to: "IVB_sous_chambre" },
      { label: "Ouvrir le judas des cellules", to: "IVB_cellules" },
      { label: "Monter par l'escalier de pierre au cabinet de Lothaire Brunel", hide: { seen: "IVB_cab_piece" }, to: "IVB_cabinet" },
      { label: "Le cabinet de Lothaire, au deuxième étage", hide: { not: { seen: "IVB_cab_piece" } }, to: "IVB_cab_piece" },
      { label: "Quitter la Banque", big: true, hide: { not: { has: "banque:ouverte" } }, to: "IVB_sortie" },
      { label: "Attendre dans l'ombre la troisième heure, que la ronde s'endorme", hide: { any: [{ not: { voile: "ivb_releve" } }, { seen: "IVB_ronde" }] }, fx: { flag: "ivb:ronde_dort", ep: ["perso", 1000] }, to: "IVB_ronde" },
    ] },

  IVB_ronde: { act: "IV", title: "La ronde du bas", place: "changeurs",
    text: [
      { if: { has: "ivb:ronde_dort" }, text: "À la troisième heure, la ronde du bas descend l'escalier, deux gardes et un dogue en laisse. Ils ouvrent la grille des dépôts, s'allongent sur les grands coffres de la maison Fourcaud, roulés dans leurs manteaux, et le dogue se couche en travers de leurs pieds. Un quart d'heure plus tard, ils ronflent tous les trois." },
      { if: { not: { has: "ivb:ronde_dort" } }, text: "Ils descendent l'escalier au pas, deux gardes en manteau noir et un dogue énorme au bout d'une chaîne, qui tire et souffle. Le premier garde lève sa lanterne. Le dogue a déjà levé le museau, et il regarde l'endroit exact où tu te tiens." },
      { with: "tibere", if: { not: { has: "ivb:ronde_dort" } }, text: "Tibère te touche le bras. « Le gros, à gauche, c'est Pérachon, souffle-t-il. Laisse-moi lui parler. »" },
    ],
    choices: [
      { label: "Les laisser dormir, et passer sur la pointe des pieds", hide: { not: { has: "ivb:ronde_dort" } }, fx: { ep: ["perso", 800] }, back: "IVB_sous" },
      { label: "Laisse-moi faire", who: "tibere", hide: { has: "ivb:ronde_dort" }, test: { dom: "social", diff: 0, label: "Tibère et le sergent Pérachon" },
        win: { fx: { conf: { tibere: 5 }, ep: ["perso", 1500] }, to: "IVB_sous" }, lose: { fx: { flag: ["ivb:prison"] }, to: "IVB_pr_cellule" } },
      { label: "Te fondre dans l'ombre d'une porte et retenir ton souffle", hide: { has: "ivb:ronde_dort" }, test: { dom: "discretion", diff: -10, label: "Échapper au nez d'un dogue", help: [{ with: "fauvette", v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "IVB_sous" }, lose: { to: "IVB_ronde_combat" } },
      { label: "Prendre les devants", hide: { has: "ivb:ronde_dort" }, to: "IVB_ronde_combat" },
    ] },

  IVB_ronde_combat: { act: "IV", title: "Le dogue", place: "changeurs",
    text: [
      "Le dogue part le premier, la chaîne arrachée de la main du garde, en silence. Les dogues de la Banque ont les cordes vocales coupées. Derrière lui, les deux gardes tirent l'épée.",
    ],
    combat: { title: "La ronde du bas", enemies: [{ id: "ivb_dogue", n: 1 }, { id: "ivb_garde", n: 2 }],
      win: { fx: { ep: ["perso", 2500] }, to: "IVB_sous" }, lose: { fx: { flag: "ivb:prison" }, to: "IVB_pr_cellule" },
      flee: { label: "Courir jusqu'aux cellules et refermer la porte basse", dom: "discretion", diff: -10, to: "IVB_cellules" } },
    choices: [] },

  IVB_depots: { act: "IV", title: "La salle des dépôts", place: "changeurs", backName: "la salle des dépôts",
    text: [
      { first: true, text: "La salle des dépôts est une nef de pierre, basse, longue comme une église, soutenue par deux rangées de piliers trapus. Entre les piliers, des casiers grillagés de fer, du sol à la voûte, un par grande famille, avec ses armes peintes sur une plaque d'émail. Delisle, Fourcaud, Vernier, Sabran, Aubrac. Derrière les grilles, des coffrets, des écrins, des paquets ficelés, chacun avec une étiquette de carton : le numéro du gage, la somme prêtée, la date." },
      { first: true, text: "Les grandes familles de Salvèze ont mis leurs bijoux en gage pour tenir leur rang une saison de plus. C'est leur fortune entière qui dort ici, sous ta lanterne, et la Banque prête dessus à vingt pour cent l'an." },
      { again: true, text: "La salle des dépôts, ses piliers, ses casiers grillagés, ses étiquettes de carton." },
      "Dans le casier Delisle, sur un coussin de velours, une parure de {{pie#ivb_dep_perles|trois rangs de perles fines, d'un orient égal|perles en trois rangs : le rang du milieu est en verre soufflé, et les deux autres sont de vraies perles, que le prévôt a gardées pour donner le change}}. Dans le casier Fourcaud, une tabatière d'or émaillé, {{pie#ivb_dep_tabatiere|ronde, ciselée de feuilles d'acanthe|ronde, à double fond : dessous, une miniature sur ivoire d'une femme au front ceint de sel, le visage d'une reine}}.",
      "Un casier sans armes, marqué seulement d'une crosse d'abbé, contient {{pie#ivb_dep_reliquaire|un reliquaire d'argent, gage d'une abbaye de province|le reliquaire du Mont-Taciturne, en argent massif, mis en gage par Dom Évrard pour couvrir ses dettes, et qui contient encore la relique}}. Contre un pilier, dans le casier Vernier, une rapière de cour dans son fourreau, {{pie#ivb_dep_rapiere|une lame d'apparat, belle et inutile|une lame de Tolède à l'ancienne, trempée pour tuer, sous une garde qu'on a dorée pour la faire passer pour un bijou}}.",
      "Au fond de la nef, contre le dernier pilier, un casier plus vieux que les autres, rouillé, sans étiquette. Ses armes, sur la plaque d'émail écaillée, {{pie#ivb_dep_vasse|sont effacées, illisibles|sont un croissant d'argent sur fond pourpre : les Vasse des Joncs-Bas, une maison qui n'a jamais rien déposé ici, et le casier n'a pas de fond}}.",
      { if: { has: "ivb:dep_fouille" }, text: "Tu as fouillé les casiers un à un, à la main, au jugé." },
    ],
    choices: [
      { label: "Prendre les deux vrais rangs de perles Delisle", hide: { any: [{ not: { voile: "ivb_dep_perles" } }, { has: "tresor:ivb_perles" }] }, fx: { item: "ivb_tr_perles", clock: { tresors: 1 }, flag: "tresor:ivb_perles", mark: 1, ep: ["perso", 800] }, to: "IVB_depots" },
      { label: "Prendre la tabatière Fourcaud", hide: { any: [{ not: { voile: "ivb_dep_tabatiere" } }, { has: "tresor:ivb_tabatiere" }] }, fx: { item: "ivb_tr_tabatiere", clock: { tresors: 1 }, flag: "tresor:ivb_tabatiere", ep: ["perso", 800] }, to: "IVB_depots" },
      { label: "Prendre le reliquaire du Mont-Taciturne", hide: { any: [{ not: { voile: "ivb_dep_reliquaire" } }, { has: "tresor:ivb_reliquaire" }] }, fx: { item: "ivb_tr_reliquaire", clock: { tresors: 1 }, flag: "tresor:ivb_reliquaire", ep: ["perso", 800] }, to: "IVB_depots" },
      { label: "Prendre la rapière Vernier", hide: { any: [{ not: { voile: "ivb_dep_rapiere" } }, { has: "tresor:ivb_rapiere" }] }, fx: { item: "ivb_tr_rapiere", clock: { tresors: 1 }, flag: "tresor:ivb_rapiere", ep: ["perso", 800] }, to: "IVB_depots" },
      { label: "Fouiller les casiers à la main, au jugé", hide: { has: "ivb:dep_fouille" }, test: { dom: "discretion", diff: -10, label: "Trouver le meilleur gage sans rien y voir", help: [{ if: { has: "metier:mains" }, v: 15 }, { if: { item: "crochets" }, v: 10 }] },
        win: { fx: { flag: ["ivb:dep_fouille", "tresor:ivb_tabatiere"], item: "ivb_tr_tabatiere", clock: { tresors: 1 }, ep: ["perso", 800] }, to: "IVB_depots" }, lose: { fx: { flag: ["ivb:dep_fouille", "ivb:alerte"] }, to: "IVB_depots" } },
      { label: "Le casier des créances, près de l'entrée", to: "IVB_dep_creances" },
      { label: "Le grand coffre de la maison Marrel, au milieu de la nef", to: "IVB_dep_marrel" },
      { label: "Le casier rouillé, au fond", to: "IVB_dep_vasse" },
      { back: "IVB_sous" },
    ] },

  IVB_dep_creances: { act: "IV", title: "Le casier des créances", place: "changeurs",
    text: [
      "Le casier des créances est une armoire de fer à cent tiroirs, chacun marqué d'une lettre. Il reste ouvert : qui volerait une dette ? Les tiroirs sont pleins de parchemins pliés, ficelés par paquets, avec le sceau de la Banque. Les dettes de la moitié de la ville.",
      "Au tiroir G, un paquet mince : *Gaucelm, Tibère.* Dessous, la reconnaissance de dette de cent quarante ducats, et la ligne de la caution, avec un nom de jeune fille écrit par une main étrangère.",
      { with: "tibere", text: "Tibère regarde le tiroir ouvert. « Je l'ai signé un soir où j'avais perdu, dit-il. On m'a dit que c'était une formalité. » Ses mains restent dans ses poches. Il attend que tu prennes le papier." },
      "Au tiroir C, il y a aussi un paquet, plus épais : *Carrus, Odeline.* Des reconnaissances de petites sommes, sur vingt ans, toutes acquittées. La dernière est datée de la semaine des Lanternes, et elle porte, en marge, d'une écriture de clerc : {{loupe#ivb_odeline_dette|*soldée*|*soldée par L. B., contre la promesse du Beffroi. Deux mille*}}.",
    ],
    choices: [
      { label: "Prendre l'acte de Tibère Gaucelm", hide: { item: "ivb_acte_rosalie" }, fx: { item: "ivb_acte_rosalie", ep: ["perso", 1000] }, back: "IVB_depots" },
      { label: "Prendre tous les paquets du tiroir et les jeter dans le puits", once: true, fx: { flag: "ivb:creances_noyees", fac: { hautes: 5, banque: -10 }, mark: 1, ep: ["perso", 1500] }, back: "IVB_depots" },
      { back: "IVB_depots" },
    ] },

  IVB_dep_marrel: { act: "IV", title: "Le coffre Marrel", place: "changeurs",
    text: [
      "Au milieu de la nef, sur un socle de pierre, le grand coffre de la maison Marrel : un bloc de fer noir haut comme une table, cerclé de bronze, avec une serrure ronde au milieu, large comme une assiette. Sur la serrure, un cadran à chiffres et un trou de clé. Le travail d'un maître serrurier.",
      "Sur le couvercle, la Banque a posé, comme on pose une pièce de musée, une couronne sous un globe de verre. Une couronne basse, faite de petites pointes blanches et brillantes, comme du sel. Une étiquette : *Couronne de sel de la reine Ysaure. Retrouvée par la maison en l'an 12.* La couronne {{pie#ivb_dep_couronne|scintille d'un éclat de cristal, intacte après trois siècles|est en plomb doré, et les pointes de sel sont du verre pilé collé à la gomme. Une copie, posée là pour qui viendrait voler}}.",
      { if: { item: "ivb_carnet_agasse" }, text: "Le carnet de Jocelyn Agasse, dans ta poche, contient le dessin de cette serrure, à la dernière page." },
    ],
    choices: [
      { label: "Tourner la serrure à l'envers, trois tours vers la gauche", hide: { not: { any: [{ voile: "ivb_ag_plan" }, { voile: "ivb_ursule" }, { has: "ivb:serrure" }] } }, fx: { ep: ["perso", 1500] }, to: "IVB_dep_coffre" },
      { label: "Crocheter la grande serrure", test: { dom: "discretion", diff: -20, label: "Ouvrir la serrure d'un maître", help: [{ if: { item: "crochets" }, v: 15 }, { with: "fauvette", v: 10 }] },
        win: { fx: { ep: ["perso", 1500] }, to: "IVB_dep_coffre" }, lose: { fx: { flag: "ivb:alerte" }, back: "IVB_depots" } },
      { label: "Soulever le globe et prendre la couronne de sel", hide: { voile: "ivb_dep_couronne" }, once: true, fx: { item: "ivb_faux_couronne", flag: "ivb:alerte" }, back: "IVB_depots" },
      { back: "IVB_depots" },
    ] },

  IVB_dep_coffre: { act: "IV", title: "Dans le coffre Marrel", place: "changeurs",
    text: [
      "Le pêne recule avec un soupir d'huile, et le couvercle se soulève sur des charnières bien graissées. Dans le coffre de la Banque Marrel, du papier : des liasses de parchemin jauni, nouées de rubans noirs, très vieilles, rangées comme des briques.",
      "Tu dénoues la première. *Acte de propriété des terres de la Grisemotte, au profit de la maison Marrel, par cession de la reine Ysaure, l'an premier.* La signature de la reine, en bas, est {{loupe#ivb_faux_actes|ferme, ornée, royale|tracée par-dessus un modèle à la pointe sèche, dont on voit encore les sillons : un faux, et tous les autres actes de la liasse portent le même sillon}}.",
      "Il y en a des dizaines. Les terres des Hautes-Eaux, les salines, les pêcheries, les moulins : tout ce que les grandes maisons possèdent dans le delta, appuyé sur ces feuilles-là. Une seule liasse, la plus mince, porte le sceau personnel de Corisande, et une date de cette année : ses lettres à l'envoyé du duc. Sur le dessus, un brouillon de sa main, plié en deux : *Mémoire pour le prévôt. {{loupe#ivb_cs_trahit|Monsieur Brunel a toute la confiance de la maison|Si l'affaire de la crypte tourne mal, Monsieur Brunel sera livré au Guet pour la noyade de la Brac. Le témoin est payé, le dossier est prêt}}.*",
    ],
    choices: [
      { label: "Emporter la liasse des faux actes", once: true, fx: { item: "ivb_faux_actes", flag: "ivb:faux_actes", ep: ["histoire", 1500] }, to: "IVB_dep_coffre" },
      { label: "Emporter les lettres de Corisande au duc", once: true, fx: { item: "ivb_lettres_corisande", flag: "ivb:lettres_corisande", ep: ["perso", 1500] }, to: "IVB_dep_coffre" },
      { back: "IVB_depots" },
    ] },

  IVB_dep_vasse: { act: "IV", title: "Le casier des Vasse", place: "changeurs",
    text: [
      "Le casier rouillé est vide, à part de la poussière et un nid de souris dans un coin. La grille en est fermée par un vieux cadenas que la rouille a soudé. Derrière, contre le mur du fond, l'émail des armes s'écaille.",
      { if: { any: [{ voile: "ivb_dep_vasse" }, { voile: "ivb_reg_crypte" }] }, text: "Tu sais ce que tu cherches. Derrière le casier, à la place du mur, une margelle de pierre grise, ronde, et un trou noir d'où monte un air froid. Le vieux puits du palais." },
      { if: { not: { any: [{ voile: "ivb_dep_vasse" }, { voile: "ivb_reg_crypte" }] } }, text: "Un courant d'air froid passe entre les barreaux, venu de derrière le casier. Il fait danser la flamme de ta lanterne." },
      { with: "lison", text: "Lison s'accroupit devant la plaque d'émail et gratte la rouille avec l'ongle, jusqu'à ce qu'apparaisse un bout de croissant d'argent. Elle a les mâchoires serrées." },
    ],
    choices: [
      { label: "Faire sauter le cadenas, pousser le casier, et descendre dans le puits", hide: { not: { any: [{ voile: "ivb_dep_vasse" }, { voile: "ivb_reg_crypte" }] } }, fx: { ep: ["perso", 1500] }, to: "IVB_crypte" },
      { label: "Suivre le courant d'air", hide: { any: [{ voile: "ivb_dep_vasse" }, { voile: "ivb_reg_crypte" }] }, test: { dom: "nature", diff: 0, label: "Trouver d'où vient le froid", help: [{ with: "lison", v: 15 }, { with: "gildas", v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "IVB_crypte" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_crypte" } },
      { back: "IVB_depots" },
    ] },

  IVB_cellules: { act: "IV", title: "Les cellules des débiteurs", place: "changeurs",
    text: [
      { outcome: "flee", text: "Tu claques la porte basse derrière toi et tu tires le verrou. De l'autre côté, le dogue gratte, sans un son." },
      "Derrière la porte basse, un couloir étroit, huit portes de chêne avec un guichet chacune. La Banque Marrel a le droit, par une vieille charte de la République, de garder ses débiteurs jusqu'à ce qu'ils paient. Ils paient rarement, de là-dedans. Une odeur de paille, de seau et de chandelle de suif.",
      "Par les guichets, des visages : un vieil homme en chemise de dentelle sale, un jeune homme aux yeux rouges, une femme qui chantonne. Dans la cellule sept, un homme trapu aux avant-bras couverts de brûlures d'étincelles est assis sur sa paillasse, les mains jointes entre les genoux.",
      { if: { has: "ivb:agasse_promis" }, text: "Jocelyn Agasse. Les mains de serrurier qu'Ursule t'a décrites." },
      "Les clés pendent à un clou, au bout du couloir, à côté de la chaise vide du geôlier. Un bol de soupe y refroidit encore.",
    ],
    choices: [
      { label: "Prendre les clés et ouvrir la cellule sept", to: "IVB_cel_agasse" },
      { label: "Ouvrir toutes les cellules", once: true, fx: { flag: ["ivb:debiteurs_libres", "ivb:alerte"], fac: { banque: -10, conseil: -5, hautes: 5 }, ep: ["perso", 1500] }, to: "IVB_cel_agasse" },
      { back: "IVB_sous" },
    ] },

  IVB_cel_agasse: { act: "IV", title: "Jocelyn Agasse", place: "changeurs",
    text: [
      "Jocelyn Agasse se lève quand la porte s'ouvre, et reste un moment sur le seuil de la cellule. Il regarde la clé dans ta main. « Celle-là, je l'ai faite, dit-il. Elle a du jeu au panneton. Je leur avais dit. »",
      { if: { has: "ivb:agasse_promis" }, text: "Tu lui parles d'Ursule, du quai, du panier. Il s'assied de nouveau, d'un coup, et il se frotte les yeux avec le dos de ses mains brûlées." },
      "« Si vous allez plus bas, dit-il, il y a une porte de bronze qui n'est pas de moi. Elle est plus vieille que la Banque. Les Marrel n'ont jamais su l'ouvrir. Ils m'ont fait venir pour ça, au début. J'ai passé deux mois devant. » Il secoue la tête. « À la place de la serrure, elle a sept bouches. Je crois qu'elle s'ouvre à la voix. »",
      { if: { has: "ivb:debiteurs_libres" }, text: "Derrière lui, dans le couloir, les débiteurs sortent un à un de leurs cellules, en clignant des yeux. Le vieil homme en dentelle sale s'incline devant toi comme à la cour." },
      "« Moi, je rentre, dit-il. Je connais une sortie par la cour aux charbons. Ils me croiront parti avec vous. »",
    ],
    fx: { flag: ["ivb:agasse_libre", "ivb:serrure"], quest: "IVB_agasse", fac: { hautes: 3 }, ep: ["perso", 2500] },
    choices: [{ back: "IVB_sous" }] },
});

// ==================================================================== the crypt of the old palace, the fifth cache
Object.assign(P, {
  IVB_crypte: { act: "IV", title: "La crypte du vieux palais", place: "changeurs", hub: true, backName: "la crypte du palais",
    text: [
      { first: true, text: "Tu descends longtemps. Des marches de pierre grise, usées au milieu, tournent dans un puits étroit ; puis le puits s'ouvre, et ta lanterne n'éclaire plus qu'un cercle de dalles autour de tes pieds. Une salle. Tu la devines plus que tu ne la vois : des colonnes trapues, sculptées de roseaux et de vagues, une voûte basse en berceau, et au fond, très loin, un reflet de bronze." },
      { first: true, text: "C'était la salle basse du palais de la reine Ysaure, où l'on tenait audience l'été, au frais. Les Marrel l'ont murée et ont bâti leur Banque par-dessus. Des gravats de leur chantier sont restés en tas contre un mur, avec une brouette pourrie et une pelle à manche cassé, abandonnés là depuis deux siècles." },
      { first: true, text: "La salle {{echo#ivb_cr_salle|est muette, comme une cave qu'on a oubliée|répond au moindre pas par d'autres pas, plus anciens, des bottes, beaucoup de bottes, et une voix d'homme qui crie : « Les portes ! Fermez les portes de la reine ! »}}." },
      { again: true, text: "La salle basse du palais, ses colonnes à roseaux, le reflet de bronze au fond. Ta lanterne y fait un cercle étroit, et le froid monte des dalles." },
      { with: "gildas", first: true, text: "Frère Gildas s'est arrêté sur la dernière marche. Il a rabattu sa capuche, et tu vois à la lanterne, à la racine de ses cheveux, la cicatrice pâle qu'il porte au front. Il fait le signe des Taiseurs, deux doigts sur les lèvres, et descend." },
      { with: "lison", first: true, text: "Lison touche une colonne, puis une autre, comme on touche les meubles d'une maison où l'on a grandi sans y être jamais venu. « Ma grand-mère m'a décrit cette salle, dit-elle. Elle ne l'a jamais vue non plus. »" },
    ],
    choices: [
      { label: "Le mur de l'est, sous les armes martelées", to: "IVB_cr_comptoirs" },
      { label: "La petite salle aux anneaux de fer", to: "IVB_cr_langue" },
      { label: "La colonne veinée d'ambre, au centre", to: "IVB_cr_pierre" },
      { label: "Les niches funéraires, le long du mur nord", to: "IVB_cr_tombeaux" },
      { label: "T'asseoir près de Frère Gildas, sur les marches", with: "gildas", hide: { seen: "IVB_cr_gildas" }, to: "IVB_cr_gildas" },
      { label: "Lison, qui s'est éloignée entre les colonnes", with: "lison", hide: { seen: "IVB_cr_lison" }, to: "IVB_cr_lison" },
      { label: "La porte de bronze, au fond de la salle", big: true, hide: { has: "banque:ouverte" }, to: "IVB_cr_porte" },
      { label: "Prendre le puits qui monte vers la salle des dépôts", to: "IVB_sous" },
    ] },

  IVB_cr_comptoirs: { act: "IV", title: "Le mur de l'est", place: "changeurs",
    text: [
      "Le mur de l'est porte, sculptées dans la pierre, les armes de la reine : une couronne au-dessus d'une vague. Quelqu'un les a martelées, il y a longtemps, avec soin, jusqu'à n'en laisser que le contour. Au-dessus, plus petits, plus récents, gravés d'une main pressée : un besant, le blason des Marrel, et la date de la nuit des Comptoirs.",
      "Le mur {{echo#ivb_cr_comptoirs|garde les coups de marteau et rien d'autre|garde une voix d'homme, calme, qui dicte : « Signez, Delisle. Fourcaud a signé, Vernier a signé. La reine est devenue folle cette nuit, nous en sommes tous témoins, et ce qui est écrit par quarante maisons est vrai. »}}. Au pied du mur, un tas de gravats {{echo#ivb_cr_marteau|dort sous sa poussière|rend une voix plus jeune, essoufflée, qui demande : « Et si elle parle au duc ? » et la première voix qui répond : « Elle ne parlera pas, Jourdain. Tu y veilleras toi-même. »}}.",
      { with: "lison", text: "Lison écoute la pierre, le menton levé. Ses lèvres bougent en même temps que la voix, sans un son, sur certains mots." },
      { with: "gildas", text: "Frère Gildas a fermé les yeux. Il récite quelque chose à voix très basse, une liste de noms peut-être, et s'arrête quand la voix s'arrête." },
    ],
    choices: [{ back: "IVB_crypte" }] },

  IVB_cr_langue: { act: "IV", title: "La salle aux anneaux", place: "changeurs",
    text: [
      "La petite salle s'ouvre sur le côté de la grande par une arche basse. Un banc de pierre court le long du mur, et au-dessus du banc, scellés dans la pierre, deux anneaux de fer rouillés à hauteur d'épaules. Sur les dalles, une rigole d'écoulement. C'était une salle de garde. Cette nuit-là, on en a fait autre chose.",
      "La pierre {{echo#ivb_cr_langue|est froide, nue, sans un bruit|rend une voix de femme, rauque, précipitée, qui parle vite, comme on parle quand on sait qu'on va être interrompu : « Vasse, écoute-moi. Garde ma parole. Garde-la, toi qui sais te taire, et rends-la le jour où on pourra l'entendre. » Puis le bruit d'une lutte, et une voix d'homme qui dit : « Tenez-lui la tête. »}}.",
      "Le reste, la salle le garde pour elle. Après celle-là, seulement le bruit, pendant longtemps, d'une eau qu'on verse et qu'on reverse dans la rigole.",
      { with: "gildas", text: "Frère Gildas s'est assis sur le banc de pierre, entre les deux anneaux, et il a mis son visage dans ses mains. Ses épaules sont immobiles. Il demeure ainsi jusqu'à ce que tu repartes." },
      { with: "lison", text: "Lison est sortie dans la grande salle avant la fin. Tu l'entends respirer dans le noir, très fort, par le nez." },
      { with: "salome", text: "Salomé a croisé les bras sur sa poitrine. « Ils ont toujours fait comme ça, dit-elle. Les Marrel. Ils coupent ce qui gêne, et ils lavent derrière. »" },
    ],
    choices: [{ back: "IVB_crypte" }] },

  IVB_cr_pierre: { act: "IV", title: "La colonne d'ambre", place: "changeurs",
    text: [
      "Au centre de la salle, une colonne plus mince que les autres, d'une pierre grise veinée de jaune, de ces veines d'ambre chantant que l'on trouve aux Écueils. On l'a mise là pour elle-même, et la voûte passe au-dessus sans la toucher. Quand tu en approches ta lanterne, les veines s'allument du dedans, et un bourdonnement très bas, à peine audible, monte de la pierre.",
      "Sur sa base, une ligne gravée, presque effacée : *{{loupe#ivb_cr_base|Ici la reine écoutait ses gens|Ici la reine écoutait ses gens. Qui frappe la pierre avec le bronze des Taiseurs, la pierre lui rend son chant}}.*",
      "Tu poses la main sur la colonne. Elle est tiède. Tu {{miroir#ivb_cr_miroir|descends ici pour la reine, et pour les gens des Hautes-Eaux|descends ici pour qu'on dise un jour que c'est toi qui as ouvert la Banque, et pour ne plus penser à l'escalier de la cave d'Odeline}}.",
    ],
    choices: [
      { label: "Frapper le diapason contre la colonne d'ambre", if: { item: "diapason" }, why: "Il te faudrait le diapason des Taiseurs.", hide: { seen: "IVB_cr_pierre_chant" }, fx: { recharge: { echo: 3 } }, to: "IVB_cr_pierre_chant" },
      { back: "IVB_crypte" },
    ] },

  IVB_cr_pierre_chant: { act: "IV", title: "Le chant de la pierre", place: "changeurs",
    text: [
      "Le diapason touche la pierre, et la note part. Elle monte dans la colonne, se perd dans la voûte, revient par toutes les colonnes à la fois, et la salle entière chante, longtemps, une seule note grave qui te traverse les dents et la poitrine. Le diapason chauffe dans ta paume. Quand le chant s'éteint enfin, le bronze vibre encore, plein, comme au premier jour.",
      { with: "lison", text: "Lison a fermé les yeux. Quand elle les rouvre, ils sont mouillés, et elle les laisse ainsi." },
      { with: "gildas", text: "Frère Gildas, debout près de la colonne, a chanté la note avec la pierre, la bouche fermée, sans le vouloir peut-être." },
    ],
    choices: [{ back: "IVB_crypte" }] },

  IVB_cr_tombeaux: { act: "IV", title: "Les niches du mur nord", place: "changeurs",
    text: [
      "Le long du mur nord, sept niches creusées dans la pierre, à hauteur d'homme, fermées chacune par une dalle scellée. Sur chaque dalle, un nom, et un croissant. Les secrétaires du chancelier Vasse, morts cette nuit-là en défendant la salle basse, que les Taiseurs sont revenus enterrer ici plus tard, sous le nez des marchands.",
      "Sur la septième dalle, l'inscription est plus longue : *{{loupe#ivb_cr_dalle|Bertrade, qui se tut|Bertrade, qui coiffait la reine et se tut sous le fer. Elle garde ce que la reine portait dans les cheveux}}.* La dalle {{pie#ivb_cr_niche|est scellée au plomb comme les autres|est scellée d'un mortier de chaux, plus tendre que les autres, et un coin s'en détache sous le doigt}}.",
      { with: "gildas", text: "Frère Gildas lit les noms un à un, à mi-voix, en touchant chaque croissant. Arrivé au septième, il se tourne vers toi. « Les Taiseurs ont un mot pour ceux-là, dit-il. On ne le prononce pas. »" },
    ],
    choices: [
      { label: "Desceller la dalle de Bertrade", hide: { any: [{ not: { any: [{ voile: "ivb_cr_dalle" }, { voile: "ivb_cr_niche" }] } }, { has: "tresor:ivb_epingle" }] }, fx: { item: "ivb_tr_epingle", clock: { tresors: 1 }, flag: "tresor:ivb_epingle", ep: ["perso", 1500] }, to: "IVB_cr_epingle" },
      { back: "IVB_crypte" },
    ] },

  IVB_cr_epingle: { act: "IV", title: "L'épingle de la reine", place: "changeurs",
    text: [
      "Derrière la dalle, un linceul de lin brun, plié sur des os légers. Sur le linceul, posée comme on pose une fleur, une longue épingle à cheveux d'or pâle, terminée par une perle baroque grosse comme une noisette, prise dans une griffe en forme de vague. L'or des Écueils, celui qu'on trouve dans les épaves des rois.",
      "Tu la prends. Tu refermes la niche, aussi bien que tu le peux, et tu remets la dalle à sa place.",
      { with: "lison", text: "Lison regarde l'épingle dans ta main, puis toi. « Elle l'a gardée trois cents ans, dit-elle. Tâche d'en faire quelque chose. »" },
    ],
    choices: [{ back: "IVB_crypte" }] },

  IVB_cr_porte: { act: "IV", title: "La porte aux sept bouches", place: "changeurs",
    text: [
      "La porte est une plaque de bronze verdi, haute de deux hommes, sans poignée ni serrure. Elle porte en relief sept visages, sept bouches fermées, en cercle, et au milieu du cercle un huitième visage, plus grand, coiffé d'une couronne basse : une reine aux lèvres ouvertes, et dans sa bouche ouverte, un trou noir, rond, large comme un poing.",
      "Sur le linteau de pierre, une ligne : *{{loupe#ivb_cr_linteau|Ici se tait la reine|Ici se tait la reine. Qui garde sa parole, qu'il la lui rende dans la bouche}}.*",
      "Autour de la porte, sur les dalles, des traces de pics et de leviers, de plusieurs époques. Les Marrel ont essayé. Sur le bronze, à hauteur de main, des rayures fraîches, et des éclats de métal neuf.",
      { with: "lison", text: "Lison s'est approchée de la bouche de la reine et la regarde sans la toucher. « Il faut lui parler, dit-elle. Comme on parle chez nous. Mais qu'est-ce qu'on lui dit ? »" },
    ],
    choices: [
      { label: "Dire dans la bouche de la reine : « Je garde ta parole »", hide: { not: { voile: "ivb_cr_langue" } }, fx: { ep: ["histoire", 2000] }, to: "IVB_cache" },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "social", diff: 0, label: "Lison parle en double dans la bouche de bronze", help: [{ if: { voile: "ivb_cr_linteau" }, v: 15 }] },
        win: { fx: { conf: { lison: 10 }, ep: ["histoire", 1500] }, to: "IVB_cache" }, lose: { to: "IVB_cr_force" } },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "savoir", diff: 0, label: "Gildas chante la prière des Taiseurs", help: [{ if: { voile: "ivb_cr_linteau" }, v: 15 }] },
        win: { fx: { conf: { gildas: 10 }, ep: ["histoire", 1500] }, to: "IVB_cache" }, lose: { to: "IVB_cr_force" } },
      { label: "Frapper le diapason et le présenter à la bouche de la reine", if: { item: "diapason" }, why: "Il te faudrait le diapason des Taiseurs.", test: { dom: "magie", diff: -10, label: "Faire chanter le bronze", help: [{ if: { voile: "ivb_cr_linteau" }, v: 15 }, { if: { has: "taiseurs:serment" }, v: 15 }] },
        win: { fx: { ep: ["histoire", 1500] }, to: "IVB_cache" }, lose: { to: "IVB_cr_force" } },
      { label: "Parler dans la bouche, en double, comme on te l'a appris", if: { has: "taiseurs:serment" }, why: "Il faudrait savoir la double parole des Taiseurs.", fx: { ep: ["histoire", 1500] }, to: "IVB_cache" },
      { label: "Forcer la porte avec la pelle des Marrel", to: "IVB_cr_force" },
    ] },

  IVB_cr_force: { act: "IV", title: "Le piège de la porte", place: "changeurs",
    text: [
      "Le bronze grince, cède d'un doigt, et quelque chose se déclenche dans le mur avec un bruit de chaîne. Par la bouche de la reine, de l'eau jaillit, froide, salée, en un jet épais comme le bras. Puis d'autres jets, par les sept bouches fermées, qui s'ouvrent toutes ensemble. Une vieille citerne se vide dans la crypte.",
      "L'eau monte vite, aux chevilles, aux genoux. Tu t'acharnes sur la porte, l'eau aux cuisses, le bruit énorme sous la voûte. Et la porte, tirée par le poids de l'eau qui s'écoule derrière elle, s'ouvre lentement, toute seule, quand la citerne est vide. Les Taiseurs l'ont voulu ainsi : on entre, mais trempé{e}, et toute la Banque l'a entendu.",
      { with: "any", text: "Tes compagnons s'en sont tirés comme toi, en se tenant aux colonnes. Personne n'est noyé." },
    ],
    fx: { pv: -5, flag: "ivb:alerte" },
    choices: [{ label: "Entrer, ruisselant{e}", to: "IVB_cache" }] },

  IVB_cache: { act: "IV", title: "La cinquième cache", place: "changeurs",
    text: [
      "Derrière la porte, une chambre ronde, petite, voûtée en coupole. Au centre, un lutrin de pierre, et sur le lutrin, un coffret de plomb, scellé d'un croissant. Rien d'autre. Les Taiseurs ont laissé l'or ailleurs. Ici, ils ont laissé une voix.",
      "Le plomb est mou ; il cède sous la lame. Dedans, roulé dans une soie cirée restée nette en trois siècles, un feuillet de vélin, couvert d'une écriture serrée de chancellerie. Le cinquième feuillet du Registre de la Muette.",
      "*Moi, Aymeric Vasse, chancelier, j'écris ce que la reine dit par signes, la troisième nuit après. Elle dit qu'ils sont entrés par la salle basse. Elle dit que l'homme qui tenait le couteau {{loupe#ivb_cache_nom|portait un masque, et qu'elle ne le connaît pas|était Jourdain Marrel, fils d'Arnoul Marrel, et qu'elle le connaissait depuis l'enfance, car il venait à la cour vendre du drap}}. Elle dit qu'elle pardonne à ceux qui ont signé par peur. Elle ne pardonne pas aux autres.*",
      { with: "lison", text: "Lison lit par-dessus ton épaule, en remuant les lèvres. Puis elle s'assied par terre, contre le lutrin, comme quelqu'un qui a marché trop longtemps." },
      { with: "gildas", text: "Frère Gildas regarde le feuillet de loin, avec quelque chose de très las dans le visage, comme on regarde un enfant qu'on a cherché toute une nuit." },
      { with: "salome", text: "Salomé siffle entre ses dents. « Ça, dit-elle, ça vaut plus que toutes les perles du dessus. »" },
      { with: "fauvette", text: "Fauvette tourne autour du lutrin, cherche un double fond, en vain. « Du papier, dit-elle. Tout ça pour du papier. » Elle a la voix qui tremble un peu." },
    ],
    fx: { relic: "f_banque", flag: "banque:ouverte", quest: "IV_banque", ep: ["histoire", 6000], fac: { taiseurs: 10 } },
    choices: [
      { label: "Ressortir dans la crypte avec le feuillet", big: true, to: "IVB_cs_attend" },
    ] },
});

// ==================================================================== Lothaire's study
Object.assign(P, {
  IVB_cabinet: { act: "IV", title: "La porte du cabinet", place: "changeurs",
    text: [
      "L'escalier de pierre monte en vis jusqu'au deuxième étage, sans une lanterne. En haut, un palier, et une seule porte, de chêne sombre, avec une plaque de cuivre gravée : *L. Brunel, recherches.* Sous la plaque, une serrure {{pie#ivb_cab_serrure|de cuivre, solide, à trois gorges|de cuivre, de la main d'Agasse, avec le même jeu au panneton que toutes les clés qu'il a faites pour la Banque : n'importe laquelle de ses clés l'ouvre en forçant un peu}}.",
      "Aucune lumière sous la porte. Le cabinet est vide, à cette heure. Lothaire Brunel est ailleurs dans la Banque, ou dans la ville, ou derrière toi.",
      { with: "salome", text: "Salomé pose la main à plat sur la plaque de cuivre, sur le nom gravé. Elle la retire et s'essuie la paume sur sa cuisse." },
    ],
    choices: [
      { label: "Essayer une clé des cellules dans la serrure", hide: { not: { any: [{ voile: "ivb_cab_serrure" }, { seen: "IVB_cellules" }] } }, fx: { ep: ["perso", 1000] }, to: "IVB_cab_piece" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette et la serrure de cuivre" },
        win: { fx: { conf: { fauvette: 3 } }, to: "IVB_cab_piece" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_cab_piece" } },
      { label: "Crocheter la serrure", test: { dom: "discretion", diff: -10, label: "Ouvrir la porte de Lothaire", help: [{ if: { item: "crochets" }, v: 15 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "IVB_cab_piece" }, lose: { fx: { flag: "ivb:alerte" }, to: "IVB_cab_piece" } },
      { label: "Enfoncer la porte d'un coup d'épaule", test: { dom: "combat", diff: 0, label: "Enfoncer une porte de chêne" },
        win: { fx: { flag: "ivb:alerte" }, to: "IVB_cab_piece" }, lose: { fx: { flag: "ivb:alerte", pv: -2 }, to: "IVB_cab_piece" } },
      { back: "IVB_sous" },
    ] },

  IVB_cab_piece: { act: "IV", title: "Le cabinet de Lothaire", place: "changeurs", backName: "le cabinet de Lothaire",
    text: [
      { first: true, text: "Le cabinet de Lothaire Brunel ressemble à la boutique d'Odeline comme un hôtel ressemble à une chaumière. Les murs sont couverts d'étagères de noyer, et sur les étagères, rangés, étiquetés, des objets retrouvés : un astrolabe, des clés de toutes tailles, des fioles, une mâchoire de requin, un chapelet d'ambre, une poupée de cire sans visage. Chaque objet porte une petite étiquette à l'encre violette, avec une date et un lieu." },
      { first: true, text: "Au mur du fond, une grande carte du delta, de la ville jusqu'à la mer. Elle {{pie#ivb_cab_carte|est piquée d'épingles à tête d'argent, sans ordre visible|est piquée de six épingles à tête d'argent, aux six caches des Taiseurs, et cinq d'entre elles sont à la bonne place ; la sixième, en mer, est plantée à une lieue de Sorne}}. Sur le bureau, sous une lampe éteinte, des carnets reliés de cuir gris, un étui de velours, et un portefeuille de maroquin rouge." },
      { again: true, text: "Le cabinet de Lothaire, ses étagères, ses étiquettes violettes, la carte du delta au mur du fond." },
      "Sur l'étagère du bas, à part, comme une chose qu'on range à l'écart, un coffret de bois noir, cerclé de cuivre vert, encore blanc de sel dans les coins.",
      { with: "salome", first: true, text: "Salomé a vu le coffret avant toi. Elle s'est arrêtée au milieu de la pièce, et elle reste immobile." },
    ],
    choices: [
      { label: "Lire les carnets de cuir gris", to: "IVB_cab_carnets" },
      { label: "Ouvrir l'étui de velours", to: "IVB_cab_etui" },
      { label: "Le coffret blanc de sel", to: "IVB_cab_coffret" },
      { label: "Le portefeuille de maroquin rouge", to: "IVB_cab_feuillet" },
      { label: "Une clé tourne dans la serrure", big: true, hide: { any: [{ has: "ivb:lothaire_fini" }, { not: { any: [{ seen: "IVB_cab_carnets" }, { seen: "IVB_cab_coffret" }, { seen: "IVB_cab_feuillet" }] } }] }, to: "IVB_lothaire" },
      { back: "IVB_sous" },
    ] },

  IVB_cab_carnets: { act: "IV", title: "Les carnets de Lothaire", place: "changeurs",
    text: [
      "Les carnets sont tenus d'une écriture fine, régulière, à l'encre violette. Des dates, des lieux, des sommes. Des noms : Rigaud, Sabran, T. G., et d'autres, chacun avec un prix à côté. Lothaire Brunel achète des gens comme on achète des cartes, et il note ce qu'il en a tiré.",
      "Tu tournes les pages à rebours, vers il y a trois ans. *Écueil des Sourds, 3 mai. {{loupe#ivb_carnet_corde|La plongeuse de la Brac s'est noyée en remontant. Accident de plongée, la corde a lâché sur l'arête|J'ai coupé la ligne de la Brac quand le coffret est arrivé à la surface. Elle l'avait vu ouvert, au fond. Elle aurait parlé à la Banque}}.*",
      "Et plus loin, la semaine des Lanternes : *La vieille Carrus. {{loupe#ivb_carnet_odeline|Marché conclu pour le Beffroi, livraison à la fin du mois|Morte avant la vente. Ce n'est pas nous. Chercher qui. Un moine est passé sur le quai cette nuit-là}}.*",
      "La dernière page écrite date d'hier : *L'élève de la Carrus viendra par en bas. {{loupe#ivb_carnet_veille|Laisser faire et observer|Laisser faire jusqu'à la crypte. Il ouvrira ce que nous n'avons jamais ouvert. Ensuite, Madame décidera}}.*",
      { with: "salome", after: "voile:ivb_carnet_corde", text: "Salomé lit par-dessus ton épaule, en silence. Elle pose seulement le doigt sur la ligne, la date, le nom de l'écueil, et elle appuie si fort que l'ongle blanchit." },
    ],
    fx: { item: "ivb_carnet_lothaire" },
    choices: [{ back: "IVB_cab_piece" }] },

  IVB_cab_etui: { act: "IV", title: "L'étui de velours", place: "changeurs",
    text: [
      "L'étui est vide. Il a la forme d'un petit cornet courbe, un creux dans le velours noir, poli par l'usage : Lothaire le porte sur lui. À côté du creux, dans un compartiment, une fiole de verre bleu et une lettre pliée.",
      "La fiole sent l'huile de camomille et le laudanum. La lettre est d'un médecin de l'île : *Monsieur, {{loupe#ivb_lo_sourd|votre oreille se porte aussi bien qu'on peut l'espérer à votre âge|votre oreille gauche est perdue, et la droite s'en va. Ce que vous portez à l'oreille vous mange l'ouïe ; dans un an, vous n'entendrez plus que lui}}.*",
      "Dans la doublure de l'étui, une étiquette de soie, cousue d'une main ancienne : *{{loupe#ivb_etui|Fait au Mont|Fait au Mont pour le second secrétaire. Qu'il entende, et qu'il se taise. Qui le prend sans le serment, il le prend par l'oreille}}.*",
    ],
    choices: [{ back: "IVB_cab_piece" }] },

  IVB_cab_coffret: { act: "IV", title: "Le coffret de La Pimpante", place: "changeurs",
    text: [
      "Le coffret est lourd, en bois de fer noirci par la mer, cerclé de cuivre que le sel a verdi. Une plaque gravée, à moitié rongée, porte encore un nom de navire : *La Pimpante.* À l'une des poignées est nouée une corde de chanvre, longue d'un pied, et coupée net, d'un seul coup de lame. Le nœud tient encore.",
      "Dedans, sur un lit de varech sec, des pièces d'or à l'effigie d'une reine, une centaine, et une petite tablette de plomb gravée d'un croissant. C'est pour ça. C'est pour cette poignée d'or et ce bout de plomb.",
      { with: "salome", text: "Salomé s'est agenouillée devant le coffret. Elle touche le nœud, du bout des doigts, sans le défaire. « Un nœud de chaise doublé, avec une clé, dit-elle d'une voix très calme. C'est Maïwenn qui le faisait comme ça. Je lui ai appris, et elle ajoutait la clé. Personne d'autre au monde. » Elle reste à genoux. « Il a coupé au-dessus du nœud. Elle remontait avec. »" },
      { if: { has: "iie:coffret_reine" }, text: "Sous le varech, au fond, une ficelle de soie rouge, coupée, de celles qui lient une liasse de papiers. La liasse n'y est plus." },
      { without: "salome", text: "Le nœud est un nœud de chaise doublé, avec une clé en plus, un nœud de plongeuse soigneuse. La coupure est au-dessus du nœud, du côté de celui qui tenait la corde en surface." },
    ],
    choices: [
      { label: "Emporter le coffret, avec sa corde", hide: { item: "ivb_coffret_pimpante" }, fx: { item: "ivb_coffret_pimpante", flag: ["ivb:coffret", "salome:maiwenn"], gold: 600, conf: { salome: 15 }, ep: ["histoire", 2000] }, back: "IVB_cab_piece" },
      { back: "IVB_cab_piece" },
    ] },

  IVB_cab_feuillet: { act: "IV", title: "Le portefeuille rouge", place: "changeurs",
    text: [
      "Le portefeuille de maroquin rouge s'ouvre sur des chemises de papier fort, chacune avec une étiquette violette : des copies de chartes, des relevés de marées, une liste des Vasse des Joncs-Bas avec leurs âges. Au fond, dans une chemise de soie, une feuille de vélin, couverte de cette écriture serrée de chancellerie que tu connais maintenant.",
      { if: { all: [{ not: { relic: "f_saline" } }, { any: [{ has: "vole:f_saline" }, { has: "saline:ouverte" }] }] }, text: "Le feuillet de la Saline. Celui que Lothaire t'a pris aux Joncs-Bas, la nuit de la tempête. Il porte encore, dans un coin, une tache brune de vase et de suie." },
      { if: { all: [{ not: { relic: "f_ecueils" } }, { any: [{ has: "vole:f_ecueils" }, { has: "ecueils:ouverte" }] }] }, text: "Le feuillet des Écueils. Celui que Lothaire t'a pris aux Joncs-Bas, la nuit de la tempête. Le vélin a gardé une odeur de mer et, dans un coin, un cerne de sel." },
      { if: { all: [{ any: [{ relic: "f_saline" }, { not: { has: "saline:ouverte" } }] }, { any: [{ relic: "f_ecueils" }, { not: { has: "ecueils:ouverte" } }] }] }, text: "Une copie, faite par Lothaire lui-même, d'un feuillet qu'il a vu et qu'il n'a pas pu prendre. Il y a noté en marge, à l'encre violette, ses questions. Elles sont rares." },
    ],
    choices: [
      { label: "Reprendre le feuillet de la Saline", hide: { not: { all: [{ not: { relic: "f_saline" } }, { any: [{ has: "vole:f_saline" }, { has: "saline:ouverte" }] }] } }, fx: { relic: "f_saline", flag: "feuillet:repris", ep: ["histoire", 2500] }, back: "IVB_cab_piece" },
      { label: "Reprendre le feuillet des Écueils", hide: { not: { all: [{ not: { relic: "f_ecueils" } }, { any: [{ has: "vole:f_ecueils" }, { has: "ecueils:ouverte" }] }] } }, fx: { relic: "f_ecueils", flag: "feuillet:repris", ep: ["histoire", 2500] }, back: "IVB_cab_piece" },
      { label: "Brûler la copie à la lampe", hide: { not: { all: [{ any: [{ relic: "f_saline" }, { not: { has: "saline:ouverte" } }] }, { any: [{ relic: "f_ecueils" }, { not: { has: "ecueils:ouverte" } }] }] } }, once: true, fx: { flag: "ivb:copie_brulee", ep: ["perso", 1000] }, back: "IVB_cab_piece" },
      { back: "IVB_cab_piece" },
    ] },
});

// ==================================================================== Lothaire
Object.assign(P, {
  IVB_lothaire: { act: "IV", title: "Lothaire Brunel", place: "changeurs",
    text: [
      { if: { not: { has: "ivb:lo_crypte" } }, text: "La porte s'ouvre sans hâte. Lothaire Brunel entre, referme derrière lui, pose sa canne contre le chambranle et retire ses gants gris, un doigt après l'autre. Il a l'air de quelqu'un qui arrive à l'heure dite. Au creux de son oreille gauche, le petit cornet d'os cerclé d'argent." },
      { if: { has: "ivb:lo_crypte" }, text: "Lothaire Brunel s'avance d'un pas hors du cercle des gardes, sur un signe de Corisande. Il retire ses gants gris, un doigt après l'autre, et les glisse dans sa ceinture. Au creux de son oreille gauche, le petit cornet d'os cerclé d'argent." },
      "« Vous pensez : il était derrière moi depuis le début, dit-il. Depuis la Monnaie, les égouts, le bal, peu importe. Oui. Vous ouvrez, je ramasse. C'est ainsi que nous travaillons, vous et moi, depuis le Beffroi. »",
      "Il regarde ce que tu tiens, et il sourit. « Vous dites que vous ne me donnerez rien. Vous pensez à votre dague, au feuillet, à la fenêtre. » Il se tait un instant. « Je {{oreille#ivb_lo_peur|n'ai aucune envie de vous faire du mal, croyez-le|n'entends presque plus rien d'autre que vos pensées, et elles hurlent, et je voudrais que tout le monde se taise enfin}}. »",
      { if: { has: "feuillet:repris" }, text: "« Vous êtes passé{e} par mon portefeuille rouge, dit-il, et vous avez repris votre bien. Je l'avais rangé avec soin. Je l'avais lu, aussi. Ce qui est lu ne se reprend pas. »" },
      { if: { has: "ivb:copie_brulee" }, text: "« Vous pensez à ma copie, dit-il, et à la lampe où vous l'avez brûlée. Je l'ai recopiée trois fois, et j'en sais chaque ligne par cœur. Vous avez brûlé une feuille, rien de plus. »" },
      { if: { has: "iv:plainte_brunel" }, text: "« La capitaine Mabire a écrit une plainte contre moi, ajoute-t-il, pour un allumeur ivrogne. Elle dort dans un tiroir du Conseil, sous trois autres. Madame l'a lue en riant. » Sa main gauche monte à son oreille et redescend." },
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé a sorti son coutelas de bord. Elle le tient bas, le long de la cuisse, sans le lever. Lothaire la voit, et pour la première fois, son sourire se fige." },
      { if: { has: "taiseurs:serment" }, text: "Tu sens le dessous de tes propres pensées, comme on te l'a appris aux Joncs-Bas, et tu le tiens fermé." },
    ],
    choices: [
      { label: "Lui montrer ce que Corisande a écrit sur lui au prévôt", hide: { not: { voile: "ivb_cs_trahit" } }, fx: { ep: ["histoire", 2000] }, to: "IVB_lo_allie" },
      { label: "Lui répondre, à voix haute et à voix basse", labels: [{ if: { has: "taiseurs:serment" }, label: "Lui répondre en double, la parole dessus, la pensée dessous" }], to: "IVB_lo_paroles" },
      { label: "Laisse-moi faire", who: "salome", hide: { not: { has: "salome:maiwenn" } }, test: { dom: "combat", diff: 0, label: "Salomé et l'homme qui a coupé la corde" },
        win: { fx: { conf: { salome: 10 } }, to: "IVB_lo_salome" }, lose: { fx: { pv: -3 }, to: "IVB_lo_salome" } },
      { label: "Dégainer", fight: { title: "Lothaire Brunel", enemies: [{ id: "ivb_lothaire", n: 1 }],
        win: { fx: { ep: ["histoire", 3000] }, to: "IVB_lo_vaincu" }, lose: { fx: { flag: ["ivb:prison", "ivb:lothaire_fini"] }, to: "IVB_pr_cellule" },
        flee: { label: "Sauter par la fenêtre, sur le toit de la cour", dom: "discretion", diff: -10, to: "IVB_lo_fuit" } } },
    ] },

  IVB_lo_paroles: { act: "IV", title: "Ce que l'un pense de l'autre", place: "changeurs",
    text: [
      "Vous vous tenez à trois pas l'un de l'autre, et vous parlez. Ce que tu dis, il l'entend ; ce que tu penses dessous, il l'entend aussi, avec un temps de retard, comme un écho. Et toi, avec ton cornet, tu entends sous ses mots à lui. Deux chercheurs, deux oreilles volées aux mêmes morts.",
      "« Vous croyez que les Taiseurs vous ont choisi{e}, dit-il. Ils ont choisi votre maîtresse, avant vous, et regardez où elle a fini. Ils choisiront quelqu'un d'autre après vous. » Il penche la tête. « Vous pensez : il a peur. Oui. Je {{oreille#ivb_lo_madame|sers Madame depuis vingt ans, et elle me le rend|sais que Madame me jettera le jour où je ne servirai plus, et ce jour-là est arrivé avec vous}}. »",
      { if: { has: "ivb:lothaire_vu" }, text: "Tu as déjà eu ce cornet tourné vers toi. Tu sais maintenant qu'il entend la pensée avec un temps de retard, comme un homme qui lit par-dessus une épaule, et tu ralentis la tienne." },
      { if: { voile: "ivb_lo_sourd" }, text: "Il garde la tête un peu tournée vers la droite, toujours, pour présenter le cornet du bon côté. Il te regarde de profil, comme un oiseau." },
    ],
    choices: [
      { label: "Passer à sa gauche, du côté de l'oreille morte, et penser à voix basse", hide: { not: { voile: "ivb_lo_sourd" } }, fx: { ep: ["perso", 1500] }, to: "IVB_lo_paroles2" },
      { label: "Lui dire qu'il a coupé la corde de Maïwenn Brac, et le penser plus fort encore", hide: { not: { voile: "ivb_carnet_corde" } }, fx: { ep: ["perso", 1500] }, to: "IVB_lo_paroles2" },
      { label: "Lui dire ce que Madame fera de lui", hide: { not: { voile: "ivb_lo_madame" } }, fx: { ep: ["perso", 1000] }, to: "IVB_lo_paroles2" },
      { label: "Lui rappeler ce qu'il voulait de ton cornet, aux Écueils : entendre ce que Madame se dit à elle-même", hide: { not: { has: "iie:lothaire_veut" } }, fx: { ep: ["perso", 1000] }, to: "IVB_lo_paroles2" },
      { label: "Soutenir son regard, et ne penser à rien", labels: [{ if: { has: "taiseurs:serment" }, label: "Fermer le dessous, comme aux Joncs-Bas" }],
        test: { dom: "magie", diff: -10, label: "Vider sa tête devant une oreille", help: [{ if: { has: "taiseurs:serment" }, v: 20 }, { if: { has: "miroir:vu" }, v: 10 }, { if: { has: "ivb:lothaire_vu" }, v: 10 }] },
        win: { to: "IVB_lo_paroles2" }, lose: { to: "IVB_lo_fuit" } },
    ] },

  IVB_lo_paroles2: { act: "IV", title: "Le dernier mot", place: "changeurs",
    text: [
      "Lothaire a cessé de sourire. Il a porté la main à son oreille, au cornet, comme on porte la main à une plaie. Ce que tu lui as envoyé, en mots et dessous, l'a atteint à l'endroit exact de sa faiblesse : il entend tout, et il doit tout entendre.",
      "« Taisez-vous, dit-il. Taisez-vous, je vous en prie. » Puis, plus bas : « Je vous {{oreille#ivb_lo_offre|laisse partir, si vous me donnez le feuillet|donne tout ce que vous voulez, l'or du coffret, mes carnets, ma parole, si seulement vous arrêtez de penser si fort}}. »",
    ],
    choices: [
      { label: "Lui prendre le cornet jumeau de l'oreille", fx: { ep: ["histoire", 2500] }, to: "IVB_lo_vaincu" },
      { label: "Le laisser se taire, et le regarder", test: { dom: "social", diff: 0, label: "Laisser un homme à son silence", help: [{ if: { voile: "ivb_lo_offre" }, v: 20 }] },
        win: { fx: { ep: ["histoire", 2000] }, to: "IVB_lo_vaincu" }, lose: { to: "IVB_lo_fuit" } },
    ] },

  IVB_lo_vaincu: { act: "IV", title: "Lothaire à terre", place: "changeurs",
    text: [
      { outcome: "win", text: "Lothaire est à genoux, une main sur le flanc, sa canne-épée brisée à côté de lui. Il respire par la bouche." },
      "Tu lui ôtes le cornet jumeau de l'oreille. Il se laisse faire. C'est un petit cornet courbe, en os jauni, cerclé d'argent, le frère du tien, avec une ligne gravée illisible. Tiède encore. Lothaire porte les deux mains à ses oreilles, et il ferme les yeux, et quelque chose dans son visage se détend, comme chez un homme qui sort enfin d'une pièce trop bruyante.",
      "« Voilà, dit-il. Voilà. » Il rit, un peu. « C'est très calme, en fait. »",
      { with: "salome", text: "Salomé est derrière lui, le coutelas à la main. Elle te regarde, et attend." },
    ],
    fx: { flag: ["lothaire:vaincu", "ivb:lothaire_fini"], item: "ivb_cornet_jumeau", fac: { banque: -5 } },
    choices: [
      { label: "Le tuer", fx: { mark: 1 }, to: "IVB_lo_mort" },
      { label: "Laisser Salomé décider", hide: { not: { all: [{ present: "salome" }, { has: "salome:maiwenn" }] } }, to: "IVB_lo_salome" },
      { label: "Le ligoter avec le cordon des rideaux et le laisser là", hide: { has: "ivb:lo_crypte" }, fx: { ep: ["perso", 1000] }, back: "IVB_sous" },
      { label: "Le laisser à genoux et te tourner vers Corisande", hide: { not: { has: "ivb:lo_crypte" } }, to: "IVB_cs_parle" },
    ] },

  IVB_lo_salome: { act: "IV", title: "Salomé et Lothaire", place: "changeurs",
    text: [
      "Salomé tient Lothaire par le col, le coutelas contre sa gorge, la main sûre. Lothaire aussi est calme. Il la regarde d'en bas avec une curiosité tranquille.",
      "« Elle m'a regardé, dit-il. Au moment où j'ai coupé. Elle était à quatre brasses, elle tenait la corde, elle a levé la tête et elle m'a regardé. Vous voulez savoir ce qu'elle pensait ? Je l'ai entendu, avec ça. » Il montre son oreille. « Elle pensait à vous. »",
      "Salomé ferme les yeux une seconde. Quand elle les rouvre, ils sont secs. « {{oreille#ivb_salome_choix|Je vais te tuer, Brunel, maintenant|Je voudrais que Maïwenn soit là pour me dire quoi faire, et elle n'est pas là, et c'est toi qui l'as fait}} », dit-elle.",
    ],
    choices: [
      { label: "Ne rien dire, et la laisser faire", fx: { conf: { salome: 5 } }, to: "IVB_lo_mort" },
      { label: "Lui rappeler ce qu'elle t'a dit en mer : c'était le couteau qui lui faisait peur", hide: { any: [{ not: { has: "iim:salome_couteau" } }, { voile: "ivb_salome_choix" }] }, fx: { conf: { salome: 10 }, flag: ["lothaire:vaincu", "ivb:salome_epargne"], ep: ["histoire", 1500] }, to: "IVB_lo_epargne" },
      { label: "Lui dire que Maïwenn n'est pas là, mais que toi tu l'es", hide: { not: { voile: "ivb_salome_choix" } }, fx: { conf: { salome: 15 }, flag: ["lothaire:vaincu", "ivb:salome_epargne"], ep: ["histoire", 2000] }, to: "IVB_lo_epargne" },
      { label: "Retenir son bras", test: { dom: "social", diff: -10, label: "Arrêter une vengeance de trois ans" },
        win: { fx: { conf: { salome: -5 }, flag: ["lothaire:vaincu", "ivb:salome_epargne"] }, to: "IVB_lo_epargne" }, lose: { fx: { conf: { salome: -10 } }, to: "IVB_lo_mort" } },
    ] },

  IVB_lo_epargne: { act: "IV", title: "Le coutelas baissé", place: "changeurs",
    text: [
      "Salomé baisse le coutelas. Elle lâche le col de Lothaire, qui retombe assis contre le bureau. Elle essuie la lame sur son pantalon, une fois, alors qu'elle est propre, et la remet au fourreau.",
      "« Le Guet, dit-elle. Le tribunal. Le gibet du port, devant tous les plongeurs de Port-Vasier. » Elle regarde Lothaire. « Ça prendra du temps. J'ai le temps. »",
      "Lothaire hoche la tête, lentement. Il a l'air de ne plus entendre grand-chose, et de s'en trouver bien.",
    ],
    choices: [
      { label: "Le ligoter et le laisser pour le Guet", hide: { has: "ivb:lo_crypte" }, back: "IVB_sous" },
      { label: "Te tourner vers Corisande", hide: { not: { has: "ivb:lo_crypte" } }, to: "IVB_cs_parle" },
    ] },

  IVB_lo_mort: { act: "IV", title: "La fin de Lothaire Brunel", place: "changeurs",
    text: [
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé le fait vite, d'un seul geste, comme on tranche une amarre. Elle le retient en tombant, le couche sur le côté, et reste un moment accroupie près de lui. Puis elle se relève." },
      { if: { not: { all: [{ present: "salome" }, { has: "salome:maiwenn" }] } }, text: "C'est vite fait. Lothaire laisse faire. Il te regarde jusqu'au bout, avec cette curiosité polie qu'il avait déjà au bal, et il dit, juste avant : « Vous pensez que ça vous soulagera. » Ce sont ses derniers mots." },
      "Lothaire Brunel est couché sur le parquet de son cabinet, parmi ses objets retrouvés, chacun avec son étiquette violette. Personne ne lui en mettra une.",
      { if: { not: { item: "ivb_cornet_jumeau" } }, text: "Le cornet jumeau a glissé de son oreille et roulé sous le bureau. Tu le ramasses." },
    ],
    fx: { flag: ["lothaire:mort", "ivb:lothaire_fini"], item: "ivb_cornet_jumeau", fac: { banque: -10 }, ep: ["histoire", 1500] },
    choices: [
      { label: "Quitter le cabinet", hide: { has: "ivb:lo_crypte" }, back: "IVB_sous" },
      { label: "Te tourner vers Corisande", hide: { not: { has: "ivb:lo_crypte" } }, to: "IVB_cs_parle" },
    ] },

  IVB_lo_allie: { act: "IV", title: "Le mémoire pour le prévôt", place: "changeurs",
    text: [
      "Tu lui tends le brouillon de Corisande. Il le lit sans le prendre, en se penchant. Il le lit deux fois. Son visage reste immobile ; sa main gauche monte à son oreille et reste là.",
      "« Elle l'a écrit, dit-il. Je l'ai entendue le penser cent fois, en me souriant. Je me disais : elle le pense, elle ne le fera pas. » Il replie le papier avec soin, en quatre, et te le rend. « Je {{oreille#ivb_lo_allie|vous aiderai, parce que c'est mon intérêt, rien de plus|n'ai plus personne, à part vous, qui entendez comme moi, et c'est la chose la plus étrange qui me soit arrivée}}. »",
      "« Madame a peur de trois choses, dit-il encore. Le duc, la rue, et son petit-fils Bérold, qui est à l'école des cadets d'Aveline, en otage, depuis l'automne. Elle ne l'a dit à personne. Je l'ai entendu. » Il remet ses gants. « Je connais une sortie par la cour aux charbons. Et je sais ce que le prévôt a promis au duc. Vous en aurez besoin. »",
      { with: "salome", text: "Salomé garde son coutelas à la main. « Il vient avec nous, dit-elle, et il marche devant. Toujours devant. »" },
    ],
    fx: { flag: ["lothaire:allie", "ivb:lothaire_fini", "ivb:berold"], fac: { banque: -10 }, ep: ["histoire", 2500] },
    choices: [
      { label: "Le suivre", hide: { has: "ivb:lo_crypte" }, back: "IVB_sous" },
      { label: "Te tourner vers Corisande, avec Lothaire à tes côtés", hide: { not: { has: "ivb:lo_crypte" } }, to: "IVB_cs_parle" },
    ] },

  IVB_lo_fuit: { act: "IV", title: "La porte refermée", place: "changeurs",
    text: [
      { if: { not: { has: "ivb:lo_crypte" } }, text: "Lothaire recule jusqu'à la porte sans te quitter des yeux. « Vous pensez trop, dit-il, et trop fort. Ça vous perdra. » Il sort. La clé tourne de l'autre côté. Tu entends ses pas dans l'escalier, sans hâte, et sa voix, en bas, qui appelle la garde. La Banque entière se réveille sous toi." },
      { if: { has: "ivb:lo_crypte" }, text: "Lothaire recule derrière la rangée des gardes sans te quitter des yeux. « Vous pensez trop, dit-il, et trop fort. Ça vous perdra. » Il remet ses gants. « Madame, il est à vous. » Il s'en va par l'escalier, sans hâte, et personne ne le retient." },
    ],
    fx: { flag: ["ivb:alerte", "ivb:lothaire_fini", "ivb:lothaire_libre"] },
    choices: [
      { label: "Te tourner vers Corisande", hide: { not: { has: "ivb:lo_crypte" } }, to: "IVB_cs_parle" },
      { label: "Laisse-moi faire", who: "fauvette", hide: { has: "ivb:lo_crypte" }, test: { dom: "discretion", diff: 0, label: "Fauvette par les gouttières" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IVB_sous" }, lose: { fx: { flag: "ivb:prison" }, to: "IVB_pr_cellule" } },
      { label: "Descendre le long de la façade de la cour", hide: { has: "ivb:lo_crypte" }, test: { dom: "discretion", diff: -10, label: "Une façade de pierre lisse, la nuit", help: [{ if: { item: "corde" }, v: 15 }] },
        win: { to: "IVB_sous" }, lose: { fx: { flag: "ivb:prison", pv: -4 }, to: "IVB_pr_cellule" } },
      { label: "Attendre les gardes derrière la porte", hide: { has: "ivb:lo_crypte" }, fight: { title: "Le palier du cabinet", enemies: [{ id: "ivb_garde", n: 3 }],
        win: { fx: { ep: ["perso", 2500] }, to: "IVB_sous" }, lose: { fx: { flag: "ivb:prison" }, to: "IVB_pr_cellule" } } },
    ] },
});

// ==================================================================== Corisande
var LO_LA = { not: { has: "ivb:lothaire_fini" } };
Object.assign(P, {
  IVB_cs_attend: { act: "IV", title: "Corisande dans la crypte", place: "changeurs",
    text: [
      "Quand tu ressors de la chambre ronde, la crypte est pleine de lumière. Des torches, une douzaine, plantées dans les gravats des Marrel. Six gardes en manteau noir, l'arbalète armée, en arc de cercle devant la porte de bronze. Et au milieu, sur un fauteuil à haut dossier que des valets ont descendu jusqu'ici, Corisande Marrel, en robe grise, sa canne d'ébène en travers des genoux.",
      { if: LO_LA, text: "Lothaire Brunel se tient derrière le fauteuil, une main sur le dossier, ses gants gris aux doigts. Il te sourit comme on sourit à un associé." },
      { if: { has: "lothaire:allie" }, text: "Lothaire Brunel est à côté de toi, un peu en retrait, et Corisande le regarde longuement, puis elle regarde ailleurs." },
      { if: { has: "ivb:cs_bal" }, text: "« Vous cherchiez la même chose que moi, masque, dit-elle. Vous l'avez trouvée avant moi. »" },
      "« Je vous attendais, dit-elle encore. Je {{oreille#ivb_cs_attente|savais que vous viendriez, Lothaire me l'avait dit, et j'ai bien dormi|ai vu mon père et son père s'user les ongles sur cette porte, et vous l'avez ouverte en une nuit, et j'en ai les mains qui tremblent}}. Asseyez-vous, si vous trouvez une pierre propre. Nous allons parler affaires. »",
      { with: "any", text: "Tes compagnons sont sortis derrière toi. Ils se sont rangés à tes côtés, sans un geste vers leurs armes, à cause des arbalètes." },
    ],
    choices: [
      { label: "T'asseoir sur une pierre, et l'écouter", big: true, to: "IVB_cs_parle" },
      { label: "Défier Lothaire Brunel, devant elle", hide: { has: "ivb:lothaire_fini" }, fx: { flag: "ivb:lo_crypte" }, to: "IVB_lothaire" },
      { label: "Bondir sur Corisande et lui mettre ta lame sous la gorge", test: { dom: "combat", diff: -10, label: "Prendre une otage sous six arbalètes", help: [{ with: "fauvette", v: 10 }, { with: "lison", v: 5 }] },
        win: { fx: { ep: ["perso", 2000] }, to: "IVB_cs_otage" }, lose: { fx: { pv: -5, flag: "ivb:prison" }, to: "IVB_pr_cellule" } },
    ] },

  IVB_cs_parle: { act: "IV", title: "Le marché de Corisande", place: "changeurs",
    text: [
      "Corisande parle bas, sans hâte, comme dans une salle de conseil. « Je vais vous dire ce que je sais. Le reste de l'or de la reine est à Sorne, sous la mer, et vous serez à Sorne à la Grande Basse. Moi, je n'y serai pas : j'ai soixante-sept ans et une canne. Ce que je veux est simple. L'or à la Banque, pour payer le duc à la Saint-Jean. Et le Registre, brûlé. »",
      "« Je {{oreille#ivb_cs_crainte|veux sauver la République, voilà tout, et la Banque avec elle|veux revoir Bérold, mon petit-fils, que le duc garde à sa cour depuis l'automne, et que le duc pendra à la Saint-Jean si je ne paie pas}}. En échange : votre vie sauve, ce soir. Le mandat contre vous, {{oreille#ivb_cs_mandat|une affaire du Guet, que je ferai examiner|signé de ma main sans lire, sur la parole de Lothaire, et que je peux faire lever demain matin d'un mot au prévôt}}. Et une part. Le dixième. C'est plus que ce que votre maîtresse demandait. »",
      "Elle regarde le feuillet dans ta main. « Vos amis des marais appellent ce qui s'est passé ici un crime. {{oreille#ivb_cs_crime|C'est l'histoire, et l'histoire est faite|J'ai lu le registre de mon grand-père à quinze ans, la nuit, en cachette, et j'ai vomi dans ma cuvette, et le lendemain j'ai appris à compter}}. Les titres de la moitié du delta tiennent sur ces feuillets. Si vous les rendez, il y aura des procès pendant cinquante ans, et la ville aura faim pendant cinquante ans. »",
      { if: { seen: "IIID_cor_offre" }, text: "« À Orle, je vous ai offert dix mille ducats sur ma nappe, ajoute-t-elle. Ce soir, je vous offre le dixième de l'or d'une reine. Les prix montent avec ce qu'on tient dans la main. »" },
      { if: { all: [{ has: "iiid:cor_dette" }, { has: "prevot:dejoue" }] }, text: "« À Orle, je vous ai dit que je vous devrais ma maison si vous faisiez tomber le prévôt, ajoute-t-elle. Il est tombé. Je paie mes dettes : ce soir, je vous dis tout ce que je sais, et je ne vous demande rien en échange de cela. »" },
      { if: { has: "iiid:cor_refus" }, text: "« Vous m'avez déjà dit non une fois. Je repose la question. En affaires, on la repose toujours, et la réponse change plus souvent qu'on ne croit. »" },
      { if: { all: [{ has: "iiid:cor_accord" }, { not: { has: "iiid:cor_feinte" } }] }, text: "« Nous avons un marché depuis Orle. Vous l'avez tenu jusqu'à cette porte. Je vous demande seulement de le tenir jusqu'au bout. »" },
      { if: { all: [LO_LA, { item: "ivb_coffret_pimpante" }] }, text: "Lothaire regarde le coffret de La Pimpante sous ton bras. Son sourire s'est figé." },
      { with: "lison", text: "Lison, à côté de toi, se tait. Elle a croisé les bras. Elle attend de voir ce que tu vas faire, et tu sens qu'elle s'en souviendra." },
    ],
    choices: [
      { label: "Lui parler de Bérold", hide: { not: { any: [{ voile: "ivb_cs_crainte" }, { voile: "ivb_cs_peur" }, { has: "ivb:berold" }] } }, fx: { ep: ["perso", 1500] }, to: "IVB_cs_crainte" },
      { label: "Poser sur la pierre la liasse des faux actes de son coffre", hide: { not: { item: "ivb_faux_actes" } }, fx: { ep: ["perso", 1500] }, to: "IVB_cs_crainte" },
      { label: "Lui lire à voix haute sa propre lettre à l'envoyé du duc", hide: { not: { has: "ivb:lettres_corisande" } }, fx: { flag: ["ivb:berold", "ivb:lettre_lue"], ep: ["perso", 1500] }, to: "IVB_cs_crainte" },
      { label: "Lui montrer le coffret de La Pimpante, et la corde coupée", hide: { any: [{ not: { item: "ivb_coffret_pimpante" } }, { has: "ivb:lothaire_fini" }] }, fx: { flag: ["ivb:lothaire_lache", "ivb:lothaire_fini", "lothaire:vaincu"], ep: ["histoire", 1500] }, to: "IVB_cs_lothaire" },
      { label: "Accepter son marché", to: "IVB_cs_pacte" },
      { label: "Refuser", to: "IVB_cs_refus" },
    ] },

  IVB_cs_lothaire: { act: "IV", title: "La corde coupée", place: "changeurs",
    text: [
      "Tu poses le coffret sur les dalles, devant le fauteuil, et tu soulèves la corde coupée pour que la lumière des torches tombe sur le nœud. Tu dis le nom de l'écueil, la date, le nom de la plongeuse. Les gardes écoutent. Ils sont d'anciens hommes du Guet, et plusieurs d'entre eux ont des frères à Port-Vasier.",
      "Corisande regarde la corde longtemps. Puis elle lève la main, sans se retourner. « Messieurs, dit-elle, Monsieur Brunel va vous suivre au Guet. » Deux gardes prennent Lothaire par les bras. Il se laisse faire. Il te regarde, en passant, avec cette curiosité qu'il a toujours.",
      "« Vous pensez qu'elle l'a fait pour la plongeuse, dit-il. Elle l'a fait parce que c'était le moment. Elle avait déjà écrit au prévôt. » Et on l'emmène.",
      { with: "salome", text: "Salomé regarde Lothaire s'en aller entre les deux gardes. Elle a la main sur son coutelas, et la lame reste au fourreau. Quand il a disparu dans l'escalier, elle souffle, longuement, comme on remonte d'une plongée." },
    ],
    fx: { conf: { salome: 15 }, fac: { ecumeurs: 5 } },
    choices: [{ label: "Reprendre la discussion", to: "IVB_cs_crainte" }] },

  IVB_cs_crainte: { act: "IV", title: "Ce que craint Corisande", place: "changeurs",
    text: [
      "Corisande pose sa canne contre le fauteuil. Pour la première fois, elle a l'air de ce qu'elle est : une vieille femme, assise dans une cave froide, au milieu de la nuit. « Bérold a dix-neuf ans, dit-elle. Il veut être capitaine. Le duc l'a invité à son école des cadets, l'automne dernier, et je l'ai laissé partir, parce qu'on ne refuse pas une invitation du duc quand on lui doit quatre millions. »",
      "« Je {{oreille#ivb_cs_aveu|ferai ce qu'il faut pour la ville, et pour lui|ferai brûler toute la ville s'il le faut pour qu'il revienne, et je le sais, et c'est pour ça que vous devriez avoir peur de moi}}. » Elle te regarde. « Alors, faisons un marché que nous puissions tenir tous les deux. »",
      { if: { has: "ivb:lettre_lue" }, text: "Elle a écouté sa propre lettre sans t'interrompre, les yeux sur la flamme d'une torche. « Je l'ai écrite de nuit, dit-elle. On écrit mal, la nuit. »" },
      { if: { item: "ivb_faux_actes" }, text: "Elle a regardé la liasse des faux actes, sur la pierre, sans la toucher. « Mon arrière-grand-père les a fait recopier deux fois, dit-elle. Ces feuilles-là sont les originaux. Si vous les portez au Conseil, je suis morte avant vous. »" },
    ],
    choices: [
      { label: "Accepter le marché : l'or à la Banque, le mandat levé, une part, et Bérold ramené", fx: { flag: "ivb:pacte_berold" }, to: "IVB_cs_pacte" },
      { label: "Lui dire que tu ne lui promets rien, et qu'elle te laisse partir quand même", test: { dom: "social", diff: 0, label: "Faire comprendre à Corisande qu'elle a perdu", help: [{ if: { item: "ivb_faux_actes" }, v: 20 }, { if: { has: "ivb:lothaire_lache" }, v: 10 }, { if: { voile: "ivb_cs_aveu" }, v: 10 }, { if: { has: "ivb:lettres_corisande" }, v: 10 }, { if: { has: "iiid:cor_refus" }, v: 5 }] },
        win: { fx: { flag: "ivb:cs_laisse", ep: ["histoire", 2500] }, to: "IVB_cs_depart" }, lose: { to: "IVB_cs_refus" } },
      { label: "Refuser", to: "IVB_cs_refus" },
    ] },

  IVB_cs_pacte: { act: "IV", title: "Le pacte", place: "changeurs",
    text: [
      "Corisande se fait apporter une écritoire par un valet. Elle écrit elle-même, d'une écriture penchée et nette, sur ses genoux, à la lumière d'une torche qu'un garde tient au-dessus d'elle. Deux feuilles, les mêmes. Elle signe, elle te tend la plume. Tu signes à ton tour.",
      "*La maison Marrel et {hero}, du quai des Lanternes, conviennent de ce qui suit. L'or de la reine, s'il est trouvé, sera remis à la Banque pour la dette de la République. Le Registre sera remis à la maison. En retour : la vie et la liberté, le mandat levé, le dixième de l'or.*",
      { if: { has: "ivb:pacte_berold" }, text: "Au bas de la feuille, elle a ajouté une ligne, de la même écriture, plus petite : *Et Bérold Marrel ramené d'Aveline par les soins de la Banque, avant toute autre dépense.*" },
      "Elle sèche l'encre en soufflant dessus, plie sa feuille et la glisse dans sa manche. « Vous pouvez garder votre feuillet, pour l'instant, dit-elle. Vous en aurez besoin pour trouver le reste. Bonne nuit. On vous raccompagnera par la grande porte. »",
      { with: "lison", text: "Lison a tourné le dos avant que tu aies fini de signer. Elle remonte l'escalier sans t'attendre." },
      { with: "fauvette", text: "Fauvette siffle doucement. « Le dixième, dit-elle. Le dixième de l'or d'une reine. » Elle hésite entre la joie et autre chose." },
    ],
    fx: { flag: ["corisande:pacte", "mandat:leve"], gold: 2000, fac: { banque: 20, taiseurs: -15, hautes: -10 }, conf: { lison: -15, gildas: -10 }, ep: ["histoire", 3000] },
    choices: [{ label: "Sortir par la grande porte, raccompagné{e} par deux valets", big: true, to: "IVB_fin" }] },

  IVB_cs_depart: { act: "IV", title: "Corisande laisse partir", place: "changeurs",
    text: [
      "Corisande te regarde longtemps, la bouche serrée. Puis elle fait un geste de deux doigts, et les arbalètes s'abaissent, l'une après l'autre.",
      "« Allez-vous-en, dit-elle. Par où vous êtes venu{e}, je ne veux pas le savoir. Je n'ai rien vu cette nuit, et vous non plus. » Elle reprend sa canne. « Quand vous serez à Sorne, pensez à Bérold. Je ne vous demande rien d'autre. Penser. Votre maîtresse, au moins, savait penser aux autres. »",
    ],
    choices: [{ label: "Partir", to: "IVB_sortie" }] },

  IVB_cs_refus: { act: "IV", title: "Le refus", place: "changeurs",
    text: [
      "Corisande soupire, comme on soupire devant un mauvais compte. « Dommage, dit-elle. Vraiment. » Elle lève deux doigts, et six arbalètes se lèvent avec eux. « Prenez le feuillet. Ne l'abîmez pas. Le reste, je m'en moque. »",
      { if: { has: "lothaire:allie" }, text: "Lothaire Brunel, à côté de toi, retire lentement ses gants. « Madame, dit-il, vous oubliez que je connais le nom de chacun de ces hommes, et ce que chacun pense de vous. » Les arbalètes hésitent." },
      { with: "lison", text: "Lison fait tourner sa gaffe, une fois, et la plante dans le sol devant elle. Elle tient sa place." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "La crypte du palais", enemies: [{ id: "ivb_garde", n: 4 }],
        win: { fx: { flag: "ivb:cs_vaincue", fac: { banque: -15 }, ep: ["histoire", 3000] }, to: "IVB_sortie" }, lose: { fx: { flag: "ivb:prison" }, to: "IVB_pr_cellule" },
        flee: { label: "Te jeter dans le puits du palais", dom: "discretion", diff: -10, to: "IVB_sortie" } } },
      { label: "Laisse Lothaire leur parler", hide: { not: { has: "lothaire:allie" } }, test: { dom: "social", diff: 0, label: "Lothaire nomme les gardes un à un", help: [{ v: 20 }] },
        win: { fx: { ep: ["histoire", 2500] }, to: "IVB_cs_otage" }, lose: { to: "IVB_sortie" } },
      { label: "Bondir sur Corisande", test: { dom: "combat", diff: -10, label: "Prendre une otage sous six arbalètes", help: [{ with: "fauvette", v: 10 }] },
        win: { fx: { ep: ["perso", 2000] }, to: "IVB_cs_otage" }, lose: { fx: { pv: -5, flag: "ivb:prison" }, to: "IVB_pr_cellule" } },
      { label: "Tendre les poignets", fx: { flag: "ivb:prison" }, to: "IVB_pr_cellule" },
    ] },

  IVB_cs_otage: { act: "IV", title: "La traversée de la Banque", place: "changeurs",
    text: [
      "Tu tiens Corisande Marrel par le bras, ta lame contre son flanc, et vous montez ensemble l'escalier de la crypte, puis le puits, puis le couloir des chambres fortes, puis le grand escalier de marbre de la Banque. Elle marche lentement, à cause de sa canne. Les gardes suivent à dix pas, l'arbalète basse.",
      "« Vous {{oreille#ivb_cs_otage|ne sortirez pas d'ici vivant, et vous le savez|sortirez d'ici, parce que mes gardes aiment leur paie plus que moi, et je vais devoir doubler celle de demain}}, dit-elle sans tourner la tête. Mes gardes sont payés pour ça. »",
      "Dans le grand hall, la porte de la rue est fermée par une barre de fer. Corisande dit au portier de l'ôter. Il l'ôte. Dehors, l'air froid, le quai, l'eau noire. Le ciel commence à blanchir au-dessus des toits de l'île.",
      "Tu la lâches sur le perron. Elle se redresse, arrange sa manche. « Je vous retrouverai, dit-elle. Pas pour me venger. Je n'ai pas le temps. Pour faire affaire. Vous avez ce que je veux, et j'ai ce qu'il vous faudra. »",
    ],
    fx: { flag: "ivb:otage", fac: { banque: -15 }, ep: ["histoire", 2500] },
    choices: [{ label: "Disparaître dans les ruelles de l'île", big: true, to: "IVB_fin" }] },
});

// ==================================================================== the Bank's prison
Object.assign(P, {
  IVB_pr_cellule: { act: "IV", title: "Le cachot", place: "changeurs", backName: "le cachot",
    text: [
      { first: true, text: "On te fouille, on te prend tes armes, on te pousse dans un escalier, puis dans un autre. La Banque Marrel a deux prisons : les cellules des débiteurs, pour ceux qui doivent, et le cachot, plus bas, pour ceux qui savent. On t'enferme dans le cachot. Une salle voûtée de pierre grise, sans fenêtre, avec de la paille, un seau, et une grille de fer dans le sol, par laquelle monte un bruit d'eau." },
      { first: true, if: { has: "banque:ouverte" }, text: "Ils ont pris ton sac. Le feuillet leur a échappé : tu l'as glissé dans la doublure de ta botte pendant qu'on te traînait dans l'escalier. Tu le sens contre ta cheville." },
      { again: true, text: "Le cachot, la paille, le seau, la grille dans le sol et son bruit d'eau." },
      "Le geôlier vient deux fois par jour, avec une écuelle et une cruche. Ici, le jour reste dehors. On compte les écuelles.",
      { if: { not: { has: "ivb:agasse_libre" } }, text: "De l'autre côté du mur, quelqu'un frappe. Trois coups, une pause, trois coups. Un voisin." },
    ],
    choices: [
      { label: "Parler au geôlier quand il vient", hide: { seen: "IVB_pr_geolier" }, to: "IVB_pr_geolier" },
      { label: "Répondre aux coups du voisin", hide: { any: [{ seen: "IVB_pr_voisin" }, { has: "ivb:agasse_libre" }] }, to: "IVB_pr_voisin" },
      { label: "Des pas dans l'escalier, et une canne qui frappe les marches", hide: { any: [{ seen: "IVB_pr_lothaire" }, { has: "ivb:lothaire_fini" }] }, to: "IVB_pr_lothaire" },
      { label: "Chercher un moyen de sortir", big: true, to: "IVB_pr_evasion" },
      { label: "Attendre que quelqu'un vienne te chercher", with: "any", takes: 12, to: "IVB_pr_aide" },
    ] },

  IVB_pr_geolier: { act: "IV", title: "Le geôlier", place: "changeurs",
    text: [
      "Le geôlier est un homme voûté, aux mains énormes, qui pose l'écuelle à travers le guichet sans regarder dedans. Il s'appelle Mathelin, dit-il quand tu le lui demandes, et il est là depuis trente ans. « Je {{oreille#ivb_geolier|fais mon travail, rien de plus, et la Banque me paie bien|n'ai pas été payé depuis Noël, comme tous ceux d'en bas, et ma femme vend nos draps}}. »",
      "Il reste un moment devant le guichet, la cruche à la main. « C'est vous qui êtes descendu{e} sous la Banque ? dit-il enfin. Mon père disait qu'il y avait une reine, là-dessous. Il disait qu'on l'entendait, les nuits de grande marée. »",
    ],
    choices: [
      { label: "Lui proposer ce que la Banque lui doit depuis Noël, et le double", hide: { not: { voile: "ivb_geolier" } }, if: { gold: { min: 300 } }, why: "Il te faudrait quinze ducats.", fx: { gold: -300, flag: "ivb:geolier_achete", ep: ["perso", 1500] }, to: "IVB_pr_evasion" },
      { label: "Lui parler de la reine, et de ce que tu as entendu sous la Banque", hide: { not: { has: "banque:ouverte" } }, test: { dom: "social", diff: 0, label: "Toucher un geôlier", help: [{ if: { voile: "ivb_geolier" }, v: 15 }] },
        win: { fx: { flag: "ivb:geolier_achete", ep: ["perso", 1500] }, to: "IVB_pr_evasion" }, lose: { back: "IVB_pr_cellule" } },
      { back: "IVB_pr_cellule" },
    ] },

  IVB_pr_voisin: { act: "IV", title: "Le voisin", place: "changeurs",
    text: [
      "Tu frappes trois coups, une pause, trois coups. Une voix te répond, assourdie par la pierre, par un trou d'aération au ras du sol où l'on peut glisser deux doigts.",
      { if: { not: { has: "ivb:agasse_promis" } }, text: "« Agasse, dit la voix. Jocelyn Agasse, serrurier. Je suis là depuis deux mois. Ils m'ont descendu au cachot quand j'ai essayé de faire passer un mot à ma femme. »" },
      { if: { has: "ivb:agasse_promis" }, text: "« Agasse, dit la voix. Jocelyn Agasse, serrurier. » Tu lui parles d'Ursule, du panier, du quai. De l'autre côté du mur, un long silence, puis un bruit de nez qu'on mouche dans une manche." },
      "« La serrure de ces portes, dit-il, c'est moi qui l'ai faite. Elle a un défaut. Si on soulève la porte sur ses gonds en tournant le pêne avec une cuillère, elle s'ouvre. Je leur avais dit. Ils n'ont pas voulu payer la correction. » Un temps. « Je n'ai pas de cuillère. Ils me donnent la soupe dans une écuelle de bois, et je la bois au bord. »",
    ],
    fx: { flag: "ivb:truc_agasse" },
    choices: [{ back: "IVB_pr_cellule" }] },

  IVB_pr_lothaire: { act: "IV", title: "La visite de Lothaire", place: "changeurs",
    text: [
      "Lothaire Brunel entre dans le cachot avec une chaise pliante, qu'il déplie et pose devant toi, et un tabouret pour lui. Il s'assied sur le tabouret. « Asseyez-vous, je vous en prie. C'est la seule chaise de la prison, je l'ai fait descendre. » Il retire ses gants.",
      "« Je ne vais pas vous poser de questions, dit-il. Ce serait inutile. Je vais seulement rester ici, et vous allez penser. » Il penche la tête, le cornet tourné vers toi. « Vous pensez à la crypte. À une porte de bronze. À sept bouches. » Il sourit. « Merci. »",
      "Il se lève au bout d'un long moment. « Vous {{oreille#ivb_pr_lo|resterez ici jusqu'à ce que Madame décide|serez dehors avant demain, je l'entends dans votre tête, et je ne vais pas l'empêcher : vous ouvrirez la porte mieux que moi}}. » Il remporte sa chaise.",
    ],
    fx: { flag: "ivb:lothaire_vu" },
    choices: [{ back: "IVB_pr_cellule" }] },

  IVB_pr_evasion: { act: "IV", title: "La grille du sol", place: "changeurs",
    text: [
      { if: { has: "ivb:geolier_achete" }, text: "Mathelin revient à l'heure où les gardes du dessus changent. Il ouvre la porte du cachot, et il te tend ton sac, et il s'en va par l'escalier sans se retourner." },
      "La grille de fer dans le sol {{pie#ivb_pr_grille|est scellée au plomb, solide, ancienne|n'est scellée que d'un côté ; de l'autre, le plomb a été rongé par l'eau depuis longtemps, et la grille tient par son poids. Dessous, une rigole du palais descend vers la crypte}}. L'eau coule en dessous, vers le bas, vers un endroit plus profond que la prison.",
      { if: { has: "ivb:truc_agasse" }, text: "Agasse a parlé d'une cuillère. Ton écuelle de ce soir est venue avec une cuillère d'étain, par oubli." },
    ],
    choices: [
      { label: "Sortir par la porte ouverte", hide: { not: { has: "ivb:geolier_achete" } }, fx: { ep: ["perso", 1000] }, to: "IVB_pr_puits" },
      { label: "Soulever la grille par le côté rongé, et te glisser dessous", hide: { not: { voile: "ivb_pr_grille" } }, fx: { ep: ["perso", 1500] }, to: "IVB_pr_puits" },
      { label: "Soulever la porte sur ses gonds, et tourner le pêne avec la cuillère", hide: { not: { has: "ivb:truc_agasse" } }, test: { dom: "discretion", diff: 0, label: "Le défaut de la serrure d'Agasse" },
        win: { fx: { flag: ["ivb:agasse_libre", "ivb:serrure"], quest: "IVB_agasse", ep: ["perso", 2000] }, to: "IVB_pr_puits" }, lose: { fx: { pv: -2 }, to: "IVB_pr_puits" } },
      { label: "Attendre le geôlier derrière la porte, et l'assommer", test: { dom: "combat", diff: -10, label: "Un geôlier aux mains énormes" },
        win: { fx: { ep: ["perso", 1200] }, to: "IVB_pr_puits" }, lose: { fx: { pv: -4 }, back: "IVB_pr_cellule" } },
      { label: "Desceller la grille à mains nues, une nuit entière", takes: 8, test: { dom: "nature", diff: 0, label: "User le plomb avec une pierre" },
        win: { to: "IVB_pr_puits" }, lose: { fx: { pv: -2 }, to: "IVB_pr_puits" } },
    ] },

  IVB_pr_puits: { act: "IV", title: "La rigole du palais", place: "changeurs",
    text: [
      "Tu rampes dans une rigole de pierre, à plat ventre, dans l'eau froide qui coule vers le bas. Elle a été taillée à la mesure de l'eau, et tes épaules frottent les deux côtés. Tu avances au jugé. Le bruit de l'eau grandit, puis s'ouvre, d'un coup, dans un espace plus vaste.",
      { if: { has: "ivb:agasse_libre" }, before: "IVB_cel_agasse", text: "Agasse rampe derrière toi, en jurant à voix basse dans la langue des forgerons. Il te dit adieu à la première fourche : sa rigole à lui va vers la cour aux charbons, et vers Ursule." },
      { if: { not: { has: "banque:ouverte" } }, text: "Tu tombes d'une hauteur d'homme dans une salle froide, aux colonnes sculptées de roseaux. La crypte du palais. La prison de la Banque donne droit sur ce que la Banque a toujours cherché." },
      { if: { has: "banque:ouverte" }, text: "La rigole débouche dans la crypte, que tu connais. Les torches de Corisande sont éteintes. Le puits du palais, au fond, mène aux égouts, et les égouts à la ville." },
    ],
    choices: [
      { label: "Te relever, dans la crypte", hide: { has: "banque:ouverte" }, to: "IVB_crypte" },
      { label: "Prendre le puits vers les égouts", hide: { not: { has: "banque:ouverte" } }, to: "IVB_sortie" },
    ] },

  IVB_pr_aide: { act: "IV", title: "Ceux qui viennent", place: "changeurs",
    text: [
      "Tu dors, ou presque, quand un bruit te réveille. Un grattement, au-dessus de la porte. Puis un cliquetis, et la porte du cachot qui s'ouvre sur l'obscurité du couloir.",
      { with: "fauvette", text: "Fauvette passe la tête, une lanterne sourde à la main, un trousseau de clés à l'autre. « Le geôlier dort, dit-elle. Je lui ai fait boire ce que buvait la ronde. Tu viens, ou tu as pris goût à la paille ? »" },
      { with: "lison", without: "fauvette", text: "Lison est dans le couloir, trempée jusqu'à la taille, sa gaffe à la main. « Je suis entrée par l'eau, dit-elle. Comme les anguilles. On ressort pareil. »" },
      { with: "tibere", without: ["fauvette", "lison"], text: "Tibère est dans le couloir, en manteau noir à boutons d'or, une livrée de garde de la Banque trop étroite pour lui. « Pérachon me l'a prêtée, dit-il. Il dit qu'on est quittes. Vite. »" },
      { with: ["gildas"], without: ["fauvette", "lison", "tibere"], text: "Frère Gildas est dans le couloir, sa capuche baissée. Le geôlier dort assis sur sa chaise, le menton sur la poitrine. « Il avait besoin de prier, dit Gildas. Je l'ai aidé. Il prie encore. »" },
      { with: "salome", without: ["fauvette", "lison", "tibere", "gildas"], text: "Salomé est dans le couloir, son coutelas à la main, et un garde ligoté à ses pieds. « On s'en va, dit-elle. Tout de suite. »" },
    ],
    choices: [
      { label: "Les suivre", hide: { has: "banque:ouverte" }, to: "IVB_sous" },
      { label: "Les suivre", hide: { not: { has: "banque:ouverte" } }, to: "IVB_sortie" },
    ] },
});

// ==================================================================== getting out
Object.assign(P, {
  IVB_sortie: { act: "IV", title: "Sortir de la Banque", place: "changeurs",
    text: [
      { if: { has: "ivb:alerte" }, text: "La Banque entière est réveillée. Les cloches de l'île sonnent, des torches courent sur les quais, et quelqu'un crie ton signalement d'une fenêtre à l'autre. Il faut sortir, et vite." },
      { if: { not: { has: "ivb:alerte" } }, text: "La Banque dort encore, ou fait semblant. Quelque part au-dessus, une horloge sonne la quatrième heure. Il faut sortir avant l'aube et le premier commis." },
      "Tu as le feuillet contre toi, et ce que tu as pris. Il reste à rentrer.",
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison par les eaux de la reine" },
        win: { fx: { conf: { lison: 5 } }, to: "IVB_sortie_eau" }, lose: { fx: { pv: -3 }, to: "IVB_sortie_eau" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette par les toits de l'île" },
        win: { fx: { conf: { fauvette: 5 } }, to: "IVB_sortie_toits" }, lose: { fx: { pv: -3 }, to: "IVB_sortie_toits" } },
      { label: "Monter d'abord au cabinet de Lothaire Brunel", hide: { seen: "IVB_cab_piece" }, to: "IVB_cabinet" },
      { label: "Prendre la sortie de la cour aux charbons", hide: { not: { any: [{ has: "lothaire:allie" }, { has: "ivb:agasse_libre" }] } }, fx: { ep: ["perso", 1500] }, to: "IVB_fin" },
      { label: "Repartir par les égouts de la reine, seul{e}", test: { dom: "nature", diff: -10, label: "Les égouts, dans l'autre sens" },
        win: { to: "IVB_sortie_eau" }, lose: { fx: { pv: -5 }, to: "IVB_sortie_eau" } },
      { label: "Traverser le grand hall et forcer la porte de la rue", fight: { title: "Le grand hall de la Banque", enemies: [{ id: "ivb_garde", n: 3 }],
        win: { fx: { ep: ["perso", 2500] }, to: "IVB_fin" }, lose: { fx: { pv: -5 }, to: "IVB_sortie_eau" },
        flee: { label: "Te jeter dans l'escalier des caves", dom: "discretion", diff: -10, to: "IVB_sortie_eau" } } },
    ] },

  IVB_sortie_eau: { act: "IV", title: "Par l'eau", place: "changeurs",
    text: [
      "Tu redescends par le puits, tu reprends la galerie, la grille, la vanne. La marée est basse, à cette heure ; l'eau du canal te monte aux genoux, et elle coule avec toi, vers la ville. Les voûtes de la reine te ramènent sans un mot.",
      { with: "lison", text: "Lison marche devant, sans lumière. Elle chantonne, très bas, un chant de bateliers des marais, et à chaque fourche, elle tourne sans hésiter." },
      "Tu sors par une plaque de fonte, dans une ruelle derrière la halle aux poissons, à l'heure où les poissonnières arrivent avec leurs paniers. L'une d'elles te regarde sortir du trou, trempé{e}, noir{e} de vase, et elle se tait. À Salvèze, ces temps-ci, tout le monde se tait.",
    ],
    choices: [{ label: "Rentrer", big: true, to: "IVB_fin" }] },

  IVB_sortie_toits: { act: "IV", title: "Par les toits", place: "changeurs",
    text: [
      "Fauvette te fait monter par un escalier de service jusqu'aux combles de la Banque, puis par une lucarne sur les toits. Des ardoises mouillées, des chéneaux de plomb, des cheminées. L'île des Changeurs, vue d'en haut, est un seul grand toit gris troué de cours.",
      { with: "fauvette", text: "Fauvette court sur les faîtages comme dans une rue. Elle s'arrête au bord du dernier toit, au-dessus du bras d'eau, là où une poutre de grue tend son bras jusqu'à la rive d'en face. « Ne regarde pas en bas, dit-elle. Regarde-moi. » Elle passe la première, les bras écartés." },
      "Tu passes. De l'autre côté, la ville se réveille. Des fumées montent, droites, dans le petit matin.",
    ],
    choices: [{ label: "Rentrer", big: true, to: "IVB_fin" }] },

  IVB_fin: { act: "IV", title: "Le matin après la Banque", place: "salveze",
    text: [
      "Tu rentres à l'aube, avec la ville. Sur les quais, des boulangers lèvent leurs volets sur des étals presque vides, et des femmes font déjà la queue. Personne ne te regarde. Tu as dans ta chemise un feuillet de vélin qui a trois siècles, et tu marches au milieu d'eux comme quelqu'un qui revient d'une nuit de travail. C'est ce que tu es.",
      { if: { relics: { min: 4 } }, text: "Tu comptes les feuillets, une fois à l'abri, du bout des doigts. Assez pour que quelqu'un, peut-être, puisse enfin lire ce que la reine a dit." },
      { if: { has: "corisande:pacte" }, text: "Tu as aussi, dans ta poche, une feuille pliée en quatre, avec la signature de Corisande Marrel, et tu ignores encore ce qu'elle pèse." },
      { if: { has: "lothaire:mort" }, text: "Avant midi, la nouvelle court les quais : Lothaire Brunel, le chercheur de la Banque, a été trouvé mort dans son cabinet. On parle d'un voleur." },
      { if: { has: "ivb:lothaire_lache" }, text: "Avant midi, la nouvelle court les quais : la Banque a livré au Guet son propre chercheur, Lothaire Brunel, pour la noyade d'une plongeuse il y a trois ans. À Port-Vasier, quand on l'apprendra, on boira." },
      { if: { has: "ivb:debiteurs_libres" }, text: "Sur le pont des Changeurs, un vieil homme en chemise de dentelle sale, assis contre le parapet, mange une miche au soleil levant en saluant chaque passant d'une inclinaison de tête." },
      { if: { has: "ivb:agasse_libre" }, text: "Rue des Forges, un volet d'atelier s'est rouvert. On y entend une lime." },
      { if: { has: "ivb:creances_noyees" }, text: "Rue des Tanneurs, une rumeur passe de porte en porte : les reconnaissances de dettes de la Banque dorment au fond d'un puits, et les commis ne savent plus qui doit quoi. Une boulangère rit toute seule sur son seuil." },
      { if: { has: "ivb:cs_vaincue" }, text: "Avant midi, la Banque renvoie quatre gardes sans gages, pour une nuit où ils ont perdu dans la crypte devant Madame. Ils boivent leur dernière paie au Trébuchet et racontent à qui veut l'entendre comment on les a battus." },
      { if: { has: "ivb:otage" }, text: "Avant midi, la Banque fait savoir que Madame Marrel a pris froid sur son perron, à l'aube, et qu'elle ne reçoit personne. Ses gardes, eux, ont reçu le double de leur paie." },
      { if: { has: "ivb:prison" }, text: "Tes poignets portent encore la marque des cordes de la Banque, et ta chemise l'odeur de la paille du cachot. Une poissonnière te regarde passer et serre son panier contre elle." },
      { if: { all: [{ has: "ivb:plan_bal" }, { seen: "IVB_bal_salle" }] }, text: "Devant l'hôtel Marrel, des valets balaient dans la cour d'honneur des pelures d'orange et des plumes de masque. Un loup de velours flotte sur le bras d'eau." },
      { if: { all: [{ has: "ivb:plan_monnaie" }, { seen: "IVB_mo_percee" }] }, text: "Devant la Monnaie, un attroupement de fondeurs regarde le fond du grand fourneau, où la brique marquée d'une main de suie est ouverte sur un trou noir. Euphrasie Rigaud, de l'autre côté du bras d'eau, a fermé ses volets." },
      { if: { all: [{ has: "ivb:plan_commis" }, { seen: "IVB_cm_nuit" }] }, text: "Au Trébuchet, le patron efface d'un coup de chiffon une ligne de son ardoise : Isaïe Sabran n'est pas venu boire, et on dit qu'il a pris la route de l'amont avant l'aube." },
      { if: { all: [{ has: "ivb:plan_egouts" }, { seen: "IVB_eg_vanne" }] }, text: "Tu as beau te laver à la fontaine, l'odeur des égouts de la reine te suit jusqu'à midi, et les chiens du quai te flairent les chevilles." },
      { if: { all: [{ has: "ivb:rosalie_promis" }, { not: { item: "ivb_acte_rosalie" } }, { not: { has: "ivb:rosalie_libre" } }] }, text: "Rue des Dames, sous les toits de l'atelier Lesueur, une apprentie rousse attend un papier que tu n'as pas rapporté." },
    ],
    fx: { flag: "ivb:sorti" },
    choices: [
      { label: "Passer chez Ursule Agasse, rue des Forges", hide: { any: [{ not: { has: "ivb:agasse_libre" } }, { seen: "IVB_ag_retour" }] }, to: "IVB_ag_retour" },
      { label: "Rendre à Rosalie ce que tu as pris pour elle", hide: { any: [{ not: { item: "ivb_acte_rosalie" } }, { quest: "IVB_rosalie" }] }, to: "IVB_ro_rendre" },
      { back: HUB },
    ] },

  IVB_ag_retour: { act: "IV", title: "Rue des Forges", place: "salveze",
    text: [
      "L'atelier de Jocelyn Agasse a ses volets ouverts, et la forge est allumée. Jocelyn est à l'établi, en manches de chemise, une serrure ouverte devant lui. Ursule pèle des raves sur un tabouret, à côté de la porte. Quand elle te voit, elle pose son couteau et ses raves et se lève.",
      "Elle va chercher dans un pot de grès, sur l'étagère, un petit paquet de toile, et te le met dans la main. Dedans, une clé de fer à double panneton, fine, noire, et sans dents. « Il l'a faite cette nuit, dit-elle. Elle ouvre tout ce qu'il a fermé dans cette ville. Il dit qu'il n'en fera pas d'autre. »",
      "Jocelyn, à l'établi, garde la tête baissée. Il a un sourire au coin de la bouche, et sa lime va et vient.",
    ],
    fx: { item: "ivb_passe_agasse", ep: ["perso", 1000] },
    choices: [{ back: HUB }] },
});

// ==================================================================== side scenes along the plans
Object.assign(P, {
  IVB_eg_contrebandiers: { act: "IV", title: "Les passeurs de sel", place: "changeurs",
    text: [
      "Dans une niche plus large que les autres, trois hommes sont assis autour d'une lanterne posée par terre, avec des sacs de toile cirée empilés derrière eux. Ça sent le tabac de marin et le sel gris. Le plus vieux a une pipe de terre et une barbe jaunie. Les deux autres ont la main sur leur couteau avant que tu sois entré{e} dans la lumière.",
      "« Le sel de la Grisemotte, dit le vieux sans se lever, passe sous l'île depuis que la Banque a mis la gabelle à trois liards la livre. Nous, on passe dans le noir, et le noir nous garde. » Il tire sur sa pipe. « Tu vas à la Banque, toi. Ça se voit. Il y a {{oreille#ivb_passeur|une grille neuve, et tu n'y passeras pas|une grille neuve, et mon neveu a scié un barreau l'hiver dernier, et je pourrais te le dire, pour un prix}}. »",
      { with: "lison", text: "Lison s'accroupit devant la lanterne et dit quelque chose au vieux, à voix basse, dans le parler des marais. Il la regarde mieux, puis il hoche la tête." },
    ],
    choices: [
      { label: "Lui demander quel barreau, et ce que ça coûte", hide: { not: { voile: "ivb_passeur" } }, if: { gold: { min: 40 } }, why: "Il en veut deux ducats.", fx: { gold: -40, devoile: "ivb_eg_contre", ep: ["perso", 800] }, back: "IVB_eg_galerie" },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "social", diff: 0, label: "Lison parle aux gens des marais" },
        win: { fx: { devoile: "ivb_eg_contre", conf: { lison: 3 }, fac: { hautes: 3 } }, back: "IVB_eg_galerie" }, lose: { back: "IVB_eg_galerie" } },
      { label: "Leur souhaiter bonne route, et repartir", back: "IVB_eg_galerie" },
    ] },

  IVB_bal_amaury: { act: "IV", title: "Le balcon", place: "changeurs",
    text: [
      "Le balcon donne sur le bras d'eau et les toits de la ville noire. Le masque bleu s'y est retiré, seul, avec une pipe de bruyère et un verre. Il a relevé son loup sur son front. Amaury de Sauveterre, l'envoyé du duc d'Aveline. Il te regarde arriver avec la bienveillance distraite des gens qui ont l'habitude qu'on vienne leur demander quelque chose.",
      "« Vous non plus, vous ne dansez pas, dit-il. Je comprends. Danser dans une ville qui a faim, il faut être né ici. » Il souffle sa fumée vers l'eau. « Madame Marrel est une femme remarquable. {{oreille#ivb_amaury_cs|Le duc mon maître a pour elle la plus haute estime|Le duc mon maître a son petit-fils à sa cour, et elle le sait, et c'est la seule chose qui la tient}}. »",
      "« Et vous, masque, que cherchez-vous chez la Banque ? » Il sourit. « Ne répondez pas. Les gens qui répondent, dans cette ville, mentent tous. Je finis par préférer ceux qui se taisent. »",
    ],
    choices: [{ back: "IVB_bal_salle" }] },

  IVB_cm_jeu: { act: "IV", title: "Les dés du Trébuchet", place: "changeurs",
    text: [
      "Tu poses une pièce sur la table. Sabran lève les yeux, compte les pièces que tu as devant toi, et pousse les dés vers toi. On joue au passe-dix : trois dés, plus de dix, la mise est doublée ; dix ou moins, elle est perdue. Le patron regarde de loin, en essuyant un gobelet.",
      "Les dés {{pie#ivb_cm_des|sont trois cubes d'os blanchis, usés par mille mains|sont lestés : deux d'entre eux tombent sur le quatre plus souvent qu'à leur tour, et ce sont les dés du patron, qu'on donne aux commis}}. Sabran perd, encore, et regarde ses mains.",
    ],
    choices: [
      { label: "Montrer à Sabran ce que valent les dés du patron", hide: { not: { voile: "ivb_cm_des" } }, fx: { flag: "ivb:sabran_tenu", ep: ["perso", 1200] }, to: "IVB_cm_offre" },
      { label: "Jouer, et perdre exprès quelques pièces pour le mettre en confiance", if: { gold: { min: 40 } }, why: "Il te faut deux ducats à perdre.", fx: { gold: -40 }, to: "IVB_cm_offre" },
      { label: "Jouer pour gagner", test: { dom: "social", diff: -10, label: "Gagner au passe-dix" },
        win: { fx: { gold: 60 }, to: "IVB_cm_offre" }, lose: { fx: { gold: -20 }, to: "IVB_cm_offre" } },
    ] },

  IVB_tibere_aveu: { act: "IV", title: "La ligne du registre", place: "changeurs",
    text: [
      "Tibère est devant la fenêtre grillée, le dos tourné. Sur le canal, une barque passe, lentement, avec un homme qui pousse la perche. Tibère la suit des yeux jusqu'à ce qu'elle disparaisse sous le pont.",
      { if: { has: "tibere:aveu" }, text: "« Je te l'avais dit, dit-il sans se retourner. Mais tu ne l'avais pas lu. Ça fait une différence, de le lire. Pour moi aussi. »" },
      { if: { not: { has: "tibere:aveu" } }, text: "« Cinq ducats la semaine, dit-il sans se retourner. Depuis la cave d'Odeline. Je lui disais où tu allais, qui tu voyais. Rien de plus. Je me disais : rien de plus. » Il se retourne. « Je {{oreille#ivb_tib_aveu|lui disais des choses sans importance, je te le jure|lui ai dit, avant les Hautes-Eaux, par où tu sortirais de la ville, et j'ai bu les cinq ducats le soir même}}. »" },
      "Il tire de sa poche une bourse de cuir, la pose sur le lutrin, à côté du registre ouvert. « Ce qu'il m'a payé la dernière fois. Je ne l'ai pas dépensé. Je ne sais pas pourquoi. » Sabran, à la porte, fait semblant de ne rien entendre.",
    ],
    fx: { flag: ["tibere:aveu", "tibere:espion"] },
    choices: [
      { label: "Prendre la bourse, et lui dire que c'est fini", fx: { gold: 100, conf: { tibere: 10 } }, to: "IVB_cm_nuit" },
      { label: "Lui laisser la bourse, pour Rosalie", fx: { conf: { tibere: 15 } }, to: "IVB_cm_nuit" },
      { label: "Lui dire que tu ne lui pardonneras pas", fx: { conf: { tibere: -10 } }, to: "IVB_cm_nuit" },
    ] },

  IVB_sous_chambre: { act: "IV", title: "La chambre forte numéro un", place: "changeurs",
    text: [
      "La chambre forte numéro un a une porte de fer épaisse comme une main, et un cadenas qui pend, ouvert, à son moraillon. On ne ferme pas ce qui est vide. Tu pousses la porte. Dedans, une salle carrée, des étagères de chêne du sol à la voûte, faites pour porter des lingots.",
      "Sur les étagères, {{pie#ivb_or_banque|des rangées de sacs de cuir scellés, alignés, pleins|des sacs de cuir scellés, alignés, gonflés de sciure et de plomb : il n'y a pas un ducat d'or ici, et sur le registre, cette salle en contient deux millions}}. La Banque Marrel garde sa réserve dans une salle qu'on ne ferme plus.",
      { with: "fauvette", text: "Fauvette ouvre un sac avec son rasoir. De la sciure coule sur ses pieds. Elle ouvre un deuxième sac. Elle se met à rire, sans bruit, jusqu'à en avoir les larmes aux yeux." },
    ],
    choices: [{ back: "IVB_sous" }] },

  IVB_cr_gildas: { act: "IV", title: "Gildas sur les marches", place: "changeurs",
    text: [
      "Frère Gildas est assis sur la dernière marche de l'escalier, les mains jointes entre les genoux. Il regarde la salle basse comme on regarde une église qu'on a désertée. Tu t'assieds à côté de lui. La pierre est froide à travers tes vêtements.",
      "« Les Gardiens viennent ici, dit-il au bout d'un moment. Un par génération, en secret. Ils descendent par les égouts, comme vous, et ils restent une nuit dans cette salle, sans lumière. C'est là qu'ils apprennent ce que coûte le silence. » Il se tait. « Je suis venu ici à vingt-deux ans. Je croyais que j'avais compris. »",
      { after: "gildas:demasque", text: "Il laisse la cave d'Odeline hors de ses mots. Il a mis la main sur sa cicatrice, au front, et il l'y laisse." },
      { before: "gildas:demasque", text: "Tu {{miroir#ivb_cr_gildas|le regardes prier, et tu attends qu'il ait fini|le regardes prier, et tu te demandes de quoi un moine a tant besoin d'être pardonné, et tu choisis de ne pas lui poser la question}}." },
    ],
    choices: [{ back: "IVB_crypte" }] },

  IVB_cr_lison: { act: "IV", title: "Lison entre les colonnes", place: "changeurs",
    text: [
      "Lison s'est assise par terre, le dos contre une colonne sculptée de roseaux, les genoux dans les bras. Elle a éteint sa lanterne. Quand tu t'assieds à côté d'elle, elle la laisse éteinte.",
      "« Ma grand-mère m'a élevée avec cette salle, dit-elle. La salle basse, la reine, les sept bouches. Je la voyais en rêve. Je ne pensais pas qu'elle sentirait la cave et la brouette pourrie. » Elle rit, à peine. « {{oreille#ivb_lison_crypte|Je suis contente d'être là, voilà tout|Je suis contente que ce soit avec toi, et ma grand-mère m'a dit de ne jamais dire ça à quelqu'un qui porte le cornet}}. »",
      { after: "lison:loyale", text: "Elle te donne un coup d'épaule, dans le noir, et elle laisse son épaule contre la tienne." },
    ],
    choices: [{ back: "IVB_crypte" }] },
});

// ==== END PASSAGES

var EXTRAS = {
  people: {
    ivb_rigaud: { name: "Euphrasie Rigaud", qui: "Ancien graveur de coins à la Monnaie de la République.", aspect: { allure: "graveur dans une cave de teinturerie", signe: "petit creuset rougeoyant, burins" }, f: false, face: { age: "mur", coif: "degarni", marks: ["lunettes"] }, desc: "Ancien graveur de coins à la Monnaie de la République, renvoyé pour avoir gravé trop bien. Vit dans une cave de teinturerie, en face de la Monnaie, et vend ce qu'il entend." },
    ivb_sabran: { name: "Isaïe Sabran", qui: "Commis aux dépôts de la Banque Marrel.", aspect: { allure: "trente ans, joue petit aux dés", habits: "redingote propre, coudes lustrés", signe: "mains très blanches" }, f: false, face: { age: "adulte", coif: "court" }, desc: "Commis aux dépôts de la Banque Marrel. Des mains très blanches, une redingote lustrée aux coudes, et des dettes de jeu rachetées par Lothaire Brunel." },
    ivb_lesueur: { name: "Brigitte Lesueur", qui: "Maîtresse couturière de la rue des Dames.", aspect: { allure: "maîtresse d'atelier sous les toits", signe: "mannequins, rubans, habits de bal" }, f: true, face: { age: "mur", coif: "chignon" }, desc: "Maîtresse couturière de la rue des Dames. Elle habille la moitié des Changeurs et prête des habits à l'autre moitié." },
    ivb_ursule: { name: "Ursule Agasse", qui: "La femme du serrurier Jocelyn Agasse.", aspect: { allure: "cinquante ans, attend devant la Banque", visage: "visage fermé comme une boîte", signe: "panier, mains rouges de lavandière" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "La femme du serrurier Jocelyn Agasse. Elle attend devant la Banque avec un panier." },
    ivb_agasse: { name: "Jocelyn Agasse", qui: "Maître serrurier de la rue des Forges.", aspect: { habits: "tablier de serrurier" }, f: false, face: { age: "mur", beard: "barbe", marks: ["brulure"] }, desc: "Maître serrurier de la rue des Forges. Il a fait toutes les serrures de la Banque Marrel, et la Banque l'a enfermé pour qu'il n'en parle pas." },
    ivb_perachon: { name: "Hugues Pérachon", qui: "Sergent de la garde de la Banque, ancien du Guet.", aspect: { allure: "rond, rieur", habits: "livrée de garde de la Banque" }, f: false, face: { age: "mur", coif: "degarni", shape: "rond" }, desc: "Sergent de la garde de la Banque, ancien du Guet. Il doit sa place à Tibère Gaucelm." },
    ivb_mathelin: { name: "Mathelin", qui: "Le geôlier du cachot de la Banque.", aspect: { allure: "voûté", signe: "mains énormes, écuelle et cruche" }, f: false, face: { age: "ancien", coif: "degarni" }, desc: "Le geôlier du cachot de la Banque depuis trente ans. Il n'a pas été payé depuis Noël." },
  },
  items: {
    ivb_acte_rosalie: { name: "La reconnaissance de Tibère Gaucelm", kind: "document", form: "acte", desc: "Une reconnaissance de dette de cent quarante ducats, au sceau de la Banque Marrel, prise dans le casier des créances.",
      text: "*Je soussigné Tibère Gaucelm, sergent du Guet, reconnais devoir à la maison Marrel la somme de cent quarante ducats, prêtée ce jour sur ma parole. Caution : ma fille Rosalie, son travail et ses gages, jusqu'à extinction.*\n\nEn marge, d'une autre encre : *{{loupe|Dette rachetée au Trébuchet|Dette rachetée au Trébuchet par L. B., pour tenir le sergent. Ne pas réclamer tant qu'il rapporte}}.*" },
    ivb_gants_rosalie: { name: "Les gants de Rosalie", kind: "outil", keep: true, bonus: { discretion: 5 }, desc: "Une paire de gants de bonne peau grise, cousus par Rosalie Gaucelm. Ils ne font aucun bruit sur une serrure." },
    ivb_carnet_agasse: { name: "Le carnet du serrurier", kind: "document", form: "carnet", desc: "Le carnet de croquis de Jocelyn Agasse, couverture de toile, plein de pênes et de gorges.",
      text: "Des dessins de serrures, de clés, de ressorts, avec des cotes au crayon. Une page sur les portes du cachot de la Banque : *{{loupe#ivb_ag_cachot|Pêne demi-tour, gâche profonde, porte sur gonds forgés|Défaut : soulever la porte sur ses gonds et tourner le pêne avec une lame mince, une cuillère suffit. Ils n'ont pas voulu payer la correction}}.*\n\nLa dernière page porte le dessin d'une serrure ronde, énorme, la grande porte du bas de la Banque." },
    ivb_tr_perles: { name: "Deux rangs de perles Delisle", kind: "tresor", price: 300, desc: "Deux rangs de perles fines d'un orient égal, sans le rang du milieu, qui était de verre. La parure de famille du prévôt." },
    ivb_tr_tabatiere: { name: "La tabatière Fourcaud", kind: "tresor", price: 150, desc: "Une tabatière ronde d'or émaillé, à feuilles d'acanthe. Dans le double fond, une miniature sur ivoire : une femme au front ceint d'une couronne de sel." },
    ivb_tr_reliquaire: { name: "Le reliquaire du Mont-Taciturne", kind: "tresor", price: 250, desc: "Un reliquaire d'argent massif en forme de main fermée, mis en gage à la Banque par Dom Évrard. Les moines du Mont le croient encore dans leur sacristie." },
    ivb_tr_rapiere: { name: "La rapière Vernier", kind: "arme", dmg: 9, att: 10, price: 120, desc: "Une lame de Tolède à l'ancienne sous une garde dorée de bijou. Les Vernier l'ont mise en gage comme un ornement ; c'est une arme." },
    ivb_tr_epingle: { name: "L'épingle de la reine", kind: "tresor", price: 200, desc: "Une longue épingle à cheveux d'or pâle des Écueils, terminée par une perle baroque prise dans une griffe en forme de vague. Bertrade la gardait pour la reine." },
    ivb_faux_couronne: { name: "La couronne de sel des Marrel", kind: "tresor", price: 3, desc: "Une couronne basse sous un globe de verre, exposée sur le coffre de la Banque. Lourde, et qui laisse aux doigts une poussière dorée." },
    ivb_faux_actes: { name: "Les faux actes des Marrel", kind: "document", form: "liasse", desc: "Une liasse de parchemins jaunis, nouée de ruban noir, prise dans le coffre de la Banque : les titres des grandes maisons sur les terres des Hautes-Eaux.",
      text: "*Acte de propriété des terres de la Grisemotte, des pêcheries de la Basse-Salve et des moulins de l'Orle, au profit des maisons Marrel, Delisle, Fourcaud et Vernier, par cession de la reine Ysaure, l'an premier.*\n\nLa signature de la reine, au bas de chaque feuille, est {{loupe|ferme, ornée, royale|repassée à l'encre sur un sillon de pointe sèche, la même main de clerc sur toutes les feuilles}}." },
    ivb_lettres_corisande: { name: "Les lettres de Corisande", kind: "document", form: "lettre", desc: "Une liasse mince au sceau personnel de Corisande Marrel : ses lettres à l'envoyé du duc d'Aveline, cette année.",
      text: "*Monsieur, la maison Marrel honorera la dette de la République à la Saint-Jean. {{loupe|Je vous prie d'en assurer Son Altesse|Si elle ne le peut pas, je vous prie de rappeler à Son Altesse que mon petit-fils est sous sa garde, et que je paierai alors ce qu'il faudra, en or ou en portes}}.*\n\n— C. M." },
    ivb_carnet_lothaire: { name: "Un carnet de Lothaire", kind: "document", form: "carnet", desc: "Un carnet relié de cuir gris, à l'écriture fine et violette, pris dans le cabinet de Lothaire Brunel.",
      text: "Des dates, des lieux, des noms, des sommes. *T. G., cinq ducats. Rigaud, deux ducats la nouvelle. Sabran, quatre-vingts ducats de billets, rachetés.*\n\nUne page sur une voleuse des Gouttières : *La rousse qui a pris l'œil de pie {{loupe#ivb_carnet_fauvette|ne vaut pas qu'on la cherche|a vu quelque chose sur le quai la nuit des Lanternes. La faire parler, ou la faire taire}}.*" },
    ivb_coffret_pimpante: { name: "Le coffret de La Pimpante", kind: "outil", keep: true, desc: "Un coffret de bois de fer cerclé de cuivre vert, tiré de l'épave de La Pimpante sur l'écueil des Sourds. À une poignée, la corde de Maïwenn Brac, coupée net au-dessus de son nœud." },
    ivb_cornet_jumeau: { name: "Le cornet jumeau", kind: "outil", keep: true, bonus: { social: 5 }, desc: "Le cornet d'os de Lothaire Brunel, frère du tien, volé aux Taiseurs il y a vingt ans. Une ligne gravée dessus, illisible. Il mange l'ouïe de qui le porte sans le serment." },
    ivb_passe_agasse: { name: "Le passe d'Agasse", kind: "outil", keep: true, bonus: { discretion: 15 }, desc: "Une clé de fer fine, noire, à double panneton et sans dents. Jocelyn Agasse dit qu'elle ouvre tout ce qu'il a fermé dans cette ville." },
  },
  enemies: {
    ivb_rat: { name: "Rat des égouts de la reine", look: "rat", pv: 16, att: 55, def: 18, dmg: 5, flank: true, desc: "Gros comme un chat, gris, la queue rose et nue. Ils vivent en nid, et attaquent par les côtés." },
    ivb_garde: { name: "Garde de la Banque", look: "humain", pv: 40, att: 72, def: 28, dmg: 8, desc: "Manteau noir à boutons d'or, épée courte, payé double. Un ancien du Guet, souvent." },
    ivb_dogue: { name: "Dogue des chambres fortes", look: "loup", pv: 36, att: 70, def: 22, dmg: 8, flank: true, desc: "Un dogue énorme, aux cordes vocales coupées : les chiens de la Banque attaquent sans aboyer." },
    ivb_lothaire: { name: "Lothaire Brunel", look: "humain", pv: 110, att: 85, def: 32, dmg: 10, desc: "Gants gris, canne-épée, et un cornet d'os à l'oreille : il entend ton coup avant que tu le portes." },
  },
  clues: {
    ivb_c_ducats: { rev: "B", text: "À la Monnaie, les ducats neufs de la République sont coupés d'un quart de cuivre : la République paie ses dettes en monnaie faible, et sa propre Monnaie la frappe." },
    ivb_c_prevot: { rev: "S", text: "Au bal de Corisande, sous les mots du prévôt Delisle : « Salvèze ouvrira la porte des Sauniers le jour que nous dirons. »" },
    ivb_c_muette: { rev: "R", text: "Le premier registre de la Banque Marrel, enchaîné à part : « Compte premier : ce que la maison doit à la reine, depuis la nuit des Comptoirs. À ne jamais solder. »" },
    ivb_c_comptoirs: { rev: "R", text: "Dans la crypte, la voix de la nuit des Comptoirs : quarante maisons signent que la reine est devenue folle, et un Marrel promet qu'elle ne parlera pas au duc." },
    ivb_c_couteau: { rev: "R", text: "Le cinquième feuillet, sous la loupe : l'homme qui tenait le couteau, la nuit des Comptoirs, était Jourdain Marrel, fils d'Arnoul." },
    ivb_c_reserve: { rev: "B", text: "La chambre forte numéro un de la Banque Marrel, censée garder deux millions de ducats, est pleine de sacs de sciure et de plomb." },
    ivb_c_moine: { rev: "O", text: "Carnet de Lothaire, semaine des Lanternes : « La vieille Carrus, morte avant la vente. Ce n'est pas nous. Chercher qui. Un moine est passé sur le quai cette nuit-là. »" },
  },
  veils: {
    ivb_releve: { fx: { ep: ["perso", 500] } },
    ivb_ile_base: { fx: { ep: ["perso", 300] } },
    ivb_ile_plaque: { fx: { ep: ["perso", 300] } },
    ivb_eg_contre: { fx: { ep: ["perso", 500] } },
    ivb_mo_ducats: { fx: { clue: "ivb_c_ducats", ep: ["perso", 500] } },
    ivb_prevot: { fx: { clue: "ivb_c_prevot", flag: "ivb:prevot_entendu", ep: ["perso", 800] } },
    ivb_amaury: { fx: { ep: ["perso", 400] } },
    ivb_cs_peur: { fx: { flag: "ivb:berold", ep: ["perso", 500] } },
    ivb_cs_crainte: { fx: { flag: "ivb:berold" } },
    ivb_cs_fait: { fx: { ep: ["perso", 500] } },
    ivb_cs_mandat: { fx: { ep: ["perso", 400] } },
    ivb_reg_crypte: { fx: { ep: ["perso", 800] } },
    ivb_reg_tibere: { fx: { flag: "tibere:espion", ep: ["perso", 500] } },
    ivb_reg_muette: { fx: { clue: "ivb_c_muette", ep: ["perso", 800] } },
    ivb_reg_rosalie: { fx: { questSeen: "IVB_rosalie" } },
    ivb_reg_delisle: { fx: { ep: ["perso", 400] } },
    ivb_cr_comptoirs: { fx: { clue: "ivb_c_comptoirs", ep: ["perso", 1000] } },
    ivb_cr_langue: { fx: { ep: ["perso", 1000] } },
    ivb_cr_miroir: { fx: { ep: ["perso", 800] } },
    ivb_cache_nom: { fx: { clue: "ivb_c_couteau", ep: ["perso", 1000] } },
    ivb_carnet_odeline: { fx: { clue: "ivb_c_moine", ep: ["perso", 800] } },
    ivb_carnet_corde: { fx: { flag: "salome:maiwenn", ep: ["perso", 800] } },
    ivb_carnet_fauvette: { fx: { ep: ["perso", 400] } },
    ivb_cs_trahit: { fx: { ep: ["perso", 800] } },
    ivb_ursule: { fx: { flag: "ivb:serrure" } },
    ivb_ag_plan: { fx: { flag: "ivb:serrure" } },
    ivb_ag_cachot: { fx: { flag: "ivb:truc_agasse" } },
    ivb_odeline_dette: { fx: { ep: ["perso", 500] } },
    ivb_lo_sourd: { fx: { ep: ["perso", 500] } },
    ivb_dep_couronne: { fx: { ep: ["perso", 300] } },
    ivb_sous: { fx: { ep: ["perso", 500] } },
    ivb_or_banque: { fx: { clue: "ivb_c_reserve", ep: ["perso", 800] } },
    ivb_amaury_cs: { fx: { flag: "ivb:berold", ep: ["perso", 500] } },
    ivb_passeur: { fx: { ep: ["perso", 300] } },
    ivb_cm_des: { fx: { ep: ["perso", 300] } },
    ivb_tib_aveu: { fx: { ep: ["perso", 500] } },
    ivb_lison_crypte: { fx: { conf: { lison: 5 } } },
    ivb_cr_gildas: { fx: { ep: ["perso", 500] } },
  },
  quests: [
    { id: "IVB_rosalie", act: "IV", kind: "annexe", title: "Le fil de Rosalie", start: "IVB_ro_atelier", echo: "ivb:rosalie_libre",
      closes: { all: [{ has: "ivb:sorti" }, { not: { item: "ivb_acte_rosalie" } }, { not: { has: "ivb:rosalie_libre" } }] } },
    { id: "IVB_agasse", act: "IV", kind: "annexe", title: "La serrure de Jocelyn Agasse", start: "IVB_ag_ursule", echo: "ivb:agasse_libre",
      closes: { all: [{ has: "ivb:sorti" }, { not: { has: "ivb:agasse_libre" } }] } },
  ],
};

module.exports = { passages: P, extras: EXTRAS };
