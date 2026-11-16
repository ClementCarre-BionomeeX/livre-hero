// Lot i4 of "Le Trésor des Taiseurs": Odeline's shop seen again in Act I (IQ_), the Salt-makers' port (IF_port hub,
// two side quests, treasures), and the climax of Act I: the arrest warrant, the chase through Salvèze, Tibère's
// choice, Fauvette staying behind, the queen's sewers by boat with Lison, and the exit towards Act II (IF_fin).
var P = {};

// The warrant as it is nailed up (the same hidden words on the placard torn off, and in the passage where it is read).
var MANDAT = "*De par le Conseil des Comptoirs et le capitaine du Guet de Salvèze : ordre est donné de saisir au corps la personne dite {hero}, du quai des Lanternes, apprenti{e} de la défunte Odeline Carrus, pour le meurtre de ladite Odeline Carrus, poussée dans l'escalier de sa cave la nuit des Lanternes. Témoins : Clarmonde Pujol, logeuse, qui a entendu la dispute de dix heures ; Théodore Sauzet, allumeur du quai, {{loupe#if_mandat_gratte|qui a vu descendre à la cave, avec la défunte, à minuit, la personne ici recherchée|présenté au capitaine par Lothaire Brunel, chercheur de la Banque Marrel, mots grattés au canif et recouverts d'une autre encre}}. Cinquante ducats à qui le ou la livrera au Guet.*";

