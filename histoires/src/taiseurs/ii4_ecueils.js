// Lot ii4 of "Le Trésor des Taiseurs": the Écueils (lighthouse of l'Ouïe, the mad keeper, the gannet island, the tidal
// caves, the rival wreckers, the reef of les Sourds and the wreck of La Pimpante), the third cache (leaf + tuning fork),
// the singing stones, the truth about Maïwenn's rope, Salomé's dive, three side quests and five treasures.

var P = {};
var ECHO_OK = { item: "diapason" };
var NO_FORK = "Il te faudrait de quoi faire chanter la pierre.";

// ==================================================================== the anchorage (hub)
Object.assign(P, {
  IIE_arrivee: { act: "II", title: "Le bassin des Gardiens", place: "ecueils", hub: true, routes: true, backName: "le bassin des Gardiens",
    fx: { reveal: "ecueils", ep: ["perso", 600] },
    text: [
      { first: true, text: "Les Écueils se lèvent de la mer à la fin du deuxième jour : d'abord le phare, une tour grise plantée sur une île en dos de baleine, puis, autour, une poussière de rochers noirs et d'îlots chauves que la houle lave et découvre. Au nord, une île blanche de fientes tourne sous un nuage d'oiseaux. À l'est, sur une table de roche basse, une fumée monte d'un camp. Au sud, une ligne d'écume immobile au milieu des vagues : un récif à fleur d'eau." },
      { first: true, with: "salome", text: "Salomé fait entrer *La Bavarde* dans un bassin de roche au pied du phare, à la voile seule, en lisant les remous comme d'autres lisent une enseigne. L'ancre descend, la chaîne racle, le fond tient. « Le bassin des Gardiens, dit-elle. Seul mouillage sûr à dix lieues. {{oreille#iie_sourds|Les Sourds, c'est l'écume, là-bas, au sud. Rien à voir|Je ne regarderai pas au sud tant que tu ne m'y obligeras pas}}. »" },
      { first: true, without: "salome", text: "Le patron que Salomé t'a prêté mouille *La Bavarde* dans un bassin de roche au pied du phare et se met aussitôt à pêcher à la traîne, le dos tourné au sud." },
      { again: true, when: "day", text: "Le bassin des Gardiens, l'eau verte et calme entre deux bras de roche. *La Bavarde* tire doucement sur sa chaîne. Au-dessus, la tour de l'Ouïe ; autour, les îles, les oiseaux, l'écume des Sourds." },
      { again: true, when: "night", text: "Le bassin, la nuit. Le fanal de *La Bavarde* fait une tache jaune sur l'eau noire. Plus haut, la lampe du phare brûle, faible et rouge, et la houle respire contre les rochers." },
      { again: true, after: "ecueils:ouverte", text: "Le bassin {{echo#iie_e_bassin|clapote contre la coque, et la chaîne grince dans l'écubier|rend une voix de femme, gaie, essoufflée : « Salo ! Neuf brasses, et l'eau claire comme un verre ! »}}." },
      { after: "voile:iie_e_bassin", with: "salome", once: true, text: "Salomé s'est figée, une main sur le plat-bord. Elle a entendu aussi. Elle regarde l'eau à l'endroit exact où la voix est montée, et elle se tait longtemps. Puis elle va à l'avant, très droite, et recommence à lover une aussière déjà lovée." },
      { after: "iie:ravaud=allie", text: "Une barque de l'île Plate passe à portée de voix. Les hommes de Ravaud lèvent la main, de mauvaise grâce, mais ils la lèvent." },
      { after: "iie:goulven=huile", when: "night", text: "Là-haut, la lampe de l'Ouïe brûle haut et blanc, comme elle n'a pas brûlé depuis huit hivers." },
    ],
    choices: [
      { label: "Parler à Salomé, à la barre", with: "salome", hide: { seen: "IIE_salome" }, to: "IIE_salome" },
      { label: "Étaler la carte des Écueils sur le rouf", to: "IIE_carte" },
      { label: "Débarquer sur l'île du phare de l'Ouïe", to: "IIE_phare_cale" },
      { label: "Ramer jusqu'à l'île aux Fous, sous les oiseaux", to: "IIE_fous" },
      { label: "Longer la falaise jusqu'aux grottes de la Gorge", to: "IIE_grottes" },
      { label: "Aborder l'île Plate, où fume le camp des Écumeurs", to: "IIE_ilot_plat" },
      { label: "Mettre le cap sur l'écueil des Sourds", hide: { seen: "IIE_courant" }, to: "IIE_courant" },
      { label: "Mettre le cap sur les Sourds, par le Raz", hide: { not: { seen: "IIE_courant" } }, to: "IIE_sourds" },
      { label: "Une voile grise, au large, qui ne bouge pas", once: true, hide: { not: { seen: "IIE_phare_porte" } }, to: "IIE_voile_banque" },
      { label: "Le cotre gris entre dans le bassin", big: true, hide: { any: [{ not: { has: "ecueils:ouverte" } }, { seen: "IIE_fidele" }] }, to: "IIE_fidele" },
      { label: "Écouter le bassin, le diapason en main", hide: { any: [{ not: { item: "diapason" } }, { seen: "IIE_ecoute" }] }, to: "IIE_ecoute" },
      { label: "Dire à Salomé ce qui est arrivé à Maïwenn", big: true, with: "salome", hide: { any: [{ not: { has: "salome:maiwenn" } }, { seen: "IIE_verite" }] }, to: "IIE_verite" },
      { label: "Des rames, dans le noir, qui viennent vers la coque", big: true, hide: { any: [{ not: { has: "iie:ravaud=hostile" } }, { seen: "IIE_raid" }] }, to: "IIE_raid" },
      { label: "Passer la nuit au mouillage", to: "IIE_nuit" },
    ] },

  IIE_salome: { act: "II", title: "Salomé à la barre", place: "ecueils", with: "salome",
    fx: { conf: { salome: 3 } },
    text: [
      "Salomé a calé ses deux avant-bras sur la barre franche et regarde les îles une à une, comme on compte une dette. Elle a ôté son bonnet ; ses cheveux gris, coupés court au couteau, sèchent en épis. Elle sent le goudron et le rhum de la veille.",
      "« Le phare, dit-elle, c'est ton affaire, et j'y mettrai le pied si tu me le demandes. Un vieux y vit seul. Loïg. Il parle aux morts, et les morts lui répondent, à ce qu'il dit. L'île aux Fous, c'est les oiseaux et les ramasseuses d'œufs de Port-Vasier. L'île Plate, c'est Ravaud. {{oreille#iie_ravaud_s|Un Écumeur chassé par la Veuve. Pas méchant, juste fauché|Un Écumeur chassé par la Veuve, et le seul qui m'ait proposé de plonger à ma place sur les Sourds, pour moitié}}. »",
      "Elle se tait, puis elle ajoute, sans tourner la tête : « Les grottes, à marée basse seulement. Et les Sourds, {{oreille|tu y vas avec le canot, je garde le bateau|j'irai, parce que tu y vas, et je vomirai par-dessus bord comme une mousse}}. »",
      { if: { has: "poids:amour" }, text: "Tu reconnais la façon dont elle prononce les noms de lieux, comme on évite de prononcer un nom de personne. Tu as la même, pour quelqu'un, à Salvèze." },
      { with: "tibere", text: "Tibère, assis sur un rouleau de cordage, fait semblant de dormir. Il a ouvert un œil au nom de Ravaud." },
    ],
    choices: [
      { label: "« Parle-moi de Maïwenn. »", to: "IIE_salome_maiwenn" },
      { label: "La laisser à ses îles", back: "IIE_arrivee" },
    ] },

  IIE_salome_maiwenn: { act: "II", title: "Maïwenn", place: "ecueils", with: "salome",
    text: [
      "Salomé met un temps si long à répondre que tu crois la conversation finie. Une mouette se pose sur la vergue, la regarde, repart.",
      "« Maïwenn plongeait mieux que moi. Plus longtemps, plus bas, et elle remontait en riant. On avait *La Bavarde* à deux, et des dettes à deux. La Banque est venue nous chercher, il y a trois ans : un coffret sur *La Pimpante*, un de leurs navires coulé sur les Sourds, cent ducats la plongée. C'est Brunel qui menait. Le chercheur aux gants gris. » Elle crache par-dessus bord, sans colère, comme on vide une écope.",
      "« Ce matin-là, Maïwenn m'a dit de rester à quai. Elle est partie seule sur *le Fidèle*, le cotre qu'il avait loué. Le soir, Brunel m'a rapporté son bonnet. Il m'a dit que la corde avait {{oreille#iie_corde_s|ragué sur le corail et cassé, que ça arrive, que c'est la mer|ragué sur le corail et cassé, et je lui ai serré la main parce que l'autre chose m'aurait obligée à le tuer devant tout le port}}. »",
      "Elle se redresse. « Voilà. Je ne plonge plus. Tu as payé pour un bateau, pas pour une plongeuse. »",
      { if: { has: "lothaire:refuse" }, text: "Le nom de Brunel te ramène un salon, des gants gris posés sur une table, et une voix douce qui disait ce que tu pensais avant toi." },
    ],
    choices: [
      { label: "Ne rien répondre, et rester à côté d'elle un moment", fx: { conf: { salome: 5 } }, back: "IIE_arrivee" },
      { label: "« Si la corde a été coupée, je le trouverai. »", hide: { any: [{ has: "iie:salome_doute" }, { has: "iim:soupcon" }] }, fx: { conf: { salome: 2 }, flag: "iie:promesse" }, back: "IIE_arrivee" },
      { label: "« Tu n'as jamais cru à cette corde qui casse. Moi non plus. Je trouverai qui l'a coupée. »", hide: { not: { any: [{ has: "iie:salome_doute" }, { has: "iim:soupcon" }] } }, fx: { conf: { salome: 6 }, flag: "iie:promesse" }, back: "IIE_arrivee" },
    ] },

  IIE_carte: { act: "II", title: "La carte des Écueils", place: "ecueils",
    text: [
      "La carte est une peau de chèvre raclée, tachée de sel, où une main a tracé à l'encre brune chaque rocher des Écueils, chaque passe, chaque profondeur en brasses. Les îles portent leurs noms en petites capitales penchées : *l'Ouïe*, *les Fous*, *la Gorge*, *l'île Plate*, *les Sourds*.",
      { with: "salome", text: "« C'est Maïwenn qui l'a dessinée, dit Salomé. Elle notait tout. Moi je retiens, elle notait. » Elle pose un galet sur chaque coin pour tenir la peau à plat, et retourne à ses cordages, le dos tourné à la carte." },
      "Sur les Sourds, d'une encre plus fraîche, une petite croix et une ligne : *{{loupe#iie_carte_note|La Pimpante, neuf brasses, couchée sur bâbord, le coffret sous le gaillard|L. veut le coffret pour lui seul, pas pour la Banque. Si je ne remonte pas, demande à Jobic, le mousse du cotre}}.*",
      "Au nord du phare, quelqu'un a dessiné trois petits ronds, l'un sur l'île aux Fous, l'autre au fond de la Gorge, le dernier sur la tête des Sourds, et écrit à côté : *{{loupe#iie_carte_pierres|cailloux qui sonnent|les pierres chantent quand le vent passe, comme l'ambre des vieux}}*.",
      "Une rose des vents à l'angle, et en marge, à l'envers, un dessin d'enfant que tu mets un temps à comprendre : deux femmes dans une barque, l'une avec des cheveux en épis.",
    ],
    choices: [
      { label: "Montrer la ligne cachée à Salomé", with: "salome", hide: { any: [{ not: { voile: "iie_carte_note" } }, { seen: "IIE_carte_salome" }] }, to: "IIE_carte_salome" },
      { label: "Rouler la carte", back: "IIE_arrivee" },
    ] },

  IIE_carte_salome: { act: "II", title: "Le nom de Jobic", place: "ecueils", with: "salome",
    fx: { conf: { salome: 5 }, flag: "iie:jobic_nom" },
    text: [
      "Tu poses le doigt sous la ligne et tu la lis à voix haute, lentement, parce que l'encre de dessous ne se laisse lire que sous l'ambre et que Salomé ne peut pas la voir. *L. veut le coffret pour lui seul. Si je ne remonte pas, demande à Jobic, le mousse du cotre.*",
      "Salomé reste immobile. Elle regarde la peau de chèvre, l'endroit où tu as le doigt, et l'ambre dans ta main.",
      "« Elle écrivait au jus de citron, dit-elle enfin. Elle trouvait ça drôle. Elle laissait des mots doux sur les cartes, qu'on voyait en les chauffant à la lampe. Je n'ai jamais chauffé celle-là. » Sa voix reste égale. Ses mains tremblent. « Jobic. Un gamin roux, dix-sept ans, qui tenait les cordes sur *le Fidèle*. Il a disparu de Port-Vasier un mois après. »",
      "Elle se tourne vers l'est, vers la fumée de l'île Plate. « Ravaud ramasse tous les perdus de la côte. »",
    ],
    choices: [{ back: "IIE_arrivee" }] },
});

Object.assign(P, {
  IIE_nuit: { act: "II", title: "La nuit au mouillage", place: "ecueils", takes: "morning", backName: "le pont de La Bavarde",
    fxEvery: { rest: true },
    text: [
      { first: true, text: "Tu {{miroir#iie_m_pont|dors sur le pont|dors sur le pont, toi qui as dit au Guet que tu dormais chez toi la nuit où Odeline est morte}}, roulé{e} dans une voile de rechange qui sent le chanvre et le poisson. La houle entre dans le bassin par longues respirations ; la coque craque, la chaîne tire, se détend. Toutes les vingt respirations, quelque chose sonne sous l'eau, très loin, une note grave et tenue, sans nom pour toi." },
      { first: true, with: "salome", text: "Vers minuit, Salomé s'assied à côté de toi, une bouteille de rhum de Port-Vasier entre les genoux. Elle tient la bouteille sans la déboucher. « Tu l'entends ? La note. C'est les Sourds. À marée basse, le récif chante. Les anciens disaient que ça rendait sourds les plongeurs, d'où le nom. {{oreille#iie_note_s|Maïwenn disait que c'était beau|Maïwenn disait que c'était beau, et je l'entends chanter chaque fois que le récif se met à sonner}}. »" },
      { first: true, with: "salome", text: "Elle bouche la bouteille, la pose entre vous deux, et s'endort assise, la tête contre le mât." },
      { again: true, text: "Une nuit de plus au bassin des Gardiens. La note des Sourds monte et redescend avec la marée, et tu {{miroir#iie_m_nuit|finis par dormir dedans|ne dors qu'au matin, parce que chaque fois que la note monte, tu entends ta propre voix crier dans l'escalier d'Odeline}}." },
      { again: true, with: "salome", after: "salome:plonge", text: "Salomé dort à plat dos, les bras en croix, comme on dort après une plongée. Elle a gardé le couteau de Maïwenn à la ceinture." },
      { with: "lison", once: true, text: "Lison veille un moment à la proue, les pieds dans le vide. Elle chantonne une chanson des Joncs-Bas, très bas, et s'arrête net chaque fois que la note des Sourds revient, comme si elle lui laissait la place." },
      { with: "gildas", once: true, text: "Frère Gildas récite complies à mi-voix, tourné vers le phare. Il prie longtemps, et il garde pour lui le nom de celui pour qui il prie." },
      { with: "tibere", once: true, text: "Tibère ronfle sous le rouf, la main sur sa masse. Une fois, il se réveille en sursaut et regarde au large, vers l'ouest, puis se rendort." },
    ],
    choices: [{ label: "Te lever avec le jour", back: "IIE_arrivee" }] },
});

