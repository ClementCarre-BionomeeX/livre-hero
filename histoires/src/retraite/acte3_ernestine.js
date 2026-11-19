// La Super Retraite · act III, Ernestine (Sunday 31 December 1899). Barnabé takes the n° 1 at dawn (the n° 2 stays
// under the anvil if there are two); the day (hub, three visits): Isidore (isidore=allie: the ritual of the vault at
// 0 h 10, isidore:malles), the station (c_gare, gare:retard), the bank and the door (e:goupille, or the trunks seen
// through the cellar window), Sorbier's offer (e:offre), Mémé and the anvil (caisse:vide); then ten at night at the
// Salle des Fêtes with Barnabé (aparte) and the plan for midnight: e3 = coffre | gare | laisse | associe.
// Ends with ch3:ernestine.
var DEUX = { has: "baguettes=deux" };
var PORTE = { has: "coffre=porte" };
var JOUR = [{ seen: "E3_isidore" }, { seen: "E3_gare" }, { seen: "E3_banque" }, { seen: "E3_offre" }, { seen: "E3_meme" }];
module.exports = {
  E3_aube: { act: "III", title: "Le dernier matin du siècle", place: "forge",
    text: [
      "Tu n'as pas dormi. Tu as passé la nuit assise sur le tabouret, le dos contre le mur chaud de la forge, à regarder refroidir l'acier, comme une mère regarde respirer un enfant malade. À six heures, les cloches des trois églises sonnent la première messe à trois heures différentes, et tu te lèves avec les genoux d'une vieille femme.",
      "On frappe. Barnabé Croûte est sur le seuil, le torchon sous le bras, le nez rouge, les yeux brillants. Il entre. Il regarde l'enclume.",
      "Tu enveloppes la n° 1 toi-même, dans le torchon, en la tournant deux fois, comme on emmaillote. Tu la lui donnes. Il la prend à deux mains. Vous restez un moment ainsi, chacun tenant un bout du torchon, et aucun des deux ne lâche le premier.",
      { if: DEUX, text: "Quand il est parti, tu prends la n° 2, tu l'enroules dans le vieux tablier de ton père, et tu la glisses sous l'enclume, dans le creux où ton père cachait autrefois sa bouteille d'eau-de-vie. Elle y est mieux gardée que dans une banque. Tu en sais quelque chose." },
      { if: { not: DEUX }, text: "Quand il est parti, l'enclume est vide. Il reste sur le chiffon une trace claire, la forme exacte d'une baguette, comme l'ombre d'un objet qu'on aurait emporté au soleil." },
      "Mémé Chrome, dans son fauteuil, ouvre un œil, voit l'enclume vide, et le referme. Elle garde sa phrase pour plus tard. Elle est économe.",
    ],
    choices: [{ label: "Te laver la figure à l'eau glacée, et commencer la journée", to: "E3_jour" }] },

  E3_jour: { act: "III", title: "Le dernier jour", place: "forge", hub: true, backName: "le dernier jour",
    text: [
      { first: true, text: "La forge est silencieuse. Le feu dort sous la cendre. Dehors, le faubourg de l'oued se prépare à la fête : on accroche des lampions aux figuiers, on sort les bancs, on cherche dans les malles des chapeaux qui n'ont pas vu le jour depuis le mariage d'un cousin." },
      { first: true, text: "Il te reste une journée pour comprendre ce que tu as forgé, et pour qui. À dix heures du soir, Barnabé t'attend à la Salle des Fêtes." },
      { again: true, text: "L'après-midi avance. L'ombre de l'enclume s'allonge sur le sol de terre battue, et le soleil d'hiver descend vers le désert comme une pièce d'or qui roule vers une bouche d'égout." },
    ],
    choices: [
      { label: "Ouvrir à Isidore, qui attend devant la forge", hide: { seen: "E3_isidore" }, to: "E3_isidore" },
      { label: "Aller à la gare", hide: { seen: "E3_gare" }, to: "E3_gare" },
      { label: "Aller à la Banque Sorbier", hide: { seen: "E3_banque" }, to: "E3_banque" },
      { label: "Recevoir la voiture de Monsieur Sorbier, qui s'arrête devant la forge", hide: { seen: "E3_offre" }, to: "E3_offre" },
      { label: "Poser sur l'enclume tout ce que tu sais", hide: { seen: "E3_meme" }, to: "E3_meme" },
      { label: "Partir pour la Salle des Fêtes : il est dix heures du soir", if: { count: JOUR, min: 3 }, why: "Il reste du jour.", to: "E3_salle", big: true },
    ] },

  E3_isidore: { act: "III", title: "Les gants blancs", place: "forge",
    fx: { meet: "isidore" },
    text: [
      "Isidore se tient devant la forge, dans la poussière du faubourg, en habit noir et gants blancs, aussi déplacé qu'un cygne dans une basse-cour. Il a les mains croisées sur le ventre. Il attend depuis un moment, à en juger par le givre sur ses souliers.",
      { if: { has: "isidore=allie" }, text: "« Mademoiselle Chrome. » Il regarde à droite, à gauche, puis la forge, puis toi. « J'ai réfléchi depuis hier. Je réfléchis lentement. C'est une qualité chez un valet. » Il ôte un gant, ce qui est chez lui l'équivalent d'un cri." },
      { if: { has: "isidore=allie" }, text: "« À minuit, Maître Gratin dira son chiffre. Ensuite, Monsieur descendra seul dans la salle des coffres, avec le Pain Éternel, pour le déposer de ses propres mains. C'est une cérémonie. Il l'a écrite lui-même. Personne ne le suit : les cotisants restent dans la Salle, avec le champagne. » Il remet son gant. « À minuit dix, il sera seul en bas, devant votre porte. La porte de derrière de la cave donne sur la ruelle aux charrettes. Les quatre malles y attendent déjà, sous une bâche. À minuit vingt, le fiacre. À minuit quarante, le train. »" },
      { if: { has: "isidore=allie" }, text: "Il fait une pause. « Je vous dis cela, Mademoiselle, parce que j'ai porté ces malles. Elles sont lourdes. Une malle pleine de pain ne pèse pas ce poids-là. »" },
      { if: { not: { has: "isidore=allie" } }, text: "« Mademoiselle Chrome. Monsieur Sorbier vous fait porter ceci. » Il te tend une enveloppe. Dedans, un billet de cent francs et une carte : *Pour le travail de la porte. Avec la gratitude de la Caisse. H. S.* Il ajoute, sans que son visage bouge : « Monsieur paie toujours ses dettes la veille de partir. »" },
      { if: { not: { has: "isidore=allie" } }, text: "Puis il se tait, et il reste là. Il regarde la forge, le feu sous la cendre, le fauteuil de Mémé Chrome. Il a l'air de quelqu'un qui attend qu'on lui pose une question précise." },
    ],
    choices: [
      { label: "« La veille de partir, Isidore ? Partir où ? »", hide: { has: "isidore=allie" }, test: { dom: "social", diff: -20, label: "Faire parler un valet" },
        win: { fx: { set: { isidore: "allie" }, flag: "isidore:malles", regard: { isidore: "allie" } }, to: "E3_isidore_parle" }, lose: { to: "E3_isidore_fin" } },
      { label: "« Merci, Isidore. Je saurai quoi faire de ces malles. »", hide: { not: { has: "isidore=allie" } }, fx: { flag: "isidore:malles" }, to: "E3_isidore_fin" },
      { label: "Prendre l'enveloppe, et le remercier", hide: { has: "isidore=allie" }, fx: { gold: 100 }, to: "E3_isidore_fin" },
    ] },
  E3_isidore_parle: { act: "III", title: "Le valet", place: "forge",
    text: [
      "Isidore regarde ses souliers. Il fait un compte, en silence, que tu devines long : vingt ans de souliers cirés, de portes ouvertes, de manteaux tendus, de choses vues et pas dites.",
      "« À la capitale, Mademoiselle. Par le train de minuit quarante. Avec quatre malles, que j'ai portées moi-même à la cave ce matin, et dont j'ai senti le poids. À minuit dix, Monsieur descendra seul déposer le Pain Éternel dans votre coffre. Il ressortira par la porte de derrière, qui donne sur la ruelle aux charrettes. Il ne remontera pas dans la Salle. »",
      "Il remet son gant, doigt par doigt. « Il m'a acheté un billet de troisième classe pour le train du 2 janvier. J'ai trouvé cela, Mademoiselle, un peu court, après vingt ans. »",
    ],
    choices: [{ label: "Le regarder repartir vers la ville, très droit", to: "E3_isidore_fin" }] },
  E3_isidore_fin: { act: "III", title: "Le givre", place: "forge",
    text: [
      { if: { has: "isidore:malles" }, text: "Isidore s'incline et repart vers la ville, très droit, avec ses souliers qui crissent sur le givre. Tu restes sur le seuil. Minuit dix. La salle des coffres. Ta porte. Un homme seul, devant un coffre vide, avec une baguette d'acier dans les bras." },
      { if: { not: { has: "isidore:malles" } }, text: "Isidore s'incline. Il attend encore une seconde, une seule. Puis il repart vers la ville, très droit, et ses souliers laissent dans le givre deux lignes de traces, régulières comme une écriture de comptable." },
    ],
    choices: [{ label: "Reprendre ta journée", to: "E3_jour" }] },

  E3_gare: { act: "III", title: "La gare", place: "gare",
    text: [
      "La gare de Mirevaux est une boîte de briques roses posée au bout de la ville, face au désert, avec une horloge qui avance de quatre minutes et un chef de gare qui le sait. Il s'appelle Monsieur Ponce. Il a une moustache cirée en pointe, une casquette à galon d'or, et l'air triste des hommes qui voient partir tout le monde.",
      "Sur le tableau noir, à la craie : *Train de nuit pour la capitale. Départ 0 h 40. Voiture-lits.*",
      { if: { clue: "c_gare" }, text: "Tu sais déjà ce que tu viens chercher : deux billets de première, au nom de Sorbier, pour ce train-là. Tu demandes à Monsieur Ponce si le train part toujours à l'heure. « Toujours, Mademoiselle. C'est même la seule chose, à Mirevaux, qui part à l'heure. »" },
      { if: { not: { clue: "c_gare" } }, text: "Tu demandes à Monsieur Ponce qui part ce soir. Il hésite. Puis il ouvre son registre, parce qu'un chef de gare qui voit partir tout le monde a besoin, de temps en temps, que quelqu'un s'intéresse aux départs. *Compartiment 1 : M. Hector Sorbier. Compartiment 2 : M. Anatole Gratin. Bagages : quatre malles, enregistrées au nom de la Caisse.*" },
    ],
    choices: [
      { label: "« Le train pourrait-il avoir une heure de retard, Monsieur Ponce ? »", test: { dom: "social", diff: -10, label: "Convaincre le chef de gare" },
        win: { fx: { flag: "gare:retard", clue: "c_gare" }, to: "E3_gare_fin" }, lose: { fx: { clue: "c_gare" }, to: "E3_gare_fin" } },
      { label: "Le remercier, et regarder les rails partir vers le nord", fx: { clue: "c_gare" }, to: "E3_gare_fin" },
    ] },
  E3_gare_fin: { act: "III", title: "Les rails", place: "gare",
    text: [
      { if: { has: "gare:retard" }, text: "Monsieur Ponce lisse sa moustache. « Un train peut toujours avoir du retard, Mademoiselle. Une aiguille gelée. Un mouton sur la voie. Un chef de gare qui a trop bu le soir du siècle. » Il ferme son registre. « J'ai cotisé quatre cent dix francs à la Caisse. Si votre bonne raison est celle que je crois, le train de minuit quarante partira à une heure quarante, et personne ne pourra rien prouver. »" },
      { if: { not: { has: "gare:retard" } }, text: "Monsieur Ponce secoue la tête, avec une infinie tristesse. « Le train part à l'heure, Mademoiselle. C'est la Compagnie. La Compagnie se moque du siècle. » Il regarde l'horloge, qui avance de quatre minutes. « Elle part même un peu en avance. »" },
      "Tu restes un moment sur le quai, à regarder les rails filer vers le nord, deux traits d'acier ordinaire qui rouillent tranquillement dans le froid. Ils mènent à la capitale. Les malles d'un homme pressé glissent dessus aussi bien que les autres.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E3_jour" }] },

  E3_banque: { act: "III", title: "La porte", place: "banque",
    text: [
      { if: PORTE, text: "La Banque Sorbier est fermée, dimanche oblige, mais l'employé du guichet t'attend sous le porche : Monsieur Sorbier veut qu'on vérifie la porte du coffre une dernière fois avant la cérémonie. Tu descends l'escalier de marbre. La porte est là, ta porte, ronde, lisse, immense, avec ses trois serrures et son volant d'acier blanc. Elle brille dans la lumière de la lampe comme une lune qu'on aurait clouée au mur." },
      { if: PORTE, text: "L'employé reste en haut de l'escalier. Il a froid, il a faim, il a une fiancée qui l'attend. Tu es seule avec ta porte. Tu connais chaque pièce de son mécanisme. Tu sais, par exemple, qu'une goupille de quatre millimètres, posée au bon endroit dans le pêne, permet de fermer la porte de l'extérieur et rend la poignée intérieure aussi utile qu'une poignée peinte." },
      { if: { not: PORTE }, text: "La Banque Sorbier est fermée, dimanche oblige. Tu fais le tour par la ruelle aux charrettes, derrière, là où donne la porte de service de la cave. Un soupirail, au ras du pavé, laisse passer une lumière jaune. Tu t'accroupis." },
      { if: { not: PORTE }, text: "En bas, dans la cave, à côté d'un coffre-fort dont la porte neuve vient d'un autre forgeron (une porte de fonte, déjà rouillée aux charnières), il y a quatre malles de cuir, cerclées de cuivre. Un employé colle sur chacune une étiquette : *Gare de Mirevaux · Train de 0 h 40 · Capitale.* Il en soulève une pour la ranger. Il la repose aussitôt, en soufflant, et se masse les reins." },
    ],
    choices: [
      { label: "Poser la goupille", hide: { not: PORTE }, test: { dom: "discretion", diff: 0, label: "Une goupille dans le pêne" },
        win: { fx: { flag: "e:goupille" }, to: "E3_banque_fin" }, lose: { to: "E3_banque_fin" } },
      { label: "Vérifier la porte, honnêtement, comme on te l'a demandé", hide: { not: PORTE }, to: "E3_banque_fin" },
      { label: "Compter les malles, et retenir les étiquettes", hide: PORTE, fx: { clue: "c_gare", flag: "e:malles_vues" }, to: "E3_banque_fin" },
    ] },
  E3_banque_fin: { act: "III", title: "Le pêne", place: "banque",
    text: [
      { if: { has: "e:goupille" }, text: "Tes doigts trouvent le pêne dans le noir. La goupille entre avec un petit bruit sec, celui d'un ongle sur un verre. Tu refermes le capot. Rien n'y paraît. La porte s'ouvre et se ferme comme avant, docile, magnifique. Seulement, une fois fermée, elle ne s'ouvre plus que de dehors." },
      { if: { all: [PORTE, { not: { has: "e:goupille" } }] }, text: "Tu vérifies les gonds, les serrures, le volant. Tout est parfait. Tu as fait, sans le vouloir, le meilleur coffre de la province, pour y garder un courant d'air." },
      { if: { has: "e:malles_vues" }, text: "Tu te relèves, les genoux gelés. Quatre malles, cerclées de cuivre, et un employé qui se masse les reins. Ce qu'il y a dedans pèse plus lourd que le pain." },
      "Dans la rue, les cloches sonnent vêpres, à trois heures différentes.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E3_jour" }] },

  E3_offre: { act: "III", title: "L'offre", place: "forge",
    fx: { meet: "sorbier" },
    text: [
      "Une voiture noire à deux chevaux s'arrête devant la forge, dans un nuage de poussière et de prestige. Hector Sorbier en descend, en pelisse de loutre, une canne à pommeau d'argent à la main. Il regarde le faubourg comme on regarde un plat qu'on n'a pas commandé.",
      "Il entre. Il salue Mémé Chrome d'une inclinaison parfaite, à laquelle Mémé Chrome répond en fermant les yeux.",
      "« Mademoiselle Chrome, je pars ce soir pour la capitale. Quelques semaines. Les affaires. Je voudrais, avant de partir, régler une question de bail. » Il pose sur l'enclume un papier timbré. *Bail de la forge du faubourg de l'oued. Propriétaire : la Caisse de la Super Retraite.* « Je le déchire, si vous voulez. Ici. Maintenant. »",
      "Puis il pose à côté un second papier, épais, sur vergé, avec un sceau de cire. *Acte d'association. Chrome & Sorbier, aciers garantis.* « Votre acier, Mademoiselle, a de l'avenir. Il ne rouille pas. Moi non plus. Nous ferions une paire. Vous tiendriez la seconde clé du coffre en mon absence, et votre nom serait gravé sur toutes les portes de banque de la province. »",
      "Il sourit. Il a de belles dents, très régulières, comme des pièces empilées.",
    ],
    choices: [
      { label: "Signer, et le regarder déchirer le bail", fx: { flag: "e:offre", regard: { sorbier: "cordial" } }, to: "E3_offre_fin" },
      { label: "« Mon acier ne rouille pas, Monsieur Sorbier. Il ne ment pas non plus. »", fx: { regard: { sorbier: "mefiant" } }, to: "E3_offre_fin" },
    ] },
  E3_offre_fin: { act: "III", title: "Le sceau", place: "forge",
    text: [
      { if: { has: "e:offre" }, text: "Tu signes avec la plume de Sorbier, qui crisse sur le vergé comme un burin sur du fer doux. Il déchire le bail en quatre, avec soin, et jette les morceaux dans la forge, où ils se tordent et deviennent des papillons noirs. « Associés, Mademoiselle Chrome. À minuit, vous serez sur l'estrade. »" },
      { if: { not: { has: "e:offre" } }, text: "Sorbier reprend ses deux papiers, l'un après l'autre. Il replie le bail avec un soin particulier. « Le premier janvier, Mademoiselle, la Caisse aura besoin de ses forges. Elle les reprendra. Je serai loin, et je le regretterai de loin. » Il touche son chapeau. La voiture repart, dans un nuage de poussière et de prestige." },
      "Mémé Chrome rouvre les yeux quand la voiture a disparu. Elle regarde la place où se tenait le banquier, longtemps, comme on regarde une tache sur un mur.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E3_jour" }] },

  E3_meme: { act: "III", title: "L'enclume", place: "forge",
    fx: { meet: "meme" },
    text: [
      "Tu poses sur l'enclume, un par un, tout ce que tu sais, comme on dispose les outils avant une pièce difficile.",
      { if: { clue: "c_coffre" }, text: "À gauche, le coffre. Une chaise, un encrier, un courant d'air. Tu poses un clou pour lui." },
      { if: { clue: "c_registre" }, text: "À côté, le registre, avec son zéro gratté. Un deuxième clou." },
      { if: { clue: "c_lettre" }, text: "Plus loin, la lettre de Gratin : *peu importe l'objet.* Un troisième clou." },
      { if: { clue: "c_gare" }, text: "Au bout, deux billets de première pour le train de minuit quarante. Un quatrième clou, que tu poses un peu à l'écart, parce qu'il part." },
      { if: { clues: "M", min: 3 }, text: "Tu regardes la rangée de clous d'acier blanc sur l'enclume. Ils ne rouillent pas. Ils disent tous la même chose. La Caisse est vide. Elle a toujours été vide. Ce qu'on y verse le vendredi, on le donne le samedi aux vieux, et ce soir, l'homme qui tient la Caisse emporte le reste au nord." },
      { if: { not: { clues: "M", min: 3 } }, text: "La rangée de clous est courte. Il manque des pièces. Tu sais qu'il y a un défaut dans le métal, tu l'entends sonner faux, mais tu ne vois pas encore où est la paille." },
      "Mémé Chrome se penche dans son fauteuil. Elle regarde l'enclume, les clous, toi. Puis elle dit, avec la netteté d'un coup de marteau : « Un coffre vide, ça sonne. » Elle se rencogne. C'était la phrase du jour.",
    ],
    choices: [
      { label: "Frapper l'enclume, une fois, pour l'entendre sonner", hide: { not: { clues: "M", min: 3 } }, fx: { flag: "caisse:vide" }, to: "E3_jour" },
      { label: "Ramasser les clous", hide: { clues: "M", min: 3 }, to: "E3_jour" },
    ] },

  E3_salle: { act: "III", title: "Dix heures du soir", place: "salle", takes: "night",
    text: [
      "À dix heures du soir, la Salle des Fêtes de Mirevaux brille au bout de la grand-rue comme une lampe posée sur une table de nuit. Toute la ville y monte, en habits du dimanche, avec des lanternes, des enfants endormis sur les épaules et des paniers de victuailles, par une nuit si froide que les haleines font au-dessus de la foule un nuage permanent.",
      "Tu as mis ton manteau de laine sur ton tablier. Tu t'es lavé les mains jusqu'aux coudes, deux fois, et il reste encore du noir dans les lignes de tes paumes. Tu as cessé de frotter. Ce noir-là fait partie de toi.",
      { if: { has: "e:beurre" }, text: "Dans la foule, Augustine Salée te reconnaît, la forgeronne à la motte de beurre, et te fait un petit signe de tête, comme entre gens qui savent ce que pèse une chose." },
      "Dans la petite cour derrière la Salle, les boulangers font la queue pour remettre leurs pains. Tu cherches Barnabé. Il est là, son torchon sous le bras. Il te voit. Tu vas vers lui.",
      "Vous vous mettez à l'écart, sous l'escalier de service. C'est la dernière fois que vous êtes seuls avant le siècle.",
    ],
    choices: [{ label: "Lui parler", to: "E3_rdv" }] },
  E3_rdv: { act: "III", title: "Sous l'escalier", place: "salle", aparte: true,
    text: [
      "Sous l'escalier de service, il fait noir et froid. On entend l'orchestre accorder ses violons de l'autre côté du mur, avec une obstination de mouches contre une vitre.",
      { if: { confie: "b_billet" }, text: "Barnabé t'a parlé du billet de cinquante francs, celui qu'il a versé à la Caisse, et qu'il a retrouvé le lendemain dans l'enveloppe de son père, avec le coin déchiré et l'empreinte de son pouce. Tu y penses en le regardant serrer son torchon." },
      { if: { confie: "b_fournil" }, text: "Tu sais aussi que son fournil est hypothéqué auprès de la Caisse, et que s'il perd ce soir, la Caisse le prend demain. Vous êtes deux, sous cet escalier, à loger chez Sorbier." },
      { if: { has: "caisse:vide" }, text: "Sur l'enclume, ce matin, il y avait une rangée de clous qui disaient tous la même chose." },
      "« Qu'est-ce qu'on fait, à minuit ? » demande Barnabé.",
    ],
    choices: [{ label: "Décider", to: "E3_plan" }] },
  E3_plan: { act: "III", title: "Minuit", place: "salle",
    text: [
      "Tu regardes la porte de la Salle, et derrière la Salle, dans ta tête, la Banque, l'escalier de marbre, ta porte ronde au fond de la cave, la ruelle aux charrettes, la gare rose au bout de la ville, et les rails.",
      "Il te reste une heure et demie pour décider de ce que tu feras à minuit.",
    ],
    choices: [
      { label: "Descendre à la cave avant lui, et attendre derrière ta porte", if: { all: [PORTE, { any: [{ item: "cle_coffre" }, { has: "e:goupille" }, { has: "isidore:malles" }] }] }, why: "Il faudrait une clé, une goupille, ou savoir à quelle heure il descend.", fx: { set: { e3: "coffre" } }, to: "E3_fin" },
      { label: "Courir à la gare, et attendre le banquier sur le quai", if: { clue: "c_gare" }, why: "Tu ne sais pas par quel chemin il compte partir.", fx: { set: { e3: "gare" } }, to: "E3_fin" },
      { label: "Rester dans la Salle, à côté de Barnabé, et laisser venir minuit", fx: { set: { e3: "laisse" } }, to: "E3_fin" },
      { label: "Monter sur l'estrade à côté de Sorbier, comme associée", hide: { not: { has: "e:offre" } }, fx: { set: { e3: "associe" } }, to: "E3_fin" },
    ] },
  E3_fin: { act: "III", title: "Onze heures et demie", place: "salle",
    text: [
      { if: { has: "e3=coffre" }, text: "Tu sors par la porte de service. La ville est vide, toute la ville est dans la Salle. Tu traverses la grand-rue gelée jusqu'à la Banque, tu passes par la ruelle aux charrettes, à côté des quatre malles sous leur bâche, et tu descends dans la cave. Ta porte est ouverte. Le coffre est vide. Tu t'assois dans l'ombre, derrière le battant, sur la chaise, à côté de l'encrier. Tu attends minuit dix." },
      { if: { has: "e3=gare" }, text: "Tu sors par la porte de service. Tu remontes ton col. Toute la ville est dans la Salle, et toi, tu marches seule vers le bout de la ville, vers la gare rose et son horloge en avance, où tu attendras sur un banc de bois, face aux rails, le passage d'un homme pressé." },
      { if: { has: "e3=laisse" }, text: "Tu entres dans la Salle avec Barnabé. Vous trouvez deux places debout, au fond, contre une colonne dorée. Tu croises les bras. Tu as l'impression d'attendre la fin d'une coulée dont tu n'as pas fait le moule." },
      { if: { has: "e3=associe" }, text: "Isidore vient te chercher, sans un mot. Il te conduit sur l'estrade, à un fauteuil doré, à la droite de Sorbier. Tu t'assois avec ton manteau de laine et tes mains noires au milieu des dorures, et toute la Salle te regarde comme on regarde une enclume posée sur un piano." },
    ],
    choices: [{ label: "Attendre minuit", fx: { flag: "ch3:ernestine", ep: 200 }, to: "C3" }] },
};