// ==================================================================== the shop, seen again (no place: from I_hub)
Object.assign(P, {
  IQ_boutique: { act: "I", title: "La boutique d'Odeline", backName: "la boutique d'Odeline",
    text: [
      { first: true, text: "La boutique d'Odeline est la troisième après le pont, et tu la reconnais de loin à son enseigne : une main de bois peinte qui tient une clé, et dessous, en lettres jaunes écaillées, *Carrus — Choses perdues, choses retrouvées.* Quelqu'un a tendu une cordelette en croix sur la porte, d'un montant à l'autre, et l'a fixée au milieu par un pain de cire rouge où l'on a pressé la tour du Guet." },
      { first: true, text: "Sous le scellé, une affiche clouée, encore fraîche : *Vente par autorité de justice des biens meubles de la défunte Odeline Carrus, à la requête de Maître Josserand Tiercelin, prêteur sur gages. Jeudi, à la cloche de tierce.* Sur les trois marches, un jeune homme maigre en manteau de serge noire tient une écritoire sur ses genoux. Il regarde par la fenêtre et il écrit. C'est Fortunat, le commis de Tiercelin : il dresse l'inventaire de ce qu'il voit à travers les carreaux, méthode qui permet de saisir une maison sans y mettre le pied." },
      { first: true, text: "Le pas de porte {{echo#iq_echo_porte|garde ses trois marches usées au milieu par quarante ans de clients|garde une voix de femme, la nuit de la fête, lancée dans la rue après un claquement de porte : « Va donc à ta fête, et reviens quand tu sauras te taire »}}. Les volets du premier étage sont fermés. Celui de gauche pend d'un gond, comme depuis toujours." },
      { again: true, before: "i4:boutique_reglee", text: "La cordelette en croix, la cire rouge, l'affiche de Tiercelin. Fortunat a changé de marche ; il écrit toujours." },
      { after: "i4:boutique_vendue", text: "Les volets sont ouverts et la boutique est vide jusqu'aux murs. Sur la porte, une affiche neuve : *À louer. S'adresser à Maître Tiercelin.* L'enseigne à la clé a disparu ; il reste ses deux crochets de fer, et la trace plus claire qu'elle a laissée sur la pierre." },
      { after: "i4:boutique_scellee", text: "Deux planches clouées en travers de la porte, et le scellé du Guet refait à neuf, cire rouge sur cordelette. Derrière les carreaux, les choses d'Odeline attendent à leur place, sous une poussière qui s'épaissit." },
      { after: "i4:boutique_pillee", text: "La porte bat sur un gond. Les étagères sont nues ; on a pris jusqu'aux crochets du mur. Sur le comptoir, quelqu'un du quai a posé une lanterne de papier de la fête, éteinte, bien droite, à la place de la sonnette." },
      { with: "lison", first: true, text: "Lison lit l'affiche par-dessus ton épaule, les bras croisés. « Jeudi, dit-elle. Ils n'ont même pas attendu que la terre ait tassé sur elle. » Elle crache dans le canal, proprement, sans viser personne." },
    ],
    choices: [
      { label: "Parler au commis de Tiercelin", to: "IQ_creancier" },
      { label: "Briser le scellé et entrer", tag: "Le Guet le saura", hide: { any: [{ has: "i4:dedans" }, { has: "i4:boutique_reglee" }] }, to: "IQ_sceau" },
      { label: "Faire le tour par le canal, jusqu'au soupirail de la cave", hide: { any: [{ has: "i4:dedans" }, { has: "i4:boutique_reglee" }] }, to: "IQ_soupirail" },
      { label: "Aller trouver le sergent du Guet, au bout du quai, pour faire lever le scellé", hide: { any: [{ has: "i4:dedans" }, { has: "i4:boutique_reglee" }, { seen: "IQ_sergent" }] }, to: "IQ_sergent" },
      { hide: { any: [{ not: { has: "i4:dedans" } }, { has: "i4:boutique_reglee" }] }, back: "IQ_dedans" },
      { label: "Frapper à la porte d'à côté, à la pension de Clarmonde", if: { item: "iq_boite_gages" }, why: "Tu n'as rien à lui dire, pour l'instant, qui vaille de la déranger.", hide: { seen: "IQ_voisine" }, to: "IQ_voisine" },
      { back: "I_hub" },
    ] },

  IQ_creancier: { act: "I", title: "Le commis de Tiercelin", backName: "les marches de la boutique",
    fx: { meet: "iq_fortunat" },
    text: [
      { first: true, text: "Fortunat se lève à moitié, sans lâcher son écritoire. Il a vingt ans, des taches d'encre jusqu'au poignet, et la politesse appliquée de quelqu'un qu'on renvoie à la moindre plainte. « Vous êtes l'apprenti{e}, dit-il. Mes condoléances. Maître Tiercelin m'a chargé de vous faire une proposition, si vous passiez. »" },
      { first: true, text: "Il consulte une feuille. « La défunte devait cent vingt ducats, intérêts compris. La vente de jeudi en rapportera peut-être cent, le reste sera perdu pour mon maître. Il vous propose de traiter de gré à gré, tout de suite : la boutique entière, le stock, les meubles. Il efface la dette, il vous laisse cinq ducats et vos effets personnels. Vous éviteriez de voir les choses de votre maîtresse vendues à la criée devant tout le quai. »" },
      { first: true, text: "« Maître Tiercelin {{oreille#iq_billets|détenait les billets de la défunte depuis des années, il a été patient|a racheté les billets de la défunte à la Banque Marrel le lendemain de sa mort, pour un liard le ducat}}, ajoute-t-il. Il ne veut pas paraître dur. »" },
      { again: true, before: "i4:boutique_reglee", text: "Fortunat relève le nez de son inventaire. « Vous avez réfléchi ? Jeudi approche. Mon maître ne refera pas son offre. »" },
      { after: "i4:boutique_reglee", text: "Fortunat range son écritoire. « C'est réglé, n'est-ce pas ? dit-il. Alors je n'ai plus rien à faire ici. » Il hésite, puis il ajoute plus bas : « Elle me donnait des pommes, quand je venais compter. Je ne l'ai jamais dit à mon maître. »" },
      { if: { has: "pf:dette_quittance" }, first: true, text: "« Maître Gaudrel, du pont aux Liards, a retiré sa créance sur la défunte, ajoute Fortunat. Mon maître dit qu'il ne l'avait jamais vu reculer devant un papier, et qu'il aimerait connaître le papier. »" },
      { if: { has: "pf:dette_promesse" }, first: true, text: "Fortunat tourne une page. « Il y a aussi une ligne de Maître Gaudrel, du pont aux Liards. Elle est à votre nom, et pas à celui de la défunte. Il fait savoir à mon maître qu'on ne la vend pas : il la garde pour lui. »" },
      { with: "tibere", first: true, text: "Tibère regarde le commis de haut en bas, la moustache basse. « Tiercelin, grogne-t-il. Il prête aux joueurs à la semaine. Je le connais mieux que je voudrais. »" },
    ],
    choices: [
      { label: "Accepter : vendre à Tiercelin la boutique et tout ce qu'elle contient", hide: { has: "i4:boutique_reglee" }, to: "IQ_vente" },
      { label: "Lui dire que rien ne sera vendu tant que le Guet enquête", hide: { has: "i4:boutique_reglee" }, to: "IQ_scelle" },
      { label: "Lui demander ce qu'il a déjà inventorié par la fenêtre", once: true, fx: { ep: ["perso", 150] }, to: "IQ_creancier_liste" },
      { back: "IQ_boutique" },
    ] },

  IQ_creancier_liste: { act: "I", title: "L'inventaire de la fenêtre",
    text: [
      "Fortunat te tend sa feuille, flatté qu'on s'intéresse à son travail. Il a une belle écriture ronde et il a tout compté. *Une jambe de bois, ferrée. Quarante-deux clés, dont trois d'église. Un gant de dame, brodé, seul. Une cage à perroquet, vide. Un violon sans cordes. Un comptoir de chêne. Une sonnette. Un fauteuil à oreilles, recouvert de velours vert râpé.*",
      "Au bas de la page, d'une main plus hésitante : *Une tasse sur le comptoir, avec du thé dedans.* Il a rayé la ligne, puis il l'a récrite.",
      "« On compte tout, dit-il en reprenant la feuille. C'est le métier. »",
    ],
    choices: [{ back: "IQ_creancier" }] },

  IQ_sceau: { act: "I", title: "Le scellé",
    fx: { flag: ["i4:sceau_brise", "i4:dedans"] },
    text: [
      "Tu glisses ta lame sous la cordelette, à l'endroit où elle entre dans la cire, et tu tires. La cire se fend avec un petit bruit sec ; la tour du Guet tombe en deux morceaux sur la première marche. Fortunat s'est levé tout à fait. « C'est un scellé de justice, dit-il d'une voix trop haute. Je {{oreille|suis obligé de le signaler, vous comprenez|vais courir le dire à mon maître, et mon maître le dira à la Banque, qui paie pour savoir}}. »",
      "À la pension d'à côté, le rideau de Clarmonde bouge, puis retombe. Tu connais ce rideau depuis l'enfance : il a vu passer toutes tes rentrées tardives.",
      "La clé d'Odeline est toujours dans ta poche. La serrure tourne comme d'habitude, avec le même accroc au milieu, et la porte s'ouvre sur l'odeur de la boutique.",
      { with: "lison", text: "Lison ramasse un morceau de cire, le retourne, le jette au canal. « Maintenant, dit-elle, ils ont une raison de te chercher. Ils en avaient déjà une, mais celle-là, ils pourront l'écrire. »" },
    ],
    choices: [{ label: "Entrer", to: "IQ_dedans" }] },

  IQ_soupirail: { act: "I", title: "Le soupirail du canal",
    text: [
      "La cave d'Odeline a un soupirail sur le canal des Lanternes, au ras de l'eau : une grille de fer scellée dans la pierre, que la rouille a mangée à la base. Odeline y faisait passer ses colis lourds, depuis une barque, quand elle ne voulait pas que le quai les voie entrer. Tu sais que le barreau de gauche tient par habitude.",
      "Pour l'atteindre, il faut longer le quai par l'eau, sous les fenêtres, sans que le commis de Tiercelin ou les fenêtres de la pension te voient passer. Le canal est vert et froid, d'un vert opaque qui garde pour lui ce qu'il recouvre. Une barque de légumes descend vers les Halles en poussant un tas de lanternes de papier mortes.",
      { with: "lison", text: "Lison regarde le soupirail, puis sa barque, amarrée trois maisons plus loin. « Tu montes, tu te couches au fond, tu ne bouges plus, dit-elle. Je fais ça depuis l'âge de six ans. »" },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Lison : sa barque glisse sous les fenêtres", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison longe le quai" },
        win: { fx: { flag: "i4:dedans", ep: ["perso", 400], conf: { lison: 5 } }, to: "IQ_cave" }, lose: { to: "IQ_soupirail_rate" } },
      { label: "Te mettre à l'eau et longer le quai à la nage, sous les fenêtres", test: { dom: "nature", diff: -10, label: "Nager sous les fenêtres", help: [{ if: { arch: "rodeur" }, v: 10 }] },
        win: { fx: { flag: "i4:dedans", ep: ["perso", 400], pv: -1 }, to: "IQ_cave" }, lose: { to: "IQ_soupirail_rate" } },
      { label: "Te glisser par la ruelle des tanneurs et descendre par l'échelle du lavoir", test: { dom: "discretion", diff: -10, label: "Passer sans être vu{e}", help: [{ if: { arch: "voleur" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { flag: "i4:dedans", ep: ["perso", 400] }, to: "IQ_cave" }, lose: { to: "IQ_soupirail_rate" } },
      { back: "IQ_boutique" },
    ] },

  IQ_soupirail_rate: { act: "I", title: "Trempé{e}",
    fx: { flag: ["i4:dedans", "i4:vu_entrer"], pv: -1 },
    text: [
      "Le barreau cède, comme prévu. Le reste, moins : ton pied glisse sur la pierre verte, tu pars dans l'eau jusqu'à la poitrine, et le bruit de ta chute fait taire le quai pendant le temps d'un souffle. Au-dessus de toi, une fenêtre de la pension s'ouvre. Clarmonde se penche, te voit, et referme.",
      "Tu te hisses par le soupirail en laissant derrière toi une traînée d'eau de canal sur les dalles. Tu claques des dents. La cave sent la terre et la cire, comme toujours.",
      { with: "lison", text: "Lison te passe ton sac par la grille, sèche, elle, de la tête aux pieds. « Tout le quai sait que tu es là-dedans, maintenant, dit-elle. Dépêche-toi d'y trouver quelque chose. »" },
    ],
    choices: [{ label: "Te relever dans la cave", to: "IQ_cave" }] },

  IQ_sergent: { act: "I", title: "Le sergent du quai",
    fx: { meet: "if_brunon" },
    text: [
      "Le poste du Guet, au bout du quai des Lanternes, est une guérite de planches peinte en rouge et un banc. Sur le banc, le sergent Brunon Amblard pèle une pomme avec son couteau, en une seule spirale. C'est un gros homme calme, aux sourcils blancs, qui connaît le nom de chaque brocanteur du quai et le prix de chaque chose volée qui y repasse.",
      "« Le scellé ? dit-il sans lever les yeux. {{oreille#iq_brunon_ordre|C'est la procédure, quand il y a enquête sur une mort|C'est le capitaine qui l'a voulu, le lendemain du jour où un homme aux gants gris est monté le voir}}. Je n'ai pas le droit de le lever sans ordre. » La spirale de pomme s'allonge. « J'ai le droit de te faire entrer en ma présence, pour prendre tes effets. Une heure, pas davantage. Si quelqu'un me le demande poliment. »",
      { with: "tibere", text: "Tibère s'est arrêté un pas derrière toi. Brunon lève enfin les yeux, voit qui c'est, et le couteau s'immobilise. « Gaucelm, dit-il. On m'avait dit que tu buvais à l'Anguille, maintenant. » Tibère hausse les épaules. « On t'avait bien dit. »" },
    ],
    choices: [
      { label: "Le lui demander poliment, et lui dire pourquoi", test: { dom: "social", diff: 0, label: "Convaincre un vieux sergent", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { flag: ["i4:dedans", "i4:brunon"], ep: ["perso", 400], regard: { if_brunon: "cordial" } }, to: "IQ_sergent_oui" }, lose: { to: "IQ_sergent_non" } },
      { label: "« Laisse-moi faire », dit Tibère : il s'assied sur le banc à côté de son ancien collègue", who: "tibere", fx: { flag: ["i4:dedans", "i4:brunon"], ep: ["perso", 400], conf: { tibere: 5 } }, to: "IQ_sergent_oui" },
      { label: "Poser un ducat sur le banc, à côté des épluchures", if: { gold: { min: 20 } }, why: "Il te faudrait un ducat.", fx: { gold: -20, flag: ["i4:dedans", "i4:brunon"], regard: { if_brunon: "mefiant" } }, to: "IQ_sergent_oui" },
      { back: "IQ_boutique" },
    ] },

  IQ_sergent_oui: { act: "I", title: "Une heure",
    text: [
      "Brunon finit sa pomme, essuie son couteau à sa cuisse, et marche avec toi jusqu'à la boutique sans se presser. Devant la porte, il défait la cordelette avec soin, sans casser la cire, et il la roule autour de deux doigts. « Je la remettrai en sortant, dit-il. Comme ça, personne n'aura rien brisé. »",
      "Fortunat a sauté sur ses pieds. Brunon le regarde. Fortunat se rassied.",
      { outcome: "win", text: "« Elle m'a retrouvé la médaille de baptême de mon fils, il y a dix ans, dit Brunon devant la porte ouverte. Elle n'a pas voulu d'argent. Elle a dit que je lui devais un service. » Il te tend la main pour que tu passes. « Le voilà. »" },
      { with: "tibere", text: "Tibère et Brunon restent sur les marches, côte à côte, sans se regarder, comme deux hommes qui ont monté la garde ensemble pendant vingt ans et qui n'ont plus rien à se dire de neuf." },
    ],
    choices: [{ label: "Entrer", to: "IQ_dedans" }] },

  IQ_sergent_non: { act: "I", title: "La pomme",
    text: [
      "Brunon t'écoute jusqu'au bout. Puis il mange un quartier de pomme, lentement. « Non, dit-il. Le capitaine m'a à l'œil, et j'ai deux ans à faire avant ma pension. » Il essuie son couteau. « Je suis de garde jusqu'à complies. Après complies, je dors. Je dors très bien, d'ailleurs. Je n'entends jamais rien sur le canal. »",
      "Il retourne à sa pomme. Tu comprends qu'il a dit tout ce qu'il dirait.",
    ],
    choices: [{ back: "IQ_boutique" }] },
});

Object.assign(P, {
  IQ_dedans: { act: "I", title: "Dans la boutique", backName: "la boutique, dedans",
    text: [
      { first: true, text: "La boutique sent ce qu'elle a toujours senti : la poussière chaude, la cire d'abeille, le camphre des tiroirs à gants, et dessous, l'odeur froide de la cave qui monte par la trappe ouverte. Rien n'a bougé depuis le matin où tu l'as trouvée ; le silence seul est nouveau, et il occupe la pièce à la façon d'un meuble qu'on aurait livré en ton absence. Les étagères montent jusqu'au plafond, chargées de choses perdues sous leur ficelle et leur étiquette : des clés par grappes, des gants seuls, une jambe de bois ferrée, une cage à perroquet, un violon sans cordes. Chacune attend quelqu'un qui ne viendra plus la réclamer." },
      { first: true, text: "La boutique {{echo#iq_echo_dispute|est silencieuse, à l'heure où Odeline remontait d'ordinaire la pendule|garde deux voix, la nuit de la fête, vers dix heures. La tienne, qui crie : « Tu mourras seule avec tes secrets. » Celle d'Odeline, plus basse, après la porte claquée : « C'est pour toi que je les garde, imbécile »}}. Le fauteuil à oreilles {{echo#iq_echo_onze|est tourné vers la porte, comme elle le tournait pour guetter les clients|garde une voix de femme seule qui compte tout bas, vers onze heures : « Deux mille. La petite maison de la digue pour l'enfant, les remèdes de l'apothicaire, et rien pour la Banque »}}." },
      { again: true, text: "La boutique, ses étagères, sa poussière. La trappe de la cave est ouverte sur le noir. Le fauteuil vert est tourné vers la porte." },
      "Sur le comptoir, la tasse de thé d'Odeline est toujours là, avec un fond brun sec. À côté, le tiroir-caisse {{pie#iq_tiroir|est ouvert et vide, raclé jusqu'au bois|est ouvert et vide, mais son fond est plus haut d'un pouce que celui du tiroir voisin}}.",
      { with: "fauvette", first: true, text: "Fauvette fait le tour des étagères sans rien toucher, les mains dans le dos, ce qui chez elle est une politesse. « {{oreille|Jolie boutique. Je n'étais jamais venue par ici|Je connais le chemin du grenier par cœur, et la lucarne qui ferme mal}}, dit-elle. »" },
      { with: "tibere", first: true, text: "Tibère reste près de la porte, le chapeau à la main, et il regarde la trappe de la cave plus longtemps que le reste. C'est lui qui a écrit *accident*." },
    ],
    choices: [
      { label: "Soulever le fond du tiroir-caisse", once: true, hide: { not: { voile: "iq_tiroir" } }, fx: { gold: 30, ep: ["perso", 200] }, to: "IQ_tiroir" },
      { label: "L'escalier de la cave", to: "IQ_escalier" },
      { label: "L'atelier, à l'étage, où elle dormait", to: "IQ_atelier" },
      { label: "Les choses d'Odeline, autour du comptoir et du fauteuil", to: "IQ_objets" },
      { label: "La boîte des gages, sous le comptoir", hide: { seen: "IQ_gages" }, to: "IQ_gages" },
      { label: "T'asseoir un moment dans le fauteuil vert", hide: { seen: "IQ_deuil" }, to: "IQ_deuil" },
      { label: "Ouvrir grand la porte au quai : que chacun prenne ce qu'Odeline aurait donné", hide: { has: "i4:boutique_reglee" }, to: "IQ_donne" },
      { label: "Ressortir sur le quai", back: "IQ_boutique" },
    ] },

  IQ_tiroir: { act: "I", title: "Le double fond",
    text: [
      "Tu glisses la pointe de ta dague dans la fente, au fond du tiroir, et la planchette se soulève d'un bloc. Dessous, dans un lit de feutre vert, une poignée de liards et quelques pièces d'argent rangées par piles de cinq, comme Odeline rangeait tout. Et une carte à jouer, un valet de trèfle, où elle a écrit au crayon : *Pour les jours maigres.*",
      "Tu comptes. Un ducat et demi. Tu remets le valet de trèfle dans le feutre, à sa place, et tu refermes.",
    ],
    choices: [{ back: "IQ_dedans" }] },

  IQ_escalier: { act: "I", title: "L'escalier de la cave",
    text: [
      { first: true, text: "La trappe de la cave est dans le coin du fond, derrière le comptoir. Un palier de trois planches, puis quatorze marches de chêne, raides comme une échelle de meunier, avec une main courante polie par les paumes. Odeline les descendait vingt fois par jour, une chandelle à la main, en comptant à mi-voix. Tu l'as trouvée en bas, la tête contre la dernière marche." },
      { again: true, text: "Le palier, les quatorze marches, la main courante. Au fond, le noir, d'où monte un froid de puits." },
      "Le palier {{echo#iq_echo_minuit|sent la cire et la poussière, et grince sous le pied|garde deux voix, à minuit. Une voix d'homme, basse et lente : « Odeline, tu as juré comme nous tous. Rends-moi ce que ta mère a gardé. » Et Odeline, essoufflée : « Sors de chez moi, Gildas, ou je crie jusqu'au pont »}}. Les quatorze marches {{echo#iq_echo_chute|descendent dans le noir, usées au milieu, raides comme une échelle|rendent un coup sourd de cuivre contre un front, un juron d'homme, puis une chute qui dure, marche après marche, et la même voix d'homme, tout en bas, qui répète : « Odeline. Odeline, je t'en prie »}}.",
      { with: "gildas", text: "Frère Gildas s'est arrêté sur le seuil de la boutique, la main à son capuchon. Il ne s'approche pas de la trappe. Quand tu te retournes vers lui, il a baissé les yeux sur ses sandales, et il prie sans remuer les lèvres." },
    ],
    choices: [
      { label: "Examiner la main courante, marche par marche, avec une chandelle", hide: { seen: "IQ_rampe" }, to: "IQ_rampe" },
      { label: "Descendre à la cave", to: "IQ_cave" },
      { back: "IQ_dedans" },
    ] },

  IQ_rampe: { act: "I", title: "La main courante",
    fx: { clue: "iq_o_rampe", ep: ["perso", 500] },
    text: [
      "Tu allumes une chandelle au briquet d'Odeline et tu descends une marche à la fois, la flamme tenue bas, comme elle te l'a appris pour lire une serrure. Le bois de la main courante est noir et lisse, poli par quarante ans de paumes.",
      "À hauteur de la quatrième marche, la flamme accroche quelque chose. Quatre gouttes brunes sur le chêne, alignées vers le bas, et une traînée plus pâle qui les étale : la trace d'un revers de manche passé dessus à la hâte. Tu poses ta propre main sur la rampe, là. Les gouttes sont à hauteur de ton épaule, et tu tiens debout sur la quatrième marche.",
      "Tu descends le reste. Plus bas, la rampe est propre, les marches aussi. La dernière, celle de la tête d'Odeline, Clarmonde l'a lavée à grande eau le matin même, en pleurant.",
      { with: "tibere", text: "Tibère t'a suivi{e} jusqu'au palier. Il regarde les quatre gouttes à la lueur de ta chandelle. « Trente coups d'œil, dit-il tout bas. Je suis descendu, j'ai regardé le corps, je suis remonté. Je n'ai pas regardé la rampe. » Il n'ajoute rien." },
      { with: "tibere", if: { has: "pq:tibere_paye" }, text: "Il passe le pouce sur les gouttes, sans les toucher tout à fait. « Dix ducats pour écrire vite, dit-il. J'ai écrit vite. »" },
    ],
    choices: [{ back: "IQ_escalier" }] },

  IQ_cave: { act: "I", title: "La cave",
    text: [
      { first: true, text: "La cave d'Odeline est plus grande que la boutique : une voûte de brique basse, des rayonnages jusqu'au fond, des tonneaux vides qui servent de tables, des malles empilées, et l'établi sous le soupirail, avec ses étaux et ses tiroirs à outils. Une lumière verte entre par la grille du canal et bouge au plafond avec l'eau, si bien que la cave entière semble reposer au fond du canal, et toi avec elle. C'est ici qu'elle démontait les serrures et recousait les doublures, ici que tu as trouvé la boîte au cornet." },
      { again: true, text: "La voûte de brique, l'établi sous le soupirail, la lumière verte qui bouge au plafond." },
      "Les tiroirs de l'établi {{echo#iq_echo_cave|sont fermés et rangés comme Odeline les rangeait, chaque outil à son clou|claquent l'un après l'autre sous une main pressée, et une voix d'homme prie entre ses dents en cherchant : « Où l'as-tu mis. Où l'as-tu mis, Odeline »}}. Le mur du fond {{pie#iq_pie_grenats|suinte un peu, comme tous les murs du quai, autour d'un crochet à lanterne|suinte comme tous les murs du quai, sauf la troisième brique sous le crochet à lanterne : elle est sèche, posée sans mortier, et creuse derrière}}.",
      "Sur l'établi, la boîte à double fond est restée ouverte, vide, telle que tu l'as laissée. À côté, un bougeoir de cuivre {{pie#iq_bougeoir|propre et droit, posé à sa place habituelle|propre et droit, mais son pied est faussé d'un côté, comme après un choc, et on l'a calé pour qu'il tienne}}.",
      { with: "lison", text: "Lison passe le doigt sur la boîte vide, puis sur ses lèvres, d'un geste que tu ne lui connais pas. « Chez nous, dit-elle, on garde les choses de cette façon-là. Le fond sous le fond. » Elle s'essuie la main à sa jupe." },
    ],
    choices: [
      { label: "Desceller la troisième brique sous le crochet", once: true, hide: { not: { voile: "iq_pie_grenats" } }, fx: { item: "iq_tr_grenats", clock: { tresors: 1 }, flag: "tresor:iq_grenats", ep: ["perso", 400] }, to: "IQ_grenats" },
      { back: "IQ_escalier" },
      { label: "Ressortir par le soupirail, sur le canal", hide: { not: { seen: "IQ_soupirail" } }, back: "IQ_boutique" },
    ] },

  IQ_grenats: { act: "I", title: "La troisième brique",
    text: [
      "La brique vient sous tes doigts, sans mortier, et derrière elle un trou de la taille d'un poing, sec, tapissé d'un chiffon de laine. Dans le chiffon, deux pendants d'oreilles en grenat, montés sur or, vieux et lourds, et un bout de papier plié en quatre : *Ils étaient à ma mère. Vends-les si tu as faim. Garde-les sinon.*",
      "L'écriture est celle d'Odeline, l'hiver, quand ses doigts gonflaient.",
    ],
    choices: [{ back: "IQ_cave" }] },

  IQ_atelier: { act: "I", title: "L'atelier",
    text: [
      { first: true, text: "L'escalier intérieur monte à l'étage, où Odeline avait son atelier et son lit dans la même pièce : une alcôve fermée d'un rideau de serge, une table sous la fenêtre du canal, des pots de colle et de vernis, des loupes de bijoutier rangées par taille, et contre le mur, son secrétaire de noyer, dont elle gardait la clé au cou. Quelqu'un l'a forcé. Le bois est fendu autour de la serrure, et les papiers débordent des casiers, comme d'une bouche qu'on a fait parler de force." },
      { again: true, text: "L'atelier, l'alcôve, le secrétaire forcé. Le canal, par la fenêtre, gris et lent." },
      "Le rideau de l'alcôve est tiré. Le lit est fait au carré. Sur l'oreiller, son bonnet de nuit plié en deux, et sur la table de chevet, une pendule de voyage {{pie|en laiton, sans valeur, qu'elle remontait chaque soir avant de souffler la chandelle|en laiton, sans valeur, dont le balancier a été lesté d'un plomb pour qu'elle retarde d'un quart d'heure exactement}}.",
      { with: "tibere", text: "Tibère regarde le secrétaire fendu. « Pas le Guet, dit-il. Le Guet casse la serrure, il ne fend pas le bois autour. Ça, c'est quelqu'un qui n'avait pas d'outil et beaucoup de colère. »" },
    ],
    choices: [
      { label: "Fouiller les papiers du secrétaire", to: "IQ_papiers" },
      { label: "Redescendre dans la boutique", back: "IQ_dedans" },
    ] },

  IQ_papiers: { act: "I", title: "Les papiers d'Odeline",
    text: [
      { first: true, text: "Tu vides les casiers sur la table, et tu tries comme elle t'a appris : les reçus d'un côté, les lettres de l'autre, les comptes au milieu. Elle gardait tout. Des factures de quarante ans, des cartes de clients morts, un dessin d'enfant que tu reconnais, une maison avec trois marches et un soleil : le tien." },
      { again: true, text: "Les papiers d'Odeline, triés en trois tas sur la table. Tu les connais par cœur, à présent." },
      "Au-dessus du tas des lettres, un brouillon déchiré en deux, puis recollé. *Monsieur, je vous confirme {{loupe#iq_lettre_lothaire|la vente d'un lot de clés anciennes, au prix dont nous sommes convenus|la vente de ce que sonne le Beffroi, au prix de deux mille ducats, payables à la remise. Ni votre maison ni vous ne saurez d'où je le tiens}}. Je vous attendrai le premier jeudi après la fête. O. C.*",
      "Dans le livre de comptes de l'hiver, à la marge d'une page : *Bois : six charretées. {{loupe#iq_cache_foyer|Ramoneur payé à la Saint-Martin, deux liards de trop|Sous la plaque du foyer de l'atelier, à gauche, ce que ma mère m'a donné le jour où je suis partie des Joncs}}.* Et glissée dans la même page, une ordonnance d'apothicaire pliée en huit : *Pour Madame Carrus : {{loupe#iq_ordonnance|tisane de mauve et de guimauve, pour la toux d'hiver|pavot et ciguë en onguent, pour la grosseur du sein, qui ne guérira plus. Je lui ai dit trois mois. Elle a ri}}.*",
      { if: { lens: "loupe" }, text: "La loupe d'ambre pèse dans ta poche. Les papiers d'Odeline n'ont jamais été aussi pleins." },
      { if: { has: "metier:lire" }, text: "Tu lis vite et bien, c'est ton métier. Le livre de comptes dit la même chose que la boutique : depuis un an, Odeline vendait moins, achetait moins, et payait l'apothicaire tous les mois." },
    ],
    choices: [
      { label: "Soulever la plaque du foyer, à gauche", hide: { any: [{ not: { voile: "iq_cache_foyer" } }, { seen: "IQ_cachette" }] }, to: "IQ_cachette" },
      { label: "Fouiller l'atelier comme elle t'a appris à fouiller une chambre de mort", hide: { any: [{ voile: "iq_cache_foyer" }, { seen: "IQ_cachette" }, { seen: "IQ_fouille_rate" }] },
        test: { dom: "savoir", diff: -20, label: "Trouver la cachette d'une chercheuse", help: [{ if: { has: "metier:mains" }, v: 25 }, { if: { arch: "voleur" }, v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "IQ_cachette" }, lose: { to: "IQ_fouille_rate" } },
      { label: "Redescendre dans l'atelier", back: "IQ_atelier" },
    ] },

  IQ_fouille_rate: { act: "I", title: "Les cachettes d'une chercheuse",
    text: [
      "Tu sondes le plancher, les plinthes, le dessous du lit, le tiroir à secret du secrétaire, que tu connais déjà. Tu tapotes les murs. Tu passes la main sur le dessus de l'armoire. Odeline cachait les choses mieux que tu ne les trouves, et elle le savait : c'était sa plaisanterie préférée.",
      "Tu t'assieds sur le lit, couvert{e} de poussière. Dans la cheminée, la plaque de fonte te regarde avec sa salamandre en relief. Tu ne penses pas à la soulever.",
    ],
    choices: [{ back: "IQ_papiers" }] },

  IQ_cachette: { act: "I", title: "Sous la plaque du foyer",
    fx: { item: "iq_tr_bague", clock: { tresors: 1 }, flag: "tresor:iq_bague", ep: ["perso", 500] },
    text: [
      "La plaque de fonte est lourde, scellée de suie. Tu la fais pivoter sur son coin, et derrière, dans la brique, une niche creusée au couteau. Dedans, un sachet de cuir graissé, cousu serré. Tu coupes le fil.",
      "Une bague d'or rouge, épaisse, usée par une main qui travaillait. Sur le chaton, un héron gravé, debout sur une patte, le bec fermé. Autour de l'anneau, à l'intérieur, une ligne de petits signes que tu prends d'abord pour une frise, et qui ressemble beaucoup à la ligne gravée sur ton cornet d'os.",
      { with: "lison", text: "Lison voit la bague dans ta paume et se tait longtemps. Puis : « Range ça. Ne le montre à personne en ville. Personne. » Elle a la voix de quelqu'un qui a reconnu un visage dans une foule." },
      { with: "gildas", text: "Frère Gildas, dans l'encadrement de la porte, regarde le héron. Ses mains se serrent dans ses manches. « C'est un bel objet, dit-il. Gardez-le près de vous. »" },
    ],
    choices: [{ back: "IQ_papiers" }] },
});

Object.assign(P, {
  IQ_objets: { act: "I", title: "Les choses d'Odeline",
    text: [
      { first: true, text: "Ce qui était à elle, et pas à la boutique, tient dans peu de place. Son châle de laine grise, sur le dossier du fauteuil, troué au coude gauche, là où elle s'accoudait au comptoir. Ses lunettes rondes, cerclées de corne, pliées sur le registre des clients. Sa théière, sur le petit fourneau du fond, {{pie#iq_theiere|en étain cabossé, noircie par trente ans de feu|en argent massif, noircie exprès à la suie et au vinaigre pour passer pour de l'étain, avec un poinçon à la tour sous le couvercle}}. Sa vaisselle dépareillée, ses deux casseroles, son missel des Noyés aux pages gondolées." },
      { again: true, text: "Le fauteuil, le fourneau, le comptoir. Ce qu'il reste d'elle tient dans peu de place." },
      "Tu prends le châle. Il sent encore son savon à la lavande et la fumée du fourneau. Tu {{miroir#iq_miroir_chale|le replies avec soin, parce qu'il faut bien décider ce qu'on en fait|le serres contre toi parce que c'est la dernière chose qu'elle ait touchée avant la fête, et que tu lui as tourné le dos ce soir-là sans le lui rendre quand elle te le tendait}}.",
      { with: "lison", text: "Lison regarde le châle dans tes mains. « Chez nous, on brûle les affaires des morts, dit-elle. Sauf une. On garde celle qui sent le plus fort. »" },
    ],
    choices: [
      { label: "Garder le châle", once: true, fx: { item: "iq_chale" }, to: "IQ_objets_garde" },
      { label: "Garder ses lunettes", once: true, fx: { item: "iq_lunettes" }, to: "IQ_objets_garde" },
      { label: "Emporter la théière : elle est d'argent", once: true, hide: { not: { voile: "iq_theiere" } }, fx: { item: "iq_tr_theiere", clock: { tresors: 1 }, flag: "tresor:iq_theiere", ep: ["perso", 300] }, to: "IQ_objets_garde" },
      { label: "Vendre la vaisselle et le fourneau à Fortunat, par la fenêtre", once: true, hide: { has: "i4:boutique_reglee" }, fx: { gold: 15, flag: "i4:vaisselle" }, to: "IQ_objets_vendus" },
      { label: "Laisser ses choses là où elle les avait posées", back: "IQ_dedans" },
    ] },

  IQ_objets_garde: { act: "I", title: "Ce que tu gardes",
    text: [
      "Tu ranges ce que tu as pris au fond de ton sac, sous le reste, enveloppé dans un torchon propre de la boutique. Ça ne pèse presque rien. Tu le sens à chaque pas, après ça, comme une pierre dans une chaussure.",
      { after: "tresor:iq_theiere", once: true, text: "La théière, une fois débarrassée de sa suie avec un coin de torchon mouillé, montre un argent gris et doux, et le poinçon à la tour sous le couvercle. Odeline faisait son thé dans une fortune et elle buvait dans une tasse ébréchée." },
    ],
    choices: [{ back: "IQ_objets" }] },

  IQ_objets_vendus: { act: "I", title: "La vaisselle",
    text: [
      "Fortunat compte les assiettes à travers la fenêtre ouverte, les casseroles, le fourneau de fonte, en écrivant à mesure. Il te donne trois quarts de ducat en liards, sortis d'une bourse de cuir qu'il porte sous sa chemise, et il te fait signer un reçu. Tu signes.",
      "Les deux portefaix qu'il appelle d'un sifflement emportent le fourneau encore tiède de la dernière flambée de Clarmonde. La place qu'il laisse au mur est plus claire que le reste, en forme de fourneau.",
    ],
    choices: [{ back: "IQ_objets" }] },

  IQ_deuil: { act: "I", title: "Le fauteuil vert",
    fx: { ep: ["perso", 300] },
    text: [
      "Tu t'assieds dans le fauteuil d'Odeline. Il a la forme d'elle : un creux à gauche, un accoudoir plus usé que l'autre, et quand tu poses la tête contre l'oreille de velours, tu vois la porte, la rue, le pont, exactement ce qu'elle voyait. Les gens passent sur le quai. Certains ralentissent devant la vitrine et regardent dedans, sans te voir dans l'ombre.",
      { if: { has: "passe:trouve" }, text: "Elle t'a trouvé{e} sous son étal, l'hiver des Glaces, et elle t'a porté{e} jusqu'à ce fauteuil. Tu ne t'en souviens pas. Elle racontait que tu avais dormi deux jours, et qu'en te réveillant tu avais demandé, avant même du pain, ce qu'il y avait dans la cage à perroquet." },
      { if: { has: "passe:voleur" }, text: "Tu as essayé de la voler, la première fois, ici même, une montre sur ce comptoir. Elle t'a attrapé{e} par le col sans se lever de ce fauteuil, et elle t'a demandé si tu savais au moins ce que valait la montre. Tu ne savais pas. « Alors tu vas apprendre », a-t-elle dit." },
      { if: { has: "passe:gage" }, text: "Ton père t'a laissé{e} là, devant ce comptoir, en gage d'une dette, avec un baluchon et une poignée de main. Odeline t'a fait asseoir dans ce fauteuil le premier soir. Elle a attendu ton père une semaine, puis elle a déchiré la reconnaissance de dette et l'a jetée au feu devant toi." },
      { if: { has: "poids:dette" }, text: "Dans ta poche, la dernière lettre de ton prêteur, celle que tu n'as montrée à personne. Elle savait. Elle savait toujours. C'est peut-être pour ça qu'elle voulait de l'argent." },
      { if: { all: [{ has: "odeline:lettre" }, { item: "lettre_odeline" }] }, text: "Tu sors sa lettre de ta poche, celle de la caisse aux clous, et tu la relis dans son fauteuil, à la lumière de la porte. Son écriture tremble moins, lue d'ici." },
      { if: { has: "i4:vaisselle" }, text: "Au mur du fond, la place claire du fourneau vendu. Tu la regardes plus souvent que la porte." },
      "Tu {{miroir#iq_miroir_fauteuil|gardes la place parce que la fatigue te tient, voilà tout|gardes la place parce que tant que tu es dans ce fauteuil, elle est seulement sortie, et que tu as peur de te lever}}.",
      { with: "gildas", text: "Frère Gildas attend dehors, sur la première marche, le dos tourné à la boutique. Il a dit qu'il priait mieux à l'air. Quand tu ressors, il a le front contre le montant de la porte, et il se redresse trop vite." },
      { with: "tibere", text: "Tibère fait semblant d'examiner une serrure sur une étagère, très longtemps. Il te laisse le temps, à sa façon. Puis il tousse et dit : « Elle m'a retrouvé ma bague de sergent, une fois, au fond du canal. Je l'ai revendue le mois d'après. » Il remet la serrure à sa place." },
      { with: "fauvette", text: "Fauvette s'est assise par terre, contre le comptoir, les genoux sous le menton. Elle se tait, ce qui est rare. Au bout d'un moment, elle sort de sa manche une pomme volée et la pose sur l'accoudoir, à côté de ta main." },
    ],
    choices: [{ label: "Te lever", back: "IQ_dedans" }] },

  IQ_gages: { act: "I", title: "La boîte des gages",
    text: [
      "Sous le comptoir, dans le casier du bas, la boîte des gages : un coffret de chêne ferré, long comme le bras, et dedans, chacun dans son papier, les objets que les gens du quai laissaient à Odeline contre quelques ducats, en attendant des jours meilleurs. Une alliance, un sifflet de batelier, une timbale de baptême, une paire de ciseaux de tailleur, une croix de corail. Sur chaque papier, un nom et une somme, de la main d'Odeline.",
      "Dans le registre glissé au fond, à côté de chaque somme, elle a écrit le même mot, et elle l'a écrit souvent : *rendu*. Rendu sans être payé. Il en reste onze. Jeudi, Tiercelin les vendra avec le reste, au poids.",
      "Tu feuillettes le registre. *Clarmonde Pujol : {{loupe#iq_gage_clarmonde|une chaîne d'argent, deux ducats prêtés à la Toussaint|une chaîne d'argent, deux ducats prêtés à la Toussaint. Jamais la vendre. Jamais lui réclamer les deux ducats. Elle me les a déjà rendus cent fois en soupes}}.* Plus bas : *Lucile Gimel, veuve, porteuse de sel au port : le sifflet d'argent de son homme. Un ducat.*",
      { with: "tibere", text: "Tibère regarde par-dessus ton épaule, et sa main va toute seule à sa poche. « Tiercelin vend ça au fondeur, dit-il. Le métal, au poids. Le reste, il s'en fiche. »" },
    ],
    choices: [
      { label: "Emporter la boîte, et rendre chaque gage à qui l'a laissé", fx: { item: "iq_boite_gages", ep: ["perso", 300] }, to: "IQ_gages_tournee" },
      { label: "Donner la boîte à Fortunat : elle revient à Tiercelin, avec la dette", fx: { gold: 40, set: { i4_gages: "vendus" }, quest: "IQ_gages" }, to: "IQ_gages_vendus" },
      { label: "Laisser la boîte sous le comptoir pour l'instant", back: "IQ_dedans" },
    ] },

  IQ_gages_tournee: { act: "I", title: "La tournée des gages",
    text: [
      "Tu fais le tour du quai avec la boîte sous le bras, une porte après l'autre. La timbale de baptême chez le rempailleur, qui la tourne dans ses doigts et la pose sur la table en silence. Les ciseaux chez le tailleur du pont, qui veut te payer et que tu laisses sur le pas de sa porte, avec ses ciseaux dans les mains. La croix de corail chez une fille de la pension, qui pleure tout de suite, et puis rit.",
      "Il en reste deux dans la boîte. La chaîne de Clarmonde, la porte d'à côté, et le sifflet de Lucile Gimel, une veuve qui porte le sel au port aux Sauniers.",
      { with: "lison", text: "Lison t'a suivi{e} de porte en porte, les mains dans les poches, à trois pas. Devant la dernière, elle dit : « Ta vieille faisait ça aussi chez nous, tu sais. Rendre. Ça lui a coûté cher, chez nous, de partir. Elle a payé autrement. »" },
    ],
    choices: [{ label: "Ressortir sur le quai", back: "IQ_boutique" }] },

  IQ_gages_vendus: { act: "I", title: "Le coffret de chêne",
    text: [
      "Fortunat soupèse le coffret, l'ouvre, compte les papiers un par un, et écrit onze lignes sur son inventaire. Il te tend deux ducats. « Mon maître sera content, dit-il. Il dit toujours que les gages, c'est ce qui se vend le mieux, parce que personne n'ose venir les racheter à la criée. »",
      "Sur le quai, le rempailleur te regarde passer. Il sait ce qu'il y avait dans la boîte. Il retourne à sa chaise sans te saluer.",
    ],
    choices: [{ back: "IQ_dedans" }] },

  IQ_voisine: { act: "I", title: "La pension de Clarmonde",
    fx: { flag: "i4:gage_clarmonde", ep: ["perso", 300] },
    text: [
      "Clarmonde Pujol t'ouvre la porte de la pension avant que tu aies frappé deux fois. Elle a son trousseau de clés à la ceinture et les yeux gonflés. La cuisine sent le chou et le linge qui sèche. Elle te fait asseoir, te sert de la soupe sans demander, et s'assied en face de toi, les mains à plat sur la table.",
      "Tu poses la chaîne d'argent à côté de son bol. Elle la regarde longtemps sans la toucher.",
      { after: "voile:iq_gage_clarmonde", text: "Tu lui dis ce qu'Odeline avait écrit dans le registre, sous la somme. Les soupes. Clarmonde se met à rire, d'un rire qui se casse au milieu, et elle met sa main devant sa bouche." },
      "« Ils sont venus hier, dit-elle enfin. Un clerc du capitaine, et un monsieur en gants gris, très poli. Ils m'ont demandé si j'avais entendu quelque chose, la nuit de la fête. J'ai {{oreille#iq_clarmonde_dit|dit que non, avec le bruit des tambours sur le pont|dit la vérité : que j'ai entendu ta voix lui crier qu'elle mourrait seule, vers dix heures, et la porte claquer. Le monsieur aux gants a souri, et le clerc a écrit minuit}}. » Elle prend la chaîne, enfin, et la serre dans son poing. « Je ne savais pas quoi leur dire d'autre. »",
      { if: { has: "ib:temoin_achete" }, text: "Tu lui demandes si le monsieur aux gants lui a proposé de l'argent. Clarmonde rougit jusqu'au cou. « Cinq ducats, dit-elle. Pour dire minuit moi-même, devant le capitaine. Je les ai laissés sur la table. Il les a repris avec ses gants, et il a souri quand même. »" },
      { if: { has: "pq:clarmonde_muette" }, text: "Elle ajoute, plus bas, en regardant la porte : « Margueritte me demande chaque jour des nouvelles de la cave. Je lui dis d'attendre. Et au monsieur aux gants, je n'ai rien dit de ce qu'on s'est dit, nous deux. »" },
      { with: "tibere", text: "Tibère, sur le seuil, baisse les yeux vers ses bottes. « Les gants gris, dit-il tout bas. Évidemment. »" },
    ],
    choices: [
      { label: "Lui dire ce que tu as crié, et pourquoi", hide: { not: { voile: "iq_clarmonde_dit" } }, once: true, fx: { flag: "i4:clarmonde_sait", ep: ["perso", 300] }, to: "IQ_voisine_aveu" },
      { label: "Repartir, la boîte allégée d'un gage", hide: { has: "i4:gage_sabine" }, back: "IQ_boutique" },
      { label: "Repartir, la boîte vide", hide: { not: { has: "i4:gage_sabine" } }, fx: { quest: "IQ_gages", set: { i4_gages: "rendus" }, drop: "iq_boite_gages", ep: ["perso", 500] }, back: "IQ_boutique" },
    ] },

  IQ_voisine_aveu: { act: "I", title: "Dix heures",
    text: [
      "Tu le dis à Clarmonde, la dispute, les secrets d'Odeline, la porte, la fête, l'aube. Ce que tu as répondu au Guet, aussi : que tu ne l'avais pas vue depuis le matin. Tu le dis vite, pour l'avoir dit.",
      "Clarmonde t'écoute en tournant sa cuillère dans sa soupe froide. « Elle est venue frapper chez moi, après, dit-elle. Vers dix heures et demie. Elle voulait du sel, soi-disant. Elle avait pleuré. Elle m'a dit : “Ce gamin-là a raison, je mourrai seule avec mes secrets, mais pas avant de lui en avoir laissé un bon.” Elle a ri. Elle est rentrée. »",
      { if: { has: "i4:odeline_malade" }, text: "Tu lui parles de l'ordonnance de l'apothicaire, pliée dans le livre de comptes. Clarmonde reste longtemps silencieuse. « Trois mois, répète-t-elle. Elle le savait, ce soir-là, quand elle riait sur mon seuil. »" },
      "Elle pose sa cuillère. « Si on me redemande, je dirai dix heures. Je dirai le sel. Je dirai qu'elle riait. Et le clerc écrira ce qu'il voudra. »",
    ],
    choices: [{ back: "IQ_voisine" }] },

  IQ_vente: { act: "I", title: "De gré à gré",
    fx: { flag: ["i4:boutique_vendue", "i4:boutique_reglee", "i4:dedans"], gold: 100, ep: ["perso", 300] },
    text: [
      "Fortunat sort de sa manche un acte déjà rédigé, où il ne manque que ton nom. Tu le lis. Tout y est : la boutique, le stock, les meubles, l'enseigne, *les objets en dépôt dont la défunte n'avait pas la propriété*, la dette effacée, cinq ducats pour toi. Tu signes sur la marche, l'écritoire sur tes genoux.",
      "Dans l'heure, Tiercelin envoie quatre portefaix et une charrette. Tu les regardes faire depuis le pont. La jambe de bois sort la première, puis la cage à perroquet, le violon, les grappes de clés dans un sac, et le fauteuil vert, porté à deux, les pieds en l'air, qui passe la porte de biais. Quelqu'un décroche l'enseigne à la clé et la pose contre le mur, face contre la pierre.",
      { if: { has: "i4:gage_clarmonde" }, text: "Clarmonde est sortie sur son seuil. Elle regarde la charrette partir, sa chaîne d'argent au cou, et elle ne te parle pas." },
      { with: "lison", text: "Lison regarde la charrette tourner au coin du pont. « Au moins, ce n'est pas la Banque qui l'a, dit-elle. » Puis, après un temps : « Enfin. Pas directement. »" },
    ],
    choices: [{ label: "Tourner le dos au quai", back: "IQ_boutique" }] },

  IQ_scelle: { act: "I", title: "Le scellé tient",
    text: [
      "« Rien ne sortira de cette boutique, dis-tu à Fortunat, tant que le Guet n'a pas fini son enquête sur la mort de ma maîtresse. Le scellé passe avant la vente. »",
      "Fortunat pâlit, puis se reprend. « Le scellé, dit-il, c'est pour les morts suspectes. Le sergent a écrit accident. Il n'y a pas d'enquête. » Il te regarde par-dessus son écritoire. « À moins que vous ne disiez au Guet que ce n'est pas un accident. {{oreille#if_fortunat_nuit|Mais alors, ils voudront savoir où vous étiez cette nuit-là|Mais alors, ils sauront où vous étiez cette nuit-là : un monsieur aux gants gris a déjà posé la question à mon maître}}. »",
      { if: { has: "i4:scelle_banque" }, text: "Tu penses à ce que Brunon pensait en pelant sa pomme : le capitaine voulait ce scellé, et un homme aux gants gris le voulait avant lui." },
    ],
    choices: [
      { label: "Lui citer la coutume du quai, article par article", test: { dom: "savoir", diff: -10, label: "Retourner la loi contre un prêteur", help: [{ if: { has: "metier:lire" }, v: 15 }, { if: { has: "i4:scelle_banque" }, v: 15 }] },
        win: { fx: { flag: ["i4:boutique_scellee", "i4:boutique_reglee"], ep: ["perso", 500] }, to: "IQ_scelle_ok" }, lose: { to: "IQ_scelle_rate" } },
      { label: "« Laisse-moi faire », dit Tibère : il connaît le capitaine, et ce qui fâche le capitaine", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère parle en sergent" },
        win: { fx: { flag: ["i4:boutique_scellee", "i4:boutique_reglee"], ep: ["perso", 500], conf: { tibere: 5 } }, to: "IQ_scelle_ok" }, lose: { to: "IQ_scelle_rate" } },
      { label: "Lui payer deux ducats d'intérêts pour que Tiercelin attende la fin du mois", if: { gold: { min: 40 } }, why: "Il te faudrait deux ducats.", fx: { gold: -40, flag: ["i4:boutique_scellee", "i4:boutique_reglee"] }, to: "IQ_scelle_ok" },
      { label: "Ne rien ajouter", back: "IQ_creancier" },
    ] },

  IQ_scelle_ok: { act: "I", title: "Deux planches",
    text: [
      "Fortunat ferme son écritoire d'un coup sec et s'en va sans saluer, son inventaire sous le bras. Une heure plus tard, Désiré, le commis du Guet, arrive avec un marteau, deux planches et un pain de cire neuf. Il cloue les planches en travers de la porte, refait le scellé, et presse la tour du Guet dans la cire chaude avec l'application d'un enfant qui fait un pâté.",
      "« Jusqu'à nouvel ordre, dit-il. Personne n'entre. Pas même vous. » Il hésite. « Surtout pas vous, c'est ce qu'on m'a dit. »",
      "Les choses d'Odeline resteront à leur place, dans le noir, sous la poussière. C'est peu. C'est ce que tu as pu.",
    ],
    choices: [{ back: "IQ_boutique" }] },

  IQ_scelle_rate: { act: "I", title: "Jeudi, à tierce",
    fx: { flag: ["i4:boutique_vendue", "i4:boutique_reglee"] },
    text: [
      "Fortunat t'écoute jusqu'au bout, poliment, puis il sort un second papier de sa manche : une ordonnance du juge des comptoirs, signée de la veille, qui autorise la levée du scellé *pour la vente des meubles, la mort étant déclarée accidentelle*. Il te la montre sans te la donner.",
      "« Je suis désolé, dit-il, et il a l'air de l'être. Jeudi, à tierce. Vous pouvez venir. Les héritiers viennent souvent. Ils rachètent un souvenir. »",
      "Le jeudi, tu viens. Tu regardes la criée depuis le pont. La jambe de bois part pour trois liards, la cage à perroquet pour six, le fauteuil vert pour un ducat, à un aubergiste des Halles. Tiercelin compte, à côté du crieur, sur un petit carnet. Tu ne reçois rien.",
    ],
    choices: [{ back: "IQ_boutique" }] },

  IQ_donne: { act: "I", title: "La porte ouverte",
    fx: { flag: ["i4:boutique_pillee", "i4:boutique_reglee"], ep: ["perso", 500] },
    text: [
      "Tu ouvres la porte en grand, tu cales le battant avec la jambe de bois, et tu cries sur le quai, assez fort pour que le pont l'entende : que la boutique d'Odeline est ouverte, et que chacun prenne ce qu'elle lui aurait donné.",
      "Pendant un moment, le quai reste immobile. Puis le vieux Couzi monte de sa barque, entre, et ressort avec une gaffe neuve qu'il regardait depuis deux ans. Les gamins du pont viennent ensuite, puis le rempailleur, puis tout le monde. Prosper Galabru repart avec une brouette pleine, et revient la remplir. Maître Lagrue prend un seul livre. Clarmonde reste sur son seuil, les bras croisés, et ne prend rien.",
      "Fortunat court chercher son maître. Le temps que Tiercelin arrive, essoufflé, il ne reste que les murs et la poussière. Il écrit *pillage* sur son carnet, et il cite ton nom.",
      { with: "fauvette", text: "Fauvette, assise sur le comptoir, regarde le quai se servir avec un respect de professionnelle. « Je n'aurais pas fait mieux, dit-elle. Et moi, au moins, j'aurais gardé quelque chose. »" },
    ],
    choices: [{ label: "Ressortir sur le quai vide", back: "IQ_boutique" }] },
});

// ==================================================================== the Salt-makers' port (hub)
Object.assign(P, {
  IF_port: { act: "I", title: "Le port aux Sauniers", place: "port", hub: true, backName: "le port aux Sauniers",
    text: [
      { first: true, text: "Le port aux Sauniers est le plus vieux de Salvèze, et il en a l'air : des quais de pierre noire mangés d'algues jusqu'à mi-hauteur, des anneaux de fer gros comme des têtes, et le long de l'eau, les greniers à sel, hauts et sans fenêtres, dont les portes ouvertes soufflent une poussière blanche qui poudre les épaules des passants. Tout ici a le goût du sel : l'air, les cordages, la peau des porteurs, et jusqu'aux conversations, qui en ont plus qu'ailleurs." },
      { first: true, text: "Deux sortes de bateaux se partagent l'eau. Les gabares de sel, larges et lentes, à voile carrée, chargées jusqu'au plat-bord de sacs gris venus de Grisemotte. Et entre elles, comme des poissons entre des bœufs, les barques des marais : noires, plates, sans quille, menées à la perche par des gens maigres en sabots, avec des nasses à anguilles empilées à l'arrière. Au bout du port, la maison de la douane barre le chenal d'une chaîne tendue entre deux bornes, et des hommes en casaque verte lisent chaque bateau qui passe." },
      { again: true, when: "day", text: "Le port aux Sauniers, sa poussière blanche, ses gabares au mouillage. Les porteurs montent les sacs de sel aux greniers en file, courbés, un sac par homme. La chaîne de la douane est tendue." },
      { again: true, when: "night", text: "Le port, la nuit. Les greniers sont fermés ; leurs façades aveugles dressent le long de l'eau une muraille plus noire que la nuit, et le sel tombé sur les pavés luit à leur pied, sous la lune, d'une pâleur de givre. Une lanterne brûle à la douane, une autre à la proue de chaque gabare. Les barques des marais sont serrées les unes contre les autres le long du vieux quai, et quelqu'un y chante tout bas, dans une langue qui ressemble à la tienne et n'en est pas tout à fait une." },
      { with: "lison", first: true, text: "Lison a changé de pas en arrivant sur le quai : plus long, plus lent, le pas des gens qui marchent sur des planches. Une femme dans une barque lui fait un signe de la tête. Lison le lui rend, à peine." },
      { after: "IF_saisie_fin", text: "Au vieux quai, la barque de Mélisende a repris sa place entre les autres, ses nasses empilées à l'arrière." },
    ],
    choices: [
      { label: "Les barques des marais, au vieux quai", to: "IF_barques" },
      { label: "Les gabares de sel et les porteurs", to: "IF_gabares" },
      { label: "La maison de la douane et sa chaîne", to: "IF_douane" },
      { label: "La criée aux poissons et la taverne de la Saumure", to: "IF_criee" },
      { label: "Le crocheteur de la Salve et ses trouvailles", to: "IF_toinon" },
      { label: "Le vieux passeur qui mâche sa racine, au bout de l'estacade", to: "IF_passeur" },
      { back: "I_hub" },
    ] },

  IF_barques: { act: "I", title: "Les barques des marais", place: "port", backName: "le vieux quai des barques",
    text: [
      { first: true, text: "Le long du vieux quai, les barques des marais sont amarrées en grappe, bord contre bord, si serrées qu'on peut passer de l'une à l'autre à pied sec. Dans chacune, des nasses d'osier, des paniers d'anguilles vivantes qui se nouent et se dénouent dans l'eau du fond, des bottes de joncs, et un réchaud de terre où cuit quelque chose. Les gens des marais vendent sans crier. Ils attendent qu'on vienne, et ils regardent les mains de l'acheteur avant son visage." },
      { again: true, text: "Les barques des marais, serrées bord contre bord. L'odeur des anguilles et de la fumée de tourbe." },
      "Tu demandes à un vieil homme où sont les Joncs-Bas, et combien de temps pour y aller. Il réfléchit, la pipe entre les dents. « Les Joncs-Bas ? {{oreille#if_vieux_joncs|À deux jours de roseaux, si l'eau est bonne. On n'y va pas sans y être attendu|À deux jours de roseaux, si l'eau est bonne. Et là-bas, on sait déjà ton nom}}. » Il retourne à ses nasses.",
      "À l'écart, une barque est vide, le fond nu, amarrée à un anneau de la douane par une chaîne neuve, cadenassée. Sur le quai à côté, une femme est assise sur ses talons, un panier vide entre les pieds. Elle regarde la chaîne.",
      { with: "lison", text: "Lison se penche vers toi. « {{oreille#if_lison_port|Ici, tu achètes, tu paies, tu ne poses pas de questions|Ici, tout le monde sait qui je suis, et pourquoi je suis en ville avec toi}}, dit-elle. »" },
    ],
    choices: [
      { label: "Parler à la femme assise près de la barque enchaînée", to: "IF_anguillere" },
      { label: "Acheter une anguille fumée et du pain de seigle", once: true, if: { gold: { min: 6 } }, why: "Il te faudrait six liards.", fx: { gold: -6, food: 2 }, to: "IF_barques_repas" },
      { back: "IF_port" },
    ] },

  IF_barques_repas: { act: "I", title: "L'anguille fumée", place: "port",
    text: [
      "La femme de la barque te tend l'anguille enveloppée dans une feuille de nénuphar, et un pain gris, lourd comme une brique. Elle te rend la monnaie en liards tout mouillés. L'anguille est grasse, fumée à la tourbe, et elle a un goût de terre et de feu.",
      { with: "lison", text: "Lison mange la moitié de ta part sans demander, assise sur le bord du quai, les jambes au-dessus de l'eau. « Voilà, dit-elle, la bouche pleine. Tu sais tout ce qu'il faut savoir des Joncs-Bas. Le reste, c'est de la dentelle. »" },
    ],
    choices: [{ back: "IF_barques" }] },

  IF_anguillere: { act: "I", title: "Mélisende", place: "port",
    fx: { meet: "if_melisende" },
    text: [
      { first: true, text: "Elle s'appelle Mélisende Jouve, elle a quarante ans et les mains rouges des gens qui vident des anguilles dans l'eau froide. La barque enchaînée est la sienne. La douane l'a saisie avant-hier, à l'aube, avec ses nasses et ses anguilles : on a trouvé du sel dans ses paniers, trois sacs, et le sel ne passe pas la chaîne sans payer la gabelle." },
      { first: true, text: "« Je n'ai jamais porté de sel de ma vie, dit-elle. On en a plein les marais, du sel, pourquoi j'en porterais en ville ? » Elle crache entre ses sabots. « {{oreille#if_melisende_taiseuse|Je ne vends que des anguilles, moi, et je rentre chez moi le soir|Je porte les paroles de Mère Ancolie aux gens de la ville qui doivent les entendre, et on m'a prise pour que je me taise}}. Sans ma barque, je suis une femme assise sur un quai. »" },
      { first: true, if: { has: "ic:vimeux" }, text: "Elle te regarde mieux, tout à coup. « Le tribun Vimeux a parlé de toi, dit-elle, à la Saumure. Une toile écrite de travers, au Conseil. Chez nous, ça se répète. »" },
      { again: true, before: "i4_barque", text: "Mélisende est toujours assise sur ses talons, à côté de la chaîne. Elle lève les yeux vers toi, et les rebaisse vers le cadenas." },
      { with: "lison", text: "Lison s'accroupit à côté d'elle et lui parle à voix basse, vite, dans le parler des marais. Mélisende répond par trois mots. Lison se relève, le visage fermé. « Elle dit vrai, dit-elle. Le sel, on l'a mis là. Et elle n'est pas la seule barque à rester ici depuis la semaine dernière. »" },
    ],
    choices: [
      { label: "Lui promettre de lui rendre sa barque", hide: { any: [{ quest: "IF_barque" }, { seen: "IF_saisie" }] }, fx: { questSeen: "IF_barque" }, to: "IF_saisie" },
      { label: "Aller voir la barque saisie de plus près", hide: { any: [{ quest: "IF_barque" }, { not: { seen: "IF_saisie" } }] }, back: "IF_saisie" },
      { back: "IF_barques" },
    ] },

  IF_saisie: { act: "I", title: "La barque enchaînée", place: "port",
    text: [
      "Tu descends dans la barque par la proue. Elle est vide, sauf à l'arrière, où la douane a laissé les pièces à conviction pour les montrer au juge : trois sacs de toile ouverts, posés sur les nasses. Dedans, {{pie#if_saisie_sel|du sel gris et humide, du sel des marais, comme on en ramasse à Grisemotte|du sel blanc et sec, raffiné, cousu au fil rouge de la gabelle : le sel de l'entrepôt de la douane elle-même}}.",
      "La chaîne est neuve, le cadenas aussi, gros comme ton poing, avec le sceau vert de la douane. Sur le quai, deux douaniers en casaque verte jouent aux dés sur un tonneau et regardent la barque de temps en temps, sans se lever.",
      { outcome: "lose", text: "Tu reviens du bureau de la douane avec les oreilles chaudes. Le receveur t'a laissé{e} parler jusqu'au bout, puis il t'a demandé si tu avais trois ducats, et il a souri quand tu as dit non." },
    ],
    choices: [
      { label: "Monter au bureau du receveur, à la douane", to: "IF_douane" },
      { label: "Revenir cette nuit, pour la sortir de là", to: "IF_saisie_nuit" },
      { back: "IF_anguillere" },
    ] },

  IF_douane: { act: "I", title: "La douane", place: "port", backName: "le bureau de la douane",
    fx: { meet: "if_vignal" },
    text: [
      { first: true, text: "La maison de la douane est la plus belle du port : trois étages de brique, un perron, une salle basse où des commis écrivent sur des pupitres hauts dans {{pie#if_registres|de grands registres reliés de cuir vert|de grands registres reliés de cuir vert, chacun en deux exemplaires, dont le second, plus mince, porte un fermoir et pas de numéro}}, et à l'étage, derrière une porte vitrée, le receveur Gonzague Vignal, un homme rond et soigné qui porte une plume d'oie derrière l'oreille comme d'autres portent une fleur. Il te reçoit debout, pour que l'entretien soit court." },
      { again: true, text: "Le receveur Vignal lève les yeux de son registre et ne se lève pas. « Encore vous. »" },
      "« La barque de la Jouve ? Trois sacs de sel non déclarés, trois ducats d'amende, et elle repart. {{oreille#if_vignal_ordre|Le règlement est le même pour tous, voyez-vous, marais ou pas marais|La Banque paie mes hommes pour qu'aucune barque des Joncs ne reparte de Salvèze avant la Saint-Jean, et trois ducats, une anguillère ne les a jamais}}. » Il trempe sa plume. « Je ne fais pas le règlement. Je l'applique. »",
      { if: { has: "i4:douane_battue" }, text: "Il te regarde avec une attention nouvelle, et ses deux commis aussi. On parle de toi, au port, depuis la nuit des douaniers." },
    ],
    choices: [
      { label: "Payer l'amende de Mélisende : trois ducats", hide: { quest: "IF_barque" }, if: { gold: { min: 60 } }, why: "Il te faudrait trois ducats.", fx: { gold: -60, flag: "i4:amende_payee" }, to: "IF_saisie_fin" },
      { label: "Lui montrer de quel sel sont pleins les sacs de la barque", hide: { any: [{ quest: "IF_barque" }, { not: { voile: "if_saisie_sel" } }] }, to: "IF_saisie_preuve" },
      { label: "Lui démontrer que la saisie ne tient pas devant un juge", hide: { any: [{ quest: "IF_barque" }, { not: { seen: "IF_saisie" } }] },
        test: { dom: "social", diff: -10, label: "Faire reculer un receveur", help: [{ if: { has: "metier:parole" }, v: 10 }, { if: { has: "metier:lire" }, v: 10 }, { if: { voile: "if_vignal_ordre" }, v: 15 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IF_saisie_fin" }, lose: { to: "IF_saisie" } },
      { back: "IF_port" },
    ] },

  IF_saisie_preuve: { act: "I", title: "Le fil rouge",
    fx: { ep: ["perso", 700] },
    text: [
      "Tu fais descendre le receveur jusqu'à la barque, devant ses commis, devant les douaniers aux dés, devant la moitié du vieux quai. Tu ouvres un sac et tu en sors une poignée de sel blanc, sec, qui coule entre tes doigts. Puis tu retournes le sac, et tu montres la couture : fil rouge, nœud de gabelle, plomb de l'entrepôt, encore attaché par un bout.",
      "« Du sel raffiné, dis-tu assez fort. Le sel de votre entrepôt. Une anguillère des Joncs qui achète au prix de la gabelle le sel qu'elle ramasse gratis devant sa porte, pour le cacher dans ses nasses. »",
      "Quelqu'un rit sur le quai, puis un autre. Vignal regarde le plomb, puis ses douaniers, qui regardent leurs dés. Il ôte sa plume de derrière son oreille, la tourne entre ses doigts, la remet. « Une erreur d'écriture, dit-il. Il arrive que les sacs se mélangent. » Il fait signe qu'on ouvre le cadenas.",
    ],
    choices: [{ label: "Rendre la barque à Mélisende", to: "IF_saisie_fin" }] },

  IF_saisie_nuit: { act: "I", title: "La chaîne, la nuit", place: "port", takes: "night",
    text: [
      "La nuit, le port aux Sauniers appartient aux rats, aux chats et aux deux douaniers de garde, qui ont rentré leur tonneau dans la guérite et jouent à la lueur d'une chandelle. La barque de Mélisende flotte au bout de sa chaîne neuve, sur une eau si noire qu'elle semble posée sur rien. L'anneau est scellé dans la pierre du quai ; le cadenas pend à hauteur de l'eau.",
      "Mélisende t'attend dans le noir, au pied de l'escalier d'eau, sa perche à la main. « Si tu ouvres, je pars, dit-elle tout bas. Je ne m'arrête pas avant les premiers roseaux. »",
      { with: "fauvette", text: "Fauvette couve le cadenas d'un œil de gourmande. « Douane, dit-elle. Ils achètent leurs serrures au même serrurier que le Guet. Le même, depuis dix ans, et il fait toujours la même bêtise. »" },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Fauvette, son crochet déjà entre les dents", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette ouvre le cadenas" },
        win: { fx: { ep: ["perso", 600], conf: { fauvette: 5 }, flag: "i4:barque_volee" }, to: "IF_saisie_fin" }, lose: { to: "IF_saisie_force" } },
      { label: "« Laisse-moi faire », dit Lison : elle passe sous l'eau et dégage l'anneau de la pierre", who: "lison", test: { dom: "nature", diff: -10, label: "Desceller l'anneau sous l'eau" },
        win: { fx: { ep: ["perso", 600], conf: { lison: 5 }, flag: "i4:barque_volee" }, to: "IF_saisie_fin" }, lose: { to: "IF_saisie_force" } },
      { label: "Crocheter le cadenas toi-même, couché{e} sur la pierre", test: { dom: "discretion", diff: -10, label: "Crocheter un cadenas de douane", help: [{ if: { item: "crochets" }, v: 15 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600], flag: "i4:barque_volee" }, to: "IF_saisie_fin" }, lose: { to: "IF_saisie_force" } },
      { label: "Renoncer pour cette nuit", back: "IF_port" },
    ] },

  IF_saisie_force: { act: "I", title: "Les douaniers", place: "port",
    text: [
      "Le cadenas résiste, puis quelque chose tombe dans l'eau avec un bruit de seau. La porte de la guérite s'ouvre. Deux douaniers sortent, l'un avec une lanterne, l'autre avec un gourdin ferré, et ils te voient tout de suite, sur la pierre, au bout de la chaîne.",
      "« Halte à la douane ! » La lanterne se lève. Derrière toi, Mélisende s'est figée dans le noir, la perche à deux mains.",
    ],
    choices: [
      { label: "Les affronter", fight: { title: "Les douaniers du port", enemies: [{ id: "if_douanier", n: 2 }], spare: true,
        win: { fx: { ep: ["perso", 700], flag: ["i4:barque_volee", "i4:douane_battue"] }, to: "IF_saisie_fin" }, lose: { fx: { pv: -2 }, to: "IF_saisie_rate" }, calm: { fx: { flag: "i4:barque_volee" }, to: "IF_saisie_fin" },
        flee: { label: "Sauter dans l'eau noire et nager sous les gabares", dom: "nature", diff: -10, to: "IF_saisie_rate" } } },
      { label: "Leur offrir ta bourse pour qu'ils regardent ailleurs", if: { gold: { min: 40 } }, why: "Il te faudrait deux ducats, au moins.", fx: { gold: -40, flag: "i4:barque_volee" }, to: "IF_saisie_fin" },
    ] },

  IF_saisie_fin: { act: "I", title: "La barque rendue", place: "port",
    fx: { quest: "IF_barque", set: { i4_barque: "rendue" }, item: "if_tr_perles", clock: { tresors: 1 }, flag: "tresor:if_perles", ep: ["perso", 800], fac: { hautes: 10 } },
    text: [
      { if: { has: "i4:barque_volee" }, text: "La chaîne tombe à l'eau. Mélisende saute dans sa barque sans un bruit, pose sa perche contre le quai et pousse. La barque s'en va dans le noir, entre les gabares, plate comme une ombre. Au bout d'un moment, sa voix revient, tout bas, sur l'eau : « Attends-moi demain, à la fontaine aux chevaux. »", else: "Le douanier ouvre le cadenas en grommelant, et la chaîne tombe sur la pierre. Mélisende descend dans sa barque, passe la main sur le bordage comme on flatte un cheval, et se tait un long moment." },
      { if: { has: "i4:amende_payee" }, text: "Le receveur t'a fait un reçu en bonne forme, trois ducats, au nom de la Jouve. Mélisende le plie en quatre et le glisse dans son corsage. « Je le montrerai aux Joncs, dit-elle. Qu'on sache que quelqu'un de la ville a payé, une fois. »" },
      "Plus tard, elle te met dans la main un collier de perles de vase, de ces perles grises et irrégulières qu'on trouve dans les moules d'eau douce des vasières, enfilées sur un crin de cheval. Il y en a une trentaine. « Ma mère les a pêchées une par une, dit-elle. Ça vaut quelque chose, en ville. Chez nous, ça vaut plus. »",
      "Puis, plus bas : « Si un jour tu dois quitter Salvèze sans passer par les portes ni par la chaîne, il y a un endroit où l'eau de la ville sort sous les remparts. Les gens des marais y passent, la nuit, quand il faut. Dis mon nom aux barques que tu y trouveras. »",
      { with: "lison", text: "Lison regarde Mélisende, puis toi, avec un air que tu ne lui connais pas : le visage de quelqu'un qui doit réviser un compte. « Tu viens de te faire une amie aux Joncs-Bas, dit-elle. C'est plus rare que l'or. »" },
    ],
    choices: [{ back: "IF_port" }] },

  IF_saisie_rate: { act: "I", title: "La barque perdue", place: "port",
    fx: { quest: "IF_barque", set: { i4_barque: "perdue" } },
    text: [
      "Tu te retrouves sur les pavés du quai, à l'aube, trempé{e}, une bosse au front, les poches retournées par les douaniers. On t'a laissé{e} partir parce que la guérite manquait de place et que le receveur dormait. Au vieux quai, la barque de Mélisende n'est plus là : on l'a remorquée dans la nuit jusqu'à la cour de la douane, derrière une grille, avec les autres.",
      "Mélisende est partie à pied vers la porte du sud, son panier vide sous le bras. Un pêcheur des marais te dit qu'elle rentrera aux Joncs-Bas sur la barque d'un cousin, dans quatre jours, si la douane le laisse passer.",
    ],
    choices: [{ back: "IF_port" }] },
});

Object.assign(P, {
  IF_gabares: { act: "I", title: "Les gabares de sel", place: "port", backName: "le quai des gabares",
    text: [
      { first: true, text: "Les gabares de sel sont amarrées en ligne devant les greniers, cul à quai. Des planches relient chaque pont au pavé, et sur chaque planche monte une file de porteurs, hommes et femmes, un sac de sel sur la nuque, tenu des deux mains par les coins. Le sac {{pie#if_sacs|pèse un quintal de sel gris|pèse un quintal, dont une pierre plate cousue au fond pour faire le poids}}. On le paie un liard. Un commis de grenier, assis à une table sous un auvent, fait une encoche dans un bâton pour chaque sac qui passe." },
      { again: true, when: "day", text: "Les gabares, les planches, la file des porteurs courbés sous les sacs. Le commis fait ses encoches." },
      { again: true, when: "night", text: "Les gabares dorment, bâchées, une lanterne à la proue. Sur les planches retirées, un chat." },
      "Le patron de *La Blanche*, une grosse gabare à la voile rapiécée, fume sur son pont en regardant décharger. Tu lui demandes si les affaires vont. « {{oreille#if_titres|Le sel se vend, comme toujours, la ville en mange autant que l'an passé|La Banque Marrel rachète depuis un an, à n'importe quel prix, chaque titre de terre des Hautes-Eaux qu'on lui présente, et fait recopier chaque acte par ses clercs. Mon frère a vendu ses bassins à la Saint-Michel}}, dit-il. » Il tape sa pipe sur le bastingage.",
      { if: { has: "ig:marcoul_tenu" }, first: true, text: "Sur la planche de *La Blanche*, une barbe grise tressée monte un sac de sel comme les autres : Marcoul, le débardeur des Gouttières. Il te voit, et il lève son crochet de quai une fois, sans s'arrêter. Il n'a rien dit à la Reine ; toi non plus." },
      { if: { item: "iq_boite_gages" }, before: "i4:gage_sabine", text: "Dans la file des porteurs, une femme sèche aux épaules carrées, un foulard noir noué sur la tête, porte son sac comme les autres. On l'appelle en criant : « Gimel ! » Elle ne tourne pas la tête." },
    ],
    choices: [
      { label: "Attendre que la veuve Gimel redescende de la planche", if: { item: "iq_boite_gages" }, why: "Tu n'as rien à lui dire.", hide: { any: [{ has: "i4:gage_sabine" }, { not: { seen: "IQ_gages" } }] }, to: "IF_veuve" },
      { label: "Porter des sacs une heure, pour un liard le sac", once: true, hide: { night: true }, fx: { gold: 8, pv: -1, time: 1 }, to: "IF_gabares_sacs" },
      { back: "IF_port" },
    ] },

  IF_gabares_sacs: { act: "I", title: "Un liard le sac", place: "port",
    text: [
      "Le commis ne te demande pas ton nom. Il te montre la planche du menton. Le premier sac t'écrase la nuque et te tasse les vertèbres d'un coup ; au troisième, tu as compris qu'il faut le prendre sur l'os, pas sur les muscles ; au cinquième, tu ne penses plus. Le sel te rentre dans le col, dans les yeux, sous les ongles. Tu montes, tu poses, tu redescends.",
      "Au bout d'une heure, le commis fait huit encoches dans son bâton et te compte huit liards dans la main, sans lever les yeux. Les autres porteurs continuent. Ils le font depuis l'aube. Ils le feront jusqu'au soir.",
      { if: { has: "pq:escarbol_coups" }, text: "Dans la file, un porteur au nez de travers te reconnaît : un des deux débardeurs d'Escarbol, devant la boutique. Il te laisse passer devant lui sur la planche, et il dit seulement : « Pas de charrette, aujourd'hui. »" },
      { with: "tibere", text: "Tibère t'a regardé{e} faire depuis une borne, en mâchant sa chique. « Moi, à ton âge, dit-il, je faisais ça au port de Brisach. Après, je suis entré au Guet pour ne plus jamais le faire. » Il crache. « Et regarde où j'en suis. »" },
    ],
    choices: [{ back: "IF_gabares" }] },

  IF_veuve: { act: "I", title: "Lucile Gimel", place: "port",
    fx: { flag: "i4:gage_sabine", meet: "if_sabine", ep: ["perso", 300] },
    text: [
      "Lucile Gimel redescend la planche les mains vides, frotte sa nuque, et te regarde venir d'un œil méfiant : en ville, quand quelqu'un la cherche, c'est pour un loyer. Tu sors le petit paquet de la boîte des gages et tu le lui tends. Elle reconnaît l'écriture d'Odeline sur le papier avant de l'ouvrir.",
      "Dedans, un sifflet de batelier en argent, au bout d'une chaînette, tout noirci. Elle le tourne dans ses doigts pleins de sel. « Mon homme sifflait avec ça pour appeler l'écluse, dit-elle. On l'a repêché à Grisemotte, le sifflet autour du cou. Lui, on l'a mis en terre. Le sifflet, je l'ai mis en gage pour payer la terre. »",
      "Elle porte le sifflet à ses lèvres, et elle ne souffle pas. « Elle m'avait dit qu'elle le garderait jusqu'à ce que je revienne, dit-elle. Je ne suis jamais revenue. J'avais honte. » Elle le passe à son cou, sous le foulard. « {{oreille|Je te dois quelque chose, alors|Je n'ai rien à te donner, et je déteste ça}}. »",
    ],
    choices: [
      { label: "Repartir, la boîte allégée d'un gage", hide: { has: "i4:gage_clarmonde" }, back: "IF_gabares" },
      { label: "Repartir, la boîte vide", hide: { not: { has: "i4:gage_clarmonde" } }, fx: { quest: "IQ_gages", set: { i4_gages: "rendus" }, drop: "iq_boite_gages", ep: ["perso", 500] }, back: "IF_gabares" },
    ] },

  IF_criee: { act: "I", title: "La criée et la Saumure", place: "port", backName: "la criée aux poissons",
    text: [
      { first: true, text: "La criée aux poissons se tient sous une halle de bois ouverte aux quatre vents, au bout du port, à côté de la taverne de la Saumure, dont la porte bat sur un escalier qui descend plus bas que le quai. Le matin, les mareyeuses s'y disputent les paniers des barques. Le soir, les mêmes boivent à la Saumure ce qu'elles ont gagné le matin." },
      { again: true, when: "day", text: "La criée : les cris, les paniers, les écailles sur les dalles, les mouettes. La porte de la Saumure bat." },
      { again: true, when: "night", text: "La halle de la criée, vide, qui sent encore le poisson. À la Saumure, des chansons, et de la lumière sous la porte." },
      "Le crieur, monté sur une caisse, annonce les lots en chantant. « Anguilles des Joncs, trois paniers ! {{oreille#if_crieur|Les anguilles des Joncs sont rares cette semaine, la pêche est mauvaise|Les douaniers retiennent les barques des Joncs au port, et la Banque rachète leurs anguilles à moitié prix pour les revendre ici}}, alors qui dit mieux ? » Personne ne dit mieux. Le lot part à un commis en noir que tu as déjà vu sur l'île des Changeurs.",
      { if: { has: "ig:poissons_fui" }, text: "Une poissonnière des Halles est venue acheter au port. Elle te voit, et elle porte la main à sa bourse, d'instinct, sans rien crier. Ses deux fils ne sont pas avec elle." },
      "Au comptoir de la Saumure, on parle du duc d'Aveline, comme partout, et de l'hiver qui a été dur, et du prix du pain. Un pêcheur dit que la Saint-Jean, c'est dans trois mois. Un autre dit que la Saint-Jean, ça ne regarde que les riches. Le premier lui demande ce qu'il mangera, lui, quand les riches n'auront plus de pain non plus.",
    ],
    choices: [
      { label: "Acheter des provisions de route à la criée : poisson sec, biscuit, oignons", if: { gold: { min: 12 } }, why: "Il te faudrait douze liards.", hide: { night: true }, fx: { gold: -12, food: 3 }, to: "IF_criee_achat" },
      { label: "Boire un pot à la Saumure, et écouter", once: true, if: { gold: { min: 2 } }, why: "Il te faudrait deux liards.", fx: { gold: -2, ep: ["perso", 150] }, to: "IF_saumure" },
      { back: "IF_port" },
    ] },

  IF_criee_achat: { act: "I", title: "Des provisions", place: "port",
    text: [
      "Une mareyeuse aux bras nus te remplit un sac de toile : une douzaine de harengs saurs liés par la queue, du biscuit de mer dur comme de la brique, une tresse d'oignons rouges. « Ça tient trois semaines, dit-elle, si tu ne le manges pas. » Elle rit de sa propre plaisanterie, et elle te rend la monnaie juste.",
    ],
    choices: [{ back: "IF_criee" }] },

  IF_saumure: { act: "I", title: "La Saumure", place: "port",
    text: [
      "La Saumure est une cave voûtée, {{echo#if_echo_saumure|plus basse que le quai, où l'humidité ronge les tonneaux|plus basse que le quai, où une voix d'homme a dit, la veille au soir, entre deux pots : « Demain, l'affiche. Cinquante ducats. Le reste, c'est l'allumeur qui le dira »}}, où l'eau du port suinte par les murs les jours de grande marée. On boit du cidre aigre dans des pots de grès, assis sur des tonneaux ; l'endroit tient de la taverne et de la cale, et le client y descend comme une marchandise. Dans le fond, des porteurs jouent aux osselets ; au comptoir, la patronne écoute tout et ne répète rien.",
      "Tu écoutes. On parle de la chaîne de la douane, qui ne s'abaisse plus pour les barques des marais. On parle d'un batelier qui a vu passer, la semaine dernière, à minuit, une barque noire chargée d'hommes en gants gris vers les Hautes-Eaux. Et on parle, plus bas, d'une affiche que le Guet ferait imprimer chez l'imprimeur de la rue des Presses, avec un nom dessus, et cent ducats au bout.",
      { if: { has: "ic:expulse_cri" }, text: "Au fond, un porteur lève son pot et crie, pour faire rire les autres : « Le sel paie pour les banquiers ! » On rit, on trinque. Il ne sait pas que tu as été jeté{e} du Conseil pour l'avoir dit la première fois." },
      { with: "tibere", text: "Tibère boit son pot d'un trait et en commande un autre sans te regarder. « Les affiches, dit-il, c'est toujours le capitaine qui les commande. Et le capitaine les fait payer par qui les demande. » Il fixe le fond de son pot. « Qui les demande, je ne sais pas. »" },
    ],
    choices: [{ back: "IF_criee" }] },

  IF_toinon: { act: "I", title: "Le crocheteur de la Salve", place: "port", backName: "l'étal de Toinon",
    fx: { meet: "if_toinon" },
    text: [
      { first: true, text: "Toinon est crocheteur de rivière : il passe ses nuits dans une barque à traîner un grappin au fond de la Salve, entre les piles des ponts, et ses jours à vendre ce qu'il a remonté sur une couverture étalée au bout du quai. Il a soixante ans, une seule dent devant et des doigts en crochet, à force. Sur sa couverture : des clous, une ancre de barque, des cuillers tordues, une épée de garde rouillée en trois morceaux, des tessons de pots, et des choses que la vase a rendues méconnaissables." },
      { again: true, text: "Toinon, sa couverture, sa dent. Il a remonté de nouvelles cuillers." },
      "Au milieu de la couverture, il y a {{pie#if_toinon_gobelet|un bloc de sel et de vase durcis, gros comme deux poings, où brille un bout de métal terne|un gobelet d'argent à pied, ciselé de roseaux et de hérons, du temps de la reine, pris dans une gangue de sel qui l'a gardé intact}}. « Six liards, dit Toinon. {{oreille#if_toinon_dit|C'est peut-être une cuiller, c'est peut-être un trésor, on ne sait jamais avec la Salve|C'est sûrement de l'argent, mais il faudrait de l'eau douce et une nuit pour le laver, et je n'ai ni l'une ni l'autre}}. »",
      "Et à part, sur un carré de velours rouge, posé comme une relique : {{pie#if_faux_collier|un collier d'or ancien, aux perles baroques, qu'il appelle le collier de la Muette|un collier de laiton doré au bain, enfilé de perles de verre soufflé remplies de cire, qu'il appelle le collier de la Muette}}. « Repêché sous le pont de la Reine, dit Toinon en baissant la voix. Deux ducats. Pour vous. »",
      { if: { all: [{ has: "pf:collier_faux" }, { item: "pf_tr_collier" }] }, first: true, text: "C'est le collier de la foire aux repêchés, maille pour maille, avec sa couronne de plomb doré. Le tien, au fond de ton sac, a déjà verdi." },
    ],
    choices: [
      { label: "Acheter le bloc de sel pour six liards", once: true, hide: { not: { voile: "if_toinon_gobelet" } }, if: { gold: { min: 6 } }, why: "Il te faudrait six liards.", fx: { gold: -6 }, to: "IF_toinon_gobelet" },
      { label: "Gratter un coin du bloc avec ta dague, sous le nez de Toinon", hide: { any: [{ voile: "if_toinon_gobelet" }, { seen: "IF_toinon_gobelet" }, { seen: "IF_toinon_gratte" }] },
        test: { dom: "savoir", diff: -10, label: "Deviner ce que cache une gangue de sel", help: [{ if: { has: "metier:mains" }, v: 20 }] },
        win: { fx: { gold: -6 }, to: "IF_toinon_gobelet" }, lose: { to: "IF_toinon_gratte" } },
      { label: "Acheter le collier de la Muette pour deux ducats", once: true, if: { gold: { min: 40 } }, why: "Il te faudrait deux ducats.", fx: { gold: -40, item: "if_faux_collier" }, to: "IF_toinon_collier" },
      { label: "Dire tout bas à Toinon ce que vaut son collier", once: true, hide: { not: { voile: "if_faux_collier" } }, fx: { ep: ["perso", 200] }, to: "IF_toinon_collier" },
      { back: "IF_port" },
    ] },

  IF_toinon_gratte: { act: "I", title: "Une cuiller", place: "port",
    text: [
      "Tu grattes le bloc. Le sel s'effrite, la vase dessous aussi, et le bout de métal grandit sous ta lame : une tige, un rebord. Toinon te regarde faire en souriant de sa dent unique. « C'est une cuiller, dit-il. Ou c'est le pied d'un chandelier. Six liards pour le savoir. » Il reprend le bloc et le pose de l'autre côté de la couverture, hors de ta portée. « Ou douze, maintenant que vous avez gratté. »",
      "Tu repars sans savoir. Toinon remet le bloc au milieu de sa couverture.",
    ],
    choices: [{ back: "IF_toinon" }] },

  IF_toinon_gobelet: { act: "I", title: "Le gobelet de la Salve", place: "port",
    fx: { item: "if_tr_gobelet", clock: { tresors: 1 }, flag: "tresor:if_gobelet", ep: ["perso", 500] },
    text: [
      "Tu emportes le bloc jusqu'à l'abreuvoir aux chevaux, au bout du port, et tu le laisses tremper. Le sel fond en une heure. La vase vient sous ton pouce, par plaques. Dessous, un gobelet d'argent à pied, haut comme la main, ciselé tout autour de roseaux et de hérons qui pêchent. Au fond, dans un médaillon, une couronne posée sur une vague.",
      "L'argent est noir et intact. Le sel l'a gardé trois cents ans comme on garde un jambon.",
      { with: "lison", text: "Lison prend le gobelet, regarde les hérons, et te le rend. Puis elle dit : « Chez nous, on dit que la reine buvait dans l'argent pour savoir si on l'empoisonnait. L'argent noircit. » Elle regarde le gobelet noir. « Celui-là a dû voir des choses. »" },
    ],
    choices: [{ back: "IF_toinon" }] },

  IF_toinon_collier: { act: "I", title: "Le collier de la Muette", place: "port",
    text: [
      { if: { item: "if_faux_collier" }, text: "Toinon enveloppe le collier dans son carré de velours rouge, avec des gestes de sacristain, et il empoche tes deux ducats. Tu le passes à ton cou sous ta chemise. Il est léger. Il est un peu trop léger.", else: "Tu te penches vers Toinon et tu lui dis à l'oreille : laiton, bain d'or, verre soufflé, cire. Il te regarde un long moment de sa dent unique. Puis il rit, sans bruit, en se tenant le ventre." },
      { if: { item: "if_faux_collier" }, text: "Le soir même, sur ta peau, le laiton laisse une trace verte en forme de collier.", else: "« C'est un neveu des Halles qui me les fait, dit-il. Six par mois. Je les vends aux gens qui ont des chevaux. » Il essuie ses yeux. « Pour vous, la prochaine trouvaille, je vous dis ce que c'est avant de vous la vendre. Parole de Toinon. »" },
    ],
    choices: [{ back: "IF_toinon" }] },

  IF_passeur: { act: "I", title: "Le vieux passeur", place: "port", backName: "le bout de l'estacade",
    fx: { meet: "if_roudil" },
    text: [
      { first: true, text: "Au bout de l'estacade, là où le port finit et où la Salve s'élargit entre les roseaux, un vieil homme est assis dans une barque plus longue que les autres, avec deux paires de perches et une voile roulée. Il mâche une racine de réglisse, lentement, comme on rumine. On l'appelle Roudil, et on l'appelle le passeur, parce qu'il passe les gens, et les choses, d'un côté de la chaîne à l'autre, sans que la chaîne s'en aperçoive." },
      { again: true, before: "i4:passeur_regle", text: "Roudil mâche sa racine. Il t'a vu{e} venir de loin." },
      { after: "i4:passeur_regle", text: "Roudil lève sa racine en guise de salut. C'est réglé entre vous." },
      "« Si tu dois partir un jour, dit-il sans que tu aies rien demandé, et partir vite, viens me voir. {{oreille#if_passeur_prix|Deux ducats, et je te passe sans que personne en sache rien|Deux ducats de toi, et trois de la douane pour le nom de chaque gens de la ville que je passe : je ne vends jamais ceux des marais}}. » Il crache un brin de réglisse dans l'eau. « Tout le monde finit par partir, à Salvèze. Les riches par la grand-route, les autres par moi. »",
      { with: "lison", text: "Lison salue Roudil d'un mot dans le parler des marais. Il répond de même, et il ajoute quelque chose qui la fait rougir. Elle te dit : « Il passe les gens des Joncs depuis avant ma naissance. Il est sûr. » Elle hésite. « Pour les gens des Joncs. »" },
    ],
    choices: [
      { label: "Lui payer d'avance deux ducats pour le jour où tu devras partir", hide: { has: "i4:passeur_regle" }, if: { gold: { min: 40 } }, why: "Il te faudrait deux ducats.", fx: { gold: -40, flag: ["i4:passeur_paye", "i4:passeur_regle"] }, to: "IF_passeur_marche" },
      { label: "Lui dire que tu sais ce que la douane lui paie pour les noms", hide: { any: [{ has: "i4:passeur_regle" }, { not: { voile: "if_passeur_prix" } }] }, fx: { flag: ["i4:passeur_tenu", "i4:passeur_regle"], ep: ["perso", 500] }, to: "IF_passeur_marche" },
      { back: "IF_port" },
    ] },

  IF_passeur_marche: { act: "I", title: "Le marché de Roudil", place: "port",
    text: [
      { if: { has: "i4:passeur_tenu" }, text: "Roudil s'arrête de mâcher. Il te regarde, puis il regarde ton oreille, longtemps, et quelque chose passe sur son visage, entre la peur et le respect. « Alors c'est toi, dit-il. La petite de chez Carrus. Ou le petit. On m'avait dit que la vieille avait gardé l'os. » Il crache sa racine. « Bon. Je ne te vendrai pas. Je te passerai pour rien, le jour venu, et je ne dirai pas ton nom. Ma barque te cachera, si tu en as besoin. Et toi, tu ne diras pas le mien. »", else: "Roudil prend tes deux ducats, les mord l'un après l'autre, et les glisse dans sa botte. « Le jour où tu en as besoin, dit-il, tu viens au bout de l'estacade, et tu montes dans la barque sans parler. Je m'occupe du reste. » Il te serre la main. Il a la main sèche et chaude." },
      { with: "lison", if: { has: "i4:passeur_tenu" }, text: "Lison a entendu. Elle regarde Roudil comme on regarde un oncle surpris à tricher aux cartes un soir de veillée funèbre. Roudil baisse les yeux le premier." },
    ],
    choices: [{ back: "IF_passeur" }] },
});

// ==================================================================== the warrant and the chase through Salvèze
var TIBERE_A_PARLER = { all: [{ present: "tibere" }, { not: { seen: "IF_tibere" } }] };
Object.assign(P, {
  IF_mandat: { act: "I", title: "Le mandat",
    fx: { flag: "mandat", ep: ["perso", 800] },
    text: [
      "Tu rentres par le pont des Noyés, le feuillet du Beffroi plié contre ta peau sous la chemise, la loupe d'ambre au fond de ta poche, et tu as envie de rire, de dormir, de le dire à quelqu'un. Il y a du monde sur le pont, plus que d'habitude, et tout ce monde regarde la même chose : une feuille fraîchement imprimée, clouée au poteau de la lanterne. L'encre luit encore.",
      MANDAT,
      { if: { has: "guet:mensonge" }, text: "Au bas de la feuille, ajouté à la plume d'une écriture de clerc : *L'accusé{e} a déclaré au Guet n'avoir pas revu la défunte depuis le matin. Le témoin Pujol l'a entendu{e} se disputer avec elle à dix heures du soir.*", else: "Au bas de la feuille, ajouté à la plume d'une écriture de clerc : *L'accusé{e} s'est disputé{e} avec la défunte à dix heures du soir, selon le témoin Pujol.*" },
      { if: { has: "i4:sceau_brise" }, text: "Et en dessous, d'une encre plus fraîche : *A brisé le scellé de justice pour reparaître sur les lieux.*" },
      { if: { has: "i4:vu_entrer" }, text: "Et en dessous, d'une encre plus fraîche : *A été vu{e} entrant dans la maison scellée par le soupirail de la cave, au su de tout le quai.*" },
      "Un homme à côté de toi lit ton nom à voix haute pour un voisin qui ne sait pas lire. Puis il se retourne, et il te voit. « C'est {hero}, dit-il, presque poliment. C'est l'apprenti{e} de la Carrus. » Une femme recule. Un gamin crie. Au bout du quai, devant la boutique d'Odeline, Brunon Amblard et quatre hommes du Guet en casque rond lèvent la tête tous ensemble.",
      { if: { has: "ib:ruelle" }, text: "Contre le poteau, un grand gaillard en manteau de laine grise ne lit pas le placard. Il te regarde, toi. C'est l'un des deux hommes de la ruelle du Sel." },
      { if: { not: { has: "i4:boutique_reglee" } }, text: "Derrière eux, Désiré cloue deux planches en travers de la porte de la boutique et presse dans la cire un scellé neuf, celui du mandat." },
      { with: "lison", text: "La main de Lison se referme sur ta manche. « Ne cours pas encore, dit-elle entre ses dents. Écoute-moi. Ma barque est sous le pont de la Reine. La grille de l'égout ne se lève qu'à marée basse, à la nuit. D'ici là, cache-toi où tu veux, et sois sous l'arche quand la cloche des vêpres a fini. » Elle te lâche. « Maintenant, cours. »" },
      { without: "lison", text: "Un gamin des canaux te fourre dans la main un bout de corde nouée de trois nœuds serrés et file. Tu connais ces nœuds : Lison les fait aux amarres de sa barque. Le pont de la Reine. À la nuit." },
      { with: "gildas", text: "Frère Gildas a lu le placard jusqu'au bout. Il pose la main sur ton épaule, et sa main est très lourde. « Allez, dit-il. Je vous retrouverai. Dieu sait où vous êtes. »" },
      { with: "tibere", text: "Tibère a pâli sous sa moustache. Il regarde le placard, puis Brunon au bout du quai, puis toi. « Cinquante ducats, dit-il. {{oreille#if_tibere_tente|Ils ne font pas les choses à moitié, les salauds|C'est dix fois ce que Brunel me paie pour te suivre, et il le sait, et il sait que je le sais}}. »" },
    ],
    choices: [
      { label: "Grimper par l'échelle de Galabru, et fuir par les toits", to: "IF_toits" },
      { label: "Fauvette siffle quelque part au-dessus de toi : suivre le sifflet", hide: { any: [{ not: { has: "fauvette:amie" } }, { present: "fauvette" }] }, fx: { join: "fauvette" }, to: "IF_toits_fauvette" },
      { label: "« Laisse-moi faire », dit Fauvette : elle te montre une gouttière", who: "fauvette", to: "IF_toits_fauvette" },
      { label: "Plonger dans la foule du marché aux herbes, de l'autre côté du pont", to: "IF_marche" },
      { label: "Filer le long des canaux, de pont en pont", to: "IF_ponts" },
      { label: "Marcher droit sur Brunon, et lui dire la vérité", fx: { flag: "i4:rendu" }, to: "IF_geole" },
    ] },

  IF_toits: { act: "I", title: "Les toits du quai",
    text: [
      "L'échelle de Prosper Galabru est appuyée à sa façade, comme toujours, pour monter les ballots au grenier. Tu y es en trois enjambées, Galabru te regarde passer au-dessus de sa tête avec une poêle dans une main et la bouche ouverte, et tu prends pied sur les tuiles. Les toits du quai des Lanternes se touchent tous, penchés les uns contre les autres comme les maisons dessous, mais à des hauteurs inégales, et la moitié attend encore les couvreurs depuis l'hiver.",
      "En bas, des cris, un sifflet du Guet, puis deux. Quelqu'un monte à l'échelle derrière toi, lourdement.",
      { if: { has: "pq:gants_gris" }, text: "Puis un fracas de bois. Prosper Galabru a couché son échelle dans la rue d'un coup d'épaule, avec l'homme du Guet au troisième barreau. « Pardon, pardon, crie-t-il. Mes ballots ! » Il ne te regarde pas. Il a dit non à l'homme aux gants gris, et il le dit encore." },
      { with: "lison", text: "Lison est montée avant toi, sans que tu l'aies vue faire. Elle court sur le faîtage les bras écartés, comme sur le plat-bord d'une barque." },
    ],
    choices: [
      { label: "Courir sur le faîtage, sauter d'un toit à l'autre", test: { dom: "nature", diff: -10, label: "Courir sur les toits", help: [{ if: { arch: "voleur" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }, { with: "lison", v: 5 }, { if: { has: "pq:gants_gris" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IF_abri" }, lose: { fx: { pv: -2 }, to: "IF_marche" } },
      { label: "Te glisser derrière une cheminée et attendre qu'ils passent", test: { dom: "discretion", diff: -10, label: "Se fondre dans les tuiles", help: [{ if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IF_abri" }, lose: { fx: { pv: -1 }, to: "IF_marche" } },
      { label: "Repousser l'échelle d'un coup de pied, avec l'homme dessus", fight: { title: "Sur les toits", enemies: [{ id: "garde_guet", n: 1 }], spare: true,
        win: { fx: { ep: ["perso", 600] }, to: "IF_abri" }, lose: { fx: { pv: -1 }, to: "IF_geole" }, calm: { to: "IF_abri" },
        flee: { label: "Te laisser glisser jusqu'à la gouttière et sauter", dom: "nature", diff: -10, to: "IF_marche" } } },
    ] },

  IF_toits_fauvette: { act: "I", title: "La route des chats",
    fx: { ep: ["perso", 700], conf: { fauvette: 5 } },
    text: [
      "Fauvette est accroupie sur le rebord d'une lucarne, au-dessus de la pension de Clarmonde, et elle te tend la main sans te regarder, les yeux sur la rue. Tu la prends. Elle te hisse avec une force que tu ne lui soupçonnais pas, et la voilà partie, pliée en deux, sur la crête des tuiles.",
      "Elle connaît chaque toit. Elle sait lequel est pourri et lequel est solide, quelle gouttière tient le poids d'un homme et laquelle cède, où sauter, où ramper, où s'aplatir quand un sifflet monte de la rue. Elle te fait passer par une lucarne, traverser un grenier plein de pommes à sécher, ressortir par une autre. Les sifflets du Guet s'éloignent sur ta gauche, puis sur ta droite, puis plus du tout.",
      { with: "fauvette", text: "Au bout d'un moment, elle s'arrête derrière une cheminée, tout essoufflée, et elle rit. « {{oreille#if_fauvette_course|Tu cours comme un veau, tu sais|Je cours avec toi parce que tu m'as parlé comme à une grande, et que ça, personne ne l'avait jamais fait}}, dit-elle. » Puis elle te montre, en contrebas, un hangar à barques au toit de planches, au bord du canal. « Là. Le vieux Couzi. Il parle à ses lanternes, et à elles seules. »" },
    ],
    choices: [{ label: "Descendre jusqu'au hangar du vieux Couzi", to: "IF_abri" }] },

  IF_ponts: { act: "I", title: "De pont en pont",
    text: [
      "Tu prends le long du canal des Lanternes, à contre-courant de la foule, la tête basse. Le canal mène au canal des Tanneurs, qui mène au canal de la Reine, et chaque canal a ses ponts, et sur chaque pont, ce matin, il y a une lanterne, et à chaque lanterne, un placard cloué. Tu vois ton nom trois fois avant le premier coude.",
      "Au pont des Tanneurs, deux hommes du Guet sont plantés au milieu du tablier, et regardent les visages un par un. Le quai, de ton côté, finit au pied du pont. En dessous, l'eau verte, et une barque de légumes qui va passer sous l'arche.",
      { with: "lison", text: "Lison suit la barque de légumes des yeux, puis elle te regarde. Elle n'a pas besoin de parler." },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Lison : elle saute dans la barque de légumes, et toi derrière elle", who: "lison", test: { dom: "discretion", diff: 0, label: "Passer sous le pont dans les choux" },
        win: { fx: { ep: ["perso", 600], conf: { lison: 5 } }, to: "IF_abri" }, lose: { to: "IF_pont_garde" } },
      { label: "Héler La Poule d'eau, la barque de Quiterie Castagné, qui descend le canal", hide: { not: { has: "pq:quiterie_amie" } }, to: "IF_poule_eau" },
      { label: "Traverser le pont comme si de rien n'était", to: "IF_pont_garde" },
      { label: "Te laisser glisser dans le canal, et nager sous l'arche", to: "IF_plongeon" },
    ] },

  IF_poule_eau: { act: "I", title: "La Poule d'eau",
    fx: { ep: ["perso", 600] },
    text: [
      "Quiterie Castagné te reconnaît de loin, debout à l'arrière de sa barque, la perche à la main. Elle ne ralentit pas. Elle rapproche seulement la barque du quai, assez pour que tu sautes, et elle te montre du menton le linge mouillé entassé au milieu. Tu t'y couches. Elle jette dessus un drap qui sent le savon noir.",
      "La barque passe sous le pont des Tanneurs au pas de la perche. Au-dessus, les deux gardes regardent les visages, et Quiterie leur crie le prix du blanchissage, comme chaque matin. Plus loin, elle te dépose contre un hangar à barques. « Pour le hochet, dit-elle. On est quittes. Moi, je préfère être quitte. »",
      { with: "lison", text: "Lison s'est couchée sous le drap à côté de toi, et elle rit tout bas dans le linge humide, une fois passée l'arche." },
    ],
    choices: [{ label: "Te glisser dans le hangar de Couzi", to: "IF_abri" }] },

  IF_pont_garde: { act: "I", title: "Le pont des Tanneurs",
    text: [
      "Les deux gardes te voient à mi-pont. Le plus jeune regarde le placard, puis ton visage, puis le placard. Le plus vieux a déjà la main sur sa hallebarde. « Halte. Toi. {{oreille#if_garde_pont|Le nom, et vite, on n'a pas toute la journée|Le nom, et dis-en un autre, que je n'aie pas à t'arrêter devant ma sœur qui vend ses choux là-bas}}. »",
      { with: "tibere", text: "Tibère passe devant toi, d'un pas lourd, son vieux manteau du Guet bien en vue. Les deux gardes le reconnaissent. Le plus vieux hésite." },
      { outcome: "lose", text: "La barque de légumes a basculé sous ton poids, et le maraîcher a crié. Te voilà sur les marches du pont, trempé{e} jusqu'aux genoux, face aux deux gardes." },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Tibère : il leur parle en sergent", who: "tibere", test: { dom: "social", diff: 0, label: "La voix du sergent Gaucelm" },
        win: { fx: { ep: ["perso", 600], conf: { tibere: 5 } }, to: "IF_abri" }, lose: { to: "IF_geole" } },
      { label: "Leur dire que tu vas te rendre toi-même à Brunon, au quai, et passer", test: { dom: "social", diff: -20, label: "Mentir à deux gardes", help: [{ if: { has: "i4:brunon" }, v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IF_abri" }, lose: { to: "IF_geole" } },
      { label: "Te battre pour passer", fight: { title: "Le pont des Tanneurs", enemies: [{ id: "garde_guet", n: 2 }], spare: true,
        win: { fx: { ep: ["perso", 700], flag: "i4:guet_battu" }, to: "IF_abri" }, lose: { to: "IF_geole" }, calm: { to: "IF_abri" },
        flee: { label: "Enjamber le parapet et sauter", dom: "nature", diff: 0, to: "IF_plongeon" } } },
    ] },

  IF_plongeon: { act: "I", title: "Le canal",
    text: [
      "L'eau du canal est froide à couper le souffle, verte, épaisse de tout ce que la ville y jette. Tu nages sous l'arche, entre les piles, dans l'ombre, en gardant la bouche fermée, sage précaution dans une eau qui a servi à toute la ville avant toi. Au-dessus de toi, des pas courent sur le pont, et quelqu'un crie qu'on lui apporte une gaffe.",
      "De l'autre côté, le canal longe des arrière-cours, des escaliers d'eau, des lavoirs, des hangars à barques au ras de l'eau.",
    ],
    choices: [
      { label: "Nager encore, le plus loin possible, sous les escaliers d'eau", test: { dom: "nature", diff: -10, label: "Nager dans le canal", help: [{ if: { arch: "rodeur" }, v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 600], pv: -1 }, to: "IF_abri" }, lose: { fx: { pv: -2 }, to: "IF_geole" } },
    ] },

  IF_marche: { act: "I", title: "Le marché aux herbes",
    text: [
      "Le marché aux herbes se tient tous les matins sur le pont-aux-Herbes et sur la petite place qui le prolonge : des tréteaux, des paniers, des bottes de cresson, de poireaux, de menthe, des cages à poules, et une foule serrée de servantes, de cuisinières, de commis, de mendiants, qui sent la terre mouillée et l'oignon. On y avance à coups d'épaules, et les plus polis s'excusent après.",
      { outcome: "lose", text: "Tu glisses sur les tuiles, tu te rattrapes à une gouttière qui plie, et tu tombes dans la toile d'un auvent, qui se déchire et te dépose, avec trois bottes de poireaux, au milieu des paniers du marché. Une marchande hurle. Le reste du marché se retourne." },
      "Derrière toi, au bout du pont, les casques ronds du Guet fendent la foule. Une servante te regarde trop longtemps, puis dit à sa voisine : « {{oreille#if_servante|Je n'ai rien vu, moi, je fais mes courses|Cinquante ducats, c'est trois ans de gages, et le Guet est à vingt pas}}. » Un mendiant aussi te regarde.",
      { if: { has: "ig:bocquet_tenu" }, text: "Au coin du pont, Alexis Bocquet marchande une cage à poules, sa loupe de borgne vissée à l'œil. Il te voit, et il se met à regarder la cage avec beaucoup d'application." },
      { with: "gildas", text: "Frère Gildas marche à ta hauteur, les mains dans les manches. Il défait de son sac un second froc de bure, roulé serré, et te le tend sans tourner la tête." },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Frère Gildas : deux moines qui prient en marchant, on les laisse passer", who: "gildas", test: { dom: "discretion", diff: 0, label: "Passer pour un moine" },
        win: { fx: { ep: ["perso", 600], conf: { gildas: 5 } }, to: "IF_abri" }, lose: { to: "IF_geole" } },
      { label: "Les marchandes du quai te font signe, derrière leurs paniers", hide: { not: { any: [{ is: { i4_gages: "rendus" } }, { has: "i4:boutique_pillee" }, { has: "i4:gage_clarmonde" }, { has: "pf:lanternes" }] } }, to: "IF_marche_paniers" },
      { label: "Te fondre dans la foule, plié{e} sous un panier", test: { dom: "discretion", diff: -10, label: "Disparaître dans un marché", help: [{ if: { arch: "voleur" }, v: 10 }, { if: { has: "metier:parole" }, v: 5 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IF_abri" }, lose: { to: "IF_geole" } },
      { label: "Renverser les étals derrière toi et courir", fight: { title: "Le marché aux herbes", enemies: [{ id: "garde_guet", n: 2 }], spare: true,
        win: { fx: { ep: ["perso", 700], flag: "i4:guet_battu" }, to: "IF_abri" }, lose: { to: "IF_geole" }, calm: { to: "IF_abri" },
        flee: { label: "Te jeter sous les tréteaux et ramper", dom: "discretion", diff: -10, to: "IF_abri" } } },
    ] },

  IF_marche_paniers: { act: "I", title: "Sous le cresson",
    fx: { ep: ["perso", 600] },
    text: [
      "Une grosse femme en tablier bleu, la cressonnière du pont, la femme du rempailleur, te prend par le bras et te pousse sous son tréteau, entre deux paniers vides. Elle jette par-dessus toi trois bottes de cresson mouillé et une toile à sac. Ton monde se réduit à du vert et à des bottes de soldats qui passent, à un pied de ton nez.",
      { if: { is: { i4_gages: "rendus" } }, text: "« Pour la timbale du petit, dit-elle tout bas au-dessus de toi, sans arrêter de crier ses prix. Mon homme ne l'aurait jamais revue. »" },
      { if: { has: "i4:boutique_pillee" }, text: "« J'ai eu les ciseaux de la Carrus, quand tu as ouvert sa porte, dit-elle tout bas. Des ciseaux de tailleur, des vrais. Je n'oublie pas. »" },
      { if: { has: "pf:lasalle_verite" }, text: "Au tréteau voisin, la veuve Lasalle rince ses bottes de cresson. C'est elle qui t'a montré{e} du menton à la cressonnière. « La lanterne de Noé est pendue au-dessus de mon lit, dit-elle sans tourner la tête. Je n'oublie pas qui me l'a rapportée. »" },
      { if: { has: "pf:lasalle_mer" }, text: "Au tréteau voisin, la veuve Lasalle rince ses bottes de cresson. C'est elle qui t'a montré{e} du menton à la cressonnière. « Que la marée te garde, dit-elle sans tourner la tête. Toi aussi, maintenant. »" },
      { if: { has: "pf:lasalle_mensonge" }, text: "Au tréteau voisin, la veuve Lasalle rince ses bottes de cresson. C'est elle qui t'a montré{e} du menton à la cressonnière. « Tu l'as vue passer, la lanterne de Noé, dit-elle sans tourner la tête. À mon tour de ne rien voir. »" },
      "Plus tard, le marché remballe. On te charge sur une charrette à bras sous les paniers, et deux gamins te poussent, en sifflant, jusqu'aux hangars du canal.",
    ],
    choices: [{ label: "Sortir de sous les paniers", to: "IF_abri" }] },

  IF_abri: { act: "I", title: "Le hangar de Couzi", takes: 3, backName: "le hangar de Couzi",
    text: [
      { first: true, text: "Le hangar du vieux Couzi est un appentis de planches posé à moitié sur l'eau, derrière le quai, avec des barques retournées sur des tréteaux, des filets pendus aux poutres, et partout, accrochées par dizaines pour sécher, les lanternes de papier de la fête qu'il a repêchées au matin, mouillées, déchirées, qu'il revend l'année d'après. Le hangar {{echo#if_echo_couzi|sent le goudron, le papier mouillé et la suie des mèches|garde la voix de Couzi, qui parle chaque matin à ses lanternes en les pendant : « Toi, tu étais pour un enfant. Toi, pour un marin. Toi, je ne sais pas, tu étais mal pliée »}}. Couzi te regarde entrer. Il ne demande rien. Il te montre du menton un coin derrière une barque, et il retourne à ses lanternes." },
      { again: true, text: "Le hangar de Couzi, ses lanternes mortes, ses barques retournées. Couzi n'a pas bougé." },
      { first: true, if: { has: "pf:lanterne_bleue" }, text: "Tu regardes les lanternes pendues, une à une, par habitude de métier. Il n'y en a pas de bleue." },
      { if: { has: "pq:odeline_marais" }, text: "En pendant ses lanternes, Couzi chante tout bas, sans s'en apercevoir, une chanson des marais qui chante sur la fin des mots. Il s'arrête net quand il voit que tu l'écoutes." },
      { first: true, text: "Tu t'assieds par terre, dans le noir, le dos contre une coque goudronnée. Le feuillet du Beffroi crisse sous ta chemise. Au-dessus de toi, les lanternes mortes tournent au bout de leurs ficelles, au moindre souffle, toutes ensemble et sans bruit ; on dirait une assemblée qui délibère sur ton cas. Dehors, les sifflets du Guet passent et repassent sur le quai, de plus en plus loin. Les cloches sonnent none, puis la demie. Il faut attendre vêpres." },
      { if: { has: "i4:guet_battu" }, first: true, text: "Les sifflets passent plus souvent qu'ailleurs, et plus fort. Deux hommes du Guet rentrent au poste en se tenant la tête, et tout le Guet le sait." },
      { with: "lison", first: true, text: "Lison s'est assise en face de toi, les genoux sous le menton. « À la nuit, dit-elle. Sous le pont de la Reine. Après, tu ne reverras pas Salvèze avant longtemps. Si tu as quelque chose à faire ici, c'est maintenant. »" },
      { if: { seen: "IF_saisie_fin" }, first: true, text: "Un peu plus tard, une barque noire glisse le long du hangar, et une voix de femme dit à travers les planches, tout bas, dans le parler des marais, une phrase que tu ne comprends pas. Puis, plus clair : « La sortie de l'égout. Ce soir. On y sera. » Mélisende." },
      { with: "tibere", first: true, text: "Tibère fait les cent pas entre les barques, le chapeau à la main, en le tordant. Il regarde la porte plus souvent que toi." },
    ],
    choices: [
      { label: "Tibère s'est arrêté devant la porte du hangar", hide: { not: TIBERE_A_PARLER }, to: "IF_tibere" },
      { label: "Aller trouver l'allumeur qui t'accuse, au Lumignon", hide: { seen: "IF_temoin" }, to: "IF_temoin" },
      { label: "Passer voir Clarmonde par la cour de la pension", hide: { seen: "IF_voisine" }, to: "IF_voisine" },
      { label: "À la nuit, gagner le pont de la Reine", big: true, hide: TIBERE_A_PARLER, to: "IF_lothaire" },
    ] },
});

Object.assign(P, {
  IF_tibere: { act: "I", title: "Tibère à la porte", with: "tibere",
    text: [
      "Tibère s'est arrêté devant la porte du hangar, une main sur le loquet. Il te tourne le dos. Dehors, le jour baisse sur le canal, et les sifflets du Guet se sont tus. « Je vais aller voir de quel côté cherche Brunon, dit-il sans se retourner. Je le connais. Il me dira où sont ses hommes, et on passera de l'autre côté. »",
      { if: { has: "tibere:espion" }, text: "Il se retourne enfin. Il a les yeux rouges, et la moustache mouillée de vin ou d'autre chose. « {{oreille#if_tibere_choix|Fais-moi confiance, pour une fois, c'est tout ce que je te demande|Je vais dire à Brunel par où tu passes. Cinquante ducats, c'est la robe de noces de Rosalie et mes dettes du Battant, et je n'aurai plus jamais l'occasion}}. »", else: "Il se retourne enfin. Il a les yeux rouges. « {{oreille#if_tibere_choix2|Fais-moi confiance, je reviens avant vêpres|Je ne sais pas encore si je reviens avant vêpres, ni avec qui}}. »" },
      { if: { has: "tibere:aveu" }, text: "Il t'a déjà tout avoué, les cinq ducats de la semaine, les rapports à l'homme aux gants gris. Tu sais ce qu'il porte. Il le sait aussi." },
      { if: { has: "ig:bague_tibere" }, text: "Sa main gauche est posée à plat sur la poche boutonnée de son gilet, celle de la bague des Halles. Il ne la retire pas." },
      { if: { has: "ic:tibere_pardon" }, text: "« Plus de jeudi, tu m'avais dit, ajoute-t-il. J'ai tenu. Seulement, cinquante ducats, ce n'est pas un jeudi. »" },
    ],
    choices: [
      { label: "Lui parler de Rosalie", hide: { not: { any: [{ voile: "if_tibere_tente" }, { voile: "if_tibere_choix" }, { voile: "if_tibere_choix2" }, { has: "tibere:aveu" }, { has: "ib:tibere_su" }] } },
        test: { dom: "social", diff: -10, label: "Retenir Tibère par ce qu'il aime", help: [{ if: { has: "tibere:aveu" }, v: 15 }, { if: { conf: "tibere", min: 50 }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { if: { has: "ib:rosalie" }, v: 10 }, { if: { has: "ig:bague_tibere" }, v: 10 }, { if: { has: "ic:tibere_pardon" }, v: 5 }, { if: { has: "ib:tibere_su" }, v: 5 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IF_tibere_rachete" }, lose: { to: "IF_tibere_trahit" } },
      { label: "Le laisser aller voir", hide: { conf: "tibere", min: 50 }, to: "IF_tibere_trahit" },
      { label: "Le laisser aller voir", hide: { not: { conf: "tibere", min: 50 } }, to: "IF_tibere_rachete" },
      { label: "Lui barrer la porte, et l'empêcher de sortir", to: "IF_tibere_retenu" },
    ] },

  IF_tibere_rachete: { act: "I", title: "Le mauvais pont",
    fx: { flag: "tibere:double", conf: { tibere: 15 }, ep: ["perso", 600] },
    text: [
      { outcome: "win", text: "Tu lui parles de Rosalie, de la façon dont il a dit son nom, la première fois, au Battant, en regardant ailleurs. Tibère t'écoute la main sur le loquet. Puis il ôte la main. « Elle ne me parle plus depuis deux ans, dit-il. Si je fais ça, elle aura raison pour toujours. »" },
      "Il sort quand même, mais il revient avant que la cloche ait sonné la demie, essoufflé, la bouche amère. Il s'assied sur une barque retournée et il te raconte. Il est allé trouver Brunel, à la Saumure, où l'homme aux gants gris attendait les nouvelles. Il lui a vendu une route : le pont des Tanneurs, à la nuit, par les jardins des teinturiers. Brunel l'a écouté en le regardant fixement. Puis il a payé. Dix ducats d'avance.",
      "Tibère pose les dix ducats sur la barque, entre vous deux. « Il m'a cru, dit-il. Je crois. Avec lui, on ne sait jamais ce qu'il entend. » Il regarde les pièces. « Garde-les. Moi, je les boirais. »",
    ],
    choices: [{ label: "Prendre les dix ducats de la Banque", fx: { gold: 200 }, back: "IF_abri" }, { label: "Les lui laisser", fx: { conf: { tibere: 5 } }, back: "IF_abri" }] },

  IF_tibere_trahit: { act: "I", title: "La porte du hangar",
    fx: { flag: "i4:tibere_trahi", leave: "tibere", conf: { tibere: -10 } },
    text: [
      { outcome: "lose", text: "Tu lui parles de Rosalie. C'est la mauvaise chose à dire, ou le mauvais moment : il serre la mâchoire, il dit « Ne parle pas de ma fille », et il sort." },
      "La porte du hangar se referme sur Tibère, et sa silhouette passe devant les fentes des planches, le long du canal, vers la Saumure. Tu l'entends marcher longtemps. Il marche vite, comme un homme qui a peur de changer d'avis.",
      "Il ne revient pas avant la demie. Ni avant vêpres. Couzi, qui n'a pas levé les yeux de ses lanternes, dit seulement, au bout d'un moment : « Celui-là, il marchait comme un homme qui va se vendre. J'en ai vu. »",
    ],
    choices: [{ back: "IF_abri" }] },

  IF_tibere_retenu: { act: "I", title: "Assis par terre",
    fx: { flag: "tibere:aveu", conf: { tibere: -5 }, ep: ["perso", 400] },
    text: [
      "Tu te mets entre Tibère et la porte, et tu poses la main à plat sur le loquet, sur la sienne. Il est plus lourd que toi, et il a été sergent vingt-six ans. Il pourrait te pousser. Il te regarde, puis il regarde ta main, et il s'assied par terre d'un coup, le dos contre la porte, comme un sac qu'on pose.",
      "Alors il te dit tout. Les cinq ducats la semaine depuis le matin de la mort d'Odeline. L'homme aux gants gris qui l'attend au Battant, le jeudi, pour savoir où tu vas, à qui tu parles. Les cinquante ducats d'aujourd'hui. Rosalie, et la robe de noces qu'il voulait lui payer pour qu'elle lui reparle. Il le dit à plat, sans pleurer, comme un rapport.",
      "Quand il a fini, il reste assis contre la porte. « Je ne bouge plus d'ici avant la nuit, dit-il. Comme ça, je ne pourrai rien vendre. » Il ferme les yeux.",
    ],
    choices: [{ back: "IF_abri" }] },

  IF_temoin: { act: "I", title: "Le Lumignon", takes: 1,
    fx: { meet: "if_sauzet" },
    text: [
      "Le Lumignon est la taverne du bout du quai des Lanternes, celle où l'on boit debout, et tu y entres par la cour, le capuchon rabattu, à l'heure où l'on allume. Ton nom est cloué sur la porte. Dedans, une douzaine de buveurs, la patronne, et à une table près du feu, Maître Lagrue, l'écrivain public, qui rédige une lettre pour une servante. Au comptoir, un homme maigre aux mains noires de suif paie une tournée générale, sa perche d'allumeur posée contre le mur.",
      "Théodore Sauzet allume les lanternes du quai depuis vingt ans, et il les éteint à l'aube. Tout le monde ici sait qu'il n'a jamais payé un pot de sa vie. Ce soir, il en paie six. Tu t'approches par le côté. Il te reconnaît, et son pot s'arrête à mi-chemin. « J'ai {{oreille#if_sauzet_paye|vu ce que j'ai vu, et je l'ai dit au capitaine, c'est tout|rien vu du tout, j'étais saoul sous le pont des Noyés depuis neuf heures, et le monsieur aux gants m'a payé dix ducats et ma dette du Lumignon pour le dire}}, dit-il très vite. Je ne veux pas d'histoires. »",
      { if: { has: "pq:lettre_changeurs" }, text: "Maître Lagrue lève les yeux de sa lettre, te voit, et pose un doigt sur ses lèvres, comme le jour du rideau tiré. Puis il retourne à sa servante." },
      { with: "lison", text: "Lison s'est mise à la porte, le dos au chambranle, et regarde la rue. « Fais vite, dit-elle sans tourner la tête. Le Guet passe tous les quarts d'heure. »" },
    ],
    choices: [
      { label: "Lui faire écrire, devant Lagrue, ce qu'il a vraiment vu", hide: { not: { voile: "if_sauzet_paye" } },
        test: { dom: "social", diff: -10, label: "Retourner un témoin acheté", help: [{ if: { voile: "if_mandat_gratte" }, v: 20 }, { if: { has: "metier:parole" }, v: 10 }, { with: "tibere", v: 10 }, { if: { has: "i4:saumure_entendue" }, v: 10 }] },
        win: { fx: { ep: ["perso", 900] }, to: "IF_temoin_aveu" }, lose: { to: "IF_geole" } },
      { label: "Lui offrir trois ducats de plus que la Banque pour qu'il se dédise", if: { gold: { min: 60 } }, why: "Il te faudrait trois ducats.", fx: { gold: -60, flag: "i4:retractation_achetee" }, to: "IF_temoin_aveu" },
      { label: "Le prendre au col et l'emmener dans la cour", test: { dom: "combat", diff: -10, label: "Faire peur à un ivrogne", help: [{ if: { arch: "guerrier" }, v: 10 }, { with: "tibere", v: 10 }, { if: { has: "i4:saumure_entendue" }, v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IF_temoin_aveu" }, lose: { to: "IF_geole" } },
      { label: "Ressortir avant qu'il ne crie", back: "IF_abri" },
    ] },

  IF_temoin_aveu: { act: "I", title: "La croix de Sauzet",
    fx: { flag: "i4:retractation", item: "if_retractation", ep: ["perso", 600] },
    text: [
      "Maître Lagrue a vu, il a compris, et il a déjà une feuille blanche devant lui quand tu amènes Sauzet à sa table. Il trempe sa plume. « Deux liards la page, dit-il. Pour toi, rien. Elle m'a payé mes lunettes, l'an dernier. »",
      "Sauzet dicte, la voix pâteuse, en regardant la table. Il a dormi sous le pont des Noyés depuis la neuvième heure, la nuit de la fête ; il n'a rien vu ; le lendemain, un monsieur aux gants gris lui a donné dix ducats pour aller dire au capitaine ce qu'il lui ferait répéter. Lagrue écrit vite, proprement, sans rien arranger. Sauzet fait une croix au bas de la page. Lagrue signe en témoin, et fait signer la patronne, qui signe d'un rond.",
      "Lagrue sable l'encre, plie la feuille en quatre, et te la donne. « Ça ne lèvera pas ton mandat, dit-il. Pas ce soir. Un juge honnête le lirait. » Il range sa plume. « Il faudrait d'abord en trouver un. »",
      { if: { has: "i4:retractation_achetee" }, text: "Tes trois ducats sont déjà dans la poche de Sauzet. Lagrue l'a vu les empocher. « Un témoin qu'on rachète se revend, dit-il en rangeant sa plume. Gardez bien la feuille. »" },
      "Sauzet est reparti au comptoir. Il ne paie plus de tournée.",
    ],
    choices: [{ label: "Ressortir par la cour", back: "IF_abri" }] },

  IF_voisine: { act: "I", title: "La cour de la pension", takes: 1,
    text: [
      "Tu passes par les cours, de mur en mur, jusqu'à la pension de Clarmonde, et tu grattes à la porte de la cuisine. Elle ouvre, te voit, et te tire dedans par le poignet si vite que tu te cognes au chambranle. Elle ferme à double tour. La cuisine sent le chou, comme toujours. Il y a ton nom sur le placard du pont, à dix pas de sa fenêtre.",
      { if: { any: [{ has: "i4:gage_clarmonde" }, { has: "i4:clarmonde_sait" }] }, text: "« Assieds-toi, dit-elle. Mange. » Elle te sert de la soupe, et elle coupe le pain contre sa poitrine, comme on fait chez elle. « Je ne leur ai dit que dix heures. Je le jure. Minuit, c'est eux. Le clerc a écrit pendant que le monsieur aux gants lui parlait à l'oreille. »", else: "« Tu ne devrais pas être ici, dit-elle. Ils viennent tous les jours me poser des questions. » Mais elle te sert de la soupe quand même, et elle coupe le pain. « Je leur ai dit dix heures, dit-elle sans te regarder. J'ai dit que je t'avais entendu crier. C'est vrai, ça. Minuit, ce n'est pas moi. »" },
      "Tu manges. Tu {{miroir#if_miroir_mensonge|as menti au Guet pour ne pas perdre ton temps avec eux, ce matin-là|as menti au Guet parce que la dernière chose que tu as dite à Odeline vivante était une malédiction, et que tu ne voulais pas l'entendre écrite de la main d'un commis}}. La soupe est trop chaude. Tu la manges quand même.",
    ],
    choices: [
      { label: "Lui demander de dire dix heures au juge, et le sel, et le rire d'Odeline", hide: { not: { any: [{ has: "i4:gage_clarmonde" }, { has: "i4:clarmonde_sait" }] } }, fx: { flag: "i4:clarmonde_temoin", ep: ["perso", 500], food: 1 }, back: "IF_abri" },
      { label: "La remercier pour la soupe, et repartir par les cours", fx: { food: 1 }, back: "IF_abri" },
    ] },
});

var ATTENTE_BARQUE = { any: [
  { all: [{ present: "fauvette" }, { not: { seen: "IF_fauvette_adieu" } }] },
  { all: [{ has: "fauvette:amie" }, { not: { seen: "IF_fauvette_adieu" } }] },
  { all: [{ present: "gildas" }, { not: { seen: "IF_gildas_choix" } }] },
  { all: [{ has: "i4:tibere_trahi" }, { not: { seen: "IF_tibere_retour" } }] },
  { all: [{ not: { item: "oeil_pie" } }, { not: { seen: "IF_oeil_gamin" } }, { not: { all: [{ has: "fauvette:amie" }, { not: { seen: "IF_fauvette_adieu" } }] } }] },
] };
Object.assign(P, {
  IF_lothaire: { act: "I", title: "Le pont de la Reine", takes: "evening",
    text: [
      "Le pont de la Reine est le plus vieux de Salvèze : une seule arche de pierre blanche, haute et étroite, jetée sur le canal du même nom, avec à la clé une couronne posée sur une vague, si usée qu'on la prend pour un nid. Sous l'arche, au ras de l'eau, une grille de fer noir ferme une bouche ronde dans le mur du quai. L'égout de la reine. La cloche des vêpres finit de sonner au Beffroi. La marée est basse, et la grille sort de l'eau jusqu'au troisième barreau.",
      { if: { has: "tibere:double" }, text: "Le pont est vide. Au loin, vers le pont des Tanneurs, des lanternes s'agitent dans les jardins des teinturiers, et tu reconnais, même de si loin, une silhouette qui porte des gants gris et attend, immobile, sur la route que Tibère a vendue." },
      { if: { not: { has: "tibere:double" } }, text: "Sur les marches du pont, assis comme un promeneur qui prend le frais, Lothaire Brunel t'attend. Deux hommes en gants gris se tiennent derrière lui, une lanterne chacun. Il se lève sans hâte et ôte son chapeau. « Bonsoir, dit-il. Vous pensez : comment a-t-il su. » Il sourit. « Je sais toujours. C'est mon métier, comme c'était celui de votre maîtresse. »" },
      { if: { all: [{ has: "pf:vendu" }, { not: { has: "tibere:double" } }] }, text: "« Vous m'avez déjà vendu ce cornet une fois, sur le pont des Noyés, ajoute-t-il. Je me souviens du prix. Ce soir, il a monté. »" },
      { if: { all: [{ has: "ib:cour_aux_draps" }, { not: { has: "tibere:double" } }] }, text: "« Vous m'aviez fait dire que vous passeriez à la Cour aux Draps. Je vous ai attendu{e} toute une matinée. Je n'attends pas souvent. »" },
      { if: { all: [{ has: "ib:lothaire_refus" }, { not: { has: "tibere:double" } }] }, text: "« Vous m'avez fait répondre que le feuillet n'était pas à vendre. Tout se vend, à Salvèze. Il fallait seulement attendre ce soir. »" },
      { if: { all: [{ has: "ib:lothaire_hesite" }, { not: { has: "tibere:double" } }] }, text: "« Vous m'aviez fait dire que vous réfléchissiez. Vous avez eu le temps. Moi aussi. »" },
      { if: { all: [{ has: "ic:lothaire_trompe" }, { not: { has: "tibere:double" } }] }, text: "« Mes hommes ont levé une dalle au cimetière des Noyés, à cause de vous, dit-il encore. Sous la troisième croix. Ils n'y ont trouvé qu'un mort. Ce soir, je n'écoute que ce que vous portez. »" },
      { if: { all: [{ has: "i4:brouillon_lu" }, { not: { has: "tibere:double" } }] }, text: "Tu lui parles du brouillon recollé, dans le tas des lettres d'Odeline : deux mille ducats, le premier jeudi après la fête. Lothaire incline la tête. « Elle ne venait jamais au premier rendez-vous, dit-il. Elle voulait voir si j'attendrais. Ce jeudi-là, j'ai attendu seul. »" },
      { if: { all: [{ has: "i4:tibere_trahi" }, { not: { has: "tibere:double" } }] }, text: "« Votre sergent vous salue, ajoute-t-il. Il a eu du mal à le dire. Je l'ai entendu quand même. »" },
      { if: { not: { has: "tibere:double" } }, text: "« Donnez-moi le feuillet que vous portez sous la chemise, et la loupe dans votre poche gauche. {{oreille#if_lothaire_offre|La Banque fera lever le mandat dès demain, vous avez ma parole|Je vous laisserai filer ce soir, et la Banque vous fera pendre plus tard, quand je n'aurai plus besoin de vous pour trouver le reste}}. » Il incline la tête. « Vous dites : jamais. Vous pensez : combien de temps tiendrait Lison contre deux lames. Pas longtemps. »" },
      { with: "lison", text: "Lison est déjà dans sa barque, sous l'arche, debout, la gaffe à la main. Elle ne regarde pas Lothaire. Elle regarde ses deux hommes, et l'eau entre eux et elle." },
    ],
    choices: [
      { label: "Descendre sous l'arche pendant qu'ils guettent le mauvais pont", big: true, hide: { not: { has: "tibere:double" } }, fx: { ep: ["perso", 800] }, to: "IF_rendezvous" },
      { label: "Lui montrer la croix de Sauzet sur sa rétractation", hide: { any: [{ has: "tibere:double" }, { not: { has: "i4:retractation" } }] },
        test: { dom: "social", diff: -10, label: "Faire reculer Lothaire Brunel", help: [{ if: { voile: "if_lothaire_offre" }, v: 10 }, { if: { has: "i4:clarmonde_temoin" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1000], flag: "i4:lothaire_recule" }, to: "IF_rendezvous" }, lose: { to: "IF_geole" } },
      { label: "Penser très fort au feuillet, caché ailleurs que sur toi", hide: { has: "tibere:double" },
        test: { dom: "magie", diff: -20, label: "Mentir à qui entend les pensées", help: [{ if: { voile: "if_lothaire_offre" }, v: 10 }, { if: { has: "metier:parole" }, v: 10 }, { if: { arch: "barde" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "IF_lothaire_ruse" }, lose: { to: "IF_geole" } },
      { label: "« Laisse-moi faire », dit Lison : sa barque part comme un trait vers les marches", who: "lison", hide: { has: "tibere:double" }, test: { dom: "nature", diff: 0, label: "La barque contre les marches" },
        win: { fx: { ep: ["perso", 800], conf: { lison: 5 } }, to: "IF_rendezvous" }, lose: { to: "IF_geole" } },
      { label: "« Laisse-moi faire », dit Fauvette : elle est déjà sur le parapet, au-dessus des lanternes", who: "fauvette", hide: { has: "tibere:double" }, test: { dom: "discretion", diff: 0, label: "Fauvette éteint les lanternes" },
        win: { fx: { ep: ["perso", 800], conf: { fauvette: 5 } }, to: "IF_rendezvous" }, lose: { to: "IF_geole" } },
      { label: "Dégainer et forcer le passage", hide: { has: "tibere:double" }, fight: { title: "Les gants gris", enemies: [{ id: "spadassin", n: 2 }],
        win: { fx: { ep: ["seance", 1200], flag: "i4:spadassins_battus" }, to: "IF_rendezvous" }, lose: { fx: { pv: -2 }, to: "IF_geole" },
        flee: { label: "Sauter du quai dans le canal, et nager jusqu'à l'arche", dom: "nature", diff: -10, to: "IF_rendezvous" } } },
    ] },

  IF_lothaire_ruse: { act: "I", title: "Ce que pense un menteur",
    text: [
      "Tu dis : « Jamais. » Et tu penses, aussi fort et aussi nettement que tu le peux, à la plaque du foyer dans l'atelier d'Odeline, à la niche derrière, au feuillet roulé dedans. Tu y penses comme on regarde une chose qu'on ne veut pas regarder. Tu penses : il ne faut pas qu'il pense au foyer.",
      "Lothaire reste immobile. Puis il tourne la tête, très peu, vers l'un de ses hommes. « Le quai des Lanternes, dit-il. La boutique. L'étage, le foyer. Cours. » L'homme part en courant, sa lanterne dansant le long du canal. Lothaire te regarde, et pour la première fois depuis que tu le connais, il a l'air de douter de ce qu'il entend.",
      "C'est le moment où la barque de Lison heurte les marches. L'homme qui reste perd l'équilibre et tombe à l'eau avec sa lanterne. Lothaire recule d'un pas pour ne pas mouiller ses bottes. Le temps qu'il revienne, tu es sous l'arche.",
      "Sa voix te suit sous la voûte, sans colère. « Bien joué. La prochaine fois, je saurai que vous savez mentir en dedans. Ça ne vous rendra pas service. »",
    ],
    choices: [{ label: "Sous l'arche", to: "IF_rendezvous" }] },

  IF_geole: { act: "I", title: "Le cachot du quai",
    fx: { flag: "i4:pris" },
    text: [
      "Le cachot du poste du quai est une cave sous la guérite, trois pas sur quatre, avec sur le sol un pouce d'eau du canal, qui te prend aux chevilles et s'y installe, et une grille à hauteur de visage sur l'escalier. On t'y a poussé{e} sans brutalité excessive, et on t'a pris ta dague, ta bourse et ta ceinture. Le feuillet du Beffroi est toujours sous ta chemise ; personne n'a pensé à te fouiller là. La loupe aussi, au fond de la poche cousue.",
      { if: { has: "i4:rendu" }, text: "Tu es venu{e} toi-même. Brunon t'a écouté{e} jusqu'au bout, devant la boutique, devant tout le quai, en hochant la tête. Puis il a dit : « Je te crois peut-être. Le mandat, lui, ne me demande pas de te croire. » Et il t'a pris le bras." },
      { with: "any", text: "Les autres se sont dispersés quand on t'a pris, comme on disperse des pigeons. Tu ignores où ils sont. Tu sais qu'ils savent où tu es." },
      "Brunon s'assied sur la marche, de l'autre côté de la grille, et pèle une pomme. « Le capitaine viendra te chercher à minuit, dit-il. Avec un monsieur de la Banque. {{oreille#if_brunon_doute|Je fais mon travail, et le mandat est signé en règle|Je ne crois pas une ligne de ce mandat, et le capitaine non plus, mais le capitaine doit trois mille ducats à la Banque}}. » La spirale de pomme tombe dans l'eau du cachot.",
    ],
    choices: [
      { label: "Parler à Brunon à travers la grille", test: { dom: "social", diff: -10, label: "Ouvrir la grille avec des mots", help: [{ if: { voile: "if_brunon_doute" }, v: 15 }, { if: { has: "i4:brunon" }, v: 10 }, { if: { has: "i4:retractation" }, v: 15 }, { if: { has: "i4:clarmonde_temoin" }, v: 10 }] },
        win: { fx: { ep: ["perso", 800], regard: { if_brunon: "allie" } }, to: "IF_geole_evasion" }, lose: { to: "IF_geole_evasion" } },
      { label: "Attendre que Brunon s'endorme, et crocheter la serrure avec une agrafe de ta chemise", test: { dom: "discretion", diff: -20, label: "Crocheter une grille de cachot", help: [{ if: { arch: "voleur" }, v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IF_geole_evasion" }, lose: { to: "IF_geole_evasion" } },
      { label: "Attendre la nuit", to: "IF_geole_evasion" },
    ] },

  IF_geole_evasion: { act: "I", title: "La grille ouverte", takes: "evening",
    fx: { flag: "i4:evade" },
    text: [
      { outcome: "win", text: "La grille s'ouvre. Brunon est debout dans l'escalier, la clé à la main, le visage fermé. « Je suis allé pisser, dit-il. J'ai oublié de refermer. Tes affaires sont sur le banc. » Il te tourne le dos. « Je vais avoir deux ans de moins avant ma pension. File. »", else: "À minuit moins le quart, un bruit de rame contre la pierre, sous le soupirail du cachot, et la voix de Lison, très basse : « Recule. » Un crochet de gaffe passe entre les barreaux, s'accroche, tire. Le mortier est vieux, et le canal l'a mangé depuis cent ans. La grille du soupirail vient tout entière, avec un bruit de dent arrachée. Brunon dort sur sa marche, ou il fait très bien semblant." },
      "Tu récupères ce que tu peux de tes affaires, et tu sors dans la nuit, mouillé{e} jusqu'aux genoux. Le quai est désert. Sur le pont des Noyés, ton nom est toujours cloué au poteau de la lanterne.",
    ],
    choices: [
      { label: "Gagner le hangar du vieux Couzi, et attendre", hide: { seen: "IF_abri" }, to: "IF_abri" },
      { label: "Gagner le pont de la Reine, où Lison attend", big: true, hide: { not: { seen: "IF_abri" } }, to: "IF_rendezvous" },
    ] },

  IF_rendezvous: { act: "I", title: "Sous l'arche", takes: 1,
    fx: { join: "lison" },
    text: [
      { first: true, text: "Sous l'arche du pont de la Reine, il fait noir comme dans un four, et l'eau {{echo#if_echo_arche|clapote contre la pierre avec un bruit de bouche|rend un clapotis de rames étouffées, une nuit d'il y a trois cents ans, et une voix d'homme : « Levez la grille. Elle passe la première »}}. La barque de Lison est là, collée au mur, sans lanterne. Lison tient l'amarre d'une main et un crochet de fer de l'autre, passé dans un barreau de la grille." },
      { again: true, text: "Sous l'arche, le noir, le clapotis, la grille. Lison attend." },
      { with: "lison", text: "« Tu en as mis, du temps, dit-elle. La marée n'attend pas, elle. » Elle tire sur le crochet. La grille, que tu croyais scellée, pivote vers le haut sur deux gonds cachés dans la voûte, avec un long soupir de fer. Derrière, un tunnel rond, plus haut qu'un homme, où l'eau entre en silence." },
      { if: { has: "i4:evade" }, with: "lison", once: true, text: "Lison renifle, et fronce le nez. « Tu sens le cachot, dit-elle. Assieds-toi au fond, et ne touche à rien. »" },
      { if: { has: "i4:spadassins_battus" }, once: true, text: "Sur les marches du pont, l'un des deux hommes en gants gris est assis, la tête entre les mains, et l'autre lui tient l'épaule. Ils te regardent descendre sous l'arche. Ils ne bougent pas." },
      { if: { has: "i4:lothaire_recule" }, text: "Sur les marches du pont, au-dessus de toi, Lothaire n'a pas bougé. Il a remis son chapeau. Il regarde la barque, la grille, toi. Il te laisse partir comme on laisse filer un poisson qu'on reprendra plus loin." },
    ],
    choices: [
      { label: "Une silhouette lourde descend l'escalier d'eau, en boitant : Tibère", hide: { any: [{ not: { has: "i4:tibere_trahi" } }, { seen: "IF_tibere_retour" }] }, to: "IF_tibere_retour" },
      { label: "Fauvette est assise sur le parapet, les jambes dans le vide", hide: { any: [{ seen: "IF_fauvette_adieu" }, { not: { any: [{ present: "fauvette" }, { has: "fauvette:amie" }] } }] }, to: "IF_fauvette_adieu" },
      { label: "Un sifflement descend du parapet : un gamin des Gouttières se laisse glisser le long d'une corde", hide: { any: [{ item: "oeil_pie" }, { seen: "IF_oeil_gamin" }, { all: [{ has: "fauvette:amie" }, { not: { seen: "IF_fauvette_adieu" } }] }] }, to: "IF_oeil_gamin" },
      { label: "Frère Gildas s'est arrêté sur la dernière marche, et il ne monte pas", hide: { any: [{ not: { present: "gildas" } }, { seen: "IF_gildas_choix" }] }, to: "IF_gildas_choix" },
      { label: "Descendre dans la barque, et passer sous la grille", big: true, hide: ATTENTE_BARQUE, to: "IF_egouts" },
    ] },

  IF_tibere_retour: { act: "I", title: "Tibère revient",
    fx: { join: "tibere" },
    text: [
      "Tibère descend l'escalier d'eau en se tenant au mur, une main sur les côtes. Il a la lèvre fendue et un œil qui gonfle. Il s'arrête sur la dernière marche, à un pas de la barque, et il ne demande pas à monter.",
      { with: "tibere", text: "« Je lui ai dit le pont de la Reine, dit-il. À Brunel. Il m'a payé. Après, je suis allé boire, et je me suis battu avec deux de ses gants gris au Battant, je ne sais même plus pourquoi. » Il crache du sang dans le canal. « {{oreille#if_tibere_retour|Je suis venu te prévenir, voilà, c'est tout|J'ai pris l'argent, et je suis venu quand même, parce que je ne sais plus de quel côté je suis, et que je voudrais que tu décides pour moi}}. »" },
      { with: ["tibere", "lison"], text: "Lison le regarde en silence, la gaffe en travers des genoux. Elle laisse la décision à toi. Elle te le fait savoir en tournant la tête vers l'eau." },
    ],
    choices: [
      { label: "Lui tendre la main pour qu'il monte dans la barque", fx: { flag: "i4:tibere_repris", conf: { tibere: 10 } }, back: "IF_rendezvous" },
      { label: "Le laisser sur la marche", fx: { flag: "i4:tibere_laisse", leave: "tibere" }, back: "IF_rendezvous" },
    ] },

  IF_fauvette_adieu: { act: "I", title: "Fauvette sur le parapet",
    fx: { join: "fauvette" },
    text: [
      "Fauvette est assise sur le parapet du pont, juste au-dessus de l'arche, les jambes dans le vide, et elle se laisse glisser jusqu'à la corniche, puis jusqu'à la marche, comme on descend un escalier. Elle regarde la grille ouverte, le tunnel noir, l'eau qui y entre. Elle fronce le nez.",
      { with: "fauvette", text: "« {{oreille#if_fauvette_reste|Les égouts, très peu pour moi, ça pue, et je ne sais pas nager|Si je pars, la Reine des Gouttières donne mon toit à une autre, et c'est le seul endroit que j'aie jamais eu à moi}}, dit-elle. Et puis il faut bien que quelqu'un reste ici pour savoir ce que fait la Banque pendant que tu barbotes. Je garderai un œil sur ta boutique. Et sur la grosse de la pension, qui te donne de la soupe. »" },
      { with: "fauvette", text: "Elle te tend la main, comme on la tend en affaires, et quand tu la prends, elle te tire vers elle et te serre une fois, très fort, très vite, avant de te lâcher. « Ne te noie pas, dit-elle. Tu me dois encore une explication sur tout ça. »" },
      { with: "fauvette", if: { not: { item: "oeil_pie" } }, text: "Avant de remonter, elle fouille dans l'ourlet de sa manche et te met dans la paume un anneau de corne et une lentille de quartz fumé, encore tièdes. « Tu l'avais oublié, dit-elle. Ou c'est moi qui ai oublié de te le rendre. Ça revient au même. Là où tu vas, il te faudra savoir qui te roule. »" },
    ],
    choices: [
      { label: "La regarder remonter sur le pont", hide: { not: { item: "oeil_pie" } }, fx: { flag: "fauvette:reste", leave: "fauvette", ep: ["perso", 500] }, back: "IF_rendezvous" },
      { label: "Serrer l'œil de pie dans ta main, et la regarder remonter sur le pont", hide: { item: "oeil_pie" }, fx: { item: "oeil_pie", quest: "IG_oeil", flag: "fauvette:reste", leave: "fauvette", ep: ["perso", 500] }, back: "IF_rendezvous" },
    ] },

  IF_oeil_gamin: { act: "I", title: "Le gamin des toits",
    text: [
      "Le sifflement vient du parapet, deux notes, puis une corde à nœuds tombe le long de l'arche. Un gamin des Gouttières s'y laisse glisser jusqu'à la marche, pieds nus, un paquet de chiffon serré contre la poitrine. Il a dix ans, une oreille en chou-fleur, et il se tient de biais devant la grille levée, en garçon qui évite de tourner le dos aux bouches noires.",
      "« C'est de la part de la Reine, dit-il. Margaux Pelle. » Il défait le chiffon. Dedans, un anneau de corne et une lentille de quartz fumé, au bout d'un cordon de cuir tranché. « Boscot l'a pris au cou de la rousse, contre ce qu'elle devait. Elle a gardé ses mains. La Reine dit que c'était à la Carrus, et que ce qui était à la Carrus revient à la Carrus. La Banque en offrait cinquante ducats. La Reine aime faire attendre la Banque. »",
      { if: { has: "ig:reine_vue" }, text: "Tu revois Margaux sous sa fenêtre propre, ses bésicles d'acier sur le nez. Elle sait donc où tu pars, et par où." },
      { if: { all: [{ has: "ig:reine_connue" }, { not: { has: "ig:reine_vue" } }] }, text: "La Reine des Gouttières. Tu ne l'as jamais vue. Hermance, au Pot Fêlé, t'a dit que tout ce qui se vole à Salvèze passe par sa balance." },
      { if: { not: { any: [{ has: "ig:reine_vue" }, { has: "ig:reine_connue" }] } }, text: "La Reine des Gouttières. Tu ne la connais que de nom, comme tout le quai, et voilà qu'elle connaît le tien." },
      { if: { has: "ig:rosse" }, text: "« Et Boscot te fait dire qu'il espère que le lavoir ne t'a pas enrhumé{e}. »" },
      { if: { has: "ig:reine_livre" }, text: "« Pour le livre de Ravoux, ajoute le gamin, la Reine dit que vous êtes quittes. »", else: "« La Reine dit aussi que tu lui dois cinq ducats, et qu'elle les prendra à ton retour. Elle a écrit ton nom dans son registre. Elle dit que tu reviendras : tout le monde revient. »" },
      { with: "lison", text: "Lison regarde le gamin remonter sa corde à la force des bras. « Les Gouttières savent par où on sort de la ville, dit-elle. Je m'en souviendrai. »" },
    ],
    choices: [
      { label: "Prendre l'œil de pie, et la dette avec", hide: { has: "ig:reine_livre" }, fx: { item: "oeil_pie", quest: "IG_oeil", flag: "i4:dette_reine", ep: ["perso", 300] }, back: "IF_rendezvous" },
      { label: "Prendre l'œil de pie", hide: { not: { has: "ig:reine_livre" } }, fx: { item: "oeil_pie", quest: "IG_oeil", ep: ["perso", 300] }, back: "IF_rendezvous" },
    ] },

  IF_gildas_choix: { act: "I", title: "Frère Gildas sur la marche", with: "gildas",
    text: [
      "Frère Gildas s'est arrêté sur la dernière marche de l'escalier d'eau, son bâton à la main. Il regarde la barque, la grille levée, le tunnel. « Je vous ai suivi{e} jusqu'ici, dit-il. Je peux vous suivre encore. Ou je peux rester. Quelqu'un doit dire une messe pour elle, au cimetière des Noyés, au bout du mois, et vous ne serez pas là pour la faire dire. »",
      "Il attend ta réponse sans bouger, le capuchon rabattu jusqu'aux sourcils. Tu {{miroir#if_miroir_gildas|tiens à lui parce qu'il lit les vieilles écritures mieux que personne|tiens à lui parce que, depuis la mort d'Odeline, c'est la seule présence qui te calme, et que tu ne t'es jamais demandé pourquoi elle te calme}}.",
      { if: { has: "gildas:demasque" }, text: "Tu sais ce que tu sais de lui. Il sait peut-être que tu le sais. Vous le gardez tous les deux pour vous, sous cette arche, avec l'eau qui monte." },
      { with: "lison", text: "Lison regarde le moine, longtemps, du fond de la barque. Elle se tait. Elle a une façon de se taire qui pèse plus lourd que la gaffe." },
    ],
    choices: [
      { label: "Lui demander de monter dans la barque", fx: { conf: { gildas: 5 }, flag: "i4:gildas_suit" }, back: "IF_rendezvous" },
      { label: "Le laisser rester, et dire la messe pour elle", fx: { flag: "i4:gildas_reste", leave: "gildas" }, back: "IF_rendezvous" },
    ] },
});

// ==================================================================== the queen's sewers, and out
Object.assign(P, {
  IF_egouts: { act: "I", title: "L'égout de la reine", takes: "night",
    fx: { ep: ["perso", 800] },
    text: [
      "La barque passe sous la grille, et la grille redescend derrière vous avec le même soupir de fer. Pendant cent pas, le tunnel est ce que tu attendais : de la brique noire, suintante, une voûte basse où Lison doit se courber sur sa gaffe, une odeur de vase et de pourri, des rats qui filent sur une corniche. L'égout de la ville. Puis la brique s'arrête, d'un coup, comme une page qu'on tourne.",
      "Après, c'est de la pierre. Une pierre blanche, taillée, appareillée si juste qu'on ne glisserait pas une lame entre deux blocs, et la voûte monte, monte, jusqu'à ce que la lanterne de Lison ne l'atteigne plus. Le long des murs, des roseaux sculptés, des hérons, des vagues, qui courent sur des centaines de pas, et tous les vingt pas, dans un médaillon, une femme couronnée, un doigt posé sur les lèvres. L'eau est noire et claire à la fois. On voit le fond, pavé, à deux toises. Personne n'a construit ça pour les ordures de la ville.",
      "La voûte {{echo#if_echo_fuite|renvoie le bruit de la gaffe, en double, en triple, longtemps après le geste|renvoie des voix d'il y a trois siècles, des voix d'hommes qui chuchotent en ramant, et une respiration de femme, rauque, qui ne parle pas : « Baissez la tête, Majesté. Encore sept arches, et c'est la mer. Ils ne savent pas ce passage »}}. À la clé d'une arche, une inscription court dans la pierre, en lettres anciennes, à demi effacées : *{{loupe#if_clef_voute|Ysaure, reine du delta, l'an premier de son règne, a fait creuser cette eau|Ici nous sommes passés avec elle, la nuit des Comptoirs. Ce que nous avons emporté dort sous les eaux de Sorne. Taisez-le}}.*",
      { with: "gildas", if: { has: "i4:gildas_suit" }, text: "Frère Gildas, assis à la proue, lève la tête vers l'inscription. Il la lit en remuant les lèvres, sans un son, et il se signe." },
      { with: "lison", if: { has: "ib:loupe_confiee" }, text: "Lison tend la main vers ta poche, comme sur les marches du canal. Tu lui passes la loupe. Elle la lève vers la clé de l'arche, longtemps, puis elle te la rend." },
      { with: "lison", text: "Lison rame debout, sans bruit, et elle te regarde lever la tête vers la voûte. « {{oreille#if_lison_egout|Les égouts de la reine mènent au fleuve, voilà tout, c'est un raccourci de batelière|Les égouts de la reine mènent aux Joncs, et ma grand-mère m'a dit de t'y amener, de gré ou de force}}, dit-elle. » Puis, plus bas : « Ne parle pas trop fort ici. L'eau répète. »" },
    ],
    choices: [{ label: "Laisser la barque glisser sous les arches", to: "IF_egouts_salle" }] },

  IF_egouts_salle: { act: "I", title: "La salle des colonnes",
    text: [
      "Le tunnel débouche dans une salle, et Lison arrête la barque d'un coup de gaffe. C'est une citerne, ou une église noyée : une forêt de colonnes de pierre blanche qui montent de l'eau jusqu'à une voûte en croisée d'ogives, à perte de lanterne. Au centre, sur un socle qui émerge de l'eau, une statue de femme, debout, plus grande que nature, une couronne {{pie#if_couronne|de pierre sculptée, rongée par l'humidité|de pierre sculptée, dont les fleurons sont des coquilles d'huîtres serties d'une nacre véritable, montées sur des tiges de bronze}} sur la tête, un doigt sur les lèvres.",
      "La salle {{echo#if_echo_coffres|est silencieuse, d'un silence épais où l'on entend tomber une goutte, très loin|garde des pas d'hommes, beaucoup, et le frottement de coffres lourds qu'on traîne sur la pierre, et une voix d'homme âgé qui compte : « Six. Six coffres, et le septième pour Sorne. Que personne ne les compte après moi »}}. Sur le socle, une ligne gravée, presque effacée par l'eau : *{{loupe#if_denier|Aux bons passeurs, la reine reconnaissante|Aux bons passeurs, la reine reconnaissante : une pièce sous le pied gauche, pour qui sait lire}}.*",
      { with: "lison", text: "Lison lève la lanterne vers la voûte. « Au-dessus de nous, dit-elle, c'est l'île des Changeurs. Les fondations du vieux palais. » Elle montre, entre deux colonnes, un escalier de pierre qui monte hors de l'eau et finit contre un mur de briques plus récentes, maçonnées à la hâte. « Et ça, c'est la cave de la Banque. Ils ont muré. Ils ne savent pas tout ce qu'ils ont muré. »" },
    ],
    choices: [
      { label: "Soulever le pied gauche de la statue", once: true, hide: { not: { voile: "if_denier" } }, fx: { item: "if_tr_denier", clock: { tresors: 1 }, flag: "tresor:if_denier", ep: ["perso", 500] }, to: "IF_egouts_denier" },
      { label: "Approcher la barque de l'escalier muré", once: true, fx: { ep: ["perso", 300] }, to: "IF_egouts_mur" },
      { label: "Repartir sous les arches, vers la mer", big: true, to: "IF_egouts_rats" },
    ] },

  IF_egouts_denier: { act: "I", title: "Le pied de la reine",
    text: [
      "Le pied gauche de la statue est un bloc à part, qui pivote sous ta paume quand tu pousses dans le bon sens, avec un raclement de pierre. Dessous, dans un creux sec, une seule pièce, grande comme une paume d'enfant, épaisse, en or rouge. D'un côté, une couronne sur une vague. De l'autre, un visage de femme de profil, la bouche fermée, et autour, en lettres serrées : *Ysaure. Ce que je dis vaut ce que je pèse.*",
      { with: "lison", text: "Lison regarde la pièce dans ta main sans la toucher. « Un denier de la Muette, dit-elle. Chez nous, on en a deux. Ils sont dans la dentelle de ma grand-mère, cousus, depuis cent ans. Personne n'a jamais su qu'il en restait un ici. » Elle te regarde. « Sauf ta vieille, peut-être. »" },
    ],
    choices: [{ back: "IF_egouts_salle" }] },

  IF_egouts_mur: { act: "I", title: "L'escalier muré",
    text: [
      "L'escalier monte hors de l'eau, vingt marches de pierre blanche usées au milieu, et s'arrête contre un mur de briques rouges, maçonnées à la chaux, sans soin. La chaux a coulé entre les briques et séché en larmes. Tu poses l'oreille contre le mur. De l'autre côté, très loin, un bruit régulier : des pas, le tintement d'un trousseau de clés, une porte de fer qu'on referme. Une ronde.",
      "Au bas du mur, une brique est descellée, et derrière, il y a un trou noir assez grand pour passer le bras. Tu le passes. Ta main touche du vide, de l'air froid, et une marche, de l'autre côté.",
      { with: "lison", text: "« Pas ce soir, dit Lison. Ce soir, on part. Mais retiens le chemin. »" },
    ],
    choices: [{ back: "IF_egouts_salle" }] },

  IF_egouts_rats: { act: "I", title: "Les rats de la reine",
    text: [
      "Après la salle des colonnes, le tunnel redescend, plus bas, plus étroit, et la pierre blanche se couvre d'une mousse grise. L'eau sent de nouveau la vase. Sur les corniches, de chaque côté de la barque, des yeux rouges s'allument dans la lanterne, par dizaines, par centaines ; les corniches en paraissent semées de braises. Les rats de l'égout ne fuient pas. Ils regardent la barque comme on regarde un plat qu'on apporte.",
      "Le premier saute. Il atterrit sur la proue, gros comme un chat, et il est aussitôt suivi de trois autres.",
      { with: "lison", text: "Lison jure dans le parler des marais et empoigne sa gaffe à deux mains. « Ils sont trop nombreux, dit-elle. On ne s'arrête pas. Tu tiens la proue, moi je pousse. »" },
    ],
    choices: [
      { label: "Tenir la proue, et frapper", fight: { title: "Les rats de la reine", enemies: [{ id: "if_rat_reine", n: 4 }],
        win: { fx: { ep: ["perso", 700] }, to: "IF_egouts_grille" }, lose: { fx: { pv: -2 }, to: "IF_egouts_grille" },
        flee: { label: "Te coucher au fond de la barque et laisser Lison pousser", dom: "nature", diff: 0, to: "IF_egouts_grille" } } },
      { label: "Ouvrir grand le volet de ta lanterne sourde, et la brandir", if: { item: "lanterne" }, why: "Il te faudrait une lanterne à toi.", fx: { ep: ["perso", 500] }, to: "IF_egouts_grille" },
      { label: "« Laisse-moi faire », dit Lison : elle pousse la barque comme jamais", who: "lison", test: { dom: "nature", diff: -10, label: "Passer avant que les rats ne montent" },
        win: { fx: { ep: ["perso", 600], conf: { lison: 5 } }, to: "IF_egouts_grille" }, lose: { fx: { pv: -2 }, to: "IF_egouts_grille" } },
    ] },

  IF_egouts_grille: { act: "I", title: "La bouche de la Salve",
    text: [
      "Le tunnel s'ouvre d'un coup sur une grande arche ronde, au ras de l'eau, et dehors, c'est la nuit, le ciel, l'odeur du fleuve et de la mer mêlés. L'égout de la reine débouche dans la Salve sous les remparts, du côté de l'aval, là où la ville finit et où les roseaux commencent. Mais au milieu du fleuve, à cent pas de l'arche, une barque de la douane est à l'ancre, une lanterne à la proue, et deux hommes en casaque verte regardent l'eau.",
      { if: { has: "i4:blocus" }, text: "Plus loin, une deuxième lanterne, puis une troisième, plantées sur l'eau en ligne jusqu'aux roseaux : la chaîne de la douane, qui ne s'abaisse plus pour les barques des marais." },
      { if: { seen: "IF_saisie_fin" }, text: "Contre la rive, dans l'ombre des roseaux, des barques noires attendent, sans lanterne, une demi-douzaine. Une voix de femme appelle tout bas : « Hé. La petite de chez Carrus. Ou le petit. Par ici. » Mélisende." },
      { if: { has: "i4:passeur_tenu" }, text: "Contre la pile du rempart, une longue barque à deux perches, et un vieil homme qui mâche une racine. Roudil. Il lève la main, une fois." },
      { if: { all: [{ has: "i4:passeur_paye" }, { not: { has: "i4:passeur_tenu" } }] }, text: "Contre la pile du rempart, la longue barque de Roudil. Le vieux passeur te voit, lève sa lanterne, et la balance deux fois vers la barque de la douane, lentement." },
    ],
    choices: [
      { label: "Suivre les barques de Mélisende dans les roseaux", hide: { not: { seen: "IF_saisie_fin" } }, fx: { ep: ["perso", 800], fac: { hautes: 5 } }, to: "IF_fin" },
      { label: "Passer dans la barque de Roudil, sous la pile du rempart", hide: { not: { has: "i4:passeur_tenu" } }, fx: { ep: ["perso", 800] }, to: "IF_fin" },
      { label: "« Laisse-moi faire », dit Lison : elle chante une chanson de pêcheuse, à pleine voix", who: "lison", test: { dom: "social", diff: 0, label: "Une chanson à double fond" },
        win: { fx: { ep: ["perso", 900], conf: { lison: 5 } }, to: "IF_fin" }, lose: { to: "IF_egouts_douane" } },
      { label: "Attendre que la lanterne de la douane se détourne, et filer au ras de l'eau", test: { dom: "discretion", diff: -10, label: "Passer la douane dans le noir", help: [{ with: "lison", v: 10 }, { if: { night: true }, v: 5 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IF_fin" }, lose: { to: "IF_egouts_douane" } },
      { label: "Foncer droit sur la barque de la douane", to: "IF_egouts_douane" },
    ] },

  IF_egouts_douane: { act: "I", title: "La barque verte",
    text: [
      "La lanterne de la douane pivote vers vous, et quelqu'un crie : « Qui va là ? Au nom de la République ! » Une gaffe ferrée accroche votre plat-bord. Deux douaniers sautent dans la barque, qui tangue jusqu'à embarquer de l'eau.",
      { with: "lison", text: "{{oreille#if_lison_chanson|Lison crie qu'elle est une pêcheuse des Joncs qui rentre chez elle, et qu'on la laisse passer, par la Vierge des Noyés|Lison crie le nom de sa grand-mère, une seule fois, comme un mot de passe, en espérant que l'un d'eux soit des marais}}. Aucun des deux n'est des marais." },
    ],
    choices: [
      { label: "Te battre dans la barque qui tangue", fight: { title: "La barque de la douane", enemies: [{ id: "if_douanier", n: 2 }], spare: true,
        win: { fx: { ep: ["perso", 900], flag: "i4:douane_battue" }, to: "IF_fin" }, lose: { fx: { pv: -3, flag: "i4:blesse" }, to: "IF_fin" }, calm: { to: "IF_fin" },
        flee: { label: "Faire chavirer la barque, et nager vers les roseaux", dom: "nature", diff: -10, to: "IF_fin" } } },
    ] },

  IF_fin: { act: "I", title: "Les roseaux",
    fx: { ep: ["histoire", 5000] },
    text: [
      { outcome: "lose", text: "Tu reprends tes esprits au fond d'une barque, le visage contre des planches mouillées, du sang dans la bouche. Quelqu'un t'a tiré{e} de l'eau par le col. Les douaniers sont loin derrière, à crier dans le noir après leur barque retournée." },
      "Les roseaux se referment derrière vous comme un rideau. En une perche, la Salve a disparu, et la ville avec. Il ne reste que le bruit des tiges contre la coque, l'odeur de la vase et de la menthe d'eau, et au-dessus, un ciel énorme, plein d'étoiles, qu'on ne voit jamais de Salvèze à cause des fumées. Loin derrière, une cloche sonne minuit, très faible. Le Beffroi.",
      "Tu touches ta chemise. Le feuillet est là, plié en quatre, tiède de ta peau. La loupe est dans ta poche, le cornet contre ta hanche. Ta maîtresse est en terre au cimetière des Noyés, ta boutique est fermée, ton nom est cloué au poteau de chaque pont, et tu pars pour un village que tu ne connais pas, à deux jours de roseaux, où quelqu'un sait déjà ton nom.",
      { if: { all: [{ has: "pf:carnet" }, { item: "pf_carnet" }] }, text: "Le carnet d'Odeline a pris l'eau sur un coin. Tu le glisses sous ta chemise, contre le feuillet, pour qu'il sèche à la chaleur de ta peau." },
      { with: "lison", if: { has: "i4:blesse" }, text: "Lison a serré un chiffon sur ton côté, là où la gaffe de la douane a ouvert la peau, et elle garde la main dessus en poussant la perche de l'autre." },
      { with: "lison", text: "Lison s'est assise à l'arrière, la gaffe en travers des genoux, et elle laisse la barque dériver un moment. « Dors, dit-elle. Je connais le chemin. Il n'y a qu'un chemin, d'ici, et c'est le mien. »" },
      { with: "lison", if: { has: "ib:lison_ensemble" }, text: "Un peu plus tard, dans le noir, elle ajoute : « Ma grand-mère. On le lui dira à deux, tu te souviens. » Elle n'attend pas de réponse." },
      { with: "gildas", text: "Frère Gildas est assis à la proue, son capuchon sur les yeux. Il dit les complies à mi-voix, en entier, sans rien sauter. À la fin, il ajoute un nom, très bas." },
      { if: { has: "i4:gildas_reste" }, text: "Tu penses à Frère Gildas, resté sur la marche sous le pont de la Reine, son bâton à la main, qui dira la messe d'Odeline au bout du mois. Tu ignores pourquoi cette pensée te soulage et te serre en même temps." },
      { with: "tibere", text: "Tibère dort déjà, roulé dans son vieux manteau du Guet, les genoux au menton. Il ronfle. De temps en temps, il dit un nom de fille en dormant." },
      { with: "tibere", if: { has: "i4:tibere_repris" }, text: "Avant de s'endormir, il a vidé ses poches au fond de la barque : les dix ducats de Brunel, un dé d'os, un bout de ficelle. Il a poussé les ducats vers toi du bout de sa botte, et il a gardé le dé." },
      { if: { has: "i4:tibere_laisse" }, text: "Tibère est resté sur la marche, à Salvèze, avec ses dix ducats et sa lèvre fendue. Tu le reverras peut-être. De quel côté, tu l'ignores." },
      { if: { has: "fauvette:reste" }, text: "Quelque part sur les toits de Salvèze, Fauvette regarde le fleuve, et elle t'en voudra sûrement de ne pas lui avoir appris à nager." },
    ],
    choices: [{ label: "Laisser la barque s'enfoncer dans les roseaux, vers les Joncs-Bas", big: true, exit: true, to: "II_debut" }] },
});

// ==================================================================== FIN DES PASSAGES

var X = {
  people: {
    iq_fortunat: { name: "Fortunat", qui: "Le commis de Maître Tiercelin, prêteur sur gages.", aspect: { allure: "vingt ans, maigre, poli", habits: "manteau de serge noire", signe: "écritoire sur les genoux, encre aux poignets" }, f: false, face: { age: "jeune" }, desc: "Le commis de Maître Tiercelin, prêteur sur gages. Vingt ans, des taches d'encre jusqu'aux poignets, une écriture ronde." },
    iq_tiercelin: { name: "Maître Josserand Tiercelin", qui: "Prêteur sur gages du quai des Lanternes.", aspect: { habits: "habit sombre de prêteur" }, f: false, face: { age: "mur" }, desc: "Prêteur sur gages du quai des Lanternes. Il prête aux joueurs à la semaine, et rachète les dettes des morts." },
    if_melisende: { name: "Mélisende Jouve", qui: "Anguillère des Joncs-Bas, au port aux Sauniers.", aspect: { allure: "quarante ans, accroupie près de sa barque", habits: "sabots", signe: "mains rouges d'eau froide" }, f: true, face: { age: "adulte" }, desc: "Anguillère des Joncs-Bas, les mains rouges d'eau froide. Elle vend des anguilles au port aux Sauniers, et porte autre chose que des anguilles." },
    if_vignal: { name: "Gonzague Vignal", qui: "Receveur de la douane du port aux Sauniers.", aspect: { allure: "rond, soigné", signe: "plume d'oie derrière l'oreille" }, f: false, face: { age: "mur" }, desc: "Receveur de la douane du port aux Sauniers. Rond, soigné, une plume d'oie derrière l'oreille." },
    if_toinon: { name: "Toinon", qui: "Crocheteur de rivière, au bout du quai.", aspect: { allure: "soixante ans, doigts en crochet", visage: "une seule dent devant", signe: "grappin et couverture de trouvailles" }, f: false, face: { age: "ancien" }, desc: "Crocheteur de rivière : il traîne un grappin au fond de la Salve la nuit, et vend le jour ce qu'il a remonté. Une seule dent devant." },
    if_roudil: { name: "Roudil", qui: "Le vieux passeur du port aux Sauniers.", aspect: { allure: "vieil homme assis dans sa longue barque", signe: "racine de réglisse qu'il mâche" }, f: false, face: { age: "ancien" }, desc: "Le vieux passeur du port aux Sauniers. Il passe les gens et les choses d'un côté de la chaîne à l'autre, en mâchant une racine de réglisse." },
    if_sabine: { name: "Lucile Gimel", qui: "Porteuse de sel au port, veuve d'un batelier.", aspect: { allure: "porteuse fatiguée, regard méfiant", signe: "doigts pleins de sel" }, f: true, face: { age: "adulte" }, desc: "Porteuse de sel au port, veuve d'un batelier noyé à Grisemotte." },
    if_sauzet: { name: "Théodore Sauzet", qui: "L'allumeur du quai des Lanternes.", aspect: { allure: "homme maigre", signe: "mains noires de suif, perche d'allumeur" }, f: false, face: { age: "mur" }, desc: "L'allumeur du quai des Lanternes depuis vingt ans. Des mains noires de suif, une perche, et une soif qu'il ne payait jamais lui-même." },
    if_brunon: { name: "Brunon Amblard", qui: "Sergent du Guet au poste du quai des Lanternes.", aspect: { allure: "gros homme calme", visage: "sourcils blancs", signe: "pomme pelée en une seule spirale" }, f: false, face: { age: "mur" }, desc: "Sergent du Guet au poste du quai des Lanternes. Sourcils blancs, deux ans avant sa pension, et la pomme pelée en une seule spirale." },
  },
  items: {
    iq_boite_gages: { name: "La boîte des gages", kind: "objet", keep: true, desc: "Un coffret de chêne ferré, long comme le bras. Dedans, chacun dans son papier, les objets que le quai laissait à Odeline contre quelques ducats." },
    iq_chale: { name: "Le châle d'Odeline", kind: "objet", keep: true, desc: "Laine grise, troué au coude gauche. Il sent le savon à la lavande et la fumée du fourneau." },
    iq_lunettes: { name: "Les lunettes d'Odeline", kind: "outil", bonus: { savoir: 5 }, keep: true, desc: "Rondes, cerclées de corne, un verre fêlé. Elle lisait les serrures avec." },
    iq_tr_theiere: { name: "La théière d'argent", kind: "tresor", price: 90, desc: "Argent massif, noircie à la suie et au vinaigre pour passer pour de l'étain. Un poinçon à la tour sous le couvercle." },
    iq_tr_bague: { name: "La bague au héron", kind: "tresor", price: 120, desc: "Or rouge, épaisse, usée. Sur le chaton, un héron debout sur une patte, le bec fermé ; dans l'anneau, une ligne de petits signes." },
    if_retractation: { name: "La rétractation de Sauzet", kind: "document", keep: true, desc: "Une feuille pliée en quatre, de la belle écriture de Maître Lagrue, avec une croix et deux signatures au bas.",
      text: "*Je soussigné Théodore Sauzet, allumeur du quai des Lanternes, déclare devant témoins n'avoir rien vu la nuit des Lanternes, ayant dormi sous le pont des Noyés depuis la neuvième heure. Le lendemain, un homme aux gants gris m'a donné dix ducats et ma dette du Lumignon pour répéter au capitaine du Guet ce qu'il me ferait dire. Je me dédis de tout.*\n\n+ (la croix de Théodore Sauzet)\n\n*Témoins : Lagrue, écrivain public. La patronne du Lumignon, qui signe d'un rond.*" },
    if_tr_denier: { name: "Le denier de la Muette", kind: "tresor", price: 150, desc: "Une pièce d'or rouge, grande comme une paume d'enfant. D'un côté, une couronne sur une vague ; de l'autre, un profil de femme à la bouche fermée : « Ysaure. Ce que je dis vaut ce que je pèse. »" },
    if_tr_gobelet: { name: "Le gobelet de la Salve", kind: "tresor", price: 110, desc: "Un gobelet d'argent à pied, ciselé de roseaux et de hérons. Au fond, une couronne posée sur une vague. Le sel de la Salve l'a gardé trois cents ans." },
    if_tr_perles: { name: "Le collier de perles de vase", kind: "tresor", price: 70, desc: "Une trentaine de perles grises et irrégulières, pêchées une à une dans les moules des vasières, enfilées sur un crin de cheval." },
    if_faux_collier: { name: "Le « collier de la Muette »", kind: "objet", price: 2, desc: "Laiton doré au bain, perles de verre soufflé. Il laisse une trace verte sur la peau." },
    iq_tr_grenats: { name: "Les pendants de grenat", kind: "tresor", price: 100, desc: "Deux pendants d'oreilles en grenat montés sur or, vieux et lourds. Ils étaient à la mère d'Odeline." },
  },
  enemies: {
    if_rat_reine: { name: "Rat de la reine", look: "rat", pv: 7, att: 22, def: 9, dmg: 2, flank: true, desc: "Gros comme un chat, gris de mousse, et sans aucune peur de la lumière." },
    if_douanier: { name: "Douanier du port", look: "humain", pv: 14, att: 30, def: 13, dmg: 4, desc: "Casaque verte, gourdin ferré, et l'habitude qu'on paie plutôt que de se battre." },
  },
  clues: {
    if_t_voute: { rev: "T", text: "Gravé à la clé d'une arche, dans l'égout de la reine : « Ici nous sommes passés avec elle, la nuit des Comptoirs. Ce que nous avons emporté dort sous les eaux de Sorne. Taisez-le. »" },
    if_b_titres: { rev: "B", text: "Depuis un an, la Banque Marrel rachète à n'importe quel prix chaque titre de terre des Hautes-Eaux qu'on lui présente, et fait recopier chaque acte par ses clercs." },
    iq_o_rampe: { rev: "O", text: "Sur la main courante de l'escalier de la cave, à hauteur de la quatrième marche, quatre gouttes de sang sec, étalées d'un revers de manche. À hauteur d'épaule d'un adulte debout sur cette marche." },
    iq_b_billets: { rev: "B", text: "Les billets de dette d'Odeline étaient à la Banque Marrel. Tiercelin les a rachetés à la Banque le lendemain de sa mort, pour un liard le ducat." },
  },
  epilogue: [
    { if: { has: "pf:faustin_garde" }, text: "**Faustin Lerouge.** À l'aube, les huissiers du Conseil trouvèrent vingt passeurs assis autour de sa barque de pierre, l'aviron en travers des genoux. Ils repartirent sans avoir ouvert la tombe, et la médaille resta sur sa poitrine." },
    { if: { has: "pf:faustin_prise" }, text: "**Faustin Lerouge.** Les huissiers trouvèrent dans sa tombe une boîte de plomb vide et écrivirent : volée. Mamert le fossoyeur ne dit jamais à personne qui l'avait vidée." },
    { if: { has: "pf:faustin_perdue" }, text: "**Faustin Lerouge.** Sa médaille fut fondue avec les chandeliers des églises, pour les dettes de la République. Les passeurs des Noyés crachèrent longtemps en passant devant le Conseil." },
    { if: { has: "i4:pris" }, text: "**Brunon Amblard.** Il prit sa pension deux ans plus tard qu'il ne l'avait prévu. Il pela ses pommes sur un banc du quai, en une seule spirale, et ne parla jamais de la nuit où la grille de son cachot s'ouvrit." },
    { if: { has: "ib:chanoine_aide" }, text: "**Le chanoine Sidoine Mainfroy.** Il garda sa chapelle et ses cloches. La Mouche et la Clarine furent refondues l'été suivant, et il fit dire une messe basse pour Odeline Carrus à chaque nuit des Lanternes." },
    { if: { has: "ic:porte_eau" }, text: "**Noé Quint.** Il ne rogna plus un grain d'or. Le mardi soir, longtemps, il alla s'asseoir sur le quai de la fonderie, face à la porte d'eau, et il regarda passer ce qui passait." },
    { if: { has: "ic:corisande_alienor" }, text: "**Aliénor Marrel.** Elle dessina des chevaux toute sa vie. Elle apprit à trente ans ce que sa grand-mère avait fait coudre pour elle dans l'ourlet d'une robe bleue." },
    { if: { all: [{ has: "ic:corisande_crainte" }, { not: { has: "ic:corisande_alienor" } }] }, text: "**Aliénor Marrel.** Elle dessina des chevaux toute sa vie, et ne siégea jamais à la Banque. Sa grand-mère l'avait voulu ainsi." },
    { if: { has: "ig:reine_fachee" }, text: "**Margaux Pelle.** Elle ne pardonna jamais tout à fait les casseurs laissés dans la vase du pont des Cordiers. Elle fit graver ton nom sous un poids de sa balance, du côté qu'on ne montre pas." },
    { if: { all: [{ has: "ig:reine_livre" }, { not: { has: "ig:reine_fachee" } }] }, text: "**Margaux Pelle.** Elle garda le livre de Ravoux sous sa balance, et s'en servit vingt ans pour faire payer les receleurs des Halles." },
    { if: { all: [{ has: "i4:dette_reine" }, { not: { has: "ig:reine_fachee" } }] }, text: "**Margaux Pelle.** Elle inscrivit à son registre, à ton nom, cinq ducats pour un œil de pie. Elle ne raya jamais la ligne, et ne réclama jamais la somme." },
  ],
  quests: [
    { id: "IF_barque", act: "I", kind: "annexe", title: "La barque saisie", start: "IF_anguillere", echo: ["i4_barque=rendue", "i4_barque=perdue"] },
    { id: "IQ_gages", act: "I", kind: "annexe", title: "Les gages d'Odeline", start: "IQ_gages", echo: ["i4_gages=rendus", "i4_gages=vendus"] },
  ],
  veils: {
    if_toinon_dit: { fx: { ep: ["perso", 150] } },
    if_fortunat_nuit: { fx: { ep: ["perso", 200] } },
    if_echo_saumure: { fx: { flag: "i4:saumure_entendue", ep: ["perso", 300] } },
    if_echo_fuite: { fx: { ep: ["perso", 400] } },
    if_echo_coffres: { fx: { ep: ["perso", 400] } },
    if_clef_voute: { fx: { clue: "if_t_voute", ep: ["perso", 500] } },
    if_lison_egout: { fx: { flag: "lison:mission", ep: ["perso", 300] } },
    if_lothaire_offre: { fx: { ep: ["perso", 300] } },
    if_brunon_doute: { fx: { ep: ["perso", 300] } },
    if_tibere_retour: { fx: { conf: { tibere: 5 }, ep: ["perso", 300] } },
    if_fauvette_reste: { fx: { conf: { fauvette: 5 }, ep: ["perso", 200] } },
    if_fauvette_course: { fx: { conf: { fauvette: 5 }, ep: ["perso", 200] } },
    if_tibere_tente: { fx: { flag: "tibere:espion", ep: ["perso", 300] } },
    if_tibere_choix2: { fx: { ep: ["perso", 200] } },
    if_sauzet_paye: { fx: { ep: ["perso", 400] } },
    if_titres: { fx: { clue: "if_b_titres", ep: ["perso", 300] } },
    if_vignal_ordre: { fx: { flag: "i4:blocus", ep: ["perso", 300] } },
    if_melisende_taiseuse: { fx: { flag: "i4:melisende_taiseuse", ep: ["perso", 300] } },
    if_vieux_joncs: { fx: { ep: ["perso", 200] } },
    if_lison_port: { fx: { ep: ["perso", 200], conf: { lison: 2 } } },
    if_crieur: { fx: { ep: ["perso", 200] } },
    iq_echo_dispute: { fx: { ep: ["perso", 300] } },
    iq_echo_onze: { fx: { ep: ["perso", 300] } },
    iq_echo_minuit: { fx: { flag: "gildas:demasque", ep: ["seance", 1500] } },
    iq_echo_chute: { fx: { flag: "i4:chute_entendue", ep: ["perso", 800] } },
    iq_echo_cave: { fx: { ep: ["perso", 400] } },
    iq_lettre_lothaire: { fx: { flag: "i4:brouillon_lu", ep: ["perso", 400] } },
    iq_ordonnance: { fx: { flag: "i4:odeline_malade", ep: ["perso", 300] } },
    iq_billets: { fx: { clue: "iq_b_billets", ep: ["perso", 300] } },
    iq_brunon_ordre: { fx: { flag: "i4:scelle_banque", ep: ["perso", 200] } },
  },
};

module.exports = { passages: P, extras: X };
