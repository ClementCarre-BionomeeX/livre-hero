// Le Douzième Coup · dénouement « partage » (both said the word : the stroke falls on its edge. Each one goes out in the
// hour he named : the one who passes in 541, with the city, which goes home ; the one who stays in 601, where the
// first circle is left empty and the later rings wake). Part A : the stroke, each one alone (Cage, High Chamber, cellar
// of 541 without the other ; cellar of 601 without anyone but the old Aubespin, the empty Tower), and the first page
// exchanged at the hour-stone of the ruelle des Sonneurs (`Fp_cahier`). Flags : `monde:p_date_cage`, `monde:p_dictee`
// (the old man's line for the young one), `monde:p_recette` (the remedy sent through the Cahier), `r:p_cuiller`,
// `r:p_banc`. Part B (`fin_partage_b.js`) : the two squares, the evening page, the roads.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var LACHE = { has: "monde:coudrier_lache" };
var EVEILLEE = { has: "monde:reine_eveillee" };
var REMEDE = { has: "monde:aelis_remede" };
var SAIT = { any: [{ has: "monde:aelis_remede" }, { has: "monde:anthelme_sait" }, { has: "monde:aelis_ecorce" }] };
var REFUSE = { has: "monde:jeune_refuse" };
var NOM = { has: "monde:nom_cage" };
var TENU = { has: "monde:escalier_tenu" };

