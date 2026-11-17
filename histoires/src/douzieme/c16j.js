// Le Douzième Coup · chapter 16, the one who passes (act V, the walk inside the eleventh stroke).
// Three districts, reached from the hubs of c16.js. Lower town (`K16_bas`) : the green awning (Perrine gone :
// `K16j_volet` ; Perrine standing with wax : `K16j_mur`, `j:perrine_dit_vrai` | `j:perrine_promis`,
// `monde:perrine_sait_bord`), the Patiente (`monde:tiennette_sait`), the rue des Aiguilliers (Tiphaine and the line
// the copy lacks : `j:sait_sortie`), the bridge (`j:promesse_moineau`), the Tannerie, the basin. The square (`K16_place`) :
// the trestles (`j:florizel_adieu`, `j:douzieme_jouee`), the rue aux Oies (`monde:mot_josse`, `j:josse_girard_dit|tu`),
// Perrine taken at the edge of the square (`j:perrine_eveil_vrai|doux`, `j:perrine_laissee`), the red ball
// (`j:balle_rendue`), the fortune-teller (`j:sibylle_dit`), Saint-Gnomon. The hill (`K16_colline`) : Lunel
// (`j:lunel_adieu`), the hall (`j:fauteuil_releve`), the cabinet (`j:vu_timbale`), the
// workshop (`j:vu_etabli`), the lodging of the sub-master (`j:sait_accident`).
var P = {};
var GRAIN = { stock: "sable", min: 1 };
var SORTIS = { has: "monde:noyers_sortis" };
var ATTELE = { has: "monde:girard_attele" };
var JURE = { has: "monde:girard_jure" };
var PIECE = { has: "monde:florizel_piece" };
var P_SORTIE = { has: "monde:perrine_sortie" };
var P_DEBOUT = { all: [{ has: "monde:perrine_debout" }, { not: { has: "monde:perrine_sortie" } }] };
var P_PRISE = { not: { any: [{ has: "monde:perrine_sortie" }, { has: "monde:perrine_debout" }] } };
var T_PARTIE = { has: "monde:tiphaine_partie" };
var B_SORTIE = { has: "monde:brindille_sortie" };
var AVERTIE = { has: "monde:perrine_avertie" };
var JOSSE_BORNE = { all: [{ not: SORTIS }, ATTELE] };
var JOSSE_COURT = { all: [{ not: SORTIS }, { not: ATTELE }] };

