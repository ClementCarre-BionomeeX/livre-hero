// Le Douzième Coup · dénouement « garder » (the stroke was rung and nobody named it : it belongs to no year. The bar is
// up, the well breathes, the Dormante will not grow ; the city stays held in a twelfth note, and the two who rang it
// are awake inside with what sand they have left). Part A : each one alone (Cage, cellar), the meeting at the niche
// (`Fg_niche`), the sand counted (`Fg_compte`), and the held city walked together (`Fg_ville`, hub) : places, and four
// people one may wake for a pinch to ask them (`monde:g_avis_reine|g_avis_coudrier|g_avis_becu|g_avis_perrine`).
// Other flags : `r:g_grain_vieux`, `monde:g_ligne` (a line written in the Book), `monde:g_nom_banc`.
// Part B (`fin_garder_b.js`) : the decision (`Fg_conseil`) and the two ways of keeping.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var LACHE = { has: "monde:coudrier_lache" };
var EVEILLEE = { has: "monde:reine_eveillee" };
var REFUSE = { has: "monde:jeune_refuse" };
var NOM = { has: "monde:nom_cage" };
var SORTIS = { has: "monde:noyers_sortis" };

Object.assign(P, {
  F_garder: { act: "V", title: "D'aucune année", place: "tour", ambiance: "chateau",
    text: [
      "Il ne tombe nulle part.",
      "La pièce tournait. Elle tourne encore. Deux bouches se sont fermées sur le même mot, à trois cent soixante marches l'une de l'autre, et le douzième coup est resté en l'air, entre deux mains qui n'ont pas voulu le prendre.",
      { if: J, text: "Tu as serré les dents. Le marteau a frappé ; tu l'as reçu par tout le corps ; et le son, au lieu de s'en aller par les abat-sons, est resté. C'est une note. Elle est d'un ton plus haute que l'autre, plus claire, et elle tient, égale, sans faiblir, comme une corde qu'un archet ne quitterait plus." },
      { if: J, text: "Tu te penches entre deux lames. La place a remué : le temps d'un souffle, cinq mille épaules, un demi-pas, un cri repris. Puis tout s'est posé de nouveau. Les bouches se sont rouvertes en rond sur une autre syllabe. Ils avaient dit *on* depuis soixante ans. Ils disent *dou*." },
      { if: R, text: "Tu t'es tu{e}. Le levier a monté jusqu'au dernier cran, et il y reste. Le coup est descendu par le fil, puis par la voûte ; et le son, au lieu de finir, s'est installé. C'est une note. Elle est d'un ton plus haute que l'autre, et elle tient dans la pierre, sous tes pieds nus, comme un bourdon de ruche." },
      { if: R, text: "Derrière toi, la salle a remué : le temps d'un souffle, neuf têtes tournées, un bras achevé, un maillet tombé. Puis tout s'est posé de nouveau. Le maillet est en l'air, à une main du pavé." },
      { if: R, text: "Dans le puits, le gris a baissé d'une coudée. Il s'est arrêté là. Dessous, tu vois la grande chose noire, qui va d'un bord à l'autre, lentement. Elle respire. Elle respire dans une note qui ne finit pas, comme quelqu'un qui dort enfin, la fenêtre ouverte, dans une maison où l'on a arrêté les pendules." },
      "Vous avez rendu le coup, et vous ne l'avez donné à personne. Aucun Livre n'avait écrit ce cas. La Douzième a sonné ; elle n'est d'aucune année ; elle attend son nom. Et vous êtes debout dedans, les deux seuls qui bougent, avec le mot dans la bouche.",
    ],
    choices: [
      { label: "Te relever, sous la cloche", hide: R, to: "Fgj_cage", big: true },
      { label: "Te retourner vers la salle", hide: J, to: "Fgr_cave", big: true },
    ] },

  // ===== the one who passes
  Fgj_cage: { act: "V", title: "La bouche en l'air", place: "tour", ambiance: "chateau",
    text: [
      "La Patiente est au-dessus de toi, arrêtée au sommet de sa volée, la bouche tournée vers le ciel. Le marteau repose sur la lèvre. Douze pieds de bronze tiennent en l'air sur rien, penchés, comme une bête qui écoute.",
      "Tu lâches la corde. Elle reste où elle est, tendue, un peu de côté. Tu as les paumes brûlées. Tu les regardes : le sang y est frais, rouge, et il ne sèche pas.",
      "Tu as serré les dents. Tu avais le mot ; tu avais le temps de le dire ; et à la dernière seconde tu as pensé à une personne en sabots, à trois cent soixante marches, qui avait un pays dans un seul des deux mots. Tu lui as laissé la bouche. Tu attendais que le coup tombe chez {autre:lui}.",
      "Il n'est tombé chez personne. Tu commences à comprendre pourquoi, et cela te fait monter aux joues une chaleur qui n'est pas de la honte, et qui y ressemble.",
      { if: NOM, text: "Sur le banc des sonneurs, ton nom est là, de ce matin, sous *Thibaut, 481.* Il lui manque une date. Tu ne sais pas laquelle mettre." },
      { if: { not: NOM }, text: "Le banc des sonneurs porte ses quarante noms. Le bois est nu, dessous. On taille son nom quand on a sonné. Tu ne sais pas si tu as sonné." },
    ],
    choices: [{ label: "Descendre", to: "Fgj_chambre", big: true }] },

  Fgj_chambre: { act: "V", title: "La Chambre haute, dans l'autre note", place: "tour", ambiance: "chateau",
    text: [
      "Vingt échelons. Le palier. La porte de chêne.",
      { if: EVEILLEE, text: "Elle est ouverte, comme tu l'avais laissée. La Reine est debout à la croisée, l'enfant sur la hanche. Tu l'avais éveillée d'une pincée, ce matin ; elle t'avait parlé ; le grain avait fini. Elle a bougé depuis : elle s'est tournée vers la porte, d'un quart, la bouche entrouverte. Elle attendait qu'on monte lui dire. Elle a eu le temps d'un souffle pour l'attendre." },
      { if: { not: EVEILLEE }, text: "Elle est fermée du dedans. Tu colles l'œil au jour de la serrure. La Reine est assise au bord du petit lit blanc, en blanc, une main sur le front de l'enfant. Elle a bougé : ce matin, cette main était sur le drap." },
      "Aélis a les yeux ouverts. Elle regardait le plafond ; elle regarde la porte. Elle a huit ans, la langueur grise aux ongles, et dix-neuf jours d'écorce qui l'attendent dans un siècle où elle n'est pas.",
      "La note passe par le plancher. Elle est dans le bois du lit, dans le verre de la croisée, dans tes dents. Rien ne s'abîme ici. La fièvre de l'enfant ne monte pas. Elle ne descend pas non plus.",
      { if: { secret: "j_reine" }, text: "Tu avais promis à cette femme de l'aider à arrêter l'heure de sa fille. Tu avais caché cette promesse neuf jours. Tu l'as tenue : l'heure est arrêtée. Elle l'est comme la Reine l'avait rêvé au commencement, petite et douce, sans une ville de plus prise par an. Il a fallu, pour y arriver, que deux personnes se taisent par politesse." },
    ],
    choices: [{ label: "Descendre la vis", to: "Fgj_vis", big: true }] },

  Fgj_vis: { act: "V", title: "Trois cent soixante marches de bourdon", place: "tour", ambiance: "chateau",
    text: [
      "Tu descends. La note descend avec toi, dans la pierre du noyau. Aux meurtrières, le jaune et le bleu ont changé d'un rien : une hirondelle, qui était à gauche du jour, est au milieu.",
      "Au second palier, Baudouin a bougé aussi. Il avait les ciseaux levés. Il les a baissés. Il regarde ses deux boulettes de cire, dans sa paume, et il a sur la figure le commencement d'une question.",
      "Tu passes. Tu poses la main sur le fil de laiton, par habitude, au tournant. Il vibre. Et dans la vibration, très bas, quelque chose de rauque : « T'es là ? »",
      "Tu dis oui. Tu le dis contre le métal. Tu dis : « T'as rien dit. » Le fil met du temps. « Toi non plus. » Puis : « Descends. »",
      "Tu descends plus vite. Tu as dans la poitrine une chose que tu n'attendais pas de ce midi : de la hâte, toute simple, comme on en a pour rentrer.",
    ],
    choices: [{ label: "La niche, au tournant", to: "Fg_niche", big: true }] },

  // ===== the one who stays
  Fgr_cave: { act: "V", title: "La salle, d'un souffle plus loin", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Ils ont tous avancé d'un souffle. Le grand roux, qui tendait le bras, l'a tendu. Les neuf ont tourné la tête vers le levier. L'homme de trente ans a ouvert les doigts. Puis la note les a repris, où ils en étaient." },
      { first: true, text: "Le levier est en haut. Tu l'as lâché, et il y reste. Le cuir pend. Au fond du puits, la chose noire va et vient, sous une coudée de gris qui ne luit plus." },
      { first: true, text: "Tu t'es tu{e}. Tu avais le mot ; tu avais une petite de cinq ans dedans, ou toute ta rue ; et tu as pensé à quelqu'un, là-haut, pendu à une corde, qui connaissait ces gens-ci par leurs noms. Tu lui as laissé la bouche. Tu attendais d'entendre quarante mille personnes dîner." },
      { first: true, text: "On entend une note. Tu comprends ce que {autre} a fait là-haut, en même temps que toi, pour la même raison. Tu dis un gros mot, tout bas, à la chose qui respire." },
      { again: true, text: "La Chambre basse. Le levier en haut, le maillet en l'air, la note dans la pierre." },
    ],
    choices: [
      { label: "Le vieillard, sur son berceau", hide: { seen: "Fgr_vieux" }, to: "Fgr_vieux" },
      { label: "Le fil, au chevalet", to: "Fgr_monte", big: true },
    ] },

  Fgr_vieux: { act: "V", title: "Son dernier grain", place: "tour", ambiance: "chateau",
    text: [
      "Il est assis, le dos droit, les deux mains sur sa canne. Sur le dos de sa main gauche, un grain achève de couler. Il t'attendait pour le dépenser en paroles.",
      "« Ni l'un ni l'autre. » Sa voix est sèche, intéressée. « J'avais ce cas dans mes tables : *personne.* Je l'avais mal lu. Je croyais que si personne ne rendait le coup, la note finissait seule, et ma vague avec elle. Vous l'avez rendu. Vous ne l'avez adressé à personne. C'est une somme consignée : elle n'est plus au débiteur, elle n'est pas au créancier, elle dort chez le greffier. »",
      "Il regarde le levier, en haut. « Mon puits respire. Il ne suera plus. Chez moi, la lisière vient de s'arrêter pour toujours, à une semelle de mon propre pavé ; et mes douze cuves ne rendront plus une pincée. Vous m'avez ruiné sans me battre. C'est élégant. Je ne crois pas que vous l'ayez fait exprès. »",
      "« Non », dis-tu. C'est vrai. Il incline la tête.",
      "« Et vous voilà gardiens. Tant que ce mot reste dans vos deux bouches, la ville tient. Rien ne s'abîme. Personne n'est veuf, personne n'est défait. C'est ce que je plaidais tout à l'heure, à ceci près que j'y gagnais mille ans, et que vous n'y gagnez que ce qu'il y a dans vos sachets. » Son petit rire. « Comptez-les. Le puits ne vous en rendra plus. Quand ils seront vides, vous serez pris comme les autres, la bouche fermée sur votre mot, et il n'y aura plus personne pour le dire. »",
      "Le grain est presque passé. Il le regarde. Il a déjà du gris au bout des doigts.",
      "« Il me reste le temps d'une phrase. Je ne la gaspillerai pas à vous maudire. » Il lève ses yeux de deux couleurs. « Vous pouvez m'en prêter un autre. Je vous dirais ce que je sais de cette note, que personne d'autre ne sait. Ou vous pouvez me laisser devenir ce que j'ai fait de tant d'autres. Les deux sont justes. »",
    ],
    choices: [
      { label: "Lui poser un grain sur la main", fx: { flag: "r:g_grain_vieux", stock: { sable: -1 } }, to: "Fgr_vieux_fin" },
      { label: "Le regarder finir", to: "Fgr_vieux_fin" },
    ] },

  Fgr_vieux_fin: { act: "V", title: "Le prêteur, pris", place: "tour", ambiance: "chateau",
    text: [
      { after: "r:g_grain_vieux", text: "Tu défais ton cordon. Tu lui poses un grain sur le dos de la main, à côté de l'autre, qui finit. Il le regarde. « Vous prêtez à un insolvable. C'est une faute de commerce, et je vous en remercie. »" },
      { after: "r:g_grain_vieux", text: "Il parle vite. « Une note sans nom ne mange pas ceux qui l'ont sonnée : elle les tolère, tant qu'ils ont de quoi. Elle ne déborde pas : le bord restera au septième peuplier jusqu'à la fin des siècles. Et elle se nomme encore. Remettez une main à cette corde, une autre à ce cuir, dites le mot, l'un, l'autre ou les deux, et elle tombera où vous l'enverrez. Demain, dans dix ans de votre sable. Il n'y a pas de terme. » Il respire. « C'est une créance sans échéance. Je n'en ai jamais eu d'aussi belle, et elle n'est pas à moi. »" },
      { after: "r:g_grain_vieux", text: "Le second grain baisse. « Un conseil, puisque j'ai payé pour le donner. Ne gardez pas cela par scrupule. On garde bien une chose qu'on veut. On la garde mal quand on a seulement peur de la rendre. J'ai gardé soixante ans, je sais de quoi je parle. » Il se cale contre le montant du berceau. Il pose ses deux mains sur sa canne, l'une sur l'autre, avec soin. « Voilà. Je suis bien. »" },
      { before: "r:g_grain_vieux", text: "Tu ne bouges pas. Il attend, un instant, pour voir. Puis il incline la tête, de son inclinaison exacte. « C'est juste aussi. Vous aurez besoin de tout. » Il se cale contre le montant du berceau. Il pose ses deux mains sur sa canne, l'une sur l'autre, avec soin, comme on range." },
      "Le grain finit. Le gris lui monte aux poignets, aux manches, au col. Tu as vu cela cent fois, au bord des fossés, sur des gens qui n'avaient pas de quoi. Tu ne l'avais jamais vu sur lui. Il ne ferme pas les yeux : il regarde le puits, qui respire.",
      "Il y a deux fois le même homme, dans cette salle, à trois pas l'un de l'autre : l'un a trente ans, les doigts ouverts ; l'autre quatre-vingt-dix, les mains sur une canne. Ils sont pris tous les deux. Tu les regardes. On dirait un portrait et son esquisse.",
    ],
    choices: [{ back: "Fgr_cave" }] },

  Fgr_monte: { act: "V", title: "Dans le fil", place: "tour", ambiance: "chateau",
    text: [
      "Tu vas au fil. Il part du levier vers la voûte, net, tendu. Tu poses la main au chevalet. La note t'entre dans le bras.",
      "« T'es là ? » Tu le dis contre le laiton. Tu attends le temps que trois cent soixante marches portent deux syllabes.",
      "Il vient, par la paume, avec l'accent des Trois-Noyers : « Oui. » Puis : « T'as rien dit. » Tu réponds : « Toi non plus. » Il y a un silence, dans le fil, où tu entends très bien que l'autre vient de comprendre la même chose que toi, au même moment, et qu'{autre:il} ne sait pas plus que toi s'il faut en rire.",
      "« Descends », dis-tu.",
      "Tu montes à sa rencontre. Quatre-vingts marches jusqu'à la niche. Tes pieds sont nus : tu avais ôté tes sabots pour le coin. Tu les as à la main. La pierre vibre sous tes plantes, tiède, comme le dos d'une bête.",
      { if: { secret: "r_soeur" }, text: "Lison est dans la note. Elle y est comme elle y était : au milieu d'un souffle, sous un toit, à dix lieues. Tu ne l'as ni sauvée ni perdue. Tu l'as gardée. C'est le mot que tu cherchais, en montant, pour ce que tu viens de faire sans le vouloir." },
    ],
    choices: [{ label: "La niche, au tournant", to: "Fg_niche", big: true }] },

  // ===== together
  Fg_niche: { act: "V", title: "Par politesse", backName: "la niche", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous vous retrouvez à la niche, l'un qui descend, l'autre qui monte, sous le mot rayé. Vous vous regardez. Vous avez tous les deux la figure de quelqu'un qui a tenu une porte ouverte à quelqu'un qui la lui tenait." },
      { first: true, if: J, text: "« Pourquoi t'as rien dit ? » demande {autre}. Tu réponds que {autre:il} avait un pays dans un seul des deux mots, et que tu ne voulais pas le lui ôter de ta bouche. « Et toi ? » {autre:Il} regarde ses pieds nus. « Pareil. T'avais des gens, là-haut. Tu les connaissais par leur nom. Moi, j'en connaissais aucun avant mardi. »" },
      { first: true, if: R, text: "« Pourquoi t'as rien dit ? » demandes-tu. {autre} répond que tu avais un pays dans un seul des deux mots, et qu'{autre:il} ne voulait pas te l'ôter de sa bouche. « Et toi ? » Tu regardes tes pieds nus. « Pareil. T'avais des gens, là-haut. Tu les connaissais par leur nom. »" },
      { first: true, text: "Il y a un silence. Puis cela vous prend, tous les deux à la fois : un rire, bête, qui commence par le nez et qui finit par vous plier contre la pierre. Vous avez marché neuf jours, traversé soixante ans, fait sauter un coin et tiré douze pieds de bronze, pour vous céder le passage dans une porte." },
      { first: true, text: "Le rire tombe. La note tient. En haut, une reine attend qu'on lui dise. En bas, deux fois le même homme. Dehors, quarante mille bouches rondes sur une syllabe neuve." },
      { first: true, if: { all: [R, { secret: "r_soeur" }] }, text: "Tu le lui dis, alors. Tu ne l'avais dit à personne. « J'ai une sœur. Lison. Cinq ans. Roquebise. Elle était du Bond. C'est pour elle que je marchais. » {autre} te regarde. « Et tu t'es tu{e} quand même. » Tu hausses une épaule. « Je me suis dit que tu le dirais pas non plus, toi, si t'avais su. Alors valait mieux que tu saches pas. » {autre:Il} met un moment à démêler cela. Puis {autre:il} te prend le bras, au-dessus du coude, et {autre:il} serre." },
      { first: true, if: { all: [J, { secret: "j_rester" }] }, text: "Tu le lui dis, alors. « Je voulais rester. En 541. Je te l'ai caché neuf jours. J'avais le mot, et il m'arrangeait. C'est pour ça que je l'ai pas dit : il m'arrangeait trop. » {autre} siffle entre ses dents. « T'es plus honnête que moi. Moi, quand ça m'arrange, je prends. » {autre:Il} réfléchit. « Sauf ce coup-ci. »" },
      { first: true, text: "On ne peut pas rester à cette niche. Ou plutôt : on le peut, et c'est ce qui est nouveau. Rien ne presse. Rien ne pressera plus jamais dans cette ville, que ce que vous avez au cou." },
      { again: true, text: "La niche, au tournant, et son mot rayé. La note passe dans la pierre." },
    ],
    choices: [{ label: "Vider les deux sachets, et compter", to: "Fg_compte", big: true }] },

  Fg_compte: { act: "V", title: "Ce qu'il y a dans deux sachets", place: "tour", ambiance: "chateau", charniere: true, backName: "la marche",
    text: [
      { first: true, text: "Vous vous asseyez sur une marche. Vous videz les deux sachets dans le creux d'un sabot, pour ne rien perdre. Cela fait un petit tas gris, tiède, qui tient dans une cuiller." },
      { first: true, if: R, text: "Tu comptes. C'est ton métier. Tu sépares du bout de l'ongle, pincée par pincée, comme la Courtepaille te l'a appris sur une ardoise. {autre} te regarde faire sans respirer : un souffle de trop, et il manque un jour." },
      { first: true, if: J, text: "{autre} compte. C'est son métier. {autre:Il} sépare du bout de l'ongle, pincée par pincée, sans une hésitation. Tu retiens ton souffle : un de trop, et il manque un jour." },
      { first: true, text: "Il y a de quoi tenir debout tous les deux un long moment. On ne peut pas dire combien : le soleil ne bouge pas, et l'on n'a ni faim ni sommeil dans une note. On peut le dire en pincées. Chaque porte qu'on pousse, chaque rue qu'on descend en mange un peu. Et chaque personne qu'on voudrait éveiller, pour lui parler le temps de quelques phrases, en coûte une entière." },
      { first: true, text: "Le puits respire : il ne sue plus. Ce tas ne grossira jamais. C'est tout le sable qu'il y aura dans cette ville." },
      { first: true, text: "Quand il sera fini, vous serez pris. Avant cela, vous pouvez encore tout : remonter à la corde et au cuir, et nommer la note ; ou marcher jusqu'au septième peuplier, et en sortir. Ou regarder, d'abord. Vous n'avez jamais vu cette ville ensemble, sans courir." },
      { again: true, text: "La marche, sous la niche. Le sable est rentré dans les sachets, en deux parts égales." },
    ],
    choices: [{ label: "La ville, à deux", to: "Fg_ville", big: true }] },

  Fg_ville: { act: "V", title: "Une ville à soi", place: "tour", ambiance: "ville", hub: true, backName: "le parvis",
    text: [
      { first: true, text: "Le parvis. Cinq mille personnes, la bouche ronde. Le soleil droit. La fontaine des Jurés a son fil d'eau en l'air, courbé, avec une goutte détachée au bout, qui s'est allongée d'un doigt depuis ce matin." },
      { first: true, text: "La note est partout. Elle est dans le pavé, dans les barriques, dans le drap des tréteaux. On s'y fait. Au bout d'un moment, on ne l'entend plus que lorsqu'on s'arrête de marcher." },
      { first: true, if: J, text: "{autre} a remis ses sabots. {autre:Il} marche à ta gauche, les mains dans le dos, par habitude de ne toucher à rien devant témoin. Tu lui dis qu'{autre:il} peut les sortir. {autre:Il} te regarde. {autre:Il} les sort. {autre:Il} ne sait pas quoi en faire." },
      { first: true, if: R, text: "Tu as remis tes sabots. Tu marches les mains dans le dos, par habitude : chez toi, dans une ville prise, on ne touche à rien devant témoin. {autre} te dit que tu peux les sortir. Tu les sors. Tu ne sais pas quoi en faire. C'est la première fois que tu es dans une ville comme celle-ci avec quelqu'un qui n'est pas là pour prendre." },
      { again: true, text: "Le parvis, sous le soleil qui ne bouge pas. La goutte, au bout du fil d'eau. La note." },
    ],
    choices: [
      { label: "Le débouché de la rue aux Oies", hide: { seen: "Fg_oies" }, to: "Fg_oies" },
      { label: "Les tréteaux du Mystère", hide: { seen: "Fg_treteaux" }, to: "Fg_treteaux" },
      { label: "Une hotte, au bord de la place", hide: { seen: "Fg_hotte" }, to: "Fg_hotte" },
      { label: "La rue de trois couleurs, en ville basse", hide: { seen: "Fg_tannerie" }, to: "Fg_tannerie" },
      { label: "Les toits, par l'échelle du couvreur", hide: { seen: "Fg_toits" }, to: "Fg_toits" },
      { label: "Une cour, et une marelle", hide: { seen: "Fg_marelle" }, to: "Fg_marelle" },
      { label: "Le cabaret du Compas d'Or", hide: { seen: "Fg_cabaret" }, to: "Fg_cabaret" },
      { label: "La colline des Jurés, et le cabinet du Grand Maître", hide: { seen: "Fg_guilde" }, to: "Fg_guilde" },
      { label: "La Cage, tout en haut, à deux", hide: { seen: "Fg_cloche" }, to: "Fg_cloche" },
      { label: "Éveiller la Reine, pour une pincée", hide: { seen: "Fg_q_reine" }, to: "Fg_q_reine" },
      { label: "Éveiller le Grand Maître, pour une pincée", hide: { seen: "Fg_q_coudrier" }, to: "Fg_q_coudrier" },
      { label: "Éveiller quelqu'un de la foule, au hasard", hide: { seen: "Fg_q_becu" }, to: "Fg_q_becu" },
      { label: "S'asseoir à la fontaine, et décider", to: "Fg_conseil", big: true },
    ] },

  Fg_toits: { act: "V", title: "Sous un chapeau", place: "tour", ambiance: "ville",
    text: [
      "On monte sur les toits par l'échelle d'un couvreur, restée contre la maison du cirier. Le couvreur est en haut, à cheval sur le faîte, une ardoise dans une main, le marteau levé dans l'autre. Il aura eu la plus belle place de la ville pour le douzième coup, et il lui tournait le dos.",
      "Vous vous asseyez à côté de lui, les sabots dans la gouttière. D'ici, on voit tout. Les toits, par milliers, en écailles. Les fumées debout, chacune sur sa cheminée, comme des fils à plomb qu'on aurait tendus vers le haut. La Tour. Le canal, avec une gabare, et le haleur penché.",
      "Le gris finit net, à une lieue, tout autour : une tache d'huile sur une nappe. Passé le bord, la plaine est blonde, et elle remue. On voit le vent courir dans les blés jusqu'au pied des peupliers, et s'arrêter là, comme un chien à une porte.",
      { if: R, text: "Tu n'avais jamais vu la Dormante que de son bord, à plat, comme on voit un mur. D'ici, elle est ronde, et petite. Tu la tiendrais sous un chapeau. Chez toi, elle a mangé dix lieues ; elle a mangé ta rue. Tu la regardes, à son premier jour, et tu sais que tant que la note tient elle restera de cette taille. Vous êtes assis sur le couvercle." },
      { if: J, text: "{autre} regarde le rond, longtemps, le menton sur les genoux. « Elle tient sous un chapeau », dit-{autre:il}. Chez {autre:lui}, elle a mangé dix lieues, et une rue où il y avait une porte. « Tant que ça sonne, elle reste comme ça. » {autre:Il} tape l'ardoise, du talon. « On est assis sur le couvercle. »" },
      "Le couvreur a un casse-croûte dans sa poche de tablier : on en voit dépasser le linge. Vous le laissez. C'est le seul habitant de Méridane qui ait de quoi déjeuner à son réveil, et il l'aura mérité.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_marelle: { act: "V", title: "Du un au ciel", place: "basse", ambiance: "ville",
    text: [
      "Dans une cour de la ville basse, entre un puits et un tas de fagots, il y a six enfants et une marelle. Elle est tracée à la craie, du un au ciel, avec des chiffres qui penchent. Une petite est en l'air au-dessus du sept, sur un pied, les bras en ailes, la langue entre les dents. Son palet l'attend au huit. Les cinq autres la regardent tomber, ce qui n'arrive pas.",
      { if: R, text: "Tu connais le jeu. Lison y trichait, à cinq ans, avec une bonne foi entière : elle posait le second pied, et jurait que c'était le vent. Tu montres à {autre}. On lance, on saute, on ramasse sur une jambe, on revient. {autre} t'écoute avec le sérieux qu'{autre:il} met à un rouage. {autre:Il} n'y avait jamais joué. Tu trouves cela plus triste que tout ce que tu as vu de gris." },
      { if: J, text: "Tu n'y avais jamais joué. Chez Line, on jouait à remonter des barillets, et l'on perdait souvent. {autre} te montre. On lance, on saute, on ramasse sur une jambe, on revient. Sa petite sœur y trichait, dit-{autre:il}, avec une bonne foi entière : elle posait le second pied, et jurait que c'était le vent." },
      "Vous jouez. Deux personnes de seize ans, en sabots, qui ont une ville sur les bras et un mot à trouver, sautent à cloche-pied entre des enfants gris, en prenant garde aux traits. Cela coûte du sable. C'est la seule dépense de la journée que vous passez sans la compter.",
      "L'un de vous arrive au ciel. L'autre conteste, et parle de vent.",
      "En partant, on laisse un palet sur le neuf : un bouton de corne, arraché à une manche. La petite le trouvera en retombant, si elle retombe jamais, et elle accusera son frère.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_cabaret: { act: "V", title: "Trois dés en l'air", place: "tour", ambiance: "ville",
    text: [
      "Le cabaret du Compas d'Or a sa porte ouverte et sa salle pleine : on y buvait en attendant midi, pour avoir moins loin à aller. Vingt buveurs, le nez à la fenêtre, la chope à mi-course. La servante porte un plateau de biais. Six gobelets y tiennent encore, par habitude ; le septième a pris les devants, et il est à mi-chemin du carreau, son vin en gerbe au-dessus de lui.",
      "À la table du fond, on joue. Trois dés sont en l'air au-dessus du drap. Quatre hommes les regardent. Un cinquième regarde les quatre.",
      { if: R, text: "Tu lis un coup de dés avant qu'il tombe : c'est une science de fossé, la seule que tu aies apprise sans maître. Deux, deux et un. Une misère. Tu lis aussi le cinquième homme. Il a le coude sur la table, la manche large, et dans la manche trois dés de rechange, qui tombent six. Il les changeait pendant que la salle écoutait la cloche." },
      { if: R, text: "Tu les lui prends. Tu les poses sur le drap, devant lui, bien en vue, à côté de sa mise. C'est la première chose que tu sors d'une poche pour la laisser sur la table. {autre} te regarde faire. « Tu peux sortir les mains, tu vois. »" },
      { if: J, text: "{autre} regarde les dés en l'air, la tête penchée. « Deux, deux et un. Une misère. » Puis {autre:il} regarde le cinquième homme, lui glisse deux doigts dans la manche, et en tire trois dés, qu'{autre:il} pose sur le drap, bien en vue, à côté de la mise. « Ceux-là tombent six. Il les changeait pendant que les autres écoutaient la cloche. »" },
      { if: J, text: "C'est la première chose que tu lui vois sortir d'une poche pour la laisser sur la table. Tu le lui dis. {autre:Il} hausse une épaule, et rougit jusqu'aux oreilles." },
      "Vous tenez là une justice comme les tribunaux en rêvent : l'accusé a ses preuves devant lui, ses juges autour, et l'audience est remise à une date qu'il vous appartient de fixer.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_oies: { act: "V", title: "Un homme sur une borne", place: "tour", ambiance: "ville",
    text: [
      { if: { not: SORTIS }, text: "La rue aux Oies tombe entre un cirier et un marchand de peignes. Sur la borne, un homme en blouse neuve, quarante-quatre ans, des mains de laboureur. Il a bougé : il avait la main en visière, il l'a baissée d'un pouce. Son chapeau est par terre, le fond en l'air." },
      { if: SORTIS, text: "La rue aux Oies tombe entre un cirier et un marchand de peignes. Sur la borne, il y a un mitron, un pain sous le bras, qui a pris la place qu'une famille de laboureurs a laissée ce matin. Les Noyer sont dehors, passé le septième peuplier, dans une charrette bleue. Ils sont sortis à temps." },
      { if: { all: [J, { not: SORTIS }] }, text: "« C'est Josse Noyer, dis-tu. Le père de Line. » {autre} le regarde longtemps. « Chez moi, elle lui ramassait son chapeau. Tous les ans. Elle le lui remettait, et il retombait. » {autre:Il} se baisse. {autre:Il} ramasse le feutre, le tape contre sa cuisse, et le pose sur la tête de l'homme, d'aplomb, en l'enfonçant un peu. « Voilà. Dans cette note-ci, il tient. »" },
      { if: { all: [R, { not: SORTIS }] }, text: "« C'est Josse Noyer, dit {autre}. Le père de Line. » Tu le regardes. Chez toi, la vieille lui ramassait son chapeau tous les ans, et il retombait. Tu te baisses. Tu ramasses le feutre, tu le tapes contre ta cuisse, et tu le poses sur la tête de l'homme, d'aplomb, en l'enfonçant un peu. Dans cette note-ci, il tient." },
      { if: J, text: "Tu penses à une petite de neuf ans, deux nattes, une boîte de fer. Elle est quelque part entre ici et un pont. Dehors, passé l'arbre, il y a une année 541 qui continue, où elle va grandir en regardant cette ville. Elle attendra. Elle sait attendre : c'est même tout ce que tu sais d'elle depuis toujours." },
      { if: R, text: "{autre} regarde la rue, vers le bas, vers la porte d'Occident. {autre:Il} cherche quelqu'un de petit. Tu sais qui. Tu as vu la même, toute blanche, sanglée sur une chaise, à cent pas d'ici, dans une autre année. Tu ne dis rien. Il y a des gens qu'on a des deux côtés, et cela ne se partage pas." },
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_treteaux: { act: "V", title: "Le Temps, au milieu d'un geste", place: "tour", ambiance: "ville",
    text: [
      "Les tréteaux du Mystère sont dressés contre la fontaine. On y jouait *les Douze Heures* : douze figurants en robe, et au milieu le Temps, un grand maigre en gris, avec une faux de carton et une barbe d'étoupe.",
      "Il avait la faux levée. Il l'a abaissée d'un quart : au douzième coup, il devait la poser, et saluer. Il la tient à mi-course, la bouche ouverte sur sa dernière réplique.",
      { if: J, text: "Tu l'as vu répéter, il y a trois jours. Tu sais la réplique. Tu la dis, pour {autre}, en montant sur les planches : *Je suis passé. Rendez-moi mon chapeau.* C'est une farce : le Temps a perdu son chapeau à la sixième Heure, et il le réclame à la fin. {autre} rit. Puis {autre:il} regarde la faux. « Il l'a pas posée. — Non. — Il la posera quand ? » Tu dis : quand on voudra." },
      { if: R, text: "{autre} l'a vu répéter. {autre:Il} monte sur les planches, et {autre:il} dit la réplique, pour toi : *Je suis passé. Rendez-moi mon chapeau.* C'est une farce. Tu ris. Puis tu regardes la faux, à mi-course. « Il l'a pas posée. Il la posera quand ? — Quand on voudra. »" },
      "Vous restez devant ce grand homme en gris, qui attend la fin de sa phrase. Vous êtes les deux seules personnes au monde à pouvoir la lui rendre. C'est une idée qui devrait faire peur. Sur ces planches, au soleil, elle fait surtout l'effet d'une clef qu'on a en poche.",
      "La Douzième Heure est une figurante de quinze ans, en robe blanche, sur le dernier tabouret. Elle n'avait pas de texte : on ne nomme pas la Douzième. Elle devait seulement se lever. Elle a commencé.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_hotte: { act: "V", title: "Deux sous, en l'air", place: "tour", ambiance: "ville",
    text: [
      "Elle est au bord de la place, sa hotte au dos, un drap rouge au cou, le bras levé, deux doigts en l'air. Elle vendait. Sa bouche est ouverte sur un prix.",
      { if: J, text: "« C'est Perrine. » Tu le dis comme on présente. « Dix-sept ans. Elle vend des almanachs. Elle m'a fait passer le bac d'Arvoise, elle a mordu toutes mes pièces, et elle sait que je viens de loin sans savoir d'où. » {autre} fait le tour de la hotte. {autre:Il} lit les couvertures, lentement, en remuant les lèvres. « *L'an 541.* Chez moi, on en trouve dans les greniers. On s'en sert pour allumer. »" },
      { if: R, text: "« C'est Perrine », dit {autre}, comme on présente. Dix-sept ans, des almanachs, un bac à Arvoise. Tu fais le tour de la hotte. Tu lis les couvertures : *L'an 541.* Chez toi, on en trouve dans les greniers, et l'on s'en sert pour allumer. Tu ne le dis pas à voix trop haute, à cause de la fille." },
      { if: R, text: "Tu la regardes mieux. Tu la connais. Chez toi, elle était à cette place, le bras levé, depuis soixante ans, et les glaneurs l'appelaient *la Marchande*. On ne lui avait jamais rien pris : elle avait l'air de compter." },
      "On pourrait l'éveiller. Une pincée, quelques phrases. Elle dirait son avis : elle en a sur tout, et elle le donne pour deux sous.",
    ],
    choices: [
      { label: "L'éveiller, et lui demander", hide: { seen: "Fg_q_perrine" }, to: "Fg_q_perrine" },
      { back: "Fg_ville" },
    ] },

  Fg_q_perrine: { act: "V", title: "L'avis de la colporteuse", place: "tour", ambiance: "ville", fx: { flag: "monde:g_avis_perrine", stock: { sable: -1 } },
    text: [
      "Un grain, sur le dos de la main levée. Le gris se retire de ses doigts, de son poignet, de sa figure. « ...deux sous ! » achève-t-elle. Puis elle voit que la cliente a une bouche de plâtre, que la place ne bouge pas, et qu'il y a devant elle deux personnes sales.",
      { if: J, text: "« Toi. » Elle te reconnaît. Elle regarde {autre}. « Et ça, c'est l'autre. Celui ou celle qui écrit en bâtons. » Elle n'a jamais vu le Cahier ; elle a deviné qu'il y avait quelqu'un. Elle devine toujours qu'il y a quelqu'un." },
      { if: R, text: "« Toi », dit-elle à {autre}. Puis elle te regarde, des sabots aux cheveux. « Et ça, c'est l'autre. La personne à qui on écrivait le soir. » Elle n'a jamais vu le Cahier. Elle a deviné. C'est une fille qui mord les pièces." },
      "On lui dit vite. La note, le mot, les deux années. Qu'on peut rendre midi ici, ou soixante ans plus loin, ou le garder. Elle écoute en regardant le grain baisser sur sa main : elle a compris tout de suite que c'était sa monnaie.",
      "« Vous me demandez ça à moi ? » Elle a son sourire de côté. « Je vends des almanachs. Je vends aux gens la liste des jours qu'ils vont avoir. Si vous gardez, je n'ai plus de métier : il n'y a qu'un jour, et tout le monde l'a déjà. » Elle réfléchit, vite. « Mais je vais vous dire. Mon père s'est noyé à Arvoise. J'aurais donné ma hotte pour qu'on arrête ce jour-là une heure avant. Et je sais aussi que si on l'avait arrêté, il serait encore sur son bac, la perche en l'air, et moi sur la berge à le regarder, et que ce n'est pas l'avoir. »",
      "Le grain est presque passé. « Gardez, si vous ne savez pas. C'est mieux que de se tromper. Mais ne gardez pas pour toujours. Un almanach qui n'a qu'une page, personne n'en... » Sa bouche reste ouverte sur le mot. Le gris est revenu. Son bras, qu'elle avait baissé, est à mi-hauteur.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_tannerie: { act: "V", title: "Quatre seuils", place: "basse", ambiance: "eau",
    text: [
      "La ville basse. La rivière des tanneurs coule en trois bandes, une rouge, une brune, une jaune, arrêtées côte à côte comme des rubans sur un comptoir. Le long du quai, quatre maisons ont une croix de chaux sur la porte.",
      { if: R, text: "« C'est là, dis-tu. Les quatre. La langueur. Chez moi, ils y étaient encore, dans leurs lits, et personne les avait rubanés : on avait peur d'entrer. J'ai fait le compte devant ces seuils. Quatre fois dix-neuf jours d'écorce. Ça sortait juste d'un côté, et faux de l'autre. »" },
      { if: J, text: "« C'est là, dit {autre}. Les quatre. La langueur. » {autre:Il} a fait un compte, devant ces seuils, dans son année : quatre fois dix-neuf jours d'écorce. « Ça sortait juste d'un côté, et faux de l'autre. »" },
      "Vous regardez l'eau jaune. C'est du fièvrier. Le remède coule devant la porte des malades depuis qu'il y a des teinturiers, et personne ne l'a bu.",
      { if: R, text: "« Dans cette note, ils guérissent pas, dis-tu. Ils meurent pas non plus. » Tu regardes une fenêtre, au premier, où l'on voit le bord d'un drap. « C'est ce qu'elle voulait, la Reine. Pour la sienne. Elle l'a, et ceux-là avec, qu'elle connaît pas. » Tu craches dans l'eau. Le crachat reste en l'air, à une main de la surface. Tu le regardes, vexé{e}." },
      { if: J, text: "« Dans cette note, ils guérissent pas, dit {autre}. Ils meurent pas non plus. C'est ce qu'elle voulait, la Reine. Elle l'a, et ceux-là avec. » {autre:Il} crache dans l'eau. Le crachat reste en l'air, à une main de la surface. {autre:Il} le regarde, avec la figure de quelqu'un à qui la ville vient de répondre." },
      "On pourrait monter chez Maugras, prendre une balle d'écorce, la poser sur ces quatre seuils. Elle y serait, le jour où la note aurait un nom. C'est une chose à faire, quel que soit le nom.",
      "Vous la faites. Cela mange un peu de sable, et quatre voyages. Vous posez sur chaque seuil un sac de toile, et dessus, au charbon, en bâtons, la dose.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_guilde: { act: "V", title: "Le quarantième chapitre", place: "guilde", ambiance: "ville",
    text: [
      "La colline des Jurés. Le père Loquet dort sur son tabouret, d'un vrai sommeil, pris dans l'autre. Vous montez au cabinet du Grand Maître. La porte est ouverte : il était sorti à onze heures, en disant qu'il allait se promener.",
      "Sur le pupitre, il y a la copie du Livre du Balancier. Elle est ouverte à la fin. Trente-neuf chapitres, d'une écriture de Fondateur ; puis un titre, *Du Douzième coup*, et une page blanche. On le lui a assez reproché.",
      { if: J, text: "« C'est là qu'il m'a dit le mot », dis-tu. {autre} regarde la page blanche. {autre:Il} y pose un doigt noir, à plat, et le retire : il n'a pas marqué. « Y a rien d'écrit. — Ils n'ont pas osé. Ils disaient qu'on ne nomme pas la Douzième. — Ben nous non plus », dit {autre}. Et vous riez encore, moins fort." },
      { if: R, text: "« C'est là qu'il m'a dit le mot », dit {autre}. Tu regardes la page blanche. Tu y poses un doigt, à plat. Tu le retires : il n'a pas marqué. Les Fondateurs n'avaient pas osé écrire. On ne nomme pas la Douzième. « Ben nous non plus », dis-tu. Et vous riez encore, moins fort." },
      "Il y a une plume, sur le pupitre, et de l'encre qui n'a pas séché. Le Grand Maître avait dit, en bas, un jour qui n'a pas eu lieu : *qu'ils y mettent la première ligne.* Personne ne vous l'a dit dans cette note-ci. La page est là quand même.",
      "On peut y écrire ce qu'on sait. Que la Douzième sonne dans l'heure de qui la nomme. Que si deux la nomment, ou personne, il arrive ceci. Ce serait la première ligne du quarantième chapitre, de la main de deux apprentis dont l'un sait à peine ses lettres.",
    ],
    choices: [
      { label: "Écrire la ligne, à deux mains", fx: { flag: "monde:g_ligne" }, to: "Fg_guilde_ligne" },
      { label: "Laisser la page blanche : ce n'est pas fini", back: "Fg_ville" },
    ] },

  Fg_guilde_ligne: { act: "V", title: "En penché, puis en bâtons", place: "guilde", ambiance: "ville",
    text: [
      { if: J, text: "Tu prends la plume. Tu écris, en penché, sous le titre : *La Douzième sonne dans l'heure de qui la nomme.* Tu tends la plume à {autre}. {autre:Il} n'en a jamais tenu. {autre:Il} la prend comme un charbon, à pleine main." },
      { if: R, text: "{autre} prend la plume. {autre:Il} écrit, en penché, sous le titre : *La Douzième sonne dans l'heure de qui la nomme.* Puis {autre:il} te la tend. Tu n'en as jamais tenu. Tu la prends comme un charbon, à pleine main." },
      { if: J, text: "{autre:Il} écrit dessous, en grandes capitales qui crachent : *SI PERSONNE LA NOMME ELLE ATTEND. ON L'A FAIT. ON EST DEDANS.* {autre:Il} regarde son ouvrage. Il y a trois pâtés. « C'est sale. — C'est un Livre de Fondateurs, dis-tu. Ils ont fait pire : ils ont laissé blanc. »" },
      { if: R, text: "Tu écris dessous, en grandes capitales, et la plume crache : *SI PERSONNE LA NOMME ELLE ATTEND. ON L'A FAIT. ON EST DEDANS.* Il y a trois pâtés. Tu dis que c'est sale. {autre} dit que c'est un Livre de Fondateurs, et qu'ils ont fait pire : ils ont laissé blanc." },
      "Vous sablez. Vous laissez le Livre ouvert. Si quelqu'un vient un jour dans ce cabinet, par le bord, avec du sable au cou, il saura qu'il y a deux personnes dans la ville qui ont le mot, et où les chercher.",
      "En sortant, vous passez devant l'atelier du levant. Dix établis. Sur l'un d'eux, sous la meilleure fenêtre, une loupe à manche d'ébène attend quelqu'un pour demain.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_cloche: { act: "V", title: "Deux noms, sans date", place: "tour", ambiance: "chateau",
    text: [
      "Vous remontez les trois cent soixante. Cela mange du sable, et vous le savez. Mais l'un de vous n'a jamais vu d'où vient ce qu'il entend, et l'autre veut le lui montrer.",
      { if: R, text: "La Cage. Tu t'arrêtes au dernier échelon. Tu n'avais jamais vu une cloche. Chez toi, on dit *sonner* comme on dit *la mer*. Celle-ci est au-dessus de ta tête, la bouche en l'air, grande comme une maison, et elle chante. Tu lèves la main. {autre} dit que tu peux. Tu poses la paume sur le bronze. Il te remue jusqu'aux talons." },
      { if: J, text: "La Cage. {autre} s'arrête au dernier échelon, la bouche ouverte. {autre:Il} n'avait jamais vu une cloche. {autre:Il} lève la main, te regarde. Tu dis qu'{autre:il} peut. {autre:Il} pose la paume sur le bronze, et tu {autre:le} vois trembler des épaules aux talons, avec une figure d'enfant à qui l'on montre la mer." },
      "Par les abat-sons, on voit la ville entière : les toits, les canaux arrêtés, la plaine. Au septième peuplier, les blés changent de sens. Passé le bord, il y a des villages, de petites fumées penchées. Tout cela tient dans un rond d'une lieue, que la note ne passera plus.",
      { if: R, text: "Tu cherches l'occident. Roquebise est par là, à quatre jours, derrière la courbe. Dans cette année-ci, on y souffle le verre, et ta rue n'a personne de ton nom. Dans la tienne, il y a une vitre sous un toit. Les deux sont derrière le même horizon, et tu es debout dans ce qui les sépare." },
      "Le banc des sonneurs. Quarante noms.",
      { if: J, text: "Tu tailles le tien, ou tu le montres. Puis tu tends le couteau. {autre} hésite. « J'ai pas sonné. J'étais en bas. — Sans le coin, il n'y avait pas de coup. » {autre:Il} taille, en bâtons, sous ton nom. Vous regardez les deux lignes. Il manque la date. On ne sait pas laquelle mettre : on laisse la place." },
      { if: R, text: "{autre} taille son nom, ou te le montre, de ce matin. Puis {autre:il} te tend le couteau. Tu dis que tu n'as pas sonné : tu étais en bas. {autre:Il} répond que sans le coin, il n'y avait pas de coup. Tu tailles, en bâtons, dessous. Il manque la date aux deux lignes. On ne sait pas laquelle mettre : on laisse la place." },
    ],
    choices: [{ label: "Laisser la place de la date", fx: { flag: "monde:g_nom_banc" }, back: "Fg_ville" }] },

  Fg_q_reine: { act: "V", title: "L'avis de la Reine", place: "tour", ambiance: "chateau", fx: { flag: "monde:g_avis_reine", stock: { sable: -1 } },
    text: [
      "La Chambre haute. Un grain, sur la main de la Reine. Le gris se retire. Elle respire, elle vous voit, elle regarde aussitôt l'enfant, qui ne bouge pas.",
      "On lui dit tout, à deux, l'un commençant, l'autre achevant : c'est une chose que vous savez faire. La ville prise, soixante ans, le coup rendu, le mot. Et ceci : que l'heure de sa fille est arrêtée, comme elle l'avait demandé, et que cette fois le mal ne s'étend plus.",
      "Elle écoute, droite. Elle regarde le grain. « Vous me demandez de choisir. » On lui dit que non : on lui demande ce qu'elle voit.",
      "« Je vois ce que j'ai voulu. » Sa voix est basse. « Je l'ai, exactement. Une chambre où ma fille ne meurt pas. Je vous aurais donné la moitié du royaume, il y a neuf jours, pour entendre cette phrase. » Elle regarde Aélis. « Elle ne meurt pas. Elle ne rit pas non plus. Elle n'a pas fini la question qu'elle me posait. J'ai arrêté ma fille au milieu d'une question, et je ne saurai jamais laquelle. »",
      { if: R, text: "Tu lui dis l'écorce. Qu'ici, à trois cents pas, chez un teinturier, il y a le remède ; que tu l'as bu à sept ans. Elle ferme les yeux. « Alors il y a une porte où elle guérit, et une autre où elle dort. Et vous hésitez. » Elle les rouvre. « Vous hésitez pour d'autres que moi. Je le vois. Dites-moi leur nom, que je sache contre qui je plaide. » Tu dis : Lison, ou tu dis : ma rue. Elle hoche la tête, lentement." },
      { if: J, text: "{autre} lui dit l'écorce : à trois cents pas, chez un teinturier. Elle ferme les yeux. « Alors il y a une porte où elle guérit, et une autre où elle dort. Et vous hésitez. » Elle les rouvre, sur {autre}. « Vous hésitez pour d'autres que moi. Dites-moi leur nom, que je sache contre qui je plaide. » {autre} le lui dit. Elle hoche la tête, lentement." },
      "« Une reine vous dirait : rendez midi à ma ville. Une mère aussi. Mais j'ai été mère et reine il y a neuf jours, et voyez ce que j'ai signé. » Le grain baisse. « Ne me demandez plus. Je ne suis pas bon juge de ce qu'on arrête. Gardez-le, vous qui avez su ne pas le prendre. Et quand vous saurez, ne revenez pas me... »",
      "Le gris est revenu. Elle a la main tendue vers vous, à demi, comme on arrête quelqu'un à une porte.",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_q_coudrier: { act: "V", title: "L'avis du Grand Maître", place: "tour", ambiance: "chateau", fx: { flag: "monde:g_avis_coudrier", stock: { sable: -1 } },
    text: [
      "La Chambre basse. Le levier est en haut.",
      { if: LACHE, text: "Il est debout devant, les bras le long du corps : il avait lâché la barre, à la prière qu'on lui en avait faite. Un grain, sur le dos de sa main." },
      { if: { not: LACHE }, text: "Il est debout devant, les poings fermés sur un cuir qui a monté sans lui. Un grain, sur le dos de son poing." },
      "Il éternue. « Elle marche. » Puis il écoute. Sa moustache remue. « Elle marche, et l'on tient une note. Ce n'est pas la onzième. Qu'avez-vous fait ? »",
      "On le lui dit. Il fait répéter un point : *aucun des deux ?* On répète. Il reste un moment très raide.",
      "« J'ai refusé de tenir ce Balancier, il y a neuf jours, devant une reine qui pleurait. J'ai cité le Livre. J'ai dit : on ne tient pas. Je suis descendu ici pour l'arrêter, je me suis battu au levier avec mon propre sous-maître, et à nous deux nous avons pris la ville. » Il regarde la barre. « Vous deux, vous l'avez lâché. Il respire. Et vous tenez quand même quelque chose, qui n'est pas lui : vous tenez votre langue. Le Livre n'a rien contre. Je le sais par cœur, et je viens de le relire en entier. »",
      { if: J, text: "Tu demandes ce qu'il ferait. Il te regarde, de son œil de maître. « Moi ? Je dirais le mot sur-le-champ, pour ma ville, et je me tromperais peut-être de soixante ans. J'ai l'âge où l'on choisit vite, par peur de ne pas avoir le temps de choisir. Vous n'avez pas cette infirmité. »" },
      { if: R, text: "{autre} demande ce qu'il ferait. « Moi ? Je dirais le mot sur-le-champ, pour ma ville, et je me tromperais peut-être de soixante ans. J'ai l'âge où l'on choisit vite. » Il te regarde, toi, les sabots à la main. « Vous êtes de l'autre année. C'est vous que mon choix effacerait ou dépouillerait. Je vous prie de noter que je le sais, et que je l'aurais fait quand même. C'est pourquoi il vaut mieux que ce ne soit pas moi. »" },
      "Le grain baisse. « Gardez. Il faut bien que quelqu'un garde, et vous êtes deux : on se surveille. Mais écrivez-le. Dans le Livre, là-haut, il y a une page pour cela. Une garde qu'on n'écrit pas devient un secret, et j'ai vu ce qu'un secret fait d'une Guilde. » Il joint les talons. « Et tenez-vous droits. On vous regardera long... »",
    ],
    choices: [{ back: "Fg_ville" }] },

  Fg_q_becu: { act: "V", title: "L'avis d'une dentellière", place: "tour", ambiance: "ville", fx: { flag: "monde:g_avis_becu", stock: { sable: -1 } },
    text: [
      "Vous prenez dans la foule, sans choisir. Une femme en coiffe, vingt-deux ans, au troisième rang, un carreau de dentelle sous le bras. Un grain.",
      "« ...ze ! » Elle achève. Elle rit. Puis elle voit ses voisins, et elle cesse. « Qu'est-ce qu'ils ont ? »",
      { if: R, text: "Tu la connais. Chez toi, elle avait un ruban au poignet : *Mahaut Bécu, dentellière, rue de la Poulie.* Un Veilleur de cinquante ans venait le lui renouer tous les ans, en pleurant. C'était son petit-fils. Tu ne lui dis pas cela. Tu lui dis le reste." },
      { if: J, text: "{autre} la regarde d'une drôle de façon : {autre:il} la connaît, de l'autre année, par un ruban. {autre:Il} te dira son nom ensuite. On lui dit le reste." },
      "Elle écoute comme on écoute un boniment de foire, le sourire en coin. Puis elle regarde la goutte, au bout du fil de la fontaine, qui ne tombe pas. Le sourire s'en va.",
      "« Et vous me demandez, à moi ? » On dit oui. On dit qu'on l'a prise au hasard, pour cela. « J'ai du pain au four. Rue de la Poulie. Je l'ai mis avant de monter. Il brûle ? » On lui dit que non : rien ne brûle. « Alors il ne cuit pas non plus. »",
      "Elle réfléchit. Elle a les mains qui bougent toutes seules, sur son carreau, par métier. « Je vais vous dire ce que je sais. Une dentelle, tant qu'elle est sur le carreau, avec ses épingles, on peut tout y changer. Elle est belle, elle est tendue. On ne peut pas la porter. Il faut ôter les épingles, un jour, et alors on voit ce qu'elle vaut, et l'on ne peut plus rien y reprendre. »",
      "Elle regarde le grain. « Ôtez les épingles. Quand, je ne sais pas : c'est vous qui avez l'ouvrage sous les yeux. Mais on ne fait pas une dentelle pour le carreau. Et dites à ma mère que le pain... »",
    ],
    choices: [{ back: "Fg_ville" }] },
});

module.exports = { passages: P, extras: {} };
