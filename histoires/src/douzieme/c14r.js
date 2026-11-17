// Le Douzième Coup · chapter 14, the one who stays (act IV, 21 June 601, from eleven to noon). With
// `r:voie_escalier` : the Serment according to the night (Régente free, inside, held), the square while they swear,
// the wicket at the quarter (the word, the shadow, or the signal), the battle `escalier` (won : `monde:escalier_tenu`,
// lost : `r:escalier_perdu`) or the stair alone (`r:entre_seul`), the eighty steps, the niche (`r:lu_niche`).
// With `r:voie_droit` : the Fondateurs' gut (six pinches), the one who tried in 541 (item `pied_de_biche`), the
// engraved wall, the bronze grille. M14 in the niche or at the wall. Then the lower Chamber of 601
// (`r:vu_basse`) : the old man at the lever (`r:coudrier_eveille`, `r:jehan_nom`), the wedge (`r:vu_coin`), the
// drift (`r:chasse_trouvee`), the well (`r:vu_puits`), the wire (`r:fil_touche`), the cradles and the service door
// (`r:porte_calee`), Aubespin and the false Cahier (`r:faux_lu`, `r:offre_refusee` | `r:offre_pesee`), noon, and the
// hand on the lever (`r:main_dessus` | `r:main_dessous` | `r:main_deux`). B14 carries act V.
var P = {};
var JEHAN = { present: "jehan" };
var UNE_PINCEE = { stock: "sable", min: 3 };
var ESC = { has: "r:voie_escalier" };
var DROIT = { has: "r:voie_droit" };
var LIBRE = { has: "monde:regente_libre" };
var DEDANS = { all: [{ has: "monde:regente_dedans" }, { not: { has: "monde:regente_libre" } }] };
var TENUE = { not: { any: [{ has: "monde:regente_libre" }, { has: "monde:regente_dedans" }] } };
var ORD2 = { has: "monde:ordonnance_garde" };
var HAUDOIN = { all: [ORD2, { has: "r:mot_escalier" }] };
var TROUPES = { any: [{ has: "r:glaneurs_parvis" }, { has: "r:jehan_blancs" }, { has: "r:cuivre_parvis" }, HAUDOIN] };
var TENU = { has: "monde:escalier_tenu" };
var PERDU = { has: "r:escalier_perdu" };
var CHASSE = { has: "monde:chasse_en_bas" };
var CALEE = { has: "r:porte_calee" };

