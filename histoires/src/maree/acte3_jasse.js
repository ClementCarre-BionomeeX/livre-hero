// Les Fils de la Marée · act III, Jasse's night. Where Nella is decides the start (in the Tour, with or without the Mère
// Gouge's break-out; under the Temple's asylum; hidden in Bas-Port). Then two things before eleven (clock j3): the bronze
// key (still in the ponton's niche, or sold by Corentin tonight), the chain of the Passes (chaine=bloquee), the boats of
// Bas-Port (bp3=palais | digue), a man who wants a passage to Lisse (Léonce: temoin | parti | mort). At eleven, what he
// does with Nella: the palace (nella3=conseil, jasse3=vient), the reeds (nella=partie, jasse3=fuite), the water gate.
var PRISON = { has: "nella=prison" }, LIBRE = { has: "nella=libre" }, TEMPLE = { has: "nella=temple" };
var LEONCE_LA = { not: { is: { leonce: ["enfui", "mort", "temoin", "parti", "garde"] } } };
var FIN = { label: "Fin de la nuit de Jasse", fx: { flag: "ch3:jasse" }, back: "C3" };
module.exports = {
  J3: { branch: [
    { if: { all: [PRISON, { has: "evasion=prevue" }] }, fx: { until: 19 }, to: "J3E" },
    { if: PRISON, fx: { until: 19 }, to: "J3P" },
    { if: TEMPLE, fx: { until: 19 }, to: "J3T" },
    { fx: { until: 19 }, to: "J3L" },
  ] },

  // ================================================================ openings
  J3E: { act: "III", title: "La nièce de la Mère Gouge", place: "basport", ambiance: "eau",
    fx: { meet: "gouge" },
    text: [
      "À sept heures, la Mère Gouge te fait appeler. Dans l'arrière-salle de l'Ancre Basse, il y a une femme maigre aux mains rouges de lessive : la nièce, celle dont le mari garde la porte d'eau de la Tour.",
      "« À minuit, il ouvre la porte pour la barque des cuisines, comme chaque nuit. Il oubliera de la refermer. Il y a un garde au palier du deuxième étage. Lui, on n'a pas pu l'acheter. » La femme te regarde. « Mon mari fait ça pour la Mère. Si on le prend, on le pend. »",
      "La Mère Gouge pose sa main sur la tienne. « Tu as trois heures, passeur. Fais ce que tu as à faire. À onze heures, tu es à la porte d'eau, et tu n'en bouges plus. »",
      { if: { has: "sevan:pavot_garde" }, text: "La nièce ajoute, perplexe : « Le garde du palier, mon mari dit qu'un prêtre est passé lui parler. Il dit qu'il bâillait déjà en jouant aux dés. »" },
    ],
    choices: [{ label: "Trois heures", to: "J3_nuit" }] },
  J3P: { act: "III", title: "La Tour, d'en bas", place: "tour", ambiance: "eau",
    text: [
      "À sept heures, tu es dans ta barque, au pied de la Tour du Guet, côté lagune. Tu comptes les fenêtres. Deuxième étage, la quatrième. Il y a de la lumière.",
      "Tu n'as ni barques ni bras ni gardien acheté. Tu as une gaffe, un couteau, Petit Mo qui t'attend sur le quai, et cinq heures avant que la ville entière regarde ailleurs.",
      { if: { has: "j1:vu_nella" }, text: "Avant-hier, à cette même fenêtre, elle t'a fait un signe de la main, comme quand vous étiez petits et qu'elle partait au palais." },
      { if: { item: "acte_grace" }, text: "Tu as aussi, dans ta chemise, un acte de grâce signé de Morvan. Il dit que Nella sortira à l'aube, si Morvan est élu. Tu sais ce que vaut la parole de Morvan. Tu ne sais pas ce qu'elle vaut d'autre." },
    ],
    choices: [{ label: "Quatre heures", to: "J3_nuit" }] },
  J3T: { act: "III", title: "La coupole verte", place: "temple", ambiance: "temple",
    text: [
      "À sept heures, tu amarres ta barque au pied du Temple. Les frères ont allumé une lanterne à chaque fenêtre de la coupole. Elle ressemble à une méduse posée sur l'eau.",
      "Nella est là-dedans, sous l'asile. Ici, nul ne peut la prendre. Pour la faire sortir, il faut le Grand Prêtre. Anselme a dit qu'il l'emmènerait lui-même au palais, à minuit.",
      { if: { has: "nella:choisit_seule" }, text: "Gildas, le frère convers, descend te voir sur le quai. « Elle veut vous parler. Elle dit qu'elle ira au palais seule, sans le Grand Prêtre. Elle dit que c'est vous qui l'y mènerez. »" },
    ],
    choices: [{ label: "Penser à la nuit", to: "J3_nuit" }] },
  J3L: { act: "III", title: "Bas-Port aux lanternes", place: "basport", ambiance: "eau",
    text: [
      "À sept heures, Bas-Port allume ses lanternes, une par barque. Des centaines, sur l'eau haute, qui montent et descendent avec la houle. On dirait que le quartier respire.",
      { if: { has: "cache=gouge" }, text: "Nella descend de la soupente de la Mère Gouge en vêtements de batelière. Elle a noué ses cheveux dans un foulard. « Alors ? Qu'est-ce qu'on fait, ce soir ? »" },
      { if: { not: { has: "cache=gouge" } }, text: "Nella sort de sous la bâche de ta barque. Elle a les yeux de quelqu'un qui a compté les heures. « Alors ? Qu'est-ce qu'on fait, ce soir ? »" },
      { if: { has: "leurre:ok" }, text: "Mo porte encore à la ceinture le bonnet blanc de Nella, celui du leurre d'avant-hier. Il dit que c'est son porte-bonheur. Le Guet cherche toujours une servante du côté des marais salants." },
      { if: { has: "jasse_plan=conseil" }, text: "Tu lui as promis de la mener au palais. La secrétaire a promis de l'y recevoir. Tu ne sais pas laquelle des deux promesses est la plus fragile." },
      { if: { has: "fuite=prete" }, text: "Il y a une barque cachée à la Fente des roseaux, avec de l'eau, du pain, une voile. Tu y as pensé toute la journée." },
    ],
    choices: [{ label: "« J'ai quatre heures pour décider. Attends-moi. »", to: "J3_nuit" }] },

  // ================================================================ the night (two things before eleven)
  J3_nuit: { act: "III", title: "Quatre heures", hub: true, noLead: true, backName: "la nuit",
    text: [
      { first: true, text: "Tu pousses ta barque dans les canaux aux lanternes. Tout va vers le palais. Toi, tu vas où il faut." },
      { if: { clock: "j3", min: 1, max: 1 }, text: "Les cloches sonnent huit heures. Tu as encore le temps de trois choses." },
      { if: { clock: "j3", min: 2, max: 2 }, text: "Les cloches sonnent neuf heures. Tu as encore le temps de deux choses." },
      { if: { clock: "j3", min: 3, max: 3 }, text: "Les cloches sonnent dix heures. Il te reste le temps d'une chose." },
      { if: { has: "jasse:suivi" }, text: "Une barque grise te suit depuis le matin, à distance, avec un homme qui ne rame pas. L'homme de Morvan. Tu le sèmes dans les petits canaux, et chaque fois il revient." },
      { if: { has: "ysabeau=allie" }, text: "Une barque du Guet file vers le palais, quatre hallebardiers à bord. Le Guet a choisi un camp, ce soir. Tu n'aurais pas cru dire ça un jour avec soulagement." },
      { if: { has: "leonce=temoin" }, text: "Sur le quai des Sels, tu vois passer Sévan Aldric, le médecin, avec un homme enveloppé dans un manteau de pêcheur, qui tremble. Ils vont au palais." },
    ],
    choices: [
      { label: "La clef de bronze, que tu as laissée dans la niche de la Vierge du ponton", if: { all: [{ has: "clef3=jasse" }, { has: "clef3_ou=niche" }] }, hide: { not: { all: [{ has: "clef3=jasse" }, { has: "clef3_ou=niche" }] } }, to: "J3_ponton" },
      { label: "Corentin, qui doit vendre la clef ce soir", if: { has: "clef3=corentin" }, hide: { not: { has: "clef3=corentin" } }, to: "J3_corentin" },
      { label: "La tour de la Chaîne", if: { has: "jasse:sait_chaine" }, why: "Il faudrait savoir ce qui se prépare aux Passes.", hide: { has: "jasse:chaine3" }, to: "J3_chaine" },
      { label: "La Mère Gouge, et les barques de Bas-Port", hide: { has: "jasse:gouge3" }, to: "J3_gouge" },
      { label: "Un homme, à la Fente, qui cherche un passeur pour Lisse", if: LEONCE_LA, hide: { any: [{ not: LEONCE_LA }, { has: "jasse:leonce3" }] }, to: "J3_leonce" },
      { label: "Le Temple, où Nella attend", if: TEMPLE, hide: { any: [{ not: TEMPLE }, { has: "jasse:temple3" }] }, to: "J3_temple" },
      { label: "Petit Mo : lui faire porter un mot au palais, pour la secrétaire", hide: { has: "jasse:mo3" }, to: "J3_mo" },
      { label: "Remonter le Grand Canal au milieu des barques, et écouter la ville", hide: { has: "jasse:canal3" }, to: "J3_canal" },
      { label: "Amarrer ta barque sous le pont des Sels, et attendre onze heures", hide: { clock: "j3", max: 2 }, fx: { until: 23 }, to: "J3_fin" },
    ] },
  J3_suite: { branch: [
    { if: { clock: "j3", min: 4 }, fx: { until: 23 }, to: "J3_fin" },
    { if: { clock: "j3", min: 3 }, fx: { until: 22 }, to: "J3_nuit" },
    { if: { clock: "j3", min: 2 }, fx: { until: 21 }, to: "J3_nuit" },
    { fx: { until: 20 }, to: "J3_nuit" },
  ] },

  // ---------------------------------------------------------------- Mo, the Grand Canal
  J3_mo: { act: "III", title: "Le messager", place: "basport", ambiance: "eau",
    fx: { meet: "mo", clock: { j3: 1 }, flag: "jasse:mo3" },
    text: [
      "Mo t'attend sur la passerelle des Vanniers, les pieds dans l'eau, un gâteau de fête dans chaque main. Il en mange un. Il te tend l'autre.",
      "« Un mot pour la secrétaire, au palais ? Je passe par les gouttières. Les gardes ne regardent jamais en haut. »",
      "Tu as le temps de lui faire apprendre une phrase par cœur. Une seule : Mo retient tout, mais seulement une chose à la fois.",
    ],
    choices: [
      { label: "« Dis-lui que la chaîne des Passes doit descendre cette nuit, et que la flotte attend. »", if: { has: "jasse:sait_chaine" }, why: "Tu ne sais rien de la chaîne.", fx: { flag: "mo:chaine" }, to: "J3_mo_part" },
      { label: "« Dis-lui que Nella viendra au palais, et qu'il faut lui garder une place. »", fx: { flag: "mo:nella" }, to: "J3_mo_part" },
      { label: "« Dis-lui que Bas-Port la regarde. »", fx: { flag: "mo:basport", clock: { voix: 1 } }, to: "J3_mo_part" },
    ] },
  J3_mo_part: { act: "III", title: "Les gouttières", place: "basport",
    text: [
      "Mo répète la phrase trois fois, en mâchant son gâteau. Puis il part en courant sur le rebord des façades, de toit en toit, une ombre maigre sur le ciel plein de lanternes.",
      "Tu le perds de vue au pont des Pénitents. Il arrivera. Il arrive toujours.",
    ],
    choices: [{ label: "Reprendre ta gaffe", to: "J3_suite" }] },
  J3_canal: { act: "III", title: "Le Grand Canal", place: "palais", ambiance: "eau",
    fx: { clock: { j3: 1 }, flag: "jasse:canal3" },
    text: [
      "Tu laisses ta barque dériver dans le flot des familles. On se passe des gâteaux, des cruches, des nouvelles. Toute la ville parle de la même chose.",
      { if: { has: "basport=souleve" }, text: "On parle de Bas-Port et de ses trois cents barques. Les gens des beaux quartiers les comptent avec inquiétude. Un marchand de soie dit qu'il a fait monter ses fils au grenier, avec des seaux d'eau." },
      { if: { has: "leonce=temoin" }, text: "On dit qu'un homme de la Maison des Sels va parler au Conseil, ce soir. On ne sait pas lequel. On parie." },
      { if: { has: "ysabeau=allie" }, text: "On dit que la capitaine du Guet a doublé la garde du palais, et qu'elle ne l'a jamais fait pour un vote." },
      { if: { has: "oriane=pacte" }, text: "On dit que la secrétaire sera Doyenne, que c'est arrangé, que Morvan lui a offert des perles." },
      { if: { not: { has: "oriane=pacte" } }, text: "On dit que la secrétaire veut le siège, toute seule, et qu'elle n'aura jamais les voix." },
      "Une vieille femme, dans la barque d'à côté, te reconnaît. « Le frère de la servante. » Elle te touche le bras, pour la chance. Personne ne t'a jamais touché pour la chance.",
    ],
    choices: [{ label: "Laisser le courant te ramener vers Bas-Port", to: "J3_suite" }] },

  // ---------------------------------------------------------------- the key in the niche
  J3_ponton: { act: "III", title: "La Vierge du ponton", place: "ponton", ambiance: "eau",
    fx: { clock: { j3: 1 } },
    text: [
      "Le ponton des Noyés est désert. Tout le monde est au palais. La petite Vierge de bois peint, dans sa niche, a une lanterne à ses pieds que quelqu'un a allumée pour elle.",
      "Tu glisses la main derrière la statue. Le ruban est là, humide, avec quelque chose de lourd cousu dedans, à l'endroit où tu l'as remis il y a deux jours. Personne ne l'a cherché ici.",
    ],
    choices: [{ label: "Prendre le ruban", fx: { set: { clef3_ou: "jasse" }, item: "clef_bronze" }, to: "J3_suite" }] },

  // ---------------------------------------------------------------- Corentin sells the key
  J3_corentin: { act: "III", title: "Le quai des Sels", place: "sels", ambiance: "ville",
    fx: { clock: { j3: 1 } },
    text: [
      "Mo t'a dit où et quand : sous le pont de la Maison des Sels, à neuf heures et demie. Tu y es à neuf heures, couché au fond de ta barque sous une bâche.",
      "Corentin arrive à l'heure. Il a les mains dans les poches. Un homme de la Maison des Sels l'attend en haut des marches, avec une bourse.",
      { if: { has: "corentin=repenti" }, text: "Corentin regarde l'homme, regarde la bourse. Au lieu de descendre les marches, il les remonte, et tu comprends qu'il est venu pour la reprendre, pas pour la vendre." },
    ],
    choices: [
      { label: "Te montrer. « Cor. Ne fais pas ça. »", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { set: { clef3: "jasse", corentin: "repenti" }, item: "clef_bronze" }, to: "J3_corentin_rend" },
        lose: { to: "J3_corentin_combat" } },
      { label: "Attendre l'échange, puis prendre la bourse et la clef en même temps", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { set: { clef3: "jasse" }, item: "clef_bronze", gold: 40 }, to: "J3_corentin_vol" },
        lose: { fx: { set: { clef3: "morvan" } }, to: "J3_corentin_perdu" } },
    ] },
  J3_corentin_rend: { act: "III", title: "Le ruban", place: "sels",
    text: [
      "Corentin te voit. Il reste sur la marche, la main dans la poche, longtemps.",
      "Puis il sort le ruban et te le lance. Tu l'attrapes au vol, comme vous faisiez enfants avec les pièces qu'on jetait aux noyés.",
      "« Cinq cents ducats, Jasse. Tu sais ce que c'est, cinq cents ducats ? » Il redescend vers toi. « Non. Toi tu ne sais pas. C'est pour ça que tu es mon ami. » Il monte dans ta barque. « Où on va ? »",
    ],
    choices: [{ label: "« Au palais, après. Pour l'instant, rame. »", fx: { flag: "corentin:avec_jasse" }, to: "J3_suite" }] },
  J3_corentin_combat: { act: "III", title: "Sous le pont", place: "sels",
    combat: { title: "Corentin", enemies: [{ id: "corentin", n: 1 }], terrain: "eau",
      win: { fx: { set: { clef3: "jasse" }, item: "clef_bronze", ep: 300 }, to: "J3_corentin_battu" },
      lose: { fx: { set: { clef3: "morvan", jasse_blesse: "corentin" } }, to: "J3_corentin_perdu" },
      flee: { label: "Lâcher prise et plonger", dom: "nature", diff: 0, fx: { set: { clef3: "morvan" } }, to: "J3_corentin_perdu" } },
    text: [
      "Corentin te regarde, puis regarde l'homme en haut des marches. « Trop tard, Jasse. » Tu sautes sur le quai. Il sort son couteau. Vous avez appris à vous battre ensemble, sur les mêmes quais.",
    ] },
  J3_corentin_battu: { act: "III", title: "Le quai", place: "sels",
    text: [
      "Corentin est assis sur la dernière marche, la main sur sa cuisse qui saigne. L'homme de la Maison des Sels a disparu avec sa bourse.",
      "Tu tiens le ruban. Il ne te regarde pas. « Va. Va donc la sauver, ta sœur qui n'est pas ta sœur. »",
    ],
    choices: [{ label: "Le laisser là", fx: { set: { corentin: "chasse" } }, to: "J3_suite" }] },
  J3_corentin_vol: { act: "III", title: "L'échange", place: "sels",
    text: [
      "Corentin tend le ruban. L'homme tend la bourse. Les deux mains sont au-dessus de l'eau, au-dessus de ta bâche.",
      "Tu te lèves d'un coup. Ta main droite prend le ruban, ta main gauche la bourse, et ta barque est déjà sous l'arche suivante quand les deux hommes comprennent ce qu'ils n'ont plus.",
      "Tu entends Corentin rire derrière toi. Il rit longtemps.",
    ],
    choices: [{ label: "Ramer", to: "J3_suite" }] },
  J3_corentin_perdu: { act: "III", title: "La bourse", place: "sels",
    text: [
      "Tu te retrouves dans l'eau du canal, sous le pont. Quand tu remontes, l'homme de la Maison des Sels s'éloigne avec le ruban, et Corentin compte sa bourse sur la marche, sans te regarder.",
      "La troisième clef est chez Morvan.",
    ],
    choices: [{ label: "Remonter dans ta barque", fx: { set: { corentin: "traitre" } }, to: "J3_suite" }] },

  // ---------------------------------------------------------------- the chain
  J3_chaine: { act: "III", title: "La tour de la Chaîne", place: "chaine", ambiance: "eau",
    fx: { clock: { j3: 1 }, flag: "jasse:chaine3" },
    text: [
      "La tour de la Chaîne est au bout de la digue, face aux Passes. Au large, sur l'eau noire, il y a quarante lanternes qui ne bougent pas, en ligne, comme une deuxième digue. La flotte d'Orcanne attend.",
      "La chaîne sort de la tour par une arche, grosse comme la cuisse d'un homme, et plonge dans la passe. Pour la baisser, il faut un treuil, six hommes, et un ordre.",
      { if: { any: [{ has: "ysabeau:chaine_sevan" }, { has: "ysabeau:chaine_oriane" }] }, text: "Devant la porte, il y a déjà quatre hallebardiers du Guet, la tour noire sur la poitrine. Quelqu'un a prévenu la capitaine." },
      { if: { not: { any: [{ has: "ysabeau:chaine_sevan" }, { has: "ysabeau:chaine_oriane" }] } }, text: "Devant la porte, deux gardes de la tour jouent aux cartes. Ils sont payés par le Conseil. Ce soir, ils attendent un ordre." },
    ],
    choices: [
      { label: "Te glisser sous l'arche et bloquer le treuil avec ta gaffe et un coin de fer", if: { not: { any: [{ has: "ysabeau:chaine_sevan" }, { has: "ysabeau:chaine_oriane" }] } }, why: "Le Guet garde déjà la chaîne.",
        test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { set: { chaine: "bloquee" }, drop: "gaffe", ep: 300 }, to: "J3_chaine_bloquee" },
        lose: { to: "J3_chaine_combat" } },
      { label: "Parler aux hallebardiers du Guet : leur dire ce que tu sais", if: { any: [{ has: "ysabeau:chaine_sevan" }, { has: "ysabeau:chaine_oriane" }] }, why: "Il n'y a pas d'homme du Guet ici.",
        fx: { set: { chaine: "gardee" } }, to: "J3_chaine_guet" },
      { label: "Repartir", to: "J3_suite" },
    ] },
  J3_chaine_bloquee: { act: "III", title: "Le treuil", place: "chaine",
    text: [
      "Tu passes sous l'arche à la nage, dans l'eau froide qui sent le fer. Le treuil est là, une roue de chêne grande comme une barque. Tu enfonces ta gaffe entre deux rayons et le coin de fer dans l'engrenage, à coups de pierre, entre deux rires des gardes.",
      "Personne ne baissera la chaîne cette nuit sans une heure de travail et un forgeron.",
    ],
    choices: [{ label: "Repartir à la nage", to: "J3_suite" }] },
  J3_chaine_combat: { act: "III", title: "Les gardes de la tour", place: "chaine",
    combat: { title: "Les gardes de la Chaîne", enemies: [{ id: "garde", n: 2 }], terrain: "eau",
      win: { fx: { set: { chaine: "bloquee" }, ep: 300 }, to: "J3_chaine_bloquee" },
      lose: { fx: { set: { jasse_blesse: "chaine" } }, to: "J3_chaine_rate" },
      flee: { label: "Plonger dans la passe", dom: "nature", diff: 0, to: "J3_chaine_rate" } },
    text: [
      "Un des gardes lève les yeux de ses cartes au moment où tu sors de l'eau. « Hé ! »",
    ] },
  J3_chaine_rate: { act: "III", title: "La passe", place: "chaine",
    text: [
      "Tu nages dans le courant de la passe, qui te tire vers le large, vers les quarante lanternes. Tu t'agrippes à un pieu de la digue. Tu remontes, tu craches, tu comptes tes membres.",
      "Le treuil est intact. Les gardes ont doublé la lanterne de la porte.",
    ],
    choices: [{ label: "Rejoindre ta barque", to: "J3_suite" }] },
  J3_chaine_guet: { act: "III", title: "Les hallebardiers", place: "chaine",
    text: [
      "Le sergent du Guet t'écoute, un passeur trempé qui parle d'un ordre signé et d'une flotte. Il regarde les quarante lanternes au large. Il ne rit pas.",
      "« La capitaine nous a dit : personne ne touche au treuil, quel que soit l'ordre, quel que soit le sceau. » Il crache dans l'eau. « Pour une fois, je suis content d'obéir. »",
    ],
    choices: [{ label: "Repartir", to: "J3_suite" }] },

  // ---------------------------------------------------------------- the boats of Bas-Port
  J3_gouge: { act: "III", title: "L'Ancre Basse", place: "basport", ambiance: "eau",
    fx: { meet: "gouge", clock: { j3: 1 }, flag: "jasse:gouge3" },
    text: [
      "L'Ancre Basse est pleine d'hommes et de femmes debout, des gaffes à la main. Personne ne boit. La Mère Gouge est assise sur sa table, les pieds dans l'eau qui couvre le plancher.",
      { if: { has: "basport=souleve" }, text: "« Trois cents barques, passeur. Elles attendent un mot. Le mien, ou le tien. » Elle montre la porte, et la lagune noire, et le palais illuminé au fond. « Dis-moi où tu les veux. »" },
      { if: { not: { has: "basport=souleve" } }, text: "« Il y a quarante barques prêtes. Pas plus. Bas-Port a peur. » Elle hausse les épaules. « Quarante barques, c'est déjà beaucoup de lanternes. Dis-moi où tu les veux. »" },
      { if: { has: "gouge:sait_nella" }, text: "Elle baisse la voix. « Et dis à la petite que sa grand-mère sera devant le palais. Qu'elle lève la tête. »" },
    ],
    choices: [
      { label: "« Devant le palais. Toutes. Qu'ils votent en nous regardant. »", fx: { set: { bp3: "palais" } }, to: "J3_gouge_palais", big: true },
      { label: "« Sur la digue. Pas plus loin. Si une seule barque touche le palais, le Guet tire. »", fx: { set: { bp3: "digue" } }, to: "J3_gouge_digue", big: true },
    ] },
  J3_gouge_palais: { act: "III", title: "Le mot", place: "basport",
    text: [
      "La Mère Gouge se lève sur sa table, dans l'eau jusqu'aux chevilles. Sans élever la voix, elle dit : « Au palais. »",
      "Les hommes sortent. En dix minutes, les canaux de Bas-Port se vident vers le Grand Canal, une lanterne par barque, et la lagune devant le palais se couvre d'une deuxième ville, flottante, silencieuse.",
      { if: { has: "basport=souleve" }, text: "Tu vois des gaffes, des haches de calfat, un harpon. Tu vois aussi des enfants. C'est cela qui t'inquiète le plus." },
    ],
    choices: [{ label: "Repartir", to: "J3_suite" }] },
  J3_gouge_digue: { act: "III", title: "La digue", place: "basport",
    text: [
      "La Mère Gouge te regarde un long moment. « Ton père aurait dit la même chose. Il avait peur des soldats. Il avait raison. »",
      "Les barques sortent et vont s'aligner le long de la digue, face au palais, à portée de voix mais hors de portée d'arbalète. Une ligne de lumière sur l'eau. Le palais la verra de toutes ses fenêtres.",
    ],
    choices: [{ label: "Repartir", to: "J3_suite" }] },

  // ---------------------------------------------------------------- the man who wants to go to Lisse
  J3_leonce: { act: "III", title: "Le client de la Fente", place: "basport", ambiance: "eau",
    fx: { meet: "leonce", clock: { j3: 1 }, flag: "jasse:leonce3" },
    text: [
      "Mo te tire par la manche. « Il y a un bourgeois à la Fente. Il paie triple pour Lisse. Il a une malle, et il a peur. »",
      "L'homme attend au bout du ponton des roseaux, assis sur sa malle, un manteau trop beau pour Bas-Port. Quand tu approches ta barque, il te tend une bourse avant de dire bonjour. Tu le reconnais : l'apothicaire de la Maison des Sels, Léonce Brisard. Les crieurs ont dit son nom hier, avec ceux qu'on cherchait pour la Doyenne.",
      "« Lisse. Tout de suite. Je paie ce que vous voulez. »",
    ],
    choices: [
      { label: "« Au palais d'abord. Tu diras ce que tu sais devant le Conseil, et je te mènerai à Lisse après. »", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { set: { leonce: "temoin" }, clock: { preuves: 1 } }, to: "J3_leonce_palais" },
        lose: { fx: { set: { leonce: "parti" } }, to: "J3_leonce_fuit" } },
      { label: "Prendre l'argent et le mener à Lisse par les roseaux", fx: { set: { leonce: "parti" }, gold: 30, clock: { j3: 1 } }, to: "J3_leonce_lisse" },
      { label: "Le livrer aux neveux de la Mère Gouge, qui savent qui a empoisonné la Doyenne", fx: { set: { leonce: "mort" }, flag: "jasse:leonce_noye" }, to: "J3_leonce_noye" },
    ] },
  J3_leonce_palais: { act: "III", title: "La malle", place: "basport",
    text: [
      "Léonce te regarde, puis regarde les roseaux noirs, puis toi. « Ils m'attendent aussi sur la route de Lisse. Je le sais. » Il pousse sa malle dans l'eau, d'un coup de pied. Elle flotte un moment, puis coule. « Au palais. Mais vous restez à côté de moi. »",
    ],
    choices: [{ label: "Le faire monter", to: "J3_suite" }] },
  J3_leonce_fuit: { act: "III", title: "Les roseaux", place: "basport",
    text: [
      "Léonce reprend sa bourse et recule. « Vous êtes avec eux. Tous. » Il s'enfuit le long du ponton, avec sa malle qui cogne. Une autre barque le prend un peu plus loin, pour moins cher.",
    ],
    choices: [{ label: "Le laisser", to: "J3_suite" }] },
  J3_leonce_lisse: { act: "III", title: "La Fente", place: "basport", ambiance: "eau",
    text: [
      "Tu le passes par la Fente, entre les roseaux, sans lanterne. Il parle tout le long. De sa sœur à Lisse, de son commerce, du blanc d'Orcanne qu'il préparait sans savoir, puis en sachant, puis sans plus y penser. Il te paie sur l'autre rive, en pleurant.",
      "Tu reviens seul. Tu as perdu une heure, et la ville a perdu un témoin.",
    ],
    choices: [{ label: "Revenir vers les lanternes", to: "J3_suite" }] },
  J3_leonce_noye: { act: "III", title: "Les neveux", place: "basport", ambiance: "eau",
    text: [
      "Tu dis seulement : « C'est lui. L'apothicaire du sel. » Les deux neveux de la Mère Gouge se lèvent du banc où ils réparaient un filet.",
      "Léonce comprend avant toi. Il essaie de courir. Le ponton des roseaux est long et étroit.",
      "Tu ne regardes pas. Tu entends l'eau. Puis plus rien. Les neveux reviennent s'asseoir et reprennent leur filet.",
    ],
    choices: [{ label: "Partir", to: "J3_suite" }] },

  // ---------------------------------------------------------------- the Temple
  J3_temple: { act: "III", title: "Sous la coupole", place: "temple", ambiance: "temple",
    fx: { meet: "nella", clock: { j3: 1 }, flag: "jasse:temple3" },
    text: [
      "Gildas te fait entrer par la porte des morts. Nella est dans la chapelle des Noyés, entre deux frères qui somnolent.",
      "Elle se jette contre toi. Puis elle recule. « Le Grand Prêtre veut me montrer au Conseil comme une relique. Il dit que je dois me taire et le laisser parler. »",
      { if: { any: [{ has: "nella_sait=sevan" }, { has: "nella_sait=oriane" }] }, text: "« Je sais qui était ma mère, Jasse. On me l'a dit. » Elle te regarde. « Tu le savais ? »" },
    ],
    choices: [
      { label: "« Alors on sort d'ici ensemble, et tu iras au palais à ma droite, pas à la sienne. »", fx: { set: { nella: "libre" }, flag: "nella:quitte_temple" }, to: "J3_temple_sortie", big: true },
      { label: "« Reste. L'asile te protège mieux que moi. Il te mènera au palais, et tu parleras là-bas. »", fx: { set: { nella3: "anselme" } }, to: "J3_temple_reste" },
    ] },
  J3_temple_sortie: { act: "III", title: "La porte des morts", place: "temple",
    text: [
      "Vous sortez par la porte des morts, celle par où l'hospice rend ses défunts à la lagune. Gildas la referme derrière vous, en se signant.",
      "Dans ta barque, Nella retire le voile de novice qu'on lui avait donné et le jette à l'eau.",
    ],
    choices: [{ label: "Ramer", to: "J3_suite" }] },
  J3_temple_reste: { act: "III", title: "L'asile", place: "temple",
    text: [
      "Nella hoche la tête, lentement. « Tu seras là ? Au palais ? — Je serai là. »",
      "Elle se rassied entre les deux frères. Tu ressors par la porte des morts, et tu sens dans ton dos qu'elle te regarde partir.",
    ],
    choices: [{ label: "Repartir", to: "J3_suite" }] },

  // ================================================================ eleven o'clock
  J3_fin: { branch: [
    { if: { all: [PRISON, { has: "evasion=prevue" }] }, to: "J3_fin_eau" },
    { if: PRISON, to: "J3_fin_tour" },
    { if: { has: "nella3=anselme" }, to: "J3_fin_seul" },
    { to: "J3_fin_libre" },
  ] },
  J3_fin_eau: { act: "III", title: "La porte d'eau", place: "tour", ambiance: "eau",
    text: [
      "À onze heures, tu es au pied de la Tour, côté lagune, dans une barque plate de la Mère Gouge. Deux neveux rament. La porte d'eau est fermée, une grille noire au ras de l'eau.",
      { if: { has: "sv3=tour" }, text: "Il y a quelqu'un dans l'ombre du mur, sur la petite jetée : un homme en robe, une sacoche contre la poitrine. Le médecin. Il te fait un signe. « Si elle est blessée, je suis là. »" },
      "À minuit, la grande lanterne s'allumera sur la tour du palais, et tout le Guet la regardera.",
    ],
    choices: [
      { label: "Attendre minuit, et entrer", to: "J3_evasion" },
    ] },
  J3_evasion: { act: "III", title: "Minuit, la porte d'eau", place: "tour", ambiance: "eau",
    text: [
      "Minuit. Sur la tour du palais, une lumière immense s'allume. Toute la lagune pousse un cri. Le gardien de la porte d'eau tire sa grille pour la barque des cuisines, et oublie de la refermer.",
      "Tu entres. L'escalier de service. Le deuxième étage.",
      { if: { has: "sevan:pavot_garde" }, text: "Le garde du palier dort sur sa chaise, la bouche ouverte, la cruche renversée. Il ronfle comme un enfant." },
      { if: { not: { has: "sevan:pavot_garde" } }, text: "Le garde du palier est debout. Il est jeune, il ne boit pas, et il te voit." },
    ],
    choices: [
      { label: "Ouvrir la cellule", if: { has: "sevan:pavot_garde" }, why: "Le garde est debout.", fx: { set: { nella: "libre" }, flag: "jasse:evasion" }, to: "J3_evasion_ok" },
      { label: "Le garde : le faire taire", hide: { has: "sevan:pavot_garde" }, test: { dom: "combat", diff: 0, label: "Combat" },
        win: { fx: { set: { nella: "libre" }, flag: "jasse:evasion" }, to: "J3_evasion_ok" },
        lose: { fx: { set: { jasse3: "pris" } }, to: "J3_evasion_rate" } },
    ] },
  J3_evasion_ok: { act: "III", title: "Dehors", place: "tour", ambiance: "eau",
    text: [
      "Nella est déjà debout derrière sa porte. Elle n'a rien pris, rien à prendre. Vous descendez l'escalier de service en vous tenant la main, comme enfants dans le noir du grenier des Ferrant.",
      "La barque plate. Les neveux qui rament. La grille qui se referme derrière vous. Au-dessus, sur la lagune, la grande lanterne du palais brûle pour personne.",
      { if: { has: "jasse:promis" }, text: "« Tu avais dit demain soir, dit-elle. Pour une fois, ta bêtise tombe à l'heure. »" },
      "Nella respire l'air de la nuit. « Et maintenant ? »",
    ],
    choices: [
      { label: "« Au palais. Tu vas leur dire qui t'a mise là. »", fx: { set: { nella3: "conseil", jasse3: "vient" } }, to: "J3_vers_palais", big: true },
      { label: "« Vers Lisse. Par la lagune, avec les neveux. On part. »", fx: { set: { nella: "partie", jasse3: "fuite" } }, to: "J3_fente", big: true },
    ] },
  J3_evasion_rate: { act: "III", title: "Le palier", place: "tour",
    text: [
      "Le garde crie avant de tomber. Les autres montent. Tu te bats dans l'escalier, contre trois, puis quatre. Derrière sa porte, Nella t'appelle.",
      { if: { has: "jasse:promis" }, text: "Tu lui avais promis. Tu entends sa voix à travers la porte, qui dit ton nom, puis qui dit : « Je t'avais dit de ne pas faire de bêtise. »" },
      "On te traîne dans une cellule du rez-de-chaussée. On te lie les mains. Au-dessus, sur la lagune, tu vois par le soupirail la grande lanterne brûler.",
    ],
    choices: [FIN] },
  J3_fin_tour: { act: "III", title: "Le pied de la Tour", place: "tour", ambiance: "eau",
    text: [
      "À onze heures, tu es revenu au pied de la Tour. Tu as regardé tous les murs. Tu n'as trouvé aucune porte.",
      { if: { item: "acte_grace" }, text: "Tu tâtes l'acte de grâce de Morvan, dans ta chemise. Si Morvan est élu, elle sort à l'aube. Si Morvan est élu." },
    ],
    choices: [
      { label: "Escalader la façade jusqu'au deuxième étage, seul", test: { dom: "discretion", diff: -20, label: "Escalade" },
        win: { fx: { set: { nella: "libre" }, flag: "jasse:evasion" }, to: "J3_evasion_ok" },
        lose: { fx: { set: { jasse3: "pris" } }, to: "J3_evasion_rate" } },
      { label: "Aller au palais, et le dire devant tout le monde", fx: { set: { jasse3: "vient" } }, to: "J3_vers_palais", big: true },
    ] },
  J3_fin_seul: { act: "III", title: "Onze heures", place: "basport", ambiance: "eau",
    text: [
      "À onze heures, Nella est sous la coupole, et elle ira au palais derrière la mitre d'Anselme. Toi, tu as ta barque, et ce que tu as fait de ta nuit.",
    ],
    choices: [
      { label: "Au palais. Être là quand elle entrera", fx: { set: { jasse3: "vient" } }, to: "J3_vers_palais", big: true },
    ] },
  J3_fin_libre: { act: "III", title: "Onze heures", place: "basport", ambiance: "eau",
    text: [
      "À onze heures, tu reviens à Bas-Port. Nella t'attend sur le ponton, le foulard noué, les mains serrées.",
      { if: { has: "clef3=jasse" }, text: "Tu sors le ruban de ta chemise et tu le lui mets dans la main. « Elle te l'a donné. C'est à toi de l'apporter. »" },
      { if: { has: "bp3=palais" }, text: "Derrière elle, les barques de Bas-Port glissent vers le palais, une lanterne chacune. La lagune entière bouge." },
      "« Où on va, Jasse ? »",
    ],
    choices: [
      { label: "« Au palais. Ensemble. »", fx: { set: { nella3: "conseil", jasse3: "vient" } }, to: "J3_vers_palais", big: true },
      { label: "« À la Fente. On part ce soir. Personne ne pendra personne. »", if: { has: "fuite=prete" }, why: "Il n'y a pas de barque prête pour partir.", fx: { set: { nella: "partie", jasse3: "fuite" } }, to: "J3_fente", big: true },
      { label: "« Toi, tu restes cachée. Moi, je vais au palais. »", fx: { set: { jasse3: "vient" } }, to: "J3_vers_palais" },
    ] },
  J3_vers_palais: { act: "III", title: "Le Grand Canal", place: "palais", ambiance: "eau",
    text: [
      "Tu remontes le Grand Canal dans le flot des barques. Les lanternes se touchent, les coques cognent, des inconnus te passent des gâteaux de fête par-dessus les bordages.",
      { if: { has: "nella3=conseil" }, text: "Nella est assise à l'avant, le dos droit. Elle tient le ruban serré dans son poing. Les gens de Bas-Port la reconnaissent. Ils se taisent quand elle passe, et ôtent leur bonnet." },
      { if: { has: "corentin:avec_jasse" }, text: "Corentin rame à côté de toi, comme autrefois. Il se tait. Il rame bien." },
      { if: { has: "leonce=temoin" }, text: "L'apothicaire est recroquevillé au fond de la barque, sous une bâche. Il tremble à chaque lanterne." },
      "Au bout du canal, le palais, illuminé de la cave au toit, les pieds dans l'eau.",
    ],
    choices: [FIN] },
  J3_fente: { act: "III", title: "La Fente des roseaux", place: "basport", ambiance: "eau",
    text: [
      "La barque est là où tu l'as cachée, sous les roseaux, avec l'eau, le pain, la voile roulée. Nella monte la première. Tu pousses.",
      "La Fente est un couloir d'eau noire entre deux murs de roseaux plus hauts qu'un homme. Derrière vous, la lumière d'Escalombre s'éloigne, une ville en feu de lanternes. Devant vous, la mer ouverte et la nuit.",
      { if: { has: "jasse:suivi" }, text: "À l'entrée de la Fente, la barque grise de l'homme de Morvan attend, immobile. Il vous regarde passer et reste où il est. Ce qu'il dira à son maître, tu ne le sauras jamais." },
      "Nella regarde en arrière jusqu'à ce qu'il n'y ait plus rien à regarder.",
    ],
    choices: [FIN] },
};
