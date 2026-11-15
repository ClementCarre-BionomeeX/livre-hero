// Lot ii1 of "Le Trésor des Taiseurs": the opening of Act II (Lison's boat out of the reeds), the stilt village of
// Les Joncs-Bas (the act's hub), Mother Ancolie (what she tells of the Taiseurs, the hero's mother, her lace read with
// the amber lens, the listening trial), Lison and her grandmother, village life (eel fishing, the lace feast, a quarrel
// over stilts, a Bank spy among the fishermen), the routes joncs-saline and joncs-vasier and the marsh region events.

var R = "@route";
var P = {};

// ==================================================================== act II opening, the arrival
Object.assign(P, {
  II_debut: { act: "II", title: "Hors des roseaux", place: null,
    text: [
      "La barque sort des roseaux au moment où le soleil passe la ligne des terres. Toute la nuit, tu as entendu les tiges frotter contre la coque avec un bruit de balai sur un plancher, et tu as regardé l'eau noire jusqu'à ne plus la voir. Maintenant le marais s'ouvre d'un coup : une nappe grise et plate qui fume dans le froid, des îlots de joncs, des perches plantées de travers pour marquer les chenaux, et très loin, sur l'horizon, une ligne de fumées bleues.",
      { with: "lison", text: "Lison pousse sur sa gaffe, debout à l'arrière, les manches roulées jusqu'aux coudes. Elle a les lèvres bleues et les doigts blancs autour du bois. Elle lève le menton vers les fumées. « Les Joncs-Bas, dit-elle. {{oreille#iij_debut_lison|Chez moi. On y mange de l'anguille matin et soir, tu t'y feras|Chez ma grand-mère. Elle t'attend depuis plus longtemps que tu crois}}. »" },
      { without: "lison", text: "Le vieux passeur qui t'a pris à la sortie des égouts de la reine rame à petits coups réguliers, les avant-bras luisants. Il t'a donné le nom de son village, les Joncs-Bas, et le nom de celle qui t'y attend : Mère Ancolie. Il a passé le reste de la nuit à mâcher une racine de réglisse." },
      { after: "mandat", text: "Derrière toi, Salvèze. Ton signalement est cloué depuis hier soir à la porte du Guet et au pied de chaque pont : *recherché pour le meurtre d'Odeline Carrus, chercheuse de choses perdues, cent ducats à qui le livrera*. Sur le quai des Lanternes, un témoin payé répète ce qu'on lui a dicté. Ici, l'eau, les joncs, un butor qui pousse son cri de corne quelque part sur ta gauche.", else: "Derrière toi, Salvèze, et la Banque qui te cherche. Tu es parti{e} par l'égout de la reine comme on quitte une maison en feu, les poches pleines de ce qu'on a attrapé en courant." },
      { with: "tibere", text: "Tibère est tassé au fond de la barque, roulé dans son vieux manteau du Guet, les genoux au menton. Il a vomi deux fois dans la nuit, très dignement, par-dessus le plat-bord. « Un sergent, ça marche sur des pavés, grogne-t-il. Je {{oreille|vous suis jusqu'au bout, voilà tout|me demande ce que je pourrai bien écrire à la Banque sur un marais}}. »" },
      { with: "gildas", text: "Frère Gildas a dormi assis, le capuchon rabattu, les mains dans les manches. Au jour, il ouvre les yeux sans bouger le reste du corps, et il récite les laudes à mi-voix, les yeux sur l'eau. Une aigrette se lève devant la proue. Il la suit du regard jusqu'à ce qu'elle se pose." },
      "Le cornet d'os pèse contre ta hanche, dans sa poche de cuir. Tu as dormi dessus, la main posée sur la poche.",
    ],
    choices: [
      { label: "Demander à Lison ce qui t'attend aux Joncs-Bas", with: "lison", to: "IIJ_roseaux" },
      { label: "Laisser la barque filer jusqu'aux fumées", big: true, to: "IIJ_arrivee" },
    ] },

  IIJ_roseaux: { act: "II", title: "Dans la barque", with: "lison",
    text: [
      "Lison ne répond pas tout de suite. Elle prend un chenal plus étroit, où les roseaux se referment au-dessus de vos têtes en tunnel, et la lumière devient verte. Elle rame de la gaffe, un coup à gauche, un coup à droite, sans heurter une seule tige.",
      "« Ma grand-mère est aveugle, dit-elle enfin. Elle fait de la dentelle. Elle a quatre-vingt-quatre ans et elle entend mieux que toi avec ton os de baleine. Ce que tu diras devant elle, elle l'entendra deux fois. Ce que tu penseras aussi. » Elle souffle sur ses doigts. « Elle {{oreille#iij_lison_ordre|voudra juste te voir, c'est une vieille curieuse|voudra savoir si j'ai repris le cornet, et je n'ai pas de réponse à lui donner}}. »",
      "Elle te regarde enfin, en biais. « Les Joncs n'aiment pas les étrangers. {{oreille|Toi, tu en es un, alors tiens-toi droit et ne touche à rien|Toi, tu n'en es pas un, et c'est bien ce qui m'agace}}. »",
      { after: "passe:voleur", text: "« Et garde tes mains dans tes poches, ajoute-t-elle. Une batelière sait reconnaître des doigts qui ont appris à prendre. »" },
      { after: "poids:amour", text: "Tu penses une seconde à quelqu'un, à la ville, qui ne sait même pas que tu es parti{e}. Lison te regarde penser, et sourit à l'eau." },
    ],
    choices: [
      { label: "« Le cornet était à Odeline. Il est à moi. »", fx: { conf: { lison: -3 } }, to: "IIJ_arrivee" },
      { label: "« Qu'est-ce que tu ne me dis pas ? »", fx: { conf: { lison: 3 } }, to: "IIJ_arrivee" },
      { label: "Te taire et regarder les roseaux", to: "IIJ_arrivee" },
    ] },

  IIJ_arrivee: { act: "II", title: "Les pilotis", place: "joncs", backName: "l'arrivée aux Joncs-Bas",
    text: [
      "Le village se lève de l'eau par morceaux. D'abord les pieux, des centaines, noirs de goudron jusqu'à hauteur d'homme et verts de mousse au-dessus ; puis les maisons, posées dessus comme des cages, en planches grises et en roseau tressé, reliées entre elles par des passerelles qui tanguent. Des filets sèchent sur des perches. Une fumée lourde sort d'un long bâtiment au toit bas : le fumoir, et l'odeur d'anguille fumée te prend à la gorge à cent pas.",
      "Sur les galeries, des femmes travaillent assises, un carreau de dentelle sur les genoux. Leurs fuseaux claquent comme une pluie fine. Elles lèvent toutes la tête au même moment, et le bruit s'arrête.",
      "Au bout du ponton, une dizaine de pêcheurs démaillent des nasses. Un homme au bonnet rouge, plus propre que les autres, range sous un banc {{pie#iij_nasse_neuve|une nasse d'osier tressé serré, pareille aux autres|une nasse d'osier de Salvèze, toute neuve, lestée de plombs frappés d'un besant, la marque de la Banque Marrel}}. Il te regarde accoster sans cesser de nouer son fil.",
      "Un vieux pêcheur aux bras nus descend l'échelle du ponton jusqu'à l'eau et attrape ta proue d'une main. Il a des avant-bras couverts de petites cicatrices blanches, des morsures. Il te dévisage longtemps.",
    ],
    choices: [
      { label: "Monter sur le ponton", big: true, fx: { meet: "iij_cyprien" }, to: "IIJ_accueil" },
    ] },

  IIJ_accueil: { act: "II", title: "Le ponton", place: "joncs",
    text: [
      "« Cyprien Huchet, dit le vieux pêcheur. Je tiens le ponton. » Il tient surtout ta barque, et il ne la lâche pas. Derrière lui, les pêcheurs se sont levés. L'un a gardé son couteau à démailler à la main, sans menace, comme on garde un outil.",
      { after: "mandat", text: "« Un douanier de la Banque est passé hier soir avec un placard, reprend Cyprien. Un visage dessiné à la plume, pas trop ressemblant. Cent ducats. » Il regarde ton visage, et compare. « Ici, {{oreille#iij_cyprien|on ne veut pas d'histoires avec la ville|on a déjà un homme de la Banque sur le ponton, on n'en veut pas un deuxième}}. »", else: "« Des gens de la Banque rôdent dans les chenaux depuis trois jours, reprend Cyprien. Ils cherchent quelqu'un. » Il te regarde, et compare. « Ici, {{oreille#iij_cyprien|on ne veut pas d'histoires avec la ville|on a déjà un homme de la Banque sur le ponton, on n'en veut pas un deuxième}}. »" },
      { with: "lison", text: "Lison saute sur le ponton avant toi, la corde à la main, et la noue au pieu d'un nœud de batelier. « Il est avec moi, Cyprien. Il est pour Mère Ancolie. » Elle n'a pas fait l'accord du mot pour toi ; aux Joncs, on dit *il* pour un hôte, quel qu'il soit." },
      { with: "tibere", text: "Tibère se dresse dans la barque, et la barque le lui reproche. Il se rassied. Un pêcheur rit, puis un autre. Cela détend un peu le ponton." },
      { with: "gildas", text: "Les pêcheurs regardent la bure de Frère Gildas. Deux d'entre eux portent la main à leur front, puis à leur bouche : un salut que tu n'as vu nulle part à Salvèze. Gildas leur rend le même." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 2 }, fac: { hautes: 3 } }, to: "IIJ_accueil_ok" },
      { label: "Lui dire la vérité : la Banque t'a fait accuser d'un meurtre que tu n'as pas commis", test: { dom: "social", diff: -10, label: "Convaincre le ponton", help: [{ with: "lison", v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { fac: { hautes: 5 }, ep: ["perso", 400] }, to: "IIJ_accueil_ok" }, lose: { fx: { flag: "iij:surveille" }, to: "IIJ_accueil_ok" } },
      { label: "Sortir le cornet d'os de sa poche, sans un mot", fx: { fac: { taiseurs: 5 }, flag: "iij:cornet_montre" }, to: "IIJ_accueil_ok" },
      { label: "« Un homme de la Banque, dis-tu ? Celui au bonnet rouge ? »", hide: { not: { any: [{ voile: "iij_cyprien" }, { voile: "iij_nasse_neuve" }] } }, fx: { fac: { hautes: 5 }, flag: "iij:bonnet" }, to: "IIJ_accueil_ok" },
      { label: "Poser deux ducats sur le ponton, pour le gîte", fx: { gold: -40, fac: { hautes: 2 }, flag: "iij:paye" }, to: "IIJ_accueil_ok" },
    ] },
});

Object.assign(P, {
  IIJ_accueil_ok: { act: "II", title: "Le ponton", place: "joncs",
    fx: { ep: ["perso", 500] },
    text: [
      { outcome: "win", text: "Tu parles sans hausser la voix : le quai des Lanternes, Odeline au pied de l'escalier, le témoin acheté, le placard. Cyprien écoute en regardant l'eau. Quand tu as fini, il lâche ta proue. « La Banque a acheté le sel, dit-il, puis la taxe sur le sel, puis le douanier. Un témoin, ça coûte moins cher qu'un douanier. »" },
      { outcome: "lose", text: "Tu parles trop, trop vite, et tu entends toi-même que ça sonne comme une histoire qu'on a préparée. Cyprien lâche ta proue quand même. « Monte, dit-il. Mais tu dormiras où on te dira, et tu sortiras quand on te dira. » Deux pêcheurs se mettent à te suivre des yeux, et ils ne s'arrêtent plus." },
      { after: "iij:cornet_montre", text: "Tu tiens le cornet d'os au creux de ta main, ouvert, comme on montre une pièce. Le ponton se tait d'un coup. Cyprien regarde l'os, longtemps, puis il porte deux doigts à son front, puis à sa bouche. Les autres font comme lui, un par un, sauf l'homme au bonnet rouge, qui regarde les autres le faire." },
      { after: "iij:bonnet", text: "Cyprien ne se retourne pas vers le bonnet rouge. Il lâche ta proue, et dit très bas, en t'aidant à monter : « Tu as de bonnes oreilles pour quelqu'un de la ville. Garde-les ouvertes, et la bouche fermée. On en reparlera. »" },
      { after: "iij:paye", text: "Cyprien ramasse les deux ducats et les fait sauter dans sa paume. « Le gîte, ici, c'est Mère Ancolie qui le donne, dit-il. Je lui porterai ça pour son huile. » Il ne te rend pas la monnaie." },
      { with: "lison", text: "Lison passe devant toi sur la passerelle, sa gaffe sur l'épaule. Les dentellières la saluent par son nom, et la suivent des yeux, puis toi, puis elle." },
      "« Mère Ancolie veut te voir, dit Cyprien. Elle t'a entendu{e} arriver. » Tu ne vois pas comment, de si loin, au-dessus du clapot et des fuseaux. Il te montre du menton la plus haute maison des Joncs, au bout de la passerelle la plus longue, perchée sur des pieux de chêne noir.",
    ],
    choices: [{ label: "Entrer dans les Joncs-Bas", big: true, to: "II_hub" }] },

  II_hub: { act: "II", title: "Les Joncs-Bas", place: "joncs", hub: true, routes: true, backName: "le ponton des Joncs-Bas",
    text: [
      { first: true, text: "Les Joncs-Bas tiennent sur trois cents pieux et sur une habitude. Les maisons se serrent en trois rangs autour d'un bassin d'eau calme, chacune sur ses pilotis, chacune avec sa galerie, son échelle, sa barque amarrée dessous. Au centre, sur les pieux les plus gros, la maison commune, un long bâtiment au toit de roseaux surmonté d'une cloche de bronze verdi. À l'est, sur la passerelle des dentellières, une rangée de femmes assises au soleil. Au sud, le ponton des pêcheurs, le fumoir, et la Nasse, un cabaret de planches dont l'enseigne est une vraie nasse pendue à une perche." },
      { first: true, text: "Un seul morceau de terre émerge de l'eau, à l'ouest : un tertre herbu planté de poteaux de bois gravés, le cimetière des noyés. À côté, sur des pieux brûlés jusqu'à l'eau, les restes noircis d'une grande maison laissée telle quelle depuis des siècles. Et tout au bout de la passerelle du nord, plus haute que le reste, la maison de Mère Ancolie, avec une lampe allumée en plein jour derrière la fenêtre." },
      { text: "Sous le ponton, l'eau {{echo#iij_ponton_iris|clapote contre les pieux goudronnés, et les anguilles des viviers remuent dans leurs paniers immergés|rend une voix de jeune femme, essoufflée, sur ce même ponton : « Mère, j'emmène l'enfant à la ville cette nuit. Qu'il vive hors du silence. » Puis une voix plus vieille, la même que tu connais : « Iris, si tu passes la coulée, tu ne repasseras pas. »}}." },
      { again: true, when: "day", text: "Les Joncs-Bas au grand jour : les fuseaux qui claquent sur la passerelle de l'est, les pêcheurs qui démaillent au ponton, la fumée bleue du fumoir. Une barque passe sous les maisons, et une femme en descend sans la faire tanguer." },
      { again: true, when: "night", text: "Les Joncs-Bas la nuit : des lanternes aux galeries, la lumière jaune de la Nasse sur l'eau noire, et sur le bassin le bruit des anguilles qui chassent. La lampe de Mère Ancolie brûle tout en haut, comme toujours." },
      { after: "mandat", before: "IIJ_rafle", text: "Sur un pieu du ponton, quelqu'un a cloué le placard des douaniers, ton visage à la plume, *cent ducats*. Un autre l'a recouvert d'une anguille fendue, mise à sécher." },
      { after: "saline:ouverte", text: "Depuis la Saline, les sauniers passent aux Joncs plus souvent, avec des sacs de sel qu'ils ne déclarent pas, et ils te saluent de la tête." },
      { after: "ecueils:ouverte", text: "Le vent a tourné au suroît. Sur la passerelle, les vieilles regardent le ciel du large et rentrent leur dentelle plus tôt que d'habitude." },
      { after: "iij:espion_pris", text: "Le bonnet rouge d'Ardouin Mesle sèche au bout d'une perche, au milieu du ponton, comme une prise qu'on montre." },
      { after: "iij:pilotis", text: "La maison des Tessier et celle de la veuve Corre ont de nouveau leurs galeries droites, et un pilotis neuf, tout blond, entre les deux." },
      { with: "lison", again: true, text: "Lison est partout à la fois : au ponton à discuter le prix de l'anguille, sur une échelle, dans sa barque. Elle te retrouve toujours au moment où tu la cherches." },
    ],
    choices: [
      { label: "La maison de Mère Ancolie, au bout de la passerelle du nord", hide: { seen: "IIJ_ancolie" }, big: true, to: "IIJ_ancolie" },
      { label: "Monter chez Mère Ancolie", hide: { not: { seen: "IIJ_ancolie" } }, to: "IIJ_ancolie_maison" },
      { label: "La maison commune, sous sa cloche verte", to: "IIJ_maison" },
      { label: "Le ponton des pêcheurs d'anguilles", to: "IIJ_ponton" },
      { label: "La passerelle des dentellières", to: "IIJ_dentellieres" },
      { label: "La Nasse, le cabaret sur pilotis", to: "IIJ_nasse" },
      { label: "Le tertre des noyés", to: "IIJ_tertre" },
      { label: "Les pieux brûlés de la vieille maison", hide: { not: { any: [{ seen: "IIJ_recit_vasse" }, { lens: "echo" }] } }, to: "IIJ_maison_vasse" },
      { label: "Les enfants qui chantent sur l'échelle de la maison commune", hide: { seen: "IIJ_ecole" }, to: "IIJ_ecole" },
      { label: "Une cloche sonne à toute volée au bout du ponton", big: true, hide: { any: [{ seen: "IIJ_rafle" }, { not: { any: [{ has: "iij:epreuve" }, { has: "iij:epreuve_ratee" }] } }] }, to: "IIJ_rafle" },
      { label: "Porter à Mère Ancolie le feuillet de la Saline", big: true, hide: { any: [{ not: { has: "saline:ouverte" } }, { seen: "IIJ_retour_saline" }] }, to: "IIJ_retour_saline" },
      { label: "Faire entendre à Mère Ancolie le diapason des Écueils", big: true, hide: { any: [{ not: { has: "ecueils:ouverte" } }, { seen: "IIJ_retour_ecueils" }] }, to: "IIJ_retour_ecueils" },
      { label: "Une vieille femme dans une barque noire, au bout du ponton", hide: { any: [{ has: "iit:chapelle" }, { has: "joncs:brules" }, { has: "joncs:sauves" }] }, to: "IIT_chapelle" },
      { label: "Les nasses crevées des pêcheurs d'anguilles", hide: { any: [{ has: "iit:anguilles" }, { has: "iit:anguilles_ratee" }, { has: "joncs:brules" }, { has: "joncs:sauves" }] }, to: "IIT_anguilles" },
      { label: "Une dentellière qui travaille seule, loin des autres", hide: { any: [{ has: "iit:dentelle" }, { has: "joncs:brules" }, { has: "joncs:sauves" }] }, to: "IIT_dentelle" },
      { label: "Trois coups de perche sous la galerie, au coucher du soleil", hide: { any: [{ has: "iit:passeur" }, { has: "joncs:brules" }, { has: "joncs:sauves" }] }, to: "IIT_passeur" },
      { label: "Le vent du suroît se lève sur les Joncs-Bas", big: true, hide: { not: { all: [{ has: "saline:ouverte" }, { has: "ecueils:ouverte" }] } }, to: "IIT_raid" },
    ] },
});

