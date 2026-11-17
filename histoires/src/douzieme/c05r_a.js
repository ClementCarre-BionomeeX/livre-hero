// Le Douzième Coup · chapter 5, the one who stays, first half (act II, seven days before the sixtieth Grand Midi). The
// Ferme-Vieille by day, sixty years after the other hero's stay: what was changed there has reached this side at the
// hour-stone, and the gleaner alone remembers the farm as it stood two nights ago (`monde:noyer_sauve`,
// `monde:horloge_ferme`, `monde:marque_poutre`, `monde:line_sait`, `monde:promesse_line`). A guard forgotten at his
// post, what Line left in the clock, and a word that a woman at the Aulnes has been about to say since Easter.
// The morning ends at the hour-stone of the twenty-third league, where something was buried (M05).
var P = {};
var CHANGE = { any: [{ has: "monde:noyer_sauve" }, { has: "monde:horloge_ferme" }, { has: "monde:marque_poutre" }, { has: "monde:line_sait" }, { has: "monde:promesse_line" }] };

Object.assign(P, {
  K05r_cour: { act: "II", title: "La cour, de jour", place: "ferme",
    text: [
      "Tu passes le portail. Le jour de la Dormante est sur la cour : une clarté de lait, sans soleil, qui vient de partout et ne pose d'ombre sous rien. Les galets, le puits, le banc de pierre. Le chat, à deux pieds du sol, les pattes tendues.",
      { with: "rouget", text: "Rouget s'arrête sous le porche. Il a glané des lisières, des fossés, une charrette de foin ; il n'était jamais entré dans une maison prise. Il ôte son bonnet, sans savoir pourquoi, et le remet. Tu lui as noué au poignet une pincée dans un chiffon, à la mode de la bande pour les nouveaux : ce nouet lui donne la matinée, et l'usage de ses deux mains." },
      { if: { has: "monde:noyer_sauve" }, text: "Puis tu vois les arbres, et ton pas se défait. Il y a trois noyers. Deux de part et d'autre du portail, et entre eux un troisième, le plus gros, le plus vieux, dont les branches basses touchent presque le toit du fournil. Tu es passé{e} ici il y a deux nuits, derrière une lanterne. Il y avait à cette place une souche grise, fendue, large comme une table ; la vieille en a parlé. Tu poses la main sur l'écorce. Elle est là depuis cent soixante ans." },
      { if: { has: "monde:noyer_sauve" }, text: "Tu cherches la souche des yeux, par acquit de conscience, comme on tâte sa poche. Tu ouvres le Cahier : *le marchand de bois est reparti sans son arbre*. C'est écrit, de l'écriture penchée, à la page d'hier. Le monde a changé d'avis pendant que tu dormais contre une borne, et il ne reste que toi et ce papier pour savoir qu'il en avait eu un autre." },
      { if: { not: { has: "monde:noyer_sauve" } }, text: "Les deux noyers sont à leur place, de part et d'autre du portail, et entre eux la souche, grise, fendue, large comme une table. Tu as lu dans le Cahier le soir de cette souche : le cabriolet jaune, la craie rouge, une petite fille qui frottait une croix avec sa manche. Tu t'aperçois que tu contournes la souche pour ne pas marcher dessus." },
      { if: { all: [{ not: { has: "monde:noyer_sauve" } }, CHANGE] }, text: "Tout le reste a l'air pareil. Tu sais maintenant qu'il ne faut pas s'y fier : {autre} a passé ici une journée entière, il y a soixante ans, hier. Ce qu'{autre:il} a touché a eu le temps de vieillir." },
    ],
    choices: [{ label: "Entrer dans la cour", to: "K05r_ferme" }] },

  K05r_ferme: { act: "II", title: "La Ferme-Vieille", backName: "la cour de la Ferme-Vieille", place: "ferme", hub: true,
    text: [
      { first: true, text: "La Ferme-Vieille est prise depuis le lundi de Pâques. Ses derniers fermiers l'avaient vidée en mars, en bon ordre : ils ont emporté les bêtes, le linge, le cuivre, et laissé ce qui ne se charge pas. Les maisons qu'on quitte ainsi ont l'air d'attendre leurs gens. Celle-ci attend depuis plus longtemps que les autres, et autre chose." },
      { first: true, text: "Tu as jusqu'à midi. La borne est à vingt toises ; le sable coule." },
      { again: true, text: "La cour carrée, le lait du jour, le chat en l'air. Rien ne bouge que vous." },
    ],
    fx: { stock: { sable: -1 } },
    choices: [
      { label: "Le chat", to: "K05r_chat", hide: { seen: "K05r_chat" } },
      { label: "Les noyers", to: "K05r_noyers", hide: { seen: "K05r_noyers" } },
      { label: "Le puits", to: "K05r_puits", hide: { seen: "K05r_puits" } },
      { label: "La maison", to: "K05r_salle" },
      { label: "Le fournil, et l'échelle qui monte au fenil", to: "K05r_fournil" },
      { label: "Un brasero, près de la grange, où le feu est resté debout", to: "K05r_bivouac", hide: { seen: "K05r_bivouac" } },
      { label: "La grange", to: "K05r_grange" },
      { label: "Le verger, derrière la maison", to: "K05r_verger", hide: { seen: "K05r_verger" } },
      { label: "Rouget, qui tourne autour de ton sac", to: "K05r_rouget_cahier", hide: { any: [{ not: { present: "rouget" } }, { seen: "K05r_rouget_cahier" }] } },
      { label: "Le jour blanchit vers le haut : il doit être midi. Aller à la borne", to: "K05r_midi", big: true },
    ] },
  K05r_chat: { act: "II", title: "Le chat", place: "ferme",
    text: [
      "C'est un chat de ferme, gris tigré, une oreille entaillée. Il a sauté de la margelle. Il est à deux pieds du sol, le dos rond, la queue raide pour l'équilibre, et ses yeux jaunes regardent le pavé, à l'endroit précis où il compte poser les pattes.",
      "Tu t'accroupis. De près, on voit chaque poil. Tu passes la main dessous : il n'y a rien dessous, que de l'air, qui est un peu plus épais autour de lui. Tu le touches du dos des doigts. Il est tiède, et dur comme une chose empaillée. Son cœur, si tu attendais un mois, te donnerait un coup.",
      { with: "rouget", text: "« On pourrait le pousser, dit Rouget. Pour voir. » Tu lui expliques qu'on ne pousse pas un pris : il est plus lourd que sa maison. Les anciens de la bande racontent qu'un glaneur, pour rire, a voulu coucher une vache prise, aux Hautes-Bordes, et s'y est démis l'épaule. La vache est toujours debout. Rouget considère le chat avec un respect nouveau." },
      "Il retombera sur ses pattes. La vieille l'a dit, il y a deux nuits, en passant.",
    ],
    choices: [{ back: "K05r_ferme" }] },
  K05r_noyers: { act: "II", title: "Les noyers", place: "ferme",
    text: [
      { if: { has: "monde:noyer_sauve" }, text: "Le noyer du milieu est un monument. Trois hommes n'en feraient pas le tour. Il a ses feuilles de Pâques, petites, d'un vert roux, arrêtées au moment de s'ouvrir, et dans sa fourche un nid de pie dont dépasse une queue." },
      { if: { has: "monde:noyer_sauve" }, text: "À hauteur de tes yeux, l'écorce porte une cicatrice : une croix, large comme deux mains, que l'arbre a mis soixante ans à refermer et dont il reste un bourrelet. Quelqu'un avait commencé de le marquer pour la cognée. Quelqu'un d'autre a fait que cela n'aille pas plus loin. À une grosse branche pend un bout de corde verdie, usée par le milieu : il y a eu là une balançoire, et des générations d'enfants dessus." },
      { if: { not: { has: "monde:noyer_sauve" } }, text: "Les deux noyers ont leurs feuilles de Pâques, petites, d'un vert roux, arrêtées au moment de s'ouvrir. Entre eux, la souche. Tu comptes les cernes, du bord vers le cœur, en suivant de l'ongle : tu te perds vers cent. Sur la tranche, quelqu'un a gravé au couteau, il y a très longtemps, d'une main d'enfant qui appuyait : *ICI ÉTAIT LE PLUS GROS*." },
      { if: { not: { has: "monde:noyer_sauve" } }, text: "Les lettres sont grises, pleines de mousse. Elles ont soixante ans. Elle en avait neuf." },
    ],
    choices: [{ back: "K05r_ferme" }] },
  K05r_puits: { act: "II", title: "Le puits", place: "ferme",
    text: [
      "Le seau est resté sur la margelle, où les fermiers l'ont laissé. Tu te penches. L'eau est à trois toises, noire, lisse, et ton visage y est posé avec une netteté de vitre. Tu laisses tomber un caillou. Il descend comme tous les cailloux, jusqu'à un pied de l'eau ; là il ralentit, ralentit encore, et s'arrête au-dessus de sa propre image.",
      "Les glaneurs connaissent cela. L'eau prise ne se boit pas : la cruche qu'on y plonge reste dedans. On boit ce qu'on porte, et l'on porte peu.",
      { with: "rouget", text: "Rouget crache dans le puits, pour vérifier. Le crachat s'arrête à côté du caillou. Il les regarde tous deux un long moment, côte à côte, suspendus. « Ils y seront encore quand on sera vieux, dit-il. C'est la première chose que je fais qui dure. »" },
    ],
    choices: [{ back: "K05r_ferme" }] },

  // ------------------------------------------------------------ the house
  K05r_salle: { act: "II", title: "La salle", backName: "la salle de la ferme", place: "ferme", hub: true,
    text: [
      { first: true, text: "La porte basse n'est pas fermée ; on ne ferme pas ce qu'on abandonne à plus fort que les voleurs. La salle est longue, dallée, avec une cheminée où l'on tiendrait debout. Les fermiers ont laissé la table, trop lourde, deux bancs, un vaisselier vide, et, dans l'angle, près de l'âtre, un fauteuil de paille au dossier haut que personne n'a eu le cœur de charger." },
      { first: true, text: "Contre le mur du fond, entre les deux fenêtres, une horloge de parquet monte jusqu'aux solives." },
      { again: true, text: "La salle dallée, la table, le fauteuil près de l'âtre. L'horloge, au fond, entre les deux fenêtres." },
    ],
    choices: [
      { label: "L'horloge", to: "K05r_horloge" },
      { label: "Le fauteuil de paille", to: "K05r_fauteuil", hide: { seen: "K05r_fauteuil" } },
      { label: "La cuisine, où Rouget fait déjà du bruit", to: "K05r_cuisine", hide: { seen: "K05r_cuisine" } },
      { label: "L'escalier", to: "K05r_chambres" },
      { label: "La trappe de la cave", to: "K05r_cave", hide: { seen: "K05r_cave" } },
      { back: "K05r_ferme" },
    ] },
  K05r_horloge: { act: "II", title: "L'horloge de la salle", backName: "l'horloge de la salle", place: "ferme",
    text: [
      { first: true, if: { has: "monde:horloge_ferme" }, text: "C'est une horloge de campagne, à caisse de noyer, haute de sept pieds, avec un cadran d'émail où un coq est peint. Les aiguilles marquent midi moins un demi-quart. Le balancier, derrière sa vitre, est arrêté à bout de course, à gauche, levé : il a été pris en plein battement, le lundi de Pâques, juste avant la soupe." },
      { first: true, if: { has: "monde:horloge_ferme" }, text: "Elle marchait donc. Elle a marché jusqu'au dernier jour. Tu avais lu dans le Cahier qu'elle était muette depuis deux ans, là-bas, et qu'{autre} l'ouvrait. Voilà ce que cela donne, soixante ans plus loin : une horloge qui a sonné toutes les heures de trois générations, et que la Dormante a dû arrêter elle-même, faute que personne s'en soit chargé." },
      { first: true, if: { not: { has: "monde:horloge_ferme" } }, text: "C'est une horloge de campagne, à caisse de noyer, haute de sept pieds, avec un cadran d'émail où un coq est peint. Les aiguilles marquent trois heures un quart. Le balancier pend tout droit, derrière sa vitre, sous une toile d'araignée qui a elle-même une toile d'araignée. Les poids sont au bas de leur course." },
      { first: true, if: { not: { has: "monde:horloge_ferme" } }, text: "Elle était arrêtée bien avant Pâques. Elle l'était, à en croire le Cahier, l'été de 541 ; et personne, en soixante ans, ne l'a remise en marche. Les fermiers l'ont gardée comme on garde un meuble. C'est la seule chose, dans cette cour, que la Dormante n'ait pas eu besoin de prendre." },
      { again: true, text: "Le coq d'émail, les aiguilles immobiles, la caisse de noyer. La porte de la caisse a un bouton de cuivre." },
    ],
    choices: [
      { label: "Ouvrir la caisse", to: "K05r_caisse", hide: { seen: "K05r_caisse" } },
      { back: "K05r_salle" },
    ] },
  K05r_caisse: { act: "II", title: "Dans la caisse", place: "ferme", fx: { item: ["onguent", "pain"], flag: "r:mot_caisse" },
    text: [
      "La porte s'ouvre sans grincer. On l'a graissée, il n'y a pas longtemps.",
      "Au fond de la caisse, entre les poids, un paquet t'attend : une toile cirée, nouée d'un fil gris qui accroche la lumière. Dedans, une miche, un pot d'onguent, et un billet plié en quatre. L'écriture est serrée, sèche, et tu l'as vue hier dans les marges d'un gros livre noir.",
      "*J'ai mis ceci en février, pendant qu'on y entrait encore. Le pain sera frais : rien ne rassit de ce côté-ci. Mange. Ne glane rien dans cette maison, j'y suis née. La poutre de la grange, le fenil, la porte de la chambre du haut : regarde, et écris à l'autre ce que tu trouves. Je ne peux plus monter jusque-là pour voir si quelque chose a bougé. Toi seul le sauras. L.*",
      "Tu relis la dernière phrase. La vieille a soigné cette maison pendant soixante ans, comme on relève un piège : en regardant, chaque hiver, si quelque chose y était pris. Puis ses jambes ont cessé de la porter, et il lui a fallu quelqu'un.",
      { with: "rouget", text: "« Elle savait qu'on viendrait, dit Rouget, la bouche déjà pleine. En février. Elle savait pour le pain. » Il mâche. « Elle fait peur, la vieille. »" },
    ],
    choices: [{ back: "K05r_horloge" }] },
  K05r_fauteuil: { act: "II", title: "Le fauteuil de l'âtre", place: "ferme",
    text: [
      "La paille du siège a été refaite plusieurs fois ; le bois, jamais. Le bras droit est usé d'une façon particulière : à l'endroit où une main se pose, il y a un creux rond, poli, de la taille d'une montre.",
      "Quelqu'un s'est assis là pendant des années, une montre dans la main, la main sur ce bras. Tu t'y assois. Le fauteuil est tourné de telle sorte qu'on voit, sans bouger la tête, la porte, la fenêtre, l'horloge, et par la fenêtre le portail et la route. C'est le fauteuil de quelqu'un qui surveillait l'heure et les arrivées.",
      "Tu y restes un instant. Par la fenêtre, tu vois la borne.",
    ],
    choices: [{ back: "K05r_salle" }] },
  K05r_cuisine: { act: "II", title: "Ce qui se glane", place: "ferme",
    text: [
      "Rouget a trouvé la cuisine. Il a trouvé, dans la cuisine, ce que les fermiers ont oublié ou n'ont pas pu prendre : une bassine de cuivre grande comme une roue, scellée dans son fourneau ; six cuillers d'étain derrière un tiroir ; une salière de faïence ; un chandelier. Il a déjà descellé la bassine à moitié, avec ton couteau.",
      "« Deux écus le cuivre, au poids. Les cuillers, un demi. On planque tout sous le foin, on repasse au retour. » Il s'arrête, parce que tu ne dis rien. « Ben quoi ? On est glaneurs. C'est pris, c'est à personne. C'est toi qui me l'as appris. »",
      "C'est toi qui le lui as appris. Tu regardes la salière : un petit coq de Roquebise, verni de miel, la crête ébréchée. Quelqu'un l'a posée sur cette planche, à portée de la main qui sale.",
    ],
    choices: [
      { label: "« Repose ça. Ici, on ne prend rien. C'est la maison de la vieille. »", fx: { flag: "r:laisse_ferme", conf: { rouget: -5 } }, to: "K05r_cuisine_non" },
      { label: "« Les cuillers et le chandelier. Laisse la bassine, elle nous ralentirait. »", fx: { flag: "r:glane_ferme", item: "cuillers_etain", conf: { rouget: 5 } }, to: "K05r_cuisine_oui" },
      { label: "« Fais ce que tu veux. Moi, je ne touche à rien. »", fx: { flag: ["r:laisse_ferme", "r:rouget_glane"] }, to: "K05r_cuisine_non" },
    ] },
  K05r_cuisine_non: { act: "II", title: "Une maison à quelqu'un", place: "ferme",
    text: [
      { if: { not: { has: "r:rouget_glane" } }, text: "Rouget repose le couteau. Il te regarde comme on regarde un cheval qui refuse un gué qu'il a passé cent fois. « C'est la maison de la vieille. Et alors ? Aux Aulnes, c'était la maison des deux qui mangent. À Vauxelles, c'était la maison de quelqu'un. C'est toujours la maison de quelqu'un. »" },
      { if: { not: { has: "r:rouget_glane" } }, with: "rouget", text: "Tu n'as rien à répondre à cela. Il a raison, et depuis six ans. Tu remets la salière sur sa planche, la crête ébréchée vers le mur, comme elle était. « Ici, non », répètes-tu. Rouget hausse une épaule, siffle l'air qu'il siffle quand il boude, et rescelle la bassine du plat de la main, mal." },
      { if: { has: "r:rouget_glane" }, text: "Rouget attend que tu aies tourné le dos. Tu entends les cuillers glisser dans sa veste, une à une, avec le soin qu'on met à ne pas réveiller quelqu'un. Il laisse la bassine. Il laisse aussi la salière, après l'avoir tenue un moment : elle ne vaut rien, et il n'a pas su dire pourquoi il la reposait." },
    ],
    choices: [{ back: "K05r_salle" }] },
  K05r_cuisine_oui: { act: "II", title: "Six cuillers", place: "ferme",
    text: [
      "Les cuillers vont dans ton sac, roulées dans un torchon. Le chandelier suit. Rouget rayonne : tu es redevenu{e} quelqu'un qu'il comprend.",
      "La salière reste sur sa planche. Aucun de vous deux n'y a touché ; elle ne vaut pas un sou, et cela dispense de se demander autre chose.",
      { after: "r:mot_caisse", text: "*Ne glane rien dans cette maison, j'y suis née.* Le billet est dans ta poche, contre les cuillers. Tu te dis que la vieille a soixante-neuf ans, qu'elle roule vers Arvoise sur un coussin, et qu'elle a d'autres comptes à tenir. Tu te le dis deux fois." },
    ],
    choices: [{ back: "K05r_salle" }] },
  K05r_cave: { act: "II", title: "Le fil de cidre", place: "ferme",
    text: [
      "Sous la trappe, six marches, un cellier voûté, l'odeur de la pomme. Les fermiers ont emporté les petits fûts et laissé le grand, un foudre de douze muids couché sur ses chantiers. Quelqu'un, le dernier matin, y a tiré un dernier pichet, et n'a pas bien refermé.",
      "Du robinet de buis sort un fil de cidre. Il est debout. Il descend du robinet au sol, droit, doré, gros comme une paille, et il n'arrive nulle part : il s'arrête à un pouce de la dalle, sur une goutte ronde qui n'a pas fini de se former. On dirait une baguette de verre ambré qu'un souffleur aurait oubliée là.",
      { with: "rouget", text: "Rouget s'agenouille, ouvre la bouche dessous, et attend. Tu le laisses attendre un bon moment avant de lui dire qu'il en a pour jusqu'à la Toussaint de l'an 700. Il se relève, vexé. « Ça sent quand même », constate-t-il. C'est vrai : l'odeur, elle, est arrivée." },
    ],
    choices: [{ back: "K05r_salle" }] },
  K05r_chambres: { act: "II", title: "L'étage", backName: "le palier de l'étage", place: "ferme", hub: true,
    text: [
      { first: true, text: "L'escalier est de chêne, raide, avec une corde pour rampe. Il donne sur un palier et trois portes. Deux sont ouvertes sur des chambres vides, où il reste des clous aux murs et la marque claire des armoires. La troisième, au bout, plus basse, est celle de la chambre du haut, sous la pente du toit." },
      { again: true, text: "Le palier, les trois portes, la corde qui sert de rampe." },
    ],
    choices: [
      { label: "Le montant de la porte du bout", to: "K05r_toise", hide: { seen: "K05r_toise" } },
      { label: "La chambre du haut", to: "K05r_chambre_line", hide: { seen: "K05r_chambre_line" } },
      { back: "K05r_salle" },
    ] },
  K05r_toise: { act: "II", title: "La toise des enfants", place: "ferme",
    text: [
      "Le montant de la porte est couvert d'encoches, du genou jusqu'au linteau. Toutes les maisons en ont un : on y adosse les enfants, le jour de leur fête, un couteau à plat sur la tête.",
      "Celui-ci a servi longtemps. Les encoches du bas sont les plus neuves, avec des noms que tu ne connais pas, des Lhoste, les derniers fermiers. Au-dessus, plus grises, plus creuses, une autre couche d'enfants. Et tout au fond du bois, presque effacées, les premières : *Girard 14*. *Line 9*. À côté de chaque nom, une année : *541*.",
      { if: { any: [{ has: "monde:line_sait" }, { has: "monde:promesse_line" }, { has: "monde:line_lire" }] }, text: "Il y a une troisième encoche de cette année-là. Elle est plus haute que celle de Girard, d'une bonne main, et taillée plus bas qu'il ne faudrait : celle qui tenait le couteau a dû monter sur un tabouret et ne voyait pas bien. À côté, des lettres appliquées, qui penchent chacune de son côté. Tu les suis du doigt. *{autre}*." },
      { if: { any: [{ has: "monde:line_sait" }, { has: "monde:promesse_line" }, { has: "monde:line_lire" }] }, text: "Tu t'adosses au montant. Tu te mets à plat la main sur le crâne, et tu te retournes pour voir. Vous avez la même taille, à un doigt près. Tu ne sais pas pourquoi cela te fait quelque chose : c'est une chose qu'on sait d'ordinaire de quelqu'un dès le premier jour, en le regardant. Tu l'apprends d'une porte." },
      { if: { not: { any: [{ has: "monde:line_sait" }, { has: "monde:promesse_line" }, { has: "monde:line_lire" }] } }, text: "Deux encoches pour 541, et rien d'autre. {autre} a dormi une nuit sous ce toit ; cela ne laisse pas de marque sur une porte. Tu passes le doigt dans celle de Line. Neuf ans : elle t'arrivait à la poitrine." },
    ],
    choices: [{ back: "K05r_chambres" }] },
  K05r_chambre_line: { act: "II", title: "La chambre du haut", place: "ferme",
    text: [
      "C'est une soupente, avec une lucarne sur la cour et un lit de sangle sans paillasse. Les fermiers en avaient fait un grenier à pommes ; il en reste l'odeur, et des claies.",
      "Les murs ont été blanchis à la chaux, plusieurs fois. La chaux s'écaille. Dessous, par plaques, paraît un autre mur, plus ancien, couvert de dessins au charbon : des ronds, d'abord, maladroits, avec des dents. Puis des ronds qui s'engrènent. Puis, plus haut, à mesure que la main grandissait, des roues entières, un échappement vu de face et de profil, une fusée avec sa chaîne, tout un mouvement de montre démonté sur le plâtre, pièce par pièce, et chaque pièce a son nom écrit à côté.",
      "Personne ne lui a appris cela dans cette ferme. Elle l'a tiré d'une montre ouverte, la nuit, à la chandelle, et recopié au mur pour ne rien perdre. Il y a, tout en bas, à hauteur d'une enfant de neuf ans, le premier dessin de tous : un cercle, douze traits, deux aiguilles. Dessous, une ligne d'écriture, en bâtons, que tu lis sans peine, parce que tu écris de la même façon.",
      { if: { has: "monde:line_lire" }, text: "*MIDI MOINS DIX. ON ME L'A APPRIS AUJOURD'HUI.*" },
      { if: { not: { has: "monde:line_lire" } }, text: "*JE TROUVERAI TOUTE SEULE.*" },
    ],
    choices: [{ back: "K05r_chambres" }] },

  // ------------------------------------------------------------ the bakehouse and the hayloft
  K05r_fournil: { act: "II", title: "Le fournil", backName: "le fournil", place: "ferme",
    text: [
      { first: true, text: "Le fournil est un appentis bas, noir de suie, avec la gueule du four à pain au fond. Sous l'auvent, les hirondelles avaient leurs nids. Elles y sont : cinq nids de boue collés à la solive, et de chacun dépassent des becs jaunes, grands ouverts, qui réclament depuis Pâques." },
      { first: true, text: "La mère est en l'air, à une coudée du troisième nid, les ailes en faux. Elle tient une mouche. La mouche est prise aussi, bien entendu ; mais tu remarques qu'elle l'était un peu moins : elle a eu le temps, avant de s'arrêter tout à fait, de remuer une patte. Les petites choses mettent plus longtemps à se rendre. C'est une des lois de ce pays, et personne ne l'a écrite." },
      { again: true, text: "Les nids, les becs ouverts, l'hirondelle et sa mouche. L'échelle du fenil est appuyée au mur." },
    ],
    choices: [
      { label: "Monter l'échelle", to: "K05r_fenil", hide: { seen: "K05r_fenil" } },
      { back: "K05r_ferme" },
    ] },
  K05r_fenil: { act: "II", title: "Le fenil", place: "ferme",
    text: [
      "Le fenil est au-dessus de l'étable : un plancher, de la paille vieille, une poutre basse où l'on se cogne. Il y fait tiède. Par les fentes du toit, le jour blanc tombe en lames.",
      "{autre} a dormi ici. Tu le sais par le Cahier : *on m'a donné la paille du fenil, au-dessus de l'étable*. Tu cherches le creux, sottement, comme si la paille de 541 pouvait être celle-ci.",
      { if: { has: "monde:line_sait" }, text: "Puis tu lèves les yeux sur la poutre basse. Elle est tachée de suif, en un endroit, de vieilles coulures jaunes : on y a posé une chandelle. Et à partir de cet endroit, vers la droite, elle est entaillée. Ce sont des coches au couteau, nettes, régulières, serrées comme sur une taille de boulanger. Tu les comptes. Tu arrives à cinquante-neuf." },
      { if: { has: "monde:line_sait" }, text: "Les premières sont basses, d'une main de petite fille. Elles montent avec les années, se font plus sûres, plus profondes. Les dernières sont tremblées. Il y en a une par an, taillée au même endroit, la même nuit sans doute, par quelqu'un qui montait cette échelle pour venir la faire. La soixantième place est vide. Elle était pour ce printemps ; la Dormante est arrivée avant la vieille." },
      { if: { has: "monde:line_sait" }, text: "Tu tires ton couteau. Tu fais la soixantième. Tu la fais droite, au même écart que les autres." },
      { if: { not: { has: "monde:line_sait" } }, text: "La poutre basse est tachée de suif, en un endroit, de vieilles coulures jaunes : on y a posé une chandelle, il y a très longtemps, une nuit. Le bois, autour, est lisse. S'il s'est dit quelque chose ici, cette nuit-là, la poutre n'a pas été mise dans la confidence." },
    ],
    choices: [{ back: "K05r_fournil" }] },

  // ------------------------------------------------------------ the guards' fire and the barn
  K05r_bivouac: { act: "II", title: "Le feu debout", place: "ferme", fx: { flag: "r:consigne_lue" },
    text: [
      "Les quatre gardes de faction avaient fait leur feu dans un brasero de fer, à dix pas de la grange. On les a rappelés hier au soir, au galop, pour la battue. Ils ont tout planté là.",
      "Le feu brûle encore, si l'on peut dire. Les flammes sont debout dans le brasero, trois langues orange hautes d'un pied, immobiles, avec leurs pointes bleues et une étincelle arrêtée au-dessus. Elles éclairent. Elles ne chauffent plus : tu y passes la main, et tu n'y trouves qu'une tiédeur d'haleine. Un feu que personne ne tient avec du sable s'endort comme le reste, en commençant par le bord.",
      "Autour, le bivouac. Une gamelle de fèves. Un cornet de cuir, renversé, et au-dessus du tambour qui servait de table, trois dés en l'air : celui qui les a jetés s'est levé avant qu'ils retombent. Tu te penches. Ils montrent, pour autant qu'on puisse lire des dés qui tournent, deux six et quelque chose qui hésite.",
      "Sous la gamelle, un papier. C'est la consigne du poste, d'une écriture de sergent : *Garder la grange jour et nuit. Ne rien toucher au cadre de pierre. Saisir quiconque en sortirait, de quelque façon qu'il soit vêtu, et le mener au camp d'Arvoise sans l'interroger. Le mot pour entrer au camp, jusqu'au Serment : Soixante.*",
      { with: "rouget", text: "Rouget a pris les fèves. Il regarde les dés. « Deux six, et le troisième va faire six aussi, je le sens. Le gars avait gagné. » Il secoue la tête, navré. « Il le saura jamais. »" },
    ],
    choices: [{ back: "K05r_ferme" }] },
  K05r_grange: { act: "II", title: "La grange", backName: "la porte de la grange", place: "ferme",
    text: [
      { first: true, text: "La grange est comme tu l'as quittée : haute, en pierre, plantée de biais dans la cour. On a cloué une planche en travers de la porte, et sur la planche un placard au sceau de cire grise. Un sablier dans un cercle." },
      { first: true, text: "Devant la porte, il y a un homme. Il est assis sur une botte de paille, le dos au vantail, sa hallebarde en travers des genoux, le menton sur la poitrine. Casaque noire. Il dort." },
      { first: true, text: "Tu as déjà la main sur le bras de Rouget pour le tirer en arrière, quand tu vois le reste. Il ne ronfle pas. Sa poitrine ne se lève pas. À sa ceinture, le sablier de la Garde est couché sur le côté, vide, et une mouche est posée sur sa joue, qui ne s'envole pas quand tu approches." },
      { again: true, text: "La porte de la grange, la planche, le placard gris. La botte de paille est contre le vantail." },
    ],
    choices: [
      { label: "Le garde", to: "K05r_gontran", hide: { any: [{ has: "r:gontran_sauve" }, { has: "r:gontran_depouille" }] } },
      { label: "Lire le placard", to: "K05r_scelle", hide: { seen: "K05r_scelle" } },
      { label: "Faire sauter la planche, et entrer", to: "K05r_grange_dedans" },
      { back: "K05r_ferme" },
    ] },
  K05r_gontran: { act: "II", title: "Le quatrième homme", backName: "le garde endormi", place: "ferme",
    text: [
      { first: true, text: "C'est un vieux garde, cinquante ans passés, la moustache grise, des galons de brigadier décousus et recousus. Quand le cavalier est venu rappeler le poste, ses trois camarades ont couru aux chevaux. Lui dormait. On dort facilement, dans la Dormante, quand le sable baisse : c'est même à cela qu'on reconnaît qu'il baisse. Personne ne l'a compté en partant." },
      { first: true, text: "Il n'est pas pris depuis longtemps. Ses paupières ne sont pas tout à fait closes ; dessous, quelque chose glisse encore, très lentement, vers toi. Dans un jour ou deux, il aura fini de te voir. Sa main droite s'est ouverte sur le sablier vide, d'un geste qu'il n'a pas eu le temps d'achever." },
      { first: true, text: "Un pris qu'on tire hors de la lisière reste pris : tout le monde sait cela. On ne les réveille qu'avec du sable. Une pincée posée sur lui, et il a le temps de quelques phrases. Deux, versées dans son sablier, et il a de quoi marcher jusqu'aux jalons, s'il ne traîne pas." },
      { again: true, text: "Le vieux brigadier, sur sa botte de paille, le menton sur la poitrine. Sous ses paupières, le regard continue de venir." },
    ],
    choices: [
      { label: "Poser une pincée sur sa main, et lui parler", if: { stock: "sable", min: 2 }, why: "Il te faut garder du sable pour toi.", hide: { seen: "K05r_gontran_parle" }, fx: { stock: { sable: -1 } }, to: "K05r_gontran_parle" },
      { label: "Verser deux pincées dans son sablier, et le renvoyer chez les vivants", if: { stock: "sable", min: 4 }, why: "Tu n'as pas assez de sable pour deux.", fx: { stock: { sable: -2 }, flag: "r:gontran_sauve", ep: ["histoire", 500] }, to: "K05r_gontran_sauve" },
      { label: "Lui prendre sa casaque, ses bottes et son sabre", fx: { flag: "r:gontran_depouille", item: "casaque_garde" }, to: "K05r_gontran_depouille" },
      { back: "K05r_grange" },
    ] },
  K05r_gontran_parle: { act: "II", title: "Le temps d'une pincée", place: "ferme", fx: { flag: "r:sait_serment" },
    text: [
      "Tu fais couler la pincée dans le creux de sa paume. Le sable luit, et commence aussitôt à s'en aller, grain à grain, bu par la peau.",
      "Le vieux aspire, d'un coup, comme un noyé. Ses yeux s'ouvrent, te trouvent, trouvent Rouget. Sa main se referme sur la hampe. « Qui va... » Puis il voit le sablier vide à sa ceinture, la cour blanche, ses trois camarades absents, et il comprend plus vite que tu n'aurais cru. « Ah. Ils m'ont laissé. »",
      "« Combien ? » Tu dis que c'est le matin, qu'il a dormi une nuit. Il ferme les yeux, soulagé : on en connaît qui ont demandé cela et à qui l'on a répondu des années. « Tu es le glaneur du cahier. Vingt écus. » Il ricane sans force. « Garde ton sable, petit. Écoute plutôt, j'ai peu de temps et je paie mes dettes. Le capitaine est parti pour Arvoise avec la vieille. Monseigneur y sera dans trois jours. Il vient en personne, de Port-Régent, avec toute la Maîtrise et douze voitures bâchées : on prépare quelque chose à Méridane pour le jour du Serment, et ce n'est pas la cérémonie. »",
      "Sa voix ralentit. Les mots s'espacent. « On nous a fait... rendre nos sabliers de réserve. Tous. Tout le sable de la Garde... remonte à Arvoise. On ne tient plus la lisière que... » Il cherche. Sa bouche reste ouverte sur la suite. Dans sa paume, il n'y a plus rien.",
      "Le regard, sous les paupières, a repris son lent voyage vers toi.",
    ],
    choices: [{ back: "K05r_gontran" }] },
  K05r_gontran_sauve: { act: "II", title: "Un homme qu'on renvoie", place: "ferme",
    text: [
      "Tu décroches son sablier, tu y fais couler deux pincées, tu le redresses dans son anneau. Le sable gris descend dans le col. Le vieux aspire d'un coup, comme un noyé, et ses yeux s'ouvrent.",
      "Il lui faut le temps de trois phrases pour comprendre où il est, qui tu es, et ce que tu viens de faire. Il regarde le sablier plein, puis le tien, où il reste moins. « Tu es le glaneur du cahier, dit-il lentement. Vingt écus sur ta tête. Et tu me... » Il n'achève pas. Il se lève, raide, en s'aidant de la hallebarde.",
      "« Gontran, brigadier, vingt-huit ans de lisière. J'ai pendu des gens de ton métier. » Il le dit comme on décline ses titres, pour que le marché soit clair. « Je ne t'ai pas vu. Je me suis réveillé seul. Voilà mon rapport. » Il hésite, et ajoute, plus bas : « Si tu vas où je crois, le mot du camp d'Arvoise est *Soixante*. Et n'y va pas par la porte : va par les cuisines. C'est ma belle-sœur qui les tient, la grosse Mahaut. Dis-lui que Gontran lui doit une vie, et qu'il la lui fait porter. »",
      "Il s'en va par le portail, du pas compté des vieux soldats, sans se retourner. À la corde aux chiffons, il aura encore du sable pour un quart d'heure.",
      { with: "rouget", text: "Rouget le regarde partir, la bouche ouverte. « Deux pincées. Pour une casaque noire. » Il se tourne vers toi. Il n'est pas en colère : il essaie de comprendre, de toutes ses forces. « C'est comme pour ta sœur ? Ça vaut rien, et tu le fais quand même ? »", },
    ],
    choices: [{ back: "K05r_grange" }] },
  K05r_gontran_depouille: { act: "II", title: "Une casaque noire", place: "ferme",
    text: [
      "Un pris ne se déshabille pas volontiers : ses bras ont la raideur du bois. Il faut découdre. Rouget s'y entend ; il a la casaque en un tour de main, par les coutures d'épaule, puis les bottes, qui viennent mieux. Le sabre reste dans sa main gauche, qu'on n'ouvre pas.",
      "Le vieux brigadier est en chemise sur sa botte de paille, le menton sur la poitrine. Sous ses paupières, le regard continue de venir vers toi. Il arrivera demain, ou après-demain. Il verra une cour vide.",
      "La casaque est à ta taille, à peu près, si tu roules les manches. Elle sent le tabac et la graisse d'armes. Avec le sablier d'or sur la poitrine, on passe un poste de loin ; de près, il faut encore la figure qui va dessous.",
    ],
    choices: [{ back: "K05r_grange" }] },
  K05r_scelle: { act: "II", title: "Le placard gris", place: "ferme",
    text: [
      "*De par Monseigneur le Maître des Sables, Grand Officier de la Régence. Ce lieu est sous scellé. Il est défendu à quiconque d'y entrer, d'y creuser, d'en ôter pierre, et singulièrement de toucher au cadre qui s'y trouve, sous peine de la vie. Fait à Port-Régent, le premier jour de juin de l'an 601.*",
      "Le premier jour de juin. Il y a treize jours. Tu comptes sur tes doigts : à cette date, {autre} n'avait pas passé la porte ; la vieille n'avait rien dit à personne, pas même à toi. Quelqu'un, à Port-Régent, savait déjà qu'il y avait dans cette grange un cadre de pierre, et qu'on voudrait y toucher.",
      "Dessous, une signature : *Melchior*, d'une encre brune, et un paraphe.",
      { after: "r:sait_main", text: "Tu regardes le *d* de *défendu*, que le scribe a laissé à son maître le soin de corriger à la plume, dans la marge. Il penche en arrière. Comme un homme qui recule, a dit la vieille." },
    ],
    choices: [{ back: "K05r_grange" }] },
  K05r_grange_dedans: { act: "II", title: "Le cadre, de jour", backName: "le fond de la grange", place: "ferme", hub: true,
    text: [
      { first: true, text: "La planche tient par quatre clous de charpentier. Tu passes sous le fer de la hallebarde et tu pèses ; le bois crie, cède. Dedans, le jour entre par la porte et s'arrête à mi-chemin, comme tout le monde." },
      { first: true, text: "Le cadre est au fond, dans son mur. Deux montants, un linteau, douze entailles. La faux pend toujours dans la maçonnerie, avec sa toile d'araignée. Tu as vu {autre} entrer là-dedans, il y a deux nuits, à minuit, en redressant un sablier ; tu as vu le mur devenir autre chose qu'un mur, le temps de douze coups, puis redevenir mur. C'est un souvenir qu'on n'ose pas regarder en face, de peur qu'il ait changé aussi." },
      { first: true, text: "Les hommes du capitaine ont travaillé ici. Il y a des éclats de moellon par terre, un ciseau épointé, un autre cassé net. Ils ont attaqué le mur autour du cadre, et le mur est venu. Ils ont attaqué le cadre. La pierre sombre n'a pas une rayure." },
      { again: true, text: "Le fond de la grange. Le cadre de pierre sombre, la faux, les éclats par terre." },
    ],
    choices: [
      { label: "Le cadre", to: "K05r_cadre", hide: { seen: "K05r_cadre" } },
      { label: "Lever les yeux sur la grosse poutre", to: "K05r_poutre", hide: { seen: "K05r_poutre" } },
      { back: "K05r_grange" },
    ] },
  K05r_cadre: { act: "II", title: "Ce que sue la pierre", place: "ferme", fx: { stock: { sable: 1 } },
    text: [
      "Tu poses la main à plat sur le montant de droite. La pierre est tiède. Elle l'est comme le chat : d'une chaleur qui ne vient pas du jour.",
      "Dans la niche, de la taille d'un œuf, où la vieille avait couché le sablier de laiton, il n'y a plus rien. Tu y mets deux doigts. Tu les retires gris. Le fond de la niche est tapissé d'une poussière fine, luisante, qui s'y est amassée depuis deux nuits : la pierre en sue, elle aussi, comme le bronze des bornes, et personne n'est venu la balayer.",
      "Tu racles avec ta plume, jusqu'au dernier grain. Une pincée. Tu la fais couler dans le col.",
      "En te relevant, tu regardes le linteau. Douze entailles, la douzième plus longue. Tu les as comptées l'autre nuit sans y penser. Tu y penses.",
    ],
    choices: [{ back: "K05r_grange_dedans" }] },
  K05r_poutre: { act: "II", title: "La poutre", place: "ferme",
    text: [
      "Tu lèves la tête. La grosse poutre traverse la grange à dix pieds du sol. Tu l'as regardée il y a deux nuits, à la lanterne, par habitude de regarder ce qu'il y a à prendre. Elle était noire et lisse. Tu en mettrais ta main au feu.",
      { if: { all: [{ has: "monde:marque_poutre" }, { has: "monde:poutre_lettres" }] }, text: "Elle est noire. Elle porte, vers le milieu, du côté du fenil, deux lettres taillées au couteau, hautes d'une main, côte à côte. Le bois, au fond des entailles, a la même couleur que le reste ; la poussière s'y est couchée, et une araignée y a fait son coin. Ces lettres ont soixante ans. Elles n'y étaient pas avant-hier." },
      { if: { all: [{ has: "monde:marque_poutre" }, { not: { has: "monde:poutre_lettres" } }] }, text: "Elle est noire. Elle porte, vers le milieu, du côté du fenil, des marques taillées au couteau, hautes d'une main. Le bois, au fond des entailles, a la même couleur que le reste ; la poussière s'y est couchée, et une araignée y a fait son coin. Ces marques ont soixante ans. Elles n'y étaient pas avant-hier." },
      { if: { has: "monde:marque_poutre" }, text: "Tu montes à l'échelle du fenil. Tu te penches, tu touches. La première lettre est la sienne, la seconde la tienne. {autre} s'est tenu{autre:e} là, à cette place, penché{autre:e} comme toi, un couteau à la main, en pensant à quelqu'un qui lèverait une lanterne. Tu avais levé la lanterne avant. Il a fallu que tu reviennes pour que ce soit après." },
      { if: { has: "monde:marque_poutre" }, text: "*Lève ta lanterne sur la grosse poutre.* Tu redescends. Tu as les jambes d'une personne à qui l'on vient de prouver quelque chose." },
      { if: { not: { has: "monde:marque_poutre" } }, text: "Elle est noire et lisse. Tu montes tout de même à l'échelle du fenil, tu te penches, tu passes la paume sur le bois : rien, de la poussière, un nœud. {autre} est passé{autre:e} sous cette poutre sans y toucher. On ne pense pas à tout, la première journée qu'on passe chez les morts d'avance." },
    ],
    choices: [{ back: "K05r_grange_dedans" }] },

  // ------------------------------------------------------------ the orchard, the Aulnes
  K05r_verger: { act: "II", title: "Le verger", backName: "le verger", place: "ferme", ambiance: "champs",
    text: [
      { first: true, text: "Derrière la maison, un verger de pommiers descend vers les prés. Il était en fleur, le lundi de Pâques. Il l'est. Les pétales qui tombaient ce matin-là sont en l'air, par milliers, blancs et roses, du haut des branches jusqu'à l'herbe : on marche dans une neige arrêtée, et il faut l'écarter du visage comme un rideau de perles." },
      { first: true, text: "Au bout du verger, six ruches de paille sur un banc. Un essaim en sortait. Il fait devant la troisième ruche un nuage brun, gros comme une barrique, où chaque abeille tient sa place avec une exactitude d'horloge. Elles ne bourdonnent pas. Si l'on colle l'oreille, on entend autre chose : une note très basse, continue, qui est peut-être leur bruit, étiré sur un an." },
      { again: true, text: "Les pommiers, la neige de pétales, les ruches. Au-delà de la haie, à deux cents pas, le toit de chaume des Aulnes." },
    ],
    fx: { item: "miel" },
    choices: [
      { label: "Pousser jusqu'aux Aulnes : la femme penchée sur sa soupe allait dire quelque chose", to: "K05r_aulnes_mot", if: { stock: "sable", min: 3 }, why: "Il te faudrait une pincée à poser, et tu n'en as pas de reste.", hide: { seen: "K05r_aulnes_mot" } },
      { back: "K05r_ferme" },
    ] },
  K05r_aulnes_mot: { act: "II", title: "Le mot de la femme des Aulnes", place: "ferme", fx: { stock: { sable: -1 }, flag: "r:mot_aulnes", ep: ["histoire", 300] },
    text: [
      "La porte est entrebâillée, comme toujours. La soupe, le chat sur l'âtre, les deux qui dînent. L'homme a sa cuiller en l'air. La femme est penchée vers lui, les lèvres ouvertes, les yeux plissés, sur le point de dire une chose drôle.",
      "Elle est sur le point de la dire depuis Pâques. Tu es passé{e} devant cette table des dizaines de fois, pour un portrait, pour une cachette ; tu t'es assis{e} devant la troisième écuelle. Tu ne supportes plus de ne pas savoir.",
      "C'est une dépense absurde. Tu prends une pincée, et tu la poses sur le dos de sa main, celle qui tient le pain.",
      "La femme achève son geste. Sa voix sort, chaude, un peu rauque, au milieu d'une phrase commencée il y a deux mois : « ...et alors je lui ai dit, à la Thomasse : mon homme, c'est comme l'horloge de l'église. Il retarde, il sonne faux, mais au moins on sait toujours où il est ! » Elle rit. Elle rit toute seule, de bon cœur, en regardant son mari, qui ne rit pas, la cuiller en l'air, et dont elle attend qu'il rie.",
      "Elle s'étonne. Elle tourne la tête. Elle te voit, à la place de l'invité. « Tiens ! Vous voilà, vous ? Asseyez-vous donc, ça va refr... »",
      "La pincée a fini de couler. La femme des Aulnes est tournée vers toi, à présent, pour un an ou pour cent, avec le reste de son rire sur la figure et une invitation dans les yeux. Son mot est dit. L'homme, en face, n'a pas bougé : il l'entendra quand tout le monde entendra tout.",
      "Tu sors à reculons. Tu as dépensé le quart d'une nuit de sable pour une plaisanterie sur un mari, et tu ne trouves pas que ce soit cher.",
    ],
    choices: [{ back: "K05r_verger" }] },

  // ------------------------------------------------------------ Rouget and the notebook
  K05r_rouget_cahier: { act: "II", title: "Un bonhomme", place: "ferme",
    text: [
      "Rouget a sorti le Cahier de ton sac. Il le tient à l'envers, ouvert, et il regarde les deux écritures avec la méfiance qu'il a pour tout ce qui parle sans bouche.",
      "« C'est là-dedans qu'il te cause, l'autre ? Celui qui est passé dans le mur ? » Tu fais oui. « Et il est où, là, maintenant ? » Tu cherches comment dire. Tu dis : ici. Dans cette cour, peut-être, à cette place. Seulement soixante ans plus tôt. Rouget regarde autour de lui, les galets, le puits, comme s'il allait surprendre quelqu'un derrière le jour.",
      "« Il y a des poules, là où il est ? » Oui. « Et à manger ? » Du pain blanc. Rouget pousse un sifflement. Puis, après un silence : « Je sais pas écrire. Mais je peux lui faire un dessin, pour qu'il sache que t'es pas tout{e} seul{e}. Ça passe, un dessin ? »",
    ],
    choices: [
      { label: "Lui tendre la mine de plomb", fx: { flag: "monde:rouget_dessin", conf: { rouget: 10 } }, to: "K05r_rouget_dessin" },
      { label: "« Les pages sont comptées. Rends-moi ça. »", fx: { conf: { rouget: -5 } }, to: "K05r_ferme" },
    ] },
  K05r_rouget_dessin: { act: "II", title: "Signé", place: "ferme",
    text: [
      "Il s'applique, la langue entre les dents, le Cahier sur un genou. Cela prend le temps d'un Pater et de trois Ave.",
      "C'est un bonhomme. Il a une tête ronde, des cheveux en flammes, deux bras qui partent du cou, et une fronde. À côté, un second bonhomme, un peu plus grand, qui est toi, à en juger par les pieds, auxquels il a mis des sabots énormes. Ils se tiennent par la main. Au-dessus, quelque chose qui pourrait être un chat, ou un nuage.",
      "« C'est le chat, précise Rouget. En l'air. Pour qu'il voie qu'on y est vraiment. » Il te rend le Cahier, très digne. Le dessin pâlit déjà dans le papier, par les bords.",
    ],
    choices: [{ back: "K05r_ferme" }] },

  K05r_midi: { act: "II", title: "Vingt toises", place: "ferme",
    text: [
      "Tu sors par le portail. La borne de la vingt-troisième lieue est à vingt toises, au bord de la chaussée, grise, penchée. Ce matin, tu t'y es adossé{e} sans rien savoir de son pied.",
      "Maintenant tu sais. *Une coudée de profondeur, du côté où la pierre fait de l'ombre à midi.* Il n'y a pas d'ombre, dans ce jour-là. Tu cherches le nord au lichen, et tu t'agenouilles.",
      { with: "rouget", text: "« On creuse ? dit Rouget, intéressé. Y a quoi ? » Tu réponds que tu n'en sais rien, et que c'est bien la première fois de ta vie que tu creuses à un endroit où l'on a mis quelque chose exprès pour toi." },
    ],
    choices: [{ label: "Ouvrir le Cahier, et tirer ton couteau", to: "M05", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      gontran: { name: "Le brigadier Gontran", f: false, aka: ["Gontran", "le brigadier"], face: { age: "mur", skin: "hale", hair: "gris", coif: "court", beard: "moustache", eyes: "tombants", iris: "brun", nose: "large", lips: "fines", shape: "carre" },
        aspect: { allure: "cinquante ans passés, la moustache grise", habits: "des galons décousus et recousus", signe: "le pas compté des vieux soldats" }, qui: "Un brigadier de la Garde du Sable.", desc: "Vingt-huit ans de lisière. Ses camarades l'ont oublié à son poste, devant la grange de la Ferme-Vieille." },
    },
    items: {
      cuillers_etain: { name: "Six cuillers d'étain et un chandelier", kind: "divers", price: 3, desc: "Glanés dans la cuisine de la Ferme-Vieille. Un demi-écu la cuiller, chez qui ne demande pas d'où." },
      casaque_garde: { name: "Casaque de la Garde du Sable", kind: "divers", keep: true, price: 0, desc: "Une casaque noire au sablier d'or, avec des galons de brigadier, et une paire de bottes. De loin, elle fait un garde." },
      miel: { name: "Rayon de miel", kind: "soin", heal: 4, unique: false, price: 2, desc: "Un rayon pris à une ruche de la Ferme-Vieille. Les abeilles n'ont rien dit." },
    },
  },
};
