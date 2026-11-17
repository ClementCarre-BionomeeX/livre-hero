// Le Douzième Coup · chapter 14, the one who passes (act IV, 21 June 541, from eleven to the eleventh stroke of
// noon). The iron door behind the old man (`j:entre_dixieme` with the under-master's key, past the green ribbons
// otherwise) ; going down first costs the upper Chamber (`j:tard`) : the stair without a rail, the Grand Maître
// in his niche (the ringer's key and the drift, if they were not given), the lower Chamber as the tenth
// (`j:vu_basse`, the wedge a quarter askew : `monde:ansel_travers`, thrown out : `j:chasse_basse`). Going up : the
// Queen's people coming down, the gallery of the great dial, the landing. The upper Chamber before the half hour
// (`monde:reine_sait`, the ring given back : `j:bague_rendue`, the bark : `monde:aelis_ecorce`, the three pulls :
// `j:signal_trois`) or, late, the rungs and the window (`j:vu_fenetre`). The Cage (`monde:nom_cage`), M14, then
// Baudouin and his knife (`j:baudouin_cede` | duel `d_cage` : `monde:corde_entiere` | `monde:corde_coupee`), and
// the strokes (`j:pose_corde` | `j:pose_cahier` | `j:pose_regard`). B14 carries act V.
var P = {};
var DIXIEME = { all: [{ has: "j:aubespin_apprenti" }, { not: { has: "j:aubespin_trahi" } }, { item: "clef_tour" }] };
var CLEF_S = { item: "clef_sonneur" };
var TARD = { has: "j:tard" };
var ECORCE_J = { all: [{ item: "ecorce_fievrier" }, { not: { has: "monde:aelis_ecorce" } }] };
var PROMIS = { has: "j:promis_reine" };
var RENONCE = { has: "monde:reine_renonce" };
var AVERTIE = { any: [{ has: "monde:reine_avertie" }, { has: "j:reine_sait_601" }] };
var CONNAIT_ANSEL = { any: [{ has: "monde:su:ansel" }, { has: "j:ansel_parle" }] };
var SIGNES = { seen: "K10j_souper" };
var SORTIS = { has: "monde:noyers_sortis" };
var ATTELE = { has: "monde:girard_attele" };
var PIECE = { has: "monde:florizel_piece" };

