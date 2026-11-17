// Le Douzième Coup · chapter 13, the one who stays, first half (act IV, night of 20 to 21 June 601, from midnight
// to three). Saint-Gnomon-le-Vieux, where three hundred Veilleurs sleep among the pilgrims of 541 (hub
// `K13r_nef`): the Doyenne Ysoline (`r:ysoline_plan`; her people will sing at the Serment: `r:veilleurs_chant`;
// the coffers opened with `r:sabot_rendu`: `r:sable_veilleurs`), the Régente on her straw when
// `monde:regente_libre` (`r:regente_paille`), the vigil of the names (`r:nom_lison`), the companions' night
// (`r:glaneurs_parvis` with Rouget, `r:jehan_blancs` with Jehan and the ordinance, `r:cuivre_parvis` with Carillon
// and the bronze rod), the Comptoir, the mouth of the Droit measured (`r:droit_mesure` : six pinches to the
// gate), the quay where the other sat. Then M13, on the copper star, where the other is sitting sixty years away.
var P = {};
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var LIBRE = { has: "monde:regente_libre" };
var ORD2 = { all: [{ item: "ordonnance_garde" }, { has: "monde:ordonnance_garde" }] };

Object.assign(P, {
  K13r_route: { act: "IV", title: "La nuit des Veilleurs", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "Tu refermes le Cahier. La pièce de lune a passé l'étoile ; elle s'en va sur les dalles, vers un pilier, à son pas.",
      "L'église respire. Trois cents personnes y dorment, sur une paille de soixante ans que le coup a gardée fraîche, entre des pèlerins qui lèvent la tête vers une voûte. Les Veilleurs sont venus ici toute leur vie, une nuit par an. Ils savent où poser le pied. Une vieille a mis sa couverture sur les genoux d'un dormant de 541, par habitude, comme on borde un parent.",
      "Dehors, c'est le midi de toujours. Dedans, les veilleuses à ruban font une nuit d'église, basse et dorée.",
      { with: "rouget", text: "Rouget s'est assis contre un pilier, les genoux au menton. Il regarde les gris dormir. « Ils glanent rien, eux. Ils viennent, ils regardent, ils s'en vont. Je les ai toujours pris pour des andouilles. » Il baisse la voix. « Y en a une qui m'a donné du pain. »" },
      { with: "jehan", text: "Jehan a ôté sa casaque, et l'a roulée sous un banc. En chemise, il a l'air d'avoir dix-sept ans, ce qui est son âge." },
    ],
    choices: [{ label: "Te lever de l'étoile", to: "K13r_nef", big: true }] },

  K13r_nef: { act: "IV", title: "Ceux qui dorment parmi les leurs", backName: "la nef", place: "basse", ambiance: "temple", takes: "night", hub: true,
    text: [
      { first: true, text: "Tu as trois heures devant toi, à la pendule d'une Cour qui dort là-haut sous bonne garde. Demain, à onze heures, on jure. À midi, d'une façon ou d'une autre, ce sera fini." },
      { first: true, text: "Près du chœur, on entend une voix, basse, régulière, puis une autre. On dirait qu'on récite." },
      { again: true, text: "La nef, la paille, les veilleuses. La règle de laiton file vers le chevet." },
    ],
    choices: [
      { label: "La Doyenne, sur la marche du chœur", hide: { seen: "K13r_ysoline" }, to: "K13r_ysoline" },
      { label: "La Régente, sur sa botte de paille", hide: { any: [{ not: LIBRE }, { seen: "K13r_regente_paille" }] }, fx: { flag: "r:regente_paille", ep: ["perso", 500] }, to: "K13r_regente_paille" },
      { label: "Les voix, près du chœur", hide: { seen: "K13r_veillee" }, to: "K13r_veillee" },
      { label: "Rouget, qui ne dort pas", hide: { any: [{ not: ROUGET }, { seen: "K13r_rouget_nuit" }] }, to: "K13r_rouget_nuit" },
      { label: "Jehan, en chemise sous une veilleuse", hide: { any: [{ not: JEHAN }, { seen: "K13r_jehan_nuit" }] }, to: "K13r_jehan_nuit" },
      { label: "Carillon, debout près du bénitier", hide: { any: [{ not: CARILLON }, { seen: "K13r_carillon_nuit" }] }, to: "K13r_carillon_nuit" },
      { label: "Le chevet, et la dalle à l'anneau", to: "K13r_bouche" },
      { label: "Dehors : le Comptoir des glaneurs, qui ne ferme jamais", to: "K13r_comptoir_nuit" },
      { label: "Dehors : le quai, à trois cents pas", hide: { seen: "K13r_quai_nuit" }, to: "K13r_quai_nuit" },
      { label: "L'étoile de cuivre : il va être trois heures", to: "K13r_etoile", big: true },
    ] },

  K13r_ysoline: { act: "IV", title: "Trois cents témoins", backName: "la Doyenne", place: "basse", ambiance: "temple", takes: "night", fx: { flag: "r:ysoline_plan", meet: "ysoline" },
    text: [
      "Elle veille assise, les mains dans ses manches, le capuchon rabattu. De près, elle a soixante ans, une figure longue, et des yeux gris qui ont appris la patience sur des gens qui ne bougent pas.",
      { after: "r:veilleurs_amis", text: "« Vous revoilà. Vous avez tenu parole à Sainte-Aure ; je vous écoute donc avant que vous ayez parlé. C'est un crédit que je fais rarement. »" },
      { before: "r:veilleurs_amis", text: "« Vous êtes de ceux qui ramassent. » Elle l'a dit sans dureté, comme on nomme un métier. « Vous entrez pourtant ici sans rien regarder par terre. Asseyez-vous. Dans cette église, la nuit du vingt, on écoute tout le monde. »" },
      "Tu lui dis demain : le Serment à onze heures, et ce qu'un homme en gris a préparé pour midi. Tu dis les papillotes froides, les deux cents manteaux blancs debout dans une cour.",
      "Elle t'écoute sans un geste. « Nous venons depuis soixante ans regarder dormir les nôtres. On nous a toujours dit que la Maîtrise les gardait. » Ses mains sortent des manches. « Je conduis trois cents personnes sans armes, dont la moitié a passé soixante ans. Je ne les mettrai pas dans un escalier. Mais trois cents personnes qui voient, sur un parvis, c'est une chose qu'il n'a jamais eue devant lui. Il a toujours travaillé devant des gens qui regardaient ailleurs. »",
      { after: "monde:lettres_produites", text: "« Et s'il y a un papier de la Reine à lire, il sera lu devant eux. Ils le rediront dans trois cents villages : c'est notre seule force, nous parlons beaucoup. »" },
    ],
    choices: [
      { label: "« Qu'ils chantent, pendant le Serment. Fort. J'aurai du bruit à faire, sous la Tour. »", hide: { has: "r:veilleurs_chant" }, fx: { flag: "r:veilleurs_chant", ep: ["histoire", 400] }, to: "K13r_ysoline_fin" },
      { label: "« Il me faut du sable pour un chemin qui en mange trois fois. »", hide: { any: [{ not: { has: "r:sabot_rendu" } }, { has: "r:sable_veilleurs" }] }, fx: { flag: "r:sable_veilleurs", stock: { sable: 4 }, ep: ["histoire", 400] }, to: "K13r_ysoline_fin" },
      { back: "K13r_nef" },
    ] },

  K13r_ysoline_fin: { act: "IV", title: "La note de gauche", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { after: "r:veilleurs_chant", text: "« Chanter. » Elle a presque souri. « Nous savons une note, une seule : celle de Sainte-Aure, que nos mères ont entendue dans le chœur pris et qu'elles nous ont apprise. Trois cents voix sur une note, cela couvre un charroi. Vous l'aurez, de onze heures à ce qu'il faudra. »" },
      { after: "r:sable_veilleurs", text: "Elle fait un signe. Un vieil homme apporte un coffret ferré, qu'elle ouvre d'une clef pendue à son cou. Dedans, des sabliers de corne, par rangs, étiquetés d'un nom. « Le sable des pèlerins morts dans l'année. Nous le gardons pour ceux qui viendront. Vous êtes venu{e}. » Elle en vide quatre dans ta paume, un à un, en disant quatre noms." },
      "Elle rentre ses mains dans ses manches. « Dormez, si vous savez. Moi, je ne sais plus, la nuit du vingt. J'ai une sœur dans le chœur de Sainte-Aure, prise la bouche ouverte. Je lui dois la fin d'un verset. »",
    ],
    choices: [{ back: "K13r_ysoline" }] },

  K13r_regente_paille: { act: "IV", title: "De plain-pied", place: "basse", ambiance: "temple", takes: "night", fx: { meet: "odeline" },
    text: [
      "On lui a donné une botte de paille entre un pèlerin de 541 et une famille de Veilleurs. Elle y est assise, les genoux dans les bras, ses bottes à côté d'elle, et elle regarde dormir un enfant de 601 contre la hanche d'un dormant.",
      "« Je viens ici depuis vingt-huit ans, dit-elle sans tourner la tête. On me montre la ville d'une passerelle, d'une estrade, d'une croisée. On ne m'avait jamais assise dedans. » Elle a gardé la grappe de sureau ; elle la tourne entre ses doigts. « Ils ronflent. Les miens. Je l'ignorais. »",
      { after: "r:lettres_montrees", text: "« Demain, je monterai sur l'estrade par le côté de la foule, avec ceux-ci derrière moi. Je dirai : *je ne jure pas.* Puis je lirai un vélin. » Elle réfléchit. « Il faudra le lire fort. On ne m'a appris qu'à réciter. »" },
      { before: "r:lettres_montrees", text: "« Demain, je monterai sur l'estrade par le côté de la foule, avec ceux-ci derrière moi. Je dirai ce que j'ai vu dans une cour, cette nuit. Je n'ai que cela : deux cents hommes debout. C'est un papier qui se lit tout seul. »" },
      "Elle te regarde enfin. « Vous avez quelqu'un là-dedans. Vous me l'aviez presque dit, à l'abbaye, et je vous ai coupé{e}. Dites-le maintenant. J'ai la nuit, et je ne suis plus personne : c'est le moment de me parler. »",
      "Tu dis Lison. Cinq ans. Une porte bleue, à Roquebise. Elle écoute comme on écoute un rapport, puis d'une autre manière.",
      "« Roquebise est hors du premier cercle. Si la cloche sonne, que fait Roquebise ? » Tu l'ignores. Personne ne le sait. « Alors nous serons deux, demain, à attendre une réponse. Moi sur un parvis, et vous dans un trou. » Elle te tend la grappe de sureau. « Tenez. Je n'ai rien d'autre qui soit à moi. »",
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_veillee: { act: "IV", title: "Les noms", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "Ils sont une vingtaine, assis en rond autour d'une veilleuse, et ils disent des noms. Chacun dit les siens, à son tour, sans hâte : un père, une tante, un enfant, la rue, l'année. « Mathurine Lebel, rue des Gantiers, 541. » « Les trois Aubert, à la Foire, 541. » « Colas Rondeau, charretier, sur la route d'Arvoise, 575. »",
      "Personne ne répond. On laisse un silence après chaque nom, de la longueur d'un Pater, et le suivant parle. C'est la veillée du vingt. Elle dure jusqu'à l'aube ; il y a, pour la remplir, plus de noms qu'il n'en faut.",
      "On te fait une place sans te regarder. Quand ton tour arrive, le rond attend.",
    ],
    choices: [
      { label: "« Lison, cinq ans. Roquebise, rue des Potiers. 595. »", fx: { flag: "r:nom_lison", ep: ["perso", 800] }, to: "K13r_veillee_fin" },
      { label: "Te taire, et laisser passer ton tour", to: "K13r_veillee_fin" },
    ] },

  K13r_veillee_fin: { act: "IV", title: "Un Pater de silence", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { after: "r:nom_lison", text: "Tu le dis. Ta voix te surprend : elle a tenu. Le rond laisse son silence, un Pater entier, pour une enfant de cinq ans que personne ici ne connaît. Puis une femme, à ta gauche, dit le nom suivant, et le tien est rangé avec les autres." },
      { after: "r:nom_lison", text: "Tu l'avais dit à une Régente, à une vieille horlogère, à un Cahier. Tu ne l'avais jamais dit à des gens qui en ont un pareil." },
      { before: "r:nom_lison", text: "Tu baisses la tête. Le rond attend le temps d'un Pater, comme pour un nom, puis la femme de gauche reprend. Ici, on a aussi le droit de se taire : il y en a qui viennent dix ans avant de pouvoir." },
      "La veilleuse baisse. Quelqu'un la mouche, et la veillée continue.",
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_rouget_nuit: { act: "IV", title: "Un champ qui bouge", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "Il a vidé ses poches sur la paille, et il compte : trois boutons d'argent, une montre sans verre, une cuiller, onze pincées dans un cornet. C'est toute une campagne de glane.",
      "« Demain, tu descends. Moi, sous une tour, je sers à rien : je sais pas me battre, je sais courir. » Il renifle. « Mais je sais où ils sont, les nôtres. La Courtepaille a monté sa bande derrière le convoi, pour glaner le Serment : y a toujours des dames qui perdent des choses. Ils sont au Comptoir. Trente, quarante. »",
      { after: "r:courtepaille_ennemie", text: "« Elle t'aime pas. Je sais. Mais elle aime encore moins les noirs, et elle a jamais vu deux cents blancs debout dans une cour. Ça, je peux lui raconter. Je raconte bien. »" },
      "« Je peux y aller. Leur dire que demain, sur la place, y aura un moment où faudra faire du monde devant un escalier. Juste du monde. Ils savent faire ça : ils le font à toutes les foires. »",
    ],
    choices: [
      { label: "« Vas-y. Dis-leur que c'est la dernière glane, et qu'elle est pour tout le monde. »", fx: { flag: "r:glaneurs_parvis", ep: ["histoire", 500] }, to: "K13r_rouget_fin" },
      { label: "« Reste. Demain, j'aurai besoin de quelqu'un qui coure. »", fx: { flag: "r:rouget_court" }, to: "K13r_rouget_fin" },
    ] },

  K13r_rouget_fin: { act: "IV", title: "Onze pincées", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { after: "r:glaneurs_parvis", text: "Il ramasse ses boutons, sa montre, sa cuiller. Il te pousse le cornet du pied. « Garde le sable. T'en mangeras plus que moi. » Il est à la porte avant que tu aies répondu, et il se retourne sur les six marches. « Si ça repart, demain, je te dois un champ qui bouge. Tu me montreras. »" },
      { after: "r:rouget_court", before: "r:glaneurs_parvis", text: "Il hoche la tête. Il remet ses trésors dans ses poches, sauf le cornet, qu'il te pousse du pied. « Garde le sable. T'en mangeras plus que moi. Je courrai. C'est tout ce qu'on m'a appris, et on me l'a bien appris. »" },
    ],
    choices: [{ label: "Prendre le cornet", fx: { stock: { sable: 3 } }, to: "K13r_nef" }] },

  K13r_jehan_nuit: { act: "IV", title: "Un nom à porter", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "Il a posé son sabre en travers de ses genoux, et il le graisse avec un bout de couenne. Il ne lève pas les yeux.",
      { after: "r:jehan_timbale", text: "« J'ai la timbale contre la peau. *B. C. à B. C.* Je me suis demandé toute la soirée ce qu'un Coudrier fait la veille. » Il essuie la lame. « Il graisse, je suppose. Lui aussi devait avoir des manies. »" },
      { before: "r:jehan_timbale", text: "« J'ai gardé cette colline trois ans du mauvais côté. Demain, je la monte. Je ne te demande pas par où. »" },
      "« L'escalier a soixante hommes. Je les connais. Vingt ont peur de lui, vingt ont peur de perdre la solde, et vingt aiment cela. Ce sont les vingt derniers qu'il a mis en bas. »",
      { if: ORD2, text: "Il regarde la feuille que tu portes. « Deux mains sur trois, et la Régente dessous. Donne-la-moi à l'aube. Je la porterai aux blancs, dans leur cour, avec ce que tu pourras me donner de sable. Un sergent éveillé, une ordonnance, et un déserteur qui sait où sont rangées les vraies papillotes : j'en remets trente debout avant onze heures. »" },
    ],
    choices: [
      { label: "Lui confier l'ordonnance, et trois pincées", hide: { not: ORD2 }, if: { stock: "sable", min: 5 }, why: "Il te faudrait trois pincées de reste, et de quoi descendre.", fx: { flag: "r:jehan_blancs", stock: { sable: -3 }, ep: ["histoire", 600] }, to: "K13r_jehan_fin" },
      { label: "« Monte avec moi. Je ne veux personne d'autre dans mon dos. »", fx: { flag: "r:jehan_dos" }, to: "K13r_jehan_fin" },
    ] },

  K13r_jehan_fin: { act: "IV", title: "Trente debout", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { after: "r:jehan_blancs", text: "Il plie l'ordonnance en quatre, la glisse contre la timbale ou contre son cœur, et noue les trois pincées dans son mouchoir. « L'armoire aux papillotes est au second de l'hôtel, derrière le bureau du trésorier. La clef est sous un sablier. Tout le monde le sait : nous y pensions les jours de solde. »" },
      { after: "r:jehan_blancs", text: "« Trente blancs debout, une hallebarde chacun, et un papier qui dit que l'escalier est à eux. Cela ne fait pas une armée. Cela fait un droit, avec des fers au bout. »" },
      { after: "r:jehan_dos", before: "r:jehan_blancs", text: "Il rengaine. « Dans ton dos, alors. C'est la place que je sais tenir : on m'y a mis trois ans, derrière des gens que je n'aimais pas. » Il a un demi-sourire. « Ce sera nouveau. »" },
      "Il s'allonge sur la paille, le sabre le long de la jambe, et il dort tout de suite, comme dorment les soldats.",
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_carillon_nuit: { act: "IV", title: "Douze frères", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "Il est debout près du bénitier, les bras le long du corps, sa lueur au cœur. Les enfants des Veilleurs l'ont touché toute la soirée ; il a laissé faire.",
      "« Carillon a compté. Sur la colline, il reste douze hommes de cuivre en marche. Quatre à la cour, deux au portail, six sur la pente. Ils gardent une maison vide depuis vingt et un mille neuf cents jours. Ils laissent passer une canne. »",
      { if: { item: "baguette_bronze" }, text: "La tête ronde pivote vers ta ceinture, où tu as passé la baguette. « Le Grand Maître les réglait avec ceci. Un coup sur l'épaule gauche : *halte.* Deux coups : *suis.* Carillon le sait. Il a reçu les deux. »" },
      { if: { not: { item: "baguette_bronze" } }, text: "« Il faudrait la baguette du Grand Maître. Elle est sous son sablier, dans son cabinet. Carillon sait où. Il ignore comment on y entre. »" },
    ],
    choices: [
      { label: "« Deux coups à chacun, à l'aube. Qu'ils te suivent jusqu'au parvis. »", hide: { not: { item: "baguette_bronze" } }, fx: { flag: "r:cuivre_parvis", drop: "baguette_bronze", ep: ["histoire", 600] }, to: "K13r_carillon_fin" },
      { label: "« Reste avec moi. Tu sais l'heure des deux côtés : j'en aurai besoin. »", fx: { flag: "r:carillon_heure" }, to: "K13r_carillon_fin" },
    ] },

  K13r_carillon_fin: { act: "IV", title: "Une commission", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { after: "r:cuivre_parvis", text: "Il prend la baguette à deux mains. Dans sa poitrine, la lueur a monté d'un cran. « Carillon a une commission. » Il le dit deux fois, pour l'entendre. « Douze frères, deux coups chacun, le parvis à onze heures. Il sonnera en arrivant. Vous reconnaîtrez : ce sera la soupe. »" },
      { after: "r:cuivre_parvis", text: "Il s'en va par la nef, entre les dormeurs, en posant les pieds où il n'y a personne. Un enfant s'éveille, le regarde passer, et se rendort : dans cette église, cette nuit, un homme de cuivre qui marche fait partie des choses qui se peuvent." },
      { after: "r:carillon_heure", before: "r:cuivre_parvis", text: "« Carillon restera. Il dira midi quand il sera midi dans le royaume. Il le dira bas. » La tête ronde s'incline. « Il signale que c'est la première fois qu'on le garde pour lui-même, et non pour une lettre. »" },
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_bouche: { act: "IV", title: "La dalle à l'anneau", backName: "le chevet", place: "basse", ambiance: "temple", takes: "night",
    text: [
      { first: true, text: "Derrière l'autel, la règle de laiton plonge sous une dalle. Un anneau y est couché dans sa rainure, noir de crasse. Tu tires : la dalle pivote sur son axe, avec la douceur d'une chose bien faite." },
      { first: true, text: "Vingt marches, sèches. En bas, le boyau : maçonné, voûté, haut comme un homme, tiré au cordeau vers la colline, avec la règle de laiton au milieu du sol. Il en vient un souffle froid, égal. Tout au fond du noir, un point gris, de perle, qui se tient immobile." },
      { first: true, text: "Tu fais cent pas, ta veilleuse au poing, en comptant ce qui tombe de ton sablier. Trois grains pour un, puis quatre. Tu comptes les graduations du laiton. Tu remontes, et tu fais le calcul sur tes doigts, à la mode des glaneurs." },
      { first: true, text: "Six pincées jusqu'à la grille, en marchant sans t'arrêter. Rien pour revenir. C'est un chemin qu'on prend dans un seul sens." },
      { first: true, if: { item: "clef_droit" }, text: "Tu as, dans ta poche, une clef de bronze qui pendait à part dans un Trésor, sur son crochet. La grille du fond a sa serrure." },
      { first: true, if: { not: { item: "clef_droit" } }, text: "Au bout, il y a une grille de bronze, et tu n'en as pas la clef. Une grille de quatre cents ans a des gonds ; des gonds, cela se regarde de près, quand on y est." },
      { again: true, text: "La dalle, les vingt marches, le boyau. Six pincées jusqu'à la grille." },
      { first: true, with: "jehan", text: "Jehan a descendu les vingt marches derrière toi. Il regarde le point gris. « Il n'y a mis personne. Soixante hommes dans l'escalier, et personne ici. » Il se gratte la nuque. « Ou bien il ignore ce trou. Ou bien il sait ce qu'il coûte, et il compte dessus. »" },
    ],
    choices: [{ label: "Rabattre la dalle", fx: { flag: "r:droit_mesure" }, to: "K13r_nef" }] },

  K13r_comptoir_nuit: { act: "IV", title: "Le Comptoir, la nuit du vingt", backName: "le Comptoir", place: "basse", ambiance: "ville", takes: "night", shop: "iii_comptoir",
    text: [
      { first: true, text: "Le Comptoir des glaneurs tient dans une ancienne boutique de drapier, entre deux commis de 541 qui mesurent la même aune depuis soixante ans. On y vend de tout, à toute heure, et cette nuit plus cher : la veille du Serment, le sable monte." },
      { first: true, text: "La salle est pleine. Des bandes sont descendues de la lisière derrière le convoi ; elles boivent, elles comptent, elles attendent les dames de la Cour et ce qui en tombe. On parle bas d'une chose : deux cents manteaux blancs, là-haut, debout dans une cour. La nouvelle est descendue plus vite que toi." },
      { again: true, text: "Le Comptoir, ses bandes, ses prix du vingt juin." },
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_quai_nuit: { act: "IV", title: "La Petite", place: "basse", ambiance: "eau", takes: "night", fx: { pv: 2 },
    text: [
      "Le cadran du quai est sur son pilier, entre les gabares. Trois marches. {autre} y était assis{autre:e} cette nuit, il y a soixante ans, et t'y écrivait.",
      "C'est midi sur l'eau, et l'eau est debout dans le bassin, ridée d'un bord à l'autre. Un grutier a lâché sa roue. Une marchande a la bouche ouverte sur un prix. Ils ont la tête tournée du même côté, et l'enfant du batelier en est au premier doigt de la seconde main.",
      "La boulangerie du quai a sa porte ouverte. Le mitron tient sa pelle dans le four, où le feu se dresse sans chauffer. Sur l'étal, il y a la fournée du Grand Midi : des couronnes, dorées, qui ont soixante ans et qui sont du matin.",
      "Tu en prends une. Les glaneurs le font. Elle est tiède sous le pouce, et la croûte craque. Tu la manges sur les trois marches, à la place où quelqu'un a mangé la même odeur.",
      { after: "r:tiennette_eveillee", text: "Au pignon à la cloche bleue, par la porte de la salle basse, tu vois une large femme derrière un comptoir, entre des rangées de pots. Tu lui as parlé, l'autre jour, le temps d'une pincée. Elle avait dit : *c'est là qu'on me trouvera.*" },
    ],
    choices: [{ back: "K13r_nef" }] },

  K13r_etoile: { act: "IV", title: "La même étoile", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "La pièce de lune a fait le tour d'un pilier. Elle revient vers la règle, plus basse, plus longue.",
      "Tu te rassois sur l'étoile de cuivre. Elle est usée au milieu, en cuvette, par quatre cents ans de semelles. *ICI MIDI, QUOI QU'ON SONNE.*",
      "Autour de toi, les noms continuent, à mi-voix, un Pater entre chacun.",
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "M13", big: true }] },
});

module.exports = { passages: P, extras: {} };
