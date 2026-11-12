// Act III · the last night in Valcendre (the brother, the companions), the gift of one soul brought back (ame:<id>),
// the road to the end of the white, Mordace's gleaners at the Porte des Cendres, and the return to the world.
// A year has passed up there. The child leads ("tu").
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function ame(id) { return { flag: ["ame:" + id, "ame:choisie"], ep: ["perso", 2000] }; }
module.exports = {
  III_a_nuit: P({ title: "La dernière nuit", place: "valcendre", hub: true,
    text: [
      { first: true, text: "On vous a donné une maison, au pied du palais. Il n'y fait ni jour ni nuit, mais la ville s'est tue, et les fenêtres des tours se sont éteintes une à une, alors c'est la nuit." },
      "Personne ne dort. Tu as une âme à choisir, et le monde à retrouver demain.",
    ],
    choices: [
      { label: "Monter sur le toit, où ton frère monte la garde", hide: { seen: "III_a_frere" }, to: "III_a_frere" },
      { label: "Parler à ceux qui sont là", hide: { any: [{ seen: "III_a_veille" }, { not: { any: [{ present: "ysolde" }, { present: "pie" }, { present: "hylas" }, { present: "corbe" }, { present: "lisandre" }] } }] }, to: "III_a_veille" },
      { label: "Donner une miette à Givre", hide: { any: [{ seen: "III_a_givre" }, { not: { present: "givre" } }] }, to: "III_a_givre" },
      { label: "La seule fenêtre allumée de la place", hide: { seen: "III_a_boulanger" }, to: "III_a_boulanger" },
      { label: "La bibliothèque du palais", hide: { seen: "III_a_bibliotheque" }, to: "III_a_bibliotheque" },
      { label: "Les remparts", hide: { seen: "III_a_remparts" }, to: "III_a_remparts" },
      { label: "Ysolde, seule à la fenêtre", hide: { any: [{ seen: "III_N_ysolde" }, { not: { present: "ysolde" } }, { not: { seen: "III_a_veille" } }] }, to: "III_N_ysolde" },
      { label: "Pie, caché dans l'escalier", hide: { any: [{ seen: "III_N_pie" }, { not: { present: "pie" } }, { not: { seen: "III_a_veille" } }] }, to: "III_N_pie" },
      { label: "Hylas, assis dans le noir", hide: { any: [{ seen: "III_N_hylas" }, { not: { present: "hylas" } }, { not: { seen: "III_a_veille" } }] }, to: "III_N_hylas" },
      { label: "Corbe, pieds nus sur le seuil", hide: { any: [{ seen: "III_N_corbe" }, { not: { present: "corbe" } }, { not: { seen: "III_a_veille" } }] }, to: "III_N_corbe" },
      { label: "Lisandre, qui ne fredonne plus", hide: { any: [{ seen: "III_N_lisandre" }, { not: { present: "lisandre" } }, { not: { seen: "III_a_veille" } }] }, to: "III_N_lisandre" },
      { label: "Choisir l'âme que tu emmèneras", to: "III_a_choix", big: true },
    ] }),

  III_a_frere: P({ title: "Le frère", place: "valcendre",
    text: [
      "Il est assis sur le faîte, le masque à côté de lui, les jambes dans le vide. Tu t'assieds. Il ne te regarde pas.",
      "« Je t'en voulais, dit-il au bout d'un moment. Avant de te connaître. Tu avais le soleil, et moi j'avais ça. » Il montre le blanc, d'un geste. « Puis je suis monté, à travers la fente, et j'ai compris : là-haut, on m'oublie entre deux portes. On me sert à boire, je me retourne, on me demande qui je suis. Toi, ils t'ont gardé vingt ans. Ils t'ont appris des chansons. »",
      { if: { has: "sansnom:page" }, text: "« Ildaën, répète-t-il, comme pour s'assurer que le mot tient. Quelqu'un l'a écrit, là-haut, sur une page. Tant que la page existe, ils se souviennent un peu plus longtemps. Une heure, au lieu d'une minute. C'est beaucoup. »" },
      "Il remet le masque sur ses genoux. « Notre père t'a parlé de la couronne. Ne la prends pas pour lui. S'il faut que quelqu'un la porte, prends-la pour toi, ou pas du tout. »",
    ],
    choices: [
      { label: "« Et toi ? Qu'est-ce que tu veux ? »", to: "III_a_frere2" },
      { label: "Rester assis à côté de lui sans rien dire", fx: { conf: { sansnom: 10 } }, to: "III_a_nuit" },
    ] }),

  III_a_frere2: P({ title: "Ce qu'il veut", place: "valcendre",
    text: [
      "Il réfléchit longtemps. On voit qu'on ne lui a jamais posé la question.",
      "« Qu'une femme, quelque part, se retourne dans la rue et dise : tiens, c'est lui. Pas parce qu'il est écrit. Parce qu'elle s'en souvient. »",
      { if: { has: "sansnom:ancre_lisandre" }, text: "Il ne dit pas laquelle. Il n'a pas besoin." },
    ],
    choices: [{ label: "Redescendre", fx: { conf: { sansnom: 10 }, flag: "sansnom:veut" }, to: "III_a_nuit" }] }),

  III_a_veille: P({ title: "La veille", place: "valcendre",
    text: [
      { with: "ysolde", text: "Ysolde aiguise son épée, alors qu'elle n'en a pas besoin. « Là-haut, dit-elle, je vais retrouver la reine. Et je vais lui demander ce qu'elle a vendu. Et quand elle me répondra, je saurai de quel côté je suis. » Elle passe la pierre une dernière fois. « Pour l'instant, je suis du tien. »" },
      { with: "pie", text: "Pie fait tourner une pomme de Valcendre entre ses doigts. Il ne la mange pas. « Je vais la garder, dit-il. Pour la montrer à Linette. Elle dira que c'est une pomme. Elle aura raison. »" },
      { with: "hylas", text: "Hylas regarde ses mains, encore. « Là-haut, je ne verrai plus, dit-il. Je le sais. Alors je regarde. » Il te regarde, toi, longtemps, sans honte. « Tu as grandi. »" },
      { with: "corbe", text: "Corbe a posé son tambour sur ses genoux et ne le frappe pas. « Les morts d'ici ne veulent pas qu'on les venge, dit-elle. Ils veulent rentrer. Ce n'est pas la même chose. Le clan ne comprendra pas. »" },
      { with: "lisandre", text: "Lisandre fredonne la musique des chœurs, sans le vouloir. Elle s'en aperçoit, et elle s'arrête, et elle reprend. « Je ne pourrai plus jamais chanter comme avant, dit-elle. Je ne sais pas si c'est une perte. »" },
    ],
    choices: [{ label: "Rester avec eux jusqu'à ce que tout le monde se taise", fx: { conf: { ysolde: 5, pie: 5, hylas: 5, corbe: 5, lisandre: 5 } }, to: "III_a_nuit" }] }),

  III_a_givre: P({ title: "Une miette", place: "valcendre",
    text: [
      { after: "iii:pomme", text: "Givre est roulé en boule près de la porte. Tu lui tends une miette : le goût de la pomme du marché, juste le goût, pas la pomme. Il la mange en fermant les yeux." },
      { before: "iii:pomme", text: "Givre est roulé en boule près de la porte. Tu lui tends une miette : l'odeur du pain qu'on vous a porté ce soir, juste l'odeur, pas le pain. Il la mange en fermant les yeux." },
      "Il a grandi depuis la plaine. Il a la taille d'un vrai renard, maintenant, et le bout de sa queue est devenu gris. Tu te demandes ce qu'il deviendra là-haut, avec tout ce qu'on y oublie.",
    ],
    choices: [{ label: "Le laisser dormir", fx: { conf: { givre: 10 } }, to: "III_a_nuit" }] }),

  III_a_choix: P({ title: "Une âme", place: "valcendre",
    text: [
      "Au matin, Ardaël t'attend au pied du palais. Il ne demande rien. Il attend que tu dises un nom.",
      "« Une seule, rappelle-t-il. Elle passera la porte avec toi et elle rentrera pour de bon : là-haut, on se souviendra d'elle, comme si elle n'était jamais partie. Les autres attendront. »",
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "Ceux du moulin sont dans la plaine, avec les marcheurs. Tu le sais depuis hier soir : un enfant est venu te dire qu'un meunier et sa femme demandaient après toi, au bord de la ville, et qu'ils ne voulaient pas entrer." },
    ],
    choices: [
      { label: "Maëra, ta mère", if: { has: "maera:sait" }, why: "Tu ne lui as pas dit qui tu étais.", fx: ame("maera"), to: "III_a_maera" },
      { label: "Agathe, Joris et Pim. Ceux du moulin", hide: { has: "nord:rendu=sauvelune" }, fx: ame("moulin"), to: "III_a_moulin" },
      { label: "Les trois cents de Lisse, pour qu'ils témoignent", if: { has: "lisse:temoins_veulent" }, why: "Ils ne t'ont rien demandé.", fx: ame("lisse"), to: "III_a_lisse" },
      { label: "La petite fille de Bourdonne, Linette d'avant", if: { has: "linette_avant:vue" }, why: "Tu ne l'as pas rencontrée.", fx: ame("linette"), to: "III_a_linette" },
      { label: "Askel, qui tient la porte en chantant", if: { has: "askel:rite" }, why: "Personne ne tient la porte pour toi.", fx: ame("askel"), to: "III_a_askel" },
      { label: "Ton frère. Qu'on se souvienne de lui, là-haut", fx: ame("sansnom"), to: "III_a_sansnom" },
      { label: "Personne. Garder le présent pour plus tard", fx: { flag: ["ame:gardee"], ep: ["perso", 1000] }, to: "III_a_personne" },
    ] }),

  III_a_maera: P({ title: "Maëra", place: "valcendre",
    text: [
      "Ardaël ferme les yeux. Ce n'est pas de la colère. Tu ne sais pas ce que c'est.",
      "« Elle ne voudra pas, dit-il. Elle va dire qu'elle a fait son choix il y a vingt ans. » Il rouvre les yeux. « Elle viendra quand même. Tu lui ressembles trop. »",
      "Elle arrive à midi, par la route d'Ellerune, son fuseau à la ceinture. Elle ne te dit pas bonjour. Elle te pousse une mèche derrière l'oreille. Puis elle regarde Ardaël, et ils ne se disent rien, et c'est un adieu de trois cents ans qui dure le temps d'un regard.",
    ],
    choices: [{ label: "Partir", to: "III_a_route" }] }),

  III_a_moulin: P({ title: "Ceux du moulin", place: "valcendre",
    text: [
      "Tu les trouves au bord de la ville, assis sur une borne, comme des gens qui attendent la diligence. Joris a son chapeau sur les genoux. Agathe a les joues rouges, sans four.",
      { if: { souv: "enfant:agathe" }, text: "Elle te voit. Elle se lève. Elle te pousse une mèche derrière l'oreille." },
      { if: { not: { souv: "enfant:agathe" } }, text: "Une femme se lève, large, rieuse. Tu ne reconnais pas son visage. Tu l'as donné, il y a longtemps, pour autre chose. Elle te pousse une mèche derrière l'oreille, et ça, tu le reconnais." },
      "Pim court vers toi et te rentre dans les jambes. « On rentre ? » demande-t-il. « On rentre », dit Joris, et c'est la plus longue phrase qu'il ait dite de sa vie.",
      { if: { has: "maera:sait" }, text: "Tu penses à Maëra, dans sa forêt, avec son fuseau. Tu as choisi. Tu penses qu'elle comprendrait. Tu n'en es pas sûr." },
    ],
    choices: [{ label: "Partir", to: "III_a_route" }] }),

  III_a_lisse: P({ title: "Les trois cents", place: "valcendre",
    text: [
      "« Trois cents, dit Ardaël. Ce n'est pas une âme. » Puis il réfléchit. « Si. S'ils ne disent qu'une chose, tous ensemble, c'est une âme. »",
      "Ils arrivent de Bourdonne par la plaine, en colonne, les hommes du pont de Lisse, des Corvannais pour moitié, des Esquarrois pour l'autre, ceux qui sont morts sur le pont et ceux qui sont morts dessous. Ils marchent au pas, par vieille habitude.",
      { with: "ysolde", text: "Ysolde les regarde passer. Ils la saluent, un par un, la main ouverte sur le cœur, à la manière orsane qu'ils ont apprise ici. Elle rend chaque salut. Il y en a trois cents." },
    ],
    choices: [{ label: "Partir", fx: { conf: { ysolde: 15 } }, to: "III_a_route" }] }),

  III_a_linette: P({ title: "Linette d'avant", place: "valcendre",
    text: [
      "Elle arrive en courant, un bonnet de laine de travers, les genoux sales. Neuf ans. Un épi derrière la tête.",
      "« C'est vrai qu'on va voir mon frère ? » demande-t-elle. Tu dis oui. Elle demande s'il est grand. Tu dis oui. Elle demande s'il vole toujours. Tu dis oui, et elle rit, d'un rire qui fait se retourner les gens.",
      "« Là-haut, dit Ardaël, il y a déjà une petite fille qui porte ce nom et qui n'a pas ses souvenirs. Quand celle-ci passera la porte, elles ne seront plus qu'une. Je ne sais pas laquelle des deux se réveillera. »",
      { with: "pie", text: "Pie a tout entendu. Il s'est accroupi devant la petite fille, et il ne dit rien, et elle lui touche la joue du bout du doigt comme on touche un objet qu'on avait perdu." },
    ],
    choices: [{ label: "Partir", fx: { conf: { pie: 20 } }, to: "III_a_route" }] }),

  III_a_askel: P({ title: "Askel", place: "valcendre",
    text: [
      "« Celle qui chante à la porte, dit Ardaël. Si elle part, la porte aura une voix de moins pour la tenir. » Il hausse les épaules, lentement. « Elle n'a pas été faite pour ça. Elle l'a pris à la place de sa fille. Va la chercher. On verra ce que tient la porte. »",
      { with: "corbe", text: "Corbe ne dit rien. Elle a mis son manteau, et elle se tient près de toi, et ses mains tremblent sur la courroie du tambour." },
    ],
    choices: [{ label: "Partir", fx: { conf: { corbe: 20 } }, to: "III_a_route" }] }),

  III_a_sansnom: P({ title: "Ton frère", place: "valcendre",
    text: [
      "Ardaël te regarde longtemps. « Tu me prends mes deux fils le même jour », dit-il. Il n'y a pas de reproche. Il y a quelque chose comme de la fierté, très bien cachée.",
      "Le Sans-Nom a entendu. Il ne dit rien. Il remet son masque. Puis il l'enlève, et il le pose sur les marches du palais, et il ne le reprend pas.",
    ],
    choices: [{ label: "Partir", fx: { conf: { sansnom: 25 }, flag: "sansnom:sans_masque" }, to: "III_a_route" }] }),

  III_a_personne: P({ title: "Personne", place: "valcendre",
    text: [
      "« Personne », dis-tu. « Pas encore. »",
      "Ardaël hoche la tête, comme quelqu'un qui reconnaît un coup qu'il aurait joué lui-même. « Garde-le, dit-il. Il ne s'use pas. Le jour où tu en auras besoin, dis mon nom, le vrai, devant la porte, et elle s'entrouvrira pour une âme. Une. »",
    ],
    choices: [{ label: "Partir", to: "III_a_route" }] }),

  III_a_route: P({ title: "Le bout du blanc", place: "valcendre",
    text: [
      "Ardaël marche avec vous jusqu'aux portes de la ville, pas plus loin. Il ne sort jamais de Valcendre. « Au bout du blanc, dit-il, il y a la porte. Tu la reconnaîtras. On ne peut pas la manquer. » Il pose la main sur ta tête, une dernière fois. « Aëlan. N'oublie pas que tu as un nom ici. »",
      "Vous marchez longtemps. La plaine se resserre. Le blanc devient gris, puis gris sombre. Les marcheurs sont de plus en plus nombreux, serrés, épaule contre épaule, et tous vont dans la même direction que vous.",
      "Puis vous la voyez. Une porte de pierre noire, haute comme une falaise, au milieu de rien, sans mur de part et d'autre. Une fente la traverse de haut en bas, large comme une main, et par la fente coule une lumière jaune, une lumière de soleil. Les marcheurs se pressent contre elle comme des papillons contre une vitre.",
      "Et au pied de la porte, des formes blanches, qui ne marchent pas avec les autres. Elles ont une marque au front. Elles se penchent sur les marcheurs, une à une, et elles mangent.",
    ],
    choices: [{ label: "Approcher", to: "III_a_glaneurs" }] }),

  III_a_glaneurs: P({ title: "Les Glaneurs à la porte", place: "valcendre",
    text: [
      "Des Glaneurs. Une dizaine, au sceau de cire noire, une plume et une clé croisées. Ils ne sont pas venus d'en haut par hasard. Ils trient. Ils prennent les noms des marcheurs qui arrivent à la fente, et ceux qui ont perdu leur nom s'arrêtent, s'asseyent, et ne bougent plus. Il y en a des centaines, assis au pied de la porte, qui regardent la lumière sans la voir.",
      "Mordace ne veut pas qu'ils rentrent. Il veut qu'ils restent ici, sans nom, une digue de gens assis. Et il veut être prévenu de qui passe.",
      "Le plus grand des Glaneurs se redresse. Il t'a vu. Il tourne la tête vers la fente, comme pour appeler.",
    ],
    choices: [
      { label: "Le frapper avant qu'il appelle", to: "III_a_combat", big: true },
      { label: "Passer sans être vu, au milieu des marcheurs", test: { dom: "discretion", label: "Dans la foule", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "givre" }, v: 15 }] },
        win: { fx: { flag: "porte:inapercu", ep: ["perso", 1500] }, to: "III_a_porte" },
        lose: { to: "III_a_combat" } },
    ] }),

  III_a_combat: P({ title: "Au pied de la porte",
    combat: { title: "Les Glaneurs au sceau noir", enemies: ["glaneur", "glaneur_petit", "glaneur_petit"], terrain: "nature", range: "contact",
      win: { fx: { flag: "porte:glaneurs_tues", ep: ["seance", 2500] }, to: "III_a_porte_libres" },
      lose: { fx: { pv: -5, flag: "porte:mordace_prevenu" }, to: "III_a_porte" } },
    text: ["Ils se retournent tous en même temps, comme des chiens au même sifflet. Les marcheurs s'écartent. Le Sans-Nom tire son épée, et dans le gris, elle brille."],
    choices: [] }),

  III_a_porte_libres: P({ title: "Ceux qui étaient assis", place: "valcendre",
    text: [
      "Les Glaneurs tombent en neige. Dans la neige, il y a des noms, des centaines, qui brillent un instant comme des braises, puis s'éteignent. Ils retournent à ceux qui les ont perdus. Un homme assis se relève, puis une femme, puis tous.",
      "Ils se remettent à marcher. Ils te passent devant sans te regarder, et ça te va.",
    ],
    choices: [{ label: "Aller jusqu'à la porte", to: "III_a_porte" }] }),

  III_a_porte: P({ title: "La Porte des Cendres", place: "valcendre",
    text: [
      "De près, la porte est couverte de noms. Gravés, des milliers, dans la langue d'Anselin, du haut jusqu'en bas. Et au milieu, devant la fente, une femme en robe blanche est assise sur une pierre, les yeux fermés, et elle chante. Une liste, toujours la même mélodie, des noms. Sa voix tient la fente, qui ne s'ouvre pas plus large qu'une main.",
      { if: { has: "askel:rite" }, text: "C'est Askel. Elle a maigri. Elle a la voix de Corbe, plus grave." },
      { if: { not: { has: "askel:rite" } }, text: "Tu ne la connais pas. Elle a l'âge de toutes les vieilles femmes du monde. Elle chante depuis trois cents ans." },
      { if: { has: "porte:mordace_prevenu" }, text: "Un Glaneur blessé a réussi à se glisser par la fente avant vous. Là-haut, quelqu'un sait déjà que tu reviens." },
      { if: { all: [{ has: "ame:askel" }, { present: "corbe" }] }, text: "Corbe s'agenouille devant sa mère. Elle ne la touche pas. Elle se met à chanter avec elle, la même liste, la même mélodie, et Askel ouvre les yeux, et ne s'arrête pas. Elles chantent ensemble jusqu'au bout de la liste. Puis Askel se lève, et la fente tremble, et tient quand même. Un peu moins." },
      { if: { all: [{ has: "ame:askel" }, { not: { present: "corbe" } }] }, text: "Tu dis à Askel que sa fille l'attend. Elle ne s'arrête pas de chanter. Elle termine sa liste, jusqu'au dernier nom. Puis elle se lève. La fente tremble, et tient quand même. Un peu moins." },
      { if: { all: [{ has: "askel:rite" }, { not: { has: "ame:askel" } }, { present: "corbe" }] }, text: "Corbe s'arrête à trois pas de sa mère. Askel ouvre les yeux, la voit, et ne s'arrête pas de chanter. Elle lève seulement la main, un instant, et Corbe lève la sienne. C'est tout. C'est assez, ou ça ne l'est pas, et ni l'une ni l'autre ne le dira jamais." },
      "La chanteuse s'écarte. La fente s'élargit, assez pour une personne à la fois. De l'autre côté, la lumière jaune, et une odeur que tu avais oubliée : l'herbe coupée.",
    ],
    choices: [{ label: "Passer", to: "III_a_passage", big: true }] }),

  III_a_passage: P({ title: "La fente", place: "valcendre",
    fx: { flag: "acte3:fin", ep: ["histoire", 5000] },
    text: [
      "Tu passes le premier. La pierre est tiède. Pendant un instant, tu es entre les deux : d'un côté le blanc, de l'autre le soleil, et tu entends en même temps la musique des chœurs de Valcendre et le vent dans un pré.",
      "Puis il n'y a plus que le vent.",
    ],
    choices: [{ label: "Ouvrir les yeux", to: "Z3_fin" }] }),

  Z3_fin: P({ title: "Fin de l'Acte III", place: null,
    text: [
      "Tu es couché dans l'herbe, au col de l'Ourse, à côté de la grande pierre plate. Il fait chaud. Les abeilles travaillent dans les gentianes. Il n'y a pas de neige. Pas un flocon.",
      "Les autres se relèvent autour de toi, un à un, et regardent le ciel bleu comme une chose qu'on n'a jamais vue.",
      { if: { has: "ame:maera" }, text: "Maëra est debout, le visage levé vers le soleil, les yeux fermés. Elle n'en a pas vu depuis trois cents ans." },
      { if: { has: "ame:moulin" }, text: "Pim est déjà en train de courir dans les gentianes. Agathe crie son nom, et il s'arrête, parce qu'on l'a appelé." },
      { if: { has: "ame:lisse" }, text: "Derrière vous, dans l'herbe, trois cents hommes se relèvent sans bruit, et se mettent en rang, par vieille habitude." },
      { if: { has: "ame:linette" }, text: "La petite fille au bonnet de travers regarde ses mains. Elle a l'air d'essayer de se rappeler une chose qu'on lui a dite en rêve." },
      { if: { has: "ame:askel" }, text: "Askel s'est assise dans l'herbe et elle pose les mains à plat sur le sol, comme fait Corbe, pour écouter. « Il fait chaud », dit-elle, étonnée." },
      { if: { has: "ame:sansnom" }, text: "Ton frère se retourne vers toi, sans masque, et tu le reconnais. Et tu sais qu'en bas, dans la vallée, on le reconnaîtra aussi." },
      "Un berger descend la pente, avec son troupeau. Il vous voit, il s'arrête, il ôte son chapeau. Tu lui demandes la date.",
      "Il te la dit. Tu as passé trois jours dans le blanc, tout au plus.",
      "Ici, dans le monde, il s'est écoulé un an.",
      "Ici s'achève l'Acte III.",
    ],
    choices: [{ label: "Acte IV · Le pont de Lisse", to: "IV_col", big: true }] }),
};