Object.assign(P, {
  K14j_route: { act: "IV", title: "Onze heures", place: "tour", ambiance: "chateau",
    text: [
      "Tu fermes le Cahier. Au-dessus de toi, quelque chose se déclenche avec un bruit de chaîne, et la Patiente dit onze heures.",
      "De si près, cela se reçoit plus que cela ne s'entend. Le premier coup te descend dans la poitrine, s'y installe, et le suivant arrive avant qu'il en soit sorti. La borne tremble sous toi. Dans la ruelle, les quatre rubans verts ont rentré la tête dans les épaules, comme des hommes sous une averse.",
      "Au onzième, la poterne de la Guilde s'ouvre, et le Grand Maître paraît.",
      "Il a sa houppelande, et, dessus, la pèlerine grise que cent ans d'araignées ont filée. Il est tête nue. Il tient à la main une baguette de buis, mince, dont il frappe le pavé en marchant, par habitude de professeur. Il vient à son pas. Il a soixante-dix ans, il a marché toute la nuit, et il traverse cette ruelle comme un homme traverse sa cuisine.",
      "Devant les quatre rubans verts, il s'arrête. Il les regarde l'un après l'autre. « Messieurs. Vous direz à votre maître que je me suis promené. » Aucun ne bouge : on leur a dit de le laisser passer. Il passe.",
      "À ta hauteur, il ne tourne pas la tête. « Vous êtes à l'heure, dit-il du coin de la moustache. C'est un défaut que j'estime. » Il tire de sa manche un passe-partout, l'engage sous le papillon, pousse. La porte de fer s'ouvre sur du noir, et sur un souffle froid qui sent la cave et le métal.",
      "Il entre. Il laisse le vantail entrebâillé, de la largeur d'une épaule mince. On entend sa baguette toucher une marche, puis une autre, en descendant.",
      { after: "j:aymon_escalier", text: "Aymon Foliot a fait un pas vers la porte. Il a posé la main dessus, à plat, comme on tient une page." },
      { after: "j:josquin_porte", text: "Josquin a relevé le front. Il compte, des lèvres. Il en est à sept." },
    ],
    choices: [
      { label: "Marcher à la porte au papillon, la clef de bronze à la main", hide: { not: DIXIEME }, fx: { flag: "j:entre_dixieme" }, to: "K14j_entree_dixieme", big: true },
      { label: "Passer devant les quatre rubans verts",
        test: { dom: "discretion", diff: 11, label: "Quelqu'un de mince, derrière un vieillard", help: [{ if: { has: "j:aymon_escalier" }, v: 15 }, { if: { voie: "leste" }, v: 10 }, { if: { has: "j:josquin_porte" }, v: 5 }] },
        win: { to: "K14j_vestibule" },
        lose: { to: "K14j_rubans" } },
    ] },

  K14j_rubans: { act: "IV", title: "Ceux qui comptent qui le suit", place: "tour", ambiance: "chateau",
    text: [
      "Tu as fait six pas quand une canne plombée te barre la poitrine. « Celui-là, on ne nous l'a pas annoncé. » Ils se sont décollés du mur tous les quatre, sans hâte. Le plus gros a un chapeau de trop sur la tête : un chapeau de vieillard, noir, à larges bords, qu'il porte un peu de côté.",
      "« On nous a dit : laissez passer le vieux, et comptez ce qui vient derrière. Tu viens derrière. Ça fait un. » Il te pousse du bout de sa canne. « On nous a pas dit quoi faire du compte. Alors on le garde ici, le compte, jusqu'à midi. Après midi, paraît que ça n'aura plus d'importance. »",
      "Deux te prennent par les coudes. La porte de fer est à dix pas, entrebâillée.",
    ],
    choices: [
      { label: "Te dégager, et courir à la porte",
        fight: { title: "Les rubans verts de la ruelle", enemies: [{ id: "homme_duc", n: 2 }], terrain: "ville",
          win: { to: "K14j_rubans_battus", fx: { ep: ["histoire", 500] } }, lose: { to: "K14j_rubans_perdu" } } },
    ] },

  K14j_rubans_battus: { act: "IV", title: "Un chapeau de travers", place: "tour", ambiance: "chateau",
    text: [
      "Le gros s'assoit dans le ruisseau, les deux mains sur le ventre, et le chapeau du Grand Maître lui tombe sur les yeux. L'autre a lâché sa canne pour se tenir le poignet. Les deux derniers te regardent, font le compte, et trouvent qu'on ne les paie pas assez pour le reste.",
      "Tu ramasses le chapeau, au passage. Tu le poses sur la borne, à l'endroit où tu étais assis{e}, bien droit.",
      "La porte de fer est entrebâillée d'une épaule. Tu as l'épaule qu'il faut.",
    ],
    choices: [{ label: "Entrer", to: "K14j_vestibule", big: true }] },

  K14j_rubans_perdu: { act: "IV", title: "Par où l'on entre", place: "tour", ambiance: "chateau", fx: { pv: -3 },
    text: [
      "La canne te prend au creux des reins, et le pavé te monte à la figure. Tu entends rire. Une botte te cherche les côtes, et les trouve.",
      { after: "j:aymon_escalier", text: "« Messieurs ! » La voix est jeune, blanche, appliquée. Aymon Foliot s'est avancé, les mains dans le dos. « Je me permets de vous signaler que le chanoine Poupart descend la ruelle avec le Chapitre. Il vient bénir la porte. Je l'ai vu du coin. » Les quatre tournent la tête. Il n'y a personne ; mais un Foliot n'avait jamais menti, et le mensonge d'un homme exact vaut un coup de canon. Tu es debout avant qu'ils se soient retournés. Aymon te pousse dans l'entrebâillement, de l'épaule, sans cesser de saluer le fond de la ruelle." },
      { after: "j:josquin_porte", before: "j:aymon_escalier", text: "Quelque chose tombe sur le dos du gros, avec un cri de chat : c'est Josquin, qui ne sait pas se battre, et qui s'accroche. « Entrez ! Mais entrez donc ! » Il prend un coup de coude en pleine figure, et il ne lâche pas. Tu te relèves. Tu passes. Derrière toi, tu l'entends demander pardon, par habitude, à l'homme qu'il mord." },
      { before: ["j:aymon_escalier", "j:josquin_porte"], text: "Ils te laissent par terre : on ne garde pas debout un compte qui se débat. Tu attends, la joue sur le pavé, qu'ils aient repris leurs poses de badauds. Puis tu rampes. Dix pas, le long du mur, dans l'ombre de la Tour. Le dernier se retourne quand ton talon passe la porte, et il est trop tard pour lui." },
      "Tu es dedans. Tu as du sang dans la bouche, et le noir sent la cave.",
    ],
    choices: [{ label: "Te relever", to: "K14j_vestibule", big: true }] },

  K14j_vestibule: { act: "IV", title: "Le pied de la vis", place: "tour", ambiance: "chateau",
    text: [
      "La porte de fer donne sur un palier de pierre, étroit, que le jour de la ruelle éclaire d'une lame. Il fait froid. Le bruit de la place n'entre pas ici : on entend seulement, de très haut, descendre un battement, large, espacé, qui est celui de l'horloge.",
      "Deux escaliers partent de ce palier. L'un monte : c'est la vis, qui s'enroule dans l'épaisseur de la Tour autour d'un puits vide, large de trois pieds. Tu te penches. Au milieu de ce vide, du haut en bas, pend un fil de laiton, fin comme un cheveu, tendu, qui luit. Il vient de la cloche. Il va quelque part sous tes pieds.",
      "L'autre escalier descend. Il n'a pas de rampe. Il s'enfonce le long du mur, à main droite, et il a le vide à main gauche : un vide d'où monte une lueur grise, de perle, qui n'éclaire rien. On y entend, très bas, une baguette toucher la pierre.",
      "Sur le mur, une pendule de service marque onze heures et cinq. La porte de la Chambre haute se ferme en dedans à la demie. Il y a quatre-vingts marches vers le bas, et deux cent quatre-vingts vers le haut. On n'a pas le temps des deux, si l'on veut trouver là-haut une porte ouverte.",
    ],
    choices: [
      { label: "Descendre d'abord, derrière la baguette", fx: { flag: "j:tard" }, to: "K14j_descente_noire", big: true },
      { label: "Monter tout de suite", to: "K14j_vis", big: true },
    ] },

  K14j_entree_dixieme: { act: "IV", title: "Vous porterez le niveau", place: "tour", ambiance: "chateau", fx: { flag: "j:tard" },
    text: [
      "Les quatre rubans verts regardent ta clef, et s'écartent : on leur a décrit le papillon. La serrure tourne sans bruit. Elle a été graissée ce matin.",
      "Derrière la porte, sur un palier de pierre, monsieur Fourchon t'attend, long, funèbre, une lanterne à la main. Il a de la cire dans les oreilles, et, par-dessus, un bandeau de drap noir, par égard pour son âge. Il te montre sa montre. Puis il te met dans les bras un étui de cuir, lourd, de la longueur d'un fusil.",
      "Il se tait : il ne s'entendrait pas. Il te fait un signe, de deux doigts, vers le bas. C'est le signe du pichet, à la table des neuf. Ici, il veut dire : *suis.*",
      "Deux escaliers partent du palier. L'un monte, en vis, autour d'un vide où pend un fil de laiton. L'autre descend, sans rampe, le long du mur, vers une lueur grise. Fourchon prend celui-là. Tu le suis, l'étui contre la poitrine, en comptant les marches.",
      "À la soixantième, l'escalier tourne. Il y a là, dans le mur, une niche à lanterne, profonde, où le noir est plus noir. Fourchon passe sans lever sa lumière. Toi, tu sens, en passant, une odeur de chocolat et de vieille toile ; et quelqu'un, dans la niche, retient son souffle avec une politesse parfaite.",
    ],
    choices: [{ label: "Descendre les vingt dernières", to: "K14j_basse", big: true }] },

  K14j_descente_noire: { act: "IV", title: "Sans rampe", place: "tour", ambiance: "chateau",
    text: [
      "Tu descends la main au mur. La pierre est froide, et elle sue. À ta gauche, il n'y a rien : un bord, puis le vide, et dans le vide cette lueur de perle qui monte sans rien éclairer, comme le souvenir d'une lumière.",
      "Tu comptes. À la vingtième marche, tu n'entends plus la ruelle. À la quarantième, tu entends autre chose : un pas. Un seul, très lourd, venu d'en bas, qui ébranle la marche sous ton pied. Puis rien, le temps de compter quatre. Puis le pas.",
      { after: "j:sait_dessous", text: "Tu l'as entendu une fois, l'oreille contre un pavé. Tu marches à présent dans la chose qui le fait." },
      "À la soixantième, l'escalier tourne. La baguette s'est tue. Il y a là, dans le mur, une niche à lanterne, profonde ; et dans la niche, assis sur la pierre, les genoux sous le menton comme un écolier puni, le Grand Maître des Horlogers-Jurés d'Aurime.",
    ],
    choices: [{ label: "T'accroupir près de lui", to: "K14j_niche" }] },

  K14j_niche: { act: "IV", title: "Un écolier puni", place: "tour", ambiance: "chateau", backName: "la niche",
    text: [
      { first: true, text: "« Je me doutais que vous descendriez. » Il parle bas, dans sa moustache. « Les gens de votre âge veulent voir. C'est une sottise, et c'est la seule que je n'aie jamais pu reprocher à personne. »" },
      { first: true, text: "Il a posé sa baguette en travers de ses genoux. « J'attends ici. Il a neuf garçons entre cette marche et son levier, et les neuf sont sourds : je ne peux ni les prêcher ni leur faire peur. À midi, ils regarderont tous la barre. C'est le seul instant de la journée où neuf apprentis regardent du même côté. Je passerai derrière eux. »" },
      { first: true, text: "« D'ici là, je suis un vieil homme dans un trou, qui compte les battements d'une machine qu'il a servie cinquante ans. » Il écoute. Le pas, en bas. Le silence, le temps de quatre. « Elle bat juste. C'est ce qui me fend le cœur. Elle n'a jamais si bien battu que le jour où l'on va l'arrêter. »" },
      { again: true, text: "Le Grand Maître, dans sa niche, la baguette sur les genoux. En bas, le pas, et le silence de quatre." },
      { after: "monde:chasse_en_bas", text: "Il a le bras gauche replié contre lui, avec soin, comme on porte un oiseau." },
    ],
    choices: [
      { label: "« Maître. La Cage de la cloche a deux clefs. »", hide: CLEF_S, fx: { item: "clef_sonneur", ep: ["histoire", 600] }, to: "K14j_niche_clef" },
      { label: "Lui donner le chasse de bronze de maître Cliquet", hide: { not: { item: "chasse_bronze" } }, fx: { drop: "chasse_bronze", flag: "monde:chasse_en_bas", ep: ["histoire", 600] }, to: "K14j_niche_chasse" },
      { label: "Avancer jusqu'au tournant, et regarder en bas", hide: { any: [{ has: "j:vu_basse" }, { has: "j:entre_dixieme" }] }, fx: { flag: "j:vu_basse", ep: ["histoire", 500] }, to: "K14j_regard_bas" },
      { label: "Remonter : il te reste deux cent quatre-vingts marches", to: "K14j_vis", big: true },
    ] },

  K14j_niche_clef: { act: "IV", title: "La seconde clef", place: "tour", ambiance: "chateau",
    text: [
      "« Qui vous l'a dit ? » Sa grande main se lève dans le noir. « Non. Taisez-vous. J'ai passé l'âge de m'étonner de ce que vous savez. »",
      "Il fouille sa houppelande, et tu sens qu'il te met dans la paume une chose courte, froide, au panneton en trèfle.",
      "« L'une est à la ceinture de ce monsieur, en bas, avec deux autres. Celle-ci, les Grands Maîtres la portent depuis 481, pour qu'il y ait toujours quelqu'un qui puisse monter rendre un coup, quoi qu'on ait signé. J'allais l'emporter au fond d'une cave. C'eût été la plus grande bêtise de ma vie, et j'en ai fait de belles. »",
      "Il referme tes doigts dessus. « Sur le dernier palier, la porte basse, à gauche de celle de la Reine. Soyez dessous avant midi. Et tenez-vous droit{e} : on reste longtemps comme on était. »",
    ],
    choices: [{ back: "K14j_niche" }] },

  K14j_niche_chasse: { act: "IV", title: "Dans la manche gauche", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui mets dans la main la tige de bronze de maître Cliquet. Il la reconnaît au toucher : il passe le pouce sur le chanfrein, et il a un petit rire de nez. « Cliquet. Un coup de lime de trop, comme toujours. »",
      "Tu lui dis le reste à l'oreille. Un coin, dans une rainure, à gauche du levier quand on regarde le puits. Le petit bout. Un coup sec, vers le haut. Celui qui viendra n'aura rien dans les mains.",
      "« Alors il faut que cela tombe où je serai. » Il a compris avant la fin. Il glisse la tige dans sa manche gauche, la pointe vers le poignet, et il replie le bras dessus. « Je n'ai pas d'aiguille. Je la tiendrai du coude. Quand on me tirera le bras, je l'ouvrirai. Un vieillard qu'on bouscule lâche ce qu'il a : personne ne regardera par terre. »",
      "Il se tait. Le pas, en bas. « Soixante ans. Le bronze sait attendre. On en fait les cloches. »",
    ],
    choices: [{ back: "K14j_niche" }] },

  K14j_regard_bas: { act: "IV", title: "Ce qui bat dans la cave", place: "tour", ambiance: "chateau",
    text: [
      "Au tournant, le mur s'arrête. Tu avances à plat ventre, jusqu'au bord de la marche, et tu regardes.",
      "C'est une salle ronde, voûtée, sans fenêtre, grande comme une église de village. Il n'y a rien au milieu : un trou. Un puits sans margelle, large de quatre toises, d'où monte la lueur de perle, et qui n'a pas de fond qu'on voie. L'air, au-dessus, tremble comme au-dessus d'un four, et il est froid.",
      "En travers du puits, portée par deux chevalets de chêne noir, il y a une barre. Elle est de bronze, grosse comme un tronc, longue de six toises. Elle descend. Elle descend lentement, de tout son poids, avec un bruit de porte de grange : c'est le pas. En bas de sa course, elle s'arrête, le temps de compter quatre. Puis elle remonte, sans personne, d'elle-même, comme une poitrine. Au bout de la barre, du côté de l'escalier, un levier se dresse, haut comme un homme, avec une poignée de cuir usée par quatre siècles de mains qui ne l'ont jamais tirée.",
      "Et de la barre monte le fil. Il part d'un anneau, au milieu, et il file droit dans un œil de la voûte, vers la vis, vers la cloche. À chaque descente, il se tend.",
      "Ils sont dix autour de cela. Neuf en tablier vert, les oreilles bandées, chacun à sa place, immobiles ; et un homme en gris, les mains libres, qui tourne autour du puits à petits pas, en consultant une montre. Le plus petit des neuf est debout près du levier, un maillet à la main. À ses pieds, sur un linge, un coin de bronze.",
      "Autour du puits, en cercle, douze berceaux de chêne attendent, vides, chevillés de bois.",
      "L'homme en gris lève la tête vers l'escalier. Tu recules. Il n'a rien vu : il regardait la pendule, au mur. Il lui reste, à lui aussi, cinquante battements d'une heure.",
    ],
    choices: [{ back: "K14j_niche" }] },

  K14j_basse: { act: "IV", title: "La Chambre basse", place: "tour", ambiance: "chateau", hub: true, backName: "ta place, près du chevalet", fx: { flag: "j:vu_basse", ep: ["histoire", 600] },
    text: [
      { first: true, text: "C'est une salle ronde, voûtée, sans fenêtre, grande comme une église de village. Il n'y a rien au milieu : un trou. Un puits sans margelle, large de quatre toises, d'où monte une lueur de perle, et dont on ne voit pas le fond. L'air, au-dessus, tremble comme au-dessus d'un four, et il est froid." },
      { first: true, text: "En travers du puits, sur deux chevalets de chêne noir, une barre de bronze, grosse comme un tronc. Elle descend, de tout son poids, avec un bruit de porte de grange. Elle s'arrête, le temps de compter quatre. Elle remonte, d'elle-même, comme une poitrine. Au bout, un levier, haut comme un homme, avec une poignée de cuir. Du milieu de la barre, un fil de laiton part vers un œil de la voûte." },
      { first: true, text: "Les neuf sont à leurs places. Personne ne parle : il n'y a ici que des sourds, et un homme qui entend. Fourchon te désigne un endroit, du doigt, près du chevalet de droite. C'est le tien. On l'a marqué à la craie, d'un petit papillon." },
      { first: true, text: "Melchior Aubespin te regarde arriver. L'œil gris, l'œil brun. Il incline la tête, de son inclinaison exacte, et retourne à sa montre." },
      { again: true, text: "Le puits, la barre qui descend et remonte, les neuf tabliers verts. L'homme en gris tourne autour du trou, à petits pas." },
    ],
    choices: [
      { label: "Poser le niveau où il te le montre", hide: { seen: "K14j_basse_niveau" }, to: "K14j_basse_niveau" },
      { label: "Le petit Hurel, près du levier", hide: { seen: "K14j_basse_ansel" }, to: "K14j_basse_ansel" },
      { label: "Te pencher sur le puits", hide: { seen: "K14j_basse_puits" }, to: "K14j_basse_puits" },
      { label: "Écouter l'homme en gris, puisqu'il est le seul à parler", hide: { seen: "K14j_basse_aubespin" }, to: "K14j_basse_aubespin" },
      { label: "Quitter ta marque de craie", to: "K14j_basse_sortir", big: true },
    ] },

  K14j_basse_niveau: { act: "IV", title: "Un demi-trait à gauche", place: "tour", ambiance: "chateau",
    text: [
      "Tu ouvres l'étui. C'est un niveau d'eau, long de cinq pieds, en laiton, avec une fiole au milieu où tremble une bulle. Le sous-maître te montre la barre, en bas de sa course, et le plat qu'on y a dressé à la lime.",
      "Tu poses l'instrument. La barre s'est arrêtée ; tu as le temps de compter quatre. La bulle court, hésite, se fixe. Il se penche par-dessus ton épaule. Il sent la lavande et le métal froid.",
      "« Un demi-trait à gauche. » Il le dit pour lui : il sait que tu entends, toi, et il n'en fait pas état. « Elle penche vers le levier d'un demi-trait, depuis quatre cents ans, et personne ne l'a écrit. Les Fondateurs l'ont voulue ainsi : de ce côté, elle tombe mieux qu'elle ne remonte. » Il se redresse. « Ôtez. Elle repart. »",
      "Tu ôtes le niveau. La barre remonte, lentement, sous tes mains, avec une force à soulever une maison. Tu as touché, le temps de quatre, la chose qui fait sonner midi sur un royaume.",
      "« Vous avez la main sûre, dit-il. Je regrette de ne pas vous avoir eu{e} plus tôt. Nous aurions fait de belles choses, vous et moi, si vous n'aviez pas ce regard. » Il sourit, à peine. « Celui des gens qui savent comment cela finit. Je l'ai vu une fois, à un médecin. »",
    ],
    choices: [{ back: "K14j_basse" }] },

  K14j_basse_ansel: { act: "IV", title: "Le plus petit des neuf", place: "tour", ambiance: "chateau",
    text: [
      "Ansel Hurel est debout près du levier, à gauche, du côté où la rainure s'ouvre. Il tient le maillet à deux mains, la tête en bas. À ses pieds, sur un linge blanc, le coin de bronze : long comme la main, épais d'un pouce à un bout, d'une ligne à l'autre.",
      "Il te voit. Sous le bandeau gris, il a les yeux très grands. Il regarde le puits, puis toi, puis le puits. Il a vu, l'autre nuit, l'eau se tenir debout dans un bassin ; il sait, depuis, ce qu'on lui fera faire, et il a une montre neuve.",
      { after: "j:ansel_travers", text: "Il incline le maillet, d'un quart, et le redresse. C'est entendu. Ses lèvres remuent sur un mot que personne ne peut entendre, lui moins que les autres." },
      { after: "j:ansel_mere", before: "j:ansel_travers", text: "Il a un petit geste, vers sa poitrine, où il n'y a rien : la lettre est restée sous un oreiller. Puis il raffermit ses mains sur le manche. Il frappera droit. On le lui a appris, et il n'a pas trouvé, à treize ans, de raison assez grosse pour désobéir." },
      { before: ["j:ansel_travers", "j:ansel_mere"], text: "Il raffermit ses mains sur le manche, et il regarde ailleurs. Tu es le dixième, celui qu'on a pris en dernier : il ne te doit rien." },
    ],
    choices: [
      { label: "Lui montrer, de la main, un quart de travers", hide: { any: [{ has: "j:ansel_travers" }, { not: CONNAIT_ANSEL }] },
        test: { dom: "social", diff: 10, label: "Parler avec les mains à un enfant qui a peur", help: [{ if: SIGNES, v: 10 }, { if: { has: "j:ansel_mere" }, v: 15 }, { if: { has: "monde:hurel_lettre" }, v: 10 }] },
        win: { fx: { flag: ["j:ansel_travers", "monde:ansel_travers"], ep: ["histoire", 700] }, to: "K14j_basse_travers" }, lose: { to: "K14j_basse_travers" } },
      { back: "K14j_basse" },
    ] },

  K14j_basse_travers: { act: "IV", title: "Un quart", place: "tour", ambiance: "chateau",
    text: [
      "Tu attends que l'homme en gris soit de l'autre côté du puits. Tu poses la main à plat, devant toi, à hauteur de ta ceinture ; et tu la tournes, d'un quart, comme on tourne une clef qui force.",
      { after: "j:ansel_travers", text: "Il regarde ta main. Il regarde le coin, sur son linge. Il comprend lentement, de la façon dont comprennent les enfants : par le ventre. Un coup de travers. Un coin qui tient, qui cale ce qu'on veut, et qu'un autre, un jour, fera sauter d'une chiquenaude." },
      { after: "j:ansel_travers", text: "Il fait mieux que dire oui : il change ses mains de place sur le manche, la gauche devant, et il essaie le geste, dans le vide, une fois, tout petit. Puis il te regarde. Il a treize ans, et il vient de devenir le complice de quelqu'un." },
      { before: "j:ansel_travers", text: "Il regarde ta main. Il fronce le sourcil. Il regarde le sous-maître, là-bas, puis Baudouin, qui vous observe par-dessus la barre. La peur lui ferme la figure comme un volet. Il secoue la tête, deux fois, et il serre son maillet contre lui." },
      { before: "j:ansel_travers", text: "Tu n'insistes pas. Le grand Baudouin a fait un pas." },
    ],
    choices: [{ back: "K14j_basse" }] },

  K14j_basse_puits: { act: "IV", title: "Où le temps s'amasse", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'avances jusqu'au bord. Il n'y a pas de margelle : le pavé s'arrête, usé en biseau, et après le pavé il y a cela.",
      "C'est gris, entre l'eau et la fumée, et cela luit par en dessous, sans source, d'une lueur qui n'a pas d'heure. Cela monte quand la barre monte, et redescend avec elle, de la hauteur d'une main. On dirait qu'une chose immense respire au fond, et que la barre est posée sur sa poitrine.",
      "Tu regardes trop longtemps. Le gris a une profondeur où l'œil ne trouve pas d'appui. On y voit passer des formes, très bas, lentes comme des poissons sous la glace : un pré, une main, une rue sous la pluie. Tu ne sais pas si elles sont derrière toi dans les années ou devant.",
      "Le froid te prend aux dents. Tu recules. Tes genoux ont le tremblement qu'on a au bord d'un toit.",
      "C'est de là que les Fondateurs ont tiré le premier sable. C'est là-dessus qu'on a bâti une tour, pendu une cloche, réglé un royaume. Toute l'heure qu'il est, sur toutes les pendules d'Aurime, vient de ce trou ; et un homme en gris, à trois pas de toi, s'apprête à poser le doigt dessus.",
    ],
    choices: [{ back: "K14j_basse" }] },

  K14j_basse_aubespin: { act: "IV", title: "Une politesse qu'on supprime", place: "tour", ambiance: "chateau",
    text: [
      "Il parle en marchant, à mi-voix, pour la seule oreille de cette cave qui ne soit pas bouchée. Il y a des hommes qui ont besoin d'un témoin, et qui le prennent où ils le trouvent.",
      "« À midi, elle descend douze fois, et le fil tire douze fois. Je la tiendrai au levier dès la première : elle descendra sous ma main, un cran de crémaillère par coup. Au onzième, elle sera où je la veux. Le petit met le coin. Elle ne remonte pas. » Il regarde sa montre. « Le douzième coup est une politesse que l'horloge fait au jour : *c'est fini, vous pouvez dîner.* Je la supprime. »",
      "« Et là-haut, une chambre s'arrête. Une chambre : huit baies, un lit d'enfant, deux personnes. Le reste de la ville dîne en effet. C'est ce que j'ai montré à la Reine, sur un jouet, cent fois, avec un coq qui bat des ailes. »",
      "Il fait trois pas. « Le jouet dit vrai, à une condition : que la barre s'arrête au cran que j'ai calculé. Un cran plus bas, c'est la colline. Deux, la ville. À fond... » Il a un geste vague, de la main qui tient la montre. « J'ai fait ce calcul-là aussi. Je ne l'ai montré à personne. Une lieue. »",
      { after: "j:aubespin_vrai", text: "« Vous me demanderez pourquoi je vous le dis. Parce que vous l'aviez deviné, à la Foire, devant une rose, et que j'ai horreur d'expliquer à quelqu'un ce qu'il sait déjà en feignant qu'il l'ignore. »" },
      "« C'est pourquoi j'ai mis neuf garçons entre cet escalier et moi. Il ne faut pas qu'on me touche. Un homme qu'on bouscule, au levier, appuie. » Il s'arrête devant toi. L'œil gris, l'œil brun. « Le vieux viendra. Je le sais ; je l'ai fait laisser passer. J'aime mieux l'avoir ici, où mes garçons le tiendront, que là-haut, près d'une corde. Vous voyez que je pense à tout. »",
      "Il repart. « Monsieur de Hautgué croit m'avoir acheté une régence. La Reine croit m'avoir commandé un sursis. Je leur livre, à tous deux, ce qu'ils ont payé. Ce que j'en tire, moi, ne regarde ni l'un ni l'autre : c'est ce qui suintera de la pierre, autour d'une chambre arrêtée, grain à grain, pendant le temps qu'on voudra. » Il montre les douze berceaux vides. « J'ai commandé de quoi le recueillir. Les grandes découvertes, mon enfant, se font toujours dans la marge d'un contrat. »",
    ],
    choices: [{ back: "K14j_basse" }] },

  K14j_basse_sortir: { act: "IV", title: "Avant le bandeau", place: "tour", ambiance: "chateau",
    text: [
      "La pendule du mur marque la demie. Très haut, par l'œil de la voûte, descend un coup, un seul, que tu es seul{e} avec lui à entendre. Là-haut, une clef vient de tourner dans une porte.",
      "Il te reste une demi-heure pour quatre-vingts marches, puis deux cent quatre-vingts. Il faut que tu sois sorti{e} de cette cave avant qu'il noue son bandeau : après, il n'aura plus d'oreilles, et il aura des yeux pour dix.",
      "Tu es sur ta marque de craie. Baudouin est entre l'escalier et toi.",
    ],
    choices: [
      { label: "Montrer la lanterne de Fourchon, qui baisse, et l'escalier : de l'huile",
        test: { dom: "social", diff: 10, label: "Une commission d'apprenti", help: [{ if: SIGNES, v: 10 }, { if: { voie: "diseur" }, v: 10 }, { if: { has: "j:assaut_gagne" }, v: 5 }] },
        win: { to: "K14j_basse_file" }, lose: { fx: { flag: "j:chasse_basse", pv: -2 }, to: "K14j_basse_chasse" } },
      { label: "Attendre qu'il regarde sa montre, et longer le mur",
        test: { dom: "discretion", diff: 11, label: "Le dixième manque à sa marque", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { to: "K14j_basse_file" }, lose: { fx: { flag: "j:chasse_basse", pv: -2 }, to: "K14j_basse_chasse" } },
      { label: "Rester. Être là quand il prendra le levier", fx: { flag: ["j:chasse_basse", "j:tente_bas"], pv: -3 }, to: "K14j_basse_chasse" },
    ] },

  K14j_basse_file: { act: "IV", title: "Vingt marches, et une niche", place: "tour", ambiance: "chateau",
    text: [
      "Tu es dans l'escalier. Personne n'a couru. Tu montes la main au mur, le vide à ta droite à présent, et la lueur grise te suit sous les semelles.",
      "À la vingtième marche, le tournant. La niche. Une odeur de chocolat et de vieille toile.",
      "« C'était donc vous, le dixième. » La voix sort du noir, très basse. « Je vous ai senti{e} passer. Vous portiez quelque chose de lourd avec la figure de quelqu'un qui le hait. On reconnaît un honnête homme à la façon dont il tient l'outil d'un coquin. »",
    ],
    choices: [{ label: "T'arrêter devant la niche", to: "K14j_niche" }] },

  K14j_basse_chasse: { act: "IV", title: "Doucement : il porte bien un niveau", place: "tour", ambiance: "chateau",
    text: [
      { after: "j:tente_bas", text: "Tu restes. Tu te dis qu'il y aura un instant, au premier coup, où il n'aura que deux mains ; et que tu en as deux aussi." },
      { after: "j:tente_bas", text: "Il achève son tour de puits. Il s'arrête devant toi. Il laisse ta figure ; il regarde tes pieds, qui ont quitté la craie d'un demi-pas vers le levier." },
      { after: "j:tente_bas", text: "« Je me suis demandé si vous veniez m'aider ou me surveiller. J'avais conclu que cela revenait au même. Je me trompais d'un demi-pas. » Il lève un doigt." },
      { before: "j:tente_bas", text: "Tu as fait trois pas quand une main te tombe sur l'épaule : large, calme, gantée de fil. Baudouin Passavant ne t'a pas quitté{e} des yeux depuis que tu es entré{e}. Il te ramène devant l'homme en gris comme on rapporte un outil." },
      { before: "j:tente_bas", text: "« Vous nous quittez. » Le sous-maître n'a pas élevé la voix. « Une demi-heure avant. Je me suis demandé si vous veniez m'aider ou me surveiller ; j'ai ma réponse, et elle me déçoit moins que je n'aurais cru. » Il lève un doigt." },
      "Ils sont trois sur toi avant que tu aies levé le bras. Ils te prennent sans frapper : ce sont des garçons d'atelier, ils savent tenir une pièce sans la marquer. On te plie un coude dans le dos. On te porte.",
      "« Dehors. Doucement : il porte bien un niveau, et je déteste gâter une main. » Il s'est déjà retourné vers sa montre. « Au palier, pas dans la rue. Je ne veux pas qu'on rouvre cette porte. Qu'il aille où il voudra : il n'y a plus, dans cette Tour, un seul endroit d'où l'on puisse me gêner. »",
      "Ils te montent les quatre-vingts marches à trois, en soufflant, sans voir la niche, où quelqu'un retient son souffle. Ils te jettent sur le palier de pierre, au pied de la vis. Baudouin te regarde un instant, d'en haut. Il porte deux doigts à sa tempe. Puis ils redescendent, et leurs lanternes s'en vont dans le gris.",
      "Tu te relèves. Tu as un coude qui ne plie plus très bien. La pendule de service marque midi moins vingt.",
      { if: { not: CLEF_S }, text: "Du noir de l'escalier, une baguette de buis frappe trois petits coups sur la pierre. On t'appelle." },
    ],
    choices: [
      { label: "Vingt marches plus bas, la baguette", hide: CLEF_S, to: "K14j_niche" },
      { label: "Monter", to: "K14j_vis", big: true },
    ] },

  K14j_vis: { act: "IV", title: "Deux cent quatre-vingts", place: "tour", ambiance: "chateau",
    text: [
      "Tu montes. La vis tourne à gauche, toujours, dans l'épaisseur du mur, et elle a au milieu ce puits vide de trois pieds où pend le fil. Il est à portée de ta main. Il vibre. De temps en temps, sans cause, il se tend, et une note en descend, très fine, qu'on entend avec les dents.",
      "Tous les vingt degrés, une meurtrière. On y voit passer, par tranches, un toit, un morceau de place, des têtes, puis des toits plus petits, puis la campagne. On monte au-dessus d'une ville comme on monterait au-dessus de sa propre vie : en la voyant rapetisser.",
      { if: { not: TARD }, text: "À la centième marche, tu entends descendre. Des jupes, un pas d'homme, un pas d'enfant. Tu te ranges contre le mur. Ce sont les gens de la Reine, qu'elle a renvoyés : deux dames, qui se tiennent par le bras et qui ont pleuré ; un page, les mains vides ; et maître Anthelme, sa trousse sous le coude, qui descend le dernier, à reculons presque, en regardant vers le haut." },
      { if: { all: [{ not: TARD }, { has: "j:anthelme_allie" }] }, text: "Il te reconnaît. Il s'arrête, une marche au-dessus de toi. « Vous. » Il baisse la voix. « Elle nous a mis dehors. C'est la Coutume : seule avec l'héritière. Elle fermera à la demie. » Il te prend le bras, à le pincer. « La petite a monté les deux cent quatre-vingts marches sur ses pieds. Elle en a fait cent. J'ai porté le reste. Elle ne pèse rien. Il ne faut pas qu'elle reste là-haut plus d'une heure, vous m'entendez ? Il fait froid sous cette cloche. » Il te lâche. Il descend. Il ne saura jamais combien d'heures." },
      { if: { all: [{ not: TARD }, { not: { has: "j:anthelme_allie" } }] }, text: "Le médecin te toise au passage, cherche à qui tu appartiens, voit tes mains d'atelier, et conclut : *service de l'horloge.* Il passe. Les dames ne t'ont pas vu{e}." },
      { if: TARD, text: "L'escalier est vide. Vers la centième marche, il y a sur la pierre un mouchoir de dame, tombé, et plus haut un ruban. On est descendu par ici il y a peu, en pleurant." },
      "À la cent quarantième, une porte basse, à droite, ouvre sur du jour. Tu as les jambes en feu et la moitié du chemin.",
    ],
    choices: [
      { label: "La porte basse : la galerie du grand cadran", to: "K14j_galerie" },
      { label: "Continuer sans t'arrêter", to: "K14j_palier", big: true },
    ] },

  K14j_galerie: { act: "IV", title: "Derrière l'aiguille", place: "tour", ambiance: "chateau", backName: "la galerie du grand cadran",
    text: [
      { first: true, text: "La galerie fait le tour de la Tour, à mi-hauteur : un balcon de pierre, large de deux pieds, sans autre garde-fou qu'une barre de fer. On y vient graisser les aiguilles. Derrière toi, à travers le mur, on entend tourner les renvois des quatre cadrans, avec un bruit de moulin lent." },
      { first: true, text: "Tu es derrière le grand cadran. Il est fait de verre laiteux, entre des nervures de plomb, et le soleil le traverse. La grande aiguille passe devant toi, par-dehors, dorée, longue comme une barque : on la voit avancer. Elle a le pas d'une chose qui ne s'est jamais pressée." },
      { first: true, text: "Par un carreau qu'on a laissé clair, pour le graisseur, tu vois la place." },
      { again: true, text: "La galerie, le verre laiteux, la grande aiguille qui passe." },
    ],
    choices: [
      { label: "Regarder la place, par le carreau clair", hide: { seen: "K14j_galerie_vue" }, to: "K14j_galerie_vue" },
      { label: "Faire le tour jusqu'à la face du midi", hide: { seen: "K14j_galerie_sud" }, to: "K14j_galerie_sud" },
      { label: "Monter par les barreaux de fer", hide: { not: { seen: "K14j_galerie_sud" } },
        test: { dom: "discretion", diff: 10, label: "Vingt et un barreaux, et une enjambée", help: [{ if: { voie: "leste" }, v: 20 }, { if: { voie: "coureur" }, v: 5 }, { if: { has: "j:vu_echelons" }, v: 10 }] },
        win: { to: "K14j_fenetre" }, lose: { fx: { pv: -3 }, to: "K14j_fenetre" } },
      { label: "Reprendre la vis, vers le dernier palier", to: "K14j_palier", big: true },
    ] },

  K14j_galerie_vue: { act: "IV", title: "Cinq mille mentons", place: "tour", ambiance: "chateau",
    text: [
      "D'ici, la foule a une figure. Cinq mille mentons levés, cinq mille bouches entrouvertes, et tous ces yeux qui montent vers toi sans te voir : ils regardent l'aiguille, à trois pieds de ta tête.",
      "Tu vois le théâtre, près de la fontaine : douze portes peintes, fermées, et un gros homme en pourpoint cerise qui range ses Heures derrière, par ordre, comme on charge un canon. Tu vois la haie des archers, la porte de bronze, un petit éclair de cuirasse.",
      { if: { not: SORTIS }, text: "Tu cherches le bord. La rue aux Oies, la borne. Josse Noyer y est, debout, une main en visière. Il a les épaules libres." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { not: { has: "j:line_consigne" } }] }, text: "Tu te trompes : il a toujours sa charge. Deux nattes dépassent de son chapeau. Elle regarde l'aiguille, et l'aiguille est entre elle et toi. Si le verre était clair, vous vous verriez." },
      { if: SORTIS, text: "Tu cherches le bord. La rue aux Oies, la borne. Un garçon boulanger y est monté. Il mange une couronne." },
      "Au-delà des toits, le pré de la Foire, vide, avec ses cinq cents charrettes ; le bassin ; et la ligne des peupliers, qui s'en va vers le couchant comme une phrase qu'on n'a pas finie.",
      "La grande aiguille passe sur ta figure. Tu sens son ombre, froide, d'un instant.",
    ],
    choices: [{ back: "K14j_galerie" }] },

  K14j_galerie_sud: { act: "IV", title: "La face qu'on ne regarde pas", place: "tour", ambiance: "chateau", fx: { flag: "j:vu_echelons" },
    text: [
      "Tu suis le balcon, la main à la barre. La face du couchant, puis celle du midi. Le bruit de la place s'éteint derrière l'angle. De ce côté, il n'y a sous toi que des toits de couvent, un jardin de simples, et des pigeons.",
      "Le petit cadran du midi est sans dorure. Au-dessus de lui, scellés dans la pierre, des barreaux de fer montent en ligne droite. Tu les comptes d'en bas : vingt et un, avec un trou entre le sixième et le huitième, et deux coulées de rouille.",
      "Ils passent contre une fenêtre étroite, à croisée de plomb : la Chambre haute a huit baies, et celle-ci est la seule qu'on puisse toucher du dehors. Plus haut, ils finissent sous des lames de bois inclinées, grises, larges d'une main. Ce sont les abat-sons. Derrière, il y a la cloche.",
      { if: { not: CLEF_S }, text: "La clef de la Cage te manque, et ce chemin-ci se passe de serrure." },
      { if: TARD, text: "La porte de là-haut est fermée, à cette heure. Si tu veux voir la Reine avant midi, c'est par cette vitre." },
      "Les couvreurs y montent une fois l'an, encordés. Tu n'as pas de corde.",
    ],
    choices: [{ back: "K14j_galerie" }] },

  K14j_palier: { act: "IV", title: "Le dernier palier", place: "tour", ambiance: "chateau", backName: "le dernier palier",
    text: [
      { first: true, text: "La vis finit sur un palier rond, dallé, que le puits du fil traverse en son milieu, cerclé d'un anneau de cuivre. Le fil y passe, et monte encore, à travers le plafond. On est sous la cloche : on le sait à la qualité du silence, qui a ici une épaisseur de bronze." },
      { first: true, text: "Il y a deux portes. Celle de droite est de chêne, haute, cloutée, avec les armes d'Aurime : la Chambre haute. Celle de gauche est basse, en fer, noire, percée d'une serrure dont l'entrée a la forme d'un trèfle. Derrière elle, on devine une échelle." },
      { first: true, if: { not: TARD }, text: "La porte de chêne est entrouverte. Il en sort du jour, et une voix d'enfant, qui compte quelque chose." },
      { first: true, if: TARD, text: "La porte de chêne est fermée. La clef est en dedans : on en voit le bout, par le trou, qui bouche la lumière." },
      { again: true, if: { not: { seen: "K14j_haute_ferme" } }, text: "Le palier rond, l'anneau de cuivre où passe le fil. La porte de chêne, la porte de fer." },
      { again: true, after: "K14j_haute_ferme", text: "Le palier rond, l'anneau de cuivre où passe le fil. La porte de chêne est fermée, à présent, la clef en dedans." },
    ],
    choices: [
      { label: "Pousser la porte de chêne", hide: { any: [TARD, { seen: "K14j_haute_ferme" }] }, to: "K14j_haute", big: true },
      { label: "Frapper à la porte de chêne", hide: { any: [{ not: TARD }, { seen: "K14j_porte_close" }] }, to: "K14j_porte_close" },
      { label: "La porte de fer : la clef au panneton en trèfle", hide: { not: CLEF_S }, to: "K14j_cage", big: true },
      { label: "Les barreaux de la face du midi, par la galerie du grand cadran", hide: { all: [CLEF_S, { not: TARD }] }, to: "K14j_galerie" },
    ] },

  K14j_porte_close: { act: "IV", title: "La clef en dedans", place: "tour", ambiance: "chateau",
    text: [
      "Tu frappes. Trois coups, du plat de la main. Le chêne est épais ; le bruit s'y perd.",
      "Un pas, de l'autre côté. Une robe. « Qui est là ? » C'est une voix de femme, basse, tenue, qui n'a pas l'habitude qu'on frappe à ses portes.",
      { after: "j:promis_reine", text: "Tu dis qui. Tu passes sous la porte, à plat, un anneau d'or pâle à petite pierre bleue. Il y a un silence. La bague ne revient pas." },
      { after: "j:promis_reine", text: "« Vous êtes venu{e}. » La voix est tout contre le bois. « J'ai fermé. J'ai juré au Chapitre, sur la Coutume, que cette porte ne s'ouvrirait qu'après le douzième coup, et je suis, de toute ma maison, la seule personne qui tienne encore ce qu'elle jure. » Un temps. « La fenêtre du midi. J'y ai vu passer des couvreurs, enfant, quand le feu Roi me montait ici. Elle a une crémone. Je sais l'ouvrir. »" },
      { before: "j:promis_reine", text: "Tu dis ton nom, qui ne lui apprend rien, et que tu es de la Guilde, ce qui est presque vrai. « Le service de l'horloge se fait en bas, répond la voix. Monsieur le sous-maître est redescendu. J'ai fermé : la Coutume veut la Reine seule, et l'on m'a assez dit ce matin que je ne respectais plus rien. » Le pas s'éloigne. Puis il revient. « Si c'est grave, il y a une fenêtre, au midi. Les couvreurs y passent. Je ne vous ai rien dit. »" },
      "Derrière la porte, une petite voix demande qui c'était. On lui répond : *personne, mon cœur. Le vent.*",
    ],
    choices: [{ back: "K14j_palier" }] },
});

