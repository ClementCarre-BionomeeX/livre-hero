// Lot ii2_saline of "Le Trésor des Taiseurs" (act II): the salt works of Grisemotte, the salt-workers' work songs
// (double speech), the master salt-makers sold to the Bank, the foreman, Lothaire's swordsmen, a brewing strike, the
// queen's tide mill and the second cache (f_saline) in its foundations, three side quests and four treasures.

var P = {};

// ==================================================================== arrival, the dyke, the crossroads
Object.assign(P, {
  IIS_arrivee: { act: "II", title: "La Saline de Grisemotte", place: "saline", hub: true, routes: true, backName: "la digue de Grisemotte",
    text: [
      { first: true, text: "La route des roseaux finit sur une digue de terre battue, haute de deux hommes, et la Saline s'ouvre d'un coup sous tes pieds : un damier de bassins à perte de vue, gris, verts, roses selon l'eau qu'ils tiennent, séparés par des talus étroits où marchent des silhouettes courbées. Sur les talus, des tas de sel blanc en pyramide, couverts de paille et de vieilles voiles. Au bout de la digue, là où elle touche la baie, un moulin de pierre noire tient les pieds dans l'eau, avec sa grande roue arrêtée." },
      { first: true, text: "L'air pique les lèvres. Ça sent la vase, l'iode, la fumée de tourbe des maisons basses blotties contre la digue, et une odeur propre, presque sucrée, qui monte des bassins quand le vent tourne : le sel qui sèche. Des bassins monte aussi un chant à plusieurs voix, lent, mesuré sur le geste des râteaux." },
      { first: true, text: "En travers de la digue, une barrière de bois neuf. Deux hommes en casaque noire s'y appuient, et un commis assis derrière une table pliante tient un registre ouvert sous une pierre, à cause du vent." },
      { first: true, with: "lison", text: "Lison s'arrête au bord de la digue et regarde les bassins comme on regarde une maison où l'on a dormi enfant. « Grisemotte, dit-elle. Ma grand-mère dit que le sel d'ici {{oreille|est le meilleur du delta|a été payé deux fois, une fois en sueur et une fois en sang}}. »" },
      { first: true, with: "tibere", text: "Tibère plisse les yeux vers la barrière. « Casaques noires, liseré jaune. Ce sont des gens de la Banque, ça. Je les croyais au chaud dans leurs comptoirs. »" },
      { again: true, when: "day", text: "La digue de Grisemotte, ses bassins à perte de vue, le chant des sauniers qui monte et retombe avec les râteaux. Au bout, le moulin de la reine, noir dans la lumière blanche." },
      { again: true, when: "night", text: "La digue, la nuit. Les bassins renvoient la lune en cent morceaux. Une lumière au cabaret, une autre à la Maison du Sel, et le moulin, au bout, qui gronde quand la mer descend." },
      { after: "iis:greve_jour", before: "iis:greve_finie", text: "Les bassins sont déserts et le chant s'est tu. Sur les talus, les râteaux sont plantés droit dans la vase, en rang, comme des piques." },
      { after: "iis:greve_gagnee", text: "Le chant des bassins a repris, plus fort qu'avant, et quelqu'un a peint sur la barrière, en grandes lettres de chaux : *SEL LIBRE*." },
      { after: "iis:greve_brisee", text: "On travaille de nouveau dans les bassins, sans chanter. Les hommes en casaque noire sont trois à la barrière, maintenant." },
      { after: "saline:ouverte", text: "Au bout de la digue, le moulin tourne comme si de rien n'était. Toi seul{e} sais ce qu'il y a sous sa roue, et ce qu'il n'y a plus." },
    ],
    choices: [
      { label: "Aller jusqu'à la barrière de la Banque", big: true, hide: { has: "iis:entree" }, to: "IIS_digue" },
      { label: "Les bassins, où l'on chante en râtelant", hide: { not: { has: "iis:entree" } }, to: "IIS_bassins" },
      { label: "Le cabaret de la Pelle, au pied de la digue", hide: { not: { has: "iis:entree" } }, to: "IIS_cabaret" },
      { label: "Les cabanes des sauniers", hide: { not: { has: "iis:entree" } }, to: "IIS_cabanes" },
      { label: "La chapelle du Sel", hide: { not: { has: "iis:entree" } }, to: "IIS_chapelle" },
      { label: "La Maison du Sel, où logent les maîtres sauniers", hide: { not: { has: "iis:entree" } }, to: "IIS_maison" },
      { label: "Le moulin de la reine, au bout de la digue", hide: { not: { has: "iis:entree" } }, to: "IIS_moulin" },
      { label: "L'étier, le canal qui amène la mer aux bassins", hide: { not: { has: "iis:entree" } }, to: "IIS_etier" },
      { label: "L'assemblée de nuit, dans la grange au sel", big: true, hide: { any: [{ not: { has: "iis:greve_annoncee" } }, { seen: "IIS_greve" }] }, to: "IIS_greve" },
      { label: "Veiller la grange au sel cette nuit, avec Domitille", hide: { any: [{ not: { has: "iis:greve_decidee" } }, { has: "iis:greve_jour" }, { seen: "IIS_grange_veille" }] }, to: "IIS_grange_veille" },
      { label: "Faire tes adieux à la Saline", hide: { any: [{ not: { has: "saline:ouverte" } }, { seen: "IIS_depart" }] }, to: "IIS_depart" },
      { label: "Le matin de la grève", big: true, hide: { any: [{ not: { has: "iis:greve_decidee" } }, { seen: "IIS_greve_jour" }] }, to: "IIS_greve_jour" },
      { label: "Lire le feuillet de la reine, à l'abri", hide: { any: [{ not: { has: "saline:ouverte" } }, { seen: "IIS_feuillet" }] }, to: "IIS_feuillet" },
      { label: "Prendre une chambre au cabaret pour la nuit (10 liards)", fx: { gold: -10 }, hide: { not: { has: "iis:entree" } }, to: "IIS_nuit" },
    ] },

  IIS_digue: { act: "II", title: "La barrière", place: "saline",
    text: [
      "Le commis lève la tête de son registre sans lever la plume. Il est jeune, pâle, enrhumé, avec une écharpe de laine nouée trois fois autour du cou. « Droit de digue, dit-il. Deux ducats par personne, au profit de la Maison du Sel. Les marchandises se déclarent à part. »",
      "Derrière lui, les deux hommes en casaque noire se sont décollés de la barrière. Le plus grand tient un gourdin de chêne posé sur l'épaule, comme un outil de travail.",
      "« Depuis quand paie-t-on pour marcher sur une digue ? » demandes-tu. Le commis se mouche. « C'est {{oreille#iis_droit|l'usage depuis toujours|l'usage depuis la Saint-Martin, depuis que la Banque a signé avec les maîtres, et je n'ai jamais vu l'acte}}, dit-il. Deux ducats. »",
      { after: "mandat", text: "Sur la table, sous la pierre, à côté du registre, une feuille imprimée porte le sceau de la République. Le vent en soulève un coin. Tu reconnais le mot *recherché*, puis tu n'essaies pas de lire la suite. Le commis, lui, ne l'a pas lue non plus : il s'en sert pour caler son encrier." },
      { with: "lison", text: "Lison te touche le coude et montre du menton, en contrebas, les talus étroits qui courent entre les bassins jusqu'aux maisons. « Il y a cent chemins dans une saline, souffle-t-elle. La Banque en garde un. »" },
      { with: "gildas", text: "Frère Gildas croise les mains dans ses manches et regarde la barrière avec une patience de pierre. « Un droit de passage se lève au nom d'un seigneur, dit-il doucement. Je me demande au nom de qui on lève celui-ci. »" },
    ],
    choices: [
      { label: "« Depuis la Saint-Martin, donc. Montrez-moi l'acte qui vous en donne le droit. »", hide: { not: { voile: "iis_droit" } }, fx: { ep: ["perso", 400] }, to: "IIS_entree" },
      { label: "Payer le droit de digue (2 ducats)", fx: { gold: -40, fac: { banque: 2 } }, to: "IIS_entree" },
      { label: "Discuter le prix, et le principe", test: { dom: "social", diff: -10, label: "Faire céder le commis", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "gildas", v: 5 }] },
        win: { fx: { ep: ["perso", 300] }, to: "IIS_entree" }, lose: { fx: { gold: -40 }, to: "IIS_entree" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Une voix de sergent du Guet" },
        win: { fx: { ep: ["perso", 300], conf: { tibere: 3 } }, to: "IIS_entree" }, lose: { fx: { gold: -40 }, to: "IIS_entree" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Passer par les talus des bassins" },
        win: { fx: { ep: ["perso", 300], conf: { lison: 3 } }, to: "IIS_entree" }, lose: { to: "IIS_entree" } },
      { label: "Écarter le gourdin et passer", fight: { title: "La barrière de la digue", enemies: [{ id: "iis_nervi", n: 2 }],
        win: { fx: { ep: ["perso", 500], fac: { banque: -5, hautes: 3 } }, to: "IIS_entree" },
        lose: { fx: { pv: -3, fac: { hautes: 3 } }, to: "IIS_entree" },
        flee: { label: "Sauter dans les bassins", dom: "nature", diff: 0, to: "IIS_entree" } } },
    ] },

  IIS_entree: { act: "II", title: "Les premiers bassins", place: "saline", fx: { flag: "iis:entree", meet: "iis_domitille" },
    text: [
      { outcome: "lose", text: "Le sol se dérobe. Tu tombes à la renverse dans un bassin de vase grise, tiède, qui t'avale jusqu'à la taille et ne veut plus te rendre. Les casaques noires rient sur la digue. Puis une main dure t'attrape par le col, une autre par la ceinture, et une femme en tablier de cuir te tire sur le talus comme on tire une anguille. « La vasière ne lâche rien qu'on ne lui arrache, dit-elle. Eux non plus. »" },
      "Tu marches entre les bassins sur un talus large d'un pied, entre deux eaux. À gauche, une eau brune qui dort ; à droite, une eau claire, puis une eau rose, puis une eau si chargée qu'elle a l'air d'huile. Au fond des derniers carrés, le sel se forme en croûte grise, et des femmes le ramènent au bord avec de longs râteaux à lame plate, d'un geste lent qui ne se presse jamais.",
      "Elles chantent en travaillant, une voix lance le vers et les autres le reprennent, et le chant tombe juste avec le geste : *« Quand la mer est pleine, {{oreille#iis_c1|la porte dort, le saunier dort, la reine dort|cale la porte d'un pieu de frêne, qu'elle reste ouverte au jusant}}. »*",
      "La femme qui lance le chant a quarante ans, les avant-bras rouges de sel jusqu'au coude, un foulard serré sur des cheveux gris. Elle te regarde passer sans s'arrêter de chanter, et tout le rang de râteaux suit son regard.",
      { with: "lison", text: "Lison chante le refrain avec elles, à mi-voix, sans s'en rendre compte. Quand elle s'en aperçoit, elle se tait et regarde ailleurs." },
    ],
    choices: [
      { label: "Attendre la fin du couplet et parler à la femme qui mène le chant", to: "IIS_domitille" },
      { back: "IIS_arrivee" },
    ] },

  IIS_bassins: { act: "II", title: "Les bassins", place: "saline", backName: "les bassins",
    text: [
      { first: true, text: "Les bassins se suivent en escalier d'eau, du plus grand au plus petit : la vasière, où la mer dépose sa boue ; les cobiers, où elle chauffe ; les adernes, où elle s'épaissit ; les œillets enfin, carrés de quelques toises, où le sel naît. Chaque famille a ses œillets, et chaque œillet a un nom, gravé sur un piquet : *la Bonne-Mère*, *le Trou-Rose*, *la Quéré*, *le Petit-Bonheur*." },
      { again: true, when: "day", text: "Les bassins, sous le ciel blanc. Les râteaux montent et descendent, et le chant suit." },
      { again: true, when: "night", text: "Les bassins, la nuit : de l'eau noire, des talus pâles, et le craquement du sel qui se forme dans le froid." },
      { when: "day", text: "Un rang d'hommes ramène le gros sel en petits tas au bord des œillets, et chante un autre air, plus lourd, que le geste coupe en deux : *« Lève la pelle, laisse aller l'eau, {{oreille#iis_c2|sept tours de roue pour mon fardeau|ôte la meule de son fer, lève la vanne, et laisse la roue courir à vide}}. »*" },
      { when: "day", text: "Le chant des femmes revient de l'autre côté, comme une réponse : *« Quand la mer est pleine, {{oreille#iis_c1|la porte dort, le saunier dort, la reine dort|cale la porte d'un pieu de frêne, qu'elle reste ouverte au jusant}}. »*" },
      { when: "day", before: "iis:machefer_fini", text: "Sur le talus du milieu, un homme ne râtelle pas. Il marche, les mains dans le dos, une badine de jonc sous le bras, et partout où il passe, le chant baisse d'un ton." },
      { after: "iis:greve_brisee", text: "Les sauniers travaillent sans chanter. Le seul bruit est celui des lames sur la croûte de sel." },
    ],
    choices: [
      { label: "Parler à Domitille, la meneuse de chant", to: "IIS_domitille" },
      { label: "L'homme à la badine de jonc", hide: { any: [{ seen: "IIS_machefer" }, { has: "iis:greve_jour" }] }, to: "IIS_machefer" },
      { label: "Les grands tas de sel, sur le talus des mulons", to: "IIS_mulons" },
      { back: "IIS_arrivee" },
    ] },
});

