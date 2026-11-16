// Le Douzième Coup · chapter 8, the one who passes, first half (act III, four days before the Grand Midi of 541).
// Eight leagues by water, from the landing of Sainte-Aure to the gates of Méridane, on the slow coach-boat of the
// Queen's canal. The deck hub: a Juré of the Guild going back to vote (`j:sait_vote`, `j:rouet_averti`), the quack of
// Roquebise and his grey elixir (`j:mirobolan_chasse`, `monde:remede_mere`), a sergeant of the duke hiring arms for a
// night removal (`j:engage_barges`), Tiphaine out of her veil (`j:sait_levier`), Perrine and her rule, Line and the
// lock. A jammed lock (`j:ecluse_reparee`), a barge of candles for the Palace, the shadow of the Tower crossing the
// plain. Landing at the Fair, the West Gate (the bishop's paper: `j:billet_ville`), and the first stone, where the
// great bell strikes noon: twelve strokes (M08).
var P = {};
var LINE = { has: "monde:line_route" };
var TIPH = { has: "monde:tiphaine_partie" };
var HORLO = [{ if: { voie: "rouage" }, v: 15 }, { if: { item: "trousse" }, v: 10 }];

Object.assign(P, {
  K08j_route: { act: "III", title: "Le canal de la Reine", place: "abbaye", ambiance: "eau", takes: "morning",
    text: [
      "De Sainte-Aure aux portes de Méridane, il y a huit lieues de chaussée, que les gens pressés font en un jour et regrettent pendant trois. Les autres prennent l'eau. Le canal de la Reine passe au bas du vallon, entre deux rangs de peupliers, droit, vert, large de quatre toises ; il a été creusé il y a cent ans pour porter à la ville la pierre des coteaux, et il porte à présent tout ce qui a le temps.",
      "À l'embarcadère, une longue barque à rouf attend, peinte en jaune, avec un nom en lettres bleues : *la Diligente*. Un cheval gris la tire, du chemin de halage, au bout d'une corde de vingt brasses ; un gamin est assis dessus, de côté, et dort. Elle fait sa lieue à l'heure. On lui a donné son nom un jour de bonne humeur.",
      "Le patron est sur la planche, la casquette en arrière, et crie son boniment aux pèlerins qui descendent de l'abbaye. « Méridane pour midi ! Huit lieues, quatre écluses, pas un cahot ! Deux sous la place assise, un sou le toit, les enfants sur les genoux et les poules dans le panier ! »",
      { with: "perrine", text: "Perrine a déjà calculé. « Deux sous chacun, c'est trop pour ce que c'est, et pas assez pour s'en passer. Je porte une hotte, moi, pas huit lieues de cailloux. » Elle te pousse vers la planche." },
      { if: TIPH, text: "Tiphaine regarde l'eau, la barque, le cheval, avec les yeux de quelqu'un à qui l'on rend tout cela d'un coup. Sous le fichu rouge de Perrine, elle a encore la nuque raide du chœur. Elle tient son baluchon à deux mains, devant elle, comme un livre d'office." },
      { if: LINE, text: "Line est allée droit à l'arrière voir comment tient le gouvernail." },
    ],
    choices: [
      { label: "Payer la place", if: { gold: { min: 1 } }, why: "Tu n'as pas un écu.", fx: { gold: -1 }, to: "K08j_coche" },
      { label: "Offrir tes bras au patron : la perche aux écluses, contre le passage", test: { dom: "combat", diff: 0, label: "Tenir la perche", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { flag: "j:coche_perche" }, to: "K08j_coche" }, lose: { fx: { flag: "j:coche_perche", pv: -2 }, to: "K08j_coche" } },
      { label: "Laisser Perrine négocier", hide: { not: { present: "perrine" } }, fx: { flag: "j:coche_perrine" }, to: "K08j_coche" },
    ] },

  K08j_coche: { act: "III", title: "La Diligente", backName: "le pont de la Diligente", place: "abbaye", ambiance: "eau", hub: true,
    text: [
      { first: true, after: "j:coche_perrine", text: "Perrine parle au patron le temps d'un Pater. Tu saisis *almanach*, *lecture à voix haute*, *tous vos passagers*, et *un sou par tête sur ce que je vends*. Le patron se gratte sous la casquette, et vous fait signe de monter. Elle a vendu votre passage au lieu de l'acheter." },
      { first: true, after: "j:coche_perche", text: "Le patron te met dans les mains une perche ferrée, longue de trois toises, et te montre l'avant. « Aux écluses et aux ponts, tu pousses. Entre, tu regardes le paysage. C'est un métier où l'on réfléchit beaucoup. »" },
      { first: true, text: "Le gamin se réveille, le cheval gris se met dans son collier, la corde sort de l'eau en s'égouttant, et la *Diligente* quitte le bord avec une lenteur qui tient de la cérémonie. Les peupliers commencent à passer, l'un après l'autre. On pourrait les compter. Plusieurs passagers les comptent." },
      { first: true, text: "Ils sont une trentaine, sur les bancs du rouf et sur le toit : des pèlerins qui rentrent, des fermières à paniers, deux moines, un soldat en congé. Tout ce monde va à la foire du Grand Midi, et le dit. On est entre gens qui ont devant eux quatre jours de fête et qui n'imaginent rien après." },
      { again: true, text: "Le pont de la *Diligente*, ses bancs, son toit chargé de paniers. Les peupliers passent. Le cheval gris marche." },
      { again: true, after: "K08j_ecluse_fin", text: "Au levant, par-dessus la plaine, la chose droite et pâle a grandi." },
    ],
    choices: [
      { label: "Un gros homme en drap fin, qui occupe deux places et un panier", to: "K08j_rouet" },
      { label: "Un monsieur en robe noire, debout sur un banc, une fiole à la main", to: "K08j_mirobolan" },
      { label: "Un sergent à rubans verts, à l'arrière, qui paie à boire", to: "K08j_recruteur" },
      { label: "Tiphaine, assise à l'avant, les pieds au ras de l'eau", hide: { not: TIPH }, to: "K08j_tiphaine" },
      { label: "Perrine, sur le toit, au milieu de ses almanachs", hide: { not: { present: "perrine" } }, to: "K08j_perrine" },
      { label: "Le patron, à sa barre", to: "K08j_patron" },
      { label: "Laisser passer les peupliers jusqu'à la première écluse", to: "K08j_ecluse", big: true, hide: { seen: "K08j_ecluse" } },
      { label: "Laisser filer la plaine", to: "K08j_plaine", big: true, hide: { not: { seen: "K08j_ecluse_fin" } } },
    ] },

  K08j_rouet: { act: "III", title: "Un Juré en voyage", backName: "le gros homme", place: "abbaye", ambiance: "eau", fx: { meet: "rouet" },
    text: [
      { first: true, text: "Il a cinquante ans, trois mentons, des bas de soie, et sur les genoux un panier d'osier d'où il tire, avec méthode, un pâté, puis un autre. Une chaîne d'or lui barre le ventre ; au bout pend un petit balancier d'émail, dans un cercle. Tu as vu ce signe sur deux lettres, hier." },
      { first: true, text: "« Vous regardez mon bijou, jeune personne. Vous avez raison, il est fort beau. » Il a la bouche pleine et la voix aimable. « Maître Hippolyte Rouet, Horloger-Juré, pour vous servir de loin. Je rentre de mes vignes de Saint-Gnomon. Un Juré a des vignes : c'est même à cela qu'on reconnaît qu'il a cessé de limer. Je serai à Méridane pour le vote, puisqu'il faut y être, et pour le dîner qui suit, puisqu'on y tient. »" },
      { first: true, after: "j:josquin_estime", text: "Il t'examine. « C'est vous qui avez remis l'heure à mon clocher, hier ? On me l'a conté à la Grappe. Le petit Josquin en était malade. J'ai payé ce cadran bleu de ma poche, figurez-vous, et il retardait depuis Pâques : vous m'avez épargné la honte de le voir faux le jour de la fête. Prenez un pâté. »" },
      { again: true, text: "Maître Rouet en est à son troisième pâté. Le petit balancier d'émail danse sur son ventre." },
    ],
    choices: [
      { label: "« On vote quoi, à la Guilde ? »", hide: { seen: "K08j_rouet_vote" }, to: "K08j_rouet_vote" },
      { label: "« Le Grand Maître vous a-t-il écrit, ces jours-ci ? Deux fois ? »", hide: { any: [{ not: { has: "j:lettre_prouvee" } }, { not: { seen: "K08j_rouet_vote" } }, { seen: "K08j_rouet_lettre" }] }, to: "K08j_rouet_lettre" },
      { back: "K08j_coche" },
    ] },
  K08j_rouet_vote: { act: "III", title: "Une expérience fort simple", place: "abbaye", ambiance: "eau", fx: { flag: "j:sait_vote" },
    text: [
      "Il regarde autour de lui. Il n'y a que des fermières. Il estime qu'une fermière n'entend pas le français des Jurés, et il parle.",
      "« Une petite chose. Une expérience. Le sous-maître Aubespin, qui est un sujet d'un mérite extraordinaire, propose de suspendre le cours de l'heure dans une seule chambre de la Tour, la plus haute, pour un temps, et de l'y rendre ensuite. Vous ne comprenez pas ; peu importe. Le Palais le demande. La Reine y tient pour des raisons de mère, que l'on devine et que l'on ne dit pas. Il faut le consentement des sept. »",
      "Il s'essuie les doigts. « Nous sommes six à trouver la chose raisonnable. Maître Balancourt, notre trésorier, parce que Monseigneur de Hautgué a eu la bonté de couvrir les dettes de la Guilde, qui étaient lourdes. Le jeune Cliquet, parce qu'il doit sa place à Aubespin. Notre doyen, maître Lunel, parce qu'il a quatre-vingt-huit ans et qu'il vote avec le dernier qui a parlé. Maître Foliot, parce qu'il n'aime pas se distinguer : il y a eu dans sa famille un Grand Maître déposé, autrefois, et depuis, les Foliot votent avec le nombre. Aubespin, cela va de soi. Et moi. »",
      "Tu demandes pourquoi lui. Il prend le temps de choisir un pâté. « Parce que j'ai trois maisons qui donnent sur la place du Palais, jeune personne, et que la Reine est une excellente locataire. »",
      "« Reste Coudrier. Il est contre. Il est contre avec des citations. Il a envoyé son apprenti copier je ne sais quel chapitre chez les religieuses, pour nous le lire. » Maître Rouet soupire. « On l'écoutera. Il est Grand Maître. Puis on votera, six contre un, et l'on ira dîner. Le monde est ainsi fait qu'on y a toujours tort tout seul. »",
    ],
    choices: [{ back: "K08j_rouet" }] },
  K08j_rouet_lettre: { act: "III", title: "Ce qu'un Juré n'a pas entendu", place: "abbaye", ambiance: "eau", fx: { flag: "j:rouet_averti" },
    text: [
      "Le pâté s'arrête à mi-chemin.",
      "Tu dis ce que tu sais, sans un mot de trop. Qu'il est arrivé à Sainte-Aure, hier matin, une lettre signée du Grand Maître, scellée du grand sceau, qui réclamait le Livre. Que le Grand Maître ne l'avait pas écrite. Que la main qui l'a contrefaite a laissé passer, à la dernière ligne, un *d* qui penche en arrière.",
      "Maître Rouet repose le pâté dans le panier. Il referme le panier. Il a perdu deux de ses trois mentons, ou du moins leur couleur.",
      "« Le grand sceau. » Il le dit très bas. « Le grand sceau est dans un coffre à trois clefs. Coudrier en a une. Balancourt en a une. La troisième... » Il ne finit pas. Il n'est pas sot ; il est seulement gras, et l'on confond souvent. « Un faux, sous le sceau de la Guilde. Pour avoir le Livre avant le vote. Savez-vous ce que cela vaut, à un Juré ? La corde. »",
      "Il se tourne vers l'eau. Il regarde passer quatre peupliers. Quand il revient à toi, il a retrouvé sa voix aimable, et tu comprends qu'il vient de ranger quelque chose dans une armoire dont il compte se servir. « Je n'ai rien entendu, jeune personne. Vous ne m'avez rien dit. Je vote dans quatre jours avec le nombre, comme toujours. » Il rouvre son panier. « Seulement, voyez-vous, j'aime savoir de combien est le nombre avant de m'y mettre. »",
    ],
    choices: [{ back: "K08j_rouet" }] },

  K08j_mirobolan: { act: "III", title: "L'élixir du docteur Mirobolan", backName: "le marchand d'élixir", place: "abbaye", ambiance: "eau",
    text: [
      { first: true, if: { seen: "K05j_charlatan" }, text: "Tu le reconnais à la robe, qui a un accroc à la même place : le docteur Mirobolan, que tu as vu vendre sa poudre sous le placard de la borne, à Roquebise. Il a changé de marchandise. Il a gardé sa voix." },
      { first: true, if: { not: { seen: "K05j_charlatan" } }, text: "C'est un long homme jaune, en robe de médecin trop courte, avec un bonnet carré et une caisse à compartiments. Il a une voix à vendre des parapluies en août." },
      { first: true, text: "« ...car il ne s'agit plus, mesdames, de vos cors ni de vos vapeurs ! Il s'agit du mal du siècle, de celui qu'on tait dans les palais et qu'on pleure dans les chaumières : la langueur grise ! Les ongles d'abord ! Puis les lèvres ! Et l'on me dit, moi, docteur Mirobolan, gradué de trois facultés dont deux existent, qu'il n'y a pas de remède ? Le voici ! » Il lève une fiole où tremble un liquide couleur de plomb. « L'élixir gris, tiré de la rosée de minuit, qui rend au sang la couleur que le mal lui prend ! Un écu la fiole, trois écus la cure, et je ne fais pas crédit aux mourants. »" },
      { first: true, text: "Sur le banc d'en face, une femme en fichu noir a déjà ouvert sa bourse. Elle a les yeux rouges. Elle compte ses pièces dans sa main, une par une, et elle n'en a pas beaucoup." },
      { again: true, text: "Le docteur Mirobolan range ses fioles dans leur paille, entre deux boniments." },
      { again: true, after: "j:mirobolan_chasse", text: "Il n'y a plus de docteur sur le banc. Il marche sur le chemin de halage, sa caisse sur le dos, à cent pas derrière le cheval gris, et il a l'air de réfléchir à sa troisième faculté." },
    ],
    choices: [
      { label: "Lui prendre la fiole, la déboucher, et la sentir devant tout le monde", hide: { any: [{ has: "j:mirobolan_chasse" }, { seen: "K08j_mirobolan_fin" }] }, test: { dom: "social", diff: 5, label: "Confondre", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "heurier" }, v: 10 }, { if: { present: "perrine" }, v: 10 }, { if: { seen: "K07j_infirmerie" }, v: 10 }] },
        win: { fx: { flag: "j:mirobolan_chasse", ep: ["seance", 600] }, to: "K08j_mirobolan_fin" }, lose: { to: "K08j_mirobolan_fin" } },
      { label: "T'asseoir près de la femme au fichu noir", hide: { seen: "K08j_mere" }, to: "K08j_mere" },
      { back: "K08j_coche" },
    ] },
  K08j_mirobolan_fin: { act: "III", title: "De l'eau, de la suie, et un peu de vinaigre", place: "abbaye", ambiance: "eau",
    text: [
      { outcome: "win", text: "Tu débouches. Tu flaires. Tu as passé neuf ans dans un atelier où l'on fait ses vernis soi-même, et tu sais ce que sent le noir de fumée délayé. Tu le dis, tout haut : de l'eau, de la suie, un filet de vinaigre pour que ça pique. Tu en verses trois gouttes sur le dos de ta main et tu la montres. Elles y font une tache de ramoneur." },
      { outcome: "win", text: "« Calomnie ! » Le docteur a reculé d'un pas, ce qui, sur un banc, est une imprudence. Tu ajoutes que tu as vu hier, à Sainte-Aure, une sœur qui soigne ce mal depuis trente ans, qu'elle n'a rien, et qu'elle le dit. Les fermières se regardent. Le soldat en congé se lève. Le patron, de sa barre, sans se retourner : « Je ne veux pas de noyés dans mon canal, ça gâte l'eau. Mettez-le sur le chemin. » On le met sur le chemin, avec sa caisse. Il n'a perdu que deux lieues et son public." },
      { outcome: "win", with: "perrine", text: "Perrine a suivi la scène du toit, le menton dans la main. « Il vendait un écu ce qui lui coûte un liard, dit-elle quand tu la rejoins. Je n'ai rien contre. Mais il le vendait à des gens qui pleurent. Il y a une limite au commerce, et elle est là. »" },
      { outcome: "lose", text: "Tu débouches, tu flaires, tu dis que cela sent la suie. Le docteur Mirobolan en a vu d'autres. « La suie ! Monsieur le portefaix connaît la suie ! Qu'il nous dise donc ce que sent la thériaque, et le bézoard, et le sang-dragon ! Mesdames, on m'envoie ici un rival jaloux, un garçon apothicaire qu'on a chassé pour ivrognerie ! » Il te reprend la fiole avec une majesté outragée. Les fermières hésitent entre vous deux, et choisissent la robe noire. Il vend quatre fioles avant l'écluse." },
    ],
    choices: [{ back: "K08j_mirobolan" }] },
  K08j_mere: { act: "III", title: "La femme au fichu noir", place: "abbaye", ambiance: "eau",
    text: [
      "Elle s'appelle Aubierge. Elle vient de Sainte-Aure, où elle a fait dire une neuvaine, et elle rentre à Méridane, quartier de la Tannerie, où sa fille de six ans est couchée depuis Pâques.",
      "« Elle a les ongles gris. Les lèvres, depuis la semaine dernière. Elle dort tout le jour. » Elle le dit sans pleurer ; elle a fini. « Le médecin du quartier ne vient plus. Il dit qu'il n'aime pas se faire payer pour rien. Alors j'achète ce qu'on me vend. Je sais bien que c'est de l'eau. Mais si je n'achète rien, je ne fais rien, et je ne peux pas ne rien faire. »",
      { after: "j:mirobolan_chasse", text: "Elle a encore sa pièce dans la main. Elle la regarde. « Vous m'avez gardé un écu. Je ne sais pas si je vous en remercie. »" },
      { if: { has: "monde:su:remede" }, text: "Tu sais un nom. {autre} te l'a écrit de l'autre bout du temps : une écorce, un arbre des îles, trois semaines de tisane, et toutes les mères le savent. Ici, aucune ne le sait. Il faut un an pour faire venir un navire, et cette petite fille n'a pas un an." },
      { if: { item: "ecorce_fievrier" }, text: "Tu as mieux qu'un nom. Tu as, entre deux pages, contre ta poitrine, un morceau large comme la main. De quoi mener un enfant au bout. Un." },
    ],
    choices: [
      { label: "Lui dire le nom de l'arbre, et que les sœurs de Sainte-Aure vont en faire venir", hide: { any: [{ not: { has: "monde:su:remede" } }, { has: "monde:remede_mere" }] }, fx: { flag: "monde:remede_mere" }, to: "K08j_mere_fin" },
      { label: "Lui mettre l'écorce dans la main", hide: { not: { item: "ecorce_fievrier" } }, fx: { drop: "ecorce_fievrier", flag: ["monde:remede_mere", "j:ecorce_aubierge", "monde:ecorce_donnee"], ep: ["histoire", 500] }, to: "K08j_mere_fin" },
      { label: "Ne rien dire, et rester assis{e} près d'elle un moment", back: "K08j_mirobolan" },
    ] },
  K08j_mere_fin: { act: "III", title: "Quartier de la Tannerie", place: "abbaye", ambiance: "eau",
    text: [
      { after: "j:ecorce_aubierge", text: "Elle regarde le morceau roux dans sa paume. Elle ne comprend pas. Tu expliques : râpé, bouilli, une pincée par bol, trois bols par jour, trois semaines, sans en manquer un. Tu le lui fais répéter. Elle répète, d'une voix de leçon, et à la troisième fois ses mains se mettent à trembler si fort qu'elle doit serrer l'écorce contre son ventre pour ne pas la lâcher dans le canal." },
      { after: "j:ecorce_aubierge", text: "« Qu'est-ce que je vous dois ? » Rien. Elle ne te croit pas. Personne ne lui a rien donné depuis Pâques. Elle te met de force son écu dans la main, et tu le lui rends, et elle le remet ; vous finissez par le laisser sur le banc, entre vous, où il reste jusqu'à l'écluse." },
      { after: "j:ecorce_aubierge", text: "Tu avais une écorce. Il y avait un garçon à Sainte-Aure, et une princesse à Méridane, et tu as passé une nuit à te demander lequel. C'est une tanneuse du quartier bas qui l'emporte, dans son fichu, pour une petite dont tu ne sais pas le nom. On ne choisit pas toujours entre les gens qu'on avait prévus." },
      { before: "j:ecorce_aubierge", text: "Tu dis le nom. Le fièvrier. Tu dis qu'il n'y en a pas dans le royaume, qu'il en vient par Hautgué, que la sœur Radegonde de Sainte-Aure a écrit aux navires. Elle écoute. Elle ne te prend pas pour un charlatan, parce que tu ne vends rien ; elle te prend pour un de ces jeunes gens qui veulent consoler. « Un an, dit-elle doucement. Vous êtes bien honnête. » Elle range sa pièce. « Je le dirai aux autres. Il y en a quatre dans ma rue. »" },
      { before: "j:ecorce_aubierge", text: "Quatre dans sa rue. Tu n'y avais pas pensé : qu'il y avait dans cette ville, sous le balcon d'une reine qui veille, des rues entières de mères au fichu noir, à qui personne n'a proposé d'arrêter les horloges." },
    ],
    choices: [{ back: "K08j_mirobolan" }] },

  K08j_recruteur: { act: "III", title: "Des bras pour un déménagement", backName: "le sergent aux rubans verts", place: "abbaye", ambiance: "eau",
    text: [
      { first: true, text: "Le sergent a les rubans verts de la maison de Hautgué au chapeau, une cruche entre les pieds, et autour de lui cinq ou six gaillards, des valets de ferme, des mariniers sans barque, qui boivent à ses frais avec l'attention de gens à qui l'on va demander quelque chose." },
      { first: true, text: "« Ce n'est pas pour la guerre, mes agneaux. Monseigneur le duc est un homme de paix. C'est pour porter. Des caisses, des coffres, des meubles de prix, de l'hôtel de Hautgué jusqu'au port, et du port sur les barges. Trois nuits de travail. On commence demain. On paie le double du tarif, parce que c'est la nuit, et encore le double, parce qu'on ne cause pas. »" },
      { first: true, text: "Un marinier demande pourquoi la nuit. Le sergent lui remplit son gobelet. « Parce que le jour, il y a foire, et que Monseigneur n'aime pas déranger. Tu as d'autres questions ? Elles coûtent un jour de paie chacune. »" },
      { first: true, after: "j:sait_chasse", text: "Tu as entendu des piqueurs, hier, parler de relais jusqu'à Hautgué et d'une chasse le matin du Grand Midi. Voici maintenant les meubles. Un seigneur qui vide son hôtel en trois nuits et s'en va chasser le quatrième jour a une idée très nette de ce qu'il ne veut pas voir." },
      { again: true, text: "Le sergent aux rubans verts fait circuler sa cruche. Il a une liste, et il y manque des noms." },
    ],
    choices: [
      { label: "Donner ton nom : porter des caisses, c'est voir ce qu'il y a dedans", hide: { has: "j:engage_barges" }, fx: { flag: "j:engage_barges" }, to: "K08j_recruteur_fin" },
      { back: "K08j_coche" },
    ] },
  K08j_recruteur_fin: { act: "III", title: "Un nom sur une liste", place: "abbaye", ambiance: "eau",
    text: [
      "Le sergent te regarde les épaules, où les bretelles de la hotte ont laissé leurs deux marques. « Portefaix. Bon. Tu sais ce que c'est qu'un poids. » Il mouille son crayon. Tu donnes un nom ; il l'écrit de travers.",
      "« Demain soir, à la brune, quai des Barges, à la ville basse. Tu demandes le sergent La Verdure. C'est moi. Tu ne viens pas ivre, tu ne viens pas avec une fille, et tu ne regardes pas les étiquettes. » Il te glisse un jeton de cuivre, percé, marqué d'un H. « Ça, c'est pour passer la chaîne du quai. Ne le perds pas : il vaut ta paie. »",
      { with: "perrine", text: "Perrine, qui a tout vu du toit, attend que tu sois remonté{e}. « Tu t'engages chez le duc. Pour porter. Toi. » Elle ne demande pas pourquoi. Elle commence à connaître tes raisons, qui ne rapportent jamais. « Si tu vois passer une caisse de rubans, pense à moi. »" },
    ],
    choices: [{ back: "K08j_coche" }] },

  K08j_tiphaine: { act: "III", title: "La première matinée", backName: "l'avant du coche", place: "abbaye", ambiance: "eau",
    text: [
      { first: true, text: "Elle a ôté ses sabots, et laisse traîner ses pieds à un pouce de l'eau, sans la toucher. Elle regarde tout. Un héron. Une lavandière. Un homme qui pêche, et qui ne prend rien, et qui recommence. Elle a seize ans, elle en a passé deux derrière un mur, et le monde lui revient par le détail." },
      { first: true, text: "« Personne ne fait la même chose à la même heure, dit-elle sans se retourner. Regardez-les. Celui-là mange, celle-là dort, l'autre chante faux. Chez nous, à cette heure, soixante personnes font exactement le même geste. » Elle remue les orteils. « Je croyais que cela me manquerait davantage. »" },
      { first: true, text: "Puis, plus bas : « J'ai peur de maître Gobin. Qu'il ne me reconnaisse pas. Ou qu'il me reconnaisse, et qu'il dise que c'est grand dommage, comme l'autre fois. »" },
      { again: true, text: "Tiphaine, à l'avant, les pieds au ras de l'eau. Elle compte les coups de collier du cheval gris." },
    ],
    choices: [
      { label: "« Le Livre parle-t-il de la Tour ? De ce qu'il y a dedans ? »", hide: { seen: "K08j_tiphaine_levier" }, to: "K08j_tiphaine_levier" },
      { label: "« Montrez-lui vos mains. Il comprendra. »", hide: { has: "j:tiphaine_encouragee" }, fx: { flag: "j:tiphaine_encouragee" }, back: "K08j_tiphaine" },
      { back: "K08j_coche" },
    ] },
  K08j_tiphaine_levier: { act: "III", title: "Le chapitre de la Chambre basse", place: "abbaye", ambiance: "eau", fx: { flag: "j:sait_levier", ep: ["histoire", 300] },
    text: [
      "« Le septième chapitre. *De la Tour et de ses trois chambres.* » Elle ferme les yeux ; elle lit dans sa tête, et ses lèvres suivent les lignes.",
      "« *La Chambre haute est sous la cloche. On y monte par trois cent soixante marches, une pour chaque jour de l'an des Fondateurs. La Chambre du milieu tient les rouages, et les Maîtres y ont leur établi. La Chambre basse est sous terre, au pied de l'escalier : là bat le Balancier, dans son puits, et nul n'y descend que le Grand Maître, une fois l'an, pour l'huile.* »",
      "Elle rouvre les yeux. « Et puis il y a le levier. *Au bord du puits est une barre de fer, longue d'une toise, qui a trois crans. Au cran du haut, le Balancier bat libre. Au cran du milieu, on le bride, pour l'huile, et il bat court. Au cran du bas, on le tient.* Le Livre ne dit pas *il s'arrête*. Il dit qu'on le tient, comme on tient un cheval. Et il ajoute que la barre ne remonte pas toute seule. »",
      "Elle se tait. Un peuplier passe. « J'ai lu cela onze nuits de suite sans comprendre pourquoi on avait fait un cran dont on défendait de se servir. Je crois que j'ai compris en vous écoutant parler d'échappement. On ne fait pas une machine sans le moyen de l'arrêter. On défend seulement d'y toucher, et l'on espère que cela suffira. »",
    ],
    choices: [{ back: "K08j_tiphaine" }] },

  K08j_perrine: { act: "III", title: "L'almanach de l'an 541", place: "abbaye", ambiance: "eau", fx: { conf: { perrine: 1 } },
    text: [
      { with: "perrine", text: "Perrine a fait du toit une boutique. Elle lit l'almanach tout haut, à la demande, en commençant par les prédictions, que tout le monde veut, et en finissant par les foires, que tout le monde achète. « *Juin. Le vingt et un, Grand Midi. Beau temps sur la ville ; grande affluence ; il se fera ce jour-là une chose dont on parlera longtemps.* » Elle referme le livret. « Il met cela tous les ans, l'imprimeur. Il ne s'est jamais trompé. »" },
      { with: "perrine", after: "j:perrine_prevenue", text: "Elle attend que les fermières se soient éloignées. « J'ai pensé à ce que tu as dit. Hors des murs, le jour. Je vendrai la veille, à la brune, et je coucherai à la Foire. » Elle te regarde. « La Foire, c'est hors des murs ? » Tu ne sais pas. À une lieue de la Tour : c'est tout ce que tu sais. « Tu ne sais pas, répète-t-elle. Bon. Alors j'irai plus loin. Mais tu me diras jusqu'où, quand tu le sauras. »" },
      { with: "perrine", after: "j:perrine_attend", text: "Elle attend que les fermières se soient éloignées. « Tu m'as dit : là-bas. Nous y sommes à midi. » Elle ne te presse pas ; elle te rappelle une échéance. « Je loge chez dame Tiennette, à la Patiente, sur le quai de la ville basse. C'est une cousine de ma mère. Tu me trouveras là, et tu me diras. »" },
      { with: "perrine", after: "j:perrine_mentie", text: "Elle te tend un almanach sans te regarder. « Tiens. Lis le vingt et un. C'est écrit là comme dans ton cahier, je suppose. Seulement l'imprimeur, lui, il vend le sien. »" },
      { with: "perrine", text: "Elle te montre du menton le levant. « Quand on verra les murs, tiens ta hotte devant toi. À la porte d'Occident, ils demandent le billet de logement à tout ce qui porte un sac. Sans billet, on couche à la Foire, sous une charrette, avec dix mille autres. Avec un billet, on couche à la ville, dans un lit, et on le paie trois écus. Moi, j'ai ma cousine. Toi, tu as une figure honnête, ce qui ne vaut rien à une porte. »" },
    ],
    choices: [{ back: "K08j_coche" }] },
  K08j_patron: { act: "III", title: "Trente ans de halage", place: "abbaye", ambiance: "eau",
    text: [
      "Le patron tient sa barre du coude et bourre sa pipe des deux mains. Il s'appelle Fiacre. Il fait ce canal depuis trente ans, à une lieue l'heure, ce qui lui a laissé le loisir de tout regarder.",
      "« Tu vois cette barge, là-bas, qui nous vient dessus ? Bâchée de blanc, deux chevaux, le pavillon du Palais ? Regarde-la passer. Tu me diras ce que tu en penses. »",
      "Elle passe. Elle est basse sur l'eau, chargée à couler, et l'on sent, quand elle vous croise, une odeur douce, grasse, d'église. « De la cire, dit Fiacre. Des cierges. C'est la sixième depuis la Saint-Médard. Une par semaine, puis deux. On brûle au Palais, en ce moment, plus de chandelle que dans toutes les églises du diocèse. » Il allume sa pipe. « Quand une maison veille à ce point, mon petit, c'est qu'il y a dedans quelqu'un qu'on a peur de voir s'endormir. »",
      { after: "j:sait_aelis_cachee", text: "Tu penses au courrier de la Grappe, et à sa septième lettre, cachetée de noir." },
      "Il tire deux bouffées. « Et tu sais ce qui revient à vide, par ce même canal ? Les barges de Monseigneur de Hautgué. Elles montent au port pleines de foin, à ce qu'on déclare à l'écluse. Je n'ai jamais vu de foin enfoncer une barge jusqu'au plat-bord. » Il crache dans l'eau. « Je ne dis rien. Je hale. »",
    ],
    choices: [{ back: "K08j_coche" }] },

  K08j_ecluse: { act: "III", title: "L'écluse des Trois-Heures", place: "abbaye", ambiance: "eau",
    text: [
      "Vers neuf heures, le canal monte une marche. C'est une écluse à sas, la seconde des quatre : deux paires de portes de chêne, hautes de trois toises, noires, moussues, qui pleurent par tous leurs joints. La *Diligente* entre dans le sas comme dans un tombeau. Les portes d'aval se referment derrière elle. On attend l'eau.",
      { if: LINE, text: "Line est à plat ventre sur le toit, la tête dans le vide, et regarde les vantelles. « Ça monte tout seul, annonce-t-elle. C'est l'eau d'en haut qui veut descendre. On a qu'à ouvrir. » Elle se retourne vers toi, bouleversée. « C'est comme la clepsydre. C'est encore un truc qui marche parce que ça tombe ! Pourquoi on m'a jamais dit que tout marchait comme ça ? »" },
      "L'eau ne vient pas. L'éclusier est en haut, sur le bajoyer, pendu à une manivelle, et il jure. C'est un petit homme sec, en sabots, qui a derrière lui une maisonnette à cadran solaire et devant lui une crémaillère de fer longue comme une échelle. La manivelle tourne ; la crémaillère ne bouge pas.",
      "« Elle a sauté une dent ! crie-t-il vers la barque. Le pignon tourne fou ! Il me faut le maréchal de Vouzy, et il est à la foire ! » Fiacre ôte sa pipe. « Jusqu'à quand ? » « Jusqu'à demain ! »",
      "Trente passagers lèvent la tête vers un petit homme et une manivelle. Il y a quatre jours avant le Grand Midi, et l'on vient d'en perdre un au fond d'un trou.",
    ],
    choices: [
      { label: "Monter sur le bajoyer voir le pignon", test: { dom: "savoir", diff: 5, label: "Mécanique", help: HORLO.concat([{ if: { has: "monde:line_route" }, v: 5 }, { if: { has: "monde:tiphaine_partie" }, v: 10 }]) },
        win: { fx: { flag: "j:ecluse_reparee", ep: ["seance", 700] }, to: "K08j_ecluse_fin" }, lose: { to: "K08j_ecluse_fin" } },
      { label: "Prendre la perche avec les hommes, et forcer les portes d'amont à bras", test: { dom: "combat", diff: 5, label: "Forcer", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { has: "j:coche_perche" }, v: 10 }] },
        win: { fx: { flag: "j:ecluse_forcee" }, to: "K08j_ecluse_fin" }, lose: { fx: { pv: -2 }, to: "K08j_ecluse_fin" } },
    ] },
  K08j_ecluse_fin: { act: "III", title: "Une dent de sautée", place: "abbaye", ambiance: "eau",
    text: [
      { after: "j:ecluse_reparee", text: "C'est une machine de l'espèce que tu préfères : on voit tout. Un pignon de fonte à huit dents, une crémaillère, un cliquet. Le pignon n'a pas sauté ; c'est sa clavette qui s'est cisaillée, et il tourne sur son arbre comme une roue de brouette. Tu n'as pas de clavette. Tu as, dans ta trousse, une lime douce, dont la soie fait à peu près le calibre. Tu la sacrifies. Tu l'enfonces au maillet de l'éclusier, tu casses ce qui dépasse." },
      { after: "j:ecluse_reparee", if: TIPH, text: "Tiphaine est montée derrière toi. Elle a vu la clavette avant que tu aies fini de la chercher, et te l'a montrée du doigt, sans un mot, avec une joie qu'elle n'essayait pas de cacher. Vous l'avez enfoncée à deux." },
      { after: "j:ecluse_reparee", text: "« Tournez. » Le petit homme tourne. La crémaillère monte, dent par dent, avec un claquement gras ; au fond du sas, deux gueules s'ouvrent, et l'eau du bief d'en haut entre en grondant sous la barque. Trente passagers applaudissent une manivelle. L'éclusier te regarde comme on regarde un saint de passage. « Ça tiendra ? » Jusqu'à la Saint-Jean. Qu'il fasse forger une vraie clavette après la foire. « Après la foire », répète-t-il, content. Tout le pays remet ses affaires après la foire." },
      { after: "j:ecluse_forcee", text: "Vous êtes douze à la perche et aux gaffes, les pieds sur le plat-bord, le dos contre la muraille. « Ho ! » crie Fiacre. Les portes d'amont gémissent, s'entrebâillent d'un pouce, et l'eau du bief d'en haut entre par la fente en une lame qui vous trempe jusqu'aux os. On tient. Le sas s'emplit, à la force des reins, en une heure au lieu d'un quart. Quand la *Diligente* sort enfin, tu as les mains ouvertes et le respect de douze mariniers." },
      { before: ["j:ecluse_reparee", "j:ecluse_forcee"], text: "Tu y laisses ta peine. Il faut à la fin dételer le cheval gris, l'atteler à une chaîne, et tirer la porte d'amont comme on arrache une souche. Elle cède vers dix heures. La *Diligente* sort du sas avec une heure de retard, et Fiacre annonce Méridane « pour midi, ou pour après »." },
      "En haut de la marche, le pays est autre. Les coteaux sont restés en arrière. C'est la plaine, plate comme une table de marbre, blonde, sans un arbre plus haut que les peupliers du canal ; et au bout de cette table, posée dessus, il y a une ville.",
    ],
    choices: [{ back: "K08j_coche" }] },

  K08j_plaine: { act: "III", title: "L'ombre de la Tour", place: "foire", ambiance: "champs",
    text: [
      "Méridane vient à toi pendant deux heures, au pas d'un cheval gris, et tu as tout le temps de la voir se faire.",
      "C'est d'abord une ligne claire, au ras des blés : les murs. Puis des pointes, par dizaines, qui sortent de la ligne : des clochers. Tu en comptes trente avant de renoncer. Puis une bosse, au milieu, plus sombre, qui porte des toits en étages et, tout en haut, des choses blanches à colonnes : le Mont-Cadran, la Ville-Haute, le Palais. Et, plantée au sommet de la bosse, à l'endroit exact où l'œil voudrait qu'elle fût, la Tour.",
      "À douze lieues, c'était une épingle. À deux, c'est une chose pour laquelle tu n'as pas de mot. Elle est carrée, pâle, sans un ornement jusqu'aux deux tiers, où elle porte un cadran sur chaque face, quatre cadrans, dont chacun doit avoir la largeur d'une grange. Au-dessus des cadrans, une lanterne ajourée, où l'on devine une masse sombre. C'est la cloche. On l'appelle la Patiente. Tu l'as vue toute ta vie sur une gravure clouée au mur d'un atelier ; la gravure l'avait faite trop petite, par politesse pour le papier.",
      "« Regardez l'ombre », dit quelqu'un. Tout le coche se tourne. L'ombre de la Tour est couchée sur la plaine, à main gauche, longue d'une demi-lieue, nette comme un trait d'encre. Elle bouge. On la voit bouger : elle a quitté une ferme, elle traverse un champ de lin, elle vient vers le canal. « Elle passe l'eau à onze heures, dit Fiacre. Juste au pont de Fer. Réglez vos montres. »",
      { before: "j:montre_donnee", text: "Tu tires la tienne. Elle est de Line, elle a soixante ans d'avance sur toutes celles de cette barque, et son aiguille arrive sur onze heures. L'ombre touche le pont. Ta montre dit onze. Tu la regardes, puis la Tour, avec un respect de confrère : en quatre cents ans, cette chose-là a gardé le pas du soleil, à un battement près." },
      { after: "j:montre_donnee", text: "Tu portes la main à ton gousset, par habitude. Il est vide. Ta montre est quelque part devant toi, dans cette ville, sur l'étal d'un marchand de bois, entre les mains des amateurs." },
      "L'ombre passe sur la *Diligente*. Il fait frais une seconde, comme sous une arche. Les fermières se signent. Puis le soleil revient, et la Tour est un peu plus haute.",
      { if: LINE, text: "Line n'a rien dit depuis l'écluse. Elle est debout à l'avant, sa boîte à ressorts serrée contre elle, et elle regarde la Tour sans cligner. Quand l'ombre lui passe dessus, elle frissonne de la tête aux sabots. « Elle est trop grande, dit-elle enfin, d'une petite voix. Il y a quelqu'un qui remonte ça ? Tous les jours ? » Tu réponds que oui. Elle hoche la tête. « Je veux le voir. »" },
    ],
    choices: [{ label: "Débarquer au bassin de la Foire", to: "K08j_bassin", big: true }] },
  K08j_bassin: { act: "III", title: "Dix mille charrettes", place: "foire", ambiance: "ville",
    text: [
      "Le canal finit dans un bassin, à une lieue des murs, et la foire du Grand Midi commence au bord de l'eau. Tu avais cru voir du monde à Arvoise. Arvoise était un village.",
      "C'est une ville de toile, plus grande que Roquebise, que les Trois-Noyers et que tout ce que tu as traversé mis ensemble, posée sur un pré, avec ses rues, ses places et ses quartiers. Des tentes rayées, des baraques de planches, des charrettes dételées dont on a fait des boutiques en relevant la bâche. Des mâts à banderoles. Des fumées de friture. Un bruit, là-dessus, continu, épais, fait de dix mille voix, de cent vielles, de marteaux, d'ânes, d'un orgue de Barbarie et d'un ours ; on y entre comme on entre dans un fleuve.",
      "La foire tient toute la plaine entre le bassin et la porte d'Occident. Derrière elle, il y a le mur, haut de six toises, doré par le soleil ; et derrière le mur, la ville qui monte, et la Tour. Ce pré a quatre jours à vivre. Il le sait moins que toi.",
      { with: "perrine", text: "Perrine respire à fond, les narines ouvertes, comme d'autres en arrivant à la mer. « Ça sent l'argent, dit-elle. Tu ne peux pas comprendre. » Elle ajuste sa hotte. « Je vais à mon coin, près des soleils peints. Trouve-moi avant la nuit. »" },
      { if: TIPH, text: "Tiphaine s'est arrêtée au bord de la planche. Elle regarde la foule, puis le mur, puis la rue qui monte derrière la porte. « La rue des Aiguilliers est dans la ville basse, sous le rempart. J'y vais maintenant, avant d'avoir trop réfléchi. » Elle te tend la main, à la manière des garçons, et la serre fort. « Si maître Gobin me prend, il y aura un tabouret pour vous. Venez me le demander. » Elle entre dans la cohue, son fichu rouge sur la tête, et tu la perds en dix pas." },
      { after: "j:coche_perche", text: "Fiacre te reprend sa perche et te met dans la main, en échange, une poignée de noix. « Tu pousses bien. Si l'horlogerie ne donne pas, le canal embauche. »" },
    ],
    choices: [
      { label: "La porte d'Occident, pour voir si l'on entre", to: "K08j_porte" },
      { label: "La grande allée de la Foire, jusqu'à la borne", to: "K08j_allee", big: true },
    ] },
  K08j_porte: { act: "III", title: "La porte d'Occident", place: "foire", ambiance: "ville",
    text: [
      "La porte d'Occident est une voûte entre deux tours rondes, assez large pour deux fardiers, au-dessus de laquelle on a peint un cadran qui marque l'heure à ceux qui arrivent. Dessous, il y a une file. Elle a deux cents pas. Elle avance d'une personne à la fois.",
      "Au guichet, un sergent de ville à hausse-col et deux commis à écritoire. « Billet de logement. » On montre un papier ; on passe. « Billet de logement. » On n'en a pas ; on discute ; on ne passe pas. « La ville est pleine, mes braves gens. Quarante mille dedans, et les murs ne s'écartent pas. Sans billet, c'est la Foire. Vous entrerez le matin du Grand Midi, avec tout le monde, à portes ouvertes, pour voir la Reine. »",
      "Le matin du Grand Midi, avec tout le monde. Tu regardes cette file de gens qui attendent leur tour d'entrer dans une ville dont tu sais ce qu'elle sera dans quatre jours, et qui se disputent pour y être.",
      { if: { item: "sauf_conduit" }, text: "Tu as, dans ta veste, quatre lignes de Monseigneur Fulbert et un anneau dans la cire. *Cela ouvre les portes d'en bas.*" },
    ],
    choices: [
      { label: "Montrer le sauf-conduit de l'évêque", hide: { any: [{ not: { item: "sauf_conduit" } }, { has: "j:billet_ville" }] }, fx: { flag: "j:billet_ville" }, to: "K08j_porte_fin" },
      { label: "Acheter un billet à l'homme qui en vend, sous le manteau, au coin de la tour", hide: { has: "j:billet_ville" }, if: { gold: { min: 3 } }, why: "Il en veut trois écus.", fx: { gold: -3, flag: "j:billet_ville" }, to: "K08j_porte_fin" },
      { label: "Laisser la porte : la borne est à la Foire, et il est bientôt midi", to: "K08j_allee", big: true },
    ] },
  K08j_porte_fin: { act: "III", title: "Un billet pour la ville basse", place: "foire", ambiance: "ville",
    text: [
      { if: { item: "sauf_conduit" }, text: "Le sergent lit l'anneau avant de lire les lignes. Il se redresse d'un pouce. « Maison de Monseigneur. » Il fait signe au commis, qui trempe sa plume et remplit un imprimé sans lever le nez. « Logé par ordre. Ville basse, paroisse Saint-Gnomon-le-Vieux. Vous vous arrangerez avec le bedeau. » Il te rend le papier de l'évêque avec le billet dessus. Les deux cents pas de file te regardent passer devant, et te haïssent avec ensemble." },
      { if: { not: { item: "sauf_conduit" } }, text: "L'homme du coin de la tour a des billets plein sa doublure. Ils sont vrais ; c'est le commis qui les lui passe, à moitié prix. Trois écus : le prix d'un lit pour un pèlerin. Il te le plie en quatre, te le glisse dans la manche et s'éloigne en sifflant. Il n'y a pas, dans tout le royaume, de porte si bien gardée qu'elle n'ait un coin." },
      "Tu as ton entrée. Tu ne t'en serviras pas avant demain : il est midi moins un quart, et la borne de la première lieue est derrière toi, au milieu de la Foire. Mais tu sais maintenant que cette porte s'ouvre, et qu'on peut aussi la prendre dans l'autre sens, tant qu'il est temps.",
    ],
    choices: [{ label: "Retourner à la Foire, jusqu'à la borne", to: "K08j_allee", big: true }] },
  K08j_allee: { act: "III", title: "Rendez-vous à la Première", place: "foire", ambiance: "ville",
    text: [
      "La grande allée de la Foire va du bassin à la porte, droite, large de dix toises, entre deux murailles de boutiques. On y marche à petits pas, porté. Des drapiers, des orfèvres, des marchands d'images, un homme qui avale des couleuvres, un autre qui vend l'heure : il a une montre, il la consulte pour un liard, et il fait fortune.",
      "Au milieu de l'allée, là où elle croise celle des horlogers, il y a un rond-point, et au centre du rond-point, sur trois marches, une borne. Elle est de marbre blanc, haute comme un homme. Son cadran est de bronze doré, et on l'astique. C'est la borne de la première lieue : la dernière avant les murs, la première en sortant. Tout le monde s'y donne rendez-vous. « À la Première ! » On l'entend crier par-dessus les têtes, d'un bout de la foire à l'autre, par des gens qui se sont perdus.",
      "Tu t'assois sur la plus haute marche, le dos au marbre, entre une nourrice et un marchand de sifflets. Personne ne regarde quelqu'un qui attend à la Première.",
      "Alors cela commence. Tu le sens d'abord sous toi, dans la pierre, avant de rien entendre : un tremblement sourd, très bas, comme si un chariot énorme passait sous la terre. La nourrice se tait. Le marchand de sifflets ôte son bonnet. D'un bout à l'autre de la grande allée, dix mille personnes s'arrêtent de marcher, toutes à la fois, et se tournent vers la ville.",
    ],
    choices: [{ label: "Écouter", to: "K08j_midi", big: true }] },
  K08j_midi: { act: "III", title: "La Patiente", place: "foire", ambiance: "ville",
    text: [
      "Le premier coup arrive.",
      "Une cloche tinte ; ceci tombe. C'est une note unique, grave, large, qui descend de la Tour sur la plaine comme une nappe qu'on déploie, et qui passe à travers toi sans s'arrêter. Tu la sens dans tes dents, dans tes genoux, dans le marbre de la borne. Girard te l'avait dit, en fauchant : il paraît qu'on la sent dans les pieds. On la sent dans les pieds.",
      "Deux. Trois. Elle prend son temps entre chaque coup ; elle a été fondue pour une ville qui n'était pas pressée. Autour de toi, les gens comptent, des lèvres, sans y penser, comme on respire. Ils l'ont entendue tous les jours de leur vie.",
      "Sept. Huit. Tu comptes aussi. Tu comptes comme tu n'as jamais compté rien.",
      "Dix.",
      "Onze.",
      "Il y a, après le onzième, le même silence qu'après les autres : le temps pour la note de s'éteindre, et pour le marteau de se relever. Tu ne respires plus. Tu viens d'un pays qui est né dans ce silence-là, et qui y est resté.",
      "Douze.",
      "Il tombe comme les autres, ni plus fort ni plus doux. La foire reprend. La nourrice reprend sa phrase. Le marchand remet son bonnet. Il était midi, il est midi passé, et dix mille personnes retournent à leurs affaires sans se douter qu'on vient de leur faire un cadeau. Tu restes assis{e} contre la borne, les mains ouvertes sur les genoux, avec dans la poitrine un coup de cloche que personne, chez toi, n'a jamais entendu.",
      "Tu ouvres le Cahier. Il faut que quelqu'un le sache.",
    ],
    choices: [{ label: "Écrire", to: "M08", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      rouet: { name: "Maître Rouet", f: false, aka: ["maître Rouet", "Rouet", "Hippolyte Rouet"], face: { age: "mur", skin: "clair", hair: "chatain", coif: "degarni", beard: "sans", eyes: "ronds", iris: "bleu", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "trois mentons, des bas de soie", habits: "un petit balancier d'émail sur le ventre", signe: "un panier de pâtés sur les genoux" }, qui: "Un des sept Horlogers-Jurés de Méridane.", desc: "Horloger-Juré, propriétaire de vignes à Saint-Gnomon et de trois maisons sur la place du Palais. Il vote avec le nombre." },
    },
  },
};
