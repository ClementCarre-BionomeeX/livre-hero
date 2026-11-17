// What only the second reading opens: Baptistin's other riddle and his grandmother's memory of the year 312, the
// stable where one can stand up instead of hiding, the hermit's cell and the herbal of Brother Anselme, Jeannot's
// basket, Tobie as an accomplice, and the night that follows the stolen Tables down to the chapel.
module.exports = {
  // ------------------------------------------------------------------ act I
  S_jeannot: { act: "I", title: "Le panier lourd", place: "refuge", second: true,
    fx: { flag: "jeannot:panier" },
    text: [
      "Tu demandes à Jeannot où il l'a monté, ce panier lourd qu'il ne fallait pas secouer.",
      "« À la Veille. » Il tire sur la sangle, important. « Mais pas par la porte. Le frère a dit de le poser au pied de la tour, côté ouest, sous la petite fenêtre bouchée, celle qui a des pierres dedans. Il a dit qu'il viendrait le prendre lui-même, que c'était pour la chapelle du haut. » Il réfléchit. « Il n'y a pas de chapelle, en haut. »",
      "Il fait claquer sa langue, et la mule repart sans attendre son avis.",
    ],
    choices: [
      { label: "Finir la montée jusqu'au refuge avec Jeannot", to: "A_refuge" },
    ] },

  S_devinette2: { act: "I", title: "L'autre devinette", place: "refuge", second: true, puzzle: "p_baptistin2",
    text: [
      "Tu as trouvé l'aiguille si vite que Baptistin en reste la louche en l'air, vexé comme un joueur de dés qui voit sortir le double six chez le voisin.",
      "« Bon, dit-il. Celle-là, tu la connaissais. Tout le monde la connaît, elle est vieille comme la montagne. » Il se penche, baisse la voix, l'œil plissé. « Mais j'en ai une autre. Celle de ma grand-mère. Je ne la pose qu'aux gens qui m'agacent. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  S_grandmere: { act: "I", title: "La grand-mère de Baptistin", place: "refuge", second: true,
    fx: { flag: "anselme:herbier", meet: ["baptistin"] },
    text: [
      "Baptistin reste un long moment sans rien dire, ce qui chez lui tient du prodige.",
      "« L'écho, répète-t-il. Elle disait que l'écho vit deux fois dans la montagne, et que certaines nuits aussi. Elle disait ça en regardant la Veille. » Il s'assoit lourdement sur le banc. « Elle avait seize ans, la dernière fois que la Glaneuse est passée. Elle faisait la soupe ici, déjà. Un petit porteur est monté, un gamin, avec son insigne cousu de travers. Il a payé en devinette. Il a gravé une comète sur le banc. »",
      "« Et le lendemain matin, avant le jour, il est redescendu en courant, blanc comme un linge, avec un sac de cahiers serré contre lui comme un nouveau-né. Il a dit que le maître était mort. Il a dit qu'il l'avait vu mourir deux fois. On l'a cru fou. Ma grand-mère, elle, ne l'a pas cru fou. »",
      "« Parce qu'une heure avant lui, l'ermite était descendu. Frère Anselme. Il portait un ballot dans une couverture qui sentait le vin chaud, et il a demandé à ma grand-mère s'il pouvait brûler des papiers dans son four à pain. Elle a dit non. Elle n'a jamais su dire pourquoi elle avait dit non. » Baptistin frotte ses grosses mains l'une contre l'autre. « Elle disait aussi que ce frère-là écrivait ses recettes de simples à l'envers, dans un gros livre relié de bois, pour que les sots ne s'empoisonnent pas en le lisant. Elle trouvait que c'était une drôle de charité. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  S_ecurie_r2: { act: "I", title: "Il y a quelqu'un dans l'écurie", place: "refuge", second: true,
    fx: { flag: "helis:alliee", meet: ["helis", "ferrand"] },
    text: [
      "« Il y a quelqu'un dans l'écurie », dit Ferrand. Cette fois, au lieu de te glisser entre les mulets, tu sors de l'ombre.",
      "Le capitaine est sur toi en deux pas. Sa main se referme sur ton col avec la précision d'un étau qu'on a souvent graissé. Dame Hélis lève sa lanterne et t'examine de haut en bas, comme on examine un cheval qu'on soupçonne d'avoir été maquillé.",
      "« Un porteur juré, dit-elle. Qui écoute aux cloisons. Le Collège forme bien ses gens. »",
      "Tu lui dis tout, ou presque. Le Chapitre qui veut que la nuit soit un signe. Le coffre qu'on videra à deux heures et demie. Le vieil homme qui tombera à trois heures. Tu lui dis aussi ce qu'elle a sous ses gants : des taches d'encre, parce qu'elle écrit elle-même le courrier du Prince.",
      "Le silence dure assez longtemps pour qu'une mule ait le temps de soupirer. Puis Dame Hélis fait un signe, et la main du capitaine quitte ton col.",
      "« Je ne crois pas aux prodiges, dit-elle. Je crois aux gens qui en savent trop. Ils sont plus rares, et ils coûtent plus cher. » Elle remet son gant. « Montez devant nous. À la Veille, vous me trouverez quand vous aurez besoin de moi. Et vous aurez besoin de moi : personne ne croit un porteur. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  S_cellule: { act: "I", title: "La cellule du frère", place: "ermitage", second: true,
    text: [
      "Frère Cosme est au fond du potager, penché sur ses ruches, et il les couvre de paille fraîche en leur parlant à voix basse, comme un confesseur. Tu pousses la porte de la cellule. Elle ferme au loquet, comme toutes les portes d'ermite : chez les saints, la confiance tient lieu de serrure, à ce qu'on dit.",
      "Il fait chaud, dedans, d'une chaleur de four éteint. L'alambic de cuivre luit sur la table. Les bouquets de plantes sèches pendent du plafond par dizaines, tête en bas, et frôlent ta nuque au passage avec une familiarité de chauves-souris. Une odeur épaisse de cire, de miel, de poussière végétale, et au fond de l'odeur, très loin, comme une note tenue sous un cantique, l'amande.",
      "Sur une étagère, entre une Bible et un pot de miel, un gros livre relié de deux planches de bois, fermé par une lanière de cuir.",
      { if: { has: "anselme:herbier" }, text: "Un livre relié de bois. Tu sais à qui il a appartenu." },
    ],
    choices: [
      { label: "Ouvrir le livre relié de bois", hide: { seen: "S_herbier" }, fx: { item: "page_anselme" }, to: "S_herbier" },
      { label: "Regarder les fioles de l'alambic", hide: { seen: "S_fioles" }, to: "S_fioles" },
      { back: "A_ermitage" },
    ] },

  S_fioles: { act: "I", title: "Les fioles", place: "ermitage", second: true,
    text: [
      "Les fioles sont alignées par taille, de la plus grosse à la plus petite, comme des enfants pour une photographie de famille qu'aucun peintre ne fera jamais. Chacune porte une étiquette d'une écriture ronde et soignée : *Mélisse. Thym. Sauge des prés. Hysope. Miel rosat.*",
      "La dernière, la plus petite, est nue, sans étiquette, et vide. Elle a été rincée, et rincée encore, mais le bouchon de liège, lui, a bu ce qu'elle contenait, et il garde l'odeur comme une éponge garde l'eau : l'amande.",
      "À côté, sur un clou, une paire de gants de forgeron toute neuve, encore raide de la boutique.",
    ],
    choices: [
      { back: "S_cellule" },
    ] },

  S_herbier: { act: "I", title: "L'herbier de Frère Anselme", place: "ermitage", second: true, puzzle: "p_anselme",
    text: [
      "La lanière de cuir cède. Les planches s'ouvrent sur des pages épaisses, gondolées par l'humidité de soixante hivers. Sur la première, une écriture pointue, à l'encre devenue brune : *Herbier de Frère Anselme, des Veilleurs d'Escalle. Ce qui guérit, et ce qui ne guérit pas.*",
      "Les recettes se suivent, en clair, chacune sous un brin de plante séchée cousu au fil : la mauve, la bourrache, la reine-des-prés. Un ruban noir marque une page, une seule, où la plante cousue a été arrachée. La recette y est écrite tout entière en capitales qui ne font aucune langue, sous un titre en clair : *Pour le vieillard qui regarde trop haut. L'an 312, la nuit de la Glaneuse.*",
      "Tu arraches la page d'un coup sec. Le bruit du papier qui se déchire te paraît assez fort pour qu'on l'entende du fond du potager. Tu la plies dans ta chemise, tu refermes les planches, tu reboucles la lanière.",
    ],
    choices: [
      { back: "S_cellule" },
    ] },

  S_herbier_page: { act: "I", title: "Laurier dans la mélisse", place: "ermitage", second: true,
    fx: { item: "page_anselme" },
    text: [
      "Tu relis la ligne en clair, et le froid de la montagne te rentre dans le dos par la porte entrouverte.",
      "*Laurier dans la mélisse.* Le reste de la page suit dans le même chiffre, et il se lit à présent tout seul : deux doigts d'eau de laurier, battue au mortier, tordue dans un linge. L'odeur se perd dans le citron de la mélisse. Le cœur s'arrête dans le quart d'heure, et le visage reste rose, comme celui d'un homme qui a couru dans le froid.",
      "Tout en bas, d'une main qui tremble un peu plus que dans le reste du livre : *Le Chapitre m'absout. Que Dieu me pardonne quand même. — A.*",
      "Dehors, Frère Cosme chante aux abeilles. Il chante faux, avec beaucoup de piété.",
    ],
    choices: [
      { back: "S_cellule" },
    ] },

  // ------------------------------------------------------------------ act II
  S_preuve_anselme: { act: "II", title: "La recette", place: "veille", second: true,
    fx: { flag: ["vellerin:sait", "vellerin:prevenu"] },
    text: [
      "Tu poses sur ses genoux la page de l'herbier. Il reconnaît l'écriture pointue avant d'avoir lu un mot, et sa bouche se tord.",
      "« Anselme. » Il lit. Il relit. *Pour le vieillard qui regarde trop haut.* « Sérac avait cinquante-deux ans. Il était le vieillard de quelqu'un, déjà. » Il pose la page sur le feu, se ravise, la reprend d'un geste vif, la tient à deux mains comme s'il craignait qu'elle s'envole par la cheminée.",
      "« Soixante et onze ans, dit-il. Il a écrit ça le soir même, en rentrant. Il l'a écrit à l'envers, dans le chiffre des enfants, parce qu'il savait qu'aucun chanoine n'aurait l'idée de regarder un livre dans un miroir. Et il l'a laissé dans sa cellule, à son successeur, comme on laisse un outil. » Il lève les yeux. « Cosme sait lire ce livre. Cosme l'a lu. »",
      "Il range la page dans sa poche, contre la flasque, et il tapote la poche. « Je ne boirai rien, cette nuit, qui sorte de cet ermitage. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il compte faire", to: "S_plan" },
    ] },

  S_tobie_r2: { act: "II", title: "Un complice de quatorze ans", place: "veille", second: true,
    fx: { flag: "tobie:complice", meet: ["tobie"] },
    text: [
      "Tu poses une main sur l'épaule de Tobie et tu lui dis que tu sais pour l'escalier de service. Il pâlit, puis rougit, puis choisit de prendre l'air outragé, ce qui à quatorze ans est la défense ordinaire de l'innocence et du crime.",
      "Tu lui dis que tu ne diras rien. Tu lui dis aussi que cette nuit, à trois heures, quelqu'un veut faire du mal au maître, et que tu as besoin de deux mains de plus, des mains qui passent partout sans que personne les regarde.",
      "Tobie te dévisage longtemps. Puis il pose son tampon de feutre, s'essuie les mains sur son tablier, et te tend la droite, grise de poudre. « Il m'a lu les étoiles quand j'avais la fièvre, dit-il. Toute une nuit. C'était très ennuyeux. » Il serre fort. « Qu'est-ce qu'il faut faire ? »",
    ],
    choices: [
      { back: "B_atelier" },
    ] },

  // ------------------------------------------------------------------ act III
  S_tobie_flasque: { act: "III", title: "Le tour de passe-passe", place: "veille", second: true,
    text: [
      "Tu prends Tobie à part, derrière la lunette, et tu lui expliques à voix basse : la flasque d'étain, dans la poche droite de la robe de chambre ; la petite bouteille vide que tu lui glisses dans la main ; la cruche d'eau, sur la table aux feuilles. Vider l'une dans l'autre, remplir la flasque à la cruche, la remettre en place. Le temps d'un Pater.",
      "Tobie hoche la tête, la mine grave d'un cardinal. Il attend que le maître se penche sur l'oculaire, cambré, une main dans le dos, l'autre sur la molette. Puis il s'approche, un chiffon à la main, sous prétexte d'essuyer le cuivre.",
    ],
    choices: [
      { label: "Faire diversion pendant que Tobie opère", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "S_tobie_flasque_ok" }, lose: { to: "S_tobie_flasque_ko" } },
    ] },

  S_tobie_flasque_ok: { act: "III", title: "Deux flasques", place: "veille", second: true,
    fx: { flag: "flasque:prise", item: "flasque" },
    text: [
      "Tu demandes à Dame Hélis, très fort, si elle a jamais vu la cour du Prince d'aussi haut. Elle te répond avec l'ironie d'une femme qui a vu la cour de beaucoup plus bas. Tout le monde regarde vers vous.",
      "Quand tu te retournes, Tobie est déjà à l'autre bout de la coupole, le chiffon roulé sous le bras, et il siffle entre ses dents un air qu'il invente à mesure. Il passe près de toi et laisse tomber dans ta poche, avec une adresse de tire-laine, la petite bouteille, bouchée serré.",
      "Dans la robe de chambre du maître dort à présent de l'eau de cruche. Dans ta poche, l'amande.",
    ],
    choices: [
      { back: "S_nuit" },
    ] },

  S_tobie_flasque_ko: { act: "III", title: "La main dans la poche", place: "veille", second: true,
    fx: { flag: "cosme:mefiant" },
    text: [
      "Tu cherches une diversion, et ta tête reste blanche comme une page. Tobie a déjà la main dans la poche de la robe de chambre quand le maître se redresse et se retourne, d'un bloc, comme une girouette sous un coup de vent.",
      "« Voleur ! Gibier de potence ! Polisseur de poches ! » Il attrape Tobie par l'oreille et le traîne jusqu'à l'échelle du toit sous une avalanche d'épithètes dont la moitié est en latin. Lise garde le nez sur sa page.",
      "Frère Cosme, lui, a tout vu. Il regarde la poche de la robe de chambre. Puis il te regarde, toi. Son sourire reste exactement à sa place.",
    ],
    choices: [
      { back: "S_nuit" },
    ] },

  S_chapelle_nuit: { act: "III", title: "La chapelle, à trois heures moins le quart", place: "ermitage", second: true,
    text: [
      "Tu descends derrière la lanterne, de loin, pierre après pierre, sur l'escalier de dalles verglacé où chaque marche est une décision. Le froid te mord les mains jusqu'à l'os. Au-dessus de toi, la Glaneuse s'étale sur tout le ciel, et ta propre ombre, sous elle, glisse devant toi sur les dalles, longue et pâle, comme si elle te précédait dans une maison où l'on n'a pas encore allumé.",
      "La lanterne entre dans la chapelle. Tu te colles contre le mur, sous la fenêtre.",
      "Par la vitre sale, tu vois Frère Cosme poser sa charge sur l'autel, dénouer la couverture, et soulever la dalle de l'autel, qui bascule sur un pivot, comme une trappe de cave. Il glisse dessous les quatre registres, un par un, avec soin, avec tendresse presque, comme on couche des enfants. Il rabat la dalle. Il s'agenouille. Il prie.",
      "Puis il se relève, souffle les deux cierges, reprend sa lanterne, et ressort. Il passe à trois pas de toi. Il remonte vers la Veille, d'un pas rapide, presque joyeux. Il veut voir la Lyre, lui aussi.",
    ],
    choices: [
      { label: "Entrer dans la chapelle et soulever la dalle de l'autel", to: "S_tables_reprises" },
    ] },

  S_tables_reprises: { act: "III", title: "Sous l'autel", place: "ermitage", second: true,
    fx: { flag: ["tables:sauvees", "tables:reprises"] },
    text: [
      "La chapelle sent la mèche chaude et l'encens refroidi. Tu tâtonnes jusqu'à l'autel. La dalle pivote sous ta paume avec un grondement sourd, et un souffle de cave te monte au visage.",
      "Les quatre registres sont là, couchés dans le noir, et la couverture qui sent le vin chaud. Tu les charges sur ton dos dans la couverture même, nouée comme le frère l'avait nouée. Ils pèsent le poids exact de cinquante ans de nuits blanches.",
      "Tu rabats la dalle. Dehors, au-dessus de l'épaule du mont, la Glaneuse descend vers la Lyre. Tu as vingt minutes de montée, chargé{e}, sur de la glace.",
    ],
    choices: [
      { label: "Remonter vers la Veille aussi vite que la glace le permet", fx: { until: 3 }, to: "S_trois_loin" },
    ] },

  S_trois_loin: { act: "III", title: "Trois heures, de loin", place: "veille", second: true,
    branch: [
      { if: { any: [{ has: "flasque:prise" }, { has: "vellerin:prevenu" }] }, to: "S_loin_vivant" },
      { to: "S_loin_mort" },
    ] },

  S_loin_vivant: { act: "III", title: "Le rire", place: "veille", second: true,
    fx: { flag: "vellerin:vivant" },
    text: [
      "Tu es à mi-pente, plié{e} en deux sous les registres, quand trois heures sonnent à la pendule de la coupole. Tu t'arrêtes. Tu écoutes. Tu n'entends que ton cœur et le vent.",
      "Puis, du haut de la tour, par la fente ouverte de la coupole, un rire descend sur la montagne. Un rire immense, triomphal, insupportable, qui roule sur les dalles et rebondit sur les rochers comme une avalanche de bonne humeur. L'écho le reprend, une fois, deux fois.",
      "Tu t'assois sur une marche verglacée, les Tables sur les genoux, et tu ris aussi, tout{e} seul{e}, dans le froid, jusqu'à ce que ça fasse mal.",
    ],
    choices: [
      { label: "Finir la montée", to: "S_demasque" },
    ] },

  S_loin_mort: { act: "III", title: "Le silence", place: "veille", second: true,
    fx: { flag: "vellerin:mort" },
    text: [
      "Tu es à mi-pente, plié{e} en deux sous les registres, quand trois heures sonnent à la pendule de la coupole. Tu t'arrêtes. Tu écoutes.",
      "Puis un cri, en haut. Celui de Lise. Puis plus rien que le vent.",
      "Tu finis la montée sans sentir tes jambes. Sous la coupole, le maître est couché au pied de la lunette, les yeux ouverts sur la fente, et Lise tient sa tête sur ses genoux. Elle lève vers toi un visage de pierre, et elle te tend quelque chose sans un mot : la flasque d'étain, qu'elle a ramassée par terre, et qui sent l'amande.",
      "Tu poses les Tables à côté du vieil homme. Il les aurait voulues là.",
    ],
    choices: [
      { label: "Prendre la flasque", fx: { item: "flasque" }, to: "S_demasque" },
    ] },
};
