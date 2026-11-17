// Act I, the hand (post `a1` = main), first half: up to the citadel, the inner ward (chapel, Plombs, guardroom,
// cistern, rampart walk), and the three ways into the Tour de l'Horloge-Close. The inside of the Tour is a1_main2.
// Sets: monde:a1:savinien (the chapel clerk is a friend). Personal: a1:m_alerte (the ward is wary), a1:m_releve (knows
// the noon relief), a1:m_pipeau (dealt with the Gant-Noir), a1:m_entree = sacristie | soupirail | hourd.
module.exports = {
  passages: {
    // ------------------------------------------------------------ the foot of the rock
    A1m_pied: { act: "I", title: "Le pied de la citadelle", place: "citadelle",
      fx: { until: 10 },
      text: [
        "La Ville-Haute finit où la roche commence. Passé la dernière maison, il y a une place nue, pavée de galets, que les gens d'ici appellent le Parvis et traversent en pressant le pas ; et au-delà, d'un seul jet, le rempart de la citadelle, quarante pieds de moellon noir où les siècles ont mis de la mousse dans les joints et rien de plus aimable.",
        "On n'en voit dépasser que trois choses. À gauche, une ligne de toits gris, bas, sans cheminées : les Plombs. Au milieu, le clocheton de la chapelle Sainte-Clavis. Et derrière, plus haute que tout, droite, aveugle, la Tour de l'Horloge-Close, qui porte à son sommet un cadran de pierre grand comme une roue de moulin, parfaitement nu. Les heures y sont gravées. Rien ne les désigne. On dirait le visage d'un homme à qui l'on aurait ôté le regard en lui laissant les rides.",
        "La rampe des Clavaires monte à la grande porte, entre deux guérites : c'est le chemin des gens qui ont le droit. Il y en a d'autres. À dix heures, les porteurs d'eau grimpent par la poterne du nord avec leurs palanches. Une charrette de linge sort des Plombs et y rentre deux fois le jour. Et sur la face du levant, où personne ne passe, un vieux lierre a pris le mur d'assaut depuis le temps des grands-pères.",
      ],
      choices: [
        { label: "Prendre une palanche et monter avec les porteurs d'eau", test: { dom: "combat", diff: 10, label: "Combat" }, win: { fx: { ep: ["perso", 300] }, to: "A1m_porteurs" }, lose: { fx: { pv: -1, flag: "a1:m_alerte" }, to: "A1m_porteurs_ko" } },
        { label: "Te glisser sous le linge de la charrette des Plombs", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "A1m_linge" }, lose: { fx: { flag: "a1:m_alerte" }, to: "A1m_linge_ko" } },
        { label: "Faire le tour par le levant et prendre le lierre", test: { dom: "nature", diff: 10, label: "Nature", help: [{ if: { item: "corde" }, v: 10 }] }, win: { fx: { ep: ["perso", 300] }, to: "A1m_lierre" }, lose: { fx: { pv: -3 }, to: "A1m_lierre_ko" } },
      ] },
    A1m_porteurs: { act: "I", title: "La poterne du nord", place: "citadelle",
      text: [
        "Une palanche chargée pèse ses soixante livres, et la poterne du nord est au bout de cent douze marches taillées dans la roche. Tu les comptes, parce que les porteurs les comptent tout haut, sur un air à eux, où chaque dizaine se paie d'un juron.",
        "Le factionnaire de la poterne ne lève même pas les yeux. Il voit passer des seaux ; dessous, il y a des gens, mais cela ne regarde pas la consigne. Tu vides les tiens dans la citerne avec les autres, tu rends la palanche à un vieux qui te remercie de l'avoir montée pour lui, et tu restes en arrière, près de la margelle, pendant que la file redescend.",
      ],
      choices: [{ label: "Regarder où tu es", to: "A1m_cour" }] },
    A1m_porteurs_ko: { act: "I", title: "Soixante livres d'eau", place: "citadelle",
      text: [
        "À la quatre-vingtième marche, tes épaules déclarent qu'elles n'ont pas été engagées pour cela. La palanche tourne, un seau cogne la roche, et vingt livres d'eau redescendent l'escalier sur les jambes des porteurs qui suivent.",
        "On t'injurie en bon ordre, du bas vers le haut. Le factionnaire de la poterne, tiré de sa rêverie, te regarde arriver trempé{e} jusqu'aux genoux. « Nouveau ? Nouvelle ? » Il ricane. « Ça se voit. » Il te laisse passer, parce qu'un porteur maladroit reste un porteur ; mais il t'a vu{e}, et il te reverra.",
      ],
      choices: [{ label: "Vider ce qui reste dans la citerne", to: "A1m_cour" }] },
    A1m_linge: { act: "I", title: "Sous les draps des Plombs", place: "citadelle",
      text: [
        "La charrette de linge monte la rampe au pas d'un cheval gris qui en a l'habitude. Tu es dessous : sous quatre épaisseurs de draps rêches, pliés humides, qui sentent la lessive de cendre et, par-dessous la lessive, quelque chose qu'elle n'a pas emporté. C'est du linge de prison. On y a dormi longtemps.",
        "Les roues sonnent sur un pont, puis sous une voûte. Une voix demande « Les Plombs ? », une autre répond « Les Plombs », et c'est tout l'examen. La charrette s'arrête dans une cour. Tu attends que la lavandière ait emporté sa première brassée, et tu te laisses couler à terre du côté du mur.",
      ],
      choices: [{ label: "Regarder où tu es", to: "A1m_cour" }] },
    A1m_linge_ko: { act: "I", title: "Un drap qui éternue", place: "citadelle",
      text: [
        "La lessive de cendre a ceci de particulier qu'elle prend au nez. Tu tiens bon sur la rampe, sur le pont, sous la voûte. C'est dans la cour, à l'arrêt, dans le grand silence d'un cheval qui souffle, que l'éternuement part.",
        "La lavandière soulève un coin de drap. Elle est large, rouge, et elle te contemple un moment, les poings sur les hanches. « Encore un amoureux. Il en monte un par semaine, pour une fenêtre du troisième. » Elle laisse retomber le drap. « File avant que le guichetier revienne. Et mouche-toi. » Tu files. Elle l'a dit assez haut pour qu'un garde, à trente pas, tourne la tête.",
      ],
      choices: [{ label: "Gagner l'ombre du mur", to: "A1m_cour" }] },
    A1m_lierre: { act: "I", title: "Le lierre du levant", place: "citadelle",
      text: [
        "Le lierre a des troncs gros comme le bras, qui ont eu soixante ans pour chercher les joints et s'y loger. Tu montes là-dedans comme dans une échelle qu'un fou aurait bâtie : jamais un barreau où on l'attend, toujours un où l'on n'osait plus l'espérer. Des moineaux partent sous tes mains. À mi-hauteur, un nid abandonné te lâche dans le col une poignée de brindilles.",
        "Le sommet du mur est un chemin de ronde, large de trois pas, vide à cette heure. Tu le franchis à plat ventre et tu descends de l'autre côté par un escalier de pierre sans rampe, usé au milieu comme une cuiller.",
      ],
      choices: [{ label: "Regarder où tu es", to: "A1m_cour" }] },
    A1m_lierre_ko: { act: "I", title: "Soixante ans de racines", place: "citadelle",
      text: [
        "Le lierre tient au mur depuis soixante ans. La branche que tu choisis à mi-hauteur faisait exception. Elle vient d'un bloc, avec une plaque de mortier grande comme une assiette, et tu redescends en dix pieds ce que tu avais mis cinq minutes à monter, freiné de ronce en ronce par tout ce que le levant fait pousser au pied d'un rempart.",
        "Tu restes assis{e} dans les orties le temps de te compter les os. Ils y sont. Tu reprends le lierre plus à gauche, en éprouvant chaque prise, et cette fois le mur te laisse passer, avec la mauvaise grâce d'un portier qu'on a réveillé.",
      ],
      choices: [{ label: "Passer le chemin de ronde et descendre", to: "A1m_cour" }] },

    // ------------------------------------------------------------ the inner ward
    A1m_cour: { act: "I", title: "La cour de la citadelle", place: "citadelle", hub: true, backName: "la cour de la citadelle",
      text: [
        { first: true, text: "La citadelle, du dedans, est un village qu'on aurait bâti pour qu'il fasse peur et qui, avec le temps, s'est mis à sécher du linge. La cour est vaste, inégale, pavée par endroits ; des poules y cherchent leur vie entre les affûts de deux canons qui n'ont pas tiré depuis le siège. Un valet d'armes étrille un cheval. Quelqu'un, quelque part, casse du bois." },
        { first: true, text: "À gauche s'allonge la bâtisse des Plombs : trois étages de petites fenêtres barrées, toutes pareilles, sous ce toit gris et plat qui lui donne son nom et qui cuit l'été ce qu'il gèle l'hiver. Au fond, contre le rempart du nord, la chapelle Sainte-Clavis, basse, trapue, avec un porche à colonnettes. La citerne et sa margelle sont au milieu." },
        { first: true, text: "Et à droite, la Tour. De près, elle n'a plus rien d'un monument. C'est un fût de pierre grise, sans une fenêtre jusqu'à hauteur des toits, sans une moulure, que le regard remonte longtemps avant de trouver, tout en haut, la couronne de bois d'un vieux hourd et le bord du cadran nu. Elle a une porte, basse, ferrée, à dix pas de laquelle s'ouvre le corps de garde. Deux hommes y jouent aux dés sur un tambour." },
        { first: true, if: { has: "a1:m_alerte" }, text: "Un des joueurs lève la tête, te cherche, et te trouve une seconde avant que tu aies pris l'air d'appartenir au décor. Il retourne à ses dés. Il faudra marcher droit." },
        { again: true, text: "La cour, ses poules, ses deux canons. Les Plombs à gauche, la chapelle au fond, la citerne au milieu, et la Tour, à droite, avec ses joueurs de dés." },
        { after: "A1m_pipeau", text: "Sur son échafaudage, le maçon à la truelle propre gâche toujours le même mortier." },
      ],
      choices: [
        { label: "Entrer à la chapelle Sainte-Clavis", to: "A1m_chapelle" },
        { label: "Longer la façade des Plombs", to: "A1m_plombs", hide: { seen: "A1m_plombs" } },
        { label: "T'asseoir contre un affût et regarder vivre le corps de garde", to: "A1m_garde", hide: { any: [{ seen: "A1m_garde_ok" }, { seen: "A1m_garde_ko" }] } },
        { label: "Te pencher sur la citerne", to: "A1m_citerne" },
        { label: "Monter au chemin de ronde", to: "A1m_ronde" },
        { label: "Aller voir de près ce maçon qui répare le mur de la Tour", to: "A1m_pipeau", hide: { seen: "A1m_pipeau" } },
      ] },

    // ------------------------------------------------------------ the chapel
    A1m_chapelle: { act: "I", title: "Sainte-Clavis", place: "citadelle", ambiance: "temple", backName: "la chapelle",
      text: [
        { first: true, text: "Sainte Clavis, vierge et martyre, fut enfermée par son père dans un coffre dont il jeta la clef à la rivière ; un poisson la rapporta. La chapelle qui porte son nom tient à la fois du coffre et de la rivière : on y descend par trois marches, il y fait un froid d'eau, et le jour n'y entre que par des fentes." },
        { first: true, text: "Quand tes yeux s'y sont faits, tu distingues la nef, courte, six bancs, un autel de pierre nue. Les murs sont couverts de clefs. Des milliers de clefs de baptême, pendues à des clous, serrées comme des écailles : celles des morts de la citadelle, depuis qu'il y a une citadelle. Le moindre souffle les fait tinter les unes contre les autres, très bas, et la chapelle, même vide, chuchote." },
        { first: true, text: "Dans le mur du nord, celui qui touche la Tour, il y a une niche carrée à hauteur de poitrine, fermée d'un tambour de chêne qui tourne sur un pivot : un tour, comme en ont les couvents cloîtrés pour passer le pain sans montrer les visages. Un jeune clerc en surplis trop court balaie devant, avec application." },
        { again: true, text: "La chapelle, son froid d'eau, ses milliers de clefs qui chuchotent. Le tour de chêne est dans le mur du nord." },
        { after: "monde:a1:savinien", text: "Savinien te fait un signe de la tête, de loin, comme à quelqu'un de la paroisse." },
      ],
      fx: { meet: "savinien" },
      choices: [
        { label: "Parler au clerc", to: "A1m_savinien", hide: { any: [{ seen: "A1m_savinien_ok" }, { seen: "A1m_savinien_ko" }] } },
        { label: "Regarder ce tour de plus près", to: "A1m_tour_niche", hide: { seen: "A1m_tour_niche" } },
        { label: "Essayer la petite porte du fond, derrière l'autel", to: "A1m_sacristie", hide: { has: "a1:m_sacristie_non" } },
        { back: "A1m_cour" },
      ] },
    A1m_savinien: { act: "I", title: "Le clerc au balai", place: "citadelle", ambiance: "temple",
      text: [
        "Il a dix-sept ans, des poignets qui dépassent, et une tonsure fraîche qu'il gratte quand il réfléchit. Il s'appelle Savinien. Il est clerc de Sainte-Clavis depuis la Chandeleur, ce qui veut dire qu'il sonne, balaie, sert la messe du chapelain à six heures et s'ennuie le reste du jour avec une conscience irréprochable.",
        "« On ne voit jamais personne, dit-il. Les gardes viennent à Pâques. Les prisonniers ont leur messe par une grille. » Il s'appuie sur son balai, heureux d'une figure neuve. « Vous cherchez quelqu'un ? »",
      ],
      choices: [
        { label: "L'aider à balayer, et le laisser parler", test: { dom: "social", diff: 20, label: "Social" }, win: { fx: { flag: "monde:a1:savinien", ep: ["perso", 400] }, to: "A1m_savinien_ok" }, lose: { to: "A1m_savinien_ko" } },
        { label: "Lui demander l'histoire de sainte Clavis, que tu connais mal", test: { dom: "savoir", diff: 20, label: "Savoir" }, win: { fx: { flag: "monde:a1:savinien", ep: ["perso", 400] }, to: "A1m_savinien_ok" }, lose: { to: "A1m_savinien_ko" } },
      ] },
    A1m_savinien_ok: { act: "I", title: "Ce que sait un clerc", place: "citadelle", ambiance: "temple",
      text: [
        "Il parle. Il a quatre mois de silence à dépenser. Tu apprends le nom du chapelain, qui est sourd ; celui du sacristain, qui est mort à la Toussaint et qu'on n'a pas remplacé ; et l'emploi du temps de la chapelle, heure par heure.",
        "« À midi, je fais le tour. » Il montre la niche du menton. « L'offrande du Bronze. Un pain, un pichet d'eau, une écuelle de ce qu'il y a aux cuisines. Je pose, je tourne, je dis l'oraison. C'est la règle de la chapelle depuis toujours : on nourrit le Juge, pour marquer qu'il est notre père. Monseigneur dit que c'est un symbole. »",
        "« Et ensuite ? »",
        "« Le soir, je retourne le tour, et je reprends la vaisselle. » Il se gratte la tonsure. « Elle revient vide. Le chapelain dit que ce sont les rats de la Tour, et qu'il ne faut pas se poser de questions sur les symboles. » Il hésite, baisse la voix, comme pour avouer une faute. « Seulement, les rats ne lavent pas l'écuelle. »",
        "Il te montre aussi, parce que tu le lui demandes et qu'il n'y voit pas de mal, la petite porte derrière l'autel. « La sacristie. Et au fond de la sacristie, la porte du Remonteur : il passe par là tous les matins, pour ne pas traverser le corps de garde. J'ai la clef de la première. La seconde, c'est lui qui l'a. »",
      ],
      fx: { clue: "j_tour" },
      choices: [{ back: "A1m_chapelle" }] },
    A1m_savinien_ko: { act: "I", title: "Un clerc qui a de l'ouvrage", place: "citadelle", ambiance: "temple",
      text: [
        "Tu poses une question de trop sur la Tour, ou tu la poses trop tôt. Savinien rougit jusqu'à la tonsure, se rappelle qu'on lui a défendu de causer avec les gens de la cour, et se remet à balayer avec une énergie de pénitent.",
        "« Il faut que je finisse avant midi. » Il te tourne le dos. Le balai dit le reste.",
      ],
      choices: [{ back: "A1m_chapelle" }] },
    A1m_tour_niche: { act: "I", title: "Le tour du Juge", place: "citadelle", ambiance: "temple",
      text: [
        "Le tambour de chêne est haut d'une coudée, ouvert d'un seul côté, comme une guérite. On pose l'objet dedans, on fait tourner, et l'ouverture passe de l'autre côté du mur. Il est très vieux. Le bois en est noir, poli, creusé au bord par des générations de pouces.",
        "Tu le fais tourner d'un quart, pour voir. Il tourne sans un bruit. Quelqu'un a graissé ce pivot il y a peu, et bien.",
        "Par la fente, entre le tambour et la pierre, vient un air qui n'est pas celui de la chapelle. Il est plus sec. Il descend de très haut, par un conduit que tu devines étroit et droit comme un tuyau de cheminée ; et quand tu approches l'oreille, tu entends au fond de ce conduit le pas lent de l'horloge, qui marche là-haut dans le noir.",
      ],
      fx: { ep: ["perso", 200] },
      choices: [{ back: "A1m_chapelle" }] },
    A1m_sacristie: { act: "I", title: "La porte derrière l'autel", place: "citadelle", ambiance: "temple",
      text: [
        "La petite porte est en chêne, bardée, avec une serrure à bosse du siècle passé : un honnête ouvrage de campagne, qui a tenu jusqu'ici parce que personne ne lui a rien demandé.",
        { if: { has: "monde:a1:savinien" }, text: "Savinien a la clef à sa ceinture, avec celle du tronc et celle des burettes. Il te regarde tourner autour de la porte avec une inquiétude qui grandit." },
      ],
      choices: [
        { label: "« Le Remonteur m'envoie chercher sa burette. Il l'a laissée au fond. »", if: { has: "monde:a1:savinien" }, test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 400], set: { "a1:m_entree": "sacristie" } }, to: "A1m_sacristie_ok" }, lose: { fx: { flag: "a1:m_sacristie_non" }, to: "A1m_sacristie_ko" }, hide: { not: { has: "monde:a1:savinien" } } },
        { label: "Attendre qu'il sorte sonner l'angélus, et crocheter la bosse", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { item: "rossignols" }, v: 20 }, { if: { voie: "crocheteur" }, v: 10 }] }, win: { fx: { ep: ["perso", 400], set: { "a1:m_entree": "sacristie" } }, to: "A1m_sacristie_ok" }, lose: { fx: { flag: "a1:m_sacristie_non" }, to: "A1m_sacristie_ko" } },
        { label: "Laisser cette porte", back: "A1m_chapelle" },
      ] },
    A1m_sacristie_ok: { act: "I", title: "La sacristie", place: "citadelle", ambiance: "temple",
      text: [
        "La sacristie est un placard à voûte, où pendent deux chasubles mangées aux vers et un encensoir sans chaînes. Elle sent le drap moisi et l'encens froid. Au fond, une seconde porte, plus basse encore, toute en fer, sans poignée de ce côté : la porte du Remonteur.",
        "Celle-ci est d'une autre race. Sa serrure n'a pas de bosse, pas d'ornement, pas d'âge ; c'est une entrée étroite dans une platine d'acier, et quand tu y glisses ton crochet, tu sens au bout du fil quatre gorges qui attendent, bien huilées, patientes. Un homme de la guilde des Heures a fait cela pour lui-même.",
        "Tu y mets le temps qu'il faut. C'est-à-dire que tu cesses d'entendre la chapelle, les clefs, ton propre souffle, et qu'il ne reste au monde que ce fil d'acier et quatre petites résistances, l'une après l'autre, qui disent non, puis peut-être, puis oui.",
        "La porte de fer s'ouvre sur un escalier.",
      ],
      choices: [{ label: "Entrer dans la Tour", to: "A1m_tour_bas", big: true }] },
    A1m_sacristie_ko: { act: "I", title: "Un clerc scrupuleux", place: "citadelle", ambiance: "temple",
      text: [
        { if: { has: "monde:a1:savinien" }, text: "Savinien pâlit. « Sa burette ? Mais il l'avait ce matin en redescendant, je l'ai vue. » Il met la main sur ses clefs, par un geste d'enfant qui protège ses billes. « Je ne peux pas. Je vous aime bien, mais je ne peux pas. On me renverrait à Ossevaux. »", else: "La bosse résiste. Elle a cette obstination des vieilles serrures simples, où la rouille tient lieu de génie ; et pendant que tu t'y acharnes, l'angélus finit, et le pas du clerc revient sous le porche." },
        "Tu t'éloignes de l'autel avec l'air de quelqu'un qui cherchait un saint à prier. Cette porte-là t'est fermée pour aujourd'hui ; la Tour en a d'autres, moins commodes.",
      ],
      choices: [{ back: "A1m_chapelle" }] },

    // ------------------------------------------------------------ the Plombs
    A1m_plombs: { act: "I", title: "Sous les fenêtres des Plombs", place: "citadelle", branch: [
      { if: { is: { reve: "plombs" } }, to: "A1m_plombs_tiens" }, { to: "A1m_plombs_mur" }] },
    A1m_plombs_mur: { act: "I", title: "Trois étages de petites fenêtres", place: "citadelle",
      text: [
        "Tu longes la bâtisse en rasant le mur. Les fenêtres commencent à dix pieds du sol ; elles ont la taille d'un missel ouvert, deux barreaux en croix, et derrière chacune, par moments, quelque chose de pâle qui est un visage, ou une main, ou une chemise mise à sécher.",
        "On n'entend rien. Tu t'attendais à des plaintes, à des chaînes, à ce que racontent les complaintes ; il y a seulement un homme, au second, qui chante faux une chanson de vendanges, et un autre, plus loin, qui tousse. Les assassins logent ailleurs. On met ici les gens qui doivent, jusqu'à ce qu'ils paient ou que quelqu'un paie pour eux ; et comme ils ne peuvent rien gagner sous ce toit, la plupart y restent le temps qu'on mette leur dette en terre avec eux.",
        "À l'angle, près d'une porte basse, le guichetier fume sa pipe, assis sur un billot. Il te regarde passer sans curiosité. Il a vu défiler dans cette cour assez de parents pour savoir qu'on y marche tous de la même façon.",
      ],
      fx: { ep: ["perso", 150] },
      choices: [{ back: "A1m_cour" }] },
    A1m_plombs_tiens: { act: "I", title: "La quatrième fenêtre du second", place: "citadelle",
      text: [
        "Tu sais laquelle. On te l'a décrite, à la Clef Tordue, par quelqu'un qui était sorti : le second étage, la quatrième en partant du coin, celle dont le barreau du haut est tordu.",
        "Tu n'étais jamais monté{e} jusqu'ici. D'en bas, de la lucarne, les Plombs étaient une ligne grise ; les voici qui ont des pierres, des joints, une gouttière, et une fenêtre grande comme un missel où pend, pour sécher, un mouchoir à carreaux bleus que tu connais.",
        "Tu restes là. Il faudrait siffler, deux notes, celles qu'on sifflait dans l'escalier ; et la main qui a pendu ce mouchoir viendrait aux barreaux. Les gardes aussi lèveraient la tête. Tu gardes les deux notes derrière tes dents, où elles pèsent leur poids.",
        "Trois cents écus. Tu les as presque. Tu regardes le mouchoir une dernière fois, pour pouvoir dire un jour que tu étais dessous, et tu t'en vas vers ce que tu es venu{e} faire.",
      ],
      fx: { ep: ["perso", 500], flag: "a1:plombs_vus" },
      choices: [{ back: "A1m_cour" }] },

    // ------------------------------------------------------------ the guardroom
    A1m_garde: { act: "I", title: "Douze hommes et un tambour", place: "citadelle",
      text: [
        "Tu t'assieds contre l'affût du canon, les jambes allongées, un brin de paille aux dents. Dans une place forte, quelqu'un qui ne fait rien passe pour quelqu'un qui attend un ordre.",
        "Le corps de garde est une salle basse, ouverte sur la cour par une arcade. Tu comptes douze hallebardes au râtelier et sept hommes présents : deux aux dés, un qui dort, un qui recoud une guêtre, trois qui regardent jouer. La porte de la Tour est à dix pas d'eux, en pleine vue. Elle a une serrure grosse comme un pain, et la clef pend au cou du sergent, lequel est précisément celui qui dort.",
      ],
      choices: [
        { label: "Rester jusqu'à la relève, et la regarder se faire", takes: 1, test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { flag: "a1:m_releve", ep: ["perso", 400] }, to: "A1m_garde_ok" }, lose: { fx: { flag: "a1:m_alerte" }, to: "A1m_garde_ko" } },
        { label: "Te lever et aller parier deux sous sur les dés", if: { gold: { min: 2 } }, test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { flag: "a1:m_releve", gold: 4, ep: ["perso", 400] }, to: "A1m_garde_ok" }, lose: { fx: { gold: -2, flag: "a1:m_alerte" }, to: "A1m_garde_ko" } },
      ] },
    A1m_garde_ok: { act: "I", title: "La relève de midi", place: "citadelle",
      text: [
        "La garde de la Tour fonctionne comme tout ce qu'on répète depuis cent ans : très bien, et sans y penser. À midi, les cinq hommes du rempart descendent, les sept du corps de garde montent, et pendant le temps qu'ils mettent à se croiser dans l'escalier du chemin de ronde, en se plaignant de la soupe, la cour n'a plus pour la surveiller qu'un sergent qui bâille.",
        "Tu apprends le reste par morceaux. Personne n'entre dans la Tour par cette porte, sauf le Remonteur aux grandes occasions et les trois Clavaires tous les sept ans. Dedans, il y a un invalide, le père La Guérite, qui loge sur le dernier palier et qu'on ravitaille le dimanche. « Il garde la porte d'en haut, dit un des joueurs. Depuis vingt ans. Il a une jambe de bois et une trompe. S'il sonne, on monte. Il a jamais sonné. »",
        "Midi : la cour vide le temps d'un Pater. Et tout en haut, un homme, une jambe de bois, une trompe.",
      ],
      choices: [{ back: "A1m_cour" }] },
    A1m_garde_ko: { act: "I", title: "« Toi, là »", place: "citadelle",
      text: [
        "« Toi, là. »",
        "C'est le recouseur de guêtre. Il a posé son aiguille. « T'es à qui ? » Tu dis les cuisines, ou les écuries, ou le linge. Il t'écoute en hochant la tête, puis il se tourne vers les autres : « Vous l'avez déjà vu{e}, vous ? » Les autres haussent les épaules, sans quitter les dés des yeux.",
        "« Va travailler, alors. On n'aime pas les badauds, autour de la Tour. » Tu t'éloignes. Dans ton dos, tu l'entends ajouter, pour personne : « J'ai la mémoire des figures. C'est ce qui m'a fait passer caporal. »",
      ],
      choices: [{ back: "A1m_cour" }] },

    // ------------------------------------------------------------ the cistern and the weights' vent
    A1m_citerne: { act: "I", title: "La citerne", place: "citadelle", backName: "la citerne",
      text: [
        { first: true, text: "La margelle est large, usée, tiède de soleil. Tu t'y accoudes. L'eau est à vingt pieds, noire, et te renvoie un rond de ciel où ta tête fait une tache." },
        { first: true, text: "Tu regardes plus haut que l'eau. À mi-hauteur du puits, du côté de la Tour, la paroi s'ouvre sur un soupirail en plein cintre, barré de trois fers, d'où sort un bruit que tu connais sans l'avoir jamais entendu d'aussi près : un cliquetis grave, espacé, de chaîne qui avance d'un maillon. La fosse des poids de l'horloge prend son air ici. Les bâtisseurs ont pensé à la rouille. Ils ont moins pensé aux gens maigres." },
        { again: true, text: "La citerne, son rond de ciel. Dans la paroi, à dix pieds sous la margelle, le soupirail aux trois fers, et le pas de la chaîne." },
      ],
      choices: [
        { label: "Descendre par la chaîne du seau et t'attaquer aux fers", if: { not: { has: "a1:m_soupirail_non" } }, test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { item: "corde" }, v: 15 }, { if: { has: "a1:m_releve" }, v: 15 }] }, win: { fx: { ep: ["perso", 400], set: { "a1:m_entree": "soupirail" } }, to: "A1m_soupirail_ok" }, lose: { fx: { pv: -2, flag: ["a1:m_soupirail_non", "a1:m_alerte"] }, to: "A1m_soupirail_ko" }, hide: { has: "a1:m_soupirail_non" } },
        { back: "A1m_cour" },
      ] },
    A1m_soupirail_ok: { act: "I", title: "Trois fers", place: "citadelle", ambiance: "souterrain",
      text: [
        "La chaîne du seau est grasse et froide. Tu te laisses filer jusqu'au soupirail, un pied dans le seau, l'autre contre la paroi, et tu te trouves suspendu{e} dans une fraîcheur de cave, à mi-chemin d'un ciel grand comme une assiette et d'une eau qui attend.",
        "Les trois fers sont scellés au plomb. Le plomb a cent ans, et l'humidité du puits a fait pour toi la moitié de l'ouvrage : celui du milieu joue dans son trou comme une dent de sept ans. Tu le travailles du poignet, en mesure avec la chaîne de l'horloge, un maillon, un effort. Il vient. Par l'ouverture, une personne mince passe de biais, en rentrant le ventre et en disant adieu à un bouton.",
        "Tu es de l'autre côté, à plat ventre sur une corniche. Devant toi, dans une obscurité qui sent l'huile, quelque chose d'énorme descend avec lenteur.",
      ],
      choices: [{ label: "Entrer dans la Tour", to: "A1m_tour_bas", big: true }] },
    A1m_soupirail_ko: { act: "I", title: "Vingt pieds d'eau noire", place: "citadelle",
      text: [
        "Le seau tourne. Ton pied le quitte, ta main glisse sur la graisse de la chaîne, et la citerne de la citadelle te reçoit avec un bruit qui monte le long du puits comme dans un tuyau d'orgue.",
        "L'eau est glacée. Tu en ressors à la force des bras, maillon après maillon, pour trouver à la margelle trois têtes penchées : un valet, une lavandière, et un garde qui rit trop pour être dangereux. « Il voulait boire à la source ! » Tu dis que ton chapeau était tombé. On te croit, parce que la vérité serait trop bête. Mais te voilà trempé{e}, connu{e} de toute la cour, et quiconque redescendra dans ce puits aujourd'hui y sera regardé.",
      ],
      choices: [{ label: "T'ébrouer, et chercher autre chose", back: "A1m_cour" }] },

    // ------------------------------------------------------------ the rampart walk and the hoarding
    A1m_ronde: { act: "I", title: "Le chemin de ronde", place: "citadelle", backName: "le chemin de ronde",
      text: [
        { first: true, text: "L'escalier sans rampe te mène sur le rempart. Le vent t'y attend. De là-haut, Aiguemorne se déploie d'un coup sous tes pieds, toits sur toits jusqu'à la Morne, avec ses fumées, ses clochers, ses cent enseignes de fer qui font au soleil un scintillement de poissons ; et tout en bas, minuscule, entre deux lavoirs, un toit de tuiles brunes que tu reconnais à sa cheminée de travers. La Clef Tordue tiendrait sous ton pouce." },
        { first: true, text: "Le chemin de ronde fait le tour de l'enceinte. Du côté de la Tour, il passe à douze pieds du fût de pierre, et là, juste à ta hauteur, la muraille de la Tour porte encore les corbeaux d'un ancien pont de bois : les défenseurs passaient autrefois du rempart au premier hourd. Le pont a pourri. Il en reste une poutre, une seule, noire, large d'une main, jetée sur le vide." },
        { first: true, text: "Une sentinelle fait les cent pas entre toi et cette poutre, la hallebarde sur l'épaule, en sifflant." },
        { again: true, text: "Le rempart, le vent, la ville en bas. La poutre noire est toujours jetée sur le vide, et la sentinelle siffle toujours." },
      ],
      choices: [
        { label: "Attendre qu'elle tourne le dos, et passer la poutre", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "a1:m_releve" }, v: 20 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "a1:m_alerte" }, v: -10 }] }, win: { fx: { ep: ["perso", 400], set: { "a1:m_entree": "hourd" } }, to: "A1m_poutre" }, lose: { to: "A1m_sentinelle" } },
        { label: "Lui offrir la goutte, et la poster face à la ville", if: { item: "eau_de_vie" }, fx: { drop: "eau_de_vie", ep: ["perso", 300], set: { "a1:m_entree": "hourd" } }, to: "A1m_poutre", hide: { not: { item: "eau_de_vie" } } },
        { back: "A1m_cour" },
      ] },
    A1m_sentinelle: { act: "I", title: "La sentinelle", place: "citadelle",
      text: [
        "Elle se retourne trop tôt. C'est un garçon de vingt ans, aux oreilles rouges de vent, qui te découvre à trois pas de sa poutre et reste d'abord la bouche ouverte sur sa chanson.",
        "« Qui va là ? » Il le dit comme on le lui a appris, la hallebarde croisée. Sa main gauche cherche déjà le sifflet à son cou.",
      ],
      choices: [
        { label: "Lui tomber dessus avant le sifflet", fight: { title: "Sur le rempart", enemies: [{ id: "garde_guet", n: 1 }], win: { fx: { ep: ["seance", 600], flag: "a1:m_alerte", set: { "a1:m_entree": "hourd" } }, to: "A1m_sentinelle_ok" }, lose: { to: "A1m_sentinelle_ko" } } },
        { label: "« Le sergent te fait dire que la soupe est servie. C'est moi qui te relève. »", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "a1:m_releve" }, v: 25 }] }, win: { fx: { ep: ["perso", 400], set: { "a1:m_entree": "hourd" } }, to: "A1m_poutre" }, lose: { fx: { pv: -2, flag: "a1:m_alerte" }, to: "A1m_sentinelle_ko" } },
      ] },
    A1m_sentinelle_ok: { act: "I", title: "Un garçon endormi", place: "citadelle",
      text: [
        "Il est assis contre le parapet, le menton sur la poitrine, sa hallebarde en travers des genoux. Tu lui as laissé son sifflet, par égard, et tu lui as rabattu le chapeau sur les yeux : de la cour, on jurera qu'il fait un somme. Il aura une bosse et une punition. Loridan avait demandé qu'on épargnât les gens ; la Douairière l'exigeait bien avant lui.",
        "La poutre est à toi.",
      ],
      choices: [{ label: "Passer la poutre", to: "A1m_poutre" }] },
    A1m_sentinelle_ko: { act: "I", title: "Le sifflet", place: "citadelle",
      text: [
        "Le sifflet part. Il est aigu, mouillé de salive, et il traverse la cour comme une flèche. En bas, les dés s'arrêtent sur le tambour.",
        "Tu n'attends pas la suite. Tu dévales l'escalier sans rampe, tu passes derrière les Plombs, et tu te tiens un quart d'heure à plat dans le bûcher, sous des fagots, pendant que des bottes vont et viennent. « Un rôdeur sur le rempart. » « Encore un amoureux. » Ils se lassent. Mais le chemin de ronde a maintenant deux sentinelles, et elles ne sifflent plus de chansons.",
      ],
      fx: { flag: "a1:m_alerte" },
      choices: [{ label: "Sortir du bûcher quand la cour s'est rendormie", back: "A1m_cour" }] },
    A1m_poutre: { act: "I", title: "Douze pieds de vide", place: "citadelle",
      text: [
        "La poutre est large d'une main, longue de douze pieds, et le vent la prend par le travers. Dessous, il y a quarante pieds d'air, puis le pavé de la cour, où une poule que tu vois très distinctement gratte entre deux pierres.",
        "Les vieux du métier disent qu'on ne traverse pas une poutre : on regarde le bout, et c'est le bout qui vient. Tu regardes le bout. C'est une ouverture carrée dans le bois du hourd, noire, sans volet, où pend une toile d'araignée grande comme une serviette.",
        "Le bout vient. Tu te reçois à genoux dans de la fiente de pigeon vieille d'un siècle, la toile d'araignée sur la figure, et tu restes là un moment à respirer cette poussière avec reconnaissance.",
      ],
      choices: [{ label: "Entrer dans la Tour", to: "A1m_tour_haut", big: true }] },

    // ------------------------------------------------------------ a mason with clean hands
    A1m_pipeau: { act: "I", title: "Un maçon qui gâche à blanc", place: "citadelle",
      text: [
        "Contre le pied de la Tour, du côté que le corps de garde ne voit pas, on a dressé un échafaudage de trois perches. Un maçon y travaille, ou du moins y remue une truelle dans une auge. Il rejointoie. Il met à rejointoyer la même pierre un soin que tu n'as vu qu'aux horlogers.",
        "Tu passes dessous. Le maçon baisse les yeux, et vous vous reconnaissez ensemble : un foulard remonté jusqu'au nez, des yeux qui sourient, et au bout des manches trop longues une paire de mains blanches.",
        "« Tiens, souffle Pipeau. La concurrence. » Il gâche avec conviction. « Dis rien. Je suis maçon depuis ce matin, j'ai une famille à nourrir. »",
      ],
      choices: [
        { label: "« Qu'est-ce que Sans-Bruit vient chercher dans cette tour ? »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { clue: "g_tour", flag: "a1:m_pipeau", ep: ["perso", 400] }, to: "A1m_pipeau_ok" }, lose: { to: "A1m_pipeau_ko" } },
        { label: "Lui proposer un marché : ce que tu sais de la cour contre ce qu'il sait de la Tour", if: { any: [{ has: "a1:m_releve" }, { has: "monde:a1:savinien" }] }, fx: { flag: ["a1:m_pipeau", "a1:m_releve"], ep: ["perso", 300] }, to: "A1m_pipeau_troc", hide: { not: { any: [{ has: "a1:m_releve" }, { has: "monde:a1:savinien" }] } } },
        { label: "Passer ton chemin : deux voleurs qui causent font un attroupement", back: "A1m_cour" },
      ] },
    A1m_pipeau_ok: { act: "I", title: "La commande", place: "citadelle",
      text: [
        "« Chercher ? Rien. Regarder. » Pipeau lisse un joint du pouce. « La patronne a une commande, depuis hier. Une grosse. Elle a dit : *avant de courir après les clefs des autres, on va voir la porte.* Alors je regarde la porte. Enfin, la tour autour de la porte. »",
        "« Les clefs des autres. »",
        "Il s'arrête de lisser. Ses yeux cessent de sourire, le temps de mesurer ce qu'il vient de dire. « J'ai dit ça, moi ? » Il reprend sa truelle. « Oublie. Je parle trop, c'est connu, c'est pour ça qu'on me met maçon. Tout ce que je peux te dire, c'est qu'on n'est pas payés par les mêmes, et que le nôtre a de plus belles bottes. »",
      ],
      choices: [{ back: "A1m_cour" }] },
    A1m_pipeau_ko: { act: "I", title: "Une truelle éloquente", place: "citadelle",
      text: [
        "Pipeau lève sa truelle, pleine, et la laisse pencher au-dessus de ta tête, d'un air rêveur.",
        "« Le mortier, ça tombe. C'est la pesanteur, j'y peux rien. Circule, Rossignol : tu me fais de l'ombre et tu me fais remarquer. »",
      ],
      choices: [{ back: "A1m_cour" }] },
    A1m_pipeau_troc: { act: "I", title: "Donnant, donnant", place: "citadelle",
      text: [
        "Vous faites cela en gens du métier, sans vous regarder, lui à sa pierre, toi à ton soulier que tu relaces. Tu donnes ce que tu as. Il donne ce qu'il a, et c'est honnête.",
        "« La cour se vide à midi, à la relève, le temps d'un Pater. En haut de la Tour, sur le dernier palier, y a un invalide : jambe de bois, trompe de chasse, et un jeu de cartes. Il fait des réussites. Quand il en tient une, on pourrait lui voler sa jambe. » Pipeau crache dans son auge. « Et la poutre du rempart, elle tient. J'ai essayé cette nuit. C'est par là que je suis pas entré : j'ai le vertige, je l'ai su en haut. »",
        "« Et qu'est-ce que vous cherchez, là-dedans ? »",
        "« Ça, c'était pas dans le troc. »",
      ],
      choices: [{ back: "A1m_cour" }] },
  },

  extras: {
    clues: {
      j_tour: { rev: "J", text: "Savinien, clerc de Sainte-Clavis : chaque midi, il pose dans le tour du mur « l'offrande du Bronze », un pain, un pichet, une écuelle. Le soir, la vaisselle revient vide. « Les rats ne lavent pas l'écuelle. »" },
      g_tour: { rev: "G", text: "Pipeau, des Gants-Noirs, rôdait au pied de la Tour : Sans-Bruit a reçu « une grosse commande » et court « après les clefs des autres ». Son client a « de plus belles bottes » que celui des Rossignols." },
    },
  },
};
