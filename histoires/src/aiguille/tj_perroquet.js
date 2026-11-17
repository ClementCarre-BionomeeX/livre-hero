// L'Île Folle-Aiguille · side story « Le perroquet de l'épicerie » (owes its question to Zola's Thérèse Raquin: can a
// crime be got rid of by getting rid of its witnesses, and what does one do with the confession of murderers who are
// already punished?). Act II, Fargue in Morlenc: at the grocer's of the rue des Cordiers, where he buys his vinegar,
// Laurence and Hervé Guyomarc'h, married a year, have a grey parrot that belonged to Laurence's first husband, Gwilherm,
// drowned in the Saulnes pond on a Sunday outing. The bird calls the dead man's name all day. Hervé, who has a bite
// scar on his neck, begs the ship's cook to take the bird to sea and sell it far away. Fargue, who has met murderers in
// prison, knows the look. He takes the bird, or asks why; either way Laurence comes to the quay at night to confess.
// Fargue keeps the bird and the secret (tj:garde), takes her to the watch (tj:denonce), or gives the bird back (tj:rend).
// Wired in XR_jours.
module.exports = {
  passages: {
    TJ_voisin: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Le mercier d'en face est un petit homme rond, à lunettes, qui vend du fil, des boutons et des nouvelles, et qui donne les nouvelles gratuitement, pour faire passer le fil. Il a vu Fargue regarder la boutique. Il traverse la rue avec un écheveau à la main, comme prétexte, et se plante à côté de lui.",
        "Il dit que c'est une histoire bien triste, et bien belle. Le pauvre Gwilherm, toujours malade, toujours à tousser derrière son comptoir, et si jaloux, le pauvre, qu'il battait sa femme quand un client lui souriait. Et le grand Hervé, l'ami d'enfance, qui venait tous les jeudis jouer aux dominos avec lui, et qui supportait ses colères comme un saint. Et puis la promenade sur l'étang, le dimanche, et le malheur, et les deux survivants trempés, qu'on a dû arracher de la berge où ils appelaient encore.",
        "Il dit qu'ils se sont mariés au bout d'un an, comme il se doit, et que tout le quartier a trouvé ça juste, et touchant. Il baisse la voix. Il dit que, depuis, la boutique est moins gaie. Qu'on ne les entend jamais se disputer, ni rire, ni rien. Qu'on dirait deux veufs qui tiendraient boutique ensemble. Il dit que c'est le chagrin, et que ça passera.",
        "Puis il ajoute, comme une chose sans importance, en roulant son écheveau, que le perroquet, avant, ne disait que « Bonjour, la compagnie ». C'est depuis l'étang qu'il dit l'autre chose. Il ne sait pas qui le lui a appris. Il rit, d'un petit rire de mercier, et repart vers ses boutons."
      ],
      choices: [
        { back: "TJ_epicerie", label: "Retourner devant l'épicerie" }
      ] },
    TJ_loueur: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "L'étang des Saulnes est à une demi-lieue de la ville, au bout d'un chemin de halage, une eau dormante, verte, bordée de saules qui y trempent leurs cheveux. Les gens de Morlenc y vont le dimanche, en barque, pour pêcher l'ablette et se faire voir. Le loueur de barques tient une guinguette de planches, sur pilotis, où l'on boit un vin blanc aigre en regardant les canards.",
        "Fargue boit son vin aigre sans faire de grimace, ce qui lui vaut l'estime du loueur, un vieux à favoris blancs qui a vu, dit-il, tout ce qu'on peut voir sur une eau douce. Fargue parle de noyades, en général. Le vieux parle de la noyade Guyomarc'h, en particulier, parce que c'est la seule qui lui soit arrivée en quarante ans.",
        "Il raconte la barque retournée, les cris, les deux sauvés. Il dit qu'il a tout de suite pensé à un malheur, parce qu'un homme qui ne sait pas nager, sur une barque, ça bouge toujours de travers. Puis il dit, en remplissant les verres, une chose qui l'a frappé, ce jour-là, et dont il n'a parlé à personne, parce que personne ne lui a rien demandé. Le grand, Hervé, avant de monter dans la barque, avait ôté ses bottes. Il les avait laissées sur le ponton, bien rangées. Par un dimanche sans soleil.",
        "« Un homme qui ôte ses bottes pour monter dans une barque, dit le vieux, c'est un homme qui pense qu'il va nager. » Il boit. Il dit qu'il a dû se tromper, que c'était sûrement pour ne pas salir les planches. Il dit qu'Hervé est un garçon bien soigneux."
      ],
      choices: [
        { back: "TJ_epicerie", label: "Retourner à l'épicerie de la rue des Cordiers" }
      ] },
    TJ_epicerie: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "guyomarch" },
      text: [
        { first: true, text: "L'épicerie Guyomarc'h, rue des Cordiers, vend le meilleur vinaigre de la Basse-Fosse, et Fargue a besoin de quatre barils de vinaigre pour un long voyage. C'est une boutique étroite et sombre, qui sent le girofle, le savon noir et la morue sèche, avec un comptoir de chêne usé, des bocaux, des sacs, et, dans une cage de laiton suspendue au plafond, un perroquet gris à queue rouge, qui regarde les clients de profil, d'un œil jaune." },
        { first: true, text: "Derrière le comptoir, un couple. Elle, Laurence, vingt-huit ans, belle d'une beauté sombre et fatiguée, avec des cernes violets. Lui, Hervé, trente ans, un grand gaillard au cou épais, aux mains énormes, qui sourit trop. Ils sont mariés depuis un an, dit le voisin. Elle était veuve. Son premier mari, Gwilherm, un petit homme maladif qui tenait la boutique avant, s'est noyé dans l'étang des Saulnes, un dimanche, en barque, avec sa femme et son meilleur ami, qui ont tout fait pour le sauver. Le meilleur ami, c'était Hervé." },
        { first: true, text: "Pendant que Laurence mesure le vinaigre, le perroquet se met à parler. D'une voix aiguë, nasillarde, d'une ressemblance effrayante avec une voix humaine, il dit : « Gwilherm ! Gwilherm ! Laurence, où est Gwilherm ? » Laurence renverse la mesure. Le vinaigre coule sur le comptoir. Hervé devient gris. Il frappe la cage du plat de la main. Le perroquet se tait, et regarde Fargue, de profil, avec son œil jaune." },
        { again: true, text: "Le perroquet gris, dans sa cage de laiton, regarde Fargue de profil, et attend qu'on lui parle." }
      ],
      choices: [
        { label: "Écouter le voisin, le mercier d'en face, qui ne demande qu'à parler", to: "TJ_voisin", hide: { seen: "TJ_voisin" } },
        { label: "Aller boire un verre au loueur de barques de l'étang des Saulnes", to: "TJ_loueur", hide: { seen: "TJ_loueur" } },
        { label: "Payer le vinaigre, et attendre qu'Hervé parle", to: "TJ_cou" }
      ] },
    TJ_cou: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Hervé raccompagne Fargue jusqu'à la porte, pour l'aider avec les barils. Sur le seuil, il se penche. Fargue voit, sur son cou épais, au-dessus du col, une cicatrice. Une cicatrice ronde, en croissant, en deux arcs, avec la marque nette de dents humaines. Une morsure, vieille d'un an, mal refermée, que le col frotte. Hervé voit qu'il regarde. Il remonte son col. Il sourit trop.",
        "Il dit qu'il a entendu que Fargue partait en mer pour longtemps. Il dit qu'il a une faveur à demander. Le perroquet. C'était celui du pauvre Gwilherm, qui l'avait acheté à un marin, et qui lui a appris à parler. Il dit que la bête rappelle trop de mauvais souvenirs à sa femme. Il dit qu'il voudrait que Fargue l'emporte, et le vende dans un port lointain, très loin, là où personne ne saura qui est Gwilherm. Il paiera. Il sort une bourse. Ses mains tremblent.",
        "Fargue regarde l'homme. Il a passé des années dans des endroits où l'on apprend à reconnaître certains regards. Le regard des hommes qui ont fait une chose qu'ils ne peuvent pas défaire, et qui passent leur vie à essayer de ne pas la voir. Il l'a vu sur des faussaires, sur des voleurs, sur des assassins. Il l'a vu, quelquefois, dans un miroir. Il le voit sur le visage d'Hervé Guyomarc'h, qui veut se débarrasser d'un perroquet.",
      ],
      choices: [
        { label: "Prendre la cage, sans poser de question", to: "TJ_cage" },
        { label: "Refuser, et demander ce que le perroquet sait", to: "TJ_refus" },
      ] },
    TJ_cage: { act: "II", title: "Le perroquet de l'épicerie", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        "Fargue prend la cage et la bourse. Il porte le perroquet à bord, et l'accroche dans un coin de la cambuse, au-dessus des oignons. Petit-Jules est ravi. Le perroquet ne dit rien de la journée. Il mange des graines, il regarde le feu, il fait des bruits de bouchon. Le soir, quand le navire s'endort, et que Fargue est seul, à la lanterne, à écrire ses listes, le perroquet parle.",
        "Il ne dit pas Gwilherm. Il dit autre chose. D'une voix grave, cette fois, une voix d'homme, essoufflée, qui crie entre deux gargouillements : « Hervé ! Lâche-moi ! Hervé ! » Puis une voix de femme, aiguë, qui dit : « Tiens-le. Tiens-le. » Puis un bruit d'eau, que le perroquet imite avec un claquement de langue, très exactement. Puis le silence. Puis, de sa petite voix nasillarde : « Laurence, où est Gwilherm ? »",
        "Fargue pose sa plume. Il regarde l'oiseau. Le perroquet le regarde de profil. Il a appris à parler en écoutant. On lui a appris Gwilherm. Personne ne lui a appris le reste. Il a appris tout seul, la nuit, dans l'épicerie, en écoutant un homme et une femme qui se réveillent en criant, depuis un an, et qui se répètent, dans leurs cauchemars, ce qu'ils ont fait dans une barque. Fargue reste longtemps assis. Puis il entend des pas sur la passerelle.",
      ],
      choices: [{ label: "Monter voir qui vient", to: "TJ_aveu" }] },
    TJ_refus: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Fargue repousse la bourse. Il dit qu'il n'emporte pas les perroquets des autres. Il dit, en regardant le col d'Hervé, qu'un oiseau qui parle, ça dit souvent ce qu'on lui a appris, et quelquefois ce qu'on ne lui a pas appris. Il demande ce que celui-ci sait. Hervé devient livide. Il recule. Il dit que le cuisinier est fou. Il rentre dans la boutique et claque la porte. Le perroquet, à l'intérieur, crie le nom du mort.",
        "Fargue repart avec ses barils. Il se dit qu'il vient de faire une bêtise. Un cuisinier qui part dans huit jours n'a pas à se mêler des noyés de la Basse-Fosse. Il se dit qu'il a parlé parce qu'il a vu, sur ce cou, une morsure d'homme qui se noie, et qu'il connaît la forme de ces morsures. Il se dit qu'il ne veut pas savoir pourquoi il la connaît. Il ne pense plus à l'épicerie de la journée.",
        "Le soir, tard, quand le navire dort, il entend des pas légers sur la passerelle. Une femme, en châle, sans bonnet, qui a couru. Elle demande le cuisinier. Elle dit qu'elle a quelque chose à lui dire, et qu'il faut que ce soit à quelqu'un qui part.",
      ],
      choices: [{ label: "La faire descendre à la cambuse", to: "TJ_aveu" }] },
    TJ_aveu: { act: "II", title: "Le perroquet de l'épicerie", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        "C'est Laurence. Elle s'assied sur un tonneau, dans la cambuse, à la lueur du fourneau. Elle ne pleure pas. Elle a dépassé ça. Elle dit qu'Hervé dort, ou fait semblant. Elle dit qu'elle est venue parce que le cuisinier a vu. Elle dit qu'elle le savait dès qu'il est entré dans la boutique : il avait le regard de quelqu'un qui reconnaît. Elle dit qu'il faut qu'elle le dise à quelqu'un, une fois, avant de devenir folle, et que ce soit quelqu'un qui part loin, et qui ne reviendra pas.",
        { if: { seen: "TJ_cage" }, text: "Elle regarde la cage, au-dessus des oignons. Le perroquet la regarde. Il dit, très doucement, de sa voix d'homme : « Tiens-le. » Laurence ferme les yeux." },
        "Elle raconte. Gwilherm était malade, méchant, jaloux, il la battait le soir et pleurait le matin. Hervé était son ami d'enfance, et le seul homme qui la regardait. Ils ont aimé. Ils ont voulu. Un dimanche, sur l'étang des Saulnes, Hervé a fait chavirer la barque. Gwilherm ne savait pas nager. Il s'est accroché à Hervé. Il l'a mordu au cou. Hervé l'a maintenu sous l'eau. Elle a tenu les jambes. Elle dit cela d'une voix plate, comme on récite une liste de courses.",
        "Elle dit qu'ils se sont mariés, comme prévu. Elle dit qu'ils ne se sont jamais touchés depuis. Ils dorment chacun d'un côté du lit, avec le mort entre eux. Ils ne se parlent plus. Hervé a la morsure qui ne guérit pas. Elle a les mains qui sentent l'eau de l'étang, quoi qu'elle fasse. Et le perroquet, la nuit, qui répète leurs cauchemars. Elle demande à Fargue ce qu'ils doivent faire. Elle dit qu'il a l'air d'un homme qui sait ce qu'on fait, après.",
        "Fargue regarde cette femme, sur son tonneau. Il pense qu'elle et son homme ont déjà leur prison, plus étroite que toutes celles qu'il a connues, et qu'ils y sont enfermés ensemble, à perpétuité, avec un geôlier à plumes. Il pense aussi qu'un homme est mort sous l'eau, en mordant, et que ce mort n'a eu ni procès ni vengeance. Il pense qu'il part dans huit jours. Il pense qu'on ne lui demande jamais rien de facile.",
      ],
      choices: [
        { label: "Lui dire qu'il gardera le perroquet, et le secret, et qu'il partira avec", fx: { flag: "tj:garde" }, to: "TJ_garde" },
        { label: "La conduire, à l'aube, au poste du guet", fx: { flag: "tj:denonce" }, to: "TJ_denonce" },
        { label: "Lui dire qu'on ne se débarrasse pas d'un mort en vendant son perroquet", fx: { flag: "tj:rend" }, to: "TJ_rend" },
      ] },
    TJ_garde: { act: "II", title: "Le perroquet de l'épicerie", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        { if: { seen: "TJ_refus" }, text: "Il lui dit d'apporter la cage, demain, au quai, et la bourse aussi. Elle les apporte à l'aube, sans un mot, et repart en courant." },
        "Fargue dit qu'il emportera l'oiseau, et qu'il ne le vendra à personne. Il dit qu'il le gardera dans sa cambuse, et qu'il l'écoutera, la nuit, puisque quelqu'un doit l'écouter. Il dit qu'il ne dira rien. Il dit qu'il n'est pas juge, ni prêtre, et que ceux qui l'ont été, dans sa vie, ne lui ont pas donné envie de les imiter. Il dit qu'ils sont déjà condamnés, elle et son homme, et qu'il ne voit pas ce qu'une corde ajouterait à ce lit avec un mort au milieu.",
        "Laurence le regarde. Elle dit merci. Elle ne semble pas soulagée. Elle semble seulement fatiguée, d'une fatigue sans fond. Elle remonte la passerelle. Fargue la regarde s'éloigner sur le quai désert, sous les réverbères, toute petite dans son châle, vers la Basse-Fosse, vers la boutique, vers l'homme qui fait semblant de dormir.",
        "La Cormorane appareille avec un perroquet gris dans la cambuse. Les hommes l'appellent Monsieur, et lui donnent des croûtes. Il dit Gwilherm, le jour, et ça les fait rire. La nuit, il dit autre chose, et seul Fargue l'entend, parce qu'il dort dans la cambuse. Il s'habitue. Il se dit qu'il porte, avec ce perroquet, le crime de deux autres. Il se dit qu'il en a porté de plus lourds, et que celui-ci, au moins, a des plumes.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "TJ" }, back: "XR_jours" }] },
    TJ_denonce: { act: "II", title: "Le perroquet de l'épicerie", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Fargue dit qu'il la conduira au poste du guet, à l'aube. Il dit qu'un homme est mort sous l'eau en mordant, et qu'il faut que quelqu'un, quelque part, l'écrive. Il dit qu'il ne la jugera pas. Il dit qu'il la portera, si elle ne peut pas marcher. Laurence le regarde longtemps. Puis elle hoche la tête. Elle dit qu'elle est venue pour ça. Elle dit qu'elle ne savait pas qu'elle était venue pour ça, mais que maintenant elle le sait.",
        "À l'aube, ils remontent ensemble la rue du Quai jusqu'au poste. Elle marche droit. Elle entre. Fargue reste sur le seuil, son bonnet à la main. Il entend sa voix, à l'intérieur, plate, comme dans la cambuse, qui raconte au sergent de garde. Il entend le sergent qui se lève, renverse sa chaise, appelle. Il s'en va avant qu'on lui demande son nom.",
        "On arrête Hervé Guyomarc'h dans la matinée, dans sa boutique. Il ne résiste pas. Il dit, en tendant les poignets, qu'il attendait ça depuis un an. On dit qu'en sortant, il a regardé la cage, et dit au perroquet : « Voilà. C'est fini. » Le perroquet a répondu : « Laurence, où est Gwilherm ? » Personne n'a ri. Le procès aura lieu après l'appareillage de la Cormorane. Fargue ne saura pas comment il finit. Il le devine.",
        "Il se dit qu'il a mené une femme au gibet, ou au bagne, parce qu'elle le lui a demandé sans le savoir, et parce qu'un homme est mort sans que personne ne le venge. Il se dit qu'il a fait ce qu'aucun des juges qu'il a connus n'aurait fait à sa place : il a écouté jusqu'au bout avant de condamner. Il se dit que ça ne change rien au résultat. Il se dit que ça change tout pour lui. Il ne sait pas encore si c'est une chose dont il pourra être fier.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "TJ" }, back: "XR_jours" }] },
    TJ_rend: { act: "II", title: "Le perroquet de l'épicerie", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Fargue dit qu'il ne prendra pas le perroquet. Il dit qu'on ne se débarrasse pas d'un mort en vendant son oiseau dans un port lointain, ni en le noyant, ni en le confessant à un cuisinier qui part. Il dit que le mort est dans leur lit, et qu'il y restera, et qu'ils feraient mieux d'apprendre à dormir avec lui que de chercher à le chasser. Il dit que c'est ce qu'il a appris, lui, et qu'il ne connaît pas d'autre méthode.",
        { if: { seen: "TJ_cage" }, text: "Il décroche la cage de la cambuse, la donne à Laurence, et la raccompagne au quai. Elle la porte contre sa poitrine, dans la nuit, avec le perroquet qui dort, la tête sous l'aile." },
        "Laurence le regarde, stupéfaite. Elle dit que c'est cruel. Fargue dit que oui. Il dit que c'est la seule chose qui ne soit pas une fuite. Il dit que, peut-être, un jour, ils pourront dire son nom ensemble, au perroquet, en même temps que lui, et que ce jour-là le perroquet se taira. Il dit qu'il ne sait pas si ce jour viendra. Il dit qu'il en a connu, des hommes qui ont attendu ce jour-là toute leur vie.",
        "Elle repart. Le lendemain, en passant devant l'épicerie pour une dernière commande, Fargue voit, à travers la vitrine, Laurence et Hervé, derrière le comptoir, côte à côte. Ils ne se touchent pas. Ils ne se parlent pas. Au-dessus d'eux, la cage de laiton se balance. Le perroquet dit Gwilherm. Laurence lève la tête vers lui. Et Fargue la voit remuer les lèvres, en même temps que l'oiseau, sur le nom du mort. Hervé la regarde. Puis il ferme les yeux, et ses lèvres bougent aussi. Fargue s'en va. Il se dit qu'il ne les a ni sauvés, ni punis. Il se dit qu'il les a laissés seuls avec leur mort, et que c'est peut-être ce qu'on pouvait leur faire de plus juste, et de plus dur.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "TJ" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      guyomarch: { name: "Laurence Guyomarc'h", aka: ["l'épicière de la rue des Cordiers"], f: true, qui: "Épicière de la Basse-Fosse, veuve remariée, dont le premier mari s'est noyé dans l'étang des Saulnes." },
    },
    quests: [
      { id: "TJ", act: "II", kind: "annexe", title: "Le perroquet de l'épicerie", start: "TJ_epicerie", doit: "theraquin", echo: ["tj:garde", "tj:denonce", "tj:rend"] },
    ],
  },
};
