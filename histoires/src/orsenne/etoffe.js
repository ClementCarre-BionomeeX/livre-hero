// More of the house, for both readings unless tagged: the register, the kitchen and the cat, the minerals that glow,
// the automata one may wind, the portrait of Pauline, the sealed bedroom, the late visitor (first night), and in the
// second night, the talks in the tower, the city on the table, the cord of the bear.
module.exports = {
  // ------------------------------------------------------------------ the lodge
  A_registre: { act: "I", title: "Le registre", place: "loge",
    text: [
      "Le registre de garde est un gros cahier relié de toile noire, dont les pages, du temps où la maison avait un concierge, portent des colonnes à l'encre brune : l'heure, la ronde, *rien à signaler*. Des centaines de *rien à signaler*, d'une écriture de plus en plus tremblante, sur des années. Puis, le 13 octobre, en travers de la page, d'une autre main : *Monsieur est mort à trois heures dix-sept.* Et plus rien.",
      { second: false, text: "Tu trempes la plume et tu écris la date, l'heure, et ton nom. Ta ligne a l'air bien seule au bas de cette colonne de silences." },
      { second: true, text: "Tu trempes la plume, et tu restes la main en l'air. Il y a une heure, tu as écrit ton nom sur cette ligne. Elle est vierge. Tu écris ton nom une seconde fois, et ton écriture te paraît plus assurée que la première, ce qui est absurde, puisque la première n'a jamais existé." },
    ],
    choices: [
      { back: "A_loge" },
    ] },

  A_cuisine: { act: "I", title: "La cuisine", place: "loge",
    text: [
      "La cuisine est au bout d'un couloir de service, sous l'escalier : une grande pièce voûtée, carrelée de rouge, où les casseroles de cuivre pendent en rang comme des cloches muettes. Tout est froid, propre, rangé avec une rigueur de veuve. Le neveu a vendu la cuisinière avec la cave.",
      "Mais sur le carrelage, près du fourneau éteint, une écuelle de terre est pleine de lait frais. Et sur le rebord de la fenêtre, un gros chat noir, aux yeux jaunes, te regarde entrer avec le mépris tranquille d'un propriétaire.",
      "Il descend du rebord, vient sentir tes bottes, décide que tu es acceptable, et te suit quand tu sors, la queue en l'air, comme un sergent de ville.",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  // ------------------------------------------------------------------ the gallery
  A_pierres: { act: "I", title: "Les pierres qui brillent", place: "galerie",
    text: [
      "Une vitrine basse, tout au bout de la galerie, contient des pierres. Tu baisses ta lanterne pour mieux voir, et tu la refermes par inadvertance. Dans le noir complet, la vitrine s'allume.",
      "Une à une, les pierres se mettent à luire d'elles-mêmes, d'une lumière froide, sans chaleur, sans source, verte, violette, orangée, comme des braises de l'autre monde. Une pierre de Bologne brille comme un œil de chat. Une fluorine a la couleur d'un noyé. Un morceau de craie de Bretagne luit d'un blanc de lune. Tu restes dans le noir, devant ces lumières mortes qui n'éclairent rien, et tu as pour la première fois de la nuit l'impression d'être regardé{e} par la maison elle-même.",
      { if: { voie: "etudiant" }, text: "Tu as lu, à la faculté, que ces pierres gardent la lumière du jour et la rendent la nuit, peu à peu, comme un souvenir qui s'efface. Ton professeur disait que c'était de la physique. Tu n'en es plus si sûr{e}." },
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_ours_corde: { act: "II", title: "La cordelette de l'ours", place: "galerie", second: true,
    text: [
      "Tu te glisses derrière l'ours, ta lanterne entre les dents. Une cordelette de soie noire, fine comme un cheveu, part de sa patte de derrière, court le long du mur dans la moulure, monte vers le plafond, passe dans une poulie de cuivre cachée derrière la chaîne du crocodile, et disparaît dans un trou du plâtre, vers le haut. Vers la tour.",
      "Tu pourrais la couper. L'ours ne tomberait pas à trois heures. Tu la regardes longtemps, puis tu la laisses. Si l'ours ne tombe pas, quelqu'un, là-haut, saura que la nuit a changé. Mieux vaut que la nuit ait l'air de se répéter.",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  // ------------------------------------------------------------------ the automata
  A_tympanon: { act: "I", title: "Le joueur de tympanon", place: "automates",
    text: [
      "Le joueur de tympanon est une petite dame de cire en robe de cour, assise devant un instrument à cordes qu'elle frappe avec deux baguettes. Une clef d'acier dépasse de son socle. *Ne toucher à rien.* Tu touches. Tu donnes trois tours de clef.",
      "La petite dame lève la tête. Ses yeux de verre roulent vers toi. Ses bras se soulèvent, et les baguettes se mettent à frapper les cordes, et une musique s'élève dans la salle ronde, fine, grêle, une gavotte de cour d'il y a cent ans, si gaie et si triste à la fois que les automates autour, dans le noir, semblent écouter.",
      "La gavotte s'arrête au milieu d'une mesure. La petite dame baisse la tête. Dans le silence revenu, il te semble entendre, très loin au-dessus de la coupole, deux mains qui applaudissent, deux fois, lentement.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_magicien: { act: "I", title: "Le magicien aux gobelets", place: "automates",
    text: [
      "Le magicien est un petit homme de bois peint, à longue barbe, coiffé d'un bonnet pointu semé d'étoiles, devant une table où sont posés trois gobelets de cuivre. Sa main droite est levée au-dessus du gobelet du milieu, prête à le soulever. On lui a fait faire ce geste dix mille fois devant des dames, et il a gardé l'air de quelqu'un qui en sait plus long qu'il ne veut le dire.",
      "Tu soulèves le gobelet du milieu. Dessous, rien. Celui de gauche : rien. Celui de droite : un petit papier roulé, où l'on a écrit, d'une écriture penchée, à l'encre violette : *Bien essayé.*",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  // ------------------------------------------------------------------ the library
  A_portrait: { act: "I", title: "Le portrait de Pauline", place: "bibliotheque",
    text: [
      "Au-dessus du grand bureau, un portrait de femme dans un ovale doré : jeune, brune, en robe de mousseline, un oiseau d'argent posé sur le doigt comme un vrai. Elle regarde l'oiseau, et pas le peintre, avec une expression d'amusement si vivante qu'on se surprend à chercher des yeux ce qui l'amuse.",
      "Sur le cadre : *Pauline Orsenne, née Fréval. 1760-1799.* Et sur le bureau, juste en dessous, un vase de cristal où trempe une rose blanche. Fraîche. Coupée d'aujourd'hui.",
      { second: false, text: "Tu regardes la rose. Tu regardes la maison vide autour de toi. Le neveu ne coupe pas de roses pour une tante morte il y a vingt ans." },
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  A_chambre_scellee: { act: "I", title: "La chambre scellée", place: "bibliotheque",
    fx: { clue: "i_pantoufles" },
    text: [
      "Au fond de la galerie haute de la bibliothèque, une porte porte deux bandes de papier croisées, cachetées de cire rouge : les scellés du notaire. La chambre du défunt. Par le trou de la serrure, à la lueur de ta lanterne, tu distingues un lit à rideaux, fait au carré, une table de chevet avec un bonnet de nuit plié, un fauteuil, et au pied du fauteuil, la place vide, dans la poussière du tapis, de deux pantoufles qui ne sont plus là.",
      "La poussière est partout ailleurs : sur le tapis, sur le fauteuil, sur le bonnet. À l'endroit des pantoufles, deux semelles nettes, sans poussière, de la forme d'un pied long et maigre.",
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  // ------------------------------------------------------------------ the late visitor, first night
  A_visiteur: { act: "I", title: "Minuit et demi", place: "loge", second: false,
    text: [
      "À minuit et demi, la sonnette de la grille tinte. Tu sors avec ta lanterne. Derrière les barreaux, sous un parapluie, Aristide Orsenne, en habit de soirée, une fleur à la boutonnière, l'haleine parfumée de champagne. « Mes gants, dit-il. Je les ai oubliés dans le vestibule. Le cercle ferme à une heure, et on n'entre pas au cercle sans gants. »",
      "Il entre, prend ses gants sur la console, où tu ne les avais pas vus, les enfile doigt à doigt. Son regard tombe sur la table de la loge, sur la flasque d'argent.",
      { if: { has: "flasque:bue" }, text: "Il la soupèse en souriant. « Vous y avez goûté. Bien. La nuit sera douce. » Il te tape sur l'épaule et repart sous son parapluie, en sifflant un air de l'Opéra." },
      { if: { not: { has: "flasque:bue" } }, text: "Il la soupèse. Elle est pleine. Il la repose, et te regarde un peu plus longtemps qu'il ne faudrait. « Vous ne buvez pas ? Vous avez tort. Il fait froid, et les nuits sont longues, chez les morts. » Il repart sous son parapluie. Il ne siffle pas." },
    ],
    choices: [
      { back: "A_loge" },
    ] },

  // ------------------------------------------------------------------ the tower, second night
  S_pauline: { act: "II", title: "Pauline", place: "tour", second: true,
    text: [
      "Tu lui parles de la rose blanche, dans la bibliothèque, sous le portrait. Orsenne garde le silence un moment. Il fait tourner sa loupe, et sur la table blanche, la ville minuscule tourne aussi, dans le verre.",
      "« Mélie me la cueille tous les jours, dit-il enfin. Chez la fleuriste du quai. Je la descends à quatre heures, quand vous êtes ailleurs. » Il pose la loupe. « Vingt ans qu'elle est morte, et je collectionne. Les bêtes, les pierres, les montres, les monstres. Tout ce qui dure, et tout ce qui est bizarre. On dit que les collectionneurs aiment les choses. C'est faux. Nous les aimons parce qu'elles ne meurent pas, et parce qu'elles ne partent pas. Les choses sont fidèles par paresse. »",
      "« Pauline riait de mes choses, dit-il encore. C'est la seule personne au monde qui en ait ri. Depuis, je les prends au sérieux. C'est une grave erreur. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_larme_histoire: { act: "II", title: "Trois vies", place: "tour", second: true,
    text: [
      "« La Larme ? » Orsenne fait une grimace de dégoût. « Un rajah de Golconde l'a fait arracher de l'œil d'une idole, et il en est mort, de la fièvre, dans l'année. Un capitaine anglais l'a volée au rajah, et il en est mort, d'un coup de couteau, à Madras. Un marchand de Lisbonne l'a achetée au capitaine, et il en est mort, du tremblement de terre. » Il hausse les épaules. « Je l'ai achetée au marchand de Lisbonne, ou plutôt à sa veuve, qui était ravie de s'en débarrasser. »",
      "« Et moi, je ne suis pas mort. J'ai seulement fait semblant. » Il sourit, enchanté. « Peut-être qu'elle s'en est contentée. Les malédictions sont comme les notaires : elles se satisfont des formes. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_table_ville: { act: "II", title: "La ville sur la table", place: "tour", second: true,
    text: [
      "Tu te penches sur la table blanche. La rue des Antiquaires y est posée, vivante, en couleurs, avec ses réverbères et ses flaques, si nette qu'on voit les gouttes tomber dans les flaques. Orsenne fait pivoter la lentille du toit avec une manivelle, et la rue glisse, tourne, et c'est la place Saint-Eustache, l'église, le cercle du Commerce avec ses fenêtres allumées.",
      "Devant le cercle, sous un réverbère, un fiacre attend, lanternes éteintes. Derrière la vitre du fiacre, une silhouette en habit de soirée, avec une fleur blanche à la boutonnière, regarde une montre.",
      "« Mon neveu, dit Orsenne, sans quitter la table des yeux. Il attend trois heures. Il est arrivé à deux. Il a toujours été en avance pour les mauvaises choses et en retard pour les autres. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_melie_tour: { act: "II", title: "Ce que dit Mélie", place: "jardin", second: true,
    text: [
      "Au pied de la tour, avant de partir, Mélie s'arrête et ajuste son châle. « Trente ans, répète-t-elle. Il ne m'a jamais payée à l'heure. Il me payait en bêtes. Un renard pour mon anniversaire. Un hibou pour mes cinquante ans. J'ai la maison pleine de bêtes empaillées par moi et données par lui. » Elle renifle. « Quand il est mort, je me suis dit : enfin, je vais pouvoir m'ennuyer tranquille. Le lendemain, il me demandait de la soupe. »",
      "Elle part vers la porte du fond. Avant de la refermer, elle dit, sans se retourner : « Il ne m'a jamais dit merci. Pas une fois. Il me le dit par la Sibylle, quelquefois, en latin. Je ne lis pas le latin. Je lui ai jamais dit. »",
    ],
    choices: [
      { back: "A_jardin" },
    ] },
};
