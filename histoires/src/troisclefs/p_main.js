// Prologue, the hand (post `p` = main): the roofs of the rue des Ferronniers, the attic of the masterpieces, the
// gallery above the banquet; then the job seen from above, according to the plan voted (`plan_p`).
// Sets: monde:p:mecanisme, monde:p:ancrage, monde:p:apprenti, monde:p:timbre_coupe, monde:p:cour_tenue,
// monde:p:reine=propre (only when the hand itself takes the lock, cleanly). Personal: p:m_bruit, p:m_gant.
var PLAN = function (h, e, r, f) { return [{ if: { scrutin: "plan_p", is: "haut" }, to: h }, { if: { scrutin: "plan_p", is: "echange" }, to: e }, { if: { scrutin: "plan_p", is: "ruelle" }, to: r }, { to: f }]; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ going up
    Pm_gantier: { act: "P", title: "Le pignon du gantier", place: "ferronniers",
      text: [
        "La maison du gantier s'appuie à l'hôtel des Maîtres comme un petit clerc à l'épaule d'un chanoine. Trois étages, un pignon à redents, et sur le côté, dans l'ombre de la venelle, une gouttière de plomb qui monte d'un seul jet jusqu'aux ardoises.",
        "Tu fais le tour. Dans la courette, derrière une barrière basse, une échelle de couvreur est couchée le long du mur, à côté d'une niche d'où sort une chaîne. Et au premier étage, derrière un carreau éclairé, une très vieille femme tricote dans un fauteuil : toute la maison est à la fête, sauf elle, qu'on a laissée garder les murs.",
        "Trois chemins vers le haut. Aucun n'est fait pour toi ; c'est à cela qu'on reconnaît les bons.",
      ],
      choices: [
        { label: "Grimper par la gouttière", test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_toit" }, lose: { fx: { pv: -2 }, to: "Pm_glisse" } },
        { label: "Aller chercher l'échelle dans la courette, malgré la niche", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_toit" }, lose: { fx: { flag: "p:m_bruit" }, to: "Pm_chien" } },
        { label: "Frapper au carreau de la vieille et monter par l'escalier", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_vieille" }, lose: { to: "Pm_vieille_ko" } },
      ] },
    Pm_glisse: { act: "P", title: "Le plomb", place: "ferronniers",
      text: [
        "Le plomb d'Aiguemorne est un métal de bonne compagnie : il ploie, il prévient, il gémit avant de lâcher. À mi-hauteur, un collier cède. Tu restes pendu{e} par les mains à un tuyau qui s'écarte du mur avec la lenteur d'une porte de cathédrale, et tu as tout le loisir d'apprécier la distance qui te sépare du pavé.",
        "Tu rattrapes le redent du pignon d'un coup de reins, la paume ouverte sur une arête. Le tuyau revient cogner la muraille. En bas, personne ne lève la tête : un soir de Saint-Fer, il faut bien que quelque chose tombe.",
      ],
      choices: [{ label: "Finir la montée par les redents", to: "Pm_toit" }] },
    Pm_chien: { act: "P", title: "La niche", place: "ferronniers",
      text: [
        "La chaîne se tend avant que tu aies vu la bête. C'est un roquet jaune, de la taille d'un pain de quatre livres, pourvu d'une voix de sergent recruteur, et il te donne la mesure de son opinion pendant que tu dresses l'échelle contre le mur avec des gestes qui se voudraient calmes.",
        "Au premier étage, une fenêtre s'ouvre. « Tais-toi, Baron ! » crie une voix chevrotante. Le roquet se tait, vexé. La fenêtre se referme. Tu montes, et tu tires l'échelle derrière toi, barreau par barreau, en te promettant de la rendre.",
      ],
      choices: [{ label: "Prendre pied sur les ardoises", to: "Pm_toit" }] },
    Pm_vieille: { act: "P", title: "La grand-mère du gantier", place: "ferronniers",
      text: [
        "Elle t'ouvre elle-même, son tricot à la main, et t'écoute expliquer que tu viens pour la lanterne des morts, là-haut, dont la mèche charbonne : les Maîtres t'envoient, et l'on passe plus commodément par chez elle.",
        "« La lanterne. » Elle te détaille de bas en haut, s'arrête à tes semelles. « Mon défunt montait la moucher tous les ans, à la Saint-Fer. Il disait comme vous. Il redescendait avec une oie. » Elle s'efface pour te laisser passer. « Troisième palier, la trappe est dure. Si vous rapportez une oie, j'en veux l'aile. »",
      ],
      choices: [{ label: "Monter, et pousser la trappe", to: "Pm_toit" }] },
    Pm_vieille_ko: { act: "P", title: "Une porte prudente", place: "ferronniers",
      text: [
        "Le carreau s'entrouvre de deux doigts. Tu dis la lanterne des morts, la mèche, les Maîtres. La vieille t'écoute jusqu'au bout avec bienveillance.",
        "« C'est bien dit. Mon défunt disait mieux, et il avait une échelle à lui. » Le carreau se referme, et la chandelle passe dans une autre pièce.",
        "Reste la venelle. Tu prends la gouttière, puisqu'elle est là, en veillant à peser sur les colliers l'un après l'autre.",
      ],
      choices: [{ label: "Grimper", to: "Pm_toit" }] },

    // ------------------------------------------------------------ the roofs
    Pm_toit: { act: "P", title: "Les toits de la rue des Ferronniers", place: "ferronniers", backName: "les toits",
      text: [
        { first: true, text: "D'en haut, Aiguemorne cesse d'être une ville et devient un mécanisme. Les toits s'emboîtent comme les dents d'un rouage, ardoise contre ardoise, jusqu'à la masse noire de la citadelle ; les rues sont des rainures où coule de la lumière ; et la rumeur de la fête monte par bouffées, déformée, pareille au bruit que ferait une grande horloge dont on aurait remplacé les poids par des gens." },
        { first: true, text: "Le toit de l'hôtel des Maîtres commence à trois pas, de l'autre côté d'un chéneau. Il est plus haut, plus raide, et hérissé de cheminées dont les mitres, découpées en têtes de clefs, se détachent sur le ciel. Au faîte brûle la lanterne des morts. Sa flamme, sous son capuchon de fer, laisse voir les ardoises voisines et abandonne le reste à une obscurité que l'œil peuple malgré lui." },
        { first: true, text: "Du côté de la cour, une lucarne à fronton. Et entre deux cheminées, à mi-pente, quelque chose vient de bouger, qui avait pour une cheminée beaucoup trop de souplesse." },
        { again: true, text: "Les ardoises, le chéneau, les mitres en têtes de clefs. La lanterne des morts brûle au faîte ; la lucarne attend du côté de la cour." },
      ],
      choices: [
        { label: "Voir de plus près ce qui a bougé entre les cheminées", to: "Pm_gant", hide: { seen: "Pm_gant" } },
        { label: "Monter jusqu'à la lanterne des morts", to: "Pm_lanterne", hide: { seen: "Pm_lanterne" } },
        { label: "Gagner la lucarne", to: "Pm_lucarne", big: true },
      ] },
    Pm_lanterne: { act: "P", title: "La lanterne des morts", place: "ferronniers",
      text: [
        "C'est une cage de fer forgé haute comme un enfant, où brûle une mèche dans un godet d'huile. Sur ses quatre faces, les Maîtres du Fer ont fait river des plaques de cuivre, une par défunt, depuis la fondation de la guilde : un nom, deux dates, et la marque du poinçon. Le vent les fait vibrer l'une contre l'autre avec un petit bruit de dents.",
        "Tu en lis quelques-unes à la lueur du godet. La plupart sont vertes. L'une, tout en haut, a été frottée si souvent qu'elle luit comme une pièce neuve : *AUBRY CROCHEMORE, qui fit parler le bronze.* Elle porte une date de naissance. À la place de la seconde, le cuivre est resté nu.",
      ],
      fx: { ep: ["perso", 150] },
      choices: [{ back: "Pm_toit" }] },

    Pm_gant: { act: "P", title: "Un confrère", place: "ferronniers",
      text: [
        "Tu contournes la souche par le haut, à plat ventre sur l'ardoise froide.",
        "L'homme est accroupi devant un châssis à tabatière, à dix pas de la lucarne. Mince, vêtu de sombre, un foulard remonté sur le nez ; il travaille les vis du cadre avec un tournevis qu'il mouille de salive pour l'empêcher de grincer, et il porte, par cette nuit douce, des gants de peau noire. Dans tout Aiguemorne, une seule maison travaille gantée de cette couleur, et c'est l'autre.",
        "Les Gants-Noirs sur le toit des Maîtres, le soir de la Saint-Fer. On ne monte pas là pour l'air. Quelqu'un, ce soir, a commandé la même pièce à deux boutiques.",
      ],
      fx: { clue: "g_toit", flag: "p:m_gant" },
      choices: [
        { label: "Le laisser dévisser, et passer derrière lui quand la voie sera ouverte", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "Pm_gant_suit" }, lose: { to: "Pm_gant_face" } },
        { label: "Lui tomber dessus : un toit, c'est petit pour deux maisons", fight: { title: "Sur les ardoises", enemies: [{ id: "gant_noir", n: 1 }],
            win: { fx: { ep: ["perso", 400], item: "corde" }, to: "Pm_gant_vaincu" }, lose: { fx: { pv: 4 }, to: "Pm_gant_perdu" },
            flee: { label: "Rompre et filer vers la lucarne", dom: "nature", diff: 0, to: "Pm_lucarne" } } },
        { label: "Tousser poliment : « Confrère. »", test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "Pm_gant_parle" }, lose: { to: "Pm_gant_face" } },
        { label: "Le laisser à son châssis et gagner la lucarne sans bruit", to: "Pm_lucarne" },
      ] },
    Pm_gant_suit: { act: "P", title: "Dans le sillage", place: "ferronniers",
      text: [
        "Tu attends. C'est la partie du métier que personne n'enseigne et que tout le monde finit par savoir : rester à plat sur un toit, pendant qu'un autre fait l'ouvrage, en respirant par la bouche.",
        "La dernière vis cède. L'homme soulève le châssis, s'assied au bord, et se laisse glisser dans le noir. Tu comptes jusqu'à trente, puis tu descends derrière lui dans une odeur de poussière et d'huile rance. Il a pris à gauche, vers l'escalier des domestiques ; ses semelles de feutre s'éloignent. Tu prends à droite. Il t'a ouvert la maison, et il l'ignore : il y a dans cette pensée de quoi se tenir chaud jusqu'à minuit.",
      ],
      fx: { flag: "p:m_entree_gant" },
      choices: [{ label: "Avancer dans les combles", to: "Pm_combles" }] },
    Pm_gant_face: { act: "P", title: "Face à face", place: "ferronniers",
      text: [
        "Une ardoise bouge sous ton coude. L'homme se retourne d'un bloc, le tournevis tenu bas, comme une lame, et pendant le temps d'un souffle vous vous regardez par-dessus dix pas de toit en pente, chacun pesant ce que coûterait un cri.",
        "Puis il touche son foulard de deux doigts, par dérision, lâche le châssis, et s'en va le long du faîtage sans courir, du pas d'un homme qui a d'autres entrées. Le châssis reste à demi dévissé. Deux vis manquent ; les deux autres tiennent comme des dents de sagesse.",
      ],
      choices: [{ label: "Laisser le châssis et gagner la lucarne", to: "Pm_lucarne" }] },
    Pm_gant_parle: { act: "P", title: "Entre gens du bâtiment", place: "ferronniers",
      text: [
        "Il sursaute, se reprend, et te considère par-dessus son foulard avec des yeux qui rient déjà. « Rossignol. J'aurais parié sur la gouttière du gantier : elle a failli tuer mon cousin. »",
        "Vous parlez bas, à dix pas, comme deux pêcheurs sur la même berge. Il s'appelle Pipeau, pour le service. Sans-Bruit a reçu la commande avant-hier : la Serrure-Reine, pour un amateur qui paie bien et se moque de l'heure, pourvu que ce soit cette nuit. « Elle a ri en apprenant que la vieille était sur le coup. Elle a dit : que la meilleure maison gagne, et qu'on envoie des fleurs à l'autre. »",
        "« Et ton amateur, il a un nom ? »",
        "« Il a un valet, qui a des bottes de cavalier et une cocarde cramoisie sous son manteau. Moi, les noms, je les laisse aux baptêmes. » Il reprend son tournevis. « Je passe par ici. Toi, par où tu veux. On ne s'est pas vus. »",
      ],
      fx: { clue: "g_cocarde" },
      choices: [{ label: "Le laisser à ses vis et gagner la lucarne", to: "Pm_lucarne" }] },
    Pm_gant_vaincu: { act: "P", title: "Un toit pour une seule maison", place: "ferronniers",
      text: [
        "Il glisse, se rattrape au chéneau, et te regarde d'en bas, pendu par les avant-bras, avec plus de reproche que de peur. Tu lui tends la main. C'est la règle de la Douairière, et c'est aussi la condition de Loridan : pas une goutte.",
        "Hissé sur l'ardoise, il se tâte les côtes, ramasse ce qu'il peut de sa dignité, et t'abandonne le terrain en boitant vers le pignon voisin. Sa corde est restée lovée près du châssis, avec son grappin gainé de drap. Tu la passes en bandoulière. Les Gants-Noirs achètent du bon chanvre.",
      ],
      fx: { flag: "monde:p:gants_ecartes" },
      choices: [{ label: "Gagner la lucarne", to: "Pm_lucarne" }] },
    Pm_gant_perdu: { act: "P", title: "Le chéneau", place: "ferronniers",
      text: [
        "Il est plus vif que toi, et il connaît les ardoises. Un croc-en-jambe, une poussée, et c'est toi qui dévales la pente sur le dos, jusqu'au chéneau qui t'arrête d'un coup dans les reins. Quand tu retrouves ton souffle, il est penché sur toi, le foulard de travers.",
        "« On se bat mal, chez la vieille. On se bat proprement, remarque. » Il te remet debout par le col, t'époussette l'épaule d'une main gantée, et s'en va vers son châssis. « Chacun son trou. Le mien est pris. »",
      ],
      choices: [{ label: "Boiter jusqu'à la lucarne", to: "Pm_lucarne" }] },

    Pm_lucarne: { act: "P", title: "La lucarne", place: "ferronniers",
      text: [
        "Une lucarne à fronton, du côté de la cour, fermée par un volet intérieur et un crochet de fer. Par la fente, on sent l'air des combles : poussière, vieux bois, huile de pied de bœuf. Chez les Maîtres du Fer, même le grenier est graissé.",
        "Le crochet se voit à travers la fente. À un pas, la souche de la cheminée des cuisines froides bâille, large et carrée, sans fumée.",
      ],
      choices: [
        { label: "Soulever le crochet à la lame, par la fente", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_combles" }, lose: { to: "Pm_lucarne_ko" } },
        { label: "Peser sur le volet jusqu'à ce que le crochet s'arrache", test: { dom: "combat", diff: 10, label: "Combat" }, win: { to: "Pm_combles" }, lose: { fx: { flag: "p:m_bruit" }, to: "Pm_lucarne_ko" } },
        { label: "Descendre par la cheminée froide", test: { dom: "nature", diff: 0, label: "Nature" }, win: { fx: { ep: ["perso", 300] }, to: "Pm_combles" }, lose: { fx: { pv: -2 }, to: "Pm_lucarne_ko" } },
      ] },
    Pm_lucarne_ko: { act: "P", title: "Par où l'on peut", place: "ferronniers",
      text: [
        "Cela résiste, puis cela cède d'une façon que tu n'avais pas prévue, et tu entres dans les combles de l'hôtel des Maîtres moitié par ta volonté, moitié par ton poids, en emportant un pan de toile d'araignée grand comme une nappe.",
        "Tu restes immobile, à genoux sur le plancher. Sous toi, la fête ronfle. Personne ne monte.",
      ],
      choices: [{ label: "Te relever et regarder où tu es", to: "Pm_combles" }] },

    // ------------------------------------------------------------ the attic of the masterpieces
    Pm_combles: { act: "P", title: "Le cimetière des chefs-d'œuvre", place: "ferronniers", backName: "les combles",
      text: [
        { first: true, text: "Il faut un moment pour comprendre ce que l'on voit. Les combles tiennent toute la longueur de l'hôtel, sous une charpente en carène, et du plancher jusqu'aux pannes les murs sont couverts de serrures. Des centaines. Chacune pend à son clou, sous une étiquette de parchemin : une année, un nom. Ce sont les Serrures-Reines des années passées, que la guilde couronne une nuit, expose une heure, descend au trésor, puis monte ici quand le trésor est plein, pour y vieillir fermées." },
        { first: true, text: "Elles luisent faiblement dans le peu de clarté qui vient de la lucarne. Certaines sont grandes comme des portes de tabernacle ; d'autres tiendraient dans la main. Aucune n'a de clef. Cent ans de génie, pendus par rangs comme des jambons, et gardant chacun, derrière ses pênes, exactement rien. Il règne ici le silence particulier des choses qui ont été faites pour servir et qu'on a préféré admirer." },
        { first: true, text: "Au bout des combles, un trait de lumière jaune passe sous une porte basse : la galerie, sans doute, qui donne sur la grande salle. Et quelque part entre les rangées, dans le noir, quelqu'un renifle." },
        { again: true, text: "Les serrures pendues par rangs, sous leurs étiquettes. La lumière de la galerie filtre sous la porte basse, au bout." },
      ],
      choices: [
        { label: "Chercher qui renifle entre les rangées", to: "Pm_apprenti", hide: { seen: "Pm_apprenti" } },
        { label: "Lire les étiquettes les plus anciennes", to: "Pm_crochet", hide: { seen: "Pm_crochet" } },
        { label: "Pousser la porte basse de la galerie", to: "Pm_galerie", big: true },
      ] },
    Pm_crochet: { act: "P", title: "Le premier rang", place: "ferronniers",
      text: [
        "Le premier rang, tout au fond, sous la poussière la plus épaisse. Les étiquettes y sont écrites d'une encre devenue rousse. Tu remontes les années du doigt, serrure après serrure, jusqu'à la plus ancienne.",
        "Le clou est là, et l'étiquette. La serrure manque. On lit : *An premier de la Sentence. Chef-d'œuvre de Me Aubry Crochemore. Remis à la Tour, sur ordre, avec son ouvrière.*",
        "À la place de la serrure, la poussière a dessiné sur le mur, en plus clair, une forme carrée.",
      ],
      fx: { ep: ["perso", 200], clue: "j_ouvriere" },
      choices: [{ back: "Pm_combles" }] },
    Pm_apprenti: { act: "P", title: "Celui qui renifle", place: "ferronniers",
      text: [
        "C'est un garçon de seize ou dix-sept ans, assis par terre entre deux rangées, les genoux au menton, en habit de fête trop neuf. Il tient dans ses mains une serrure de la taille d'un livre d'heures, et il pleure dessus avec application, comme on arrose.",
        "Il te voit, et ne crie pas. Il a dépassé ce soir le point où les surprises comptent. « Si vous êtes un voleur, prenez celle-ci, dit-il. Elle a neuf pênes et un défaut au troisième. Ils m'ont classé dernier. Dernier ! Maîtresse Vauquier a eu la couronne, et moi on m'a dit de revenir dans trois ans, avec de l'humilité. »",
      ],
      choices: [
        { label: "T'asseoir, et regarder sa serrure en connaisseur", test: { dom: "savoir", diff: 10, label: "Savoir", help: [{ if: { voie: "crocheteur" }, v: 20 }] }, win: { fx: { ep: ["perso", 300], flag: "monde:p:apprenti" }, to: "Pm_apprenti_ok" }, lose: { to: "Pm_apprenti_bof" } },
        { label: "Lui dire que les derniers d'une année font les Syndics de la suivante", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 300], flag: "monde:p:apprenti" }, to: "Pm_apprenti_ok" }, lose: { to: "Pm_apprenti_bof" } },
        { label: "Le laisser à son chagrin : tu as à faire", back: "Pm_combles" },
      ] },
    Pm_apprenti_ok: { act: "P", title: "Crépin", place: "ferronniers",
      text: [
        "Il s'appelle Crépin. Il se mouche dans sa manche neuve, et de fil en aiguille, parce qu'un chagrin qu'on écoute devient bavard, il te dit la maison : l'escalier de service derrière la tapisserie de la Forge, la cour, la porte de la ruelle. C'est par là qu'à minuit deux valets descendront la Serrure-Reine, dans sa caisse, jusqu'à la charrette du trésor. « Deux valets et pas un garde. Les Maîtres disent qu'une escorte, ça donne des idées. »",
        "Il renifle encore. « Et le vieux Balancier, le Remonteur, qui devait présider le jury comme tous les ans ! Il est sorti du cabinet du Syndic à quatre heures, blanc comme un linge, et il est rentré chez lui sans voir une seule serrure. La mienne, il l'aurait comprise. »",
      ],
      fx: { clue: "r_blanc" },
      choices: [{ back: "Pm_combles" }] },
    Pm_apprenti_bof: { act: "P", title: "Un chagrin fermé", place: "ferronniers",
      text: [
        "Il t'écoute, hoche la tête, et se remet à pleurer sur son troisième pêne avec la même régularité. Il y a des chagrins qui veulent un public, et d'autres qui ont seulement besoin d'un grenier.",
      ],
      choices: [{ back: "Pm_combles" }] },

    // ------------------------------------------------------------ the gallery above the banquet
    Pm_galerie: { act: "P", title: "La galerie des lustres", place: "ferronniers",
      text: [
        "La porte basse ouvre sur une coursive de bois qui fait le tour de la grande salle, au ras du plafond, derrière une claire-voie sculptée. C'est d'ici qu'on descend et qu'on remonte les lustres. La chaleur de trois cents convives et de mille chandelles y monte d'un bloc, chargée de graisse d'oie, de cire et de musc.",
        "À dix pas, au treuil du grand lustre, un valet en livrée dort sur un tabouret, la joue contre la manivelle. Il faut passer derrière lui pour atteindre le milieu de la galerie, d'où l'on doit voir la cloche à l'aplomb.",
      ],
      choices: [
        { label: "Passer derrière le dormeur, sur les bords des planches", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_dessus" }, lose: { fx: { flag: "p:m_bruit" }, to: "Pm_valet" } },
        { label: "Attendre un éclat de la fête pour couvrir tes pas", test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { ep: ["perso", 250] }, to: "Pm_dessus" }, lose: { fx: { flag: "p:m_bruit" }, to: "Pm_valet" } },
      ] },
    Pm_valet: { act: "P", title: "Le valet des lustres", place: "ferronniers",
      text: [
        "Une planche chante. Le valet ouvre un œil, puis l'autre, et te voit : une silhouette noire de suie, dans une galerie où ne montent que lui et les araignées.",
        "Il ouvre la bouche. Tu as le temps d'une phrase.",
      ],
      urgent: 20,
      choices: [
        { label: "« Chut ! Le Syndic m'envoie voir si tu dors. Et tu dors. »", test: { dom: "social", diff: 10, label: "Social" }, win: { to: "Pm_valet_ok" }, lose: { to: "Pm_valet_ko" } },
        { label: "Lui mettre un sou dans la main et un doigt sur la bouche", if: { gold: { min: 1 } }, fx: { gold: -1 }, to: "Pm_valet_ok" },
        { label: "Rester immobile dans l'ombre du pilier", timeout: true, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "Pm_valet_reve" }, lose: { to: "Pm_valet_ko" } },
      ] },
    Pm_valet_ok: { act: "P", title: "Un homme raisonnable", place: "ferronniers",
      text: [
        "Le valet referme la bouche. Il a trente ans de maison, un tabouret, et l'expérience des choses qu'il vaut mieux avoir rêvées. Il tourne sa joue de l'autre côté de la manivelle et ferme les yeux avec ostentation.",
      ],
      choices: [{ label: "Gagner le milieu de la galerie", to: "Pm_dessus" }] },
    Pm_valet_reve: { act: "P", title: "Un mauvais rêve", place: "ferronniers",
      text: [
        "Tu te fais pilier. Le valet te regarde, ou regarde l'endroit où tu es, pendant un temps que tu mesures aux battements de ton cou. Puis il se signe, marmonne quelque chose sur le vin des cuisines, et se rendort.",
      ],
      choices: [{ label: "Gagner le milieu de la galerie", to: "Pm_dessus" }] },
    Pm_valet_ko: { act: "P", title: "La manivelle", place: "ferronniers",
      text: [
        "Il se lève d'un bond, et dans son trouble il s'accroche à ce qu'il a sous la main, qui est la manivelle du treuil. Le cliquet saute. Le grand lustre descend d'un pied, d'un seul coup, avec un bruit de chaînes, au-dessus de la table des Maîtres jurés.",
        "En bas, trois cents têtes se lèvent. Le valet, épouvanté de son ouvrage, se jette sur le treuil pour retenir la chaîne ; il a désormais un souci plus pressant que toi. Tu files le long de la claire-voie pendant qu'on crie d'en bas : « Eustache ! Ivrogne ! » Les lustres d'Aiguemorne ont bon dos.",
      ],
      choices: [{ label: "Gagner le milieu de la galerie, plié{e} en deux", to: "Pm_dessus" }] },

    Pm_dessus: { act: "P", title: "La salle, vue du plafond", place: "ferronniers", backName: "le milieu de la galerie",
      text: [
        { first: true, text: "Par les jours de la claire-voie, tu vois la Saint-Fer comme la voient les mouches. Trois tables en fer à cheval, chargées à rompre ; des crânes, des perruques, des coiffes, des épaules nues ; des valets qui circulent entre les dos avec des plats d'argent tenus haut. Sur l'estrade, sous un dais aux armes de la guilde, la table des Maîtres jurés, et au milieu d'eux un homme rond, rose, en velours prune, qui rit de tout le corps et compte quelque chose sur ses doigts." },
        { first: true, text: "Au centre du fer à cheval, seule sur un socle de chêne drapé de bleu, sous une cloche de verre grande comme une ruche, la Serrure-Reine. Les chandelles s'y reflètent toutes. Les convives, eux, lui tournent le dos : on l'a admirée au premier service, on l'a commentée au second, et l'on en est aux fromages." },
        { again: true, text: "La salle, les trois tables, l'estrade. Sous sa cloche, à l'aplomb, la Serrure-Reine brille pour personne." },
      ],
      choices: [
        { label: "Étudier le socle et la cloche", test: { dom: "savoir", diff: 10, label: "Savoir", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { voie: "alchimiste" }, v: 10 }] }, win: { fx: { ep: ["perso", 400], flag: "monde:p:mecanisme" }, to: "Pm_meca" }, lose: { to: "Pm_meca_flou" }, hide: { any: [{ seen: "Pm_meca" }, { seen: "Pm_meca_flou" }] } },
        { label: "Examiner la charpente au-dessus de la cloche", to: "Pm_poutre", hide: { seen: "Pm_poutre" } },
        { label: "Tu en as assez vu : regagner les toits, puis le porche", to: "Pm_redescente", big: true },
      ] },
    Pm_meca: { act: "P", title: "Le secret du socle", place: "ferronniers",
      text: [
        "Tu regardes longtemps, comme on lit. La cloche repose dans une gorge de cuivre. De cette gorge part un fil d'archal, fin comme un cheveu, qui file sous la draperie bleue, descend le long du socle, court au ras du parquet et disparaît dans le lambris, derrière l'estrade : qu'on soulève la cloche d'un doigt, le fil se détend, et quelque part un timbre sonne.",
        "Mais un Maître du Fer veut pouvoir montrer sa merveille à un prince sans faire accourir le guet. Sur le devant du socle, à hauteur de genou, il y a une rosace de cuivre un peu plus usée que les autres ornements. Vers neuf heures, l'intendant vient la tourner d'un quart, à rebours, avant de lever la cloche pour un convive de marque, et la retourne après. Tu le vois faire. Tu vois dans quel sens.",
      ],
      choices: [{ back: "Pm_dessus" }] },
    Pm_meca_flou: { act: "P", title: "Un fil", place: "ferronniers",
      text: [
        "Il y a un fil. Tu le devines plus que tu ne le vois, à la façon dont la draperie bleue se pince d'un côté du socle : quelque chose part de la cloche et s'en va vers le lambris. Un timbre, à coup sûr. Quant à la manière de l'endormir, il faudrait être en bas, à genoux devant le socle, avec une chandelle et dix minutes ; la galerie ne donne ni l'un ni l'autre.",
      ],
      choices: [{ back: "Pm_dessus" }] },
    Pm_poutre: { act: "P", title: "L'anneau du vieux lustre", place: "ferronniers",
      text: [
        "La poutre maîtresse passe à l'aplomb exact de la cloche. On y a jadis pendu un lustre, avant que la guilde s'en offre trois : il en reste, vissé dans le chêne, un anneau de fer gros comme le poignet, et la trace d'une poulie.",
        "Tu t'allonges sur la poutre, tu passes la main dans l'anneau, tu tires de tout ton poids. Rien ne bouge. Les Maîtres du Fer ont des défauts ; ils scellent bien.",
      ],
      fx: { flag: "monde:p:ancrage", ep: ["perso", 250] },
      choices: [{ back: "Pm_dessus" }] },
    Pm_redescente: { act: "P", title: "Le chemin du retour", place: "ferronniers",
      text: [
        "Tu refais le chemin à l'envers : la galerie, les combles et leurs serrures pendues, la lucarne, les ardoises. La fête, sous tes pieds, entame les liqueurs.",
        { if: { has: "p:m_gant" }, text: "En passant, tu jettes un regard au châssis à tabatière. Personne. Les Gants-Noirs sont quelque part dans la maison, ou sur un autre toit, à attendre la même heure que vous." },
        "Quand tu touches le pavé de la venelle, les clochers commencent à se disputer onze heures.",
      ],
      choices: [{ label: "Rejoindre le porche du tonnelier", to: "Pc_porche", big: true }] },

    // ------------------------------------------------------------ the job, from above
    Pm_coup: { act: "P", title: "Les combles, avant minuit", place: "ferronniers",
      text: [
        "Les toits, une seconde fois. Tu connais maintenant les ardoises qui tiennent et celles qui trahissent, et tu traverses les combles sans lever les yeux vers les serrures pendues, qui ont l'air d'attendre des nouvelles de leur cadette.",
        "La galerie. Le valet des lustres a quitté son tabouret : on a dû venir le chercher pour les flambeaux du dessert. En bas, la salle bourdonne plus sourdement. Minuit approche, et avec lui le moment où l'on portera des santés.",
      ],
      choices: [{ label: "À l'ouvrage", to: PLAN("Pm_c_haut", "Pm_c_echange", "Pm_c_ruelle", "Pm_c_foire"), big: true }] },

    Pm_c_haut: { act: "P", title: "La corde", place: "ferronniers",
      text: [
        "Tu noues la corde à la poutre, tu la laisses filer par une découpe de la claire-voie, dans l'ombre que fait le grand lustre. Elle descend sans un bruit et s'arrête à une coudée de la cloche, en se balançant à peine.",
        "Sur l'estrade, l'homme en velours prune se lève, un verre à la main. Trois cents chaises raclent le parquet. Trois cents dos se tournent vers toi, et trois cents visages vers lui. « Mes chers confrères, commence le Syndic, une serrure, c'est d'abord un chiffre… »",
        "Tu passes par-dessus la rambarde.",
      ],
      choices: [
        { label: "Descendre, lever la cloche, remonter", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "monde:p:ancrage" }, v: 15 }, { if: { has: "monde:p:mecanisme" }, v: 20 }, { if: { item: "corde" }, v: 10 }, { if: { has: "monde:p:toast" }, v: 10 }] },
          win: { fx: { set: { "monde:p:reine": "propre" }, ep: ["seance", 1500] }, to: "Pm_c_haut_ok" }, lose: { fx: { pv: -2, ep: ["seance", 700] }, to: "Pm_c_haut_ko" } },
      ] },
    Pm_c_haut_ok: { act: "P", title: "Neuf livres au bout d'un fil", place: "ferronniers",
      text: [
        "Tu descends dans la lumière comme on entre dans une eau chaude. Tes pieds touchent le socle. La rosace, un quart de tour à rebours ; la cloche, soulevée des deux mains et posée sur la draperie ; et la Serrure-Reine est dans tes bras, froide, lourde, plus lourde que neuf livres, comme sont lourdes les choses qu'on vole au milieu de trois cents personnes.",
        "« … onze pênes, mes amis ! Onze ! Soit, à raison d'un écu le pêne… » Le Syndic additionne. Personne ne se retourne. Tu repasses la cloche sur le socle vide, par égard pour le premier qui regardera, et tu remontes à la force des bras, la serrure dans ta chemise, contre la peau.",
        "Sur la galerie, tu t'aperçois que tu as cessé de respirer depuis la rambarde.",
      ],
      choices: [{ label: "Les toits, vite", to: "Pm_fuite" }] },
    Pm_c_haut_ko: { act: "P", title: "Le timbre", place: "ferronniers",
      text: [
        "Tu descends dans la lumière. Tes pieds touchent le socle, tes mains la cloche, et la cloche se lève. Derrière l'estrade, dans le lambris, un timbre se met à sonner, petit, clair, obstiné, comme une sonnette de messe.",
        "Le Syndic s'arrête au milieu d'un chiffre. Trois cents têtes pivotent. Il y a un instant très pur, où la salle entière contemple une personne noire de suie, debout sur le socle de la Serrure-Reine, la merveille sous le bras et une corde dans l'autre main. Puis une femme crie, et tout le reste suit.",
        "Tu montes. Tu ne sauras jamais comment. Quelque chose te frôle la jambe, une carafe peut-être, et éclate contre la claire-voie. En bas, on hurle « Au toit ! » et « Le guet ! », et la cloche d'alarme de la guilde entre dans le concert.",
      ],
      choices: [{ label: "Les toits, et que le diable emporte la discrétion", to: "Pm_fuite" }] },

    Pm_c_echange: { act: "P", title: "Le fil d'archal", place: "ferronniers",
      text: [
        "Ton affaire, c'est le timbre. Il faut qu'il soit mort avant que la voix, en bas, touche à la cloche.",
        { if: { has: "monde:p:mecanisme" }, text: "Tu sais où court le fil : du socle au lambris, derrière l'estrade, où il remonte le long d'un pilastre jusqu'à hauteur de galerie, avant de replonger vers son timbre. Il passe là, à portée de bras, tendu sur deux pitons.", else: "Tu ignores le chemin du fil. Mais un fil qui commande un timbre finit dans un mur, et les murs de cette salle, vus d'ici, n'ont qu'un endroit où le lambris a été refait : derrière l'estrade, le long d'un pilastre. Tu y vas à tâtons." },
        "Tu tires tes pinces. Sur l'estrade, le Syndic se lève, verre en main, et la salle avec lui.",
      ],
      choices: [
        { label: "Pincer le fil et le détendre sans le rompre", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "monde:p:mecanisme" }, v: 25 }, { if: { voie: "crocheteur" }, v: 10 }] },
          win: { fx: { flag: "monde:p:timbre_coupe", ep: ["seance", 1200] }, to: "Pm_c_echange_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pm_c_echange_ko" } },
      ] },
    Pm_c_echange_ok: { act: "P", title: "Un timbre qui dort", place: "ferronniers",
      text: [
        "Le fil vient sous la pince, mou comme un fil de pêche après la touche. Tu le fixes d'un tour au piton. Quelque part dans le mur, un timbre vient de perdre la voix, et il l'ignore.",
        "Par la claire-voie, tu regardes en bas. Près du socle, parmi les dos tournés, une silhouette que tu connais s'est arrêtée, un manteau sur le bras. La suite n'est plus de ton ressort. Tu comptes jusqu'à vingt, tu rends le fil, et tu t'en vas par où tu es venu{e}.",
      ],
      choices: [{ label: "Regagner les toits", to: "Pm_fuite" }] },
    Pm_c_echange_ko: { act: "P", title: "Le mauvais fil", place: "ferronniers",
      text: [
        "Il y a deux fils. Personne ne t'avait dit qu'il y en avait deux. Celui que tu pinces rend un son de corde de luth, se rompt, et s'enfuit en fouettant dans le lambris ; et à l'autre bout de la salle, le rideau du dais, que ce fil-là tenait relevé, s'abat sur la table des Maîtres jurés au milieu de la phrase du Syndic.",
        "Il y a des rires, des cris, un grand remuement de velours. Quant au timbre, il est intact, et tu n'as plus le temps de chercher son fil. Tu espères, pour celui ou celle qui est en bas, que la confusion vaudra un silence.",
      ],
      choices: [{ label: "Regagner les toits", to: "Pm_fuite" }] },

    Pm_c_ruelle: { act: "P", title: "La cour", place: "ferronniers",
      text: [
        "Par l'escalier des combles, puis par celui des domestiques, tu descends jusqu'à la cour sans rencontrer personne : toute la livrée est aux flambeaux. C'est un puits carré, pavé, entre l'hôtel et le bâtiment du trésor. Une porte cochère donne sur la ruelle. Elle ferme par une barre, que les valets lèveront à minuit pour sortir la caisse, et rabattront derrière eux.",
        "Il faut qu'elle retombe mal. Qu'elle ait l'air close, et qu'une épaule suffise à la rouvrir, du dehors comme du dedans, quand on courra.",
      ],
      choices: [
        { label: "Limer le mentonnet de la barre, juste ce qu'il faut", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "monde:p:apprenti" }, v: 20 }, { if: { voie: "crocheteur" }, v: 10 }] },
          win: { fx: { flag: "monde:p:cour_tenue", ep: ["seance", 1200] }, to: "Pm_c_ruelle_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pm_c_ruelle_ko" } },
        { label: "Caler le gond d'un coin de bois, à coups de talon", test: { dom: "combat", diff: 0, label: "Combat", help: [{ if: { has: "monde:p:apprenti" }, v: 20 }] },
          win: { fx: { flag: "monde:p:cour_tenue", ep: ["seance", 1200] }, to: "Pm_c_ruelle_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pm_c_ruelle_ko" } },
      ] },
    Pm_c_ruelle_ok: { act: "P", title: "Une porte qui ment", place: "ferronniers",
      text: [
        "C'est fait. La barre repose dans son logement avec toute l'apparence de la vertu, et tient par l'épaisseur d'un ongle.",
        "Tu remontes te poster à la fenêtre de l'escalier. Minuit sonne. Deux valets traversent la cour, une caisse entre eux, le pas court des gens qui portent du précieux. Ils lèvent la barre, sortent, la laissent retomber. De la ruelle vient un bruit de sabots, une voix avinée, puis plus rien que tu puisses démêler d'ici.",
      ],
      choices: [{ label: "Regagner les toits", to: "Pm_fuite" }] },
    Pm_c_ruelle_ko: { act: "P", title: "Une barre honnête", place: "ferronniers",
      text: [
        "Le fer des Maîtres est du bon fer, et la barre d'une cour de serruriers a été posée par des gens qui pensaient à toi. Tu y laisses la moitié d'une lime et la peau de deux doigts ; elle retombe, quand tu l'essaies, avec le claquement franc d'une conscience tranquille.",
        "Des pas dans l'escalier de service. Tu n'as que le temps de regagner l'ombre. La porte fermera comme elle ferme tous les soirs : ceux de la ruelle devront faire sans toi.",
      ],
      choices: [{ label: "Regagner les toits", to: "Pm_fuite" }] },

    Pm_c_foire: { act: "P", title: "La foire, vue d'en haut", place: "ferronniers",
      text: [
        "Tu as ta corde, ta poutre et ton idée. Le Syndic se lève pour sa santé, la salle se tourne, et tu passes la rambarde.",
        "C'est à mi-descente que tu vois le reste. Près du socle, quelqu'un que tu connais est déjà là, penché vers la cloche avec l'aplomb d'un huissier. Par la porte des cuisines, restée ouverte, monte de la ruelle un bruit de dispute et de sabots. Vous êtes trois à voler la même serrure, de trois côtés, à la même minute, et la seule personne de la maison qui l'ignore encore est le Syndic, parce qu'il parle.",
      ],
      choices: [
        { label: "Tant pis : toucher le socle et prendre ce qui s'y trouve", test: { dom: "nature", diff: -10, label: "Nature", help: [{ if: { has: "monde:p:ancrage" }, v: 15 }, { if: { has: "monde:p:mecanisme" }, v: 15 }] },
          win: { fx: { flag: "monde:p:foire_main", ep: ["seance", 1200] }, to: "Pm_c_foire_ok" }, lose: { fx: { pv: -3, ep: ["seance", 600] }, to: "Pm_c_foire_ko" } },
      ] },
    Pm_c_foire_ok: { act: "P", title: "À trois sur un socle", place: "ferronniers",
      text: [
        "Tes pieds touchent le chêne. La cloche est déjà levée, le timbre sonne déjà, quelqu'un crie déjà : il ne reste, de tout ce que tu avais prévu, que la serrure elle-même, et une main amie qui te la fourre dans les bras en soufflant « Monte ! ».",
        "Tu montes. La salle hurle. Une bonne moitié des convives croit à un divertissement et applaudit.",
      ],
      choices: [{ label: "Les toits !", to: "Pm_fuite" }] },
    Pm_c_foire_ko: { act: "P", title: "Le lustre", place: "ferronniers",
      text: [
        "La corde tourne. Tu tournes avec elle, lentement, au-dessus des fromages, et ton talon accroche le grand lustre, qui se met à osciller en semant de la cire chaude sur les perruques. Le timbre sonne. Tout le monde crie. Tu touches le socle des deux genoux, trop tard pour y prendre quoi que ce soit : la cloche est vide, la serrure court déjà vers une porte dans d'autres bras que les tiens.",
        "Tu remontes à la force des poignets, sous une grêle de petits pains.",
      ],
      choices: [{ label: "Les toits !", to: "Pm_fuite" }] },

    // ------------------------------------------------------------ away over the roofs
    Pm_fuite: { act: "P", title: "Les ardoises, au pas de course", place: "ferronniers",
      text: [
        "La lucarne, le froid, les ardoises. La rue des Ferronniers gronde sous toi, et dans ce grondement tu n'as pas le loisir de démêler la fête de la poursuite. La lanterne des morts brûle au faîte, indifférente.",
        "Entre toi et le pignon du gantier, le chéneau. Entre le pignon et la cour du tonnelier, une venelle large de sept pieds. Derrière, dans les combles, des pas, ou l'idée que tu t'en fais.",
      ],
      urgent: 25,
      choices: [
        { label: "Sauter la venelle", test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { ep: ["perso", 400] }, to: "Pm_fuite_ok" }, lose: { fx: { pv: -3 }, to: "Pm_fuite_ko" } },
        { label: "Te laisser glisser par la gouttière du gantier", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 400] }, to: "Pm_fuite_ok" }, lose: { fx: { pv: -2 }, to: "Pm_fuite_ko" } },
        { label: "Te tapir derrière une souche et laisser passer l'orage", timeout: true, to: "Pm_fuite_cache" },
      ] },
    Pm_fuite_ok: { act: "P", title: "De l'autre côté", place: "ferronniers",
      text: [
        "Tes semelles retrouvent quelque chose de ferme, et tes mains aussi. Tu descends dans la cour du tonnelier par une pile de douelles, et la nuit des Bas-Fonds se referme sur toi, avec son odeur de vase et de limaille, qui n'a jamais senti si bon.",
      ],
      choices: [{ label: "Dévaler l'escalier des Cent-Verrous", to: "Pc_retour", big: true }] },
    Pm_fuite_ko: { act: "P", title: "Sept pieds", place: "ferronniers",
      text: [
        "Tu arrives de l'autre côté, mais par morceaux : un genou d'abord, sur une arête, puis l'épaule, puis le reste, en vrac, dans un tas de copeaux que le tonnelier garde là pour ses feux et que tu bénis. Tu te relèves. Tout fonctionne, avec des protestations.",
      ],
      choices: [{ label: "Boiter jusqu'à l'escalier des Cent-Verrous", to: "Pc_retour", big: true }] },
    Pm_fuite_cache: { act: "P", title: "Derrière la souche", place: "ferronniers",
      text: [
        "Tu te colles à la brique tiède d'une cheminée et tu attends, le cœur dans les oreilles. Une lanterne paraît à la lucarne, promène son rond jaune sur les ardoises, s'attarde au chéneau. Une voix dit : « Y a que les chats, là-haut. » La lanterne rentre.",
        "Tu laisses passer encore le temps de trois Pater, que tu ne récites pas. Puis tu redescends par le pignon du gantier, sans hâte, comme quelqu'un qui rentre de moucher une lanterne.",
      ],
      choices: [{ label: "Regagner les Bas-Fonds", to: "Pc_retour", big: true }] },
  },

  extras: {
    clues: {
      g_toit: { rev: "G", text: "Un Gant-Noir dévissait un châssis sur le toit des Maîtres, le soir de la Saint-Fer : quelqu'un a commandé la Serrure-Reine à deux boutiques." },
      g_cocarde: { rev: "G", text: "Selon Pipeau, des Gants-Noirs : l'amateur qui a commandé la Serrure-Reine à Sans-Bruit a un valet en bottes de cavalier, cocarde cramoisie sous le manteau." },
      j_ouvriere: { rev: "J", text: "Dans les combles des Maîtres, sous le clou vide de la plus ancienne Serrure-Reine : « Chef-d'œuvre de Me Aubry Crochemore. Remis à la Tour, sur ordre, avec son ouvrière. »" },
      r_blanc: { rev: "R", text: "Crépin, apprenti : le jour de la Saint-Fer, à quatre heures, le Remonteur Balancier est sorti du cabinet du Syndic « blanc comme un linge » et n'a pas présidé le jury." },
    },
  },
};
