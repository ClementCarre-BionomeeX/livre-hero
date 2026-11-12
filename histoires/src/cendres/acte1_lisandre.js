// Act I · road of Lisandre, in two chapters. Chapter 1, "La ballade commandée": the queen's court at Vasselin, a ballad
// ordered for the Fête des Noms, the man in grey who brings the "facts", a letter in the queen's cabinet, Ilan come back
// with the envoys of Corvanne, a rival singer. Chapter 2, "Le cortège": the road to Pallanche with the court, the queen
// at night, and the rehearsal in the black tower before the Greffier-Majeur.
var LI = { place: "vasselin", noLead: true };
function P(o) { return Object.assign({ act: "I" }, LI, o); }
var ROAD = { place: null, noLead: true };
function R(o) { return Object.assign({ act: "I" }, ROAD, o); }
module.exports = {
  // ================================================================ chapter 1 · la ballade commandée
  LI_matin: P({ title: "Le palais de Vasselin",
    fx: { questSeen: "LI_ballade" },
    text: [
      "Tu te réveilles à dix heures, comme une dame, dans une chambre qui donne sur le port. Les mâts des navires de Corvanne, venus pour les pourparlers de paix, se balancent au-dessus des toits comme une forêt sans feuilles. Il fait déjà chaud. Une servante a posé sur ta table du lait d'amande, des figues et un billet plié, cacheté de rouge.",
      "*La Reine attend Dame Lisandre à midi, dans le jardin des citronniers.*",
      "Tu as vingt-six ans. Tu chantes pour la cour d'Esquarre depuis l'âge de douze ans, et pour la reine en particulier, et parfois, quand la reine le demande, tu écoutes aux portes. Tu le fais très bien. Mieux que tu ne chantes, pensent certains. Ceux-là ne t'ont jamais entendue chanter.",
    ],
    choices: [{ label: "S'habiller pour la reine", to: "LI_reine" }] }),

  LI_reine: P({ title: "Le jardin des citronniers",
    fx: { meet: "isaure" },
    text: [
      "Isaure d'Esquarre a cinquante ans et l'air d'en avoir quarante, sauf aux mains. Elle est assise à l'ombre, avec ses dames, un livre fermé sur les genoux. Elle te tend la main à baiser sans te regarder, puis te regarde, et te sourit, et pendant une seconde, tu vois qu'elle cherche ton nom.",
      "« Lisandre. » Elle l'a trouvé. « Je veux une ballade pour la Fête des Noms. Tu la chanteras à Pallanche, la Nuit des Cloches, dans la grande salle de la Chancellerie, devant le Grand Livre. Une ballade sur Hautvent. »",
      "Tu ne sais pas ce qu'est Hautvent. Elle le voit. « Un village de la frontière. Des tisserands qui ont vendu le royaume à Corvanne pour du sel et de la laine. Ils seront jugés à la Fête. Le royaume doit savoir pourquoi. Le Frère Orlan te donnera les faits. »",
      "Elle rouvre son livre. L'audience est finie. Une de ses dames, Ermengarde, te raccompagne jusqu'à l'allée. Elle te dit très bas : « Elle a oublié le nom de son fils, hier, au souper. Le prince Aymeric. Il est mort depuis dix ans. Elle a demandé qui c'était, sur le portrait. »",
    ],
    choices: [{ label: "Saluer, et sortir du jardin", to: "LI_cour" }] }),

  LI_cour: P({ title: "La cour", hub: true,
    text: [
      "Le palais de Vasselin, quatre jours avant la Fête. La cour fait ses malles pour Pallanche. On plie les tapisseries, on emballe l'argenterie, on se dispute les places dans les voitures. Dans les galeries, des envoyés de Corvanne en manteaux bleus marchent deux par deux, très droits, comme des hommes qui s'attendent à recevoir un coup.",
      { if: { has: "lisandre:faits" }, text: "Les faits du Frère Orlan sont sur ta table, à côté de ton luth. Tu n'as pas encore écrit un vers." },
    ],
    choices: [
      { label: "Le Frère Orlan, à la bibliothèque", to: "LI_orlan", hide: { seen: "LI_orlan" } },
      { label: "Les envoyés de Corvanne, dans la galerie des cartes", to: "LI_ilan", hide: { seen: "LI_ilan" } },
      { label: "Messire Aubrac, qui chante ce soir dans la grande salle", to: "LI_aubrac", hide: { seen: "LI_aubrac" } },
      { label: "Le cabinet de la reine, cette nuit, pendant qu'elle dort", to: "LI_cabinet", hide: { seen: "LI_cabinet" }, if: { has: "lisandre:faits" }, why: "Tu n'as encore aucune raison de fouiller." },
      { label: "Clémence de Varades, dans l'embrasure d'une fenêtre", to: "LI_Q_clemence", hide: { seen: "LI_Q_clemence" } },
      { label: "Le perroquet de la reine, dans l'antichambre", to: "LI_Q_perroquet", hide: { seen: "LI_Q_perroquet" } },
      { label: "La lingerie, sous les toits, pour l'essayage", to: "LI_Q_ourlet", hide: { seen: "LI_Q_ourlet" } },
      { label: "La galerie des musiciens, où l'on répète", to: "LI_k_repetition", hide: { seen: "LI_k_repetition" } },
      { label: "Une porte ouverte, au bout de l'aile est", to: "LI_k_nursery", hide: { seen: "LI_k_nursery" } },
      { label: "Les écuries, où l'on attelle pour Pallanche", to: "LI_k_ecuries", hide: { seen: "LI_k_ecuries" } },
      { label: "Écrire la ballade", to: "LI_ecrire", if: { has: "lisandre:faits" }, why: "Il te faut d'abord les faits du Frère Orlan.", big: true },
    ] }),

  LI_orlan: P({ title: "Le Frère Orlan",
    fx: { meet: "orlan", flag: "lisandre:faits" },
    text: [
      "Le Frère Orlan est un greffier en robe grise, maigre, avec des mains d'enfant et un rhume qu'il soigne en été à coups de mouchoirs brodés. Il t'attend à la bibliothèque, debout près d'une fenêtre fermée. Il a froid.",
      "Il te tend un cahier. Une liste de noms, de dates, de délits. *Contrebande de sel. Intelligence avec l'ennemi. Recel de déserteurs.* En marge, d'une autre main, des suggestions de rimes. *Hautvent — vent — trahison — saison.*",
      "« La reine aime les refrains, dit-il. Et le peuple aussi. Un refrain, c'est ce qu'on retient. » Il se mouche. « C'est le but. »",
      "Tu remarques, quand il se penche pour reprendre son mouchoir, une petite boîte de plomb à sa ceinture, sous la robe.",
    ],
    choices: [
      { label: "« Et si les faits sont faux ? »", test: { dom: "social", label: "Lecture des gens" },
        win: { fx: { flag: "orlan:trouble", ep: ["perso", 600] }, to: "LI_orlan_trouble" }, lose: { to: "LI_orlan_froid" } },
      { label: "Prendre le cahier, remercier, sortir", to: "LI_cour" },
    ] }),

  LI_orlan_trouble: P({ title: "Un mouchoir",
    text: [
      "Il ne répond pas tout de suite. Il replie son mouchoir, très soigneusement, en quatre, puis en huit. « Un fait, Dame Lisandre, c'est ce qui est écrit. Après la Fête, ce qui sera écrit, c'est ce que vous aurez chanté. » Il lève les yeux. Ils sont pâles, presque blancs. « Moi, je ne fais que recopier. »",
    ],
    choices: [{ back: "LI_cour" }] }),

  LI_orlan_froid: P({ title: "La fenêtre fermée",
    text: ["« Les faits ne sont jamais faux, Dame Lisandre. Ils sont parfois mal chantés. » Il te tourne le dos et regarde par la fenêtre fermée. L'entretien est fini."],
    choices: [{ back: "LI_cour" }] }),

  // Ilan
  LI_ilan: P({ title: "La galerie des cartes",
    fx: { meet: "ilan", questSeen: "LI_ilan" },
    text: [
      "La galerie des cartes est pleine d'envoyés de Corvanne qui regardent, sur les murs, des cartes où leur pays est peint en gris et appelé *Marches de l'Est*. Ils sont polis. Ils sont furieux.",
      "Le secrétaire du chef de l'ambassade prend des notes, à l'écart. Il est grand, brun, avec une cicatrice au menton. Il lève les yeux de son carnet. Il te voit.",
      { if: { souv: "lisandre:marin" }, text: "Ilan. Trois jours de trêve, sur le port de Brésille, il y a deux ans. Une chambre au-dessus d'une taverne, une fenêtre sur la mer, et un prénom. Tu ne savais rien d'autre. Il n'avait pas cette cicatrice au menton. Tu sais maintenant qu'il sait écrire." },
      { if: { not: { souv: "lisandre:marin" } }, text: "Il te regarde comme on regarde quelqu'un qu'on connaît. Tu ne le connais pas. Il vient vers toi." },
      "« Lisandre, dit-il, très bas, en passant près de toi. Ce soir, aux écuries. S'il te plaît. »",
    ],
    choices: [
      { label: "Aller aux écuries, le soir", to: "LI_ecuries" },
      { label: "Ne pas y aller. Tu es l'espionne de la reine", fx: { flag: "ilan:evite", quest: "LI_ilan" }, to: "LI_cour" },
    ] }),

  LI_ecuries: P({ title: "Les écuries",
    text: [
      "Il est là, dans la pénombre, entre deux stalles, et il ne te touche pas. « On a appris quelque chose, à l'ambassade. Ta reine a ordonné qu'on arrête tout un village de la frontière. Hautvent. Des gens qui ont de la famille chez nous, des deux côtés de la rivière. On dit qu'ils seront jugés à la Fête. » Il hésite. « On dit aussi que personne n'est jamais ressorti d'un jugement à la Fête. Que personne ne se souvient de ce qui leur est arrivé. Tu chantes pour elle. Tu sais quelque chose ? »",
      "Tu sais qu'on t'a commandé une ballade. Tu sais ce qu'il y a dans le cahier d'Orlan.",
    ],
    choices: [
      { label: "Lui dire ce que tu sais. Tout", fx: { flag: ["lisandre:ilan_dit", "corvanne:sait"], quest: "LI_ilan", ep: ["perso", 1000] }, to: "LI_ecuries_dit" },
      { label: "Lui mentir. « Rien. On ne me dit rien. »", fx: { flag: "lisandre:ilan_ment", quest: "LI_ilan", ep: ["perso", 400] }, to: "LI_ecuries_ment" },
      { label: "Rapporter cette conversation à la reine", fx: { flag: ["lisandre:ilan_livre", "ilan:arrete"], quest: "LI_ilan", ep: ["perso", 400] }, to: "LI_ecuries_livre" },
    ] }),

  LI_ecuries_dit: P({ title: "La ballade de Hautvent",
    text: [
      "Tu lui dis la ballade, le cahier, les rimes en marge. Il écoute, les yeux fermés, comme on écoute une chanson. Quand tu as fini, il dit : « Merci. » Puis : « On part demain pour Pallanche, nous aussi. L'ambassade est invitée à la Fête. » Il ouvre les yeux. « Je ne sais pas encore ce qu'on va faire de ce que tu m'as dit. Mais je m'en souviendrai. »",
      "Tu viens de trahir la reine. Ça ne te fait rien. Ça devrait.",
    ],
    choices: [{ label: "Rentrer avant qu'on te voie", back: "LI_cour" }] }),

  LI_ecuries_ment: P({ title: "Rien",
    text: ["Il te regarde longtemps, dans la pénombre. « Tu mentais mieux, à Brésille », dit-il. Il s'en va. Les chevaux bougent dans leurs stalles."],
    choices: [{ back: "LI_cour" }] }),

  LI_ecuries_livre: P({ title: "Ce que la reine sait",
    text: [
      "Tu le dis à Ermengarde, qui le dit à la reine, qui ne dit rien. Le lendemain matin, le secrétaire du chef de l'ambassade de Corvanne est rappelé chez lui pour une affaire de famille. On l'a vu monter dans une voiture fermée, entre deux gardes, avant l'aube.",
      "La reine te fait porter une bague. Un saphir. Tu la mets. Elle te va.",
    ],
    choices: [{ fx: { gold: 40 }, back: "LI_cour" }] }),

  // the rival singer
  LI_aubrac: P({ takes: "evening", title: "Messire Aubrac",
    fx: { meet: "aubrac", questSeen: "LI_aubrac" },
    text: [
      "Messire Aubrac chante, ce soir-là, dans la grande salle, pour les envoyés de Corvanne. Il a une voix superbe et rien dedans. Il chante une ballade sur la paix, que tout le monde applaudit, et à la fin, il te cherche des yeux dans la salle et lève son verre. « Dame Lisandre nous fera l'honneur d'une réponse ? »",
      "C'est un défi. Toute la cour se tourne vers toi.",
    ],
    choices: [
      { label: "Chanter la chanson de soldat que la reine t'a apprise, une nuit d'hiver", if: { souv: "lisandre:isaure" }, why: "Tu ne t'en souviens plus.",
        test: { dom: "social", label: "Chant", help: [{ if: { item: "luth" }, v: 10 }] },
        win: { fx: { flag: "aubrac:battu", quest: "LI_aubrac", gold: 20, ep: ["perso", 1000] }, to: "LI_aubrac_gagne" },
        lose: { fx: { quest: "LI_aubrac" }, to: "LI_aubrac_perdu" } },
      { label: "Chanter une chanson de port, de ton enfance, avec ta vraie voix", if: { souv: "lisandre:voix" }, why: "Tu ne sais plus où elle est.",
        test: { dom: "magie", label: "Voix", help: [{ if: { souv: "lisandre:port" }, v: 15 }] },
        win: { fx: { flag: ["aubrac:battu", "lisandre:vraie_voix"], quest: "LI_aubrac", ep: ["perso", 1200] }, to: "LI_aubrac_voix" },
        lose: { fx: { quest: "LI_aubrac" }, to: "LI_aubrac_perdu" } },
      { label: "Décliner en riant. On ne répond pas à un rossignol", fx: { quest: "LI_aubrac" }, to: "LI_cour" },
    ] }),

  LI_aubrac_gagne: P({ title: "La chanson de soldat",
    text: [
      "Une chanson grossière, joyeuse, sur une cantinière et un sergent, que la reine t'a apprise un soir, ivre de vin chaud, en riant à en pleurer. Les envoyés de Corvanne la connaissent. Elle vient de chez eux. Ils la reprennent au refrain, debout, en tapant sur les tables. Aubrac rit avec eux, beau joueur.",
      "Au fond de la salle, la reine ne rit pas. Elle te regarde chanter avec l'air de quelqu'un qui entend une chanson pour la première fois.",
    ],
    choices: [{ label: "Saluer", to: "LI_cour" }] }),

  LI_aubrac_voix: P({ title: "Ta vraie voix",
    text: [
      "Tu poses ton luth. Tu chantes sans lui, comme sur le port, comme ta mère qui vendait du poisson, avec ta voix d'avant, celle qu'on t'a appris à cacher : rauque, trop grave, pas juste du tout. La salle se tait d'un coup. Personne ne t'a jamais entendue comme ça. Toi non plus, depuis quatorze ans.",
      "Quand tu as fini, personne n'applaudit. Puis tout le monde. Aubrac ne lève plus son verre.",
    ],
    choices: [{ label: "Saluer", to: "LI_cour" }] }),

  LI_aubrac_perdu: P({ title: "Une fausse note",
    text: ["Tu commences trop haut. Ta voix casse au deuxième couplet. Aubrac a la grâce de ne pas sourire. La cour, si. Tu finis la chanson. Tu la finis toujours."],
    choices: [{ back: "LI_cour" }] }),

  // the queen's cabinet
  LI_cabinet: P({ title: "Le cabinet de la reine",
    text: [
      "Tu connais le chemin. La porte dérobée derrière la tapisserie des chasses, le couloir des servantes, la clé qu'Ermengarde cache sous le pot de myrte. Il est deux heures du matin. La reine dort.",
      "Le cabinet sent l'encre et la fleur d'oranger. Sur l'écritoire, des lettres. Tu les lis à la lueur d'une veilleuse.",
    ],
    choices: [
      { label: "Lire vite, tout, avant que la veilleuse s'éteigne", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { item: "lettre_mordace", clue: "n_lettre_reine", ep: ["perso", 800], flag: "lisandre:lettre" }, to: "LI_lettre" },
        lose: { fx: { flag: "lisandre:surprise" }, to: "LI_cabinet_surprise" } },
    ] }),

  LI_lettre: P({ title: "Une lettre au sceau noir",
    text: [
      "Une lettre, sous les autres, d'une écriture fine et serrée, cachetée de cire noire. Une plume et une clé.",
      "*Madame,*",
      "*Hautvent sera livré avant la Fête. La capitaine de Brenne obéira : elle ne se souvient pas de Lisse, et Votre Majesté ne s'en souviendra pas davantage après la Nuit. C'est le prix convenu, et il est juste : la paix d'un royaume vaut bien l'oubli d'un pont.*",
      "*Votre Majesté a eu la bonté de céder, au printemps, ce qui Lui pesait. Je le garde en sûreté. Je garde tout.*",
      "*M.*",
      "Tu la plies et la glisses dans ton corsage. Tu ne sais pas pourquoi. Si on la cherche, on saura que c'est toi.",
    ],
    choices: [{ back: "LI_cour" }] }),

  LI_cabinet_surprise: P({ title: "Ermengarde",
    text: [
      "Une main se pose sur ton épaule. Ermengarde, en chemise de nuit, une bougie à la main. Elle regarde l'écritoire, puis toi. Elle ne dit rien pendant longtemps. Puis : « Va te coucher. Je n'ai rien vu. » Et, au moment où tu passes la porte : « Moi aussi, je les ai lues. »",
    ],
    choices: [{ fx: { flag: "ermengarde:sait" }, back: "LI_cour" }] }),

  // end of chapter 1
  LI_ecrire: P({ takes: "morning", title: "La ballade",
    text: [
      "Tu écris toute la nuit, ton luth sur les genoux, le cahier d'Orlan ouvert à côté de toi. Les rimes en marge. *Hautvent — vent — trahison — saison.* Au matin, la cour part pour Pallanche. Il faut qu'elle soit finie.",
      { if: { has: "lisandre:lettre" }, text: "La lettre au sceau noir est sous ton oreiller." },
      { if: { has: "lisandre:ilan_dit" }, text: "Quelque part dans le palais, Ilan sait déjà ce que tu vas chanter." },
    ],
    choices: [
      { label: "Écrire ce qu'on t'a commandé. Bien. C'est ton métier", fx: { flag: "lisandre:ballade=commandee", quest: "LI_ballade", ep: ["perso", 600] }, to: "LI_depart" },
      { label: "Écrire ce qu'on t'a commandé, et cacher autre chose dedans, entre les vers", test: { dom: "savoir", label: "Écriture" },
        win: { fx: { flag: "lisandre:ballade=double", quest: "LI_ballade", ep: ["perso", 1200] }, to: "LI_depart" },
        lose: { fx: { flag: "lisandre:ballade=commandee", quest: "LI_ballade", ep: ["perso", 400] }, to: "LI_double_rate" } },
      { label: "Ne rien écrire. Le dire à la reine", fx: { flag: ["lisandre:ballade=refus", "lisandre:disgrace"], quest: "LI_ballade", ep: ["perso", 1000] }, to: "LI_refus" },
    ] }),

  LI_double_rate: P({ title: "Ce qui ne passe pas",
    text: ["À l'aube, tu relis. Tout ce que tu as caché se voit. Une ballade à double fond qu'un enfant comprendrait. Tu brûles les brouillons. Il reste la ballade d'Orlan, propre, sans un pli. Elle est belle."],
    choices: [{ label: "Partir avec la cour", to: "LI_depart" }] }),

  LI_refus: P({ title: "Une voix de moins",
    text: [
      "La reine t'écoute, dans sa voiture, au moment du départ. Elle ne se fâche pas. Elle a l'air fatiguée. « Tu viens quand même à Pallanche, dit-elle. Tu chanteras ce qu'Orlan t'aura écrit. Ou tu ne chanteras plus jamais nulle part, Lisandre. »",
    ],
    choices: [{ label: "Monter dans la dernière voiture", to: "LI_depart" }] }),

  LI_depart: P({ title: "Le départ de la cour",
    text: [
      "Quarante voitures, deux cents cavaliers, des chariots de bagages sur une demi-lieue. La cour d'Esquarre quitte Vasselin pour la Fête des Noms dans un bruit de fers et de grelots. On te donne une place dans la voiture des musiciens, entre une harpe et un tambour.",
    ],
    choices: [{ label: "Regarder Vasselin s'éloigner", fx: { flag: "ch:lisandre:1", resume: "LI_route" }, to: "C_carrefour" }] }),

  // ================================================================ chapter 2 · le cortège
  LI_route: P({ title: "La route de la cour",
    text: [
      "La route de la cour remonte la vallée de la Pallante, entre des vignes et des villages qui sortent sur le pas des portes pour voir passer la reine. Trois jours de voyage, à l'allure des voitures.",
      { if: { has: "lisandre:disgrace" }, text: "Personne ne te parle, dans la voiture des musiciens. Le joueur de harpe s'est assis le plus loin possible de toi." },
    ],
    choices: [{ label: "En route", travel: "r_cour" }] }),

  LI_reine_nuit: R({ title: "La reine, la nuit",
    text: [
      "Au premier soir, au relais de Montbrun, un page vient te chercher. La reine ne dort pas. Elle veut une chanson.",
      "Elle est seule, dans une chambre d'auberge trop petite pour elle, en chemise, les cheveux défaits. Elle a cinquante ans et l'air d'en avoir soixante. « La chanson de soldat, dit-elle. Celle que je t'ai apprise. Je ne m'en souviens plus. Je sais que je te l'ai apprise. Chante-la. »",
    ],
    choices: [
      { label: "La lui chanter", if: { souv: "lisandre:isaure" }, why: "Tu ne t'en souviens plus, toi non plus.", fx: { flag: "isaure:chanson", ep: ["perso", 800] }, to: "LI_reine_chanson" },
      { label: "Lui demander ce qu'elle a cédé au printemps", hide: { not: { has: "lisandre:lettre" } }, to: "LI_reine_question" },
      { label: "Lui dire que tu ne t'en souviens pas non plus", to: "LI_reine_non" },
    ] }),

  LI_reine_chanson: R({ title: "La cantinière et le sergent",
    text: [
      "Tu chantes, à voix basse. Elle écoute en souriant, les yeux fermés, et au deuxième refrain, elle chante avec toi, faux, avec un accent de Corvanne qu'elle a dû prendre à un soldat, il y a longtemps, et qu'elle ne se savait pas.",
      "« C'est joli, dit-elle à la fin. Qui me l'a apprise ? »",
    ],
    choices: [{ label: "Reprendre la route au matin", back: "@route" }] }),

  LI_reine_question: R({ title: "Ce qui pesait",
    text: [
      "Elle te regarde longtemps. Elle ne demande pas comment tu sais. « Un nom, dit-elle enfin. Je crois. Ou un jour. Quelque chose qui m'empêchait de dormir. Il m'a dit que je dormirais. » Elle rit, un petit rire sec. « Je ne dors toujours pas. Mais je ne sais plus pourquoi. C'est mieux, paraît-il. »",
      "Elle se tourne vers le mur. « Chante, maintenant. N'importe quoi. »",
    ],
    choices: [{ label: "Chanter n'importe quoi", fx: { flag: "isaure:avoue", ep: ["perso", 1000] }, to: "@route" }] }),

  LI_reine_non: R({ title: "Personne",
    text: ["« Personne ne s'en souvient, alors », dit-elle. Elle te renvoie d'un geste. Dans le couloir, tu l'entends fredonner, faux, un air qui n'existe pas."],
    choices: [{ label: "Reprendre la route au matin", back: "@route" }] }),

  LI_pelerins: R({ title: "Les pèlerins",
    text: [
      "Au deuxième jour, la route est encombrée de pèlerins qui montent à la Fête. Ils chantent, en marchant, un cantique que tu ne connais pas, sur un air que tu connais : celui d'une comptine. *Que nul ne soit oublié, que nul ne soit oublié, écris ton nom sur le grand livre, et dors, et dors en paix.*",
      "Ils s'écartent pour laisser passer les voitures. Ils lèvent les mains vers la reine. Elle ne les regarde pas.",
    ],
    choices: [{ label: "Continuer", to: "@route" }] }),

  LI_portes: R({ title: "Pallanche",
    text: [
      "La cour entre dans Pallanche par la porte du Sud, au son des cent cloches, sous une pluie de pétales qu'on jette des fenêtres. Il y a tant de monde dans les rues que les voitures avancent au pas. Les gens crient le nom de la reine. Ils le crient tous ensemble, comme une prière.",
    ],
    choices: [{ label: "Entrer", to: "@route" }] }),

  LI_pallanche: P({ title: "La grande salle", place: "pallanche",
    fx: { meet: "mordace" },
    text: [
      "On te conduit, le soir même, dans la tour noire, pour la répétition. La grande salle de la Chancellerie est ronde, haute, sans fenêtres, éclairée par cent lampes. Au milieu, sur un lutrin de pierre, un livre ouvert, immense, relié de rouge. Le Grand Livre de la Fête. Autour, des gradins, pour la cour.",
      "Un homme en noir t'attend au pied du lutrin. Grand, mince, la cinquantaine, le visage doux. Il a les mains froides quand il te salue. « Je suis Mordace. Vous chanterez ici, demain, à minuit moins le quart. La ballade dure un quart d'heure. Il faut qu'elle finisse exactement quand les cloches commencent. Pas avant. Pas après. »",
      { if: { has: "hylas:voie=mordace" }, text: "Pendant la répétition, un vieil aveugle monte l'escalier de la galerie, lentement, en comptant les marches à voix basse. Mordace le regarde passer sans s'interrompre." },
      { if: { has: "pie:choix=liste" }, text: "Un greffier vient parler à l'oreille de Mordace. Tu entends : *la page du registre rouge*. Mordace ne se retourne pas. Il dit seulement : « Elle reviendra. Tout revient. »" },
      { if: { has: "lisandre:ballade=double" }, text: "Tu chantes ta ballade pour la répétition. Mordace l'écoute jusqu'au bout, la tête penchée. À la fin, il dit : « Très beau. Très habile. » Rien d'autre." },
      { if: { has: "lisandre:ilan_dit" }, text: "Dans les gradins vides, au dernier rang, il y a un manteau bleu de Corvanne." },
    ],
    choices: [
      { label: "« Pourquoi exactement quand les cloches commencent ? »", test: { dom: "social", label: "Aplomb" },
        win: { fx: { ep: ["perso", 800], flag: "mordace:repond" }, to: "LI_mordace_repond" }, lose: { to: "LI_mordace_sourit" } },
      { label: "Répéter, et te taire", to: "LI_fin" },
    ] }),

  LI_mordace_repond: P({ title: "Une voix", place: "pallanche",
    text: [
      "Il réfléchit, comme si la question méritait qu'on y réfléchisse. « Parce qu'un livre, Dame Lisandre, ne suffit pas. Il faut que quelqu'un le dise. Et vous avez la plus belle voix du royaume. » Il sourit. « La reine le dit. Elle s'en souviendra peut-être encore demain. »",
    ],
    choices: [{ label: "Répéter", to: "LI_fin" }] }),

  LI_mordace_sourit: P({ title: "Une question de métier", place: "pallanche",
    text: ["« Parce que c'est plus joli », dit-il. Et il te tourne le dos pour parler aux musiciens."],
    choices: [{ label: "Répéter", to: "LI_fin" }] }),

  LI_fin: P({ title: "Lisandre, la veille", place: "pallanche",
    fx: { flag: "prologue:lisandre", quest: "LI_ballade", catchup: 4, catchupWhy: "la route de la cour", ep: ["histoire", 4000] },
    text: [
      "On t'a logée au palais de la Couronne, de l'autre côté de la place aux Clercs, dans une chambre qui donne sur la tour noire. Tu ne fermes pas les rideaux.",
      { if: { has: "lisandre:ballade=commandee" }, text: "La ballade de Hautvent est sur ta table, propre, sans un pli. Tu la sais par cœur. Tu ne l'as jamais sue aussi bien." },
      { if: { has: "lisandre:ballade=double" }, text: "La ballade de Hautvent est sur ta table, avec ce que tu as caché dedans. Tu ne sais pas qui l'entendra." },
      { if: { has: "lisandre:ballade=refus" }, text: "Orlan t'a fait porter une ballade, écrite de sa main, avec des rimes en marge. Tu ne l'as pas lue." },
      "Demain, à minuit moins le quart.",
    ],
    choices: [
      { label: "Chanter ce qu'on te demande, demain", fx: { flag: ["lisandre:voie=chanter", "ch:lisandre:2"] }, to: "C_carrefour" },
      { label: "Te taire, demain, au moment de chanter", fx: { flag: ["lisandre:voie=taire", "ch:lisandre:2"] }, to: "C_carrefour" },
      { label: "Chanter autre chose, demain. Tu ne sais pas encore quoi", fx: { flag: ["lisandre:voie=autre", "ch:lisandre:2"] }, to: "C_carrefour" },
    ] }),
};
