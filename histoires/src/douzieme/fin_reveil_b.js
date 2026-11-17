// Le Douzième Coup · dénouement « reveil », part B : the afternoon of 21 June 601 (hub `Fr_parvis`), Line and her
// father, the platform of the Oath (`Fr_estrade` : `monde:v_couronne_rendue` | `monde:v_deux_cours`), the eleven jars
// (`monde: "sable601"` : `monde:v_sable_puits` | `monde:v_sable_attente` | `monde:v_sable_couronne`), the fountain
// (`Fr_soir`, `monde: "demain601"` : `monde:v_ensemble` | `monde:v_chacun`), the road, Roquebise, the Trois-Noyers.
// Ends flagged `fin:reveil`. Marks : `monde:v_glane_rendue`, `r:v_lison_dit` | `r:v_lison_doux`, `j:v_perrine_route`,
// `monde:v_ecorce`, `r:v_brassac`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var REMEDE = { has: "monde:aelis_remede" };
var SORTIS = { has: "monde:noyers_sortis" };
var PIECE = { has: "monde:florizel_piece" };
var P_DEBOUT = { has: "monde:perrine_debout" }, P_SORTIE = { has: "monde:perrine_sortie" };
var GIRARD_DEHORS = { any: [SORTIS, { has: "monde:girard_jure" }, { has: "monde:girard_sorti" }] };
var GIRARD_PRIS = { all: [{ has: "monde:girard_attele" }, { not: GIRARD_DEHORS }] };
var RENDUE = { any: [{ has: "monde:regente_alliee" }, { has: "monde:mandat_reine" }, { has: "monde:lettres_produites" }] };
var ENSEMBLE = { has: "monde:v_ensemble" };
var FIN = { flag: "fin:reveil" };