Object.assign(P, {
  // ===== the lower town
  K16j_quai: { act: "V", title: "L'auvent vert", place: "basse", ambiance: "eau",
    text: [
      "Le quai des Almanachs est le bout pauvre du quai marchand : six étals de planches, adossés au mur d'un grenier à sel, où l'on vend ce qui s'imprime et ce qui se chante. Le sien est le troisième. Tu le reconnais à l'auvent, d'un vert de pomme qu'elle avait choisi, disait-elle, parce qu'on le voit du pont.",
      { if: P_SORTIE, text: "Il est fermé. Le volet de bois est rabattu, la barre passée, l'auvent roulé sur sa perche et noué de deux tours. Elle a rangé avant de partir. Elle range toujours : une colporteuse qui laisse traîner sa marchandise, t'a-t-elle dit le troisième jour, c'est une colporteuse qui compte revenir, et l'on ne doit jamais avoir l'air d'y compter." },
      { if: P_DEBOUT, text: "L'étal est vide, l'auvent roulé. Elle t'a prévenu{e} ce matin : *le dos au mur de la Patiente. J'ai choisi le mur : je veux voir venir.* Le pignon de l'auberge est à trente pas, jaune, avec sa cloche peinte. Il y a quelqu'un contre le crépi, debout, un drap rouge autour de la tête." },
      { if: P_PRISE, text: "L'étal est vide, l'auvent roulé. Elle est montée, ce matin, avec sa hotte : *je n'ai pas fait neuf jours de route pour entendre la cloche du fond d'un pré.* Elle est là-haut, au bord de la place, du côté des rues qui descendent. Ici, il reste d'elle un clou, où pendait la hotte, et sur la planche le rond plus clair d'une pile d'almanachs." },
      "Sur l'étal voisin, un marchand de complaintes a la bouche ouverte et le doigt sur une image : un pendu, en rouge et bleu. Il chantait. On voit jusqu'à la luette.",
    ],
    choices: [
      { label: "Lire ce qu'il y a sur le volet", hide: { not: P_SORTIE }, to: "K16j_volet" },
      { label: "Aller au pignon jaune", hide: { not: P_DEBOUT }, to: "K16j_mur" },
      { back: "K16_bas" },
    ] },

  K16j_volet: { act: "V", title: "Pour cause de peuplier", place: "basse", ambiance: "eau",
    text: [
      "Elle a écrit sur le volet, à la craie, de sa grosse écriture de prix : *FERMÉ POUR CAUSE DE PEUPLIER.* Et dessous, plus petit, pour le voisin, qui est curieux : *Occupe-toi de tes pendus.*",
      "Tu ris. Cela sonne tout seul sur le quai, et le son te revient par le mur du grenier à sel, sans rien d'autre autour. Tu t'arrêtes.",
      "Elle est sortie. Elle a passé l'arbre grêle avant onze heures, au pas de hotte, avec de la marge. À l'instant où tu lis sa craie, elle est quelque part sur le halage, du bon côté ; elle marche, ou elle s'est retournée, parce que onze coups sont venus sur la plaine et que le douzième a manqué. Elle a une heure d'avance sur toi, et bientôt soixante ans.",
      "Elle les aura vécus. Elle aura vendu des almanachs de l'an 542, de l'an 550, de l'an 570, où le Grand Midi est marqué d'une croix noire. Elle aura eu trente ans, cinquante. Elle aura peut-être mis ton nom à un enfant, ou à un chien, ou à personne : elle garde ses sentiments sous clef, avec la recette. Elle aura dit à quelqu'un, un soir, qu'elle avait eu un associé qui lisait l'heure dans les murs.",
      { if: { has: "j:perrine_adieu_vrai" }, text: "Tu lui as dit où tu serais. Elle t'a répondu par l'article dernier. *On ne quitte pas un associé : on prend un autre chemin pour la même foire.* Tu regardes la craie. Tu te demandes à quelle foire elle pensait, et si elle le savait elle-même." },
      { if: { has: "j:perrine_adieu_tu" }, text: "Tu lui as dit *à ce soir.* Elle a pris la fausse pièce sans la mordre. Tu aurais voulu qu'elle la morde. On regrette longtemps les gens qui vous ont laissé mentir par bonté." },
      "Sous le clou de la hotte, à hauteur de main, il y a une encoche fraîche dans le bois, faite au couteau : un trait, et un second en travers. C'est ainsi qu'elle marque une dette qu'on lui doit. Elle ne dit pas laquelle.",
    ],
    choices: [{ label: "Passer le pouce sur l'encoche", fx: { flag: "j:vu_volet", ep: ["perso", 500] }, back: "K16j_quai" }] },

  K16j_mur: { act: "V", title: "Le dos au mur", place: "basse", ambiance: "eau",
    text: [
      "Elle est debout contre le crépi jaune, les épaules au mur, la hotte à ses pieds. Elle a noué sur ses oreilles un bandeau de drap rouge, taillé dans son étal ; dessous, la cire. Elle a dix-sept ans, les bras croisés, le menton haut. Elle regardait le quai.",
      "Elle a vu. Cela se lit sur sa figure : les autres ont la bouche ronde et la joie prête, elle a les lèvres serrées et les yeux grands. À six pas d'elle, le crieur de moules a la main en cornet et un mot coupé en deux. Elle le regardait finir son mot, et le mot est resté à la moitié.",
      "La note a passé à côté d'elle, grâce à la cire. Elle est seulement arrêtée, comme le sonneur sur sa marche, comme tous ceux de la cire, dans une note qui l'ignore. Quand l'heure repartira, elle repartira au milieu de quarante mille statues, toute seule sur un quai, avec un mur derrière elle. Elle l'a voulu. Elle a dit : après ceux qui pleurent.",
      "Le crépi est nu. Tu sais, par quelqu'un en sabots, ce qu'il y aura dessus dans une heure et dans soixante ans : des traits, par cinq.",
    ],
    choices: [
      { label: "Poser un grain sur ses bras croisés", hide: { seen: "K16j_perrine_debout" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_perrine_debout" },
      { back: "K16j_quai" },
    ] },

  K16j_perrine_debout: { act: "V", title: "Sur les bouches", place: "basse", ambiance: "eau",
    text: [
      "Ses yeux viennent à toi, tranquilles : elle voyait venir, c'est pour cela qu'elle avait pris le mur.",
      "Elle décroise les bras. Elle porte la main à son bandeau, et tu lui saisis le poignet. Tu fais non. Tu montres l'air, la Tour, ton oreille. La note est partout ; qui l'entend lui appartient. Elle comprend. Elle laisse la cire.",
      "Alors elle regarde ta bouche. Elle a vendu dix ans sur des foires, sous des tambours, à des gens qui marchandaient sans qu'on s'entende : elle lit les prix sur les lèvres depuis qu'elle a des dents. Tu parles lentement. Tu dis que c'est fait. Que tu es dessous, là-haut, sous la cloche ; que quelqu'un t'a donné de quoi marcher entre deux coups ; que cela ne durera pas.",
      "Elle parle à son tour. Elle parle trop fort, comme les sourds, et sa voix fait sur le quai un bruit de vaisselle. « TU AS L'AIR D'UN NAVET. » Elle te touche la joue, du dos des doigts. « TU ES FROID{E}. C'EST ÇA, ÊTRE DESSOUS ? »",
      "Tu dis que c'est mieux qu'il y a une heure. Elle hoche la tête. Elle regarde le quai, par-dessus ton épaule : le crieur, la marchande de harengs, le chien qui boit. « ILS SONT COMBIEN ? — Quarante mille. — ET DES COMME MOI ? » Tu dis : quelques centaines, en bas, dans les maisons. Elle fait le compte, vite. « ALORS J'AI DE L'OUVRAGE. »",
    ],
    choices: [
      { label: "Lui dire par où l'on sort, et où est le bord", hide: { seen: "K16j_perrine_bord" }, fx: { flag: "monde:perrine_sait_bord" }, to: "K16j_perrine_bord" },
      { label: "« Après, j'ignore de quel côté je serai. »", fx: { flag: "j:perrine_dit_vrai", ep: ["perso", 600] }, to: "K16j_perrine_debout_fin" },
      { label: "« Après, je te retrouve. Garde-moi un almanach. »", fx: { flag: "j:perrine_promis", ep: ["perso", 600] }, to: "K16j_perrine_debout_fin" },
    ] },

  K16j_perrine_bord: { act: "V", title: "Un trait par tête", place: "basse", ambiance: "eau",
    text: [
      "Tu lui dis le chemin, sur tes doigts et sur ta bouche. Le bief des Teinturiers : c'est le plus court, l'eau y est basse, on passe à pied sous la voûte. Puis le halage. Le septième peuplier, le grêle. Passé celui-là, les blés bougent.",
      "« LES TEINTURIERS. » Elle répète, pour être sûre de tes lèvres. « ET CEUX QUI NE PEUVENT PAS MARCHER ? » Tu dis qu'on les porte. Qu'un dormant ne se déplace pas, mais que ceux de la cire sont comme elle : ils pleureront, ils voudront rester près des leurs, il faudra les tirer par la manche.",
      "Elle regarde le mur, derrière elle, le grand pan de crépi jaune. Tu vois l'idée lui venir. Elle a toujours eu besoin d'écrire ses comptes sur quelque chose.",
      "« JE NE METTRAI PAS LES NOMS. » Elle le dit pour elle, en fronçant le sourcil. « UN TRAIT PAR TÊTE. SI JE DEMANDE LES NOMS, ILS VONT ME RACONTER. ON N'A PAS LE TEMPS. » Elle tire de sa poche son bout de charbon, celui des ardoises, et le soupèse. « ET MOI JE SORS LA DERNIÈRE. ARTICLE QUATRE. »",
      "Tu gardes pour toi le chiffre que tu sais. On tait à quelqu'un le total d'une addition qu'il commence : il s'arrêterait au total.",
    ],
    choices: [{ back: "K16j_perrine_debout" }] },

  K16j_perrine_debout_fin: { act: "V", title: "La même foire", place: "basse", ambiance: "eau",
    text: [
      { after: "j:perrine_dit_vrai", text: "Elle lit cela sur ta bouche, jusqu'au bout. Elle met un moment à répondre, et quand elle répond elle a baissé la voix, autant qu'une sourde peut : cela donne un gros murmure. « TU NE SAIS PAS. BON. TU ME LE DIS. » Elle hoche la tête. « C'EST LA PREMIÈRE FOIS QUE TU ME RENDS LA MONNAIE JUSTE. »" },
      { after: "j:perrine_promis", text: "Elle lit cela sur ta bouche. Elle te regarde ensuite dans les yeux, longtemps, comme on mire un œuf. « TU VIENS DE ME PAYER EN PROMESSE. » Elle soupire. « JE PRENDS. JE GARDERAI L'ALMANACH. S'IL JAUNIT, TU L'AURAS JAUNE. »" },
      "Le gris lui vient aux mains. Elle le regarde monter, avec plus de curiosité que de peur : elle n'a jamais eu peur de ce qu'elle pouvait examiner.",
      "« ÇA NE FAIT PAS MAL. ÇA FAIT COMME QUAND ON S'ENDORT SUR UNE CHARRETTE. » Elle se recale contre le mur, épaules d'abord. Elle recroise les bras, exactement comme ils étaient : elle veut retrouver sa place. « VA. TU AS TA CLOCHE. MOI J'AI MES GENS. »",
      "Elle ajoute quelque chose, plus lentement, la bouche déjà dure. Le son est de trop. Tu le lis sur ses lèvres, à ton tour, et tu t'aperçois que tu sais le faire : *un autre chemin. La même foire.*",
      "Tu restes devant elle le temps d'un Pater. Puis tu ramasses, à ses pieds, un brin de paille qui tenait à sa jupe, et tu le mets dans ta chemise, contre l'almanach.",
    ],
    choices: [{ label: "Quitter le mur jaune", to: "K16_bas" }] },

  K16j_patiente: { act: "V", title: "La cloche peinte", place: "basse", ambiance: "ville",
    text: [
      "Trois étages qui penchent sur le quai, et au pignon une cloche peinte en bleu. C'est ici que tu as dormi, mangé, compté tes sous, dans une soupente à cordages d'où la Tour remplissait la lucarne.",
      { if: AVERTIE, text: "La porte est close. Une ardoise y pend : *Fermé ce jour pour lessive.* Dame Tiennette a fermé la meilleure auberge du quai le jour où toute la rivière avait soif. Elle l'a fait sur la foi d'une hotte, d'une petite qui parlait toute seule en comptant ses almanachs ; et elle est partie par le halage, en femme qui compte revenir, avec ses deux servantes et son chat dans un panier." },
      { if: AVERTIE, text: "Par le carreau, tu vois la salle rangée, les bancs sur les tables. Sur le comptoir, une clef, et un papier dessous. Tu sais ce qu'il dit : on te l'a recopié en bâtons, de soixante ans plus loin. *Pour le rat de cave : la soupe est au cellier.* C'est toi, le rat de cave. Elle t'appelait ainsi, à cause de la soupente." },
      { if: { not: AVERTIE }, text: "La salle est pleine. Trente mariniers devant leur poisson, tournés vers la fenêtre d'où l'on voit la Tour. Un pichet penche, et tient son vin au bord du bec. Un chat, sous un banc, a la patte sur une arête." },
      { if: { not: AVERTIE }, text: "Dame Tiennette est à son comptoir, les manches roulées, un pot dans une main, le torchon dans l'autre. Elle tourne le dos à la fenêtre. Elle surveillait sa salle : elle est la seule personne de cette ville que le onzième coup ait prise en train de regarder autre chose que lui." },
      { if: { has: "j:quai_brule" }, text: "Elle a menti pour toi, le soir du quai, à quatre rubans verts, avec un aplomb de sergent. Elle a dit qu'elle ne logeait que des mariniers et des veuves. Tu étais dans son cellier, entre le lard et les oignons." },
    ],
    choices: [
      { label: "Poser un grain sur la main au torchon", hide: { any: [AVERTIE, { seen: "K16j_tiennette" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_tiennette" },
      { back: "K16_bas" },
    ] },

  K16j_tiennette: { act: "V", title: "La soupe de midi", place: "basse", ambiance: "ville",
    text: [
      "Le torchon achève son tour. Elle lève les yeux, et te trouve devant son comptoir, à une heure où tu devrais être ailleurs.",
      "« Le rat de cave. » Elle pose le pot. Elle regarde sa salle, par-dessus toi : trente hommes qui ne mâchent pas. Elle met ses deux poings sur le bois. « Bon. C'est donc vrai. La petite me l'avait dit, à sa façon, en parlant à sa hotte. J'ai pensé qu'elle avait pris le soleil. »",
      "Tu lui dis combien. Elle reçoit le chiffre sans ciller. Elle a un geste vers le pichet penché, qu'elle veut redresser et qui ne se laisse pas faire.",
      "« Soixante ans. J'en ai cinquante-deux. Je me réveillerai donc à cent douze, fraîche comme tu me vois, devant du poisson de la veille. » Elle a un rire court, qui lui secoue les bras. « Ma mère disait que je ne ferais pas de vieux os. Elle n'avait pas songé à ce moyen-là. »",
      "Puis, sérieuse, vite : elle sent ses doigts. « Écoute. Il viendra quelqu'un après toi ? Dans tout ce temps ? Quelqu'un des tiens ? » Tu hésites. « Tu as toujours la main sur ta poitrine, comme si tu avais là-dessous une lettre à faire passer. Les gens qui écrivent ont un correspondant. Je tiens une auberge : je connais le courrier. »",
    ],
    choices: [
      { label: "« Quelqu'un de mon âge, en sabots. Faites-lui monter l'échelle. »", fx: { flag: "monde:tiennette_sait", ep: ["perso", 400] }, to: "K16j_tiennette_fin" },
      { label: "« Personne. Dormez, dame Tiennette. »", to: "K16j_tiennette_fin" },
    ] },

  K16j_tiennette_fin: { act: "V", title: "Derrière le four", place: "basse", ambiance: "ville",
    text: [
      { after: "monde:tiennette_sait", text: "« En sabots. » Elle enregistre cela comme une commande. « Je lui dirai l'échelle, derrière le four. Je lui dirai que le lit est fait. Si je dors, je le lui dirai en dormant : on m'a réveillée pour moins que cela. »" },
      { before: "monde:tiennette_sait", text: "« Personne. » Elle te regarde comme elle regarde les mariniers qui jurent n'avoir bu qu'un pot. « Tu mens mal. C'est ce que j'aimais chez toi. Va. »" },
      "Elle reprend son pot. Elle reprend son torchon. Elle se remet dans la pose où tu l'as trouvée, le dos à la fenêtre, les yeux sur sa salle, avec le soin de quelqu'un qui referme une armoire.",
      "« Tu n'as jamais payé ta dernière nuit », dit-elle. Tu fouilles ta poche. Tu poses sur le comptoir tout ce qui te reste d'écus à la couronne. Elle les regarde. Elle veut dire que c'est trop. Elle a la bouche sur le *t.*",
    ],
    choices: [{ label: "Laisser les écus où ils sont", to: "K16_bas" }] },

  K16j_aiguilliers: { act: "V", title: "La rue qui cherche par terre", place: "basse", ambiance: "ville",
    text: [
      "C'est une rue de trois pas de large, où tout le monde regarde le pavé. Les aiguilliers ont cette habitude : on y perd, depuis deux cents ans, de quoi faire vivre un ramasseur, et l'enfant qui trouve une aiguille la rapporte pour un liard. Aujourd'hui la rue est vide. On est monté voir la Tour.",
      "La boutique de maître Gobin est au fond, sous une enseigne en forme de roue. La porte est ouverte. Derrière la vitre, la boule d'eau pend à sa potence, grosse comme une tête, et ramasse tout le jour de la rue en un point, sur l'établi.",
      "Le vieil homme est dessous, à sa place, ses verres épais sur le nez. Il tient une brucelle. Entre les pointes de la brucelle, une roue de la taille d'une lentille entre dans son pivot. Autour de lui, ses pensionnaires : vingt pendules malades, pendues aux murs, dont les balanciers se sont arrêtés chacun où il était, de travers, à gauche, à droite. On dirait une salle d'hôpital où tous les malades auraient retenu leur souffle au même moment.",
      { if: T_PARTIE, text: "Le tabouret de l'apprenti est vide, de l'autre côté de l'établi. Il y a dessus un tablier de cuir, plié. Au plafond, une trappe, une échelle : c'est là-haut qu'on lime les cages, sous la tabatière, où le jour est meilleur." },
      { if: { not: T_PARTIE }, text: "Le tabouret de l'apprenti est vide, de l'autre côté de l'établi, et il l'a toujours été : le troisième article défend qu'on reçoive une femme, et maître Gobin n'a pas eu, cette année, de neveu de province." },
      "Tu regardes le vieil homme. C'est le seul ami qu'ait eu Barnabé Coudrier, et il ne siège dans aucun conseil. Il comptait les coups sans y penser, la brucelle à la main, comme on compte les marches d'un escalier qu'on descend tous les jours. Il en était à onze.",
    ],
    choices: [
      { label: "Monter l'échelle", hide: { not: T_PARTIE }, to: "K16j_tiphaine" },
      { back: "K16_bas" },
    ] },

  K16j_tiphaine: { act: "V", title: "Sous la tabatière", place: "basse", ambiance: "ville",
    text: [
      "L'échelle donne dans une soupente basse, blanchie, où le toit descend jusqu'au plancher. Une tabatière ouverte laisse tomber un carré de soleil sur un établi court.",
      "Elle dort. Elle est assise sur un escabeau, la joue sur l'avant-bras, en culotte et en chemise d'ouvrier, son bonnet de travers sur ses cheveux courts. Devant elle, serrée dans l'étau, une cage de laiton à demi limée, fine comme une dentelle. Elle a le burin dans la main qui pend.",
      "Elle a passé la nuit dessus. On le voit aux chandelles : il y en a trois, brûlées jusqu'au bobèche. Elle s'est endormie à l'aube, la cage presque faite, et personne n'a eu le cœur de la réveiller pour une cloche. Le onzième coup est entré par la tabatière, et l'a prise dans un autre sommeil, qu'il a seulement prolongé.",
      "Ses doigts sont écorchés. Il y reste, sous la limaille, un peu de l'encre rouge du scriptorium, qui ne partira jamais tout à fait.",
    ],
    choices: [
      { label: "Poser un grain sur la main au burin", hide: { seen: "K16j_tiphaine_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:sait_sortie", ep: ["histoire", 1000] }, to: "K16j_tiphaine_eveil" },
      { back: "K16j_aiguilliers" },
    ] },

  K16j_tiphaine_eveil: { act: "V", title: "Onze nuits", place: "basse", ambiance: "ville",
    text: [
      "Elle se redresse d'un coup, comme au dortoir. « J'ai manqué l'office. » Puis elle voit la cage, le burin, la culotte ; elle se rappelle qu'elle n'a plus d'office à manquer, et elle te voit.",
      "Elle écoute. Tu la regardes écouter : elle penche la tête, elle ferme les yeux, elle porte deux doigts à sa gorge. Elle a chanté dix ans sous une cloche. « C'est la Patiente. C'est son onzième. » Elle rouvre les yeux. « Elle le tient. On ne tient pas une note de bronze. Elle retombe toujours, c'est la première chose qu'on apprend aux novices. » Elle est très pâle. « Alors c'est le chapitre. »",
      "Tu lui dis que oui. Que vous êtes deux. Tu lui récites ce que tu en sais, d'après la copie de Josquin, jusqu'à la dernière ligne : *et qu'ils s'entendent sans se voir.* Elle secoue la tête. « Il en manque une. Josquin copiait la nuit, il s'est arrêté au bas de sa feuille. Le Livre va une ligne plus loin. » Elle la dit les yeux au toit, de sa voix de lectrice : *« Ceux qui veillent dans la note en sortent par la porte qu'on ouvre. »*",
      "« On ne me l'a jamais fait gloser. Mère Ancille disait que le trente-neuvième était un chapitre pour personne. » Elle parle vite ; elle a compris qu'elle a peu. « Voici ce que j'en sais, pour l'avoir lu onze nuits. *Ceux qui veillent* : ceux qui ont du temps à eux pendant que la note dure. Vous deux. Quiconque marche. *La porte qu'on ouvre* : il y en a deux, à ce que dit le quarantième, puisque l'heure sonne chez qui la nomme. Le Livre ne dit pas *chacun par la sienne.* Il dit *la* porte. »",
      "Elle te regarde. « Vous sortirez ensemble. Du même côté. Le Livre ne sépare pas ceux qui rendent : il les rend avec. C'est écrit ainsi, et c'est tout ce qui est écrit. Il a quarante chapitres, et pas un conseil. »",
      "Le gris lui prend les doigts. Elle regarde sa cage. « Remettez-moi le burin dans la main. Je veux la finir en me réveillant. Maître Gobin dit qu'un ouvrage interrompu se venge. » Tu lui refermes les doigts sur le manche. Elle repose sa joue sur son bras, d'elle-même, comme on se recouche.",
    ],
    choices: [{ back: "K16j_aiguilliers" }] },

  K16j_pont3: { act: "V", title: "Sous les Trois-Chandelles", place: "basse", ambiance: "eau",
    text: [
      "Tu descends par les crampons. Sous l'arche, l'ombre est bleue et fraîche, la seule fraîcheur de la ville ; l'eau du bief, arrêtée, a des reflets de plafond qui ne dansent plus.",
      { if: B_SORTIE, text: "Il n'y a personne. Les paillasses sont roulées, les écuelles rangées par taille sur leur planche, le chaudron retourné. Trente gueux sont sortis d'ici cette nuit, debout, par le bief, une petite sur un dos. La Guigne a fait cela comme elle fait tout : sans bruit, et en comptant. Au mur, au couteau, elle a laissé son compte pour qui viendrait : trente et un bâtons, et le dernier plus court que les autres." },
      { if: { not: B_SORTIE }, text: "La bande est montée. C'était jour de Grand Midi, quarante mille bourses en l'air : la Guigne a mené tout son monde à la moisson. Il en reste deux. Sur la meilleure paillasse, une petite de quatre ans, sous une couverture de cheval. À côté, assis par terre, les genoux au menton, Moineau, qui lui tient le poignet." },
      { if: { all: [{ not: B_SORTIE }, { has: "monde:brindille_ecorce" }] }, text: "Brindille a les lèvres roses. Elle a bu, cette nuit, de ce que tu as fait porter ; il y a une tasse ébréchée près de sa tête, avec un fond brun. Les ongles sont encore gris. Le rose est venu d'abord où il se voit, par politesse." },
      { if: { all: [{ not: B_SORTIE }, { not: { has: "monde:brindille_ecorce" } }] }, text: "Brindille est grise jusqu'aux lèvres. Elle dormait avant la cloche, d'un sommeil qui n'avait rien à voir avec elle. Le onzième coup l'a prise en chemin vers la Saint-Jean, et il la garde : c'est le seul service que cette note ait rendu à quelqu'un." },
      { if: { not: B_SORTIE }, text: "Moineau n'est pas monté voler. C'est la première fête qu'il manque. Il regarde la figure de sa sœur avec l'attention qu'on met à surveiller un feu qui baisse." },
    ],
    choices: [
      { label: "Poser un grain sur la main de Moineau", hide: { any: [B_SORTIE, { seen: "K16j_moineau" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_moineau" },
      { back: "K16_bas" },
    ] },

  K16j_moineau: { act: "V", title: "D'abord", place: "basse", ambiance: "eau",
    text: [
      "Il est debout avant d'avoir compris, entre toi et la paillasse, sa lame de savetier au poing. Puis il te reconnaît, et la lame rentre dans la manche d'où elle était sortie.",
      "« C'est toi. » Il écoute. Il a l'oreille des gens de dessous les ponts. « Y a plus les roues. Y a plus l'eau. » Il regarde le bief, qui ne clapote pas. « T'as fait quoi ? »",
      "Tu lui dis ce qu'on peut dire le temps d'un Pater. Il regarde sa sœur. Il comprend cela avant le reste : « Elle bouge plus. Le gris, il monte plus. »",
      { if: { has: "monde:brindille_ecorce" }, text: "« Elle a bu ton jus. Trois fois. Elle a ouvert l'œil hier, elle a dit *j'ai soif.* Ça faisait un mois qu'elle disait rien. » Sa voix se casse, et il la rattrape, furieux. « Il en reste pour deux jours. T'avais dit trois semaines. »" },
      { if: { not: { has: "monde:brindille_ecorce" } }, text: "« Alors faut pas que ça resonne. Tu m'entends ? Si ça resonne, elle a jusqu'à la Saint-Jean. Le médecin l'a dit, pour trois écus. »" },
      "Tu lui dis qu'il y a quelqu'un avec toi, en sabots, de soixante ans plus loin, d'un pays où l'on guérit de cela. Que vous allez rendre le coup, et que tu ne sais pas encore dans quelle heure il sonnera.",
      "La phrase le dépasse. Il en garde ce qu'il faut. « Alors vous la faites boire d'abord. D'abord. Après, vous sonnez ce que vous voulez. » Il ralentit. Ses doigts retournent, d'eux-mêmes, au poignet de la petite. « Tu jures. Sur ta... »",
      "Il s'est rassis, les genoux au menton. Il t'a laissé{e} choisir sur quoi. Tu jures quand même, sur ce que tu as.",
    ],
    choices: [{ label: "Reprendre les crampons, la promesse en poche", fx: { flag: "j:promesse_moineau", ep: ["perso", 500] }, to: "K16_bas" }] },

  K16j_tannerie: { act: "V", title: "La rue de trois couleurs", place: "basse", ambiance: "ville",
    text: [
      "On la sent d'habitude avant de la voir. Aujourd'hui elle a perdu son odeur, et c'est par les yeux qu'elle te prend : le ruisseau du milieu coule de trois teintes, un rouge de garance, un bleu de guède, un jaune, côte à côte, sans se mêler. Il s'est arrêté. Les trois couleurs tiennent sur le pavé comme trois rubans qu'on aurait posés.",
      "Tu regardes le jaune. On t'a dit d'où il venait : d'une écorce, qui arrive par les galères, pour les bas.",
      "Les tanneurs sont à la fête, et la rue est vide, sauf quatre seuils. Elles ont le dos à la Tour : pour ces quatre-là, le Grand Midi tombait un jour comme les autres, où une enfant dort depuis Pâques.",
      { if: { has: "monde:tannerie_partage" }, text: "Trois seuils ont leur chaise vide. Par la quatrième porte, entrouverte, tu vois une table, et autour quatre femmes en fichu noir, serrées, les coudes sur le bois. Au milieu, une râpe, un reste d'écorce gros comme le pouce, quatre bols. Elles ont partagé. Sœur Radegonde t'avait fait le compte : deux, pendant dix jours, et l'on enterre ensemble. Elles ont choisi d'ignorer lesquels. La cloche les a prises au deuxième bol, toutes les quatre, avec la figure de gens qui ont décidé d'être quatre." },
      { if: { all: [{ has: "monde:ecorce_donnee" }, { not: { has: "monde:tannerie_partage" } }] }, text: "Sur trois seuils, une femme assise, les mains vides. La quatrième porte est fermée. Par la fenêtre, tu vois Aubierge penchée sur le lit clos, un bol à la main, qui soulève la tête de sa fille. L'enfant boit. Elle a les lèvres roses. Tu avais dit : tout pour elle. On t'a obéi. Les trois autres regardent cette porte, et tu regardes les trois autres." },
      { if: { all: [{ not: { has: "monde:ecorce_donnee" } }, { has: "monde:remede_mere" }] }, text: "Sur chaque seuil, une femme assise, les mains vides, qui regarde par-dessus son épaule dans sa maison. Celle du bout a une lettre sur les genoux, de la main du curé, pour un capitaine de Hautgué. Elles ont le nom de l'arbre. Elles ont écrit. Un an de mer, pour des enfants qui avaient un été." },
      { if: { not: { any: [{ has: "monde:ecorce_donnee" }, { has: "monde:remede_mere" }] } }, text: "Sur chaque seuil, une femme assise, en fichu noir, les mains vides. Chacune regarde par-dessus son épaule, dans sa maison, où quelque chose dort. Elles ont pris l'habitude des gens qui viennent, s'assoient et repartent comme ils étaient venus. Tu es de ceux-là. Tu restes au milieu de la rue." },
      "La note est sur cette rue comme sur les autres. Ici, elle a arrêté quatre petites filles au milieu d'une maladie. Devant ces quatre portes, ce que tu pensais d'elle se brouille.",
    ],
    choices: [{ back: "K16_bas" }] },

  K16j_bassin: { act: "V", title: "Marcher dessus", place: "basse", ambiance: "eau",
    text: [
      "Le bassin est vide. Tu n'avais jamais vu un port vide : cela ressemble à une bouche sans dents. Monseigneur a retenu toutes les barges de la rivière, douze jours durant, jusqu'aux bachots des maraîchers ; elles sont à Hautgué, à quai, loin d'une ville d'où quarante mille personnes auraient peut-être voulu s'en aller par l'eau. Il reste les pieux, les anneaux, et la chaîne du duc, qui plonge.",
      "Une seule voile, au milieu, gonflée, avec sa moustache d'écume.",
      "Tu mets le pied sur l'eau. Tu l'as lu, en bâtons : *L'EAU PRISE PORTE QUI MARCHE.* Elle porte. C'est une dalle verte, un peu élastique, tiède sous la semelle, et qui garde ses rides : on marche sur des vagues comme sur un champ labouré. Derrière toi, dans le rond de ton sablier, elle se réveille à mesure, et tes traces se referment avec un petit bruit de baiser.",
      "On t'a écrit le reste aussi : elle se réveille sous qui s'arrête. Tu gardes ton pas.",
    ],
    choices: [
      { label: "Aller jusqu'à la voile, sans ralentir", to: "K16j_voile" },
      { back: "K16_bas" },
    ] },

  K16j_voile: { act: "V", title: "À l'heure", place: "basse", ambiance: "eau",
    text: [
      "C'est une plate de l'amont, à fond gris, qui n'est pas du port : elle a échappé à la rafle du duc parce qu'elle venait de trop loin pour qu'on y songe. Tu en fais le tour en marchant, à trois pas du bord, comme on tourne autour d'un cheval.",
      "Ils sont cinq. Un homme à la barre, large, le chapeau en arrière, qui jure : on le voit à la mâchoire. Une femme assise sur un sac, qui lui répond sans se retourner. Deux garçons à l'écoute. Et, debout à la proue, tenue par la ceinture, une petite fille en bonnet neuf, le bras tendu vers la Tour, qui crie quelque chose de pointu.",
      "Sur le banc, un panier de cerises, et un écriteau qu'on a peint pour l'accrocher au mât en arrivant : *DE CHANTEMERLE EN TROIS JOURS, POUR VOIR SONNER.*",
      "Trois jours de rivière. Ils ont dû partir avant l'aube, tirer à la cordelle dans les maigres, se disputer à chaque écluse sur l'heure qu'il était. Le père disait qu'on serait en retard. La mère disait qu'on y serait. Ils sont entrés dans le bassin au neuvième coup, au dixième ; ils ont passé le septième peuplier avec une demi-heure de marge sur toute leur vie. Ils y étaient. La petite a vu la Tour.",
      "Ils étaient venus sans invitation, et ils resteront sans compte : ils sont d'une paroisse de l'amont, et la Chronique dira *quarante mille* sans eux. Tu prends une cerise dans le panier, en passant, sans t'arrêter. Elle a le goût d'une cerise. Tu gardes le noyau : il faut bien que quelqu'un ait su qu'ils étaient venus.",
    ],
    choices: [{ label: "Marcher jusqu'au quai, du même pas", to: "K16_bas" }] },

  // ===== the square and its streets
  K16j_treteaux: { act: "V", title: "La onzième porte", place: "tour", ambiance: "ville",
    text: [
      "L'estrade est à hauteur de poitrine. Tu y montes par l'échelle des comédiens. Vingt pieds de planches, une toile de fond où l'on a peint douze portes sous un cadran de carton ; onze battent, ouvertes, et devant chacune une Heure a dit son couplet et salué.",
      "Maître Florizel occupe le milieu, en pourpoint cerise, les bras en croix, la canne pointée sur la douzième porte. Il a la tête renversée, les yeux au ciel, la bouche pleine d'un vers qui allait être très beau. De près, on voit le fard, la sueur dessous, et une couture qui a lâché sous le bras.",
      "La Onzième est sortie d'un pas. C'est une enfant de dix ans, en robe bleu de nuit, une lanterne de papier à la main ; elle regarde ses pieds. On l'a poussée du doigt, par-derrière. La flamme de sa lanterne est droite, pointue, immobile comme une flamme peinte, et elle éclaire quand même.",
      { if: PIECE, text: "La douzième est fermée. C'est toi qui as fait mettre quelqu'un derrière. Tu avais dit à un gros homme, dans un pré : *donnez-leur quelqu'un, une fois.* Il a dit qu'on le fouetterait après." },
      { if: { not: PIECE }, text: "La douzième est fermée. Derrière, il y a une planche noire et une araignée. Depuis trente ans, la porte s'ouvre sur ce vide, le Chapitre vérifie qu'il n'y a personne, et cinq mille spectateurs se signent. On t'avait offert d'y mettre quelqu'un. Tu as passé ton chemin." },
      "Tu regardes la salle. On ne dit pas *la salle*, pour une place ; mais c'est ce que cela fait, d'ici : cinq mille figures tournées vers toi, la bouche ouverte. Les comédiens voient cela. Tu comprends qu'on y prenne goût.",
    ],
    choices: [
      { label: "Poser un grain sur la main à la canne", hide: { seen: "K16j_florizel_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:florizel_adieu" }, to: "K16j_florizel_eveil" },
      { label: "Passer derrière la toile", to: "K16j_colombe" },
      { back: "K16_place" },
    ] },

  K16j_florizel_eveil: { act: "V", title: "Soixante ans d'entracte", place: "tour", ambiance: "ville",
    text: [
      "« ...ET QUE S'OUVRE À LA FIN LA PORTE QUE VOILÀ ! »",
      "Le vers part, entier, à pleine poitrine, et roule sur la place. Il attend la cloche. La cloche devait répondre : c'était réglé avec le sonneur, pour deux écus. Rien ne répond. Maître Florizel reste les bras en croix le temps de compter trois, en comédien qui tient sa pose ; puis un œil descend du ciel, fait le tour de la place, et te trouve.",
      "« Qui a coupé ma cloche ? » Il chuchote, sans remuer les lèvres : il se croit encore en scène. « On m'avait promis la cloche. Sortez de mon plateau, mon enfant, vous n'êtes pas dans la distribution. »",
      "Tu lui dis. Tu le lui dis vite, à l'oreille, comme on souffle un texte. Il baisse les bras. Il regarde son public : cinq mille personnes qui ne toussent pas, qui ne mangent pas, qui ne s'en vont pas.",
      "« Soixante ans. » Sa voix d'en dessous est venue, celle qui ne sert pas souvent. « Soixante ans d'entracte. Et ils sont restés ? Tous ? Pas un départ ? » Il essuie son front, et le fard vient avec. « Mon enfant, c'est le plus grand succès de l'histoire du théâtre, et je n'en saurai rien. Voilà bien ma chance. Je l'ai toujours dit : j'ai du talent, je n'ai pas d'étoile. »",
      { if: PIECE, text: "Il regarde la douzième porte. « Elle est derrière. La petite. Elle a appris cela en quatre jours, sans un vers, sur une idée de vous. Elle attend son entrée. » Il se mouche, bruyamment, dans sa manche cerise. « Je ne lui ai jamais dit qu'elle était bonne. On ne le dit pas, cela gâte. Si vous lui parlez, dites-le-lui de ma part. Dites que le directeur est content. Elle saura ce que cela vaut : je ne l'ai dit que deux fois en trente ans, et l'une des deux, j'étais ivre. »" },
      { if: { not: PIECE }, text: "Il regarde la douzième porte. « Derrière, il y a une planche. Je vous avais dit que le public aimait attendre. » Il a un rire sans joie. « Je l'ai servi. Il attend. Il attendra soixante ans devant une planche, par ma faute, et quand elle s'ouvrira il se signera. J'aurais dû vous écouter. On n'écoute jamais les gens qui n'ont pas de troupe à nourrir. »" },
      "Il reprend sa pose : les bras, la canne, la tête. Il la rectifie d'un pouce, en professionnel. « Je la tiendrai. Je l'ai tenue une fois quatre heures, à Arvoise, pour un pari. » Le gris lui gagne le poignet. « Mon vers était bien dit ? — Très bien. — Alors c'est toujours cela qu'ils auront eu. »",
    ],
    choices: [{ back: "K16j_treteaux" }] },

  K16j_colombe: { act: "V", title: "Derrière la toile", place: "tour", ambiance: "ville",
    text: [
      "L'envers d'un décor est toujours le même : des lattes, des clous, des cordes, un seau, une échelle. Il y fait sombre. Le jour passe par les fentes de la toile et dessine onze portes de lumière sur le dos des comédiens qui sont sortis.",
      { if: PIECE, text: "Colombe est debout derrière la douzième, sur une planche, tout contre le battant. Elle a quitté le manteau bleu de sainte Aure pour une robe de drap sans couleur : la Douzième n'avait pas de costume dans les malles, et l'on a jugé qu'elle s'en passerait. Trois épingles dans les cheveux, une main à plat sur la porte. Elle a les yeux fermés, pour mieux écouter son entrée." },
      { if: { all: [PIECE, { has: "monde:piece_silence" }] }, text: "Son rôle est muet. Tu lui avais dit : *tu sors, et tu les regardes.* Elle a répété cela quatre jours contre un mur de chapelle : se tenir immobile. Elle y est parvenue mieux que personne ne le lui demandait." },
      { if: { all: [PIECE, { has: "monde:piece_mot" }] }, text: "Elle a une phrase. Tu la lui avais donnée dans un pré : *l'heure qu'il est.* Ses lèvres sont entrouvertes dessus. Elle la disait encore, tout bas, pour chercher la voix." },
      { if: { all: [PIECE, { has: "monde:piece_corde" }] }, text: "Elle a ôté ses souliers. Elle tient de l'autre main un bout de corde à cloche, avec son gland rouge, qui monte derrière le décor et s'y perd. Tu lui avais dit : *un enfant, s'il atteint la corde.*" },
      { if: { not: PIECE }, text: "Colombe est là, en manteau bleu, trois épingles dans les cheveux. Elle tient la corde qui ouvre les battants, la tête levée comme les autres. C'est elle, depuis deux ans, qui ouvre sur rien. Elle est la seule de la troupe à voir ce qu'il y a derrière la douzième porte : une planche, une araignée, et elle-même, une corde à la main." },
      { if: { not: PIECE }, text: "Elle avait demandé le rôle le jour de ses seize ans. On lui a dit qu'il n'y avait pas de rôle. Elle a une figure patiente, un peu têtue, la figure de quelqu'un qui redemandera l'an prochain." },
    ],
    choices: [
      { label: "Poser un grain sur la main à plat", hide: { any: [{ not: PIECE }, { seen: "K16j_colombe_eveil" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:douzieme_jouee", ep: ["histoire", 1000] }, to: "K16j_colombe_eveil" },
      { back: "K16j_treteaux" },
    ] },

  K16j_colombe_eveil: { act: "V", title: "La Douzième, pour une personne", place: "tour", ambiance: "ville",
    text: [
      "Elle ouvre les yeux, des yeux verts, et elle pousse le battant. Elle a entendu le vers de Florizel il y a un instant : pour elle, c'est maintenant. Tu la retiens par le manteau.",
      "Elle se retourne, outrée. « On n'entre pas dans les coulisses ! » Puis elle te reconnaît, et elle voit, par la fente, la place qui ne respire pas. Elle comprend comme comprennent les gens de théâtre : par le silence de la salle. « Ils se sont arrêtés. Avant moi. » Sa voix tremble. « Ils se sont arrêtés à la onzième. Ils ne m'auront pas vue. »",
      "Tu lui dis qu'ils la verront. Dans une heure, dans soixante ans, tu l'ignores : quand le douzième coup sonnera, elle sera derrière cette porte, la main au loquet, et elle sortira. Tu lui dis que le directeur est content.",
      "« Il a dit cela ? » Elle rit, et elle pleure, et elle s'essuie du revers de sa manche. « Alors je la joue. Tout de suite. Pour vous. Je ne peux pas rester soixante ans sans savoir si elle tient. » Elle te pousse devant la toile, au bord de l'estrade, face aux portes. « Mettez-vous là. Vous êtes la salle. »",
      "Les deux battants s'ouvrent.",
      { if: { has: "monde:piece_silence" }, text: "Elle sort. Elle ne salue pas. Elle fait trois pas jusqu'au bord des planches, et elle te regarde. Elle ne regarde que toi, puisqu'il n'y a que toi qui voies ; et tu sens ce qu'elle avait prévu pour cinq mille : que c'est ton tour. Qu'onze Heures ont raconté leur ouvrage, et que la dernière n'a rien à raconter, parce que son ouvrage est devant elle, debout, les bras ballants, à se demander ce qu'on attend de lui. Cela dure. Tu baisses les yeux le premier." },
      { if: { has: "monde:piece_mot" }, text: "Elle sort. Elle ne salue pas. Elle vient au bord des planches, elle lève les yeux vers la Tour, vers les deux aiguilles jointes, et elle dit, d'une voix ordinaire, la voix dont on réveille quelqu'un qui a dormi dans son fauteuil : *« Il est midi passé. Allez. »* Rien d'autre. Tu attendais des vers. Tu reçois ta journée, rendue, comme une monnaie. Tu t'aperçois que tu as fait un pas pour t'en aller." },
      { if: { has: "monde:piece_corde" }, text: "Elle sort, pieds nus, dans sa robe sans couleur. Elle lève le bras, très haut, vers rien ; elle trouve dans l'air le bout de corde qu'elle tenait, et elle tire, de tout son poids, en fléchissant les genoux, comme tu l'as fait toi-même là-haut. Elle écoute. Tu écoutes avec elle. La Patiente ne répond pas. Elle reste le bras levé, étonnée, et tu comprends qu'elle vient de te montrer ce qu'il te reste à faire, et qu'il manque à son geste exactement une personne, en bas." },
      "Elle revient à elle. « Alors ? » Tu dis que cela tient. Elle fait oui, gravement. « Je le savais. Je voulais l'entendre de quelqu'un qui ne m'aime pas d'amitié. »",
      "Elle rentre derrière sa porte. Elle la referme. Tu entends la planche craquer, puis rien : elle a repris sa place, sa main à plat, ses yeux fermés. Elle attend son entrée. Elle est la seule personne de Méridane, avec toi, qui sache qu'il y aura une suite.",
    ],
    choices: [{ back: "K16j_treteaux" }] },

  K16j_oies: { act: "V", title: "La borne des Noyer", place: "tour", ambiance: "ville",
    text: [
      "Au bord de la place, entre un cirier et un marchand de peignes, la rue aux Oies tombe vers la ville basse, en coudes. À son débouché, une borne de pierre, large, usée du dessus : c'est la meilleure place du parvis pour qui n'a pas de quoi louer une fenêtre.",
      { if: SORTIS, text: "Un mitron est dessus, une couronne de pain à la main, mordue, la bouche ouverte et pleine. Il a quatorze ans, de la farine aux cils, et il ignore tout de la famille à qui il doit sa vue. Les Noyer sont sur une route, loin, dans une charrette bleue, vivants et fâchés. Tu regardes ce garçon, qui est pris à leur place. On sauve des gens ; on n'a pas vidé la borne pour autant." },
      { if: JOSSE_BORNE, text: "Josse Noyer est dessus, debout, une main en visière. C'est un homme de quarante-quatre ans, lourd, tanné, en blouse neuve, le chapeau sous le coude ; il s'est rasé de frais et coupé au menton. Son autre main est posée à plat sur son épaule gauche, où pesait tout à l'heure une cheville d'enfant. Il a laissé partir sa fille à la demie de dix, comme il l'avait promis à quelqu'un de ton âge ; et il est resté voir la fête tout seul, pour la lui raconter." },
      { if: JOSSE_COURT, text: "Elle est vide. Au pied, un chapeau de feutre, le fond en l'air. Josse Noyer a sauté de sa borne en criant un nom, et il court encore : on t'a dit où. Au second coude de la rue." },
      "D'ici, entre les toits, on voit un bout du canal et la file des peupliers.",
    ],
    choices: [
      { label: "Laisser un écu dans la poche du mitron", hide: { any: [{ not: SORTIS }, { has: "j:mitron_paye" }] }, fx: { flag: "j:mitron_paye" }, back: "K16_place" },
      { label: "Poser un grain sur la main en visière", hide: { any: [{ not: JOSSE_BORNE }, { seen: "K16j_josse" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_josse" },
      { label: "Descendre jusqu'au second coude", hide: { not: JOSSE_COURT }, to: "K16j_josse_coude" },
      { back: "K16_place" },
    ] },

  K16j_josse_coude: { act: "V", title: "Le seul qui regarde devant lui", place: "tour", ambiance: "ville",
    text: [
      "La rue descend entre des murs de jardin. Elle est vide : tout le monde est en haut. Au premier coude, une oie, justement, le cou tendu, une patte levée. Au second, un homme.",
      "Il court. Il remontait : il avait fait toutes les rues jusqu'à la porte, et il revenait sur ses pas. Il a été pris entre deux foulées, un pied en l'air, les bras en avant, la blouse trempée. Il est tête nue. Il a la bouche grande ouverte sur un nom de deux syllabes, et les yeux droit devant lui, sur le haut de la rue, où la borne est vide.",
      "De toute cette ville, lui seul regarde devant soi. La fête a sonné sans lui. Il a entendu onze coups de quelque chose qui lui prenait sa fille, et il a couru où ses jambes le portaient.",
      { if: { has: "j:line_consigne" }, text: "C'est toi qui as dit à l'enfant de courir. *À la demie de dix, sans t'arrêter pour personne.* Elle a obéi. Elle a dit à son père qu'elle avait envie ; il l'a posée ; elle a filé entre les jambes. Il l'a cherchée une demi-heure dans la foule, en homme qui n'ose pas encore crier. Puis il a crié." },
      { if: { not: { has: "j:line_consigne" } }, text: "On la lui a prise sur les épaules. Des mains, dans la foule, par-derrière : il s'est retourné sur une place où cinq mille personnes regardaient en l'air. Il a cherché. Puis il a couru vers le bas, parce que c'est par le bas qu'on sort de la ville, et qu'un laboureur sait par où s'en va ce qu'on lui vole. Il a trouvé la porte, et personne. Il remontait." },
      "Il est à trois cents pas de sa borne. Le bord est à une lieue derrière lui.",
    ],
    choices: [
      { label: "Poser un grain sur sa main ouverte", hide: { seen: "K16j_josse" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_josse" },
      { back: "K16j_oies" },
    ] },

  K16j_josse: { act: "V", title: "Le père", place: "tour", ambiance: "ville",
    text: [
      { if: JOSSE_COURT, text: "« ...INE ! » Le nom s'achève, et la foulée aussi : son pied touche, il fait trois pas sur son élan, il te voit devant lui, il t'attrape aux deux bras. Il a des mains de charrue. « Tu l'as vue ? Une petite, deux nattes, une boîte de fer. Tu l'as vue passer ? »" },
      { if: JOSSE_BORNE, text: "Sa main descend de son front. Il cligne, comme un homme qui a regardé trop longtemps le soleil. Il te voit, au pied de la borne, et sa figure s'éclaire : il te connaît, tu as mangé sa soupe. « Te voilà. Tu l'as manquée, la onzième. Elle a tremblé jusque dans mes semelles. » Puis il écoute. Il regarde les gens, autour de lui. Il redescend de la borne, lentement, en se tenant à ton épaule." },
      "Tu lui dis où elle est. Passé le septième peuplier, sur le halage, du côté où les blés bougent. Hors d'ici. Vivante, et qui compte les arbres.",
      { if: JOSSE_COURT, text: "Il te lâche. Il met ses mains sur ses genoux, plié, et il respire. Il lui faut un moment pour passer d'une peur à l'autre. « Dehors. » Il se redresse. Il regarde la rue vide, l'oie arrêtée, le linge raide aux fenêtres. « Dehors de quoi ? »" },
      { if: JOSSE_BORNE, text: "« Je sais. C'est moi qui l'y ai mise, avec son frère. Tu me l'avais fait jurer. » Il regarde la place, les chapeaux en l'air. « Tu ne m'avais pas dit pourquoi. Je me suis dit : c'est une lubie d'horloger. J'ai juré sur une lubie. »" },
      "Tu le lui dis. Il n'y a pas de bonne façon de le dire à un laboureur ; tu prends celle des champs. Une gelée. Elle est tombée sur la ville à midi, d'un coup, elle a tout saisi, les gens avec. Elle tiendra soixante ans. Il est dedans. Sa fille est au bord, de l'autre côté de la haie.",
      "Il t'écoute comme il écoute le temps qu'il fera. « Soixante ans. » Il compte, sur ses doigts épais. « Elle en aura soixante-neuf. Elle sera plus vieille que ma mère. » Il regarde ses mains, où le gris vient. « Et moi, je serai comme me voilà. »",
    ],
    choices: [
      { label: "« Son frère revenait vous chercher. Il est dedans aussi, à trente pas du bord. »", hide: { not: { all: [ATTELE, { not: JURE }, { not: SORTIS }] } }, fx: { flag: "j:josse_girard_dit" }, to: "K16j_josse_fin" },
      { label: "Te taire sur Girard", hide: { not: { all: [ATTELE, { not: JURE }, { not: SORTIS }] } }, fx: { flag: "j:josse_girard_tu" }, to: "K16j_josse_fin" },
      { label: "« Que voulez-vous que je lui dise ? »", hide: { all: [ATTELE, { not: JURE }, { not: SORTIS }] }, to: "K16j_josse_fin" },
    ] },

  K16j_josse_fin: { act: "V", title: "Ce qu'on dit à une fille de soixante-neuf ans", place: "tour", ambiance: "ville",
    text: [
      { after: "j:josse_girard_dit", text: "Il ferme les yeux. Il reçoit cela debout, comme il a reçu la grêle de 538. « Le fou. Je lui avais dit de rester au pont. » Sa voix est pleine d'un orgueil qu'il n'arrive pas à cacher. « Il a tourné la jument. À quatorze ans. Pour son père. » Il rouvre les yeux. « Alors elle est seule, la petite. Soixante ans, seule, entre deux qui dorment. Tu me dis cela, et tu me dis que tu ne peux rien. »" },
      { after: "j:josse_girard_tu", text: "Tu gardes l'autre chose. Il a un fils de quatorze ans qui a juré à moitié, et qui a tourné la jument. Il l'apprendra en se réveillant, ou jamais. Tu trouves que c'est assez d'un enfant par grain." },
      "Tu lui demandes s'il veut qu'on lui dise quelque chose, à elle. Tu la verras peut-être. Elle sera vieille, avec des lunettes.",
      "Il cherche. Les phrases lui viennent comme les sous : une à une, et comptées. Il regarde, entre les toits, le canal.",
      { if: { has: "j:line_consigne" }, text: "« Dis-lui que je l'ai sentie partir. Elle a dit qu'elle avait envie. Elle n'a jamais envie, cette enfant, elle se retient depuis qu'elle a trois ans, par fierté. J'ai su que c'était autre chose. Je l'ai posée quand même. » Il avale. « Dis-lui que je ne l'ai pas lâchée par bêtise. Je l'ai lâchée parce qu'elle me le demandait. Elle a toujours su mieux que moi ce qu'il y avait dans les boîtes. »" },
      { if: { not: { has: "j:line_consigne" } }, text: "« Dis-lui que j'ai couru. Elle le sait peut-être. On le lui aura dit : il y a un chapeau, là-haut. » Il avale. « Dis-lui que je n'ai pas couru assez vite, et que j'en demande pardon, et que c'est la seule fois de sa vie où son père aura été en retard pour elle. »" },
      "« Et dis-lui de ne pas venir me regarder. » Le gris est à ses poignets ; il se hâte. « Une fille ne doit pas voir son père plus jeune qu'elle. Ce n'est pas dans l'ordre. Si elle vient quand même, parce qu'elle viendra, têtue comme elle est, qu'elle me mette mon chapeau. Je n'aime pas être tête nue devant le monde. »",
      { if: JOSSE_COURT, text: "Il se remet à courir, vers le haut, vers sa borne : deux foulées, et la troisième le garde. Tu remontes chercher le chapeau, au pied de la borne. Tu le lui mets. Il est trop enfoncé, de travers. Tu le redresses." },
      { if: JOSSE_BORNE, text: "Il remonte sur sa borne, en s'aidant de ton épaule. Il remet la main en visière. Il regarde, par-dessus cinq mille têtes, non plus la Tour, mais l'endroit du canal où il y a un pont." },
    ],
    choices: [{ label: "Emporter ce qu'il a dit", fx: { flag: "monde:mot_josse", ep: ["histoire", 800] }, to: "K16_place" }] },

  K16j_hotte: { act: "V", title: "Du côté des rues qui descendent", place: "tour", ambiance: "ville",
    text: [
      "Tu la trouves au bord de la place, où elle avait dit. Elle a posé sa hotte sur un montoir, à hauteur de main, et tendu dessus son drap rouge ; les almanachs y sont en trois piles, les complaintes en éventail, les rubans sur une baguette.",
      "Elle vend. Elle a un almanach ouvert à la page de juin, tendu à une grosse femme qui fouille son tablier ; elle a l'autre main levée, deux doigts en l'air : c'est son prix. Elle a la bouche sur le *d* de *deux.* La Tour sonnait dans son dos. Elle regardait la cliente, parce qu'une cliente qui cherche sa monnaie est une cliente qui peut encore se raviser.",
      "Elle a dix-sept ans. Elle a du soleil sur le nez, une mèche collée à la tempe, et l'air de bonne humeur des jours où la vente va. Tu ne lui avais dit ni de partir ni de rester. Tu lui avais laissé la marchandise.",
      { if: { has: "j:perrine_adieu_vrai" }, text: "Tu lui avais dit où tu serais. Elle savait que tu serais sous la cloche, et pris{e}. Elle est montée vendre quand même, au bord, du côté des rues qui descendent : c'était sa façon d'être à portée." },
      { if: { has: "j:perrine_adieu_tu" }, text: "Tu lui avais dit *à ce soir.* Elle t'attend pour ce soir. Elle a compté sa recette en conséquence : il y a, noué dans un coin du drap, de quoi payer un souper pour deux à la Patiente." },
    ],
    choices: [
      { label: "Poser un grain sur la main aux deux doigts", hide: { any: [{ seen: "K16j_perrine_eveil" }, { has: "j:perrine_laissee" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_perrine_eveil" },
      { label: "La laisser à sa vente, et écrire dans la marge de juin", hide: { any: [{ seen: "K16j_perrine_eveil" }, { has: "j:perrine_laissee" }] }, fx: { flag: "j:perrine_laissee", ep: ["perso", 500] }, to: "K16j_perrine_laisse" },
      { back: "K16_place" },
    ] },

  K16j_perrine_laisse: { act: "V", title: "La marge de juin", place: "tour", ambiance: "ville",
    text: [
      "Tu la laisses dormir. Il faudrait lui dire, en trois phrases, qu'elle a soixante ans devant elle, debout, deux doigts en l'air ; et la regarder l'apprendre ; et la regarder se rendormir en le sachant. Tu as fait cela à d'autres, aujourd'hui. Elle, tu l'en dispenses.",
      "Tu prends l'almanach dans sa main. Il vient. La page de juin a sa gravure : la Tour, mal dessinée, avec une cloche trop grosse et un soleil qui a une figure. Au vingt et un, l'imprimeur a mis une main qui montre : *Grand Midi.*",
      "Tu as un bout de mine. Tu écris dans la marge, petit, de ton écriture penchée. Tu écris ce que tu as gardé le matin, ni la veille, ni sur la route, pendant neuf jours où vous avez marché du même pas en parlant du prix du papier. Cela tient en quatre lignes, que tu laisses sans les relire.",
      "Tu remets l'almanach dans sa main, ouvert à la page. Tu lui replies le pouce dessus. Elle le lira en se réveillant, quand la grosse femme aura trouvé ses deux sous ; ou elle le vendra sans regarder, et quelqu'un d'autre le lira, dans une cuisine, et se demandera qui écrivait cela à qui. Tu acceptes les deux.",
      "Elle a toujours l'air de bonne humeur. Tu la lui laisses.",
    ],
    choices: [{ back: "K16_place" }] },

  K16j_perrine_eveil: { act: "V", title: "Deux sous", place: "tour", ambiance: "ville",
    text: [
      "« ...eux sous, et je vous mets la complainte du Pendu par-dessus le marché. » Elle achève. Elle attend la monnaie. La grosse femme garde la main dans son tablier, pour toujours.",
      "Perrine fronce le sourcil. Elle déteste qu'on la fasse attendre devant sa marchandise. Elle va dire quelque chose de vif, et elle s'aperçoit que la place ne fait aucun bruit.",
      "Elle tourne la tête. Lentement. Elle voit les chapeaux en l'air. Elle voit l'enfant, sur des épaules, et la balle rouge à un pied de sa main. Elle te voit.",
      { if: { has: "j:perrine_adieu_vrai" }, text: "« Tu m'avais dit la cloche. » Elle a la voix blanche. « Tu m'avais dit que ça te prendrait, toi, là-haut. Tu ne m'avais pas dit que ça descendrait jusqu'à ma hotte. »" },
      { if: { has: "j:perrine_adieu_tu" }, text: "« Tu m'avais dit *à ce soir.* » Elle a la voix blanche. « Je savais que c'était de la fausse monnaie. Je ne savais pas qu'elle était fausse à ce point-là. »" },
      "Elle baisse les yeux sur sa main, sur les deux doigts levés. Elle essaie de les baisser. Ils obéissent ; le coude, déjà, traîne. Elle comprend ce que cela veut dire avant que tu l'aies ouvert la bouche : elle a toujours su ce que valait une chose en la soupesant.",
      "« Combien de temps ? Ne me fais pas un prix. Dis le vrai. »",
    ],
    choices: [
      { label: "« Soixante ans. Tu ne les sentiras pas. Tu rouvriras l'œil sur tes deux sous. »", fx: { flag: "j:perrine_eveil_vrai", ep: ["perso", 800] }, to: "K16j_perrine_dit" },
      { label: "« Le temps de finir un coup de cloche. Ferme les yeux. J'y travaille. »", fx: { flag: "j:perrine_eveil_doux", ep: ["perso", 400] }, to: "K16j_perrine_dit" },
    ] },

  K16j_perrine_dit: { act: "V", title: "Des almanachs périmés", place: "tour", ambiance: "ville",
    text: [
      { after: "j:perrine_eveil_vrai", text: "« Soixante. » Elle regarde ses trois piles. Elle regarde l'almanach dans sa main, la page de juin, la Tour mal dessinée. Et il lui vient, parce que c'est elle, la seule chose qu'une colporteuse puisse penser d'abord : « J'ai trente almanachs de l'an 541 sur les bras. Dans soixante ans, je ne les vendrai pas un liard. » Elle a un rire qui casse au milieu. « Tu m'as ruinée. »" },
      { after: "j:perrine_eveil_vrai", text: "Puis elle ne rit plus. « Ma mère est à Arvoise. Elle a quarante ans. » Elle fait le compte sans le dire. Tu le vois passer sur sa figure, comme l'ombre d'un nuage sur un champ. Elle le laisse passer. Elle se tient droite." },
      { after: "j:perrine_eveil_doux", text: "Elle te regarde. Elle a mordu des pièces toute sa vie. Elle mord celle-ci, des yeux, longuement, et elle en connaît l'alliage. « Le temps d'un coup de cloche. » Elle le répète sans ironie. « Tu me dis cela comme je dis aux enfants que le ruban est de soie. Bon. Je vais te croire. Je vais le faire exprès. C'est un luxe ; je ne me le suis jamais payé. »" },
      "« Et toi ? » Elle a baissé la voix. « Quand je rouvrirai l'œil. Tu seras où ? »",
      "Tu dis que tu l'ignores. Qu'il y a deux portes à cette heure, et qu'on sort par celle qu'on ouvre. Que tu n'es pas seul{e} à tenir la clef.",
      "« Celui en sabots. Celle. La personne des bâtons. » Elle hoche la tête. Tu ne lui en avais jamais parlé ; elle avait regardé ta main sur ta poitrine, neuf jours, et tiré ses conclusions. « C'est bien. Tu n'es pas fait{e} pour tenir une clef tout{e} seul{e} : tu la perdrais en regardant une pendule. »",
    ],
    choices: [{ label: "Rester près d'elle tant que le grain coule", to: "K16j_perrine_fin" }] },

  K16j_perrine_fin: { act: "V", title: "Comme j'étais", place: "tour", ambiance: "ville",
    text: [
      "Le gris est à ses coudes. Elle le regarde monter. Elle n'a pas peur des choses qu'elle peut examiner.",
      "« Remets-moi comme j'étais. Le bras. Les deux doigts. » Tu restes sans comprendre. Elle s'impatiente, comme sur la route, quand tu portais mal la hotte. « Une marchande qu'on trouve le bras baissé, on croit qu'elle a renoncé à la vente. Je ne veux pas qu'on croie cela de moi pendant soixante ans. »",
      "Tu lui relèves le bras. Tu lui redresses les deux doigts. Elle te guide, du menton : plus haut, moins raide, le pouce replié. Elle reprend son almanach de l'autre main, à la page. Elle retrouve sa cliente des yeux.",
      "« Là. C'est moi. » Elle est contente. Puis, sans tourner la tête, la bouche déjà lente : « L'article dernier. Tu l'as toujours ? » Tu le lui récites. *On ne quitte pas un associé : on prend un autre chemin pour la même foire.*",
      "« Bon. Tu sais ta règle. Je n'ai plus rien à t'apprendre. » Elle sourit, de côté. C'est le sourire qu'elle avait, sur le pont d'Arvoise, le jour où elle t'a rendu trop de monnaie exprès pour voir si tu le dirais. « Va ouvrir ta porte. Et tâche que ce soit une porte où l'on vende des almanachs : je n'ai que ce métier-là. »",
      "Sa bouche reprend le *d* de *deux.* Elle a de nouveau du soleil sur le nez, et l'air de bonne humeur des jours où la vente va. Il faudrait la connaître depuis neuf jours pour voir que ce n'est plus tout à fait le même.",
    ],
    choices: [{ label: "Quitter le montoir", to: "K16_place" }] },

  K16j_balle: { act: "V", title: "Un pied", place: "tour", ambiance: "ville",
    text: [
      "C'est un garçon de trois ans, à cheval sur les épaules d'un charpentier, qui lui tient les chevilles. Il a lâché sa balle. Elle est rouge, en cuir, cousue de quatre quartiers, et elle se tient dans l'air, à un pied de sa main ouverte, à sept pieds du pavé.",
      "Il ne la regarde pas encore. Il regarde la Tour, comme son père. Sa main s'est ouverte toute seule, de saisissement, au onzième coup. Quand l'heure repartira, la balle tombera, roulera entre cinq mille paires de jambes, et il y aura dans cette foule, parmi tout ce qui s'y passera, un enfant qui pleure pour une chose précise.",
      "Tu es dessous. En te haussant, en t'aidant d'une borne, tu l'atteins. Elle se laisse prendre : elle est tiède, légère, et elle a dans ta main le poids d'une balle. C'est la première chose de cette ville qui t'obéisse sans qu'il faille la réveiller.",
    ],
    choices: [
      { label: "La lui remettre dans la main, et refermer ses doigts", hide: { has: "j:balle_rendue" }, fx: { flag: "j:balle_rendue", ep: ["perso", 300] }, to: "K16j_balle_fin" },
      { label: "La reposer dans l'air, où elle était", hide: { has: "j:balle_rendue" }, to: "K16_place" },
      { back: "K16_place" },
    ] },

  K16j_balle_fin: { act: "V", title: "Une chose de moins", place: "tour", ambiance: "ville",
    text: [
      "Tu grimpes sur la borne. Tu lui mets la balle dans la paume. Les doigts sont petits, raides, chauds ; tu les replies un par un, sur le cuir, en serrant un peu.",
      "Cela fait une chose. Sur quarante mille personnes, sur une lieue de pays, sur soixante ans, tu as empêché une balle de tomber. Tu redescends. Tu t'attendais à trouver cela dérisoire. Tu trouves que c'est la première besogne de la journée dont tu sois sûr{e}.",
      "Le charpentier a une main sur chaque cheville de l'enfant. Il les tient bien. Tu remarques cela aussi.",
    ],
    choices: [{ back: "K16_place" }] },

  K16j_sibylle: { act: "V", title: "La baraque de toile", place: "tour", ambiance: "ville",
    text: [
      "Elle a monté sa baraque contre le mur du cirier : quatre perches, une toile à étoiles déteintes, un tabouret, une table. Les jours de fête, elle quitte le pré de la Foire et suit la foule ; on la porte, avec ses perches, sur une charrette à bras.",
      "Elle est assise dedans, toute seule. Elle tricote. Elle a la figure levée, un peu de côté, ses yeux blancs tournés vers la toile, comme les gens qui écoutent un bruit dans le mur. Les aiguilles sont arrêtées au milieu d'une maille.",
      "Elle a la bouche fermée. C'est la seule, sur cette place : pendant que la ville disait *onze*, elle écoutait autre chose.",
      "Tu te rappelles ses deux mains autour de la tienne, sèches, tièdes comme du pain de la veille. *La tienne commence plus loin. Elle a un grand blanc d'abord.* Elle t'avait rendu ton écu. *Je ne prends pas l'argent de quelqu'un qui n'est pas né.*",
    ],
    choices: [
      { label: "Poser un grain sur sa main, et lui tendre la tienne", hide: { seen: "K16j_sibylle_main" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:sibylle_dit", ep: ["histoire", 600] }, to: "K16j_sibylle_main" },
      { back: "K16_place" },
    ] },

  K16j_sibylle_main: { act: "V", title: "Où la ligne commence", place: "tour", ambiance: "ville",
    text: [
      "La maille s'achève. Les aiguilles s'arrêtent d'elles-mêmes, cette fois, et la vieille pose son tricot.",
      "« Ah. » Elle n'a pas tourné la tête. « C'est le grand blanc. J'y suis. Je me disais bien que je l'entendrais venir. » Elle tend ses deux mains, à l'aveugle, et tu y mets la tienne.",
      "Son pouce trouve le creux, et marche. Il va au bas de ta paume, où il s'était perdu la première fois. Il s'arrête. Elle sourit : il lui manque des dents, et cela ne gâte rien.",
      "« La voilà. Elle commence ici. À l'instant. Tu es né{e} il y a le temps d'un coup de cloche. » Elle rit, tout bas. « Quatre-vingt mille mains, et il a fallu que j'attende la dernière pour en voir une partir de sous mon doigt. Elle est chaude. Elle est toute fraîche. Elle sent l'encre. »",
      "Le pouce remonte. « Elle n'est pas longue encore. Elle va jusqu'à une chose froide : du métal, gros, que tu tires vers toi. Tu n'es pas seul{e} dessus. Il y a une autre main, loin, en bas, jeune, qui pousse quand tu tires. C'est bien. » Le pouce hésite. « Et il y en a une troisième. Une vieille. Une main de trop, sur la chose froide. »",
      "Tu demandes laquelle : il y a deux vieux, en bas. Elle secoue la tête. « Je lis des mains, pas des figures. Une vieille main, qui a tenu trop longtemps, et qui ne sait plus s'ouvrir. Il faudra que quelqu'un la lui ouvre. Doucement. On ne casse pas les doigts des gens qui se sont trompés. »",
      "Elle te rend ta main. Elle la referme elle-même, comme on rend un objet prêté. « Après, la ligne se divise. Je ne te dirai pas en combien. Tu ne m'as pas payée. » Elle reprend son tricot ; le gris lui vient aux aiguilles. « Et je ne prends toujours pas ton écu. Tu es trop jeune : tu es d'aujourd'hui. »",
    ],
    choices: [{ back: "K16_place" }] },

  K16j_gnomon: { act: "V", title: "La pièce de soleil", place: "tour", ambiance: "temple",
    text: [
      "Saint-Gnomon-le-Vieux est la paroisse du bas de la place, une église trapue, sans clocher, plus ancienne que la Tour. On n'y sonne pas : on y regarde. Tu pousses la porte.",
      "La nef est vide et noire. En travers du dallage, d'un mur à l'autre, court une règle de cuivre, large de deux doigts, gravée de traits : la Méridienne. Dans la voûte, il y a un trou, de la grosseur d'un œil ; il en tombe un rayon, droit comme un fil à plomb, où la poussière se tient debout.",
      "Au bout du rayon, sur le dallage, la pièce de soleil : un rond blanc, grand comme la paume. Elle est sur la règle. Elle est sur l'étoile de cuivre qui marque le solstice, exactement, sans déborder d'un cheveu. Les Fondateurs avaient percé leur trou pour cet instant-là, un jour par an, et le bedeau montait sur un banc pour crier : *il y est.*",
      "Il y est. Le bedeau est sur son banc, un doigt levé, la bouche ouverte. Il le crie pour une nef où il n'y a que toi.",
      { if: { has: "monde:oderic_affiche" }, text: "Sous le porche, en sortant, tu revois la feuille, clouée de quatre clous à la porte des morts. Tu l'y as fait mettre cette nuit. *L'EMPÊCHEMENT DE LA REINE.* Une seule personne la lit : une vieille en coiffe, qui n'est pas montée voir la Tour, à cause de ses jambes. Elle a le doigt sur la troisième ligne. Elle épelait. Elle sera donc, pendant soixante ans, la seule personne de Méridane à savoir ; et elle le saura jusqu'au mot *douze mille*, où son doigt s'est arrêté." },
      "Derrière l'autel, une dalle à anneau. C'est la bouche du Droit, qui s'en va sous la ville jusqu'à une grille de bronze. Quelqu'un est monté par là, à l'instant, de soixante ans plus loin, en sabots.",
    ],
    choices: [{ back: "K16_place" }] },

  // ===== the hill of the Jurors
  K16j_lunel: { act: "V", title: "Un œil bleu", place: "guilde", ambiance: "chateau",
    text: [
      "Au premier du logis de l'est, la croisée est ouverte. Maître Lunel y est, dans son fauteuil, son bonnet de velours sur l'oreille, une couverture aux genoux. Il a quatre-vingt-huit ans. Il a la figure levée vers le soleil, les yeux fermés, et il sourit : il a compté *onze* avec toute la ville, de sa fenêtre, dans le noir tiède de ses paupières.",
      "Près de lui, sur une chaise, un livre ouvert, le signet pendant. Son lecteur a quinze ans, et il a demandé la permission d'aller voir la fête. Elle se donne, à cet âge.",
      "C'est par ce vieillard qu'on saura. Dans soixante ans, quelqu'un en sabots posera un grain sur cette main tachée ; un œil s'ouvrira, très bleu, et le doyen racontera qu'un vieillard a traversé la cour à onze heures en disant qu'il allait se promener.",
      { if: { has: "j:voix_lunel" }, text: "Il a voté avec toi, à la séance : tu lui avais parlé le dernier, et de près. Il a levé la main en te cherchant des yeux, pour savoir si c'était bien celle-là." },
    ],
    choices: [
      { label: "Poser un grain sur sa main", hide: { seen: "K16j_lunel_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:lunel_adieu" }, to: "K16j_lunel_eveil" },
      { back: "K16_colline" },
    ] },

  K16j_lunel_eveil: { act: "V", title: "Le dernier qui a parlé", place: "guilde", ambiance: "chateau",
    text: [
      "« ...onze. » Il ouvre un œil, très bleu, puis l'autre. Il attend. Il lève une main, pour battre la douzième sur le bras de son fauteuil : c'est une habitude de soixante-dix ans. La main reste levée.",
      "« Elle retarde. » Il est scandalisé. « La Patiente retarde. De mon temps, on aurait déposé le sonneur. » Puis il te voit, dans sa chambre. « Vous êtes le petit Foliot ? Non. Vous êtes trop maigre. Cela ne fait rien. Asseyez-vous dans le soleil. »",
      "Tu lui dis qu'elle ne retarde pas. Tu lui dis ce qu'elle fait. Il t'écoute, la tête penchée, avec cette bienveillance des très vieux, qui ne distingue plus très bien les nouvelles graves des autres.",
      "Et puis quelque chose bouge, au fond de l'œil bleu. C'est un homme qui, à trente ans, a fait une montre que personne n'a su copier. Il en reste un morceau.",
      "« Tenu. » Il le dit d'une autre voix. « Il l'a tenu. Le petit Melchior. Barnabé nous l'avait dit hier, debout, pendant une heure : *il le tiendra, et il ne saura pas le lâcher.* J'ai trouvé qu'il parlait trop fort. » Il regarde sa main levée. « J'ai voté. Avec qui ai-je voté ? »",
      { if: { has: "j:voix_lunel" }, text: "Tu dis : avec le Grand Maître. Il respire. « Ah. Tant mieux. Je ne m'en souvenais plus. À mon âge, on fait le bien par hasard, et l'on est content de l'apprendre. »" },
      { if: { not: { has: "j:voix_lunel" } }, text: "Tu ne réponds pas tout de suite. Il comprend. « Avec le dernier qui m'a parlé. C'est ce qu'on dit de moi dans les corridors : on croit que je n'entends pas. » Il baisse la main. « J'ai été un grand horloger. Il faudrait mourir à ce moment-là. On continue, on vote, et l'on abîme tout. »" },
      "Il te regarde. « Vous allez le rendre, ce coup ? Vous ? » Tu dis : à deux. « À deux. Naturellement. Une montre a deux aiguilles, et les sots croient que la grande commande. » Le gris lui prend les doigts. « Dites à Barnabé que le doyen a fini par l'entendre. Avec un jour de retard. C'est honorable, pour un Juré. »",
    ],
    choices: [{ back: "K16_colline" }] },

  K16j_seance: { act: "V", title: "Sept fauteuils", place: "guilde", ambiance: "chateau",
    text: [
      "La grande salle est fermée d'un cordon de soie, qu'on enjambe. Les quarante et un portraits des Grands Maîtres regardent une table en fer à cheval et sept fauteuils. Le trente-septième est toujours face au mur.",
      "Six fauteuils sont en ordre. Le septième, le haut, celui du milieu, est par terre, les quatre pieds en l'air. Il est resté ainsi depuis hier soir. Les valets ont eu peur : on laisse où il est le siège d'un Grand Maître qu'on vient d'arrêter, de crainte d'avoir pris parti.",
      { if: { has: "j:vote_adopte" }, text: "Sur la table, le registre est ouvert à la page d'hier. *La suspension est adoptée.* Dessous, les sept seings, et une tache d'encre où une plume s'est écrasée. On avait voté qu'un homme pourrait arrêter une chambre. On regardera cette page, dans les siècles, comme on regarde la signature d'un incendie." },
      { if: { has: "j:vote_rejete" }, text: "Sur la table, le registre est ouvert à la page d'hier. *La suspension est rejetée.* Les Jurés avaient dit non. Tu y avais aidé, voix par voix. Le sous-maître a salué, il a repris ses clefs, et il est descendu ce matin par la porte de fer avec neuf apprentis, comme si l'on avait dit oui. On avait gagné un vote. On n'avait pas songé qu'il s'en passerait." },
      "Dans l'embrasure, il reste une chose oubliée : la chaîne de quelqu'un, ou un gant, ou rien. Tu regardes surtout le fauteuil.",
    ],
    choices: [
      { label: "Relever le fauteuil du Grand Maître", hide: { has: "j:fauteuil_releve" }, fx: { flag: "j:fauteuil_releve", ep: ["perso", 300] }, to: "K16j_fauteuil" },
      { back: "K16_colline" },
    ] },

  K16j_fauteuil: { act: "V", title: "Le trente-septième", place: "guilde", ambiance: "chateau",
    text: [
      "Il est lourd. C'est du chêne, avec un dossier haut comme une porte, où l'on a sculpté un cadran sans aiguilles. Tu le prends par un bras, tu t'arc-boutes, et il se redresse dans le rond de ton sablier avec un bruit de bois qui retentit jusqu'aux portraits.",
      "Tu le remets à sa place, au milieu du fer à cheval. Tu l'alignes sur les marques du parquet : il y a deux creux, usés par trois cents ans de Grands Maîtres qui reculaient leur siège du même geste.",
      "C'est un geste pour rien. Les valets le trouveront debout, quand l'heure repartira, et se demanderont lequel d'entre eux a eu ce courage. Tant mieux : il y en aura un qui se croira brave, et qui le deviendra peut-être.",
      "En te retournant, tu passes devant le trente-septième portrait. Tu écartes le cadre, de deux doigts. L'homme qui rit, la main sur son globe. Et en bas, de la petite écriture : *Il a voulu voir. B. C., 524.* Tu penses à un autre homme, plus jeune, qui a des yeux de deux couleurs. On retournera son portrait aussi. Il faudra que quelqu'un écrive derrière.",
    ],
    choices: [{ back: "K16j_seance" }] },

  K16j_cabinet: { act: "V", title: "Le sablier blond", place: "guilde", ambiance: "chateau",
    text: [
      "L'antichambre, ses douze anneaux. La porte du cabinet est tirée, et la serrure a repris son chiffre : il a fermé derrière lui, ce matin, en homme qui veut qu'on sache quelque chose pour entrer. Tu sais. Les douze cliquets cèdent sous tes doigts, et le chêne tourne de son poids.",
      "C'est la pièce que tu connais : la table, le lit de sangle, le coffre, les livres en piles sur le carreau. Aucune horloge. La fenêtre est fermée ; derrière la vitre, la Tour, à vingt toises, et la petite porte de fer sous le cadran.",
      "Le lit est fait. Au bord, il y a un creux : quelqu'un s'y est assis, longtemps, avant de descendre. Sur la table, la copie de Josquin, ouverte à l'avant-dernier chapitre, une plume en travers ; une feuille volante ; et le sablier de trois doigts, retourné une dernière fois, tout son sable blond en bas. On a glissé dessous le bout d'une baguette de buis.",
      { if: { has: "monde:coudrier_sait" }, text: "Sur le mur, à la craie, de la grosse main : *541 et 60 font 601.* Le dernier nombre est cerclé deux fois. Dessous : *Ils seront deux. Laisser la porte comme elle est.* Il t'a cru{e}. Il a fait son compte, et il a laissé de quoi entrer à quelqu'un qu'il ne verrait pas." },
      "Tu lis la feuille volante. C'est une liste, sans titre. *Rouet : lui dire le prix de ses bas. Cliquet : rien, il est jeune. Lunel : lui parler le dernier. Le septième : ne pas l'insulter. Le remercier d'être clair.* Tu étais à la séance. Tu les as entendues, ces phrases, tomber une à une sur six hommes assis. Il les avait pesées la veille, à cette table, comme des remèdes.",
      "Tu laisses le sablier et la baguette où ils sont. Elle a son papier noué d'un fil, à l'adresse de quelqu'un d'autre : tu sais de qui.",
    ],
    choices: [
      { label: "Ouvrir le coffre", hide: { seen: "K16j_coffre" }, to: "K16j_coffre" },
      { back: "K16_colline" },
    ] },

  K16j_coffre: { act: "V", title: "B. C. à B. C.", place: "guilde", ambiance: "chateau",
    text: [
      "Le coffre a sa clef dessus. Une houppelande de rechange, plus usée que l'autre. Trois chemises, un rasoir. Le premier horloger du royaume tient, linge compris, dans un coffre de soldat.",
      "Au fond, un paquet de lettres, noué d'une ficelle. Elles viennent d'Arvoise et commencent toutes par *Mon oncle.* Tu lis la dernière, qui est du deux juin : *Il nous est né un fils le jour de la Saint-Marcellin. Nous l'appelons Barnabé, que cela vous plaise ou non. Venez le voir après votre fête. Gilles Coudrier, serrurier, rue du Pont.*",
      "Sous les lettres, roulée dans un bas de laine, une timbale d'argent, neuve. On a gravé sur le bord : *B. C. à B. C., 541.* Il l'avait fait faire en cachette, chez un orfèvre du bas, par quelqu'un qui n'a pas dû reconnaître le client : cet homme-là n'entrait chez les orfèvres que pour leur dire ce qu'il pensait de leurs charnières.",
      "*Après votre fête.* Il comptait y aller. Il y avait donc, dans cette tête où tu n'as vu que des chapitres et des colères, un voyage de dix lieues, un enfant de trois semaines à regarder de près, et la question de savoir comment un vieillard tient cela dans ses bras. Il avait prévu de remonter.",
      "Tu remets la timbale dans son bas de laine, et le bas sous les lettres. Quelqu'un la trouvera. Tu sais même qui : un garçon de dix-sept ans, qui s'assoira par terre, d'un coup, comme si on lui avait fauché les jambes. On te l'a écrit. Il faut qu'elle y soit.",
    ],
    choices: [{ label: "Refermer le coffre, la clef dessus", fx: { flag: "j:vu_timbale", ep: ["perso", 400] }, back: "K16j_cabinet" }] },

  K16j_atelier: { act: "V", title: "Dix établis", place: "guilde", ambiance: "chateau",
    text: [
      "L'atelier des apprentis tient tout le rez-de-chaussée du logis du nord : une longue salle à dix fenêtres, un établi sous chacune, pour le jour. Neuf sont en désordre, comme on laisse un établi quand on vous appelle : une lime en travers, une roue dans l'étau, un tablier jeté.",
      "Ce sont les neuf qui sont en bas. Tu lis leurs noms sur les tiroirs. Le grand Baudouin, qu'on a mis sonneur, a le sien près de la porte ; il y a une épée d'assaut pendue au clou. Le dernier tiroir, le plus bas, dit *Ansel*, d'une écriture appliquée. Sur l'établi d'Ansel, il y a une boîte de montre, ouverte, vide, avec son coton : on lui en a donné une neuve ce matin, pour porter le maillet.",
      { if: { has: "monde:hurel_lettre" }, text: "Sous la boîte, une lettre commencée. *Ma chère mère, je vous écris comme on me l'a dit, pour que vous sachiez.* La lettre s'arrête là. Il a treize ans. Il a taillé sa plume trois fois avant de trouver la suite, et on l'a appelé." },
      "Le dixième établi est sous la dernière fenêtre, au bout. Il est net. On l'a ciré.",
    ],
    choices: [
      { label: "Aller au dixième établi", hide: { seen: "K16j_etabli" }, fx: { flag: "j:vu_etabli" }, to: "K16j_etabli" },
      { back: "K16_colline" },
    ] },

  K16j_etabli: { act: "V", title: "Pour demain", place: "guilde", ambiance: "chateau",
    text: [
      { if: { has: "j:aubespin_apprenti" }, text: "C'est le tien. Tu avais dit oui, dans une pièce blanche, à un homme qui avait une rose sous une cloche. Il t'avait donné une clef et une heure. Il t'a donné aussi cela, sans te le dire : un établi sous la meilleure fenêtre, celle du levant." },
      { if: { not: { has: "j:aubespin_apprenti" } }, text: "C'était pour toi. Tu avais dit non, dans une pièce blanche, à un homme qui avait une rose sous une cloche. Il a fait cirer l'établi quand même. Il pensait que tu reviendrais sur ta réponse : il a toujours cru que les gens intelligents finissaient par être de son avis." },
      "Il y a posé des outils. Ils sont neufs, rangés par taille sur une peau de chamois : six limes, trois brucelles, un tour à pivoter, une loupe à manche d'ébène. Ce sont de meilleurs outils que ceux de Line. Ce sont les meilleurs que tu aies vus. Sur le manche de la loupe, on a gravé deux lettres : les tiennes.",
      "Et un billet, sous la loupe, de son écriture droite, sans un jambage de trop. *Pour demain. Vous verrez qu'après aujourd'hui nous aurons le temps de tout. M. A.*",
      "Tu restes devant. C'est une chose difficile à haïr, un homme qui a pensé à faire graver vos initiales. Il est en bas, endormi sur un sourire, la main au levier ; il a pris quarante mille personnes sans l'avoir voulu, et une reine en le voulant. Il avait aussi commandé une loupe.",
      "Tu la prends. Tu regardes ton pouce au travers : les sillons sont larges comme des labours. Tu la reposes sur le chamois, à sa place, le manche vers la main.",
    ],
    choices: [{ back: "K16j_atelier" }] },

  K16j_logis: { act: "V", title: "La pièce blanche", place: "guilde", ambiance: "chateau",
    text: [
      "Le logis du sous-maître est au-dessus de l'atelier. On y monte par un escalier ciré. La porte au papillon de cuivre cède sous la main : tout ce qu'il avait à cacher, il le portait sur lui.",
      "C'est une pièce blanche, à la chaux, sans un livre par terre. Une table de marbre. Dessus, sous une cloche de verre, la rose : coupée à Pâques, ouverte, avec une goutte d'eau au bord d'un pétale, suspendue depuis Pâques. Elle était arrêtée avant la ville, et la ville l'a rejointe à son insu.",
      "Sur le mur, il a fait des traits, à la mine, par cinq : un par jour depuis Pâques. Il comptait ce qu'il avait déjà pris au temps. Il y en a soixante-dix-huit.",
      "Près de la fenêtre, un portemanteau de voyage, bouclé. Un grand sablier dans son étui de cuir, de ceux qu'on porte en bandoulière. L'étui est vide : il a emporté ce qu'il y avait dedans. Et sur le marbre, à côté de la rose, deux rouleaux.",
    ],
    choices: [
      { label: "Dérouler les deux plans", hide: { seen: "K16j_plans" }, fx: { flag: "j:sait_accident", ep: ["histoire", 800] }, to: "K16j_plans" },
      { back: "K16_colline" },
    ] },

  K16j_plans: { act: "V", title: "Vingt toises", place: "guilde", ambiance: "chateau",
    text: [
      "Le premier est celui qu'on a montré à la Reine. La Chambre haute, vue du dessus : huit baies, un lit, deux petites figures à l'encre rouge, et autour un cercle au compas, qui passe par le mur. *Rayon : quatre toises.* En bas, le seing de la Reine, et sa cire, écrasée à gauche.",
      "Le second est le vrai. La Tour entière, en coupe, du puits à la Cage. Le cercle est plus grand : il prend la Chambre haute, l'escalier, la galerie, et il s'arrête au parvis. *Rayon : vingt toises.* Dans la marge, de l'écriture droite : *La mère avec l'enfant. Le dais dehors. Monseigneur aura ce qu'il a payé.* Et, plus bas, un calcul : douze cuves, tant de pintes par an, tant d'écus la pinte.",
      "Vingt toises. Tu mesures, de l'œil, sur le papier. Le cercle s'arrête en deçà de la fontaine des Jurés, des tréteaux, de la borne de la rue aux Oies. Il laissait dehors les cinq mille de la place, et le reste de la ville, et la lieue de campagne. Il prenait une reine. C'était un vol, bien dessiné, à l'échelle.",
      "Il y a un troisième trait sur le plan, au crayon, qu'il a ajouté après. Une flèche, du levier vers le bas. *Butée à onze. Le coin de bronze tient la barre à mi-course. Ne pas dépasser.* Souligné.",
      "La ville était hors de son plan. Il avait calculé une course, mis un coin pour l'arrêter à la moitié, et marqué de ne pas dépasser. Puis un vieillard est descendu se battre avec lui pour le levier, pendant que la cloche sonnait ; ils ont pesé dessus à deux, l'un pour le remonter, l'autre pour le retenir ; et la barre est allée au fond.",
      "Tu roules les plans. Personne n'a voulu cela. On te l'avait dit, et tu l'avais cru comme on croit une politesse. C'était exact au crayon près : il a fallu, pour arrêter quarante mille personnes, un voleur prudent et un honnête homme en colère.",
    ],
    choices: [{ back: "K16j_logis" }] },
});

module.exports = { passages: P, extras: {} };
