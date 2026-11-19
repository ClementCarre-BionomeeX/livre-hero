// La Super Retraite · midnight (shared by both heroes) and the eight dénouements. Z_branch reads what Barnabé decided
// (b3) and what Ernestine decided (e3), plus the stolen baguette. Each dénouement is an ending (fx flag fin:<id>); the
// fates (destins.js) follow it.
function fin(id, title, text) {
  return { act: "III", title: title, place: "salle", end: true, epilogue: true, fx: { flag: "fin:" + id }, text: text };
}
var DEUX = { has: "baguettes=deux" };
var VOLEE = { all: [{ has: "baguette:volee" }, { not: { has: "baguette:reprise" } }] };
var A_BAGUETTE = { any: [{ not: VOLEE }, DEUX] };
var ASSOC = { any: [
  { all: [{ has: "b3=associe" }, { any: [{ has: "e3=associe" }, { has: "e3=laisse" }] }] },
  { all: [{ has: "e3=associe" }, { any: [{ has: "b3=associe" }, { has: "b3=presente" }] }] },
] };
var B_SIGNE = { has: "b:offre" }, E_SIGNE = { has: "e:offre" };
module.exports = {
  Z_minuit: { act: "III", title: "La Grande Assemblée", place: "salle",
    text: [
      "À minuit moins le quart, la Salle des Fêtes de Mirevaux contient mille neuf cent douze cotisants, quatorze retraités, deux cents lanternes, un orchestre de neuf musiciens, quarante bouteilles de champagne de la Caisse, et une chaleur de four à pain. Les lustres tremblent. Les dorures suent. Au premier rang, des messieurs de la capitale, en habit, venus par le train de l'après-midi, regardent la ville avec la curiosité polie qu'on a pour un zoo.",
      "Sur l'estrade, sous la banderole *1900 · LE SIÈCLE DE LA SUPER RETRAITE*, Hector Sorbier se tient debout, en frac, une rose blanche à la boutonnière. À sa gauche, Maître Anatole Gratin, la loupe à l'œil. Derrière eux, Isidore, ganté, immobile, aussi expressif qu'un portemanteau.",
      { if: { all: [{ has: "b3=associe" }, { has: "e3=associe" }] }, text: "À la droite de Sorbier, sur deux fauteuils dorés, un boulanger et une forgeronne en habits du dimanche regardent la foule. La foule les regarde aussi, avec tendresse. Ce sont les enfants du pays. Ils ont réussi." },
      { if: { all: [{ has: "b3=associe" }, { not: { has: "e3=associe" } }] }, text: "À la droite de Sorbier, sur un fauteuil doré, Barnabé Croûte regarde ses mains." },
      { if: { all: [{ has: "e3=associe" }, { not: { has: "b3=associe" } }] }, text: "À la droite de Sorbier, sur un fauteuil doré, Ernestine Chrome se tient très droite, les mains noires posées à plat sur les genoux, comme deux enclumes." },
      { if: { has: "papa=temoin" }, text: "À minuit moins dix, Anselme Croûte monte sur l'estrade pour ses quelques mots. La Salle l'applaudit : c'est le visage des affiches, le premier super retraité, avec sa rose. Il sort de sa poche une feuille pliée en quatre, puis une enveloppe de la Caisse, puis un billet de cinquante francs au coin déchiré. Il parle trois minutes. Il parle du billet, de la farine sur le billet, de son fils qui l'a versé le vendredi, et de lui qui l'a reçu le samedi. Sa voix tremble au début, puis plus du tout. Quand il a fini, la Salle se tait. C'est un silence de mille neuf cent douze personnes qui refont un calcul." },
      { if: { has: "papa=temoin" }, text: "Sorbier pose une main sur l'épaule du vieil homme. « L'émotion, dit-il. Le siècle. » Il fait un signe. L'orchestre attaque une polka. Mais le calcul continue, dans les têtes, sous la polka." },
      { if: { all: [{ has: "papa=sait" }, { not: { has: "papa=temoin" } }] }, text: "À minuit moins dix, Anselme Croûte monte sur l'estrade pour ses quelques mots. Il regarde la Salle. Il ouvre la bouche. Il regarde Sorbier. Il dit : « Merci. » Il redescend, très lentement, en tenant la rampe, et sa rose tremble à sa boutonnière comme une flamme dans un courant d'air." },
      { if: { has: "papa=ignore" }, text: "À minuit moins dix, Anselme Croûte monte sur l'estrade pour ses quelques mots. Il remercie Monsieur Sorbier, la Caisse, le siècle, et sa défunte épouse, dans cet ordre. On l'applaudit très fort. Il pleure de bonheur. Quelque part au fond de la Salle, son fils regarde le plafond." },
      "Puis vient le concours. Les pains sont présentés un par un, sur la table de velours rouge, à Maître Gratin, qui les tapote, les renifle, les soupèse, et dit chaque fois un chiffre décevant d'une voix aimable.",
      { if: { all: [VOLEE, DEUX] }, text: "Victorin Levain présente le sien en dernier : une baguette d'acier blanc, qui brille comme un miroir, et qu'il appelle « mon pain de garde perfectionné ». La Salle pousse un cri. Alors Barnabé Croûte s'avance par l'allée centrale, avec, dans un vieux tablier de forge, une seconde baguette exactement pareille. Il la pose à côté de la première. « Maître, dit-il, lisez sous le quignon. » Gratin retourne la baguette de Levain, vise sa loupe, et lit à voix haute : « *N° 1 · Barnabé & Ernestine · 1899 · L'acier demeure.* » Il y a un silence. Victorin Levain sort par la porte de côté, sans son coussin." },
      { if: { all: [VOLEE, { not: DEUX }] }, text: "Victorin Levain présente le sien en dernier : une baguette d'acier blanc, qui brille comme un miroir, et qu'il appelle « mon pain de garde perfectionné ». La Salle pousse un cri. Au fond, contre une colonne, Barnabé Croûte et Ernestine Chrome regardent leur baguette dans les mains d'un autre, à vingt mètres, sous les lustres. Ils ont les mains vides. Il n'y en avait qu'une." },
      { if: { not: VOLEE }, text: "Le pain de Barnabé Croûte est présenté en dernier. L'employé de la Caisse défait le torchon. Une baguette d'acier blanc apparaît sous les lustres, avec sa croûte, ses grignes, ses bulles, la petite cambrure du bout. La Salle pousse un cri. Une vieille dame au troisième rang se signe. Victorin Levain, au premier rang, pose son pain de garde par terre, doucement, comme on pose les armes." },
      "Et minuit sonne. Il sonne à l'église Saint-Firmin, puis à Notre-Dame-du-Puits deux minutes plus tard, puis à Saint-Éloi encore trois minutes après, si bien qu'à Mirevaux, le XXe siècle commence en cinq minutes, dans un vacarme de bronze qui fait trembler le champagne dans les coupes.",
      "Maître Gratin attend la dernière cloche. Il lève la baguette d'acier à bout de bras, la vise de sa loupe, la tourne, et dit, d'une voix très sûre, l'art de toute une vie dans chaque syllabe :",
      "« *Trois millions de francs.* »",
      "Il y a une seconde de silence absolu. Puis la Salle explose.",
      { if: { has: "comite=doute" }, text: "Au milieu des applaudissements, au septième rang, Augustine Salée se lève. Derrière elle, trente-neuf membres du Comité des Cotisants se lèvent aussi, et allument, l'une à la flamme de l'autre, quarante lanternes. « Monsieur Sorbier, dit Augustine d'une voix de crémière qui porte jusqu'aux lustres, le Comité voudrait voir le coffre. » Sorbier sourit de toutes ses dents. « Mais certainement, Madame. Après le champagne. »" },
    ],
    choices: [{ label: "Ce qui arriva ensuite", to: "Z_branch", big: true }] },
  Z_branch: { act: "III", title: "Ce qui arriva", place: "salle",
    branch: [
      { if: ASSOC, to: "F_associes" },
      { if: { all: [{ has: "b3=vente" }, A_BAGUETTE] }, to: "F_maison" },
      { if: { has: "e3=coffre" }, to: "F_coffre" },
      { if: { has: "e3=gare" }, to: "F_train" },
      { if: { all: [VOLEE, { not: DEUX }] }, to: "F_levain" },
      { if: { has: "b3=pain" }, to: "F_pain" },
      { if: { has: "b3=devoile" }, to: "F_devoile" },
      { to: "F_krach" },
    ] },

  F_associes: fin("associes", "La super super retraite", [
    "À minuit dix, Hector Sorbier prend le Pain Éternel dans ses bras, salue la Salle, et descend seul, par l'escalier de service, vers la Banque et la salle des coffres, pour l'y déposer de ses propres mains. C'est la cérémonie. Il l'a écrite lui-même.",
    "Il ne remonte pas.",
    "Sur l'estrade, les associés reçoivent les félicitations de la ville. On leur serre la main, on les embrasse, on leur tend des enfants à bénir. À minuit quarante, quelque part au bout de la ville, un train siffle. Personne ne l'entend, à cause de l'orchestre.",
    "Le 2 janvier 1900, la Banque Sorbier rouvre ses portes à neuf heures précises. Au guichet de la Caisse, sous l'affiche du vieil homme à la rose, une plaque de cuivre toute neuve : *Caisse de la Super Retraite · Sorbier, Croûte & Chrome, associés.* Le vendredi suivant, les cotisants viennent verser leur franc. Le samedi, les quatorze retraités reçoivent leur enveloppe. Elle est signée d'une main nouvelle.",
    { if: { has: "caisse:vide" }, text: "Les associés savent ce qu'il y a dans la Caisse. Ils le savent chaque vendredi en recevant les francs, et chaque samedi en remplissant les enveloppes avec ces mêmes francs. Ils ont un mot pour cela, entre eux, qu'ils ne prononcent jamais devant les autres : la roue." },
    { if: { not: { has: "caisse:vide" } }, text: "Les associés comprennent ce qu'il y a dans la Caisse le premier samedi, en remplissant les enveloppes avec les francs du vendredi. Ils se regardent par-dessus le guichet. Puis ils continuent à remplir les enveloppes, parce que quatorze vieillards attendent dans le froid." },
    "La roue tourne longtemps. Elle tourne si bien qu'elle devient une maison, puis une institution, puis une dynastie. Les enveloppes changent de couleur, la plaque de cuivre change de nom. La devise reste. *Plus d'argent que vous n'en avez jamais eu avant.*",
    "La baguette n° 1 reste dans le coffre. Elle y est encore. On dit que la Caisse n'a jamais eu d'autre trésor, ce qui est exact.",
  ]),

  F_maison: fin("maison", "Croûte & Chrome", [
    "Pendant que la Salle applaudit les trois millions, Barnabé Croûte monte sur l'estrade, d'un pas de boulanger, et se plante à côté de Maître Gratin. Il lève la main. Le silence revient, par curiosité.",
    "« Trois millions, dit-il. Maître Gratin l'a dit, et Maître Gratin est expert. Alors vendons-la. Ici. Maintenant. Aux enchères. Le produit va à la Caisse, pour les cotisants. » Il se tourne vers le premier rang, vers les messieurs de la capitale, leurs épingles de cravate et leurs habits. « Messieurs. Vous êtes venus pour la valeur de la valeur. La voilà. »",
    "Maître Gratin, pris entre son contrat et son métier, choisit son métier. C'est plus fort que lui. Il prend un marteau d'ivoire dans sa poche. Il en a toujours un.",
    "On part de cent mille francs. Un monsieur à monocle dit deux cent mille. Un autre, à favoris, dit cinq cent mille. Le premier rang s'échauffe. Les épingles de cravate brillent. Les chiffres montent comme une pâte qu'on aurait trop levurée. Un million. Un million et demi. Deux millions, par un homme à la perle noire qui n'a pas ouvert la bouche de la soirée.",
    "À trois millions deux cent mille francs, Maître Gratin abat son marteau. La Salle hurle.",
    "Alors Barnabé lève encore la main. « Monsieur, dit-il à l'homme à la perle noire, vous recevrez la n° 1 bis. Forgée par la même main, coulée sur le même pain, gravée à votre nom. L'originale reste à Mirevaux. » L'homme à la perle noire réfléchit un instant. Puis il sourit, pour la première fois de la soirée. Il a compris qu'il vient d'acheter quelque chose de plus rare qu'une baguette : la première copie.",
    { if: { has: "e3=coffre" }, text: "À minuit dix, Hector Sorbier, qui a perdu la Salle, s'éclipse par l'escalier de service vers la Banque, la cave, la porte de derrière et ses quatre malles. Il descend dans la salle des coffres. Une porte d'acier blanc se referme derrière lui avec un bruit de cloche. De l'autre côté, Ernestine Chrome s'assoit sur le sol, le dos contre la porte, et attend le matin." },
    { if: { has: "e3=gare" }, text: "À minuit trente-cinq, sur le quai de la gare, Hector Sorbier trouve ses quatre malles et Ernestine Chrome assise dessus. Elle ne bouge pas. Il lui offre de l'argent. Elle ne bouge pas davantage. Le train de minuit quarante part sans lui." },
    { if: { not: { any: [{ has: "e3=coffre" }, { has: "e3=gare" }] } }, text: "À minuit quarante, quelque part au bout de la ville, un train siffle. Hector Sorbier n'est plus dans la Salle. Ses quatre malles non plus. Mais trois millions deux cent mille francs, en billets de la capitale, sont sur la table de velours rouge, et Augustine Salée, la crémière, compte devant tout le monde." },
    "Le 2 janvier 1900, chaque cotisant de la Caisse de la Super Retraite est remboursé, au franc près, contre signature, à la crèmerie Salée. Il reste de l'argent. Avec ce qui reste, un boulanger et une forgeronne louent l'Entrepôt aux grains vide de la place du Carrefour.",
    { if: { has: "e:entrepot" }, text: "Ernestine Chrome sait déjà où poser les choses. Elle avait collé son front à cette vitre, trois jours plus tôt, sans savoir pourquoi." },
    "Dans la vitrine, sur un coussin de velours bleu nuit, la baguette n° 1. Sur la porte, une enseigne peinte à la main : *Croûte & Chrome.* Et, sur le certificat de la n° 1 bis, imprimé chez Vernis, en tout petit, en bas, la première mention légale de l'histoire de la Maison : *Baguette non comestible.*",
  ]),

  F_coffre: fin("coffre", "Le siècle sous clé", [
    "À minuit dix, Hector Sorbier prend le Pain Éternel dans ses bras, salue la Salle, et descend seul, par l'escalier de service, vers la Banque. C'est la cérémonie. Il l'a écrite lui-même. Personne ne le suit, et cela aussi, il l'a écrit.",
    "Il traverse la ruelle aux charrettes, où ses quatre malles attendent sous une bâche. Il descend l'escalier de marbre. Il ouvre la grande porte ronde d'acier blanc, entre dans le coffre, pose la baguette sur la chaise, à côté de l'encrier, et la regarde un moment, avec quelque chose qui ressemble à de la tendresse. Trois millions de francs, sur une chaise.",
    "Derrière lui, la porte se referme.",
    { if: { has: "e:goupille" }, text: "Elle se referme avec un bruit de cloche, puis un petit claquement sec, celui d'une goupille de quatre millimètres qui fait exactement ce qu'on attend d'elle. Sorbier tourne la poignée intérieure. Elle tourne. Elle tourne dans le vide, avec une politesse parfaite." },
    { if: { all: [{ item: "cle_coffre" }, { not: { has: "e:goupille" } }] }, text: "Elle se referme avec un bruit de cloche. De l'autre côté, une troisième clé, que personne n'aurait dû avoir, tourne dans la troisième serrure. Ernestine Chrome la retire et la met dans sa poche." },
    { if: { all: [{ not: { item: "cle_coffre" } }, { not: { has: "e:goupille" } }] }, text: "Elle se referme avec un bruit de cloche. Ernestine Chrome et Isidore, ensemble, de tout leur poids, tournent le grand volant d'acier blanc jusqu'au bout, et Isidore, qui connaît les combinaisons, brouille les trois cadrans d'un geste de majordome qui range l'argenterie." },
    "Hector Sorbier passe la première nuit du XXe siècle dans son propre coffre, assis sur sa chaise, avec son encrier, sa baguette d'acier et le courant d'air. On dit qu'il frappe d'abord, puis qu'il appelle, puis qu'il propose des sommes, de plus en plus grosses, à la porte. La porte ne rouille pas, et elle n'accepte rien.",
    { if: { has: "comite=doute" }, text: "À une heure du matin, quarante lanternes descendent l'escalier de marbre. Augustine Salée en tête. Ernestine Chrome leur montre la porte, la ruelle, la bâche, les quatre malles. On les ouvre sur le pavé. Elles sont pleines de billets de banque, serrés comme des briques. Augustine Salée en prend une liasse, la regarde à la lanterne, et dit seulement : « Les vendredis. »" },
    { if: { not: { has: "comite=doute" } }, text: "À une heure du matin, Ernestine Chrome remonte dans la Salle, va droit à Augustine Salée, et lui dit trois phrases à l'oreille. La crémière pâlit, puis rougit, puis prend une lanterne. Vingt minutes plus tard, sur le pavé de la ruelle aux charrettes, on ouvre quatre malles pleines de billets de banque, serrés comme des briques." },
    { if: VOLEE, text: "Victorin Levain, qui avait présenté le Pain Éternel comme le sien, se tait pendant tout le mois de janvier. C'est une première." },
    { if: B_SIGNE, text: "L'acte d'association signé par Barnabé Croûte dans l'après-midi est retrouvé dans le sous-main de Sorbier. Il a fait de lui, pendant onze heures, l'associé d'un homme dans un coffre. Barnabé le brûle dans son four, le 2 janvier, avec la première fournée." },
    { if: { has: "mie:pain" }, text: "Et pendant ce temps, rue des Mitrons, une fille de douze ans, quatre voisins, deux cochers et trois mitrons sortaient du four la dernière des mille neuf cent douze baguettes. À deux heures du matin, chaque cotisant en reçoit une, avec son argent." },
    "On ouvre le coffre le lendemain, à midi, devant les gendarmes. Hector Sorbier en sort très droit, la cravate défaite, la baguette d'acier dans les bras. Il la tend à Ernestine. « Elle était bien gardée », dit-il. C'est la seule phrase vraie qu'on lui connaisse.",
  ]),

  F_train: fin("train", "Le train de 0 h 40", [
    "La gare de Mirevaux est déserte. Toute la ville est à la Salle des Fêtes. L'horloge, qui avance de quatre minutes, marque minuit trente et une, et sur le quai, sous un bec de gaz, une forgeronne en manteau de laine attend, assise sur un banc, les mains dans les poches.",
    "À minuit trente-quatre, un fiacre arrive au galop. Il en descend Hector Sorbier, en pelisse de loutre, et Maître Anatole Gratin, qui tient sa loupe comme un talisman. Derrière, sur une charrette à bras, Isidore pousse quatre malles de cuir cerclées de cuivre.",
    "Ernestine Chrome se lève. Elle va à la première malle. Elle s'assoit dessus.",
    "Sorbier la regarde. Il sourit. Il a de belles dents. « Mademoiselle Chrome. Combien ? »",
    "Elle ne répond pas. Elle croise les bras.",
    "« Dix mille francs. » Elle ne bouge pas. « Cinquante mille. La forge. Le bail. Une forge neuve à la capitale. » Elle regarde les rails. « Cent mille francs, Mademoiselle, et vous êtes la femme la plus riche du faubourg. » Elle bâille.",
    { if: { has: "gare:retard" }, text: "À minuit quarante, le train de nuit n'arrive pas. Monsieur Ponce, le chef de gare, sort de son bureau, consulte sa montre, lève les yeux au ciel, et annonce d'une voix de tragédie : « Une aiguille gelée, Messieurs. Une heure de retard. » Puis il retourne dans son bureau et ferme la porte. Il a cotisé quatre cent dix francs." },
    { if: { has: "gare:retard" }, text: "À une heure dix, quarante lanternes arrivent sur le quai, avec les gendarmes au milieu, et Augustine Salée devant. Le train de nuit arrive à une heure quarante. Il repart à une heure quarante-deux, sans malles, sans banquier, sans commissaire-priseur." },
    { if: { not: { has: "gare:retard" } }, text: "À minuit quarante, le train de nuit entre en gare dans un nuage de vapeur, s'arrête deux minutes, et repart. Sorbier ne monte pas : on ne part pas sans ses malles, quand on part pour ses malles. Gratin, lui, monte. Il saute dans le dernier wagon, sans bagage, sans sa part, avec sa loupe, et disparaît vers le nord, pour toujours, comme un chiffre qu'on efface." },
    { if: { has: "isidore=allie" }, text: "Isidore, qui poussait la charrette, ôte ses gants. Il les plie. Il les pose sur la malle, à côté d'Ernestine. Puis il s'assoit sur la deuxième malle. « J'ai démissionné, Monsieur, dit-il. À l'instant. Je vous prie de ne pas le prendre mal. »" },
    "Au matin, sur le quai, on ouvre les malles. Elles sont pleines de billets de banque, serrés comme des briques, tous les vendredis de la Caisse depuis huit ans. Hector Sorbier passe le premier jour du siècle à la gendarmerie de Mirevaux, où on lui sert du pain.",
    { if: B_SIGNE, text: "L'acte d'association signé par Barnabé Croûte la veille est retrouvé dans la pelisse de loutre. Il a fait de lui, pendant douze heures, l'associé d'un homme sur un quai. Barnabé le brûle dans son four, avec la première fournée de l'année." },
    { if: { has: "mie:pain" }, text: "Pendant ce temps, à la Salle des Fêtes, mille neuf cent douze baguettes encore tièdes passaient de main en main. La ville a mangé en attendant son argent. Elle l'a trouvé meilleur." },
  ]),

  F_levain: fin("levain", "Le pain de garde", [
    "La Salle applaudit Victorin Levain. On le porte en triomphe autour de la table de velours rouge. Il lève la baguette d'acier au-dessus de sa tête, comme une épée, et la lumière des lustres coule dessus comme de l'huile.",
    "À minuit dix, Hector Sorbier prend le Pain Éternel des mains de Levain, salue la Salle, et descend seul vers la Banque pour le déposer dans le coffre. Il ne remonte pas. À minuit quarante, au bout de la ville, un train siffle.",
    { if: { has: "comite=doute" }, text: "À minuit cinquante, quarante lanternes descendent dans la salle des coffres. Elles éclairent une chaise, un encrier, une baguette d'acier posée sur la chaise, et rien d'autre. La porte de derrière est ouverte. La ruelle aux charrettes est vide." },
    "Le 2 janvier 1900, la Caisse de la Super Retraite ne rouvre pas. Sur la porte de bronze de la Banque, un papier : *Fermé pour inventaire.* L'inventaire tient en une ligne.",
    "Victorin Levain récupère la baguette, puisqu'elle est à lui, d'après le procès-verbal du concours. Il la met dans la vitrine de la Grande Boulangerie, sur un coussin, avec un écriteau : *Le Pain Éternel. Trois millions.* La ville ruinée vient la regarder le dimanche. Elle ne peut plus acheter autre chose que du pain de garde, alors elle achète du pain de garde, et Victorin Levain devient le seul homme riche de Mirevaux.",
    "Barnabé Croûte et Ernestine Chrome passent devant la vitrine tous les matins. Ils ne disent rien. Sous le quignon, invisible derrière la vitre, leur nom est gravé dans l'acier. L'acier demeure. Ils attendent.",
    { if: B_SIGNE, text: "L'acte d'association signé par Barnabé n'a jamais servi. Il le garde dans le tiroir du pétrin. C'est le seul papier de la Caisse qui vaille encore quelque chose : il prouve qu'il a été bête une fois." },
    { if: { has: "mie:pain" }, text: "Cette nuit-là, pourtant, mille neuf cent douze baguettes sont sorties du four de la rue des Mitrons. La ville les a mangées avant d'apprendre la nouvelle. Ce fut le dernier bon repas de l'hiver." },
  ]),

  F_pain: fin("pain", "Le pain passe", [
    "À minuit cinq, pendant que la Salle applaudit les trois millions, les grandes portes s'ouvrent au fond de la Salle, et il entre une odeur.",
    "C'est l'odeur du pain chaud. Elle remonte l'allée centrale, passe entre les rangs, grimpe aux lustres, et toute la Salle tourne la tête en même temps, comme un champ de blé sous le vent.",
    "Mie entre la première, un panier sur chaque bras, la figure blanche de farine, l'air sévère d'un caissier. Derrière elle, quatre voisins, deux cochers et trois mitrons en bras de chemise, avec des corbeilles, des sacs, des brouettes. Barnabé Croûte ferme la marche, une baguette dans chaque main.",
    "« Mille neuf cent douze, annonce Mie. Une par cotisant. Il y en a une de trop, elle est pour Monsieur Gratin, qui a faim. »",
    { if: { has: "caisse:vide" }, text: "Barnabé monte sur une chaise. « C'est tout ce qu'il y a dans la Caisse, dit-il. Je vous le dis ce soir, pendant que c'est chaud. » La Salle prend le pain. Elle prend aussi la phrase, et la mâche longtemps." },
    "On mange. Mille neuf cent douze personnes mangent du pain chaud à minuit et quart, le premier jour du siècle, dans une Salle des Fêtes dorée. On mange debout, on mange assis, on mange en pleurant, on donne le quignon aux enfants. Les messieurs de la capitale regardent cela avec stupeur, puis, l'un après l'autre, tendent la main.",
    "Hector Sorbier, sur l'estrade, sent que la soirée lui échappe. Il prend le Pain Éternel sous le bras et descend vers la Banque. Il ne remonte pas. À minuit quarante, un train siffle. Personne ne l'entend. On mange.",
    { if: { has: "e3=associe" }, text: "Ernestine Chrome, restée seule sur l'estrade dans son fauteuil doré, regarde la Salle manger. Elle descend. Elle prend une baguette dans une corbeille. Elle la rompt. Elle en mange la moitié, et donne l'autre au premier vieillard qui passe. L'acte d'association est resté sur le fauteuil." },
    { if: { has: "e3=laisse" }, text: "Ernestine Chrome rompt sa baguette en deux et en donne la moitié à Mémé Chrome, qu'on a portée jusqu'ici dans son fauteuil. Mémé mange en silence. Elle a déjà dit sa phrase." },
    "Le 2 janvier 1900, la Caisse de la Super Retraite ne rouvre pas. La ville est ruinée. Elle s'en souviendra. Mais elle se souviendra aussi, toute sa vie, du pain de minuit, et quand on demandera aux vieux de Mirevaux ce qu'ils ont touché de la Super Retraite, ils diront, avec une dignité absolue : « Une baguette. Elle était bonne. »",
    "La baguette d'acier, elle, a fini dans le coffre vide, puis dans la vitrine d'un Entrepôt du Carrefour. On la regarde. On ne la mange pas. L'acier demeure. Le pain passe.",
  ]),

  F_devoile: fin("devoile", "La vérité à minuit", [
    "Pendant que la Salle applaudit les trois millions, Barnabé Croûte monte sur l'estrade par le petit escalier de côté. Il a la gorge sèche. Il pousse Maître Gratin d'une épaule de boulanger, qui en a poussé, des pétrins. Il fait face à la Salle.",
    "« La Caisse est vide », dit-il.",
    "Puis il raconte. Il raconte tout, dans l'ordre où Mie l'avait écrit sur l'ardoise.",
    { if: { clue: "c_billet" }, text: "Le billet de cinquante francs, versé le vendredi, retrouvé le samedi dans l'enveloppe de son père." },
    { if: { clue: "c_affiche" }, text: "La ligne en tout petit, au bas des affiches : *dans la limite des cotisations disponibles.*" },
    { if: { clue: "c_coffre" }, text: "Le coffre, où il y a une chaise, un encrier et un courant d'air." },
    { if: { clue: "c_programme" }, text: "Le programme de la soirée, imprimé chez Vernis l'avant-veille, avec le chiffre déjà dedans : trois millions, avant qu'aucun pain ne soit cuit." },
    { if: { clue: "c_lettre" }, text: "La lettre à Maître Gratin : *Peu importe l'objet.*" },
    { if: { clue: "c_gare" }, text: "Deux billets de première, pour le train de minuit quarante." },
    { if: { clue: "c_registre" }, text: "Le registre, avec, à la ligne du 31 décembre, un zéro gratté." },
    { if: { has: "papa=temoin" }, text: "Au premier rang, Anselme Croûte se lève, sa rose à la main. « C'est vrai, dit-il. J'ai le billet. » Et il le lève au-dessus de sa tête, comme on lève une hostie." },
    "Quand il a fini, il se tourne vers Sorbier. Sorbier n'est plus là. Sur l'estrade, il reste une rose blanche par terre, et Maître Gratin, la loupe à la main, qui dit tout bas, pour personne : « Je n'ai fait qu'estimer. »",
    { if: { has: "comite=doute" }, text: "Quarante lanternes se lèvent ensemble et descendent vers la Banque. Dans la salle des coffres, elles éclairent une chaise, un encrier, et la porte de derrière, ouverte sur la ruelle aux charrettes. Au bout de la ville, un train siffle." },
    { if: { not: { has: "comite=doute" } }, text: "La Salle met cinq minutes à bouger. Puis elle bouge toute ensemble. Quand la foule arrive à la Banque, la porte de derrière est ouverte sur la ruelle aux charrettes, et au bout de la ville, un train siffle." },
    { if: { has: "e3=associe" }, text: "Ernestine Chrome, sur son fauteuil doré, a tout écouté sans bouger. Quand Barnabé descend de l'estrade, elle se lève, sort l'acte d'association de sa poche, et le déchire en deux, puis en quatre, au-dessus de la table de velours rouge, comme on effeuille une fleur." },
    "Le 2 janvier 1900, la Caisse de la Super Retraite ne rouvre pas. La ville est ruinée, et elle le sait. Elle garde la baguette d'acier, que le juge lui attribue, et sa colère, qu'elle s'attribue toute seule. On l'expose dans l'Entrepôt vide du Carrefour, la baguette, avec un écriteau écrit à la main par Mie : *Voici ce que valait la Caisse.*",
  ]),

  F_krach: fin("krach", "Le krach du siècle", [
    "À minuit dix, Hector Sorbier prend le Pain Éternel dans ses bras, salue la Salle, et descend seul vers la Banque, pour l'y déposer de ses propres mains. C'est la cérémonie. La Salle chante. L'orchestre joue. On débouche le champagne de la Caisse, qui est excellent.",
    { if: { has: "b3=presente" }, text: "Barnabé Croûte reçoit son prix des mains de Maître Gratin : une enveloppe de la Caisse, et dedans, un chèque de mille francs, tiré sur la Banque Sorbier, signé d'une main élégante. Il le regarde longtemps. C'est un très beau chèque." },
    "Il ne remonte pas. À minuit quarante, au bout de la ville, un train siffle. Personne ne l'entend, à cause de l'orchestre.",
    "Le 2 janvier 1900, la Caisse de la Super Retraite ne rouvre pas. Sur la porte de bronze de la Banque, un papier : *Fermé pour inventaire.* On force le coffre le 4. On y trouve une chaise, un encrier, et une baguette d'acier blanc posée sur la chaise. Les mille neuf cent douze cotisants comprennent ensemble, devant la porte, ce que vaut une Super Retraite.",
    { if: { has: "b3=presente" }, text: "Le chèque de mille francs de Barnabé est le premier à revenir impayé. Il le punaise au-dessus du pétrin. On peut encore l'y voir." },
    { if: { has: "e3=laisse" }, text: "Ernestine Chrome est rentrée à la forge à une heure du matin, sans un mot. Elle s'est assise sur le tabouret. Elle a regardé le creux sous l'enclume. Elle a appris, cette nuit-là, qu'on peut faire une porte parfaite pour un voleur, et que la porte n'y peut rien." },
    "Le juge attribue la baguette d'acier à la ville, faute d'autre créancier solvable. La ville la donne à ceux qui l'ont faite, faute de savoir qu'en faire. Un boulanger et une forgeronne la posent, au printemps, dans la vitrine de l'Entrepôt aux grains du Carrefour, sur un coussin de velours. On vient la voir le dimanche. On l'appelle, avec une ironie qui ne fait rire personne, *ce qui reste de la Super Retraite.*",
  ]),
};
