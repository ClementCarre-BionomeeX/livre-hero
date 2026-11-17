// Le Douzième Coup · chapter 11, the one who passes, first half (act III, 20 June 541, the eve of the Grand Midi ;
// the Jurés sit at none, behind closed doors). The morning at the Palace. From the court of the Guild across the
// esplanade (`K11j_esplanade`), in by the great gate (`j:entre_hardouin` | `j:entre_horloger`) or by the door of the
// Simples (`j:entre_simples`, password « le néant »). Hub `K11j_palais`, the garden of the Simples: maître Anthelme
// and the bark (`monde:aelis_ecorce`, `j:anthelme_allie`, `j:voie_anthelme`), captain Hardouin (`j:hardouin_croit`,
// `monde:hardouin_tour` | `j:hardouin_porte`, `j:voie_hardouin` ; `j:hardouin_doute`), the gallery of the Hours
// (`j:vu_dessin`, the duke: `j:oderic_remarque` | `j:oderic_entendu`), the fencing hall and the chevalier de
// Brézolles (duel `d_brezolles`, `j:brezolles_battu`, `j:voie_brezolles`), the pantry (shop `iii_office`,
// `j:sait_conges`), the chapel and canon Poupart (`j:sait_ceremonie`), the library and the Custom of Aurime
// (`j:sait_coutume`), the wing of the child (closed until the afternoon). Noon at the dial of the Palace (M11).
var P = {};
var JOSQ = { present: "josquin" };
var PREUVE = { any: [{ has: "j:preuve_oderic" }, { item: "memoire_graveur" }] };
var DEDANS = { any: [{ has: "j:entre_simples" }, { has: "j:entre_hardouin" }, { has: "j:entre_horloger" }] };

