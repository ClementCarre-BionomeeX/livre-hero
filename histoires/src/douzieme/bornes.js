// Le Douzième Coup · the rendezvous. Every page here is read by both players (`charniere: true, aparte: true`), each in
// their own words (`if: J` / `if: R`). In act I the two heroes are in the same room, at Line's; from B03 onward they
// stand at the same hour-stone sixty years apart, the twin notebooks open. What one did reaches the other here.
var J = { has: "role:passe" }, R = { has: "role:reste" };
var P = {};

// ======================================================================== act I: Line's house
Object.assign(P, {
  B01: { act: "I", title: "La soupe de cinq heures et demie", backName: "la table de Line", place: "troisnoyers", charniere: true, aparte: true,
    text: [
      { first: true, text: "Line sert la soupe sur l'établi, entre le tour à archet et la boîte aux rubis. C'est une soupe au lard qui a trois jours ; elle soutient que la soupe, comme les horloges, ne donne sa mesure qu'une fois rodée. Il y a trois écuelles. La troisième attendait." },
      { first: true, text: "« {hero}. {autre}. » Elle dit vos deux noms une seule fois, en posant les cuillers, du ton dont on présente deux pièces qui devront s'engrener. « Vous ne vous plairez pas. L'un de vous sort d'un lit et l'autre d'un fossé ; chacun trouvera que l'autre sent drôle. Je vous demande neuf jours de patience. Après, vous pourrez vous détester à loisir, s'il reste un après. »" },
      { first: true, if: J, text: "Tu manges en regardant {autre}, qui mange en regardant la trappe de la cave. {autre:Il} a posé son sac contre le pied de l'établi et gardé une main dessus. Ses sabots sont restés à la porte ; ses pieds, sur le plancher, sont étroits, bruns, corne dessous, et le gros orteil s'y tient à l'écart des autres comme un pouce." },
      { first: true, if: R, text: "Tu manges vite, par habitude, le dos au mur. Quarante balanciers vont et viennent autour de toi, et tu connais le son de chacun pour l'avoir écouté d'en dessous, une nuit de janvier, à plat ventre dans le charbon. La trappe de la cave est sous la grande horloge à poids. Tu t'appliques à regarder ailleurs, et tu t'aperçois que tu regardes {autre}, qui te regarde les pieds." },
      { first: true, text: "« Toi, dit Line en pointant sa cuiller vers celui de vous deux qui glane, on t'a parlé d'une promenade jusqu'à la Ferme-Vieille. C'était vrai à vingt-trois lieues près. Je dirai le reste ce soir, à table, devant ce que vous m'aurez rapporté ; je n'explique jamais une machine avant d'avoir toutes les pièces. » Elle compte sur ses doigts. « Il m'en manque deux. »" },
      { first: true, text: "« Le fil. Une bobine de fil gris que j'ai prêtée à la Goton, la maison aux draps, en face du charron. Elle dira qu'elle ne l'a plus : elle l'a. Et la clef de la grange des Noyers, que le bedeau garde à l'église avec celles de toutes les fermes vidées. Il vous la donnera si vous la lui demandez de ma part, et s'il n'y a pas d'uniforme dans la sacristie. Une chose chacun. Soyez ici quand mes horloges sonneront midi : elles sonnent fort. »" },
      { again: true, text: "Les trois écuelles sont restées sur l'établi. En bas, dans la cave, Line remue des pots de grès, et quarante horloges comptent le temps qu'il vous reste avant midi." },
    ],
    choices: [
      { label: "« Je vais chez la Goton. » Le fil gris", role: "matin", option: "fil", fx: { flag: "matin:fil" }, to: "K02_place", big: true },
      { label: "« Je vais à l'église. » La clef de la grange", role: "matin", option: "clef", fx: { flag: "matin:clef" }, to: "K02_place", big: true },
    ] },
});

