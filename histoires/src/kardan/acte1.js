// Act I · Kardan: Sorel, the south road (Odon, the milestone, the dry valley's events), the village and its five
// places, the ravine, and the night of the capture.
var ROUTE = "@route";
module.exports = {
  // ---------------------------------------------------------------- Sorel
  K_depart: { act: "I", title: "Le relais de Sorel", place: "sorel", routes: true,
    fx: { meet: "brune" },
    text: [
      "Le relais de Sorel est une grande ferme fortifiée où l'on a mis des tables. Tu y as dormi dans le foin, au-dessus des mules, et c'est leur piétinement qui t'a réveillé avant l'aube. Maintenant le jour se lève sur la cour, et par la porte charretière ouverte tu vois commencer le pays que tout le monde, ici, appelle simplement *la vallée sèche*.",
      "Brune, la patronne, te sert du lait caillé et du pain gris sans que tu aies rien demandé. C'est une femme carrée, aux avant-bras couverts de brûlures anciennes, qui écoute tout et ne répète rien.",
      { if: { has: "passe:lettre" }, text: "Tu as relu la lettre hier soir à la chandelle, pour la centième fois. *Je suis à Sorel, au relais, chez une femme qui ne pose pas de questions.* C'est elle. Ce ne peut être qu'elle." },
      { if: { has: "passe:sifflet" }, text: "Dans ta poche, le sifflet d'os d'Aurèle a pris la tiédeur de ta cuisse. Tu n'as jamais soufflé dedans. Tu as un peu peur de ce que tu ressentirais." },
      { if: { has: "passe:souvenir" }, text: "Cette nuit, dans le foin, tu as cru l'entendre t'appeler Moineau. C'était une mule qui rêvait." },
      "Trois jours de route jusqu'à Kardan, dit-on. Trois jours de cailloux, de puits taris et de soleil. Puis le vert.",
    ],
    choices: [
      { label: "Parler d'Aurèle avec Brune", to: "K_brune", hide: { seen: "K_brune" } },
      { label: "Faire tes provisions avant la route", to: "K_relais" },
    ] },

  K_sorel: { act: "I", title: "La cour du relais", place: "sorel", routes: true,
    text: [
      "La cour s'est remplie : deux charrettes de sel, un marchand de toile qui se dispute avec son cocher, un chien qui dort au milieu de l'agitation. La porte du sud est ouverte. Au-delà, la route descend vers une lumière blanche.",
    ],
    choices: [
      { label: "Parler d'Aurèle avec Brune", to: "K_brune", hide: { seen: "K_brune" } },
      { label: "Voir ce que vend Brune", to: "K_relais" },
    ] },

  K_relais: { act: "I", title: "Le comptoir de Brune", place: "sorel", shop: "relais",
    text: [
      "Brune vend ce que les voyageurs oublient toujours : des cordes, des torches, une lanterne à volet, des onguents qu'elle prépare elle-même, dans des pots de grès ébréchés, et du pain de route si dur qu'il se garde une semaine.",
      "« Il vous faudra des vivres, dit-elle. Personne ne vous vendra rien entre ici et Kardan, parce qu'il n'y a personne. Et à Kardan, ils ne vous feront rien payer. » Elle dit ça sans sourire.",
    ],
    choices: [{ back: "K_sorel" }] },

  K_brune: { act: "I", title: "Ce que Brune n'a pas oublié", place: "sorel",
    fx: { item: "onguent", ep: ["perso", 200] },
    text: [
      "Tu décris Aurèle : grand, les cheveux bruns et la barbe rousse, rieur, une cicatrice blanche au sourcil gauche, une façon de barrer les sept qu'il tenait d'un maître d'école mort depuis longtemps.",
      "Brune essuie la table avec plus de soin qu'il ne faut. « Il a dormi là où vous avez dormi. Il chantait faux. Il m'a payée deux fois, une fois en argent et une fois en me réparant la poulie du puits. » Elle s'arrête. « Il est parti pour Kardan au matin. Il n'est pas repassé. »",
      "« Ceux qui reviennent de Kardan, ajoute-t-elle plus bas, je n'en ai jamais vu beaucoup. Ceux qui y vont, si. Les caravanes y passent en groupe, et elles repassent. Les gens seuls… » Elle hausse les épaules et ne finit pas sa phrase.",
      "Elle pose sur la table un petit pot de grès. « Pour la route. Il m'en avait acheté un, lui aussi. »",
      { if: { has: "passe:heritage" }, text: "Tu ne lui dis pas qu'Aurèle est parti avec l'argent de la maison. Pendant sept ans, tu l'as répété à qui voulait l'entendre, et tu ne sais plus très bien pourquoi." },
    ],
    choices: [{ label: "La remercier", to: "K_sorel" }] },

  // ---------------------------------------------------------------- the south road
  K_odon: { act: "I", title: "Le moine au bord de la route",
    text: [
      "À mi-journée, la route longe un muret de pierres sèches où un homme s'est assis, comme s'il attendait quelqu'un. Il a une cinquantaine d'années, il est maigre comme une branche, et sa robe de bure est si rapiécée qu'on ne distingue plus l'étoffe d'origine. Il a posé à côté de lui un bâton, une écuelle et des sandales, et il remue ses orteils nus dans la poussière avec le sérieux d'un enfant.",
      "« Bonne route, dit-il. Je suis Frère Odon, de l'ordre des Mendiants du Chemin, et je n'ai rien mangé depuis hier, ce qui est conforme à notre règle et contraire à mon tempérament. Vous allez au sud ? Tout le monde va au sud, ici. Il n'y a que du sud. »",
      "Il te regarde avec des yeux très clairs, qui ne réclament rien.",
    ],
    choices: [
      { label: "Partager ton pain avec lui", if: { food: { min: 1 } }, why: "Tu n'as plus rien à partager.", fx: { food: -1, join: "odon", conf: { odon: 15 }, ep: ["perso", 300] }, to: "K_odon_pain" },
      { label: "Lui donner une pièce et lui proposer de marcher avec toi", if: { gold: { min: 1 } }, why: "Ta bourse est vide.", fx: { gold: -1, join: "odon" }, to: "K_odon_piece" },
      { label: "Lui souhaiter bonne route et continuer seul", fx: { met: "odon", flag: "odon:croise" }, to: ROUTE },
    ] },
  K_odon_pain: { act: "I", title: "Le pain partagé",
    text: [
      "Il rompt le pain en deux, compare les morceaux et te tend le plus gros. Il mange lentement, les yeux fermés, comme on prie.",
      "« Je vais à Kardan, moi aussi, dit-il quand il a fini. On dit qu'ils y sont généreux. J'aimerais voir à quoi ressemble un village généreux ; je n'en ai vu que dans les sermons. » Il se lève, remet ses sandales. « Si vous voulez bien d'un compagnon qui marche lentement et parle trop, je suis votre homme. Sinon, je vous suivrai de loin, ce qui revient au même pour les brigands. »",
    ],
    choices: [{ label: "Reprendre la route à deux", back: ROUTE }] },
  K_odon_piece: { act: "I", title: "La pièce",
    text: [
      "Il regarde la pièce un long moment au creux de sa main, puis la glisse dans une couture de sa robe. « Je la donnerai à quelqu'un qui en aura plus besoin que moi. C'est une façon de la faire durer. »",
      "Puis il ramasse son bâton. « Marcher avec vous ? Volontiers. Je vais à Kardan. Tout le monde va à Kardan. »",
    ],
    choices: [{ label: "Reprendre la route à deux", back: ROUTE }] },

  K_borne: { act: "I", title: "La borne",
    fx: { clue: "a_borne", ep: ["perso", 400] },
    text: [
      "Le soir tombe quand tu arrives à la borne. C'est une vieille pierre militaire, plus haute qu'un homme, plantée là par un empire dont personne ne se rappelle le nom. On y a gravé des distances que plus personne ne parcourt, et, plus bas, à hauteur de main, des inscriptions de voyageurs : des noms, des dates, une prière, un dessin obscène.",
      "Et ceci, gravé profondément au couteau, d'une main rageuse et patiente :",
      "**NE BOIS PAS**",
      "Au-dessous, une date. Le dernier chiffre est un 7, barré d'un petit trait au milieu.",
      { if: { has: "passe:lettre" }, text: "Tu sors la lettre et tu compares. La lune des moissons, il y a sept ans. Le même 7." },
      { if: { present: "odon" }, text: "Odon lit l'inscription par-dessus ton épaule, en remuant les lèvres. « Ne bois pas, répète-t-il. Dans une vallée sèche. C'est un drôle de conseil. Ou un très bon. »" },
    ],
    choices: [
      { label: "Déchiffrer les inscriptions plus anciennes, sous la mousse", test: { dom: "savoir", diff: -10, label: "Savoir" },
        win: { fx: { flag: "borne:ancienne", ep: ["perso", 300] }, to: "K_borne_ancienne" }, lose: { to: "K_borne_nuit" } },
      { label: "Toucher la pierre, puis monter le camp avant la nuit", to: "K_borne_nuit" },
    ] },
  K_borne_ancienne: { act: "I", title: "Ce que dit la mousse",
    text: [
      "Tu grattes la mousse avec l'ongle. Dessous, d'autres mains, d'autres siècles. *Ne bois pas*, encore, dans une langue plus ancienne que tu ne lis qu'à moitié. Et puis, plus vieux encore, presque effacé, un dessin : une spirale de couloirs, et au centre, une coupe.",
      "Quelqu'un, il y a très longtemps, a voulu prévenir ceux qui passaient.",
    ],
    choices: [{ label: "Monter le camp", to: ROUTE }] },
  K_borne_nuit: { act: "I", title: "Au pied de la borne",
    text: [
      "Le soleil touche l'horizon et la pierre devient rouge, puis grise. Tu poses la paume à plat sur les lettres. Elles sont déjà froides. Quelque part, au sud, il y a une lumière qui ne bouge pas : Kardan, peut-être, ou une étoile basse.",
    ],
    choices: [{ label: "Monter le camp", to: ROUTE }] },

  E_puits_secs: { act: "I", title: "Le hameau aux puits secs",
    text: [
      "La route traverse un hameau, ou ce qu'il en reste : six maisons de terre crue, trois puits couverts de planches clouées, un figuier mort. Une vieille femme est assise sur un seuil avec deux enfants aux yeux immenses. Ils ne mendient pas. Ils regardent ton outre.",
      "« Les puits ont séché l'un après l'autre, dit la vieille quand tu t'approches. Depuis que Kardan est vert, nous, on sèche. C'est comme ça. L'eau va où on l'appelle. »",
    ],
    choices: [
      { label: "Partager ton eau et un jour de vivres avec eux", if: { food: { min: 1 } }, why: "Tu n'as rien à donner.", fx: { food: -1, flag: "puits:partage", ep: ["perso", 500], conf: { odon: 10 } }, to: "E_puits_merci" },
      { label: "Chercher de l'eau dans le lit du torrent, en creusant là où poussent les joncs", test: { dom: "nature", label: "Nature" },
        win: { fx: { flag: "puits:creuse", ep: ["perso", 600], food: 1 }, to: "E_puits_eau" }, lose: { fx: { pv: -2 }, to: "E_puits_rien" } },
      { label: "Les saluer et passer ton chemin", to: ROUTE },
    ] },
  E_puits_merci: { act: "I", title: "L'outre",
    text: [
      "Les enfants boivent longtemps, sans reprendre haleine. La vieille ne boit pas ; elle te regarde. « Si tu vas à Kardan, dit-elle enfin, ne dis pas que tu es seul. Dis que les tiens t'attendent au prochain bourg. Dis-le même si c'est faux. »",
      "Elle ne veut pas t'en dire plus. Elle a déjà trop parlé, et elle le sait.",
    ],
    choices: [{ back: ROUTE }] },
  E_puits_eau: { act: "I", title: "L'eau sous les joncs",
    text: [
      "Tu creuses à mains nues, puis avec ta lame, sous un bouquet de joncs gris. À une coudée, le sable devient brun ; à deux, il suinte. Tu attends, et l'eau monte dans le trou, trouble, puis claire. Les enfants poussent un cri de joie.",
      "La vieille te donne en échange un chapelet de figues sèches, la dernière chose qu'elle avait. Tu essaies de refuser. Elle te regarde comme on regarde un idiot.",
    ],
    choices: [{ back: ROUTE }] },
  E_puits_rien: { act: "I", title: "Le sable",
    text: [
      "Tu creuses jusqu'à t'en arracher les ongles. Le sable reste sec et chaud. Quand tu te relèves, les enfants sont rentrés. La vieille a fermé sa porte, doucement, pour ne pas te faire de peine.",
    ],
    choices: [{ back: ROUTE }] },

  E_caravane: { act: "I", title: "La caravane qui fait demi-tour", shop: "caravane",
    text: [
      "Un nuage de poussière grossit sur la route devant toi, et devient une caravane : douze chameaux, autant de mules, des hommes en turban qui marchent à côté des bêtes. Elle remonte vers le nord. Son chef, un homme sec à la barbe teinte au henné, lève la main pour te saluer et fait arrêter la file.",
      "« Tu descends à Kardan ? Seul ? » Il échange un regard avec ses hommes. « Nous, on y passe chaque année, à vingt, et on repart le lendemain. Ils sont très aimables, à Kardan. Très. » Il crache de côté. « On ne passe pas à Kardan seul. C'est un proverbe de caravanier. Maintenant tu le connais. »",
      "Il a des marchandises à vendre, puisque tu es là.",
    ],
    choices: [
      { label: "Lui demander ce que veut dire son proverbe", test: { dom: "social", label: "Social" },
        win: { fx: { flag: "caravane:averti", ep: ["perso", 400] }, to: "E_caravane_proverbe" }, lose: { to: "E_caravane_silence" } },
      { label: "Le remercier et continuer", to: ROUTE },
    ] },
  E_caravane_proverbe: { act: "I", title: "Le proverbe",
    text: [
      "Il hésite, puis s'approche, et parle bas, comme si les mules pouvaient le répéter. « Il y a des années, on avait un garçon avec nous, un muletier. Il est tombé amoureux d'une fille de Kardan et il est resté. Ils l'ont fêté comme un fils. Trois jours. La quatrième nuit, il n'était plus là. Ils ont dit qu'il était reparti avec un autre convoi. Il n'y avait pas d'autre convoi. »",
      "Il se redresse. « Les gens seuls restent à Kardan, ami. Pour toujours, c'est ce qu'ils disent. Ils trouvent ça joli. »",
    ],
    choices: [{ label: "Reprendre la route, plus lentement", back: ROUTE }] },
  E_caravane_silence: { act: "I", title: "Le silence du caravanier",
    text: [
      "Il sourit sans répondre, et fait repartir sa file d'un claquement de langue. Le dernier chamelier, un gamin, se retourne longtemps pour te regarder, avec une expression que tu mets un moment à reconnaître : de la pitié.",
    ],
    choices: [{ back: ROUTE }] },

  E_vautours: { act: "I", title: "Les vautours",
    text: [
      "Une dizaine de vautours tournent en cercle au-dessus d'un repli du terrain, et trois autres, posés, se disputent quelque chose à grands cris rauques. C'est une mule, morte depuis un jour ou deux. Son bât est encore sanglé : quelqu'un l'a abandonnée sans prendre le temps de la décharger.",
      "Les vautours ne s'envolent pas à ton approche. L'un d'eux, énorme, ouvre ses ailes à moitié et siffle.",
    ],
    choices: [
      { label: "Les chasser à grands gestes et fouiller le bât", test: { dom: "nature", label: "Nature" },
        win: { fx: { item: "corde", gold: 4, ep: ["perso", 300] }, to: "E_vautours_bat" }, lose: { fx: { pv: -3, gold: 4 }, to: "E_vautours_bec" } },
      { label: "Les laisser à leur repas", to: ROUTE },
    ] },
  E_vautours_bat: { act: "I", title: "Le bât",
    text: [
      "Tu frappes deux pierres l'une contre l'autre en criant, et les vautours reculent en sautillant, outrés, sans aller plus loin que le prochain rocher. Dans le bât : une corde de chanvre en bon état, quatre pièces au fond d'une bourse de cuir, et un chapelet de bois. Le chapelet porte un nom brûlé au fer : *Kardan*.",
      "Son propriétaire n'en voulait plus, ou il en a eu peur.",
    ],
    choices: [{ back: ROUTE }] },
  E_vautours_bec: { act: "I", title: "Le bec",
    text: [
      "Le gros vautour ne recule pas. Il te frappe à l'avant-bras d'un coup de bec qui ouvre la peau jusqu'à l'os, et tu lâches tout pour te protéger le visage. Quand il se décide enfin à s'envoler, tu as le temps d'arracher la bourse du bât. Quatre pièces, pour un bras ouvert.",
    ],
    choices: [{ label: "Reprendre la route en serrant ton bras", back: ROUTE }] },

  E_chevrier: { act: "I", title: "Le chevrier",
    fx: { meet: "chevrier" },
    text: [
      "Des clochettes, d'abord, puis des chèvres qui coulent sur la pente comme de l'eau brune, puis un homme jeune, pieds nus, un bâton sur les épaules et les poignets posés dessus. Il s'appelle Ismaël, il te le dit tout de suite, et il te demande d'où tu viens avant même de savoir où tu vas.",
      "Il partage avec toi un fromage de chèvre roulé dans la cendre, très salé. « Kardan ? dit-il. Tu arrives pour la Lune sèche, alors. C'est leur fête. Une fois l'an, au plus sec de l'été, ils remercient l'eau. » Il gratte la tête d'un bouc qui essaie de manger ta manche. « On dit que l'eau de Kardan a un gardien. Un monstre, dans la colline. Ils le nourrissent. »",
      "« De quoi ? »",
      "Il rit. « De pain. De fleurs. Je ne sais pas. Je ne suis pas de Kardan. Je ne vais jamais plus loin que les jardins, et jamais le soir. »",
    ],
    choices: [
      { label: "Lui décrire Aurèle", fx: { food: 1, ep: ["perso", 300] }, to: "E_chevrier_aurele" },
      { label: "Le remercier pour le fromage", fx: { food: 1 }, to: ROUTE },
    ] },
  E_chevrier_aurele: { act: "I", title: "L'homme qui sifflait",
    text: [
      "Ismaël réfléchit, la langue entre les dents. « Il y a longtemps… j'étais petit. Un homme du nord, grand, qui sifflait avec un os. Il m'a demandé le chemin, il m'a donné une pièce pour rien. Il riait. » Il hausse les épaules. « Mon père a dit qu'il ne fallait pas s'attacher aux gens qui vont à Kardan. Je n'ai pas compris. Je ne comprends toujours pas. »",
      { if: { has: "passe:sifflet" }, text: "Tu as la main sur le sifflet, dans ta poche. Tu ne le sors pas. Tu ne sais pas pourquoi." },
    ],
    choices: [{ back: ROUTE }] },

  // ---------------------------------------------------------------- Kardan
  K_arrivee: { act: "I", title: "Kardan", place: "kardan",
    fx: { meet: "hesna", stamp: "kardan", fac: { kardan: 10 }, ep: ["perso", 300] },
    text: [
      "Tu la vois longtemps avant d'y arriver : une tache verte au fond de la vallée brune, si verte qu'elle paraît peinte. Puis la route tourne, et le village est là, d'un coup. Des jardins en terrasses, des canaux de pierre où l'eau court en chantant, des figuiers, des grenadiers, des rangs de fèves, des femmes qui lavent du linge en riant. Une odeur de menthe et de terre mouillée t'emplit les narines.",
      "Derrière le village, la colline. Elle est ronde, rousse, nue, et sur son flanc s'ouvre une porte de pierre taillée, haute comme trois hommes, fermée.",
      "Des enfants t'ont vu. Ils courent devant toi en criant *un voyageur, un voyageur !*, et quand tu arrives sur la place, une femme t'attend déjà, les mains sur les hanches, le visage rond et rouge de quelqu'un qui passe sa vie près d'un four. « Bienvenue à Kardan ! Je suis Hesna, je tiens le Puits-Vert. Vous logerez chez moi, et vous ne paierez rien, vous m'entendez ? Rien ! Ce soir on fait la fête pour vous. On fait toujours la fête pour ceux qui arrivent. »",
      { if: { present: "odon" }, text: "Elle embrasse Odon sur les deux joues. Il en reste muet, ce qui n'est pas dans ses habitudes." },
      "Tu as l'impression, en la suivant, que tout le village te regarde, et que tout le village sourit.",
    ],
    choices: [
      { label: "Suivre Hesna au Puits-Vert", to: "K_puits" },
      { label: "Lui dire que tu la rejoins, et faire d'abord le tour du village", to: "K_kardan" },
    ] },

  K_kardan: { act: "I", title: "La place de Kardan", place: "kardan", hub: true, routes: true,
    text: [
      { if: { night: true }, text: "La nuit est douce sur Kardan. Les canaux murmurent comme des gens qui parlent à voix basse, et les fenêtres du Puits-Vert sont jaunes. La porte du dédale, là-haut sur la colline, est une tache plus noire que la nuit.",
        else: "La place est le cœur du village : une fontaine à vasque de pierre verte où l'eau déborde sans arrêt, un platane immense, des bancs où les vieux jouent aux osselets. Autour, le Puits-Vert, la forge de Garance qui tinte, la boutique d'Oriel qui sent l'amande, la chapelle blanche et la vieille tour ronde. Au-dessus de tout, la colline et sa porte." },
      { if: { since: "kardan", min: 2 }, text: "On prépare la Lune sèche. Des lanternes de papier pendent aux branches du platane, des femmes tressent des guirlandes de menthe, et l'on a posé au pied de la fontaine des corbeilles de pain. Les gens sourient toujours. Mais ils te regardent un peu trop, et détournent les yeux un peu trop vite." },
      { if: { all: [{ since: "kardan", max: 1 }, { not: { night: true } }] }, text: "Partout où tu passes, on te salue. Un vieux t'offre une grenade, une fille une fleur. Un homme te tape sur l'épaule sans rien dire, comme on le fait aux enterrements." },
      "La question qui t'a fait venir tient en une ligne : *qu'est-il arrivé à Aurèle, ici ?*",
    ],
    choices: [
      { label: "Le Puits-Vert, l'auberge d'Hesna", to: "K_puits" },
      { label: "La forge de Garance", to: "K_forge" },
      { label: "L'herboristerie d'Oriel", to: "K_oriel" },
      { label: "La vieille tour, où des enfants crient", to: "K_place", hide: { has: "tobie:ami" } },
      { label: "La vieille tour, où Tobie joue avec son cerf-volant", to: "K_tobie_jeu", hide: { not: { has: "tobie:ami" } } },
      { label: "La maison de l'Aïeule, qui t'a invité", to: "K_aieule", if: { seen: "K_fete" }, why: "On ne monte pas chez l'Aïeule sans y être invité.", hide: { any: [{ seen: "K_aieule_lapsus" }, { seen: "K_aieule_the" }] } },
      { label: "La chapelle blanche", to: "K_chapelle" },
      { label: "La porte du dédale, sur la colline", to: "K_porte" },
      { label: "T'asseoir sur un banc et faire le point sur ce que tu sais d'Aurèle", if: { clues: "A", min: 3 }, why: "Tu n'en sais pas encore assez pour faire le point : il te faut trois indices.", hide: { quest: "K_trace" }, to: "K_point" },
    ] },

  K_puits: { act: "I", title: "Le Puits-Vert", place: "kardan", shop: "puits", taverne: { mise: 2, adversaire: "un muletier de passage" },
    fxEvery: { time: 1 },
    text: [
      "Le Puits-Vert est une grande salle fraîche aux murs chaulés, autour d'un vrai puits dont la margelle sert de comptoir. On y descend des cruches au bout d'une corde, et l'eau en remonte si froide qu'elle embue la terre cuite. Hesna règne sur tout cela avec une louche et un torchon.",
      { if: { not: { seen: "K_fete" } }, text: "« Ce soir, la fête ! crie-t-elle en te voyant. Vous serez assis à la place d'honneur. Ne mangez rien d'ici là, vous m'entendez ? Rien ! »" },
      { if: { since: "kardan", min: 2 }, text: "Hesna est plus agitée que d'habitude. Elle fait tomber une cruche, rit trop fort, la ramasse. Elle a préparé ta chambre « pour la nuit de la Lune ». Elle a changé les draps deux fois." },
      "Sur une étagère derrière le puits, il y a un gros registre relié de cuir, où chaque voyageur écrit son nom.",
    ],
    choices: [
      { label: "Attendre le soir, et rejoindre la fête qu'on donne pour toi", fx: { until: 20 }, to: "K_fete", hide: { any: [{ seen: "K_fete" }, { night: true }] }, big: true },
      { label: "Rejoindre la fête qu'on donne pour toi", to: "K_fete", hide: { any: [{ seen: "K_fete" }, { not: { night: true } }] }, big: true },
      { label: "Parler avec Hesna de ceux qui sont passés avant toi", to: "K_hesna", hide: { any: [{ seen: "K_hesna_aveu" }, { seen: "K_hesna_esquive" }] } },
      { label: "Feuilleter le registre pendant qu'elle a le dos tourné", hide: { clue: "a_registre" },
        test: { dom: "discretion", label: "Discrétion", help: [{ if: { present: "odon" }, v: 10 }, { if: { night: true }, v: 10 }] },
        win: { fx: { clue: "a_registre", ep: ["perso", 400] }, to: "K_registre_lu" }, lose: { fx: { fac: { kardan: -5 } }, to: "K_registre_pris" } },
      { label: "Te reposer quelques heures sur un banc de la salle", fx: { time: 4, pv: 6, rest: true }, to: "K_puits_repos" },
      { label: "Monter dormir", if: { seen: "K_fete" }, why: "On t'attend à la fête : Hesna ne te laissera pas monter avant.", hide: { since: "kardan", min: 2 }, fx: { until: 8, pv: "max", rest: true }, to: "K_matin" },
      { label: "Monter dormir, la nuit de la Lune sèche", hide: { since: "kardan", max: 1 }, exit: true, big: true, to: "K_nuit" },
      { back: "K_kardan" },
    ] },
  K_puits_repos: { act: "I", title: "Un banc au frais", place: "kardan",
    text: [
      "Tu t'allonges sur un banc, sous la fenêtre. Le bruit de la corde dans la poulie, les voix des buveurs, l'odeur du pain chaud. Tu dors sans rêve, d'un sommeil léger, et quand tu rouvres les yeux la lumière a tourné sur le mur.",
      "Hesna a posé une couverture sur toi. Tu ne l'as pas sentie venir.",
    ],
    choices: [{ label: "Te lever", to: "K_puits" }] },
  K_registre_lu: { act: "I", title: "La page arrachée", place: "kardan",
    text: [
      "Tu tournes les pages à rebours, le cœur battant à chaque bruit de louche. Des noms, des villes, des dates, des remerciements maladroits, un dessin de fleur. Les caravanes signent d'une seule croix pour vingt hommes. Les voyageurs seuls signent d'une belle écriture, avec des fioritures.",
      "Sept ans en arrière, une page manque. Elle a été coupée au couteau, proprement, au ras de la couture. Sur le petit talon qui reste, on lit encore un bout de mot : *…rèle, du Nord*, et plus bas, d'une autre main, le mot *nuit*.",
      "Tu remets le registre en place juste au moment où Hesna se retourne.",
    ],
    choices: [{ label: "Lui sourire comme si de rien n'était", to: "K_puits" }] },
  K_registre_pris: { act: "I", title: "Le dos tourné", place: "kardan",
    text: [
      "Tu as à peine ouvert le registre qu'Hesna te le reprend des mains, gentiment, très gentiment. « Les noms des autres, ce n'est pas pour les curieux, dit-elle en riant. Vous écrirez le vôtre au départ. Tout le monde l'écrit au départ. »",
      "Elle range le registre sur l'étagère du haut, celle où tu ne peux pas l'atteindre sans monter sur le puits. Les buveurs ont arrêté de parler.",
    ],
    choices: [{ label: "T'excuser", to: "K_puits" }] },

  K_fete: { act: "I", title: "La fête de Kardan", place: "kardan",
    fx: { meet: ["maeve", "tobie", "garance", "oriel"], clue: "a_toast", quest: "K_fete", ep: ["histoire", 3000], fac: { kardan: 5 } },
    text: [
      "Ils ont dressé les tables sur la place, sous le platane, et allumé des lampes à huile dans les branches. Tout Kardan est là : soixante personnes, peut-être plus, des vieux, des bébés, des chiens. On te met au bout de la table, sur une chaise à haut dossier qui doit venir de la chapelle. On te sert d'abord. On te sert beaucoup.",
      "Il y a de l'agneau aux abricots, du pain plat brûlant, des fèves à l'huile, des pastèques fendues, du vin de grenade qui monte à la tête. Un garçon d'une dizaine d'années, Tobie, te regarde manger sans manger lui-même. Une forgeronne aux bras énormes, Garance, te fait goûter son eau-de-vie. Une femme mince aux doigts verts, Oriel, ne dit rien et t'observe.",
      "À l'autre bout de la table, une vieille femme minuscule, droite comme un piquet, les cheveux blancs tressés en couronne : l'Aïeule, Maève. Quand elle lève son gobelet, la place se tait d'un coup.",
      "« Au Gardien, dit-elle d'une voix claire, et à celui qui le nourrira. »",
      "Soixante gobelets se lèvent. Soixante visages se tournent vers toi, et sourient.",
      { if: { present: "odon" }, text: "À côté de toi, Odon a reposé son gobelet sans boire. Il te regarde, et il ne sourit pas." },
      "Plus tard, l'Aïeule t'envoie dire par un enfant qu'elle te recevra chez elle quand tu voudras.",
    ],
    choices: [
      { label: "Danser, boire, te laisser porter par la fête", fx: { flag: "fete:danse" }, to: "K_fete_nuit" },
      { label: "Lever ton verre comme les autres, mais regarder les visages plutôt que boire", test: { dom: "social", label: "Social" },
        win: { fx: { flag: "fete:observe", ep: ["perso", 400] }, to: "K_fete_visages" }, lose: { to: "K_fete_nuit" } },
    ] },
  K_fete_visages: { act: "I", title: "Les visages", place: "kardan",
    text: [
      "Tu gardes ton gobelet à hauteur des lèvres et tu regardes. Hesna rit à chaque phrase et ne boit pas. Garance boit trop et regarde ses mains. Oriel s'en va avant les gâteaux, et tu la vois s'arrêter dans l'ombre de la chapelle, le front contre le mur, comme quelqu'un qui a mal au ventre. Un homme en cuirasse de cuir, une lance posée contre l'arbre, ne quitte pas des yeux la porte de la colline : Bastien, le chef de la milice, te souffle un voisin.",
      "Et l'Aïeule ne regarde que toi. Pas avec hostilité. Avec une sorte d'attention douloureuse, comme on regarde un objet qu'on va devoir casser.",
    ],
    choices: [{ label: "Rentrer au Puits-Vert quand la fête s'achève", to: "K_fete_nuit" }] },
  K_fete_nuit: { act: "I", title: "Après la fête", place: "kardan",
    fx: { until: 8, pv: "max", rest: true, meet: "bastien" },
    text: [
      "La fête finit tard, en chansons, et quelqu'un te raccompagne au Puits-Vert en te tenant par le bras. Ta chambre est petite, blanche, avec un lit trop grand et une fenêtre sur les jardins. Tu dors d'un sommeil de plomb.",
      "Au matin, tout est propre. Les tables sont rangées, les lampes décrochées. Sur ta table de nuit, quelqu'un a posé une grenade ouverte, un pain et une fleur de câprier.",
    ],
    choices: [{ label: "Descendre", to: "K_kardan" }] },

  K_hesna: { act: "I", title: "Hesna", place: "kardan",
    text: [
      "Hesna s'assoit en face de toi, ce qu'elle ne fait jamais, et pose ses deux mains à plat sur la table comme pour l'empêcher de s'envoler. Oui, beaucoup de voyageurs passent. Oui, ils repartent tous contents. Non, elle ne se souvient pas d'un grand homme à la barbe rousse qui barrait ses sept. « Il en passe tant, vous savez. Tant et tant. »",
      "Elle parle de Kardan, de l'eau qui n'a jamais manqué, des récoltes, de la fête. Elle en parle beaucoup. Elle ne te regarde pas dans les yeux.",
    ],
    choices: [
      { label: "Lui dire que c'était ton frère, et que tu as fait trois jours de route pour l'entendre", test: { dom: "social", diff: -20, label: "Social", help: [{ if: { has: "passe:promesse" }, v: 10 }, { if: { has: "puits:partage" }, v: 5 }] },
        win: { fx: { flag: "hesna:fissure", ep: ["perso", 500], regard: { hesna: "craintif" } }, to: "K_hesna_aveu" }, lose: { fx: { regard: { hesna: "distant" } }, to: "K_hesna_esquive" } },
      { label: "Ne pas insister", to: "K_hesna_esquive" },
    ] },
  K_hesna_aveu: { act: "I", title: "Ce qu'Hesna a gardé", place: "kardan",
    fx: { clue: "a_registre" },
    text: [
      "Elle se tait longtemps. Puis elle sort de son tablier un papier plié en quatre, si souvent plié qu'il est doux comme un tissu, et le pose devant toi sans le lâcher.",
      "C'est une page de registre. Un nom, d'une grande écriture moqueuse : *Aurèle, du Nord, qui boit comme un roi*. Et en dessous, d'une autre main, de la main d'Hesna : *une nuit*.",
      "« Il riait tout le temps, dit-elle. Il m'a appris une chanson. Je n'ai pas pu la jeter. » Elle reprend la page, la replie, la remet dans son tablier. « Ne me demandez rien d'autre. S'il vous plaît. Rien d'autre. Et partez, si vous pouvez. Partez avant la Lune. »",
      "Elle se lève et retourne à son puits. Ses mains tremblent sur la corde.",
    ],
    choices: [{ label: "La laisser tranquille", to: "K_puits" }] },
  K_hesna_esquive: { act: "I", title: "La louche", place: "kardan",
    text: [
      "« Allons, allons ! » Hesna se relève d'un bond, la louche à la main. « On ne parle pas des absents à Kardan, ça porte malheur à l'eau. Vous avez faim ? Vous avez toujours faim, je le vois bien. » Elle repart vers ses marmites en chantonnant. Elle chante faux, et l'air ne t'est pas tout à fait inconnu.",
    ],
    choices: [{ back: "K_puits" }] },

  K_matin: { act: "I", title: "Le matin", place: "kardan",
    text: [
      "Tu te réveilles dans la chambre blanche. Le soleil entre de biais, et il fait déjà chaud. En bas, Hesna chante, et l'odeur du pain monte par l'escalier.",
      { if: { since: "kardan", min: 2 }, text: "Par la fenêtre, tu vois des hommes poser des lanternes de papier dans le platane. C'est aujourd'hui la Lune sèche. Ce soir, la fête de l'eau. Tout le monde a l'air content. Tout le monde a l'air fatigué." },
    ],
    choices: [{ label: "Descendre sur la place", to: "K_kardan" }] },

  // the forge and the knife
  K_forge: { act: "I", title: "La forge de Garance", place: "kardan", shop: "forge",
    fx: { meet: "garance", clue: ["a_couteau", "g_couteau"], ep: ["perso", 400] },
    fxEvery: { time: 1 },
    text: [
      "La forge est ouverte sur la rue, un auvent de tuiles sur quatre piliers noircis. Garance bat une lame sur l'enclume, à grands coups réguliers, et ne s'arrête qu'en fin de chauffe. Elle te fait signe de regarder, de toucher, de soupeser : ici rien n'est sous clé.",
      "Aux murs, des outils, des fers, quelques armes. Et, accroché à un clou, à part, un couteau à manche de corne.",
      { if: { not: { has: "couteau:aurele" } }, text: "Tu le reconnais avant d'y croire. Le manche est usé à l'endroit du pouce. Tu le décroches. Près de la garde, un 7 barré. Il ne s'en séparait jamais ; il dormait avec." },
      { if: { not: { has: "couteau:aurele" } }, text: "Garance a cessé de frapper. « Celui-là, je le vends quarante, dit-elle. C'est une belle lame. Elle vient d'un étranger. »" },
    ],
    choices: [
      { label: "Lui demander d'où elle tient ce couteau", to: "K_garance_source", hide: { seen: "K_garance_source" } },
      { label: "Acheter le couteau d'Aurèle · 40 p.", if: { gold: { min: 40 } }, why: "Il te faut 40 pièces.", hide: { has: "couteau:aurele" }, fx: { gold: -40 }, to: "K_couteau_achat" },
      { label: "Lui proposer un bras de fer : le couteau contre ta bourse", hide: { has: "couteau:aurele" },
        test: { dom: "combat", diff: -10, label: "Combat", help: [{ if: { has: "passe:arme" }, v: 5 }] },
        win: { fx: { ep: ["seance", 1500] }, to: "K_couteau_bras" }, lose: { fx: { pv: -2 }, to: "K_couteau_perdu" } },
      { label: "Le réclamer : il appartenait à ton frère", hide: { has: "couteau:aurele" },
        test: { dom: "social", diff: -10, label: "Social", help: [{ if: { item: "lettre_aurele" }, v: 20 }, { if: { item: "sifflet" }, v: 10 }, { if: { fac: "kardan", min: 15 }, v: 5 }] },
        win: { fx: { ep: ["seance", 1500] }, to: "K_couteau_rendu" }, lose: { fx: { fac: { kardan: -5 } }, to: "K_couteau_refus" } },
      { back: "K_kardan" },
    ] },
  K_garance_source: { act: "I", title: "D'où vient le couteau", place: "kardan",
    text: [
      "Garance repose son marteau. « On me l'a apporté, dit-elle. Comme le reste. » Elle désigne un coffre dans un coin, sous un sac. « Les étrangers qui repartent laissent souvent des choses. Trop pressés. Les Anciens me les apportent, je les remets en état, je les revends. L'argent va à la fontaine. C'est l'usage. »",
      "Tu soulèves le sac. Le coffre est plein : des ceinturons, des boucles, un astrolabe de poche, une flûte, une paire de bottes de femme, un collier de chien.",
      "« Les gens repartent sans leurs bottes ? »",
      "Garance te regarde, et pour la première fois elle n'a rien à répondre. Elle se remet à frapper, plus fort.",
    ],
    choices: [{ label: "Reposer le sac", to: "K_forge" }] },
  K_couteau_achat: { act: "I", title: "Quarante pièces", place: "kardan",
    fx: { item: "couteau_aurele", flag: "couteau:aurele", quest: "K_couteau", ep: ["seance", 1500] },
    text: [
      "Tu comptes quarante pièces sur l'enclume encore tiède. Garance les ramasse sans les recompter, ce qui, chez une forgeronne, vaut une excuse. Elle décroche le couteau et te le tend par la lame, le manche vers toi, comme on rend ce qu'on n'aurait pas dû garder.",
      "Il a exactement le poids dont tu te souvenais.",
    ],
    choices: [{ label: "Le glisser à ta ceinture", to: "K_forge" }] },
  K_couteau_bras: { act: "I", title: "Le bras de fer", place: "kardan",
    fx: { item: "couteau_aurele", flag: ["couteau:aurele", "garance:respect"], quest: "K_couteau", fac: { kardan: 5 }, regard: { garance: "admiratif" } },
    text: [
      "Vous vous asseyez de part et d'autre d'un billot. La moitié de la rue se rassemble. Le bras de Garance est un tronc, et pendant un long moment il ne se passe rien, sinon que vos deux visages deviennent rouges et que quelqu'un parie trois œufs contre toi.",
      "Puis tu sens son poignet céder d'un cheveu, et tu y mets tout ce qui te reste : sept ans de route et de colère. Le dos de sa main touche le bois.",
      "Le silence. Puis Garance éclate de rire, un rire énorme, et te donne une claque dans le dos qui te fait tousser. « Prends-le, dit-elle en décrochant le couteau. Il est à toi. Il était à toi avant, je crois. » Elle ne rit plus en disant ça.",
    ],
    choices: [{ label: "Prendre le couteau", to: "K_forge" }] },
  K_couteau_perdu: { act: "I", title: "Le dos de la main", place: "kardan",
    text: [
      "Garance te couche le bras sur le billot sans forcer, lentement, pour que tu aies le temps de comprendre. Ton épaule craque. La rue applaudit.",
      "« Reviens quand tu veux, dit-elle sans méchanceté. Je ne prends pas ta bourse. Je ne prends pas la bourse des gens qui… » Elle s'arrête. « Je ne prends pas ta bourse. »",
    ],
    choices: [{ label: "Masser ton épaule", to: "K_forge" }] },
  K_couteau_rendu: { act: "I", title: "Le couteau rendu", place: "kardan",
    fx: { item: "couteau_aurele", flag: ["couteau:aurele", "garance:honte"], quest: "K_couteau", regard: { garance: "redevable" } },
    text: [
      "Tu lui racontes. Le garçon de quinze ans qui gravait son couteau neuf avec un clou, sous la table, pendant la leçon. Le pouce qui use la corne.",
      { if: { item: "lettre_aurele" }, text: "Tu déplies la lettre et tu lui montres : *toujours mon couteau*." },
      "Garance écoute sans t'interrompre. Puis elle décroche le couteau et le pose dans ta main, et referme tes doigts dessus avec les siens, qui sont durs comme du bois.",
      "« Je ne savais pas à qui il était, dit-elle. Je ne voulais pas savoir. C'est différent, mais pas tant que ça. » Elle retourne à son enclume. « Ne dis pas aux Anciens que je te l'ai donné. »",
    ],
    choices: [{ label: "Prendre le couteau", to: "K_forge" }] },
  K_couteau_refus: { act: "I", title: "Ce qui est vendu est vendu", place: "kardan",
    text: [
      "« Ton frère ? » Garance hausse les épaules. « Tous les couteaux appartiennent au frère de quelqu'un. Celui-là appartient à la fontaine, maintenant, tant qu'on ne me l'a pas payé. » Elle a parlé fort, pour que la rue entende. Mais quand tu sors, elle te suit des yeux.",
    ],
    choices: [{ label: "Laisser tomber, pour l'instant", to: "K_forge" }] },

  // Oriel and the moon thistle
  K_oriel: { act: "I", title: "L'herboristerie d'Oriel", place: "kardan", shop: "oriel",
    fx: { meet: "oriel", flag: "oriel:demande", reveal: "ravine" },
    fxEvery: { time: 1 },
    text: [
      "Une pièce basse, sombre, encombrée de bottes d'herbes qui sèchent la tête en bas. Des pots, des mortiers, des bocaux où flottent des choses que tu préfères ne pas identifier. Ça sent le foin, la cire et, par-dessous, une note d'amande amère qui te pique le nez.",
      "Oriel pile quelque chose sans lever les yeux. Elle a des doigts teints de vert jusqu'aux poignets et une voix si basse qu'il faut se pencher pour l'entendre.",
      { if: { not: { quest: "K_chardon" } }, text: "« Vous êtes de passage, dit-elle. Vous avez de bonnes jambes. Il me faut des chardons-lune, ils poussent à l'ombre dans la ravine, au nord-est, sur le plateau. Une demi-journée de marche. Moi, je n'ai plus les jambes. » Elle lève enfin les yeux. « Je paie. Et je vous apprendrai quelque chose d'utile. »" },
      { if: { quest: "K_chardon" }, text: "Oriel te salue d'un signe de tête. Depuis que tu lui as rapporté les chardons, elle te regarde comme on regarde quelqu'un à qui on doit quelque chose qu'on ne pourra pas rendre." },
    ],
    choices: [
      { label: "Lui donner les chardons-lune", if: { item: "chardons" }, why: "Il faut d'abord aller les cueillir dans la ravine, sur le plateau.", hide: { quest: "K_chardon" }, to: "K_oriel_odeur" },
      { back: "K_kardan" },
    ] },
  K_oriel_odeur: { act: "I", title: "L'odeur du sommeil", place: "kardan",
    fx: { drop: "chardons", flag: ["oriel:odeur", "oriel:chardon"], quest: "K_chardon", gold: 8, ep: ["seance", 2000] },
    text: [
      "Oriel étale les chardons sur sa table et les compte, un par un, du bout de l'ongle. Puis elle t'en tend un et te fait écraser la tête bleue entre tes doigts.",
      "« Sentez. L'amande, d'abord. Puis, derrière, une odeur de linge mouillé. C'est elle qui compte. Une tisane de chardon-lune fait dormir un homme une nuit entière, si profondément qu'on pourrait le porter, le laver, le mettre en terre. On en donne aux grands blessés, pour couper un bras. » Elle pose huit pièces sur la table. « Si un jour vous sentez le linge mouillé dans une tasse, c'est qu'on veut vous couper quelque chose. »",
      "Tu la regardes. Elle soutient ton regard, longtemps.",
      "« Pourquoi me dites-vous ça ? »",
      "« Parce qu'on m'en commande beaucoup avant la Lune sèche, dit-elle. Et que je suis lâche, et que je n'ai trouvé que ce moyen-là de ne pas l'être tout à fait. »",
    ],
    choices: [{ label: "Prendre les pièces, et retenir l'odeur", to: "K_oriel" }] },

  K_ravine: { act: "I", title: "La ravine aux chardons", place: "ravine",
    text: [
      "La ravine s'ouvre d'un coup sous tes pieds, une entaille dans le plateau, étroite et profonde, comme un coup de hache donné à la terre. On y descend par un éboulis de pierres plates. En bas, il fait presque frais : un filet d'eau suinte de la roche, et à l'ombre de la paroi nord poussent des chardons d'un bleu si pâle qu'ils semblent de verre.",
      "Le moindre souffle de vent fait monter leur odeur : l'amande, et autre chose derrière. Tes paupières s'alourdissent déjà.",
    ],
    choices: [
      { label: "Descendre les cueillir, en retenant ton souffle", test: { dom: "nature", label: "Nature", help: [{ if: { present: "odon" }, v: 10 }] },
        win: { fx: { item: "chardons", ep: ["perso", 400] }, to: "K_ravine_cueille" }, lose: { fx: { item: "chardons", pv: -3 }, to: "K_ravine_epines" } },
    ] },
  K_ravine_cueille: { act: "I", title: "La brassée bleue", place: "ravine",
    text: [
      "Tu coupes les tiges au couteau, une à une, en respirant par la bouche et en tournant la tête entre chaque coupe. La sève colle aux doigts et sent fort. En une heure, tu en as une brassée, liée dans ta chemise.",
      "Quand tu te redresses, le soleil a disparu derrière le bord de la ravine. Et sur ce bord, découpées contre le ciel, trois silhouettes basses, aux oreilles pointues, qui te regardent.",
    ],
    choices: [
      { label: "Tendre un collet au pied de l'éboulis avant de remonter", if: { arch: "rodeur" }, why: "Il faudrait savoir poser un collet.", hint: "rôdeur",
        fx: { flag: "ravine:collet" }, to: "K_ravine_chacals" },
      { label: "Remonter l'éboulis, la main sur ton arme", to: "K_ravine_chacals" },
    ] },
  K_ravine_epines: { act: "I", title: "Le sommeil vert", place: "ravine",
    text: [
      "Tu as respiré trop fort, ou trop longtemps. Le monde se met à tourner doucement, comme une roue de moulin, et tu te réveilles allongé dans les chardons, le visage plein d'épines, sans savoir combien de temps a passé. Tu as la brassée serrée contre toi, au moins. Tu ne te rappelles pas l'avoir cueillie.",
      "Le soleil a disparu derrière le bord de la ravine. Et sur ce bord, découpées contre le ciel, trois silhouettes basses, aux oreilles pointues, qui te regardent.",
    ],
    choices: [
      { label: "Tendre un collet au pied de l'éboulis avant de remonter", if: { arch: "rodeur" }, why: "Il faudrait savoir poser un collet.", hint: "rôdeur",
        fx: { flag: "ravine:collet" }, to: "K_ravine_chacals" },
      { label: "Remonter l'éboulis, la main sur ton arme", to: "K_ravine_chacals" },
    ] },
  K_ravine_chacals: { act: "I", title: "Les chacals dorés", place: "ravine",
    combat: { title: "Les chacals dorés", enemies: [{ id: "chacal", n: 2 }], range: "loin", terrain: "nature",
      pretrap: { if: { has: "ravine:collet" }, text: "Le premier chacal dévale l'éboulis droit sur ton collet. Le nœud se referme sur sa patte avant, et le voilà qui hurle et se tord au bout de sa corde." },
      win: { fx: { ep: ["perso", 600] }, to: "K_ravine_retour" }, lose: { to: "K_ravine_retour" },
      flee: { label: "Remonter l'éboulis en courant", dom: "nature", diff: 0, to: "K_ravine_retour" } },
    text: [
      "Ils descendent l'éboulis à ta rencontre, deux d'abord, le troisième restant en haut à gémir comme un enfant. Ce sont des chacals dorés, maigres, la robe couleur de blé, et ils ont faim. Le premier feinte à gauche, le second vient à droite, bas, vers tes jambes.",
    ] },
  K_ravine_retour: { act: "I", title: "Le bord de la ravine", place: "ravine", routes: true,
    text: [
      "Quand tu arrives en haut, hors d'haleine, le plateau est vide jusqu'à l'horizon, mauve dans le soir. Les chacals se sont dispersés. Tu as tes chardons. Au sud-ouest, une lueur verte dans le brun : Kardan.",
    ],
    choices: [] },
  K_ravine_vide: { act: "I", title: "La ravine aux chardons", place: "ravine", routes: true,
    text: [
      "La ravine est telle que tu l'as laissée : l'eau qui suinte, les chardons qui repoussent déjà, l'odeur d'amande. Tu n'as plus rien à faire ici.",
    ],
    choices: [] },

  // the old tower and Tobie
  K_place: { act: "I", title: "La vieille tour", place: "kardan",
    fx: { meet: "tobie" },
    fxEvery: { time: 1 },
    text: [
      "La vieille tour est ronde, sans toit, bâtie en pierres sèches qui ont l'air de tenir par habitude. Au sommet, accroché à un créneau ébréché, un cerf-volant en peau de chèvre peinte claque au vent comme un drapeau. Au pied, un garçon de neuf ans, Tobie, tire sur la ficelle cassée avec l'obstination de ceux qui savent déjà que ça ne sert à rien.",
      "« C'est mon père qui l'a fait, dit-il sans se retourner. Avant que je naisse. Il est parti garder l'eau. » Il a dit ça comme on dit *il est parti aux champs*. « Les autres disent que la tour va tomber si on monte. Moi je dis qu'elle tombera pas. Mais j'ai pas le droit. »",
    ],
    choices: [
      { label: "Grimper à la tour par les pierres disjointes", test: { dom: "discretion", diff: -10, label: "Escalade", help: [{ if: { has: "passe:arme" }, v: -5 }] },
        win: { fx: { ep: ["perso", 500] }, to: "K_tobie_chanson" }, lose: { fx: { pv: -4 }, to: "K_place_chute" } },
      { label: "Lancer ta corde par-dessus le créneau et monter à la force des bras", if: { item: "corde" }, why: "Il te faudrait une corde.", to: "K_tobie_chanson" },
      { label: "Laisser Odon faire la courte échelle et monter sur ses épaules", who: "odon", test: { dom: "nature", label: "Courte échelle" },
        win: { fx: { conf: { odon: 5 } }, to: "K_tobie_chanson" }, lose: { fx: { pv: -2 }, to: "K_place_chute" } },
      { back: "K_kardan" },
    ] },
  K_place_chute: { act: "I", title: "La chute", place: "kardan",
    text: [
      "Une pierre se dérobe sous ton pied. Tu glisses le long du mur sur la hauteur d'un homme et tu atterris sur le dos, dans la poussière, le souffle coupé. Tobie se penche sur toi. « Je vous l'avais dit, qu'il fallait pas monter, dit-il, avec une immense satisfaction. Vous recommencez ? »",
    ],
    choices: [{ label: "Te relever", to: "K_place" }] },
  K_tobie_chanson: { act: "I", title: "La chanson de Tobie", place: "kardan",
    fx: { flag: "tobie:ami", clue: ["a_chanson", "g_chanson", "t_tobie"], quest: "K_cerfvolant", ep: ["seance", 2000] },
    text: [
      "Tu décroches le cerf-volant du créneau. D'en haut, tu vois tout Kardan, les jardins, les canaux, la place, et la colline qui le domine, et sa porte. Tu vois aussi, au-delà, la vallée sèche qui s'étend jusqu'aux montagnes, brune et sans fin. Le vert de Kardan a l'air d'une flaque oubliée.",
      "Quand tu redescends, Tobie serre son cerf-volant contre lui comme il serrerait un chat. Puis, pour te remercier, parce qu'il n'a rien d'autre, il chante.",
      "*Dors, petit pain, dors, petit sel, la lune est dans le seau…*",
      "Tu t'arrêtes net. C'est la chanson de votre mère. Une berceuse idiote, qu'elle avait inventée, qu'on ne chante qu'à trois maisons de chez vous, à mille lieues d'ici. Tobie la chante faux, exactement comme Aurèle la chantait faux, avec la même note qui monte au lieu de descendre.",
      "« Qui t'a appris ça ? »",
      "« Un étranger, quand j'étais petit. Il m'a fait sauter sur ses genoux. Il riait. » Tobie fronce les sourcils. « Après, il est reparti. Ils repartent tous. Grand-mère dit que mon père est mort d'une fièvre, mais Hesna dit qu'il est parti garder l'eau. Je sais pas laquelle croire. »",
    ],
    choices: [{ label: "Lui ébouriffer les cheveux, et t'en aller avant qu'il voie ton visage", to: "K_kardan" }] },
  K_tobie_jeu: { act: "I", title: "Le cerf-volant", place: "kardan",
    text: [
      "Tobie fait voler son cerf-volant au-dessus de la vieille tour, avec une ficelle neuve que Garance lui a donnée. En te voyant, il lève la main sans lâcher la ficelle et crie quelque chose que le vent emporte. Le cerf-volant monte, monte, plus haut que la colline.",
    ],
    choices: [{ label: "Le regarder un moment, puis revenir sur la place", to: "K_kardan" }] },

  // the Aïeule
  K_aieule: { act: "I", title: "La maison de l'Aïeule", place: "kardan",
    fx: { item: "eau_source", ep: ["perso", 300] },
    fxEvery: { time: 2 },
    text: [
      "La maison de l'Aïeule est la plus haute du village, la plus proche de la colline, et la plus simple : une seule pièce chaulée, un lit, un coffre, un métier à tisser, une fenêtre qui donne sur la porte du dédale. Maève t'attend assise, les mains sur les genoux.",
      "Elle te sert un thé à la menthe si sucré qu'il colle aux dents. Elle te demande d'où tu viens, et elle écoute la réponse, vraiment, comme peu de gens écoutent. Elle te parle de Kardan : deux cents ans d'eau, depuis que l'architecte a creusé la colline. « Nous avons de la chance. Nous le savons. Nous essayons de la mériter. »",
      "Avant que tu partes, elle te met dans la main une petite fiole de terre fermée de cire. « De l'eau de la Source. Elle guérit. On ne la donne qu'aux gens qu'on aime. » Elle sourit. « Vous voyez. Nous vous aimons déjà. »",
    ],
    choices: [
      { label: "Lui parler d'Aurèle, en regardant ses mains plutôt que son visage", test: { dom: "social", diff: -10, label: "Lire les gens", help: [{ if: { has: "fete:observe" }, v: 15 }, { if: { has: "hesna:fissure" }, v: 10 }] },
        win: { fx: { clue: "a_aieule", ep: ["perso", 600], flag: "maeve:lapsus", regard: { maeve: "mefiant" } }, to: "K_aieule_lapsus" }, lose: { to: "K_aieule_the" } },
      { label: "La remercier pour l'eau et le thé", to: "K_aieule_the" },
    ] },
  K_aieule_lapsus: { act: "I", title: "Le lapsus", place: "kardan",
    text: [
      "Tu parles d'un homme du Nord, il y a sept ans. Tu ne dis pas qui il était. Ses mains restent calmes, parfaitement calmes, sur ses genoux.",
      "« Ton frère, dit-elle, était un homme… »",
      "Elle s'arrête. Tu n'as pas dit *frère*. Tu ne l'as dit à personne d'autre qu'à Brune, à Sorel, à trois jours de marche.",
      "Ses mains ne bougent toujours pas. C'est son visage qui bouge : il se ferme, doucement, comme une porte qu'on pousse du pied. « Je suis vieille, dit-elle. Je confonds les gens qui passent. Il en passe tant. Voulez-vous encore du thé ? »",
      "Elle t'en ressert, très vite, et elle renverse la théière.",
    ],
    choices: [{ label: "Prendre congé", to: "K_kardan" }] },
  K_aieule_the: { act: "I", title: "Le thé", place: "kardan",
    text: [
      "Vous parlez encore un moment de choses sans importance : la récolte de grenades, les caravanes, la sécheresse qui gagne au nord. Maève a une manière de clore chaque sujet d'une phrase si juste qu'on n'a plus rien à ajouter. Quand tu te retrouves dehors, tu as l'impression d'avoir été reçu par une reine, et de ne rien savoir de plus.",
    ],
    choices: [{ back: "K_kardan" }] },

  // the chapel
  K_chapelle: { act: "I", title: "La chapelle blanche", place: "kardan",
    fx: { clue: "a_chapelle", ep: ["perso", 400] },
    fxEvery: { time: 1 },
    text: [
      "La chapelle est petite, blanchie à la chaux, si fraîche qu'on y frissonne. Pas d'image sainte, pas d'autel : une vasque de pierre verte où l'eau coule d'un tuyau de cuivre, et, sur le mur du fond, une grande plaque de bois peinte en noir, couverte de noms en lettres blanches.",
      "En haut de la plaque, en lettres dorées : *À CEUX QUI ONT GARDÉ L'EAU.*",
      "Il y a des dizaines de noms. Les plus anciens sont presque effacés. Les plus récents ne sont pas des noms : *un marchand de Vasque. Une femme au chapeau vert. Le muletier de la caravane.* Et le dernier, d'une peinture encore brillante : *L'homme du Nord, l'an de la grêle.*",
      "L'an de la grêle, à Kardan comme chez vous, c'était il y a sept ans.",
      { if: { present: "odon" }, text: "Odon s'est agenouillé devant la vasque. Il ne prie pas. Il lit les noms en remuant les lèvres, et quand il arrive au dernier, il ferme les yeux." },
      { if: { all: [{ met: "odon" }, { not: { present: "odon" } }, { not: { gone: "odon" } }] }, text: "Frère Odon est là, assis sur le banc du fond, comme s'il t'attendait. « Tiens, dit-il. Le sud a fini par nous mettre au même endroit. »" },
    ],
    choices: [
      { label: "Proposer à Frère Odon de marcher avec toi, cette fois", if: { met: "odon" }, hide: { any: [{ present: "odon" }, { not: { met: "odon" } }] }, fx: { join: "odon", conf: { odon: 5 } }, to: "K_chapelle_odon" },
      { back: "K_kardan" },
    ] },
  K_chapelle_odon: { act: "I", title: "Le moine et la plaque", place: "kardan",
    text: [
      "« J'accepte, dit Odon, à une condition : que vous me laissiez vous dire ce que je pense de cette plaque. » Il désigne les noms. « On n'écrit pas *à ceux qui ont gardé l'eau* pour des gens qui sont repartis contents. On écrit ça pour des morts. Ou pour des gens qu'on aimerait mieux croire morts. »",
    ],
    choices: [{ label: "Sortir avec lui", back: "K_kardan" }] },

  // the gate of the maze
  K_porte: { act: "I", title: "La porte du dédale", place: "kardan",
    fxEvery: { time: 1 },
    text: [
      "On monte à la porte par un escalier taillé dans le flanc de la colline, bordé d'offrandes : des pains ronds, des bouquets de menthe, des petites lampes, des jouets de bois. La porte elle-même est une dalle de pierre ocre, haute comme trois hommes, sans poignée, scellée par sept serrures de bronze vert-de-grisé. Au-dessus, gravé dans la roche, un seul mot : KARDAN.",
      "Deux miliciens en cuirasse de cuir montent la garde, la lance au pied. Ils te saluent poliment et ne te laissent pas approcher à moins de dix pas. « C'est la maison du Gardien, dit l'un. On ne le dérange pas. »",
      { if: { since: "kardan", min: 2 }, text: "Aujourd'hui, il y a quatre gardes au lieu de deux, et une corbeille de pain plus grande que les autres, couverte d'un linge blanc." },
    ],
    choices: [
      { label: "Attendre la relève des gardes et te glisser jusqu'à la porte", hide: { clue: "a_porte" }, test: { dom: "discretion", label: "Discrétion", help: [{ if: { night: true }, v: 15 }, { if: { item: "lanterne" }, v: 5 }] },
        win: { fx: { clue: "a_porte", ep: ["perso", 500] }, to: "K_porte_griffures" }, lose: { fx: { fac: { kardan: -5 } }, to: "K_porte_chasse" } },
      { back: "K_kardan" },
    ] },
  K_porte_griffures: { act: "I", title: "Les griffures", place: "kardan",
    text: [
      "Les gardes descendent, les autres ne sont pas encore montés. Tu as le temps de compter jusqu'à cinquante. Tu franchis les dix pas en courant, plié en deux, et tu te plaques contre la dalle.",
      "Elle est froide, et elle vibre, très légèrement, comme une peau de tambour. De près, tu vois qu'elle ne joint pas tout à fait le roc : il y a, en bas, une fente large d'un doigt. Et sur le bord de la dalle, du côté du roc, à hauteur de genou, des griffures. Des dizaines. Des ongles, pas des griffes. Certaines sont anciennes, polies par le temps. D'autres sont si fraîches que la poussière de pierre est encore blanche dedans.",
      "Elles viennent de l'intérieur.",
      "Tu entends les pas de la relève dans l'escalier. Tu repars en courant.",
    ],
    choices: [{ back: "K_kardan" }] },
  K_porte_chasse: { act: "I", title: "Les lances", place: "kardan",
    text: [
      "Tu n'as pas fait trois pas qu'une lance se met en travers de ton chemin. Le garde est jeune, et il a peur, ce qui le rend dangereux. « Pas plus loin, étranger. » Son camarade descend l'escalier en courant ; tu l'entends appeler Bastien. Tu lèves les mains, tu souris, tu t'excuses. On te raccompagne jusqu'en bas, poliment. On te regarde partir longtemps.",
    ],
    choices: [{ back: "K_kardan" }] },

  // taking stock
  K_point: { act: "I", title: "Sur un banc, sous le platane", place: "kardan",
    fx: { quest: "K_trace", ep: ["histoire", 3000] },
    text: [
      "Tu t'assois sur un banc de la place, à l'ombre, et tu poses les choses à plat, comme on étale des cartes.",
      "Aurèle est arrivé à Kardan il y a sept ans. On l'a fêté. Il a ri, chanté, appris une berceuse à un enfant. Une nuit, une seule, et puis il n'était plus là. Son nom a été arraché du registre ; son couteau, vendu au profit de la fontaine ; ses affaires, jetées dans un coffre avec celles des autres. Il ne figure sur la plaque de la chapelle que comme *l'homme du Nord*.",
      "Personne ici ne veut dire ce qui lui est arrivé. Et tout le monde regarde la colline.",
      { if: { clue: "a_porte" }, text: "Il y a la porte, aussi." },
      { if: { clue: "a_borne" }, text: "Et la borne. Il est venu quand même. Aurèle allait toujours voir." },
      "Tu ne sais pas s'il est mort. Tu sais où il est allé. Quelque part derrière cette porte.",
    ],
    choices: [{ label: "Te lever", to: "K_kardan" }] },

  // the night of the dry moon
  K_nuit: { act: "I", title: "La nuit de la Lune sèche", place: "kardan", urgent: 25,
    fx: { until: 23 },
    text: [
      "La fête de la Lune sèche a duré tout le soir. On a chanté pour l'eau, on a jeté des fleurs dans la fontaine, on a mangé debout. La lune s'est levée énorme et rousse au-dessus de la colline. Maintenant le village se tait, et tu montes à ta chambre.",
      "On frappe. C'est Hesna, avec un plateau. Une tasse fumante, un gâteau au miel. « Une tisane, dit-elle. Pour dormir. Après une fête, on dort mal, on a trop chaud. » Elle pose le plateau sur la table de nuit, et elle reste là, sur le seuil, ses mains serrées l'une contre l'autre.",
      "La vapeur monte de la tasse. Une odeur d'amande. Et derrière, à peine, une odeur de linge mouillé.",
      { if: { has: "oriel:odeur" }, text: "Tu la reconnais : Oriel te l'a fait sentir." },
      { if: { not: { has: "oriel:odeur" } }, text: "Tu trouves que la tisane sent bon. Tu as sommeil, de toute façon." },
      { if: { present: "odon" }, text: "Dans la chambre voisine, Odon ronfle déjà. Sur sa table de nuit, une tasse vide." },
      "« Bonne nuit, dit Hesna. Bonne nuit. » Elle ne s'en va pas.",
    ],
    choices: [
      { label: "Boire la tisane, la remercier, et dormir", timeout: true, to: "K_capture_bu" },
      { label: "Porter la tasse à tes lèvres sans boire, puis faire semblant de dormir", if: { has: "oriel:odeur" }, why: "Il faudrait savoir reconnaître ce qu'il y a dans cette tasse.", to: "K_capture_feinte" },
      { label: "Renvoyer Hesna, vider la tasse par la fenêtre, et barricader ta porte", if: { clues: "A", min: 3 }, why: "Rien ne te donne assez de raisons de te méfier d'Hesna ce soir.", to: "K_capture_assaut" },
    ] },
  K_capture_bu: { act: "I", title: "Le sommeil", place: "kardan",
    fx: { flag: "capture:bu", drop: ["dague", "dague_jet", "arc_court", "baton", "epee_courte", "epee_longue", "hache", "gambison", "cuir", "broigne", "corde", "lanterne", "torche"], gold: -9999, food: -9999 },
    text: [
      "La tisane est douce, un peu épaisse. Hesna attend que tu aies fini la tasse, puis elle la reprend, et elle te caresse les cheveux, une fois, comme à un enfant. Tu trouves ça étrange. Tu n'as pas le temps d'y penser davantage.",
      "Tu rêves qu'on te porte. Qu'on te lave les pieds. Que des gens chantent tout bas, en marchant, la même phrase encore et encore. Tu rêves d'une porte qui s'ouvre avec un bruit de meule, d'un souffle froid qui sent la pierre, de mains qui te lâchent.",
      "Tu rêves que tu tombes.",
      { if: { has: "couteau:aurele" }, text: "Dans ton rêve, quelqu'un pose sur ta poitrine un couteau à manche de corne. *Rends-le-lui*, dit une voix de femme. *C'est à lui.*" },
    ],
    choices: [{ label: "Te réveiller", to: "D_fosse" }] },
  K_capture_feinte: { act: "I", title: "Les visages dans la nuit", place: "kardan",
    fx: { flag: ["capture:feinte", "capture:visages"], drop: ["gambison", "cuir", "broigne", "corde"], gold: -9999, food: -9999, ep: ["seance", 1500] },
    text: [
      "Tu bois sans boire, tu bâilles, tu remercies. Hesna reprend la tasse vide — tu l'as vidée dans ta manche — et elle reste longtemps à te regarder dormir. Puis elle souffle la chandelle et elle pleure, debout dans le noir, sans bruit.",
      "Ils viennent une heure plus tard. Six, huit, tu ne peux pas compter les yeux fermés. Ils te soulèvent avec une douceur qui te glace. Tu reconnais les voix. Garance, qui porte tes jambes et dit *il est lourd, celui-là*. Bastien, qui commande. Oriel, qui ne dit rien mais dont tu sens l'odeur d'amande. Hesna, qui suit en tenant ta main.",
      "On te porte dans la rue, puis dans l'escalier de la colline. On chante, très bas. La porte s'ouvre avec un bruit de meule. Quelqu'un glisse ta lame et ta lanterne dans ta ceinture, en chuchotant : *qu'il ait au moins de la lumière.* Puis on te pose au bord de quelque chose, et on te pousse.",
      "Tu tombes, les yeux grands ouverts, dans un noir qui sent la pierre.",
    ],
    choices: [{ label: "Toucher le fond", to: "D_fosse" }] },
  K_capture_assaut: { act: "I", title: "La porte barricadée", place: "kardan",
    combat: { title: "Les gens de Kardan", enemies: [{ id: "villageois", n: 3 }], terrain: "bati",
      win: { fx: { ep: ["seance", 1500] }, to: "K_capture_nombre" }, lose: { to: "K_capture_nombre" } },
    text: [
      "Tu remercies Hesna, tu la pousses doucement dehors, tu verses la tasse par la fenêtre et tu traînes le coffre contre la porte. Puis tu attends, assis sur le lit, ton arme sur les genoux.",
      "Ils viennent une heure plus tard. On gratte, on pousse, on chuchote. Puis on pousse plus fort. Le coffre recule d'un pouce, d'un autre. Une voix d'homme — Bastien — dit : *il ne dort pas.* Et une voix de femme, Hesna, qui gémit : *je vous l'avais dit, je vous l'avais dit.*",
      "La porte cède. Ils entrent à trois, avec des gourdins et une couverture pour te la jeter sur la tête. Ils n'ont pas l'air de vouloir te tuer. Ils ont l'air d'avoir peur.",
    ] },
  K_capture_nombre: { act: "I", title: "Le nombre", place: "kardan",
    fx: { flag: ["capture:combat", "capture:visages"], drop: ["gambison", "cuir", "broigne", "corde", "lanterne", "torche"], gold: -9999, food: -9999 },
    text: [
      "Tu en jettes un dans l'escalier, tu en fais saigner un autre. Il en vient d'autres. Il en vient toujours d'autres : c'est tout Kardan qui monte l'escalier du Puits-Vert, en chemise de nuit, avec des bâtons, des louches, des lanternes. À la fin, ils sont dix sur toi, et la couverture tombe, et quelqu'un te frappe derrière l'oreille, pas trop fort, juste assez.",
      "Tu ne perds pas tout à fait conscience. Tu sens qu'on te porte, qu'on chante, qu'une porte s'ouvre avec un bruit de meule. Quelqu'un te remet ton arme dans la main et te referme les doigts dessus, en disant d'une voix brisée : *il s'est bien battu. Qu'il la garde.*",
      "Puis on te pousse, et tu tombes.",
    ],
    choices: [{ label: "Toucher le fond", to: "D_fosse" }] },

  // banter
  B_odon_feu: { title: "Au coin du feu, avec Odon",
    text: [
      "Odon tisonne le feu avec son bâton ferré et regarde les étincelles monter, comme s'il les comptait. « Vous savez pourquoi je marche ? demande-t-il sans attendre de réponse. J'avais un village, autrefois, et une cause. Un jour on m'a dit que la cause exigeait qu'on brûle le village voisin, qui avait mal prié. J'ai porté la torche. » Il se tait. « Depuis je marche, et je partage mon pain. Ça ne rachète rien. Mais ça occupe les mains. »",
      "Il te regarde à travers le feu. « Et vous ? Qu'est-ce que vous ferez, quand vous l'aurez trouvé ? »",
    ],
    choices: [
      { label: "« Je le ramènerai à la maison. »", fx: { conf: { odon: 5 }, flag: "odon:maison" }, to: "@ret" },
      { label: "« Je lui demanderai pardon. »", if: { has: "passe:culpabilite" }, why: "Tu n'as pas de pardon à demander.", fx: { conf: { odon: 10 }, flag: "odon:pardon" }, to: "@ret" },
      { label: "« Je lui ferai rendre ce qu'il a pris. »", fx: { conf: { odon: -5 }, flag: "odon:compte" }, to: "@ret" },
    ] },
  B_odon_kardan: { act: "I", title: "Odon, sous le platane",
    text: [
      "Odon te rejoint sur la place, les mains dans les manches. « J'ai mangé trois fois aujourd'hui, dit-il, et on m'a offert un manteau, des sandales neuves et une fille à marier. J'ai tout refusé, sauf les sandales. » Il baisse la voix. « Je n'ai jamais vu un village aussi généreux. Et je n'ai jamais vu de gens aussi tristes d'être généreux. On dirait qu'ils paient une dette. Ou qu'ils en contractent une. »",
    ],
    choices: [
      { label: "Lui demander de garder les yeux ouverts", fx: { conf: { odon: 5 }, flag: "odon:veille" }, to: "@ret" },
      { label: "Lui dire qu'il se fait des idées", to: "@ret" },
    ] },
};
