// Le Douzième Coup · chapter 12, the one who stays, second half (act IV, night of 20 June 601). The Palais of two
// households: the physician's pavilion (`r:anthelme_eveille`; with `monde:aelis_ecorce` the nineteen doses: item
// `decoction_fievrier`, `monde:decoction`, `r:sait_dix_neuf`; else `r:anthelme_nom`, `monde:ecorce_pavillon`), the
// gallery (`r:vu_dessin`, `r:entendu_acheteurs`), the Librairie (`r:sait_coutume`, `r:fulbert_eveille`,
// `r:sait_signer` : present means able to sign), the closed wing (captain Hardouin there unless
// `monde:hardouin_tour` : `r:hardouin_eveille`), the room of candles (`monde:pendule_aelis`), the oratory and the
// Queen's glass (`r:vu_echelons` : twenty-two rungs on the south face, the seventh missing ; the Queen one step
// from the window). The Régente's quarter of an hour (`r:audience` | `r:audience_manquee`) : the vellum
// (`r:lettres_montrees`, `monde:lettres_produites`), the cold pinch (`r:prise_montree`), the engraver's bill
// (`r:memoire_montre`), words (`r:mots_dits`) → `r:regente_alliee` + `monde:regente_alliee`. The ordinance of the
// Conseil de garde (item `ordonnance_garde`; `r:signe_porteur|signe_anthelme|signe_hardouin`; two hands out of
// three → `monde:ordonnance_garde`). At midnight the white cloaks stop standing (`r:blancs_eveilles`) and the
// black ones walk in : the Régente out by the garden (`monde:regente_libre`), staying knowingly
// (`monde:regente_dedans`) or held (`monde:regente_tenue`) ; `r:coup_entendu` ; the stair is black for everyone
// (`r:tour_noire`). Then Saint-Gnomon-le-Vieux and B12.
var P = {};
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var UNE_PINCEE = { stock: "sable", min: 3 };
var CONNU = { any: [{ has: "r:regente_parle" }, { has: "r:regente_depeche" }] };
var ECORCE = { has: "monde:aelis_ecorce" };
var VELIN = { item: "lettres_patentes_vieilles" };
var ORD = { item: "ordonnance_garde" };
var PORTEUR = { all: [{ has: "monde:garde_porteur" }, { not: { has: "monde:garde_coudrier" } }] };
var CAPITAINE_ICI = { not: { has: "monde:hardouin_tour" } };
var ALLIEE = { has: "r:regente_alliee" };
var FX_ALLIEE = ["r:regente_alliee", "monde:regente_alliee"];
var MAIN_A = { any: [{ has: "r:signe_porteur" }, { has: "r:signe_hardouin" }] };
var MAIN_H = { any: [{ has: "r:signe_porteur" }, { has: "r:signe_anthelme" }] };
var PORTE_TENUE = { any: [{ has: "r:blancs_eveilles" }, { has: "r:haudoin_averti" }] };