Object.assign(P, {
  M02: { act: "I", title: "Midi aux quarante horloges", backName: "l'établi de Line", place: "troisnoyers", charniere: true, aparte: true, takes: "noon",
    text: [
      { first: true, text: "Les quarante horloges de Line sonnent midi ensemble ; de la rue, on croirait qu'une maison entière se racle la gorge. Tu arrives sur le dernier coup. La porte s'ouvre avant que tu l'aies touchée : le capitaine Brassac sort, son carnet à la main. Il vous regarde l'un après l'autre, {autre} et toi, sans un mot, et s'en va vers le puits de son pas égal." },
      { first: true, text: "« Il m'a demandé ce que je comptais faire ce soir, dit Line. J'ai répondu : ma soupe. Il a dit qu'il estimait les personnes qui mangent à heure fixe, et qu'il laisserait deux hommes dans la rue pour veiller sur ma digestion. » Elle repousse la porte du pied. « Deux hommes devant. Il a oublié le derrière de la maison, ou il veut que je le croie. Montrez. »" },
      { first: true, text: "Le fil et la clef sont sur l'établi. Line déroule une brasse de fil et la passe entre ses lèvres, comme font les couturières ; puis elle prend la clef et compte du bout de l'ongle les traits de la tige, jusqu'à douze. Elle ne dit pas merci. Elle dit : « Bien », ce qui chez elle est plus rare." },
      { first: true, if: { all: [{ has: "matin:fil" }, { not: { has: "goton:volee" } }] }, text: "Tu lui transmets le pardon de la Goton, pour les dragées. Line reste l'aiguille en l'air. « J'avais neuf ans. Elle en avait plein son tablier, et c'était la noce de sa sœur. » Elle hausse une épaule. « Soixante ans ! Cette femme a une mémoire de créancier. »" },
      { first: true, if: { has: "goton:volee" }, text: "Line examine le bout du fil, qui est effiloché, arraché plutôt que coupé. Puis elle t'examine, toi. Elle ne demande rien, et ce silence-là te suivra jusqu'au soir." },
      { first: true, text: "« Reste l'après-midi. Il me faut quatre mains pour coudre les Cahiers : deux qui piquent, deux qui tiennent. Et il me faut des yeux en bas, aux jalons, pour savoir par où l'on sort cette nuit sans marcher sur une casaque. Arrangez-vous. Le dîner est sur le coin du fourneau. C'est la soupe. »" },
      { again: true, text: "Line a posé ses deux loupes sur son front et t'attend, ou attend {autre}, ou attend le soir. Avec elle, on ne distingue pas." },
    ],
    choices: [
      { label: "« Je tiendrai les feuilles. » Rester coudre avec Line", role: "tantot", option: "couture", fx: { flag: "tantot:couture" }, to: "K02_place", big: true },
      { label: "« Je descends aux jalons. » Reconnaître le chemin de la nuit", role: "tantot", option: "lisiere", fx: { flag: "tantot:lisiere" }, to: "K02_place", big: true },
      { label: "Lui dire pourquoi l'horloge de l'église retarde", hide: { any: [{ not: { has: "anicet:aveu" } }, { seen: "K02_line_anicet" }] }, to: "K02_line_anicet" },
    ] },
  K02_line_anicet: { act: "I", title: "La roue de compte", place: "troisnoyers",
    text: [
      "Line t'écoute, l'aiguille en l'air, le temps qu'il faut à quarante balanciers pour aller et revenir.",
      "« Un cran sur la roue de compte. Le premier dimanche du mois. » Elle repose l'aiguille. « Quarante ans que je cherche le défaut dans le foliot. J'ai changé la verge. J'ai changé les palettes. J'ai accusé l'humidité, le sonneur et le bon Dieu, dans cet ordre. »",
      "Elle se tait. Dehors, une charrette passe, et l'on entend dedans cogner un saint mal calé. « L'imbécile », dit Line, avec une douceur que personne, dans cette boutique, n'avait encore entendue. « Quarante ans. Il aurait pu demander. » Puis, plus bas, à l'établi : « J'aurais pu regarder la roue de compte. »",
    ],
    choices: [{ back: "M02" }] },

  B02: { act: "I", title: "Ce que Line a mis sur l'établi", backName: "la boutique de Line, le soir", place: "troisnoyers", charniere: true, aparte: true, takes: "evening",
    text: [
      { first: true, text: "Le soir, Line a clos aussi les volets de derrière. Sur l'établi, elle a rangé en ligne tout ce qui part : les deux Cahiers cousus, le sablier dans sa cage de laiton, une bourse, une fiole, un gros livre relié de toile noire. La soupe a quatre jours ; elle n'a jamais été meilleure, et personne n'y touche." },
      { first: true, if: { has: "monde:lubin_force" }, text: "Tout à l'heure, par la fente d'un volet, on a vu passer le père Lubin entre quatre gardes, porté sur son banc comme un évêque sur sa chaise, et bénissant la rue à coups de fourche." },
      { first: true, if: { all: [{ has: "monde:lubin_part" }, { not: { has: "monde:lubin_force" } }] }, text: "Tout à l'heure, la charrette du charron est passée sous les volets. Le père Lubin était assis à l'arrière, les jambes pendantes, son coq sous le bras, et regardait s'éloigner son banc." },
      { first: true, if: { all: [{ has: "monde:lubin_reste" }, { not: { has: "monde:lubin_force" } }, { not: { has: "monde:lubin_part" } }] }, text: "Par la fente d'un volet, au bout du jardin voisin, on distingue le père Lubin sur son banc, en habit de noces, les mains à plat sur les genoux, tourné vers le levant. Il s'exerce." },
      { first: true, if: R, text: "« Voilà la machine entière, dit Line. Je te la dis à toi, puisque {autre} la connaît depuis ce matin. Dans ma grange, à la Ferme-Vieille, il y a une porte. Elle ouvre sur l'an 541, neuf jours avant le Grand Midi. Cette nuit, à minuit, {autre} la passe. »" },
      { first: true, if: R, text: "Tu attends qu'elle rie. Dans la bande, on raconte des portes de ce genre le soir, pour faire peur aux nouveaux. Line ne rit pas ; {autre} non plus, qui regarde le sablier. Tu as glané six ans dans un pays où la fumée reste debout sur les cheminées : tu t'aperçois que tu n'as plus de quoi trouver une chose impossible." },
      { first: true, if: J, text: "« Voilà la machine entière », dit Line, et elle la redit pour {autre}, en moins de mots qu'à toi ce matin : la grange, la porte, l'an 541, minuit. Tu regardes {autre} l'écouter. {autre:Il} ne se récrie pas. {autre:Il} a le visage de quelqu'un qui en a trop vu, dans cette lisière, pour chicaner sur une porte." },
      { first: true, text: "« Celui de vous deux qui glane ne passe pas. Il marche. La route royale, de borne en borne, jusqu'à la Tour des Heures : vingt-quatre lieues dans la Dormante, en neuf jours. Il porte le second Cahier. L'un verra les gens vivants, la semaine où tout s'est décidé. L'autre verra ce qu'ils sont devenus, leurs maisons ouvertes, leurs papiers sur les tables, tout ce qu'on ne montre pas de son vivant. Aux bornes, vous vous direz tout. À vous deux, vous saurez qui a tenu le balancier, et comment on lâche. »" },
      { first: true, if: R, text: "Elle pousse vers toi le livre noir et la fiole. « La Chronique d'Aurime, telle qu'on l'enseigne. Tu y liras ce que le royaume croit. Chaque fois qu'elle mentira, tu le sauras avant tout le monde. Et trois pincées de sable, mon dernier fond de pot. Pour le reste de la route, tu gratteras les bornes : elles en suent, la nuit, je te montrerai. »" },
      { first: true, if: R, text: "« Je te paie en sable, et en ceci. » Elle te regarde droit. « Sur la route de Méridane, à la cinquième lieue, il y a Roquebise. Je sais d'où tu es. Je sais pourquoi tu montes à la croix des Hautes-Bordes. Si le balancier est lâché comme il faut, ce qui dort se réveille. Tout ce qui dort. »" },
      { first: true, if: J, text: "Elle pousse vers toi le sablier, un Cahier et la bourse. « Du sable pour ouvrir la porte, une fois. Des écus à la couronne : ceux d'aujourd'hui, là-bas, te feraient pendre pour fausse monnaie. Et le Cahier. Perds le reste si tu veux. » Puis, à {autre}, sans te quitter des yeux : « Sur sa route à lui, il y a Roquebise. Je ne l'ai pas choisi au hasard. Je ne choisis rien au hasard, c'est mon infirmité. »" },
      { again: true, text: "Sur l'établi, la chandelle a baissé d'un doigt. Line est descendue à la cave chercher ses bottes. Vous êtes seuls, {autre} et toi, avec quarante horloges qui disent toutes qu'il est tard." },
    ],
    choices: [
      { label: "Prendre le sablier, le Cahier et la bourse", hide: R, fx: { item: ["cahier", "sablier_line"], gold: 6 }, to: "K03_veillee", big: true },
      { label: "« J'irai. Pour ce qui dort à Roquebise. »", hide: J, fx: { item: ["cahier", "chronique_livre"], stock: { sable: 3 }, flag: "r:pour_lison" }, to: "K03_veillee", big: true },
      { label: "« J'irai. Vous payez en sable, et c'est une monnaie que je connais. »", hide: J, fx: { item: ["cahier", "chronique_livre"], stock: { sable: 3 }, flag: "r:pour_sable" }, to: "K03_veillee", big: true },
      { label: "Prendre le livre et la fiole sans rien dire, ce qui est dire oui", hide: J, fx: { item: ["cahier", "chronique_livre"], stock: { sable: 3 }, flag: "r:pour_rien" }, to: "K03_veillee", big: true },
    ] },
});