// ==================================================================== Mother Ancolie
Object.assign(P, {
  IIJ_ancolie: { act: "II", title: "Mère Ancolie", place: "joncs", backName: "la maison de Mère Ancolie",
    fx: { meet: "ancolie", ep: ["perso", 600] },
    text: [
      "L'escalier est raide comme une échelle, et chaque marche a sa voix. La maison a trois pièces sur des pilotis de chêne, et la première est tout entière occupée par la lumière : une fenêtre ouverte sur le marais, une lampe à huile allumée en plein jour, et devant la fenêtre une très vieille femme assise à un carreau de dentellière, cent fuseaux pendus au bord du coussin. Ses mains vont et viennent sans hâte. Ses yeux sont blancs, deux pierres de lait sous des paupières fines.",
      "« Approche, dit Mère Ancolie. Tu as {{oreille#iij_pas|le pas de quelqu'un qui a dormi dans une barque|le pas de ta mère, lourd du talon, comme si le plancher allait partir}}. » Elle ne lève pas la tête. Les fuseaux continuent. « Tu portes l'os à ta hanche. Porte-le à l'oreille, si tu veux. Moi, je n'en ai jamais eu besoin. »",
      { with: "lison", text: "Lison s'est arrêtée sur le seuil. Sa grand-mère tourne vers elle son visage aveugle, et la regarde, c'est le mot. « Tu as maigri, dit Mère Ancolie. Et tu {{oreille#iij_ancolie_lison|as bien ramé|n'as pas fait ce que je t'avais demandé}}. » Lison rougit jusqu'aux oreilles, et c'est la première fois que tu la vois rougir." },
      { with: "gildas", text: "Frère Gildas monte derrière toi. Mère Ancolie s'arrête de travailler pour la première fois. « Il y a un homme du Mont sur mon escalier, dit-elle. Qu'il attende en bas, avec la pluie. » Gildas redescend sans un mot." },
      { with: "tibere", text: "Tibère, sur la dernière marche, ôte son chapeau. Mère Ancolie a un petit rire sec. « Et celui-là compte ses mots comme des liards. Entrez, sergent. Asseyez-vous près de la porte. »" },
      { if: { has: "pq:broderie_lue" }, text: "Tu lui parles de la broderie encadrée au-dessus du lit d'Odeline, du héron, du roseau, et de la ligne sous les lettres. Les fuseaux ralentissent. « Elle l'a brodée ici, à dix ans, assise à côté de moi, dit Mère Ancolie. Elle avait déjà la main plus sûre que la langue. »" },
      { if: { all: [{ has: "i4:melisende_taiseuse" }, { is: { i4_barque: "rendue" } }] }, text: "« Mélisende m'a porté ton nom, ajoute-t-elle, avec l'histoire de sa barque. Elle porte mes paroles en ville depuis vingt ans. Tu lui as rendu de quoi les porter. »" },
      { after: "voile:lettre_trois", text: "« Tu as lu la lettre d'Odeline jusqu'au fond, reprend-elle. Je l'entends à ta façon de te tenir. On se tient autrement quand on sait d'où on vient. »" },
      "« Je sais pourquoi tu es là, dit-elle. Tu veux savoir ce que c'est, cet os, et qui sont les gens qui l'ont fait, et pourquoi on tue pour lui. Je te le dirai. Mais pas à un sourd. »",
    ],
    choices: [
      { label: "« Vous avez connu ma mère. »", hide: { not: { any: [{ voile: "iij_pas" }, { has: "voile:lettre_trois" }] } }, to: "IIJ_ancolie_mere" },
      { label: "« Qui sont les Taiseurs ? »", big: true, to: "IIJ_epreuve" },
      { label: "« J'entends très bien. »", fx: { fac: { taiseurs: -2 } }, to: "IIJ_epreuve" },
    ] },

  IIJ_ancolie_maison: { act: "II", title: "Chez Mère Ancolie", place: "joncs", backName: "la maison de Mère Ancolie",
    text: [
      { when: "day", text: "Mère Ancolie travaille à sa fenêtre, la lampe allumée près d'elle. Les fuseaux claquent. Elle dit ton nom avant que tu aies passé le seuil." },
      { when: "night", text: "La lampe, les fuseaux, la fenêtre noire. Mère Ancolie travaille la nuit aussi bien que le jour. « Assieds-toi, dit-elle. Tu fais grincer ma marche du milieu. »" },
      "Sur une étagère, derrière elle, des rouleaux de dentelle attendent, chacun noué d'un fil de couleur. Dans la seconde pièce, un lit clos, un coffre, une cruche. La troisième a toujours sa porte fermée.",
      { after: "iij:mere", text: "Elle a posé sur le coffre, à ta place, un petit bol d'eau et une galette. Elle ne dit pas pour qui." },
      { after: "tresor:iij_fuseau", once: true, text: "Mère Ancolie arrête ses fuseaux et tourne la tête vers ta poche. « Tu as l'ambre d'Aymeric sur toi, dit-elle. Je l'entends rouler. Garde-le au chaud : l'ambre froid se fend. » Elle reprend son ouvrage." },
      { with: "lison", text: "Lison est assise sur le coffre, les jambes ballantes, et mange une pomme ridée en vous écoutant." },
    ],
    choices: [
      { label: "« Vous avez connu ma mère. »", hide: { any: [{ seen: "IIJ_ancolie_mere" }, { not: { any: [{ voile: "iij_pas" }, { has: "voile:lettre_trois" }] } }] }, to: "IIJ_ancolie_mere" },
      { label: "« Qui sont les Taiseurs ? »", hide: { seen: "IIJ_epreuve" }, to: "IIJ_epreuve" },
      { label: "Aller à la veillée de la maison commune, pour l'épreuve", big: true, hide: { any: [{ not: { seen: "IIJ_epreuve" } }, { has: "iij:epreuve" }, { has: "iij:epreuve_ratee" }] }, to: "IIJ_veillee" },
      { label: "« Maintenant, parlez-moi des Taiseurs. »", big: true, hide: { any: [{ seen: "IIJ_recit" }, { not: { any: [{ has: "iij:epreuve" }, { has: "iij:epreuve_ratee" }] } }] }, to: "IIJ_recit" },
      { label: "Demander à lire sa dentelle", hide: { any: [{ not: { seen: "IIJ_recit" } }, { seen: "IIJ_dentelle" }] }, if: { any: [{ has: "iij:epreuve" }, { has: "iij:dentelle_ok" }, { has: "iij:voile_rendu" }, { has: "iij:espion_pris" }, { has: "iij:espion_double" }] }, why: "Mère Ancolie attend une preuve que tu sais écouter : l'épreuve, ou un service rendu aux Joncs.", to: "IIJ_dentelle" },
      { label: "Laisse-moi lui parler", who: "lison", hide: { any: [{ not: { seen: "IIJ_recit" } }, { seen: "IIJ_dentelle" }, { has: "iij:epreuve" }, { has: "iij:dentelle_ok" }] }, fx: { flag: "iij:dentelle_ok", conf: { lison: 5 } }, to: "IIJ_dentelle" },
      { label: "Demander à revoir le vieux col de dentelle", hide: { not: { seen: "IIJ_dentelle" } }, to: "IIJ_dentelle_ecueils" },
      { label: "Écouter Lison et sa grand-mère se parler", with: "lison", hide: { seen: "IIJ_lison_grandmere" }, to: "IIJ_lison_grandmere" },
      { label: "Laisser Mère Ancolie entendre Tibère", with: "tibere", hide: { seen: "IIJ_ancolie_tibere" }, to: "IIJ_ancolie_tibere" },
      { label: "Faire monter Frère Gildas, resté au pied de l'escalier", with: "gildas", hide: { seen: "IIJ_ancolie_gildas" }, to: "IIJ_ancolie_gildas" },
      { back: "II_hub" },
    ] },

  IIJ_ancolie_mere: { act: "II", title: "Iris", place: "joncs",
    fx: { flag: "iij:mere", ep: ["perso", 1200], fac: { taiseurs: 5 } },
    text: [
      "Les fuseaux s'arrêtent. Mère Ancolie pose les mains à plat sur le coussin, de chaque côté de son ouvrage, et elle reste comme ça un moment.",
      "« Elle s'appelait Iris, dit-elle. Iris Vasse. La fille de ma nièce. Lison l'appelait sa cousine, et la suivait partout, sur le ponton, dans les barques, jusque dans l'eau. Iris faisait la plus belle dentelle des Joncs, et elle chantait faux. Elle avait juré le serment à seize ans, comme nous toutes. À vingt, elle t'a eu{e}. »",
      "« Elle ne voulait pas que tu grandisses ici. Elle disait qu'on apprend aux enfants des Joncs à dire une chose et à en penser une autre avant de leur apprendre à nager, et qu'elle voulait un enfant qui dise ce qu'il pense. Odeline avait quitté le serment pour la ville. Iris lui a écrit. Odeline a dit oui. »",
      { after: "passe:trouve", text: "« L'étal, l'hiver des Glaces : c'est Iris qui t'y a couché{e}, endormi{e} au sirop de pavot, dans sa propre couverture. Odeline a fait semblant de te trouver le matin. Elle a joué la surprise devant tout le quai. Elle jouait bien. »" },
      { after: "passe:voleur", text: "« Le vol, à quatorze ans : Odeline t'a laissé{e} la voler. Elle te surveillait depuis des années chez la nourrice des Gouttières où Iris t'avait mis{e}. Elle a attendu que tu aies l'âge d'un métier, et elle s'est arrangée pour que tu entres chez elle par la fenêtre. »" },
      { after: "passe:gage", text: "« L'homme qui t'a laissé{e} en gage n'était pas ton père. C'était un batelier d'ici, payé par Odeline pour jouer le débiteur et pour disparaître. Il est mort il y a six ans. Il en riait encore. »" },
      "« Iris est revenue aux Joncs l'hiver suivant, par la grande coulée, en pleine glace. On a retrouvé sa barque au printemps, dans les roseaux. Elle est au tertre, sous un poteau qui porte son nom à l'envers, comme on fait pour les noyés. » Mère Ancolie reprend ses fuseaux. « Voilà. Tu es une Vasse. Tu as droit au serment. Tu as le droit de le refuser aussi. Personne ici ne te dira lequel des deux est le bon. »",
      { if: { has: "iij:mere_voix" }, text: "Tu lui dis la voix sous le ponton : Iris qui emmène l'enfant à la ville, et une voix plus vieille qui lui répond. Les mains de Mère Ancolie s'arrêtent sur les fuseaux. « Je lui ai dit qu'elle ne repasserait pas la coulée, dit-elle. Je l'ai dit pour qu'elle reste. Elle l'a entendu comme une prédiction, et elle est partie quand même. »" },
      { with: "lison", text: "Lison regarde par la fenêtre. Elle a les yeux secs et les mâchoires serrées. « {{oreille#iij_lison_iris|Je ne m'en souviens pas, j'étais petite|Je m'en souviens. Elle m'avait promis de me ramener un ruban de la ville}} », dit-elle." },
    ],
    choices: [
      { label: "« Pourquoi personne ne me l'a dit ? »", fx: { conf: { lison: 2 } }, to: "IIJ_ancolie_maison" },
      { label: "Ne rien dire, et regarder les mains de la vieille femme", fx: { fac: { taiseurs: 3 } }, to: "IIJ_ancolie_maison" },
      { label: "Aller voir le poteau d'Iris, au tertre des noyés", to: "IIJ_tertre" },
    ] },

  IIJ_epreuve: { act: "II", title: "L'épreuve", place: "joncs",
    fx: { ep: ["perso", 500] },
    text: [
      "« Les Taiseurs, répète Mère Ancolie, comme on goûte un mot. On ne les dit pas, ceux-là, on les tait. C'est même leur seul métier. » Ses fuseaux reprennent. « Ce soir, il y a veillée à la maison commune. Tout le village sera là. Les Joncs parleront comme ils parlent entre eux quand il n'y a personne : chacun dira une chose et en pensera une autre. Trois d'entre eux te parleront à toi. »",
      "« Réponds à ce qu'ils taisent. Pas à ce qu'ils disent. Si tu sais écouter, je te dirai tout, et je te donnerai à lire ce que mes mains ont écrit depuis soixante ans. Si tu ne sais pas, je te dirai quand même une partie, parce que c'est ton histoire. Le reste appartient aux autres. »",
      "« Prends ton os, si tu veux, ajoute-t-elle. Un os entend. Il ne répond pas. Ta bouche répondra, et ta bouche, c'est toi. »",
      { with: "lison", text: "Lison a un petit rire. « La dernière fois qu'elle a fait passer l'épreuve à quelqu'un de la ville, dit-elle, le gars a répondu à tout le monde qu'il faisait beau. Il est reparti le lendemain. » Mère Ancolie : « {{oreille|Il est reparti content|Il est reparti vivant, et c'est déjà beaucoup}}. »" },
    ],
    choices: [
      { label: "Aller à la veillée, ce soir", big: true, to: "IIJ_veillee" },
      { label: "« Plus tard. J'ai d'autres choses à voir aux Joncs. »", back: "II_hub" },
    ] },
});

// ==================================================================== the trial: the evening at the common house
Object.assign(P, {
  IIJ_veillee: { act: "II", title: "La veillée", place: "joncs", takes: "evening",
    text: [
      "La maison commune est une longue salle basse, chauffée par deux braseros de tourbe posés sur des pierres plates, et pleine jusqu'aux murs. Les femmes ont apporté leur carreau, les hommes leurs nasses à réparer, les enfants courent entre les bancs. Une marmite d'anguilles au vin rouge fume sur le brasero du fond. On te donne une écuelle, une cuiller de corne, une place sur un banc, et chacun retourne à sa conversation.",
      "Tu écoutes. La salle bruit de cent conversations, et le cornet d'os, contre ton oreille, les fait trembler presque toutes. Une femme dit à sa voisine que {{oreille|la soupe est trop salée ce soir|la douane a doublé la taxe sur le sel et qu'on n'en achète plus}}. Un vieux dit à un jeune {{oreille|qu'il a vu un héron blanc ce matin sur la coulée|qu'une barque de la Banque a sondé le chenal du nord avant l'aube}}. Deux filles se disputent un fuseau en riant, et l'une dit à l'autre {{oreille|qu'elle le lui rendra demain|qu'elle sait pour le fils du saunier, et qu'elle ne dira rien}}.",
      "Mère Ancolie est assise au bout de la salle, dans le seul fauteuil, sa dentelle sur les genoux. Elle ne te regarde pas. Elle écoute tout.",
      { with: "lison", text: "Lison s'est mise de l'autre côté de la salle, exprès, avec les filles de son âge. Elle ne t'aidera pas, et elle te le fait savoir en tournant le dos." },
      { with: "tibere", text: "Tibère a trouvé le tonneau de vin de prune et s'est assis à côté. Il écoute aussi, à sa manière : avec la figure d'un homme qui a interrogé des suspects pendant vingt ans." },
    ],
    choices: [
      { label: "Le vieux Cyprien vient s'asseoir à côté de toi", big: true, to: "IIJ_veillee_1" },
    ] },

  IIJ_veillee_1: { act: "II", title: "La veillée : Cyprien", place: "joncs",
    text: [
      "Cyprien Huchet s'assied sur ton banc avec son écuelle, souffle sur sa cuiller, mange. Il ne te regarde pas. Puis il dit, au mur d'en face, sur le ton dont on parle du temps :",
      "« Les anguilles {{oreille#iij_v1|remontent mal cette année. L'eau est trop froide, elles restent au fond|ne remontent plus la grande coulée. La Banque a tendu une chaîne en travers du chenal, à la passe des Trois-Saules, pour fermer la route de la mer aux barques des Joncs}}. »",
      "Il mange encore. Il attend.",
    ],
    choices: [
      { label: "« Il faudra attendre les chaleurs. »", to: "IIJ_veillee_2" },
      { label: "« Une chaîne, ça se coupe. Les Trois-Saules, c'est loin d'ici ? »", hide: { not: { voile: "iij_v1" } }, fx: { clock: { iij_ecoute: 1 }, flag: "iij:v1_ok", ep: ["perso", 400] }, to: "IIJ_veillee_2" },
      { label: "Lire sur son visage ce qu'il ne dit pas", test: { dom: "social", diff: -20, label: "Deviner sous les mots", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { clock: { iij_ecoute: 1 }, flag: "iij:v1_ok" }, to: "IIJ_veillee_2" }, lose: { to: "IIJ_veillee_2" } },
    ] },

  IIJ_veillee_2: { act: "II", title: "La veillée : Thècle", place: "joncs",
    text: [
      { after: "iij:v1_ok", text: "Cyprien pose sa cuiller. Il te regarde pour la première fois, longtemps. « Une heure à la gaffe, dit-il. La chaîne est rouillée au troisième pieu. » Il se lève et s'en va, et deux pêcheurs, au fond, se mettent à parler tout bas.", else: "Cyprien hoche la tête, poliment. « C'est ça, dit-il. Les chaleurs. » Il finit son écuelle et va s'asseoir ailleurs." },
      "Une femme à la figure sèche, un foulard noir serré sur les cheveux, vient se planter devant toi, son carreau de dentelle sous le bras. Les autres dentellières se poussent pour la laisser passer. « Thècle, dit-elle. Je tiens la passerelle. » Elle regarde ton col, tes manches, tes mains, comme elle regarderait un ouvrage mal fini.",
      "« Il fait {{oreille#iij_v2|froid pour la saison. Gardez votre manteau sur vous, la nuit, ici|chaud chez Fortunée, ce soir. Quelqu'un y écrit une lettre pour la ville, à la chandelle, pendant que tout le village est ici}}, dit Thècle. »",
    ],
    choices: [
      { label: "« Merci, je le garderai. »", to: "IIJ_veillee_3" },
      { label: "« Alors j'irai boire un verre à la Nasse avant la fin de la veillée. »", hide: { not: { voile: "iij_v2" } }, fx: { clock: { iij_ecoute: 1 }, flag: ["iij:v2_ok", "iij:lettre_nasse"], ep: ["perso", 400], questSeen: "IIJ_q_espion" }, to: "IIJ_veillee_3" },
      { label: "Regarder qui manque dans la salle", test: { dom: "discretion", diff: -10, label: "Compter les absents", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { clock: { iij_ecoute: 1 }, flag: ["iij:v2_ok", "iij:lettre_nasse"] }, to: "IIJ_veillee_3" }, lose: { to: "IIJ_veillee_3" } },
    ] },

  IIJ_veillee_3: { act: "II", title: "La veillée : la Mère", place: "joncs",
    text: [
      { after: "iij:v2_ok", text: "Thècle a un tout petit sourire, qui ne monte pas jusqu'aux yeux. « Le bonnet rouge n'est pas venu manger, dit-elle tout bas. Il n'aime pas l'anguille, paraît-il. » Elle retourne à son banc.", else: "Thècle hausse les épaules et retourne à son banc. Elle dit quelque chose à sa voisine, qui rit." },
      "La veillée s'use. Les braseros baissent, les enfants dorment sur les genoux, on remet les carreaux sous les bras. Mère Ancolie se lève de son fauteuil, Lison à son coude, et traverse la salle droit vers toi, sans hésiter sur une seule marche ni sur un seul banc.",
      "Elle s'arrête devant toi. « Tu dois être fatigué{e}, dit-elle doucement. {{oreille#iij_v3|Va dormir. La veillée finira très bien sans toi|Reste assis. Le plus dur, c'est quand on croit avoir fini}}. »",
    ],
    choices: [
      { label: "Te lever, la remercier, et sortir dans la nuit", to: "IIJ_veillee_fin" },
      { label: "Rester assis{e} sur ton banc, sans répondre", hide: { not: { voile: "iij_v3" } }, fx: { clock: { iij_ecoute: 1 }, ep: ["perso", 400] }, to: "IIJ_veillee_fin" },
      { label: "« Je reste. Je n'ai pas sommeil. »", test: { dom: "savoir", diff: -10, label: "Entendre le piège", help: [{ if: { has: "metier:lire" }, v: 10 }] },
        win: { fx: { clock: { iij_ecoute: 1 } }, to: "IIJ_veillee_fin" }, lose: { to: "IIJ_veillee_fin" } },
    ] },

  IIJ_veillee_fin: { act: "II", title: "La veillée : le jugement", place: "joncs",
    text: [
      "Mère Ancolie reste debout devant toi. La salle s'est tue. Ceux qui partaient se sont arrêtés à la porte, leur carreau sous le bras. Tu entends les braseros craquer, et l'eau sous le plancher.",
      "Elle tend la main, la paume vers toi, à la hauteur de ton visage, sans le toucher. Elle reste ainsi le temps de trois respirations.",
    ],
    choices: [
      { label: "Attendre ce qu'elle va dire", big: true, hide: { not: { clock: "iij_ecoute", min: 2 } }, to: "IIJ_epreuve_reussie" },
      { label: "Attendre ce qu'elle va dire", big: true, hide: { clock: "iij_ecoute", min: 2 }, to: "IIJ_epreuve_ratee" },
    ] },

  IIJ_epreuve_reussie: { act: "II", title: "Tu as entendu", place: "joncs",
    fx: { flag: "iij:epreuve", fac: { taiseurs: 10, hautes: 5 }, ep: ["seance", 1500] },
    text: [
      "« Tu as entendu », dit Mère Ancolie. Elle le dit à toute la salle, pas à toi.",
      "Les dentellières frappent deux fois leur fuseau contre le bois de leur carreau, un bruit sec qui fait le tour de la salle. Les pêcheurs portent deux doigts à leur front, puis à leur bouche. Cyprien, près de la porte, te fait un signe du menton.",
      { with: "lison", text: "Lison s'est retournée. Elle te regarde comme elle regarderait une barque qu'elle croyait percée et qui flotte. Puis elle se reprend. « Pas mal, dit-elle. Pour quelqu'un de la ville. » Sous ses mots, le cornet ne bouge pas : elle le pense." },
      "« Viens demain matin, dit Mère Ancolie. Je te raconterai. Et après, je te donnerai ma dentelle à lire. »",
    ],
    choices: [
      { label: "Monter avec elle jusqu'à sa maison, dans la nuit", big: true, to: "IIJ_recit" },
      { label: "Rentrer dormir", back: "II_hub" },
    ] },

  IIJ_epreuve_ratee: { act: "II", title: "Ce que tu n'as pas entendu", place: "joncs",
    fx: { flag: "iij:epreuve_ratee", ep: ["perso", 600] },
    text: [
      "Mère Ancolie baisse la main. « Tu as entendu ce qu'on t'a dit, dit-elle. C'est poli. C'est la ville. »",
      "La salle se vide sans un mot de plus. Quelqu'un te tape sur l'épaule en passant, sans méchanceté, comme on console un pêcheur rentré bredouille. Thècle passe sans te regarder.",
      { with: "lison", text: "Lison reste en arrière. « Tu sais, dit-elle, moi aussi je l'ai ratée, la première fois. J'avais neuf ans. » Elle n'a pas l'air de mentir, et le cornet est de son avis." },
      "« Viens quand même demain, dit Mère Ancolie depuis la porte. Je te raconterai ton histoire, parce qu'elle est à toi. La dentelle, c'est le secret des autres. Tu la liras le jour où tu auras rendu un service aux Joncs, ou le jour où quelqu'un d'ici parlera pour toi. »",
    ],
    choices: [
      { label: "La suivre jusqu'à sa maison", big: true, to: "IIJ_recit" },
      { label: "Rentrer dormir", back: "II_hub" },
    ] },

  IIJ_recit: { act: "II", title: "La reine qui parlait", place: "joncs", takes: 2,
    fx: { clue: "iij_c_ysaure", ep: ["perso", 800] },
    text: [
      "Mère Ancolie s'installe à son carreau, et ses mains reprennent le travail avant sa bouche. Elle raconte comme on file, d'un seul fil, droit devant.",
      "« Il y a trois cent douze ans, le delta avait une reine. Ysaure. Elle avait signé une charte, la Charte des Hautes-Eaux, qui disait que la terre gagnée sur la mer appartenait aux familles qui l'avaient gagnée. Nos familles. Les grandes maisons de Salvèze voulaient cette terre, et le sel qui est dessous. Une nuit, la nuit des Comptoirs, elles ont pris le palais. »",
      "« Elles n'ont pas tué la reine. Une reine morte, ça fait des martyrs. Elles lui ont coupé la langue, pour qu'elle ne témoigne pas devant le duc d'Aveline, qui était son suzerain et qui l'aurait écoutée. Puis elles ont fait dire partout qu'elle était devenue folle, puis muette. On l'appelle encore la Muette, à la ville. »",
      "Ses fuseaux claquent. « {{oreille#iij_ancolie_ysaure|C'est une vieille histoire|C'est l'histoire de cette maison, et de ta mère, et la tienne}}, dit-elle. »",
    ],
    choices: [
      { label: "« Et les Taiseurs ? »", big: true, to: "IIJ_recit_vasse" },
    ] },

  IIJ_recit_vasse: { act: "II", title: "Le chancelier", place: "joncs",
    fx: { flag: "taiseurs:connus", clue: ["iij_c_aymeric", "iij_c_serment", "iij_c_registre", "iij_c_caches"], ep: ["histoire", 3000] },
    text: [
      "« La reine avait un chancelier, Aymeric Vasse. Notre ancêtre. Il avait sa maison ici, sur les pieux brûlés que tu as vus en arrivant. Avec ses secrétaires, il a fait trois choses. »",
      "« La première : il a appris aux siens à parler à double sens, pour que les espions des Comptoirs entendent des histoires de pêche et de dentelle. La deuxième : il a fait faire des instruments, dans l'ambre qui chante aux Écueils et dans l'os des baleines échouées, pour entendre ce que les autres taisent. Le tien en est un. La troisième : la reine ne pouvait plus parler, mais elle avait ses mains. Elle a dicté par signes son témoignage, la nuit des Comptoirs, les noms, les faux actes, tout. Six feuillets. On l'appelle le Registre de la Muette. »",
      "« Aymeric a caché les six feuillets en six endroits, avec un instrument près de chacun pour aider celui qui viendrait. Et en un septième lieu, à Sorne, la Charte elle-même, scellée, et le trésor de la couronne. Puis la mer a pris Sorne. »",
      "« Ceux qui gardent tout ça s'appellent les Taiseurs. Leur serment tient en une phrase : ne jamais dire la double parole à un étranger. Le serment {{oreille#iij_gardien|se garde tout seul, comme une maison qu'on habite|a un Gardien. Il le fait tenir, au besoin avec ses mains, et je sais son nom}}. »",
      { with: "gildas", text: "En bas, au pied de l'escalier, tu entends Frère Gildas changer de pied sur le ponton, une fois, et ne plus bouger." },
      { after: "beffroi:ouverte", text: "Tu penses au feuillet du Beffroi, plié dans ton sac. Mère Ancolie hoche la tête comme si tu l'avais dit à voix haute. « Un, dit-elle. Il en reste cinq. »" },
    ],
    choices: [
      { label: "« Qui est ce Gardien ? »", hide: { not: { voile: "iij_gardien" } }, to: "IIJ_recit_silence" },
      { label: "« Pourquoi me dire tout ça, à moi ? »", to: "IIJ_recit_silence" },
      { label: "Remercier, et la laisser à sa dentelle", to: "IIJ_ancolie_maison" },
    ] },

  IIJ_recit_silence: { act: "II", title: "Ce qu'elle tait", place: "joncs",
    text: [
      { after: "voile:iij_gardien", text: "Mère Ancolie ne répond pas tout de suite. Ses fuseaux s'arrêtent, puis reprennent plus vite. « Tu as entendu ce que je n'ai pas dit, dit-elle. Bien. Tu n'entendras pas le reste. Le nom du Gardien appartient au serment, et tu n'as pas juré. » Sous ses mots, cette fois, le cornet ne trouve rien à faire trembler : elle dit exactement ce qu'elle pense." },
      "« Pourquoi toi ? » Elle a un petit rire. « Parce que la Banque cherche ce que nous gardons, et qu'elle a un chercheur qui entend comme toi. Parce que le premier feuillet est sorti de sa cache, et que les autres suivront. Parce que mes mains sont vieilles, et que Lison {{oreille#iij_ancolie_lison2|est trop jeune pour ça|a déjà fait son choix, que c'est toi, et qu'elle ne le sait pas encore}}. »",
      "« Va à la Saline. Va aux Écueils. Rapporte ce que tu trouves, et ne le montre à personne qui parle trop. La dentelle t'aidera, quand tu l'auras méritée. »",
    ],
    choices: [{ label: "Rester un moment près de son carreau, à l'écouter travailler", to: "IIJ_ancolie_maison" }] },
});

