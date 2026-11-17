// Act III · « L'aube »: the name carved in stone, the family chapel at three in the morning, the fourth codicil, and,
// in the first reading, the notary's arrival at dawn, the judgement and the sharing. Shared passages serve the second
// reading too.
module.exports = {
  C_q4_nom: { act: "III", title: "Le nom", place: "salon",
    text: [
      "« Un nom », dis-tu. *Et pour finir on me grave dans la pierre.*",
      "Il n'y a dans toute la Bastide qu'un seul nom fraîchement gravé dans la pierre. Il est au bout du jardin, dans la chapelle, sur une dalle que le marbrier de Sauvebonne a finie avant-hier, et sous laquelle Madame Castellane attend depuis trois jours qu'on vienne la déranger.",
    ],
    choices: [
      { label: "Prendre une lanterne et aller à la chapelle", fx: { until: 3 }, to: "C_chapelle" },
    ] },

  C_chapelle: { act: "III", title: "La chapelle", place: "chapelle", hub: true, backName: "la chapelle",
    text: [
      { first: true, text: "La chapelle est une petite nef de pierre blonde, au bout de l'allée des cyprès, si étroite qu'on y tiendrait à vingt en se serrant. Une veilleuse rouge brûle devant l'autel. L'air est froid, immobile, chargé d'encens refroidi, de cire et de lys qui commencent à pourrir dans leurs vases : l'odeur sucrée, un peu écœurante, des fleurs qu'on a oublié de jeter." },
      { first: true, text: "Dans le sol, devant l'autel, une dalle neuve, d'un marbre gris veiné de blanc, encore poudreuse de la poussière du ciseau : *AURORE CASTELLANE, VEUVE FERRIER.* Les lettres sont si fraîches qu'elles ont l'air de saigner un peu de blanc. Au-dessous, les dates. Au-dessous des dates, rien. Elle n'a pas voulu d'épitaphe. Elle avait dû juger qu'aucune ne serait assez spirituelle." },
      { first: true, second: false, text: "Derrière toi, la porte grince. Hector entre, essoufflé, la chemise ouverte, suivi de Bérénice en robe de chambre et d'Odile, qui porte une bougie. Personne ne dormait. Toute la maison t'a regardé{e} traverser le jardin." },
      { first: true, second: true, text: "Derrière toi, la porte grince. Bérénice entre, puis Odile avec sa bougie, puis Hector, le dernier, lentement, les mains dans les poches, comme on entre dans une église où l'on a quelque chose à se faire pardonner." },
      { again: true, text: "La nef de pierre blonde, la veilleuse rouge, la dalle neuve devant l'autel. L'odeur des lys qui pourrissent." },
    ],
    choices: [
      { label: "Soulever la plaque de bronze sous le nom", hide: { has: "codicille:4" }, to: "C_plaque" },
      { label: "Examiner le sol autour de la dalle", hide: { seen: "C_sol" }, to: "C_sol" },
      { label: "Tendre le codicille à Odile, qui sent tout", if: "codicille:4", hide: { seen: "C_odile_encre" }, to: "C_odile_encre" },
      { label: "Lever le codicille devant la veilleuse", if: "codicille:4", hide: { seen: "C_filigrane" }, to: "C_filigrane" },
      { label: "Parler à Hector, devant la dalle", if: "codicille:4", hide: { seen: "C_hector_chapelle" }, to: "C_hector_chapelle" },
      { label: "Sentir toi-même l'encre du codicille", if: { all: ["codicille:4", { has: "nez:appris" }] }, hide: { seen: "C_nez_encre" }, to: "C_nez_encre" },
      { label: "Quitter la chapelle et attendre l'aube à la Bastide", if: "codicille:4", fx: { until: 4 }, to: "C_retour_aube" },
    ] },

  C_plaque: { act: "III", title: "Le quatrième codicille", place: "chapelle",
    fx: { item: "faux", flag: "codicille:4", ep: ["histoire", 300] },
    text: [
      "Au pied de la dalle, une petite plaque de bronze, scellée par deux vis à tête plate, porte le chiffre de la Maison Castellane : un A et un C entrelacés dans une couronne d'iris. Les vis tournent sous la lame de ton canif sans résister. Elles ont été desserrées récemment.",
      { if: { has: "chapelle:vue" }, text: "Hier soir, à sept heures, ces têtes de vis étaient prises dans un vernis brun, lisse et brillant comme un ongle. Le vernis est fendu, à présent, et des éclats bruns brillent dans la poussière." },
      "Sous la plaque, dans un creux de la pierre, un papier plié.",
      "Tu le déplies à la lumière de la veilleuse. Quatre personnes retiennent leur souffle derrière toi, et tu entends battre au moins un cœur qui n'est pas le tien.",
      "*Quatrième et dernier codicille. La Bastide aux Iris, la Maison Castellane et le reste de mes biens iront à mon neveu Hector, qui porte mon nom et le portera après moi.* Et la signature : *Aurore Castellane.*",
      { second: true, text: "Les mots sont les mêmes qu'hier, à la virgule près. Hector ne soupire pas, cette fois. Il regarde ailleurs, vers la veilleuse, avec l'air d'un acteur qui joue sa scène pour la deuxième fois devant une salle qui connaît la pièce." },
      { second: false, text: "Hector pousse un long soupir, le soupir d'un homme qui pose une malle très lourde au bout d'un long escalier. Puis il éclate de rire, et le rire sonne mal dans la petite nef, comme un juron. Bérénice a fermé les yeux. Odile n'a pas bougé." },
      { second: false, text: "« *Qui porte mon nom* », répète Hector. Il essuie une larme. « Brave vieille. Brave, brave vieille. Elle m'aimait, au fond. »" },
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  C_sol: { act: "III", title: "Le sol de la chapelle", place: "chapelle",
    fx: { clue: "i_cire" },
    text: [
      "Tu promènes la lanterne au ras des dalles. La poussière du marbrier a gardé des traces : des semelles, beaucoup, et une genouillère, à droite de la dalle neuve, là où quelqu'un s'est agenouillé longtemps.",
      "Dans les rainures entre les pierres, des gouttes de cire, pas de la cire blanche de cierge : de la cire à cacheter, rose, encore souple sous l'ongle. Et une allumette de cuisine, à tête soufrée, à moitié consumée, jetée sous le banc.",
      { if: { has: "passe:soldat" }, text: "À la garde, on t'a appris à lire un sol comme une page. Celui-ci dit qu'un homme seul est resté longtemps à genoux à droite de la dalle, et qu'il s'est relevé en s'appuyant sur la main gauche." },
      "Personne ne cachette de lettres dans une chapelle. Et personne ne prie avec une allumette de cuisine.",
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  C_odile_encre: { act: "III", title: "Le nez d'Odile", place: "chapelle",
    fx: { clue: "i_encre" },
    text: [
      "Tu tends le papier à Odile. Hector fait un pas, comme pour l'en empêcher, puis s'arrête, et sourit, et croise les bras.",
      "Odile tient la feuille à deux mains, près de son visage, et ferme les yeux. Elle respire, une fois, longuement. Ses narines frémissent. Un pli se creuse entre ses sourcils.",
      "« L'encre est fraîche, dit-elle. Elle sent encore la noix de galle et le vitriol. Une encre de trois jours, peut-être moins. » Elle rouvre les yeux. « Madame est morte il y a trois jours. »",
      "« Et alors ? dit Hector, très doucement. Elle a pu l'écrire sur son lit de mort. Les mourants ont des fantaisies. » Il tend la main. Odile lui rend la feuille sans un mot, mais c'est à toi qu'elle la donne.",
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  C_filigrane: { act: "III", title: "Le filigrane", place: "chapelle",
    fx: { clue: "i_filigrane" },
    text: [
      "Tu lèves la feuille devant la veilleuse, comme on fait à l'étude pour vérifier un papier timbré. La lumière rouge traverse le vergé, et le filigrane apparaît dans la pâte, pâle, flottant, comme un poisson sous la glace : une grappe de raisin, le nom de la papeterie Roux, de Sauvebonne, et une date.",
      "Celle de cette année.",
      { if: { has: "passe:clerc" }, text: "Douze ans d'étude t'ont appris une chose que les faussaires oublient toujours : on imite une main, on n'imite jamais un papier." },
      "Les trois autres codicilles, tu les as tenus devant la lampe aussi, par habitude de clerc, au fil de la nuit. Leur papier est un vieux vergé de Hollande, sans date, jauni sur les bords. Madame Castellane avait acheté une rame de ce papier-là il y a trente ans, et elle en écrivait tout.",
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  // ------------------------------------------------------------------ the first reading: dawn and the sharing
  C_aube: { act: "III", title: "L'aube", place: "salon", second: false,
    fx: { meet: ["brissac"] },
    text: [
      "À six heures moins le quart, la voiture de l'étude remonte l'allée des cyprès dans le petit jour gris. Maître Brissac en descend, appuyé sur sa canne et sur le cocher, le pied gauche emmailloté comme un nouveau-né, et il entre au salon en grimaçant, comme un roi goutteux dans une cour qui ne l'a pas attendu.",
      "Il s'assoit dans un fauteuil, pas celui de la morte. Il pose la jambe sur un tabouret. Il te regarde. « Eh bien ? »",
      "Tu poses devant lui les quatre codicilles, dans l'ordre. Il les lit un par un, sans lunettes, en tenant chaque feuille à bout de bras. Les trois premiers le font sourire. Au quatrième, son visage ne bouge pas. Il le lit deux fois. Puis il lève les yeux vers Odile, debout près de la fenêtre, et il la regarde un moment de trop, avec une expression que tu ne lui as jamais vue, et que tu ne sais pas nommer.",
      "« Le testament fait de vous le juge, dit-il enfin. Jugez. »",
      { if: { has: "hector:trinque" }, text: "Hector, derrière le notaire, te fait un clin d'œil, et tapote la poche de son gilet." },
      { if: { has: "hector:refus" }, text: "Hector, derrière le notaire, regarde le plafond avec une application de premier communiant." },
      { if: "enigme:p_journal", text: "Tu as dans ta poche une ligne de nombres qui dit autre chose que le codicille. Elle ne parle pas d'héritage. Le testament ne parle pas d'elle." },
    ],
    choices: [
      { label: "Regarder Maître Brissac parler bas à Odile", hide: { seen: "C_brissac_odile" }, to: "C_brissac_odile" },
      { label: "Déclarer le quatrième codicille valable", fx: { flag: "hector:tout" }, to: "C_valable" },
      { label: "Le déclarer faux, et dire pourquoi", if: { any: [{ clue: "i_encre" }, { clue: "i_filigrane" }, { clue: "i_cire" }, { has: "hector:papier" }] }, fx: { flag: "partage:tiers" }, to: "C_contester" },
    ] },

  C_valable: { act: "III", title: "Valable", place: "salon", second: false,
    text: [
      "Tu dis que le codicille est valable. Le mot sort de ta bouche avec un goût de papier mâché.",
      "Hector se lève et te serre la main à deux mains, comme un candidat élu. Bérénice se signe. Odile se détourne vers la fenêtre, où le ciel blanchit au-dessus des collines.",
      "Maître Brissac ne dit rien. Il tire de sa poche son encrier de voyage, débouche, trempe sa plume, et prépare l'acte de partage d'une main parfaitement immobile.",
    ],
    choices: [
      { label: "Signer comme témoin", to: "F_partage" },
    ] },

  C_contester: { act: "III", title: "Faux", place: "salon", second: false,
    text: [
      "Tu dis que le codicille est faux. Tu dis pourquoi, dans l'ordre, comme on rédige un acte.",
      { if: { clue: "i_filigrane" }, text: "Le papier de cette année, quand les trois autres sont du vieux vergé de Hollande d'une rame achetée il y a trente ans." },
      { if: { clue: "i_encre" }, text: "L'encre fraîche, que Mademoiselle Marchal a sentie dans la chapelle, une encre de trois jours au plus." },
      { if: { has: "hector:papier" }, text: "La rame de papier Roux sur la table d'Hector, l'encrier débouché, et les signatures de sa tante repassées au crayon." },
      { if: { clue: "i_cire" }, text: "La cire rose et l'allumette de cuisine au pied de la dalle, et les vis de la plaque desserrées avant ton arrivée." },
      "Hector rit. « Un nez et une allumette. Le Collège des notaires sera ravi. » Il se tourne vers Brissac. « Maître, je vous en prie. »",
      "Brissac tapote longtemps le pommeau de sa canne. « Un soupçon n'est pas une preuve, dit-il, et une preuve n'est pas un faussaire. Mais le juge a parlé. Le quatrième codicille est écarté. » Il soupire. « Sans dernier codicille, la loi reprend ses droits : le bien se partage entre les héritiers du sang, à parts égales. Monsieur Hector et Mademoiselle Bérénice. »",
      "Odile, à la fenêtre, ne s'est pas retournée. Elle n'est pas du sang. Elle est de la maison.",
    ],
    choices: [
      { label: "Signer comme témoin", to: "F_partage" },
    ] },

  F_partage: { act: "III", title: "Le partage", place: "salon", end: true, second: false,
    fx: { flag: "fin:partage" },
    text: [
      "L'acte est signé à six heures moins quatre minutes, sur le guéridon du salon, sous le portrait de la jeune femme au bouquet. Hector signe avec un paraphe de mousquetaire. Bérénice signe petit, serré, comme on signe une renonciation. Tu signes comme témoin. Ta plume crache un peu.",
      { if: { has: "hector:tout" }, text: "La Bastide aux Iris, la Maison Castellane, les champs, les alambics, le secret de l'Aurore : tout passe à Hector, sauf la maison du bas, des casseroles de cuivre et une bibliothèque. Il fait déjà le tour du salon en estimant les vases." },
      { if: { has: "partage:tiers" }, text: "La Bastide, la Maison et le reste sont coupés en deux comme une miche : une moitié à Hector, qui fait déjà ses comptes, une moitié à Bérénice, qui fait déjà ses prières. Le juge a eu raison, et la justice n'y gagne presque rien." },
      { if: { all: [{ has: "hector:trinque" }, { has: "hector:tout" }] }, text: "Plus tard, en remontant en voiture, tu trouveras dans la poche de ta redingote une liasse de billets nouée d'un ruban rose, et tu ne sauras jamais à quel moment il l'y a glissée." },
      "Odile est montée faire sa malle. Quand elle redescend, elle a mis un chapeau gris et des gants gris, et elle tient à la main un tout petit flacon vide, en forme de goutte. Elle le montre à Brissac, comme on montre un billet de passage. Il fait oui de la tête, sans un mot. Elle s'en va à pied par l'allée des cyprès, vers la route de Grasse, et elle ne se retourne pas.",
      { if: { item: "lettre_odile" }, text: "Tu la rattrapes à la grille, et tu lui donnes l'enveloppe du coffret, *Pour Odile. Après.* Elle la regarde, regarde la maison, et la met dans sa poche sans l'ouvrir. « Après », dit-elle. Et elle s'en va." },
      { if: "enigme:p_journal", text: "Tu as le carnet vert dans ta poche. Tu ne le lui donnes pas. Tu n'en as pas le droit : il appartient à la succession, et la succession vient d'être partagée." },
      { if: { has: "jaume:confiance" }, text: "Jaume, à la grille, te glisse dans la main une graine d'iris, une seule, noire et ridée. « Pour la prochaine fois, dit-il. Elle disait qu'il y a toujours une prochaine fois. »" },
      "Jaume la regarde partir depuis la grille, son chapeau à la main.",
      "Maître Brissac range les papiers dans la chemise lilas, lentement, avec un soin de sacristain. Puis il s'arrête, la main sur le ruban. Il regarde la fenêtre. Au-dessus des collines, le ciel est rose, mais le soleil n'est pas encore là.",
      "« Six heures moins deux, dit-il. Le soleil se lève à six heures et une minute, ce matin. J'ai regardé l'almanach avant de partir. » Il se tourne vers toi, et il y a dans ses petits yeux gris une lueur que tu ne lui connaissais pas, une lueur de complice. « *Si le partage se fait avant l'aube.* Le partage s'est fait avant l'aube, mon ami. Elle l'avait prévu. Elle prévoyait tout. »",
      "Hector se retourne d'un bloc. Le soleil sort des collines. Il touche les champs d'iris, qui s'allument tous ensemble, violets, gris, blancs, des milliers de lames dressées dans la lumière.",
      "« Demain soir, dit Brissac, à six heures, on relira. Mot pour mot. Et tout recommence. » Il noue le ruban. « Lisez mieux. »",
    ] },
};