Object.assign(P, {
  // ---------- eleven o'clock ----------
  K14r_route: { act: "IV", title: "Onze heures, qu'on lit", place: "tour", ambiance: "chateau",
    text: [
      "Tu fermes le Cahier.",
      { if: ESC, text: "Onze heures, en 601, se lisent : rien ne les sonne. La dame au pliant regarde sa pendule de voyage, la referme d'un doigt, et se lève ; toute la Cour se lève avec elle, dans un bruit de soie. Les trompettes, qui cherchaient leur note depuis une heure, la tiennent enfin, et la gardent un peu trop." },
      { if: ESC, text: "Les cinq mille de 541 sont où ils étaient, la tête renversée vers un cadran où les deux aiguilles se touchent. On va jurer, par-dessus leurs épaules, qu'on leur rendra ce qu'ils attendent. C'est la soixantième fois, et ils ont l'air de gens qui ont cessé d'y compter." },
      { if: ESC, text: "Sur l'estrade, le chambellan frappe trois coups de sa canne. Le guichet du vantail droit est fermé ; il s'ouvrira au quart. D'ici là, tu as un Serment à regarder. C'est le seul moment du jour où quatre-vingts casaques noires auront les yeux du même côté." },
      { if: ESC, text: "La ruelle de derrière, où une porte de fer bâille depuis soixante ans, tu l'as regardée ce matin en passant. La Maîtrise y a scellé une herse cette nuit, et mis six hommes devant. Un homme prudent mure d'abord les portes qu'on a laissées ouvertes." },
      { if: DROIT, text: "Tu es assis{e} sur la dernière marche, les pieds dans le boyau. Onze heures : tu les lis à ta veilleuse, qui a baissé d'un doigt, et à la pièce de soleil, là-haut, qui a gagné une dalle vers l'étoile." },
      { if: DROIT, text: "Par le trou de la voûte, il descend de la colline une note de trompettes, très lointaine, tenue un peu trop. C'est le Serment. À cette heure, soixante hommes dans un escalier tendent l'oreille de ce côté-là. Ici, il y a une règle de laiton, du noir, et personne à distraire." },
      { if: DROIT, with: "carillon", text: "Carillon s'est arrêté au bord de la dalle. « Le cuivre boit la chute. Carillon boirait la tienne. » Il se tourne vers l'étoile, et il lève son marteau. « Carillon sonnera midi ici. Quoi qu'on sonne. C'est écrit par terre. »" },
      { if: DROIT, text: "Tu resserres le lacet du sablier à ton cou. Tu te lèves. Tout au fond, le point gris t'attend, de la grosseur d'une perle." },
    ],
    choices: [
      { label: "Regarder l'estrade", hide: { any: [DROIT, { not: LIBRE }] }, to: "K14r_serment_libre", big: true },
      { label: "Regarder l'estrade", hide: { any: [DROIT, { not: DEDANS }] }, to: "K14r_serment_dedans", big: true },
      { label: "Regarder l'estrade", hide: { any: [DROIT, { not: TENUE }] }, to: "K14r_serment_tenue", big: true },
      { label: "Entrer dans le Droit", hide: ESC, to: "K14r_boyau", big: true },
    ] },

  K14r_serment_libre: { act: "IV", title: "La figure qu'il faut", place: "tour", ambiance: "chateau",
    text: [
      "Celui qui monte les marches de l'estrade est en gris. Il a gardé sa canne. Il monte du pas d'un homme qui a fait ce chemin cinquante-neuf fois derrière quelqu'un, et qui trouve naturel de le faire enfin devant.",
      "Le chambellan annonce, d'une voix qu'on lui a fait répéter : « Madame la Régente, souffrante, a commis Monsieur le Maître des Sables pour prêter en son nom. » La Cour remue. Une Régente souffrante le matin du Serment, cela se chuchote, et les éventails s'y mettent.",
      "Melchior Aubespin pose la main gauche sur le livre. Il lève la droite. L'œil gris et l'œil brun font le tour de la place, sans hâte, comme on compte une recette. « Devant celle qui dort, dit-il, et devant ceux qui dorment... »",
      "« Vous avez la voix qu'il faut, Monsieur. Il vous manque la figure. »",
      "Cela vient du troisième rang des Veilleurs. Une pèlerine en cape grise a passé la corde de soie, en la soulevant de deux doigts, comme une dame soulève sa jupe au bord d'un ruisseau. Elle marche vers l'estrade. À mi-chemin elle ôte son fichu, elle secoue la tête, et tout Aurime reconnaît ces cheveux-là : ils sont sur les monnaies.",
      "« On me dit souffrante. Regardez-moi, et répétez-le. » Elle a parlé aux cinq mille dos, par habitude ; puis elle se retourne vers les vivants. Les trompettes se sont tues d'elles-mêmes. Un page a lâché un plateau, qui roule longtemps.",
      { if: { has: "monde:lettres_produites" }, text: "Elle tire le vélin de sa cape. Elle le lit debout, au pied des marches, de sa voix de Conseil, sans une inflexion : le nom de son grand-père ; la commande qu'il fit à un graveur, d'un sceau de régent ; et la date, le neuf de juin 541. Elle replie. « Douze jours avant qu'il y eût une régence. Ma maison a fait tailler son cachet la semaine d'avant le malheur. Voilà sur quoi l'on jure ici depuis soixante ans. »" },
      { if: { not: { has: "monde:lettres_produites" } }, text: "Elle a pour toute preuve une phrase, et elle l'a soignée. « Je suis sortie de chez moi cette nuit par une fenêtre, parce qu'un homme en gris avait mis des piques à ma porte. Ce matin il jure à ma place. Demandez-vous ce qu'il fera à midi. »" },
      "Aubespin a baissé la main. Il consulte sa montre, et c'est tout le trouble qu'il laisse voir : il la consulte deux fois. « Madame se porte mieux. La Maîtrise s'en réjouit. Qu'on reconduise Madame. » Aux quatre coins de la place, seize casaques se détachent ; et la Cour, qui est debout, cherche de quel côté il convient de tomber.",
      "Toute la place regarde l'estrade. Sous le dais rouge, les dix se sont haussés sur la pointe des pieds.",
    ],
    choices: [{ label: "Regarder ailleurs, pendant que personne ne le fait", to: "K14r_place_onze", big: true }] },

  K14r_serment_dedans: { act: "IV", title: "Comme on dévide un écheveau", place: "tour", ambiance: "chateau",
    text: [
      "La Régente monte les marches de l'estrade. Ses deux casaques s'arrêtent au bas : on ne monte pas avec elle. Elle a le blanc, la traîne, le voile. Elle monte comme on dévide : une marche, un temps, une marche.",
      "Elle pose la main sur le livre. Elle la retire. D'un signe, elle demande qu'on approche le coussin, qui est trop loin. On l'approche. Il est trop près. Le chambellan, qui a soixante ans et un catarrhe, le recule d'un pouce, à genoux, et toute la Cour retient son souffle sur ce pouce-là.",
      "« Devant celle qui dort », dit-elle enfin. Et elle se tait. Elle regarde la Tour ; elle a l'air de chercher la suite dans les pierres. Le souffleur, derrière l'estrade, lui passe le mot. Elle le remercie tout haut, par son nom, et s'informe de sa femme.",
      "Au pied des marches, l'homme en gris regarde sa montre. Il la regarde à chaque phrase. À la troisième il a compris, et cela se voit à ce qu'il cesse de la regarder : il croise les deux mains sur sa canne. Un Serment commencé va jusqu'au bout ; c'est la seule loi d'Aurime qu'il n'ait pas faite. Elle le tient là, debout, devant cinq mille témoins de dos, pendant qu'une femme en blanc lui mange son heure grain à grain.",
      "« ...et devant ceux qui dorment », dit la Régente. Elle demande un verre d'eau.",
      "On court le chercher à l'Orangerie. Sous le dais rouge, les dix se sont haussés sur la pointe des pieds, pour voir boire.",
    ],
    choices: [{ label: "Regarder ailleurs, pendant que personne ne le fait", to: "K14r_place_onze", big: true }] },

  K14r_serment_tenue: { act: "IV", title: "Les notes en rouge", place: "tour", ambiance: "chateau",
    text: [
      "La Régente monte entre ses deux casaques, qui montent avec elle. Elle est très droite. Le bleu de sa pommette a percé la poudre.",
      "On lui a mis le texte sous les yeux, recopié de frais, avec les pauses marquées en rouge dans la marge, comme pour un enfant de chœur. Elle pose la main sur le livre. Elle lit.",
      "« Devant celle qui dort, et devant ceux qui dorment. *Ici Madame lève la main droite.* » Elle la lève. « Je tiens ce royaume en dépôt. *Un temps. Regarder la Tour.* » Elle regarde la Tour. Elle lit tout : le texte, les pauses, les notes en rouge, du même ton égal, sans en sauter une. « *Madame sourira au peuple.* » Elle sourit. C'est un sourire de bois peint.",
      "Il se fait d'abord un silence. Puis, dans la Cour, quelqu'un comprend, et un éventail tombe. Les Veilleurs avaient compris plus tôt : ils ont l'habitude des gens qui parlent sous une main. Trois cents personnes en gris ôtent leur capuchon ensemble, comme elles font à l'église, et aux enterrements.",
      "Au pied de l'estrade, l'homme en gris a un geste vers le chambellan, bref, de deux doigts : *abrégez.* Le chambellan a les yeux sur la pommette, et le geste se perd.",
      "Toute la place regarde l'estrade. Sous le dais rouge, les dix se sont haussés sur la pointe des pieds.",
    ],
    choices: [{ label: "Regarder ailleurs, pendant que personne ne le fait", to: "K14r_place_onze", big: true }] },

  K14r_place_onze: { act: "IV", title: "Pendant qu'on jure", place: "tour", ambiance: "chateau", hub: true, backName: "la margelle",
    text: [
      { first: true, text: "Tu es contre la margelle, parmi les mendiants de 541. L'ombre du gnomon, sur la vasque, a un doigt à faire avant le quart. Tu as ce doigt-là pour regarder ce que tu laisses dehors." },
      { again: true, text: "La margelle, les mendiants, l'ombre du gnomon. Elle avance." },
      { if: LIBRE, text: "Sur l'estrade, on entoure une femme en cape grise, sans oser la toucher." },
      { if: DEDANS, text: "Sur l'estrade, la Régente boit son verre d'eau. Elle le boit par gorgées de moineau." },
      { if: TENUE, text: "Sur l'estrade, la Régente en est à la page deux, et elle lit toujours les marges." },
    ],
    choices: [
      { label: "La chaise à sangles", hide: { seen: "K14r_line_onze" }, to: "K14r_line_onze" },
      { label: "Le capitaine de 541, au pied de la Tour", hide: { any: [{ not: { has: "r:signe_hardouin" } }, { seen: "K14r_hardouin_onze" }] }, to: "K14r_hardouin_onze" },
      { label: "Les douze cuves", hide: { seen: "K14r_cuves_onze" }, to: "K14r_cuves_onze" },
      { label: "Tes gens, derrière la fontaine", hide: { any: [{ not: { any: [TROUPES, { has: "r:rouget_court" }, { has: "r:carillon_heure" }, { has: "r:jehan_dos" }] } }, { seen: "K14r_gens_onze" }] }, to: "K14r_gens_onze" },
      { label: "Le quart : te tourner vers la porte de bronze", to: "K14r_quart", big: true },
    ] },

  K14r_line_onze: { act: "IV", title: "Deux doigts sur une toile cirée", place: "tour", ambiance: "chateau",
    text: [
      "Elle est où on l'a posée, à quarante pas, sanglée, le châle propre, les mains à plat sur le cahier neuf. Ses deux noirs regardent l'estrade comme tout le monde.",
      "Elle, elle regarde la porte de bronze. Puis toi. Elle a de bons yeux pour le loin, comme tous ceux qui ont usé les leurs sur le près.",
      { after: "r:line_parle", text: "Elle lève deux doigts de la toile cirée, et les repose. À l'établi, cela voulait dire : *c'est remonté, lâche le ressort.*" },
      { before: "r:line_parle", text: "Tu ne lui as rien dit ce matin. Elle lève deux doigts de la toile cirée, et les repose. À l'établi, cela voulait dire : *c'est remonté, lâche le ressort.* Elle se passe très bien qu'on lui parle." },
      "Elle tousse dans son mouchoir. Elle le replie vite.",
    ],
    choices: [{ back: "K14r_place_onze" }] },

  K14r_hardouin_onze: { act: "IV", title: "À sa droite", place: "tour", ambiance: "chateau",
    text: [
      "Le capitaine Hardouin est à son poste, le poing sur l'épée, le menton vers le cadran, ses six archers derrière lui. Le flocon de savon est toujours sous son oreille gauche. Il a signé ce matin sur sa propre cuirasse, et il a repris sa place dans l'air.",
      "Tu mesures. À sa droite, entre son coude et le contrefort, il y a le passage d'un corps mince. À sa gauche, il y a le dais, le velours, et le chemin que prendrait un homme pressé de te rattraper.",
      "Un pris qu'on effleure avec du sable sur soi s'éveille le temps que le grain coule. Celui-là s'éveillera l'épée au poing, et il a dit de quel côté il frappait.",
    ],
    choices: [{ back: "K14r_place_onze" }] },

  K14r_cuves_onze: { act: "IV", title: "Une main de plus", place: "tour", ambiance: "chateau",
    text: [
      "Le long du flanc de la Tour, les douze cuves ont changé depuis l'aube. Le gris y monte. Il a passé la mi-hauteur dans les trois premières ; il s'y tient sans un pli, lourd, luisant par en dessous, comme un mercure qui aurait de la profondeur.",
      "Douze tuyaux de verre sortent du mur, au ras du pavé, et s'y abouchent. On voit le gris y passer, lentement, par poussées, avec un temps entre chacune. Quelque chose bat encore, là-dessous, et l'on a branché des bouteilles sur ce battement.",
      { after: "r:sait_commande", text: "Tu connais ce verre. Il est vert, épais d'un pouce, avec des bulles couchées : c'est du verre de Roquebise, soufflé au four des Aulnes. On a commandé ces cuves chez toi il y a soixante ans, et tes arrière-grands-pères ont dû les trouver bien payées." },
      "Un commis de la Maîtrise passe de l'une à l'autre, une baguette graduée à la main. Il note des hauteurs. Il a l'air content.",
    ],
    choices: [{ back: "K14r_place_onze" }] },

  K14r_gens_onze: { act: "IV", title: "Ceux qui attendent une main", place: "tour", ambiance: "chateau",
    text: [
      { after: "r:glaneurs_parvis", text: "Sur les toits, quarante têtes ont paru au ras des chéneaux, et se sont renfoncées. La Courtepaille a fait dire qu'elle voulait le velours du dais pour sa part, et qu'on ne le déchire pas." },
      { after: "r:jehan_blancs", text: "Les trente manteaux blancs de Jehan se sont approchés du dais par deux, par trois, en badauds, les mains aux poches. L'un d'eux mange une pomme. Elle est de 541 : il l'a prise dans un panier, sur un bras, et il la trouve bonne." },
      { after: "r:cuivre_parvis", text: "Dans la ruelle, les grands hommes de cuivre ont allumé leurs lanternes, toutes ensemble, sans un bruit. Carillon lève sa baguette de bronze, et la tient levée." },
      { if: HAUDOIN, text: "Aux grilles du Palais, le sergent Haudoin fait l'appel pour la seconde fois de la matinée, ce qui est contre tous les usages. Deux cents manteaux blancs sont sur trois rangs, l'arme au pied, tournés vers la Tour. Il a la figure de faction où l'on ne lit rien." },
      { with: "jehan", text: "Jehan est à ton coude. Il a les yeux sur le guichet, et il remue les lèvres : il compte les paliers." },
      { with: "rouget", text: "Rouget s'accroupit près de toi. « Quand tu lèves la main, je cours aux toits. Après, je tiens le trou de la porte. Je descends pas : j'ai regardé dedans cette nuit, par la fente. Ça n'a pas de fond. » Il crache un pépin. « Toi, t'aimes ça. »" },
      { with: "carillon", before: "r:cuivre_parvis", text: "Carillon se tient droit, tourné vers la Tour. « Carillon a été tenu par la barre. La barre pèse sur ceux qu'elle a tenus. Il ira jusqu'au palier. » *Ding*, fêlé. « Il le regrette. »" },
    ],
    choices: [{ back: "K14r_place_onze" }] },

  // ---------- the quarter : the wicket ----------
  K14r_quart: { act: "IV", title: "Le temps de compter vingt", place: "tour", ambiance: "chateau",
    text: [
      "L'ombre du gnomon touche le bord de la vasque.",
      "Sous le dais, les dix se resserrent. Dans le vantail de droite, à hauteur d'enfant, un carré de noir se découpe : le guichet. Cinq casaques en sortent, courbées, clignant au jour. Cinq autres attendent, la pique basse, pour entrer. Le fourrier a déjà la mesure à la main.",
      { after: "r:veilleurs_chant", text: "Et la note monte. La Doyenne a levé un doigt. Trois cents bouches fermées donnent une seule note, basse, ronde, égale. Tu la reconnais sans l'avoir entendue de ta vie : c'est la voix d'une cloche. Sainte-Aure garde depuis quatre cents ans le ton de la Patiente, et ses Veilleurs le rendent ce matin à la place, à bouche close. Les noirs du dais tournent la tête. Sur les joues de la Cour, le rose de cire a pâli d'un cran." },
      { if: TROUPES, text: "Derrière la fontaine, on attend ta main." },
      "Le guichet restera ouvert le temps de compter vingt. Tu en es à quatre.",
    ],
    choices: [
      { label: "Lever la main : que tes gens entrent", hide: { not: TROUPES }, to: "K14r_assaut", big: true },
      { label: "Te baisser au guichet avec les cinq, et dire « Soixante »", hide: { not: { has: "r:mot_escalier" } },
        test: { dom: "discretion", diff: 8, label: "Le mot, courbé, la tête dans les épaules", help: [{ if: { has: "r:vu_releve" }, v: 10 }, { if: { voie: "leste" }, v: 5 }] },
        win: { to: "K14r_seul_dedans", fx: { flag: "r:entre_seul", ep: ["histoire", 600] } },
        lose: { to: "K14r_guichet_pris" } },
      { label: "Te couler derrière le cinquième, dans son ombre",
        test: { dom: "discretion", diff: 13, label: "Une ombre de trop sous un dais", help: [{ if: { has: "r:vu_releve" }, v: 10 }, { if: { voie: "leste" }, v: 5 }, { if: { has: "r:veilleurs_chant" }, v: 5 }] },
        win: { to: "K14r_seul_dedans", fx: { flag: "r:entre_seul", ep: ["histoire", 600] } },
        lose: { to: "K14r_guichet_pris" } },
    ] },

  K14r_guichet_pris: { act: "IV", title: "Soixante et un", place: "tour", ambiance: "chateau", fx: { stock: { sable: -2 }, flag: ["r:entre_seul", "r:escalier_perdu"] },
    text: [
      "Une main te prend au collet, par-derrière, à l'instant où tu te baisses. « Soixante et un, dit une voix. Nous sommes soixante. » C'est le brigadier de la relève. Il te soulève d'un bras, comme on soulève un chat, et il te passe en revue, de la tête aux sabots.",
      "« De la glane. Avec un sablier au cou, un jour de Serment, à ma porte. » Il a un rire sans gaieté. Il tâte le sachet, le soupèse, et en fait couler deux pincées dans sa propre paume, qu'il referme. « La consigne dit : au canal. Le canal est loin, et j'ai une relève à rentrer. »",
      "Il te pousse devant lui, par le carré noir, la tête la première. Tu te reçois sur de la pierre. Derrière toi, le guichet se ferme ; on en tire les deux verrous.",
      "« À la loge, la glane. On montrera ça à Monsieur le Maître après midi. Après midi, il aura le temps. » Une porte de planches claque sur toi. Tu es dans la Tour. Tu y es de la mauvaise manière, et quelqu'un le sait.",
    ],
    choices: [{ label: "Tâter la porte de la loge", to: "K14r_loge", big: true }] },

  K14r_loge: { act: "IV", title: "La loge du portier", place: "tour", ambiance: "chateau",
    text: [
      "C'est un réduit de portier, large comme une huche. Il y a là un tabouret, une cruche, et un vieux de 541 assis dessus, pris la bouche ouverte, sa pipe à la main : le concierge de la Tour, qui écoutait sonner midi à travers sa porte. Depuis soixante ans, on enferme chez lui ce dont on ne sait que faire.",
      "La porte a un loquet à poucier, et le poucier est dehors. Une fente court sous la traverse. Tu as passé ton enfance devant des portes que leurs maîtres avaient fermées en partant pour toujours, et tu sais ce que vaut un loquet.",
      "Tu tires de ta doublure l'arête de brochet qui te sert à cela. Tu la glisses dans la fente, tu cherches la clenche, tu lèves. Elle monte. Tu attends que les pas de la relève aient descendu ; tu comptes les piques qui sonnent sur les marches ; tu pousses.",
      "Le vieux n'a rien vu. Tu lui remets, en passant, sa pipe d'aplomb entre les doigts. Entre gens qu'on enferme, cela se doit.",
    ],
    choices: [{ label: "Pousser la porte de planches", to: "K14r_seul_dedans", big: true }] },

  K14r_seul_dedans: { act: "IV", title: "Le palier de pierre", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: PERDU }, text: "Tu es dedans. Les cinq sont entrés devant toi, courbés, et ils se sont redressés dans le noir en soufflant ; aucun ne s'est retourné. Un homme qui vient de toucher sa prise regarde sa paume, et toi, tu marches derrière des paumes." },
      { if: PERDU, text: "Tu es sur le palier. Le brigadier est descendu placer ses hommes. Il remontera : il t'a promis à quelqu'un." },
      "Il fait froid, d'un froid de cave, qui sent le métal. Après le soleil de la place, tu ne vois d'abord que deux lanternes, et entre elles une pendule de service, arrêtée sur midi.",
      "Puis l'œil s'y fait. Un palier de pierre, étroit. À gauche, une porte de fer, basse, doublée en dedans d'une herse neuve. En face, une vis qui monte dans l'épaisseur du mur, autour d'un puits vide : on y a tendu une chaîne, avec les plombs de la Régence. Au milieu de ce puits, du haut en bas, pend un fil de laiton, fin comme un cheveu, raide comme une tringle.",
      "Et à droite, l'escalier qui descend. Il s'enfonce le long du mur, sans rampe, avec le vide à main gauche ; de ce vide monte une lueur grise, de perle, qui n'éclaire rien. Il y a une lanterne toutes les dix marches, et sous chaque lanterne des casaques, le dos à la pierre, la pique au pied. Tu comptes ce que tu vois avant le tournant : quarante. Les autres sont plus bas.",
      { with: "jehan", text: "Jehan s'est coulé derrière toi, sa casaque noire boutonnée jusqu'au cou. Il te souffle à l'oreille : « La quarante et unième sonne. Elle est descellée. On y a perdu un homme en mars. »" },
    ],
    choices: [
      { label: "Laisser Jehan te mener par le bras, comme une prise qu'on descend", hide: { not: JEHAN }, to: "K14r_seul_jehan", big: true },
      { label: "Passer dessous : les corbeaux de pierre qui portent les marches",
        test: { dom: "nature", diff: 12, label: "Quatre-vingts corbeaux, à bout de bras, au-dessus du gris", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { to: "K14r_corbeaux", fx: { ep: ["histoire", 800] } },
        lose: { to: "K14r_alerte" } },
      { label: "Descendre du côté du vide, entre deux lanternes, au ras du bord",
        test: { dom: "discretion", diff: 12, label: "Le bord des marches, où personne ne met le pied", help: [{ if: { voie: "leste" }, v: 10 }, { if: { has: "r:vu_releve" }, v: 5 }] },
        win: { to: "K14r_bord", fx: { ep: ["histoire", 800] } },
        lose: { to: "K14r_alerte" } },
    ] },

  K14r_seul_jehan: { act: "IV", title: "Une marche de gagnée", place: "tour", ambiance: "chateau", fx: { flag: "r:jehan_marche", ep: ["perso", 800] },
    text: [
      "Il te prend le bras au-dessus du coude, rudement, pour que cela se voie. « Baisse la tête. Traîne un peu. » Et il descend, du pas réglé d'une ronde, en te tenant du côté du mur.",
      "« Prise au guichet, dit-il à la première lanterne. Monsieur le Maître la veut en bas. » On s'écarte. Dix marches. « Prise au guichet. » On s'écarte encore. Les hommes regardent leur paume, puis ta gorge, où pend un sablier ; ils font le compte de ce qu'il contient, et ils se taisent : ce qui descend chez le Maître lui appartient.",
      "À la trentième marche, un sergent lève sa lanterne. Il a une figure carrée, grêlée. Il regarde Jehan longtemps.",
      "« Toi, je te connais. Tu étais de garde à Arvoise. On t'a porté déserteur le mois dernier. — On m'a porté bien des choses. — Tu avais une sœur qui lavait pour la compagnie. — Je l'ai toujours. » Le sergent hésite. Sa pique a bougé d'un doigt, et s'est arrêtée. On frappe mal un homme avec qui l'on a mangé la soupe : il y faut un ordre, et l'ordre est en bas.",
      "Jehan t'a lâché le bras. Il ne se tourne pas vers toi. Il dit, de la même voix, comme s'il parlait toujours au sergent : « Ça descend tout seul. Ça sait le chemin. Moi, je reste causer. » Sa main, derrière son dos, te fait signe, deux fois, vers le bas.",
      "Tu descends. Derrière toi, on parle d'Arvoise, de soupe, d'une lavandière. Cela fait une marche de gagnée, puis dix.",
    ],
    choices: [{ label: "Descendre, la tête basse", fx: { leave: "jehan" }, to: "K14r_descente", big: true }] },

  K14r_corbeaux: { act: "IV", title: "Par-dessous", place: "tour", ambiance: "chateau",
    text: [
      "Au bord du palier, tu t'assois, tu te retournes, et tu te laisses couler dans le vide, les doigts sur l'arête. Tes pieds cherchent. Ils trouvent : chaque marche est portée par un corbeau de pierre, gros comme une tête de cheval, qui sort du mur d'une coudée.",
      "Tu descends par-dessous. C'est une échelle couchée, à quatre-vingts barreaux, au-dessus de rien. On passe d'un corbeau à l'autre à bout de bras, le ventre contre la paroi, qui sue. Au-dessus de ta tête, à l'épaisseur d'une dalle, il y a des semelles. Tu les entends racler. Tu entends un homme bâiller, et un autre se plaindre que le fourrier pèse court.",
      "Sous toi, le gris. Tu avais résolu de n'y point regarder, et tu y regardes. Cela n'a pas de fond ; cela luit ; cela monte vers toi d'une haleine froide, égale, où le sable de ton sablier se met à couler plus vite. Tu le sens filer contre ta poitrine, comme un pouls qui ne serait pas le tien.",
      "Vers le quarantième corbeau, un grain tombe d'une paume, là-haut, passe devant ta figure en brillant, et descend. Tu le suis des yeux. Il descend longtemps. Tu ne le vois pas arriver.",
      "Au soixantième, le mur fait un coude. Il y a là un rebord, et au-dessus du rebord un trou d'ombre, dans la muraille, du côté des marches : une niche. Tu t'y hisses par les poignets, entre deux lanternes, pendant qu'on se retourne vers une toux.",
    ],
    choices: [{ label: "Te tasser au fond de la niche", to: "K14r_niche", big: true }] },

  K14r_bord: { act: "IV", title: "Où personne ne met le pied", place: "tour", ambiance: "chateau",
    text: [
      "Les hommes d'un escalier sans rampe se tiennent au mur. Tous. Ils y ont le dos, les talons, la nuque ; et ils regardent devant eux, à hauteur d'homme, vers le vide, pour ne pas le voir.",
      "Tu descends donc à quatre pattes, au ras du bord, sous leur regard, comme on passe sous une table. Tu as ôté tes sabots ; tu les tiens aux dents par la bride. La pierre est usée en biseau, grasse, froide. Ta main gauche est dans le rien une fois sur deux.",
      "Entre deux lanternes, il y a dix marches de noir. Sous chaque lanterne, tu t'aplatis, tu attends qu'un homme se mouche, qu'un autre change de pied, et tu passes dans le bruit qu'ils font. Un glaneur apprend cela dans les fermes prises : on y marche au pas des choses qui craquent toutes seules.",
      { with: "jehan", text: "Jehan te suit debout, à trois marches, en homme de ronde, et répond pour deux quand on gronde un *qui vive.* À la quarante et unième, il allonge le pas, et l'enjambe. Tu l'enjambes après lui." },
      { if: { not: JEHAN }, text: "À la quarante et unième, la pierre bouge sous ta paume, d'un cheveu. Tu retires ta main avant le bruit. Tu passes sur la suivante en rampant, le cœur dans les dents avec tes sabots." },
      "À la soixantième, l'escalier tourne. Il y a là, dans le mur, un trou d'ombre : une niche à lanterne, profonde, où personne n'a mis de lanterne. Tu y roules.",
    ],
    choices: [{ label: "Te tasser au fond de la niche", to: "K14r_niche", big: true }] },

  K14r_alerte: { act: "IV", title: "« À la glane ! »", place: "tour", ambiance: "chateau", fx: { flag: "r:escalier_perdu", pv: -4 },
    text: [
      "Cela tient à peu de chose : un gravier, qui part sous ton genou, et qui tombe. Dans cet escalier, tout ce qui tombe s'écoute. Trois têtes se penchent.",
      "« À la glane ! Sur les marches ! » Une pique racle la pierre à un pouce de tes doigts. Une autre te prend en travers des reins, du bois, et t'envoie contre le mur. Tu te relèves dans des jambes. Ils sont gênés par ce qui te sert : la pente, le noir, le bord, et la peur qu'ils ont tous de faire un pas de trop.",
      "Tu descends. Tu descends comme on dévale un talus, sur les talons, sur les mains, sous les hampes qui se croisent trop haut. Quelqu'un te saisit par le sachet ; le lacet tient ; c'est lui qui lâche, parce qu'il a senti le vide dans son dos. À la quarante et unième marche, la pierre sonne sous toi comme une cloche fêlée, et toute la file, au-dessus, sait où tu es.",
      { with: "jehan", text: "Jehan s'est jeté en travers, derrière toi, les bras ouverts, sa casaque noire au milieu des casaques noires. « C'est moi ! Jehan ! D'Arvoise ! » Ils hésitent à frapper un des leurs. Cela dure le temps de dix marches." },
      "Au tournant, il y a un trou d'ombre dans le mur. Tu t'y jettes. Les piques passent, descendent encore six marches sur leur élan, s'arrêtent. On crie d'en haut qu'on tienne les rangs : la consigne est de garder l'escalier, et l'on se souvient d'un homme perdu en mars.",
      "Ils savent que tu es dessous. Ils n'ont personne à y envoyer avant la relève. Tu as jusqu'à la demie.",
    ],
    choices: [{ label: "Reprendre souffle au fond de la niche", fx: { leave: "jehan" }, to: "K14r_niche", big: true }] },

  // ---------- the stair taken by force ----------
  K14r_assaut: { act: "IV", title: "La main levée", place: "tour", ambiance: "chateau",
    text: [
      "Tu lèves la main.",
      { after: "r:glaneurs_parvis", text: "Les toits se vident d'un coup. Quarante corps tombent des chéneaux sur le dais rouge, qui tient le temps d'un juron et crève. Le velours s'abat sur les dix casaques avec ses hampes, ses franges, ses quatre porteurs de 541, raides comme des chandeliers ; et là-dessous cela remue, cela jure, cela cherche ses piques, pendant que la Courtepaille, debout sur une gouttière, crie qu'on lui abîme sa part." },
      { after: "r:jehan_blancs", text: "Les trente badauds en manteau blanc ont cessé d'être des badauds. Ils sont à la porte en dix enjambées, sur deux files, sans un cri, comme à l'exercice. Celui qui mangeait une pomme la tient encore entre ses dents." },
      { after: "r:cuivre_parvis", text: "De la ruelle sort un bruit de chaudronnerie en marche. Les grands hommes de cuivre viennent au pas, sur un rang, lanternes allumées, les bras le long du corps ; et devant eux la place s'ouvre, noirs, valets, pliants, comme un blé devant des bœufs. Carillon marche à leur tête et sonne treize." },
      { if: HAUDOIN, text: "Aux grilles du Palais, une voix de sergent dit un seul mot. Deux cents manteaux blancs font un quart de tour ; on entend le coup de talon jusqu'à l'estrade. Ils viennent à la Tour au pas de route, l'arme sur l'épaule, et Haudoin marche devant, son rôle roulé dans le poing, avec la figure d'un homme qui exécute enfin un ordre qu'il comprend." },
      { with: "jehan", text: "Jehan est arrivé le premier. Il a mis son pied dans le guichet, et son épaule. Il crie dans le noir, à pleine voix, un nom que tu n'as jamais entendu dans sa bouche : le sien." },
      { with: "rouget", text: "Rouget a filé par les gouttières. Tu le revois sur le vantail même, à cheval sur le bronze, qui hurle aux toits : « Ça chante ! Ça chante ! »" },
      "Le guichet est à toi. Derrière, il y a un palier, quatre-vingts marches sans rampe, et soixante hommes qui ont entendu.",
    ],
    choices: [{ label: "Passer le carré noir", to: "K14r_escalier", big: true }] },

  K14r_escalier: { act: "IV", title: "Quatre-vingts marches", place: "tour", ambiance: "chateau", battle: "escalier", battleLabel: "Placer tes gens dans la Tour",
    text: [
      { before: "bataille:escalier", text: "Il fait froid, d'un froid de cave, qui sent le métal. Deux lanternes, une pendule de service arrêtée sur midi, un palier de pierre où l'on tient à vingt. Une vis monte, barrée d'une chaîne. Un escalier descend le long du mur, sans rampe, avec le vide à main gauche, et de ce vide vient une lueur de perle." },
      { before: "bataille:escalier", text: "Il y a trois endroits à tenir. Le guichet, par où ceux de la place voudront rentrer. Le palier, où tout se croise. Et les marches, où sont les soixante, et qui sont ton chemin." },
      { after: "bataille:escalier", text: "Le palier, les deux lanternes, la pendule arrêtée. On ramasse des piques." },
    ],
    choices: [
      { label: "Descendre", hide: { not: { has: "bataille:escalier" } }, to: "K14r_descente", big: true },
    ] },

  K14r_escalier_tenu: { act: "IV", title: "« Passe. On tient. »", place: "tour", ambiance: "chateau", hub: true, backName: "le palier",
    text: [
      { first: true, text: "Cela finit comme finissent les choses dans un escalier : par le haut. Une pique tombe sur la pierre, puis une autre, et le bruit descend de marche en marche, jusqu'au tournant, jusqu'au noir. Soixante hommes payés au grain ont fait leur compte. Ils s'assoient contre le mur, les mains ouvertes sur les genoux." },
      { first: true, text: "L'escalier est à toi. On te le dit de trois côtés à la fois, avec trois accents : « Passe. On tient. »" },
      { again: true, text: "Le palier. Les casaques noires sont assises le long du mur, les mains ouvertes. On tient." },
      { after: "r:jehan_blancs", text: "Un manteau blanc se tient debout toutes les trois marches, face au vide, bien d'aplomb. Ils ont l'air de garçons de ferme qu'on a mis à garder une barrière." },
      { if: HAUDOIN, text: "Le sergent Haudoin a pris la loge du portier pour corps de garde. Il a cloué l'ordonnance à la porte, avec son propre couteau, à hauteur d'yeux." },
    ],
    choices: [
      { label: "Le fourrier, sur son baril", hide: { seen: "K14r_baraton" }, to: "K14r_baraton" },
      { label: "La pendule de service", hide: { seen: "K14r_pendule" }, to: "K14r_pendule" },
      { label: "La vis qui monte, sous sa chaîne", hide: { seen: "K14r_vis_chaine" }, to: "K14r_vis_chaine" },
      { label: "Les glaneurs", hide: { any: [{ not: { has: "r:glaneurs_parvis" } }, { seen: "K14r_tenu_glaneurs" }] }, to: "K14r_tenu_glaneurs" },
      { label: "Les hommes de cuivre", hide: { any: [{ not: { has: "r:cuivre_parvis" } }, { seen: "K14r_tenu_cuivres" }] }, to: "K14r_tenu_cuivres" },
      { label: "Descendre : il est la demie passée", to: "K14r_descente", big: true },
    ] },

  K14r_baraton: { act: "IV", title: "Celui qui pèse court", place: "tour", ambiance: "chateau", fx: { stock: { sable: 4 }, ep: ["histoire", 400] },
    text: [
      "On a roulé son baril jusque sur le palier, et on l'a assis dessus. C'est un petit homme rond, à joues de cire, qui tient encore sa mesure d'étain à la main, par contenance.",
      "« Je suis comptable, dit-il à qui passe. Je n'ai frappé personne. Je pèse. » Un des noirs assis le long du mur lui répond, sans lever la tête, qu'il pèse court, et que soixante paumes le savent. Le fourrier Baraton regarde ailleurs.",
      "Sa mesure a un double fond : tu le vois en la lui prenant des doigts. Il en tombe, quand tu la retournes, de quoi tenir une heure. Tu le verses dans ton sachet, devant lui.",
      "« C'est un vol, dit-il. — C'est une pesée », dit le noir.",
    ],
    choices: [{ back: "K14r_escalier_tenu" }] },

  K14r_pendule: { act: "IV", title: "Arrêtée sur midi", place: "tour", ambiance: "chateau",
    text: [
      "C'est une pendule de service, à caisse de noyer, comme il y en a dans les corps de garde. Ses deux aiguilles sont l'une sur l'autre, droites. Le balancier est resté de côté, au bout de sa course, et il y tient, penché, contre toute raison.",
      "Sur la caisse, une main a tracé des bâtons à la craie, par paquets de cinq. Il y en a cinquante-neuf paquets, et un soixantième commencé de ce matin. Les sergents de la Maîtrise, qui se la sont passée de père en fils, ont compté les Serments sur le dos de la seule horloge de la ville qui ait dit vrai une fois pour toutes.",
      "Dessous, à l'encre, d'une écriture ancienne et penchée : *Onze heures et cinq. Il est descendu.* On a voulu gratter la ligne. Elle a tenu.",
    ],
    choices: [{ back: "K14r_escalier_tenu" }] },

  K14r_vis_chaine: { act: "IV", title: "Deux cent quatre-vingts", place: "tour", ambiance: "chateau",
    text: [
      "La vis s'enroule dans le mur, vers le haut, autour d'un puits vide large de trois pieds. La chaîne qui la barre porte les plombs de la Régence : on les renouvelle à chaque Serment, et personne n'a monté là depuis que la Reine y dort. C'est le seul endroit de la Tour que la Maîtrise n'ait pas osé prendre.",
      "Tu te penches sous la chaîne, dans le puits. Il n'y a rien à voir pendant très longtemps. Puis, tout en haut, un point de jour, de la grosseur d'un grain de mil.",
      "Le fil de laiton passe devant ta figure. Tu approches l'oreille. Il rend un son, très fin, continu, qu'on entend moins qu'on ne le reçoit dans les dents. Il n'a ni commencement ni fin. C'est une note qu'on a frappée il y a soixante ans, là-haut, et qui est restée dans le fil comme une mouche dans l'ambre.",
      "Au bout de ce fil, sous une cloche, il y a quelqu'un. Tu le sais. Tu retires ta tête.",
    ],
    choices: [{ back: "K14r_escalier_tenu" }] },

  K14r_tenu_glaneurs: { act: "IV", title: "La part de la Courtepaille", place: "tour", ambiance: "chateau",
    text: [
      "Ils tiennent le guichet, à six, accroupis dans le carré de jour, avec leurs frondes et leurs crocs à sacs. Les autres sont remontés aux toits. Le velours du dais est déjà roulé, ficelé, et parti par une gouttière.",
      "La Courtepaille est assise sur le seuil, les coudes aux genoux. Elle te regarde venir sans plaisir.",
      "« J'ai perdu deux dents à Margot la Fouine et un doigt au grand Lubin. Pour un escalier. » Elle se cure un ongle avec la pointe d'un croc. « Je te croyais de l'espèce qui glane pour soi. Tu es de l'espèce qui descend dans les trous pour les autres. C'est moins sûr, comme espèce. »",
      { after: "r:porte_craie", text: "« Ta dette de la porte à la craie, je la raye. Je t'en ouvre une neuve : tu me dois de remonter. »" },
      { before: "r:porte_craie", text: "« Tu me dois de remonter. J'ai l'habitude qu'on me paie. »" },
    ],
    choices: [{ back: "K14r_escalier_tenu" }] },

  K14r_tenu_cuivres: { act: "IV", title: "Treize", place: "tour", ambiance: "chateau",
    text: [
      "Les grands hommes de cuivre ont passé le guichet à genoux, l'un après l'autre, avec un bruit de marmites. Ils sont rangés sur le palier, le dos à la herse, les lanternes tournées vers l'escalier. Chacun en bouche la largeur.",
      "Aucun n'a descendu une marche. Ils regardent la lueur de perle, tous ensemble, de leurs faces sans traits ; et dans leurs poitrines on entend le sable tomber plus vite.",
      "« Ils ont été tenus, dit Carillon. Tous. La barre pèse sur eux. Ils garderont ici. » Il fait tinter, très bas, douze coups, et il en ajoute un, après un temps. « Carillon sonne treize depuis soixante ans. C'était une faute de ressort. Ce matin, c'est l'heure juste. »",
    ],
    choices: [{ back: "K14r_escalier_tenu" }] },

  K14r_escalier_perdu: { act: "IV", title: "Par le milieu", place: "tour", ambiance: "chateau",
    text: [
      "Cela casse par le milieu. Un cri sur le palier, un reflux, des dos qui te poussent ; et tu te trouves séparé{e} des tiens par une haie de hampes, du mauvais côté : celui qui descend.",
      "On se bat au-dessus de toi, dans le carré de jour du guichet, qui s'ouvre et se bouche. On se bat au bord du vide, et tu entends, deux fois, ce bruit qu'on n'entend pas : un homme qui tombe sans crier, parce qu'il compte arriver quelque part.",
      { with: "jehan", text: "Jehan est le dernier que tu vois. Il s'est mis en travers du tournant, seul, une pique ramassée dans chaque main, sa casaque noire au milieu des casaques noires. « Descends ! » Il le crie sans se retourner. « J'en ai pour un moment. J'ai mon nom à leur apprendre. »" },
      "Tu descends. Tu descends comme on dévale un talus, sur les talons, sur les mains. La bataille, là-haut, fait un bouchon, et te garde l'escalier mieux qu'une victoire : personne ne passe au travers pour te suivre, et personne ne peut dire combien de temps cela tiendra.",
    ],
    choices: [{ label: "Dévaler", fx: { leave: "jehan" }, to: "K14r_descente", big: true }] },

  K14r_descente: { act: "IV", title: "Sans rampe", place: "tour", ambiance: "chateau", fx: { leave: ["rouget", "carillon"] },
    text: [
      "Tu descends la main au mur. La pierre est froide, et elle sue. À ta gauche il y a un bord, puis rien, et dans ce rien la lueur de perle, qui monte sans éclairer, comme le souvenir d'une lumière.",
      { if: TENU, text: "Les lanternes sont restées. Sous chacune, des casaques assises, les piques en tas. On retire ses jambes pour te laisser le passage. Un vieux noir, à la vingtième marche, te dit sans lever les yeux : « Il fait plus froid en bas. Tu verras. On n'y descend pas. On n'y est jamais descendus. »" },
      { if: PERDU, text: "Les lanternes sont restées, et sous elles il n'y a plus personne : tout est remonté vers le bruit. Tu passes devant des piques posées contre le mur, une gourde, un jeu de cartes abandonné sur une marche, la dame de carreau en l'air." },
      { if: { not: { any: [TENU, PERDU] } }, text: "On s'écarte. On regarde le sachet à ton cou, et l'on se tait." },
      "Tu comptes. À la vingtième marche, on n'entend plus la place. À la quarantième, le sable de ton sablier a pris un autre train : il file, contre ta poitrine, trois grains pour un, puis quatre. C'est la première ville, et tu es dans son milieu.",
      { with: "jehan", text: "« Celle-là sonne », dit Jehan derrière toi, et il te fait enjamber la quarante et unième. Il a descendu ici six mois de faction. Il connaît chaque pierre, et aucune de celles d'après le tournant." },
      "Il n'y a aucun bruit en dessous. C'est ce qui t'arrête, un pied en l'air. Un endroit pareil devrait battre, gronder, faire quelque chose. Il se tait, comme une bête qui retient son souffle.",
      "À la soixantième marche, l'escalier tourne. Les lanternes finissent là. Dans le mur, à l'angle, il y a une niche à lanterne, profonde, où personne n'a mis de lanterne.",
    ],
    choices: [{ label: "T'arrêter à la niche", to: "K14r_niche", big: true }] },

  K14r_niche: { act: "IV", title: "La niche du tournant", place: "tour", ambiance: "chateau",
    text: [
      { first: true, text: "C'est un trou dans la muraille, haut de quatre pieds, profond d'autant. La poussière y est épaisse comme un drap, et elle a gardé une forme : au fond, la place d'un corps assis, les genoux remontés ; devant, la marque de deux semelles étroites, à talon bas." },
      { first: true, text: "Quelqu'un a attendu ici, plié comme un écolier puni. Puis il s'est levé. Les semelles sortent de la niche, tournent vers le bas, et la poussière des marches, au-delà, n'en a rien gardé : on y a trop passé le balai, les premières années." },
      { first: true, text: "Sur la paroi de gauche, à hauteur d'un homme assis, la pierre est rayée." },
      { again: true, text: "La niche, sa poussière, la place d'un corps assis." },
      { if: PERDU, text: "Au-dessus, on se bat encore, ou l'on crie des ordres. Personne ne descend. Tu as le temps d'une page." },
      { if: { not: PERDU }, text: "Il te reste vingt marches. D'ici, en avançant la tête, on verrait le bas. Tu as le temps d'une page, et tu préfères l'écrire avant d'avoir vu." },
    ],
    choices: [
      { label: "Approcher la veilleuse de la paroi rayée", hide: { seen: "K14r_niche_mur" }, to: "K14r_niche_mur" },
      { label: "T'asseoir à la place du corps assis, et ouvrir le Cahier", to: "M14", big: true },
    ] },

  K14r_niche_mur: { act: "IV", title: "Ce qu'on raye en attendant", place: "tour", ambiance: "chateau", fx: { flag: "r:lu_niche", ep: ["histoire", 500] },
    text: [
      "Ce sont des traits, faits d'une pointe de bronze, fins, réguliers, par paquets de quatre et un silence. Il y en a des rangées. Quelqu'un a compté ici les battements d'une machine, comme un médecin compte un pouls à la montre, et il a noté le compte à mesure, par habitude de ne rien laisser perdre.",
      "Vers la fin, les paquets se resserrent. La main allait plus vite que la chose comptée : elle attendait.",
      "Sous la dernière rangée, la même pointe a écrit un mot, en petites capitales d'horloger, bien d'aplomb : *JUSTE.* Et la date, que tu connais.",
      { after: "monde:coudrier_sait", text: "Plus bas, à part, en lettres plus grosses, appuyées, faites pour être lues à la flamme par quelqu'un de pressé : *À QUI VIENT D'EN BAS ET DE PLUS TARD. N'Y TOUCHEZ PAS TANT QU'ELLE TIENT. ELLE PÈSE. ATTENDEZ QU'ELLE LÂCHE.* Il n'a pas signé. Il a tracé, dessous, un petit cadran sans aiguilles." },
      { before: "monde:coudrier_sait", text: "Il n'y a rien d'autre. Celui qui attendait là ne savait pas qu'on viendrait après lui ; il a tenu ses comptes pour lui seul, et il est descendu." },
    ],
    choices: [{ back: "K14r_niche" }] },
});