// ==================================================================== the lighthouse of l'Ouïe
Object.assign(P, {
  IIE_phare_cale: { act: "II", title: "L'île de l'Ouïe", place: "ecueils", backName: "la cale de l'Ouïe",
    text: [
      { first: true, text: "Une cale taillée dans la roche, verte d'algues jusqu'à mi-hauteur, puis un escalier de cent marches qui monte en lacets vers le phare. Les marches sont usées en creux au milieu, par des siècles de bottes. À mi-pente, sur un replat, un enclos de pierres sèches : des tombes, une dizaine, tournées vers la mer." },
      { first: true, text: "La tour elle-même est plus vieille que tout ce que tu as vu à Salvèze, Beffroi compris. Une pierre grise et grenue, sans un ornement, sauf une chose, tout en haut, sous la galerie de la lampe : une conque de pierre énorme, sculptée dans le flanc de la tour, ouverte vers le large comme une oreille tendue." },
      { again: true, text: "La cale verte, les cent marches, l'enclos des tombes. Au-dessus, l'oreille de pierre tendue vers le large." },
      { again: true, after: "ecueils:ouverte", text: "Les marches {{echo#iie_e_marches|sont usées en creux, polies comme un seuil d'église|rendent un pas lourd et une voix d'homme qui compte, essoufflée : « Quatre-vingt-dix… Le feuillet d'abord, la lampe après. Et on referme derrière nous. »}}." },
      { with: "salome", text: "Salomé amarre le canot et reste en bas, sur la cale, à surveiller la mer. « Je garde le canot. Les phares, j'aime les voir de loin. »" },
    ],
    choices: [
      { label: "L'enclos des tombes, à mi-pente", to: "IIE_tombes" },
      { label: "Monter jusqu'à la porte du phare", hide: { seen: "IIE_phare_porte" }, to: "IIE_phare_porte" },
      { label: "Entrer dans le phare", hide: { not: { seen: "IIE_phare_porte" } }, to: "IIE_phare_salle" },
      { label: "Redescendre au canot", back: "IIE_arrivee" },
    ] },

  IIE_tombes: { act: "II", title: "Les tombes des gardiens", place: "ecueils", backName: "l'enclos des gardiens",
    text: [
      { first: true, text: "Dix tombes de granit, plantées de travers dans une herbe rase et salée. Les plus anciennes n'ont plus de nom : un croissant gravé, rien d'autre. Les plus récentes portent des noms de la côte, Ker, Le Bihan, Ker encore, et des dates. Quelqu'un a posé des galets blancs sur chacune, en ligne, et les entretient." },
      "Sur la plus grande, une épitaphe gravée à la pointe, d'une écriture fine : *Ici Yves Ker, gardien, {{loupe#iie_epitaphe|qui tint la lampe cinquante ans|qui tint la porte cinquante ans et tut la reine, comme son père}}.*",
      "Deux pierres neuves, côte à côte, à l'écart : *Elouan Le Bihan*, *Ronan Ker*. Même année, même jour. Le granit est encore clair.",
      "La pierre d'Elouan {{echo#iie_e_elouan|est couverte d'un lichen jaune, et le vent siffle dans les lettres|garde une voix jeune, hachée par l'eau : « Loïg ! Tiens la lampe ! Tiens-la, on voit la côte ! »}}. La pierre de Ronan {{echo#iie_e_ronan|penche vers la mer, à demi déchaussée|garde une autre voix, plus grave, presque calme : « Laisse, Elouan. Il a bien fait de rester là-haut. Rame. »}}.",
      "La plus vieille tombe, au bout de l'enclos, {{echo#iie_e_serment|n'a plus de nom, juste un croissant que la mousse remplit|rend, de très loin, une voix de vieil homme qui récite : « Je tairai la lampe. Je tairai la porte. Je tairai la reine. »}}.",
      { with: "gildas", text: "Frère Gildas s'agenouille devant la tombe au croissant, et trace sur la pierre, du pouce, un signe inconnu de toi. Il reste là, la tête basse, plus longtemps qu'une prière ne le demande." },
      { with: "lison", text: "Lison touche le croissant du bout des doigts, puis les retire très vite. « Chez nous, aux Joncs, on met ce signe sur les tombes des gens qui ont bien gardé leur langue, dit-elle. {{oreille#iie_croissant_l|C'est une vieille coutume, rien de plus|Ma grand-mère a le même, déjà gravé, qui attend dans le cimetière des Joncs}}. »" },
    ],
    choices: [
      { label: "Dire à Loïg ce que disent ses morts", hide: { any: [{ not: { voile: "iie_e_ronan" } }, { has: "iie:goulven" }, { not: { seen: "IIE_goulven" } }] }, to: "IIE_goulven_paix" },
      { label: "Quitter l'enclos", back: "IIE_phare_cale" },
    ] },

  IIE_phare_porte: { act: "II", title: "La porte de l'Ouïe", place: "ecueils",
    fx: { meet: "iie_goulven" },
    text: [
      "La porte du phare est une dalle de chêne noir bardée de fer, entrouverte. Avant que tu la touches, elle s'ouvre en grand, et un harpon te vise la poitrine. Au bout du harpon, un vieil homme maigre comme une gaffe, la barbe en broussaille, les yeux très pâles, un tricot de laine rapiécé sur un ventre creux.",
      "« Elouan ? dit-il. Non. Trop petit. » Il plisse les yeux. « Vous venez de la part de la Banque, ou de la part de la mer ? {{oreille#iie_goulven_banque|La Banque, je la reçois au harpon|La Banque est venue il y a trois ans, un homme aux gants gris, et il est monté jusqu'à l'oreille sans me demander}}. »",
      { if: { has: "metier:parole" }, text: "Tu as parlé à des veuves, à des ivrognes et à des fous de quai pendant des années. Tu sais qu'on ne répond pas à un fou par la raison : on répond à la question qu'il a posée." },
      { with: "tibere", text: "Tibère a avancé d'un pas, la main sur sa masse. Le harpon pivote vers lui sans hâte, et Tibère s'arrête." },
    ],
    choices: [
      { label: "« De la part de la mer. »", fx: { regard: { iie_goulven: "curieux" } }, to: "IIE_goulven" },
      { label: "« Ni l'une ni l'autre. Je cherche ce que la reine a laissé ici. »", to: "IIE_goulven" },
      { label: "Écarter le harpon d'un revers de bras", test: { dom: "combat", diff: 0, label: "Désarmer un vieil homme sans le blesser", help: [{ with: "tibere", v: 10 }] },
        win: { fx: { regard: { iie_goulven: "mefiant" } }, to: "IIE_goulven" }, lose: { fx: { pv: -3, regard: { iie_goulven: "mefiant" } }, to: "IIE_goulven" } },
    ] },

  IIE_goulven: { act: "II", title: "Loïg Ker", place: "ecueils", backName: "la cuisine du gardien",
    fx: { questSeen: "IIE_gardien" },
    text: [
      { outcome: "win", text: "Le harpon tombe sur la dalle. Loïg le regarde, puis te regarde, sans rancune particulière. « Elouan aussi faisait ça. Entrez. »" },
      { outcome: "lose", text: "Le harpon t'entaille l'avant-bras avant que tu le saisisses. Loïg le lâche aussitôt, consterné, et te tend un chiffon qui a servi à la lampe. « Entrez, entrez. Le sang, ça attire les oiseaux. »" },
      "La cuisine du gardien tient tout le bas de la tour : une cheminée, un lit clos, une table où trois bols sont posés, trois cuillers, trois gobelets. Deux bols sont pleins d'une soupe froide où flottent des pelures. Loïg s'assied devant le troisième.",
      "« Ils sont en retard, dit-il. Elouan et Ronan. Ils sont partis il y a huit hivers chercher le bateau de l'huile qui coulait sur les Fous, et moi je suis resté à la lampe. La nuit, ils parlent par l'oreille, là-haut. Ronan crie. Toutes les nuits il crie. {{oreille#iie_goulven_crie|Il crie que la soupe est froide|Il crie que je suis resté au sec pendant qu'ils se noyaient, et il a raison}}. »",
      "Il pousse vers toi le bol d'Elouan. « Mangez, ça le fera venir. Et si vous voulez monter, montez. {{oreille#iie_goulven_monte|Il n'y a rien là-haut que la lampe et le vent|Il y a là-haut ce que mon père m'a fait jurer de taire, et je suis trop vieux pour le garder seul}}. »",
      { with: "gildas", text: "Frère Gildas a pris le troisième tabouret sans attendre qu'on le lui offre. Il regarde les trois bols, puis Loïg, et se tait." },
      { after: "iim:chanteuse", once: true, text: "Tu lui parles de la femme de l'îlot, qui chante face à l'ouest pour faire passer les bateaux au nord. Loïg hoche la tête lentement. « Mon père chantait comme ça, du haut de la galerie, les nuits de brume. Je n'ai plus la voix. Elle, elle l'a. »" },
    ],
    choices: [
      { label: "« Qu'est-ce que votre père vous a fait jurer ? »", hide: { seen: "IIE_goulven_litanie" }, to: "IIE_goulven_litanie" },
      { label: "« Je ferai taire Ronan, si je peux. »", hide: { has: "iie:goulven_promis" }, fx: { flag: "iie:goulven_promis", ep: ["perso", 200] }, to: "IIE_goulven_promesse" },
      { label: "Proposer à Loïg de quitter l'île sur La Bavarde", hide: { any: [{ not: { has: "iie:goulven_promis" } }, { has: "iie:goulven" }, { seen: "IIE_goulven_reste" }] }, to: "IIE_goulven_depart" },
      { label: "Monter dans le phare", to: "IIE_phare_salle" },
      { label: "Ressortir sur l'escalier", back: "IIE_phare_cale" },
    ] },

  IIE_goulven_promesse: { act: "II", title: "Les deux bols", place: "ecueils",
    text: [
      "Loïg pose ses deux mains à plat de part et d'autre du troisième bol. « Vous ne pouvez pas. Ils sont dans l'oreille. Personne n'entre dans l'oreille, sauf le vent. »",
      "Puis, plus bas, sans te regarder : « Il y avait de l'huile, avant. Le bateau de l'huile venait de Port-Vasier à la Saint-Michel. Depuis qu'il a coulé, je brûle de la graisse de phoque et du bois d'épave. La lampe fume. Les bateaux ne la voient plus. {{oreille#iie_goulven_huile|Ça m'est égal|Si un bateau se perd sur les Sourds à cause de ma lampe, je n'aurai même plus le droit d'aller sous les pierres à côté d'eux}}. »",
      "Il se lève, verse les deux bols froids dans un seau, et les remplit de nouveau à la marmite.",
    ],
    choices: [{ back: "IIE_goulven" }] },

  IIE_goulven_litanie: { act: "II", title: "La litanie du gardien", place: "ecueils",
    text: [
      "Loïg ferme les yeux et récite, d'une voix de chantre enroué, en se balançant sur son tabouret, une chose qu'il a dû dire mille fois :",
      "« Cinq tours a l'oreille, cinq tours pour la mer. Le premier tour gronde, le deuxième ment, {{oreille#iie_litanie|le troisième pleure et le quatrième dort, le cinquième est à Dieu|le troisième pleure et le quatrième crie, mais le cinquième se tait, et c'est au cinquième qu'on pose la main, à l'étale, quand la mer se retient}}. Qui parle se noie. Qui se tait entend. »",
      "Il rouvre les yeux. « Mon père me l'a apprise. Le sien la lui avait apprise. C'est pour les enfants, pour qu'ils sachent monter à la lampe sans se perdre. Il n'y a rien dedans. »",
      { with: "lison", text: "Lison a cessé de jouer avec son couteau au mot *étale*. Elle regarde le vieil homme comme on regarde un parent qu'on ne savait pas avoir." },
      { if: { has: "iie:goulven_garde" }, text: "Tu lui dis que tu as entendu l'autre chose, tout à l'heure, à la table : ce que son père lui a fait jurer, et qu'il est trop vieux pour garder seul. Loïg regarde ses mains. « Alors gardez-le avec moi, dit-il. Mon père posait la main là-haut, au tour qui se tait. Moi, je n'ai jamais osé. »" },
      { if: { has: "taiseurs:connus" }, text: "*Qui parle se noie. Qui se tait entend.* Mère Ancolie disait presque la même chose, aux Joncs-Bas, en faisant passer son fil." },
    ],
    choices: [{ back: "IIE_goulven" }] },
});

Object.assign(P, {
  IIE_phare_salle: { act: "II", title: "La salle des gardiens", place: "ecueils", backName: "la salle des gardiens",
    fx: { item: "iie_journal" },
    text: [
      { first: true, text: "Au premier étage, la salle des gardiens : trois couchettes taillées dans l'épaisseur du mur, trois cirés pendus à trois clous, un râtelier de gaffes, et des barriques d'huile alignées contre la paroi. Tu en frappes une du poing. Elle sonne creux. Toutes sonnent creux." },
      { first: true, text: "Sur une écritoire scellée au mur, ouvert, le registre du phare : une main par génération, des pages de vents, de marées, de navires vus. Les dernières pages sont de Loïg, de plus en plus grandes, de plus en plus penchées. Tu le prends. Il prenait la poussière." },
      { again: true, text: "La salle des gardiens, ses trois couchettes, ses barriques vides. Le vent passe par la meurtrière avec un bruit de flûte." },
      "Au-dessus de l'écritoire, gravé dans la pierre, un ordre plus vieux que le registre : *{{loupe#iie_ordre|Le gardien monte la lampe au coucher, la descend au lever|Le gardien monte à l'oreille seul, à l'étale, et pose la main où la mer se tait}}.*",
      "Au centre de la salle, un trou rond dans le dallage, large comme un puits, bordé de bronze vert : le gosier de la tour. L'air de la mer y monte en soufflant, froid et salé, par grandes bouffées qui suivent la houle. Une échelle de fer y descend dans le noir.",
      { with: "tibere", text: "Tibère se penche au-dessus du gosier et recule aussitôt. « Ça respire, là-dedans. Je n'aime pas les maisons qui respirent. »" },
    ],
    choices: [
      { label: "Monter l'escalier de la tour", to: "IIE_escalier" },
      { label: "Descendre l'échelle du gosier", to: "IIE_gosier" },
      { label: "Redescendre à la cuisine de Loïg", back: "IIE_goulven" },
      { label: "Sortir sur l'escalier de l'île", back: "IIE_phare_cale" },
    ] },

  IIE_gosier: { act: "II", title: "Le gosier", place: "ecueils",
    text: [
      "L'échelle descend dans un puits creusé au cœur du rocher. Les barreaux sont gras de sel. À vingt pieds, l'air devient si humide que ta lanterne grésille ; à quarante, tu entends la mer, en dessous, qui entre et sort d'une cavité avec un bruit de soufflet de forge.",
      "Le puits s'arrête au-dessus d'une grille de bronze, scellée dans la roche. Sous la grille, l'eau monte et descend, noire et lisse, et une lumière grise vient de quelque part sur le côté : une grotte, ouverte sur la mer. La grille porte au centre un relief usé, une conque à cinq tours, et autour, une ligne gravée : *{{loupe#iie_grille|Pour ceux de la mer|Pour ceux de la mer : la main au cinquième tour, d'en haut ou d'en bas}}*.",
      "Tu tires sur la grille. Elle tient comme un mur. Elle doit s'ouvrir d'en bas, ou d'en haut, par un mécanisme caché.",
      { if: { has: "metier:mains" }, text: "Tes doigts trouvent dans la roche, à droite de la grille, une rainure lisse et usée, le passage d'une chaîne qui monte vers la tour. On a ouvert cette grille souvent, il y a longtemps." },
    ],
    choices: [{ label: "Remonter l'échelle", back: "IIE_phare_salle" }] },

  IIE_escalier: { act: "II", title: "L'escalier de l'Ouïe", place: "ecueils", backName: "l'escalier de la tour",
    text: [
      { first: true, text: "Cent quarante marches en vis autour du gosier, que l'on voit monter au centre de la tour comme un tuyau d'orgue de pierre. Tous les vingt degrés, une meurtrière, et sous chaque meurtrière, une oreille sculptée dans le mur, de la taille d'une main, usée par les doigts de ceux qui l'ont touchée en passant." },
      { again: true, text: "Les cent quarante marches, les oreilles de pierre sous les meurtrières. Le gosier souffle au centre." },
      { again: true, after: "ecueils:ouverte", text: "L'escalier {{echo#iie_e_escalier|résonne de ton pas, et de rien d'autre|rend un bruit de bottes qui montent quatre à quatre, et une voix douce, essoufflée, agacée : « Une porte qui ne s'ouvre qu'à ceux qui se taisent. Ils se moquent de nous, Jobic. »}}." },
      "Au dernier palier, deux portes. L'une, de fer, donne sur la galerie de la lampe. L'autre est une arche basse, sans porte, par où l'on entre dans la conque de pierre que tu as vue d'en bas.",
    ],
    choices: [
      { label: "La galerie de la lampe", to: "IIE_lanterne" },
      { label: "L'arche basse : l'oreille de pierre", to: "IIE_oreille" },
      { label: "Redescendre", back: "IIE_phare_salle" },
    ] },

  IIE_lanterne: { act: "II", title: "La lampe de l'Ouïe", place: "ecueils", backName: "la galerie de la lampe",
    text: [
      { first: true, text: "La lanterne est une cage de fer et de verre épais, verdi par le sel, autour d'une grande lampe de cuivre à sept mèches. Les mèches baignent dans une graisse grise qui pue le phoque. Le pied de la lampe est {{pie#iie_lampe_pied|en cuivre martelé, cabossé par les ans|en argent, sous trois couches de peinture de cuivre que quelqu'un a passées pour décourager les voleurs d'épaves}}. Des bûches d'épave, noires de goudron, attendent dans une caisse. Les vitres sont couvertes d'une suie grasse de plusieurs hivers." },
      { first: true, text: "De la galerie, tu vois tout l'archipel : le bassin et *La Bavarde*, l'île aux Fous sous ses oiseaux, la fumée de l'île Plate, et au sud, la ligne blanche des Sourds. Au milieu de l'écume, à marée basse, un mât noir sort de l'eau, penché, avec un reste de hune." },
      { again: true, when: "day", text: "La galerie, le vent, l'archipel en dessous. Le mât noir des Sourds sort de l'écume." },
      { again: true, when: "night", text: "La galerie de nuit. La lampe fume et rougeoie. En dessous, le bassin, un fanal, et rien d'autre dans le noir." },
      { after: "iie:goulven=huile", text: "Les vitres ont été lavées au vinaigre. Les sept mèches baignent dans une huile claire et brûlent blanc." },
      { again: true, after: "ecueils:ouverte", text: "La galerie {{echo#iie_e_sorne|siffle dans le vent du large, et les vitres vibrent|rend deux voix, l'une jeune, l'autre lasse : « D'ici, à la Grande Basse, on voit les toits de Sorne, au nord-est. — Alors le dernier ira là-bas, avec elle. »}}." },
    ],
    choices: [
      { label: "Verser dans la lampe l'huile prise à l'épave", hide: { any: [{ not: { has: "iie:huile" } }, { has: "iie:goulven" }] }, to: "IIE_goulven_huile" },
      { label: "Redescendre l'escalier", back: "IIE_escalier" },
    ] },

  IIE_oreille: { act: "II", title: "L'oreille de pierre", place: "ecueils", backName: "l'oreille de pierre",
    text: [
      { first: true, text: "Sous l'arche, le couloir tourne. Il tourne encore, se resserre, tourne une troisième fois : tu marches dans la coquille même, une spirale de pierre polie qui s'enroule vers le cœur de la tour. Le bruit de la mer y entre par la bouche ouverte au large et s'y transforme : au premier tour, un grondement ; au deuxième, un murmure qui ressemble à des mots ; au troisième, un sanglot ; au quatrième, un cri lointain." },
      { first: true, text: "À chaque tour, une plaque de bronze ronde est scellée dans la paroi, à hauteur de main, frappée d'une oreille. Au fond du cinquième tour, la spirale se ferme sur un mur lisse. C'est là que le bruit cesse, d'un coup, comme une porte qu'on referme." },
      { again: true, text: "La spirale de pierre, ses cinq plaques de bronze, le bruit de la mer qui change de voix à chaque tour." },
      { after: "ecueils:ouverte", text: "Au fond du cinquième tour, le mur lisse est resté ouvert sur sa niche vide." },
      { after: "iie:piege", text: "Sous tes pieds, la dalle qui a basculé ne joint plus tout à fait. Un souffle froid en monte, avec l'odeur du varech." },
      "Au-dessus de l'arche, une inscription gravée en lettres carrées : *{{loupe#iie_insc|Qui parle se noie. Qui se tait entend|Qui parle se noie. Qui se tait entend. La main au tour muet, à l'étale, quand la mer retient son souffle}}.*",
      { with: "gildas", text: "Frère Gildas s'est arrêté au troisième tour, la main contre la paroi. Il a fermé les yeux. Quand il les rouvre, il te regarde, et il attend que tu choisisses." },
    ],
    choices: [
      { label: "Attendre l'étale, et poser la main sur la plaque du cinquième tour", big: true, hide: { any: [{ has: "ecueils:ouverte" }, { not: { any: [{ has: "iie:tour" }, { voile: "iie_insc" }, { voile: "iie_ordre" }, { voile: "iie_grille" }, { has: "iij:dentelle_ecueils" }] } }] }, to: "IIE_cache" },
      { label: "Attendre l'étale et écouter chaque tour", hide: { any: [{ has: "iie:tour" }, { has: "ecueils:ouverte" }] }, to: "IIE_oreille_etale" },
      { label: "Laisse-moi faire", who: "lison", hide: { any: [{ has: "iie:tour" }, { has: "ecueils:ouverte" }] }, test: { dom: "savoir", diff: 0, label: "Lison retrouve la comptine des Joncs" },
        win: { fx: { flag: "iie:tour", conf: { lison: 3 } }, to: "IIE_oreille_lison" }, lose: { to: "IIE_piege" } },
      { label: "Laisse-moi faire", who: "gildas", hide: { any: [{ has: "ecueils:ouverte" }, { seen: "IIE_oreille_gildas" }] }, to: "IIE_oreille_gildas" },
      { label: "Forcer les plaques au couteau, une par une", hide: { any: [{ has: "iie:tour" }, { has: "ecueils:ouverte" }] }, to: "IIE_piege" },
      { label: "Ressortir de la spirale", back: "IIE_escalier" },
    ] },

  IIE_oreille_lison: { act: "II", title: "La comptine", place: "ecueils", with: "lison",
    text: [
      "Lison s'adosse au mur du deuxième tour et chante, très bas, une comptine de corde à sauter des Joncs-Bas : *Un qui gronde, deux qui ment, trois qui pleure, quatre qui crie…* Elle s'arrête. « Et cinq qui se tait. On sautait à pieds joints au cinq, sans un bruit, et celle qui riait avait perdu. »",
      "Elle rit, d'un petit rire sec. « {{oreille#iie_comptine_l|Une comptine d'enfants, voilà tout|Ma grand-mère nous la faisait chanter tous les soirs, et je croyais que c'était pour nous endormir}}. »",
    ],
    choices: [{ label: "Attendre l'étale au cinquième tour", big: true, to: "IIE_cache" }] },

  IIE_oreille_gildas: { act: "II", title: "Le cinquième tour", place: "ecueils", with: "gildas",
    fx: { flag: "iie:tour" },
    text: [
      "Frère Gildas va jusqu'au fond de la spirale, sans hâte, et pose la paume à plat sur le mur lisse du cinquième tour, puis sur la plaque. « Ici, dit-il. À l'étale. Pas avant. »",
      "Tu lui demandes comment il le sait. Il réfléchit, comme s'il cherchait une phrase exacte. « On apprend à se taire, au Mont, en écoutant ce qui se tait. C'est le seul endroit de cette spirale où la mer ne dit rien. »",
      { with: "lison", text: "Lison le regarde de côté, longtemps, les bras croisés." },
    ],
    choices: [{ label: "Attendre l'étale au cinquième tour", big: true, to: "IIE_cache" }] },

  IIE_oreille_etale: { act: "II", title: "L'étale", place: "ecueils", takes: 3,
    text: [
      "Tu t'assieds au premier tour, le dos contre la pierre, et tu attends que la mer change. Pendant trois heures, les voix de la spirale montent et descendent avec la marée. Puis, d'un coup, la houle se retient : l'étale de basse mer. Les quatre premiers tours parlent encore, plus bas, comme des gens qui chuchotent dans une église.",
      "Tu passes de plaque en plaque, l'oreille contre le bronze. La première gronde. La deuxième murmure. La troisième sanglote. La quatrième crie, très loin. La cinquième est froide, sèche, muette.",
      { with: "salome", text: "Salomé est montée, finalement. Elle est restée sous l'arche, sans entrer, et elle écoute aussi, la mâchoire serrée." },
    ],
    choices: [
      { label: "Poser la main sur la plaque muette", test: { dom: "savoir", diff: 0, label: "Reconnaître le tour qui se tait", help: [{ if: { has: "metier:mains" }, v: 10 }, { with: "salome", v: 10 }, { if: { seen: "IIE_goulven_litanie" }, v: 15 }] },
        win: { fx: { flag: "iie:tour" }, to: "IIE_cache" }, lose: { to: "IIE_piege" } },
    ] },

  IIE_piege: { act: "II", title: "Le gosier s'ouvre", place: "ecueils",
    fx: { flag: "iie:piege" },
    text: [
      "La plaque cède sous ta main avec un claquement de bronze, et la spirale entière se met à hurler. Sous tes pieds, une dalle bascule. Par l'ouverture monte une colonne d'eau de mer, poussée par la houle dans le gosier de la tour, et elle remplit le couloir à hauteur de genoux, puis de taille.",
      "L'eau redescend aussi vite qu'elle est montée, et elle t'emporte avec elle vers la dalle ouverte, vers le noir.",
      { with: "tibere", text: "Tibère t'attrape par le col et tire. « Tiens-toi au mur ! Au mur, bon sang ! »" },
    ],
    choices: [
      { label: "T'agripper à la paroi", test: { dom: "nature", diff: -10, label: "Tenir contre le reflux", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 10 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { pv: -3, flag: "iie:tour", ep: ["perso", 300] }, to: "IIE_piege_tenu" }, lose: { fx: { pv: -6 }, to: "IIE_piege_chute" } },
      { label: "Te laisser emporter, et prendre ton souffle", fx: { pv: -4 }, to: "IIE_piege_chute" },
    ] },

  IIE_piege_tenu: { act: "II", title: "Le tour sec", place: "ecueils",
    text: [
      "Tu tiens. L'eau te tire aux jambes, recule, s'engouffre par la dalle avec un bruit de gorge, et la dalle se referme d'elle-même. La spirale ruisselle. Tu as perdu ta prise deux fois, et les ongles de deux doigts.",
      "En te relevant, tu vois une chose : le couloir est trempé du premier au quatrième tour, jusqu'au plafond. Le cinquième est sec. Pas une goutte sur la plaque, ni sur le mur lisse du fond. L'eau n'est jamais entrée là.",
    ],
    choices: [{ label: "Retourner au fond de la spirale", back: "IIE_oreille" }] },

  IIE_piege_chute: { act: "II", title: "La descente", place: "ecueils",
    text: [
      "Le noir, l'eau, le froid. Tu tombes dans le gosier avec la mer, tu heurtes une paroi, une autre, et la grille de bronze, en bas, est ouverte : le reflux l'a fait pivoter. Tu passes au travers, roulé{e} comme un galet, et tu ressors dans une grotte grise où la mer t'abandonne sur une plage de cailloux.",
      "Tu craches de l'eau longtemps. Au-dessus de toi, la grille se referme avec un bruit de cloche. Tu es au fond de la Gorge, sous le phare, et la marée remonte.",
      { with: "any", text: "Tes compagnons sont restés là-haut. Tu les entends crier ton nom par le gosier, très loin, comme au fond d'un puits." },
    ],
    choices: [{ label: "Chercher une issue dans la grotte", to: "IIE_cloche" }] },
});

