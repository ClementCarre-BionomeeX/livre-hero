// Act IV, lot IV2: the road to Hautecombe and the temple of the Six (Edrin, the revelation, the Voice named, the old
// master's letter, the relics brought together), the children of Vaux, the last miller, and Coliane's arc with Josse
// Ferlan at the Circle's camp in Vaux-Saint-Pierre.
var ROUTE = "@route";
var RET = "@ret";
var H_COL = { with: "coliane", v: 10 };
var H_PIP = { with: "pip", v: 10 };
var H_AUB = { with: "aubin", v: 10 };
var H_CHA = { with: "charline", v: 10 };
var H_THA = { with: "thavary", v: 10 };
var H_GLO = { with: "gloup", v: 10 };
// the three keys of the Seal, held or given
var TROIS = { count: [{ any: [{ relic: "clou" }, { given: "clou" }] }, { any: [{ relic: "cloche" }, { given: "cloche" }] }, { any: [{ relic: "anneau" }, { given: "anneau" }] }], min: 3 };

var P = {};

// ================================================================== THE ROAD TO HAUTECOMBE (legs and events)
Object.assign(P, {
  IVR_leg_frere: { title: "Le pont de la Combe", place: null,
    fx: { meet: "ivr_godefroy" },
    text: [
      "La route quitte la vallée par un chemin de mulets taillé dans le flanc de la montagne. Au bout d'une demi-journée de montée, un pont de pierre enjambe un torrent qui descend de la Fenne en grondant. L'eau est blanche d'écume, et sous l'écume, quand elle se calme dans les remous, elle a une teinte de thé froid. Sur le parapet, un homme en robe grise est assis, les mains dans les manches, et il te regarde venir depuis longtemps.",
      "Il a soixante ans au moins, le crâne rasé, des mains de paysan et un gant gris à la ceinture, pas à la main. « Frère Godefroy, de Hautecombe, dit-il en se levant. Le Grand Maître m'envoie à ce pont tous les jours depuis la Toussaint. Il m'a dit : *Tu attendras quelqu'un qui marche comme s'il portait plus lourd que son sac.* » Il te détaille sans gêne. « Je crois que c'est vous. »",
      { if: { has: "passe:ordre" }, text: "Il remarque ta façon de te tenir, ou celle de poser la main sur ta ceinture là où pendait ton gant, autrefois. « Vous avez servi, dit-il. Trois ans ? Quatre ? On le voit toujours. On a beau partir, on garde la main ouverte. »" },
      { if: { has: "jeton=ordre" }, text: "Quand tu lui montres le jeton de l'Ordre, il ne le regarde pas. « Le sénéchal a écrit au Grand Maître à votre sujet, dit-il. Plusieurs fois. Il dit que vous êtes têtu{e}. Chez Brann, c'est un compliment. »" },
      { if: { has: "jeton=cercle" }, text: "Il voit le jeton d'os à ta ceinture, le cercle brisé du Cercle, et ses lèvres se pincent un instant. Puis il hausse les épaules. « Le Grand Maître a dit que vous viendriez avec ça. Il a dit que ça ne changeait rien. Je ne suis pas sûr d'être d'accord avec lui, mais il est plus vieux que moi. »" },
      { with: "pip", text: "Pip s'est posé sur le parapet, à distance prudente du frère. Godefroy le regarde longtemps, sans un mot, puis il se signe, lentement, et pas tout à fait comme on se signe d'habitude : la main ouverte, la paume vers la lumière." },
    ],
    choices: [
      { label: "« Pourquoi le Grand Maître m'attend-il ? »", to: "IVR_leg_frere_edrin" },
      { label: "Marcher avec lui sans poser de questions", fx: { ep: ["perso", 1000] }, back: ROUTE },
    ] },
  IVR_leg_frere_edrin: { title: "Ce que sait Godefroy", place: null,
    fx: { ep: ["perso", 1500] },
    text: [
      "Frère Godefroy marche à côté de toi, d'un pas lent qui avale la pente sans avoir l'air d'y toucher. « Pourquoi il vous attend ? Je ne sais pas. Il ne me le dit pas. Il me dit d'aller au pont. » Il marche encore un moment. « Je sais qu'il a quatre-vingt-dix ans, qu'il n'y voit presque plus, et qu'il a fait venir son lit dans le temple, au pied des piliers, au début de l'automne. Il dit qu'il ne veut pas mourir ailleurs. Il dit qu'il a quelque chose à rendre avant. »",
      "« L'abbaye est pleine, ajoute-t-il. Des gens de la Sorbe montent tous les jours, depuis que les puits sont noirs en bas. On leur donne la soupe, la paille de la grange, ce qu'on a. La source de l'abbaye est encore claire. C'est la dernière, à ce qu'on dit, entre ici et le glacier. Frère Herbelin la garde comme un chien. »",
      { if: { mark: { min: 2 } }, text: "À un moment, il s'arrête pour souffler, et son regard tombe sur ta main gauche. Il ne dit rien. Il remet son gant gris, celui qu'il portait à la ceinture, et il ne l'enlève plus jusqu'au soir." },
      { with: "thavary", text: "Thavary marche derrière vous, et elle écoute. « Un Grand Maître qui attend quelqu'un au pont, dit-elle quand le frère s'est éloigné pour remplir sa gourde. Chez moi, on appelait ça une dette. On l'attend au pont quand on n'ose pas aller la payer chez l'autre. »" },
      { with: "coliane", text: "Coliane crache dans le torrent. « Quatre-vingt-dix ans, dit-elle. Il en a mis, du temps, à vouloir rendre quelque chose. »" },
    ],
    choices: [{ label: "Reprendre la montée", back: ROUTE }] },

  IVR_leg_mere: { title: "La femme qui descend", place: null,
    fx: { questSeen: "IV_enfants", meet: "ivr_hodierne" },
    text: [
      "Une femme descend le chemin à ta rencontre, en boitant bas, une main contre la paroi. Elle a un châle trempé sur la tête, des sabots, un bâton qu'elle a cassé à une haie, et le visage de quelqu'un qui n'a pas dormi depuis plusieurs nuits. Quand elle te voit, elle s'arrête, et elle a l'air de chercher si elle a encore la force de parler.",
      "« Hodierne, dit-elle. Du camp de Vaux. De Sorbe-la-Basse, avant. » Elle reprend son souffle. « Mes deux petits sont partis il y a trois nuits. Loys et Clarisse. Avec d'autres, cinq en tout, des enfants du camp qui n'ont plus personne ou presque. Ils parlaient d'une dame, depuis une semaine. Une dame dans l'eau du lavoir, qui connaissait leurs noms, qui disait qu'en haut, dans la montagne, il y avait un lac où l'on voyait ceux qu'on avait perdus. » Sa voix ne tremble pas. Elle a usé ses larmes plus bas.",
      "« Je suis montée jusqu'à l'abbaye. Les moines disent qu'on les a vus passer, au-dessus, vers la combe. Moi, je ne peux plus. J'ai la jambe qui ne veut plus. » Elle te regarde, et elle regarde tes armes. « Je redescends chercher des hommes au camp. Personne ne voudra monter. Ils ont tous peur de l'eau, maintenant. »",
      { if: { has: "passe:fui" }, text: "Il y a sept ans, à Saint-Gilles-des-Prés, des femmes comme elle frappaient aux portes, et toi, tu étais déjà sur la route. Tu t'en souviens au moment où tu voudrais le moins t'en souvenir." },
      { if: { has: "passe:aide" }, text: "Tu as porté des enfants comme les siens jusqu'à un temple, il y a sept ans. Tu sais ce que pèse un enfant de six ans qui a de la fièvre. Tu sais aussi combien de temps ça laisse." },
      { with: "pip", text: "Pip descend jusqu'au visage de la femme et reste là, tout près, à briller doucement. Elle n'a pas peur. Elle ferme les yeux une seconde, comme on les ferme au soleil." },
    ],
    choices: [
      { label: "« Je monterai à la combe. Redescendez au camp et reposez-vous. »", fx: { flag: "IVR:promesse", conf: { pip: 5, aubin: 5 }, ep: ["perso", 1000] }, back: ROUTE },
      { label: "« Je ferai ce que je pourrai. » Et reprendre ta route", back: ROUTE },
    ] },

  IVR_leg_retour: { title: "Hautecombe, derrière toi", place: null,
    text: [
      "Au tournant du chemin, là où l'on perd l'abbaye de vue, tu te retournes. Hautecombe est accrochée à la paroi : un clocher carré, un toit de lauzes, la fumée des cuisines. Au-dessus, la Fenne, blanche, et sous la Fenne, à quelques jours de marche, ce que tu sais maintenant qu'il y a dessous.",
      { if: { has: "R:revele" }, text: "Tu redescends avec un nom dans la bouche. Tu ne l'as dit à personne en bas. Tu ne sais pas encore à qui on peut le dire, ni comment. Tu sais seulement qu'il pèse, et qu'on ne peut plus le poser.", else: "Tu redescends avec la moitié d'une histoire, et la certitude que l'autre moitié est pire. Le vieil homme du temple t'a regardé{e} partir comme on regarde quelqu'un qu'on n'a pas su convaincre." },
      { if: { item: "lettre_maitre" }, text: "La lettre de ta maîtresse est contre ta poitrine, sous ta chemise. Tu la sens à chaque pas, le coin des feuillets qui frotte. Tu ne la relis pas. Tu la connais déjà." },
      { with: "pip", text: "Pip ne se pose pas sur ton épaule, aujourd'hui. Il vole devant, très haut, et de temps en temps il s'arrête et regarde vers l'est, vers le glacier, comme on regarde une maison où l'on a habité." },
      { with: "aubin", text: "Frère Aubin descend en silence, son bâton de pèlerin sonnant sur les pierres. Une fois, il dit : « Quatre cents ans. » Et il ne dit rien d'autre jusqu'au bas de la montée." },
    ],
    choices: [{ label: "Descendre vers Vaux", back: ROUTE }] },
});

