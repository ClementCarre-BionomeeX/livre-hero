// Prologue, the voice (post `p` = voix): a costume, a way in, the great hall of the Maîtres du Fer; the woman who forged
// the Serrure-Reine, the steward and his key, the Syndic's toast, a provost in a brown coat; then the job from the hall.
// Sets: monde:p:ermeline, monde:p:clef_chasse, monde:p:toast, monde:p:cadenas_vu, monde:p:salle_tenue,
// monde:p:valets_retenus, monde:p:foire_voix, monde:p:reine=propre (only when the voice itself takes the lock, cleanly).
// Personal: p:v_marchand | p:v_musicien | p:v_valet (the costume), p:v_remarque, p:v_portes, p:v_ugolin.
var PLAN = function (h, e, r, f) { return [{ if: { scrutin: "plan_p", is: "haut" }, to: h }, { if: { scrutin: "plan_p", is: "echange" }, to: e }, { if: { scrutin: "plan_p", is: "ruelle" }, to: r }, { to: f }]; };
var SEUL = function (flag) { return { not: { has: flag } }; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ a face for the evening
    Pv_fripier: { act: "P", title: "Chez le père Balthazar", place: "ferronniers",
      text: [
        "Le père Balthazar tient boutique sous les arcades, entre un cloutier et un marchand d'oublies, dans un réduit où pendent du plafond, serrés comme des jambons, les habits de trois générations de gens qui ont eu besoin d'argent. Il y a là des robes de noces, des soutanes, une cuirasse, un domino de carnaval ; le tout sent le camphre, la sueur ancienne, et cette tristesse particulière des vêtements qui ont survécu à leurs maîtres.",
        "« La Saint-Fer, dit le vieux sans lever le nez de son aiguille. Tous les ans, il m'en vient un ou une qui veut entrer chez les Maîtres. Je loue, je ne demande rien, et je reprends l'habit le lendemain, s'il n'y a pas de trou dedans. S'il y a un trou, je garde la caution et je prie pour le locataire. »",
        "Il te désigne du menton trois défroques pendues à part, qu'il a sorties d'avance. C'est un homme qui connaît sa clientèle.",
        "*Un habit, ce soir, c'est une personne entière : celle que tu choisis décidera de la porte par où tu entres, et de ce qu'on te laissera approcher.*",
      ],
      choices: [
        { label: "L'habit de drap fin et le chapeau à ganse : un acheteur de fers, venu de loin", if: { gold: { min: 12 } }, fx: { gold: -12, flag: "p:v_marchand" }, to: "Pv_perron" },
        { label: "Le pourpoint râpé et l'étui à viole : un musicien de remplacement", if: { gold: { min: 6 } }, fx: { gold: -6, flag: "p:v_musicien" }, to: "Pv_tribune" },
        { label: "La livrée bleue à boutons d'étain : un valet d'extra", fx: { flag: "p:v_valet" }, why: "Balthazar la prête sans caution : elle a déjà un trou.", to: "Pv_office" },
      ] },

    Pv_perron: { act: "P", title: "Le perron des Maîtres", place: "ferronniers",
      text: [
        "Le drap est fin, le chapeau te va, et tu montes le perron des Maîtres entre les deux casaques bleues avec la lenteur d'une personne qui a fait six jours de coche pour acheter des serrures et entend qu'on le sache.",
        "En haut des marches, sous un dais aux armes de la guilde, un huissier à chaîne tient un registre ouvert sur un lutrin. Il a le nez long, la plume derrière l'oreille, et il pointe les invités un à un, en mouillant son doigt.",
        "« Monsieur, ou Madame, est de quelle maison ? »",
      ],
      choices: [
        { label: "« De la maison qui achète. Cherchez à la lettre des gens qui paient comptant. »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
        { label: "Lire son registre à l'envers et te donner le nom d'un absent", test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
      ] },
    Pv_tribune: { act: "P", title: "La porte des violons", place: "ferronniers",
      text: [
        "Les musiciens entrent par le côté, sous une voûte où l'on a écrit *Fournisseurs*, ce qui dit assez le rang de l'harmonie chez les gens du fer. Un portier y fume, assis sur une borne, à côté d'un maître de musique en perruque de travers qui compte ses violons et en trouve un de moins.",
        "« Quatre ! J'en avais cinq à vêpres ! » Le maître de musique t'aperçoit, toi et ton étui, et son œil s'allume d'un espoir sans noblesse. « Vous ! Vous jouez de quoi ? »",
      ],
      choices: [
        { label: "« De la viole, depuis l'enfance, et à vue. »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
        { label: "Lui parler de son cinquième violon, que tu as laissé au Marteau d'Or sous une table", test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
      ] },
    Pv_office: { act: "P", title: "L'office", place: "ferronniers",
      text: [
        "La livrée est bleue, les boutons d'étain, et le trou se trouve sous le bras gauche, qu'il suffira de tenir serré. Tu entres par la ruelle de derrière, avec trois autres extras qu'un maître d'hôtel en sueur passe en revue devant la porte des cuisines.",
        "« Les ongles. » Il regarde les ongles. « Les souliers. » Il regarde les souliers. Arrivé à toi, il s'arrête, et tu sens son regard descendre le long de la manche, vers la couture.",
      ],
      choices: [
        { label: "Prendre un plateau sur la table et le lui présenter, bras gauche au corps", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
        { label: "« C'est le chef des sauces qui m'envoie. Il dit que vous lui devez deux hommes. »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "Pv_entree" }, lose: { to: "Pv_refoule" } },
      ] },
    Pv_refoule: { act: "P", title: "Sur le pavé", place: "ferronniers",
      text: [
        "On te reconduit. On y met des formes, la guilde tenant à ses manières, et c'est avec une courtoisie parfaite qu'une main te ramène au pavé et qu'une porte se referme sur ton personnage.",
        "Tu restes là un moment, à écouter la fête par le dehors. Puis la rue te fait un cadeau. Du coin de l'apothicaire débouche un cortège de mitrons en bonnet blanc, douze au moins, portant sur un brancard une pièce montée en forme de coffre-fort, haute comme un enfant, avec sa serrure en sucre filé. Le dernier porteur boite, et la pièce penche.",
        "Tu prends le coin du brancard qui faiblit. Personne ne refuse une épaule sous un chef-d'œuvre. Le perron, l'huissier, le vestibule : tout s'ouvre devant le nougat. Dans la bousculade de l'arrivée, tu rends ton coin de brancard, tu secoues la farine de tes manches, et tu redeviens la personne que le père Balthazar t'a louée.",
      ],
      fx: { flag: "p:v_remarque" },
      choices: [{ label: "Entrer dans la grande salle", to: "Pv_entree" }] },

    Pv_entree: { act: "P", title: "La salle des Maîtres", place: "ferronniers",
      text: [
        "La grande salle de l'hôtel des Maîtres du Fer est longue comme une nef et presque aussi haute. Quatre lustres y brûlent, chargés de tant de cire que la chaleur descend sur les épaules comme une main ; et cette lumière, au lieu d'égayer les murs, y réveille un peuple entier de serrures. Elles sont là par centaines, clouées au lambris depuis le plancher jusqu'à la galerie des combles, les chefs-d'œuvre de deux siècles, chacune sous son nom et sa date, toutes fermées. On dîne ici sous le regard de mille trous de clef, et il faut l'habitude des Maîtres pour ne pas sentir, entre les omoplates, cette attention noire et multipliée de choses qui ont été faites pour garder.",
        "Trois cents convives mangent, boivent et crient là-dessous sans y penser. Au fond, sur une estrade, la table des Maîtres jurés, et au milieu d'elle un homme rond, en velours prune, qui rit plus fort que les violons. Le long du mur de droite, le buffet, pris d'assaut. Et au centre de la salle, isolée par un cordon de soie sur quatre pieds de cuivre, une colonne de chêne drapée d'azur porte une cloche de verre.",
        "Sous la cloche, quelque chose de bleu luit doucement.",
      ],
      choices: [{ label: "T'avancer parmi les convives", to: "Pv_salle" }] },

    // ------------------------------------------------------------ the great hall
    Pv_salle: { act: "P", title: "Parmi les convives", place: "ferronniers", hub: true, backName: "la grande salle",
      text: [
        { first: true, if: { has: "p:v_marchand" }, text: "Un acheteur étranger, chez les Maîtres, est un gibier qu'on se dispute : en dix pas, trois serruriers t'ont glissé leur adresse, et un quatrième sa fille. Tu remercies, tu promets, tu avances." },
        { first: true, if: { has: "p:v_musicien" }, text: "On t'a mis à la tribune, au dernier pupitre, derrière un basson qui te cache à la salle et la salle à toi. Entre deux danses, les musiciens descendent boire ; tu descends avec eux, l'archet à la main, ce qui vaut un passeport." },
        { first: true, if: { has: "p:v_valet" }, text: "Un valet, dans une fête, jouit du privilège des meubles : on parle devant lui, on le traverse du regard, et l'on ne s'étonne de le trouver nulle part. Tu prends un plateau, une serviette sur l'avant-bras, et la salle t'appartient." },
        { again: true, text: "La salle, ses quatre lustres, ses mille serrures aux murs. Les violons ont attaqué une courante, et le buffet résiste encore." },
        { after: "monde:p:toast", text: "Au-dessus de l'estrade, l'horloge des Maîtres marche vers minuit moins le quart avec la gravité d'un huissier." },
      ],
      choices: [
        { label: "Aller voir la cloche de verre, comme tout le monde", to: "Pv_cloche" },
        { label: "Approcher l'intendant, ce gros homme qui porte une clef à la ceinture", to: "Pv_onfroy", hide: { any: [{ seen: "Pv_onfroy_ok" }, { seen: "Pv_onfroy_ko" }] } },
        { label: "Gagner le pied de l'estrade, où trône l'homme en velours prune", to: "Pv_syndic" },
        { label: "Faire un tour au buffet", to: "Pv_buffet", hide: { any: [{ seen: "Pv_cadenas_ok" }, { seen: "Pv_cadenas_ko" }] } },
        { label: "T'asseoir près de la vieille dame à l'éventail, qui nomme tout le monde", to: "Pv_veuve", hide: { seen: "Pv_veuve" } },
        { label: "Onze heures approchent : t'éclipser vers le porche du tonnelier", to: "Pc_porche", big: true },
      ] },

    // ------------------------------------------------------------ the bell jar, and the woman who filled it
    Pv_cloche: { act: "P", title: "La Serrure-Reine", place: "ferronniers", backName: "la cloche de verre",
      text: [
        { first: true, text: "On fait la queue devant le cordon, par petits groupes, avec le recueillement distrait des gens qui visitent une relique entre deux services. Ton tour vient. La Serrure-Reine repose sur un coussin de velours, sous sa cloche, à hauteur de poitrine : un corps d'acier bleu nuit, long comme un missel, et sur le palastre une couronne de myosotis gravée au burin. Les chandelles s'y mirent en tremblant. Elle a l'air de respirer." },
        { first: true, text: "Tu regardes aussi le reste, qui t'intéresse davantage. La cloche tient au socle par un collier de cuivre, fermé d'une petite serrure plate. Le socle porte une rosace, de cuivre aussi, et sa draperie tombe jusqu'au plancher. Entre le cordon et la colonne, il y a deux pas. Trois cents personnes les regardent." },
        { first: true, text: "À l'écart, adossée à un pilier, une femme d'une quarantaine d'années tient un verre plein qu'elle oublie de boire. Elle porte une robe de cérémonie qu'on a visiblement taillée pour une autre, et ses avant-bras, que les manches découvrent, sont semés de ces petites cicatrices pâles que laisse la forge. Elle regarde la cloche comme une mère regarde son enfant sur les genoux d'un évêque." },
        { again: true, text: "La cloche, le collier de cuivre, la rosace, les deux pas de parquet entre le cordon et la colonne. La femme aux bras brûlés est toujours contre son pilier." },
      ],
      choices: [
        { label: "Aller lui dire ce que tu penses de son ouvrage", to: "Pv_ermeline", hide: { any: [{ seen: "Pv_ermeline_ok" }, { seen: "Pv_ermeline_ko" }] } },
        { back: "Pv_salle" },
      ] },
    Pv_ermeline: { act: "P", title: "Maîtresse Vauquier", place: "ferronniers",
      text: [
        "« C'est vous qui l'avez faite. »",
        "Elle tourne la tête. Elle a les yeux gris, cernés, de quelqu'un qui a fini un travail la veille au soir et n'a pas encore appris à s'en passer. « Yolande Vauquier, rue des Limeurs. Vous êtes la première personne de la soirée à me le demander. Les autres félicitent le Syndic. » Elle lève enfin son verre, le regarde, le repose sur le socle d'une statue. « Il paraît qu'on me donnera la maîtrise à Noël. Il paraît aussi qu'une femme maître, cela se discute, et qu'on discutera. En attendant, ils la descendent au trésor à minuit, et je ne la reverrai pas. »",
        "Elle dit *la*, et l'on comprend bien qu'elle ne parle pas de la maîtrise.",
      ],
      choices: [
        { label: "Parler métier : les gorges, le bleuissage, le jeu des pênes", test: { dom: "savoir", diff: 10, label: "Savoir", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { has: "p:v_marchand" }, v: 10 }] }, win: { fx: { flag: "monde:p:ermeline", ep: ["perso", 500] }, to: "Pv_ermeline_ok" }, lose: { to: "Pv_ermeline_ko" } },
        { label: "« Si elle était à moi, je voudrais savoir comment on la porte. »", test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "p:v_marchand" }, v: 15 }] }, win: { fx: { flag: "monde:p:ermeline", ep: ["perso", 500] }, to: "Pv_ermeline_ok" }, lose: { to: "Pv_ermeline_ko" } },
      ] },
    Pv_ermeline_ok: { act: "P", title: "Le douzième", place: "ferronniers",
      text: [
        "Elle te considère un moment, puis quelque chose cède dans son visage : la digue que tiennent, toute une soirée, les gens à qui personne n'a parlé de ce qu'ils aiment.",
        "« Le jury a compté onze pênes. Il a compté ce qu'on lui montrait. » Elle baisse la voix, avec une fierté d'enfant. « Il y en a un douzième. Il dort dans le coffre, derrière la gorge maîtresse, sur un ressort de montre. Qu'on la force, qu'on la crochète en brutal, ou seulement qu'on la secoue comme un sac de noix, et il tombe. Après cela, monsieur le Syndic lui-même peut y mettre sa clef : elle reste close jusqu'au Jugement. Je l'ai faite pour qu'elle se défende. »",
        "Elle reprend son verre et, cette fois, le vide. « Celui qui la portera au trésor a intérêt à marcher comme on porte un nourrisson. Je le lui ai dit. Il a ri. »",
      ],
      choices: [{ back: "Pv_cloche" }] },
    Pv_ermeline_ko: { act: "P", title: "Une femme fatiguée", place: "ferronniers",
      text: [
        "Tu dis une chose juste, puis une chose de trop. Elle t'écoute avec la politesse lasse de quelqu'un à qui l'on explique son propre ouvrage, et son regard retourne à la cloche avant la fin de ta phrase.",
        "« Vous êtes bien aimable. » C'est une porte qu'on referme doucement. Un Maître juré vient la prendre par le coude pour la présenter à quelqu'un d'important ; elle se laisse emmener, en se retournant une dernière fois vers le velours.",
      ],
      choices: [{ back: "Pv_cloche" }] },

    // ------------------------------------------------------------ the steward and his key
    Pv_onfroy: { act: "P", title: "Maître Onfroy", place: "ferronniers",
      text: [
        "L'intendant de la guilde est un homme vaste, luisant, sanglé dans un habit noir qui a renoncé depuis longtemps à faire le tour. Il va de table en table, goûte à tout par devoir, et tape sur le ventre des Maîtres qui en ont. À sa ceinture, au bout d'une chaînette d'acier, pend une clef plate, pas plus longue que le petit doigt, qui bat contre sa cuisse à chaque pas.",
        "Une clef, il suffit de la tenir le temps d'un soupir : la cire fait le reste.",
        { if: { item: "cire" }, text: "Tu as dans ta poche la boîte de fer-blanc, tiède contre la hanche.", else: "Tu n'as pas de cire. Sur les tables, en revanche, il y a du pain frais, et une mie bien pétrie prend l'empreinte presque aussi fidèlement, pourvu qu'on l'ait serrée dans son poing assez longtemps." },
      ],
      choices: [
        { label: "Le heurter dans la presse du buffet, et te confondre en excuses contre sa ceinture", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { item: "cire" }, v: 20 }, { if: { has: "p:v_valet" }, v: 15 }] }, win: { fx: { flag: "monde:p:clef_chasse", ep: ["perso", 500] }, to: "Pv_onfroy_ok" }, lose: { fx: { flag: "p:v_remarque" }, to: "Pv_onfroy_ko" } },
        { label: "Lui faire admirer une serrure du mur, très haut, en lui tenant le bras", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { item: "cire" }, v: 20 }, { if: { has: "p:v_marchand" }, v: 15 }] }, win: { fx: { flag: "monde:p:clef_chasse", ep: ["perso", 500] }, to: "Pv_onfroy_ok" }, lose: { fx: { flag: "p:v_remarque" }, to: "Pv_onfroy_ko" } },
        { label: "Laisser Maître Onfroy à sa tournée", back: "Pv_salle" },
      ] },
    Pv_onfroy_ok: { act: "P", title: "Le temps d'un soupir", place: "ferronniers",
      text: [
        "La clef passe dans ta paume, y laisse son profil, et retourne battre la cuisse de son maître. Maître Onfroy n'a rien senti ; il a les sens ailleurs, vers un pâté de lièvre qu'on vient d'entamer.",
        "Tu t'éloignes sans hâte, la main dans la poche, autour d'une empreinte nette : trois dents, une gorge en biais, un panneton évidé en cœur. Fifrelin court vite, et la Douairière lime plus vite encore. Dans une heure, cette clef aura une sœur.",
      ],
      choices: [{ back: "Pv_salle" }] },
    Pv_onfroy_ko: { act: "P", title: "Une main sur la chaînette", place: "ferronniers",
      text: [
        "Tes doigts trouvent la clef. Ceux de Maître Onfroy trouvent les tiens. Il a, pour un homme de ce volume, des réflexes de pêcheur à la ligne.",
        "« Holà. » Il n'y met aucune colère ; il rapproche seulement la chaînette de son ventre, et te dévisage avec une attention que tu aurais préféré lui voir garder pour le lièvre. « On se bouscule beaucoup, ce soir. » Il s'en va en tenant sa clef dans son poing fermé, et tu comprends qu'il la tiendra ainsi jusqu'à minuit.",
      ],
      choices: [{ back: "Pv_salle" }] },

    // ------------------------------------------------------------ the dais
    Pv_syndic: { act: "P", title: "Au pied de l'estrade", place: "ferronniers", backName: "l'estrade",
      text: [
        { first: true, text: "De près, l'homme en velours prune est encore plus rond et plus rose. Maître Polycarpe Quincarnon, Syndic des Maîtres du Fer, porte la chaîne d'or de sa charge sur trois mentons, et il a cette cordialité des gens très riches qui consiste à vous faire sentir combien il leur coûte peu d'être aimables. Il parle en comptant sur ses doigts. Autour de lui, les Maîtres jurés rient un temps après lui, comme on répond aux litanies." },
        { first: true, text: "Derrière son fauteuil, debout dans l'ombre d'une tenture, se tient un homme que les lustres n'arrivent pas à rendre décoratif. Il a la tête rasée, bosselée, plantée sur un cou plus large qu'elle, et il porte sous un manteau de drap un tablier de forgeron dont il n'a pas jugé utile de se défaire. Un marteau de frappeur lui pend à la ceinture. Il regarde la salle comme un homme regarde une pièce de fer, en cherchant où frapper." },
        { again: true, text: "L'estrade, le velours prune, les rires en retard des jurés. Le colosse au marteau n'a pas bougé de sa tenture." },
      ],
      fx: { meet: ["quincarnon", "ugolin"] },
      choices: [
        { label: "Lire par-dessus l'épaule du maître d'hôtel l'ordre de la cérémonie", test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { flag: "monde:p:toast", ep: ["perso", 400] }, to: "Pv_toast_ok" }, lose: { to: "Pv_toast_ko" }, hide: { any: [{ has: "monde:p:toast" }, { seen: "Pv_toast_ko" }] } },
        { label: "Demander au chef de musique à quelle heure il doit sonner la fanfare", if: { has: "p:v_musicien" }, fx: { flag: "monde:p:toast", ep: ["perso", 300] }, to: "Pv_toast_ok", hide: { any: [SEUL("p:v_musicien"), { has: "monde:p:toast" }] } },
        { label: "Complimenter le Syndic, et le laisser dire lui-même le programme", test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "p:v_marchand" }, v: 15 }] }, win: { fx: { flag: "monde:p:toast", ep: ["perso", 400] }, to: "Pv_toast_ok" }, lose: { to: "Pv_toast_ko" }, hide: { any: [{ has: "monde:p:toast" }, { seen: "Pv_toast_ko" }] } },
        { label: "Te tenir près de la tenture, quand le Syndic se penche vers son colosse", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "p:v_valet" }, v: 20 }] }, win: { fx: { clue: "r_syndic", ep: ["perso", 500] }, to: "Pv_ecoute_ok" }, lose: { fx: { flag: "p:v_ugolin" }, to: "Pv_ecoute_ko" }, hide: { any: [{ seen: "Pv_ecoute_ok" }, { seen: "Pv_ecoute_ko" }] } },
        { back: "Pv_salle" },
      ] },
    Pv_toast_ok: { act: "P", title: "L'ordre de la cérémonie", place: "ferronniers",
      text: [
        "Le programme est simple, et la guilde le suit depuis deux siècles avec la fidélité qu'elle met à tout ce qui l'honore. À minuit moins le quart, fanfare. Le Syndic se lève et porte la santé de la Serrure-Reine. La salle entière se lève avec lui et se tourne vers l'estrade, verre en main ; la coutume veut qu'on reste ainsi, debout, face au Syndic, jusqu'au dernier mot du discours, et qu'on boive ensuite d'un trait.",
        "« Un quart d'heure, soupire quelqu'un près de toi. L'an dernier, il a tenu vingt minutes. Il a donné le prix de chaque pêne, avec la façon. »",
        "Pendant un quart d'heure, donc, trois cents personnes tourneront le dos à la cloche de verre, par respect.",
      ],
      choices: [{ back: "Pv_syndic" }] },
    Pv_toast_ko: { act: "P", title: "Un programme bien gardé", place: "ferronniers",
      text: [
        "Tu t'approches trop, ou tu demandes trop droit. On te répond que la soirée suivra son cours, avec ce sourire des gens d'estrade pour ceux du parterre, et un Maître juré profite de l'occasion pour t'entretenir de son neveu, qui cherche une place.",
        "Tu en sors au bout d'un quart d'heure, riche de tout ce qu'on peut savoir sur le neveu. Quant à l'heure où la salle regardera ailleurs, il faudra la guetter.",
      ],
      choices: [{ back: "Pv_syndic" }] },
    Pv_ecoute_ok: { act: "P", title: "Derrière la tenture", place: "ferronniers",
      text: [
        "Tu es à deux pas, le dos tourné, occupé d'un verre. Le Syndic s'est renversé dans son fauteuil et parle par-dessus son épaule, sans cesser de sourire à la salle. Sa voix, pour cela, a quitté le ton des additions.",
        "« Demain, à la nuit close. Tu monteras chez notre ami Balancier. Tu lui porteras mes amitiés, et tu lui reprendras ce qu'il a emporté de mon cabinet. »",
        "« Et s'il veut pas le rendre ? » La voix du colosse est un souffle de forge, enroué, lent.",
        "« Il a soixante-dix ans et le cœur fragile, Ugolin. Tu sauras bien le convaincre de se reposer. » Le Syndic se retourne vers ses jurés, épanoui, et lève son verre à une plaisanterie qu'il n'a pas entendue.",
      ],
      choices: [{ back: "Pv_syndic" }] },
    Pv_ecoute_ko: { act: "P", title: "Le regard du frappeur", place: "ferronniers",
      text: [
        "Tu es à deux pas quand le Syndic se penche, et à deux pas encore quand le colosse lève les yeux. Il te regarde, simplement, de ce regard qui cherche où frapper, et sa main descend d'elle-même jusqu'au manche du marteau, où elle se pose comme sur la tête d'un chien.",
        "Le Syndic suit ce regard, t'aperçoit, et te sourit de toutes ses dents. « Ugolin n'aime pas la foule. Ne restez pas là, il vous prendrait pour une enclume. » Les jurés rient. Tu ris aussi, et tu t'éloignes avec, entre les épaules, une place très précise qui te démange.",
      ],
      choices: [{ back: "Pv_syndic" }] },

    // ------------------------------------------------------------ the buffet, and a brown coat
    Pv_buffet: { act: "P", title: "Le buffet", place: "ferronniers",
      text: [
        "Le buffet des Maîtres est une fortification. On y a dressé des pâtés en bastions, des jambons en demi-lunes, une courtine de fromages ; et la bourgeoisie d'Aiguemorne y donne l'assaut depuis huit heures avec une bravoure que le guet lui envierait.",
        "Tu te fais une place et tu manges, parce qu'un convive qui ne mange pas se remarque et que le pâté est bon.",
        "À l'angle de la table, un homme mange debout, lui aussi, mais lentement. Il est trapu, carré, moustachu de gris, et il porte un habit marron de bourgeois avec la raideur d'un cheval de trait sous une selle de dame. Il a une assiette dans une main et rien dans l'autre. Il regarde les gens se servir. Plus exactement, il regarde leurs mains, l'une après l'autre, avec une patience de douanier ; et de temps en temps il tire de son gousset un clou de girofle, qu'il mâchonne.",
      ],
      fx: { meet: "cadenas", pv: 2 },
      choices: [
        { label: "Lui tendre le plat de lièvre, les deux mains bien en vue, et causer", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { item: "fards" }, v: 10 }, { if: SEUL("p:v_remarque"), v: 10 }] }, win: { fx: { flag: "p:v_portes", ep: ["perso", 500] }, to: "Pv_cadenas_ok" }, lose: { fx: { flag: "monde:p:cadenas_vu" }, to: "Pv_cadenas_ko" } },
        { label: "Finir ton assiette à l'autre bout de la table, et le laisser compter des mains", back: "Pv_salle" },
      ] },
    Pv_cadenas_ok: { act: "P", title: "Un bourgeois qui compte les portes", place: "ferronniers",
      text: [
        "Il prend du lièvre. Il regarde tes mains pendant qu'elles tiennent le plat, les trouve occupées à ce que font les mains honnêtes, et remonte jusqu'à ton visage avec un commencement d'ennui.",
        "« Belle fête », dis-tu.",
        "« Belle fête ? » Il répète la question, lentement, comme on retourne une pièce pour en voir le revers. « Trois cents personnes, quatre portes, une cloche de verre. C'est une fête pour ceux qui dansent. » Il mâche son clou. « À minuit, j'aurai deux hommes à chacune. Le perron, la tribune, l'escalier des jurés. Les cuisines, non : on ne peut pas mettre une casaque entre un chef et ses sauces, il porterait plainte. »",
        "Il te salue d'un coup de menton et retourne à ses mains. Tu viens de causer avec le prévôt d'Aiguemorne, et il t'a donné le plan de sa soirée en échange d'une tranche de pâté.",
      ],
      choices: [{ back: "Pv_salle" }] },
    Pv_cadenas_ko: { act: "P", title: "« Faites voir vos mains »", place: "ferronniers",
      text: [
        "Il prend du lièvre. Il regarde tes mains pendant qu'elles tiennent le plat, et il met à cela une seconde de plus qu'il ne faudrait.",
        "« Vous travaillez fin. » Sa voix est lente, sans menace. « Le pouce et l'index, là. Le cal est au bout, pas dans la paume. Horlogerie ? Gravure ? » Il attend la réponse, et tu en donnes une. Il l'écoute en mâchant son clou de girofle. « Gravure ? Possible. » Ses yeux remontent à ton visage et s'y arrêtent, posément, comme on prend une mesure.",
        "Puis il te rend le plat. Géraud Corbineau, prévôt d'Aiguemorne, dit le Cadenas, n'arrête personne pour un cal au bout du pouce. Il range seulement les visages, et la ville dit qu'il n'en a jamais égaré un.",
      ],
      choices: [{ back: "Pv_salle" }] },

    // ------------------------------------------------------------ the widow with the fan
    Pv_veuve: { act: "P", title: "La veuve Poinçon", place: "ferronniers",
      text: [
        "Dans toute fête, il y a une vieille dame assise près d'un pilier, qui a renoncé à danser vers la fin de l'autre règne et se dédommage en sachant tout. Celle-ci est la veuve d'un Maître, s'appelle Poinçon, entend mal et voit très bien. Elle t'adopte dès la deuxième phrase, faute de mieux, et te fait la visite de la salle du bout de son éventail.",
        "« Le gros en prune, c'est Quincarnon, notre Syndic. Il a la clef de Fer, et la moitié des dettes de la ville dans son tiroir. Le grand sec, là-bas, qui ne mange pas : Monseigneur de Saint-Brumaire, le Doyen des Morts. Clef de Cendre. Il enterre tout le monde et il en a pris l'air. Et celui qui bâille près de la fenêtre, avec ses bottes, c'est le comte de Brandelis, le Connétable. Clef de Sang. Il ne vient que pour la forme et repart avant le fromage. »",
        "L'éventail se referme d'un coup sec. « Voilà trente ans que ces trois-là ne se passeraient pas la salière. Eh bien, mon enfant, ils ont soupé ensemble trois fois ce mois-ci. Chez le Doyen, portes closes, les valets dehors. Ma cuisinière a la sœur de la sienne. » Elle hoche la tête. « Et sitôt passée la réception des Heures, ils quittent la ville tous les trois, chacun pour ses terres, avec sa clef au cou, jusqu'à la Nuit des Clefs. Comme tous les sept ans. Seulement, les autres fois, ils ne soupaient pas. »",
      ],
      fx: { clue: "s_soupers", ep: ["perso", 300], meet: ["calixte", "brandelis"] },
      choices: [{ back: "Pv_salle" }] },

    // ------------------------------------------------------------ the job, from the hall
    Pv_coup: { act: "P", title: "La salle, avant minuit", place: "ferronniers",
      text: [
        "Tu rentres dans la lumière. La fête a vieilli d'une heure : les perruques penchent, les voix ont grossi, et les lustres, où la cire a coulé en longues larmes, éclairent d'un jour plus jaune les mille serrures des murs. Elles, du moins, n'ont rien bu.",
        { if: { has: "monde:p:toast" }, text: "L'horloge de l'estrade marque minuit moins vingt. Tu sais ce qui vient, et tu as cinq minutes pour être où il faut.", else: "Tu ignores quand la salle regardera ailleurs. Tu t'en remets donc à l'oreille, et tu attends que quelque chose sonne." },
        { if: { has: "p:v_remarque" }, text: "Deux ou trois personnes, ce soir, t'ont regardé{e} de trop près. Tu choisis ton chemin entre les tables de façon à les garder dans le dos." },
      ],
      choices: [{ label: "À ton poste", to: PLAN("Pv_c_haut", "Pv_c_echange", "Pv_c_ruelle", "Pv_c_foire"), big: true }] },

    Pv_c_haut: { act: "P", title: "Trois cents dos", place: "ferronniers",
      text: [
        "Ton affaire, c'est la salle : que personne, pendant le temps qu'il faudra, ne se retourne vers la cloche.",
        "La fanfare éclate à la tribune. Le Syndic se lève, verre en main ; trois cents chaises raclent le parquet, et trois cents dos se présentent à la colonne drapée d'azur. « Mes chers confrères, une serrure, c'est d'abord un chiffre… »",
        "Trois cents, moins un. Au bout de la table des anciens, un très vieux Maître est resté assis, parce que ses jambes l'ont quitté avant sa curiosité. On a tourné son fauteuil vers la cloche de verre pour qu'il la voie à son aise, et il la contemple, le menton sur sa canne, avec ces yeux pâles des vieillards qui ne dorment plus. Juste au-dessus de la cloche, dans l'ombre du grand lustre, quelque chose de mince commence à descendre.",
      ],
      choices: [
        { label: "Te planter devant lui, carafe en main : « Maître, on boit à la Reine, et votre verre est vide ! »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "monde:p:toast" }, v: 15 }, { if: { has: "p:v_valet" }, v: 15 }] }, win: { fx: { flag: "monde:p:salle_tenue", ep: ["seance", 1200] }, to: "Pv_c_haut_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pv_c_haut_ko" } },
        { label: "Crier du fond de la salle : « Et la façon, Syndic ? Combien, la façon ? »", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { has: "monde:p:toast" }, v: 15 }, { if: { has: "p:v_marchand" }, v: 15 }] }, win: { fx: { flag: "monde:p:salle_tenue", ep: ["seance", 1200] }, to: "Pv_c_haut_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pv_c_haut_ko" } },
      ] },
    Pv_c_haut_ok: { act: "P", title: "Une salle bien tenue", place: "ferronniers",
      text: [
        "Cela prend. Le vieux Maître lève vers toi ses yeux pâles, trouve à leur place une carafe, un visage, du bruit, et se laisse distraire avec la docilité des très vieilles gens. Sur l'estrade, le Syndic, relancé, repart dans ses comptes d'un cœur neuf ; la salle rit, face à lui, comme un seul dos.",
        "Derrière toi, à trois pas, il y a un petit bruit de verre posé sur du velours. Tu ne te retournes pas. C'est la chose la plus difficile que tu aies faite de la soirée.",
        "Quand tu jettes enfin un coup d'œil, par-dessus une épaule, la cloche est sur son socle. Tu t'en vas avant d'avoir regardé dessous.",
      ],
      choices: [{ label: "Gagner la sortie", to: "Pv_fuite" }] },
    Pv_c_haut_ko: { act: "P", title: "« Il y a quelqu'un au lustre »", place: "ferronniers",
      text: [
        "Le vieux Maître t'écarte de sa canne, doucement, comme on écarte un rideau. Il a quatre-vingt-dix ans, il a vu vingt Serrures-Reines, et il entend regarder celle-ci.",
        "« Il y a quelqu'un au lustre », dit-il. Il le dit d'une voix de tête, cassée, qui porte. Ses voisins se penchent, rient, lui tapotent la main : le pauvre père Nicodème voit des anges, à présent. Deux ou trois têtes, pourtant, se tournent vers la colonne par acquit de conscience.",
        "Tu ignores ce qu'elles y trouvent. Tu es déjà en marche vers les portes, du pas d'une personne qui a un coche à prendre.",
      ],
      choices: [{ label: "Gagner la sortie", to: "Pv_fuite" }] },

    Pv_c_echange: { act: "P", title: "Deux pas de parquet", place: "ferronniers",
      text: [
        "La vieille serrure de la Douairière pèse contre tes côtes, sous le manteau, dans son drap. Elle a tiédi. Tu l'as calée au creux du bras, comme font les nourrices, et tu traverses la salle avec le sourire de quelqu'un qui cherche une connaissance.",
        "La fanfare éclate. Le Syndic se lève ; trois cents chaises raclent, trois cents dos se tournent. « Mes chers confrères, une serrure, c'est d'abord un chiffre… » Tu es devant le cordon de soie. Tu l'enjambes.",
        { if: { has: "monde:p:clef_chasse" }, text: "La clef que la Douairière a limée en un quart d'heure est dans ta main, encore grasse. Elle entre dans le collier de cuivre comme chez elle.", else: "Le collier de cuivre est fermé, et sa clef dort dans le poing de Maître Onfroy. Il te reste ce que tu as : une épingle, tes doigts, et le temps d'un discours." },
        "Au-dessus de toi, quelque part dans le lambris, un fil d'archal est mort ou vivant. Tu le sauras en levant la cloche.",
      ],
      choices: [
        { label: "Lever la cloche, changer une serrure pour l'autre, reposer le verre", test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ if: { has: "monde:p:clef_chasse" }, v: 20 }, { if: { has: "monde:p:toast" }, v: 15 }, { if: { has: "monde:p:ermeline" }, v: 10 }, { if: { has: "p:v_marchand" }, v: 10 }] },
          win: { fx: { set: { "monde:p:reine": "propre" }, ep: ["seance", 1500] }, to: "Pv_c_echange_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "Pv_c_echange_ko" } },
      ] },
    Pv_c_echange_ok: { act: "P", title: "Une mule pour un cheval de parade", place: "ferronniers",
      text: [
        "Le collier s'ouvre. La cloche se lève, muette, et le verre, entre tes mains, pèse moins qu'un chapeau. Tu la poses sur la draperie. La Serrure-Reine est froide comme une eau de puits ; tu la prends à deux mains, sans une secousse, tu la couches dans le drap tiède, et tu mets à sa place, sur le velours, la vieille serrure de la Douairière, bien d'aplomb, le palastre vers les lustres.",
        "La cloche redescend. Le collier se referme. Tu repasses le cordon.",
        "« … soit, à raison d'un écu le pêne, et sans compter la façon… » Le Syndic additionne. Tu traverses trois cents dos, le manteau croisé sur la poitrine, en portant contre toi une année de la vie d'une femme. Sous sa cloche, aux chandelles, la mule fait très honnêtement le cheval. Elle le fera jusqu'à ce que quelqu'un lui demande de s'ouvrir.",
      ],
      choices: [{ label: "Gagner la sortie, sans presser le pas", to: "Pv_fuite" }] },
    Pv_c_echange_ko: { act: "P", title: "Une note de cristal", place: "ferronniers",
      text: [
        "La cloche se lève. Tu as la Serrure-Reine dans le drap, la vieille serrure sur le velours, le verre de nouveau entre les mains, et c'est là, à un pouce du but, que le bord de la cloche touche le cuivre du collier.",
        "Cela donne une note. Une seule, haute, pure, de cristal heurté, qui monte sous les lustres et y reste suspendue. Ou bien c'est le timbre du lambris ; tu n'auras jamais le loisir d'en décider. Le Syndic s'arrête sur un chiffre. Une tête se tourne, puis dix, puis la salle.",
        "Il y a une personne debout dans le cordon de soie, la cloche de la Reine dans les mains. Tu la poses, de travers, sur une serrure qui n'est pas la bonne, et tu pars. Derrière toi, une voix de femme crie « Ce n'est pas elle ! » avant toutes les autres, d'un cri de mère, et la cloche d'alarme de la guilde se met à sonner.",
      ],
      choices: [{ label: "Courir vers la sortie", to: "Pv_fuite" }] },

    Pv_c_ruelle: { act: "P", title: "Le grand Amable et le petit Lubin", place: "ferronniers",
      text: [
        "Minuit moins cinq. La santé est bue, les violons ont repris, et Maître Onfroy, solennel, vient d'ouvrir le collier de cuivre. Deux valets ont couché la Serrure-Reine dans une caisse de noyer et l'emportent vers l'escalier de service, tenue par des poignées de corde, du pas court des gens qui portent du précieux. L'un est grand, avec des bras de portefaix ; l'autre petit, vif, l'œil partout.",
        "Ton affaire, ce sont ces deux-là. Dans la ruelle, tout à l'heure, il faudra qu'ils aient la tête ailleurs qu'à leur charrette.",
        "Tu les rejoins sur le palier, où il fait sombre et où la fête n'arrive plus qu'en rumeur.",
      ],
      choices: [
        { label: "« Dites, c'est vous, Amable et Lubin ? Le chef vous garde le fond du pâté de lièvre. Il dit qu'il ne le gardera pas longtemps. »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "p:v_valet" }, v: 20 }, { if: SEUL("p:v_remarque"), v: 10 }] }, win: { fx: { flag: "monde:p:valets_retenus", ep: ["seance", 1200] }, to: "Pv_c_ruelle_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pv_c_ruelle_ko" } },
        { label: "Jouer le convive égaré, très gai, qui veut absolument porter un coin de la caisse", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "p:v_marchand" }, v: 15 }, { if: { has: "p:v_musicien" }, v: 15 }] }, win: { fx: { flag: "monde:p:valets_retenus", ep: ["seance", 1200] }, to: "Pv_c_ruelle_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Pv_c_ruelle_ko" } },
      ] },
    Pv_c_ruelle_ok: { act: "P", title: "Deux valets qui pensent au souper", place: "ferronniers",
      text: [
        "Cela prend, parce qu'ils sont debout depuis l'aube et qu'on parle à leur ventre. Ils descendent l'escalier en discutant, tu descends avec eux, et à la porte de la cour le petit Lubin en est déjà à calculer ce qui restera du lièvre si les marmitons passent les premiers.",
        "« On charge, on revient, dit le grand. Trente pas. »",
        "« Trente pas, avec Gros-Martin. Compte un quart d'heure. »",
        "Ils lèvent la barre et sortent, la caisse entre eux, la tête tournée vers les cuisines. Tu restes dans la cour, à écouter. De la ruelle viennent un bruit de moraillon, un pas de mulet, et deux voix qui s'éloignent en parlant de moutarde.",
      ],
      choices: [{ label: "Regagner la salle, et de là la sortie", to: "Pv_fuite" }] },
    Pv_c_ruelle_ko: { act: "P", title: "Un valet qui a de la religion", place: "ferronniers",
      text: [
        "Le petit sourit. Le grand, lui, pose son coin de caisse, et te regarde de haut en bas avec la gravité d'un bedeau.",
        "« On porte la Reine. On cause pas quand on porte la Reine. » Il reprend sa poignée de corde. « Et l'escalier de service, c'est pour le service. »",
        "Ils descendent. Tu les entends lever la barre, en bas, et le grand dire au petit, d'une voix qui remonte toute la cage : « T'as vu comme on nous tourne autour ? Ouvre l'œil jusqu'au trésor. » Il n'y a plus rien à faire ici que de souhaiter bonne chance à la ruelle.",
      ],
      choices: [{ label: "Regagner la salle, et de là la sortie", to: "Pv_fuite" }] },

    Pv_c_foire: { act: "P", title: "La foire, vue du parquet", place: "ferronniers",
      text: [
        "Tu as ton personnage, ton aplomb et ton idée. La fanfare éclate, le Syndic se lève, la salle se tourne ; tu enjambes le cordon de soie avec l'autorité d'un officier de la guilde, et tu mets les deux mains sur la cloche. Si quelqu'un se retourne, tu as ta phrase prête : *ordre de Maître Onfroy, on la descend avant le discours.*",
        "Personne ne se retourne. C'est d'en haut que vient la surprise. Une corde tombe du plafond, dans l'ombre du grand lustre, et s'arrête à une coudée de ton nez. Quelqu'un que tu connais descend le long de cette corde. Par la porte des cuisines, restée ouverte, monte de la ruelle un bruit de sabots et de dispute.",
        "Vous êtes trois à voler la même serrure, à la même minute. La cloche est déjà dans tes mains, et un timbre, quelque part dans le mur, vient de se mettre à sonner.",
      ],
      choices: [
        { label: "Arracher la nappe d'une table, y rouler la Reine, et crier « Au feu ! » pour faire bonne mesure", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "monde:p:ermeline" }, v: 10 }, { if: SEUL("p:v_remarque"), v: 10 }] }, win: { fx: { flag: "monde:p:foire_voix", ep: ["seance", 1200] }, to: "Pv_c_foire_ok" }, lose: { fx: { pv: -3, ep: ["seance", 600] }, to: "Pv_c_foire_ko" } },
      ] },
    Pv_c_foire_ok: { act: "P", title: "« Au feu ! »", place: "ferronniers",
      text: [
        "« Au feu ! » est un mot admirable. Dans une salle où brûlent quatre lustres et où l'on a bu depuis huit heures, il fait en une seconde ce qu'aucun plan n'aurait obtenu : trois cents personnes regardent le plafond, puis les portes, puis leurs voisins, et plus une seule ne regarde le socle.",
        "La Serrure-Reine est dans la nappe. Ce qui suit appartient à la confusion : une corde qui remonte, une porte qui bat, des bras amis, une course. Tu la tiens ; un instant plus tard tu ne la tiens plus, ou bien tu cours avec ; et de toute cette soirée, c'est le seul point sur lequel vos trois récits ne s'accorderont jamais.",
      ],
      choices: [{ label: "Courir vers la sortie", to: "Pv_fuite" }] },
    Pv_c_foire_ko: { act: "P", title: "La nappe", place: "ferronniers",
      text: [
        "La nappe vient. Ce qui était dessus vient aussi : un surtout d'argent, deux carafes, une oie presque entière, qui s'abattent sur le parquet avec un fracas de fin du monde et te valent, de la part d'un Maître juré, un coup de chandelier sur l'épaule.",
        "Tu roules quand même quelque chose dans le linge, à tâtons, au milieu des cris. Une main te l'arrache, ou te la prend, tu ne sais ; la corde remonte ; le timbre sonne ; la cloche d'alarme de la guilde lui répond. Tu sors de la mêlée à quatre pattes, entre des bas de soie, avec le sentiment très net que la soirée t'a échappé.",
      ],
      choices: [{ label: "Courir vers la sortie", to: "Pv_fuite" }] },

    // ------------------------------------------------------------ out of the hall
    Pv_fuite: { act: "P", title: "Quatre portes", place: "ferronniers",
      text: [
        "Il reste à sortir. La salle a quatre portes : le perron, la tribune des violons, l'escalier des jurés, et les cuisines.",
        "Près de la grande porte, un homme trapu en habit marron s'est adossé au chambranle, les bras croisés. Il ne regarde plus les mains. Il regarde les gens qui s'en vont.",
        { if: { has: "p:v_portes" }, text: "Tu sais où sont ses hommes : deux à chaque porte, sauf aux cuisines, où le chef ne les souffre pas." },
        { if: { has: "monde:p:cadenas_vu" }, text: "Il a déjà pris la mesure de ton visage, tout à l'heure, au buffet. Mieux vaut qu'il n'ait pas à la reprendre." },
      ],
      urgent: 25,
      choices: [
        { label: "Par les cuisines, où le guet n'a pas mis de casaque", if: { has: "p:v_portes" }, why: "Personne ne t'a dit quelles portes étaient gardées.", fx: { ep: ["perso", 400] }, to: "Pv_fuite_cuisines" },
        { label: "Par le perron, devant lui, en saluant", test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "monde:p:cadenas_vu" }, v: -20 }, { if: { has: "p:v_remarque" }, v: -10 }] }, win: { fx: { ep: ["perso", 300] }, to: "Pv_fuite_perron" }, lose: { fx: { flag: "monde:p:cadenas_vu", pv: -1 }, to: "Pv_fuite_ko" } },
        { label: "Par la première porte de service qui se présente", timeout: true, test: { dom: "discretion", diff: 10, label: "Discrétion", help: [{ if: { has: "p:v_valet" }, v: 15 }] }, win: { fx: { ep: ["perso", 300] }, to: "Pv_fuite_cuisines" }, lose: { fx: { flag: "monde:p:cadenas_vu", pv: -1 }, to: "Pv_fuite_ko" } },
      ] },
    Pv_fuite_cuisines: { act: "P", title: "Entre un chef et ses sauces", place: "ferronniers",
      text: [
        "Les cuisines des Maîtres sont une forge où l'on aurait remplacé le fer par du beurre. Tu les traverses dans la vapeur, entre des broches qui tournent et des marmitons qui dorment debout ; le chef, écarlate, te crie quelque chose où il est question de sa crème, et tu lui donnes raison sans ralentir.",
        "La porte de derrière bat sur ses gonds. La ruelle aux Cendres t'accueille avec son pavé gras, sa lanterne unique et son air de février. Tu respires. Tu rends ton personnage à la nuit, pièce à pièce, en marchant : d'abord la voix, puis la démarche, et le visage en dernier.",
      ],
      choices: [{ label: "Descendre aux Bas-Fonds", to: "Pc_retour", big: true }] },
    Pv_fuite_perron: { act: "P", title: "Devant le Cadenas", place: "ferronniers",
      text: [
        "Tu passes devant lui. Tu salues, d'un doigt au chapeau ou d'un mot, comme saluent les gens qui ont bien dîné. Il te rend le salut d'un coup de menton, et son regard glisse déjà vers le suivant.",
        "Le vestibule, le dais, le perron. Les deux casaques bleues s'écartent pour te laisser descendre. L'air du dehors te frappe le front comme une serviette mouillée, et tu t'aperçois, à la troisième marche, que tes genoux avaient attendu d'être dehors pour trembler.",
      ],
      choices: [{ label: "Descendre aux Bas-Fonds", to: "Pc_retour", big: true }] },
    Pv_fuite_ko: { act: "P", title: "Une manche", place: "ferronniers",
      text: [
        "« Un instant. »",
        "La main qui se pose sur ta manche est large, courte, sans brutalité. L'homme en habit marron sent le clou de girofle. « Vous partez ? On part beaucoup, depuis une minute. » Il te regarde bien en face, posément, et tu vois dans ses yeux ton propre visage qu'on range.",
        "Derrière vous, quelqu'un renverse un guéridon, une dame s'évanouit dans les bras d'un juré, et la main, une seconde, se desserre. Tu n'en demandes pas davantage. Tu laisses dans ses doigts un bouton du père Balthazar, et tu es dans la rue avant qu'il ait fini de dire « Sergent ».",
      ],
      choices: [{ label: "Dévaler vers les Bas-Fonds", to: "Pc_retour", big: true }] },
  },

  extras: {
    clues: {
      r_syndic: { rev: "R", text: "Le soir de la Saint-Fer, le Syndic a ordonné à son colosse, Ugolin, de monter le lendemain « à la nuit close » chez le Remonteur Balancier, lui « reprendre ce qu'il a emporté » de son cabinet." },
      s_soupers: { rev: "S", text: "La veuve Poinçon : les trois Clavaires, brouillés depuis trente ans, ont soupé ensemble trois fois ce mois-ci chez le Doyen, portes closes. Ils quittent la ville après la réception des Heures, chacun avec sa clef." },
    },
  },
};