// ==================================================================== Domitille, the heaps, the tavern, the huts
Object.assign(P, {
  IIS_domitille: { act: "II", title: "Domitille Goulard", place: "saline", backName: "le talus de Domitille",
    text: [
      { first: true, text: "La meneuse de chant pose son râteau en travers de l'œillet, s'essuie les mains sur son tablier de cuir et vient à ta rencontre sur le talus. « Domitille Goulard, dit-elle. Je tiens trois œillets, ici, et je chante pour les autres. Vous n'êtes pas de la Banque : vous marchez trop mal sur nos talus. Alors vous êtes quoi ? »" },
      { again: true, text: "Domitille te voit venir et laisse le chant à sa voisine. Elle a du sel jusque dans les cils." },
      "Tu dis que tu cherches des choses perdues, ce qui est vrai. Elle rit, d'un rire bref. « Ici, tout le monde a perdu quelque chose depuis la Saint-Martin. Les maîtres ont signé pour nous avec la Banque. On ne nous a {{oreille#iis_domitille_greve|rien demandé, et on s'en arrange|rien demandé, et je compte bien le leur faire payer avant la Saint-Jean}}. »",
      { with: "tibere", text: "Tibère se tient un pas en arrière, les pouces dans la ceinture. Domitille le regarde de haut en bas. « Et lui, c'est votre garde ? Il a une tête de Guet. » Tibère sourit sans rien dire." },
      { with: "lison", text: "Domitille aperçoit Lison et son visage change : il se ferme et s'ouvre en même temps. « La petite Vasse. Ta grand-mère va bien ? » Lison répond : « {{oreille#iis_lison_garant|Elle te salue, et elle tricote toujours aussi mal|Elle te salue, et elle répond de ce qu'on entendra ici}}. » Domitille hoche la tête une seule fois." },
    ],
    choices: [
      { label: "« Que leur a fait signer la Banque, à vos maîtres ? »", hide: { seen: "IIS_domitille_greve" }, to: "IIS_domitille_greve" },
      { label: "« Vos chants. D'où viennent-ils ? »", hide: { seen: "IIS_domitille_chants" }, to: "IIS_domitille_chants" },
      { label: "« Vous comptez le leur faire payer, avant la Saint-Jean. Comment ? »", hide: { any: [{ not: { voile: "iis_domitille_greve" } }, { seen: "IIS_domitille_greve" }] }, fx: { fac: { hautes: 3 } }, to: "IIS_domitille_greve" },
      { label: "« On parle d'un noyé dans l'étier. »", hide: { any: [{ seen: "IIS_noye" }, { quest: "IIS_noye" }] }, to: "IIS_noye" },
      { back: "IIS_bassins" },
    ] },

  IIS_domitille_greve: { act: "II", title: "Le contrat de la Saint-Martin", place: "saline", fx: { flag: "iis:greve_annoncee", questSeen: "IIS_noye" },
    text: [
      "Domitille compte sur ses doigts rouges, et chaque doigt est une colère qu'elle a déjà comptée cent fois. « Un : la Banque achète tout le sel de trois saisons, au prix qu'elle a fixé, qui est la moitié du prix de Salvèze. Deux : les maîtres paient nos journées sur cet argent-là, alors nos journées ont fondu. Trois : qui doit aux maîtres et ne livre pas son compte perd son œillet. Quatre : le moulin de la reine, qui moud pour tout le monde depuis trois cents ans, appartient maintenant à la Banque, et ses gardes avec. »",
      "Elle ferme le poing. « Cinq, c'est Mâchefer. Le contremaître. Il a toujours été dur, mais depuis la Saint-Martin il frappe. Et il y a trois jours on a retiré Hamon Lefeuvre de l'étier, la tête ouverte, Hamon qui voulait porter une copie du contrat aux juges de Salvèze. Il était tombé, à ce qu'on dit. »",
      "Elle regarde vers la grange au sel, une longue bâtisse de planches au bout des cabanes. « Ce soir, on se réunit là-bas. Les trois œillets du bout ont déjà dit qu'ils posaient le râteau. D'autres hésitent. {{oreille#iis_domitille_peur|Venez, si ça vous chante|Venez, j'ai besoin qu'on voie quelqu'un de la ville à côté de moi, sinon ils auront peur}}. »",
      { if: { has: "iij:sauniers_vendus" }, text: "Tu lui répètes ce que disaient trois sauniers de Grisemotte, à la Nasse des Joncs-Bas : dix ans, et eux avec. Domitille crache dans la vase. « Trois saisons, sur le papier qu'on nous a lu, dit-elle. Dix ans sur celui qu'on garde à la Maison du Sel. Ça ne m'étonne pas. Ça me décide. »" },
      { after: "iis:machefer_fini", text: "« Ce que vous avez fait sur le talus, avec Mâchefer, ajoute-t-elle, ça s'est su jusqu'à la vasière. »" },
    ],
    choices: [
      { label: "« J'y serai. »", fx: { fac: { hautes: 2 } }, back: "IIS_domitille" },
      { label: "« Une grève, à trois mois de la Saint-Jean ? Vous allez vous faire écraser. »", fx: { flag: "iis:domitille_froide" }, back: "IIS_domitille" },
    ] },

  IIS_domitille_chants: { act: "II", title: "Les chants des bassins", place: "saline",
    text: [
      "« Les chants ? » Domitille hausse les épaules. « Ils viennent d'avant les maîtres, d'avant la République. On les apprend petites, en tenant le râteau de sa mère. Chaque bassin a le sien : le couplet du flot pour les femmes qui ouvrent la vasière, le couplet du las pour les hommes qui tirent le gros sel. Ce sont des chants de travail. {{oreille#iis_domitille_sait|Ils ne veulent rien dire, ils tiennent la cadence|Ma mère disait qu'ils gardaient la reine, et qu'on n'en change pas un mot, jamais}}. »",
      "Elle hésite, puis baisse la voix. « Il y en a un troisième. Le couplet de la reine. On ne le chante plus dans les bassins : il a une mauvaise réputation, il paraît qu'il porte malheur au sel. Le vieil Eudes le sait encore en entier. Eudes est sourd comme une borne depuis dix ans, mais il chante juste. Enfin, je crois. Il habite la dernière cabane, celle qui penche. »",
      { with: "gildas", text: "Frère Gildas écoute, les yeux mi-clos. « Au Mont, dit-il, nous avons aussi des chants qui ne veulent rien dire. On les garde avec un soin extrême. »" },
      { with: "lison", text: "Lison regarde ses pieds. « Ma grand-mère chante le couplet du flot en battant ses fuseaux, dit-elle. Elle dit que c'est pour {{oreille#iis_lison_fuseaux|tenir le compte des points|que les mains n'oublient pas ce que la bouche doit taire}}. »" },
    ],
    choices: [
      { label: "Aller trouver le vieil Eudes, dans la cabane qui penche", to: "IIS_eudes" },
      { back: "IIS_domitille" },
    ] },

  IIS_mulons: { act: "II", title: "Le talus des mulons", place: "saline", backName: "le talus des mulons",
    text: [
      { first: true, text: "Les mulons sont les grands tas de sel de la saison, montés à la pelle au bout des talus, chacun haut comme une maison et coiffé d'une vieille voile lestée de pierres. Chaque famille a son mulon, marqué d'un piquet peint. Le sel y attend la gabare, et le prix." },
      { again: true, text: "Les mulons blancs, sous leurs voiles grises. Le vent siffle dans les cordes des lests." },
      "Un clerc de la Maison du Sel les mesure à la perche et note dans un carnet, en mouillant sa mine. Il passe vite devant les grands et s'attarde devant les petits, ceux des familles qui doivent.",
      "Au bout de la rangée, un mulon plus petit que les autres porte un piquet rayé de noir. Sa voile est rapiécée en trois couleurs. Le tas {{pie#iis_mulon_creux|a l'air tassé, mouillé, oublié de tous|sonne creux sous la croûte : dessous, une armature de planches, et un vide où un homme tiendrait accroupi}}.",
      { after: "iis:greve_jour", before: "iis:greve_finie", text: "Ce matin, les mulons restent seuls sous leurs voiles. Les clercs sont restés à la Maison du Sel, et les sauniers sont à la grange." },
    ],
    choices: [
      { label: "Fouiller le petit mulon au piquet noir", hide: { any: [{ not: { any: [{ voile: "iis_mulon_creux" }, { has: "iis:taille_mulon" }] } }, { seen: "IIS_taille_mulon" }] }, to: "IIS_taille_mulon" },
      { label: "Demander au clerc à qui est le mulon au piquet noir", hide: { seen: "IIS_clerc" }, to: "IIS_clerc" },
      { back: "IIS_bassins" },
    ] },

  IIS_clerc: { act: "II", title: "Le clerc à la perche", place: "saline",
    text: [
      "Le clerc lève sa perche et la pose sur son épaule. Il a les doigts bleus de froid et une plume d'oie sur l'oreille. « Celui-là ? C'est le mulon Quéré. Alain Quéré est mort l'automne dernier, de la fièvre des marais. Sa veuve le tient seule, et elle doit aux maîtres. Elle ne livrera pas son compte à la Saint-Jean, alors {{oreille#iis_clerc_quere|l'œillet reviendra à la Maison, c'est la règle|l'œillet reviendra à Maître Pallu, qui le voulait déjà du vivant d'Alain}}. »",
      "Il regarde le petit mulon avec une sorte de regret de comptable. « Alain jurait qu'il avait payé sa dette. Il disait qu'il avait la taille pour le prouver, la baguette d'entailles. Elle reste introuvable. Un saunier qui meurt, ça laisse des dettes et des histoires. »",
    ],
    choices: [
      { label: "Aller voir la veuve Quéré, aux cabanes", fx: { questSeen: "IIS_taille" }, to: "IIS_avoye" },
      { back: "IIS_mulons" },
    ] },

  IIS_cabaret: { act: "II", title: "Le cabaret de la Pelle", place: "saline", backName: "le cabaret de la Pelle",
    text: [
      { first: true, text: "Le cabaret de la Pelle est creusé à moitié dans la digue, pour le vent : une salle basse, des poutres noires de fumée de tourbe, un comptoir fait d'une pelle à sel géante clouée sur deux tonneaux. Ça sent la soupe de poisson, le cidre aigre et la laine mouillée. La patronne est une grande femme borgne qui sert sans parler et rend la monnaie juste." },
      { again: true, when: "day", text: "La Pelle, presque vide à cette heure : deux vieux au coin du feu, et le bruit d'un couteau sur une planche, en cuisine." },
      { again: true, when: "night", text: "La Pelle, le soir, pleine de sauniers qui parlent bas. Le feu de tourbe fume plus qu'il ne chauffe." },
      { before: "iis:gaucher_fini", text: "À la table du fond, dos au mur, quatre hommes qui ne sont pas d'ici : bottes de ville, gants de cuir gris passés à la ceinture, lames courtes. Ils boivent peu et regardent la porte. Le plus vieux a la main droite bandée et mange de la gauche, avec une adresse tranquille." },
      { with: "tibere", before: "iis:gaucher_fini", text: "Tibère s'est arrêté net sur le seuil. Il regarde les gants gris, puis le plancher. « Je m'assiérais plutôt près du feu », dit-il." },
      { with: "salome", before: "iis:gaucher_fini", text: "Salomé crache dans les cendres. « Les gants gris. Brunel habille ses chiens comme lui. »" },
      "Près de la porte, un colporteur a étalé sur un banc un tapis de feutre et sa marchandise : des aiguilles, du fil, des images pieuses, des médailles.",
    ],
    choices: [
      { label: "S'asseoir à la table des gants gris", hide: { has: "iis:gaucher_fini" }, to: "IIS_gaucher" },
      { label: "Le colporteur et ses médailles", to: "IIS_colporteur" },
      { label: "Jouer aux dés avec les gabariers, près du feu", to: "IIS_des" },
      { back: "IIS_arrivee" },
    ] },

  IIS_des: { act: "II", title: "Les dés de la Pelle", place: "saline", taverne: { mise: 2, adversaire: "un gabarier de Port-Vasier" },
    text: [
      "Deux gabariers jouent aux dés sur un tonneau, avec des cornets de cuir et des liards de cuivre. Ils te font une place sans lever les yeux : ici, l'argent de tout le monde est le même.",
      { with: "tibere", text: "Tibère s'assied à côté de toi, les mains à plat sur les cuisses, très droit. Il regarde rouler les dés comme un homme regarde une femme qu'il a quittée. « Je compte les points, dit-il. Seulement les points. »" },
    ],
    choices: [{ back: "IIS_cabaret" }] },

  IIS_colporteur: { act: "II", title: "Le colporteur", place: "saline", fx: { meet: "iis_gobert" },
    text: [
      "Le colporteur s'appelle Gobert, il le dit deux fois, et il a les mains propres d'un homme qui ne porte pas lui-même ses ballots. Il sort d'un mouchoir une médaille ronde, grande comme un liard d'argent, et la tient à la lumière. « Une médaille de la reine Ysaure, dit-il. Retrouvée dans les fondations du moulin, quand on a refait la digue. Il n'en existe pas dix. Pour vous, trois ducats. »",
      "Sur l'avers, une femme couronnée de profil. Au revers, une roue. La médaille {{pie#iis_medaille|a le poli brun et doux des vieux bronzes|est de plomb coulé dans un moule de sable, et noircie à la fumée de corne la semaine dernière}}.",
      "« Il {{oreille#iis_gobert_moulin|y en a eu d'autres, dans le moulin, à ce qu'on dit|y a des gens de la Banque qui en paieraient dix fois plus, si elle était vraie, et c'est eux qui m'ont dit d'en faire}}, ajoute-t-il, et il te sourit. »",
    ],
    choices: [
      { label: "Acheter la médaille de la reine (3 ducats)", hide: { has: "iis:medaille" }, fx: { gold: -60, item: "iis_faux_medaille", flag: "iis:medaille" }, back: "IIS_cabaret" },
      { label: "« De la Banque ? Qui vous a commandé ces médailles ? »", hide: { any: [{ not: { voile: "iis_gobert_moulin" } }, { seen: "IIS_gobert_aveu" }] }, to: "IIS_gobert_aveu" },
      { label: "« Du plomb et de la fumée de corne, Gobert. Remballez. »", hide: { any: [{ not: { voile: "iis_medaille" } }, { seen: "IIS_gobert_aveu" }] }, to: "IIS_gobert_aveu" },
      { back: "IIS_cabaret" },
    ] },

  IIS_gobert_aveu: { act: "II", title: "Les médailles de Gobert", place: "saline",
    text: [
      "Gobert remballe la médaille avec une prestesse qui le trahit. Puis il regarde vers la table du fond et baisse la voix. « Le grand qui mange de la main gauche, le Gaucher, qu'ils l'appellent. Il m'en a commandé vingt. Il me paie pour en vendre dans toute la Saline et pour écouter qui pose des questions sur le moulin. Ceux qui en savent trop long sur la reine, il veut leurs noms. »",
      "Il hausse les épaules. « Moi, je vends. Je n'ai rien vu, rien entendu. Mais si j'étais vous, je dirais que vous cherchez des aiguilles. »",
    ],
    fx: { flag: "iis:gobert", ep: ["perso", 400] },
    choices: [
      { label: "Lui glisser un ducat pour qu'il donne au Gaucher de faux noms", fx: { gold: -20, flag: "iis:gobert_achete" }, back: "IIS_cabaret" },
      { back: "IIS_cabaret" },
    ] },

  IIS_cabanes: { act: "II", title: "Les cabanes des sauniers", place: "saline", backName: "les cabanes",
    text: [
      { first: true, text: "Les cabanes des sauniers s'alignent au pied de la digue, basses, longues, chaulées à neuf chaque printemps. Leurs toits de roseau descendent presque jusqu'au sol. Devant chaque porte, un tas de tourbe, une barrique d'eau douce, des râteaux appuyés au mur, tête en bas. Des enfants pieds nus jouent à se pousser dans une flaque saumâtre." },
      { again: true, when: "day", text: "Les cabanes, vides à cette heure : tout le monde est aux bassins, sauf les vieux et les enfants." },
      { again: true, when: "night", text: "Les cabanes, la nuit. Des lueurs de tourbe sous les portes, et des voix qui baissent quand tu passes." },
      "À l'avant-dernière cabane, une femme maigre ravaude une voile sur le pas de sa porte, avec des gestes trop vifs. La dernière cabane penche vers l'étier, comme si elle avait envie de s'y asseoir. Un vieil homme est assis devant, sur un billot, et regarde la mer.",
      { after: "iis:greve_jour", before: "iis:greve_finie", text: "Les portes sont fermées, les enfants rentrés. Une casaque noire passe dans la ruelle, gourdin à la main, et frappe chaque volet en passant." },
    ],
    choices: [
      { label: "La femme qui ravaude une voile", to: "IIS_avoye" },
      { label: "Le vieil homme devant la cabane qui penche", to: "IIS_eudes" },
      { label: "Les enfants qui font la ronde dans la flaque", hide: { seen: "IIS_comptine" }, to: "IIS_comptine" },
      { back: "IIS_arrivee" },
    ] },
});

