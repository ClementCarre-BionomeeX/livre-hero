// Le Douzième Coup · dénouement « defaire » (the one above said the word alone : noon rings on 21 June 541), part A :
// the stroke, each on their own (the one who passes comes down from the Cage past the High Chamber ; the one who
// stays sees the cellar wake), the meeting at the niche (`Fd_niche`), and the judgment held beside the well
// (`Fd_tribunal`) : the young Aubespin (`monde: "jeune541"` : `monde:d_jeune_guilde` | `monde:d_jeune_banni` |
// `monde:d_jeune_reine`), the old one (`monde: "vieux541"` : `monde:d_vieux_jeune` | `monde:d_vieux_libre` |
// `monde:d_vieux_reine`). Then the iron door, toward `Fd_parvis` (part B). Also : `monde:d_date_cage`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var LACHE = { has: "monde:coudrier_lache" };
var EVEILLEE = { has: "monde:reine_eveillee" };
var REMEDE = { has: "monde:aelis_remede" }, ECORCE = { has: "monde:aelis_ecorce" };
var REFUSE = { has: "monde:jeune_refuse" };
var NOM = { has: "monde:nom_cage" };

Object.assign(P, {
  F_defaire: { act: "V", title: "Midi", place: "tour", ambiance: "chateau",
    text: [
      "Il tombe ici.",
      { if: J, text: "Tu l'entends. C'est la première chose : tu l'entends avec tes oreilles, comme un son, qui a une hauteur, une rondeur, et qui s'en va. Le douzième coup sort de la Cage par les huit abat-sons et descend sur la ville, large, doré, sans se presser." },
      { if: J, text: "Et la ville répond. Cinq mille bouches rondes achèvent ce qu'elles tenaient : « ...ze ! » puis, d'un seul élan, à pleine gorge, l'autre : « Douze ! » Les pigeons du cadran partent tous ensemble. Les fumées se redressent. Quelque part, très bas, un chien reprend un aboi où il l'avait laissé." },
      { if: J, text: "C'est midi. Le vingt et un juin 541. Tu l'as dit. Tu as encore le mot dans la bouche, avec un goût de cuivre, et les paumes brûlées par le chanvre." },
      { if: J, text: "Tu regardes le fil. Il pend du déclic, net, mince, tranquille : un fil de laiton comme on en vend à la toise. Ce qui tirait dessus a fini de tirer. Au bout, à trois cent soixante marches, il y a quelqu'un qui s'est tu, et à qui tu viens d'ôter un pays." },
      { if: R, text: "Tu l'entends passer. Il ne s'arrête pas chez toi. Il traverse la voûte, la pierre, ta poitrine, et il s'en va par en haut, vers des gens qui crient un chiffre tous ensemble, loin, comme une foire derrière une colline." },
      { if: R, text: "Dans le puits, le gris baisse. Il s'en va comme l'eau d'un bief dont on a levé la vanne : sans bruit, d'un seul niveau. Il laisse de la pierre noire, qui sue ; et tout au fond, quand il n'y a plus rien de gris, quelque chose qui va d'un bord à l'autre, lentement, avec la régularité d'une poitrine endormie. On l'avait empêché de respirer. Il respire." },
      { if: R, text: "Tu regardes le pavé où tu as mis le pied, chez toi, devant une vague arrêtée à une semelle de ton sabot. Il est sec. Il est neuf. Il a soixante ans de moins que ta mémoire, et il les gardera." },
      { if: R, text: "Tu t'es tu{e}. Là-haut, on a dit le mot. Midi vient de tomber à trois cent soixante marches de toi, et à soixante ans de ta rue. Dans ton sachet, contre ta poitrine, les grains ont cessé d'être tièdes." },
      "La onzième note a duré soixante ans, ou le temps de compter jusqu'à douze. Il ne reste d'elle, dans toute la Tour, qu'un bourdonnement au creux des oreilles, comme après un coup de vent.",
    ],
    choices: [
      { label: "Te relever, sous la cloche", hide: R, to: "Fdj_cage", big: true },
      { label: "Te retourner vers la salle", hide: J, to: "Fdr_cave", big: true },
    ] },

  // ===== the one who passes : down from the Cage
  Fdj_cage: { act: "V", title: "La Patiente se balance", place: "tour", ambiance: "chateau",
    text: [
      "Elle va et vient encore, au-dessus de toi, de moins en moins loin. Le marteau a repris sa place de repos, à deux pouces de la lèvre, et il tremble. Douze pieds de bronze mettent longtemps à se rappeler qu'ils sont immobiles.",
      "Tu te lèves. Tes genoux portent. Entre deux abat-sons, tu vois la place : elle bouge. C'est une chose énorme, et de rien : des chapeaux qu'on remet, un enfant qu'on redescend d'une épaule, une marchande qui rend la monnaie. Près de la fontaine, une balle rouge monte et retombe, monte et retombe.",
      "Le canal a repris sa pente. Sur le halage, entre les peupliers, les feuilles montrent leur envers blanc, toutes à la fois : il y a du vent.",
      { if: { has: "monde:corde_nouee" }, text: "La corde pend, avec ton nœud au milieu. Il a tenu. Il est laid comme ce matin, et un peu plus serré. Tu penses à une vieille femme sur une chaise, qui l'aurait trouvé mal fait ; puis tu te rappelles qu'elle a neuf ans, à l'heure qu'il est, et qu'elle ne t'a encore rien appris." },
      { if: { all: [{ has: "monde:corde_coupee" }, { not: { has: "monde:corde_nouee" } }] }, text: "Le moignon de corde se balance au-dessus du banc. Tu t'y es pendu{e} de tes dix doigts, et tu as la peau des paumes en moins. Cela se remet. On regarnira : il y a des cordiers dans cette ville, et ils rouvrent leur boutique tantôt." },
      "Le banc des sonneurs est contre le mur, avec ses quarante noms.",
    ],
    choices: [
      { label: "Tailler la date, sous ton nom", hide: { not: NOM }, fx: { flag: "monde:d_date_cage" }, to: "Fdj_banc" },
      { label: "Tailler ton nom, et la date", hide: NOM, fx: { flag: "monde:d_date_cage" }, to: "Fdj_banc" },
      { label: "Descendre", to: "Fdj_chambre", big: true },
    ] },

  Fdj_banc: { act: "V", title: "Le quarante et unième", place: "tour", ambiance: "chateau",
    text: [
      { if: NOM, text: "Tu t'agenouilles devant le dossier. Ton nom est là, en lettres droites, sous *Thibaut, 481*, avec son oreille ouverte. La place de la date est restée blanche tout le matin." },
      { if: { not: NOM }, text: "Tu t'agenouilles devant le dossier. Sous *Thibaut, 481*, le chêne est nu. Tu tailles ton nom, en lettres droites, sans fioriture : un sonneur signe comme il sonne. Puis une oreille, ouverte, puisque tu as tout entendu." },
      "Tu creuses un cinq, un quatre, un un. Le bois est dur, vieux de quatre siècles, et la pointe glisse sur le dernier chiffre. Tu le reprends.",
      "*541.* C'est écrit. C'est une année où tu n'es pas né{e}, où ta mère n'est pas née, et où tu viens de sonner midi. Les quarante d'au-dessus ont mis sur ce banc la date de leur service. Toi, tu y mets celle où tu commences à vivre à l'envers de tout le monde.",
      "Tu souffles la sciure. Elle part dans le jour d'un abat-son, et elle tombe, comme tombent les choses dans une ville où il est midi passé.",
    ],
    choices: [{ label: "Descendre", to: "Fdj_chambre", big: true }] },

  Fdj_chambre: { act: "V", title: "La croisée ouverte", place: "tour", ambiance: "chateau",
    text: [
      "Vingt échelons. Le palier. La porte de chêne.",
      { if: EVEILLEE, text: "Elle est ouverte, et il en sort de l'air : un vrai courant, qui sent le tilleul et la friture de la foire. La Reine a poussé la croisée en grand. Elle est debout dans le jour, l'enfant sur la hanche, et la poussière de la chambre lui tourne autour, vivante, comme des moucherons." },
      { if: EVEILLEE, text: "Elle se retourne à ton pas. « C'est vous. » Elle regarde tes mains. « Vous saignez. » Puis, sans attendre : « Quelle année ? — Cinq cent quarante et un, Madame. Midi passé d'un Pater. »" },
      { if: { all: [EVEILLEE, { has: "monde:reine_voeu_partout" }] }, text: "Elle ferme les yeux, et les rouvre. « Je vous avais dit : où il vous plaira. Il vous a plu ici. Je me réveille donc chez moi, avec ma faute et sans excuse : personne n'aura dormi, et moi seule saurai ce que j'avais signé. » Elle a un souffle par le nez. « Moi, vous, et quelqu'un en sabots. Cela fait un petit Conseil. Je n'en ai jamais eu de meilleur. »" },
      { if: { all: [EVEILLEE, { has: "monde:reine_voeu_601" }] }, text: "Elle reçoit le chiffre comme elle reçoit tout : debout. Sa main libre monte au dos de l'enfant. « Je vous avais demandé l'autre porte. » Elle le dit sans colère, et c'est plus dur à porter que de la colère. « Vous aviez vos raisons. Je n'ai pas qualité pour peser celles des autres : voyez où m'ont menée les miennes. »" },
      { if: { all: [EVEILLEE, { not: { any: [{ has: "monde:reine_voeu_partout" }, { has: "monde:reine_voeu_601" }] } }] }, text: "Elle reçoit le chiffre debout. « La même. Il ne s'est donc rien passé. — Il s'est passé soixante ans, Madame, et on vient de vous les reprendre. » Elle regarde la place, qui remue. « Je vous crois. Je sens que je dois vous croire : j'ai dans le bras une fatigue qui n'est pas d'un matin. »" },
      { if: { not: EVEILLEE }, text: "Le verrou joue, du dedans, au moment où tu passes. La porte s'ouvre d'une main. La Reine est sur le seuil, en blanc, l'enfant sur la hanche, avec la figure d'une femme qui a retenu son souffle et à qui l'on n'a rien donné en échange." },
      { if: { not: EVEILLEE }, text: "« Où est maître Aubespin ? » Elle regarde derrière toi, dans l'escalier. « Il avait dit : au douzième. Le douzième a sonné. J'ai compté. Rien ne s'est arrêté. » Elle te voit mieux : la corde sur tes paumes, la sciure à tes genoux. « Qui êtes-vous ? »" },
      { if: { not: EVEILLEE }, text: "Tu le lui dis en peu de mots, sur un palier, entre deux portes. Que tout s'est arrêté. La ville, une lieue de plaine, soixante ans. Qu'on a rendu le coup, à deux, et que les soixante ans sont défaits. Elle t'écoute sans t'interrompre. On ne lui a jamais rien appris de plus étrange, et elle a l'habitude d'apprendre des choses debout." },
      { if: { all: [{ not: EVEILLEE }, { has: "monde:reine_renonce" }] }, text: "« J'avais révoqué. Hier. » Elle porte la main à son corsage, où il y a un pli. « Il a donc passé outre. On a passé outre à une reine, dans sa Tour, le jour de sa fête. » Sa voix n'a pas monté. « Je descends. »" },
      { if: { all: [{ not: EVEILLEE }, { not: { has: "monde:reine_renonce" } }] }, text: "« J'ai signé pour une chambre », dit-elle. Tu dis que tu le sais ; que la chambre a pris la ville ; que personne ne l'avait voulu, et qu'il a fallu neuf jours et deux personnes pour le reprendre. Elle regarde l'enfant. « Alors elle a toujours son mal. » Elle l'a compris avant le reste. C'est une mère." },
    ],
    choices: [
      { label: "Regarder l'enfant", to: "Fdj_aelis", big: true },
    ] },

  Fdj_aelis: { act: "V", title: "Avec ses oreilles", place: "tour", ambiance: "chateau",
    text: [
      "Aélis a la tête contre le cou de sa mère. Elle te regarde par-dessus une épaule blanche, avec des yeux qui ont beaucoup dormi.",
      { if: { has: "j:aelis_adieu" }, text: "« Je l'ai entendu. » Elle le dit tout de suite, comme une chose qu'on gardait pour quelqu'un. « Avec mes oreilles. Il était gros. Il a fait trembler la vitre. » Elle réfléchit. « Tu as sonné fort. »" },
      { if: { all: [{ not: { has: "j:aelis_adieu" } }, { has: "j:aelis_parle" }] }, text: "« Tu es revenu{e}. » Elle le constate. « La cloche a fait douze. Les autres, je les ai sentis dans mon ventre. Celui-là, je l'ai entendu. »" },
      { if: { not: { any: [{ has: "j:aelis_adieu" }, { has: "j:aelis_parle" }] } }, text: "Elle te montre la vitre, du doigt. « Il y avait une figure. Là. Elle est partie. » Elle te considère. « C'était toi ? Tu étais dehors, sur le mur ? C'est défendu. »" },
      { if: REMEDE, text: "Elle ouvre le poing. Il y a dedans une fiole de grès, bouchée de cire, tiède de sa main. « J'ai ça. Je ne sais pas qui me l'a donné. Ça sent mauvais. » La Reine regarde la fiole, puis toi. Tu dis ce que c'est, et qu'il y en a dix-huit prises, et qu'il en faut une par jour. La Reine s'assoit sur le petit lit blanc, d'un coup, avec l'enfant, comme si l'on venait de lui couper deux cordes." },
      { if: { all: [ECORCE, { not: REMEDE }] }, text: "Elle a les joues roses. C'est le rose des trois prises qu'elle a bues, et il tiendra ce qu'il tiendra. Il en faut dix-neuf. Tu le sais, la Reine le sait, et l'enfant vous regarde l'un après l'autre : elle a l'oreille des malades pour les chiffres qu'on ne dit pas." },
      { if: { not: { any: [REMEDE, ECORCE] } }, text: "Elle a les lèvres grises. Elle les avait ce matin. Midi a sonné sur toute la ville, et il a rendu à chacun ce qu'il avait : au boulanger son four, au chien son aboi, et à cette enfant sa langueur, intacte, à l'endroit exact où on l'avait arrêtée." },
      { if: { not: REMEDE }, text: "« Il existe un remède, Madame. Une écorce. En bas, il y a quelqu'un qui sait d'où elle vient. » Tu n'ajoutes pas que ce quelqu'un vient d'apprendre, par ta bouche, que son pays n'aura pas lieu. La Reine dit : « Menez-moi. » Elle se reprend : « Non. Je sais descendre un escalier. Allez devant. On vous attend. »" },
      "« Tu restes ? » demande l'enfant. C'est la question qu'elle t'a faite une fois déjà, et à laquelle tu as mal répondu. « Je reste. » Tu t'entends le dire. Cette fois, c'est vrai pour toute la vie.",
    ],
    choices: [{ label: "Descendre la vis", to: "Fdj_vis", big: true }] },

  Fdj_vis: { act: "V", title: "Deux cent quatre-vingts degrés, dans l'autre sens", place: "tour", ambiance: "chateau",
    text: [
      "Tu descends. Aux meurtrières, le jaune et le bleu ont repris leur train : il passe une hirondelle, un bout de nuage, la fumée d'une rôtisserie qui s'est remise à pencher du bon côté.",
      "Au second palier, Baudouin est debout. Il a ôté son bandeau. Il tient dans sa paume deux boulettes de cire jaune, et il les regarde comme on regarde ses dents après une rixe.",
      { if: { has: "monde:corde_coupee" }, text: "« J'ai coupé, dit-il. On m'avait dit de couper. » Il n'a jamais parlé si haut : il s'entend. « Elle a sonné quand même. Qui a sonné ? — Moi. Avec un nœud de poids. » Il regarde tes mains. Il a l'air d'un garçon à qui l'on vient d'apprendre qu'il a perdu, et que c'était la meilleure chose qui pût lui arriver." },
      { if: { not: { has: "monde:corde_coupee" } }, text: "« Elle a sonné douze. » Il n'a jamais parlé si haut : il s'entend. « Le maître avait dit qu'après onze il y aurait un grand silence, et qu'il ne faudrait pas avoir peur. Il n'y a pas eu de silence. — Il y en a eu un. Vous étiez dedans. » Il fronce le front. Il comprendra ce soir, ou dans dix ans." },
      "« Où est le maître ? — En bas. Les deux. » Tu le laisses sur ce pluriel. Il te suit, à trois marches, sans un mot : on lui a toujours dit devant qui marcher, et il n'y a plus que toi dans l'escalier.",
      "La vis finit. La pendule du palier marque midi et quelque chose, et son balancier va. Tu t'arrêtes devant, un instant, par métier. Elle avance d'un rien. Tu la régleras.",
    ],
    choices: [{ label: "Les quatre-vingts dernières marches", to: "Fd_niche", big: true }] },

  // ===== the one who stays : the cellar wakes
  Fdr_cave: { act: "V", title: "Onze personnes qui respirent", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Ils s'éveillent tous à la fois, et aucun ne sait qu'il s'éveille. Les neuf tabliers verts achèvent chacun son geste : l'un finit un pas, l'autre un bâillement. Le grand roux étend le bras jusqu'au bout, trouve le levier en haut, libre, tiède, et reste la main en l'air, comme un homme qui allait rattraper un verre et qui le voit posé." },
      { first: true, text: "Ils ont de la cire aux oreilles. Ils n'ont rien entendu, ni les onze, ni le douze. Ils voient seulement qu'il y a ici quelqu'un en sabots, noir de charbon jusqu'aux coudes, qui n'y était pas l'instant d'avant ; un coin de bronze par terre ; et deux vieillards au lieu d'un." },
      { first: true, text: "Tu es la seule personne de cette cave à savoir quel jour on est. Tu le sais par soustraction : c'est le jour où ton pays a cessé d'être à venir." },
      { again: true, text: "La Chambre basse. Les six flammes ont repris leur danse. Au fond du puits, la grande chose noire va et vient, et l'on entend, quand tout le monde se tait, son pas dans la pierre." },
    ],
    choices: [
      { label: "Le Grand Maître", hide: { seen: "Fdr_coudrier" }, to: "Fdr_coudrier" },
      { label: "L'homme de trente ans", hide: { seen: "Fdr_jeune" }, to: "Fdr_jeune" },
      { label: "Le vieil homme sur son berceau", hide: { seen: "Fdr_vieux" }, to: "Fdr_vieux" },
      { label: "L'enfant au maillet", hide: { seen: "Fdr_ansel" }, to: "Fdr_ansel" },
      { label: "Le bord du puits", hide: { seen: "Fdr_puits" }, to: "Fdr_puits" },
      { label: "L'escalier : quelqu'un descend", to: "Fdr_monte", big: true },
    ] },

  Fdr_coudrier: { act: "V", title: "Cinquante-huit, pour la voûte", place: "tour", ambiance: "chateau",
    text: [
      { if: LACHE, text: "Il est debout devant le levier, les talons joints, les bras le long du corps. Il a rouvert les yeux sur une barre remontée et un puits qui bat. Il regarde cela longtemps, en homme du métier, la tête un peu penchée, comme on écoute une montre qu'on vient de refermer." },
      { if: { not: LACHE }, text: "Ses poings se sont refermés sur du vide : les poignets qu'il tenait n'y sont plus. Il regarde ses mains, puis la barre, en haut, puis le puits, qui bat. Il lui faut le temps d'un Pater pour admettre que la chose s'est faite sans lui, et celui d'un Ave pour s'en réjouir." },
      "« Elle marche. » Sa voix est sèche, nasale, et elle tremble. « Écoutez-moi ce pas. Régulier comme un chanoine. Je ne l'ai pas entendu ainsi depuis le carême. » Il se tourne vers toi. « C'est vous, en bas. Bien frappé. Trois coups ? »",
      { if: { has: "monde:ansel_travers" }, text: "« Un seul. Il bâillait à droite. » Il regarde l'enfant au maillet, qui rougit jusqu'aux cheveux. « Un coin posé de travers par un honnête garçon. J'ai connu des ouvrages droits qui valaient moins. »" },
      { if: { not: { has: "monde:ansel_travers" } }, text: "« Trois. Par le petit bout. » Il hoche la tête. « C'est ce qu'il fallait. Je l'aurais dit moi-même, si l'on m'en avait laissé le temps. »" },
      "Il te considère mieux : tes pieds, ton sachet, ta figure. Il a compris quelque chose, et il a la décence de ne pas le dire trop vite.",
      "« C'est tombé chez nous. » Il ôte son chapeau, ou il porte la main à la place où il devrait être. « Alors vous n'avez plus de chez vous. Je vous dois soixante ans, mon enfant, et je n'en ai pas dix devant moi. Je vous paierai en ce que j'ai : un toit, un établi, et la vérité quand vous la demanderez. C'est peu. Je ne sais pas faire les phrases qu'il faudrait. »",
      { if: { has: "r:coudrier_jehan_dit" }, text: "Tu penses à un garçon de vingt ans, au pied d'un escalier, qui avait dit son nom tout haut. Il ne naîtra pas sous deux lettres changées : il naîtra, s'il naît, sous le sien. Tu le dis au vieillard. Sa moustache remue. « Qu'il écarte les talons », répète-t-il, très bas." },
    ],
    choices: [{ back: "Fdr_cave" }] },

  Fdr_jeune: { act: "V", title: "Les mains d'un homme de trente ans", place: "tour", ambiance: "chateau",
    text: [
      { if: REFUSE, text: "Il est assis par terre, contre un berceau, les mains ouvertes sur les genoux. Il s'est mis là de lui-même, et le réveil l'y trouve. Il regarde le levier, en haut, sans y toucher des yeux plus qu'il ne faut." },
      { if: { all: [{ not: REFUSE }, { has: "r:jeune_frappe" }] }, text: "Il est debout, les poignets contre la poitrine. Les deux marques rouges ont eu soixante ans pour s'effacer, et elles sont du matin. Il te regarde venir, et il recule d'un pas." },
      { if: { all: [{ not: REFUSE }, { not: { has: "r:jeune_frappe" } }] }, text: "Il a encore les doigts recourbés sur un cuir qui a monté sans lui. Il les regarde. Il les déplie un à un, comme on se défait d'un gant mouillé." },
      "Il a trente ans, une barbe faite du matin, un œil gris et un œil brun. Tu as haï cette figure, creusée, pendant six ans de fossés. Tu la vois avant qu'elle ait rien fait d'autre que d'essayer.",
      { if: REFUSE, text: "« Vous êtes de la marge. » Il parle bas. « On me l'a dit. J'ai lâché. Je voudrais que ce soit écrit quelque part que j'ai lâché ; et je sais bien qu'on écrira d'abord que j'avais tenu. »" },
      { if: { not: REFUSE }, text: "« J'ai tenu. » Il parle bas. « On m'a dit *tiens*, d'une voix que je connaissais. J'aurais tenu jusqu'au bout. » Il regarde le vieillard sur son berceau. « C'est donc cela, le bout. »" },
      "« Qu'est-ce qu'on va me faire ? » Tu dis que tu n'en sais rien. Que chez toi, on l'aurait su tout de suite ; mais que chez toi, c'est lui qui faisait pendre.",
      "Il baisse la tête. Il a entendu le temps du verbe.",
    ],
    choices: [{ back: "Fdr_cave" }] },

  Fdr_vieux: { act: "V", title: "De ce côté-ci", place: "tour", ambiance: "chateau",
    text: [
      "Il est assis, le dos droit, les deux mains sur sa canne. Son dernier grain a fini de couler sur sa main, et il regarde cette main. Elle est restée rose. Elle bouge.",
      "« Je suis donc de ce côté-ci. » Il le dit à mi-voix, pour lui. « *Ceux qui veillent dans la note en sortent par la porte qu'on ouvre.* Je l'avais lue, cette ligne. Je l'avais rangée parmi les ornements. »",
      "Il lève les yeux vers toi. L'un gris, l'autre brun, et les deux très clairs.",
      "« Faisons le compte, puisque c'est ce que nous savons faire, vous et moi. J'ai quatre-vingt-dix ans. J'en paraissais la moitié grâce à un puits qui suait. Il ne sue plus : écoutez-le, il se porte comme un charme. Mon sablier est vide. Il n'y a pas, dans tout ce royaume, une pincée à vendre, puisque personne n'en a jamais vendu. » Il a son petit rire sans bruit. « Je vais donc avoir mon âge. Tout entier, et vite. Je calcule que ce sera fait à la Saint-Jean. »",
      "« Je ne vous demande rien. Vous avez dans ce sachet de quoi me faire durer un mois : je le vois d'ici, et je ne le demande pas. Notez-le. C'est la première chose que je n'aurai pas marchandée. »",
      "Il regarde l'homme de trente ans, de l'autre côté du levier. « Il ne sait pas encore que je suis ce qu'on lui montrera du doigt toute sa vie. Je ferai un bel épouvantail. On en tire des récoltes. »",
    ],
    choices: [{ back: "Fdr_cave" }] },

  Fdr_ansel: { act: "V", title: "Une montre neuve", place: "tour", ambiance: "chateau",
    text: [
      "Il a treize ans, un maillet plus gros que sa tête, et de la cire dans les oreilles. Il te regarde arriver avec des yeux ronds : pour lui, tu es sorti{e} du pavé.",
      "Tu lui fais signe d'ôter la cire. Il hésite : on le lui a défendu. Tu la lui ôtes toi-même, du petit doigt, une oreille puis l'autre, comme on débouche un flacon. Il entend le puits. Il entend sa propre respiration. Il fait une figure de nouveau-né.",
      { if: { has: "monde:ansel_dit" }, text: "« Vous m'avez parlé, dit-il. Tout à l'heure. Avec du charbon, par terre. » Il regarde le pavé. Il n'y a rien : ce qui s'écrit dans une note s'en va avec elle. « Je l'ai rêvé ? — Non. Tu m'as appris à chasser un coin. Ça a marché. » Il devient très rouge, de plaisir, et il serre son maillet." },
      { if: { not: { has: "monde:ansel_dit" } }, text: "« C'est fini ? » Sa voix mue. « Le maître avait dit que ce serait long. » Tu dis que ce l'a été, et qu'il a bien fait de dormir pendant." },
      "Il tire de son tablier une montre neuve, en argent, grosse comme un oignon. Il l'ouvre. Elle marque midi et un demi-quart. Il la porte à son oreille, et il sourit de toute sa figure : elle marche, et il l'entend.",
      { if: { has: "monde:hurel_debout" }, text: "« Ta mère est à la porte de fer », dis-tu. Il ne demande pas comment tu le sais. Il pose le maillet par terre, soigneusement, sur son trait de craie, et il regarde l'escalier." },
      { if: { not: { has: "monde:hurel_debout" } }, text: "« Rue de la Poulie, dis-tu. L'enseigne du Dé. Elle t'attend pour dîner. » Il ne demande pas comment tu le sais. Il pose le maillet par terre, soigneusement, sur son trait de craie." },
    ],
    choices: [{ back: "Fdr_cave" }] },

  Fdr_puits: { act: "V", title: "Ce qui reste dans un sachet", place: "tour", ambiance: "chateau",
    text: [
      "Tu te mets à genoux au bord. La pierre est noire, mouillée, et elle sèche déjà par plaques. Il n'y perle plus rien. Tu passes le pouce sur le biseau, par habitude : tu le ramènes propre.",
      "Au fond, cela va et vient. Tu regardes longtemps. On t'a dit toute ta vie que c'était une bête, un dieu, une maladie. C'est un poids au bout d'une tige, plus vieux que le royaume, qui fait ce que font tous les balanciers quand on les laisse : il compte.",
      "Tu cherches la rue en pente. Il n'y a plus d'images. Il y a de l'ombre, et ce pas.",
      "Tu ouvres ton sachet. Les grains sont là, gris, froids, tous ceux que tu as glanés depuis le fossé des Trois-Noyers et ceux que ce bord t'a donnés. Ils ne tiédissent plus dans ta main. Ils ont été sués par soixante ans qui n'auront pas lieu, et ils sont dans ta paume quand même, comme toi dans cette cave.",
      "C'est tout le sable d'heures qu'il y a au monde. Tu en es l'unique propriétaire. On t'aurait pendu{e} pour le dixième, chez toi.",
      "Tu serres le lacet. Tu ne sais pas encore à quoi sert le temps de gens qui n'ont pas été. Tu sais que cela ne se jette pas.",
    ],
    choices: [{ back: "Fdr_cave" }] },

  Fdr_monte: { act: "V", title: "Des pas, dans la vis", place: "tour", ambiance: "chateau",
    text: [
      "Tu les entends de loin. La porte du palier. Puis les marches, une à une, et tu les comptes sans le vouloir : c'est un pas que tu connais depuis une heure, ou depuis neuf jours, par l'écriture.",
      "Tu vas au pied de l'escalier. Tu montes, toi aussi. Tu as des choses à lui dire, et tu préfères ne pas les dire devant un puits.",
      { if: { secret: "r_soeur" }, text: "Il y a une petite de cinq ans, sous un toit de Roquebise, qui n'achèvera pas son souffle, parce qu'il n'y aura ni ce lit, ni cette nuit, ni elle. Tu as porté son nom neuf jours sans le donner à personne. Tu le portes encore. Il pèse davantage, à présent que tu es seul{e} au monde à le savoir." },
      { if: { has: "r:couvert_redit" }, text: "Derrière toi, le vieil homme a dit quelque chose. Tu ne t'es pas retourné{e}. Il a plaidé pour le silence, et tu t'es tu{e} ; il aura cru, un instant, avoir gagné. Tu lui laisses le temps de refaire son calcul." },
      "Tu t'arrêtes au tournant, à la niche. C'est là que vous vous êtes vus de près, la première fois, en descendant. C'est aussi bien là.",
    ],
    choices: [{ label: "Attendre, à la niche", to: "Fd_niche", big: true }] },

  // ===== together again
  Fd_niche: { act: "V", title: "Au tournant", backName: "la niche", charniere: true, aparte: true,
    text: [
      { first: true, if: J, text: "{autre} est à la niche, adossé{autre:e} à la pierre, les sabots à la main. {autre:Il} te regarde descendre les dernières marches. {autre:Il} ne dit rien d'abord. {autre:Il} a la figure de quelqu'un qui a compté une chose très longue et qui est arrivé au bout." },
      { first: true, if: J, text: "« T'as dit le mot. » Ce n'est pas une question. Tu dis oui. Tu avais préparé des phrases, dans la vis, à chaque tournant ; il n'en reste aucune. Tu dis seulement : « Tu t'es tu{autre:e}. » {autre:Il} hausse une épaule. « Fallait bien qu'un des deux laisse l'autre. J'ai l'habitude de laisser. »" },
      { first: true, if: { all: [J, { has: "j:efface_leve" }] }, text: "« Tu le savais, que je sortirais de ce côté ? — Je le savais. Une ligne du Livre. — Et que mon pays sortirait pas ? » Tu dis oui encore. {autre:Il} hoche la tête, lentement. « Bon. T'as choisi en sachant. J'aime mieux ça. Les gens qui me font du mal sans savoir, j'ai jamais pu leur en vouloir comme il faut. »" },
      { first: true, if: { all: [J, { not: { has: "j:efface_leve" } }] }, text: "« Tu savais que je sortirais de ce côté ? » Tu dis que non. Que tu as tiré sans le savoir, et que tu as écouté le fil, ensuite, pour entendre si {autre:il} était encore au bout. {autre:Il} te regarde un long moment. « T'as eu peur. — Oui. — Bon. Moi aussi. On est quittes de ça. »" },
      { first: true, if: R, text: "Il y a une marque dans la pierre de la niche : un dos, et un autre plus bas, à côté. {autre} descend les dernières marches et te trouve adossé{e} là, tes sabots à la main. {autre:Il} a les paumes en sang et de la sciure aux genoux." },
      { first: true, if: R, text: "« T'as dit le mot. » Tu n'en fais pas une question. {autre:Il} dit oui. {autre:Il} cherche autre chose à dire, et {autre:il} ne trouve que : « Tu t'es tu{e}. » Tu hausses une épaule. Il fallait bien qu'un des deux laisse l'autre. Tu as l'habitude de laisser." },
      { first: true, if: R, text: "Tu pourrais lui en vouloir. Tu l'avais promis, au pied de cet escalier : *Je t'en voudrai peut-être.* Tu cherches, en toi, la place où cela devrait être. Tu y trouves une rue en pente, vide, en plein jour, où des gens que tu ne connais pas vont à leurs affaires. C'est plus grand que de la rancune, et cela n'a personne à qui s'adresser." },
      { first: true, text: "Vous restez là, à deux dans un tournant d'escalier. En haut, une reine descend avec une enfant. En bas, deux vieillards et un jeune homme attendent qu'on dise ce qu'ils deviennent. Dehors, quarante mille personnes dînent, et il n'y en a pas une qui sache qu'on l'a rendue." },
      { first: true, if: J, text: "{autre} remet ses sabots, l'un après l'autre, en se tenant à ton épaule. C'est la première fois qu'{autre:il} te touche sans y être forcé{autre:e} par un escalier. « Je serai là », dit-{autre:il}. « Je l'avais dit. J'ai nulle part d'autre où être, note bien. Ça aide à tenir parole. »" },
      { first: true, if: R, text: "Tu remets tes sabots, l'un après l'autre, en te tenant à son épaule. « Je serai là », dis-tu. Tu l'avais dit. Tu n'as nulle part d'autre où être ; cela aide à tenir parole." },
      { again: true, text: "La niche, au tournant. La pierre garde deux marques de dos." },
    ],
    choices: [{ label: "Descendre ensemble : on vous attend au puits", to: "Fd_tribunal", big: true }] },

  // ----- the judgment, beside the well
  Fd_tribunal: { act: "V", title: "La Guilde juge où la faute s'est faite", place: "tour", ambiance: "chateau", backName: "le puits", charniere: true,
    text: [
      { first: true, text: "Le Grand Maître a fait ranger les neuf en demi-cercle, sans cire, les mains au dos. Il a mis l'homme de trente ans devant le levier, et le vieil homme sur son berceau, à trois pas : il leur a laissé cette distance, qui est celle d'une vie." },
      { first: true, text: "« La Guilde juge où la faute s'est faite. C'est dans le Livre, et pour une fois le Livre est commode : nous y sommes. » Il parle du nez, les talons joints. « Je préside, d'ordinaire. Je ne présiderai pas. J'ai tenu ce levier contre lui, et à nous deux nous avons pris la ville : un juge qui a la moitié du crime dans les mains se récuse, ou il est évêque. »" },
      { first: true, text: "Il vous désigne, de sa moustache plus que de sa main. « Ces deux-là ont rendu le coup. Un en haut, un en bas. Le quarantième chapitre est une page blanche ; on me l'a assez reproché. Qu'ils y mettent la première ligne. »" },
      { first: true, text: "Les neuf vous regardent. Ils ont entre dix-sept et vingt-cinq ans, et ils viennent d'apprendre, par gestes puis par mots, ce qu'on leur avait fait boucher. L'enfant au maillet s'est mis au bout du rang. Personne ne lui a dit de s'en aller." },
      { first: true, text: "L'homme de trente ans attend debout. Il a noué ses mains devant lui pour qu'on ne les voie pas trembler, et on ne voit que cela." },
      { first: true, if: REFUSE, text: "« Il a lâché, dit le Grand Maître. Je le dis parce que je l'ai su, et qu'on me l'a rapporté de bonne source. Il a lâché quand on lui a montré la marge. Pesez-le. Pesez aussi qu'il a fallu la lui montrer. »" },
      { first: true, if: { not: REFUSE }, text: "« Il a tenu, dit le Grand Maître. Jusqu'au bout de ce qu'on lui donnait de force. Pesez-le. Pesez aussi qu'il a trente ans, et qu'on lui parlait avec sa propre voix : je connais des jurés de soixante qui n'auraient pas résisté à moins. »" },
      { again: true, text: "Le demi-cercle des neuf, le levier, l'homme qui attend." },
    ],
    choices: [
      { label: "« Qu'il reste. Au dernier établi. Et qu'il descende ici chaque matin écouter ce pas. »", monde: "jeune541", option: "guilde", fx: { flag: "monde:d_jeune_guilde" }, to: "Fd_jeune_guilde" },
      { label: "« Qu'il sorte de la ville, sans tablier, avant ce soir. »", monde: "jeune541", option: "banni", fx: { flag: "monde:d_jeune_banni" }, to: "Fd_jeune_banni" },
      { label: "« Il a vendu la chambre d'une reine à un duc. Qu'il le redise devant elle. »", monde: "jeune541", option: "reine", fx: { flag: "monde:d_jeune_reine" }, to: "Fd_jeune_reine" },
    ] },

  Fd_jeune_guilde: { act: "V", title: "Le dernier établi", place: "tour", ambiance: "chateau",
    text: [
      "Le Grand Maître ne dit ni oui ni non. Il regarde l'homme de trente ans.",
      "« Vous avez entendu. Le dernier établi, sous la fenêtre du nord, où l'on met les arpètes. Vous y ferez des goupilles. Vous descendrez ici à prime, tous les jours que Dieu fait, et vous écouterez ce pas le temps d'un psaume. Si un matin il boite, vous monterez me le dire en courant. Vous êtes, de toute la Guilde, celui qui sait le mieux ce que cela coûte. »",
      "« Combien de temps ? » demande le jeune. Sa voix a failli. « Jusqu'à ce que vous cessiez de compter. »",
      { if: J, text: "Tu le regardes. Il t'avait pris{e} pour dixième, il y a trois jours, parce que tu tenais bien un niveau. Il te regarde aussi. Il a compris qu'il serait désormais, dans cette maison, au-dessous de toi ; et tu vois qu'il l'accepte comme on accepte un remède : en fermant un œil." },
      { if: R, text: "Tu le regardes. Chez toi, cet homme-là mettait un prix sur les gens. Ici, il fera des goupilles. Tu cherches si cela te suffit. Tu trouves que oui, à peu près ; et que le reste, ce qui manque, aucune peine ne te le rendrait." },
      "Le grand roux fait un pas hors du rang. Il ôte son tablier vert, le plie en quatre, et le pose aux pieds du Grand Maître. « Je ne savais pas, dit-il. Je veux apprendre le reste. » Les huit autres le regardent. Trois en font autant. C'est ainsi que les maisons changent : par des garçons qui plient un tablier.",
    ],
    choices: [{ label: "Regarder le vieil homme", to: "Fd_vieux", big: true }] },

  Fd_jeune_banni: { act: "V", title: "Sans tablier", place: "tour", ambiance: "chateau",
    text: [
      "Le Grand Maître incline la tête. « C'est une sentence. Elle est dans nos usages. »",
      "L'homme de trente ans défait le cordon de son habit gris. Il n'a pas de tablier : il était sous-maître. Il ôte donc sa chaîne, qui est d'argent, avec la petite clef des heures ; puis les trois clefs de sa ceinture, Chambre haute, Chambre basse, Cage, qu'il tend l'une après l'autre. Le Grand Maître les prend sans le toucher.",
      "« La porte d'Occident ferme à la brune. Vous aurez passé le septième peuplier avant. Vous savez où c'est : c'est où finissait votre ouvrage. »",
      "Il s'en va vers l'escalier. Il s'arrête devant le vieil homme, sur son berceau. Ils se regardent. Aucun ne trouve rien à dire à l'autre ; et c'est peut-être qu'ils se sont tout dit, en onze grains, quand l'un avait encore de quoi promettre.",
      { if: J, text: "Tu le suis des yeux. Il a de belles mains, la tête faite, et il emporte tout ce qu'il sait. Tu penses à des cuves de verre, commandées à un bourg de potiers. On chasse un homme. On chasse plus malaisément une idée ; et celle-là vient de prendre la route avec ses bagages." },
      { if: R, text: "Tu le suis des yeux. Chez toi, on disait d'un glaneur chassé du camp qu'il irait glaner ailleurs. Celui-là sait une chose que personne d'autre ne sait faire, et il a devant lui toutes les villes du royaume. Tu espères qu'il a eu assez peur. Tu n'en mettrais pas ta main au cuir." },
      "Les neuf le regardent monter. Aucun ne le suit.",
    ],
    choices: [{ label: "Regarder le vieil homme", to: "Fd_vieux", big: true }] },

  Fd_jeune_reine: { act: "V", title: "Devant elle", place: "tour", ambiance: "chateau",
    text: [
      "« C'est juste, dit le Grand Maître. La Guilde juge les leviers. Les ducs ne sont pas de son ressort, et celui-là moins qu'un autre : il a payé d'avance. »",
      "L'homme de trente ans a pâli. Il préférait la Guilde : on s'y explique entre gens qui savent ce qu'est une crémaillère. Devant une reine, il faudra dire *douze mille écus*, et le dire en regardant une enfant.",
      "« Je le dirai. » Il avale. « Tout. Le quai, les caisses, le sceau gravé d'avance. Qu'il voulait un an, et la Reine dedans. Que j'ai dit : *Monseigneur aura ce qu'il a payé.* » Il regarde ses mains. « J'avais trouvé cela spirituel. »",
      "Elle descend justement. On l'entend dans l'escalier : un pas égal, une robe qui pèse, et la voix d'une enfant qui compte les marches tout haut pour s'occuper. Le Grand Maître joint les talons. Les neuf ôtent leurs bandeaux.",
      "La Reine s'arrête à la dernière marche. Elle regarde la salle, le puits, l'homme en gris. Elle a vu des plans de cet endroit. Elle n'y était jamais venue.",
      "« C'est donc ici », dit-elle. Et à lui : « Parlez. Je vous écoute debout, et ma fille aussi. Elle a droit de savoir combien elle valait. »",
      "Il parle. Cela prend le temps de deux psaumes. Quand il a fini, il y a dans cette cave une Reine qui sait le nom, la somme et le jour, devant onze témoins dont un Grand Maître. On a pendu des ducs pour moins de papier.",
    ],
    choices: [{ label: "Regarder le vieil homme", to: "Fd_vieux", big: true }] },

  Fd_vieux: { act: "V", title: "Le témoin", place: "tour", ambiance: "chateau", charniere: true, backName: "le berceau",
    text: [
      { first: true, text: "Il reste l'autre. Le Grand Maître s'est tourné vers le berceau, et il a mis du temps à trouver par quel bout le prendre." },
      { first: true, text: "« Celui-ci n'est pas de mon ressort non plus. Il n'est de la Guilde d'aucune année : il a été reçu en 536, et il vient de 601. Je ne peux pas le chasser d'une maison où il n'est jamais rentré. Je ne peux pas davantage le punir d'une chose qui, depuis midi, n'a pas eu lieu. » Sa moustache remue. « Les légistes en feraient un beau livre. Nous n'avons pas de légistes. Nous avons deux enfants. »" },
      { first: true, text: "Le vieil homme écoute, le menton sur sa canne. Il a déjà changé. C'est peu de chose encore : la peau des mains, plus fine ; un tremblement au coin de la bouche, qu'il n'avait pas dans la note. Le sable le quitte comme l'eau quitte une éponge posée au soleil." },
      { first: true, text: "« Je fais gagner du temps au tribunal, dit-il. Je serai mort à la Saint-Jean. Il s'agit donc de trois jours. On peut me les faire passer dans une cave, dans une rue, ou devant quelqu'un. Je n'ai pas de préférence. C'est la première fois de ma vie, et j'en éprouve une espèce de repos. »" },
      { again: true, text: "Le vieil homme attend, sur son berceau, qu'on dise où il passera trois jours." },
    ],
    choices: [
      { label: "« Qu'il les passe avec celui qu'il était. Que l'autre le regarde finir. »", monde: "vieux541", option: "jeune", fx: { flag: "monde:d_vieux_jeune" }, to: "Fd_vieux_jeune" },
      { label: "« Qu'il sorte. Qu'il voie une fois cette ville debout, puisqu'il l'a tenue couchée. »", monde: "vieux541", option: "libre", fx: { flag: "monde:d_vieux_libre" }, to: "Fd_vieux_libre" },
      { label: "« Qu'il monte devant la Reine. Elle a signé pour une chambre : qu'elle voie ce qu'une chambre devient. »", monde: "vieux541", option: "reine", fx: { flag: "monde:d_vieux_reine" }, to: "Fd_vieux_reine" },
    ] },

  Fd_vieux_jeune: { act: "V", title: "Trois jours, en face", place: "tour", ambiance: "chateau",
    text: [
      "Le vieil homme tourne la tête vers l'homme de trente ans. Pour la première fois, il a l'air de trouver le compte lourd.",
      "« C'est une sentence d'horloger. Elle est exacte. » Il se lève. Il lui faut ses deux mains sur la canne, et un temps de plus que tout à l'heure. « Viens, Melchior. Tu vas me donner le bras. Tu apprendras ce qu'il pèse. »",
      { if: { has: "monde:d_jeune_banni" }, text: "Ils s'en iront ensemble, donc, par la porte d'Occident : un homme de trente ans qui en soutient un de quatre-vingt-dix, sur le halage, jusqu'au septième peuplier et plus loin. Les gens se retourneront. On dira : c'est un bon fils. Ils ne détromperont personne." },
      { if: { has: "monde:d_jeune_guilde" }, text: "On leur donnera la soupente au-dessus de l'atelier du nord. Le jeune fera des goupilles le jour, et la nuit il entendra respirer, derrière une cloison de planches, ce qu'il deviendrait. Le vieux lui parlera. Il n'a jamais su se taire devant un bon élève." },
      { if: { has: "monde:d_jeune_reine" }, text: "On les mettra dans la même chambre, au Palais, sous la même clef. Le jeune attendra ses juges ; le vieux, sa Saint-Jean. Il est à croire que le second aura fini avant que les premiers aient commencé, et que le prisonnier fermera lui-même des yeux vairons." },
      "Le jeune avance le bras. Il le fait avec dégoût, puis, au moment où la vieille main s'y pose, avec quelque chose d'autre : cette main est légère, elle tremble, et c'est la sienne.",
      { if: J, text: "{autre} les regarde s'accorder sur un pas. « C'est dur, ce qu'on a dit là. — C'est ce qu'il nous a fait toute la matinée : il nous a montré ce qu'on devenait. » {autre} réfléchit. « Oui. Mais nous, on avait le choix. » Tu ne réponds pas. C'est précisément ce qu'on vient de donner au jeune." },
      { if: R, text: "Tu les regardes s'accorder sur un pas. C'est dur, ce que vous avez dit là. Tu le penses, et tu ne le retires pas. Le vieux vous a montré toute la matinée ce qu'on devient ; il est juste que quelqu'un le voie de plus près que vous." },
    ],
    choices: [{ label: "La porte de fer", to: "Fd_porte", big: true }] },

  Fd_vieux_libre: { act: "V", title: "Une ville debout", place: "tour", ambiance: "chateau",
    text: [
      "Il lève un sourcil. C'était la seule des trois qu'il n'avait pas calculée.",
      "« Vous me lâchez. » Il se met debout, en deux temps. « Sans garde. Sans condition. Vous savez que je n'ai plus de quoi nuire, et vous avez raison ; mais on m'aurait enfermé pour moins, par simple goût de l'ordre. » Il vous regarde l'un après l'autre. « Je vous avais offert toutes les maisons. Vous m'offrez une rue. C'est mieux mesuré. »",
      "Il va vers l'escalier, à petits pas exacts. Au passage, il s'arrête devant le Grand Maître. Les deux vieillards se font face : l'un a soixante-dix ans et les a, l'autre en a quatre-vingt-dix et commence à les avoir.",
      "« Barnabé. — Melchior. — Vous aviez raison sur la marge. Je l'ai su dès 543. Je n'ai trouvé personne à qui le dire. » Le Grand Maître ne répond pas tout de suite. « Allez voir la foire. On y joue un Mystère à douze portes. La dernière vous intéressera. »",
      "Il monte. On entend longtemps sa canne. Il sortira par la porte de fer, dans la ruelle des Sonneurs, au milieu de gens qui mangent des beignets. Il n'a pas vu marcher cette ville depuis soixante ans. Il la regardera comme un homme regarde une montre qu'il avait crue cassée, et qu'un autre a remise en route d'un coup de pouce.",
      { if: R, text: "« Tu crois qu'il fera quoi ? » demande {autre}. Tu hausses une épaule. Tu as vu des vieux Lents, à la lisière, qu'on avait tirés du gris au bout de vingt ans. Ils s'asseyaient au soleil. Ils regardaient passer les charrettes. Ils avaient l'air de trouver cela très bien fait." },
      { if: J, text: "« Il fera quoi ? » demandes-tu. {autre} hausse une épaule. « Il s'assoira au soleil. Je les ai vus, les vieux qu'on sort du gris. Ils regardent passer les charrettes. Ils trouvent ça très bien fait. »" },
    ],
    choices: [{ label: "La porte de fer", to: "Fd_porte", big: true }] },

  Fd_vieux_reine: { act: "V", title: "Ce qu'une chambre devient", place: "tour", ambiance: "chateau",
    text: [
      { if: { has: "monde:d_jeune_reine" }, text: "Elle est là, au bas des marches, l'enfant contre elle. Elle vient d'entendre le jeune. Elle regarde le vieux se lever de son berceau, et venir à elle par le bord du puits ; et elle voit, à mesure qu'il approche, que c'est le même." },
      { if: { not: { has: "monde:d_jeune_reine" } }, text: "On l'entend dans l'escalier : un pas égal, une robe qui pèse. Elle paraît à la dernière marche, l'enfant contre elle. Elle regarde la salle, le puits, les neuf. Puis le vieil homme, qui s'est levé de son berceau et qui vient à elle par le bord ; puis le jeune, devant le levier. Elle les regarde deux fois chacun." },
      "« Madame. » Il incline la tête, de son inclinaison exacte. « Vous m'avez commandé une chambre, le douze de ce mois. Je vous en apporte le mémoire. Il est long. »",
      "Il le lui fait. Sans une excuse, sans un ornement, comme on lit un inventaire : la ville, la lieue, les cercles, année par année ; l'abbaye, le pont, le bourg des verriers ; la Régence et son serment ; le sable, ce qu'il valait, à qui il le vendait. Il dit : *j'ai porté dix ans la clef de votre porte, et je ne suis pas monté.* Il le dit en regardant l'enfant.",
      "La Reine ne l'interrompt pas une fois. Aélis, à un moment, a demandé tout bas : « C'est le même monsieur ? » On lui a dit oui. Elle a dit : « Il est très vieux. Il a dû attendre longtemps. »",
      "« C'est tout », dit-il enfin. Il s'appuie des deux mains. Il a parlé le temps de trois psaumes, et il en a pris dix ans.",
      "La Reine regarde le jeune. « Vous avez entendu ce que vous alliez faire de moi. » Elle regarde le vieux. « Et vous, vous êtes venu me le dire. Aucun de mes ministres n'a jamais fait tant. » Elle redresse l'enfant sur sa hanche. « On vous donnera une chambre au Palais, avec une fenêtre. Je monterai vous voir avant la Saint-Jean. J'aurai des questions. Ce sont celles d'une femme qui a signé : vous êtes le seul homme du royaume à pouvoir y répondre. »",
    ],
    choices: [{ label: "La porte de fer", to: "Fd_porte", big: true }] },

  Fd_porte: { act: "V", title: "La porte de fer, du dedans", place: "tour", ambiance: "chateau",
    text: [
      "Vous remontez. Les quatre-vingts marches, le palier, la pendule qui va. Puis le couloir de service, et au bout, le vantail au papillon, entrebâillé comme un vieux l'avait laissé à onze heures.",
      "Il en vient du bruit. C'est un bruit que tu n'attendais plus : des voix, toutes ensemble, sans ordre, avec des rires dedans, une vielle, un marchand qui crie ses oublies. Il n'y a rien de plus bête au monde, et tu t'arrêtes pour l'écouter.",
      { if: J, text: "{autre} s'est arrêté{autre:e} aussi, la main sur le fer. {autre:Il} n'a jamais entendu une ville. Chez {autre:lui}, il y avait des camps, où l'on parle bas, et une grande chose muette au milieu de la plaine. {autre:Il} écoute, la bouche un peu ouverte. « Ça fait tout le temps ça ? — Tout le temps. — Et ils s'entendent ? — Non. C'est pour ça que ça dure. »" },
      { if: R, text: "Tu n'as jamais entendu une ville. Chez toi, il y avait des camps, où l'on parle bas, et une grande chose muette au milieu de la plaine. Tu écoutes, la main sur le fer. « Ça fait tout le temps ça ? — Tout le temps, dit {autre}. — Et ils s'entendent ? — Non. C'est pour ça que ça dure. »" },
      { if: { has: "monde:josquin_debout" }, text: "Contre le mur, à gauche de la porte, un garçon de seize ans se tient debout, des lunettes trop grandes à la main. Il a compté douze, de l'autre côté du fer, tout seul, à voix haute. Il vous voit sortir. Il dit : « Le maître ? » On lui dit : en bas, vivant, et de mauvaise humeur. Il s'assoit par terre, et il pleure dans ses lunettes." },
      { if: { has: "monde:hurel_debout" }, text: "Une femme en coiffe noire attend au coin de la ruelle, les mains dans son tablier. Derrière vous, un enfant de treize ans sort en courant, sans maillet. Elle ne lui dit rien. Elle lui prend la tête à deux mains, elle lui regarde les oreilles, l'une puis l'autre, et elle l'emmène." },
      "Vous poussez le vantail. Le soleil est droit sur la ruelle : il est midi et un quart, un jour de fête, et il fait chaud.",
    ],
    choices: [{ label: "Pousser le vantail", to: "Fd_parvis", big: true }] },
});

module.exports = { passages: P, extras: {} };
