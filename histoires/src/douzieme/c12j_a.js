// Le Douzième Coup · chapter 12, the one who passes, first half (act IV, 20 June 541, the session of the seven
// Jurés at none, doors closed). Three ways to be in the hall : as the witness of the Grand Maître on the bench of
// the masters (`j:seance_temoin`, needs `j:coudrier_croit`), behind the chair of the sous-maître with his rolls
// (`j:seance_dixieme`, needs `j:aubespin_apprenti`), or flat on a tie beam of the roof (`j:seance_cache`). The report
// and the rose, the Grand Maître's order of insults, then what the hero can still do while a sandglass runs :
// Tiphaine reciting (`j:foliot_livre` counts as one « non » for Foliot), the proof on the table (sway rouet,
// balancourt abstains), the journal of the seal, Cliquet's question (sway cliquet), the wedge laid on the table by
// the tenth apprentice (`j:aubespin_trahi`), the last word to Lunel. Foliot votes with the number : he says no with
// three « non » before him. The vote (council `jures`, motion `suspension` : `j:vote_adopte` | `j:vote_rejete` +
// `monde:vote_interdit`). Whatever the vote, the sous-maître keeps the Queen's commission, and the chair of the
// Grand Maître falls on its back. Then the sundial of the court (M12).
var P = {};
var JOSQ = { present: "josquin" };
var PREUVE = { any: [{ has: "j:preuve_oderic" }, { item: "memoire_graveur" }] };
var TEMOIN = { has: "j:seance_temoin" }, DIXIEME = { has: "j:seance_dixieme" }, CACHE = { has: "j:seance_cache" };
var V_L = { has: "j:voix_lunel" }, V_R = { has: "j:voix_rouet" }, V_C = { has: "j:voix_cliquet" }, V_T = { has: "j:foliot_livre" };
// Foliot's number : the Grand Maître, and two more.
var TROIS_NON = { any: [{ all: [V_L, V_R] }, { all: [V_L, V_C] }, { all: [V_R, V_C] }, { all: [V_T, V_L] }, { all: [V_T, V_R] }, { all: [V_T, V_C] }] };

