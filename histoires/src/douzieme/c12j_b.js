// Le Douzième Coup · chapter 12, the one who passes, second half (act IV, 20 June 541, from dusk to midnight).
// Hub `K12j_brune` : the court after the session. The cabinet of the Grand Maître : the warning carried from 601
// (`j:coudrier_averti`, with `monde:su:arret`), the fortieth chapter, which is said and never copied
// (`j:sait_quarantieme` : the Twelfth sounds in the hour of whoever names it), and what it means for the other
// (secret `j_efface`, needs `j:coudrier_sait`, which can still be told here). Around : Aymon and his post for the
// 21st (`j:aymon_escalier` | `monde:aymon_sourds`), Cliquet breaking his files (item `chasse_bronze`,
// `j:sait_chasser`), Tiphaine (`j:tiphaine_droit`), the butterfly door and the Queen's page (`j:vu_refus_reine`),
// the sous-maître and his tenth (`j:aubespin_soir`), Ansel at the pump (`j:ansel_parle`, `monde:ansel_travers` |
// `monde:hurel_debout`). Then four green ribbons at the postern : followed (`j:sait_cachot`), fought
// (`j:rubans_poterne`, item `ordre_arret` → `j:preuve_oderic`), the chain of the Grand Maître (item
// `chaine_maitre`). Down to the port by night, the cellar window on the old millrace (`j:vu_soupirail`,
// `j:plan_cave`), and midnight at the dial of the quay (B12).
var P = {};
var JOSQ = { present: "josquin" };
var PERRINE = { present: "perrine" };
var ARRET = { has: "j:arret_vu" };
var CABINET = { seen: "K12j_quarantieme" };
var D_OK = { all: [{ has: "j:seance_dixieme" }, { not: { has: "j:aubespin_trahi" } }] };