// ==================================================================== the cache
Object.assign(P, {
  IIE_cache: { act: "II", title: "La cache de l'Ouïe", place: "ecueils", takes: 2,
    fx: { relic: "f_ecueils", item: "diapason", flag: "ecueils:ouverte", ep: ["histoire", 4000] },
    text: [
      { if: { not: { seen: "IIE_porte_mer" } }, text: "L'étale vient. La spirale se tait tour à tour, du premier au quatrième, comme une assemblée qui retient son souffle. Tu poses la paume sur la plaque du cinquième tour. Le bronze est tiède. Quelque chose, dans le mur, se déclenche avec un bruit de chaîne ; le mur lisse du fond pivote sur un axe, lentement, et l'air qui en sort sent la cire et la pierre sèche.",
        else: "La dalle pivote sous ta poussée. Tu te glisses par l'ouverture et tu te retrouves au fond de la spirale, au cinquième tour, là où la mer se tait. Le mur lisse a tourné sur son axe ; derrière lui, une niche, et l'air qui en sort sent la cire et la pierre sèche." },
      "Dans la niche, un coffret d'ambre et de plomb, gros comme un missel. Le couvercle s'ouvre sans clé. Dedans, sur un lit de laine grasse, un tube de plomb scellé, et une fourche de bronze vert, longue comme la main, dont les deux branches sont fines comme des aiguilles à tricoter.",
      "Le tube contient une feuille de vélin pliée en quatre. Une écriture de chancellerie, serrée, et au bas, deux lettres : A. V. *La reine, ce jour, à l'Ouïe, assise face à la mer, montre de la main {{loupe#iie_feuillet|le nord et la ville, et pleure sans bruit|deux hommes de la salle du conseil. Celui qui tenait ses bras portait l'anneau des Marrel. Celui qui tenait la pince, l'anneau des Fourcaud}}. Ce qu'elle a montré, je l'écris. Ce que j'écris, nous le tairons.*",
      "Sous la laine, gravé au fond du coffret, une seule ligne : *Trois fois il parle. La pierre qui chante le nourrit.*",
      { with: "lison", text: "Lison s'est approchée sans bruit. Elle regarde le diapason, puis toi, et elle a l'air, pour une fois, d'avoir oublié ce qu'elle allait dire." },
      { with: "tibere", text: "Tibère siffle entre ses dents. « Une fourchette. Trois cents ans de secret pour une fourchette. » Il le dit pour rire, et il ne rit pas." },
      { with: "gildas", text: "Frère Gildas fait le signe de croix, lentement, comme devant un reliquaire. Ses lèvres bougent. Tu crois lire sur elles un nom, et tu n'en es pas sûr{e}." },
    ],
    choices: [
      { label: "Frapper le diapason contre la paroi", big: true, to: "IIE_premiere_note" },
    ] },

  IIE_premiere_note: { act: "II", title: "La première note", place: "ecueils", backName: "la niche de l'Ouïe",
    fx: { ep: ["seance", 800] },
    text: [
      "Tu frappes la fourche contre la pierre, doucement. Le bronze chante. La note dure ; elle s'amincit, elle descend dans la pierre, et la pierre se met à répondre. Autour de toi, des mots se mettent à bouger dans le lieu même, comme de l'eau sous le vent.",
      "La niche {{echo#iie_e_vasse|vibre longtemps, puis la note s'éteint dans le plomb|rend une voix d'homme, posée, qui dicte : « Le feuillet dans le plomb, Azenor, et le diapason par-dessus. Celui qui l'aura trouvé saura s'en servir, ou il ne l'aurait pas trouvé. »}}.",
      "Le cinquième tour {{echo#iie_e_taiseuse|garde un silence épais, un silence de feutre|rend une voix de femme qui pleure et rit à la fois : « Elle m'a fait signe de ne pas pleurer, Aymeric. Avec les mains. Elle n'a plus que les mains. »}}.",
      "Derrière toi, la spirale {{echo#iie_e_lothaire|se tait, tour après tour|rend une voix douce, que tu connais, et qui s'impatiente : « Rien. Ils ont emporté leur porte. Tant pis. La mer, alors. Qu'on prévienne la plongeuse. »}}.",
      "Le bronze tiédit dans ta paume. Il pèse un peu moins qu'avant, ou c'est ta main qui s'est habituée.",
      { after: "voile:iie_e_lothaire", with: "salome", text: "Salomé est sous l'arche. Elle est montée sans bruit. Elle a entendu la dernière phrase, et elle te regarde avec un visage que tu ne lui connaissais pas, très calme, très blanc." },
      { after: "voile:iie_e_vasse", with: "lison", text: "Lison s'est assise sur ses talons, les mains sur la bouche. « Azenor, dit-elle à travers ses doigts. Azenor Vasse. Elle est dans la chanson des noms, chez nous. Je croyais que c'était un nom pour la rime. »" },
    ],
    choices: [
      { label: "Ranger le diapason et le feuillet, et redescendre", back: "IIE_escalier" },
    ] },

  IIE_goulven_paix: { act: "II", title: "Ce que disait Ronan", place: "ecueils",
    fx: { set: { "iie:goulven": "paix" }, flag: "iie:goulven", quest: "IIE_gardien", item: "iie_tr_lampe", clock: { tresors: 1 }, ep: ["seance", 700] },
    text: [
      "Tu trouves Loïg dans sa cuisine, devant ses trois bols. Tu t'assieds à la place d'Elouan, et tu lui dis ce que les pierres ont rendu : la voix d'Elouan qui criait de tenir la lampe, et celle de Ronan, calme, qui disait *Laisse. Il a bien fait de rester là-haut. Rame.*",
      "Loïg se tait. Il prend le bol de Ronan entre ses deux mains et le tient comme on tient un oiseau tombé. Puis il pleure, sans bruit, la bouche ouverte, longtemps, et la soupe tremble dans le bol.",
      "« Il criait pas, dit-il enfin. Il criait pas après moi. » Il essuie son nez du revers du poignet. « Huit hivers que j'écoute la mauvaise voix. »",
      "Il se lève, va au lit clos, en sort un paquet de toile huilée, et te le met dans les mains. Dedans, une lampe de voyage en argent, ciselée de croissants, noircie, très belle. « La lampe des gardiens. Mon père la tenait du sien. Il n'y a plus de gardiens. Prenez-la. Moi je garde la grande. »",
      "Ce soir-là, pour la première fois depuis huit hivers, il ne met que son bol sur la table.",
    ],
    choices: [{ label: "Laisser Loïg à sa table", back: "IIE_phare_cale" }] },

  IIE_goulven_huile: { act: "II", title: "Sept mèches", place: "ecueils", takes: "night",
    fx: { set: { "iie:goulven": "huile" }, flag: "iie:goulven", quest: "IIE_gardien", item: "iie_tr_lampe", clock: { tresors: 1 }, fac: { hautes: 5 }, ep: ["seance", 600] },
    text: [
      "Il faut tout l'après-midi pour monter les deux barriques de *La Pimpante* par les cent quarante marches, une corde passée sur l'épaule, en soufflant à chaque meurtrière. Loïg monte derrière, en comptant les marches à voix haute. En haut, il racle la graisse de phoque au couteau, lave les sept godets à l'eau de mer, puis les vitres, au vinaigre, avec un chiffon de laine.",
      "L'huile coule dans la lampe, claire, un peu verte. Loïg taille les mèches aux ciseaux, très droit, et quand le soleil touche la mer, il les allume une à une avec un brin de chanvre.",
      "La lumière monte, blanche, nette, et va loin. Très loin, au nord, sur la côte, quelqu'un répond d'un feu.",
      "Loïg reste debout sur la galerie, les mains sur la rambarde. « Elouan aurait dit {{oreille#iie_goulven_elouan|qu'elle file droit|que j'aurais dû aller chercher l'huile moi-même il y a huit ans, au lieu d'attendre qu'on me la porte}}. » Plus tard, sans se retourner, il te tend une lampe de voyage en argent ciselé, noircie, enveloppée de toile. « La lampe des gardiens. Il n'y a plus de gardiens. Il y a une lampe. »",
    ],
    choices: [{ label: "Redescendre l'escalier dans la lumière", back: "IIE_phare_cale" }] },

  IIE_goulven_depart: { act: "II", title: "Quitter l'Ouïe", place: "ecueils",
    text: [
      "Tu dis à Loïg que *La Bavarde* repart pour Port-Vasier, qu'il y a de la place à bord, et un feu, et des gens. Qu'il pourrait y finir l'hiver.",
      "Il regarde la porte, puis l'escalier qui monte vers la lampe. « Et qui tiendra ? »",
      { with: "salome", text: "Salomé, appuyée au chambranle, répond avant toi : « La Veuve Corbière envoie un homme, si on la paie. J'en parlerai. Un phare éteint coûte plus cher aux Écumeurs qu'un gardien. »" },
    ],
    choices: [
      { label: "Le convaincre que la lampe peut attendre", test: { dom: "social", diff: -10, label: "Faire quitter son phare à un vieux gardien", help: [{ with: "salome", v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { if: { seen: "IIE_goulven_promesse" }, v: 5 }] },
        win: { fx: { set: { "iie:goulven": "parti" }, flag: "iie:goulven", quest: "IIE_gardien", item: "iie_tr_lampe", clock: { tresors: 1 }, ep: ["perso", 500] }, to: "IIE_goulven_part" },
        lose: { to: "IIE_goulven_reste" } },
      { label: "Le laisser à sa lampe", back: "IIE_goulven" },
    ] },

  IIE_goulven_part: { act: "II", title: "Le gardien à bord", place: "ecueils",
    text: [
      "Loïg fait son sac en une heure : un ciré, un couteau, un psautier dont il ne sait pas lire les mots, et les trois cuillers. Il éteint lui-même la lampe, à midi, en soufflant sur chaque mèche. Puis il descend les cent marches de l'île sans se retourner une seule fois.",
      "Au bas de l'escalier, il te met dans les mains une lampe de voyage en argent ciselé, noircie. « Pour le passage. La lampe des gardiens. » Il monte à bord de *La Bavarde* et s'assied à l'avant, face au large, son sac sur les genoux, comme un passager qui a payé.",
    ],
    choices: [{ label: "Retourner au bassin", back: "IIE_arrivee" }] },

  IIE_goulven_reste: { act: "II", title: "La lampe d'abord", place: "ecueils",
    text: [
      "Loïg t'écoute jusqu'au bout, poliment, en hochant la tête. Puis il se lève, prend le bidon de graisse, et commence à monter l'escalier vers la lampe.",
      "« Revenez quand Ronan se taira, dit-il depuis la troisième marche. Ou quand vous aurez de l'huile. {{oreille#iie_goulven_marches|Avant, je suis pris|Avant, je n'ose pas descendre les cent marches de l'île, voilà la vérité, je ne les ai pas descendues depuis huit hivers}}. »",
    ],
    choices: [{ back: "IIE_goulven" }] },
});

// ==================================================================== listening to the islands, the grey sail
Object.assign(P, {
  IIE_ecoute: { act: "II", title: "Le bassin parle", place: "ecueils",
    fx: { ep: ["perso", 300] },
    text: [
      "Debout sur le rouf, tu frappes le diapason contre le taquet de pierre du quai, à peine. La note sort, mince, et le bassin se met à répondre en dessous : des morceaux de voix, des bruits d'avirons, une chanson tronquée, tout ce que l'eau a gardé entre ces deux bras de roche.",
      "Le quai de pierre {{echo#iie_e_quai|est couvert de moules jusqu'à la ligne de marée|rend une voix rauque qui compte des barriques : « … dix-neuf, vingt. L'huile pour l'Ouïe. Et après on file, le temps tourne au noroît. »}}.",
      "Les rochers du nord {{echo#iie_e_ecumeurs|sont blancs de fientes et de sel|rendent un rire d'homme, un rire gras : « La Banque paie la plongeuse cent ducats et elle croit qu'on va la regarder faire. On attendra qu'elle remonte, et on prendra le reste. »}}.",
      { with: "salome", text: "Salomé s'est assise sur le panneau de cale. Ce que le bronze fait revenir, elle l'entend aussi, comme toi, comme une conversation dans la pièce d'à côté. « Ce truc, dit-elle à la fin. Ça rend tout ? Même ce qu'on dit tout bas ? » Tu dis que tu ne sais pas encore. Elle hoche la tête, lentement, et regarde au sud." },
      "Chaque note laisse le bronze un peu plus léger dans ta main. Tu penses aux trois petits ronds de la carte, et à la ligne gravée au fond du coffret.",
    ],
    choices: [{ back: "IIE_arrivee" }] },

  IIE_voile_banque: { act: "II", title: "La voile grise", place: "ecueils",
    text: [
      "À l'ouest, à deux lieues peut-être, une voile grise, une seule, qui tient sa position à la cape et ne vient ni ne repart. Elle était là ce matin. Elle y est encore.",
      { with: "salome", text: "Salomé la regarde un long moment, une main en visière. « Un cotre. Bien tenu. Ses filets sont à bord, secs. Il attend. »" },
      { with: "tibere", text: "Tibère plisse les yeux, puis hausse les épaules. « Un caboteur de Port-Vasier qui attend la marée, voilà tout. {{oreille#iie_tibere_cotre|J'ai vu cent voiles comme ça|C'est le Fidèle. Brunel est à bord, et il m'a dit d'allumer un feu sur la galerie du phare le soir où tu aurais trouvé la porte}}. »" },
      { without: "tibere", text: "Le cotre gris garde sa distance. Il a l'air de quelqu'un qui prend des notes." },
    ],
    choices: [
      { label: "Demander à Tibère, seul à seul, à qui il devait faire signe", with: "tibere", hide: { not: { voile: "iie_tibere_cotre" } }, to: "IIE_tibere_feu" },
      { label: "Laisser le cotre à sa cape", fx: { flag: "iie:cotre" }, back: "IIE_arrivee" },
    ] },

  IIE_tibere_feu: { act: "II", title: "Le feu sur la galerie", place: "ecueils", with: "tibere",
    text: [
      "Tu prends Tibère à part, à l'avant, et tu lui demandes à voix basse quand il comptait allumer le feu sur la galerie du phare.",
      "Il te regarde. Il regarde ta main, et l'oreille où tu portes le cornet. Ses épaules descendent d'un coup, comme un sac qu'on pose. « Ce soir, dit-il. C'était ce soir. Cinq ducats la semaine, et deux de plus pour le feu. » Il gratte sa balafre. « Rosalie a besoin d'un manteau. Ça n'excuse rien. Je te dis le prix, c'est tout. »",
      { if: { has: "tibere:espion" }, text: "« Tu savais déjà, dit-il. Je l'ai vu à Salvèze, dans tes yeux. Tu m'as gardé quand même. Je n'ai jamais compris pourquoi. »" },
    ],
    choices: [
      { label: "« Allume-le. Mais sur l'île aux Fous, à l'autre bout de l'archipel. »", fx: { flag: ["tibere:double", "iie:feu_faux"], conf: { tibere: 10 }, ep: ["perso", 400] }, back: "IIE_arrivee" },
      { label: "« Tu n'allumeras rien du tout. »", fx: { flag: "iie:feu_non", conf: { tibere: 3 } }, back: "IIE_arrivee" },
      { label: "« Allume-le où il t'a dit. Je veux que Brunel croie qu'il me tient. »", fx: { flag: ["iie:feu_appat", "tibere:double"], conf: { tibere: 5 } }, back: "IIE_arrivee" },
    ] },
});

// ==================================================================== the gannet island
Object.assign(P, {
  IIE_fous: { act: "II", title: "L'île aux Fous", place: "ecueils", backName: "l'île aux Fous",
    text: [
      { first: true, text: "Le bruit arrive avant l'odeur, et l'odeur avant l'île. Des milliers de fous, blancs, la tête jaune, serrés sur chaque corniche à un bec l'un de l'autre, qui crient, se battent, plongent en flèche dans la houle et remontent avec un hareng. La roche est blanche de fiente sur trois toises d'épaisseur. Le canot touche une grève de galets où traînent des plumes, des arêtes, des bouts de filet." },
      { first: true, text: "Au pied de la falaise, une barque tirée au sec, deux paniers d'osier pleins d'œufs bleutés, une corde lovée. Et une femme qui hurle vers le haut de la falaise, les mains en porte-voix, un nom que les oiseaux couvrent à chaque fois." },
      { again: true, text: "L'île aux Fous, ses cris, sa fiente, ses oiseaux qui tombent dans la mer comme des pierres. Sur la grève, les paniers de Klervi." },
      { again: true, after: "ecueils:ouverte", text: "La falaise {{echo#iie_e_fous|crie de tous ses oiseaux, et rien d'autre ne s'entend|rend, sous les cris, une voix d'homme qui hurle à un canot : « Le bateau de l'huile est sur les Fous ! Elouan ! Ronan ! Par ici, il y a encore deux hommes sur la quille ! »}}." },
      { after: "iie:fous", text: "Briac te fait un grand signe du haut d'une corniche, accroché d'une main, avec l'aisance d'un garçon qui a oublié qu'il a eu peur." },
    ],
    choices: [
      { label: "Aller à la femme qui crie", hide: { seen: "IIE_klervi" }, to: "IIE_klervi" },
      { label: "La corniche où Briac est bloqué", hide: { any: [{ not: { seen: "IIE_klervi" } }, { has: "iie:fous" }] }, to: "IIE_corniche" },
      { label: "Les nids du bas, parmi les débris d'épave", to: "IIE_fous_nids" },
      { label: "La pierre grise au sommet de l'île, sous le vent", to: "IIE_pierre_fous" },
      { label: "Retourner au canot", back: "IIE_arrivee" },
    ] },

  IIE_klervi: { act: "II", title: "Klervi", place: "ecueils",
    fx: { meet: "iie_klervi", questSeen: "IIE_fous" },
    text: [
      "La femme se retourne. Quarante ans, un foulard noué serré, des avant-bras de cordière, des mains coupées partout par la roche. « Mon fils, dit-elle sans préambule. Briac. Douze ans. Il est descendu chercher un nid sur la corniche du milieu, et la corde a glissé. Il est coincé là depuis le matin. »",
      "Elle te montre, à mi-hauteur de la falaise, une tache bleue minuscule collée contre la roche blanche : un enfant, assis sur une corniche large comme une marche, au milieu des oiseaux qui lui piquent les mains. Au-dessus de lui, la roche surplombe. En dessous, trente pieds de vide et les galets.",
      "« {{oreille#iie_klervi_corde|La corde a glissé, c'est tout|J'ai mal noué la corde, ce matin. Moi. Vingt ans que je noue ces cordes}}, dit Klervi. Je ne peux plus monter, j'ai l'épaule démise depuis l'hiver. J'attendais un bateau. »",
      { with: "salome", text: "Salomé regarde la falaise, puis la mer. « La marée monte. Dans deux heures, il n'y aura plus de grève sous lui pour l'attraper s'il tombe. »" },
    ],
    choices: [
      { label: "« J'y vais. »", to: "IIE_corniche" },
      { label: "« Je reviendrai plus tard. »", back: "IIE_fous" },
    ] },

  IIE_corniche: { act: "II", title: "La corniche", place: "ecueils",
    text: [
      "La falaise se monte par une cheminée de roche pourrie, puis par une vire où les oiseaux ne s'écartent qu'au dernier moment, en frappant du bec. Au-dessus de Briac, le surplomb ; en dessous, la roche lisse. Le garçon te regarde venir, très pâle, les mains en sang.",
      "« Je bouge pas, dit-il. Maman a dit de pas bouger. »",
    ],
    choices: [
      { label: "Descendre jusqu'à lui par le surplomb, la corde à la taille", if: { item: "corde" }, why: "Il te faudrait une corde.", test: { dom: "nature", diff: 0, label: "Passer le surplomb", help: [{ with: "salome", v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIE_briac" }, lose: { fx: { pv: -4 }, to: "IIE_corniche_chute" } },
      { label: "Le hisser à la force des bras, à plat ventre sur la vire", test: { dom: "combat", diff: -10, label: "Remonter un garçon d'une main", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIE_briac" }, lose: { fx: { pv: -4 }, to: "IIE_corniche_chute" } },
      { label: "Lui parler, et le faire monter seul, prise après prise", test: { dom: "social", diff: -10, label: "Donner du courage à un enfant", help: [{ if: { has: "metier:parole" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIE_briac" }, lose: { to: "IIE_corniche_chute" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison grimpe pieds nus" },
        win: { fx: { conf: { lison: 3 }, ep: ["perso", 400] }, to: "IIE_briac" }, lose: { to: "IIE_corniche_chute" } },
    ] },

  IIE_corniche_chute: { act: "II", title: "La chute", place: "ecueils",
    text: [
      "La prise casse. Briac glisse, tu le rattrapes par le poignet, et vous partez ensemble, vous raclant à la roche, dans un nuage d'oiseaux furieux. Trente pieds. La grève n'est plus là : la marée a monté. Vous tombez dans l'eau, entre deux rochers, et l'eau est si froide que tu en perds le souffle.",
      "Tu remontes, tu cherches le garçon, tu le trouves au toucher. Il crache, il pleure, il vit. Klervi est déjà dans l'eau jusqu'à la taille, avec son épaule démise, et c'est elle qui vous tire sur les galets, l'un après l'autre, en jurant à chaque fois.",
      { with: "salome", text: "Salomé arrive au canot, à grands coups d'avirons, et vous hisse à bord. Elle a gardé les mains sur toi un moment de trop, pour s'assurer que tu respirais." },
    ],
    choices: [{ label: "Reprendre ton souffle sur la grève", to: "IIE_briac" }] },

  IIE_briac: { act: "II", title: "Briac", place: "ecueils",
    fx: { flag: "iie:fous", set: { "iie:briac": "sauve" }, quest: "IIE_fous", fac: { hautes: 5 } },
    text: [
      "Klervi tient son fils contre elle à l'étouffer, d'un seul bras, le visage dans ses cheveux. Briac se dégage au bout d'un moment, gêné, et fouille dans sa chemise. Il en sort un œuf bleu, intact. « Je l'avais eu, dit-il. Le nid du milieu. »",
      "Klervi rit, une fois, un rire cassé. Puis elle te regarde. « {{oreille#iie_klervi_argent|Je n'ai pas d'argent|J'ai douze liards cousus dans mon ourlet pour la dot de la petite, et je ne vous les donnerai pas}}. J'ai des œufs, et une chose que mon père m'a montrée. » Elle tend le bras vers le sommet de l'île. « La pierre grise, là-haut, sous le vent. Quand le noroît passe dessus, elle chante. Mon père disait que les gardiens de l'Ouïe venaient y frapper des fers, autrefois, et que les fers chantaient après. Je ne sais pas ce que ça veut dire. Vous, peut-être. »",
      "Elle te donne deux douzaines d'œufs dans un panier, et un morceau de lard enveloppé dans une feuille de chou.",
    ],
    choices: [{ label: "Laisser la mère et le fils à leurs paniers", fx: { food: 2 }, back: "IIE_fous" }] },

  IIE_fous_nids: { act: "II", title: "Les nids du bas", place: "ecueils",
    text: [
      "Au bas de la falaise, les fous font leurs nids avec tout ce que la mer leur apporte : des algues, des plumes, et les débris de trois siècles de naufrages. Des bouts de cordage, des lambeaux de voile, un soulier, la moitié d'une poupée de bois. Les oiseaux te piquent les mains quand tu approches.",
      "Dans un nid, mêlé aux brins de filet, un anneau {{pie#iie_bague|de laiton vert-de-grisé, comme on en trouve sur les vieilles poulies|d'or massif, sous une croûte de vert qui vient du filet de cuivre où il s'était pris : une bague d'homme, gravée d'une ancre}}.",
      "Le fou qui couve dessus te regarde de son œil bleu cerclé de noir, et ouvre le bec.",
    ],
    choices: [
      { label: "Prendre la bague sous l'oiseau", hide: { any: [{ not: { voile: "iie_bague" } }, { has: "tresor:iie_bague" }] }, fx: { item: "iie_tr_bague", clock: { tresors: 1 }, flag: "tresor:iie_bague", pv: -1, ep: ["perso", 300] }, to: "IIE_fous_bague" },
      { label: "Laisser l'oiseau à son nid", back: "IIE_fous" },
    ] },

  IIE_fous_bague: { act: "II", title: "La bague à l'ancre", place: "ecueils",
    text: [
      "Le fou te mord la main jusqu'au sang avant de céder la place. Tu frottes l'anneau à l'eau de mer et au sable. L'or apparaît, épais, lourd, d'un jaune sourd. À l'intérieur, une inscription usée : *À Y., de sa Gwladys, pour qu'il revienne.*",
      { with: "salome", text: "Salomé prend la bague, la tourne dans ses doigts, la rend. « Il n'est pas revenu. On ne les écrit que pour ceux-là. »" },
    ],
    choices: [{ back: "IIE_fous" }] },

  IIE_pierre_fous: { act: "II", title: "La pierre sous le vent", place: "ecueils", backName: "la pierre des Fous",
    text: [
      { first: true, text: "Au sommet de l'île, au-dessus des derniers nids, une pierre grise dressée, plus haute que toi, {{pie#iie_pierre_trous|percée de trous ronds comme une éponge|percée de trous qu'une main a forés à la mèche, il y a très longtemps, et chacun est cerclé d'un fil d'ambre}}. Le vent du noroît passe au travers et la pierre chante : une note basse, continue, que tu sens dans tes dents avant de l'entendre. Autour, l'herbe est rase, et quelqu'un, il y a longtemps, a creusé dans le roc une marche pour s'y tenir debout." },
      { again: true, text: "La pierre des Fous, percée de vent, et sa note basse qui te remue les dents." },
      { if: ECHO_OK, text: "Dans ton sac, le diapason vibre tout seul, très faiblement, comme un chien qui reconnaît une voix." },
    ],
    choices: [
      { label: "Frapper le diapason contre la pierre chantante", if: ECHO_OK, why: NO_FORK, fx: { recharge: { echo: 3 } }, to: "IIE_pierre_fous_chant" },
      { label: "Redescendre vers la grève", back: "IIE_fous" },
    ] },

  IIE_pierre_fous_chant: { act: "II", title: "La pierre chante", place: "ecueils",
    text: [
      { first: true, text: "Tu frappes la fourche contre la pierre. La pierre et le bronze se reconnaissent : la note du diapason monte, rejoint celle du vent, s'y enroule, et le bronze se met à chauffer dans ta main comme un caillou resté au soleil. Quand tu le retires, il bourdonne encore, plein. Il a bu." },
      { again: true, text: "Le diapason contre la pierre, la note qui monte, le bronze qui se remplit." },
      { with: "lison", once: true, text: "Lison écoute, la tête penchée. « Ma grand-mère a une pierre comme ça dans son jardin, dit-elle. Elle dit que c'est pour le linge. »" },
    ],
    choices: [{ back: "IIE_pierre_fous" }] },
});

// ==================================================================== the tidal caves of la Gorge
Object.assign(P, {
  IIE_grottes: { act: "II", title: "Les grottes de la Gorge", place: "ecueils", backName: "l'entrée de la Gorge",
    text: [
      { first: true, text: "Au pied de la falaise du phare, côté large, la roche s'ouvre en une fente haute comme trois mâts, où la houle s'engouffre et ressort en soufflant une écume jaune. À marée haute, la fente est une bouche pleine. À marée basse, un seuil de rochers glissants découvre, et l'on voit au fond une lumière verte, et des marches naturelles qui montent dans le noir." },
      { again: true, text: "La fente de la Gorge, sa respiration d'écume, le seuil de rochers que la mer couvre et découvre." },
      { again: true, after: "ecueils:ouverte", text: "La fente {{echo#iie_e_gorge|souffle et ressouffle, comme un soufflet de forge|rend des coups de masse sur la pierre et une voix qui chante pour donner la cadence : « Une porte pour la mer, une porte pour le ciel, et la reine au milieu qui ne dit rien. »}}." },
      { with: "salome", text: "Salomé jauge la houle. « Une heure de basse mer, pas plus. Après, ça remplit d'un coup, comme une baignoire. Si tu es au fond, tu y restes. »" },
    ],
    choices: [
      { label: "Attendre la basse mer, et entrer", to: "IIE_gorge" },
      { label: "Entrer tout de suite, à la nage, entre deux vagues", test: { dom: "nature", diff: -10, label: "Passer la fente avant la vague", help: [{ with: "salome", v: 15 }] },
        win: { to: "IIE_gorge" }, lose: { fx: { pv: -4 }, to: "IIE_maree_montante" } },
      { label: "Retourner au canot", back: "IIE_arrivee" },
    ] },

  IIE_gorge: { act: "II", title: "La Gorge", place: "ecueils", takes: 3, backName: "le couloir de la Gorge",
    text: [
      { first: true, text: "Les marches naturelles montent, puis redescendent, dans un couloir de roche qui sent l'iode et la vase. L'eau reste dans des vasques larges comme des étangs, d'un noir parfait. Dans la plus grande, quelque chose bouge : un dos luisant, puis deux, puis une tête en coin, plate, aux dents en aiguilles. Des anguilles de mer, longues comme un homme, piégées là par le reflux et affamées." },
      { again: true, before: "iie:gorge", text: "Les vasques noires du couloir. Les anguilles y tournent encore." },
      { again: true, after: "iie:gorge", text: "Le couloir de la Gorge, ses vasques noires, la lumière verte au fond." },
    ],
    choices: [
      { label: "Les affronter au bord de la vasque", hide: { has: "iie:gorge" }, fight: { title: "Les anguilles de la Gorge", enemies: [{ id: "anguille", n: 2 }], terrain: "nature",
        win: { fx: { flag: "iie:gorge", ep: ["perso", 500] }, to: "IIE_cloche" }, lose: { fx: { pv: -3 }, to: "IIE_maree_montante" },
        flee: { label: "Reculer vers la fente", dom: "nature", diff: 0, to: "IIE_grottes" } } },
      { label: "Longer la vire au-dessus de l'eau, sans un bruit", hide: { has: "iie:gorge" }, test: { dom: "discretion", diff: -10, label: "Passer au-dessus des anguilles", help: [{ with: "lison", v: 15 }] },
        win: { fx: { flag: "iie:gorge", ep: ["perso", 400] }, to: "IIE_cloche" }, lose: { fx: { pv: -4 }, to: "IIE_maree_montante" } },
      { label: "Leur jeter à manger dans la vasque du fond, et passer pendant qu'elles se battent", hide: { has: "iie:gorge" }, if: { food: { min: 1 } }, why: "Tu n'as rien à leur jeter.", fx: { food: -1, flag: "iie:gorge", ep: ["perso", 300] }, to: "IIE_cloche" },
      { label: "Traverser jusqu'à la lumière verte", hide: { not: { has: "iie:gorge" } }, to: "IIE_cloche" },
      { label: "Ressortir par la fente", back: "IIE_grottes" },
    ] },

  IIE_cloche: { act: "II", title: "La Cloche", place: "ecueils", backName: "la Cloche",
    text: [
      { first: true, text: "Une salle ronde, haute, en forme de cloche renversée. La lumière verte vient d'une fissure tout en haut, par où l'on voit un morceau de ciel. Le sol est une plage de galets noirs. Au centre, une colonne de roche jaune monte du sol jusqu'à hauteur d'homme ; quand la houle passe sous la salle, elle vibre, et toute la Cloche bourdonne." },
      { first: true, text: "Au plafond, contre la paroi nord, une grille de bronze ronde : le fond du gosier, sous le phare. Au bout de la plage, un couloir s'enfonce sous l'eau, et l'on devine, à travers l'eau claire, une forme carrée, trop droite pour être de la roche : une porte." },
      { again: true, text: "La Cloche, ses galets noirs, sa colonne jaune qui bourdonne. La grille du gosier au plafond, le couloir noyé au bout." },
      { again: true, after: "ecueils:ouverte", text: "La Cloche {{echo#iie_e_cloche|bourdonne sous la houle, longtemps|rend une voix d'enfant, très claire, qui récite pendant qu'on frappe la pierre : « Un qui gronde, deux qui ment, trois qui pleure, quatre qui crie, cinq qui se tait. — Encore, Azenor, et plus bas. »}}." },
      "La colonne jaune est {{pie#iie_ambre|une résine épaisse coulée là par la roche, comme une cire de chandelle|un ambre pur, clair, qui garde dans sa masse des bulles d'air de mille ans : le même ambre que les cerclages des instruments}}. À sa base, des éclats manquent, taillés au ciseau.",
      { if: ECHO_OK, text: "Dans ton sac, le diapason vibre à l'unisson de la colonne." },
    ],
    choices: [
      { label: "Détacher un éclat d'ambre au couteau", hide: { any: [{ not: { voile: "iie_ambre" } }, { has: "tresor:iie_ambre" }] }, fx: { item: "iie_tr_ambre", clock: { tresors: 1 }, flag: "tresor:iie_ambre", ep: ["perso", 300] }, to: "IIE_cloche_ambre" },
      { label: "Frapper le diapason contre la colonne", if: ECHO_OK, why: NO_FORK, fx: { recharge: { echo: 3 } }, to: "IIE_cloche_chant" },
      { label: "Le couloir noyé, et la porte", to: "IIE_porte_mer" },
      { label: "Prendre le couloir de la Gorge, vers la fente", to: "IIE_gorge" },
    ] },

  IIE_cloche_ambre: { act: "II", title: "L'éclat", place: "ecueils",
    text: [
      "L'ambre se taille mal, mieux qu'on ne croirait : il s'écaille en conques, comme le silex. L'éclat que tu détaches est gros comme un œuf de poule, d'un jaune de miel, et il chante quand tu le cognes de l'ongle, une petite note sèche qui dure plus qu'elle ne devrait.",
      { with: "gildas", text: "Frère Gildas le prend dans sa paume et le regarde contre le jour de la fissure. « On en faisait des cerclages, autrefois, dit-il. Pour les choses qu'il fallait faire tenir ensemble. »" },
    ],
    choices: [{ back: "IIE_cloche" }] },

  IIE_cloche_chant: { act: "II", title: "La colonne chante", place: "ecueils",
    text: [
      { first: true, text: "La fourche touche l'ambre, et la Cloche entière répond. Le bourdon de la salle se resserre sur une seule note, celle du diapason, et le bronze s'emplit dans ta main jusqu'à te picoter les doigts. Le son met longtemps à mourir sous la voûte." },
      { again: true, text: "La colonne d'ambre, la note qui emplit la salle, le bronze qui se remplit." },
    ],
    choices: [{ back: "IIE_cloche" }] },

  IIE_porte_mer: { act: "II", title: "La porte de la mer", place: "ecueils", backName: "la porte de la mer",
    text: [
      { first: true, text: "Tu avances dans le couloir noyé, de l'eau jusqu'à la poitrine, puis jusqu'au cou. La porte est là : une dalle de bronze vert, carrée, frappée d'une conque à cinq tours, scellée dans la roche sous le phare. Devant elle, debout dans l'eau, il y a quelqu'un." },
      { first: true, text: "Une armure ancienne, couverte de moules et d'anatifes, rouillée jusqu'au cœur, tient debout toute seule. Le heaume est vide ; un crabe y loge. Quand la houle passe, l'armure tourne lentement la tête vers toi, avec un bruit de coquillages écrasés." },
      { again: true, before: "iie:noye_grotte", text: "La porte de bronze, et le gardien noyé debout devant elle, dans l'eau, qui tourne la tête vers toi." },
      { again: true, after: "iie:noye_grotte", text: "La porte de bronze et sa conque. Ce qui reste du gardien noyé gît dans l'eau, en morceaux de rouille et de coquilles." },
    ],
    choices: [
      { label: "Te battre, dans l'eau jusqu'au torse", hide: { has: "iie:noye_grotte" }, fight: { title: "Le gardien de la porte", enemies: [{ id: "gardien_noye", n: 1 }], terrain: "nature", spare: true,
        win: { fx: { flag: "iie:noye_grotte", ep: ["seance", 700] }, to: "IIE_noye_grotte" }, lose: { fx: { pv: -4 }, to: "IIE_maree_montante" },
        flee: { label: "Reculer vers la Cloche", dom: "nature", diff: 0, to: "IIE_cloche" }, calm: { to: "IIE_noye_grotte" } } },
      { label: "Frapper le diapason contre la porte, et laisser la note parler au gardien", hide: { has: "iie:noye_grotte" }, if: ECHO_OK, why: "Il te faudrait une note qui parle à ces vieilles choses.", fx: { flag: ["iie:noye_grotte", "iie:noye_note"], ep: ["perso", 500] }, to: "IIE_noye_grotte" },
      { label: "Passer derrière lui pendant que la vague recule", hide: { has: "iie:noye_grotte" }, test: { dom: "discretion", diff: -10, label: "Glisser dans le dos d'un gardien noyé", help: [{ with: "lison", v: 10 }] },
        win: { fx: { flag: "iie:noye_grotte", ep: ["perso", 400] }, to: "IIE_noye_grotte" }, lose: { fx: { pv: -5 }, to: "IIE_maree_montante" } },
      { label: "Pousser la conque de la porte au cinquième tour", hide: { any: [{ not: { has: "iie:noye_grotte" } }, { not: { has: "iie:tour" } }] }, to: "IIE_porte_mer_monte" },
      { label: "Enfoncer la porte à l'épaule", hide: { any: [{ not: { has: "iie:noye_grotte" } }, { has: "iie:tour" }] }, test: { dom: "combat", diff: -20, label: "Faire céder une porte de bronze", help: [{ with: "tibere", v: 20 }, { with: "salome", v: 10 }] },
        win: { fx: { flag: "iie:tour" }, to: "IIE_porte_mer_monte" }, lose: { fx: { pv: -3 }, to: "IIE_maree_montante" } },
      { label: "Retourner dans la Cloche", back: "IIE_cloche" },
    ] },

  IIE_noye_grotte: { act: "II", title: "Le gardien de la porte", place: "ecueils",
    text: [
      { outcome: "win", text: "L'armure s'ouvre sous tes coups comme une huître. Il n'y a rien dedans, que de l'eau et des coquilles. Les pièces tombent dans la mer une à une, et la dernière, le gantelet, reste accroché à la poignée de la porte." },
      { outcome: "calm", text: "L'armure s'immobilise, la tête penchée, et se fige. Une vague passe, puis une autre. Elle reste là, inclinée, comme quelqu'un qui écoute un ordre lointain." },
      { after: "iie:noye_note", once: true, text: "La note du diapason court sur la porte de bronze et entre dans l'eau. L'armure s'arrête au milieu d'un pas. Puis, lentement, elle s'agenouille dans la mer, et le heaume vide s'incline vers la porte, comme pour la saluer." },
      "Sur le plastron, sous les coquilles, tu distingues un croissant gravé. Un gardien de l'Ouïe, autrefois. Ou son armure, qui a continué la garde sans lui.",
      { with: "gildas", text: "Frère Gildas touche le croissant du bout des doigts, et dit une prière brève, en latin, à voix basse." },
    ],
    choices: [{ label: "Regarder la porte de près", back: "IIE_porte_mer" }] },

  IIE_porte_mer_monte: { act: "II", title: "L'escalier des gardiens", place: "ecueils",
    text: [
      "La porte de bronze pivote vers l'intérieur dans un grand soupir d'eau. Derrière, un escalier, taillé dans la roche, monte en vis, si étroit qu'il faut monter de côté. Il est sec. Les marches portent, tous les vingt degrés, une oreille gravée, comme dans le phare.",
      "Tu montes longtemps. L'air devient plus sec, plus froid. L'escalier finit contre une dalle de pierre lisse, d'où vient, de l'autre côté, un bruit de mer étouffé, en spirale.",
      { if: { has: "ecueils:ouverte" }, text: "La dalle pivote sous ta paume : tu es derrière le cinquième tour de l'oreille, dans la niche vide d'où tu as sorti le diapason. Les gardiens avaient leur chemin, pour descendre à la mer sans passer par la lampe." },
    ],
    choices: [
      { label: "Pousser la dalle", big: true, hide: { has: "ecueils:ouverte" }, to: "IIE_cache" },
      { label: "Redescendre à la porte de la mer", back: "IIE_porte_mer" },
      { label: "Traverser la spirale jusqu'à l'escalier du phare", hide: { not: { has: "ecueils:ouverte" } }, to: "IIE_escalier" },
    ] },

  IIE_maree_montante: { act: "II", title: "La mer remonte", place: "ecueils",
    text: [
      "La mer remonte d'un coup, comme Salomé l'a dit : une vague plus haute que les autres, puis une seconde, et le couloir se remplit. Tu nages, tu te cognes, tu avales de l'eau. Le courant t'arrache vers la fente, te roule sur les rochers du seuil, et te recrache dehors, dans l'écume, à vingt brasses de la falaise.",
      { with: "salome", text: "Le canot est là. Salomé t'attrape par le col et te tire à bord comme un filet, en jurant sans reprendre son souffle. « Une heure, je t'avais dit. Une heure ! »" },
      { without: "salome", text: "Tu nages jusqu'au bassin, longtemps, à contre-houle, et tu te hisses sur le quai de pierre, plus mort{e} que vif{ve}." },
    ],
    choices: [{ label: "Reprendre ton souffle au bassin", back: "IIE_arrivee" }] },
});

// ==================================================================== the rival wreckers of l'île Plate
Object.assign(P, {
  IIE_ilot_plat: { act: "II", title: "L'île Plate", place: "ecueils", backName: "le camp de l'île Plate",
    text: [
      { first: true, text: "Une table de roche nue, à peine plus haute que la mer, nue comme une enclume. Une demi-douzaine de cabanes de planches d'épave, calfatées de goudron, un feu de varech qui fume noir, des filets qui sèchent, et trois barques tirées au sec. Une quinzaine d'hommes et deux femmes, maigres, mal rasés, qui s'arrêtent tous de travailler pour te regarder aborder." },
      { first: true, text: "Près du feu, un garçon roux écaille des maquereaux avec un couteau trop grand pour lui. Il lève les yeux vers toi une seule fois, puis les garde baissés. Ses mains tremblent." },
      { again: true, when: "day", text: "L'île Plate, ses cabanes goudronnées, son feu de varech. Les hommes de Ravaud ravaudent leurs filets en te surveillant de biais." },
      { again: true, when: "night", text: "L'île Plate, la nuit : un feu, des silhouettes autour, une bouteille qui passe de main en main." },
      { again: true, after: "ecueils:ouverte", text: "Le feu de varech {{echo#iie_e_plate|craque et fume, et l'odeur de goudron te prend à la gorge|rend une voix d'homme, mal assurée, la voix de Ravaud : « Le cotre gris paie deux ducats la semaine pour qu'on chasse les plongeurs des Sourds. Deux ducats, les gars. On ne crache pas dessus. »}}." },
      { with: "salome", first: true, text: "Salomé reste dans le canot, la main sur l'aviron. « Ravaud et moi, on ne se parle plus. Vas-y. Je te regarde. »" },
      { again: true, after: "iie:lingot_demasque", text: "Le coffret au lingot doré a disparu de dessus les tonneaux. Les hommes de Ravaud t'appellent « l'ongle » quand tu passes, et ça les fait rire." },
      { after: "iie:ravaud=vaincu", text: "Le camp est à moitié vide. Ceux qui restent baissent la tête quand tu passes." },
    ],
    choices: [
      { label: "Demander à parler à Ravaud", hide: { any: [{ has: "iie:ravaud=vaincu" }, { has: "iie:ravaud=hostile" }] }, to: "IIE_ravaud" },
      { label: "Le garçon roux, près du feu", hide: { any: [{ has: "iie:jobic" }, { has: "iie:jobic_aveu" }, { has: "iie:ravaud=hostile" }] }, to: "IIE_jobic" },
      { label: "Racheter à Ravaud la dette de Jobic", hide: { any: [{ has: "iie:jobic" }, { not: { has: "iie:jobic_aveu" } }, { has: "iie:ravaud=hostile" }] }, to: "IIE_jobic_dette" },
      { label: "Aborder de nuit, sans bruit, pour enlever le garçon roux", hide: { any: [{ has: "iie:jobic" }, { not: { has: "iie:ravaud=hostile" } }] }, to: "IIE_camp_nuit" },
      { label: "Retourner au canot", back: "IIE_arrivee" },
    ] },

  IIE_ravaud: { act: "II", title: "Ravaud", place: "ecueils",
    fx: { meet: "iie_ravaud" },
    text: [
      "Ravaud sort de la plus grande cabane en finissant de boutonner un pourpoint de velours vert, mangé aux mites, qui a dû appartenir à un capitaine noyé. Cinquante ans, une barbe grise taillée en pointe, une balafre qui lui ferme à moitié l'œil gauche. Il a un sabre d'abordage passé dans la ceinture et un sourire qui découvre trois dents d'or.",
      "« Bienvenue sur mon île, dit-il. Tout ce qui coule entre l'Ouïe et les Sourds est à moi, par droit d'épave. La Veuve m'a chassé de Port-Vasier ; ici, je suis chez moi. Vous venez pour *La Pimpante*, comme tout le monde. {{oreille#iie_ravaud_banque|La Pimpante est à moi, et je la plongerai quand je voudrai|Le cotre gris de la Banque me paie pour qu'on n'y plonge pas, et mes gars ne savent pas que c'est la seule chose qui les nourrit}}. »",
      "Il s'assied sur un tonneau. « Mon plongeur est mort sur les Sourds l'an passé. {{oreille#iie_ravaud_noyes|La mer, ça arrive|Il y a des choses en armure sur cette épave, qui marchent, et je n'enverrai plus personne}}. Alors je vous fais un prix. La moitié de ce que vous remontez, et je vous laisse plonger. »",
      { if: { has: "iim:corbiere" }, text: "Il te regarde de plus près. « Vous êtes passé{e} chez la Veuve, vous. Ça se voit. Vous avez son odeur de pipe. »" },
    ],
    choices: [
      { label: "« Le cotre gris te paie pour garder l'épave. Il te lâchera dès qu'il n'aura plus besoin de toi. »", hide: { not: { voile: "iie_ravaud_banque" } }, to: "IIE_ravaud_pacte" },
      { label: "Accepter : la moitié de ce que tu remontes", fx: { set: { "iie:ravaud": "accord" } }, to: "IIE_ravaud_accord" },
      { label: "Lui acheter quelque chose de La Pimpante", to: "IIE_ravaud_lingot" },
      { label: "« L'épave n'est à personne. J'y plongerai sans ta permission. »", fx: { set: { "iie:ravaud": "hostile" } }, to: "IIE_ravaud_rupture" },
      { label: "Lui sauter dessus avant que ses hommes s'approchent", fight: { title: "Le camp de l'île Plate", enemies: [{ id: "iie_ravaud", n: 1 }, { id: "ecumeur", n: 2 }], terrain: "nature",
        win: { fx: { set: { "iie:ravaud": "vaincu" }, fac: { ecumeurs: -5 }, ep: ["seance", 1000] }, to: "IIE_ravaud_vaincu" }, lose: { fx: { pv: -3 }, to: "IIE_ravaud_capture" },
        flee: { label: "Courir jusqu'au canot", dom: "discretion", diff: 0, to: "IIE_arrivee" } } },
    ] },

  IIE_ravaud_accord: { act: "II", title: "Moitié", place: "ecueils",
    text: [
      "Ravaud crache dans sa main et te la tend. Elle est sèche et dure. « Moitié. Ce que vous remontez passe par ici avant d'aller ailleurs. Mes gars compteront. »",
      "Il se lève, déjà ailleurs, et crie à quelqu'un de remettre du varech sur le feu. Tu as un accord, et la certitude qu'il le trahira au premier ducat.",
    ],
    choices: [{ back: "IIE_ilot_plat" }] },

  IIE_ravaud_pacte: { act: "II", title: "Le prix du cotre", place: "ecueils",
    fx: { set: { "iie:ravaud": "allie" }, fac: { ecumeurs: 5 }, ep: ["seance", 800] },
    text: [
      "Tu dis la chose à voix basse, pour lui seul : deux ducats la semaine, le cotre gris, et ce qui arrivera le jour où la Banque aura ce qu'elle veut et n'aura plus besoin d'un Écumeur chassé sur un caillou.",
      "Le sourire de Ravaud tombe. Il regarde ses hommes, autour du feu, puis toi. « Qui t'a dit ça ? » Tu te tais. Il se frotte la balafre avec le pouce, longtemps.",
      "« La Banque m'a promis Port-Vasier, dit-il enfin. La place de la Veuve. Je suis vieux, pas idiot : je sais ce que vaut une promesse de banquier. Mais deux ducats, c'est deux ducats. » Il se lève. « Plonge où tu veux. Je ne te vois pas. Et si le cotre gris demande, tu n'es jamais venu{e}. »",
      "Il ajoute, sans te regarder : « Le rouquin, près du feu. Jobic. Il me doit deux ducats de dés. Si tu les paies, il est à toi. Il me gâche le moral, à pleurer la nuit. »",
    ],
    choices: [{ back: "IIE_ilot_plat" }] },

  IIE_ravaud_lingot: { act: "II", title: "Le lingot de La Pimpante", place: "ecueils",
    text: [
      "Ravaud fait apporter un coffret de bois, l'ouvre avec des gestes d'évêque. Dedans, sur un chiffon de velours, un lingot {{pie#iie_lingot|d'or jaune, frappé du besant de la Banque Marrel|de plomb doré à la feuille, dont la dorure s'écaille déjà sur l'arête : le besant est frappé de travers, d'un poinçon de cordonnier}}, gros comme un pain de savon.",
      "« Remonté de *La Pimpante* l'an passé, par mon pauvre plongeur, dit-il. Quatre ducats. C'est le quart de ce qu'il vaut à Salvèze. »",
    ],
    choices: [
      { label: "Payer les quatre ducats", hide: { voile: "iie_lingot" }, fx: { gold: -80, item: "iie_faux_lingot" }, to: "IIE_ilot_plat" },
      { label: "Gratter la dorure de l'ongle devant ses hommes", hide: { not: { voile: "iie_lingot" } }, fx: { flag: "iie:lingot_demasque", fac: { ecumeurs: 3 } }, to: "IIE_ravaud_dore" },
      { label: "Refermer le coffret", back: "IIE_ilot_plat" },
    ] },

  IIE_ravaud_dore: { act: "II", title: "Le plomb", place: "ecueils",
    text: [
      "La feuille d'or part sous ton ongle comme une peau de pomme. Dessous, le plomb, gris et mou. Un des hommes de Ravaud se met à rire, puis un autre. Ravaud referme le coffret d'un coup sec.",
      "« {{oreille#iie_ravaud_essayer|Il fallait bien essayer|Il fallait bien essayer, j'ai quinze bouches à nourrir sur ce caillou et plus un liard depuis la Chandeleur}}, dit-il, sans rancune apparente. Le précédent l'a acheté six ducats. Un chercheur de la Banque, en gants gris. » Il sourit de ses trois dents d'or. « Il l'a gratté aussi, et il l'a payé quand même. Il voulait que je lui doive quelque chose. »",
    ],
    choices: [{ back: "IIE_ilot_plat" }] },

  IIE_ravaud_rupture: { act: "II", title: "La rupture", place: "ecueils",
    text: [
      "Ravaud se lève lentement. Autour du feu, les hommes ont posé les filets. « Alors tu ne plongeras nulle part, dit-il. Repars. Ce soir, on vient voir ton bateau. »",
      "Ils te laissent rejoindre le canot. Ils te regardent partir en silence, et c'est pire.",
    ],
    choices: [{ label: "Regagner le canot", back: "IIE_arrivee" }] },

  IIE_ravaud_vaincu: { act: "II", title: "Le pourpoint vert", place: "ecueils",
    text: [
      "Ravaud est assis par terre, le dos contre son tonneau, le sabre à trois pas de sa main, et du sang plein la barbe. Ses hommes reculent vers les cabanes, lentement, les mains bien en vue.",
      "« Prends l'épave, dit-il en crachant rouge. Prends le rouquin, prends tout. {{oreille#iie_ravaud_pendu|Le cotre gris viendra demander des comptes, et c'est toi qu'il trouvera|Le cotre gris viendra demander des comptes, et c'est moi qu'il pendra à sa vergue, pas toi}}. »",
      { with: "tibere", text: "Tibère ramasse le sabre et le jette à la mer, loin, d'un geste de sergent." },
    ],
    choices: [{ back: "IIE_ilot_plat" }] },

  IIE_ravaud_capture: { act: "II", title: "Ligoté{e}", place: "ecueils", takes: 6,
    fx: { set: { "iie:ravaud": "hostile" } },
    text: [
      "Tu reprends conscience ligoté{e} à un poteau de cabane, la bouche pleine de sel et de sang. Ravaud fouille ton sac, une à une, les choses posées sur un tonneau. Il soupèse ta bourse, regarde ta lame, et jette le reste en tas.",
      { if: ECHO_OK, text: "Il prend le diapason, le fait tourner devant ses yeux, et le jette dans le tas avec un haussement d'épaules. « Une fourchette de cuivre. »" },
      "Vers le soir, quelqu'un coupe tes liens par derrière. Le garçon roux. « Le canot est à gauche, chuchote-t-il. Emmène-moi. S'il te plaît. Emmène-moi. »",
    ],
    choices: [
      { label: "Fuir avec le garçon roux jusqu'au canot", fx: { gold: -10, flag: "iie:jobic", set: { "iie:jobic": "enfui" } }, to: "IIE_jobic_aveu" },
    ] },

  IIE_camp_nuit: { act: "II", title: "Le camp, la nuit", place: "ecueils", takes: "night",
    text: [
      "Tu abordes l'île Plate par le nord, à la rame, avirons emmaillotés de chiffons. Le feu du camp est bas. Deux hommes veillent, adossés à une barque, une bouteille entre eux. Le garçon roux dort à l'écart, contre la cabane des filets, une couverture sur la tête.",
    ],
    choices: [
      { label: "Ramper jusqu'à lui entre les filets", test: { dom: "discretion", diff: -10, label: "Traverser le camp sans éveiller les veilleurs", help: [{ with: "lison", v: 15 }, { if: { item: "lanterne" }, v: 5 }] },
        win: { fx: { flag: "iie:jobic", set: { "iie:jobic": "enfui" }, ep: ["perso", 500] }, to: "IIE_jobic_aveu" },
        lose: { to: "IIE_camp_alerte" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère fait boire les veilleurs" },
        win: { fx: { flag: "iie:jobic", set: { "iie:jobic": "enfui" }, conf: { tibere: 3 }, ep: ["perso", 400] }, to: "IIE_jobic_aveu" },
        lose: { to: "IIE_camp_alerte" } },
    ] },

  IIE_camp_alerte: { act: "II", title: "L'alerte", place: "ecueils",
    text: [
      "Un filet se prend à ta botte, un flotteur de liège roule, et le veilleur le plus jeune se lève en criant. Le camp se réveille d'un coup. Le garçon roux, debout, te regarde, regarde les hommes qui accourent, et prend une décision : il court vers toi.",
    ],
    choices: [
      { label: "Te battre pour couvrir sa fuite", fight: { title: "L'alerte sur l'île Plate", enemies: [{ id: "ecumeur", n: 3 }], terrain: "nature",
        win: { fx: { flag: "iie:jobic", set: { "iie:jobic": "enfui" }, ep: ["seance", 800] }, to: "IIE_jobic_aveu" }, lose: { fx: { pv: -3 }, to: "IIE_ravaud_capture" },
        flee: { label: "Courir avec lui jusqu'au canot", dom: "discretion", diff: -10, to: "IIE_jobic_aveu" } } },
    ] },
});

// ==================================================================== the reef of les Sourds and the wreck of La Pimpante
Object.assign(P, {
  IIE_courant: { act: "II", title: "Le Raz", place: "ecueils",
    text: [
      "Entre l'Ouïe et les Sourds, la mer se resserre entre deux plateaux de roche et file comme une rivière en crue. Les gens de Port-Vasier l'appellent le Raz. L'eau y est lisse, bombée, et elle tourne en grands cercles huileux qui avalent les paquets d'algues.",
      { with: "salome", text: "Salomé a pris la barre. Elle est grise. Elle a vomi deux fois par-dessus bord depuis le bassin, en s'essuyant la bouche d'un revers de manche. « Si on prend le Raz de travers, on est sur les Sourds avant d'avoir dit ouf, dit-elle. Tiens l'écoute. {{oreille#iie_raz_s|Fais ce que je dis quand je le dis|Parle-moi tout le temps, n'importe quoi, sinon j'entends la note des Sourds et je lâche la barre}}. »" },
      { without: "salome", text: "Le patron de *La Bavarde* te met l'écoute dans les mains et crache dans l'eau pour voir où elle va." },
    ],
    choices: [
      { label: "Tenir l'écoute et obéir à la barre", test: { dom: "nature", diff: 0, label: "Passer le Raz", help: [{ with: "salome", v: 20 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIE_sourds" }, lose: { fx: { pv: -3 }, to: "IIE_courant_rate" } },
      { label: "Attendre l'étale pour passer, quitte à perdre la matinée", fx: { time: 4 }, to: "IIE_sourds" },
    ] },

  IIE_courant_rate: { act: "II", title: "Le Raz", place: "ecueils",
    text: [
      "L'écoute t'arrache les paumes. La voile claque, le bateau se couche, l'eau entre par-dessus le plat-bord en une nappe verte. Tu es projeté{e} contre le rouf. Pendant un moment tout tourne : le ciel, l'écume, le phare à l'envers.",
      { with: "salome", text: "Puis la barre revient. Salomé a lofé, d'un coup de reins, et *La Bavarde* se redresse en ruisselant, à vingt brasses des premières roches. « Ça va, dit Salomé, sans te regarder. Ça va. On y est. »" },
      "Les Sourds sont là, tout près, et chantent.",
    ],
    choices: [{ label: "Écoper, et regarder le récif", to: "IIE_sourds" }] },

  IIE_sourds: { act: "II", title: "L'écueil des Sourds", place: "ecueils", backName: "l'écueil des Sourds",
    text: [
      { first: true, text: "Un récif long d'une demi-lieue, à fleur d'eau, que la houle découvre et recouvre en écume. À basse mer, des têtes de roche noire émergent en ligne, percées, rongées, et le vent qui passe au travers les fait sonner : c'est la note que tu entendais la nuit, ici si forte qu'elle te remplit la poitrine. Au milieu de l'écume, un mât penche, noir, avec un reste de hune où nichent des cormorans." },
      { first: true, text: "L'eau, sous le mât, est d'une clarté incroyable. À neuf brasses, couchée sur le flanc, une coque. On voit le pont incliné, une écoutille béante, des bancs de poissons argentés qui entrent et sortent par les sabords." },
      { again: true, text: "Les Sourds, leur note grave, l'écume. Le mât de *La Pimpante* et, sous l'eau claire, la coque couchée." },
      { with: "salome", text: "Salomé a mouillé à vingt brasses du mât, pas plus près. Elle tourne le dos à l'eau. Elle regarde ses mains, sur la barre, comme si elles appartenaient à quelqu'un d'autre." },
      { with: "salome", after: "salome:plonge", text: "Salomé, cette fois, regarde l'eau. Longtemps. Puis elle se met à ranger le pont." },
    ],
    choices: [
      { label: "Plonger sur l'épave", to: "IIE_plongee" },
      { label: "La tête de roche qui chante le plus fort", to: "IIE_pierre_sourds" },
      { label: "Écouter l'écueil, le diapason en main", hide: { any: [{ not: ECHO_OK }, { seen: "IIE_sourds_echo" }] }, to: "IIE_sourds_echo" },
      { label: "Rentrer au bassin des Gardiens", back: "IIE_arrivee" },
    ] },

  IIE_sourds_echo: { act: "II", title: "Le jour de la plongée", place: "ecueils",
    fx: { ep: ["seance", 600] },
    text: [
      "Tu frappes le diapason contre le bordé, au-dessus de l'eau. La note descend dans la mer, et la mer, à l'aplomb du mât, se met à rendre ce qu'elle a gardé du 9 mai, il y a trois ans. Les mots bougent sur l'eau même.",
      "L'eau sous le mât {{echo#iie_e_maiwenn|est verte et claire jusqu'à six brasses|rend une voix de femme, gaie, qui claque des dents : « Trois coups, je remonte. Deux coups, du mou. Et tu ne lâches pas la corde pour te gratter le nez, Jobic. »}}.",
      "La houle {{echo#iie_coupe|bat le récif, régulière, et l'écume siffle entre les têtes de roche|rend une voix douce, sans hâte : « Coupe. On a le coffret. » Puis une voix de garçon : « Monsieur, elle a tiré trois coups, elle a tiré… » Et le bruit d'une lame dans du chanvre mouillé}}.",
      "Le récif {{echo#iie_e_jobic|chante sa note grave, et rien d'autre ne vient|rend, plus tard, la même voix de garçon, seule, qui sanglote : « Pardon, madame. Pardon. Je tenais. Je tenais, je vous jure. »}}.",
      { with: "salome", after: "voile:iie_coupe", text: "Salomé a lâché la barre. Elle est debout au milieu du pont, les bras le long du corps. Elle a entendu, comme toi, la voix douce, et la lame. Elle reste muette. Elle se met à respirer très vite, puis très lentement, comme avant une plongée." },
      { with: "salome", if: { not: { voile: "iie_coupe" } }, text: "Salomé t'a regardé{e} faire en silence. Elle n'a rien entendu de ce que tu as entendu, seulement le bronze, et elle attend que tu parles." },
    ],
    choices: [
      { label: "Aller à Salomé", big: true, with: "salome", hide: { not: { voile: "iie_coupe" } }, to: "IIE_verite" },
      { label: "Ranger le diapason", back: "IIE_sourds" },
    ] },

  IIE_pierre_sourds: { act: "II", title: "La tête des Sourds", place: "ecueils", backName: "la tête des Sourds",
    text: [
      { first: true, text: "La plus haute tête de roche du récif ne découvre que deux heures par marée. Tu y prends pied, de l'eau aux chevilles. Elle est percée de part en part d'une dizaine de trous ronds, lisses comme des goulots, et le vent y fait une note si grave et si forte que l'eau frémit autour de tes pieds. Tes oreilles bourdonnent longtemps après." },
      { again: true, text: "La tête des Sourds, ses trous lisses, sa note qui fait frémir l'eau." },
      { if: ECHO_OK, text: "Le diapason, dans ton sac, vibre si fort que tu le sens contre ta hanche." },
    ],
    choices: [
      { label: "Frapper le diapason contre la tête de roche", if: ECHO_OK, why: NO_FORK, fx: { recharge: { echo: 3 } }, to: "IIE_pierre_sourds_chant" },
      { label: "Regagner le bateau avant la marée", back: "IIE_sourds" },
    ] },

  IIE_pierre_sourds_chant: { act: "II", title: "La note des Sourds", place: "ecueils",
    text: [
      { first: true, text: "Le bronze touche la roche, et pendant un instant tu n'entends plus rien du tout : la note des Sourds et celle du diapason se sont rejointes, et le silence qu'elles font ensemble est plus fort que le bruit. Puis le monde revient. Le diapason est lourd, plein, tiède comme une main." },
      { again: true, text: "La note du récif dans le bronze, le silence d'un instant, et la fourche qui se remplit." },
      { with: "salome", once: true, text: "Depuis le bateau, Salomé te regarde, la main sur l'oreille. « Les vieux disaient que les plongeurs des Sourds devenaient sourds, crie-t-elle. Maïwenn disait que c'était parce qu'ils avaient entendu quelque chose qu'ils ne voulaient pas répéter. »" },
    ],
    choices: [{ back: "IIE_pierre_sourds" }] },

  IIE_plongee: { act: "II", title: "Neuf brasses", place: "ecueils",
    text: [
      { first: true, text: "Tu te déshabilles sur le pont, dans le vent froid. Une pierre de plongée, percée, au bout d'une ligne, pour descendre vite ; une corde à la taille, pour remonter. Tu remplis tes poumons trois fois, à fond, comme on t'a montré." },
      { first: true, with: "salome", text: "C'est Salomé qui tient ta corde. Elle l'a prise sans qu'on lui demande, l'a passée autour de sa taille, puis sur le taquet, puis dans sa main. « Trois coups, je te remonte. Deux coups, je te donne du mou. » Sa voix est parfaitement calme. Sa main, sur la corde, est blanche aux jointures." },
      { first: true, without: "salome", text: "Le patron de *La Bavarde* tient ta corde, d'une main, en mâchant une chique. Tu préférerais quelqu'un d'autre." },
      { again: true, text: "La pierre percée, la corde à la taille, trois grandes respirations. L'eau froide." },
      { again: true, with: "salome", text: "Salomé tient la corde. Ses yeux restent sur elle." },
    ],
    choices: [
      { label: "Descendre le long de la pierre", test: { dom: "nature", diff: 0, label: "Descendre à neuf brasses", help: [{ if: { item: "corde" }, v: 10 }, { with: "salome", v: 10 }, { if: { seen: "IIE_epave_pont" }, v: 15 }] },
        win: { to: "IIE_epave_pont" }, lose: { fx: { pv: -3 }, to: "IIE_remontee" } },
      { label: "Remettre ta chemise et renoncer pour aujourd'hui", back: "IIE_sourds" },
    ] },

  IIE_epave_pont: { act: "II", title: "Le pont de La Pimpante", place: "ecueils", backName: "le pont de l'épave",
    text: [
      { first: true, text: "Le froid t'enserre le crâne. Puis la coque arrive, d'un coup, sous tes pieds : un pont incliné, couvert d'une mousse verte où tes doigts s'enfoncent. Tout est vert, gris, très lent. Des poissons te frôlent sans peur. Au-dessus, la surface est un plafond d'argent qui bouge." },
      { first: true, text: "Devant toi, le gaillard d'avant, sa porte arrachée. Au milieu, l'écoutille de la cale, noire. À l'arrière, la porte de la chambre du capitaine, entrouverte, et un poisson plat posé sur le seuil comme un paillasson." },
      { again: true, text: "Le pont vert de *La Pimpante*, incliné, silencieux. Le gaillard, l'écoutille, la chambre du capitaine." },
      "Contre le pied du mât, la vase a recouvert à moitié {{pie#iie_astrolabe|une roue de cuivre verdie, une poulie ou un débris de barre|un astrolabe de bronze, d'un seul bloc, gradué à l'argent, et les graduations brillent encore sous la vase}}.",
      { if: ECHO_OK, text: "Sous l'eau, le pont {{echo#iie_e_pont|reste parfaitement silencieux, à part le crissement du sable|rend un ordre crié il y a des années, par un capitaine furieux : « Laissez le sel, sauvez le coffret ! Le coffret d'abord, la Banque le veut ! »}}." },
    ],
    choices: [
      { label: "Dégager l'astrolabe de la vase", hide: { any: [{ not: { voile: "iie_astrolabe" } }, { has: "tresor:iie_astrolabe" }] }, fx: { item: "iie_tr_astrolabe", clock: { tresors: 1 }, flag: "tresor:iie_astrolabe", ep: ["perso", 300] }, to: "IIE_epave_pont" },
      { label: "Le gaillard d'avant", to: "IIE_epave_coffret" },
      { label: "La chambre du capitaine", to: "IIE_epave_cabine" },
      { label: "Descendre par l'écoutille dans la cale", to: "IIE_epave_cale" },
      { label: "Tirer trois coups sur la corde, et remonter", to: "IIE_remontee" },
    ] },
});

Object.assign(P, {
  IIE_epave_coffret: { act: "II", title: "Le gaillard d'avant", place: "ecueils", backName: "le gaillard",
    text: [
      { first: true, text: "Le gaillard est un réduit sombre où la lumière entre en biais par la porte arrachée. Des hamacs pourris pendent en lambeaux comme des algues. Au fond, sous une couchette, une niche de planches clouées a été ouverte à la pince : les clous sont tordus vers l'extérieur, et le bois est encore clair aux arrachements." },
      { again: true, text: "Le gaillard, ses hamacs en lambeaux, la niche ouverte sous la couchette." },
      "Dans la niche, le fond garde {{pie#iie_niche|une empreinte carrée dans la vase, là où quelque chose a reposé|l'empreinte d'un coffret cerclé de fer, et un reste de cire rouge frappé du besant des Marrel, et, à côté, une seconde cire, plus petite, frappée d'un L et d'un B entrelacés}}.",
      "Une corde de chanvre sort de la niche, file le long de la couchette, et s'enfonce plus loin dans le noir du gaillard, sous un enchevêtrement de planches tombées. L'autre bout flotte, dressé vers la porte, comme une herbe. Il s'arrête net {{pie#iie_corde|dans un plumet de fibres effilochées, mangées par l'eau et le corail|à hauteur d'homme, toutes les fibres tranchées à la même longueur, d'un seul coup de lame, comme on coupe une amarre}}.",
      { if: { has: "metier:mains" }, text: "Tu prends le bout dans tes doigts, par habitude, comme tu prendrais une couture ou une serrure." },
    ],
    choices: [
      { label: "Examiner le bout de la corde contre la lumière de la porte", hide: { any: [{ voile: "iie_corde" }, { has: "iie:corde" }] }, test: { dom: "savoir", diff: 0, label: "Lire une corde rompue", help: [{ if: { has: "metier:mains" }, v: 20 }, { if: { has: "iim:corde_vue" }, v: 20 }] },
        win: { fx: { flag: ["iie:corde", "salome:maiwenn"], ep: ["seance", 600] }, to: "IIE_epave_corde" }, lose: { to: "IIE_epave_coffret" } },
      { label: "Couper le bout de corde et l'emporter", hide: { any: [{ not: { any: [{ voile: "iie_corde" }, { has: "iie:corde" }] } }, { item: "iie_bout_corde" }] }, fx: { item: "iie_bout_corde", flag: ["iie:corde", "salome:maiwenn"] }, to: "IIE_epave_corde" },
      { label: "Suivre la corde dans le noir, sous les planches", to: "IIE_epave_maiwenn" },
      { label: "Ressortir sur le pont", back: "IIE_epave_pont" },
    ] },

  IIE_epave_corde: { act: "II", title: "Le bout coupé", place: "ecueils",
    text: [
      "Tu as le bout de corde dans la main. Toutes les fibres de même longueur. Le chanvre a eu trois ans pour s'effilocher, et il ne l'a pas fait : il a été coupé au-dessus de l'eau, net, et il est descendu tel quel.",
      { if: { has: "iim:corde_vue" }, text: "Tu as vu l'autre bout, à Port-Vasier, dans le chiffon de Salomé. La même coupe, la même longueur de fibres. Les deux bouts se répondent." },
      "Tes poumons commencent à brûler.",
    ],
    choices: [{ label: "Ressortir du gaillard", back: "IIE_epave_coffret" }] },

  IIE_epave_maiwenn: { act: "II", title: "Au fond du gaillard", place: "ecueils",
    fx: { flag: "iie:maiwenn_trouvee" },
    text: [
      { first: true, text: "Tu suis la corde sous les planches, à tâtons, dans un noir où tes yeux sont inutiles. Elle passe sous une poutre tombée du pont, en travers du réduit. Ta main trouve, au bout de la corde, une ceinture de cuir. La boucle de cuivre. Et, dedans, ce qui reste de quelqu'un." },
      { first: true, text: "Maïwenn était allée chercher le coffret au fond du gaillard, la corde à la taille. La poutre est tombée quand la coque a bougé. Elle a tiré trois coups. Elle avait de quoi remonter, en suivant la corde, si quelqu'un tirait. Elle a dû comprendre, à un moment, que la corde flottait libre." },
      { first: true, text: "À la ceinture, un couteau de plongée, dans sa gaine, le manche de corne gravé de deux lettres : *M* et *S*." },
      { again: true, text: "Le noir sous la poutre, la ceinture, ce qui reste de Maïwenn Brac." },
      { if: ECHO_OK, text: "Le réduit {{echo#iie_e_poutre|reste noir et muet, et ton cœur bat dans tes oreilles|rend, contre le bois de la poutre, des coups. Trois coups. Une pause. Trois coups. Une pause. Trois coups}}." },
    ],
    choices: [
      { label: "Prendre le couteau, pour Salomé", hide: { item: "iie_couteau" }, fx: { item: "iie_couteau" }, to: "IIE_remontee" },
      { label: "La laisser telle quelle, et remonter", to: "IIE_remontee" },
    ] },

  IIE_epave_cabine: { act: "II", title: "La chambre du capitaine", place: "ecueils", backName: "la chambre du capitaine",
    text: [
      { first: true, text: "La chambre du capitaine a gardé sa table, clouée au plancher, et un coffre de bord dont le couvercle s'est ouvert tout seul. Dedans, une boîte de plomb soudée, intacte. Le reste, cartes, vêtements, livres, n'est plus qu'une bouillie grise." },
      { again: true, text: "La chambre du capitaine, la table clouée, le coffre ouvert." },
      "Le lambris derrière la couchette {{pie#iie_lambris|est gonflé d'eau, noir, sans intérêt|sonne creux à un endroit, et le panneau du milieu a des clous de laiton neufs, plus brillants que les autres : un double fond}}.",
    ],
    choices: [
      { label: "Forcer le panneau du lambris", hide: { any: [{ not: { voile: "iie_lambris" } }, { has: "tresor:iie_perles" }] }, fx: { item: "iie_tr_perles", clock: { tresors: 1 }, flag: "tresor:iie_perles", ep: ["perso", 400] }, to: "IIE_epave_perles" },
      { label: "Prendre la boîte de plomb sous le bras, et tirer sur la corde", hide: { item: "iie_papiers" }, fx: { item: "iie_papiers" }, to: "IIE_remontee" },
      { label: "Ressortir sur le pont", back: "IIE_epave_pont" },
    ] },

  IIE_epave_perles: { act: "II", title: "Le double fond", place: "ecueils",
    text: [
      "Le panneau cède sous la lame de ton couteau. Derrière, dans un creux grand comme deux mains, une bourse de cuir huilé, dure comme du bois, sèche dedans. Tu la sens rouler sous tes doigts : des grains ronds, durs, une quarantaine.",
      "Le capitaine de *La Pimpante* gardait quelque chose pour lui, à côté du coffret de la Banque. Il n'a pas eu le temps de le remonter non plus.",
    ],
    choices: [{ label: "Ressortir de la chambre", back: "IIE_epave_cabine" }] },

  IIE_epave_cale: { act: "II", title: "La cale", place: "ecueils", backName: "la cale",
    text: [
      { first: true, text: "La cale est un ventre noir où la lumière tombe par l'écoutille en une seule colonne verte. Des barriques arrimées, intactes pour la plupart, bombées par la pression : de l'huile, à l'odeur qui suinte des douelles. Des sacs de sel crevés depuis longtemps." },
      { first: true, text: "Dans l'ombre, contre les barriques, deux formes debout. Deux armures couvertes de moules, rouillées, étrangères à un navire de commerce. Elles tournent la tête vers la colonne de lumière, vers toi, d'un même mouvement." },
      { again: true, before: "iie:cale", text: "La cale, ses barriques, et les deux gardiens noyés qui t'attendent dans l'ombre." },
      { again: true, after: "iie:cale", text: "La cale, ses barriques d'huile, et les débris des deux armures dans la vase." },
      { if: ECHO_OK, text: "La cale {{echo#iie_e_cale|résonne sourdement de la houle contre la coque|rend des cris d'hommes, nombreux, et un fracas de bois qui cède : « Elle touche ! Elle touche les Sourds ! » Puis une voix, plus proche : « Les armures… les armures marchent… »}}." },
    ],
    choices: [
      { label: "Te battre au milieu des barriques", hide: { has: "iie:cale" }, fight: { title: "La cale de La Pimpante", enemies: [{ id: "gardien_noye", n: 2 }], terrain: "nature", spare: true,
        win: { fx: { flag: "iie:cale", ep: ["seance", 1200] }, to: "IIE_epave_noyes" }, lose: { fx: { pv: -4 }, to: "IIE_remontee" },
        flee: { label: "Remonter par l'écoutille", dom: "nature", diff: 0, to: "IIE_remontee" }, calm: { to: "IIE_epave_noyes" } } },
      { label: "Frapper le diapason contre une barrique, et laisser la note les arrêter", hide: { has: "iie:cale" }, if: ECHO_OK, why: "Il te faudrait une note qui parle à ces vieilles choses.", fx: { flag: ["iie:cale", "iie:cale_note"], ep: ["seance", 800] }, to: "IIE_epave_noyes" },
      { label: "Trancher l'arrimage d'une barrique et la laisser monter, pendant qu'elles s'avancent", hide: { any: [{ has: "iie:cale" }, { has: "iie:huile" }] }, test: { dom: "discretion", diff: -10, label: "Couper et filer sous leur nez", help: [{ with: "lison", v: 10 }] },
        win: { fx: { flag: "iie:huile", ep: ["perso", 500] }, to: "IIE_remontee" }, lose: { fx: { pv: -5 }, to: "IIE_remontee" } },
      { label: "Libérer deux barriques d'huile, et les laisser monter", hide: { any: [{ not: { has: "iie:cale" } }, { has: "iie:huile" }] }, fx: { flag: "iie:huile", ep: ["perso", 300] }, to: "IIE_remontee" },
      { label: "Ressortir sur le pont", back: "IIE_epave_pont" },
    ] },

  IIE_epave_noyes: { act: "II", title: "Les gardiens de l'épave", place: "ecueils",
    text: [
      { outcome: "win", text: "La dernière armure s'ouvre sous tes coups, sans un son, et se répand dans la vase en pièces de rouille. Il n'y a rien dedans, que de l'eau et des coquilles." },
      { outcome: "calm", text: "Les armures s'arrêtent, l'une après l'autre, et restent debout, tête penchée, dans la colonne de lumière." },
      { after: "iie:cale_note", once: true, text: "La note du bronze court dans la coque, dans les barriques, dans l'eau. Les deux armures s'immobilisent au milieu d'un pas, puis s'agenouillent lentement dans la vase, tête basse, face à l'écoutille, comme on salue." },
      "Sur les plastrons, sous les moules, le même croissant gravé. Des gardiens de l'Ouïe, venus ici, de leur propre pas, garder un navire qui avait jeté l'ancre trop près de chez eux.",
    ],
    choices: [{ label: "Regarder les barriques", back: "IIE_epave_cale" }] },

  IIE_remontee: { act: "II", title: "La remontée", place: "ecueils",
    text: [
      { outcome: "lose", text: "Quelque chose a mal tourné, en bas. Tu as le goût du sang dans la bouche, les tympans qui sifflent, et tu tires trois coups trop tôt, trop fort." },
      "Trois coups sur la corde. Un temps, qui dure. Puis la corde se tend, et tu montes, vite, la tête vers le plafond d'argent qui grandit, les poumons en feu, des étoiles noires dans les yeux. L'air. L'air entre en toi comme un coup de poing.",
      { with: "salome", text: "Salomé te hisse à bord à bras-le-corps, te pose sur le pont comme un sac, et se laisse tomber assise à côté de toi, la corde encore enroulée au poignet. Elle tremble. « Tu as mis le temps », dit-elle. Elle garde la corde serrée dans son poing." },
      { with: "salome", after: "iie:maiwenn_trouvee", once: true, text: "Elle regarde ton visage, et elle sait que tu as trouvé quelque chose au fond. Elle garde sa question pour elle." },
      { if: { has: "iie:huile" }, once: true, text: "Deux barriques d'huile crèvent la surface à côté du bateau, roulent sur la houle, et cognent contre la coque comme des poings qui demandent à entrer." },
      { if: { item: "iie_papiers" }, once: true, text: "La boîte de plomb du capitaine pèse lourd dans ta main gauche." },
    ],
    choices: [
      { label: "Ouvrir la boîte de plomb sur le pont", hide: { any: [{ not: { item: "iie_papiers" } }, { seen: "IIE_papiers" }] }, to: "IIE_papiers" },
      { label: "Reprendre ton souffle", back: "IIE_sourds" },
    ] },

  IIE_papiers: { act: "II", title: "Les papiers de La Pimpante", place: "ecueils",
    text: [
      "Tu ouvres la boîte au couteau. Dedans, au sec, le livre de bord de *La Pimpante*, la liste d'équipage, et une lettre de la Banque Marrel au capitaine, cachetée de noir.",
      "*Capitaine, vous chargerez à Sorgues le coffret remis par notre correspondant, et le tiendrez sous votre garde personnelle jusqu'à Salvèze. {{loupe#iie_lettre_banque|Le contenu ne vous regarde pas|Il contient des papiers du vieux palais, de la main de la reine, que personne à Salvèze ne doit lire. Si le navire se perd, vous le jetterez à la mer avant tout le reste}}. — Pour la Banque, C. M.*",
      "À la dernière page du livre de bord, une autre main, plus récente, a ajouté en travers : *{{loupe#iie_assurance|Perdue corps et biens sur les Sourds. Déclarée à la Chambre|Perdue corps et biens. Déclarée à la Chambre des Comptoirs, assurance touchée. On plongera quand on saura où}}.*",
      "Dix-neuf noms sur la liste d'équipage. Les dix-neuf ont une croix.",
    ],
    choices: [{ back: "IIE_sourds" }] },
});

// ==================================================================== the truth, and Salomé's dive
Object.assign(P, {
  IIE_verite: { act: "II", title: "La corde", place: "ecueils", with: "salome",
    fx: { flag: "iie:salome_sait", ep: ["histoire", 1500] },
    text: [
      { if: { voile: "iie_coupe" }, text: "Tu n'as rien à lui dire. Elle a entendu la voix douce dire *Coupe*, et la lame dans le chanvre. Tu vas te mettre à côté d'elle, et c'est tout ce que tu fais.",
        else: "Tu la trouves à l'avant, assise sur le guindeau. Tu t'assieds en face d'elle et tu lui dis ce que tu sais, dans l'ordre, sans rien arranger." },
      { if: { has: "iie:corde" }, text: "Le bout de corde du gaillard, coupé net, toutes les fibres à la même longueur." },
      { if: { has: "iie:jobic_aveu" }, text: "Jobic, sur l'île Plate, qui tenait la corde. Les trois coups. *Coupe. On a le coffret.* Le couteau pris dans la main du garçon." },
      { if: { has: "iie:maiwenn_trouvee" }, text: "Et la poutre, au fond du gaillard, et la ceinture. Tu le dis aussi. Elle a le droit de le savoir." },
      "Salomé écoute jusqu'au bout. Ses yeux restent secs. Elle prend sa main droite dans sa main gauche et la serre, très fort, comme pour l'empêcher de faire quelque chose.",
      { after: "iie:promesse", text: "« Tu avais dit que tu trouverais, dit-elle. Je ne t'avais pas cru{e}. »" },
      "« Trois ans, dit-elle. Je lui ai serré la main sur le quai. Il m'a payé les cent ducats de la plongée, en entier, et il a ajouté vingt ducats pour le bonnet. Je les ai pris. J'ai payé le calfat avec. » Elle rit, d'un rire qui fait mal à entendre. « *La Bavarde* est calfatée avec l'argent de Maïwenn. »",
      "Elle se lève. Elle regarde le mât noir dans l'écume, à vingt brasses. « Elle est encore en bas. »",
    ],
    choices: [
      { label: "« Je tiendrai ta corde, si tu descends. »", fx: { conf: { salome: 10 } }, to: "IIE_salome_plonge" },
      { label: "« Laisse-la où elle est. Elle est avec la mer. »", fx: { conf: { salome: -3 } }, to: "IIE_salome_reste" },
      { label: "Te taire, et la laisser choisir", hide: { conf: "salome", min: 40 }, to: "IIE_salome_reste" },
      { label: "Te taire, et la laisser choisir", hide: { not: { conf: "salome", min: 40 } }, fx: { conf: { salome: 5 } }, to: "IIE_salome_plonge" },
    ] },

  IIE_salome_plonge: { act: "II", title: "Salomé plonge", place: "ecueils", with: "salome",
    fx: { flag: "salome:plonge", ep: ["seance", 1500] },
    text: [
      "Salomé se déshabille sur le pont, vite, sans pudeur, comme on se déshabille au travail. Elle a le corps d'une plongeuse qui n'a pas plongé depuis trois ans : des épaules larges, un ventre qui s'est arrondi, une cicatrice blanche en travers des côtes. Elle choisit une pierre de plongée dans la caisse, la soupèse, en prend une autre.",
      "Elle te donne le bout de sa corde. Elle te regarde la passer autour de ta taille, puis sur le taquet, puis dans ta main, et elle vérifie chaque tour avec ses doigts. « Trois coups, tu me remontes. Deux coups, du mou. » Elle hésite. « Si je ne tire pas, tu me remontes quand même. Tu comptes jusqu'à deux cents, et tu me remontes, même si je me débats. »",
      { if: { item: "iie_couteau" }, text: "Tu lui tends le couteau au manche de corne. *M* et *S*. Elle le regarde dans ta paume sans le prendre. « Garde-le. Je le prendrai en remontant. »" },
      "Elle respire trois fois, à fond. Puis elle prend la pierre contre son ventre et elle se laisse tomber dans la mer, les pieds en premier, sans éclaboussure.",
    ],
    choices: [{ label: "Tenir la corde", big: true, to: "IIE_salome_fond" }] },

  IIE_salome_fond: { act: "II", title: "La corde dans ta main", place: "ecueils", with: "salome", urgent: 25,
    text: [
      "La corde file entre tes doigts, puis s'arrête. Neuf brasses. Sous l'eau claire, tu vois une forme pâle se poser sur le pont incliné de *La Pimpante*, puis glisser vers le gaillard, et disparaître dans le noir.",
      "Tu comptes. Trente. Soixante. La corde reste immobile. Quatre-vingt-dix. Un cormoran se pose sur le mât noir. Cent vingt. La corde frémit, se tend, se détend. Cent cinquante.",
      "Trois coups.",
    ],
    choices: [
      { label: "Tirer, à pleins bras", big: true, timeout: true, to: "IIE_salome_remonte" },
      { label: "Attendre une seconde, pour être sûr{e} du signal", fx: { flag: "iie:attendu" }, to: "IIE_salome_remonte" },
    ] },

  IIE_salome_remonte: { act: "II", title: "Ce que la mer rend", place: "ecueils", with: "salome",
    fx: { conf: { salome: 10 } },
    text: [
      { if: { has: "iie:attendu" }, text: "Tu attends. Un battement de cœur, un seul. Et tu comprends, dans ce battement, ce que Jobic a tenu dans ses mains, et ce qu'on lui a pris. Tu tires.",
        else: "Tu tires avant d'avoir fini de compter le troisième coup." },
      "Salomé remonte vite, la tête renversée, les yeux ouverts. Elle crève la surface et ne prend pas son souffle tout de suite. Tu la hisses à bord par les aisselles. Elle a noué sa chemise de plongée en sac, et elle serre ce sac contre sa poitrine avec ses deux bras.",
      "Elle reste longtemps assise sur le pont, nue, ruisselante, le sac de toile contre elle, et elle tremble, de froid ou d'autre chose. Puis elle dit, d'une voix tout à fait ordinaire : « Elle avait mis ses boucles d'oreilles. Pour plonger. Elle n'en mettait jamais. »",
      { if: { item: "iie_couteau" }, text: "Tu lui donnes le couteau au manche de corne. Elle le prend, cette fois, et le passe à sa ceinture." },
      "« Je veux l'enterrer là-haut, dit-elle en regardant le phare. Avec les gardiens. Elle aimait ce phare. Elle disait qu'il écoutait. »",
    ],
    choices: [{ label: "Ramener *La Bavarde* au bassin des Gardiens", big: true, to: "IIE_adieu" }] },

  IIE_adieu: { act: "II", title: "Dans l'enclos des gardiens", place: "ecueils", with: "salome", takes: "evening",
    fx: { flag: "iie:maiwenn_enterree", fac: { hautes: 5 }, ep: ["seance", 1000] },
    text: [
      "On creuse dans l'enclos des gardiens, entre les tombes d'Elouan et de Ronan et le mur de pierres sèches, là où la terre est assez profonde. La pelle sonne sur la roche à trois pieds. C'est assez.",
      { if: { seen: "IIE_goulven" }, text: "Loïg est descendu de son phare avec un galet blanc dans chaque main. Il les pose au bord de la fosse. Puis il retourne en chercher un troisième, pour faire le compte." },
      "Salomé dépose le sac de toile au fond, elle-même, à genoux. En guise de prière, elle dit, très bas, une suite de mots qui ressemble à une liste : des noms de passes, de roches, de profondeurs. Les Sourds, neuf brasses. Le bassin, six. La Gorge à marée basse. Les noms de la carte de Maïwenn, dans l'ordre où Maïwenn les avait écrits.",
      { with: "gildas", text: "Frère Gildas attend qu'elle ait fini. Puis il dit l'office des morts, en latin, à mi-voix, sans qu'on le lui demande, et Salomé le laisse faire." },
      { with: "lison", text: "Lison pose un brin de jonc tressé sur la terre retournée, à la façon des Joncs-Bas, et recule." },
      { with: "tibere", text: "Tibère a tenu la pelle tout du long. À la fin, il ôte son chapeau, et reste tête nue dans le vent jusqu'à ce que tout le monde soit parti." },
      { if: ECHO_OK, text: "Quand tous sont redescendus, l'enclos {{echo#iie_e_adieu|se tait, et le vent couche l'herbe salée|rend une voix de femme, gaie, essoufflée, très loin, une voix qui n'a pas trois ans : « Salo ! Viens voir, il écoute vraiment, ce phare ! »}}." },
    ],
    choices: [{ label: "Redescendre vers le bassin", back: "IIE_arrivee" }] },

  IIE_salome_reste: { act: "II", title: "Salomé ne plonge pas", place: "ecueils", with: "salome",
    fx: { flag: "iie:salome_reste" },
    text: [
      "Salomé reste debout longtemps, les mains sur le plat-bord. Le vent lui rabat les cheveux dans les yeux. Elle les y laisse.",
      "« Non, dit-elle enfin. Si je descends, je remonte avec elle dans les bras, et après il faudra bien que je la pose quelque part. Là-bas, elle est avec *La Pimpante*, et avec la note des Sourds. » Elle passe le dos de sa main sur sa bouche. « Je descendrai le jour où il sera mort. Je viendrai lui dire. »",
      "Elle détache de son cou un cordon de cuir où pend un anneau d'argent tout simple, le regarde, et le jette à la mer, à l'aplomb du mât. L'anneau descend en tournant, brille une fois, et disparaît.",
      "Puis elle reprend la barre, et elle te demande où tu veux aller, d'une voix de capitaine.",
    ],
    choices: [{ label: "Rentrer au bassin des Gardiens", back: "IIE_arrivee" }] },
});

// ==================================================================== Jobic, the raid, Le Fidèle
Object.assign(P, {
  IIE_jobic: { act: "II", title: "Le garçon roux", place: "ecueils",
    fx: { meet: "iie_jobic", questSeen: "IIE_jobic" },
    text: [
      "Tu t'accroupis près du feu, à côté du garçon. Vingt ans, peut-être, des taches de son jusque dans le cou, des yeux rouges de vieux buveur dans un visage d'enfant. Il écaille ses maquereaux de plus en plus vite.",
      "« Je m'appelle Jobic, dit-il sans lever les yeux, parce que tu as demandé. {{oreille#iie_jobic_peur|J'ai toujours été d'ici. Écumeur, fils d'Écumeur|J'étais mousse sur le Fidèle, et chaque voile grise qui passe au large, je crois que c'est lui qui vient finir le travail}}. »",
      "Il s'entaille le pouce avec son couteau, regarde le sang, le suce. « {{oreille#iie_jobic_pimpante|Je ne sais rien sur la Pimpante. Rien du tout|Je sais tout sur la Pimpante. Je l'entends la nuit. Trois coups, trois coups, trois coups}}. »",
    ],
    choices: [
      { label: "« Le cotre gris est au large. Brunel est revenu. »", hide: { not: { voile: "iie_jobic_peur" } }, to: "IIE_jobic_aveu" },
      { label: "« Maïwenn Brac a écrit ton nom sur sa carte. Si je ne remonte pas, demande à Jobic. »", hide: { not: { any: [{ has: "iie:jobic_nom" }, { voile: "iie_carte_note" }] } }, to: "IIE_jobic_aveu" },
      { label: "« Trois coups. Elle a tiré trois coups. »", hide: { not: { voile: "iie_jobic_pimpante" } }, to: "IIE_jobic_aveu" },
      { label: "Lui parler doucement de Port-Vasier, de la mer, de rien, jusqu'à ce qu'il parle", test: { dom: "social", diff: -10, label: "Faire parler un garçon qui a peur", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "gildas", v: 10 }, { with: "lison", v: 5 }] },
        win: { to: "IIE_jobic_aveu" }, lose: { to: "IIE_jobic_ferme" } },
      { label: "Le laisser à ses poissons", back: "IIE_ilot_plat" },
    ] },

  IIE_jobic_ferme: { act: "II", title: "Le couteau", place: "ecueils",
    text: [
      "Jobic se lève d'un bond, son couteau à la main, et recule vers les cabanes. « Laissez-moi ! Je ne sais rien, je n'étais pas là, je ne sais rien ! » Les hommes de Ravaud tournent la tête.",
      "Il s'enfuit derrière la cabane des filets. Tu l'entends vomir.",
    ],
    choices: [{ label: "Revenir plus tard", back: "IIE_ilot_plat" }] },

  IIE_jobic_aveu: { act: "II", title: "Ce que Jobic a tenu", place: "ecueils",
    fx: { flag: ["iie:jobic_aveu", "salome:maiwenn"], ep: ["seance", 1000] },
    text: [
      { if: { has: "iie:jobic=enfui" }, text: "Dans le canot, à l'abri d'une roche, loin des feux de l'île Plate, Jobic se met à parler avant même que tu lui demandes, en claquant des dents.",
        else: "Jobic pose son couteau. Il pose aussi le maquereau. Il regarde ses mains, et il parle aux mains, tout bas, pour que les hommes du feu n'entendent pas." },
      "« Elle a plongé au gaillard. Elle a attaché le coffret à la deuxième ligne. On l'a remonté. M. Brunel l'a ouvert sur le pont, il a regardé dedans, il l'a refermé. Et puis la corde a tiré. Trois coups. Elle voulait remonter. »",
      "« Il a regardé la corde. Il a regardé le coffret. Il a dit : *Coupe. On a le coffret.* » La voix de Jobic se casse sur le mot. « J'ai pas pu. Je tenais. Il a pris mon couteau, dans ma main, comme ça, il a écarté mes doigts un par un. Il a coupé d'un coup. Au ras du plat-bord. Et il m'a rendu le couteau. »",
      "« Après, il m'a donné dix ducats. Il a dit que si je parlais, la prochaine corde, ce serait pour mon cou. » Jobic essuie son nez sur sa manche. « Elle savait qu'il voulait le coffret pour lui. Elle l'avait dit, sur le pont, en riant. C'est pour ça. »",
    ],
    choices: [
      { label: "« Tu viens avec moi. Tu le diras à Salomé, un jour, et à un juge. »", hide: { not: { has: "iie:jobic=enfui" } }, fx: { quest: "IIE_jobic", set: { "iie:jobic": "temoin" }, flag: "iie:jobic", fac: { hautes: 3 } }, back: "IIE_arrivee" },
      { label: "Le déposer sur la côte, loin de tout, avec de quoi manger", hide: { not: { has: "iie:jobic=enfui" } }, fx: { quest: "IIE_jobic", flag: "iie:jobic", food: -1 }, back: "IIE_arrivee" },
      { label: "Racheter sa dette de dés à Ravaud", hide: { has: "iie:jobic=enfui" }, to: "IIE_jobic_dette" },
      { label: "Le laisser au camp, avec ce qu'il t'a dit", hide: { has: "iie:jobic=enfui" }, fx: { quest: "IIE_jobic", set: { "iie:jobic": "reste" }, flag: "iie:jobic" }, back: "IIE_ilot_plat" },
    ] },

  IIE_jobic_dette: { act: "II", title: "Deux ducats", place: "ecueils",
    text: [
      "Ravaud tient Jobic par une dette de dés : deux ducats, plus les intérêts qu'il invente au fil des semaines. Il a la reconnaissance de dette sur lui, pliée dans son pourpoint vert, et il la sort avec un plaisir visible. *Je dois à Ravaud {{loupe#iie_dette|deux ducats de jeu, payables à vue|deux ducats de jeu, et je reste à son service tant que le cotre gris paiera pour moi}}. — Jobic, sa marque.*",
      { if: { has: "iie:ravaud=allie" }, text: "Ravaud la déchire devant toi, sans même attendre ton argent. « Je t'ai dit qu'il me gâchait le moral. Emmène-le. »" },
      { if: { has: "iie:ravaud=vaincu" }, text: "Ravaud te la tend, et regarde ailleurs." },
    ],
    choices: [
      { label: "Prendre Jobic avec toi", hide: { not: { any: [{ has: "iie:ravaud=allie" }, { has: "iie:ravaud=vaincu" }] } }, fx: { quest: "IIE_jobic", set: { "iie:jobic": "temoin" }, flag: "iie:jobic", ep: ["perso", 400] }, to: "IIE_jobic_libre" },
      { label: "Payer les deux ducats", hide: { any: [{ has: "iie:ravaud=allie" }, { has: "iie:ravaud=vaincu" }] }, fx: { gold: -40, quest: "IIE_jobic", set: { "iie:jobic": "temoin" }, flag: "iie:jobic", ep: ["perso", 400] }, to: "IIE_jobic_libre" },
      { label: "« Il te doit deux ducats. Toi, tu dois au cotre gris ta paie de la semaine. Je n'aurai qu'un mot à dire. »", hide: { any: [{ not: { voile: "iie_ravaud_banque" } }, { has: "iie:ravaud=allie" }, { has: "iie:ravaud=vaincu" }] }, fx: { quest: "IIE_jobic", set: { "iie:jobic": "temoin" }, flag: "iie:jobic", ep: ["perso", 500] }, to: "IIE_jobic_libre" },
      { label: "Renoncer pour l'instant", back: "IIE_ilot_plat" },
    ] },

  IIE_jobic_libre: { act: "II", title: "Le mousse à bord", place: "ecueils",
    text: [
      "Jobic monte dans le canot avec un baluchon et son couteau trop grand. « {{oreille#iie_jobic_merci|Merci, merci|Il me retrouvera, où que j'aille, mais au moins il me retrouvera ailleurs que là}}, dit-il, deux fois. Il s'assied à l'avant, recroquevillé, le dos tourné à l'île Plate qui s'éloigne.",
      { with: "salome", text: "À bord de *La Bavarde*, Salomé le reconnaît au premier regard. Elle s'arrête au milieu d'un geste. Jobic baisse la tête si bas que son menton touche sa poitrine." },
      { with: "salome", after: "iie:salome_sait", text: "Salomé s'approche. Jobic ferme les yeux. Elle lui pose la main sur la nuque, une seconde, comme on calme un chien, et retourne à la barre. Jobic pleure en silence pendant une heure, et personne ne le dérange." },
      { with: "salome", before: "iie:salome_sait", text: "« Le mousse du Fidèle, dit-elle. Qu'est-ce qu'il fait là ? » Elle te regarde, et tu vois qu'elle a compris qu'il y a quelque chose à comprendre. Elle attend que tu le lui dises." },
    ],
    choices: [{ label: "Regagner le bassin", back: "IIE_arrivee" }] },

  IIE_raid: { act: "II", title: "Les rames dans le noir", place: "ecueils", takes: "night",
    text: [
      "Un bruit d'avirons mal emmaillotés, dans le noir, du côté de l'île Plate. Puis un choc sourd contre la coque, à l'avant, et une main qui agrippe le plat-bord. Deux barques, peut-être trois. On entend quelqu'un scier la chaîne d'ancre à la lime.",
      { with: "salome", text: "Salomé est déjà debout, son coutelas à la main, pieds nus sur le pont. « La chaîne, souffle-t-elle. S'ils la coupent, la houle nous met sur les roches. »" },
    ],
    choices: [
      { label: "Repousser l'abordage", fight: { title: "L'abordage de La Bavarde", enemies: [{ id: "ecumeur", n: 3 }], terrain: "nature",
        win: { fx: { set: { "iie:ravaud": "vaincu" }, fac: { ecumeurs: -3 }, ep: ["seance", 1000] }, to: "IIE_raid_fin" }, lose: { fx: { pv: -4, gold: -20, set: { "iie:ravaud": "vaincu" } }, to: "IIE_raid_fin" },
        flee: { label: "Te jeter à la barre", dom: "nature", diff: 0, to: "IIE_raid_fin" } } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: 0, label: "Salomé fait filer La Bavarde dans le noir" },
        win: { fx: { set: { "iie:ravaud": "vaincu" }, conf: { salome: 5 }, ep: ["seance", 800] }, to: "IIE_raid_fin" }, lose: { fx: { pv: -3, set: { "iie:ravaud": "vaincu" } }, to: "IIE_raid_fin" } },
      { label: "Crier aux barques ce que le cotre gris paie à Ravaud, et ce qu'il leur reverse", hide: { not: { voile: "iie_ravaud_banque" } }, fx: { set: { "iie:ravaud": "vaincu" }, flag: "iie:raid_cri", ep: ["seance", 900] }, to: "IIE_raid_fin" },
    ] },

  IIE_raid_fin: { act: "II", title: "Le matin d'après", place: "ecueils", takes: "morning",
    text: [
      { outcome: "win", text: "Les barques repartent dans le noir, plus vite qu'elles ne sont venues, avec un homme à l'eau qu'on repêche en jurant." },
      { outcome: "lose", text: "Ils sont montés à bord, ont pris ce qui traînait sur le pont, une bourse, deux couvertures, un baril de biscuit, et sont repartis avant que tu aies repris ton souffle. La chaîne a tenu." },
      { outcome: "flee", text: "*La Bavarde* file sur sa chaîne à moitié sciée, trouve un autre mouillage dans le noir, et les barques tournent longtemps avant de renoncer." },
      { after: "iie:raid_cri", text: "Tes mots portent sur l'eau noire. Deux ducats la semaine, le cotre gris, et ce qui en revient aux rameurs : rien. Dans les barques, les rames s'arrêtent. Quelqu'un demande à Ravaud si c'est vrai. Ravaud ne répond pas assez vite. Les barques font demi-tour, et on entend, longtemps, des voix qui se disputent sur l'eau." },
      "Au matin, une barque vient de l'île Plate, seule, sans armes. Deux hommes de Ravaud demandent à parler. Ravaud a été jeté hors de sa propre cabane par ses gars, cette nuit. Ils ne veulent plus d'histoires. Ils veulent savoir si l'épave est libre.",
      { with: "salome", text: "Salomé leur répond qu'elle l'a toujours été, et leur lance une corde pour qu'ils s'amarrent le temps de boire un coup." },
    ],
    choices: [{ label: "Reprendre le jour au bassin", back: "IIE_arrivee" }] },
});

Object.assign(P, {
  IIE_fidele: { act: "II", title: "Le Fidèle", place: "ecueils",
    fx: { meet: "lothaire", flag: "iie:fidele", ep: ["seance", 800] },
    text: [
      "Le cotre gris entre dans le bassin des Gardiens à la voile, proprement, et mouille à cinquante brasses de *La Bavarde*. Sur son tableau arrière, en lettres blanches : *le Fidèle*. Douze hommes sur le pont, des arbalètes à l'épaule. Un canot descend, quatre rameurs, et à l'arrière, assis droit, un homme en manteau gris, les mains gantées de gris posées sur les genoux.",
      "Lothaire Brunel fait arrêter le canot à une portée de voix. Il te salue d'un mouvement de tête, courtois. « Je vois que vous avez trouvé la porte que je n'ai pas trouvée. Mes compliments. On m'avait dit que vous aviez de l'oreille. » Il sourit. « Vous pensez : *il ne sait pas ce que j'ai trouvé*. Je sais. Je l'entends sonner dans votre sac depuis que vous êtes sorti{e} du phare. »",
      "« Je vous en offre cinq cents ducats, dit-il. {{oreille#iie_lothaire_offre|C'est un prix honnête pour une curiosité|Je vous en offrirais cinq mille, et la Banque ne le saura jamais, parce que ce bronze me dirait ce que Corisande se dit à elle-même}}. »",
      { if: { has: "iie:sceau_lb" }, text: "Tu lui parles de la petite cire au L et au B, dans la niche du gaillard, à côté du besant des Marrel. Lothaire garde son sourire. « Les Marrel scellent, dit-il. Moi, je descelle. Madame n'a pas besoin de connaître chacun de mes cachets. »" },
      { with: "salome", text: "À côté de toi, Salomé s'est figée. Elle regarde les gants gris. Sa main droite s'est posée sur le manche de son coutelas, à plat, sans le serrer." },
      { with: "salome", after: "iie:salome_sait", text: "Lothaire tourne les yeux vers elle, une seconde, et quelque chose passe sur son visage, vite, et disparaît. « Madame Brac. Toujours sur l'eau. » Il a entendu, sous son silence à elle, ce qu'elle pense. Il le sait, et il reste assis." },
      { with: "tibere", after: "iie:feu_faux", text: "Lothaire jette un regard vers le nord, vers l'île aux Fous, où un feu a brûlé toute la nuit. « Un feu bien mal placé, sergent Gaucelm. » Tibère soutient son regard et se tait." },
      { after: "iie:cotre", text: "Tu reconnais la voile grise qui tenait la cape à l'ouest depuis ton arrivée. De là, on voyait partir chacun de tes canots." },
      { with: "tibere", after: "iie:feu_non", text: "Lothaire jette un regard vers la galerie du phare, éteinte. « Pas de feu, cette nuit, sergent Gaucelm. J'ai dû venir voir moi-même. » Tibère soutient son regard." },
      { with: "tibere", after: "iie:feu_appat", text: "Lothaire salue Tibère d'un petit signe de tête, comme on salue un employé. « Bon feu, sergent. » Tibère baisse les yeux, et il joue la honte si bien que tu en as froid dans le dos." },
    ],
    choices: [
      { label: "« Il n'est pas à vendre. »", to: "IIE_fidele_depart" },
      { label: "« Coupe. On a le coffret. »", hide: { not: { has: "salome:maiwenn" } }, fx: { flag: "iie:lothaire_defie", conf: { salome: 5 } }, to: "IIE_fidele_coupe" },
      { label: "Laisser Salomé faire ce qu'elle a envie de faire", with: "salome", hide: { not: { has: "iie:salome_sait" } }, fx: { flag: "iie:lothaire_blesse", conf: { salome: 10 }, fac: { banque: -10 } }, to: "IIE_fidele_coupe" },
    ] },

  IIE_fidele_coupe: { act: "II", title: "Les gants gris", place: "ecueils",
    text: [
      { if: { has: "iie:lothaire_defie" }, text: "Tu dis les trois mots à voix haute, sur le ton exact où le récif te les a rendus. Dans le canot, un rameur tourne la tête vers son maître. Lothaire reste assis droit. Seules ses mains gantées se serrent un peu sur ses genoux. « Vous pensez à une corde, dit-il doucement. Je ne vois pas de quoi vous parlez. » Mais il fait signe aux rameurs de reculer de dix brasses." },
      { if: { has: "iie:lothaire_blesse" }, text: "Salomé lance le coutelas d'un geste court, de bas en haut, comme on lance une ligne. La lame traverse la portée de voix et se plante dans le bordé du canot, à un pouce de la main gauche de Lothaire. Il a retiré la main à temps, presque. Le gant gris est fendu au dos, et une ligne rouge y paraît. Sur le Fidèle, douze arbalètes se lèvent." },
      { if: { has: "iie:lothaire_blesse" }, text: "Lothaire lève sa main blessée, pour qu'on ne tire pas. Il la regarde, puis il regarde Salomé. « Je l'ai mérité, je suppose, dit-il. C'est la seule que vous aurez. »" },
    ],
    choices: [{ label: "Le regarder repartir", to: "IIE_fidele_depart" }] },

  IIE_fidele_depart: { act: "II", title: "Le Fidèle repart", place: "ecueils",
    text: [
      "Lothaire fait remonter son canot. Avant de monter à bord du Fidèle, il se retourne une dernière fois. « Gardez votre bronze. Il vous apprendra des choses sur vos amis. » Il remonte son col. « Les Joncs-Bas sont construits en bois, vous savez. Et cet hiver a été très sec. »",
      "Le Fidèle lève l'ancre et sort du bassin sans hâte, cap au nord-est, vers le delta.",
      { with: "salome", text: "Salomé le regarde jusqu'à ce qu'il ne soit plus qu'une tache. « Il va aux Joncs, dit-elle. Il veut que tu le saches. »" },
      { with: "lison", text: "Lison est devenue très pâle. « Ma grand-mère », dit-elle, une seule fois." },
    ],
    choices: [{ label: "Revenir au bassin des Gardiens", back: "IIE_arrivee" }] },
});

// ==================================================================== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      iie_goulven: { name: "Loïg Ker", qui: "Le dernier gardien du phare de l'Ouïe.", aspect: { allure: "vieil homme maigre comme une gaffe", visage: "barbe en broussaille, yeux très pâles", habits: "tricot de laine rapiécé", signe: "harpon" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Le dernier gardien du phare de l'Ouïe. Quarante ans de lampe, huit hivers seul." },
      iie_jobic: { name: "Jobic", qui: "Un jeune mousse de l'île Plate.", aspect: { allure: "vingt ans, visage d'enfant", visage: "taches de son, yeux rouges de buveur", signe: "maquereaux et couteau" }, f: false, face: { age: "jeune", coif: "court", hair: "roux", marks: ["rousseur"] }, desc: "Ancien mousse du cotre de la Banque. Il boit pour dormir, et dort mal." },
      iie_ravaud: { name: "Ravaud", qui: "Écumeur chassé de Port-Vasier, maître de l'île Plate.", aspect: { allure: "cinquante ans, sabre à la ceinture", visage: "barbe grise en pointe, balafre sur l'œil gauche", habits: "pourpoint de velours vert mité", signe: "trois dents d'or" }, f: false, face: { age: "mur", coif: "court", beard: "barbe", marks: ["balafre"] }, desc: "Écumeur chassé de Port-Vasier par la Veuve Corbière. Il campe sur l'île Plate avec ceux que personne ne veut." },
      iie_klervi: { name: "Klervi", qui: "Ramasseuse d'œufs de Port-Vasier.", aspect: { allure: "femme de falaise, épaule démise", signe: "corde et paniers d'œufs bleutés", voix: "rire cassé, jurons" }, f: true, face: { age: "adulte", coif: "foulard", skin: "hale" }, desc: "Ramasseuse d'œufs de Port-Vasier. Elle descend les falaises de l'île aux Fous au bout d'une corde depuis vingt ans." },
    },
    items: {
      iie_tr_lampe: { name: "La lampe des gardiens", kind: "tresor", price: 60, desc: "Une lampe de voyage en argent ciselé de croissants, noircie par l'huile. Les gardiens de l'Ouïe se la passaient de père en fils." },
      iie_tr_bague: { name: "La bague à l'ancre", kind: "tresor", price: 50, desc: "Une bague d'homme en or massif, gravée d'une ancre. À l'intérieur : *À Y., de sa Gwladys, pour qu'il revienne.*" },
      iie_tr_ambre: { name: "Un éclat d'ambre chantant", kind: "tresor", price: 80, desc: "Gros comme un œuf, d'un jaune de miel. Il rend une note sèche quand on le cogne de l'ongle, et la note dure trop longtemps." },
      iie_tr_astrolabe: { name: "L'astrolabe de La Pimpante", kind: "tresor", price: 70, bonus: { nature: 5 }, desc: "Un astrolabe de marine en bronze, gradué à l'argent. Il marche encore, pour qui sait viser le soleil." },
      iie_tr_perles: { name: "Les perles du capitaine", kind: "tresor", price: 120, desc: "Une bourse de cuir huilé, une quarantaine de perles grises et rondes. Le capitaine de *La Pimpante* faisait ses petites affaires à côté de celles de la Banque." },
      iie_faux_lingot: { name: "Le lingot de Ravaud", kind: "tresor", price: 2, desc: "Un lingot frappé du besant des Marrel. La dorure s'écaille déjà sur l'arête." },
      iie_bout_corde: { name: "Le bout de corde du gaillard", kind: "document", desc: "Un bout de chanvre de plongée, coupé net, toutes les fibres de même longueur. Remonté de l'épave de *La Pimpante*." },
      iie_couteau: { name: "Le couteau de Maïwenn", kind: "outil", desc: "Un couteau de plongée, manche de corne gravé de deux lettres : M et S." },
      iie_papiers: { name: "La boîte de plomb de La Pimpante", kind: "document", desc: "Le livre de bord, la liste d'équipage et une lettre de la Banque Marrel au capitaine, au sec dans une boîte soudée." },
      iie_journal: { name: "Le registre du phare de l'Ouïe", kind: "document", form: "registre", hand: "hative",
        text: "*An de grâce, jour de Saint-Michel. Vent de noroît. Le bateau de l'huile est en vue. Elouan et Ronan descendent l'attendre au bassin.*\n\n*Même jour, au soir. Le bateau de l'huile est sur les Fous. Elouan et Ronan partent au canot. {{loupe#iie_journal_un|Je reste à la lampe, comme il faut|Je reste à la lampe parce que j'ai peur de l'eau depuis l'enfance, et Ronan le sait}}.*\n\n*Le lendemain. Rien.*\n\n*Cinq ans plus tard, en mai. Le Fidèle, cotre de Port-Vasier, sur les Sourds. Un homme aux gants gris est monté à l'oreille sans demander. {{loupe#iie_journal_deux|Il est reparti les mains vides|Il est reparti les mains vides, et le soir son cotre est rentré au bassin sans la plongeuse qu'il avait le matin}}.*",
        desc: "Le registre des gardiens de l'Ouïe. Les dernières pages sont de la main de Loïg Ker." },
    },
    enemies: {
      iie_ravaud: { name: "Ravaud", look: "humain", pv: 40, att: 50, def: 20, dmg: 7, desc: "Un pourpoint de velours vert sur des épaules d'Écumeur, un sabre d'abordage, trois dents d'or." },
    },
    clues: {
      iie_c_gardiens: { rev: "T", text: "Les gardiens du phare de l'Ouïe étaient des Taiseurs, de père en fils : ils gardaient la lampe, et une porte, et taisaient la reine." },
      iie_c_ambre: { rev: "T", text: "Au fond de la Gorge, sous le phare, une veine d'ambre jaune chante quand on la frappe : l'ambre chantant des instruments des Taiseurs." },
      iie_c_noms: { rev: "R", text: "Le feuillet des Écueils dit, de la main du chancelier : « La reine montre deux hommes. Celui qui tenait ses bras portait l'anneau des Marrel. Celui qui tenait la pince, l'anneau des Fourcaud. »" },
      iie_c_sorne: { rev: "R", text: "Ceux qui ont caché le feuillet des Écueils se sont dit, au sommet de l'Ouïe : « D'ici, à la Grande Basse, on voit les toits de Sorne au nord-est. Le dernier feuillet est là-bas, avec elle. »" },
      iie_c_pimpante: { rev: "B", text: "La Banque Marrel a déclaré *La Pimpante* perdue corps et biens sur les Sourds, et touché l'assurance de la Chambre des Comptoirs, quatre ans avant d'y envoyer plonger." },
    },
    veils: {
      iie_coupe: { fx: { flag: "salome:maiwenn", ep: ["seance", 1500] } },
      iie_corde: { fx: { flag: ["iie:corde", "salome:maiwenn"], ep: ["seance", 600] } },
      iie_feuillet: { fx: { clue: "iie_c_noms", ep: ["seance", 800] } },
      iie_e_sorne: { fx: { clue: "iie_c_sorne", ep: ["perso", 500] } },
      iie_assurance: { fx: { clue: "iie_c_pimpante", ep: ["perso", 400] } },
      iie_ambre: { fx: { clue: "iie_c_ambre", ep: ["perso", 300] } },
      iie_insc: { fx: { flag: "iie:tour", ep: ["perso", 300] } },
      iie_ordre: { fx: { flag: "iie:tour", ep: ["perso", 300] } },
      iie_grille: { fx: { flag: "iie:tour", ep: ["perso", 300] } },
      iie_tibere_cotre: { fx: { flag: "tibere:espion", ep: ["perso", 300] } },
      iie_e_lothaire: { fx: { ep: ["perso", 300] } },
      iie_e_vasse: { fx: { ep: ["perso", 300] } },
      iie_e_taiseuse: { fx: { ep: ["perso", 300] } },
      iie_e_maiwenn: { fx: { ep: ["perso", 300] } },
      iie_e_jobic: { fx: { flag: "iie:jobic_nom" } },
      iie_e_escalier: { fx: { flag: "iie:jobic_nom" } },
      iie_e_plate: { fx: { ep: ["perso", 200] } },
      iie_e_ecumeurs: { fx: { ep: ["perso", 200] } },
      iie_lettre_banque: { fx: { flag: "iie:coffret_reine", ep: ["perso", 400] } },
      iie_niche: { fx: { flag: "iie:sceau_lb", ep: ["perso", 300] } },
      iie_lothaire_offre: { fx: { flag: "iie:lothaire_veut", ep: ["perso", 300] } },
      iie_ravaud_banque: { fx: { ep: ["perso", 300] } },
      iie_jobic_peur: { fx: { ep: ["perso", 200] } },
      iie_dette: { fx: { ep: ["perso", 200] } },
      iie_m_nuit: { fx: { ep: ["perso", 200] } },
      iie_m_pont: { fx: { ep: ["perso", 200] } },
      iie_sourds: { fx: { conf: { salome: 2 } } },
      iie_corde_s: { fx: { flag: "iie:salome_doute" } },
      iie_carte_note: { fx: { flag: "iie:jobic_nom", ep: ["perso", 300] } },
      iie_carte_pierres: { fx: { ep: ["perso", 150] } },
      iie_epitaphe: { fx: { clue: "iie_c_gardiens", ep: ["perso", 200] } },
      iie_e_serment: { fx: { ep: ["perso", 300] } },
      iie_e_ronan: { fx: { ep: ["perso", 300] } },
      iie_litanie: { fx: { flag: "iie:tour", ep: ["perso", 400] } },
      iie_goulven_monte: { fx: { flag: "iie:goulven_garde" } },
    },
    quests: [
      { id: "IIE_gardien", act: "II", kind: "annexe", title: "La lampe de l'Ouïe", start: "IIE_goulven", echo: ["iie:goulven=paix", "iie:goulven=huile", "iie:goulven=parti"] },
      { id: "IIE_fous", act: "II", kind: "annexe", title: "Le fils de la ramasseuse", start: "IIE_klervi", echo: "iie:fous" },
      { id: "IIE_jobic", act: "II", kind: "annexe", title: "Le mousse du Fidèle", start: "IIE_jobic", echo: ["iie:jobic=temoin", "iie:jobic=reste", "iie:jobic"] },
    ],
  },
};
