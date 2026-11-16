// Act I, the voice (post `a1` = voix), first half: the place aux Heures before four o'clock. Maître Crochemore at the
// fountain of forty dials, a face from the père Balthazar, a card of invitation, and the door of the hôtel de ville.
// The reception itself is a1_voix2.
// Sets: monde:a1:crochemore (the president of the Heures has taken to the voice). Personal: a1:v_envoye | a1:v_gazetier
// | a1:v_laquais (the costume), a1:v_carte (holds a card), a1:v_instruit (has read the Mercure), a1:v_remarque.
var SANS = function (f) { return { not: { has: f } }; };
var COSTUME = { any: [{ has: "a1:v_envoye" }, { has: "a1:v_gazetier" }, { has: "a1:v_laquais" }] };

module.exports = {
  passages: {
    A1v_place: { act: "I", title: "La place aux Heures", place: "heures", hub: true, backName: "la place aux Heures",
      fx: { until: 11 },
      text: [
        { first: true, text: "La place aux Heures est le seul endroit d'Aiguemorne où l'on ne sache jamais l'heure qu'il est. Quarante horlogers y tiennent boutique, et chacun a mis à sa façade un cadran qui est sa profession de foi : il y en a de dorés, d'émaillés, à lune, à jacquemarts, un qui marque les marées d'une mer que personne ici n'a vue. Aucun ne s'accorde avec son voisin. L'écart va d'une minute à un quart d'heure, et la guilde y voit une preuve de la liberté de l'art." },
        { first: true, text: "Au centre, une fontaine à vasque porte sur son fût quarante petits cadrans de bronze, un par maître, que l'eau fait marcher. Un petit homme sec, en habit puce, est monté sur la margelle, une clef à la main, et les règle l'un après l'autre en leur parlant." },
        { first: true, text: "Le fond de la place est fermé par l'hôtel de ville : un perron, six colonnes, et au fronton une horloge monumentale, la seule ici qui ait le droit d'avoir raison. On y tend des draperies vertes pour la réception. À quatre heures précises, les portes s'ouvriront ; au dernier coup, dit-on, elles se referment, et le Gouverneur lui-même attendrait dehors." },
        { again: true, text: "La place, ses quarante cadrans en désaccord, la fontaine, l'hôtel de ville tendu de vert." },
        { if: { all: [COSTUME, { has: "a1:v_carte" }] }, text: "Tu as un visage et un carton. Il ne manque plus que l'heure." },
      ],
      choices: [
        { label: "Approcher le petit homme de la fontaine", to: "A1v_fontaine", hide: { any: [{ seen: "A1v_croch_ok" }, { seen: "A1v_croch_ko" }] } },
        { label: "Monter rue des Ferronniers, chez le père Balthazar", to: "A1v_fripier", hide: COSTUME },
        { label: "Te procurer un carton d'invitation", to: "A1v_carton", hide: { has: "a1:v_carte" } },
        { label: "Acheter le Mercure d'Aiguemorne au crieur, et le lire sur un banc", if: { gold: { min: 1 } }, fx: { gold: -1, flag: "a1:v_instruit", ep: ["perso", 200] }, to: "A1v_mercure", hide: { has: "a1:v_instruit" } },
        { label: "Quatre heures approchent : gagner le perron", to: "A1v_perron", big: true, if: COSTUME, why: "Il te faut d'abord un personnage : on n'entre pas chez les Heures avec la figure de la Clef Tordue." },
      ] },

    // ------------------------------------------------------------ Crochemore at the fountain
    A1v_fontaine: { act: "I", title: "L'homme qui règle la fontaine", place: "heures",
      text: [
        "« Vingt secondes ! Vingt secondes d'avance, celui de Gauvain ! Il l'aura réglé sur son estomac. » Le petit homme donne un tour de clef rageur, saute au cadran suivant avec une agilité de moineau, et tire de son gilet une montre. Il en a trois, sur trois chaînes. Il les consulte toutes, l'une après l'autre, d'un air de juge qui confronte des témoins.",
        "Il a des favoris blancs en bataille, des bésicles, un nez busqué, et la figure d'un homme à qui le monde entier doit une explication. Il t'aperçoit au pied de la margelle.",
        "« Vous ! Quelle heure avez-vous ? » Tu n'as pas de montre. Il lève les bras au ciel. « Naturellement. Personne n'a l'heure. On a des opinions. Je suis Zéphyrin Crochemore, président des Heures, et je passe ma vie au milieu de gens qui ont des opinions sur un fait. »",
        "Crochemore. Le nom est gravé au pied de la Tour, dans le bronze : *Aubry Crochemore a fait cela.*",
      ],
      fx: { met: "crochemore" },
      choices: [
        { label: "« Crochemore ? Comme celui du Juge ? »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { flag: ["monde:a1:crochemore", "a1:v_carte"], ep: ["perso", 600] }, to: "A1v_croch_ok" }, lose: { to: "A1v_croch_ko" } },
        { label: "Lui demander pourquoi l'horloge de la citadelle retarde entre sept et huit", test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { flag: ["monde:a1:crochemore", "a1:v_carte"], ep: ["perso", 600] }, to: "A1v_croch_ok" }, lose: { to: "A1v_croch_ko" } },
        { label: "Le laisser à ses quarante cadrans", back: "A1v_place" },
      ] },
    A1v_croch_ok: { act: "I", title: "L'arrière-petit-fils", place: "heures",
      text: [
        "Tu as mis le doigt sur le ressort. Il descend de sa margelle, range ses trois montres, et te prend par un bouton.",
        "« Mon bisaïeul. Aubry. Le plus grand mécanicien que cette ville ait porté, et elle l'a porté comme elle porte tout : sans comprendre. Vous savez ce qu'on dit dans les rues ? Que le Juge est un automate. Un automate ! Comme un canard qui bat des ailes ! » Il en étouffe. « Un automate répète. Le Juge *décide*. Aubry Crochemore a fait une machine qui pèse des raisons, monsieur, madame, je ne sais, peu importe : une balance d'idées. Il y a mis onze ans. Il en est mort. Et il a emporté le plan, de sorte que je suis le président d'une guilde d'horlogers dont aucun, moi compris, ne saurait dire comment marche la plus belle horloge du monde. »",
        "Il lâche ton bouton, le reprend.",
        "« Je l'ai vue deux fois. La Chambre. Aux deux dernières Septaines, derrière les Clavaires, pour constater que le mouvement était en état. On me laisse trois minutes, on me montre un dos de bronze et un tambour. Trois minutes ! Pour l'œuvre de mon sang ! » Il te regarde soudain avec une bienveillance terrible, celle des gens qui ont trouvé un auditeur. « Vous m'écoutez, vous. C'est rare. Venez ce soir à la réception, je vous montrerai mon petit Juge. Tenez. » Il tire de sa poche un carton vert, gravé d'un sablier, et te le fourre dans la main. « Quatre heures. Précises. »",
      ],
      choices: [{ back: "A1v_place" }] },
    A1v_croch_ko: { act: "I", title: "Une opinion", place: "heures",
      text: [
        "Tu dis une chose sur le Juge, ou sur l'horloge, qui ressemble à ce que disent les gens. Maître Crochemore tire aussitôt une de ses montres, celle de gauche, la regarde, et la remet : c'est le geste qu'il a pour signifier qu'on lui fait perdre un temps mesuré.",
        "« Voilà. Une opinion. » Il remonte sur sa margelle. « Revenez quand vous aurez un fait. »",
      ],
      choices: [{ back: "A1v_place" }] },

    // ------------------------------------------------------------ a face
    A1v_fripier: { act: "I", title: "Chez le père Balthazar, de jour", place: "ferronniers",
      text: [
        "Le réduit du père Balthazar, au grand jour, a perdu son mystère et gardé son odeur. Le vieux reprise une soutane sur le pas de sa porte.",
        { if: { any: [{ has: "p:v_marchand" }, { has: "p:v_musicien" }, { has: "p:v_valet" }] }, text: "« Tiens. Mon locataire d'hier. » Il te regarde par-dessus son aiguille. « L'habit est revenu sans trou. Je n'en dirais pas autant de la réputation des Maîtres. Je ne demande rien, notez. Je loue. »", else: "« La Saint-Fer hier, les Heures aujourd'hui. » Il ne lève pas les yeux de son aiguille. « Les serruriers, on y entre avec de l'aplomb. Les horlogers, il faut de l'exactitude : ces gens-là regardent les boutons. Je loue, je ne demande rien. »" },
        "Il a sorti trois défroques, comme toujours. Il doit lire la gazette.",
      ],
      choices: [
        { label: "L'habit gris de voyage et le portefeuille de maroquin : l'envoyé d'une ville lointaine, qui veut commander une horloge publique", if: { gold: { min: 20 } }, fx: { gold: -20, flag: "a1:v_envoye" }, to: "A1v_fripier_choix" },
        { label: "L'habit noir râpé, l'écritoire en sautoir, la plume à l'oreille : le gazetier du Mercure", if: { gold: { min: 10 } }, fx: { gold: -10, flag: "a1:v_gazetier" }, to: "A1v_fripier_choix" },
        { label: "La livrée verte des Heures, avec ses boutons en forme de cadran : un laquais de la guilde", if: { gold: { min: 6 } }, fx: { gold: -6, flag: "a1:v_laquais" }, to: "A1v_fripier_choix" },
      ] },
    A1v_fripier_choix: { act: "I", title: "Un personnage", place: "ferronniers",
      text: [
        { if: { has: "a1:v_envoye" }, text: "L'habit gris te va. Le portefeuille de maroquin est vide ; le père Balthazar y glisse, pour le gonfler, trois vieux numéros du Mercure. « Un envoyé, ça parle peu et ça compte beaucoup. Laissez-les vous faire la cour. Les horlogers vendent ; c'est leur faiblesse. »" },
        { if: { has: "a1:v_gazetier" }, text: "L'habit noir est lustré aux coudes, ce qui est exact. Le père Balthazar te tache lui-même le majeur avec de l'encre. « Un gazetier a le droit de tout demander, et personne n'est tenu de lui répondre. Mais tout le monde a peur d'être mal imprimé. C'est votre fonds. »" },
        { if: { has: "a1:v_laquais" }, text: "La livrée verte a des boutons de cuivre gravés d'un cadran, et sur chacun le graveur a mis une heure différente. Le père Balthazar te rajuste le col. « Un laquais n'adresse pas la parole. Il verse, il tient les portes, il entend. Vous n'approcherez personne ; tout le monde vous approchera. »" },
        "Il se remet à sa soutane. « L'habit rentre demain. Sans trou. »",
      ],
      choices: [{ back: "A1v_place" }] },

    // ------------------------------------------------------------ a card
    A1v_carton: { act: "I", title: "Un carton vert", place: "heures", backName: "la question du carton",
      text: [
        { first: true, text: "L'invitation des Heures est un carton vert, gravé d'un sablier, où le nom de l'invité est porté à la plume par le secrétaire de la guilde. Il en a été tiré deux cents. Les horlogers, qui numérotent tout, les ont numérotés." },
        { first: true, text: "Il y a trois façons d'en avoir un quand on n'est pas des deux cents : le faire, le prendre, ou l'acheter." },
        { again: true, text: "Un carton vert, gravé d'un sablier. Le faire, le prendre, ou l'acheter." },
      ],
      choices: [
        { label: "Le faire : chez l'écrivain public de la rue Saint-Éloi", to: "A1v_faussaire", hide: { seen: "A1v_faussaire_ko" } },
        { label: "Le prendre : chez le barbier, où ces messieurs se font poudrer avant quatre heures", to: "A1v_barbier", hide: { seen: "A1v_barbier_ko" } },
        { label: "L'acheter : à un apprenti qui aimerait mieux aller à la pêche", to: "A1v_apprenti", hide: { seen: "A1v_apprenti_ko" } },
        { back: "A1v_place" },
      ] },
    A1v_faussaire: { act: "I", title: "Le bossu aux doigts noirs", place: "ferronniers",
      text: [
        "Le troisième écrivain public de la rue Saint-Éloi est un bossu, logé dans une guérite de planches, qui taille ses plumes avec un canif de chirurgien. Sur sa tablette : *Lettres d'amour, placets, mémoires. Discrétion.* La Douairière dit qu'il faut lire le dernier mot comme une enseigne.",
        "Tu lui décris le carton. Il t'écoute en regardant ailleurs.",
        "« Un sablier gravé, du bristol vert. J'ai le bristol. Le sablier, je le ferai au trait, à la plume ; de près, un graveur verrait la différence. Vous comptez le montrer à des graveurs ? »",
        "« À des horlogers. »",
        "« C'est pire. » Il soupire. « Quinze sous. Et il me faut un nom qui soit sur leur liste, ou qui puisse y être. »",
      ],
      choices: [
        { label: "Payer, et lui dicter un nom qui sonne juste", if: { gold: { min: 15 } }, test: { dom: "savoir", diff: 10, label: "Savoir", help: [{ if: { has: "a1:v_instruit" }, v: 15 }, { if: { has: "a1:v_gazetier" }, v: 10 }] }, win: { fx: { gold: -15, flag: "a1:v_carte", ep: ["perso", 400] }, to: "A1v_faussaire_ok" }, lose: { fx: { gold: -15 }, to: "A1v_faussaire_ko" } },
        { label: "Trop cher pour un trait de plume", back: "A1v_carton" },
      ] },
    A1v_faussaire_ok: { act: "I", title: "Un sablier à la plume", place: "ferronniers",
      text: [
        "Il y met un quart d'heure, la langue entre les dents. Le sablier naît sous sa plume, grain par grain. Il sèche l'encre à la poudre, souffle, et te tend le carton entre deux doigts.",
        "C'est un beau faux. Le nom que tu lui as dicté est de ceux que le secrétaire a pu oublier et qu'il n'osera pas contester. Quant au numéro, le bossu a choisi le cent quatre-vingt-dix-neuf. « Les derniers numéros vont aux gens qu'on invite à regret. Personne ne les regarde en face. »",
      ],
      choices: [{ back: "A1v_place" }] },
    A1v_faussaire_ko: { act: "I", title: "Un nom de trop", place: "ferronniers",
      text: [
        "Tu dictes un nom. Le bossu l'écrit, s'arrête, et lève pour la première fois les yeux sur toi.",
        "« Celui-là est mort à la Chandeleur. J'ai fait le faire-part. » Il repose la plume. « Je veux bien vendre de la discrétion. Je ne vends pas de quoi me faire pendre avec vous à la porte des Heures. » Il déchire le carton en quatre, proprement, et garde les quinze sous : c'était le prix du bristol.",
      ],
      choices: [{ back: "A1v_carton" }] },
    A1v_barbier: { act: "I", title: "Au Peigne d'Or", place: "heures",
      text: [
        "Le barbier de la place aux Heures a mis six chaises sur une file, et sur les six chaises six notables, la serviette au cou, la tête renversée, qui attendent leur poudre comme des tartes attendent le sucre. Leurs habits pendent à des patères, le long du mur, derrière un paravent.",
        "Un garçon balaie les cheveux. Le barbier va de chaise en chaise avec un soufflet, dans un nuage.",
        "Tu entres pour une barbe, ou pour attendre quelqu'un. Les patères sont à trois pas. D'une poche de gilet, sur la quatrième, dépasse un coin de bristol vert.",
      ],
      choices: [
        { label: "Passer derrière le paravent pendant le coup de soufflet", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { flag: "a1:v_carte", ep: ["perso", 400] }, to: "A1v_barbier_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_barbier_ko" } },
        { label: "Ressortir : tu n'aimes pas la poudre", back: "A1v_carton" },
      ] },
    A1v_barbier_ok: { act: "I", title: "La quatrième patère", place: "heures",
      text: [
        "Le soufflet part. Pendant trois secondes, la boutique entière est blanche, et six notables ferment les yeux en retenant leur souffle. C'est plus qu'il n'en faut.",
        "Le carton passe de la quatrième patère à ta manche. Tu ressors en te plaignant de l'attente. Sur le bristol, d'une belle anglaise : *Maître Onésime Gauvain, horloger juré.* Celui dont le cadran avance de vingt secondes. Il arrivera au perron les mains vides, jurera qu'on l'a volé, et personne ne le croira : un horloger qui perd son carton a dû le poser quelque part.",
      ],
      choices: [{ back: "A1v_place" }] },
    A1v_barbier_ko: { act: "I", title: "Un garçon qui balaie", place: "heures",
      text: [
        "Le soufflet part, la boutique blanchit, et tu es derrière le paravent. Le garçon aussi. Il balayait là, accroupi, sans bruit, et tu lui marches sur la main.",
        "Il crie. Six têtes poudrées se redressent ensemble. Tu dis que tu cherchais le cabinet ; le barbier, son soufflet au poing, te montre la porte de la rue avec une courtoisie de pistolet. Tu sors blanc{he} jusqu'aux sourcils, et six notables qui seront tout à l'heure à la réception ont eu le loisir de voir de près quelqu'un qui fouillait près de leurs gilets.",
      ],
      choices: [{ back: "A1v_carton" }] },
    A1v_apprenti: { act: "I", title: "Un apprenti qui regarde la rivière", place: "heures",
      text: [
        "Chaque maître des Heures a droit à un carton pour son premier apprenti, afin que la jeunesse voie le monde et apprenne à se tenir. La jeunesse, en général, aimerait mieux autre chose.",
        "Tu en trouves un sur le parapet du quai Neuf, les pieds pendants, qui regarde la Morne avec nostalgie. Il a seize ans, un tablier vert, un carton vert qui dépasse de sa poche, et dans les yeux la mélancolie d'un garçon à qui l'on a promis quatre heures de discours.",
        "« Ça se vendrait, ça ? » dis-tu en montrant le carton.",
        "Il le regarde comme s'il le découvrait. « Mon maître me tuerait. » Il réfléchit. « Combien ? »",
      ],
      choices: [
        { label: "Dix sous, et tu lui indiques un coin à goujons", if: { gold: { min: 10 } }, fx: { gold: -10, flag: "a1:v_carte", ep: ["perso", 300] }, to: "A1v_apprenti_ok" },
        { label: "Rien : « Je te rends service. Je dirai que tu y étais, et que tu t'es bien tenu. »", test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { flag: "a1:v_carte", ep: ["perso", 400] }, to: "A1v_apprenti_ok" }, lose: { to: "A1v_apprenti_ko" } },
      ] },
    A1v_apprenti_ok: { act: "I", title: "Un carton contre une après-midi", place: "heures",
      text: [
        "Le carton change de poche. L'apprenti a déjà ôté son tablier et le roule sous son bras.",
        "« C'est au nom de Maître Lechantre, premier apprenti. Vous avez qu'à dire que vous êtes moi. » Il te regarde, hésite. « Enfin, que vous êtes mon cousin. Ma cousine. Que je suis malade. » Il dévale l'escalier du quai, et tu l'entends siffler jusqu'au pont.",
      ],
      choices: [{ back: "A1v_place" }] },
    A1v_apprenti_ko: { act: "I", title: "Un apprenti vertueux", place: "heures",
      text: [
        "« Vous direz que j'y étais ? » L'apprenti te considère, et tu vois passer sur sa figure le soupçon lent des garçons à qui l'on a déjà vendu une montre sans rouages. « Et quand mon maître me cherchera dans la salle ? »",
        "Il remet le carton au fond de sa poche, et sa main par-dessus. « J'irai. Je m'ennuierai. Mais j'irai. » Tu viens de faire un honnête homme, ce qui n'était pas le but de la matinée.",
      ],
      choices: [{ back: "A1v_carton" }] },

    // ------------------------------------------------------------ the gazette
    A1v_mercure: { act: "I", title: "Le Mercure d'Aiguemorne", place: "heures",
      text: [
        "Le Mercure paraît le jeudi, sur quatre pages, et se lit en un quart d'heure. Tu le lis en entier, annonces comprises : c'est dans les annonces qu'une ville dit la vérité.",
        "*Monseigneur le Doyen des Morts présidera en personne, à Ossevaux, les offices de la fête des Trépassés. Le chapitre fait savoir qu'on recevra les pleureuses à gages jusqu'à la veille.*",
        "*Les forges de Ferrières couleront, le troisième dimanche, la grande cloche offerte à la ville par les Maîtres du Fer. M. le Syndic Quincarnon y invite MM. les jurés.*",
        "*M. le comte de Brandelis, Connétable, ouvrira ses Grandes Chasses à la Saint-Hubert. Il y aura tournoi, bal masqué, et, comme chaque année, table ouverte.* Une main anonyme, à la rédaction, a ajouté : *et table de jeu.*",
        "En dernière page, entre un remède contre la goutte et une chienne perdue : *La guilde des Heures cherche, pour la Tour, un aide au Remonteur, jeune, discret, sachant graisser. S'adresser au président.* L'annonce est barrée d'un filet, avec la mention : *retirée à la demande de M. le Syndic.*",
      ],
      fx: { clue: "s_annonce" },
      choices: [{ back: "A1v_place" }] },

    // ------------------------------------------------------------ four o'clock
    A1v_perron: { act: "I", title: "Quatre heures précises", place: "heures",
      fx: { until: 16 },
      text: [
        "À quatre heures moins deux minutes, la place aux Heures offre un spectacle que les étrangers viennent voir : deux cents personnes en habit de cérémonie, rangées au pied d'un perron, qui regardent toutes la même horloge et dont pas une ne monte. Arriver en avance, chez les horlogers, est une faute aussi grave qu'arriver en retard. On attend l'heure comme on attend la marée.",
        "Le premier coup tombe. La file s'ébranle d'un seul mouvement. En haut des marches, entre deux colonnes, le secrétaire de la guilde prend les cartons, les regarde, les numérote à haute voix, et les pique sur un clou.",
        { if: { has: "a1:v_laquais" }, text: "Toi, tu portes la livrée verte. Les laquais entrent par le côté, sous la voûte des cuisines, où un maître d'hôtel compte ses gens." },
      ],
      choices: [
        { label: "Monter les marches, le carton à la main", if: { all: [{ has: "a1:v_carte" }, SANS("a1:v_laquais")] }, fx: { ep: ["perso", 300] }, to: "A1v_vestibule", hide: { any: [SANS("a1:v_carte"), { has: "a1:v_laquais" }] } },
        { label: "Monter sans carton, et parler plus vite que le secrétaire ne lit", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "a1:v_gazetier" }, v: 20 }, { if: { has: "a1:v_envoye" }, v: 15 }, { if: { has: "monde:a1:crochemore" }, v: 20 }] }, win: { fx: { ep: ["perso", 500] }, to: "A1v_vestibule" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_perron_ko" }, hide: { any: [{ has: "a1:v_carte" }, { has: "a1:v_laquais" }] } },
        { label: "Prendre la file des laquais, un plateau sous le bras", if: { has: "a1:v_laquais" }, test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "A1v_vestibule" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_perron_ko" }, hide: SANS("a1:v_laquais") },
      ] },
    A1v_perron_ko: { act: "I", title: "Le dernier coup", place: "heures",
      text: [
        "Cela accroche. Un mot de trop, un bouton de travers, un numéro qui manque ; on te prie d'attendre sur le côté, avec ces égards qu'on a pour les gens dont on va s'occuper.",
        "Le quatrième coup tombe. Les portes de l'hôtel de ville se ferment, avec une douceur d'écluse, sur le dernier dos.",
        "Tu restes seul{e} sur le perron, devant six colonnes. C'est alors qu'une petite porte s'ouvre, sous la voûte, et qu'un marmiton en sort en courant, un panier vide au bras : on a oublié la glace. Il laisse la porte battre. Tu y es avant qu'elle retombe. Les cuisines, un escalier de service, un couloir ; tu rajustes ton col devant une vitre, et tu entres dans la réception des Heures par la porte des sorbets, avec dix minutes de retard, c'est-à-dire, ici, déshonoré{e}.",
      ],
      choices: [{ label: "Entrer quand même", to: "A1v_vestibule" }] },
    A1v_vestibule: { act: "I", title: "Le vestibule des Heures", place: "heures",
      text: [
        "Le vestibule de l'hôtel de ville est dallé de noir et de blanc, et l'on a posé sur chaque dalle noire, pour la réception, un chiffre de laiton : de sorte qu'on traverse un cadran, à pied, sous l'œil d'un suisse qui a l'air d'attendre qu'on s'arrête sur la bonne heure.",
        "Au fond, deux battants ouverts sur une salle d'où vient un bruit que tu n'as jamais entendu nulle part : celui de deux cents conversations sur un fond de plusieurs centaines de tic-tac. C'est la salle des Cadrans. Les Heures y exposent, une fois l'an, tout ce que la guilde a produit de plus fin ; et pour que nul n'en ignore, on a tout remonté.",
        "Contre le mur du vestibule, sur un pupitre, un gros registre est ouvert, une plume en travers. Un commis en manches de lustrine y écrit sous la dictée d'un homme botté, qui sent le cheval.",
      ],
      choices: [{ label: "Entrer dans la salle des Cadrans", to: "A1v_salon", big: true }] },
  },

  extras: {
    clues: {
      s_annonce: { rev: "S", text: "Le Mercure : la guilde des Heures cherchait un aide pour le Remonteur, à la Tour. L'annonce a été « retirée à la demande de M. le Syndic »." },
    },
  },
};