Object.assign(P, {
  K12j_tantot: { act: "IV", title: "La brune", place: "guilde", ambiance: "chateau",
    text: [
      "Tu refermes le Cahier. Le marbre du cadran est tiède encore ; l'ombre du style s'y est perdue. Le soir monte de la ville avec une odeur de friture et de bois scié : en bas, on dresse la fête.",
      "On a tiré le verrou du dortoir. Les apprentis descendent par petits groupes, sans courir, et parlent bas. Quelqu'un a raconté la séance par une lucarne ; elle a déjà fait trois fois le tour de la cour, et le fauteuil y tombe chaque fois de plus haut.",
      { after: "j:vote_rejete", text: "Ils disent : *refusé.* Ils le disent comme on dit le nom d'un mort qu'on n'attendait pas. Puis ils regardent la porte au papillon, où neuf lampes viennent de s'allumer, et ils se taisent." },
      { after: "j:vote_adopte", text: "Ils disent : *permis.* Ceux du jeune se tapent sur l'épaule, sans bruit. Ceux du vieux regardent la fenêtre du logis du nord, où il n'y a pas de lumière." },
    ],
    choices: [{ label: "Te lever", to: "K12j_brune", big: true }] },

  K12j_brune: { act: "IV", title: "La cour, entre chien et loup", backName: "la cour, à la brune", place: "guilde", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "La cour a l'heure grise où l'on ne distingue plus un fil blanc d'un fil noir. Les quatre hommes de cuivre ont pris leur ronde de nuit ; leurs lanternes font, sur les dalles, quatre ronds qui se croisent au cadran." },
      { first: true, text: "Au logis du nord, la fenêtre est noire. À la porte au papillon, neuf lampes à boule d'eau. Au réfectoire, on soupe, et l'on entend moins de cuillers que d'habitude." },
      { again: true, before: "j:arret_vu", text: "La cour, ses quatre lanternes qui tournent. La fenêtre du nord est noire." },
      { again: true, after: "j:arret_vu", text: "La cour, ses quatre lanternes. Le logis du nord a sa porte fermée sur un cabinet vide. À la poterne, le père Loquet est resté debout, sa baguette à la main, sans savoir contre qui." },
      { first: true, after: "j:aubespin_trahi", text: "Monsieur Fourchon traverse deux fois, sans motif, en regardant de ton côté. On te cherche avec politesse." },
    ],
    choices: [
      { label: "Le logis du nord : il a dit « à la brune »", hide: { any: [CABINET, ARRET] }, to: "K12j_cabinet", big: true },
      { label: "Le réfectoire : Aymon t'a gardé le bout du banc", hide: { any: [{ not: { has: "j:aymon_cire" } }, { seen: "K12j_aymon_ou" }] }, to: "K12j_aymon_ou" },
      { label: "L'atelier de maître Cliquet, d'où vient un bruit de casse", hide: { any: [{ not: { has: "j:voix_cliquet" } }, { seen: "K12j_cliquet_soir" }] }, to: "K12j_cliquet_soir" },
      { label: "Tiphaine, assise sur la margelle du puits", hide: { any: [{ not: { has: "j:tiphaine_guilde" } }, { seen: "K12j_tiphaine_soir" }] }, to: "K12j_tiphaine_soir" },
      { label: "La porte au papillon, de loin", hide: { any: [D_OK, { seen: "K12j_papillon_soir" }] }, to: "K12j_papillon_soir" },
      { label: "La porte au papillon : il t'a fait demander", hide: { any: [{ not: D_OK }, { seen: "K12j_aubespin_soir" }] }, to: "K12j_aubespin_soir" },
      { label: "La pompe, où le plus petit des neuf se lave les mains", hide: { any: [{ not: { any: [{ item: "lettre_ansel" }, { has: "monde:su:ansel" }] } }, { seen: "K12j_ansel" }] }, to: "K12j_ansel" },
      { label: "La poterne : le père Loquet arrive en courant", hide: { any: [{ not: CABINET }, ARRET] }, to: "K12j_arret", big: true },
      { label: "Descendre en ville, sur leurs pas", hide: { not: ARRET }, to: "K12j_descente", big: true },
    ] },

  K12j_cabinet: { act: "IV", title: "En colère tout seul", place: "guilde", ambiance: "chateau",
    text: [
      "Douze petits cliquets, de l'autre côté du bois. La porte s'ouvre sur son dos. Il n'a pas allumé. Il est debout à la fenêtre, et la Tour, à vingt toises, lui fait un mur de nuit.",
      { after: "j:vote_rejete", text: "« Nous avons gagné. » Il le dit sans se retourner, du ton dont on annonce une gelée. « J'ai eu ma voix pendant quarante ans, et il a fallu qu'on m'en apporte trois des champs. Quatre cents ans de Guilde ont dit non ce soir, et il descendra demain avec un papier vert. J'ai gagné le droit d'avoir eu raison. Cela se mange froid. »" },
      { after: "j:vote_adopte", text: "« Nous avons perdu. » Il le dit sans se retourner, du ton dont on annonce une gelée. « Je le savais lundi. Je l'ai su de nouveau tantôt, voix par voix, et cela fait le même mal la seconde fois. Six hommes que j'ai connus apprentis. J'ai corrigé leurs premières limes. »" },
      "Il se retourne enfin. Dans le peu de jour, sa figure a perdu ses ais ; c'est celle d'un vieil homme fatigué, qui a de très grosses mains et ne sait où les mettre.",
      { after: "j:aubespin_trahi", text: "« Vous lui avez mis sa cale sous le nez, devant six témoins. J'ai soixante-dix ans, et je n'aurais pas osé. » Quelque chose remue au coin de sa bouche. « Il ne vous le pardonnera pas : il pardonne tout, sauf d'avoir été surpris. Restez ici jusqu'à ce que la cour soit noire. »" },
      { with: "josquin", text: "Josquin s'est mis contre le mur, à sa place. Son maître pousse vers lui, du coude, sans le regarder, l'assiette où il reste du pain. Puis il se ravise, et la lui tend. C'est la première fois." },
      "« Asseyez-vous. Sur le lit : je n'ai qu'une chaise, et je la garde. J'ai une chose à vous dire, qui ne s'écrit pas, et j'ai peu de soir devant moi. »",
    ],
    choices: [
      { label: "« Vous en avez moins que vous ne croyez. On vient vous prendre cette nuit. »", hide: { not: { has: "monde:su:arret" } }, fx: { flag: "j:coudrier_averti", ep: ["histoire", 600] }, to: "K12j_averti" },
      { label: "T'asseoir sur le lit de sangle", to: "K12j_quarantieme", big: true },
    ] },

  K12j_averti: { act: "IV", title: "Soixante ans de sieste", place: "guilde", ambiance: "chateau",
    text: [
      "Tu lui dis ce qu'on t'a écrit en bâtons, de la cour même où il regarde : quatre rubans verts, après la séance, par la poterne, avec un papier qui a plus de cire que d'écriture.",
      "« Qui vous l'a dit ? »",
      "« Votre portier. Il le racontera dans soixante ans à quelqu'un qui l'éveillera d'une pincée. Pour lui, ce sera demain matin. »",
      "Le vieillard reste un moment immobile. Puis il rit : un rire bref, rouillé, qui lui secoue les épaules. « Loquet ! Soixante ans sur son tabouret, et la première chose qu'il fait en ouvrant l'œil, c'est de moucharder. Je lui avais défendu de dire qu'il m'avait vu. » Il s'arrête. « Je le lui *défendrai*, donc. Demain. Il m'aura vu rentrer. »",
      "Il a compris avant toi. Tu lui donnes le reste : le vingt et un, à la pointe du jour, à sa porte, sans chaîne, sans chapeau, de la toile d'araignée plein le dos.",
      "« De la toile d'araignée. » Il compte sur ses doigts énormes. « Le duc n'a qu'un trou sûr dans cette ville : les caves de son hôtel, au quai des Barges. Elles donnent sur l'ancien bief, qu'on a muré du temps de mon grand-père, et mal. On me sort donc par là. » Il te regarde. « Et celui qui écrit suppose que c'est vous. Je le suppose aussi : je ne vois personne d'autre qui soit assez mal élevé. »",
      "Il ôte sa chaîne de Grand Maître, par-dessus sa tête, et la pose sur la table. « *Sans chaîne.* Autant que ce soit moi qui l'aie ôtée. Je n'aime pas qu'on me dépouille : j'aime mieux arriver nu. »",
    ],
    choices: [{ label: "T'asseoir sur le lit de sangle", to: "K12j_quarantieme", big: true }] },

  K12j_quarantieme: { act: "IV", title: "Le quarantième", place: "guilde", ambiance: "chateau", fx: { flag: "j:sait_quarantieme", ep: ["histoire", 1000] },
    text: [
      "Il va au coffre, l'ouvre, et le laisse ouvert. Dedans, une houppelande, trois chemises, un rasoir, un paquet de lettres.",
      "« Je vous ai dit hier qu'il y avait là ce que les Grands Maîtres se passent de la main à la main. Vous voyez : il n'y a rien. C'est cela qu'on se passe. Une phrase. » Il referme le coffre du pied. « Le Livre a quarante chapitres. Le quarantième est une page blanche. Les copistes la copient, les sots la sautent, les savants y cherchent une encre qui paraîtrait au feu. Il n'y a pas d'encre. Les Fondateurs n'ont pas voulu qu'on pût le lire. On le dit une fois, à son successeur, la porte fermée. »",
      "« Je devais le dire à Josquin dans dix ans, quand il aurait trouvé ma serrure. Je vous le dis ce soir, parce que demain il n'y aura plus de *dans dix ans.* »",
      { with: "josquin", text: "Il regarde Josquin, contre le mur. « Reste. Tu l'entendras de biais, ce qui est contre l'usage. L'usage est mort à none, dans la grande salle. »" },
      "Il se penche. Il sent le suif et le drap. Sa voix est descendue plus bas que tu ne l'as jamais entendue.",
      "« *La Douzième sonne dans l'heure de qui la nomme. C'est pourquoi on ne la nomme pas.* »",
      "Il se redresse. « Voilà. Quatre cents ans de secret, et cela tient en deux lignes. Écoutez ce que cela veut dire, à présent, parce que personne ne me l'a expliqué, à moi, et que j'ai mis trente ans. »",
      "« Un coup qu'on a tenu, et qu'on rend, il faut qu'il tombe quelque part. Il a deux heures où tomber : celle où on l'a pris, et celle où on le lâche. En 481, c'était la même, à trois psaumes près, et la question ne se posait pas. Si l'on tient plus longtemps, les deux heures s'écartent. Alors le coup hésite. Il tombe du côté de la voix qui l'appelle. Celui des deux qui dit *douze*, à haute voix, pendant que la barre remonte, l'aura chez lui. »",
      { after: "monde:su:deux", text: "*Un en haut, à la corde. Un en bas, au levier.* Tu l'as lu en bâtons, il y a des jours. Tu ne savais pas qu'il resterait un mot à dire, ni que ce mot choisirait." },
    ],
    choices: [
      { label: "« Et si celui d'en haut et celui d'en bas ne sont pas de la même année ? »", hide: { not: { has: "j:coudrier_sait" } }, fx: { secret: "j_efface", ep: ["perso", 1000] }, to: "K12j_efface", big: true },
      { label: "Lui dire d'où tu viens, et de quand", hide: { has: "j:coudrier_sait" }, fx: { flag: ["j:coudrier_sait", "monde:coudrier_sait"], ep: ["perso", 600] }, to: "K12j_verite_tard", big: true },
      { label: "Garder la phrase, et te lever", hide: { has: "j:coudrier_sait" }, to: "K12j_brune" },
    ] },

  K12j_verite_tard: { act: "IV", title: "De quand", place: "guilde", ambiance: "chateau",
    text: [
      "Tu le dis. Tu prends la manière la plus courte : que tu es né{e} après. Que dans ton pays la cloche a sonné onze, un jour de Grand Midi, et que le douzième n'est pas venu. Que la ville est prise depuis soixante ans, et que cela gagne. Que tu es revenu{e} par une porte, et que quelqu'un marche vers cette Tour, de l'autre côté, avec un Cahier pareil au tien.",
      "Il t'écoute comme il lit, sans rien passer. Il ne dit pas que c'est impossible : il garde depuis quarante ans, sous une tour, une chose qu'il ne comprend pas.",
      "« Onze. » Il le répète. « Donc je descends demain, et je n'y arrive pas. Je me bats avec lui au levier, et la barre se coince à fond. » Il regarde ses mains. « C'est moi qui la coince. En voulant la lui ôter. Et l'on m'en tient compte, chez vous, je suppose. »",
      "Tu dis le mot de la Chronique. Il hoche la tête. « *Le Maudit.* Les ducs ont de bons greffiers. » Il se rassoit, lourdement. « Je descendrai quand même. Un homme qui sait par où il échoue a une chance de plus que les autres. Mais vous venez de changer ma phrase, vous. Je vous l'ai dite pour rien, à l'instant, comme on récite. Elle est pour vous. Elle a été écrite pour vous il y a quatre cents ans. »",
    ],
    choices: [{ label: "« Dites ce qu'elle veut dire, pour nous deux. »", fx: { secret: "j_efface", ep: ["perso", 1000] }, to: "K12j_efface", big: true }] },

  K12j_efface: { act: "IV", title: "Dans l'heure de qui la nomme", place: "guilde", ambiance: "chateau",
    text: [
      "Il met longtemps à répondre. Dehors, un homme de cuivre passe sous la fenêtre, et sa lanterne fait glisser au plafond un rond gris.",
      "« Vous êtes deux. L'un ici, l'autre dans soixante ans. C'est ce qu'il fallait, et c'est ce que je n'avais pas. » Il parle lentement, comme on pose des poids. « Demain, si je manque mon affaire, la cloche s'arrête à onze. Un jour, vous deux, vous rendrez le coup : l'un à la corde, l'autre au levier. La barre remontera. Et il faudra que quelqu'un dise *douze.* »",
      { after: "monde:su:lesquelles", text: "« Celui d'en haut doit être resté sous la cloche. Je l'ai écrit dans ma marge : *qui consent à cela ?* » Il te regarde. Tu ne baisses pas les yeux. Il hoche la tête, une fois. « Bien. J'ai ma réponse. Je ne vous en remercie pas : on ne remercie pas de cela. »" },
      "« Si c'est vous qui le dites, là-haut, le coup tombe ici. Le vingt et un juin 541, à midi. La ville dîne, la Reine redescend, et il n'y a jamais eu soixante ans. Ni votre pays pris. Ni votre vieille horlogère qui vous a attendu{e}. Ni la personne qui vous écrit. » Sa voix est très douce. « Elle est née de ces soixante ans-là. D'un père et d'une mère qui se sont trouvés dans un pays que le coup avait fait. Rendez le coup à mon heure, et ce pays n'a pas eu lieu. Il naîtra d'autres enfants, à d'autres gens. Ce ne sera pas {autre:lui}. »",
      "« Si c'est {autre:lui} qui le dit, en bas, le coup tombe chez {autre:lui}. Quarante mille personnes s'éveillent soixante ans trop tard, dans un royaume où tout ce qu'elles aimaient hors des murs est mort ou vieux. La petite princesse s'éveille avec sa maladie. Et vous, vous vous éveillez sous une cloche, dans son année, avec tout cela sur les bras. »",
      "Il ouvre ses deux mains, vides, sur ses genoux. « Je ne vous dis pas lequel. Un Grand Maître dit le chapitre. Il ne dit pas ce qu'il faut en faire : c'est pour cela qu'on l'a laissé blanc. »",
      "Tu penses à une écriture en bâtons, serrée, de travers, qui t'a écrit *JE DORS DANS TON LIT.* Tu penses à ce qu'il faudrait mettre dans le Cahier, ce soir, pour que ce soit dit. Et tu penses que rien ne t'y oblige.",
      { with: "josquin", text: "Josquin a écouté jusqu'au bout. Il a les yeux pleins d'eau et il ne les essuie pas. « Maître. Et si personne ne le dit ? » Le vieillard le regarde longtemps. « Alors c'est la troisième réponse, mon garçon. Je ne te l'ai pas apprise. Je ne suis pas sûr qu'elle existe. »" },
    ],
    choices: [{ label: "Te lever du lit de sangle", to: "K12j_brune", big: true }] },

  K12j_aymon_ou: { act: "IV", title: "Où il faudra que je sois", place: "guilde", ambiance: "chateau",
    text: [
      "Aymon a rangé ses miettes en un seul tas, et il a mis dessus, pour qu'on ne s'y trompe pas, une croûte debout.",
      { after: "j:vote_rejete", text: "« Mon oncle a levé la main contre. Il est rentré se coucher avec la fièvre. Il dit qu'il a compté trois fois, que le nombre était de ce côté-là, et qu'il ne comprend pas ce qui lui arrive. » Il a son demi-sourire mince. « Il lui arrive d'avoir eu raison. Chez nous, cela se soigne au tilleul. »" },
      { after: "j:vote_adopte", text: "« Mon oncle a levé la main pour. Il a repris deux fois du bouilli. » Il regarde la croûte. « Demain, à midi passé d'un saut d'aiguille, il aura la bouche ouverte au milieu du plus grand nombre qu'il ait jamais rejoint. »" },
      "Il baisse la voix. « J'ai ma cire. Deux noisettes, pétries d'hier, dans un cornet. Vous deviez me dire où. »",
    ],
    choices: [
      { label: "« Au pied de la Tour, à la porte de fer. Il y descendra un vieil homme seul. »", fx: { flag: "j:aymon_escalier", ep: ["perso", 400] }, to: "K12j_aymon_fin" },
      { label: "« Dans le bas quartier. Ruelle du Lavoir, rue de la Poulie. De porte en porte, avec ta cire. »", fx: { flag: ["j:aymon_bas", "monde:aymon_sourds"], ep: ["perso", 400] }, to: "K12j_aymon_fin" },
    ] },

  K12j_aymon_fin: { act: "IV", title: "Du petit côté", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:aymon_escalier", text: "« La porte de fer. » Il réfléchit, en Foliot, c'est-à-dire qu'il fait le compte de ceux qui y seront. « Le sous-maître et ses neuf, avec de la cire. Le Grand Maître, sans. Des archers, peut-être. Et moi. » Il range son couteau. « Je ne sais pas me battre. Je sais tenir une porte ouverte et dire à quelqu'un par où l'on sort. Si c'est de cela qu'un vieil homme a besoin, il l'aura. »" },
      { after: "j:aymon_bas", text: "« Le bas quartier. » Il réfléchit, en Foliot, c'est-à-dire qu'il fait le compte. « Deux noisettes par tête. J'ai de quoi pour moi. Il m'en faut pour deux rues. » Il regarde la table des neuf, vide, la chandelle soufflée. « Le cirier de la rue Droite ferme à couvre-feu. Mon oncle a un compte chez lui. Il ne lira la note qu'à la Saint-Michel, s'il la lit. »" },
      "Il se lève, et te tend la main, par-dessus la table, devant vingt apprentis qui s'arrêtent de manger. Un Foliot qui prend parti en public, on n'avait pas vu cela depuis Évrard.",
    ],
    choices: [{ back: "K12j_brune" }] },

  K12j_cliquet_soir: { act: "IV", title: "Un bruit de casse", place: "guilde", ambiance: "chateau", fx: { item: "chasse_bronze", flag: "j:sait_chasser", ep: ["histoire", 500] },
    text: [
      "Maître Cliquet casse ses limes. Il les prend une à une au râtelier, les couche sur le bord de l'étau, et frappe. L'acier trempé se rompt net, avec un bruit de verre. Il en a une vingtaine à ses pieds.",
      "« Celles qui ont touché la pièce. » Il ne se retourne pas. « Je ne veux plus m'en servir. C'est bête : l'acier n'y est pour rien. C'est moi, qu'il faudrait casser. »",
      "Il s'essuie le front de l'avant-bras. Il a vingt-six ans, une chaîne de Juré, et la figure d'un garçon qui a découvert le même jour que son maître mentait et que lui-même savait compter.",
      "« Elle est livrée. Je la lui ai portée hier soir, dans son velours. Je ne peux pas la reprendre. Mais je sais comment elle tient, puisque je l'ai faite. » Il ouvre un tiroir, et te met dans la main une tige de bronze, grosse comme le petit doigt, longue d'un empan, plate à un bout. « Un chasse. Il a le profil de la rainure, à un cheveu. On le présente par-dessous, du côté du petit bout, et l'on frappe une fois, sec, vers le haut. Le coin saute. Il faut un maillet, un bras, et savoir de quel côté est le petit bout dans le noir : à gauche du levier, en regardant le puits. »",
      "« Donnez-le à celui qui descendra. » Il reprend une lime. « Moi, je n'ai pas le droit de descendre. Je n'ai que celui d'avoir voté. »",
    ],
    choices: [{ back: "K12j_brune" }] },

  K12j_tiphaine_soir: { act: "IV", title: "Sur la margelle", place: "guilde", ambiance: "chateau", fx: { flag: "j:tiphaine_droit", ep: ["perso", 400] },
    text: [
      "Elle a gardé la robe noire et rabattu le capuchon. Elle est assise sur la margelle du puits, les mains ouvertes sur les genoux, et elle regarde ses doigts comme si on venait de les lui rendre.",
      "« J'ai récité devant sept hommes. » Elle parle bas. « À l'abbaye, on m'avait appris à lire pour le réfectoire, la tête baissée, sans y mettre la voix. J'y ai mis la voix. Le vieux m'a dit après : *vous lisez comme on lime, mademoiselle, on voit que vous ôtez ce qui dépasse.* C'est le seul compliment qu'on m'ait jamais fait, et il l'a fait fâché. »",
      "Elle lève la tête vers la Tour. « J'ai dit trois chapitres. Il y en a un que personne ne m'a demandé, le trente-neuvième. *Du Rendre.* Il dit qu'il faut être deux, et qui s'entendent sans se voir. » Ses yeux noisette reviennent sur toi. « J'ai compris cela à l'abbaye. Je n'avais pas compris par où celui d'en bas arrive, si la porte de fer est gardée. Maître Gobin me l'a dit hier, en taillant un pignon : il y a un boyau, depuis une vieille église. Le Droit. On l'a condamné du temps de l'autre Foliot. La clef de sa grille est au Trésor, sur un crochet à part. »",
      { after: "j:sait_dessous", text: "Tu connais le commencement de ce boyau. Tu sais ce qu'on y entend : un pas, un seul, très lourd, et puis rien, le temps de compter quatre." },
      "« Je ne sais pas à quoi cela vous servira. Je vous le dis parce que je sais des choses par cœur, et que je viens d'apprendre ce soir qu'il vaut mieux les dire. »",
    ],
    choices: [{ back: "K12j_brune" }] },

  K12j_papillon_soir: { act: "IV", title: "Neuf lampes", place: "guilde", ambiance: "chateau",
    text: [
      "Tu te tiens sous l'arcade d'en face. Par les hautes fenêtres, on voit les neuf établis, les neuf boules d'eau, et les neuf garçons debout, en rang, devant un dixième personnage en gris qui passe de l'un à l'autre.",
      "Il leur met la cire. Il le fait lui-même : une noisette, pétrie entre deux doigts, poussée du pouce dans l'oreille, et le bandeau noué par-dessus. Il a pour chacun un geste de la main sur l'épaule, bref, exact. Le plus petit a les yeux rouges. Il lui relève le menton d'un doigt.",
      { after: "monde:reine_renonce", text: "Un page aux couleurs de la Reine traverse la cour entre deux hommes de cuivre, un pli à la main, et soulève le papillon de bronze. On lui ouvre. Par la fenêtre, tu vois l'homme en gris rompre une cire verte, lire, et replier la feuille en quatre, soigneusement, comme on range un outil. Il dit un mot au page. Le page ressort plus vite qu'il n'est entré." },
      { after: "monde:reine_renonce", text: "Puis il retourne au plus petit de ses garçons, et il finit de lui nouer son bandeau." },
      "Monsieur Fourchon tire les rideaux, un par un.",
    ],
    choices: [{ label: "Quitter l'arcade", fx: { flag: "j:vu_refus_reine" }, hide: { not: { has: "monde:reine_renonce" } }, to: "K12j_brune" }, { label: "Quitter l'arcade", hide: { has: "monde:reine_renonce" }, to: "K12j_brune" }] },

  K12j_aubespin_soir: { act: "IV", title: "Des mains reposées", place: "guilde", ambiance: "chateau", fx: { flag: "j:aubespin_soir", ep: ["histoire", 600] },
    text: [
      "On te fait traverser l'atelier. Les neuf sont debout, en rang, un bandeau neuf sur les oreilles. Le plus petit a les yeux rouges. Personne ne tourne la tête : ils ne t'ont pas entendu{e} entrer, et ils ne t'entendront plus.",
      "Dans la pièce blanche, la rose a repris sa place, avec deux pétales de moins. Il est assis au bord du marbre, un pli ouvert sur le genou.",
      { after: "monde:reine_renonce", text: "« Lisez. Vous êtes de la maison. » C'est une grande écriture droite, sous une petite cire verte. *Monsieur Aubespin, je renonce à la chambre. Je monterai demain à la Tour pour y entendre midi, et rien d'autre. Vous n'y toucherez à rien. Mahaut.*" },
      { after: "monde:reine_renonce", text: "Il reprend la feuille, la plie en quatre. « Sa Majesté a peur. C'est d'une mère, et cela l'honore. » Sa voix n'a pas changé d'un quart de ton. « On ne consulte pas une mère qui a peur. On sauve l'enfant, et la mère remercie après, quand elle a fini de pleurer. J'ai sa commission du douze. Elle ne l'a pas reprise : elle a écrit une lettre. Ce n'est pas la même cire. »" },
      { if: { not: { has: "monde:reine_renonce" } }, text: "« Un mot du Palais, pour me dire que l'on comptait sur moi. On compte beaucoup sur moi, depuis Pâques. » Il replie la feuille." },
      { after: "j:vote_rejete", text: "« Vous avez vu ces messieurs. Ils m'ont refusé une permission dont je n'avais pas besoin, et ils iront se coucher contents d'eux. Demain, à midi et un saut d'aiguille, ils auront la bouche ouverte, et le vote sera la dernière chose qu'ils auront faite. Je trouve cela convenable. »" },
      "Il te regarde, de l'œil gris, puis de l'œil brun. « Demain, onze heures, ici. Vous porterez l'étui plat, et un maillet de buis que portera d'abord le petit Ansel : je veux deux mains pour une chose aussi simple, au cas où l'une tremblerait. Vous aurez de la cire. Vous ne dînerez pas : on a la main plus sûre à jeun. »",
      "Il ajoute, comme tu atteins la porte : « Le vieux descendra, vous savez. Il l'a crié à toute la table. J'ai fait le nécessaire pour qu'il passe la nuit ailleurs, et la matinée. Je ne lui veux aucun mal. Je veux seulement qu'il ne se pende pas à mon levier. »",
    ],
    choices: [{ back: "K12j_brune" }] },

  K12j_ansel: { act: "IV", title: "À la pompe", place: "guilde", ambiance: "chateau", fx: { flag: "j:ansel_parle", ep: ["perso", 600] },
    text: [
      "Il se lave les mains à la pompe, longtemps, comme on se lave quand on voudrait ôter autre chose. Il a treize ans, les oreilles bandées de drap, des poignets d'enfant, et dans sa poche de tablier la bosse ronde d'une montre.",
      "Il ne t'a pas entendu{e}. Tu te mets devant lui, dans le rond d'une lanterne de cuivre qui passe, pour qu'il voie tes mains.",
      { if: { item: "lettre_ansel" }, text: "Tu lui tends la feuille. Elle est jaune, cassante aux plis, et elle sent la terre. Il la prend sans comprendre. Il lit l'adresse. *À ma mère, la veuve Hurel, rue de la Poulie.* Il lit le reste. Ses lèvres remuent." },
      { if: { item: "lettre_ansel" }, text: "Il reconnaît son écriture. Il reconnaît ses *g*. Il lève sur toi des yeux où il n'y a plus que de l'épouvante, et il fait non de la tête, plusieurs fois, en montrant son front : cette lettre, il ne l'a pas écrite. Il la pensait. Il comptait l'écrire cette nuit." },
      { if: { not: { item: "lettre_ansel" } }, text: "Tu prends ton charbon, et tu écris sur la pierre de la pompe, en grosses lettres : *RUE DE LA POULIE. LA VEUVE HUREL. TU AS VU L'EAU DEBOUT.* Il lit. Il recule d'un pas. Personne ne sait cela. Il ne l'a dit à personne : il n'y a pas de signe pour le dire." },
      "Tu écris encore, dessous : *DEMAIN ELLE RESTE DEBOUT. SOIXANTE ANS.* Il regarde les mots. Puis il regarde ses mains mouillées, celles qui porteront le maillet. Il a très bien compris. Il comprend depuis l'essai, et on lui a donné une montre pour qu'il cesse.",
      "Il te prend le charbon. Il écrit, d'une main qui tremble : *Je ne peux pas dire non. Il me regarde.*",
    ],
    choices: [
      { label: "Écrire : *FRAPPE DE TRAVERS. QU'IL TIENNE MAL.*", fx: { flag: ["j:ansel_travers", "monde:ansel_travers"], ep: ["histoire", 600] }, to: "K12j_ansel_fin", big: true },
      { label: "Écrire : *ALORS PORTE-LUI TA LETTRE CE SOIR. ET DE LA CIRE.*", fx: { flag: ["j:ansel_mere", "monde:hurel_debout"], ep: ["perso", 600] }, to: "K12j_ansel_fin", big: true },
    ] },

  K12j_ansel_fin: { act: "IV", title: "Il me regarde", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:ansel_travers", text: "Il lit. Il réfléchit, en ouvrier : tu vois ses doigts chercher l'angle, dans le vide, sur un coin qui n'est pas là. Un coup donné d'un quart de travers, et le bronze porte sur une arête au lieu de porter à plat. Il tient, mais il tient mal, et il suffit alors de peu pour le rendre." },
      { after: "j:ansel_travers", text: "Il hoche la tête, une fois. Il écrit : *Il verra.* Puis, dessous, plus petit : *Il ne verra pas. Il aura les deux mains au levier.* Il efface tout, de la paume, soigneusement, jusqu'à ce que la pierre soit propre." },
      { after: "j:ansel_mere", text: "Il lit. Il regarde vers le portail. Les apprentis du sous-maître ne sortent pas après la brune ; mais la poterne des communs ferme mal, tous les enfants de la maison le savent, et il a des jambes de treize ans." },
      { after: "j:ansel_mere", text: "Il écrit : *Elle ne me croira pas.* Puis il regarde la feuille jaune, ou la pierre, et il efface, et il écrit : *Elle me croira. Elle croit tout ce que je dis. C'est pour cela que je ne lui disais rien.* Il efface encore, de la paume, jusqu'à ce que la pierre soit propre." },
      "Il s'essuie les mains à son tablier. Avant de rentrer chez les neuf, il sort la montre de sa poche, la regarde, et la remet, avec le geste qu'on a pour une chose qu'on a cessé d'aimer.",
    ],
    choices: [{ back: "K12j_brune" }] },
});