Object.assign(P, {
  K11j_route: { act: "III", title: "Prime, la veille", place: "guilde", ambiance: "chateau", takes: "morning",
    text: [
      "La cloche maigre sonne prime. Les apprentis des sept ateliers traversent la cour à la file, tête nue, entre deux hommes de cuivre, et montent au dortoir. On tire un verrou sur eux. Les neuf de la porte au papillon passent les derniers, sans hâte. Ceux-là, on les laisse : ils rentrent dans leur atelier et s'enferment eux-mêmes, ce qui est plus sûr.",
      "Le portier te l'a dit en bâillant : séance à none, portes closes, et d'ici là personne ne lime. La maison a ce matin le silence d'une salle où l'on attend le juge.",
      { after: "j:placard_vote", text: "Derrière le grand portail, qu'on a barré, il y a un bruit sans cri : le piétinement de trois cents personnes qui ne savent pas pourquoi elles sont venues et qui ne s'en vont pas : des porteurs d'eau, des laveuses, deux régleurs en gris qui font semblant de passer. Elles regardent la porte derrière laquelle on vote leur heure. Le portier a mis une seconde barre, et il est allé chercher son neveu." },
      { after: "j:tiphaine_guilde", text: "Un lecteur en robe noire, trop longue, le capuchon sur les sourcils, traverse vers le logis du nord, un pupitre pliant sous le bras. Il marche comme on marche dans un chœur. En passant, il lève deux doigts de son pupitre, pour toi." },
      { with: "josquin", text: "Josquin a son tablier du dimanche et les yeux d'un garçon qui n'a pas dormi. « Il m'a mis dehors. Mon maître. Il a dit : *tu me gênes, tu as l'air d'un homme qu'on va pendre, cela donne des idées aux Jurés. Va-t'en avec ton ami{e} jusqu'à none.* » Il remonte ses besicles. « Je crois qu'il veut que je sois ailleurs si l'on vient le prendre. Il ne le dirait jamais. »" },
      "De l'autre côté de l'esplanade, derrière un mur à girouettes, il y a une femme de trente ans pour qui tout ceci se vote. On lui a promis une chambre, et un an. Personne ne lui a parlé de soixante, ni de quarante mille. Tu as jusqu'à none.",
    ],
    choices: [{ label: "Prendre la poterne, et traverser le sable", to: "K11j_esplanade", big: true }] },

  K11j_esplanade: { act: "III", title: "L'esplanade", backName: "l'esplanade", place: "palais", ambiance: "ville", hub: true,
    text: [
      { first: true, text: "C'est une place de sable battu, large comme un champ de foire, entre trois puissances. À l'est, la Tour, toute droite, qui fait à cette heure une ombre longue de cent pas. Au nord, la Guilde, son portail, son balancier de bronze. Au midi, le Palais : une grille dorée entre deux pavillons, une cour, des toits d'ardoise où tournent vingt girouettes aux armes d'Aurime." },
      { first: true, text: "Des charpentiers montent, au pied de la Tour, une estrade à degrés, pour demain. On cloue. Un homme en surplis mesure avec une corde la place du dais." },
      { first: true, text: "Sur la gauche du Palais, le mur s'abaisse et laisse passer des têtes d'arbres : les jardins. Une petite porte verte y est percée, entre deux pieds de sureau." },
      { again: true, text: "L'esplanade, l'estrade qu'on cloue, la grille dorée. Sur la gauche, la petite porte verte." },
    ],
    choices: [
      { label: "La fontaine, où l'on s'attroupe", hide: { seen: "K11j_fontaine" }, to: "K11j_fontaine" },
      { label: "La grille d'honneur", hide: DEDANS, to: "K11j_grille" },
      { label: "La petite porte verte, du côté des jardins", hide: DEDANS, to: "K11j_simples" },
      { label: "Le Palais, par où tu y es entré{e}", hide: { not: DEDANS }, to: "K11j_palais", big: true },
    ] },

  K11j_fontaine: { act: "III", title: "Ce qu'on lit en tirant son eau", place: "palais", ambiance: "ville",
    text: [
      "C'est la plus belle fontaine de la ville : quatre dauphins, une vasque de marbre, et une horloge à carillon, que les régleurs viennent voir deux fois par jour, comme on visite une parente riche.",
      { after: "j:placard_vote", text: "Le quart de feuille y est encore, à hauteur d'œil de laquais. Six porteurs d'eau le lisent, ou se le font lire par le septième. *Vous êtes quarante mille, et ils sont sept.* L'un d'eux recompte sur ses doigts. « Ça fait combien par tête, sept pour quarante mille ? » On lui répond que ça fait des maîtres. Ils chargent leurs seaux, et ils s'en vont du côté du portail des horlogers, où ils n'ont rien à faire." },
      { after: "j:placard_cire", text: "Le quart de feuille y est encore. On rit. Une marchande d'herbes le lit tout haut, avec les gestes, en se bouchant les oreilles de ses deux pouces, et les laquais du Palais se tiennent les côtes. « De la cire ! Et pourquoi pas du beurre ? » Une vieille, derrière, ne rit pas. Elle relit, en remuant les lèvres. Elle compte quelque chose dans sa main, un liard, deux, et elle part vers la ville basse d'un pas de femme qui a une course." },
      { after: "j:placard_cire", text: "*Il suffit d'une grand-mère par maison*, a dit Josquin. En voilà une." },
      { after: "j:placard_duc", text: "Le quart de feuille n'y est plus. Il en reste les quatre coins, collés à la mie, et le blanc du milieu arraché. Deux hommes à rubans verts se tiennent devant la vasque, les pouces à la ceinture, et regardent les gens tirer leur eau. Personne ne parle. Mais tout le monde regarde les quatre coins, et il y a dans ce silence de fontaine une phrase que quarante personnes ont lue avant l'aube et qu'elles se répètent sans remuer la bouche." },
      { if: { not: { any: [{ has: "j:placard_vote" }, { has: "j:placard_cire" }, { has: "j:placard_duc" }] } }, text: "On y tire de l'eau, on y parle de demain. Une marchande d'herbes vend des couronnes de sauge pour le Grand Midi. Le régleur de la rue des Gantiers a posé son échelle contre le fût, et il pousse l'aiguille d'un demi-pouce, avec la figure d'un homme qui fait une chose qu'on lui a commandée." },
      { after: "j:regleur_gagne", text: "Trottier, sur son échelle, t'a vu{e}. Il ne te salue pas. Il se frotte les yeux, longuement, de l'air d'un homme qui a la vue basse." },
    ],
    choices: [{ back: "K11j_esplanade" }] },

  // --- Getting in ---
  K11j_grille: { act: "III", title: "La grille d'honneur", backName: "la grille du Palais", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "La grille est dorée à la feuille, et l'on en redore un barreau par an, de sorte qu'elle n'est jamais d'une seule couleur. Deux suisses à hallebarde. Derrière eux, dans la cour, six archers en casaque bleue, et un sergent assis à une table, qui écrit le nom de qui entre." },
      { first: true, text: "On n'entre guère. Depuis le printemps, la Reine ne tient plus sa cour ; elle a une fille à veiller. Ceux qui passent ont un nom, un office ou une livrée. Tu as une veste." },
      { again: true, text: "La grille, les deux suisses, le sergent à sa table." },
    ],
    choices: [
      { label: "« Un pli pour le capitaine Hardouin. En main propre. » Montrer le coin d'un cachet", hide: { not: PREUVE }, fx: { flag: "j:entre_hardouin" }, to: "K11j_hardouin" },
      { label: "« Atelier de M. le sous-maître. Je viens pour l'horloge de la Reine. » Montrer la clef de bronze", hide: { not: { item: "clef_tour" } }, fx: { flag: "j:entre_horloger" }, to: "K11j_horloger" },
      { label: "Dire que tu apportes un remède pour Madame Aélis",
        test: { dom: "social", diff: 15, label: "Être la dix mille et unième fiole", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "j:anthelme_connait" }, v: 15 }] },
        win: { fx: { flag: "j:entre_hardouin" }, to: "K11j_hardouin" },
        lose: { to: "K11j_grille_rate" } },
      { back: "K11j_esplanade" },
    ] },

  K11j_grille_rate: { act: "III", title: "Suivant", place: "palais", ambiance: "chateau",
    text: [
      "Le sergent ne lève pas la plume. « Les remèdes, c'est sous l'auvent de la Foire, de prime à tierce, devant maître Anthelme. Il en a flairé quarante par jour depuis la Saint-Médard. On dit qu'il a perdu l'odorat, et qu'il continue par conscience. »",
      "Le suisse de gauche abaisse sa hallebarde d'un pied. C'est un geste poli. Il veut dire que le suivant est derrière toi, et qu'il n'y a personne derrière toi.",
      "Tu recules sur le sable. Il reste le mur des jardins, et sa porte verte.",
    ],
    choices: [{ back: "K11j_esplanade" }] },

  K11j_horloger: { act: "III", title: "L'horloge de la Reine", place: "palais", ambiance: "chateau",
    text: [
      "Le sergent regarde la clef, le balancier dans l'anneau. Il n'écrit pas ton nom : il écrit *Guilde*, et l'heure. « Encore un. Il en vient deux par jour, depuis un mois, pour une horloge qui marche. » Il te fait signe de passer. « Vous connaissez le chemin. Par les jardins, l'aile de l'enfant, le petit escalier. »",
      "Tu ne connais pas le chemin. Tu le prends comme si tu l'avais fait cent fois, et tu apprends, en marchant, une chose que personne ne t'avait dite : les gens du sous-maître entrent ici comme chez eux. Deux par jour, depuis un mois. On ne règle pas une pendule soixante fois.",
      "Dans la cour, un archer te suit des yeux jusqu'au coin. On laisse passer la clef de bronze. On ne l'aime pas.",
    ],
    choices: [{ label: "Prendre par les jardins", to: "K11j_palais", big: true }] },

  K11j_simples: { act: "III", title: "La porte des Simples", backName: "la porte des Simples", place: "palais", ambiance: "champs",
    text: [
      { first: true, text: "Elle est basse, peinte en vert, avec un heurtoir en forme de main. Un sureau la cache à moitié. Par-dessus le mur vient une odeur qui n'est pas de cette ville : la menthe, l'absinthe, la terre arrosée." },
      { first: true, text: "Tu frappes. Un guichet s'ouvre, à la hauteur de ta poitrine, sur un œil rond et un bonnet de paille. « C'est pour quoi ? » La voix est d'une vieille femme qui parle à ses plantes plus souvent qu'aux gens." },
      { again: true, text: "La porte verte, le guichet, l'œil sous le bonnet de paille. « C'est pour quoi ? »" },
    ],
    choices: [
      { label: "« Pour maître Anthelme, à lui seul. Je viens pour le néant. »", hide: { not: { has: "j:anthelme_connait" } }, fx: { flag: "j:entre_simples" }, to: "K11j_simples_fin" },
      { label: "Lui nommer, par leur odeur, les trois herbes qu'elle a dans son tablier",
        test: { dom: "nature", diff: 10, label: "Sentir comme une fille de ferme", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: ["j:entre_simples", "j:sauge_amie"] }, to: "K11j_simples_fin" },
        lose: { to: "K11j_simples_mur" } },
      { label: "Longer le mur jusqu'au sureau, et grimper", fx: { flag: "j:entre_simples", pv: -1 }, to: "K11j_simples_mur" },
      { back: "K11j_esplanade" },
    ] },

  K11j_simples_mur: { act: "III", title: "Par-dessus le sureau", place: "palais", ambiance: "champs", fx: { flag: "j:entre_simples" },
    text: [
      { outcome: "lose", text: "« De la menthe », dis-tu. C'était de la mélisse. Le guichet se referme, sans colère, comme on ferme un livre où il y a une faute." },
      "Le sureau a de bonnes branches. Le mur a du lierre, et sous le lierre un chaperon de tuiles qui s'effrite. Tu passes une jambe, puis l'autre, et tu te laisses tomber de l'autre côté, dans une planche de rhubarbe.",
      "Quand tu te redresses, il y a devant toi une petite vieille en bonnet de paille, un plantoir à la main, qui te regarde comme on regarde une limace. « Trois pieds de rhubarbe. Elle était pour les purgations de la Cour, qui en a besoin. » Elle soupire. « On entre par la porte, quand on a quelque chose à dire. Quand on n'a rien à dire, on passe par le mur. Vous êtes donc ici pour voler ou pour voir maître Anthelme : il n'y a que cela dans ce jardin. Je ne vous vois pas de sac. »",
      "Elle montre, du plantoir, un pavillon de brique au fond d'une allée. « Il est là. Marchez dans les allées. »",
    ],
    choices: [{ label: "Marcher dans les allées", to: "K11j_palais", big: true }] },

  K11j_simples_fin: { act: "III", title: "La mère Sauge", place: "palais", ambiance: "champs",
    text: [
      { after: "j:sauge_amie", text: "« Mélisse, rue, et la troisième... de la petite centaurée. » L'œil rond s'arrondit encore. Le verrou tourne. « Entrez. Il y a des docteurs, ici, qui ne feraient pas la différence entre la rue et le persil, et qui ont une robe. »" },
      { before: "j:sauge_amie", text: "L'œil te considère. « Le néant. » Elle répète le mot avec respect, comme le nom d'un saint. « Il en a rempli trois cahiers. Entrez. Il a dit : *s'il vient quelqu'un pour le néant, à n'importe quelle heure, même la nuit.* Il ne dit jamais *même la nuit.* »" },
      "C'est une petite vieille en bonnet de paille, sèche et brune comme une racine. Tout le monde l'appelle la mère Sauge, et elle a oublié son autre nom. Elle referme derrière toi, à deux tours.",
      "Le jardin des Simples est un carré de planches bordées de buis, où chaque plante a son ardoise. Au fond d'une allée, un pavillon de brique, à cheminée, d'où sort une fumée qui sent l'amer. « Il est là. Il n'a pas dormi. Il ne dort plus depuis qu'on lui a donné une date. »",
    ],
    choices: [{ label: "Suivre l'allée", to: "K11j_palais", big: true }] },

  // --- The hub ---
  K11j_palais: { act: "III", title: "Le jardin des Simples", backName: "le jardin des Simples", place: "palais", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "Du jardin, on tient tout le Palais par le dos. Il a l'air moins d'un château que d'une grande maison où quelqu'un est malade : des fenêtres fermées en plein jour, des gens qui marchent sur le gravier du bord des semelles, un jet d'eau qu'on a coupé parce qu'il faisait du bruit." },
      { first: true, text: "À droite, une galerie vitrée, où passent des habits de couleur. À gauche, une aile basse, à part, dont tous les volets sont clos, et derrière les volets, à dix heures du matin, on voit de la lumière : celle-là brûle ses cierges le jour." },
      { first: true, text: "Au milieu des planches, sur un socle porté par trois tortues de bronze, un cadran solaire à plat, large comme une table. Les jardiniers y posent leurs sécateurs." },
      { again: true, text: "Les planches de buis, le pavillon de brique, la galerie vitrée. L'aile aux volets clos, où il fait jour en dedans." },
      { with: "josquin", first: true, text: "Josquin marche au milieu de l'allée, les coudes au corps. « Je ne suis jamais entré ici. Mon maître y vient le premier de l'an, pour l'hommage, et il en revient d'une humeur de chien. Il dit que c'est une maison où l'on regarde l'heure pour savoir si l'on peut s'en aller. »" },
    ],
    choices: [
      { label: "Le pavillon de brique, d'où sort la fumée", to: "K11j_anthelme" },
      { label: "La salle des gardes, sous la voûte", to: "K11j_hardouin" },
      { label: "La galerie vitrée", to: "K11j_galerie" },
      { label: "Un bruit de fer, derrière l'orangerie", to: "K11j_armes" },
      { label: "L'office, par l'escalier de service", to: "K11j_office" },
      { label: "La chapelle", hide: { seen: "K11j_ceremonie" }, to: "K11j_chapelle" },
      { label: "Une porte basse : *Librairie de la Reine*", hide: { has: "j:sait_coutume" }, to: "K11j_librairie" },
      { label: "L'aile aux volets clos", hide: { seen: "M11" }, to: "K11j_aile" },
      { label: "L'aile aux volets clos : l'antichambre", hide: { not: { seen: "M11" } }, to: "K11j_antichambre", big: true },
      { label: "T'asseoir près du cadran aux tortues, et attendre midi", hide: { seen: "M11" }, to: "K11j_midi", big: true },
      { label: "L'esplanade, par où tu es venu{e}", to: "K11j_esplanade" },
    ] },

  // --- Maître Anthelme ---
  K11j_anthelme: { act: "III", title: "Le pavillon du néant", backName: "le pavillon de maître Anthelme", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "C'est une seule pièce, carrelée, avec un fourneau, des cornues, des bocaux étiquetés jusqu'au plafond. Sur une table, trois cahiers, pleins. Sur un lit de camp, dans un coin, une couverture pliée, qui n'a pas servi." },
      { first: true, text: "Maître Anthelme est debout devant le fourneau. Il surveille une petite casserole où rien ne bout. Il a les yeux plus rouges qu'à la Foire, et la figure d'un homme qui a fait le compte de ce qu'il sait et l'a trouvé court." },
      { first: true, after: "j:anthelme_connait", text: "Il se retourne. Il te reconnaît, et quelque chose, dans son dos, se redresse. « Vous. » Il regarde tes mains avant ta figure, comme font ici les gens de métier." },
      { first: true, before: "j:anthelme_connait", text: "Il se retourne. « La mère Sauge vous a laissé{e} passer, ou vous avez sauté le mur. Dans les deux cas, vous avez deux phrases. Je suis le premier médecin de la Reine, et il me reste un jour. »" },
      { again: true, text: "Maître Anthelme, son fourneau, ses trois cahiers pleins du même mot." },
      { after: "monde:aelis_ecorce", text: "La casserole est sur le feu, couverte. Il en sort une odeur amère à faire pleurer, et il la respire comme d'autres respirent des roses." },
    ],
    choices: [
      { label: "Poser sur la table le cornet d'écorce rousse", hide: { any: [{ not: { item: "ecorce_fievrier" } }, { has: "monde:aelis_ecorce" }] }, fx: { flag: ["monde:aelis_ecorce", "j:anthelme_connait", "j:anthelme_allie", "j:voie_anthelme"], drop: "ecorce_fievrier", ep: ["histoire", 1000] }, to: "K11j_anthelme_ecorce", big: true },
      { label: "« Le fièvrier. Un arbre des îles. Son écorce, bouillie, trois semaines. »", hide: { any: [{ has: "j:anthelme_connait" }, { not: { any: [{ has: "monde:su:remede" }, { has: "monde:remede_dit" }] } }] }, fx: { flag: "j:anthelme_connait" }, to: "K11j_anthelme_compte" },
      { label: "« Que deviendra-t-elle, demain, dans cette chambre ? »", hide: { seen: "K11j_anthelme_compte" }, to: "K11j_anthelme_compte" },
      { label: "« Menez-moi à la Reine. »", hide: { any: [{ has: "j:voie_anthelme" }, { not: { seen: "K11j_anthelme_compte" } }] }, fx: { flag: ["j:voie_anthelme", "j:anthelme_allie"] }, to: "K11j_anthelme_voie" },
      { back: "K11j_palais" },
    ] },

  K11j_anthelme_ecorce: { act: "III", title: "Vingt et un jours", place: "palais", ambiance: "chateau",
    text: [
      "Il ne dit rien. Il prend le cornet, le déplie, et verse les copeaux sur le plateau d'une balance à trébuchet. Ses mains ne tremblent pas : il les en empêche. Il pèse. Il écrit le poids. Il divise, à la plume, dans la marge.",
      "« Deux prises par jour. Vingt et un jours. » Il compte les copeaux par petits tas, du bout d'une spatule. « Il y a de quoi. Tout juste, sans en perdre un grain. Je ferai la décoction moi-même. Je goûterai chaque bol avant elle. » Il lève les yeux. « Vous l'aviez à la Foire. Vous l'avez gardée trois jours sur vous, dans une ville où l'on fouille aux portes, pour me la donner ici, à moi seul. Je n'ai pas d'ami : je n'ai pas eu le temps. Mais je sais ce qu'on doit. »",
      "Il met de l'eau dans la casserole. Il y jette le premier tas. Puis il s'assoit, pour la première fois, sur le bord de son lit de camp, et il te dit le reste, parce qu'il est honnête et que c'est sa maladie.",
      "« Elle a peut-être quinze jours. Je dis *peut-être* : j'en ai vu tenir trois semaines, j'en ai vu partir en six. Il en faut vingt et un. Je vais donc courir contre cela, avec une tisane, et je peux perdre. » Il regarde la casserole. « Je le dirai à la Reine tantôt. Je lui dirai : madame, voici un remède, et voici la course. De l'autre côté, on lui offre une chambre où l'on ne perd jamais, puisqu'on n'y court pas. Un homme honnête n'a rien de mieux à mettre en face, et c'est pourquoi les autres gagnent. »",
      "L'eau frémit. L'odeur monte. « Venez à l'antichambre après dîner. Je vous ferai entrer. Elle voudra voir la main qui a apporté cela : c'est une femme qui regarde les mains, depuis qu'elle a appris ce que valent les figures. »",
    ],
    choices: [{ back: "K11j_anthelme" }] },

  K11j_anthelme_compte: { act: "III", title: "Un pouls où l'heure ne passe pas", place: "palais", ambiance: "chateau",
    text: [
      { after: "j:anthelme_connait", before: "monde:aelis_ecorce", text: "« Le fièvrier. » Il l'a écrit, à la suite de trois cahiers de *néant*. « Sœur Radegonde ne met pas à la craie le nom d'une sottise. Je vous crois. Et il me faut un an de mer pour en avoir un copeau. » Il pose la plume. « C'est justement l'année qu'on offre à la Reine. Vous voyez comme tout s'arrange. »" },
      "Il s'adosse au fourneau, les bras croisés.",
      "« On m'a expliqué la chose. On m'a même fait l'honneur d'un dessin. Une chambre, en haut de la Tour. La mère et l'enfant y entrent à onze heures. À midi, quelqu'un, en bas, fait un geste sur une machine que je n'ai pas le droit de voir. Dans la chambre, l'heure s'arrête. Dehors, elle continue. Un an plus tard, le navire des îles est rentré, quelqu'un refait le geste à l'envers, et l'on trouve l'enfant comme on l'a laissée. »",
      "« Je suis médecin. J'ai demandé ce que devient un pouls où l'heure ne passe pas. On m'a répondu que c'était de la mécanique. J'ai demandé si l'on avait essayé sur un chien. On m'a répondu qu'on avait essayé sur une ville, en 481, trois psaumes, et que personne n'en était mort. » Il a un rire sec. « J'ai soigné une femme, il y a vingt ans, une Lunel, qui avait soixante ans et qui pleurait encore un enfant bleu. Personne n'en était mort. »",
      { after: "j:lunel_481", text: "Tu as tenu hier la main de son mari, à une fenêtre. Tu ne le dis pas. Il est des choses qu'on vérifie mieux en se taisant." },
      "« Et j'ai demandé qui tiendrait la porte, pendant un an. Qui gouvernerait. On m'a dit que cela ne regardait pas la médecine. » Il décroise les bras. « Voilà ce que je sais. Cela fait peu. C'est assez pour dire non, et l'on ne me demande pas mon avis. »",
    ],
    choices: [{ back: "K11j_anthelme" }] },

  K11j_anthelme_voie: { act: "III", title: "Après dîner", place: "palais", ambiance: "chateau",
    text: [
      "Il te regarde un long moment. « À la Reine. » Il a l'air de peser un remède qu'il ne connaît pas.",
      "« Elle ne reçoit plus. Elle reçoit le sous-maître, à toute heure, et Monseigneur son beau-frère, une fois par jour, parce qu'il insiste avec beaucoup de grâce. Moi, elle me reçoit quand je frappe : c'est le privilège des gens qui apportent les mauvaises nouvelles. » Il essuie ses mains à son tablier. « Je frapperai tantôt. Vous serez derrière moi. Je dirai que vous êtes quelqu'un qui a vu le mal ailleurs. Ce sera vrai, je pense, d'une façon que je ne comprends pas. »",
      "« Ne lui mentez pas. Elle a été entourée de gens qui lui disaient ce qu'elle voulait, et elle a fini par croire le seul qui lui promettait tout. Si vous avez une chose dure à dire, dites-la dure. C'est le seul son qu'elle n'ait pas entendu depuis Pâques. »",
    ],
    choices: [{ back: "K11j_anthelme" }] },

  // --- Captain Hardouin ---
  K11j_hardouin: { act: "III", title: "Le capitaine des archers", backName: "la salle des gardes", place: "palais", ambiance: "chateau", fx: { meet: "hardouin" },
    text: [
      { first: true, text: "La salle des gardes est sous la voûte d'entrée : des râteliers, des bancs, une table de chêne où l'on a gravé des noms depuis trois règnes. Vingt archers y fourbissent pour demain. Cela sent le tripoli et le cuir." },
      { first: true, text: "Le capitaine Hardouin est debout près de la fenêtre, d'où l'on voit la grille. Il a cinquante-cinq ans, le poil gris, des épaules de portefaix sous une casaque bleue, et il regarde, en te parlant, tes mains, puis la porte, puis de nouveau tes mains. C'est un homme qui a gardé deux rois et une veuve, et qui a appris que le danger entre rarement par où on le regarde." },
      { first: true, text: "« On me dit que vous avez quelque chose pour moi. Je vous écoute debout : assis, je m'endors, à mon âge, et je n'ai pas le temps. »" },
      { again: true, before: "j:hardouin_croit", text: "Le capitaine, à sa fenêtre. « Vous revoilà. Vous avez trouvé quelque chose qui se tienne dans la main ? »" },
      { again: true, after: "j:hardouin_croit", text: "Le capitaine, à sa fenêtre. Il te fait un signe de tête, court, comme à quelqu'un de la maison." },
    ],
    choices: [
      { label: "Poser devant lui ce que tu as rapporté du quai des Barges", hide: { any: [{ not: PREUVE }, { has: "j:hardouin_croit" }] }, fx: { flag: ["j:hardouin_croit", "j:voie_hardouin"], regard: { hardouin: "allie" }, ep: ["histoire", 800] }, to: "K11j_hardouin_preuve", big: true },
      { label: "Lui dire ce que tu sais du duc, sans papier", hide: { any: [PREUVE, { has: "j:hardouin_doute" }, { has: "j:hardouin_croit" }] }, fx: { flag: "j:hardouin_doute" }, to: "K11j_hardouin_mots" },
      { back: "K11j_palais" },
    ] },

  K11j_hardouin_mots: { act: "III", title: "Des mots", place: "palais", ambiance: "chateau",
    text: [
      "Tu dis les barges, cent vingt caisses par nuit, le mot FOIN. Tu dis la chasse de demain, la Louvière, les douze gentilshommes.",
      "Il t'écoute jusqu'au bout. Il n'a pas l'air surpris, ce qui est pire que s'il riait.",
      "« Des mots. » Il ne le dit pas méchamment. « J'en entends quarante par jour sur Monseigneur, depuis vingt ans. Qu'il est joueur, qu'il est endetté, qu'il a des bâtards dans trois provinces. Il chasse demain : il chasse tous les ans le jour du Grand Midi, il déteste les cloches, toute la Cour le sait. Il déménage : un duc a le droit de promener ses meubles. » Il se frotte la nuque. « Je ne l'aime pas. Je vous le dis parce que vous ne le répéterez pas, ou qu'on ne vous croira pas. Mais on ne met pas la main sur l'épaule du premier prince du sang avec un sentiment. »",
      "Il te raccompagne jusqu'à la porte, lui-même. « Apportez-moi une chose qui se tienne dans la main. Une écriture. Un cachet. Je sais lire, quoi qu'on en dise à la galerie. »",
    ],
    choices: [{ back: "K11j_palais" }] },

  K11j_hardouin_preuve: { act: "III", title: "Trente archers dans un escalier", place: "palais", ambiance: "chateau",
    text: [
      { after: "j:lettre_oderic", text: "Il lit la lettre à Gaucelin debout, à bout de bras, parce qu'il a la vue longue. Il la lit deux fois. *Durant l'empêchement de la Reine.* Son pouce s'arrête sous le mot." },
      { after: "j:epreuve_sceau", text: "Il prend l'empreinte de cire dans sa paume. Un homme à cheval, sous un dais. Il épelle la légende, lettre à lettre, en remuant sa moustache. *RÉGENT.* Il referme les doigts, doucement, comme sur une guêpe." },
      { if: { item: "memoire_graveur" }, text: "Il déplie le mémoire du graveur. Le papier a une couleur qu'il ne connaît à aucun papier, et une odeur de vieux tiroir. *Livré le 12 juin 541.* « Thomassin. Rue des Orfèvres. Il a gravé le sceau de mon régiment. » Il regarde la date, puis toi. Il ne demande pas d'où vient un reçu qui a l'air d'avoir cent ans. Il a décidé de ne pas le demander." },
      "Il ne jure pas. Il va à la porte, la ferme, et revient.",
      "« Un duc qui se fait graver un sceau de régent neuf jours avant que la Reine monte dans une chambre. » Il parle bas, pour la table. « Je ne peux pas l'arrêter. Il me faut un ordre d'elle, écrit, et elle ne l'écrira pas contre le frère de son mari sur la foi d'un capitaine : on lui a dit que j'étais un bon chien, et l'on n'écoute pas les chiens sur la politique. »",
      "« Mais je commande deux cents archers, et personne ne me dit où les mettre. » Il pose ses deux poings sur le chêne. « Dites-moi ce que vous savez du jour de demain, et je vous dirai ce que je peux tenir. »",
    ],
    choices: [
      { label: "« La Tour. L'escalier, de la porte basse à la Chambre haute. Qu'on n'y monte et qu'on n'y descende que devant vous. »", fx: { flag: "monde:hardouin_tour", ep: ["perso", 500] }, to: "K11j_hardouin_fin" },
      { label: "« La porte de la Reine, cette nuit. Qu'on ne l'emmène nulle part où elle n'ait pas dit d'aller. »", fx: { flag: "j:hardouin_porte", ep: ["perso", 500] }, to: "K11j_hardouin_fin" },
    ] },

  K11j_hardouin_fin: { act: "III", title: "Ce qu'on peut tenir", place: "palais", ambiance: "chateau",
    text: [
      { after: "monde:hardouin_tour", text: "« L'escalier. » Il hoche la tête. « Trois cent soixante marches, une porte en bas, une en haut. C'est un poste. Je sais tenir un poste. J'y serai moi-même, demain, de dix heures à ce qu'il faudra, avec trente hommes à moi, et que la Guilde le veuille ou non : la Tour est au Roi avant d'être aux horlogers. »" },
      { after: "monde:hardouin_tour", text: "« Je ne sais pas ce qu'on fait dans les caves. Je ne suis pas mécanicien. Mais ce qui passera par cet escalier me passera sous le nez. »" },
      { after: "j:hardouin_porte", text: "« Sa porte. » Il hoche la tête. « Je couche en travers depuis la mort du Roi. On en a ri. J'y coucherai cette nuit avec six hommes, et demain on ne la mènera à la Tour que si elle le dit elle-même, debout, devant moi. » Il a un demi-sourire. « Elle le dira. Elle y tient plus qu'à sa vie. Mais elle l'aura dit, et l'on saura que personne ne l'a portée. »" },
      "Il te rend tes papiers, tous, bien pliés. « Gardez cela. Sur moi, on le trouverait : je suis le premier qu'on fouille quand il se passe quelque chose. » Il te regarde. « Je vous mènerai à l'antichambre, tantôt, si vous voulez qu'elle voie ce que j'ai vu. Elle ne me croira pas. Elle vous croira peut-être : vous n'êtes à personne. »",
    ],
    choices: [{ back: "K11j_palais" }] },

  // --- The gallery ---
  K11j_galerie: { act: "III", title: "La galerie des Heures", backName: "la galerie des Heures", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "Elle est longue de soixante pas, vitrée sur le jardin, tendue de l'autre côté de douze tapisseries. Les rois d'Aurime y ont fait tisser les Heures : sainte Aure à son rouet, qui file la première ; saint Gnomon sur sa colonne, qui dit midi ; et les autres, chacune avec son outil. La Cour s'y promène de la Première à la Onzième et retour, parce qu'une Cour doit bien marcher quelque part." },
      { first: true, text: "Ils sont une quarantaine, ce matin, en habits de couleur, qui parlent bas. Une Cour sans souveraine ressemble à un orchestre qu'on a laissé seul : elle s'accorde indéfiniment." },
      { first: true, text: "La douzième tapisserie est au bout. Tu vas la voir, comme tout le monde y va une fois." },
      { again: true, text: "Les douze tentures, les habits de couleur, le murmure d'un orchestre qui s'accorde." },
    ],
    choices: [
      { label: "La douzième tenture", hide: { has: "j:vu_dessin" }, fx: { flag: "j:vu_dessin" }, to: "K11j_tenture" },
      { label: "Écouter ce qui se dit entre la Troisième et la Quatrième", hide: { seen: "K11j_galerie_dit" }, to: "K11j_galerie_dit" },
      { label: "Un grand limier blanc et feu, qui vient d'entrer", hide: { seen: "K11j_oderic" }, to: "K11j_oderic" },
      { back: "K11j_palais" },
    ] },

  K11j_tenture: { act: "III", title: "La Douzième", place: "palais", ambiance: "chateau",
    text: [
      "Elle a son cadre, pareil aux onze autres, de chêne doré. Dedans, il y a une toile grise, unie, tendue avec soin. Les tisserands des rois ont reçu la commande de douze pièces, et ils en ont livré douze : la dernière est ce qu'on fait de mieux pour représenter une chose qu'on ne nomme pas.",
      "La Cour ne vient pas jusqu'ici. Elle tourne à la Onzième.",
      "Au bas du cadre, à trois pieds du sol, quelqu'un a épinglé une feuille de papier. C'est un dessin, au charbon, d'une main d'enfant. Un rond. Dans le rond, deux aiguilles, qu'on a faites très longues et qui dépassent. Et pas un chiffre : le tour du cadran est blanc. En dessous, d'une écriture qui penche et qui grossit vers la fin de la ligne : *L'heure qu'il est quand je dors.*",
      "Personne ne l'a ôté. Les valets époussettent autour.",
    ],
    choices: [{ back: "K11j_galerie" }] },

  K11j_galerie_dit: { act: "III", title: "Entre la Troisième et la Quatrième", place: "palais", ambiance: "chateau",
    text: [
      "Tu regardes une tapisserie de très près, les mains au dos, ce qui est la manière d'écouter dans les galeries.",
      "« ... qu'elle ne reçoit plus que l'horloger. Un homme de trente ans, sans naissance, trouvé dans un panier. Il entre chez elle à toute heure. On dit qu'il ne s'assoit pas. C'est encore plus inquiétant. »",
      "« Monsieur de Hautgué a renvoyé sa vaisselle plate à Hautgué. Pour la faire redorer, a-t-il dit à ma femme. Six barges de vaisselle. Il mange donc dans de la faïence, ce cher duc, et de bon appétit. »",
      "« Demain, elle monte à la Tour avec la petite, pour le midi. Comme le feu Roi. On dit qu'elle y restera en prières. » Un silence. « En prières combien de temps ? » Un autre silence, plus long. « Mon cher, quand une reine prie, on ne chronomètre pas. On se demande seulement qui signera pendant ce temps-là. »",
      "Un petit homme rose, en habit gorge-de-pigeon, conclut : « Moi, je pars ce soir pour mes terres. J'ai toujours remarqué qu'on est très bien, sur ses terres, les jours où il se passe quelque chose. » On rit. Trois personnes, autour de lui, viennent d'avoir la même idée, et le cachent.",
    ],
    choices: [{ back: "K11j_galerie" }] },

  K11j_oderic: { act: "III", title: "Monseigneur prend congé", place: "palais", ambiance: "chateau",
    text: [
      "Le chien entre d'abord, et la galerie se range. Puis Monseigneur Oderic, en velours vert, sans un galon, le chapeau à la main. Il a le teint d'un homme qui vit à cheval et la démarche d'un homme chez lui. Il salue chacun par son nom. Il demande au petit homme rose des nouvelles de sa goutte. On le regarde passer comme on regarde le beau temps.",
      { after: "j:placard_duc", text: "Il tient, entre deux doigts, un quart de feuille. Il le montre à la ronde, en riant, d'un rire large, de bon compagnon. « Voyez ce qu'on a trouvé sur ma fontaine. Je paie douze mille écus le sommeil d'une reine. Douze mille ! On m'estime bien pauvre, ou l'on estime Sa Majesté bien bon marché. » La galerie rit avec lui, d'un seul souffle. Il plie la feuille, et la met dans sa manche. Il n'a pas ri des yeux. Et son limier, qui sait cela mieux que la Cour, s'est assis contre sa botte, les oreilles couchées." },
      "« Je viens faire mes adieux à ma sœur, dit-il, assez haut. Je chasse demain à la Louvière, dès l'aube. Vous savez que je ne supporte pas les cloches. J'ai offert à Sa Majesté de rester : elle a eu la bonté de me rendre ma liberté. » Il sourit. « Douze de ces messieurs me font l'amitié de venir. Nous penserons à vous à midi, le nez dans les fougères. »",
      "Il vient vers le bout de la galerie. Vers toi. Le chien te flaire les genoux.",
      { after: "j:engage_barges", text: "Tu as porté ses caisses, avant-hier, à la brune, sur son quai. Il y avait des flambeaux. Les grands ont cette mémoire des figures qui leur sert à ne jamais devoir deux fois." },
    ],
    choices: [
      { label: "Te tourner vers la Onzième tenture, et devenir un dos",
        test: { dom: "discretion", diff: 10, label: "Être de la tapisserie", help: [{ if: { voie: "leste" }, v: 10 }, { if: { not: { has: "j:engage_barges" } }, v: 15 }, { if: { has: "j:aubespin_brave" }, v: -10 }] },
        win: { fx: { flag: "j:oderic_entendu", ep: ["histoire", 500] }, to: "K11j_oderic_fin" },
        lose: { fx: { flag: "j:oderic_remarque" }, to: "K11j_oderic_fin" } },
      { label: "Le saluer, de la tête, et soutenir son regard", fx: { flag: "j:oderic_remarque" }, to: "K11j_oderic_fin" },
    ] },

  K11j_oderic_fin: { act: "III", title: "Le nez dans les fougères", place: "palais", ambiance: "chateau",
    text: [
      { after: "j:oderic_entendu", text: "Il passe. Le velours te frôle. Il s'arrête à trois pas, devant la toile grise, avec un baron long et jaune qu'il tient par le bras." },
      { after: "j:oderic_entendu", text: "« Gaucelin a vos quarante noms. Vous aurez le vôtre au premier banc. Soyez à Méridane le vingt-deux au matin, pas avant : je tiens à ce que vous ayez appris la nouvelle en route, avec chagrin. » Le baron dit quelque chose. Le duc rit doucement. « Un an, mon ami. Le temps que les gens s'habituent à mon écriture au bas des édits. Après un an, on ne réveille pas une reine : on lui explique. »" },
      { after: "j:oderic_entendu", text: "Il regarde la Douzième, le dessin au charbon, épinglé au bas. Il se penche. Il le lit. Il se redresse, et, pendant le temps d'un souffle, sa figure de beau temps n'a plus personne dedans. Puis il remet son sourire, comme on remet un gant, et il s'en va vers l'aile aux volets clos." },
      { after: "j:oderic_remarque", text: "Il s'arrête. Il te regarde avec bienveillance, la tête un peu de côté. « Je connais cette figure. » Il cherche, sans se presser. « Sur mon quai. Avant-hier, ou un autre soir. Tu portais. » Il a le tutoiement des princes, qui caresse et qui range. « Et te voici dans la galerie de la Reine. Tu as fait du chemin, pour un porteur. Ou bien tu ne portais pas pour les gages. »" },
      { after: "j:oderic_remarque", text: "Il n'appelle personne. Il te tapote l'épaule, deux fois, du plat de la main, comme on flatte un cheval qu'on va vendre. « Sois sage. » Et il passe. Au bout de la galerie, il dit un mot à un valet à ruban vert, sans se retourner. Le valet ne te regarde pas. Il a seulement, désormais, quelque chose à faire." },
    ],
    choices: [{ back: "K11j_galerie" }] },

  // --- The fencing hall ---
  K11j_armes: { act: "III", title: "Derrière l'orangerie", backName: "la salle d'armes", place: "palais", ambiance: "chateau", fx: { meet: "brezolles" }, duel: "d_brezolles", duelLabel: "Décrocher un fleuret, puisqu'il le demande",
    text: [
      { first: true, text: "La salle d'armes est une ancienne serre : un plancher de sapin, des vitres jusqu'au toit, et un soleil qui fait de chaque lame un éclair. Un prévôt à moustache compte des reprises pour quatre pages, qui s'ennuient." },
      { first: true, text: "Au milieu, seul, un jeune homme tire contre un mannequin de cuir. Il a vingt-cinq ans, une chemise de batiste ouverte, des cheveux noirs noués d'un ruban, et il est beau comme on l'est quand on le sait depuis l'enfance. Il touche le mannequin au cœur, six fois de suite, au même point, et il a pour ce mannequin un petit salut de pitié." },
      { first: true, text: "C'est le chevalier Aimery de Brézolles, premier écuyer de la Reine. Il a eu trois duels, il a deux dettes, et il a une idée, qui est qu'on le regarde. Elle lui tient lieu de toutes les autres, et il faut convenir qu'elle est souvent juste." },
      { first: true, text: "Il t'a vu{e} dans une vitre. Il se retourne, le fleuret sous le bras. « Enfin une figure que je ne connais pas. Ces enfants ont peur de moi, le prévôt a de la goutte, et le mannequin manque de conversation. Vous tirez ? Tout le monde tire. Décrochez-moi cela. »" },
      { again: true, before: "j:brezolles_battu", text: "Le chevalier, son mannequin, son soleil. « Vous revenez prendre votre leçon ? »" },
      { again: true, after: "j:brezolles_battu", text: "Le chevalier de Brézolles se frotte l'épaule en te voyant, et sourit, sans rancune : il est de ces vaniteux qui aiment mieux avoir été touchés par quelqu'un de bien que n'avoir jamais été touchés." },
    ],
    choices: [{ back: "K11j_palais" }] },

  K11j_brezolles_gagne: { act: "III", title: "Trois fois, au même point", place: "palais", ambiance: "chateau",
    text: [
      "La troisième touche est à l'épaule, franche, et le bouton plie. Les quatre pages ont cessé de s'ennuyer. Le prévôt a oublié sa goutte.",
      "Le chevalier regarde le point de craie, sur sa batiste. Il a l'air d'un homme à qui l'on vient d'apprendre une nouvelle surprenante sur un ami très cher. Puis il éclate de rire, d'un rire jeune, sans fond.",
      "« Mais c'est qu'on m'a touché ! Trois fois ! Avec une garde de laboureur, et un poignet que je n'ai vu à personne ! » Il te prend la main, la retourne, regarde tes cals. « Où avez-vous appris ? Ne dites rien. Vous me le direz en chemin, et je le répéterai comme si c'était de moi. »",
      "Il enfile son pourpoint. « J'ai une règle : celui qui me touche a droit à une chose. Je n'ai pas eu à l'appliquer depuis deux ans. Demandez. De l'argent, je n'en ai pas. Un cheval, il est en gage. Mais j'ai mes entrées partout où il y a une porte et une dame derrière. »",
      "Tu dis : l'antichambre de la Reine.",
      "Il ne rit plus. Il te regarde, et, pour la première fois, il n'y a personne qui le regarde, lui. « Ah. » Il boutonne son col. « Vous n'êtes pas venu{e} tirer. » Il réfléchit, ce qui ne lui arrive pas tous les jours et ne lui va pas mal. « Soit. J'ai dit une chose. Tantôt, après dîner. Madame de Sérigny me doit un sourire, et elle garde la porte. Vous entrerez comme mon prévôt. Tâchez seulement de ne pas la toucher à l'épaule, elle. »",
    ],
    choices: [{ back: "K11j_palais" }] },

  K11j_brezolles_perdu: { act: "III", title: "La leçon", place: "palais", ambiance: "chateau",
    text: [
      "Il te touche trois fois, au cœur, au même point, comme le mannequin. À la troisième, il salue.",
      "« Vous avez de l'œil et pas de jambes. C'est mieux que le contraire : les jambes s'achètent. » Il essuie son front avec un mouchoir à dentelle. « Vous attaquez comme on enfonce un coin. Dans une salle, on vous voit venir de la porte. Dans une rue, je ne dis pas : dans une rue, vous seriez très incommode. »",
      "Il te rend ton fleuret par la coquille. « Revenez. Je m'ennuie. Celui qui me touchera aura droit à une chose, c'est ma règle ; vous n'y êtes pas encore, mais vous m'avez fait rompre d'un pas, et cela ne m'était pas arrivé depuis le carême. »",
    ],
    choices: [{ back: "K11j_palais" }] },

  // --- The pantry ---
  K11j_office: { act: "III", title: "L'office", backName: "l'office du Palais", place: "palais", ambiance: "chateau", shop: "iii_office",
    text: [
      { first: true, text: "On y descend par un escalier qui sent le bouillon. C'est une salle voûtée, grande comme une église, avec trois cheminées, dont une seule a du feu. Des broches vides. Des chaudrons retournés. À une table qui en servirait cent, ils sont douze, qui épluchent des fèves." },
      { first: true, text: "Une cuisinière large, les bras rouges, règne sur ce désert. Elle vend, à qui descend, ce que la bouche de la Reine ne mange plus : c'est l'usage des offices, et c'est sa pension." },
      { again: true, text: "L'office, sa cheminée unique, ses douze éplucheurs. La cuisinière a toujours quelque chose sous un torchon." },
    ],
    choices: [
      { label: "Lui demander où sont passés les autres", hide: { has: "j:sait_conges" }, fx: { flag: "j:sait_conges", ep: ["histoire", 300] }, to: "K11j_office_dit" },
      { back: "K11j_palais" },
    ] },

  K11j_office_dit: { act: "III", title: "Congé pour la fête", place: "palais", ambiance: "chateau",
    text: [
      "« Les autres ? » Elle abat son couperet sur un chou. « En congé. Depuis lundi, on nous en renvoie vingt par jour. *Pour la fête*, dit le premier maître d'hôtel. On n'a jamais donné congé pour la fête : la fête, c'est le jour où l'on a trois cents couverts. »",
      "« Demain, on ferme l'office à onze heures. Tout le monde dehors, sur l'esplanade, pour voir monter la Reine. C'est écrit sur la porte. Il restera au Palais les archers, la mère Sauge, qui est sourde aux ordres, et moi, parce que j'ai un pot-au-feu qui veut sept heures et que je ne le quitterai pour personne. »",
      "Elle baisse la voix, par-dessus le chou. « Et la petite. On lui fait encore son bouillon. Elle en prend trois cuillerées, les jours où elle ouvre les yeux. Elle m'a fait dire, la semaine passée, qu'il était très bon. Une enfant de huit ans, qui a la politesse de mentir à sa cuisinière. » Le couperet s'arrête. « On la monte demain à la Tour, en chaise, à onze heures, avec ses cierges. Je lui ai fait une timbale. Pour le voyage. On m'a dit que ce n'était pas la peine, qu'elle n'aurait pas faim là où elle allait. » Elle te regarde. « Vous trouvez cela une réponse, vous ? »",
      { after: "j:oderic_entendu", text: "Le premier maître d'hôtel tient ses ordres de quelqu'un. Tu as entendu ce quelqu'un, tout à l'heure, donner rendez-vous à quarante barons pour le surlendemain." },
    ],
    choices: [{ back: "K11j_office" }] },

  // --- The chapel ---
  K11j_chapelle: { act: "III", title: "La chapelle des rois", place: "palais", ambiance: "temple",
    text: [
      "Elle est étroite et haute, toute en vitraux, et l'on y a mis ce matin plus de fleurs qu'il n'en reste dans les jardins. Deux clercs déroulent un tapis. Un troisième répète, à l'orgue, quatre mesures, toujours les mêmes, avec la même faute.",
      "Au banc d'œuvre, un cahier ouvert devant lui, un chanoine long et propre, les mains jointes sur une canne, dicte à un petit clerc l'ordre de demain. C'est monsieur le chanoine Poupart. Il a pour les cérémonies l'amour qu'ont d'autres pour la chasse, et il lève en ce moment un très beau lièvre.",
      { after: "monde:florizel_piece", text: "Il te reconnaît à moitié : il t'a vu{e} à la Foire, devant une estrade de comédiens, et il en garde une petite ride. Il passe outre. Un homme d'Église ne peut pas se souvenir de tout le monde." },
      "« Notez, mon fils. À dix heures, le Chapitre en chapes, devant le portail de la Tour... »",
    ],
    choices: [{ label: "Écouter l'ordre de la cérémonie", fx: { flag: "j:sait_ceremonie", ep: ["histoire", 400] }, to: "K11j_ceremonie" }] },

  K11j_ceremonie: { act: "III", title: "L'ordre de demain", place: "palais", ambiance: "temple",
    text: [
      "« ... À dix heures et demie, les corps de métier, par rang d'ancienneté ; les Horlogers-Jurés en dernier, c'est-à-dire en premier. À onze heures, Sa Majesté sort du Palais, à pied, sous le dais, précédée de la croix. Madame Aélis en chaise, rideaux ouverts si le temps le permet. »",
      "« Sa Majesté monte à la Chambre haute. Elle y ouït midi, seule avec l'héritière, selon l'usage des rois d'Aurime, qui veut que le souverain reçoive le Grand Midi au plus près de la cloche et le rende au peuple par la fenêtre. » Il lève un doigt. « Seule. Écrivez-le deux fois. Le feu Roi y montait seul. La porte se ferme en dedans, à onze heures et demie. »",
      "Le petit clerc lève le nez. « Et le maître horloger, monsieur ? On m'a remis une note. »",
      "Le chanoine a une moue. « Le sous-maître de la Guilde monte avec Sa Majesté jusqu'au palier, *pour le service de l'horloge*, et redescend. C'est une nouveauté. Je n'aime pas les nouveautés ; mais celle-ci est demandée par la Reine, et le Chapitre, consulté, n'a pas dit non. » Il soupire. « Le Chapitre ne dit jamais non. Il dit qu'il priera. »",
      "« À midi, la Patiente. Les douze coups. Au douzième, Sa Majesté paraît à la fenêtre, et l'on crie. » Il ferme les yeux, heureux. « Puis le *Te Deum*, le dîner des pauvres, et, à trois heures, la comédie sur le parvis, hélas. »",
      "Tu as l'ordre. Une porte qui se ferme en dedans, à onze heures et demie, sur une femme et une enfant. Un homme qui monte jusqu'au palier, et qui redescend. Il a trois cent soixante marches et une demi-heure pour être en bas.",
    ],
    choices: [{ back: "K11j_palais" }] },

  // --- The library ---
  K11j_librairie: { act: "III", title: "La Librairie de la Reine", place: "palais", ambiance: "chateau",
    text: [
      "C'est une pièce ronde, dans une tour, où les livres montent en colimaçon avec l'escalier. Un vieux moine à lunettes, perché sur la dernière marche d'une échelle, lit, et il lui faut le temps d'un Ave pour s'apercevoir qu'il y a quelqu'un en bas.",
      "« On ne vient plus, dit-il en descendant, avec précaution, un barreau après l'autre. La Reine lisait. Depuis Pâques, elle ne lit que des horloges. Je suis dom Fulbert. Je garde ici trois mille volumes et la Coutume d'Aurime, dont personne ne veut, parce qu'elle répond aux questions avant qu'on les pose, ce qui gâte le plaisir de la politique. »",
      { with: "josquin", text: "Josquin a déjà la main sur un dos de veau. « La Coutume. Titre neuvième. Maître, vous permettez ? Je l'ai copiée, à quatorze ans, pour me faire la main. » Le vieux moine le regarde par-dessus ses lunettes, avec l'attendrissement d'un jardinier qui voit pousser quelque chose." },
      "Tu demandes ce que dit la Coutume, quand un souverain est empêché.",
    ],
    choices: [{ label: "Lire le titre neuvième", fx: { flag: "j:sait_coutume", ep: ["histoire", 500] }, to: "K11j_coutume" }] },

  K11j_coutume: { act: "III", title: "Titre neuvième", place: "palais", ambiance: "chateau",
    text: [
      "Il pose le livre sur un lutrin, l'ouvre sans chercher. « *De l'empêchement du Prince.* Trois articles. On les a écrits après un roi fou, il y a deux siècles. »",
      "*« Premier. Si le Prince est empêché de corps ou d'esprit, le gouvernement revient au premier Prince de son sang, mâle et majeur, qui prend titre de Régent et scelle de son propre sceau. »*",
      "« C'est celui que tout le monde sait. Monseigneur de Hautgué le sait par cœur, à ce qu'on m'a dit : il me l'a fait copier en mars. »",
      "*« Second. Sauf si le Prince, étant en son sens, a nommé par lettres patentes, signées de sa main et scellées du grand sceau, un Conseil de garde de trois personnes à son choix ; auquel cas le Conseil gouverne, et le premier Prince du sang n'y a que sa voix. »*",
      "« C'est celui que personne ne lit. On ne s'en est jamais servi : il faudrait un souverain qui prévoie son propre empêchement, et ces gens-là se croient éternels. »",
      "*« Tiers. Les lettres vaudront en quelque temps qu'on les produise, fût-ce après la mort du Prince, pourvu que le sceau en soit entier. »*",
      "Dom Fulbert ôte ses lunettes. « *En quelque temps qu'on les produise.* J'ai toujours trouvé cela beau. Un papier qui garde sa force cent ans dans un tiroir. » Il te regarde, de ses yeux nus, qui sont très clairs. « Vous posez la question d'un air de quelqu'un qui connaît la réponse à une autre. Je ne vous demande rien. Je vous signale seulement que le grand sceau est chez la Reine, dans son oratoire, et qu'il y faut sa main. »",
      { after: "monde:lu:sceau", text: "Il y a deux sceaux dans cette histoire. L'un a été gravé le douze, pour servir après. L'autre est dans un oratoire, et peut servir avant." },
    ],
    choices: [{ back: "K11j_palais" }] },

  // --- The wing ---
  K11j_aile: { act: "III", title: "Là où l'on brûle le jour", place: "palais", ambiance: "chateau",
    text: [
      "L'aile a sa porte à elle, au bout d'une allée de tilleuls taillés. Deux archers. Sur le gravier, on a étendu de la paille, pour étouffer les pas.",
      "Par la fente d'un volet, tu vois une chambre où il fait plus clair que dehors. Des cierges, par dizaines, sur des herses de fer, comme dans une chapelle ardente ; une femme en gris qui les mouche, l'un après l'autre, sans s'arrêter, et qui recommence. La chaleur passe à travers le bois.",
      "*La lumière le retient un peu*, t'a dit un médecin sous un auvent. On retient donc quelqu'un, là-dedans, avec six barges de cire.",
      "Une dame en noir, sèche, un trousseau à la ceinture, paraît sur le seuil. Elle n'a pas besoin de parler : elle regarde tes souliers, puis le gravier, puis la grille. « Pas avant l'après-dînée, dit-elle tout de même, à mi-voix. Et pas sans quelqu'un. Madame Aélis a ouvert les yeux ce matin. On ne dépense pas cela en visites. »",
    ],
    choices: [{ back: "K11j_palais" }] },

  // --- Noon ---
  K11j_midi: { act: "III", title: "Le cadran aux tortues", place: "palais", ambiance: "chateau",
    text: [
      "Tu t'assois sur le socle, entre deux tortues de bronze, vertes de pluie. Les jardiniers ont ôté leurs sécateurs. L'ombre du style est à un doigt du douze.",
      "Le Palais attend midi d'une autre façon que la ville. Sur le quai, on s'arrêtait. Dans la cour des Jurés, on baissait la tête. Ici, on ouvre. Une à une, sans bruit, les fenêtres de l'aile aux volets clos se poussent, du dedans, par des mains qu'on ne voit pas. Il en sort une haleine de cire chaude.",
      "Le premier coup. À cent toises, il est rond, plein, sans dureté. Les vitres de la galerie le prennent une seconde après.",
      "À la fenêtre du milieu, il y a une femme. Elle est en noir, tête nue, plus maigre que dans sa litière. Elle tient dans ses bras, contre son épaule, un paquet de laine blanche, d'où pend une main. Elle a porté l'enfant à la croisée. Elle la tient au soleil, le visage tourné vers la Tour, pour les douze coups, comme on tend à boire.",
      "Elle compte. Tu vois ses lèvres. À chaque coup, elle penche un peu la tête vers la petite, pour voir si elle a entendu.",
      "Douze. La main blanche a remué, peut-être. La femme reste encore un moment au soleil. Puis les fenêtres se referment, une à une, du dedans.",
      { with: "josquin", text: "Josquin n'a rien dit. Il a compté, lui aussi, des lèvres, et au douzième il a fait quelque chose que tu ne lui avais jamais vu faire : il n'a demandé pardon à personne." },
      "Tu ouvres le Cahier sur le bronze tiède.",
    ],
    choices: [{ label: "Écrire", to: "M11", big: true }] },
});

