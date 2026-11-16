// Le Douzième Coup · chapter 4, the one who stays, second half (act II, the Trois-Noyers, afternoon and night). A
// price is cried on the gleaner's head: the afternoon is spent in hiding, watching the captain find the coal chute and
// send Line to Arvoise a day early. At the evening bell the gleaner crosses the stakes for good, the Guard's sand
// patrol behind, and learns before dawn to gather the dew of hours on the bronze of an hour-stone (B04).
var P = {};

Object.assign(P, {
  K04r_tantot: { act: "II", title: "Vingt écus", place: "troisnoyers",
    text: [
      "Quand tu te relèves de la borne, on crie dans la rue. C'est le sergent Maillefer, debout sur sa table, sous les noyers, qui lit un papier d'une voix de lutrin :",
      "« De par le capitaine de la Garde du Sable ! Il est promis vingt écus à qui livrera un glaneur dit Roquebise, seize ans environ, hâlé, pieds nus dans des sabots, de la bande à la femme Courtepaille ; et cinquante à qui remettra un cahier gris que ledit glaneur porte sur lui. Ceux qui lui donneront asile seront tenus pour ses complices. »",
      "Il replie le papier. Il a l'air malheureux : c'est un homme qui t'a inscrit{e} hier à la colonne des bestiaux et divers, et qui n'aime pas qu'on lui dérange ses colonnes.",
      "Vingt écus, c'est une vache. Aux Trois-Noyers, ce matin, on abandonne des armoires de noce faute de place sur les charrettes : une vache qui tient dans la poche intéresse tout le monde. Il te faut un trou jusqu'à la nuit.",
    ],
    choices: [
      { label: "Le clocher : le bedeau a la clef, et personne ne monte quatre-vingt-seize marches par plaisir", hide: { not: { has: "r:anicet_tocsin" } }, fx: { flag: "r:cache_clocher" }, to: "K04r_cache" },
      { label: "Le jardin du père Lubin, derrière le rosier", hide: { any: [{ has: "monde:lubin_part" }, { has: "monde:lubin_force" }] }, fx: { flag: "r:cache_lubin" }, to: "K04r_cache" },
      { label: "Le grenier de l'auberge vide, sous l'enseigne sans aiguille", fx: { flag: "r:cache_auberge" }, to: "K04r_cache" },
    ] },
  K04r_cache: { act: "II", title: "Un trou jusqu'à la nuit", place: "troisnoyers", takes: 4,
    text: [
      { after: "r:cache_clocher", text: "Anicet t'ouvre la petite porte sans un mot et la referme à double tour. Tu montes. La chambre de l'horloge est fraîche, pleine de son gros pas boiteux. Par les abat-son, tu as toute la rue sous toi, comme une chose dessinée." },
      { after: "r:cache_lubin", text: "Le père Lubin ne tourne pas la tête. « Derrière le rosier. Il y a un cuvier renversé. » Tu t'y glisses. « Si on me demande, reprend-il au bout d'un moment, sans bouger les lèvres, je dirai que je n'ai rien vu. À mon âge, on me croit : c'est même la seule chose qu'on croie. » Entre les douves du cuvier, tu vois le bas de la rue." },
      { after: "r:cache_auberge", text: "Le Cadran sans Aiguille est ouvert à tous les vents. Tu montes au grenier par l'échelle de meunier, tu la tires derrière toi, et tu te couches sous la lucarne, dans une odeur de pommes de l'an passé. De là, tu vois le puits, la rue, et le dos de l'enseigne, qui se balance." },
      "Les heures de l'après-midi sont les plus longues qu'il y ait pour qui se cache. Tu manges ce que tu as. Tu comptes ton sable. Tu regardes, en bas de la rue, les horloges de la vieille rangées contre le mur, toutes arrêtées maintenant, sauf une.",
      "La grande, celle à poids, marche encore. Le caporal l'a ouverte, sondée, vidée ; quand il a voulu arrêter le balancier, deux gardes ont dû s'y mettre, tant il est lourd, et dès qu'ils l'ont lâché il est reparti. Ils ont recommencé. Il est reparti. Ils y ont renoncé avec des rires gênés, et elle bat toute seule dans la rue vide, entre trente-neuf mortes, de son pas de régulateur.",
    ],
    choices: [{ label: "Regarder le capitaine revenir", to: "K04r_brassac_cave" }] },
  K04r_brassac_cave: { act: "II", title: "Le capitaine mesure", place: "troisnoyers",
    text: [
      "Vers trois heures, Brassac revient de la lisière, à cheval, avec six hommes. Il met pied à terre devant la maison, écoute le rapport du caporal, et ne dit rien. Il regarde les horloges. Puis il fait le tour de la maison, à pied, lentement, son carnet ouvert.",
      "Tu le perds de vue derrière le mur du jardin. Tu sais ce qu'il y a là : un auvent, du charbon, un trou carré. Il y reste longtemps.",
      "Quand il reparaît, il tient entre deux doigts quelque chose de noir, qu'il montre au caporal sans colère : un morceau de mie de pain, pétri de suie. Il s'accroupit, et de la main, à plat, il mesure quelque chose au ras du sol. Deux empans. Il se relève, ôte son gant, écrit.",
      "Tu as laissé dans le charbon, ce matin, une empreinte toute fraîche. Tu le sais à la façon dont il lève les yeux et fait le tour des toits du regard, sans hâte, maison par maison, grenier par grenier. Le regard passe sur toi. Il continue.",
      "« On l'emmène maintenant, dit-il, assez haut pour que tout le bas de la rue l'entende. Pas demain. Attelez. »",
    ],
    choices: [{ label: "Regarder", to: "K04r_voiture" }] },
  K04r_voiture: { act: "II", title: "Le coussin", place: "troisnoyers",
    text: [
      "C'est un fourgon de la Garde, bâché de noir, à quatre chevaux. On y a mis de la paille, une couverture, et un coussin de velours qui vient d'on ne sait quelle maison clouée : le capitaine a des ordres, et ces ordres comprennent un coussin.",
      "Line sort de chez elle au bras d'un garde. Elle a son châle, sa loupe relevée sur le front, et un panier. Elle s'arrête sur le seuil. Elle regarde ses horloges, l'une après l'autre, les trente-neuf, comme on passe une revue ; devant la grande, qui bat, elle fait de la tête un signe bref, d'égale à égale.",
      "« Celle-ci vient avec moi, dit-elle au capitaine. Monseigneur aime les belles pièces, je crois. Vous lui direz que c'est un cadeau. Vous lui direz aussi qu'elle n'a jamais retardé, et que cela se remarque, chez lui, à côté du reste. »",
      "Brassac s'incline d'un demi-pouce. On charge le régulateur, debout, calé entre deux bottes de paille, et il continue de battre sous la bâche noire. On hisse la vieille à côté. Elle ne se retourne pas vers les toits. Elle arrange son coussin.",
      "Le fourgon s'ébranle vers le nord, par la route qui contourne la lisière. On l'entend longtemps : les roues, les chevaux, et, entre les deux, quand le vent porte, un pas d'horloge qui s'éloigne.",
    ],
    choices: [{ label: "Attendre six heures", to: "K04r_six_heures" }] },
  K04r_six_heures: { act: "II", title: "L'angélus", place: "troisnoyers", takes: "evening",
    text: [
      "Le soir tombe sur un village aux trois quarts vide. Il reste des feux dans cinq ou six maisons, les deux piquets de la Garde au bas de la rue, et, depuis le départ du fourgon, une patrouille de plus : six hommes, le sablier à la ceinture, qui attendent près du puits. Ceux-là peuvent entrer dans la lisière. Ils sont là pour toi.",
      "Il faut passer le pré communal à découvert, sur deux cents pas, jusqu'au coude de la haie.",
      { after: "r:anicet_tocsin", text: "Six heures sonnent à l'horloge qui retarde. Puis la cloche. Trois coups, trois coups, trois coups : l'angélus. Elle devrait se taire. Elle continue. Elle prend de l'élan, de la voix, de la folie ; elle sonne à la volée, à toute volée, comme pour un feu, une noce et une invasion ensemble, et tous les chiens du canton se mettent à hurler. Les six hommes du puits regardent le clocher. Leur sergent jure, et ils y courent. Tu vois, par la porte de l'église, la longue silhouette du bedeau pendue à la corde, qui monte et descend avec elle, de tout son poids, les pieds quittant le dallage." },
    ],
    choices: [
      { label: "Courir pendant que la cloche s'emballe", hide: { not: { has: "r:anicet_tocsin" } }, fx: { ep: ["perso", 400] }, to: "K04r_haie" },
      { label: "Te couler de mur en mur jusqu'au pré, et ramper", hide: { has: "r:anicet_tocsin" }, test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "trou_haie" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "K04r_haie" }, lose: { fx: { pv: -2, flag: "r:vu_au_pre" }, to: "K04r_haie" } },
    ] },
  K04r_haie: { act: "II", title: "Le coude, une dernière fois", place: "troisnoyers",
    text: [
      { outcome: "lose", text: "« Là ! Dans le pré ! » Une arbalète claque. Le carreau te brûle l'épaule et se plante dans l'herbe, devant toi. Tu te relèves et tu cours, droit, sans plus rien cacher, avec six paires de bottes derrière." },
      "Le fossé, la souche, la pierre plate. La corde aux chiffons passe au-dessus de ta tête.",
      { after: "r:rouget_pris", text: "Rouget est sur tes talons, ton sac sur le dos. Il n'a pas fait un bruit depuis le village. Au bord de l'herbe qui change, il s'arrête net, les narines ouvertes, comme un chien devant l'eau. « J'y suis jamais allé plus loin que la charrette de foin », avoue-t-il. Puis il te tend la main, de lui-même, parce qu'il sait comment cela se fait." },
      { after: "r:rouget_refuse", text: "Quelque chose remue dans le fossé, devant toi. Tu as déjà le poing levé quand cela chuchote : « C'est moi. Frappe pas. » Rouget. Il a un licol neuf autour du cou, coupé net à un pied de long, et du sang à la bouche qui n'est pas le sien. « J'ai mordu la mule. Enfin, le brocanteur. Les deux. » Il te tend la main, d'autorité. « J'ai pas de sable. Toi, t'en as. Tu vas pas me laisser là avec un licol. »" },
      "Derrière vous, le village. Devant, les prés pris, où le soir a la couleur de l'étain.",
    ],
    choices: [
      { label: "Prendre sa main, et entrer : une pincée pour deux", fx: { stock: { sable: -1 }, join: "rouget" }, to: "K04r_patrouille" },
    ] },
  K04r_patrouille: { act: "II", title: "Six lanternes en ligne", place: "ferme", ambiance: "champs",
    text: [
      "Vous n'avez pas fait trois cents pas que des lueurs paraissent derrière vous, à la corde. Six. Elles passent dessous l'une après l'autre et s'ouvrent en éventail dans le pré, à vingt pas d'intervalle. La Garde bat la lisière comme on bat un champ pour le lièvre. Chaque homme a son sablier, et l'ordre d'aller jusqu'à la ferme.",
      "Courir, ici, laisse une trace que même un garde sait lire : l'herbe couchée reste couchée. Il y a devant vous le vol d'étourneaux, la charrette de foin, le berger et son chien. Il y a, sur la gauche, à deux cents pas, le toit de chaume des Aulnes.",
      { with: "rouget", text: "La main de Rouget, dans la tienne, est glacée et serre à faire mal. « Ils vont nous voir, souffle-t-il. On est les seuls trucs qui bougent dans tout le pays. »" },
      "Il a raison. Tu tournes cette phrase dans ta tête, et tu y trouves ce qu'il faut faire.",
    ],
    choices: [
      { label: "Ne plus bouger : se planter debout près du berger, et faire le dormant", test: { dom: "discretion", diff: 0, label: "Immobile", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }, { if: { has: "r:sablier_a_soi" }, v: 5 }] },
        win: { fx: { flag: "r:fait_le_dormant", ep: ["seance", 800] }, to: "K04r_immobile" }, lose: { to: "K04r_eternue" } },
      { label: "Gagner la métairie des Aulnes, et s'asseoir à la table", fx: { flag: "r:table_aulnes", ep: ["seance", 600] }, to: "K04r_table" },
      { label: "Attendre le garde du bout de la ligne derrière la charrette de foin", fight: { title: "Le garde du bout de la ligne", enemies: [{ id: "garde_sable", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["seance", 800], item: "sabre", stock: { sable: 2 }, flag: "r:garde_assomme" }, to: "K04r_apres" }, lose: { fx: { pv: 3 }, to: "K04r_eternue" },
        flee: { label: "Rompre, et courir vers les Aulnes", dom: "discretion", diff: 0, to: "K04r_table" } } },
    ] },
  K04r_immobile: { act: "II", title: "Faire le dormant", place: "ferme", ambiance: "champs",
    text: [
      "Tu te places à trois pas du berger, un peu en arrière, le pied levé comme lui, la tête tournée vers le village. Rouget se couche près du chien, en rond, le museau dans ses bras. Tu fermes à demi les yeux : ceux des pris ne brillent pas.",
      "Le plus dur est le souffle. Les dormants ne respirent pas, ou ils mettent un mois à le faire. Tu respires du haut du ventre, par le nez, à peine, en comptant. Ta jambe levée commence à trembler. Tu lui parles.",
      "La lanterne vient droit sur vous. Le garde est jeune. Il a peur, cela s'entend à sa façon de marcher, trop vite, en regardant ses pieds. Il s'arrête devant Bastien. Il lève sa lumière sur la figure du berger, sur la dent qui manque, sur la sueur de Pâques ; il la promène, par acquit de conscience, sur toi. Tu sens la chaleur de la flamme sur ta joue. Tu regardes à travers lui, vers le village, de toutes tes forces.",
      "« Pardon », dit le garde, à mi-voix, au berger, ou à vous trois. Il se signe. Il repart, plus vite.",
      "Vous restez ainsi le temps que les six lueurs atteignent la ferme, en fassent le tour, et reviennent, par un autre pré. Quand tu reposes le pied, tu ne le sens plus. Rouget se relève en se frottant les bras. « Il t'a demandé pardon, chuchote-t-il, émerveillé. La Garde. À toi. »",
    ],
    choices: [{ label: "Reprendre la marche, sur des jambes de bois", to: "K04r_apres" }] },
  K04r_eternue: { act: "II", title: "Ce qui bouge", place: "ferme", ambiance: "champs",
    text: [
      { outcome: "lose", text: "Tu tiens la pose le temps que la lanterne approche. Elle est à dix pas quand quelque chose, à tes pieds, éternue : un éternuement de gamin, entier, sans retenue. Le garde fait un bond. « Il y en a un qui... Sergent ! Par ici ! Ils sont là ! »" },
      "Il n'y a plus qu'à courir, et courir ici laisse un sillon. Vous filez vers la gauche, vers le chaume des Aulnes, pliés en deux. Derrière, les lanternes convergent.",
    ],
    choices: [{ label: "Entrer dans la métairie", fx: { flag: "r:table_aulnes" }, to: "K04r_table" }] },
  K04r_table: { act: "II", title: "Trois à table", place: "ferme",
    text: [
      "La porte est entrebâillée, comme à Pâques. Dedans, il y a le jour de ce lundi-là, la soupe, le chat sur l'âtre, et les deux qui dînent : l'homme, sa cuiller en l'air ; la femme, penchée, sur le point de dire une chose drôle.",
      "Il y a trois écuelles. La troisième attendait un valet, un voisin, quelqu'un qui n'est pas venu. Tu t'assois devant. Tu prends la cuiller, tu la lèves à mi-chemin, et tu ne bouges plus.",
      { with: "rouget", text: "Rouget s'est mis sous la table, contre les jambes de l'homme, avec le naturel d'un chien de la maison." },
      "Des bottes dans la cour. La porte s'ouvre en grand. Une lanterne entre, et derrière elle une figure sous un casque, qui regarde la salle. Tu vois tout cela du coin de l'œil, sans tourner la prunelle. Tu regardes la femme. Elle te regarde. Depuis Pâques, elle a cet air de malice, les lèvres ouvertes sur son mot, et tu es assis{e} à sa table, à la place de l'invité, à attendre qu'elle le dise.",
      "« Trois, dit le garde, pour lui-même. Deux vieux et un jeune. » Il hésite sur le seuil. Personne n'a envie d'entrer dans ces salles ; on y a le sentiment d'être en retard à un repas. « Ils mangeaient », ajoute-t-il, comme une excuse, et il referme la porte, doucement, pour ne pas faire de courant d'air sur la soupe.",
      "Tu restes la cuiller en l'air bien après que les bottes ont quitté la cour. Quand tu la reposes enfin, tu t'aperçois que tu as failli dire merci à la maîtresse de maison.",
    ],
    choices: [{ label: "Ressortir sans bruit, et laisser la troisième écuelle comme elle était", to: "K04r_apres" }] },
  K04r_apres: { act: "II", title: "La nuit des prés", place: "ferme", ambiance: "champs", takes: "night",
    text: [
      { after: "r:garde_assomme", text: "Le garde est étendu dans le foin, son casque à côté de lui. Tu lui as pris son sabre et le sable de son sablier ; tu lui laisses le sablier, vide, et tu le traînes jusqu'à la corde, où l'herbe plie encore, pour que ses camarades le retrouvent de ce côté-là du temps. Rouget te regarde faire. « La Courtepaille l'aurait laissé où il est tombé », remarque-t-il. Il n'a pas dit si c'était un reproche." },
      "Les six lanternes s'en retournent vers le village avant minuit. La Garde compte son sable à la pincée ; elle ne le brûle pas toute une nuit pour un sac.",
      "Vous marchez. La lune se lève sur les prés pris, pâle, et sa lumière y tombe comme une poussière. Tu fais passer Rouget entre les étourneaux, de biais, la main sur sa nuque pour lui baisser la tête. Il ne dit rien. Il regarde les oiseaux, un par un, la bouche ouverte.",
      { with: "rouget", text: "« Ils savent qu'ils sont arrêtés ? » demande-t-il enfin, tout bas. Tu réponds que non. Qu'ils sont en train de se poser, et qu'ils en auront fini dans cent ans. Il réfléchit. « Alors ils sont contents. Ils vont se poser. C'est le meilleur moment. » C'est une idée que tu n'avais jamais eue, en six ans." },
    ],
    choices: [
      { label: "« Tu veux savoir pourquoi Roquebise ? »", hide: { confie: "r_soeur" }, fx: { conf: { rouget: 10 }, flag: "r:rouget_sait_lison" }, to: "K04r_rouget_lison" },
      { label: "Marcher en silence jusqu'à la borne", to: "K04r_gratte" },
    ] },
  K04r_rouget_lison: { act: "II", title: "Ce qu'on dit en marchant", place: "ferme", ambiance: "champs",
    text: [
      "Tu le lui dis en marchant, sans le regarder, parce que c'est plus facile aux choses qu'on dit en marchant. La rue des Potiers. La porte bleue. Une sœur de cinq ans, qui les a toujours.",
      "Rouget écoute. Il a quatorze ans, et depuis qu'il en a dix il n'appartient qu'à des gens qui l'ont payé. Il fait le tour de l'idée, prudemment, comme d'un objet dont il ne connaît pas l'usage.",
      "« Une sœur, répète-t-il. Qui est à toi sans que tu l'aies achetée. » Il marche un moment. « Et tu vas la chercher. Alors qu'elle vaut rien. Enfin, je veux dire : rien à revendre. » Il a l'air d'avoir découvert quelque chose d'énorme, et de ne pas savoir encore si c'est une bonne nouvelle. « Je porterai ton sac jusque là-bas, dit-il. Gratis. »",
    ],
    choices: [{ label: "Marcher jusqu'à la borne", to: "K04r_gratte" }] },
  K04r_gratte: { act: "II", title: "Une plume", place: "ferme",
    text: [
      "Un peu avant le jour, vous êtes à la borne de la vingt-troisième lieue. Il fait frais. La Ferme-Vieille est à vingt toises, avec sa planche clouée en travers de la grange, et personne devant : les quatre gardes de faction ont été rappelés pour la battue.",
      { after: "r:sait_gratter", text: "*Toutes, la nuit, un peu avant le jour. Cela perle sur le bronze.* Tu approches ta figure du cadran. La vieille a dit vrai. Le bronze verdi est couvert d'une buée grise, très fine, qui luit, et qui se rassemble en grains le long du style." },
      { before: "r:sait_gratter", text: "Tu t'assois contre la pierre. C'est Rouget qui le voit le premier, parce qu'il voit dans le noir. « Ça brille. Là, sur le rond en cuivre. » Le bronze verdi du cadran est couvert d'une buée grise, très fine, qui luit, et qui se rassemble en grains le long du style. Tu as glané six ans sans savoir que les bornes en donnaient ; la Courtepaille le savait peut-être, et gardait pour elle ce qu'on ne paie pas." },
      "Il te faut une plume. Tu en as une à ton bonnet, une plume de ramier, que tu portes depuis les Hautes-Bordes. Tu balaies le cadran de haut en bas, vers le creux de ta main, doucement, comme on ramasse de la farine. Cela fait dans ta paume un petit tas tiède, gris de perle. Deux pincées. Tu les fais couler dans le col.",
      "Le premier rayon touche la pierre. Sur le bronze, ce qui restait de buée s'éteint d'un coup, bu.",
    ],
    fx: { stock: { sable: 2 }, flag: "r:sait_gratter" },
    choices: [{ label: "T'adosser à la borne, et attendre l'heure du Cahier", to: "B04" }] },
});

module.exports = { passages: P, extras: {} };
