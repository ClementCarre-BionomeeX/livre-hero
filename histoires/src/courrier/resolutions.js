// Ce que devient chaque genre de carte, à chaque halte. Une scène par type de chemin, valable aux trois haltes
// (resout: { type }) : un paragraphe par halte (tag halte), un par carte quand la carte précise ce qui arrive (tag
// carte), et la manière de s'en tirer selon l'enseigne de la carte jouée (tag enseigne sur les choix). Chaque scène a
// aussi une issue sans jet. Les deux suites (réussite, échec) ramènent sur la route (« @suite »).
var ROUTE = [
  { label: "Reprendre la route", halte: ["gue", "col"], to: "@suite" },
  { label: "Passer la porte de Vèze", halte: "porte", to: "@suite" },
];
var ROUTE_SEULE = [{ label: "Reprendre la route", to: "@suite" }];
var OK = { ep: ["perso", 200] }, RETARD = { clock: { retard: 1 }, note: "Tu as perdu du temps." };
function test(dom, label) { return { dom: dom, label: label }; }

module.exports = {
  // ---------------------------------------------------------------- Rencontre
  R_rencontre: { title: "Quelqu'un sur la route", resout: { type: "rencontre" },
    text: [
      { halte: "gue", text: "Sur la berge, près des pieux, quelqu'un attend que l'eau baisse, assis sur une borne, et surveille la rivière comme un créancier surveille la porte d'un débiteur." },
      { halte: "col", text: "Contre le mur de la chapelle, à l'abri du vent, quelqu'un s'est fait un nid de couvertures et souffle sur un feu de brindilles qui fume plus qu'il ne chauffe." },
      { halte: "porte", text: "Dans la file, juste devant toi, quelqu'un se retourne, te détaille de la tête aux bottes, et décide visiblement que tu mérites la conversation." },
      { carte: "inconnu_manteau", text: "C'est un homme en manteau sombre, le col relevé jusqu'aux yeux, qui parle bas et sourit trop. Il veut savoir d'où tu viens. Il le demande trois fois, de trois façons différentes." },
      { carte: "colporteur", text: "C'est un colporteur, la hotte de bois sur le dos, chargé d'aiguilles, de rubans et d'almanachs de l'an passé. Il parle comme d'autres respirent, et dans le flot surnagent les nouvelles de la marche : les prix, les mariages, les pendus, et ce que le conseil de Vèze votera dimanche." },
    ],
    choices: [
      { label: "Le faire parler en restant vague sur toi-même", enseigne: "masque", test: test("social", "Social"), win: { fx: OK, to: "R_rencontre_ok" }, lose: { fx: RETARD, to: "R_rencontre_ko" } },
      { label: "Lui acheter un almanach, et l'écouter vider son sac", enseigne: "lanterne", test: test("savoir", "Savoir"), win: { fx: OK, to: "R_rencontre_ok" }, lose: { fx: RETARD, to: "R_rencontre_ko" } },
      { label: "Le saluer et passer ton chemin", to: "R_rencontre_passe" },
    ] },
  R_rencontre_ok: { title: "Ce qu'on apprend en écoutant", fx: { elan: 1 },
    text: [
      "Tu laisses venir les mots, et dans le flot il y en a un qui vaut le détour : sur la route de Vèze, quelqu'un pose des questions sur les courriers d'Orbec, et il paie les réponses en argent blanc.",
      "Tu sais désormais qu'on te cherche. C'est une mauvaise nouvelle, et un avantage.",
    ],
    choices: ROUTE },
  R_rencontre_ko: { title: "Une heure perdue",
    text: [
      "La conversation tourne comme une meule, et elle te broie une heure entière. Quand tu t'en dégages, tu as appris le prix du seigle dans trois vallées, et ton interlocuteur a appris ton nom, ta route et l'heure de ton départ.",
    ],
    choices: ROUTE },
  R_rencontre_passe: { title: "Un salut, et rien de plus",
    text: ["Tu salues d'un signe de tête et tu continues. Derrière toi, la voix se tait un moment, puis reprend avec le suivant. Sur une route, les bavards ont toujours un suivant."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Obstacle
  R_obstacle: { title: "Le passage barré", resout: { type: "obstacle" },
    text: [
      { halte: "gue", carte: "pont_emporte", text: "La passerelle des piétons, en amont du gué, a cédé dans la nuit. Il en reste deux piles de pierre et, entre elles, l'eau qui gronde, avec des planches qui tournent dans les remous comme des feuilles mortes." },
      { halte: "col", carte: "pont_emporte", text: "Sous le col, le chemin franchit un torrent sur deux troncs liés de corde. Les troncs sont là ; la corde a lâché, et l'un des deux pend dans le vide, retenu par une racine." },
      { halte: "porte", carte: "pont_emporte", text: "Le pont-levis de Vèze s'est bloqué à mi-course, une chaîne sautée de sa poulie. Une planche jetée en travers du fossé sert de passage aux plus pressés, et les gardes regardent qui se risque." },
      { carte: "peagers", text: "Une perche en travers du chemin, trois hommes autour d'un brasero, et un tarif qui change selon la tête du voyageur. L'un d'eux te détaille, puis annonce : « Quatre sous. » Le marchand de bois, juste avant toi, en a payé un." },
    ],
    choices: [
      { label: "Passer en force", enseigne: "lame", test: test("combat", "Combat"), win: { fx: OK, to: "R_obstacle_ok" }, lose: { fx: { pv: -2, clock: { retard: 1 } }, to: "R_obstacle_ko" } },
      { label: "Trouver la faille et passer sans payer", enseigne: "masque", test: test("discretion", "Discrétion"), win: { fx: OK, to: "R_obstacle_ok" }, lose: { fx: RETARD, to: "R_obstacle_ko" } },
      { label: "Payer, ou attendre que le passage se libère", to: "R_obstacle_attente" },
    ] },
  R_obstacle_ok: { title: "De l'autre côté",
    text: ["Un geste juste, au bon moment, et tu es de l'autre côté, avec tes bottes, ton pli et ta dignité. Les deux premiers comptent davantage."],
    choices: ROUTE },
  R_obstacle_ko: { title: "Le prix du passage",
    text: [
      "Tu passes, mais en y laissant du temps, de la peau, et une part de ton amour-propre. Tu vérifies le pli : il est sec, il est entier. Toi, moins.",
    ],
    choices: ROUTE },
  R_obstacle_attente: { title: "Attendre son tour", fx: { clock: { retard: 1 }, gold: -1 },
    text: ["Tu paies un sou, ou tu attends ; souvent les deux. Le passage s'ouvre enfin, avec la lenteur des choses qui savent qu'on n'a pas le choix."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Détour
  R_detour: { title: "Un autre chemin", resout: { type: "detour" },
    text: [
      { halte: "gue", text: "Le gué est noyé. Mais en amont, la rive porte des traces : le passage d'un troupeau, ou de gens qui préfèrent les endroits sans passeur." },
      { halte: "col", text: "La route du col fait un long lacet sur la gauche. À droite, droit dans la pente, un sentier part entre deux rochers, à peine marqué." },
      { halte: "porte", text: "La file avance au pas. Le long du rempart, une ruelle de tanneurs longe le fossé et finit, d'après l'odeur, quelque part où l'on travaille sans demander de laissez-passer." },
      { carte: "sentier_chevres", text: "Des chèvres y sont passées ce matin ; elles ont laissé des crottes rondes et la certitude qu'il y a un chemin. Les chèvres sont d'excellentes topographes, et de mauvaises guides." },
      { carte: "raccourci", text: "Un bout de chiffon rouge noué à une branche marque le départ. Les contrebandiers balisent leurs chemins pour eux-mêmes, et pour personne d'autre." },
    ],
    choices: [
      { label: "Suivre les traces des bêtes", enseigne: "racine", test: test("nature", "Nature"), win: { fx: { ep: ["perso", 200], elan: 1 }, to: "R_detour_ok" }, lose: { fx: RETARD, to: "R_detour_ko" } },
      { label: "Prendre le raccourci sans te faire voir", enseigne: ["masque", "lame", "lanterne"], test: test("discretion", "Discrétion"), win: { fx: { ep: ["perso", 200], elan: 1 }, to: "R_detour_ok" }, lose: { fx: RETARD, to: "R_detour_ko" } },
      { label: "Rester sur la route connue", to: "R_detour_reste" },
    ] },
  R_detour_ok: { title: "Le chemin des connaisseurs",
    text: ["Le détour tient ses promesses : il est raide, sale, et court. Tu retrouves la route bien plus loin que tu ne l'espérais, avec de l'avance sur ta propre journée."],
    choices: ROUTE },
  R_detour_ko: { title: "Le chemin qui tourne en rond",
    text: ["Le sentier se divise, se redivise, et finit contre une paroi, ou contre un mur, ou contre un chien qui garde une cour. Tu reviens sur tes pas avec le sentiment d'avoir été berné{e} par une chèvre."],
    choices: ROUTE },
  R_detour_reste: { title: "La route connue",
    text: ["Tu restes sur la route. Elle est longue, elle est sûre, et elle a pour elle la vertu des choses ennuyeuses : on sait où elle mène."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Refuge (pas à la porte)
  R_refuge: { title: "Un toit", resout: { type: "refuge" },
    text: [
      { halte: "gue", carte: "grange", text: "Sur la rive, une grange de ferme, la porte entrouverte, du foin jusqu'aux poutres. Personne dans la cour. Le chien dort, ou fait semblant, ce qui revient au même pour toi." },
      { halte: "col", carte: "grange", text: "Sous le col, une bergerie de pierre sèche, au toit de lauzes, avec une litière de fougères et un reste de chaleur animale." },
      { halte: "gue", carte: "auberge", text: "Près du gué, une auberge à l'enseigne de trois clous rouillés, où l'on attend la décrue en buvant. Il y a un feu, une soupe, et une salle pleine de gens qui parlent fort." },
      { halte: "col", carte: "auberge", text: "Au pied du col, une auberge de muletiers s'accroche à la pente ; elle porte trois clous plantés sur sa porte en guise d'enseigne. Le feu y brûle, la soupe y épaissit, et les muletiers y racontent la montagne." },
    ],
    choices: [
      { label: "Dormir dans le foin, la main sur le pli", enseigne: "racine", fx: { pv: 4, elan: 1 }, to: "R_refuge_repos" },
      { label: "Faire semblant de dormir, et écouter la salle", enseigne: ["lanterne", "masque", "lame"], test: test("savoir", "Savoir"), win: { fx: { ep: ["perso", 250], elan: 1 }, to: "R_refuge_ok" }, lose: { fx: { pv: 2 }, to: "R_refuge_repos" } },
    ] },
  R_refuge_repos: { title: "Une heure de sommeil",
    text: ["Tu dors d'un sommeil de pierre, sans rêve, et tu te réveilles reposé{e}, avec une paille dans l'oreille et le pli à sa place."],
    choices: ROUTE_SEULE },
  R_refuge_ok: { title: "Ce qu'on dit à la veillée",
    text: ["Dans la conversation, une phrase te réveille tout à fait : un homme a payé pour qu'on lui signale tout courrier portant la cire d'Orbec. Tu gardes les yeux fermés, et tu retiens la voix."],
    choices: ROUTE_SEULE },

  // ---------------------------------------------------------------- Révélation
  R_revelation: { title: "Une parole de trop", resout: { type: "revelation" },
    text: [
      { halte: "gue", text: "Près des pieux, deux bateliers discutent en ramendant un filet, sans voir que la rivière porte leurs voix jusqu'à toi." },
      { halte: "col", text: "Dans la chapelle sans toit, deux muletiers se sont mis à l'abri du vent, et le vent, qui n'a aucun respect, t'apporte leur conversation." },
      { halte: "porte", text: "Sous la voûte de la porte, deux gardes parlent de la séance du conseil en croyant que la file ne les entend pas." },
      "L'un d'eux dit un nom, puis un chiffre : celui qui paiera, et combien, pour que le conseil vote contre Orbec.",
    ],
    choices: [
      { label: "Retenir chaque mot", enseigne: ["lanterne", "masque"], test: test("savoir", "Savoir"), win: { fx: { ep: ["perso", 250], elan: 1 }, to: "R_revelation_ok" }, lose: { to: "R_revelation_ko" } },
    ] },
  R_revelation_ok: { title: "Un nom à garder",
    text: ["Le nom est celui d'un conseiller de Vèze, le chiffre celui d'une fortune modeste. Tu les gardes pour toi. Un courrier qui sait ce qu'on achète à Vèze marche plus droit."],
    choices: ROUTE },
  R_revelation_ko: { title: "Des mots emportés",
    text: ["Le vent tourne, une charrette passe, et les mots se perdent. Tu gardes un chiffre sans nom, ce qui vaut à peu près le prix d'un almanach de l'an passé."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Trésor (pas à la porte)
  R_tresor: { title: "Une bourse", resout: { type: "tresor" },
    text: [
      { halte: "gue", text: "Accrochée à un pieu, à fleur d'eau, une sacoche de cuir oscille dans le courant. Son propriétaire l'a perdue au passage, ou l'a laissée là pour quelqu'un." },
      { halte: "col", text: "Au pied de la croix, sous une pierre plate posée de travers, quelque chose brille : une bourse, dans une niche creusée exprès." },
      "Elle est pleine. Ou presque.",
    ],
    choices: [
      { label: "La prendre sans que personne te voie", enseigne: ["masque", "lame", "lanterne", "racine"], test: test("discretion", "Discrétion"), win: { fx: { gold: 5, ep: ["perso", 150] }, to: "R_tresor_ok" }, lose: { fx: { gold: 2, clock: { retard: 1 } }, to: "R_tresor_ko" } },
      { label: "La laisser où elle est", to: "R_tresor_laisse" },
    ] },
  R_tresor_ok: { title: "Cinq sous de mieux",
    text: ["Cinq sous d'argent, et une médaille de pèlerin. Le pèlerin aura prié pour rien, et toi, tu as gagné sans prier."],
    choices: ROUTE_SEULE },
  R_tresor_ko: { title: "Un témoin",
    text: ["Tu as la bourse en main quand un berger surgit du brouillard et crie au voleur. Tu lui en laisses la moitié pour qu'il se taise, et tu perds une heure à le convaincre de garder l'autre moitié du secret."],
    choices: ROUTE_SEULE },
  R_tresor_laisse: { title: "L'honnêteté",
    text: ["Tu laisses la bourse. L'honnêteté est une vertu qui ne rapporte rien sur le moment, et c'est précisément ce qui la distingue des autres."],
    choices: ROUTE_SEULE },

  // ---------------------------------------------------------------- Péril (pas à la porte)
  R_peril: { title: "Le danger", resout: { type: "peril" },
    text: [
      { halte: "gue", text: "Au bord de l'eau, la nuit tombe d'un coup, et dans les saules, sur l'autre rive, deux yeux s'allument, puis deux autres, puis encore deux." },
      { halte: "col", text: "Dans le grésil, entre les rochers, des formes grises avancent par bonds courts, en éventail, avec la méthode d'une compagnie de sergents qui encercle une taverne." },
      { carte: "heure_payer", text: "Quelque chose te suit. Tu le sens dans ta nuque avant de l'entendre, et quand tu te retournes, les loups sont là, trois, maigres comme des procès." },
      { carte: "loups", text: "Les loups de l'hiver ont faim, et ils ont le temps. Ils te suivent à distance égale, chaque fois que tu te retournes." },
    ],
    choices: [
      { label: "Faire face, le bâton levé", enseigne: ["lame", "racine"], test: test("combat", "Combat"), win: { fx: { ep: ["perso", 300] }, to: "R_peril_ok" }, lose: { fx: { pv: -4 }, to: "R_peril_ko" } },
      { label: "Fuir, droit devant", to: "R_peril_fuite" },
    ] },
  R_peril_ok: { title: "La meute recule",
    text: ["La meute hésite, recule, et se fond dans le gris. Tu restes un long moment immobile, le cœur battant à grands coups, à compter les ombres. Elles ne reviennent pas."],
    choices: ROUTE_SEULE },
  R_peril_ko: { title: "Des crocs",
    text: ["Tu t'en sors, avec une morsure au mollet et une manche en lambeaux. Le pli est intact. Ta jambe, beaucoup moins."],
    choices: ROUTE_SEULE },
  R_peril_fuite: { title: "La fuite", fx: { clock: { retard: 1 }, pv: -1 },
    text: ["Tu cours, tu tombes, tu te relèves, tu cours encore, et tu t'arrêtes quand ton souffle t'y oblige. La meute a abandonné ; la route aussi, d'ailleurs. Tu la retrouves au prix d'une heure."],
    choices: ROUTE_SEULE },

  // ---------------------------------------------------------------- Présage (pas à la porte)
  R_presage: { title: "Un signe", resout: { type: "presage" },
    text: [
      { halte: "gue", text: "Sur la borne du gué, un corbeau s'est posé. Il te regarde arriver, la tête penchée, puis il regarde l'eau, puis encore toi, et il croasse une seule fois." },
      { halte: "col", text: "Sur le bras de la croix, une corneille plus grosse que les autres se tient immobile au milieu de la querelle générale, et elle te fixe de son œil rond." },
      "On dit dans la marche que ces oiseaux voient le chemin avant les voyageurs. On dit beaucoup de choses dans la marche.",
    ],
    choices: [
      { label: "Lire le signe", enseigne: ["lanterne", "masque", "lame", "racine"], test: test("savoir", "Savoir"), win: { fx: { ep: ["perso", 200], elan: 2 }, to: "R_presage_ok" }, lose: { to: "R_presage_ko" } },
      { label: "Hausser les épaules", to: "R_presage_ko" },
    ] },
  R_presage_ok: { title: "Le chemin vu d'en haut",
    text: ["L'oiseau s'envole vers l'aval, et en suivant son vol tu remarques ce qui t'avait échappé : l'endroit où le terrain est sûr, l'endroit où il ment. Tu repars avec une confiance qui ressemble à de l'élan."],
    choices: ROUTE_SEULE },
  R_presage_ko: { title: "Un oiseau, voilà tout",
    text: ["L'oiseau s'envole. C'était un oiseau. Tu repars, un peu vexé{e} d'avoir attendu un message d'un volatile."],
    choices: ROUTE_SEULE },

  // ---------------------------------------------------------------- Allié
  R_allie: { title: "Une main tendue", resout: { type: "allie" },
    text: [
      { halte: "gue", text: "Une femme descend vers le gué avec un troupeau de chèvres, et elle te regarde hésiter devant l'eau avec l'indulgence qu'on réserve aux citadins." },
      { halte: "col", text: "Une bergère remonte vers le col avec ses bêtes, enveloppée dans une cape de feutre raide comme une guérite, un bâton ferré à la main." },
      { halte: "porte", text: "Une femme du marché, un panier sous le bras, remarque ta boue, ta fatigue et le cachet qui dépasse de ta veste, et elle fait un signe de tête vers une poterne." },
      { carte: "bergere", halte: ["gue", "col"], text: "Elle connaît chaque pierre de cette montagne, dit-elle, et le prix de chacune. Le prix, ce soir, c'est que tu portes une chèvre boiteuse jusqu'au prochain enclos." },
    ],
    choices: [
      { label: "Accepter son aide, et payer son prix", enseigne: ["racine", "lame", "lanterne", "masque"], test: test("nature", "Nature"), win: { fx: { ep: ["perso", 200], elan: 1 }, to: "R_allie_ok" }, lose: { fx: RETARD, to: "R_allie_ko" } },
      { label: "La remercier, et continuer seul{e}", to: "R_allie_seul" },
    ] },
  R_allie_ok: { title: "Le bon chemin",
    text: ["Elle te mène par où elle seule passe, et elle te laisse à l'endroit exact où la route reprend, avec un conseil sur les gens de Vèze que tu n'oublieras pas : « Ils votent comme ils mangent. Avec le plus offrant. »"],
    choices: ROUTE },
  R_allie_ko: { title: "Une chèvre de trop",
    text: ["La chèvre boiteuse pèse le poids d'un remords, et elle bêle sans interruption. L'aide promise arrive, mais au bout d'une heure de détour."],
    choices: ROUTE },
  R_allie_seul: { title: "Seul{e}",
    text: ["Tu remercies et tu continues seul{e}. Elle hausse les épaules. Les gens de la montagne ont l'habitude des voyageurs qui préfèrent se perdre par eux-mêmes."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Trahison
  R_trahison: { title: "Un faux ami", resout: { type: "trahison" },
    text: [
      { halte: "gue", text: "Le passeur de l'autre rive te fait signe : il te prendra dans sa barque, pour un sou, et il t'offre même une gorgée d'eau-de-vie pour le froid." },
      { halte: "col", text: "Un muletier t'invite sous la bâche de sa charrette, te tend son outre, et te demande, entre deux histoires de mules, où va un courrier si pressé." },
      { halte: "porte", text: "Un sergent du guet sort de la file, te prend familièrement par le bras, et te dit qu'il connaît un passage pour les gens de la margrave." },
      { carte: "couteau", text: "Sa main serre ton épaule un peu trop fort, et de l'autre côté, sous sa cape, quelque chose de dur et d'étroit se tient prêt." },
      { carte: "faux_ami", text: "Il est aimable. Il est trop aimable : l'amabilité a un prix, et tu viens de comprendre qui le paiera." },
    ],
    choices: [
      { label: "Le laisser parler, et ne rien boire", enseigne: ["racine", "masque", "lame", "lanterne"], test: test("social", "Social"), win: { fx: { ep: ["perso", 250] }, to: "R_trahison_ok" }, lose: { fx: { clock: { retard: 1 }, gold: -2 }, to: "R_trahison_ko" } },
    ] },
  R_trahison_ok: { title: "Démasqué",
    text: ["Tu vois venir le piège à temps : un compère attendait un peu plus loin, pour la bourse ou pour le pli. Tu changes de côté, de rythme et de chemin. Les deux compères restent avec leur plan sur les bras."],
    choices: ROUTE },
  R_trahison_ko: { title: "Délesté{e}",
    text: ["Tu te réveilles, ou tu te relèves, la tête lourde et la bourse plus légère. Le pli, lui, est toujours contre ta poitrine. Le voleur cherchait de l'argent. Il a eu de la chance, et toi davantage."],
    choices: ROUTE },
};
