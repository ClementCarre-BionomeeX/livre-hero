// L'Île Folle-Aiguille · act IV, more days on the island. The cook on the beach: a feast to keep the men (fargue:festin,
// with or without laudanum in the rum: fargue:laudanum), the grave of the dead man nobody wanted (fargue:enterre), Gabet
// who wants to cross over (gabet:deserte or gabet:retenu). The doctor in the chapel: the crypt of the colonists
// (chapelle:crypte, chapelle:soulier), water from the spur under fire (chapelle:source_nuit). The child at the hut: the
// grey parrots that speak with the voices of the colony (ile:perroquets).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the cook: the feast
    XY_festin: { act: "IV", title: "Le festin", place: "plage", ambiance: "nature",
      text: [
        "Le troisième jour, les hommes ont fini le rhum et commencent à finir la patience. Fargue le voit à des riens : une dispute pour un tour de garde, une écuelle jetée, Coquerel qui ne rit plus, Boucaut qui pleure en dormant. Une troupe qui s'ennuie se cherche un ennemi, et quand elle n'en trouve pas dehors, elle le trouve dedans.",
        "Alors il fait ce qu'il sait faire. Il cuisine.",
        "Il envoie Lagadec et deux autres tirer un cochon sauvage dans la lisière. Il fait déterrer par Gabet des racines qu'il a reconnues, douces, farineuses, qu'on cuit sous la cendre. Il fait pêcher des langoustes dans les rochers, à la main, la nuit, à la torche. Il creuse un four dans le sable, à la mode des îles, le tapisse de pierres chauffées à blanc, y couche le cochon entier enveloppé de feuilles de bananier, recouvre de sable, et attend six heures, assis à côté, en fumant, comme une poule sur son œuf.",
        "À la nuit, il ouvre le four. L'odeur se répand sur la plage. Les hommes sortent de leurs abris comme des bêtes de leur terrier, les narines ouvertes, l'œil fixe. Même Malandain se lève.",
        "Il reste, au fond d'un tonneau, deux pintes de rhum de Boucaut, celui qu'on avait marqué vinaigre. Fargue a dans sa poche une fiole de laudanum, confisquée la veille.",
      ],
      choices: [
        { label: "Verser la fiole dans le rhum", fx: { flag: ["fargue:festin", "fargue:laudanum"] }, to: "XY_festin_laudanum" },
        { label: "Servir le rhum tel quel, et la viande en abondance", fx: { flag: "fargue:festin", penche: { coquerel: -1, boucaut: -1 } }, to: "XY_festin_franc" },
      ] },
    XY_festin_laudanum: { act: "IV", title: "Le festin", place: "plage", ambiance: "nuit",
      text: [
        "Il verse la fiole dans le tonneau, d'un geste de cuisinier qui sale une soupe, et remue avec une louche.",
        "Le festin est magnifique. Les hommes mangent comme des ogres, la graisse aux coudes, en chantant. Ils boivent le rhum, chacun une gorgée, parce qu'il n'y en a pas plus, et une gorgée suffit. À minuit, la plage est couverte d'hommes endormis, couchés n'importe comment autour du feu, la bouche ouverte, ronflant d'un sommeil de plomb, si profond qu'un crabe se promène sur la poitrine de Malandain sans le réveiller.",
        "Fargue reste éveillé, seul, au milieu d'eux, à les regarder dormir. Il pourrait faire n'importe quoi, cette nuit. Monter à la chapelle. Prendre le canot. Égorger Malandain. Il n'en fait rien. Il les regarde, comme une mère regarde des enfants turbulents enfin couchés, avec une tendresse qui le surprend et le dégoûte.",
        "Au matin, ils se réveillent la bouche pâteuse, la tête lourde, et de bonne humeur. Ils disent que c'était le meilleur cochon de leur vie. Ils disent que le rhum de Boucaut, finalement, n'était pas si mauvais. Personne ne se demande pourquoi tout le monde a si bien dormi. Un homme repu ne pose pas de questions.",
      ],
      choices: [{ label: "Laver la marmite", back: "A4f_jours" }] },
    XY_festin_franc: { act: "IV", title: "Le festin", place: "plage", ambiance: "nuit",
      text: [
        "Il garde la fiole dans sa poche, et sert le rhum tel quel, une gorgée chacun, comme une communion.",
        "Le festin est magnifique. Les hommes mangent comme des ogres, la graisse aux coudes. Puis ils chantent. Puis ils se racontent la Maraude, ceux qui en étaient, à ceux qui n'en étaient pas, et l'histoire grossit à chaque bouche, et les lingots deviennent des montagnes, et Dagrel, que personne ici ne nomme sans baisser la voix, devient un ogre de conte, mort depuis vingt ans et plus redoutable que jamais.",
        "Vers minuit, Coquerel et Boucaut se battent pour le dernier os, et Fargue les sépare avec la louche, et on rit. C'est bon signe : une troupe qui se bat pour un os oublie de se battre pour le pouvoir.",
        "Au matin, ils se réveillent fatigués, la bouche grasse, contents. Ils regardent Fargue autrement, avec cette gratitude bête des ventres pleins. Il sait que ça durera trois jours. C'est trois jours de plus qu'hier.",
      ],
      choices: [{ label: "Laver la marmite", back: "A4f_jours" }] },

    // ---------------------------------------------------------------- the cook: the grave
    XY_tombe: { act: "IV", title: "La tombe", place: "plage", ambiance: "nature",
      text: [
        "Le mort est resté trois jours sous sa voile, au bout de la plage. Personne n'y a touché. Les crabes, si. L'odeur commence à venir avec la brise de terre, le soir, et les hommes déplacent leurs abris, comme on change de place à table pour ne pas voir quelqu'un.",
        "Fargue prend une pelle, un matin, et va creuser.",
        "Le sable est facile, en surface, et dur dessous, mêlé de racines et de coraux morts. Il creuse lentement, comme on creuse à cinquante ans, en s'arrêtant pour souffler. Il ne regarde pas la voile. Il sait ce qu'il y a dessous. Il a dit : un seul, pour que les autres comprennent. Celui-ci est le seul. Il est à lui.",
        "Au bout d'une heure, une ombre tombe sur le trou. Gabet est là, avec une deuxième pelle, sans rien dire. Il descend dans le trou et creuse à côté de lui.",
        "Ils creusent ensemble jusqu'à midi. Puis ils soulèvent le mort, à deux, dans sa voile, et le descendent. Gabet demande s'il faut dire quelque chose. Fargue réfléchit.",
      ],
      choices: [
        { label: "Dire son nom, seulement", fx: { flag: "fargue:enterre", penche: { gabet: 1 } }, to: "XY_tombe_nom" },
        { label: "Reboucher le trou sans rien dire", fx: { flag: "fargue:enterre" }, to: "XY_tombe_rien" },
      ] },
    XY_tombe_nom: { act: "IV", title: "La tombe", place: "plage", ambiance: "nature",
      text: [
        "Fargue enlève son bonnet. Il dit le nom du mort, son prénom et son nom, à voix haute, une fois, au-dessus du trou, et ajoute le nom de son village, qu'il connaît parce qu'il connaît le village de chacun de ses hommes, et que celui-ci, jusqu'à Lannoz, en était un.",
        "C'est tout. Il remet son bonnet. Ils rebouchent.",
        "Quand ils ont fini, Gabet plante sur la tombe un aviron cassé, en guise de croix. Puis il regarde Fargue, d'un regard que Fargue ne lui connaissait pas, un regard qui cherche quelque chose sur son visage et le trouve peut-être.",
        "« Vous auriez pu faire autrement, dit Gabet. Pas lui. Avant. »",
        "Fargue ne répond pas. Il rentre au camp, avec la pelle sur l'épaule. Gabet a raison. Il le sait depuis Lannoz. Ce qu'il ne savait pas, c'est que Gabet le savait aussi.",
      ],
      choices: [{ label: "Rentrer au camp", back: "A4f_jours" }] },
    XY_tombe_rien: { act: "IV", title: "La tombe", place: "plage", ambiance: "nature",
      text: [
        "« Rien, dit Fargue. On rebouche. »",
        "Ils rebouchent. Le sable tombe sur la voile, la recouvre, la fait disparaître. Gabet tasse avec le dos de sa pelle. Fargue regarde la mer.",
        "Il pourrait dire le nom. Il le connaît. Il connaît le nom de chacun de ses hommes, et leur village, et le prénom de leur mère quand ils l'ont dit en buvant. Mais s'il dit ce nom-là, à voix haute, au-dessus de ce trou, il faudra qu'il l'entende, et il a encore besoin de toute sa tête pour les jours qui viennent.",
        "Quand ils ont fini, il n'y a plus qu'un rectangle de sable plus sombre que le reste, que la marée effacera en une semaine. Gabet le regarde. Puis il regarde Fargue. Puis il rentre au camp, devant lui, sans se retourner, et Fargue voit, à la manière dont il tient sa pelle, qu'il vient de perdre quelque chose dans l'estime de cet homme, et qu'il ne le retrouvera pas.",
      ],
      choices: [{ label: "Rentrer au camp", back: "A4f_jours" }] },

    // ---------------------------------------------------------------- the cook: Gabet
    XY_gabet: { act: "IV", title: "Gabet", place: "plage", ambiance: "nuit",
      text: [
        "Gabet vient le trouver une nuit, au bout de la plage, là où Fargue fume seul en regardant la Cormorane. Il s'assied à côté de lui, sur le sable. Il met longtemps à parler.",
        "« Je veux monter à la chapelle, dit-il enfin. Pas pour trahir. Pour partir. Je ne veux pas creuser. Je ne veux pas tuer. J'ai signé pour l'argent, à Morlenc, parce que j'avais des dettes et une fille. Je ne savais pas. » Il regarde le sable entre ses pieds. « Je ne savais pas que ça ressemblerait à ça. »",
        "Fargue fume. Il pense à ce que dirait Malandain, s'il apprenait qu'un homme a passé à l'ennemi. Il pense à ce que diraient les autres, qui ont des dettes aussi, et des filles. Il pense à la chapelle, où l'on comptera un fusil de plus. Il pense à Gabet, qui a creusé une tombe avec lui sans qu'on le lui demande.",
        "« Si je dis non, demande-t-il, tu restes ?",
        "— Je reste, dit Gabet. Mais je ne creuse pas. »",
      ],
      choices: [
        { label: "« Va. Par les rochers, avant la lune. Je dirai que tu t'es noyé. »", fx: { flag: "gabet:deserte", penche: { gabet: 3 } }, to: "XY_gabet_va" },
        { label: "« Reste. Je ne te ferai pas creuser. »", fx: { flag: "gabet:retenu", penche: { gabet: 1 } }, to: "XY_gabet_reste" },
      ] },
    XY_gabet_va: { act: "IV", title: "Gabet", place: "plage", ambiance: "nuit",
      text: [
        "Gabet le regarde, sans comprendre. Puis il comprend. Il se lève, lentement, comme un homme qui a peur qu'on change d'avis s'il bouge trop vite.",
        "« Merci, dit-il.",
        "— Ne me remercie pas. Si Malandain te trouve sur les rochers, je dirai que je ne t'ai jamais vu. Et je le dirai bien. »",
        "Gabet part. Fargue le regarde s'éloigner le long de la plage, une ombre parmi les ombres, jusqu'aux rochers noirs de la pointe, puis plus rien.",
        "Le lendemain, il annonce aux hommes que Gabet s'est noyé en pêchant la langouste, la nuit, dans les rochers. On cherche le corps, mollement. On ne le trouve pas. Malandain regarde Fargue un long moment, et ne dit rien. Ce silence-là pèse plus lourd qu'une menace. Il range ce silence quelque part, avec les autres.",
      ],
      choices: [{ label: "Reprendre la marmite", back: "A4f_jours" }] },
    XY_gabet_reste: { act: "IV", title: "Gabet", place: "plage", ambiance: "nuit",
      text: [
        "Gabet le regarde longtemps. Puis il hoche la tête.",
        "« Je ne te ferai pas creuser, répète Fargue. Tu tiendras le camp. Tu feras la cuisine avec moi. Tu garderas le canot. Il faut des gens qui ne creusent pas, aussi. »",
        "Gabet se lève et retourne au camp. Il reste. Il tient parole. Il ne creusera pas. Il épluchera des racines, il gardera le canot, il veillera les feux.",
        "Fargue le regarde, les jours suivants, à côté de lui, au-dessus de la marmite, avec ses gestes lents de paysan, et il se dit qu'il vient de garder un homme comme on garde une lettre qu'on aurait dû envoyer. Il ne sait pas encore si c'est par affection ou par prudence. Il sait que la différence, à la fin, comptera.",
      ],
      choices: [{ label: "Reprendre la marmite", back: "A4f_jours" }] },

    // ---------------------------------------------------------------- the doctor: the crypt
    XY_crypte: { act: "IV", title: "La crypte", place: "misericorde", ambiance: "souterrain",
      text: [
        "Sous le chœur de la chapelle, une dalle sonne creux. Victorine l'entend en passant, le troisième jour, et revient, et frappe du talon. Creux. Benoît Quémeneur et le charpentier Fréville la soulèvent avec deux barres de fer. Dessous, un escalier de pierre descend dans le noir, et monte une odeur sèche, poussiéreuse, ancienne, qui n'est plus tout à fait une odeur de mort.",
        "Victorine descend la première, une lanterne à la main.",
        "La crypte est basse, voûtée, taillée dans le roc de l'éperon. On y tient courbé. Et partout, sur le sol, contre les murs, dans les recoins, il y a des os, à même la pierre, sans tombe. Des squelettes entiers, couchés comme ils sont tombés, recroquevillés, serrés les uns contre les autres, avec encore, sur certains, des lambeaux d'étoffe, des boutons, des boucles de souliers. Une quarantaine. Elle compte. Quarante-trois.",
        "Elle le voit à la lanterne, en se penchant, avec ses yeux de médecin : les crânes sont entiers, les côtes intactes. Ils sont morts ici, enfermés, de soif ou d'air. La dalle a été scellée par-dessus eux. Sur la face intérieure de la dalle, quand elle lève la lanterne, il y a des traces d'ongles.",
        "Benoît, en haut des marches, s'est signé et n'ose pas descendre. Fréville est descendu, lui, et il se tient à côté d'elle, son bonnet à la main, et il pleure, sans bruit, comme pleurent les vieux charpentiers.",
      ],
      choices: [
        { label: "Examiner les corps, un par un, et tout noter", fx: { flag: "chapelle:crypte" }, to: "XY_crypte_noter" },
        { label: "Remonter, et faire sceller la dalle", fx: { flag: "chapelle:crypte" }, to: "XY_crypte_sceller" },
      ] },
    XY_crypte_noter: { act: "IV", title: "La crypte", place: "misericorde", ambiance: "souterrain",
      text: [
        "Elle passe la journée dans la crypte, à genoux, à la lanterne, avec un carnet. Elle note chaque squelette. Le sexe, l'âge approximatif, la taille, ce qu'on peut dire des dents, des os, des anciennes fractures, et les objets : une alliance, une croix de bois, une paire de lunettes, un sifflet.",
        "Quarante-trois. Vingt-six adultes. Neuf vieillards. Huit enfants.",
        "Au fond, dans le recoin le plus étroit, il y a une femme, assise contre le mur, et contre elle, dans ses bras, un enfant de trois ou quatre ans. La femme tient encore, dans les os de sa main, un petit soulier de cuir rouge. Un seul. L'enfant a l'autre au pied.",
        "Victorine reste longtemps devant eux. Puis elle note, dans son carnet, comme pour les autres : *Femme, trente ans environ. Enfant, trois ans environ. Un soulier rouge.* Elle referme le carnet.",
        "En remontant, elle croise le baron Clavières, qui attend en haut des marches, très pâle. Il demande ce qu'il y a en bas. Elle lui tend le carnet, ouvert, et le regarde lire. Il lit jusqu'au bout. Il lit *un soulier rouge*. Il lui rend le carnet d'une main qui tremble à peine, et retourne dans le chœur, s'asseoir sur son banc, seul.",
      ],
      choices: [{ label: "Laver ses mains à la source", fx: { flag: "chapelle:soulier" }, back: "A4w_jours" }] },
    XY_crypte_sceller: { act: "IV", title: "La crypte", place: "misericorde", ambiance: "souterrain",
      text: [
        "Elle remonte. Elle fait signe à Fréville et à Benoît, et ils remettent la dalle en place, et le charpentier la scelle avec du mortier de chaux qu'il gâche dans un seau, à genoux, longuement, en lissant les joints avec son pouce comme on borde un lit.",
        "Quand c'est fait, Victorine reste debout sur la dalle. Sous ses pieds, quarante-trois personnes. Elle ne connaît pas leurs noms. Elle sait comment elles sont mortes, et elle sait que quelqu'un, il y a vingt et un ans, a posé cette dalle sur elles, et l'a scellée, et a peut-être lissé les joints avec son pouce, lui aussi.",
        "Le soir, on dit une prière dans le chœur, au-dessus de la dalle. C'est la capitaine Ribaud qui la dit, faute de prêtre. Elle la dit mal, en se trompant de mots, d'une voix rauque. Personne ne la corrige. Personne, depuis, ne marche sur cette dalle : on fait le tour.",
      ],
      choices: [{ label: "Retourner dans la sacristie", back: "A4w_jours" }] },

    // ---------------------------------------------------------------- the doctor: water at night
    XY_source: { act: "IV", title: "La source", place: "misericorde", ambiance: "nuit",
      text: [
        "La source de l'éperon coule au pied du mur nord, à cinquante pas de la chapelle, dans une niche de rochers que les mutins voient depuis la lisière. Le jour, on ne peut pas y aller : ils tirent. La nuit, on y descend un par un, à plat ventre, avec deux seaux, et on remonte en rampant.",
        "Ce soir, c'est le tour de Victorine. Elle n'était pas obligée. Elle l'a demandé, parce qu'il manque de l'eau à l'infirmerie et que les hommes valides sont épuisés.",
        "Elle descend dans le noir, à plat ventre, les seaux attachés à sa ceinture pour qu'ils ne cognent pas. L'herbe est mouillée. Les cailloux lui déchirent les coudes. Au-dessus d'elle, les étoiles. Devant elle, à cent pas, la lisière de la forêt, noire, où brille de temps en temps le bout rouge d'une pipe.",
        "Elle atteint la source. L'eau coule, claire, froide, dans sa niche de roche, avec un petit bruit de conversation. Elle remplit le premier seau. Puis le second. Et c'est alors que, dans la lisière, quelqu'un se met à chanter.",
        "Une voix d'homme, belle, grave, un peu éraillée, qui chante une chanson de Morlenc, une chanson de cuisine, une complainte de marin sur une fille qui attend au port. La voix porte loin, dans la nuit calme. Victorine reste immobile, à plat ventre, les mains dans l'eau froide, et elle écoute.",
      ],
      choices: [
        { label: "Remonter, sans bruit, avec les deux seaux", test: { dom: "discretion", diff: 1, label: "Deux seaux pleins" }, win: { fx: { flag: "chapelle:source_nuit" }, to: "XY_source_ok" }, lose: { fx: { flag: "chapelle:source_nuit" }, to: "XY_source_tir" } },
      ] },
    XY_source_ok: { act: "IV", title: "La source", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle remonte, à plat ventre, un seau dans chaque main, centimètre par centimètre, sans renverser une goutte. Dans la lisière, la voix chante toujours. Elle chante jusqu'à ce que Victorine ait atteint le mur, et qu'on l'ait tirée par-dessus, et posée dans l'herbe du cimetière, haletante.",
        "Alors la voix se tait, au milieu d'un couplet.",
        "Victorine pense, sans pouvoir se l'ôter de la tête, que le chanteur l'a vue. Qu'il l'a vue descendre, et remplir ses seaux, et remonter. Et qu'il a chanté tout ce temps-là pour que les autres, dans la lisière, écoutent la chanson plutôt que l'herbe.",
        "Elle connaît cette voix. Elle l'a entendue chanter dans une cambuse, à Morlenc, en pelant des oignons. Elle ne le dit à personne.",
      ],
      choices: [{ label: "Porter l'eau à l'infirmerie", back: "A4w_jours" }] },
    XY_source_tir: { act: "IV", title: "La source", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle remonte. À mi-chemin, un seau heurte une pierre. Le bruit, dans le silence de la chanson, est énorme. Dans la lisière, la voix s'arrête net. Puis un coup de feu.",
        "La balle passe à un pied de sa tête, et fait voler un éclat du rocher. Victorine se plaque dans l'herbe. Un second coup. Un troisième, plus loin, au hasard. Puis une voix, la même voix, mais qui ne chante plus, qui gronde : « Assez ! Assez, j'ai dit ! C'est une bête. Vous gaspillez la poudre sur un chevreau. » Les coups cessent.",
        "Victorine rampe jusqu'au mur avec un seul seau. L'autre s'est renversé. On la tire par-dessus. Elle a une égratignure à la joue, d'un éclat de pierre, qui saigne un peu. Elle la nettoie elle-même, à l'infirmerie, devant un morceau de miroir, avec une demi-pinte d'eau de la source.",
        "Elle pense à la voix. Elle connaît cette voix. Elle l'a entendue chanter dans une cambuse, à Morlenc, en pelant des oignons. Elle ne le dit à personne.",
      ],
      choices: [{ label: "Porter l'eau à l'infirmerie", back: "A4w_jours" }] },

    // ---------------------------------------------------------------- the child: the parrots
    XY_perroquets: { act: "IV", title: "Les perroquets", place: "sylve", ambiance: "nature",
      text: [
        "À l'est de la hutte, à une heure de marche, il y a un bois de grands arbres morts, gris, dépouillés, blanchis comme des os, où vivent des perroquets. Sauveur te le montre un matin, de loin, du haut d'un rocher, et ne va pas plus près. « Allez-y seul{e}, dit-il. Moi, ils me connaissent. »",
        "Tu y vas. Sous les arbres morts, le sol est couvert de fientes blanches et de plumes grises. Au-dessus, dans les branches, des centaines de perroquets gris, à queue rouge, serrés les uns contre les autres, qui te regardent arriver de leurs yeux pâles. Ils se taisent. Tu t'arrêtes au milieu du bois. Le silence dure.",
        "Puis un perroquet parle.",
        "« *Jeanne !* » dit-il, d'une voix de femme, aiguë, inquiète, qui appelle un enfant. « *Jeanne, rentre !* »",
        "Un autre répond, d'une voix d'homme, grave, lente, qui chante un psaume : « *Le Seigneur est mon berger…* » Un troisième tousse, une toux de vieillard, longue, déchirante. Un quatrième rit, d'un rire d'enfant. Un autre crie : « *Les clefs ! Qui a les clefs ?* » Et puis tous ensemble, des centaines de voix, de femmes, d'hommes, d'enfants, qui appellent, qui prient, qui chantent, qui toussent, qui crient, qui pleurent, un vacarme effroyable de voix humaines qui sortent de becs gris, au milieu des arbres morts.",
        "Ce sont les voix de la colonie. Il y a vingt et un ans, des perroquets vivaient près de la chapelle, et apprenaient les mots des colons. Les colons sont morts. Les perroquets ont gardé les voix, et les ont apprises à leurs petits, et à leurs petits-enfants. La Miséricorde n'existe plus nulle part ailleurs que dans ce bois.",
      ],
      choices: [
        { label: "Rester, et écouter jusqu'au bout", fx: { flag: "ile:perroquets" }, to: "XY_perroquets_ecoute" },
        { label: "Partir en courant, les mains sur les oreilles", to: "XY_perroquets_fuite" },
      ] },
    XY_perroquets_ecoute: { act: "IV", title: "Les perroquets", place: "sylve", ambiance: "nature",
      text: [
        "Tu restes. Tu t'assieds au pied d'un arbre mort, dans les plumes et les fientes, et tu écoutes.",
        "Au bout d'une heure, tu commences à distinguer des voix. La femme qui appelle Jeanne. L'homme du psaume. Un vieillard qui compte des sacs de grain. Une jeune fille qui chante une chanson d'amour en se trompant toujours au même endroit. Un enfant qui récite l'alphabet jusqu'à la lettre M, et recommence. Un homme qui dit, d'une voix calme, très douce : « *N'ouvrez pas. Quoi qu'il arrive, n'ouvrez pas.* »",
        "Et une autre voix, une seule, qui revient de temps en temps, dure, sèche, différente de toutes les autres, celle d'un homme habitué à commander : « *Ouvrez. Ouvrez, et personne ne sera blessé.* »",
        "Les perroquets se taisent enfin, vers midi, quand la chaleur tombe. Tu rentres à la hutte. Sauveur t'attend sur le seuil. Il te regarde arriver. Il ne te demande pas ce que tu as entendu.",
        { if: { has: "dagrel:demasque" }, text: "Tu le regardes, toi. Tu as reconnu, dans le bois, la voix dure qui disait *ouvrez*. Tu l'entends tous les soirs, au coin du feu, lire du latin aux arbres." },
        { if: { not: { has: "dagrel:demasque" } }, text: "Tu le regardes, toi. Il y a, dans le bois, une voix qui ressemble à quelque chose. Tu ne sais pas encore à quoi." },
      ],
      choices: [{ label: "Entrer dans la hutte", back: "A4n_jours" }] },
    XY_perroquets_fuite: { act: "IV", title: "Les perroquets", place: "sylve", ambiance: "nature",
      text: [
        "Tu cours. Les voix te poursuivent entre les arbres morts, des centaines de voix, *Jeanne, rentre !*, *les clefs !*, *le Seigneur est mon berger*, une toux, un rire, une prière, et tu cours plus vite, les mains sur les oreilles, jusqu'à ce que les arbres redeviennent verts et que le silence revienne, ou presque.",
        "Tu t'arrêtes, essoufflé{e}, contre un tronc vivant. Au-dessus de toi, un seul perroquet gris t'a suivi. Il se pose sur une branche basse, te regarde de son œil pâle, et dit, d'une voix d'enfant, très doucement : « *Maman ?* »",
        "Puis il s'envole et retourne au bois mort.",
        "Tu rentres à la hutte. Sauveur t'attend sur le seuil. Il voit ton visage. « Ils vous ont parlé, dit-il. Ils parlent à tout le monde. Ils n'attendent pas de réponse. Ils n'en ont jamais eu. »",
      ],
      choices: [{ label: "Entrer dans la hutte", back: "A4n_jours" }] },
  },
  extras: {},
};