Object.assign(P, {
  Fr_parvis: { act: "V", title: "Trois pas que personne n'ose", place: "tour", ambiance: "ville", hub: true, backName: "le parvis",
    text: [
      { first: true, text: "Vous y mettez le pied. Rien n'arrive. Alors les autres s'y mettent, des deux bords à la fois : un Veilleur en mante bleue, qui tient un registre et qui cherche un ruban ; une femme en coiffe de 541, qui regarde ce ruban à son propre poignet et qui lit son nom dessus." },
      { first: true, text: "« Mahaut Bécu ? dit le Veilleur. Dentellière, rue de la Poulie ? » Elle dit oui. Elle dit : *qu'est-ce que c'est que ce ruban.* Il ne répond pas. Il pleure. C'est sa grand-mère ; elle a vingt-deux ans ; il en a cinquante. Il est venu ici tous les ans depuis son enfance lui renouer cela au poignet, et elle lui demande à présent qui il est." },
      { first: true, text: "Il y en a mille, de ces scènes, sur la place. On entend des noms criés, des rires qui tournent mal, de grands silences. Des gens de 541 tâtent les habits de ceux de 601, par curiosité. Des enfants ont déjà fait bande, sans s'occuper des années." },
      { first: true, if: R, text: "On te regarde. Les Veilleurs te connaissent : tu es de la glane, et l'on se signe sur ton passage. Les réveillés ne te connaissent pas. Un gros homme te frôle. Il a sa tabatière dans sa poche, celle que tu lui as prise il y a deux hivers et que la Courtepaille t'a payée six sous. Elle n'y est plus. Il se tâte. Il cherche par terre." },
      { first: true, if: J, text: "{autre} marche à ton côté, les mains dans le dos. {autre:Il} les y a mises {autre:lui}-même. {autre:Il} a fouillé la moitié de cette place, pendant six ans, et la place vient de se réveiller. Un gros homme se tâte les poches et cherche par terre. {autre} regarde ailleurs." },
      { again: true, text: "Le parvis. Les deux foules se mêlent par les bords, comme deux eaux." },
    ],
    choices: [
      { label: "La chaise à sangles, au pied de l'estrade", hide: { seen: "Fr_line" }, to: "Fr_line", big: true },
      { label: "L'estrade du Serment", hide: { any: [{ not: { seen: "Fr_line" } }, { seen: "Fr_estrade_rendue" }, { seen: "Fr_estrade_deux" }] }, to: "Fr_estrade" },
      { label: "Les mantes bleues, et leur Doyenne", hide: { seen: "Fr_veilleurs" }, to: "Fr_veilleurs" },
      { label: "Les tréteaux du Mystère", hide: { seen: "Fr_treteaux" }, to: "Fr_treteaux" },
      { label: "Les hommes de cuivre, sur la rampe", hide: { seen: "Fr_cuivres" }, to: "Fr_cuivres" },
      { label: "Chercher une hotte, et celle qui la porte", hide: { any: [R, { seen: "Frj_perrine" }] }, to: "Frj_perrine" },
      { label: "La colline des Jurés", hide: { any: [R, { seen: "Frj_colline" }] }, to: "Frj_colline" },
      { label: "La rue des Aiguilliers", hide: { any: [R, { not: { has: "monde:tiphaine_partie" } }, { seen: "Frj_tiphaine" }] }, to: "Frj_tiphaine" },
      { label: "Le capitaine, au pied de la Tour", hide: { any: [R, { seen: "Frj_hardouin" }] }, to: "Frj_hardouin" },
      { label: "La passerelle du Serment", hide: { any: [R, { seen: "Frj_passerelle" }] }, to: "Frj_passerelle" },
      { label: "Ceux de la glane, au bord de la place", hide: { any: [J, { seen: "Frr_glaneurs" }] }, to: "Frr_glaneurs" },
      { label: "Le vieillard à moustache, et celui qui le suit", hide: { any: [J, { not: { has: "r:jehan_nom" } }, { seen: "Frr_jehan" }] }, to: "Frr_jehan" },
      { label: "L'homme à la moustache rousse", hide: { any: [J, { seen: "Frr_boulanger" }] }, to: "Frr_boulanger" },
      { label: "Les charretiers en blouse bleue", hide: { any: [J, { seen: "Frr_verriers" }] }, to: "Frr_verriers" },
      { label: "La ville basse : une promesse à tenir", hide: { any: [J, { seen: "Frr_ecorce" }] }, to: "Frr_ecorce" },
      { label: "Un officier en noir, sans son casque", hide: { any: [J, { seen: "Frr_noirs" }] }, to: "Frr_noirs" },
      { label: "La rue du Cadran : onze jarres de verre vert", hide: { not: { seen: "Fr_line" } }, to: "Fr_jarres", big: true },
    ] },

  // ----- Line
  Fr_line: { act: "V", title: "Tu as mis le temps", place: "tour", ambiance: "ville", charniere: true, backName: "la chaise de Line",
    text: [
      { first: true, text: "Elle est où on l'avait mise : à quarante pas de la porte de bronze, sur une chaise de malade, sanglée aux poignets et à la taille, un cahier de toile sur les genoux. Les deux noirs qui la gardaient sont partis. Personne n'a songé à la détacher." },
      { first: true, text: "Elle a soixante-neuf ans, des lunettes remontées sur le front, des sourcils d'un seul trait, tout blancs. Elle respire mal : on l'entend de dix pas, comme un soufflet percé. Elle regarde la place bouger. Elle a la figure de quelqu'un qui a remonté une horloge soixante ans et qui l'entend partir." },
      { first: true, if: J, text: "Tu cours. Tu défais les sangles, à genoux, avec tes mains qui saignent. Elle te laisse faire. Elle regarde tes paumes. « Tu as tiré. » Elle les retourne. « Et tu t'es tu{e}. Tu avais la bouche pour le dire, et tu l'as fermée. » Tu fais oui. « Pourquoi ? » Tu dis que tu es rentré{e}. Elle te regarde longtemps." },
      { first: true, if: J, text: "« Soixante ans, je t'ai vu{e} faire ce nœud-là, dans ma tête, sur ce banc. Soixante ans, je me suis demandé ce que tu dirais. » Elle tousse. « Tu avais dessiné un cadran dans la poussière, ou tu ne l'avais pas dessiné, je ne sais plus : il y a eu tant de matins. Ce que je sais, c'est que tes roues avaient les dents de travers. J'ai mis neuf ans à t'apprendre à les faire droites, pour que tu puisses les rater ce jour-là exactement comme je m'en souvenais. »" },
      { first: true, if: R, text: "{autre} court. {autre:Il} défait les sangles, à genoux. La vieille {autre:le} laisse faire, et elle te regarde, toi, par-dessus sa tête. Elle a l'œil qu'elle avait ce matin, à travers deux dos noirs." },
      { first: true, if: { all: [R, { has: "r:vol_avoue" }] }, text: "« C'est toi qui l'as dit. » Tu fais oui. « Trois mesures, par un soupirail. Je t'ai regardé{e} partir pieds nus dans la neige. Je me suis dit : ce petit animal ira loin, s'il ne gèle pas. » Elle tousse. « Tu es allé{e} jusqu'au levier. Nous sommes quittes, et il te revient même quelque chose. Je n'ai jamais su rendre la monnaie. »" },
      { first: true, if: { all: [R, { not: { has: "r:vol_avoue" } }] }, text: "« C'est toi qui l'as dit. » Tu fais oui. Elle te regarde les mains, puis les pieds. « Je te connais. Tu rôdais sous ma fenêtre. Il m'a manqué trois mesures, un hiver. » Tu ouvres la bouche. Elle lève un doigt. « Tais-toi. Tu les as rendues ce matin, avec les intérêts. Je ne veux pas d'aveux : c'est du temps perdu, et je n'en ai plus à perdre. »" },
      { first: true, if: { not: SORTIS }, text: "Puis elle ne regarde plus ni l'un ni l'autre. Elle regarde, entre l'épaule d'un archer et le coin du cirier, le débouché d'une rue qui tombe. Elle l'a regardé tout le matin sans tourner la tête. Elle la tourne." },
      { first: true, if: SORTIS, text: "« Mon père est mort en 563, dit-elle. Dans son lit, aux Trois-Noyers, en se plaignant du prix du sel. Mon frère a tenu la ferme jusqu'à ce printemps. Vous les aviez fait sortir avant la fête. Je n'ai personne sur cette place. » Elle a un souffle qui serait un rire. « C'est le plus beau cadeau qu'on m'ait fait : n'avoir personne à y chercher. »" },
      { again: true, text: "La chaise est vide. On a laissé les sangles par terre." },
    ],
    choices: [
      { label: "Regarder où elle regarde", hide: SORTIS, to: "Fr_line_pere", big: true },
      { label: "L'aider à se lever", hide: { not: SORTIS }, back: "Fr_parvis" },
    ] },

  Fr_line_pere: { act: "V", title: "Une fille de soixante-neuf ans", place: "tour", ambiance: "ville",
    text: [
      "Un homme descend la place, à grandes enjambées, contre la foule. Il a quarante-quatre ans, une blouse neuve, des mains de laboureur. Il cherche quelqu'un par-dessus les têtes, avec méthode. Il cherche une petite de neuf ans, avec deux nattes et une boîte de fer.",
      "Line s'est levée. Elle tient debout, une main au dossier. Elle a ôté ses lunettes de son front, et elle les a mises dans sa poche : c'est un geste qu'on fait quand on veut être reconnue.",
      "Il passe devant elle. Il ne s'arrête pas. Il regarde plus bas, à hauteur d'enfant.",
      "« Papa », dit-elle.",
      "Il se retourne. Il voit une vieille femme, debout, qui respire mal. Il cherche derrière elle. Puis il la regarde, parce qu'il a entendu la voix, et que dessous il y avait autre chose. Il regarde les sourcils. Il a les mêmes.",
      { if: { has: "monde:mot_josse" }, text: "« Vous aviez dit de ne pas venir vous regarder, dit-elle. Qu'une fille ne doit pas voir son père plus jeune qu'elle. On me l'a rapporté. Je suis venue quand même. Soixante fois. » Elle lui tend quelque chose : un chapeau de feutre, qu'elle avait sous sa chaise. « Vous n'aimez pas être tête nue devant le monde. »" },
      { if: { not: { has: "monde:mot_josse" } }, text: "« J'ai couru, dit-elle. Vous m'aviez posée par terre, et j'ai couru. Je suis passée. » Elle lui tend quelque chose : un chapeau de feutre, qu'elle avait sous sa chaise. « Je vous l'ai ramassé chaque année, et je vous l'ai remis. Il tombait toujours. »" },
      "Josse Noyer prend le chapeau. Il le tourne dans ses mains. Il ne le met pas. Il regarde cette femme, qui a vingt-cinq ans de plus que lui et la boîte de fer de sa fille sous le bras ; et il fait la seule chose qu'un laboureur sache faire quand le compte est trop grand : il lui ouvre les bras, pour voir si elle y tient encore. Elle y tient. Elle a toujours été petite.",
      { if: GIRARD_PRIS, text: "« Girard est sur le halage, dit-elle dans sa blouse. À trente pas du bord. Il avait tourné la jument. Il a quatorze ans. Il va arriver en criant que la Grise boite. » On entend, en effet, du côté de la porte d'Occident, un fouet." },
      { if: { all: [{ not: GIRARD_PRIS }, { not: SORTIS }] }, text: "« Girard est mort, dit-elle dans sa blouse. À soixante-dix ans, aux noix. Il vous a cherché toute sa vie. Il a eu quatre enfants ; vous avez onze arrière-petits-enfants, dont un qui louche. Je vous les nommerai. Asseyez-vous d'abord. »" },
      { if: J, text: "Tu t'es écarté{e}. {autre} aussi. On ne regarde pas cela de près. {autre} dit, très bas : « Elle te l'avait jamais dit ? Qu'il était là ? — Jamais. — Soixante ans. » {autre:Il} secoue la tête. « Et c'est moi qu'on dit têtu{autre:e}. »" },
      { if: R, text: "Tu t'es écarté{e}. On ne regarde pas cela de près. Tu penses à une cuisine, à dix lieues d'ici, où un homme sifflait en tournant un pot. Tu sauras ce soir si l'on tient encore dans des bras de potier, quand on a pris six ans de trop." },
    ],
    choices: [{ back: "Fr_parvis" }] },

  // ----- the Oath comes due
  Fr_estrade: { act: "V", title: "Le soixantième Serment",
    branch: [
      { if: RENDUE, to: "Fr_estrade_rendue", fx: { flag: "monde:v_couronne_rendue" } },
      { to: "Fr_estrade_deux", fx: { flag: "monde:v_deux_cours" } },
    ] },

  Fr_estrade_rendue: { act: "V", title: "Quand elle s'éveillera", place: "tour", ambiance: "ville",
    text: [
      "L'estrade est tendue de blanc, avec le livre sur son pupitre et les trompettes rangées. On y jurait, il y a une heure, de rendre le royaume à la Reine endormie le jour où elle s'éveillerait. Le Conseil est encore là, en robes, qui regarde la Tour.",
      "La porte de bronze s'ouvre. Il en sort une femme en blanc, à pied, une enfant sur la hanche.",
      "Personne ne l'a jamais vue. Tout le monde la reconnaît : elle est sur les écus, sur les plaques, sur les serments. Les Veilleurs tombent à genoux les premiers. Les réveillés ôtent leurs chapeaux, par simple habitude : pour eux, elle est montée ce matin.",
      { if: { has: "monde:regente_libre" }, text: "Une jeune femme sort du rang des mantes bleues, en ôtant un fichu. Elle a vingt-huit ans, le nez de l'oncle. C'est la Régente Odeline. Elle avait passé la nuit chez les Veilleurs, sur la paille, pendant qu'un autre jurait à sa place." },
      { if: { has: "monde:regente_dedans" }, text: "La Régente Odeline est sur l'estrade, la main sur le livre. Elle avait dit qu'elle jurerait lentement. Elle en était à *quand elle s'éveillera* lorsque midi a sonné, et elle n'a pas fini la phrase." },
      { if: { not: { any: [{ has: "monde:regente_libre" }, { has: "monde:regente_dedans" }] } }, text: "On amène la Régente Odeline entre deux manteaux blancs, qui viennent de la tirer d'une chambre où la Garde du Sable la tenait. Elle a vingt-huit ans, le nez de l'oncle, une manche déchirée." },
      { if: { has: "monde:mandat_reine" }, text: "Elle a dans la main ce que tu lui as fait porter, ou ce que {autre} lui a fait porter : un pli à la cire rouge, ou un jonc d'argent noirci. Elle a eu le temps d'ouvrir le registre des hardes. Elle sait." },
      "Les deux femmes se regardent, de bas en haut de trois marches. L'une a régné quatre ans, sans le vouloir, au nom de l'autre. L'autre a dormi soixante ans en croyant fermer une fenêtre.",
      "« Madame, dit la Régente, d'une voix qui porte. J'ai juré tout à l'heure. Mon père avait juré, et le sien. Aucun de nous ne pensait qu'il faudrait tenir. » Elle ôte de son cou la chaîne des sceaux. « Je tiens. » Elle monte les trois marches à l'envers : elle les descend, et elle pose la chaîne aux pieds de la Reine.",
      "La Reine la ramasse. Elle la regarde. Elle la remet au cou de la jeune femme. « Vous la porterez. J'ai soixante ans de retard, une enfant à guérir, et je ne sais plus le prix du pain. Je règne ; vous gouvernez, jusqu'à ce que je sache. On appellera cela comme on voudra. »",
      "La place a mis un moment à comprendre. Puis elle a crié, de deux siècles à la fois. C'est la première chose que les deux foules font ensemble.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Fr_estrade_deux: { act: "V", title: "Une femme en blanc", place: "tour", ambiance: "ville",
    text: [
      "L'estrade est tendue de blanc, avec le livre sur son pupitre. Le Conseil est encore là, en robes : douze hommes qui ont juré tout à l'heure, comme chaque année, de rendre le royaume à la Reine le jour où elle s'éveillerait.",
      "La porte de bronze s'ouvre. Il en sort une femme en blanc, à pied, une enfant sur la hanche.",
      "Les Veilleurs tombent à genoux. Les réveillés ôtent leurs chapeaux. Le Conseil ne bouge pas. Le chancelier, un homme gras, qui tient ses terres de trois Régents, se penche vers son voisin. On l'entend, parce qu'il n'a jamais su parler bas : « Une femme en blanc sort d'une tour. Cela ne fait pas une reine. Il faudra des preuves. »",
      { if: { has: "monde:regente_libre" }, text: "La Régente Odeline sort du rang des mantes bleues, en ôtant un fichu. Elle regarde la femme en blanc. Elle est de bonne foi : elle l'a toujours été, et c'est ce qui la gêne. Elle n'a dans les mains ni pli, ni bague, ni lettre. Elle a un Conseil dans le dos." },
      { if: { not: { has: "monde:regente_libre" } }, text: "La Régente Odeline est là, vingt-huit ans, le nez de l'oncle. Elle regarde la femme en blanc. Elle est de bonne foi, et c'est ce qui la gêne. Elle n'a dans les mains ni pli, ni bague, ni lettre. Elle a un Conseil dans le dos." },
      "« Madame, dit-elle enfin. Je vous crois. » Elle a dit *je.* Le chancelier tousse. « Mon Conseil voudra des pièces. On vous logera au Palais, avec les honneurs. On ouvrira les registres. »",
      "La Reine la regarde. Elle a été élevée à recevoir debout. « Vous me logez chez moi. C'est aimable. » Elle rajuste l'enfant. « Ouvrez vos registres, mademoiselle. J'attendrai. J'ai une grande habitude. Mais regardez cette place. » Elle montre les cinq mille, chapeau bas. « Eux m'ont vue monter ce matin. Vous aurez du mal à leur expliquer qu'il faut un cachet pour que je redescende. »",
      "Il y aura donc deux cours, pendant des mois : celle du Palais, qui a les sceaux, et celle de la rue, qui a quarante mille témoins. On plaidera. On fouillera les inventaires. Cela finira comme finissent ces choses : par la lassitude d'un Conseil, et par une signature au bas d'une page, un matin de pluie.",
      { if: J, text: "« Il fallait un papier, dit {autre}. Elle me l'avait dit, dans l'orangerie. Chez ces gens-là, c'est vrai quand ça a un cachet. » {autre:Il} hausse une épaule. « On en avait pas. On avait que le reste. »" },
      { if: R, text: "Il fallait un papier. Elle te l'avait dit, dans une orangerie : chez ces gens-là, une chose est vraie quand elle a un cachet. Tu n'en avais pas. Tu avais le reste, qui est tout, et qui ne se présente pas à un Conseil." },
    ],
    choices: [{ back: "Fr_parvis" }] },

  Fr_veilleurs: { act: "V", title: "Trois mille pages", place: "tour", ambiance: "ville",
    text: [
      "Ils étaient trois cents, en mante bleue, et ils chantaient. Ils tenaient la note de la Patiente, depuis l'aube, à bouche fermée. Ils se sont tus au douzième coup. On n'avait jamais entendu, à Méridane, le silence de trois cents personnes qui n'ont plus rien à tenir.",
      "La Doyenne Ysoline est assise sur une marche, son registre ouvert sur les genoux. Trois mille pages. Elle regarde une ligne, lève les yeux, voit passer quelqu'un, et raye. Elle raye depuis une heure. Elle a soixante-dix ans, et c'est l'ouvrage de sa vie qu'elle défait, nom après nom, avec une plume qui tremble de joie.",
      { if: R, text: "Elle te voit. Elle a pour les glaneurs le regard qu'on a pour les rats d'église. Puis elle se rappelle qui a tenu l'escalier, qui a porté quoi, et elle ferme à demi les yeux. « Toi. Viens ici. » Tu viens. Elle te prend la figure dans ses deux mains, qui sentent l'encre. « Je t'ai appelé{e} pillard{e} pendant six ans. Je le raye aussi. » Elle te lâche. « Ne recommence pas. »" },
      { if: J, text: "Elle te voit. Elle lit ta figure comme une ligne de son Rôle. « Vous, vous n'êtes sur aucune page. Vous êtes pourtant de 541 : vous en avez la poussière. — Je suis d'ici. J'y suis allé{e}. » Elle te considère. « L'étranger de la Chronique. Celui qu'on a dit mort dans la Tour, et complice du Maudit. » Elle tourne des pages, trouve, raye. « Voilà. Vous n'êtes plus mort{e}. C'est une formalité. »" },
      { if: { has: "monde:josse_nomme" }, text: "« On a trouvé un nom, sur une borne, rue aux Oies. Écrit au charbon, en bâtons. *JOSSE NOYER.* Nous l'avions porté présumé au parvis depuis soixante ans, et il était à cent pas. Qui a écrit cela ? » Personne ne répond. Elle regarde des sabots. « Je vois. »" },
      "Autour d'elle, les mantes bleues vont de groupe en groupe. Elles ont les noms. Elles disent à chacun l'année, doucement, et qui l'attend. C'est un métier qu'elles ont répété soixante ans sans savoir si elles l'exerceraient. Elles le font bien.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Fr_treteaux: { act: "V", title: "Soixante ans d'entracte", place: "tour", ambiance: "ville",
    text: [
      "Les tréteaux du Sablier. La toile aux douze portes a soixante ans de pluie ; les couleurs ont coulé. Maître Florizel est au milieu, en pourpoint cerise, la canne pointée, la tête renversée. Il achève son vers. Il l'achève devant une place qui lui tourne le dos et qui pleure.",
      "Il s'arrête. Il n'a jamais perdu une salle. Il regarde.",
      { if: PIECE, text: "La douzième porte s'ouvre. Il en sort une fille en robe sans couleur. Elle a attendu son entrée soixante ans, la main à plat sur le bois, et elle la fait, parce qu'une comédienne fait son entrée." },
      { if: { all: [PIECE, { has: "monde:piece_mot" }] }, text: "Elle vient au bord. Elle lève les yeux vers le cadran. Elle dit, de sa voix ordinaire : « Il est midi passé. Allez. » Et la place, qui ne l'écoutait pas, l'entend. Cinq mille personnes s'arrêtent de chercher. C'était écrit pour une foule qui sortait d'un spectacle. Cela tombe sur une foule qui sort de soixante ans, et cela dit exactement ce qu'il fallait." },
      { if: { all: [PIECE, { has: "monde:piece_silence" }] }, text: "Elle vient au bord, et elle regarde la place, sans un mot. La place se retourne, peu à peu, rang par rang. On se tait. Elle avait répété cela pour cinq mille personnes qui venaient de compter jusqu'à douze. Elle le joue devant cinq mille qui viennent d'apprendre l'année, et le silence qu'elle leur tend est le premier où ils puissent s'asseoir." },
      { if: { all: [PIECE, { has: "monde:piece_corde" }] }, text: "Elle lève le bras, trouve une corde dans l'air, et tire de tout son poids. La Patiente, au-dessus, se balance encore, et il en tombe un reste de son. La place lève la tête. Florizel jurera jusqu'à sa mort qu'il l'avait réglé ainsi." },
      { if: { not: PIECE }, text: "La douzième porte s'ouvre, sur une planche noire et une araignée morte depuis cinquante-neuf ans. Colombe, derrière, tient sa corde. Elle regarde le vide qu'elle vient d'ouvrir, et la place, qui ne le regarde pas. Elle lâche la corde. Elle sort elle-même par cette porte, en manteau bleu, sans rôle, parce qu'il faut bien que quelqu'un en sorte." },
      { if: { all: [J, { has: "j:florizel_adieu" }] }, text: "Florizel te voit. Il descend de l'estrade, lourdement. « Je vous ai rêvé{e}, vous. Vous m'avez dit que j'aurais soixante ans d'entracte. » Il regarde la toile. « Mes décors sont perdus. Ma troupe a faim. Et j'ai devant moi la plus grande salle qu'un directeur ait jamais eue : quarante mille personnes à qui il faut raconter ce qui leur est arrivé. » Ses yeux brillent. « Je la tiens, ma pièce. Elle a douze portes. »" },
      { if: R, text: "Tu regardes Colombe saluer. Tu avais regardé derrière la douzième porte, chez toi, un jour de vent. Il y avait une planche et une fille grise, la main dessus. Tu n'avais rien pris. Il n'y avait rien à prendre, que trois épingles, et tu les lui avais laissées." },
    ],
    choices: [{ back: "Fr_parvis" }] },

  Fr_cuivres: { act: "V", title: "Les douze", place: "guilde", ambiance: "ville",
    text: [
      "Sur la rampe des Jurés, les douze hommes de cuivre se sont arrêtés. Ils gardaient la colline depuis soixante ans, à trois doigts, sans oreilles, sans sommeil. Ils buvaient ce qui tombait de la Tour. Il ne tombe plus rien.",
      "Ils sont debout, chacun sur sa marche, la coupelle vide derrière la grille du cœur. Ils ne sont pas pris. Ils ont fini.",
      { if: { has: "r:carillon" }, text: "Le treizième descend la rampe. C'est le petit, celui qui a une bosse au coude et une clochette dans la poitrine. Il a encore une demi-mesure : {hero} l'avait remonté de son propre sable, dans une rue de la ville basse, et il marche là-dessus." },
      { if: { all: [R, { has: "r:carillon" }] }, text: "Il s'arrête devant toi. Il sonne midi, douze petits coups, clairs, pressés : il était en retard de soixante ans sur cette sonnerie, et il la rend. Puis il tire d'entre deux côtes un papier plié, de la grosse main qui appuie, et il te le tend. Tu dis : « C'est pas pour moi. » Il attend. Tu comprends. Tu dis : « Merci. » Il s'incline. Il cherchait cela depuis 541." },
      { if: { all: [J, { has: "r:carillon" }] }, text: "Il s'arrête devant {autre}. Il sonne midi, douze petits coups, clairs. Puis il tire d'entre deux côtes un papier plié, et il le tend. {autre} dit : « C'est pas pour moi. » L'automate attend. {autre} comprend. « Merci. » L'automate s'incline. Tu reconnais le papier : c'est l'écriture du Grand Maître, d'un matin de 541, où il t'avait dit qu'il envoyait Carillon devant." },
      { if: { not: { has: "r:carillon" } }, text: "Le treizième n'est pas là. Il est en ville basse, la coupelle vide, la manche d'un notaire entre deux doigts. Le notaire vient de se réveiller. Il regarde cette main de cuivre sur son bras. Il voit le papier. Il le prend, et il dit merci, par habitude. Personne ne saura que c'était la fin d'une course de soixante ans." },
      "Le Grand Maître monte la rampe. Il s'arrête devant le premier des douze. Il lui touche l'épaule, comme on touche un cheval rentré. « On vous remplira, dit-il. D'autre chose. Je trouverai. Un homme qui a fait marcher du cuivre avec du temps volé peut le faire marcher avec un ressort. »",
    ],
    choices: [{ back: "Fr_parvis" }] },

  // ----- the one who passes
  Frj_perrine: { act: "V", title: "Des almanachs périmés", place: "tour", ambiance: "ville",
    text: [
      { if: P_DEBOUT, text: "Elle est en bas, contre le pignon jaune, son drap rouge défait autour du cou. Le crépi est tombé par plaques, en soixante ans, et il a emporté la moitié de ses traits de charbon. Elle regarde ce qui reste. Elle a ôté sa cire." },
      { if: P_DEBOUT, text: "« Deux cent trente et un. » Elle ne se retourne pas. « Je les avais sortis par le bief. Ils sont passés. Ils ont vécu. » Elle se retourne. Elle a les yeux secs, et dix-sept ans. « On me dit que leurs petits-enfants sont sur la place, en bleu. On me dit que j'ai une rue à mon nom, chez les Sourds, de l'autre côté de l'eau. Je n'ai pas osé aller voir. »" },
      { if: P_SORTIE, text: "Elle est à la porte d'Occident, assise sur une borne, une hotte à ses pieds. Tu ne la reconnais pas d'abord. Tu reconnais la hotte." },
      { if: P_SORTIE, text: "Elle a soixante-dix-sept ans. Elle est petite, sèche, brune comme une noix. Elle vend des almanachs de l'an 601, à deux sous, aux pèlerins. Tu l'avais fait sortir avant midi ; elle est sortie ; elle a vécu. Elle te regarde venir sans surprise, en plissant les yeux." },
      { if: P_SORTIE, text: "« Tu as mis le temps. » C'est la même voix, râpée. « Je suis venue à cette borne tous les Grands Midis. Soixante. J'avais dit : un autre chemin, la même foire. J'ai pris le long. » Elle tire de sa hotte un almanach jaune, cassant, aux coins mangés : l'an 541, la page de juin. « Je t'avais dit que tu l'aurais jaune. »" },
      { if: { not: { any: [P_DEBOUT, P_SORTIE] } }, text: "Elle est au bord de la place, sa hotte au dos, le bras levé, deux doigts en l'air. « ...deux sous ! » La cliente paie, d'un écu à la couronne. Perrine mord la pièce. Puis elle voit, derrière la cliente, un homme en habit de 601 qui la regarde mordre un écu de soixante ans, et elle comprend avant qu'on lui explique : elle a toujours compris par la monnaie." },
      { if: { not: { any: [P_DEBOUT, P_SORTIE] } }, text: "« Soixante. » Elle regarde ses trois piles. « J'ai trente almanachs de l'an 541 sur les bras. » Tu dis qu'un curieux, à Port-Régent, en donnerait un écu pièce. Elle te regarde. Elle fait le compte. « Tu m'avais ruinée. Tu me rembourses. » Elle rit, et cela casse au milieu. « Ma mère est à Arvoise. »" },
      { if: { not: P_SORTIE }, text: "Tu lui dis ce que tu sais. Qu'Arvoise a été prise en 575. Que ceux qui y étaient se réveillent aujourd'hui, comme elle. Que sa mère avait quarante ans en 541 ; qu'elle en a soixante-quatorze, si elle les a eus ; qu'elle est peut-être, à cette heure, sur le seuil d'une maison du quai, à se demander pourquoi il fait si chaud pour un novembre." },
    ],
    choices: [
      { label: "« Je t'y mène. C'est sur ma route. »", hide: P_SORTIE, fx: { flag: "j:v_perrine_route" }, to: "Frj_perrine_fin", big: true },
      { label: "« Vas-y. Tu sais l'article dernier. »", hide: P_SORTIE, to: "Frj_perrine_fin", big: true },
      { label: "T'asseoir sur la borne, à côté d'elle", hide: { not: P_SORTIE }, to: "Frj_perrine_fin", big: true },
    ] },

  Frj_perrine_fin: { act: "V", title: "La même foire", place: "tour", ambiance: "ville",
    text: [
      { if: P_SORTIE, text: "Tu t'assois. Elle te fait de la place, d'un coup de hanche, comme sur le pont d'Arvoise. Elle te raconte. Elle a vendu des almanachs jusqu'à Hautgué. Elle a épousé un marinier, qui est mort. Elle a eu une fille, qui tient une mercerie, et un petit-fils qui porte la hotte quand ses genoux refusent. Elle n'a jamais cessé de rendre la monnaie juste." },
      { if: P_SORTIE, text: "« Tu as seize ans. » Elle te regarde, de côté, avec ce sourire que tu connais. « Je t'ai attendu{e} à dix-sept, puis à vingt, puis je me suis fait une raison, et j'ai continué de venir par curiosité. Tu arrives quand je suis vieille. C'est bien de toi : tu n'as jamais su l'heure. » Elle te tape sur le genou. « Je ne regrette rien. Tu m'as fait sortir, et j'ai eu ma vie. Elle était bonne. Il y manquait un associé qui portait mal la hotte. »" },
      { if: P_SORTIE, text: "Elle te met l'almanach jaune dans les mains. « L'article dernier. — *On ne quitte pas un associé : on prend un autre chemin pour la même foire.* — Bon. On y est. C'est la même foire. » Elle regarde la porte, par où des gens de 541 sortent en clignant des yeux. « Elle est grande, cette année. »" },
      { if: { all: [{ not: P_SORTIE }, { has: "j:v_perrine_route" }] }, text: "« Sur ta route. » Elle te regarde. « Tu as donc une route. Tu n'en avais pas, la dernière fois : tu avais une cloche. » Elle charge sa hotte. « Bon. Arvoise. Ensuite je verrai. J'ai un métier où l'on a toujours quelque chose à vendre aux gens qui se réveillent : la date. »" },
      { if: { all: [{ not: P_SORTIE }, { not: { has: "j:v_perrine_route" } }] }, text: "« Je le sais. » Elle charge sa hotte, d'un coup de rein. « Un autre chemin, la même foire. Tu es rentré{e} chez toi. Moi, je vais voir si j'ai encore un chez-moi, et une mère dedans. » Elle te regarde. « Les Trois-Noyers, tu avais dit. À la Saint-Michel. Je ne promets rien. Je passe où l'on achète. »" },
      { if: { not: P_SORTIE }, text: "Elle fait trois pas. Elle se retourne. « Dis donc. Tu es d'ici. De cette année. C'est pour cela que tu ne savais pas le prix du pain. » Elle hoche la tête. « J'avais fait le compte de trois façons. Il tombe juste de celle-là. » Elle s'en va, vers le bas, du pas des gens qui ont une tournée." },
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frj_colline: { act: "V", title: "Sept fauteuils, soixante ans après", place: "guilde", ambiance: "ville",
    text: [
      "La cour des Jurés. Le père Loquet s'est réveillé sur son tabouret, sous soixante ans de feuilles mortes, et jure qu'il n'a pas dormi. Dans la galerie, le juré Lunel a rouvert les yeux, et son sourire avec. Il n'a pas de lecteur : le garçon était à la fête, et il a soixante-quinze ans, s'il vit.",
      "Tu montes à l'atelier du levant. Dix établis, sous dix linceuls de poussière. Le tien est sous la meilleure fenêtre. Les outils sont là, rangés par taille, piqués de rouille fine. La loupe à manche d'ébène a ses deux lettres. Le billet est dessous, jauni, cassant.",
      "*Pour demain. Vous verrez qu'après aujourd'hui nous aurons le temps de tout. M. A.*",
      "Il a eu le temps de tout. Il l'a pris. Toi, tu as eu neuf jours, et tu viens de rendre à quarante mille personnes un demain qui a soixante ans de retard.",
      "Josquin est assis au sien. Il a seize ans. Il a compté douze, de l'autre côté d'une porte, avec les lunettes de son maître à la main. Il regarde la poussière sur ses outils.",
      "« On est quand ? » Tu le lui dis. Il ne dit rien. Puis : « Le maître vit ? — Il vit. Il a soixante-dix ans, comme ce matin. Il monte la rampe en parlant aux hommes de cuivre. » Josquin se lève. Il essuie les lunettes à sa manche, avec soin. « Alors la Guilde continue. Il n'y a qu'à dépoussiérer. »",
      "Il a raison. Tu regardes les dix établis. Il y a, dans ce royaume, une Maîtrise des Sables qui n'a plus rien à vendre, et une Guilde des Horlogers qui vient de se réveiller avec son Grand Maître, ses sept jurés, et soixante ans de montres en retard.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frj_tiphaine: { act: "V", title: "Un chapitre pour personne", place: "basse", ambiance: "ville",
    text: [
      "Rue des Aiguilliers. La tabatière de maître Gobin a perdu ses vitres. Tiphaine est à l'établi, en culotte d'apprenti, le burin à la main, devant une cage de montre où il restait quatre traits. Elle les fait. Elle souffle la limaille. Puis elle lève la tête, et elle voit le ciel par le toit.",
      "« Elle est retombée. » Deux doigts à la gorge. « Le douzième. Mais il a sonné drôle : il a sonné vieux. » Elle te voit. « C'est l'autre porte. »",
      "Tu dis oui. Tu dis l'année. Elle reste très droite. Elle a été novice dix ans : on lui a appris à recevoir les choses à genoux, et elle a choisi depuis de les recevoir debout.",
      "« Sainte-Aure a été prise en 555. On me l'apprend. Elles avaient voté de rester : c'est bien d'elles. Mère Ancille aura présidé le vote sans donner son avis. » Elle range son burin. « Elles se réveillent donc aujourd'hui, au milieu d'un psaume, avec quarante-six ans de retard sur moi qui en ai soixante. Je ne sais plus qui est l'aînée de qui. »",
      "« La ligne était vraie, dis-tu. *Par la porte qu'on ouvre.* On est sortis ensemble. » Elle ferme les yeux. « Je l'avais lue onze nuits. Je la leur porterai. Elles me recevront mal : je suis partie sans congé. Puis sœur Hildeburge demandera la date pour ses annales, et tout s'arrangera. »",
      "Maître Gobin passe la tête par la trappe. Il regarde le toit crevé, puis la cage finie. Il prend la cage, la mire au ciel, la repose. Il ne dit rien du toit.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frj_hardouin: { act: "V", title: "On n'oublie pas un ordre", place: "tour", ambiance: "ville",
    text: [
      "Le capitaine Hardouin est au pied de la Tour, la main à la garde, face au cadran. Il a fini son salut. Il regarde autour de lui. Il voit des manteaux blancs qu'il ne connaît pas, coupés autrement, et un sergent tête nue qui lui tend un papier.",
      "C'est une ordonnance. Il la lit avec le doigt. Elle dit que la garde blanche prend l'escalier de la Tour. Elle est signée de sa main, d'un paraphe carré. L'encre est fraîche d'un côté, et le papier est d'une fabrique qu'il n'a jamais vue.",
      "« J'ai signé cela. » Il le dit lentement. « Je ne l'ai pas rêvé. On me l'a fait signer debout, pendant que je regardais cette horloge, et j'ai pensé : c'est un ordre, je le signe. » Il te voit. « Vous. Vous m'avez parlé. »",
      { if: { has: "monde:hardouin_rues" }, text: "« Les rues. Vous m'aviez dit les rues. » Il n'attend pas ta réponse. Il a déjà la voix de commandement. « Sergent ! Deux hommes à la rue aux Oies, deux à la Poulie, deux à la descente des Jurés. On fait passer les femmes d'abord. Personne ne court. » Le sergent de 601 regarde ce capitaine de 541. Il obéit. Un ordre net n'a pas d'année." },
      { if: { has: "monde:hardouin_monte" }, text: "« Monter. Vous m'aviez dit de monter. » Il regarde la porte de bronze. La Reine en sort justement, à pied. Il met un genou en terre. « Madame. Il y a une chaise en bas. » Elle le regarde. « Vous êtes le premier, capitaine, à me dire une chose utile. »" },
      { if: { has: "monde:hardouin_ruelle" }, text: "« La ruelle. Des yeux vairons. » Il tourne la tête vers la porte de fer. Deux hommes en sortent, en gris, l'un vieux, l'autre jeune, les mêmes yeux. Il porte la main à son épée. Il la laisse. « Lequel ? — Les deux, dis-tu. Le vieux ne court plus. Le jeune n'a pas encore couru. » Il hoche la tête, et il les suit des yeux, comme on tient quelqu'un sans le toucher." },
      { if: { not: { any: [{ has: "monde:hardouin_rues" }, { has: "monde:hardouin_monte" }, { has: "monde:hardouin_ruelle" }] } }, text: "Tu lui dis l'année. Il la reçoit en soldat : les talons joints. « Soixante ans de faction. On me les comptera pour la retraite ? » C'est la seule plaisanterie qu'il ait faite de sa vie. Il rougit, et il redemande les ordres." },
      "Sous son oreille gauche, il n'y a plus de savon. Tu le lui avais ôté. Il se touche le cou, sans savoir pourquoi.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frj_passerelle: { act: "V", title: "Provisoire, an 542", place: "tour", ambiance: "ville",
    text: [
      "La passerelle du Serment enjambe la place, de la Foire à la porte de bronze : un pont de bois, sur des tréteaux, qu'on avait bâti l'an 542 pour ne pas marcher sur les dormants. Il y a une plaque, au premier pilier. *Provisoire.*",
      "Tu y montes. D'en haut, tu vois la ville comme la voyait le cortège, une fois l'an : des têtes. Elles bougent. Il y a soixante ans de fientes de pigeon sur les chapeaux, et des gens qui s'en aperçoivent.",
      "Un charpentier de la Régence est là, en tablier de cuir, les mains sur la rampe. Il a entretenu ce pont trente ans. Il a remplacé chaque planche trois fois. Il regarde en bas, où l'on marche.",
      "« Elle ne sert plus », dit-il. Il n'a pas l'air triste. Il a l'air d'un homme qui a gardé une béquille dans un coin et qui voit le malade courir. « On m'avait dit *provisoire.* Mon père aussi, on le lui avait dit. Je pensais que c'était une façon de parler. »",
      "Il tire son marteau de sa ceinture. Il fait sauter la plaque, d'un coup, proprement, et il te la tend. « Tenez. Vous avez une tête à garder les choses. Je démonte demain. Il y a là-dedans de quoi refaire les volets de toute la ville basse. »",
      "Tu prends la plaque. Elle est de cuivre, verte. Tu la mets contre ta poitrine, avec l'almanach.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  // ----- the one who stays
  Frr_glaneurs: { act: "V", title: "La balance", place: "tour", ambiance: "ville",
    text: [
      "Ils sont au bord de la place, sous l'auvent du cirier : une douzaine, en guenilles, le sachet au cou. La Courtepaille est assise sur une borne, sa balance sur les genoux. Elle regarde la ville se réveiller comme un fermier regarde grêler.",
      "« Te voilà. » Elle ne lève pas la tête. « C'est toi, à ce qu'on dit. Le levier. » Elle se cure une dent avec l'ongle du petit doigt. « Tu viens de fermer la boutique. Six cents glaneurs, de la Ferme-Vieille à la mer, qui n'ont plus un fossé où se baisser. Je t'ai ramassé{e} à dix ans, je t'ai appris à ouvrir une main sans la casser, et tu me mets sur la paille. »",
      { if: { has: "r:porte_craie" }, text: "« Et tu me dois une porte à la craie, que je n'ai pas oubliée. » Elle lève enfin les yeux. Ils sont petits, gris, sans méchanceté. « Je te la remets. Je ne sais pas à qui je la réclamerais : la porte s'est réveillée. »" },
      "Rouget est derrière elle, quatorze ans, roux, les poings dans les poches. Il te regarde avec une admiration furieuse. « T'as vu leurs têtes ? Y en a un qui cherche sa montre. Je l'ai, sa montre. » Il la sort à moitié. Il la rentre. « Je fais quoi ? »",
      "C'est la question. Tu regardes la douzaine. Ils ont sur eux, et dans leurs caches, le long de trois routes, tout ce qu'on a tiré des poches de cette ville depuis vingt ans. Et les poches viennent de se rouvrir.",
      "« J'ai tout noté », dit la Courtepaille. Elle tape sur une de ses poches, qui en contient d'autres. « Chaque pièce. De qui, quel jour, combien j'en ai donné. Je note toujours. On ne sait jamais qui va se réveiller. » Elle te regarde. « Alors ? Tu as l'air d'avoir une idée. Tu as toujours eu l'air d'en avoir une, et c'était rarement la bonne. »",
    ],
    choices: [
      { label: "« Rends. Tu as la liste. On passera pour des gens qui gardaient les affaires. »", fx: { flag: "monde:v_glane_rendue" }, to: "Frr_glaneurs_fin", big: true },
      { label: "« Fais ce que tu veux. Moi, j'ai fini. »", to: "Frr_glaneurs_fin", big: true },
    ] },

  Frr_glaneurs_fin: { act: "V", title: "Des gens qui gardaient les affaires", place: "tour", ambiance: "ville",
    text: [
      { after: "monde:v_glane_rendue", text: "Elle te regarde longtemps. Puis elle rit, d'un rire qui lui secoue toutes ses poches. « Des gens qui gardaient les affaires. Un dépôt. Soixante ans de garde-meuble, à nos frais. » Elle s'essuie l'œil. « C'est gros. C'est tellement gros que ça passera. Les Veilleurs nous ont traités de pillards vingt ans : ils vont nous devoir des remerciements, et ça, je veux le voir avant de mourir. »" },
      { after: "monde:v_glane_rendue", text: "Elle se lève. « Rouget ! La montre. Tu vas la rendre au monsieur. Tu lui dis que tu l'as trouvée par terre et que tu la lui gardais. Tu tends la main après. Pas avant. » Rouget ouvre la bouche. « Et il me donne quoi ? — Ce qu'il veut. C'est ça, la différence. Il faudra t'y faire. »" },
      { after: "monde:v_glane_rendue", text: "Il y va. Tu le vois, de loin, tendre la montre à un homme en habit puce, qui la prend, qui le regarde, et qui lui met la main sur la tête. Rouget revient avec deux sous et une figure que tu ne lui connaissais pas. « Il a dit merci. » Il a l'air d'avoir reçu un coup. « C'est drôle. Ça fait quelque chose. »" },
      { before: "monde:v_glane_rendue", text: "Elle hausse les épaules. « Tu as fini. Tu en as de bonnes. On n'a jamais fini, dans ce métier : on change de fossé. » Elle range sa balance. « J'irai voir du côté de Port-Régent. Il y a toujours des gens qui dorment, d'une façon ou d'une autre. »" },
      { before: "monde:v_glane_rendue", text: "Rouget te suit des yeux. Il a toujours la montre dans sa poche. Il la gardera : c'est une belle montre. Il la regardera souvent, sans la vendre, et il ne saura jamais très bien pourquoi elle lui pèse." },
      "La Courtepaille te retient par la manche. Elle a baissé la voix. « Ta petite. À Roquebise. » Tu ne lui en avais jamais parlé. Elle sait tout : c'est son fonds. « Elle se réveille aussi. Vas-y. Ne traîne pas ici à faire le bien : on y prend goût, et après on ne sait plus rien faire d'autre. »",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frr_jehan: { act: "V", title: "Qu'il écarte les talons", place: "tour", ambiance: "ville",
    text: [
      "Le Grand Maître est au milieu du parvis, tête nue, et il regarde la plaque. Elle est scellée au pied de l'estrade, en bronze, depuis l'an 543. *Ici fut pris, la main au levier, Barnabé Coudrier, Grand Maître, par qui vint la Dormante. Qu'il soit maudit.*",
      "Il la lit jusqu'au bout. Sa moustache ne bouge pas. « Le style est pauvre. *Par qui vint.* On aurait pu trouver un verbe. »",
      "Jehan est à trois pas derrière lui. Il a vingt ans, une casaque noire qu'il a retournée, pour qu'on n'en voie plus l'insigne. Il a grandi sous deux lettres changées. Son père est mort en les portant. Il a dit son vrai nom ce matin, tout haut, dans une cave, devant une statue.",
      "La statue se retourne. « C'est vous. » Jehan fait oui. Il ne trouve rien à dire. Le vieillard le regarde des pieds à la tête, en maître qui reçoit un apprenti. « Vous joignez les talons. C'est de famille. Écartez-les : cela ôte la moitié de la force. » Jehan les écarte. « Bien. Vous êtes Coudrier. Vous l'avez dit devant témoin ; je l'ai su. C'est valable. »",
      "« On vous a maudit soixante ans, dit Jehan, d'une voix étranglée. Mon grand-père a changé de nom. Mon père est entré dans la Garde pour qu'on ne cherche pas. » Le vieillard hoche la tête. « Ils ont bien fait. On ne se fait pas tuer pour une orthographe. » Il regarde la plaque. « Vous avez une pique. Faites-moi sauter cela. Je la veux pour presse-papiers. »",
      "Jehan engage le fer sous le bronze. Il pèse. La plaque vient, avec un bruit de dent. Il la ramasse, et il la donne à son arrière-grand-père, qui la met sous son bras, comme un livre.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frr_boulanger: { act: "V", title: "La belle-sœur attendra", place: "tour", ambiance: "ville",
    text: [
      "« ...et de douze ! » Il a fini son rire. Il a soulevé la petite à bout de bras. Puis il a vu la passerelle, les rubans, et il a reposé l'enfant, lentement.",
      "Il est roux de moustache, large, enfariné. Il a une couronne de pain au bras, et à son poignet un ruban bleu, où une main de Veilleur a écrit, il y a longtemps : *Un boulanger. Rue des Fourniers ?*",
      { if: { seen: "K16r_boulanger_eveil" }, text: "Il te voit. « Toi. Je t'ai donné une couronne. Tu m'as dit que tu étais d'après. » Il regarde autour de lui. « C'est ça, d'après ? » Tu dis oui. Tu lui dis combien. Il s'assoit sur la borne, d'un coup, et la petite lui grimpe sur les genoux." },
      { if: { not: { seen: "K16r_boulanger_eveil" } }, text: "Tu t'es caché{e} entre ses mollets, ce matin, pendant que deux noirs passaient. Tu lui dois cela. Tu vas à lui. Tu lui dis l'année, avec les mots qu'il faut. Il s'assoit sur la borne, d'un coup, et la petite lui grimpe sur les genoux." },
      "« Ma belle-sœur. » C'est la première chose. « Elle était à Vauxelles. Je lui portais ça. » Il regarde la couronne. « Elle avait trente ans. » Il fait le compte, sur ses doigts enfarinés. Il n'arrive pas au bout. Tu arrives au bout pour lui, et tu ne le dis pas.",
      "« Mon four. — Il est où vous l'avez laissé. Les Veilleurs ont fermé les volets. Y a soixante ans de suie dans le conduit. » Il respire. Un four, c'est quelque chose. « Et la farine ? — Y a un moulin, à la porte d'Occident. Il tourne. »",
      "Il se relève. Il a encore la petite, sa femme qui le cherche, deux bras, un métier. Il regarde la place : quarante mille personnes qui n'ont pas mangé depuis 541. « Ils vont avoir faim », dit-il. Il le dit comme un capitaine dit *ils arrivent.* Il décroche la couronne, et il te la met dans les mains, d'office. « Toi, t'as faim depuis plus longtemps. Rue des Fourniers, à l'Épi. Si tu as des bras ce soir, j'allume. »",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frr_verriers: { act: "V", title: "Quatre jours, et soixante ans", place: "tour", ambiance: "ville",
    text: [
      "Les trois charretiers sont à l'angle de la ruelle, près de leurs chevaux. Ils regardent la herse, les tuyaux qui sortent du mur, et leurs douze cuves, qu'ils ont laissées ce matin dans la paille et qu'on a descendues sans eux, il y a cinquante-neuf ans.",
      "Tu vas à eux. Tu as leur accent. Tu dis : « Vous êtes de la Bise. » Le vieux aux oreilles décollées se retourne. « Et toi aussi. De quel côté ? — Rue des Potiers. La troisième après la fontaine. » Il fronce le front. « Chez les Tiennot ? »",
      "Tu leur dis. Tu le dis aux trois, en regardant le jeune, celui qui penche la tête de côté et qui a une alliance neuve. L'année. Que Roquebise a tenu jusqu'en 595. Qu'elle a été prise en une nuit ; qu'elle se réveille aujourd'hui.",
      "Le jeune a compris avant les deux autres. « Ma femme. » Il a une voix de rien. « Elle attendait. On l'avait su à Pâques. » Tu fais le compte pour lui, tout haut, parce qu'il faut que quelqu'un le fasse. Elle avait dix-huit ans. Si elle a vécu jusqu'à la nuit du Bond, elle en avait soixante-douze. Elle s'est réveillée ce matin. Elle a un enfant de cinquante-trois ans, qu'il n'a jamais vu.",
      "Il te regarde. Il regarde ta bouche. Tu la connais, cette façon de regarder : ta mère l'a, la tête de côté. Tu ne sais pas ce qu'il t'est. Tu sauras là-bas, rue des Potiers, en comptant les portes.",
      "« On rattelle, dit le vieux. Quatre jours. » Il a une voix dure, pour ne pas en avoir une autre. « Toi, de la Bise, tu montes ? Il y a de la place sur la paille. Elle est vide : on nous a pris le verre. »",
      "Le jeune est déjà sur le siège, les guides en main. Il a dix-neuf ans, et il va retrouver sa femme, qui pourrait être sa grand-mère. Il ne sait pas ce qu'il lui dira. Toi non plus, tu ne sais pas ce que tu diras, là-bas, à une petite qui t'attend à dix ans. Cela fait deux, sur la même paille.",
    ],
    choices: [{ back: "Fr_parvis" }] },

  Frr_ecorce: { act: "V", title: "D'abord, tenu", place: "basse", ambiance: "ville",
    text: [
      "Tu descends en ville basse avec une sœur des Veilleurs, qui porte une marmite, et un panier d'écorce pris au coffre de l'abbaye. Elle ne t'a pas demandé pourquoi. Tu as dit : *le mal de cave, quatre maisons et un pont.* Elle a dit : *montre.*",
      "La rue de trois couleurs a repris ses trois couleurs. Les quatre fichus noirs sont sur leurs seuils, réveillés, et ils regardent passer la marmite sans comprendre. Tu t'arrêtes. Tu montres tes ongles. « Je l'ai eu. C'est ça qui m'a levé{e}. Dix-neuf jours. Elle en a pour toutes. »",
      "La plus vieille regarde la sœur, la marmite, toi. « Combien ? » La sœur dit : « Rien. C'est de l'écorce. Il en pousse derrière toutes les maisons, à dix lieues d'ici. » Elles ne bougent pas. Puis la plus jeune se met à pleurer, sans bruit, les mains dans son tablier ; et les autres, qui avaient tenu soixante ans sans le savoir, la regardent faire avec une espèce d'envie.",
      { if: { has: "monde:brindille_remede" }, text: "Sous l'arche des Trois-Chandelles, la petite a les yeux ouverts. Elle te reconnaît : « C'est le mauvais. » Son frère est debout, la lame au poing, entre toi et la paillasse. Tu dis : « D'abord. C'était fait d'abord. Demande-lui. » Il regarde sa sœur. Elle fait oui, en plissant le nez. Il range la lame." },
      { if: { not: { has: "monde:brindille_remede" } }, text: "Sous l'arche des Trois-Chandelles, la petite dort, les lèvres grises. Son frère est debout, la lame au poing. « Ça a resonné, dit-il. Le médecin a dit : jusqu'à la Saint-Jean. » Tu montres la marmite. « Y a plus de Saint-Jean. Y a dix-neuf jours, et après elle court. » Il ne te croit pas. Il laisse faire quand même : il n'a rien d'autre." },
      "La sœur s'agenouille. Elle fait boire. Elle a des gestes de métier. Moineau la regarde, puis toi. « T'es qui ? — Quelqu'un du pont. » Il te tend la main, à plat. Tu tapes dedans.",
      "Tu remontes. Tu avais fait un compte, devant ces quatre seuils, dans une note. Il sortait juste d'un seul côté. Tu as dit le mot de ce côté-là. Tu ne l'as pas dit que pour cela. Mais cela y était.",
    ],
    choices: [{ label: "Laisser la marmite à la rue", fx: { flag: "monde:v_ecorce" }, back: "Fr_parvis" }] },

  Frr_noirs: { act: "V", title: "Un officier sans emploi", place: "tour", ambiance: "ville",
    text: [
      "Il est adossé au pilier de la passerelle, son casque sous le bras. Il porte le noir de la Garde du Sable, avec le galon. Il regarde ses hommes s'en aller un à un, par les rues, en ôtant leur casaque.",
      { if: { secret: "r_garde" }, text: "C'est le capitaine Brassac. Il a fait trois jours de berline derrière son Maître pour voir cela. Il te reconnaît. Il t'a payé{e}, aux Trois-Noyers, il y a neuf jours, pour dire où était une Porte ; tu as pris l'argent." },
      { if: { secret: "r_garde" }, text: "« Toi. » Il n'a même plus la force d'être en colère. « Je t'ai donné six écus pour un renseignement. Tu m'as coûté une Maîtrise. » Tu fouilles ta chemise. Tu les as encore : tu n'as rien dépensé, dans un pays où l'on ne vend rien. Tu les lui tends. Il les regarde. « Garde-les. C'est ce que j'aurai payé de plus utile en vingt ans de service. »" },
      { if: { not: { secret: "r_garde" } }, text: "C'est le lieutenant Courtenvaux, celui de la barrière. Il t'a taxé{e}, fouillé{e}, laissé{e} passer selon les jours. Il te reconnaît. Il n'a plus de barrière." },
      { if: { all: [{ not: { secret: "r_garde" } }, { has: "r:courtenvaux_dette" }] }, text: "« Je te devais quelque chose, dit-il. Pour la nuit du coup de minuit. Je ne sais plus quoi : j'avais noté. » Il se tâte. Il a perdu son carnet. « Dis un prix. — Laissez passer les gens. Ceux qui sortent. Sans leur demander d'où. » Il regarde la porte d'Occident, où il n'y a plus personne pour demander quoi que ce soit. « C'est fait. Tu n'as jamais su marchander. »" },
      "« Qu'est-ce qu'on devient ? » Il le demande à l'air, plus qu'à toi. « Quarante ans qu'on garde une lisière. Y a plus de lisière. » Tu regardes la place. Il y a là des gens qui ne savent pas où ils habitent, des enfants perdus, des vieilles qui cherchent des jeunes. « Vous savez barrer une rue. Vous savez compter des gens. Allez demander aux bleus. Ils ont trois mille pages et pas assez de jambes. »",
      "Il te regarde. Puis il remet son casque, par habitude, l'ôte de nouveau, et s'en va vers les mantes bleues, de son pas de barrière.",
    ],
    choices: [{ label: "Le regarder aller", fx: { flag: "r:v_brassac" }, back: "Fr_parvis" }] },

  // ----- the eleven jars
  Fr_jarres: { act: "V", title: "Tout le sable qui existera jamais", place: "guilde", ambiance: "ville", charniere: true, backName: "la rue du Cadran",
    text: [
      { first: true, text: "La rue du Cadran, sur l'esplanade. L'hôtel de la Maîtrise a ses portes ouvertes et pas un garde. Dans la salle basse, sur des tréteaux, il y a onze jarres de verre vert, épais d'un pouce, hautes comme un enfant. On voit luire dedans." },
      { first: true, text: "C'est tout ce qui reste. Le puits ne suera plus. Il y a là de quoi tenir quarante vieillards debout pendant dix ans, ou une Garde pendant deux, ou un seul homme pendant deux siècles. On a tué pour le centième de cela." },
      { first: true, text: "Vous êtes seuls devant. On vous a laissés entrer : le Grand Maître a dit, sur le parvis, que ces jarres revenaient à ceux qui avaient rendu le coup, et personne n'a osé dire non à un homme qu'on venait de cesser de maudire." },
      { first: true, if: J, text: "Tu penses à Line. Elle respire comme un soufflet percé. Une pincée par jour la tiendrait. Elle dirait non. Elle l'a déjà dit, d'avance, toute sa vie : *le temps des autres ne se porte pas.* Mais il y a, sur cette place, des milliers de vieux qui ont attendu dehors, soixante ans, que quelqu'un se réveille ; et qui vont mourir cet hiver, à peine les leurs retrouvés." },
      { first: true, if: R, text: "Tu regardes luire. Tu en as porté des miettes au cou pendant six ans. Tu sais ce que c'est : les hivers que les gens de ta plaine n'ont pas eus. Chaque grain a été sué par quelqu'un qui dormait. Ils sont réveillés. Ils ne savent pas qu'on leur a pris cela, en plus du reste." },
      { first: true, text: "« Faut décider », dit l'un de vous. L'autre dit : « Oui. »" },
      { again: true, text: "Onze jarres de verre vert, sur leurs tréteaux." },
    ],
    choices: [
      { label: "Vous deux : au puits. Tout. Onze jarres, par-dessus le bord.", monde: "sable601", option: "puits", fx: { flag: "monde:v_sable_puits" }, to: "Fr_jarres_fin", big: true },
      { label: "Vous deux : à ceux qui ont attendu dehors. De quoi revoir les leurs un an.", monde: "sable601", option: "attente", fx: { flag: "monde:v_sable_attente" }, to: "Fr_jarres_fin", big: true },
      { label: "Vous deux : sous scellés, deux clefs, la Reine et la Guilde. On verra.", monde: "sable601", option: "couronne", fx: { flag: "monde:v_sable_couronne" }, to: "Fr_jarres_fin", big: true },
    ] },

  Fr_jarres_fin: { act: "V", title: "Onze jarres", place: "guilde", ambiance: "ville",
    text: [
      { after: "monde:v_sable_puits", text: "On les roule, sur des civières, jusqu'à la porte de fer. Il faut vingt hommes. Des Veilleurs, des manteaux blancs, quatre apprentis en tablier vert, et deux anciens noirs, qui n'ont rien demandé et qui portent comme les autres." },
      { after: "monde:v_sable_puits", text: "On les vide au bord, l'une après l'autre. Cela coule longtemps, gris, luisant, sans bruit. En bas, le pas ne change pas. Le Grand Maître regarde, les talons joints. À la onzième, il ôte son chapeau, ou il porte la main où il devrait être. « C'était à lui, dit-il. On le lui devait. Il ne nous en voudra pas : ces choses-là n'ont pas de rancune. C'est nous qui en avons. »" },
      { after: "monde:v_sable_puits", text: "Il n'y a plus un grain dans le royaume, que ce qui reste au fond des sabliers de quarante vieillards et de soixante gardes. Cela s'usera. Dans un an, on dira *le sable d'heures* comme on dit *la licorne.*" },
      { after: "monde:v_sable_attente", text: "On les porte chez les Veilleurs. La Doyenne Ysoline ouvre son registre à la fin, où sont les noms de ceux du dehors : les enfants devenus vieux, les fiancées de quatre-vingts ans, les frères qui ont tenu une ferme en attendant. Elle les connaît tous. Elle a leurs âges." },
      { after: "monde:v_sable_attente", text: "« Une pincée par semaine, dit-elle. Aux plus vieux d'abord. Cela ne rajeunit pas : cela retient. De quoi passer un hiver avec ceux qu'ils ont attendus. » Elle vous regarde par-dessus ses lunettes. « Ce sera le dernier péché de cette poudre, et le seul pardonnable. Je tiendrai le compte. Quand la dernière jarre sera vide, je vous enverrai le registre. »" },
      { after: "monde:v_sable_attente", text: "Il y en aura une, sur la liste, qui refusera. Tu sais laquelle. Elle dira qu'elle a eu ses soixante ans et qu'elle les a employés. Puis elle regardera son père, qui a quarante-quatre ans et qui ne sait pas encore ses petits-enfants ; et elle tendra la main, de mauvaise grâce, pour une pincée. *Une. Le temps de voir les noix.*" },
      { after: "monde:v_sable_couronne", text: "On les descend dans la crypte de Saint-Gnomon-le-Vieux, sous l'étoile de cuivre. On mure la porte. On y met deux serrures : la Reine garde une clef, le Grand Maître l'autre. Il faudra les deux pour ouvrir, et un édit lu sur le parvis." },
      { after: "monde:v_sable_couronne", text: "« Pour quoi faire ? » demande le Grand Maître. Vous dites que vous l'ignorez. Qu'il viendra peut-être un jour où l'on aura besoin de retenir quelqu'un : un mourant, le temps qu'un remède arrive ; une ville, le temps qu'une digue tienne. Il vous regarde. « C'est ainsi que cela commence. Par une bonne raison. Je l'ai entendue il y a neuf jours, de la bouche d'une reine. » Il empoche sa clef. « Je la porterai. Je ne la prêterai pas. Et je mettrai dans mon testament qu'on la jette au puits le jour où quelqu'un trouvera la raison trop bonne. »" },
      "Vous ressortez. La rue du Cadran est pleine de soleil. Il y a une chose de moins à décider.",
    ],
    choices: [{ label: "La fontaine des Jurés, à la brune", to: "Fr_soir", big: true }] },

  // ----- evening
  Fr_soir: { act: "V", title: "La margelle, le soir de deux siècles", place: "tour", ambiance: "ville", charniere: true, aparte: true, backName: "la fontaine",
    text: [
      { first: true, text: "La fontaine des Jurés coule. Elle a recommencé à midi, avec un hoquet, en crachant soixante ans de feuilles. Vous vous y asseyez. Autour, on allume des feux : il y a quarante mille personnes à coucher, et la moitié ne retrouve pas son lit." },
      { first: true, text: "On vient vous voir. Des gens que vous ne connaissez pas, qui ont su par d'autres. Ils ne disent rien. Ils posent des choses sur la margelle : un pain, une pomme, un ruban bleu défait. Puis ils s'en vont. {hero} ne sait pas quoi faire de ses mains." },
      { first: true, if: J, text: "« Je pars demain, dit {autre}. Les verriers rattellent à l'aube. Quatre jours. » {autre:Il} regarde l'eau. « J'ai dit à Lison que je reviendrais bientôt. Dans une pincée, y a six ans. Elle m'a pas reconnu{autre:e}. Elle attend quelqu'un de petit. » {autre:Il} a une voix que tu ne {autre:lui} connaissais pas. « J'ai fait neuf jours de gris sans trembler. Là, j'ai les genoux qui lâchent. »" },
      { first: true, if: R, text: "Tu pars demain. Les verriers rattellent à l'aube ; il y a quatre jours de route. Tu as dit à Lison, dans une pincée, il y a six jours, que tu reviendrais bientôt. Elle ne t'a pas reconnu{e}. Elle attend quelqu'un de petit. Tu as fait neuf jours de gris sans trembler, et tu as les genoux qui lâchent." },
      { first: true, if: J, text: "Toi, tu as Line. On l'a couchée à l'hôtel de la Maîtrise, dans la chambre où on la tenait, la porte ouverte cette fois. Son père est assis à son chevet, son chapeau sur les genoux, et il apprend le nom de ses arrière-petits-enfants. Elle veut rentrer aux Trois-Noyers. Elle l'a dit trois fois. Elle a dit : *je ne mourrai pas dans une ville.*" },
      { first: true, if: R, text: "{autre} a la vieille. On l'a couchée à l'hôtel de la Maîtrise, la porte ouverte. Elle veut rentrer aux Trois-Noyers. Elle a dit qu'elle ne mourrait pas dans une ville. Il faudra une voiture, et quelqu'un qui sache la porter. Tu vois {autre} compter les jours qu'elle a, et ceux de ta route, et chercher comment être aux deux endroits." },
      { first: true, text: "Roquebise et les Trois-Noyers sont sur le même chemin, à une journée l'un de l'autre. On peut y aller ensemble, par la charrette des verriers, et revenir prendre Line ; ou partir chacun de son côté, demain, et se retrouver sous les noyers." },
      { again: true, text: "La margelle. Les feux, sur le parvis. L'eau." },
    ],
    choices: [
      { label: "Vous deux : ensemble, à Roquebise d'abord. On ne laisse pas l'autre frapper seul à cette porte.", monde: "demain601", option: "ensemble", fx: { flag: "monde:v_ensemble" }, to: "Fr_route", big: true },
      { label: "Vous deux : chacun les siens. Rendez-vous sous les noyers.", hide: R, monde: "demain601", option: "chacun", fx: { flag: "monde:v_chacun" }, to: "Frj_berline", big: true },
      { label: "Vous deux : chacun les siens. Rendez-vous sous les noyers.", hide: J, monde: "demain601", option: "chacun", fx: { flag: "monde:v_chacun" }, to: "Fr_route", big: true },
    ] },

  // ----- the road
  Fr_route: { act: "V", title: "Un pays qui se frotte les yeux", ambiance: "champs",
    text: [
      "La charrette des verriers sort par la porte d'Occident, à l'aube. Le vieux mène. Le jeune est à côté de lui, raide, les mains sur les genoux. Il n'a pas dormi.",
      { if: ENSEMBLE, text: "Vous êtes deux sur la paille. Vous n'aviez jamais fait de route ensemble : vous aviez fait la même, l'un derrière l'autre, à soixante ans. Vous la refaites dans l'autre sens, côte à côte, et chacun montre à l'autre ce qu'il y a vu." },
      { if: { all: [R, { not: ENSEMBLE }] }, text: "Tu es seul{e} sur la paille. {autre} est resté{autre:e}, pour la vieille. Vous vous êtes dit *sous les noyers* à la porte, sans rien ajouter. Tu as le Cahier dans ta chemise. Il y a des bornes." },
      "Le pré de la Foire. Dix mille charrettes se cherchent des chevaux. Un chien jaune aboie le long des roues, par devoir.",
      { if: { has: "r:chien_nomme" }, text: "Sur un moyeu, il y a un mot au charbon, en bâtons. Une enfant le lit tout haut, étonnée : « *TAMBOUR.* C'est mon chien. Qui a écrit mon chien ? » Elle regarde autour d'elle. La charrette passe." },
      "Sainte-Aure, le second jour. On entend chanter de la route : quarante voix de femmes, qui finissent un psaume commencé à matines, en l'an 555. Elles vont jusqu'au bout du verset. Puis il y a un silence, et une cloche, petite, pressée, qui sonne à toute volée, comme sonne quelqu'un qui vient de regarder par la fenêtre.",
      { if: { has: "monde:pont_sauve" }, text: "Arvoise, le troisième. Le pont est debout, ses sept arches dans l'eau qui a repris. Des gens de 575 le passent en regardant la rivière, étonnés qu'elle coule. Sur la berge, le camp de la Maîtrise est vide : des tentes grises, des balances, personne." },
      { if: { not: { has: "monde:pont_sauve" } }, text: "Arvoise, le troisième. On passe au gué des Sablières, entre les piles du vieux pont. Des gens de 575 sont sur la berge, qui regardent l'eau couler. Le camp de la Maîtrise est vide : des tentes grises, des balances, personne." },
      "On ne parle pas beaucoup. On regarde. Partout, le long de la route, c'est la même chose : des gens sur leurs seuils, qui se frottent les yeux, et d'autres, en bleu, qui vont de porte en porte avec un registre, pour dire l'année doucement.",
    ],
    choices: [
      { label: "Le quatrième jour : la butte", hide: J, to: "Frr_rue", big: true },
      { label: "Le quatrième jour : la butte", hide: R, to: "Frj_rue", big: true },
    ] },

  Frr_rue: { act: "V", title: "La troisième après la fontaine", ambiance: "champs",
    text: [
      "Roquebise est sur sa butte. Il n'y a pas de fumée : les fours sont froids depuis six ans. Mais il y a du bruit. Tu l'entends du bas de la côte, et tu descends de la charrette en marche.",
      "La rue des Potiers est en pente. Elle est pavée de tessons, qui crient sous les sabots. Tu l'as montée il y a sept jours, dans le gris, en comptant tes pincées, entre des portes à rubans. Les portes sont ouvertes. Les rubans pendent, dénoués.",
      "Frère Macaire est à la fontaine, son registre contre la hanche. Il te voit. Il tire sa mine de plomb de sa barbe. « Bordier. Je t'avais inscrit{e} : *revenu{e} le quinze juin.* » Il tourne une page. Il écrit, lentement : *Et revenu{e} encore, le vingt-cinq, les autres étant éveillés.* « Voilà. C'est la première ligne de ce Rôle qui ait une suite. »",
      "Derrière toi, la charrette s'est arrêtée devant la cinquième maison. Le jeune charretier en est descendu. Il y a une vieille, sur le banc, toute petite, un fichu noir. Elle le regarde. Elle ne se lève pas. Elle dit quelque chose, que tu n'entends pas ; et il se met à genoux dans les tessons, devant elle, la tête sur ses genoux à elle, comme un enfant, ce qu'il est.",
      "Tu ne regardes pas plus longtemps. Tu comptes les portes. Une. Deux.",
      "La troisième. Le marteau, que tu connais. Le crépi, qui s'écaille où il s'écaillait. Par la fenêtre du bas, il vient un sifflement : un homme siffle en tournant un pot, deux notes, une haute, une basse, toujours les mêmes. Il n'a pas encore regardé dehors. Il croit que c'est le matin d'une nuit de 595.",
      "Tu as la main sur le loquet. Tu as seize ans. Ils t'attendent à dix.",
    ],
    choices: [{ label: "Entrer", to: "Frr_lison", big: true }] },

  Frr_lison: { act: "V", title: "Quelqu'un de petit", ambiance: "champs",
    text: [
      "La cuisine. Le four, le tour, la table. Ton père est au tour, de dos, les mains dans la terre. Ta mère est au feu, la tête de côté. Elle se retourne la première.",
      "Elle te regarde. Elle voit un{e} étranger{e} maigre, noir{e} de route, dans sa porte. Puis elle voit la bouche. Elle lâche la cuiller.",
      "« C'est pas possible », dit-elle. Ton père s'est retourné. Il a cessé de siffler. Il regarde ta mère, puis toi, puis la fenêtre, où le jour n'a pas la bonne couleur.",
      "Tu leur dis. Tu avais préparé cela pendant quatre jours de charrette, et il n'en reste rien : tu dis l'année, tu dis *le Bond*, tu dis *six ans*, tu dis que tu étais aux foins chez l'oncle et que tu es rentré{e} dans une ville grise. Tu dis que tu as grandi dehors. Tu ne dis pas comment. Ta mère a traversé la cuisine. Elle te tient la figure à deux mains. Elle te tâte, les joues, les épaules, comme on cherche un enfant dans un manteau trop grand.",
      "« T'as mis six ans pour rentrer des foins », dit ton père. Il a une voix cassée. Il s'essuie les mains à son tablier, longtemps, parce qu'on ne touche pas son enfant avec de la terre.",
      "Et il y a un bruit, dans l'escalier. Des pieds nus. Une petite de cinq ans paraît à la dernière marche, en chemise, les cheveux en l'air, un oiseau de terre verte à la main. Elle a dormi six ans et une nuit. Elle a faim.",
      { if: { has: "r:lison_sifflet" }, text: "Elle a ton sifflet. Tu le lui as mis dans la main, il y a sept jours, dans une pincée. Elle le serre contre elle." },
      "Elle te voit. Elle te détaille. « T'es le rêve », dit-elle. Puis elle regarde derrière toi, dans la porte, plus bas, à la hauteur de quelqu'un de dix ans. « {hero} est rentré{e} ? »",
    ],
    choices: [
      { label: "T'accroupir. « C'est moi. J'ai grandi pendant que tu dormais. »", fx: { flag: "r:v_lison_dit" }, to: "Frr_lison_fin", big: true },
      { label: "Siffler deux notes, une haute, une basse, et attendre", fx: { flag: "r:v_lison_doux" }, to: "Frr_lison_fin", big: true },
    ] },

  Frr_lison_fin: { act: "V", title: "Des fois", ambiance: "champs",
    text: [
      { after: "r:v_lison_dit", text: "Tu t'accroupis. Tu es à sa hauteur. Tu le lui dis. Elle fronce tout son front. « {hero} est petit{e}. » Elle est catégorique. Tu dis que {hero} était petit{e}. Qu'elle a dormi très longtemps, et que pendant ce temps-là, dehors, {hero} a continué." },
      { after: "r:v_lison_dit", text: "Elle examine cette nouvelle. Elle te regarde la bouche. Elle te regarde les mains, où il y a une cicatrice, au pouce, qu'elle t'a faite elle-même avec un tesson, l'été de ses quatre ans. Elle prend ton pouce. Elle le retourne. « C'est là que je t'ai coupé{e}. » Elle lève les yeux. Ils sont pleins d'une indignation énorme. « T'as grandi sans moi ! »" },
      { after: "r:v_lison_doux", text: "Tu ne dis rien. Tu siffles : deux notes, une haute, une basse. C'est l'air du père. C'est aussi le tien : tu le sifflais en rentrant, du bas de la rue, pour qu'elle coure à la porte." },
      { after: "r:v_lison_doux", text: "Elle court à la porte. Elle te bouscule pour passer. Elle regarde dans la rue, en haut, en bas. Il n'y a personne de dix ans. Elle se retourne. Elle te regarde, toi, qui as sifflé. Elle met un temps très long, pour une personne de cinq ans. Puis elle vient à toi, lentement, et elle te prend le pouce, où il y a une cicatrice qu'elle t'a faite avec un tesson. « C'est là que je t'ai coupé{e}, dit-elle. T'as grandi sans moi. »" },
      "Tu dis oui. Tu dis que tu n'as pas fait exprès. Elle réfléchit. Elle n'a pas lâché ton pouce.",
      "« Tu me portes encore ? » Tu la prends. Elle pèse ce qu'elle pesait. Toi, tu as six ans de plus dans les bras, et elle le sent : elle s'installe, les genoux à ta taille, avec la satisfaction de quelqu'un dont la monture a pris de la force.",
      "« T'es gentil{e}, des fois », concède-t-elle. C'est ce qu'elle disait. Elle te souffle le sifflet dans l'oreille, de toutes ses forces, pour voir si tu es bien réveillé{e}.",
      "Par-dessus sa tête, tu vois ta mère, qui pleure en riant, et ton père, qui a fini de s'essuyer les mains. Tu as marché neuf jours dans du gris pour cette cuisine. Tu y es. Elle sent la terre mouillée et la soupe d'il y a six ans, qui est encore chaude.",
    ],
    choices: [
      { label: "Derrière la maison : l'arbre", hide: ENSEMBLE, to: "Frr_arbre", big: true },
      { label: "Quelqu'un attend, à la fontaine", hide: { not: ENSEMBLE }, to: "Frr_arbre", big: true },
    ] },

  Frr_arbre: { act: "V", title: "Derrière la troisième maison", ambiance: "champs",
    text: [
      { if: ENSEMBLE, text: "{autre} est à la fontaine, assis{autre:e} sur la margelle. {autre:Il} n'est pas entré{autre:e}. {autre:Il} t'a dit, au bas de la rue : *c'est ta porte.* Tu sors, la petite sur la hanche. Tu dis : « Viens. On mange. » {autre:Il} se lève. Lison {autre:le} regarde avec une méfiance de propriétaire. « C'est qui ? — C'est quelqu'un qui écrit long. » Elle trouve la réponse suffisante." },
      { if: { not: ENSEMBLE }, text: "Tu sors par-derrière, la petite sur la hanche. Tu as le Cahier dans ta chemise. Il y a une borne, à la fontaine. Tu écriras ce soir. Tu écriras, en bâtons : *J'Y SUIS. ELLE M'A RECONNU PAR LE POUCE.*" },
      "Derrière la maison, dans la cour, il y a l'arbre. Un fièvrier : un tronc gris, pas très haut, qu'on a planté l'année de ta naissance, comme partout dans la rue, depuis que l'apothicaire a dit ce qu'on en tirait. L'écorce pèle d'elle-même, par rubans, au printemps.",
      "Tu la regardes. Tu en as bu dix-neuf jours, à sept ans, en pleurant. Une reine a arrêté une ville pour cela.",
      "Tu en remplis un sac. Cela prend un matin. Lison aide : elle ramasse ce qui tombe, et elle te demande pour qui c'est. « Pour une petite. Dans une tour. Elle a huit ans. — Elle est malade ? — Elle l'était. — Alors pourquoi tu lui en portes ? » Tu cherches. « Pour qu'il y en ait. Là-bas, ils ont eu peur d'en manquer. Faut plus que personne ait peur de ça. »",
      "Elle hoche la tête. Elle met une poignée de plus dans le sac. Puis une poignée de terre, parce que c'est joli.",
    ],
    choices: [
      { label: "La Saint-Michel, sous les noyers", hide: ENSEMBLE, to: "Fr_fin_chacun", big: true },
      { label: "Repasser par les Trois-Noyers : on y attend une voiture", hide: { not: ENSEMBLE }, to: "Fr_fin_ensemble", big: true },
    ] },

  Frj_rue: { act: "V", title: "C'est ta porte", ambiance: "champs",
    text: [
      "Roquebise est sur sa butte. Tu y es venu{e} il y a neuf jours, ou soixante ans, pour une noce. On t'avait fait danser. Tu avais donné une coupe à la mariée, ou tu n'avais rien donné.",
      "La rue des Potiers est en pente, pavée de tessons. {autre} est descendu{autre:e} de la charrette en marche, au bas de la côte. Tu {autre:le} suis à dix pas. {autre:Il} marche comme on marche vers un juge.",
      "À la fontaine, {autre:il} s'arrête. « C'est ta porte », dis-tu. {autre:Il} te regarde. {autre:Il} fait oui. Tu t'assois sur la margelle.",
      "Tu attends. D'où tu es, tu vois une porte, la troisième, et {autre}, la main sur le loquet. Tu entends siffler, à l'intérieur : deux notes, une haute, une basse. {autre:Il} entre.",
      "Il ne se passe rien, longtemps. Puis il vient de la maison un cri de femme, pas un cri de peur ; et une voix d'homme, cassée ; et, un peu après, un coup de sifflet à réveiller un mort, soufflé de toute la force d'une petite poitrine.",
      { if: { has: "monde:coupe_noce" }, text: "Une vieille est assise sur un banc, de l'autre côté de la fontaine, dans un fauteuil qu'on a sorti. Elle a quatre-vingts ans, des aiguilles à tricoter, et sur ses genoux une coupe de faïence bleue. Elle te regarde. Elle te regarde comme on regarde un revenant, ce que tu es. « Vous avez sa figure, dit-elle. Un{e} passant{e}, à mes noces, qui m'a donné ça. Vous êtes de sa famille ? » Tu dis oui. C'est le plus court. Ysabeau hoche la tête. « Il ne faisait pas son âge non plus. »" },
      "Tu regardes la porte. Tu as fait soixante ans de route pour une vieille femme et une cloche. {autre} en a fait neuf jours pour cela : une cuisine, deux notes. Tu trouves que {autre:il} a eu raison de dire le mot, et que tu as eu raison de te taire, et que c'est une chose rare, d'avoir eu raison à deux.",
    ],
    choices: [{ label: "Attendre qu'on t'appelle pour la soupe", to: "Fr_fin_ensemble", big: true }] },

  Fr_fin_ensemble: { act: "V", title: "Sous les noyers, à la Saint-Michel", ambiance: "champs", end: true, epilogue: true, fx: FIN,
    text: [
      "Vous êtes repassés par les Trois-Noyers. Une voiture y était arrivée de Méridane, au pas, avec une vieille femme couchée sur des coussins, un laboureur de quarante-quatre ans qui tenait la bride, et un sac d'outils.",
      "On a gaulé les noix à la Saint-Michel. Il n'y a plus de lisière. La Ferme-Vieille s'est réveillée, de l'autre côté du pré : elle n'avait dormi que trois mois, et le fermier a cru qu'il avait la fièvre.",
      { if: J, text: "Tu as repris l'atelier. Line est dans son fauteuil, près de l'établi, une couverture aux genoux. Elle te regarde travailler. Elle ne dit rien quand c'est bien. Quand c'est mal, elle tousse." },
      { if: { all: [J, { has: "monde:v_sable_attente" }] }, text: "Elle a eu sa pincée par semaine, jusqu'aux noix. Elle l'a prise de mauvaise grâce, en disant chaque fois que c'était la dernière. Elle a vu son père apprendre à lire l'heure sur une montre à ancre. Elle a dit que cela valait une jarre." },
      { if: { all: [J, { not: { has: "monde:v_sable_attente" } }] }, text: "Elle a tenu jusqu'à la moisson, puis jusqu'aux noix, par entêtement. Elle a dit qu'elle voulait voir si tu savais gauler. Tu ne savais pas. Son père t'a montré." },
      { if: R, text: "Tu viens de Roquebise tous les quinze jours, avec un panier de verre et une petite de cinq ans sur les épaules, qui veut voir *la vieille dame aux pendules.* Tu as un métier : tu portes. On te paie. Tu rends la monnaie. Les Veilleurs t'ont demandé de leur montrer les caches, le long des trois routes, et tu les leur montres une à une." },
      { if: R, text: "Line fait asseoir Lison sur l'établi. Elle lui ouvre une montre. Elle lui montre la roue de rencontre. Lison veut savoir pourquoi ça fait du bruit. « Parce que ça compte, dit Line. Tout ce qui compte fait du bruit. » Elle te regarde, par-dessus la tête de l'enfant. « Sauf ceux de la glane. Eux, ils comptaient en silence. »" },
      "Le soir, vous vous asseyez tous les deux sur la margelle du puits. Les Cahiers sont dans le tiroir de l'établi, l'un sur l'autre. Vous n'en avez plus besoin.",
      "Très loin, quand le vent porte, on entend la Patiente. Elle sonne les heures. Elle les sonne toutes, l'une après l'autre, jusqu'à douze, et elle recommence. On s'y fait. Vous êtes les deux seuls, dans tout le pays, à tendre encore l'oreille après le onzième.",
    ] },

  // ----- each their own : the one who passes takes Line home
  Frj_berline: { act: "V", title: "Une voiture, au pas", ambiance: "champs",
    text: [
      "{autre} est parti{autre:e} à l'aube, sur la paille des verriers. Vous vous êtes dit *sous les noyers.* {autre:Il} ne s'est pas retourné{autre:e}. {autre:Il} avait les genoux qui lâchaient, et {autre:il} n'aime pas qu'on voie.",
      "Tu trouves une voiture. C'est la berline de la Maîtrise, celle où l'on avait amené Line, prisonnière, il y a cinq jours. Il n'y a plus de Maîtrise pour la réclamer. On y met des coussins.",
      { if: GIRARD_PRIS, text: "Girard mène. Il est arrivé du halage hier, à midi et demi, debout sur sa charrette, en criant que la Grise boitait. Il a quatorze ans. Il a vu sa sœur. On le lui a expliqué trois fois. Il ne comprend pas, et il mène quand même : c'est un garçon qui sait ce qu'on fait d'une jument, quoi qu'il arrive au reste." },
      { if: { not: GIRARD_PRIS }, text: "Josse mène, à pied, à la tête des chevaux. Il n'a pas voulu monter. Il a dit qu'un homme qui a soixante ans de retard sur ses labours peut bien marcher." },
      "On va au pas. Line est couchée, les yeux ouverts. Elle regarde défiler la route par la portière : la Foire, où l'on rattelle ; l'abbaye, qui chante ; Arvoise. Elle l'a faite cent fois, cette route, dans le gris, avec du sable au cou, pour aller s'asseoir à côté d'un père qui ne bougeait pas.",
      "« Je la voyais plus longue », dit-elle.",
      "Tu marches à la portière. Elle te parle, par morceaux, entre deux souffles. Elle te dit où sont les limes fines. Qu'il faut graisser le tour à la Toussaint. Que la veuve du charron te doit trois écus pour une pendule, et qu'elle ne paiera pas, et qu'il ne faut pas réclamer. Elle te dicte l'atelier. Tu comprends ce qu'elle fait. Tu ne dis rien : elle n'aime pas qu'on l'interrompe.",
      { if: { has: "j:v_perrine_route" }, text: "À Arvoise, une colporteuse descend du marchepied, où elle avait fait la route depuis Méridane. Elle regarde le quai. Il y a, sur un seuil, une femme de soixante-quatorze ans, les mains dans son tablier, qui regarde l'eau couler. Perrine pose sa hotte. Elle te dit : « Saint-Michel. Peut-être. » Elle traverse." },
    ],
    choices: [{ label: "Les Trois-Noyers", to: "Frj_atelier", big: true }] },

  Frj_atelier: { act: "V", title: "L'établi", ambiance: "champs",
    text: [
      "Les Trois-Noyers. Le village n'a pas été évacué : l'ordre devait venir le vingt-deux, et le vingt et un il n'y avait plus de quoi fuir. On a défait les ballots. Le sergent recenseur a déchiré ses listes.",
      "L'atelier de Line est comme tu l'avais laissé, il y a quatorze jours : la porte forcée par la Garde, les tiroirs retournés. On remet de l'ordre. Josse répare la porte. Il a retrouvé, de l'autre côté du pré, sa ferme, que d'autres tenaient ; ils se sont regardés, lui et le fermier, et ils ont décidé qu'il y avait de la terre pour deux.",
      "On met Line dans son fauteuil, près de l'établi. Elle regarde tout. Elle te fait ouvrir le troisième tiroir, celui du fond, qu'elle fermait à clef. Il y a dedans une boîte de fer.",
      "« Ouvre. »",
      "Tu ouvres. Il y a une vis bleuie. Un ruban. Un caillou plat. Et, sur un chiffon, soixante petites encoches taillées dans une latte de noyer, une par Grand Midi.",
      { if: { has: "r:acompte_line" }, text: "Il y a aussi, dans un coin, une pincée de quelque chose de gris, qui ne luit plus. « Je l'ai trouvée contre une racine, à neuf ans, au septième peuplier. Je n'ai jamais su qui l'avait mise. J'ai mis vingt ans à comprendre ce que c'était. C'est de là que tout est venu : le sable, les Cahiers, toi. » Elle te regarde. « Tu sais qui ? » Tu sais. Tu le lui dis. Elle rit, et cela la fait tousser. « Le petit animal. Il me payait d'avance. »" },
      { if: { has: "monde:cadran_poussiere" }, text: "Et un papier, plié en huit, jauni. Tu le déplies. C'est un dessin d'enfant : un cadran, avec les deux aiguilles sur midi, et dessous une roue de rencontre, les dents de travers. « Je l'ai recopié le soir même, dit-elle, avant que le vent le prenne. Je l'ai regardé soixante ans. Il disait : *l'autre coup viendra.* » Elle ferme les yeux. « Il est venu. »" },
      "« C'est à toi, dit-elle. La boîte. L'établi. Le reste. Tu sais tout ce que je sais. Tu sais même une chose de plus : comment cela finit. » Elle rouvre les yeux. « Je t'ai menti une seule fois. Je t'ai dit que j'avais besoin d'un apprenti. J'avais besoin de toi, en particulier. Je t'ai reconnu{e} à huit ans, sur la place, à ta façon de regarder l'horloge de l'église comme si elle te devait quelque chose. »",
    ],
    choices: [{ label: "La Saint-Michel", to: "Fr_fin_chacun", big: true }] },

  Fr_fin_chacun: { act: "V", title: "Rendez-vous sous les noyers", ambiance: "champs", end: true, epilogue: true, fx: FIN,
    text: [
      "À la Saint-Michel, on gaule les noix. Il n'y a plus de lisière : il y a un pré, et de l'autre côté une ferme qui fume.",
      { if: J, text: "Tu es sous le troisième noyer, une gaule à la main, que tu tiens mal. Line est dans son fauteuil, qu'on a sorti, une couverture aux genoux. Elle regarde la route." },
      { if: { all: [J, { has: "monde:v_sable_attente" }] }, text: "Elle a eu sa pincée par semaine. Elle a dit chaque fois que c'était la dernière. Elle voulait voir les noix, et qui viendrait par cette route." },
      { if: { all: [J, { not: { has: "monde:v_sable_attente" } }] }, text: "Elle a tenu, par entêtement, jusqu'à la moisson, puis jusqu'aux noix. Elle voulait voir qui viendrait par cette route." },
      { if: J, text: "Il vient quelqu'un. Tu {autre:le} reconnais de loin, au pas : un pas de fossé, qui a appris à ne plus se cacher. {autre:Il} porte un panier de verre, une blouse bleue qui tourne au vert sous les bras, et sur ses épaules une petite de cinq ans, qui souffle dans un sifflet de terre à faire lever les corbeaux." },
      { if: R, text: "Tu arrives par la route de Roquebise, à pied, un panier de verre au bras, une blouse bleue sur le dos. Lison est sur tes épaules. Elle siffle. Elle siffle depuis la Ferme-Vieille, sans s'arrêter, et tu as renoncé à lui dire que tu avais compris." },
      { if: R, text: "Sous le troisième noyer, il y a quelqu'un, une gaule à la main, qui la tient mal. Et une vieille, dans un fauteuil, qui regarde la route. Elle t'a vu{e}. Elle a ôté ses lunettes de son front pour mieux voir, ce qui ne sert à rien, et qu'elle fait toujours." },
      "« Tu as mis le temps », dit Line.",
      "On s'assoit dans l'herbe. On casse des noix. Lison veut savoir ce que c'est que la boîte de fer. Line la lui ouvre. Elle lui montre une vis, un ruban, un caillou. « Et ça ? — Ça, c'est une latte. Avec des encoches. — Pourquoi ? — Pour compter des jours où il ne se passait rien. » Lison trouve que c'est bête. Line dit que oui.",
      "Les deux Cahiers sont dans l'herbe, l'un sur l'autre. On les a remplis jusqu'à la dernière page, entre Roquebise et ici, de borne en borne, tout l'été : en bâtons d'un côté, en penché de l'autre. Il n'y a plus de place. Il n'en faut plus.",
      "Très loin, le vent apporte une cloche. Elle sonne douze. Personne, sous les noyers, ne lève la tête, que vous deux.",
    ] },
});

module.exports = { passages: P, extras: {} };