// ==================================================================== the chapel: the lace and the salt crown
Object.assign(P, {
  IIS_chapelle: { act: "II", title: "La chapelle du Sel", place: "saline", backName: "la chapelle du Sel",
    text: [
      { first: true, text: "La chapelle Sainte-Marine-des-Sels est une grange de pierre blanchie, avec un clocher de bois pas plus haut qu'un homme sur les épaules d'un autre. Dedans, six bancs, un autel de pierre nue, et l'odeur de la cire mêlée à celle du sel, qui remonte des murs et fleurit en barbe blanche au pied des piliers." },
      { again: true, text: "La chapelle du Sel, fraîche et blanche. Une veuve allume une chandelle et s'en va sans te voir." },
      { again: true, after: "tresor:iis_couronne", text: "Dans la niche, le coussin de velours est vide. Quelqu'un y a posé une poignée de gros sel, en cercle." },
      "Les bancs {{echo#iis_echo_chapelle|craquent du sel qui sèche dans le bois|rendent une voix d'homme, basse, pressée, très ancienne : « Trois couplets pour trois bassins, et que jamais un seul saunier ne les chante tous les trois »}}.",
      "Sur l'autel, une nappe de dentelle d'un blanc jauni, large comme une table, tient sous deux chandeliers de fer. Au-dessus, dans une niche creusée dans le mur, sous une vitre de corne, une couronne étincelle faiblement dans la pénombre : une couronne de sel.",
      { with: "lison", text: "Lison s'approche de l'autel et touche le bord de la nappe, du bout de l'index. « C'est la main de ma grand-mère, dit-elle. Je reconnais son point de rose. Elle l'a faite pour cette chapelle l'année de ses noces. Elle {{oreille#iis_lison_nappe|y voyait encore, à l'époque|savait déjà ce qu'elle y mettait, et pour qui}}. »" },
    ],
    choices: [
      { label: "Regarder de près la nappe de dentelle", to: "IIS_dentelle" },
      { label: "La couronne de sel, dans sa niche", hide: { has: "iis:couronne_finie" }, to: "IIS_couronne" },
      { label: "Le cimetière, derrière la chapelle", hide: { not: { quest: "IIS_noye" } }, to: "IIS_cimetiere" },
      { back: "IIS_arrivee" },
    ] },

  IIS_dentelle: { act: "II", title: "La nappe d'autel", place: "saline",
    text: [
      "Tu te penches sur la nappe. Le fil de lin est si fin qu'on voit la pierre au travers. La bordure court tout autour de l'autel en une seule frise qui ne se répète jamais tout à fait, et les petites vieilles de la Saline doivent la connaître par cœur à force de prier devant.",
      { if: { lens: "loupe" }, text: "Tu sors la loupe d'ambre et tu la promènes sur la frise. Le motif {{loupe#iis_dentelle|aligne des roues, des vagues, des oiseaux de mer, répétés comme une prière|raconte en quatre images : une porte calée d'un pieu par mer haute ; une roue qui tourne seule, sa meule posée à côté ; la même roue arrêtée, une pale couronnée tournée vers le fond ; et sous la roue, un escalier}}.", else: "Le motif aligne des roues, des vagues, des oiseaux de mer, répétés comme une prière. Des lacets de fil plus serré, ici et là, ont l'air d'une écriture." },
      { if: { clue: "iij_c_saline" }, text: "C'est la même main, le même point de rose que la dentelle de la Mère, aux Joncs. Ici, le moulin est vu de côté, comme le voit le saunier qui le fait tourner." },
      { with: "gildas", text: "Frère Gildas regarde la frise longtemps, les mains dans ses manches. « Les dentellières des Joncs ont une façon de compter les points qui ressemble à nos neumes, dit-il. Un chant, mais pour les doigts. »" },
      { after: "voile:iis_dentelle", with: "lison", text: "Lison suit ton regard sur la frise, et sa bouche se pince. « Elle aurait pu me le dire, souffle-t-elle. Elle m'a fait apprendre ce point-là à huit ans. »" },
    ],
    choices: [{ back: "IIS_chapelle" }] },

  IIS_couronne: { act: "II", title: "La couronne de sel", place: "saline",
    text: [
      "La niche est fermée d'une vitre de corne jaunie, scellée au plâtre. Derrière, sur un coussin de velours mangé de sel, repose {{pie#iis_couronne|une couronne de cristaux de sel, fragile comme du sucre, qu'un souffle ferait tomber en poudre|une couronne de cristaux de sel où se devine, dessous, un cercle d'argent doré ciselé de joncs et de vagues, aussi solide qu'au premier jour}}.",
      "Sous la niche, une plaque de bois peinte dit en lettres rouges : *Couronne de la Sainte, faite par la mer. Ne pas toucher.* Une vieille saunière, à genoux sur le premier banc, te surveille du coin de l'œil en égrenant un chapelet de noyaux d'olive.",
      "« Les anciens disent que la mer l'a formée toute seule, dans le bassin de la reine, dit-elle sans que tu aies rien demandé. Le jour où elle tombera en poudre, la Saline mourra. »",
      { after: "iis:greve_gagnee", text: "La vieille te reconnaît. Elle se lève, sort une clef de son tablier et la tient dans sa main fermée. « On a parlé de vous, à la grange, dit-elle. Si la Sainte vous fait signe, la clef est là. »" },
    ],
    choices: [
      { label: "Accepter la clef de la vieille saunière", hide: { not: { has: "iis:greve_gagnee" } }, fx: { item: "iis_tr_couronne", clock: { tresors: 1 }, flag: ["tresor:iis_couronne", "iis:couronne_finie"], fac: { hautes: 3 }, ep: ["perso", 600] }, to: "IIS_couronne_prise" },
      { label: "Revenir la nuit et desceller la vitre", hide: { has: "iis:greve_gagnee" }, test: { dom: "discretion", diff: -10, label: "Desceller une niche sans bruit", help: [{ if: { item: "crochets" }, v: 10 }, { with: "lison", v: 10 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { item: "iis_tr_couronne", clock: { tresors: 1 }, flag: ["tresor:iis_couronne", "iis:couronne_finie", "iis:couronne_volee"], fac: { hautes: -10 }, ep: ["perso", 400] }, to: "IIS_couronne_prise" },
        lose: { fx: { fac: { hautes: -5 }, flag: "iis:couronne_finie" }, to: "IIS_couronne_prise" } },
      { label: "La laisser à la Sainte", fx: { flag: "iis:couronne_finie", fac: { hautes: 2 } }, back: "IIS_chapelle" },
    ] },

  IIS_couronne_prise: { act: "II", title: "La couronne de sel", place: "saline",
    text: [
      { if: { has: "iis:couronne_volee" }, text: "Le plâtre cède sous la lame avec un bruit de biscuit. Tu soulèves la couronne à deux mains. Le sel tombe en pluie fine sur le velours, et dessous apparaît un cercle d'argent doré, froid, lourd, ciselé de joncs. Tu le roules dans ton manteau. Demain, la niche sera vide, et la Saline cherchera qui." },
      { if: { all: [{ not: { has: "iis:couronne_volee" } }, { not: { has: "iis:greve_gagnee" } }] }, text: "La vitre résiste, puis grince. Une lumière se lève au fond de la chapelle : le sacristain, une chandelle dans une main, un fléau à blé dans l'autre. Tu sors par la fenêtre du chevet et tu cours entre les bassins. Le lendemain, toute la Saline sait qu'on a voulu voler la Sainte, et la niche a un cadenas neuf." },
      { if: { has: "iis:greve_gagnee" }, text: "La vieille ouvre la niche elle-même. Elle te met la couronne dans les mains, et le sel s'en détache en poudre, comme elle l'avait dit, et dessous il y a de l'argent doré. Elle ne paraît pas surprise. « La reine l'avait laissée aux sauniers, dit-elle. Les sauniers vous la donnent. Prenez-en soin, vous ou ceux qui viendront après. »" },
    ],
    choices: [{ back: "IIS_chapelle" }] },
});

// ==================================================================== the Salt House: the masters, the contract
Object.assign(P, {
  IIS_maison: { act: "II", title: "La Maison du Sel", place: "saline", backName: "la Maison du Sel",
    text: [
      { first: true, text: "La Maison du Sel est la seule bâtisse de pierre de taille de la Saline, en dehors du moulin : deux étages, des arcades au rez-de-chaussée où l'on pèse le sel, un perron de six marches et, au-dessus de la porte, un écusson repeint de frais où les armes de la Banque Marrel, un besant d'or sur fond noir, ont remplacé l'ancien râteau croisé des sauniers. La peinture noire bave un peu sur la pierre." },
      { again: true, when: "day", text: "Sous les arcades de la Maison du Sel, les balances grincent. Un clerc crie des poids, un autre les écrit." },
      { again: true, when: "night", text: "La Maison du Sel, la nuit. Deux fenêtres éclairées au premier étage. Une casaque noire somnole sur le perron." },
      "Dans le vestibule, sous un carreau de verre, le contrat de la Saint-Martin est affiché, comme la loi l'exige : deux grandes feuilles couvertes d'une écriture de notaire, avec trois sceaux de cire au bas.",
      { after: "iis:greve_jour", before: "iis:greve_finie", text: "Les volets du rez-de-chaussée sont fermés et barrés. Mâchefer a posté six hommes sous les arcades." },
    ],
    choices: [
      { label: "Lire le contrat affiché dans le vestibule", to: "IIS_contrat" },
      { label: "Demander à voir Maître Pallu", to: "IIS_pallu" },
      { label: "Le cabinet de Maîtresse Croze, sous les arcades", to: "IIS_croze" },
      { label: "Entrer de nuit, par les toits ou les communs", hide: { seen: "IIS_maison_nuit" }, to: "IIS_maison_nuit" },
      { back: "IIS_arrivee" },
    ] },

  IIS_contrat: { act: "II", title: "Le contrat de la Saint-Martin", place: "saline", fx: { flag: "iis:contrat_lu" },
    text: [
      "Tu lis lentement. Le notaire a écrit comme on écrit quand on ne tient pas à être lu : des phrases de dix lignes, pas un alinéa, les chiffres en toutes lettres.",
      "*Item, les maîtres sauniers de Grisemotte vendent à la Banque Marrel tout le sel des trois saisons à venir, au prix de quatre liards la mine, livrable à la Saint-Jean, et paieront leurs journaliers sur ledit prix.*",
      "*Item, le moulin dit de la Reine, avec sa roue et ses meules, {{loupe#iis_contrat_moulin|sera affermé à la Banque pour la durée du présent contrat|demeure à la Banque Marrel en pleine propriété, avec ses fondations, ses caves et tout ce qui s'y trouvera, même si le présent contrat venait à être rompu}}.*",
      "*Item, à défaut de livraison entière à la Saint-Jean, {{loupe#iis_contrat_terre|les maîtres paieront à la Banque un dédit d'un dixième|les œillets des maîtres eux-mêmes passent à la Banque, et la terre dessous, sans recours}}.*",
      "Les trois sceaux du bas sont celui de la Banque, celui de Maître Onésime Pallu et celui de Maîtresse Hermine Croze. La cire de Croze est {{pie#iis_cire_croze|aussi nette que les autres|écrasée de travers, comme par une main qui tremblait ou qu'on tenait}}.",
      { if: { has: "metier:lire" }, text: "Tu connais ces écritures de notaire. Les lignes de la Banque ont été tracées avec une plume plus fine que les autres, et repassées après coup." },
    ],
    choices: [{ back: "IIS_maison" }] },

  IIS_pallu: { act: "II", title: "Maître Pallu", place: "saline", fx: { meet: "iis_pallu" },
    text: [
      { first: true, text: "Maître Onésime Pallu te reçoit au premier étage, dans une salle lambrissée qui sent la cire d'abeille et le feu de bois, un luxe ici où l'on brûle de la tourbe. Il a soixante ans, la peau sèche et tirée, un pourpoint de velours gris, une chaîne d'argent sur la poitrine, et des doigts tachés d'encre qu'il croise sur son ventre. Il ne t'offre pas de siège." },
      { again: true, after: "iis:pallu_paye", text: "« Vous êtes toujours à Grisemotte, dit Pallu. Je vous ai payé cinq ducats pour l'inverse. » Il trempe sa plume et note quelque chose dans la marge de son registre." },
      { again: true, text: "Maître Pallu lève les yeux de ses comptes et ne les baisse plus tant que tu es là." },
      "« Je sais pourquoi on vient me voir, ces temps-ci, dit-il. Pour me dire que j'ai vendu la Saline. J'ai vendu du sel, voilà tout. La Banque {{oreille#iis_pallu_dette|nous a fait un prix honnête, dans une année difficile|tient mes dettes depuis dix ans, et elle m'a fait voir la corde qu'elle me passerait au cou}}. Les sauniers mangeront cet été. Sans ce contrat, ils ne mangeaient pas. »",
      "Tu parles du moulin. Il hausse un sourcil. « Le moulin ? Il {{oreille#iis_pallu_moulin|ne vaut rien, une vieille roue qui tient debout par habitude|vaut plus que toute la Saline, à ce que dit l'homme aux gants gris, et je donnerais cher pour savoir pourquoi}}. La Banque en voulait la ferme : elle l'a. »",
      { after: "mandat", text: "Il pose le doigt sur une feuille imprimée, parmi ses papiers, sans la retourner. « J'ai reçu de Salvèze des nouvelles de toutes sortes, dit-il. Je n'en ai encore fait part à personne. »" },
    ],
    choices: [
      { label: "« La Banque vous a fait voir la corde. Combien lui devez-vous ? »", hide: { any: [{ not: { voile: "iis_pallu_dette" } }, { seen: "IIS_pallu_marche" }] }, to: "IIS_pallu_marche" },
      { label: "« Relisez votre contrat. À la Saint-Jean, vos propres œillets passent à la Banque. »", hide: { any: [{ not: { voile: "iis_contrat_terre" } }, { has: "iis:pallu_ebranle" }] }, fx: { flag: "iis:pallu_ebranle", ep: ["perso", 500] }, to: "IIS_pallu_marche" },
      { label: "« Que voulez-vous pour me laisser descendre au moulin ? »", hide: { seen: "IIS_pallu_marche" }, to: "IIS_pallu_marche" },
      { back: "IIS_maison" },
    ] },

  IIS_pallu_marche: { act: "II", title: "Le marché de Pallu", place: "saline",
    text: [
      { if: { has: "iis:pallu_ebranle" }, text: "Pallu se lève, descend au vestibule à pas comptés, et tu l'entends rester longtemps devant le carreau de verre. Quand il remonte, il a vieilli. « Écrit après, dit-il. À l'encre de citron, ou je ne sais quoi. Et je l'ai scellé. » Il se rassied, et ses doigts tachés d'encre tremblent sur la table." },
      "« Je vais vous dire ce que je dois, dit Pallu. Onze mille ducats. Mon père en devait trois mille, et j'ai fait le reste en voulant le rembourser. La Banque ne me les réclame pas : elle me les garde, comme on garde un chien en laisse. »",
      "Il ouvre un tiroir et pose sur la table une bourse de cuir. « Je vous fais une proposition. Vous êtes venu{e} pour quelque chose qui est dans ce moulin, je ne veux pas savoir quoi. Prenez ceci, cinq ducats, et partez. Ou dites-moi ce que vous savez, et je vous en donne dix. {{oreille#iis_pallu_vend|Je suis un homme de parole|Ce que vous me direz, je le revendrai au Gaucher le soir même, et c'est lui qui me paiera vos dix ducats}}. »",
      { if: { has: "iis:pallu_ebranle" }, text: "Puis il regarde la bourse, et la remet dans le tiroir. « Non. Oubliez ça. Si mes œillets sont perdus de toute façon, autant que ce soit pour quelque chose. Si les sauniers posent le râteau, je ne lèverai pas la main contre eux. Je ne peux pas vous promettre plus. »" },
    ],
    choices: [
      { label: "Prendre les cinq ducats et promettre de partir", hide: { has: "iis:pallu_ebranle" }, fx: { gold: 100, fac: { banque: 5, hautes: -3 }, flag: "iis:pallu_paye" }, back: "IIS_maison" },
      { label: "Lui raconter une fausse histoire de trésor, pour qu'il la revende au Gaucher", hide: { any: [{ has: "iis:pallu_ebranle" }, { not: { voile: "iis_pallu_vend" } }, { has: "iis:gaucher_fini" }] }, fx: { gold: 200, flag: "iis:gaucher_leurre", ep: ["perso", 600] }, to: "IIS_pallu_leurre" },
      { label: "« Gardez votre argent. »", hide: { has: "iis:pallu_ebranle" }, fx: { fac: { hautes: 2 } }, back: "IIS_maison" },
      { label: "Le laisser à ses comptes", hide: { not: { has: "iis:pallu_ebranle" } }, fx: { flag: "iis:pallu_neutre", fac: { hautes: 3 } }, back: "IIS_maison" },
    ] },

  IIS_pallu_leurre: { act: "II", title: "Une histoire pour le Gaucher", place: "saline",
    text: [
      "Tu baisses la voix. Tu racontes à Pallu que la cache de la reine est sous le mulon de la Sainte, le plus vieux, au bout de la vasière, et qu'on y descend à marée pleine, quand l'eau couvre le talus. Tu inventes un couplet, avec la rime. Pallu note tout, la langue entre les dents, et compte dix ducats sur la table.",
      "Le soir même, depuis la digue, tu vois quatre silhouettes en gants gris patauger avec des pelles autour du vieux mulon, sous une lune qui monte. La marée les rattrape vers minuit. On les entend jurer jusqu'à la Pelle.",
      { with: "lison", text: "Lison rit sans bruit, la main sur la bouche. « Tu as menti à un menteur pour qu'il mente à un autre, dit-elle. Ma grand-mère appellerait ça de la belle ouvrage. »" },
    ],
    choices: [{ back: "IIS_maison" }] },

  IIS_croze: { act: "II", title: "Maîtresse Croze", place: "saline", fx: { meet: "iis_croze" },
    text: [
      { first: true, text: "Le cabinet de Maîtresse Hermine Croze tient sous deux arcades, fermé de planches : un bureau, une balance de changeur, un poêle de faïence, et des registres empilés jusqu'au plafond. Elle a cinquante ans, des cheveux noirs tirés, une robe de veuve qu'elle porte depuis si longtemps qu'elle a pris la forme de ses épaules. Elle compte des jetons de cuivre et ne s'arrête pas pour toi." },
      { again: true, text: "Maîtresse Croze compte ses jetons. Elle te fait signe d'attendre, et tu attends." },
      "« J'ai signé, dit-elle avant que tu demandes. Tout le monde veut savoir pourquoi j'ai signé. Parce que Pallu signait, et que seule contre la Banque je ne tiens pas une saison. J'ai {{oreille#iis_croze_main|signé de mon plein gré, comme une femme raisonnable|signé avec la main du notaire de la Banque posée sur la mienne, et j'ai senti qu'elle appuyait}}. »",
      "Elle range ses jetons en piles de dix. « Mes sauniers me détestent. Ils ont raison. {{oreille#iis_croze_greve|Je ne peux rien pour eux|S'ils posent le râteau, je voudrais être de leur côté, et je n'ai pas le courage de le dire la première}}. »",
    ],
    choices: [
      { label: "« Votre cire est écrasée de travers. Le notaire vous tenait la main. »", hide: { any: [{ not: { any: [{ voile: "iis_cire_croze" }, { voile: "iis_croze_main" }] } }, { seen: "IIS_croze_retournee" }] }, to: "IIS_croze_retournee" },
      { label: "« Lisez la clause du dédit à la loupe. Vos œillets y passent. »", hide: { any: [{ not: { voile: "iis_contrat_terre" } }, { seen: "IIS_croze_retournee" }] }, to: "IIS_croze_retournee" },
      { label: "« Les sauniers vous attendent. Dites-le la première. »", hide: { any: [{ not: { voile: "iis_croze_greve" } }, { seen: "IIS_croze_retournee" }] }, test: { dom: "social", diff: -10, label: "Donner du courage à Hermine Croze", help: [{ if: { has: "metier:parole" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { to: "IIS_croze_retournee" }, lose: { fx: { flag: "iis:croze_hesite" }, back: "IIS_maison" } },
      { back: "IIS_maison" },
    ] },

  IIS_croze_retournee: { act: "II", title: "Hermine Croze", place: "saline", fx: { flag: "iis:croze", fac: { hautes: 5, banque: -5 }, ep: ["perso", 800] },
    text: [
      "Hermine Croze pose ses jetons. Elle va jusqu'au vestibule, tu la suis. Elle regarde le contrat sous le verre, puis elle tend la main sans rien dire, et tu y poses la loupe.",
      { with: "gildas", text: "Frère Gildas lui tient la chandelle, d'une main parfaitement immobile." },
      "Elle lit longtemps. Quand elle te rend la loupe, elle a les lèvres blanches. « Les œillets de mon mari, dit-elle. Et de son père. Ils avaient prévu de tout prendre à la Saint-Jean, et de nous laisser dire merci. »",
      "Elle se redresse dans sa robe noire, et quelque chose de raide et d'ancien remonte en elle, une colère de propriétaire. « Si les sauniers posent le râteau, ils l'auront posé dans mes œillets aussi. Dites-le à Domitille Goulard. Et dites-lui que je viendrai à la grange, moi, si elle veut bien de moi. »",
    ],
    choices: [{ back: "IIS_maison" }] },

  IIS_maison_nuit: { act: "II", title: "La Maison du Sel, la nuit", place: "saline", takes: "night",
    text: [
      "La nuit, la Maison du Sel se garde mal. Une casaque noire dort sur le perron, enroulée dans une couverture ; une autre fait le tour du bâtiment toutes les heures, en traînant les pieds. Les communs donnent sur une cour où l'on empile les sacs de sel vides, et un appentis monte jusqu'aux fenêtres du premier.",
      "Au premier, il y a le cabinet de Pallu, ses registres, son coffre, et, d'après ce qu'on dit au cabaret, les deux hommes du Gaucher qui logent sous les combles.",
      { with: "tibere", text: "Tibère regarde l'appentis, puis ses propres genoux. « Je fais le guet en bas, dit-il. Si je siffle, c'est que quelqu'un vient. Si je siffle deux fois, c'est que c'est moi qui viens. »" },
    ],
    choices: [
      { label: "Monter par l'appentis jusqu'au cabinet de Pallu", test: { dom: "discretion", diff: -10, label: "Entrer sans réveiller la Maison", help: [{ with: "lison", v: 10 }, { if: { item: "crochets" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIS_cabinet" }, lose: { to: "IIS_maison_pris" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison monte la première" },
        win: { fx: { ep: ["perso", 500], conf: { lison: 3 } }, to: "IIS_cabinet" }, lose: { to: "IIS_maison_pris" } },
      { label: "Renoncer pour cette nuit", back: "IIS_maison" },
    ] },

  IIS_cabinet: { act: "II", title: "Le cabinet de Pallu", place: "saline",
    text: [
      "Le cabinet sent le froid et la cire. À la lueur de la lune, tu distingues un bureau couvert de registres, un coffre de fer cloué au plancher, et sur une crédence, entre deux chandeliers, un grand gobelet d'étain à pied, terne, cabossé, qu'on a posé là comme un souvenir de famille. Le gobelet {{pie#iis_gobelet|est de l'étain gris des tavernes, sans valeur|est d'argent doré sous une couche d'étain peint, et porte sur le pied, en creux, les armes de la reine Ysaure : un râteau et une couronne}}.",
      "Dans le registre ouvert, la dernière page est de la main de Pallu : *{{loupe#iis_registre_pallu|Reçu du Gaucher, pour le logement de quatre, douze ducats|Le Gaucher dit que Brunel paie le reste quand la dalle sera levée, et qu'il faut la Saint-Jean pour avoir le droit de casser le moulin}}.*",
      "Au-dessus de toi, sous les combles, des bottes raclent le plancher. Quelqu'un tousse.",
    ],
    choices: [
      { label: "Prendre le gobelet sous ton manteau", hide: { any: [{ not: { voile: "iis_gobelet" } }, { has: "tresor:iis_gobelet" }] }, fx: { item: "iis_tr_gobelet", clock: { tresors: 1 }, flag: "tresor:iis_gobelet", ep: ["perso", 400] }, back: "IIS_maison" },
      { label: "Prendre une copie du contrat dans le registre", hide: { has: "iis:copie" }, fx: { item: "iis_copie_contrat", flag: "iis:copie" }, back: "IIS_maison" },
      { label: "Redescendre sans rien toucher", back: "IIS_maison" },
    ] },

  IIS_maison_pris: { act: "II", title: "Pris sur l'appentis", place: "saline",
    text: [
      "Une tuile glisse sous ton pied et se brise dans la cour. La casaque noire du perron se dresse, sa couverture sur les épaules, et crie. Une fenêtre s'ouvre sous les combles. Une voix tranquille, de la main gauche peut-être, dit : « Laisse. Je descends. »",
      "Tu sautes dans la cour, sur les sacs vides, et tu cours. Derrière toi, les pas restent tranquilles. Le lendemain, quand tu repasses devant la Maison du Sel, un homme aux gants gris est assis sur le perron et te salue en portant deux doigts à son chapeau.",
      { with: "tibere", text: "Tibère te rejoint au cabaret, essoufflé. « J'ai sifflé, dit-il. Deux fois. Je me suis trompé. »" },
    ],
    fx: { flag: "iis:gaucher_mefiant", pv: -2 },
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== the queen's tide mill
Object.assign(P, {
  IIS_moulin: { act: "II", title: "Le moulin de la reine", place: "saline", backName: "le moulin de la reine",
    text: [
      { first: true, text: "Le moulin ferme la digue comme un verrou. Il est bâti de grosses pierres noires, rongées de sel jusqu'à hauteur d'homme, avec un toit d'ardoise et une seule fenêtre. D'un côté, la baie, que les sauniers appellent la Goule ; de l'autre, la retenue, un étang carré que la mer remplit à chaque marée par deux portes de chêne. Entre les deux, sous une arche, la grande roue à pales plonge dans un canal de pierre, le coursier, et tourne quand la retenue se vide vers la mer." },
      { again: true, when: "day", text: "Le moulin de la reine, ses pierres noires, sa roue. L'eau parle sous l'arche." },
      { again: true, when: "night", text: "Le moulin, la nuit. Une lanterne à la fenêtre, et le grondement de la roue quand la mer descend." },
      "Au-dessus de la porte, un linteau de granit porte une inscription en lettres anciennes, presque effacée : *{{loupe#iis_linteau|La mer moud pour la reine|La mer garde la reine : trois chants pour l'ouvrir, et la mer pour la refermer}}.*",
      "Les pierres du seuil {{echo#iis_echo_moulin|sont creusées par trois siècles de sacs de sel|rendent une voix d'homme âgé qui dicte lentement : « Sous la roue. Que la mer en garde la porte deux fois par jour, et le chant les autres heures »}}.",
      { before: "saline:ouverte", text: "Deux casaques noires gardent la porte, assises sur des sacs, et un écriteau tout neuf cloué au chambranle dit : *Propriété de la Banque Marrel. Défense d'entrer.*" },
      { with: "gildas", text: "Frère Gildas lève les yeux vers le linteau et reste ainsi un long moment. « Une belle écriture, dit-il. Les graveurs de la reine avaient la main sûre. » Il ne lit pas l'inscription à voix haute." },
    ],
    choices: [
      { label: "Parler au meunier, qui fume sa pipe sur le seuil de l'arche", to: "IIS_ogier" },
      { label: "Entrer avec Ogier, qui t'ouvre la porte de l'arche", big: true, hide: { any: [{ not: { has: "iis:ogier_allie" } }, { has: "saline:ouverte" }] }, to: "IIS_moulin_dedans" },
      { label: "De nuit, se glisser sous l'arche, le long de la roue", hide: { has: "saline:ouverte" }, test: { dom: "discretion", diff: -10, label: "Passer sous le nez des gardes", help: [{ with: "lison", v: 10 }, { when: "night", v: 10 }, { if: { has: "iis:gobert_achete" }, v: 5 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIS_moulin_dedans" }, lose: { to: "IIS_moulin_garde" } },
      { label: "Bousculer les deux gardes et entrer", hide: { has: "saline:ouverte" }, fight: { title: "La porte du moulin", enemies: [{ id: "iis_nervi", n: 2 }],
        win: { fx: { ep: ["perso", 600], fac: { banque: -5 }, flag: "iis:alerte" }, to: "IIS_moulin_dedans" },
        lose: { fx: { pv: -3 }, to: "IIS_moulin_garde" },
        flee: { label: "Sauter dans la retenue", dom: "nature", diff: 0, to: "IIS_moulin" } } },
      { back: "IIS_arrivee" },
    ] },

  IIS_ogier: { act: "II", title: "Ogier Bascle, meunier", place: "saline", fx: { meet: "iis_ogier" },
    text: [
      { first: true, text: "Le meunier est un homme carré, couvert d'une poussière de sel qui le fait paraître plus vieux qu'il n'est, avec une moustache jaunie par la pipe. Il s'appelle Ogier Bascle, et son père, son grand-père, et le grand-père de son grand-père ont tenu ce moulin avant lui. Il te dit tout cela d'une traite, comme on montre ses papiers." },
      { again: true, text: "Ogier tire sur sa pipe et te fait une place sur le seuil." },
      "« Le moulin est à la Banque, maintenant, dit-il. C'est écrit sur la porte. Moi, {{oreille#iis_ogier_reste|je fais tourner la roue tant qu'on me paie mes journées|je reste parce que mon père m'a fait jurer de ne jamais laisser un étranger seul avec la roue}}. »",
      { after: "iis:noye_vu", text: "Tu parles de Hamon Lefeuvre. Ogier souffle sa fumée vers l'eau. « Hamon ? Je {{oreille#iis_ogier_hamon|ne l'ai pas vu, cette nuit-là ; je dormais|l'ai vu passer sur la digue avec Mâchefer, à la nuit tombée, et Mâchefer est revenu seul, en s'essuyant les mains à son tablier}}. »" },
      { with: "lison", text: "Ogier a reconnu Lison. Il ôte sa pipe de sa bouche, pour elle seulement. « La petite Vasse. Ta grand-mère t'envoie ? » Lison répond : « {{oreille#iis_lison_ogier|Elle t'envoie le bonjour|Elle demande si le pieu est toujours au mur}}. » Le meunier la regarde longtemps." },
    ],
    choices: [
      { label: "« Quand la mer est pleine, on cale la porte. Votre père vous l'a dit aussi ? »", hide: { any: [{ not: { any: [{ voile: "iis_c1" }, { voile: "iis_dentelle" }] } }, { has: "iis:ogier_allie" }] }, fx: { flag: "iis:ogier_allie", ep: ["perso", 600] }, to: "IIS_ogier_allie" },
      { label: "Laisse-moi faire", who: "lison", hide: { has: "iis:ogier_allie" }, fx: { flag: "iis:ogier_allie", conf: { lison: 5 } }, to: "IIS_ogier_allie" },
      { label: "« Les sauniers posent le râteau. Vous êtes avec eux ? »", hide: { any: [{ not: { has: "iis:greve_soutenue" } }, { has: "iis:ogier_allie" }] }, fx: { flag: "iis:ogier_allie" }, to: "IIS_ogier_allie" },
      { label: "« Mâchefer est revenu seul, cette nuit-là. Vous le diriez devant les autres ? »", hide: { any: [{ not: { voile: "iis_ogier_hamon" } }, { has: "iis:noye_ogier" }] }, fx: { flag: "iis:noye_ogier" }, to: "IIS_ogier_hamon" },
      { label: "Écouter Ogier raconter le moulin", hide: { any: [{ not: { has: "iis:ogier_allie" } }, { seen: "IIS_ogier_histoire" }] }, to: "IIS_ogier_histoire" },
      { back: "IIS_moulin" },
    ] },

  IIS_ogier_allie: { act: "II", title: "Le serment du meunier", place: "saline",
    text: [
      "Ogier tape sa pipe contre la pierre, longtemps, bien plus longtemps qu'il ne faut pour la vider. « Mon père disait qu'un jour quelqu'un viendrait chanter juste, dit-il enfin. Je croyais que c'était une façon de parler. »",
      "Il se lève. « La Banque me paie pour faire tourner la roue et pour fermer la porte aux curieux. Elle ne m'a jamais dit lesquels. Les gardes dorment au jusant de nuit ; je fais la relève moi-même. Quand vous voudrez descendre, venez me trouver, et la porte de l'arche sera ouverte. »",
      { with: "lison", text: "Lison serre la main du meunier, une seule fois, fort, à la façon des Joncs." },
    ],
    choices: [{ back: "IIS_moulin" }] },

  IIS_ogier_hamon: { act: "II", title: "Ce qu'a vu le meunier", place: "saline",
    text: [
      "Ogier regarde ses mains. « Devant les autres, dit-il. Devant Mâchefer. » Il remet sa pipe éteinte dans sa bouche, mord le tuyau. « Hamon m'avait apporté du tabac de la ville, le mois dernier. Il disait qu'il irait à Salvèze avec la copie, que les juges de la République liraient. Il avait de l'espoir, Hamon. »",
      "Il hoche la tête, lentement, comme on enfonce un pieu. « Oui. Je le dirai. Mais il me faut quelqu'un à côté de moi, quand je le dirai. »",
    ],
    choices: [{ back: "IIS_moulin" }] },

  IIS_moulin_garde: { act: "II", title: "Les gardes du moulin", place: "saline",
    text: [
      "Une main t'attrape par l'épaule. Les deux casaques noires sont sur toi, et la plus jeune lève déjà son gourdin. Puis la porte de l'arche s'ouvre, et Ogier le meunier passe la tête, une lanterne au poing. « Lâchez ça, dit-il. C'est quelqu'un qui me livrait du tabac. Vous voulez que j'aille dire à Mâchefer que vous dormiez ? »",
      "Les gardes te lâchent en grognant. Ogier te pousse vers la digue sans un mot. Avant de refermer, il dit seulement, à voix basse : « Pas comme ça. Revenez me parler, le jour. »",
    ],
    fx: { flag: "iis:alerte" },
    choices: [{ back: "IIS_arrivee" }] },

  IIS_moulin_dedans: { act: "II", title: "Sous l'arche", place: "saline", backName: "la salle de la roue",
    text: [
      { first: true, text: "Sous l'arche, l'eau fait tout le bruit. La salle de la roue est une cave voûtée à demi ouverte sur le coursier, où la grande roue de chêne, haute de trois hommes, plonge ses douze pales. Un axe gros comme un tronc traverse le mur et monte vers les meules, à l'étage, par un engrenage de bois dur. Contre le mur de la retenue, la vanne de chasse, une porte de chêne qu'on lève au treuil. Contre le mur de la mer, on entend battre les deux portes à flot." },
      { again: true, text: "La salle de la roue, l'axe, la vanne, l'eau qui gronde. Ogier a laissé une lanterne sur un crochet." },
      "Au mur, entre deux crochets de fer, pend un vieux pieu {{pie#iis_pieu|gris et fendillé, oublié là depuis toujours|de frêne ferré, taillé exactement à la mesure de l'écart des portes à flot, et usé en un seul endroit, là où le chêne le serre}}.",
      "L'axe de la roue tourne dans une crapaudine noire, encrassée de suif. La crapaudine {{pie#iis_ambre|est un bloc de pierre dure, comme partout|est un bloc d'ambre des Écueils gros comme une noix, poli par trois siècles de rotation}}.",
      { after: "iis:ogier_allie", text: "Ogier se tient près du treuil, les bras croisés. « La mer est à vous, dit-il. Dites-moi quand. »" },
      { if: { has: "iis:porte" }, text: "Le pieu de frêne est toujours en travers des portes à flot, et la retenue a baissé de deux pieds." },
    ],
    choices: [
      { label: "Attendre la pleine mer, près des portes à flot", big: true, hide: { has: "saline:ouverte" }, to: "IIS_plein" },
      { label: "Démonter la crapaudine d'ambre et en mettre une de pierre", hide: { any: [{ not: { voile: "iis_ambre" } }, { has: "tresor:iis_ambre" }] }, test: { dom: "nature", diff: 0, label: "Changer la crapaudine sans gripper l'axe", help: [{ if: { has: "iis:ogier_allie" }, v: 20 }, { with: "tibere", v: 10 }] },
        win: { fx: { item: "iis_tr_ambre", clock: { tresors: 1 }, flag: "tresor:iis_ambre", ep: ["perso", 400] }, to: "IIS_moulin_dedans" },
        lose: { fx: { item: "iis_tr_ambre", clock: { tresors: 1 }, flag: ["tresor:iis_ambre", "iis:alerte"], pv: -2 }, to: "IIS_moulin_dedans" } },
      { back: "IIS_moulin" },
    ] },

  IIS_plein: { act: "II", title: "La pleine mer", place: "saline", takes: 3,
    text: [
      "La mer monte. Tu l'entends avant de la voir : elle pousse les deux portes de chêne, qui s'ouvrent vers l'intérieur avec un long soupir, et elle entre dans la retenue, brune, tiède, chargée d'écume. La roue s'est arrêtée. L'eau monte dans le coursier jusqu'aux genoux des pales, puis jusqu'à leur ventre.",
      "Puis vient l'étale. L'eau ne bouge plus. Dans un instant, la mer va redescendre, et les deux portes vont se refermer d'elles-mêmes sous la poussée de la retenue, comme elles le font deux fois par jour depuis trois cents ans, et garder l'eau pour la roue.",
      { with: "tibere", text: "Tibère regarde les portes, puis toi, puis les portes. « Si quelqu'un sait ce qu'on fait ici, c'est le moment de le dire », grogne-t-il." },
      { with: "gildas", text: "Frère Gildas s'est assis sur une marche, les mains dans les manches, et regarde l'eau avec une attention de copiste." },
    ],
    choices: [
      { label: "Caler les portes à flot ouvertes avec le pieu de frêne", hide: { not: { any: [{ voile: "iis_c1" }, { voile: "iis_dentelle" }, { voile: "iis_pieu" }] } }, fx: { flag: "iis:porte", ep: ["perso", 600] }, to: "IIS_jusant" },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "savoir", diff: -10, label: "Ce que veut dire l'inscription du linteau" },
        win: { fx: { flag: "iis:porte", ep: ["perso", 400] }, to: "IIS_jusant" }, lose: { to: "IIS_porte_ratee" } },
      { label: "Demander à Ogier ce qu'on fait de ce pieu", hide: { not: { has: "iis:ogier_allie" } }, test: { dom: "social", diff: 0, label: "Faire parler la mémoire d'un meunier" },
        win: { fx: { flag: "iis:porte" }, to: "IIS_jusant" }, lose: { to: "IIS_porte_ratee" } },
      { label: "Laisser les portes se fermer, comme toujours", to: "IIS_porte_ratee" },
    ] },

  IIS_porte_ratee: { act: "II", title: "La retenue pleine", place: "saline", takes: 9,
    text: [
      "Les portes se referment avec un claquement sourd. La mer s'en va, et la retenue reste pleine à ras bord, lisse comme un plat d'étain. Au jusant, quand la vanne se lève, l'eau dévale le coursier et la roue tourne des heures, et des heures, et la mer revient avant que la retenue ait seulement baissé de moitié.",
      "Tu as perdu une marée. La roue a moulu pour la Banque toute la nuit.",
      { after: "iis:ogier_allie", text: "Ogier hausse les épaules. « Mon père disait que la mer a de la patience pour deux. Il en faut un peu pour nous. »" },
    ],
    choices: [{ label: "Attendre la prochaine pleine mer", back: "IIS_moulin_dedans" }] },

  IIS_jusant: { act: "II", title: "Le jusant", place: "saline", takes: 3,
    text: [
      "Le pieu de frêne glisse entre les deux portes de chêne comme s'il retrouvait sa place. Quand la mer commence à descendre, les portes veulent se fermer, butent sur le pieu, et restent entrebâillées. La retenue se met à fuir vers la Goule, lentement d'abord, puis avec un bruit de rivière.",
      "Au bout de trois heures, l'eau de la retenue a baissé de moitié, et il en reste assez pour noyer le coursier jusqu'au moyeu de la roue. Au-dessus de toi, l'engrenage attend, les meules posées sur leur fer. Le treuil de la vanne de chasse est à portée de main.",
      { with: "lison", text: "Lison a les deux mains sur la manivelle du treuil. « On lève ? » dit-elle. Elle a l'air de quelqu'un qui retient un couplet entre ses dents." },
    ],
    choices: [
      { label: "Ôter les meules de leur fer, puis lever la vanne", hide: { not: { any: [{ voile: "iis_c2" }, { voile: "iis_dentelle" }] } }, fx: { ep: ["perso", 600] }, to: "IIS_etale" },
      { label: "Laisser Ogier faire tourner la roue à sa façon", hide: { not: { has: "iis:ogier_allie" } }, to: "IIS_etale" },
      { label: "Lever la vanne", to: "IIS_meules" },
    ] },

  IIS_meules: { act: "II", title: "Les meules à vide", place: "saline", fx: { flag: "iis:alerte" },
    text: [
      "La vanne monte, l'eau tombe dans le coursier en rugissant, la roue démarre d'un coup. Au-dessus de toi, l'axe entraîne l'engrenage, l'engrenage entraîne les meules, et les meules, qui n'ont rien à moudre, se mettent à frotter pierre contre pierre avec un cri aigu qui traverse le moulin et toute la Saline. Des étincelles tombent de l'étage par les fentes du plancher.",
      "Tu bondis sur le levier du fer et tu le tires. Les meules se taisent. La roue tourne à vide, libre, et la retenue se vide sous l'arche. Mais le cri a porté loin. Sur la digue, une lanterne s'est allumée, puis deux.",
    ],
    choices: [{ label: "Laisser la roue tourner jusqu'à la basse mer", to: "IIS_etale" }] },

  IIS_etale: { act: "II", title: "La basse mer", place: "saline", takes: 3,
    text: [
      "La retenue est presque sèche, une plaine de vase luisante où les crabes courent de travers. Le coursier ne roule plus qu'un filet d'eau. La mer s'est retirée si loin dans la Goule que tu ne la vois plus. C'est l'étale de basse mer : un moment immobile, qui ne dure pas.",
      "La roue tourne encore sur son élan, de plus en plus lentement, et ses douze pales passent l'une après l'autre au fond du coursier en raclant la pierre. Les pales {{pie#iis_pale|sont toutes pareilles, grises de sel et de vase|sont toutes pareilles, sauf une, dont la croûte de sel cache une couronne gravée dans le chêne}}. Le frein de corde pend à portée de ta main.",
      { with: "gildas", text: "Frère Gildas regarde passer les pales, et ses lèvres bougent sur un air que tu reconnais, très bas, sans paroles. Il s'en aperçoit et se tait." },
      { if: { has: "iis:alerte" }, text: "Sur la digue, des voix approchent, et des lanternes." },
    ],
    choices: [
      { label: "Serrer le frein quand la pale couronnée touche le fond du coursier", hide: { not: { any: [{ voile: "iis_c3" }, { voile: "iis_dentelle" }, { voile: "iis_comptine" }] } }, fx: { ep: ["perso", 800] }, to: "IIS_fosse" },
      { label: "Arrêter la roue sur la pale couronnée, au jugé", hide: { any: [{ not: { voile: "iis_pale" } }, { voile: "iis_c3" }, { voile: "iis_dentelle" }, { voile: "iis_comptine" }] }, test: { dom: "savoir", diff: -10, label: "Deviner où la reine veut sa couronne", help: [{ with: "gildas", v: 15 }, { if: { clue: "iij_c_saline" }, v: 15 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIS_fosse" }, lose: { to: "IIS_roue_ratee" } },
      { label: "Laisse-moi faire", who: "gildas", hide: { any: [{ voile: "iis_c3" }, { voile: "iis_dentelle" }, { voile: "iis_comptine" }] }, test: { dom: "savoir", diff: 0, label: "Frère Gildas tient le frein" },
        win: { fx: { ep: ["perso", 400] }, to: "IIS_fosse" }, lose: { to: "IIS_roue_ratee" } },
      { label: "Serrer le frein au hasard et chercher la dalle à la main", to: "IIS_roue_ratee" },
    ] },

  IIS_roue_ratee: { act: "II", title: "Le fond du coursier", place: "saline",
    text: [
      "La roue s'arrête dans un grincement. Tu descends dans le coursier, de la vase jusqu'aux chevilles, et tu tâtes le fond de pierre sous la roue, dalle après dalle, à genoux dans l'eau froide. Elles sont toutes scellées, toutes pareilles. Une seule, juste sous l'axe, {{pie#iis_dalle|est aussi scellée que les autres|a des joints de mortier frais, et sous le mortier une rainure, comme si on attendait qu'elle se lève}}.",
      "Loin dans la Goule, la mer a commencé à revenir. Tu l'entends, un bruit de foule qui approche.",
    ],
    choices: [
      { label: "Desceller la dalle aux joints frais, au couteau et à la barre", hide: { not: { voile: "iis_dalle" } }, test: { dom: "combat", diff: -10, label: "Arracher la dalle avant le flot", help: [{ with: "tibere", v: 20 }, { if: { has: "metier:mains" }, v: 10 }, { if: { has: "iis:ogier_allie" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIS_fosse" }, lose: { fx: { pv: -3 }, to: "IIS_porte_ratee" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "combat", diff: 0, label: "Tibère arrache la dalle" },
        win: { fx: { ep: ["perso", 400], conf: { tibere: 3 } }, to: "IIS_fosse" }, lose: { fx: { pv: -2 }, to: "IIS_porte_ratee" } },
      { label: "Abandonner la dalle à la mer, pour cette marée", to: "IIS_porte_ratee" },
    ] },

  IIS_fosse: { act: "II", title: "La dalle", place: "saline",
    text: [
      "La pale à la couronne descend contre le fond du coursier, et tu sens dans la corde du frein, au lieu du choc du bois sur la pierre, un enfoncement mou, comme une marche qui cède sous un pied. Sous la roue, une dalle carrée bascule sur un axe de bronze, avec un bruit d'os, et découvre un trou noir d'où monte un air froid, sec, qui sent la poussière et la cire.",
      { outcome: "win", text: "La dalle cède sous la barre, et tu la sens basculer sur un axe caché, comme elle l'aurait fait d'elle-même sous la bonne pale." },
      "Un escalier de pierre descend sous le coursier. Les marches sont sèches. Trois siècles de marées sont passés au-dessus sans en mouiller une seule.",
      { with: "lison", text: "Lison s'accroupit au bord du trou et regarde l'escalier. « On y est », dit-elle, et sa voix tremble un peu, de froid ou d'autre chose." },
      { with: "tibere", text: "Tibère allume une chandelle à la lanterne, la protège de sa main. « Je descends le premier, dit-il. Les vieux escaliers, c'est mon métier. »" },
    ],
    choices: [{ label: "Descendre sous la roue", big: true, to: "IIS_cache" }] },

  IIS_cache: { act: "II", title: "Sous la roue", place: "saline", fx: { relic: "f_saline", flag: "saline:ouverte", ep: ["histoire", 4000] },
    text: [
      "La salle est carrée, à peine plus grande qu'une chambre, voûtée en berceau, et si bien bâtie que les joints des pierres se voient à peine. Au fond, sur une banquette de pierre, un coffret de plomb, un pot de grès scellé de cire noire, et rien d'autre. Sur la paroi, au-dessus, la même main qui a gravé le linteau a écrit : *Ce que la reine n'a pu dire, la mer le garde.*",
      "Le coffret de plomb n'est pas fermé à clef. Dedans, roulé dans une toile cirée, un feuillet de parchemin épais, jauni, couvert d'une écriture serrée et, au bas, d'une rangée de petits dessins : des mains, des doigts pliés, des signes. Les mots qu'une femme sans langue a dits avec les mains, et qu'un chancelier a écrits sous sa dictée.",
      "Tu le tiens entre tes doigts. Il ne pèse rien.",
      { with: "gildas", text: "Frère Gildas est resté sur la dernière marche. Il regarde le feuillet dans ta main, et il fait sur sa poitrine un signe que tu ne connais pas, les deux doigts repliés sur la paume." },
      { with: "lison", text: "Lison ne dit rien. Elle pose la main à plat sur la banquette de pierre, comme on la pose sur l'épaule de quelqu'un." },
      "Au-dessus de vous, dans le coursier, un premier filet d'eau tombe de la roue et éclabousse l'escalier.",
    ],
    choices: [
      { label: "Prendre aussi le pot de grès scellé", hide: { has: "tresor:iis_sel" }, fx: { item: "iis_tr_sel", clock: { tresors: 1 }, flag: "tresor:iis_sel", ep: ["perso", 300] }, to: "IIS_cache" },
      { label: "Remonter, vite : la mer revient", big: true, to: "IIS_flot" },
    ] },

  IIS_flot: { act: "II", title: "Le flot", place: "saline", urgent: 25,
    text: [
      "La mer revient plus vite qu'elle n'est partie. Quand tu sors de l'escalier, le coursier roule déjà une eau trouble jusqu'à tes genoux, et elle monte. La dalle, derrière toi, se referme d'elle-même avec un bruit sourd quand le courant soulève la pale. La roue frémit, prête à repartir.",
      "Le chemin par lequel tu es descendu{e} est sous l'eau. Il reste les pales de la roue, glissantes, qui montent vers l'arche ; et le coursier lui-même, qui file vers la vanne et la salle de la roue, contre le courant.",
    ],
    choices: [
      { label: "Grimper de pale en pale jusqu'à l'arche", test: { dom: "nature", diff: -10, label: "Grimper sur une roue mouillée" },
        win: { fx: { ep: ["perso", 300] }, to: "IIS_sortie" }, lose: { to: "IIS_flot_pris" } },
      { label: "Remonter le coursier contre le courant, jusqu'à la vanne", fx: { pv: -2 }, to: "IIS_sortie" },
      { label: "Laisse-moi faire", who: "tibere", fx: { conf: { tibere: 5 } }, to: "IIS_sortie" },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 5 } }, to: "IIS_sortie" },
      { label: "Serrer le feuillet contre toi et attendre que l'eau passe", timeout: true, to: "IIS_flot_pris" },
    ] },

  IIS_flot_pris: { act: "II", title: "Pris par le flot", place: "saline", fx: { pv: -4 },
    text: [
      "L'eau te prend aux jambes, te couche, te roule contre la pierre du coursier. Tu tiens le coffret de plomb à deux bras contre ta poitrine, et c'est tout ce que tu tiens. Le courant t'emporte sous l'arche, te jette dans la retenue, et tu bois une gorgée de mer qui a le goût de la vase et du sel.",
      "Une gaffe t'accroche par la ceinture. Tu ne sais pas qui la tient. On te tire sur la vase, on te retourne, on te tape dans le dos jusqu'à ce que tu craches.",
      { with: "lison", text: "C'est Lison, à genoux dans la boue, trempée jusqu'aux épaules. « Tu ne lâches rien, toi, hein, dit-elle. Même pas le coffret. »", else: "C'est Ogier le meunier, sa lanterne posée sur le talus. « Le coffret, dit-il. Vous l'avez gardé. » Il a l'air soulagé, et pas pour toi seul{e}." },
    ],
    choices: [{ label: "Reprendre ton souffle sur la digue", to: "IIS_sortie" }] },

  IIS_sortie: { act: "II", title: "Sur la digue", place: "saline",
    text: [
      "Tu es sur la digue, trempé{e}, le coffret de plomb sous le bras. Derrière toi, la roue du moulin repart en grondant, comme elle le fait deux fois par jour, et le flot recouvre le coursier, la dalle, l'escalier.",
      { before: "iis:gaucher_fini", text: "Sur la digue, entre toi et les cabanes, quatre silhouettes attendent dans le vent. Gants gris. Celui du milieu tient une lanterne de la main gauche." },
      { if: { has: "iis:gaucher_leurre" }, before: "iis:gaucher_fini", text: "Ils sont couverts de vase jusqu'aux cuisses. Ils ont passé une partie de la nuit à creuser autour du vieux mulon de la vasière, et ils n'ont pas l'air de l'avoir apprécié." },
      { after: "iis:gaucher_fini", text: "La digue est déserte. Au loin, la lanterne du cabaret, et des chants qui viennent de la grange." },
    ],
    choices: [
      { label: "Faire face aux gants gris", big: true, hide: { has: "iis:gaucher_fini" }, to: "IIS_gaucher_digue" },
      { label: "Lire le feuillet de la reine, à l'abri", hide: { any: [{ not: { has: "iis:gaucher_fini" } }, { seen: "IIS_feuillet" }] }, to: "IIS_feuillet" },
      { back: "IIS_arrivee", hide: { not: { has: "iis:gaucher_fini" } } },
    ] },

  IIS_feuillet: { act: "II", title: "Le feuillet de la Saline", place: "saline",
    text: [
      "Tu déroules le feuillet sur une table du cabaret, à la lueur d'une chandelle, en le tenant aux coins avec deux gobelets. L'écriture est celle d'un clerc de chancellerie, droite, serrée, et elle commence comme un rôle de comptes :",
      "*Rôle des sels de Grisemotte, l'an quatorze de la reine. {{loupe#iis_feuillet_actes|Tant de muids au moulin, tant aux sauniers, tant à la couronne, selon l'usage|Moi, Ysaure, par la main d'Aymeric Vasse, je dis que les Comptoirs ont pris mon sceau la nuit de leur trahison, ma main liée dessus. Tout acte de terre qu'ils montreront, daté d'après la Saint-Michel, est faux}}.*",
      "*{{loupe#iis_feuillet_grain|Le sel de la reine sera mis à part, en pot scellé, pour les malades|Mes scelleurs glissaient un grain de sel sous la cire de chaque acte vrai. Qu'on brise la cire : où il n'y a pas de grain, il n'y a pas de reine}}.*",
      "*{{loupe#iis_feuillet_terre|Ainsi fait et compté au moulin, devant les maîtres sauniers|Les œillets sont à ceux qui les ont tirés de la mer, et à leurs enfants. Je l'ai signé. Ils m'ont pris la langue pour que je ne le redise pas}}.*",
      "Au bas, les petits dessins de mains. Une main ouverte. Une main fermée. Deux doigts posés sur la bouche.",
      { with: "gildas", text: "Frère Gildas regarde les dessins de mains, et sans y penser, ses doigts en refont un, sur la table, le dernier. Puis il cache sa main dans sa manche." },
    ],
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== side quest: the queen's verse (Eudes and Méen)
Object.assign(P, {
  IIS_eudes: { act: "II", title: "Le vieil Eudes", place: "saline", fx: { meet: "iis_eudes", questSeen: "IIS_eudes" },
    text: [
      { first: true, text: "Le vieil homme assis devant la cabane qui penche a quatre-vingts ans, peut-être plus. Ses mains posées sur ses genoux sont blanches de sel dans chaque ride, comme si le sel était entré sous la peau pour de bon. Il ne t'entend pas venir. Quand ton ombre tombe sur lui, il lève des yeux très clairs et parle trop fort, comme parlent les sourds." },
      { again: true, text: "Eudes regarde la mer. Il te voit, et hoche la tête, et recommence à regarder la mer." },
      "« Je suis Eudes, crie-t-il. Je ne vous entends pas, alors ne vous fatiguez pas. Écrivez, si vous savez, ou montrez du doigt. Vous voulez le couplet, hein ? Tout le monde le veut, depuis que les gants gris sont là. »",
      "Il te tend une ardoise et un bout de craie. Tu écris : *la reine*. Il lit, essuie l'ardoise de sa manche. « Le couplet de la reine ne se chante qu'à un seul, d'un vieux à un jeune, crie-t-il. Moi, je le dois à mon petit-fils Méen. Méen {{oreille#iis_eudes_meen|a choisi son camp, grand bien lui fasse|est le seul à qui je dois le chanter, et je vais mourir sans l'avoir fait, parce que je n'ai pas su lui demander pardon}}. »",
      "« Il a pris la casaque noire, crie Eudes. Il porte le gourdin pour Mâchefer, à six liards la journée. Il passe devant ma porte sans tourner la tête. »",
      { with: "lison", text: "Lison s'accroupit devant le vieil homme, prend la craie, et écrit quelques mots sur l'ardoise, en tenant la main de façon qu'on ne voie pas. Eudes lit, et ses yeux clairs se mouillent. Il efface très lentement." },
    ],
    choices: [
      { label: "Aller trouver Méen, sous les arcades de la Maison du Sel", hide: { seen: "IIS_meen" }, to: "IIS_meen" },
      { label: "Laisse-moi faire", who: "lison", hide: { quest: "IIS_eudes" }, fx: { flag: "iis:eudes_lison", conf: { lison: 3 } }, to: "IIS_eudes_chant" },
      { label: "Écrire sur l'ardoise que tu apprendras le couplet à Méen, plus tard", hide: { any: [{ not: { seen: "IIS_meen" } }, { quest: "IIS_eudes" }] }, fx: { flag: "iis:meen_perdu" }, to: "IIS_eudes_chant" },
      { back: "IIS_cabanes" },
    ] },

  IIS_meen: { act: "II", title: "Méen", place: "saline", fx: { meet: "iis_meen" },
    text: [
      "Sous les arcades de la Maison du Sel, trois casaques noires jouent aux osselets sur une balance renversée. Le plus jeune a seize ans, des épaules qui n'ont pas fini de pousser, et une casaque taillée pour un homme plus large, dont il a retroussé les manches. Il tient son gourdin sur les genoux comme un cadeau.",
      "Quand tu lui dis le nom de son grand-père, il rougit jusqu'aux oreilles. « Mon grand-père {{oreille#iis_meen_pardon|radote ses vieilles chansons, voilà tout|ne m'a jamais demandé de rester ; il me l'a ordonné, devant tout le monde, et j'attendais qu'il me le demande}}, dit-il. Ici, on me paie. Six liards, tous les soirs. Chez lui, on me paie en couplets. »",
      { with: "tibere", text: "Tibère regarde le garçon avec une attention bizarre, presque douloureuse. « J'ai une fille de ton âge, dit-il. Elle ne me parle plus. Ça ne m'a pas rendu plus riche. »" },
      { after: "iis:greve_decidee", text: "Les deux autres casaques noires se taisent quand tu parles de la grève. Méen regarde ses mains." },
    ],
    choices: [
      { label: "« Il veut te demander pardon. Il ne sait pas comment. »", hide: { not: { voile: "iis_eudes_meen" } }, fx: { flag: "iis:meen_revenu", ep: ["perso", 600] }, to: "IIS_eudes_chant" },
      { label: "« Il ne t'ordonnera plus rien. Il veut te le demander. »", hide: { any: [{ not: { voile: "iis_meen_pardon" } }, { voile: "iis_eudes_meen" }] }, fx: { flag: "iis:meen_revenu", ep: ["perso", 500] }, to: "IIS_eudes_chant" },
      { label: "« Ton patron a ouvert la tête de Hamon Lefeuvre. Tu porteras son gourdin longtemps ? »", hide: { not: { has: "iis:noye_temoin" } }, fx: { flag: "iis:meen_revenu", fac: { hautes: 3 } }, to: "IIS_eudes_chant" },
      { label: "Le convaincre de rentrer chez son grand-père", test: { dom: "social", diff: -10, label: "Ramener un garçon fier", help: [{ with: "tibere", v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "iis:meen_revenu", ep: ["perso", 400] }, to: "IIS_eudes_chant" }, lose: { fx: { flag: "iis:meen_perdu" }, back: "IIS_maison" } },
      { back: "IIS_maison" },
    ] },

  IIS_eudes_chant: { act: "II", title: "Le couplet de la reine", place: "saline", fx: { quest: "IIS_eudes", flag: "iis:eudes", fac: { hautes: 3 }, ep: ["seance", 1200] },
    text: [
      { if: { has: "iis:meen_revenu" }, text: "Méen marche devant toi jusqu'à la cabane qui penche, la casaque noire roulée sous le bras. Devant son grand-père, il ne dit rien. Il s'assied sur le billot, à côté de lui, et pose la casaque par terre, entre eux. Eudes la regarde longtemps. Puis il pose sa main blanche de sel sur la nuque du garçon, une seule fois, et la retire." },
      { if: { all: [{ has: "iis:eudes_lison" }, { not: { has: "iis:meen_revenu" } }] }, text: "Le vieil homme regarde Lison, puis toi. « Une Vasse me le demande, crie-t-il. Une Vasse, ça ne se refuse pas. Mais vous le chanterez au gamin, un jour, vous. »" },
      { if: { all: [{ has: "iis:meen_perdu" }, { not: { has: "iis:meen_revenu" } }, { not: { has: "iis:eudes_lison" } }] }, text: "Eudes lit l'ardoise, longtemps. « Vous me promettez ça, crie-t-il. Moi, je n'ai plus le temps d'attendre qu'il revienne. » Il s'essuie les yeux avec le dos de la main, comme on chasse une mouche." },
      "Puis il chante. Sa voix est cassée, trop forte, et il ne l'entend pas. Il bat la mesure sur son genou avec le plat de la main, comme on bat le sel au râteau, et la mesure est juste : *« La reine se couche au fond de l'eau, {{oreille#iis_c3|sa couronne en bas, son cœur en haut|arrête la roue quand la pale couronnée touche le fond du coursier, et la dalle se lève sous elle}}. »*",
      "Il chante le couplet trois fois, sans changer une syllabe. Puis il se tait, et regarde la mer, comme si la mer allait lui dire s'il avait chanté juste.",
      { if: { has: "iis:meen_revenu" }, text: "Méen répète le couplet tout bas, une fois, en se trompant d'un mot. Son grand-père n'entend pas l'erreur. Le garçon se reprend tout seul." },
      { with: "gildas", text: "Frère Gildas a fermé les yeux pendant tout le chant. Quand il les rouvre, il dit seulement : « Il a chanté juste. »" },
    ],
    choices: [{ back: "IIS_cabanes" }] },
});

// ==================================================================== side quest: Alain Quéré's tally
Object.assign(P, {
  IIS_avoye: { act: "II", title: "La veuve Quéré", place: "saline", fx: { meet: "iis_avoye", questSeen: "IIS_taille" },
    text: [
      { first: true, text: "La femme qui ravaude la voile a trente-cinq ans, et le deuil lui en donne dix de plus. Ses aiguilles vont vite, trop vite, et elle se pique sans s'arrêter. Une petite fille de six ans joue à ses pieds avec un crabe mort." },
      { again: true, text: "Avoye Quéré ravaude toujours la même voile, qui n'en finit pas." },
      "« Avoye Quéré, dit-elle. Mon mari, c'était Alain. Il est mort à la Toussaint, de la fièvre. Maître Pallu dit que nous lui devons trente ducats. Alain {{oreille#iis_avoye_taille|lui devait bien quelque chose, je suppose|avait tout payé, jusqu'au dernier liard, et il me l'a juré la veille de mourir, la taille à la main}}. »",
      "Elle coupe son fil avec les dents. « La taille, c'est la baguette où l'on marque les dettes. On la fend en deux : le maître garde une moitié, le saunier l'autre. Quand on paie, on rapproche les deux moitiés et on entaille ensemble. La moitié d'Alain, je ne l'ai jamais retrouvée. Il cachait tout dans le sel, Alain. Il disait que les maisons brûlent, et que le sel garde. »",
      { after: "iis:greve_gagnee", text: "« La grève a fait du bien à tout le monde, ajoute-t-elle. Mais Pallu ne lâche pas les dettes. Il lâchera le reste avant. »" },
    ],
    choices: [
      { label: "« Son mulon, au piquet noir. Il sonne creux. »", hide: { any: [{ not: { voile: "iis_mulon_creux" } }, { seen: "IIS_taille_mulon" }] }, to: "IIS_taille_mulon" },
      { label: "« Je vais regarder dans son mulon. »", hide: { any: [{ has: "iis:taille_mulon" }, { seen: "IIS_taille_mulon" }] }, fx: { flag: "iis:taille_mulon" }, back: "IIS_cabanes" },
      { back: "IIS_cabanes" },
    ] },

  IIS_taille_mulon: { act: "II", title: "Le mulon d'Alain Quéré", place: "saline",
    text: [
      "Tu écartes la voile rapiécée. Sous la croûte de sel, ta main rencontre une planche. Le mulon est creux, monté sur une armature de bois comme une tente, et dedans, dans une odeur de saumure et de vieux cuir, Alain Quéré a rangé ce qu'il aimait : un couteau à manche de corne, une flasque d'eau-de-vie à moitié vide, une boîte de fer-blanc pleine de dents de lait, et, couchée sur deux clous, une baguette de noisetier fendue dans sa longueur, couverte d'entailles.",
      "La taille {{pie#iis_taille|est couverte d'entailles en désordre, illisibles pour qui n'est pas saunier|porte trente entailles de dette, et en travers, trente entailles de paiement, nettes, faites avec les deux moitiés serrées l'une contre l'autre : la dette est soldée}}.",
      { if: { has: "metier:lire" }, text: "Tu sais lire les tailles : on en tient aussi sur le quai des Lanternes, pour les prêts sur gage. Celle-ci est soldée. Sur la moitié de Pallu, il ne peut y avoir que des entailles ajoutées après coup, seul." },
      "Derrière toi, sur le talus, le clerc à la perche s'est arrêté. Il te regarde.",
    ],
    choices: [
      { label: "Rapporter la taille à Avoye Quéré", fx: { flag: "iis:taille_trouvee" }, to: "IIS_taille_fin" },
      { label: "La porter à Maître Pallu, qui la paiera cher pour la brûler", fx: { gold: 100, fac: { banque: 3, hautes: -10 }, flag: ["iis:taille", "iis:taille_vendue"], quest: "IIS_taille" }, back: "IIS_mulons" },
    ] },

  IIS_taille_fin: { act: "II", title: "La taille soldée", place: "saline", fx: { quest: "IIS_taille", flag: "iis:taille", fac: { hautes: 8 }, ep: ["seance", 1000] },
    text: [
      "Avoye Quéré prend la baguette à deux mains, comme on prend un enfant qui dort. Elle compte les entailles du bout du doigt, sans les compter. Puis elle se met à pleurer, d'un coup, sans bruit, et la petite fille lâche son crabe pour la regarder.",
      "Le soir même, Avoye se présente à la Maison du Sel avec sa moitié de taille et deux témoins, Domitille Goulard et le meunier. Pallu sort sa propre moitié. On rapproche les deux, sous les arcades, devant trente sauniers. Les entailles de paiement se correspondent une à une. Sur la moitié de Pallu, il y a en plus sept entailles fraîches, toutes seules, qui ne correspondent à rien.",
      "Pallu regarde longtemps les sept entailles. Puis il dit, d'une voix plate : « Une erreur de mon clerc. L'œillet est à vous, Madame Quéré. » Toute la Saline sait qu'il ment, et se tait, et la petite fille rit sans savoir pourquoi.",
    ],
    choices: [{ back: "IIS_cabanes" }] },
});

// ==================================================================== side quest: the drowned man of the étier
Object.assign(P, {
  IIS_etier: { act: "II", title: "L'étier", place: "saline", backName: "l'étier",
    text: [
      { first: true, text: "L'étier est le canal qui amène la mer de la Goule jusqu'à la vasière, à travers la Saline : large de trois toises, bordé de pieux noirs et de planches pourries, avec une petite écluse de bois au bout, que les femmes ouvrent au flot. À marée basse, il n'y a plus qu'un ruisseau dans la vase, et des barques couchées sur le flanc." },
      { again: true, text: "L'étier, ses pieux noirs, sa vase. Une aigrette pêche près de l'écluse." },
      "L'eau de l'étier {{echo#iis_echo_etier|clapote contre les pieux, sous l'écluse|rend une voix d'homme essoufflée : « Lâche ça, Mâchefer, c'est une copie ; ils en ont d'autres, à Salvèze »}}.",
      "Un gamin pêche des crevettes au haveneau, au pied de l'écluse. Il te montre un pieu du doigt, sans que tu lui aies rien demandé. « C'est là qu'on a trouvé Hamon. Accroché par la ceinture. Il est à la salorge, en attendant le curé de Port-Vasier. »",
    ],
    choices: [
      { label: "Aller voir le corps de Hamon Lefeuvre, à la salorge", hide: { quest: "IIS_noye" }, to: "IIS_noye" },
      { label: "La gabare de sel qui charge devant l'écluse", to: "IIS_gabare" },
      { back: "IIS_arrivee" },
    ] },

  IIS_noye: { act: "II", title: "Le noyé de la salorge", place: "saline", fx: { flag: "iis:noye_vu", questSeen: "IIS_noye", meet: "iis_hamon" },
    text: [
      "La salorge est le grenier à sel commun, une longue bâtisse de planches goudronnées où l'on garde le sel en sacs, au frais. Dans un coin, sur deux tréteaux, sous un drap, Hamon Lefeuvre attend le curé. Le sel l'a gardé intact. Une vieille femme, sa sœur, est assise à côté sur un sac, et veille en mâchant du pain.",
      "Elle soulève le drap pour toi. Hamon avait trente ans, une barbe rousse, des mains de saunier. Sur le côté de la tête, il a {{pie#iis_plaie|une plaie large, comme d'une chute contre les pierres de l'écluse|une plaie nette et longue, en ligne droite, faite par le tranchant d'un outil : une lame de las, ou un couteau à sel}}.",
      "« Il est tombé, dit la sœur. C'est ce que dit Mâchefer. Il {{oreille#iis_soeur_hamon|avait bu, il paraît|n'avait pas bu une goutte depuis la mort de notre mère, et Mâchefer le sait mieux que personne}}. »",
      "On lui a laissé ses sabots aux pieds, des sabots de saunier à semelle épaisse, cerclés de fer. Le sabot gauche {{pie#iis_sabot|est un sabot comme les autres|a un talon plus haut que le droit, et une fente sous la cambrure}}.",
    ],
    choices: [
      { label: "Ouvrir le talon du sabot gauche", hide: { any: [{ not: { any: [{ voile: "iis_sabot" }, { has: "metier:mains" }] } }, { has: "iis:noye_copie" }] }, fx: { flag: "iis:noye_copie", item: "iis_copie_contrat", ep: ["perso", 500] }, to: "IIS_noye_copie" },
      { label: "Aller trouver Mâchefer avec ce que tu sais", hide: { not: { count: [{ voile: "iis_plaie" }, { voile: "iis_echo_etier" }, { has: "iis:noye_temoin" }, { has: "iis:noye_copie" }, { voile: "iis_soeur_hamon" }], min: 2 } }, to: "IIS_machefer_aveu" },
      { label: "Laisser Hamon à sa sœur et au curé", fx: { quest: "IIS_noye", flag: ["iis:noye", "iis:noye_laisse"] }, back: "IIS_etier" },
      { back: "IIS_etier" },
    ] },

  IIS_noye_copie: { act: "II", title: "La copie de Hamon", place: "saline",
    text: [
      "Le talon tourne sur un clou. Dans le creux, pliées en seize, deux feuilles de papier fin, la copie du contrat de la Saint-Martin, de la main soignée d'un saunier qui a appris à écrire tard. En bas, Hamon a ajouté de sa main : *copie fidèle, pour les juges de la République*, et il a signé.",
      "La sœur regarde le papier sans comprendre, puis elle comprend. « C'est pour ça, dit-elle. Pour du papier. » Elle crache par terre, et elle remet le drap sur le visage de son frère.",
      { with: "tibere", text: "Tibère se gratte la moustache. « Au Guet, dit-il, on appelait ça un mobile. On en avait rarement d'aussi propre. »" },
    ],
    choices: [{ back: "IIS_noye" }] },
});

// ==================================================================== the foreman
Object.assign(P, {
  IIS_machefer: { act: "II", title: "Mâchefer", place: "saline", fx: { meet: "iis_machefer", flag: "iis:greve_annoncee" },
    text: [
      "L'homme à la badine s'arrête au bord d'un œillet où une femme maigre râtelle seule, trop lentement. Il est grand, large, la barbe noire coupée court, une balafre blanche en travers du nez. Il se penche sur son panier, le soupèse, et le laisse tomber dans la vase. « Il manque un quart, Quéré. Il manque un quart tous les jours. »",
      "La femme répond quelque chose que tu n'entends pas. La badine siffle et la frappe au bras, une fois, deux fois. Elle ne crie pas. Le chant s'est arrêté dans tous les bassins voisins, et trente râteaux restent suspendus.",
      "« Je fais {{oreille#iis_machefer_peur|ce que les maîtres me paient pour faire|ce que la Banque me dira de faire, et si le sel manque à la Saint-Jean, c'est moi qu'on pendra à la place de Pallu}}, dit Mâchefer à la cantonade, sans regarder personne. Au travail. »",
      { with: "tibere", text: "Tibère a fait un pas en avant, sans s'en rendre compte. Sa main droite s'est refermée sur le manche de sa masse." },
      { with: "lison", text: "Lison a pâli sous ses taches de rousseur. Elle souffle : « Si tu ne fais rien, je fais quelque chose. »" },
    ],
    choices: [
      { label: "« Pallu ne sera pas pendu, Mâchefer. Vous, si. La Banque paie toujours ses dettes avec la peau des autres. »", hide: { not: { voile: "iis_machefer_peur" } }, fx: { ep: ["perso", 600] }, to: "IIS_machefer_recule" },
      { label: "L'interpeller devant tous les sauniers", test: { dom: "social", diff: -10, label: "Faire honte à un contremaître", help: [{ if: { has: "metier:parole" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIS_machefer_recule" }, lose: { to: "IIS_machefer_battu" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "combat", diff: 0, label: "Tibère attrape la badine au vol" },
        win: { fx: { ep: ["perso", 400], conf: { tibere: 5 } }, to: "IIS_machefer_recule" }, lose: { to: "IIS_machefer_battu" } },
      { label: "Lui arracher sa badine", fight: { title: "Le talus des œillets", enemies: [{ id: "iis_machefer", n: 1 }, { id: "iis_nervi", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["perso", 800] }, to: "IIS_machefer_vaincu" }, lose: { fx: { pv: -3 }, to: "IIS_machefer_battu" },
        flee: { label: "Reculer sur le talus", dom: "nature", diff: 0, to: "IIS_machefer_battu" } } },
      { label: "Détourner les yeux", fx: { flag: "iis:machefer_fini", fac: { hautes: -5 }, conf: { lison: -5, tibere: -3 } }, back: "IIS_bassins" },
    ] },

  IIS_machefer_recule: { act: "II", title: "La badine baissée", place: "saline", fx: { flag: ["iis:machefer_fini", "iis:machefer_recule"], fac: { hautes: 5 } },
    text: [
      "Mâchefer se retourne lentement. Il te regarde de haut en bas, la badine encore levée, et quelque chose passe dans ses yeux, très vite, qu'il rattrape. Il baisse la badine. « Vous êtes qui, vous, pour me parler de pendaison ? »",
      "Il ne frappe plus. Il ramasse le panier dans la vase, le pose sur le talus, et s'éloigne vers la Maison du Sel sans se retourner, à grands pas, en fouettant l'air. Derrière lui, quelqu'un rit, un rire bref, aussitôt étouffé. Puis le chant reprend dans le bassin, plus fort, sur le même couplet, et le couplet n'a jamais sonné aussi juste.",
      "Avoye Quéré se tient le bras. Elle te regarde sans rien dire, et recommence à râteler, plus vite.",
      { with: "tibere", text: "Tibère desserre la main de sa masse, doigt après doigt. « Ces types-là, dit-il, il faut leur parler de leur propre cou. Ils n'en ont qu'un. »" },
    ],
    choices: [{ back: "IIS_bassins" }] },

  IIS_machefer_vaincu: { act: "II", title: "Mâchefer dans la vase", place: "saline", fx: { flag: ["iis:machefer_fini", "iis:machefer_vaincu"], fac: { hautes: 8, banque: -5 } },
    text: [
      "Mâchefer bascule à la renverse dans l'œillet, et l'œillet l'avale jusqu'aux épaules. Il se débat, il jure, il s'enfonce. Sa badine flotte à côté de lui. Son homme a pris la fuite le long du talus, gourdin compris.",
      "Trente sauniers le regardent faire. Les râteaux restent levés. Au bout d'un long moment, c'est Avoye Quéré qui lui tend le sien, le manche en avant, et le tire au bord. Il remonte sur le talus couvert de vase grise jusqu'à la barbe, et la vase sèche en sel sur lui pendant qu'il te regarde.",
      "« Ça se paiera », dit-il. Puis il part. Le chant ne reprend pas tout de suite : on rit trop.",
    ],
    choices: [{ back: "IIS_bassins" }] },

  IIS_machefer_battu: { act: "II", title: "Les coups de Mâchefer", place: "saline", fx: { flag: ["iis:machefer_fini", "iis:machefer_battu"], fac: { hautes: 5 }, pv: -2 },
    text: [
      "Le monde tourne. Tu es par terre, dans la vase au bord du talus, la bouche pleine de sel, et la badine de jonc te cingle encore l'épaule, puis s'arrête. Mâchefer souffle au-dessus de toi. « La prochaine fois, dit-il, on vous retrouve dans l'étier, comme l'autre. »",
      "Quand il est parti, des mains te relèvent. On te porte, plus qu'on ne t'aide, jusqu'à une cabane où l'on te lave le visage à l'eau douce, et où Avoye Quéré, le bras bandé, te tend un bol de soupe de poisson. « Vous êtes le premier de la ville à prendre des coups pour une saunière, dit-elle. On s'en souviendra. »",
      { with: "lison", text: "Lison s'assied par terre à côté de ta paillasse. « C'était bête, dit-elle. C'était bien. »" },
    ],
    choices: [{ back: "IIS_cabanes" }] },

  IIS_machefer_aveu: { act: "II", title: "Ce que sait Mâchefer", place: "saline",
    text: [
      "Mâchefer loge seul dans une cabane de pierre adossée à la Maison du Sel. Il ouvre en chemise, une chandelle à la main, et il sait pourquoi tu viens avant que tu parles. Il reste sur le seuil, la porte ouverte derrière lui.",
      "Tu poses devant lui ce que tu sais. Il écoute sans bouger. Puis il dit : « Hamon est tombé. Je {{oreille#iis_machefer_hamon|l'ai trouvé au matin, comme tout le monde|l'ai frappé du plat de la lame, je voulais seulement le papier, et il est tombé dans l'étier et il n'est pas remonté}}. »",
      { after: "iis:noye_temoin", text: "Tu lui dis qu'Ogier l'a vu revenir seul, sur la digue. La chandelle tremble dans sa main." },
      "Derrière lui, sur la table, il y a un couteau à sel, une lame courte et large à manche de buis, posée à côté du pain. Il la regarde, et tu la regardes.",
    ],
    choices: [
      { label: "« Vous vouliez le papier. Vous ne vouliez pas sa mort. Dites-le aux sauniers, et ils vous laisseront partir. »", hide: { not: { voile: "iis_machefer_hamon" } }, fx: { flag: ["iis:machefer_aveu", "iis:machefer_parti", "iis:noye"], quest: "IIS_noye", fac: { hautes: 8 }, ep: ["seance", 1500] }, to: "IIS_machefer_parti" },
      { label: "Le menacer de le livrer au Guet de Salvèze", test: { dom: "social", diff: -20, label: "Faire avouer un homme qui a peur", help: [{ with: "tibere", v: 15 }, { if: { has: "iis:noye_copie" }, v: 10 }] },
        win: { fx: { flag: ["iis:machefer_aveu", "iis:machefer_parti", "iis:noye"], quest: "IIS_noye", fac: { hautes: 5 }, ep: ["seance", 1000] }, to: "IIS_machefer_parti" },
        lose: { to: "IIS_machefer_couteau" } },
      { label: "Ne pas lui laisser le temps de prendre le couteau", to: "IIS_machefer_couteau" },
    ] },

  IIS_machefer_couteau: { act: "II", title: "Le couteau à sel", place: "saline",
    combat: { title: "La cabane du contremaître", enemies: [{ id: "iis_machefer", n: 1 }],
      win: { fx: { flag: ["iis:machefer_vaincu", "iis:machefer_parti", "iis:noye"], quest: "IIS_noye", fac: { hautes: 5 }, ep: ["seance", 1000] }, to: "IIS_machefer_parti" },
      lose: { fx: { pv: -4, flag: ["iis:machefer_enfui", "iis:machefer_parti", "iis:noye"], quest: "IIS_noye" }, to: "IIS_machefer_parti" },
      flee: { label: "Sortir à reculons", dom: "discretion", diff: 0, to: "IIS_machefer_parti" } },
    text: [
      "Mâchefer prend le couteau. Il ne le lève pas tout de suite. Il a l'air de se demander lui-même ce qu'il va en faire. Puis la chandelle tombe et roule sur le sol de terre battue, et il se jette sur toi dans le noir.",
    ],
    choices: [{ label: "Sortir de la cabane", to: "IIS_machefer_parti" }] },

  IIS_machefer_parti: { act: "II", title: "Le départ de Mâchefer", place: "saline", fx: { flag: ["iis:machefer_parti", "iis:noye"], quest: "IIS_noye" },
    text: [
      { if: { has: "iis:machefer_aveu" }, text: "Mâchefer redit tout devant la sœur de Hamon, dans la salorge, devant le meunier et vingt sauniers réveillés en pleine nuit. Il parle d'une voix plate, les yeux sur ses mains. Quand il a fini, on s'écarte de lui. Domitille lui ouvre le chemin de la digue. Il part avant l'aube, à pied, un sac sur l'épaule, et la Saline le regarde partir sans un mot, ce qui est pire que tout ce qu'on aurait pu lui crier." },
      { if: { all: [{ has: "iis:machefer_vaincu" }, { not: { has: "iis:machefer_aveu" } }] }, text: "Mâchefer est à terre, le couteau loin de sa main. Les sauniers que le bruit a réveillés entrent dans la cabane avec des lanternes et des râteaux. Ils l'attachent avec une corde à sel et l'enferment dans la salorge, à côté du mort, en attendant le curé de Port-Vasier et ce qu'il dira. Au matin, la corde est coupée et la salorge vide. La Saline garde pour elle le nom de qui a ouvert." },
      { if: { all: [{ not: { has: "iis:machefer_vaincu" } }, { not: { has: "iis:machefer_aveu" } }] }, text: "Quand tu reprends tes esprits, la cabane est vide, la porte bat, et la chandelle fume par terre. Mâchefer est parti dans la nuit avec son couteau et ses gages. Au matin, on trouve sa casaque noire jetée dans l'étier, accrochée au pieu où l'on avait trouvé Hamon." },
      "La sœur de Hamon fait enterrer son frère le lendemain, au petit cimetière derrière la chapelle, dans le sable. Elle vient te serrer la main après, et sa main est dure et sèche comme une planche à sel.",
    ],
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== the strike
Object.assign(P, {
  IIS_greve: { act: "II", title: "La grange au sel", place: "saline", takes: "night",
    text: [
      "La grange au sel est pleine. Soixante sauniers, peut-être plus, assis sur les sacs, debout contre les poteaux, accroupis entre les jambes des autres. Trois lanternes pendues aux poutres, et l'odeur de soixante vestes mouillées qui sèchent. Domitille Goulard est debout sur une caisse, les bras croisés. On parle bas, puis plus fort, puis tout le monde à la fois.",
      { after: "iis:croze", text: "Au fond, dans l'ombre, une robe noire : Hermine Croze est venue, seule. Les sauniers s'écartent d'elle comme d'une flaque. Elle reste debout, très droite, et attend son tour de parler." },
      { after: "iis:machefer_battu", text: "Près de la porte, des sauniers montrent du menton les marques de badine sur ton épaule. On te fait de la place sur les sacs." },
      "Un vieux saunier à la barbe grise se lève. « Si on pose le râteau, {{oreille#iis_mouchard|le sel pourrira dans les œillets, et c'est nous qui aurons faim|Mâchefer m'a promis l'œillet de Hamon si je lui dis demain qui a parlé ce soir}}. » Des têtes approuvent. D'autres se détournent.",
      { if: { has: "iis:domitille_froide" }, text: "Domitille te regarde un long moment avant de te faire signe de monter sur la caisse, à côté d'elle. « Il y a ici quelqu'un de la ville qui m'a dit qu'on se ferait écraser, dit-elle. Écoutez-le quand même. S'il a changé d'avis, ça vous apprendra quelque chose. » Soixante visages se tournent vers toi.",
        else: "Domitille te fait signe de monter sur la caisse, à côté d'elle. « Il y a ici quelqu'un de la ville, dit-elle. Qui a vu les maîtres, et le contrat. Écoutez ce qu'il en dit. » Soixante visages se tournent vers toi." },
      { with: "gildas", text: "Frère Gildas est resté près de la porte, la capuche baissée. Tu sens son regard dans ton dos comme une main posée." },
    ],
    choices: [
      { label: "« Avant de parler, demandez à cet homme combien Mâchefer paie ses noms. »", hide: { any: [{ not: { voile: "iis_mouchard" } }, { seen: "IIS_greve_mouchard" }] }, to: "IIS_greve_mouchard" },
      { label: "Leur dire de poser le râteau, tous ensemble, demain à l'aube", big: true, to: "IIS_greve_soutenir" },
      { label: "Leur conseiller d'attendre, et de négocier avec Maîtresse Croze", to: "IIS_greve_calmer" },
      { label: "Les pousser à la grève : pendant qu'ils occuperont la Maison du Sel, le moulin restera sans garde", to: "IIS_greve_profiter" },
    ] },

  IIS_greve_mouchard: { act: "II", title: "Le mouchard", place: "saline", fx: { flag: "iis:mouchard", fac: { hautes: 5 }, ep: ["perso", 600] },
    text: [
      "Le vieux saunier ouvre la bouche, la referme. Toute la grange le regarde. Il essaie de rire, et le rire tombe à plat. Puis il dit, très vite, trop vite, que Mâchefer est venu chez lui, qu'il a parlé de l'œillet de Hamon, qu'il n'a rien promis, qu'il a des petits-enfants.",
      "Domitille descend de sa caisse, va jusqu'à lui et lui pose la main sur l'épaule, sans douceur. « Tu rentres chez toi, Gurval, dit-elle. Tu ne dis rien à personne cette nuit. Demain, on verra si tu as un œillet. » Le vieux sort, la tête dans les épaules, entre deux rangs qui s'écartent.",
      "Quand la porte s'est refermée, la grange est plus silencieuse qu'avant, et plus serrée.",
    ],
    choices: [{ back: "IIS_greve" }] },

  IIS_greve_soutenir: { act: "II", title: "Poser le râteau", place: "saline", fx: { flag: ["iis:greve_soutenue", "iis:greve_decidee"], fac: { hautes: 15, banque: -10 }, ep: ["seance", 1200] },
    text: [
      "Tu parles du contrat. Tu dis le prix de quatre liards la mine, les journées fondues, les œillets saisis. L'injustice, ils la connaissent mieux que toi. Tu parles de la Saint-Jean, de la date où la Banque a besoin de son sel, et du fait que c'est la seule date qui compte.",
      { if: { any: [{ voile: "iis_contrat_terre" }, { has: "iis:copie" }, { has: "iis:noye_copie" }] }, text: "Puis tu leur dis ce que cache la clause du dédit : les œillets des maîtres eux-mêmes, et la terre dessous, à la Banque, à la Saint-Jean. Un murmure fait le tour de la grange. Des têtes se tournent vers la porte, comme si Pallu allait entrer." },
      "Domitille reprend la parole quand tu te tais. « Demain, à l'aube, dit-elle. Pas un râteau dans les bassins. On plante les râteaux dans la vase, en rang, et on attend. Qui est avec moi ? » Les mains se lèvent, une à une, puis toutes ensemble.",
      { with: "lison", text: "Lison, au fond, lève la main elle aussi. Elle n'a pas d'œillet. Les sauniers lui sourient." },
      { with: "tibere", text: "Tibère ne lève pas la main. Il regarde le plancher, et tu l'entends marmonner : « Au Guet, on nous envoyait pour ça. Pour les mains levées. »" },
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_greve_calmer: { act: "II", title: "Attendre", place: "saline", fx: { flag: ["iis:greve_calmee", "iis:greve_finie"], fac: { hautes: -5, banque: 5 }, ep: ["perso", 600] },
    text: [
      "Tu parles de prudence. De la Saint-Jean qui est loin, des hommes de la Banque qui sont près, des gants gris au cabaret. Tu dis qu'une grève se brise en un jour quand elle n'a pas de pain pour la semaine. Tu le dis bien. Ils t'écoutent, et ils se calment, et tu vois leurs épaules redescendre l'une après l'autre.",
      { if: { has: "iis:croze" }, text: "Hermine Croze parle après toi, d'une voix sèche de comptable. Elle propose de payer les journées de ses sauniers au prix d'avant le contrat, sur ses propres coffres, jusqu'à la Saint-Jean. C'est peu. C'est quelque chose. Domitille finit par hocher la tête." },
      "Domitille te regarde descendre de la caisse. « Vous avez raison, dit-elle. {{oreille#iis_domitille_decue|On attendra|J'ai cru que vous seriez de notre côté, et vous êtes du côté des gens raisonnables}}. »",
      "La grange se vide lentement. Le lendemain matin, on chante dans les bassins, plus bas qu'avant.",
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_greve_profiter: { act: "II", title: "Le calcul", place: "saline", fx: { flag: ["iis:greve_profitee", "iis:greve_decidee"], fac: { hautes: 5, banque: -5 }, ep: ["perso", 600] },
    text: [
      "Tu parles pour la grève, et tu parles bien, parce que tu as une raison de bien parler qui n'est pas la leur. Tu les vois se lever, s'échauffer, voter à mains levées pour planter les râteaux à l'aube et marcher sur la Maison du Sel. Tu penses au moulin. Demain, les gardes de la Banque seront tous à la Maison du Sel.",
      "Domitille te serre la main en descendant de la caisse. Elle a l'air de quelqu'un qui a gagné. « Vous serez avec nous, demain, devant le perron ? » demande-t-elle.",
      "Tu dis oui. Tu {{miroir#iis_miroir_greve|le penses, sur le moment|sais déjà, en le disant, que tu seras ailleurs}}.",
      { with: "lison", text: "Lison t'attend dehors, adossée à la grange. Elle a tout entendu. « Joli, dit-elle. Ma grand-mère dirait que tu parles déjà comme nous. Je ne suis pas sûre que ce soit un compliment. »" },
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_greve_jour: { act: "II", title: "Le matin de la grève", place: "saline", takes: "morning", fx: { flag: "iis:greve_jour" },
    text: [
      "À l'aube, la Saline se tait. Dans les bassins, les râteaux sont plantés dans la vase, droits, en rangs serrés, des centaines de manches de bois gris qui sortent de l'eau comme une forêt noyée. Les sauniers sont devant la Maison du Sel, en silence, les bras croisés. Le seul bruit est celui de la mer qui monte dans l'étier.",
      { before: "iis:machefer_parti", text: "Sur le perron, Mâchefer, douze casaques noires derrière lui, gourdins au poing. À la fenêtre du premier, Maître Pallu, le visage gris. Et un peu à l'écart, adossé à une arcade, un homme aux gants gris qui mange une pomme de la main gauche et regarde la scène comme on regarde un spectacle." },
      { after: "iis:machefer_parti", text: "Sur le perron, douze casaques noires, sans chef. Elles se regardent entre elles. Le clerc à la perche essaie de leur donner des ordres, d'une voix trop aiguë. À la fenêtre du premier, Maître Pallu, le visage gris." },
      { after: "iis:croze", text: "Hermine Croze sort de son cabinet, sous les arcades, et va se placer au premier rang des sauniers, à côté de Domitille, dans sa robe noire. Un murmure court dans les rangs." },
      { if: { all: [{ has: "iis:croze_hesite" }, { not: { has: "iis:croze" } }] }, text: "Sous les arcades, la porte du cabinet de Maîtresse Croze s'entrouvre d'un doigt, et reste ainsi tout le temps que dure la matinée." },
      { after: "iis:pallu_neutre", text: "À sa fenêtre, Maître Pallu a croisé les bras. Quand les casaques noires lèvent la tête vers lui pour attendre un ordre, il regarde ses mains." },
      { with: "gildas", text: "Frère Gildas s'est placé entre les deux camps, les mains dans les manches, et il ne bouge plus. Les casaques noires le regardent et ne savent pas quoi faire d'un moine." },
    ],
    choices: [
      { label: "Lire à voix haute, devant tous, ce que cache la clause du dédit", hide: { not: { any: [{ voile: "iis_contrat_terre" }, { has: "iis:noye_copie" }, { has: "iis:copie" }] } }, test: { dom: "social", diff: 0, label: "Retourner une foule avec un contrat", help: [{ if: { has: "iis:croze" }, v: 25 }, { if: { has: "iis:pallu_ebranle" }, v: 15 }, { if: { has: "iis:mouchard" }, v: 10 }, { if: { has: "iis:grange_sauvee" }, v: 10 }, { if: { has: "iis:contrat_lu" }, v: 5 }] },
        win: { fx: { ep: ["seance", 1500] }, to: "IIS_greve_gagnee" }, lose: { to: "IIS_greve_brisee" } },
      { label: "« Rentrez chez vous. Votre chef est parti, et la Banque ne vous paiera pas pour ses morts. »", hide: { not: { has: "iis:machefer_parti" } }, fx: { ep: ["seance", 1000] }, to: "IIS_greve_gagnee" },
      { label: "« Mâchefer, c'est vous qu'on pendra à la Saint-Jean. Pas eux. »", hide: { any: [{ not: { voile: "iis_machefer_peur" } }, { has: "iis:machefer_parti" }] }, test: { dom: "social", diff: -10, label: "Faire reculer Mâchefer devant ses hommes", help: [{ if: { has: "iis:machefer_recule" }, v: 20 }, { if: { has: "iis:croze" }, v: 10 }] },
        win: { fx: { ep: ["seance", 1000], flag: "iis:machefer_parti" }, to: "IIS_greve_gagnee" }, lose: { to: "IIS_greve_brisee" } },
      { label: "Se placer devant les sauniers quand les casaques noires avancent", fight: { title: "Le perron de la Maison du Sel", enemies: [{ id: "iis_nervi", n: 3 }],
        win: { fx: { ep: ["seance", 1200], fac: { banque: -5 } }, to: "IIS_greve_gagnee" }, lose: { fx: { pv: -4 }, to: "IIS_greve_brisee" },
        flee: { label: "Se fondre dans la foule", dom: "discretion", diff: 0, to: "IIS_greve_brisee" } } },
      { label: "Laisser les sauniers devant le perron et filer au moulin sans garde", hide: { has: "saline:ouverte" }, fx: { flag: ["iis:greve_abandon", "iis:greve_brisee", "iis:greve_finie"], fac: { hautes: -10 }, conf: { lison: -5 } }, to: "IIS_moulin_dedans" },
    ] },

  IIS_greve_gagnee: { act: "II", title: "Sel libre", place: "saline", fx: { flag: ["iis:greve_gagnee", "iis:greve_finie", "iis:ogier_allie"], fac: { hautes: 10, banque: -10 }, ep: ["seance", 1500] },
    text: [
      "Les casaques noires reculent d'un pas, puis de deux, puis elles abaissent leurs gourdins, et l'une après l'autre elles descendent le perron et se fondent dans la foule. Certaines sont des fils de sauniers. Elles retrouvent leurs mères dans les rangs, et leurs mères ne leur disent rien.",
      "Maître Pallu descend à son tour, très lentement, une feuille à la main. Il la lit d'une voix sans timbre : la Maison du Sel paiera les journées au prix d'avant la Saint-Martin, aucune dette ne sera réclamée avant la récolte, aucun œillet ne sera saisi. Il signe sur le dos d'un saunier, avec la plume que le clerc lui tend. Puis il remonte, et ferme sa fenêtre.",
      "Le chant revient d'un coup. Un vieil air de fête, cette fois, que tout le monde connaît. Quelqu'un apporte un pot de chaux et un balai, et écrit sur la barrière de la digue, en lettres hautes comme un enfant : *SEL LIBRE*.",
      { before: "iis:gaucher_fini", text: "L'homme aux gants gris finit sa pomme, jette le trognon dans l'étier, et s'en va vers le cabaret. Il ne paraît pas déçu." },
      "Ogier le meunier traverse la foule jusqu'à toi. « Le moulin est toujours à la Banque, dit-il. Mais la roue, c'est moi qui la tourne. Quand vous voudrez. »",
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_greve_brisee: { act: "II", title: "Les râteaux arrachés", place: "saline", fx: { flag: ["iis:greve_brisee", "iis:greve_finie"], fac: { hautes: -5, banque: 5 } },
    text: [
      { if: { has: "iis:greve_abandon" }, text: "Tu apprends la suite le soir, au cabaret. Sans personne pour leur parler, les sauniers ont tenu deux heures devant le perron. Puis les casaques noires ont chargé." },
      "Les gourdins tombent. Les premiers rangs reculent, les derniers s'enfuient. En une heure, la place devant la Maison du Sel est vide, et les casaques noires passent dans les bassins arracher les râteaux plantés et les jeter en tas, pour qu'on vienne les rechercher un par un, tête basse.",
      "Domitille a l'arcade sourcilière ouverte. On l'emmène à la Maison du Sel, et elle en ressort le soir, avec une amende de dix ducats qu'elle n'a pas, et l'ordre de chanter au travail comme avant. Le lendemain, la Saline travaille en silence.",
      { if: { has: "iis:greve_profitee" }, text: "Elle te croise sur la digue, et elle ne te salue pas." },
    ],
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== Lothaire's swordsmen
Object.assign(P, {
  IIS_gaucher: { act: "II", title: "Les gants gris", place: "saline", fx: { meet: "iis_rambert" },
    text: [
      { first: true, text: "L'homme à la main bandée te regarde t'asseoir sans cesser de manger. Il a cinquante ans, un visage maigre et soigné, une moustache grise taillée au rasoir, et une cicatrice ronde sur la pommette, comme la marque d'un bouton de fleuret. Ses trois hommes se poussent pour te faire de la place, avec une politesse de mauvais augure." },
      { again: true, text: "Le Gaucher lève son gobelet de la main gauche, en guise de salut. Ses hommes ne lèvent rien." },
      "« Rambert, dit-il. On m'appelle le Gaucher, pour des raisons que vous voyez. Vous êtes la personne qui cherche des choses perdues. Monsieur Brunel m'a parlé de vous. Il vous {{oreille#iis_gaucher_estime|estime beaucoup|craint un peu, et il m'a dit de ne pas vous tuer avant que vous ayez trouvé}}. »",
      "Il pique un morceau de poisson de la pointe de son couteau. « Nous attendons, ici. La Saint-Jean, le droit de la Banque, et quelques autres choses. Monsieur Brunel {{oreille#iis_gaucher_dette|paie bien ceux qui le servent, et il est patient|nous doit deux mois de gages, et il a laissé pendre mon frère à Salvèze sans lever un de ses gants gris}}. »",
      { with: "tibere", text: "Le Gaucher remarque Tibère et sourit. « Tiens, {{oreille#iis_gaucher_tibere|un ancien du Guet, il me semble|le sergent qui écrit ses rapports à Brunel le samedi ; on a le même payeur, lui et moi}}. » Tibère regarde son gobelet vide." },
      { after: "iis:gobert", text: "Gobert le colporteur passe la porte avec son ballot, voit le Gaucher, te voit à sa table, et ressort aussitôt sans avoir rien vendu." },
      { with: "salome", text: "Salomé ne s'est pas assise. Elle reste debout derrière toi, la main sur son coutelas, et le Gaucher fait semblant de ne pas la voir." },
    ],
    choices: [
      { label: "« Votre frère pendu, vos gages en retard. Vous servez un homme qui ne vous le rendra pas. »", hide: { not: { voile: "iis_gaucher_dette" } }, fx: { ep: ["perso", 800] }, to: "IIS_gaucher_parti" },
      { label: "« Vous attendez quoi, exactement ? »", hide: { seen: "IIS_gaucher_offre" }, to: "IIS_gaucher_offre" },
      { label: "Lui faire les poches pendant qu'il mange", hide: { has: "iis:lettre_gaucher" }, test: { dom: "discretion", diff: -20, label: "Voler un spadassin à sa propre table", help: [{ if: { has: "passe:voleur" }, v: 15 }, { with: "lison", v: 10 }] },
        win: { fx: { flag: "iis:lettre_gaucher", item: "iis_lettre_gaucher", ep: ["perso", 500] }, to: "IIS_gaucher_lettre" }, lose: { fx: { flag: "iis:gaucher_mefiant" }, back: "IIS_cabaret" } },
      { back: "IIS_cabaret" },
    ] },

  IIS_gaucher_offre: { act: "II", title: "Le marché du Gaucher", place: "saline",
    text: [
      "Le Gaucher essuie sa lame sur le pain. « J'attends que quelqu'un ouvre le moulin à ma place, dit-il franchement. Monsieur Brunel sait qu'il y a quelque chose dessous. Il ne sait pas comment on y descend. Nous avons sondé les fondations, de nuit, avec des barres : du granit partout. À la Saint-Jean, le moulin sera à la Banque en pleine propriété, et nous le démolirons pierre à pierre s'il le faut. Ça prendra du temps. Ça fera du bruit. »",
      "Il pose son couteau. « Vous, vous êtes du métier. Vous trouvez avant la Saint-Jean, vous me donnez la feuille, je vous donne deux cents ducats. Le reste, ce qu'il y a dessous, vous le gardez. Monsieur Brunel ne veut que la feuille. {{oreille#iis_gaucher_brule|Il en a besoin pour ses recherches|Il la brûlera devant moi, et j'ai ordre de vous faire assister à la flambée}}. »",
      { with: "lison", text: "Lison, sous la table, t'écrase le pied. Fort." },
    ],
    choices: [
      { label: "« Marché conclu. »", fx: { flag: "iis:gaucher_pacte", conf: { lison: -5 } }, back: "IIS_cabaret" },
      { label: "« Je ne travaille pas pour les gants gris. »", fx: { flag: "iis:gaucher_mefiant", fac: { banque: -3 } }, back: "IIS_cabaret" },
    ] },

  IIS_gaucher_lettre: { act: "II", title: "La lettre au Gaucher", place: "saline",
    text: [
      "Dehors, à l'abri du vent contre le mur du cabaret, tu déplies la lettre que tu as tirée de la poche du Gaucher. Une écriture fine et penchée, une écriture de chercheur.",
      "*Rambert, attendez la Saint-Jean et le droit de la Banque. Ne touchez à rien avant. {{loupe#iis_lettre_lothaire|Rapportez-moi ce que vous trouverez, intact, et vous serez payé|Si quelqu'un d'autre lève la dalle avant vous, laissez-le faire, puis prenez-lui la feuille et brûlez-la devant témoin. Le sel et le reste, gardez-les : c'est la feuille que je paie}}.*",
      "*L. B.*",
      { with: "tibere", text: "Tibère lit par-dessus ton épaule. Il reconnaît l'écriture, ça se voit à la façon dont il se redresse. Il ne dit rien." },
    ],
    choices: [{ back: "IIS_cabaret" }] },

  IIS_gaucher_digue: { act: "II", title: "Les gants gris sur la digue", place: "saline",
    text: [
      "Le Gaucher s'avance seul jusqu'à trois pas de toi, la lanterne dans la main gauche. Ses trois hommes restent derrière, en éventail, les lames déjà sorties. Le vent fait claquer leurs manteaux.",
      "« Bien joué, dit-il, et il a l'air sincère. Trois cents ans que personne n'avait trouvé, et vous trouvez en trois jours. Donnez-moi la feuille. Le reste est à vous. Je n'ai rien contre vous, personnellement. »",
      { if: { has: "iis:gaucher_pacte" }, text: "« Nous avions un marché, ajoute-t-il. Deux cents ducats. Je les ai sur moi. Je suis un homme de parole, moi. »" },
      { if: { has: "iis:alerte" }, text: "Derrière lui, sur la digue, des lanternes approchent depuis les cabanes. Des sauniers, que le bruit du moulin a réveillés. Ils sont encore loin." },
      { after: "iis:gaucher_mefiant", text: "Ses hommes ne regardent que tes mains. Depuis le cabaret, le Gaucher sait de quel côté tu te tiens, et il a rangé sa politesse." },
      { with: "tibere", text: "Tibère s'est placé à ta droite, la masse à la main. Le Gaucher le regarde et dit doucement : « Toi, Gaucelm, tu choisis bien ton camp, cette nuit. Brunel lira mon rapport. »" },
    ],
    choices: [
      { label: "« Brunel vous doit deux mois, et la corde de votre frère. Vous allez mourir sur une digue pour une feuille qu'il brûlera ? »", hide: { not: { voile: "iis_gaucher_dette" } }, fx: { ep: ["seance", 1200] }, to: "IIS_gaucher_parti" },
      { label: "« Brûler la feuille devant témoin. C'est moi, le témoin ? Il vous a écrit ça, mot pour mot. »", hide: { not: { voile: "iis_lettre_lothaire" } }, test: { dom: "social", diff: 0, label: "Retourner un spadassin contre son maître", help: [{ if: { voile: "iis_gaucher_dette" }, v: 20 }] },
        win: { fx: { ep: ["seance", 1000] }, to: "IIS_gaucher_parti" }, lose: { to: "IIS_gaucher_combat" } },
      { label: "« La feuille est restée sous la roue. La dalle est ouverte. Descendez la chercher vous-même. »", hide: { not: { any: [{ voile: "iis_c1" }, { voile: "iis_c3" }, { voile: "iis_dentelle" }, { has: "iis:gaucher_pacte" }] } }, test: { dom: "social", diff: -10, label: "Envoyer les gants gris au-devant du flot", help: [{ if: { has: "iis:gaucher_pacte" }, v: 20 }, { if: { has: "iis:ogier_allie" }, v: 10 }] },
        win: { fx: { ep: ["seance", 1200] }, to: "IIS_gaucher_ruse" }, lose: { to: "IIS_gaucher_combat" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { not: { voile: "iis_gaucher_tibere" } }, test: { dom: "social", diff: -10, label: "Deux hommes du même payeur" },
        win: { fx: { ep: ["seance", 1000], conf: { tibere: 5 } }, to: "IIS_gaucher_parti" }, lose: { to: "IIS_gaucher_combat" } },
      { label: "Dégainer", to: "IIS_gaucher_combat" },
    ] },

  IIS_gaucher_combat: { act: "II", title: "Le combat de la digue", place: "saline",
    combat: { title: "La digue du moulin", enemies: [{ id: "iis_gaucher", n: 1 }, { id: "iis_spadassin", n: 2 }], terrain: "nature",
      win: { fx: { flag: ["iis:gaucher_fini", "iis:gaucher_vaincu", "iis:lettre_gaucher"], item: "iis_lettre_gaucher", fac: { banque: -5 }, ep: ["seance", 2000] }, to: "IIS_gaucher_vaincu" },
      lose: { fx: { pv: -4, flag: ["iis:gaucher_fini", "iis:gaucher_dupe"] }, to: "IIS_gaucher_pris" },
      flee: { label: "Sauter dans la retenue et nager jusqu'aux bassins", dom: "nature", diff: -10, to: "IIS_gaucher_pris" } },
    text: [
      "Les lames sortent. Le Gaucher pose sa lanterne par terre, avec soin, comme on pose un verre, et se met en garde, la gauche en avant. Sur la digue étroite, entre la retenue et la Goule, il n'y a de place que pour deux de front.",
    ],
    choices: [{ label: "Tenir la digue", to: "IIS_gaucher_pris" }] },

  IIS_gaucher_parti: { act: "II", title: "Le Gaucher s'en va", place: "saline", fx: { flag: ["iis:gaucher_fini", "iis:gaucher_parti", "iis:lettre_gaucher"], item: "iis_lettre_gaucher", ep: ["seance", 800] },
    text: [
      "Le Gaucher reste longtemps sans rien dire. Puis il regarde sa main droite bandée, comme si elle venait de lui rappeler quelque chose. « Mon frère s'appelait Ivain, dit-il. Il a volé pour Brunel pendant dix ans. Quand le Guet l'a pris, Brunel était à un dîner. »",
      "Il tire de son pourpoint une lettre pliée en huit et te la tend. « Tenez. C'est ce qu'il m'a écrit. Montrez-la à qui vous voudrez. Je ne l'ai jamais reçue. »",
      "Il fait un signe de tête à ses hommes. Ils rengainent, l'un après l'autre, sans comprendre, et le suivent vers la barrière. Avant l'aube, quatre chevaux passent sur la route des roseaux et prennent vers le nord, à l'opposé de Salvèze.",
      { with: "lison", text: "Lison souffle entre ses dents, longuement. « Tu as gagné un combat avec une phrase, dit-elle. Ma grand-mère va vouloir te connaître de plus près. »" },
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_gaucher_vaincu: { act: "II", title: "Le Gaucher à terre", place: "saline",
    text: [
      "Le Gaucher est assis sur la digue, la main gauche serrée sur une entaille à la cuisse, sa lame dans la retenue. Ses hommes sont à terre, ou en fuite. Il te regarde fouiller son pourpoint sans résister, et sourit quand tu trouves la lettre.",
      "« Monsieur Brunel n'aimera pas ça, dit-il. Il n'aime pas qu'on lise son courrier. Moi, je m'en moque, maintenant. Je crois que je vais aller voir comment est la mer, du côté d'Aveline. »",
      { with: "gildas", text: "Frère Gildas s'agenouille près de lui et bande la plaie, sans un mot, avec la ceinture de sa propre bure. Le Gaucher le regarde faire avec stupéfaction." },
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_gaucher_ruse: { act: "II", title: "Le flot", place: "saline", fx: { flag: ["iis:gaucher_fini", "iis:gaucher_noye"] },
    text: [
      "Le Gaucher te regarde longtemps, la lanterne levée. Puis il fait un signe, et deux de ses hommes descendent dans le coursier, de l'eau jusqu'aux genoux, vers la roue qui frémit. Le troisième les suit. Le Gaucher reste au bord, prudent, et se penche.",
      "La mer arrive d'un coup, comme elle le fait à Grisemotte. Une vague brune s'engouffre sous l'arche, soulève la roue, qui repart en grondant, et emporte les trois hommes vers la retenue dans un tourbillon de vase et de jurons. Le Gaucher glisse, se rattrape au bord, lâche sa lanterne et son épée pour tenir la pierre.",
      "Quand il remonte, trempé, sans arme, ses hommes barbotent au milieu de la retenue en criant. Il te regarde. « Vous saviez l'heure de la mer, dit-il. Je ne pense jamais à la mer. » Avant l'aube, ils sont partis, à pied, sans leurs lames.",
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_gaucher_pris: { act: "II", title: "La boîte de plomb", place: "saline", fx: { flag: ["iis:gaucher_fini", "iis:gaucher_dupe"] },
    text: [
      "Tu es à genoux sur la digue, une lame sous le menton. Un des hommes t'arrache le coffret de plomb des bras et le tend au Gaucher. Le Gaucher l'ouvre d'une main, à la lumière de la lanterne, et sourit. Puis il ne sourit plus. Le coffret est vide.",
      "Pendant la remontée, dans le coursier, tes mains de chercheur ont fait d'elles-mêmes ce qu'elles ont toujours fait des choses précieuses : le feuillet est contre ta peau, sous ta chemise, plié dans la toile cirée, et il colle à ton ventre mouillé.",
      { if: { any: [{ has: "iis:alerte" }, { has: "iis:greve_gagnee" }, { fac: "hautes", min: 15 }] }, text: "Avant que le Gaucher ait compris, les lanternes sont sur eux : vingt sauniers avec des râteaux, et Domitille devant. Les gants gris reculent jusqu'à la barrière, puis courent. Le Gaucher part le dernier, à reculons, en te saluant de la main gauche.", else: "Le Gaucher jette la boîte dans la Goule. « Une boîte vide, dit-il. Monsieur Brunel croira que la reine s'est moquée de nous. Moi, je crois que c'est vous. » Il te regarde encore un moment, puis il fait signe à ses hommes, et ils partent. Il n'a pas l'air de vouloir chercher plus loin, cette nuit." },
    ],
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== the night at the Pelle, the companions
Object.assign(P, {
  IIS_nuit: { act: "II", title: "Une chambre à la Pelle", place: "saline", takes: "night", fxEvery: { pv: "max", rest: true },
    text: [
      "La patronne borgne te donne une chambre sous le toit : une paillasse de varech, une couverture qui sent la fumée, une lucarne sur les bassins. Le vent siffle dans les roseaux du toit. Toute la nuit, la roue du moulin gronde au loin quand la mer descend, et se tait quand elle monte.",
      { with: "lison", text: "Lison a pris la paillasse de l'autre côté de la lucarne. Elle ne dort pas. Tu l'entends fredonner, très bas, toujours le même air." },
      { with: "tibere", text: "En bas, à la lueur du feu, Tibère écrit quelque chose sur un bout de papier, la langue entre les dents." },
      { with: "gildas", text: "Frère Gildas n'est pas monté. La patronne dit qu'il est parti vers la chapelle, avec une chandelle." },
      { without: "any", text: "Tu es seul{e} sous le toit, et la Saline chante dans ta tête jusqu'à ce que tu t'endormes." },
      "Tu {{miroir#iis_miroir_nuit|dors bien, enfin, pour la première fois depuis le quai|rêves d'un escalier de cave, et d'une porte que tu claques}}.",
    ],
    choices: [
      { label: "Aller à la lucarne, où Lison fredonne", hide: { seen: "IIS_lison_soir" }, to: "IIS_lison_soir" },
      { label: "Descendre voir ce qu'écrit Tibère", hide: { seen: "IIS_tibere_soir" }, to: "IIS_tibere_soir" },
      { label: "Aller chercher Frère Gildas à la chapelle", hide: { seen: "IIS_gildas_soir" }, to: "IIS_gildas_soir" },
      { label: "Dormir jusqu'au matin", fx: { until: 7 }, back: "IIS_arrivee" },
    ] },

  IIS_lison_soir: { act: "II", title: "La lucarne", place: "saline", with: "lison",
    text: [
      "Lison a les coudes sur le rebord de la lucarne et le menton dans les mains. Dehors, les bassins tiennent la lune en cent morceaux. Elle se pousse pour te faire de la place, sans te regarder.",
      "« C'est le couplet du flot, dit-elle, quand tu lui demandes ce qu'elle fredonne. Ma grand-mère me le chantait pour m'endormir. J'ai mis vingt ans à comprendre que c'était une leçon, pas une berceuse. » Elle rit, un peu. « Je {{oreille#iis_lison_soir|suis venue ici pour la promenade, tu sais|suis venue parce qu'on m'a dit de te surveiller, et je ne sais plus très bien pour qui je le fais}}. »",
      { after: "voile:iis_dentelle", text: "Elle se tait un long moment. « La nappe de la chapelle, dit-elle enfin. Elle l'a faite avant ma naissance. Elle savait déjà qu'un jour quelqu'un viendrait la lire avec une loupe. Elle ne savait pas qui. Ou peut-être que si. »" },
      "Elle te passe sa gourde : de l'eau coupée de vin aigre. Vos épaules se touchent dans l'encadrement trop étroit de la lucarne, et elle ne s'écarte pas.",
    ],
    choices: [
      { label: "« Pour qui tu le fais, alors ? »", hide: { not: { voile: "iis_lison_soir" } }, fx: { conf: { lison: 5 } }, back: "IIS_nuit" },
      { label: "Lui reprendre la gourde et rester là", fx: { conf: { lison: 3 } }, back: "IIS_nuit" },
    ] },

  IIS_tibere_soir: { act: "II", title: "Le papier de Tibère", place: "saline", with: "tibere",
    text: [
      "Tibère plie son papier en quatre quand tu t'assieds en face de lui. Le feu de tourbe fume entre vous. « J'écris {{oreille#iis_tibere_rapport|à ma fille, pour une fois|à Brunel : où tu es, ce que tu cherches, qui t'accompagne ; le gamin de la gabare le portera demain à Salvèze}}, dit-il. Rosalie. Elle ne répond jamais, mais j'écris quand même. »",
      { after: "tibere:espion", text: "Il te regarde, puis il déplie le papier et le pose devant toi, à plat, sans rien dire. Ce n'est pas une lettre à Rosalie. C'est un rapport, en phrases de sergent, et ton nom est dedans trois fois. « Dis-moi ce que je mets, dit-il. Je mettrai ce que tu dis. »" },
    ],
    choices: [
      { label: "Lui dicter un rapport où tu cherches encore, en vain, du côté des Joncs", hide: { not: { any: [{ has: "tibere:espion" }, { voile: "iis_tibere_rapport" }] } }, fx: { flag: "iis:tibere_rapport_faux", conf: { tibere: 5 }, ep: ["perso", 500] }, back: "IIS_nuit" },
      { label: "« Écris ce que tu veux, Tibère. Mais dis-moi ce que tu as écrit. »", hide: { not: { any: [{ has: "tibere:espion" }, { voile: "iis_tibere_rapport" }] } }, fx: { conf: { tibere: 3 } }, back: "IIS_nuit" },
      { label: "Le laisser écrire à sa fille", hide: { any: [{ has: "tibere:espion" }, { voile: "iis_tibere_rapport" }] }, back: "IIS_nuit" },
    ] },

  IIS_gildas_soir: { act: "II", title: "Gildas à la chapelle", place: "saline", with: "gildas",
    text: [
      "Frère Gildas est agenouillé devant l'autel, sur la pierre nue, une chandelle posée près de lui. Il ne prie pas à voix haute. Ses lèvres ne bougent pas. Ses mains, posées sur la nappe de dentelle, font de petits gestes, très lents, les doigts pliés et dépliés, comme les dessins de mains au bas d'un vieux parchemin.",
      "Le dallage de la chapelle {{echo#iis_echo_gildas|garde le froid de la nuit et l'odeur de la cire|rend la voix de Gildas, tout à l'heure, à peine un souffle : « Pour celle du quai. Pour la marche de l'escalier. Je n'ai pas d'autre prière »}}.",
      "Il t'entend venir et se relève sans hâte. « La Saline est un lieu où l'on prie bien, dit-il. Tout est blanc, et le vent emporte ce qu'on dit. »",
      "Tu lui demandes pour qui il priait. Il te regarde avec ses yeux calmes. « Pour ceux que j'ai connus et qui sont morts, dit-il. C'est une longue liste, à mon âge. » Il souffle la chandelle.",
    ],
    choices: [{ back: "IIS_nuit" }] },
});

// ==================================================================== more of the salt works
Object.assign(P, {
  IIS_comptine: { act: "II", title: "La ronde des enfants", place: "saline",
    text: [
      "Dans la flaque saumâtre, devant les cabanes, six enfants font une ronde autour d'un septième, accroupi, les yeux cachés dans ses mains. Ils tournent en chantant, de plus en plus vite, et à la fin du couplet ils s'arrêtent net, et l'enfant du milieu doit deviner qui l'a touché.",
      "*« Douze pales sur la roue, la reine dort au fond de tout, {{oreille#iis_comptine|une, deux, elle a de l'or, trois, quatre, elle dort encore|arrête la roue quand la couronne touche le fond, et jamais quand elle regarde le ciel}} ! »*",
      "L'enfant du milieu se trompe, et tout le monde crie. Une petite fille aux cheveux mouillés te regarde avec méfiance. « C'est notre ronde, dit-elle. Les grands, ils ont leurs chants à eux. »",
      { with: "lison", text: "Lison sourit d'un seul côté de la bouche. « Aux Joncs, on la chante aussi, dit-elle. Avec des anguilles au lieu de pales. »" },
    ],
    choices: [{ back: "IIS_cabanes" }] },

  IIS_grange_veille: { act: "II", title: "La veille de la grange", place: "saline", takes: "night",
    text: [
      "Tu passes la nuit avec Domitille et quatre sauniers dans l'ombre de la grange au sel, assis sur des sacs, sans lumière. Les râteaux de toute la Saline sont rangés là, debout contre les murs, prêts pour l'aube. Vers minuit, quelqu'un gratte une pierre à feu derrière la salorge.",
      "Trois casaques noires s'approchent en se courbant, avec un pot de poix et des torches éteintes. Le plus jeune porte le pot à deux bras, et marche derrière les autres, comme on marche quand on voudrait être ailleurs.",
      { if: { has: "iis:meen_revenu" }, text: "Tu reconnais la démarche du plus jeune. C'est un autre garçon de la Saline, que Mâchefer a pris à la place de Méen. Méen, lui, est assis à côté de toi dans le noir, et il serre les poings.", else: "Tu reconnais le plus jeune à sa casaque trop large et à ses manches retroussées : Méen, le petit-fils d'Eudes." },
    ],
    choices: [
      { label: "Appeler Méen par son nom, doucement, dans le noir", hide: { has: "iis:meen_revenu" }, fx: { flag: ["iis:grange_sauvee", "iis:meen_revenu"], fac: { hautes: 5 }, ep: ["perso", 600] }, to: "IIS_grange_sauvee" },
      { label: "Sortir de l'ombre avec les sauniers, râteaux levés", test: { dom: "social", diff: -10, label: "Faire fuir des incendiaires sans les blesser", help: [{ with: "tibere", v: 10 }, { if: { has: "iis:machefer_recule" }, v: 10 }] },
        win: { fx: { flag: "iis:grange_sauvee", ep: ["perso", 500] }, to: "IIS_grange_sauvee" }, lose: { fx: { flag: "iis:grange_brulee" }, to: "IIS_grange_sauvee" } },
      { label: "Leur tomber dessus avant qu'ils allument", fight: { title: "Derrière la salorge", enemies: [{ id: "iis_nervi", n: 2 }],
        win: { fx: { flag: "iis:grange_sauvee", ep: ["perso", 600] }, to: "IIS_grange_sauvee" }, lose: { fx: { flag: "iis:grange_brulee", pv: -3 }, to: "IIS_grange_sauvee" },
        flee: { label: "Reculer dans la grange", dom: "discretion", diff: 0, to: "IIS_grange_sauvee" } } },
    ] },

  IIS_grange_sauvee: { act: "II", title: "Les râteaux", place: "saline",
    text: [
      { if: { has: "iis:grange_brulee" }, text: "La poix flambe contre le mur nord. Les sauniers jettent des seaux d'eau salée, des pelletées de sel, des sacs mouillés. Quand le feu est mort, la moitié des râteaux de la Saline est noire et tordue. Domitille regarde les manches calcinés à la lueur des braises. « On plantera ce qu'il reste, dit-elle. Et on se souviendra de qui a apporté la poix. »" },
      { if: { all: [{ has: "iis:grange_sauvee" }, { not: { has: "iis:grange_brulee" } }] }, text: "Le pot de poix roule dans la vase sans s'être ouvert. Les torches n'ont jamais été allumées. Les casaques noires sont reparties en courant vers la Maison du Sel, sauf une, la plus jeune, qui est restée assise par terre, et qui pleure, et à qui Domitille tend la main pour la relever." },
      { if: { all: [{ has: "iis:meen_revenu" }, { has: "iis:grange_sauvee" }] }, text: "Au matin, c'est Méen qui porte le premier râteau dans les bassins, et le plante le premier dans la vase, devant tout le monde." },
      "L'aube se lève sur la grange intacte, ou presque. Personne n'a dormi.",
    ],
    choices: [{ back: "IIS_arrivee" }] },

  IIS_gabare: { act: "II", title: "La gabare de sel", place: "saline",
    text: [
      "Au bout de l'étier, devant l'écluse, une gabare à fond plat charge du sel en sacs pour Salvèze : *La Grise*, une coque goudronnée, une voile carrée roulée sur sa vergue, et un gabarier à la barbe en éventail qui compte les sacs à voix haute. Un gamin court sur la planche avec un sac sur la tête, deux fois plus gros que lui.",
      "« On part au jusant, dit le gabarier. Trois jours jusqu'au port aux Sauniers. Je prends le courrier, deux liards la lettre, et je ne demande pas ce qu'il y a dedans. {{oreille#iis_gabarier|Je suis un homme discret|Le gamin, lui, ouvre tout ce qui porte le sceau de la Banque, et il me le lit le soir, pour rire}}. »",
      { with: "tibere", text: "Tibère regarde le gamin, puis regarde ailleurs. Il a une main sur la poche de sa veste." },
    ],
    choices: [
      { label: "Confier la copie du contrat de Hamon pour les juges de la République (2 liards)", hide: { any: [{ not: { has: "iis:noye_copie" } }, { has: "iis:copie_envoyee" }] }, fx: { gold: -2, flag: "iis:copie_envoyee", fac: { hautes: 5, banque: -5 }, ep: ["perso", 800] }, to: "IIS_gabare_copie" },
      { label: "Demander au gamin ce qu'il porte pour la Banque, cette semaine", hide: { any: [{ not: { voile: "iis_gabarier" } }, { has: "iis:courrier_lu" }] }, fx: { flag: "iis:courrier_lu", gold: -10 }, to: "IIS_gabare_courrier" },
      { back: "IIS_etier" },
    ] },

  IIS_gabare_copie: { act: "II", title: "La copie pour Salvèze", place: "saline",
    text: [
      "Tu cachettes la copie de Hamon avec de la cire du cabaret, et tu écris dessus, de ta plus belle main : *Aux juges de la République, au Palais des Comptoirs, de la part des sauniers de Grisemotte*. Le gabarier la glisse dans le sac de cuir où il range les lettres, entre deux factures de sel, et noue le sac.",
      "La gabare part au jusant, sa voile carrée gonflée par le vent de terre. La sœur de Hamon la regarde passer depuis la digue, les bras croisés, jusqu'à ce qu'elle disparaisse dans les roseaux.",
      "Ce que les juges en feront, tu n'en sais rien. Hamon voulait seulement qu'ils la lisent.",
    ],
    choices: [{ back: "IIS_etier" }] },

  IIS_gabare_courrier: { act: "II", title: "Le courrier du gamin", place: "saline",
    text: [
      "Le gamin empoche ta demi-pièce et t'entraîne derrière une pile de sacs. Il sort de sa chemise une liasse de lettres qu'il n'a pas encore remises au sac de cuir. « Celle-là, c'est pour la Banque Marrel, dit-il fièrement. Le sceau, je sais le recoller. »",
      "C'est une feuille pliée en quatre, d'une écriture de sergent, adressée à *M. Brunel, chez Marrel, île des Changeurs*. *{{loupe#iis_rapport_tibere|Rien à signaler. Le sujet visite les marais et achète du sel|Le sujet cherche au moulin de Grisemotte. Il a la loupe et le cornet. La petite Vasse ne le quitte pas. Le moine non plus}}.* Signé d'un T.",
      { with: "tibere", text: "Tibère est là, à trois pas, et il a tout vu. Il garde le silence et te laisse la lettre. Il attend de savoir ce que tu vas en faire." },
    ],
    choices: [
      { label: "Rendre la lettre au gamin, telle quelle", back: "IIS_gabare" },
      { label: "Jeter la lettre dans l'étier", fx: { flag: "iis:rapport_noye" }, back: "IIS_gabare" },
    ] },

  IIS_ogier_histoire: { act: "II", title: "Ce que raconte le meunier", place: "saline",
    text: [
      "Ogier t'emmène sur la galerie de bois qui fait le tour du moulin, au-dessus de la roue. Il bourre sa pipe sans se presser. « Mon arrière-grand-père racontait que le moulin a été bâti en un seul été, dit-il. Par des maçons qui ne parlaient pas, venus des marais. Ils travaillaient de nuit, à la basse mer, et ils chantaient pour se donner la cadence. Au matin, ils dormaient dans les roseaux. »",
      "Il allume sa pipe. « La reine est venue une fois, à l'automne, voir le moulin fini. Une femme toute petite, en gris, avec un homme maigre qui portait un écritoire. Elle a mis la main sur la roue, comme ça, et elle est repartie. Mon ancêtre disait qu'elle n'avait pas dit un mot. Moi, je crois qu'il n'avait pas écouté. »",
      "Sous vos pieds, la galerie {{echo#iis_echo_galerie|craque à chaque coup de vent|rend un chant d'hommes, bas, à plusieurs voix, scandé par des coups de masse : « Quand la mer est pleine, cale la porte… »}}.",
    ],
    choices: [{ back: "IIS_moulin" }] },

  IIS_cimetiere: { act: "II", title: "Le cimetière des sauniers", place: "saline",
    text: [
      "Derrière la chapelle, le cimetière des sauniers est un carré de sable entouré d'un muret bas, où les tombes sont marquées de pieux de bois peints, comme les œillets. Sur chaque pieu, un nom, et sous le nom, le nom de l'œillet que le mort tenait. *Alain Quéré, la Quéré.* *Hamon Lefeuvre, le Trou-Rose.*",
      "La terre de Hamon est fraîche. Quelqu'un y a posé un râteau, la lame en l'air, et une poignée de gros sel qui fond lentement dans le sable humide.",
      { after: "iis:noye_laisse", text: "La sœur de Hamon est assise sur le muret, son pain sur les genoux. Elle te reconnaît. « Le curé a écrit qu'il était tombé, dit-elle. Je l'ai laissé écrire. Toi aussi. »" },
      "Le sable du cimetière {{echo#iis_echo_cimetiere|boit la pluie et ne rend rien|rend la voix de la sœur de Hamon, ce matin, toute seule : « Ils l'ont lue, tu sais. Ou ils la liront. Dors. »}}.",
    ],
    choices: [{ back: "IIS_chapelle" }] },

  IIS_depart: { act: "II", title: "Le chant du départ", place: "saline", fx: { ep: ["seance", 1000] },
    text: [
      "Quand tu reprends le chemin de la digue, ton sac sur l'épaule, le chant des bassins change. Domitille lance un couplet que tu n'as jamais entendu, lent, sur un air de marée, et les râteaux des œillets voisins s'arrêtent tous ensemble pour le reprendre.",
      "*« Va, la mer te ramène, {{oreille#iis_chant_depart|le sel attend, la Saline t'attend|tu portes la reine ; ne la dis qu'à qui sait se taire}}. »*",
      { after: "iis:greve_gagnee", text: "Sur la barrière, les lettres de chaux, *SEL LIBRE*, sont encore là. Méen et deux autres garçons ont démonté la barrière elle-même pour en faire du bois de chauffe." },
      { after: "iis:greve_brisee", text: "Le chant est bas, à peine audible, et les casaques noires de la barrière font semblant de ne pas l'entendre." },
      { after: "iis:greve_calmee", text: "Le chant est prudent, poli, et Domitille ne te regarde pas en le lançant." },
      { after: "iis:taille_trouvee", text: "Dans l'œillet de la Quéré, Avoye râtelle sous son propre piquet. Sa fille te fait signe avec un râteau deux fois plus grand qu'elle." },
      { after: "iis:taille_vendue", text: "Dans l'œillet de la Quéré, une casaque noire râtelle à la place d'Avoye. Le piquet porte déjà un autre nom, peint de frais." },
      { with: "lison", text: "Lison chante le refrain avec les sauniers, à pleine voix, cette fois, sans s'en cacher." },
      { with: "gildas", text: "Frère Gildas marche à côté de toi, les mains dans les manches. Tu crois voir ses lèvres bouger sur les paroles." },
    ],
    choices: [{ back: "IIS_arrivee" }] },
});

// ==================================================================== EXTRAS
module.exports = {
  passages: P,
  extras: {
    people: {
      iis_domitille: { name: "Domitille Goulard", f: true, face: { age: "adulte", coif: "foulard", hair: "gris", skin: "hale" }, desc: "Saunière de Grisemotte, meneuse de chant dans les bassins. Elle lance les couplets, et les autres suivent." },
      iis_pallu: { name: "Maître Onésime Pallu", f: false, face: { age: "ancien", coif: "degarni", beard: "sans" }, desc: "Le doyen des maîtres sauniers de Grisemotte. Velours gris, chaîne d'argent, doigts tachés d'encre, onze mille ducats de dettes envers la Banque." },
      iis_croze: { name: "Maîtresse Hermine Croze", f: true, face: { age: "mur", coif: "chignon", hair: "brun" }, desc: "Maîtresse saunière, veuve, la seconde fortune de la Saline. Elle a signé le contrat de la Saint-Martin, et ne se le pardonne pas." },
      iis_machefer: { name: "Lambert Mâchefer", f: false, face: { age: "mur", coif: "court", beard: "barbe", marks: ["balafre"] }, desc: "Le contremaître de la Maison du Sel. Une badine de jonc, des épaules de porteur, et la peur de la Saint-Jean." },
      iis_eudes: { name: "Eudes", f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Le plus vieux saunier de Grisemotte, sourd depuis dix ans. Il est le dernier à savoir en entier le couplet de la reine." },
      iis_meen: { name: "Méen", f: false, face: { age: "jeune", coif: "court" }, desc: "Le petit-fils d'Eudes, seize ans, qui a pris la casaque noire de la Maison du Sel pour un salaire." },
      iis_avoye: { name: "Avoye Quéré", f: true, face: { age: "adulte", coif: "foulard" }, desc: "Veuve d'Alain Quéré, saunier mort de la fièvre l'automne dernier. Elle tient seule un œillet et un mulon, et doit aux maîtres." },
      iis_ogier: { name: "Ogier Bascle", f: false, face: { age: "mur", coif: "degarni", beard: "moustache" }, desc: "Le meunier du moulin de la reine, fils et petit-fils de meunier. Le moulin appartient à la Banque, désormais ; Ogier, pas encore." },
      iis_rambert: { name: "Rambert, dit le Gaucher", f: false, face: { age: "mur", coif: "court", beard: "moustache", marks: ["cicatrice"] }, desc: "Le chef des spadassins que Lothaire Brunel a envoyés à Grisemotte. La main droite bandée ; il mange, écrit et tue de la gauche." },
      iis_gobert: { name: "Gobert", f: false, face: { age: "adulte", coif: "milong" }, desc: "Colporteur d'aiguilles, d'images pieuses et de fausses médailles, qui vend aussi des noms." },
      iis_hamon: { name: "Hamon Lefeuvre", f: false, face: { age: "adulte", coif: "court", beard: "barbe" }, desc: "Saunier de Grisemotte, retiré de l'étier la tête ouverte trois jours avant ton arrivée." },
    },
    items: {
      iis_tr_couronne: { name: "La couronne de sel", kind: "tresor", price: 400, desc: "Un cercle d'argent doré ciselé de joncs et de vagues, qui a dormi trois siècles sous une croûte de sel dans la chapelle de Grisemotte." },
      iis_tr_gobelet: { name: "Le gobelet des maîtres", kind: "tresor", price: 160, desc: "Un gobelet à pied d'argent doré, caché sous une couche d'étain peint. Sur le pied, en creux, un râteau et une couronne : les armes de la reine." },
      iis_tr_sel: { name: "Le sel de la reine", kind: "tresor", price: 240, desc: "Un pot de grès scellé de cire noire, plein d'un sel gris et rose qui sent la violette. Les apothicaires de Salvèze en paieraient son poids d'argent." },
      iis_tr_ambre: { name: "L'éclat d'ambre chantant", kind: "tresor", price: 120, bonus: { magie: 5, savoir: 5 }, desc: "Un éclat d'ambre des Écueils, gros comme une noix, qui servait de crapaudine à l'axe de la roue. Contre l'oreille, il bourdonne doucement." },
      iis_faux_medaille: { name: "La médaille de la reine", kind: "tresor", price: 2, desc: "Une médaille ronde au profil d'une reine couronnée, une roue au revers. Gobert le colporteur jurait qu'il n'en existait pas dix." },
      iis_copie_contrat: { name: "La copie du contrat de la Saint-Martin", kind: "document", keep: true, price: 0, desc: "Deux feuilles pliées, recopiées d'une main de clerc, du contrat entre les maîtres sauniers et la Banque Marrel.",
        text: "*Item, les maîtres sauniers de Grisemotte vendent à la Banque Marrel tout le sel des trois saisons à venir, au prix de quatre liards la mine, livrable à la Saint-Jean.*\n\n*Item, le moulin dit de la Reine, avec sa roue et ses meules, {{loupe#iis_contrat_moulin|sera affermé à la Banque pour la durée du présent contrat|demeure à la Banque Marrel en pleine propriété, avec ses fondations, ses caves et tout ce qui s'y trouvera, même si le présent contrat venait à être rompu}}.*\n\n*Item, à défaut de livraison entière à la Saint-Jean, {{loupe#iis_contrat_terre|les maîtres paieront à la Banque un dédit d'un dixième|les œillets des maîtres eux-mêmes passent à la Banque, et la terre dessous, sans recours}}.*" },
      iis_lettre_gaucher: { name: "La lettre au Gaucher", kind: "document", keep: true, price: 0, desc: "Une lettre pliée en huit, d'une écriture fine et penchée, trouvée sur Rambert le Gaucher.",
        text: "*Rambert,*\n\n*Attendez la Saint-Jean et le droit de la Banque. Ne touchez à rien avant. {{loupe#iis_lettre_lothaire|Rapportez-moi ce que vous trouverez, intact, et vous serez payé|Si quelqu'un d'autre lève la dalle avant vous, laissez-le faire, puis prenez-lui la feuille et brûlez-la devant témoin. Le sel et le reste, gardez-les : c'est la feuille que je paie}}.*\n\n*L. B.*" },
    },
    enemies: {
      iis_nervi: { name: "Homme de la Maison du Sel", look: "humain", pv: 22, att: 42, def: 16, dmg: 5, desc: "Casaque noire à liseré jaune, gourdin de chêne. Payé par les maîtres sauniers, sur l'argent de la Banque." },
      iis_machefer: { name: "Lambert Mâchefer", look: "humain", pv: 60, att: 52, def: 18, dmg: 7, desc: "Le contremaître de la Maison du Sel, une badine dans une main et un couteau à sel dans l'autre." },
      iis_spadassin: { name: "Spadassin aux gants gris", look: "humain", pv: 26, att: 46, def: 18, dmg: 6, desc: "Un homme de Lothaire Brunel : bottes de ville, lame courte, gants de cuir gris." },
      iis_gaucher: { name: "Rambert le Gaucher", look: "humain", pv: 70, att: 58, def: 22, dmg: 8, desc: "La main droite bandée, l'épée dans la gauche, et trente ans de métier." },
    },
    quests: [
      { id: "IIS_taille", act: "II", kind: "annexe", title: "La taille d'Alain Quéré", start: "IIS_avoye", echo: "iis:taille" },
      { id: "IIS_eudes", act: "II", kind: "annexe", title: "Le couplet de la reine", start: "IIS_eudes", echo: "iis:eudes" },
      { id: "IIS_noye", act: "II", kind: "annexe", title: "Le noyé de l'étier", start: "IIS_noye", echo: "iis:noye" },
    ],
    clues: {
      iis_c_contrat: { rev: "B", text: "Le contrat de la Saint-Martin, sous la loupe : le moulin de la reine reste à la Banque Marrel, avec ses fondations et tout ce qui s'y trouvera, même si le contrat est rompu." },
      iis_r_sceau: { rev: "R", text: "Le feuillet de la Saline, sous la loupe : les scelleurs de la reine glissaient un grain de sel sous la cire de chaque acte. Un acte de son règne sans grain de sel est un faux." },
    },
    veils: {
      iis_droit: { fx: { ep: ["perso", 200] } },
      iis_c1: { fx: { ep: ["perso", 400] } },
      iis_c2: { fx: { ep: ["perso", 400] } },
      iis_c3: { fx: { ep: ["perso", 600] } },
      iis_dentelle: { fx: { ep: ["perso", 600] } },
      iis_contrat_moulin: { fx: { clue: "iis_c_contrat", ep: ["perso", 400] } },
      iis_contrat_terre: { fx: { ep: ["perso", 400] } },
      iis_lison_garant: { fx: { ep: ["perso", 200] } },
      iis_gobelet: { fx: { ep: ["perso", 200] } },
      iis_feuillet_actes: { fx: { ep: ["perso", 800] } },
      iis_feuillet_grain: { fx: { clue: "iis_r_sceau", ep: ["perso", 800] } },
      iis_feuillet_terre: { fx: { ep: ["perso", 500] } },
      iis_linteau: { fx: { ep: ["perso", 300] } },
      iis_echo_moulin: { fx: { ep: ["perso", 300] } },
      iis_echo_chapelle: { fx: { ep: ["perso", 300] } },
      iis_ogier_hamon: { fx: { flag: "iis:noye_temoin", ep: ["perso", 300] } },
    },
    epilogue: [
      { if: { has: "iis:gaucher_parti" }, text: "**Rambert le Gaucher.** Il passa la frontière du nord avec ses trois hommes et ne servit plus Lothaire Brunel. Il fit graver sur le pommeau de son épée le nom de son frère, Ivain." },
      { if: { has: "iis:gaucher_vaincu" }, text: "**Rambert le Gaucher.** Il s'embarqua à Port-Vasier pour Aveline, la cuisse encore bandée, et prit du service sur les galères du duc. Il se battit de la main gauche jusqu'à la fin." },
      { if: { has: "iis:gaucher_noye" }, text: "**Rambert le Gaucher.** Il rentra à Salvèze à pied, sans épée, et Lothaire Brunel refusa de le recevoir. Il ouvrit une salle d'armes rue des Tanneurs, et commença chaque leçon en demandant l'heure de la mer." },
    ],
  },
};
