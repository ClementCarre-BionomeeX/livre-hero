// Le Douzième Coup · chapter 11, the one who passes, second half (act III, 20 June 541, from noon to none). The
// afternoon at the Palace. A valet with a green ribbon in the lime walk (if `j:oderic_remarque`: `j:rubans_battus` |
// `j:rubans_semes`). The antechamber and Madame de Sérigny ; the Queen in her oratory (hub `K11j_reine`): the remedy
// (reads `monde:aelis_ecorce`), the duke (`monde:reine_avertie` with a proof), the truth of the sixty years
// (`j:reine_sait_601`), the model of the upper Chamber (`j:sait_fil`), the letters patent of the Custom
// (`j:sait_coutume` + `monde:reine_avertie` → item `lettres_patentes`, `monde:lettres_garde`, third warden:
// `monde:garde_coudrier` | `monde:garde_porteur`), what she asks (`j:promis_reine` + secret `j_reine` + item
// `bague_reine` | `j:refuse_reine`). The child's room (`j:aelis_vue`, `j:aelis_line`, `j:aelis_dit`) ; back to the
// Queen with the child's words (`monde:reine_renonce` if the bark is boiling, else `j:reine_tient`). None at the
// dial of the tortoises → B11.
var P = {};
var JOSQ = { present: "josquin" };
var PREUVE = { any: [{ has: "j:preuve_oderic" }, { item: "memoire_graveur" }] };
var ECORCE = { has: "monde:aelis_ecorce" };

