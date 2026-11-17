// Les Trois Clefs d'Aiguemorne · act V, the hand (1/2): into the Tower by the front door, behind a clockmaker who
// has remembered a privilege. The citadel gate, the court on the feast morning, the chapel and the turning hatch (the
// mason, if the wall is signed), the spiral stair, and the weight room, where the Syndic's talking machine now stands
// beside the three drums. Morning hub: A5m_poids.
// Shared marks: monde:a5:tour_ouvert (the hatch will still turn tonight) | monde:a5:tour_clos (walled), monde:a5:mot_pain
// (a word went up in the bread), monde:a5:cylindre_su (how the machine couples to the Judge), monde:a5:cahier
// (Balancier's greasing book). Personal: a5:m_vu (a sergeant has looked twice), a5:m_mortier.
var MURE = { has: "monde:tour:mure" };
module.exports = {
  passages: {
    A5m_aube: { act: "V", title: "Le privilège du nom", place: "poids", ambiance: "ville",
      fx: { until: 8, join: "crochemore" },
      text: [
        "Maître Crochemore a tiré du fond de son sac une chose que tu ne lui avais jamais vue : une robe. Elle est de drap bleu de nuit, à manches fendues, semée de petits cadrans d'argent brodés, et elle sent le camphre. C'est la robe de grande tenue des Heures. Il l'a portée roulée, sous ses limes, de Ferrières à Ossevaux et d'Ossevaux à Brandelis, sans en dire un mot.",
        "Il la passe par-dessus son habit puce. Elle lui est un peu longue : elle a été taillée pour son père.",
        "« Le jour de la Saint-Éloi, récite-t-il en se boutonnant, *un Crochemore du nom et du sang monte à la Tour donner l'heure au Bronze, et nul ne lui ferme la porte.* Article onze de la fondation. Mon père l'a fait jusqu'à sa mort. Moi, j'ai cessé il y a quatorze ans, à cause d'un mot que le Syndic avait eu sur mes échappements. Je boudais. » Il se regarde dans le verre d'un cadran mort. « On me croit en voyage. Personne ne m'a mis sur une affiche : je n'ai tué personne, je n'ai fait qu'accompagner. Je vais donc entrer dans cette citadelle par la rampe, en robe, à huit heures du matin, en exigeant qu'on me salue. »",
        "Il te tend sa trousse. Elle pèse comme une enclume.",
        "« Toi, tu es l'horloge. Tu portes, tu te tais, tu regardes tes pieds. Si l'on te parle, c'est à moi de répondre : un maître des Heures ne laisse pas causer son aide. C'est la seule occasion de ma vie où mon caractère nous sera utile. Tâchons d'en profiter. »",
        "Dans la trousse, sous les limes, il y a trois chiffons. Tu sais ce qu'ils enveloppent. Tu la mets sur ton épaule avec le soin que l'on a pour un enfant qui dort.",
      ],
      choices: [{ label: "Monter derrière lui, par la rampe des Clavaires", to: "A5m_rampe", big: true }] },

    A5m_rampe: { act: "V", title: "La rampe des Clavaires", place: "citadelle", ambiance: "chateau",
      text: [
        "On a sablé la rampe pendant la nuit. Elle monte entre deux rangs de mâts où pendent les trois bannières, le marteau, la larme, la hure, qui claquent dans un vent d'est aigre et clair. C'est le chemin des gens qui ont le droit. Tu ne l'avais jamais pris.",
        "Maître Crochemore le prend au milieu. Il marche à petits pas rapides, sa robe relevée d'une main, le menton en l'air, et il consulte sa montre tous les vingt pas d'un air mécontent, comme si la rampe avait du retard.",
        "À la grande porte, entre les deux guérites, il y a ce matin un lieutenant, six casaques bleues, et une table. Sur la table, un registre, et, tenue à plat par quatre cailloux, l'affiche. Un sergent à moustache rousse la sait par cœur ; il regarde chaque figure qui passe, puis le papier, puis la figure.",
        "« Le nom ? » dit le lieutenant.",
        "« Le nom ! » Maître Crochemore s'arrête comme devant une faute d'orthographe. « Jeune homme, il est gravé sur le bâti de la machine que vous gardez. Il y est depuis cent cinq ans. Il y sera quand le vôtre aura quitté jusqu'aux registres de votre paroisse. *Crochemore.* Je viens donner l'heure. Article onze. Faites ouvrir, je vous prie, et que l'on ôte cette table de mon chemin : elle est de travers. »",
        "Le lieutenant a vingt-cinq ans. Il n'a jamais entendu parler de l'article onze. Il feuillette son registre, où il y a quelque part, entre l'ordre des cortèges et la consigne des cierges, une ligne que personne n'a lue depuis quatorze ans.",
        "Pendant qu'il cherche, le sergent roux a cessé de regarder l'horloger. Il te regarde, toi, par-dessus l'affiche.",
      ],
      choices: [
        { label: "Garder les yeux sur tes souliers, et ployer sous la trousse comme quelqu'un qui la porte depuis dix ans",
          test: { dom: "discretion", diff: 10, label: "Être un dos sous une caisse", help: [{ if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "comedien" }, v: 10 }, { if: { has: "a1:m_alerte" }, v: -10 }] },
          win: { fx: { ep: ["perso", 1200] }, to: "A5m_rampe_ok" }, lose: { fx: { flag: "a5:m_vu" }, to: "A5m_rampe_ko" } },
        { label: "Poser la trousse sur sa table, l'ouvrir, et lui demander s'il veut compter les limes",
          test: { dom: "social", diff: 10, label: "Ennuyer un sergent", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "rebouteux" }, v: 5 }, { if: { has: "a1:m_alerte" }, v: -10 }] },
          win: { fx: { ep: ["perso", 1200] }, to: "A5m_rampe_ok" }, lose: { fx: { flag: "a5:m_vu" }, to: "A5m_rampe_ko" } },
      ] },

    A5m_rampe_ok: { act: "V", title: "Article onze", place: "citadelle", ambiance: "chateau",
      text: [
        "Le sergent a vu passer dix mille porteurs. Un porteur a le cou rentré, la bouche ouverte, et cet air d'absence que donne un poids sur une épaule : on dirait qu'il loge ailleurs. Tu loges ailleurs. Ses yeux te quittent pour la figure suivante.",
        "« Article onze, lit le lieutenant, très rouge. *Le premier du nom… donner l'heure… et nul ne lui ferme la porte.* » Il relève la tête. « C'est en règle, maître. Je vous demande pardon. On ne nous avait pas prévenus que cela se faisait encore. »",
        "« Cela ne se faisait plus. Cela se refait. Écrivez l'heure de mon passage : huit heures quatorze. Votre horloge de poste retarde de deux minutes, vous la ferez voir. »",
        "Il passe. Tu passes derrière, dans l'ombre de sa robe. Sous la voûte, sans tourner la tête, il souffle par le coin de la bouche : « Je n'ai jamais eu si peur de ma vie. Est-ce que cela s'est vu ? »",
        "Cela ne s'est pas vu. Tu le lui dis. Il se redresse de deux pouces.",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5m_cour", big: true }] },

    A5m_rampe_ko: { act: "V", title: "Une figure que l'on a vue", place: "citadelle", ambiance: "chateau",
      text: [
        "Tu en fais un peu trop, ou pas assez. Le sergent roux penche la tête. Il regarde l'affiche, où il y a trois portraits gravés de mémoire ; il te regarde ; il cligne, comme un homme qui cherche un mot.",
        "« Article onze, lit le lieutenant, très rouge. C'est en règle, maître. Je vous demande pardon. »",
        "Maître Crochemore passe. Tu passes derrière lui. Le sergent ne dit rien : on n'arrête pas l'aide d'un homme à qui son lieutenant vient de présenter des excuses. Mais il te suit des yeux jusque sous la voûte, et tu sens ce regard entre tes omoplates, à l'endroit où pèse la courroie.",
        "« Il t'a remarqué{e}, souffle l'horloger. Je l'ai vu faire. Il n'est pas sûr. Un homme qui n'est pas sûr y repense à la soupe, et il en parle à la relève. » Il tire sa montre. « Il faudra que nous soyons rangés quelque part avant le soir. »",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5m_cour", big: true }] },

    // ───────────────────────────── The court ─────────────────────────────
    A5m_cour: { act: "V", title: "La cour, un matin de fête", place: "citadelle", ambiance: "chateau", hub: true, backName: "la cour de la citadelle",
      text: [
        { first: true, text: "La cour de la citadelle a mis ses habits. On a pavoisé la citerne. On a dressé contre le rempart une estrade à trois dais, un bleu, un violet, un cramoisi, où les Clavaires recevront ce soir l'hommage des métiers. Des valets y clouent des tapis à grands coups de maillet, et chaque coup revient de la Tour, un peu après, comme si quelqu'un répondait." },
        { first: true, text: "Elle est là, au fond, sur la droite. Tu l'avais vue en septembre par un jour gris. Ce matin, le soleil la prend de face, et elle n'y gagne rien : c'est un fût de pierre brune, sans une fenêtre, sans un joint où poser l'œil, avec tout en haut ce cadran nu que la lumière rase et qui te regarde arriver." },
        { first: true, text: "À son pied, quatre chariots dételés, leurs bâches à terre. Ils sont vides. Ce qu'ils portaient est monté. Devant la porte de la Tour, à la place de l'unique factionnaire bleu, il y a ce matin deux casaques rousses, la hallebarde au pied, qui ont l'accent de Ferrières et qui n'aiment pas la ville." },
        { again: true, text: "La cour pavoisée, l'estrade aux trois dais, les chariots vides. Devant la porte de la Tour, les deux casaques rousses." },
        { if: { has: "a5:m_vu" }, text: "Sous la voûte, le sergent roux est sorti de son poste. Il s'est adossé au mur, les bras croisés, et il mange une pomme en regardant la cour." },
      ],
      choices: [
        { label: "Entrer à Sainte-Clavis, d'où sort un bruit de truelle", if: MURE, to: "A5m_macon", once: true, hide: { not: MURE } },
        { label: "Entrer à Sainte-Clavis, où le clerc prépare l'offrande", if: { not: MURE }, to: "A5m_pain", once: true, hide: MURE },
        { label: "Regarder les Plombs, en passant", to: "A5m_plombs_vue", once: true },
        { label: "Aller à la porte de la Tour, derrière la robe de l'horloger", to: "A5m_porte", big: true },
      ] },

    A5m_plombs_vue: { act: "V", title: "Une paire de bas", place: "citadelle", ambiance: "chateau",
      text: [
        "Les Plombs ont leur lanterne, comme une maison. On l'a pendue au-dessus du guichet, avec dedans la plus grosse clef que tu aies vue de ta vie, noire, à deux pannetons, celle de la grande porte. Le guichetier fume dessous, sur son billot.",
        "Au troisième rang, la dernière fenêtre. Derrière les barreaux, un chignon gris, immobile, tourné vers la cour.",
        "Tu passes avec ta trousse. Le chignon ne bouge pas. Mais une main sort entre deux barreaux, secoue quelque chose de gris, long, tricoté, comme on secoue une nappe, et le rentre. C'est un bas. Il est fini. Elle a dû commencer le second.",
        "Tu ne lèves pas la tête une deuxième fois. Elle t'a vu{e} : cela suffit à vous deux. Elle a toujours dit qu'un signe que l'on répète est un signe que l'on vend.",
      ],
      choices: [{ back: "A5m_cour" }] },

    // ───────────────────────────── The chapel: the mason (if the wall is signed) ─────────────────────────────
    A5m_macon: { act: "V", title: "Trois rangs de briques", place: "citadelle", ambiance: "temple",
      fx: { meet: "savinien" },
      text: [
        "La chapelle est encore pleine des cierges de la veille, qui achèvent de couler. Devant l'autel, on a rangé trois prie-Dieu de velours, un bleu, un violet, un cramoisi, à trois pas l'un de l'autre.",
        "À gauche, dans le mur, la niche du tour. Un homme en blouse blanche est à genoux devant, une truelle à la main, une auge à sa droite. Il a déjà monté trois rangs de briques au ras de la pierre ; le chêne noirci dépasse encore par-dessus, comme une épaule.",
        "Entre le maçon et la niche, il y a quelqu'un. Loridan est à genoux sur la dalle, les gants joints, les yeux fermés, à un pied du mur qui monte. Il prie, ou il fait ce qui y ressemble assez pour qu'un ouvrier n'ose pas le pousser. Le maçon bâtit donc autour : il a laissé dans son troisième rang un vide de la largeur d'un homme, et il attend, en tournant son mortier, que la dévotion finisse.",
        "Savinien se tient contre un pilier, tout blanc, son panier au bras.",
        "« C'est l'ordre du chapitre, te souffle-t-il. Avec trois cachets. On ferme la niche. On dit que l'offrande était une superstition, que Monseigneur la tolérait, et qu'elle ne convient plus *au nouvel état du Bronze.* » Il avale sa salive. « J'ai porté ce panier quatre cents fois. Hier soir encore, l'écuelle est revenue lavée. Je l'ai dit au maçon. Il m'a répondu qu'il était payé à la toise. »",
        "Le maçon est un gros homme paisible, le père Gobert, qui a de la chaux dans les sourcils. Il sifflote. Il a devant lui pour une heure d'ouvrage et il n'y met pas de méchanceté : il boucherait de même une fenêtre ou un four.",
        "Maître Crochemore s'est arrêté net. Sous la robe bleue, tu vois ses poings se fermer.",
      ],
      choices: [
        { label: "Souffler à l'horloger ce qu'il doit dire : que ce tour est mû par les poids de la Tour, et que l'on ne touche pas au Mouvement avant que l'heure soit donnée",
          test: { dom: "savoir", diff: 10, label: "Inventer un article douze", help: [{ if: { voie: "alchimiste" }, v: 5 }, { if: { voie: "comedien" }, v: 10 }, { if: { has: "monde:a1:horloge_connue" }, v: 10 }, { if: { has: "monde:a5:elle" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:tour_ouvert", ep: ["perso", 1500] }, to: "A5m_macon_article" }, lose: { to: "A5m_macon_ko" } },
        { label: "Renverser ta gourde dans son auge pendant qu'il rallume sa pipe : un mortier noyé de sucre ou de vinaigre ne prend pas de trois jours",
          test: { dom: "magie", diff: 5, label: "Gâter une gâchée", help: [{ if: { voie: "alchimiste" }, v: 20 }, { if: { item: "vinaigre_voleurs" }, v: 15 }, { if: { item: "eau_de_vie" }, v: 5 }, { if: { voie: "rebouteux" }, v: 5 }] },
          win: { fx: { flag: ["monde:a5:tour_ouvert", "a5:m_mortier"], ep: ["perso", 1500] }, to: "A5m_macon_mortier" }, lose: { to: "A5m_macon_ko" } },
        { label: "Passer : il y a une porte, là-haut, et c'est par elle que l'on sort", fx: { flag: "monde:a5:tour_clos" }, to: "A5m_macon_laisse" },
      ] },

    A5m_macon_article: { act: "V", title: "Article douze", place: "citadelle", ambiance: "temple",
      text: [
        "Il t'écoute, la tête penchée, sans te regarder. Tu vois l'idée entrer dans ses favoris. Il se redresse, et il n'y a plus dans cette chapelle qu'un maître des Heures en grande tenue.",
        "« Qui a commandé ceci ? »",
        "Le maçon ôte sa pipe. « Le chapitre, maître. Trois cachets. »",
        "« Le chapitre ! Et le chapitre sait-il sur quoi tourne ce chêne ? » Il marche à la niche, pose la main à plat sur le bois. « Il tourne sur un axe d'acier. Cet axe descend dans le mur. Dans le mur, il y a une chaîne ; et cette chaîne, mon ami, monte de cent quatre-vingts marches, jusqu'à un tambour que mon bisaïeul a posé de ses mains. Vous êtes en train de maçonner *une pièce du Mouvement.* Le jour de la Saint-Éloi. Avant que l'heure soit donnée ! »",
        "Il a sorti sa montre. Il la brandit comme un ostensoir.",
        "« Article douze de la fondation : *nul ne porte fer, pierre ni chaux aux organes du Juge entre l'heure donnée et la Sentence rendue.* Si le Bronze, cette nuit, bégaie d'une syllabe, on cherchera pourquoi. On trouvera trois rangs de briques, et votre nom sur la facture. Je ne voudrais pas être maçon dans cette ville demain matin. »",
        "Il n'y a jamais eu d'article douze. Le père Gobert l'ignore ; mais il sait ce que vaut, à Aiguemorne, la colère d'un homme qui s'appelle Crochemore un jour comme celui-ci. Il regarde ses briques. Il regarde ses cachets. Entre trois signatures et un article, il fait ce que fait un artisan prudent : il range sa truelle.",
        "« Je reviendrai après-demain, dit-il. Qu'ils s'arrangent entre eux. On m'a payé le déplacement. »",
        "Il s'en va, son auge sous le bras. Loridan a rouvert les yeux. Il regarde l'horloger, longuement, et pour la première fois depuis que tu le connais, il ôte un gant pour serrer une main.",
        "Maître Crochemore tremble de la tête aux pieds. « Une chaîne dans le mur, murmure-t-il. C'est absurde. Il n'y a qu'un pivot et un contrepoids. Dieu me pardonne, j'ai menti sur de la mécanique. »",
      ],
      choices: [{ label: "Laisser le clerc poser son panier", to: "A5m_pain", big: true }] },

    A5m_macon_mortier: { act: "V", title: "Une gâchée qui ne prendra pas", place: "citadelle", ambiance: "temple",
      text: [
        "Le père Gobert se tourne vers un cierge pour rallumer sa pipe. Il y met le temps d'un homme qui aime sa pipe. Tu passes derrière lui avec ta trousse, tu trébuches sur une dalle, et ce que tu avais dans la main va où il faut.",
        "Il retourne à son auge, donne trois tours de truelle, fronce un sourcil. Le mortier a changé de figure : il file, il brille, il a pris cette mine grasse d'une pâte qui ne veut plus rien savoir. Le maçon y trempe un doigt, le sent, hausse les épaules. C'est la chaux, se dit-il ; on lui a livré de la chaux d'hiver.",
        "Il achève son mur. Il le monte jusqu'au cintre, proprement, en faisant le tour de Loridan, qui se relève enfin quand la dernière brique lui passe devant le visage. Le chêne noirci a disparu. Il y a dans le mur de la chapelle un rectangle rouge, tout neuf, que le père Gobert jointoie du pouce.",
        "« Voilà. Demain ce sera pris, vous pourrez blanchir. »",
        "Demain, ce ne sera pas pris. Ce ne le sera pas davantage dans trois jours. Tu passes la main sur le bas du mur, par où il a commencé : les briques tiennent comme tiennent des livres sur un rayon, par leur seul poids. Un coup d'épaule les couche.",
        "Savinien pleure sans bruit contre son pilier. Tu vas à lui. Tu lui dis, tout bas, de revenir ce soir avec son panier, comme d'habitude, et de pousser le mur avec le pied. Il te regarde. Il regarde l'horloger en robe bleue. Il ne comprend pas tout ; il comprend qu'il y a dans cette chapelle des gens qui ne sont pas d'accord avec trois cachets, et que cela se peut.",
      ],
      choices: [{ back: "A5m_cour" }] },

    A5m_macon_ko: { act: "V", title: "Payé à la toise", place: "citadelle", ambiance: "temple",
      fx: { flag: "monde:a5:tour_clos" },
      text: [
        "Cela ne prend pas. Le père Gobert a derrière lui quarante ans de chantiers et de gens qui venaient lui expliquer son métier ; il écoute, il hoche la tête, il montre ses trois cachets, et il continue.",
        "Il monte son mur jusqu'au cintre. Il fait le tour de Loridan, qui se relève quand la dernière brique lui passe devant le visage, et qui reste debout, les bras le long du corps, comme un homme à qui l'on vient de fermer une porte sur la main.",
        "Le chêne a disparu. Il y a dans le mur un rectangle rouge, tout neuf. Le maçon le jointoie du pouce, ramasse son auge, salue l'autel, et s'en va dîner.",
        "Savinien n'a pas bougé. Il tient toujours son panier : un pain, une écuelle couverte, un pichet. Il regarde le mur. Puis il s'approche, et, ne sachant que faire, il pose le panier au pied des briques, par terre, comme on pose des fleurs.",
        "« Elle a eu celui d'hier soir, dit Loridan. Elle a de l'eau jusqu'à demain. » Sa voix n'a pas changé. Ses gants, seulement, se sont mis à trembler. « Il vous faut ouvrir cette nuit. Il n'y a plus d'après-demain. »",
      ],
      choices: [{ back: "A5m_cour" }] },

    A5m_macon_laisse: { act: "V", title: "Un rectangle rouge", place: "citadelle", ambiance: "temple",
      text: [
        "Tu retiens l'horloger par sa manche. Il y a deux casaques rousses à cent pas, un sergent qui cherche un mot, et trois clefs dans une trousse : ce n'est pas le matin de se quereller avec un maçon.",
        "Vous restez dans l'ombre d'un pilier, pendant que le père Gobert monte son mur. Il fait le tour de Loridan, qui se relève à la dernière brique. Il jointoie du pouce. Il s'en va.",
        "Le chêne a disparu. Savinien pose son panier au pied des briques, par terre, comme on pose des fleurs.",
        "« Elle a eu celui d'hier soir, dit Loridan sans vous regarder. Elle a de l'eau jusqu'à demain. Il vous faut ouvrir cette nuit. »",
        "Maître Crochemore n'a rien dit. Il sort de la chapelle le premier, très raide, et dans la cour il s'arrête pour se moucher, longuement, tourné vers le rempart.",
      ],
      choices: [{ back: "A5m_cour" }] },

    // ───────────────────────────── The chapel: a word in the bread ─────────────────────────────
    A5m_pain: { act: "V", title: "L'offrande de midi", place: "citadelle", ambiance: "temple",
      fx: { meet: "savinien" },
      text: [
        { if: { has: "monde:a5:tour_ouvert" }, text: "La niche est sauve, avec ses trois rangs de briques au pied, que personne n'ôtera aujourd'hui. Savinien s'avance, son panier au bras, comme un enfant de chœur qui a failli perdre son emploi.", else: "Devant l'autel, on a rangé trois prie-Dieu de velours, un bleu, un violet, un cramoisi. À gauche, dans le mur, la niche du tour, son demi-cylindre de chêne noirci par les mains. Savinien est devant, son panier au bras." },
        "Il te reconnaît, ou il reconnaît quelque chose : il rougit avant de savoir pourquoi. « C'est pour le Bronze, dit-il. Un pain, un pichet, et aujourd'hui, comme c'est fête, de la poule au pot, que la cuisinière du gouverneur m'a donnée en cachette. » Il soulève le linge. « On la sale un peu trop, aux cuisines. J'en ôte. Je ne sais pas pourquoi je fais ça. »",
        "Il pose le panier dans la niche. Sa main est sur le chêne. Il va tourner.",
        "Tu as le temps d'une chose. Il y a ce pain, rond, encore tiède, à portée de ta main ; et tu sais de Loridan que, depuis trente et un ans, ce que l'on veut dire là-haut se dit dans la mie.",
      ],
      choices: [
        { label: "Y glisser un mot, de ta main : « Ce soir, à onze heures. Nous serons trois. »", fx: { flag: "monde:a5:mot_pain", ep: ["perso", 800] }, to: "A5m_pain_mot" },
        { label: "Laisser tourner : elle sait déjà, et un papier de trop est un papier que l'on trouve", to: "A5m_pain_rien" },
      ] },

    A5m_pain_mot: { act: "V", title: "Dans la mie", place: "citadelle", ambiance: "temple",
      text: [
        "Tu l'écris sur ton genou, au charbon, sur un coin de papier à limes. Tu fends la croûte avec l'ongle. Savinien te regarde faire, la bouche entrouverte, sans retirer sa main du chêne.",
        "« Vous écrivez au Bronze », dit-il.",
        "« J'écris à quelqu'un qui lave son écuelle. »",
        "Il devient très rouge, puis très pâle. Il ne retire toujours pas sa main. On voit, sur cette figure de dix-sept ans, une pensée qu'il repousse depuis la Chandeleur prendre enfin toute la place, avec le bruit que fait un meuble que l'on déplace à l'étage.",
        "Il tourne. Le chêne pivote sans un son, et présente à la chapelle son dos plein.",
        "Vous attendez, tous les trois, sans raison : la vaisselle ne redescend que le soir. Et pourtant, au bout d'une minute, le chêne bouge. Il revient d'un quart de tour, de lui-même, juste assez pour montrer le bord de la niche ; et sur ce bord, il y a un brin de laine grise, long comme le doigt, posé bien droit.",
        "Savinien le prend. Il le regarde dans le creux de sa main. « Ce n'est pas un rat », dit-il d'une voix qui a cessé de muer.",
      ],
      choices: [{ back: "A5m_cour" }] },

    A5m_pain_rien: { act: "V", title: "Le dos du chêne", place: "citadelle", ambiance: "temple",
      text: [
        "Tu gardes tes mains sur la courroie. Savinien dit son oraison, qui est courte, et il tourne. Le chêne pivote sans un son et présente à la chapelle son dos plein, noirci, poli par cent cinq ans de doigts.",
        "« Voilà, dit le clerc. Ce soir, je reprends la vaisselle. » Il hésite. « Le chapelain dit que cette année, après la fête, on ne fera plus l'offrande. Qu'il y aura *un nouvel état du Bronze.* Je lui ai demandé ce que mangerait le Juge. Il m'a dit de ne pas faire l'insolent. »",
        "Il s'en va balayer. Tu restes une seconde devant ce bois. Quelque part au-dessus de ta tête, à une hauteur que tu sais par marches, un pain tiède vient d'arriver dans le noir.",
      ],
      choices: [{ back: "A5m_cour" }] },

    // ───────────────────────────── The Tower ─────────────────────────────
    A5m_porte: { act: "V", title: "La porte de la Tour", place: "horloge_close", ambiance: "chateau",
      text: [
        "Les deux casaques rousses croisent leurs hallebardes. Ils n'ont jamais vu une robe des Heures ; à Ferrières, on ne connaît qu'une horloge, celle de l'Économat, et elle sert à compter les retards.",
        "« Ordre de Maître Quincarnon. Personne ne monte. Il y a là-haut un instrument à lui. »",
        "« Un instrument à lui ! » Maître Crochemore recule d'un pas pour mieux les voir. « Dans *ma* Tour ! » Il se retourne vers la cour, où cent personnes clouent, balaient, pavoisent. Et il se met à parler très haut, de cette voix aiguë qui porte par-dessus un atelier. « Qu'on aille me chercher le lieutenant de la porte ! Qu'on aille me chercher le Gouverneur ! Il y a ici deux forgerons de la vallée qui barrent l'entrée de l'Horloge-Close à un Crochemore, le jour de la Saint-Éloi, sur l'ordre d'un marchand de ferraille ! »",
        "Les maillets se sont tus. Cent têtes se tournent. À Aiguemorne, on déteste le Syndic comme on déteste son propriétaire, avec respect ; mais on déteste bien davantage que des gens de Ferrières viennent faire la loi sur le piton.",
        "Quelqu'un siffle. Un valet lâche son tapis. Le lieutenant de la porte arrive en courant, son registre ouvert, et crie de loin : « Article onze ! Article onze ! Laissez passer ! »",
        "Les hallebardes se décroisent. Les deux hommes sont devenus couleur de leur casaque.",
        "« L'un de vous me suivra, dit l'horloger avec bonté, pour voir que je ne casse rien à l'instrument de votre maître. Qu'il essuie ses pieds. »",
        "La porte de la Tour est basse, épaisse, sans ornement. Elle s'ouvre sur un froid de cave, et sur un bruit que tu reconnais au fond de tes os : un soupir, long, régulier, qui descend l'escalier à ta rencontre.",
      ],
      choices: [{ label: "Monter", to: "A5m_vis", big: true }] },

    A5m_vis: { act: "V", title: "Cent quatre-vingts marches", place: "horloge_close", ambiance: "souterrain",
      text: [
        "La vis tourne à gauche, dans l'épaisseur du mur, sans une lucarne. On y monte à la lanterne, un coude contre la pierre, et l'on perd vite le compte de ses propres tours. Les marches sont creusées au milieu : cent cinq ans de Remonteurs, un par génération, y ont laissé la forme de leur pied.",
        "Maître Crochemore monte devant, sa robe relevée. Il compte tout haut, par habitude d'homme exact. La casaque rousse suit, en soufflant ; c'est un gros garçon qui regrette déjà d'avoir été choisi.",
        "À la quatre-vingt-dixième marche, il y a un palier : une dalle un peu plus large, une meurtrière qui donne sur la cour, un anneau de fer au mur pour une torche. Rien d'autre. Un homme debout sur cette dalle, le dos à la meurtrière, tient la vis au-dessus et la vis au-dessous ; il faudrait lui passer sur le corps.",
        { if: { has: "monde:a5:comte" }, text: "Tu regardes cette dalle avec attention. Un Connétable a promis d'y avoir, ce soir, un scrupule." },
        "Le soupir grandit à chaque tour. À la cent quatre-vingtième marche, l'escalier débouche sur un plancher, et le bruit vous prend tout entiers.",
      ],
      choices: [{ label: "Entrer dans la salle des Poids", to: "A5m_poids", big: true }] },

    A5m_poids: { act: "V", title: "La salle des Poids", place: "horloge_close", ambiance: "souterrain", hub: true, backName: "la salle des Poids",
      text: [
        { first: true, text: "Rien n'a changé, et tout a changé. Les trois tambours de chêne tournent toujours sur leurs axes, de ce mouvement que l'œil constate sans le saisir. Les grandes roues de laiton s'engrènent dans leur cage. Le balancier va et vient, avec sa lentille large comme un bouclier, et pousse à chaque passage ce soupir de dormeur. Depuis six semaines, personne ne l'a graissé : il y a dans le soupir, à présent, un petit râle." },
        { first: true, text: "Maître Crochemore s'est arrêté sur le seuil. Il ôte ses bésicles, les essuie, les remet. « Je l'avais oubliée, dit-il tout bas. Je la voyais plus petite. C'est le contraire des maisons d'enfance. »" },
        { first: true, text: "Mais dans l'angle du levant, là où il y avait en septembre une caisse de sapin clouée, il y a maintenant un meuble. Il est neuf. Il est en chêne ciré, haut comme une armoire de sacristie, avec des ferrures de laiton qui sentent encore le vernis. Par ses portes ouvertes, on voit un cylindre de bronze gros comme un tonnelet, hérissé de pointes, couché sur deux paliers ; dessous, un soufflet de forge ; dessus, un rang de lames d'acier ; et, sortant du haut du meuble, un tuyau de cuivre large comme le bras, qui monte le long du mur et s'enfonce dans le plafond." },
        { first: true, text: "Un petit homme en tablier vert est à genoux devant, une burette à la main. La casaque rousse va s'asseoir près de lui sur une caisse, avec le soulagement de quelqu'un qui retrouve un pays." },
        { again: true, text: "La salle des Poids : les trois tambours, le balancier qui râle un peu, la cage aux roues. Dans l'angle, le meuble de chêne neuf et son tuyau de cuivre. Au fond, l'échelle de meunier." },
      ],
      choices: [
        { label: "Saluer l'homme au tablier vert, de confrère à confrère", to: "A5m_soufflot", once: true },
        { label: "Aller au coin du Remonteur, où ses chaussons sont restés", to: "A5m_coin", once: true },
        { label: "Tenir la lanterne à Maître Crochemore, pendant qu'il donne l'heure", to: "A5m_heure", once: true },
        { label: "Monter par l'échelle de meunier", to: "A5m_palier", big: true },
      ] },

    A5m_soufflot: { act: "V", title: "Un instrument de secours", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Il s'appelle Évariste Soufflot, facteur de serinettes à Ferrières, fournisseur de la fabrique de Sainte-Barbe pour les orgues à cylindre. Il a des mains d'enfant, un nez qui coule, et le bonheur d'un homme à qui l'on a commandé, une fois dans sa vie, quelque chose de grand.",
        "« Neuf mois d'ouvrage, monsieur. Douze cents lignes de picots, plantés un par un. Vingt-quatre lames, accordées sur la voix du Bronze : M. le Syndic m'en avait fait prendre le ton il y a sept ans, à la dernière Sentence, avec un diapason, de derrière la porte. » Il caresse le meuble. « C'est un instrument de secours. La mécanique du vieux maître a cent cinq ans, n'est-ce pas ; M. le Syndic craint qu'une nuit elle ne reste court devant toute la ville. Alors, par précaution, on double. Si le Bronze faiblit, le mien prend la suite, et personne ne s'aperçoit de rien. C'est de la prévoyance. »",
        "Il le croit. Il te regarde avec des yeux très clairs, où il n'y a que des picots.",
        "« Et comment prend-il la suite ? » demande Maître Crochemore, d'une voix que tu ne lui connais pas, douce comme une lime neuve.",
        "« Par ici ! » Le petit homme se lève, ravi. Il montre le tuyau de cuivre. « Il monte à la gorge. Le vent du Juge vient de là-haut, du grand soufflet que tournent les trois clefs. J'ai posé sur le conduit une soupape à deux voies, avec une tirette, que voici. Tirette poussée, le vent va au Bronze, comme toujours. Tirette tirée, le vent descend chez moi, passe sur mes lames, remonte par le tuyau, et c'est mon cylindre qui parle par sa bouche. » Il rit. « Le Juge remue toujours les lèvres. Il ne sait pas que ce n'est plus lui qui cause. »",
        "« Et qui tire la tirette ? »",
        "« Moi, monsieur. À minuit moins cinq, sur l'ordre. Ensuite M. le Syndic m'a dit que je pourrais redescendre et que l'on fermerait la salle. Pour sept ans, je pense. » Il réfléchit. « Il a dit : *pour de bon.* C'est une façon de parler. »",
        "Maître Crochemore regarde la tirette. C'est une tige de laiton, avec une boule d'ivoire au bout, qui sort du meuble à hauteur de main.",
      ],
      fx: { flag: "monde:a5:cylindre_su", clue: "s5_tirette" },
      choices: [{ back: "A5m_poids" }] },

    A5m_coin: { act: "V", title: "Le cahier de graissage", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Le coin du Remonteur est resté comme un lit que l'on n'a pas refait. Le tabouret. L'établi. Les burettes, rangées par taille, dont la plus petite manque : elle est au greffe, avec une étiquette. Sous l'établi, une paire de chaussons de lisière, bien parallèles, les talons au mur.",
        "Il montait en chaussons. Hilaire te l'avait dit. Il avait pris en quarante ans l'habitude de ne pas faire de bruit au-dessus de la tête de quelqu'un, et il n'avait jamais su de qui.",
        "Tu ouvres le tiroir. On l'a fouillé : le guet y a tout remué avec de gros doigts. Mais le guet cherchait des lettres, de l'argent, un mobile. Il a laissé ce qui n'était que du métier : un chiffon, de la ficelle, et un cahier de comptes à couverture de toile, graisseux, intitulé *GRAISSAGE*.",
        "C'est un cahier tenu jour par jour. *Lundi : pivots du train de sonnerie, huile fine. Mardi : chaînes, suif.* Il y en a quarante ans, de la même écriture qui tremble un peu plus à chaque volume. Celui-ci est le dernier.",
        "Tu vas à la fin. Depuis la Saint-Michel, entre deux lignes d'huile et de suif, il s'est glissé autre chose.",
        "*29 sept. Monté leur caisse, livrée de F. N'ai pas ouvert. Pèse 140 livres.*",
        "*4 oct. Elle a toussé toute la nuit. Entendu de la trappe.*",
        "*9 oct. Ai demandé au S. ce qu'il y a dans la caisse. M'a répondu : un secours. Ai demandé : pour qui. A ri.*",
        "*11 oct. Ouvert la caisse. C'est une voix. Ils veulent lui ôter la sienne et garder la bouche.*",
        "*13 oct. Je ne sais pas à qui le dire. Je ne suis qu'un homme qui graisse. Mais je la graisse depuis quarante ans, et on ne laisse pas faire cela à quelqu'un que l'on a soigné si longtemps, même sans l'avoir vu.*",
        "*14 oct. Je le dirai à la vieille Berlue. C'est une voleuse : elle ne croit personne, elle m'écoutera.*",
        "Il n'y a pas de 15 octobre. Le reste de la page est blanc, avec, en bas, une tache d'huile ronde, à l'endroit où il posait la burette pour écrire.",
      ],
      fx: { flag: "monde:a5:cahier", clue: "r5_cahier", ep: ["perso", 1200] },
      choices: [{ back: "A5m_poids" }] },

    A5m_heure: { act: "V", title: "Donner l'heure", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Donner l'heure au Bronze, c'est peu de chose, et cela prend une matinée. Il faut arrêter le balancier, à la main, au point mort ; lire sur la grande roue l'écart avec le soleil ; le corriger d'un cran ou de deux ; et relancer.",
        "Maître Crochemore ôte sa robe, la plie, la pose sur le tabouret du mort. En bras de chemise, il redevient un petit homme sec qui sait ce qu'il fait. Il te fait tenir la lanterne. Il entre dans la cage aux roues comme on entre dans une église où l'on a été baptisé.",
        "Il arrête le balancier. Il le prend à deux mains, par la tige, et le retient ; la lentille de cuivre frémit, pèse, cède. Le soupir cesse.",
        "Tu n'avais jamais entendu la Tour se taire. C'est un silence qui a une épaisseur, qui descend les cent quatre-vingts marches et remonte par les murs. La casaque rousse a levé la tête. Le petit Soufflot a cessé de graisser.",
        "Et dans ce silence, venant du plafond, de plus haut que le plafond, à travers un étage de pierre et de bronze, on entend quelque chose. C'est un frottement léger, pressé, régulier, qui s'arrête au bout d'une ligne et reprend. Une plume.",
        "Maître Crochemore l'écoute, les deux mains sur la tige, les yeux fermés. Cela dure le temps de trois lignes. Puis le frottement cesse : là-haut, on a remarqué le silence, à son tour, et l'on écoute.",
        "Il relance. La lentille repart, le soupir revient, et couvre tout.",
        "« Midi moins dix-sept, dit-il d'une voix enrouée. Elle retardait de quatre minutes. Balancier ne l'aurait pas permis. » Il sort de la cage, reprend sa robe, et te souffle au passage, sans remuer la moustache : « Elle travaille. La nuit de sa mort annoncée, cette femme travaille. Je me suis mis en colère pour moins que cela contre des apprentis. »",
      ],
      fx: { ep: ["perso", 800] },
      choices: [{ back: "A5m_poids" }] },
  },

  extras: {
    clues: {
      s5_tirette: { rev: "S", text: "Le meuble du Syndic, à la salle des Poids : un cylindre de douze cents lignes, et une soupape à deux voies sur le vent du Juge. Tirette tirée, à minuit moins cinq, c'est le cylindre qui parle par la bouche du Bronze. Ensuite, on ferme la salle « pour de bon »." },
      r5_cahier: { rev: "R", text: "Le dernier cahier de graissage du Remonteur. « 11 oct. Ouvert la caisse. C'est une voix. Ils veulent lui ôter la sienne et garder la bouche. » « 14 oct. Je le dirai à la vieille Berlue. » Il n'y a pas de 15 octobre." },
    },
    people: {
      soufflot: { name: "Maître Évariste Soufflot", aka: ["Soufflot", "le facteur de serinettes"], qui: "Le facteur de serinettes de Ferrières, qui a fait le meuble du Syndic.", f: false,
        aspect: { allure: "petit, des mains d'enfant", visage: "nez qui coule, yeux très clairs", habits: "tablier vert, manches de lustrine", signe: "caresse son meuble en parlant", voix: "heureuse, appliquée" },
        desc: "On lui a commandé un instrument de secours. Il n'a pas demandé pour qui." },
    },
  },
};