// ---------------------------------------------------------------- four green ribbons, and the night
Object.assign(P, {
  K12j_arret: { act: "IV", title: "Plus de cire que d'écriture", place: "guilde", ambiance: "chateau", fx: { flag: "j:arret_vu" },
    text: [
      "Le père Loquet monte l'escalier du nord en soufflant, sa baguette à la main. « Maître ! Il y a quatre hommes à la poterne. Des rubans verts. Ils ont un papier, et ils disent qu'ils attendront la nuit s'il le faut, que les hommes de cuivre ne vivent pas toujours ! »",
      "La porte noire s'ouvre. Le Grand Maître descend, en houppelande, tête nue. Il traverse sa cour à grands pas inégaux, et tu marches derrière.",
      "Ils sont quatre, de l'autre côté du guichet, larges, bien nourris, la canne plombée au poing. Le premier tient un papier où pendent trois cires : une verte, une rouge, et une troisième, large comme la paume, qu'il a soin de garder sous son pouce. « De par la Reine et son Conseil. Le sieur Coudrier, pour propos séditieux tenus en séance contre le service de Sa Majesté, sera gardé à vue jusqu'après la cérémonie. »",
      "« *Le sieur.* » Le vieillard savoure. « J'ai été *le sieur* jusqu'à vingt-neuf ans. Cela me rajeunit. » Il se tourne vers les deux hommes de cuivre de la poterne, qui ont déjà la main à demi levée. Il lui suffirait de ne rien faire. Les quatre resteraient dehors jusqu'au Jugement.",
      "« Si je reste derrière eux, dit-il à mi-voix, pour toi, on criera demain que le Grand Maître s'est barricadé contre la Reine, et Melchior descendra en sauveur. On sort d'une cave. On ne sort pas d'un mensonge. » Il touche les deux bras de cuivre de sa baguette. Les mains retombent.",
      { if: { not: { has: "j:coudrier_averti" } }, text: "Il ôte sa chaîne, par-dessus sa tête. « On n'arrête pas la Guilde. On arrête un vieillard. Tenez-moi cela. »" },
      { if: { has: "j:coudrier_averti" }, text: "Il n'a pas sa chaîne : elle est restée sur sa table. Il te regarde, une seconde, et son œil gris dit très clairement : *à l'aube, et tâchez d'être exact{e}.*" },
      { with: "josquin", text: "Josquin a fait un pas. Son maître l'arrête de la main, à plat sur la poitrine. « Toi, tu restes. Tu ouvriras demain à qui frappera. Et tu ne demanderas pardon à personne. »" },
    ],
    choices: [
      { label: "Prendre la chaîne, et les laisser l'emmener", hide: { has: "j:coudrier_averti" }, fx: { item: "chaine_maitre" }, to: "K12j_arret_fin", big: true },
      { label: "Les laisser l'emmener", hide: { not: { has: "j:coudrier_averti" } }, fx: { item: "chaine_maitre" }, to: "K12j_arret_fin", big: true },
      { label: "Passer la poterne avant lui, et barrer la ruelle",
        fight: { title: "Quatre rubans verts à la poterne", enemies: [{ id: "homme_duc", n: 2 }], terrain: "ville",
          win: { fx: { flag: ["j:rubans_poterne", "j:preuve_oderic", "j:ordre_arret"], item: ["ordre_arret", "chaine_maitre"], ep: ["perso", 800] }, to: "K12j_arret_fin" },
          lose: { fx: { flag: "j:rubans_rosse", item: "chaine_maitre", pv: -3 }, to: "K12j_arret_fin" } } },
    ] },

  K12j_arret_fin: { act: "IV", title: "Par la poterne", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:rubans_poterne", text: "Les deux premiers sont par terre. Les deux autres ont pris le vieillard chacun par un bras, et le plus gros lui a mis sa canne en travers de la gorge, sans appuyer. « Encore un pas, et je lui casse quelque chose. On nous a dit *vivant.* On ne nous a pas dit *entier.* »" },
      { after: "j:rubans_poterne", text: "« Assez ! » C'est le Grand Maître, d'une voix à faire tomber les tuiles. « J'ai besoin que vous soyez libre cette nuit. Je n'ai aucun besoin que vous soyez héroïque ce soir. Ramassez plutôt ce que ce monsieur a laissé tomber. »" },
      { after: "j:rubans_poterne", text: "Le papier est sur le pavé. Tu le ramasses. Sous le pouce de l'homme, il y avait la troisième cire : large comme la paume, rouge, avec un cheval, et une légende que tu lis à la lanterne de cuivre. *ODERIC, PAR LA GRÂCE DE DIEU, RÉGENT D'AURIME.* Le duc a scellé un ordre de son sceau de régent un jour trop tôt." },
      { after: "j:rubans_rosse", text: "Tu en as touché un. Les trois autres t'ont appris ce que c'est qu'une canne plombée maniée par des gens payés au mois. Tu es à genoux contre le mur de la ruelle, la bouche pleine de sang, quand la grosse voix dit, au-dessus de toi : « Laissez. C'est un enfant. Je viens. »" },
      { after: "j:rubans_rosse", text: "Il s'est baissé, lui, soixante-dix ans, pour te mettre sa chaîne dans la main. « J'ai besoin que vous soyez libre cette nuit. Vous n'aviez nul besoin d'être héroïque ce soir. Retenez la différence : elle vous resservira. »" },
      { if: { not: { any: [{ has: "j:rubans_poterne" }, { has: "j:rubans_rosse" }] } }, text: "Ils le prennent entre eux, deux devant, deux derrière. Il marche au milieu, plus grand qu'eux d'une tête, les mains dans les manches de sa houppelande, comme un homme qui va voir un malade." },
      "La ruelle descend vers la rue du Cadran. Au premier tournant, une voiture attend, sans lanternes, les sabots des chevaux emmaillotés de sacs. La portière claque. La voiture part au pas, vers le bas de la ville, avec le bruit mou d'une chose qu'on ne veut pas qu'on entende.",
      "Le père Loquet est resté sur le seuil. Il a écrit quelque chose sur son ardoise, l'a effacé, et l'a récrit.",
      { with: "josquin", text: "Josquin regarde la chaîne dans ta main. Tu la lui tends. Il la prend à deux mains, sans la passer à son cou : il la porte comme on porte un plat chaud. « Je la lui garde, dit-il. Je ne la mets pas. Elle n'est pas à mettre. »" },
    ],
    choices: [{ back: "K12j_brune" }] },

  K12j_descente: { act: "IV", title: "Des sabots dans des sacs", place: "basse", ambiance: "ville", takes: "night",
    text: [
      "Tu descends la rue du Cadran derrière un bruit. La voiture ne se voit pas ; elle s'entend, à cinquante pas devant, au grincement d'un essieu que le cocher n'a pas graissé. La ville, autour, prépare demain : on cloue des guirlandes, on roule des tonneaux, une fille chante sur un toit en accrochant des lampions.",
      "Personne ne regarde passer une voiture sans lanternes. La veille d'une fête, les gens ont les yeux en l'air.",
      { with: "perrine", text: "Perrine t'a rejoint{e} à la deuxième fontaine, sa hotte vide sur le dos. Elle a écouté trois phrases et elle a pris ton pas. « Le quai des Barges, dit-elle. Ils vont au quai des Barges. Je connais ce grincement : c'est la voiture qui portait les caisses, l'autre nuit. »" },
      "La voiture prend le quai, passe la chaîne, que deux hommes ont baissée d'avance, et s'arrête devant la grande maison aux volets clos. Une porte basse s'ouvre, sur le côté, au ras de l'eau. On y fait entrer quelqu'un de très grand, qui se baisse. La porte se referme.",
      "Tu connais cette maison. Tu y as porté des caisses, sous des flambeaux, et tu en as compté les fenêtres.",
    ],
    choices: [
      { label: "Faire le tour par le bief, du côté où la maison a les pieds dans l'eau", test: { dom: "discretion", diff: 0, label: "Longer le mur sans une ombre", help: [{ if: { voie: "leste" }, v: 10 }, { if: { has: "j:guigne_alliee" }, v: 15 }, { if: PERRINE, v: 5 }] },
        win: { fx: { flag: ["j:sait_cachot", "j:vu_soupirail"], ep: ["histoire", 600] }, to: "K12j_soupirail" }, lose: { fx: { flag: "j:sait_cachot" }, to: "K12j_soupirail" } },
    ] },

  K12j_soupirail: { act: "IV", title: "Le pied dans l'eau", place: "basse", ambiance: "eau",
    text: [
      "Derrière l'hôtel, il y a un bras d'eau morte : l'ancien bief d'un moulin qu'on a démoli du temps des grands-pères. La maison y trempe ses fondations. L'eau est noire, épaisse, et sent la cave.",
      { outcome: "win", text: "Tu suis une corniche large d'une main, le ventre au mur. À six pieds au-dessus de l'eau, un soupirail, barré de trois fers. Derrière, de la lumière : une chandelle, posée par terre. Et une ombre, énorme, qui va et vient, d'un pas inégal." },
      { outcome: "win", text: "Tu n'appelles pas. Il y a un ruban vert assis sur un tonneau, de l'autre côté de la chandelle, qui se cure les dents. Tu regardes les trois fers. Ils sont scellés au plomb, dans une pierre que le bief ronge depuis cent ans ; celui du milieu a du jeu. Plus bas, au ras de l'eau, le mur a une arche murée de briques, d'une autre couleur que le reste, où les joints sont partis." },
      { outcome: "win", text: "Dans la cave, l'ombre s'est arrêtée. Elle a tourné la tête vers le soupirail. Il ne peut pas te voir. Il dit, très fort, au ruban vert, de sa voix de chantre : « Mon ami, vous me garderez jusqu'à quelle heure ? — Jusqu'à midi passé, mon vieux. — Midi passé. Alors j'ai le temps de vous apprendre à lire l'heure. Commençons : une horloge a douze chiffres, et un imbécile en compte treize. » Tu redescends la corniche. Il sait que tu sais." },
      { outcome: "lose", text: "La corniche est large d'une main, et grasse. Ton pied part. Tu te rattrapes à un anneau d'amarrage, dans un bruit d'eau qui te paraît celui d'une cascade. Là-haut, une fenêtre s'ouvre. « Qui va là ? » Tu ne bouges plus. « Un rat », dit une autre voix. La fenêtre se referme." },
      { outcome: "lose", text: "Tu ne verras pas la cave ce soir. Tu sais du moins laquelle c'est : il n'y a qu'un soupirail éclairé, du côté de l'eau, et l'on y entend marcher quelqu'un de lourd, d'un pas inégal." },
      { after: "j:guigne_alliee", text: "Au bout du bief, sous un saule, quelqu'un siffle : deux notes, l'une haute, l'autre basse. La Guigne est assise sur une borne, les pieds nus, un trognon à la main. « T'as perdu un vieux, dit-elle. Je l'ai vu descendre de voiture. Les caves de Hautgué, on y entre par l'arche du moulin : c'est muré avec de la brique de chez Tuilot, qui tient pas. Mon frère y a pris des jambons. Viens après minuit, avec quelque chose pour gratter. »" },
    ],
    choices: [
      { label: "Retenir l'arche du moulin, et la brique de chez Tuilot", hide: { not: { has: "j:guigne_alliee" } }, fx: { flag: "j:plan_cave" }, to: "K12j_petite", big: true },
      { label: "Quitter le bief par le quai", hide: { has: "j:guigne_alliee" }, to: "K12j_petite", big: true },
    ] },

  K12j_petite: { act: "IV", title: "Minuit moins un quart", place: "basse", ambiance: "eau",
    text: [
      "Le cadran du quai est sur son pilier, entre les gabares. On l'appelle la Petite. À cette heure, la lune lui fait une ombre pâle, qui ne dit rien de vrai ; l'heure, c'est la Tour qui la donne, là-haut, d'un œil jaune, au-dessus de toute la ville.",
      "Tu t'assois sur les trois marches. Le port sent le goudron et le pain chaud : les boulangers cuisent pour demain. Un marinier dort dans un rouleau de câble. Sur le toit d'À la Patiente, il y a une lucarne où tu as eu un lit.",
      { after: "j:sait_quarantieme", text: "Tu as une phrase dans la tête, qui a quatre cents ans et qu'on t'a dite ce soir, la porte fermée. Tu as un Cahier sur les genoux, et quelqu'un de l'autre côté. Il n'y a personne ici pour te dire ce qu'il faut écrire." },
      { after: "j:sait_cachot", text: "Derrière toi, à deux cents pas, un vieil homme marche dans une cave. Il a jusqu'à l'aube." },
      { with: "perrine", text: "Perrine s'est assise une marche plus bas, le dos contre ton genou. « J'ai dormi là-haut avant-hier, dit-elle en montrant la lucarne. Demain soir, il n'y aura plus de lucarne. Ou il y en aura une, et personne dedans. Tu me le diras, si tu le sais ? » Elle n'attend pas la réponse. « Non. Ne me le dis pas. Dis-moi seulement à quelle heure il faut que je sois sortie. »" },
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "B12", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    chasse_bronze: { name: "Chasse de bronze", kind: "divers", keep: true, price: 0, desc: "Une tige de bronze grosse comme le petit doigt, longue d'un empan, plate à un bout. Elle a le profil de la rainure du coin : on la présente par-dessous, du côté du petit bout, et l'on frappe une fois, vers le haut." },
    chaine_maitre: { name: "Chaîne du Grand Maître", kind: "divers", keep: true, price: 0, desc: "Une chaîne d'argent noirci, à maillons plats, où pend un petit balancier. Barnabé Coudrier l'a ôtée lui-même, le soir du vingt juin." },
    ordre_arret: { name: "Ordre d'arrêt du sieur Coudrier", kind: "divers", keep: true, flat: true, price: 0, desc: "Un papier à trois cires. La troisième, large comme la paume, porte un cheval et la légende ODERIC, PAR LA GRÂCE DE DIEU, RÉGENT D'AURIME. Daté du vingt juin : un jour avant qu'il y ait une régence." },
  },
} };
