// Le Douzième Coup · chapter 2, second half (act I, the village). Old Lubin who will not leave and Pierrot's goat are
// each taken by one player only (`role`), so the two of them split the street; the Watchers' shrine is read by both,
// each in their own words. The afternoon is a role again: sewing the notebooks with Line (`tantot:couture`) or
// scouting the way for the night (`tantot:lisiere`).
var J = { has: "role:passe" }, R = { has: "role:reste" };
var P = {};

// ======================================================================== old Lubin
Object.assign(P, {
  K02_lubin: { act: "I", title: "Le banc du père Lubin", backName: "le banc du père Lubin", place: "troisnoyers", fx: { meet: "lubin" },
    text: [
      { first: true, text: "La dernière maison du village est la seule devant laquelle il n'y a rien : ni charrette, ni coffre, ni matelas. Il y a un banc sous un rosier, et sur le banc le père Lubin, quatre-vingt-un ans, une fourche à trois dents en travers des genoux. Sur le pignon se tient son coq, celui qui chante à quatre heures et demie, et qu'il a nommé Midi-Juste par esprit de contradiction." },
      { first: true, text: "« Si c'est le sergent qui t'envoie, dit-il, la fourche est pour lui. Si c'est le curé, il est parti. Et si tu viens m'aider à charger, regarde bien autour de toi, et dis-moi ce que tu vois à charger. »" },
      { again: true, text: "Le père Lubin est toujours sur son banc, la fourche sur les genoux. Midi-Juste a changé de pignon." },
    ],
    choices: [
      { label: "« Vous ne partez pas ? »", to: "K02_lubin_pourquoi", hide: { seen: "K02_lubin_pourquoi" } },
      { label: "Tâcher de le décider à partir", hide: { any: [{ not: { seen: "K02_lubin_pourquoi" } }, { seen: "K02_lubin_tetu" }] },
        test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }, { if: R, v: 10 }] },
        win: { fx: { flag: "monde:lubin_part", quest: "I_lubin", ep: ["perso", 500] }, to: "K02_lubin_part" }, lose: { to: "K02_lubin_tetu" } },
      { label: "L'aider à s'installer comme il l'entend", hide: { not: { seen: "K02_lubin_pourquoi" } }, fx: { flag: ["monde:lubin_reste", "lubin:promesse"], quest: "I_lubin", ep: ["perso", 500] }, to: "K02_lubin_banc" },
      { label: "Aller prévenir le sergent, qui le fera charger de force", hide: { not: { seen: "K02_lubin_pourquoi" } }, fx: { flag: "monde:lubin_force", quest: "I_lubin", regard: { lubin: "trahi" } }, to: "K02_lubin_sergent" },
      { back: "K02_place" },
    ] },
  K02_lubin_pourquoi: { act: "I", title: "Voir la suite", place: "troisnoyers",
    text: [
      "« J'ai déménagé de Saint-Aubin-sur-Thiorne en 574, avec deux vaches. De Vauxelles en 592, avec une vache. Des Hautes-Bordes en 596, à pied, avec la Mariette déjà malade, qui est morte sur la route entre deux villages, de sorte qu'elle n'est enterrée dans aucun. » Il compte sur les dents de sa fourche. « Trois fois. À la quatrième, mon petit, on a l'air d'un homme qui se sauve. »",
      "Il se tait un moment. Midi-Juste descend du pignon, traverse la cour avec une dignité de marguillier, et vient lui piquer le sabot.",
      "« Et puis il y a autre chose. Ils sont tièdes, là-dedans. Ils ont l'âge qu'ils avaient. Un jour ou l'autre, quelqu'un trouvera le moyen de remettre la pendule en route : dans dix ans, dans cent ans, peu importe. J'ai quatre-vingt-un ans. Si je vais à Vauxelles-le-Neuf, je verrai deux hivers, trois avec de la chance, et je mourrai dans un pays plat en regardant pousser des betteraves. Si je reste sur ce banc, je verrai la suite. » Il a un rire sans dents, ravi de son calcul. « À mon âge, c'est le seul moyen qu'on ait trouvé. »",
    ],
    choices: [{ back: "K02_lubin" }] },
  K02_lubin_part: { act: "I", title: "Le chapeau", place: "troisnoyers", fx: { item: "gnole" },
    text: [
      { if: R, text: "Tu lui dis ce que tu as vu, et que les gens du village ne voient que de loin. Que là-dedans personne ne s'assoit, ne dort ni n'attend : on y est une chose posée. Que les gamins de ta bande accrochent des chapeaux à ceux des prés, pour rire, des chapeaux de femme, et que ceux des prés les portent depuis des années." },
      { if: J, text: "Tu lui parles comme Line parle des horloges. Qu'une pendule arrêtée ne voit rien passer, ni dix ans ni cent : pour elle, il est toujours l'heure où elle s'est tue. Qu'il ne verrait la suite qu'à la condition que quelqu'un la fabrique, et que ce quelqu'un aura besoin de gens debout de ce côté-ci, avec une fourche de préférence." },
      { if: R, text: "Le père Lubin écoute jusqu'au bout, ce qui chez lui est un événement. Il regarde les prés. Il regarde son banc. « Un chapeau de femme », répète-t-il, du ton d'un homme à qui l'on vient de gâter un beau projet." },
      { if: J, text: "Le père Lubin écoute jusqu'au bout, ce qui chez lui est un événement. Il regarde les prés. Il regarde sa fourche. « Debout de ce côté-ci », répète-t-il, du ton d'un homme à qui l'on vient de gâter un beau projet, et de lui en proposer un autre." },
      "Il se lève. Il lui faut le temps d'un Pater pour faire un baluchon, et une heure pour attraper Midi-Juste. « Le banc, je le laisse. Si la suite passe par ici, qu'elle s'assoie. » Avant de monter dans la charrette du charron, il te met dans les mains une fiole carrée. « De la prune de 589. Je la gardais pour mon enterrement. Tu viens de le reculer, c'est à toi de la boire. »",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
  K02_lubin_tetu: { act: "I", title: "Tête de pioche", place: "troisnoyers",
    text: [
      "« Tu parles bien. Le curé aussi parlait bien, et tu as vu par quel bout de la rue il est sorti. » Le père Lubin recale sa fourche. « J'ai fait mon compte. On ne défait pas le compte d'un homme de quatre-vingt-un ans avec des raisons : il les a déjà toutes entendues, et il en a inventé quelques-unes. »",
    ],
    choices: [{ back: "K02_lubin" }] },
  K02_lubin_banc: { act: "I", title: "Face au levant", place: "troisnoyers", fx: { item: "gnole" },
    text: [
      "Vous portez le banc à deux jusqu'au bout du jardin, et vous le tournez vers les prés. Le père Lubin tient à l'alignement : il vise la Ferme-Vieille entre deux dents de sa fourche, fait reculer le banc d'un pied, le cale avec une tuile. Puis il rentre, et ressort dans son habit de noces, qui a cinquante-cinq ans et lui va comme une cloche à un battant.",
      "« D'après les jalons, elle fait ses deux toises par jour. Elle sera au rosier vers la Saint-Jean. » Il s'assoit, essaie plusieurs façons de tenir ses mains, choisit de les poser à plat sur ses genoux. « Comme ça. On ne sait pas combien de temps on garde la pose. »",
      "Il te donne Midi-Juste à porter chez le charron, qui a des poules, et une fiole carrée, de la prune de 589, qu'il gardait pour son enterrement et dont il n'a plus l'emploi. « Une chose encore. Si jamais ça se remet en route, et que tu sois de ce monde : viens me dire en quelle année on est. Je n'aimerai pas avoir à le demander. »",
    ],
    choices: [{ label: "Promettre, et emporter le coq", back: "K02_place" }] },
  K02_lubin_sergent: { act: "I", title: "Un meuble de plus", place: "troisnoyers",
    text: [
      "Le sergent Maillefer reçoit la nouvelle avec le soulagement d'un homme à qui l'on apporte enfin un cas prévu par le règlement. « Refus de déménager. Article neuf. On le chargera ce soir, avec les saints. » Il l'écrit.",
      "Quand tu repasses au bout de la rue, deux gardes mesurent déjà du regard la porte du père Lubin et la largeur du père Lubin. Le vieux te voit, de son banc. Il ne crie pas. Il crache une fois, de côté, posément, comme on signe.",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
});

// ======================================================================== Pierrot's goat, and the shepherd in the meadow
Object.assign(P, {
  K02_pierrot: { act: "I", title: "Les jalons rouges", backName: "les jalons rouges", place: "troisnoyers",
    text: [
      { first: true, text: "Au bas du pré communal, la Garde a planté ses jalons : des piquets peints en rouge, tous les vingt pas, reliés par une corde où pendent des chiffons. Un gamin de huit ans est debout contre la corde et crie « Blanchette ! » d'une voix qui a déjà beaucoup servi ce matin." },
      { first: true, text: "Blanchette est une chèvre blanche, à douze toises de l'autre côté. Elle broute. Elle a la tête baissée sur une touffe de trèfle, la mâchoire de travers, et depuis que tu la regardes cette mâchoire s'est déplacée de l'épaisseur d'un ongle. « Elle mâche la même bouchée depuis la soupe, dit le gamin sans se retourner. Mon père dit qu'on part demain, et qu'une chèvre c'est une chèvre. »" },
      { first: true, text: "Douze toises : c'est ce que la lisière a mangé depuis Pâques. De ce côté-ci de la corde, l'herbe plie sous le vent. De l'autre, elle se tient droite, d'un vert plus sourd, et le vent n'y entre pas. Plus loin dans le pré, à quarante toises, il y a un homme debout." },
      { again: true, text: "Pierrot n'a pas bougé de la corde. Blanchette non plus, ou si peu." },
    ],
    choices: [
      { label: "« Qui est-ce, là-bas, debout dans le pré ? »", to: "K02_bastien", hide: { seen: "K02_bastien" } },
      { label: "Passer sous la corde : douze toises, une pincée de sable", hide: J, if: { stock: "sable", min: 1 }, why: "Il te faudrait une pincée de sable.", fx: { stock: { sable: -1 }, flag: "chevre:sauvee", quest: "I_chevre", ep: ["perso", 400] }, to: "K02_chevre_sable" },
      { label: "Lancer ta corde en lasso, de ce côté-ci des jalons", if: { item: "corde" }, hide: { not: { item: "corde" } }, test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { voie: "coureur" }, v: 15 }] },
        win: { fx: { flag: "chevre:sauvee", quest: "I_chevre", ep: ["perso", 400] }, to: "K02_chevre_sauvee" }, lose: { to: "K02_chevre_plonge" } },
      { label: "Entrer sans sable, en courant, comme on plonge", to: "K02_chevre_plonge" },
      { back: "K02_place" },
    ] },
  K02_bastien: { act: "I", title: "Le berger du communal", place: "troisnoyers", fx: { flag: "su:bastien" },
    text: [
      "« C'est Bastien, dit Pierrot. Le berger. Le lundi de Pâques, il a vu la lisière passer sur ses moutons, et il a couru. Les moutons, la Garde les a tirés avec des cordes. Lui, il était trop loin. »",
      "L'homme est pris en pleine marche, tourné vers le village. Il a le pied gauche à terre et le droit levé, un bâton dans la main, la bouche ouverte sur un appel ; son chien est couché devant lui, le museau entre les pattes. On dirait une de ces figures que les peintres mettent au fond des tableaux pour donner l'échelle.",
      "« Il bouge, reprend Pierrot. Faut regarder longtemps. À Pâques, il avait les deux pieds par terre. Le maître d'école a posé un caillou blanc où était son sabot : depuis, il a fait ça. » Il écarte les doigts d'une main. « Il veut sortir. Il en a pour cent ans. »",
      "On les appelle les Lents. La Dormante les a pris à moitié, sur son bord, et ils continuent, d'un cheveu par jour. On dit que pour eux c'est le reste du monde qui s'est mis à courir : que le soleil leur passe sur la tête comme une lanterne qu'on balance, que l'herbe leur monte aux genoux à la façon d'une flamme. Bastien a les yeux ouverts. Depuis Pâques, à son compte, il s'est écoulé le temps d'un cri. Au bout de ce cri, il verra le village se vider en un clin d'œil, et il n'aura pas fini d'ouvrir la bouche.",
    ],
    choices: [{ back: "K02_pierrot" }] },
  K02_chevre_sable: { act: "I", title: "Douze toises", place: "troisnoyers",
    text: [
      "Tu fais sauter du pouce le bouchon du sablier de corne. Une pincée glisse dans le col, grise, lente, et tu passes sous la corde.",
      "Au troisième pas, le village s'éteint. Ni d'un coup ni tout à fait : comme s'éteint une chandelle qu'on mouche, en laissant une odeur. Tu entends ton souffle, tes sabots, le sable. L'herbe sous tes pieds a la raideur d'un paillasson, et chaque brin que tu couches reste couché. Tu sais, pour l'avoir fait cent fois, qu'il faut marcher sans courir, respirer sans compter, et garder les yeux sur ce qu'on est venu prendre.",
      "Blanchette est tiède sous la main, et lourde, d'un poids de statue. Tu la charges en travers de tes épaules. Sa touffe de trèfle vient avec, entre ses dents. À l'instant où vous repassez la corde, elle achève sa bouchée, avale, et te regarde de côté avec l'indignation d'une personne qu'on a dérangée à table.",
    ],
    choices: [{ label: "La rendre à Pierrot", to: "K02_chevre_sauvee" }] },
  K02_chevre_plonge: { act: "I", title: "Comme on plonge", place: "troisnoyers",
    text: [
      { outcome: "lose", text: "La corde part bien. Passé les jalons, la boucle ralentit en l'air, s'ouvre avec une lenteur de fumée, et se pose à une toise de la chèvre, raide comme un cerceau. Tu la ramènes : elle pèse le triple." },
      "Il reste à y aller. Tout le monde, à la lisière, connaît la règle : douze toises sans sable, cela se fait, si l'on court et si l'on ne s'arrête sur rien. Tout le monde connaît aussi quelqu'un qui s'est arrêté.",
    ],
    choices: [
      { label: "Prendre ton élan", test: { dom: "nature", diff: -10, label: "Souffle", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "tetu" }, v: 10 }] },
        win: { fx: { pv: -1, flag: ["chevre:sauvee", "chevre:plonge"], quest: "I_chevre", ep: ["perso", 500] }, to: "K02_chevre_sauvee" }, lose: { fx: { pv: -3, flag: "chevre:perdue", quest: "I_chevre" }, to: "K02_chevre_perdue" } },
      { label: "Renoncer : une chèvre, c'est une chèvre", fx: { flag: "chevre:perdue", quest: "I_chevre" }, to: "K02_chevre_perdue" },
    ] },
  K02_chevre_sauvee: { act: "I", title: "Blanchette", place: "troisnoyers", fx: { item: "fromage", flag: "trou_haie" },
    text: [
      { after: "chevre:plonge", text: "Tu rapportes la chèvre. Comment, tu le sauras mal ensuite : il y a eu l'herbe dure, un froid dans les genoux, l'envie très douce de t'asseoir, et la corde aux chiffons qui reculait. Tu es de ce côté-ci, à quatre pattes, Blanchette sous un bras, et tes oreilles sifflent." },
      { outcome: "win", before: "chevre:plonge", text: "La boucle tombe sur les cornes. Tu hales. Blanchette vient d'abord comme vient une barque chargée, d'un seul bloc, les quatre pattes raides dans l'herbe ; puis elle passe la corde aux chiffons, et tout lui revient à la fois, le poids, la colère et la voix." },
      "Pierrot prend sa chèvre par les cornes et lui dit tout bas des choses sévères, le front contre son front. Blanchette bêle. C'est un bruit ordinaire et magnifique.",
      "Il fouille sa blouse et en tire ce qu'il a : un fromage de la bête elle-même, sec, gros comme le poing. Puis, parce qu'un fromage lui paraît peu : « Je sais un trou. Dans la haie du pré Bastien, au coude, sous le houx. Les gardes passent devant, ils regardent jamais par terre. J'y vais voir les Lents. » Il te considère. « Je l'ai dit à personne. »",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
  K02_chevre_perdue: { act: "I", title: "La même bouchée", place: "troisnoyers",
    text: [
      { outcome: "lose", text: "À la septième toise, tes jambes cessent d'être à toi. L'herbe te tient par les chevilles ; l'air se met à peser, et une grande douceur te vient, l'envie de t'asseoir là, près de la chèvre, pour reprendre haleine. Quelque chose te mord la taille : un croc à foin, au bout d'une perche. Le père de Pierrot te ramène comme une botte, en jurant, et te laisse tomber de ce côté-ci de la corde, où tu grelottes en plein soleil." },
      "Pierrot ne dit rien. Il regarde sa chèvre, qui mettra l'été à finir sa touffe. Son père le prend par l'épaule et l'emmène vers la charrette ; il se retourne tous les dix pas, jusqu'au coin de la grange.",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
});

// ======================================================================== the Watchers' shrine
Object.assign(P, {
  K02_orable: { act: "I", title: "Le reposoir aux soixante-trois lampes", backName: "le reposoir des Veilleurs", place: "troisnoyers", fx: { meet: "orable" },
    text: [
      { first: true, text: "Au bout de la rue, là où elle devient chemin, les Veilleurs ont bâti un reposoir : trois murs de pierres sèches, un toit de lauzes, et dedans des lampes. Il y en a une pour chaque dormant connu de la paroisse, soixante-trois, de petites lampes de terre, à huile, avec un nom gravé au clou. On les allume le soir, la flamme du côté de la lisière, afin que ceux de là-bas sachent où on les attend." },
      { first: true, text: "Une femme en noir fait le plein d'huile. Quarante ans, droite, une médaille d'argent au cou, les gestes mesurés d'une sacristine. Dame Orable est de Port-Régent ; elle fait chaque printemps, à pied, le tour des reposoirs de la lisière. Cette année, elle les trouve un village plus à l'ouest." },
      { first: true, if: J, text: "« Tu es de chez l'horlogère. Elle ne vient jamais ici. Elle dit que nos lampes sont une façon de ne rien faire en gardant les mains occupées. » Dame Orable essuie le bec d'une burette. « Elle a peut-être raison. Je préfère cela à ne rien faire les mains vides. »" },
      { first: true, if: R, text: "Elle s'arrête de verser. Elle a vu le sablier de corne à ta ceinture ; il n'y a que deux métiers qui en portent, et tu n'as pas la casaque de l'autre. « Tu peux regarder. Regarder est permis. Pour le reste, sache que j'ai compté les lampes. »" },
      { again: true, text: "Dame Orable mouche les mèches une à une. Le reposoir sent l'huile chaude et la pierre." },
    ],
    choices: [
      { label: "« Pour qui veillez-vous ? »", to: "K02_orable_pere", hide: { seen: "K02_orable_pere" } },
      { label: "Demander à allumer une lampe", hide: { any: [R, { seen: "K02_orable_lampe" }] }, to: "K02_orable_lampe" },
      { label: "Poser devant elle la poupée de chiffon", hide: { not: { item: "poupee" } }, fx: { drop: "poupee", item: "medaille", flag: "orable:poupee", regard: { orable: "cordial" } }, to: "K02_orable_poupee" },
      { label: "« Je vais loin là-dedans. Si vous avez quelque chose à y faire porter... »", hide: { any: [J, { not: { seen: "K02_orable_pere" } }, { has: "orable:lettre" }] },
        test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "orable:poupee" }, v: 40 }, { if: { voie: "heurier" }, v: 10 }] },
        win: { fx: { item: "lettre_orable", flag: "orable:lettre", questSeen: "R_lettre" }, to: "K02_orable_lettre" }, lose: { to: "K02_orable_refus" } },
      { back: "K02_place" },
    ] },
  K02_orable_pere: { act: "I", title: "Le passeur d'Arvoise", place: "troisnoyers",
    text: [
      "« Pour mon père. Gervais Lebac, maître passeur du bac d'Arvoise, comme son père avant lui. » Elle le dit sans appuyer : elle l'a dit dans vingt reposoirs.",
      "« En 575, la lisière a passé le fleuve en une nuit de crue. Il a fait traverser le village, bac après bac, jusqu'au matin. J'étais sur le dernier, j'avais quatorze ans. Il est resté au cabestan pour nous haler. Il avait quarante-neuf ans, un bonnet rouge, et il criait après le câble, qui mollissait. » Elle touche sa médaille. « Il crie toujours, je suppose. Il n'a pas eu le temps de savoir que nous étions arrivés. »",
    ],
    choices: [{ back: "K02_orable" }] },
  K02_orable_lampe: { act: "I", title: "Trois lampes au même nom", place: "troisnoyers",
    text: [
      "« Laquelle ? » demandes-tu. « Celle que tu veux. Eux n'en sauront rien ; c'est toi qui le sauras. » Elle te tend un brin de paille enflammé.",
      "Tu longes les étagères. Des noms que tu connais par les maisons : Hureau, Lhoste, Pansard. Et, sur la planche du bas, trois lampes côte à côte, plus vieilles que les autres, dont la terre a noirci : *Josse Noyer. Bérarde Noyer. Girard Noyer.* Leur huile est fraîche. Quelqu'un les remplit.",
      "Line s'appelle Adeline Noyer. En neuf ans, elle ne t'a jamais dit qu'elle avait quelqu'un là-bas.",
      "Tu allumes celle du milieu, sans bien savoir pourquoi celle-là. La flamme se couche vers l'est, puis se redresse.",
    ],
    choices: [{ back: "K02_orable" }] },
  K02_orable_poupee: { act: "I", title: "Ce que gardent les Veilleurs", place: "troisnoyers",
    text: [
      "Dame Orable prend la poupée à deux mains. Elle regarde la robe taillée dans un tablier, les deux boutons dépareillés, et elle ne te demande pas d'où elle vient : elle demande où. « Un lit d'enfant, dis-tu. Une métairie, avant la croix des Hautes-Bordes. »",
      "« Nous les gardons. Les jouets, les sabots, les livres de messe. Nous en avons des coffres, à Sainte-Aure, avec le nom de la maison sur chaque chose. Le jour où ils s'éveilleront, il faudra bien leur rendre leurs affaires. » Elle range la poupée dans son sac de pèlerine, entre un missel et un pain. « C'est la première fois qu'une personne de ton métier m'en rapporte une. D'habitude, je les rachète. »",
      "Elle défait le cordon qu'elle a au cou et te passe sa médaille : une sainte Aure d'argent, un sablier dans une main, une lampe dans l'autre. « Elle ouvre des portes chez les nôtres. À l'abbaye surtout. Montre-la, et dis que tu viens de ma part. »",
    ],
    choices: [{ back: "K02_orable" }] },
  K02_orable_lettre: { act: "I", title: "Une lettre pour un bonnet rouge", place: "troisnoyers",
    text: [
      "Elle te regarde longtemps. Puis elle sort de son missel une lettre pliée, cachetée d'une goutte de cire, dont le papier a pris la couleur du thé : elle la porte sur elle depuis des années, et la récrit chaque hiver.",
      "« Arvoise. La rive gauche, la cale du bac. Un homme au cabestan, les deux mains sur la barre, en bonnet rouge. Tu la lui mettras dans la poche de sa veste, du côté du cœur. C'est tout. » Sa voix n'a pas changé ; ses mains, si. « Je sais qu'il ne la lira pas. Je veux qu'il l'ait sur lui quand il le pourra. »",
    ],
    choices: [{ back: "K02_orable" }] },
  K02_orable_refus: { act: "I", title: "Les lampes comptées", place: "troisnoyers",
    text: [
      "« À porter ? » Dame Orable a un sourire mince. « Ceux de ton métier ne portent rien là-dedans. Ils en rapportent. J'ai racheté à un des tiens, l'an passé, la montre de mon oncle, qu'il avait prise à son gousset. Il m'a fait un prix, parce que j'étais de la famille. »",
      "Elle se remet à ses mèches. Il y a des portes que l'on n'ouvre pas en un matin, avec ce qu'on a aux pieds.",
    ],
    choices: [{ back: "K02_orable" }] },
  K02_thomasse: { act: "I", title: "Le cadre de buis", place: "troisnoyers", fx: { drop: "portrait", gold: 2, quest: "I_portrait", ep: ["perso", 400] },
    text: [
      "La charrette à ridelles est chargée ; le merle a été hissé tout en haut, sur les matelas. Thomasse te voit venir, et voit ce que tu portes sous le bras. Elle descend du marchepied sans regarder où elle pose les pieds.",
      "C'est un portrait au fusain, de la main d'un peintre de foire : une femme en coiffe, sévère, l'œil un peu de travers. Thomasse l'essuie avec son tablier, bien qu'il soit propre. « Elle louchait. Il l'a faite loucher. Elle lui avait interdit, et il l'a fait quand même. » Elle rit, d'un seul coup, et s'arrête. « Ma sœur... Tu l'as vue ? Elle est comment ? »",
      "Tu lui dis qu'elle est à table, avec son homme. Que la soupe est servie. Qu'elle a l'air de quelqu'un qui va dire quelque chose de drôle. C'est vrai, mot pour mot. Thomasse te compte deux écus dans la main et referme tes doigts dessus, comme on fait aux enfants.",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
});