// ======================================================================== act II: the hour-stones of the royal road
Object.assign(P, {
  B03: { act: "II", title: "La borne de la vingt-troisième lieue", backName: "la borne de la Ferme", place: "ferme", charniere: true, aparte: true, depot: { put: ["cahier"], take: [] },
    fx: { catchup: 2, catchupWhy: "Une nuit pareille vaut un apprentissage." },
    text: [
      { first: true, if: J, text: "La borne est à vingt toises de la ferme, au bord de la route royale : une pierre taillée, haute comme toi, qui porte sur sa face du midi un cadran de bronze et, gravé dessous, le nombre XXIII. Tu l'as vue cette nuit, grise, moussue, de l'autre côté de soixante ans. Ce matin elle est blonde, ses arêtes sont vives, et une alouette est posée dessus, qui chante." },
      { first: true, if: J, text: "Tout chante, d'ailleurs. Tu n'avais jamais entendu un matin entier : les coqs de trois fermes qui se répondent, une cloche loin vers l'est, puis une autre, plus loin, puis une troisième si lointaine qu'on la devine. Chez toi, à l'est, il n'y a rien à entendre. Ici le pays est plein jusqu'au bord, et personne n'y prend garde." },
      { first: true, if: J, text: "Tu t'assois dans la rosée, le dos à la pierre. Tu ouvres le Cahier à la première page, tu mouilles ta plume, et tu écris ce que Line a dit d'écrire d'abord : *Je suis passé{e}. Je suis en vie. Il fait beau.* L'encre boit. Tu attends, le cœur dans la gorge, en regardant une page grise." },
      { first: true, if: R, text: "Tu as attendu le jour au pied de la borne, roulé{e} dans ta veste, à vingt toises de la Ferme-Vieille. C'est une pierre haute comme toi, moussue, penchée, dont le cadran de bronze a verdi ; dessous, on lit encore XXIII. Autour, la nuit de la Dormante s'est changée en jour de la Dormante, ce qui fait peu de différence : une clarté grise, égale, où rien ne porte d'ombre nette." },
      { first: true, if: R, text: "Tu n'as presque plus de sable dans le col du sablier. Tu ouvres le Cahier parce qu'il faut bien faire quelque chose de ses mains. La première page est grise, vide, un peu rêche." },
      { first: true, if: R, text: "Puis elle cesse d'être vide. Cela vient comme une tache d'humidité : des lettres pâles, qui foncent, penchées, appliquées, une écriture d'apprenti{autre:e} qui a copié beaucoup de factures. *Je suis passé{autre:e}. Je suis en vie. Il fait beau.* Tu lis cela trois fois. C'est la première lettre qu'on t'ait jamais écrite, et elle a soixante ans." },
      { first: true, if: J, text: "Sous ta ligne, au bout d'un temps que tu ne sais pas mesurer, des lettres paraissent. Elles sont en bâtons, tracées l'une après l'autre, par quelqu'un qui écrit rarement et qui appuie. Tu ne les avais jamais vues, et tu les reconnais." },
      { again: true, if: J, text: "La borne de la vingt-troisième lieue, blonde dans le matin. Le Cahier est ouvert sur tes genoux." },
      { again: true, if: R, text: "La borne de la vingt-troisième lieue, grise dans le jour gris. Le Cahier est ouvert sur tes genoux." },
    ],
    choices: [
      { label: "Refermer le Cahier, et marcher vers la ferme, où une cheminée fume", hide: R, to: "K04j_cour", big: true },
      { label: "Refermer le Cahier, et retourner vers le village avant que le sable manque", hide: J, to: "K04r_retour", big: true },
    ] },
});