// ------------------------------------------------------------------ region events (the Hautecombe road)
Object.assign(P, {
  IVR_E_flaque: { title: "La flaque du chemin",
    text: [
      "Le chemin passe sous une paroi qui suinte, et l'eau s'est amassée dans une ornière en une flaque large comme une table. Elle est noire. Elle ne gèle pas, alors que la boue autour craque sous la semelle. Tu la contournes. Ton reflet, lui, ne la contourne pas tout à fait : il reste un instant là où tu étais.",
      "« {hero}. » La voix est douce, raisonnable, un peu lasse, comme celle de quelqu'un qui t'a attendu{e} longtemps et qui ne t'en veut pas. « Tu montes voir le vieux. Il va te raconter son histoire. Elle est vraie, tu sais. Presque toute. Demande-lui seulement ce qu'il a fait, lui, pendant soixante-dix ans, avec ce qu'il savait. »",
      { if: { mark: { min: 3 } }, text: "Ta main gauche te brûle. La tache s'est étendue cet automne jusqu'au poignet, et maintenant elle bat, au rythme de la voix. Tu as envie de t'agenouiller et de poser ta paume à plat sur l'eau. Ce serait facile. Ce serait chaud." },
      { if: { mark: { max: 0 } }, text: "Tu ne sens rien, dans les mains. Seulement le froid, et la colère d'être appelé{e} par ton nom par une flaque." },
      { with: "gloup", text: "Gloup s'est arrêté au bord de l'ornière et la regarde sans bouger, tout son corps de gelée tendu vers l'eau. Puis il recule, pas après pas, jusque derrière tes bottes." },
    ],
    choices: [
      { label: "« Et toi, qu'est-ce que tu as fait de ses larmes ? »", fx: { ep: ["perso", 1200] }, to: "IVR_E_flaque_reponse" },
      { label: "Fendre la flaque du talon et passer", fx: { ep: ["perso", 800] }, back: ROUTE },
    ] },
  IVR_E_flaque_reponse: { title: "La flaque du chemin",
    text: [
      "Il y a un silence, dans l'eau. Puis un rire très bas, sans méchanceté. « Je les ai bues, dit la Voix. Quelqu'un devait le faire. Il pleurait dans le noir, et personne ne venait. Alors j'ai grandi. Tu préférerais qu'elles se soient perdues ? »",
      "Le reflet se défait. La flaque n'est plus qu'une flaque, noire et immobile, avec des brins de paille dedans. Le vent descend de la Fenne et te passe sous le col.",
      { with: "aubin", text: "Frère Aubin trace une croix sur l'eau avec le bout de son bâton, puis il essuie le bâton dans l'herbe, longuement, comme s'il y avait quelque chose à enlever." },
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  IVR_E_anselme: { title: "La charrette d'Anselme",
    fx: { meet: "anselme" },
    text: [
      "Une charrette est arrêtée en travers du chemin, une roue dans le fossé, et une mule grise attend en mâchant le vide avec une patience de sainte. À côté, un homme en manteau de colporteur, la moustache cirée malgré tout, pousse la roue de l'épaule en jurant dans trois langues. Anselme. Toujours lui, et toujours là où l'on ne l'attend pas.",
      "« Ah ! dit-il en se redressant. Le ciel m'envoie quelqu'un de solide. Poussez avec moi, je vous ferai un prix. » La roue sort du fossé au troisième effort. Anselme s'essuie les mains sur ses cuisses et ouvre la bâche avec un geste de magicien. « Je monte à Hautecombe. Les moines achètent tout, depuis qu'ils nourrissent la moitié de la Sorbe. Et j'ai des choses rares, cette fois. Vraiment rares. »",
      { if: { has: "durn:marteau" }, text: "« Vous savez que Durn, aux Trois-Bornes, a refait son enseigne ? dit-il en fouillant. Un marteau doré, gros comme ça. Il raconte à qui veut l'entendre qu'on le lui a rapporté de chez les trolls. » Il te regarde de côté. « J'ai pensé à vous. Je ne sais pas pourquoi. »" },
      { if: { has: "bergere:chien" }, text: "« Et la bergère de la crête, Isaure, avec son chien qui ne la quitte plus d'un pas. Elle m'a acheté trois aiguilles et m'a demandé de vos nouvelles. Je lui ai dit que vous étiez célèbre. Elle n'a pas eu l'air de trouver ça bien. »" },
    ],
    choices: [
      { label: "Regarder ce qu'il a de rare", to: "IVR_E_anselme_rare" },
      { label: "Le laisser à sa mule", back: ROUTE },
    ] },
  IVR_E_anselme_rare: { title: "Ce qu'Anselme a de rare",
    text: [
      "Il pose sur le hayon trois choses, avec respect. Un morceau de pierre grise taillé en pointe, qu'il présente comme « un éclat authentique du Sceau, ramassé par un pèlerin mort de froid sous le glacier » et qui est très visiblement un morceau d'ardoise. Un flacon d'eau « de la source de Hautecombe, bénite par le Grand Maître lui-même », dont le bouchon est neuf et l'eau trouble. Et une clé.",
      "Une petite clé de fer, avec une étiquette de bois au bout d'un fil : *Chamois, 3*. « Ça, dit Anselme, c'est un objet dont je ne connais pas l'usage, ce qui le rend précieux. Elle m'est venue cet automne, sur la route de la vallée, au fond d'un lot de vaisselle. Je ne sais plus qui me l'a vendu. Une clé d'auberge, avec son étiquette : il y a donc quelque part une porte qui l'attend. » Il fait tourner la clé au bout du fil. « Dix sous. Pour vous, huit. »",
      { with: "coliane", text: "Coliane prend le flacon d'eau bénite, le débouche, le sent, et le rebouche. « De l'eau de mare, dit-elle. Avec du sel dedans pour que ça pique. » Anselme a l'air sincèrement peiné." },
    ],
    choices: [
      { label: "Acheter la clé (8 sous)", if: { gold: { min: 8 } }, why: "Tu n'as pas huit sous.", fx: { gold: -8, item: "ivr_cle", ep: ["perso", 800] }, to: "IVR_E_anselme_fin" },
      { label: "Lui dire ce qu'est vraiment son éclat du Sceau", test: { dom: "savoir", diff: -10, label: "Reconnaître une ardoise de toit", help: [H_CHA] },
        win: { fx: { item: "ivr_cle", ep: ["perso", 1200] }, to: "IVR_E_anselme_honte" }, lose: { to: "IVR_E_anselme_fin" } },
      { label: "Ne rien acheter", back: ROUTE },
    ] },
  IVR_E_anselme_honte: { title: "Ce qu'Anselme a de rare",
    text: [
      "Tu prends l'éclat du Sceau, tu le casses en deux entre tes doigts, et tu lui montres la tranche feuilletée, bleue, avec encore un trou de clou dans un coin. Anselme le regarde, regarde la mule, regarde le ciel. « On ne peut plus rien vendre à personne, dit-il, désolé. Les gens lisent, maintenant. »",
      "Il te tend la clé de fer, de mauvaise grâce et avec un certain respect. « Prenez. Pour le silence. Si vous dites aux moines ce qu'est mon ardoise, je n'écoule pas mon eau bénite, et si je n'écoule pas mon eau bénite, je ne paie pas mon foin. » Il remballe. « Vous êtes une plaie, vous savez. Je vous aime bien. »",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVR_E_anselme_fin: { title: "La charrette d'Anselme",
    text: [
      "Anselme remballe ses merveilles avec soin, claque la langue, et la mule repart, sans se presser, vers le haut de la montagne. « Hautecombe ! crie-t-il par-dessus son épaule. Je serai sous le porche de l'abbaye. Si vous avez besoin de quelque chose qu'il ne faut pas, vous saurez où me trouver. »",
      { if: { item: "ivr_cle" }, text: "Tu fais tourner la clé dans ta main. *Chamois, 3*. Elle est usée au panneton, comme une clé dont on s'est beaucoup servi pendant peu de temps." },
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  IVR_E_bete: { title: "Ce qui sort du bois",
    text: [
      "Le bois de mélèzes, au-dessus du chemin, est mort sur pied : les aiguilles ne sont pas tombées, elles sont devenues grises, et elles cliquettent quand le vent passe, comme des os. Quelque chose bouge dedans. Deux choses. Elles descendent à travers les troncs sans se cacher, la tête basse, et tu entends leur souffle avant de voir leur forme.",
      "On ne sait plus ce que c'était. Des loups, peut-être, ou des chiens de berger qu'on a laissés derrière soi quand on a quitté les fermes de la haute Sorbe. La souillure leur a mangé le poil par plaques, et dessous, la peau est grise et luisante comme de l'ardoise mouillée. Elles s'arrêtent sur le talus, à vingt pas, et vous regardent.",
      { with: "gloup", text: "Gloup gargouille, un son grave que tu ne lui connaissais pas. Les deux bêtes tournent la tête vers lui, en même temps, et l'une d'elles gémit, comme un chien qu'on appelle et qui ne sait pas s'il doit venir." },
    ],
    choices: [
      { label: "Leur faire face", fight: { title: "Les bêtes du bois mort", enemies: [{ id: "bete_souillee", n: 2 }], terrain: "nature",
        win: { fx: { ep: ["perso", 2500] }, to: "IVR_E_bete_apres" }, lose: { fx: { pv: -3 }, to: "IVR_E_bete_blesse" },
        flee: { label: "Dévaler la pente jusqu'au torrent", dom: "nature", diff: -10, to: "IVR_E_bete_fuite" } } },
      { label: "Gloup : il roule jusqu'au pied du talus", who: "gloup", test: { dom: "nature", diff: -10, label: "Ce qui est né de la même eau" }, win: { fx: { conf: { gloup: 10 }, ep: ["perso", 2000] }, to: "IVR_E_bete_gloup" }, lose: { to: "IVR_E_bete_blesse" } },
      { label: "Reculer lentement sans les quitter des yeux", test: { dom: "nature", diff: -20, label: "Ne pas être une proie", help: [H_THA, H_COL] }, win: { fx: { ep: ["perso", 1500] }, to: "IVR_E_bete_fuite" }, lose: { to: "IVR_E_bete_blesse" } },
    ] },
  IVR_E_bete_apres: { title: "Le bois mort",
    text: [
      "Les deux bêtes sont couchées sur le talus, et elles ont l'air, maintenant, de ce qu'elles étaient avant : deux chiens de berger, un noir et un fauve, avec des colliers de cuir clouté. Sur le collier du noir, une plaque de laiton, et un nom gravé : *Turc*. Quelqu'un l'a aimé assez pour lui faire graver son nom.",
      "Tu les tires hors du chemin. Tu n'as pas de quoi les enterrer, la terre est trop dure. Tu poses des pierres dessus, ce qui se trouve, et tu reprends ta route avec les mains qui sentent la vase.",
      { with: "pip", text: "Pip reste un moment au-dessus des deux tas de pierres, à briller très bas. Il te rejoint plus loin, sans rien dire, et ne se pose pas." },
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVR_E_bete_blesse: { title: "Le bois mort",
    fx: { pv: -2 },
    text: [
      "Elles viennent ensemble, l'une par le haut, l'autre par le côté, et la deuxième te prend au bras avant que tu aies pu te retourner. Les crocs ne lâchent pas. Tu frappes, tu frappes encore, et à la fin c'est la pente qui vous sépare : vous roulez tous les trois dans les cailloux jusqu'au chemin, et les bêtes, étourdies, remontent dans le bois en boitant.",
      "Ton bras saigne, et le sang a une odeur de marécage. Tu le laves à l'eau de ta gourde, longuement, en serrant les dents, puis tu le bandes. Ça brûle toute la journée, et la nuit tu rêves que tu bois à une eau tiède.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVR_E_bete_fuite: { title: "Le bois mort",
    text: [
      "Tu recules, pas à pas, jusqu'au bord du chemin, puis tu te laisses glisser dans l'éboulis jusqu'au torrent. Les bêtes ne suivent pas. Elles restent sur le talus, à te regarder partir, et l'une d'elles s'assied, comme un chien qui attend son maître au bout d'un champ.",
      "Tu remontes sur le chemin un quart de lieue plus loin, trempé{e} jusqu'aux genoux. Le soleil passe derrière la Fenne et il fait froid d'un coup.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVR_E_bete_gloup: { title: "Le bois mort", with: "gloup",
    text: [
      "Gloup roule jusqu'au pied du talus et s'arrête là, tout petit, devant les deux bêtes qui pourraient l'avaler d'une bouchée. Il fait un bruit. Pas un mot, pas un cri : un bruit d'eau qui coule sous une pierre, très doux, qui monte et qui descend. Le chien noir baisse la tête jusqu'à lui et le renifle longtemps.",
      "Puis les deux bêtes se retournent et remontent dans le bois mort, sans hâte, et disparaissent entre les troncs gris. Gloup revient vers toi. Il tremble. Il refait, tout bas, le même bruit d'eau sous la pierre. Il connaît cette chanson-là, et il aurait préféré ne pas la connaître.",
    ],
    choices: [{ label: "Le prendre dans tes mains et reprendre la route", fx: { conf: { gloup: 5 } }, back: ROUTE }] },

  IVR_E_convoi: { title: "Les mulets de l'abbaye",
    text: [
      "Trois mulets chargés de sacs descendent vers toi, menés par un frère convers qui tire le premier par la bride et deux garçons qui suivent en tenant les autres. Le chemin, à cet endroit, a glissé dans la nuit : une coulée de boue et de pierres l'a coupé sur dix pas. Le premier mulet refuse d'avancer. Le frère tire, le mulet tire en sens inverse, les sacs penchent.",
      "« C'est le pain pour Vaux ! crie le frère en te voyant. Quarante miches et deux sacs de pois. Si ça tombe dans le ravin, il y a trois cents personnes qui ne mangent pas ce soir ! »",
    ],
    choices: [
      { label: "Dégager le passage à la main", test: { dom: "combat", diff: -10, label: "Des pierres et de la boue", help: [H_THA] }, win: { fx: { ep: ["perso", 1500], food: 1, fac: { ordre: 3 } }, to: "IVR_E_convoi_passe" }, lose: { fx: { pv: -1 }, to: "IVR_E_convoi_passe" } },
      { label: "Calmer le mulet et le mener toi-même", test: { dom: "nature", diff: -10, label: "Une bête qui a peur du vide", help: [H_COL, H_PIP] }, win: { fx: { ep: ["perso", 1500], food: 1 }, to: "IVR_E_convoi_passe" }, lose: { to: "IVR_E_convoi_sac" } },
      { label: "Leur souhaiter bonne chance", back: ROUTE },
    ] },
  IVR_E_convoi_passe: { title: "Les mulets de l'abbaye",
    text: [
      "Une heure plus tard, les trois mulets sont passés, et les sacs avec. Le frère convers te serre la main dans ses deux mains, et il te met d'office dans ta besace une miche encore tiède et un fromage de chèvre enveloppé de feuilles. « De la part de Frère Herbelin, dit-il, qui ne le saura pas. »",
      "Les garçons se retournent plusieurs fois en descendant. Ils te font signe. Ils ont l'air de penser qu'on ne voit pas tous les jours quelqu'un se battre contre une montagne pour du pain.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVR_E_convoi_sac: { title: "Les mulets de l'abbaye",
    text: [
      "Le mulet fait un écart au dernier moment, et un sac de pois passe par-dessus le bât et roule dans le ravin. Il éclate sur les rochers, quarante pieds plus bas. Le reste passe. Le frère convers regarde longtemps la tache verte au fond du ravin, puis il hausse les épaules.",
      "« Les pigeons mangeront, dit-il. Il faut bien que quelqu'un mange. » Il ne t'en veut pas. Ça ne rend pas la chose plus facile.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  IVR_E_neige: { title: "La première neige",
    text: [
      "Le ciel se ferme d'un coup, au milieu de l'après-midi, et la neige arrive sans prévenir, en flocons lourds et mouillés qui collent aux cils. En une heure, le chemin a disparu. Il n'y a plus que des pentes blanches, la paroi à ta droite, et le bruit du torrent quelque part en bas, à gauche, qu'il faut garder à gauche.",
      "Dans le blanc, une forme. Un enfant de dix ans peut-être, en sabots, avec une chèvre au bout d'une corde. Il pleure sans bruit, comme les enfants qui ont compris que pleurer ne sert à rien. Il a perdu le chemin de la bergerie de Montcel, dit-il, et la chèvre ne veut plus avancer.",
    ],
    choices: [
      { label: "Le ramener jusqu'à sa bergerie", test: { dom: "nature", diff: -10, label: "Retrouver un chemin sous la neige", help: [H_COL, H_PIP] },
        win: { fx: { ep: ["perso", 1500], time: 3 }, to: "IVR_E_neige_bergerie" }, lose: { fx: { time: 6, pv: -2 }, to: "IVR_E_neige_nuit" } },
      { label: "L'emmener avec toi et attendre que ça passe à l'abri de la paroi", fx: { time: 4, ep: ["perso", 1000] }, to: "IVR_E_neige_nuit" },
    ] },
  IVR_E_neige_bergerie: { title: "La bergerie de Montcel",
    text: [
      "La bergerie est à moins d'une demi-lieue, au-dessus du chemin, et tu la trouves au bruit des cloches et à l'odeur de fumée. Une femme sort en courant, sans manteau, et prend l'enfant et la chèvre dans ses bras en même temps. Elle te fait entrer. Il y a du lait chaud, du pain d'orge, et un feu de bouse sèche qui sent l'étable.",
      "« On redescend à Vaux à la fin de la semaine, dit-elle. Les sources de la montagne noircissent l'une après l'autre. Il n'y a plus que celle de l'abbaye. » Elle regarde le feu. « Mon père disait que la montagne était propre parce que les moines priaient pour elle. Je crois qu'ils prient moins bien, maintenant. »",
    ],
    choices: [{ label: "Reprendre la route quand la neige s'arrête", back: ROUTE }] },
  IVR_E_neige_nuit: { title: "Sous la paroi",
    text: [
      "Vous attendez sous un surplomb, serrés l'un contre l'autre, la chèvre entre vous pour la chaleur. L'enfant s'appelle Mathieu. Il te raconte toute la bergerie, chaque bête et son nom, pour ne pas avoir peur. Quand la neige s'arrête, il fait nuit, et la montagne est bleue sous la lune.",
      "Les cloches de la bergerie vous guident au matin. La mère de l'enfant ne dit pas merci : elle te serre le bras si fort que tu en gardes la marque. Puis tu redescends sur le chemin, dans la neige fraîche, où tes propres traces de la veille ont disparu.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
});

// ================================================================== HAUTECOMBE: the abbey, the hamlet, the inn, the master's room
Object.assign(P, {
  IVR_temple: { act: "IV", title: "Hautecombe", place: "hautecombe", hub: true, routes: true, backName: "le parvis de Hautecombe",
    fx: { reveal: "hautecombe", ep: ["seance", 1500] },
    text: [
      { first: true, text: "Hautecombe est au bout du chemin, là où la montagne ne veut plus qu'on monte. Une abbaye de pierre grise, adossée à la paroi, avec un clocher carré, un cloître, des granges, et au-dessus de tout cela, posé sur un épaulement du rocher comme une chose qu'on a oubliée là, un temple plus ancien que le reste : six piliers, un toit de lauzes, pas de murs. En dessous de l'abbaye, accroché à la pente, un bourg de douze feux, une auberge, un lavoir." },
      { first: true, text: "Le parvis est noir de monde. Des gens de la Sorbe, des familles entières assises sur leurs ballots, des vieux sur des brouettes, des enfants qui font la queue devant une porte d'où sort une odeur de soupe aux pois. Des frères en robe grise, et quelques sœurs venues des granges, passent entre eux avec des seaux. Personne ne crie. On attend, avec cette patience qui n'est plus de la patience mais de la fatigue." },
      { first: true, if: { has: "passe:aide" }, text: "Tu as déjà vu cette queue, ces visages, ces ballots. À Saint-Gilles-des-Prés, il y a sept ans, devant le temple. Tu sais qu'au bout de quelques jours on ne se plaint plus, et que c'est mauvais signe." },
      { again: true, when: "day", text: "Le parvis de Hautecombe, la queue devant la porte de la soupe, les frères avec leurs seaux, et au-dessus, sur son rocher, le temple des Six, ouvert au vent." },
      { again: true, when: "night", text: "Le parvis, la nuit. Les gens dorment sous le porche, serrés les uns contre les autres sous des couvertures communes. Une lanterne brûle dans le temple, là-haut, entre les piliers : celle du Grand Maître, qui ne dort presque plus." },
      { after: "IV:temple", text: "Depuis que tu as parlé avec le Grand Maître, les frères te saluent autrement. Ils baissent les yeux, ou ils les lèvent trop vite. Tu ne sais pas ce qu'Edrin leur a dit. Peut-être rien. Peut-être que ça se voit." },
      { if: { is: { enfants: "abbaye" } }, text: "Les cinq enfants de la combe jouent à la marelle sur les dalles du parvis. Babet a dessiné les cases avec un morceau de charbon. Elle t'a gardé une case, dit-elle." },
      { with: "pip", first: true, text: "Pip s'est arrêté en l'air, au milieu du parvis, et il regarde le temple sur son rocher. Il ne dit rien. Il ne bouge pas. Puis il revient sur ton épaule, plus près de ton cou que d'habitude." },
      { with: "aubin", first: true, text: "Frère Aubin regarde les frères avec leurs seaux, et ses mains bougent toutes seules, comme si elles voulaient prendre un seau elles aussi. « C'était comme ça, à Saint-Ivo, dit-il. Les jours de foire. Je portais l'eau. »" },
    ],
    choices: [
      { label: "La porte de l'abbaye, et le frère portier", hide: { seen: "IVR_portier" }, to: "IVR_portier" },
      { label: "Le temple des Six, sur son rocher", to: "IVR_nef" },
      { label: "Demander audience au Grand Maître", big: true, hide: { any: [{ seen: "IVR_edrin" }, { has: "IV:temple" }] }, to: "IVR_vepres" },
      { label: "Retourner voir le Grand Maître avec ce que tu as trouvé", big: true, if: { clues: "M", min: 3 }, why: "Le Grand Maître attend que tu en saches assez pour le croire : il te faut au moins trois indices sur Malvoran.", hide: { any: [{ not: { has: "IVR:partiel" } }, { has: "R:revele" }] }, to: "IVR_edrin_retour" },
      { label: "Porter les trois clés du Sceau au temple", big: true, if: TROIS, why: "Il faudrait les trois clés, en main ou confiées à ceux qui les gardent.", hide: { any: [{ not: { has: "IV:temple" } }, { seen: "IVR_reliques" }] }, to: "IVR_reliques_appel" },
      { label: "Le bourg et l'auberge du Chamois", to: "IVR_bourg" },
      { label: "La source de l'abbaye", to: "IVR_source" },
      { label: "Le cloître des pénitents", to: "IVR_cloitre" },
      { label: "Monter à la combe, au-dessus de l'abbaye", hide: { any: [{ not: { any: [{ seen: "IVR_leg_mere" }, { seen: "IVR_portier" }] } }, { has: "enfants:sort" }] }, to: "IVR_combe" },
      { label: "La crypte du temple", hide: { any: [{ not: { any: [{ has: "IVR:partiel" }, { seen: "IVR_nef" }] } }, { clue: "ivr_crypte" }] }, to: "IVR_crypte_porte" },
    ] },
  IVR_portier: { act: "IV", title: "Frère Isembert", place: "hautecombe",
    fx: { meet: "ivr_isembert", questSeen: "IV_enfants" },
    text: [
      "Le portier de l'abbaye est un homme sans âge, très maigre, avec un nez qui a été cassé et mal remis, et un registre ouvert sur les genoux où il note, d'une écriture minuscule, le nom de chaque famille qui monte. Frère Isembert. Il a l'air de n'avoir jamais été surpris par rien, et d'avoir décidé de ne pas commencer maintenant.",
      "« Le Grand Maître vous recevra après les vêpres, dit-il sans lever les yeux, quand tu lui as dit ton nom. Il a donné l'ordre en septembre. Je l'ai noté. » Il tourne une page. « Il reçoit dans le temple. Il n'en sort plus. Ne lui parlez pas trop fort, il entend très bien. Ne lui parlez pas trop bas non plus, il fait semblant de ne pas entendre. »",
      "Il pose sa plume. « Si vous avez des bras, on a de quoi les occuper. La source, il faut la garder jour et nuit : les gens voudraient en remplir des tonneaux pour redescendre. Le cloître est plein de pénitents, dont un qui ne dit rien et casse des pierres depuis un mois. Et il y a des enfants de Vaux, cinq, qu'on a vus passer au-dessus de l'abbaye il y a trois jours, vers la combe et son lac. Ils ne sont pas redescendus. » Il reprend sa plume. « Les frères ne montent plus à la combe. L'eau du lac a changé. »",
      { if: { has: "passe:ordre" }, text: "Il voit ta main droite, et il fait, très vite, le signe de la main ouverte, comme on salue un frère. Puis il se remet à écrire comme si de rien n'était." },
    ],
    choices: [
      { label: "Demander audience au Grand Maître dès ce soir", big: true, hide: { seen: "IVR_edrin" }, to: "IVR_vepres" },
      { back: "IVR_temple" },
    ] },

  IVR_bourg: { act: "IV", title: "Le bourg de Hautecombe", place: "hautecombe", backName: "le bourg",
    text: [
      { first: true, text: "Le bourg descend la pente en escalier : douze maisons de pierre sèche, des toits de lauzes lestés de grosses pierres contre le vent, des tas de bois sous chaque auvent. On y taille la pierre pour l'abbaye, on y fait du fromage, on y loge les pèlerins qui montent au temple des Six à la Saint-Ivo. L'auberge du Chamois est la seule maison à deux étages, avec une enseigne de bois peint où le chamois a perdu une corne." },
      { first: true, text: "Le lavoir, en bas du bourg, est vide. Il est plein d'une eau grise et immobile, et quelqu'un a cloué des planches en travers pour qu'on ne puisse plus y tremper le linge. Sur l'une des planches, à la craie : *NE PARLEZ PAS À L'EAU*." },
      { again: true, text: "Le bourg de Hautecombe, ses toits lestés de pierres, l'enseigne du Chamois, et le lavoir condamné en bas de la pente." },
    ],
    choices: [
      { label: "L'auberge du Chamois", to: "IVR_chamois" },
      { back: "IVR_temple" },
    ] },
  IVR_chamois: { act: "IV", title: "L'auberge du Chamois", place: "hautecombe", backName: "la salle du Chamois", shop: "ivr_chamois",
    fx: { meet: "ivr_gisquette" },
    taverne: { mise: 5, adversaire: "un tailleur de pierre de Hautecombe" },
    text: [
      { first: true, text: "La salle du Chamois est basse, enfumée, pleine de tailleurs de pierre qui boivent du vin chaud en silence. L'aubergiste est une petite femme ronde aux bras rouges, une cuillère de bois à la main, qui sert, encaisse, gronde et rit dans le même mouvement. Dame Gisquette. Quand tu lui demandes si une femme seule a logé chez elle à la fin de l'été, la cuillère s'arrête." },
      { first: true, text: "« La chambre trois, dit-elle. La dame de la chambre trois. » Elle s'essuie les mains à son tablier, deux fois, alors qu'elles sont sèches. « Elle est restée un mois. Elle écrivait. Elle montait au temple tous les jours, elle parlait avec le Grand Maître des heures entières, et le soir elle écrivait encore. Et puis un matin elle est partie, vers la vallée. Elle avait payé un an d'avance. Un an ! Elle m'a dit de garder la chambre fermée, et de ne l'ouvrir qu'à quelqu'un qui me dirait ce qu'elle disait toujours. »" },
      { first: true, text: "« Je ne sais pas ce qu'elle disait toujours, ajoute Gisquette plus bas. Et je ne l'ouvre plus, de toute façon. Depuis la Saint-Michel, il y a de l'eau qui passe sous la porte, la nuit. De l'eau noire. Je la lave le matin. Le lendemain il y en a encore. Il n'y a pas de fenêtre ouverte, il n'y a pas de pluie. » Elle se signe avec sa cuillère." },
      { again: true, text: "Dame Gisquette sert le vin chaud aux tailleurs de pierre. Elle te fait signe de la cuillère : une place près du feu, si tu veux." },
      { if: { has: "maitre:hauberte" }, first: true, text: "« Une grande femme, dit-elle encore, maigre, une balafre, qui marchait comme un soldat et qui mangeait comme un oiseau. Elle n'avait pas d'épée. Elle avait un bâton. Je n'ai jamais vu quelqu'un tenir un bâton comme ça. »" },
      { if: { has: "maitre:ortie" }, first: true, text: "« Une vieille, dit-elle encore, avec un foulard, qui sentait la menthe et la fumée. Elle a soigné le pied de mon garçon avec une herbe qu'elle avait dans sa poche. Il ne boite plus. Je ne lui ai jamais demandé son nom. Elle ne l'aurait pas dit. »" },
      { if: { has: "maitre:maelle" }, first: true, text: "« Une dame avec des lunettes, dit-elle encore, qui avait des rouleaux de cartes plein une malle. Elle a mesuré toute la salle avec un fil à nœuds, pour rien, pour s'occuper, le premier soir. Elle disait que ma salle penchait de deux pouces vers la cave. C'est vrai. »" },
    ],
    choices: [
      { label: "« Ne prends rien que tu ne saurais rendre. »", hide: { seen: "IVR_chambre" }, fx: { ep: ["perso", 2000] }, to: "IVR_chamois_mot" },
      { label: "Monter de nuit avec la clé d'Anselme", if: { item: "ivr_cle" }, why: "Il te faudrait la clé de la chambre trois.", hide: { seen: "IVR_chambre" }, to: "IVR_chamois_cle" },
      { label: "Attendre la nuit et forcer la porte de la chambre trois", hide: { seen: "IVR_chambre" }, test: { dom: "discretion", diff: -20, label: "Un escalier de bois qui grince", help: [H_PIP, { if: { item: "pied_de_biche" }, v: 10 }] }, win: { fx: { ep: ["perso", 1500] }, to: "IVR_chamois_nuit" }, lose: { to: "IVR_chamois_surprise" } },
      { label: "« Une serrure d'auberge ? Laisse-moi faire », dit Coliane", who: "coliane", hide: { seen: "IVR_chambre" }, fx: { conf: { coliane: 3 }, ep: ["perso", 1500] }, to: "IVR_chamois_nuit" },
      { back: "IVR_bourg" },
    ] },
  IVR_chamois_mot: { act: "IV", title: "Ce qu'elle disait toujours", place: "hautecombe",
    text: [
      "Tu le dis sans y penser, ou plutôt en y pensant trop : c'était la dernière ligne de la lettre qui t'a envoyé{e} aux Trois-Bornes, il y a des mois, et c'était avant cela ce que ta maîtresse te répétait à chaque départ, chaque fois que tu partais seul{e} pour la première fois quelque part. *Ne prends rien que tu ne saurais rendre.*",
      "Dame Gisquette pose sa cuillère. Elle te regarde longtemps, comme si elle cherchait sur ton visage quelqu'un d'autre. « C'est ça, dit-elle. C'est exactement ça. Elle le disait à mon garçon quand il volait des pommes. » Elle décroche une clé d'un clou derrière le comptoir. « Je monte avec vous. Je ne rentre pas. Mais je monte avec vous. »",
    ],
    choices: [{ label: "Monter à la chambre trois", big: true, to: "IVR_chambre" }] },
  IVR_chamois_cle: { act: "IV", title: "La clé du colporteur", place: "hautecombe", takes: "night",
    text: [
      "Tu attends que la salle se vide et que Gisquette ait couvert le feu. L'escalier est raide, les marches creusées au milieu par deux siècles de pèlerins. Au premier, trois portes. Sous la troisième, sur le plancher, une flaque noire et luisante, large comme une main, que le bois ne boit pas.",
      "La clé d'Anselme entre dans la serrure, résiste, et tourne. Celle qu'avait ta maîtresse, sans doute. Elle l'avait emportée en partant vers la vallée, et quelque part entre ici et le lac de Morteau, elle l'a perdue, ou on la lui a prise, ou elle l'a échangée contre un bol de soupe à un colporteur qui passait. Tu ne le sauras jamais.",
    ],
    choices: [{ label: "Entrer dans la chambre trois", big: true, to: "IVR_chambre" }] },
  IVR_chamois_nuit: { act: "IV", title: "La chambre trois, la nuit", place: "hautecombe", takes: "night",
    text: [
      "Tu attends que la salle se vide et que Gisquette ait couvert le feu. L'escalier est raide, les marches creusées au milieu par deux siècles de pèlerins, et chacune a sa façon de grincer ; tu les prends par les bords, contre le mur. Au premier, trois portes. Sous la troisième, sur le plancher, une flaque noire et luisante, large comme une main, que le bois ne boit pas.",
      { with: "coliane", text: "Coliane s'accroupit devant la serrure, sort de sa manche deux crochets de fer qu'elle a dû se faire à Merle, et la serrure cède avec un petit bruit sec, presque poli. « Les aubergistes achètent toutes la même, chuchote-t-elle. Le même serrurier de foire, d'un bout à l'autre des Marches. »" },
      { without: "coliane", text: "La serrure est une serrure d'auberge, de celles qu'un serrurier de foire vend par douzaines. Il te faut un moment, et un peu de patience, et le pêne cède avec un bruit sec qui te paraît énorme dans la maison endormie. Personne ne bouge en bas." },
    ],
    choices: [{ label: "Entrer dans la chambre trois", big: true, to: "IVR_chambre" }] },
  IVR_chamois_surprise: { act: "IV", title: "La cuillère", place: "hautecombe", takes: "night",
    text: [
      "La quatrième marche grince, longuement, d'un bout à l'autre de la maison. Une porte s'ouvre en bas, une chandelle monte, et Dame Gisquette apparaît au pied de l'escalier en chemise de nuit, sa cuillère de bois à la main comme une masse d'armes. Elle te regarde. Elle regarde la porte de la chambre trois. Elle regarde la flaque noire sous la porte.",
      "« Vous la connaissiez, dit-elle enfin. C'est ça ? » Elle n'attend pas ta réponse. Elle soupire, monte les marches, et sort de la poche de sa chemise une clé, qu'elle te tend. « Si vous la connaissiez, vous avez plus le droit que moi. Je ne rentre pas. Et demain vous me laverez ce plancher. »",
    ],
    choices: [{ label: "Entrer dans la chambre trois", big: true, to: "IVR_chambre" }] },

  IVR_chambre: { act: "IV", title: "La chambre trois", place: "hautecombe", backName: "la chambre trois",
    fx: { ep: ["seance", 2000] },
    text: [
      "La chambre est petite, propre, glacée. Un lit étroit fait au carré, une table sous la lucarne, une chaise, une malle, une cuvette sur un trépied, et à côté de la cuvette, un broc de faïence. Une couche de poussière fine sur tout, sauf sur le broc. Le broc est plein jusqu'au bord d'une eau noire et parfaitement lisse. C'est de lui que vient la flaque : l'eau passe par-dessus le bord, lentement, goutte après goutte, coule le long du trépied et file sous la porte. Elle ne baisse pas.",
      { if: { has: "maitre:hauberte" }, text: "Sur la table, une pierre à aiguiser, usée en creux par des années de lame. Sur la chaise, une vieille paire de bottes de cavalier, ressemelées trois fois. Contre le mur, un échiquier de voyage, les pièces rangées dans leur boîte sauf une, la reine blanche, posée seule au milieu des cases. Tu la reconnais. Hauberte jouait toujours la reine trop tôt, et elle gagnait quand même." },
      { if: { has: "maitre:ortie" }, text: "Aux poutres, des bouquets d'herbes séchées, pendus tête en bas : sauge, menthe d'eau, prêle, millepertuis, et une herbe grise que tu ne connais pas. Sur la table, un mortier de pierre, un pilon, des sachets de toile fermés d'un nœud qu'elle t'a appris. L'odeur de la chambre est l'odeur de sa cabane des marais. Il te faut un moment avant de pouvoir respirer normalement." },
      { if: { has: "maitre:maelle" }, text: "Les murs sont couverts de cartes, épinglées les unes sur les autres : la Sorbe, le Val d'Anse, le massif de la Fenne en trois relevés successifs, chacun plus précis que le précédent. Sur le dernier, sous le glacier, un point à l'encre rouge, et à côté, de son écriture penchée : *ici*. Ses lunettes de rechange sont sur la table, pliées, à côté de l'encrier sec." },
      { with: "pip", text: "Pip ne veut pas entrer. Il reste sur le seuil, sa lumière toute pâle, et il regarde le broc. « Il nous voit, dit-il. Le broc. Il y a quelqu'un dedans qui nous voit. »" },
      { with: "gloup", text: "Gloup va droit au broc et se dresse dessous, sur la pointe de sa gelée, pour regarder l'eau. Puis il se laisse retomber et va se cacher sous le lit." },
    ],
    choices: [
      { label: "Vider le broc par la lucarne", to: "IVR_chambre_broc" },
      { label: "Chercher ce qu'elle a laissé, en pensant comme elle", test: { dom: "savoir", diff: -10, label: "Où elle cacherait une lettre", help: [{ if: { has: "maitre:maelle" }, v: 15 }, H_CHA] }, win: { fx: { ep: ["perso", 2000] }, to: "IVR_lettre_trouvee" }, lose: { to: "IVR_chambre_eau" } },
      { label: "« Je regarde avec ma lumière », dit Pip", who: "pip", fx: { conf: { pip: 5 }, ep: ["perso", 2000] }, to: "IVR_chambre_pip" },
    ] },
  IVR_chambre_broc: { act: "IV", title: "Le broc", place: "hautecombe",
    text: [
      "Tu prends le broc par l'anse. Il est tiède. Tu ouvres la lucarne et tu vides l'eau dans le vide, sur la pente, où elle tombe sans bruit. Le broc est vide. Tu le reposes sur le trépied.",
      "Quand tu te retournes, il est de nouveau plein. Pas en se remplissant : plein, simplement, comme s'il n'avait jamais cessé de l'être. À la surface de l'eau, ton reflet a un temps de retard sur toi, et il sourit un peu plus que toi.",
      { if: { mark: { min: 2 } }, text: "Ta main gauche a envie d'y aller. Elle ne te demande pas ton avis : elle se lève toute seule, à demi, et tu dois la reprendre avec l'autre et la serrer contre toi jusqu'à ce qu'elle se tienne tranquille." },
    ],
    choices: [
      { label: "Laisser le broc, et chercher ce qu'elle a laissé", test: { dom: "savoir", diff: -10, label: "Où elle cacherait une lettre", help: [{ if: { has: "maitre:maelle" }, v: 15 }, H_CHA] }, win: { fx: { ep: ["perso", 2000] }, to: "IVR_lettre_trouvee" }, lose: { to: "IVR_chambre_eau" } },
      { label: "« Je regarde avec ma lumière », dit Pip", who: "pip", fx: { conf: { pip: 5 }, ep: ["perso", 2000] }, to: "IVR_chambre_pip" },
    ] },
  IVR_chambre_pip: { act: "IV", title: "La lumière de Pip", place: "hautecombe", with: "pip",
    text: [
      "Pip entre enfin, en rasant le plafond, aussi loin du broc qu'il peut. Il fait le tour de la chambre très lentement, et sa lumière, en passant, fait sortir de l'ombre ce qu'on ne voyait pas : les éraflures du plancher, une tache de cire, un cheveu blanc sur l'oreiller. Puis il s'arrête au-dessus de l'âtre éteint, et descend, et descend encore, jusqu'à toucher la pierre du foyer.",
      "« Là, dit-il. Quelqu'un l'a soulevée. Plusieurs fois. Le mortier est neuf. » Tu glisses ta lame sous la pierre. Elle bascule. Dessous, dans un creux de la taille d'un livre, un paquet enveloppé de toile cirée et ficelé serré.",
    ],
    choices: [{ label: "Défaire la ficelle", big: true, to: "IVR_lettre" }] },
  IVR_chambre_eau: { act: "IV", title: "La voix du broc", place: "hautecombe",
    fx: { pv: -2 },
    text: [
      "Tu ouvres la malle : des vêtements, une couverture, rien. Tu soulèves le matelas : de la paille. Tu passes la main sous la table, sous la chaise, le long des poutres. Et pendant que tu cherches, l'eau du broc se met à parler, tout bas, avec une voix que tu connais. Celle de ta maîtresse. Elle dit ton nom, puis : « Tu ne trouveras rien. J'ai tout emporté. Viens plutôt. Viens me voir. »",
      "Tu as la tête qui tourne. Tu te retrouves à genoux devant le trépied sans savoir comment tu y es arrivé{e}, le visage à une main de l'eau, et c'est la douleur qui te réveille : tu t'es entaillé la paume sur le bord ébréché de la cuvette. Le sang tombe dans l'eau noire et n'y fait aucune couleur.",
      "Tu recules jusqu'à l'âtre et tu t'adosses à la pierre du foyer pour reprendre ton souffle. Sous ta main, la pierre bouge. Elle n'est pas scellée. Tu la soulèves : dessous, dans un creux de la taille d'un livre, un paquet enveloppé de toile cirée et ficelé serré.",
    ],
    choices: [{ label: "Défaire la ficelle", big: true, to: "IVR_lettre" }] },
  IVR_lettre_trouvee: { act: "IV", title: "La pierre du foyer", place: "hautecombe",
    text: [
      "Tu ne cherches pas dans la malle ni sous le matelas. Elle ne mettait jamais rien là où l'on cherche d'abord : elle te l'a assez répété. Elle mettait les choses dans ce qu'on utilise sans le regarder. Tu t'agenouilles devant l'âtre éteint. La pierre du foyer est propre, trop propre pour une cheminée qui a servi tout un mois, et le joint de mortier, d'un côté, est plus clair que le reste.",
      "Tu glisses ta lame sous la pierre. Elle bascule. Dessous, dans un creux de la taille d'un livre, un paquet enveloppé de toile cirée et ficelé serré, avec un nœud que tu reconnais : c'est elle qui te l'a appris.",
    ],
    choices: [{ label: "Défaire la ficelle", big: true, to: "IVR_lettre" }] },
});

// ------------------------------------------------------------------ the old master's letter
Object.assign(P, {
  IVR_lettre: { act: "IV", title: "La lettre", place: "hautecombe",
    fx: { item: "lettre_maitre", clue: "m_lettre", ep: ["histoire", 3000] },
    text: [
      "Sous la toile cirée, une liasse de feuillets pliés en deux, cousus au dos d'un fil de lin. Sur le premier, ton nom, de sa main, et dessous : *Si je ne reviens pas. Si je reviens et que je ne suis plus moi, aussi.* Tu t'assieds sur le lit étroit. La lucarne donne assez de jour pour lire.",
      { if: { has: "maitre:hauberte" }, text: "*Je n'ai jamais su écrire. Tu le sais, tu as lu mes listes de courses. Alors je vais faire court, comme à l'escrime : d'abord la garde, ensuite le coup. La garde, c'est que je t'aime comme on aime quelqu'un qu'on a vu tomber cent fois et se relever cent une. Le coup, le voici.*" },
      { if: { has: "maitre:ortie" }, text: "*Je n'ai pas la main pour les lettres, tu le sais, j'ai la main pour les racines. Mais il y a des choses qu'on ne peut pas dire à voix haute dans une cabane où l'eau écoute sous le plancher. Alors je les écris ici, dans une chambre en haut d'une montagne, avec une cuvette pleine d'eau que je surveille du coin de l'œil. Tu ris. Tu as raison. Écoute quand même.*" },
      { if: { has: "maitre:maelle" }, text: "*Tu m'as souvent reproché d'écrire trop long. Pour une fois, je vais essayer d'écrire juste. J'ai passé ma vie à corriger des cartes fausses. Je viens de comprendre que celle sur laquelle nous vivons tous est fausse depuis quatre cents ans, et que c'est voulu.*" },
      "*J'ai passé un mois à monter chaque jour au temple, et à parler avec un vieil homme qui ne voulait rien me dire et qui m'a tout dit. Je n'écris pas ce qu'il m'a dit : c'est à lui de le dire, et à toi de l'entendre de sa bouche. J'écris seulement ce que j'en ai compris, moi, et ce que je ne pourrai plus jamais ne pas savoir. Ils étaient six. Le sixième n'a jamais trahi personne. C'est nous qui l'avons trahi, et nous continuons tous les jours.*",
      "*Je t'ai envoyé{e} aux Trois-Bornes parce que j'avais peur d'y aller. Je pensais qu'il y avait une fissure sous le château, et je pensais qu'il fallait quelqu'un qui ne sache rien pour la regarder sans y entendre ce que j'y entendrais, moi. C'est lâche. C'est aussi ce que j'ai fait de mieux cette année. Je descends maintenant à Saint-Ivo, au lac de Morteau, écouter les moines noyés. On dit qu'ils savent. Il y a une voix dans l'eau, depuis l'été, qui me parle avec la voix de quelqu'un que j'ai perdu. Si elle me prend, ne crois rien de ce que je te dirai après.*",
      { if: { has: "maitre:hauberte" }, text: "*J'ai quitté l'Ordre il y a vingt ans parce que j'avais lu, dans la bibliothèque du Val, un registre que je n'aurais pas dû lire. Je suis partie sans rien dire à personne. J'ai cru que partir, c'était refuser. Ce n'était que se taire ailleurs. Pardonne-moi de t'avoir appris à te battre et jamais pourquoi. Tiens ta garde haute. Ne frappe jamais quelqu'un qui tient une porte.*" },
      { if: { has: "maitre:ortie" }, text: "*Je t'ai appris à regarder l'eau avant de la boire. Je n'ai pas su regarder la mienne. La voix qui me parle a celle de ma sœur, celle qui s'est noyée dans les marais quand j'avais seize ans, et je sais que ce n'est pas elle, et j'y retourne quand même tous les soirs. Pardonne-moi d'être vieille et bête. Mets de la sauge dans tes bottes. Ne laisse personne pleurer seul dans le noir trop longtemps : ça finit par pousser.*" },
      { if: { has: "maitre:maelle" }, text: "*J'ai quitté le Cercle il y a quinze ans en disant que c'était pour une affaire d'argent. C'était pour une page. J'avais trouvé, au registre de Ferrance, la place d'une page arrachée, et je l'ai dit au recteur, et le recteur m'a dit que je pouvais garder ma chaire ou ma curiosité. J'ai gardé ma chaire deux ans de plus. Pardonne-moi de t'avoir appris à lire le pays et de ne t'avoir jamais montré où il était déchiré.*" },
      "Les dernières lignes sont d'une écriture qui tremble, plus grande, comme écrite debout ou dans le noir. *Si tu lis ceci, va voir Edrin. Ne le laisse pas mourir avec. Et regarde bien les mains, partout où tu passes : compte-les.*",
      { if: { is: { maitre: "sauve" } }, text: "Elle est vivante, à Merle, dans la grange de l'église. Elle ne sait plus écrire. Elle a écrit ceci avant, d'une main sûre, en sachant déjà ce qu'elle allait perdre. Tu replies les feuillets avec beaucoup de soin, pour pouvoir les lui lire un jour à voix haute, quand elle sera capable de les entendre." },
      { if: { is: { maitre: "mort" } }, text: "Tu as enterré la femme qui a écrit ces lignes sur une colline au-dessus de Merle, sans nom sur la pierre. Tu l'as tuée de tes mains, au bord du gué, quand elle ne savait plus qui elle était. Elle te demandait de ne rien croire de ce qu'elle dirait après. Elle ne t'avait pas demandé de ne rien faire. Tu restes longtemps sur le lit, la lettre sur les genoux, sans la relire." },
      { if: { is: { maitre: "perdu" } }, text: "Elle est quelque part dans l'eau, maintenant. Tu l'as vue s'y enfoncer, au gué de l'Isarde, et tu n'as pas pu la retenir. *Si elle me prend, ne crois rien de ce que je te dirai après.* Tu relis la phrase trois fois. Elle te l'avait dit. Elle savait. Et elle y est allée quand même." },
      { if: { is: { maitre: null } }, text: "Tu ne sais pas où elle est. Tu as perdu sa trace au lac de Morteau, et tout ce qui t'en revient depuis, ce sont des bruits, des ombres, des choses vues dans l'eau. Tu replies les feuillets. Tu les mets contre ta poitrine, sous ta chemise." },
    ],
    choices: [{ label: "Replier la lettre", big: true, to: "IVR_lettre_apres" }] },
  IVR_lettre_apres: { act: "IV", title: "Après la lettre", place: "hautecombe",
    text: [
      "Tu ne sais pas combien de temps tu restes assis{e} sur le lit. La lumière a changé dans la lucarne quand tu te lèves. Le broc, sur son trépied, déborde toujours, goutte après goutte.",
      { with: "thavary", text: "Thavary est restée sur le seuil tout le temps de ta lecture, le dos tourné, pour te laisser seul{e} sans te laisser seul{e}. « Une maîtresse qui demande pardon à son élève, dit-elle sans se retourner. Ma grand-mère aurait dit que c'est le monde à l'envers. Moi, je dis que c'est rare. » Elle se tait. « Garde-la bien. »" },
      { with: "coliane", text: "Coliane te prend la lettre des mains, sans demander, et la lit, en remuant les lèvres sur les mots longs. Elle te la rend. « Elle avait peur, dit-elle. Et elle y est allée. » C'est, chez Coliane, la plus haute forme d'éloge, et elle ne la donne presque jamais." },
      { with: "aubin", text: "Frère Aubin a les yeux mouillés et ne s'en cache pas. « *Ne laisse personne pleurer seul dans le noir trop longtemps* », répète-t-il, ou quelque chose d'approchant, même si ce n'est pas ce que dit ta lettre. Il dit qu'il a entendu ça quelque part. Il ne se souvient plus où." },
      { with: "charline", text: "Charline regarde les cartes, l'échiquier, les herbes, tout ce qui reste d'une personne dans une chambre d'auberge. « Mon père gardait une boîte, dit-elle. Avec ce qu'il avait écrit avant le feu, quand il avait encore ses mains. Il ne l'ouvrait jamais. Toi, ouvre la tienne de temps en temps. »" },
      { with: "pip", text: "Pip est entré, finalement. Il s'est posé sur la lettre, sur ton genou, et il y est resté. *Compte les mains*, dit-il tout bas. « J'aime bien qu'elle dise ça. Les mains, c'est important. Je ne sais pas pourquoi. »" },
    ],
    choices: [
      { label: "Briser le broc", hide: { has: "IVR:broc" }, to: "IVR_broc" },
      { label: "Laisser la chambre comme elle était, et redescendre", back: "IVR_chamois" },
    ] },
  IVR_broc: { act: "IV", title: "Le broc", place: "hautecombe",
    fx: { flag: "IVR:broc", ep: ["perso", 1500] },
    text: [
      "Tu prends le broc par l'anse et tu le jettes contre le mur. Il éclate. L'eau noire gicle sur les cartes, sur l'échiquier, sur le plancher, et pendant un instant tu crois l'entendre, une seule note, haute, comme quelqu'un qui retient un cri. Puis l'eau s'en va. Elle ne sèche pas : elle s'en va, elle se retire dans les fentes du plancher, et le bois redevient sec et gris sous tes yeux.",
      "Il ne reste que des tessons de faïence blanche. Sur l'un d'eux, un petit bouquet bleu peint à la main, que tu n'avais pas remarqué sous l'eau. Tu le ramasses. Tu ne sais pas pourquoi. Tu le mets dans ta poche.",
      "En bas, le lendemain, Dame Gisquette te dira que la flaque n'est pas revenue sous la porte. Elle te servira ton vin chaud sans le faire payer, et le jour suivant aussi.",
    ],
    choices: [{ label: "Redescendre", back: "IVR_chamois" }] },
});

// ------------------------------------------------------------------ the temple of the Six and its crypt
Object.assign(P, {
  IVR_nef: { act: "IV", title: "Le temple des Six", place: "hautecombe", backName: "le temple des Six",
    text: [
      { first: true, text: "On monte au temple par un escalier taillé dans le rocher, cent marches sans rampe, glissantes de givre. En haut, le vent. Le temple n'a pas de murs : six piliers de pierre grise portent un toit de lauzes à six pans, et entre les piliers, on voit la montagne, la vallée, le ciel. Le sol est une seule dalle immense, polie par les genoux, avec au milieu une table de pierre ronde et six sièges autour, taillés dans la même pierre." },
      { first: true, text: "Chaque pilier porte une figure sculptée, en haut, sous le chapiteau, grandeur d'homme. Un roi avec une épée : Aldar. Une femme avec un livre : Orine. Un chevalier avec un anneau levé : Thavar. Une forgeronne avec un marteau et un clou : Hildre. Un moine avec une cloche sans battant : Ivo. Le sixième pilier, celui qui fait face à l'est et à la Fenne, a eu une figure aussi. On l'a fait sauter au burin, très soigneusement, et il ne reste qu'une forme claire sur la pierre grise, la place d'un homme." },
      { first: true, text: "Entre deux piliers, sur un lit de camp, sous trois couvertures et un manteau gris, un vieil homme dort ou fait semblant. Une lanterne brûle à côté de lui, et un frère, assis par terre, lit à voix basse un livre d'heures." },
      { again: true, text: "Le temple des Six, ouvert au vent. Les six piliers, la table ronde, le pilier martelé face à la Fenne. Le lit de camp du Grand Maître, entre deux piliers, et la lanterne." },
      { with: "thavary", first: true, text: "Thavary s'arrête devant le pilier de Thavar et lève les yeux vers la figure à l'anneau. Elle la regarde longtemps, sans expression. Puis elle se détourne, et elle ne la regarde plus." },
      { with: "charline", first: true, text: "Charline a posé la main à plat sur le pilier d'Hildre, sur la pierre froide, à hauteur du clou sculpté. « Mon arrière-arrière-je-ne-sais-combien-de-fois-grand-mère, dit-elle. Elle a de grosses mains. Comme mon père. Comme lui avant. »" },
    ],
    choices: [
      { label: "Regarder la voûte, au-dessus de la table", hide: { clue: "ivr_fresque" }, to: "IVR_voute" },
      { label: "Approcher du lit du Grand Maître", hide: { any: [{ seen: "IVR_edrin" }, { has: "IV:temple" }] }, to: "IVR_vepres" },
      { label: "T'asseoir près du Grand Maître", hide: { not: { has: "IV:temple" } }, to: "IVR_edrin_veille" },
      { back: "IVR_temple" },
    ] },
  IVR_voute: { act: "IV", title: "La voûte", place: "hautecombe",
    text: [
      "Le dessous du toit n'est pas de lauzes nues : c'est une voûte de plâtre, blanchie à la chaux, toute blanche, sans un ornement, ce qui est étrange dans un temple où chaque pierre est sculptée. Mais la chaux est vieille. Elle s'écaille par endroits, au-dessus de la table, et dans les écailles, on devine des couleurs : du rouge, un bleu passé, un or terni. Il y a eu une peinture, là-haut, et on l'a recouverte.",
      "La voûte est à trois toises du sol. Pour voir ce qu'il y a dessous la chaux, il faudrait de la lumière, de près, ou monter, ou savoir où regarder.",
    ],
    choices: [
      { label: "Monter sur la table de pierre et gratter la chaux", test: { dom: "savoir", diff: -10, label: "Retrouver une peinture sous la chaux", help: [H_CHA, { if: { has: "passe:cercle" }, v: 10 }] }, win: { fx: { clue: "ivr_fresque", ep: ["perso", 2500] }, to: "IVR_fresque" }, lose: { to: "IVR_voute_rate" } },
      { label: "« Je monte voir », dit Pip", who: "pip", fx: { clue: "ivr_fresque", conf: { pip: 5 }, ep: ["perso", 2500] }, to: "IVR_fresque" },
      { label: "« Un peu de chaleur, et la chaux tombera toute seule », dit Charline", who: "charline", fx: { clue: "ivr_fresque", conf: { charline: 5 }, ep: ["perso", 2500] }, to: "IVR_fresque" },
      { back: "IVR_nef" },
    ] },
  IVR_voute_rate: { act: "IV", title: "La voûte", place: "hautecombe",
    text: [
      "Tu montes sur la table, tu grattes de la pointe de ta lame, et la chaux tombe par plaques, mais trop vite, emportant la peinture avec elle. Il ne te reste dans la main que des écailles colorées, un bout de visage, un morceau de manteau rouge. Un frère arrive en courant par l'escalier et te fait descendre, poliment et fermement.",
      "« On ne monte pas sur la table des Six », dit-il. Il ramasse les écailles une à une, avec un soin qui te fait honte, et les met dans sa manche. Il ne te demande pas ce que tu cherchais. Il a l'air de le savoir, et de ne pas vouloir le savoir.",
    ],
    choices: [
      { label: "Revenir plus tard, avec de la lumière", back: "IVR_nef" },
    ] },
  IVR_fresque: { act: "IV", title: "Sous la chaux", place: "hautecombe",
    text: [
      { with: "pip", text: "Pip monte jusqu'à la voûte et s'y colle, tout près, et sa lumière, rasante, fait sortir du blanc ce que la chaux n'a pas tout à fait caché : des reliefs, des traits, des couleurs fantômes. Il glisse le long de la voûte, lentement, et la peinture apparaît derrière lui comme un chemin qu'il trace." },
      { with: "charline", without: "pip", text: "Charline lève la main, paume ouverte, et une chaleur sèche monte vers la voûte, pas une flamme, un souffle de four. La vieille chaux craque, gonfle, et tombe en neige fine sur la table de pierre. Dessous, les couleurs." },
      { without: ["pip", "charline"], text: "Tu grattes doucement, du plat de la lame, en suivant les fissures de la chaux plutôt qu'en les forçant. Elle se détache en écailles fines, et dessous, la peinture tient." },
      "C'est une ronde. Six figures se tiennent par la main tout autour de la voûte, peintes grandeur nature, dans des couleurs qui ont dû être vives. Aldar, Orine, Thavar, Hildre, Ivo, chacun avec son attribut. Et le sixième, entre Ivo et Aldar, qui ne tient la main de personne : un jeune homme agenouillé, un bol d'herbes dans les mains, le dos contre une porte. Son visage a été gratté. Le reste non.",
    ],
    choices: [{ back: "IVR_nef" }] },

  IVR_crypte_porte: { act: "IV", title: "La grille de la crypte", place: "hautecombe", backName: "la grille de la crypte",
    fx: { meet: "ivr_amaury" },
    text: [
      "Sous le temple, dans le rocher, une porte basse fermée d'une grille de fer forgé, et derrière, un escalier qui descend dans le noir. Frère Amaury, le sacristain, un homme gras et doux qui a les clés de tout pendues à sa ceinture, est assis sur un tabouret devant la grille, et il tricote une chaussette grise.",
      "« La crypte ? dit-il. Personne n'y descend. Il n'y a rien. Des tombes. De vieilles choses. » Il compte ses mailles. « Le Grand Maître seul a le droit. C'est la règle depuis la fondation. Je ne fais que garder la porte. Je la garde bien. »",
      { if: { has: "IVR:partiel" }, text: "Il lève les yeux vers toi, et il ajoute, plus bas : « Mais le Grand Maître m'a dit, hier soir, qu'il viendrait peut-être quelqu'un. Il m'a dit de lui donner la clé s'il la demandait. » Il soupire. « Je pensais qu'il délirait. Il délire un peu, vous savez, à la fin de la journée. »" },
    ],
    choices: [
      { label: "« Le Grand Maître m'a envoyé{e}. »", if: { has: "IVR:partiel" }, why: "Le Grand Maître ne t'a encore rien dit.", fx: { ep: ["perso", 1500] }, to: "IVR_crypte" },
      { label: "Le convaincre de te laisser descendre", test: { dom: "social", diff: -20, label: "Un sacristain qui aime sa règle", help: [H_AUB, { if: { has: "passe:ordre" }, v: 10 }, { if: { has: "jeton=ordre" }, v: 10 }] }, win: { fx: { ep: ["perso", 2000] }, to: "IVR_crypte" }, lose: { to: "IVR_crypte_refus" } },
      { label: "Revenir la nuit, quand il dort, et crocheter la grille", test: { dom: "discretion", diff: -20, label: "Une grille ancienne, et un sacristain qui dort mal", help: [H_COL, H_GLO, { if: { item: "pied_de_biche" }, v: 10 }] }, win: { fx: { ep: ["perso", 2000], time: 6 }, to: "IVR_crypte" }, lose: { fx: { fac: { ordre: -5 } }, to: "IVR_crypte_refus" } },
      { label: "Gloup : il s'aplatit devant la grille", who: "gloup", fx: { conf: { gloup: 5 }, ep: ["perso", 2000] }, to: "IVR_crypte_gloup" },
      { back: "IVR_temple" },
    ] },
  IVR_crypte_refus: { act: "IV", title: "La grille de la crypte", place: "hautecombe",
    text: [
      "Frère Amaury pose son tricot, se lève, et se met devant la grille, les bras écartés, ce qui n'arrêterait personne et qui t'arrête quand même. « Non, dit-il très doucement. Je regrette. Vous me feriez du mal, je ne pourrais pas vous en empêcher. Mais je dirais non quand même, et vous le sauriez. »",
      "Il attend. Tu redescends. Derrière toi, il se rassied et reprend sa chaussette, en recomptant ses mailles depuis le début, parce qu'il a perdu le compte.",
      "Le Grand Maître, lui, aurait le droit de t'ouvrir cette porte.",
    ],
    choices: [{ back: "IVR_temple" }] },
  IVR_crypte_gloup: { act: "IV", title: "Sous la grille", place: "hautecombe", with: "gloup",
    text: [
      "Gloup s'aplatit sur la dalle, s'allonge, se glisse entre deux barreaux de la grille avec un bruit de baiser mouillé, et disparaît dans le noir de l'escalier. Frère Amaury le regarde faire, le tricot immobile dans les mains, la bouche ouverte.",
      "Un moment passe. Puis on entend, de l'autre côté de la grille, un cliquetis, un grincement, et le loquet intérieur, celui qu'aucune clé n'ouvre de dehors, se soulève. La grille s'entrouvre. Gloup est de l'autre côté, très fier, collé à la serrure. Frère Amaury se signe et reprend son tricot sans un mot. Tu crois qu'il a décidé de n'avoir rien vu.",
    ],
    choices: [{ label: "Descendre dans la crypte", big: true, to: "IVR_crypte" }] },
  IVR_crypte: { act: "IV", title: "La crypte", place: "hautecombe", ambiance: "souterrain",
    fx: { clue: "ivr_crypte", ep: ["seance", 2500] },
    text: [
      "L'escalier descend en tournant dans le rocher, quarante marches, et débouche dans une salle ronde, basse, sèche, où l'air n'a pas bougé depuis longtemps. Ta lumière fait sortir des murs des noms : des dizaines de noms gravés l'un sous l'autre dans la pierre, chacun avec deux dates. Les Grands Maîtres de l'Ordre de la Main, depuis la fondation. Sous chaque nom, la même courte phrase, gravée par la même main ou par des mains qui s'appliquaient à ressembler : *J'ai su. Je me suis tu. Pour la paix.* Le dernier nom est celui d'Edrin. Il n'a qu'une date. La phrase n'est pas encore gravée.",
      "Au milieu de la salle, sur une dalle de pierre noire, des objets sont posés, alignés avec soin. Une trousse de cuir, de celles que portent les médecins de campagne, si vieille qu'elle a durci comme du bois et que ses boucles de cuivre sont vertes. Un manteau plié, de laine grise, mangé aux plis. Un bol de terre. Et une inscription, au bord de la dalle : *CE QU'IL A LAISSÉ EN DESCENDANT.* Après, il y avait un nom. On l'a gratté.",
      { with: "aubin", text: "Frère Aubin s'agenouille devant la dalle, sans y penser, comme on s'agenouille devant un reliquaire. Il tend la main vers la trousse, et il ne la touche pas. « Il soignait, dit-il. Celui-là, il soignait les gens. On ne porte pas ça autrement. »" },
      { with: "gloup", text: "Gloup s'est approché du bol de terre. Il le regarde longtemps. Puis il s'enroule autour, très doucement, comme un chat autour d'un pied de chaise, et il ne bouge plus." },
    ],
    choices: [{ label: "Remonter", back: "IVR_temple" }] },
});

// ================================================================== EDRIN: the audience, the revelation, the Voice named
Object.assign(P, {
  IVR_vepres: { act: "IV", title: "Les vêpres", place: "hautecombe", takes: "evening",
    fx: { clock: { voix: 1 }, ep: ["perso", 1500] },
    text: [
      "Les frères montent au temple à la tombée du jour, en file, sans lanterne, par l'escalier de cent marches. Ils sont une trentaine, des vieux pour la plupart, et ils chantent les vêpres debout entre les piliers, face à la vallée, dans le vent. Leur chant n'est pas beau. Il est juste, et il tient.",
      "Tu attends au pied de l'escalier, puis on te fait signe de monter. Les frères redescendent en silence en passant à côté de toi, et aucun ne te regarde. Le dernier, Frère Godefroy ou un autre, te touche l'épaule en passant, très légèrement, comme on bénit quelqu'un qu'on n'a pas le droit de bénir.",
      "En haut, il ne reste que le vent, la lanterne, et le vieil homme sur son lit de camp, qui s'est redressé contre ses oreillers et qui tourne vers toi des yeux blancs.",
    ],
    choices: [{ label: "Approcher", big: true, to: "IVR_edrin" }] },
  IVR_edrin: { act: "IV", title: "Edrin", place: "hautecombe",
    fx: { meet: "edrin", ep: ["seance", 2500] },
    text: [
      "Edrin, Grand Maître de l'Ordre de la Main, est très petit sous ses couvertures, très maigre, avec un crâne nu taché de brun et une barbe blanche coupée court. Ses yeux sont deux billes laiteuses. Ses mains, sur la couverture, sont énormes, des mains de forgeron ou de laboureur, avec des nœuds aux articulations comme des racines. Il les tend vers toi, paumes ouvertes, sans chercher à te toucher.",
      "« Asseyez-vous, dit-il. Au sixième siège. C'est le seul qui reste libre, à cette table, depuis quatre cents ans. Personne n'ose. Moi non plus, je n'ai jamais osé. » Sa voix est claire, presque jeune. « Vous marchez comme quelqu'un qui porte plus lourd que son sac. Godefroy vous a trouvé{e}. C'est bien. »",
      { if: { mark: { min: 1 } }, text: "Il renifle, deux fois, comme un chien. Son visage ne change pas. « Vous sentez la vase, dit-il. Sur la main gauche. Elle vous a donné quelque chose. Ne me dites pas quoi. Je le sais. Elle donne toujours la même chose, sous des formes différentes. »" },
      { with: "pip", text: "Puis il se tourne, lentement, vers ton épaule, là où Pip s'est posé. Ses yeux blancs ne voient pas, mais il tend une main, et il la garde levée à un pouce de la lumière, comme au-dessus d'un feu. « Oh, dit-il, et sa voix se casse. Oh. Vous l'avez amené. » Il ne dit rien d'autre. Il laisse retomber sa main." },
      { if: { has: "passe:ordre" }, text: "« Vous avez porté le gant, ajoute-t-il. Trois ans. On l'entend à votre façon de dire *Grand Maître*. Vous ne le dites pas comme un titre. Vous le dites comme une excuse. »" },
      { if: { given: "cloche" }, text: "« Brann m'a écrit que vous lui aviez confié la Cloche d'Ivo, dit-il encore. Sans rien demander. Brann ne m'écrit jamais rien d'aimable. Cette lettre-là l'était presque. »" },
    ],
    choices: [
      { label: "« Ma maîtresse est venue ici, à la fin de l'été. »", hide: { seen: "IVR_edrin_maitresse" }, to: "IVR_edrin_maitresse" },
      { label: "« Qui était Malvoran ? »", big: true, to: "IVR_edrin_question" },
    ] },
  IVR_edrin_maitresse: { act: "IV", title: "Ce qu'elle a fait ici", place: "hautecombe",
    fx: { ep: ["perso", 1500] },
    text: [
      "« Oui, dit Edrin. Elle est venue. Elle s'asseyait là où vous êtes. Elle me posait les questions dans le désordre, pour voir si je répondais la même chose deux jours de suite. » Il sourit. « Je ne répondais pas la même chose. Elle l'a vu tout de suite. Au bout d'un mois, j'étais si fatigué de mentir que je lui ai dit la vérité, pour pouvoir dormir. »",
      "« Je lui ai dit de ne pas descendre à Saint-Ivo. Elle m'a dit qu'à mon âge on ne donnait plus d'ordres à personne, seulement des conseils, et qu'elle avait passé l'âge de suivre les conseils. » Ses mains se croisent sur la couverture. « Elle avait raison sur les deux points. »",
      { if: { is: { maitre: "sauve" } }, text: "« On m'a dit qu'elle vit. Qu'on l'a ramenée, à Merle, qu'elle ne parle presque plus. » Il tourne la tête vers la vallée qu'il ne voit pas. « Tant mieux. Tant mieux. Il n'y a pas beaucoup de gens qui reviennent de l'eau. »" },
      { if: { is: { maitre: "mort" } }, text: "« On m'a dit ce qui s'est passé au gué. » Il ne dit rien pendant un moment. « Je ne vous en veux pas. Elle ne vous en voudrait pas. C'est une phrase qui ne sert à rien, je le sais, mais je l'ai gardée longtemps pour quelqu'un, et c'est à vous qu'elle revient. »" },
      { if: { is: { maitre: "perdu" } }, text: "« On m'a dit qu'elle est dans l'eau, maintenant. » Il serre les mains. « Alors elle est plus près de lui que nous tous. Ce n'est pas une consolation. C'est seulement vrai. »" },
      { if: { item: "lettre_maitre" }, text: "Tu lui dis que tu as trouvé sa lettre, à l'auberge. Il hoche la tête. « Elle a écrit toutes les nuits. Je le savais. Gisquette me racontait. Gardez-la. Ne me la lisez pas. Je sais ce qu'elle dit de moi, et elle a raison. »" },
    ],
    choices: [{ label: "« Qui était Malvoran ? »", big: true, to: "IVR_edrin_question" }] },
  IVR_edrin_question: { act: "IV", title: "La question", place: "hautecombe",
    text: [
      "Edrin ne répond pas tout de suite. Il écoute le vent dans les piliers. « On me la pose depuis soixante-dix ans, dit-il enfin, cette question. Des novices, des chevaliers, des rois. J'ai toujours répondu la même chose : *un sorcier, qui a voulu devenir dieu*. C'est ce qui est écrit. C'est ce que j'ai juré de dire. »",
      "« Je ne vais pas vous répondre, maintenant, comme ça. » Il tourne ses yeux blancs vers toi. « Je vais d'abord vous demander ce que vous savez, vous. Ce que vous avez vu, en descendant de la crête jusqu'ici. Je ne dirai la vérité qu'à quelqu'un qui en sait déjà assez pour la croire. Les autres, je les ai vus partir en criant au blasphème, et le lendemain ils disaient à tout le monde que le vieux Edrin perdait la tête. Je n'ai plus le temps d'être pris pour un fou. »",
    ],
    choices: [
      { label: "Lui dire tout ce que tu as trouvé, une chose après l'autre", big: true, if: { clues: "M", min: 3 }, why: "Tu n'en sais pas encore assez pour qu'il te croie capable de l'entendre : il te faudrait au moins trois indices sur Malvoran.", to: "IVR_revelation" },
      { label: "Lui dire le peu que tu sais", hide: { clues: "M", min: 3 }, to: "IVR_partielle" },
    ] },
  IVR_partielle: { act: "IV", title: "La moitié", place: "hautecombe",
    fx: { flag: ["IVR:partiel", "IV:temple"], ep: ["seance", 2500] },
    text: [
      "Tu lui dis ce que tu sais. Ce n'est pas grand-chose, et tu l'entends toi-même en le disant : des mains martelées sur des bornes, une comptine, une impression. Edrin écoute jusqu'au bout. Puis il soupire, et ce n'est pas un soupir de reproche.",
      "« Ils n'étaient pas cinq, dit-il. Je peux vous dire ça. Ce n'est pas un secret, c'est sur toutes les bornes de la vallée, il suffit de compter. Ils n'étaient pas cinq, et celui qui manque n'est pas celui qu'on croit. » Il s'arrête. « Le reste, si je vous le dis maintenant, vous partirez en me croyant fou, ou en croyant que je mens pour sauver quelqu'un. Il faut que vous l'ayez vu de vos yeux avant de l'entendre de ma bouche. »",
      "« Descendez à la crypte : Amaury vous ouvrira, je le lui dirai. Regardez la voûte, au-dessus de cette table, sous la chaux. Et votre maîtresse a laissé quelque chose, en bas, à l'auberge, je le sais : elle écrivait toutes les nuits. Lisez-le. Ensuite revenez. Je tâcherai d'être encore là. » Il sourit, un sourire très las. « Je suis assez têtu pour ça. »",
      "« Et partez au glacier, quand il le faudra, même si vous ne savez pas tout. Ardhal sait, lui. Il était là. Il ne vous mentira pas. Il ne sait pas mentir. C'est pour ça qu'on l'a laissé seul là-haut. »",
    ],
    choices: [{ label: "Le laisser dormir", back: "IVR_temple" }] },
  IVR_edrin_retour: { act: "IV", title: "Le retour au temple", place: "hautecombe",
    text: [
      "Edrin est réveillé. Il t'a entendu{e} monter. « Vous êtes descendu{e}, dit-il. Vous avez lu. Vous avez regardé. » Ce n'est pas une question. Il se redresse contre ses oreillers, et le frère qui le veillait s'en va sans qu'on le lui demande.",
      "« Alors asseyez-vous au sixième siège, et dites-moi ce que vous avez trouvé. Ensuite je vous dirai le reste. »",
    ],
    choices: [{ label: "Lui dire tout ce que tu as trouvé", big: true, to: "IVR_revelation" }] },

  IVR_revelation: { act: "IV", title: "Le sixième", place: "hautecombe",
    fx: { clue: "m_edrin", flag: ["R:revele", "IV:temple"], ep: ["histoire", 7000], fac: { ordre: -5 } },
    text: [
      "Tu lui dis tout. La borne et la main martelée. Ce que chacun t'a dit, ce que tu as lu, ce que tu as vu sous la terre et sous l'eau. Tu le dis dans le désordre, et lui ne t'interrompt pas, il hoche la tête de temps en temps. Quand tu te tais, le vent s'est levé, et la lanterne tremble.",
      "« Ils étaient six, dit Edrin. Vous le savez. Aldar, Orine, Thavar, Hildre, Ivo. Et le sixième. Le plus jeune. Il n'était pas guerrier, ni roi, ni forgeron. Il était guérisseur. Il allait de village en village avec une trousse de cuir et un bol, il soignait les fièvres, il recousait les bûcherons, il accouchait les femmes quand la sage-femme était ivre. Il s'appelait Malvoran. C'était son vrai nom. Le seul qu'on lui ait laissé, parce qu'on en a fait un mot pour faire peur aux enfants. »",
      "« La Brèche ne s'est pas ouverte parce qu'il l'a voulu. Elle s'est ouverte toute seule. La terre a tremblé sous la Fenne, cet été-là. Et Aldar creusait, depuis dix ans, sa mine d'argent sous la montagne, de plus en plus profond. On n'a jamais su si c'est la terre qui a ouvert la mine, ou la mine qui a ouvert la terre. Aldar, je crois, le savait. Ses héritiers le savent encore. Ils ont fermé la galerie, et ils ont fait de leur roi un héros. »",
      "« L'eau noire est montée. Les bêtes sont devenues grises. Les hommes devenaient fous. Les six sont descendus sous le glacier, jusqu'à la Brèche, et ils ont compris ce qu'il fallait faire. On ne pouvait pas la fermer du dehors. Il fallait que quelqu'un reste dedans, de l'autre côté, et la tienne fermée, comme on tient une porte contre le vent. Pas une heure. Pas un jour. Tant qu'il vivrait. Et il fallait qu'il vive très longtemps. »",
      "« Il s'est proposé. » Edrin le dit très simplement. « Il était le plus jeune. Il soignait. Il s'est proposé. Et nous avons eu peur qu'il lâche. » Il dit *nous*. Il ne se corrige pas. « Alors les cinq l'ont enchaîné à la porte. Trois clés : l'Anneau de Thavar, le Clou de Hildre, la Cloche d'Ivo. Pour qu'il ne puisse pas lâcher, même s'il le voulait, même s'il les suppliait. Ensuite ils sont remontés. Et pour que personne, jamais, ne descende le délivrer, ils ont effacé son nom de partout, et ils ont raconté qu'il avait ouvert la Brèche pour devenir un dieu, et qu'ils l'avaient vaincu. Ils ont pris la gloire. Leurs maisons sont nées de ça. L'Ordre est né de ça. Moi, je suis né de ça. »",
      "« Il a donné son corps : il est à moitié pierre, maintenant, on me l'a dit, ceux qui sont descendus avant moi. Il a donné son nom. Il a donné son temps, quatre cents ans de temps. Il ne lui restait qu'une chose. Il tenait, dans sa main, quand ils l'ont laissé, une petite lumière. Pour ne pas être tout à fait dans le noir. C'est tout ce qu'il a gardé. »",
      "« La souillure monte parce qu'il faiblit. Le Sceau tient encore, mais il se fend. Vous avez vu une des fissures, je crois, sous une crête, au début de votre route. Il y en a d'autres. Quatre cents ans, c'est long, même pour un homme de pierre. »",
    ],
    choices: [
      { label: "Regarder Pip", with: "pip", to: "IVR_revelation_pip" },
      { label: "« Et vous l'avez laissé là-dessous. Tous. Pendant quatre cents ans. »", to: "IVR_reproche" },
      { label: "« Pourquoi me le dire maintenant ? »", to: "IVR_pourquoi" },
    ] },
  IVR_revelation_pip: { act: "IV", title: "La lumière", place: "hautecombe", with: "pip",
    fx: { conf: { pip: 10 }, ep: ["perso", 2000] },
    text: [
      "Pip ne brille presque plus. Il est posé sur la table de pierre, devant le sixième siège, et sa lumière est si basse qu'on voit à travers lui le grain de la pierre. Il ne dit rien pendant longtemps. Edrin non plus. Le vent tourne autour des piliers.",
      "« Je ne me souviens pas, dit enfin Pip, tout bas. Je me souviens d'avoir eu chaud. Je me souviens que c'était grand, autour de moi, et que ça ne bougeait pas, et que je n'avais pas peur. C'est tout. » Il se tait. « Est-ce que c'est mal, de ne pas se souvenir ? »",
      "« Non, dit Edrin. C'est peut-être ce qu'il voulait. Qu'au moins une chose sorte de là-dessous sans emporter le noir avec elle. »",
      "Pip remonte sur ton épaule, et il s'y colle, contre ton cou, plus près que jamais. Il tremble. Puis il ne tremble plus.",
    ],
    choices: [
      { label: "« Et vous l'avez laissé là-dessous. Tous. Pendant quatre cents ans. »", to: "IVR_reproche" },
      { label: "« Pourquoi me le dire maintenant ? »", to: "IVR_pourquoi" },
    ] },
  IVR_reproche: { act: "IV", title: "Le reproche", place: "hautecombe",
    fx: { fac: { ordre: -5 }, ep: ["perso", 1500] },
    text: [
      "« Oui », dit Edrin. Il ne se défend pas. Il ne baisse pas la tête non plus. « Quarante Grands Maîtres avant moi. Chacun l'a su, tôt ou tard, de la bouche de celui d'avant. Chacun a gravé sous son nom, dans la crypte, la même phrase. Chacun s'est dit que la paix valait ça. Que si l'on disait la vérité, les maisons tomberaient, et que dans les guerres qui suivraient, des milliers de gens mourraient, et que quelqu'un descendrait libérer un homme de pierre qui lâcherait la porte. »",
      "« Ce n'est pas faux, vous savez. C'est même assez juste. C'est ce qui rend la chose si confortable. On peut se taire très longtemps avec un raisonnement juste. » Ses mains se serrent sur la couverture. « J'avais vingt ans quand on me l'a dit. J'ai soixante-dix ans de silence derrière moi. Si vous voulez me cracher dessus, faites. Je l'ai mérité plus que vous ne pouvez me le donner. »",
      { with: "thavary", if: { is: { thavary_arc: "honneur" } }, text: "Thavary s'est approchée du lit. Elle sort de son pourpoint la tablette de plomb de la tour d'Hildre, celle de son aïeul, et elle la pose sur la couverture, sous les grandes mains du vieil homme. « Thavar de Thavar, dit-elle. Il l'a écrite. Il ne l'a jamais dite. Je la dis pour lui. » Edrin promène ses doigts sur les lettres gravées, longtemps, en remuant les lèvres. Il ne la lui rend pas tout de suite. Quand il la lui rend, il a les yeux mouillés." },
      { with: "thavary", if: { not: { is: { thavary_arc: "honneur" } } }, text: "Thavary s'est approchée du lit. Elle est blanche. « Thavar le Fidèle, dit-elle d'une voix sans timbre. Le Fidèle. » Elle se tait. « Ma grand-mère croit que notre honte, c'est la pauvreté. » Elle se détourne et va se mettre face au vent, entre deux piliers, et elle ne bouge plus." },
      { with: "charline", text: "Charline a les poings serrés si fort que ses jointures sont blanches, et l'air autour de ses mains tremble de chaleur. « Hildre a forgé les chaînes, dit-elle. Forcément. C'est elle qui forgeait. » Elle desserre les poings, très lentement, doigt après doigt. « Ma famille a vécu quatre cents ans de la gloire de ce clou. »" },
      { with: "aubin", text: "Frère Aubin s'est signé, puis il s'est arrêté au milieu du geste, et sa main est restée là, en l'air, devant sa poitrine. « Les frères de Saint-Ivo, dit-il. Ils savaient, eux aussi ? » « Les premiers, oui, dit Edrin. Ivo a fait bâtir le moutier sur le chemin du glacier pour qu'on prie pour lui sans savoir pour qui. » Aubin ferme les yeux." },
      { with: "coliane", text: "Coliane rit, un rire bref, sans joie. « Et nous, à Hautgrès, on priait les Cinq Mains tous les dimanches. Pour qu'elles nous gardent de la souillure. » Elle crache par terre, sur la dalle polie par quatre cents ans de genoux. « Voilà ce que je pense de vos mains. »" },
    ],
    choices: [
      { label: "« Pourquoi me le dire maintenant ? »", to: "IVR_pourquoi" },
      { label: "« Et la voix dans l'eau ? Qu'est-ce que c'est ? »", big: true, to: "IVR_voix_question" },
    ] },
  IVR_pourquoi: { act: "IV", title: "Pourquoi maintenant", place: "hautecombe",
    fx: { ep: ["perso", 1500] },
    text: [
      "« Parce que je meurs, dit Edrin, et que je ne veux pas graver la phrase. » Il le dit sans emphase. « Parce que le Sceau casse, et qu'il faudra bientôt que quelqu'un descende, et que celui qui descendra devra savoir ce qu'il trouvera en bas. Pas un monstre. Un homme qui tient une porte depuis quatre cents ans et qui n'en peut plus. »",
      "« Et parce que d'autres savent déjà la moitié. Veyra de Hautcastel est partie de l'Ordre avec cette moitié-là, il y a sept ans, et elle croit qu'il suffit de casser les chaînes pour le délivrer. Elle a tort. Casser n'est pas délivrer. Si on casse le Sceau sans rien mettre à la place, la porte s'ouvre, et ce qui monte de la Brèche monte pour de bon. » Il tourne la tête vers toi. « Et ce n'est plus seulement de l'eau noire, maintenant. Quelque chose a poussé dedans. »",
      { if: { has: "vendrel:demasque" }, text: "« On m'a dit ce qui s'est passé au gué, avec le conseiller d'Aldaran. Il croyait la tenir en laisse. Ils le croient tous. » Il secoue la tête. « On ne tient pas l'eau en laisse. »" },
      { if: { is: { couronne: "paix" } }, text: "« On m'a dit aussi que vous avez fait la paix entre les deux couronnes. Je ne sais pas comment. Je n'aurais pas cru que c'était possible. » Il sourit. « Alors peut-être que vous saurez faire l'autre chose aussi. »" },
    ],
    choices: [{ label: "« Et la voix dans l'eau ? Qu'est-ce que c'est ? »", big: true, to: "IVR_voix_question" }] },
  IVR_voix_question: { act: "IV", title: "La voix dans l'eau", place: "hautecombe",
    fx: { clue: "v_edrin", ep: ["perso", 2000] },
    text: [
      "Edrin met longtemps à répondre. Il cherche ses mots, pour la première fois depuis que tu es là. « Quatre cents ans, dans le noir, à tenir. Il a pleuré, forcément. Il a eu froid, il a eu peur, il a haï ceux qui l'avaient laissé. Et tout ça est tombé dans l'eau de la Brèche, goutte après goutte, pendant quatre cents ans. Ça a fait un fond. Et dans ce fond, quelque chose a poussé. »",
      "« Elle n'est pas lui. Elle est ce qu'il serait devenu s'il avait cédé. Elle est sa rancune, debout. » Il serre ses grandes mains. « Elle veut naître. Toute entière. Pour ça, il faut que le Sceau casse et que l'eau noire se répande, parce que l'eau noire, c'est son corps. Elle parle aux gens par l'eau, elle leur promet ce qu'ils veulent, et ils lui ouvrent des portes. Elle ne ment presque jamais. Elle choisit ce qu'elle dit. »",
      "« Ceux qui la connaissent mal l'appellent la Voix. C'est un nom qui lui va. C'est un nom qui ne lui fait rien. Les choses de l'eau, il faut les nommer pour ce qu'elles sont, sinon elles prennent la forme de ce qu'on leur donne. »",
    ],
    choices: [
      { label: "Dire à voix haute ce qu'elle est", big: true, if: { clues: "V", min: 3 }, why: "Tu n'en sais pas encore assez sur elle pour la nommer : il te faudrait au moins trois indices sur la Voix.", hide: { has: "voix:nommee" }, to: "IVR_nommee" },
      { label: "« Je ne la connais pas assez. »", hide: { has: "voix:nommee" }, to: "IVR_voix_partielle" },
    ] },
  IVR_voix_partielle: { act: "IV", title: "Ce qu'il faut savoir d'elle", place: "hautecombe",
    fx: { flag: "IVR:voix_partielle", ep: ["perso", 1500] },
    text: [
      "« Alors écoutez-la, dit Edrin. Pas pour la croire. Pour l'entendre se tromper. Elle se trompe, quelquefois : elle ne sait que ce qu'on lui a donné, et elle ne sait pas ce qu'on lui a caché. Écoutez où elle se tait. »",
      "« Il y a une citerne sous le cloître, ajoute-t-il plus bas. Elle y parle, depuis l'automne. Les frères ne veulent plus y descendre. Un pénitent y descend, lui, tous les soirs, et je ne sais pas ce qu'il y entend. Allez voir. Et revenez me dire ce qu'elle est, quand vous le saurez. »",
    ],
    choices: [{ label: "Écouter encore le vieil homme", to: "IVR_edrin_fin" }] },
  IVR_nommee: { act: "IV", title: "Le nom de la Voix", place: "hautecombe",
    fx: { flag: "voix:nommee", ep: ["histoire", 4000] },
    text: [
      "Tu te lèves. Tu vas jusqu'au bord de la dalle, entre deux piliers, au-dessus du vide, là où la montagne descend jusqu'à la vallée et où, en bas, très loin, la Sorbe brille sous la lune comme un fil d'étain. Et tu le dis, à voix haute, à l'eau de toute la vallée, aux puits, aux mares, aux lavoirs, aux flaques, à tout ce qui l'écoute.",
      "Tu dis qu'elle n'a pas de nom à elle. Qu'elle prend celui des morts qu'on pleure. Qu'elle ne sait que ce qu'on lui a donné. Qu'elle n'est pas lui, qu'elle ne l'a jamais été. Qu'elle est ce qui a poussé dans ses larmes à lui, pendant qu'il tenait la porte, et qu'elle les a bues. Qu'elle est sa rancune. Qu'elle est sa rancune, debout, et rien d'autre.",
      "Rien ne se passe. Puis, en bas, dans le cloître, la citerne fait un bruit, un seul, comme une grosse pierre qu'on lâche au fond d'un puits. La lanterne d'Edrin vacille et se redresse. Et sur la dalle, à tes pieds, la mince pellicule d'eau que le givre a laissée en fondant se retire d'un coup, en tremblant, vers les bords, comme une main qu'on a brûlée.",
      "Edrin a entendu. Il hoche la tête, lentement. « Maintenant elle sait que vous savez, dit-il. Elle n'aimera pas ça. Mais elle ne pourra plus vous parler avec la voix de vos morts sans que vous entendiez la sienne dessous. C'est peu. C'est déjà beaucoup. »",
      { with: "gloup", text: "Gloup est tout près de toi, au bord du vide. Il a écouté. Il lève vers toi ses deux yeux noirs, et il fait un bruit, très bas, qui monte à la fin comme une question. Il est né de cette eau-là, lui aussi. Il attend. Il a peur de la réponse." },
    ],
    choices: [
      { label: "« Non. Toi, tu es ce qui en est sorti de bien. »", with: "gloup", fx: { conf: { gloup: 10 } }, to: "IVR_edrin_fin" },
      { label: "Revenir t'asseoir près du vieil homme", to: "IVR_edrin_fin" },
    ] },
  IVR_edrin_fin: { act: "IV", title: "Ce que demande Edrin", place: "hautecombe", takes: "night",
    fx: { flag: "IV:temple", ep: ["perso", 1500] },
    text: [
      "Il est tard. Le frère qui veille Edrin est revenu avec un bol de bouillon que le vieil homme ne boit pas. Edrin a l'air épuisé, plus petit encore sous ses couvertures. Mais il ne te laisse pas partir. Il a encore une chose à dire, et il la tourne dans sa bouche avant de la sortir.",
      "« Allez au glacier, dit-il. Ardhal est là-haut, le dragon. Il a vu les Six. Il était leur ami, à tous les six. Quand les cinq sont remontés, il ne les a pas suivis. Il est resté au-dessus de la porte, pour que l'autre ne soit pas tout à fait seul. La souillure le ronge depuis. Il sait ce qu'il faut savoir, et ce que je ne sais pas. »",
      "« Et apportez-moi les trois clés, si vous les avez, ou si vous savez où elles sont. Je voudrais les entendre ensemble une fois avant de mourir. Elles ne sont pas faites pour être séparées. On les a séparées pour que personne ne puisse jamais tout ouvrir, ou tout fermer. » Il sourit. « C'est la seule précaution des Cinq que je trouve intelligente. »",
      "« Une dernière chose. » Il se redresse. « Demain, à la messe de l'aube, le parvis sera plein de gens de la Sorbe. Trois cents, peut-être. Je peux leur dire. Tout. Le nom, la porte, la mine, le mensonge. Je n'ai jamais rien dit à personne. Je pourrais le dire à eux. » Il tourne ses yeux blancs vers toi. « Ou je peux me taire, encore, comme les quarante autres. Je vous le demande à vous. Je n'ai plus confiance en ce que je déciderais seul. »",
    ],
    choices: [
      { label: "« Dites-le-leur. Tout. Demain. »", fx: { set: { edrin: "parle" } }, to: "IVR_edrin_parle" },
      { label: "« Taisez-vous encore. Ce n'est pas le moment : ils ont faim, ils ont peur. »", fx: { set: { edrin: "tait" } }, to: "IVR_edrin_tait" },
      { label: "« Ne le dites pas à eux. Dites-le-moi par écrit, signé, et laissez-moi le porter. »", fx: { set: { edrin: "ecrit" } }, to: "IVR_edrin_ecrit" },
    ] },
  IVR_edrin_parle: { act: "IV", title: "La messe de l'aube", place: "hautecombe", takes: "morning",
    fx: { fac: { ordre: -10, brumefeuille: 10 }, ep: ["seance", 3000] },
    text: [
      "On le porte sur le parvis dans un fauteuil, à l'aube, deux frères sous chaque bras. Il fait très froid. Les gens de la Sorbe sont là, debout, assis, couchés, trois cents peut-être, avec leurs bols vides à la main pour la soupe qui viendra après. Ils ne savent pas pourquoi on a sorti le Grand Maître. Ils se taisent quand il lève ses grandes mains.",
      "Il parle longtemps. Il ne crie pas. Le vent emporte des morceaux de phrases, mais les gens du premier rang les répètent à ceux de derrière, et ainsi de suite, jusqu'au fond du parvis, comme on passe des seaux pendant un incendie. *Ils étaient six. Il soignait. Il s'est proposé. Nous avons eu peur.*",
      "Quand il se tait, personne ne dit rien pendant un long moment. Puis une vieille femme, au premier rang, se lève, et elle crache aux pieds du fauteuil. Une autre la fait se rasseoir. Un homme pleure. Des enfants demandent ce qui se passe. Quelqu'un, au fond, commence à chanter la comptine des Six, celle qu'on chante aux enfants, et s'arrête au cinquième couplet, et recommence, et s'arrête encore.",
      "Le soir, on dit qu'un frère est parti de l'abbaye sans son gant. On dit aussi que trois familles qui voulaient redescendre ont décidé de rester. Tu ne sais pas ce que ça veut dire. Edrin non plus. Il dort tout le jour, et il a l'air, pour la première fois, d'un homme qui dort.",
    ],
    choices: [{ back: "IVR_temple" }] },
  IVR_edrin_tait: { act: "IV", title: "Le silence", place: "hautecombe", takes: "morning",
    fx: { fac: { ordre: 5 }, ep: ["perso", 1500] },
    text: [
      "Edrin hoche la tête. Il n'a pas l'air soulagé, ni déçu. « C'est ce que j'aurais dit, à votre place, dit-il. C'est ce que j'ai dit pendant soixante-dix ans. Vous voyez comme c'est facile. »",
      "À l'aube, la messe est dite comme tous les jours. Le Grand Maître n'y paraît pas. Les gens de la Sorbe mangent leur soupe aux pois. Personne ne sait rien de plus que la veille, et le monde continue comme il continue depuis quatre cents ans.",
      "Plus tard, en passant devant la crypte, tu vois Frère Amaury qui descend avec une lampe et un ciseau de tailleur de pierre. Il ne te regarde pas. Tu ne lui demandes pas ce qu'il va graver.",
    ],
    choices: [{ back: "IVR_temple" }] },
  IVR_edrin_ecrit: { act: "IV", title: "Le témoignage", place: "hautecombe", takes: "morning",
    fx: { item: "ivr_temoignage", ep: ["seance", 2500] },
    text: [
      "Edrin réfléchit. Puis il appelle le frère qui veille, et il dicte. Toute la nuit. Le frère écrit, en s'arrêtant de temps en temps pour secouer sa main engourdie, et pour regarder le vieil homme comme s'il ne l'avait jamais vu. Au matin, il y a sept feuillets serrés, et Edrin les signe, en bas, d'une croix tremblante que le frère guide, et du sceau de l'Ordre, la main ouverte, imprimé dans la cire grise.",
      "« Voilà, dit Edrin. Ce n'est pas du courage. C'est plus lâche, même : c'est vous qui le porterez, et vous qui le direz. Mais au moins, quand je serai mort, il restera autre chose qu'une phrase gravée dans une crypte. » Il te tend les feuillets, roulés et liés d'un ruban gris. « Montrez-le à qui doit le voir. Vous saurez qui. »",
      { if: { has: "veyra:vue" }, text: "Il ajoute, plus bas : « Veyra de Hautcastel reconnaîtrait mon sceau. Elle l'a vu sur ses lettres de chevalerie. Je ne sais pas si ça lui servira à quelque chose. »" },
    ],
    choices: [{ back: "IVR_temple" }] },
  IVR_edrin_veille: { act: "IV", title: "Au chevet d'Edrin", place: "hautecombe",
    text: [
      "Edrin dort, ou somnole, la bouche ouverte, avec un petit sifflement à chaque souffle. Puis il t'entend, et il ouvre ses yeux blancs, et il sourit. « Vous revenez voir si je suis mort, dit-il. Pas encore. Je suis têtu. »",
      { if: { has: "reliques:reunies" }, text: "« Je les entends encore, dit-il. Les trois clés. Je les entends quand je ferme les yeux. Merci. »" },
      { if: { item: "lettre_maitre" }, text: "« Vous avez la lettre de votre maîtresse sur vous, dit-il. Je l'entends froisser quand vous respirez. Gardez-la là. C'est la bonne place. »" },
      { if: { is: { enfants: ["ramenes", "abbaye"] } }, text: "« On m'a dit que les enfants de la combe sont redescendus. Les frères ne parlent que de ça. C'est la première bonne nouvelle depuis la Toussaint. »" },
      { if: { is: { edrin: "parle" } }, text: "« Ils me regardent autrement, en bas, depuis que j'ai parlé, dit-il. Certains ne me regardent plus du tout. C'est juste. Je dors mieux. C'est injuste, mais je dors mieux. »" },
    ],
    choices: [
      { label: "Lui dire, cette fois, ce qu'est la voix dans l'eau", big: true, if: { clues: "V", min: 3 }, why: "Il te faudrait au moins trois indices sur la Voix.", hide: { any: [{ has: "voix:nommee" }, { not: { seen: "IVR_voix_question" } }] }, to: "IVR_nommee_tard" },
      { label: "Lui demander de te parler encore de la voix dans l'eau", hide: { any: [{ seen: "IVR_voix_question" }, { not: { has: "R:revele" } }] }, to: "IVR_voix_question" },
      { back: "IVR_nef" },
    ] },
  IVR_nommee_tard: { act: "IV", title: "Le nom de la Voix", place: "hautecombe",
    fx: { flag: "voix:nommee", ep: ["histoire", 4000] },
    text: [
      "Edrin se redresse sur ses oreillers et attend. Tu vas jusqu'au bord de la dalle, entre deux piliers, au-dessus du vide, et tu le dis à voix haute, à l'eau de toute la vallée, à tout ce qui l'écoute. Qu'elle n'a pas de nom à elle. Qu'elle ne sait que ce qu'on lui a donné. Qu'elle n'est pas lui. Qu'elle a poussé dans ses larmes à lui, et qu'elle les a bues. Qu'elle est sa rancune, debout, et rien d'autre.",
      "En bas, dans le cloître, la citerne fait un bruit sourd, un seul, comme une grosse pierre qu'on lâche au fond d'un puits. Sur la dalle, à tes pieds, la mince pellicule d'eau du givre fondu se retire vers les bords, en tremblant, comme une main qu'on a brûlée.",
      "« Maintenant elle sait que vous savez, dit Edrin. Elle ne pourra plus vous parler avec la voix de vos morts sans que vous entendiez la sienne dessous. C'est peu. C'est déjà beaucoup. »",
    ],
    choices: [{ back: "IVR_nef" }] },
});

// ================================================================== THE THREE KEYS TOGETHER
Object.assign(P, {
  IVR_reliques_appel: { act: "IV", title: "Les gardiens montent", place: "hautecombe",
    fx: { ep: ["perso", 1500] },
    text: [
      "Quand tu dis à Edrin que tu sais où sont les trois clés, il ne s'étonne pas. « J'ai écrit en septembre, dit-il. À Brann, à Ferrance, à Thavar. Je leur ai dit que si quelqu'un venait, il faudrait peut-être que les clés montent ici, une fois. Je ne savais pas si on me répondrait. On ne répond pas toujours aux vieillards. »",
      { if: { given: "cloche" }, text: "On lui a répondu. Brann est à l'hôtellerie de l'abbaye depuis trois jours, le sénéchal de l'Ordre en personne, couvert de boue jusqu'aux cuisses, avec quatre frères et une caisse de chêne cerclée de fer. Dans la caisse, sur un lit de paille, la Cloche d'Ivo, que l'Ordre a fait bénir à la commanderie. Brann te salue d'un signe de tête. « Vous la vouliez près de vous, dit-il. Je la rapporte. Je la remporterai. Ne vous faites pas d'idées. »" },
      { if: { given: "clou" }, text: "On lui a répondu de Ferrance aussi. Un compagnon de la Forge-Mère est monté avec une mule et un coffret de fer : un grand garçon taciturne, les avant-bras couverts de brûlures anciennes, qui ne lâche pas le coffret, même pour manger. Dedans, le Clou de Hildre, sur un coussin de cuir. « Maître Ansgar a dit : il monte, il redescend, et il ne passe pas une nuit hors de ma vue », dit le garçon. C'est la seule phrase qu'il prononce de toute la journée." },
      { if: { given: "anneau" }, text: "Et de Thavar. C'est Josselin, le garçon des écuries du manoir, qui est monté, seul, sur la jument grise, avec l'Anneau de Thavar pendu à son cou au bout d'un lacet, sous sa chemise, et une lettre de Dame Ermesinde qu'il n'a pas lue et qu'il remet à Edrin avec une révérence qu'on lui a fait répéter. Il a fait six jours de route. Il a l'air très fier et très fatigué." },
      { if: { relic: "cloche" }, text: "La Cloche d'Ivo est dans ton sac, enveloppée dans ta cape de rechange, muette sur la laine." },
      { if: { relic: "clou" }, text: "Le Clou de Hildre est dans ton sac, dans son étui de cuir, lourd comme trois fois son poids." },
      { if: { relic: "anneau" }, text: "L'Anneau de Thavar est à ton doigt, ou dans ta bourse, selon les jours ; aujourd'hui, il est dans ta main, et tu le serres sans t'en rendre compte." },
      { with: "thavary", if: { given: "anneau" }, text: "Thavary voit Josselin descendre de la jument, et elle traverse la cour à grands pas et le prend contre elle, brusquement, maladroitement, comme on prend un frère. Le garçon devient rouge jusqu'aux oreilles. Elle le lâche, se racle la gorge, et lui demande si la jument a été ferrée avant le départ." },
    ],
    choices: [{ label: "Monter les trois clés au temple, à la tombée du jour", big: true, to: "IVR_reliques" }] },
  IVR_reliques: { act: "IV", title: "Les trois clés", place: "hautecombe", takes: "evening",
    fx: { flag: "reliques:reunies", ep: ["histoire", 5000] },
    text: [
      "On porte Edrin jusqu'à la table de pierre, dans son fauteuil, et on le place devant le sixième siège, vide. Le vent est tombé, pour une fois. Les frères sont montés, tous, en silence, et ils se tiennent entre les piliers, et derrière eux, sur l'escalier, des gens de la Sorbe qui ont suivi sans savoir ce qu'ils suivaient.",
      "Tu poses les trois clés sur la table ronde, l'une après l'autre, à égale distance. L'Anneau. Le Clou. La Cloche, en dernier : quand son bord touche la pierre, elle sonne, d'elle-même, une note grave et longue. Le Clou répond. Ce n'est pas un son : c'est une vibration, dans la table, dans le sol, dans tes dents. Et l'Anneau, enfin, très haut, très pur, comme un doigt mouillé sur le bord d'un verre.",
      "Les trois sons montent ensemble et ne se mélangent pas. Ils tiennent, chacun le sien, et pourtant ils font une seule chose. Tu as l'impression, très nette, d'entendre une porte. Pas de la voir : de l'entendre. Le bois qui travaille sous la poussée du vent, de l'autre côté. Et contre le bois, un dos. Un souffle très lent. Quelqu'un qui tient, et qui écoute, de l'autre côté, depuis très longtemps, et qui vient d'entendre, pour la première fois, quelque chose qui n'est pas de l'eau.",
      "Ça dure le temps de trois respirations. Puis les sons s'éteignent, l'un après l'autre, dans l'ordre inverse. Il ne reste que le silence et la respiration de cinquante personnes qui ne savent pas pourquoi elles pleurent. Edrin a la tête renversée sur le dossier de son fauteuil et les yeux ouverts, et il sourit.",
      { with: "pip", text: "Pip brille. Il brille comme tu ne l'as jamais vu briller, si fort que les frères se cachent les yeux, si fort qu'on voit, une seconde, l'ombre des six piliers sur la neige, très loin, jusqu'au bas de la montagne. Puis il s'éteint presque, épuisé, et tombe dans ta main ouverte. Il est tiède. Il dit : « Il a entendu. Je l'ai senti. Il a entendu. »" },
      { with: "aubin", text: "Frère Aubin est à genoux, et il chante. Pas une prière : le verset des noyés de Saint-Ivo, celui qu'ils chantaient toutes les nuits sous le lac. Il le chante jusqu'au bout, cette fois. Il va plus loin que le mot où les morts s'arrêtaient. Il ne sait pas d'où lui viennent les mots d'après." },
      { with: "charline", text: "Charline a posé ses deux mains à plat sur la table, de chaque côté du Clou, et elle tremble. « C'est chaud, dit-elle. La pierre est chaude. Comme une forge qu'on vient d'éteindre. »" },
    ],
    choices: [{ label: "Laisser les gardiens reprendre ce qui est à eux", big: true, to: "IVR_reliques_apres" }] },
  IVR_reliques_apres: { act: "IV", title: "Après les clés", place: "hautecombe",
    text: [
      "Les clés ont refroidi. Ceux qui les ont portées jusqu'ici les reprennent, chacun la sienne, avec des gestes plus lents qu'à l'aller.",
      { if: { given: "cloche" }, text: "Brann referme la caisse de chêne sur la Cloche, tourne la clé du cadenas, et reste un moment la main posée dessus. Puis il te regarde. « Il vous l'a dit, dit-il. Le vieux. Tout. » Ce n'est pas une question. « Je le sais depuis quinze ans. Je n'ai jamais trouvé le moment. Il n'y a pas de moment. » Il soulève la caisse lui-même, sans l'aide des frères. « Quand vous descendrez, la Cloche descendra. Je vous le promets. Sur la main ouverte. »" },
      { if: { given: "clou" }, text: "Le compagnon de Ferrance remet le Clou dans son coffret, ferme le coffret, et pour la première fois, il dit quelque chose qu'on ne lui a pas fait répéter. « Je le dirai au maître, dit-il. Qu'il a chanté. Il ne me croira pas. » Il réfléchit. « Il me croira. »" },
      { if: { given: "anneau" }, text: "Josselin remet l'Anneau au bout de son lacet, sous sa chemise, et le tapote pour vérifier qu'il est là. Il te demande si c'était normal, ce qui s'est passé. Tu lui dis que non. Il a l'air satisfait. Il pourra le raconter au manoir." },
      { if: { any: [{ relic: "cloche" }, { relic: "clou" }, { relic: "anneau" }] }, text: "Ce que tu portes, tu le remets dans ton sac. C'est plus lourd qu'avant. Ou plus léger. Tu ne sais pas." },
      "Edrin, dans son fauteuil, s'est endormi, la bouche ouverte, avec son sourire encore dessus. Le frère qui le veille ne le réveille pas pour le redescendre. Il va chercher des couvertures, et il les lui met sur les genoux, sur les épaules, et on le laisse là, devant le sixième siège, toute la nuit.",
    ],
    choices: [{ back: "IVR_temple" }] },
});

// ================================================================== THE SPRING OF HAUTECOMBE (Brother Herbelin)
Object.assign(P, {
  IVR_source: { act: "IV", title: "La source de l'abbaye", place: "hautecombe", backName: "la salle de la source",
    fx: { meet: "ivr_herbelin" },
    text: [
      { first: true, text: "La source de Hautecombe sort du rocher sous les cuisines de l'abbaye, dans une salle voûtée qu'on a creusée exprès autour d'elle il y a des siècles. Elle tombe d'un bec de pierre dans une vasque, et de la vasque dans une rigole qui file sous le mur. L'eau est claire. Vraiment claire, d'une clarté qu'on a oubliée, en bas : on voit chaque grain de sable au fond de la vasque, et le bec de pierre a une petite barbe de mousse verte." },
      { first: true, text: "Devant la vasque, sur un tabouret, un frère énorme, avec un gourdin de frêne en travers des genoux, des avant-bras velus et un tablier d'infirmier taché de sang séché. Frère Herbelin. Une file de gens de la Sorbe passe devant lui, chacun avec un bol. Il remplit le bol à la louche, une louche par personne, sans un mot, et chaque fois il regarde l'eau avant de la verser, comme s'il vérifiait qu'elle était toujours claire." },
      { again: true, text: "Frère Herbelin, son gourdin, sa louche. La file des bols. Le bec de pierre et sa barbe de mousse, et l'eau claire qui tombe dans la vasque avec un bruit de rire étouffé." },
      { after: "IVR:source_palie", text: "Herbelin te salue d'un signe de tête. Il ne te parle pas de ce qui s'est passé à la vasque. Il te sert une louche, comme aux autres." },
      { after: "IVR:source_gatee", text: "L'eau de la vasque est toujours claire. Herbelin la goûte chaque matin, du bout de la louche, et chaque matin il fait la grimace. « Rien, dit-il. Elle a toujours un goût de rien. » Les fiévreux de l'infirmerie sont plus nombreux qu'à ton arrivée." },
      { with: "gloup", first: true, text: "Gloup s'arrête net sur le seuil de la salle. Il regarde l'eau claire comme un enfant regarde le feu : avec envie, avec peur, sans oser avancer. Herbelin le voit et lève son gourdin. Puis il le repose, lentement, et ne dit rien." },
    ],
    choices: [
      { label: "Lui demander une fiole d'eau claire pour le glacier", hide: { has: "IVR:fiole" }, to: "IVR_source_fiole" },
      { label: "Te faire soigner à l'infirmerie", hide: { seen: "IVR_infirmerie" }, to: "IVR_infirmerie" },
      { label: "« Laisse-moi lui parler de ta main », dit Frère Aubin", who: "aubin", if: { all: [{ loyal: "aubin" }, { mark: { min: 1 } }] }, why: "Il faudrait que Frère Aubin ait toute confiance en toi, et que ta main porte la Marque.", tag: "Marque −1", hide: { any: [{ has: "IVR:source_palie" }, { has: "IVT:marque_palie" }, { has: "IVD:main_lavee" }] }, to: "IVR_source_marque" },
      { back: "IVR_temple" },
    ] },
  IVR_source_fiole: { act: "IV", title: "La fiole", place: "hautecombe",
    text: [
      "Herbelin t'écoute jusqu'au bout sans lâcher sa louche. Puis il secoue la tête. « Non. Une louche par personne. C'est la règle. Si je donne une fiole à vous, il en faudra une à l'autre, et la file sera longue jusqu'en bas, et demain il n'y aura plus que de la boue au fond de la vasque. » Il remplit un bol. « Elle donne ce qu'elle donne, la source. Pas plus. Elle n'a jamais donné plus. »",
      { if: { has: "IV:temple" }, text: "« Le Grand Maître m'a fait dire qu'il fallait vous donner ce que vous demanderiez, ajoute-t-il, plus bas. Je ne sais pas ce qu'il vous a raconté là-haut. Il ne me l'a pas raconté. » Il te regarde par en dessous. « Une fiole. Une. Pour la montagne, pas pour vous. »" },
      "« Les nuits, ajoute-t-il, des gens du camp de Vaux montent avec des tonneaux pour remplir à la rigole, plus bas, où je ne vois pas. Trois fois cette semaine. Ils ont soif, ils ont des enfants, je ne leur en veux pas. Mais s'ils prennent tout, il n'y aura plus rien pour personne. Gardez la rigole une nuit à ma place, que je dorme. Et je vous donnerai votre fiole, avec ou sans la permission du vieux. »",
    ],
    choices: [
      { label: "Prendre la fiole que le Grand Maître t'a permise", if: { has: "IV:temple" }, why: "Il faudrait que le Grand Maître l'ait permis.", fx: { item: "eau_claire", flag: "IVR:fiole", ep: ["perso", 1500] }, back: "IVR_source" },
      { label: "Garder la rigole cette nuit", to: "IVR_source_garde" },
      { back: "IVR_source" },
    ] },
  IVR_source_garde: { act: "IV", title: "La rigole, la nuit", place: "hautecombe", takes: "night",
    text: [
      "La rigole sort sous le mur de l'abbaye et descend dans une gorge étroite, entre deux rochers, avant de se perdre dans les éboulis. Tu t'assieds dans le noir, contre la pierre, ta cape serrée autour de toi. Le froid monte du rocher. L'eau chante à côté de toi toute la nuit, tout bas, et elle ne dit pas ton nom, et c'est reposant.",
      "Vers le milieu de la nuit, des pas. Des lanternes sourdes, une charrette à bras, quatre tonneaux vides qui sonnent creux sur les cahots. Cinq hommes, une femme. Des gens de la Sorbe, des paysans, avec des visages creusés. Le premier te voit et s'arrête. Derrière lui, quelqu'un sort un couteau, sans conviction.",
      { if: { has: "passe:profite" }, text: "L'un d'eux, le plus vieux, te regarde un moment de trop. « Saint-Gilles, dit-il. Je vous connais. Vous avez acheté le pré de mon frère, quand on est partis. Pour trois sous. » Il ne dit rien d'autre. Il n'a pas besoin." },
    ],
    choices: [
      { label: "Leur parler : la source est la dernière, et elle ne suffira pas à tous", test: { dom: "social", diff: -20, label: "Des gens qui ont soif", help: [H_AUB, H_PIP, { if: { has: "passe:aide" }, v: 10 }] }, win: { fx: { ep: ["perso", 2500] }, to: "IVR_source_accord" }, lose: { to: "IVR_source_bagarre" } },
      { label: "Leur remplir un tonneau, un seul, et les renvoyer", fx: { ep: ["perso", 2000], conf: { aubin: 5, pip: 5 } }, to: "IVR_source_accord" },
      { label: "Les chasser", fx: { conf: { pip: -5, aubin: -5 }, ep: ["perso", 1500] }, to: "IVR_source_bagarre" },
    ] },
  IVR_source_accord: { act: "IV", title: "Un tonneau", place: "hautecombe",
    fx: { item: "eau_claire", flag: "IVR:fiole" },
    text: [
      "Ils remplissent un tonneau, un seul, en se relayant à la rigole avec leurs seaux, sans un mot. Ils repartent dans la nuit en tirant la charrette, et le dernier se retourne pour te faire un signe que tu ne vois pas bien dans le noir. Ils ne reviennent pas. Le matin, Herbelin descend, voit les traces de roues, voit ta tête, et comprend.",
      "« Un tonneau, dit-il. C'est ce que j'aurais fait, si j'avais été moins bête. » Il te tend une fiole de verre épais, bouchée à la cire, pleine d'une eau si claire qu'on la voit à peine. « Pour la montagne. »",
    ],
    choices: [{ back: "IVR_source" }] },
  IVR_source_bagarre: { act: "IV", title: "Les tonneaux", place: "hautecombe",
    fx: { item: "eau_claire", flag: "IVR:fiole", pv: -2 },
    text: [
      "Ça ne dure pas longtemps. Ils sont affamés et toi non. Un coup de poing, une lanterne cassée, la charrette renversée dans la gorge, les tonneaux qui dévalent les éboulis en rebondissant. La femme crie. Puis ils s'en vont, en soutenant l'un d'eux qui boite, et la nuit se referme. Tu restes avec une lèvre fendue et l'eau qui chante toujours à côté de toi.",
      "Le matin, Herbelin descend, voit la charrette dans la gorge, voit ta lèvre. Il ne dit rien pendant longtemps. Puis il te tend une fiole de verre épais, bouchée à la cire. « La règle est la règle, dit-il. Je vous l'avais promise. » Il ne te regarde pas en le disant.",
    ],
    choices: [{ back: "IVR_source" }] },
  IVR_infirmerie: { act: "IV", title: "L'infirmerie", place: "hautecombe",
    fx: { pv: "max", ep: ["perso", 800] },
    text: [
      "L'infirmerie de Hautecombe est une longue salle blanchie à la chaux, avec vingt lits, tous occupés, et des paillasses par terre entre les lits. Ça sent le vinaigre, la fièvre et la soupe. Herbelin te fait asseoir sur un tabouret, lave tes plaies à l'eau de la source, les enduit d'un onguent qui sent la résine, et te bande avec des gestes de boucher et des mains de dentellière.",
      "« Les fièvres grises, dit-il en montrant la salle du menton. La moitié guérit avec l'eau claire. L'autre moitié, non. On ne sait pas pourquoi. » Il serre le dernier nœud. « Je soigne depuis quarante ans. Je ne sais toujours pas pourquoi les gens guérissent. Je sais seulement qu'il faut être là quand ils le font. »",
    ],
    choices: [{ back: "IVR_source" }] },
  IVR_source_marque: { act: "IV", title: "La main dans l'eau claire", place: "hautecombe", with: "aubin",
    fx: { mark: -1, flag: "IVR:source_palie", conf: { aubin: 5 }, ep: ["seance", 3000] },
    text: [
      "Frère Aubin parle longtemps avec Herbelin, à voix basse, à l'écart de la file. Herbelin secoue la tête, puis hoche la tête, puis regarde ta main, puis Aubin, longtemps, comme on jauge un confrère. À la fin, il ferme la porte de la salle, et la file attend dehors en murmurant.",
      "« Mets ta main dans la vasque », dit Aubin. Tu le fais. L'eau est si froide qu'elle brûle. Aubin pose sa propre main sur la tienne, sous l'eau, et il prie. Il ne prie pas fort. Il prie comme on parle à quelqu'un qui dort dans la pièce d'à côté. Et la tache, sur ta paume, se met à fumer, très légèrement, une fumée grise qui monte à travers l'eau en petites bulles et crève à la surface avec une odeur de vase.",
      "Quand tu retires ta main, la tache est plus pâle. Elle n'a pas disparu. Elle a reculé, d'un doigt. Et l'eau de la vasque est trouble. Grise. Herbelin la regarde sans rien dire, puis il ouvre la bonde, et il la laisse se vider tout entière dans la rigole, et il attend, à genoux, que la source la remplisse de nouveau, claire. Ça prend toute la matinée. Pendant toute la matinée, la file attend dehors.",
      "« Elle donne ce qu'elle donne, dit Herbelin quand c'est fini. Aujourd'hui, elle vous a donné ça. Ne revenez pas lui demander autre chose. »",
    ],
    choices: [{ back: "IVR_source" }] },
});

// ================================================================== THE LAST MILLER (quest IV_barthelemy) and the cistern
var FIN_MEUNIER = function (v) { return { set: { barthelemy: v }, flag: "barthelemy:sort", quest: "IV_barthelemy" }; };
Object.assign(P, {
  IVR_cloitre: { act: "IV", title: "Le cloître des pénitents", place: "hautecombe", backName: "le cloître",
    fx: { questSeen: "IV_barthelemy" },
    text: [
      { first: true, text: "Le cloître de Hautecombe est carré, petit, avec un puits au milieu qu'on a couvert d'une dalle et un jardin d'herbes mortes de froid. Sous les arcades, des hommes en chemise de toile grise travaillent sans parler : ils taillent de la pierre, ils tressent de la paille, ils grattent des parchemins. Les pénitents. Des gens que les baillis de la vallée envoient ici faire pénitence au lieu de les pendre, pour un an, pour trois ans, pour la vie. Ils ont un bandeau de toile grise noué au bras." },
      { first: true, text: "Sous le cloître, par un escalier fermé d'une porte basse, on descend à la citerne de l'abbaye, où l'on recueillait autrefois l'eau de pluie des toits. Les frères n'y vont plus. Quelqu'un a peint une main ouverte sur la porte, à la chaux, en grand." },
      { again: true, text: "Le cloître, les pénitents sous les arcades, le bruit des maillets sur la pierre, la porte basse de la citerne avec sa main peinte." },
      { if: { is: { meunier: ["livre", null] } }, before: "barthelemy:sort", text: "Dans un coin, seul, un homme casse des cailloux avec une masse, assis par terre, les jambes écartées autour d'un tas de pierres. Il frappe régulièrement, sans se presser, comme on bat le blé. Il a maigri. Sa barbe a blanchi. Il ne lève pas la tête. Barthélemy, le meunier de Brumefeuille." },
      { if: { is: { meunier: "protege" } }, before: "barthelemy:sort", text: "Parmi les gens qui portent l'eau pour les frères, un homme passe avec deux seaux au bout d'une palanche, voûté sous le poids, et il te voit, et il s'arrête, et l'eau déborde des seaux sur ses sabots. Barthélemy, le meunier de Brumefeuille. Il pose sa palanche et vient vers toi en s'essuyant les mains, comme autrefois au moulin." },
      { if: { is: { meunier: "marche" } }, before: "barthelemy:sort", text: "Au milieu du cloître, un homme bien vêtu, en manteau neuf, parle avec le cellérier de l'abbaye devant deux mules chargées de sacs de farine blanche. Il rit, il tape sur l'épaule du frère, il fait décharger les sacs. Barthélemy, le meunier de Brumefeuille. Il te voit, et il ouvre les bras." },
    ],
    choices: [
      { label: "Aller vers l'homme qui casse des pierres", if: { is: { meunier: ["livre", null] } }, hide: { any: [{ has: "barthelemy:sort" }, { not: { is: { meunier: ["livre", null] } } }] }, to: "IVR_meunier_pierres" },
      { label: "Écouter ce que Barthélemy a à te dire", hide: { any: [{ has: "barthelemy:sort" }, { not: { is: { meunier: "protege" } } }] }, to: "IVR_meunier_eau" },
      { label: "Saluer Barthélemy", hide: { any: [{ has: "barthelemy:sort" }, { not: { is: { meunier: "marche" } } }] }, to: "IVR_meunier_riche" },
      { label: "Descendre à la citerne", hide: { clue: "ivr_citerne" }, to: "IVR_citerne" },
      { back: "IVR_temple" },
    ] },
  IVR_citerne: { act: "IV", title: "La citerne", place: "hautecombe", ambiance: "souterrain",
    fx: { clue: "ivr_citerne", ep: ["perso", 2000] },
    text: [
      "Douze marches, une voûte basse, et un bassin carré creusé dans le roc, plein jusqu'au bord. L'eau est noire et lisse, et elle a cette tiédeur que tu commences à reconnaître, comme celle d'une main. Une lampe à huile brûle dans une niche : quelqu'un descend ici et l'entretient.",
      "Tu parles. Pas pour elle : pour savoir. « Il y a quelqu'un ? » L'eau répète, un temps après toi, avec ta voix : *Il y a quelqu'un ?* Puis, plus bas, d'une autre voix, une voix de femme, douce : *Toujours.* Tu dis ton nom. Elle le répète. Tu dis le nom de ta maîtresse. Elle le répète. Tu commences, sans y croire, la prière des morts que tout le monde sait dans la vallée, *Main ouverte qui nous gardes*, et l'eau ne répète rien. Elle se tait, net, au premier mot, comme une bouche qu'on a fermée d'une main.",
      { after: "IVR:voix_partielle", text: "Tu restes longtemps au bord du bassin, après, sans rien dire, et l'eau non plus ne dit rien." },
      { with: "aubin", text: "Frère Aubin reprend la prière là où tu t'es arrêté{e}, et la dit jusqu'au bout. L'eau se tait tout le temps qu'il parle. Quand il a fini, elle dit, avec sa voix à lui, très doucement : *La taverne de Morteau.* Aubin pâlit et remonte l'escalier sans se retourner." },
    ],
    choices: [{ label: "Remonter", back: "IVR_cloitre" }] },

  // ---------------------------------------------------- the miller handed over (banished)
  IVR_meunier_pierres: { act: "IV", title: "Le casseur de pierres", place: "hautecombe",
    fx: { meet: "barthelemy" },
    text: [
      "Barthélemy finit le caillou qu'il était en train de casser. Puis il pose la masse et lève les yeux vers toi. Il n'a pas l'air surpris. Il a l'air d'un homme qui savait qu'il te reverrait et qui n'a jamais su ce qu'il ferait ce jour-là.",
      "« Le bailli m'a banni de la vallée, dit-il. Je suis parti par le sud. Personne ne voulait de moi nulle part : on savait, partout, le meunier qui avait empoisonné son puits. Alors j'ai marché vers l'est, vers la montagne. Ici, ils prennent tout le monde. Ils ne demandent pas. » Il ramasse un caillou, le soupèse. « Je casse les pierres pour le nouveau mur des granges. Ça fait un bruit. Le bruit m'empêche d'écouter l'eau. »",
      "« Depuis le procès, elle ne me parle plus. Margot. Elle s'est tue le jour où vous m'avez livré. » Il te regarde. « Je ne sais pas si je dois vous en vouloir ou vous remercier. Je fais les deux, selon les nuits. »",
      { with: "coliane", text: "Coliane se tient en retrait, les bras croisés. Elle regarde Barthélemy sans colère et sans pitié, comme on regarde quelqu'un qui a payé, et qui le sait, et qui n'a pas fini de payer." },
    ],
    choices: [
      { label: "Lui donner des nouvelles de Brumefeuille", to: "IVR_meunier_nouvelles" },
      { label: "« Les gens de Brumefeuille sont au camp de Vaux. Descendez les voir. »", fx: FIN_MEUNIER("face"), to: "IVR_meunier_vaux" },
      { label: "Le laisser à ses pierres", fx: FIN_MEUNIER("pierres"), to: "IVR_meunier_seul" },
    ] },
  IVR_meunier_nouvelles: { act: "IV", title: "Les nouvelles de Brumefeuille", place: "hautecombe",
    fx: { ep: ["perso", 1500] },
    text: [
      "Tu lui dis ce que tu sais. Il écoute assis sur son tas de pierres, les mains pendantes entre les genoux, sans t'interrompre.",
      { if: { has: "puits:clair" }, text: "Le puits est resté clair, longtemps, jusqu'à ce que la souillure remonte toute la vallée cet hiver. Il ferme les yeux. « Il était clair, dit-il. Il a été clair. »" },
      { if: { has: "jeannot:gueri" }, text: "Le petit Jeannot Guérin a guéri. Barthélemy hoche la tête, plusieurs fois, sans rien dire. Il se souvient de l'enfant. Il se souvient de la fièvre. Il sait d'où elle venait." },
      { if: { is: { berthe: "sauvee" } }, text: "Berthe vit toujours au bord de l'eau, avec ses chèvres. On ne l'a pas pendue. « Je l'aurais laissée pendre, dit-il très bas. Je savais qu'on l'accusait à ma place. Je me taisais. » Il frotte ses mains l'une contre l'autre." },
      { if: { is: { berthe: "pendue" } }, text: "Berthe est morte. On l'a pendue sous le tilleul, pour ce qu'il avait fait. Barthélemy ne dit rien. Il reprend sa masse et casse un caillou, un seul, très fort, et le caillou vole en éclats jusque sous les arcades." },
      { if: { is: { berthe: "cachee" } }, text: "Berthe est rentrée chez elle, après s'être cachée. On la salue de nouveau, d'un signe de tête un peu raide. « Elle me saluait, avant, dit Barthélemy. Tous les matins. Elle m'apportait un fromage à la Saint-Jean. »" },
      "« Et le moulin ? » demande-t-il à la fin. Le moulin est arrêté. La roue ne tourne plus. La farine pourrit dans les sacs. Il hoche la tête, comme s'il s'y attendait, et comme si c'était juste.",
    ],
    choices: [
      { label: "« Margot ne vous en voudrait pas. Elle vous aurait attendu au moulin. »", fx: FIN_MEUNIER("pardonne"), to: "IVR_meunier_margot" },
      { label: "« Les gens de Brumefeuille sont au camp de Vaux. Descendez les voir. »", fx: FIN_MEUNIER("face"), to: "IVR_meunier_vaux" },
      { label: "Le laisser à ses pierres", fx: FIN_MEUNIER("pierres"), to: "IVR_meunier_seul" },
    ] },
  IVR_meunier_margot: { act: "IV", title: "Margot", place: "hautecombe",
    fx: { ep: ["seance", 2000], regard: { barthelemy: "redevable" } },
    text: [
      "Il te regarde comme si tu l'avais frappé. Puis son visage se défait, d'un coup, du haut vers le bas, et il pleure, assis sur ses pierres, les mains ouvertes sur les genoux, sans bruit, comme pleurent les hommes qui n'ont pas pleuré à l'enterrement.",
      "« Elle avait peur du noir, dit-il quand il peut. Elle dormait avec la chandelle. Je la mouchais quand elle dormait. » Il s'essuie le visage avec sa manche grise. « La voix dans l'eau, elle n'a jamais eu peur du noir. Jamais. J'aurais dû comprendre là. »",
      "Quand tu pars, il ne reprend pas sa masse. Il reste assis, à regarder ses mains. Le lendemain, un frère te dit que le meunier a demandé à apprendre à écrire, pour graver un nom sur une pierre. Le nom d'une enfant de neuf ans. Il s'applique, dit le frère. Il fait des fautes. Il recommence.",
      { with: "aubin", text: "Frère Aubin est resté avec lui après ton départ. Tu ne sais pas ce qu'ils se sont dit. Aubin revient tard, les yeux rouges, et il te dit seulement : « Il y a des hommes qui ont besoin qu'on leur dise ce qu'ils savent déjà. »" },
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_vaux: { act: "IV", title: "Descendre", place: "hautecombe",
    fx: { ep: ["seance", 2000] },
    text: [
      "Barthélemy te regarde longtemps. « Ils me tueront, dit-il. — Peut-être, dis-tu. — Peut-être pas, dit-il. C'est pire. » Il se lève. Il dénoue lentement le bandeau gris de son bras et le pose sur le tas de pierres. Puis il le reprend et le renoue. « Je le garde. Pour qu'ils voient. »",
      "Le lendemain matin, il descend le chemin de Vaux à pied, seul, avec son bandeau et son sac. Tu apprendras plus tard ce qui s'est passé au camp. Les gens de Brumefeuille l'ont reconnu. On lui a craché dessus. Une femme l'a frappé avec un seau. Puis Hubert Lagache, le forgeron, a dit qu'on n'était pas des bêtes, et on l'a laissé dormir dans la boue au bout des tentes, et le troisième jour, quelqu'un lui a donné un bol de soupe.",
      "Le quatrième jour, il creusait des latrines avec les autres. Personne ne lui parlait. Personne ne l'empêchait. À Vaux, dit-on, c'est ce qui ressemble le plus à un pardon.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_seul: { act: "IV", title: "Les pierres", place: "hautecombe",
    text: [
      "Tu le laisses. Il reprend sa masse avant que tu aies tourné le dos, et le bruit recommence derrière toi, régulier, comme on bat le blé. Il ne t'appelle pas. Tu ne te retournes pas.",
      "Chaque fois que tu traverses le cloître, ensuite, tu l'entends. Toc. Toc. Toc. Le tas de pierres cassées grandit. Le mur des granges avance. Un jour, il sera fini. Tu te demandes ce qu'il fera, ce jour-là, quand il n'y aura plus de bruit pour couvrir l'eau.",
    ],
    choices: [{ back: "IVR_cloitre" }] },

  // ---------------------------------------------------- the miller protected (he brought the hero to the source)
  IVR_meunier_eau: { act: "IV", title: "Le porteur d'eau", place: "hautecombe",
    fx: { meet: "barthelemy", ep: ["perso", 1000] },
    text: [
      "« Vous voilà, dit Barthélemy. Vous voilà enfin. » Il te serre la main dans ses deux mains enfarinées, qui ne sont plus enfarinées : elles sont rouges, crevassées par l'eau froide des seaux. « On est montés avec ceux de Brumefeuille, quand le puits a noirci pour de bon. Le moulin, je l'ai laissé. La roue tournait dans de l'encre. Ici, je porte l'eau pour les frères. Ça me fait quelque chose à faire avec les mains. »",
      "Il baisse la voix. « Elle est là. Dans la citerne, sous le cloître. Elle m'appelle. Depuis un mois, toutes les nuits, avec la voix de Margot. *Papa, papa, je suis là, descends.* » Il serre tes mains plus fort. « Je ne descends pas. Je vous l'avais promis, au moulin. Je ne descends plus jamais. Mais je suis fatigué. Je ne dors plus. Une nuit, je vais me lever en dormant, et je ne saurai pas que je suis descendu. »",
      "« Venez cette nuit. S'il vous plaît. Venez écouter avec moi. Vous saurez quoi faire. Vous avez toujours su quoi faire. »",
    ],
    choices: [
      { label: "Descendre avec lui à la citerne cette nuit", big: true, to: "IVR_citerne_nuit" },
      { label: "Lui dire de quitter Hautecombe, loin de cette eau", fx: FIN_MEUNIER("parti"), to: "IVR_meunier_parti" },
    ] },
  IVR_meunier_parti: { act: "IV", title: "La route du sud", place: "hautecombe",
    text: [
      "« Partir, dit-il. Oui. Vous avez raison. » Il le dit trop vite. Il prend sa palanche, ses seaux, et il les pose. Il prend son sac. Le lendemain, il est parti, par le chemin de Vaux, et de là vers le sud, vers les collines de Vel-Orin, où les puits sont encore clairs, dit-on.",
      "Il te laisse un sac de farine, la dernière qu'il avait moulue à Brumefeuille, avec un mot que le portier a écrit pour lui : *Pour le pain du voyage. B.* La farine est blanche, fine, parfaite. Le meilleur meunier de la Sorbe. Tu ne sauras jamais s'il est arrivé quelque part.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_citerne_nuit: { act: "IV", title: "La citerne, la nuit", place: "hautecombe", takes: "night", ambiance: "souterrain",
    text: [
      "Vous descendez les douze marches ensemble, à la lueur de la lampe à huile. Barthélemy tremble. L'eau du bassin est noire et lisse, et au milieu, sous la surface, une forme claire, petite, qui pourrait être un visage. Une voix monte de l'eau, une voix de fillette, joyeuse, un peu essoufflée, comme si elle avait couru : « Papa ! Tu as amené quelqu'un ! Viens, papa, viens, il fait chaud ici, il y a Bouton, tu te souviens de Bouton ? »",
      "Barthélemy fait un pas. Il ne s'en rend pas compte. Il en fait un deuxième. Ses sabots sont au bord du bassin, et il se penche, les bras ouverts, comme on se penche sur un berceau.",
      { with: "pip", text: "Pip s'est mis entre lui et l'eau. Il brille aussi fort qu'il peut. Barthélemy ne le voit pas." },
    ],
    choices: [
      { label: "« Bouton ? Margot n'a jamais eu de chien. Elle ne sait pas qui est votre fille. »", if: { clue: "v_margot" }, why: "Il faudrait savoir quelque chose que la voix ignore de Margot.", fx: FIN_MEUNIER("libre"), to: "IVR_meunier_libre" },
      { label: "Lui parler de sa fille, la vraie, pour couvrir l'autre voix", test: { dom: "social", diff: -20, label: "Une voix plus forte que celle de l'eau", help: [H_AUB, H_PIP, { if: { clue: "v_sauge" }, v: 10 }] },
        win: { fx: FIN_MEUNIER("libre"), to: "IVR_meunier_libre" }, lose: { to: "IVR_meunier_tombe" } },
      { label: "L'attraper à bras-le-corps et le tirer en arrière", test: { dom: "combat", diff: -10, label: "Un meunier qui veut sa fille", help: [H_THA] },
        win: { fx: FIN_MEUNIER("tenu"), to: "IVR_meunier_tenu" }, lose: { to: "IVR_meunier_tombe" } },
      { label: "« Je vais lui montrer ce qu'il y a vraiment dans l'eau », dit Pip", who: "pip", fx: { conf: { pip: 10 }, set: { barthelemy: "libre" }, flag: "barthelemy:sort", quest: "IV_barthelemy" }, to: "IVR_meunier_libre" },
    ] },
  IVR_meunier_libre: { act: "IV", title: "Ce qu'il y a dans l'eau", place: "hautecombe",
    fx: { ep: ["seance", 3000], regard: { barthelemy: "redevable" } },
    text: [
      { with: "pip", if: { not: { clue: "v_margot" } }, text: "Pip plonge dans l'eau noire, et l'eau s'éclaire tout entière, d'un coup, jusqu'au fond. Il n'y a pas de visage. Il n'y a rien : de la vase, des feuilles, un seau rouillé, une sandale de frère. Et une forme qui se rétracte, très vite, vers les fissures du roc, comme une main qu'on retire." },
      "Barthélemy s'arrête. Il reste penché au-dessus de l'eau, les bras ouverts, et l'eau se tait. Puis elle reprend, plus doucement, plus vite, en cherchant : « Papa, papa… » Mais ce n'est plus la même voix. Il y a autre chose dessous, une voix plus grave et plus vieille, et Barthélemy l'entend, maintenant. Tu le vois l'entendre.",
      "Il recule. Un pas, deux pas, jusqu'au mur. Il se laisse glisser contre la pierre et s'assied par terre, et il regarde l'eau qui ne dit plus rien. « Ce n'était pas elle, dit-il. Ça n'a jamais été elle. Même au moulin. » Il a l'air de quelqu'un à qui on vient d'enlever une épine qu'il portait depuis si longtemps qu'il ne la sentait plus. Ça fait plus mal que l'épine.",
      "Le lendemain, il fait murer l'entrée de la citerne par les tailleurs de pierre de l'abbaye, à ses frais, avec ses dernières économies. Il aide à porter les pierres. Il dort, la nuit suivante, pour la première fois depuis le printemps.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_tenu: { act: "IV", title: "Le meunier tenu", place: "hautecombe",
    fx: { ep: ["perso", 2000] },
    text: [
      "Tu le prends par la taille et tu le tires en arrière de toutes tes forces. Il se débat comme un noyé, il te frappe au visage avec son coude, il hurle le nom de sa fille. Vous tombez ensemble sur les marches, et tu ne le lâches pas, et l'eau, dans le bassin, appelle de plus en plus fort, de plus en plus vite, *papa papa papa*, jusqu'à ce que ce ne soit plus qu'un bruit.",
      "Puis ça s'arrête. Barthélemy ne se débat plus. Il est mou dans tes bras, il sanglote, il dit *je te déteste, je te déteste* sans savoir à qui. Tu le remontes au cloître. Il ne te regarde plus, ni ce jour-là ni les suivants. Mais il ne redescend pas. Les frères murent la citerne la semaine suivante.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_tombe: { act: "IV", title: "Le bassin", place: "hautecombe", ambiance: "souterrain",
    text: [
      "Trop tard. Barthélemy entre dans l'eau comme on entre dans un lit, sans un bruit, les bras tendus, et l'eau se referme sur lui. La voix de fillette rit, un rire parfait. Et le bassin se soulève : de la vase monte des profondeurs, prend forme, se dresse entre toi et l'endroit où le meunier a disparu, haute comme deux hommes, avec des bras.",
    ],
    combat: { title: "La citerne de Hautecombe", enemies: ["ivr_gardien_citerne"], terrain: "souterrain",
      win: { fx: { set: { barthelemy: "repeche" }, flag: "barthelemy:sort", quest: "IV_barthelemy", ep: ["seance", 3000] }, to: "IVR_meunier_repeche" },
      lose: { fx: { set: { barthelemy: "noye" }, flag: "barthelemy:sort", quest: "IV_barthelemy", pv: -3 }, to: "IVR_meunier_noye" },
      flee: { label: "Plonger sous la chose, droit vers le meunier", dom: "nature", diff: -20, to: "IVR_meunier_repeche" } } },
  IVR_meunier_repeche: { act: "IV", title: "Repêché", place: "hautecombe",
    fx: { set: { barthelemy: "repeche" }, flag: "barthelemy:sort", quest: "IV_barthelemy" },
    text: [
      "Tu plonges. L'eau est tiède et épaisse comme du bouillon, et tu ne vois rien, et tu trouves quand même, à tâtons, une manche, un bras, une barbe. Tu tires. Barthélemy pèse le poids d'un sac de grain mouillé. Vous remontez ensemble sur la margelle, et tu le couches sur le côté, et tu frappes entre ses omoplates jusqu'à ce qu'il crache de l'eau noire et de la vase et qu'il respire.",
      "Il ouvre les yeux. Il te reconnaît. Il dit : « Elle n'y était pas. J'ai cherché. Elle n'y était pas. » Puis il pleure, couché sur la pierre, et tu restes assis{e} à côté de lui, trempé{e}, jusqu'à ce que les frères descendent avec des couvertures. On mure la citerne la semaine suivante. Barthélemy aide à porter les pierres.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_noye: { act: "IV", title: "Le bassin", place: "hautecombe",
    text: [
      "Quand tu reprends conscience, tu es sur les marches, et Frère Herbelin te tient la tête, et la citerne est calme. Lisse. Noire. Il n'y a plus de chose de vase, plus de voix. Il n'y a plus de meunier.",
      "On ne retrouve pas son corps. Les frères murent la citerne la semaine suivante, avec lui dedans, et Frère Amaury dit une messe sur la porte murée. Sur la dernière pierre, quelqu'un a gravé, maladroitement : *B., meunier, et sa fille*. Tu ne sais pas qui. Peut-être lui, avant. Peut-être qu'il savait.",
    ],
    choices: [{ back: "IVR_cloitre" }] },

  // ---------------------------------------------------- the miller who took the bargain
  IVR_meunier_riche: { act: "IV", title: "Le meunier prospère", place: "hautecombe",
    fx: { meet: "barthelemy", ep: ["perso", 1000] },
    text: [
      "« Ah, c'est vous ! » Barthélemy te serre contre lui, et il sent la farine fraîche et le bon drap, et sous ces odeurs, à peine, la vase. Il a grossi. Il a des bagues. « Quand tout le monde a fui Brumefeuille, je suis resté. Mon puits à moi est resté clair, va savoir pourquoi. Le moulin tourne. Le seul de la Sorbe. » Il rit. « J'apporte de la farine aux moines, pour leurs réfugiés. Ils me bénissent tous les jours. »",
      "Ses yeux, quand la lumière les prend de côté, ont un fond sombre, comme de l'eau de tourbière. Il te parle de Margot. « Elle va bien, dit-il. Je lui parle tous les soirs. Elle m'a dit que vous viendriez. Elle m'a dit de vous dire bonjour. »",
      "Plus tard, en passant à la source, Frère Herbelin te dit, sans que tu lui demandes : « L'eau a un goût, depuis une semaine. Un goût de rien. De rien du tout. C'est la première fois en quarante ans. » Il regarde la vasque, l'air inquiet. « Elle est toujours claire. Mais elle a un goût de rien. »",
    ],
    choices: [
      { label: "Suivre Barthélemy cette nuit", big: true, to: "IVR_meunier_suivi" },
      { label: "Ne pas t'en mêler", fx: FIN_MEUNIER("laisse"), to: "IVR_meunier_laisse" },
    ] },
  IVR_meunier_laisse: { act: "IV", title: "Le goût de rien", place: "hautecombe",
    fx: { flag: "IVR:source_gatee" },
    text: [
      "Tu ne t'en mêles pas. Barthélemy repart deux jours plus tard avec ses mules, couvert de bénédictions. La source de Hautecombe reste claire. Elle a un goût de rien. Ceux qui en boivent dorment mal et rêvent d'eau.",
      "Une semaine après, à l'infirmerie, Herbelin a trois fiévreux de plus, des gens qui étaient arrivés en bonne santé. Il ne comprend pas. Il regarde l'eau de la vasque toute la nuit, son gourdin sur les genoux.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_suivi: { act: "IV", title: "La gourde", place: "hautecombe", takes: "night",
    text: [
      "Barthélemy sort de l'hôtellerie au milieu de la nuit, sans lanterne, et il traverse la cour comme quelqu'un qui connaît le chemin par cœur. Il descend sous les cuisines. Herbelin dort sur son tabouret, le menton sur la poitrine, le gourdin tombé par terre : il dort comme on ne dort que quand on a bu quelque chose dans un verre qu'on vous a tendu.",
      "Le meunier s'agenouille devant la vasque. Il sort de son manteau une gourde de cuir, la débouche, et commence à verser, tout doucement, un filet d'eau noire dans l'eau claire. L'eau noire ne se mélange pas : elle descend au fond en un fil, comme de l'encre, et se couche sur le sable, et le sable devient gris autour. Barthélemy chantonne. C'est une comptine. Tu la connais.",
    ],
    choices: [
      { label: "« Margot n'a jamais eu de chien, Barthélemy. Elle ne connaît pas votre fille. »", if: { clue: "v_margot" }, why: "Il faudrait savoir quelque chose que la voix ignore de Margot.", fx: FIN_MEUNIER("repenti"), to: "IVR_meunier_brise" },
      { label: "Lui arracher la gourde", fight: { title: "La vasque de Hautecombe", enemies: ["ivr_meunier", "ivr_gardien_citerne"], terrain: "souterrain", spare: true,
        win: { fx: { set: { barthelemy: "vaincu" }, flag: "barthelemy:sort", quest: "IV_barthelemy", ep: ["seance", 3500] }, to: "IVR_meunier_vaincu" },
        lose: { fx: { set: { barthelemy: "enfui" }, flag: ["barthelemy:sort", "IVR:source_gatee"], quest: "IV_barthelemy", pv: -3 }, to: "IVR_meunier_fuite" },
        calm: { fx: { set: { barthelemy: "repenti" }, flag: "barthelemy:sort", quest: "IV_barthelemy", ep: ["seance", 3500] }, to: "IVR_meunier_brise" } } },
      { label: "« Je m'occupe de la gourde », dit Thavary", who: "thavary", fx: { conf: { thavary: 5 }, set: { barthelemy: "vaincu" }, flag: ["barthelemy:sort", "IVR:gourde_thavary"], quest: "IV_barthelemy", ep: ["seance", 3000] }, to: "IVR_meunier_vaincu" },
      { label: "« Il ne m'entendra pas arriver », dit Coliane", who: "coliane", fx: { conf: { coliane: 5 }, set: { barthelemy: "vaincu" }, flag: ["barthelemy:sort", "IVR:gourde_coliane"], quest: "IV_barthelemy", ep: ["seance", 3000] }, to: "IVR_meunier_vaincu" },
    ] },
  IVR_meunier_vaincu: { act: "IV", title: "La gourde crevée", place: "hautecombe",
    text: [
      { outcome: "win", text: "La chose de vase qui s'était levée de la vasque à son appel retombe en pluie noire sur les dalles. Barthélemy est à genoux, la gourde crevée à côté de lui, et il saigne du nez, et il regarde ses mains." },
      { with: "thavary", if: { has: "IVR:gourde_thavary" }, text: "Thavary est sur lui avant qu'il ait entendu un pas : elle lui tord le poignet, la gourde tombe, elle la crève d'un coup de talon sur la dalle. Barthélemy hurle comme si c'était lui qu'on avait crevé." },
      { with: "coliane", if: { has: "IVR:gourde_coliane" }, text: "Coliane passe derrière lui sans un bruit, et quand il lève la gourde pour verser encore, la gourde n'est plus dans sa main. Elle est dans celle de Coliane, qui la retourne et la vide sur les dalles, loin de la vasque, en le regardant faire." },
      "L'eau noire de la gourde s'est répandue sur le sol et fume, et se retire, peu à peu, dans les joints. Herbelin se réveille en grognant, voit la scène, et se met à jurer comme un charretier. Puis il vide la vasque, toute, et attend qu'elle se remplisse de nouveau, à genoux, jusqu'à l'aube. La source revient claire. Elle a de nouveau un goût : un goût de pierre et de froid.",
      "Barthélemy ne dit rien. Il ne nie pas. On l'enferme dans une cellule du cloître, en attendant. Le Grand Maître fait dire qu'on ne le juge pas : qu'on lui donne un bandeau gris, une masse, et un tas de pierres à casser. Le meunier prend la masse. Il la regarde. Il demande si l'on entend l'eau, depuis le cloître. On lui dit que non.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_brise: { act: "IV", title: "Pas de chien", place: "hautecombe",
    fx: { regard: { barthelemy: "redevable" } },
    text: [
      "Barthélemy s'arrête de verser. La gourde reste penchée dans sa main. Il ne se retourne pas. « Bouton, dit-il. Elle me parle de Bouton. Toutes les nuits. Le chien. Elle l'aimait tant. » Sa voix se brise sur le dernier mot. « On n'a jamais eu de chien. Sa mère avait peur des chiens. »",
      "Il pose la gourde par terre. Il la regarde. Puis il la renverse, du bout du doigt, et l'eau noire coule sur les dalles et se retire dans les joints, en fumant un peu. « Elle ne la connaît pas, dit-il. Elle ne l'a jamais connue. Je lui ai tout donné, et elle ne l'a jamais connue. » Il se met à rire, un rire terrible, puis il pleure, et c'est mieux.",
      "Au matin, il se présente au portier. Il demande un bandeau gris. Il donne ses mules, sa farine, ses bagues aux frères. Il ne garde que son manteau. Herbelin vide la vasque, attend qu'elle se remplisse, et goûte l'eau. « Pierre et froid », dit-il, soulagé.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
  IVR_meunier_fuite: { act: "IV", title: "La vasque", place: "hautecombe",
    text: [
      "La chose de vase t'envoie contre le mur, et le monde devient noir et blanc, et quand il redevient de toutes les couleurs, Barthélemy n'est plus là. La vasque est grise. Pas noire : grise, trouble, avec un fond de vase sur le sable. La gourde est vide, par terre.",
      "Herbelin vide la vasque trois fois. Trois fois elle se remplit grise. La quatrième fois, au bout de deux jours, elle revient claire, ou presque. Elle a un goût de rien. On ne revoit jamais Barthélemy à Hautecombe. Un pâtre dit avoir vu un homme en manteau neuf descendre vers la Sorbe, une nuit, en chantant.",
    ],
    choices: [{ back: "IVR_cloitre" }] },
});

// ================================================================== THE CHILDREN OF VAUX (quest IV_enfants)
Object.assign(P, {
  IVR_combe: { act: "IV", title: "La combe", place: "hautecombe", ambiance: "montagne",
    fx: { questSeen: "IV_enfants", meet: "ivr_babet" },
    text: [
      "Au-dessus de l'abbaye, un sentier de chèvres grimpe dans les éboulis, passe un col étroit entre deux rochers, et débouche sur une combe : un cirque d'herbe rase et de pierres, fermé de trois côtés par des parois, et au fond, un lac. Un petit lac de montagne, rond, qui devait être bleu. Il est gris, maintenant, d'un gris mat, sans reflet, comme une ardoise posée à plat.",
      "Sur la rive, devant une cabane de berger au toit crevé, il y a cinq enfants assis en rond, emmitouflés dans des couvertures volées au camp. Ils ne jouent pas. Ils regardent l'eau. Le plus grand est une fille d'une douzaine d'années, maigre, avec des cheveux coupés au couteau et un bâton à la main, qui se lève quand elle te voit et se met entre toi et les autres.",
      "« N'approchez pas, dit-elle. On attend. Ma mère va venir. La dame l'a dit. » Derrière elle, le plus petit des enfants, une fillette de cinq ans, s'est levée aussi. Elle ne te regarde pas. Elle regarde le lac. Elle a l'air d'écouter quelque chose. Puis elle commence à marcher vers l'eau.",
      { if: { has: "IVR:promesse" }, text: "Tu as promis à Hodierne, sur le chemin. Celle qui marche vers l'eau, c'est peut-être Clarisse. Elle a les cheveux de sa mère." },
    ],
    choices: [{ label: "Courir", big: true, to: "IVR_combe_lac" }] },
  IVR_combe_lac: { act: "IV", title: "Clarisse", place: "hautecombe", urgent: 20,
    text: [
      "La fillette entre dans l'eau grise. Elle ne court pas. Elle marche, tranquillement, comme on entre dans une pièce où quelqu'un vous attend. L'eau lui monte aux chevilles, aux genoux. Elle tend les bras devant elle. Elle dit : « Maman. » Les autres enfants regardent, sans bouger, sans crier, comme dans un rêve.",
      "Il y a cinquante pas jusqu'à la rive. L'eau, autour de la petite, se ride, et des formes s'y lèvent : des femmes de vase, à genoux dans l'eau, qui tendent les bras vers elle, avec des gestes de lavandières qui tordent du linge.",
    ],
    choices: [
      { label: "Te jeter à l'eau et l'attraper", test: { dom: "nature", diff: -10, label: "Cinquante pas, et l'eau froide", help: [H_COL, H_THA] },
        win: { fx: { ep: ["seance", 2500] }, to: "IVR_combe_sauvee" }, lose: { to: "IVR_combe_combat" } },
      { label: "« Je suis plus rapide que toi », dit Pip", who: "pip", fx: { conf: { pip: 10 }, ep: ["seance", 2500] }, to: "IVR_combe_sauvee" },
      { label: "Lancer un sort, un cri, n'importe quoi pour qu'elle se retourne", test: { dom: "magie", diff: -10, label: "Couvrir la voix du lac", help: [H_CHA, H_AUB, { if: { item: "eclat" }, v: 10 }] },
        win: { fx: { ep: ["seance", 2500] }, to: "IVR_combe_sauvee" }, lose: { to: "IVR_combe_combat" } },
      { label: "Rester figé{e} sur la rive", timeout: true, to: "IVR_combe_combat" },
    ] },
  IVR_combe_combat: { act: "IV", title: "Les lavandières", place: "hautecombe",
    text: [
      "Trop lent. La fillette a de l'eau jusqu'à la poitrine quand tu arrives, et les femmes de vase se sont levées tout autour d'elle, et l'une d'elles la tient déjà par les épaules, doucement, comme une mère qui va laver les cheveux de son enfant. Tu entres dans le lac jusqu'à la taille. Elles se tournent vers toi.",
    ],
    combat: { title: "Les lavandières du lac", enemies: [{ id: "ivr_lavandiere", n: 3 }], terrain: "nature", spare: true,
      win: { fx: { ep: ["seance", 3000] }, to: "IVR_combe_sauvee" },
      lose: { fx: { pv: -3 }, to: "IVR_combe_fievre" },
      calm: { fx: { ep: ["seance", 3000] }, to: "IVR_combe_sauvee" },
      flee: { label: "Plonger sous elles et saisir la petite", dom: "nature", diff: -20, to: "IVR_combe_fievre" } } },
  IVR_combe_sauvee: { act: "IV", title: "Sur la rive", place: "hautecombe",
    text: [
      { outcome: "win", text: "La dernière lavandière se défait entre tes mains en une boue grise qui coule entre tes doigts et retourne au lac. Tu prends la fillette dans tes bras. Elle est glacée et elle ne pleure pas." },
      "Tu ressors du lac avec la petite dans les bras, trempé{e} jusqu'aux épaules. Elle se débat, un peu, puis plus du tout. Elle regarde par-dessus ton épaule l'eau grise qui s'est refermée et lissée, sans une ride, comme si rien ne s'y était jamais levé. « Maman était là », dit-elle. Puis elle éternue.",
      "Tu la poses près des autres, sur une couverture. Babet, la grande, s'est approchée avec son bâton. Elle te regarde, puis la petite, puis le lac. Quelque chose a changé dans son visage, mais elle ne lâche pas son bâton.",
    ],
    choices: [{ label: "Parler aux enfants", big: true, to: "IVR_combe_babet" }] },
  IVR_combe_fievre: { act: "IV", title: "Sur la rive", place: "hautecombe",
    fx: { flag: "IVR:fievre" },
    text: [
      "Tu ne sais pas comment tu ressors du lac. Tu sais que tu as la petite contre toi, et que quelqu'un d'autre te tire par le col : Babet, la grande, entrée dans l'eau jusqu'à la taille avec son bâton, qui a frappé les femmes de vase à grands coups, en hurlant, jusqu'à ce qu'elles lâchent. Vous tombez tous les trois sur la rive, dans les cailloux.",
      "La petite respire. Elle tousse de l'eau grise. Babet, à côté d'elle, grelotte, les lèvres bleues, et sur ses bras, là où les mains de vase l'ont tenue, la peau a pris une teinte de cendre. Elle regarde ses bras. Elle ne dit rien. Elle sait ce que c'est, la fièvre grise : tout le monde le sait, au camp.",
    ],
    choices: [{ label: "Parler aux enfants", big: true, to: "IVR_combe_babet" }] },
  IVR_combe_babet: { act: "IV", title: "Babet", place: "hautecombe",
    text: [
      "Ils sont cinq. Babet, douze ans, qui commande. Loys, huit ans, et sa sœur Clarisse, cinq ans, les enfants de Hodierne. Aymon, un garçon de dix ans qui ne parle pas, depuis la mort de son père. Colombe, sept ans, qui suce son pouce et tient la main d'Aymon. Ils n'ont rien mangé depuis deux jours. Ils ont des couvertures du camp, un couteau, une gourde vide.",
      "« La dame dans l'eau du lavoir, dit Babet. Elle a dit qu'ici, dans le lac, on voit ceux qui sont partis. Et c'est vrai. » Elle te regarde avec défi. « J'ai vu ma mère. Hier. Dans l'eau. Elle me faisait signe. Aymon a vu son père. On ne redescend pas. On attend qu'ils sortent. »",
      { if: { has: "IVR:fievre" }, text: "Elle frotte ses bras gris sans s'en rendre compte. Elle a de la fièvre, déjà. Ses yeux brillent trop." },
      { with: "coliane", text: "Coliane s'accroupit à hauteur de Babet. Elle ne sourit pas. « J'avais quatorze ans quand ma mère est morte, dit-elle. Moi aussi je l'ai vue dans l'eau, après. Pendant un an. Tu sais ce que c'était ? » Babet ne répond pas. « C'était moi qui avais envie de la voir. L'eau, elle, elle s'en fiche. »" },
    ],
    choices: [
      { label: "Leur donner à manger, et parler pendant qu'ils mangent", if: { food: { min: 1 } }, why: "Tu n'as rien à leur donner à manger.", fx: { food: -1, ep: ["seance", 2000], conf: { pip: 5 } }, to: "IVR_combe_parle" },
      { label: "Dire à Babet ce qu'est vraiment la dame de l'eau", test: { dom: "social", diff: -20, label: "Une enfant qui veut croire", help: [H_PIP, H_AUB, H_COL, { if: { has: "voix:nommee" }, v: 15 }] },
        win: { fx: { ep: ["seance", 2000] }, to: "IVR_combe_parle" }, lose: { to: "IVR_combe_force" } },
      { label: "Gloup : il roule au milieu des enfants", who: "gloup", fx: { conf: { gloup: 10 }, ep: ["seance", 2000] }, to: "IVR_combe_gloup" },
      { label: "Les prendre par la main et les faire descendre, de gré ou de force", to: "IVR_combe_force" },
    ] },
  IVR_combe_gloup: { act: "IV", title: "Le jeu de Gloup", place: "hautecombe", with: "gloup",
    text: [
      "Gloup roule au milieu du cercle des enfants. Il fait une bulle. La bulle éclate avec un bruit idiot. Colombe sort son pouce de sa bouche. Gloup fait une autre bulle, plus grosse, verte, qui monte un peu dans l'air avant d'éclater sur le nez de Loys. Loys rit. C'est un rire surpris, comme une toux, et il se met la main sur la bouche pour l'arrêter, et il ne peut pas.",
      "Au bout d'un moment, ils sont tous les cinq autour de Gloup, même Babet, même Aymon, à essayer d'attraper les bulles avant qu'elles éclatent, et Gloup chante, une chanson sans paroles qui ressemble à de l'eau qui court sur des cailloux. Personne ne regarde le lac. Le lac ne dit plus rien.",
      "Quand Gloup s'arrête, épuisé, aplati sur l'herbe, Babet le regarde longtemps. « Toi aussi tu es fait d'eau, dit-elle. Mais tu es gentil. » Elle se relève et ramasse les couvertures. « On redescend. »",
    ],
    choices: [{ label: "Redescendre avec eux", big: true, to: "IVR_combe_descente" }] },
  IVR_combe_parle: { act: "IV", title: "Ce que dit le lac", place: "hautecombe",
    text: [
      "Ils mangent comme des chiots, en se battant pour les miettes, et pendant qu'ils mangent, tu parles. Tu leur dis ce que tu sais de la dame de l'eau. Qu'elle n'a pas de visage à elle. Qu'elle prend celui des gens qu'on pleure, parce que c'est le seul moyen qu'elle a qu'on l'écoute. Qu'elle ne connaît pas leurs mères. Qu'elle ne sait que ce qu'ils lui ont dit, eux, en pleurant au bord du lavoir.",
      "Babet t'écoute jusqu'au bout. Puis elle demande, très bas : « Alors ma mère, elle n'est nulle part ? » Tu ne sais pas quoi répondre. Aymon, qui ne parle pas, prend la main de Babet. Elle le laisse faire.",
      { with: "aubin", text: "Frère Aubin s'assied par terre avec eux. « Elle est là où sont les gens qui t'ont aimée, dit-il. Je ne sais pas où c'est. Personne ne le sait. Mais ce n'est pas dans un lac qui ment. » Babet le regarde. « Tu es prêtre ? — Je l'étais. Je ne sais plus. — Ça se voit quand même », dit-elle.", if: { not: { is: { aubin_arc: "pretre" } } } },
      { with: "aubin", if: { is: { aubin_arc: "pretre" } }, text: "« Elle est là où sont les gens qui t'ont aimée, dit Frère Aubin, assis par terre avec eux. Je ne sais pas où c'est. Mais ce n'est pas dans un lac qui ment. » Babet le regarde. « Tu es prêtre ? — Oui, dit-il, sans hésiter, et il a l'air surpris de lui-même. Oui. Je le suis. »" },
      "Au bout d'un long moment, Babet se lève et ramasse les couvertures. « On redescend », dit-elle. Personne ne discute.",
    ],
    choices: [{ label: "Redescendre avec eux", big: true, to: "IVR_combe_descente" }] },
  IVR_combe_force: { act: "IV", title: "De force", place: "hautecombe",
    fx: { flag: "IVR:enfants_forces", conf: { pip: -5 } },
    text: [
      "Tu prends Clarisse sous un bras et Colombe sous l'autre. Babet te frappe avec son bâton, fort, dans les reins, en criant. Loys pleure. Aymon ne bouge pas, puis il suit, parce que les autres partent. Il te faut toute ta patience et toute ta force pour les faire passer le col, les cinq, en les tirant, en les portant, en les rattrapant quand ils essaient de remonter.",
      "Au col, Babet s'arrête et regarde une dernière fois le lac, en bas. Il est gris, mat, immobile. Il ne s'est rien levé dedans quand vous êtes partis. Elle ne te dit plus un mot de toute la descente. Elle tient la main de Clarisse, et de temps en temps, elle te regarde, avec une haine tranquille, de grande personne.",
    ],
    choices: [{ label: "Continuer la descente", big: true, to: "IVR_combe_descente" }] },
  IVR_combe_descente: { act: "IV", title: "Les enfants de la combe", place: "hautecombe",
    text: [
      "Vous arrivez à l'abbaye à la nuit tombée. Frère Isembert les voit passer le portail, les cinq, et il pose sa plume, et il se lève, ce qu'il ne fait jamais. Les frères accourent avec des couvertures. Herbelin prend la petite Clarisse, qui tousse encore, et l'emporte à l'infirmerie dans ses énormes bras.",
      { if: { has: "IVR:fievre" }, text: "On emporte aussi Babet, qui a les bras gris jusqu'aux coudes et qui ne tient plus debout. Herbelin la regarde, puis regarde l'eau de la source, puis toi. « La moitié guérit, dit-il. On verra de quelle moitié elle est. » Trois jours plus tard, la fièvre tombe. Babet a gardé, sur les bras, des marques grises qui ne partiront pas. Elle les montre aux autres enfants avec fierté." },
      "Il faut décider où ils iront. Hodierne attend les siens au camp de Vaux, en bas, à une journée de marche. Les trois autres n'ont plus personne là-bas. Les frères disent qu'ils peuvent les garder tous les cinq, ici, à l'abbaye, où il y a l'eau claire et la soupe, et que les mères monteront.",
    ],
    choices: [
      { label: "Les redescendre toi-même à Vaux, à Hodierne et au camp", fx: { set: { enfants: "ramenes" }, flag: "enfants:sort", quest: "IV_enfants", ep: ["seance", 3500], fac: { brumefeuille: 10 }, time: 12 }, to: "IVR_combe_vaux" },
      { label: "Les laisser à l'abbaye, près de l'eau claire, et faire monter Hodierne", fx: { set: { enfants: "abbaye" }, flag: "enfants:sort", quest: "IV_enfants", ep: ["seance", 3000] }, to: "IVR_combe_abbaye" },
    ] },
  IVR_combe_vaux: { act: "IV", title: "Hodierne", place: "hautecombe",
    text: [
      "Tu les redescends à Vaux le lendemain, les cinq, par le chemin des mulets. Clarisse sur tes épaules, Colombe sur le dos de qui veut bien, Loys qui court devant, Aymon qui ne lâche pas la main de Babet. Ils chantent, à un moment, une chanson de marche qui n'a que deux couplets et qu'ils recommencent jusqu'à ce que tu la saches par cœur.",
      "Hodierne les voit arriver de loin, depuis l'entrée du camp. Elle ne court pas : elle ne peut pas courir. Elle tombe à genoux dans la boue et elle ouvre les bras, et ses deux enfants se jettent dedans, et elle les serre si fort qu'ils crient. Elle ne te dit pas merci. Elle te regarde par-dessus leurs têtes, et c'est mieux.",
      { if: { has: "IVR:enfants_forces" }, text: "Babet, elle, ne se retourne pas vers toi. Elle ne t'a pas pardonné le col, ni les bras qui la tiraient. Elle ne te le pardonnera peut-être jamais. Mais elle est en bas, vivante, et elle te déteste en bonne santé." },
      "Les trois autres restent plantés là, dans la boue, au milieu du camp. Puis Hodierne ouvre un bras de plus, et Babet hésite, et elle y va, et elle tire Aymon et Colombe derrière elle. Hodierne les prend tous. Elle n'a pas de quoi les nourrir. Elle les prend quand même. Le camp de Vaux est comme ça, cet hiver : on prend d'abord, on compte après.",
      "Le soir, tu remontes vers Hautecombe. Tu as encore la chanson de marche dans la tête.",
    ],
    choices: [{ back: "IVR_temple" }] },
  IVR_combe_abbaye: { act: "IV", title: "L'abbaye", place: "hautecombe",
    text: [
      "Les frères installent les cinq enfants dans la chambre chaude, au-dessus des cuisines, celle où l'on met les novices malades. Il y a un poêle, de la paille fraîche, des couvertures de laine. Frère Godefroy leur apporte du lait. Frère Amaury leur apprend à tricoter. Herbelin vient voir Clarisse trois fois par jour et la menace de son gourdin si elle ne finit pas sa soupe, ce qui la fait rire.",
      { if: { has: "IVR:enfants_forces" }, text: "Babet refuse de te parler. Quand tu passes devant la chambre chaude, elle ferme la porte. Frère Amaury dit que ça lui passera. Frère Amaury dit ça de tout." },
      "Hodierne monte au bout de quatre jours, sur une mule que le convoi de l'abbaye lui a prêtée. Elle entre dans la chambre chaude, et tu n'y entres pas. Tu entends seulement, à travers la porte, un long silence, puis des cris, puis des pleurs, puis des rires. Hodierne reste. Les frères lui donnent du travail à la cuisine. Les cinq enfants ont maintenant une mère pour cinq, et trente pères en robe grise, ce qui fait beaucoup, disent les frères, mais on s'arrangera.",
    ],
    choices: [{ back: "IVR_temple" }] },
});

// ================================================================== COLIANE'S ARC: Josse Ferlan at the Circle's camp (Vaux)
var JOSSE_NONE = { not: { any: [{ has: "josse=soigne" }, { has: "josse=menace" }, { has: "josse=reconnu" }] } };
var LOYAL_COUNSEL = { all: [{ loyal: "coliane" }, { any: [{ has: "IVC:conseil_pitie" }, { has: "IVC:conseil_vengeance" }, { has: "IVC:conseil_justice" }] }] };
var GO_PITIE = { any: [{ all: [LOYAL_COUNSEL, { has: "IVC:conseil_pitie" }] }, { all: [{ not: LOYAL_COUNSEL }, { has: "josse=soigne" }] }] };
var GO_VENGEANCE = { any: [{ all: [LOYAL_COUNSEL, { has: "IVC:conseil_vengeance" }] }, { all: [{ not: LOYAL_COUNSEL }, { any: [{ has: "josse=menace" }, JOSSE_NONE] }] }] };
var GO_JUSTICE = { any: [{ all: [LOYAL_COUNSEL, { has: "IVC:conseil_justice" }] }, { all: [{ not: LOYAL_COUNSEL }, { has: "josse=reconnu" }] }] };
Object.assign(P, {
  IVC_camp: { act: "IV", title: "Les tentes bleues", place: "vaux", backName: "les tentes bleues du Cercle",
    fx: { ep: ["perso", 1500] },
    text: [
      { first: true, text: "Au bout du camp de Vaux, là où les tentes de réfugiés s'arrêtent contre un bois de bouleaux, il y a d'autres tentes, plus grandes, plus propres, d'une toile bleu sombre tendue sur des piquets neufs. Une vingtaine. Devant, un tonneau énorme sur une charrette, et une file de gens avec des bols. On y distribue de l'eau claire, montée des collines du sud dans des tonneaux scellés, à une louche par tête. Et pendant qu'on distribue, quelqu'un parle." },
      { first: true, text: "Sur la charrette, à côté du tonneau, un homme barbu, maigre, vieilli avant l'âge, en manteau bleu du Cercle, une jambe raide qu'il tient tendue devant lui. Il parle sans crier, d'une voix enrouée, et les gens l'écoutent en tendant leurs bols. Derrière lui, sous l'auvent de la plus grande tente, huit hommes en armes, gants noirs, épées au côté, et un neuvième, grand, roux, la tête rasée, qui surveille la file les bras croisés." },
      { again: true, text: "Les tentes bleues du Cercle, le tonneau d'eau claire, la file des bols. Les épées aux gants noirs sous l'auvent." },
      { first: true, with: "coliane", text: "Coliane s'est arrêtée net, à vingt pas de la charrette. Tu le sens avant de le voir : elle ne respire plus. Elle regarde l'homme à la jambe raide. Sa main droite est posée sur le manche d'un de ses couteaux, et elle ne s'en rend pas compte." },
      { first: true, if: { not: { present: "coliane" } }, text: "Tu cherches Coliane des yeux, par habitude, et elle n'est pas avec toi. Pourtant une femme du camp, à qui tu demandes qui est l'homme sur la charrette, te dit autre chose : qu'il y a, depuis trois jours, une jeune femme balafrée, deux couteaux à la ceinture, qui rôde autour des tentes bleues et qui le regarde, lui, sans jamais approcher." },
      { if: { has: "josse=soigne" }, first: true, text: "Tu le reconnais. Josse Ferlan, l'homme du fossé de Morteau, celui dont tu as lavé les plaies. Il boite encore. Il a l'air plus vieux de dix ans." },
      { if: { has: "josse=menace" }, first: true, text: "Tu le reconnais. Josse Ferlan, l'homme du fossé de Morteau, celui à qui tu as mis ta lame sous le menton. Il boite encore. Il a l'air plus vieux de dix ans." },
      { if: { all: [{ has: "josse=reconnu" }, { met: "coliane" }] }, first: true, text: "Tu le reconnais. Josse Ferlan, l'homme du fossé de Morteau. *Un jour je te retrouverai.* Coliane l'a dit, ce jour-là. Elle l'a retrouvé." },
      { after: "coliane_arc=pitie", text: "La charrette du tonneau est toujours là. Un autre homme du Cercle tient la louche. Josse est parti." },
      { after: "coliane_arc=vengeance", text: "Les tentes bleues sont à moitié démontées. Ceux qui restent ne te regardent pas, ou te regardent trop. La charrette du tonneau est partie." },
      { after: "coliane_arc=justice", text: "Au bout des tentes bleues, un homme à la jambe raide creuse des fosses dans la terre gelée, sous le regard d'un vieillard assis sur un tabouret. Il ne lève pas la tête." },
    ],
    choices: [
      { label: "Écouter ce que dit l'homme sur la charrette", hide: { any: [{ seen: "IVC_preche" }, { has: "IVC:fini" }] }, to: "IVC_preche" },
      { label: "Chercher la jeune femme aux deux couteaux", hide: { any: [{ present: "coliane" }, { has: "IVC:fini" }] }, to: "IVC_retrouvailles" },
      { label: "Aller trouver Josse Ferlan avec Coliane", big: true, if: { present: "coliane" }, why: "Coliane n'est pas avec toi.", hide: { any: [{ seen: "IVC_josse" }, { has: "IVC:fini" }] }, to: "IVC_josse" },
      { label: "Retrouver Coliane à son feu, ce soir", big: true, if: { present: "coliane" }, why: "Coliane n'est pas avec toi.", hide: { any: [{ not: { seen: "IVC_josse" } }, { seen: "IVC_nuit" }] }, to: "IVC_nuit" },
      { back: "IV_hub" },
    ] },
  IVC_retrouvailles: { act: "IV", title: "La guetteuse", place: "vaux",
    text: [
      "Tu la trouves à la lisière du bois de bouleaux, assise sur une souche, le dos à un tronc, dans l'ombre. D'ici, on voit la charrette, le tonneau, l'homme qui parle. Coliane ne se retourne pas quand tu approches. Elle t'a entendu{e} depuis longtemps.",
      "« Tu es là, dit-elle. Bien sûr que tu es là. » Elle a maigri. Ses cheveux ont repoussé, mal. Elle ne quitte pas l'homme des yeux. « Ça fait trois jours que je le regarde. Il distribue de l'eau. Il parle aux gens. Il leur dit qu'on va délivrer un innocent. » Elle rit, un petit rire sec. « Lui. Il dit ça, lui. »",
      "« Je sais pas ce que je vais faire, dit-elle encore. Trois jours que je sais pas. » Elle se lève, enfin, et elle te regarde. « Tu restes ? Je préférerais que tu restes. Je te le demanderai pas deux fois. »",
    ],
    choices: [
      { label: "« Je reste. » La reprendre avec toi", big: true, fx: { join: "coliane", conf: { coliane: 5 } }, to: "IVC_josse" },
    ] },
  IVC_preche: { act: "IV", title: "Le prêche du tonneau", place: "vaux",
    fx: { meet: ["josse", "ivc_sorel"] },
    text: [
      "« … et on vous a dit qu'il était un monstre, dit Josse Ferlan, la louche à la main. On vous l'a dit à l'église, on vous l'a dit à l'école, on l'a sculpté sur vos bornes. Un sorcier qui voulait devenir dieu. C'est faux. Il était l'un d'eux. Le sixième. Ils l'ont enchaîné sous le glacier et ils ont pris sa place dans les livres. » Il verse une louche dans le bol d'une vieille femme. « Et l'eau noire qui monte, c'est sa douleur à lui. Délivrez-le, et l'eau s'arrêtera. »",
      "« Au printemps, dit-il, quand les cols s'ouvriront, nous monterons à la Fenne. Dame Veyra nous attend là-haut. Ceux qui veulent venir, venez. On a de l'eau claire, on a du pain, on a des armes. On va casser les chaînes. » Quelques jeunes gens hochent la tête, dans la file. Le grand rouquin sous l'auvent note des noms sur une tablette.",
      { if: { has: "R:revele" }, text: "La moitié de ce qu'il dit est vraie. Tu le sais, maintenant : tu l'as entendue de la bouche d'Edrin, au temple. C'est l'autre moitié qui fait peur." },
      { if: { has: "passe:cercle" }, text: "Le grand rouquin sous l'auvent te regarde, plisse les yeux, et te fait un petit signe de tête, comme à un ancien camarade. Tu ne le connais pas. Lui, peut-être, t'a vu{e} à l'Athénée, du temps où tu recopiais des livres pour eux." },
    ],
    choices: [
      { label: "Le contredire, devant la file", if: { has: "R:revele" }, why: "Tu ne sais pas assez de la vérité pour le contredire devant tous.", fx: { flag: "IVC:contredit", ep: ["seance", 2000] }, to: "IVC_contredire" },
      { label: "Le laisser parler", back: "IVC_camp" },
    ] },
  IVC_contredire: { act: "IV", title: "L'autre moitié", place: "vaux",
    text: [
      "Tu montes sur la charrette. Josse s'arrête, la louche en l'air. Et tu dis l'autre moitié, celle qu'il ne sait pas : que le sixième s'est proposé, qu'il tient une porte, que s'il lâche, ce n'est pas lui qui sortira mais ce qui a poussé dans l'eau noire pendant quatre cents ans. Que casser le Sceau, ce n'est pas ouvrir une prison. C'est ouvrir une porte contre le vent.",
      "La file s'est tue. Les gens regardent Josse. Josse te regarde, et tu vois sur son visage quelque chose que tu as déjà vu, dans un fossé, à Morteau, ou ailleurs : la tête d'un homme qui a parié sa vie sur une chose et qui commence à comprendre qu'il a encore perdu. Le grand rouquin a décroisé les bras. Il s'avance d'un pas. « Ça suffit, dit-il. Descendez de là. Ou on vous aide. »",
      "Tu descends. Les gens de la file te regardent passer. Une vieille femme vide son bol par terre, l'eau claire, la précieuse eau claire, et s'en va sans un mot. Derrière toi, Josse ne reprend pas son prêche.",
    ],
    choices: [{ back: "IVC_camp" }] },
  IVC_josse: { act: "IV", title: "Josse Ferlan", place: "vaux", with: "coliane",
    fx: { meet: "josse", ep: ["seance", 2000] },
    text: [
      "Vous attendez que la file se vide. Josse descend de la charrette, maladroitement, à cause de sa jambe, et il vous voit. Il s'arrête. La louche lui tombe des mains.",
      { if: { has: "josse=reconnu" }, text: "« Coliane », dit-il. Il dit son nom comme il l'a dit dans le fossé, à Morteau : comme une réponse à une question qu'on ne lui a pas posée. « Tu avais dit que tu me retrouverais. Je t'attendais. Je ne savais pas quand. »" },
      { if: { any: [{ has: "josse=soigne" }, { has: "josse=menace" }, JOSSE_NONE] }, text: "Il te regarde d'abord, toi, puis la jeune femme à côté de toi. Et il met longtemps à comprendre. Le visage a changé, la balafre est nouvelle, les cheveux sont courts. Mais il comprend. Il devient très blanc. « Coliane, dit-il. La petite Coliane. La sœur d'Évrard. »" },
      { with: "coliane", if: { not: { has: "josse=reconnu" } }, text: "« Josse Ferlan, dit Coliane. De Hautgrès. Tu m'as appris à nager, dans l'écluse. Tu l'as ouverte, cette nuit-là. » Sa voix est parfaitement calme. « Ne dis pas non. Je sais. Je le sais depuis deux ans. »" },
      { if: { has: "josse=soigne" }, text: "Il se tourne vers toi. « Vous m'avez lavé les jambes, à Morteau, dit-il. Je vous dois d'être debout. » Il regarde Coliane. « Je ne savais pas que vous marchiez avec elle. Je crois que je comprends, maintenant, pourquoi vous ne m'avez pas laissé crever. » Il se trompe. Tu ne lui dis pas." },
      { if: { has: "josse=menace" }, text: "Il te regarde, toi, avec une peur ancienne. « Vous, dit-il. La lame. » Il se tourne vers Coliane. « Alors c'est pour elle que vous vouliez savoir. » Il se trompe. Tu ne lui dis pas." },
      "Il raconte, parce qu'on ne lui demande rien, et qu'il a besoin de parler. Après Morteau, il est revenu au Cercle. Personne ne lui a rien reproché, personne ne lui a rien demandé. Veyra l'a envoyé ici, avec Gautier Sorel, le rouquin, et huit épées : nourrir les réfugiés, leur dire la vérité sur le sixième, recruter pour le printemps. « C'est la première fois que je fais quelque chose de bien, dit-il. Je donne de l'eau claire à des gens qui ont soif. Je leur dis qu'on a menti. Et je sais que c'est pour me racheter, et je sais que ça ne rachète rien. » Il regarde Coliane. « Je n'ai pas oublié Hautgrès un seul jour. Pas un seul. »",
      { with: "coliane", text: "Coliane ne répond rien. Elle se retourne et s'en va, à grands pas, à travers le camp. Tu la suis des yeux. Avant de disparaître entre les tentes, elle te fait signe, sans se retourner, de la main : *ce soir*." },
    ],
    choices: [{ label: "Laisser Josse à son tonneau", back: "IVC_camp" }] },
  IVC_nuit: { act: "IV", title: "Le feu de Coliane", place: "vaux", with: "coliane", takes: "night",
    fx: { ep: ["seance", 2500] },
    text: [
      "Elle a fait un feu à l'écart, dans le bois de bouleaux, avec du bois mort qui fume. Elle est assise, les genoux sous le menton, le dos à un bouleau, et elle ne te regarde pas venir.",
      { with: "coliane", if: { has: "josse=reconnu" }, text: "Elle fait tourner entre ses doigts deux morceaux d'os poli. Le jeton de Josse, celui qu'il a cassé en deux dans une grange de Morteau. Elle les emboîte. Elle les sépare. Elle les emboîte." },
      { with: "coliane", if: { not: { has: "josse=reconnu" } }, text: "Elle ne tient rien entre ses doigts. Elle a sorti un de ses couteaux et elle en essuie la lame, encore et encore, sur sa manche, alors qu'elle est propre." },
      { with: "coliane", text: "« Évrard avait dix-neuf ans, dit-elle sans te regarder. Josse en avait vingt-huit. Ils pêchaient ensemble, dans le bief, sous l'écluse. Le dimanche, Josse mangeait chez nous. Ma mère lui gardait la peau du lait. Il me faisait sauter sur ses genoux. Il m'a appris à nager, je te l'ai dit. Il m'a appris à siffler avec deux doigts. » Elle siffle, très doucement, entre ses doigts. Le son monte dans les bouleaux et s'éteint." },
      { with: "coliane", text: "« Et il a ouvert l'écluse, pour sa femme, parce qu'on lui avait promis. Et elle est morte quand même. Et Évrard est mort. Et ma mère. Et quarante autres. Et lui, il est là, et il distribue de l'eau, et il pleure en le disant, et il y croit. » Elle jette un morceau de bois dans le feu. « Je l'ai haï deux ans. Je savais exactement ce que je ferais le jour où je le retrouverais. Et maintenant il est là, et je sais plus rien. »" },
      { with: "coliane", text: "Elle tourne la tête vers toi, enfin. « Qu'est-ce que je fais ? Toi. Dis-moi. Je te promets rien. Mais dis-moi. »" },
      { if: { mark: { min: 3 } }, with: "coliane", text: "Ses yeux tombent sur ta main gauche, sur la tache qui monte vers ton poignet. Quelque chose passe sur son visage. Elle attend quand même ta réponse. Mais elle s'est reculée d'un demi-pas." },
    ],
    choices: [
      { label: "« Pardonne-lui. Pas pour lui. Pour toi. »", fx: { flag: "IVC:conseil_pitie", conf: { aubin: 5, pip: 5 } }, to: "IVC_decision" },
      { label: "« Il a tué ton frère, ta mère, ton village. Fais ce que tu as juré de faire. »", fx: { flag: "IVC:conseil_vengeance", fear: { pip: 5 } }, to: "IVC_decision" },
      { label: "« Ce n'est ni à toi ni à moi de le juger. Ramène-le devant ceux de Hautgrès. »", fx: { flag: "IVC:conseil_justice", conf: { thavary: 5 } }, to: "IVC_decision" },
      { label: "« Je ne peux pas te le dire. C'est à toi. »", fx: { flag: "IVC:conseil_aucun" }, to: "IVC_decision" },
    ] },
  IVC_decision: { act: "IV", title: "Le matin", place: "vaux", with: "coliane", takes: "morning",
    text: [
      "Elle ne répond rien. Elle t'écoute, elle regarde le feu, elle hoche la tête, ou non. Puis elle se couche, en boule, près des braises, et elle dort, ou elle fait semblant. Toi, tu ne dors pas.",
      { with: "coliane", if: LOYAL_COUNSEL, text: "Au matin, elle est déjà debout. Elle a rangé ses couteaux. Elle te regarde, et tu comprends qu'elle va faire ce que tu lui as dit. Pas parce que tu l'as dit : parce qu'elle a décidé, cette nuit, de te faire confiance une fois de plus que les autres. C'est lourd. Ça devrait l'être." },
      { with: "coliane", if: { all: [{ not: LOYAL_COUNSEL }, { not: { has: "IVC:conseil_aucun" } }] }, text: "Au matin, elle est déjà debout. Elle a rangé ses couteaux. Elle te regarde un instant, et tu comprends qu'elle a écouté ce que tu lui as dit, et qu'elle a décidé seule. Elle ne te doit pas assez pour faire autrement." },
      { with: "coliane", if: { has: "IVC:conseil_aucun" }, text: "Au matin, elle est déjà debout. Elle a rangé ses couteaux. « Merci, dit-elle. De ne pas m'avoir dit. » Elle a décidé seule. Elle aurait décidé seule de toute façon." },
    ],
    choices: [
      { label: "La suivre jusqu'aux tentes bleues", big: true, hide: { not: GO_PITIE }, fx: { set: { coliane_arc: "pitie" } }, to: "IVC_pitie" },
      { label: "La suivre jusqu'aux tentes bleues", big: true, hide: { not: GO_VENGEANCE }, fx: { set: { coliane_arc: "vengeance" } }, to: "IVC_vengeance" },
      { label: "La suivre jusqu'aux tentes bleues", big: true, hide: { not: GO_JUSTICE }, fx: { set: { coliane_arc: "justice" } }, to: "IVC_justice" },
    ] },

  // ---------------------------------------------------- pity
  IVC_pitie: { act: "IV", title: "La pitié", place: "vaux", with: "coliane",
    fx: { flag: "IVC:fini", conf: { coliane: 10, aubin: 5, pip: 10 }, ep: ["histoire", 4000], set: { ivc_josse: "parti" }, regard: { josse: "redevable" } },
    text: [
      "Josse est déjà à son tonneau, la louche à la main. La file n'est pas encore là. Il voit Coliane venir et il pose la louche, et il descend de la charrette, et il attend, debout, les bras le long du corps. Les épées de Sorel, sous l'auvent, se sont levées. Sorel lui-même les fait se rasseoir d'un geste : il veut voir.",
      { with: "coliane", text: "Coliane s'arrête devant lui, tout près. Elle lève la main. Il ferme les yeux. Elle lui prend la main, la retourne, paume en l'air, et elle y pose quelque chose." },
      { with: "coliane", if: { has: "josse=reconnu" }, text: "Les deux moitiés de son jeton d'os, celui qu'il avait cassé dans la grange de Morteau. Elle les a gardées tout ce temps. Elle lui referme les doigts dessus." },
      { with: "coliane", if: { not: { has: "josse=reconnu" } }, text: "Un sifflet de saule, petit, noirci, qu'elle porte au cou depuis toujours, sans que tu aies jamais su d'où il venait. « C'est toi qui me l'avais taillé, dit-elle. Pour mes huit ans. »" },
      { with: "coliane", text: "« Je te pardonne pas, dit-elle. Je sais pas faire ça. Mais je te tuerai pas, et je te laisserai pas tuer, et je te demanderai plus rien. Pars. Quitte le Cercle. Va à Hautgrès. Il y a quarante tombes que personne n'entretient. Entretiens-les. Toute ta vie. » Elle recule d'un pas. « Et ne m'écris jamais. »" },
      "Josse ne dit rien. Il ne pleure pas. Il reste là, le poing serré sur ce qu'elle lui a donné, et il hoche la tête, une fois, très lentement. Puis il défait la cordelière de son manteau bleu, laisse tomber le manteau dans la boue, et s'en va, en boitant, vers la route de la vallée. Il ne prend rien. Sorel ne le retient pas.",
      "Avant de partir, il s'est arrêté à ta hauteur, une seconde. « Veyra est sous la Fenne, a-t-il dit très bas. Pas au printemps. Maintenant. Elle tient une vieille porte de l'Ordre, au bord du glacier, avec cinquante épées. Le printemps, c'est pour les recrues. Elle, elle n'attendra pas. »",
    ],
    choices: [{ label: "Rester avec Coliane", big: true, to: "IVC_fin" }] },

  // ---------------------------------------------------- vengeance
  IVC_vengeance: { act: "IV", title: "La vengeance", place: "vaux", with: "coliane",
    fx: { flag: "IVC:fini", set: { ivc_josse: "mort" }, ep: ["histoire", 4000], fear: { pip: 10, coliane: -5 }, conf: { aubin: -10 } },
    text: [
      "Josse est déjà à son tonneau. Il voit Coliane venir et il pose la louche, et il descend de la charrette, et il attend, debout, les bras le long du corps. Il a compris. Il l'a peut-être compris dès hier.",
      { with: "coliane", text: "Coliane ne dit rien. Elle marche droit sur lui, et elle a le couteau dans la main avant d'arriver, et elle ne ralentit pas. Il ne lève pas les bras. Il dit seulement « Coliane » une dernière fois, et le couteau entre sous les côtes, et elle reste contre lui, front contre son épaule, comme on se serre contre quelqu'un, le temps qu'il tombe." },
      "Les gens de la file, qui commençaient à arriver avec leurs bols, crient et s'enfuient. Sous l'auvent, Gautier Sorel a dégainé. « Celle-là, dit-il à ses épées, je la veux vivante. Les autres, comme vous voulez. »",
      { with: "aubin", text: "Frère Aubin a couru jusqu'à Josse, à genoux dans la boue, les mains sur la plaie. C'est trop tard, et il le sait, et il ne s'arrête pas. Il dit la prière des mourants très vite, en s'embrouillant, pendant que les épées arrivent." },
    ],
    combat: { title: "Les épées de Sorel", enemies: [{ id: "ivc_epee", n: 2 }, "ivc_sorel"], terrain: "nature",
      win: { fx: { ep: ["seance", 4000], fac: { cercle: -15 } }, to: "IVC_vengeance_apres" },
      lose: { fx: { pv: -4, fac: { cercle: -10 } }, to: "IVC_vengeance_fuite" },
      flee: { label: "Prendre Coliane par le bras et fuir à travers le camp", dom: "discretion", diff: -10, to: "IVC_vengeance_fuite" } } },
  IVC_vengeance_apres: { act: "IV", title: "Après", place: "vaux", with: "coliane",
    text: [
      "Sorel est à genoux dans la boue, désarmé, la main sur une épaule ouverte. Ses épées sont à terre ou en fuite. Il te regarde avec une haine propre, professionnelle. « Veyra saura, dit-il. Elle saura que vous avez tué un homme qui donnait de l'eau aux enfants. » Il crache. « Ça lui fera plaisir, je crois. Ça lui donnera raison. »",
      "Les gens du camp sortent de leurs tentes, lentement, et regardent. Ils regardent le corps de Josse, le tonneau renversé, l'eau claire qui s'est répandue dans la boue et que la boue boit. Une femme s'agenouille et essaie d'en recueillir dans ses mains. Personne ne vient te parler.",
    ],
    choices: [{ label: "Rester avec Coliane", big: true, to: "IVC_fin" }] },
  IVC_vengeance_fuite: { act: "IV", title: "La fuite", place: "vaux", with: "coliane",
    text: [
      "Tu prends Coliane par le bras et tu l'entraînes. Elle se laisse faire. Vous courez à travers le camp, entre les tentes, par-dessus les cordes, les feux, les gens qui crient, et les épées du Cercle derrière vous, qui ne connaissent pas le camp et qui se perdent. Vous vous arrêtez de l'autre côté, contre la palissade du fond, à bout de souffle.",
      "Coliane a encore le couteau dans la main. Il y a du sang dessus, et sur sa manche, et sur son visage. Elle ne l'essuie pas. Elle regarde la lame comme si elle ne savait pas d'où elle venait.",
    ],
    choices: [{ label: "Rester avec Coliane", big: true, to: "IVC_fin" }] },

  // ---------------------------------------------------- justice
  IVC_justice: { act: "IV", title: "La justice", place: "vaux", with: "coliane",
    fx: { meet: "ivc_guiraud", ep: ["seance", 2500] },
    text: [
      "Coliane ne va pas au tonneau. Elle va d'abord à l'autre bout du camp, chez les gens de la haute Sorbe, et elle cherche, de tente en tente, et elle les trouve : sept personnes, pas plus, qui viennent de Hautgrès et qui sont encore en vie. Un vieillard, surtout, assis sur un tabouret devant une tente rapiécée, avec une canne et une couverture sur les genoux. Guiraud, l'éclusier de Hautgrès. Celui qui gardait l'écluse du haut, cette nuit-là, et qui dormait.",
      { with: "coliane", text: "« Il est là, lui dit Coliane. Josse Ferlan. Au bout du camp, aux tentes bleues. Je pourrais le tuer. Je veux pas. Je veux que vous le voyiez. Tous. Et que vous disiez, vous, ce qu'on en fait. » Le vieux la regarde longtemps. Puis il se lève, en s'appuyant sur sa canne, et les six autres se lèvent avec lui." },
      "Vous traversez le camp ensemble, lentement, au pas du vieillard. Les gens s'écartent. Certains suivent. Quand vous arrivez aux tentes bleues, il y a déjà cinquante personnes derrière vous. Josse est à son tonneau. Il voit Coliane, il voit les sept de Hautgrès, il voit le vieux Guiraud. Il pose la louche. Sous l'auvent, Gautier Sorel s'avance, la main sur la garde de son épée.",
      "« Cet homme travaille pour le Cercle, dit Sorel. Il n'a de comptes à rendre qu'à Dame Veyra. Retirez-vous. »",
    ],
    choices: [
      { label: "« Il a des comptes à rendre à ces sept-là. Écartez-vous. »", test: { dom: "social", diff: -20, label: "Devant cinquante témoins", help: [H_COL, H_AUB, { if: { has: "IVC:contredit" }, v: 15 }, { if: { item: "ivr_temoignage" }, v: 10 }] },
        win: { fx: { ep: ["seance", 2500] }, to: "IVC_jugement" }, lose: { to: "IVC_justice_combat" } },
      { label: "« Laisse-moi lui parler de devoir », dit Thavary", who: "thavary", fx: { conf: { thavary: 5 }, ep: ["seance", 2500] }, to: "IVC_jugement" },
      { label: "Dégainer", to: "IVC_justice_combat" },
    ] },
  IVC_justice_combat: { act: "IV", title: "Sorel", place: "vaux",
    text: [
      "Sorel tire son épée. Ses hommes sortent de dessous l'auvent. Les gens de la Sorbe reculent, mais ne s'en vont pas : ils restent, en cercle, à regarder. Les sept de Hautgrès ne reculent pas du tout. Le vieux Guiraud s'est rassis sur un tonneau vide qu'on lui a apporté, sa canne entre les genoux, comme au spectacle.",
    ],
    combat: { title: "Les épées de Sorel", enemies: [{ id: "ivc_epee", n: 2 }, "ivc_sorel"], terrain: "nature", spare: true,
      win: { fx: { ep: ["seance", 3500], fac: { cercle: -10 } }, to: "IVC_jugement" },
      lose: { fx: { pv: -3 }, to: "IVC_justice_foule" },
      calm: { fx: { ep: ["seance", 3500] }, to: "IVC_jugement" },
      flee: { label: "Reculer dans la foule", dom: "discretion", diff: -10, to: "IVC_justice_foule" } } },
  IVC_justice_foule: { act: "IV", title: "La foule", place: "vaux",
    text: [
      "Sorel te met à terre d'un coup de garde dans la mâchoire, et il lève son épée, et c'est la foule qui l'arrête. Pas un héros, pas une épée : une femme avec un seau, puis un homme avec une pelle, puis vingt, puis cinquante, qui s'avancent sans rien dire jusqu'à ce que les épées du Cercle soient entourées, pressées, poussées contre leurs propres tentes. Sorel regarde autour de lui. Il remet son épée au fourreau.",
      "« Gardez-le, votre homme, dit-il. Il ne vaut pas une émeute. » Il fait signe aux siens. Ils rentrent sous l'auvent. Les gens de la Sorbe ne s'en vont pas. Ils attendent ce que dira le vieillard.",
    ],
    choices: [{ label: "Laisser parler Guiraud", big: true, to: "IVC_jugement" }] },
  IVC_jugement: { act: "IV", title: "Le jugement de Hautgrès", place: "vaux",
    fx: { flag: "IVC:fini", set: { ivc_josse: "juge" }, conf: { coliane: 10, thavary: 5, aubin: 5 }, ep: ["histoire", 4000], regard: { josse: "redevable" } },
    text: [
      "Josse s'agenouille devant le vieux Guiraud. Personne ne le lui a demandé. Et il raconte, devant cinquante personnes, l'écluse, la nuit, la promesse du Cercle, sa femme qui toussait, la roue de la vanne qui grinçait si fort qu'il était sûr que tout le village allait se réveiller. Personne ne s'est réveillé. Il dit le nom des quarante morts de Hautgrès. Il les connaît tous. Il ne se trompe pas une fois.",
      "Le vieux Guiraud écoute. Les sept de Hautgrès écoutent. Quand Josse a fini, l'éclusier reste longtemps sans rien dire, les deux mains sur sa canne. « Moi aussi, je dormais, dit-il enfin. Cette nuit-là. Je devais veiller la vanne. Je dormais. » Il regarde Josse. « On ne te tuera pas. Il y a eu assez de morts. Tu vas creuser. Ici, au camp. Les fosses, les latrines, les fossés. Tous les jours, jusqu'au printemps, devant nous. Et au printemps, tu remonteras à Hautgrès avec nous, et tu creuseras encore. Et quand on aura fini de creuser, on verra. »",
      { with: "coliane", text: "Coliane écoute le jugement sans bouger, debout derrière le vieillard. Quand c'est fini, elle s'approche de Josse, toujours à genoux, et elle lui met une pelle dans les mains. Elle ne dit rien. Lui non plus. Il se lève, et il va creuser." },
      "Sous l'auvent, Sorel et ses hommes plient les tentes bleues dans l'après-midi et s'en vont vers l'est, vers la Fenne, avec la charrette et le tonneau vide. Il ne reste au camp qu'un manteau bleu dans la boue. Quelqu'un en fait des langes.",
    ],
    choices: [{ label: "Rester avec Coliane", big: true, to: "IVC_fin" }] },

  IVC_fin: { act: "IV", title: "Coliane", place: "vaux", with: "coliane",
    text: [
      { with: "coliane", if: { is: { coliane_arc: "pitie" } }, text: "Le soir, Coliane mange. C'est la première fois depuis trois jours, peut-être plus. Elle mange beaucoup, salement, avec les doigts, et elle te vole un morceau de pain dans ton bol, et elle ne s'en excuse pas. À un moment, elle rit, d'une chose idiote qu'a dite quelqu'un au feu voisin. Elle s'arrête tout de suite, surprise. Puis elle recommence." },
      { with: "coliane", if: { is: { coliane_arc: "vengeance" } }, text: "Le soir, Coliane ne mange pas. Elle a lavé son couteau dans la rivière, longtemps, et sa manche, et son visage. Elle s'assied près du feu et regarde les flammes. « Ça m'a rien rendu, dit-elle au bout d'un très long moment. Rien. Je croyais que ça me rendrait quelque chose. » Elle ne pleure pas. Tu préférerais qu'elle pleure." },
      { with: "coliane", if: { is: { coliane_arc: "justice" } }, text: "Le soir, Coliane va voir le vieux Guiraud à sa tente, et elle reste avec lui jusqu'à la nuit. Tu les entends parler de Hautgrès, des noms, des maisons, de qui habitait où, de qui pêchait avec qui. Ils rient, une fois. Quand elle revient, elle s'assied à côté de toi sans rien dire, et elle pose la tête sur ton épaule, une seconde, et la retire." },
      { with: "coliane", if: { all: [{ has: "IVC:conseil_vengeance" }, { not: { is: { coliane_arc: "vengeance" } } }] }, text: "« Tu m'avais dit de le tuer, dit-elle à un moment, sans te regarder. Je l'ai pas fait. Je voulais que tu le saches. Que je t'ai entendu{e}. Et que je l'ai pas fait. »" },
      { with: "coliane", if: { all: [{ has: "IVC:conseil_pitie" }, { is: { coliane_arc: "vengeance" } }] }, text: "« Tu m'avais dit de pardonner, dit-elle à un moment, sans te regarder. Je t'ai entendu{e}. J'ai pas pu. » Elle se tait. « Tu le diras pas aux autres. Que tu me l'avais dit. »" },
      { with: "pip", text: "Pip vient se poser sur le genou de Coliane, et elle le laisse faire, ce qu'elle ne fait jamais. Elle le regarde briller. « Toi, t'as jamais fait de mal à personne, hein ? » dit-elle. Pip ne répond pas. Il ne se souvient pas." },
    ],
    choices: [{ label: "Retourner au camp de Vaux", big: true, back: "IV_hub" }] },
});

// ------------------------------------------------------------------ without Coliane: the Circle's toll on the mule road
Object.assign(P, {
  IVC_barrage: { title: "Le péage du Cercle", place: null,
    fx: { meet: ["josse", "ivc_sorel"] },
    text: [
      "À mi-descente, le chemin des mulets est barré par une charrette mise en travers, et derrière la charrette, huit hommes en armes, gants noirs, manteaux bleus du Cercle. Devant eux, arrêtés, les trois mulets du convoi de l'abbaye, le frère convers et ses deux garçons. Un grand rouquin à la tête rasée compte les miches de pain à voix haute, et en fait mettre une sur trois dans un sac.",
      "« Un pain sur trois pour les marcheurs du printemps, dit-il quand il te voit. Ceux qui monteront délivrer le sixième. Les moines peuvent bien donner un peu de leur pain à une cause juste. » Il sourit. « Gautier Sorel, du Cercle. Et vous, vous montez ou vous descendez ? »",
      "Derrière lui, assis sur le bord de la charrette, un homme barbu à la jambe raide tient le registre où l'on note les pains. Il ne lève pas les yeux. Il a l'air de quelqu'un qui préférerait être ailleurs, et qui a l'habitude de préférer.",
      { if: { has: "josse=soigne" }, text: "Tu le reconnais : Josse Ferlan, l'homme du fossé de Morteau, dont tu as lavé les plaies. Il te reconnaît aussi. Il devient rouge, et il baisse la tête sur son registre." },
      { if: { has: "josse=menace" }, text: "Tu le reconnais : Josse Ferlan, l'homme du fossé de Morteau, à qui tu as mis ta lame sous le menton. Il te reconnaît aussi. Sa main se crispe sur la plume." },
    ],
    choices: [
      { label: "Parler à l'homme au registre", to: "IVC_barrage_josse" },
      { label: "Payer pour le pain : vingt sous, et ils laissent passer le convoi", if: { gold: { min: 20 } }, why: "Tu n'as pas vingt sous.", fx: { gold: -20, set: { ivc_josse: "reste" }, ep: ["perso", 1500] }, to: "IVC_barrage_paye" },
      { label: "Renverser leur charrette", fight: { title: "Le péage du Cercle", enemies: [{ id: "ivc_epee", n: 2 }, "ivc_sorel"], terrain: "nature",
        win: { fx: { set: { ivc_josse: "reste" }, fac: { cercle: -10, ordre: 5 }, ep: ["seance", 3500] }, to: "IVC_barrage_vaincu" },
        lose: { fx: { pv: -3, set: { ivc_josse: "reste" } }, to: "IVC_barrage_perdu" },
        flee: { label: "Lâcher prise et descendre par les éboulis", dom: "nature", diff: -10, to: "IVC_barrage_perdu" } } },
    ] },
  IVC_barrage_josse: { title: "L'homme au registre", place: null,
    text: [
      "Tu t'assieds sur le bord de la charrette, à côté de lui. Sorel vous regarde, mais il ne dit rien : il compte ses pains. L'homme au registre s'appelle Josse Ferlan. Il est de Hautgrès, dit-il, ou il était. Il n'y a plus de Hautgrès. Il ne dit pas pourquoi. Il dit qu'il fait ça pour se racheter : nourrir les réfugiés, leur dire la vérité sur le sixième, préparer le printemps.",
      { if: { has: "R:revele" }, text: "Alors tu lui dis l'autre moitié. Celle qu'Edrin t'a dite au temple. Que le sixième s'est proposé. Qu'il tient une porte. Que s'il lâche, ce n'est pas lui qui sortira. Que casser le Sceau, ce n'est pas délivrer : c'est ouvrir la porte au vent. Josse t'écoute en serrant le registre contre lui. Il a les mains qui tremblent." },
      { if: { not: { has: "R:revele" } }, text: "Tu lui demandes s'il sait vraiment ce qu'il y a sous le glacier. S'il a vu. S'il est sûr. Il ouvre la bouche, et il la referme. « Non, dit-il. Je ne sais jamais rien. On ne me dit que ce qu'il faut pour que je fasse ce qu'on veut. » Il regarde les pains dans le sac. « Ça, au moins, je sais que c'est du pain volé. »" },
    ],
    choices: [
      { label: "« Alors arrêtez. Maintenant. »", test: { dom: "social", diff: -10, label: "Un homme qui attend qu'on lui dise d'arrêter", help: [H_AUB, H_PIP, { if: { has: "R:revele" }, v: 20 }, { if: { has: "josse=soigne" }, v: 10 }] },
        win: { fx: { set: { ivc_josse: "parti" }, ep: ["seance", 3500], fac: { cercle: -5 } }, to: "IVC_barrage_parti" }, lose: { back: "IVC_barrage" } },
      { back: "IVC_barrage" },
    ] },
  IVC_barrage_parti: { title: "Le registre", place: null,
    text: [
      "Josse se lève. Il pose le registre sur la charrette. Il prend le sac où l'on a mis les pains volés, et il le rattache lui-même sur le bât du premier mulet, sous le nez de Sorel. « C'est fini, Gautier, dit-il. Pour moi, c'est fini. Je n'ai jamais rien su. Je ne veux plus faire semblant de savoir. »",
      "Sorel le regarde longtemps. Il pourrait le frapper. Il ne le fait pas. « Veyra saura », dit-il seulement. « Elle saura », dit Josse. Il enlève son manteau bleu, le plie, le pose sur le registre. Puis il descend le chemin à pied, en boitant, devant le convoi. Les épées du Cercle déplacent la charrette pour laisser passer les mulets. Sorel ne te regarde pas.",
      "En bas, à l'entrée de Vaux, Josse s'arrête et te dit, sans te regarder : « Je vais remonter la Sorbe. Jusqu'à Hautgrès. Il y a des tombes là-bas que personne n'entretient. » Il s'en va. Tu ne le revois pas.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVC_barrage_paye: { title: "Le péage du Cercle", place: null,
    text: [
      "Sorel prend tes sous, les compte, et fait remettre les pains dans les sacs du convoi avec une politesse moqueuse. « Une cause juste a toujours besoin d'argent, dit-il. Merci pour le sixième. » La charrette s'écarte. Les mulets passent.",
      "En passant à côté de Josse, tu le vois noter dans son registre, d'une écriture soignée : *vingt sous, reçus sur le chemin*. Il ne lève pas la tête. Le frère convers te remercie trois fois jusqu'en bas.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVC_barrage_vaincu: { title: "La charrette renversée", place: null,
    text: [
      "La charrette est dans le fossé, Sorel est assis dans la boue, la main sur une épaule ouverte, et ses épées sont en fuite dans les mélèzes. Les mulets du convoi passent en piétinant le registre. Le frère convers fait une prière rapide, pour toi ou pour les blessés, tu ne sais pas.",
      "Josse Ferlan n'a pas bougé. Il est resté assis sur le bord de la charrette renversée, son registre sur les genoux, pendant tout le combat. Il te regarde. « Je ne sais pas me battre, dit-il. Je ne sais rien faire. » Il ramasse son manteau bleu, et il remonte vers les tentes du Cercle, derrière Sorel, en boitant.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  IVC_barrage_perdu: { title: "Le péage du Cercle", place: null,
    text: [
      "Tu te retrouves en bas de l'éboulis, le visage dans les cailloux, avec le goût du sang dans la bouche. Là-haut, sur le chemin, les épées du Cercle rient. Le convoi passe quand même, au bout d'un moment, allégé d'un pain sur trois.",
      "Tu remontes sur le chemin un quart de lieue plus bas, en boitant. Le frère convers t'attend, avec ses mulets. Il te tend un pain. « Ils en ont laissé assez, dit-il. Ils en laissent toujours assez. C'est ce qui est malin. »",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
});

// ------------------------------------------------------------------ companions' banter (act IV, after the revelation)
Object.assign(P, {
  IVR_b_pip_aubin: { act: "IV", title: "La petite lumière", banter: true, with: ["pip", "aubin"], takes: "night",
    text: [
      { with: ["pip", "aubin"], text: "Ce soir-là, tu trouves Frère Aubin assis sur les marches du temple, seul, et Pip posé à côté de lui sur la pierre. Ils ne se parlent pas. Ils regardent tous les deux vers l'est, vers la Fenne, où la neige brille sous la lune." },
      { with: ["pip", "aubin"], text: "« Est-ce que tu crois que c'était moi ? demande Pip à un moment. La lumière dans sa main. » Aubin ne répond pas tout de suite. « Je crois que tu ne t'en souviens pas, dit-il enfin. Et je crois que ça ne change rien à ce que tu es. Tu es quelqu'un qui pose des questions et qui épargne ce qui peut l'être. Lui, d'après le vieux, il soignait les gens. Ce n'est pas si loin. »" },
      { with: ["pip", "aubin"], text: "Pip réfléchit. « S'il me reprend, dit-il, est-ce que je m'éteindrai ? » Aubin pose sa grande main près de lui sur la marche, sans le toucher. « Je ne sais pas, dit-il. Je ne sais pas grand-chose. Mais je sais que je ne laisserai personne te reprendre sans qu'on te demande ton avis. » Pip brille un peu plus fort. Il ne dit plus rien." },
    ],
    choices: [{ label: "Les laisser regarder la montagne", to: RET }] },
  IVR_b_heritieres: { act: "IV", title: "Les héritières", banter: true, with: ["thavary", "charline"], takes: "night",
    text: [
      { with: ["thavary", "charline"], text: "Thavary et Charline sont assises de part et d'autre du feu, dans la salle des hôtes de l'abbaye, et elles ne se regardent pas. Elles se sont peu parlé depuis le début du voyage. Ce soir, c'est Charline qui commence. « Ta famille a gardé l'Anneau, dit-elle. La mienne a forgé les chaînes. Je ne sais pas laquelle est la pire. »" },
      { with: ["thavary", "charline"], text: "« La mienne, dit Thavary sans hésiter. Ta Hildre a forgé ce qu'on lui a demandé. C'est un métier. Mon Thavar a juré. Un serment, c'est autre chose. Il a juré de garder une porte, et il a gardé un homme dedans. » Elle jette une bûche dans le feu. « Et il a laissé ça à ses héritiers, avec l'Anneau et les terres. Une dette qu'on n'a jamais finie de payer. »" },
      { with: ["thavary", "charline"], text: "Charline regarde ses mains, ses mains brûlées. « Moi, on m'a laissé le feu, dit-elle. Ce n'est pas mieux. » Thavary la regarde, enfin. « Non, dit-elle. Mais tu ne t'en sers pas pour enchaîner les gens. » Elle se lève. « Moi non plus, je crois. Plus maintenant. » C'est la plus longue conversation qu'elles aient jamais eue." },
    ],
    choices: [{ label: "Laisser le feu s'éteindre", to: RET }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      ivr_godefroy: { name: "Frère Godefroy", f: false, face: { age: "ancien", coif: "rase" }, desc: "Un vieux frère de Hautecombe, le crâne rasé, des mains de paysan. Le Grand Maître l'envoie chaque jour attendre au pont de la Combe." },
      ivr_isembert: { name: "Frère Isembert", f: false, face: { age: "mur", nose: "busque" }, desc: "Le portier de Hautecombe. Très maigre, le nez cassé, il note dans son registre le nom de chaque famille qui monte de la Sorbe." },
      ivr_herbelin: { name: "Frère Herbelin", f: false, face: { age: "mur", beard: "barbe", coif: "degarni" }, desc: "Infirmier de Hautecombe et gardien de la source, la dernière claire entre la vallée et le glacier. Un gourdin de frêne, une louche, et quarante ans de malades." },
      ivr_amaury: { name: "Frère Amaury", f: false, face: { age: "mur", shape: "rond" }, desc: "Le sacristain de Hautecombe, gras et doux, qui garde la grille de la crypte en tricotant des chaussettes grises." },
      ivr_gisquette: { name: "Dame Gisquette", f: true, face: { age: "mur", shape: "rond" }, desc: "L'aubergiste du Chamois, à Hautecombe. Une cuillère de bois à la main, elle sert, encaisse, gronde et rit dans le même mouvement." },
      ivr_hodierne: { name: "Hodierne", f: true, face: { age: "adulte", coif: "foulard" }, desc: "Une femme de Sorbe-la-Basse réfugiée au camp de Vaux, qui boite, et dont les deux enfants sont partis dans la montagne derrière une voix." },
      ivr_babet: { name: "Babet", f: true, face: { age: "enfant", coif: "court" }, desc: "Douze ans, des cheveux coupés au couteau et un bâton. Elle commande les enfants du camp de Vaux partis vers le lac de la combe." },
      ivc_sorel: { name: "Gautier Sorel", f: false, face: { age: "adulte", coif: "rase", hair: "roux" }, desc: "Un grand rouquin à la tête rasée, lieutenant de Veyra, qui tient les épées du Cercle au camp de Vaux et note les noms des recrues sur une tablette." },
      ivc_guiraud: { name: "Guiraud l'éclusier", f: false, face: { age: "ancien", beard: "barbe" }, desc: "Le vieil éclusier de Hautgrès, qui gardait la vanne du haut la nuit où on l'a ouverte, et qui dormait." },
    },
    items: {
      ivr_cle: { name: "La clé du Chamois", kind: "outil", desc: "Une petite clé de fer usée, avec une étiquette de bois au bout d'un fil : « Chamois, 3 ». Anselme ne savait pas ce qu'elle ouvrait." },
      ivr_temoignage: { name: "Le témoignage d'Edrin", kind: "document", keep: true, desc: "Sept feuillets serrés, liés d'un ruban gris, au sceau de l'Ordre de la Main.",
        text: "« Moi, Edrin, Grand Maître de l'Ordre de la Main, quarante et unième du nom, je dis ce que mes prédécesseurs ont tu : ils étaient six. Le sixième s'appelait Malvoran ; il était guérisseur ; il s'est proposé pour tenir la porte de la Brèche ; les cinq autres l'y ont enchaîné par l'Anneau, le Clou et la Cloche, et ont effacé son nom. L'Ordre est né de ce mensonge. Je le signe de ma main et de son sceau, pour que quelqu'un le porte après moi. »" },
    },
    enemies: {
      ivr_gardien_citerne: { name: "La chose de la citerne", look: "ombre", pv: 60, att: 82, def: 28, dmg: 9, desc: "De la vase qui se lève d'une eau dormante, haute comme deux hommes, avec des bras qui tiennent comme des mains de mère." },
      ivr_meunier: { name: "Barthélemy, le meunier marqué", look: "humain", pv: 55, att: 78, def: 26, dmg: 8, desc: "Le meunier de Brumefeuille, grossi, bagué, l'œil couleur de tourbière. Il se bat comme un homme qui défend sa fille." },
      ivr_lavandiere: { name: "Lavandière du lac", look: "ombre", pv: 46, att: 80, def: 26, dmg: 8, flank: true, desc: "Une femme de vase à genoux dans l'eau grise, qui tend les bras avec des gestes de laveuse et ne lâche plus ce qu'elle tient." },
      ivc_epee: { name: "Épée de Sorel", look: "humain", pv: 52, att: 84, def: 30, dmg: 9, desc: "Un ancien de l'Ordre passé au Cercle, gants noirs, manteau bleu. Il a l'habitude qu'on s'écarte quand il arrive." },
      ivc_sorel: { name: "Gautier Sorel", look: "humain", pv: 140, att: 94, def: 34, dmg: 10, desc: "Le lieutenant de Veyra au camp de Vaux. Il se bat comme il compte les pains : vite, juste, sans plaisir." },
    },
    clues: {
      ivr_fresque: { rev: "M", text: "Sous la chaux de la voûte du temple des Six, une ronde de six figures peintes. Le sixième ne tient la main de personne : un jeune homme agenouillé, un bol d'herbes à la main, le dos contre une porte." },
      ivr_crypte: { rev: "M", text: "Dans la crypte de Hautecombe, sur une dalle noire, la trousse de cuir d'un médecin, un manteau gris, un bol de terre, et l'inscription : « CE QU'IL A LAISSÉ EN DESCENDANT ». Le nom qui suivait a été gratté." },
      ivr_citerne: { rev: "V", text: "Dans la citerne de Hautecombe, l'eau répète tout ce qu'on dit, avec un temps de retard, sauf les prières : elle se tait au premier mot." },
    },
    quests: [
      { id: "IV_enfants", act: "IV", kind: "annexe", title: "Les enfants de Vaux", start: "IVR_portier", echo: "enfants:sort" },
      { id: "IV_barthelemy", act: "IV", kind: "annexe", title: "Le dernier meunier", start: "IVR_cloitre", echo: "barthelemy:sort" },
    ],
    routes: [
      // Region "souillee" (declared by IV1, its EIV_ events play on quiet steps). This lot's own road scenes are legs,
      // played in order over the several trips between Vaux and Hautecombe (the first unseen one at each step).
      { id: "r_hautecombe", name: "Le chemin des mulets de Hautecombe", from: "vaux", to: "hautecombe", steps: 2, region: "souillee",
        label: "Monter à Hautecombe par le chemin des mulets", labelBack: "Redescendre au camp de Vaux",
        legs: [
          { step: 1, dir: "aller", passage: "IVR_leg_frere" },
          { step: 1, dir: "aller", passage: "IVR_E_convoi" },
          { step: 1, dir: "aller", passage: "IVR_E_neige" },
          { step: 2, dir: "aller", passage: "IVR_leg_mere", if: { not: { has: "enfants:sort" } } },
          { step: 2, dir: "aller", passage: "IVR_E_anselme", if: { not: { item: "ivr_cle" } } },
          { step: 2, dir: "aller", passage: "IVR_E_flaque" },
          { step: 1, dir: "retour", passage: "IVC_barrage", if: { all: [{ not: { met: "coliane" } }, { seen: "IVR_temple" }] } },
          { step: 1, dir: "retour", passage: "IVR_E_bete" },
          { step: 2, dir: "retour", passage: "IVR_leg_retour", if: { has: "IV:temple" } },
        ] },
    ],
    shops: {
      ivr_chamois: { name: "Le comptoir du Chamois", food: 3, sells: [{ item: "onguent", price: 9 }, { item: "gariig", price: 5 }, { item: "corde", price: 4 }, { item: "lanterne", price: 8 }] },
    },
    banter: [
      { id: "IVR_b_pip_aubin", if: { all: [{ present: "pip" }, { present: "aubin" }, { has: "R:revele" }] } },
      { id: "IVR_b_heritieres", if: { all: [{ present: "thavary" }, { present: "charline" }, { has: "R:revele" }] } },
    ],
  },
};
