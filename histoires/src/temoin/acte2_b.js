// Act II · Les Combes: the ruins and the door, the chimney, the barn and the hayloft (the notebook, the ladder, the
// roof), the empty stable, the old gallery; Matthias comes up; talks on the way; the eve of the assizes.

module.exports = {
  V_combes: { act: "II", title: "Les Combes", place: "combes", hub: true, routes: true, backName: "la cour des Combes",
    fx: { meet: ["gaspard"] },
    text: [
      { first: true, text: "Le replat des Combes est plus petit que tu ne l'imaginais : quarante pas sur soixante, à vue de chaîne. Une cour en terre battue, sous une neige souillée de cendre. À gauche, la grange et l'étable, intactes, longues, au toit de lauzes. À droite, ce qui était la maison : quatre murs de pierre noircis, à ciel ouvert, et par les fenêtres vides on voit le ciel. L'odeur persiste. Le bois mouillé, la suie, et sous la suie, cette autre odeur, grasse, que tout le monde évite de nommer." },
      { first: true, text: "Derrière la maison, le terrain plonge dans un ravin boisé. Au fond, quelque part, coule le torrent. Et tu sais, sans savoir comment, qu'à mi-pente, cachée par les sapins, s'ouvre l'entrée d'une vieille galerie." },
      { again: true, text: "La cour des Combes. Le sergent Bastien s'est assis sur le bord de l'abreuvoir et fume sa pipe rétive, le dos tourné aux ruines." },
      { if: { present: "lise" }, text: "Lise se tient au milieu de la cour, immobile. Elle tourne le dos à la maison. Elle regarde la grange." },
    ],
    choices: [
      { label: "La maison", to: "V_ruines" },
      { label: "La cheminée, dans les décombres", to: "V_conduit" },
      { label: "La grange et le fenil", to: "V_grange" },
      { label: "L'étable", to: "V_etable_combes" },
      { label: "Descendre dans le ravin, vers la vieille galerie", to: "V_galerie" },
      { back: "V_place" },
    ] },

  // the house and the door
  V_ruines: { act: "II", title: "La maison", place: "combes",
    fx: { quest: "V_pas" },
    text: [
      "On entre par l'endroit où était la porte. Le seuil de pierre est resté. La porte elle-même est tombée en avant, dans la cour, à moitié brûlée : de grosses planches de mélèze, noircies, et encore fixé dessus, tordu par la chaleur, un loquet de fer. Un anneau, une barre.",
      "À l'intérieur, la cuisine, ou ce qu'il en reste. Le poêle de fonte, fendu. Une table effondrée. Un escalier de pierre qui monte vers le vide. Dans un coin, une petite pièce basse : la souillarde, avec un évier de pierre et une fenêtre étroite dont les montants ont éclaté.",
    ],
    choices: [
      { label: "Examiner la porte tombée", hide: { seen: "V_porte" }, to: "V_porte" },
      { label: "Entrer dans la souillarde", hide: { seen: "V_souvenir_porte" }, to: "V_souvenir_porte" },
      { label: "Monter l'escalier qui ne mène nulle part", hide: { seen: "V_escalier" }, to: "V_escalier" },
      { back: "V_combes" },
    ] },
  V_porte: { act: "II", title: "La porte", place: "combes",
    text: [
      "Tu t'accroupis près de la porte. L'anneau du loquet est du côté qui était dedans : c'est le côté qu'on tire pour ouvrir quand on sort. De l'autre côté, sur la face qui donnait sur la cour, il y a autre chose. Deux crampons de fer, plantés dans le chambranle de pierre, à hauteur de hanche, et encore coincé dans l'un d'eux, un bout de madrier calciné.",
      "Une barre. Quelqu'un a barré la porte de l'extérieur.",
      "Tu examines les crampons de plus près. Ils sont neufs. Les clous qui les tiennent brillent sous la suie, sans une trace de rouille, et le mortier autour est éclaté de frais. Une porte de ferme se barre de l'intérieur, contre les loups et les voleurs. Ces crampons-là ont été posés dehors, pour enfermer.",
      { if: { clue: "h_anneau" }, text: "Tu ouvres ta main bandée et tu la poses à plat au-dessus de l'anneau tordu, à un doigt du fer. La forme est la même." },
    ],
    fx: { flag: "porte:barree", ep: ["histoire", 3000] },
    choices: [{ back: "V_ruines" }] },
  V_souvenir_porte: { act: "II", title: "Un souvenir", place: "combes",
    text: [
      "La souillarde est si petite que tu dois baisser la tête. L'évier, la fenêtre éclatée. Et c'est là que ça revient, comme une gifle.",
      "La fumée. Tu es aveugle, tu tousses, ta tête saigne et sonne. Quelqu'un tousse à côté de toi, plus petit, plus aigu. Tu te traînes jusqu'à la porte, tu trouves l'anneau dans le noir, tu tires, et l'anneau est brûlant, il te mord la main jusqu'à l'os, et tu tires quand même, et la porte tient. Elle tient. Elle tient.",
      "Alors tu lâches, et tu cherches autre chose. Un tabouret. La fenêtre de la souillarde. Tu frappes jusqu'à ce que le bois éclate. Tu prends l'enfant qui tousse, tu la soulèves, elle est légère, tu la pousses dehors par la fenêtre, dans la neige. Tu passes derrière elle. Tes épaules restent coincées. Tu forces. Tu tombes.",
      "Dehors, la neige, le froid, une lanterne qui se balance au coin de la maison, et une voix d'homme qui crie un prénom, perdu dans le vent.",
    ],
    choices: [
      { label: "Garder ce souvenir", fx: { flag: "garde:porte", quest: "V_pas", ep: ["histoire", 3000] }, back: "V_ruines" },
      { label: "Ne pas y croire", fx: { flag: "doute:porte" }, back: "V_ruines" },
    ] },
  V_escalier: { act: "II", title: "L'escalier", place: "combes",
    text: [
      "Tu montes trois marches. Au-dessus, le vide : le plancher de l'étage est tombé dans la cuisine avec les lits. Accroché au mur reste un petit cadre de bois noirci, une image pieuse ou un portrait. Le verre a éclaté. Dessous, un rond plus clair marque la place d'un visage.",
      { if: { present: "lise" }, text: "Lise est restée en bas, au pied des marches. Elle te regarde, du seuil, comme on regarde quelqu'un marcher sur une tombe." },
    ],
    choices: [{ back: "V_ruines" }] },

  // the chimney
  V_conduit: { act: "II", title: "La cheminée", place: "combes",
    text: [
      "La cheminée est tombée avec le toit, mais la base du conduit tient encore : une gaine de pierre carrée, d'un pied et demi de côté, qui monte du poêle sur deux toises. Elle est pleine de décombres : de la suie, des lauzes brisées, des débris de chevrons.",
      { if: { has: "cheminee:froide" }, text: "*La cheminée ne fumait pas.* Tu regardes le conduit, et la phrase te revient, venue de très loin." },
    ],
    choices: [
      { label: "Fouiller dans la gaine, à mains nues", hide: { item: "toile" }, test: { dom: "nature", label: "Nature", help: [{ with: "lise", v: 15 }, { with: "odeline", v: 10 }] },
        win: { fx: { item: "toile", clue: "h_sac", ep: ["histoire", 3500] }, to: "V_conduit_trouve" }, lose: { fx: { pv: -2 }, to: "V_conduit_rien" } },
      { back: "V_combes" },
    ] },
  V_conduit_trouve: { act: "II", title: "Le sac", place: "combes",
    text: [
      "Tu plonges les bras dans la suie jusqu'aux coudes. Ta main brûlée hurle. À mi-hauteur de la gaine, quelque chose résiste : une pierre plate, grosse comme deux mains, avec une corde nouée autour, et attaché à la corde, un lambeau de toile grossière, roussie, qui s'effrite quand tu tires.",
      "Sur la toile, au pochoir, deux lettres que le feu a épargnées parce qu'elles étaient pliées vers l'intérieur. C. P.",
      "Une pierre, une corde, un sac. Le sac au-dessus, dans le conduit. La pierre pour le faire descendre et le tenir. Le conduit bouché. La cheminée qui ne fume pas.",
      { if: { present: "lise" }, text: "Lise regarde la toile. Elle se met à trembler, d'abord les mains, puis tout le corps. Ses yeux restent secs. Elle tremble, debout dans la cendre, et Sœur Odeline la prend contre elle." },
      { if: { has: "marthe:sac" }, text: "*Il a pris un sac propre sur la pile, sans payer, et il a dit que c'était pour rapporter du bois.*" },
    ],
    choices: [{ back: "V_combes" }] },
  V_conduit_rien: { act: "II", title: "La suie", place: "combes",
    text: ["Tu fouilles jusqu'à perdre la sensation de tes bras. Tu remontes de la suie, des pierres, des clous. Une lauze glisse et t'entaille le poignet. Tu ressors noir jusqu'aux épaules, les mains vides. Il faudrait des outils, de la patience, ou quelqu'un qui connaît cette cheminée mieux que toi."],
    choices: [{ back: "V_combes" }] },

  // the barn
  V_grange: { act: "II", title: "La grange", place: "combes", backName: "la grange",
    text: [
      "La grange est intacte. Une longue nef de bois sur un soubassement de pierre, qui sent le foin, la poussière et le cuir. Au fond, une échelle monte au fenil. Dehors, contre le pignon qui fait face à la maison, une autre échelle, longue, appuyée au mur, monte jusqu'aux lauzes du toit.",
    ],
    choices: [
      { label: "Regarder l'échelle du pignon", hide: { seen: "V_echelle" }, to: "V_echelle" },
      { label: "Monter au fenil", to: "V_fenil" },
      { back: "V_combes" },
    ] },
  V_echelle: { act: "II", title: "L'échelle", place: "combes",
    fx: { clue: "h_toit", ep: ["perso", 600] },
    text: [
      "Une échelle de bois de frêne, de vingt échelons, soit trois toises. Elle est appuyée contre le pignon de la grange, du côté de la maison. Du haut de la grange, par le faîte, on peut passer sur le toit de la maison : avant le feu, les deux bâtiments se touchaient presque.",
      "Au pied de l'échelle, dans la neige tassée puis regelée, des traces de bottes, larges, à gros clous. Des bottes de mineur. Aux Combes, en plein hiver, personne n'avait de raison de monter sur un toit. Et personne n'a eu le temps de reprendre l'échelle.",
    ],
    choices: [{ back: "V_grange" }] },
  V_fenil: { act: "II", title: "Le fenil", place: "combes",
    text: [
      "Le fenil est sombre et chaud, à peine éclairé par une lucarne dans le toit. Du foin jusqu'aux genoux. Dans un coin, un creux, la forme d'un corps qui a dormi là plusieurs nuits. À côté, une couverture pliée, et une besace : l'autre, la petite, celle des papiers, que tu avais oubliée.",
    ],
    choices: [
      { label: "Ouvrir ta petite besace", hide: { item: "carnet" }, fx: { item: "carnet", quest: "V_pas", ep: ["histoire", 3000] }, to: "V_carnet" },
      { label: "T'allonger dans le creux du foin, et regarder la lucarne", hide: { seen: "V_souvenir_toit" }, to: "V_souvenir_toit" },
      { back: "V_grange" },
    ] },
  V_carnet: { act: "II", title: "Ton carnet", place: "combes",
    text: [
      "Ton carnet d'arpentage, relié de toile cirée. Tu l'ouvres. C'est ton écriture, nette, penchée, celle de quelqu'un qui écrit dehors, sur son genou, par tous les temps.",
      "*Vaugrenat, le premier soir. Au Chamois. Le frère est là, revenu des mines du bas : Matthias. Il paie les tournées.*",
      "*Relevé de la parcelle 114. Au fond du ravin, la vieille galerie dite « trou des anciens » : filon de galène argentifère. Bien plus riche que ce que croit P.*",
      "*Reçu de Maître Pélissier pour le compte de la C. P. : vingt écus, pour relevé discret de la parcelle 114.*",
      "Tu relis la dernière ligne trois fois. Puis tu remarques dans la marge, au crayon, d'une main d'enfant : une rose des vents, un petit bonhomme qui tient une chaîne, et un nom. *Lise.*",
      { if: { has: "passe:dette" }, text: "Vingt écus. L'échéance. Tu sais maintenant d'où viennent les écus neufs. Ils viennent de toi." },
      { if: { not: { has: "passe:dette" } }, text: "Vingt écus. Tu sais maintenant d'où viennent les écus neufs. Tu n'as même pas l'excuse d'en avoir eu besoin." },
    ],
    choices: [{ back: "V_fenil" }] },
  V_souvenir_toit: { act: "II", title: "Un souvenir", place: "combes",
    text: [
      "Tu t'allonges dans le creux. Le foin pique. La lucarne, au-dessus, découpe un carré gris. Tu fermes les yeux.",
      "La nuit. Tu te réveilles, à cause du froid, ou d'un bruit : un raclement sur les lauzes, au-dessus de ta tête, puis plus loin. Tu ouvres les yeux. Par la lucarne, tu vois le toit de la maison voisine, sous la lune, et sur ce toit, près de la cheminée, une silhouette. Un homme, accroupi, une lanterne posée à côté de lui sur les lauzes. Il fait quelque chose à la cheminée.",
      "Tu penses : *Gaspard. Il répare son conduit. Un fermier, la nuit, sur son toit, ça arrive.* Tu penses : *il fait froid.* Tu te retournes dans le foin. Tu te rendors.",
      "Tu te rendors.",
    ],
    fx: { recit: "v_hero_toit" },
    choices: [
      { label: "Garder ce souvenir", fx: { flag: "garde:toit", quest: "V_pas", ep: ["histoire", 3000] }, back: "V_fenil" },
      { label: "Ne pas y croire", fx: { flag: "doute:toit" }, back: "V_fenil" },
    ] },

  // the stable
  V_etable_combes: { act: "II", title: "L'étable", place: "combes",
    text: [
      "L'étable est vide. Les voisins sont montés chercher les bêtes le lendemain du feu : des vaches se gardent, même quand on enterre leurs maîtres. Il reste les mangeoires, les chaînes pendues aux anneaux, l'odeur. Dans la dernière stalle, de la paille noircie de sang séché, et une lanterne accrochée à la poutre, éteinte.",
      { if: { present: "lise" }, text: "Lise entre derrière toi. Elle va droit à la dernière stalle, s'accroupit et pose la main sur la paille. Puis elle sort de sa poche la cinquième poupée de paille, celle qu'elle avait gardée, et la pose là, dans la stalle vide." },
    ],
    fx: { flag: "etable:vue" },
    choices: [
      { label: "Décrocher la lanterne", hide: { seen: "V_lanterne" }, to: "V_lanterne" },
      { back: "V_combes" },
    ] },
  V_lanterne: { act: "II", title: "La lanterne", place: "combes",
    text: [
      "Une lanterne de corne et de fer-blanc, ordinaire, la même que dans toutes les fermes. Il reste dedans un bout de chandelle, consumé jusqu'au fond : une chandelle de six heures, qui a brûlé toute une nuit, la nuit du veau, pendue à cette poutre. Tu la tenais, puis tu l'as accrochée là pour avoir les mains libres. Elle est restée à sa place depuis.",
      "Ta lanterne à toi était là. Toute la nuit. Dans l'étable, loin de tout toit.",
    ],
    fx: { flag: "lanterne:etable", ep: ["histoire", 2000] },
    choices: [{ back: "V_etable_combes" }] },

  // the old gallery
  V_galerie: { act: "II", title: "Le trou des anciens", place: "combes",
    text: [
      "Un sentier raide descend dans le ravin, entre les sapins. À mi-pente, une entrée basse s'ouvre dans la roche, étayée de vieux bois gris : le trou des anciens. Une galerie creusée par des mains oubliées, il y a si longtemps que la mémoire du village s'arrête avant elle, et abandonnée depuis.",
      "À l'intérieur, à vingt pas, la roche change de couleur. Une veine grise, brillante, épaisse comme deux mains, court dans la paroi et s'enfonce dans le noir.",
      "Contre la paroi, des outils neufs : deux pioches, un pic, une lampe de mineur, une corde. Les manches sont encore blancs, sans une trace de main. Quelqu'un est venu ici depuis le feu, et compte revenir.",
    ],
    fx: { flag: "galerie:outils" },
    choices: [
      { label: "Toucher la veine", hide: { seen: "V_souvenir_galerie" }, to: "V_souvenir_galerie" },
      { label: "Remonter", back: "V_combes" },
    ] },
  V_souvenir_galerie: { act: "II", title: "Un souvenir", place: "combes",
    text: [
      "La roche est froide et grasse sous tes doigts. Et ça revient, tout simplement, comme un nom qu'on cherchait.",
      "Une fille de quatorze ans, une natte châtain clair, un bonnet de laine, qui marche devant toi avec une lampe et qui se retourne pour voir ta tête. Elle dit : *là. Papa dit que c'est du plomb. Mais ça brille trop, pour du plomb.* Tu grattes la veine avec la pointe de ton couteau, tu regardes, tu dis : *c'est de l'argent. Pas beaucoup. Assez.*",
      "Elle te regarde, très sérieuse. Elle dit : *ne le dis pas à papa. Il dit que la mine mange les hommes. Mon oncle y a perdu deux doigts.* Puis elle sourit. *Tu m'apprendras à faire la carte ? Pour que je sache où c'est, plus tard, quand je serai grande.*",
      "Et tu dis oui.",
    ],
    choices: [
      { label: "Garder ce souvenir", fx: { flag: "garde:galerie", ep: ["histoire", 2500] }, back: "V_galerie" },
      { label: "Ne pas y croire", fx: { flag: "doute:galerie" }, back: "V_galerie" },
    ] },

  // talks on the way
  B_lise_carte: { title: "Lise et la carte",
    text: [
      "Vous vous arrêtez pour souffler. Lise prend ton carnet, l'ouvre à une page blanche, et se met à dessiner, la langue entre les dents. Le chemin, le ravin, la croix des Gélines, l'hospice. Elle met une rose des vents dans un coin, et la place juste, le nord au nord : elle a regardé ta boussole.",
      "Elle te tend le carnet et attend. Tu examines la page. L'échelle manque, et les courbes de niveau, et les distances, et le relief. Mais c'est une carte. Une vraie carte, la première qu'elle ait faite seule.",
    ],
    choices: [
      { label: "Lui montrer comment on marque le relief", fx: { conf: { lise: 10 }, flag: "lise:carte" }, to: "@ret" },
      { label: "Lui dire que c'est juste, et lui rendre le crayon", fx: { conf: { lise: 5 }, flag: "lise:carte" }, to: "@ret" },
    ] },
  // the eve of the assizes: end of act II
  V_veille: { act: "II", title: "La veille", place: "village",
    fx: { leave: "lise", quest: "V_pas" },
    text: [
      "Le bailli Dorval arrive en fin d'après-midi, dans une voiture fermée tirée par deux chevaux qui fument. Il descend à l'étude de Maître Pélissier, où il dîne et où il dort. Tout le village le regarde entrer, en silence. Chacun a compris.",
      { if: { conf: "hennequin", min: 50 }, text: "Le prévôt Hennequin vient te voir au Chamois, le soir. Il s'assied sur ton lit, son chapeau sur les genoux. « J'ai donné mon dossier au bailli, dit-il. Il l'a mis sous son assiette sans l'ouvrir. Demain, il commence par vous. » Il se relève. « Dormez. Si vous pouvez. »" },
      { if: { conf: "hennequin", max: 49 }, text: "Le prévôt Hennequin passe sous ta fenêtre, les yeux au sol. Bastien, sur sa chaise, devant ta porte, a l'air d'un homme qui garde un condamné." },
      "Lise et Sœur Odeline sont rentrées au presbytère. La place se vide. Les lumières s'éteignent une à une, sauf à l'étude du notaire, d'où montent des rires, et chez le docteur, où une lampe brûle tard.",
      "Tu dors mal, ou tu rêves d'une porte. Puis, vers deux heures, des coups de poing ébranlent ta porte, et tu entends la voix de Sœur Odeline crier, pour la première fois depuis que tu la connais.",
    ],
    choices: [{ label: "Fin de l'acte II", big: true, to: "J_veille" }] },
};