Object.assign(P, {
  K14j_haute: { act: "IV", title: "La Chambre haute", place: "tour", ambiance: "chateau", hub: true, backName: "le milieu de la chambre",
    text: [
      { first: true, text: "C'est une chambre ronde, à huit baies, pleine d'un jour qui vient de partout. On y est au-dessus des toits, au-dessus des pigeons, dans le vent. Les rois d'Aurime y montent une fois l'an recevoir midi ; le reste du temps, elle est aux araignées, et on a balayé hier." },
      { first: true, text: "Du plafond descend une corde, grosse comme le poignet, lustrée par les mains. Elle traverse la chambre de haut en bas, et elle finit à un anneau de fer scellé dans le dallage, où on l'a nouée. Tout près d'elle, par le même trou du plafond, passe le fil de laiton, qui continue vers le bas à travers son anneau de cuivre. Et il y en a un autre, plus mince encore, le long du mur, avec une poignée d'ivoire : le fil du timbre." },
      { first: true, text: "On a monté un petit lit de bois blanc, qu'on a mis sous la baie du levant. Une enfant y est assise, en robe de cérémonie, les pieds pendants. Elle a ôté ses souliers." },
      { first: true, text: "La Reine est debout au milieu de la chambre, une clef à la main. Elle allait fermer. Elle te regarde entrer avec le calme des personnes à qui il n'arrive plus rien d'imprévu depuis longtemps, et qui s'en étonnent encore." },
      { again: true, text: "La chambre ronde, les huit baies, la corde nouée à son anneau. L'enfant sur le lit blanc. La Reine, sa clef à la main." },
    ],
    choices: [
      { label: "La Reine", hide: { seen: "K14j_reine_haute" }, to: "K14j_reine_haute" },
      { label: "L'enfant, sur le lit blanc", hide: { seen: "K14j_aelis_haute" }, to: "K14j_aelis_haute" },
      { label: "Tirer de ta chemise l'écorce rousse, et dire la manière", hide: { not: ECORCE_J }, fx: { drop: "ecorce_fievrier", flag: "monde:aelis_ecorce", ep: ["histoire", 800] }, to: "K14j_ecorce_haute" },
      { label: "Lui rendre sa bague", hide: { any: [{ not: { item: "bague_reine" } }, { not: { seen: "K14j_reine_haute" } }] }, fx: { drop: "bague_reine", flag: "j:bague_rendue", ep: ["perso", 600] }, to: "K14j_bague" },
      { label: "Le fil à poignée d'ivoire", hide: { any: [{ seen: "K14j_fil_timbre" }, { not: { seen: "K14j_reine_haute" } }] }, to: "K14j_fil_timbre" },
      { label: "Prendre congé : la demie va sonner", to: "K14j_haute_ferme", big: true },
    ] },

  K14j_reine_haute: { act: "IV", title: "Seule avec l'héritière", place: "tour", ambiance: "chateau",
    text: [
      { after: "j:promis_reine", text: "« Vous y êtes. » Elle constate, sans sourire, qu'on lui a tenu parole, et cela lui arrive assez rarement pour qu'elle prenne le temps de le regarder. « Je me suis dit, en montant : si cette personne n'est pas sur le palier, je saurai que j'ai rêvé toute cette semaine. »" },
      { after: "j:refuse_reine", text: "« C'est vous. » Elle n'a pas de colère. « Vous m'avez refusé, l'autre jour, et vous montez me voir aujourd'hui. Les gens qui refusent reviennent toujours : ils veulent savoir si l'on a suivi leur conseil. »" },
      { before: ["j:promis_reine", "j:refuse_reine"], text: "« On ne monte pas ici. » Elle le dit sans hauteur, comme on indique un chemin. « Vous êtes de la Guilde ? Vous avez leurs mains. Dites vite : j'ai une porte à fermer, et une Coutume sur les bras. »" },
      { if: RENONCE, text: "Elle te montre, sur l'appui d'une baie, un papier déplié, avec son cachet rouge. « J'ai défait ma signature. Hier soir, de ma main, devant mon confesseur. Monsieur Aubespin l'a reçu : il m'a fait répondre qu'il *prenait acte*, et qu'il aurait l'honneur de m'accompagner jusqu'au palier. Il m'y a accompagnée. Il a été parfait. » Elle a un pli au coin de la bouche. « Je suis montée pour la Coutume, et pour lui dire non en face. Il ne m'a pas laissé le lui dire : il a parlé du beau temps pendant deux cent quatre-vingts marches. »" },
      { if: { all: [{ not: RENONCE }, { has: "j:reine_tient" }] }, text: "« Vous m'avez dit ce que vous aviez à dire, au Palais. Je vous ai entendu{e}. » Elle regarde l'enfant. « Je l'ai entendue tousser toute la nuit, aussi. On pèse comme on peut. J'ai signé pour une chambre, une heure qu'on arrête, et une clef pour la rouvrir le jour où l'on saura guérir. Si l'on m'a menti sur la clef, c'est à moi qu'on a menti, et je le porterai. »" },
      { if: { all: [{ not: RENONCE }, { not: { has: "j:reine_tient" } }] }, text: "Elle suit ton regard, vers le lit. « Elle a huit ans. Les médecins m'en donnent encore un, et ils me le donnent comme on fait l'aumône. On m'a offert d'arrêter l'heure dans cette chambre jusqu'à ce qu'on sache la guérir. Vous auriez dit non, vous ? » Elle n'attend pas la réponse. « Personne ne dit non. On dit *il faut réfléchir*, et l'on signe le lendemain. »" },
      "Elle fait tourner la clef entre ses doigts. « Vous avez une chose à me dire. Vous l'avez sur la figure depuis la porte. »",
    ],
    choices: [
      { label: "Lui dire ce qui s'arrêtera, et pour combien de temps", fx: { flag: "monde:reine_sait", ep: ["histoire", 800] }, to: "K14j_reine_verite" },
      { label: "Te taire : elle ne peut plus rien y changer", to: "K14j_haute" },
    ] },

  K14j_reine_verite: { act: "IV", title: "Une lieue, soixante ans", place: "tour", ambiance: "chateau",
    text: [
      "Tu le dis. La barre, qui descendra à fond. La ville, et une lieue autour. Quarante mille personnes, la bouche ouverte sur un chiffre. Tu dis le nombre d'années, et tu le dis une seule fois.",
      { if: AVERTIE, text: "Elle ne se récrie pas. Tu le lui avais dit, au Palais, à mots couverts, et elle avait rangé cela avec les choses qu'on ne peut pas croire et qu'on ne parvient pas à oublier. Elle le ressort. Elle le regarde." },
      { if: { not: AVERTIE }, text: "Elle te regarde longuement. Elle cherche le fou, ou l'intrigant, et ne trouve ni l'un ni l'autre : elle trouve quelqu'un de fatigué, qui a des toiles d'araignée dans le col et qui ne demande rien." },
      "« Soixante. » Elle va à la baie du couchant. On y voit la place, les toits, les peupliers. « Ils seront tous là. Comme ils sont. » Sa main se pose sur la pierre. « Et moi ici, avec elle. Nous ne le saurons pas. On s'endort ainsi, n'est-ce pas ? Sans le savoir ? »",
      "Tu dis que oui. Qu'on ne sent rien. Qu'il y en a qui rient.",
      { if: RENONCE, text: "« J'avais dit non. » Sa voix ne tremble pas. « Je veux que cela soit su. Vous qui avez l'air de savoir ce qu'on dira de nous : qu'on dise que la Reine avait dit non, la veille, par écrit, et qu'on l'a prise quand même. » Elle plie le papier au cachet rouge, et le glisse dans son corsage. « Il sera sur moi. Qu'on le trouve. »" },
      { if: { not: RENONCE }, text: "« Je l'ai signé. » Sa voix ne tremble pas. « Pour une chambre. On m'a prise au mot, et l'on a pris la ville avec. Vous qui avez l'air de savoir ce qu'on dira de nous : qu'on m'excuse ou non, peu importe. Je vous demande qu'on sache que j'ai cru signer pour une enfant. »" },
      "Elle se retourne. Elle est très pâle, et très droite. « Peut-on encore l'empêcher ? » Tu dis qu'un vieil homme est descendu essayer. Elle comprend ce que veut dire *essayer.*",
      "« Alors il reste à savoir comment on se tient. » Elle regarde la baie du midi, la plus étroite. « Au douzième coup, la Reine paraît à la fenêtre : c'est la Coutume. J'irai. S'il n'y a pas de douzième, on me trouvera en chemin. Je préfère qu'on me trouve en chemin que sur une chaise. »",
    ],
    choices: [{ back: "K14j_haute" }] },

  K14j_aelis_haute: { act: "IV", title: "Huit ans, pieds nus", place: "tour", ambiance: "chateau",
    text: [
      { after: "monde:aelis_ecorce", text: "Elle a posé sur le lit, déballée de son linge, une pendule de voyage, et elle en a ouvert le dos avec une épingle à cheveux. Elle compte les dents d'une roue, à mi-voix. Elle a les joues roses d'avoir monté." },
      { before: "monde:aelis_ecorce", text: "Elle est assise très droite, les mains sous les cuisses, pour ne pas montrer qu'elles tremblent. Elle est grise jusqu'aux lèvres. Elle a monté cent marches sur ses pieds, et elle en est plus fière que de tout son royaume." },
      { after: "j:aelis_vue", text: "« C'est toi. » Elle te reconnaît tout de suite ; les enfants malades n'oublient pas les figures neuves, ils en voient trop peu. « Tu es monté{e} pour la cloche ? Maman dit qu'elle sonnera si fort que je la sentirai dans mon ventre. Je n'ai pas peur. J'ai mis mes mains là, pour voir. »" },
      { before: "j:aelis_vue", text: "Elle te considère gravement. « Tu n'es pas de chez nous. Tu as des habits de dehors. C'est bien, dehors ? » Elle n'attend pas. « Je vais entendre la cloche de tout près. Maman dit que je la sentirai dans mon ventre. Je n'ai pas peur. »" },
      { after: "j:aelis_line", text: "« Et la fille qui ouvre les pendules ? Celle de neuf ans ? Tu avais dit que tu me la montrerais. » Tu dis qu'elle est en bas, sur les épaules de son père, ou sur une route. « Elle voit le cadran ? » Elle le voit. « Alors nous regardons la même aiguille. Dis-lui que j'ai ouvert la mienne toute seule. »" },
      "Elle regarde la corde, qui descend du plafond. « C'est par là qu'on la fait sonner ? — Par là, quand on la sonne à la main. — Je peux tirer ? — Elle est trop lourde. Il faut un homme. » Elle mesure la corde, puis toi. « Toi, tu pourrais. »",
      "Tu ne réponds pas. Elle balance ses pieds nus. « Après, on redescend, et il y a le dîner des pauvres, et la comédie. Je veux voir la comédie. Il y a une porte où il n'y a personne, il paraît. C'est bête. Il devrait y avoir quelqu'un. »",
    ],
    choices: [{ back: "K14j_haute" }] },

  K14j_ecorce_haute: { act: "IV", title: "La première cuillerée", place: "tour", ambiance: "chateau",
    text: [
      "Tu poses l'écorce sur l'appui de la baie : un rouleau roux, sec, qui sent le poivre et la terre. Tu dis d'où cela vient, sans dire quand. Qu'on en fait une décoction, brune, amère. Dix-neuf prises. Qu'on en guérit.",
      "La Reine laisse le rouleau où il est. Elle le regarde comme on regarde une lettre dont on redoute l'écriture.",
      "« On en guérit. » Elle répète les trois mots, un par un. « Vous me dites cela ici. Aujourd'hui. Dans cette chambre où je l'ai montée pour qu'on arrête son heure, faute de savoir la guérir. » Elle rit, d'un rire sans voix, qui lui met la main sur la bouche. « Dieu a de l'esprit. Je ne le lui connaissais pas. »",
      "Il n'y a pas de feu, sous une cloche. Tu râpes l'écorce à ton couteau, dans le gobelet d'argent de l'enfant, avec de l'eau de la carafe. C'est moins que la décoction, et mieux que rien : c'est une prise, la première, et il en restera dix-huit à qui saura lire le papier que tu laisses.",
      "Aélis boit. Elle fait une grimace qui lui prend toute la figure. « C'est horrible. » Elle regarde sa mère, pour savoir s'il faut finir. La Reine s'est agenouillée devant le lit. Elle tient le gobelet à deux mains, sous le menton de sa fille, et elle dit : « Encore, mon cœur. Tout. » Elle a la voix de quelqu'un qui vient de trouver, à midi moins le quart, une raison de voir venir le lendemain.",
      "Elle se relève. Elle met le rouleau dans la manche de l'enfant, avec le papier. « Si l'on nous trouve, dit-elle, qu'on trouve cela aussi. »",
    ],
    choices: [{ back: "K14j_haute" }] },

  K14j_bague: { act: "IV", title: "Trop grande pour tous les doigts", place: "tour", ambiance: "chateau",
    text: [
      "Tu tires l'anneau de ta chemise : de l'or pâle, une petite pierre bleue. Tu le lui tends sur ta paume.",
      "« J'avais promis de vous aider à arrêter son heure. Je ne tiendrai pas cela. Je suis venu{e} vous le dire avant que la porte se ferme, pour que vous ne m'attendiez pas. »",
      "Elle regarde la bague. Elle ne la prend pas tout de suite.",
      "« Vous êtes la seule personne, de toute cette semaine, qui me rende quelque chose. » Elle la prend. Elle la passe à son annulaire, où elle tourne. « Elle était au feu Roi. Elle a toujours été trop grande. Je la donnais aux gens dont j'avais besoin : c'était une façon de ne pas la perdre. »",
      "« Que ferez-vous, alors, puisque vous ne m'aidez pas ? »",
      "Tu regardes le plafond, où passe la corde. « Je serai au-dessus de vous. Sous la cloche. Je tâcherai qu'un jour on puisse vous la rendre, votre heure, à toutes les deux, au lieu de vous la garder. »",
      "Elle suit ton regard. Elle a compris la moitié, et elle est d'une race qui se contente de la moitié quand elle est dite en face. « Au-dessus. » Elle hoche la tête. « Je saurai donc qu'il y a quelqu'un. Cela change une chambre. »",
    ],
    choices: [{ back: "K14j_haute" }] },

  K14j_fil_timbre: { act: "IV", title: "Un coup, deux coups", place: "tour", ambiance: "chateau",
    text: [
      "« C'est par là que je lui parle », dit la Reine. Elle pose deux doigts sur la poignée d'ivoire. « Un coup : je suis entrée. Je l'ai tiré tout à l'heure. Deux coups : j'ai fermé, faites. »",
      { if: RENONCE, text: "« Il m'a dit qu'il y avait un troisième signal, que je n'aurais pas à donner. J'ai cherché toute la nuit ce qu'il pouvait vouloir dire. » Elle te regarde. « Je vais le donner. Si deux veulent dire *faites*, il faut bien que trois veuillent dire quelque chose. »" },
      { if: RENONCE, text: "Elle tire. Une fois, deux fois, trois. On n'entend rien ici : la clochette est à trois cent soixante marches. Elle garde la main sur l'ivoire." },
      { if: RENONCE, text: "Le fil remue sous ses doigts. Un seul petit coup, sec, venu d'en bas, qui remonte toute la Tour pour lui secouer le poignet." },
      { if: RENONCE, text: "« Il a répondu. » Elle a retiré la main comme d'une bête. « Un coup. Que veut dire un coup, de bas en haut ? — Je l'ignore, Madame. — Moi aussi. Il ne m'a appris que les miens. » Elle regarde la poignée d'ivoire, qui tremble encore. « Je crois qu'il a dit : *j'ai entendu.* C'est ce que répondent les gens qui ne feront rien de ce qu'on leur demande. »" },
      { if: { not: RENONCE }, text: "« Il y a un troisième signal, m'a-t-il dit, que je n'aurai pas à donner. Je ne lui ai pas demandé lequel. On ne demande pas tout à un homme qui vous rend un service. » Elle retire sa main. « Je tirerai deux fois quand vous serez sorti{e}. »" },
      { if: { all: [{ not: RENONCE }, { has: "monde:reine_sait" }] }, text: "Elle regarde l'ivoire. « Et si je ne tire pas ? » Tu dis qu'il n'attend pas son signal. Qu'il a les mains libres depuis ce matin. « Alors je tirerai trois fois. Pour qu'il sache, en bas, que quelqu'un a compris. Cela ne l'arrêtera pas. Cela lui gâtera peut-être son midi. »" },
    ],
    choices: [{ label: "Lui laisser le fil", fx: { flag: "j:signal_trois" }, hide: { not: { any: [RENONCE, { has: "monde:reine_sait" }] } }, to: "K14j_haute" },
      { label: "Lui laisser le fil", hide: { any: [RENONCE, { has: "monde:reine_sait" }] }, to: "K14j_haute" }] },

  K14j_haute_ferme: { act: "IV", title: "La demie", place: "tour", ambiance: "chateau",
    text: [
      "La Reine t'accompagne à la porte. C'est une chose qu'elle n'a faite, de sa vie, que pour des ambassadeurs.",
      { after: "monde:reine_sait", text: "Sur le seuil, elle s'arrête. « Quand cela viendra, je la tiendrai contre moi. Du côté gauche. Elle aime ce côté. » Elle a décidé, sans te demander si cela se peut." },
      { after: "j:bague_rendue", text: "Elle a ta bague au doigt, qui tourne. Elle la retient du pouce." },
      "« Allez. » Elle te regarde une dernière fois, avec une attention entière, comme on regarde quelqu'un dont on veut pouvoir donner le signalement. « Je ne sais pas qui vous êtes. J'ai fini par trouver que cela n'avait pas d'importance. »",
      "Tu sors. Derrière toi, la porte de chêne se ferme, pesamment. Au-dessus, quelque chose se déclenche, et la Patiente dit la demie : un coup, un seul, qui tombe sur le palier comme une dalle. Tu l'as dans les genoux.",
      "Dans le silence qui suit, on entend une clef tourner, deux fois, de l'autre côté. Puis une petite voix : « Maman, pourquoi tu fermes ? » Et la réponse, calme : « Pour que personne ne nous dérange, mon cœur. »",
    ],
    choices: [{ back: "K14j_palier" }] },

  K14j_fenetre: { act: "IV", title: "La croisée du midi", place: "tour", ambiance: "chateau", fx: { flag: "j:vu_fenetre", ep: ["histoire", 600] },
    text: [
      "Le premier barreau est à hauteur de ta poitrine. Il est froid, rugueux, et il tient. Tu passes par-dessus la barre du balcon. Tu ne regardes pas en bas : en bas, il y a un jardin de simples, grand comme un mouchoir.",
      "Tu montes. Les barreaux sont à une coudée l'un de l'autre, faits pour des jambes d'homme. Le vent, de ce côté, vient de la plaine ; il te colle au mur, puis il t'en décolle. Quatre. Cinq. Six.",
      "Le septième manque. Il y a deux trous dans la pierre, et, plus haut, le huitième, à une enjambée qui se fait. Tu la fais. Pendant le temps qu'elle dure, tu ne tiens à cette Tour que par dix doigts.",
      { outcome: "lose", text: "Ton pied cherche le huitième, et le manque. Tu pends. Le fer te scie les paumes, ton genou cogne la pierre, et quelque chose, dans ton épaule, se déplace avec un bruit que tu entends du dedans. Tu remontes à la force des bras, en pleurant de rage. Tu y es." },
      "Au douzième barreau, il y a la fenêtre. Elle est à ta gauche, à toucher : une croisée étroite, à losanges de plomb, avec une crémone de cuivre, en dedans.",
      "Tu regardes. La chambre est ronde, pleine de jour. Une corde la traverse de haut en bas. Sur un petit lit blanc, une enfant est assise, pieds nus ; et, debout au milieu, une femme en blanc, qui te tourne le dos.",
      "L'enfant te voit la première. Elle ouvre la bouche. Elle tend le doigt.",
      "La Reine se retourne. Elle voit, à sa fenêtre, à cent cinquante pieds du sol, une figure, des mains, des toiles d'araignée. Sans un cri, elle prend l'enfant contre sa hanche, du bras gauche, et elle vient vers la croisée.",
      { after: "j:promis_reine", text: "Tu colles ta paume au carreau. Elle te reconnaît. Elle fait un pas de plus, et elle lève la main vers la crémone." },
      { before: "j:promis_reine", text: "Tu colles ta paume au carreau, ouverte, pour montrer qu'elle est vide. Elle hésite. Puis elle fait un pas de plus, et elle lève la main vers la crémone." },
      "Au-dessus de toi, dans la Cage, quelque chose se met à ronfler : les poids de la sonnerie, qu'on arme. Il n'est plus temps d'entrer par une fenêtre. Tu lui montres le haut, du menton. Tu montes.",
      "Tu la laisses ainsi : à un pas de la croisée, le bras tendu, l'enfant à la hanche. Tu sais, par une écriture en bâtons, qu'elle n'achèvera pas ce geste.",
    ],
    choices: [{ label: "Les neuf derniers barreaux", to: "K14j_abat_sons", big: true }] },

  K14j_abat_sons: { act: "IV", title: "Entre deux lames", place: "tour", ambiance: "chateau",
    text: [
      "Les barreaux finissent sous les abat-sons : de grandes lames de chêne, grises, inclinées comme les ardoises d'un toit, avec entre elles un jour d'une main et demie. C'est fait pour laisser sortir le bruit. On n'a pas songé à ce qui pourrait entrer.",
      "Tu passes la tête, puis une épaule. Le bois est tendre, pourri de pluie par endroits ; une lame cède, d'un pouce, avec un craquement que personne n'entend. Tu te vides de ton air. Tu passes.",
      "Tu tombes à l'intérieur, sur un plancher, dans une odeur de graisse, de fiente et de métal.",
    ],
    choices: [{ label: "Lever la tête", to: "K14j_cage", big: true }] },

  K14j_cage: { act: "IV", title: "Sous la Patiente", place: "tour", ambiance: "chateau", hub: true, backName: "le plancher de la Cage",
    text: [
      { first: true, text: "Elle est au-dessus de toi. Elle emplit tout." },
      { first: true, text: "Tu savais qu'elle était grande. Tu ne savais pas ce que c'est qu'une cloche de douze pieds quand on est dessous : une nuit de bronze, ronde, verte et noire, pendue à des poutres plus grosses que des arbres, et qui descend jusqu'à deux pieds de ta tête. Elle a quatre cents ans. Elle a, sur la lèvre, à l'endroit où frappe le marteau, une place claire, polie, large comme une assiette : l'usure d'un million de midis." },
      { first: true, text: "Le marteau est à côté, levé, au bout d'un bras de chêne. Il a la tête d'une enclume. Le fil de laiton y monte, par le plancher, et s'y attache à un déclic gros comme le poing. Par le même trou passe la corde : elle pend du joug de la cloche, lustrée, et s'en va vers le bas, vers la chambre où il y a une Reine." },
      { first: true, text: "Tout autour, les abat-sons découpent le pays en tranches de lumière. Il y a un banc, contre la charpente. C'est tout. On t'avait dit : *soyez dessous.* Tu y es." },
      { again: true, text: "La cloche, le marteau levé, la corde. Le pays, en tranches, entre les lames." },
      { again: true, after: "monde:nom_cage", text: "Sur le banc, sous un nom de 481, il y a le tien." },
    ],
    choices: [
      { label: "Toucher le bronze", hide: { seen: "K14j_cage_cloche" }, to: "K14j_cage_cloche" },
      { label: "Regarder le pays, entre les lames", hide: { seen: "K14j_cage_vue" }, to: "K14j_cage_vue" },
      { label: "Le banc des sonneurs", hide: { seen: "K14j_cage_noms" }, to: "K14j_cage_noms" },
      { label: "T'asseoir sous la cloche, et ouvrir le Cahier", to: "K14j_cage_cahier", big: true },
    ] },

  K14j_cage_cloche: { act: "IV", title: "Un million de midis", place: "tour", ambiance: "chateau",
    text: [
      "Tu lèves la main. Le bronze est froid, grenu, et il n'est pas muet : sous ta paume, il y a un frémissement, très bas, continu, comme le ronron d'une bête énorme qui dort. Elle garde quelque chose de chaque coup qu'elle a donné. Elle n'a jamais tout à fait fini de sonner depuis quatre cents ans.",
      "Tu fais le tour, courbé{e}. Sur la panse, en lettres hautes d'une main, fondues avec elle, il y a la devise des Fondateurs, que tout enfant d'Aurime sait par cœur sans l'avoir lue : on la dit aux baptêmes. Les lettres sont mangées de vert. Ton doigt les suit.",
      "Au bord, du côté opposé au marteau, le bronze est neuf, intact, mat. Rien ne l'a jamais touché là. Tu penses qu'une cloche a deux côtés, comme une heure : celui qu'on frappe, et celui qui attend.",
      "Tu retires ta main. Elle sent le métal. Elle le sentira longtemps.",
    ],
    choices: [{ back: "K14j_cage" }] },

  K14j_cage_vue: { act: "IV", title: "Jusqu'au septième arbre", place: "tour", ambiance: "chateau",
    text: [
      "Tu colles ta figure entre deux lames, du côté du couchant. Le vent te prend les yeux.",
      "Tout le pays est là, d'un seul tenant, comme sur la table d'un géomètre. La place, à tes pieds, grande comme une assiette, avec sa poussière de têtes. Les toits, bleus, bruns, par vagues. La ville basse, ses canaux qui luisent. Le mur. Le pré de la Foire, et ses charrettes rangées comme des dominos.",
      "Puis le bassin, et le chemin du canal : une règle posée sur la plaine, entre deux rangs de peupliers. Tu les comptes. Un. Trois. Cinq. Le septième est plus grêle.",
      { if: SORTIS, text: "Le chemin est vide, jusqu'où porte l'œil. Très loin, vers Roquebise, il y a une poussière qui s'en va, de la grosseur d'un grain, et qui pourrait être une charrette. Elle est dehors depuis trois heures. Elle le sera toujours." },
      { if: { all: [{ not: SORTIS }, ATTELE] }, text: "Passé le septième, à cinquante pas, près d'une chose qui doit être un ponceau, il y a un point bleu, arrêté. On ne distingue pas s'il y a quelqu'un dessus. Il y a quelqu'un. Il y a deux personnes, dont une petite, qui regardent de ce côté-ci, et qui attendent une cloche." },
      { if: { all: [{ not: SORTIS }, ATTELE, { has: "monde:girard_jure" }] }, text: "Tu regardes le point bleu. Il ne bouge pas. Il a juré sur la tête d'une jument, et tu ne sauras pas d'ici s'il tient." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { has: "j:line_consigne" }] }, text: "Entre le cinquième arbre et le sixième, il y a quelque chose de clair, de minuscule, qui avance. Cela marche. Cela s'arrête à chaque tronc, le temps de le toucher, et cela repart. Tu comprends : elle compte les arbres à voix haute, comme tu le lui as dit, et elle met la main dessus pour ne pas se tromper." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { not: { has: "j:line_consigne" } }] }, text: "Le chemin est vide. Tu sais pourtant qu'avant le dernier coup une enfant y passera, portée par quelqu'un, et qu'on la posera là pour qu'elle compte des arbres. Tu regardes la place où elle n'est pas encore." },
      "Au-delà du septième peuplier, la plaine continue, blonde, tranquille, avec des villages. C'est le bord. D'ici, on ne le voit pas : rien ne le marque. Il faudra soixante ans de pas dans la poussière pour qu'on apprenne où il passe.",
    ],
    choices: [{ back: "K14j_cage" }] },

  K14j_cage_noms: { act: "IV", title: "Le banc des sonneurs", place: "tour", ambiance: "chateau",
    text: [
      "Le banc est de chêne, noir d'usage, creusé en trois endroits par des gens qui s'y sont assis pendant des siècles pour attendre l'heure de faire du bruit. Le dossier est couvert de noms.",
      "On les a taillés au couteau, à la pointe, au clou, l'un sous l'autre, avec une date : les sonneurs jurés de la Patiente, du temps où on la sonnait à bras. *Colin, 212. Mahé le Sourd, 260. Jacquet, Jacquet son fils, Jacquet.* Il y en a quarante. Ils ont tous la même faute d'orthographe au mot *sonneur*, qu'ils se sont transmise avec la charge.",
      "Le dernier est plus soigné que les autres. *Thibaut, 481.* Et dessous, de la même pointe, un petit dessin : deux oreilles, avec une croix sur chacune.",
      { after: "j:sait_cire", text: "Thibaut avait de la cire. Il est resté debout sous cette cloche pendant que la ville s'arrêtait trois psaumes, et il est monté rendre le coup. On lui doit qu'il y ait eu un an 482. Il a signé d'une paire d'oreilles." },
      "Après lui, le bois est nu. On a mis le fil, et la cloche n'a plus eu besoin de personne.",
      "Tu as ton couteau.",
    ],
    choices: [
      { label: "Tailler ton nom sous celui de Thibaut, sans date", hide: { has: "monde:nom_cage" }, fx: { flag: "monde:nom_cage", ep: ["perso", 500] }, to: "K14j_cage_nom" },
      { back: "K14j_cage" },
    ] },

  K14j_cage_nom: { act: "IV", title: "Sans date", place: "tour", ambiance: "chateau",
    text: [
      "Le chêne est dur. Il faut appuyer. Tu fais les lettres une à une, droites, sans fioriture, comme Line t'a appris à graver un fond de boîtier : *on signe pour qu'on sache à qui se plaindre.*",
      "*{hero}.* Tu laisses la date : tu ne saurais laquelle mettre.",
      "Dessous, tu hésites. Thibaut a mis des oreilles barrées. Toi, tu n'auras pas de cire : il faut que tu entendes. Tu graves donc une oreille, une seule, ouverte, sans croix.",
      "Tu souffles la sciure. Quelqu'un lira cela. Tu sais même qui, et dans combien de temps, et qu'il faudra qu'on le lui épelle.",
    ],
    choices: [{ back: "K14j_cage" }] },

  K14j_cage_cahier: { act: "IV", title: "Midi moins le quart", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'assois sur le plancher, au milieu, sous la bouche de la cloche. Elle te fait un ciel. Le marteau, levé, est à la hauteur de ton épaule.",
      "Par le trou où passent la corde et le fil, on voit, en se penchant, un rond de jour : la Chambre haute. Et plus bas, par le puits de la vis, très loin, une lueur de perle, de la grosseur d'un pois. C'est le fond. Il y a trois cent soixante marches entre ce pois et toi, et un fil.",
      "Le fil tremble. Il se tend, se relâche. En bas, la barre bat.",
      "Tu ouvres le Cahier sur tes genoux.",
    ],
    choices: [{ label: "Écrire", to: "M14", big: true }] },

  K14j_tantot: { act: "IV", title: "Midi moins dix", place: "tour", ambiance: "chateau",
    text: [
      "Tu fermes le Cahier. Tu le glisses dans ta chemise, à plat, contre la peau.",
      "Les poids de la sonnerie sont armés. On les entend, dans la charpente, tirer sur leurs câbles avec de petits craquements. Le marteau a bougé d'un doigt : il est en prise.",
      "Et il y a un bruit sur l'échelle.",
      "C'est un pas jeune, long, régulier, qui monte sans se cacher, parce que celui qui le fait ne s'entend pas marcher. Une clef tourne dans la porte de fer. Elle tourne mal ; on la force ; elle cède. Il y avait donc une troisième personne, dans cette Tour, qui avait une clef au panneton en trèfle : on la lui a passée en bas, ôtée d'une ceinture.",
      "La trappe se lève. Il en sort une tête blonde, un bandeau gris, des épaules. Baudouin Passavant se hisse dans la Cage, se redresse sous la cloche, et te trouve assis{e} là.",
      "Il a un couteau de sellier à la main, court, large. Il regarde la corde.",
    ],
    choices: [{ label: "Te lever", to: "K14j_baudouin", big: true }] },

  K14j_baudouin: { act: "IV", title: "Le premier des neuf", place: "tour", ambiance: "chateau",
    text: [
      "Vous êtes debout, face à face, courbés tous deux sous la lèvre de bronze. Il a une tête de plus que toi. Il a de la cire aux oreilles, et il ne t'entendra pas, quoi que tu dises.",
      "Il te montre la corde, de la pointe. Puis il se passe le plat de la lame en travers de la gorge, sans méchanceté : c'est un geste d'atelier, qui veut dire *couper.* On l'a envoyé pour cela. Qu'il n'y ait plus, là-haut, une corde où pendre un coup.",
      { after: "j:assaut_gagne", text: "Il te reconnaît. Quelque chose passe sur sa figure : l'assaut de la veille, trois touches, le silence de trente apprentis. Il s'en souvient. Il t'en veut ou il t'estime, et le loisir de trier lui manque." },
      { before: "j:assaut_gagne", text: "Il te reconnaît. Il a un demi-sourire, pour une galerie qui n'est pas là. Il t'a déjà lu{e} une fois, dans une cour, en trois passes." },
      "Sur le banc des sonneurs, il y a une mailloche de buis, à long manche, dont on se servait pour dégourdir le marteau par temps de gel.",
    ],
    choices: [
      { label: "Lever la main, la paume à plat", hide: { not: SIGNES },
        test: { dom: "social", diff: 12, label: "Le signe de la table des neuf", help: [{ if: { has: "j:assaut_gagne" }, v: 20 }, { if: { voie: "diseur" }, v: 10 }, { if: { has: "j:entre_dixieme" }, v: 5 }] },
        win: { fx: { flag: ["j:baudouin_cede", "monde:corde_entiere"], ep: ["histoire", 900] }, to: "K14j_paume" }, lose: { to: "K14j_paume" } },
      { label: "Prendre la mailloche", to: "K14j_duel_cage", big: true },
    ] },

  K14j_paume: { act: "IV", title: "La paume à plat", place: "tour", ambiance: "chateau",
    text: [
      "Tu lèves la main, ouverte, à plat, à hauteur de sa figure.",
      "Il s'arrête. Son corps l'a décidé pour lui, comme il s'est arrêté dix mille fois à une table de marbre, la cuiller en l'air, quand un homme en gris posait ainsi la paume. Chez les neuf, ce signe veut dire *attends*, et l'on y obéit avant de savoir à qui.",
      "Tu as le temps d'un souffle. Tu montres la cloche. Tu montres tes doigts : dix, puis un. Tu montres le plancher, sous lequel il y a une chambre ; tu fais, des deux bras, le geste de bercer. Puis tu ouvres les mains vers les abat-sons, vers toute la ville, et tu les fermes, d'un coup, comme on souffle une chandelle.",
      { after: "j:baudouin_cede", text: "Il regarde. Il a dix-huit ans, il est le meilleur de sa volée, et on ne lui a rien dit : on lui a dit *une chambre*, on lui a dit *coupe.* Il regarde tes mains fermées. Il regarde, entre les lames, la place pleine. Il sait compter des crans de crémaillère. Il a vu le niveau pencher d'un demi-trait." },
      { after: "j:baudouin_cede", text: "Son couteau descend. Il le considère, dans sa main, comme une chose qu'on lui aurait glissée là pendant qu'il dormait. Puis il fait un geste que tu ne connaissais pas, à la table des neuf : il pose le couteau sur le banc des sonneurs, à plat, le manche vers toi." },
      { after: "j:baudouin_cede", text: "Il ôte son bandeau. Il a deux boulettes de cire aux oreilles ; il en retire une, et il te la tend. Tu secoues la tête. Il ne comprend pas. Il la remet, lentement. Puis il redescend par la trappe, à reculons, sans te quitter des yeux ; et la dernière chose que tu vois de lui, ce sont deux doigts portés à sa tempe." },
      { before: "j:baudouin_cede", text: "Il regarde. Un instant, tu crois qu'il a compris. Puis sa mâchoire se serre. Il a une paume à plat, lui aussi, quelque part en bas, celle d'un homme en gris, et elle pèse plus que la tienne. Il secoue la tête. Il lève le couteau vers la corde." },
    ],
    choices: [
      { label: "T'asseoir sous la cloche : il reste le temps de quelques souffles", hide: { not: { has: "j:baudouin_cede" } }, to: "K14j_midi", big: true },
      { label: "Prendre la mailloche", hide: { has: "j:baudouin_cede" }, to: "K14j_duel_cage", big: true },
    ] },

  K14j_duel_cage: { act: "IV", title: "Sous douze pieds de bronze", place: "tour", ambiance: "chateau", duel: "d_cage", duelLabel: "Te mettre entre la corde et lui",
    text: [
      "Tu as le manche de buis dans les deux mains. Il a son couteau, court, tenu bas. Impossible de se redresser : la cloche est à deux pieds des têtes. Reculer, c'est trouver le trou du plancher, au milieu, large comme une meule, où pendent la corde et le fil.",
      "Vous tournez autour, courbés, dans une odeur de graisse. Il ne t'entend pas souffler. Tu l'entends, toi : il a monté trois cent soixante marches en courant.",
    ] },

  K14j_corde_sauve: { act: "IV", title: "Elle pend", place: "tour", ambiance: "chateau",
    text: [
      "La troisième touche lui prend le poignet, sur l'os. Le couteau saute, sonne contre la lèvre de bronze, d'une petite note claire, et tombe par le trou du plancher. On ne l'entend pas arriver.",
      "Baudouin Passavant regarde sa main vide. Il regarde la corde, intacte, qui se balance à peine. Il a perdu deux fois en deux jours contre la même personne ; à dix-huit ans, on appelle cela un signe.",
      "Tu baisses la mailloche. Tu lui montres la trappe. Il hésite. Il te montre la cloche, puis ses oreilles, puis les tiennes, nues : *tu vas rester là-dessous, sans rien ?* Tu fais oui.",
      "Il te regarde comme on regarde un fou, ou un saint, ce qui, vu de la table des neuf, revient au même. Puis il redescend. Sur le dernier barreau, il s'arrête, il porte deux doigts à sa tempe, et il referme la trappe sur lui, doucement, pour ne pas te déranger.",
    ],
    choices: [{ label: "T'asseoir sous la cloche", to: "K14j_midi", big: true }] },

  K14j_corde_coupee: { act: "IV", title: "À hauteur de bras", place: "tour", ambiance: "chateau",
    text: [
      "Il a une allonge de faucheur. La troisième touche te prend sous le coude, où le buis ne sert plus à rien, et tu te retrouves sur les genoux, au bord du trou.",
      "Il t'enjambe. Il empoigne la corde, de la main gauche, au plus haut qu'il peut : à bout de bras, sous le joug. Le couteau de sellier fait son office en quatre coups. Le chanvre crie. La corde lâche, d'un bloc, et file par le plancher comme un serpent qu'on jette ; on l'entend tomber, en bas, dans une chambre, et une enfant pousser un cri.",
      "Il reste, sous la cloche, un moignon de chanvre, long d'une coudée, effiloché, qui se balance à neuf pieds du plancher.",
      "Baudouin te regarde. Il est sans haine. Il a fait ce qu'on lui a dit, proprement, comme on lime une pièce. Il range son couteau. Il redescend par la trappe ; et tu l'entends, sur l'échelle, prendre son temps.",
      "Tu te relèves. Tu lèves les yeux vers le moignon. Il est hors de portée de ta main. Quelqu'un qui monterait sur le bras du marteau l'atteindrait.",
    ],
    choices: [{ label: "T'asseoir sous la cloche", to: "K14j_midi", big: true }] },

  K14j_midi: { act: "IV", title: "Un", place: "tour", ambiance: "chateau",
    text: [
      "Tu es seul{e}. Tu t'assois au milieu, sous la bouche de bronze. Tu es sans cire, les mains nues, les oreilles nues, un Cahier contre la peau.",
      "On entend monter la place : un grand murmure heureux, qui enfle. Ils ont vu les aiguilles se joindre. Cinq mille personnes prennent leur souffle.",
      "Le fil se tend.",
      "Tu vois le déclic tourner. Tu vois le marteau partir, lentement d'abord, comme une tête qui s'incline ; puis tu ne vois plus rien, parce qu'il a frappé.",
      "C'est un mur plus qu'un bruit. Il te traverse de la nuque aux talons, il chasse l'air de ta poitrine, et le plancher saute sous toi. Toute la cloche est devenue une seule note, énorme, basse, dorée, où tu es pris{e} comme un moucheron dans du miel. Tu as crié, et tu ne t'es pas entendu{e}.",
      "*Un*, dit la place, d'une seule voix.",
      "En bas, à trois cent soixante marches, une barre vient de descendre d'un cran, sous la main d'un homme en gris.",
    ],
    choices: [{ label: "Rester", to: "K14j_coups_4", big: true }] },

  K14j_coups_4: { act: "IV", title: "Deux, trois, quatre, cinq", place: "tour", ambiance: "chateau",
    text: [
      "*Deux.* Tu l'attendais, et il n'y a pas moyen de l'attendre. Tes dents s'entrechoquent. Par les abat-sons, la lumière tremble : ce sont tes yeux qui tremblent dans ta tête.",
      "*Trois.* Tu t'es mis{e} à genoux, sans l'avoir voulu. Tu regardes entre deux lames. Sur la place, près de la fontaine, les portes du théâtre s'ouvrent, une par coup : la première, la deuxième, la troisième. Dans chacune, une Heure paraît, en costume, et salue. Maître Florizel joue avec la cloche. Il a quarante ans de planches, et il a trouvé aujourd'hui la seule musique qui soit à sa taille.",
      "*Quatre.* Une sainte en manteau bleu. La foule compte, à pleine voix, les enfants plus haut que les autres. Tu vois des pères qui lèvent des petits à bout de bras. Tu vois une femme qui a mis ses souliers dans son panier.",
      "*Cinq.* Le fil, près de toi, se tend à chaque coup, et à chaque coup un peu plus : la barre, en bas, descend plus loin qu'elle ne devrait. Tu le sais par la note qu'il rend, qui monte. Quelqu'un tient le levier.",
      { after: "j:signal_trois", text: "Dans la chambre, sous tes genoux, une poignée d'ivoire a été tirée trois fois. Personne, en bas, n'a lâché pour autant." },
      "Entre les coups, il y a un silence de la longueur d'un souffle, plein jusqu'au bord du bourdon qui ne finit pas. C'est dans ces silences-là que tu penses. Tu penses à quelqu'un, sous toi, dans soixante ans, la main sur une barre.",
    ],
    choices: [{ label: "Rester", to: "K14j_coups_7", big: true }] },

  K14j_coups_7: { act: "IV", title: "Six, sept, huit", place: "tour", ambiance: "chateau",
    text: [
      "*Six.* La sixième porte. Le pourpoint cerise ouvre les bras. Tu n'entends plus la place : tu n'entends plus que le bronze, et tu vois les bouches.",
      "*Sept.* Il se passe quelque chose au fil. Il a donné une secousse, à contretemps, entre deux coups : une saccade, puis une autre, comme une ligne où un gros poisson vient de mordre. En bas, on se bat. Un vieillard a quitté une niche. Il a passé derrière neuf dos, et il a pris un homme en gris aux poignets.",
      "*Huit.* Le marteau frappe, et il frappe faux : un rien trop tôt, un rien trop fort. La note a une fêlure. Sur la place, personne ne s'en aperçoit. Tu la sens, toi, dans les os de ta figure.",
      "Il reste trois coups. *On reste longtemps comme on était*, t'a dit quelqu'un qui s'y connaît. Tu as le temps d'un geste : celui dans lequel on te trouvera.",
    ],
    choices: [
      { label: "Te lever, et fermer la main sur la corde", hide: { has: "monde:corde_coupee" }, fx: { flag: "j:pose_corde" }, to: "K14j_coup_10", big: true },
      { label: "Te lever, le bras tendu vers le moignon de chanvre", hide: { not: { has: "monde:corde_coupee" } }, fx: { flag: "j:pose_corde" }, to: "K14j_coup_10", big: true },
      { label: "Ouvrir le Cahier contre ta poitrine, la page vers le dehors", fx: { flag: "j:pose_cahier" }, to: "K14j_coup_10", big: true },
      { label: "Te pencher sur le trou du plancher, et regarder en bas", fx: { flag: "j:pose_regard" }, to: "K14j_coup_10", big: true },
    ] },

  K14j_coup_10: { act: "IV", title: "Neuf, dix", place: "tour", ambiance: "chateau",
    text: [
      { after: "j:pose_corde", before: "monde:corde_coupee", text: "Tu es debout. Tu as la corde dans le poing droit, à hauteur de ton épaule. Elle est lustrée, tiède, et elle tremble de toute la cloche." },
      { after: "j:pose_corde", if: { has: "monde:corde_coupee" }, text: "Tu es debout, sur la pointe des pieds, le bras droit levé de toute sa longueur. Le moignon de chanvre est à deux coudées de tes doigts. Tu le regardes." },
      { after: "j:pose_cahier", text: "Tu es debout. Tu tiens le Cahier ouvert contre ta poitrine, à deux mains, la page tournée vers qui viendra. Tu y as écrit, en gros, ce qu'il faut qu'on lise d'abord." },
      { after: "j:pose_regard", text: "Tu es à genoux, les deux mains au bord du trou. Tu regardes en bas. Le rond de jour d'une chambre ; puis le noir de la vis ; puis, tout au fond, le pois de perle." },
      "*Neuf.* La neuvième porte. Sur la place, ils lèvent déjà les bras, pour le cri. Ils sont à trois coups du dîner.",
      { after: "j:vu_fenetre", text: "Sous toi, une femme en blanc est à un pas d'une croisée, la main vers une crémone. Elle a entendu neuf. Elle sait ce qu'il reste." },
      { before: "j:vu_fenetre", text: "Sous toi, une femme en blanc s'est levée. Elle a pris une enfant contre sa hanche. Elle marche vers une fenêtre, comme le veut la Coutume." },
      "*Dix.* Le fil hurle. Il est tendu à casser ; il rend une note de verre, suraiguë, qui te perce par-dessus le bourdon. La barre est presque au fond. En bas, un enfant de treize ans, les oreilles bandées, lève un maillet au-dessus d'un coin.",
      { after: "monde:ansel_travers", text: "Il le tient de travers, d'un quart, la main gauche devant." },
      "Tu respires. C'est la dernière fois avant longtemps, et tu le sais, et tu fais attention à cette respiration-là : l'air sent la graisse, la fiente et le soleil.",
    ],
    choices: [{ label: "Onze", to: "K14j_coup_11", big: true }] },

  K14j_coup_11: { act: "IV", title: "Onze", place: "tour", ambiance: "chateau",
    text: [
      "Le marteau part.",
      "Tu le vois venir, cette fois. Tu vois tout. Le déclic qui tourne. Le bras de chêne qui s'incline. La tête d'enclume qui traverse, sans hâte, les deux pieds d'air qui la séparent de la place claire, sur la lèvre. Par les abat-sons, la onzième porte s'ouvre ; une petite Heure timide en sort ; un gros homme lève sa canne vers la dernière. Cinq mille bouches font un rond.",
      "Il frappe.",
      "*Onze*, dit la place.",
      "Et le coup ne s'en va pas.",
      "Il reste. La note qu'il a faite se tient dans l'air, autour de toi, entière, sans décroître, comme une eau qui aurait pris. Le marteau est contre le bronze, et il n'en revient pas. Le fil est tendu, et il ne se relâche pas. Entre deux lames, un pigeon qui passait a les ailes ouvertes, et il ne tombe pas.",
      "Tu veux tourner la tête. C'est très lent. C'est comme de marcher dans de la poix, puis dans du verre. La peur aussi est très lente : elle n'arrive pas jusqu'à toi.",
      "En bas, sur la place, une bouche est restée ouverte sur un rire.",
      "Tu penses : *voilà.* Tu penses : *tiens-toi bien.* Tu penses à une écriture en bâtons.",
      "Et dans la note qui ne finit pas, le long du fil, tout au fond, là où il y avait un pois de perle, quelque chose bouge.",
    ],
    choices: [{ label: "Regarder", to: "B14", big: true }] },
});

