// Le Douzième Coup · chapter 4, the one who stays, first half (act II, the Trois-Noyers, eighth day before the Grand
// Midi of 601, morning). The gleaner comes back out of the edge. Line is held in her own house while the Guard carries
// her forty clocks into the street and stops them one by one; the only way to her is the coal chute. The band is
// breaking camp, and la Courtepaille has heard what the captain pays for a grey notebook.
var J = { has: "role:passe" }, R = { has: "role:reste" };
var P = {};

Object.assign(P, {
  K04r_retour: { act: "II", title: "Les prés, de jour", place: "ferme", ambiance: "champs",
    text: [
      "Tu retraverses les prés pris dans le jour gris, seul{e}, sur ce qui reste dans le col du sablier. De jour, on voit tout. La charrette de foin, avec sa fourche plantée. Les étourneaux à hauteur d'homme, quarante, chacun à sa place dans l'air. Tu passes entre eux de biais, sans en frôler un, par habitude : on ne dérange pas.",
      "Le berger te tourne le dos, à présent, puisque tu reviens. De ce côté-là, on voit sa nuque brûlée de soleil, le col de sa blouse, et son ombre, qui n'a pas bougé d'un doigt depuis Pâques alors que le soleil a tourné tous les jours. C'est ce détail-là qui a rendu fou le premier glaneur de la bande, d'après la Courtepaille : les ombres qui ne suivent pas.",
      "Votre trace d'hier est dans l'herbe, trois sillons couchés, bien nets. La Garde l'a suivie cette nuit ; ses bottes ont tout piétiné jusqu'à la ferme. Tu marches à côté, et tu sors par le coude de la haie, à l'heure où les piquets se relèvent et où personne ne regarde un fossé.",
    ],
    choices: [{ label: "Passer sous la corde aux chiffons", fx: { stock: { sable: -1 } }, to: "K04r_village" }] },

  K04r_village: { act: "II", title: "Le second jour", backName: "la rue des Trois-Noyers", place: "troisnoyers", hub: true,
    text: [
      { first: true, text: "Les Trois-Noyers ont maigri pendant la nuit. Une maison sur deux a ses volets cloués, la clef dessous, comme l'ordonne l'affiche ; devant les autres, on charge sans plus rien plier. Le coq du père Lubin a chanté à quatre heures et demie pour un village à moitié vide, avec la même conviction." },
      { first: true, text: "On te regarde autrement qu'hier. Hier, on comptait ses poules. Ce matin, on sait qu'il s'est passé quelque chose dans la lisière, que la Garde a ramené l'horlogère sur un brancard, et qu'un glaneur y était. On te regarde comme la preuve vivante que cela finit mal de se mêler de ce qui dort." },
      { first: true, text: "Au bout d'en bas, devant la dernière maison, il y a un attroupement, et un bruit que tu connais : un battement serré, nombreux, de ruche. Il est dans la rue." },
      { again: true, text: "La rue des Trois-Noyers, au second jour. Les charrettes s'en vont une à une par le haut, et le battement, en bas, a baissé d'un ton." },
    ],
    choices: [
      { label: "La maison de l'horlogère, où la Garde sort les horloges", to: "K04r_rue_line", hide: { seen: "K04r_rue_line" } },
      { label: "Le derrière de la maison : le tas de charbon", to: "K04r_soupirail", if: { seen: "K04r_rue_line" }, hide: { not: { seen: "K04r_rue_line" } }, big: true },
      { label: "Le creux des Noisetiers, où la bande plie les bâches", to: "K04r_camp" , hide: { seen: "K04r_camp_fin" } },
      { label: "L'église, où la charrette aux saints attend toujours", to: "K04r_anicet", hide: { seen: "K04r_anicet" } },
      { label: "La cour de l'auberge : la mule de Babolin est attelée", to: "K04r_babolin", hide: { seen: "K04r_babolin_part" } },
      { label: "Le banc du père Lubin", to: "K04r_lubin", hide: { seen: "K04r_lubin" } },
      { label: "La maison aux draps", to: "K04r_goton", hide: { seen: "K04r_goton" } },
      { label: "La charrette de Thomasse, pour lui remettre le portrait", to: "K04r_thomasse", hide: { any: [{ not: { item: "portrait" } }, { quest: "I_portrait" }] } },
      { label: "Descendre à la métairie des Aulnes chercher le portrait : une pincée", to: "K04r_aulnes", if: { stock: "sable", min: 1 }, why: "Il te faudrait une pincée de sable.", hide: { any: [{ not: { has: "r:thomasse_demande" } }, { item: "portrait" }, { quest: "I_portrait" }] }, fx: { stock: { sable: -1 } } },
      { label: "Midi : la borne de la vingt-quatrième lieue, sous le reposoir", to: "M04", if: { seen: "K04r_cave" }, why: "Tu ne quitteras pas ce village sans avoir parlé à la vieille.", big: true },
    ] },

  // ------------------------------------------------------------ forty clocks in the street
  K04r_rue_line: { act: "II", title: "Quarante horloges au soleil", place: "troisnoyers",
    text: [
      "Elles sont dans la rue. On les a sorties une à une et rangées contre le mur, debout, au grand soleil, comme des gens qu'on a fait descendre en chemise : les comtoises à gros ventre, les cartels, les pendules de voyage, et au milieu la grande, celle à poids, que deux gardes ont eu du mal à passer par la porte. Elles marchent toutes. Elles n'ont jamais vu le jour, et elles battent là-dedans du même pas qu'à la chandelle.",
      "Un caporal les prend l'une après l'autre. Il ouvre la caisse, vide ce qu'il y trouve sur une bâche, sonde le socle avec une tringle, retourne le cadran. Il cherche un cahier. Quand il en a fini avec une, il arrête le balancier, du plat de la main, par propreté, comme on ferme une porte derrière soi.",
      "Le battement baisse. Tu ne saurais dire de combien : on n'entend pas une horloge de moins sur quarante. On entend seulement, au bout d'un moment, que la rue est plus grande qu'elle n'était. Les gens du village regardent faire, sans un mot, le chapeau à la main pour quelques-uns. Tu t'aperçois que tu comptes. Trente et une. Trente.",
      "Les volets de la maison sont clos. Il y a deux casaques à la porte, et une troisième, à cheval, au coin de la rue : un courrier, botté pour la route, à qui un sergent remet un pli cacheté. « Pour le camp d'Arvoise. En main propre à Monseigneur. » Le courrier part au galop vers le nord, par la route qui contourne la lisière.",
    ],
    choices: [{ back: "K04r_village" }] },
  K04r_soupirail: { act: "II", title: "Deux empans", place: "troisnoyers",
    text: [
      "Derrière la maison, il y a un jardinet, un mur bas, un tas de charbon sous un auvent. Le capitaine a mis deux hommes devant. Il n'a pas mis d'homme derrière : il a regardé le mur, la porte du jardin cadenassée, et ce trou carré, au ras du sol, grillé d'une barre, par où un chat passerait.",
      "Deux empans. Tu sais, à un doigt près, comment on y entre : l'épaule gauche d'abord, la tête tournée, les hanches de biais, et l'on se laisse couler sur le charbon comme un sac. Tu sais que la barre tient par un seul côté et que le mortier de droite est de la mie de pain. C'est toi qui l'y as mise.",
      "La dernière fois, il y avait de la neige, et tu avais ôté tes sabots. Tu les ôtes encore. Les pieds ont leur mémoire.",
    ],
    choices: [{ label: "Entrer comme en janvier", to: "K04r_cave" }] },
  K04r_cave: { act: "II", title: "Sous le plancher", backName: "la cave de Line", place: "troisnoyers", hub: true,
    text: [
      { first: true, text: "La cave n'a pas changé : la voûte, les huiles, les quatre pots de grès sur leur planche, trois retournés. Au-dessus de toi, entre les lames du plancher, il y a des raies de jour, et dans l'une d'elles le dessous d'un fauteuil. On a enlevé la grande horloge qui pesait sur la trappe. Il reste sa marque, un rectangle clair." },
      { first: true, text: "Des bottes vont et viennent, à l'autre bout de la boutique. Le fauteuil ne bouge pas. Puis un talon frappe le plancher, doucement, deux fois, juste au-dessus de ta tête." },
      { first: true, text: "« J'ai l'oreille fine, dit la voix de Line, sur le ton d'une vieille femme qui radote pour ses gardiens. Quarante ans à écouter des échappements. J'entends très bien quand il y a un rat dans mon charbon. » Elle tousse, longuement, pour couvrir la suite. « Parle bas. Ils me croient gâteuse depuis que je suis tombée sur leur lanterne. C'est commode. »" },
      { again: true, text: "Les raies de jour, le dessous du fauteuil. Line fredonne là-haut, faux, un cantique, et s'interrompt quand tu grattes la voûte de l'ongle." },
    ],
    choices: [
      { label: "« Je n'ai presque plus de sable. »", to: "K04r_line_sable", hide: { seen: "K04r_line_sable" } },
      { label: "« Qu'est-ce que je fais pour vous sortir de là ? »", to: "K04r_line_ordres", hide: { seen: "K04r_line_ordres" } },
      { label: "« Qui est-ce, ce Melchior qui vous doit une réponse ? »", to: "K04r_line_melchior", if: { seen: "K04r_line_ordres" }, hide: { any: [{ not: { seen: "K04r_line_ordres" } }, { seen: "K04r_line_melchior" }] } },
      { label: "« Cette nuit, votre châle était rouge. »", to: "K04r_line_sang", hide: { seen: "K04r_line_sang" } },
      { label: "« Le sable qu'on vous a pris cet hiver. C'était moi. »", to: "K04r_line_aveu", hide: { seen: "K04r_line_aveu" } },
      { label: "Ressortir par le soupirail", back: "K04r_village" },
    ] },
  K04r_line_sable: { act: "II", title: "La rosée d'heures", place: "troisnoyers", fx: { stock: { sable: 2 }, flag: "r:sait_gratter" },
    text: [
      "« Le quatrième pot. Celui qui est à l'endroit. Il y a un fond, que j'ai laissé pour la bonne bouche : deux pincées, si tu racles bien. Prends. »",
      "Tu racles, avec l'ongle, puis avec le manche de ta cuiller. Le sable est au fond du grès, gris, luisant, tiède. Tu le fais couler dans ton sablier de corne en retenant ton souffle.",
      "« Pour la suite, écoute, je ne le dirai qu'une fois. Les bornes de la route en suent. Toutes, la nuit, un peu avant le jour, quand il fait frais : cela perle sur le bronze du cadran, comme une rosée, et cela ne dure pas, le premier soleil le boit. Il faut y être à l'heure. Tu prends une plume, de pigeon, de n'importe quoi, et tu balaies le cadran de haut en bas, vers le creux de la main. Deux pincées par borne, trois les nuits claires. La Maîtrise fait la même chose avec des cuves et cent hommes. Toi, tu as une plume. »",
      "« Quarante ans que je gratte, ajoute-t-elle plus bas. Ta patronne y voyait un trésor. C'étaient mes nuits. »",
    ],
    choices: [{ back: "K04r_cave" }] },
  K04r_line_ordres: { act: "II", title: "Marche", place: "troisnoyers", fx: { item: "releves" },
    text: [
      "« Rien. Tu ne fais rien, et tu le fais vite. » Le fauteuil craque. « Ils m'emmènent demain à Arvoise, en voiture, aux frais de la Régence, avec un coussin. J'ai soixante-neuf ans, je crache rouge, et je n'aurais jamais fait cinq lieues dans la Dormante à pied : ces imbéciles me portent où je voulais aller. Melchior veut la porte. Tant qu'il la voudra, il me gardera en vie et il m'écoutera. J'ai soixante ans de questions pour lui. »",
      "« Toi, tu marches. La Ferme, les Hautes-Bordes, Roquebise, Arvoise. À chaque borne, tu ouvres le Cahier. Tout ce que l'autre t'écrit, tu le gardes pour toi. S'ils te prennent, tu manges les pages. »",
      "Un froissement, là-haut, puis sa voix reprend, pressée : « Le tuyau du poêle, à ta gauche. Il y a un rouleau dedans, dans une toile cirée. Mes relevés : la lisière, mois par mois, depuis 561, avec les dates où chaque village a été pris. C'est la seule carte exacte de ce pays. Le capitaine la cherche dans mes horloges. Les hommes cherchent toujours les papiers dans ce qui a une serrure. »",
    ],
    choices: [{ back: "K04r_cave" }] },
  K04r_line_melchior: { act: "II", title: "La même main", place: "troisnoyers",
    text: [
      "Line se tait le temps que passent des bottes.",
      "« J'ai envoyé mes relevés à la Maîtrise des Sables tous les ans depuis quarante ans. On m'a répondu deux fois. En 562, une lettre de trois lignes, pour me remercier de mon zèle. Et l'an dernier, une autre, pour me défendre de continuer. » Elle baisse encore la voix ; il faut coller l'oreille au plancher. « Trente-huit ans d'écart. Deux signatures : Aubespin le père, Aubespin le fils. Et la même main, à un jambage près. Le même *d*, penché en arrière, comme un homme qui recule. Je règle des montres : je sais reconnaître une main. »",
      "« Tu l'écriras à l'autre. Qu'il regarde, là-bas, comment écrit un nommé Aubespin, à la Guilde. »",
    ],
    fx: { flag: "r:sait_main" },
    choices: [{ back: "K04r_cave" }] },
  K04r_line_sang: { act: "II", title: "Le compte de Line", place: "troisnoyers",
    text: [
      "« Depuis la Saint-Martin. » Elle le dit comme elle dirait l'âge d'une pendule. « J'ai fait le compte. Je verrai le Grand Midi, ou je le manquerai de peu. C'est assez pour ce que j'ai à faire, si personne ne me fait perdre de temps à me plaindre. »",
      "« {autre} le sait. Je lui ai fait jurer de se taire, pour que tu marches sans te retourner. Tu l'as vu quand même ; j'ai mal tenu mon châle. » Un silence, puis, plus sec : « Ne va pas me regarder comme un cierge, maintenant. Je ne suis pas à plaindre : j'ai attendu soixante ans une seule nuit, et elle a marché. Tu connais beaucoup de gens à qui cela arrive ? »",
    ],
    choices: [{ back: "K04r_cave" }] },
  K04r_line_aveu: { act: "II", title: "On n'ôte ses sabots", place: "troisnoyers", fx: { flag: "r:line_pardon", ep: ["perso", 600] },
    text: [
      "Tu l'as dit au plafond, d'une traite, la figure contre la voûte. Là-haut, le fauteuil ne bouge pas.",
      "« Je sais », dit Line.",
      "Tu attends. Elle prend son temps, comme pour une vis difficile. « Je l'ai su hier matin, à ma porte. Tu as ôté tes sabots avant d'entrer. Personne n'ôte ses sabots chez une horlogère : on les ôte dans une maison où l'on est déjà entré pieds nus, et où l'on a eu peur du bruit. Tes pieds se souvenaient pour toi. »",
      "« Trois mesures. Il y avait là le retour de {autre}. Je te le dis pour que tu le saches, pas pour que tu en crèves : tu ne savais pas, et moi, j'aurais dû mettre ce sable ailleurs que dans une cave à soupirail. » Elle tousse. « Tu me le rembourseras en lieues. Vingt-trois. Je tiens mes comptes aussi bien que le capitaine. »",
    ],
    choices: [{ back: "K04r_cave" }] },

  // ------------------------------------------------------------ the camp
  K04r_camp: { act: "II", title: "Le creux des Noisetiers", place: "troisnoyers",
    text: [
      "Les bâches sont à terre. La bande charge la charrette à bras et l'âne, sans bruit, avec la célérité de gens qui ont souvent déménagé avant l'aube. La Courtepaille surveille, assise sur le timon, ses trois jupes étalées. Elle ne rit pas en te voyant. Elle tend la main.",
      "« Mon sablier. »",
      "Tu le détaches de ta ceinture. Ce qu'il contient est à toi, depuis hier soir : tu le fais passer, grain à grain, dans la fiole de la vieille, sous ses yeux, et tu lui rends la corne vide. Elle la soupèse, la range dans une poche. « Tu comptes juste. Je t'ai bien appris. » Puis elle te regarde, longtemps, de ses yeux noirs, pesants. « Vingt écus pour un glaneur dit Roquebise. Cinquante pour un cahier gris qu'il aurait sur lui. C'est crié depuis ce matin à la porte de l'église. Cinquante écus, mon petit. Je n'ai jamais rien eu dans ma bande qui vaille cinquante écus, à part l'âne. »",
      "Derrière elle, le Grêlé noue des cordes, le dos tourné, très occupé. Sur un noisetier, il y a un gamin roux qui fait celui qui n'écoute pas.",
    ],
    choices: [
      { label: "Lui tendre le billet de roulage du sergent : « Pour ta charrette. Et on est quittes. »", hide: { not: { item: "billet" } }, fx: { drop: "billet", flag: "r:courtepaille_quitte", regard: { courtepaille: "redevable" } }, to: "K04r_camp_billet" },
      { label: "Lui compter six écus : « Ma dette. Le reste ne te regarde pas. »", if: { gold: { min: 6 } }, fx: { gold: -6, flag: "r:courtepaille_quitte" }, to: "K04r_camp_paye" },
      { label: "« C'est le Grêlé qui m'a vendu{e} au capitaine. Pour un écu. Demande-lui ce qu'il a vendu d'autre. »", hide: { not: { has: "tantot:lisiere" } }, fx: { flag: ["r:courtepaille_quitte", "r:grele_denonce"] }, to: "K04r_camp_grele" },
      { label: "« Le cahier ? La vieille l'avait sur elle. La Garde l'a. »", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "leste" }, v: 5 }] },
        win: { fx: { flag: "r:courtepaille_dupe", ep: ["perso", 500] }, to: "K04r_camp_ment" }, lose: { fx: { flag: "r:courtepaille_ennemie" }, to: "K04r_camp_refus" } },
      { label: "« Je ne te dois plus rien. Je ne suis plus de ta bande. »", fx: { flag: "r:courtepaille_ennemie", regard: { courtepaille: "rancunier" } }, to: "K04r_camp_refus" },
    ] },
  K04r_camp_billet: { act: "II", title: "Un billet de roulage", place: "troisnoyers",
    text: [
      "La Courtepaille prend le carré de papier, le tourne vers le jour, flaire le cachet. Ses yeux s'allument : une charrette pleine de ce que contient la sienne ne passe pas un poste de la Garde sans y laisser la moitié du chargement et quelques-uns des chargeurs.",
      "Elle rit enfin, de son grand rire, avant d'avoir fini de comprendre. « Le cachet de la paroisse ! Où as-tu... Non. Ne me dis rien, je croirais que tu deviens honnête. » Le billet disparaît dans une poche. « Quittes. Ta dette, ton nom, tout. Je n'ai pas vu de glaneur ce matin, ni de cahier. J'ai vu un courant d'air. »",
    ],
    choices: [{ label: "T'éloigner du timon", to: "K04r_rouget" }] },
  K04r_camp_paye: { act: "II", title: "Six écus sur le timon", place: "troisnoyers",
    text: [
      "Tu poses les six écus sur le timon, un par un. La Courtepaille les compte du regard, puis les couvre de sa main large.",
      "« Six. Voilà pour ta dette. Le cahier, lui, en vaut cinquante. » Elle réfléchit, et tu vois le calcul passer derrière ses yeux : cinquante écus de la Garde, contre ce qu'il en coûte de livrer à la Garde quelqu'un qui connaît tous ses fossés. « Va. Une dette payée, c'est sacré, même chez nous. Surtout chez nous. Mais ne te trouve pas sur mon chemin quand j'aurai eu le temps d'y repenser. »",
    ],
    choices: [{ label: "T'éloigner du timon", to: "K04r_rouget" }] },
  K04r_camp_grele: { act: "II", title: "Un écu", place: "troisnoyers",
    text: [
      "Le Grêlé a cessé de nouer ses cordes. Il se retourne trop vite, avec la figure d'un homme qui cherche la sortie d'une pièce sans murs.",
      "La Courtepaille ne se lève pas. Elle dit seulement son nom, sans hausser le ton, et toute la bande s'arrête de charger. « Un écu. Tu as vendu un des miens au capitaine pour un écu. » Elle secoue la tête, navrée. « La trahison, mon gros, je m'y attends de tout le monde. C'est le prix qui me fait de la peine. Tu gâtes le marché. »",
      "Ce qui suit se passe entre gens de la bande et ne te regarde plus. Tu entends, en t'éloignant, la voix de la Courtepaille qui demande au Grêlé, très doucement, ce qu'il a vendu d'autre, et à qui, et combien ; et la voix du Grêlé, qui monte.",
      "Elle te rappelle une seule fois. « Roquebise ! Ça, ça vaut une dette. Je ne t'ai pas vu{e}. »",
    ],
    choices: [{ label: "T'éloigner du creux", to: "K04r_rouget" }] },
  K04r_camp_ment: { act: "II", title: "La Garde l'a", place: "troisnoyers",
    text: [
      "Tu racontes la grange, les lanternes, la vieille fouillée devant toi. Tu racontes le cahier dans la main du caporal. Tu y mets les détails qui font vrai : la toile grise, le fil qui luisait. Tout est exact, sauf la main.",
      "La Courtepaille t'écoute en se curant une dent. « Alors pourquoi il le fait crier ce matin ? » Tu réponds que le capitaine est un homme qui vérifie : il veut savoir s'il y en a deux. Elle rit. C'est bien le genre de l'homme, en effet, et c'est la seule chose vraie qu'elle sache de lui.",
      "« Deux cahiers ! Il n'y en a même pas un pour moi. » Elle te congédie de la main. « File. Tu me dois toujours neuf écus, moins ce que je dirai. »",
    ],
    choices: [{ label: "T'éloigner du timon", to: "K04r_rouget" }] },
  K04r_camp_refus: { act: "II", title: "La lisière, c'est moi qui te l'ai apprise", place: "troisnoyers",
    text: [
      { outcome: "lose", text: "Tu racontes la grange, les lanternes, la vieille fouillée. La Courtepaille t'écoute en regardant ta veste, à la hauteur de l'estomac, où il y a un angle que n'ont pas les estomacs. Elle sourit." },
      "Elle ne se lève pas. Elle n'appelle personne. Il fait grand jour, le village est à deux cents pas, et elle a toujours su choisir ses heures.",
      "« Tu t'en vas dedans, hein ? Loin. Avec ce que tu portes. » Elle hoche la tête, presque avec affection. « Je t'ai ramassé{e} à dix ans au bord d'un fossé. Je t'ai appris où poser les pieds, combien de souffles vaut une pincée, comment on reconnaît une maison qui vaut la peine. La lisière, c'est moi qui te l'ai apprise. » Elle se penche. « On se reverra dedans, mon petit. Je la connais mieux que toi. »",
    ],
    choices: [{ label: "Tourner le dos, et sentir ses yeux jusqu'au chemin creux", to: "K04r_rouget" }] },
  K04r_rouget: { act: "II", title: "Le lot de l'âne", place: "troisnoyers",
    text: [
      "Rouget te rattrape au chemin creux. Il a sauté de son noisetier sans regarder où, et il boite.",
      "« Elle m'a mis dans le lot de l'âne. » Il a la voix de quelqu'un qui a couru et qui a pleuré, dans cet ordre. « Avec l'âne, la charrette et les bâches. Elle vend le tout au brocanteur, pour passer le fleuve légère. Il lui faut un garçon pour étriller la mule. Trois écus, il m'a compté, avec le licol. »",
      "Il marche à ta hauteur, de biais. « Je sais que tu pars dedans. Je sais que tu as un cahier, que la vieille t'a donné du sable, et que tu vas à Roquebise. J'écoute, moi. » Il s'essuie le nez sur une manche trop longue. « Je mange peu. Je vois dans le noir. Je sais ouvrir les serrures à deux tours. Et je suis le seul de la bande qui ait rien dit pour l'hiver, alors que je t'avais vu{e} sortir du soupirail avec la taie. »",
      { after: "r:rouget_parole", text: "« Et tu m'as donné ta parole, ajoute-t-il très vite. Que tu partirais pas sans me le dire. Alors tu me le dis, là. Tu es en train de me le dire. »" },
    ],
    choices: [
      { label: "« Tu portes le sac, tu te tais quand je lève la main. Viens. »", fx: { join: "rouget", conf: { rouget: 10 }, flag: "r:rouget_pris" }, to: "K04r_camp_fin" },
      { label: "« Là où je vais, il faut du sable pour deux. Je n'en ai pas pour un. »", fx: { flag: "r:rouget_refuse", conf: { rouget: -5 } }, to: "K04r_camp_fin" },
    ] },
  K04r_camp_fin: { act: "II", title: "Le chemin creux", place: "troisnoyers",
    text: [
      { after: "r:rouget_pris", text: "Rouget ne dit pas merci. Il prend ton sac, l'installe sur son dos avec des soins de portefaix, et te suit à trois pas, dans un silence si appliqué qu'on l'entend." },
      { after: "r:rouget_refuse", text: "Rouget s'arrête au milieu du chemin. Il ne proteste pas, ce qui ne lui ressemble pas. « Bon », dit-il. Quand tu te retournes, au tournant, le chemin est vide, et il y a un noisetier qui remue sans vent." },
      "Tu remontes vers le village. Dans le creux, derrière toi, on achève de charger. Avant ce soir, il n'y aura plus de glaneurs aux Trois-Noyers ; il y aura un rond d'herbe jaunie, quatre trous de piquets, et la cendre d'un feu qu'on n'allumait que de jour.",
    ],
    choices: [{ back: "K04r_village" }] },

  // ------------------------------------------------------------ the street, the second day
  K04r_anicet: { act: "II", title: "La charrette aux saints", place: "troisnoyers",
    text: [
      "La charrette du bedeau est devant l'église, attelée, chargée, les onze saints couchés dans leur paille. Elle aurait dû partir hier. Anicet est assis sur le marchepied, son trousseau sur les genoux, et regarde le bas de la rue.",
      { after: "anicet:statue", text: "Saint Gnomon voyage en trois morceaux, ficelés ensemble, son cadran posé sur le ventre." },
      "« On m'a dit de rouler ce matin. J'ai dit qu'une roue avait du jeu. » Il te reconnaît, toi, ou ce que tu es, et il ne recule pas. « Tu y étais, cette nuit. Ils l'ont ramenée sur des hallebardes. Est-ce qu'elle... » Il cherche le mot. « Est-ce qu'elle a eu ce qu'elle voulait ? »",
      "Tu dis que oui. Que cela a marché, quoi que ce fût, et qu'elle a ri. Le vieux bedeau ferme les yeux. Tu vois ses épaules descendre d'un cran, comme un poids d'horloge arrivé en bas.",
      "« Alors je roulerai ce soir. Pas avant. On sonne l'angélus à six heures, c'est mon office, personne ne m'en a relevé. » Il rouvre les yeux, et ils sont très clairs. « Si quelqu'un avait besoin, vers six heures, que toute la Garde regarde du côté du clocher... Une cloche, ça s'emballe. Ça m'est arrivé en 588, pour un orage. On n'a rien pu me reprocher. »",
    ],
    fx: { flag: "r:anicet_tocsin" },
    choices: [{ back: "K04r_village" }] },
  K04r_babolin: { act: "II", title: "La mule philosophe", backName: "la charrette de Babolin", place: "troisnoyers",
    text: [
      { first: true, text: "La charrette jaune est attelée dans la cour du Cadran sans Aiguille. L'auberge est vide : maître Gonthier a tout vendu, sauf la patronne, et il est parti avec elle à l'aube. L'enseigne est restée. Personne n'achète un cadran sans aiguille." },
      { first: true, text: "Babolin sangle sa bâche. Il te voit, regarde vers la rue, et continue de sangler. « Vingt écus pour toi, cinquante pour ton papier. J'ai entendu. Je ne livre personne : la Garde paie en bons sur le Trésor, à six mois, et ma vertu s'en trouve bien. Qu'est-ce qu'il te faut ? »" },
      { again: true, text: "Babolin vérifie ses sangles. La mule mâche, et t'ignore." },
    ],
    choices: [
      { label: "Un sablier : dans une fiole, on ne voit pas couler", if: { gold: { min: 3 } }, hide: { has: "r:sablier_a_soi" }, fx: { gold: -3, flag: "r:sablier_a_soi" }, to: "K04r_babolin_sablier" },
      { label: "« Le gamin roux. Tu l'as payé trois écus avec le licol. Je t'en donne quatre. »", if: { gold: { min: 4 } }, hide: { any: [{ not: { has: "r:rouget_pris" } }, { has: "r:rouget_rachete" }] }, fx: { gold: -4, flag: "r:rouget_rachete", conf: { rouget: 15 } }, to: "K04r_babolin_rouget" },
      { label: "Le laisser partir", to: "K04r_babolin_part" },
    ] },
  K04r_babolin_sablier: { act: "II", title: "Un sablier de laiton", place: "troisnoyers",
    text: [
      "Il fouille sous la bâche et en tire une chose qu'il essuie sur sa manche : un petit sablier de laiton, cabossé, à deux ampoules de verre épais, dans une cage à trois colonnes. « Pris dans une maison de Vauxelles, en 592. Un sablier de cuisine, pour les œufs. Le verre est bon, le col est fin. Vide, bien entendu. Trois écus, et je te fais cadeau de l'histoire. »",
      "Tu y verses ce que tu portes dans la fiole. Les pincées descendent dans le col, grises, lentes, et pour la première fois tu les vois couler. Pour la première fois de ta vie, tu portes à la ceinture un sablier qui n'est à personne d'autre.",
    ],
    choices: [{ back: "K04r_babolin" }] },
  K04r_babolin_rouget: { act: "II", title: "Quatre écus, sans le licol", place: "troisnoyers",
    text: [
      "Babolin s'arrête de sangler. « Quatre. Pour un garçon d'écurie qui n'a jamais vu une écurie. » Il te regarde, puis regarde Rouget, qui s'est fait tout petit derrière la roue. « Je l'avais acheté pour lui rendre service. Je te le revends pour la même raison, avec un écu de mieux : c'est ce qu'on appelle une bonne action dans mon commerce. »",
      "Il empoche. « Il est à toi. C'est-à-dire qu'il n'est à personne, ce qui, pour ce que j'en ai vu, lui fera drôle. »",
      "Rouget ne dit rien. Il regarde les quatre écus disparaître dans le gilet jaune. C'est la troisième fois de sa vie qu'on le paie, et la première que celui qui paie ne l'emporte pas.",
    ],
    choices: [{ back: "K04r_babolin" }] },
  K04r_babolin_part: { act: "II", title: "La route du fleuve", place: "troisnoyers",
    text: [
      "« Je passe la Thiorne avant la fin de la semaine, dit Babolin en grimpant sur son siège. Par le gué des Sablières, en aval d'Arvoise : la Maîtrise tient le pont et taxe tout ce qui a des roues. Si tu sors de là-dedans vivant{e}, et avec quelque chose à vendre, c'est par là que tu me trouveras. » Il fait claquer sa langue. La mule consent.",
      "La charrette jaune sort de la cour en grinçant, avec ses bénitiers, ses aïeux et ses horloges sans poids.",
    ],
    choices: [{ back: "K04r_village" }] },
  K04r_lubin: { act: "II", title: "Le banc", place: "troisnoyers",
    text: [
      { if: { has: "monde:lubin_force" }, text: "Le banc est vide, renversé dans les poireaux. On a emmené le père Lubin hier au soir, de force, dans la charrette des saints, et il a fallu quatre gardes. Sur le pignon, Midi-Juste est resté. Personne n'a pu l'attraper. Il te regarde de côté, d'un œil rond, sévère, et tu comprends que tu es jugé{e}." },
      { if: { all: [{ has: "monde:lubin_part" }, { not: { has: "monde:lubin_force" } }] }, text: "Le banc est vide, sous le rosier, avec sa tuile de calage. Le père Lubin est parti hier dans la charrette du charron, son coq sous le bras. Quelqu'un a posé sur le banc, en passant, une fleur de son rosier. Ce sont des attentions qu'on n'a que pour les maisons dont le maître est parti debout." },
      { if: { all: [{ not: { has: "monde:lubin_part" } }, { not: { has: "monde:lubin_force" } }] }, text: "Le père Lubin est sur son banc, au bout du jardin, face aux prés. Il te salue de la fourche. « Tu en reviens, toi. Alors ? C'est comment, cette nuit ? » Tu dis que c'est gris. « Gris, répète-t-il, contrarié. On m'avait dit tiède. » Il se recale. « Enfin. Gris et tiède, ça va ensemble. Dis à ceux que tu verras là-dedans que le père Lubin arrive. Qu'ils me gardent une place au soleil, s'il y en a un. »" },
    ],
    choices: [{ back: "K04r_village" }] },
  K04r_goton: { act: "II", title: "Les cordes sans draps", place: "troisnoyers",
    text: [
      "Les cordes sont toujours tendues de la fenêtre au noyer du charron. Les draps n'y sont plus : la Goton est partie ce matin, sur la charrette de son neveu, assise sur son coffre.",
      { if: { all: [{ has: "matin:fil" }, { has: "goton:volee" }] }, text: "On te dit, à la maison d'en face, qu'elle a ouvert le coffre avant de partir, et qu'elle l'a refermé sans un mot. Qu'elle a demandé si l'on avait vu traîner quelqu'un de la bande aux noisetiers. Qu'elle a dit seulement : « Je serai donc enterrée comme une gueuse », et qu'elle a fait fouetter le cheval." },
      { if: { all: [{ has: "matin:fil" }, { not: { has: "goton:volee" } }] }, text: "Elle a laissé quelque chose pour « le pays de Roquebise », à la maison d'en face : un nœud de mouchoir, avec dedans trois dragées grises, dures comme des cailloux, et vieilles sans doute de soixante ans. La voisine te les donne du bout des doigts. « Elle a dit que tu les poserais sur le bord de la fontaine, là-bas, de sa part. Que c'est là qu'on les jetait, aux noces. Moi, je n'ai rien compris. »" },
      { if: { not: { has: "matin:fil" } }, text: "Tu ne lui as jamais parlé. Tu sais seulement, comme tout le monde, qu'elle cousait les morts, et qu'elle a emporté son propre linceul." },
    ],
    choices: [
      { label: "Prendre les trois dragées", hide: { any: [{ not: { has: "matin:fil" } }, { has: "goton:volee" }] }, fx: { item: "dragees" }, back: "K04r_village" },
      { back: "K04r_village" },
    ] },
  K04r_thomasse: { act: "II", title: "Le cadre de buis", place: "troisnoyers", fx: { drop: "portrait", gold: 2, quest: "I_portrait", ep: ["perso", 400] },
    text: [
      "La charrette à ridelles est chargée ; le merle a été hissé tout en haut, sur les matelas. Thomasse te voit venir, et voit ce que tu portes sous le bras. Elle descend du marchepied sans regarder où elle pose les pieds.",
      "C'est un portrait au fusain, de la main d'un peintre de foire : une femme en coiffe, sévère, l'œil un peu de travers. Thomasse l'essuie avec son tablier, bien qu'il soit propre. « Elle louchait. Il l'a faite loucher. Elle lui avait interdit, et il l'a fait quand même. » Elle rit, d'un seul coup, et s'arrête. « Ma sœur... Tu l'as vue ? Elle est comment ? »",
      "Tu lui dis qu'elle est à table, avec son homme. Que la soupe est servie. Qu'elle a l'air de quelqu'un qui va dire quelque chose de drôle. C'est vrai, mot pour mot. Thomasse te compte deux écus dans la main et referme tes doigts dessus, comme on fait aux enfants.",
    ],
    choices: [{ back: "K04r_village" }] },
  K04r_aulnes: { act: "II", title: "La métairie des Aulnes", place: "troisnoyers", fx: { item: "portrait" },
    text: [
      "La métairie est à deux cents pas dans la lisière : une maison basse, un toit de chaume, et cette fumée droite, plantée sur la cheminée comme une plume sur un chapeau. La porte est ouverte. Elle l'était à Pâques.",
      "Dans la salle, il fait le jour qu'il faisait ce lundi-là, à l'heure de la soupe ; tu en as vu cent, de ces salles, et celle-ci te serre la gorge comme la première. Ils sont deux à table. L'homme a sa cuiller à mi-chemin de sa bouche, et une goutte de bouillon pend au bord, ronde, dorée, qui tombe depuis Pâques. La femme lui fait face, penchée, l'œil plissé, les lèvres entrouvertes sur le commencement d'un mot : elle a la figure de quelqu'un qui va dire une chose drôle, et qui sait que ce sera drôle.",
      "Le portrait est sur la cheminée, dans son cadre de buis : une femme en coiffe, au fusain, qui louche un peu. Tu le prends. Tu ne prends rien d'autre. En sortant, tu repousses la porte, par égard pour la soupe.",
    ],
    choices: [{ back: "K04r_village" }] },
});

module.exports = {
  passages: P,
  extras: {
    items: {
      releves: { name: "Les relevés de Line", kind: "divers", keep: true, nodepot: true, price: 0, desc: "Un rouleau dans une toile cirée : la lisière de la Dormante relevée mois par mois depuis 561, avec la date où chaque village a été pris. La seule carte exacte de ce pays." },
      dragees: { name: "Trois dragées grises", kind: "divers", price: 0, desc: "Trois dragées dures comme des cailloux, dans un nœud de mouchoir. La Goton les garde depuis une noce, il y a soixante ans. À poser sur le bord de la fontaine de Roquebise, de sa part." },
    },
  },
};