Object.assign(P, {
  K11j_tantot: { act: "III", title: "L'après-dînée", place: "palais", ambiance: "chateau",
    text: [
      "Tu refermes le Cahier. L'ombre du style a quitté le douze. Les jardiniers reprennent leurs sécateurs sur le bronze, sans te regarder : au Palais, on ne voit pas les gens qui écrivent.",
      "Il te reste trois heures. À none, de l'autre côté du sable, sept hommes s'assoiront devant une maquette. Avant cela, il y a une aile où l'on brûle le jour, et une femme qui a compté douze coups à sa fenêtre, une enfant sur l'épaule.",
      { after: "j:oderic_remarque", text: "Dans l'allée de tilleuls, entre toi et l'aile aux volets clos, un valet taille une branche qui n'en a pas besoin. Il a un ruban vert à son chapeau. Un second, plus loin, ratisse." },
    ],
    choices: [
      { label: "Prendre l'allée de tilleuls", hide: { not: { has: "j:oderic_remarque" } }, to: "K11j_rubans", big: true },
      { label: "Quitter le socle du cadran", hide: { has: "j:oderic_remarque" }, to: "K11j_palais", big: true },
    ] },

  K11j_rubans: { act: "III", title: "Deux jardiniers de trop", place: "palais", ambiance: "chateau",
    text: [
      "Le premier pose son sécateur et prend, dans la brouette, une canne. Elle est plombée. Le second a lâché son râteau.",
      "« Monseigneur te fait dire d'être sage, dit le premier, à mi-voix, par égard pour les fenêtres. Il a pensé que tu comprendrais mieux dehors. Il y a une petite porte, au fond, qui donne sur le fossé. On t'y mène. On ne te fera pas de mal, si tu marches. »",
      "Ils sont deux, larges, nourris, et ils ont l'habitude. L'allée est longue, bordée de tilleuls taillés en mur. Au bout, à cinquante pas, les deux archers de l'aile tournent le dos : ils gardent une porte, et ce qui se passe sous les arbres ne les regarde pas.",
      { with: "josquin", text: "Josquin a tiré de son tablier son tournevis long comme l'avant-bras. Il le tient à deux mains, par le mauvais bout. « Pardon, dit-il aux deux hommes. Je vous préviens que je ne sais pas m'en servir, ce qui me rend imprévisible. »" },
    ],
    choices: [
      { label: "Leur faire face, sous les tilleuls",
        fight: { title: "Deux rubans verts dans une allée", enemies: [{ id: "homme_duc", n: 2 }], terrain: "ville",
          win: { fx: { flag: "j:rubans_battus", ep: ["perso", 600] }, to: "K11j_rubans_fin" },
          lose: { fx: { flag: "j:rubans_semes", pv: -3 }, to: "K11j_rubans_fin" } } },
      { label: "Passer à travers le mur de tilleuls, et courir entre les planches",
        test: { dom: "nature", diff: 10, label: "Un jardin, pour qui a couru des champs", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { voie: "leste" }, v: 10 }, { if: { has: "j:sauge_amie" }, v: 10 }] },
        win: { fx: { flag: "j:rubans_semes", ep: ["perso", 400] }, to: "K11j_rubans_fin" },
        lose: { fx: { flag: "j:rubans_semes", pv: -2 }, to: "K11j_rubans_fin" } },
      { label: "Crier : « Capitaine Hardouin ! »", hide: { not: { has: "j:hardouin_croit" } }, fx: { flag: ["j:rubans_semes", "j:rubans_archers"] }, to: "K11j_rubans_fin" },
    ] },

  K11j_rubans_fin: { act: "III", title: "Sous les tilleuls", place: "palais", ambiance: "chateau",
    text: [
      { after: "j:rubans_battus", text: "Le premier est assis dans sa brouette, la main sur l'oreille, avec l'air de réfléchir. Le second a retrouvé son râteau, pour s'appuyer dessus. Tu ramasses la canne plombée, et tu la jettes par-dessus le mur des Simples, où elle tombe dans la rhubarbe." },
      { after: "j:rubans_battus", text: "« Vous direz à Monseigneur que je suis sage, dis-tu. Vous lui direz aussi que j'ai très bien compris, dehors. »" },
      { after: "j:rubans_archers", text: "Tu as de la voix. Au bout de l'allée, les deux archers se retournent ; à la voûte, quatre casaques bleues sortent en courant. Les deux valets ont repris sécateur et râteau avant qu'elles arrivent, et taillent, et ratissent, avec une application de saints. Le sergent les regarde. Il regarde la canne, dans la brouette. « Jardiniers de qui ? » Personne ne répond. « Dehors. Par la grille, que je vous voie sortir. »" },
      { if: { all: [{ has: "j:rubans_semes" }, { not: { has: "j:rubans_archers" } }] }, text: "Tu traverses le mur de feuilles, l'épaule en avant. Derrière, ce sont les planches de buis, les ardoises, les cloches à melons. Tu cours où l'on ne court pas. Une canne siffle, et casse une cloche." },
      { if: { all: [{ has: "j:rubans_semes" }, { not: { has: "j:rubans_archers" } }] }, text: "Alors une voix de vieille femme s'élève, aiguë, terrible, du fond du jardin : « MES MELONS ! » La mère Sauge arrive, le plantoir levé. Les deux valets s'arrêtent net au bord de la planche. On leur a appris à assommer des gens ; on ne leur a pas appris à marcher sur les simples de la Reine devant celle qui les arrose. Ils reculent, en saluant." },
      "L'allée est libre. Au bout, la porte de l'aile, et la dame en noir, sur le seuil, qui a tout vu et qui n'en dira rien : elle a d'autres soucis.",
    ],
    choices: [{ label: "Aller jusqu'à elle", to: "K11j_antichambre", big: true }] },

  // --- The antechamber ---
  K11j_antichambre: { act: "III", title: "Madame de Sérigny", backName: "l'antichambre", place: "palais", ambiance: "chateau",
    text: [
      { first: true, text: "L'antichambre est petite, tendue de gris. On y a mis des chaises, et personne dessus. Il y fait chaud : la chambre d'à côté rayonne à travers la porte, comme un four." },
      { first: true, text: "Madame de Sérigny est la dame d'atour. Elle a cinquante ans, une robe noire sans un bijou, un trousseau à la ceinture, et la figure des gens qui ont cessé de dormir au même moment que leur maîtresse, par fidélité, et qui lui en veulent un peu." },
      { first: true, after: "j:voie_anthelme", text: "Maître Anthelme est là, debout, les mains dans ses manches. « C'est la personne », dit-il. Madame de Sérigny te regarde. Elle regarde le médecin. « Vous répondez de cela ? » Il dit oui, du ton dont il écrit *néant* : sans y mettre d'espoir, et sans mentir." },
      { first: true, after: "j:voie_hardouin", text: "Le capitaine Hardouin t'a précédé{e}. Il se tient à côté de la porte, où il a l'air d'un meuble utile. « Elle verra ceci, madame, dit-il. Je le demande. Je n'ai rien demandé en dix ans. »" },
      { first: true, after: "j:voie_brezolles", text: "Le chevalier de Brézolles baise la main de la dame, qui la lui retire. « Mon prévôt, madame. Un talent. Sa Majesté aime les talents. » Elle le toise. « Sa Majesté n'aime plus rien, monsieur, et vous le savez. Mais vous avez tenu la petite sur votre cheval, l'été dernier, et elle a ri. Passez-moi votre prévôt. »" },
      { first: true, text: "« Sa Majesté vous a vu{e}, à midi, dit-elle enfin. Au cadran. Elle a demandé qui était assis là, et qui comptait avec elle. On ne compte plus avec elle, ici : on attend qu'elle ait fini. » Elle choisit une clef. « Elle vous donne le temps que la petite dort. »" },
      { again: true, text: "L'antichambre grise, sa chaleur de four. Madame de Sérigny a la main sur son trousseau." },
      { first: true, after: "j:oderic_entendu", text: "Le duc sort de là. Tu as croisé son chien dans l'escalier. Il a dû faire ses adieux avec beaucoup de grâce." },
    ],
    choices: [
      { label: "Entrer chez la Reine", to: "K11j_reine", big: true },
      { label: "La chambre aux cierges", hide: { any: [{ not: { seen: "K11j_reine" } }, { has: "j:aelis_vue" }] }, to: "K11j_aelis", big: true },
      { label: "Laisser sonner none, et regagner le jardin", hide: { not: { seen: "K11j_reine" } }, to: "K11j_none", big: true },
      { back: "K11j_palais" },
    ] },

  // --- The Queen ---
  K11j_reine: { act: "III", title: "L'oratoire", backName: "l'oratoire de la Reine", place: "palais", ambiance: "chateau", hub: true, fx: { meet: "reine" },
    text: [
      { first: true, text: "C'était un oratoire. Il en reste le prie-Dieu, un crucifix d'ivoire, une veilleuse rouge. Le reste a été gagné par autre chose. Il y a des horloges sur la cheminée, sur les consoles, par terre : douze, vingt, qui battent ensemble, à une seconde près, avec un bruit de pluie sur un toit. Il y a, sur une table, sous une cloche de verre, une petite tour de laiton, haute de deux pieds. Et sur le prie-Dieu, à la place du livre d'heures, un coffret de fer, fermé, avec une clef dessus." },
      { first: true, text: "La Reine est debout près de la fenêtre. Elle a trente ans. On lui en donnerait quarante de loin, et vingt de près, quand on voit ses poignets. Elle est en noir, sans coiffe. Elle fait tourner, du pouce, à son annulaire, une bague devenue trop grande." },
      { first: true, text: "« Vous avez compté, dit-elle. Je vous ai vu{e}. Les autres baissent les yeux quand la cloche sonne, depuis qu'ils savent pourquoi je la compte. » Sa voix est basse, usée, et très nette. « Asseyez-vous. Je reste debout : si je m'assois, je dors, et je ne veux pas dormir pendant qu'elle dort, on se manquerait. Dites-moi qui vous êtes, ou dites-moi ce que vous voulez. Je n'ai plus le temps des deux. »" },
      { again: true, text: "Les vingt horloges, d'accord à une seconde. La Reine, à sa fenêtre, tourne sa bague." },
      { after: "monde:reine_renonce", text: "Elle regarde la petite tour de laiton, sous sa cloche, comme on regarde une chose qu'on a failli acheter." },
    ],
    choices: [
      { label: "Lui parler du remède", hide: { seen: "K11j_reine_remede" }, to: "K11j_reine_remede" },
      { label: "Poser devant elle ce que tu sais du duc", hide: { seen: "K11j_reine_duc" }, to: "K11j_reine_duc" },
      { label: "Lui dire de quand tu viens", hide: { has: "j:reine_sait_601" }, to: "K11j_reine_verite" },
      { label: "La petite tour de laiton, sous sa cloche", hide: { has: "j:sait_fil" }, to: "K11j_modele" },
      { label: "« Madame. Il y a un second article, au titre neuvième. »", hide: { any: [{ not: { has: "j:sait_coutume" } }, { not: { has: "monde:reine_avertie" } }, { has: "monde:lettres_garde" }] }, to: "K11j_lettres" },
      { label: "Lui répéter ce que sa fille t'a chargé{e} de dire", hide: { any: [{ not: { has: "j:aelis_dit" } }, { seen: "K11j_reine_aelis" }] }, to: "K11j_reine_aelis", big: true },
      { label: "Lui demander ce qu'elle attend de toi", hide: { any: [{ has: "j:promis_reine" }, { has: "j:refuse_reine" }, { has: "monde:reine_renonce" }] }, to: "K11j_reine_demande", big: true },
      { back: "K11j_antichambre" },
    ] },

  K11j_reine_remede: { act: "III", title: "Une course", place: "palais", ambiance: "chateau",
    text: [
      { if: ECORCE, text: "« Maître Anthelme est venu, dit-elle. Il avait une casserole à la main. Il ne l'a pas lâchée pour me faire la révérence. » Il passe sur sa figure quelque chose qui a été un sourire. « Il m'a dit : *madame, voici un remède, et voici la course.* Quinze jours, peut-être. Il en faut vingt et un. Il m'a dit qu'il pouvait perdre. C'est le seul homme de ce Palais qui me dise qu'il peut perdre. »" },
      { if: ECORCE, text: "« Elle a bu le premier bol à dix heures. Elle a fait la grimace. » La Reine regarde ses mains. « Il y a trois mois qu'elle n'avait pas fait la grimace. Elle n'avait plus assez de goût aux choses pour les trouver mauvaises. »" },
      { if: ECORCE, text: "Elle se tait. Les vingt horloges battent. « Vous m'apportez une chance sur deux. On m'en offre une sur une, de l'autre côté de la place. Voilà où j'en suis, et vous comprenez qu'on ne choisit pas cela comme une étoffe. »" },
      { if: { all: [{ not: ECORCE }, { any: [{ has: "monde:su:remede" }, { has: "monde:remede_dit" }] }] }, text: "Tu dis le nom. Le fièvrier, les îles, trois semaines. Elle ne bouge pas. « Anthelme me l'a écrit. Il a mis le mot au bout de trois cahiers de *néant*, et il me l'a apporté lui-même, comme une relique. » Elle tourne sa bague. « Un nom. Les navires de mon beau-frère mettent un an à faire le voyage. Mon beau-frère a eu la bonté de me le rappeler ce matin. »" },
      { if: { all: [{ not: ECORCE }, { any: [{ has: "monde:su:remede" }, { has: "monde:remede_dit" }] }] }, text: "« Un an. C'est l'année qu'on m'offre. Vous voyez : tout le monde est d'accord. Vous, le médecin, l'horloger. Il n'y a que la manière de passer l'année qui diffère. »" },
      { if: { not: { any: [ECORCE, { has: "monde:su:remede" }, { has: "monde:remede_dit" }] } }, text: "Tu dis qu'on en guérit. Qu'il y a des pays où l'on en guérit. Elle te regarde avec une patience qui fait plus mal que la colère. « On me l'a dit. Sous un auvent, depuis la Saint-Médard, quarante fois par jour. Avez-vous le remède dans votre poche ? » Tu ne l'as pas. « Alors vous êtes comme eux, et je vous remercie d'être venu{e}. »" },
    ],
    choices: [{ back: "K11j_reine" }] },

  K11j_reine_duc: { act: "III", title: "Le frère de mon mari", place: "palais", ambiance: "chateau",
    text: [
      { if: { not: PREUVE }, text: "Tu dis les barges. La chasse. Les douze gentilshommes. Ce qu'on murmure à la galerie, entre la Troisième et la Quatrième." },
      { if: { not: PREUVE }, text: "Elle lève une main, lasse. « Mon beau-frère est un homme qui aime plaire, qui dépense trop, et qui s'ennuie au second rang. Je sais tout cela depuis mon mariage. On me l'a dénoncé chaque année, avec les mêmes mots. » Elle laisse retomber la main. « Il m'ennuie. Il ne me trahit pas. Et quand il me trahirait un peu, pendant un an, pour le plaisir de signer : je le lui ai déjà pardonné. C'est un prix. Je le paie. »" },
      { if: { not: PREUVE }, text: "Tu n'as rien à poser devant elle. Elle le voit." },
      { if: PREUVE, text: "Tu poses sur le prie-Dieu, à côté du coffret de fer, ce que tu as." },
      { if: { all: [PREUVE, { has: "j:lettre_oderic" }] }, text: "Elle lit la lettre à Gaucelin. Elle connaît l'écriture : sa main n'hésite pas. *Durant l'empêchement de la Reine.* Elle relit la date." },
      { if: { all: [PREUVE, { has: "j:epreuve_sceau" }] }, text: "Elle prend la galette de cire. Elle la tient au jour de la fenêtre. Un homme à cheval, sous un dais. *RÉGENT D'AURIME.* Elle a, sur le prie-Dieu, dans son coffret, le sceau que celui-ci doit remplacer." },
      { if: { all: [PREUVE, { item: "memoire_graveur" }] }, text: "Elle déplie le mémoire du graveur, un papier roux, cassant aux plis. *Livré le 12 juin.* « Thomassin a gravé mon sceau de mariage », dit-elle. Elle passe le doigt sur le pli, s'étonne de la poussière qu'il laisse, et n'en dit rien." },
      { if: PREUVE, text: "Elle repose tout. Elle va à la fenêtre. Elle y reste, le dos tourné, le temps que vingt horloges fassent ensemble le tour d'un cadran de secondes." },
      { if: PREUVE, text: "« Le douze. » Sa voix n'a pas changé. « J'ai parlé de la chambre à Oderic le dix. Il m'a tenu les mains. Il a pleuré. Il a dit : *ma sœur, je porterai cela pour vous, un an, et je vous le rendrai.* Il avait donc commandé le sceau le lendemain. » Elle se retourne. « On ne grave pas un sceau d'argent pour un an. »" },
      { if: PREUVE, text: "« Je savais que j'achetais la vie de ma fille avec un an de mon règne. Je trouvais le marché honnête. On m'a changé le prix dans le dos. » Elle a les yeux secs. C'est une femme qui a épuisé ses larmes sur une chose, et qui n'en a plus pour les autres." },
    ],
    choices: [
      { label: "Attendre ce qu'elle va dire", hide: { not: PREUVE }, fx: { flag: "monde:reine_avertie", regard: { reine: "redevable" }, ep: ["histoire", 800] }, to: "K11j_reine_duc_fin" },
      { back: "K11j_reine" },
    ] },

  K11j_reine_duc_fin: { act: "III", title: "Ce qu'une reine peut encore", place: "palais", ambiance: "chateau",
    text: [
      "« Je ne peux pas l'arrêter. » Elle le dit comme on fait un compte. « Il est le premier prince du sang. Il a pour lui la moitié des barons, et l'autre moitié a peur. Si je le fais prendre ce soir, sur trois papiers, j'ai la guerre demain, le jour où je monte à la Tour, et ma fille au milieu. »",
      "« Mais il part chasser à l'aube, et il me croit endormie d'avance. » Elle tourne sa bague. « Il me reste une nuit, une main, et un sceau. C'est peu. Les reines de ma maison ont fait davantage avec moins. »",
      { after: "j:hardouin_croit", text: "« Hardouin a vu ceci ? » Tu dis oui. Elle hoche la tête. « Alors il ne dort pas non plus. Bien. Cela fait deux. »" },
      { after: "j:sait_coutume", text: "Elle regarde le coffret de fer, sur le prie-Dieu. Tu regardes le coffret de fer. Il y a un vieux moine, dans une tour pleine de livres, qui t'a lu ce matin trois articles." },
    ],
    choices: [{ back: "K11j_reine" }] },

  K11j_reine_verite: { act: "III", title: "Elle est comment ?", place: "palais", ambiance: "chateau", fx: { flag: "j:reine_sait_601", ep: ["perso", 800] },
    text: [
      "Tu le dis. Tu commences par elle, parce qu'elle n'écoutera que cela : que demain, à midi, la cloche sonnera onze, et que le douzième ne viendra pas. Que ce ne sera pas une chambre. Que ce sera la ville, la Foire, une lieue de champs, et qu'elle y sera, à sa fenêtre, avec l'enfant. Que cela durera soixante ans. Que tu es né{e} au bord.",
      "Elle te laisse parler. Elle ne dit pas que tu es fou{e}. Une femme qui a rempli son oratoire de pendules pour apprendre à arrêter l'heure a perdu le droit de trouver une chose impossible.",
      "Quand tu as fini, elle pose une seule question.",
      "« Et elle ? Dans votre pays. Vous l'avez vue ? Elle est comment ? »",
      "Tu dis ce que dit la Chronique, et ce que disent les pèlerins : que la Reine dort debout, dans la Chambre haute, sa fille dans les bras. Que l'enfant a huit ans. Qu'elle les a toujours.",
      "« Vivante. » Elle a fermé les yeux. « Soixante ans, et vivante. » Elle les rouvre. « Et chez vous, cette langueur. On en guérit ? »",
      "Tu ne peux pas mentir à cela. Tu dis que toutes les mères savent. Une écorce. Trois semaines.",
      "Elle se tait longtemps. Puis elle dit, très bas, avec une douceur effrayante : « Alors il ne m'a pas trompée. Il s'est trompé de chiffre. Soixante au lieu d'un. Et au bout, quelqu'un vient, avec une tisane. » Elle te regarde. « Vous venez de me dire que cela réussit. »",
      "Tu dis les quarante mille. Les mariniers, les laveuses, une noce sur des marches. Tu dis que leurs enfants, dehors, ont vieilli sans eux, et sont morts en les attendant. Tu dis une ferme, une petite de neuf ans, et la même à soixante-neuf, qui a passé sa vie à fabriquer des livres pour que quelqu'un vienne défaire ce midi-là.",
      "« Quarante mille. » Elle ne détourne pas les yeux. « Vous voulez que je vous dise que cela pèse plus qu'une enfant. Je sais compter. Cela pèse plus. » Sa main s'est fermée sur la bague. « Seulement, les quarante mille, je ne les ai pas portés. »",
      { if: ECORCE, text: "Elle regarde vers la porte, d'où vient une odeur amère. « Et vous me dites cela le jour où vous m'apportez l'écorce. Vous ne me rendez pas la chose facile. Je vous en estime davantage, et je vous en veux. »" },
    ],
    choices: [{ back: "K11j_reine" }] },

  K11j_modele: { act: "III", title: "Une tour de deux pieds", place: "palais", ambiance: "chateau", fx: { flag: "j:sait_fil", ep: ["histoire", 500] },
    text: [
      "« C'est lui qui me l'a faite, dit la Reine. Pour que je comprenne. Il a une patience d'ange, avec les ignorants. » Elle ôte la cloche de verre.",
      "C'est la Tour, en laiton, ouverte d'un côté comme une maison de poupée. On voit l'escalier, ses trois cent soixante marches fines comme des dents de peigne. En haut, sous la cloche, une chambre ronde, avec une fenêtre, une porte, et deux figurines d'ivoire : une grande, une petite. En bas, sous le pavé, une salle, un puits, et une tige d'acier qui traverse toute la Tour, de la cloche au puits.",
      "Elle touche un bouton. La tige descend, d'un cran. Un marteau gros comme une allumette frappe la cloche, qui tinte. « Voilà midi. » Elle pousse un petit levier, au bord du puits. La tige s'arrête. Et dans la chambre d'en haut, les deux figurines, qui tournaient lentement sur un pivot, s'arrêtent aussi. Tout le reste du jouet continue : un coq, sur le toit, bat des ailes.",
      "« Une chambre. Il me l'a montré cent fois. Le coq bat des ailes. » Elle remet le levier. Les figurines repartent.",
      "Tu regardes de plus près. Il y a, le long de la tige, de la chambre d'en haut jusqu'à la salle d'en bas, un fil. Un fil de laiton, mince comme un cheveu, tendu dans un tube. « Cela ? Le fil du timbre. Celui qui est en haut tire, une clochette sonne en bas. C'est ainsi que je lui dirai, demain, que nous sommes prêtes. Un coup : je suis entrée. Deux : fermez. » Elle hésite. « Il a dit qu'il y avait un troisième signal, que je n'aurais pas à donner. »",
      "Tu ne demandes pas lequel. Dans un jouet, le coq continue de battre des ailes. Le jouet a été fait par un homme qui sait très bien ce qu'il ne montre pas.",
    ],
    choices: [{ back: "K11j_reine" }] },

  K11j_lettres: { act: "III", title: "Le second article", place: "palais", ambiance: "chateau",
    text: [
      "Tu récites l'article, comme un vieux moine te l'a lu : un Conseil de garde, trois personnes, des lettres signées de sa main et scellées du grand sceau. Et le troisième : *en quelque temps qu'on les produise.*",
      "Elle t'écoute sans bouger. Puis elle va au prie-Dieu, et tourne la clef du coffret.",
      "Le grand sceau d'Aurime est un disque d'or, large comme une soucoupe, à manche d'ébène. Il représente une femme assise, tenant une horloge sur ses genoux. Il sert trois fois l'an.",
      "« Si je nomme un Conseil ce soir, et qu'il le sache, il ne part pas chasser. Il reste, il conteste, il fait la guerre. » Elle prend une feuille de vélin, dans le tiroir du prie-Dieu, une plume. « Il ne le saura donc pas. Les lettres dormiront. Vous dites : en quelque temps qu'on les produise. » Elle écrit debout, vite, d'une grande écriture droite. « *Mahaut, par la grâce de Dieu reine d'Aurime, étant en notre sens, à tous ceux qui ces présentes verront. Prévoyant l'empêchement où nous pourrions tomber, nommons pour la garde du royaume et de notre fille...* »",
      "La plume s'arrête. « Le capitaine Hardouin. Il est bête et il est sûr : dans un Conseil, il en faut un. Maître Anthelme, parce qu'il dit non. » Elle lève les yeux. « Il m'en faut un troisième. Je ne connais plus personne. Tous ceux que je connais ont un banc chez mon beau-frère. Nommez-le. »",
    ],
    choices: [
      { label: "« Barnabé Coudrier, Grand Maître des Horlogers. C'est le seul qui dise non à tout le monde. »", fx: { flag: ["monde:lettres_garde", "monde:garde_coudrier"], item: "lettres_patentes", ep: ["histoire", 1000] }, to: "K11j_lettres_fin" },
      { label: "« Laissez le nom en blanc, madame. Écrivez : *celui ou celle qui produira ces lettres.* »", fx: { flag: ["monde:lettres_garde", "monde:garde_porteur"], item: "lettres_patentes", ep: ["histoire", 1000] }, to: "K11j_lettres_fin" },
    ] },

  K11j_lettres_fin: { act: "III", title: "Le grand sceau", place: "palais", ambiance: "chateau",
    text: [
      { after: "monde:garde_coudrier", text: "« Coudrier. » Elle écrit le nom. « L'homme qui me refuse ma chambre depuis Pâques. Je l'ai haï. » La plume gratte. « C'est une bonne raison de le nommer : je suis sûre, au moins, qu'il ne fera pas ce que je veux. »" },
      { after: "monde:garde_porteur", text: "Elle te regarde. Elle comprend ce que tu demandes, et à qui tu penses, qui n'est pas né. « Un nom en blanc. Dans des lettres de régence. Mes légistes en mourraient. » Elle écrit. « *Et pour tiers, la personne, quelle qu'elle soit, qui produira ces présentes, le sceau entier.* Voilà. Je donne un tiers de mon royaume à quelqu'un que je ne verrai pas. On a fait des mariages plus sots. »" },
      "Elle signe. Elle allume, à la veilleuse rouge, un bâton de cire, et laisse tomber sur le vélin une flaque épaisse, couleur de sang. Elle y pose le disque d'or, de tout son poids, des deux mains, comme on appuie sur une plaie. Quand elle le relève, la femme assise est dans la cire, avec son horloge sur les genoux.",
      "« Scellées du grand sceau, et le sceau entier. » Elle plie le vélin en quatre. « Je ne peux pas les garder : demain, je serai où vous dites. Hardouin non plus : c'est lui qu'on fouillera. » Elle te les tend. « Vous savez un endroit où un papier attend. Vous me l'avez assez dit : vous venez d'un pays où l'on déterre. »",
      "Tu les prends. Le vélin est tiède, la cire encore molle sous ton pouce. Tu tiens un acte de la reine d'Aurime qui dépose d'avance trois Régents, dont une jeune femme de vingt-huit ans qui passera au-dessus d'une foire, sur un pont de bois, sans savoir d'où lui vient son titre.",
      { with: "josquin", text: "Josquin est resté contre la porte, les mains dans le dos. Il a vu sceller. « On m'a appris, dit-il d'une voix blanche, qu'un sceau se pose droit, sans bavure, et qu'on souffle dessus. » La Reine le regarde. Elle souffle sur la cire. C'est la première chose, depuis Pâques, qu'elle fait parce qu'un enfant le lui a dit." },
    ],
    choices: [{ back: "K11j_reine" }] },

  K11j_reine_demande: { act: "III", title: "Quelqu'un qui n'est à personne", place: "palais", ambiance: "chateau",
    text: [
      "Elle ne répond pas tout de suite. Elle va à la table, pose la main sur la cloche de verre.",
      { if: { has: "j:reine_sait_601" }, text: "« Vous m'avez dit ce que cela coûte. Je vous ai entendu{e}. Je monterai quand même. » Elle le dit sans défi. « Vous le saviez en entrant. Une mère à qui l'on dit : *dans soixante ans, elle vit, et on la guérit*, cette mère-là monte. Vous auriez mieux fait de me mentir. »" },
      { if: { not: { has: "j:reine_sait_601" } }, text: "« Demain, à onze heures, je monte à la Tour avec ma fille. À la demie, la porte se ferme en dedans. À midi, l'heure s'arrête pour nous deux. C'est décidé. Ne me demandez pas d'y renoncer : on me le demande depuis Pâques, et l'on ne m'offre rien à la place. »" },
      "« Voici ce que j'attends. Il y aura, sur le palier, devant ma porte, l'horloger, qui redescendra. Il y aura mes dames, qu'on fera redescendre. Il n'y aura plus personne. » Elle te regarde en face. « Je veux quelqu'un. Sur ce palier, de la demie jusqu'à midi. Quelqu'un qui ne soit ni au duc, ni à la Guilde, ni même à moi. Hardouin serait au Roi : il enfoncerait la porte au premier bruit. Vous, vous n'êtes à personne. »",
      "« Si quelque chose tourne mal, vous ne ferez rien. Vous regarderez. Et vous direz, après, ce que vous aurez vu, à qui voudra l'entendre. Je veux qu'il y ait eu quelqu'un. Voilà tout ce qu'une reine demande, la veille : un témoin qu'on n'ait pas payé. »",
      { after: "monde:reine_avertie", text: "« Et si mon beau-frère a fait changer le prix, comme vos papiers le disent : vous serez celui ou celle qui le saura. »" },
      "Elle ôte sa bague. Elle n'a pas à forcer : elle tombe du doigt. « Donnez-moi votre parole. Je vous donne ceci, pour qu'on vous laisse monter. Mes archers la connaissent. »",
    ],
    choices: [
      { label: "Prendre la bague : « J'y serai. »", fx: { flag: "j:promis_reine", secret: "j_reine", item: "bague_reine", regard: { reine: "allie" }, ep: ["perso", 800] }, to: "K11j_reine_promis" },
      { label: "« Je serai dans la Tour, madame. Pas sur votre palier : en bas, où cela se fait. »", fx: { flag: ["j:refuse_reine", "j:dit_bas"], ep: ["perso", 500] }, to: "K11j_reine_promis" },
      { label: "« Je ne vous aiderai pas à cela. Je vous ai dit pourquoi. »", hide: { not: { has: "j:reine_sait_601" } }, fx: { flag: "j:refuse_reine", regard: { reine: "distant" } }, to: "K11j_reine_promis" },
    ] },

  K11j_reine_promis: { act: "III", title: "La bague trop grande", place: "palais", ambiance: "chateau",
    text: [
      { after: "j:promis_reine", text: "La bague est d'or pâle, avec une petite pierre bleue, usée. Elle garde la chaleur d'un doigt. Elle est trop grande pour le tien aussi : tu la passes à ton pouce." },
      { after: "j:promis_reine", text: "« Bien. » La Reine a remis sa main sur la cloche de verre. « Vous venez de promettre votre aide à une femme qui va faire une chose que vous jugez mauvaise. Je le sais. Je ne vous en tiens pas quitte. » Elle a un regard qui passe à travers toi. « Si vous avez quelqu'un à qui vous devez la vérité, vous aurez du mal à lui écrire cela. »" },
      { after: "j:promis_reine", text: "Tu sens le Cahier contre ta poitrine. Il y a des choses qu'on y met tout de suite, et d'autres qu'on garde une borne ou deux." },
      { after: "j:dit_bas", text: "« En bas. » Elle répète le mot. « Où cela se fait. » Elle remet sa bague, qui tourne. « Vous savez donc où cela se fait. Lui ne me l'a jamais montré que dans un jouet. » Elle réfléchit. « Soit. J'aurai eu ma réponse : il y aura quelqu'un. Seulement, il sera du côté de la machine, et moi du côté de l'enfant. C'est peut-être la bonne place. Je ne sais plus très bien où sont les places. »" },
      { if: { all: [{ has: "j:refuse_reine" }, { not: { has: "j:dit_bas" } }] }, text: "Elle remet sa bague. Elle ne s'offense pas : elle a passé le temps de s'offenser. « Vous êtes la seconde personne à me dire non en face. L'autre est un vieil horloger à mains de forgeron, que je n'ai pas pu faire plier en trois mois. » Elle incline la tête. « Je monterai sans témoin. On dira ce qu'on voudra. On le dira de toute façon. »" },
      "Derrière la porte, quelque part dans la chaleur, une petite clochette d'argent tinte, une fois.",
      "La Reine a tourné la tête d'un seul mouvement, comme un chien de chasse. « Elle est éveillée. » Tout ce qu'elle avait de reine lui est tombé de la figure. « Elle a demandé, ce matin, qui était au cadran. Allez. Elle a un quart d'heure, les bons jours. Ne lui mentez pas non plus : elle le voit plus vite que moi. »",
    ],
    choices: [{ back: "K11j_reine" }] },

  // --- The child ---
  K11j_aelis: { act: "III", title: "La chambre aux cierges", place: "palais", ambiance: "chateau", fx: { flag: "j:aelis_vue", meet: "aelis", ep: ["perso", 600] },
    text: [
      "On t'ouvre. La chaleur te prend à la gorge, et la lumière aux yeux : il y a là deux cents cierges, sur des herses de fer, le long des quatre murs, et une femme en gris qui va de l'un à l'autre, des mouchettes à la main. La chambre n'a plus d'ombres. Elle sent le miel, à en avoir le cœur levé.",
      "Au milieu, un lit sans rideaux. Dans le lit, calée sur trois oreillers, une enfant.",
      "Elle est petite pour ses huit ans. Elle a les cheveux coupés court, pour la fièvre, et une figure de cendre claire, où les lèvres font une ligne grise. Ses mains sont à plat sur le drap, avec leurs dix ongles couleur d'ardoise. Mais les yeux sont ouverts. Ils sont bruns, très grands, et ils te regardent venir avec l'attention de quelqu'un qui a peu de temps à donner et qui a appris à ne pas le perdre.",
      "« C'est vous qui comptiez, dit Madame Aélis. Asseyez-vous sur le lit. On me défend qu'on s'assoie sur le lit. Je vous le permets : c'est moi l'héritière. »",
      "Sur la table de nuit, il y a une pendule d'enfant, en émail bleu, avec un oiseau. Elle est arrêtée. « Je l'ai arrêtée moi-même, dit-elle, pour voir. Maman croit que c'est la femme de chambre. Rien ne s'est passé. Je me suis endormie quand même, et réveillée quand même. Alors je ne crois pas que cela marche, d'arrêter les pendules. » Elle te regarde. « Vous, vous savez. Cela se voit. Les gens qui ne savent pas me parlent fort. »",
      { if: ECORCE, text: "Elle fait une petite grimace. « On m'a donné une tisane. Elle est abominable. Maître Anthelme pleurait en me la donnant, de l'œil gauche seulement. Je l'ai bue pour qu'il s'arrête. »" },
    ],
    choices: [
      { label: "« Je connais une fille de neuf ans qui ouvre toutes les pendules qu'on lui prête. »", hide: { not: { has: "monde:line_dedans" } }, fx: { flag: "j:aelis_line" }, to: "K11j_aelis_line" },
      { label: "« Tu as raison. Ce n'est pas la pendule qui arrête l'heure. »", fx: { flag: "j:aelis_franche" }, to: "K11j_aelis_dit" },
      { label: "Te taire, et la laisser dire", to: "K11j_aelis_dit" },
    ] },

  K11j_aelis_line: { act: "III", title: "Le droit de l'ouvrir", place: "palais", ambiance: "chateau",
    text: [
      "Tu lui racontes Line. Une ferme, trois noyers, une petite qui a démonté la pendule de la maison un jour de foin et l'a remontée avec une roue de reste. Une montre au ressort cassé, ouverte sur l'herbe de la Foire, et la figure qu'elle a faite en voyant le dedans.",
      "Madame Aélis t'écoute, les yeux agrandis. C'est la première fois, depuis que tu es entré{e}, qu'elle a l'air d'avoir huit ans.",
      "« Une roue de reste ! Et elle marchait ? » Tu dis : elle avançait d'un quart d'heure par jour. L'enfant rit. C'est un petit rire sans souffle, qui lui fait mal, et qu'elle ne retient pas. La femme en gris a lâché ses mouchettes.",
      "« Je veux la voir. Elle est en ville, pour la fête ? Qu'elle vienne. Dites à Madame de Sérigny que je l'ordonne. Je lui prêterai ma pendule. Elle a le droit de l'ouvrir. » Elle retombe sur l'oreiller, à bout. « Personne n'ouvre jamais rien devant moi. On m'apporte tout fermé. »",
    ],
    choices: [{ label: "Lui promettre de le dire", fx: { flag: "j:aelis_line_promis" }, to: "K11j_aelis_dit" }] },

  K11j_aelis_dit: { act: "III", title: "Ce qu'elle veut qu'on dise", place: "palais", ambiance: "chateau", fx: { flag: "j:aelis_dit" },
    text: [
      { after: "j:aelis_franche", text: "« Non, dit-elle. Je le savais. » Elle a l'air soulagée, comme quelqu'un à qui l'on rend enfin la monnaie exacte." },
      "Elle regarde la femme en gris, qui s'est remise à moucher, loin. Elle baisse la voix.",
      "« Demain, on me monte à la Tour. On m'a dit que c'était pour entendre midi de plus près. J'ai huit ans, pas quatre. » Ses doigts gris jouent avec le drap. « J'ai écouté aux portes. Enfin, on parle devant moi quand on croit que je dors, et je dors beaucoup, alors on parle beaucoup. Il y a un monsieur avec deux yeux qui ne vont pas ensemble. Il dit à maman qu'on va s'arrêter, elle et moi, et qu'on repartira quand je serai guérie. »",
      "« Maman croit que j'ai peur de mourir. » Elle dit le mot simplement, comme on dit *dîner*. « Je n'ai pas tellement peur. J'ai sommeil, c'est tout, et un jour j'aurai plus sommeil. Ce qui me fait peur, c'est qu'elle s'arrête avec moi. Elle a trente ans. Elle ne mange plus. Elle a mis vingt horloges dans son oratoire. Si elle s'arrête pour moi, elle ne fera plus jamais rien d'autre. »",
      "Elle te prend le poignet. Sa main ne pèse rien, et elle est froide.",
      "« Dites-le-lui, vous. Moi, quand je le dis, elle se met à moucher les cierges elle-même, et elle n'entend plus. Dites-lui que je veux bien boire la tisane abominable. Que je veux bien dormir. Mais que je ne veux pas qu'on m'arrête comme la pendule. On ne m'a pas demandé. » Sa voix s'en va. « C'est moi l'héritière. On devrait me demander. »",
      "Ses yeux se ferment au milieu du mot. Elle s'est endormie d'un coup, comme une lampe qu'on souffle, et sa main est restée sur ton poignet. La femme en gris vient la reprendre, doucement, doigt par doigt.",
    ],
    choices: [{ back: "K11j_antichambre" }] },

  K11j_reine_aelis: { act: "III", title: "On ne m'a pas demandé", place: "palais", ambiance: "chateau",
    text: [
      "Tu le lui répètes. Tu n'arranges rien. *Ce qui me fait peur, c'est qu'elle s'arrête avec moi. Je ne veux pas qu'on m'arrête comme la pendule. On ne m'a pas demandé.*",
      "La Reine a fait un pas vers la porte, pour aller moucher des cierges. Elle s'en est aperçue. Elle s'est arrêtée, la main en l'air.",
      "« Elle a dit cela. » Ce n'est pas une question. « À vous. En un quart d'heure. » Elle se retourne, et tu vois enfin ce qu'elle garde depuis Pâques sous sa voix nette : une femme de trente ans, épouvantée, qui n'a pas dormi une nuit et qui s'est bâti une tour de laiton pour ne pas regarder un lit.",
      { if: ECORCE, text: "Elle s'assoit. Elle s'assoit, elle qui restait debout pour ne pas dormir, sur le bord du prie-Dieu, entre le coffret et les trois papiers. « Elle veut bien boire la tisane. » Elle rit, d'un rire qui se casse. « Elle veut bien. Elle me fait cette grâce. »" },
      { if: ECORCE, text: "Elle reste longtemps la figure dans les mains. Quand elle la relève, elle a pris sa décision, et elle a dix ans de moins, ou de plus. « Je monterai demain à la Tour, puisque le peuple m'attend à la fenêtre et qu'une reine ne manque pas un Grand Midi. J'y monterai pour entendre midi. Tout entier. Les douze. » Elle regarde la petite tour, sous sa cloche. « Je dirai ce soir à l'horloger que je renonce à sa chambre. Je courrai avec Anthelme. Si je perds, j'aurai perdu avec elle, éveillée, et elle l'aura voulu. »" },
      { if: ECORCE, text: "« Il ne sera pas content. » Elle a un sourire mince. « Je me demande ce que fait un homme comme celui-là, quand une reine lui retire sa permission la veille. J'ai idée qu'il s'en passe. »" },
      { if: { not: ECORCE }, text: "Elle reste debout. Elle s'appuie seulement au mur, de l'épaule, comme on reprend haleine. « Elle a huit ans. » Sa voix tremble, et tient. « On ne demande pas son avis à une enfant qui se noie. On la tire. Elle me le reprochera dans un an, ou dans soixante : je veux bien. Je veux qu'elle soit là pour me le reprocher. »" },
      { if: { not: ECORCE }, text: "« Si vous aviez l'écorce dans votre poche, je vous écouterais. Vous avez un nom, et un an de mer. » Elle se redresse. « Vous lui direz que sa mère a entendu. Ce sera vrai. Je monte quand même. »" },
    ],
    choices: [
      { label: "Laisser la Reine à sa décision", hide: { not: ECORCE }, fx: { flag: "j:reine_tient", ep: ["perso", 400] }, to: "K11j_reine" },
      { label: "Laisser la Reine à sa décision", hide: ECORCE, fx: { flag: "monde:reine_renonce", regard: { reine: "redevable" }, ep: ["histoire", 1000] }, to: "K11j_reine" },
    ] },

  // --- None ---
  K11j_none: { act: "III", title: "None", place: "palais", ambiance: "chateau",
    text: [
      "Tu sors de la chaleur. Le jardin a l'air froid, après, et sombre, comme toutes les choses éclairées par un seul soleil.",
      "Trois coups, là-haut. La Patiente dit none. De l'autre côté du mur, sur l'esplanade, une cloche maigre lui répond, grêle, pressée : celle de la Guilde, qui n'a le droit de sonner que la soupe et les séances.",
      { after: "monde:lettres_garde", text: "Tu as contre la peau un vélin plié en quatre, avec une femme assise dans la cire. Le Cahier ne le prendra pas : il est trop épais d'un sceau. Il lui faut de la terre." },
      { after: "j:promis_reine", text: "Tu as à ton pouce une bague trop grande, avec une petite pierre bleue." },
      { after: "monde:reine_renonce", text: "Derrière toi, dans une chambre sans ombres, une enfant dort, une tisane dans le ventre, et une femme a décidé d'entendre douze coups. De l'autre côté de la place, sept hommes vont voter une chambre dont elle ne veut plus. Ils ne le savent pas encore. L'un d'eux s'en moque." },
      { after: "j:reine_tient", text: "Derrière toi, dans une chambre sans ombres, une enfant dort. Elle t'a chargé{e} d'une commission. Tu l'as faite. Elle n'a pas suffi." },
      "Le cadran aux tortues est à dix pas. Entre la tortue du nord et le socle, là où le style fait de l'ombre à midi, la mère Sauge a une plate-bande de thym qu'elle bine tous les jours : la terre y est meuble comme de la farine.",
      { with: "josquin", text: "Josquin regarde vers le portail de la Guilde, par-dessus le mur. Il a les poings fermés dans ses poches. « Ils entrent, dit-il. Je connais leur pas. Rouet d'abord, il souffle. Puis mon maître : il traîne le pied gauche quand il est en colère. » Il écoute. « Il le traîne. »" },
    ],
    choices: [{ label: "T'agenouiller dans le thym", to: "B11", big: true }] },
});

