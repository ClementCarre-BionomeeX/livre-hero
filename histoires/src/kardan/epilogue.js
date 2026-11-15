// The epilogue of Kardan (8.0 engine epilogue, piste 7 of 15/11): read by the engine on every ending marked
// `epilogue`, one line per thread the reader pulled. Each ending sets its own fin:<id> flag, so a line can tell the
// endings apart (the village burnt, the hero below the hill, the north road).
var GARDIEN = { has: "fin:gardien" }, FLAMMES = { has: "fin:flammes" }, NORD = { has: "fin:nord" };
function not(c) { return { not: c }; }
function all() { return { all: [].slice.call(arguments) }; }
var ALIVE_FREE = all({ has: "aurele:libre" }, { present: "aurele" });

module.exports = [
  // Aurèle
  { if: { has: "aurele:mort" }, text: "Aurèle repose sur le flanc de la colline, sous un cairn de pierres ocre, face au nord. Tu as gravé sur la plus grosse un nom et un 7 barré. Tu n'as pas trouvé d'autres mots." },
  { if: all(ALIVE_FREE, FLAMMES), text: "Aurèle marche à tes côtés sur la route du nord. Il ne se retourne pas vers la fumée. Il se tait sur Kardan, et quand on lui demande d'où lui vient la couleur de sa peau, il dit : d'une source." },
  { if: all(ALIVE_FREE, not(FLAMMES)), text: "Aurèle reprend des forces lentement. Au bout d'un mois, il chante faux de nouveau. Au bout de deux, il te dit pardon, pour le départ, l'argent, le silence. Tu lui dis pardon aussi. Vous ne précisez pas pour quoi." },
  // What the hero told Odon by the fire, the night they spoke of Aurèle
  { if: all({ has: "odon:maison" }, ALIVE_FREE, not(GARDIEN)), text: "Tu avais dit à Odon que tu ramènerais ton frère à la maison. Vous arrivez à la ferme avant les premières gelées. Aurèle reste longtemps devant la porte, la main sur le loquet, avant d'entrer." },
  { if: all({ has: "odon:compte" }, ALIVE_FREE, not(GARDIEN)), text: "Tu avais dit à Odon que tu ferais rendre à Aurèle ce qu'il avait pris. Il te rend la somme un matin, en pièces de Kardan, posées en pile sur la table. Tu les laisses là une semaine, puis tu les donnes au premier mendiant venu." },
  { if: all({ has: "odon:pardon" }, not(GARDIEN)), text: "Tu avais dit à Odon que tu demanderais pardon. Un hiver, il t'écrit une seule ligne, d'une écriture penchée : *L'as-tu fait ?* Tu lui réponds oui, et c'est vrai." },
  // the knife
  { if: all({ has: "couteau:aurele" }, not({ has: "aurele:mort" }), not(GARDIEN)), text: "Aurèle a repris son couteau. Il passe le pouce sur le manche, le soir, sans y penser, et la corne s'use de nouveau à cet endroit-là." },
  { if: all({ has: "couteau:aurele" }, { has: "aurele:mort" }), text: "Le couteau d'Aurèle est planté au sommet du cairn, la lame dans la pierre. Garance est montée le voir, une fois. Elle n'a rien dit. Elle a laissé une pièce à côté." },
  { if: all({ has: "couteau:aurele" }, GARDIEN), text: "Le couteau d'Aurèle est posé sur le bord de la vasque, à portée de ta main. C'est la seule chose de là-haut que tu aies gardée." },
  { if: all({ has: "garance:respect" }, not(FLAMMES)), text: "Garance a forgé un couteau neuf et gravé un moineau sur le manche, avec un clou, comme le garçon de quinze ans. Elle te l'a fait porter sans un mot." },
  { if: all({ has: "garance:honte" }, not(FLAMMES)), text: "Garance forge des socs de charrue, à présent, et plus aucun fer de lance pour la milice. Quand Bastien vient en commander, elle lui montre la porte avec son marteau." },
  // the names
  { if: all({ has: "noms:copies" }, GARDIEN), text: "Les noms que tu as recopiés, tu les as confiés à ceux qui remontaient. Tu ignores ce qu'ils en ont fait. Toi, tu les sais par cœur. Tu les récites, la nuit, pour que quelqu'un les dise." },
  { if: all({ has: "noms:copies" }, not(GARDIEN)), text: "Les noms que tu as recopiés ont été repeints sur la plaque de la chapelle, chacun avec son vrai nom quand on a pu le retrouver. *L'homme du Nord* s'appelle Aurèle, maintenant. *Le muletier* s'appelait Faris. Il y a encore des trous. On les laisse en blanc." },
  // Kardan's journal
  { if: all({ has: "journal:complet" }, FLAMMES), text: "Le journal de Kardan a brûlé avec le reste. Tu t'en souviens mot pour mot. Tu aurais préféré l'oublier." },
  { if: all({ has: "journal:complet" }, not(FLAMMES)), text: "Les trois pages du journal de Kardan sont sous verre, dans la chapelle, à côté de la vasque. Les enfants de l'école les recopient pour apprendre à écrire. C'est Odon qui a eu l'idée." },
  // The Elder
  { if: { has: "maeve:verite" }, text: "Ce que Maève t'a dit de Théoz, vous êtes deux à le savoir. Tu le gardes comme on garde la clé d'une maison fermée." },
  { if: all({ has: "maeve:lapsus" }, not({ has: "fin:jugement" }), not(FLAMMES)), text: "L'Aïeule sert toujours le thé à la menthe aux étrangers de passage. Depuis ton séjour, elle le sert moins sucré, et elle les regarde boire jusqu'à la dernière gorgée." },
  // Tobie, Hesna
  { if: all({ has: "tobie:ami" }, not({ has: "tobie:blesse" }), NORD), text: "Tobie fait voler son cerf-volant au-dessus de la vieille tour. Personne ne lui a dit pour son père. Un jour, il demandera. Tu seras loin pour lui répondre." },
  { if: all({ has: "tobie:ami" }, not({ has: "tobie:blesse" }), not(NORD)), text: "Tobie a appris la suite de la berceuse : il n'en connaissait que le premier couplet. Il la chante faux, la note qui monte au lieu de descendre. Il dit que c'est la bonne façon, et il a raison." },
  { if: { has: "tobie:blesse" }, text: "Tobie s'est relevé. Il boite un peu, et il a cessé de chanter. Tu penses à lui plus souvent qu'à tout le reste." },
  { if: { has: "hesna:sauvee" }, text: "L'enfant que tu as tiré de la fumée du grenier a gardé une toux d'hiver, et la vie. Hesna lui a appris ton nom." },
  // Oriel
  { if: all({ has: "oriel:chardon" }, FLAMMES), text: "Oriel a sauvé ses herbes, et rien d'autre. On dit qu'elle soigne les blessés des deux camps, sur la route, sans demander de quel côté ils étaient." },
  { if: all({ has: "oriel:chardon" }, not(FLAMMES)), text: "Oriel garde le chardon-lune pour les amputations, à présent. Elle t'a envoyé un sachet de graines, avec un mot : *pour que tu saches toujours reconnaître l'odeur.*" },
  { if: { has: "oriel:epargnee" }, text: "Oriel raconte que tu l'as laissée remplir ses seaux à la fontaine brisée. Elle dit de toi que tu avais de la colère, et de la mesure." },
  { if: { has: "oriel:humiliee" }, text: "Oriel a gardé ses seaux cabossés, tels quels, près de sa porte. Elle les montre aux enfants quand ils demandent ce qui s'est passé à la fontaine." },
  // Sidonie
  { if: all({ met: "sidonie" }, { has: "sidonie:anneau" }), text: "Sidonie est allée à Vasque, deux anneaux au pouce, et elle a frappé chez la mère de Lucas. Elle y est restée une semaine. Puis elle est repartie sur les routes du sel, seule, et on dit qu'elle évite désormais la vallée sèche." },
  { if: all({ met: "sidonie" }, not({ has: "sidonie:anneau" })), text: "Sidonie est partie un matin sans dire au revoir, avec l'anneau qui lui restait. L'autre est toujours au fond du puits aux os. Elle n'en parle plus." },
  { if: all({ has: "sidonie:complice" }, not({ has: "sidonie:renonce" })), text: "Sidonie se souvient que tu avais dit oui, dans le noir, quand elle parlait du feu. Elle te le rappelle une fois, sans reproche, comme on rappelle une dette." },
  { if: { has: "sidonie:renonce" }, text: "Sidonie a tenu parole. Elle tourne encore les deux anneaux autour de son pouce quand elle pense à Lucas, et ses mains restent froides." },
  // Mattias
  { if: { has: "mattias:soleil" }, text: "Mattias a planté ses mousses à l'ombre du platane, sur la place. Il s'assoit à côté tous les jours, au soleil, les yeux mi-clos, et quand les enfants lui demandent ce qu'il fait, il répond : je regarde." },
  { if: all({ has: "mattias:ami" }, not({ has: "mattias:soleil" })), text: "Mattias est resté dans le dédale, avec ses mousses et sa mousse-lumière. Parfois, la nuit, on croit l'entendre chanter dans les canaux. Personne n'a encore eu le courage d'aller voir s'il va bien." },
  { if: all({ has: "mattias:demande" }, not({ has: "mattias:ami" })), text: "La mousse-lumière que Mattias t'avait demandée luit toujours au fond du jardin noyé. Il l'attend encore, au bord de l'eau, avec sa lampe." },
  { if: all({ has: "mattias:reste" }, not({ has: "mattias:ami" }), not({ has: "mattias:demande" })), text: "Mattias est resté dans le noir avec ses mousses, comme il l'avait choisi trente ans plus tôt." },
  // The way out of the maze
  { if: all({ has: "sortie:canal" }, not(GARDIEN)), text: "Tu es sorti{e} du dédale par le canal de la Source, de l'eau jusqu'aux cuisses. Depuis, sur chaque route, tu entends l'eau qui court sous la terre." },
  { if: all({ has: "sortie:galerie" }, not(GARDIEN)), text: "Tu es sorti{e} du dédale par la fente de la galerie haute, au bout d'une corde. Le premier souffle de vent de cette nuit-là, tu le sens encore sur ton visage." },
  { if: all({ has: "sortie:mattias" }, not(GARDIEN)), text: "Le passage de Mattias, sous l'éboulis des jardins, est resté ouvert. Vous êtes deux à savoir où il débouche." },
  // Odon
  { if: all({ met: "odon" }, not({ gone: "odon" }), not({ has: "odon:croise" }), FLAMMES), text: "Frère Odon est resté dans les cendres de Kardan, à partager son pain avec ceux qui n'avaient plus de maison. Il t'a regardé partir en silence, et ce silence pesait plus que des reproches." },
  { if: all({ met: "odon" }, not({ gone: "odon" }), not({ has: "odon:croise" }), not(FLAMMES)), text: "Frère Odon a repris la route au premier automne, après avoir partagé son pain avec tout le village. Il t'a dit : *on se reverra au sud, il n'y a que du sud.* Tu n'es pas sûr{e} qu'il plaisantait." },
  { if: { gone: "odon" }, text: "Frère Odon vous a quittés en chemin. Tu ignores où il marche. Tu espères qu'il a trouvé quelqu'un avec qui partager son pain." },
  { if: { has: "odon:veille" }, text: "Odon a gardé les yeux ouverts, comme tu le lui avais demandé sous le platane, et il les garde encore : dans chaque village où il passe, il regarde d'abord le puits, puis les visages autour du puits." },
  { if: all({ has: "odon:croise" }, not(FLAMMES)), text: "Le frère mendiant que tu avais laissé sur la route est arrivé à Kardan bien après toi. On dit qu'il a lu la plaque de la chapelle, nom par nom, et qu'il est reparti le soir même." },
  // The road down, the night of the capture, the dark below
  { if: all({ has: "passe:ane" }, not(FLAMMES)), text: "L'âne qui t'avait porté jusqu'à Kardan finit ses jours chez Garance, à tourner la meule de la forge. Chaque soir, il s'arrête à la fontaine et boit longtemps, comme s'il savait." },
  { if: all({ has: "passe:bourse" }, not(GARDIEN)), text: "De la bourse pleine que tu avais emportée en partant, il te reste trois pièces au fond d'une poche. Tu les gardes. Elles viennent d'avant." },
  { if: { has: "puits:creuse" }, text: "Le trou que tu as creusé dans le lit du torrent, là où poussent les joncs, donne encore un filet d'eau. La vieille du hameau aux puits secs l'a entouré de pierres, et elle l'appelle le puits de l'étranger." },
  { if: { has: "caravane:averti" }, text: "Le chef de caravane à la barbe teinte raconte, dans les caravansérails du nord, l'histoire d'un voyageur qui descendait seul à Kardan. Il la finit toujours par son proverbe, et personne autour du feu n'en saisit le sens." },
  { if: all({ has: "borne:ancienne" }, not(GARDIEN)), text: "L'inscription ancienne de la borne, celle que tu avais su lire, ouvre la première page de ton carnet de route. Tu l'as recopiée lettre à lettre." },
  { if: { has: "fete:danse" }, text: "Tu as dansé à la fête de Kardan, le premier soir, avant de savoir. Tu en gardes un souvenir heureux, et c'est ce qui te trouble le plus." },
  { if: { has: "capture:visages" }, text: "Certaines nuits, tu revois les visages penchés sur toi à la lueur des lanternes, la nuit de ta capture. Tu connais leurs noms, maintenant, à tous." },
  { if: { has: "pas:vu" }, text: "Les pas qui te suivaient dans les galeries, tu as vu à qui ils étaient. Tu gardes ce visage pour toi." },
  { if: { has: "voix:entendue" }, text: "La voix qui t'appelait Moineau dans les galeries revient parfois dans tes rêves. Elle a le ton de ton frère à dix ans." },
  { if: { has: "assemblee:non" }, text: "À la fontaine, ils ont refusé de te croire. Plusieurs de ceux qui t'ont jeté des pierres ce jour-là t'ont écrit, plus tard, l'un après l'autre. Tu gardes les lettres." },
  { if: { has: "milice:perdu" }, text: "La lance de Bastien s'est arrêtée à un pouce de ta gorge. Tu sens encore, certains matins, l'endroit exact." },
  { if: all(GARDIEN, { has: "gardien:repos" }), text: "« Repose-toi », lui as-tu dit. C'est le dernier mot qu'il a entendu de toi, et le plus juste." },
];