Object.assign(P, {
  K12r_tantot: { act: "IV", title: "Un soir fait à la main", place: "palais", ambiance: "chateau",
    text: [
      "Tu refermes le Cahier. Tu remets les trois pieds de thym dans leur terre, et tu tasses avec la paume, à la façon de ceux qui n'ont jamais jardiné.",
      { if: VELIN, text: "Le vélin est sur le bronze. Il a jauni, il casse aux plis, et tu l'ouvres avec deux doigts. La cire a bruni comme du vieux sang ; la femme assise y est entière, une horloge sur les genoux. Tu tiens un acte de la reine Mahaut que soixante ans de Régence ont ignoré, et qui sent le thym." },
      { if: { all: [VELIN, PORTEUR] }, text: "Tu le lis avec le doigt. Un capitaine, un médecin. Puis une ligne où manque un nom : *et pour tiers, la personne, quelle qu'elle soit, qui produira ces présentes, le sceau entier.* Tu regardes autour de toi. Il y a dans ce jardin un arrosoir, deux tortues et toi." },
      { if: { all: [VELIN, { has: "monde:garde_coudrier" }] }, text: "Tu le lis avec le doigt. Un capitaine, un médecin, et un troisième nom, de la même encre que les autres : *Barnabé Coudrier.* Le royaume crache sur ce nom depuis soixante ans. La veille, sa Reine l'écrivait dans des lettres de garde." },
      "Derrière les tilleuls, le dernier volet de l'Orangerie s'est fermé. Par une porte de service, on entend battre une pendule : huit coups, petits, argentins. C'est le premier timbre vivant de cette colline.",
      { with: "jehan", text: "Jehan regarde les volets. « Ils font la nuit. On nous disait, à la caserne, que la Cour dormait ici comme chez elle. Elle y dort comme au théâtre. »" },
    ],
    choices: [{ label: "Entrer par la porte de service", to: "K12r_palais", big: true }] },

  K12r_palais: { act: "IV", title: "La maison de deux reines", backName: "le Palais", place: "palais", ambiance: "chateau", hub: true, fx: { stock: { sable: -1 } },
    text: [
      { first: true, text: "Le Palais de Méridane loge ce soir deux maisons. Celle de la Reine est sortie à onze heures, le vingt et un juin 541, pour une fête d'une heure ; elle a laissé ceux qui gardent, ceux qui cuisent et ceux qui lisent. Celle de la Régente arrive de Port-Régent avec ses lits, et campe dans les intervalles." },
      { first: true, text: "Les deux se croisent sans se voir. Un valet de 601 pose un chandelier sur une console de 541, près d'une main gantée qui allait y prendre un éventail. On a appris aux pages à s'asseoir ailleurs que sur les genoux des dormants : c'est toute l'étiquette de la soirée." },
      { first: true, text: "La pendule de voyage bat dans l'Orangerie. On l'entend de partout, par les portes ouvertes, comme un cœur qu'on aurait posé sur une table." },
      { again: true, before: "K12r_coucher", text: "Le Palais des deux maisons, ses cierges, ses volets clos. La pendule bat." },
      { again: true, after: "K12r_coucher", text: "Le Palais dort à midi, cierges soufflés. Le jour passe sous les portes. La pendule bat." },
      { first: true, with: "rouget", text: "Rouget marche les mains dans le dos, pour qu'on voie bien qu'il ne touche à rien. « Y a de l'argenterie de 541 sur toutes les tables, souffle-t-il, et des gens de 601 qui la comptent tous les ans. C'est le seul endroit de la Dormante où y a rien à glaner. Ça fait drôle. »" },
    ],
    choices: [
      { label: "Le pavillon du médecin, au fond des Simples", to: "K12r_anthelme" },
      { label: "La galerie des Heures, où la Cour se promène", to: "K12r_galerie" },
      { label: "La Librairie de la Reine", to: "K12r_fulbert" },
      { label: "L'aile aux volets clos, derrière un cordon de soie", to: "K12r_aile" },
      { label: "L'office, où l'on soupe", hide: { seen: "K12r_office" }, to: "K12r_office" },
      { label: "L'Orangerie : la pendule va dire dix heures", hide: { seen: "K12r_coucher" }, to: "K12r_coucher", big: true },
      { label: "Les tilleuls : attendre que la pendule dise minuit", to: "K12r_minuit", big: true },
    ] },

  // --- the physician ---
  K12r_anthelme: { act: "IV", title: "Le pavillon du néant", backName: "le pavillon", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "Le pavillon est au fond des Simples, sous un sureau : une pièce carrée, des bocaux, un fourneau de brique, et trois cahiers empilés dont le premier s'intitule *Du néant, et de ce qu'on en tire.*" },
      { first: true, text: "Maître Anthelme est resté. Tout le Palais est allé entendre midi ; lui se tient devant son fourneau, en bras de chemise, une montre dans la main gauche, et ses lèvres sont arrêtées sur un chiffre." },
      { first: true, if: ECORCE, text: "Sur le fourneau, un poêlon de cuivre. La flamme se tient droite dessous, bleue, et elle éclaire sans chauffer : tu passes la main au-dessus comme au-dessus d'une image. Dans le poêlon, une eau brune, épaisse, qui sent l'amer. Sur la table, vingt et une fioles en rang, étiquetées de sa main, de *I* à *XXI*. Les deux premières sont vides, rincées, retournées sur un linge." },
      { first: true, if: ECORCE, text: "Une écorce est entrée dans cette maison par une manche, il y a deux jours et soixante ans. Elle est là, bouillie. Une enfant en a bu deux prises sur vingt et une, et le coup a arrêté le compte." },
      { first: true, if: { not: ECORCE }, text: "Le fourneau est froid, le poêlon retourné sur un clou. Sur la table, il y a une ordonnance commencée : *Pour Madame Aélis. Lait d'ânesse. Repos.* La plume est restée en l'air après *repos.* C'est l'ordonnance d'un homme honnête, arrivé au bout de ce qu'il sait." },
      { again: true, text: "Le pavillon, ses bocaux, le médecin debout devant son fourneau, la montre dans la main." },
      { again: true, after: "r:signe_anthelme", text: "Sur la table, à côté des cahiers, l'encre de son paraphe a fini de sécher." },
    ],
    choices: [
      { label: "Poser une pincée sur la main qui tient la montre", hide: { any: [{ has: "r:anthelme_eveille" }, { not: ECORCE }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:anthelme_eveille", "r:sait_dix_neuf", "monde:decoction"], item: "decoction_fievrier", ep: ["histoire", 700] }, to: "K12r_anthelme_eveil" },
      { label: "Poser une pincée sur la main qui tient la montre", hide: { any: [{ has: "r:anthelme_eveille" }, ECORCE] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:anthelme_eveille", "r:anthelme_nom"], ep: ["histoire", 500] }, to: "K12r_anthelme_eveil" },
      { label: "L'éveiller, le vélin dans une main et l'ordonnance dans l'autre", hide: { any: [{ not: ORD }, { has: "r:signe_anthelme" }, { not: MAIN_A }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:signe_anthelme", "monde:ordonnance_garde"], ep: ["histoire", 800] }, to: "K12r_signe_anthelme" },
      { label: "L'éveiller, le vélin dans une main et l'ordonnance dans l'autre", hide: { any: [{ not: ORD }, { has: "r:signe_anthelme" }, MAIN_A] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:signe_anthelme", ep: ["histoire", 500] }, to: "K12r_signe_anthelme" },
      { back: "K12r_palais" },
    ] },

  K12r_anthelme_eveil: { act: "IV", title: "Deux sur vingt et une", place: "palais", ambiance: "chateau",
    text: [
      "La montre fait un tic. Il lève les yeux, et la première chose qu'il regarde, c'est le blanc des tiens. Il te prend le poignet sans demander, deux doigts sur la veine, et il compte, les lèvres closes.",
      "« Vous battez juste, et la pièce bat lente. » Il te lâche. Il a la voix sèche d'un homme qui dit non pour gagner du temps. « Ou c'est moi qui bats lent. Parlez vite : vous avez l'air de quelqu'un qui paie au grain. »",
      "Tu parles vite. Onze coups. Soixante ans. La petite, là-haut, prise avec sa mère.",
      { if: ECORCE, text: "Il regarde les deux fioles retournées. « Deux sur vingt et une. Le coup l'a arrêtée à deux. » Il fait le calcul comme on prend un pouls. « Si l'on rend ce coup, elle repart d'où elle s'est arrêtée : au matin du second jour, avec la quinzaine que je lui donnais. Il lui faut dix-neuf prises, et elle a quinze jours. Cela se joue, à condition qu'on ne perde pas une heure à me chercher. »" },
      { if: ECORCE, text: "Il vide le poêlon dans un flacon de verre brun, le bouche, le roule dans un linge, et te le met dans les mains. Il est froid comme l'eau d'un puits. « Dix-neuf prises. Une cuillerée à prime, à jeun. Les quatre premiers jours, une seconde à vêpres. Elle rendra. Qu'on la laisse rendre. Quand cela repartira, vous serez plus près d'elle que moi : je serai planté ici comme une bûche, à regarder ma montre. »" },
      { if: { all: [ECORCE, { has: "r:promesse_brindille" }] }, text: "Il te regarde tenir le flacon. « Vous en avez une autre. Cela se voit aux mains. Quel âge ? » Quatre ans. « La demi-cuillerée. Et de l'eau sucrée derrière : à quatre ans, on ne boit l'amer que pour faire plaisir à quelqu'un. »" },
      { if: { not: ECORCE }, text: "« On en guérit », dis-tu. Tu donnes le nom : l'écorce de fièvrier, bouillie, trois semaines. Chez toi, toutes les mères le savent." },
      { if: { not: ECORCE }, text: "Il ferme les yeux. « Un arbre. C'était un arbre. J'ai rempli trois cahiers sur le néant, et c'était un arbre. » Il prend la plume restée en l'air, et il écrit le mot au bas de l'ordonnance, après *repos*, en grosses lettres, pour un homme qui le relira un jour avec ses yeux d'aujourd'hui." },
      "Sa main ralentit sur la montre. « Elle a entendu les onze ? » Tu dis oui. « Alors elle sait compter jusqu'à onze. C'est toujours cela d'appris. » Il a repris sa figure de midi, les lèvres sur un chiffre.",
    ],
    choices: [
      { label: "Laisser ton écorce à côté du poêlon", hide: { any: [ECORCE, { not: { item: "ecorce_fievrier" } }, { has: "monde:ecorce_pavillon" }] }, fx: { flag: "monde:ecorce_pavillon", ep: ["perso", 400] }, to: "K12r_anthelme_ecorce" },
      { back: "K12r_palais" },
    ] },

  K12r_anthelme_ecorce: { act: "IV", title: "À côté du poêlon", place: "palais", ambiance: "chateau",
    text: [
      "Tu en casses la moitié. Tu la poses sur la table, à côté du poêlon retourné, sous le mot qu'il vient d'écrire.",
      "C'est une écorce rousse, roulée, qui vient des îles par le port du duc. Elle a soixante ans de retard sur cette table. Quand un médecin rouvrira les yeux, il aura devant lui le nom et la chose, et il lui restera à allumer son feu.",
      "Tu gardes l'autre moitié. Tu connais une enfant de quatre ans qui y a droit aussi.",
    ],
    choices: [{ back: "K12r_palais" }] },

  K12r_signe_anthelme: { act: "IV", title: "Un paraphe de médecin", place: "palais", ambiance: "chateau",
    text: [
      "Tu poses la pincée. Tu lui mets sous les yeux, avant toute question, le vélin et sa cire brune.",
      "Il lit comme il tâte : vite, aux endroits qui comptent. Il trouve son nom dans des lettres de la Reine, après celui d'un capitaine. « Elle m'a mis dans un Conseil. Sans me le dire. C'était la seule façon de m'y faire entrer. »",
      "Il lit l'ordonnance. *L'escalier de la Tour à la garde blanche. Le sable de la Maîtrise sous le scellé. Le sieur Aubespin répondra de sa personne.* Il s'arrête sur le nom. « Il vit donc. Les gens de cette espèce ont la vie dure : ils la prennent aux autres. »",
      "Il trempe la plume. « J'ai dit non à cet homme pendant trois mois, de vive voix, dans des antichambres. On me donne l'occasion de l'écrire. » Il signe, d'un paraphe de médecin, illisible et définitif.",
      { after: "monde:ordonnance_garde", text: "Deux mains sur trois. Le Conseil de garde du royaume d'Aurime vient de rendre sa première ordonnance, dans un pavillon de jardin, soixante ans après qu'une reine l'a nommé." },
      { before: "monde:ordonnance_garde", text: "Une main sur trois. Il en faut deux, et la pincée coule." },
      "« Ne me remerciez pas. Rendez-moi mon midi. » La plume reste dans ses doigts. Il regarde de nouveau sa montre.",
    ],
    choices: [{ back: "K12r_palais" }] },

  // --- the gallery ---
  K12r_galerie: { act: "IV", title: "De la Première à la Onzième", backName: "la galerie", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "Elle a soixante pas, des vitres sur le jardin, qu'on a fermées de volets pour la nuit de la Cour, et douze tapisseries en face : les rois d'Aurime y ont fait tisser les Heures." },
      { first: true, text: "La Cour de la Reine s'y promenait de la Première à la Onzième, et retour. Trois de ses gentilshommes y sont restés, en habits de couleur, arrêtés au milieu d'un salut qu'ils se faisaient avant de sortir." },
      { first: true, text: "La Cour de la Régente s'y promène ce soir, aux cierges, en blanc. Elle va de la Première à la Onzième, et elle tourne. Soixante ans, trois Régents, une catastrophe : on tourne au même endroit. On contourne les trois gentilshommes sans les regarder, comme on contourne des fauteuils." },
      { first: true, text: "Sous les tentures, les valets dressent des lits de camp. Une douairière a retenu la Quatrième : elle y dort tous les ans, la tête sous un saint qui tient une équerre." },
      { again: true, text: "La galerie, ses douze tentures, les lits de camp. La Cour tourne à la Onzième." },
    ],
    choices: [
      { label: "La douzième tenture, où personne ne va", to: "K12r_tenture" },
      { label: "Écouter ce qui se dit entre la Troisième et la Quatrième", hide: { seen: "K12r_galerie_dit" }, fx: { flag: ["r:entendu_acheteurs", "r:sait_acheteurs"], ep: ["histoire", 400] }, to: "K12r_galerie_dit" },
      { back: "K12r_palais" },
    ] },

  K12r_tenture: { act: "IV", title: "L'heure qu'il est quand je dors", place: "palais", ambiance: "chateau", fx: { flag: "r:vu_dessin", ep: ["perso", 300] },
    text: [
      "Elle a son cadre de chêne doré, pareil aux onze autres. Dedans, une toile grise, unie, tendue avec soin. Les tisserands des rois avaient commande de douze pièces, et ils en ont livré douze.",
      "Au bas du cadre, à trois pieds du sol, une feuille de papier est épinglée. C'est un dessin au charbon, d'une main d'enfant : un rond, et dans le rond deux aiguilles très longues, qui dépassent. Le tour du cadran est blanc. Dessous, d'une écriture qui penche et grossit vers la fin de la ligne : *L'heure qu'il est quand je dors.*",
      "Le charbon a gardé tout son noir. Les valets de la Reine époussetaient autour ; ceux de la Régente font de même, depuis soixante ans, sans savoir de qui est la feuille. On leur a dit que c'était là, et ce qui est là, dans cette maison, y reste.",
      "Elle dort depuis soixante ans, à l'heure exacte de son dessin.",
      { after: "K06r_lison", text: "Tu connais une autre enfant qui dort, à Roquebise, derrière une porte bleue. Celle-là n'a rien dessiné : on ne lui a pas laissé de papier, ni de veille." },
    ],
    choices: [{ back: "K12r_galerie" }] },

  K12r_galerie_dit: { act: "IV", title: "Quels gens ?", place: "palais", ambiance: "chateau",
    text: [
      "Ils sont deux, arrêtés sous sainte Aure à son rouet : un duc à joue de page, et la douairière en amazone, qui s'évente. Ils parlent bas, par habitude plus que par prudence. À la Cour, on parle bas des choses agréables.",
      "« Midi moins le quart, donc. Dans la salle basse.",
      "— Il assure que cela se fera sans bruit. On ne sentira rien. On apporte son sablier, on dîne, et quand on remonte... » Elle ferme son éventail. « Quand on remonte, Gontran, il y a quoi ?",
      "— Il y a tout, ma chère, et qui ne bouge plus. Vous vous plaigniez de n'avoir jamais le loisir de relire. Vous l'aurez. Nous aurons le temps : c'est même la seule chose qu'on nous vende.",
      "— Et les gens ? »",
      "Le duc a un petit rire, très jeune. « Quels gens ? »",
      "Ils se remettent en marche, vers la Onzième. Tu restes sous le rouet de la sainte. Tu viens d'entendre deux personnes arranger leur après-dînée de demain, et le monde entier y tenait dans un mot de deux syllabes, dit en riant.",
      { after: "K12r_liste", text: "Tu as lu ces deux noms ce soir, sur une feuille réglée, dans la plus belle ronde. En face du sien, il y avait *soixante-dix.* En face de celui de la dame, *quarante-cinq.*" },
    ],
    choices: [{ back: "K12r_galerie" }] },

  // --- the Librairie ---
  K12r_fulbert: { act: "IV", title: "Le titre neuvième", backName: "la Librairie", place: "palais", ambiance: "chateau", fx: { flag: "r:sait_coutume", ep: ["histoire", 300] },
    text: [
      { first: true, text: "Trois mille volumes, une échelle à roulettes, et, sur l'échelle, un vieux moine à lunettes, un livre ouvert dans une main, l'autre tendue vers un rayon. Tout le Palais est à la fête. Un bibliothécaire reste : c'est le seul jour de l'année où personne ne lui dérange ses livres." },
      { first: true, if: { has: "monde:lettres_garde" }, text: "Sur le lutrin, au milieu de la pièce, un in-folio est resté ouvert. Quelqu'un l'a consulté la veille, et le moine l'a laissé là, pour le plaisir de le voir servir. *Coutume d'Aurime. Titre neuvième. De l'empêchement du Prince.*" },
      { first: true, if: { not: { has: "monde:lettres_garde" } }, text: "Tu cherches, le long des dos, ce qui fait une Régente. Tu lis mieux les bâtons que les rondes ; il te faut le temps de deux psaumes pour trouver un in-folio de veau brun, *Coutume d'Aurime*, et dans l'in-folio un titre : *De l'empêchement du Prince.*" },
      { first: true, text: "Trois articles. Tu les lis avec le doigt." },
      { first: true, text: "*Premier. Si le Prince est empêché de corps ou d'esprit, le gouvernement revient au premier Prince de son sang, qui prend titre de Régent.* C'est celui qu'on récite depuis soixante ans sur un parvis." },
      { first: true, text: "*Second. Sauf si le Prince, étant en son sens, a nommé par lettres signées de sa main et scellées du grand sceau un Conseil de garde de trois personnes à son choix ; auquel cas le Conseil gouverne.*" },
      { first: true, text: "*Tiers. Les lettres vaudront en quelque temps qu'on les produise, pourvu que le sceau en soit entier.*" },
      { first: true, if: VELIN, text: "Tu as le *sauf si* contre la poitrine, plié en quatre, et il sent le thym." },
      { again: true, text: "La Librairie, le moine sur son échelle, la Coutume ouverte au titre neuvième." },
    ],
    choices: [
      { label: "Poser une pincée sur la main tendue vers le rayon", hide: { has: "r:fulbert_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:fulbert_eveille", "r:sait_signer"], ep: ["histoire", 600] }, to: "K12r_fulbert_eveil" },
      { back: "K12r_palais" },
    ] },

  K12r_fulbert_eveil: { act: "IV", title: "Qui tient une plume", place: "palais", ambiance: "chateau",
    text: [
      "Il achève son geste : il range le livre. Puis il baisse ses lunettes vers toi, du haut de l'échelle, sans surprise. Un homme qui vit avec trois mille morts bavards s'étonne peu d'un vivant.",
      "« On ne vient plus. La Reine lisait. Vous cherchez ? »",
      "Tu lui poses ta question, la seule que tu aies : un Conseil dont les membres dorment peut-il ordonner quelque chose.",
      "« Titre dixième, article quatre. *Le Conseil ordonne à la majorité de ses membres présents.* » Il descend deux barreaux. « Et *présent,* dans notre droit, a un sens très étroit. Il veut dire : *qui peut signer.* On l'a jugé sous le roi fou, pour un chancelier qui avait la goutte aux deux mains. Un homme qui tient une plume est présent. La Coutume ne s'est jamais souciée de savoir combien de temps il la tient. »",
      { if: { has: "monde:lettres_garde" }, text: "Il te regarde par-dessus ses verres, de ses yeux très clairs. « Hier, quelqu'un m'a posé une question de l'air de connaître la réponse à une autre. Vous avez le même air, avec des sabots. Je ne demande rien. »" },
      { if: { not: { has: "monde:lettres_garde" } }, text: "Il te regarde par-dessus ses verres, de ses yeux très clairs. « Vous posez cela comme quelqu'un qui aimerait avoir un Conseil dans sa poche. Je ne demande rien. »" },
      "Sa main ralentit sur le barreau. « Dites-moi seulement si elle lit encore. »",
      "Tu dis que la Reine est debout, là-haut, depuis soixante ans. Il hoche la tête, lentement, de plus en plus lentement. « Alors elle n'a pas fini son livre. Je lui garde la page. »",
    ],
    choices: [{ back: "K12r_palais" }] },

  // --- the closed wing ---
  K12r_aile: { act: "IV", title: "Celle qui garde une porte", backName: "l'aile close", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "Un cordon de soie blanche barre le corridor. La Régence l'a tendu il y a soixante ans, et chaque année un chambellan vient en vérifier le nœud. Les gens de la Régente s'arrêtent là. Tu l'enjambes." },
      { first: true, text: "L'antichambre sent la cire, pour qui marche. Une femme de cinquante ans y est assise sur un tabouret, droite, en gris perle, les mains l'une sur l'autre, devant une porte à deux battants. {autre} te l'a écrite d'une ligne : *une femme qui garde une porte.*" },
      { first: true, text: "La porte est ouverte derrière elle. La Reine est sortie par là à onze heures. Sa dame d'honneur est restée garder le vide : on ne lui avait donné que cet ordre, et une dame d'honneur garde ce qu'on lui confie, fût-ce un courant d'air." },
      { first: true, if: CAPITAINE_ICI, text: "Devant le second battant, un homme en buffle se tient debout, l'épée nue, la pointe au parquet. Cinquante ans, une nuque de bœuf, la moustache coupée au ciseau. À ses pieds, un lit de sangle, plié. Le capitaine des archers garde la porte de sa souveraine, qui a passé devant lui il y a une heure et soixante ans." },
      { first: true, if: { not: CAPITAINE_ICI }, text: "Contre le second battant, il y a un lit de sangle, plié au carré, une couverture dessus. L'homme qui couchait là en travers est à un autre poste : {autre} te l'a écrit." },
      { again: true, text: "L'antichambre, la dame en gris perle, la porte ouverte sur l'appartement vide." },
    ],
    choices: [
      { label: "La chambre aux cierges", to: "K12r_cierges" },
      { label: "L'oratoire", to: "K12r_oratoire" },
      { label: "Poser une pincée sur le poing du capitaine", hide: { any: [{ not: CAPITAINE_ICI }, { has: "r:hardouin_eveille" }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:hardouin_eveille", meet: "hardouin", ep: ["histoire", 500] }, to: "K12r_hardouin_eveil" },
      { label: "Éveiller le capitaine sur la cire de sa Reine, l'ordonnance à la main", hide: { any: [{ not: CAPITAINE_ICI }, { not: ORD }, { has: "r:signe_hardouin" }, { not: MAIN_H }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:signe_hardouin", "monde:ordonnance_garde"], ep: ["histoire", 800] }, to: "K12r_signe_hardouin" },
      { label: "Éveiller le capitaine sur la cire de sa Reine, l'ordonnance à la main", hide: { any: [{ not: CAPITAINE_ICI }, { not: ORD }, { has: "r:signe_hardouin" }, MAIN_H] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:signe_hardouin", ep: ["histoire", 500] }, to: "K12r_signe_hardouin" },
      { back: "K12r_palais" },
    ] },

  K12r_hardouin_eveil: { act: "IV", title: "Ici", place: "palais", ambiance: "chateau",
    text: [
      "Le poing se resserre sur la garde. L'épée monte d'un pied, et s'arrête à ta gorge avec une exactitude qui fait honneur au bras. « Qui vive. » Il le dit sans y mettre de question.",
      "Tu dis qui vit, en trois phrases : la cloche, les onze coups, les soixante ans. Tu dis que la Reine est là-haut, avec l'enfant, et qu'elle y est encore.",
      "Il baisse l'épée d'un pouce. Il réfléchit avec lenteur et sans détour, comme on passe un gué. « Elle a passé à onze heures. Elle m'a dit : *Hardouin, ici.* J'avais demandé trente archers au pied de la Tour. On m'a répondu : l'usage. » Il regarde le gris sur son buffle. « Soixante ans de faction. On me doit une relève. »",
      "« Je suis bête. Elle me l'a dit devant témoins, et elle avait raison. Un homme bête, à qui l'on dit *ici,* reste ici. Dites-moi *là-bas.* Dites-le-moi de sa part, avec quelque chose de sa main, et j'irai. »",
      "La pincée s'épuise. Il le sent : il a l'instinct des gens qu'on relève. Il fait alors une chose que tu ne lui demandais pas. Il pivote sur ses talons, d'un quart de tour, lourdement, et il se plante face au corridor, face à la cour, face à la Tour qu'on devine par une fente de volet.",
      "« Quand cela repartira, dit-il, je serai déjà tourné du bon côté. C'est une seconde de gagnée. »",
    ],
    choices: [{ back: "K12r_aile" }] },

  K12r_signe_hardouin: { act: "IV", title: "Des lettres de soldat", place: "palais", ambiance: "chateau",
    text: [
      "Tu poses la pincée, et tu lui mets la cire sous les yeux avant l'acte. Il regarde la femme assise. Il ôte son gant pour toucher le bord du sceau, du pouce, comme on touche une relique.",
      "« C'est sa main qui a appuyé. Elle appuie de travers, à gauche. Je l'ai vue sceller mon brevet. »",
      { before: "r:hardouin_eveille", text: "Tu lui dis le reste pendant qu'il regarde : les onze coups, les soixante ans, la Reine là-haut. Il écoute sans lever les yeux de la cire. Un homme à qui sa souveraine a dit *ici* croit ce qu'on lui montre de sa main." },
      "Il lit l'ordonnance en remuant les lèvres. *L'escalier de la Tour à la garde blanche.* « La garde blanche, c'est qui ? » Tu dis : ceux qui gardent la Reine, à présent. « Alors c'est moi. »",
      "Il signe. Une croix d'abord, par habitude de caserne ; puis son nom, en lettres de soldat, qui penchent toutes du même côté comme une troupe en marche.",
      { after: "monde:ordonnance_garde", text: "Deux mains sur trois. Le Conseil de garde du royaume d'Aurime vient de rendre sa première ordonnance, dans une antichambre, soixante ans après qu'une reine l'a nommé, sous l'œil d'une dame d'honneur qui garde un courant d'air." },
      { before: "monde:ordonnance_garde", text: "Une main sur trois. Il en faut deux." },
      "« Elle dit *là-bas*, cette fois. » Il rend la plume. Il regarde vers la Tour, et il reste ainsi.",
    ],
    choices: [{ back: "K12r_aile" }] },

  K12r_cierges: { act: "IV", title: "La chambre aux cierges", backName: "la chambre", place: "palais", ambiance: "chateau", fx: { flag: "r:vu_cierges" },
    text: [
      { first: true, text: "Il y en a quarante, sur un grand cercle de fer pendu par trois chaînes, qu'un valet faisait tourner d'une corde pour qu'aucune ombre ne se fixe. Le valet est à la fête. Le cercle s'est arrêté. Les quarante flammes se tiennent droites, sans une larme de cire, et les ombres ont eu soixante ans pour choisir leur place : chaque meuble a la sienne, nette, à sa gauche, comme un habit posé." },
      { first: true, text: "Tu passes les doigts dans une flamme. Elle les éclaire jusqu'à l'os, et elle les laisse froids." },
      { first: true, text: "Le lit est petit, défait d'un seul côté. Le creux d'une tête est resté dans l'oreiller. Une poupée de chiffon est assise contre le traversin, face à la porte, dans la pose de quelqu'un à qui l'on a dit d'attendre." },
      { first: true, if: ECORCE, text: "Sur la table de nuit, une tasse, une cuiller, et au fond de la tasse un doigt d'eau brune." },
      { first: true, if: { not: ECORCE }, text: "Sur la table de nuit, un verre de lait d'ânesse, plein jusqu'au bord." },
      { first: true, text: "Contre le mur, une pendule. On l'a arrêtée exprès, à la main, bien avant le coup : le balancier est noué d'un ruban bleu, serré, d'une main de grande personne. {autre} te l'a écrit, de la bouche de l'enfant : *je ne veux pas qu'on m'arrête comme la pendule.*" },
      { again: true, before: "monde:pendule_aelis", text: "Les quarante flammes droites, le petit lit, la poupée qui attend. La pendule au ruban bleu." },
      { again: true, after: "monde:pendule_aelis", text: "Les quarante flammes droites, le petit lit, la poupée qui attend. Le balancier pend, libre, dans sa boîte." },
    ],
    choices: [
      { label: "Dénouer le ruban bleu", hide: { has: "monde:pendule_aelis" }, fx: { flag: "monde:pendule_aelis", ep: ["perso", 400] }, to: "K12r_ruban" },
      { back: "K12r_aile" },
    ] },

  K12r_ruban: { act: "IV", title: "Un ruban bleu", place: "palais", ambiance: "chateau",
    text: [
      "Le nœud est double. Tu y mets les ongles, puis les dents. Le ruban vient.",
      "Le balancier pend dans sa boîte, libre, immobile. Rien ne bat dans cette chambre. Mais si la ville repart, cette pendule-là repartira avec elle ; et une enfant qui rentrera ici l'entendra de la porte.",
      "Tu plies le ruban, et tu le mets dans la main de la poupée.",
    ],
    choices: [{ back: "K12r_aile" }] },

  K12r_oratoire: { act: "IV", title: "L'oratoire", backName: "l'oratoire", place: "palais", ambiance: "temple",
    text: [
      { first: true, text: "C'est un cabinet de six pas : un prie-Dieu, une veilleuse rouge dont la flamme se tient droite, une petite croisée dont le volet est resté ouvert. Sur le prie-Dieu, au lieu d'un livre, des papiers." },
      { first: true, if: { has: "monde:reine_renonce" }, text: "Celui du dessus est un brouillon, d'une grande écriture droite. *Maître Aubespin. Je vous l'ai dit hier au soir, et vous m'avez répondu que tout était prêt. Je l'écris, pour que ce soit écrit. Je monte entendre midi avec ma fille, les douze coups, et rien d'autre. Je vous retire ma commission du douze.* Un bâton de cire verte est à côté, entamé. Elle a scellé le net, et elle l'a emporté là-haut, pour le lui mettre dans la main." },
      { first: true, if: { not: { has: "monde:reine_renonce" } }, text: "Celui du dessus est une liste, d'une grande écriture droite. *À monter : la couverture blanche. La poupée. Le livre d'Heures. De l'eau.* Puis, d'une encre plus appuyée : *Lui dire que c'est un jeu.*" },
      { first: true, if: { has: "monde:lettres_garde" }, text: "Le coffret du prie-Dieu est ouvert. Le grand sceau y est couché dans son velours : un disque d'or large comme une soucoupe, à manche d'ébène. Un peu de cire rouge est restée dans le creux de l'horloge. Il sert trois fois l'an ; cette année-là, il a servi une quatrième." },
      { first: true, if: { not: { has: "monde:lettres_garde" } }, text: "Le coffret du prie-Dieu est fermé à clef. La clef est montée à la Tour, au cou d'une femme." },
      { first: true, text: "Devant la croisée, sur un pied de cuivre, une lunette d'approche, longue d'un bras. Elle est braquée vers le haut." },
      { again: true, text: "L'oratoire, la veilleuse droite, les papiers du prie-Dieu. La lunette regarde toujours en l'air." },
    ],
    choices: [
      { label: "Mettre l'œil à la lunette", hide: { has: "r:vu_echelons" }, fx: { flag: "r:vu_echelons", ep: ["histoire", 700] }, to: "K12r_lunette" },
      { back: "K12r_aile" },
    ] },

  K12r_lunette: { act: "IV", title: "À un pas de la croisée", place: "palais", ambiance: "temple",
    text: [
      "Tu colles l'œil au cuivre. Il faut un moment pour comprendre ce qu'on voit, parce que c'est très près et très haut : de la pierre blonde, un joint, une coulure de fiente. La Reine avait réglé ce verre sur un point, et personne n'y a touché depuis.",
      "C'est une fenêtre. Haute, étroite, à petits carreaux, sous une corniche. Derrière les carreaux, un pas en retrait, il y a une forme noire, debout, un bras levé vers la crémone. À hauteur de sa hanche, quelque chose de blanc.",
      "Tu restes là, l'haleine arrêtée. {autre} t'a écrit une femme à une croisée, qui tendait une enfant aux douze coups comme on tend à boire. Tu regardes la même femme, un jour et soixante ans plus tard, à une autre croisée. Elle allait ouvrir. Il lui manquait un coup.",
      "Tu fais glisser le tube, d'un doigt. La face du midi descend dans le verre. La place ne la voit pas ; le Palais seul l'a devant lui. Sous la fenêtre, la pierre porte des barreaux de fer, scellés de pied en pied, rouges de rouille. Ils partent de la galerie du grand cadran, frôlent le tableau de la fenêtre, et montent jusqu'aux abat-sons de la cloche. C'est le chemin des couvreurs.",
      "Tu comptes vingt-deux échelons. À la place du septième, il y a deux trous.",
    ],
    choices: [{ back: "K12r_aile" }] },

  K12r_office: { act: "IV", title: "Douze chapons", place: "palais", ambiance: "chateau", fx: { pv: 3 },
    text: [
      "Il y a deux cuisines dans la même. Celle de 541 a sa broche : douze chapons, dorés d'un seul côté, un marmiton la main sur la manivelle, et dessous un feu debout, qui éclaire les lèchefrites et les laisse froides. Celle de 601 s'est installée à l'autre bout, avec des réchauds à esprit-de-vin, et elle sert le souper de la Cour.",
      "Le premier officier de bouche d'Aurime regarde tous les ans, depuis soixante ans, douze chapons qu'il lui est défendu de servir. On raconte qu'un de ses prédécesseurs en est mort, sous le second Régent, de chagrin professionnel.",
      "Une fille de vaisselle te met une écuelle dans les mains sans te regarder : dans une maison où l'on nourrit trois cents personnes en une heure, quiconque a des sabots est de la maison. C'est un bouillon de 601, chaud, avec du pain dedans.",
      { with: "rouget", text: "Rouget a vidé la sienne, et il considère la broche. « Soixante ans de cuisson, dit-il, et ils sont pas trop cuits. » Il soupire. « Je touche pas. J'ai dit que je touchais pas. Mais je regarde. »" },
      { with: "carillon", text: "Carillon s'est arrêté devant le marmiton de 541. « Carillon connaît ce garçon. Il venait chercher l'heure à la loge, pour le rôt. Il s'appelle Guillot. Il était toujours en retard. » La tête ronde pivote. « Il ne l'est plus. »" },
    ],
    choices: [{ back: "K12r_palais" }] },

  // --- the Régente ---
  K12r_coucher: { act: "IV", title: "La nuit de Son Altesse", place: "palais", ambiance: "chateau",
    text: [
      "Dix heures sonnent à la pendule de voyage : dix coups petits, argentins, pressés, l'heure d'une ville où il fait nuit.",
      "La Cour est rangée dans la grande salle de l'Orangerie, entre les caisses des orangers, en fleur depuis soixante ans, et qu'on sent en marchant. Un chambellan frappe le dallage d'une canne d'ivoire. « La nuit de Son Altesse. »",
      "Quarante valets soufflent quarante cierges, ensemble. C'est très bien fait. Dans le noir, la Cour d'Aurime se souhaite le bonsoir à midi, puis gagne ses lits de camp le long de la galerie, entre les dormants. Une marquise accroche son éventail au coude d'un valet de 541. Elle en a l'habitude : il le lui tient tous les ans.",
      "Au fond de la salle, sous une porte, il reste un fil de lumière.",
    ],
    choices: [
      { label: "Suivre le page, qui t'attend derrière un oranger", hide: { not: { has: "r:regente_attend" } }, fx: { flag: "r:audience" }, to: "K12r_audience", big: true },
      { label: "Suivre la ronde du sergent Haudoin jusqu'à cette porte", hide: { any: [{ not: { has: "r:haudoin_averti" } }, { has: "r:regente_attend" }] }, fx: { flag: "r:audience" }, to: "K12r_audience", big: true },
      { label: "Gagner le fil de lumière, de caisse en caisse", hide: { any: [{ has: "r:haudoin_averti" }, { has: "r:regente_attend" }] }, test: { dom: "discretion", diff: 5, label: "Traverser quarante orangers dans le noir", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "heurier" }, v: 5 }, { if: CONNU, v: 10 }] },
        win: { fx: { flag: "r:audience" }, to: "K12r_audience" }, lose: { fx: { flag: "r:audience_manquee" }, to: "K12r_coucher_rate" } },
      { label: "Laisser la Régente à sa nuit", to: "K12r_palais" },
    ] },

  K12r_coucher_rate: { act: "IV", title: "Les placets, c'est le matin", place: "palais", ambiance: "chateau",
    text: [
      "Une caisse sonne sous ton sabot. Dans le noir, une main te prend au collet, sans colère : c'est un manteau blanc, et il fait cela tous les ans à quelqu'un.",
      "« Les placets, c'est le matin, à la grille. » Il te reconduit jusqu'aux tilleuls, et il te lâche avec une bourrade de père de famille.",
      "Quand tu te retournes, le fil de lumière, sous la porte, s'est éteint.",
    ],
    choices: [{ back: "K12r_palais" }] },

  K12r_audience: { act: "IV", title: "Un quart d'heure", backName: "la Régente", place: "palais", ambiance: "chateau", hub: true, fx: { meet: "odeline" },
    text: [
      { first: true, text: "Elle est assise à une table de camp, en robe de chambre blanche, les cheveux défaits, devant la pendule de voyage. Elle a gardé un seul cierge. Autour d'elle, les orangers de la Reine tiennent leurs fleurs." },
      { first: true, text: "« Mon médecin m'ordonne un quart d'heure de solitude par jour. C'est celui-ci. Je le prends à dix heures, quand ils me croient couchée. » Elle a la voix nette des gens qu'on écoute depuis l'enfance, avec plusieurs nuits de fatigue par-dessus." },
      { first: true, after: "r:regente_depeche", text: "Sur la table, il y a un papier plié en huit, qu'on a déplié si souvent qu'il se sépare aux plis. Tu reconnais l'ordre du neuf juin. « Je l'ai relu chaque soir. Je le sais par cœur. Et tout à l'heure, à la grille, je suis descendue de cheval du mauvais côté. C'est tout ce que j'ai trouvé. On fait la guerre qu'on peut. »" },
      { first: true, after: "r:regente_parle", before: "r:regente_depeche", text: "« Vous êtes de Roquebise. Je vous ai demandé un papier. J'en demande à tout le monde ; vous êtes la première personne qui revienne. »" },
      { first: true, if: { not: CONNU }, text: "« Je ne vous connais pas. On entre chez moi d'oranger en oranger : c'est nouveau, et cela me repose des huissiers. Vous avez un quart d'heure, moins ce que j'en ai pris. Gâtez-le utilement. »" },
      { again: true, text: "La table de camp, le cierge, la pendule. Elle attend la suite." },
    ],
    choices: [
      { label: "Poser sur la table le vélin de la reine Mahaut", hide: { any: [{ not: VELIN }, { has: "r:lettres_montrees" }] }, fx: { flag: ["r:lettres_montrees", "monde:lettres_produites"].concat(FX_ALLIEE), ep: ["histoire", 1000] }, to: "K12r_aud_lettres" },
      { label: "Ouvrir la main sur ta prise froide", hide: { any: [{ not: { item: "prise_froide" } }, { has: "r:prise_montree" }] }, fx: { flag: ["r:prise_montree"].concat(FX_ALLIEE), stock: { sable: 3 }, ep: ["histoire", 500] }, to: "K12r_aud_prise" },
      { label: "Lui tendre le mémoire du graveur Thomassin", hide: { any: [{ not: { item: "memoire_graveur" } }, { has: "r:memoire_montre" }] }, fx: { flag: ["r:memoire_montre"].concat(FX_ALLIEE), ep: ["histoire", 500] }, to: "K12r_aud_memoire" },
      { label: "Lui dire qui est l'homme en gris de la grille", hide: { has: "r:mots_dits" }, test: { dom: "social", diff: 10, label: "Faire croire une chose incroyable", help: [{ if: { has: "r:vu_vairons" }, v: 10 }, { if: { has: "r:regente_doute" }, v: 15 }, { if: { voie: "diseur" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: ["r:mots_dits"].concat(FX_ALLIEE), ep: ["histoire", 500] }, to: "K12r_aud_mots" }, lose: { fx: { flag: "r:mots_dits" }, to: "K12r_aud_mots" } },
      { label: "Prendre congé : la pendule a mangé le quart d'heure", to: "K12r_aud_fin", big: true },
    ] },

  K12r_aud_lettres: { act: "IV", title: "Le sceau entier", place: "palais", ambiance: "chateau",
    text: [
      "Elle le prend sans méfiance, comme à Sainte-Aure on prend un placet. Elle lit la date. Elle lit les trois noms. Elle retourne le vélin, et elle regarde la cire, longtemps, de très près, comme on cherche une fêlure dans une tasse.",
      "« Le sceau est entier. » Elle repose la feuille à plat. « J'ai vu ce sceau une fois. Non : j'en ai vu le dessin, dans un livre. On m'a toujours dit qu'il dormait dans un coffret, là-haut, derrière un cordon de soie, et qu'il n'avait pas servi depuis le feu Roi. »",
      "« Il a servi le vingt juin 541. Mon grand-père est parti chasser le vingt et un, et il a gouverné quarante ans par l'article premier. Il y avait un article second. Il y avait ce papier, dans de la terre, sous du thym. »",
      "Elle se tait le temps que la pendule batte vingt fois. « Je ne suis donc rien. » Elle le dit sans plainte, avec une sorte de curiosité. « C'est reposant. Depuis l'âge de vingt ans, je me demandais ce que j'étais. »",
      { if: PORTEUR, text: "Elle relit la dernière ligne. « *La personne, quelle qu'elle soit, qui produira ces présentes.* » Elle te regarde, des sabots aux cheveux. « Vous êtes un tiers du gouvernement d'Aurime. Les deux autres tiers dorment debout. Vous avez donc, à cette heure, la majorité des membres éveillés du Conseil. J'ai connu des ministres qui ne l'ont jamais eue. »" },
      { if: { has: "monde:garde_coudrier" }, text: "Elle relit le troisième nom. « Un capitaine, un médecin, et le Maudit. » Elle a un rire bref. « J'ai craché sur ce nom à sept ans, en cérémonie, avec des gants blancs. Elle l'écrivait la veille dans des lettres de garde. L'une de nous deux a été mal renseignée ; et elle, elle le connaissait. »" },
      "Elle pousse le vélin vers toi, du bout des doigts. « Un Conseil qui dort ne signe rien. Et ce qui n'est pas signé n'existe pas : c'est tout ce que j'ai appris en six ans de Serment. »",
      { after: "r:sait_signer", text: "Tu as là-dessus la réponse d'un vieux moine, que tu lui rends mot pour mot : *présent* veut dire *qui peut signer,* et la Coutume ne compte pas le temps qu'on tient la plume. Elle te considère. « Vous avez trouvé dom Fulbert. Je passe devant son échelle tous les ans. Je n'ai jamais eu de quoi lui poser une question. »" },
    ],
    choices: [
      { label: "« Un homme éveillé le temps d'un Pater a le temps de signer. Écrivez ce qu'ils signeraient. »", hide: { any: [ORD, { not: PORTEUR }] }, fx: { item: "ordonnance_garde", flag: "r:signe_porteur", ep: ["perso", 500] }, to: "K12r_aud_ordonnance" },
      { label: "« Un homme éveillé le temps d'un Pater a le temps de signer. Écrivez ce qu'ils signeraient. »", hide: { any: [ORD, PORTEUR] }, fx: { item: "ordonnance_garde" }, to: "K12r_aud_ordonnance" },
      { back: "K12r_audience" },
    ] },

  K12r_aud_ordonnance: { act: "IV", title: "Deux mains sur trois", place: "palais", ambiance: "chateau",
    text: [
      "Elle tire à elle une feuille, et elle écrit, vite, sans brouillon, de la main d'une femme qui a signé pendant six ans ce que d'autres rédigeaient et qui a regardé comment ils s'y prenaient.",
      "*Le Conseil de garde du royaume, établi par lettres de la Reine du vingt juin 541, ordonne : que l'escalier de la Tour des Heures soit remis à la garde blanche ; que les caves et le sable de la Maîtrise soient mis sous le scellé ; que le sieur Aubespin, Maître des Sables, réponde de sa personne.*",
      "Elle ajoute une ligne, plus bas, d'une encre plus appuyée. *Vu par nous, Odeline, qui avons tenu la place sans droit, et qui la rendons.*",
      "« Il faut deux mains sur trois. »",
      { if: PORTEUR, text: "Elle te tend la plume. « La vôtre d'abord. Vous savez écrire ? » Tu sais les bâtons. Tu traces ton nom en capitales, au bas d'un acte d'État, de la main dont tu écris à {autre}. « C'est lisible, dit-elle. Cela vous met déjà au-dessus du Conseil de mon père. Il vous manque une main : le médecin est au fond des Simples, devant son fourneau. »" },
      { if: { all: [{ not: PORTEUR }, CAPITAINE_ICI] }, text: "« Je les connais. Je passe devant eux tous les ans ; on m'a appris leurs noms comme ceux des statues. Le médecin est au fond des Simples, devant son fourneau. Le capitaine est dans l'aile close, devant une porte. L'horloger est où vous savez, et je vous le déconseille pour cette nuit. »" },
      { if: { all: [{ not: PORTEUR }, { not: CAPITAINE_ICI }] }, text: "« Je les connais. Je passe devant eux tous les ans ; on m'a appris leurs noms comme ceux des statues. Le médecin est au fond des Simples, devant son fourneau. Le capitaine se tient au pied de la Tour, dans la foule, avec trente archers : celui-là sera pour demain. L'horloger est où vous savez. Vous aurez une main cette nuit, et l'autre au grand jour. »" },
      "Elle sable la feuille, la secoue, te la donne. « Allez éveiller votre Conseil. Je n'ai jamais rien signé d'aussi court, ni d'aussi propre. »",
    ],
    choices: [{ back: "K12r_audience" }] },

  K12r_aud_prise: { act: "IV", title: "Quatre heures", place: "palais", ambiance: "chateau",
    text: [
      "Tu défais le nœud de ta chemise. Tu lui dis d'où vient la prise : d'une papillote cachetée de noir, qu'un commis a mise ce soir dans deux cents mains blanches, contre une croix sur un registre.",
      "Elle y pose le doigt. Elle le retire. Elle a une papillote à elle sur la table, près de la pendule, cachetée du même noir ; elle la déchire, et elle en verse le contenu dans sa paume.",
      "Le sien luit. Il chauffe : tu le vois à la façon dont elle referme la main.",
      "« Il me tient éveillée, et il endort ma garde. » Elle n'a pas élevé la voix. « Ils l'ont touchée à huit heures. Une papillote fait quatre heures, au pied de cette Tour. » Elle regarde la pendule. « J'ai donc jusqu'à minuit pour être une Régente qui a des gardes. C'est court, pour apprendre. »",
      "Elle ouvre un coffret de voyage, et elle en tire trois papillotes, qu'elle te met dans la main. Elles sont tièdes. « Ma réserve. Il m'en compte six pour la nuit ; il est exact, c'est sa coquetterie. Prenez. Vous saurez mieux que moi sur qui les poser. »",
    ],
    choices: [{ back: "K12r_audience" }] },

  K12r_aud_memoire: { act: "IV", title: "La devise de la maison", place: "palais", ambiance: "chateau",
    text: [
      "C'est une facture, sur un papier d'artisan, avec un en-tête gravé. *Thomassin, graveur en sceaux, rue des Aiguilliers. Livré le douze juin 541 à Monseigneur le duc de Hautgué : un grand sceau d'argent, à la légende ODERIC RÉGENT D'AURIME. Payé comptant.*",
      "Elle lit la date deux fois. Elle compte sur ses doigts, comme une enfant, du douze au vingt et un. « Neuf jours. On ne commande pas un sceau de Régent neuf jours avant un malheur que nul ne pouvait prévoir. »",
      "Elle plie la facture avec un soin terrible. « *Un malheur que nul ne pouvait prévoir.* On m'a servi cette phrase deux fois dans ma vie : pour Roquebise, et pour ceci, dans tous mes livres d'enfant. C'est la devise de la maison. Nous aurions dû la faire graver. Thomassin nous aurait fait un prix. »",
      "Elle garde le papier sous sa main. « Vous vouliez savoir si j'écouterais. J'écoute. »",
    ],
    choices: [{ back: "K12r_audience" }] },

  K12r_aud_mots: { act: "IV", title: "La soustraction", place: "palais", ambiance: "chateau",
    text: [
      { outcome: "win", text: "Tu le dis sans détour : qu'il n'y a jamais eu de fils. Que Melchior le Jeune et Melchior l'ancien ont la même écriture, le même œil gris et le même œil brun. Que l'homme qui lui a tenu l'étrier ce soir était sous-maître de la Guilde en 541, et qu'il a posé lui-même la main sur le levier." },
      { outcome: "win", text: "Elle ne rit pas. Elle regarde le cierge. « Il m'a appris à monter. J'avais six ans. Il en avait quarante-cinq. » Elle se tait. « J'en ai vingt-huit, et il en a quarante-cinq. Je n'avais jamais fait la soustraction. On ne la fait pas pour les gens qu'on voit tous les jours. »" },
      { outcome: "win", text: "« Je n'ai pas de papier pour cela. J'ai mieux : j'ai vingt-deux ans de sa figure dans la tête, et elle n'y a pas pris une ride. » Elle relève les yeux. « Continuez. »" },
      { outcome: "lose", text: "Tu le dis, et tu le dis mal : cela sort dans le désordre, le fils, le père, les yeux, les soixante ans. Elle t'écoute jusqu'au bout, avec la politesse qu'on lui a apprise." },
      { outcome: "lose", text: "« Un homme de quatre-vingt-dix ans, qui en paraît quarante-cinq, et qui serait son propre père. » Elle le dit sans moquerie, avec lassitude. « On me dit beaucoup de choses. Celle-ci est la plus belle de l'année. Il me faudrait un papier pour la croire, et vous m'apportez une figure honnête. J'en vois beaucoup : c'est celle qu'on prend pour me demander quelque chose. »" },
    ],
    choices: [{ back: "K12r_audience" }] },

  K12r_aud_fin: { act: "IV", title: "Lentement", place: "palais", ambiance: "chateau",
    text: [
      { if: ALLIEE, text: "Elle se lève. « Que ferez-vous, demain ? » Tu dis que tu descends au puits. Elle ne demande pas lequel." },
      { if: ALLIEE, text: "« À onze heures, je serai sur une estrade, devant cinq mille dos et trois cents Veilleurs, avec un texte de quatre lignes. On le dit d'ordinaire en un Pater. » Elle mouche le cierge entre deux doigts. « Je jurerai lentement. »" },
      { if: { all: [ALLIEE, { has: "r:lettres_montrees" }] }, text: "Dans le noir, sa voix reprend. « Gardez le vélin. Il est mieux sur vous que sur moi, qui serai fouillée par des politesses. Et produisez-le au jour : la Reine a écrit *en quelque temps*, elle n'a pas écrit *dans un coin.* »" },
      { if: { not: ALLIEE }, text: "Elle se lève. « Vous êtes de bonne foi. Je gouverne avec des papiers ; c'est tout ce qu'on m'a laissé, et vous n'en avez pas. » Elle mouche le cierge entre deux doigts. « Bonsoir. Sortez comme vous êtes entré{e}. Mes gardes sont de braves gens : laissez-leur croire qu'ils me gardent. »" },
      "Tu regagnes la grande salle à tâtons, d'oranger en oranger. Derrière toi, la pendule de voyage bat pour deux.",
    ],
    choices: [{ back: "K12r_palais" }] },

  // --- midnight ---
  K12r_minuit: { act: "IV", title: "Un bâillement", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      "Tu attends sous les tilleuls. La pendule de voyage dit onze heures, puis la demie, puis les trois quarts, de sa petite voix d'argent, dans une maison où quarante cierges soufflés font la nuit et où le midi passe sous les portes.",
      "Devant l'Orangerie, deux manteaux blancs montent la garde, la hallebarde à l'épaule. Celui de gauche bâille. Tu regardes ce bâillement, parce qu'il dure.",
      "Il dure. La bouche reste ouverte. La hallebarde descend de l'épaule, d'un cheveu par respiration, puis elle cesse de descendre. L'autre a tourné la tête vers son camarade pour lui dire quelque chose, et la phrase lui reste sur la lèvre.",
      { after: "r:vu_ration", text: "De la cendre de sarment. On leur en a donné pour quatre heures, cachetée de noir, contre une croix sur un registre." },
      "Tu cours jusqu'à l'angle de la cour d'honneur. Ils sont deux cents, debout près des faisceaux, la tête un peu basse. La Dormante vient de gagner deux cents hommes sans avancer d'un pouce ; il y a suffi de trois commis et de trois paniers.",
      { after: "r:haudoin_averti", text: "Un seul marche. Le vieux sergent passe de l'un à l'autre, leur touche la joue du dos des doigts, et se tait. Il te voit. Il lève sa hallebarde d'un pouce, pour salut. « J'ai ouvert celle de prime à la demie. J'ai quatre heures devant moi, et je suis toute la garde de Son Altesse. »" },
      "La grille dorée tourne sur ses gonds. On les a graissés. Ils entrent au pas, par quatre, sans tambour, des chiffons noués sous les talons : soixante casaques noires, et devant elles un lieutenant blond qui tient son épée comme sur un frontispice.",
      "Derrière le dernier rang, un homme en gris marche seul, une canne sous le bras. Il s'arrête devant un manteau blanc. Du bout de la canne, il lui redresse sa hallebarde, avec soin, comme on remet un cadre d'aplomb.",
      { with: "jehan", text: "Jehan a compté les rangs. « Deux escouades de la barrière, une de l'hôtel. Ils n'ont pas tiré un sabre. » Sa voix est blanche. « C'est comme cela qu'il prend les choses. On m'avait dit qu'il n'avait jamais fait la guerre. Je comprends pourquoi : il n'en a pas besoin. »" },
    ],
    choices: [
      { label: "Éveiller les deux de la porte : une pincée par homme", if: { stock: "sable", min: 4 }, why: "Il t'en faudrait deux de reste, et de quoi marcher après.", fx: { stock: { sable: -2 }, flag: "r:blancs_eveilles", ep: ["perso", 400] }, to: "K12r_coup_blancs" },
      { label: "Courir chez la Régente, par les caisses d'orangers", to: "K12r_coup_regente" },
      { label: "Te couler derrière une tenture de l'Orangerie, et écouter", hide: { not: ALLIEE }, fx: { flag: ["r:coup_entendu", "monde:regente_dedans"], ep: ["histoire", 800] }, to: "K12r_coup_ecoute" },
      { label: "Te couler derrière une tenture de l'Orangerie, et écouter", hide: ALLIEE, fx: { flag: ["r:coup_entendu", "monde:regente_tenue"], ep: ["histoire", 800] }, to: "K12r_coup_ecoute" },
    ] },

  K12r_coup_blancs: { act: "IV", title: "Une porte de quatre pieds", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      "Deux pincées, une sur chaque gant. Le bâillement s'achève. « ... et je lui ai répondu, moi, que sa sœur... » dit l'autre, qui finit sa phrase de tout à l'heure ; puis il voit la cour.",
      "Tu n'as pas le temps de leur expliquer la Maîtrise. Tu leur montres la grille. Ils comprennent le reste en soldats : soixante noirs au pas, deux cents blancs debout, et eux deux.",
      "Celui qui bâillait crache dans ses mains. « La porte a quatre pieds de large. On tient quatre pieds contre soixante, tant qu'on a du sable dans le gilet. On en a pour combien ? » Tu dis : un quart d'heure, au pied de cette Tour. « C'est un quart d'heure de plus que les camarades. »",
      { after: "r:haudoin_averti", text: "Le vieux sergent arrive à grands pas, et cela fait trois hallebardes. « Derrière moi, les enfants. J'ai un grief personnel. »" },
      "Ils se mettent en travers de la porte, le fer bas. Dans la grande salle, entre les orangers, la canne a commencé de frapper les dalles.",
    ],
    choices: [{ label: "Entrer chez la Régente pendant qu'ils tiennent", to: "K12r_coup_regente", big: true }] },

  K12r_coup_regente: { act: "IV", title: "Deux cents lignes", place: "palais", ambiance: "chateau", takes: "night", fx: { flag: FX_ALLIEE, meet: "odeline" },
    text: [
      { after: "r:audience", text: "Elle est debout, habillée, bottée, les cheveux noués d'un lacet. La pendule dit minuit moins cinq. « J'ai entendu les gonds. On les a graissés : c'est une attention. »" },
      { before: "r:audience", text: "Elle est debout au milieu des orangers, en robe de chambre blanche, un cierge à la main. Tu n'expliques rien : tu écartes la tenture de la croisée. Dans la cour, deux cents hommes à elle se tiennent debout, la tête basse, pendant que soixante autres leur passent devant au pas." },
      { before: "r:audience", text: "Elle regarde cela le temps qu'il faut. « J'ignore qui vous êtes, et si vous avez un papier. Peu importe. Je viens d'en lire un de deux cents lignes. »" },
      "On entend la canne sur les dalles de la grande salle : deux coups, un silence, deux coups.",
      { if: PORTE_TENUE, text: "À la porte, des hallebardes se croisent, et une voix dit quelque chose de bref sur les corbeaux. Cela vous donne le temps d'un Pater." },
      { if: { not: PORTE_TENUE }, text: "Personne ne tient la porte. Vous avez le temps de dix respirations." },
      "Elle te regarde. Elle attend de toi une phrase courte, comme on en attend d'un guide.",
    ],
    choices: [
      { label: "« Par le jardin. Il y a un mur, et un sureau. »", to: "K12r_courtenvaux_nuit", big: true },
      { label: "« Restez. Faites celle qui dort. Et demain, jurez lentement. »", fx: { flag: "monde:regente_dedans", ep: ["perso", 500] }, to: "K12r_coup_reste" },
    ] },

  K12r_courtenvaux_nuit: { act: "IV", title: "Par le fond du jardin", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      "Vous traversez les Simples en courant, elle devant : elle connaît les allées, elle y a joué une fois par an, toute son enfance, pendant qu'on jurait.",
      "Au cadran aux tortues, quelqu'un se lève du socle. C'est le lieutenant de Courtenvaux. Il a laissé ses soixante hommes à un sergent, et il est venu garder seul le fond du jardin, parce que dans les livres c'est toujours par le fond du jardin. Deux casaques noires sortent des buis derrière lui.",
      "« Madame. » Il salue de l'épée, très bien. « On m'a chargé de veiller à ce que Votre Altesse dorme tranquille. Je m'aperçois que la consigne est mal écrite : elle ne dit pas où. »",
      { after: "r:courtenvaux_battu", text: "Puis il te voit. Il rougit, dans le midi du jardin, jusqu'à la moustache. « Trois touches. Vous. »" },
      { after: "r:courtenvaux_note", before: "r:courtenvaux_battu", text: "Puis il te voit. « Six lignes, sur la page de garde du tome troisième. Je vous avais fait{e} ressemblant{e}. »" },
    ],
    choices: [
      { label: "« Trois touches, lieutenant. Vous lisiez : on est sourd quand on lit. »", hide: { not: { has: "r:courtenvaux_battu" } }, fx: { flag: ["monde:regente_libre", "r:courtenvaux_dette"], ep: ["histoire", 800] }, to: "K12r_coup_fuite" },
      { label: "Lui mettre sous les yeux l'ordonnance du Conseil de garde", hide: { not: { all: [ORD, { has: "monde:ordonnance_garde" }] } }, fx: { flag: ["monde:regente_libre", "r:courtenvaux_dette"], ep: ["histoire", 800] }, to: "K12r_coup_fuite" },
      { label: "« Dans quel livre, lieutenant, le héros arrête-t-il une femme au fond d'un jardin ? »", test: { dom: "social", diff: 5, label: "Parler à un lecteur", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }, { if: { has: "r:barriere_altesse" }, v: 5 }] },
        win: { fx: { flag: ["monde:regente_libre", "r:courtenvaux_dette"], ep: ["histoire", 800] }, to: "K12r_coup_fuite" }, lose: { fx: { flag: "monde:regente_tenue" }, to: "K12r_coup_reste" } },
      { label: "Passer sur le ventre des deux noirs pendant qu'il cherche sa phrase",
        fight: { title: "Le fond du jardin", enemies: [{ id: "garde_sable", n: 2 }], terrain: "nature",
          win: { fx: { flag: ["monde:regente_libre", "r:noirs_jardin"], ep: ["histoire", 800] }, to: "K12r_coup_fuite" },
          lose: { fx: { flag: "monde:regente_tenue", pv: -2 }, to: "K12r_coup_reste" } } },
    ] },

  K12r_coup_fuite: { act: "IV", title: "Du sureau dans les cheveux", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      { after: "r:courtenvaux_dette", text: "Le lieutenant de Courtenvaux regarde la Régente d'Aurime, puis le mur, puis la pointe de sa propre épée. Il rengaine. « Je faisais ma ronde au mauvais bout du jardin. Cela m'arrive : je lis en marchant. » Il tourne le dos. Ses deux hommes, qui ont lu d'autres livres, le regardent faire sans comprendre." },
      { after: "r:noirs_jardin", text: "Les deux noirs sont dans la mélisse. Le lieutenant a gardé l'épée basse : il a regardé faire, avec la figure d'un lecteur à qui l'on gâte la fin. « Je ferai mon rapport, dit-il. Il sera très mal écrit. Cela vous donne jusqu'à l'aube. »" },
      { after: "r:sauge_eveillee", text: "La porte verte bâille d'une main. Son Altesse y passe de biais, entre le battant et une vieille femme en coiffe du dimanche, à qui elle demande pardon. Une branche de sureau la décoiffe au passage." },
      { before: "r:sauge_eveillee", text: "Tu lui fais la courte échelle. Son Altesse la Régente d'Aurime passe un mur de jardin à minuit, en s'aidant d'un sureau, et retombe de l'autre côté sur le sable de la place." },
      "Elle a une grappe de fleurs dans les cheveux, et elle l'ignore. Elle regarde la foule de dos, le dais, la Tour, de plain-pied, sans cordes de soie, pour la première fois.",
      "« On me l'a toujours montrée d'une estrade, dit-elle. D'en bas, elle est plus haute. »",
    ],
    choices: [{ label: "Te retourner vers le mur : on a parlé dans le jardin", to: "K12r_sureau", big: true }] },

  K12r_coup_reste: { act: "IV", title: "Celle qui reste", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      { after: "monde:regente_dedans", text: "Elle fait le compte, vite, en personne qui gouverne avec des papiers : une Régente en fuite, c'est un Serment sans personne, et un homme en gris qui le prête à sa place devant cinq mille dos." },
      { after: "monde:regente_dedans", text: "« Vous avez raison. S'il lui faut quelqu'un sur cette estrade, autant que ce soit quelqu'un qui sache. » Elle souffle le cierge. Elle se couche tout habillée sur le lit de camp, tire le drap jusqu'au menton, et ferme les yeux avec une application d'enfant." },
      { after: "monde:regente_dedans", text: "« La croisée du fond. Elle donne sur les buis. » La canne est à la porte. « Demain, dit-elle sans remuer les lèvres. Lentement. »" },
      { after: "monde:regente_tenue", before: "monde:regente_dedans", text: "Tu as fait ce que tu as pu, et il a manqué peu de chose. Le lieutenant a levé un doigt. Les deux casaques se sont mises de chaque côté d'elle, à un pas, sans la toucher : on ne touche pas une Altesse, on marche à côté." },
      { after: "monde:regente_tenue", before: "monde:regente_dedans", text: "Elle remonte l'allée vers l'Orangerie, très droite, entre ses deux noirs. Elle s'est retournée une fois. « Demain, a-t-elle dit par-dessus son épaule. J'y serai de toute façon. Soyez-y aussi. »" },
      { after: "monde:regente_tenue", before: "monde:regente_dedans", text: "Le lieutenant te regarde. Il pourrait te faire prendre. Il préfère te montrer le mur, de la pointe de l'épée, avec la courtoisie d'un homme qui réserve un personnage pour le chapitre suivant." },
    ],
    choices: [{ label: "Gagner le mur, et le sureau", to: "K12r_sureau", big: true }] },

  K12r_coup_ecoute: { act: "IV", title: "Le quarante et unième couvert", place: "palais", ambiance: "chateau", takes: "night",
    text: [
      "Il entre sans frapper : il a frappé le dallage tout le long de la salle. Il a son habit gris, son jabot du soir. Il pose sa canne contre une caisse d'oranger.",
      { if: ALLIEE, text: "Elle est debout près de la pendule, habillée, les mains dans le dos." },
      { if: { not: ALLIEE }, text: "Elle est debout près de la pendule, en robe de chambre blanche, un cierge à la main." },
      "« Votre Altesse veille.",
      "— Mes gardes dorment.",
      "— Ils ont mal supporté le pied de la Tour. Cela arrive : le triple fatigue les natures simples. Je l'avais écrit à votre chambellan, qui ne lit pas. Mes hommes prennent la faction. Vous ne vous apercevrez de rien, sinon qu'ils saluent mieux. »",
      "Il regarde la pendule de voyage. Il a pour elle le regard qu'on a pour un meuble qu'on a connu dans une autre maison. « C'est une Coudrier. Le mouvement, du moins : la boîte est d'un sot. Monseigneur votre grand-père l'a fait saisir en 542, avec le reste. Elle retarde d'un quart d'heure par an. Lui, il avançait toujours. »",
      "« Demain, vous jurerez. Onze heures, comme tous les ans. Ensuite, vous monterez avec moi. Il y a là-haut une fenêtre d'où l'on voit tout le royaume, et je tiens à ce que vous le voyiez à midi.",
      "— Et à midi ?",
      "— À midi, madame, le puits lâche. Ce qu'il tient par la bride depuis soixante ans, il le prend à pleins bras : Port-Régent, les îles, tout ce qui a un clocher. Et la Tour rend en une heure ce qu'elle a sué en soixante ans. J'ai douze cuves dessous, et quarante personnes de bonne compagnie à dîner autour, chacune avec son sablier. » Il reprend sa canne. « Il y a un quarante et unième couvert. Je l'ai fait mettre pour vous le jour de votre naissance. On gouverne très bien un royaume immobile : il ne réclame rien. »",
      { if: ALLIEE, text: "Elle se tait un moment. De derrière ta tenture, tu vois sa main gauche, dans son dos, fermée sur le bord de la table. « Je monterai, dit-elle d'une voix égale. J'ai toujours voulu voir cette fenêtre. »" },
      { if: ALLIEE, text: "Il s'incline. Il est content. Il a quatre-vingt-dix ans d'expérience des gens, et il vient de se tromper sur une femme de vingt-huit, parce qu'elle lui a répondu ce qu'il aurait répondu." },
      { if: { not: ALLIEE }, text: "Elle a reculé d'un pas, contre la table. Elle regarde cet homme, qui lui a appris à monter à cheval. « Quel âge avez-vous ? » C'est la bonne question, et elle lui vient un soir trop tard." },
      { if: { not: ALLIEE }, text: "« L'âge de mes artères, madame. Elles sont excellentes. » Il s'incline. « Deux hommes coucheront à votre porte. Pour le service. »" },
      "Il sort. La canne s'éloigne : deux coups, un silence, deux coups.",
      { if: ALLIEE, text: "Elle reste immobile jusqu'à ce qu'on ne l'entende plus. Puis, sans tourner la tête vers ta tenture : « Vous avez entendu. Allez à votre puits. » Sa main lâche la table. « Je jurerai lentement. »" },
      { if: { not: ALLIEE }, text: "Elle s'assoit. Elle regarde ses mains. On marche déjà à la porte, et tu as un puits demain : tu enjambes la croisée du fond." },
    ],
    choices: [{ label: "Gagner le mur par les buis", to: "K12r_sureau", big: true }] },

  K12r_sureau: { act: "IV", title: "Il salue en s'en allant", place: "palais", ambiance: "chateau", takes: "night", fx: { flag: "r:tour_noire" },
    text: [
      "Tu es contre le mur, dans l'odeur arrêtée du sureau, quand la canne frappe le sable d'une allée. Deux coups. Il est sous les tilleuls, à trente pas, tête nue, et il parle sans élever la voix, à tout le jardin.",
      "« Je sais que vous êtes là. J'ignore où : c'est sans importance. Les jardins des reines sont pleins de gens qui écoutent. »",
      { after: "monde:regente_libre", text: "« Vous m'ôtez une Régente la veille du Serment. C'est joli. Je jurerai donc moi-même : j'ai la voix qu'il faut, et soixante ans que j'entends le texte. »" },
      { after: "r:serrure_vendue", text: "« J'ai rouvert sa porte, ce soir, après vous avoir quitté{e}. Je me suis assis dans son fauteuil. J'ai lu sa copie, que je croyais connaître, jusqu'à un chapitre qu'il me faisait toujours sauter. *Celui d'en bas viendra d'une heure que le coup n'a pas prise.* » La canne trace un trait dans le sable." },
      { after: "r:serrure_vendue", text: "« J'ai cherché soixante ans pourquoi cette barre ne voulait pas de moi. Vous me l'avez vendu pour une fiole, avec le chiffre. Vous êtes la seule personne de cette ville dont le bras puisse quelque chose en bas ; et je vous ai tenu{e} dans ma cour, à trois pas, pour vous regarder partir. C'est une faute. J'en fais une tous les soixante ans. »" },
      { after: "r:serrure_refusee", text: "« *Soixante autres*, m'avez-vous dit sur une marche. Je vous en ai mis soixante dans un escalier. C'est le compte. »" },
      { after: "r:serrure_mentie", text: "« Vous mentez mal, je vous l'ai dit. Tâchez de courir mieux. »" },
      "« L'escalier de la Tour est à moi depuis un quart d'heure. Les portes de la ville, depuis toujours. Dormez où il vous plaira : il n'y a plus à Méridane que des endroits qui m'appartiennent, et des endroits que je n'ai pas encore regardés. »",
      "Il porte deux doigts à son front, vers le mur, à tout hasard, et il rentre. Il salue en s'en allant : c'est son usage.",
    ],
    choices: [{ label: "Quitter la colline par les cours", to: "K12r_descente", big: true }] },

  K12r_descente: { act: "IV", title: "Une seule trace", place: "basse", ambiance: "ville", takes: "night", fx: { stock: { sable: -1 } },
    text: [
      "La rue du Cadran a sa barrière, et un livre ouvert sur un madrier. Tu descends par ce qu'il y a derrière les maisons : des cours, des appentis, un toit de cirier, une échelle de couvreur que le coup a prise contre un mur avec son couvreur dessus.",
      { after: "monde:regente_libre", text: "Elle marche dans tes pas, exactement, pour ne laisser dans le gris qu'une trace. Elle a appris cela en dix enjambées. Au toit du cirier, elle ôte ses bottes sans qu'on le lui dise, et les porte à la main." },
      { after: "monde:regente_libre", text: "« Où allons-nous ? » Tu dis : à un endroit où il est midi quoi qu'on sonne. Elle réfléchit. « Je connais la phrase. Elle est sur une étoile de cuivre, dans une église où l'on ne me mène jamais. On m'a dit qu'elle était sale. »" },
      "En bas, le gris cesse à la troisième maison. La ville basse reprend son silence de midi, ses mariniers arrêtés, son eau debout sous les ponts. Le onzième coup est toujours en l'air : il te revient dans la poitrine dès que tu marches.",
      { with: "carillon", text: "« Il est minuit moins un demi-quart dans le royaume, dit Carillon. Carillon propose l'étoile de Saint-Gnomon. Le Grand Maître y réglait sa montre. Il disait : c'est la seule horloge de la ville que je n'aie pas à remonter. »" },
      { with: "rouget", text: "Rouget te tire par la manche, à un coin de rue. « Par là. La vieille église aux pèlerins. Y a de la paille, et y a jamais de noirs : ils ont peur des Veilleurs comme du feu. »" },
      { with: "jehan", text: "Jehan ferme la marche, à reculons, la main sur son sabre. « Saint-Gnomon. On n'y patrouillait pas. Le brigadier disait que c'était plein de gens qui prient debout, et que cela portait malheur à la solde. »" },
    ],
    choices: [{ label: "Descendre les six marches de Saint-Gnomon-le-Vieux", to: "K12r_gnomon_nuit", big: true }] },

  K12r_gnomon_nuit: { act: "IV", title: "Ici midi, quoi qu'on sonne", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "C'est une église petite, sombre, enfoncée de six marches. Les pèlerins de 541 sont sur leur paille, dans les bas-côtés, la tête levée. Entre eux, cette nuit, il y a ceux de 601 : les Veilleurs sont arrivés à la brune pour le Serment, et ils se sont couchés dans les intervalles sans déranger une botte. Trois cents personnes en gris dorment parmi les leurs. À chaque pilier brûle une veilleuse à ruban.",
      { after: "r:veilleurs_amis", text: "La Doyenne Ysoline veille, assise sur la marche du chœur, les mains dans ses manches. Elle te reconnaît d'un battement de paupières. Elle montre la nef, du menton : il y a de la place." },
      { after: "monde:regente_libre", text: "Puis elle voit qui te suit, des bottes à la main. Elle se lève, ce qu'elle ne fait pour personne. La Régente d'Aurime et la Doyenne des Veilleurs se regardent par-dessus trois cents dormeurs et autant de dormants." },
      { after: "monde:regente_libre", text: "« Madame, dit la Doyenne, vous avez du sureau dans les cheveux. » La Régente y porte la main, trouve la grappe, et la garde. « J'ai aussi une chose à dire à vos gens, demain, sur un parvis. Il me faut une botte de paille jusque-là. »" },
      "Dans le dallage, la règle de laiton traverse la nef de biais. Du trou de la voûte tombe, à cette heure, une pièce plus pâle que celle du jour : la lune de 601 a pris le tour du soleil. Elle est à une dalle de l'étoile de cuivre. *ICI MIDI, QUOI QU'ON SONNE.*",
      { after: "r:vu_droit", text: "Derrière l'autel, il y a une dalle qui pivote, vingt marches, et un boyau tiré au cordeau jusque sous la Tour. Il coûte trois grains pour un. Tu comptes ce que tu as au cou." },
      "Tu t'assois sur l'étoile. Tu ouvres le Cahier sur tes genoux. La pièce de lune arrive sur la page.",
    ],
    choices: [{ label: "Écrire", to: "B12", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    decoction_fievrier: { name: "Flacon de maître Anthelme", kind: "divers", keep: true, price: 0, desc: "Un flacon de verre brun, bouché, roulé dans un linge, froid comme l'eau d'un puits : dix-neuf prises d'écorce de fièvrier. Une cuillerée à prime, à jeun ; les quatre premiers jours, une seconde à vêpres." },
    ordonnance_garde: { name: "Ordonnance du Conseil de garde", kind: "divers", keep: true, price: 0, desc: "Une feuille de la main de la Régente : l'escalier de la Tour à la garde blanche, le sable de la Maîtrise sous le scellé, le sieur Aubespin répondant de sa personne. Elle vaut avec deux signatures sur trois." },
  },
} };