// ======================================================================== the afternoon: sewing the notebooks
Object.assign(P, {
  K02_couture: { act: "I", title: "Le fil et l'aiguille courbe", place: "troisnoyers",
    text: [
      "Line a fermé la boutique à clef et dégagé l'établi. Les deux cahiers gris sont posés côte à côte, le fil trempe dans une soucoupe où elle a versé du sablier la valeur d'un dé à coudre, et elle a passé sur sa loupe une seconde loupe.",
      "« Tiens les feuilles. Serre. Si un cahier glisse d'un cheveu par rapport à l'autre, ils ne se répondront que de travers, et vous recevrez chacun la moitié des phrases. » Elle pique. L'aiguille courbe entre dans le pli des deux cahiers à la fois et ressort, tirant son fil gris, qui laisse au passage une trace luisante vite bue par le papier.",
      { if: J, text: "Tu as tenu des platines pendant qu'elle rivait, des ressorts pendant qu'elle les armait. Tes mains savent attendre les siennes. C'est la dernière fois qu'elles le font, et tu t'en avises au septième point." },
      { if: R, text: "Tu tiens les feuilles comme elle a dit. Ses mains travaillent à deux doigts des tiennes, tachées de brun, sûres. Tu as passé un quart d'heure dans la cave de cette femme et quatre mois à t'interdire d'y penser ; à présent tu lui tiens son ouvrage, et elle te dit merci chaque fois qu'elle coupe le fil." },
    ],
    choices: [{ label: "« Comment s'en sert-on ? »", to: "K02_couture_regles" }] },
  K02_couture_regles: { act: "I", title: "Vingt-quatre feuilles", place: "troisnoyers",
    text: [
      "« Mal, la première fois, comme de tout. » Line coud sans lever les yeux. « Vingt-quatre feuilles, et vingt-quatre lieues d'ici à la Tour : n'écrivez pas des romans. Le Cahier ne passe ce qu'on y met qu'aux endroits où le temps est mince. Les bornes de la route royale en sont. Les Fondateurs les ont plantées sur une ligne qui part de ma grange et finit sous le balancier ; chacune porte un cadran. En ville, cherchez les cadrans. »",
      "« Il faut que les deux Cahiers soient ouverts ensemble, à la même borne, à soixante ans d'écart. Vous conviendrez d'une heure ; midi est commode, l'ombre vous la donne à tous deux. Celui qui arrive le premier attend. Ce qu'on a écrit en route attend aussi, et passe d'un coup quand l'autre ouvre. »",
      "« Un objet plat tient entre deux pages. Il passe, dans un seul sens : de maintenant vers autrefois. Je l'ai essayé avec une feuille de noyer. Dans l'autre sens, rien ne passe que l'encre. » Elle noue, coupe, souffle sur le nœud. « Dans l'autre sens, on enterre. Une chose mise en terre au pied d'une borne y est encore soixante ans après, si personne n'a creusé. C'est moins savant et cela marche très bien. »",
    ],
    choices: [{ label: "L'aider à finir", to: "K02_couture_fin" }] },
  K02_couture_fin: { act: "I", title: "Ce que Line dit en cousant", place: "troisnoyers", fx: { flag: "tantot:fait", ep: ["perso", 300] },
    text: [
      { if: J, text: "« Écoute bien, maintenant, je ne le répéterai pas devant l'autre. Là-bas, tu ne diras à personne de quelle année tu viens. On enfermait les fous, en 541, et on brûlait un peu les sorciers, les années de mauvaise récolte. Tu diras que tu viens de loin. C'est vrai, et cela dispense de mentir. »" },
      { if: J, text: "« Tu rencontreras à la ferme une fille de neuf ans, qui pose des questions du matin au soir et qui retient les réponses. Fais attention à ce que tu lui promets. » Line tire sur son fil. « Elle s'en souviendra soixante ans. »" },
      { if: R, text: "« Tu as de bons doigts, dit Line au bout d'un moment. Des doigts qui passeraient partout. » Elle tire sur son fil. « On m'a pris du sable, l'hiver dernier. Je l'aurais donné, à qui me l'aurait demandé pour une bonne raison. C'est le défaut des voleurs : ils ne demandent jamais, et l'on ne sait pas ce qu'on aurait répondu. »" },
      { if: R, text: "Tu serres les feuilles. Elle ne te regarde pas ; elle regarde son point. « Ce soir, je te demanderai quelque chose. Tu auras le droit de répondre non. Je te préviens seulement que j'ai mis soixante ans à trouver à qui le demander, et que je n'ai personne d'autre sur ma liste. »" },
      "Vers cinq heures, les deux cahiers sont cousus. Line les pose l'un sur l'autre, puis l'un à côté de l'autre, puis elle en porte un à l'autre bout de la boutique. Elle trace une croix dans le premier. Tu ouvres le second : la page est blanche. « Naturellement, dit-elle. Ma boutique n'est pas une borne. » Elle a pourtant regardé, elle aussi.",
    ],
    choices: [{ label: "Sortir prendre l'air avant le soir", back: "K02_place" }] },
});