module.exports = { passages: P, extras: {
  people: {
    hardouin: { name: "Le capitaine Hardouin", f: false, aka: ["le capitaine Hardouin", "Hardouin", "le capitaine"], face: { age: "mur", skin: "hale", hair: "gris", coif: "court", beard: "moustache", eyes: "lourds", iris: "gris", nose: "large", lips: "fines", shape: "carre" },
      aspect: { allure: "cinquante-cinq ans, des épaules de portefaix", habits: "casaque bleue galonnée d'argent", signe: "regarde les mains, puis la porte" }, qui: "Capitaine des archers de la Reine.", desc: "Capitaine des archers de la Reine. Il a gardé deux rois et une veuve. Il couche en travers de sa porte depuis la mort du Roi, et croit ce qui se tient dans la main." },
    brezolles: { name: "Le chevalier de Brézolles", f: false, aka: ["le chevalier de Brézolles", "Brézolles", "le chevalier", "Aimery de Brézolles"], face: { age: "jeune", skin: "clair", hair: "noir", coif: "milong", beard: "moustache", eyes: "amande", iris: "noir", nose: "fin", lips: "pleines", shape: "ovale" },
      aspect: { allure: "vingt-cinq ans, beau et le sachant", habits: "chemise de batiste, ruban aux cheveux", signe: "se regarde dans les vitres" }, qui: "Premier écuyer de la Reine.", desc: "Premier écuyer de la Reine. Trois duels, deux dettes, une idée : qu'on le regarde. Celui qui le touche à l'épée a droit à une chose." },
  },
  shops: {
    iii_office: { name: "La desserte de l'office", sells: [{ item: "pain", price: 1 }, { item: "onguent", price: 3 }, { item: "veilleuse", price: 1 }] },
  },
  duels: {
    d_brezolles: { title: "Trois touches au fleuret", foe: "brezolles", rule: "Trois touches au fleuret boutonné, dans la serre, devant quatre pages et un prévôt.",
      touches: 3, dom: "combat", skill: 8,
      intro: "Il se met en garde comme on entre dans un salon : sans effort, de profil, le poignet haut. Il te laisse choisir ta place, et prend celle d'où il se voit dans la vitre.",
      style: { attaque: 1, parade: 2, feinte: 3 },
      tells: {
        attaque: ["Le chevalier cesse de sourire, une seconde.", "Son talon gauche quitte le plancher."],
        parade: ["Le chevalier jette un coup d'œil à la vitre, et sa lame attend.", "Il baisse la pointe, comme pour t'inviter."],
        feinte: ["Le chevalier a un mot pour les pages, et son poignet tourne.", "Il bat ta lame, deux fois, d'un petit bruit sec.", "Il sourit plus qu'il ne faut."],
      },
      win: { to: "K11j_brezolles_gagne", fx: { flag: ["j:brezolles_battu", "j:voie_brezolles"], regard: { brezolles: "admiratif" }, ep: ["seance", 800] } },
      lose: { to: "K11j_brezolles_perdu", fx: { pv: -2, ep: ["seance", 300] } } },
  },
} };