module.exports = { passages: P, extras: {
  duels: {
    d_cage: { title: "Sous la cloche", foe: "baudouin", rule: "Trois touches, à la mailloche de buis contre un couteau de sellier, courbés sous la Patiente, autour du trou du plancher.",
      touches: 3, dom: "combat", skill: 6,
      intro: "Baudouin Passavant se place de façon à avoir la corde derrière toi, et toi devant la corde. Il tient sa lame basse, le pouce dessus. Il ne s'entend pas marcher : il pose les pieds à plat, comme sur de la neige.",
      style: { attaque: 3, parade: 1, feinte: 1 },
      tells: {
        attaque: ["Baudouin rentre la tête, à cause du bronze, et son coude recule.", "Il regarde la corde, par-dessus ton épaule."],
        parade: ["Baudouin ramène le couteau contre sa hanche, et attend ton manche."],
        feinte: ["Baudouin montre la corde de sa main gauche, et son poignet droit tourne.", "Il a un demi-sourire, pour une galerie qui n'est pas là."],
      },
      win: { to: "K14j_corde_sauve", fx: { flag: "monde:corde_entiere", ep: ["seance", 900] } },
      lose: { to: "K14j_corde_coupee", fx: { flag: "monde:corde_coupee", pv: -3, ep: ["seance", 300] } } },
  },
} };