// ======================================================================== the afternoon: scouting the way
Object.assign(P, {
  K02_lisiere: { act: "I", title: "Le coude de la haie", place: "troisnoyers",
    text: [
      "Il s'agit de savoir par où l'on passera cette nuit avec une vieille femme qui tousse, sans rencontrer de lanterne. Tu descends par le chemin des lavandières, un panier au bras pour la vraisemblance.",
      "Les jalons rouges courent du bois au gué. La Garde y a trois piquets de deux hommes ; ils se relèvent toutes les quatre heures, tu le vois à la façon dont ceux-ci bâillent. Entre le gué et le bois, la haie du pré Bastien fait un coude, et dans ce coude l'ombre est déjà du soir.",
      { if: J, text: "C'est la première fois que tu viens si près pour autre chose que relever les jalons de Line. De la boutique, la Dormante est une courbe sur du papier. Ici, c'est un pré où l'herbe a cessé de remuer, à quinze pas de tes souliers, et ton corps tout entier te donne sur ce pré un avis que tu n'avais pas demandé." },
      { if: R, text: "Tu connais ce bord comme un marin connaît une côte. Ce que tu ne connaissais pas, ce sont les piquets : la Garde les a doublés depuis hier, et elle a fauché l'herbe sur dix pas devant chaque poste, pour voir venir. Quelqu'un leur a dit qu'il se passerait quelque chose." },
    ],
    choices: [
      { label: "Te glisser le long de la haie jusqu'au coude", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "trou_haie" }, v: 20 }, { if: { has: "route:clocher" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { flag: "route:reperee", ep: ["perso", 400] }, to: "K02_lisiere_coude" }, lose: { to: "K02_lisiere_vu" } },
    ] },
  K02_lisiere_vu: { act: "I", title: "Le panier", place: "troisnoyers",
    text: [
      "« Holà ! Le panier ! » Un des gardes du gué s'est levé. Tu te retournes avec lenteur, tu montres le panier, vide, et tu dis que tu cherches une chèvre. Aux Trois-Noyers, depuis ce matin, tout le monde cherche une chèvre.",
      "Il te renvoie d'un geste. Tu n'as vu le coude que de loin. Assez pour savoir qu'il existe ; trop peu pour dire où l'on y met les pieds dans le noir.",
    ],
    choices: [{ label: "Remonter par le bois", to: "K02_lisiere_rouget" }] },
  K02_lisiere_coude: { act: "I", title: "Cent pas d'ombre", place: "troisnoyers",
    text: [
      "Le coude est bien ce qu'il paraissait : cent pas de haie vive, haute, épaisse, où deux aubépines se rejoignent par-dessus un fossé à sec. Du poste du gué, on voit le dos de la haie. Du poste du bois, on voit son bout. Du fossé, on ne voit que le ciel, et la corde aux chiffons, qui passe juste au-dessus.",
      { after: "trou_haie", text: "Sous le houx, là où Pierrot l'avait dit, il y a un trou de la largeur d'un renard, ou d'un enfant. Line y passera en se baissant et en t'injuriant." },
      "Tu comptes les pas depuis le dernier noisetier, tu notes une souche, une pierre plate, un endroit où le fossé tourne. Cette nuit, il faudra retrouver tout cela avec les pieds.",
    ],
    choices: [
      { label: "Pousser jusqu'à la métairie des Aulnes, puisque tu y es : une pincée", hide: { any: [J, { not: { has: "r:thomasse_demande" } }, { item: "portrait" }] }, if: { stock: "sable", min: 1 }, why: "Il te faudrait une pincée de sable.", fx: { stock: { sable: -1 } }, to: "K02_aulnes" },
      { label: "Remonter par le bois", to: "K02_lisiere_rouget" },
    ] },
  K02_aulnes: { act: "I", title: "La métairie des Aulnes", place: "troisnoyers", fx: { item: "portrait" },
    text: [
      "La métairie est à deux cents pas dans la lisière : une maison basse, un toit de chaume, et cette fumée droite, plantée sur la cheminée comme une plume sur un chapeau. La porte est ouverte. Elle l'était à Pâques.",
      "Dans la salle, il fait le jour qu'il faisait ce lundi-là, à l'heure de la soupe ; tu en as vu cent, de ces salles, et celle-ci te serre la gorge comme la première. Ils sont deux à table. L'homme a sa cuiller à mi-chemin de sa bouche, et une goutte de bouillon pend au bord, ronde, dorée, qui tombe depuis Pâques. La femme lui fait face, penchée, l'œil plissé, les lèvres entrouvertes sur le commencement d'un mot : elle a la figure de quelqu'un qui va dire une chose drôle, et qui sait que ce sera drôle.",
      "Le chat dort sur la pierre de l'âtre. Les flammes sont debout dans le foyer, immobiles, pareilles à du verre filé ; tu as passé la main dedans, une fois, ailleurs, pour savoir. Elles sont tièdes.",
      "Le portrait est sur la cheminée, dans son cadre de buis : une femme en coiffe, au fusain, qui louche un peu. Tu le prends. Tu ne prends rien d'autre. En sortant, tu repousses la porte, par égard pour la soupe.",
    ],
    choices: [{ label: "Ressortir de la lisière, et remonter par le bois", to: "K02_lisiere_rouget" }] },
  K02_lisiere_rouget: { act: "I", title: "Quelqu'un dans le noisetier", place: "troisnoyers", fx: { flag: "tantot:fait" },
    text: [
      "À la corne du bois, un noisetier te parle. « Psst. Hé. Par ici. » Il en tombe un gamin roux, quatorze ans, les manches d'une veste d'homme roulées en boudins, qui regarde derrière toi avant de te regarder.",
      { if: R, text: "Rouget. « Je t'ai pas suivi{e}, d'abord. Je surveillais. » Il baisse la voix. « C'est le Grêlé. C'est lui qui t'a vendu{e} au capitaine, pour un écu, je l'ai vu compter. Et le capitaine a fait venir vingt hommes de plus, de la redoute de Vauxelles. Ils arrivent à la nuit. » Il se tord les mains. « La Courtepaille a dit qu'on lève le camp demain. Elle m'a pas dit dans quelle charrette je montais. Toi, tu pars où ? »" },
      { if: J, text: "« T'es de chez la vieille aux horloges. Je t'ai vu{e} par le carreau. » Il a dit *le carreau* et son regard dit *le soupirail*, puis il se reprend, trop tard et trop vite. « Écoute. Dis à Roquebise... à {autre}, que c'est le Grêlé qui a causé au capitaine. Et qu'il vient vingt gardes de plus à la nuit, de la redoute de Vauxelles. » Il recule déjà. « Et dis-lui que Rouget a rien dit, lui. Sur rien. Même sur l'hiver. »" },
      { if: J, text: "Il a filé entre les troncs avant que tu aies pu demander quel hiver. Tu restes avec la question, et avec ce mot de carreau, à propos d'une maison dont tous les volets sont clos depuis des années." },
    ],
    choices: [
      { label: "« Je ne sais pas encore. Mais je ne partirai pas sans te le dire. »", hide: J, fx: { conf: { rouget: 5 }, flag: "r:rouget_parole" }, back: "K02_place" },
      { label: "« Loin. Ne me suis pas. »", hide: J, back: "K02_place" },
      { label: "Remonter au village avec la nouvelle", hide: R, fx: { flag: "j:rouget_hiver" }, back: "K02_place" },
    ] },
});

