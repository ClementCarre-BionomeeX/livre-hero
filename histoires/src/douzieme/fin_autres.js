// Le Douzième Coup · dénouement « fuite » (at the foot of the stairs, the two leave the lever where it is and walk out
// of the note past the seventh poplar, into the year 541 that goes on. They live the sixty years they knew from the
// Chronicle, see each circle taken at its date, and reach 601 as two people of seventy-six). Each one meets, late, the
// hour that made them : `Fuj_borne` (592, a child on the Vauxelles stone : `j:f_mere_retenue` breaks the chain) and
// `Fur_bond` (595, the night of the Bond : `r:f_lison_sortie` breaks it). `Fu_601` branches : chain kept → the young
// pair leaves as it did (`Fu_veille`, `monde: "boucle"` : `monde:f_mot_glisse` | `monde:f_rien_dit`, `Fu_fin_boucle`) ;
// chain broken (`monde:f_chaine_rompue`) → nobody is coming, and the two go back themselves (`Fu_retour`,
// `Fu_fin_retour`). Both end passages set `fin:fuite`. Other flags : `monde:f_line_sait`, `monde:f_abbaye_sortie`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var SORTIS = { has: "monde:noyers_sortis" };
var VU = { has: "monde:vu_bord" };
var ROMPUE = { has: "monde:f_chaine_rompue" };

