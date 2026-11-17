// Les Trois Clefs d'Aiguemorne · act V, the voice (1/2): the upper town on the day of the Saint-Éloi. The registry
// draws by lot the clerk who will read the Seven Causes before the door: "the Voice of the Causes". The lot is
// arranged; the roll is read (the seventh Cause is the Rossignols' own); the archive (the last article of the
// foundation); then the Voice carries the roll to each Clavaire for his signature (hub A5v_ville): the Syndic's
// house (the butler, the offer, the son-in-law), the bishop's palace (the Dean, his reliquary).
// Shared marks: monde:a5:causes, monde:a5:charte (the last article), monde:a5:ancien (what the old Voice heard),
// monde:a5:offre (the Syndic's price), monde:a5:hyacinthe (he will say no aloud), monde:a5:doyen=avec|contre,
// monde:a5:doyen_averti (he knows his key is false before the door). Personal: a5:v_tirage, a5:v_florimond.
var CENDRE_DUPE = { all: [{ has: "monde:a3:clef=echangee" }, { not: "monde:cendre:sait" }] };
module.exports = {
  passages: {
    A5v_aube: { act: "V", title: "Le greffe des Causes", place: "ville_haute", ambiance: "ville",
      fx: { until: 8 },
      text: [
        "La Ville-Haute s'éveille tard, comme les gens qui ont des domestiques. À huit heures, il n'y a dans la rue du Greffe que des laquais qui sablent, des perruquiers qui courent, et une file de petits clercs en manteau noir devant une porte à marteau de bronze.",
        "Tu en es. Fifrelin t'a trouvé le manteau chez un fripier du pont ; tu as fait le reste : une tache d'encre au majeur, le dos rond, cette manière de tenir son chapeau à deux mains.",
        "C'est ici que l'on tire au sort, le matin de chaque Nuit des Clefs, celui ou celle qui lira les Sept Causes devant la porte du Bronze. On prend dans les écritures de la ville, parmi les copistes de l'année : il faut une belle voix, une langue qui ne fourche pas, et n'être d'aucun parti. La fonction a un nom, qui est plus vieux que le greffe. On dit *la Voix des Causes*. Pour un soir, on vous appelle *Voix*, tout court, on vous cède le pas, et vous montez à la Tour avant les Clavaires eux-mêmes, pour dresser le pupitre.",
        "La Douairière l'a écrit dans son torchon : *les sorts, cela s'arrange.*",
        "Ils sont quatorze, dans une salle lambrissée, sous un grand tableau où un Juge de bronze très ressemblant tient une balance. Le greffier en chef, Maître Barnabé Minutier, un homme jaune qui a l'air d'avoir été relié en veau, plie quatorze billets et les jette dans une urne d'étain.",
        "Personne ne t'a demandé ton nom. Les copistes de l'année sont trop nombreux pour se connaître, et chacun de ces garçons prie tout bas pour que le sort tombe sur son voisin : la Voix lit seule, de nuit, devant une porte derrière laquelle il y a le Bronze. On en a vu s'évanouir.",
      ],
      choices: [
        { label: "Glisser dans l'urne, en t'y penchant pour saluer, un quinzième billet, plus roide que les autres",
          test: { dom: "discretion", diff: 10, label: "Arranger un sort", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { voie: "comedien" }, v: 5 }, { if: { voie: "alchimiste" }, v: 5 }] },
          win: { fx: { flag: "a5:v_tirage", ep: ["perso", 1200] }, to: "A5v_tirage_ok" }, lose: { to: "A5v_tirage_autre" } },
        { label: "Laisser tirer, et t'occuper ensuite de l'élu", to: "A5v_tirage_autre" },
      ] },

    A5v_tirage_ok: { act: "V", title: "Le quinzième billet", place: "ville_haute", ambiance: "ville",
      text: [
        "Tu salues le tableau, très bas, comme font les nouveaux. Ta manche passe sur l'urne. Il y tombe un billet que tu as plié à l'aube, sur du papier de dessinateur, deux fois plus ferme que le papier du greffe.",
        "Maître Minutier remue avec une cuiller d'étain. Il plonge la main sans regarder, selon l'usage, les yeux au plafond. Une main qui cherche à l'aveugle prend ce qui lui résiste : c'est une vérité que connaissent les tricheurs et les sages-femmes.",
        "Il déplie. Il lit un nom que tu as choisi hier soir, parmi ceux qui ne sont à personne.",
        "Treize petits clercs soupirent ensemble, d'un soulagement si franc que le tableau en tremble. On te regarde avec la pitié reconnaissante que l'on a pour le camarade désigné de corvée.",
        "« Approchez, dit le greffier. À dater de cette minute et jusqu'à ce que le Bronze ait parlé, vous n'avez plus de nom. Vous êtes la Voix. On ne vous interroge pas, on ne vous touche pas, on vous laisse passer. » Il te considère par-dessus ses lunettes. « Vous n'allez pas vous trouver mal ? »",
        "Tu réponds que tu tâcheras. Il a l'air de trouver la réponse convenable.",
      ],
      choices: [{ label: "Recevoir le rôle des Causes", to: "A5v_role", big: true }] },

    A5v_tirage_autre: { act: "V", title: "Pacôme Tirelet", place: "ville_haute", ambiance: "ville",
      text: [
        "Maître Minutier remue, plonge la main, les yeux au plafond, et déplie. « *Tirelet, Pacôme.* »",
        "Au troisième rang, un garçon de dix-huit ans devient de la couleur du papier. Il se lève. Il ouvre la bouche. Il en sort un « m-m-m-moi ? » qui fait baisser les yeux à toute la salle. Pacôme Tirelet a la plus belle main du greffe et un bégaiement que l'émotion rend infranchissable. Le sort a de ces plaisanteries.",
        "Le greffier en chef pâlit à son tour. On ne retire pas : le sort est le sort, c'est dans la fondation. Il y a eu une Voix qui louchait, une qui avait le hoquet. Il n'y en a jamais eu qui ne pût passer la première syllabe de *attendu*.",
        "On donne au malheureux son rôle, sa robe, une heure pour se préparer. Il sort dans le corridor en se tenant aux murs.",
        "Tu l'y rejoins. Il est assis sur un coffre à bois, le rôle sur les genoux, et il essaie tout bas : « *At-at-at-at…* » Des larmes lui roulent dans le col.",
        "Tu t'assieds près de lui. Tu lui dis que tu es de son rang ; que tu as, toi, la langue bien pendue et pas un sou ; que la fondation défend de retirer un nom sorti de l'urne, mais qu'elle ne dit rien de la figure qui est sous la robe, la nuit, à la lueur des torches, quand quatorze clercs en manteau noir se ressemblent comme quatorze corbeaux.",
        "Il te regarde. Il comprend avant que tu aies fini. On comprend très vite, à dix-huit ans, quand on vous offre de ne pas mourir de honte devant trente mille personnes.",
      ],
      choices: [
        { label: "Lui offrir cinquante écus pour sa robe, et pour qu'il aille se coucher avec la fièvre", if: { gold: { min: 1000 } }, why: "Il te faudrait cinquante écus.", fx: { gold: -1000, ep: ["perso", 800] }, to: "A5v_tirelet" },
        { label: "Ne rien lui offrir que le service, d'égal à égal",
          test: { dom: "social", diff: 0, label: "Rendre un service que l'on a besoin de rendre", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { voie: "rebouteux" }, v: 10 }] },
          win: { fx: { ep: ["perso", 1200] }, to: "A5v_tirelet" }, lose: { to: "A5v_tirelet" } },
      ] },

    A5v_tirelet: { act: "V", title: "Une robe pour deux", place: "ville_haute", ambiance: "ville",
      text: [
        "Il te donne tout : le rôle, la robe pliée, le rabat rouge, et jusqu'à ses gants de fil, qui sont trop grands. Il te serre les deux mains. Il voudrait te remercier, et il s'engage dans un mot en *r* dont il ne sortira pas avant midi ; tu lui fais signe que c'est entendu.",
        "« Dites que vous avez la f-f-fièvre. Restez chez vous jusqu'à demain. Si l'on vous demande comment c'était, vous direz que vous avez fermé les yeux. »",
        "Il hoche la tête. Il s'en va par l'escalier de service, à reculons, en te regardant comme on regarde un saint de vitrail.",
        "Au bas des marches, il se retourne, et il réussit enfin une phrase entière, d'un trait, sans une faute, parce qu'elle lui vient de plus loin que la peur.",
        "« Il y a quelqu'un derrière cette porte. Le vieux Baruch l'a dit, à la dernière. On l'a mis à la retraite. »",
        "Il a disparu avant que tu aies pu demander qui est le vieux Baruch.",
      ],
      choices: [{ label: "Passer la robe, et rentrer dans la salle", to: "A5v_role", big: true }] },

    // ───────────────────────────── The roll ─────────────────────────────
    A5v_role: { act: "V", title: "Le rôle des Sept Causes", place: "ville_haute", ambiance: "ville",
      fx: { flag: "monde:a5:causes", clue: "s5_causes", ep: ["perso", 800] },
      text: [
        "La robe de la Voix est noire, ample, sans taille, avec un rabat rouge et un capuchon que l'on rabat à la porte du Bronze. Elle a servi quinze fois. Elle sent l'encens et la peur des autres. Dedans, on n'a plus d'âge, plus de tournure, plus rien qu'une bouche.",
        "Maître Minutier te remet le rôle à deux mains : un rouleau de parchemin, long de quatre aunes, monté sur deux bâtons d'ébène. « Vous le lirez une fois ici, pour la langue. Vous le porterez ensuite à chacun de MM. les Clavaires, qui signera au bas *vu*. À dix heures et demie, vous montez. Vous le relisez devant la porte, à voix haute, lentement. Le Bronze entend, et il juge. »",
        "Tu déroules. C'est la ville entière, en sept paragraphes, dans cette écriture de greffe qui ôte aux choses leur sang.",
        "*Première Cause. Les compagnons serruriers contre la communauté des Maîtres du Fer : si le prix des maîtrises peut être fixé par ceux-là mêmes qui les vendent.*",
        "*Deuxième Cause. La ville basse contre le chapitre d'Ossevaux : si le denier des morts est dû par ceux qui n'ont pas de quoi enterrer.*",
        "*Troisième Cause. Les ouvriers des mines de Ferrières contre l'Économat : si les jetons qu'on leur compte sont une monnaie.*",
        "*Quatrième Cause. Les paroisses du quai contre la Ville-Haute : à qui est l'eau de la citerne en temps de sécheresse.*",
        "*Cinquième Cause. D'office : si un débiteur peut être retenu aux Plombs pour le prix de sa propre pension.*",
        "*Sixième Cause. Le Syndic des métiers contre l'hospice de la Morne : si le denier des serrures doit continuer d'y aller.*",
        "Tu arrives au bas. L'encre de la dernière est plus fraîche que les autres.",
        "*Septième Cause. Le prévôt de la cité contre trois de la bande dite du Rossignol, contumaces : s'ils ont tué Symphorien Balancier, Remonteur du Bronze, et ce qu'on leur doit.*",
        "Tu relis. Ce soir, devant une porte, à voix haute, lentement, c'est toi qui demanderas au Juge ce que l'on vous doit.",
      ],
      choices: [
        { label: "Demander au greffier, d'un air de rien, qui est le vieux Baruch", if: { seen: "A5v_tirelet" }, to: "A5v_ancien", hide: { not: { seen: "A5v_tirelet" } } },
        { label: "Demander au greffier s'il vit encore quelqu'un qui ait été la Voix", if: { not: { seen: "A5v_tirelet" } }, to: "A5v_ancien", hide: { seen: "A5v_tirelet" } },
        { label: "Descendre aux archives du greffe, où dort la fondation", to: "A5v_archives" },
        { label: "Rouler le parchemin, et commencer la tournée des signatures", to: "A5v_ville", big: true },
      ] },

    A5v_ancien: { act: "V", title: "« Plus lentement »", place: "ville_haute", ambiance: "ville",
      fx: { flag: "monde:a5:ancien", clue: "j5_lentement", ep: ["perso", 1000] },
      text: [
        "Maître Minutier pince les lèvres. « Baruch Lecoq. Il a été la Voix à la dernière Septaine. Un excellent copiste. On a dû s'en séparer : il tenait des propos. » Il te regarde. « Il balaie la salle des Rôles, au fond de la cour, par charité. Vous n'avez rien à lui demander. »",
        "Tu vas donc le lui demander. La salle des Rôles est une galerie de casiers, froide, où un homme de soixante ans pousse de la poussière avec lenteur. Il voit ta robe. Il s'appuie sur son balai.",
        "« Ah ! C'est toi, cette année. » Il a un œil qui rit et l'autre non. « Ils t'ont dit de lire lentement ? Ils me l'avaient dit. J'ai lu vite : j'avais peur, je voulais en finir. Les trois Clavaires étaient derrière moi, sur le banc, à regarder leurs souliers. J'en étais à la quatrième Cause, celle de la boulangerie, et j'avalais les *attendu*. »",
        "Il baisse la voix.",
        "« Alors, de l'autre côté du chêne, quelqu'un a dit : *Plus lentement.* »",
        "Il te laisse le temps.",
        "« Pas fort. Pas du tout comme une cloche. Une voix de personne, un peu sèche, comme une maîtresse d'école à un enfant qui bâcle. *Plus lentement.* J'ai regardé les Clavaires. Le gros n'avait rien entendu, ou il a fait comme si. L'évêque souriait. Le comte était blanc. J'ai repris la Cause au début, et je l'ai lue comme il faut. »",
        "Il recommence à balayer.",
        "« Je l'ai raconté le lendemain. On m'a expliqué que c'était l'écho, et l'émotion. Puis on m'a expliqué que je n'étais plus copiste. » Il pousse son tas vers la porte. « Lis lentement, petit. Elle n'aime pas qu'on bâcle. Et elle a raison : c'est sur ta lecture qu'elle juge. Elle n'a rien d'autre. Elle ne voit pas les gens. »",
      ],
      choices: [{ back: "A5v_role" }] },

    A5v_archives: { act: "V", title: "La fondation", place: "ville_haute", ambiance: "souterrain",
      branch: [
        { if: { has: "monde:a3:anthelme" }, fx: { flag: "monde:a5:charte" }, to: "A5v_arch_anthelme" },
        { to: "A5v_arch_seul" },
      ] },

    A5v_arch_anthelme: { act: "V", title: "Un homme qui demande l'heure", place: "ville_haute", ambiance: "souterrain",
      fx: { meet: "anthelme", clue: "j5_charte", ep: ["perso", 1200] },
      text: [
        "Les archives du greffe sont une cave voûtée, sèche, où cent cinq ans de Sentences dorment roulés dans des étuis de fer-blanc. On n'y descend plus. La Voix y a ses entrées, pour le cas où elle voudrait vérifier une formule.",
        "Il y a quelqu'un. Un petit vieillard qui ne pèse rien, en soutane d'emprunt, juché sur une échelle, le nez dans un étui. Il sursaute, manque de tomber, te voit.",
        "« Quelle heure est-il ? » demande Dom Anthelme Girodet, chanoine-archiviste d'Ossevaux, enterré vif à la Toussaint et sorti de terre par quelqu'un de votre maison.",
        "Il a une montre, pourtant : celle que Maître Crochemore lui avait laissée. Il la tire, la consulte, la rentre, rassuré. C'est une question qu'il pose comme d'autres se tâtent le pouls.",
        "« Je suis venu avec ces dames, dans le coche, sous un voile. On m'a pris pour une pleureuse un peu forte. » Il descend de son échelle, un parchemin contre lui. « J'ai pensé : puisque je suis mort pour le chapitre, autant employer mon éternité. Je cherchais une chose que j'avais lue il y a trente ans, en note, dans un cartulaire, et que je n'avais pas crue. »",
        "Il déroule sur un tonneau. C'est la charte de fondation du Juge, de la main d'Aubry Crochemore, avec ses onze articles. On la lit chaque Septaine sur la place. Tout le monde la sait.",
        "« Onze, dit Dom Anthelme. On en lit onze. Regardez le bas. »",
        "Le parchemin a été rogné. Mais le couteau a passé un peu haut, et il reste, au ras de la coupe, la tête de deux lignes, qu'une autre main, plus tard, a grattées. Le vieil archiviste les a relevées au crayon, lettre par lettre, par les creux.",
        "*Article dernier. Si le Juge venait à se taire, par accident, usure ou volonté, la cité ne lui cherchera pas de remplaçant. Elle fera plaider les Sept Causes devant elle-même, assemblée, et elle tranchera à voix levées. J'ai bâti ce Juge pour le temps qu'elle apprenne. A. C.*",
        "« *Pour le temps qu'elle apprenne*, répète Dom Anthelme. Il l'avait prévu provisoire. C'est la seule chose de tout l'édifice qu'ils aient pris la peine de couper. » Il te met le relevé dans la main. « Vous lisez ce soir devant du monde, je crois. Je ne vous dis pas quoi en faire. Je vous dis que cela existe, que c'est daté, et que c'est de lui. »",
      ],
      choices: [{ back: "A5v_role" }] },

    A5v_arch_seul: { act: "V", title: "Onze articles", place: "ville_haute", ambiance: "souterrain",
      text: [
        "Les archives du greffe sont une cave voûtée, sèche, où cent cinq ans de Sentences dorment roulés dans des étuis de fer-blanc. On n'y descend plus. La Voix y a ses entrées, pour le cas où elle voudrait vérifier une formule.",
        "Tu trouves la charte de fondation dans le premier casier, sous verre : onze articles, de la main d'Aubry Crochemore. On la lit chaque Septaine sur la place. Tout le monde la sait.",
        "Tu la regardes pourtant de près, parce que la Douairière t'a appris à regarder d'abord ce qui est autour. Le parchemin a été rogné par le bas. Le couteau a passé un peu haut : il reste, au ras de la coupe, la tête de deux lignes, qu'une autre main a grattées.",
      ],
      choices: [
        { label: "Les relever au crayon, par les creux",
          test: { dom: "savoir", diff: 10, label: "Lire ce qu'on a gratté", help: [{ if: { voie: "alchimiste" }, v: 15 }, { if: { voie: "crocheteur" }, v: 5 }, { if: { voie: "comedien" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:charte", clue: "j5_charte", ep: ["perso", 1200] }, to: "A5v_arch_ok" }, lose: { to: "A5v_arch_ko" } },
      ] },

    A5v_arch_ok: { act: "V", title: "L'article dernier", place: "ville_haute", ambiance: "souterrain",
      text: [
        "Le grattoir ôte l'encre. Il n'ôte pas le sillon que la plume a laissé dans la peau. Tu passes le crayon à plat, très légèrement, comme on fait pour copier une médaille, et les lettres sortent en clair sur le gris.",
        "*Article dernier. Si le Juge venait à se taire, par accident, usure ou volonté, la cité ne lui cherchera pas de remplaçant. Elle fera plaider les Sept Causes devant elle-même, assemblée, et elle tranchera à voix levées. J'ai bâti ce Juge pour le temps qu'elle apprenne. A. C.*",
        "Tu relis la dernière phrase. *Pour le temps qu'elle apprenne.* Le bâtisseur l'avait prévu provisoire. De tout son édifice, c'est la seule pierre que l'on ait pris la peine d'ôter.",
        "Tu gardes le relevé dans ta manche, contre le rôle.",
      ],
      choices: [{ back: "A5v_role" }] },

    A5v_arch_ko: { act: "V", title: "Deux lignes grattées", place: "ville_haute", ambiance: "souterrain",
      text: [
        "Tu y passes une demi-heure, à la chandelle. Il sort du parchemin un *si*, un *taire*, la moitié d'un *assemblée*, et deux initiales. Le reste s'est effacé sous le grattoir d'un homme soigneux.",
        "Il y avait un douzième article. On l'a coupé. C'est tout ce que tu peux dire ; et c'est déjà une chose à savoir, d'une charte que toute une ville récite par cœur.",
      ],
      choices: [{ back: "A5v_role" }] },

    // ───────────────────────────── The round of signatures ─────────────────────────────
    A5v_ville: { act: "V", title: "La tournée du rôle", place: "ville_haute", ambiance: "ville", hub: true, backName: "la rue du Greffe",
      fx: { until: 11 },
      text: [
        { first: true, text: "Tu sors du greffe par la grande porte, le rôle dans les bras, le capuchon sur les épaules. Un bedeau marche devant toi avec une clochette. Les gens s'écartent. Les laquais ôtent leur bonnet. Une marchande d'oublies se signe." },
        { first: true, text: "C'est une sensation que la maison Berlue ne t'avait pas préparé{e} à connaître : traverser une ville où ton portrait est à tous les murs, au milieu de la rue, précédé{e} d'une clochette, avec le droit d'entrer partout. Personne ne regarde sous un capuchon que l'usage défend de regarder." },
        { first: true, text: "Il te faut trois *vu*, de trois mains, avant la procession." },
        { again: true, text: "La Ville-Haute, ses hôtels à tourelles, son bedeau à clochette. Le rôle des Causes, sous ton bras, et la place de trois signatures." },
      ],
      choices: [
        { label: "L'hôtel du Marteau, où loge le Syndic", to: "A5v_syndic", hide: { seen: "A5v_syndic" } },
        { label: "L'évêché, où l'on a tendu les fenêtres", to: "A5v_eveche", hide: { seen: "A5v_eveche" } },
        { label: "La rue de l'Épée, et l'hôtel de Brandelis", to: "A5v_comte", hide: { seen: "A5v_comte" } },
        { label: "Regagner le greffe pour l'habillage : la procession se forme", if: { all: [{ seen: "A5v_syndic" }, { seen: "A5v_eveche" }, { seen: "A5v_comte" }] }, to: "A5v_habillage", big: true, hide: { not: { all: [{ seen: "A5v_syndic" }, { seen: "A5v_eveche" }, { seen: "A5v_comte" }] } } },
      ] },

    // ───────────────────────────── The Syndic's house ─────────────────────────────
    A5v_syndic: { act: "V", title: "L'hôtel du Marteau", place: "ville_haute", ambiance: "chateau",
      fx: { meet: "florimond" },
      text: [
        "L'hôtel du Marteau est la plus grosse maison de la rue des Orfèvres. Le Syndic l'a achetée toute meublée à un marquis qui lui devait, et il n'y a rien changé, pas même les portraits : on monte l'escalier entre quarante ancêtres qui ne sont pas les siens et qui ont l'air de le savoir.",
        "En haut des marches, il y a un homme long, noir, à figure de cierge, en gants de fil. Maître Florimond, maître d'hôtel du Manoir-Forge depuis vingt-cinq ans, a suivi son maître à Aiguemorne avec l'argenterie. Il descend à ta rencontre, sans hâte, de ce pas qui vous fait sentir le prix exact qu'on vous accorde.",
        "Il s'arrête à deux marches. Il regarde la robe, le rabat, le rôle. Puis il regarde sous le capuchon, ce que l'usage défend, et qu'un domestique de cette trempe se permet toujours.",
        { if: { any: [{ role: "a2", is: "voix" }, { role: "a4", is: "voix" }] }, text: "Tu l'as déjà eu devant toi, à Ferrières ou à Brandelis, sous un autre habit et un autre nom. Il a servi à table cent personnes que tu as trompées. Un maître d'hôtel n'oublie ni une main, ni une façon de tenir un verre." },
        "« La Voix des Causes, dit-il de sa voix unie. Monsieur attend. » Il ne bouge pas. Il resserre, de l'ongle, une vis imaginaire à la rampe. « Il me semble avoir déjà eu l'honneur. »",
      ],
      choices: [
        { label: "Ne rien répondre : la Voix ne parle qu'au Bronze, et il le sait",
          test: { dom: "social", diff: 10, label: "Se taire comme une fonction", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { has: "a5:v_tirage" }, v: 5 }, { if: { any: [{ role: "a2", is: "voix" }, { role: "a4", is: "voix" }] }, v: -10 }] },
          win: { fx: { ep: ["perso", 1200] }, to: "A5v_flo_ok" }, lose: { fx: { flag: "a5:v_florimond" }, to: "A5v_flo_ko" } },
        { label: "Lui dire tout bas : « Vous avez eu l'honneur. Mademoiselle Céleste aussi. Elle se porte bien. »", if: { has: "monde:celeste:libre" }, fx: { ep: ["perso", 1200] }, to: "A5v_flo_celeste", hide: { not: { has: "monde:celeste:libre" } } },
      ] },

    A5v_flo_ok: { act: "V", title: "Un capuchon", place: "ville_haute", ambiance: "chateau",
      text: [
        "Tu ne dis rien. Tu ne baisses pas les yeux non plus. Tu restes où tu es, le rôle dans les bras, avec la patience de quelqu'un qui n'est personne et que toute une ville attend.",
        "Maître Florimond est un homme d'usages. Il en a servi toute sa vie ; il sait qu'il y en a de plus forts que lui. Il s'incline, de la nuque seulement, et il s'efface.",
        "« Si la Voix veut bien me suivre. »",
        "Dans le corridor, pourtant, il se retourne à demi. « Je me serai trompé. À mon âge, toutes les figures finissent par en rappeler une autre. » Il n'en pense pas un mot, et il tient à ce que tu le saches.",
      ],
      choices: [{ label: "Entrer chez le Syndic", to: "A5v_cabinet", big: true }] },

    A5v_flo_ko: { act: "V", title: "Une main qui tient un verre", place: "ville_haute", ambiance: "chateau",
      text: [
        "Tu te tais. Mais ta main droite, sur le bâton d'ébène, a ce pli du petit doigt qu'il a vu, un soir, autour d'un verre de son maître.",
        "Maître Florimond ne sourit pas. Il n'a jamais souri. Il te précède dans le corridor, ouvre une porte, annonce « la Voix des Causes » ; et en s'effaçant pour te laisser entrer, il glisse à son maître, par-dessus ton épaule, trois mots que tu n'entends pas.",
        "Tu n'en avais pas besoin.",
      ],
      choices: [{ label: "Entrer chez le Syndic", to: "A5v_cabinet", big: true }] },

    A5v_flo_celeste: { act: "V", title: "Vingt-cinq ans de service", place: "ville_haute", ambiance: "chateau",
      text: [
        "Rien ne bouge dans la figure de cierge. La main gantée, seulement, quitte la rampe.",
        "« Mademoiselle », dit-il.",
        "« Sous le pont, première arche. Elle écrit pour les bateliers. Elle a appris à faire cuire un œuf. »",
        "Maître Florimond regarde les quarante ancêtres du marquis, l'un après l'autre, comme pour s'assurer qu'aucun n'écoute.",
        "« Je passe sur ce pont deux fois le jour, dit-il enfin. Monsieur me l'a commandé. Je regarde les voitures, les passants, les fenêtres. Je ne regarde pas les échoppes. » Sa voix n'a pas un pli. « J'ai porté Mademoiselle sur ce bras-ci quand elle avait trois jours. J'ai mis vingt-cinq ans à lui apprendre à tenir sa fourchette. Je ne vois pas pourquoi je la retrouverais, puisqu'elle ne veut pas l'être. »",
        "Il s'efface.",
        "« Si la Voix veut bien me suivre. Je n'ai reconnu personne. Je reconnais d'ailleurs fort peu de monde, depuis quelque temps. »",
      ],
      choices: [{ label: "Entrer chez le Syndic", to: "A5v_cabinet", big: true }] },

    A5v_cabinet: { act: "V", title: "Un homme qui signe", place: "ville_haute", ambiance: "chateau",
      fx: { meet: "quincarnon" },
      text: [
        "Maître Polycarpe Quincarnon reçoit dans le cabinet du marquis, à un bureau trop fin pour lui, entre un cartel doré et une cheminée où brûle une demi-forêt. Il est en robe de chambre de damas prune. On lui essaie, pour ce soir, la chaîne d'or du Syndic sur un manteau neuf ; un tailleur à genoux a la bouche pleine d'épingles.",
        "Dans l'embrasure d'une fenêtre, un jeune homme blond regarde la rue. Maître Hyacinthe Belorgey est déjà habillé : du blanc, de l'or, un manteau à traîne. Il a l'air d'un mannequin sur lequel on aurait oublié une tête triste.",
        "« Ah ! la Voix. Entrez, entrez. Florimond, un siège. Non, elle reste debout, c'est l'usage. » Le Syndic tend la main sans se lever. « Le rôle. Où signe-t-on ? »",
        "Tu le lui déroules, par le bas. Il trempe sa plume. Il ne lit pas : il cherche la place.",
        { if: { has: "a5:v_florimond" }, text: "Puis il relève la tête. Florimond lui a dit trois mots. Ses petits yeux vifs font sous ton capuchon le tour du propriétaire.", else: "Puis, la plume en l'air, il s'arrête. Il n'a pas lu le rôle ; mais il a regardé la main qui le tient. Ses petits yeux vifs remontent le long de ta manche, jusque sous le capuchon." },
        "« Laissez-nous, dit-il au tailleur. Vous aussi, Florimond. Hyacinthe, restez : cela vous instruira. »",
        "La porte se ferme. Il pose la plume.",
        "« Je n'oublie jamais une figure qui m'a coûté de l'argent. C'est une infirmité de commerçant. » Il croise ses mains sur son ventre. Il n'appelle personne. Il sourit. « La Voix des Causes ! Je savais la vieille Berlue ingénieuse. Je ne la savais pas dévote. Asseyez-vous donc. Entre nous, l'usage peut attendre. »",
      ],
      choices: [{ label: "Rester debout, et l'écouter", to: "A5v_offre", big: true }] },

    A5v_offre: { act: "V", title: "Le prix", place: "ville_haute", ambiance: "chateau",
      fx: { flag: "monde:a5:offre", clue: "s5_offre", ep: ["histoire", 1500] },
      text: [
        "« Je ne vous fais pas arrêter. Remarquez-le, et demandez-vous pourquoi. » Il compte sur ses doigts. « Si je sonne, j'ai une voleuse ou un voleur dans mon cabinet, et vos deux camarades dans la nature, avec ce qu'ils ont dans leurs poches. Cela ne m'avance pas. Je suis un homme qui aime que les choses viennent à lui. »",
        "Il tire un tiroir, y prend un papier, le pousse vers toi sur le maroquin.",
        "« Vous avez couru six semaines. Vous avez été très bien. Ferrières m'a coûté une cloche, et j'ai appris à Brandelis des choses sur mon portefeuille. Je ne vous en veux pas : j'achète toujours ce que je n'ai pas pu empêcher. Voici mon prix. »",
        "C'est une lettre de change, sur la caisse des Maîtres du Fer, à vue. Trente mille écus. Le nom du porteur est en blanc.",
        "« Dix mille par tête. Avec cela, une quittance générale, signée du Gouverneur, c'est-à-dire de mon gendre, demain matin : vous n'avez rien volé, vous n'êtes jamais sortis de la ville. La vieille dehors à l'aube, avec ses soixante-trois clefs. Et la septième Cause, que je fais replanter cette nuit : *les trois du Rossignol sont innocents, le Bronze a dit.* Il y a encore, à la ligne onze cent quatre-vingt, la place d'une cheville. »",
        "Hyacinthe Belorgey s'est retourné. Il écoute.",
        "« En échange, je ne vous demande presque rien. Ce soir, vous montez avant nous. Vos deux amis vous rejoignent, je ne veux pas savoir par où. Aux trois quarts, nous arrivons au palier ; vous êtes devant la porte, les trois clefs à la main ; et vous vous écartez. C'est tout. Nous tournons, nous ; mon petit meuble dit sa leçon ; et à minuit et quart vous redescendez par la grande porte, riches, blanchis, libres. »",
        "Il se renverse dans le fauteuil du marquis, qui gémit.",
        "« Vous ne me répondrez pas. Vous êtes trois, et vous votez : je me suis renseigné sur vos mœurs. Emportez cela. Dites-le aux deux autres. Je vous le redirai moi-même à travers la porte, si vous y êtes : j'ai la voix qui porte, et je ne rougis d'aucun de mes marchés. »",
        "Il signe enfin le rôle, d'un grand *Q* à boucle, sans l'avoir lu.",
        "« Songez-y. De l'autre côté, il y a quoi ? Une vieille femme qui tousse, et qui ne paiera plus personne. »",
      ],
      choices: [
        { label: "Reprendre le rôle, laisser la lettre sur le bureau, et sortir", to: "A5v_hyacinthe" },
        { label: "Reprendre le rôle et la lettre : c'est aux trois de dire non, ou oui", fx: { item: "lettre_change" }, to: "A5v_hyacinthe" },
      ] },

    A5v_hyacinthe: { act: "V", title: "Le gendre", place: "ville_haute", ambiance: "chateau",
      fx: { meet: "belorgey" },
      text: [
        "Dans l'antichambre, quelqu'un t'a suivi{e}. Maître Hyacinthe Belorgey referme la porte du cabinet derrière lui, avec le soin qu'il met à tout, et il reste la main sur le bouton.",
        "« Pardon, dit-il. Je vous demande pardon de vous retenir. » Il a cette voix polie qui s'excuse. De près, on voit qu'il n'a pas dormi. « Vous lisez ce soir. Le rôle. Vous serez devant la porte. »",
        "Il cherche. C'est un homme qui n'a jamais rien dit de lui-même, et à qui la phrase vient mal.",
        "« Mon nom est à la quarante et unième ligne. Je l'ai vu, tout à l'heure, sur le cylindre : on a voulu que j'y passe le doigt. Je suis fils de notaire. Mon père m'a appris qu'on ne signe pas un acte que l'on n'a pas lu. Celui-ci, on me l'a planté dans du bronze, sans me le lire, et on me demande de l'être pendant toute ma vie. »",
        { if: { has: "monde:hyacinthe:refus" }, text: "Il tire de son habit un papier plié, bord à bord, usé aux plis à force d'avoir été touché. « J'ai fait écrire ceci, avant-hier, par quelqu'un, sous un pont. *Monsieur, j'ai le regret de ne pouvoir accepter la charge que vous me destinez.* Je l'ai depuis deux jours. Je n'arrive pas à la lui remettre. Chaque fois que j'ouvre la bouche, il me parle de mes manchettes. »", else: "« Je ne sais pas ce que vous êtes, sous cette robe. M. Quincarnon vous parle comme à des gens que l'on achète. Mais vous avez fait une chose que je n'ai jamais faite : aller quelque part où l'on ne vous envoyait pas. »" },
        "Il te regarde, avec une espèce de détresse bien élevée.",
        "« Que fait-on, quand on vous a donné une vie toute faite, et qu'elle ne vous va pas ? »",
      ],
      choices: [
        { label: "« On le dit. Une fois, tout haut, devant du monde. Ce soir, sur l'estrade, quand on prononcera votre nom. »",
          test: { dom: "social", diff: 10, label: "Donner du courage à un homme poli", help: [{ if: { has: "monde:hyacinthe:refus" }, v: 20 }, { if: { has: "monde:celeste:libre" }, v: 10 }, { if: { voie: "comedien" }, v: 5 }, { if: { voie: "rebouteux" }, v: 10 }] },
          win: { fx: { flag: "monde:a5:hyacinthe", ep: ["perso", 1500] }, to: "A5v_hya_ok" }, lose: { to: "A5v_hya_ko" } },
        { label: "« On s'y fait. La plupart des gens s'y font. » Et passer : tu n'es pas venu{e} pour lui", to: "A5v_hya_ko" },
      ] },

    A5v_hya_ok: { act: "V", title: "Un mot de trois lettres", place: "ville_haute", ambiance: "chateau",
      text: [
        "« Tout haut », répète-t-il.",
        "« Vous n'avez pas besoin d'une lettre. Vous avez besoin d'un mot, et il a trois lettres. On le dit debout. Les notaires appellent cela un refus de succession : c'est un droit. »",
        "Il a un petit rire, le premier que tu lui entendes, étonné de lui-même.",
        "« Un refus de succession. Oui. Mon père en a dressé. Il disait que c'était l'acte le plus propre du métier : personne n'y perd que ce qu'il n'avait pas. »",
        { if: { has: "monde:celeste:libre" }, text: "Il baisse les yeux. « Elle m'a dit, sous son pont, en me comptant mes deux sous : *Hyacinthe, vous êtes un honnête homme à qui il manque d'avoir été malhonnête une fois.* Je crois qu'elle parlait de cela. »" },
        "Il se redresse. Le manteau à traîne lui tombe mieux, soudain, comme tombe un habit sur quelqu'un qui a décidé de l'ôter.",
        "« Ce soir. Quand le Bronze dira mon nom. Je serai sur l'estrade, à sa droite. Je dirai non. » Il réfléchit. « Je le dirai poliment. Je ne sais pas faire autrement. Mais je parlerai assez fort pour le troisième rang. »",
        "Il te fait une révérence de notaire, très exacte, et il rentre dans le cabinet, où l'on entend la voix cordiale du Syndic lui reprocher ses manchettes.",
      ],
      choices: [{ back: "A5v_ville" }] },

    A5v_hya_ko: { act: "V", title: "Des manchettes", place: "ville_haute", ambiance: "chateau",
      text: [
        "Il hoche la tête. Il s'attendait à cette réponse : c'est celle que tout le monde lui a toujours faite.",
        "« Oui. Sans doute. Je vous demande pardon. » Il lisse son manteau. « On me dit que je ferai un bon Gouverneur. Je signe droit, je ne bois pas, je n'ai d'opinion sur rien. Il paraît que c'est ce qu'il faut. »",
        "Il rentre dans le cabinet. Par la porte, avant qu'elle se ferme, tu vois le Syndic lui prendre le menton, comme à un cheval, pour redresser sa cravate.",
      ],
      choices: [{ back: "A5v_ville" }] },

    // ───────────────────────────── The bishop's palace ─────────────────────────────
    A5v_eveche: { act: "V", title: "L'évêché", place: "ville_haute", ambiance: "temple",
      fx: { meet: "calixte" },
      text: [
        "L'évêché d'Aiguemorne ne sert que tous les sept ans. Le reste du temps, un concierge y élève des serins. On l'a rouvert pour Monseigneur d'Ossevaux ; on a tendu les fenêtres de violet, sablé la cour, et posté à chaque porte un Suisse noir, la hallebarde au pied, qui te regarde passer avec des yeux d'eau morte.",
        "Ils ne t'arrêtent pas. On n'arrête pas la Voix. Mais tu sens, dans ton dos, deux d'entre eux se mettre en marche, à dix pas, du même pas que toi.",
        "On te fait monter. On te fait attendre dans une galerie où il n'y a qu'un crucifix et une odeur de buis. Puis une porte s'ouvre, sans bruit, sur une chambre blanche.",
        "Elle est toute blanche : les murs, le lit, les rideaux, un seul fauteuil. Tu en as connu une pareille, ou l'un de vous en a connu une, à Ossevaux. Près de la fenêtre, long, pâle, en soutane violette, un homme arrose un petit cyprès en pot avec un arrosoir d'argent.",
        "« La Voix, dit Monseigneur Calixte de Saint-Brumaire, sans se retourner. Entrez, mon enfant. Fermez. Il y a un courant d'air qui fait du mal à mon arbre. »",
        "Il pose l'arrosoir. Il se retourne. Ses yeux très clairs se posent sur le capuchon, et il a un sourire d'une douceur parfaite : celui d'un collectionneur à qui l'on rapporte une pièce égarée.",
        { if: { any: [{ has: "monde:a3:v_vue" }, { has: "monde:a3:m_vu" }, { has: "monde:a3:o_vu" }, { has: "monde:a4:doyen_reconnu" }] }, text: "« Je me disais bien que je vous reverrais. J'ai une mémoire sans mérite : je n'oublie rien de ce qui est allé chez moi. Vous avez meilleure mine qu'à la Toussaint. Les voyages vous réussissent. »", else: "« Je ne crois pas avoir eu le plaisir. Mais j'ai celui de deviner. Il n'y a que trois personnes, dans ce pays, qui auraient l'idée de venir chez moi sous cette robe ; et j'ai fait préparer trois chambres. Vous êtes dans la première. »" },
        "Il respire son sachet de buis.",
        "« Asseyez-vous. Je signerai votre rôle. Auparavant, permettez à un vieil homme une curiosité : c'est mon seul vice. »",
      ],
      choices: [{ label: "T'asseoir dans l'unique fauteuil", to: "A5v_doyen", big: true }] },

    A5v_doyen: { act: "V", title: "Le reliquaire", place: "ville_haute", ambiance: "temple",
      text: [
        "Il va à une table où il y a un coffret d'ivoire. Il l'ouvre avec une petite clef d'or qu'il porte au poignet. Dedans, sur un coussin de soie violette, repose une clef.",
        { if: { has: "monde:a3:clef=echangee" }, text: "Elle est d'argent noirci, à l'anneau ciselé d'osselets, au panneton en larme. Tu la connais. Tu l'as vue naître, une nuit, sous la lime de Maître Crochemore, dans une auberge d'Ossevaux.", else: "Elle est d'argent, neuve, trop brillante, d'un dessin approximatif : un orfèvre de la Ville-Haute l'a faite en huit jours, d'après un portrait. Ce n'est même pas un mensonge. C'est un accessoire." },
        { if: CENDRE_DUPE, text: "« La clef de Cendre. Je l'ai levée moi-même de la main du Gisant, le soir des Trépassés, devant mon chapitre. Elle ne m'a pas quitté. » Il la contemple avec tendresse. « Cent cinq ans dans la main d'un mort. Vous n'imaginez pas ce que cela donne à un objet. Une patine d'âme. »" },
        { if: { all: [{ has: "monde:a3:clef=echangee" }, { has: "monde:cendre:sait" }] }, text: "« Ceci est un faux, dit-il aimablement. Très beau. Votre horloger a du talent pour le vieil argent. Je l'ai su en la rapportant chez moi : la vraie pesait onze grains de plus. Je pèse tout ce que je lève. Je la porterai ce soir quand même, sur son coussin. Une procession a besoin d'un objet ; elle se soucie peu qu'il ouvre. »" },
        { if: { has: "monde:a3:clef=prise" }, text: "« Ceci est de la quincaillerie, dit-il aimablement. On m'a pris la vraie dans la main même de mon prédécesseur, à l'office, sous mes yeux. J'ai trouvé cela d'un goût douteux, et d'une exécution admirable. Je porterai celle-ci ce soir. Une procession a besoin d'un objet ; elle se soucie peu qu'il ouvre. »" },
        "Il referme le coffret.",
        "« Je ne vous ferai pas l'injure d'une offre d'argent. C'est la manière de mon collègue du Fer : il croit que tout le monde a un prix parce que lui en a un. Je vous en ai fait une autre, à Brandelis, par un tiers ; vous ne l'avez pas prise. Un navire. La mer. Trois clefs au fond de l'eau. C'était la solution élégante : une porte que personne n'ouvre plus. »",
        "Il s'assied sur le bord du lit blanc, les mains jointes.",
        "« Je vais vous dire ce que je veux, moi. Mes deux collègues veulent se servir du Bronze. Je veux qu'il se taise. Voilà cent cinq ans qu'une chambre parle à cette ville, et que la ville a cessé de parler. Je suis l'évêque des morts : je sais reconnaître une cité qui a remis sa conscience à quelqu'un d'autre, comme on remet ses os à un caveau. J'ai fait graver une dalle. Je ne m'en cache pas. On prépare la tombe de ceux qu'on respecte. »",
        "« Et le mur ? »",
        "« Je n'ai pas voulu du mur. On ne mure pas une femme vivante : c'est vulgaire. » Il respire son buis. « Je voulais qu'elle sorte, mon enfant. Par la porte, dignement, qu'on la mène à Ossevaux, dans une maison que j'ai, où il y a un jardin. Et que derrière elle on scelle une chambre vide. Je lui ai écrit. Elle m'a répondu quatre lignes. Elle a refusé le jardin. »",
      ],
      choices: [
        { label: "« Que disaient les quatre lignes ? »", to: "A5v_doyen_lignes" },
      ] },

    A5v_doyen_lignes: { act: "V", title: "Quatre lignes", place: "ville_haute", ambiance: "temple",
      fx: { clue: "c5_quatre", ep: ["perso", 1000] },
      text: [
        "Il sourit, comme on sourit d'un bon mot que l'on a reçu en pleine figure.",
        "« Je les sais par cœur. Je collectionne les derniers mots ; ceux-là n'en étaient pas, mais ils en avaient la tenue. »",
        "Il les récite, les yeux fermés, de sa voix douce.",
        "« *Monseigneur, vous voulez que la ville reprenne sa conscience, et vous commencez par lui ôter la mienne sans la lui montrer. C'est escamoter un mort. Si je dois me taire, que ce soit devant elle. Gardez votre jardin : j'ai passé l'âge des cloîtres choisis par d'autres.* »",
        "Il rouvre les yeux.",
        "« C'est une femme admirable. Je l'aurais voulue dans mon chapitre. Elle m'a fait comprendre, en quatre lignes, que mon élégance était une lâcheté ; et depuis, voyez-vous, je ne sais plus très bien ce que je veux. C'est une situation nouvelle pour un homme de mon âge. J'y prends un certain intérêt. »",
        "Il se lève, va au rôle, que tu as déroulé sur la table, et il signe, d'une petite croix suivie d'un nom interminable.",
        { if: CENDRE_DUPE, text: "Tu regardes le coffret d'ivoire. Dans quelques heures, cet homme montera cent quatre-vingts marches, s'agenouillera devant une porte, et tournera dans une serrure d'argent, devant ses deux ennemis, une clef qui ne mordra pas." },
      ],
      choices: [
        { label: "Lui dire que sa clef est fausse, avant que la porte le lui dise", if: CENDRE_DUPE, fx: { flag: "monde:a5:doyen_averti", set: { "monde:a5:doyen": "avec" }, ep: ["perso", 1500] }, to: "A5v_doyen_averti", hide: { not: CENDRE_DUPE } },
        { label: "« Vous l'avez dit vous-même : qu'elle se taise devant la ville. Ce soir, ne nous barrez pas l'escalier. »",
          test: { dom: "social", diff: 10, label: "Convaincre un homme qui ne sait plus ce qu'il veut", help: [{ if: { has: "monde:a5:charte" }, v: 15 }, { if: { has: "monde:a3:doyen=charme" }, v: 10 }, { if: { has: "monde:a3:doyen=soupcon" }, v: -5 }, { if: { voie: "comedien" }, v: 5 }, { if: { voie: "rebouteux" }, v: 5 }] },
          win: { fx: { set: { "monde:a5:doyen": "avec" }, ep: ["perso", 1500] }, to: "A5v_doyen_ok" }, lose: { fx: { set: { "monde:a5:doyen": "contre" } }, to: "A5v_doyen_ko" } },
        { label: "Reprendre le rôle sans rien demander : on ne s'appuie pas sur un homme qui hésite", fx: { set: { "monde:a5:doyen": "contre" } }, to: "A5v_doyen_ko" },
      ] },

    A5v_doyen_averti: { act: "V", title: "Onze grains", place: "ville_haute", ambiance: "temple",
      text: [
        "Tu le lui dis. Tu lui dis la nuit, l'auberge, la lime, et que la vraie est dans un chiffon noir, depuis la Toussaint.",
        "Il ne bouge pas. Puis il rouvre le coffret, prend la clef, et va à une petite balance d'apothicaire, qu'il a sur sa cheminée entre deux flambeaux. Il pèse. Il ajoute un grain, deux, de ces poids minuscules que l'on manie avec une pince.",
        "« Onze grains, dit-il. Il manque onze grains. » Il repose la clef sur son coussin, très doucement. « Je pèse tout. Les reliques, les hosties, mes mots. Je n'ai pas pesé celle-ci : je l'avais prise moi-même dans la main du Gisant, et l'on ne doute pas de ce qu'on a pris soi-même. Voilà une faiblesse que je ne me connaissais pas. Je la note. »",
        "Il se tourne vers toi. Il est plus pâle encore, si c'est possible, et il sourit.",
        "« Vous veniez de m'épargner le ridicule le plus complet de ma vie. Agenouillé devant trois serrures, mes deux collègues derrière moi, et une clef qui tourne dans le vide. Le Syndic en aurait eu pour sept ans de bonne humeur. » Il s'incline. « Vous n'y étiez pas forcé{e}. Vous aviez même intérêt à vous taire. Je ne comprends pas très bien pourquoi vous l'avez dit, et cela me plaît. »",
        "Il signe le rôle.",
        "« Je vous dois une politesse. Je la paierai ce soir, à ma façon. La Veille des Clefs finit aux trois quarts ; mais c'est l'évêque qui donne le signal de se lever, par une oraison. J'en sais une très longue. Elle est de saint Brumaire, mon patron, que personne n'a lu. Mes collègues n'oseront pas m'interrompre : on n'interrompt pas un évêque à genoux. Et quand nous monterons enfin, mes Suisses resteront à la chapelle. J'aurai besoin d'eux pour prier. »",
      ],
      choices: [{ back: "A5v_ville" }] },

    A5v_doyen_ok: { act: "V", title: "Devant elle", place: "ville_haute", ambiance: "temple",
      text: [
        "Il t'écoute, la tête un peu penchée, comme il écoute les agonisants.",
        { if: { has: "monde:a5:charte" }, text: "Tu lui mets sous les yeux deux lignes grattées, relevées au crayon. *Si le Juge venait à se taire… la cité fera plaider les Sept Causes devant elle-même.* Il lit. Il relit. « L'article dernier, murmure-t-il. Je le cherche depuis vingt ans dans mes propres archives. Il était dans les vôtres. Aubry voulait donc ce que je veux ; seulement il le voulait au grand jour. »" },
        "« *Que ce soit devant elle.* » Il répète le mot de la Recluse. « Vous me demandez de laisser faire une chose que j'ignore, par des gens que je devrais faire pendre, la nuit la plus sainte de mon ministère. »",
        "Il va à la fenêtre. Il regarde son petit cyprès.",
        "« J'ai passé ma vie à mettre de l'ordre dans des morts. C'est facile : ils ne bougent plus. Je m'aperçois, depuis quatre lignes, que je ne sais pas ce qu'on fait d'une vivante qui vous tient tête. » Il se retourne. « Soit. Je ne vous aiderai pas : je ne sais pas à quoi. Mais je ne vous barrerai rien. Mes Suisses resteront à la chapelle ; j'aurai besoin d'eux pour prier. Et s'il sort de cette Tour, cette nuit, autre chose que ce que mes collègues y ont mis, je serai là pour le recueillir. J'ai l'habitude des dernières paroles. Il se peut que celles-ci soient des premières. »",
        "Il signe le rôle, et te le rend à deux mains, comme on rend un enfant à sa mère.",
      ],
      choices: [{ back: "A5v_ville" }] },

    A5v_doyen_ko: { act: "V", title: "Trois chambres blanches", place: "ville_haute", ambiance: "temple",
      text: [
        "Il signe le rôle. Il te le rend, avec une politesse qui n'a pas de fond.",
        "« Allez, mon enfant. Lisez bien. Je vous écouterai avec le plus grand intérêt. » Il reprend son arrosoir d'argent. « Vous comprendrez que je garde mes préférences. Un Bronze qui se tait dans une chambre scellée, c'est une fin décente. Tout le reste est du bruit, et j'ai horreur du bruit. »",
        "À la porte, il ajoute, sans se retourner :",
        "« Mes Suisses monteront derrière nous, ce soir. Ce sont des gens tranquilles. J'ai trois chambres blanches, ici, et trois cercueils de plomb, à Ossevaux, qui attendent sous une niche vide : je suis un homme qui prépare. Tâchez de ne pas vous trouver entre eux et la porte. Je serais désolé de vous recevoir. »",
        "Dans la galerie, les deux hallebardes noires te reconduisent jusqu'à la rue, à dix pas, du même pas que toi.",
      ],
      choices: [{ back: "A5v_ville" }] },
  },

  extras: {
    clues: {
      s5_causes: { rev: "S", text: "Le rôle des Sept Causes : les maîtrises, le denier des morts, les jetons de Ferrières, l'eau de la citerne, la pension des débiteurs, le denier de l'hospice. La septième, d'une encre plus fraîche : « contre trois de la bande dite du Rossignol, contumaces »." },
      j5_lentement: { rev: "J", text: "Baruch Lecoq, la Voix de la dernière Septaine : il bâclait la quatrième Cause quand, de l'autre côté du chêne, quelqu'un a dit « Plus lentement ». On l'a mis à la retraite. « C'est sur ta lecture qu'elle juge. Elle ne voit pas les gens. »" },
      j5_charte: { rev: "J", text: "L'article dernier de la fondation, coupé et gratté : « Si le Juge venait à se taire, la cité fera plaider les Sept Causes devant elle-même, assemblée, et elle tranchera à voix levées. J'ai bâti ce Juge pour le temps qu'elle apprenne. A. C. »" },
      s5_offre: { rev: "S", text: "Le prix du Syndic : trente mille écus, une quittance générale, la Douairière dehors à l'aube, la septième Cause replantée (« innocents »). En échange : être devant la porte aux trois quarts, les trois clefs à la main, et s'écarter." },
      c5_quatre: { rev: "C", text: "Ce qu'elle a répondu au Doyen, qui lui offrait un jardin à Ossevaux : « Si je dois me taire, que ce soit devant elle. Gardez votre jardin : j'ai passé l'âge des cloîtres choisis par d'autres. »" },
    },
    items: {
      lettre_change: { name: "Lettre de change du Syndic", kind: "divers", keep: true, price: 0, desc: "Trente mille écus sur la caisse des Maîtres du Fer, à vue. Le nom du porteur est en blanc." },
    },
  },
};