Object.assign(P, {
  M04: { act: "II", title: "Midi, de part et d'autre", backName: "la borne", charniere: true, aparte: true, depot: { put: ["cahier"], take: ["cahier"] },
    text: [
      { first: true, if: J, text: "Midi. L'ombre du style tombe droit sur le trait de bronze, et la borne de la vingt-troisième lieue n'a plus d'ombre du tout, ou si peu. Tu t'adosses à la pierre chaude. Tu as du foin dans le col et des ampoules, et il te faut un moment pour te rappeler que tu es ici en mission." },
      { first: true, if: J, text: "Tu ouvres le Cahier. La page d'hier n'est plus seule : en dessous, des lettres en bâtons ont poussé, serrées, appuyées, qui ont dû coûter à leur auteur. *LA GARDE EST VENUE À LA GRANGE APRÈS TOI. ILS ONT PRIS LINE. ILS LA MÈNENT À ARVOISE, CHEZ LE MAÎTRE DES SABLES. ELLE Y VA DE SON PLEIN GRÉ, ELLE DIT QU'IL LUI DOIT UNE RÉPONSE. J'AI LE CAHIER. JE SUIS DEHORS.*" },
      { first: true, if: J, text: "Tu relis *ils ont pris Line*, assis{e} à vingt toises d'une cour où elle a neuf ans et grimpe aux arbres. Puis tu écris, à ton tour, vite, mal : la ferme pleine, les trois noyers, le pain blanc, les cloches d'un clocher à l'autre. Tu écris qu'elle t'a percé{e} à jour avant la soupe." },
      { first: true, if: R, text: "À la sortie des Trois-Noyers, sous le reposoir des Veilleurs, la route royale commence, et sa première borne est là, enfoncée jusqu'à mi-corps dans les orties : la vingt-quatrième lieue. Personne, au village, ne s'est jamais demandé pourquoi une pierre qui ne mène plus nulle part gardait un cadran. À midi, tu t'y assois, le dos aux lampes, et tu ouvres le Cahier." },
      { first: true, if: R, text: "L'encre monte dans le papier. *La ferme est pleine. Il y a trois noyers, celui du milieu est debout. On fauche. Il y a des cloches partout, d'un clocher à l'autre. Line a neuf ans, deux nattes, une dent en moins. Elle m'a percé{autre:e} à jour avant la soupe.* Tu lis lentement, en suivant du doigt. Tu vois très bien la cour : tu y étais cette nuit, avec un chat en l'air. Tu essaies d'y mettre des poules." },
      { first: true, if: { all: [R, { has: "monde:marque_poutre" }] }, text: "Une ligne encore, soulignée : *Quand tu repasseras par la grange, lève ta lanterne sur la grosse poutre.* Tu fronces les sourcils. Tu l'as levée, cette nuit. La poutre était noire et lisse ; tu en mettrais ta main au feu." },
      { again: true, text: "Le Cahier est ouvert sur tes genoux, à la page où vos deux écritures se suivent : la penchée, et celle en bâtons." },
    ],
    choices: [
      { label: "Recopier pour {autre} ce que la Chronique dit du pont d'Arvoise", hide: { any: [J, { has: "monde:su:pont" }] }, to: "E_pont" },
      { label: "Refermer le Cahier : la cour t'attend, et un cabriolet arrive sur la route", hide: R, to: "K04j_tantot", big: true },
      { label: "Refermer le Cahier : il reste un après-midi à tenir dans ce village", hide: J, to: "K04r_tantot", big: true },
    ] },
  E_pont: { title: "Six jours avant le Grand Midi", back: true, fx: { flag: "monde:su:pont" },
    text: [
      "Tu ouvres le gros livre noir à la page de l'an 541. La ligne est là, entre un édit sur les mesures à grain et la mort d'un évêque. Tu la recopies en bâtons, sans rien y mettre de toi : *SIX JOURS AVANT LE GRAND MIDI LE PONT-NEUF D'ARVOISE EST TOMBÉ DANS LA THIORNE À L'HEURE DE SA BÉNÉDICTION. QUARANTE MORTS. LE MAÎTRE QUI L'A BÂTI S'APPELAIT BAUDRI, IL EST MORT AVEC.*",
      "Tu comptes sur tes doigts. Six jours avant : c'est après-demain, de son côté. Tu ajoutes : *TU Y SERAS.* L'encre pâlit et s'en va.",
    ] },

  B04: { act: "II", title: "Une coudée, du côté de l'ombre", backName: "la borne", charniere: true, aparte: true, depot: { put: ["borne_ferme", "cahier"], take: ["cahier"] },
    text: [
      { first: true, if: J, text: "Le soleil sort derrière Roquebise, que l'on devine au bout de la route, sur sa butte, avec ses fumées. La borne de la vingt-troisième lieue a une ombre longue comme un clocher. La charrette des Noyers n'a pas encore passé le portail : tu as le temps d'un Pater, de deux peut-être." },
      { first: true, if: J, text: "Vous êtes convenus de l'endroit, {autre} et toi, par l'entremise d'une vieille femme qui pense à tout : une coudée de profondeur, du côté où la pierre fait de l'ombre à midi. La terre est meuble, là, et personne n'a de raison d'y creuser avant soixante ans." },
      { first: true, if: J, text: "Tu ouvres le Cahier sur ton genou. *J'AI LU*, ont répondu les bâtons, sous tes lignes d'hier. *JE VOIS LA COUR. J'ESSAIE D'Y METTRE DES POULES.*" },
      { first: true, if: R, text: "Tu arrives à la borne de la vingt-troisième lieue avant le jour, par les prés pris, et tu t'y laisses tomber. La Ferme-Vieille est à vingt toises, grise, muette. Quatre gardes y montaient la faction hier ; ils ont été relevés, ou rappelés. La planche est toujours clouée en travers de la porte de la grange." },
      { first: true, if: R, with: "rouget", text: "Rouget s'est couché en chien de fusil contre la pierre, les mains sous les aisselles. Il dort déjà. Il t'a suivi{e} toute la nuit sans se plaindre, ce qui chez lui tient du prodige, et il a demandé une seule chose : qu'on le réveille s'il y a à manger." },
      { first: true, if: R, text: "Tu ouvres le Cahier. L'écriture penchée a rempli la page pendant que tu courais : le marchand de bois, la colporteuse, le souper, la chandelle dans le fenil. Tu lis tout. C'est une drôle de chose, de lire le soir d'une maison où l'on n'a jamais été invité, et de savoir ce qu'on y mangeait." },
      { first: true, if: { all: [R, { has: "monde:line_sait" }] }, text: "*Elle sait d'où je viens. Elle l'avait trouvé toute seule.* Tu penses à la vieille, sur ses deux hallebardes, faisant à sa cour un signe de la main. Elle savait donc. Elle a su pendant soixante ans." },
      { again: true, if: J, text: "La borne, l'ombre longue, la terre meuble au pied de la pierre. Sur la route, derrière toi, les essieux de la charrette commencent à chanter." },
      { again: true, if: R, text: "La borne penche dans le jour gris. Au pied de la pierre, du côté où elle ferait de l'ombre s'il y avait un soleil franc, la terre est tassée, moussue, vieille." },
    ],
    choices: [
      { label: "Recopier pour {autre} ce que la Chronique dit du pont d'Arvoise", hide: { any: [J, { has: "monde:su:pont" }] }, to: "E_pont" },
      { label: "Rejoindre Perrine et la charrette : quatre lieues jusqu'à Roquebise", hide: R, to: "K05j_route", big: true },
      { label: "Te lever, et entrer dans la cour de la Ferme-Vieille", hide: J, to: "K05r_cour", big: true },
    ] },
});