Object.assign(P, {
  F_partage: { act: "V", title: "Sur la tranche", place: "tour", ambiance: "chateau",
    text: [
      "Il tombe des deux côtés.",
      "La pièce avait deux faces, et deux bouches en ont nommé chacune une. Elle est retombée sur la tranche. Elle y reste.",
      { if: J, text: "Tu l'as dit. Le douzième coup sort de la Cage par les huit abat-sons, large, doré, et la ville lui répond : « ...ze ! » puis, à pleine gorge, « Douze ! » Les pigeons du cadran partent ensemble. C'est midi, le vingt et un juin 541." },
      { if: J, text: "Mais il y a eu autre chose dans le coup. Tu l'as senti par les genoux : une seconde cloche sous la première, la même, très bas, comme un écho qui viendrait du fond d'un puits et qui aurait mis soixante ans à remonter. Elle a sonné en même temps que la tienne. Elle a sonné ailleurs." },
      { if: J, text: "Tu regardes le fil. Il pend du déclic, mince, tranquille. Tu poses la paume dessus. Il est froid. Tu dis : « T'es en bas ? » Le laiton garde ta question. Il porte encore un reste de note, qui s'éteint sous ta main, et plus aucune voix." },
      { if: R, text: "Tu l'as dit. Le coup, qui venait par la voûte, se pose dans ta cave à toi : celle des douze panses de verre et de la herse. La vague grise tremble, à une semelle de ton sabot. Elle se retire. Le puits la ravale, cercle après cercle, jusqu'à la pierre noire, et quelque chose, au fond, se remet à aller d'un bord à l'autre." },
      { if: R, text: "Mais il y a eu autre chose dans le coup. Tu l'as reçu par le fil, dans le bras : une seconde cloche dans la première, la même, plus claire, comme un écho qui partirait vers le haut et qui emporterait du monde. Par l'œil de la voûte, tu attends le cri de quarante mille personnes. Il vient un bruit d'ailes, puis le vent." },
      { if: R, text: "Tu te retournes. La salle est grande. Il y avait là, le temps d'une note, neuf garçons en tablier vert, un enfant au maillet, un homme de trente ans, un vieillard à moustache. Il y a douze cuves, et de la poussière qui retombe à la place de chacun." },
      "Vous l'avez dit tous les deux. Chacun est sorti par la porte qu'il ouvrait. Aucun Livre n'avait écrit ce cas, et vous venez de l'écrire : il y a deux midis, à soixante ans l'un de l'autre, et une seule personne dans chacun qui le sache.",
    ],
    choices: [
      { label: "Te relever, sous la cloche", hide: R, to: "Fpj_cage", big: true },
      { label: "Te retourner vers la salle", hide: J, to: "Fpr_cave", big: true },
    ] },

  // ===== the one who passes : 541, with a city, without the other
  Fpj_cage: { act: "V", title: "La moitié d'un coup", place: "tour", ambiance: "chateau",
    text: [
      "La Patiente se balance au-dessus de toi, de moins en moins loin. Tu as les paumes brûlées par le chanvre, de la sciure aux genoux, et dans la bouche un goût de cuivre.",
      "Tu te penches entre deux abat-sons. La place bouge. Cinq mille têtes se sont remises à tourner, des chapeaux volent, un tambour repart à contretemps. La fontaine des Jurés a retrouvé son fil d'eau. Sur les tréteaux, un Temps en robe grise achève son geste et salue. Personne, en bas, ne sait qu'il vient de se passer quelque chose : pour eux, onze a été suivi de douze, comme tous les ans.",
      { if: { secret: "j_rester" }, text: "Tu avais voulu rester. Tu l'avais caché neuf jours, jusque dans le Cahier. Te voilà servi{e} : tu restes. Le mot t'a pris au mot. Tu cherches en toi la joie que tu t'étais promise, et tu trouves d'abord un compte : combien de marches il y a jusqu'au levier, et qui tu y trouveras." },
      { if: { all: [{ secret: "j_efface" }, { not: { has: "j:efface_leve" } }] }, text: "Un vieil homme t'avait dit que ton mot effacerait la main qui tenait le levier. Tu l'as dit quand même. Tu as dans les genoux le souvenir d'une seconde cloche, et tu t'y accroches comme à une rampe : ce qui a sonné en bas, quelqu'un l'a fait sonner." },
      "Tu regardes le banc des sonneurs. Quarante noms, et *Thibaut, 481.*",
      { if: NOM, text: "Dessous, le tien, de ce matin, avec sa sciure encore claire." },
    ],
    choices: [
      { label: "Tailler la date sous les noms", hide: { has: "monde:p_date_cage" }, to: "Fpj_banc" },
      { label: "Descendre", to: "Fpj_chambre", big: true },
    ] },

  Fpj_banc: { act: "V", title: "Ce qu'on écrit pour quelqu'un qui montera", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: NOM }, text: "Tu tailles ton nom, en lettres droites, sous celui de Thibaut." },
      "Tu creuses la date : *541.* Le chêne est tendre. La sciure tombe sur tes genoux.",
      "Puis tu penses à une chose. Ce banc sera encore là dans soixante ans. Ici, dans la ville qui dîne, il aura vu passer des sonneurs. Ailleurs, dans l'autre midi, il n'aura vu personne ; et il se peut que quelqu'un y monte, un jour de juin, des sabots à la main, pour voir d'où est parti le coup.",
      "Tu ignores si le bois passe d'un midi à l'autre. L'encre passait bien.",
      "Tu ajoutes, sous la date, en petites capitales, comme {autre} écrit : *J'Y SUIS.* C'est ce que tu as répondu dans le fil. C'est tout ce que tu as à dire, et cela tient en trois mots, ce qui plairait à quelqu'un qui compte l'encre.",
    ],
    choices: [{ label: "Descendre", fx: { flag: "monde:p_date_cage" }, to: "Fpj_chambre", big: true }] },

  Fpj_chambre: { act: "V", title: "La Chambre haute, à midi passé", place: "tour", ambiance: "chateau",
    text: [
      "Vingt échelons. Le palier. La porte de chêne.",
      { if: EVEILLEE, text: "Elle est ouverte. La Reine est à la croisée, l'enfant sur la hanche, et elle regarde la place remuer. Elle se retourne à ton pas. « Il a sonné. Vous aviez dit qu'il sonnerait, et qu'ensuite ce serait à moi. » Elle voit tes mains. « Asseyez-vous. Vous saignez sur mon carreau, ce qui m'est égal, et vous tenez à peine debout, ce qui ne l'est pas. »" },
      { if: { not: EVEILLEE }, text: "Le verrou joue, du dedans. La Reine est sur le seuil, en blanc, l'enfant sur la hanche. « Où est maître Aubespin ? Il avait dit : au douzième, tout s'arrête dans cette chambre. Rien ne s'est arrêté. » Tu le lui dis, debout, sans façon douce : tout s'est arrêté, Madame, la ville entière, pendant un coup de cloche ; et l'on vient de le rendre." },
      { if: { not: EVEILLEE }, text: "Elle écoute. Elle regarde par la baie la place qui danse. Il lui faut croire, sur ta parole et sur tes paumes, à soixante années dont il ne reste pas une ride à personne. Elle met du temps. Puis : « Vous l'avez vue, cette ville prise ? — Je l'ai traversée. — Alors vous me la raconterez, tous les jours, jusqu'à ce que j'aie cessé d'avoir envie de recommencer. »" },
      { if: REMEDE, text: "Aélis ouvre le poing. La fiole de grès y est. « J'ai ça. Ça sent mauvais. — Ça guérit. » La Reine regarde la fiole, puis toi. « D'où vient-elle ? » Tu dis : de quelqu'un qui me l'a fait passer entre deux pages. Elle ne comprend pas. Elle n'a pas besoin de comprendre pour déboucher." },
      { if: { all: [{ not: REMEDE }, SAIT] }, text: "« Et ceci ? » Elle n'a pas besoin de montrer l'enfant. Tu dis que cela se guérit. Qu'il y a un nom, une écorce, une dose ; que tu les as, écrits d'une main qui compte l'encre ; et que maître Anthelme les aura avant ce soir. La Reine s'assoit sur le petit lit blanc, d'un coup." },
      { if: { not: SAIT }, text: "« Et ceci ? » Elle n'a pas besoin de montrer l'enfant. Tu ouvres la bouche, et tu t'aperçois que tu n'as rien. Le remède existe. Il a un nom, que quelqu'un savait, à trois cent soixante marches et soixante ans d'ici. « Je vais le demander, dis-tu. Il y a une borne, dans la ruelle. Donnez-moi jusqu'à ce soir. » La Reine te regarde comme on regarde un médecin qui parle de consulter une pierre. Elle a essayé pire." },
      { if: { has: "j:aelis_adieu" }, text: "« Je l'ai entendu, dit Aélis. Avec mes oreilles. Tu as sonné fort. » Elle te regarde mieux. « Tu as perdu quelqu'un. » Tu dis que tu l'ignores encore. Elle hoche la tête, gravement : elle sait ce que c'est, d'attendre qu'on vous dise." },
    ],
    choices: [{ label: "Descendre la vis", to: "Fpj_vis", big: true }] },

  Fpj_vis: { act: "V", title: "Trois cent soixante marches, à compter", place: "tour", ambiance: "chateau",
    text: [
      "Tu descends. Aux meurtrières passent une hirondelle, un bout de nuage, la fumée d'une rôtisserie.",
      "Au second palier, Baudouin est debout, deux boulettes de cire dans la paume. « Elle a sonné douze. Le maître avait dit qu'après onze il y aurait un grand silence. » Tu lui dis qu'il y en a eu un, et qu'il était dedans. Il fronce le front. Il te suit, à trois marches.",
      "Tu comptes. Tu n'avais jamais compté en descendant. Deux cents. Deux cent quarante. À chaque tournant, tu attends un bruit de sabots, une voix rauque qui dirait ton nom de travers. La vis rend ton pas, celui de Baudouin, et la fête, de loin, par les jours.",
      "Au tournant, la niche. Les deux marques de ce matin y sont, humides : ton dos, et plus bas celui d'un vieil homme. Il y en avait une troisième, à l'entrée, large comme une main, noire. Tu cherches. La pierre est propre.",
      "Tu descends les quatre-vingts dernières plus vite que tu ne voudrais.",
    ],
    choices: [{ label: "Entrer dans la Chambre basse", to: "Fpj_cave", big: true }] },

  Fpj_cave: { act: "V", title: "La Chambre basse, où il manque quelqu'un", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Ils sont tous là, et ils remuent. Neuf garçons en tablier vert s'ôtent la cire des oreilles et se regardent. Un enfant ramasse un coin de bronze, par terre, et le tourne entre ses doigts. Le Grand Maître est debout devant le levier, qui est en haut. L'homme de trente ans regarde ses mains." },
      { first: true, text: "Tu cherches. Tu fais le tour de la salle des yeux, berceau par berceau : douze berceaux de chêne, vides, qui attendaient des cuves. Sur le dixième, ce matin, il y avait un vieillard assis, une canne entre les genoux. Le berceau est nu. À la barre, il y avait une main noire de charbon." },
      { first: true, text: "« Où est... » Tu t'arrêtes. Personne ici ne sait de qui tu parles. Ils étaient pris. Ils n'ont vu ni le vieillard, ni la personne en sabots qui leur a parlé une pincée chacun, et qui a fait sauter ce coin." },
      { first: true, text: "Le Grand Maître te regarde. Lui, il sait : tu le lui avais dit, un soir, la porte fermée. Il regarde le levier, la place vide devant, puis toi. Il ôte son chapeau, qu'il venait de retrouver." },
      { again: true, text: "La Chambre basse. Au fond du puits, la grande chose noire va et vient. Le levier est en haut." },
    ],
    choices: [
      { label: "Le Grand Maître", hide: { seen: "Fpj_coudrier" }, to: "Fpj_coudrier" },
      { label: "L'homme de trente ans", hide: { seen: "Fpj_jeune" }, to: "Fpj_jeune" },
      { label: "L'enfant au coin de bronze", hide: { seen: "Fpj_ansel" }, to: "Fpj_ansel" },
      { label: "Le levier, et ce qu'on y a laissé", hide: { seen: "Fpj_levier" }, to: "Fpj_levier" },
      { label: "La ruelle des Sonneurs : il y a une borne", to: "Fpj_ruelle", big: true },
    ] },

  Fpj_coudrier: { act: "V", title: "Un cas que le Livre n'a pas", place: "tour", ambiance: "chateau",
    text: [
      "« Elle marche. » Il le dit du nez, les talons joints, en regardant le puits. Puis, plus bas, pour toi seul{e} : « Il y avait quelqu'un à ce cuir. Mes bras se souviennent d'avoir été remplacés. Où est-ce ? »",
      "Tu dis ce que tu crois. Que vous aviez chacun le mot. Que tu l'as dit là-haut, et qu'on l'a dit ici ; que tu as senti deux cloches l'une dans l'autre.",
      "Il se tait. Sa moustache remue : il calcule. « *Dans l'heure de qui la nomme.* Deux bouches, deux heures. Le coup s'est fendu comme une bûche, et chaque moitié est tombée de son côté, avec ce qui lui revenait. » Il regarde le berceau nu. « L'autre moi-même de cet homme était de là-bas. Il y est retourné. Votre camarade aussi. Nous, nous étions d'ici. On nous a rendus. »",
      { if: { has: "j:efface_leve" }, text: "« Je vous avais dit une sottise, puis je l'avais corrigée, une ligne plus bas que ma copie. Me voilà corrigé une troisième fois, par les faits. C'est le sort des gens qui lisent beaucoup. »" },
      { if: { all: [{ secret: "j_efface" }, { not: { has: "j:efface_leve" } }] }, text: "« Je vous avais dit que votre mot effacerait cette personne. J'avais lu ma copie. Il fallait lire le Livre : il y a une ligne dessous. » Il a un geste raide, qui est une excuse. « Vous avez dit le mot en me croyant. Je mesure ce que cela vous a coûté, et je vous prie de considérer que cela vous est rendu : elle vit. Ailleurs. Mais elle vit. »" },
      "« Vous en êtes sûr ? — Je suis sûr de l'arithmétique. Pour le reste, vous avez un cahier, et il y a une borne à dix pas de ma porte. Les Fondateurs les ont plantées où le temps est mince. Il n'a jamais été aussi mince que ce midi. » Il remet son chapeau. « Allez-y. Je tiendrai cette salle. J'ai soixante ans de retard sur ma sévérité. »",
    ],
    choices: [{ back: "Fpj_cave" }] },

  Fpj_jeune: { act: "V", title: "Douze berceaux vides", place: "tour", ambiance: "chateau",
    text: [
      { if: REFUSE, text: "Il est assis par terre, contre un berceau, les mains ouvertes sur les genoux. Il a lâché, tout à l'heure, quand on lui a montré la marge. Il ne se souvient pas de la marge. Il se souvient d'avoir eu, un instant, envie de s'asseoir." },
      { if: { not: REFUSE }, text: "Il a les doigts recourbés sur un cuir qui a monté sans lui. Il les déplie, un par un." },
      "Il regarde le dixième berceau. « Il y avait quelqu'un. Je l'ai eu dans le coin de l'œil, tout le temps du onzième. Quelqu'un de vieux, qui me ressemblait, et qui attendait. » Il te regarde. « Je deviens fou, ou vous allez me dire qui c'était. »",
      "Tu le lui dis. Tu lui dis les cuves, posées où il les voulait ; le sable vendu à la pincée ; soixante ans ; les enfants chassés des fossés. Tu lui dis qu'il avait quatre-vingt-dix ans, des yeux de deux couleurs, et qu'il comptait ses grains par ordre d'emploi.",
      "Il écoute cela comme on écoute lire son propre testament. « Et il est parti. — Il est rentré chez lui. Il n'y avait que là qu'il existât. » Il regarde ses cartons, roulés contre le mur. Il regarde les douze berceaux vides.",
      "« Alors je suis le seul homme d'Aurime à qui l'on ait montré sa vie avant qu'il la fasse. » Sa voix est blanche. « On pend des gens pour moins que ce que j'allais faire. Que fait-on de ceux qui ne l'ont pas encore fait ? »",
      "Tu dis que cela se décidera en haut, devant du monde, et que tu diras ce que tu as vu : les deux choses.",
    ],
    choices: [{ back: "Fpj_cave" }] },

  Fpj_ansel: { act: "V", title: "Quelqu'un lui a montré", place: "tour", ambiance: "chateau",
    text: [
      "Il a treize ans, un maillet, de la cire au creux de la main. Il tourne le coin de bronze entre ses doigts.",
      "« Il a sauté tout seul ? » Tu dis que non. « C'est pas moi. Je l'avais chassé de travers, ou droit, je sais plus : j'avais peur. Et il est sorti par le petit bout. Faut un chasse, pour ça, et se coucher par terre. » Il regarde le pavé, devant le levier.",
      { if: { has: "monde:ansel_dit" }, text: "Il y a des lettres, par terre, au charbon. De grandes capitales en bâtons, un peu de travers. Il les suit du doigt, sans les toucher. « C'est à moi que c'est écrit. Y a mon nom. » Il lit, en remuant les lèvres. Il devient rouge. « Ça dit que je le chasse bien. Que c'est pas ma faute. Qui c'est qui a écrit ça ? »" },
      { if: { not: { has: "monde:ansel_dit" } }, text: "Il y a, sur le pavé, la trace d'un corps couché : un coude, une hanche, noirs de charbon. Il la regarde. « Y a eu quelqu'un. Quelqu'un de sale. » Il le dit avec respect : dans son métier, on est sale quand on a travaillé." },
      "« Quelqu'un de Roquebise, dis-tu. Qui est reparti. — Loin ? » Tu cherches comment dire soixante ans à un garçon de treize, qui a une montre neuve. « Assez loin pour qu'on ne puisse plus que s'écrire. »",
      "Il réfléchit. Il tire de sa poche un bout de craie, et il entoure les lettres, ou la trace, d'un trait bien fermé, comme on marque une pièce à garder. « Faudra dire aux balayeurs de pas passer là. »",
    ],
    choices: [{ back: "Fpj_cave" }] },

  Fpj_levier: { act: "V", title: "Cinq doigts au charbon", place: "tour", ambiance: "chateau",
    text: [
      "Tu vas au levier. La barre est en haut, d'elle-même, et le cuir pend, lustré par quatre siècles de paumes.",
      "Il y a une main dessus. Elle est imprimée, au charbon, à hauteur d'épaule : cinq doigts écartés, la paume, le pli du pouce. Elle est plus petite que la tienne. Tu poses ta main dessus, sans appuyer. Le cuir est encore tiède.",
      "Par terre, contre le pied de la barre, il y a un outil : la tige qui a chassé le coin. On l'a laissée où elle est tombée. Tu la ramasses. Elle a pris, sur le manche, la même marque noire.",
      "Tu regardes le fil. Il monte vers la voûte, net, mince. C'est par là que la voix venait. Tu approches la bouche du laiton, au chevalet, à l'endroit où une autre bouche s'est approchée. Tu dis le nom. Tu le dis deux fois. Le fil rend un fil de note, puis le bruit du puits.",
      "Tu mets l'outil dans ta ceinture. Tu regardes ta paume : elle est noire, par-dessus le sang. Tu décides de ne pas l'essuyer avant d'avoir écrit.",
    ],
    choices: [{ back: "Fpj_cave" }] },

  Fpj_ruelle: { act: "V", title: "La borne de la ruelle des Sonneurs", place: "tour", ambiance: "ville",
    text: [
      "Tu remontes par la porte de fer. La ruelle est dans l'ombre de la Tour. Il y passe des gens, à présent : une porteuse d'eau, deux clercs, un chat qui a fini de se lécher la patte.",
      "La borne est à dix pas du vantail. C'est une borne-cadran comme les autres, basse, usée, avec son style de bronze et ses heures gravées ; la dernière de la Méridienne, celle d'où l'on voit la Tour en levant le menton. Le style fait une ombre courte. Elle bouge.",
      "Tu t'assois dessus. Tu sors le Cahier de ta chemise. La toile est tachée de sueur, de sciure, de cire. Le fil gris tient.",
      "Tu as peur de l'ouvrir. Tu as tiré une cloche de douze pieds ce matin, et tu as peur d'un cahier. Si la page est blanche, tu sauras qu'il n'y a personne ; et tu auras soixante ans pour le savoir.",
      "Tu l'ouvres. Tu mouilles la mine sur ta langue. Tu écris, en penché, sous la dernière ligne de ce matin :",
      "*J'y suis. 541. La ville dîne. Tu es où ?*",
      "Tu attends. L'ombre du style avance d'un cheveu.",
    ],
    choices: [{ label: "Regarder la page", to: "Fp_cahier", big: true }] },

  // ===== the one who stays : 601, a cellar and a tower with nobody in them
  Fpr_cave: { act: "V", title: "La Chambre basse, sans personne", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Tu es dans ta cave : les douze panses de verre, la porte de fer derrière le dixième berceau, la herse au palier. Tu y es seul{e}, avec un vieillard assis qui regarde son dernier grain finir sur le dos de sa main." },
      { first: true, text: "Devant le levier, il y avait une statue grise. Tu l'as vue toute ta vie dans les récits de la glane : *le Maudit*, debout, les mains à la barre, cent ans d'araignées sur le dos. Il reste deux semelles propres dans la poussière, et un paquet de toiles tombé d'un seul morceau, comme un manteau qu'on quitte." },
      { first: true, text: "Tu comprends lentement. Tu as dit le mot. Là-haut, on l'a dit aussi. Chacun a ramené les siens. Ceux de la note étaient de là-haut. Ils y sont." },
      { first: true, text: "Tu vas au fil. Tu poses la main au chevalet. « T'es en haut ? » Le laiton porte un reste de note, qui s'en va sous ta paume. Tu attends le temps que trois cent soixante marches rapportent trois syllabes. Tu attends le double." },
      { again: true, text: "La Chambre basse. Les cuves sont ternes. Au fond du puits, la grande chose noire va et vient." },
    ],
    choices: [
      { label: "Le Maître des Sables, sur son berceau", hide: { seen: "Fpr_vieux" }, to: "Fpr_vieux" },
      { label: "Les deux semelles, devant le levier", hide: { seen: "Fpr_pas" }, to: "Fpr_pas" },
      { label: "La porte de fer, derrière le dixième berceau", hide: { seen: "Fpr_quarante" }, to: "Fpr_quarante" },
      { label: "Le pavé, où tu avais écrit", hide: { any: [{ seen: "Fpr_craie" }, { not: { has: "monde:ansel_dit" } }] }, to: "Fpr_craie" },
      { label: "L'escalier", to: "Fpr_monte", big: true },
    ] },

  Fpr_vieux: { act: "V", title: "Un cas qu'il n'avait pas dans ses tables", place: "tour", ambiance: "chateau",
    text: [
      "Il est assis, le dos droit, les deux mains sur sa canne. Il regarde la salle vide avec une attention de comptable devant une caisse forcée.",
      "« Vous l'avez dit tous les deux. » Il n'y a pas de reproche. Il y a de la curiosité, et elle est sincère. « J'avais quatre cas dans mes tables : l'un, l'autre, personne, et ma main. J'ai eu soixante ans pour les dresser. Vous m'en faites un cinquième en ouvrant la bouche à deux. »",
      "Il désigne, du menton, les deux semelles dans la poussière. « Coudrier est rentré. Le garçon que j'étais aussi : j'ai senti partir quelque chose, là, sous la côte, comme une dent de lait. Et quarante mille personnes, que j'avais sur ma lisière comme un capital. Elles dînent. Il ne me reste d'elles que la place qu'elles tenaient. »",
      "« Et moi ? demandes-tu. Pourquoi je suis là ? — Parce que vous êtes d'ici. Comme moi. Le coup a rendu chacun à son année. Je suis de 601 par usurpation, vous par naissance : nous voilà compatriotes. » Son petit rire. « Votre camarade était d'ici aussi, par naissance, et le voilà là-bas par choix. Le Livre dit *qui la nomme* ; il ne dit pas *qui en est*. On aurait dû le relire. »",
      "Il regarde les cuves. Le gris, au fond, a cessé de luire.",
      { if: { has: "r:couvert_redit" }, text: "« Vous aviez un couvert. Vous avez dit le mot quand même. Pour une enfant. » Il te considère. « Elle est du Bond. Elle est donc d'ici : elle se réveille en ce moment, à dix lieues. Vous aurez ce que vous étiez venu{e} chercher. Je note que vous êtes la seule personne de cette affaire à qui cela arrive. »" },
      "Puis, d'une autre voix, plus basse : « Vous avez un cahier. Il parle à l'autre, aux bornes. Le mien n'a jamais parlé qu'à moi. » Il lève ses yeux de deux couleurs. « Il y a là-bas un homme de trente ans, qui a mes mains, et qui va passer devant des juges. J'aurais une ligne à lui faire tenir. Une seule. Je sais ce que je vous demande, et à qui. »",
    ],
    choices: [
      { label: "« Dictez. Je l'écris comme vous la dites. »", fx: { flag: "monde:p_dictee" }, to: "Fpr_dictee" },
      { label: "« Non. Il a eu sa vie pour lire la vôtre. »", back: "Fpr_cave" },
    ] },

  Fpr_dictee: { act: "V", title: "La ligne", place: "tour", ambiance: "chateau",
    text: [
      "Tu sors le Cahier. Tu l'ouvres sur ton genou, à une page de droite. Tu tires ton charbon. Il te regarde faire, et tu vois qu'il a envie de te tendre une plume, et qu'il s'en garde.",
      "Il dicte lentement, en homme qui a payé l'encre toute sa vie.",
      "*MELCHIOR. J'AI EU CE QUE TU VEUX. SOIXANTE ANS ET QUARANTE MILLE GENS. PERSONNE À QUI LE MONTRER.*",
      "Il s'arrête. Tu attends. Il regarde les deux semelles, devant le levier.",
      "*LE SEUL HOMME QUI M'AIT TENU TÊTE A UNE MOUSTACHE. IL EST À TROIS PAS DE TOI. JE L'AI LAISSÉ DEBOUT SOIXANTE ANS POUR NE PAS L'ENTENDRE. ÉCOUTE-LE.*",
      "« C'est deux lignes, dis-tu. — Je me suis toujours fait la mesure large. » Il tend la main vers la page. Tu la lui laisses voir. Il lit tes bâtons, jusqu'au bout. « C'est mal formé, et c'est exact. Je n'en demande pas plus à un greffier. »",
      "Tu refermes. Tu ignores si la page passera. Tu ignores s'il y a quelqu'un, de l'autre côté, pour l'ouvrir. Il le sait aussi. Il a dicté quand même : c'est la première fois que tu le vois faire une chose sans en connaître le rapport.",
    ],
    choices: [{ back: "Fpr_cave" }] },

  Fpr_pas: { act: "V", title: "Deux semelles propres", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'approches. La poussière a soixante ans d'épaisseur : un feutre gris, où tes sabots font des trous. Devant le levier, deux semelles sont découpées dedans, nettes, les talons joints. Le pavé y est noir et luisant, comme sous un meuble qu'on déplace.",
      { if: LACHE, text: "Il avait lâché la barre, à ta prière, dans une pincée. Chez toi, la statue avait depuis lors les bras le long du corps, et les glaneurs disaient qu'elle les avait toujours eus ainsi. Elle est partie les bras le long du corps." },
      { if: { not: LACHE }, text: "Sur le cuir de la barre, il y a deux places claires, où tenaient ses mains. Le reste est noir de crasse. On pourrait y remettre les doigts sans se tromper d'un pouce." },
      "Tu ramasses le paquet de toiles d'araignée. Il pèse le poids d'un mouchoir. Dedans, il y a la forme d'un dos, d'une nuque, d'un chapeau. Tu le reposes. Tu as volé bien des choses à des dormants : tu laisses celle-ci.",
      { if: { has: "r:jehan_nom" }, text: "Il y a un garçon de vingt ans, là-haut, qui a retrouvé son nom ce matin et qui voulait voir cet homme. Il verra deux semelles. Tu lui diras comment il joignait les talons : tu l'as vu une pincée durant, et c'est plus que personne n'en a vu depuis trois règnes." },
      "Tu mets ton sabot dans la semelle gauche. Elle est plus grande que la tienne. Tu l'ôtes.",
    ],
    choices: [{ back: "Fpr_cave" }] },

  Fpr_quarante: { act: "V", title: "Le quarante et unième couvert", place: "tour", ambiance: "chateau",
    text: [
      "La porte de fer, derrière le dixième berceau. Tu la pousses.",
      "Une salle basse, tendue de drap gris. Une table en fer à cheval, quarante couverts d'argent, quarante sabliers d'or, vides, devant quarante assiettes. On devait les remplir à la cuve, tous ensemble, quand la vague aurait fini sa course.",
      "Ils sont quarante, assis : du velours, des joues de cire, des mains de vieillards. Ceux-là sont d'ici. Le coup les a laissés où ils étaient. Ils ont entendu douze, et ils attendent qu'on leur explique.",
      "Au bout de la table, une quarante et unième chaise, vide, avec un couvert d'étain. C'était le tien.",
      "« Y a plus rien à remplir, dis-tu. Le puits marche. Y aura plus de rosée. » Une femme à perruque demande, d'une voix flûtée, ce que deviennent les dormants : elle a des parts sur la lisière d'Arvoise. « Ceux d'Arvoise se réveillent. Ceux de la ville sont rentrés chez eux. Vous avez des parts sur du vent. »",
      "Un gros homme, qui a trente ans de figure et quatre-vingts de regard, dit : « J'ai donné la forêt de Vauxelles pour dix ans. — Je sais. On m'a chassé{e} de ses fossés. » Tu vois le compte se faire, autour de la table, sur quarante figures.",
      "Tu prends la cuiller d'étain. Tu la mets dans ta poche. On ne t'avait jamais invité{e} nulle part : il te faut une preuve.",
    ],
    choices: [{ label: "Refermer la porte de fer", fx: { flag: "r:p_cuiller" }, back: "Fpr_cave" }] },

  Fpr_craie: { act: "V", title: "Un trait de craie, de soixante ans", place: "tour", ambiance: "chateau",
    text: [
      "Tu avais écrit par terre, au charbon, pour un enfant de treize ans qui avait de la cire aux oreilles. C'était dans la note. C'était donc là-haut, soixante ans plus tôt, sur un pavé qui n'avait pas encore sa poussière.",
      "Tu cherches l'endroit, devant le levier, un peu à gauche. Tu écartes le feutre gris du plat de la main.",
      "Tes lettres y sont. Elles ont pâli jusqu'au brun, et elles tiennent : de grandes capitales en bâtons, de travers. Autour, il y a un trait de craie, bien fermé, repassé plusieurs fois, par des mains différentes, à des années de distance. Et dans un coin du cadre, gravé à la pointe, tout petit : *Ne pas balayer. A. H., juré.*",
      "Tu restes accroupi{e} devant cela. Il a été juré. Il a eu une vie, là-haut, avec une montre et un banc à la Guilde, et il a fait garder par des balayeurs, d'année en année, quatre mots d'une personne sale qu'il n'avait vue qu'une pincée.",
      "Puis tu penses : là-haut. Ce pavé est celui d'ici. Ce que tu lis ne devrait pas y être. Les deux midis se touchent donc par quelque endroit : par cette pierre, par ce puits, par ce qui s'écrit.",
      "Tu remets la poussière dessus, doucement, du plat de la main. Tu sais où c'est.",
    ],
    choices: [{ back: "Fpr_cave" }] },

  Fpr_monte: { act: "V", title: "Des pas qui ne descendent pas", place: "tour", ambiance: "chateau",
    text: [
      "Tu montes. Quatre-vingts marches jusqu'à la niche. Tu les as descendues à deux ce matin, dans la note ; tu avais devant toi un dos, une nuque, des cheveux pleins de paille. Tu les remontes en regardant tes pieds.",
      "À la niche, le mot rayé dans la pierre : *JUSTE.* Il a soixante ans. Tu poses le doigt dessus, comme {autre} l'a fait devant toi.",
      "Tu attends. C'est ici qu'on devait se retrouver. Tu tends l'oreille vers le haut de la vis : deux cent quatre-vingts marches de pierre, des meurtrières, un jour jaune. Il descend de la poussière, dans un rayon. Aucun pas.",
      { if: { has: "r:jehan_marche" }, text: "Jehan est au pied des marches, sa pique en travers, où tu l'avais laissé. Il a vu le gris redescendre. « C'est fait ? — C'est fait. — Les deux ? » Tu mets du temps. « Les deux. Chacun de son côté. » Il ne comprend pas. Il voit ta figure, et il ne demande pas la suite." },
      { if: { secret: "r_soeur" }, text: "Il y a une petite de cinq ans, à dix lieues, qui vient d'achever un souffle. Tu l'as, celle-là. Tu avais marché neuf jours pour elle, sans le dire à personne, et tu comptais le dire enfin dans cet escalier. Tu le dis quand même, à mi-voix, à la niche. La pierre garde le nom." },
      "Tu peux monter voir. Ou sortir : il y a une borne, dans la ruelle, à dix pas de la porte de fer, et tu as un cahier.",
    ],
    choices: [
      { label: "Monter jusqu'à la Cage", hide: { seen: "Fpr_haute" }, to: "Fpr_haute" },
      { label: "La ruelle des Sonneurs, et sa borne", to: "Fpr_ruelle", big: true },
    ] },

  Fpr_haute: { act: "V", title: "La Tour, du haut en bas, vide", place: "tour", ambiance: "chateau",
    text: [
      "Tu montes les deux cent quatre-vingts. Tu n'étais jamais allé{e} plus haut que la herse. Tu as les jambes d'un glaneur : elles montent sans se plaindre, et elles comptent.",
      "Au second palier, il y avait un garçon en tablier vert, que {autre} t'avait décrit. Il reste une paire de ciseaux de sonneur, pendue à son clou.",
      "La Chambre haute. La porte de chêne est ouverte sur un petit lit blanc, creusé par un corps d'enfant, et sur un fauteuil où une robe a laissé son pli. La poussière s'arrête au seuil, d'un trait : on n'avait jamais pu entrer là. Tu n'entres pas. Sur l'appui de la croisée, il y a un cheval de bois, peint en bleu, à qui il manque une oreille.",
      "Vingt échelons. La Cage. La cloche pend, verte, énorme, immobile. Tu la touches. Elle est froide. Chez toi, on dit *sonner* comme on dit *la mer*. Tu en as entendu une, ce matin, et c'était celle-ci.",
      "Le banc des sonneurs est contre le mur. Quarante noms taillés, noirs. Et dessous, un quarante et unième, que tu sais lire avant d'en avoir suivi les lettres.",
      { if: { has: "monde:p_date_cage" }, text: "Il y a une date : *541.* Et trois mots, en petites capitales, qui ne sont pas de son écriture ordinaire. Ils sont de la tienne. Quelqu'un a imité tes bâtons, au couteau, pour que tu les reconnaisses : *J'Y SUIS.* L'entaille est noire, patinée, douce. Elle t'attend depuis soixante ans, et elle a été faite il y a une heure." },
      { if: { not: { has: "monde:p_date_cage" } }, text: "Le nom seul. L'entaille est noire, patinée, douce au doigt. Elle a soixante ans, et elle a été faite ce matin." },
      "Tu t'assois sur le banc. Tu restes là le temps de reprendre ton souffle, qui met plus longtemps à revenir que d'habitude.",
    ],
    choices: [{ label: "Redescendre, jusqu'à la ruelle", fx: { flag: "r:p_banc" }, to: "Fpr_ruelle", big: true }] },

  Fpr_ruelle: { act: "V", title: "La borne de la ruelle des Sonneurs", place: "tour", ambiance: "ville",
    text: [
      "La herse est levée à mi-hauteur. Personne ne la tient.",
      { if: TENU, text: "Les manteaux blancs qui avaient pris l'escalier ce matin sont sur le parvis. On les entend, de loin : des voix d'hommes qui appellent, et à qui rien ne répond." },
      { if: { not: TENU }, text: "Les dix noirs de la Garde du Sable ont posé leurs hallebardes contre le mur, proprement, en faisceau. Ils ont entendu douze. Ils sont allés voir." },
      "La ruelle est dans l'ombre de la Tour. Il y avait là, hier encore, une porteuse d'eau arrêtée au milieu d'un pas, deux clercs, un chat sur la borne, la patte levée. Il y a une cruche par terre, entière, et quatre rubans bleus, noués en boucle, tombés chacun à la place d'un poignet.",
      "Tu en ramasses un. Les Veilleurs écrivent le nom dessus, à l'encre, et le renouent tous les ans. *Garsende Maillet, porteuse.* Le nœud est fait. Il n'entoure plus rien.",
      "La borne est à dix pas : une borne-cadran, basse, usée, la dernière de la Méridienne. Tu t'assois dessus. Tu sors le Cahier. Tu l'ouvres sur ton genou.",
      "Sous la dernière ligne de ce matin, il y a de l'écriture. Elle est en penché. Elle est fraîche : elle brille encore.",
    ],
    choices: [{ label: "Lire", to: "Fp_cahier", big: true }] },

  // ===== the first page across two noons
  Fp_cahier: { act: "V", title: "Ce qui passe encore", backName: "la borne", place: "tour", ambiance: "ville", charniere: true, aparte: true,
    text: [
      { first: true, if: J, text: "L'encre vient. Elle sort du papier comme une sueur, trait par trait, en grandes capitales noires, de travers :" },
      { first: true, if: J, text: "*J'Y SUIS. 601. SUR LA BORNE. Y A PLUS PERSONNE DANS LA VILLE. ILS SONT CHEZ TOI ?*" },
      { first: true, if: J, text: "Tu lis. Tu relis. Tu poses le Cahier sur tes genoux et tu mets ta figure dans tes mains, noires et rouges, au milieu d'une ruelle où passent des clercs. Une porteuse d'eau te demande si tu as mal. Tu dis que non. Tu dis que tu viens de recevoir une lettre." },
      { first: true, if: R, text: "*J'y suis. 541. La ville dîne. Tu es où ?*" },
      { first: true, if: R, text: "Tu lis. Tu sais lire depuis six ans, par les enseignes et les rubans, et tu n'as jamais lu une ligne aussi vite. Tu tires ton charbon. Tes doigts tremblent : il casse. Tu écris avec le bout cassé. *J'Y SUIS. 601.* Tu regardes les quatre rubans par terre. Tu ajoutes le reste." },
      { first: true, text: "On s'écrit. Longtemps, ligne après ligne, chacun sur sa borne, à dix pas de la même porte de fer. L'un dit la ville qui danse, la cave pleine de gens qui s'éveillent, une main au charbon sur un cuir. L'autre dit les rubans par terre, deux semelles dans la poussière, un petit lit blanc où il reste le creux d'une enfant." },
      { first: true, text: "On fait le compte à deux, comme on a tout fait. Ceux de 541 sont en 541. Ceux que la Dormante avait pris ensuite, d'année en année, sont restés dans la leur, et ils s'éveillent : l'abbaye, Arvoise, Roquebise. Le premier cercle est vide. Le coup a rendu à chaque midi ce qui lui appartenait, et il a mis entre vous deux exactement ce qu'il y avait au départ : soixante ans, et du papier." },
      { first: true, if: { all: [J, { not: SAIT }] }, text: "Tu demandes le remède. Tu écris vite, et mal. La réponse vient en bâtons, sans une faute, comme une chose qu'on a récitée cent fois à des fiévreux : *FIÈVRIER. L'ÉCORCE. LES TEINTURIERS EN ONT, ÇA FAIT LEUR JAUNE. GROS COMME UN POIS, BOUILLI, MATIN ET SOIR, DIX-NEUF JOURS.* Tu arraches le bas de la page. Il passera sous une porte, au Palais, avant une heure." },
      { first: true, if: { all: [R, { not: SAIT }] }, text: "{autre} demande le remède. L'écriture court. Tu réponds comme tu l'as récité cent fois à des fiévreux de la glane : *FIÈVRIER. L'ÉCORCE. LES TEINTURIERS EN ONT, ÇA FAIT LEUR JAUNE. GROS COMME UN POIS, BOUILLI, MATIN ET SOIR, DIX-NEUF JOURS.* Tu n'as jamais guéri personne d'aussi loin." },
      { first: true, if: { all: [J, { has: "monde:p_dictee" }] }, text: "Puis il vient deux lignes d'une autre voix, que {autre} a écrites sous la dictée, et que tu reconnais à la mesure large. Elles sont pour un homme de trente ans. Tu les recopies sur ta manche, au crayon, pour les lui lire devant témoins." },
      { first: true, if: { all: [J, { secret: "j_malade" }] }, text: "Il reste une chose, que tu avais juré de taire. Tu l'écris. *Line est sur le parvis, chez toi, sur une chaise. Elle est très malade. Elle m'avait fait promettre. Va la voir. Dis-lui que j'y suis.* La réponse met du temps. *JE SAVAIS. ELLE M'AVAIT FAIT PROMETTRE AUSSI. J'Y VAIS.*" },
      { first: true, if: { all: [R, { secret: "r_soeur" }] }, text: "Il reste une chose, que tu n'avais dite à personne. Tu l'écris, en bâtons, et c'est plus facile que de la dire : *J'AI UNE SŒUR. LISON. CINQ ANS. ROQUEBISE. ELLE ÉTAIT DU BOND. C'EST POUR ELLE QUE JE MARCHAIS.* La réponse vient, en penché : *Je m'en doutais. On ne fait pas neuf jours de gris pour une reine. Elle se réveille ?* Tu écris : *OUI.* Tu regardes ce mot longtemps." },
      { first: true, text: "L'ombre du style a tourné d'un doigt, sur les deux bornes. Il y a du monde à voir, des deux côtés, et des choses à dire que personne d'autre ne dira. On convient de rouvrir ce soir, ici, quand l'ombre de la Tour aura passé le coin de la ruelle." },
      { first: true, if: J, text: "Tu écris : *À ce soir.* Il vient, dessous : *À CE SOIR.* Puis, plus petit, comme on parle en s'en allant : *T'AS DIT LE MOT POUR QUI ?* Tu regardes la question. Tu refermes le Cahier dessus. Tu as jusqu'au soir pour savoir la réponse." },
      { first: true, if: R, text: "{autre} écrit : *À ce soir.* Tu écris dessous : *À CE SOIR.* Puis, plus petit, parce que cela te brûle : *T'AS DIT LE MOT POUR QUI ?* Le papier reste comme il est. De l'autre côté, on a refermé. Tu auras la réponse ce soir, ou une autre question." },
      { again: true, text: "La borne de la ruelle des Sonneurs. L'ombre du style avance." },
    ],
    choices: [
      { label: "Aller sur le parvis de 541", hide: R, to: "Fpj_parvis", big: true },
      { label: "Aller sur le parvis de 601", hide: J, to: "Fpr_parvis", big: true },
    ] },
});

module.exports = { passages: P, extras: {} };
