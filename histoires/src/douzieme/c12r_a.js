// Le Douzième Coup · chapter 12, the one who stays, first half (act IV, evening of 20 June 601, from none to the
// evening of the Court). The esplanade taken: the crowd of the Grand Midi seen from behind, the empty dais held by
// four bearers, the fountain and its sixty ordinances, the white platform and the strapped chair (`r:vu_estrade`),
// the twelve vats leaving the Maîtrise (`r:vu_cuves_tour`) and the list of the forty guests (`r:sait_acheteurs`).
// The cortège of the Régente (`r:vu_cortege`; she gets down on the wrong side with `r:regente_doute`), her page
// (`r:regente_attend`), the evening ration of the white cloaks, which falls dull and stays cold (`r:vu_ration`,
// `r:ration_froide`, item `prise_froide`; sergeant Haudoin warned: `r:haudoin_averti`). Two ways in: the golden
// gate (`r:entre_grille`) or the green door of the mère Sauge (`r:entre_simples`, `r:sauge_eveillee`). In the
// garden, a watcher on the dial when `monde:borne_vue` (`r:guetteur_parti` + `r:guetteur_soupe|releve|ration|
// battu|alerte`). Then M12, at the dial of the tortoises.
var P = {};
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var UNE_PINCEE = { stock: "sable", min: 3 };
var CONNU = { any: [{ has: "r:regente_parle" }, { has: "r:regente_depeche" }] };
var GUETTE = { all: [{ has: "monde:borne_vue" }, { not: { has: "r:guetteur_parti" } }] };

