// Le Douzième Coup · chapter 10, the one who stays, second half (act III, 19 June 601). The afternoon, from the
// quay up to the foot of the rue du Cadran. Hub `K10r_carrefour`, the crossing of the Adjusters' fountain: a quarter
// sheet stuck with bread for sixty years (`r:lu_placard_601`), the Gleaners' Counter (shop `iii_comptoir`,
// `r:sait_chaise`), the gutters that carry grey down from the hill (`r:glane_ville`, rivals: `r:rivaux_battus` |
// `r:rivaux_part`), the Tannery and its four thresholds (reads `monde:ecorce_donnee`, `monde:tannerie_partage`), the
// wax hall (`r:cire_prise`, item `pain_cire`), a wedding taken on its steps (`r:rouget_retenu` | `r:rouget_bague`),
// the barrier of the Sand Guard across the rue du Cadran (`r:vu_barriere_cadran`, `r:piste_vis`), the follower in
// soft shoes (`r:suiveur_tait` | `r:borne_vue`). Carillon, messenger of the Guild, run down on the forty-second
// sleeve: rewound with a pinch in his cup (joins, `r:carillon`), the question of his tube (`r:lettre_coudrier`, item
// `lettre_maudit` ; `r:carillon_ferme` if the answer is wrong). Night in the loft of À la Patiente → B10.
var P = {};
var UNE_PINCEE = { stock: "sable", min: 3 };
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };

Object.assign(P, {
  K10r_tantot: { act: "III", title: "Midi et un rien", place: "basse", ambiance: "eau",
    text: [
      "Tu refermes le Cahier, et tu remets la pierre à l'anneau. Sur ta face de la Petite, l'aiguille a fait, pendant que tu écrivais, tout le chemin d'une heure de 601. Elle marque une heure. L'autre face dit midi. Un marinier qui lèverait les yeux saurait, pour la première fois de sa vie, que deux horloges de Méridane peuvent se contredire, et il en ferait une maladie.",
      "{autre} est là-haut, à cette heure, il y a soixante ans, dans une cour où l'on défend aux horloges de sonner. Tu regardes la colline. Elle commence à trois rues d'ici, par une rue droite, à fontaines, que le gris descend comme un ruisseau.",
    ],
    choices: [{ label: "Descendre les trois marches", to: "K10r_basse", big: true }] },

  K10r_carrefour: { act: "III", title: "La Fontaine-aux-Régleurs", backName: "le carrefour de la fontaine", place: "basse", ambiance: "ville", hub: true,
    text: [
      { first: true, text: "La ville basse finit à un carrefour. Cinq rues y tombent, et la sixième en part : large de quatre toises, pavée de grès, droite comme un coup de règle, elle monte entre des maisons de plus en plus hautes jusqu'à une esplanade, un mur, et la Tour. C'est la rue du Cadran. Tout ce qui compte ici a été tracé par des gens qui regardaient là-haut." },
      { first: true, text: "Au milieu du carrefour, une fontaine à vasque, avec son horloge. Le jet est debout, noué, frangé, comme un arbre de verre. Tu approches : il tombe, dans le rond de ton bras, avec un bruit qui te fait sursauter, et se refige derrière toi." },
      { first: true, text: "La foule de 541 monte. Des familles, des confréries avec leurs bannières, un marchand d'oublies, une noce sur les marches d'une chapelle. Et, en travers de la rue du Cadran, à la hauteur de la troisième maison, une chose de 601 : une barrière de madriers noirs, des piques, un sablier d'or sur un fanion." },
      { first: true, text: "Les ruisseaux de la rue sont gris. Il y descend, de la colline, un sable fin, qui luit à l'ombre, et qui s'amasse au carrefour dans le creux des pavés." },
      { again: true, text: "Le carrefour, la fontaine debout, la barrière noire en travers de la rue qui monte." },
      { first: true, text: "Devant la fontaine, au bas de la rue, il y a un enfant de cuivre." },
      { again: true, before: "r:carillon", text: "L'enfant de cuivre n'a pas bougé, la main tendue vers une manche." },
      { after: "r:suivi_ville", before: "K10r_suiveur", text: "Le garde en souliers mous est adossé à une borne, à trente pas. Il mange une pomme." },
    ],
    choices: [
      { label: "L'enfant de cuivre", hide: { has: "r:carillon" }, to: "K10r_carillon" },
      { label: "La fontaine, et ce qu'on y a collé", hide: { seen: "K10r_placard" }, to: "K10r_placard" },
      { label: "Une boutique à volets noirs : *Comptoir des glaneurs*", to: "K10r_comptoir" },
      { label: "Les ruisseaux gris de la rue du Cadran", hide: { has: "r:glane_ville" }, to: "K10r_ruisseau" },
      { label: "La barrière de la Garde", to: "K10r_barriere" },
      { label: "La noce, sur les marches de la chapelle", hide: { seen: "K10r_noce" }, to: "K10r_noce" },
      { label: "Une halle basse, d'où vient une odeur de miel", hide: { seen: "K10r_halle" }, to: "K10r_halle" },
      { label: "Une rue qui descend vers une eau de trois couleurs", hide: { seen: "K10r_tannerie" }, to: "K10r_tannerie" },
      { label: "Le garde en souliers mous", hide: { any: [{ not: { has: "r:suivi_ville" } }, { seen: "K10r_suiveur" }] }, to: "K10r_suiveur" },
      { label: "Laisser venir le soir, et regagner le quai", to: "K10r_brune", big: true },
    ] },

  // --- The fountain ---
  K10r_placard: { act: "III", title: "À la mie de pain", place: "basse", ambiance: "ville", fx: { flag: "r:lu_placard_601", ep: ["histoire", 300] },
    text: [
      "Sur le fût de la fontaine, à hauteur d'yeux, entre un avis de la Guilde et le tarif des porteurs d'eau, il y a un quart de feuille. Il tient par les quatre coins, à la mie de pain mâchée. Les bords ont jauni d'un jour. L'encre est noire comme si elle séchait encore.",
      "L'écriture est une ronde appliquée, d'enfant de chœur ; chaque lettre a été faite seule, avec sa pleine et son délié.",
      "*Gens de Méridane. Les Horlogers-Jurés délibèrent en ce moment de suspendre la Loi du Balancier pour une chambre et pour un an. La Loi dit que nul ne tient le Balancier. Elle ne dit pas : sauf une chambre. On ne vous demande rien, et c'est votre heure. Je me permets de vous l'apprendre. Pardon de vous alarmer.*",
      "Un porteur d'eau est pris devant, ses deux seaux au bout des bras, la tête penchée. Il lisait. Il a sur la figure le commencement d'un sourire : on lui a demandé pardon de l'alarmer, et cela l'a amusé. Le onzième coup est tombé pendant qu'il souriait.",
      { after: "monde:josquin_ami", text: "*Pardon de vous alarmer.* {autre} t'a écrit à midi qu'il y avait là-haut un garçon à besicles, les doigts noirs jusqu'au poignet, qui sortait la nuit avec une corbeille de plumes. Tu as sous le nez une de ses quarante feuilles. Elle a tenu soixante ans, à la mie de pain, et le seul homme qui l'ait lue jusqu'au bout l'a trouvée polie." },
      "Tu la laisses. Elle est à sa place.",
    ],
    choices: [{ back: "K10r_carrefour" }] },

  // --- The Counter ---
  K10r_comptoir: { act: "III", title: "Le Comptoir des glaneurs", backName: "le Comptoir", place: "basse", ambiance: "ville", shop: "iii_comptoir",
    text: [
      { first: true, text: "C'était une boutique de mercier. On a ôté l'enseigne, peint les volets en noir, et posé sur le comptoir de 541 une balance de 601, à plateaux de corne, sous une cage de verre. Le mercier est toujours là, dans un coin, pris à mesurer un ruban contre son bras ; on a mis devant lui un paravent, par égard, ou pour ne plus le voir." },
      { first: true, text: "C'est le seul endroit de la ville basse où la Régence laisse un glaneur vendre et acheter. La Maîtrise des Sables y tient la balance. Elle y achète le sable au poids et le revend à la pincée, ce qui fait, d'un plateau à l'autre, le plus beau commerce du royaume." },
      { first: true, text: "Le commis est un homme chauve, en manches de lustrine, qui a posé son propre sablier sur le comptoir pour le surveiller. « On ferme à la brune. On ferme après-demain pour toujours, à ce qu'on dit, alors achetez. Ici le sable coule double : ce que je vous vends, vous l'aurez usé avant de m'avoir dit merci. »" },
      { again: true, text: "Le Comptoir, sa balance sous verre, le commis qui surveille son propre sablier." },
    ],
    choices: [
      { label: "Lui demander pourquoi l'on fermerait pour toujours", hide: { seen: "K10r_comptoir_dit" }, to: "K10r_comptoir_dit" },
      { back: "K10r_carrefour" },
    ] },

  K10r_comptoir_dit: { act: "III", title: "Ce qu'on dit sous une cage de verre", place: "basse", ambiance: "ville", fx: { flag: "r:sait_chaise" },
    text: [
      "Il regarde la porte, puis son sablier, puis toi. Il a la voix des gens qui pèsent.",
      "« Parce que la Maîtrise a tout racheté. Depuis un mois. Tout ce qui s'est glané de Roquebise à la mer : j'ai vu passer les bordereaux. Elle paie le double, elle paie le triple, elle ne revend plus. Un marchand qui achète tout et ne vend rien, ou bien il est fou, ou bien il sait que la boutique d'en face va brûler. »",
      "Il baisse le ton. « Et les douze bouteilles sont montées. Je les ai vues passer hier, là, devant ma porte, sur des rouleaux, avec quatre-vingts hommes aux cordes. Hautes comme vous et moi, vides, bouchées. On les mène à la Tour. Qu'est-ce qu'on met dans douze bouteilles vides, au pied d'une colline qui sue du sable depuis soixante ans ? » Il n'attend pas la réponse. Il la sait, et elle lui fait peur.",
      "« Monseigneur est monté derrière, à pied, les mains au dos. Et derrière Monseigneur, une chaise fermée, à quatre porteurs. Dedans, une vieille. Je l'ai entendue : elle disait aux porteurs qu'ils tenaient leurs brancards comme des manches de pelle. » Il a presque souri. « On l'a mise à l'hôtel de la Maîtrise, sur l'esplanade, l'ancien logis du trésorier des Jurés. Avec un garde à la porte et un établi dans la chambre. Un établi. Pour une prisonnière. »",
      { after: "r:line_signe", text: "Une chaise fermée, quatre porteurs, une vieille qui a l'œil aux brancards. Tu as dans ta poche une vis bleue, tombée de cette chaise." },
      { with: "rouget", text: "« Elle est là-haut, alors, dit Rouget. La vieille des champs. » Il renifle. « Elle m'avait dit que je tenais ma fronde comme un chapelet. C'était vrai. »" },
    ],
    choices: [{ back: "K10r_comptoir" }] },

  // --- The gutters ---
  K10r_ruisseau: { act: "III", title: "Ce qui descend de la colline", place: "basse", ambiance: "ville",
    text: [
      "Tu t'accroupis au bord du ruisseau. Tu as glané toute ta vie au bord des champs, à la cuiller de corne, des rosées qu'il fallait trois matins pour voir. Ici, cela coule. Un sable gris, sec, qui descend la pente grain à grain, d'un mouvement que rien ne pousse, et qui fait au creux de chaque pavé un petit tas luisant.",
      "Il y en a pour dix fioles dans la longueur d'une maison. Il y en a, là-haut, de quoi remplir des tonneaux.",
      "Un écriteau est cloué à la borne, sous le sablier d'or : *Les eaux, boues et sables de la rue du Cadran sont à la Maîtrise. Qui glane ici glane la Couronne. Le fouet et la marque.*",
      { with: "jehan", text: "« On en a marqué trois, l'an dernier, dit Jehan. Au fer, sur la main qui ramasse. J'ai tenu le poignet du second. » Il regarde ailleurs. « C'est un des jours qui m'ont fait partir. »" },
      "Plus bas, à l'angle d'une porte cochère, deux dos sont penchés sur le même ruisseau, une cuiller au poing. Des glaneurs, entrés par quelque trou, qui travaillent vite et regardent la barrière.",
    ],
    choices: [
      { label: "Glaner le creux des pavés, à la cuiller, un œil sur les piques",
        test: { dom: "discretion", diff: 10, label: "Ramasser sous un écriteau", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 5 }, { if: { present: "rouget" }, v: 10 }] },
        win: { fx: { flag: "r:glane_ville", stock: { sable: 5 }, ep: ["perso", 400] }, to: "K10r_rivaux" },
        lose: { fx: { flag: ["r:glane_ville", "r:glane_vue"], stock: { sable: 2 } }, to: "K10r_rivaux" } },
      { label: "Laisser le ruisseau à qui il fait peur", back: "K10r_carrefour" },
    ] },

  K10r_rivaux: { act: "III", title: "Le même ruisseau", place: "basse", ambiance: "ville",
    text: [
      { outcome: "win", text: "Tu travailles comme on t'a appris : la cuiller à plat, le poignet mou, sans gratter la pierre. Le gris vient tout seul. Tu en as cinq pincées dans le temps d'un Ave, et la barrière n'a pas tourné la tête." },
      { outcome: "lose", text: "Tu en as deux pincées quand une pique frappe le pavé, là-haut, trois fois. On t'a vu{e}. Personne ne descend : un garde ne quitte pas une barrière pour un glaneur. Mais on a regardé ta veste, et l'on s'en souviendra." },
      "Les deux autres ont levé le nez. Ils sont maigres, hâlés, vêtus de toile à sac. L'aîné a une main bandée d'un chiffon, la droite, et il tient sa cuiller de la gauche. Il regarde ce que tu viens de mettre dans ton sablier, puis le ruisseau, puis toi.",
      "« C'est notre coin, dit-il. On y est depuis l'aube. On a passé par l'égout de la Tannerie, on y a laissé un camarade qui s'est arrêté dans l'eau. Ce qui coule ici, on l'a payé. »",
      { with: "rouget", text: "« Ton coin, dit Rouget. T'as un papier ? » Il a déjà une pierre dans sa fronde. L'aîné regarde la fronde, et sa main bandée se ferme." },
    ],
    choices: [
      { label: "« Le ruisseau a deux bords. Je prends celui d'en face, et je siffle si la pique descend. »", fx: { flag: "r:rivaux_part", stock: { sable: 2 }, ep: ["perso", 400] }, to: "K10r_rivaux_fin" },
      { label: "Leur montrer ta cuiller, et le chemin de l'égout",
        fight: { title: "Deux glaneurs de la Tannerie", enemies: [{ id: "glaneur_rival", n: 2 }], terrain: "ville",
          win: { fx: { flag: "r:rivaux_battus", stock: { sable: 3 } }, to: "K10r_rivaux_fin" },
          lose: { fx: { flag: "r:rivaux_part", pv: -2, stock: { sable: -2 } }, to: "K10r_rivaux_fin" } } },
      { label: "Leur laisser le coin : tu as ce qu'il te faut", fx: { flag: "r:rivaux_part" }, to: "K10r_rivaux_fin" },
    ] },

  K10r_rivaux_fin: { act: "III", title: "La main bandée", place: "basse", ambiance: "ville",
    text: [
      { after: "r:rivaux_battus", text: "Ils sont partis en boitant, par la porte cochère. L'aîné a laissé tomber sa cuiller. Tu la ramasses : elle est de corne, usée d'un côté, avec une encoche au manche pour chaque saison. Il y en a onze. Tu la poses sur la borne, où il la retrouvera, et tu te demandes ce que tu viens de gagner au juste." },
      { after: "r:rivaux_part", text: "L'aîné s'appelle Géraud. Il te le dit en travaillant, du bord d'en face, sans lever la tête. Sous le chiffon, sa main droite porte un sablier, au fer, de l'an passé. « Ils m'ont pris ici. Je suis revenu ici. Ça leur apprendra à bien viser leur écriteau. »" },
      { after: "r:rivaux_part", text: "« Tu montes ? » Il a vu où tu regardais. « Par la rue, tu passes pas. Par les toits, y a des hommes de cuivre, là-haut, sur le mur des horlogers, qui te posent la main dessus et tu restes planté comme un pris, sauf que t'es pas pris, tu vois tout, et t'attends qu'un garde vienne te cueillir. J'en ai vu un rester trois jours. » Il crache. « Ils lâchent que si on leur montre du bronze. Une clef, une médaille, je sais pas. J'ai pas de bronze. »" },
      "Le ruisseau continue de descendre, pour personne, entre vos deux bords.",
    ],
    choices: [{ back: "K10r_carrefour" }] },

  // --- The barrier ---
  K10r_barriere: { act: "III", title: "Qui tient la rue tient la colline", backName: "la barrière de la rue du Cadran", place: "basse", ambiance: "ville", fx: { flag: "r:vu_barriere_cadran" },
    text: [
      { first: true, text: "On a planté la barrière entre deux maisons, en travers de la rue, sans déranger personne : les familles de 541 qui montaient sont prises des deux côtés, et les madriers passent entre elles, à hauteur de poitrine, comme une clôture dans un troupeau. Une bourgeoise en robe gorge-de-pigeon a le menton posé dessus." },
      { first: true, text: "Douze gardes, casaque noire, la pique au pied. Un lieutenant jeune, à cheval sur une chaise, qui lit. Au-delà, la rue monte, vide de tout ce qui est de ton siècle, et grise jusqu'aux portes. À chaque fontaine, un manteau blanc : la Régente a mis ses propres gens au-dessus de ceux de la Maîtrise, de cent pas en cent pas, et les deux troupes se regardent d'un étage à l'autre." },
      { first: true, text: "Un écriteau : *De par Monseigneur le Maître des Sables, la colline est close jusqu'au Serment. Passent les gens de la Maîtrise, les gens de Son Altesse, et les pèlerins à billet, le 21, de l'aube à onze heures.*" },
      { again: true, text: "La barrière noire, les douze piques, le lieutenant sur sa chaise. Plus haut, les manteaux blancs." },
      { first: true, after: "r:line_signe", text: "Tu regardes le pavé, par habitude de glaneur. À dix pas au-delà de la barrière, au milieu de la chaussée, quelque chose brille, bleu, de ce bleu de gorge de pigeon. Et plus haut, à la fontaine suivante, encore. Elle a semé sa route, de cent pas en cent pas, avec ce qu'on lui a laissé dans le coin de son tablier." },
      { first: true, with: "jehan", text: "« Courtenvaux, dit Jehan, tout bas. Le lieutenant. Il lit des romans pendant ses gardes. Il ne lève les yeux que si l'on fait du bruit ou si l'on a un papier. » Il recule d'un pas, dans l'ombre d'un porche. « Je l'ai servi. Il me reconnaîtrait à mon dos. »" },
      { first: true, after: "r:regente_parle", text: "*Les gens de Son Altesse.* Elle t'a dit, à Sainte-Aure, de lui porter un papier au Palais. Elle n'a pas dit comment on passait devant douze piques pour le lui remettre." },
    ],
    choices: [
      { label: "Noter les vis bleues, pour demain", hide: { any: [{ not: { has: "r:line_signe" } }, { has: "r:piste_vis" }] }, fx: { flag: "r:piste_vis", ep: ["histoire", 300] }, to: "K10r_barriere" },
      { back: "K10r_carrefour" },
    ] },

  // --- The wedding ---
  K10r_noce: { act: "III", title: "Une noce", place: "basse", ambiance: "ville",
    text: [
      "La chapelle a sept marches, et la noce les occupe toutes. On sortait. Le marié est en haut, rouge, heureux, le chapeau de travers. La mariée a dix-huit ans, une couronne de fleurs d'oranger, et elle rit, la tête renversée : quelqu'un, d'en bas, vient de lui crier une chose qu'on ne crie qu'aux mariées.",
      "On leur jetait du blé. Il est en l'air. Une poignée entière, partie d'une main de vieille femme, s'ouvre au-dessus du couple en éventail, grain à grain, et le soleil de 541 est dans chaque grain.",
      "Tu montes deux marches. Dans le rond de ton pas, le blé tombe : une petite pluie sèche, sur la pierre, sur ton épaule. Tu recules. Le reste attend.",
      "Ils se sont mariés à onze heures, pour être sur le parvis à midi. Ils ont eu une heure.",
      { with: "rouget", text: "Rouget s'est arrêté devant le père de la mariée, un gros homme en habit puce, qui a la main dans son gousset. Il en sortait une bague, pour la donner : on la voit, entre deux doigts, de l'or, avec une pierre. Rouget la regarde. Il a les mains dans son dos. Il se balance d'un pied sur l'autre." },
    ],
    choices: [
      { label: "« Laisse. C'est son cadeau de noces, et elle ne l'a pas encore eu. »", hide: { not: ROUGET }, fx: { flag: "r:rouget_retenu", conf: { rouget: 5 } }, to: "K10r_noce_fin" },
      { label: "Regarder ailleurs, le temps qu'il faut", hide: { not: ROUGET }, fx: { flag: "r:rouget_bague", conf: { rouget: 10 } }, to: "K10r_noce_fin" },
      { back: "K10r_carrefour" },
    ] },

  K10r_noce_fin: { act: "III", title: "L'habit puce", place: "basse", ambiance: "ville", with: "rouget",
    text: [
      { after: "r:rouget_retenu", text: "Rouget hausse une épaule. « J'allais pas la prendre. Je regardais comment elle était faite. » Il regarde encore. Puis il fait une chose à laquelle tu ne t'attendais pas : il tire de sa chemise un bout de ruban rouge, qui a changé de propriétaire à la Foire, et il le noue, très vite, au poignet de la mariée, par-dessus le gant. « Voilà. Comme ça elle aura eu un cadeau de quelqu'un d'après. » Il redescend les marches en sifflant, les oreilles écarlates." },
      { after: "r:rouget_bague", text: "Quand tu te retournes, Rouget a les mains dans ses poches et l'air de quelqu'un qui pense au temps qu'il fait. Entre les deux doigts du gros homme, il y a toujours quelque chose qui brille : un bouton de cuivre, bien astiqué, de la veste d'un garde. « Il verra pas la différence, dit Rouget. Il regarde la Tour. » Il marche trois pas. « Elle si, peut-être. » Il en marche trois autres, moins vite." },
      { after: "r:rouget_bague", text: "Au bas des marches, il s'arrête, et il remonte. Tu ne regardes pas. Quand il revient, il n'a plus les mains dans ses poches, et il dit, furieux, à personne : « C'est le blé. Ça me fait quelque chose, ce blé. »" },
    ],
    choices: [{ back: "K10r_carrefour" }] },

  // --- The wax hall ---
  K10r_halle: { act: "III", title: "La halle à la cire", place: "basse", ambiance: "ville",
    text: [
      "C'est une halle basse, à piliers de bois, où la ville pesait sa cire. Il en venait par barges entières, deux fois la semaine, pour les cierges de trois cents autels et pour ceux qu'on brûlait là-haut, au chevet d'une enfant. Les pains sont empilés jusqu'aux poutres : des meules jaunes, de trente livres, qui sentent le miel et la ruche.",
      "Le peseur est à sa balance, un fil à couper dans les mains. Sous sa table, par terre, il y a des rognures, un plein panier.",
      { after: "monde:lu:cire", text: "*Un homme qui n'a pas entendu n'est pas pris*, a écrit {autre}, d'après un journal trouvé dans une malle. *On lui avait coulé de la cire dans les deux oreilles.* Tu regardes la halle. Il y avait, le 21 juin 541, à trois rues du onzième coup, de quoi boucher les oreilles de quarante mille personnes et de leurs chiens. Elle est restée sur ses claies. Personne ne savait." },
      { before: "monde:lu:cire", text: "Tu prends une rognure, tu la roules entre deux doigts. Elle s'amollit, elle prend l'empreinte de ta peau. C'est une matière qui garde ce qu'on lui confie." },
      { after: "monde:su:recolte", text: "*Dans cinq jours, la Dormante prend tout.* C'était il y a trois jours. Tu ne sais pas si le coup qui vient s'entendra ; mais tu sais ce que tu aurais donné, à Roquebise, pour avoir su à temps une chose aussi bête qu'une boule de cire." },
    ],
    choices: [
      { label: "Prendre une livre de rognures, sous la table du peseur", hide: { item: "pain_cire" }, fx: { flag: "r:cire_prise", item: "pain_cire" }, to: "K10r_carrefour" },
      { back: "K10r_carrefour" },
    ] },

  // --- The Tannery ---
  K10r_tannerie: { act: "III", title: "Quatre seuils", place: "basse", ambiance: "eau",
    text: [
      "La rue descend vers un bras de rivière, large de trois toises, entre deux rangs de maisons à galeries. L'eau y est de trois couleurs, par bandes, brune, rouge, d'un bleu d'encre, et les trois couleurs se touchent sans se mêler, arrêtées au bord l'une de l'autre comme des pièces d'étoffe. Des peaux pendent aux galeries, par centaines.",
      "Les tanneurs étaient à la fête. La rue est vide, sauf quatre seuils.",
      { if: { has: "monde:tannerie_partage" }, text: "Trois des seuils ont leur chaise, sans personne dessus. Sur la quatrième porte, entrouverte, tu vois une table, et autour de la table quatre femmes en fichu noir, assises, serrées, les coudes sur le bois. Il y a au milieu une râpe, un reste d'écorce gros comme le pouce, et quatre bols. Elles ont partagé. Elles regardent toutes les quatre le fond de la pièce, où il y a quatre paillasses." },
      { if: { has: "monde:tannerie_partage" }, text: "Tu sais l'arithmétique : {autre} te l'a écrite, comme une religieuse la lui avait faite. Deux, pendant dix jours. Elles ont choisi de ne pas savoir lesquels. Le onzième coup les a prises au deuxième bol, toutes ensemble, avant que le compte ait eu le temps d'être juste." },
      { if: { all: [{ has: "monde:ecorce_donnee" }, { not: { has: "monde:tannerie_partage" } }] }, text: "Sur trois seuils, une femme assise, en fichu noir, les mains vides. La quatrième porte est fermée. Par la fenêtre, tu vois une femme penchée sur une paillasse, un bol à la main, qui soulève la tête d'une enfant. L'enfant boit. Elle a les ongles gris, encore, mais ses lèvres sont roses. Sur la table, une râpe, et un morceau d'écorce où il manque trois jours." },
      { if: { all: [{ has: "monde:ecorce_donnee" }, { not: { has: "monde:tannerie_partage" } }] }, text: "Les trois autres ont le dos à la Tour. Elles regardent cette porte." },
      { if: { not: { has: "monde:ecorce_donnee" } }, text: "Sur chacun, une femme assise, en fichu noir, les mains vides. Elles ont le dos à la Tour. Chacune regarde par-dessus son épaule, dans sa maison, où quelque chose dort. Ce sont les quatre seules personnes de la rue pour qui le Grand Midi n'était pas une fête." },
      "Tu viens d'un pays où l'on guérit de cela avec une tisane. L'arbre pousse derrière la troisième maison de ta rue. Tu pourrais en remplir un sac. Ces enfants ne peuvent rien boire : on ne fait pas avaler une cuillerée à un pris. Il faudrait d'abord leur rendre leur heure, et leur heure, sans l'écorce, est celle où ils meurent.",
      "Tu remontes la rue avec ce nœud-là, que personne, à Sainte-Aure ni ailleurs, ne t'avait montré : éveiller cette ville, c'est aussi remettre en marche tout ce qui s'y mourait.",
    ],
    choices: [{ back: "K10r_carrefour" }] },

  // --- The follower ---
  K10r_suiveur: { act: "III", title: "Les souliers mous", place: "basse", ambiance: "ville",
    text: [
      "Tu vas droit à lui. Il avale de travers. On lui avait dit d'être vu ; on ne lui avait pas dit quoi faire si l'on venait lui parler.",
      "Il a dix-huit ans, des taches de son, et une casaque trop neuve. « J'ai ordre de vous suivre, dit-il, très vite, pour s'en débarrasser. Pas de vous arrêter. De suivre, et de dire le soir où vous êtes allé{e}. C'est tout. Je m'appelle Colas. Je ne devrais pas vous le dire. »",
      "Tu demandes ce qu'il dira ce soir.",
      "« Le quai. L'auberge. L'église. » Il compte sur ses doigts, en garçon appliqué. « Et à midi le cadran du port, où vous avez levé une pierre, sous l'anneau, et tiré quelque chose. Un livre. » Il te regarde, inquiet d'avoir bien vu. « C'est cela qu'il voulait savoir, je crois. Le lieutenant m'a dit : *surtout, où il creuse.* »",
      "Tu sens le Cahier contre ta poitrine, et, sous lui, soixante ans de terre qui cessent d'être sûrs.",
    ],
    choices: [
      { label: "« Colas. Sais-tu ce qu'il y aura dans les douze bouteilles, après-demain ? »",
        test: { dom: "social", diff: 10, label: "Dire le vrai à un garçon qui a des ordres", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "r:sait_recolte" }, v: 15 }, { if: { present: "jehan" }, v: 10 }] },
        win: { fx: { flag: "r:suiveur_tait", ep: ["perso", 600] }, to: "K10r_suiveur_fin" },
        lose: { fx: { flag: ["r:borne_vue", "monde:borne_vue"] }, to: "K10r_suiveur_fin" } },
      { label: "Lui mettre trois pincées dans la main, et lui fermer les doigts dessus", if: UNE_PINCEE, why: "Il te faudrait trois pincées.", fx: { flag: ["r:suiveur_tait", "r:suiveur_paye"], stock: { sable: -3 } }, to: "K10r_suiveur_fin" },
      { label: "Le laisser à son rapport", fx: { flag: ["r:borne_vue", "monde:borne_vue"] }, to: "K10r_suiveur_fin" },
    ] },

  K10r_suiveur_fin: { act: "III", title: "Ce qu'on dira ce soir", place: "basse", ambiance: "ville",
    text: [
      { after: "r:suiveur_paye", text: "Il regarde sa main fermée. Trois pincées, c'est un mois de solde. « Le quai, dit-il lentement. L'auberge, l'église. À midi, vous avez mangé un hareng sur les marches du cadran. » Il met le poing dans sa poche. « Je vois mal de loin. Le lieutenant le sait, il me le reproche assez. »" },
      { if: { all: [{ has: "r:suiveur_tait" }, { not: { has: "r:suiveur_paye" } }] }, text: "Tu le lui dis. Quarante mille souffles, soixante ans, une colline de gris, et douze bouteilles pour la boire. Tu lui dis ce que le Maître des Sables t'a dit sous une tente, du même ton qu'on annonce une vendange : que dans deux jours la Dormante prendra tout, et qu'il ne fera rien contre." },
      { if: { all: [{ has: "r:suiveur_tait" }, { not: { has: "r:suiveur_paye" } }] }, text: "Colas a une mère à Arvoise. Tu le vois y penser. Il jette sa pomme. « On nous a dit que le Serment réveillerait la ville. Qu'on gardait la colline pour cela. » Il se tait un moment. « Vous avez mangé un hareng, à midi, sur les marches. Je n'ai rien vu d'autre. Et demain, si l'on me remet derrière vous, je vous perdrai au premier pont : je me perds tout seul, d'habitude, on me croira. »" },
      { after: "r:borne_vue", text: "Il hoche la tête, soulagé qu'on ne lui demande rien. Ce soir, dans un hôtel de l'esplanade, un homme aux yeux de deux couleurs apprendra qu'un glaneur a tiré un livre de sous le cadran du port. Il fera lever la pierre. Il trouvera du sable de rivière, et la forme d'une chose plate qui a dormi là soixante ans. C'est un homme qui sait lire une forme." },
      { after: "r:borne_vue", text: "Les pierres où tu creuses ne sont plus à vous deux seulement." },
    ],
    choices: [{ back: "K10r_carrefour" }] },

  // --- Carillon ---
  K10r_carillon: { act: "III", title: "L'enfant de cuivre", backName: "l'enfant de cuivre", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Il a la taille d'un garçon de dix ans. Il est fait de plaques de cuivre rouge, rivées, avec des épaules, des coudes, des mains à trois doigts, et une tête ronde où l'on a ménagé deux yeux de verre et une bouche en fente, droite, qui lui donne l'air d'attendre une réponse. Dans sa poitrine, derrière une grille en forme de cœur, il y a une clochette, et sous la clochette une coupelle, vide." },
      { first: true, text: "Il est arrêté au milieu d'un pas, le pied gauche en l'air. Sa main droite est levée. Elle tient, entre deux doigts, la manche d'un notaire de 541, qui regarde la Tour." },
      { first: true, text: "Tu regardes la manche. Le drap porte, à l'endroit des doigts, une petite tache d'huile, ronde, fraîche. Tu regardes la manche du voisin : une tache. Celle de la femme d'après. Tu remontes la rue des yeux, de dos en dos. Sur quarante personnes, depuis la barrière jusqu'ici, à la même hauteur, la même tache, de la taille d'un liard." },
      { first: true, text: "Il n'a pas été pris. On ne lui a pas fait d'oreilles. Il est descendu de la colline après le onzième coup, dans une ville où plus rien ne bougeait, et il a tiré quarante et une personnes par la manche, l'une après l'autre, poliment. À la quarante et unième, sa coupelle s'est trouvée vide." },
      { again: true, text: "L'enfant de cuivre, le pied en l'air, la manche du notaire entre deux doigts." },
      { with: "jehan", first: true, text: "« Un messager de la Guilde, dit Jehan. Il y en a un dessin, au corps de garde, pour qu'on sache ce que c'est si l'on en trouve. La Maîtrise en cherche depuis soixante ans. Elle donne cent pincées pour un qui marche. » Il regarde la coupelle. « Ils n'ont jamais trouvé avec quoi les nourrir. Ils ont essayé l'huile. »" },
    ],
    choices: [
      { label: "Verser une pincée dans la coupelle, à travers la grille", if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:carillon", join: "carillon", ep: ["perso", 800] }, to: "K10r_carillon_remonte", big: true },
      { back: "K10r_carrefour" },
    ] },

  K10r_carillon_remonte: { act: "III", title: "Vingt et un mille neuf cent treize", place: "basse", ambiance: "ville",
    text: [
      "Le gris tombe dans la coupelle. Il y fait une lueur, d'abord, pas plus grosse qu'un ver luisant ; puis la lueur s'étale, et quelque chose, derrière la grille, se met à tourner.",
      "Le pied gauche se pose. La main lâche la manche du notaire. La tête ronde pivote, avec un petit bruit d'horloge qu'on remonte, et les deux yeux de verre te trouvent.",
      "*Ding.* C'est un coup clair, un seul, sorti de sa poitrine. Puis une voix, mince, exacte, qui vient de la fente et qui détache les mots comme on compte des pièces.",
      "« Carillon. Messager de la Guilde des Horlogers-Jurés, troisième du nom. En course. » La tête fait un quart de tour vers l'horloge de la fontaine, un quart vers le soleil, et revient. « L'horloge dit midi. Le soleil dit trois heures. Carillon a compté ses pas jusqu'à l'arrêt, et depuis l'arrêt Carillon n'a rien compté. Cela fait une heure irrégulière. Carillon demande la date. »",
      "Tu la lui donnes. Il reste immobile le temps que met un homme à avaler. Dans sa poitrine, des roues cliquettent.",
      "« Vingt et un mille neuf cent treize jours. Carillon est en retard de vingt et un mille neuf cent treize jours. » La voix n'a pas changé. Mais la clochette a tinté, toute seule, d'un petit coup fêlé. « Le Grand Maître a dit : *descends, et fais vite.* Carillon a fait vite pendant vingt-neuf jours. Puis Carillon s'est arrêté. Il présentera ses excuses. »",
      { with: "rouget", text: "Rouget a reculé jusqu'à la fontaine. « Il cause, souffle-t-il. La machine, elle cause. » La tête ronde pivote vers lui. « Carillon est un messager. Une machine est une chose qui ne sait pas à qui elle parle. » *Ding*, fêlé. Rouget ôte son bonnet, qu'il n'ôte devant personne." },
    ],
    choices: [{ label: "« Quelle course ? Pour qui ? »", to: "K10r_carillon_question", big: true }] },

  K10r_carillon_question: { act: "III", title: "Combien d'Heures", place: "basse", ambiance: "ville", with: "carillon",
    text: [
      "« Pour qui bouge. » Il ouvre, sur son flanc, une petite porte de cuivre, et il en tire un tube de bronze, long comme la main, fermé aux deux bouts. « Le Grand Maître a dit, le vingt et un juin, à onze heures : *Carillon, il va arriver une chose. Après, plus rien ne bougera. Tu descendras, tu chercheras quelqu'un qui bouge, et tu lui donneras ceci.* Carillon a cherché. Quarante et une personnes ne bougeaient pas. Vous bougez. »",
      "Il tend le tube. Puis il le retire, d'un geste exact, à un pouce de tes doigts.",
      "« Le Grand Maître a dit aussi : *n'importe qui peut bouger. Tu lui demanderas combien.* » Les yeux de verre ne cillent pas. « Carillon demande : combien y a-t-il d'Heures ? »",
      { after: "r:sait_treize", text: "Tu penses à une épure, clouée au mur d'un vieil homme, rue des Aiguilliers. Treize cases. Douze chiffres. *Lisse. B. y tient.*" },
      { with: "jehan", text: "Jehan a ouvert la bouche. Il la referme. On lui a appris le catéchisme des Heures à quatre ans, avec le reste ; il sait la réponse qu'on fait réciter aux enfants, et il sent qu'on lui en demande une autre." },
    ],
    choices: [
      { label: "« Douze. »", fx: { flag: "r:carillon_ferme" }, to: "K10r_carillon_garde" },
      { label: "« Onze : la douzième n'a jamais sonné. »", fx: { flag: "r:carillon_ferme" }, to: "K10r_carillon_garde" },
      { label: "« Onze qu'on nomme, et une qu'on laisse en blanc. »", fx: { flag: "r:lettre_coudrier", item: "lettre_maudit", ep: ["histoire", 1000] }, to: "K10r_lettre" },
    ] },

  K10r_carillon_garde: { act: "III", title: "Réponse irrégulière", place: "basse", ambiance: "ville", with: "carillon",
    text: [
      "*Dong.* Un coup fêlé, bas, qui a l'air de lui faire mal.",
      "« Réponse irrégulière. » Le tube rentre dans le flanc, la petite porte se ferme. « C'est la réponse de tout le monde. Le Grand Maître a dit que tout le monde la ferait. Carillon garde. »",
      "Il ne s'en va pas. Il se place à ta gauche, un pas en arrière, les mains le long du corps, à la façon d'un commissionnaire qui attend qu'on signe.",
      "« Vous bougez. Il n'y a que vous qui bougiez. Carillon vous suivra, et il redemandera. Le Grand Maître n'a pas dit combien de fois. » La tête pivote vers la colline. « Carillon connaît la porte du logis du nord. Elle pose la même question, avec douze anneaux. Quand vous saurez lui répondre, vous saurez répondre à Carillon. »",
    ],
    choices: [{ back: "K10r_carrefour" }] },

  K10r_lettre: { act: "III", title: "De la main du Maudit", place: "basse", ambiance: "ville", with: "carillon",
    text: [
      "*Ding.* Clair, plein, et le jet de la fontaine en tremble. « Réponse régulière. » Le tube est dans ta main. Il s'ouvre par le milieu, d'un quart de tour.",
      "Dedans, une feuille roulée, d'un gros papier d'atelier. L'écriture est énorme, carrée, appuyée à crever la page : une main de forgeron, qui a écrit debout, et vite.",
      { if: { has: "monde:coudrier_sait" }, text: "*À qui viendra de l'an 601. On m'a dit votre année avant-hier. Je n'en ai rien cru pendant un jour entier, puis j'ai refait mes comptes, et ils tombent. Si vous avez un livre dans votre chemise, vous savez qui me l'a dite.*" },
      { if: { not: { has: "monde:coudrier_sait" } }, text: "*À qui bouge encore, quel que soit le jour.*" },
      "*Je suis Barnabé Coudrier, Grand Maître des Horlogers-Jurés. Il est onze heures. Dans une heure, un homme tiendra le Balancier, et il s'est fait limer de quoi ne plus le lâcher. Je descends le lui ôter. J'ai soixante-dix ans et une baguette. Si vous lisez ceci, comptez que j'ai échoué.*",
      "*On vous dira que c'est ma faute. Laissez dire, et cherchez plutôt à qui la chose a rapporté.*",
      "*Le coup se rend. Il y faut deux personnes, et le Livre dit lesquelles. Ma copie est dans mon cabinet, logis du nord, derrière douze anneaux. Vous savez la serrure, puisque Carillon vous a ouvert son tube : c'est la même question. Sous le sablier de ma table, il y a une baguette à bout de bronze. Elle délie ce que tient le cuivre. Prenez-la.*",
      "*J'envoie Carillon parce qu'on ne lui a pas fait d'oreilles. Il est honnête, exact et susceptible. Ne l'appelez jamais machine. B. C.*",
      "Tu relis la deuxième ligne. La Chronique d'Aurime a une phrase, que tout enfant du royaume sait par cœur : *par la malice de Barnabé Coudrier, dit depuis le Maudit.* Tu tiens la malice. Elle est descendue à onze heures, avec une baguette, contre un homme qui avait un coin de bronze.",
      { with: "jehan", text: "Jehan a lu par-dessus ton bras. Il a lu jusqu'aux deux lettres du bas. Il ne dit rien. Il fait, lentement, le geste qu'on lui a appris à quatre ans, celui qu'on fait en disant ce nom : il porte la main à sa bouche. Puis il la laisse là, à plat, sur ses lèvres, comme on empêche quelque chose de sortir, et il se met à pleurer sans bruit, tout droit, comme à l'exercice." },
      { with: "jehan", text: "« C'était l'oncle de mon arrière-grand-père, dit-il enfin. Je m'appelle Jehan Coudrier. Je ne l'avais jamais dit à voix haute. » Carillon a pivoté vers lui. *Ding.* « Coudrier. Nom connu de Carillon. Carillon salue la maison. »" },
    ],
    choices: [{ label: "Rouler la lettre contre le Cahier", fx: { flag: "r:jehan_sait_vrai", conf: { jehan: 20 } }, hide: { not: JEHAN }, to: "K10r_carrefour" }, { label: "Rouler la lettre contre le Cahier", hide: JEHAN, to: "K10r_carrefour" }] },

  // --- Evening ---
  K10r_brune: { act: "III", title: "Une brune pour toi seul{e}", place: "basse", ambiance: "eau",
    text: [
      "Le soleil de 601 descend derrière le rempart. La ville, elle, garde son midi : quand le ciel s'éteint, les murs continuent de rendre leur or, les figures leur lumière, et l'on marche dans des rues éclairées par en dedans, sous un ciel noir. C'est le jour le plus long que tu aies vu. Il n'a pas d'ombres.",
      "Seules les lanternes des ponts sont sombres : personne ne les avait allumées, à midi.",
      "Et là-haut, à mesure que la nuit vient, la colline sort. Le gris de perle monte du pied de la Tour, gagne le mur des horlogers, les toits de l'esplanade, et descend par la rue du Cadran, de fontaine en fontaine, comme une marée qui aurait sa pente à l'envers. À la barrière, les piques de la Garde y trempent jusqu'au fer.",
      { with: "carillon", text: "Carillon marche à ta gauche, un pas en arrière. Ses pieds de cuivre font sur le pavé le seul bruit régulier de cette ville. À chaque horloge, il tourne la tête, lit midi, et sa clochette a un petit coup fêlé, qu'il ne commente pas." },
      { with: "jehan", after: "r:jehan_sait_vrai", text: "Jehan marche de l'autre côté. Il a remis ses épaules en place, mais il ne se tient plus tout à fait comme à l'exercice. Il regarde les gens pris, un par un, en passant. Ce ne sont plus les victimes de quelqu'un de sa maison." },
      "La Patiente a sa cloche bleue, au pignon. Derrière le four, il y a une échelle.",
    ],
    choices: [{ label: "Monter à la soupente", to: "K10r_soupente", big: true }] },

  K10r_soupente: { act: "III", title: "Le même lit", place: "basse", ambiance: "ville",
    text: [
      "Des glènes de chanvre jusqu'aux chevrons. Une paillasse sur un rouleau de grelin. Trois gouttes de suif sur une solive, et, à hauteur de coude, une lucarne que la Tour remplit d'un bord à l'autre.",
      "Tu t'allonges. La paillasse a un creux, du côté gauche, à la mesure d'un corps qui n'est pas le tien et qui n'en diffère guère. Tu t'y mets. Le chanvre sent la poussière et le soleil des champs où il a poussé.",
      "{autre} a dormi là avant-hier, et il y a soixante ans. Le creux est tiède : rien ne refroidit, ici. Tu as la tête où était sa tête. De toutes les lieues que vous avez faites l'un derrière l'autre, depuis une grange, c'est la première fois que vous êtes couchés au même endroit, et vous n'avez jamais été aussi loin.",
      "Par la lucarne, le cadran de la Tour marque midi. Autour, la pierre est grise et luit, d'une clarté qui tremble un peu. Tu regardes longtemps. Vers le milieu de la nuit, il te semble que le gris a une respiration : qu'il enfle, très lentement, et se retire. Tu ne sais pas si c'est la colline, ou tes yeux qui se ferment.",
      { with: "rouget", text: "Rouget s'est fait un nid dans une glène, en rond, comme un chat. « Dis. L'autre, là. Ton ami{autre:e} du livre. » Il bâille. « Je sais que t'écris à quelqu'un. Je sais pas lire, mais je sais quand on écrit à quelqu'un : on fait pas la même tête que pour les comptes. » Il dort avant ta réponse." },
      { with: "carillon", text: "Carillon est resté debout au pied de l'échelle. Il a dit : « Carillon ne dort pas. Carillon comptera. » On l'entend, d'en haut, qui fait un pas de temps en temps, exactement un, pour que quelque chose bouge." },
      "Tu ouvres le Cahier sur ton genou. On y voit clair sans chandelle : la ville éclaire.",
    ],
    choices: [{ label: "Lire, et écrire", to: "B10", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    lettre_maudit: { name: "Lettre de Barnabé Coudrier", kind: "divers", keep: true, price: 0, desc: "Une feuille de gros papier d'atelier, roulée dans un tube de bronze, d'une écriture énorme et carrée. Écrite le 21 juin 541 à onze heures, signée B. C. « On vous dira que c'est ma faute. Cherchez plutôt à qui la chose a rapporté. »" },
  },
  shops: {
    iii_comptoir: { name: "Le Comptoir des glaneurs", sells: [{ item: "pain", price: 1 }, { item: "veilleuse", price: 2 }, { item: "corde", price: 2 }, { item: "onguent", price: 4 }, { item: "fiole_sable", price: 18 }] },
  },
  chronique: [
    { id: "sourds", head: "An 541 · Les Sourds de Méridane", v: [
      { if: { has: "monde:placard_cire" }, text: "« On rapporte que la nuit du 19 juin des papiers furent collés aux fontaines, qui conseillaient de se boucher les oreilles de cire avant midi. Il s'en rit beaucoup. Deux ou trois cents personnes du bas quartier le firent néanmoins, et sortirent de la ville sur leurs pieds, à midi et demi, entre les autres. On les tint d'abord pour sorciers, puis pour complices du Maudit. Monseigneur le Régent les fit disperser dans les provinces, avec défense d'en parler. »" }] },
    { id: "recu", head: "An 541 · Les placards de la veille", v: [
      { if: { has: "monde:placard_duc" }, text: "« Des libelles séditieux, affichés nuitamment l'avant-veille du Grand Midi, osèrent avancer que Monseigneur de Hautgué avait payé le sommeil de la Reine. La calomnie tomba d'elle-même, ceux qui l'avaient lue n'étant plus en état de la répéter. »" }] },
  ],
} };