Object.assign(P, {
  // ---------- the Droit ----------
  K14r_boyau: { act: "IV", title: "La rigole", place: "basse", ambiance: "temple", fx: { stock: { sable: -3 }, leave: ["jehan", "rouget", "carillon"] },
    text: [
      "Tu entres. La voûte te frôle les cheveux. Les murs sont de pierre appareillée, jointe au cheveu, sans une trace d'outil : les Fondateurs ont maçonné ce trou comme on monte une montre. Au milieu du sol court la règle de laiton, large de deux doigts, graduée. Tu marches dessus, un pied devant l'autre.",
      "Dès le vingtième pas, cela commence. Ta veilleuse baisse, sans vent. La flamme penche vers le fond, vers le point gris, comme une herbe dans un courant. Contre ta poitrine, le sable prend son train : trois grains pour un.",
      "Tu connais la lisière. Tu y es né{e}, tu y as glané dix ans, tu sais ce qu'est un pré où l'heure s'épaissit. Ici, elle coule. Tout le boyau est une rigole, tirée au cordeau, en pente douce vers un trou ; et tu descends dedans avec ta petite provision, comme une fourmi dans un entonnoir.",
      "Tu comptes les graduations. Un trait par toise, un chiffre à la dizaine. À la trentième, tu as brûlé trois pincées, et derrière toi l'escalier de l'église est une tache pâle, de la grosseur d'un ongle.",
    ],
    choices: [
      { label: "Lire ce que le pied sent sous la semelle, à chaque dizaine", hide: { seen: "K14r_boyau_regle" }, to: "K14r_boyau_regle" },
      { label: "Marcher", to: "K14r_boyau_milieu", big: true },
    ] },

  K14r_boyau_regle: { act: "IV", title: "Un mot toutes les dix toises", place: "basse", ambiance: "temple", fx: { flag: "r:lu_regle", ep: ["histoire", 500] },
    text: [
      "À chaque dizaine, le laiton porte un mot, un seul, en lettres creuses, profondes, que la semelle sent avant que l'œil les voie. On ne peut les lire qu'en marchant. C'est une phrase longue de trois cents toises, et les Fondateurs l'ont écrite pour quelqu'un qui descend.",
      "Tu reviens de dix pas, la veilleuse au ras du sol. *CE.* Dix toises. *QUI.* Dix toises. *S'AMASSE.* Tu les prends l'un après l'autre, comme on ramasse des noix le long d'un chemin.",
      "*CE QUI S'AMASSE ICI EST À TOUS.* Il y a encore des mots devant toi, dans le noir. Tu les liras avec tes pieds.",
    ],
    choices: [{ back: "K14r_boyau" }] },

  K14r_boyau_milieu: { act: "IV", title: "Le milieu du noir", place: "basse", ambiance: "temple", fx: { stock: { sable: -3 } },
    text: [
      "Au milieu, les deux bouts se valent : la tache pâle de l'église, derrière, et le gris, devant, ont la même grosseur. Tu es dans le noir comme une bulle dans un niveau.",
      "C'est là que le son se dérange. Ton pas te revient avant que tu l'aies posé. Tu t'arrêtes, un pied en l'air, et tu l'entends frapper le laiton. Tu tousses : la toux arrive par-devant, de très loin, vieillie. Un endroit où l'heure coule si fort emporte le bruit avec elle, et le rend par où il peut.",
      { after: "r:lu_regle", text: "Sous ta semelle, les mots ont continué. *ET NE SE TIENT.* Dix toises. Le dernier est plus usé que les autres, comme si l'on avait marché dessus exprès. *PAS.*" },
      { after: "monde:droit_grave", text: "Sur la règle, il y a une goutte de suif, ronde, figée, et plus loin une autre. Quelqu'un a passé ici avec une chandelle qui coulait, il y a soixante ans et une nuit, d'un pas court, pressé, en comptant tout haut." },
      "Tu as brûlé six pincées. Le sablier, à ton cou, est léger.",
      "Et il y a quelque chose en travers du boyau, à dix pas, par terre.",
    ],
    choices: [{ label: "Approcher la veilleuse", to: "K14r_boyau_homme", big: true }] },

  K14r_boyau_homme: { act: "IV", title: "Celui qui y allait aussi", place: "basse", ambiance: "temple",
    text: [
      { first: true, text: "C'est un homme. Il est à plat ventre sur la règle, les coudes écartés, le menton levé vers le gris, et il rampe. Il rampe depuis soixante ans : pris au milieu d'une brassée, un genou remonté, une main en avant, les doigts ouverts à un pouce du laiton." },
      { first: true, text: "Il est vêtu de sombre, serré, sans un bouton qui brille. Il a noirci sa figure au bouchon. Il traîne derrière lui, par une courroie, un sac de cuir plat, et il a entre les dents une lanterne sourde, éteinte. Tu connais cet habit-là : c'est le tien, en plus riche. Un voleur de 541, qui avait raisonné juste. Le jour du Grand Midi, toute une ville regarde en l'air, et ce qui est sous terre se garde seul." },
      { first: true, text: "Il venait chercher du sable à la source. Il a su trouver l'église, la dalle, l'anneau. Il lui manquait trente toises quand le onzième coup l'a couché là, le menton levé, avec sur toute la figure l'air d'un homme qui voit enfin le bout." },
      { again: true, text: "Le voleur de 541, à plat ventre sur la règle, le menton levé." },
      { after: "monde:droit_grave", text: "Les gouttes de suif s'arrêtent à vingt pas derrière lui, et reprennent devant. La copiste l'a précédé d'une nuit. Elle était remontée depuis longtemps quand il est descendu, et ils ont manqué de se connaître." },
      "Tu l'enjambes. Cela se fait avec des égards, entre gens du métier.",
    ],
    choices: [
      { label: "Ouvrir le sac de cuir", hide: { item: "pied_de_biche" }, fx: { item: "pied_de_biche", ep: ["histoire", 400] }, to: "K14r_boyau_sac" },
      { label: "Aller à la grille", to: "K14r_mur", big: true },
    ] },

  K14r_boyau_sac: { act: "IV", title: "Des outils bien tenus", place: "basse", ambiance: "temple",
    text: [
      "Le sac s'ouvre sur un rouleau de serge, à pochettes, comme une trousse de chirurgien. Chaque outil y a sa place, graissé, enveloppé d'un chiffon : des crochets, une scie à métaux fine comme un fil, une fiole d'huile, et un pied-de-biche court, en acier bleu, dont la fourche est limée en biseau.",
      "C'est l'ouvrage d'un homme soigneux. Il avait prévu une grille.",
      "Tu prends le pied-de-biche. Tu laisses le reste, et tu refermes le sac : il se réveillera peut-être un jour, et un artisan aime retrouver sa trousse en ordre. Dans la pochette vide, tu glisses une noisette de 601. C'est l'usage, chez les glaneurs, quand on emprunte à un pris.",
    ],
    choices: [{ back: "K14r_boyau_homme" }] },

  K14r_mur: { act: "IV", title: "Devant la grille", place: "tour", ambiance: "temple",
    text: [
      { first: true, text: "Le boyau s'élargit en une chambre carrée, de trois pas. Au fond, il y a une grille de bronze, verte, à barreaux gros comme le poignet. Derrière elle, à dix toises, le gris a cessé d'être une perle : il emplit une arche entière, et il luit par en dessous, sans source, d'une lueur qui n'a pas d'heure." },
      { first: true, after: "monde:droit_grave", text: "Le mur de droite est gravé. Les lettres sont hautes d'un pouce, droites, espacées, d'une main qui a copié des antiphonaires et qui tenait cette nuit-là un burin pour la première fois. Elles sont à hauteur d'yeux. Par terre, les éclats de pierre ont soixante ans et la fraîcheur d'hier ; il y a aussi un bout de chandelle, et une croûte où l'on voit des dents." },
      { first: true, after: "monde:droit_grave", text: "*DU RENDRE. La barre tenue se rend par deux mains, l'une d'en haut, l'autre d'en bas. Celui d'en haut se sera trouvé sous la cloche quand elle s'est tue, et y sera resté. Celui d'en bas viendra d'une heure que le coup n'a pas prise : car la barre pèse sur ceux qu'elle a tenus. Le coup rendu défait la prise.*" },
      { first: true, after: "monde:droit_grave", text: "Dessous, elle a tracé un rectangle vide, de la grandeur d'une page, et dans le coin : *Le quarantième chapitre est blanc dans le Livre. Je le laisse blanc.* Puis la date, d'une nuit de juin 541." },
      { first: true, after: "monde:droit_coin", text: "Et plus bas, à part, en lettres deux fois plus grosses, creusées à faire saigner les doigts : *LE COIN SE CHASSE PAR LE PETIT BOUT, À GAUCHE DU LEVIER QUAND ON REGARDE LE PUITS.*" },
      { first: true, before: "monde:droit_grave", text: "Les murs sont nus. Sur le linteau de la grille, les Fondateurs ont laissé leur marque, de la largeur d'une main : un cadran sans aiguilles. Dessous, plus tard, d'un ciseau moins sûr : *Condamné par le Conseil, 481.*" },
      { again: true, text: "La chambre carrée, la grille verte, le gris qui emplit l'arche." },
      "Il fait un silence à entendre ton sablier. Tu l'entends : il chuinte, comme une source sous des feuilles.",
    ],
    choices: [{ label: "T'asseoir contre le mur, et ouvrir le Cahier", to: "M14", big: true }] },

  // ---------- after M14 ----------
  K14r_tantot: { act: "IV", title: "Midi moins dix", place: "tour", ambiance: "chateau",
    text: [
      "Tu fermes le Cahier. Tu le glisses dans ta chemise, à plat, contre la peau.",
      { if: ESC, text: "Vingt marches. Passé le tournant, il y a encore un mur à ta droite, et à ta gauche le vide a changé : il a un fond, à présent, tout près, gris, qui luit. L'escalier y descend comme une cale descend dans un port." },
      { if: ESC, with: "jehan", text: "Jehan descend derrière toi, sans sa pique. Il l'a laissée au tournant, appuyée dans la niche, comme on laisse son bâton à la porte d'une église." },
      { if: DROIT, text: "Tu te lèves. La grille est devant toi, verte, haute, scellée dans la pierre par quatre gonds gros comme des poings. Elle a une serrure à bosse, où l'on mettrait le pouce. De l'autre côté, il y a ce pour quoi tu as marché neuf jours." },
    ],
    choices: [
      { label: "Descendre les vingt dernières marches", hide: DROIT, to: "K14r_basse", big: true },
      { label: "Mettre dans la serrure la clef noire du Trésor", hide: { any: [ESC, { not: { item: "clef_droit" } }] }, to: "K14r_grille_clef", big: true },
      { label: "Lever la grille de ses gonds, au pied-de-biche", hide: { any: [ESC, { not: { item: "pied_de_biche" } }] },
        test: { dom: "nature", diff: 8, label: "Quatre gonds de quatre cents ans", help: [{ if: { voie: "tetu" }, v: 10 }] },
        win: { to: "K14r_grille_gonds" }, lose: { to: "K14r_grille_dure" } },
      { label: "Regarder les gonds de près, les mains nues", hide: { any: [ESC, { item: "pied_de_biche" }] },
        test: { dom: "savoir", diff: 12, label: "Par où une grille se défait", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { to: "K14r_grille_gonds" }, lose: { to: "K14r_grille_dure" } },
    ] },

  K14r_grille_clef: { act: "IV", title: "Défense de la sortir", place: "tour", ambiance: "chateau",
    text: [
      "La clef est longue d'un empan, noire, au panneton en peigne. Son étiquette disait : *Condamnée par le Conseil, 481. Défense de la sortir.* Tu l'as sortie il y a trois jours, d'une armoire à quarante crochets.",
      "Elle entre. Elle tourne d'un quart, et s'arrête sur cent vingt ans de vert-de-gris. Tu craches dans la serrure, comme font les glaneurs ; tu attends ; tu reprends. Le pêne recule avec un bruit de dent qu'on arrache.",
      "La grille pivote. Elle pèse autant qu'une porte d'église, et elle tourne sous deux doigts : les Fondateurs l'ont pendue d'aplomb.",
    ],
    choices: [{ label: "Passer", to: "K14r_basse", big: true }] },

  K14r_grille_gonds: { act: "IV", title: "Par où cela se défait", place: "tour", ambiance: "chateau",
    text: [
      "Une grille se ferme par sa serrure et se tient par ses gonds. Celui qui l'a condamnée, en 481, a pensé à la serrure.",
      "Les gonds sont à broche. Quatre broches de bronze, grosses comme le pouce, enfilées par le haut, qu'un siècle de suintement a soudées dans leurs œils. Tu en prends une par-dessous. Tu pèses. Elle monte d'un cheveu, avec un cri ; puis d'un doigt ; puis elle te reste dans la main, verte et luisante, comme un os.",
      "À la quatrième, la grille descend d'un pouce sur le seuil, et penche. Tu la tires à toi par le bas. Elle s'ouvre du mauvais côté, sur sa serrure fermée, qui lui sert de charnière.",
    ],
    choices: [{ label: "Passer", to: "K14r_basse", big: true }] },

  K14r_grille_dure: { act: "IV", title: "Une broche sur quatre", place: "tour", ambiance: "chateau", fx: { stock: { sable: -2 }, pv: -3 },
    text: [
      "Les gonds sont à broche, et les broches sont soudées par un siècle de vert-de-gris. La première te prend le temps de trois Pater. La seconde t'ouvre la paume. À la troisième, tu entends ton sablier, qui chuinte, et tu sais ce que chaque coup te coûte : ici, on paie le temps de sa peine au triple.",
      "La quatrième tient. Tu t'arc-boutes, le dos au mur, les deux pieds contre le barreau du bas, et tu pousses avec tout ce que neuf jours t'ont laissé. La grille gémit, plie sur son dernier gond, et s'écarte de la largeur d'un corps maigre.",
      "Tu passes de biais, en laissant de la chemise et un peu de peau. Tu as perdu deux pincées devant une porte.",
    ],
    choices: [{ label: "Passer", to: "K14r_basse", big: true }] },

  // ---------- the lower Chamber, 601 ----------
  K14r_basse: { act: "IV", title: "La Chambre basse", place: "tour", ambiance: "chateau", hub: true, backName: "le bord du puits", fx: { flag: "r:vu_basse", ep: ["histoire", 800] },
    text: [
      { first: true, text: "C'est une salle ronde, voûtée, sans fenêtre, grande comme une église de village. Le milieu en est un trou : un puits sans margelle, large de quatre toises." },
      { first: true, text: "Le puits est plein. C'est la première chose qu'on voit, et il faut un moment pour la croire. Le gris affleure le pavé ; il le dépasse ; il fait au-dessus du bord un bombement lisse, tendu, comme le lait dans une casserole à l'instant qui précède. Il luit par en dessous. Il est immobile, et l'on sent que sa peau seule le retient." },
      { first: true, text: "En travers, sur deux chevalets de chêne noir, une barre de bronze, grosse comme un tronc. Elle est au bas de sa course, noyée dans le gris jusqu'à mi-corps, et elle y est depuis soixante ans. Au bout, du côté de l'escalier, un levier se dresse, haut comme un homme. Un vieillard le tient à deux mains." },
      { first: true, text: "Du milieu de la barre, un fil de laiton monte droit dans un œil de la voûte. Autour du puits, en cercle, douze berceaux de chêne portent des tuyaux de verre gros comme la cuisse, qui boivent au bord et s'en vont dans le mur." },
      { first: true, if: ESC, text: "L'escalier t'a posé{e} au bord, à six pas du levier. Au fond, derrière les berceaux, une grille de bronze ferme un boyau." },
      { first: true, if: DROIT, text: "Tu es entré{e} par le fond, entre deux berceaux. En face, de l'autre côté du puits, un escalier sans rampe monte le long du mur vers un tournant." },
      { first: true, text: "Sur la paroi, une pendule de service marque midi. Son balancier est resté de côté, au bout de sa course." },
      { again: true, text: "La salle ronde, le puits bombé, la barre noyée, le vieillard au levier. Le gris a gagné l'épaisseur d'un doigt." },
      { with: "jehan", before: "r:jehan_nom", text: "Jehan s'est arrêté sur la dernière marche. Il regarde le vieillard, et il a joint les talons." },
    ],
    choices: [
      { label: "Le vieillard au levier", to: "K14r_coudrier" },
      { label: "Le pied du levier, à gauche quand on regarde le puits", to: "K14r_pied" },
      { label: "Le bord du gris", hide: { seen: "K14r_puits" }, to: "K14r_puits" },
      { label: "Le fil de laiton", hide: { seen: "K14r_fil" }, to: "K14r_fil" },
      { label: "Les douze berceaux", to: "K14r_berceaux" },
      { label: "L'escalier d'en face, jusqu'au tournant", hide: { any: [ESC, { seen: "K14r_tournant" }] }, to: "K14r_tournant" },
      { label: "Te placer à gauche du levier, et attendre midi", to: "K14r_moins_cinq", big: true },
    ] },

  K14r_coudrier: { act: "IV", title: "Le Maudit", place: "tour", ambiance: "chateau",
    text: [
      { first: true, text: "Il a soixante-dix ans. Il est tête nue, en houppelande, avec sur les épaules une pèlerine grise que tu prends d'abord pour le gris de la ville, et qui est de la toile d'araignée : cent ans d'araignées, pris dans soixante ans de midi." },
      { first: true, text: "Ses deux mains sont fermées sur la poignée de cuir, l'une au-dessus de l'autre. Entre ses doigts et le cuir, il reste un vide, qui a une forme : celle de deux poignets. On les lui a retirés des mains comme on tire une lame d'un fourreau, et il est resté à serrer la place." },
      { first: true, text: "Il a le nez busqué, avec une bosse au milieu, et les talons joints. Sa figure te surprend. Tu attendais de la colère, ou la peur des pris qu'on a saisis en courant. Il a l'air attentif. C'est la figure d'un professeur qui écoute jusqu'au bout une mauvaise réponse, pour savoir exactement où elle se trompe." },
      { first: true, text: "Voilà celui que la Chronique nomme le Maudit, et dont on montre la fenêtre aux recrues pour qu'elles crachent." },
      { again: true, text: "Le vieillard, sa pèlerine d'araignées, ses deux mains fermées sur la place de deux poignets." },
      { after: "monde:chasse_en_bas", text: "Sa manche gauche pend, ouverte au poignet. Un fil y pend aussi, d'un seul point, cassé." },
      { after: "r:coudrier_eveille", text: "Il a sur le pouce droit un grain de sable de 601, vidé, terne, que tu y as laissé." },
    ],
    choices: [
      { label: "Poser une pincée sur son pouce", hide: { has: "r:coudrier_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:coudrier_eveille", ep: ["perso", 1000] }, to: "K14r_coudrier_eveil", big: true },
      { label: "Laisser Jehan approcher", hide: { any: [{ not: JEHAN }, { has: "r:jehan_nom" }] }, fx: { flag: "r:jehan_nom", ep: ["perso", 800] }, to: "K14r_coudrier_jehan" },
      { back: "K14r_basse" },
    ] },

  K14r_coudrier_eveil: { act: "IV", title: "Une horloge à deux aiguilles", place: "tour", ambiance: "chateau",
    text: [
      "Le grain touche la peau, et le gris se retire de lui comme l'eau d'un linge qu'on tord. Il respire. Ses mains se resserrent sur la poignée, trouvent le vide, s'étonnent.",
      "« Il a retiré ses poignets. » La voix est sèche, nette, un peu nasale. Il regarde la place vide entre ses doigts. « C'est un garçon soigneux. Il range toujours ses outils. »",
      "Puis il te voit. Il voit le sablier à ton cou, le charbon sous tes ongles, la salle sans apprentis, le puits bombé. Il ne lâche pas le levier. « Quelle heure ? — Midi moins dix. — De quel jour ? » Tu le lui dis. Tu lui dis l'année. Il la reçoit sans un geste ; seule sa moustache bouge.",
      "« Soixante. J'en avais calculé cinquante-huit, pour la voûte. J'ai toujours été court sur les résistances. »",
      { after: "monde:coudrier_sait", text: "« Vous êtes l'autre. Celui d'en bas. On m'a parlé de vous dans une niche, tout à l'heure, il y a soixante ans. On m'a dit que vous écriviez en bâtons. »" },
      { before: "monde:coudrier_sait", text: "« Vous n'êtes pas de mes apprentis. Vous avez du sable au cou et des mains de champs. Vous venez d'après. Il y a donc un après : sur la fin, voyez-vous, j'en doutais. »" },
      "Il parle vite. Il a vu le grain, sur son pouce, et il sait ce que dure un grain. « Écoutez. Elle pèse sur moi. Je la tiens depuis soixante ans sans la lever d'une ligne ; c'est écrit, je l'avais lu, j'ai essayé tout de même. Sur vous, elle ne pèsera rien. Attendez pourtant. Tant que ce puits tient, elle y est prise comme un pieu dans la glace. Quand il lâchera, elle flottera, le temps d'un coup. Alors mettez la main ici. »",
      "Il lève les yeux vers l'œil de la voûte, où monte le fil. « Il y a quelqu'un là-haut ? — Oui. — Sous la cloche ? — Oui. » Quelque chose se détend dans sa figure, qui devait être tendu depuis le matin. « Alors c'est une horloge à deux aiguilles. Je l'ai dit quarante ans à des gens qui n'en voulaient qu'une. »",
      "Le grain a fini. Il le sent : il a le temps d'un mot, et il le choisit. « Le petit bout », dit-il. Le gris le reprend sur le *t*, la bouche encore ouverte, les yeux vers le haut.",
    ],
    choices: [{ back: "K14r_coudrier" }] },

  K14r_coudrier_jehan: { act: "IV", title: "Deux lettres de rendues", place: "tour", ambiance: "chateau",
    text: [
      "Jehan descend la dernière marche. Il vient jusqu'au levier, les bras le long du corps, du pas dont on avance vers un officier.",
      "Il regarde le vieillard longtemps. Il regarde le nez, la bosse du nez, les talons. Il porte la main à sa propre figure, et la retire.",
      "« Barnabé Coudrier. » Il le dit tout haut, et la voûte le lui rend. « Sur les rôles, je suis Coudray. On a changé deux lettres en 541, pour pouvoir dormir. On m'a montré sa fenêtre, à dix-sept ans, et l'on m'a fait cracher avec les autres. J'ai craché plus loin que les autres. Je voulais qu'on me trouve zélé. »",
      "Il s'accroupit. Sur le soulier à boucle, il y a une toile d'araignée, qui pend. Il veut l'ôter, du revers du doigt. Elle est prise comme le reste ; elle a la dureté d'un fil de fer. Il laisse sa main à plat sur le pavé, près du soulier.",
      "« Je croyais qu'il aurait l'air de quelqu'un qui a fait quelque chose. Il a l'air de quelqu'un qu'on a dérangé au milieu d'une explication. » Il se tait un moment. « Je m'appelle Jehan Coudrier. Je l'ai dit tout bas à Arvoise, et crié ce matin dans un guichet. Ici, je le dis à qui de droit. »",
      "Il se relève. Il va se mettre au pied de l'escalier, face aux marches, le dos à toi. Il garde. C'est ce qu'il sait faire, et il a enfin quelque chose à garder.",
    ],
    choices: [{ back: "K14r_coudrier" }] },

  K14r_pied: { act: "IV", title: "À gauche, quand on regarde le puits", place: "tour", ambiance: "chateau", fx: { flag: "r:vu_coin", ep: ["histoire", 600] },
    text: [
      "Le levier sort du pavé par une fente garnie de bronze, longue de trois pieds : sa crémaillère. Il est au dernier cran. À gauche, entre le levier et la joue de la fente, il y a une rainure, et dans la rainure un coin.",
      { if: { not: { has: "monde:ansel_travers" } }, text: "Il est enfoncé jusqu'à la tête, droit, d'un seul coup de maillet bien appris. On a frappé là comme on signe. Le gros bout affleure le bronze ; on n'y passerait pas l'ongle. Du petit bout, par-dessous, on ne voit rien : il faudrait se coucher." },
      { if: { has: "monde:ansel_travers" }, text: "Il est enfoncé jusqu'à la tête, et il est de travers. D'un quart, pas plus : la face de gauche porte, celle de droite bâille, et l'on passerait une lame dans le jour. Celui qui a frappé là tenait son maillet la main gauche devant. C'est un coup manqué exprès par quelqu'un de très jeune, qui avait très peur, et qui l'a manqué quand même." },
      "Par terre, sur un linge qui fut blanc, un maillet de buis. On l'a lâché, plutôt que posé : il est tombé sur le manche, et il a roulé d'un tour.",
      "Plus près des souliers du vieillard, il y a deux morceaux d'une baguette. Elle est cassée net, à trois doigts du bout. Le bout manque. Il devait porter une virole, de la grosseur de cette rainure, et il est allé où roulent les choses rondes dans une salle dont le milieu est un trou.",
      { if: { all: [CHASSE, { not: { has: "r:chasse_trouvee" } }] }, text: "Et contre la joue de la fente, du côté du petit bout, à l'endroit exact où l'on t'a écrit de regarder, il y a une tige de bronze." },
      { if: { all: [{ not: CHASSE }, { item: "baguette_bronze" }] }, text: "Tu tires de ta ceinture la baguette à bout de bronze que tu as prise dans un cabinet. Tu en approches le bout de la rainure, sans toucher. C'est la grosseur. Il en avait fait deux : il a descendu l'une, et laissé l'autre pour qui aurait un meilleur bras." },
      { if: { all: [{ not: CHASSE }, { not: { item: "baguette_bronze" } }] }, text: "Tu regardes tes mains. Tu as fendu du bois tous les hivers de ta vie, et tu sais qu'un coin se rend par le petit bout. Il te manque de quoi frapper dans une rainure large comme le petit doigt." },
    ],
    choices: [
      { label: "Ramasser la tige de bronze", hide: { any: [{ not: CHASSE }, { has: "r:chasse_trouvee" }] }, fx: { item: "chasse_bronze", flag: "r:chasse_trouvee", ep: ["histoire", 800] }, to: "K14r_chasse" },
      { label: "Prendre le maillet", hide: { item: "maillet_ansel" }, fx: { item: "maillet_ansel" }, to: "K14r_maillet" },
      { back: "K14r_basse" },
    ] },

  K14r_chasse: { act: "IV", title: "Soixante ans dans une rainure d'ombre", place: "tour", ambiance: "chateau",
    text: [
      "Elle est verte, d'un vert de vieille cloche, et collée au pavé par soixante ans de poussière. Tu la décolles de l'ongle. Elle est longue d'un empan, grosse comme le petit doigt, plate à un bout ; et sur le plat un coup de lime a mordu d'un cheveu de trop.",
      "Tu l'essuies sur ta manche. Dessous, le bronze est blond.",
      "Tu la présentes à la rainure, par-dessous, sans frapper. Elle y entre comme une clef entre dans sa serrure : elle en a le profil. Quelqu'un a pris cette mesure sur un dessin, l'a fait limer par un ouvrier, l'a portée dans une manche, cousue d'un point, et a ouvert le coude au bon moment, dans une bousculade, pour qu'elle tombe à l'endroit où il n'aurait plus de mains.",
      "{autre} te l'a écrit, d'une étoile de cuivre : *elle t'attend.* Elle a attendu. Tu la glisses dans ta ceinture, contre la hanche, où elle est froide.",
    ],
    choices: [{ back: "K14r_pied" }] },

  K14r_maillet: { act: "IV", title: "Un maillet d'apprenti", place: "tour", ambiance: "chateau",
    text: [
      "Il est en buis, court, à tête ronde, poli par les paumes. C'est un maillet d'apprenti, de ceux qu'on reçoit la première année et qu'on garde toute sa vie.",
      "Sur le manche, au fer rouge, deux lettres : *A. H.* Dessous, au couteau, d'une main plus petite et plus ancienne : *à maman.* On l'a rayé ensuite, par vergogne de grand garçon, sans appuyer.",
      { after: "r:hurel_vue", text: "Tu as vu ce matin, rue de la Poulie, à l'enseigne du Dé, une veuve prise devant une lettre. Les *g* y avaient cette queue-là." },
      "Tu le passes dans ta ceinture. Il pèse dans la main comme pèsent les outils dont on s'est servi une fois de trop.",
    ],
    choices: [{ back: "K14r_pied" }] },

  K14r_puits: { act: "IV", title: "Ce qui tient par sa peau", place: "tour", ambiance: "chateau", fx: { flag: "r:vu_puits", ep: ["perso", 600] },
    text: [
      "Tu t'avances jusqu'où le pavé finit. Il est usé en biseau ; et sur le biseau, le gris fait son bord, rond, épais de deux doigts, comme le bord d'une goutte sur une table cirée.",
      "De près, cela a une profondeur. L'œil y descend sans trouver d'appui, et il y passe des choses, très bas, lentes, comme des carpes sous la glace : un champ de blé où le vent s'est arrêté ; un pont, avec ses charrettes ; une abbaye, la bouche de ses chanteuses ouverte sur la même note. Ce sont les cercles. Tout ce que la Dormante a pris en soixante ans est là-dedans, rangé par années, comme les couches d'un tronc.",
      "Tu cherches. Tu sais ce que tu cherches, et tu te l'étais défendu.",
      "C'est presque à la surface : une rue en pente, des toits de tuiles vernies, la nuit. Des gens courent. Ils courent tous du même côté, et derrière eux il vient quelque chose qui a la couleur de ce puits et la vitesse d'une marée. Ils passent devant une porte, la troisième après la fontaine. Sous le toit, derrière une vitre, il y a un lit, et dans ce lit une petite de cinq ans qui dort.",
      "Tu recules. Tes genoux ont le tremblement qu'on a au bord d'un toit. Tu as les dents serrées à en avoir mal aux oreilles.",
      "Elle s'était retournée. Tu l'as toujours su : c'est tout elle.",
    ],
    choices: [{ back: "K14r_basse" }] },

  K14r_fil: { act: "IV", title: "La onzième", place: "tour", ambiance: "chateau", fx: { flag: "r:fil_touche", ep: ["histoire", 500] },
    text: [
      "Le fil part d'un anneau, au milieu de la barre, à une toise du bord. Tu ne peux l'atteindre qu'au chevalet : là, il passe à portée de bras, tendu, luisant, fin comme un cheveu.",
      "Tu le touches de l'ongle. Il est raide comme une tringle. Et il chante.",
      "C'est une note basse, ronde, dorée, qu'on reçoit par le bras plus que par l'oreille, et qui se tient sans décroître. On l'a frappée un jour de juin, à midi, trois cent soixante marches plus haut, sur une lèvre de bronze. Elle est descendue par ce fil. Elle n'a jamais fini d'arriver.",
      { after: "r:veilleurs_chant", text: "Tu la connais. Trois cents personnes en gris la chantaient ce matin sur une place, à bouche close." },
      "Tu lèves la tête. L'œil de la voûte est large comme une assiette. Au travers, il y a du noir, très long ; puis, tout en haut, un point de jour, de la grosseur d'un grain de mil.",
      "Au bout de ce fil, quelqu'un se tient bien.",
    ],
    choices: [{ back: "K14r_basse" }] },

  K14r_berceaux: { act: "IV", title: "La marge d'un contrat", place: "tour", ambiance: "chateau",
    text: [
      { first: true, text: "Ce sont douze bâtis de chêne, en cercle, chevillés de bois. On les a faits pour des cuves, et ils n'en ont jamais porté : l'escalier était trop étroit, ou le temps a manqué. Le chêne a noirci. Dans chacun, plus tard, on a couché un tuyau de verre vert, épais d'un pouce, gros comme la cuisse, dont une bouche trempe au bord du puits et dont l'autre entre dans le mur." },
      { first: true, text: "Le gris y passe. Il y passe par poussées, lourdes, espacées, avec un bruit de gorge. Cela s'en va vers le haut, vers la place, vers douze cuves qu'un commis mesure à la baguette. Un homme a branché des bouteilles sur le pouls d'un royaume, et il a eu soixante ans pour soigner sa tuyauterie : chaque joint est luté à la cire noire, et daté." },
      { first: true, text: "Derrière le dixième berceau, il y a une porte. Elle est de fer, étroite, neuve pour cette cave : elle a trente ans. Ses gonds sont gras. Derrière, on devine des marches ; et il en descend, très assourdi, un bruit de cristaux qu'on range, et le rire d'une duchesse qui a donné la Sologne pour être là." },
      { again: true, text: "Les douze berceaux, les tuyaux de verre où passe le gris, la porte de fer derrière le dixième." },
      { after: "r:porte_calee", text: "Une cheville de chêne est enfoncée dans le gond du haut, jusqu'à la tête." },
    ],
    choices: [
      { label: "Arracher une cheville à un berceau, et l'enfoncer dans le gond", hide: { has: "r:porte_calee" }, fx: { flag: "r:porte_calee", ep: ["histoire", 600] }, to: "K14r_cale" },
      { back: "K14r_basse" },
    ] },

  K14r_cale: { act: "IV", title: "Un coin pour un coin", place: "tour", ambiance: "chateau",
    text: [
      "Les chevilles des berceaux sont de chêne de cœur, grosses comme le pouce, taillées en fuseau. La première que tu empoignes vient à la main : le bâti a soixante ans de trop.",
      "Tu la présentes au gond du haut, dans le jour entre la penture et le montant. Elle y entre d'un tiers.",
      { if: { item: "maillet_ansel" }, text: "Tu as un maillet à la ceinture. Tu frappes trois fois, à petits coups mats, entre deux rires de la duchesse. La cheville descend jusqu'à la tête, et le fer la mord." },
      { if: { not: { item: "maillet_ansel" } }, text: "Tu frappes du talon de ton sabot, trois fois, entre deux rires de la duchesse. La cheville descend jusqu'à la tête, et le fer la mord." },
      "Cette porte s'ouvrira encore. Elle s'ouvrira de la largeur d'une épaule, à condition d'y mettre l'épaule. Un homme y passera de biais, et ce qu'on porte derrière lui sur un brancard restera dans l'escalier.",
      "Tu regardes ton ouvrage. C'est un coin. Il y a soixante ans qu'on se sert de coins dans cette cave, et c'est le premier qui soit du bon côté.",
    ],
    choices: [{ back: "K14r_berceaux" }] },

  K14r_tournant: { act: "IV", title: "Vingt marches plus haut", place: "tour", ambiance: "chateau", fx: { flag: "r:lu_niche", ep: ["histoire", 500] },
    text: [
      "Tu montes vingt marches, la main au mur. L'escalier tourne. À l'angle, il y a une niche à lanterne, profonde, sans lanterne ; et au-delà, plus haut, une file de lumières jaunes, avec des hommes dessous, le dos à la pierre, qui regardent tous vers le haut. Il vient de là-haut un grand bruit de bronze qu'on cogne. Quelqu'un tient parole à une porte.",
      "La niche est pleine d'une poussière épaisse comme un drap, qui a gardé une forme : la place d'un corps assis, les genoux remontés, et devant, la marque de deux semelles étroites. On a attendu là, plié comme un écolier puni. Puis on s'est levé, et l'on est descendu.",
      "Sur la paroi, une pointe de bronze a rayé la pierre, par paquets de quatre et un silence : le pouls d'une machine, compté à mesure. Dessous, en petites capitales d'horloger : *JUSTE.*",
      { after: "monde:coudrier_sait", text: "Et plus bas, en lettres appuyées, faites pour la flamme : *À QUI VIENT D'EN BAS ET DE PLUS TARD. N'Y TOUCHEZ PAS TANT QU'ELLE TIENT. ELLE PÈSE. ATTENDEZ QU'ELLE LÂCHE.*" },
      "Tu redescends sur la pointe des sabots. Aucun des hommes aux lanternes n'a tourné la tête : ils ont soixante ans d'habitude que rien ne monte.",
    ],
    choices: [{ back: "K14r_basse" }] },

  // ---------- noon ----------
  K14r_moins_cinq: { act: "IV", title: "Le lait dans la casserole", place: "tour", ambiance: "chateau",
    text: [
      "Tu te mets où il faut être : à gauche du levier, à un pas du vieillard, face au puits.",
      "Le gris monte. On le voit, à présent, en fixant un joint du pavé : il le couvre. Le bombement a pris la hauteur d'une main. Dans les douze tuyaux de verre, les poussées se rejoignent ; cela file d'un trait, avec un sifflement de bouilloire. Et il se fait dans la voûte un bruit que tu n'avais pas encore entendu, sourd, espacé : la pierre travaille.",
      "Là-haut, dans une vieille église, une pièce de soleil doit toucher le bord d'une étoile.",
      { with: "jehan", text: "Jehan est au pied de l'escalier, le dos à toi. Il a entendu quelque chose avant toi : il a tourné la tête vers les berceaux." },
      { if: { not: CALEE }, text: "Derrière le dixième berceau, la porte de fer s'ouvre, sans bruit, sur ses gonds gras. Il en vient une odeur de rôti, un bruit de couverts, un rire. Deux laquais passent d'abord, à reculons, portant sur un brancard un sablier de cristal haut comme un enfant, plein jusqu'au col, qu'ils posent contre le mur avec des soins de sacristains. Ils sortent. La porte se referme sur le dîner." },
      { if: CALEE, text: "Derrière le dixième berceau, on pousse la porte de fer. Elle résiste. On pousse plus fort ; une cheville de chêne crie, et cède à moitié. Par l'entrebâillement, un homme passe de biais, en rentrant l'épaule. Derrière lui, on entend deux laquais, un brancard qui cogne, un cristal qui tinte contre du fer, et une voix qui dit : « Laissez. Remontez-le. » La porte reste comme elle est." },
      "Il est entré.",
    ],
    choices: [{ label: "Te tourner vers lui", to: "K14r_aubespin", big: true }] },

  K14r_aubespin: { act: "IV", title: "Le temps de trois Pater", place: "tour", ambiance: "chateau", hub: true, backName: "l'homme en gris",
    text: [
      { first: true, text: "Il est en gris. Il a sa canne, et sous le bras gauche un cahier de toile cirée. Il fait le tour du puits par le bord, sans le regarder, comme un propriétaire longe son étang. Il s'arrête à six pas." },
      { first: true, text: "L'œil gris et l'œil brun vont du levier à toi, de toi au vieillard. C'est le vieillard qu'il salue d'abord, de son inclinaison exacte. « Maître. » Puis toi. « Vous êtes à l'heure. C'est un défaut qu'il estimait. »" },
      { first: true, text: "Il laisse tomber le cahier à tes pieds. « Votre vieille m'a pris un quart d'heure. Je lui en fais mon compliment : c'est le seul qu'on m'ait pris en soixante ans. »" },
      { first: true, if: TENU, text: "« Vous m'avez pris aussi un escalier. Je l'avais payé cher, en grains, à des hommes qui pèsent ce qu'on leur donne. Les vôtres se battent pour rien, à ce que je vois. C'est une économie que je n'ai jamais su faire. »" },
      { first: true, if: PERDU, text: "« Mes hommes tiennent l'escalier au-dessus de vous. Ils resteront où ils sont : ils ont peur de ce puits, et ils ont raison. Vous voyez que nous serons tranquilles. »" },
      { first: true, if: LIBRE, text: "« Madame la Régente parle en ce moment à cinq mille personnes qui lui tournent le dos. Elle est très éloquente. Elle a jusqu'à midi. »" },
      { first: true, after: "r:serrure_vendue", text: "« Je vous dois une lecture. *Celui d'en bas viendra d'une heure que le coup n'a pas prise.* Je sais donc ce que vous venez faire, et je suis descendu vous regarder attendre. »" },
      { first: true, with: "jehan", text: "Jehan a fait un pas. La canne se lève d'un pouce, sans se tourner vers lui. « Coudray. Restez à votre escalier. Vous êtes porté déserteur ; je vous ferai porter mort, cela vous classera. » Jehan regarde tes yeux. Il reste où il est, les poings fermés : tu lui as fait signe." },
      { first: true, text: "« Je n'ai aucun besoin de vous toucher. Il me suffit que vous restiez où vous êtes le temps de trois Pater. Ce puits fait le reste. » Il s'appuie sur sa canne, des deux mains, en homme qui a tout son temps et qui le sait à un grain près." },
      { again: true, text: "L'homme en gris, à six pas, les deux mains sur sa canne. Le gris monte entre vous." },
    ],
    choices: [
      { label: "Ramasser le cahier", hide: { has: "r:faux_lu" }, fx: { flag: "r:faux_lu", ep: ["perso", 600] }, to: "K14r_faux_cahier" },
      { label: "« Qu'est-ce qui arrive, à midi ? »", hide: { seen: "K14r_aubespin_offre" }, to: "K14r_aubespin_offre" },
      { label: "Empoigner le levier tout de suite, et tirer", hide: { has: "r:trop_tot" }, fx: { flag: "r:trop_tot", pv: -5 }, to: "K14r_trop_tot" },
      { label: "Attendre, les yeux sur le gris", to: "K14r_midi", big: true },
    ] },

  K14r_faux_cahier: { act: "IV", title: "Jusqu'au bout", place: "tour", ambiance: "chateau",
    text: [
      "C'est la même toile cirée, le même fil rouge au dos, la même tranche jaspée. Elle a dû y passer ses nuits de prisonnière. Les premières pages sont pleines : des bâtons, d'une main qui imite la tienne à s'y tromper, et dessous une écriture penchée, qui répond. Des bornes, des dates, des lieux. Tout y est vraisemblable, et faux d'une heure ou d'une lieue : de quoi faire courir un homme soigneux derrière deux enfants, neuf jours durant, avec toujours un village de retard.",
      "La dernière page est de sa main à elle, sans déguisement, en belle ronde d'horlogère.",
      "*Melchior. Si tu lis ceci, tu es venu me le prendre sur les genoux, à midi moins le quart, devant tout le monde, comme je l'avais réglé. Pendant que tu lis, tu es ailleurs qu'en bas. Tu as toujours lu jusqu'au bout : c'est ta seule politesse. Line.*",
      "« Elle a une jolie main, dit-il. Je l'ai lue jusqu'au bout, en effet. On a ses habitudes. » Il regarde sa canne. « Je l'ai connue haute comme cela, qui courait une foire avec une boîte de fer. J'aurais dû lui acheter sa boîte. »",
    ],
    choices: [{ back: "K14r_aubespin" }] },

  K14r_aubespin_offre: { act: "IV", title: "Le quarante et unième couvert", place: "tour", ambiance: "chateau",
    text: [
      "« À midi ? Rien qu'on entende. » Il a pris le ton d'un homme qui fait visiter. « Ce puits a soixante ans de trop-plein. Il rend tout d'un coup. Ce que vous nommez la Dormante fera en une heure le chemin qu'elle a fait en soixante ans, puis le suivant. Les provinces s'arrêteront l'une après l'autre, comme les pendules d'une maison où l'on vient de mourir. Ce sera très doux. Les gens seront à table. »",
      "« Il restera quarante personnes debout, avec de quoi l'être longtemps, dans un monde où plus rien ne s'abîme. Les fruits aux arbres. Les feux allumés. La même figure, chaque matin, dans la glace. » Il a un petit geste vers le plafond, où l'on dîne. « J'ai mis soixante ans à comprendre que le temps est la seule chose qu'on perde, et une matinée à trouver le moyen d'en garder. Ils ont payé pour cela des forêts. Je le leur donne. Je tiens mes marchés. »",
      "Il te regarde. Il te regarde comme on regarde une roue dans une montre, pour savoir ce qu'elle mène. « Il y a un quarante et unième couvert. Il était pour une dame, qui a mieux à faire. Je vous l'offre. Vous avez marché neuf jours dans mon ouvrage sans y laisser vos os : c'est un titre, et je n'en vois pas d'autre autour de cette table. »",
      "« Vous choisirez, dans tout ce qui dort, qui vous voudrez éveiller d'une pincée, le dimanche. On a ses affections. J'en ai eu. »",
    ],
    choices: [
      { label: "« Gardez votre couvert. »", fx: { flag: "r:offre_refusee", ep: ["perso", 600] }, to: "K14r_aubespin" },
      { label: "« Combien de pincées, par dimanche ? »", fx: { flag: "r:offre_pesee", ep: ["perso", 400] }, to: "K14r_aubespin" },
    ] },

  K14r_trop_tot: { act: "IV", title: "Un pieu dans la glace", place: "tour", ambiance: "chateau",
    text: [
      "Tu fais le pas. Tu mets les deux mains au cuir, au-dessus de celles du vieillard, et tu tires vers le haut, de tout ton dos.",
      "Rien ne vient. C'est tirer sur une borne, sur une racine de chêne, sur le coin d'une maison. La barre est dans le gris jusqu'à mi-corps, et le gris la tient ; ce que tu tires, c'est le puits entier, avec soixante ans dedans.",
      "Le froid, lui, vient. Il te monte par les poignets, par les coudes, jusqu'aux dents. Tes doigts blanchissent. Tu lâches avant de l'avoir décidé, et tu restes à te tenir les mains sous les bras, comme en janvier.",
      "« Tirez, dit l'homme en gris, sans bouger. Je l'ai tirée quarante ans. J'y ai mis des palans, des bœufs, une fois de la poudre. » Il a l'air presque bienveillant. « Elle ne veut de personne tant qu'il tient. Et quand il aura lâché, il n'y aura plus d'elle : il y aura lui partout. Asseyez-vous donc. »",
      { after: "r:lu_niche", text: "Tu l'avais lu sur un mur, vingt marches plus haut, en lettres appuyées. On croit toujours qu'un avertissement est écrit pour un autre." },
    ],
    choices: [{ back: "K14r_aubespin" }] },

  K14r_midi: { act: "IV", title: "Midi, qu'on ne sonne pas", place: "tour", ambiance: "chateau",
    text: [
      { after: "r:offre_refusee", text: "« Soit, dit-il. Vous dînerez debout. »" },
      { after: "r:offre_pesee", text: "« Trois, dit-il. Je vous en compterai quatre. Voilà enfin une question de quelqu'un qui a eu faim. »" },
      "Il tire sa montre. Il l'ouvre. Il dit : « Voilà. »",
      "D'abord cela ne fait aucun bruit. Le bombement du puits s'affaisse d'un côté, comme une paupière, et le gris passe le bord. Il vient sur le pavé en nappe, sans hâte, épais comme une crème, luisant ; et tout ce qu'il touche prend : un joint, un clou, la moitié d'un berceau. Les douze tuyaux de verre chantent ensemble, d'une note de doigt mouillé sur un cristal. Le premier se fend sur sa longueur.",
      { if: PERDU, text: "Dans l'escalier, là-haut, quelqu'un a crié. Soixante paires de bottes remontent." },
      { with: "jehan", text: "Jehan a reculé d'une marche, puis de deux. Il te crie quelque chose. Tu vois sa bouche." },
      "Puis la barre bouge.",
      "Elle était dans le gris jusqu'à mi-corps, prise depuis soixante ans comme un pieu dans la glace. Elle a un frisson, d'un bout à l'autre, qu'on voit courir sur le bronze. Elle remonte d'un doigt. Elle flotte. Au bout, le levier tremble dans les mains du vieillard, et le fil, au-dessus, donne sa note tout haut pour la première fois : une note d'or, basse, énorme, qui emplit la voûte.",
      "L'homme en gris a cessé de sourire. Il regarde la barre. Il fait un pas vers toi, la canne en avant. Il a soixante ans d'habitude de cette cave, et quatre-vingt-dix ans dans les jambes.",
      "Le gris est à trois pavés de tes sabots. Tu as le temps d'un geste.",
    ],
    choices: [
      { label: "Poser ta main sur celles du vieillard", fx: { flag: "r:main_dessus" }, to: "K14r_main", big: true },
      { label: "Glisser ta main sous les siennes, à la place des deux poignets", fx: { flag: "r:main_dessous" }, to: "K14r_main", big: true },
      { label: "Empoigner le cuir à deux mains, au-dessus des siennes", fx: { flag: "r:main_deux" }, to: "K14r_main", big: true },
    ] },

  K14r_main: { act: "IV", title: "Le cuir", place: "tour", ambiance: "chateau", fx: { ep: ["histoire", 1500] },
    text: [
      { after: "r:main_dessus", text: "Tu poses ta main sur les siennes. Elles sont dures comme du buis, et froides ; puis, sous ta paume, elles cessent de l'être." },
      { after: "r:main_dessous", text: "Tu glisses ta main dans le vide qu'il serre depuis soixante ans. Elle y entre juste. Ses doigts sont sur les tiens, durs comme du buis ; et dessous il y a le cuir, usé par quatre siècles de mains qui ne l'ont jamais tiré." },
      { after: "r:main_deux", text: "Tu empoignes le cuir à deux mains, au-dessus des siennes, comme on prend un manche de cognée. Il est usé par quatre siècles de mains qui ne l'ont jamais tiré." },
      "Le cuir est tiède. C'est la seule chose tiède de cette cave, et tu comprends qu'elle l'est depuis une heure, pas davantage : la chaleur d'une main d'homme, qui vient de le quitter.",
      "Une autre main se ferme sur ton épaule. Elle a des doigts maigres, soignés, très forts. Elle a tenu ce levier avant la tienne, et elle s'en souvient. « Lâchez », dit-il contre ton oreille. Tu sens la lavande, et le métal froid.",
      "Tu tiens.",
      "La note du fil t'entre par le bras. Elle te descend dans la poitrine, s'y installe, et tout le reste s'en va par les bords, comme une buée quitte une vitre : le gris sur le pavé, les tuyaux qui chantent, les berceaux noircis. Cela pâlit. Cela se retire. Dessous, il y a la même cave, plus neuve.",
      "Le gris de 601 s'est arrêté à un pavé de tes sabots, bombé, immobile, comme une vague peinte.",
      "Tu as la main sur un levier, dans une note qui dure. Et le long du fil, par l'œil de la voûte, tout en haut de trois cent soixante marches de noir, le grain de mil s'est ouvert.",
    ],
    choices: [{ label: "Lever les yeux", to: "B14", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    pied_de_biche: { name: "Pied-de-biche d'acier bleu", kind: "divers", keep: true, price: 0, desc: "Court, graissé, la fourche limée en biseau. Il sort de la trousse d'un voleur de 541, pris à plat ventre dans le Droit à trente toises de la grille." },
    maillet_ansel: { name: "Maillet d'apprenti", kind: "divers", keep: true, price: 0, desc: "En buis, à tête ronde. Sur le manche, au fer rouge : A. H. Dessous, au couteau, rayé : à maman." },
  },
  battles: {
    escalier: {
      title: "L'escalier d'en bas",
      intro: "Trois endroits, et ce que tu as su rassembler. Le guichet, par où les noirs de la place voudront rentrer. Le palier, où tout se croise. Les marches sans rampe, où sont les soixante, et par où tu descends.",
      posts: [
        { id: "guichet", name: "Le guichet du vantail droit", def: 2 },
        { id: "palier", name: "Le palier de pierre", def: 2 },
        { id: "marches", name: "Les marches sans rampe", def: 1, key: true },
      ],
      troops: [
        { id: "glaneurs", name: "Les glaneurs de la Courtepaille", force: 2, if: { has: "r:glaneurs_parvis" }, desc: "Quarante paires de jambes tombées des toits, avec des frondes et des crocs à sacs. Ils tiennent mieux un trou qu'une ligne." },
        { id: "blancs", name: "Les manteaux blancs de Jehan", force: 3, if: { has: "r:jehan_blancs" }, desc: "Trente garçons de ferme qui ont vu une cire. Ils marchent sur deux files, sans crier." },
        { id: "cuivres", name: "Les grands hommes de cuivre", force: 3, if: { has: "r:cuivre_parvis" }, desc: "Hauts comme des armoires. Chacun bouche la largeur d'une porte. La barre pèse sur eux : ils ne descendront pas loin." },
        { id: "garde", name: "Les deux cents du sergent Haudoin", force: 4, if: HAUDOIN, desc: "La garde blanche, sur un ordre signé de deux mains. Elle arrive au pas de route." },
        { id: "jehan", name: "Jehan", force: 1, if: JEHAN, desc: "Il connaît chaque palier, et ceux d'en face le connaissent." },
      ],
      waves: [
        { text: "Sous le velours, sur la place, les dix du dais ont retrouvé leurs piques : ils cognent au vantail. Sur le palier, les cinq qui allaient sortir se retournent, et le brigadier de la relève crie aux marches de monter.", hits: { guichet: 3, palier: 2, marches: 1 } },
        { text: "Ils montent. Les soixante viennent d'en bas par deux, la pique basse, le long du mur, en hommes qui savent où est le vide. Ceux de tête ont les lanternes dans le dos : on ne voit d'eux que des pointes.", hits: { marches: 4, palier: 2, guichet: 2 } },
        { text: "Les quatre coins de la place ont entendu. Seize casaques courent au guichet, et derrière elles les deux noirs en gants blancs de la porte basse. Dans l'escalier, on se bat au bord, front contre front, sans place pour lever un bras.", hits: { guichet: 4, marches: 3, palier: 1 } },
        { text: "Un officier a compris où l'on vous coupe. Il jette ce qui lui reste sur le palier, d'un seul bloc, par le haut et par le bas, pour séparer les marches de la porte.", hits: { palier: 4, marches: 4, guichet: 2 } },
      ],
      orders: [
        { id: "chant", label: "Faire signe à la Doyenne : que la note monte", post: "marches", def: 3, once: true, if: { has: "r:veilleurs_chant" } },
        { id: "mot", label: "Crier « Soixante » dans le noir, de tous les côtés", post: "palier", def: 3, once: true, if: { has: "r:mot_escalier" } },
        { id: "baraton", label: "Crier que le fourrier pèse court, et que la prise de midi est restée dehors", post: "marches", def: 3, once: true, if: { has: "r:vu_releve" } },
        { id: "ordonnance", label: "Lever l'ordonnance, la cire en avant : « L'escalier à la garde blanche ! »", post: "palier", def: 4, once: true, if: ORD2 },
        { id: "hardouin", label: "Poser un grain sur le gant du capitaine Hardouin, et passer à sa droite", post: "guichet", def: 4, once: true, if: { all: [{ has: "r:signe_hardouin" }, { stock: "sable", min: 1 }] }, fx: { stock: { sable: -1 } } },
      ],
      maxLost: 2,
      win: { to: "K14r_escalier_tenu", fx: { flag: "monde:escalier_tenu", ep: ["histoire", 1500] } },
      lose: { to: "K14r_escalier_perdu", fx: { flag: "r:escalier_perdu", ep: ["histoire", 500] } },
    },
  },
} };