module.exports = {
  passages: P,
  extras: {
    items: {
      gnole: { name: "Prune de 589", kind: "soin", heal: 4, unique: false, price: 3, aged: "gnole_vieille", agedSay: "La fiole carrée a tenu. La prune de 589, qui avait douze ans quand on l'a enterrée, en a pris soixante de mieux, et ne s'en porte que plus mal pour qui la boit.", desc: "Une fiole carrée d'eau-de-vie de prune, que le père Lubin gardait pour son enterrement." },
      gnole_vieille: { name: "Très vieille prune", kind: "soin", heal: 6, unique: false, price: 12, desc: "Une eau-de-vie couleur d'ambre, qui réveillerait un dormant, d'après ceux qui n'ont jamais essayé." },
      fromage: { name: "Fromage de chèvre sec", kind: "soin", heal: 2, unique: false, price: 1, rots: true, desc: "Un fromage de Blanchette, gros comme le poing, dur comme une promesse." },
      medaille: { name: "Médaille de sainte Aure", kind: "divers", keep: true, price: 0, desc: "Une sainte d'argent, un sablier dans une main, une lampe dans l'autre : la médaille de dame Orable. Elle ouvre des portes chez les Veilleurs." },
      lettre_orable: { name: "Lettre de dame Orable", kind: "divers", keep: true, nodepot: true, price: 0, desc: "Une lettre cachetée, au papier couleur de thé. Pour l'homme au bonnet rouge, au cabestan du bac d'Arvoise : dans la poche de sa veste, du côté du cœur." },
      portrait: { name: "Portrait au fusain", kind: "divers", price: 0, desc: "Une femme en coiffe, sévère, qui louche un peu, dans un cadre de buis. La mère de Thomasse." },
    },
    people: {
      lubin: { name: "Le père Lubin", f: false, aka: ["Lubin", "le père Lubin"], face: { age: "ancien", skin: "hale", hair: "blanc", coif: "degarni", eyes: "ronds", iris: "bleu", nose: "large", lips: "fines", shape: "rond" },
        aspect: { allure: "quatre-vingt-un ans, sur un banc", signe: "une fourche en travers des genoux" }, qui: "Le plus vieil homme des Trois-Noyers.", desc: "Il a déménagé trois fois devant la Dormante et tient son coq pour le seul être raisonnable du village." },
      orable: { name: "Dame Orable", f: true, aka: ["dame Orable", "Orable"], face: { age: "adulte", skin: "clair", hair: "brun", coif: "chignon", eyes: "amande", iris: "gris", nose: "fin", lips: "fines", shape: "ovale" },
        aspect: { allure: "quarante ans, en noir, très droite", signe: "une médaille d'argent au cou" }, qui: "Une Veilleuse de Port-Régent, en pèlerinage.", desc: "Elle fait chaque printemps le tour des reposoirs de la lisière. Son père est pris à Arvoise." },
    },
    quests: [
      { id: "I_lubin", act: "I", kind: "annexe", title: "Le père Lubin ne part pas", start: "K02_lubin" },
      { id: "I_chevre", act: "I", kind: "annexe", title: "La chèvre de Pierrot", start: "K02_pierrot" },
      { id: "I_portrait", act: "II", kind: "annexe", title: "Le portrait de Thomasse", start: "K01r_chemin" },
      { id: "R_lettre", act: "II", kind: "annexe", title: "Une lettre pour un bonnet rouge" },
    ],
  },
};
