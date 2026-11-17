// L'Île Folle-Aiguille · side story « Les proscrits de la Sylve », second part: the two days the doctor stays behind
// the waterfall while the girl's fever breaks. Soazig, who asks what a roof is (xs:soazig_maison); old Kerjean; the bow
// lesson (xs:arc); the five graves and the man the lizard took on the Table; Guénolé the clerk, who held the baron's
// trial in absentia on strips of bark (xs:proces_ecorce) and kept in a tin box the sealed instructions of the
// Saint-Fiacre (item instructions_fiacre), which say what the baron meant for those who would find the book; the night
// hunt, from which one sees the mutineers' camp (xs:camp_vu); and Jeanne Brasdefer alone by the water (xs:jeanne_dit).
// The proofs, laid side by side, may carry the bargain without a test.
var JOURS = [{ seen: "XS_c_soazig" }, { seen: "XS_c_kerjean" }, { seen: "XS_c_arc" }, { seen: "XS_c_tombes" }, { seen: "XS_c_guenole" }, { seen: "XS_c_chasse" }];
module.exports = {
  passages: {
    XS_camp: { act: "IV", title: "Derrière la cascade", place: "sylve", hub: true, noLead: true, backName: "la grotte", ambiance: "nature",
      text: [
        { first: true, text: "Jeanne Brasdefer décide pour elle. « Tu restes, dit-elle, jusqu'à ce que la fièvre soit tombée pour de bon. Ta capitaine attendra. Elle a l'air d'une femme qui sait attendre. » On n'oppose rien à ce ton-là. Victorine envoie, par un garçon des proscrits qui court plus vite qu'un chien, un mot à la chapelle, trois lignes, sans dire où elle est." },
        { first: true, text: "La grotte, le jour, change de visage. Le rideau d'eau de la cascade devient une vitre verte, mouvante, où la lumière entre en lames ; les plumes noires aux parois prennent des reflets bleus, de gorge de pigeon. On y vit comme dans une cale de navire : chaque chose pendue à sa cheville, chaque geste mesuré, chaque parole économisée. Douze ans de cette vie ont fait des proscrits des gens qui ne gaspillent rien, pas même la colère." },
        { if: { has: "xs:soin" }, text: "Soazig dort, la jambe à l'air, bourrée de charpie, la fièvre tombée. Elle se réveille de temps en temps, pour réclamer à manger, ce qui est le meilleur signe qu'on connaisse." },
        { if: { has: "xs:soin_rate" }, text: "Soazig dort, la cuisse bandée jusqu'au moignon, blanche comme sa paillasse. La fièvre monte et descend comme une marée. Victorine se relève toutes les deux heures pour tâter son front." },
      ],
      choices: [
        { label: "S'asseoir près de Soazig", to: "XS_c_soazig", hide: { seen: "XS_c_soazig" } },
        { label: "Écouter le vieux Kerjean", to: "XS_c_kerjean", hide: { seen: "XS_c_kerjean" } },
        { label: "Demander à tirer à l'arc", to: "XS_c_arc", hide: { seen: "XS_c_arc" } },
        { label: "Suivre la femme qui porte des fleurs hors de la grotte", to: "XS_c_tombes", hide: { seen: "XS_c_tombes" } },
        { label: "Parler à l'homme à la plume fine, qui écrit sur de l'écorce", to: "XS_c_guenole", hide: { seen: "XS_c_guenole" } },
        { label: "Partir avec les chasseurs, à la nuit", to: "XS_c_chasse", hide: { seen: "XS_c_chasse" }, if: { count: JOURS, min: 2 }, why: "On ne l'emmène pas encore. On ne la connaît pas assez." },
        { label: "Aller trouver Jeanne Brasdefer, seule, au bord de l'eau", to: "XS_c_jeanne", hide: { seen: "XS_c_jeanne" }, if: { count: JOURS, min: 3 }, why: "Jeanne Brasdefer l'évite. Elle a encore une dette, et elle n'aime pas ça." },
        { label: "Regarder le grand muet nourrir un chiot jaune, au bout de ses doigts", to: "WH_chiot", hide: { seen: "WH_chiot" } },
        { label: "Regarder la femme à la lanière rouge, assise seule au bord du feu", to: "WV_laniere", hide: { seen: "WV_laniere" } },
        { label: "Recoudre le garçon que les chasseurs rapportent, la cuisse ouverte", to: "UB_sanglier", hide: { seen: "UB_sanglier" }, if: { count: JOURS, min: 1 }, why: "Les chasseurs ne sont pas encore partis." },
        { label: "Dire à Jeanne Brasdefer que l'enfant est hors de danger", to: "XS_marche", big: true, if: { count: JOURS, min: 2 }, why: "La fièvre n'est pas encore tombée pour de bon." },
      ] },

    XS_c_soazig: { act: "IV", title: "Soazig", place: "sylve", ambiance: "nature",
      text: [
        "Soazig a douze ans, elle l'a calculé elle-même, avec des encoches sur un bâton. Elle est née dans cette grotte, la première année. Elle a les cheveux de sa mère, noirs, coupés au couteau, et les yeux de quelqu'un d'autre, gris, que personne ne commente.",
        "Elle ne dort plus. Elle pose des questions. Elle les pose dans l'ordre, comme si elle les avait préparées depuis des années pour le jour où quelqu'un viendrait de la mer.",
        "« Une maison, c'est comment ? Le toit, il tient avec quoi ? Pourquoi il ne tombe pas ? Ça fait quoi, la pluie, dessus ? On l'entend ? Et les gens qui habitent à côté, on les entend aussi ? Et ils ne sont pas de la même famille ? Et on ne les connaît pas ? Mais alors pourquoi ils habitent à côté ? »",
        "Victorine répond comme elle peut. Elle n'avait jamais remarqué combien une ville est une chose absurde, avant de l'expliquer à une enfant qui a passé douze ans dans une grotte avec huit personnes.",
        { if: { has: "xs:soin_rate" }, text: "Soazig ne parle pas de sa jambe. Elle regarde la couverture, à l'endroit où la couverture devient plate, puis elle regarde Victorine, et elle demande si, dans les villes, il y a des escaliers. Victorine dit que oui. Soazig dit : « Ah. » Et elle passe à la question suivante." },
      ],
      choices: [
        { label: "Lui dessiner une maison, avec le charbon du feu", fx: { flag: "xs:soazig_maison" }, to: "XS_c_maison" },
        { label: "La laisser se reposer", back: "XS_camp" },
      ] },
    XS_c_maison: { act: "IV", title: "La maison", place: "sylve", ambiance: "nature",
      text: [
        "Victorine prend un tison éteint et dessine, sur la paroi lisse, près de la paillasse, entre deux plumes noires, une maison. La sienne, à Varnèse, la maison de la rue des Récollets, avec sa porte verte, ses deux fenêtres, sa cheminée, et le toit d'ardoise en pente, et la gouttière, et la pluie qui tombe dessus, en petits traits obliques.",
        "Soazig la regarde longtemps.",
        "« La porte, dit-elle. Elle ferme de l'intérieur, ou de l'extérieur ? »",
        "Victorine dit : des deux. Soazig réfléchit. Puis elle hoche la tête, satisfaite, comme on approuve un plan de bataille.",
        "Le lendemain, il y a, sous la maison, une petite silhouette dessinée par une main maladroite, devant la porte, avec un bâton. Et au-dessus, sur le toit, une plume noire, plantée dans une fente, comme un drapeau.",
      ],
      choices: [{ label: "Revenir près du feu", back: "XS_camp" }] },

    XS_c_kerjean: { act: "IV", title: "Le vieux Kerjean", place: "sylve", ambiance: "nature",
      text: [
        "Kerjean a soixante-dix ans, trois dents, et un rire de crécelle. Il passe ses journées assis à l'entrée de la grotte, derrière le rideau d'eau, à tresser de la corde avec des fibres de palmier, et il parle à qui veut l'entendre, et à qui ne veut pas.",
        "« J'étais le cuisinier du Saint-Fiacre, dit-il. On m'a laissé à terre avec mes casseroles. C'est la seule fois de ma vie qu'un capitaine m'a jugé trop précieux pour l'emmener. » Il rit. « Douze ans. J'ai fait cuire du lézard, du perroquet, de la racine, du poisson qui piquait, du poisson qui endormait, et une fois, un serpent, qui a mis trois jours à mourir dans la marmite, par politesse. Personne ne m'a jamais dit que c'était bon. Ils ont tous mangé. »",
        "Il tresse.",
        "« Jeanne, c'est une forgeronne. De Morlenc, la rue des Fondeurs. Son homme devait de l'argent à Clavières, comme tout le monde dans cette rue. Clavières lui a proposé d'effacer la dette, si elle et son homme partaient pour les îles, deux ans, à chercher quelque chose. On ne savait pas quoi. On a su après. » Il crache dans l'eau. « Son homme est le deuxième qu'on a enterré. La fièvre. Soazig est née trois mois après. Voilà. Tu sais tout. Le reste, c'est de la cuisine. »",
      ],
      choices: [{ label: "Revenir près du feu", back: "XS_camp" }] },

    XS_c_arc: { act: "IV", title: "L'arc", place: "sylve", ambiance: "nature",
      text: [
        "Les proscrits tirent dans la clairière au pied de la cascade, sur une cible de fibres tressées pendue à une branche. Ils tirent bien, comme tirent les gens dont le dîner dépend de chaque flèche. Quand Victorine demande à essayer, ils se regardent, et rient, pas méchamment, et un grand garçon roux, qui s'appelle Tanguy, lui tend son arc.",
        "C'est un arc long, en bois d'if de l'île, plus haut qu'elle, qu'on bande avec le dos et non avec le bras. Tanguy lui place les doigts, le coude, l'épaule. « On ne vise pas, dit-il. On regarde. La flèche va où on regarde, si on la laisse faire. »",
      ],
      choices: [{ label: "Bander, regarder, lâcher", test: { dom: "combat", diff: 1, label: "L'arc long" }, win: { fx: { flag: "xs:arc", regard: { brasdefer: "cordial" } }, to: "XS_c_arc_ok" }, lose: { to: "XS_c_arc_rate" } }] },
    XS_c_arc_ok: { act: "IV", title: "L'arc", place: "sylve", ambiance: "nature",
      text: [
        "La corde lui fouette l'avant-bras. La flèche part, monte, redescend, et se plante dans la cible, au bord, de travers, comme une ivrogne qui s'appuie à un mur. Mais dedans.",
        "Un silence. Puis Tanguy siffle entre ses dents. Les autres applaudissent, en frappant du plat de la main sur leurs cuisses, à la manière des proscrits.",
        "Jeanne Brasdefer, qui regardait de l'entrée de la grotte, les bras croisés, décroise les bras. Elle ne dit rien. Le soir, Tanguy apporte à Victorine un brassard de cuir, pour l'avant-bras, cousu dans la nuit. « Pour la prochaine fois », dit-il.",
      ],
      choices: [{ label: "Revenir près du feu", back: "XS_camp" }] },
    XS_c_arc_rate: { act: "IV", title: "L'arc", place: "sylve", ambiance: "nature",
      text: [
        "La corde lui fouette l'avant-bras, si fort qu'elle lâche tout, l'arc, la flèche, et un juron de carabin qui fait rire les proscrits pendant un quart d'heure. La flèche a fait trois pas en tournoyant, comme une feuille morte, et s'est couchée dans l'herbe.",
        "Tanguy ramasse l'arc, le lui rend, et lui montre son propre avant-bras, couvert de cicatrices blanches, en lignes, comme une page réglée. « Douze ans, dit-il. La première fois, j'ai touché le cuisinier. »",
        "Kerjean, de l'entrée, crie que c'est vrai, et qu'il a encore la flèche.",
      ],
      choices: [{ label: "Revenir près du feu, en se frottant le bras", back: "XS_camp" }] },

    XS_c_tombes: { act: "IV", title: "Les cinq", place: "sylve", ambiance: "nature",
      text: [
        "Elle s'appelle Perrine. Elle sort tous les matins avec des fleurs, et Victorine la suit, à quelque distance, par un sentier qui longe le torrent.",
        "Les tombes sont dans une clairière, au-dessus de la cascade, là où le soleil arrive tôt. Cinq tertres, bordés de galets du torrent, avec une croix de bois sur chacun, et sur chaque croix, un nom gravé au couteau. Corentin Brasdefer. Yvonne Salaün. Le petit Gwénaël, deux ans. Pierre-Marie Le Dû. Mathieu Tanguy.",
        "Il y a une sixième croix, un peu à l'écart, sans tertre. Pas de corps dessous. Un nom : Loïc Morvan.",
        "« Loïc, c'est celui de la Table, dit Perrine en déposant ses fleurs, une poignée sur chaque tombe, et une sur la croix seule. Il était monté chercher des œufs, la deuxième année, quand on avait faim. On l'a entendu crier, d'en bas. Un lézard. Gros comme un veau. On n'est jamais allés chercher ce qui restait. On n'avait pas le courage. On a fait la croix à la place. »",
        "Elle se relève, et époussette sa jupe de toile à voile.",
        "« Mathieu, c'était mon homme. Gwénaël, c'était mon fils. Le reste, je ne dis pas, ça fait trop d'un coup pour quelqu'un qui vient d'arriver. »",
      ],
      choices: [{ label: "Laisser Perrine seule, et redescendre", back: "XS_camp" }] },

    XS_c_guenole: { act: "IV", title: "Guénolé", place: "sylve", ambiance: "nature",
      text: [
        "C'est lui qui a ajouté, au dos de la lanière, les trois mots d'une écriture fine. Un petit homme chauve, aux lunettes rafistolées avec du fil de palmier, qui écrit sur des bandes d'écorce avec un calame taillé dans un roseau et une encre de suie et de sève. Il en a des piles, liées en fagots, rangées au fond de la grotte, au sec, sur une étagère de pierre.",
        "« J'étais le commis du Saint-Fiacre, dit-il. Le subrécargue, si vous préférez les grands mots. Le baron m'avait engagé pour tenir les comptes de l'expédition. » Il sourit, d'un sourire de bibliothécaire. « Alors je les tiens. Douze ans de comptes. Tout ce qu'on a mangé, tout ce qu'on a perdu, tous ceux qui sont morts, et de quoi. Et le reste. »",
        "« Le reste ? »",
        "Il hésite. Puis il va à l'étagère et en revient avec un fagot plus épais que les autres, lié d'une ficelle noire.",
        "« Le procès, dit-il. On l'a fait, la troisième année. Un vrai procès. Avec un juge, un avocat pour lui, un procureur, des témoins, tout. Kerjean faisait l'avocat. Il a très bien plaidé. Il a obtenu les circonstances atténuantes. On l'a condamné quand même. »",
      ],
      choices: [
        { label: "Lire le procès", fx: { flag: "xs:proces_ecorce" }, to: "XS_c_proces" },
        { label: "Lui demander ce qu'il garde dans la boîte de fer, sous l'étagère", to: "XS_c_boite" },
      ] },
    XS_c_proces: { act: "IV", title: "Le procès d'écorce", place: "sylve", ambiance: "nature",
      text: [
        "Victorine lit, assise sur une pierre, une bande après l'autre, pendant que Guénolé lui passe la suivante.",
        "C'est un vrai procès. C'est ce qui le rend insupportable. Les formes y sont, les « attendu que » et les « considérant », la liste des témoins, leurs dépositions, prises sous serment devant une croix de bois. Kerjean a plaidé que le baron ignorait la tempête. Le procureur, qui était Jeanne, a répondu qu'il connaissait les boussoles. Le juge, qui était Guénolé, a pesé.",
        "Et au milieu, une pièce que Victorine relit deux fois : la liste de ceux qui, avec le baron, avaient mis de l'argent dans l'expédition du Saint-Fiacre. Six noms. Des noms de Morlenc. Des noms d'armateurs, de banquiers, de gens qui siègent à l'échevinage. Guénolé les a tous recopiés de mémoire, avec les sommes, à la livre près, parce que c'était son métier.",
        { if: { any: [{ has: "victorine:livre_compris" }, { has: "victorine:verite_baron" }] }, text: "Ce sont les mêmes. Victorine en est sûre avant d'avoir fini de lire : les six noms, plus celui du baron, ce sont les sept familles du livre de bord de la Maraude. Trente ans plus tard, les mêmes maisons, les fils après les pères, remettent de l'argent pour retrouver la preuve de ce que les pères avaient payé." },
        "La sentence tient en une ligne, sur la dernière bande : « Coupable. À mort. Quand on pourra. »",
      ],
      choices: [
        { label: "Lui demander ce qu'il garde dans la boîte de fer", to: "XS_c_boite", hide: { seen: "XS_c_boite" } },
        { label: "Rendre le fagot, et revenir près du feu", back: "XS_camp" },
      ] },
    XS_c_boite: { act: "IV", title: "La boîte de fer", place: "sylve", ambiance: "nature",
      text: [
        "Guénolé la regarde, longtemps, à travers ses lunettes rafistolées. Puis il se penche, tire la boîte de sous l'étagère, et l'ouvre.",
        "Dedans, enveloppé dans de la toile cirée, un pli. Le cachet de cire rouge, aux armes des Clavières, une tour et trois merlettes, a été rompu, puis recollé avec de la gomme.",
        "« Les instructions, dit-il. Le capitaine Bréhat devait les ouvrir en vue de l'île. Il a été pris de panique dans la tempête, il a voulu les jeter à la mer, et je les lui ai prises. Je les ai lues. Je ne les ai montrées à personne ici. Pas même à Jeanne. » Il a l'air très fatigué. « Elle aurait été tuer quelqu'un. Il n'y avait personne à tuer, ici. Ç'aurait été pire. »",
        "Il les lui tend.",
      ],
      choices: [
        { label: "Les lire", fx: { item: "instructions_fiacre" }, to: "XS_c_instructions" },
        { label: "Refuser de les lire", to: "XS_c_refus" },
      ] },
    XS_c_instructions: { act: "IV", title: "Les instructions", place: "sylve", ambiance: "nature",
      text: [
        "L'écriture est belle, déliée, d'une main habituée aux lettres d'affaires. La signature tient toute la largeur de la page.",
        "« Si le livre est trouvé, le capitaine le prendra en sa garde personnelle et ne le confiera à aucun passager. Il veillera à ce que les passagers employés à la recherche, qui auraient pu en connaître le contenu, ne regagnent pas le Ponant. Le capitaine choisira les moyens. On lui laisse, à cet effet, toute latitude. Le prix convenu sera doublé. »",
        "Victorine relit la phrase du milieu. Puis encore.",
        "Le baron a dit, à la chapelle, que Bréhat avait des ordres de ne laisser personne. Il a dit vrai, mot pour mot, et il a menti par la phrase entière. Le Saint-Fiacre n'a pas abandonné quatorze personnes dans une tempête, par lâcheté. Il les a abandonnées sur ordre, et la tempête lui a fourni l'excuse.",
        { if: { has: "lannoz:brehat" }, text: "Elle pense à une page délavée, dans une enveloppe, entre deux pages d'un registre de noyés, chez un recteur de Lannoz, au milieu de ses ruches. Quatorze à terre. Ordre exécuté. Elle avait la réponse. Elle tient maintenant la question." },
        "Guénolé reprend ses lunettes, les essuie, les remet. « Vous comprenez pourquoi je ne l'ai pas montré à Jeanne, dit-il. Il faut que quelqu'un d'autre le porte. Quelqu'un qui saura où. »",
      ],
      choices: [{ label: "Glisser le pli dans sa trousse", back: "XS_camp" }] },
    XS_c_refus: { act: "IV", title: "La boîte de fer", place: "sylve", ambiance: "nature",
      text: [
        "Victorine referme la main de Guénolé sur le pli.",
        "« Gardez-les, dit-elle. Si c'est ce que je crois, il ne faut pas qu'elles soient dans la chapelle. Le baron y dort. »",
        "Il hoche la tête, et range la boîte, et repousse l'étagère du pied. « Vous êtes prudente, dit-il. C'est bien. C'est rare. Je les garde. Si vous en avez besoin, vous savez où. » Il ajoute, plus bas, en reprenant son calame : « Si je suis encore vivant. »",
      ],
      choices: [{ label: "Revenir près du feu", back: "XS_camp" }] },

    XS_c_chasse: { act: "IV", title: "La chasse", place: "sylve", ambiance: "nuit",
      text: [
        "À la nuit, Tanguy, Perrine et deux autres prennent leurs arcs. Victorine les suit, en tâchant de mettre ses pieds où ils mettent les leurs, ce qui, dans le noir de la Sylve, revient à les mettre au hasard.",
        "Ils chassent le cochon sauvage. Ils ne parlent pas. Ils se font des signes, des claquements de langue, des cris d'oiseau. Ils avancent dans le noir complet, sous les arbres, avec une sûreté de gens qui ont appris la forêt arbre par arbre, en douze ans, comme on apprend une maison où l'on est né.",
        "Au bout d'une heure, Tanguy s'arrête, lève la main, et montre quelque chose, en bas, à travers les feuilles.",
      ],
      choices: [{ label: "Regarder", test: { dom: "discretion", diff: 0, label: "Sans faire craquer une branche" }, win: { fx: { flag: "xs:camp_vu" }, to: "XS_c_mutins" }, lose: { to: "XS_c_chasse_rate" } }] },
    XS_c_mutins: { act: "IV", title: "Le camp de la plage", place: "sylve", ambiance: "nuit",
      text: [
        "La lisière, et en bas, la plage de l'Anse-Morte, et sur la plage, le camp des mutins. Des feux, trois. Une tente faite d'une voile. Des hommes autour, qui boivent, qui jouent aux dés, qui dorment. Des fusils en faisceaux, sans garde. Une sentinelle, une seule, assise sur un tonneau, la tête sur la poitrine.",
        "Victorine compte. Elle compte comme on compte des pouls, en remuant les lèvres. Vingt-deux, autour des feux. Quatre dans la tente, à en juger par les voix. Deux sur la chaloupe tirée sur le sable, qui se disputent à mi-voix. Les fusils sont à gauche. La poudre, sous une bâche, à droite, loin des feux, ce qui prouve qu'au moins un homme, là-dessous, garde la tête froide.",
        "« Tous les soirs pareil, chuchote Tanguy. La sentinelle dort à la deuxième heure. On pourrait en tuer six avant qu'ils trouvent leurs fusils. » Il sourit dans le noir. « Jeanne ne veut pas. Pas eux. Elle dit que ce sont des pauvres, comme nous. Elle n'en veut qu'à un seul. »",
        "Ils remontent sans bruit. Victorine a dans la tête un plan de la plage, précis comme une planche d'anatomie.",
      ],
      choices: [{ label: "Rentrer à la grotte", back: "XS_camp" }] },
    XS_c_chasse_rate: { act: "IV", title: "La branche", place: "sylve", ambiance: "nuit",
      text: [
        "Une branche craque sous son pied. Un bruit sec, énorme, dans le silence, comme un coup de pistolet.",
        "En bas, quelqu'un crie. Une lanterne se lève. Les proscrits se sont déjà fondus dans le noir ; Tanguy la tire par le bras, et ils courent, plus bas, plus loin, à travers les fougères, pendant que derrière, deux coups de fusil partent au hasard, dans les feuilles, très au-dessus de leurs têtes.",
        "Ils rentrent sans cochon. Personne ne lui fait de reproche. Perrine lui donne, en arrivant, un morceau de poisson fumé, comme on console un enfant.",
      ],
      choices: [{ label: "Rentrer à la grotte", back: "XS_camp" }] },

    XS_c_jeanne: { act: "IV", title: "Jeanne", place: "sylve", ambiance: "nuit",
      text: [
        "Jeanne Brasdefer est assise sur une pierre plate, au pied de la cascade, les pieds dans l'eau, et regarde la lune à travers les embruns. Victorine s'assied à côté d'elle. Longtemps, ni l'une ni l'autre ne parle.",
        "« J'étais forgeronne, dit enfin Jeanne Brasdefer. Mon père, mon grand-père. Rue des Fondeurs. Une femme, à la forge, ça faisait rire. Je les ai fait taire à coups de marteau, sur les fers, pas sur les têtes, enfin presque. » Elle remue les pieds dans l'eau. « Je ne sais plus faire. Douze ans sans enclume. J'ai oublié le son. Je l'entends en rêve, et quand je me réveille, il s'en va. »",
        "Un temps.",
        "« Je ne veux pas le tuer pour moi, dit-elle. Pour Corentin. Pour Gwénaël, le petit de Perrine. Pour Loïc, là-haut, dont il n'y a même pas d'os. Chaque soir, une plume, pour qu'on n'oublie pas qu'on a juré. » Elle regarde Victorine. « Tu vas me proposer autre chose. Je le vois. Tu as la tête de quelqu'un qui va me proposer autre chose. Vas-y. Je t'écouterai. Je n'ai écouté personne depuis douze ans. Ça me changera. »",
        { if: { item: "instructions_fiacre" }, text: "Victorine sent, dans sa trousse, contre sa hanche, le pli au cachet recollé. Elle pense à Guénolé. Elle ne dit rien, cette nuit-là." },
      ],
      choices: [{ label: "Rester assise près d'elle, jusqu'à ce que la lune passe", fx: { flag: "xs:jeanne_dit", regard: { brasdefer: "cordial" } }, back: "XS_camp" }] },
  },
  extras: {
    items: {
      instructions_fiacre: { name: "Les instructions du Saint-Fiacre", kind: "document", form: "lettre", hand: "soignee", keep: true, price: 0,
        desc: "Un pli au cachet de cire rouge, aux armes des Clavières, rompu puis recollé à la gomme.",
        text: "Instructions au capitaine Bréhat, commandant le Saint-Fiacre, à ouvrir en vue de l'île.\n\n« Si le livre est trouvé, le capitaine le prendra en sa garde personnelle et ne le confiera à aucun passager. Il veillera à ce que les passagers employés à la recherche, qui auraient pu en connaître le contenu, ne regagnent pas le Ponant. Le capitaine choisira les moyens. On lui laisse, à cet effet, toute latitude. Le prix convenu sera doublé. »\n\nAymeric de Clavières" },
    },
  },
};