Object.assign(P, {
  K12j_route: { act: "IV", title: "La cloche maigre", place: "guilde", ambiance: "ville", takes: "evening",
    text: [
      "Tu traverses le sable de l'esplanade du pas qu'on prend quand on voudrait courir. La cloche maigre s'est tue. Derrière le mur à girouettes de la Guilde, sept hommes ont pris place, et l'on a fermé sur eux.",
      { after: "j:placard_vote", text: "Devant le grand portail, ils sont trois cents, assis par terre, sur le pavé chaud. Des porteurs d'eau, des laveuses, des enfants. Personne ne crie. Une vieille tricote. Quand tu passes, une laveuse te dit, sans lever la tête : « On attend. Il paraît qu'on vote notre heure. On veut voir sortir ceux qui l'auront votée. »" },
      "À la poterne de l'ouest, le père Loquet a mis son tabouret en travers et sa figure des grands jours. « On ne reçoit pas. C'est séance. » Il te reconnaît, soupire, et pousse le tabouret du pied. « Vous, on m'a dit de vous laisser. On ne m'a pas dit qui. Ils me l'ont dit tous les deux. »",
      { with: "josquin", text: "Josquin court presque. « Il a fait retarder l'appel. Il a dit qu'il avait perdu sa plume. Il la tenait. » Ses besicles ont glissé. « Il attend que vous soyez là. Je ne l'ai jamais vu attendre quelqu'un. »" },
    ],
    choices: [{ label: "Entrer dans la cour", to: "K12j_cour_seance", big: true }] },

  K12j_cour_seance: { act: "IV", title: "La cour, à none", place: "guilde", ambiance: "chateau",
    text: [
      "La cour est vide. Les apprentis sont sous clef, au dortoir ; on voit des figures aux lucarnes. Quatre hommes de cuivre se croisent au cadran solaire et repartent, chacun vers son arcade. La porte du logis du sud est fermée, et deux autres hommes de cuivre la flanquent, la lanterne au cœur.",
      "Par la galerie, on apporte le dernier Juré. Maître Lunel vient dans sa chaise, porté par deux apprentis qui soufflent, une couverture aux genoux, sa chaufferette entre les pieds. Il dort.",
      { after: "j:voix_lunel", text: "Sa manchette gauche dépasse de la couverture. Le chiffre y est, à l'encre, en gros. Un des porteurs l'a vu, et regarde ailleurs." },
      "Il y a trois manières d'entendre ce qui va se dire derrière cette porte, et tu les passes en revue comme on choisit une lime.",
      { after: "j:coudrier_croit", text: "*Vous serez dans la salle, et je vous ferai signe.* Le vieux l'a dit hier, les poings sur sa table. La porte des maîtres est sous l'arcade, à gauche de la grande." },
      { after: "j:aubespin_apprenti", text: "Sous l'arcade du fond, monsieur Fourchon t'attend, un long étui de cuir sous un bras, un étui plat sous l'autre. Il regarde l'ombre du cadran, puis toi, de l'air d'un homme qui a noté ton retard." },
      { with: "josquin", text: "« Ou alors par en haut, souffle Josquin. Il y a une trappe au grenier du réfectoire. On se couche sur l'entrait, au-dessus de l'estrade. J'y ai passé trois séances. On y est très mal, et l'on entend tout. »" },
      { if: { not: JOSQ }, text: "Reste le grenier du réfectoire. Les apprentis en parlent à table depuis trois siècles : une trappe, une passerelle, et la charpente de la grande salle, où l'on se couche sur un entrait." },
    ],
    choices: [
      { label: "La porte des maîtres : le Grand Maître a un banc pour toi", hide: { not: { has: "j:coudrier_croit" } }, fx: { flag: "j:seance_temoin" }, to: "K12j_entree_salle", big: true },
      { label: "Prendre les étuis de monsieur Fourchon", hide: { not: { has: "j:aubespin_apprenti" } }, fx: { flag: "j:seance_dixieme" }, to: "K12j_entree_salle", big: true },
      { label: "Le grenier du réfectoire, et la charpente", fx: { flag: "j:seance_cache" }, to: "K12j_entree_salle", big: true },
    ] },

  K12j_entree_salle: { act: "IV", title: "Portes closes", place: "guilde", ambiance: "chateau",
    text: [
      { if: TEMOIN, text: "La porte des maîtres donne sur les bancs. Ils sont vides : quarante pas de chêne ciré où personne ne s'assoira, puisqu'on a clos. Tu avances. Ton pas sonne." },
      { if: TEMOIN, text: "Sur l'estrade, six têtes se tournent. La septième reste de face. Barnabé Coudrier montre du pouce, sans regarder, le premier banc. « Mon témoin. Le règlement dit : *portes closes.* Il ne dit pas : *bancs vides.* Greffier, écrivez que j'ai un témoin, et dispensez-vous de chercher l'article, je l'ai cherché avant vous. »" },
      { if: TEMOIN, text: "Le greffier écrit. Maître Balancourt ouvre la bouche, croise le regard gris, et la referme. Tu t'assois au bout du premier banc, à six pas de la table, tes papiers contre la peau." },
      { if: DIXIEME, text: "« Vous vous tiendrez derrière le fauteuil de monsieur le sous-maître, à un pas, sur la gauche. » Monsieur Fourchon te charge comme on charge un mulet. « Le grand étui, ce sont les dessins. Vous donnerez celui qu'il demandera du doigt : ils sont numérotés. L'étui plat ne s'ouvre pas. Vous n'aurez ni opinion ni toux. »" },
      { if: DIXIEME, text: "Tu entres par la petite porte de l'estrade. Le sous-maître est assis à la droite du fauteuil du milieu, en habit gris, les mains croisées. Il ne se retourne pas. Il dit seulement, à mi-voix, pour toi : « Vous êtes à l'heure à ma façon, qui est d'arriver quand on a besoin de vous. » De là où tu es, tu vois sept nuques, et, par-dessus, la salle vide." },
      { if: DIXIEME, text: "L'étui plat pèse plus qu'il ne devrait. Long comme la main. Quelque chose y glisse quand on le penche, d'un seul bloc." },
      { if: CACHE, text: "La trappe du grenier a des gonds de cuir. Derrière, une passerelle de deux planches court sous les tuiles, dans une chaleur de four, jusqu'à la charpente de la grande salle. Tu rampes sur le dernier entrait, et tu t'y couches, la joue sur le chêne." },
      { if: CACHE, text: "La poutre est gravée d'un bout à l'autre. Des initiales, des dates, des cœurs, trois siècles d'apprentis venus écouter voter leurs maîtres. Un moineau a fait son nid dans une mortaise ; il te regarde, et ne dit rien non plus." },
      { if: { all: [CACHE, JOSQ] }, text: "Josquin s'est allongé derrière toi. Il te montre, du menton, trois encoches fraîches : *J. 538. J. 539. J. 540.* « Je n'ai pas mis cette année, chuchote-t-il. J'attends de savoir si elle vaut d'être gravée. »" },
      { if: CACHE, text: "À vingt pieds sous ton menton, il y a une table en fer à cheval, sept crânes, dont un chauve, deux poudrés et un en bonnet, et une chose de dix pieds à laquelle on a ôté sa housse." },
    ],
    choices: [{ label: "Regarder, et te taire", to: "K12j_ouverture", big: true }] },

  K12j_ouverture: { act: "IV", title: "Sept fauteuils", place: "guilde", ambiance: "chateau",
    text: [
      "Les voici tous les sept, et il faut convenir qu'on a rarement réuni, pour décider d'une chose aussi grave, des gens qui eussent autant d'autres soucis.",
      "Maître Rouet occupe un bout du fer à cheval, et le déborde. Il a mis ses bas de soie gris perle ; il les regarde. En face, maître Foliot, sec, propre, les mains à plat, compte les figures, de gauche à droite, puis de droite à gauche, pour vérifier. Maître Balancourt a apporté un portefeuille, et le tient fermé sous son coude, comme un homme assis sur sa caisse. Maître Cliquet, vingt-six ans, a de la limaille au revers et les yeux sur le rapporteur. On a calé maître Lunel dans son fauteuil avec un coussin ; il s'est réveillé le temps de saluer, et il est reparti.",
      "Le fauteuil du milieu est de chêne nu. Barnabé Coudrier y est assis de travers, une épaule en avant, sa copie devant lui, comme un homme qui attend qu'on en finisse de mettre le couvert. À sa droite, Melchior Aubespin, en gris, sans une broderie, a posé devant lui une carafe, un verre, et rien d'autre. Il a l'air du seul de la table qui ait dormi.",
      { after: "j:tiphaine_guilde", text: "Derrière le Grand Maître, debout, il y a un lecteur en robe noire trop longue, le capuchon sur les sourcils, un pupitre pliant devant lui. Le pupitre est vide. Le lecteur a les mains l'une dans l'autre, et un pouce entaillé." },
      "Le greffier se lève. C'est un petit homme qui lit comme on récite un bénédicité. « *Séance du vingt de juin. Un seul objet : la suspension dite de la Chambre haute, sur le rapport de monsieur le sous-maître. Monsieur le Grand Maître entendu. Les sept opineront à main levée, dans l'ordre des sièges, le rapporteur le dernier.* »",
      "Le Grand Maître prend le sablier blond qu'on a mis devant lui, et le retourne. « Monsieur le rapporteur a ce sable. Qu'il en use. »",
    ],
    choices: [{ label: "Écouter le rapporteur", to: "K12j_rapport", big: true }] },

  K12j_rapport: { act: "IV", title: "Une goutte qui attend", place: "guilde", ambiance: "chateau",
    text: [
      "Il se lève sans bruit. Il n'a pas une note. Il parle d'une voix égale, qu'il n'élève jamais, et la salle vide la porte jusqu'au fond.",
      "« Messieurs, je ne vous lirai rien. On vous a beaucoup lu, cet hiver. Je vous montrerai. » Il fait un signe. Deux de ses garçons entrent par la petite porte, en tablier propre, un bandeau de drap noué sur les oreilles. Ils portent à quatre mains une cloche de verre grande comme une ruche, et la posent sur la table, devant le doyen qui dort.",
      "Dessous, la rose. Elle est ouverte à demi, rouge, avec sa goutte au bord d'un pétale. Maître Rouet se penche. Maître Foliot se penche après lui.",
      "« Je l'ai coupée le matin de Pâques. Elle a aujourd'hui l'âge qu'elle avait. On me dit que c'est un sacrilège. Regardez-la bien, et dites-moi lequel de vous, s'il avait une fille dans cet état, refuserait qu'on la traitât comme cette fleur. » Il pose un doigt sur la petite trappe de laiton. « On me dit aussi qu'on ne revient pas. Voici. »",
      "Il ferme la trappe. Sous le verre, la lueur grise s'éteint. La goutte tremble, s'allonge, et tombe. On l'entend toucher le marbre du socle : un petit bruit mat, dans une salle de quarante pas où sept hommes ont cessé de respirer. Un pétale se défait, lentement, et suit la goutte.",
      "Il rouvre la trappe. La lueur revient. Le second pétale, qui commençait à pencher, s'arrête où il est.",
      "« Voilà toute la suspension, messieurs. Une chose qui attend, et qui repart quand on le veut. Je vous demande une chambre, au lieu d'une cloche ; une enfant, au lieu d'une rose ; et un an, pour que les médecins trouvent. Après quoi je ferme la trappe, et Madame Aélis achève de s'éveiller, guérie, avec un an de moins que son âge. On m'objecte un livre. Je réponds par un pétale. »",
      "Maître Rouet applaudit du bout de trois doigts. Maître Cliquet a les yeux brillants. Le sous-maître se rassoit, et boit une gorgée d'eau.",
      { if: DIXIEME, text: "De ta place, derrière lui, tu as vu ce que la table ne voit pas : sa main gauche, sous le bord, qui s'ouvrait et se fermait pendant que la goutte tombait. Il n'aime pas lâcher. Même une rose, même pour convaincre." },
      { if: CACHE, text: "D'en haut, tu as vu le pétale tomber sur le marbre, tout petit, rouge. Personne ne l'a ramassé." },
    ],
    choices: [{ label: "Regarder le fauteuil du milieu", to: "K12j_coudrier_parle", big: true }] },

  K12j_coudrier_parle: { act: "IV", title: "Dans quel ordre", place: "guilde", ambiance: "chateau",
    text: [
      "Le Grand Maître ne se lève pas. Il retourne le sablier, pour son compte, et il regarde la table, un homme après l'autre, avec l'attention d'un maquignon devant une écurie.",
      "« Rouet. Vos bas sont de chez Marcadé : dix-huit écus la paire. Vous en avez six. Je dis cela pour que la compagnie sache ce que pèse, chez vous, une conviction, et combien il en faut pour vous chausser. »",
      "« Balancourt. Faites-moi cette soustraction, vous qui les faites si bien : quarante mille écus, ôtés de l'honneur d'une maison de quatre cents ans. Dites-moi ce qui reste, et à qui. »",
      "« Cliquet. Vous, je ne vous dis rien. Vous êtes jeune, ce qui passe, et honnête, ce qui passe plus vite. Je vous prie seulement de demander à monsieur le rapporteur, tout à l'heure, à quoi sert ce que vous lui limez depuis lundi. »",
      "Sa voix baisse. « Foliot. Votre oncle Évrard a son portrait derrière vous, retourné contre le mur. C'est moi qui ai écrit dessous. Tournez-vous, un jour, et lisez. »",
      "« Lunel dort. Je le réveillerai le dernier. »",
      "Il se tait. Il les regarde tous les six, et l'on voit ses lèvres compter, sans un son, lentement. Maître Foliot compte avec lui, malgré lui. À onze, les lèvres du vieillard s'arrêtent. Le silence qui suit dure le temps exact d'un coup de cloche, et personne, à cette table, ne sait où poser ses mains.",
      "« Quant à vous, Melchior, je ne vous insulte pas. Je vous remercie. Vous êtes le seul ici qui sachiez ce que vous faites, et vous avez eu l'élégance de nous le montrer : vous avez tué un pétale pour gagner une voix. » Il ouvre sa copie. « Le Livre dit, chapitre premier, ligne première : *Le Balancier bat pour tous, et nul ne le tiendra.* Je n'ai pas d'autre rapport. J'ai dit. »",
      "« Un chapitre, dit la voix égale. Sur quarante. Monsieur le Grand Maître a toujours eu le goût des morceaux choisis. »",
      "Le sable blond coule. Il en reste la moitié.",
    ],
    choices: [
      { label: "Regarder maître Cliquet, qui a levé un doigt", hide: { not: V_C }, to: "K12j_cliquet_demande", big: true },
      { label: "Compter ce qui reste de sable", hide: V_C, to: "K12j_seance", big: true },
    ] },

  K12j_cliquet_demande: { act: "IV", title: "À quoi elle sert", place: "guilde", ambiance: "chateau", fx: { sway: { suspension: { cliquet: "contre" } }, ep: ["histoire", 500] },
    text: [
      "Maître Cliquet a levé un doigt, comme à l'école. Il est rouge jusqu'au col. « Monsieur le rapporteur. Je vous dois ma chaîne, et je ne l'oublie pas. Je vous ai limé une pièce. Un coin de bronze, au douzième, avec une rainure d'arrêt. Je voudrais savoir, devant la compagnie, à quoi elle sert. »",
      "Le sous-maître pose son verre. Il sourit à Cliquet, avec affection. « À tenir, mon cher. Une cloche de verre grande comme une chambre a des joints. On cale un joint. »",
      "« En bronze dur ? Au douzième ? » Cliquet s'est levé à demi. C'est l'ouvrier qui parle, et l'ouvrier connaît son métier mieux que le Juré ne connaît sa place. « On cale un joint avec du plomb, monsieur. Un coin au douzième, dressé au marbre, cela bloque une pièce qui a du rappel. Un levier. Vous avez dit ici même : *on lâche, et tout reprend.* Pourquoi faire une cale, si l'on veut pouvoir lâcher ? »",
      "Un temps. La voix égale ne change pas. « Pour ne pas rester un an la main sur une poignée, Cliquet. J'ai trente ans, et d'autres ouvrages. »",
      "« Vous me répondez à côté. » Il l'a dit tout bas, avec une peine d'enfant. Il se rassoit. Il regarde ses mains, où il reste de la limaille de cette pièce-là. Le Grand Maître n'a pas bougé un sourcil ; on jurerait pourtant que le fauteuil de chêne est plus large qu'il y a un instant.",
    ],
    choices: [{ label: "Compter ce qui reste de sable", to: "K12j_seance", big: true }] },

  K12j_seance: { act: "IV", title: "Le temps d'un sablier", backName: "la séance", place: "guilde", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "Il reste un demi-sablier avant que le greffier appelle les voix. La table attend. Maître Rouet examine ses bas, avec moins de plaisir. Maître Foliot refait son compte." },
      { first: true, if: TEMOIN, text: "Tu es au premier banc, à six pas. Le Grand Maître ne t'a pas regardé{e} une fois ; il a seulement posé sa grosse main à plat sur le bord de la table, de ton côté, les doigts écartés. Il attend que tu saches quand." },
      { first: true, if: DIXIEME, text: "Tu es derrière le fauteuil gris, les deux étuis dans les bras. D'ici, tu pourrais toucher l'épaule du doyen, qui dort. Le sous-maître, sans se retourner, tend deux doigts vers le grand étui." },
      { first: true, if: CACHE, text: "Tu es sur ta poutre, à vingt pieds, avec tes papiers contre le ventre et de la poussière de trois siècles dans la gorge. Rien de ce que tu ferais d'ici ne passerait pour discret." },
      { again: true, text: "Le sable blond coule. La table attend qu'on appelle les voix." },
    ],
    choices: [
      { label: "Le lecteur en robe noire fait un pas vers son pupitre", hide: { any: [{ not: { has: "j:tiphaine_guilde" } }, { seen: "K12j_tiphaine" }] }, to: "K12j_tiphaine" },
      { label: "Te lever du banc, tes papiers à la main : il a fermé le poing", hide: { any: [{ not: TEMOIN }, { not: PREUVE }, { seen: "K12j_preuve" }] }, fx: { flag: "j:preuve_montree" }, to: "K12j_preuve" },
      { label: "Lâcher tes papiers du haut de la poutre", hide: { any: [{ not: CACHE }, { not: PREUVE }, { seen: "K12j_preuve" }] }, fx: { flag: "j:preuve_montree" }, to: "K12j_preuve" },
      { label: "Glisser tes papiers parmi les dessins que tu lui passes", hide: { any: [{ not: DIXIEME }, { not: PREUVE }, { seen: "K12j_preuve" }, { seen: "K12j_cale_table" }] }, fx: { flag: ["j:preuve_montree", "j:aubespin_trahi"], regard: { aubespin: "trahi" } }, to: "K12j_preuve" },
      { label: "Lui tendre l'étui plat, au lieu du grand", hide: { any: [{ not: DIXIEME }, { seen: "K12j_cale_table" }, { seen: "K12j_preuve" }] }, fx: { flag: ["j:aubespin_trahi", "j:voix_cliquet", "j:cale_montree"], sway: { suspension: { cliquet: "contre" } }, regard: { aubespin: "trahi" }, ep: ["histoire", 800] }, to: "K12j_cale_table" },
      { label: "Faire demander le journal du sceau, à la page du quinze", hide: { any: [{ not: { has: "j:lu_sceau" } }, { not: { any: [TEMOIN, { has: "j:tiphaine_guilde" }] } }, { seen: "K12j_journal" }] }, to: "K12j_journal" },
      { label: "Te pencher vers le doyen, quand le rapporteur aura fini", hide: { any: [{ not: { has: "j:lunel_promis" } }, CACHE, V_L] }, fx: { sway: { suspension: { lunel: "contre" } }, flag: "j:voix_lunel", ep: ["perso", 500] }, to: "K12j_lunel_dernier" },
      { label: "Laisser appeler les voix", hide: { not: TROIS_NON }, fx: { sway: { suspension: { foliot: "contre" } } }, to: "K12j_vote", big: true },
      { label: "Laisser appeler les voix", hide: TROIS_NON, to: "K12j_vote", big: true },
    ] },

  K12j_tiphaine: { act: "IV", title: "Ce qui vient avant, ce qui vient après", place: "guilde", ambiance: "chateau", fx: { flag: "j:foliot_livre", ep: ["histoire", 800] },
    text: [
      "« Un chapitre sur quarante », répète le Grand Maître, comme on goûte un vin. « Monsieur le rapporteur a raison. Je cite mal. Lecteur : le reste. »",
      "Le lecteur en robe noire pose les mains sur le pupitre vide. Il ferme les yeux. Et la voix qui sort du capuchon est claire, posée, sans une hésitation, une voix de chœur qui n'a jamais parlé dans une salle d'hommes.",
      "« *Chapitre septième. Des Hoquets. Quand la barre aura été retenue le temps d'un souffle, ce souffle sera dû, et la cloche le rendra en son temps, non pas au nôtre.* »",
      "« *Chapitre huitième. De la Sueur. Ce que la Tour rend alors à sa pierre est le temps que les vivants n'ont pas eu. Chaque souffle retenu sous la cloche rend son grain. Que nul ne le ramasse : car celui qui ramasse voudra qu'on retienne.* »",
      "Maître Foliot a cessé de compter. Maître Rouet a relevé la tête. Le sous-maître regarde le capuchon, pour la première fois de la séance, avec une attention entière.",
      "« *Chapitre neuvième. Des Cuves. Les Fondateurs brisèrent les douze, et en jetèrent le verre au puits...* »",
      "« Il suffit. » C'est maître Balancourt, debout, jaune. « Je demande qui est ce lecteur. Je demande son brevet. La compagnie n'entend, portes closes, que ses membres et ses officiers ! »",
      "« Mon lecteur n'a pas de livre, dit le Grand Maître. Vous l'avez remarqué. Il sait les quarante. Il vous les dira dans l'ordre que vous voudrez, en commençant par où il vous plaira, et vous pourrez suivre sur ma copie, puis sur celle de l'abbaye quand vous l'aurez fait revenir d'où vous l'avez envoyée, par une lettre du quinze que je n'ai pas signée. » Il se tourne à demi. « Otez cela, mon enfant. Il fait chaud. »",
    ],
    choices: [{ label: "Regarder tomber le capuchon", to: "K12j_tiphaine_voile", big: true }] },

  K12j_tiphaine_voile: { act: "IV", title: "Le troisième article", place: "guilde", ambiance: "chateau",
    text: [
      "Le capuchon tombe. Dessous, il y a des cheveux coupés au couteau, des yeux noisette, et une figure de dix-neuf ans qui regarde sept Jurés comme elle regarderait sept platines à redresser.",
      "« Tiphaine, dit-elle. Ci-devant novice de Sainte-Aure, apprentie de maître Gobin. J'ai relié le Livre quatre ans. Je l'ai lu onze nuits. Demandez. »",
      "Il y a un bruit de chaises. Maître Rouet a la bouche ouverte. Maître Balancourt cherche l'article, des deux mains, dans son portefeuille. « Le troisième ! Le troisième article ! Aucune femme ne peut... »",
      "« ...*être reçue apprentie, compagnon ni maître*, achève le Grand Maître. Je le sais, je l'ai opposé moi-même à cette personne il y a quatre ans, et j'en ai honte depuis hier. Elle n'est ni apprentie, ni compagnon, ni maître. Elle est lecteur. Trouvez-moi l'article contre les lecteurs, Balancourt. Prenez votre temps : vous avez celui de ce sablier. »",
      "Maître Foliot lève un doigt. Sa voix est mince et prudente. « Mademoiselle. Le chapitre vingt-troisième. » Elle le récite. Il suit sur la copie, du bout de l'ongle. À la fin, il repose l'ongle. « C'est exact au mot. » Il regarde derrière lui, pour la première fois de sa vie peut-être, vers un cadre retourné contre un mur. « Mon oncle disait que personne ne le lisait en entier, et que c'était heureux pour ceux qui gouvernent. »",
      { if: TEMOIN, text: "Tiphaine a trouvé tes yeux, au premier banc. Elle ne sourit pas. Elle remet ses mains l'une dans l'autre, et tu vois que le pouce entaillé ne tremble pas." },
      { if: CACHE, with: "josquin", text: "Derrière toi, sur la poutre, Josquin a laissé échapper un souffle. « Elle les sait, chuchote-t-il. Tous. J'en ai copié un en trois semaines. »" },
    ],
    choices: [{ back: "K12j_seance" }] },

  K12j_preuve: { act: "IV", title: "Contre une date", place: "guilde", ambiance: "chateau", fx: { sway: { suspension: { rouet: "contre", balancourt: "abstention" } }, flag: "j:voix_rouet", ep: ["histoire", 1000] },
    text: [
      { if: TEMOIN, text: "La grosse main s'est fermée. Tu te lèves. Tu fais six pas, sous sept regards, et tu poses sur la table, devant le fauteuil de chêne, ce que tu portes contre la peau depuis un quai." },
      { if: TEMOIN, text: "« Mon témoin n'a pas la parole, dit le Grand Maître. Ses papiers l'ont. » Il les pousse au milieu du fer à cheval, du plat de la main." },
      { if: CACHE, text: "Tu ouvres les doigts. Les papiers tombent de vingt pieds, en tournant, dans le jour des hautes fenêtres. L'un d'eux se pose sur la carafe du sous-maître. Sept figures se lèvent vers la charpente. Tu es à plat sur ta poutre, dans l'ombre, et le moineau s'envole à ta place." },
      { if: CACHE, text: "« Il pleut des preuves, dit le Grand Maître sans s'émouvoir. Le toit de cette maison a toujours fui du bon côté. Greffier, ramassez, et lisez. »" },
      { if: DIXIEME, text: "Deux doigts gris se tendent vers le grand étui. Tu y prends le dessin numéro trois, et tu roules dedans ce que tu portes contre la peau. Il le déploie sur la table sans regarder, d'un geste de l'habitude. Ce qui tombe sur le chêne, entre la carafe et la rose, il ne l'a pas dessiné." },
      { if: DIXIEME, text: "Il ne se retourne pas. Sa nuque n'a pas bougé d'une ligne. Mais sa main gauche, sous la table, s'est ouverte toute grande, comme celle d'un homme qui vient de lâcher quelque chose qu'il tenait. « Ceci n'est pas de mon portefeuille », dit-il. « C'est le défaut des portefeuilles », dit le Grand Maître, qui a déjà la main dessus." },
      { if: { has: "j:lettre_oderic" }, text: "Le greffier lit la lettre, de sa voix de bénédicité. *À monsieur Gaucelin, intendant. Vous ferez tendre la grande salle pour le vingt-deux. Un dais, quarante places. Messieurs les barons y pourvoiront au gouvernement du royaume durant l'empêchement de la Reine.* Elle est datée du dix-huit, et scellée d'un cheval." },
      { if: { all: [{ has: "j:epreuve_sceau" }, { not: { has: "j:lettre_oderic" } }] }, text: "C'est une épreuve de cire rouge, large comme la paume. Le greffier la tourne vers la fenêtre, et lit la légende à voix haute, lettre à lettre : *ODERIC, PAR LA GRÂCE DE DIEU, RÉGENT D'AURIME.* « Gravé par Marteau, des Monnaies, dit le Grand Maître. Livré le douze. Neuf jours avant qu'il y ait une régence. »" },
      { if: { all: [{ item: "memoire_graveur" }, { not: { has: "j:preuve_oderic" } }] }, text: "C'est un papier plié en quatre, jauni, cassant, qui a l'air d'avoir cent ans. Le greffier le déplie avec deux doigts. *Mémoire de Thomassin, graveur. Un sceau d'argent, légende : ODERIC RÉGENT D'AURIME. Livré le 12 juin 541.* Personne ne demande pourquoi une facture de la semaine passée a la couleur d'un parchemin. On a d'autres étonnements." },
      "Le silence qui suit est d'une autre qualité que les précédents. Ce sont des hommes d'affaires qui se taisent, et ils se taisent pour compter.",
      "Maître Rouet s'est tassé dans son fauteuil. « L'empêchement », murmure-t-il. Il a trois maisons sur la place du Palais, louées à la Maison de la Reine, et l'on voit passer les trois maisons sur sa figure, l'une après l'autre, avec leurs loyers. « On m'avait présenté une expérience de physique. »",
      "Maître Balancourt est devenu de la couleur de ses registres. Il a compris, avant tous les autres, quel jour le duc a payé, et pourquoi. Il se rassoit. Il range sa plume. « Je m'abstiendrai, dit-il d'une voix sans timbre. Qu'on l'inscrive au journal. »",
      "Le sous-maître boit une gorgée d'eau. « Je fabrique des horloges, messieurs. Je ne tends pas de dais. Ce que Monseigneur de Hautgué espère de mon ouvrage le regarde. » Il repose le verre, exactement dans son rond. « On espère toujours beaucoup des horlogers. »",
    ],
    choices: [{ back: "K12j_seance" }] },

  K12j_cale_table: { act: "IV", title: "L'étui plat", place: "guilde", ambiance: "chateau",
    text: [
      "Deux doigts gris se tendent, sans que la tête tourne. Tu y mets l'étui plat.",
      "Il l'ouvre comme il aurait ouvert l'autre, par habitude, sur la table, les yeux sur maître Foliot à qui il allait répondre. Le couvercle bascule. Dans le velours, il y a un bloc de bronze, long comme la main, épais d'un pouce à un bout et d'une ligne à l'autre, avec une rainure. Il brille, sur le chêne noir, entre la carafe et la rose.",
      "Maître Cliquet s'est levé. « C'est la mienne. » Il la reconnaît comme on reconnaît son enfant chez des étrangers. « C'est ma cale. Je l'ai finie hier soir. Monsieur, vous l'avez apportée ici ? En séance ? »",
      "« Mon apprenti s'est trompé d'étui. » La voix égale n'a pas un pli. Il referme le couvercle. Mais le Grand Maître a déjà parlé, du fond de son fauteuil, à la table entière : « Un coin au douzième, messieurs, dressé au marbre. Vous êtes tous du métier, sauf Balancourt. Dites-moi ce qu'on fait d'un coin, et sous quoi on le chasse, quand on a promis de lâcher. »",
      "Cliquet est resté debout. Il regarde l'étui, puis l'homme à qui il doit sa chaîne. « On bloque, dit-il. On bloque une pièce qui a du rappel. » Il se rassoit très lentement. « Vous m'aviez dit : *on lâche, et tout reprend.* »",
      "Alors seulement le sous-maître se retourne. Il te regarde, de l'œil gris, puis de l'œil brun, sans colère, avec l'intérêt d'un homme qui vient de perdre une pièce aux échecs et qui admire le coup. « Je vous avais dit que j'aimais savoir qui j'avais dans le dos. Je le sais. Sortez de derrière ce fauteuil : vous n'êtes plus à moi, et vous n'avez jamais été à personne. »",
      "Tu fais le tour de la table. Le Grand Maître te montre le premier banc, du pouce. Tu t'y assois, les mains vides. Monsieur Fourchon, à la petite porte, a la figure d'un homme dont on vient de fausser un bordereau.",
    ],
    choices: [{ back: "K12j_seance" }] },

  K12j_journal: { act: "IV", title: "Sous le nez de toute la maison", place: "guilde", ambiance: "chateau", fx: { sway: { suspension: { balancourt: "abstention" } }, ep: ["histoire", 500] },
    text: [
      { if: TEMOIN, text: "Tu dis un mot, bas, au Grand Maître, qui penche l'oreille sans tourner la tête. Il a un grognement de plaisir." },
      { if: { not: TEMOIN }, text: "Tiphaine se penche à l'oreille du Grand Maître. Tu lui as dit, hier, ce qu'il y avait sur une page que personne ne lit. Il a un grognement de plaisir." },
      "« Greffier. Le journal du sceau. Il est public pour les Jurés, et nous sommes sept à ne l'avoir pas ouvert de l'année. »",
      "On l'apporte, avec sa chaîne. Le greffier lit, à la date du quinze : « *Lettre aux Dames de Sainte-Aure. Première clef : Balancourt. Seconde clef : Aubespin.* »",
      "« Une lettre de ma maison, dit le Grand Maître, sous mon sceau, pour faire venir mon Livre, signée de mon nom. Scellée par deux clefs dont aucune n'est la mienne. » Il regarde le trésorier. « Vous aviez le choix entre un faussaire et un imbécile, Balancourt. Je vous connais : vous êtes honnête. Reste l'autre. »",
      "Maître Balancourt s'est levé. Il est très droit. « Tout ce que j'ai fait est au journal. Je n'ai jamais rien fait qui n'y soit. » Sa voix se casse sur le dernier mot. « Je m'abstiendrai. Qu'on l'inscrive, à sa date, avec mon nom. »",
      "Le sous-maître n'a pas levé les yeux de son verre. « Le Livre venait pour cette séance. Il est resté à l'abbaye : les Dames ont eu des scrupules. Monsieur le Grand Maître s'en plaint, alors qu'il l'a fait réciter par cœur. Je ne vois pas le dommage. »",
    ],
    choices: [{ back: "K12j_seance" }] },

  K12j_lunel_dernier: { act: "IV", title: "Le dernier qui a parlé", place: "guilde", ambiance: "chateau",
    text: [
      "Le règlement veut que le rapporteur parle le dernier. Il l'a fait : il s'est penché vers le doyen, il lui a touché la manche, il a dit, de sa voix douce, « une chambre, maître, pour la petite princesse », et le vieillard a souri en dormant.",
      { if: { all: [DIXIEME, { not: { has: "j:aubespin_trahi" } }] }, text: "Tu es à un pas. Tu avances d'un demi. Tu te baisses, comme pour ramasser un dessin, et tu dis, dans l'oreille droite, la bonne : « 481. Rue des Gantiers. Trois psaumes. »" },
      { if: { any: [TEMOIN, { has: "j:aubespin_trahi" }] }, text: "Tu te lèves du banc. Personne n'y prend garde : on te croit venu{e} reprendre un papier. Tu passes derrière le doyen, et tu dis, dans l'oreille droite, la bonne : « 481. Rue des Gantiers. Trois psaumes. »" },
      "L'œil bleu s'ouvre. Il te cherche, te trouve, et quelque chose y monte, de très loin, comme une barque sort du brouillard.",
      "« Vous m'aviez promis, dit maître Lunel à voix haute, dans le silence. Vous aviez promis d'être le dernier. » Il regarde autour de lui, étonné de voir tant de monde. « J'avais une femme, messieurs. Il était à moitié venu. » Sa main cherche la tienne, la trouve, et la garde. « Je m'en souviens. C'est le dernier qui a parlé. »",
      "Le sous-maître a tourné la tête vers toi, d'un quart de tour. C'est la première fois qu'on lui prend un vieillard.",
    ],
    choices: [{ back: "K12j_seance" }] },

  K12j_vote: { act: "IV", title: "À main levée", place: "guilde", ambiance: "chateau", council: { motion: "suspension", to: "K12j_resultat", label: "Écouter appeler les voix" },
    text: [
      "Le dernier grain blond est tombé. Le Grand Maître couche le sablier sur le côté. « Greffier. »",
      "Le petit homme se lève, son registre ouvert. Dehors, dans la cour, on n'entend rien : les horloges y sont muettes par ordonnance, et les apprentis, aux lucarnes du dortoir, retiennent jusqu'à leur souffle.",
      { after: "j:placard_vote", text: "Plus loin, derrière le grand portail, trois cents personnes sont assises sur le pavé. Elles ne savent pas qu'on en est aux voix. Elles savent seulement que personne n'est encore sorti." },
      "« *Les sept opineront à main levée, dans l'ordre des sièges, le rapporteur le dernier.* Monsieur le Grand Maître. »",
    ],
    choices: [] },

  K12j_resultat: { act: "IV", title: "La chose votée", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:vote_adopte", text: "Le greffier compte deux fois, par conscience, et annonce le nombre de la voix dont il annoncerait le prix du blé. La suspension de la Chambre haute est permise. Maître Rouet s'éponge. Maître Foliot regarde ses mains, qui se sont levées avec le nombre, et les remet à plat." },
      { after: "j:vote_adopte", text: "Le sous-maître incline la tête, d'un pouce. « Je remercie la compagnie. Elle a voté une bonne action. » Il ne triomphe pas. Il a l'air d'un homme à qui l'on rend une chose qui était à lui." },
      { after: "j:vote_rejete", text: "Le greffier compte deux fois, et il lui faut une troisième, parce que le nombre n'est pas celui qu'il avait écrit d'avance au crayon. La suspension de la Chambre haute est refusée. Dans le silence, on entend maître Rouet respirer." },
      { after: "j:vote_rejete", text: "Maître Foliot regarde sa propre main, levée contre, avec un étonnement sincère. Il s'est rangé au nombre, comme toute sa vie ; le nombre avait changé de côté pendant qu'il comptait. Derrière lui, un cadre est retourné contre un mur." },
      { after: "j:vote_rejete", text: "Tu respires. Sept hommes viennent de défendre ce que tu es venu{e} empêcher d'un pays où cela a eu lieu. Tu regardes le sous-maître, pour voir la figure d'un homme battu." },
      { after: "j:vote_rejete", text: "Il n'a pas cette figure. Il a fini son verre d'eau." },
      "« Une chose encore, messieurs, pour le registre. » Il a tiré de son habit un pli, qu'il ouvre et pose à plat. On y voit, en bas, une petite cire verte : le sceau privé de la Reine, celui des affaires de sa maison.",
      { after: "j:vote_adopte", text: "« Sa Majesté m'a commis le douze juin, de sa main, à la garde de la Chambre haute et de ce qui en dépend, pour le jour du Grand Midi. J'avais donc sa commission. J'ai désormais votre permission. Je n'en demandais pas tant : l'une des deux suffisait. »" },
      { after: "j:vote_rejete", text: "« Sa Majesté m'a commis le douze juin, de sa main, à la garde de la Chambre haute et de ce qui en dépend, pour le jour du Grand Midi. Le Conseil me refuse sa permission. Je m'incline : je me passerai de la permission. Je garderai la commission. La Tour est au Roi avant d'être aux horlogers ; on me l'a assez répété dans cette salle, quand il s'agissait de refuser de l'argent. »" },
      { after: "monde:reine_renonce", text: "Tu regardes la cire verte. Tu sais, toi, ce que la femme qui l'a posée a décidé cet après-midi, dans une chambre sans ombres, et qu'elle le lui dira ce soir. Il tient un papier du douze. Elle a changé d'avis le vingt. Entre les deux, il y a un homme qui n'aime pas lâcher." },
    ],
    choices: [{ label: "Regarder le fauteuil du milieu", to: "K12j_chaise", big: true }] },

  K12j_chaise: { act: "IV", title: "Le fauteuil de chêne", place: "guilde", ambiance: "chateau",
    text: [
      "Le Grand Maître se lève. Il le fait d'un seul coup, comme se lève un homme de vingt ans, et le fauteuil de chêne part en arrière, bascule, et tombe sur le dos, les quatre pieds en l'air, avec un fracas qui roule sous la charpente.",
      "Personne ne le ramasse. Maître Lunel s'est éveillé en sursaut. Le greffier a la plume en l'air.",
      { after: "j:vote_adopte", text: "« Vous avez voté. C'est votre droit, et je vous en fais mon compliment : vous êtes six à avoir vendu pour quarante mille écus ce qu'on vous avait confié pour rien. » Sa voix n'est pas forte. Elle remplit la salle. « Moi, j'ai une clef que le Conseil ne peut pas m'ôter. Elle est au Grand Maître depuis les Fondateurs, et elle ouvre la porte de fer. Demain, à midi, quand monsieur le sous-maître posera la main sur ce levier, il trouvera la mienne dessus. »" },
      { after: "j:vote_rejete", text: "« Vous descendrez donc sans la Guilde. » Sa voix n'est pas forte. Elle remplit la salle. « Soit. Vous y descendrez sans elle, et vous m'y trouverez. J'ai une clef que personne ne peut m'ôter : elle est au Grand Maître depuis les Fondateurs, et elle ouvre la porte de fer. Demain, à midi, quand vous poserez la main sur ce levier, la mienne sera dessus. »" },
      "« Je descendrai sans la Guilde, dit le sous-maître en repliant son papier. Elle m'a rarement été utile. » Il se lève à son tour, salue la table, salue le fauteuil renversé, et sort par la petite porte de l'estrade. Ses deux garçons emportent la rose, à quatre mains, avec ses deux pétales en moins.",
      "Les autres s'en vont comme on quitte une maison où l'on a cassé quelque chose. Maître Rouet passe le premier, pour un homme de son poids. Maître Balancourt serre son portefeuille. Maître Cliquet s'arrête devant le fauteuil tombé, se baisse à demi pour le relever, et n'ose pas. Maître Foliot sort le dernier, à reculons presque, en regardant un cadre.",
      "Le Grand Maître est resté debout, seul, derrière la table, les poings sur le chêne. Il regarde la maquette de la Tour, au milieu de la nef : la petite barre de laiton y monte et y descend, d'un battement lent, pour personne.",
    ],
    choices: [{ label: "Sortir de la grande salle", to: "K12j_sortie", big: true }] },

  K12j_sortie: { act: "IV", title: "Ceux qui l'auront votée", place: "guilde", ambiance: "chateau",
    text: [
      { if: { all: [TEMOIN, { not: { has: "j:aubespin_trahi" } }] }, text: "Il passe devant ton banc sans s'arrêter. « Chez moi, dit-il entre ses dents. À la brune. Pas avant : il faut d'abord que je sois en colère tout seul. » Il traverse la cour, tête nue, à grands pas inégaux, et les hommes de cuivre s'écartent." },
      { if: { has: "j:aubespin_trahi" }, text: "Le Grand Maître passe devant ton banc. Il s'arrête, cette fois. Il te regarde les mains. « Vous étiez dans son dos, et vous avez frappé de face. Cela se paie. Il vous fera chercher avant la nuit. Chez moi, à la brune : ma porte est la seule de la colline qu'il n'ouvre pas. »" },
      { if: { all: [DIXIEME, { not: { has: "j:aubespin_trahi" } }] }, text: "Sous l'arcade, le sous-maître reprend ses étuis lui-même, et les passe à Fourchon. « Vous avez été très bien. Vous n'avez pas toussé. » Il te considère un instant. « Demain, onze heures, à la porte au papillon. Dormez : j'ai besoin, derrière moi, de mains reposées. » Il s'éloigne. Tu as tenu pendant une heure, contre ta hanche, la pièce qui arrêtera une ville, et tu l'as rendue." },
      { if: CACHE, text: "Tu rampes à reculons sur la poutre, jusqu'à la passerelle, jusqu'à la trappe. Dans le grenier du réfectoire, tu te relèves, gris{e} de poussière, avec le dessin du chêne imprimé sur une joue." },
      { if: { all: [CACHE, JOSQ] }, text: "Josquin tire son couteau, retourne sur l'entrait, et grave. Il revient. « *J. 541.* Je l'ai mise. Quoi qu'il arrive demain, elle valait la peine. »" },
      { after: "j:tiphaine_guilde", text: "Dans la cour, Tiphaine a remis son capuchon. Les apprentis des lucarnes la regardent passer en silence, et l'un d'eux, tout en haut, ôte son bonnet." },
      { if: { all: [{ has: "j:placard_vote" }, { has: "j:vote_rejete" }] }, text: "On a rouvert le grand portail. Les trois cents se lèvent, sans un cri, et s'écartent pour laisser passer les Jurés. Maître Rouet traverse cela comme on traverse un gué. Une laveuse demande : « C'est fait ? » Quelqu'un répond, on ne sait qui : « C'est refusé. » Alors, de proche en proche, les gens ôtent leur bonnet, comme à l'église, et s'en vont dîner." },
      { if: { all: [{ has: "j:placard_vote" }, { has: "j:vote_adopte" }] }, text: "On a rouvert le grand portail. Les trois cents se lèvent, sans un cri. La cloche maigre sonne, à la volée, pour annoncer la chose faite. Personne ne dit rien. Ils regardent passer les Jurés, un par un, de très près, comme on apprend des figures par cœur. Maître Rouet n'a jamais marché aussi vite." },
      { if: { all: [{ not: { has: "j:placard_vote" } }, { has: "j:vote_adopte" }] }, text: "La cloche maigre sonne, à la volée, pour annoncer la chose faite. En bas, dans la ville, on l'entend à peine : on dresse les tréteaux de la fête." },
      "L'ombre du cadran solaire s'est allongée jusqu'au bord du marbre. Le soir vient sur la colline.",
    ],
    choices: [{ label: "T'asseoir au pied du cadran, et ouvrir le Cahier", to: "M12", big: true }] },
});

module.exports = { passages: P, extras: {} };
