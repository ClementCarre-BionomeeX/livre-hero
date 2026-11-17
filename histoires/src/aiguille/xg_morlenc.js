// L'Île Folle-Aiguille · act II, more of Morlenc during the ten days of fitting-out. The child: the fair of the
// Quai-aux-Harengs with Petit-Jules (the fish-woman, the fortune-teller, the wrestler: morlenc:diseuse, morlenc:lutte),
// a hanging at the Croix-des-Marées (morlenc:pendu or morlenc:pendu_detourne), a press-gang in the Basse-Fosse
// (morlenc:presse_averti or morlenc:presse_cache). The doctor: the amphitheatre of the Faculty where she studied in a
// wig (morlenc:faculte_parle or morlenc:faculte_tue), Hector's grave (victorine:alliance), a night birth in the
// Basse-Fosse (morlenc:jumeaux, morlenc:jumeau_mort).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child: the fair
    XG_foire: { act: "II", title: "La foire aux harengs", place: "champ_foire", ambiance: "ville",
      text: [
        "Le dimanche, Petit-Jules t'entraîne à la foire du Quai-aux-Harengs, qui dure trois semaines tous les automnes et sent la friture, la bière, le crottin et la poudre à canon, pour les feux du soir. Il a quatre sous en poche et l'intention de les multiplier.",
        "La foire occupe tout le quai, des greniers à sel jusqu'aux pontons. Des baraques de planches peintes, des tréteaux, des roulottes. Un ours enchaîné qui danse sans conviction au son d'un fifre. Un avaleur de sabres qui avale aussi, en supplément, les pièces qu'on lui lance. Un montreur de puces savantes, dont aucune n'est visible, et qui fait pourtant salle comble. Un charlatan qui vend l'élixir du Grand Mogol, souverain contre la goutte, les vers, la mélancolie et le mal de mer, et qui en boit lui-même entre deux boniments pour prouver qu'il n'est pas un poison, ce qui prouve surtout qu'il est de l'eau-de-vie.",
        "Au bout du quai, devant une grande tente rayée, un aboyeur en habit rouge crie qu'on peut voir, pour un sou, la Femme-Poisson des mers du Sud, capturée vivante par un capitaine hollandais, et qui chante.",
      ],
      choices: [
        { label: "Payer un sou pour la Femme-Poisson", to: "XG_poisson", hide: { seen: "XG_poisson" } },
        { label: "Entrer chez la diseuse, sous sa roulotte aux étoiles", to: "XG_diseuse", hide: { seen: "XG_diseuse" } },
        { label: "Suivre Petit-Jules à la baraque du lutteur", to: "XG_lutteur", hide: { seen: "XG_lutteur" } },
        { label: "Rentrer à bord avant la nuit", back: "A2m_jours" },
      ] },
    XG_poisson: { act: "II", title: "La Femme-Poisson", place: "champ_foire", ambiance: "ville",
      text: [
        "Sous la tente, dans une pénombre qui sent le poisson pourri et l'huile de lampe, une grande cuve de bois cerclée de fer. Dans la cuve, de l'eau verdâtre. Et dans l'eau, quelque chose qui bouge.",
        "L'aboyeur tire un rideau de lustrine. Une créature se hisse au bord de la cuve, sur ses nageoires, et vous regarde. Elle a une perruque blonde, frisée au fer, posée de travers sur un crâne gris et lisse. Un collier de perles de verre autour d'un cou qui n'en est pas un. Un corsage de satin rose cousu sur un corps luisant, fuselé, tacheté de brun. De grands yeux noirs, humides, d'une tristesse de chien.",
        "C'est un phoque. Un phoque gris, déguisé en femme.",
        "L'aboyeur donne un coup de baguette sur la cuve. Le phoque ouvre la gueule et pousse un cri long, rauque, désolé, que l'aboyeur appelle le chant des sirènes du Sud. Les badauds applaudissent. Une dame s'évanouit, par principe. Petit-Jules rit à s'en étrangler.",
        "Toi, tu regardes les yeux du phoque, sous la perruque. Ils te regardent aussi. Ils ont l'air de dire : je sais. Je sais exactement de quoi j'ai l'air. Et toi, de quoi tu as l'air, à me regarder ?",
      ],
      choices: [{ label: "Sortir de la tente", back: "XG_foire" }] },
    XG_diseuse: { act: "II", title: "La diseuse", place: "champ_foire", ambiance: "nuit",
      text: [
        "La roulotte est peinte en bleu de nuit, semée d'étoiles d'or écaillées. On y entre par trois marches. Dedans, il fait chaud et sombre, et ça sent l'encens bon marché, le chat et le café. Une vieille femme est assise derrière une petite table couverte d'un tapis, avec un jeu de cartes usées jusqu'à la trame, un crâne de mouton et une chandelle noire. Elle a les yeux d'un bleu si pâle qu'on les dirait vides.",
        "Elle prend ta main sans rien demander. Elle la retourne. Elle suit les lignes de ta paume avec un ongle long et jaune, lentement, en marmonnant, comme on lit un journal dans une langue qu'on connaît mal.",
        "« Tu as perdu une mère, dit-elle. Tout le monde a perdu une mère, à ton âge, ou va la perdre, ça ne coûte rien de le dire. » Elle continue de suivre les lignes. « Tu vas passer l'eau. Tu as l'odeur du goudron, ça non plus, ça ne coûte rien. » Puis son ongle s'arrête. Elle se penche. La chandelle noire fume.",
        "« Ah, dit-elle. Ça, en revanche. » Elle lève vers toi ses yeux vides. « Tu vas rencontrer un mort. Pas un fantôme : un mort qui marche, qui mange, qui parle, qui a un autre nom. Il te fera du bien. Il te fera du mal. Il ne saura pas lui-même lequel des deux, jusqu'à la fin. »",
        "Elle lâche ta main. « Deux sous. » Elle reprend son air de vieille femme qui vend des sornettes, comme on remet un manteau.",
      ],
      choices: [{ label: "Payer, et sortir à l'air", fx: { flag: "morlenc:diseuse" }, back: "XG_foire" }] },
    XG_lutteur: { act: "II", title: "Le lutteur", place: "champ_foire", ambiance: "ville",
      text: [
        "La baraque du lutteur est un cercle de sciure entouré de cordes, sous une toile qui claque. Au milieu, torse nu, huilé, les bras croisés, un colosse moustachu en caleçon de léopard, que l'aboyeur présente comme Hercule de Bohême, vainqueur des taureaux d'Andalousie et de l'ours du Tsar. Un écu à qui le tient trois minutes debout.",
        "Petit-Jules a déjà parié ses quatre sous sur un débardeur du port, qui entre dans le cercle en crachant dans ses mains, et qui en ressort en vol plané, au bout de vingt secondes, par-dessus les cordes, dans un tonneau de harengs. Petit-Jules a perdu ses quatre sous. Il te regarde.",
        "« Toi, dit-il. T'as pas de poids, mais t'as de la tête. Il est lent. Je l'ai vu. Il est lent à gauche. »",
        "L'aboyeur t'a vu. Il t'appelle, en riant, sous les rires de la foule. Hercule de Bohême te regarde du haut de sa moustache, avec une bienveillance de montagne.",
      ],
      choices: [
        { label: "Entrer dans le cercle", test: { dom: "combat", diff: 2, label: "Trois minutes debout" }, win: { fx: { flag: "morlenc:lutte", gold: 3 }, to: "XG_lutteur_gagne" }, lose: { to: "XG_lutteur_perdu" } },
        { label: "Tirer Petit-Jules hors de la baraque", back: "XG_foire" },
      ] },
    XG_lutteur_gagne: { act: "II", title: "Le lutteur", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu ne le combats pas : tu tournes. Tu tournes à sa gauche, toujours à sa gauche, comme un chien autour d'un taureau, et chaque fois qu'il se retourne, avec la lenteur majestueuse d'un trois-mâts qui vire de bord, tu es déjà ailleurs. Il t'attrape une fois par la ceinture ; tu lui glisses entre les mains comme une anguille, en laissant ta ceinture. La foule hurle. L'aboyeur regarde le sablier avec désespoir.",
        "Trois minutes. Tu es debout, sans ceinture, la culotte tenue à deux mains, au milieu de la sciure, sous les acclamations.",
        "Hercule de Bohême te regarde. Puis il éclate de rire, un rire énorme, sincère, d'une gaieté d'enfant, et il te soulève de terre, à bout de bras, au-dessus de sa tête, pour te montrer à la foule, comme un trophée. « L'anguille ! crie-t-il avec un accent de Morlenc à couper au couteau. L'anguille a battu l'ours du Tsar ! »",
        "L'aboyeur te paie ton écu en grimaçant. Petit-Jules récupère ses quatre sous, et trois autres, sur des gens qui avaient parié contre toi. Le soir, sur la Cormorane, il raconte l'histoire à tout l'équipage, en doublant la taille du lutteur à chaque fois.",
      ],
      choices: [{ label: "Retourner dans la foire", back: "XG_foire" }] },
    XG_lutteur_perdu: { act: "II", title: "Le lutteur", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu tournes à sa gauche, comme Petit-Jules l'a dit. Il est lent à gauche, en effet. Il est aussi très rapide à droite, ce que Petit-Jules n'avait pas remarqué. Une main grande comme une pelle te cueille par le col, une autre par le fond de la culotte, et tu fais le même voyage que le débardeur, par-dessus les cordes, en vol plané, jusqu'au même tonneau de harengs.",
        "Hercule de Bohême vient te repêcher lui-même, avec une sollicitude de nourrice. Il t'essuie le visage avec son mouchoir, qui sent la pommade. « Pas mal, dit-il. Quarante secondes. Le débardeur, vingt. Tu reviendras dans cinq ans. »",
        "Tu sens le hareng pendant trois jours. Gobert déclare qu'il n'a jamais eu de mousse aussi bien salé.",
      ],
      choices: [{ label: "Retourner dans la foire", back: "XG_foire" }] },

    // ---------------------------------------------------------------- the child: a hanging
    XG_pendaison: { act: "II", title: "La Croix-des-Marées", place: "haute_ville", ambiance: "ville",
      text: [
        "Gobert t'envoie porter un pli à la capitainerie, un matin, et la capitainerie donne sur la place de la Croix-des-Marées, et la place, ce matin-là, est noire de monde. On pend.",
        "La potence se dresse au milieu, sur un échafaud de planches neuves, d'un bois si blanc qu'il a l'air propre. Autour, la foule : des femmes avec des paniers, des apprentis sur les épaules de leurs pères, des marchands de gaufres, des marchands de complaintes qui vendent déjà, imprimée sur une feuille volante, la confession du condamné, qu'il n'a pas encore faite. Aux fenêtres des hôtels, des dames avec des lorgnettes. Le temps est beau. On a l'air d'attendre une procession.",
        "On amène le condamné dans une charrette. C'est un homme d'une soixantaine d'années, maigre, rasé de frais, en chemise blanche, les mains liées devant lui, qui regarde la foule avec une curiosité tranquille. La complainte dit qu'il était pirate, qu'il a pillé trente navires et tué cent chrétiens. Lui, il a l'air d'un vieux maître d'école.",
        "On le fait monter. Le bourreau lui passe la corde au cou. Le greffier lit la sentence. On lui demande s'il a quelque chose à dire. Il regarde la foule, longtemps, et il sourit.",
        "« Vous êtes venus voir comment on meurt, dit-il d'une voix claire, qui porte jusqu'au fond de la place. C'est très simple. On attend. Puis plus rien. Je vous souhaite à tous d'avoir aussi beau temps. »",
      ],
      choices: [
        { label: "Regarder jusqu'au bout", fx: { flag: "morlenc:pendu" }, to: "XG_pendaison_vue" },
        { label: "Détourner les yeux, et regarder la foule", fx: { flag: "morlenc:pendu_detourne" }, to: "XG_pendaison_foule" },
      ] },
    XG_pendaison_vue: { act: "II", title: "La Croix-des-Marées", place: "haute_ville", ambiance: "ville",
      text: [
        "La trappe s'ouvre avec un bruit sec, de porte qu'on claque. Le corps tombe, s'arrête, tourne lentement sur lui-même, au bout de la corde, comme une girouette qui chercherait le vent. Les jambes battent un moment. Puis elles cessent.",
        "La foule pousse un grand soupir, le soupir d'un théâtre quand le rideau tombe. Puis elle se disperse, vers les gaufres, vers les complaintes, vers ses affaires. Une femme, près de toi, dit à sa voisine qu'il était bien moins effrayant qu'elle ne l'espérait.",
        "Tu restes jusqu'à ce que la place soit presque vide. Le pendu tourne toujours, lentement, au soleil. Tu as vu ce que tu voulais voir. Tu sais maintenant que c'est simple, comme il l'a dit. C'est ce qui est le plus difficile à oublier.",
      ],
      choices: [{ label: "Porter le pli à la capitainerie", back: "A2m_jours" }] },
    XG_pendaison_foule: { act: "II", title: "La Croix-des-Marées", place: "haute_ville", ambiance: "ville",
      text: [
        "Tu tournes le dos à la potence, et tu regardes la foule.",
        "C'est un spectacle bien plus étrange. Mille visages levés, tous dans la même direction, avec la même expression : une faim attentive, patiente, presque pieuse, plus ancienne que la cruauté. Un enfant, sur les épaules de son père, a la bouche ouverte. Une vieille femme égrène son chapelet sans quitter l'échafaud des yeux. Un jeune homme bien mis, au premier rang, tient la main de sa fiancée, et la serre, et elle se laisse faire, et ils ont l'air, tous les deux, au bord d'un bonheur.",
        "Puis la trappe claque, derrière toi. Et mille visages, en même temps, font la même chose, un petit mouvement, un recul, un frisson, comme un champ de blé sous une rafale. Puis ils se détendent. Ils sourient. Ils ont faim d'autre chose : de gaufres.",
        "Tu as vu mille personnes regarder mourir un vieux pirate, et le vieux pirate lui-même t'a échappé. Tu ne sais pas lequel des deux spectacles tu aurais préféré manquer.",
      ],
      choices: [{ label: "Porter le pli à la capitainerie", back: "A2m_jours" }] },

    // ---------------------------------------------------------------- the child: the press-gang
    XG_presse: { act: "II", title: "La presse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Un soir, en revenant de la Basse-Fosse par la rue des Cordiers, tu entends des pas lourds derrière toi, réguliers, en cadence, et des voix basses. Tu te jettes dans une porte cochère. Une escouade passe : six matelots de la Marine royale, en bonnet, armés de gourdins, menés par un enseigne qui tient une lanterne sourde. La presse.",
        "Quand la flotte manque d'hommes, la presse les prend où ils sont : dans les tavernes, dans les lits, dans les ruisseaux. On assomme, on embarque, on signe pour eux. Ceux qu'on prend ne revoient pas Morlenc avant trois ans, s'ils la revoient.",
        "L'escouade s'arrête devant la taverne de la Truie-qui-file, au bout de la rue, où l'on chante. L'enseigne compte ses hommes. Il donne un ordre à voix basse. Les gourdins se lèvent.",
        "Dans la taverne, tu le sais, il y a une vingtaine de marins sans navire, des pêcheurs, des débardeurs, et le vieux Pellerin, l'ivrogne que Gobert t'a fait embaucher, qui doit embarquer demain sur la Cormorane.",
      ],
      choices: [
        { label: "Courir par la ruelle de derrière, et crier « La presse ! » par la fenêtre", test: { dom: "discretion", diff: 1, label: "La ruelle" }, win: { fx: { flag: "morlenc:presse_averti" }, to: "XG_presse_cri" }, lose: { fx: { flag: "morlenc:presse_averti" }, to: "XG_presse_pris" } },
        { label: "Rester dans ta porte cochère, et attendre qu'ils passent", fx: { flag: "morlenc:presse_cache" }, to: "XG_presse_vue" },
      ] },
    XG_presse_cri: { act: "II", title: "La presse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu cours par la ruelle, entre les tas d'ordures et les chats, jusqu'à la petite fenêtre de l'arrière-salle, et tu cries, de toute ta voix : « La presse ! La presse est devant ! »",
        "Le chant s'arrête net. Puis c'est une débandade magnifique. Les fenêtres de derrière s'ouvrent, les hommes sautent, roulent, se relèvent, détalent dans toutes les directions, par les ruelles, par les toits, par les égouts, comme une volée de moineaux devant un épervier. Le vieux Pellerin passe par la fenêtre la tête la première, avec une agilité qu'on ne lui soupçonnait pas, et file vers le port, en tenant sa chope, qu'il n'a pas lâchée.",
        "Quand l'enseigne enfonce la porte de devant, la taverne est vide, sauf la patronne, qui l'accueille avec un balai, et un chien qui dort sous une table. Tu entends les jurons de l'enseigne jusqu'au bout de la rue. Tu rentres à bord en sifflotant, par un autre chemin.",
        "Le lendemain, le vieux Pellerin est le premier à monter à bord. Il te regarde en passant, et te fait un clin d'œil, d'un œil rouge et reconnaissant.",
      ],
      choices: [{ label: "Reprendre le travail", back: "A2m_jours" }] },
    XG_presse_pris: { act: "II", title: "La presse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu cours par la ruelle. Au bout de la ruelle, il y a un matelot de la presse, qui gardait la sortie de derrière. Il t'attrape au vol par le col, comme un chat.",
        "« Un mousse, dit-il en te tournant vers la lanterne. Trop petit. » Il hésite. « Encore que. Les mousses, ça grandit. »",
        "Tu cries quand même, à pleins poumons, avant qu'il te mette la main sur la bouche : « La presse ! » Derrière la fenêtre, le chant s'arrête. Des fenêtres s'ouvrent. La moitié de la taverne s'enfuit par les toits pendant que l'autre moitié se fait assommer à la porte.",
        "Le matelot te garde par le col jusqu'à ce que l'enseigne arrive. L'enseigne te regarde, te demande ton navire. Tu dis : la Cormorane, de l'armement Clavières. Il fait la grimace, comme si le nom lui brûlait la langue. « Clavières. Bon. Lâchez ça. On n'a pas besoin d'avoir le baron sur le dos pour un mousse. » Il te donne un coup de pied au derrière, pour la forme. « File. Et la prochaine fois, crie moins fort. »",
        "Le vieux Pellerin a eu le temps de filer. Trois autres n'ont pas eu cette chance.",
      ],
      choices: [{ label: "Rentrer à bord en boitant", back: "A2m_jours" }] },
    XG_presse_vue: { act: "II", title: "La presse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu restes dans le noir de ta porte cochère, le dos contre le bois, à retenir ton souffle.",
        "Les gourdins entrent dans la Truie-qui-file. Le chant s'arrête, net, au milieu d'un couplet. Il y a des cris, des bruits de bancs renversés, de verre cassé, de coups sourds, un hurlement de femme. Puis l'escouade ressort, en traînant des hommes. Six, sept, huit, la tête en sang, les pieds qui raclent le pavé. On les jette dans une charrette. La charrette s'en va vers le port.",
        "Le vieux Pellerin n'est pas dans la charrette. Tu l'apprends le lendemain : il était sous une table, ivre mort, et les matelots de la presse l'ont jugé trop vieux et trop saoul pour valoir le transport. Il en est vexé.",
        "Les huit autres, tu ne les reverras jamais. Tu ne connaissais pas leurs noms. Tu les reconnaîtrais pourtant, chacun, pour les avoir regardés passer dans la lumière de la lanterne, à trois pas de toi, pendant que tu ne faisais rien.",
      ],
      choices: [{ label: "Rentrer à bord", back: "A2m_jours" }] },

    // ---------------------------------------------------------------- the doctor: the Faculty
    XG_faculte: { act: "II", title: "La Faculté", place: "faculte", ambiance: "ville",
      text: [
        "La Faculté de médecine de Morlenc occupe un ancien couvent de la Haute-Ville, avec un cloître, une chapelle désaffectée où l'on dissèque, et, au centre, l'amphithéâtre d'anatomie, en bois sombre, en gradins serrés, qui monte en spirale jusqu'à un toit de verre comme l'intérieur d'un coquillage.",
        "Victorine y entre par la porte des étudiants, celle du bas, qui donne sur la ruelle aux Chiens. Personne ne l'arrête. Une femme de quarante ans, en robe grise, avec une sacoche, a l'air d'une parente venue réclamer un corps. Elle monte au dernier rang, dans l'ombre, à sa place. Personne ne l'a occupée depuis qu'elle est partie : on ne voit rien, de là-haut.",
        "En bas, sous la verrière, un professeur qu'elle ne connaît pas, jeune, gras, satisfait, en robe noire à rabat, fait la leçon sur une femme morte. Il parle de l'accouchement. Il dit que la fièvre des accouchées vient de la constitution des femmes, de leurs humeurs, de leur faiblesse naturelle, et qu'on ne peut rien contre elle que la saignée et la prière. Ses mains, en le disant, sont encore rouges de la dissection du matin. Il ne s'est pas lavé. Il passe d'un cadavre à l'autre, et de l'autre aux accouchées de l'Hôtel-Dieu, où il fait sa visite à midi.",
        "Victorine sait des choses qu'il ne sait pas. Elle les a apprises à Varnèse, dans les maisons, en huit ans d'accouchements. Les femmes qu'elle accouche avec des mains lavées ne meurent pas de la fièvre. Les autres, si.",
        "Sur le mur, derrière la chaire, il y a les portraits des anciens professeurs, en rang, à l'huile, dans des cadres dorés. L'un d'eux manque. Il reste à sa place un rectangle plus clair, et deux clous.",
      ],
      choices: [
        { label: "Se lever, et parler", fx: { flag: "morlenc:faculte_parle" }, to: "XG_faculte_parle" },
        { label: "Se taire, et prendre des notes, comme autrefois", fx: { flag: "morlenc:faculte_tue" }, to: "XG_faculte_tue" },
      ] },
    XG_faculte_parle: { act: "II", title: "La Faculté", place: "faculte", ambiance: "ville",
      text: [
        "Elle se lève. Du dernier rang, sa voix tombe dans l'amphithéâtre comme une pierre dans un puits.",
        "« Lavez-vous les mains, Monsieur. »",
        "Trois cents têtes se retournent. Le professeur lève les yeux, plisse les paupières, cherche dans l'ombre des gradins d'où vient cette voix de femme.",
        "« Lavez-vous les mains, répète-t-elle, entre le mort et la vivante. À l'eau chaude, au savon, et à l'eau-de-vie si vous en avez. Vos accouchées ne meurent pas de leurs humeurs. Elles meurent de vous. J'en ai accouché trois cent douze, à Varnèse, avec des mains propres. J'en ai perdu quatre. Vous en perdez une sur six. »",
        "Le silence dure. Puis un étudiant ricane, puis deux, puis l'amphithéâtre entier rit, de ce rire de troupeau qui couvre tout, et le professeur rit avec eux, en écartant ses mains rouges, comme pour prendre la salle à témoin de cette folie. On la laisse parler, on la laisse partir : on rit, ce qui est pire, et plus efficace.",
        "Elle redescend les gradins sous les rires, la tête haute. En bas, près de la porte, un étudiant du premier rang, un garçon maigre, pâle, la rattrape dans le cloître. « Trois cent douze, Madame ? Vous avez noté ? Vous avez des registres ? » Elle le regarde. Elle lui donne son adresse, à Varnèse. Elle part bientôt. Elle se dit que c'est sans importance. Elle se trompe : c'est la seule chose importante qu'elle ait faite ce mois-là.",
      ],
      choices: [{ label: "Sortir dans la Haute-Ville", back: "A2v_jours" }] },
    XG_faculte_tue: { act: "II", title: "La Faculté", place: "faculte", ambiance: "ville",
      text: [
        "Elle se tait. Elle sort de sa sacoche un carnet et un crayon, et elle prend des notes, comme autrefois, au dernier rang, dans l'ombre. Elle note ce qu'il dit. Elle note, en marge, ce qu'il aurait dû dire. Elle note l'heure de sa visite à l'Hôtel-Dieu, et la couleur de ses mains.",
        "La leçon finit. Les étudiants sortent en se bousculant. Elle reste seule dans l'amphithéâtre, sous la verrière où le jour baisse, devant la femme morte qu'un garçon de salle recouvre d'un drap.",
        "Elle pense qu'elle a eu raison de se taire. Qu'on ne l'aurait pas écoutée. Qu'une femme qui parle dans un amphithéâtre de médecine est une curiosité, comme une Femme-Poisson à la foire, et qu'on la regarde sans l'entendre. Elle pense tout cela, très clairement, très raisonnablement. Et elle a honte, d'une honte précise, qui a la forme exacte d'une accouchée de l'Hôtel-Dieu.",
        "En sortant, elle regarde une dernière fois le rectangle clair sur le mur, entre les portraits. Elle se souvient du visage qui y était accroché. Elle ne se souvient pas de son nom. Elle se souviendra plus tard.",
      ],
      choices: [{ label: "Sortir dans la Haute-Ville", back: "A2v_jours" }] },

    // ---------------------------------------------------------------- the doctor: Hector's grave
    XG_tombe: { act: "II", title: "Le cimetière des Hollandes", place: "haute_ville", ambiance: "nuit",
      text: [
        "Le cimetière des Hollandes est accroché au flanc de la Haute-Ville, au-dessus du port, en terrasses, comme si les morts de Morlenc avaient voulu garder un œil sur les navires. Des ifs noirs. Des tombes de marchands, lourdes, carrées, en granit, avec des ancres sculptées et des noms de navires. Des tombes de pauvres, plus bas, en bois, qui penchent. Le vent de mer passe entre les ifs avec un bruit de soie qu'on déchire.",
        "Hector Davrigny repose dans la troisième terrasse, sous une dalle de marbre blanc qui a coûté, à elle seule, deux années de ses dettes. Victorine l'a payée quand même. Elle ne voulait pas qu'on dise qu'elle avait enterré son mari comme un chien. Elle aurait préféré qu'on le dise de lui.",
        "*HECTOR DAVRIGNY. ÉPOUX TENDREMENT REGRETTÉ.* L'épitaphe est du marbrier. Victorine n'a pas eu le courage de la corriger, ni l'hypocrisie de l'approuver.",
        "Elle reste debout devant la tombe. Le soir tombe. En bas, sur le Quai des Hollandes, elle voit la Cormorane, à quai, ses mâts noirs sur le ciel rouge.",
        "« Je pars, dit-elle à la dalle. Ça te ferait rire. Toi, tu n'es jamais allé plus loin que les tripots de la rue Basse. » Elle tourne son alliance autour de son doigt, une mince bague d'or qu'elle porte depuis douze ans par habitude, comme on garde une cicatrice.",
      ],
      choices: [
        { label: "Poser l'alliance sur la dalle", fx: { flag: "victorine:alliance" }, to: "XG_tombe_bague" },
        { label: "La garder, et redescendre vers le port", to: "XG_tombe_garde" },
      ] },
    XG_tombe_bague: { act: "II", title: "Le cimetière des Hollandes", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle ôte la bague. Elle a un peu de mal ; le doigt a pris la forme de l'anneau, en douze ans, et garde, quand l'anneau sort, une marque blanche et fine, un sillon, comme la trace d'un fil trop serré.",
        "Elle pose l'alliance sur le marbre, au milieu, sur le E de TENDREMENT. Elle la regarde briller une seconde dans la dernière lumière.",
        "« Je ne te la rends pas, dit-elle. Je la laisse. Ce n'est pas pareil. »",
        "Elle descend les terrasses du cimetière sans se retourner, en frottant de son pouce la marque blanche à son annulaire, qui ne partira pas avant des mois. Derrière elle, un corbeau descend d'un if, se pose sur la dalle, regarde la bague, la prend, et s'envole avec, vers la mer. Elle ne le voit pas. Elle aurait trouvé ça très juste.",
      ],
      choices: [{ label: "Redescendre vers le port", back: "A2v_jours" }] },
    XG_tombe_garde: { act: "II", title: "Le cimetière des Hollandes", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle garde la bague. Elle se dit que c'est de l'or, et qu'on ne jette pas de l'or quand on a eu des dettes. Elle se dit que c'est une habitude, et qu'on ne se débarrasse pas des habitudes sur une tombe, comme des fleurs fanées. Elle se dit beaucoup de choses, toutes vraies, qui ne sont pas la raison.",
        "La raison, c'est qu'elle a été heureuse, une fois. Six mois. Les six premiers mois, avant le premier tripot, quand Hector lui lisait des vers de mauvais poètes dans un lit trop étroit en riant de leurs rimes. Six mois sur douze ans : peu de chose. Assez pour garder une bague.",
        "Elle redescend vers le port. Sur la dalle, derrière elle, il n'y a rien. Le marbrier avait raison, au fond, pour l'épitaphe. Elle ne le lui dira jamais.",
      ],
      choices: [{ label: "Redescendre vers le port", back: "A2v_jours" }] },

    // ---------------------------------------------------------------- the doctor: a night birth
    XG_couches: { act: "II", title: "La nuit de la rue des Cordiers", place: "basse_fosse", ambiance: "nuit",
      text: [
        "On frappe à la porte du Cormoran à deux heures du matin. Un garçon de dix ans, pieds nus, trempé, qui demande « la dame médecin du bateau » parce que la sage-femme de la rue des Cordiers est ivre, et que sa mère va mourir.",
        "La chambre est sous les toits, au cinquième, une soupente où l'on tient debout au milieu. Une paillasse. Une chandelle. Une femme sur la paillasse, en sueur, qui ne crie plus, ce qui est mauvais signe. Dans un coin, la sage-femme, une grosse commère au bonnet de travers, ronfle sur une chaise, une bouteille entre les pieds. Autour, quatre enfants, tous plus jeunes que le garçon, qui regardent.",
        "Victorine se lave les mains dans la cuvette, à l'eau-de-vie de la sage-femme, ce qui réveille celle-ci, qui proteste. Puis elle examine. Le ventre est énorme. Elle pose son cornet de buis, écoute, déplace le cornet, écoute encore. Deux cœurs. Deux. Et le premier enfant se présente par l'épaule, en travers, comme un bouchon dans un goulot.",
        "Elle connaît la manœuvre. Elle l'a faite trois fois à Varnèse, et réussie deux. La version : aller chercher un pied, à la main, dans la matrice, et retourner l'enfant. Il faut du temps, de la force et de la chance. Et il en reste un deuxième derrière.",
      ],
      choices: [
        { label: "Faire la version, sans se presser", test: { dom: "savoir", diff: 2, label: "Un pied dans le noir" }, win: { fx: { flag: "morlenc:jumeaux" }, to: "XG_couches_deux" }, lose: { fx: { flag: "morlenc:jumeau_mort" }, to: "XG_couches_un" } },
      ] },
    XG_couches_deux: { act: "II", title: "La nuit de la rue des Cordiers", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Elle trouve le pied au bout de vingt minutes, dans le noir chaud de la matrice, entre deux contractions, à tâtons, en fermant les yeux pour mieux voir avec les doigts. Elle tire. Lentement. L'enfant tourne, comme une clef dans une serrure rouillée. Il sort par les pieds, bleu, muet. Elle le frotte, le retourne, lui souffle dans la bouche. Il crie. Un cri de chat furieux, qui réveille toute la maison.",
        "Le deuxième vient tout seul, dix minutes plus tard, la tête la première, comme un enfant poli qui a attendu son tour. Une fille. Elle crie avant même d'être sortie.",
        "La mère est vivante. Elle pleure. La sage-femme, dégrisée, regarde Victorine avec une admiration où entre beaucoup de rancune. Les quatre enfants se sont rapprochés de la paillasse et regardent les deux nouveaux avec la méfiance de ceux qui savent compter, et qui viennent de comprendre qu'il y aura deux bouches de plus.",
        "Le père rentre à l'aube, d'un quart de nuit sur un chaland. Il voit les jumeaux. Il s'assied par terre. Il demande à Victorine son nom, pour le donner à la fille. Elle refuse. Il le donne quand même. À la mairie, le lendemain, le commis écrira *Victorine*, avec deux fautes.",
      ],
      choices: [{ label: "Rentrer au Cormoran, au petit jour", back: "A2v_jours" }] },
    XG_couches_un: { act: "II", title: "La nuit de la rue des Cordiers", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Elle cherche le pied pendant quarante minutes. Elle le trouve, le perd, le retrouve. Elle tire. L'enfant tourne à moitié, se coince, tourne encore. Quand il sort enfin, par les pieds, il est bleu, et mou, et il ne crie pas. Elle le frotte, le retourne, lui souffle dans la bouche, longtemps, beaucoup plus longtemps qu'il ne sert à rien. Il reste bleu.",
        "Le deuxième vient tout seul, peu après, la tête la première. Une fille. Elle crie. Elle crie pour deux.",
        "La mère est vivante. Elle prend la fille contre elle, et elle tend l'autre main vers le garçon bleu, et Victorine le lui donne, parce qu'on donne toujours l'enfant à la mère, même mort, surtout mort, c'est une chose qu'elle a apprise à Varnèse et qu'aucun professeur ne lui avait apprise.",
        "Elle rentre au Cormoran au petit jour, dans les rues vides, les mains propres, lavées trois fois. Elle sait qu'elle a sauvé deux vies cette nuit, et qu'elle en a perdu une. Elle sait que la sage-femme ivre les aurait perdues toutes les trois. Elle sait faire ce calcul-là. Elle le fait depuis huit ans. Il ne donne jamais le bon résultat.",
      ],
      choices: [{ label: "Dormir deux heures", back: "A2v_jours" }] },
  },
  extras: {
    places: {
      champ_foire: { ambiance: "ville", name: "La foire du Quai-aux-Harengs", map: "morlenc", region: "morlenc", x: 58, y: 70, desc: "Trois semaines d'automne : baraques, tréteaux, roulottes, friture et poudre à canon." },
      faculte: { ambiance: "ville", name: "La Faculté de médecine", map: "morlenc", region: "morlenc", x: 42, y: 20, desc: "Un ancien couvent de la Haute-Ville : le cloître, la chapelle où l'on dissèque, l'amphithéâtre en spirale." },
    },
  },
};