// ------------------------------------------------------------------------ chapter 5
Object.assign(P, {
  M05: { act: "II", title: "Midi, à quatre lieues l'un de l'autre", backName: "la borne", charniere: true, aparte: true, depot: { put: ["cahier"], take: ["borne_ferme", "cahier"] },
    text: [
      { first: true, if: J, text: "Les bâtons ont rempli une demi-page. Ils sont plus serrés que la veille : celui qui écrit prend de l'habitude, ou manque de place. *ON M'A CHERCHÉ{autre:E} TOUTE LA NUIT DANS LES PRÉS AVEC DES LANTERNES. JE SUIS PASSÉ{autre:E}. J'AI QUELQU'UN AVEC MOI, UN GAMIN DE LA BANDE, ROUGET. IL PORTE MON SAC. IL MANGE TOUT.*" },
      { first: true, if: J, text: "*JE SUIS DANS TA FERME. ELLE EST VIDE DEPUIS MARS. LE CHAT EST TOUJOURS EN L'AIR.*" },
      { first: true, if: { all: [J, { has: "monde:noyer_sauve" }] }, text: "*IL Y A TROIS NOYERS. AVANT-HIER IL Y EN AVAIT DEUX ET UNE SOUCHE. JE LE SAIS, J'Y ÉTAIS. PERSONNE D'AUTRE NE LE SAIT. C'EST TOI QUI AS FAIT ÇA.* Tu relis cette ligne, le dos contre la pierre chaude. Là-haut, on danse. Tu n'avais pas encore compris, tout à fait, que cela marchait." },
      { first: true, if: { all: [J, { not: { has: "monde:noyer_sauve" } }] }, text: "*LA SOUCHE EST LÀ. ELLE A ÉCRIT DESSUS, PETITE : ICI ÉTAIT LE PLUS GROS.* Tu fermes les yeux. Là-haut, on danse." },
      { first: true, if: { all: [J, { has: "monde:marque_poutre" }] }, text: "*J'AI LEVÉ LA LANTERNE. C'EST DANS LA POUTRE. C'EST VIEUX, C'EST PLEIN DE POUSSIÈRE. AVANT-HIER ELLE ÉTAIT LISSE.*" },
      { first: true, if: { all: [J, { has: "monde:rouget_dessin" }] }, text: "Au bas de la page, il y a un dessin. Deux bonshommes qui se tiennent par la main : un petit, avec des cheveux en flammes et une fronde, un grand, avec des sabots énormes. Au-dessus, une chose à quatre pattes qui flotte. Personne n'a signé. Tu regardes longtemps le plus grand des deux, et ses sabots." },
      { first: true, if: J, text: "*JE VAIS CREUSER À LA BORNE.* Tu trempes ta plume. Tu as une noce à raconter, et un bourg entier." },
      { first: true, if: R, text: "La terre est dure comme une croûte de pain. Ton couteau y entre d'un doigt, puis d'un autre. Tu ouvres le Cahier à côté de toi, à plat sur l'herbe raide, pendant que tu creuses ; et pendant que tu creuses, la page se remplit." },
      { first: true, if: R, text: "*La route est pleine. Des oies, des moines, des charrettes. Chaque borne a son cadran propre et l'on y a ôté le lierre. Je porte une hotte pour une colporteuse qui s'appelle Perrine et qui compte tout sur ses doigts. Je suis à Roquebise. Il y a dix fumées. Tout le bourg est d'une noce.*" },
      { first: true, if: { all: [R, { has: "monde:croix_bordes" }] }, text: "*Je suis monté{autre:e} à la croix des Hautes-Bordes. Regarde au pied, du côté de Roquebise, quand tu y passeras.*" },
      { first: true, if: { all: [R, { has: "monde:lison_berceau" }] }, text: "*La troisième maison après la fontaine. La porte est en chêne, sans peinture. Il y a là un potier qui s'appelle Tiennot, et dans un berceau sa fille, qui a six mois. Elle s'appelle Lison. Il dit qu'il y en a une par génération.*" },
      { first: true, if: { all: [R, { has: "monde:lison_berceau" }] }, text: "Ton couteau s'arrête. Ta grand-mère s'appelait Lison. Tu l'as connue vieille, les mains mangées par la terre, assise devant la porte bleue à écosser des pois ; on l'a portée au cimetière l'hiver d'avant le Bond, et ta mère a dit que c'était une grâce. {autre} l'a vue ce matin dans un panier d'osier." },
      { first: true, if: R, text: "Sous la lame, quelque chose sonne." },
      { again: true, if: J, text: "La borne de la dix-neuvième lieue, sa couronne de buis, le Cahier ouvert. Les violons, là-haut, ont changé d'air." },
      { again: true, if: R, text: "La borne de la vingt-troisième lieue, le trou que tu as fait à son pied, le Cahier ouvert sur l'herbe raide." },
    ],
    choices: [
      { label: "Lire dans la Chronique ce qu'elle dit de l'étranger du Grand Midi", hide: { any: [J, { seen: "K05r_chronique" }] }, to: "K05r_chronique" },
      { label: "Recopier pour {autre} ce que la Chronique dit du pont d'Arvoise", hide: { any: [J, { has: "monde:su:pont" }] }, to: "E_pont" },
      { label: "Écrire à {autre} ce que la vieille a dit d'une certaine écriture", hide: { any: [J, { not: { has: "r:sait_main" } }, { has: "monde:su:main" }] }, to: "E_main" },
      { label: "Répondre à {autre} sur la langueur grise", hide: { any: [J, { not: { has: "monde:placard" } }, { has: "monde:su:remede" }] }, to: "E_remede" },
      { label: "Refermer le Cahier, et remonter à la noce", hide: R, to: "K05j_tantot", big: true },
      { label: "Refermer le Cahier, et prendre la chaussée vers le levant", hide: J, to: "K05r_route", big: true },
    ] },
  K05r_chronique: { title: "Ce que dit le livre noir", back: true, fx: { secret: "r_chronique" },
    text: [
      "Tu tires de ton sac le gros livre relié de toile. Tu ne l'avais ouvert, jusqu'ici, qu'où la vieille avait mis ses signets. Tu cherches seul{e}, cette fois, en suivant les lignes du doigt : l'an 541, le Grand Midi, la malice du Maudit, les quarante mille âmes. Plus bas, en plus petit, un paragraphe que les maîtres d'école sautent.",
      "*« On vit ce jour-là dans la Tour des Heures un inconnu, jeune, que nul ne put nommer, et que plusieurs témoins tinrent pour le complice du Maudit, l'ayant vu monter derrière lui. Il fut mis à mort par les gardes sur les marches de la Tour, au onzième coup. »*",
      "Tu relis. *Jeune. Que nul ne put nommer.* Dans la marge, la vieille n'a rien écrit. C'est la seule page du livre où elle n'ait rien écrit.",
      "Tu regardes le Cahier, ouvert à côté de toi, où l'encre penchée parle d'oies et de noce. Tu sais qui est monté dans cette tour. Tu sais qui n'en est pas redescendu. Cela a déjà eu lieu, il y a soixante ans, dans sept jours.",
      "La vieille le savait en lui donnant le sablier.",
    ] },
  E_main: { title: "Un d qui recule", back: true, fx: { flag: "monde:su:main" },
    text: [
      "Tu écris ce que la vieille a dit, par le soupirail, la bouche contre le plancher. *IL Y A À LA GUILDE UN NOMMÉ AUBESPIN. REGARDE COMMENT IL ÉCRIT. SON D PENCHE EN ARRIÈRE, COMME UN HOMME QUI RECULE. LA VIEILLE A DEUX LETTRES DE LA MAÎTRISE DES SABLES, À TRENTE-HUIT ANS D'ÉCART, LE PÈRE ET LE FILS. C'EST LA MÊME MAIN.*",
      "Tu ne sais pas ce que {autre} fera de cela. Tu ne sais pas bien toi-même ce qu'il faut en penser. Tu l'envoies comme on l'a reçu.",
    ] },
  E_remede: { title: "Trois semaines de tisane", back: true, fx: { flag: "monde:su:remede" },
    text: [
      "*La langueur grise.* {autre} a écrit ces deux mots comme on écrit le nom d'une bête inconnue. Tu les lis, et tu sens dans ta bouche un goût amer, qui a neuf ans d'âge.",
      "Tu l'as eue. Presque tous les enfants l'ont, une fois, vers sept ans : les ongles qui grisonnent, l'envie de dormir à toute heure. Ta mère t'a tenu la tête et fait boire une tisane brune pendant trois semaines, matin et soir, en te pinçant le nez. Tu en as voulu à la terre entière. Puis tu es retourné{e} courir.",
      "Tu écris, en appuyant : *ON EN GUÉRIT. TOUTES LES MÈRES SAVENT. C'EST L'ÉCORCE DE FIÈVRIER, BOUILLIE, TROIS SEMAINES. C'EST UN ARBRE DES ÎLES. LES BATEAUX EN RAPPORTENT DEPUIS VINGT ANS, IL Y EN A CHEZ TOUS LES APOTHICAIRES.* Tu t'arrêtes. Depuis vingt ans. De son côté, les bateaux ne sont pas encore partis.",
      "Tu ajoutes : *CHEZ TOI IL N'Y EN A PAS. J'EN CHERCHERAI.*",
    ] },

  B05: { act: "II", title: "Ce qui se dit à l'aube", backName: "la borne", charniere: true, aparte: true, depot: { put: ["borne_roquebise", "cahier"], take: ["cahier"] },
    text: [
      { first: true, if: J, text: "La borne de la dix-neuvième lieue sent le feu éteint, comme tout Roquebise ce matin. Tu t'y adosses. Perrine s'est assise à dix pas, sur sa hotte, et fait semblant de recompter ses rubans pour te laisser à ce que tu fais dans ce cahier gris, dont elle n'a pas encore demandé le prix." },
      { first: true, if: J, text: "*J'AI CREUSÉ.* Les bâtons sont là, sous ta page d'hier. *J'AI MARCHÉ DEUX LIEUES. LA ROUTE EST VIDE ET IL Y A DES GENS DEDANS, QUI VONT TRÈS LENTEMENT. JE SUIS AUX HAUTES-BORDES, SOUS LA CROIX. DE LÀ ON VOIT ROQUEBISE. IL N'Y A PLUS UNE FUMÉE. DEMAIN J'Y SUIS.*" },
      { first: true, if: { all: [J, { has: "monde:croix_bordes" }] }, text: "*J'AI TROUVÉ, AU PIED DE LA CROIX. LE LICHEN A POUSSÉ DEDANS.*" },
      { first: true, if: { all: [J, { has: "monde:su:cuves" }] }, text: "*J'AI ENTENDU DES GENS DE LA MAÎTRISE. ILS MÈNENT À MÉRIDANE DOUZE CUVES DE VERRE HAUTES COMME UN HOMME, POUR LE JOUR DU SERMENT. ILS Y METTENT TOUT LE SABLE DE LA ROUTE.*" },
      { first: true, if: J, text: "Tu écris à ton tour. La coupe, la fontaine, les jeux. Puis la nuit : la voiture noire, la cuve de verre haute d'une toise, les onze autres qu'il faut couler en six jours, les étincelles. Tu écris vite ; l'encre a du mal à suivre." },
      { first: true, if: { all: [J, { has: "j:vu_vairons" }] }, text: "Tu écris l'homme en gris, sa voix, sa bague, la pincée de sable qui coulait dans le verre comme dans une eau lourde. Tu hésites sur un détail, qui a l'air de rien. Tu le mets quand même : *il a un œil gris et l'autre brun.*" },
      { first: true, if: R, text: "Tu as gratté le cadran de la vingt et unième lieue avant le jour, sous la croix, et tu t'es rendormi{e} contre la pierre. C'est le Cahier qui t'éveille : il est ouvert sur tes genoux, et l'écriture penchée y court si vite que les lignes se chevauchent." },
      { first: true, if: R, text: "Tu lis la noce. Tu lis la place qui penche, les tilleuls, saint Gnomon qui tire la langue sous l'eau. Tu connais chaque pavé de cette place : tu y as joué. Tu ne l'avais jamais entendue. Dans ta tête, Roquebise a toujours fait le bruit que font les tessons sous les sabots d'un seul enfant." },
      { first: true, if: { all: [R, { has: "monde:coupe_noce" }] }, text: "*La mariée a bu dans une coupe qu'on gardera sur le manteau de la cheminée, chez les Hureau, rue des Potiers. Elle a dit qu'on dirait mon nom en la montrant.* Les Hureau. La maison en face de la tienne." },
      { first: true, if: { all: [R, { has: "monde:cuves_vues" }] }, text: "*Douze cuves de verre, hautes comme un homme, pour la Guilde. Un sous-maître est venu voir la première cette nuit. Il y a mis une pincée de sable gris, et un papillon s'est arrêté en l'air.* Tu lis cela deux fois. Du sable. En 541, sept jours avant qu'il y ait une Dormante pour en donner." },
      { first: true, if: { all: [R, { has: "monde:four_sauve" }] }, text: "*Le feu a pris au bois du Grand Four. On l'a éteint. Le four est entier.* Tu lèves la tête. Le Grand Four, au bas de la rue des Potiers : tu y as joué aussi, dans une ruine, un dôme crevé plein de ronces où les grands faisaient peur aux petits. Tu ouvres la Chronique à la page de Roquebise. La ligne a changé." },
      { first: true, if: { all: [R, { not: { has: "monde:four_sauve" } }] }, text: "*Le feu a pris au bois du Grand Four. On n'a pas pu. Il s'est fendu à deux heures du matin, je l'ai entendu.* Le dôme crevé, au bas de ta rue, plein de ronces, où les grands faisaient peur aux petits. Tu ne t'étais jamais demandé depuis quand il était crevé." },
      { again: true, if: J, text: "La borne, l'odeur de feu éteint, la chaussée qui descend vers la Thiorne. Perrine tape du pied." },
      { again: true, if: R, text: "La borne de la vingt et unième lieue, la croix au-dessus, et là-bas, sur sa butte, Roquebise, où rien ne fume." },
    ],
    choices: [
      { label: "Recopier pour {autre} ce que la Chronique dit du pont d'Arvoise", hide: { any: [J, { has: "monde:su:pont" }] }, to: "E_pont" },
      { label: "Écrire à {autre} ce que la vieille a dit d'une certaine écriture", hide: { any: [J, { not: { has: "r:sait_main" } }, { has: "monde:su:main" }] }, to: "E_main" },
      { label: "Répondre à {autre} sur la langueur grise", hide: { any: [J, { not: { has: "monde:placard" } }, { has: "monde:su:remede" }] }, to: "E_remede" },
      { label: "Fermer le Cahier : cinq lieues jusqu'à la Thiorne", hide: R, to: "K06j_route", big: true },
      { label: "Fermer le Cahier, et descendre vers Roquebise", hide: J, to: "K06r_descente", big: true },
    ] },
});

