// La Super Retraite · act III, Barnabé (Sunday 31 December 1899). The baguette fetched at dawn (item); Levain's men in
// the alley if they know (levain:sait: fight, talk or run; baguette:volee, then a chase: baguette:reprise); the
// afternoon (hub, three visits): the father (papa=temoin), Augustine and the Committee (comite=doute), Mie who counts
// (caisse:vide) and has an idea (b3:mie), the banker's offer (b:offre); then ten at night at the Salle des Fêtes with
// Ernestine (aparte) and the plan for midnight: b3 = presente | devoile | vente | pain | associe. Ends with ch3:barnabe.
var DEUX = { has: "baguettes=deux" };
var APREM = [{ seen: "B3_papa" }, { seen: "B3_augustine" }, { seen: "B3_mie" }, { seen: "B3_offre" }];
var A_BAGUETTE = { not: { all: [{ has: "baguette:volee" }, { not: { has: "baguette:reprise" } }] } };
module.exports = {
  B3_aube: { act: "III", title: "Le dernier matin du siècle", place: "forge",
    fx: { item: "baguette" },
    text: [
      "Le 31 décembre 1899, les cloches des trois églises de Mirevaux sonnent la première messe à six heures, six heures deux et six heures cinq, comme chaque dimanche, et la ville se réveille dans un vacarme de bronze qui fait trembler les vitres.",
      "Tu n'as pas ouvert le fournil. C'est la première fois en six ans. Mie a collé sur la porte un écriteau qu'elle a écrit elle-même : *Fermé pour cause de siècle.*",
      "Tu vas à la forge. Ernestine t'ouvre, en tablier, les yeux rouges de n'avoir pas dormi. Sur l'enclume, sur un chiffon propre, la baguette d'acier blanc a fini de refroidir. Elle ne chante plus. Elle brille, simplement, dans le jour gris, avec une sorte de patience.",
      { if: DEUX, text: "La seconde, la n° 2, est déjà enveloppée dans le vieux tablier du père d'Ernestine, cachée sous l'enclume. « Celle-là reste ici, dit Ernestine. Elle n'est pas à montrer. » Tu ne discutes pas." },
      "Tu prends la n° 1. Elle pèse dans tes mains comme un nouveau-né qui serait en métal. Tu l'enveloppes dans ton torchon, tu la serres sous ton bras, et tu repars vers la ville. À dix heures du soir, il faudra la remettre à la Salle des Fêtes. D'ici là, tu ne la lâches plus.",
    ],
    choices: [{ label: "Rentrer par la ruelle de la Grande Boulangerie, c'est plus court", to: "B3_ruelle" }] },

  B3_ruelle: { act: "III", title: "La ruelle", place: "levain",
    branch: [{ if: { has: "levain:sait" }, to: "B3_mitrons" }, { to: "B3_ruelle_calme" }] },
  B3_ruelle_calme: { act: "III", title: "La ruelle", place: "levain",
    text: [
      "La ruelle derrière la Grande Boulangerie est étroite, glacée, encombrée de sacs vides et de tonneaux. La machine à vapeur dort ; c'est dimanche. Une fenêtre s'ouvre au premier étage. Victorin Levain, en robe de chambre de velours grenat, se penche pour respirer l'air du matin.",
      "Il te voit passer, ton torchon sous le bras. Il ne sait pas ce qu'il y a dedans. Il croit que c'est du pain. « Croûte ! crie-t-il. Tu concours avec ça ? Avec du pain ? » Il rit. Il referme la fenêtre.",
      "Tu continues ton chemin. Il y a des jours où l'ignorance des autres est le plus sûr des coffres-forts.",
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },
  B3_mitrons: { act: "III", title: "Les mitrons", place: "levain",
    text: [
      "La ruelle derrière la Grande Boulangerie est étroite, glacée, encombrée de sacs vides et de tonneaux. Au milieu, trois silhouettes en tablier blanc te barrent le passage. Trois mitrons de Levain, des pelles à enfourner à la main, comme des hallebardiers.",
      "Le plus grand, un rouquin à la mâchoire carrée, s'avance. « Monsieur Levain voudrait voir ce que tu as sous le bras, Croûte. Il dit qu'une forgeronne fait du pain, et qu'un boulanger fait du fer, et que ça n'est pas dans l'ordre des choses. »",
      "Il tend la main. Derrière lui, les deux autres lèvent leurs pelles.",
      { if: { has: "b:garde_goute" }, text: "Tu as encore dans la mâchoire le souvenir du pain de garde de Levain, goûté l'avant-veille : une croûte de chêne, une mie de mortier. Un homme qui fait un pain pareil n'a aucune idée de ce qu'il y a dans ton torchon. Il sait seulement qu'il le veut." },
    ],
    choices: [
      { label: "Te battre", to: "B3_combat" },
      { label: "« Les gars, combien Levain vous paie-t-il l'heure ? Moi, je sais ce qu'il vous vole. »", test: { dom: "social", diff: -10, label: "Parler aux mitrons" },
        win: { fx: { flag: "baguette:gardee", regard: { levain: "rancunier" }, ep: 200 }, to: "B3_mitrons_convaincus" }, lose: { fx: { flag: "baguette:volee", drop: "baguette" }, to: "B3_poursuite" } },
    ] },
  B3_combat: { act: "III", title: "Les pelles", place: "levain",
    combat: { title: "La ruelle", enemies: [{ id: "mitron", n: 1 }], terrain: "ouvert",
      win: { fx: { flag: "baguette:gardee", ep: 200 }, to: "B3_mitrons_vaincus" },
      lose: { fx: { flag: "baguette:volee", drop: "baguette" }, to: "B3_poursuite" } },
    text: [
      "Tu poses ton torchon contre le mur, derrière toi, et tu retrousses tes manches. Le rouquin fait tourner sa pelle comme un tambour-major sa canne. Les deux autres restent en arrière : ils ont décidé, sans se consulter, que l'honneur de la Grande Boulangerie reposait sur un seul homme, et que cet homme n'était pas eux.",
    ] },
  B3_mitrons_vaincus: { act: "III", title: "Les pelles", place: "levain",
    text: [
      "Le rouquin frappe le premier, avec sa pelle, comme on enfourne. Tu esquives, tu attrapes le manche, tu tires. Quarante ans de pétrin dans les bras de ton père, six ans dans les tiens : il n'y a pas, à Mirevaux, de mitron qui gagne à tirer contre un boulanger. Le rouquin part en avant, glisse sur le pavé gelé, et s'assoit dans un tonneau vide avec une dignité de sénateur.",
      "Les deux autres se regardent. Puis ils regardent leur chef dans son tonneau. Puis ils posent leurs pelles contre le mur, très soigneusement, comme on range des outils un dimanche.",
      "Tu passes. Ta baguette n'a pas quitté ton bras.",
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },
  B3_mitrons_convaincus: { act: "III", title: "Le salaire", place: "levain",
    text: [
      "Tu leur dis ce que tu sais du métier. Trois mille pains par nuit, douze heures debout devant une machine qui ne dort jamais, quinze sous la nuit, et le patron qui se lève à onze heures en robe de chambre. Tu leur dis qu'un mitron, chez toi, mange le pain qu'il fait.",
      "Le rouquin baisse sa pelle. « Quinze sous, répète-t-il. Il nous en avait promis vingt.",
      "— À vingt, dis-tu, il en faisait combien, des pains ?",
      "— Deux mille. » Il réfléchit, et l'on voit l'arithmétique avancer sur son visage comme un nuage. « Il a ajouté mille pains, et il a enlevé cinq sous. »",
      "Les trois mitrons s'écartent. Le rouquin crache par terre, du côté de la Grande Boulangerie. « On n'a rien vu, Croûte. Bonne année. »",
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },
  B3_poursuite: { act: "III", title: "La poursuite", place: "levain", urgent: 10,
    text: [
      "Une pelle t'atteint aux jambes. Tu tombes sur les pavés gelés. Quand tu te relèves, le rouquin court déjà vers le bout de la ruelle, ton torchon sous le bras, et la baguette d'acier qui dépasse et lance des éclairs à chaque foulée.",
      "Il tourne vers la porte de service de la Grande Boulangerie. S'il la passe, la baguette est perdue : Levain aura un pain éternel, et toi une ruelle vide.",
    ],
    choices: [
      { label: "Courir", via: "court", test: { dom: "nature", diff: -10, label: "Course sur le verglas" },
        win: { fx: { flag: "baguette:reprise", item: "baguette" }, to: "B3_poursuite_fin" }, lose: { to: "B3_poursuite_fin" } },
      { label: "Lui lancer le Fondant Impérial dans les jambes", hide: { not: { item: "couteau_beurre" } }, via: "beurre", fx: { flag: "baguette:reprise", item: "baguette", drop: "couteau_beurre" }, to: "B3_poursuite_fin" },
      { label: "Crier « Au voleur ! »", via: "crie", timeout: true, to: "B3_poursuite_fin" },
    ] },
  B3_poursuite_fin: { act: "III", title: "La porte de service", place: "levain",
    text: [
      { via: "court", outcome: "win", text: "Tu cours. Le verglas est traître, mais tu as couru toute ta vie sur des pavés à quatre heures du matin avec des paniers de pain. Tu rattrapes le rouquin à trois pas de la porte, tu l'attrapes par le tablier, et il te lâche la baguette comme on lâche un fer rouge. Tu la serres contre toi. Elle est froide, et elle a l'air, si c'est possible, soulagée." },
      { via: "court", outcome: "lose", text: "Tu cours. Le verglas est traître : tu glisses au coin d'un tonneau, tu repars, tu glisses encore. Quand tu arrives devant la porte de service, elle claque sous ton nez. Tu entends un verrou. Puis un deuxième. Puis le rire de Victorin Levain, au premier étage." },
      { via: "beurre", text: "Tu sors le Fondant Impérial de ta poche et tu le lances, à ras du sol, comme un palet. Il glisse sur le verglas, file entre les jambes du rouquin, se brise contre le pavé en mille éclats de beurre salé. Le rouquin pose le pied dessus. Pendant une seconde, il vole. La baguette aussi. Tu la rattrapes au vol. Le rouquin, lui, atterrit dans un tas de sacs vides. Le Fondant Impérial est mort au champ d'honneur." },
      { via: "crie", text: "Tu cries « Au voleur ! » dans une ruelle vide, un dimanche, à sept heures du matin. Deux volets s'ouvrent. Une vieille femme demande ce qu'on a volé. « Du pain ! » cries-tu. Elle referme son volet, avec la dignité de quelqu'un à qui on ne la fait pas. La porte de service de la Grande Boulangerie claque. Un verrou. Puis un deuxième." },
      { if: { all: [{ has: "baguette:volee" }, { not: { has: "baguette:reprise" } }, DEUX] }, text: "Tu restes devant la porte, les poings serrés. Puis tu penses à la forge, sous l'enclume, au vieux tablier du père d'Ernestine. La n° 2. Celle qui n'était pas à montrer. Il faudra la montrer." },
      { if: { all: [{ has: "baguette:volee" }, { not: { has: "baguette:reprise" } }, { not: DEUX }] }, text: "Tu restes devant la porte, les poings serrés, dans le froid. Il n'y en avait qu'une. Elle est de l'autre côté de cette porte, chez un homme qui n'a jamais su faire chanter une croûte, et qui va la présenter ce soir comme la sienne." },
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },

  B3_fournil: { act: "III", title: "Le dernier jour", place: "fournil", hub: true, backName: "le dernier jour",
    text: [
      { first: true, text: "Le fournil est froid. Le four éteint a l'air d'une église un lundi. Mie est assise sur le pétrin, les jambes pendantes, et elle compte les heures qui restent avant minuit sur ses doigts, en recommençant chaque fois parce qu'il n'y a pas assez de doigts." },
      { first: true, if: A_BAGUETTE, text: "Tu poses la baguette d'acier sur la table à façonner. Mie la regarde longtemps. Puis elle tend un doigt et la touche, très doucement, comme on touche un animal endormi." },
      { again: true, text: "L'après-midi avance. Dehors, on accroche des lampions jusqu'aux réverbères. Les cloches sonnent les vêpres à trois heures différentes." },
    ],
    choices: [
      { label: "Aller voir ton père", hide: { seen: "B3_papa" }, to: "B3_papa" },
      { label: "Aller voir Augustine Salée", hide: { seen: "B3_augustine" }, to: "B3_augustine" },
      { label: "Parler avec Mie", hide: { seen: "B3_mie" }, to: "B3_mie" },
      { label: "Ouvrir à Isidore, qui frappe à la porte du fournil", hide: { seen: "B3_offre" }, to: "B3_offre" },
      { label: "Partir pour la Salle des Fêtes : il est dix heures du soir", if: { count: APREM, min: 3 }, why: "Il reste du jour.", to: "B3_salle", big: true },
    ] },

  B3_papa: { act: "III", title: "Les quelques mots", place: "fournil",
    text: [
      "Ton père est chez lui, rue des Tilleuls, devant le miroir de l'armoire. Il essaie sa redingote du dimanche, la rose à la boutonnière, et le chapeau. Il ôte le chapeau. Il le remet. Il l'ôte encore.",
      { if: { has: "papa=temoin" }, text: "Sur la commode, une feuille de papier couverte de son écriture ronde de boulanger. Il a écrit ses *quelques mots*. Il te les lit. Ils parlent d'un billet de cinquante francs, d'un coin déchiré, d'une empreinte de pouce, et de quarante ans passés à savoir ce qu'il y avait dans le pain. Sa voix tremble au début, puis plus du tout." },
      { if: { has: "papa=temoin" }, text: "« Je les dirai à minuit moins vingt, dit-il. Entre l'hommage et le Pain Éternel. Monsieur Sorbier m'a donné trois minutes. » Il plie la feuille en quatre. « Trois minutes, c'est assez pour une vérité. Pour un mensonge, il en faut beaucoup plus. »" },
      { if: { all: [{ has: "papa=sait" }, { not: { has: "papa=temoin" } }] }, text: "Il te voit dans le miroir. « Monsieur Sorbier m'a demandé quelques mots, ce soir, dit-il. Pour l'hommage. » Il regarde le chapeau. « Je ne sais plus quels mots. »" },
      { if: { has: "papa=ignore" }, text: "Il te voit dans le miroir et sourit. « Ce soir, le visage du siècle sera sur l'estrade, dit-il. Avec une rose. » Il est heureux. Il est si heureux que tu as mal au ventre." },
    ],
    choices: [
      { label: "« Dis-leur la vérité, papa. Tu as trois minutes. »", hide: { not: { all: [{ has: "papa=sait" }, { not: { has: "papa=temoin" } }] } }, test: { dom: "social", diff: 0, label: "Parler à son père" },
        win: { fx: { set: { papa: "temoin" }, regard: { anselme: "allie" } }, to: "B3_papa_fin" }, lose: { to: "B3_papa_fin" } },
      { label: "Lui dire, enfin, pour le billet", hide: { not: { has: "papa=ignore" } }, fx: { set: { papa: "sait" }, regard: { anselme: "distant" } }, to: "B3_papa_fin" },
      { label: "Lui arranger sa rose, et le laisser à son miroir", to: "B3_papa_fin" },
    ] },
  B3_papa_fin: { act: "III", title: "Le miroir", place: "fournil",
    text: [
      { if: { has: "papa=temoin" }, text: "Ton père met son chapeau. Cette fois, il le garde. Dans le miroir de l'armoire, il y a un vieux boulanger en redingote, qui a l'air de savoir ce qu'il y a dans le pain." },
      { if: { has: "papa=sait" }, text: "Ton père s'assoit sur le lit, le chapeau sur les genoux. Il le regarde comme on regarde une chose qu'on a achetée trop cher. « Je verrai, dit-il. Je verrai ce soir. »" },
      { if: { has: "papa=ignore" }, text: "Tu redresses sa rose. Il te tapote la joue, comme quand tu avais six ans. Tu repars avec ta vérité dans la poche, à côté de ton torchon." },
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },

  B3_augustine: { act: "III", title: "Le Comité", place: "cremerie",
    text: [
      { if: { has: "b1:augustine_doute" }, text: "Tu repenses à ta question de l'avant-veille, au comptoir de la crèmerie, entre deux mottes : et si la Caisse ne pouvait pas payer tout le monde ? Augustine avait ri. Elle avait ri une seconde de trop." },
      "La crèmerie Salée est fermée, dimanche oblige, mais la porte de derrière est ouverte, et dans l'arrière-boutique, entre les barattes, Augustine Salée compte des lanternes.",
      { if: { has: "comite=doute" }, text: "« Quarante lanternes, dit-elle sans se retourner. Une par membre du Comité. À minuit, après le discours, nous demanderons à voir le coffre. Tous ensemble. Avec nos lanternes. » Elle se retourne. Elle a les yeux de quelqu'un qui n'a pas dormi depuis ta question. « Si l'argent est là, je présenterai mes excuses à Monsieur Sorbier à genoux. Si l'argent n'est pas là… » Elle ne finit pas sa phrase. Elle n'en a pas besoin." },
      { if: { has: "comite=confiance" }, text: "« Quarante lanternes, dit-elle. Une par membre du Comité. Pour la procession, après minuit, quand on accompagnera le Pain Éternel jusqu'au coffre. » Elle t'en tend une. « Tu porteras la tienne, Barnabé. Et tu arrêteras de voir des trous partout. »" },
      { if: { all: [{ not: { has: "comite=doute" } }, { not: { has: "comite=confiance" } }] }, text: "« Quarante lanternes, dit-elle. Une par membre du Comité. » Elle les aligne sur une planche. « Ta question d'hier, Barnabé, je l'ai écrite dans mon carnet. Je la relis depuis. Personne n'a jamais vu l'argent de la Caisse. » Elle allume une lanterne, la regarde brûler. « Je n'aime pas les questions qu'on relit. »" },
    ],
    choices: [
      { label: "« Demandez à voir le coffre, Augustine. À minuit. Tous ensemble. »", hide: { has: "comite=doute" }, test: { dom: "social", diff: -10, label: "Convaincre la crémière" },
        win: { fx: { set: { comite: "doute" }, regard: { augustine: "allie" } }, to: "B3_augustine_fin" }, lose: { to: "B3_augustine_fin" } },
      { label: "Prendre une lanterne et la remercier", to: "B3_augustine_fin" },
    ] },
  B3_augustine_fin: { act: "III", title: "Les lanternes", place: "cremerie",
    text: [
      { if: { has: "comite=doute" }, text: "Augustine Salée allume une deuxième lanterne à la flamme de la première. « Quarante lanternes, dit-elle. Ça éclaire un coffre, quarante lanternes. Ça éclaire même un coffre vide. »" },
      { if: { not: { has: "comite=doute" } }, text: "Augustine Salée te donne une lanterne. Elle te regarde partir. Elle a l'air de quelqu'un qui aimerait beaucoup être sûre de quelque chose." },
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },

  B3_mie: { act: "III", title: "Ce que compte Mie", place: "fournil",
    text: [
      "Mie descend du pétrin. Elle a sur les genoux une ardoise, sur laquelle elle a écrit à la craie, en colonnes, tout ce que vous savez. Elle te la montre comme un devoir.",
      { if: { clues: "M", min: 3 }, text: "*Un billet qui revient. Des petites lettres. Un coffre où il y a une chaise. Un prix écrit avant le pain. Deux billets de train. Une lettre qui dit « peu importe l'objet ». Un registre avec un zéro gratté.* Elle a tiré un trait en bas, comme sous une addition. Sous le trait, elle a écrit : *0.* « Il n'y a rien, dans la Caisse, dit-elle. Il n'y a jamais rien eu. On paie les vieux avec l'argent des jeunes, et quand il n'y aura plus de jeunes, Monsieur Sorbier sera dans le train. »" },
      { if: { not: { clues: "M", min: 3 } }, text: "Les colonnes sont courtes. Il manque des choses. Mie fronce les sourcils. « On ne sait pas assez, dit-elle. On sait qu'il y a quelque chose qui ne va pas, mais on ne sait pas quoi. C'est comme une pâte qui ne lève pas : on sait que c'est raté, on ne sait pas si c'est la farine ou le levain. »" },
      "Puis elle efface l'ardoise avec sa manche, et elle dit, d'une voix différente, une voix de l'avenir :",
      "« Mille neuf cent douze. C'est le nombre de cotisants. » Elle regarde le four éteint. « Si on rallumait le four à six heures, avec la farine de l'hiver, et les mitrons qui ne travaillent pas le dimanche, on pourrait faire mille neuf cent douze baguettes pour minuit. Une par cotisant. Une vraie. Qui se mange. »",
      "Elle hausse les épaules. « Ils auraient au moins ça. »",
    ],
    choices: [{ label: "Regarder le four éteint, longtemps", fx: { flag: "b3:mie" }, to: "B3_mie_fin" }] },
  B3_mie_fin: { act: "III", title: "Le four éteint", place: "fournil",
    text: [
      { if: { clues: "M", min: 3 }, text: "Tu prends l'ardoise effacée et tu y écris toi-même, à la craie, en grosses lettres : *0.* Tu la poses contre le pétrin. Le zéro te regarde. Il a la forme d'un trou, d'une bouche, d'un four." },
      "Mille neuf cent douze baguettes. La farine de l'hiver est dans la réserve. Le four tient soixante pains par fournée. Trente-deux fournées, en six heures, avec des bras. C'est fou. C'est faisable. C'est le genre de calcul qu'on fait la veille d'un siècle.",
    ],
    choices: [
      { label: "Reprendre ta journée", hide: { not: { clues: "M", min: 3 } }, fx: { flag: "caisse:vide" }, to: "B3_fournil" },
      { label: "Reprendre ta journée", hide: { clues: "M", min: 3 }, to: "B3_fournil" },
    ] },

  B3_offre: { act: "III", title: "L'offre", place: "banque",
    fx: { meet: ["isidore", "sorbier"] },
    text: [
      { if: { has: "b:isidore" }, text: "Avant-hier, à la gare, tu as demandé à Isidore si son maître partait en voyage. Il ne t'a pas répondu. Il t'a regardé comme on regarde quelqu'un qui a posé la bonne question au mauvais moment." },
      "Isidore se tient sur le seuil du fournil, ganté, impassible. « Monsieur Sorbier vous attend à son bureau, Monsieur Croûte. Maintenant, s'il vous plaît. »",
      "Le bureau de Sorbier sent le feu d'olivier et le cigare. Le banquier ne s'assoit pas. Il marche devant la cheminée, les mains derrière le dos.",
      "« Monsieur Croûte, je serai franc, ce qui m'arrive rarement, et je vous prie d'apprécier le cadeau. Je sais ce que vous avez coulé cette nuit au faubourg. Une baguette d'acier blanc, sur votre pain. C'est admirable. Elle gagnera, naturellement. » Il sourit. « Mais je voudrais vous offrir davantage que mille francs. »",
      { if: { has: "b1:sorbier_question" }, text: "« Vous m'avez demandé, l'autre jour, d'où venait l'argent des retraites, ajoute-t-il. Je vous réponds aujourd'hui : il vient de la confiance. Et la confiance, Monsieur Croûte, vient de visages comme le vôtre. »" },
      "Il pose sur le bureau un document épais, sur papier vergé, avec un sceau de cire. *Acte d'association. Caisse de la Super Retraite, Sorbier, Croûte & Chrome.*",
      "« Je pars ce soir pour la capitale, quelques semaines, pour affaires. Il faudra quelqu'un pour tenir la Caisse en mon absence. Quelqu'un que la ville aime. Le fils du visage du siècle, et l'artiste qui a fait le Pain Éternel. Vous signerez les enveloppes du vendredi. Vous serez associés. Votre fournil sera à vous, sans dette. » Il fait une pause. « Plus d'argent que vous n'en avez jamais eu avant. »",
      "Isidore, près de la porte, regarde le plafond. Son visage ne bouge pas. Mais ses gants, croisés sur son ventre, se serrent un peu.",
    ],
    choices: [
      { label: "Signer", fx: { flag: "b:offre", regard: { sorbier: "cordial", isidore: "trahi" } }, to: "B3_offre_fin" },
      { label: "« Je fais du pain, Monsieur Sorbier. Pas des enveloppes. »", fx: { regard: { sorbier: "mefiant", isidore: "cordial" } }, to: "B3_offre_fin" },
    ] },
  B3_offre_fin: { act: "III", title: "Le sceau", place: "banque",
    text: [
      { if: { has: "b:offre" }, text: "Tu signes. La plume crisse. Sorbier sèche ta signature avec un buvard d'argent, range l'acte dans son sous-main, et te serre la main. La sienne est tiède et sèche. « Associés, Monsieur Croûte. À minuit, vous serez sur l'estrade, à côté de moi. »" },
      { if: { not: { has: "b:offre" } }, text: "Sorbier ne cesse pas de sourire. Il range l'acte. « C'est dommage, dit-il. Un homme qui refuse plus d'argent qu'il n'en a jamais eu… On dira que vous manquez d'ambition. » Il te raccompagne. « À ce soir, Monsieur Croûte. Votre pain gagnera quand même. Je n'ai pas besoin de votre signature pour cela. »" },
      "En sortant, Isidore t'ouvre la porte de bronze. Au moment où tu passes, il dit, sans bouger les lèvres, si bas que tu crois l'avoir rêvé : « Quelqu'un que la ville aime. Pour signer les enveloppes, quand il n'y aura plus rien dedans. »",
    ],
    choices: [{ label: "Filer au fournil", to: "B3_fournil" }] },

  B3_salle: { act: "III", title: "Dix heures du soir", place: "salle", takes: "night",
    text: [
      "À dix heures du soir, la Salle des Fêtes de Mirevaux brille comme une boîte à bijoux qu'on aurait ouverte dans la nuit. Les lustres sont allumés. Les dorures luisent. Sur l'estrade, sous une banderole *1900 · LE SIÈCLE DE LA SUPER RETRAITE*, une petite table couverte de velours rouge attend les pains du concours.",
      "Dans la petite cour derrière la Salle, sous les étoiles, les concurrents font la queue pour remettre leur pain à un employé de la Caisse : une quinzaine de boulangers de la ville et des environs, avec des pains vernis, des pains cuits trois jours, des pains salés jusqu'à la pierre, un pain sous cloche de verre, et Victorin Levain, au premier rang, avec son pain de garde sur un coussin.",
      { if: { all: [{ has: "baguette:volee" }, { not: { has: "baguette:reprise" } }] }, text: "Levain n'a pas son pain de garde sur son coussin. Il a ta baguette. La n° 1. Elle brille sous les lanternes de la cour comme une épée de légende, et il la tient comme un homme qui l'aurait toujours eue." },
      { if: { has: "baguette:gardee" }, text: "Victorin Levain voit ton torchon. Il regarde ailleurs, très vite, avec l'intérêt soudain d'un homme pour un mur de briques." },
      "Ernestine Chrome est là, adossée au mur de la cour, en manteau de laine sur son tablier. Elle a fait un effort : elle s'est lavé les mains jusqu'aux coudes. Elle te voit. Elle vient vers toi.",
      "Vous vous mettez à l'écart, sous l'escalier de service, dans l'odeur de cire et de froid. C'est la dernière fois que vous êtes seuls avant le siècle.",
    ],
    choices: [{ label: "Lui parler", to: "B3_rdv" }] },
  B3_rdv: { act: "III", title: "Sous l'escalier", place: "salle", aparte: true,
    text: [
      "Sous l'escalier de service, il fait noir et froid. On entend, de l'autre côté du mur, l'orchestre accorder ses violons, et dans la cour, les boulangers qui se disputent sur la cuisson.",
      { if: { confie: "e_coffre" }, text: "Ernestine t'a dit ce qu'elle a vu dans le coffre de la Caisse. Une chaise, un encrier, et un courant d'air. Tu y penses en regardant la lumière des lustres passer sous la porte." },
      { if: { confie: "e_bail" }, text: "Tu sais aussi que sa forge appartient à la Caisse, et que Sorbier lui a promis d'effacer le bail si elle se taisait. Elle n'est pas restée silencieuse. Elle te l'a dit, à toi." },
      { if: { has: "caisse:vide" }, text: "Sur l'ardoise de Mie, il y avait un zéro." },
      { if: { has: "b:clou" }, text: "Dans ta poche, tes doigts tournent et retournent le clou d'acier blanc du père Tarage. Il est aussi neuf qu'avant-hier. Il le sera encore dans cent ans, quand tout ce qui brille ce soir dans la Salle sera rouillé." },
      "« Qu'est-ce qu'on fait, à minuit ? » demande Ernestine.",
    ],
    choices: [{ label: "Décider", to: "B3_plan" }] },
  B3_plan: { act: "III", title: "Minuit", place: "salle",
    text: [
      "Tu regardes la porte de la Salle, la lumière, la foule qui entre. Mille neuf cent douze personnes qui ont confiance. Ton père avec une rose. Augustine avec quarante lanternes. Sorbier avec quatre malles.",
      "Il te reste une heure et demie pour décider de ce que tu feras à minuit.",
    ],
    choices: [
      { label: "Remettre la baguette, et gagner le concours. Mille francs. Le fournil sauvé.", fx: { set: { b3: "presente" } }, to: "B3_fin" },
      { label: "Monter sur l'estrade à minuit, et dire la vérité devant tout le monde", if: { clues: "M", min: 2 }, why: "Tu n'en sais pas encore assez pour accuser qui que ce soit.", fx: { set: { b3: "devoile" } }, to: "B3_fin" },
      { label: "« Trois millions ? Qu'ils les paient pour de vrai. » Le mettre aux enchères", if: { any: [{ clue: "c_programme" }, { clue: "c_lettre" }] }, why: "Il faudrait savoir ce que Gratin compte en dire.", fx: { set: { b3: "vente" } }, to: "B3_fin" },
      { label: "Courir au fournil rallumer le four : mille neuf cent douze baguettes pour minuit", hide: { not: { has: "b3:mie" } }, fx: { set: { b3: "pain" }, flag: "mie:pain" }, to: "B3_fin" },
      { label: "Monter sur l'estrade à côté de Sorbier, comme associé", hide: { not: { has: "b:offre" } }, fx: { set: { b3: "associe" } }, to: "B3_fin" },
    ] },
  B3_fin: { act: "III", title: "Onze heures et demie", place: "salle",
    text: [
      { if: { has: "b3=presente" }, text: "Tu remets ton torchon à l'employé de la Caisse. Il l'ouvre, voit la baguette, et reste un moment immobile, la bouche entrouverte, comme un homme qui aurait trouvé une truite dans son chapeau. Puis il la pose sur le velours rouge, à côté des autres pains, et les autres pains, aussitôt, ont l'air de pain." },
      { if: { has: "b3=devoile" }, text: "Tu remets ton torchon à l'employé de la Caisse, et tu prends place au bord de l'estrade, côté escalier. À minuit, quand Gratin dira son chiffre, tu monteras. Tu as la gorge sèche, les mains moites, et dans la tête, toutes les colonnes de l'ardoise de Mie." },
      { if: { has: "b3=vente" }, text: "Tu remets ton torchon à l'employé de la Caisse. Puis tu fais le tour de la Salle, et tu regardes le premier rang : des messieurs de la capitale, venus par le train de l'après-midi, en habit, avec des épingles de cravate qui valent chacune un fournil. Gratin leur serre la main un par un. Tu comptes les épingles. Mie serait fière de toi." },
      { if: { has: "b3=pain" }, text: "Tu remets ton torchon à l'employé de la Caisse, et tu cours. Tu cours jusqu'à la rue des Mitrons, où Mie a déjà rallumé le four et réveillé, tu ne sais comment, quatre voisins, deux cochers et les trois mitrons de Levain, qui pétrissent en bras de chemise en chantant une chanson de corps de garde. La farine vole. Le four rugit. Mille neuf cent douze baguettes, avant minuit. C'est fou. Vous le faites." },
      { if: { has: "b3=associe" }, text: "Tu remets ton torchon à l'employé de la Caisse. Puis Isidore vient te chercher, en silence, et te conduit sur l'estrade, à un fauteuil doré, à côté de celui de Sorbier. De là-haut, tu vois toute la Salle : mille neuf cent douze visages tournés vers vous. Tu as l'impression d'être assis sur une enveloppe." },
    ],
    choices: [{ label: "Attendre minuit", fx: { flag: "ch3:barnabe", ep: 200 }, to: "C3" }] },
};
