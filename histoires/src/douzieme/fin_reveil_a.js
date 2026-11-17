// Le Douzième Coup · dénouement « reveil » (the one below said the word alone : noon rings on 21 June 601, sixty years
// late), part A : the stroke, each on their own (the Cage and the High Chamber ; the cellar, the forty buyers, Jehan),
// the meeting at the niche (`Fr_niche`), what to do with the old Aubespin (`monde: "vieux601"` : `monde:v_vieux_compte`
// | `monde:v_vieux_reine` | `monde:v_vieux_line`), and the way out through the Garde du Sable (`Fr_porte`), toward
// `Fr_parvis` (part B). Also : `monde:v_date_cage`, `r:v_quarante`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var LACHE = { has: "monde:coudrier_lache" };
var EVEILLEE = { has: "monde:reine_eveillee" };
var REMEDE = { has: "monde:aelis_remede" }, ECORCE = { has: "monde:aelis_ecorce" };
var REFUSE = { has: "monde:jeune_refuse" };
var NOM = { has: "monde:nom_cage" };
var TENU = { has: "monde:escalier_tenu" };

Object.assign(P, {
  F_reveil: { act: "V", title: "Midi, soixante ans après", place: "tour", ambiance: "chateau",
    text: [
      "Il tombe là-bas. Il tombe chez celui des deux qui est né après.",
      { if: R, text: "Tu l'as dit. Tu as encore le mot dans la bouche, rond, défendu, avec un goût de charbon. Et le coup, qui venait par la voûte, change de place en arrivant : il était d'un matin de 541, et il sonne dans ta cave à toi, celle des douze tuyaux de verre et de la herse, à une semelle de ton sabot." },
      { if: R, text: "La vague grise est là, bombée, arrêtée. Elle tremble. Elle se retire. Elle s'en va du pavé comme une marée qu'on rappelle, par-dessus le bord, dans le puits ; et le puits l'avale, cercle après cercle, année après année, tout ce qu'il avait pris depuis soixante ans, jusqu'à la pierre noire." },
      { if: R, text: "Au fond, quelque chose se remet à aller d'un bord à l'autre. Et là-haut, par l'œil de la voûte, il descend un bruit que tu n'as jamais entendu de ta vie, et que tu reconnais : quarante mille personnes qui finissent un cri." },
      { if: J, text: "Tu l'entends. Il sort de la Cage par les huit abat-sons, large, doré. Tu as serré les dents, et il est parti quand même, sans toi, vers une année que tu n'as pas nommée. Tu sais laquelle. C'est la tienne." },
      { if: J, text: "Tu te penches entre deux abat-sons. La place est grise de poussière. Elle l'est depuis soixante ans, et tu ne l'avais pas vue ainsi ce matin : des rubans bleus à tous les poignets, une passerelle de planches au-dessus des têtes, des manteaux blancs sur la passerelle. Puis cinq mille épaules remuent toutes à la fois, et la poussière monte, d'un seul nuage, jusqu'au cadran." },
      { if: J, text: "« ...ze ! » Ils achèvent. Puis l'autre, à pleine gorge : « Douze ! » Ils l'avaient dans la bouche depuis soixante ans. Sur la passerelle, les manteaux blancs se sont jetés à genoux. En dessous, des gens toussent, s'époussettent, et commencent à regarder les rubans qu'on leur a noués." },
      "C'est le vingt et un juin 601. Il est midi. Il vient de se réveiller, dans cette ville, quarante mille personnes qui croient qu'on est en 541, et qui vont l'apprendre une par une.",
    ],
    choices: [
      { label: "Te relever, sous la cloche", hide: R, to: "Frj_cage", big: true },
      { label: "Te retourner vers la salle", hide: J, to: "Frr_cave", big: true },
    ] },

  // ===== the one who passes : down from the Cage, in 601
  Frj_cage: { act: "V", title: "Le banc, soixante ans plus vieux", place: "tour", ambiance: "chateau",
    text: [
      "La Patiente se balance. Tu la regardes. C'est la même, et le bronze a verdi d'un ton : il a eu soixante hivers, dans l'intervalle d'un battement, pendant que tu étais à genoux dessous.",
      "Tu regardes tes mains. Elles n'ont pas changé. Tu es sorti{e} par la porte qu'on a ouverte : tu as seize ans, en 601, où tu es né{e}. Tu es rentré{e}. Tu es parti{e} il y a neuf jours par une grange, et tu reviens par un clocher, en ramenant une capitale.",
      { if: { secret: "j_rester" }, text: "Tu avais voulu rester là-bas. Tu l'avais caché jusque dans le Cahier. Tu as serré les dents, au dernier moment, et tu ne sais pas encore si c'était du courage ou de la politesse. Là-bas n'existe plus. Ou plutôt : là-bas vient de monter jusqu'ici, tout entier, avec ses gens, et il va falloir lui expliquer le prix du pain." },
      "Le banc des sonneurs est contre le mur. Le chêne a foncé. Les quarante noms y sont, et le dernier des anciens : *Thibaut, 481.*",
      { if: NOM, text: "Dessous, le tien. Tu l'as taillé ce matin. L'entaille a soixante ans : elle est noire, patinée, douce au doigt, comme les autres. Quelqu'un est venu la voir, souvent. Il y a, à côté, tracée d'une pointe fine, une petite roue à dents de scie." },
      { if: { not: NOM }, text: "Dessous, le bois est nu, et il a soixante ans de poussière. Personne n'est monté ici depuis toi." },
    ],
    choices: [
      { label: "Tailler la date : 601", fx: { flag: "monde:v_date_cage" }, to: "Frj_date" },
      { label: "Descendre", to: "Frj_chambre", big: true },
    ] },

  Frj_date: { act: "V", title: "Deux dates", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: NOM }, text: "Tu tailles ton nom, en lettres droites, et une oreille ouverte." },
      "Tu creuses un six, un zéro, un un. Le bois est plus dur qu'il ne l'était ce matin : il a séché soixante ans de plus.",
      "Puis tu t'arrêtes. Tu as pris la corde en 541. Tu l'as lâchée en 601. Les quarante d'au-dessus ont mis la date de leur service, et aucun n'a servi d'une année à l'autre sans vieillir d'un jour.",
      "Tu ajoutes, devant, plus petit : *541.* Et un trait entre les deux. C'est la plus longue sonnerie qu'on ait inscrite sur ce banc. Elle a duré douze coups.",
      "Tu souffles la sciure. Elle est claire, sur le chêne noir. Dans soixante ans, elle aura foncé, et l'on ne verra plus lequel des deux chiffres est venu le premier.",
    ],
    choices: [{ label: "Descendre", to: "Frj_chambre", big: true }] },

  Frj_chambre: { act: "V", title: "Chez des étrangers", place: "tour", ambiance: "chateau",
    text: [
      "Vingt échelons. Le palier. La porte de chêne.",
      { if: EVEILLEE, text: "Elle est ouverte. La Reine a poussé la croisée en grand, et elle regarde en bas, l'enfant sur la hanche. Elle voit la passerelle, les rubans, les manteaux blancs à genoux. Elle a compris avant que tu parles : elle a la figure de quelqu'un qui débarque." },
      { if: EVEILLEE, text: "« Six cent un », dit-elle. Tu dis oui. Elle respire. « J'avais demandé cette porte, ou je vous avais laissé le choix : peu importe, à présent. Me voilà chez des étrangers. Dites-moi vite ce qu'une reine de soixante ans de retard doit savoir avant de descendre. »" },
      { if: { not: EVEILLEE }, text: "Le verrou joue, du dedans. La Reine est sur le seuil, en blanc, l'enfant sur la hanche. « Où est maître Aubespin ? Il avait dit : au douzième. Rien ne s'est arrêté. » Puis elle voit, par la baie du palier, la place grise, la passerelle, les rubans. « Qu'est-ce que c'est que ces planches ? »" },
      { if: { not: EVEILLEE }, text: "Tu le lui dis. Tu n'as pas de façon douce. Tout s'est arrêté, Madame. La ville, une lieue de plaine, puis des bourgs, année après année. On vient de rendre le coup. Il a sonné soixante ans après le onzième. Elle te regarde. Elle regarde ses mains, qui n'ont pas une ride de plus. « Soixante », répète-t-elle, et elle s'appuie au chambranle, une seule fois, de l'épaule." },
      "Tu lui dis ce qu'il faut. Qu'il y a une Régente, qui s'appelle Odeline, qui a vingt-huit ans, et qui jurait encore ce matin, de bonne foi, de lui rendre le royaume à son réveil. Que le duc est mort depuis quarante ans. Que le sous-maître vit, qu'il a quatre-vingt-dix ans, et qu'il est en bas.",
      { if: REMEDE, text: "Aélis ouvre le poing. La fiole de grès y est. « J'ai ça. Ça sent mauvais. » Tu dis ce que c'est. La Reine s'assoit sur le petit lit blanc, d'un coup, comme si l'on venait de lui couper deux cordes." },
      { if: { not: REMEDE }, text: "« Et ceci ? » Elle n'a pas besoin de montrer l'enfant. Tu dis que cela se guérit. Qu'ici, à présent, c'est une écorce qu'on vend au poids, entre les sangsues et le miel rosat ; que les Veilleurs en ont dans leurs coffres, et qu'il y en aura une prise dans cette chambre avant une heure. La Reine ferme les yeux. Elle avait arrêté une ville pour attendre cela. Elle y est." },
      { if: { has: "j:aelis_adieu" }, text: "« Je l'ai entendu, dit Aélis. Avec mes oreilles. » Elle te regarde. « Tu n'as pas choisi. C'est l'autre. » Tu dis oui. Elle hoche la tête. « Il y a quelqu'un, ici ? » Tu penses à une vieille femme sur une chaise, au pied de cette Tour. « Oui. Il y a quelqu'un. »" },
    ],
    choices: [{ label: "Descendre la vis", to: "Frj_vis", big: true }] },

  Frj_vis: { act: "V", title: "Des hommes en noir, dans l'escalier", place: "tour", ambiance: "chateau",
    text: [
      "Tu descends. Aux meurtrières, il y a du jaune, du bleu, et une poussière qui n'en finit pas de retomber sur la ville.",
      "Au second palier, Baudouin est debout, en tablier vert, deux boulettes de cire dans la paume. Il regarde, trois marches plus bas, un homme en noir, casqué, une hallebarde à la main, qui le regarde aussi. Ils ont le même âge. Ils ont soixante ans d'écart.",
      { if: TENU, text: "L'homme en noir a les mains levées. Derrière lui, l'escalier est aux manteaux blancs : on s'est battu ici ce matin, de marche en marche, et la Garde du Sable a perdu la vis. Un sergent blanc monte, voit le tablier vert, voit tes paumes en sang. « D'où sortent ceux-là ? — De là-haut, dis-tu. De soixante ans. » Il ôte son casque. C'est tout ce qu'il trouve à faire, et c'est bien trouvé." },
      { if: { not: TENU }, text: "L'escalier est à la Garde du Sable : un noir toutes les dix marches, la paume ouverte, comme on les poste depuis quarante ans. Celui-ci a entendu douze coups. On lui avait dit qu'il n'y en aurait jamais que onze. Il te regarde descendre, avec ta sciure et tes mains en sang, et il s'efface contre le mur, la hallebarde au pied. Il ne sait plus de qui il garde quoi." },
      "« Qui êtes-vous ? demande Baudouin à l'homme en noir. — Garde du Sable. Et vous ? — Guilde. Apprenti de maître Aubespin. » L'homme en noir a un mouvement. « Le Maître ? Le vieux ? — Il a trente ans », dit Baudouin, offensé.",
      "Tu les laisses s'expliquer. Il y en aura quarante mille, de ces conversations, avant ce soir.",
    ],
    choices: [{ label: "Les quatre-vingts dernières marches", to: "Fr_niche", big: true }] },

  // ===== the one who stays : the cellar of 601
  Frr_cave: { act: "V", title: "Deux caves l'une dans l'autre", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Tu es dans ta cave, celle de 601 : douze panses de verre dans leurs berceaux, la porte de fer derrière le dixième, la herse au palier. Et les gens de l'autre y sont. Ils sont sortis de la note par où tu l'as ouverte : neuf garçons en tablier vert, un enfant au maillet, un vieillard à moustache, un homme de trente ans. Ils s'éveillent tous à la fois, au milieu de tuyaux qu'ils n'ont jamais vus." },
      { first: true, text: "Le grand roux achève d'étendre le bras. Il trouve le levier en haut. Il trouve aussi, sous sa main, à la place du berceau vide, une cuve de verre grosse comme une barrique, où il reste un fond de gris. Il recule. Les neuf regardent autour d'eux, la bouche ouverte, et aucun n'entend : ils ont de la cire." },
      { first: true, text: "Tu es chez toi. C'est une chose que tu dis rarement, et jamais d'une cave. Tu as dit le mot, et quarante mille personnes viennent d'entrer dans ton année, sans bagages." },
      { again: true, text: "La Chambre basse. Les cuves sont ternes. Au fond du puits, la grande chose noire va et vient." },
    ],
    choices: [
      { label: "Le vieillard à moustache", hide: { seen: "Frr_coudrier" }, to: "Frr_coudrier" },
      { label: "L'homme de trente ans", hide: { seen: "Frr_jeune" }, to: "Frr_jeune" },
      { label: "Le Maître des Sables, sur son berceau", hide: { seen: "Frr_vieux" }, to: "Frr_vieux" },
      { label: "L'enfant au maillet", hide: { seen: "Frr_ansel" }, to: "Frr_ansel" },
      { label: "La porte de fer, derrière le dixième berceau", hide: { seen: "Frr_quarante" }, to: "Frr_quarante" },
      { label: "Le pied de l'escalier", to: "Frr_monte", big: true },
    ] },

  Frr_coudrier: { act: "V", title: "Cent ans d'araignées de moins", place: "tour", ambiance: "chateau",
    text: [
      { if: LACHE, text: "Il est debout devant le levier, les talons joints. Tu l'as vu à cette place, chez toi, pendant des années de récits : une statue grise, que les glaneurs appelaient *le Maudit* et dont on n'approchait pas. Il respire. Il éternue : c'est la poussière." },
      { if: { not: LACHE }, text: "Ses poings se sont refermés sur du vide. Il regarde ses mains, la barre, en haut, le puits, qui bat. Tu l'as vu à cette place, chez toi, gris, avec cent ans d'araignées sur le dos. Il respire. Il éternue : c'est la poussière." },
      "« Elle marche. » Sa voix est sèche, nasale. Puis il voit les cuves, les tuyaux, la porte percée où il y avait un mur. Il fait le tour de tout cela des yeux, lentement, en homme du métier. « Je ne connais pas ces verreries. Qui a percé mon mur ? »",
      "Tu dis qui. Tu dis quand. Tu dis l'année.",
      "« Six cent un. » Sa moustache remue. « J'en aurais calculé cinquante-huit, pour la voûte. » Il l'a dit. Il devait le dire. Il regarde ses mains, qui ont soixante-dix ans et pas un jour de plus. « J'ai donc dormi debout pendant trois règnes. On m'a souvent reproché le contraire. »",
      "Il te regarde mieux. « C'est tombé chez vous. Vous l'avez dit. » Tu fais oui. « Alors tous ceux que je connais sont ici, et tous ceux qu'ils aimaient, dehors, sont morts ou chenus. » Il se tait. « C'était l'un ou l'autre. Je n'aurais pas su choisir. On a bien fait de ne pas me le demander. »",
      { if: { has: "r:jehan_nom" }, text: "« Il y a un garçon, au pied de l'escalier, dis-tu. Vingt ans. Il s'appelle Coudrier, et il vient de le redevenir. » Le vieillard rajuste son habit. Il cherche son chapeau. « Mon arrière-petit-fils a vingt ans, et j'en ai soixante-dix. Nous aurons le temps de nous déplaire. Menez-moi. »" },
      { if: { not: { has: "r:jehan_nom" } }, text: "« On vous appelle le Maudit, dis-tu. Depuis soixante ans. C'est dans la Chronique. » Il hausse les sourcils. « Le Maudit. C'est un titre. Aubespin n'en a jamais eu d'aussi court. » Il rajuste son habit. « Il doit me rester de la famille, sous un autre nom. On change deux lettres, dans ces cas-là. Je les retrouverai : je sais comment nous joignons les talons. »" },
    ],
    choices: [{ back: "Frr_cave" }] },

  Frr_jeune: { act: "V", title: "Ce qu'il allait devenir, à trois pas", place: "tour", ambiance: "chateau",
    text: [
      { if: REFUSE, text: "Il est assis par terre, contre un berceau, les mains ouvertes sur les genoux. Le berceau a une cuve dedans, à présent, froide contre son dos. Il lève la tête. Il voit les douze panses de verre qu'il avait commandées à Roquebise, posées où il les voulait, pleines d'un reste de gris." },
      { if: { not: REFUSE }, text: "Il a les doigts recourbés sur un cuir qui a monté sans lui. Il les déplie. Il voit les douze panses de verre qu'il avait commandées à Roquebise, posées où il les voulait, avec leurs tuyaux, et un fond de gris dans chacune." },
      "« Elles sont en place. » Sa voix est blanche. « Je ne les avais pas encore fait descendre. » Il regarde le vieillard sur son berceau. « Vous les avez mises. Vous avez tout mis. La porte, la herse. Vous avez fait tout ce que j'avais dans mes cartons. »",
      "Tu lui dis l'année. Tu lui dis ce qu'on a tiré de ces cuves, pendant soixante ans, et à quel prix on le vendait, et ce qu'on faisait aux enfants qui en ramassaient les miettes dans les fossés.",
      { if: { has: "r:jeune_frappe" }, text: "Il se tient les poignets. Ils sont rouges. « Vous m'avez frappé. — Oui. — Vous aviez le droit. » Il le dit sans bassesse. Il a regardé les cuves, et il a fait une addition." },
      "« J'avais dessiné cela pour un an. Une chambre, une cuve, un an. » Il se relève. « On me jugera sur ce que je voulais, ou sur ce qu'il a fait ? »",
      "Tu dis que tu l'ignores. Que tu n'es pas juge. Que chez toi, d'ordinaire, on juge sur ce qu'on a dans les poches.",
      "Il retourne ses poches. Il le fait pour de bon, devant toi, comme un gamin pris à la barrière : un crayon, une clef, un mouchoir, un écu à la couronne. Il te regarde. « C'est tout. Je n'avais encore rien vendu. »",
    ],
    choices: [{ back: "Frr_cave" }] },

  Frr_vieux: { act: "V", title: "Quarante mille veufs", place: "tour", ambiance: "chateau",
    text: [
      "Il est assis, le dos droit, les deux mains sur sa canne. Son dernier grain a fini. Il a entendu : c'est ce qu'il voulait de ce grain-là.",
      "« Vous l'avez dit. » Il n'y a pas de reproche. Il y a de l'exactitude. « Je vous avais fait le compte. Quarante mille veufs d'un coup de cloche. Écoutez-les. » Par l'œil de la voûte, il descend une rumeur énorme, sans paroles, où l'on distingue par moments un cri isolé. « C'est le premier qui vient d'apprendre l'année. Il y en aura un par Pater jusqu'à la nuit. »",
      "Il regarde les cuves. Le gris, au fond, a cessé de luire.",
      "« Mon puits ne sue plus. Il respire : c'est une fonction honorable, et qui ne rapporte rien. Il me reste, rue du Cadran, onze jarres de verre vert. C'est tout le sable qui existera jamais. Mes gardes sont payés en pincées, mes acheteurs en décennies. Ils le sauront ce soir. » Son petit rire. « D'ici ce soir, j'ai soixante hommes dans cet escalier, et je pourrais vous y faire descendre la tête la première. Cela ne me rendrait pas un grain. Je n'ai jamais rien fait d'inutile. »",
      { if: { has: "r:couvert_redit" }, text: "« Vous aviez un couvert. Vous l'avez pesé, et vous avez dit le mot quand même. » Il te considère. « Pour une enfant de cinq ans. — Pour quarante mille. Et pour elle. — Dans cet ordre ? » Tu ne réponds pas. Il incline la tête. « Non. Je m'en doutais. C'est la seule faiblesse que je vous connaisse, et c'est elle qui m'a battu. »" },
      "Il se lève, en deux temps. « Je suis chez moi. C'est ma ville, mon année, ma Maîtrise. Je n'y ai plus rien à vendre. Vous allez voir, d'ici ce soir, une chose instructive : ce que pèse un homme à qui tout le monde devait, le jour où il ne peut plus prêter. »",
    ],
    choices: [{ back: "Frr_cave" }] },

  Frr_ansel: { act: "V", title: "Rue de la Poulie, soixante ans après", place: "tour", ambiance: "chateau",
    text: [
      "Il a treize ans, un maillet, de la cire aux oreilles. Il regarde les cuves comme on regarde des bêtes. Tu lui ôtes la cire, du petit doigt, une oreille puis l'autre.",
      { if: { has: "monde:ansel_dit" }, text: "« Vous m'avez écrit par terre. » Il regarde le pavé, où il n'y a rien. « Au charbon. Je l'ai pas rêvé ? — Non. Tu m'as montré comment chasser un coin. Ça a marché. » Il rougit, de plaisir." },
      "Il tire sa montre neuve. Il l'ouvre. Elle marche. Elle marque midi et un demi-quart, d'un jour qui a soixante ans. Il la porte à son oreille. Il sourit.",
      "Il faut le lui dire. Tu t'accroupis, pour être à sa hauteur. Tu as dit cela cent fois, chez toi, à des dormants réveillés d'une pincée, en regardant ailleurs. Tu le regardes.",
      "« Écoute. On est en 601. T'as dormi debout, sans le savoir, soixante ans. Toute la ville. Ta rue aussi. »",
      "Il fait le compte. Il est apprenti horloger : il le fait vite. Sa figure change. « Ma mère. »",
      { if: { has: "monde:hurel_debout" }, text: "« Elle avait de la cire. Comme toi. Elle a dormi debout sur son seuil, rue de la Poulie. Elle vient de se réveiller, comme toi, et elle a ton âge de mère : pas un jour de plus. Elle court vers la porte de fer. Elle sait que tu en sors. » Il lâche le maillet. Il est dans l'escalier avant qu'il ait touché le pavé." },
      { if: { not: { has: "monde:hurel_debout" } }, text: "« Elle était à son rouet. Elle a été prise comme tout le monde, le pied sur la pédale. Elle vient de se réveiller, avec ses deux bouts de fil. Elle a ton âge de mère : pas un jour de plus. » Il respire. Il ne comprend pas tout. Il a compris cela. Il lâche le maillet, et il est dans l'escalier avant qu'il ait touché le pavé." },
      "Tu ramasses le maillet. Tu le poses sur son trait de craie. C'est le seul, de tous ceux qui se réveillent aujourd'hui, à qui tu aies pu dire que personne ne lui manquerait.",
    ],
    choices: [{ back: "Frr_cave" }] },

  Frr_quarante: { act: "V", title: "Le quarante et unième couvert", place: "tour", ambiance: "chateau",
    text: [
      "La porte de fer, derrière le dixième berceau. Elle n'est pas fermée : on comptait revenir. Tu la pousses.",
      "Une salle basse, voûtée, tendue de drap gris. Une table en fer à cheval, quarante couverts d'argent, quarante sabliers d'or posés devant quarante assiettes. Ils sont vides. On les avait vidés d'avance, à midi moins le quart, par cérémonie : on devait les remplir à la cuve, tous ensemble, quand la vague aurait fini sa course.",
      "Ils sont quarante, assis. Des hommes, des femmes, en velours, avec des joues de cire et des mains de vieillards. Ils ont entendu douze coups. On leur en avait promis onze, et l'éternité derrière.",
      "Au bout de la table, il y a une quarante et unième chaise, vide, avec un couvert d'étain. C'était le tien.",
      "Ils te regardent : des sabots, du charbon, dans leur porte. Une femme à perruque demande, d'une voix flûtée, où est le Maître, et si l'on peut remplir. Tu regardes son sablier. Tu regardes les quarante.",
      "« Y a plus rien à remplir. Le puits marche. Y aura plus de rosée, ni ce soir, ni jamais. Ce que vous avez sur vous, c'est tout ce que vous aurez. »",
      "Il y a un silence. Puis un gros homme, qui a trente ans de figure et quatre-vingts de regard, dit : « J'ai donné la forêt de Vauxelles pour dix ans. — Je sais. On m'a chassé{e} de ses fossés. » Tu n'ajoutes rien. Tu vois le compte se faire, autour de la table, sur quarante figures : combien il reste dans la bourse, combien de jours cela fait, et ce qu'on redevient ensuite.",
      "Tu prends le couvert d'étain. La cuiller, seulement. Tu la mets dans ta poche. On ne t'avait jamais invité{e} nulle part : il te faut une preuve.",
    ],
    choices: [{ label: "Refermer la porte de fer", fx: { flag: "r:v_quarante" }, back: "Frr_cave" }] },

  Frr_monte: { act: "V", title: "Au pied de l'escalier, chez toi", place: "tour", ambiance: "chateau",
    text: [
      { if: { has: "r:jehan_marche" }, text: "Jehan est au pied des marches, le dos au mur, sa pique en travers. Il t'avait suivi{e} jusque-là ce matin, et tu l'y avais laissé. Il a entendu la cloche. Il a vu monter le gris, puis il l'a vu redescendre ; et il a vu sortir du mur neuf garçons en vert qui n'y étaient pas. Il a vingt ans, et la figure de quelqu'un qui a décidé de ne plus s'étonner avant le soir." },
      { if: { has: "r:jehan_marche" }, text: "« C'est fait ? — C'est fait. — Les deux ? » Tu montres le plafond. « L'autre descend. » Il hoche la tête. Puis il voit, derrière toi, un vieillard à moustache, qui joint les talons. Il devient très pâle. Il écarte les siens." },
      { if: { not: { has: "r:jehan_marche" } }, text: "Il n'y a personne au pied des marches. Tu avais laissé du monde derrière toi, ce matin, sur le parvis et dans la vis : des blancs, des noirs, un garçon de vingt ans qui cherchait son nom. Tu les retrouveras en haut." },
      "Tu entends des pas, dans la vis. Tu les comptes. C'est un pas que tu connais par l'écriture. Tu montes à sa rencontre.",
      { if: { secret: "r_soeur" }, text: "Il y a une petite de cinq ans, sous un toit, à dix lieues d'ici, qui vient d'achever un souffle commencé il y a six ans. Elle va chercher quelqu'un de dix ans. Tu as dit le mot. Tu ne l'as dit à personne pendant neuf jours, et tu vas le dire dans un escalier : pour qui." },
      "Tu t'arrêtes à la niche. Chez toi, il y a un mot rayé dans la pierre, à la flamme : *JUSTE.* Il a soixante ans. Tu sais à présent de qui est la main.",
    ],
    choices: [{ label: "Attendre, à la niche", to: "Fr_niche", big: true }] },

  // ===== together again
  Fr_niche: { act: "V", title: "Au tournant, en 601", backName: "la niche", charniere: true, aparte: true,
    text: [
      { first: true, if: R, text: "{autre} descend les dernières marches. {autre:Il} a les paumes en sang, de la sciure aux genoux. {autre:Il} te voit, adossé{e} à la pierre, sous le mot rayé. {autre:Il} s'arrête deux marches plus haut." },
      { first: true, if: R, text: "« T'as rien dit », dis-tu. {autre:Il} fait non. « J'ai serré les dents. Je t'ai laissé{e}. » Tu regardes cette figure, que tu connaissais par cœur avant de l'avoir vue. « Pourquoi ? » {autre:Il} met du temps. « Parce que tu avais quelqu'un dans un seul des deux mots. Moi, j'en avais dans les deux. »" },
      { first: true, if: { all: [R, { secret: "r_soeur" }] }, text: "Tu ne lui avais rien dit. Pas un mot, en neuf jours, ni dans le Cahier, ni à voix haute. Tu le lui dis. « Lison. Cinq ans. Roquebise. Elle s'est retournée dans la rue, la nuit du Bond. C'est pour elle que je marchais. » {autre:Il} ne paraît pas surpris{autre:e}. « On ne marche pas neuf jours dans du gris pour une reine. Je m'en doutais. Je ne savais pas le nom. »" },
      { first: true, if: J, text: "{autre} est à la niche, sous un mot rayé dans la pierre, qui n'y était pas ce matin et qui a soixante ans. {autre:Il} te regarde descendre." },
      { first: true, if: J, text: "« T'as rien dit. » Tu fais non. Tu as serré les dents ; tu le lui dis. « Pourquoi ? » Tu cherches. Il y avait une vieille sur une chaise, et une enfant dans un pré, et tu étais la seule personne qu'on attendît des deux côtés. « Parce que tu avais quelqu'un dans un seul des deux mots. Moi, j'en avais dans les deux. Je ne perdais pas tout. »" },
      { first: true, if: { all: [J, { secret: "j_malade" }] }, text: "Il y a une chose que tu as jurée de taire, et le serment tombe de lui-même, puisque tu es rentré{e}. « Line est en bas, sur le parvis. Elle est très malade. Les poumons. Elle me l'a fait cacher : elle disait qu'il te fallait un guide, pas un pleureur. » {autre} te regarde. « Je sais. Je l'ai vue, ce matin. Elle respire comme une forge crevée. Elle m'a dit de pas te le dire que je savais. » Vous vous regardez. Elle vous a eus tous les deux, avec le même secret, et elle doit en rire sur sa chaise." },
      { first: true, text: "En haut, une reine descend, qui a soixante ans de retard. En bas, deux vieillards et un jeune homme. Dehors, une ville qui tousse. Vous restez un moment au tournant, sans rien dire. Vous êtes rentrés. Aucun de vous deux ne savait qu'on pouvait rentrer à tant de monde." },
      { first: true, if: J, text: "{autre} remet ses sabots, en se tenant à ton épaule. « Je vais à Roquebise, dit-{autre:il}. Pas tout de suite. Y a du monde à réveiller comme il faut, ici, d'abord. Mais j'y vais. » {autre:Il} te regarde, de côté. « Tu viens, ou tu viens pas. Je demande pas. Je dis où je serai. »" },
      { first: true, if: R, text: "Tu remets tes sabots, en te tenant à son épaule. Tu dis que tu vas à Roquebise. Pas tout de suite : il y a du monde à réveiller comme il faut, ici, d'abord. Mais tu y vas. {autre:Il} vient, ou {autre:il} ne vient pas. Tu ne demandes pas. Tu dis où tu seras." },
      { again: true, text: "La niche, au tournant, et son mot rayé." },
    ],
    choices: [{ label: "Descendre ensemble au puits", to: "Fr_vieux", big: true }] },

  // ----- the Master of Sands, the day he has nothing left to lend
  Fr_vieux: { act: "V", title: "Ce que pèse un homme qui ne peut plus prêter", place: "tour", ambiance: "chateau", charniere: true, backName: "le puits",
    text: [
      { first: true, text: "Le Grand Maître a rangé les neuf en demi-cercle, sans cire. Il a regardé longuement les cuves. Il n'a rien dit. Puis il a pris par le bras l'homme de trente ans, et il l'a mis à sa gauche, de son côté du puits : c'est une place d'accusé ou de protégé, selon l'heure." },
      { first: true, if: REFUSE, text: "« Celui-ci est de ma maison et de mon année. Il a lâché quand on lui a montré la marge. Je le reprends : il fera des goupilles au dernier établi, jusqu'à ce qu'il cesse de compter. La Guilde lave son linge. » Il se tourne vers le berceau. « L'autre n'est pas à moi. »" },
      { first: true, if: { not: REFUSE }, text: "« Celui-ci est de ma maison et de mon année. Il a tenu jusqu'au bout de ce qu'on lui donnait de force. Je le remettrai à la Reine, avec ce que je sais ; elle a le droit d'entendre de sa bouche le prix qu'on avait fait d'elle. La Guilde ne lave pas ce linge-là. » Il se tourne vers le berceau. « L'autre n'est pas à moi. »" },
      { first: true, text: "Le vieil homme est debout, appuyé des deux mains. Il a déjà changé : la peau des tempes, le coin de la bouche. Le sable le quitte." },
      { first: true, text: "« Il n'est à personne, reprend le Grand Maître. Il a été reçu chez nous en 536, il a régné soixante ans sur une chose que j'ignore, et il a là-haut soixante hallebardes. Je ne suis pas de ce siècle. Vous deux, vous en êtes. Vous l'avez battu. Dites ce qu'on en fait, avant que ses gardes apprennent qu'il ne peut plus les payer : après, ce sera l'affaire de la rue, et la rue juge mal. »" },
      { first: true, text: "« Il a raison, dit le vieil homme. J'ai jusqu'à ce soir. Ensuite, on me cherchera pour me pendre, et parmi ceux qui tiendront la corde il y aura quelques-uns de mes meilleurs clients. Disposez. Je vous écoute avec intérêt : c'est la première sentence où je n'aurai pas eu mon mot à dire. »" },
      { again: true, text: "Le vieil homme attend, debout, qu'on dise ce qu'on fait de lui." },
    ],
    choices: [
      { label: "« Qu'il tienne le compte. Quarante mille noms, et ce que chacun a perdu. Il sait compter. »", monde: "vieux601", option: "compte", fx: { flag: "monde:v_vieux_compte" }, to: "Fr_vieux_compte" },
      { label: "« Qu'il monte devant la Reine, sur l'estrade, devant tout le monde. »", monde: "vieux601", option: "reine", fx: { flag: "monde:v_vieux_reine" }, to: "Fr_vieux_reine" },
      { label: "« Qu'on le mène à la chaise de Line. Elle lui a pris un quart d'heure : qu'elle ait le reste. »", monde: "vieux601", option: "line", fx: { flag: "monde:v_vieux_line" }, to: "Fr_vieux_line" },
    ] },

  Fr_vieux_compte: { act: "V", title: "Le Rôle", place: "tour", ambiance: "chateau",
    text: [
      "Il lève un sourcil. « Un registre. »",
      { if: R, text: "« Y a un frère, chez les Veilleurs, dis-tu. Macaire. Il tient le Rôle depuis vingt ans : chaque maison, chaque dormant, chaque absent. Il a les noms. Il a pas les comptes. Ce qu'on leur a pris pendant qu'ils dormaient. Les maisons vendues. Les terres que la Régence a données. Ce qui est parti dans les fossés. » Tu regardes tes mains. « Je peux lui dire ce qui est parti dans les fossés. J'en ai porté. »" },
      { if: J, text: "« Il y a un frère, chez les Veilleurs, dit {autre}. Macaire. Il tient le Rôle : chaque maison, chaque dormant. Il a les noms. Il a pas les comptes. Ce qu'on leur a pris pendant qu'ils dormaient. » {autre} regarde ses mains. « Je peux lui dire ce qui est parti dans les fossés. J'en ai porté. »" },
      { if: J, text: "Tu achèves, pour le vieil homme. « Vous, vous savez le reste. Ce que la Maîtrise a tiré, année par année. À qui elle l'a vendu. Contre quoi. Vous l'avez dans la tête. Vous l'écrirez, ligne par ligne, en face de chaque nom, jusqu'à ce que le compte soit juste. »" },
      { if: R, text: "{autre} achève, pour le vieil homme. « Vous, vous savez le reste. Ce que la Maîtrise a tiré, année par année. À qui elle l'a vendu. Contre quoi. Vous l'écrirez, ligne par ligne, en face de chaque nom, jusqu'à ce que le compte soit juste. »" },
      "Il se tait longtemps. On entend le puits.",
      "« C'est une sentence d'horloger. » Sa voix a baissé. « Quarante mille lignes. À dix par heure, douze heures par jour, cela fait un an, moins les fêtes. Je n'ai pas un an. Sans sable, j'ai jusqu'à la Saint-Jean. » Il vous regarde. « Vous le savez. Vous me condamnez donc à un ouvrage que je ne finirai pas. »",
      "On lui répond qu'on le condamne à le commencer, et qu'un autre finira.",
      "Il incline la tête, de son inclinaison exacte. « Je commencerai par les Noyer. C'est une famille de trois. Cela se fait en une ligne, et je la dois depuis longtemps. »",
    ],
    choices: [{ label: "Remonter", to: "Fr_porte", big: true }] },

  Fr_vieux_reine: { act: "V", title: "Le mémoire", place: "tour", ambiance: "chateau",
    text: [
      "Elle descend justement. On l'entend dans l'escalier : un pas égal, une robe qui pèse, la voix d'une enfant qui compte les marches. Le Grand Maître joint les talons. Les neuf ôtent leurs bandeaux.",
      "La Reine s'arrête à la dernière marche. Elle regarde les cuves. Elle regarde l'homme de trente ans, puis le vieux, puis de nouveau le jeune. « Il y en a deux », dit-elle, comme tout le monde.",
      "« Madame. » Le vieil homme incline la tête. « Vous m'avez commandé une chambre, le douze juin 541. Je vous en apporte le mémoire. Il a soixante ans de long. »",
      "« Vous me le lirez en haut, dit la Reine. Sur l'estrade. On m'apprend qu'il y en a une, et qu'on y jure chaque année de me rendre mon royaume. Je veux qu'on entende, le même jour et des mêmes planches, ce qu'on en avait fait. » Elle le regarde. « Vous monterez devant moi. Je ne vous donnerai pas le bras. »",
      "Il monte. Quatre-vingts marches, puis le palier, puis la porte. Il lui faut sa canne et tout son souffle. Derrière lui, la Reine, l'enfant ; derrière elle, le Grand Maître, tête nue ; et vous deux, qui fermez la marche avec vos sabots et vos mains en sang.",
      { if: J, text: "« Ils vont le tuer, dit {autre} à mi-voix. Quand il aura fini de lire. — La Reine sera là. — Elle a quatre gardes. Ils sont quarante mille. » {autre:Il} réfléchit. « Bon. C'est lui qui a voulu parler devant du monde, toute sa vie. Il sera servi. »" },
      { if: R, text: "Ils vont le tuer, quand il aura fini de lire. Tu le sais : tu connais les foules, tu as vu ce qu'un camp fait d'un receleur qui a triché sur la balance. La Reine a quatre gardes. Ils sont quarante mille. Tu te dis qu'il a voulu parler devant du monde toute sa vie, et qu'il sera servi. Tu n'en es pas plus fier{e} pour cela." },
    ],
    choices: [{ label: "Fermer la marche", to: "Fr_porte", big: true }] },

  Fr_vieux_line: { act: "V", title: "Le reste", place: "tour", ambiance: "chateau",
    text: [
      "Pour la première fois, il a l'air pris de court.",
      "« La paysanne. » Il cherche. « Vous me livrez à une horlogère de village, sanglée sur une chaise, à qui j'ai fait passer neuf jours entre deux hallebardes. » Son rire sans bruit. « C'est d'une cruauté que je n'aurais pas trouvée. Elle me fera attendre. »",
      { if: J, text: "Tu dis que tu la connais. Qu'elle ne fait jamais attendre : elle donne de l'ouvrage. Qu'elle a mis neuf ans à t'apprendre un nœud, et qu'elle trouvera bien quelque chose à faire faire à un homme qui a de belles mains et soixante ans de retard sur ses dettes." },
      { if: R, text: "Tu dis que tu la connais un peu. Par un soupirail. Que tu lui as volé trois mesures de sable, un hiver, et qu'elle le savait ; qu'elle t'a regardé{e} partir pieds nus dans la neige, et qu'elle n'a rien dit à la Garde. « Elle punit pas. Elle fait rendre. C'est plus long. »" },
      "Il monte. Quatre-vingts marches, le palier, la porte. Vous le suivez. Il s'arrête à mi-chemin, pour le souffle.",
      "« Elle avait écrit : *Pendant que tu lis, tu es ailleurs qu'en bas.* J'ai eu soixante ans pour trouver un adversaire, et il m'attendait dans une ferme, en sabots, avec une boîte de fer. » Il repart. « Je suis curieux de ce qu'elle va me demander. Je ne l'avais plus été depuis 560. »",
    ],
    choices: [{ label: "Le suivre", to: "Fr_porte", big: true }] },

  Fr_porte: { act: "V", title: "La herse levée", place: "tour", ambiance: "chateau",
    text: [
      "Le palier de pierre. Les deux lanternes, la chaîne plombée, et la herse : quelqu'un l'a levée, du dehors, et elle pend à mi-hauteur, comme une paupière.",
      { if: TENU, text: "Ce sont des manteaux blancs qui la tiennent. Le sergent Haudoin est là, tête nue, avec dix hommes. Il a pris l'escalier ce matin sur un papier ; il le rend sur un coup de cloche. Il voit sortir, à la file, des garçons en tablier vert, un vieillard à moustache, un homme en gris, puis un autre, le même, soixante ans plus vieux ; et il a le mérite de ne poser aucune question avant que tout le monde soit dehors." },
      { if: { not: TENU }, text: "Ce sont des noirs qui la tiennent : dix hommes de la Garde du Sable, casqués, la hallebarde au pied. Ils voient sortir leur Maître, appuyé sur sa canne. Ils rectifient la position. Puis ils le regardent mieux. Il a vieilli de vingt ans depuis midi moins le quart, et ils ont entendu douze coups." },
      { if: { not: TENU }, text: "« Messieurs, dit-il. Il n'y aura pas de distribution ce soir. Ni demain. Le puits est guéri. Ce que vous avez dans vos sabliers est tout ce que vous aurez de moi. » Il les regarde l'un après l'autre. « Vous êtes libres de m'arrêter. Je vous le conseille même : cela vous fera des états de service auprès du prochain. »" },
      { if: { not: TENU }, text: "Ils ne l'arrêtent pas. Ils ne font rien. Dix hommes regardent leurs sabliers de ceinture. Puis le plus vieux pose sa hallebarde contre le mur, proprement, comme on rend un outil, et il s'en va par la ruelle. Les autres suivent. Cela se fait sans un mot. Une Garde de quarante ans se défait en dix pas." },
      { if: { has: "r:jehan_marche" }, text: "Jehan est sorti le dernier, derrière le vieillard à moustache. Il le suit à trois pas. Il n'a rien dit encore. Il regarde la façon dont l'autre pose les pieds, et il corrige la sienne." },
      "Le soleil est droit sur le parvis. La poussière retombe. Il y a là cinq mille personnes de 541, trois cents Veilleurs en bleu, une cour en habits de 601, et entre eux, pour l'instant, rien : un espace de trois pas, où personne n'ose mettre le pied le premier.",
    ],
    choices: [{ label: "Y mettre le pied", to: "Fr_parvis", big: true }] },
});

module.exports = { passages: P, extras: {} };