module.exports = { passages: P, extras: {
  people: {
    reine: { name: "La reine Mahaut", f: true, aka: ["la Reine", "la reine Mahaut", "Sa Majesté"], face: { age: "adulte", skin: "clair", hair: "brun", coif: "milong", eyes: "lourds", iris: "gris", nose: "fin", lips: "fines", shape: "allonge" },
      aspect: { allure: "trente ans, maigre, toujours debout", habits: "du noir, sans coiffe", signe: "tourne une bague trop grande" }, qui: "Reine d'Aurime, veuve, mère d'Aélis.", desc: "Reine d'Aurime, veuve. Elle a rempli son oratoire d'horloges pour apprendre à arrêter l'heure de sa fille. Elle sait compter, et elle n'a porté qu'une enfant." },
    aelis: { name: "Madame Aélis", f: true, aka: ["Madame Aélis", "Aélis", "l'héritière"], face: { age: "enfant", skin: "clair", hair: "brun", coif: "court", eyes: "ronds", iris: "brun", nose: "retrousse", lips: "fines", shape: "ovale" },
      aspect: { allure: "huit ans, petite, calée sur trois oreillers", habits: "une chemise blanche", signe: "les ongles couleur d'ardoise" }, qui: "Héritière d'Aurime.", desc: "Héritière d'Aurime, malade de la langueur grise. Elle écoute quand on la croit endormie. Elle trouve qu'on devrait lui demander." },
  },
  items: {
    lettres_patentes: { name: "Lettres patentes de la reine Mahaut", kind: "divers", keep: true, price: 0, aged: "lettres_patentes_vieilles", desc: "Un vélin plié en quatre, signé *Mahaut*, scellé du grand sceau d'Aurime en cire rouge : une femme assise, une horloge sur les genoux. Elles nomment un Conseil de garde de trois personnes « pour la garde du royaume et de notre fille ». Elles valent en quelque temps qu'on les produise, le sceau entier." },
    lettres_patentes_vieilles: { name: "Lettres patentes de la reine Mahaut", kind: "divers", keep: true, price: 0, desc: "Un vélin jauni, cassant aux plis, signé *Mahaut* et daté du 20 juin 541. La cire du grand sceau a bruni comme du vieux sang, mais la femme assise y est entière, son horloge sur les genoux. Soixante ans de terre n'en ont pas ôté un trait." },
    bague_reine: { name: "Bague de la Reine", kind: "divers", keep: true, price: 0, desc: "Un anneau d'or pâle, à petite pierre bleue, usé, trop grand pour tous les doigts. Les archers de la Reine le connaissent." },
  },
} };