Object.assign(P, {
  K12r_route: { act: "IV", title: "La brune des autres", place: "guilde", ambiance: "chateau",
    text: [
      "Tu remets la dalle sur ton côté de la pierre. Dans la cour, la chute a déjà poudré le bord neuf de la rigole.",
      "Sur cette colline, le jour est cloué à midi : les ombres des ormes tiennent sous les troncs, courtes, exactes, depuis soixante ans. Le soir y monte pourtant, ce vingt juin, et il monte par les pieds. C'est un roulement sourd, venu du bas de la ville, que le pavé te rend à travers les semelles : trois cents chevaux à la file sur un pont de bois.",
      "Son Altesse la Régente entre dans sa bonne ville de Méridane, où il est midi pour toujours, et elle y apporte la brune avec ses bagages.",
      "Tu sors par le grand portail. Les deux hommes de cuivre regardent droit devant eux la rue du Cadran. Ils sont sans oreilles : le cortège leur arrivera dessus comme une surprise, pour la soixantième fois.",
      { with: "carillon", text: "Carillon compte sur ses doigts de laiton. « Il est sept heures et demie du soir dans le royaume. Ici, il est midi. Carillon peut sonner l'une ou l'autre heure. On ne lui a jamais demandé les deux. »" },
      { with: "rouget", text: "Rouget a l'oreille contre le pavé, à la mode des glaneurs. « Ferrés à glace, dit-il. Tous. Pour tenir sur les planches. Ça fait douze cents fers. Je connais des villages qui labourent avec moins. »" },
      { with: "jehan", text: "Jehan a retourné sa casaque, la doublure en dehors : elle est grise, et sans sablier. « Les blancs entrent, dit-il. Depuis que je porte une arme, on m'apprend à les saluer de loin et à les voler de près. Je vais essayer le contraire. »" },
    ],
    choices: [{ label: "Descendre sur l'esplanade", to: "K12r_esplanade", big: true }] },

  K12r_esplanade: { act: "IV", title: "Cinq mille nuques", backName: "l'esplanade", place: "palais", ambiance: "ville", hub: true, fx: { stock: { sable: -1 } },
    text: [
      { first: true, text: "{autre} te l'a écrit à midi, sur le bronze d'un cadran : *une esplanade de sable blanc que personne ne traverse en courant.* De ton côté, le sable est gris, et plus personne ne le traverse : du milieu de la place jusqu'au pied de la Tour, il porte une foule." },
      { first: true, text: "Ils sont de dos, serrés, endimanchés, la nuque renversée du même angle, cinq mille peut-être, et la chute leur a fait à tous la même perruque. À la Foire, tu en as vu dix mille qui regardaient de loin. Ceux-ci avaient le premier rang. Tu les laisses où ils sont : ils sont pour demain." },
      { first: true, text: "Par-dessus les têtes, contre la paroi de la Tour, un dais de velours rouge se tient en l'air sur ses quatre bâtons. Quatre hommes en livrée le portent à bras tendus. Sous le dais, il y a la largeur d'une femme et d'une chaise d'enfant ; et, depuis soixante ans, ces quatre hommes abritent du soleil un carré de sable." },
      { first: true, text: "Le reste de la place appartient aux vivants de cette année. La Régence y a tendu deux cordes de soie blanche sur des piquets, de la rue du Cadran à la grille dorée du Palais, pour que soixante cortèges passent au même endroit. À l'ouest, l'hôtel de la Maîtrise, son mur neuf, sa porte cochère grande ouverte. Au midi, le Palais : la grille, deux pavillons, vingt girouettes arrêtées sur le même vent." },
      { first: true, text: "Sur la gauche du Palais, le mur s'abaisse, et deux sureaux en fleur passent la tête." },
      { first: true, text: "Sous ta chemise, le sablier brûle presque. Au pied de la Tour, il rend trois grains pour un : tu feras tes visites courtes." },
      { again: true, text: "L'esplanade grise, la foule de dos, le dais qui attend. Les cordes blanches vont de la rue à la grille." },
      { again: true, after: "K12r_cortege", text: "Derrière les volets du Palais, on a allumé le soir." },
    ],
    choices: [
      { label: "La fontaine, et ce qu'on y colle tous les ans", to: "K12r_fontaine" },
      { label: "L'estrade blanche, au bord de la foule", to: "K12r_estrade" },
      { label: "La porte cochère de la Maîtrise, d'où sortent des fardiers", to: "K12r_maitrise" },
      { label: "Les ormes, le temps de souffler", hide: { any: [{ seen: "K12r_ormes" }, { not: { any: [JEHAN, ROUGET, CARILLON] } }] }, to: "K12r_ormes" },
      { label: "Le débouché de la rue du Cadran : le bruit y arrive", hide: { seen: "K12r_cortege" }, to: "K12r_cortege", big: true },
      { label: "Les manteaux blancs, qui tendent la main devant la grille", hide: { any: [{ not: { seen: "K12r_cortege" } }, { seen: "K12r_ration" }] }, to: "K12r_ration" },
      { label: "La grille dorée du Palais", if: { seen: "K12r_cortege" }, why: "La grille est fermée. On l'ouvrira pour Son Altesse, qui est encore dans la rue du Cadran.", to: "K12r_grille" },
      { label: "Le mur des jardins, entre les deux sureaux", to: "K12r_simples" },
    ] },

  K12r_fontaine: { act: "IV", title: "Soixante affiches", backName: "la fontaine", place: "palais", ambiance: "ville",
    text: [
      "C'est la fontaine où {autre} a tiré son eau. Trois cruches attendent sous un jet qui se tient debout, raide et clair. Leurs propriétaires sont allées voir sonner midi, à trente pas, et les ont laissées se remplir. Sur la margelle, quelqu'un a oublié une couronne de sauge.",
      "À hauteur d'homme, sur le fût, la Régence colle chaque année l'ordonnance du Serment, et elle la colle sur celle de l'an passé. Cela fait à présent un carton épais comme un missel, que la chute a gauchi. Le coin du bas se décolle. Tu y mets l'ongle, et tu descends dans le temps, feuille à feuille.",
      "Le texte est le même à toutes les profondeurs. *Nous, Régent d'Aurime, jurerons sur le parvis de garder le royaume à la Reine endormie, et de le lui rendre tel au jour de son réveil.* Seuls changent un prénom, deux fois, et le compte : *pour la soixantième fois, pour la cinquante-neuvième, pour la trente et unième.* Vers la vingtième, le papier devient meilleur. Vers la dixième, il est superbe.",
      "*Tel.* Depuis qu'on le jure, le royaume a perdu trois villes, une abbaye et la moitié d'une province. Le mot est resté : on retouche une carte, jamais un serment.",
      "Tout au fond, contre la pierre, il y a une feuille d'une autre encre, où manque le prénom d'un Régent. *De par la Reine. Le vingt et unième de juin, jour du Grand Midi, l'eau sera tirée avant onze heures.* Les trois cruches étaient en retard.",
      { after: "r:glane_esplanade", text: "La margelle est nette, à présent, sur la largeur de ta cuiller." },
    ],
    choices: [
      { label: "Racler la margelle, où le gris est épais d'un doigt", hide: { has: "r:glane_esplanade" }, fx: { flag: "r:glane_esplanade", stock: { sable: 2 } }, to: "K12r_esplanade" },
      { back: "K12r_esplanade" },
    ] },

  K12r_estrade: { act: "IV", title: "Sous le velours", backName: "l'estrade", place: "palais", ambiance: "ville", fx: { flag: "r:vu_estrade", ep: ["histoire", 300] },
    text: [
      "Les charpentiers de 541 l'ont clouée la veille du Grand Midi : {autre} les a entendus. Depuis, la Régence la repeint. Soixante couches de blanc ont arrondi l'arête des marches, noyé les têtes de clous, et donné à ce sapin l'épaisseur d'un meuble en sucre.",
      "Elle touche la foule par un bout. De là-haut, on a devant soi cinq mille nuques, puis le dais rouge et ses quatre porteurs, puis la porte de la Tour, puis la Tour. Demain, à onze heures, une femme de vingt-huit ans se tiendra à cette place, la main levée, et jurera face à un velours qui abrite du sable.",
      "Son père l'a fait avant elle, de bonne foi. Son grand-père l'a fait le premier : celui-là savait pourquoi la place était vide.",
      "Au pied des marches, du côté du Palais, on a posé ce soir une chaise. C'est une chaise de malade, à bras, avec une sangle de cuir pour la poitrine et une autre pour les genoux. Le coussin est neuf. La Maîtrise soigne ce qu'elle garde.",
      { after: "r:line_billet", text: "*Demain on me porte au parvis, dans ma chaise.* Elle sera à quinze pas de la Régente, à quarante de la porte de la Tour, et sanglée. Tu mesures les deux distances deux fois, au pas, comme elle te l'a appris pour les platines." },
      { after: "monde:florizel_piece", text: "Plus loin, contre les premières nuques, il y a des tréteaux, et douze portes peintes en enfilade. Onze sont ouvertes. Tu sais, par une écriture penchée, qui se tient derrière la douzième." },
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_maitrise: { act: "IV", title: "Douze fardiers", backName: "la porte de la Maîtrise", place: "palais", ambiance: "ville", fx: { flag: "r:vu_cuves_tour" },
    text: [
      { first: true, text: "La porte cochère bâille sur une cour pavée de neuf, la seule de Méridane où l'on ait posé un pavé depuis soixante ans. Il en sort un fardier, puis un autre. Chacun porte, couchée dans la paille et sanglée comme une accouchée de grande maison, une cuve de verre verdâtre, haute comme un homme. Chacun est tiré par huit casaques noires, attelées à la bricole, qui soufflent." },
      { first: true, text: "Au pied de la Tour, les chevaux bronchent. On y attelle donc des hommes, qui bronchent moins et coûtent une pincée par semaine." },
      { first: true, text: "Tu comptes douze fardiers. Ils prennent le long de la foule, sur un chemin de madriers, et vont se ranger au flanc de la Tour, du côté où il y a une porte basse. Du verre de cette épaisseur garde le gris frais. Douze cuves de cette taille, c'est de quoi rentrer une vendange." },
      { first: true, text: "Dans le mur de la loge, il y a un guichet, et derrière le guichet un commis qui pointe les fardiers sur un registre. Près de son coude, épinglée au volet, une grande feuille réglée, à deux colonnes." },
      { again: true, text: "La porte cochère, la paille qui traîne, le guichet du commis. Les fardiers sont rangés au flanc de la Tour." },
    ],
    choices: [
      { label: "Lire la feuille par-dessus son coude", hide: { any: [{ has: "r:sait_acheteurs" }, { seen: "K12r_liste_rate" }] }, test: { dom: "discretion", diff: 5, label: "Passer pour un porteur de paille", help: [{ if: { voie: "leste" }, v: 10 }, { if: ROUGET, v: 10 }, { if: { voie: "diseur" }, v: 5 }] },
        win: { fx: { flag: "r:sait_acheteurs", ep: ["histoire", 500] }, to: "K12r_liste" }, lose: { to: "K12r_liste_rate" } },
      { label: "Envoyer Jehan réclamer la paille du treizième fardier", hide: { any: [{ not: JEHAN }, { has: "r:sait_acheteurs" }] }, fx: { flag: "r:sait_acheteurs", ep: ["histoire", 500] }, to: "K12r_liste" },
      { back: "K12r_esplanade" },
    ] },

  K12r_liste: { act: "IV", title: "Quarante couverts", place: "palais", ambiance: "ville",
    text: [
      "*Réception de Monseigneur le Maître, le vingt et un juin, à onze heures trois quarts, en la salle basse de la Tour. Quarante couverts. Chacun apportera son sablier, vide.*",
      "Suivent quarante noms, de la plus belle ronde. Tu en connais six, pour les avoir lus sur des bornes de champ, des enseignes de banque et un mandement d'évêque : deux ducs, le trésorier de l'Épargne, Monseigneur de Port-Régent, une cantatrice, et un fermier des gabelles qu'on a pendu en effigie à Arvoise l'année de ta naissance, et qui se porte bien.",
      "En face de chaque nom, la seconde colonne porte un nombre : *quarante-cinq, soixante, trente, soixante-dix.* Ce sont des années. La Maîtrise tient registre de ce qu'elle a vendu à chacun, comme un tailleur garde des mesures. Le commis a fait l'addition au bas de la feuille, par plaisir de commis : *1 912.*",
      "C'est plus que l'âge du royaume. Quarante personnes ont acheté, pincée à pincée, dix-neuf siècles de jeunesse ; et on les prie à dîner demain, un quart d'heure avant midi, dans une cave, avec leur sablier vide.",
      "Tu regardes passer le dernier fardier. On remplit ce qui est vide. Demain, à midi, il y aura de quoi.",
      { with: "jehan", text: "Jehan revient avec une botte de paille sous chaque bras et la feuille dans la tête. « La cantatrice, dit-il. Elle chantait pour la Garde, à la Saint-Gnomon. Ma grand-mère l'avait entendue à vingt ans. Elle disait : *elle n'a pas changé.* On trouvait cela gentil. »" },
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_liste_rate: { act: "IV", title: "Du large", place: "palais", ambiance: "ville",
    text: [
      "Le commis lève le nez au mauvais moment. Il a l'œil d'un homme qui pointe des choses depuis vingt ans, et qui sait le poids d'une botte de paille. « Du large. » Le volet claque sur son coude.",
      "Tu as eu le temps de trois mots, *quarante couverts*, et d'une addition au bas d'une colonne, trop longue pour un dîner.",
      { after: "r:courtenvaux_note", text: "Avant de fermer, il t'a regardé{e} une seconde de trop. Il a sur son registre six lignes d'une écriture de collège, montées ce soir de la barrière, et il vient de mettre une figure à côté." },
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_ormes: { act: "IV", title: "Sous les ormes", place: "palais", ambiance: "ville", fx: { pv: 2 },
    text: [
      "Tu t'adosses à un orme. L'écorce est tiède du côté de midi, comme elle l'était il y a soixante ans à cette heure, et comme elle le sera demain. Tu manges ce que tu as.",
      { with: "jehan", after: "r:jehan_timbale", text: "Jehan a tiré de sa chemise une timbale d'argent, et il la tourne entre ses doigts. « Demain, je monte. » Il la range. « Demande-moi tout ce que tu voudras, sauf si j'ai peur. Demande-moi plutôt si j'irai. »" },
      { with: "jehan", before: "r:jehan_timbale", text: "Jehan regarde, par-dessus le mur de la Guilde, une fenêtre du nord. « On nous faisait cracher, dit-il. J'ai craché onze fois. Je voudrais savoir combien de fois il faut faire le contraire pour que cela s'efface. »" },
      { with: "rouget", text: "Rouget a compté ses poches, puis les tiennes, de l'œil. « Quand ce sera fini, dit-il, que ça reparte ou que ça reste, on glanera quoi ? » Il mâche. « Je sais rien faire d'autre. J'ai jamais vu un champ qui bouge. »" },
      { with: "carillon", after: "r:lettre_coudrier", text: "Carillon se tient debout dans l'ombre courte, les bras le long du corps. « Carillon a remis sa lettre. Il est sans commission. C'est la première fois depuis vingt et un mille neuf cents jours. » La tête ronde pivote vers toi. « Il demande s'il peut porter quelque chose. N'importe quoi. Un caillou. »" },
      { with: "carillon", before: "r:lettre_coudrier", text: "« Il est huit heures un quart du soir dans le royaume, dit Carillon. On soupe. Carillon se passe de souper. Il le signale sans amertume. »" },
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_cortege: { act: "IV", title: "Son Altesse entre à midi", place: "palais", ambiance: "ville", fx: { flag: "r:vu_cortege", ep: ["histoire", 400] },
    text: [
      "Ils débouchent de la rue du Cadran un par un. La rue appartient aux familles de 541, qui la montent depuis soixante ans et qu'on ne pousse pas. Le cortège de la Régente d'Aurime fait donc des politesses : il contourne une nourrice, il s'efface devant un tonnelier, il attend qu'un cheval ait trouvé où poser le pied entre deux enfants de chœur.",
      "D'abord douze manteaux blancs, à pied, la hallebarde haute. Puis les chevaux. Chacun porte au frontail, dans une monture d'argent, un sablier gros comme une noix, qui coule. Un royaume qui met trois cents sabliers à trois cents chevaux pour la promenade d'un soir sait encore où trouver de l'argent, et il le trouve toujours au même guichet.",
      "Puis la Cour. Tu la vois pour la première fois. Elle a le teint frais. Elle monte bien. Il y passe des ducs dont le nom était déjà vieux du temps de ta grand-mère, et qui ont la joue d'un page ; une douairière en amazone, la taille prise, qui fut demoiselle d'honneur d'une Régente morte ; un évêque rose. Les seuls vieillards du cortège sont les valets.",
      "Elle vient après eux, seule, sur une jument grise. Elle est en blanc, comme toute sa maison : la Régence porte depuis soixante ans le petit deuil d'une femme qui dort. Elle a vingt-huit ans, et elle les paraît. C'est, de toute la Cour, la seule figure qui ait son âge.",
      { if: CONNU, text: "En passant devant les ormes, elle a tourné la tête. Ses yeux se sont arrêtés sur tes sabots, le temps d'une foulée de jument, puis ils sont repartis. Elle n'a rien dit à personne." },
      "Derrière viennent les bagages, portés à bras. Des lits. Des coffres de cierges, par douzaines : la Cour apporte ici sa nuit en caisses. Et une grande pendule de voyage, tenue droite entre deux valets qui marchent au pas, parce qu'elle bat, et que l'heure de la Cour entre à Méridane dans cette boîte.",
      "À la grille dorée, un homme attend, tête nue, sa canne sous le bras. Habit gris, souliers fins. Il a passé l'après-dînée sur une autre colline, dans une cour où il va seul ; il a eu le temps de changer de jabot. Il s'avance, et il tient l'étrier.",
      { after: "r:regente_doute", text: "Elle descend de l'autre côté. C'est contraire à tous les usages du cheval et de la Cour, et elle le fait avec tant de naturel que l'écuyer a tout juste le temps de courir. L'homme en gris reste un instant avec un étrier vide dans la main. Puis il sourit, et il le lâche." },
      { before: "r:regente_doute", text: "Elle pose la main sur son épaule pour descendre, comme elle le fait tous les ans. Il dit quelques mots. Elle rit. Ils entrent ensemble ; et la grille se referme sur un homme de quatre-vingt-dix ans qui donne le bras à la petite-fille de son premier client." },
      { with: "jehan", text: "Jehan s'est mis derrière un orme pendant que passaient les noirs de l'escorte. « Le troisième, c'était mon chef de chambrée. Il ronfle. » Il a l'air surpris de le revoir sans haine." },
      "Sitôt la grille close, les fenêtres du Palais se ferment l'une après l'autre : des valets en blanc poussent les volets sur le midi de la place. Entre les lames, on voit s'allumer des cierges. La Cour d'Aurime se couche à la nuit, c'est l'étiquette ; faute de nuit, elle en fabrique une, à la main, pièce par pièce.",
    ],
    choices: [
      { label: "Un page en blanc, qui vient droit vers les ormes", hide: { not: CONNU }, fx: { flag: "r:regente_attend" }, to: "K12r_page" },
      { label: "Les commis noirs, qui passent dans les rangs un panier au bras", to: "K12r_ration" },
      { back: "K12r_esplanade" },
    ] },

  K12r_page: { act: "IV", title: "Après le coucher", place: "palais", ambiance: "ville",
    text: [
      "Il a douze ans, de vrais douze ans, et un sablier d'argent à la boutonnière. Il se plante devant toi, les yeux au ciel, et il récite.",
      { after: "r:regente_depeche", text: "« Son Altesse fait dire qu'elle reçoit après son coucher, à l'Orangerie, la personne des champs qui lui a donné un papier à Sainte-Aure. Son Altesse dit que ce papier lui a gâté quatre nuits, et qu'elle en prendrait volontiers un second. »" },
      { before: "r:regente_depeche", text: "« Son Altesse fait dire qu'elle reçoit après son coucher, à l'Orangerie, la personne des champs à qui elle a demandé un papier. Son Altesse dit qu'elle espère que la personne l'a trouvé. »" },
      "Il baisse les yeux, et la voix. « Le coucher, c'est à dix heures à la pendule. Vous entendrez : on souffle tout d'un coup. Passez par les jardins. À la grille, ils ont une liste. »",
      "Il repart en courant. Au bout de dix pas, il se rappelle qu'un page marche.",
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_ration: { act: "IV", title: "La ration du soir", backName: "les manteaux blancs", place: "palais", ambiance: "ville", fx: { flag: "r:vu_ration" },
    text: [
      "Les manteaux blancs ont formé les faisceaux devant la grille. Ils sont deux cents de ce côté des barreaux, debout, la main ouverte, comme on attend la soupe.",
      "Trois commis de la Maîtrise passent dans les rangs avec des paniers. Chaque homme reçoit une papillote de papier gris, cachetée de noir, et signe d'une croix sur un registre. Les bas officiers en touchent trois. C'est la ration du soir : de quoi rester debout jusqu'à prime, dans une ville où quarante mille personnes le font pour rien.",
      "Le vieux sergent de la fontaine est au bout du premier rang. Il soupèse sa papillote dans une main large comme une pelle. « Plus légère que l'an dernier, dit-il à la cantonade. Tout maigrit dans ce royaume, sauf le Serment. »",
      "À côté de lui, un jeune a déchiré la sienne trop vite. La moitié lui file entre les doigts et tombe sur le sable de la place. Il jure. Tu regardes tomber.",
      "Ce matin, rue du Cadran, le gris luisait un instant en touchant le pavé. Celui-ci tombe comme de la cendre de sarment, et se couche.",
    ],
    choices: [
      { label: "Te baisser, et en pincer une prise", hide: { has: "r:ration_froide" }, fx: { flag: "r:ration_froide", item: "prise_froide" }, to: "K12r_ration_froide" },
      { back: "K12r_esplanade" },
    ] },

  K12r_ration_froide: { act: "IV", title: "Une prise", place: "palais", ambiance: "ville",
    text: [
      "Tu te baisses comme pour rattacher un sabot. Tu en pinces une prise entre deux doigts, par habitude de métier.",
      "Elle est froide, et elle le reste dans ta paume. Ton sablier, lui, te chauffe la poitrine depuis la barrière.",
      "Tu la noues dans un coin de ta chemise.",
    ],
    choices: [
      { label: "Ouvrir la main sous le nez du vieux sergent", hide: { any: [{ not: { has: "r:blanc_parle" } }, { has: "r:haudoin_averti" }] }, fx: { flag: "r:haudoin_averti", meet: "haudoin", ep: ["perso", 400] }, to: "K12r_haudoin" },
      { back: "K12r_esplanade" },
    ] },

  K12r_haudoin: { act: "IV", title: "Le dos de deux doigts", place: "palais", ambiance: "ville",
    text: [
      "Il te reconnaît à tes sabots. « Ça glane toujours. » Tu ouvres la main. Il regarde la prise, puis sa papillote, puis toi.",
      "« C'est du sable de la Maîtrise. Il sort de leurs caves, il a pris le frais. Je m'appelle Haudoin. J'ai monté dix-neuf Serments avec ce papier-là dans la poche, et tu vois que je suis encore debout pour te le dire. »",
      "Il fait un pas vers son rang. Il s'arrête. Il ôte son gant, et il pose le dos de deux doigts sur ta paume, comme on tâte le front d'un enfant. Il reste ainsi le temps d'un Pater.",
      "« Froid. » Il remet son gant, doigt après doigt. « Je me tairai devant les hommes. Deux cents gaillards qui prennent peur à la brune, on ne les rattrape plus avant le matin. Mais j'ai en poche ma papillote de prime, que je gardais pour la soif. Je la garderai pour autre chose. Et cette nuit, la ronde de l'Orangerie, je la ferai moi-même. »",
      "Il rentre dans le rang. Il a repris sa figure de faction, où l'on ne lit rien.",
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_grille: { act: "IV", title: "La grille dorée", backName: "la grille", place: "palais", ambiance: "chateau",
    text: [
      "Deux manteaux blancs croisent la hallebarde devant le guichet. Entre eux, un huissier en blanc tient une liste longue d'une aune, qu'il déroule à mesure. Soixante cortèges ont appris à cette maison qu'il s'y glisse chaque année un marchand d'almanachs.",
      "« Nom, qualité, et de la part de qui. » Il parle à sa liste. « On entre chez la Reine endormie avec les trois, ou l'on reste sur la place, qui est fort belle. »",
    ],
    choices: [
      { label: "« Des champs. Son Altesse a fait dire : après le coucher. »", hide: { not: { has: "r:regente_attend" } }, fx: { flag: "r:entre_grille" }, to: "K12r_grille_passe" },
      { label: "Prendre les deux seaux du sergent Haudoin, qui passe justement", hide: { not: { has: "r:haudoin_averti" } }, fx: { flag: "r:entre_grille" }, to: "K12r_grille_passe" },
      { label: "Lui en donner trois, de ton invention", hide: { seen: "K12r_grille_rate" }, test: { dom: "social", diff: 10, label: "Avoir un nom, une qualité et quelqu'un", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }, { if: { has: "r:regente_parle" }, v: 10 }] },
        win: { fx: { flag: "r:entre_grille" }, to: "K12r_grille_passe" }, lose: { to: "K12r_grille_rate" } },
      { back: "K12r_esplanade" },
    ] },

  K12r_grille_rate: { act: "IV", title: "Suivant", place: "palais", ambiance: "chateau",
    text: [
      "« De la part de personne », traduit l'huissier. Il a mis à sa plume un petit mouvement de balai. « Suivant. »",
      "Il n'y a pas de suivant. Les deux hallebardes sont restées croisées, sans effort, et l'un des manteaux blancs regarde, par-dessus ta tête, le mur des jardins, avec l'air de quelqu'un qui te donne un conseil.",
    ],
    choices: [{ back: "K12r_esplanade" }] },

  K12r_grille_passe: { act: "IV", title: "La cour d'honneur", place: "palais", ambiance: "chateau",
    text: [
      "La hallebarde de gauche se lève. L'huissier écrit quelque chose au bas de sa liste, d'une plume chagrine : tu es, cette année, le marchand d'almanachs.",
      "La cour d'honneur est à moitié prise et à moitié louée. Du côté de la Reine, trois valets de 541 portent des plats couverts vers une aile aux volets clos, depuis soixante ans, et la sauce attend. Du côté de la Régente, les valets de 601 déroulent des tapis autour d'eux, avec le soin qu'on met à tondre au pied d'une statue.",
      "Personne ne te demande rien. Dans une maison où la moitié des gens se tiennent immobiles, on cesse vite de regarder ceux qui marchent.",
      "Une porte basse, à main gauche, donne sur les jardins.",
    ],
    choices: [{ label: "Prendre la porte basse", to: "K12r_jardin", big: true }] },

  K12r_simples: { act: "IV", title: "Deux sureaux", backName: "la porte verte", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "Le mur s'abaisse entre deux pieds de sureau, en fleur depuis soixante ans. Tu marches dessous, et l'odeur te tombe dessus d'un coup, sucrée, entêtante, avec le bruit d'une abeille. Tu t'arrêtes : l'abeille et l'odeur s'arrêtent." },
      { first: true, text: "La petite porte est verte, comme {autre} l'a écrit. Une vieille femme se tient devant, du côté de la place, en coiffe du dimanche, un panier au bras. Elle a la clef dans la serrure et la main sur la clef. Elle fermait son jardin pour aller entendre midi : elle partait la dernière, comme tous ceux qui ont quelque chose à arroser." },
      { first: true, text: "Tu essaies la clef par-dessus ses doigts. Elle a la dureté d'une chose scellée. Ce que tient un pris est tenu." },
      { again: true, before: "r:sauge_eveillee", text: "Les deux sureaux, la porte verte, la vieille femme et sa clef." },
      { again: true, after: "r:sauge_eveillee", text: "Les deux sureaux, la vieille femme tournée vers son jardin, et la porte verte, qui bâille d'une main." },
    ],
    choices: [
      { label: "Poser une pincée sur la main qui tient la clef", hide: { has: "r:sauge_eveillee" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:sauge_eveillee", "r:entre_simples"], ep: ["histoire", 500] }, to: "K12r_sauge" },
      { label: "Passer par-dessus le mur, dans le sureau", hide: { has: "r:entre_simples" }, test: { dom: "nature", diff: 0, label: "Monter sans casser une branche à cette femme", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { fx: { flag: "r:entre_simples" }, to: "K12r_jardin" }, lose: { fx: { flag: "r:entre_simples", pv: -1 }, to: "K12r_jardin" } },
      { label: "Entrer dans le jardin", hide: { not: { has: "r:entre_simples" } }, to: "K12r_jardin", big: true },
      { back: "K12r_esplanade" },
    ] },

  K12r_sauge: { act: "IV", title: "Celle qui partait la dernière", place: "palais", ambiance: "chateau",
    text: [
      "Les doigts achèvent leur tour. Le pêne claque. Elle retire la clef, la met dans son panier, se retourne, et te trouve à un pied de son nez.",
      "Elle a les yeux ronds d'une poule et les mains d'un terrassier. Elle regarde tes sabots gris, le gris sur ses propres manches, et, derrière toi, la place où cinq mille personnes se taisent.",
      "« La cloche s'est tue. » Elle l'a dit avant que tu ouvres la bouche. « J'ai compté onze en fermant, et j'attends l'autre. » Elle écoute encore, la tête de côté. « Elle s'est tue pour longtemps ? »",
      "Tu lui dis soixante ans. Tu le dis vite : sa pincée coule.",
      "« Soixante. » Elle l'accepte sans marchander. Les gens qui sèment croient aux longs délais. « Alors, mon thym. Quelqu'un s'est mis à genoux dedans, hier à none, entre la tortue du nord et le socle. J'ai vu la terre ce matin : remuée à la main, retassée avec la paume, à la façon de ceux qui n'ont jamais jardiné. Je me suis tue. J'ai repiqué trois pieds dessus. Chez moi, ce qu'on met en terre, on le retrouve. »",
      "Elle rouvre son panier, y reprend la clef, la remet dans la serrure, et tourne dans l'autre sens. « Vous venez chercher. Cela se voit aux genoux. Entrez par la porte, comme les gens. »",
      "Le battant s'écarte d'une main. Sur la clef, les vieux doigts ralentissent. « Le douzième, dit-elle encore, vous me direz si... » La phrase reste là. Elle a repris sa figure de midi, tournée cette fois vers ses plates-bandes.",
    ],
    choices: [{ label: "Entrer par la porte, comme les gens", to: "K12r_jardin", big: true }] },

  K12r_jardin: { act: "IV", title: "Le jardin des Simples", backName: "le jardin", place: "palais", ambiance: "chateau",
    text: [
      { outcome: "lose", text: "La branche casse. Tu arrives dans le jardin de la Reine par les groseilliers, sur le dos, une grappe de sureau entre les dents." },
      { outcome: "win", text: "Tu passes le faîte à plat ventre, et tu te laisses couler de l'autre côté. Dans le sureau, toutes les fleurs sont restées à leur place." },
      { first: true, text: "C'est un jardin de curé qu'on aurait donné à une reine : des carrés bordés de buis, de la rue, de la mélisse, des étiquettes de plomb. Les jardiniers sont à la fête. Un arrosoir est resté debout dans une allée, avec, au bout de sa pomme, sept gouttes en l'air." },
      { first: true, text: "Au fond, sous les tilleuls, l'Orangerie. Les valets de la Régente y clouent des tentures et y bouchent le jour. Une croisée après l'autre, le midi s'y éteint, et le soir de la Cour s'y allume." },
      { first: true, text: "À dix pas du mur, sur un socle, deux tortues de bronze portent un cadran solaire. Elles sont vertes de pluie. Entre celle du nord et le socle, il y a une plate-bande de thym, où trois pieds sont plus jeunes que les autres." },
      { first: true, if: GUETTE, text: "Un homme est assis sur le socle, entre les deux tortues. Casaque noire, sablier d'or. Il mange des cerises dans son chapeau, et il crache les noyaux dans le thym. Le Maître des Sables a fait suivre quelqu'un, l'autre jour, jusqu'à un cadran du port ; depuis, les cadrans de cette ville ont chacun leur mangeur de cerises." },
      { again: true, if: GUETTE, text: "Les carrés de buis, l'Orangerie qu'on tend de noir, le cadran aux tortues. L'homme aux cerises y est toujours assis." },
      { again: true, if: { not: GUETTE }, text: "Les carrés de buis, l'Orangerie qu'on tend de noir, le cadran aux tortues." },
    ],
    choices: [
      { label: "L'homme aux cerises", hide: { not: GUETTE }, to: "K12r_guetteur" },
      { label: "T'agenouiller dans le thym", hide: GUETTE, to: "K12r_cadran", big: true },
    ] },

  K12r_guetteur: { act: "IV", title: "Un homme sur un cadran", place: "palais", ambiance: "chateau",
    text: [
      "Il s'ennuie. On l'a posté là depuis prime, avec l'ordre de regarder la terre, et la terre s'est tenue tranquille. Il a un sifflet au cou, un sabre court, et la figure d'un homme qui compte ses noyaux.",
      "Tu es derrière un buis taillé en boule, à quinze pas. Il lui reste une poignée de cerises.",
    ],
    choices: [
      { label: "Laisser Carillon sonner la soupe de la Garde", hide: { not: CARILLON }, fx: { flag: ["r:guetteur_parti", "r:guetteur_soupe"] }, to: "K12r_guetteur_fin" },
      { label: "Envoyer Jehan le relever, d'une voix de brigadier", hide: { not: JEHAN }, fx: { flag: ["r:guetteur_parti", "r:guetteur_releve"] }, to: "K12r_guetteur_fin" },
      { label: "Attendre, à plat ventre dans la mélisse, qu'il aille toucher sa ration", test: { dom: "discretion", diff: 5, label: "Rester une plante parmi les plantes", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "tetu" }, v: 10 }, { if: ROUGET, v: 5 }] },
        win: { fx: { flag: ["r:guetteur_parti", "r:guetteur_ration"] }, to: "K12r_guetteur_fin" }, lose: { fx: { flag: ["r:guetteur_parti", "r:guetteur_alerte"], pv: -1 }, to: "K12r_guetteur_fin" } },
      { label: "Lui tomber dessus avant le sifflet",
        fight: { title: "L'homme aux cerises", enemies: [{ id: "garde_sable", n: 1 }], terrain: "nature",
          win: { fx: { flag: ["r:guetteur_parti", "r:guetteur_battu"], stock: { sable: 1 } }, to: "K12r_guetteur_fin" },
          lose: { fx: { flag: ["r:guetteur_parti", "r:guetteur_alerte"], pv: -2, stock: { sable: -1 } }, to: "K12r_guetteur_fin" } } },
    ] },

  K12r_guetteur_fin: { act: "IV", title: "Les noyaux", place: "palais", ambiance: "chateau",
    text: [
      { after: "r:guetteur_soupe", text: "Carillon ouvre la bouche. Il en sort, à s'y tromper, la cloche fêlée de la cantine de la Maîtrise, trois coups et un : il l'entend par-dessus les toits depuis quarante ans. L'homme a levé le nez à la première note. Il vide son chapeau, s'en coiffe, et s'en va par l'allée des buis, d'un pas qui s'allonge." },
      { after: "r:guetteur_soupe", text: "« Carillon a sonné faux, dit Carillon. La cloche est fêlée. Il a sonné la fêlure. »" },
      { after: "r:guetteur_releve", text: "Jehan a remis sa casaque à l'endroit. Il arrive par l'allée, les pouces au ceinturon, et il dit un seul mot : « Relève. » L'autre regarde le sablier d'or recousu de travers, hésite, puis regarde ses cerises, qui sont finies. Il salue. Il part souper." },
      { after: "r:guetteur_releve", text: "Jehan s'assoit à sa place sur le socle, et il s'aperçoit que ses genoux tremblent. « J'ai fait le brigadier Gallot. Je l'ai haï trois ans. Cela sert. »" },
      { after: "r:guetteur_ration", text: "Tu attends, à plat ventre entre la rue et la mélisse, le temps de trois psaumes. Un commis paraît à la porte de l'Orangerie, un panier au bras. L'homme se lève, s'étire, et va toucher sa papillote. On lui raconte quelque chose : il s'attarde." },
      { after: "r:guetteur_battu", text: "Il a eu le sifflet à mi-chemin des lèvres. Il est couché à présent dans la mélisse, les mains liées de son propre ceinturon, son chapeau sur la figure, et il respire comme un homme qui dort. Tu as fait cela à cent pas de deux cents manteaux blancs, qui n'ont rien entendu : les jardins des reines sont bien plantés." },
      { after: "r:guetteur_alerte", text: "Il t'a mis{e} par terre, il a sifflé, et il est parti en courant vers la grille : on l'avait posté pour prévenir, et il aime mieux cela que se battre. Tu as le temps de deux Pater avant qu'il revienne à plusieurs. C'est assez pour ce que tu as à faire, en creusant des deux mains." },
      "Les noyaux sont restés dans le thym. Tu les ôtes un par un, par égard pour une jardinière.",
    ],
    choices: [{ label: "T'agenouiller dans le thym", to: "K12r_cadran", big: true }] },

  K12r_cadran: { act: "IV", title: "Trois pieds de thym", place: "palais", ambiance: "chateau",
    text: [
      "Tu arraches les trois pieds jeunes. Ils ont soixante ans et la taille de ton doigt : dans ce jardin, on garde l'âge où l'on vous a planté.",
      "Dessous, la terre est meuble comme de la farine. Tu creuses à la main. De l'autre côté de cette terre, hier, {autre} était à genoux à la même place, et la retassait avec la paume.",
      "Le bronze des tortues est tiède. Tu poses le Cahier dessus.",
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "M12", big: true }] },
});

module.exports = { passages: P, extras: {
  people: {
    haudoin: { name: "Le sergent Haudoin", f: false, aka: ["le sergent Haudoin", "Haudoin", "le vieux sergent"], face: { age: "mur", skin: "hale", hair: "gris", coif: "court", beard: "moustache", eyes: "amande", iris: "brun", nose: "large", lips: "fines", shape: "carre" },
      aspect: { allure: "soixante ans, large, le dos d'une porte", habits: "manteau blanc, hallebarde fourbie", signe: "finit son fer avant de répondre" }, qui: "Sergent des manteaux blancs de la Régente.", desc: "Sergent de la garde de la Régente. Il a monté dix-neuf Serments à Méridane, et son père vingt avant lui." },
  },
  items: {
    prise_froide: { name: "Prise de la ration du soir", kind: "divers", keep: true, price: 0, desc: "Une prise de poudre grise, nouée dans un coin de chemise. Elle vient d'une papillote de la Maîtrise, cachetée de noir. Elle est froide, et elle le reste." },
  },
} };