module.exports = { passages: P, extras: {
  quests: [
    { id: "I_porte", act: "I", kind: "principale", title: "La porte de la grange", start: "B01" },
  ],
  items: {
    chronique_livre: { name: "La Chronique d'Aurime", kind: "divers", keep: true, nodepot: true, price: 0, desc: "Un gros livre relié de toile noire : l'histoire du royaume telle qu'on l'enseigne, avec, dans les marges, l'écriture serrée de Line." },
  },
  // What the kingdom says of the year 541 (the one who stays reads it; the lines change with what the other does).
  // What the one who stays has copied for the other, from the years to come.
  avenir: [
    { id: "main", head: "Une écriture", v: [
      { if: { has: "monde:su:main" }, text: "*Il y a à la Guilde un nommé Aubespin. Regarde comment il écrit. Son d penche en arrière, comme un homme qui recule. La vieille a deux lettres de la Maîtrise des Sables, à trente-huit ans d'écart, le père et le fils. C'est la même main.*" }] },
    { id: "cuves", head: "Douze cuves", v: [
      { if: { has: "monde:su:cuves" }, text: "*La Maîtrise des Sables mène à Méridane douze cuves de verre hautes comme un homme, pour le jour du Serment. Elle y met tout le sable de la route.*" }] },
    { id: "remede", head: "La langueur grise", v: [
      { if: { has: "monde:su:remede" }, text: "*On en guérit. Toutes les mères savent. C'est l'écorce de fièvrier, bouillie, trois semaines. C'est un arbre des îles. Chez toi il n'y en a pas. J'en chercherai.*" }] },
    { id: "line", head: "Les Trois-Noyers, soixante ans après", v: [
      { text: "*La Garde est venue à la grange après toi. Ils ont pris Line. Ils la mènent à Arvoise, chez le Maître des Sables.*" }] },
    { id: "pont", head: "Arvoise, dans la Chronique", v: [
      { if: { has: "monde:su:pont" }, text: "*Six jours avant le Grand Midi, le Pont-Neuf d'Arvoise est tombé dans la Thiorne à l'heure de sa bénédiction. Quarante morts. Le maître qui l'a bâti s'appelait Baudri, il est mort avec. Tu y seras.*" }] },
  ],
  chronique: [
    { id: "etranger", head: "An 541 · L'inconnu de la Tour", v: [
      { if: { seen: "K05r_chronique" }, text: "« On vit ce jour-là dans la Tour des Heures un inconnu, jeune, que nul ne put nommer, et que plusieurs témoins tinrent pour le complice du Maudit. Il fut mis à mort par les gardes sur les marches de la Tour, au onzième coup. »" }] },
    { id: "grandmidi", head: "An 541 · Le Grand Midi", v: [
      { text: "« Le jour du Grand Midi, par la malice de Barnabé Coudrier, Grand Maître des Horlogers-Jurés, dit depuis le Maudit, la ville de Méridane fut ravie au temps avec la Reine, Madame Aélis sa fille, et quarante mille âmes. »" }] },
    { id: "regence", head: "An 541 · La Régence", v: [
      { text: "« Monseigneur Oderic, duc de Hautgué, que la Providence avait conduit ce matin-là à la chasse hors des murs, recueillit le royaume et le gouverna au nom de la Reine endormie. »" }] },
    { id: "pont", head: "An 541 · Arvoise", v: [
      { text: "« Six jours avant le Grand Midi, le Pont-Neuf d'Arvoise s'abîma dans la Thiorne à l'heure de sa bénédiction. Il y périt quarante personnes, dont maître Baudri qui l'avait bâti. Les sages y virent un présage. »" }] },
  ],
} };
