// L'Écu de Vellane · the passages. Act I: the castle (stable or armoury, then the banquet). Act II: the knight's
// bedside, then the remedy or the trail. Act III: the mountain, the grille, Gauvard, the Stone (a rendezvous), dawn.
// {autre} is the other page (s.allies, set by src/multi.js).
var AMIS = [{ has: "monde:amitie_dague" }, { has: "monde:amitie_ecu" }, { has: "monde:amitie_main" }];
module.exports = {
  // ---------------------------------------------------------------- act I · the castle
  P_reveil: { act: "I", title: "Sous les combles", place: "vellane",
    text: [
      "Le coq de Dame Héloïse chante faux, comme tous les matins, et comme tous les matins tu te réveilles avant lui avec la même pensée : *aujourd'hui, faire mieux que {autre}*.",
      "La chambre des pages est un grenier sous les ardoises, deux paillasses, un coffre, une lucarne. Sur l'autre paillasse, {autre} est déjà en train de lacer ses bottes, le dos tourné, avec cette application exaspérante de quelqu'un qui veut être prêt le premier. Vous ne vous dites pas bonjour. Vous ne vous êtes pas dit bonjour depuis la Toussaint.",
      { if: { has: "passe:noble" }, text: "Chez ton père, on avait des valets pour lacer les bottes. Ici, on t'a appris à lacer celles des autres. Tu as fini par trouver que ce n'était pas le pire de ce qu'on apprend." },
      { if: { has: "passe:forge" }, text: "Tu as encore, dans les paumes, la corne de la forge. Messire dit que c'est la seule armure qu'on ne vous enlève pas." },
      { if: { has: "passe:cloitre" }, text: "Au monastère, on se levait à matines, dans le noir. Ici, au moins, il y a le coq. Faux, mais vivant." },
      "Par la lucarne, tu vois le chemin du village, et sur le chemin trois cavaliers qui montent au trot : Sire Gauvard de Morne, le cousin de Messire, avec son écuyer et un homme d'armes. Ils devaient arriver ce soir. Ils sont en avance.",
      "Il y a deux corvées ce matin, et deux pages. Celui qui choisit le premier choisit bien.",
    ],
    choices: [
      { label: "Descendre à l'écurie panser les chevaux des arrivants", role: "matin", option: "ecurie", to: "P_ecurie", big: true },
      { label: "Monter à l'armurerie fourbir l'armure de Messire pour le banquet", role: "matin", option: "armure", to: "P_armure", big: true },
    ] },

  P_ecurie: { act: "I", title: "L'écurie", place: "vellane",
    text: [
      "L'écurie sent le foin chaud et le cuir. Brise-Vent, le vieux destrier de Messire, te salue d'un coup de tête dans l'épaule qui manque de te renverser. Les chevaux de Gauvard arrivent derrière toi, fumants, menés par un garçon maigre aux yeux cernés : Thibaud, son écuyer.",
      "« Bouchonne le gris, dit-il sans te regarder. Monseigneur y tient. » Il s'en va vers les cuisines en traînant les pieds, comme quelqu'un qui n'a pas dormi.",
      "Le gris de Gauvard est un beau cheval, crotté jusqu'aux genoux. Tu prends la brosse.",
    ],
    choices: [
      { label: "Curer les sabots du gris", test: { dom: "nature", diff: 0, label: "Nature" },
        win: { fx: { clue: "g_boue", flag: "monde:boue", ep: ["perso", 400] }, to: "P_ecurie_boue" }, lose: { to: "P_ecurie_paille" }, hide: { any: [{ seen: "P_ecurie_boue" }, { seen: "P_ecurie_paille" }] } },
      { label: "Ramasser ce qui brille dans la paille", to: "P_ecurie_dague", hide: { seen: "P_ecurie_dague" } },
      { label: "Remonter : on sonne pour le banquet", if: { seen: "P_ecurie_dague" }, why: "Le travail n'est pas fini.", to: "P_banquet" },
    ] },
  P_ecurie_boue: { act: "I", title: "L'argile rouge", place: "vellane",
    text: [
      "Dans la fourchette du sabot, tassée, une argile rouge sombre, presque violette. Il n'y en a qu'à un endroit dans le comté : sur le chemin des bergers qui monte au Mont-Veille, là où personne ne monte plus.",
      "Gauvard arrive de Morne, à l'ouest. Le Mont-Veille est au nord. Ce n'est pas sur la route. Ce n'est sur la route de rien.",
    ],
    choices: [{ label: "Finir de bouchonner le gris", to: "P_ecurie" }] },
  P_ecurie_paille: { act: "I", title: "Un cheval nerveux", place: "vellane",
    text: [
      "Le gris ne veut pas donner le pied. Il piaffe, il souffle, il te marche presque sur la main, et quand Thibaud revient chercher sa selle, il te regarde faire avec un drôle d'air, comme soulagé que tu n'aies rien trouvé. Tu ne sais pas quoi.",
    ],
    choices: [{ label: "Laisser le gris tranquille", to: "P_ecurie" }] },
  P_ecurie_dague: { act: "I", title: "La dague de {autre}", place: "vellane",
    text: [
      "Dans la paille de la stalle de Brise-Vent, une dague. Tu la connais : poignée tressée de cuir bleu, une encoche dans la garde. C'est celle de {autre}, oubliée là hier soir. Les pages n'ont pas le droit de laisser traîner une lame dans l'écurie. Messire est très dur là-dessus depuis qu'un palefrenier y a perdu un œil.",
      "Il suffirait de la porter à Dame Héloïse. Ou de la poser, sans un mot, sur la paillasse de {autre}.",
    ],
    choices: [
      { label: "La remettre sur sa paillasse, sans rien dire", fx: { flag: "monde:amitie_dague", ep: ["perso", 300] }, to: "P_ecurie_dague_rendue" },
      { label: "La porter à Dame Héloïse", fx: { flag: "monde:rancune_dague" }, to: "P_ecurie_dague_donnee" },
    ] },
  P_ecurie_dague_rendue: { act: "I", title: "Une dague sur une paillasse", place: "vellane",
    text: [
      "Tu montes au grenier quatre à quatre, tu poses la dague sur la couverture pliée, bien en vue, et tu redescends avant que quelqu'un te voie. Tu ne sais pas très bien pourquoi tu as fait ça. Tu n'as pas envie d'y réfléchir.",
    ],
    choices: [{ label: "Retourner à l'écurie", to: "P_ecurie" }] },
  P_ecurie_dague_donnee: { act: "I", title: "Les clés de Dame Héloïse", place: "vellane",
    text: [
      "Dame Héloïse prend la dague, la tourne, reconnaît la poignée, et soupire. « Je lui en parlerai. » Elle te regarde un peu trop longtemps. « Et à toi aussi, peut-être, un de ces jours. » Elle accroche la dague à son trousseau, avec les clés.",
    ],
    choices: [{ label: "Retourner à l'écurie", to: "P_ecurie" }] },

  P_armure: { act: "I", title: "L'armurerie", place: "vellane",
    text: [
      "L'armurerie est la pièce la plus froide du château, et la plus belle : des râteliers de lances, des cottes pendues comme des peaux de bêtes, et sur un mannequin de bois l'armure de Messire Aubert, qui a fait trois guerres et n'en parle jamais.",
      "Tu prends le sable fin, l'huile, le chiffon, et tu commences par l'écu, le grand écu de Vellane, d'azur à la tour d'argent.",
    ],
    choices: [
      { label: "Retourner l'écu pour huiler les sangles", to: "P_armure_ecu", hide: { seen: "P_armure_ecu" } },
      { label: "Ramasser le papier tombé près de la porte", to: "P_armure_lettre", hide: { seen: "P_armure_lettre" } },
      { label: "Descendre : on sonne pour le banquet", if: { seen: "P_armure_ecu" }, why: "L'écu n'est pas prêt.", to: "P_banquet" },
    ] },
  P_armure_ecu: { act: "I", title: "La sangle", place: "vellane",
    text: [
      "La grande sangle de l'écu, celle qui passe sur l'avant-bras, a été entaillée. Pas usée : entaillée, net, aux trois quarts, à l'endroit où elle plie. Au premier coup de lance, elle aurait lâché.",
      "Hier soir, c'est {autre} qui a rangé l'écu. Tu l'as vu, de la porte.",
      "Messire passera ici avant le banquet. Il suffirait de lui montrer la sangle, et de dire qui l'a rangée.",
    ],
    choices: [
      { label: "Changer la sangle toi-même, et garder l'entaille pour toi", fx: { flag: "monde:amitie_ecu", ep: ["perso", 300] }, to: "P_armure_ecu_repare" },
      { label: "Montrer la sangle à Messire et dire qui l'a rangée", fx: { flag: "monde:rancune_ecu" }, to: "P_armure_ecu_accuse" },
    ] },
  P_armure_ecu_repare: { act: "I", title: "Une sangle neuve", place: "vellane",
    text: [
      "Il y a des sangles neuves dans le coffre. Tu en coupes une, tu la cloues, tu la graisses. Tu gardes la vieille, roulée dans ta manche. En la regardant mieux, à la lumière de la meurtrière, tu remarques que l'entaille est oblique, faite de haut en bas, par une main qui tenait la lame de la gauche.",
      "Or {autre} tient l'épée d'exercice de la main droite. Tu l'as assez vu faire.",
    ],
    choices: [{ label: "Reprendre l'armure", to: "P_armure" }] },
  P_armure_ecu_accuse: { act: "I", title: "Messire Aubert", place: "vellane",
    text: [
      "Messire Aubert prend la sangle, la regarde longtemps, sans rien dire. Il passe le pouce sur l'entaille. Puis il te la rend.",
      "« Elle a été coupée par un gaucher, page. De haut en bas. Regarde. » Il se détourne vers la fenêtre. « Je n'ai pas de page gaucher. J'ai deux pages qui ne se regardent pas. » Il sort sans un mot de plus, et sa jambe raide sonne sur les dalles.",
    ],
    choices: [{ label: "Changer la sangle, les joues en feu", to: "P_armure" }] },
  P_armure_lettre: { act: "I", title: "Un papier plié", place: "vellane",
    text: [
      "Un papier plié en quatre, sali d'une empreinte de botte. Il a dû tomber de la sacoche de quelqu'un qui est passé par ici ce matin : par la porte, tu vois l'escalier qui mène aux chambres d'hôtes.",
      "Ce n'est pas écrit en clair. Des lettres serrées, sans espaces, comme dans les jeux de moines.",
    ],
    choices: [
      { label: "Essayer de le lire", test: { dom: "savoir", diff: 0, label: "Savoir" },
        win: { fx: { clue: "g_lettre", flag: "monde:lettre", ep: ["perso", 400] }, to: "P_armure_lettre_lue" }, lose: { to: "P_armure_lettre_perdue" } },
    ] },
  P_armure_lettre_lue: { act: "I", title: "Au troisième soir", place: "vellane",
    text: [
      "C'est un jeu d'enfant, quand on l'a vu une fois : chaque lettre décalée de trois. Tu le déchiffres du bout du doigt, à mi-voix.",
      "*Au troisième soir, la Pierre. Que le vieux dorme d'ici là.*",
      "Le vieux. Tu regardes l'armure sur son mannequin, et tu as froid tout à coup.",
    ],
    choices: [{ label: "Glisser le papier dans ta chemise", to: "P_armure" }] },
  P_armure_lettre_perdue: { act: "I", title: "Des lettres serrées", place: "vellane",
    text: [
      "Tu tournes le papier dans tous les sens. Rien. Des pas dans l'escalier : un garçon maigre aux yeux cernés passe la tête par la porte, voit le papier dans ta main, pâlit, et te le prend presque doucement. « C'est à mon maître. » Il s'en va très vite.",
    ],
    choices: [{ label: "Reprendre ton chiffon", to: "P_armure" }] },

  P_banquet: { act: "I", title: "Le banquet", place: "vellane",
    text: [
      "La grande salle de Vellane n'a pas vu autant de chandelles depuis la noce de Dame Héloïse, qui n'a pas eu lieu. Gauvard est assis à la droite de Messire. Il est beau, gai, il a un mot pour chacun, il complimente le sanglier, la sauce, la tapisserie, et il regarde son cousin comme on regarde un coffre.",
      "Vous servez, {autre} et toi, comme il se doit : chacun une cruche, chacun un bout de table. Dame Héloïse vous indique d'un regard qui sert qui.",
      { if: { has: "monde:amitie_dague" }, text: "En passant derrière toi avec les tranchoirs, {autre} murmure, sans tourner la tête : « Merci pour la dague. » Ce sont les premiers mots depuis la Toussaint." },
      { if: { has: "monde:rancune_ecu" }, text: "{autre} ne te regarde pas. Quelqu'un lui a dit, pour la sangle." },
    ],
    choices: [
      { label: "Servir le vin de Messire Aubert", role: "banquet", option: "aubert", to: "P_banquet_aubert", big: true },
      { label: "Servir le vin de Sire Gauvard", role: "banquet", option: "gauvard", to: "P_banquet_gauvard", big: true },
    ] },
  P_banquet_aubert: { act: "I", title: "La coupe de Messire", place: "vellane",
    text: [
      "Messire boit peu, d'habitude. Ce soir il tend sa coupe deux fois, pour faire honneur à son cousin. La cruche qu'on t'a donnée pour lui vient de la desserte, où elle est restée un moment sans personne.",
      "En versant, tu sens quelque chose : sous le vin, une odeur d'amande amère, très légère, comme un noyau qu'on aurait cassé.",
    ],
    choices: [
      { label: "Trébucher, et renverser la cruche sur la nappe", test: { dom: "discretion", diff: 0, label: "Discrétion" },
        win: { fx: { flag: "monde:coupe_renversee", ep: ["seance", 1000] }, to: "P_banquet_renverse" }, lose: { to: "P_banquet_trop_tard" } },
      { label: "Ne rien faire : tu n'es pas sûr", to: "P_banquet_trop_tard" },
    ] },
  P_banquet_renverse: { act: "I", title: "Une nappe rouge", place: "vellane",
    text: [
      "Ton pied rencontre, très opportunément, le pied de la table. La cruche part, le vin s'étale sur la nappe, sur les manches de Messire, sur les chausses de Gauvard qui se lève d'un bond. On rit. Dame Héloïse te fusille du regard. Messire, qui n'avait bu qu'une gorgée de la deuxième coupe, rit plus fort que les autres.",
      "Gauvard ne rit pas.",
    ],
    choices: [{ label: "Aller chercher un torchon", to: "P_nuit" }] },
  P_banquet_trop_tard: { act: "I", title: "Deux coupes", place: "vellane",
    text: [
      "Messire boit sa coupe, puis l'autre, en levant le bras vers son cousin. Gauvard lève la sienne. Ils se sourient. Tu restes avec ta cruche, et cette odeur que tu n'es plus très sûr d'avoir sentie.",
    ],
    choices: [{ label: "Continuer le service", to: "P_nuit" }] },
  P_banquet_gauvard: { act: "I", title: "La manche de Gauvard", place: "vellane",
    text: [
      "Servir Gauvard, c'est se tenir derrière lui, la cruche à la main, et regarder sa nuque, ses boucles, le jeu de ses mains baguées pendant qu'il raconte une chasse où il a été très brave.",
      "Et c'est pour ça que tu le vois. Au moment où Messire se tourne vers Dame Héloïse, la main gauche de Gauvard passe au-dessus de la cruche de son cousin, une seconde, et quelque chose tombe de sa manche dans sa paume, puis de sa paume dans le vin. Une fiole grande comme un doigt. Il la remet dans sa manche sans même baisser les yeux.",
      "Il est gaucher. Tu ne l'avais pas remarqué.",
    ],
    choices: [
      { label: "Crier, devant toute la salle", to: "P_banquet_cri" },
      { label: "Te taire, et ne plus le quitter des yeux", fx: { clue: "g_fiole", flag: "monde:fiole_vue", ep: ["perso", 400] }, to: "P_banquet_silence" },
    ] },
  P_banquet_cri: { act: "I", title: "Un page qui crie", place: "vellane",
    text: [
      "« Il a mis quelque chose dans le vin ! » Toute la salle se tait. Gauvard se retourne lentement, te regarde, et éclate de rire, et ouvre ses deux mains, vides, et retourne ses manches, vides. « Cousin, tes pages ont de l'imagination. »",
      "Messire ne rit pas. Il te fait sortir. Mais il repose sa coupe sans la finir, et c'est peut-être tout ce que tu pouvais faire.",
    ],
    choices: [{ label: "Sortir", fx: { clue: "g_fiole", flag: "monde:coupe_renversee" }, to: "P_nuit" }] },
  P_banquet_silence: { act: "I", title: "La fiole", place: "vellane",
    text: [
      "Tu te tais. Tu verses le vin de Gauvard, tu souris quand il te sourit. Tes mains ne tremblent pas. C'est la chose la plus difficile que tu aies jamais faite.",
    ],
    choices: [{ label: "Finir le service", to: "P_nuit" }] },

  P_nuit: { act: "I", title: "La nuit", place: "vellane",
    text: [
      "Le banquet finit tard. Vous montez vous coucher, {autre} et toi, l'un derrière l'autre, sans un mot. Au milieu de la nuit, des cris, des portes, des pas dans l'escalier : Messire Aubert est tombé dans sa chambre, et ne se réveille pas.",
    ],
    choices: [{ label: "Descendre", to: "P_chevet", big: true }] },

  // ---------------------------------------------------------------- act II · the road
  P_chevet: { act: "II", title: "Au chevet de Messire", place: "vellane",
    fx: { ep: ["histoire", 4000] },
    text: [
      "Messire Aubert est couché tout habillé sur son lit, gris, les lèvres bleues. Dame Héloïse lui tient la main. Gauvard est parti avant l'aube, dit-on, « appelé à Morne pour une affaire urgente ».",
      "Vous êtes là tous les deux, au pied du lit, {autre} et toi. Pour la première fois depuis la Toussaint, vous vous tenez épaule contre épaule, et vous ne vous en apercevez même pas.",
      { if: { has: "monde:coupe_renversee" }, text: "Il n'a bu qu'une gorgée de trop, et il est lucide, par moments. Il ouvre les yeux, vous reconnaît, essaie de sourire." },
      { if: { not: { has: "monde:coupe_renversee" } }, text: "Il a tout bu. Il délire, il parle de batailles d'il y a trente ans, et puis, d'un coup, très clairement, d'autre chose." },
      "« La Pierre-Veille, dit-il. Gauvard. Il croit qu'il pourra commander le ver. Personne ne commande Ossaroth. Si la Pierre quitte son autel, la montagne s'ouvre, et le comté brûle. »",
      { if: { has: "monde:boue" }, text: "L'argile rouge sous les sabots du gris : Gauvard est déjà allé reconnaître le chemin." },
      { if: { has: "monde:lettre" }, text: "*Au troisième soir, la Pierre.* Demain soir sera le troisième." },
      { if: { has: "monde:fiole_vue" }, text: "Et la fiole, dans la manche gauche. Il n'y a plus de doute à avoir." },
      { if: { any: [{ has: "monde:rancune_dague" }, { has: "monde:rancune_ecu" }] }, text: "Messire vous regarde l'un après l'autre. « Je vous ai vus vous déchirer pour une sangle, pour une dague, pour un regard. Vous voulez savoir lequel de vous deux sera mon écuyer ? Celui qui comprendra qu'il ne peut rien faire seul. »" },
      "« Frère Anselme, souffle-t-il. Au moulin des Saules. Il saura pour le poison, et il sait pour la Pierre. Et quelqu'un doit suivre Gauvard. » Sa main cherche les vôtres. « Ensemble. Ou pas du tout. »",
    ],
    choices: [
      { label: "Courir au moulin des Saules chercher Frère Anselme", role: "route", option: "remede", fx: { clue: "p_legende" }, to: "P_route_saules", big: true },
      { label: "Prendre Brise-Vent et suivre la piste de Gauvard", role: "route", option: "piste", fx: { clue: "p_legende" }, to: "P_piste", big: true },
    ] },

  P_route_saules: { act: "II", title: "Le chemin des Saules", place: "vellane",
    combat: { title: "Les loups du bois Bréhaut", enemies: [{ id: "loup", n: 2 }], range: "loin", terrain: "nature",
      win: { fx: { ep: ["seance", 1200] }, to: "P_anselme" }, lose: { to: "P_anselme" },
      flee: { label: "Courir jusqu'au moulin", dom: "nature", diff: -10, to: "P_anselme" } },
    text: [
      "Le moulin des Saules est à une demi-journée par le bois Bréhaut. Tu cours, puis tu marches, puis tu cours encore. Au milieu du bois, sur le sentier, deux loups t'attendent, maigres comme la fin de l'hiver, et ils n'ont pas l'air de vouloir te laisser passer.",
    ] },
  P_anselme: { act: "II", title: "Frère Anselme", place: "saules",
    text: [
      "Le moulin ne tourne plus depuis longtemps. Dedans, il y a des herbes pendues partout, des pots, des alambics, des chats, et un vieil homme en robe brune qui épluche des racines avec un petit couteau courbe.",
      "Il écoute tout, sans t'interrompre. Puis il pose son couteau. « Amande amère. Gauvard n'a jamais eu d'imagination. » Il se lève, fouille, mélange, bouche une fiole à la cire. « Ceci pour Aubert, trois gouttes sur la langue, toutes les heures. Il vivra. Il boitera un peu plus. Il boitait déjà. »",
      "« Et pour la Pierre ? »",
      "Il te regarde longtemps. « Assieds-toi. »",
    ],
    choices: [{ label: "T'asseoir", fx: { item: "remede" }, to: "P_anselme_pierre" }] },
  P_anselme_pierre: { act: "II", title: "Le mot de la Veille", place: "saules",
    text: [
      "« Il y a neuf cents ans, les gens d'ici ont endormi Ossaroth avec une pierre et un mot. La pierre est restée sur l'autel, sous la montagne. Le mot, on se l'est transmis, de bouche à oreille, de vieux fou à vieux fou. Je suis le dernier vieux fou. »",
      "Il te le dit. Ce n'est pas un mot, c'est une phrase, presque une chanson, dans une langue que personne ne parle plus, et il te la fait répéter jusqu'à ce que tu la saches sans y penser.",
      "« Écoute bien, maintenant. La Pierre ne se repose pas d'une seule main. L'une la tient sur l'autel, l'autre dit le mot. Un homme seul n'y arrive pas. Gauvard ne l'a jamais compris, parce que Gauvard n'a jamais eu besoin de personne. »",
    ],
    choices: [
      { label: "Renvoyer le remède au château par le fils du meunier, et partir vers la montagne", fx: { flag: "monde:mot", clue: "p_deux" }, to: "P_anselme_depart" },
    ] },
  P_anselme_depart: { act: "II", title: "Le fils du meunier", place: "saules",
    fx: { flag: "monde:remede", drop: "remede", ep: ["seance", 1500] },
    text: [
      "Le fils du meunier a douze ans, des jambes de lièvre et une fierté de chevalier. Il serre la fiole contre lui et part en courant vers Vellane sans se retourner.",
      "Toi, tu prends le chemin du nord. Frère Anselme te regarde partir, sur le seuil, ses chats autour des chevilles. « Trouve l'autre, crie-t-il. Tu ne peux rien faire seul. »",
      "Tu ne lui as pas parlé de {autre}. Tu ne lui as parlé que de Messire, et de Gauvard.",
    ],
    choices: [{ label: "Marcher vers le Mont-Veille", to: "P_pied", big: true }] },

  P_piste: { act: "II", title: "La piste de Gauvard", place: "vellane",
    text: [
      "Brise-Vent est vieux, mais il connaît les chemins mieux que toi, et il a l'air de savoir qui vous poursuivez. La piste n'est pas difficile à suivre : trois chevaux ferrés de frais, un qui boite un peu, vers le nord, vers la montagne ronde.",
      "Au soir, dans un repli du chemin des bergers, tu vois un feu.",
    ],
    choices: [
      { label: "T'approcher sans bruit du camp", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { ep: ["perso", 400] }, to: "P_camp" }, lose: { to: "P_camp_vu" } },
    ] },
  P_camp: { act: "II", title: "Le camp de Gauvard", place: "vellane",
    text: [
      "Ils sont trois autour du feu. Gauvard parle, l'homme d'armes écoute en mangeant, et Thibaud, un peu à l'écart, tient les chevaux. Tu es assez près pour entendre.",
      "« Demain soir, dit Gauvard. On ouvre la grille, on prend la Pierre, et le ver est à nous. Qui tient la Pierre tient Ossaroth : c'est écrit dans tous les livres. » Il fait sauter une clé de fer noir dans sa main gantée, puis la raccroche à sa ceinture.",
      "Thibaud ne dit rien. Il regarde la montagne avec une peur qu'il ne cherche même plus à cacher.",
    ],
    choices: [
      { label: "Attendre qu'ils dorment, et prendre la clé", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { item: "clef_grille", flag: "monde:clef_grille", ep: ["seance", 1500] }, to: "P_camp_cle" }, lose: { to: "P_camp_vu" } },
      { label: "Parler à Thibaud, quand il ira chercher de l'eau", to: "P_thibaud", hide: { seen: "P_thibaud" } },
    ] },
  P_thibaud: { act: "II", title: "Thibaud", place: "vellane",
    text: [
      "Il descend au ruisseau avec deux gourdes, et tu l'attends derrière un rocher. Il sursaute, porte la main à son couteau, te reconnaît. « Le page de Vellane. » Il ne crie pas.",
      "« Ton maître a empoisonné le mien. »",
      "Thibaud s'assoit sur ses talons, comme si ses jambes ne le portaient plus. « Je sais. J'ai porté la fiole. Je ne savais pas, et puis je savais. » Il a seize ans, peut-être. « Si je l'abandonne, il me fera pendre. Si je reste, il réveille le ver. »",
    ],
    choices: [
      { label: "Lui dire qu'il a encore le choix, et qu'on se souviendra de celui qu'il fera", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { flag: "monde:thibaud", ep: ["seance", 1200] }, to: "P_thibaud_ok" }, lose: { to: "P_thibaud_ko" } },
    ] },
  P_thibaud_ok: { act: "II", title: "Un garçon qui choisit", place: "vellane",
    text: [
      "Il te regarde longtemps, ses gourdes à la main. « Demain soir, sous la montagne, dit-il enfin. Je ne lèverai pas l'épée contre vous. C'est tout ce que je peux. » Il remonte au camp sans se retourner.",
    ],
    choices: [{ label: "Retourner à ton rocher", to: "P_camp" }] },
  P_thibaud_ko: { act: "II", title: "Un garçon qui a peur", place: "vellane",
    text: [
      "Il secoue la tête, se relève, remplit ses gourdes. « Va-t'en, page. Je n'ai rien vu. » C'est déjà beaucoup.",
    ],
    choices: [{ label: "Retourner à ton rocher", to: "P_camp" }] },
  P_camp_cle: { act: "II", title: "La clé de fer noir", place: "vellane",
    text: [
      "Tu attends que le feu ne soit plus qu'une braise, que l'homme d'armes ronfle, que Gauvard se tourne sur le côté. Tu rampes. La ceinture est là, la clé est là, et tes doigts n'ont jamais été aussi lents ni aussi sûrs.",
      "Quand tu retrouves Brise-Vent, dans le noir, tu as la clé contre le ventre et le cœur dans la gorge. Tu pars vers la montagne au pas, sans allumer de torche.",
    ],
    choices: [{ label: "Monter au Mont-Veille avant eux", to: "P_pied", big: true }] },
  P_camp_vu: { act: "II", title: "Une branche qui craque", place: "vellane",
    combat: { title: "L'homme d'armes de Gauvard", enemies: ["homme_gauvard"], terrain: "nature",
      win: { fx: { ep: ["seance", 1200] }, to: "P_camp_fuite" }, lose: { fx: { pv: -2 }, to: "P_camp_fuite" },
      flee: { label: "Sauter sur Brise-Vent et filer", dom: "nature", diff: 0, to: "P_camp_fuite" } },
    text: [
      "Une branche craque sous ton pied. L'homme d'armes est debout avant que tu aies pu jurer, l'épée au clair, et il fonce sur toi pendant que Gauvard rit près du feu. « Un page ! Cousin Aubert m'envoie ses enfants. »",
    ] },
  P_camp_fuite: { act: "II", title: "Dans le noir", place: "vellane",
    text: [
      "Tu t'en sors, Brise-Vent t'en sort, et vous galopez dans le noir jusqu'à ce que le camp ne soit plus qu'un point rouge derrière vous. Tu n'as pas la clé. Mais tu sais où ils vont, et quand.",
    ],
    choices: [{ label: "Monter au Mont-Veille avant eux", to: "P_pied", big: true }] },

  // ---------------------------------------------------------------- act III · under the mountain
  P_pied: { act: "III", title: "Au pied du Mont-Veille", place: "montveille",
    fx: { ep: ["histoire", 5000] },
    text: [
      "Le Mont-Veille est une montagne ronde et nue, sans arbres, sans oiseaux, avec une seule entaille dans son flanc : la Gorge. Le soleil se couche. C'est le troisième soir.",
      "Et à l'entrée de la Gorge, sur une pierre, quelqu'un t'attend : {autre}.",
      "Vous vous regardez. Vous avez couru tous les deux toute la journée, chacun de son côté, et vous voilà au même endroit, à la même heure, parce qu'il n'y avait qu'un seul endroit et qu'une seule heure.",
      { if: { all: [{ has: "monde:amitie_dague" }, { has: "monde:amitie_ecu" }] }, text: "Vous n'avez pas besoin de vous dire grand-chose. La dague sur la paillasse, la sangle changée sans un mot : vous savez, l'un et l'autre, ce que l'autre a fait. Vous ne savez pas depuis quand vous le savez." },
      { if: { any: [{ has: "monde:rancune_dague" }, { has: "monde:rancune_ecu" }] }, text: "Il y a entre vous la dague, la sangle, les mots qu'on a portés à Dame Héloïse ou à Messire. Ça pèse, au pied de la montagne. Ça pèse plus lourd que tu ne pensais." },
      { if: { has: "monde:remede" }, text: "Le remède est parti vers Vellane. Messire vivra, si le fils du meunier court aussi vite qu'il le croit." },
      { if: { has: "monde:mot" }, text: "L'un de vous deux sait le mot de la Veille. Il vous le dit à voix basse, et vous comprenez tous les deux pourquoi Anselme disait : *à deux mains*." },
      { if: { has: "monde:clef_grille" }, text: "L'un de vous deux a pris la clé de la grille à la ceinture de Gauvard. Elle passe de main en main, froide et lourde." },
    ],
    choices: [
      { label: "Tendre la main", fx: { flag: "monde:amitie_main", ep: ["perso", 500] }, to: "P_main" },
      { label: "Lui dire, avant tout, ce que tu lui as fait", if: { any: [{ has: "monde:rancune_dague" }, { has: "monde:rancune_ecu" }] }, why: "Tu n'as rien à lui avouer.",
        fx: { flag: "monde:amitie_main", ep: ["perso", 800] }, to: "P_aveu" },
    ] },
  P_main: { act: "III", title: "Une main", place: "montveille",
    text: [
      "Tu tends la main. {autre} la regarde, puis la prend, et la serre un peu trop fort, comme on serre la main de quelqu'un qu'on a failli perdre. Ni l'un ni l'autre ne dit rien d'intelligent. Ce n'est pas le moment d'être intelligents.",
      "Derrière vous, sur le chemin des bergers, des chevaux.",
    ],
    choices: [{ label: "Entrer dans la Gorge", to: "P_grille" }] },
  P_aveu: { act: "III", title: "Ce qu'on a fait", place: "montveille",
    text: [
      "Tu le dis. La dague, ou la sangle, ou les deux. Tu le dis mal, trop vite, en regardant tes bottes. {autre} t'écoute jusqu'au bout, puis rit, un petit rire fatigué. « Moi aussi, j'ai des choses à te dire. Plus tard. On a une montagne. »",
      "Derrière vous, sur le chemin des bergers, des chevaux.",
    ],
    choices: [{ label: "Entrer dans la Gorge", to: "P_grille" }] },
  P_grille: { act: "III", title: "La grille", place: "montveille",
    text: [
      "Au fond de la Gorge, une grille de fer noir ferme une caverne. Elle est vieille de neuf cents ans et elle n'a pas une tache de rouille, ce qui n'est pas normal.",
      { if: { has: "monde:clef_grille" }, text: "La clé de Gauvard tourne dans la serrure comme dans du beurre." },
    ],
    choices: [
      { label: "Ouvrir avec la clé de Gauvard", if: { has: "monde:clef_grille" }, why: "Personne n'a pris la clé à Gauvard.", to: "P_caverne" },
      { label: "Forcer la serrure", hide: { has: "monde:clef_grille" }, test: { dom: "discretion", diff: -20, label: "Discrétion" },
        win: { to: "P_caverne" }, lose: { to: "P_grille_gauvard" } },
    ] },
  P_grille_gauvard: { act: "III", title: "Trop lents", place: "montveille",
    text: [
      "La serrure ne cède pas. Et Gauvard arrive, avec sa clé, son homme d'armes et son écuyer. Il ouvre la grille sous vos yeux, en souriant. « Merci de m'avoir attendu. » Il entre. Vous entrez derrière lui. Il n'a pas l'air de s'en soucier.",
    ],
    choices: [{ label: "Le suivre dans la caverne", fx: { flag: "gauvard_devant" }, to: "P_caverne" }] },
  P_caverne: { act: "III", title: "L'autel", place: "montveille",
    text: [
      "La caverne est immense, et chaude. Le sol est fait d'écailles. Il faut un moment pour le comprendre : vous marchez sur Ossaroth, sur un flanc qui se soulève et s'abaisse, très lentement, tous les cent pas de cœur.",
      "Au milieu, un autel de pierre, et sur l'autel une pierre ronde, grise, pas plus grosse qu'une tête d'enfant, qui luit faiblement. La Pierre-Veille.",
      { if: { has: "gauvard_devant" }, text: "Gauvard est déjà devant l'autel. Il tend les mains." },
      { if: { not: { has: "gauvard_devant" } }, text: "Vous arrivez les premiers. Mais derrière vous, des pas résonnent dans la Gorge, et une voix gaie qui dit : « Les enfants de mon cousin ! »" },
    ],
    choices: [
      { label: "Te mettre entre Gauvard et l'autel", to: "P_combat" },
    ] },
  P_combat: { act: "III", title: "Gauvard", place: "montveille",
    combat: { title: "Sire Gauvard de Morne", enemies: ["gauvard", "homme_gauvard"], terrain: "galerie",
      win: { fx: { ep: ["histoire", 3000] }, to: "P_pierre" }, lose: { to: "P_pierre_arrachee" },
      talk: { label: "Crier à Thibaud de choisir maintenant", diff: -10, win: { fx: { flag: "thibaud_choisit" }, to: "P_pierre" } } },
    text: [
      "Gauvard tire son épée. De la main gauche. « Écartez-vous. Je ne veux pas tuer d'enfants ce soir, ça porte malheur. »",
      { if: { has: "monde:thibaud" }, text: "Thibaud ne tire pas la sienne. Il recule contre la paroi, les mains ouvertes. Gauvard ne le regarde même pas." },
      { if: { not: { has: "monde:thibaud" } }, text: "Thibaud tire la sienne, et elle tremble." },
      "Vous vous mettez côte à côte, {autre} et toi, sans vous être concertés, comme Messire vous l'a appris à l'exercice cent fois, et que vous n'aviez jamais fait de bon cœur.",
    ] },
  P_pierre_arrachee: { act: "III", title: "La Pierre arrachée", place: "montveille",
    text: [
      "Gauvard vous écarte, et il arrache la Pierre de l'autel. Elle s'éteint dans ses mains. Sous vos pieds, le flanc d'Ossaroth cesse de se soulever. Puis il se soulève d'un coup, très haut, et toute la caverne gronde.",
      "Gauvard lève la Pierre. « Je te commande ! » Ossaroth ouvre un œil grand comme une porte, regarde la Pierre, regarde Gauvard, et Gauvard laisse tomber la Pierre, et s'enfuit en hurlant dans la Gorge. Il n'avait jamais eu besoin de personne.",
      "La Pierre roule jusqu'à vos pieds.",
    ],
    choices: [{ label: "La ramasser", to: "P_pierre" }] },
  P_pierre: { act: "III", title: "La Pierre-Veille", place: "montveille", charniere: true,
    text: [
      "Le ver remue. La caverne est pleine d'un souffle chaud qui sent la forge et le très vieux. Il n'y a plus que vous deux devant l'autel : {autre} et toi.",
      "*L'une la tient sur l'autel, l'autre dit le mot.*",
      { if: { has: "monde:mot" }, text: "Vous savez le mot, tous les deux, maintenant. Il ne reste qu'à savoir qui tient, et qui chante." },
      { if: { not: { has: "monde:mot" } }, text: "Personne ne vous a appris le mot. Mais sur l'autel, gravés tout autour, il y a des signes, et peut-être, en les lisant à voix haute…" },
    ],
    choices: [
      { label: "Tenir la Pierre sur l'autel, de toutes tes forces", role: "pierre", option: "tenir", fx: { flag: "monde:pierre_tenue", ep: ["histoire", 3000] }, to: "P_tenir", big: true },
      { label: "Dire le mot de la Veille", role: "pierre", option: "dire", if: { has: "monde:mot" }, why: "Tu ne sais pas le mot.", fx: { flag: "monde:mot_dit", ep: ["histoire", 3000] }, to: "P_dire", big: true },
      { label: "Lire les signes de l'autel à voix haute", role: "pierre", option: "dire", hide: { has: "monde:mot" }, test: { dom: "savoir", diff: -10, label: "Savoir" },
        win: { fx: { flag: "monde:mot_dit", ep: ["histoire", 3000] }, to: "P_dire" }, lose: { fx: { flag: "monde:mot_dit", pv: -4 }, to: "P_dire_mal" }, big: true },
    ] },
  P_tenir: { act: "III", title: "Tenir", place: "montveille",
    text: [
      "Tu poses la Pierre dans son creux, et tu appuies. Elle ne veut pas rester : elle pousse contre tes paumes comme une bête qui veut sortir, elle brûle, elle gèle, elle pèse le poids d'une montagne. Tu tiens. Tu tiens parce que derrière toi, tu entends {autre} commencer à chanter.",
    ],
    choices: [{ label: "Tenir jusqu'au bout", to: "P_aube" }] },
  P_dire: { act: "III", title: "Dire", place: "montveille",
    text: [
      "Tu chantes. Ta voix est trop petite pour la caverne, elle tremble, elle se casse au milieu, et tu reprends. Devant toi, {autre} tient la Pierre sur l'autel, les bras tendus, la tête baissée, et tu vois ses épaules trembler. Tu chantes pour ses épaules.",
    ],
    choices: [{ label: "Chanter jusqu'au bout", to: "P_aube" }] },
  P_dire_mal: { act: "III", title: "Les signes", place: "montveille",
    text: [
      "Tu lis les signes, mal, en trébuchant sur des sons qui n'existent plus. Le ver gronde, la caverne crache des pierres, l'une t'atteint à l'épaule. Tu recommences. À la troisième fois, quelque chose dans ta voix trouve le bon chemin, et la Pierre se met à luire.",
    ],
    choices: [{ label: "Chanter jusqu'au bout", to: "P_aube" }] },

  P_aube: { act: "III", title: "L'aube sur Vellane", place: "montveille", end: true,
    text: [
      "Ossaroth soupire, un soupir qui dure une minute et fait trembler le comté jusqu'à la mer, et il se rendort. Il dormira encore neuf cents ans, peut-être. La Pierre luit doucement sur son autel.",
      { if: { all: [{ has: "monde:pierre_tenue" }, { has: "monde:mot_dit" }] }, text: "Vous sortez de la Gorge à l'aube, {autre} et toi, l'un soutenant l'autre, sans savoir lequel soutient lequel." },
      { if: { not: { all: [{ has: "monde:pierre_tenue" }, { has: "monde:mot_dit" }] } }, text: "Au bord de l'autel, tu attends {autre}. Il faut être deux. Tu ne peux rien faire seul." },
      { if: { has: "thibaud_choisit" }, text: "Thibaud a lâché son épée au milieu du combat. Il sort avec vous." },
      { if: { has: "monde:thibaud" }, text: "Thibaud vous attend dehors avec les chevaux. Il n'a pas levé l'épée. Il ira témoigner contre son maître devant le comte, dit-il, et tant pis pour la corde." },
      { if: { has: "monde:remede" }, text: "À Vellane, Messire Aubert est assis dans son lit, gris encore, furieux d'être assis dans son lit. Il boite un peu plus. Il boitait déjà." },
      { if: { not: { has: "monde:remede" } }, text: "À Vellane, Messire Aubert a passé la nuit entre deux mondes, et il en est revenu, à force de mauvais caractère, dit Dame Héloïse. Il a vieilli de dix ans en trois jours." },
      { if: { any: [{ has: "monde:amitie_dague" }, { has: "monde:amitie_ecu" }] }, text: "À la Saint-Michel, Messire Aubert fait venir ses deux pages dans la grande salle. Il dit qu'il n'a jamais su compter, et qu'il aura deux écuyers. Dame Héloïse lève les yeux au ciel et ajoute une ligne à ses comptes." },
      { if: { not: { any: [{ has: "monde:amitie_dague" }, { has: "monde:amitie_ecu" }] } }, text: "À la Saint-Michel, Messire Aubert fait venir ses deux pages dans la grande salle. Il vous regarde longtemps. « Je voulais un écuyer. Il m'en faut deux, et qui se parlent. Vous avez un an pour apprendre. » Vous vous regardez. Un an, c'est long. Ce n'est pas si long." },
    ],
    choices: [] },
};
