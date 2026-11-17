// Act I, the common thread (first half): the morning after, the Douairière's lesson, the council (posts `a1`), then
// the nine o'clock rendezvous at the Remonteur's, what is found there, and the vote on the way out (`fuite_a1`).
// Shared marks read here: monde:p:reine (prologue) · monde:a1:empreintes, monde:a1:plume (main) ·
// monde:a1:remonteur_parle, monde:a1:egouts, monde:a1:ugolin_vu (oeil) · monde:a1:itineraires, monde:a1:crochemore (voix).
// Set here: monde:a1:epreuve (main's search), monde:a1:coup_vu (oeil's), monde:a1:lettre_prevot (voix's).
var POSTE = function (m, o, v) { return [{ if: { role: "a1", is: "main" }, to: m }, { if: { role: "a1", is: "oeil" }, to: o }, { to: v }]; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ the morning after
    A1c_matin: { act: "I", title: "Le lendemain de la Saint-Fer", place: "clef_tordue",
      fx: { catchup: 2, catchupWhy: "la nuit de la Saint-Fer", until: 8 },
      text: [
        "Le jour entre par la lucarne avec précaution, comme un créancier qui connaît la maison. Il trouve le grenier tel que la nuit l'a laissé : trois paillasses, trois dormeurs habillés, et sur le coffre, en trois tas, plus d'or que la compagnie du Rossignol n'en a vu depuis sa fondation.",
        "Tu restes un moment les yeux ouverts, à écouter. Aiguemorne s'éveille de bas en haut, selon l'ordre des fortunes. D'abord les Bas-Fonds, leurs limes, leurs seaux, leurs disputes de palier ; puis les marteaux de la rue des Ferronniers ; et enfin, très haut, quand tout le monde travaille déjà, la grosse cloche de la citadelle, qui sonne huit coups pour ceux qui ont le loisir de les compter.",
        "Entre le septième et le huitième, comme toujours, il y a ce petit retard que toute la ville connaît. Les horlogers disent que c'est l'âge. Les vieilles disent que c'est le Juge qui reprend son souffle.",
        "En bas, la Douairière cogne au plafond avec un manche à balai. C'est le signal du conseil.",
      ],
      choices: [{ label: "Descendre à la salle", to: "A1c_salle", big: true }] },

    A1c_salle: { act: "I", title: "La salle de la Clef Tordue", place: "clef_tordue", hub: true, backName: "la salle de la Clef Tordue",
      text: [
        { first: true, text: "La grande salle de la Clef Tordue, le matin, appartient à la maison. Les volets sont à demi poussés, les bancs retournés sur les tables, et il flotte encore sous les poutres l'odeur de la veille, vin chaud, suif et laine mouillée, que la Douairière appelle son fonds de commerce." },
        { first: true, text: "Elle a dégagé la table du milieu. Elle y a posé une miche, un pot de saindoux, un cruchon, et un morceau de charbon. {autre} y sont déjà, ou descendent derrière toi. Fifrelin, à cheval sur un tonneau, mange une pomme avec l'air d'un homme qui a des nouvelles et entend qu'on les lui demande." },
        { again: true, text: "La salle, ses volets mi-clos, la table du milieu. La Douairière attend, le charbon entre deux doigts." },
      ],
      choices: [
        { label: "Demander à Fifrelin ce que dit la ville", to: "A1c_nouvelles", once: true },
        { label: "« Parlez-nous de la Tour. »", to: "A1c_tour", once: true },
        { label: "« Et le Juge ? Qu'est-ce qu'il a déjà dit, au juste ? »", to: "A1c_juge", once: true, if: { seen: "A1c_tour" }, hide: { not: { seen: "A1c_tour" } } },
        { label: "« Qui entre là-haut, d'une Septaine à l'autre ? »", to: "A1c_remonteur", once: true, if: { seen: "A1c_tour" }, hide: { not: { seen: "A1c_tour" } } },
        { label: "« Les trois Clavaires : où les voit-on ? »", to: "A1c_clavaires", once: true, if: { seen: "A1c_tour" }, hide: { not: { seen: "A1c_tour" } } },
        { label: "Passer au comptoir", to: "A1c_comptoir" },
        { label: "Monter un instant au grenier, seul{e}", to: "A1c_reve", once: true },
        { label: "Partager les postes", to: "A1c_conseil", big: true, if: { seen: "A1c_tour" }, hide: { not: { seen: "A1c_tour" } } },
      ] },

    A1c_nouvelles: { act: "I", title: "Ce que dit la ville", place: "clef_tordue",
      text: [
        "Fifrelin jette son trognon par la fenêtre, s'essuie les mains à sa culotte, et commence par le commencement, c'est-à-dire par lui.",
        { if: { has: "monde:p:reine=propre" }, text: "« J'étais rue des Ferronniers à l'ouverture. Ils ont rien su de la nuit. Rien ! C'est ce matin, au trésor, quand le Syndic a voulu la faire jouer devant les jurés. Il paraît qu'il est devenu de la couleur de son habit. Les apprentis rigolent, les Maîtres font fermer les volets, et le crieur a ordre de rien crier. Toute la ville le sait, du coup. »", else: "« J'étais rue des Ferronniers à l'ouverture. Y a des placards à tous les coins : cinquante écus à qui donnera les voleurs de la Reine. Cinquante ! Les Maîtres ont fait sonner leur cloche jusqu'à deux heures. Le guet a retourné trois garnis et le Marteau d'Or, et il a arrêté un montreur de singe, rapport au singe. »" },
        { if: { has: "monde:p:cadenas_vu" }, text: "Il baisse la voix. « Et le Cadenas a fait dessiner une figure. Je l'ai vue chez le sergent du pont. Ça ressemble à personne, mais ça ressemble un peu à l'un de vous. »" },
        "« Et les Gants-Noirs ? » demande la Douairière sans lever les yeux de sa miche.",
        "« Sans-Bruit a payé à boire à tout son monde, hier, à une heure du matin. Elle a dit : *à la santé de ceux qui se lèvent tôt.* » Fifrelin hausse une épaule. « Elle riait. Mais Pipeau dit qu'elle a cassé le verre après. »",
      ],
      choices: [{ back: "A1c_salle" }] },

    A1c_tour: { act: "I", title: "Une tour, au charbon, sur une table", place: "clef_tordue",
      text: [
        "La Douairière dessine comme elle compte : sans une rature. En six traits, la citadelle est sur la table, avec son rempart, sa chapelle, la longue bâtisse des Plombs, et au milieu une chose droite et nue qu'elle noircit d'un pouce.",
        "« La Tour de l'Horloge-Close. Cent quarante pieds, cent cinq ans. Elle a une horloge, comme son nom le dit, et l'horloge n'a point d'aiguilles au-dehors, comme son nom le dit aussi : elle sonne, et c'est tout ce que la ville a le droit d'en savoir. » Le charbon descend. « En bas, une porte, un corps de garde, douze hommes. Au-dessus, la salle des Poids, où pendent les chaînes. Au-dessus encore, tout en haut, la Chambre. »",
        "Elle trace un rectangle, et dans le rectangle trois petits ronds.",
        "« La porte de la Chambre. Trois serrures, de trois mains, de trois siècles pour ainsi dire : chacun des Clavaires a fait refaire la sienne par son homme, pour être sûr des deux autres. Une clef seule ouvre son pêne et rien de plus. Il faut les trois, tournées ensemble. Derrière, il y a le Juge. Je n'y suis jamais montée. Personne de chez nous n'y est monté. »",
        "Elle pose le charbon. « Voilà ce qu'on sait, et c'est de la suie sur du bois. Avant de courir après trois clefs, je veux savoir à quoi ressemblent trois serrures, qui tient l'escalier, et ce que font ces messieurs de leurs journées. »",
      ],
      choices: [{ back: "A1c_salle" }] },

    A1c_juge: { act: "I", title: "Neuf Sentences", place: "clef_tordue",
      text: [
        "« Ce qu'il a dit ? » La Douairière se coupe une tartine, ce qui lui laisse le temps de choisir. « Il nomme le Gouverneur pour sept ans, d'abord. Ensuite il tranche les Sept Causes : les sept procès que la ville n'a pas su finir toute seule. On les lui lit, la Nuit des Clefs, devant la porte. Le lendemain à midi, les Clavaires ressortent avec un rouleau de bronze frappé de lettres, et le crieur lit. *Le Bronze a dit.* Après cela, on se tait, même les avocats. »",
        "Elle mâche un moment.",
        "« J'en ai entendu neuf. Les premières, c'étaient des Sentences de riche : la taxe sur le pain bis, le droit de porte doublé pour les charrettes à bras. Et puis il y a une quarantaine d'années, le Bronze s'est mis à avoir des idées. Le péage du Pont-aux-Clefs, supprimé pour les gens à pied. L'hospice de la Morne, fondé sur les rentes des Maîtres. Défense de mettre aux Plombs une femme grosse. La dernière fois, il a cassé le bail des lavoirs, que le Doyen voulait pour lui. »",
        "Elle regarde sa tartine comme si la question y était écrite. « Le Syndic appelle ça l'usure du mécanisme. Moi, j'ai connu des mécanismes. Je n'en ai jamais vu un qui s'use du côté des pauvres. »",
      ],
      fx: { clue: "j_bonte" },
      choices: [{ back: "A1c_salle" }] },

    A1c_remonteur: { act: "I", title: "L'homme à la burette", place: "clef_tordue",
      text: [
        "« Un seul. » Elle lève un doigt taché de charbon. « Le Remonteur. Maître Symphorien Balancier, de la guilde des Heures, soixante-dix ans passés. Il monte tous les matins à six heures avec sa burette et sa lanterne, il graisse les chaînes, il remonte les poids, il redescend à huit. Voilà quarante ans qu'il fait ce métier, et son père avant lui. »",
        "« Il entre dans la Chambre ? »",
        "« Il s'arrête à la salle des Poids, juste dessous. Le Juge se soigne par le bas, à ce qu'on dit, comme les vaches. La Chambre, Balancier n'y met le pied que tous les sept ans, derrière les trois Clavaires, pour huiler ce qu'on lui montre. » Elle réfléchit. « Mais quarante ans sous un plancher, on finit par connaître l'étage au-dessus. S'il y a dans cette ville un homme qui sait comment c'est fait là-haut, c'est lui. Il habite impasse des Poids, au pied du rempart. Il vit seul. Il passe pour honnête, ce qui complique. »",
      ],
      choices: [{ back: "A1c_salle" }] },

    A1c_clavaires: { act: "I", title: "Trois messieurs", place: "clef_tordue",
      text: [
        "« Où on les voit ? Partout où il y a un dais. » La Douairière compte sur ses doigts. « Quincarnon, le Syndic : le Fer. Monseigneur de Saint-Brumaire, le Doyen des Morts : la Cendre. Le comte de Brandelis, Connétable : le Sang. D'ordinaire, ils se croisent à la cathédrale en regardant chacun son missel. »",
        "« Ce soir, dit Fifrelin, y a la réception des Heures. »",
        "« Tais-toi quand tu as raison, ça m'agace. » Elle se tourne vers vous. « Les horlogers reçoivent à l'hôtel de ville le lendemain de la Saint-Fer, pour faire pièce aux serruriers. À quatre heures précises : ces gens-là mettraient un cadran à leur soupe. Les trois Clavaires y paraissent, par force, et ils quittent Aiguemorne aussitôt après, chacun pour ses terres, la clef au cou. C'est la dernière fois avant six semaines qu'on les aura tous les trois dans la même pièce. Il faudrait qu'en sortant de là on sache par quelle route s'en va chaque clef, avec quelle escorte, et où elle couchera. »",
      ],
      choices: [{ back: "A1c_salle" }] },

    A1c_comptoir: { act: "I", title: "Le comptoir de la Douairière", place: "clef_tordue", shop: "douairiere",
      text: [
        "Le comptoir de la Douairière a deux tiroirs. Celui de droite contient ce qu'elle vend à tout le monde. Celui de gauche s'ouvre avec une clef qu'elle porte entre la peau et la chemise, et contient le métier.",
        "« Vous avez de l'or, pour une fois. Je vous fais donc le prix des gens qui ont de l'or. » Elle ouvre le tiroir de gauche. « C'est le même que l'autre. Mais je vous le fais avec plus de plaisir. »",
      ],
      choices: [{ back: "A1c_salle" }] },

    // ------------------------------------------------------------ a moment alone (one scene per dream)
    A1c_reve: { act: "I", title: "Au grenier", place: "clef_tordue", branch: [
      { if: { is: { reve: "atelier" } }, to: "A1c_reve_atelier" }, { if: { is: { reve: "plombs" } }, to: "A1c_reve_plombs" },
      { if: { is: { reve: "nom" } }, to: "A1c_reve_nom" }, { to: "A1c_reve_large" }] },
    A1c_reve_atelier: { act: "I", title: "Le bas de laine", place: "clef_tordue",
      text: [
        "Tu vides le bas de laine sur la paillasse, et tu y ajoutes ta part de la nuit. Cela fait un tas. Tu le comptes, par piles de dix, avec un soin que tu n'avais jamais eu l'occasion d'exercer.",
        "Rue des Ferronniers, à l'angle de la venelle des Limeurs, il y a une échoppe fermée depuis la Chandeleur : un volet vert, une enseigne décrochée dont il reste les deux pitons. Tu passes devant chaque fois que tu montes. Tu sais la largeur de la devanture, à un pouce près, pour l'avoir mesurée de tes pas un soir de pluie où personne ne regardait.",
        "Avec trois mille écus à trois, les deux pitons porteraient un nom. Tu remets l'or dans la laine, pièce à pièce. Une enseigne honnête payée par le plus grand vol du siècle : la Douairière dirait que toutes les enseignes de la rue ont commencé ainsi, et que la différence est une question de date.",
      ],
      fx: { ep: ["perso", 200] },
      choices: [{ back: "A1c_salle" }] },
    A1c_reve_plombs: { act: "I", title: "La ligne grise", place: "clef_tordue",
      text: [
        "Par la lucarne, en se penchant jusqu'à la taille, on voit les Plombs. La lumière du matin les prend de biais et leur donne, pour un quart d'heure, une couleur d'étain neuf ; ensuite ils redeviennent gris jusqu'au soir.",
        "Trois cents écus de dette. Tu as ce matin, sous ta paillasse, de quoi en payer une part, et dans six semaines, si tout va, de quoi payer dix fois le reste. Tu fais ce calcul lentement, pour le plaisir de le voir tomber juste.",
        "Puis tu en fais un autre, que tu aimes moins. La Tour de l'Horloge-Close est à cent pas des Plombs, dans la même enceinte. Si l'affaire tourne mal, vous serez deux de la famille sous les mêmes toits, et il n'y aura plus personne dehors pour compter.",
      ],
      fx: { ep: ["perso", 200] },
      choices: [{ back: "A1c_salle" }] },
    A1c_reve_nom: { act: "I", title: "Une clef achetée à la grosse", place: "clef_tordue",
      text: [
        "Tu sors ta clef de baptême de sous ta chemise et tu la regardes au jour. Les clefs des enfants de famille ont un chiffre, une date, quelquefois une devise. La tienne porte un numéro, frappé au poinçon : le rang que tu avais dans le lot.",
        "La Douairière t'a dit, cette nuit, sans y penser, que l'hospice de la Morne avait été fondé par une Sentence. Tu y as passé dix ans et tu l'ignorais. On vous y apprenait le catéchisme, la lime et la reconnaissance ; on avait dû juger que la reconnaissance envers un automate dépassait les moyens d'un enfant.",
        "Le Bronze a dit qu'il y aurait un toit pour les enfants trouvés des Bas-Fonds, et il y a eu un toit, et tu as dormi dessous. Tu te demandes pour la première fois ce qu'une machine pouvait bien savoir de ces enfants-là.",
      ],
      fx: { ep: ["perso", 200] },
      choices: [{ back: "A1c_salle" }] },
    A1c_reve_large: { act: "I", title: "La carte du colporteur", place: "clef_tordue",
      text: [
        "Tu décloues la carte, tu la plies en huit, et tu la glisses dans ta chemise. C'est la première fois qu'elle quitte le mur.",
        "Ferrières est dessus, au nord-est, avec un petit marteau. Ossevaux, au sud, avec une croix. Brandelis, à l'ouest, avec un arbre. Tu les connaissais par cœur comme on connaît des saints dont on n'attend rien ; et voici qu'on te paie pour y aller, les trois, l'un après l'autre.",
        "Tu cherches du doigt la suite : au-delà de Brandelis, la route continue vers un nom à demi effacé par le pli, puis vers une ligne bleue où le colporteur a dessiné un bateau. Trois mille écus à trois mènent très loin sur une carte. Il y a seulement, entre la ligne bleue et toi, une tour de cent quarante pieds.",
      ],
      fx: { ep: ["perso", 200] },
      choices: [{ back: "A1c_salle" }] },

    // ------------------------------------------------------------ the council
    A1c_conseil: { act: "I", title: "Trois besognes pour un jour", place: "clef_tordue",
      text: [
        "La Douairière essuie la table du plat de la main. La Tour s'efface ; il en reste une ombre grise dans le grain du bois.",
        "« Rendez-vous ce soir. Vous aurez la journée, et pas une de plus : demain les Clavaires sont sur les routes, et après-demain le Cadenas aura fini de réfléchir. »",
        "**La main.** La citadelle. Monter, entrer dans la Tour par où l'on peut, aller jusqu'à la porte aux trois serrures, et en rapporter le portrait : trois entrées de clef, moulées dans la cire.",
        "**L'œil.** La ville basse et l'impasse des Poids. Trouver le Remonteur, savoir qui il voit, qui le suit, de quoi il a peur ; et, s'il est homme à parler, l'amener à le faire.",
        "**La voix.** La place aux Heures. Entrer à la réception des horlogers, approcher les trois Clavaires avant qu'ils montent en voiture, et savoir où va chaque clef.",
        "*Chaque poste revient à un seul d'entre vous. On peut changer depuis hier soir : la maison n'a pas de préséances. Mettez-vous d'accord à voix haute ; le premier qui choisit est servi.*",
      ],
      choices: [
        { label: "La main : tu prends la citadelle", role: "a1", option: "main", to: "A1m_pied", big: true },
        { label: "L'œil : tu prends la ville basse", role: "a1", option: "oeil", to: "A1o_basfonds", big: true },
        { label: "La voix : tu prends la réception", role: "a1", option: "voix", to: "A1v_place", big: true },
      ] },

    // ------------------------------------------------------------ nine o'clock, impasse des Poids
    A1c_rdv: { act: "I", title: "Neuf heures, impasse des Poids", place: "poids", charniere: true,
      fx: { until: 21 },
      text: [
        "L'impasse des Poids est une fente au pied du rempart, large de deux brouettes, où le soleil descend à midi pour un quart d'heure et où la nuit s'installe dès les vêpres. Elle doit son nom aux contrepoids de l'ancienne herse, deux blocs de fonte gros comme des veaux, qu'on a laissés au fond lorsque la herse a cessé de servir. Personne n'a jamais trouvé d'endroit où les mettre.",
        "Six maisons s'y serrent, noires, étroites, coiffées d'ardoise. Celle du fond porte au-dessus de sa porte un cadran de pierre dont le fer s'est perdu. Une lumière brûle à l'étage, jaune, immobile.",
        "Neuf heures sonnent à la citadelle, juste au-dessus de ta tête, si près que tu sens les coups dans le pavé. Tu attends les autres dans l'ombre des contrepoids.",
      ],
      choices: [{ label: "Retrouver {autre}", to: "A1c_commun", big: true }] },

    A1c_commun: { act: "I", title: "Ce que la journée a donné", place: "poids",
      text: [
        "Vous voilà trois, accroupis entre deux blocs de fonte, à parler dans le col de vos manteaux.",
        { if: { not: { role: "a1", is: "main" } }, text: "{qui:a1:main} sent la pierre froide et l'huile de machine." },
        { if: { has: "monde:a1:empreintes" }, text: "**Du côté de la main.** Les trois serrures de la Chambre sont dans la cire : trois entrées, trois formes, dont aucune ne ressemble aux deux autres. La Douairière saura dire, à les voir, de quel atelier sort chacune.", else: "**Du côté de la main.** La Tour a été vue du dedans, jusqu'à l'antichambre. La porte aux trois serrures existe, elle est en chêne ferré, et elle a gardé le secret de ses entrées : la cire est restée dans la poche." },
        { if: { has: "monde:a1:plume" }, text: "Et il y a autre chose, que {qui:a1:main} raconte en cherchant ses mots : derrière la porte, dans la Chambre où personne ne monte, un petit bruit. Un grattement léger, régulier, qui s'arrête et qui reprend." },
        { if: { not: { role: "a1", is: "oeil" } }, text: "{qui:a1:oeil} a de la boue de la Morne jusqu'aux genoux." },
        { if: { has: "monde:a1:remonteur_parle" }, text: "**Du côté de l'œil.** Le Remonteur a parlé, quatre mots, sous un porche, en regardant par-dessus son épaule : *ce soir, neuf heures, chez moi, par la cour.* Il a quelque chose à remettre, et il veut le remettre à des gens qui ne soient ni du Fer, ni de la Cendre, ni du Sang.", else: "**Du côté de l'œil.** Le Remonteur s'est dérobé toute la journée, comme un homme qui se sait suivi. Mais à la brune, un gamin a porté un billet à la Clef Tordue, sans signature, d'une écriture de vieil horloger : *Aux Rossignols. Ce soir, neuf heures, impasse des Poids, par la cour. Venez tous.*" },
        { if: { has: "monde:a1:ugolin_vu" }, text: "Vers six heures, un homme a été vu deux fois au coin de l'impasse : un colosse à tête rase, en manteau de drap, qui regardait la lumière de l'étage." },
        { if: { not: { role: "a1", is: "voix" } }, text: "{qui:a1:voix} a encore de la poudre de riz au col." },
        { if: { has: "monde:a1:itineraires" }, text: "**Du côté de la voix.** Les trois routes sont connues. Le Syndic part pour Ferrières par le coche du Nord, où l'on coule dans trois semaines la grande cloche de la guilde. Le Doyen descend à Ossevaux pour la fête des Trépassés. Le Connétable rentre à Brandelis ouvrir ses Grandes Chasses. Chacun emporte sa clef au cou.", else: "**Du côté de la voix.** La réception a été rude. Les trois Clavaires partent bien cette nuit, chacun pour ses terres ; Ferrières, Ossevaux et Brandelis sont les trois noms qu'on a pu saisir, sans le détail des routes." },
        { if: { has: "monde:a1:crochemore" }, text: "Il y avait là aussi le président des Heures, Maître Crochemore, arrière-petit-fils de celui qui a bâti le Juge. Il parle beaucoup, et il a pris {qui:a1:voix} en amitié, ce qui chez lui consiste à expliquer." },
        "La lumière de l'étage n'a pas bougé depuis que vous êtes là.",
      ],
      choices: [{ label: "Entrer par la cour, comme il l'a demandé", to: "A1c_escalier", big: true }] },

    A1c_escalier: { act: "I", title: "La maison du Remonteur", place: "poids", ambiance: "nuit",
      text: [
        "La porte de la cour est restée entrebâillée. Derrière elle, un carré de pavés moussus, un puits, un appentis où sèchent des cordes à boyau, et un escalier de bois qui monte le long du mur jusqu'à l'étage.",
        "C'est en posant le pied sur la première marche que tu entends la maison. Elle bat. De haut en bas, derrière les murs, des dizaines de mouvements d'horlogerie vont leur train, chacun à sa cadence, les gros lentement, les petits à pas pressés ; et de cette multitude de tics qui ne s'accordent jamais sort une espèce de bruissement vivant, pareil à celui d'une ruche, ou d'une salle où beaucoup de gens attendent en remuant les doigts.",
        "Le vieil homme a passé sa vie à remonter une horloge sans aiguilles. Il s'est dédommagé chez lui.",
        "L'escalier craque. Personne ne vient à la rampe. La porte du haut est ouverte sur la lumière jaune.",
      ],
      choices: [{ label: "Monter", to: "A1c_mort" }] },

    A1c_mort: { act: "I", title: "Quarante horloges", place: "poids", ambiance: "nuit",
      text: [
        "L'atelier tient tout l'étage. Il y a des horloges sur les quatre murs, du plancher aux solives : des comtoises en chemise de sapin, des cartels dorés, des coucous, des œils-de-bœuf, des squelettes de laiton sous leurs globes, et toutes marchent. Quarante balanciers vont et viennent dans la lumière de la lampe, quarante disques de cuivre qui passent et repassent comme des regards. On a d'abord la sensation d'entrer dans une foule.",
        "Maître Balancier est à son établi, sous la lampe. Il est assis, la joue posée sur le bois, les bras pendants, dans la pose d'un homme que le sommeil a pris sur l'ouvrage. Ses bésicles ont glissé jusqu'au bord de la table. Sa burette, renversée, a fait sur le plancher une flaque d'huile claire où tremble le reflet de la flamme.",
        "Tu fais le tour. Derrière l'oreille droite, ses cheveux blancs sont collés par quelque chose de sombre, et l'os, à cet endroit, a pris une forme qui n'est plus la sienne : un creux rond, net, de la largeur d'une pièce de cinq sous.",
        "Sa main est tiède encore. Devant lui, sur l'établi, une petite pendule de voyage, ouverte, s'est arrêtée à huit heures et demie. C'est la seule de toute la pièce qui se taise ; et les quarante autres continuent, au-dessus de ce silence, de compter un temps dont leur maître n'a plus l'usage.",
      ],
      fx: { meet: "balancier", flag: "monde:a1:balancier_mort", ep: ["histoire", 1500] },
      choices: [{ label: "Regarder vite, chacun de son côté, avant de toucher à rien", to: POSTE("A1c_f_main", "A1c_f_oeil", "A1c_f_voix"), big: true }] },

    // each post looks where its trade has taught it to look
    A1c_f_main: { act: "I", title: "Les boîtes", place: "poids", ambiance: "nuit",
      text: [
        "Tu laisses le mort aux autres. Ton métier, ce sont les choses fermées, et un horloger qui avait quelque chose à remettre l'aura mis là où un horloger cache.",
        "Les tiroirs de l'établi ont été tirés, vidés, jetés à terre : quelqu'un a cherché ici avant toi, vite, avec de grosses mains. Il a retourné le matelas dans l'alcôve et crevé le traversin. Il a laissé les horloges. Un homme pressé ne fouille pas quarante boîtes qui marchent.",
        "Tu les regardes une à une. Trente-neuf balanciers battent franc. Le quarantième, dans une comtoise de sapin peinte de roses, près de la fenêtre, a un battement plus court que sa caisse ne le voudrait, comme si quelque chose, derrière, lui mesurait la place.",
      ],
      choices: [
        { label: "Ouvrir la comtoise et sonder le fond de la caisse", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { item: "rossignols" }, v: 10 }] }, win: { fx: { flag: "monde:a1:epreuve", clue: "s_epreuve", ep: ["seance", 1500] }, to: "A1c_f_main_ok" }, lose: { fx: { ep: ["seance", 500] }, to: "A1c_f_main_ko" } },
      ] },
    A1c_f_main_ok: { act: "I", title: "Un double fond", place: "poids", ambiance: "nuit",
      text: [
        "Le fond de la caisse est une planche rapportée, tenue par deux tourniquets de laiton que la poussière a oubliés. Elle vient. Derrière, à plat contre le mur, un feuillet de papier fort, plié en deux, noirci d'un côté à la mine de plomb.",
        "C'est un frottis, comme en prennent les graveurs pour juger leur ouvrage : on pose le papier sur le métal, on passe la mine, et les lettres sortent en blanc. Celles-ci sont hautes, carrées, d'un style que tu as vu toute ta vie sur les rouleaux que lit le crieur. Le feuillet n'en a pris qu'un morceau.",
        "*…et qu'il en soit ainsi à chaque Septaine, dans les mêmes termes, sans qu'il soit besoin d'y revenir ni d'y rien changer, le Bronze ayant dit une fois pour toutes…*",
        "Tu le glisses sous ta chemise. Le balancier, délivré, retrouve toute sa course.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },
    A1c_f_main_ko: { act: "I", title: "Trop de boîtes", place: "poids", ambiance: "nuit",
      text: [
        "Tu ouvres la comtoise. Tu sondes, tu frappes du doigt, tu passes l'ongle dans les joints ; et tes mains, qui savent ce travail, le font mal, parce qu'à trois pas de toi un vieil homme tiède a la joue sur son établi, et que quarante balanciers te regardent chercher.",
        "Il y a quelque chose derrière cette planche. Tu en jurerais. Il te faudrait une minute de calme pour trouver par où elle tient, et la maison n'en a plus à donner.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },

    A1c_f_oeil: { act: "I", title: "Le plancher", place: "poids", ambiance: "nuit",
      text: [
        "Tu laisses les tiroirs aux autres. Ton métier, c'est ce que les gens laissent derrière eux sans le savoir, et celui qui a fait cela est reparti il y a une demi-heure, par cette porte.",
        "Tu prends la lampe et tu la baisses jusqu'au plancher, de biais, comme font les lavandières pour chercher une épingle. Le bois est vieux, ciré, propre : le Remonteur balayait. Tout ce qui s'y trouve ce soir y est donc venu ce soir.",
      ],
      choices: [
        { label: "Lire le plancher, de la porte à l'établi", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "monde:a1:ugolin_vu" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }] }, win: { fx: { flag: "monde:a1:coup_vu", clue: ["r_coup", "r_machefer"], ep: ["seance", 1500] }, to: "A1c_f_oeil_ok" }, lose: { fx: { clue: "r_coup", ep: ["seance", 500] }, to: "A1c_f_oeil_ko" } },
      ] },
    A1c_f_oeil_ok: { act: "I", title: "Ce qu'un homme laisse", place: "poids", ambiance: "nuit",
      text: [
        "Il est entré sans courir. Ses semelles ont marqué la cire, de la porte à l'établi : larges, ferrées à clous ronds, enfoncées du talon comme celles des gens qui pèsent. Il s'est tenu derrière la chaise. Le vieil homme ne s'est pas levé ; il connaissait le visiteur, ou il l'attendait.",
        "Un seul coup. Le creux, derrière l'oreille, est rond et à bords francs. Une canne aurait fendu, une pierre aurait écrasé. Ce qui a fait cela avait une tête d'acier pas plus large qu'une pièce de cinq sous, et un bras derrière qui en avait l'habitude.",
        "Et dans les marques de semelles, à chaque pas, une poussière qui n'est pas d'ici. Tu en prends une pincée, tu la roules entre deux doigts. C'est noir, vitreux, cela crisse : de la crasse de forge, ce mâchefer que les souliers ramassent autour des fourneaux. L'impasse des Poids est pavée, et il a plu ce matin. Cet homme a rapporté cela de loin, dans ses coutures.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },
    A1c_f_oeil_ko: { act: "I", title: "Un seul coup", place: "poids", ambiance: "nuit",
      text: [
        "Tu vois ce qu'on ne peut pas manquer : un seul coup, derrière l'oreille, rond comme un poinçon. Celui qui a frappé savait où, et n'a pas eu à recommencer.",
        "Le reste se brouille. Vous êtes trois à avoir marché sur ce plancher depuis une minute, et tes propres pas y sont mêlés à ceux que tu cherches. Tu relèves la lampe avec le sentiment d'avoir effacé de tes semelles la moitié d'une phrase.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },

    A1c_f_voix: { act: "I", title: "L'établi", place: "poids", ambiance: "nuit",
      text: [
        "Tu laisses le plancher et les boîtes aux autres. Ton métier, ce sont les gens, et il en reste un dans cette pièce, qui avait quelque chose à dire.",
        "Tu te penches sur lui. Il sent le tabac froid et l'huile fine. Sa main droite, celle qui pend, a de l'encre fraîche à l'index. Sur l'établi, près de la pendule arrêtée, l'encrier est ouvert, la plume posée en travers ; mais il n'y a devant lui aucun papier, et le buvard, à sa gauche, est neuf.",
        "Un homme qui écrit pose sa feuille quelque part quand on frappe à sa porte.",
      ],
      choices: [
        { label: "Chercher où un vieil homme inquiet glisse une lettre commencée", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { has: "monde:a1:remonteur_parle" }, v: 15 }] }, win: { fx: { flag: "monde:a1:lettre_prevot", clue: "r_lettre", ep: ["seance", 1500] }, to: "A1c_f_voix_ok" }, lose: { fx: { ep: ["seance", 500] }, to: "A1c_f_voix_ko" } },
      ] },
    A1c_f_voix_ok: { act: "I", title: "Sous le buvard", place: "poids", ambiance: "nuit",
      text: [
        "Le buvard est neuf, et c'est ce qui le trahit : on vient de le retourner. Dessous, une demi-feuille, d'une écriture fine et tremblée, qui s'arrête au milieu d'un mot.",
        "*À Monsieur le Prévôt Corbineau, en main propre. Monsieur, vous me connaissez pour un homme qui n'a jamais rien demandé à personne. Je monte à la Tour depuis quarante et un ans. Ce qu'on m'a commandé d'y poser avant la Nuit des Clefs, je ne le poserai pas, et je veux qu'un honnête homme sache pourquoi, s'il m'arrivait de tomber dans mon escalier. Les trois sont d'accord, Monsieur, les trois ensemble, ce qui ne s'est jamais vu, et c'est pour fai*",
        "La plume a glissé là, laissant un trait. On a frappé ; il a retourné le buvard ; il est allé ouvrir, ou il a dit d'entrer.",
        "Tu plies la demi-feuille en quatre. Elle était pour le Cadenas. Reste à savoir si le Cadenas vous laissera le temps de la lui remettre.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },
    A1c_f_voix_ko: { act: "I", title: "De l'encre au doigt", place: "poids", ambiance: "nuit",
      text: [
        "Tu cherches dans ses poches, avec la honte qu'on y met : une tabatière, un mouchoir, une clef de montre. Tu regardes sous l'établi, dans le tablier, dans le livre de comptes. Tu soulèves même le buvard, et tu le reposes, parce qu'à cet instant la lampe file et que les quarante balanciers, tous ensemble, te semblent avoir pressé le pas.",
        "Il écrivait, et à quelqu'un. C'est tout ce que sa main te dira.",
      ],
      choices: [{ label: "Rejoindre les autres près de l'établi", to: "A1c_sifflets" }] },

    // ------------------------------------------------------------ the net closes
    A1c_sifflets: { act: "I", title: "« Au nom du Bronze ! »", place: "poids", ambiance: "nuit",
      text: [
        "Le premier sifflet part du bout de l'impasse. Un second lui répond du rempart, un troisième de la cour. Puis des lanternes, beaucoup, qui débouchent ensemble entre les contrepoids et font monter sur la façade, jusqu'aux vitres de l'atelier, des ombres de hallebardes.",
        "« Au nom du Bronze ! » La voix est lente, sans colère, et tu la reconnaîtrais entre mille pour l'avoir entendue décrire dans toutes les tavernes de la ville basse. « Géraud Corbineau, prévôt d'Aiguemorne. La maison est cernée. Il y a là-haut trois personnes et un mort ; je le sais par une voisine qui vous a vus monter, et par un billet qu'on m'a porté à huit heures pour me dire où trouver ce soir les assassins de Maître Balancier. À huit heures. » Un temps. « C'est un billet bien renseigné. Vous m'expliquerez cela en bas. »",
        "La pendule de l'établi s'est arrêtée à huit heures et demie. Quelqu'un a donc prévenu le guet à huit heures d'un crime commis à la demie, et vous a laissés venir à neuf. Vous êtes au milieu de quarante horloges, avec de l'huile aux semelles, et la compagnie du Rossignol n'a jamais passé pour sainte.",
        "Il reste la lucarne du toit, la trappe de la cave, et la porte. Les bottes sont déjà dans la cour.",
      ],
      choices: [{ label: "Décider, à trois, en dix secondes", to: "A1c_vote", big: true }] },

    A1c_vote: { act: "I", title: "Trois sorties", place: "poids", ambiance: "nuit",
      text: [
        "On vote des doigts, dans cette maison, quand on n'a pas le temps des cailloux.",
        "**Les toits.** La lucarne de l'alcôve donne sur l'ardoise, l'ardoise touche le rempart, et le rempart mène partout. C'est haut, c'est mouillé, et c'est le pays de la main.",
        { if: { has: "monde:a1:egouts" }, text: "**Les égouts.** Sous la cave de l'impasse passe le collecteur du rempart, qui descend à la Morne : {qui:a1:oeil} l'a reconnu cet après-midi. C'est noir, c'est étroit, et c'est le pays de l'œil.", else: "**Les égouts.** Toutes les caves du pied du rempart ont un regard sur le vieux collecteur, qui descend à la Morne. Personne ne l'a reconnu ; on irait à tâtons. C'est noir, c'est étroit, et c'est le pays de l'œil." },
        "**La porte.** Descendre l'escalier, tout droit, au milieu des lanternes : un médecin qu'on est allé chercher, ses deux aides, et un brancard. Le guet arrête des gens qui fuient. Il lui arrive de s'écarter devant des gens qui portent. C'est le pays de la voix.",
        "*Un doigt, deux doigts, trois doigts. Chacun vote pour soi, sans regarder les mains des autres.*",
      ],
      urgent: 40,
      choices: [
        { label: "Un doigt : les toits", voix: "fuite_a1", option: "toits", to: "A1c_urne" },
        { label: "Deux doigts : les égouts", voix: "fuite_a1", option: "egouts", to: "A1c_urne" },
        { label: "Trois doigts : la porte", voix: "fuite_a1", option: "porte", to: "A1c_urne", timeout: true },
      ] },
    A1c_urne: { act: "I", title: "Trois mains dans la lumière", place: "poids", ambiance: "nuit", charniere: true,
      text: [
        "Tu lèves la main dans la lumière de la lampe. En bas, une botte a touché la première marche, et l'escalier l'a dit.",
        "Les quarante balanciers passent et repassent.",
      ],
      choices: [{ label: "Regarder les mains des autres", to: "A1c_tranche", big: true }] },
    A1c_tranche: { act: "I", title: "Le compte", place: "poids", branch: [
      { if: { scrutin: "fuite_a1", is: "toits" }, to: "A1c_plan_toits" },
      { if: { scrutin: "fuite_a1", is: "egouts" }, to: "A1c_plan_egouts" },
      { if: { scrutin: "fuite_a1", is: "porte" }, to: "A1c_plan_porte" },
      { to: "A1c_plan_chacun" }] },
    A1c_plan_toits: { act: "I", title: "Par les toits", place: "poids", ambiance: "nuit",
      text: [
        "Les doigts sont levés. Ce sera la lucarne.",
        { if: { role: "a1", is: "main" }, text: "C'est ton pays. Tu passes devant, tu ouvres le châssis, et tu tends la main aux deux autres sans te retourner : sur l'ardoise mouillée, celui qui mène n'a pas le droit de regarder derrière lui." },
        { if: { role: "a1", is: "oeil" }, text: "Tu passeras le dernier. Il faut quelqu'un pour refermer la lucarne, compter les lanternes, et dire à ceux de devant de quel côté le rempart est vide." },
        { if: { role: "a1", is: "voix" }, text: "Tu passeras au milieu, et avant de monter tu donneras au guet quelque chose à écouter : une voix dans l'escalier, une porte barricadée, de quoi lui faire croire deux minutes que vous êtes encore dedans." },
      ],
      choices: [{ label: "À la lucarne", to: POSTE("A1m_fuite", "A1o_fuite", "A1v_fuite"), big: true }] },
    A1c_plan_egouts: { act: "I", title: "Par les égouts", place: "poids", ambiance: "nuit",
      text: [
        "Les doigts sont levés. Ce sera la cave.",
        { if: { role: "a1", is: "oeil" }, text: "C'est ton pays. Tu prends la lampe du mort, tu la mouches à demi, et tu descends le premier l'escalier intérieur, celui qui part de l'alcôve : là-dessous, c'est toi qui diras à droite et à gauche." },
        { if: { role: "a1", is: "main" }, text: "Il y aura une trappe, une grille, peut-être deux. Tu passeras devant chaque fois qu'il y aura du fer, et derrière le reste du temps." },
        { if: { role: "a1", is: "voix" }, text: "Tu descendras le dernier, et avant de descendre tu donneras au guet quelque chose à écouter : une voix dans l'escalier, une porte barricadée, de quoi lui faire croire deux minutes que vous êtes encore en haut." },
      ],
      choices: [{ label: "À la cave", to: POSTE("A1m_fuite", "A1o_fuite", "A1v_fuite"), big: true }] },
    A1c_plan_porte: { act: "I", title: "Par la porte", place: "poids", ambiance: "nuit",
      text: [
        "Les doigts sont levés. Ce sera la porte, et l'aplomb.",
        { if: { role: "a1", is: "voix" }, text: "C'est ton pays. Tu prends sur une patère la houppelande du mort et son bonnet de drap, tu te composes en trois secondes le visage d'un homme de l'art qu'on dérange, et tu désignes aux deux autres le volet de l'alcôve : un brancard." },
        { if: { role: "a1", is: "main" }, text: "Tu dégondes le volet de l'alcôve : il fera un brancard. Tu porteras devant. Les porteurs ont cela de bon qu'on leur regarde les bras et jamais la figure." },
        { if: { role: "a1", is: "oeil" }, text: "Tu porteras derrière, tête basse, et c'est toi qui compteras les lanternes : s'il faut lâcher le brancard et courir, tu le sauras avant les deux autres." },
        "Sur le volet, sous un drap, vous couchez le traversin crevé et un manteau roulé. Maître Balancier reste à son établi. Il a droit à ce qu'on le trouve comme il est tombé.",
      ],
      choices: [{ label: "À l'escalier", to: POSTE("A1m_fuite", "A1o_fuite", "A1v_fuite"), big: true }] },
    A1c_plan_chacun: { act: "I", title: "Un, deux, trois", place: "poids", ambiance: "nuit",
      text: [
        "Un doigt, deux doigts, trois doigts. Vous vous regardez par-dessus le mort, une seconde, avec la même pensée, qui est que la Douairière avait un mot pour cela.",
        "Il n'y a plus le temps d'un second tour. Chacun file vers la sortie qu'il a votée, ou vers celle qu'il connaît : la lucarne, la cave, l'escalier. Trois fugitifs dans trois directions font au moins, pour le guet, un problème d'arithmétique.",
        "« À la Clef Tordue ! » souffle quelqu'un. C'est le seul point du plan sur lequel vous soyez d'accord.",
      ],
      fx: { flag: "a1:chacun" },
      choices: [{ label: "Filer", to: POSTE("A1m_fuite", "A1o_fuite", "A1v_fuite"), big: true }] },
  },

  extras: {
    places: {
      poids: { ambiance: "ville", region: "aiguemorne", name: "L'impasse des Poids", map: "pays", x: 51, y: 48, arrive: "A1c_rdv", desc: "Une fente au pied du rempart, six maisons noires, et au fond celle du Remonteur." },
    },
    scrutins: {
      fuite_a1: { title: "Sortir de l'impasse", options: { toits: "Les toits", egouts: "Les égouts", porte: "La porte" }, tie: "chacun", tieSay: "Un, deux, trois doigts : chacun file de son côté." },
    },
    clues: {
      j_bonte: { rev: "J", text: "La Douairière : depuis une quarantaine d'années, les Sentences du Bronze penchent du côté des Bas-Fonds (péage du pont, hospice de la Morne, lavoirs). « Je n'ai jamais vu un mécanisme s'user du côté des pauvres. »" },
      s_epreuve: { rev: "S", text: "Caché dans une horloge du Remonteur, le frottis d'une plaque gravée : « …qu'il en soit ainsi à chaque Septaine, dans les mêmes termes, sans qu'il soit besoin d'y revenir ni d'y rien changer… »" },
      r_coup: { rev: "R", text: "Maître Balancier a été tué assis, d'un seul coup derrière l'oreille : une marque ronde, nette, large comme une pièce de cinq sous." },
      r_machefer: { rev: "R", text: "L'homme qui a tué le Remonteur portait de larges souliers ferrés à clous ronds, et a laissé dans ses pas du mâchefer de forge." },
      r_lettre: { rev: "R", text: "Lettre inachevée de Balancier au prévôt : on lui a commandé de « poser » quelque chose dans la Tour avant la Nuit des Clefs ; il refuse ; « les trois sont d'accord, les trois ensemble »." },
    },
  },
};