Object.assign(P, {
  F_fuite: { act: "V", title: "La troisième porte", place: "tour", ambiance: "chateau",
    text: [
      "Vous ne montez pas. Vous ne descendez pas non plus.",
      { if: J, text: "C'est {autre} qui l'a dit, ou c'est toi : vous ne saurez jamais. Il y a eu un regard, au pied des marches, par-dessus un tas de sable partagé. Trois cent soixante marches d'un côté. Un levier de l'autre, et un vieillard qui a neuf grains et des bras de trente ans à réveiller. Et, à une lieue, un arbre grêle, après lequel le vent souffle." },
      { if: R, text: "C'est toi qui l'as dit, ou c'est {autre} : vous ne saurez jamais. Il y a eu un regard, au pied des marches, par-dessus un tas de sable partagé. Tu connais ce regard. Tu l'as eu cent fois, au bord d'une ferme prise, quand le coup était trop gros : *on sort.*" },
      "Vous traversez la salle. Les neuf sont debout, sourds. Le Grand Maître a les mains à la barre. L'homme de trente ans regarde le puits.",
      "Le vieil homme vous regarde passer. Il a compris avant que vous ayez atteint la porte. Il ne se lève pas. « La troisième porte, dit-il. Celle que je n'avais pas plaidée : je vous faisais l'honneur de ne pas y penser. » Sa canne tourne entre ses doigts. « Vous ne rendez rien, et vous ne me donnez rien. Cette note tient donc. Mon puits reste où il est, chez moi, à une semelle de mon pavé, et il achèvera sa course à son heure, sans vous. Je ne perds rien. »",
      "Il a son petit rire. « Vous non plus, croyez-vous. Vous verrez. On ne sort pas d'ici sans rien emporter : on emporte de savoir. C'est plus lourd que le sable, et cela ne se dépense pas. »",
      "Vous montez les marches du palier. La porte de fer. La ruelle. Aucun de vous ne se retourne : c'est la règle, quand on sort.",
    ],
    choices: [{ label: "Le parvis, une dernière fois", to: "Fu_parvis", big: true }] },

  Fu_parvis: { act: "V", title: "Entre des gens qu'on connaît", place: "tour", ambiance: "ville",
    text: [
      "Le parvis. Cinq mille personnes, la bouche ronde sur un chiffre. Il faut passer entre elles pour gagner la rue aux Oies.",
      { if: J, text: "Tu les connais. C'est ce qui rend la chose difficile. La colporteuse, au bord, deux doigts en l'air. Le Temps du Mystère, sa faux levée. Sur la borne, un laboureur en blouse neuve, ou un mitron qui a pris sa place. Tu passes devant chacun en regardant tes pieds. {autre} marche vite, sans frôler personne, avec l'adresse de quelqu'un qui a fait cela toute sa vie." },
      { if: R, text: "Tu passes entre eux comme tu l'as toujours fait : vite, sans frôler, les coudes au corps. Chez toi, ils sont gris depuis soixante ans, et tu sors de chez eux les poches pleines. Ici, ils ont encore leurs couleurs. Tu sors les poches vides. Cela pèse plus que tu n'aurais cru." },
      { if: J, text: "À la fontaine, tu t'arrêtes. Tu dis : « On peut encore. » {autre} s'arrête aussi. {autre:Il} regarde la Tour. « On peut. Tu montes, je descends, et là-haut tu dis un mot qui me prend mon pays, ou moi un mot qui te prend le tien. Ou le vieux se lève. » {autre:Il} te regarde. « Je veux pas te faire ça. Je veux pas que tu me le fasses. Y a que dehors qu'on se doit rien. »" },
      { if: R, text: "À la fontaine, {autre} s'arrête. « On peut encore. » Tu regardes la Tour. Tu dis ce que tu penses : là-haut, {autre:il} dira un mot qui te prend ton pays, ou toi un mot qui lui prend le sien, ou le vieux se lèvera. Tu ne veux pas lui faire cela. Tu ne veux pas qu'on te le fasse. Il n'y a que dehors qu'on ne se doive rien." },
      "C'est faux, et vous le savez tous les deux. Vous repartez quand même. Il y a des choses fausses qu'on dit pour pouvoir mettre un pied devant l'autre.",
    ],
    choices: [{ label: "Le chemin du canal", to: "Fu_peuplier", big: true }] },

  Fu_peuplier: { act: "V", title: "Deux pas, et du vent", backName: "le septième peuplier", place: "foire", ambiance: "eau", charniere: true,
    text: [
      { first: true, text: "Le canal, la gabare, le haleur penché sur l'air. Vous comptez les arbres. Le septième est grêle, tiède d'un côté." },
      { first: true, if: VU, text: "Vous êtes déjà venus. Vous aviez passé les mains, jusqu'au coude, dans un vent que le reste du corps ignorait. Vous les aviez retirées. Vous aviez tourné le dos à l'arbre, en vous disant des choses fières." },
      { first: true, if: { not: VU }, text: "Rien ne marque le bord. Le chemin continue. Mais passé le tronc, les blés penchent tous ensemble, couchés par une main. On avance les doigts : il y a du vent." },
      { first: true, text: "Deux pas." },
      { first: true, text: "Le vent vous prend en pleine figure, tiède, pressé, plein d'alouettes. Le soleil bouge sur vos nuques. Vous avez faim, d'un coup, d'une faim de neuf jours." },
      { first: true, text: "Vous vous retournez. La ville est grise. Un rond d'une lieue, couleur de cendre, net comme un trait de compas. Le peuplier est debout au bord, moitié vert, moitié gris. Vous venez d'en sortir, et il n'y a déjà plus, de ce côté, aucune façon de voir que quelqu'un y bouge." },
      { first: true, if: R, text: "Tu connais cette vue. C'est celle que tu as eue toute ta vie : la Dormante, de dehors. Tu la vois naître. Elle a une heure. Elle est toute petite. Tu sais, année par année, jusqu'où elle ira, et à quelle date elle passera sur ta rue." },
      { first: true, if: J, text: "{autre} regarde la ville grise avec une figure que tu ne lui avais jamais vue : celle de quelqu'un qui reconnaît. « Elle a une heure, dit-{autre:il}. Je sais tout ce qu'elle va prendre. Je sais les dates. » {autre:Il} se tourne vers l'occident. « La mienne, c'est dans cinquante-quatre ans. »" },
      { again: true, text: "Le septième peuplier, moitié vert, moitié gris. Derrière, le rond de cendre." },
    ],
    choices: [{ label: "Le ponceau : quelqu'un y est", to: "Fu_pont", big: true }] },

  Fu_pont: { act: "V", title: "Vous l'avez pas sonnée", place: "foire", ambiance: "eau", charniere: true, backName: "le ponceau",
    text: [
      { first: true, text: "Sur le ponceau, à dix pas, une petite de neuf ans. Deux nattes, des sourcils d'un seul trait, une boîte de fer. Elle a couru. Elle s'est retournée. Elle a vu la ville devenir grise ; puis elle a vu deux personnes en sortir à pied, par le chemin, comme on rentre des champs." },
      { first: true, if: J, text: "Elle te connaît. Neuf jours de ferme et de route. Elle te regarde venir, et sa figure se ferme à mesure. « T'avais dit que t'allais à la Tour. Que c'était pour la cloche. » Tu dis oui. « Elle a sonné onze. J'ai compté. » Tu dis oui. « Et t'es là. »" },
      { first: true, if: R, text: "Elle connaît {autre}. Elle {autre:le} regarde venir, et sa figure se ferme. « T'avais dit que t'allais à la Tour. Que c'était pour la cloche. Elle a sonné onze. Et t'es là. » Elle ne t'a pas encore regardé{e}, toi. Tu as vu ces yeux-là soixante ans plus vieux, par un soupirail. Tu aimerais mieux qu'elle continue à ne pas te voir." },
      { first: true, if: { not: SORTIS }, text: "« Mon père est dedans. Il m'a posée. Il a dit : cours. » Sa voix ne tremble pas. C'est pire. « Vous l'avez pas sonnée. Vous êtes sortis. Alors il reste dedans. »" },
      { first: true, if: SORTIS, text: "« Mon père est au huitième arbre. Vous nous avez fait sortir. » Elle regarde le gris. « Et tous les autres, vous les avez pas fait sortir. Y en a plein. J'ai vu la marchande. Elle a pas eu le temps. »" },
      { first: true, text: "On ne ment pas à cette enfant. On lui dit pourquoi : qu'il fallait choisir entre deux pays, et qu'aucun de vous n'a voulu ôter le sien à l'autre. Elle écoute. Elle a neuf ans, et elle range tout." },
      { first: true, text: "« Alors vous avez ôté les deux à tout le monde. » Elle a trouvé cela en une phrase. Vous aviez mis une lieue à ne pas le trouver." },
      { first: true, text: "Elle serre sa boîte. « Ça se rouvre ? » On lui dit ce qu'on sait : que la note tient, que le gris grandira, et que dans soixante ans, au même jour, il prendra tout si personne n'a rendu le coup. « Soixante ans. » Elle fait le compte sur ses doigts. « J'en aurai soixante-neuf. C'est vieux. C'est pas mort. » Elle vous regarde, l'un après l'autre. « Vous avez pas voulu. Moi, je voudrai. Vous me direz tout ce que vous savez. Tout. Et je trouverai quelqu'un. »" },
      { again: true, text: "Le ponceau. La petite est partie devant, sur la route, sans vous attendre." },
    ],
    choices: [{ label: "La suivre, sur la route", fx: { flag: "monde:f_line_sait" }, to: "Fu_plaine", big: true }] },

  Fu_plaine: { act: "V", title: "Ce qu'on emporte", place: "foire", ambiance: "champs",
    text: [
      "On dort dans une meule, la première nuit, à trois lieues du gris. On a mangé du pain donné par une fermière qui croyait la ville en feu.",
      "Vous faites le compte de ce que vous savez. C'est beaucoup. Soixante ans de Chronique, lus par l'un dans un Cahier, vécus par l'autre à l'envers : un duc régent, puis son fils, puis une petite-fille. L'abbaye prise en 555, pendant un office. Arvoise en 575. Roquebise la nuit du Bond, en 595. Un Maître des Sables qui sera son propre fils. Des enfants chassés des fossés.",
      { if: J, text: "« On peut le dire, dis-tu. Aux gens. Qu'ils partent avant. » {autre} mâche son pain. « On le dira. Y en a qui partiront. » {autre:Il} regarde le noir, du côté de la ville. « Chez moi, y avait des vieux, au camp, qui racontaient qu'en 555 deux têtes fêlées étaient venues crier à l'abbaye que le gris arrivait. On les avait pas crus. J'ai toujours trouvé l'histoire bête. » {autre:Il} se tait. Tu comprends, lentement, de quelles têtes il s'agit." },
      { if: R, text: "{autre} dit qu'on peut le dire aux gens : qu'ils partent avant. Tu mâches ton pain. On le dira. Il y en a qui partiront. Tu penses à une histoire qu'on racontait au camp, le soir : qu'en 555, deux têtes fêlées étaient venues crier à l'abbaye que le gris arrivait, et qu'on ne les avait pas crus. Tu l'avais toujours trouvée bête. Tu la racontes. {autre} comprend en même temps que toi de quelles têtes il s'agit." },
      "Vous êtes dans la Chronique. Vous y étiez depuis le début. Ce que vous allez faire pendant soixante ans, l'un de vous l'a déjà entendu raconter, en morceaux, par des gens qui ne savaient pas de qui ils parlaient.",
      "Il y a un silence, dans la meule. On entend les grillons, qui vont. C'est le bruit d'une année qui continue.",
      "« On se sépare pas », dit l'un. « Non », dit l'autre. Puis, parce qu'il faut bien vivre de quelque chose : « Tu sais limer. Moi, je sais porter. » On s'endort là-dessus, d'un vrai sommeil, le premier depuis la grange.",
    ],
    choices: [
      { label: "Les années, aux Trois-Noyers", hide: R, to: "Fuj_noyers", big: true },
      { label: "Les années, à Roquebise", hide: J, to: "Fur_roquebise", big: true },
    ] },

  Fuj_noyers: { act: "V", title: "Un horloger qui sait l'heure d'avance", place: "basse", ambiance: "champs",
    text: [
      "Tu t'établis aux Trois-Noyers. On t'y donne un coin de l'appentis. Tu remontes l'horloge de la cuisine, celle du curé, puis des montres qui viennent d'assez loin.",
      { if: { not: SORTIS }, text: "La ferme a perdu son maître. Bérarde tient tout. Girard mène la jument et ne te parle pas : il sait, par sa sœur, pourquoi son père est debout sur une borne. Il mettra dix ans à te passer le sel." },
      "Line est ton apprentie avant d'avoir douze ans. Elle a les doigts, et une rancune méthodique. Elle te fait tout redire. Elle a un cahier de toile, où elle écrit ce que tu sais de l'avenir, date par date, d'une écriture ronde. Elle vérifie. Quand le duc se fait régent à la date dite, elle coche. Quand la Guilde publie que le Grand Maître est maudit, elle coche. Elle te regarde ensuite, par-dessus la page, sans rien dire.",
      "Tu vieillis. C'est une chose que tu n'avais jamais faite. Tu as vingt ans, trente. Tu as des pratiques, un nom, une réputation de sorcellerie pour les crues et les gelées, que tu sais par un almanach lu soixante ans trop tôt.",
      "{autre} est à Roquebise, à une journée. Vous vous voyez aux foires. Vous n'avez plus de Cahiers : ceux qui vous avaient menés jusqu'ici n'étaient pas encore cousus. Vous vous écrivez par des rouliers, sur du vrai papier, qui met quatre jours.",
      "Tu vas quelquefois jusqu'au septième peuplier. Il y a une corde, à présent, nouée au tronc, et un chiffon rouge. C'est toi qui les as mis. Tu ne sais plus si tu l'as fait pour avertir, ou parce qu'{autre} t'avait dit, dans une meule, qu'ils y étaient.",
    ],
    choices: [{ label: "L'an 555 : l'abbaye", to: "Fu_555", big: true }] },

  Fur_roquebise: { act: "V", title: "Cinquante ans avant ta porte", place: "foire", ambiance: "ville",
    text: [
      "Tu t'établis à Roquebise. Tu y es allé{e} tout droit, comme une bête à l'écurie.",
      "La rue des Potiers. La troisième porte après la fontaine est à des gens qui ne te connaissent pas. Tes parents ne sont pas nés. Tu as pour toi tes deux mains, et un nom qu'il vaut mieux ne pas dire : tu en prends un autre, en changeant deux lettres. Tu as connu des gens qui faisaient cela.",
      "On t'embauche à la verrerie, pour porter. On te garde pour tes doigts. Tu apprends la canne, le pontil. Tu fais du verre bleu, parce que c'est le moins cher, puis parce qu'on t'en demande.",
      "Tu vieillis. Tu as vingt ans, trente. Tu vois arriver dans la rue, une année de foire, une fille de Sainte-Luce qui vient se marier chez un potier. Elle s'appelle Lison Tiennot. Elle a ton menton. Tu lui vends six gobelets, sans pouvoir rien ajouter, et tu la regardes monter la côte avec. C'est ta grand-mère. Elle a vingt ans de moins que toi.",
      "{autre} est aux Trois-Noyers, à une journée. Vous vous voyez aux foires. Vous vous écrivez par des rouliers. Tu apprends le penché, à trente ans passés, d'une veuve de la rue Haute, contre du bois fendu.",
      "Tu sais la date. Tu la sais depuis toujours. La nuit du Bond : le quatorze octobre 595. Tu la portes comme un caillou dans un sabot, cinquante-quatre ans, en marchant dessus.",
    ],
    choices: [{ label: "L'an 555 : l'abbaye", to: "Fu_555", big: true }] },

  Fu_555: { act: "V", title: "Les deux têtes fêlées de l'abbaye", backName: "l'abbaye", place: "foire", ambiance: "temple", charniere: true,
    text: [
      { first: true, text: "Vous avez trente ans. Vous arrivez à Sainte-Aure-des-Heures trois jours avant la date, sur une charrette louée, avec un discours préparé." },
      { first: true, text: "Mère Ancille est morte. La prieure qui vous reçoit s'appelle Tiphaine ; elle était novice en 541, et elle a gardé l'habitude d'écouter de tout son corps. Elle vous écoute. Vous dites le gris, la date, l'heure : à l'office de sexte, le vingt et un juin. Qu'il faut vider l'abbaye." },
      { first: true, if: J, text: "« Je vous reconnais, te dit-elle. Vous étiez passé{e} ici, il y a quatorze ans, avec une colporteuse. Vous aviez l'air de savoir quelque chose. » Elle regarde tes mains. « Vous le saviez donc. Et vous êtes sorti{e}. » Elle ne dit pas cela durement. Tu aimerais mieux." },
      { first: true, if: R, text: "Elle reconnaît {autre}, d'un passage d'il y a quatorze ans. Toi, elle te regarde plus longtemps. Tu as vu son chœur, chez toi : quarante femmes grises, la bouche ouverte sur une note, et les Veilleurs à genoux autour. Tu sais ce qu'elle va répondre. Tu es venu{e} quand même : c'était dans l'histoire." },
      { first: true, text: "« Nous chantons les heures, dit la prieure. Depuis les Fondateurs. Si l'heure doit s'arrêter ici, elle s'arrêtera sur nous qui la chantions : c'est une façon de la tenir. » Elle se lève. « Les sœurs converses partiront, et les malades, et les livres. Je vous remercie pour ceux-là. Le chœur reste. »" },
      { first: true, text: "On crie. On supplie. On va jusqu'au village crier encore, et l'on vous y prend pour deux têtes fêlées. Trente charrettes partent quand même, la veille. Le vingt et un, à midi, vous êtes sur la colline d'en face. On entend l'office, de loin. Puis on ne l'entend plus, au milieu d'une note, et le gris est là." },
      { first: true, text: "« Elles y étaient, chez toi ? — Oui. Toutes. — Et les trente charrettes ? » L'autre réfléchit. « On disait qu'il manquait les livres. Personne savait pourquoi. » Vous regardez descendre la route trente charrettes de gens qui vivront. C'est tout ce que vous avez changé. C'était peut-être déjà compté." },
      { again: true, text: "La colline, en face de l'abbaye grise." },
    ],
    choices: [{ label: "L'an 575 : Arvoise", fx: { flag: "monde:f_abbaye_sortie" }, to: "Fu_575", big: true }] },

  Fu_575: { act: "V", title: "Un pont, et ceux qui restent dessus", backName: "Arvoise", place: "foire", ambiance: "eau", charniere: true,
    text: [
      { first: true, text: "Vous avez cinquante ans. Arvoise est une ville, avec un pont de maître Baudri, des halles, quatre mille âmes. Vous y venez dès le printemps, cette fois. Vous avez appris." },
      { first: true, text: "On ne vous prend plus pour des têtes fêlées : vous avez eu raison une fois, et cela s'est su. On vous prend pour pire. Un prévôt de la Régence vous fait dire que la Maîtrise des Sables ne goûte pas qu'on vide une ville où elle a ses comptoirs. On vous jette des pierres, rue du Pont." },
      { first: true, if: J, text: "Tu vois, sur le quai, des hommes en casaque noire monter des baraques, avec des cuves. Ils attendent le gris comme on attend une marée. Ils savent la date aussi : quelqu'un la leur a donnée. Tu connais ce quelqu'un. Il avait trente ans, de belles mains, et il regardait un puits, la dernière fois que tu l'as vu." },
      { first: true, if: R, text: "Tu vois, sur le quai, des hommes en casaque noire monter des baraques, avec des cuves. C'est le camp de la Maîtrise. Tu y as volé, chez toi, vingt-six ans plus tard. Tu sais où sera la cantine, où le dépôt. Tu regardes poser les planches que tu descelleras." },
      { first: true, text: "La moitié de la ville part. C'est plus qu'il n'en était parti dans les récits. L'autre moitié reste, par entêtement, par pauvreté, ou parce qu'on lui a dit que le gris conservait." },
      { first: true, text: "Le vingt et un juin, vous êtes sur la rive d'en face. Il y a du monde sur le pont : des gens qui ont attendu le dernier moment, avec des matelas. Le gris vient par l'orient. Il passe sur les halles, sur le quai, sur le pont. Il s'arrête à la troisième arche. Ceux qui avaient passé la troisième arche courent encore. Les autres ont un pied en l'air." },
      { first: true, text: "« J'ai marché sur ce pont, dit l'un de vous. Entre eux. — Je sais. Je les ai vus partir de l'autre bout. » Vous vous taisez. Vous avez cinquante ans, des cheveux gris, et l'habitude de cette phrase : *je sais.*" },
      { again: true, text: "La rive, en face d'Arvoise. Le pont est gris jusqu'à la troisième arche." },
    ],
    choices: [
      { label: "L'an 592 : la route de Vauxelles", hide: R, to: "Fuj_borne", big: true },
      { label: "L'an 595 : la nuit du Bond", hide: J, to: "Fur_bond", big: true },
    ] },

  // ----- the hour that made each of them
  Fuj_borne: { act: "V", title: "Une cuiller", place: "foire", ambiance: "champs",
    text: [
      "Tu as soixante-sept ans. On vide Vauxelles : la lisière y sera avant l'hiver. Tu es venu{e} seul{e}, sans le dire à Line, t'asseoir derrière une haie, sur la route, en face d'une borne.",
      "Tu sais ce qui va se passer ici ce soir. Tu ne sais pas comment. Toute ta vie, on t'a dit : *on t'a trouvé{e} à six ans sur cette pierre, avec une cuiller dans la main, et personne n'a su dire à qui tu étais.*",
      "Les charrettes passent, chargées de matelas, de cages à poules. À la brune, il en vient une dernière, tirée par un âne. Une femme la mène, jeune, maigre, un fichu sur la tête. Il y a un enfant sur les sacs. Six ans. De la crasse. Il mange une soupe froide dans une écuelle, avec une cuiller d'étain.",
      "Elle arrête l'âne devant la borne. Elle se tâte. Elle fouille les sacs. Tu l'entends jurer, tout bas : elle a oublié quelque chose. Elle regarde la route, vers le village, qui est à un quart de lieue ; vers l'orient, où le ciel a une couleur. Elle fait le compte. Elle a le temps.",
      "Elle descend l'enfant. Elle l'assoit sur la borne. « Tu bouges pas. Je reviens. Tiens ta cuiller. » Elle lui met dans l'autre main une bille de verre bleu, pour l'occuper. Elle l'embrasse sur la tête, vite, comme on fait quand on revient tout de suite. Elle repart en courant vers le village.",
      "Tu as sa figure. Tu n'avais jamais su de qui tu avais la figure.",
      "Elle n'aura pas le temps. Tu le sais : on ne t'a jamais dit qu'elle était revenue. Elle court vers une maison où elle a laissé une chose, et le gris sera sur le seuil avant elle. Si tu sors de cette haie, si tu lui barres la route, elle remonte sur sa charrette avec son enfant. Il grandit ailleurs. Il a une mère. Et il n'y a personne sur cette borne, demain soir, quand une horlogère passera.",
    ],
    choices: [
      { label: "Sortir de la haie : « N'y retournez pas. »", fx: { flag: ["j:f_mere_retenue", "monde:f_chaine_rompue"] }, to: "Fuj_borne_fin" },
      { label: "Rester derrière la haie, et la regarder courir", to: "Fuj_borne_fin" },
    ] },

  Fuj_borne_fin: { act: "V", title: "À qui tu étais", place: "foire", ambiance: "champs",
    text: [
      { after: "j:f_mere_retenue", text: "Tu sors de la haie. Tes genoux craquent. Tu te mets en travers. « N'y retournez pas. » Elle s'arrête, essoufflée, méfiante : quelqu'un de vieux, sorti d'un fossé. « J'ai laissé le sel. Et le... — Laissez-le. Le gris y sera avant vous. Je le sais. On rit de moi depuis trente-sept ans parce que je le sais. »" },
      { after: "j:f_mere_retenue", text: "Elle regarde l'orient. Elle regarde l'enfant, sur la borne. Tu vois le compte se refaire sur sa figure, qui est la tienne. Elle revient. Elle reprend l'enfant, le remet sur les sacs, la cuiller, la bille. Elle te dit merci, de travers, sans comprendre. L'âne repart." },
      { after: "j:f_mere_retenue", text: "L'enfant te regarde, par-dessus les sacs, en léchant sa cuiller. Il ne te reconnaît pas : il ne peut pas. Il s'en va, avec sa mère, vers un pays où il n'apprendra jamais à limer un pivot. Tu restes sur la route, à côté d'une borne vide. Tu viens de te donner ce que tu n'as pas eu. Tu viens aussi d'ôter à Line, et à un village, et peut-être au monde, quelqu'un qui devait partir par une grange dans neuf ans." },
      { after: "j:f_mere_retenue", text: "Tu t'assois sur la borne. Elle est encore tiède. Tu ne regrettes pas. Tu sais seulement qu'il faudra, dans neuf ans, que quelqu'un y aille, et que tu viens de te désigner." },
      { before: "j:f_mere_retenue", text: "Tu restes derrière la haie. Tu as les mains dans la terre, pour ne pas te lever. Elle court. Elle a une façon de courir que tu reconnais : la tienne, à seize ans, dans une vis. Elle passe le coude de la route." },
      { before: "j:f_mere_retenue", text: "L'enfant attend. Il finit sa soupe. Il fait rouler la bille dans le creux de la borne. La nuit vient. À l'orient, le ciel avance, sans bruit, et s'arrête à un champ de la route, là où il devait s'arrêter. Personne ne revient par le coude." },
      { before: "j:f_mere_retenue", text: "L'enfant ne pleure pas. Tu ne te souvenais pas de cela : que tu n'avais pas pleuré. Il serre sa cuiller. Tu restes là toute la nuit, à vingt pas, sans te montrer, à veiller sur toi-même. Au matin, il vient une carriole, avec une femme de soixante ans dedans, des lunettes sur le front. Elle voit l'enfant. Elle arrête. Elle le regarde longtemps, et tu sais ce qu'elle reconnaît." },
      { before: "j:f_mere_retenue", text: "« À moi, donc », dit Line. Elle le charge. Elle ne t'a pas vu{e}. Ou elle t'a vu{e}, et elle a compris ce que tu faisais là, et elle t'a laissé{e} derrière ta haie, par égard. Tu ne le lui demanderas jamais." },
      "Tu sais à présent de qui tu étais. Tu le sais seul{e}. Tu n'en diras rien à {autre} avant la foire d'automne, et encore : en regardant ailleurs.",
    ],
    choices: [{ label: "L'an 601", fx: { flag: "monde:f_mere_passee" }, to: "Fu_601", big: true }] },

  Fur_bond: { act: "V", title: "Le quatorze octobre", place: "foire", ambiance: "ville",
    text: [
      "Tu as soixante-dix ans. C'est le soir du quatorze octobre 595.",
      "Tu as tout essayé, depuis un an. Tu as dit la date à la fontaine, à l'auberge, au curé. Roquebise t'aime bien : tu es de la rue depuis cinquante-quatre ans, tu fais le plus beau bleu de la butte. On t'a écouté{e} avec patience. La lisière est à quatre lieues ; elle avance d'un champ par an ; on a le temps. Personne n'a jamais vu le gris sauter. Le mot même n'existe pas encore : c'est demain qu'on dira *le Bond*.",
      "Quelques-uns sont partis, pour te faire plaisir. Le potier de la troisième porte a ri. Il a une femme, Lise ; un garçon ou une fille de dix ans, qu'il a envoyé aux foins chez l'oncle, à Sainte-Luce, jusqu'à dimanche ; et une petite de cinq ans, qui dort en haut, sous le toit, avec un oiseau de terre verte dans la main.",
      "Tu es dans la rue. Il fait nuit. Tu vois la vitre, sous le toit. Tu l'as vue dans un puits, il y a cinquante-quatre ans, à une main sous le pavé d'une cave.",
      "La porte n'est pas verrouillée : on ne verrouille pas, rue des Potiers. Tu peux monter. Tu connais l'escalier, la marche qui craque. Tu peux prendre la petite dans sa couverture, sans la réveiller, et la porter jusqu'en haut de la côte, passé le calvaire, où le gris s'arrêtera. Elle te connaît : tu lui donnes des billes.",
      "Elle vivra. Elle aura six ans, sept ans, une vie. Et dimanche, quand quelqu'un de dix ans rentrera des foins dans une rue grise, il trouvera sa sœur sur le talus, dans les bras d'une personne de la rue. Il ne passera pas six ans dans les fossés. Il ne volera pas trois mesures par un soupirail. Il ne marchera pas vers une Tour.",
      "À l'orient, par-dessus les toits, le ciel n'a pas encore changé. Il te reste le temps de monter un escalier.",
    ],
    choices: [
      { label: "Monter, et la porter jusqu'au calvaire", fx: { flag: ["r:f_lison_sortie", "monde:f_chaine_rompue"] }, to: "Fur_bond_fin" },
      { label: "Rester dans la rue, sous la vitre, et siffler deux notes", to: "Fur_bond_fin" },
    ] },

  Fur_bond_fin: { act: "V", title: "Au milieu d'un souffle", place: "foire", ambiance: "ville",
    text: [
      { after: "r:f_lison_sortie", text: "Tu montes. La marche craque. Elle dort sur le côté, les cheveux en l'air, le sifflet dans le poing. Tu la roules dans la couverture. Elle pèse ce qu'elle pesait. Elle ouvre un œil dans l'escalier. « C'est toi, les billes. — C'est moi. Dors. » Elle se rendort contre ton épaule, qui a soixante-dix ans et qui tient." },
      { after: "r:f_lison_sortie", text: "Tu grimpes la côte. Tu souffles comme une forge. Derrière toi, par-dessus les toits, le ciel vient, d'un seul coup, sans un bruit : il saute. Il passe sur les fours, sur la fontaine, sur la troisième porte, où un homme sifflait en bas. Il s'arrête au calvaire, à dix pas sous tes talons." },
      { after: "r:f_lison_sortie", text: "Tu t'assois dans l'herbe, la petite sur les genoux. Elle dort. Elle a une haleine d'enfant, qui va et qui vient. Tu l'écoutes jusqu'au jour. Tu as attendu ce bruit-là cinquante-quatre ans, et il a fallu que tu le voles." },
      { after: "r:f_lison_sortie", text: "Dimanche, il viendra par la route de Sainte-Luce quelqu'un de dix ans, que tu connais mieux que personne. Tu lui mettras sa sœur dans les bras. Tu ne lui diras pas qui tu es. Il aura une vie, lui aussi, à l'air libre. Et il n'y aura personne, dans six ans, pour marcher vers une Tour avec un sachet volé. Tu viens de te désigner." },
      { before: "r:f_lison_sortie", text: "Tu ne montes pas. Tu restes au milieu de la rue, les sabots sur les tessons. Tu regardes la vitre. Tu as les poings fermés à t'en casser les doigts, toi qui as ouvert tant de mains." },
      { before: "r:f_lison_sortie", text: "Si tu la prends, quelqu'un de dix ans ne marche pas. S'il ne marche pas, personne ne descend à ce levier, dans six ans, et la vague prend tout : elle, les autres, le calvaire avec. Tu as fait ce compte mille fois. Il sort toujours pareil. Tu le hais." },
      { before: "r:f_lison_sortie", text: "Alors tu siffles. Deux notes, une haute, une basse : l'air du potier, qui était le tien, pour qu'elle coure à la porte. Derrière la vitre, quelque chose remue. Une petite se retourne dans son lit, vers la fenêtre, au milieu d'un souffle. Et le ciel vient, par-dessus les toits, d'un seul coup. Il saute." },
      { before: "r:f_lison_sortie", text: "Tu as couru. Tu es au calvaire, à dix pas du bord, les mains aux genoux. En bas, la rue est grise. Tu sais à présent pourquoi elle s'était retournée. Tu l'avais vue ainsi, à seize ans, dans une pincée : tournée vers la vitre, comme si on l'avait appelée. On l'avait appelée." },
      "Tu redescends par l'autre versant, au matin. Tu n'en diras rien à {autre} avant la foire, et encore : en regardant ailleurs.",
    ],
    choices: [{ label: "L'an 601", fx: { flag: "monde:f_bond_passe" }, to: "Fu_601", big: true }] },

  // ----- 601
  Fu_601: { act: "V", title: "Soixante-seize ans", backName: "la lisière", place: "basse", ambiance: "champs", charniere: true, aparte: true,
    text: [
      { first: true, text: "Le douze juin 601. Vous avez soixante-seize ans, tous les deux. Vous vous retrouvez à une lieue des Trois-Noyers, dans une cabane de berger, d'où l'on voit la lisière. Elle a mangé la Ferme-Vieille ce printemps. On vide le village dans trois jours." },
      { first: true, text: "Vous ne vous étiez pas vus depuis la dernière foire. Vous vous regardez. Soixante ans de plein vent : des rides, des mains tachées, un dos qui tire. Vous vous reconnaissez à la façon de vous asseoir." },
      { first: true, text: "Il y a des choses à se dire, que vous aviez gardées. Vous les dites, en regardant le gris." },
      { first: true, if: { all: [J, { has: "j:f_mere_retenue" }] }, text: "Tu dis la borne de Vauxelles. Une femme, un âne, un enfant avec une cuiller. Que tu es sorti{e} de la haie. « Elle est repartie avec lui. Line n'a trouvé personne, le lendemain. Elle n'a pas d'apprenti. Elle a cousu ses Cahiers quand même, par entêtement, et elle ne sait pas à qui les donner. » {autre} écoute. {autre:Il} ne te reproche rien. {autre:Il} dit : « T'as eu une mère. Un soir. » Tu dis oui." },
      { first: true, if: { all: [J, { not: { has: "j:f_mere_retenue" } }] }, text: "Tu dis la borne de Vauxelles. Une femme, un âne, un enfant avec une cuiller. Que tu es resté{e} derrière la haie. « L'enfant est chez Line. Quinze ans, une lime tenue de travers, et elle lui tire le poignet à droite. » {autre} te regarde. « Tu l'as laissée courir. — Oui. » {autre:Il} hoche la tête. {autre:Il} sait ce que c'est." },
      { first: true, if: { all: [R, { has: "r:f_lison_sortie" }] }, text: "Tu dis la nuit du Bond. L'escalier, la couverture, le calvaire. « Elle a onze ans. Elle est à Sainte-Luce, chez l'oncle, avec l'autre enfant. Ils ont une vie. Personne de chez moi ne rôde dans les fossés. » {autre} écoute. {autre:Il} ne te reproche rien. {autre:Il} dit : « Tu l'as entendue respirer. » Tu dis : toute une nuit." },
      { first: true, if: { all: [R, { not: { has: "r:f_lison_sortie" } }] }, text: "Tu dis la nuit du Bond. La rue, la vitre, deux notes. « Elle s'est retournée. C'est moi qui l'ai fait se retourner. » Tu te tais. « Y a quelqu'un de seize ans, au camp de la Courtepaille, à deux lieues d'ici. Maigre. Qui sait ouvrir une main. Qui a volé du sable, cet hiver, par un soupirail. » {autre} te regarde. {autre:Il} sait ce que c'est." },
      { first: true, if: ROMPUE, text: "Vous faites le compte, à deux, comme vous avez tout fait. Il manque quelqu'un. La vieille Line a deux Cahiers cousus de rouge, de quoi faire un passage, et personne à envoyer par sa grange ; ou personne pour marcher par la route. Dans neuf jours, le Balancier cède. La chaîne qui vous avait menés à la Tour, vous l'avez défaite de vos mains, par un endroit ou par l'autre, un soir où vous ne pouviez pas faire autrement." },
      { first: true, if: ROMPUE, text: "« Alors c'est nous », dit l'un. L'autre regarde ses genoux. « On a soixante-seize ans. — On a soixante ans de retard. Ça fait le même chiffre, à peu près. »" },
      { first: true, if: { not: ROMPUE }, text: "Vous faites le compte, à deux. Tout y est. Une horlogère malade, deux Cahiers cousus de rouge, une grange. Un apprenti de seize ans, qui a de la paille dans les cheveux. Au camp, quelqu'un de seize ans, qui a volé trois mesures. Vous avez laissé se faire, chacun, la chose qui vous avait faits. Elle s'est faite. Ils partent dans trois jours." },
      { first: true, if: { not: ROMPUE }, text: "« C'est nous », dit l'un. L'autre regarde le village, où une fenêtre s'allume. « C'étaient nous. On verra ce qu'ils valent. »" },
      { again: true, text: "La cabane de berger. La lisière, à deux champs. Le village, où l'on charge des matelas." },
    ],
    choices: [
      { label: "Descendre au village, la veille du départ", hide: ROMPUE, to: "Fu_veille", big: true },
      { label: "Frapper chez la vieille Line", hide: { not: ROMPUE }, to: "Fu_retour", big: true },
    ] },

  // ----- the chain kept : they watch themselves leave
  Fu_veille: { act: "V", title: "De dos, dans une rue", backName: "le village", place: "basse", ambiance: "champs", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous descendez au village à la brune, deux vieilles gens parmi d'autres : on charge, on crie, personne ne vous regarde. Le père Lubin refuse de partir, sur son seuil. Un sergent recense. Vous connaissez cette soirée. L'un de vous l'a vécue il y a soixante ans, c'est-à-dire ce soir." },
      { first: true, if: J, text: "Tu te vois. Tu sors de chez Line, un seau à la main : seize ans, maigre, de la limaille aux doigts, l'air de quelqu'un à qui l'on vient d'expliquer une chose absurde. Cette personne passe à trois pas de toi. Elle ne te regarde pas : à seize ans, on ne regarde pas les gens de ton âge. Tu ne te souviens pas d'avoir croisé, ce soir-là, quelqu'un qui te regardait ainsi. Tu cherches. Il y avait du monde." },
      { first: true, if: R, text: "Tu te vois. Tu rôdes au bord de la lisière, pieds nus, un sachet au cou, avec cette façon de marcher qui n'appuie pas. Seize ans. Tu connais cette faim, et ce qu'elle compte en ce moment. Cette personne passe à trois pas. Elle te jauge, d'un coup d'œil, comme on jauge une poche : rien à prendre. Elle a raison. Tu ne te souviens pas d'avoir jaugé, ce soir-là, quelqu'un qui te regardait ainsi." },
      { first: true, text: "Par la fenêtre de l'atelier, on voit la vieille, à sa table, qui coud un fil rouge. Elle a soixante-neuf ans. Elle a tenu parole : *je trouverai quelqu'un.* Elle lève les yeux, un instant, vers la rue. Elle vous voit. Elle ne fait pas un signe. Elle sait qui vous êtes depuis un pont, et elle vous a interdit sa porte il y a neuf ans, pour que rien ne se dérange." },
      { first: true, text: "Dans trois jours, ils passeront, l'un par la grange, l'autre par la route. Ils ne savent rien de ce que vous savez. Ils arriveront au pied de quatre-vingts marches, par-dessus un tas de sable, et ils se regarderont." },
      { first: true, text: "Vous pouvez leur glisser quelque chose. Un papier dans une hotte, un mot dans une doublure : *ne sors pas par l'arbre.* Ce serait la première chose, en soixante ans, qui ne fût dans aucun récit. Ou vous pouvez vous taire. Ils sont tels que vous étiez. Un mot de trop, et ce ne sont plus tout à fait eux qui arrivent là-bas." },
      { again: true, text: "La rue du village, à la brune. L'atelier, la fenêtre, le fil rouge." },
    ],
    choices: [
      { label: "Vous deux : glisser le papier. Qu'ils sachent au moins ce qu'il y a derrière la troisième porte.", monde: "boucle", option: "glisse", fx: { flag: "monde:f_mot_glisse" }, to: "Fu_fin_boucle" },
      { label: "Vous deux : ne rien dire. Les laisser entiers.", monde: "boucle", option: "rien", fx: { flag: "monde:f_rien_dit" }, to: "Fu_fin_boucle" },
    ] },

  Fu_fin_boucle: { act: "V", title: "La corde et le chiffon rouge", end: true, epilogue: true, fx: { flag: "fin:fuite" },
    text: [
      { if: { all: [{ has: "monde:f_mot_glisse" }, J] }, text: "Tu écris le papier. En penché : ta main n'a pas changé. *Au pied de l'escalier, tu voudras sortir. Il y a un arbre. Je l'ai fait. J'ai eu soixante ans pour le regretter. Monte.* Tu le glisses dans le Cahier qui partira par la grange, entre deux feuillets du fond, où on ne le trouvera pas avant la ville. Tu ne signes pas. On reconnaîtra l'écriture, là-bas, sans comprendre comment." },
      { if: { all: [{ has: "monde:f_mot_glisse" }, R] }, text: "Tu écris le papier. En bâtons : tu as appris le penché, mais c'est en bâtons qu'on lit, à seize ans, dans les fossés. *AU PIED DE L'ESCALIER TU VOUDRAS SORTIR. JE L'AI FAIT. J'AI EU SOIXANTE ANS POUR Y PENSER. DESCENDS.* Tu le noues dans un chiffon, avec trois pincées de sable, et tu le poses où tu sais que passeront deux pieds nus : sous la troisième pierre du gué. Ces mains-là prennent tout ce qui traîne. Elles le prendront." },
      { if: { has: "monde:f_rien_dit" }, text: "Vous ne dites rien. Vous remontez à la cabane. Ce que vous êtes devenus, vous le devez à ce que vous avez fui, et à soixante ans passés à le savoir ; ce que ces deux-là deviendront, il faut qu'ils le doivent à eux-mêmes. Ils ont la même figure que vous. Ce n'est pas une raison pour qu'ils aient les mêmes jambes." },
      "Le quinze, l'un part par la grange. Le même jour, l'autre passe la lisière. Vous ne les voyez pas : vous avez promis à la vieille de ne pas approcher.",
      "Vous marchez neuf jours, à votre pas, par le dehors, en contournant le gris. Vous arrivez le vingt et un au matin au septième peuplier. Il est mort depuis longtemps, sec, blanc, avec une corde nouée au tronc et un chiffon rouge. On y vient de dix lieues regarder où le monde finit.",
      "Vous vous asseyez au pied, du bon côté. Devant vous, la ville grise, sur son Mont. Dedans, à cette heure, deux personnes de seize ans traversent un parvis. Elles ont du sable au cou, un mot dans la bouche, et quatre-vingts marches devant elles.",
      { if: J, text: "« Tu crois qu'on monte, là-dedans ? » demande {autre}. Tu ne sais pas. Tu te souviens de ce que tu as pensé, au pied de ces marches. Tu ne te souviens pas d'avoir été sûr{e}. C'est peut-être par là que passera le jour." },
      { if: R, text: "« Tu crois qu'on descend, là-dedans ? » demande {autre}. Tu ne sais pas. Tu te souviens de ce que tu as pensé, au pied de ces marches : *on sort.* Tu ne te souviens pas d'avoir été sûr{e}. C'est peut-être par là que passera le jour." },
      "Midi approche. Si personne ne rend le coup, la vague passera cet arbre, et vous la verrez venir de face, cette fois, sans vous lever. Vous avez décidé cela ensemble, sans phrases : on ne sort pas deux fois.",
      "S'il sonne, vous l'entendrez. Vous n'avez jamais entendu le douzième.",
      "Vous écoutez. Vous avez soixante-seize ans, les mains l'une près de l'autre sur l'herbe sèche, et pour la première fois depuis soixante ans vous ne savez pas la suite.",
    ] },

  // ----- the chain broken : they go themselves
  Fu_retour: { act: "V", title: "J'avais cousu pour des jeunes", backName: "l'atelier de Line", place: "basse", ambiance: "champs", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous frappez chez Line. Elle vous avait interdit sa porte. Elle ouvre : soixante-neuf ans, des lunettes sur le front, une toux qui siffle. Elle vous regarde, l'un, puis l'autre. Elle a compris avant que vous parliez. Elle comprend toujours avant." },
      { first: true, if: { has: "j:f_mere_retenue" }, text: "« La borne de Vauxelles était vide, dit-elle. J'y suis passée le lendemain, comme on me l'avait dit, et il n'y avait personne. J'ai attendu trois jours. » Elle regarde, de vous deux, la tête qui se baisse. « Je me suis doutée. Je ne t'en veux pas. J'aurais voulu voir sa figure, c'est tout. »" },
      { first: true, if: { has: "r:f_lison_sortie" }, text: "« Personne n'est venu me voler, cet hiver, dit-elle. J'avais laissé le soupirail ouvert. J'ai quatre mesures sur quatre, et pas un glaneur de seize ans dans tout le camp qui ait la tête qu'on m'avait décrite. » Elle regarde, de vous deux, la tête qui se baisse. « Elle vit, cette petite ? » On dit oui. « Bon. C'est toujours cela de fait. »" },
      { first: true, text: "Sur la table, il y a deux Cahiers de toile, cousus d'un fil rouge. Elle les pousse vers vous." },
      { first: true, text: "« J'avais cousu pour des jeunes. Des jambes de seize ans, des yeux qui lisent sans lunettes. » Elle vous détaille : vos genoux, vos dos. « Vous ferez l'affaire. Vous avez sur eux un avantage : vous savez ce qu'il y a au bout, et ce que cela coûte d'en revenir sans l'avoir fait. »" },
      { first: true, text: "Elle va à sa cave. Elle remonte quatre mesures de sable, dans une boîte de fer. « Quarante ans de grattage. Deux passages et un retour. Il n'y aura pas de retour : mettez tout sur l'aller. » Elle tousse. « Qui passe par la grange ? »" },
      { first: true, if: J, text: "« Moi, dis-tu. Je connais 541. » Elle hoche la tête. Elle te regarde comme elle te regardait à neuf ans, par-dessus sa boîte. « Tu vas trouver là-bas une petite sotte, avec deux nattes, qui te prendra pour un meuble de famille. Ne lui dis rien. Elle a soixante ans à faire, et elle les fera mieux sans savoir. »" },
      { first: true, if: R, text: "« Moi par la route, dis-tu. Je connais le gris. » {autre} passera par la grange : {autre:il} connaît 541. Line hoche la tête. Elle te regarde. « Toi, je ne t'ai jamais aimé{e} qu'à moitié. Tu m'as dit sur un pont, à seize ans, que vous étiez sortis. Je t'ai gardé rancune soixante ans. » Elle te met la boîte de fer dans les mains. « Je te la lève. Marche. »" },
      { again: true, text: "L'atelier de Line. Les deux Cahiers, le fil rouge, la boîte de fer." },
    ],
    choices: [{ label: "Vous deux : prendre les Cahiers, et y retourner", to: "Fu_fin_retour", big: true }] },

  Fu_fin_retour: { act: "V", title: "On ne sort pas deux fois", end: true, epilogue: true, fx: { flag: "fin:fuite" },
    text: [
      "Vous refaites la route. La même, à soixante ans de distance l'un de l'autre, et à soixante ans de vous-mêmes.",
      { if: J, text: "Tu tombes dans la paille d'une grange, le douze juin 541, avec des genoux qui ne pardonnent rien. La ferme est telle qu'elle était. Une petite de neuf ans te trouve, te détaille, et décide que tu colportes quelque chose, et que tu es tombé{e} du grenier. Tu marches vers Méridane à ton pas. Tu arrives plus tard à chaque étape. Tu écris, aux bornes, en penché. Les bâtons répondent." },
      { if: R, text: "Tu entres dans le gris, le douze juin 601, par le gué, avec des genoux qui ne pardonnent rien. Tu connais chaque cercle : tu les as vus se fermer. L'abbaye, où il manque les livres. Arvoise, et son pont jusqu'à la troisième arche. Roquebise, que tu traverses sans lever les yeux. Tu écris, aux bornes, en bâtons, par fidélité. Le penché répond." },
      "On vous regarde passer, dans les deux années. Deux vieilles gens qui vont à pied vers une ville, l'un avant qu'elle soit prise, l'autre longtemps après. Personne ne vous arrête. On ne se méfie pas de ce qui marche si lentement.",
      "Vous arrivez. Le parvis, la porte de fer, la vis. Vous vous retrouvez dans la note, au pied de quatre-vingts marches, devant un tas de sable partagé. Vous y étiez à seize ans. Rien n'a bougé : pour ceux d'ici, vous êtes sortis il y a le temps d'un souffle.",
      "Dans la Chambre basse, un vieillard est assis sur un berceau, une canne entre les genoux. Il vous voit entrer. Il lui reste neuf grains. Il vous regarde longtemps, l'un, puis l'autre, et pour la seconde fois de sa vie il n'a pas de réponse prête.",
      "« Vous êtes sortis par cette porte il y a un instant, dit-il enfin. Vous aviez seize ans. » Il regarde vos mains, vos cheveux. « Vous avez mon âge, ou peu s'en faut. Vous avez donc fait le tour. Soixante ans, pour revenir à trois pas d'où vous étiez. » Son petit rire ne vient pas. « Je vous envie. J'ai fait le même tour, et je ne suis jamais revenu nulle part. »",
      { if: J, text: "Tu as trois cent soixante marches à monter, à soixante-seize ans. Tu les montes. Il te faut tout le sable et tout le souffle. Tu t'arrêtes à chaque palier. Tu arrives à la Cage sur les mains. La corde est là, lustrée. Tu la prends. Tu poses ta paume sur le fil : il est net, raide. En bas, une voix que tu connais depuis soixante ans compte jusqu'à trois." },
      { if: R, text: "Tu te couches sur le pavé, à soixante-seize ans, la joue contre le bronze. Il te faut un moment pour descendre, et tu sais qu'il en faudra un pour te relever. Tu présentes ton chasse au petit bout du coin. Là-haut, quelqu'un que tu connais depuis soixante ans a monté trois cent soixante marches sur les mains. Tu comptes. Un. Deux. Trois." },
      "Le coin saute. Le levier monte. La cloche vient.",
      "Vous avez le temps d'un mot. Vous aviez seize ans, la dernière fois, et vous êtes partis pour ne pas avoir à le dire. Vous avez eu soixante ans pour savoir ce que vaut chacun des deux midis. Vous en avez vécu un tout entier.",
      "Le marteau arrive. Cette fois, vous savez ce que vous allez dire. Vous vous l'êtes dit en face, au pied des marches, sans politesse. Et quel que soit le mot, c'est le vôtre.",
    ] },
});

module.exports = { passages: P, extras: {} };