// ==================================================================== the lace, Lison and her grandmother, the companions before Ancolie
Object.assign(P, {
  IIJ_dentelle: { act: "II", title: "La dentelle", place: "joncs",
    fx: { ep: ["perso", 800] },
    text: [
      { after: "iij:dentelle_ok", before: "iij:epreuve", with: "lison", text: "Lison a parlé à sa grand-mère dans la pièce du fond, longtemps, à voix basse. Tu n'as rien entendu, pas même au cornet. Quand elles reviennent, Mère Ancolie a la bouche pincée, et Lison les joues rouges. « Elle dit que tu as écouté autrement, grogne la vieille femme. Elle est têtue. Elle tient ça de moi. »" },
      "Mère Ancolie défait le fil rouge d'un rouleau et déroule sur ses genoux une bande de dentelle large comme la main et longue de trois pas, si fine que tu vois le plancher au travers. Elle la tend vers toi sans la lâcher.",
      "« Soixante ans que je fais celle-là, dit-elle. Un rang par hiver, quelquefois deux. Les filles croient que c'est mon linceul. »",
      "Le motif court d'un bout à l'autre : des carreaux d'eau, des vagues, des petites roues. Dans la bordure, en fil blanc sur blanc, un mot court entre les picots, si fin que tu le prends d'abord pour une broderie : *{{loupe#iij_dent_saline|Sainte Anne, priez pour les fileuses et pour ceux qui tirent le sel|Sept bassins, la roue, et sous la roue la salle carrée. Descends par le bief à l'eau basse, quand le moulin se tait}}*.",
      { if: { lens: "loupe" }, text: "Tu approches la loupe d'ambre. Sous elle, les jours de la dentelle se mettent à luire par endroits, comme si le fil blanc avait été trempé dans une autre lumière.", else: "Tu te penches sur la dentelle. Le fil blanc se perd dans le fil blanc, et tes yeux ne suffisent pas." },
    ],
    choices: [
      { label: "« Vous me la lisez ? Mes yeux n'y arrivent pas. »", hide: { any: [{ voile: "iij_dent_saline" }, { lens: "loupe" }] }, fx: { devoile: "iij_dent_saline" }, to: "IIJ_dentelle_ecueils" },
      { label: "Lui demander s'il y a une autre dentelle", big: true, to: "IIJ_dentelle_ecueils" },
    ] },

  IIJ_dentelle_ecueils: { act: "II", title: "Le col", place: "joncs",
    text: [
      "Mère Ancolie roule la bande sans se presser, la noue de son fil rouge, puis va chercher sur l'étagère un col de dentelle jauni, plié dans un papier gris. « Celui-là est plus vieux que moi. C'est ma grand-mère qui l'a fait, d'après un col plus vieux encore. On le recopie de mère en fille, et on ne le porte jamais. »",
      "Le col est travaillé tout autour d'une phrase brodée en relief, presque effacée, que les dentellières lisent comme une prière de marins : *{{loupe#iij_dent_ecueils|Fil blanc, fil gris, fil de la mer, que Dieu garde ceux qui vont au large|Au phare de l'Ouïe, tais-toi, et écoute le mur qui écoute. Descends là où il se tait}}*.",
      "Ses doigts restent posés sur les tiens, sur le col, un moment. « Il y avait deux cornets, dit-elle. Le tien, et son jumeau. Le jumeau a été volé ici même, il y a vingt ans, par un jeune homme très poli qui disait vouloir apprendre la dentelle. Il portait déjà des gants. »",
      "Les épingles qui tiennent l'ouvrage sur son coussin sont {{pie|de simples épingles de laiton, noircies par l'usage|des épingles d'or, plantées là depuis si longtemps qu'elles ont pris la couleur du coussin}}.",
    ],
    choices: [
      { label: "Lui rendre le col", to: "IIJ_ancolie_maison" },
    ] },

  IIJ_lison_grandmere: { act: "II", title: "Deux voix", place: "joncs", with: "lison",
    text: [
      "Mère Ancolie appelle sa petite-fille près d'elle. Lison s'agenouille à côté du carreau et se met à démêler les fils de couleur, comme elle a dû le faire mille fois enfant. Elles parlent de choses de rien, devant toi, comme si tu n'étais pas là. Le cornet d'os, contre ton oreille, se met à trembler dès la première phrase.",
      "« Tu as bien gardé {{oreille#iij_lg_garde|la barque, cet hiver, malgré les glaces|l'os, tout ce temps. Et tu ne l'as pas repris. Pourquoi ?}} », demande Mère Ancolie.",
      "« La barque {{oreille#iij_lg_lison|prenait l'eau, je l'ai calfatée deux fois|est à lui maintenant. Je ne prends pas ce qu'on ne m'a pas volé}}, répond Lison sans lever le nez de ses fils. »",
      "« Alors {{oreille#iij_lg_ordre|ramène-la au ponton demain, je veux l'entendre flotter|ce soir, quand il dormira, tu me rapporteras l'os. Il repartira à la ville avec ses histoires, et nous, nous garderons les nôtres}}. »",
      "Lison tire sur un fil, qui casse. « {{oreille#iij_lg_refus|Demain, grand-mère, si le vent tombe|Non}}. »",
      { after: "lison:mission", text: "Tu sais déjà pourquoi Lison est venue te chercher à Salvèze. Tu l'entends maintenant de la bouche de celle qui l'a envoyée." },
    ],
    choices: [
      { label: "« Je vous entends toutes les deux. »", hide: { not: { voile: "iij_lg_ordre" } }, to: "IIJ_lison_aveu" },
      { label: "Faire semblant de n'avoir rien entendu", fx: { flag: "iij:semblant" }, to: "IIJ_lison_cornet" },
    ] },

  IIJ_lison_aveu: { act: "II", title: "Ce que doit faire Lison", place: "joncs", with: "lison",
    fx: { flag: "lison:mission", ep: ["perso", 800] },
    text: [
      "Lison se fige, un fil dans chaque main. Mère Ancolie, elle, sourit à son ouvrage, comme si on venait de lui faire un compliment.",
      { after: "lison:mission", text: "« Encore, souffle Lison. Tu m'écoutes encore avec ça. » Elle jette ses fils sur le coussin. « Oui. Elle veut que je reprenne l'os. Tu le sais depuis Salvèze. Elle veut que je le reprenne ce soir. Ça, tu ne le savais pas. »", else: "« Tu m'écoutes avec ça, dit Lison. Évidemment. » Elle jette ses fils sur le coussin. « Oui. Elle m'a envoyée à Salvèze pour voir ce que tu valais, et pour reprendre l'os si tu ne valais rien. Elle veut que je le reprenne ce soir. Voilà. Tu sais tout. »" },
      "« L'os ne doit pas tomber dans les mains de la Banque, dit Mère Ancolie, très calme. Ni dans les mains de quelqu'un qui n'a pas juré. Le jour où il n'a pas de maître, il revient ici, dans la troisième pièce, celle dont la porte est fermée. C'est la règle depuis Aymeric. Ma petite-fille connaît la règle. »",
      "« Ta petite-fille connaît aussi la Banque, dit Lison. Elle a vu ce qu'elle fait. Il a besoin de l'os pour aller aux Écueils. Et moi, j'ai besoin de lui. » Elle s'arrête net, rouge jusqu'aux cheveux. « {{oreille#iij_lison_besoin|Pour la barque. Il rame bien|Pour moi. Je ne sais pas encore ce que ça veut dire, et je n'ai pas envie qu'on me le dise}}. »",
    ],
    choices: [
      { label: "« Le cornet reste avec moi. Je le rendrai quand tout sera fini. »", fx: { flag: "iij:promesse_cornet", conf: { lison: 10 }, fac: { taiseurs: 5 } }, to: "IIJ_lison_cornet" },
      { label: "« Il était à Odeline. Il est à moi. »", fx: { conf: { lison: 3 }, fac: { taiseurs: -5 } }, to: "IIJ_lison_cornet" },
      { label: "Poser le cornet sur le coussin de Mère Ancolie", fx: { flag: "iij:cornet_offert", conf: { lison: 5 }, fac: { taiseurs: 15 } }, to: "IIJ_lison_offre" },
    ] },

  IIJ_lison_offre: { act: "II", title: "L'os sur le coussin", place: "joncs", with: "lison",
    fx: { ep: ["perso", 600] },
    text: [
      "Tu poses le cornet d'os sur le coussin, entre les fuseaux. Mère Ancolie entend le petit bruit de l'argent contre le bois. Ses mains s'arrêtent.",
      "Elle prend le cornet, le tourne entre ses doigts, suit du pouce la ligne gravée que personne ne sait lire. Ses lèvres bougent. Puis elle te le rend, en le posant dans ta paume et en refermant tes doigts dessus avec les siens, qui sont froids et très forts.",
      "« Une Vasse qui rend l'os sans qu'on le lui arrache, dit-elle. Ma sœur aurait pleuré. Garde-le. Ce soir, tu dormiras tranquille, et ma petite-fille aussi. »",
      "Lison regarde sa grand-mère comme si elle la voyait pour la première fois.",
    ],
    choices: [{ label: "Ranger le cornet dans sa poche", to: "IIJ_lison_cornet" }] },

  IIJ_lison_cornet: { act: "II", title: "La nuit, le cornet", place: "joncs", with: "lison", takes: "night",
    text: [
      "On t'a donné une paillasse dans la pièce commune de Mère Ancolie, sous la fenêtre. La lampe est éteinte. Tu entends la vieille femme respirer dans le lit clos, et l'eau sous le plancher, et le vent dans les roseaux.",
      "Au milieu de la nuit, une latte grince. Une ombre s'agenouille près de toi. Tu sens une main, légère, se poser sur ta hanche, sur la poche de cuir. Elle reste là.",
      { after: "iij:cornet_offert", text: "La main ne prend rien. Elle tapote la poche, deux fois, comme on flatte une bête, et s'en va. Tu entends Lison rire tout bas en se recouchant." },
      { if: { all: [{ not: { has: "iij:cornet_offert" } }, { conf: "lison", min: 50 }] }, text: "La main ne prend rien. Elle reste posée là un long moment, puis elle se retire. « Je t'avais dit que je te préviendrais la veille, chuchote Lison dans le noir. Je te préviens : ce ne sera pas cette nuit. »" },
      { if: { all: [{ not: { has: "iij:cornet_offert" } }, { not: { conf: "lison", min: 50 } }] }, text: "La main défait le lacet de la poche, très doucement. Tu sens le poids du cornet quitter ta hanche." },
    ],
    choices: [
      { label: "Attraper le poignet", hide: { any: [{ has: "iij:cornet_offert" }, { conf: "lison", min: 50 }] }, fx: { conf: { lison: -5 } }, to: "IIJ_ponton_nuit" },
      { label: "La laisser faire, et attendre le matin", hide: { any: [{ has: "iij:cornet_offert" }, { conf: "lison", min: 50 }] }, fx: { flag: "iij:lison_rend" }, to: "IIJ_ponton_nuit" },
      { label: "Te lever, et la suivre dehors", big: true, hide: { not: { any: [{ has: "iij:cornet_offert" }, { conf: "lison", min: 50 }] } }, to: "IIJ_ponton_nuit" },
    ] },

  IIJ_ponton_nuit: { act: "II", title: "Le ponton, la nuit", place: "joncs", with: "lison",
    fx: { conf: { lison: 5 } },
    text: [
      { after: "iij:lison_rend", text: "Au matin, le cornet est revenu dans sa poche, le lacet refait d'un nœud de batelier. Lison est assise au bout du ponton, les pieds au-dessus de l'eau. « J'ai passé la nuit avec ton os à l'oreille, dit-elle sans se retourner. Je n'ai rien entendu du tout. Il n'y avait que les grenouilles. » Elle te le dit comme une excuse, et c'en est une." },
      { if: { not: { has: "iij:lison_rend" } }, text: "Vous êtes dehors, sur le ponton, dans le froid. Lison s'assied au bout, les pieds au-dessus de l'eau, et tu t'assieds à côté d'elle. Dans le bassin, les anguilles chassent en faisant des ronds noirs. La lampe de sa grand-mère s'est éteinte pour la première fois de la nuit." },
      { tendre: true, text: "Elle pose sa tête contre ton épaule, sans prévenir, comme on pose une rame. « Iris m'avait promis un ruban de la ville, dit-elle. Rouge. Je l'ai attendu deux ans. » Elle ne bouge plus. Ses cheveux sentent la fumée du fumoir et le chanvre. Tu ne bouges pas non plus.", else: "Elle regarde l'eau. « Iris m'avait promis un ruban de la ville, dit-elle. Rouge. Je l'ai attendu deux ans. » Elle te donne un coup de coude, pas trop fort. « Tu lui ressembles un peu. Pas beaucoup. Elle, elle savait nager. »" },
      { after: "iij:semblant", text: "« Chez ma grand-mère, tu as fait semblant de ne rien entendre, dit Lison. Tu le fais très mal. Grand-mère a entendu ton silence, et moi aussi. »" },
      "« {{oreille#iij_lison_nuit|Je vais me coucher, il fait froid|Si ma grand-mère t'arrache l'os un jour, je le lui reprendrai}} », dit-elle en se levant.",
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_ancolie_tibere: { act: "II", title: "Le sergent et la Mère", place: "joncs", with: "tibere",
    fx: { ep: ["perso", 600] },
    text: [
      "Tibère s'assied sur le tabouret près de la porte, son chapeau sur les genoux. Mère Ancolie tourne vers lui ses yeux blancs, et ne dit rien pendant assez longtemps pour qu'il se mette à tourner son chapeau.",
      { if: { not: { has: "tibere:espion" } }, text: "« Vous écrivez beaucoup de lettres, sergent, dit-elle enfin. Pour un homme qui n'a plus de famille. » Tibère s'éclaircit la gorge. « J'écris {{oreille#iij_tib_lettres|à ma fille, Rosalie, quand j'ose|à la Banque, chaque lundi, cinq ducats la lettre, et je dis où vous dormez}}, dit-il. »" },
      { if: { has: "tibere:espion" }, text: "« Vous avez honte, sergent, dit-elle enfin. C'est un début. » Tibère regarde ses mains. « J'ai {{oreille#iij_tib_honte|fait mon métier, c'est tout|vendu un enfant de la maison d'Odeline pour payer des dés, et je continue parce que je ne sais pas comment on arrête}}, dit-il. »" },
      "« Ma fille ne me parle plus », ajoute-t-il, et sous cette phrase-là, le cornet ne trouve rien du tout.",
      "Mère Ancolie hoche la tête. « Une fille qui ne parle plus à son père, dit-elle, ça s'entend encore très bien. Il suffit de se taire assez longtemps à côté d'elle. »",
    ],
    choices: [
      { label: "« Tibère. Les lettres. Tu me les montreras avant de les envoyer. »", hide: { not: { any: [{ voile: "iij_tib_lettres" }, { has: "tibere:espion" }] } }, fx: { flag: "tibere:espion", conf: { tibere: 5 } }, to: "IIJ_ancolie_maison" },
      { label: "Laisser Tibère avec sa honte", fx: { conf: { tibere: 2 } }, to: "IIJ_ancolie_maison" },
    ] },

  IIJ_ancolie_gildas: { act: "II", title: "Le frère et la Mère", place: "joncs", with: "gildas",
    fx: { ep: ["perso", 500] },
    text: [
      "Frère Gildas monte l'escalier en tenant la rampe. Il s'arrête sur le seuil, rabat son capuchon, et salue la vieille femme : deux doigts au front, deux doigts aux lèvres.",
      "Mère Ancolie ne lui rend pas son salut. Elle ne s'arrête pas de travailler. « Vous avez fait une longue route, frère, dit-elle. {{oreille#iij_anc_gildas|Le Mont est loin d'ici, et vos jambes ne sont plus jeunes|Je sais ce que le Mont t'a confié, et je sais ce que ça pèse}}. »",
      "« La route est longue pour tout le monde, Mère, dit Gildas. Je prie pour ceux qui la font. »",
      "« Priez pour ceux qui la finissent », dit-elle. Ses fuseaux claquent. Gildas reste debout sur le seuil, les mains dans les manches, jusqu'à ce qu'elle lui dise de s'asseoir, et elle ne le dit pas.",
      { with: "lison", if: { has: "ib:gildas_joncs" }, text: "Lison, assise sur le coffre, regarde Frère Gildas, puis sa grand-mère. « C'est lui, dit-elle. À la Saint-Aymeric, il était assis à ta droite. » Mère Ancolie ne répond pas. Gildas baisse les yeux sur ses mains." },
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== back from the caches
Object.assign(P, {
  IIJ_retour_saline: { act: "II", title: "Le feuillet de la Saline", place: "joncs",
    fx: { ep: ["seance", 1200], fac: { taiseurs: 5 } },
    text: [
      "Mère Ancolie te fait asseoir en face d'elle et tend les deux mains, paumes en l'air. Tu y poses le feuillet de la Saline, encore raide de sel. Elle ne le déplie pas. Elle passe le bout des doigts sur le papier, sur le sceau, sur les bords.",
      "« Elle a signé ça de la main gauche, dit-elle. La droite, ils la lui avaient cassée aussi, la nuit des Comptoirs. On ne le dit pas dans les livres. » Elle te rend le feuillet. « Range-le bien. Deux feuillets dans un village de planches, c'est un appât. »",
      { after: "iij:dentelle_saline", text: "« Tu es descendu{e} par le bief, n'est-ce pas ? demande-t-elle. Ma dentelle dit vrai, alors. Soixante ans que je me demandais si je l'avais bien recopiée. »" },
      { with: "lison", text: "Lison s'est penchée sur le feuillet par-dessus l'épaule de sa grand-mère. Elle ne sait pas lire l'écriture de la reine. Elle regarde quand même, très longtemps." },
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_retour_ecueils: { act: "II", title: "La note des Écueils", place: "joncs",
    fx: { ep: ["seance", 1500] },
    text: [
      "Tu sors le diapason de Sorne et tu le frappes doucement contre le pied de chêne du carreau. La note monte dans la pièce et ne s'arrête pas tout à fait. Mère Ancolie lâche ses fuseaux.",
      "« Ma mère m'a parlé de ce son, dit-elle. Elle ne l'avait jamais entendu. » Elle reste immobile tant que la note dure. Ensuite, elle tourne la tête vers la fenêtre, vers le large. « Le vent va tourner au suroît. Ceux qui t'ont suivi{e} aux Écueils sont rentrés à Salvèze plus vite que toi, et ils savent maintenant où dorment les feuillets. »",
      "La pièce, au diapason, {{echo#iij_chambre|sent la cire, la laine et l'huile de la lampe|rend une voix d'enfant qui compte des fuseaux, et la voix d'Ancolie, plus jeune, qui dit : « Iris, recommence, tu as sauté le septième. »}}.",
      { with: "salome", text: "Salomé, restée près de la porte, regarde la vieille femme. « Vous avez dit que vous entendiez tout, dit-elle. Alors dites-moi. » Mère Ancolie tourne vers elle ses yeux blancs. « Vous retenez votre souffle depuis trois ans, capitaine, comme sous l'eau. » Salomé ne répond pas. « Elle {{oreille#iij_salome_ancolie|n'aimait pas qu'on parle d'elle|n'a pas lâché la corde. Je l'ai vue remonter. C'est la corde qui l'a lâchée}} », dit-elle enfin." },
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_tertre: { act: "II", title: "Le tertre des noyés", place: "joncs", backName: "le tertre des noyés",
    text: [
      "Le tertre est le seul morceau de terre des Joncs-Bas : une butte d'herbe rase, de la taille d'une grange, qu'on a montée à la pelle il y a des siècles avec la vase du bassin. Des poteaux de bois gris y sont plantés serrés, chacun gravé d'un nom. Les noms sont écrits à l'envers, de droite à gauche, comme on fait aux Joncs pour ceux que l'eau a pris : pour que la mer ne les reconnaisse pas, si elle revenait les chercher.",
      "Le vent {{echo#iij_tertre|couche l'herbe entre les poteaux, et fait claquer un ruban décoloré noué à l'un d'eux|rend la voix d'un homme qui jure, il y a très longtemps, devant d'autres hommes qui répètent après lui : « Sur la langue de la reine, je tairai. Sur mes mains, je garderai. »}}.",
      { after: "iij:mere", text: "Tu trouves le poteau d'Iris sans le chercher. *ESSAV SIRI.* Quelqu'un y a noué un ruban rouge, délavé jusqu'au rose, et le ruban est récent." },
      "Près de l'eau, un poteau plus neuf que les autres porte le nom d'un pêcheur mort l'automne dernier. Il {{pie#iij_poteau|est taillé dans du chêne de marais, comme les autres|est creux : on en a scié le pied, puis remis le bouchon, et le trait de scie est frais}}.",
    ],
    choices: [
      { label: "Ouvrir le poteau creux", hide: { any: [{ not: { voile: "iij_poteau" } }, { seen: "IIJ_tertre_poteau" }] }, to: "IIJ_tertre_poteau" },
      { label: "Rester un moment devant le poteau d'Iris", hide: { any: [{ not: { has: "iij:mere" } }, { has: "iij:iris_tertre" }] }, fx: { flag: "iij:iris_tertre", ep: ["perso", 400] }, to: "IIJ_tertre_iris" },
      { back: "II_hub" },
    ] },

  IIJ_tertre_iris: { act: "II", title: "Le poteau d'Iris", place: "joncs",
    text: [
      "Tu t'assieds dans l'herbe mouillée, le dos contre le poteau. Le bois est froid. Le ruban rose bat contre ta joue au rythme du vent.",
      "Tu cherches un souvenir d'elle. Il te vient une odeur de fumée et de chanvre, la même que celle de Lison, et rien d'autre : pas de visage, pas de voix.",
      { with: "lison", text: "Lison arrive par la passerelle et s'arrête à dix pas. Elle ne s'approche pas. Elle reste là, debout, le temps qu'il faut, puis elle s'en va sans rien dire." },
      { without: "lison", text: "Une barque passe dans le bassin. La femme qui rame te voit assis{e} là, devant ce poteau, et elle cesse de ramer un instant." },
    ],
    choices: [{ back: "IIJ_tertre" }] },

  IIJ_tertre_poteau: { act: "II", title: "Le poteau creux", place: "joncs",
    fx: { flag: "iij:boite_morte", ep: ["perso", 700], questSeen: "IIJ_q_espion" },
    text: [
      "Le bouchon tient par deux chevilles de bois. Tu les fais sauter avec la pointe de ta dague. Dedans, au sec, dans un cornet de toile cirée, trois lettres pliées, et une bourse de cuir avec quatre ducats neufs, frappés à la Monnaie de Salvèze.",
      "La première lettre est vieille de dix jours, d'une écriture de clerc appliqué : *{{loupe#iij_lettre_ardouin|Rien de neuf aux Joncs. Les pêcheurs pêchent, les femmes filent. Je rentrerai à la Saint-Jean|La vieille a un rouleau de dentelle qu'elle ne quitte pas. Elle reçoit la nuit. Le passeur Huchet sort la nuit avec du sel. La maison brûlée garde quelque chose : les vieux n'y mettent jamais le pied}}*. Pas de signature. Un petit besant dessiné au coin.",
      "Les deux autres lettres sont des réponses, fermées d'un cachet de cire grise : *Continuez. Le courrier passera par la douane à la nouvelle lune.*",
    ],
    choices: [
      { label: "Prendre les lettres et la bourse", fx: { gold: 80, flag: "iij:lettres_prises" }, back: "IIJ_tertre" },
      { label: "Tout remettre en place, et surveiller le poteau", fx: { flag: "iij:poteau_guet" }, back: "IIJ_tertre" },
    ] },

  IIJ_maison_vasse: { act: "II", title: "Les pieux brûlés", place: "joncs", backName: "les pieux brûlés de la maison Vasse",
    text: [
      "Il ne reste de la maison d'Aymeric Vasse qu'un carré de pieux noircis jusqu'à l'eau, plus gros que tous ceux du village, et quelques poutres effondrées dans la vase. Les Joncs n'y amarrent jamais leurs barques. Les enfants n'y jouent pas. Une bergeronnette sautille sur la poutre du seuil, la seule restée à peu près droite.",
      "Le vent {{echo#iij_aymeric|siffle dans les pieux brûlés et fait trembler l'eau entre eux|ramène une voix d'homme, posée, la voix de quelqu'un qui dicte : « Le fuseau d'ambre sous le seuil, pour celle qui filera la dernière. Que la Banque brûle la maison, elle ne brûlera pas l'eau. »}}.",
      "La poutre du seuil {{pie#iij_seuil|est noire de suie, comme le reste|porte, sous la suie, une encoche taillée de main d'homme, juste à la hauteur de l'eau basse}}.",
    ],
    choices: [
      { label: "Chercher sous le seuil, dans la vase", hide: { any: [{ seen: "IIJ_maison_vasse_seuil" }, { not: { any: [{ voile: "iij_aymeric" }, { voile: "iij_seuil" }] } }] }, to: "IIJ_maison_vasse_seuil" },
      { label: "Fouiller les décombres à l'aveugle, à marée basse", hide: { any: [{ seen: "IIJ_maison_vasse_seuil" }, { voile: "iij_aymeric" }, { voile: "iij_seuil" }] }, test: { dom: "nature", diff: -20, label: "Fouiller la vase", help: [{ if: { has: "metier:mains" }, v: 15 }, { with: "lison", v: 10 }] },
        win: { to: "IIJ_maison_vasse_seuil" }, lose: { fx: { pv: -2, time: 2 }, back: "II_hub" } },
      { back: "II_hub" },
    ] },

  IIJ_maison_vasse_seuil: { act: "II", title: "Sous le seuil", place: "joncs",
    fx: { item: "iij_tr_fuseau", clock: { tresors: 1 }, flag: "tresor:iij_fuseau", ep: ["seance", 1000] },
    text: [
      "Tu attends l'eau basse, et tu descends dans la vase jusqu'aux genoux, à l'aplomb de l'encoche. Tes doigts trouvent la pierre d'abord : une dalle plate, scellée au pied du pieu avec du plomb. Sous la dalle, un creux. Dans le creux, une boîte de corne grosse comme une main, fermée à la cire.",
      "Dedans, roulé dans un morceau de lin pourri, un fuseau de dentellière taillé dans un ambre clair, couleur de miel. Quand tu le roules entre tes doigts, il rend un son très doux, à peine audible, qui ressemble à la note du diapason.",
      { with: "lison", text: "Lison le regarde dans ta paume sans le toucher. « Grand-mère dit que la dernière fileuse des Vasse aura un fuseau d'ambre, souffle-t-elle. On croyait que c'était une façon de parler. »" },
      { if: { has: "iij:mere" }, text: "*Pour celle qui filera la dernière.* Tu penses à Iris, qui faisait la plus belle dentelle des Joncs." },
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_ecole: { act: "II", title: "La comptine", place: "joncs",
    fx: { clue: "iij_c_comptine", ep: ["perso", 400] },
    text: [
      "Sur l'échelle de la maison commune, une demi-douzaine d'enfants sont assis un par barreau, du plus petit en bas au plus grand en haut. Une vieille dentellière tricote au pied de l'échelle et leur fait réciter une comptine. Chaque enfant dit un vers, puis monte d'un barreau.",
      "« *La reine a perdu {{oreille#iij_comptine|son mouchoir|sa langue}} au marché,* chante le petit du bas. *Sept muets l'ont {{oreille|ramassé|ramassée}}, sept muets l'ont {{oreille|lavé|cachée}}.* »",
      "« Encore, dit la vieille. Et cette fois, pensez-le en le disant. » Les enfants recommencent. Le cornet d'os tremble plus fort sous les mêmes mots.",
      "Le plus grand, en haut de l'échelle, te regarde et te tire la langue, une langue rose, entière, et il rit.",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== life in the village
Object.assign(P, {
  IIJ_maison: { act: "II", title: "La maison commune", place: "joncs", backName: "la maison commune",
    text: [
      { first: true, text: "De jour, la maison commune sert à tout. Au fond, on répare les filets sur de grands cadres de bois ; au milieu, trois vieilles trient des fuseaux par essence, buis, cormier, os ; près de la porte, un pêcheur fend des anguilles sur une planche et les jette dans un baquet de saumure. Contre le mur, sous la cloche, un grand coffre de chêne cerclé de fer, fermé de trois serrures." },
      { again: true, when: "day", text: "La maison commune, ses filets, ses fuseaux, l'odeur de saumure. Les vieilles te saluent maintenant d'un signe de tête." },
      { again: true, when: "night", text: "La maison commune, la nuit : un seul brasero allumé, deux hommes qui jouent aux osselets, et le grand coffre sous la cloche, dans l'ombre." },
      "Le coffre {{pie#iij_coffre|est un vieux coffre de mariée, comme on en trouve dans toutes les maisons des marais|a un fond plus haut à l'intérieur qu'à l'extérieur : deux doigts de différence, juste assez pour un double fond}}.",
      { after: "iij:voile_rendu", text: "Le voile de la Muette est retourné dans son coffre. Thècle a changé les trois serrures." },
    ],
    choices: [
      { label: "Thècle et les dentellières préparent la fête de la dentelle", hide: { seen: "IIJ_fete" }, to: "IIJ_fete" },
      { label: "Des cris, sous la galerie des Tessier", hide: { seen: "IIJ_pilotis" }, to: "IIJ_pilotis" },
      { back: "II_hub" },
    ] },

  IIJ_nasse: { act: "II", title: "La Nasse", place: "joncs", backName: "la Nasse", shop: "iij_nasse", taverne: { mise: 20, adversaire: "un pêcheur d'anguilles" },
    fx: { meet: "iij_fortunee" },
    text: [
      { first: true, text: "La Nasse est une seule pièce de planches posée sur douze pieux, avec un comptoir fait d'une coque de barque retournée et sciée en long. Au plafond pendent des anguilles fumées, des bottes d'ail, des lanternes, et une vraie nasse d'osier où dort un chat roux. Ça sent le vin de prune, la tourbe et le poisson. Une femme ronde au chignon serré essuie des gobelets derrière la coque." },
      { first: true, text: "« Fortunée, dit-elle. Je sers à boire, je sers à manger, je prête sur gages et je n'entends rien. » Elle te dévisage. « {{oreille#iij_fortunee|Vous avez une tête que je ne connais pas|Vous avez la tête du placard, et le placard vaut cent ducats, et je ne suis pas riche}}. »" },
      { again: true, when: "day", text: "La Nasse, presque vide à cette heure : deux vieux qui jouent aux dés, le chat roux dans sa nasse, Fortunée qui compte ses gages dans un cahier." },
      { again: true, when: "night", text: "La Nasse le soir, bondée, enfumée, bruyante. On joue à la Chandelle près de la fenêtre. Fortunée passe entre les tables avec son pichet." },
      { with: "tibere", when: "night", text: "Tibère s'est installé au bout du comptoir, devant un gobelet. Il regarde les dés des autres tables avec une envie qu'il ne cache pas." },
      { again: true, after: "iij:voile_repris", text: "Fortunée a fait poser un second moraillon sur son coffre à gages, avec un cadenas de la ville. Elle te sert sans te regarder." },
      { again: true, after: "tresor:iij_bague", once: true, text: "Le fumoir a raconté à Fortunée la bague d'or rouge de la Mère-Anguille. « Six ducats, quand tu voudras, te dit-elle. Je la garderai pour celle qui viendra la réclamer. Il en vient toujours une. »" },
    ],
    choices: [
      { label: "Écouter les tables", to: "IIJ_nasse_rumeurs" },
      { label: "T'asseoir à côté de Tibère, au comptoir", with: "tibere", hide: { seen: "IIJ_tibere_soir" }, to: "IIJ_tibere_soir" },
      { label: "Monter voir qui écrit à la chandelle, dans la soupente", hide: { any: [{ not: { has: "iij:lettre_nasse" } }, { seen: "IIJ_espion_soupente" }] }, to: "IIJ_espion_soupente" },
      { label: "« Fortunée, le voile de la Muette est passé par vos mains. »", hide: { any: [{ not: { has: "iij:voile_piste" } }, { has: "iij:voile_rendu" }, { has: "iij:voile_perdu" }] }, to: "IIJ_voile_fortunee" },
      { back: "II_hub" },
    ] },

  IIJ_nasse_rumeurs: { act: "II", title: "Les tables de la Nasse", place: "joncs",
    fx: { ep: ["perso", 400] },
    text: [
      "À la table du fond, trois sauniers de Grisemotte, les mains crevassées de sel, boivent sans parler, puis parlent d'un coup. « Les maîtres sauniers {{oreille#iij_sauniers|ont eu une bonne année, il paraît|ont signé avec la Banque à la Chandeleur : le sel de Grisemotte lui appartient pour dix ans, et nous avec}} », dit le plus vieux.",
      "Près de la fenêtre, des marins de Port-Vasier jouent aux dés. L'un parle d'une capitaine qui ne plonge plus. « Brac ? {{oreille|Elle vend sa gabare, à ce qu'on dit|Elle ne vendra jamais sa gabare. Elle attend qu'on lui donne une raison de retourner aux Écueils}}. »",
      "Au comptoir, un colporteur explique à Fortunée que la Veuve Corbière, à Port-Vasier, {{oreille|achète toutes les épaves de la côte au prix fort|ne paie plus personne depuis que la Banque lui a pris ses deux meilleures barques}}.",
      { after: "mandat", text: "Personne, à aucune table, ne parle du placard. Tout le monde le regarde, cloué au montant de la porte, en passant." },
    ],
    choices: [{ back: "IIJ_nasse" }] },

  IIJ_tibere_soir: { act: "II", title: "Le gobelet de Tibère", place: "joncs", with: "tibere", takes: "evening",
    fx: { conf: { tibere: 3 }, ep: ["perso", 400] },
    text: [
      "Tibère pousse un gobelet vers toi sans te regarder. Le vin de prune des Joncs est clair comme de l'eau et brûle comme de la braise.",
      "« Ma fille avait une robe de cette couleur, dit-il en montrant les lanternes jaunes. Pour ses quatorze ans. Je l'avais payée avec un gain aux dés. Elle l'a su. Elle l'a rendue au drapier. » Il boit. « {{oreille#iij_tib_rosalie|Elle avait raison, elle a toujours raison|Je l'ai revendue, la robe. Je ne lui ai jamais dit}}. »",
      { if: { not: { has: "tibere:espion" } }, text: "« Je n'aime pas ce village, ajoute-t-il. {{oreille|Trop d'eau, pas assez de pavés|Trop de gens qui entendent ce qu'on pense. Je dors mal, ici}}. »" },
      { if: { has: "tibere:espion" }, text: "« Tu sais ce que je fais, dit-il. Je sais que tu sais. » Il tourne son gobelet. « {{oreille|Je n'ai rien écrit depuis Salvèze|J'ai écrit hier. J'ai écrit que tu dormais chez une vieille aveugle. Je n'ai pas écrit son nom}}. »" },
    ],
    choices: [
      { label: "Lui parler de Rosalie", fx: { conf: { tibere: 5 } }, back: "IIJ_nasse" },
      { label: "Payer la tournée suivante (un ducat)", fx: { gold: -20, conf: { tibere: 3 } }, back: "IIJ_nasse" },
      { back: "IIJ_nasse" },
    ] },

  IIJ_dentellieres: { act: "II", title: "La passerelle des dentellières", place: "joncs", backName: "la passerelle des dentellières",
    fx: { meet: "iij_thecle" },
    text: [
      { first: true, text: "La passerelle de l'est est la plus large du village, et la mieux exposée. Vingt femmes y travaillent en rang, assises sur des tabourets bas, leur carreau sur les genoux, de la plus jeune, qui a dix ans, à la plus vieille, qui n'en sait plus le compte. Les fuseaux claquent sans arrêt, et ce bruit-là couvre tous les autres." },
      { again: true, text: "La passerelle des dentellières, le claquement des fuseaux. Thècle surveille le rang depuis son tabouret, au milieu." },
      "Thècle te montre, d'un mouvement de menton, ce qu'on vend aux marchands de la ville : des cols, des manchettes, des bandes au mètre. « Les dames de Salvèze paient au poids d'argent, dit-elle. Elles ne savent pas ce qu'elles portent. » Un col, sur le dessus de la pile, {{pie#iij_col_faux|est le plus beau du lot, plus fin que tous les autres|est un col de Port-Vasier, fait au crochet par des mains pressées, que Thècle a glissé dans le lot pour voir si tu remarquerais}}.",
      "Au bout du rang, une jeune fille aux tresses rousses travaille plus vite que toutes les autres, sans lever la tête. « Jacinthe Tessier, dit Thècle. Les meilleures mains des Joncs. {{oreille#iij_thecle_jacinthe|Elle ira loin|Elle partira, et elle emportera quelque chose qui n'est pas à elle}}. »",
      { again: true, if: { all: [{ has: "iij:jacinthe_tue" }, { not: { has: "iij:jacinthe_partie" } }] }, text: "Au bout du rang, Jacinthe Tessier lève les yeux quand tu passes, et pose un doigt sur ses lèvres. Thècle la croit toujours la plus sûre des bonnes mains." },
    ],
    choices: [
      { label: "« Ce col-là est du crochet de Port-Vasier. »", hide: { any: [{ not: { voile: "iij_col_faux" } }, { has: "iij:col_vu" }] }, fx: { flag: "iij:col_vu", fac: { hautes: 5 }, ep: ["perso", 300] }, to: "IIJ_dentellieres_thecle" },
      { label: "Parler à Jacinthe", hide: { not: { seen: "IIJ_fete" } }, to: "IIJ_voile_jacinthe" },
      { back: "II_hub" },
    ] },

  IIJ_dentellieres_thecle: { act: "II", title: "Le col de Port-Vasier", place: "joncs",
    text: [
      "Thècle reprend le col du bout des doigts et le jette derrière elle, dans un panier. Elle te regarde enfin, de face. « Bien, dit-elle. Ça fait trois marchands de la ville que je teste avec celui-là. Ils l'ont tous pris en premier. »",
      "Elle frappe deux fois son fuseau contre son carreau, et tout le rang fait de même, sans lever la tête. « La Mère a raison, dit-elle. Tu as des yeux. Il te manque peut-être encore les oreilles. »",
    ],
    choices: [{ back: "IIJ_dentellieres" }] },

  IIJ_ponton: { act: "II", title: "Le ponton des pêcheurs", place: "joncs", backName: "le ponton des pêcheurs",
    text: [
      { first: true, text: "Le ponton des pêcheurs avance dans le bassin sur cinquante pas. Sous les planches, attachés aux pieux, des paniers d'osier immergés où tournent les anguilles du jour, vivantes, en attendant le fumoir ou le marché. Les pêcheurs y démaillent leurs nasses, y réparent leurs gaffes, y règlent leurs comptes, y dorment parfois." },
      { again: true, when: "day", text: "Le ponton au soleil, les nasses empilées, les pêcheurs accroupis. Cyprien fume sa pipe de terre au bout, assis sur un tonneau." },
      { again: true, when: "night", text: "Le ponton la nuit, désert, sauf deux lanternes au bout où l'on prépare les lignes de fond. Dessous, les paniers remuent." },
      "Ardouin Mesle, le bonnet rouge, répare une nasse un peu à l'écart des autres. Ses nœuds {{pie#iij_noeuds|sont serrés et réguliers, des nœuds de pêcheur|sont des nœuds de marin de rivière, les nœuds qu'on fait sur les gabares de la Salve, et pas un seul nœud des marais}}.",
      { before: "iij:espion_pris", text: "Quand tu passes, il te salue d'un « bonjour » trop poli pour un pêcheur." },
      "Plus loin, un colporteur de Port-Vasier a ouvert sa boîte sur un tonneau et montre des bijoux de pacotille aux femmes qui passent.",
    ],
    choices: [
      { label: "Parler à Cyprien de l'homme au bonnet rouge", hide: { seen: "IIJ_espion" }, to: "IIJ_espion" },
      { label: "Aller à la pêche de nuit avec Cyprien", hide: { seen: "IIJ_peche" }, to: "IIJ_peche" },
      { label: "La boîte du colporteur", hide: { seen: "IIJ_marchand" }, to: "IIJ_marchand" },
      { label: "Le fumoir de la veuve Corre", hide: { seen: "IIJ_fumoir" }, to: "IIJ_fumoir" },
      { back: "II_hub" },
    ] },

  IIJ_marchand: { act: "II", title: "La perle des marais", place: "joncs",
    text: [
      "Le colporteur a de beaux yeux tristes et une moustache cirée. Il te prend tout de suite pour quelqu'un qui a de l'argent. Il sort de sa boîte un carré de velours, le déplie avec lenteur : dedans, une grosse perle grise, ronde comme un pois chiche.",
      "« Une perle des marais, dit-il. On en trouve une tous les dix ans, dans une moule d'eau douce, au fond de la grande coulée. Celle-là {{pie#iij_perle|a l'orient laiteux des vraies perles d'eau douce, avec ce reflet rose qu'on ne peut pas imiter|est une bille de verre trempée dans de la colle d'écaille, et le reflet rose vient d'un trait de cochenille passé au pinceau}}. Trois ducats. Pour vous. »",
      { with: "lison", text: "Lison regarde la perle par-dessus ton épaule et ne dit rien. Elle a la bouche d'une fille qui s'empêche de rire." },
    ],
    choices: [
      { label: "Acheter la perle (trois ducats)", fx: { gold: -60, item: "iij_tr_perle" }, back: "IIJ_ponton" },
      { label: "« Votre perle est en verre, et votre rose est de la cochenille. »", hide: { not: { voile: "iij_perle" } }, fx: { fac: { hautes: 5 }, ep: ["perso", 300], gold: 10 }, to: "IIJ_marchand_fin" },
      { label: "Le laisser à ses clientes", back: "IIJ_ponton" },
    ] },

  IIJ_marchand_fin: { act: "II", title: "Le colporteur", place: "joncs",
    text: [
      "Le colporteur replie son velours très vite. Autour du tonneau, les femmes qui regardaient se mettent à rire, puis à parler toutes à la fois. Une grosse fumeuse d'anguilles lui prend son chapeau sur la tête et le jette dans le bassin.",
      "Il te glisse une pièce dans la main en passant, d'un geste de prestidigitateur. « Pour votre silence, la prochaine fois, dit-il tout bas. Je passe à la Saline jeudi. Là-bas, personne ne regarde de si près. »",
    ],
    choices: [{ back: "IIJ_ponton" }] },

  IIJ_fumoir: { act: "II", title: "Le fumoir", place: "joncs",
    fx: { meet: "iij_eulalie" },
    text: [
      "Le fumoir est un long bâtiment bas, sans fenêtre, où la fumée de tourbe et d'aulne te pique les yeux dès la porte. Des milliers d'anguilles pendent aux perches, fendues, dorées, luisantes. La veuve Corre, Eulalie, une femme maigre aux bras rouges, retourne les braises avec une pelle de fer.",
      "« Vous êtes celui de la Mère, dit-elle. Asseyez-vous, ça vous fumera aussi. » Elle te tend une anguille chaude, que tu manges avec les doigts. « Les Tessier vous ont parlé de moi ? {{oreille#iij_eulalie|Ce sont de braves gens, au fond|Ils vous ont dit que c'était moi qui laissais pourrir le pilotis. C'est faux, et je peux le prouver si on veut bien plonger}}. »",
      "Le plancher du fumoir {{pie#iij_fumoir|est noirci par des années de fumée, et colle aux semelles|sonne creux près du mur du fond : dessous, un double plancher bourré de sacs de sel en fraude, du sel de Grisemotte sans le plomb de la douane}}.",
    ],
    choices: [
      { label: "« Il y a du sel sous votre plancher, Eulalie. »", hide: { not: { voile: "iij_fumoir" } }, fx: { flag: "iij:sel_fraude", ep: ["perso", 300] }, to: "IIJ_fumoir_sel" },
      { back: "IIJ_ponton" },
    ] },

  IIJ_fumoir_sel: { act: "II", title: "Le sel du fumoir", place: "joncs",
    text: [
      "Eulalie pose sa pelle. « Pas le mien, dit-elle. Celui du petit Huchet, Sylvain, le neveu de Cyprien. Il le passe de nuit depuis la Saline, et je le garde au sec, et il me paie en anguilles. Tout le monde le sait aux Joncs. Tout le monde, sauf la douane. »",
      "Elle te regarde. « Si vous cherchez qui sort la nuit sur le bassin avec une lanterne, c'est lui, le plus souvent. Mais pas toujours. Les nuits sans lune, c'est quelqu'un d'autre. Sylvain ne sort jamais sans lune : il a peur de l'eau noire. »",
    ],
    choices: [{ back: "IIJ_ponton" }] },
});

// ==================================================================== night fishing, the customs raid
Object.assign(P, {
  IIJ_peche: { act: "II", title: "La pêche de nuit", place: "joncs", takes: "night",
    text: [
      "Cyprien t'emmène à la nuit tombée dans une barque plate, sans lanterne. Vous posez les lignes de fond à la sortie du bassin, là où l'eau du marais rencontre l'eau du chenal : cent hameçons boëttés de vers de vase, sur une corde lestée de pierres. Puis on attend, couchés dans la barque, en regardant les étoiles. Cyprien raconte des histoires de pêche, toutes à double fond.",
      "Vers minuit, la corde se tend d'un coup et la barque pivote. Quelque chose de lourd tire vers le fond, puis remonte, et tu vois passer sous la surface, dans la lueur des étoiles, un dos noir plus long que la barque.",
      "« La Mère-Anguille, souffle Cyprien. Cinquante ans que je la cherche. Elle a mangé deux de mes doigts de pied et la moitié de mes lignes. » Il te tend la gaffe. « Elle est à toi, si tu la veux. »",
      { with: "lison", text: "Lison, à la proue, a déjà sorti son couteau à démailler. Elle rit tout bas, les yeux brillants." },
    ],
    choices: [
      { label: "La gaffer et la tirer à bord", fight: { title: "La Mère-Anguille", enemies: [{ id: "iij_mere_anguille", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["seance", 1000], fac: { hautes: 5 } }, to: "IIJ_peche_fin" }, lose: { fx: { pv: -4 }, to: "IIJ_peche_lache" },
        flee: { label: "Couper la ligne", dom: "nature", diff: 0, to: "IIJ_peche_lache" } } },
      { label: "La fatiguer à la ligne, des heures s'il le faut", test: { dom: "nature", diff: -10, label: "Épuiser la Mère-Anguille", help: [{ with: "lison", v: 15 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { fx: { ep: ["seance", 1000], fac: { hautes: 5 }, time: 3 }, to: "IIJ_peche_fin" }, lose: { fx: { time: 3 }, to: "IIJ_peche_lache" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison gaffe l'anguille" },
        win: { fx: { ep: ["seance", 800], conf: { lison: 3 } }, to: "IIJ_peche_fin" }, lose: { to: "IIJ_peche_lache" } },
      { label: "« Laissons-la. Elle a cinquante ans. »", fx: { fac: { hautes: 3 }, food: 2 }, to: "IIJ_peche_lache" },
    ] },

  IIJ_peche_fin: { act: "II", title: "La Mère-Anguille", place: "joncs",
    fx: { item: "iij_tr_bague", clock: { tresors: 1 }, flag: "tresor:iij_bague", food: 3 },
    text: [
      "Elle est couchée en travers de la barque, de la proue à la poupe, plus grosse que ta cuisse, et elle bouge encore. Cyprien l'achève d'un coup de maillet, puis il reste assis longtemps à la regarder, les mains sur les genoux.",
      "Au matin, au fumoir, Eulalie Corre la fend devant tout le village. Dans l'estomac, au milieu des écrevisses et des cailloux, quelque chose brille : une bague d'or rouge, un peu tordue. À l'intérieur, deux initiales usées, *J. et C.*, et une date que l'or a mangée.",
      "« Elle est à celui qui a pris la bête, dit Cyprien. C'est la loi des Joncs. » Le fumoir approuve d'un murmure.",
    ],
    choices: [{ back: "IIJ_ponton" }] },

  IIJ_peche_lache: { act: "II", title: "La ligne coupée", place: "joncs",
    text: [
      "La Mère-Anguille s'en va avec la moitié de la ligne et trente hameçons. Tu la sens partir dans tes mains, une dernière secousse, puis plus rien que l'eau. Cyprien rit dans le noir, un rire de vieux, sans amertume.",
      "« Cinquante ans, dit-il. Elle en fera bien cinquante autres. » Au retour, vous relevez le reste des lignes : une vingtaine d'anguilles ordinaires, de quoi manger trois jours. Cyprien t'en donne la moitié.",
    ],
    choices: [{ back: "IIJ_ponton" }] },

  IIJ_rafle: { act: "II", title: "La douane", place: "joncs",
    fx: { meet: "iij_escoffier" },
    text: [
      "La cloche de la maison commune sonne à toute volée, trois coups, puis trois encore. Sur le bassin, toutes les barques se mettent à rentrer en même temps. Au bout du chenal, deux longues barques noires approchent à la rame, chacune avec six hommes en casaque noire au besant d'or. Les douaniers de la Banque.",
      "Cyprien passe près de toi sans s'arrêter. « {{oreille#iij_rafle_cyprien|Va voir ta grand-tante, elle te demande|Sous le ponton, troisième panier à gauche, il est vide. Respire par le joint des planches}} », dit-il entre ses dents.",
      "Les barques accostent. Un homme trapu monte le premier sur le ponton, une moustache grise, un registre sous le bras. « Brigadier Escoffier, de la douane du sel, dit-il à la cantonade. Nous cherchons {{oreille#iij_escoffier|du sel passé en fraude depuis la Saline|une personne recherchée pour meurtre, et la Banque paie cent ducats, dont j'en garderai cinquante}}. Que tout le monde reste où il est. »",
      { with: "tibere", text: "Tibère a remonté son col et baissé son chapeau. Il connaît ce genre d'homme. Il a été ce genre d'homme." },
    ],
    choices: [
      { label: "Te glisser sous le ponton, dans le panier vide", hide: { not: { voile: "iij_rafle_cyprien" } }, fx: { ep: ["perso", 400] }, to: "IIJ_rafle_fin" },
      { label: "Te cacher sous le ponton, parmi les paniers à anguilles", test: { dom: "discretion", diff: -10, label: "Disparaître sous le ponton", help: [{ with: "lison", v: 10 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIJ_rafle_fin" }, lose: { to: "IIJ_rafle_face" } },
      { label: "Aller au-devant du brigadier, un ducat entre les doigts", hide: { not: { voile: "iij_escoffier" } }, fx: { gold: -20, flag: "iij:soudoie" }, to: "IIJ_rafle_face" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Un ancien sergent parle à un brigadier" },
        win: { fx: { conf: { tibere: 5 }, ep: ["perso", 400] }, to: "IIJ_rafle_fin" }, lose: { to: "IIJ_rafle_face" } },
    ] },

  IIJ_rafle_face: { act: "II", title: "Le brigadier", place: "joncs",
    text: [
      { after: "iij:soudoie", text: "Tu marches droit sur le brigadier et tu lui mets la pièce dans la main en la lui serrant, comme on salue un vieil ami. « Cinquante ducats, c'est beaucoup de route pour un seul visage, dis-tu à voix basse. Et ce placard ne ressemble à personne. » Escoffier regarde la pièce, puis ton visage, puis le placard qu'il a dans son registre.", else: "Escoffier te voit. Il ouvre son registre, en sort le placard, et le tient à bout de bras à côté de ton visage, en plissant les yeux." },
      "« Celui-là, dit-il. Celui-là, peut-être. » Derrière lui, quatre douaniers montent sur le ponton, la pique basse. Autour, les pêcheurs ne bougent pas. Ils ont tous, à la main, leur couteau à démailler.",
      "Cyprien s'avance d'un pas. « {{oreille#iij_cyprien_douane|C'est mon neveu, brigadier. Il est de la famille|Tu as quatre hommes sur le ponton et nous sommes quarante. Tu peux compter, je t'ai vu faire}} », dit-il tranquillement.",
    ],
    choices: [
      { label: "Laisser Cyprien finir sa phrase, et le brigadier faire son compte", to: "IIJ_rafle_fin" },
      { label: "Frapper le premier", fight: { title: "Les douaniers de la Banque", enemies: [{ id: "iij_gabelou", n: 3 }],
        win: { fx: { fac: { banque: -10, hautes: 5 }, ep: ["seance", 1000], flag: "iij:douane_battue" }, to: "IIJ_rafle_fin" },
        lose: { fx: { pv: -5, gold: -40, flag: "iij:douane_battue" }, to: "IIJ_rafle_fin" } } },
    ] },

  IIJ_rafle_fin: { act: "II", title: "Les barques noires", place: "joncs",
    fx: { fac: { hautes: 5 } },
    text: [
      { if: { has: "iij:douane_battue" }, text: "Les douaniers repartent en emportant leurs blessés. Escoffier se retourne une dernière fois, debout dans sa barque, et crie quelque chose que le vent emporte. Tu sais qu'il reviendra, et en plus grand nombre.", else: "Escoffier referme son registre. « Rien ici, dit-il assez fort pour que tout le ponton entende. Des anguilles, du roseau et des vieilles. » Il remonte dans sa barque. Les douaniers le suivent." },
      "Une fois les barques noires sorties du chenal, le ponton reprend son bruit ordinaire. Une dentellière te met dans la main une galette encore tiède.",
      "Avant de partir, tu l'as vu, le brigadier a échangé deux mots avec l'homme au bonnet rouge, au bout du ponton, en lui tournant le dos, comme deux inconnus qui se demandent l'heure.",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== side quest: the extra fisherman (the Bank's spy)
Object.assign(P, {
  IIJ_espion: { act: "II", title: "Le pêcheur de trop", place: "joncs",
    fx: { meet: "iij_ardouin" },
    text: [
      "Cyprien ne lève pas les yeux de sa pipe. « Le bonnet rouge ? Ardouin Mesle. Il est arrivé de Port-Vasier il y a trois semaines, avec une barque neuve et des nasses neuves, et il a loué la soupente de Fortunée. Il pêche peu. Il ne vend rien. Il paie tout en ducats neufs. »",
      "« Les nuits sans lune, quelqu'un allume une lanterne au bout du bassin, du côté de la coulée, et la cache, et la rallume. Trois fois. Le lendemain, la douane passe. » Il tire sur sa pipe. « Ici, {{oreille#iij_cyprien_espion|on ne dénonce personne, ce n'est pas notre manière|on ne peut pas le chasser sans preuve : la Mère l'interdit, et la moitié du ponton a peur que ce soit le petit, mon neveu}}. »",
      { after: "iij:surveille", text: "« Et toi, ajoute-t-il, tu es surveillé. Tant que tu n'auras rien fait pour les Joncs, on te regardera comme on le regarde, lui. »" },
    ],
    choices: [
      { label: "« Je te trouverai ta preuve. »", fx: { fac: { hautes: 3 } }, to: "IIJ_espion_suspects" },
      { label: "« Ton neveu ? »", to: "IIJ_espion_suspects" },
      { label: "« Ce ne sont pas mes affaires. »", refuse: true, to: "IIJ_ponton" },
    ] },

  IIJ_espion_suspects: { act: "II", title: "Trois réponses", place: "joncs",
    fx: { meet: "iij_sylvain" },
    text: [
      "Tu poses des questions de rien, l'après-midi, sur le ponton, à la Nasse, dans les barques, comme on fait quand on cherche un objet perdu : à tout le monde, et surtout à ceux qui n'ont rien perdu.",
      "Sylvain Huchet, le neveu, un grand garçon aux épaules de rameur, rit trop fort quand tu lui demandes ce qu'il fait la nuit. « Je sors {{oreille#iij_sylvain|pour les anguilles, comme mon oncle|pour le sel de la Saline, mais jamais sans lune : j'ai peur de l'eau noire depuis que j'ai vu passer un noyé}}. »",
      "Fortunée, à la Nasse, essuie son comptoir. « Ma soupente, je la loue {{oreille#iij_fortunee_soupente|à qui paie, je ne demande pas les noms|au bonnet rouge, et il paie double pour que je n'y monte jamais}}. »",
      "Ardouin Mesle, enfin, sur le ponton, te regarde approcher en souriant, et ne cesse pas de nouer. « Je {{oreille#iij_ardouin|pêche ici depuis trois semaines, comme tout le monde. L'anguille est bonne|suis ici depuis trois semaines. Dans trois de plus, je serai riche, ou je serai au fond du bassin}}, dit-il. Vous êtes de la ville, vous aussi. On se comprend. »",
    ],
    choices: [
      { label: "Le suivre, la prochaine nuit sans lune", hide: { seen: "IIJ_espion_nuit" }, to: "IIJ_espion_nuit" },
      { label: "Accuser Ardouin devant le ponton", big: true, to: "IIJ_espion_accuse" },
      { label: "Accuser Sylvain devant le ponton", hide: { any: [{ voile: "iij_sylvain" }, { has: "iij:sel_fraude" }] }, to: "IIJ_espion_erreur" },
      { label: "Chercher encore", back: "IIJ_ponton" },
    ] },

  IIJ_espion_nuit: { act: "II", title: "La nuit sans lune", place: "joncs", takes: "night",
    text: [
      "Tu attends la nuit sans lune, couché{e} dans une barque amarrée sous la passerelle, une couverture sur la tête. Le village s'éteint galerie par galerie. Vers minuit, une échelle grince du côté de la Nasse. Une silhouette descend dans une barque, sans lanterne, et s'éloigne vers la coulée à la pagaie, à petits coups silencieux.",
      { with: "lison", text: "Lison est à l'arrière de ta barque. Elle détache l'amarre sans un mot et pousse sur sa gaffe. Votre barque glisse derrière l'autre." },
    ],
    choices: [
      { label: "Suivre la barque à distance", test: { dom: "discretion", diff: -10, label: "Suivre une barque dans le noir", help: [{ with: "lison", v: 20 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { flag: "iij:preuve_signal", ep: ["perso", 600] }, to: "IIJ_espion_signal" }, lose: { to: "IIJ_espion_repere" } },
      { label: "Laisse-moi faire", who: "lison", fx: { flag: "iij:preuve_signal", conf: { lison: 2 } }, to: "IIJ_espion_signal" },
    ] },

  IIJ_espion_signal: { act: "II", title: "La lanterne", place: "joncs",
    text: [
      "Au bout du bassin, là où la coulée commence, la silhouette s'arrête. Elle sort de sous son banc une lanterne sourde, ouvre le volet, le ferme, l'ouvre, le ferme. Trois fois. Très loin dans la coulée, une autre lumière répond, deux fois.",
      "Puis l'homme se tourne pour repartir, et la lueur de sa propre lanterne, au dernier éclair, passe sur un bonnet rouge.",
      { with: "lison", text: "Lison laisse filer votre barque dans les roseaux. « Bon, souffle-t-elle. Ça, c'est une preuve. Cyprien va être content. Il déteste avoir tort sur son neveu. »" },
    ],
    choices: [{ back: "IIJ_espion_suspects" }] },

  IIJ_espion_repere: { act: "II", title: "La souche", place: "joncs",
    text: [
      "Ta gaffe heurte une souche. Le bruit court sur l'eau. Devant, la barque s'arrête net, puis repart vers le village, beaucoup plus vite, sans plus se cacher.",
      "Le lendemain matin, Ardouin Mesle te salue sur le ponton d'un grand sourire. « Bien dormi ? dit-il. On dit que l'air du bassin est mauvais, la nuit. On y attrape la fièvre. » Il n'y aura plus de lanterne avant longtemps. Il te faudra une autre preuve.",
    ],
    choices: [{ label: "Chercher autrement", to: "IIJ_espion_suspects" }] },

  IIJ_espion_soupente: { act: "II", title: "La soupente", place: "joncs", takes: "evening",
    fx: { questSeen: "IIJ_q_espion" },
    text: [
      "Tu quittes la veillée, ou la table, et tu montes l'échelle de la soupente de la Nasse en posant les pieds au bord des barreaux, là où ils ne grincent pas. Sous la porte, une lumière de chandelle.",
      "Ardouin Mesle est assis sur sa paillasse, une planchette sur les genoux, et il écrit. Il a ôté son bonnet rouge. Sur la planchette, à côté de l'encrier, un petit flacon d'eau claire et un pinceau. Il trempe le pinceau dans le flacon et écrit entre les lignes d'une lettre déjà écrite à l'encre.",
      "Il lève les yeux. Il ne cherche pas à cacher la lettre. Il pose le pinceau, très doucement.",
    ],
    choices: [{ label: "Entrer", big: true, fx: { flag: "iij:preuve_soupente" }, to: "IIJ_espion_face" }] },

  IIJ_espion_erreur: { act: "II", title: "Le mauvais pêcheur", place: "joncs",
    fx: { fac: { hautes: -5 } },
    text: [
      "Tu accuses Sylvain Huchet devant le ponton. Il devient blanc, puis rouge. Cyprien, à côté, ne dit rien, et c'est pire.",
      "Sylvain finit par t'emmener au fumoir, et il soulève lui-même les planches du fond : des sacs de sel, du sel de Grisemotte sans le plomb de la douane. « Voilà ce que je fais la nuit, dit-il. Et jamais sans lune. Tout le village le sait. » Il remet les planches en place, et sort sans te regarder.",
      "Au bout du ponton, Ardouin Mesle a suivi la scène en réparant sa nasse. Il a l'air de bien s'amuser.",
    ],
    choices: [{ label: "Chercher la vraie preuve", to: "IIJ_espion_suspects" }] },

  IIJ_espion_accuse: { act: "II", title: "Devant le ponton", place: "joncs",
    text: [
      "Tu attends le soir, l'heure où tout le village est au ponton à décharger les nasses, et tu dis tout haut, au milieu des pêcheurs : « Ardouin Mesle travaille pour la Banque. »",
      "Le ponton se tait. Ardouin pose sa nasse. « Voilà une accusation, dit-il aimablement. Il faudrait la prouver. On n'est pas à Salvèze, ici. Ici, on ne pend pas les gens sur un placard. »",
      { after: "iij:preuve_nasse", text: "Tu prends sous son banc la nasse neuve et tu retournes un des plombs vers la lumière : le besant de la Banque, frappé net." },
      { after: "iij:preuve_lettre", text: "Tu sors de ta poche la lettre du poteau creux, et tu la tends à Cyprien." },
      { if: { all: [{ has: "iij:lettres_prises" }, { not: { has: "iij:preuve_lettre" } }] }, text: "Tu poses sur le ponton les lettres du poteau creux, et les réponses au cachet de cire grise. Cyprien en lit une à voix haute, en suivant les lignes du doigt." },
      { after: "iij:poteau_guet", text: "Tu racontes le tertre : deux soirs couché{e} dans l'herbe entre les poteaux, et le deuxième soir, Ardouin Mesle à genoux devant le poteau du pêcheur mort, qui en retirait le bouchon." },
      { after: "iij:preuve_signal", text: "Tu racontes la lanterne, les trois éclairs, la réponse dans la coulée, et le bonnet rouge dans la lueur." },
      { after: "voile:iij_noeuds", text: "Tu montres ses nœuds aux pêcheurs : des nœuds de gabare de la Salve, et pas un nœud des marais. Deux vieux se penchent, et hochent la tête." },
    ],
    choices: [
      { label: "Le regarder droit dans les yeux", big: true, hide: { not: { any: [{ has: "iij:preuve_nasse" }, { has: "iij:preuve_lettre" }, { has: "iij:lettres_prises" }, { has: "iij:poteau_guet" }, { has: "iij:preuve_signal" }, { voile: "iij_noeuds" }] } }, to: "IIJ_espion_face" },
      { label: "« Riche, ou au fond du bassin. C'est ce que tu m'as dit. »", hide: { not: { voile: "iij_ardouin" } }, to: "IIJ_espion_face" },
      { label: "Bluffer : dire que tu as vu ses lettres", test: { dom: "social", diff: -20, label: "Bluffer devant tout le ponton", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { has: "iij:boite_morte" }, v: 20 }] },
        win: { to: "IIJ_espion_face" }, lose: { fx: { fac: { hautes: -3 } }, to: "IIJ_espion_echec" } },
    ] },

  IIJ_espion_echec: { act: "II", title: "Sans preuve", place: "joncs",
    text: [
      "Ardouin écarte les mains, paumes ouvertes, et se tourne vers les pêcheurs. « Vous voyez ? Rien. Une personne recherchée par la ville accuse un pêcheur honnête. Je vous laisse juges. » Les pêcheurs se regardent, les bras ballants. Cyprien secoue la tête, lentement, vers toi.",
      "Ardouin reprend sa nasse. Il est content, et il a tort de l'être : désormais tout le ponton le regarde, et toi tu sais où chercher.",
    ],
    choices: [{ label: "Chercher une vraie preuve", to: "IIJ_espion_suspects" }] },

  IIJ_espion_face: { act: "II", title: "Le bonnet rouge", place: "joncs",
    fx: { ep: ["perso", 800] },
    text: [
      { after: "iij:preuve_soupente", text: "« Encre de citron, dit Ardouin en montrant le flacon. À la chaleur, ça remonte. Votre loupe d'ambre ferait la même chose sans chandelle, je suppose. Il m'a parlé de votre loupe. »", else: "Ardouin Mesle ne nie plus. Il regarde les pêcheurs autour de lui, puis la coulée, puis toi. Il fait le compte." },
      "« Je m'appelle bien Ardouin, dit-il. Le reste est faux. J'étais clerc à la douane du sel avant d'être pêcheur. On me paie dix ducats la semaine pour écrire ce que fait la vieille, et ce que vous faites. » Il sourit. « {{oreille#iij_ardouin_peur|Je ne regrette rien|S'il apprend que vous m'avez démasqué, je suis mort. Lui ne pardonne pas qu'on rate}}. »",
      { with: "tibere", text: "Tibère regarde Ardouin comme on regarde son reflet dans une flaque, et détourne les yeux." },
    ],
    choices: [
      { label: "Le saisir avant qu'il saute dans sa barque", fight: { title: "Ardouin Mesle", enemies: [{ id: "iij_ardouin", n: 1 }], spare: true,
        win: { fx: { fac: { hautes: 10, banque: -5 }, ep: ["seance", 1200] }, to: "IIJ_espion_pris" },
        lose: { fx: { pv: -4 }, to: "IIJ_espion_fuite" },
        calm: { to: "IIJ_espion_pris" } } },
      { label: "« Tu continueras d'écrire. C'est moi qui te dicterai. »", hide: { not: { voile: "iij_ardouin_peur" } }, to: "IIJ_espion_double" },
      { label: "« Va-t'en. Ce soir. Et ne remets jamais le pied aux Joncs. »", fx: { fac: { hautes: 3 } }, to: "IIJ_espion_fuite" },
    ] },

  IIJ_espion_pris: { act: "II", title: "La barque d'Ardouin", place: "joncs",
    fx: { quest: "IIJ_q_espion", flag: "iij:espion_pris", fac: { hautes: 5 }, ep: ["seance", 1000] },
    text: [
      "Les pêcheurs lient Ardouin Mesle avec ses propres lignes, sans brutalité, comme on lie une bête qu'on emmène au marché. Cyprien prend son bonnet rouge et le plante au bout d'une perche, au milieu du ponton.",
      "« On le gardera au fumoir, dit-il. Il y fera chaud. Et le jour où la Banque viendra le chercher, elle saura que les Joncs ont des oreilles. »",
      { after: "iij:surveille", text: "Les deux pêcheurs qui te suivaient des yeux depuis ton arrivée viennent te serrer la main, l'un après l'autre, sans un mot." },
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_espion_double: { act: "II", title: "Les lettres qu'on dicte", place: "joncs",
    fx: { quest: "IIJ_q_espion", flag: "iij:espion_double", fac: { hautes: 5, taiseurs: 5 }, ep: ["seance", 1500] },
    text: [
      "Ardouin Mesle reste longtemps silencieux. Puis il hoche la tête, une fois. Il reprend sa planchette, et tu lui dictes sa prochaine lettre : *La vieille a envoyé ses papiers à Port-Vasier par un saunier. {hero} part pour la Saline dans trois jours. Rien de neuf au village.*",
      "« Il entend, dit Ardouin à voix basse en écrivant. Lui. S'il me lit, il entendra que c'est faux. » Tu regardes l'encre. « Il entend ce qu'on dit, réponds-tu. Une lettre ne dit rien. »",
      "Cyprien, qui a tout suivi depuis l'échelle, a un petit rire de gorge. « Une Vasse, dit-il. On s'en serait douté. »",
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_espion_fuite: { act: "II", title: "Le bassin vide", place: "joncs",
    fx: { quest: "IIJ_q_espion", flag: "iij:espion_fui", ep: ["perso", 600] },
    text: [
      "Ardouin Mesle saute du ponton dans sa barque et file vers la coulée en ramant comme un forçat. Les pêcheurs le regardent partir, appuyés sur leurs gaffes. À la sortie du bassin, il se retourne une fois, puis disparaît dans les roseaux.",
      "Il a laissé sur le ponton son bonnet rouge et ses nasses neuves. Les enfants les récupèrent avant la nuit. Le lendemain, il n'y a plus un plomb au besant dans tout le village : ils sont tous partis en lest sous les barques des Joncs.",
      "« Il ira tout raconter, dit Cyprien. Tant pis. La Banque sait déjà où on habite. »",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== side quest: the quarrel over the stilts
Object.assign(P, {
  IIJ_pilotis: { act: "II", title: "La querelle des pilotis", place: "joncs",
    fx: { meet: "iij_vivien" },
    text: [
      "Deux maisons se touchent presque, au rang de l'ouest : celle des Tessier, peinte en bleu, et celle de la veuve Corre, grise comme son fumoir. Entre les deux, un pilotis commun porte un coin de chacune. Depuis l'hiver, il penche. Les deux galeries penchent avec lui, et la porte des Tessier ne ferme plus.",
      "Vivien Tessier, un charpentier aux mains larges comme des pelles, crie depuis sa galerie. Eulalie Corre crie depuis la sienne. Une dizaine de voisins écoutent en faisant semblant de réparer des filets.",
      "« Ce pilotis {{oreille#iij_vivien|est à elle, c'est à elle de le changer, c'est écrit dans l'acte de son mari|est à moi. Je l'ai planté de travers il y a vingt ans, saoul, le soir de mes noces, et je n'ai jamais osé le dire}} ! » hurle Vivien.",
      "« Son père à lui l'a planté, crie Eulalie. C'est à lui de le payer, et à moi de le regarder tomber ! »",
    ],
    choices: [
      { label: "Plonger voir le pied du pilotis", to: "IIJ_pilotis_plonge" },
      { label: "Prendre Vivien à part, et lui dire ce que tu as entendu", hide: { not: { voile: "iij_vivien" } }, fx: { flag: "iij:vivien_aveu" }, to: "IIJ_pilotis_jugement" },
      { label: "« Je paie la moitié du pieu neuf. » (deux ducats)", fx: { gold: -40, flag: "iij:pilotis_paye" }, to: "IIJ_pilotis_jugement" },
      { label: "Laisser les voisins à leur dispute", refuse: true, to: "IIJ_maison" },
    ] },

  IIJ_pilotis_plonge: { act: "II", title: "Sous les maisons", place: "joncs",
    text: [
      "L'eau est froide à couper le souffle, et brune. Tu descends le long du pilotis en te tenant aux algues, une corde à la taille dont Vivien tient le bout. Au fond, la vase t'avale jusqu'aux genoux.",
      { with: "lison", text: "Lison plonge derrière toi, sans corde, et passe de l'autre côté du pieu comme une loutre." },
    ],
    choices: [
      { label: "Tâter le pied du pieu, à l'aveugle, jusqu'au bout de ton souffle", test: { dom: "nature", diff: -10, label: "Fouiller le fond sans voir", help: [{ with: "lison", v: 15 }, { if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIJ_pilotis_coffre" }, lose: { fx: { pv: -2 }, to: "IIJ_pilotis_remonte" } },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 2 }, ep: ["perso", 400] }, to: "IIJ_pilotis_coffre" },
    ] },

  IIJ_pilotis_remonte: { act: "II", title: "Le souffle court", place: "joncs",
    text: [
      "Tu remontes trop vite, la poitrine en feu, et tu t'agrippes à la galerie en crachant de l'eau brune. Vivien te hisse d'une main. « Personne n'y voit rien, là-dessous, dit-il. Mon père y est resté une fois. »",
      "Tu as eu le temps de sentir, sous tes doigts, un angle de bois dur dans la vase, au pied du pieu, quelque chose de carré. Et le pied du pieu lui-même, lisse d'un côté, comme coupé.",
    ],
    choices: [
      { label: "Redescendre, en sachant cette fois où chercher", fx: { time: 1 }, to: "IIJ_pilotis_coffre" },
      { label: "Aller dire aux deux voisins ce que tu as senti", to: "IIJ_pilotis_jugement" },
    ] },

  IIJ_pilotis_coffre: { act: "II", title: "Au pied du pieu", place: "joncs",
    fx: { item: "iij_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iij_sceau" },
    text: [
      "Le pied du pieu {{pie#iij_scie|est rongé par les tarets, comme tous les vieux pieux des Joncs|a été scié aux trois quarts, d'un trait net, à la scie de charpentier, il y a moins d'un mois : le bois est encore blond dans la coupe}}.",
      "Dans la vase, contre le pieu, tes doigts trouvent une petite boîte de plomb, carrée, de la taille d'une main, que la sciure de la coupe a à moitié recouverte. Tu remontes avec elle serrée contre ta poitrine.",
      "Sur la galerie, tu l'ouvres au couteau. Dedans, dans un chiffon de cuir, un cachet d'argent noirci au manche de corne : un croissant sous un chef. Vivien se signe. « Les armes des Vasse, dit Eulalie, plus bas. Le pieu était à eux, avant d'être à nous. Tout ici était à eux. »",
    ],
    choices: [
      { label: "« Quelqu'un a scié votre pilotis. Ni l'un ni l'autre. »", hide: { not: { voile: "iij_scie" } }, fx: { flag: "iij:scie_dite" }, to: "IIJ_pilotis_jugement" },
      { label: "Rendre compte aux deux voisins", to: "IIJ_pilotis_jugement" },
    ] },

  IIJ_pilotis_jugement: { act: "II", title: "Le jugement des pilotis", place: "joncs",
    fx: { quest: "IIJ_q_pilotis", flag: "iij:pilotis", ep: ["seance", 1000] },
    text: [
      { after: "iij:scie_dite", text: "Tu le dis devant les deux galeries : le pied est scié, d'un trait frais, à la scie de charpentier de gabare. Vivien Tessier regarde ses propres mains. Eulalie Corre regarde la coulée, du côté de Port-Vasier. « Quelqu'un voulait qu'on se batte, dit-elle. On l'a bien servi. » Les voisins posent leurs filets." },
      { after: "iij:vivien_aveu", text: "Tu dis à Vivien, tout bas, sous sa galerie, le soir de ses noces et le pieu de travers. Il devient très rouge, puis il éclate de rire, un rire énorme qui fait se retourner tout le rang. Il traverse la passerelle, tend la main à Eulalie, et lui dit quelque chose à l'oreille. Elle le gifle, puis elle rit aussi." },
      { after: "iij:pilotis_paye", text: "Tu poses deux ducats sur la rambarde, à égale distance des deux galeries. Ni Vivien ni Eulalie ne veut les prendre le premier. Ils finissent par les ramasser ensemble, et par se partager le reste du prix en grognant." },
      { if: { not: { any: [{ has: "iij:scie_dite" }, { has: "iij:vivien_aveu" }, { has: "iij:pilotis_paye" }] } }, text: "Tu racontes ce que tu as trouvé là-dessous. Les deux voisins se taisent assez longtemps pour que les autres se remettent à réparer leurs filets pour de vrai." },
      "Le lendemain, la moitié du village plante un pieu neuf entre les deux maisons, à la masse, au chant, en se relayant. Vivien Tessier taille l'encoche. Eulalie Corre apporte des anguilles fumées pour tout le monde.",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== side quest: the veil of the lace feast
Object.assign(P, {
  IIJ_fete: { act: "II", title: "Le voile de la Muette", place: "joncs",
    fx: { meet: "iij_jacinthe" },
    text: [
      "Les dentellières ont tiré le grand coffre de chêne au milieu de la maison commune. Thècle a ouvert les trois serrures avec trois clés pendues à son cou. Elle regarde l'intérieur du coffre, et les autres femmes regardent Thècle.",
      "« La fête de la dentelle tombe à la prochaine nouvelle lune, te dit-elle sans se retourner. Ce jour-là, on promène le voile de la Muette autour des Joncs, dans la barque de la plus vieille, et la plus jeune le tient. Trois cents ans qu'on le fait. » Elle se redresse. « Le voile n'est plus dans le coffre. Les trois serrures étaient fermées. »",
      "« On dit que tu cherches les choses perdues, à la ville. {{oreille#iij_thecle_voile|Cherche-le, on te paiera|Cherche-le sans bruit. Si on le sait au ponton, une de nos filles sera chassée des Joncs avant le soir}}. »",
    ],
    choices: [
      { label: "Examiner le coffre", to: "IIJ_voile_coffre" },
      { label: "« Je le trouverai. »", back: "IIJ_maison" },
      { label: "« Je n'ai pas le temps. »", refuse: true, back: "IIJ_maison" },
    ] },

  IIJ_voile_coffre: { act: "II", title: "Le coffre aux trois serrures", place: "joncs",
    text: [
      "Tu fais ce qu'Odeline t'a appris : d'abord les serrures, puis les charnières, puis le fond. Les serrures n'ont pas été forcées. Les charnières sont rouillées et propres. Le fond {{pie#iij_coffre2|est un fond de chêne d'un seul tenant|se soulève quand on presse le coin gauche : un double fond, vide, qu'aucune des trois clés n'ouvre}}.",
      { after: "voile:iij_coffre2", text: "Dans le double fond, accroché à une écharde, un cheveu roux, long, frisé par une tresse." },
      { after: "voile:iij_coffre", text: "Tu avais déjà remarqué les deux doigts de différence, entre l'intérieur et l'extérieur." },
      "Thècle te regarde faire, les bras croisés. « Le double fond, dit-elle enfin, seules trois personnes le connaissent : moi, la Mère, et celle qui tient le voile à la fête. Cette année, c'est la plus jeune des bonnes mains. »",
    ],
    choices: [
      { label: "« Jacinthe Tessier. »", fx: { flag: "iij:voile_jacinthe" }, to: "IIJ_voile_jacinthe" },
      { label: "Interroger les dentellières une à une", test: { dom: "social", diff: -10, label: "Faire parler la passerelle", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { flag: "iij:voile_jacinthe" }, to: "IIJ_voile_jacinthe" }, lose: { fx: { time: 3 }, to: "IIJ_voile_jacinthe" } },
    ] },

  IIJ_voile_jacinthe: { act: "II", title: "Jacinthe", place: "joncs",
    text: [
      "Jacinthe Tessier ne s'arrête pas de travailler quand tu t'assieds près d'elle, au bout de la passerelle. Ses doigts vont si vite que les fuseaux font un bruit continu, comme une pluie.",
      { if: { seen: "IIJ_fete" }, text: "« Le voile ? dit-elle. Je {{oreille#iij_jacinthe|ne l'ai pas touché depuis la dernière fête. Demandez à Thècle, c'est elle qui a les clés|l'ai mis en gage chez Fortunée, pour deux ducats. C'est le prix d'une place sur la gabare de Salvèze. Je voulais le racheter avant la fête, avec mes premiers gages de la ville}}. »", else: "« Vous voulez un col ? demande-t-elle. Thècle fixe les prix. Moi, je fais. »" },
      { if: { seen: "IIJ_fete" }, text: "Elle lève les yeux une seconde, vers le chenal du nord, celui qui mène à la ville, et les rebaisse. Sous la tresse, tu vois que ses cheveux sont roux." },
    ],
    choices: [
      { label: "« Je sais où est le voile. Je vais le chercher chez Fortunée. »", hide: { any: [{ not: { seen: "IIJ_fete" } }, { not: { voile: "iij_jacinthe" } }] }, fx: { flag: "iij:voile_piste", conf: { lison: 2 } }, back: "II_hub" },
      { label: "« Ton cheveu était dans le double fond. »", hide: { any: [{ not: { seen: "IIJ_fete" } }, { voile: "iij_jacinthe" }, { not: { any: [{ has: "iij:voile_jacinthe" }, { voile: "iij_coffre2" }] } }] }, fx: { flag: "iij:voile_piste" }, to: "IIJ_voile_aveu" },
      { back: "IIJ_dentellieres" },
    ] },

  IIJ_voile_aveu: { act: "II", title: "Les deux ducats", place: "joncs",
    text: [
      "Jacinthe pose ses fuseaux. Pour la première fois, ses mains ne bougent plus. « Chez Fortunée, dit-elle. Pour deux ducats. C'est le prix d'une place sur la gabare de Salvèze. »",
      "« Je voulais le racheter avant la fête, avec mes premiers gages de la ville, et le renvoyer par un saunier. Je n'ai pas eu de gages. J'ai eu peur de partir. » Elle regarde ses mains. « Je fais les meilleures dentelles des Joncs, et les dames de la ville les paient au poids d'argent à des marchands qui nous les paient au poids de la paille. Je voulais voir la ville. C'est tout. »",
    ],
    choices: [{ label: "« Je vais le chercher chez Fortunée. »", back: "II_hub" }] },

  IIJ_voile_fortunee: { act: "II", title: "Le gage", place: "joncs",
    text: [
      "Fortunée ouvre un coffre derrière la coque du comptoir et en sort un paquet de toile cirée, qu'elle pose devant toi sans le défaire. « {{oreille#iij_fortunee_voile|Le gage est le gage. Deux ducats et les intérêts, trois|Je ne voulais pas le prendre. Je n'ose pas le rendre sans qu'on me rembourse : si je le rends gratis, demain toutes les filles des Joncs viendront me mettre leurs mères en gage}}, dit-elle. »",
      { with: "lison", text: "Lison pose les coudes sur le comptoir, très près de Fortunée. « Fortunée. Tu as fait sauter Jacinthe sur tes genoux. »" },
    ],
    choices: [
      { label: "Payer trois ducats", fx: { gold: -60 }, to: "IIJ_voile_retrouve" },
      { label: "« Je te rembourse deux ducats devant témoins, et tout le ponton saura que tu as rendu le voile. »", hide: { not: { voile: "iij_fortunee_voile" } }, fx: { gold: -40, fac: { hautes: 3 } }, to: "IIJ_voile_retrouve" },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "social", diff: 0, label: "Lison fait honte à Fortunée" },
        win: { fx: { conf: { lison: 3 } }, to: "IIJ_voile_retrouve" }, lose: { to: "IIJ_voile_vole" } },
      { label: "Revenir cette nuit, quand la Nasse sera fermée", test: { dom: "discretion", diff: -20, label: "Reprendre le voile dans le coffre de Fortunée", help: [{ if: { item: "crochets" }, v: 15 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { flag: "iij:voile_repris" }, to: "IIJ_voile_retrouve" }, lose: { to: "IIJ_voile_vole" } },
    ] },

  IIJ_voile_vole: { act: "II", title: "Le colporteur", place: "joncs",
    text: [
      "Fortunée referme son coffre d'un coup sec. Le lendemain matin, quand tu reviens, il est vide. « Je l'ai vendu, dit-elle sans te regarder. Au colporteur de Port-Vasier, celui à la perle. Quatre ducats. Il est parti à l'aube vers la Saline. »",
      "Tu cours au ponton. La barque du colporteur est un point dans le chenal des sauniers. Cyprien, sur son tonneau, suit ton regard. « Avec ma barque et deux rameurs, dit-il, on le rattrape à la passe. Sans eux, le voile sera vendu à Salvèze avant la fête. »",
    ],
    choices: [
      { label: "Prendre la barque de Cyprien et rattraper le colporteur", test: { dom: "nature", diff: -10, label: "Rattraper une barque dans le chenal", help: [{ with: "lison", v: 20 }, { with: "salome", v: 15 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIJ_voile_retrouve" }, lose: { to: "IIJ_voile_perdu" } },
      { label: "Laisser filer le voile", to: "IIJ_voile_perdu" },
    ] },

  IIJ_voile_retrouve: { act: "II", title: "Le voile", place: "joncs",
    fx: { ep: ["perso", 800] },
    text: [
      "Tu défais la toile cirée. Le voile de la Muette est plus petit que tu ne croyais : un carré de dentelle jaunie de deux pieds de côté, si vieux que le fil a pris la couleur du thé. Au centre, une couronne. Autour, sept petites figures qui portent la main à leur bouche.",
      "Dans la bordure, une ligne de points serrés que les dentellières croient décorative : *{{loupe#iij_voile_loupe|Sept muets pour une reine, sept fils pour un voile|À la Grande Basse, la reine sort de l'eau par la porte des fileuses, à l'ouest, sous le signe du fuseau}}*.",
      { with: "lison", text: "Lison touche le bord du voile du bout d'un doigt. « Je l'ai tenu à la fête, il y a quinze ans, dit-elle. J'avais peur de le mouiller. »" },
    ],
    choices: [
      { label: "Le rapporter à Thècle, et taire le nom de Jacinthe", fx: { fac: { hautes: 5 }, flag: "iij:jacinthe_tue" }, to: "IIJ_fete_soir" },
      { label: "Le rapporter à Thècle, et lui dire la vérité", fx: { fac: { taiseurs: 3 } }, to: "IIJ_fete_soir" },
      { label: "Le rapporter, et donner à Jacinthe deux ducats pour la gabare", fx: { gold: -40, flag: ["iij:jacinthe_tue", "iij:jacinthe_partie"], fac: { hautes: 3 } }, to: "IIJ_fete_soir" },
    ] },

  IIJ_fete_soir: { act: "II", title: "La fête de la dentelle", place: "joncs", takes: "evening",
    fx: { quest: "IIJ_q_voile", flag: "iij:voile_rendu", item: "iij_tr_col", clock: { tresors: 1 }, ep: ["seance", 1500] },
    text: [
      "À la nouvelle lune, les Joncs-Bas allument toutes leurs lanternes. La barque de Mère Ancolie fait le tour du village, poussée par Cyprien à la gaffe. La vieille femme est assise à la poupe, droite, les yeux blancs grands ouverts sur la nuit. Le voile de la Muette est tendu entre les mains de la plus jeune des bonnes mains, debout à la proue.",
      { after: "iij:jacinthe_partie", text: "Ce n'est pas Jacinthe qui le tient. Jacinthe est partie le matin, sur la gabare de Salvèze, avec deux ducats dans sa chaussure et un carreau de dentelle sous le bras. C'est une gamine de onze ans qui tient le voile, et qui ne respire pas.", else: "C'est Jacinthe Tessier qui le tient, les bras raides, la figure blanche. Quand la barque passe sous ta galerie, elle te regarde une seconde, et le voile tremble à peine." },
      "Sur les passerelles, tout le village chante, et c'est une chanson de fileuses dont tu comprends les mots, sauf qu'au cornet, chaque couplet en dit un autre, plus ancien, où il est question d'une reine et de sept hommes qui se taisent.",
      { with: "lison", tendre: true, text: "Après la procession, on danse sur la maison commune, une ronde qui fait trembler les pieux. Lison te prend la main sans demander, et ne la lâche pas quand la ronde se défait.", else: "Après la procession, on danse sur la maison commune, une ronde qui fait trembler les pieux. Lison danse avec tous les pêcheurs du ponton, l'un après l'autre, et te marche exprès sur le pied en passant." },
      "Tard dans la nuit, Thècle t'apporte un col de dentelle plié dans un papier gris, filé de lin et d'un fil d'argent. « Pour toi, dit-elle. Ne le vends pas aux dames de la ville. Ou alors, très cher. »",
    ],
    choices: [{ back: "II_hub" }] },

  IIJ_voile_perdu: { act: "II", title: "La fête sans voile", place: "joncs", takes: "evening",
    fx: { quest: "IIJ_q_voile", flag: "iij:voile_perdu", fac: { hautes: -3 } },
    text: [
      "À la nouvelle lune, les Joncs-Bas allument toutes leurs lanternes, et la barque de Mère Ancolie fait le tour du village. À la proue, une gamine tient entre ses mains un carré de toile blanche, sans un fil de dentelle, et le tient comme si c'était l'autre.",
      "Le village fait comme si. Les chants sont les mêmes. Thècle, sur la passerelle, chante plus fort que tout le monde, la mâchoire serrée.",
      "Quelque part à Salvèze, chez un marchand des Halles, le voile de la Muette pend à un clou, à côté de cols de Port-Vasier, à vendre au poids de l'argent.",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== the routes: written legs
Object.assign(P, {
  IIJ_leg_saline: { act: "II", title: "Le chenal des sauniers",
    fx: { ep: ["perso", 500] },
    text: [
      "Le chenal des sauniers est droit comme un trait de règle, creusé de main d'homme il y a des siècles, bordé de levées de terre où pousse une herbe grise et salée. Plus on avance, plus l'eau est claire, et plus les rives blanchissent : des croûtes de sel, d'abord en taches, puis en plaques, puis partout.",
      "Au loin, sur la plaine, les bassins de la Saline de Grisemotte s'étagent en damier, d'un blanc qui fait mal aux yeux, et au milieu, sur une digue, la masse sombre du moulin à marée avec sa grande roue à aubes immobile.",
      { after: "iij:dentelle_saline", text: "Tu comptes les bassins sans le vouloir. Sept, autour de la roue. Comme sur la dentelle." },
      { with: "lison", text: "« Les maîtres sauniers ont des maisons de pierre, dit Lison en poussant sur sa gaffe. Les sauniers ont des huttes. Les maîtres parlent à la Banque. Les sauniers chantent. Écoute-les chanter, si tu veux savoir quelque chose. »" },
      { with: "gildas", text: "Frère Gildas trempe la main dans l'eau et la porte à ses lèvres. Il fait une grimace. « Le Mont achète son sel ici, dit-il. Je ne savais pas qu'il venait de si près de la mer. »" },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_leg_vasier1: { act: "II", title: "La chaîne des Trois-Saules",
    text: [
      "La grande coulée descend vers la mer en larges méandres paresseux, entre des prés salés où paissent des chevaux à demi sauvages. Vers le soir, trois saules apparaissent sur une butte, penchés au-dessus de l'eau, et la barque s'arrête net.",
      "Une chaîne de fer barre le chenal d'une rive à l'autre, tendue entre deux gros pieux, à fleur d'eau. Sur l'un des pieux, une plaque de cuivre clouée : *Passage fermé par ordre de la douane du sel. Péage à Port-Vasier.* La plaque {{pie#iij_plaque|est neuve et bien gravée|est neuve, mais les clous sont rouillés depuis des années : on a posé la plaque sur une ancienne chaîne de pêcherie, et la douane n'a jamais eu de droit ici}}.",
      { after: "iij:v1_ok", text: "*La chaîne est rouillée au troisième pieu*, a dit Cyprien. Tu comptes les pieux de la rive gauche : il y en a trois, et le troisième penche." },
    ],
    choices: [
      { label: "Attaquer le maillon rouillé du troisième pieu, à la gaffe", hide: { not: { has: "iij:v1_ok" } }, fx: { ep: ["perso", 600], fac: { hautes: 5 }, flag: "iij:chaine_coupee" }, to: "IIJ_leg_vasier1_passe" },
      { label: "Briser la chaîne à coups de masse", test: { dom: "combat", diff: -10, label: "Forcer une chaîne de fer", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { flag: "iij:chaine_coupee", fac: { hautes: 5 } }, to: "IIJ_leg_vasier1_passe" }, lose: { fx: { pv: -2, time: 4 }, to: "IIJ_leg_vasier1_passe" } },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 2 } }, to: "IIJ_leg_vasier1_passe" },
      { label: "Décharger la barque et la faire glisser par-dessus la chaîne", test: { dom: "nature", diff: 0, label: "Haler une barque à fleur d'eau" },
        win: { to: "IIJ_leg_vasier1_passe" }, lose: { fx: { food: -1, time: 3 }, to: "IIJ_leg_vasier1_passe" } },
    ] },

  IIJ_leg_vasier1_passe: { act: "II", title: "Passé les Trois-Saules",
    text: [
      { after: "iij:chaine_coupee", text: "La chaîne casse avec un bruit sec et coule à pic, maillon après maillon, en tirant des bulles. Le chenal est ouvert. Les barques des Joncs pourront de nouveau descendre à la mer sans payer.", else: "Tu passes, sans casser la chaîne. Les barques des Joncs, derrière toi, paieront encore la douane au retour." },
      { with: "lison", if: { not: { has: "iij:chaine_coupee" } }, text: "Lison t'a fait passer par un bras mort, derrière les saules, un chenal large comme la barque, qu'elle connaît depuis l'enfance. « Les douaniers ne savent pas lire l'eau, dit-elle. Ils ne savent lire que les registres. »" },
      "Vous campez un peu plus loin, sur une butte de sable. Au loin, vers le sud, le ciel a déjà la couleur de la mer.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_leg_vasier2: { act: "II", title: "L'odeur de la mer",
    fx: { ep: ["perso", 500] },
    text: [
      "Le deuxième jour, la coulée s'élargit tant qu'on ne voit plus ses rives. Les roseaux cèdent la place aux vasières, puis la vase au sable. Des carcasses de bateaux apparaissent, échouées sur les bancs : une gabare couchée sur le flanc, une coque de navire au ventre ouvert, des membrures noires qui sortent de la boue comme des côtes.",
      "Puis le vent tourne, et c'est la mer, d'un coup : l'odeur de goémon, de sel, de poisson, le bruit sourd des vagues sur une barre de sable. Port-Vasier est là, au bout du delta, un tas de maisons basses et de mâts de travers, et une jetée faite d'épaves.",
      { with: "lison", text: "Lison renifle l'air, et sa figure change. « Ici, dit-elle, on ne parle pas à double sens. On parle à coups de couteau. Garde ta bourse sous ta chemise, et ton os aussi. »" },
      { with: "tibere", text: "Tibère se redresse dans la barque pour la première fois depuis deux jours. Une ville, même une ville d'épaves, le remet d'aplomb." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_leg_retour: { act: "II", title: "La capitaine dans les roseaux", with: "salome",
    fx: { conf: { salome: 3 } },
    text: [
      "Salomé Brac n'aime pas les marais. Elle le dit au bout d'une heure, puis elle ne dit plus rien. Elle se tient au milieu de la barque, les bras croisés, comme sur un pont de navire qui roule, et elle regarde les roseaux comme une côte où l'on va s'échouer.",
      "« On ne voit pas loin, ici, finit-elle par dire. En mer, au moins, tu vois venir ce qui va te tuer. » Elle crache par-dessus bord. « {{oreille#iij_salome_marais|Je déteste l'eau qui ne bouge pas|Maïwenn venait des marais. Elle sentait la vase quand elle sortait de l'eau, même en pleine mer, et je me moquais d'elle}}. »",
      { with: "lison", text: "Lison, à la gaffe, lui jette un coup d'œil. Elle ne se moque pas. Elle prend le chenal le plus large, celui d'où l'on voit le ciel." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
});

// ==================================================================== the marsh region: road events
Object.assign(P, {
  IIJ_ev_brume: { act: "II", title: "La brume",
    text: [
      "La brume tombe en quelques instants, épaisse, blanche, mouillée, et le marais disparaît. Tu ne vois plus la proue. Les perches qui marquaient le chenal se sont effacées. Le bruit de l'eau vient de partout à la fois.",
      "Le silence {{echo#iij_brume|est total, sauf le goutte-à-goutte de la brume sur les roseaux|rend une voix d'homme, un passeur d'autrefois, qui chantonne pour lui-même : « À droite des trois perches, à gauche du saule mort, et tout droit jusqu'au chant du butor »}}.",
    ],
    choices: [
      { label: "Suivre la voix du passeur : à droite des perches, à gauche du saule", hide: { not: { voile: "iij_brume" } }, fx: { ep: ["perso", 300] }, to: "IIJ_ev_brume_fin" },
      { label: "Trouver le courant et le suivre à la gaffe", test: { dom: "nature", diff: -10, label: "Lire l'eau dans la brume", help: [{ if: { arch: "rodeur" }, v: 15 }] },
        win: { fx: { ep: ["perso", 300] }, to: "IIJ_ev_brume_fin" }, lose: { fx: { time: 6, food: -1 }, to: "IIJ_ev_brume_fin" } },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 2 } }, to: "IIJ_ev_brume_fin" },
      { label: "Amarrer la barque et attendre que ça se lève", fx: { time: 4 }, to: "IIJ_ev_brume_fin" },
    ] },

  IIJ_ev_brume_fin: { act: "II", title: "La brume se lève",
    text: [
      { outcome: "lose", text: "Tu tournes en rond une demi-journée, jusqu'à retrouver, par hasard, une perche que tu reconnais : celle où tu as attaché un brin de jonc le matin. La brume se lève. Tu as perdu une demi-journée et la moitié de ton pain." },
      { outcome: "win", text: "Le courant te tire doucement entre deux murs de roseaux, et la brume se déchire devant toi comme un rideau. Le chenal est là, droit, et les perches." },
      { if: { voile: "iij_brume" }, text: "À droite des perches, à gauche du saule mort. Tu entends même le butor, à l'endroit annoncé. La brume se lève sur un chenal que tu n'avais jamais vu, plus court que l'autre." },
      "Le soleil revient, pâle, sur les vasières.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_ev_heron: { act: "II", title: "Le héron",
    text: [
      "Un héron cendré se tient immobile sur une épave à demi noyée, au milieu d'un étang, une patte repliée, le bec pointé vers l'eau. Il ne s'envole pas quand la barque approche. Il te regarde de son œil jaune, puis il regarde l'eau de nouveau.",
      "L'épave {{pie#iij_epave|est une vieille barque de pêche pourrie, couverte de mousse|est une barque de douane coulée exprès, la coque percée à la tarière : sous le banc de nage, une caisse de plombs au besant, et une bourse clouée sous la membrure}}.",
      { with: "lison", text: "« Un héron qui ne s'envole pas, dit Lison, c'est un mort qui regarde. Ma grand-mère dit ça. Moi je dis que c'est un héron qui a faim. »" },
    ],
    choices: [
      { label: "Fouiller sous le banc de nage de l'épave", hide: { not: { voile: "iij_epave" } }, fx: { gold: 60, ep: ["perso", 300] }, back: R },
      { label: "Laisser le héron à sa pêche", back: R },
    ] },

  IIJ_ev_anguilles: { act: "II", title: "Les anguilles",
    text: [
      "L'eau se met à bouillonner autour de la barque. Des dos noirs, des dizaines, qui se tordent les uns sur les autres : une montée d'anguilles, de celles qui remontent les chenaux au printemps par milliers, la nuit, et parfois le jour quand le temps tourne à l'orage. Trois d'entre elles, énormes, sortent de l'eau la gueule ouverte et frappent le bordé.",
      "Une se hisse à moitié dans la barque en claquant des mâchoires.",
    ],
    choices: [
      { label: "Les repousser à la gaffe et au couteau", fight: { title: "La montée des anguilles", enemies: [{ id: "anguille", n: 3 }], terrain: "nature",
        win: { fx: { food: 3, ep: ["perso", 500] }, back: R }, lose: { fx: { pv: -3 }, back: R },
        flee: { label: "Ramer droit devant, à toute force", dom: "nature", diff: 0, back: R } } },
      { label: "Jeter par-dessus bord les restes de ton repas, à l'autre bout", fx: { food: -1 }, back: R },
    ] },

  IIJ_ev_mort: { act: "II", title: "Le mort des roseaux",
    text: [
      "Quelque chose bat doucement contre la coque, dans les roseaux, au rythme des vagues. Un homme, face contre l'eau, les bras en croix, retenu par les tiges. Un saunier, à ses vêtements : la blouse grise, les sabots attachés à la ceinture. Il est là depuis deux jours, peut-être trois.",
      "Tu le retournes avec la gaffe. Il a une entaille nette à la gorge. Sa ceinture de cuir {{pie#iij_ceinture|est une simple ceinture de saunier, usée par le sel|est cousue double, et la couture du dos a été refaite d'un fil neuf : quelque chose est caché entre les deux cuirs}}.",
      { with: "gildas", text: "Frère Gildas s'agenouille dans la barque, trace une croix sur le front du mort du bout du pouce, et prie à voix basse en latin. Il prie longtemps, plus longtemps que pour un inconnu." },
      { with: "lison", text: "Lison regarde le visage du mort et serre les mâchoires. « Vital, dit-elle. Vital Ressac. Il portait les nouvelles entre la Saline et les Joncs. »" },
    ],
    choices: [
      { label: "Découdre la ceinture", hide: { not: { voile: "iij_ceinture" } }, fx: { item: "iij_lettre_noye", ep: ["perso", 300] }, to: "IIJ_ev_mort_suite" },
      { label: "Fouiller le mort", test: { dom: "savoir", diff: -10, label: "Fouiller un mort comme on fouille une poche perdue", help: [{ if: { has: "metier:mains" }, v: 20 }] },
        win: { fx: { item: "iij_lettre_noye" }, to: "IIJ_ev_mort_suite" }, lose: { to: "IIJ_ev_mort_suite" } },
      { label: "L'attacher derrière la barque pour le rendre aux siens", fx: { fac: { hautes: 5, taiseurs: 3 }, time: 2 }, to: "IIJ_ev_mort_suite" },
    ] },

  IIJ_ev_mort_suite: { act: "II", title: "Le mort des roseaux",
    text: [
      { if: { item: "iij_lettre_noye" }, text: "Entre les deux cuirs de la ceinture, un billet plié en quatre, à peine mouillé, adressé *À la Mère, aux Joncs*. Une écriture soignée, qui parle du sel et de la fête de la dentelle.", else: "Tu ne trouves rien sur lui : un couteau, trois liards, une pierre à aiguiser. Celui qui l'a tué a fouillé avant toi, ou n'a pas cherché." },
      "Tu le laisses aux roseaux, ou tu l'emmènes. Les corbeaux attendent déjà sur les perches.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_ev_douaniers: { act: "II", title: "La barque noire",
    text: [
      "Une longue barque noire sort d'un bras de roseaux, juste devant toi, six rameurs en casaque au besant d'or, et un sergent debout à la proue. « Douane du sel ! Rangez-vous et levez les mains ! »",
      "Le sergent te dévisage pendant que ses hommes accrochent ta barque à la gaffe. « On fouille, dit-il. Le sel, le tabac, les personnes. {{oreille#iij_ev_douanier|Simple contrôle, rien de plus|Si c'est le visage du placard, on se partage les cent ducats, et on dit qu'il a résisté}}. »",
    ],
    choices: [
      { label: "« Fouillez. Je n'ai pas de sel. »", test: { dom: "social", diff: -10, label: "Passer pour un pêcheur des Joncs", help: [{ with: "lison", v: 20 }, { if: { has: "iij:epreuve" }, v: 10 }] },
        win: { to: "IIJ_ev_douaniers_fin" }, lose: { to: "IIJ_ev_douaniers_combat" } },
      { label: "Lui glisser deux ducats, et lui dire que les cent ne valent pas une gorge tranchée", hide: { not: { voile: "iij_ev_douanier" } }, fx: { gold: -40 }, to: "IIJ_ev_douaniers_fin" },
      { label: "Dégager ta barque d'un coup de gaffe et filer dans les roseaux", test: { dom: "discretion", diff: -10, label: "Disparaître dans les roseaux", help: [{ with: "lison", v: 15 }] },
        win: { to: "IIJ_ev_douaniers_fin" }, lose: { to: "IIJ_ev_douaniers_combat" } },
      { label: "Frapper le sergent avant qu'il frappe", to: "IIJ_ev_douaniers_combat" },
    ] },

  IIJ_ev_douaniers_combat: { act: "II", title: "Les douaniers",
    text: [
      "Le sergent a compris. Il siffle entre ses doigts. Deux douaniers sautent dans ta barque, la pique basse, et la barque manque se retourner sous leur poids.",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les douaniers de la Banque", enemies: [{ id: "iij_gabelou", n: 2 }],
        win: { fx: { fac: { banque: -5 }, ep: ["perso", 800] }, to: "IIJ_ev_douaniers_fin" },
        lose: { fx: { pv: -4, gold: -40 }, to: "IIJ_ev_douaniers_fin" },
        flee: { label: "Sauter à l'eau et nager jusqu'aux roseaux", dom: "nature", diff: -10, to: "IIJ_ev_douaniers_fin" } } },
    ] },

  IIJ_ev_douaniers_fin: { act: "II", title: "La barque noire",
    text: [
      { outcome: "win", text: "La barque noire s'éloigne. Le sergent ne se retourne pas. Ses rameurs, si." },
      { outcome: "lose", text: "Ils te laissent dans la vase, à moitié noyé{e}, la bourse plus légère, et repartent en riant. Ils n'ont pas reconnu ton visage. Ils n'ont pas regardé : ils comptaient." },
      { outcome: "flee", text: "Tu remontes, trempé{e}, dans ta barque, à l'abri des roseaux. La barque noire tourne un moment dans l'étang, puis s'en va." },
      "Le marais reprend son bruit d'eau et d'oiseaux.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IIJ_ev_pierre: { act: "II", title: "La pierre qui chante",
    text: [
      "Sur un îlot de sable au milieu d'un étang, une pierre levée, haute comme deux hommes, d'un gris presque bleu. Le vent passe dessus, et elle chante : une note longue, grave, qui fait vibrer l'eau de l'étang en petits cercles. Les oiseaux se posent tout autour, jamais dessus.",
      "La pierre {{echo#iij_pierre|chante seule, et la note s'éteint quand le vent tombe|garde une voix de femme, très ancienne, qui dit lentement, mot à mot, comme on fait épeler un enfant : « Retiens. Sept. Les sept se taisent. La septième porte est sous l'eau. »}}.",
      { with: "lison", text: "« Les vieux l'appellent la Chanteuse, dit Lison. On vient y poser la main quand on a perdu quelqu'un en mer. Ça ne sert à rien. On y vient quand même. »" },
    ],
    choices: [
      { label: "Frapper le diapason contre la pierre", hide: { not: { item: "diapason" } }, fx: { recharge: { echo: 2 }, ep: ["perso", 300] }, back: R },
      { label: "Poser la main sur la pierre", fx: { ep: ["perso", 200] }, back: R },
      { label: "Passer ton chemin", back: R },
    ] },

  IIJ_ev_sauniers: { act: "II", title: "Le chant des sauniers",
    text: [
      "Un chant arrive par-dessus les roseaux, d'un chenal parallèle : une file de barques plates chargées de sel, et les sauniers qui rament en mesure en chantant. Un homme lance le couplet, les autres reprennent le refrain.",
      "« *La roue tourne, le sel blanchit,* chante le meneur, *{{oreille#iij_chant|le maître compte et le saunier rit|le maître a vendu la roue la nuit, aux gants gris qui paient en or}}.* »",
      "Le refrain revient, en chœur : « *{{oreille|Et la mer reprend ce qu'elle a donné|Et sous la roue la reine a parlé}}.* »",
      { with: "tibere", text: "Tibère hoche la tête en mesure, sans comprendre. « Joli, dit-il. Triste. Comme toutes les chansons de travail. »" },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
});

// ==================================================================== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      iij_cyprien: { name: "Cyprien Huchet", f: false, face: { age: "ancien", coif: "degarni", beard: "barbe", skin: "hale" }, desc: "Le doyen des pêcheurs d'anguilles des Joncs-Bas. Il tient le ponton, ses avant-bras sont couverts de morsures blanches, et il parle peu, toujours à double fond." },
      iij_thecle: { name: "Thècle", f: true, face: { age: "mur", coif: "foulard" }, desc: "La maîtresse dentellière des Joncs-Bas. Elle compte les fuseaux des autres et les fautes de tout le monde." },
      iij_ardouin: { name: "Ardouin Mesle", f: false, face: { age: "adulte", coif: "court", beard: "moustache" }, desc: "Un pêcheur venu de Port-Vasier il y a trois semaines, au bonnet rouge toujours propre. Il pêche peu et regarde beaucoup." },
      iij_jacinthe: { name: "Jacinthe Tessier", f: true, face: { age: "jeune", coif: "tresses", marks: ["rousseur"] }, desc: "Une jeune dentellière des Joncs-Bas, la plus habile de sa génération, et la plus pressée de partir." },
      iij_vivien: { name: "Vivien Tessier", f: false, face: { age: "mur", beard: "barbe" }, desc: "Le père de Jacinthe, charpentier de pilotis. Il a des mains de bois et un orgueil de chêne." },
      iij_eulalie: { name: "Eulalie Corre", f: true, face: { age: "mur", coif: "chignon" }, desc: "Une veuve des Joncs-Bas, fumeuse d'anguilles, voisine des Tessier depuis trente ans et en procès avec eux depuis vingt." },
      iij_sylvain: { name: "Sylvain Huchet", f: false, face: { age: "jeune", coif: "court", skin: "hale" }, desc: "Le neveu de Cyprien. Pêcheur le jour, passeur de sel en fraude la nuit, et menteur à toute heure." },
      iij_fortunee: { name: "Fortunée", f: true, face: { age: "adulte", coif: "chignon", shape: "rond" }, desc: "La tenancière de la Nasse, le cabaret sur pilotis des Joncs-Bas. Elle prête sur gages, sert l'anguille et garde les secrets qu'on lui paie." },
      iij_escoffier: { name: "Le brigadier Escoffier", f: false, face: { age: "mur", coif: "degarni", beard: "moustache" }, desc: "Brigadier des douaniers que la Banque Marrel paie pour garder le sel du delta. Il tient son registre mieux que sa langue." },
    },
    items: {
      iij_tr_bague: { name: "La bague de la noyée", kind: "tresor", price: 120, desc: "Une bague d'or rouge, un peu tordue, trouvée dans le ventre d'une anguille. À l'intérieur, deux initiales usées : *J. et C.*" },
      iij_tr_sceau: { name: "Le cachet des Vasse", kind: "tresor", price: 160, desc: "Un cachet d'argent noirci, au manche de corne : un croissant sous un chef. Les armes des Vasse, chanceliers de la reine." },
      iij_tr_col: { name: "Le col de la fête", kind: "tresor", price: 100, desc: "Un col de dentelle des Joncs-Bas, filé de lin et d'un fil d'argent, que Thècle t'a donné le soir de la fête." },
      iij_tr_fuseau: { name: "Le fuseau d'ambre", kind: "tresor", price: 180, bonus: { savoir: 5 }, desc: "Un fuseau de dentellière taillé dans un ambre clair, qui rend un son très doux quand on le roule entre les doigts. L'ambre chantant des Écueils." },
      iij_tr_perle: { name: "La perle des marais", kind: "tresor", price: 2, desc: "Une grosse perle grise, achetée à un marchand de passage aux Joncs-Bas, roulée dans un carré de velours." },
      iij_anguille: { name: "Anguille fumée", kind: "soin", heal: 4, unique: false, price: 3, desc: "Une anguille des Joncs, fendue, fumée à l'aulne, enveloppée dans une feuille de roseau." },
      iij_lettre_noye: { name: "Le billet du noyé", kind: "document", form: "billet", hand: "soignee", desc: "Un billet plié en quatre, trouvé dans la ceinture d'un mort, dans les roseaux.",
        text: "*À la Mère, aux Joncs.*\n\n{{loupe#iij_mort_lettre|La saline paie mal cette année. Le sel reste en tas. Je rentre pour la fête de la dentelle|L'homme aux gants gris a acheté le pilote borgne de Port-Vasier pour mener une gabare aux Écueils. Il cherche le phare. Il a un cornet comme le nôtre}}.\n\n— V." },
    },
    shops: {
      iij_nasse: { name: "Le comptoir de la Nasse", sells: [{ item: "iij_anguille", price: 3 }, { item: "eau_de_vie", price: 3 }, { item: "onguent", price: 6 }, { item: "corde", price: 3 }, { item: "lanterne", price: 6 }], food: 2 },
    },
    enemies: {
      iij_ardouin: { name: "Ardouin Mesle", look: "humain", pv: 28, att: 44, def: 17, dmg: 6, desc: "Un agent de la Banque déguisé en pêcheur. Il se bat au couteau à démailler, bas et vite." },
      iij_gabelou: { name: "Douanier de la Banque", look: "humain", pv: 20, att: 40, def: 16, dmg: 5, desc: "Casaque noire au besant d'or, pique courte, et une prime par prise." },
      iij_mere_anguille: { name: "La Mère-Anguille", look: "serpent", pv: 36, att: 44, def: 15, dmg: 6, desc: "Une anguille de vasière plus longue qu'une barque, que les pêcheurs des Joncs croient centenaire." },
    },
    clues: {
      iij_c_ysaure: { rev: "T", text: "La reine Ysaure avait signé la Charte des Hautes-Eaux. La nuit des Comptoirs, les maisons de commerce lui ont fait couper la langue, pour qu'elle ne témoigne pas devant le duc d'Aveline." },
      iij_c_aymeric: { rev: "T", text: "Aymeric Vasse, chancelier de la reine, a fondé les Taiseurs avec ses secrétaires. Ils ont fait les instruments d'ambre chantant et d'os de baleine, et ils ont caché le trésor de la couronne." },
      iij_c_serment: { rev: "T", text: "Le serment des Taiseurs : ne jamais dire la double parole à un étranger." },
      iij_c_gardien: { rev: "T", text: "Le serment des Taiseurs a un Gardien, chargé de le faire tenir. Mère Ancolie sait qui il est." },
      iij_c_comptine: { rev: "T", text: "Les enfants des Joncs-Bas apprennent la double parole par une comptine : « La reine a perdu sa langue au marché ; sept muets l'ont ramassée, sept muets l'ont cachée. »" },
      iij_c_registre: { rev: "R", text: "Le Registre de la Muette est le témoignage de la reine Ysaure, dicté par signes à ses secrétaires, en six feuillets." },
      iij_c_caches: { rev: "R", text: "Six caches pour les six feuillets du Registre ; la septième, à Sorne, garde la Charte des Hautes-Eaux et le gros du trésor." },
      iij_c_saline: { rev: "R", text: "La dentelle de Mère Ancolie, sous la loupe : le moulin à marée de la Saline vu d'en haut, et sous la roue une salle carrée où l'on descend par le bief quand l'eau est basse." },
      iij_c_ecueils: { rev: "R", text: "La dentelle de Mère Ancolie, sous la loupe : « Au phare de l'Ouïe, tais-toi et écoute le mur qui écoute ; descends là où il se tait. »" },
      iij_c_voile: { rev: "R", text: "Le voile de la Muette, sous la loupe : « À la Grande Basse, la reine sort de l'eau par la porte des fileuses, à l'ouest, sous le signe du fuseau. »" },
      iij_c_pilote: { rev: "R", text: "Lothaire Brunel a acheté le pilote borgne de Port-Vasier pour mener une gabare aux Écueils, jusqu'au phare." },
    },
    veils: {
      iij_cyprien: { fx: { questSeen: "IIJ_q_espion" } },
      iij_nasse_neuve: { fx: { flag: "iij:preuve_nasse" } },
      iij_mort_lettre: { fx: { clue: "iij_c_pilote", ep: ["perso", 500] } },
      iij_dent_saline: { fx: { clue: "iij_c_saline", flag: "iij:dentelle_saline", ep: ["perso", 800] } },
      iij_dent_ecueils: { fx: { clue: "iij_c_ecueils", flag: "iij:dentelle_ecueils", ep: ["perso", 800] } },
      iij_gardien: { fx: { clue: "iij_c_gardien", ep: ["perso", 500] } },
      iij_ponton_iris: { fx: { flag: "iij:mere_voix", ep: ["perso", 600] } },
      iij_comptine: { fx: { ep: ["perso", 200] } },
      iij_lettre_ardouin: { fx: { flag: "iij:preuve_lettre", ep: ["perso", 500] } },
      iij_tib_lettres: { fx: { flag: "tibere:espion" } },
      iij_lg_ordre: { fx: { ep: ["perso", 400] } },
      iij_salome_ancolie: { fx: { ep: ["perso", 600] } },
      iij_chambre: { fx: { ep: ["perso", 400] } },
      iij_tertre: { fx: { ep: ["perso", 400] } },
      iij_voile_loupe: { fx: { clue: "iij_c_voile", ep: ["perso", 600] } },
      iij_jacinthe: { fx: { flag: "iij:voile_piste" } },
      iij_scie: { fx: { ep: ["perso", 300] } },
      iij_ardouin: { fx: { ep: ["perso", 300] } },
      iij_aymeric: { fx: { ep: ["perso", 500] } },
      iij_sauniers: { fx: { flag: "iij:sauniers_vendus" } },
    },
    quests: [
      { id: "IIJ_q_espion", act: "II", kind: "annexe", title: "Le pêcheur de trop", start: "IIJ_espion", echo: ["iij:espion_pris", "iij:espion_double", "iij:espion_fui"] },
      { id: "IIJ_q_pilotis", act: "II", kind: "annexe", title: "La querelle des pilotis", start: "IIJ_pilotis", echo: "iij:pilotis" },
      { id: "IIJ_q_voile", act: "II", kind: "annexe", title: "Le voile de la fête", start: "IIJ_fete", echo: ["iij:voile_rendu", "iij:voile_perdu"] },
    ],
    routes: [
      { id: "r_saline", name: "Le chenal des sauniers", from: "joncs", to: "saline", steps: 1, region: "marais",
        label: "Prendre le chenal des sauniers jusqu'à la Saline de Grisemotte", labelBack: "Revenir aux Joncs-Bas par le chenal des sauniers",
        legs: [{ step: 1, dir: "aller", passage: "IIJ_leg_saline" }] },
      { id: "r_vasier", name: "La grande coulée", from: "joncs", to: "vasier", steps: 2, region: "marais",
        label: "Descendre la grande coulée jusqu'à Port-Vasier", labelBack: "Remonter la grande coulée jusqu'aux Joncs-Bas",
        legs: [
          { step: 1, dir: "aller", passage: "IIJ_leg_vasier1" },
          { step: 2, dir: "aller", passage: "IIJ_leg_vasier2" },
          { step: 1, dir: "retour", passage: "IIJ_leg_retour", if: { present: "salome" } },
        ] },
    ],
    regions: {
      marais: { name: "Les marais du delta", ambiance: "eau", chance: 0.5, repeatChance: 0.4,
        events: ["IIJ_ev_brume", "IIJ_ev_heron", "IIJ_ev_anguilles", "IIJ_ev_mort", "IIJ_ev_douaniers", "IIJ_ev_pierre", "IIJ_ev_sauniers"],
        quiet: [
          "Le chenal serpente entre deux murs de roseaux plus hauts qu'un homme debout. On n'entend que la gaffe qui entre dans la vase, et le bruit de succion quand elle en ressort.",
          "Une vasière découverte, grise et luisante, s'étend à perte de vue, criblée de trous de crabes. Des courlis y marchent sur leurs longues pattes, le bec dans la boue, et s'envolent tous ensemble quand la barque passe.",
          "L'eau s'élargit en un étang plat où le ciel se couche tout entier. Des perches de saule marquent la passe, chacune coiffée d'une touffe de paille tordue. Tu les comptes sans le vouloir.",
          "Le vent tourne au sud et apporte l'odeur de la mer : du sel, du goémon, une pointe de poisson pourri. Sur une butte, une cabane de chasseur, vide, la porte battante.",
        ],
        camp: [
          "Vous tirez la barque sur une butte de sable couverte de salicornes. Le feu de bois flotté brûle bleu et crépite de sel. Toute la nuit, les grenouilles chantent, puis se taisent d'un coup, puis reprennent.",
          "Une cabane de pêcheur sur quatre pieux, abandonnée, avec un plancher qui tient encore. Tu dors dessus, roulé{e} dans ton manteau, et tu entends l'eau monter sous toi, très doucement, et redescendre avant l'aube.",
          "Pas de terre ferme : la barque amarrée à deux perches, en plein étang, et le sommeil assis. La lune fait un chemin blanc sur l'eau. Un poisson saute, une fois, tout près.",
        ] },
    },
    events: {
      IIJ_ev_brume: { passage: "IIJ_ev_brume", weight: 2 },
      IIJ_ev_heron: { passage: "IIJ_ev_heron", weight: 2 },
      IIJ_ev_anguilles: { passage: "IIJ_ev_anguilles", weight: 2 },
      IIJ_ev_mort: { passage: "IIJ_ev_mort", weight: 1 },
      IIJ_ev_douaniers: { passage: "IIJ_ev_douaniers", weight: 1 },
      IIJ_ev_pierre: { passage: "IIJ_ev_pierre", weight: 1, once: false },
      IIJ_ev_sauniers: { passage: "IIJ_ev_sauniers", weight: 2 },
    },
  },
};
