// L'Île Folle-Aiguille · side story « La couvée » (owes its question to Maupassant's Toine: what is left of a man
// whom everyone loved for his laughter when he can no longer leave his bed, and is it kinder to give him a use or to
// spare him the joke?). Act III, the ship's boy at Lannoz: the fattest innkeeper of the moor, paralysed since winter,
// lies in a box-bed in his own tavern, still laughing, while his sharp-tongued wife, furious at feeding a man who does
// nothing, has decided to make him hatch eggs under his arms like a broody hen. The whole moor comes to see. The boy
// helps him hatch them in style (sd:couve), smuggles the eggs out and puts them back under a real hen (sd:poule), or
// fetches the parish to make the wife stop (sd:recteur). Wired in A3o_lannoz.
module.exports = {
  passages: {
    SD_auberge: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      fx: { meet: "coroller" },
      text: [
        "L'auberge de Lannoz s'appelle Au Rendez-vous de la Lande, mais personne ne l'appelle ainsi. On dit : chez la Futaille. Et la Futaille, c'est le patron, Jean-Pierre Coroller, le plus gros homme du pays, dit-on, et le plus gai, celui qui riait si fort qu'on l'entendait de la tourbière, qui buvait comme trois et qui faisait boire comme six, et dont les ventres de ses clients disaient qu'il était une bénédiction.",
        "Depuis l'hiver, la Futaille ne bouge plus. Une attaque, un matin, en descendant à la cave. Le côté gauche est mort. On l'a couché dans le lit clos de la salle commune, derrière le comptoir, la porte de bois ouverte, pour qu'il voie les clients. Il est toujours aussi gros. Plus gros, même, parce qu'il ne fait plus rien que manger. Et il rit. Il rit de son lit, d'un rire énorme, à moitié tordu, à moitié seulement, comme une cloche fêlée d'un côté.",
        "Sa femme, elle, ne rit pas. Une petite femme sèche, noire, vive, avec un bonnet pointu et une langue qui pique, qui sert, qui lave, qui compte, et qui, chaque fois qu'elle passe devant le lit clos, lance à son mari : « Gros fainéant ! Gros sac ! Ça mange, ça boit, ça rit, et ça ne sert à rien ! Même une poule pondeuse rapporte plus que toi ! »",
        "La Futaille rit. Les clients rient. Toi aussi. Puis tu vois, dans le coin, sur le rebord du lit clos, un panier d'œufs. Et la petite femme noire qui le regarde, avec une idée dans les yeux."
      ],
      choices: [
        { label: "Revenir le lendemain voir ce qu'elle a fait de ses œufs", to: "SD_oeufs" }
      ] },
    SD_oeufs: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      text: [
        "Le lendemain, la salle commune est pleine à craquer. On est venu de toute la lande. On fait la queue jusque dans la cour. On rit avant même d'entrer.",
        "Dans le lit clos, la Futaille est couché sur le dos, les bras collés au corps. Sous chaque bras, dans le creux de l'aisselle, sa femme a glissé cinq œufs, dans un nid de laine. Et elle lui a dit, devant tout le monde : « Puisque tu ne fais rien, tu vas couver. Une poule couve vingt et un jours. Toi, tu as la chaleur d'un four. Si tu en casses un, tu n'as pas de soupe. »",
        "La Futaille ne bouge pas. Il n'ose pas. Il a les deux bras raides, comme un soldat au garde-à-vous, couché. Il a peur de casser. Et il rit, il rit à en pleurer, mais tout doucement, de la gorge seulement, sans bouger les épaules, pour ne pas écraser sa couvée. Les clients défilent. Ils se penchent. Ils regardent. Ils lui demandent s'il sent les petits bouger. Ils parient sur le nombre de poussins.",
        "Tu restes près du lit, à cause de la foule. La Futaille te voit. Il te fait signe, de l'œil, le seul qui cligne encore. Tu te penches. Il chuchote : « Tu sais ce qu'elle veut, ma femme ? Elle veut que je serve à quelque chose. C'est de la peur, voilà tout. Elle a peur que je meure à rien faire. » Il rit. « Moi, j'ai jamais rien fait d'autre, que de rire. »"
      ],
      choices: [
        { label: "Rester un peu près de lui", to: "SD_lit" }
      ] },
    SD_femme: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      text: [
        "La petite femme noire compte la recette sur le comptoir, pièce par pièce, en empilant les sous en colonnes si droites qu'on les dirait mesurées au fil à plomb. Elle ne lève pas les yeux quand tu t'approches. Elle dit : « Si c'est pour me faire la morale, la porte est derrière toi. »",
        "Tu lui demandes depuis quand ils sont mariés. Elle s'arrête de compter. Elle dit : trente-deux ans. Elle dit qu'il l'a épousée parce qu'elle était la seule fille de la lande qui ne riait pas à ses histoires, et qu'il voulait savoir pourquoi. Il cherche encore, d'après elle. Elle reprend une pile de sous, la défait, la refait.",
        "Puis elle dit, très vite, d'une voix plus sèche que jamais, que le médecin de la côte est passé à la Chandeleur, qu'il a dit qu'un homme comme ça, avec un cœur pareil, peut durer vingt ans dans un lit, et qu'il en a vu durer trente. Elle dit : « Trente ans. À le laver, à le nourrir, à le tourner. Et lui qui rit. » Elle cogne une pile de sous contre le bois. « Il faut bien qu'il serve à quelque chose. Sinon, il va mourir d'ennui, et moi de fatigue, et on sera bien avancés. »",
        "Derrière vous, dans le lit clos, la Futaille ronfle, les bras raides, les œufs au chaud. Elle tourne la tête vers lui. Pendant une seconde, son visage de pruneau sec change de forme. Puis elle te regarde, s'aperçoit que tu l'as vue, et te dit d'aller chercher du bois."
      ],
      choices: [
        { back: "SD_lit", label: "Retourner près du lit clos" }
      ] },
    SD_cave: { act: "III", title: "La couvée", place: "lannoz", ambiance: "nuit",
      text: [
        "L'escalier de la cave a douze marches de pierre, usées au milieu en forme de cuillère par quarante ans de sabots. La septième est fendue. C'est celle-là, dit la servante qui t'éclaire, sans qu'on le lui demande. Elle s'arrête au-dessus, et ne descend pas plus bas. Elle dit qu'elle a entendu le bruit, ce matin-là, depuis la cuisine, et qu'elle l'entend encore, la nuit, un bruit de sac de farine.",
        "En bas, c'est une crypte. Les barriques dorment en rang sur leurs chantiers de bois, ventrues, noires, avec chacune une année écrite à la craie, et sur le mur du fond, gravée au couteau dans le salpêtre, une colonne de traits, des centaines, serrés comme des épis : un trait par barrique vidée, depuis l'ouverture. Le dernier trait date de l'automne. Il est plus long que les autres, et il finit par un petit rond, comme un rire.",
        "Tu trouves le cidre qu'il réclame, au fond, derrière une barrique vide, là où il t'a dit de chercher : un petit fût, pas plus gros qu'un enfant de deux ans, avec écrit dessus, à la craie, d'une grosse écriture penchée : POUR MON ENTERREMENT. NE PAS TOUCHER AVANT.",
        "Tu remontes avec un pichet tiré d'un autre fût. Il le boit, à petites gorgées, par le côté de la bouche qui marche encore, et tu lui dis que tu as vu le petit fût. Il rit, si fort que les œufs tremblent. Il dit que c'est son meilleur. Il dit qu'il compte bien en boire sa part."
      ],
      choices: [
        { back: "SD_lit", label: "Retourner près du lit clos" }
      ] },
    SD_lit: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      text: [
        { first: true, text: "Tu restes. La foule passe. La Futaille parle, quand les gens sont partis, d'une voix basse et un peu tordue." },
        { first: true, text: "Il dit qu'il a soixante ans. Qu'il a tenu l'auberge quarante ans. Qu'il a fait rire tout le pays, aux noces, aux enterrements, aux pardons. Que maintenant on vient pour rire de lui, et que c'est presque pareil, et que c'est quand même autre chose. Qu'il ne sait pas encore s'il est content ou pas qu'on revienne. Que la salle n'a jamais été aussi pleine depuis l'hiver. Que sa femme encaisse." },
        { first: true, text: "Il dit qu'il a envie de se gratter, sous le bras gauche, et qu'il ne peut pas, à cause des œufs. Il dit que c'est la pire torture qu'on ait inventée depuis le chevalet. Il rit. Un œuf craque, un tout petit peu. Il s'arrête de rire. Il devient blanc. Il te regarde avec des yeux de noyé." },
        { first: true, text: "L'œuf tient. Il souffle. Il ferme les yeux. « Vingt et un jours, dit-il. Tu crois que j'y arrive ? »" },
        { first: true, text: "Tu repars le soir. Le navire reste encore. Tu penses à la Futaille toute la nuit, couché sur le dos dans le noir, raide, les bras collés, qui n'ose pas dormir." },
        { again: true, text: "La Futaille, dans son lit clos, les bras raides, regarde le plafond en comptant les jours sur ses lèvres." }
      ],
      choices: [
        { label: "Aller trouver sa femme, derrière le comptoir, quand la salle se vide", to: "SD_femme", hide: { seen: "SD_femme" } },
        { label: "Descendre à la cave, où il est tombé, chercher le cidre qu'il réclame", to: "SD_cave", hide: { seen: "SD_cave" } },
        { label: "Rester près de lui le temps qu'il faudra, et l'aider à couver dans les règles", fx: { flag: "sd:couve" }, to: "SD_couve" },
        { label: "Revenir la nuit, sortir les œufs, et les glisser sous une vraie poule de la cour", fx: { flag: "sd:poule" }, to: "SD_poule" },
        { label: "Monter chez le recteur, pour qu'il fasse cesser la plaisanterie", fx: { flag: "sd:recteur" }, to: "SD_recteur" }
      ] },
    SD_couve: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      text: [
        "Tu reviens chaque fois que tu peux, entre deux corvées. Tu deviens l'assistant de la couvée. Tu retournes les œufs, une fois le matin, une fois le soir, comme fait la poule, d'après ce que t'a dit une vieille fermière de la veillée. Tu le grattes sous le bras gauche, avec une plume, en écartant la laine. Tu chasses les enfants qui veulent toucher. Tu tiens le registre des paris, sur une ardoise.",
        "La Futaille se prend au jeu. Il devient fier. Il parle de sa couvée comme d'une affaire. Il compte les jours. Il exige le silence quand il dort, et sa femme, stupéfaite, l'accorde. Il explique aux clients qu'il sent une chaleur différente, du côté droit, que ce sont des mâles. Il est sérieux comme un pape.",
        "Le jour du départ, il reste dix-neuf jours de couvée. Tu passes lui dire adieu. Il te fait signe de te pencher. Il te dit que sa femme, la veille, en lui donnant la soupe, l'a appelé « mon gros poussin ». Pour la première fois depuis l'hiver, elle n'a pas dit fainéant. Il a failli pleurer, dit-il, mais il s'est retenu, à cause des œufs.",
        "Tu ne sauras pas combien sont éclos. Tu sais qu'il avait, en te regardant partir, la tête d'un homme qui attend quelque chose."
      ],
      choices: [
        { label: "Revenir à la lande", fx: { quest: "SD" }, back: "A3o_lannoz" }
      ] },
    SD_poule: { act: "III", title: "La couvée", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu reviens la nuit. La porte de la cour est ouverte. Dans le poulailler, une grosse poule rousse couve, l'air bougon, sur un nid vide qu'elle ne veut pas quitter. Tu entres dans la salle commune sur la pointe des pieds. La Futaille ne dort pas. Il te voit. Il comprend tout de suite.",
        "Tu sors les œufs de sous ses bras, un à un, très doucement. Il soupire de soulagement, un soupir énorme, qui fait trembler le lit clos. Il se gratte. Il se gratte longtemps, des deux bras, enfin, avec un bonheur de saint. Puis tu portes les dix œufs à la poule rousse, qui les accepte sans discuter, en gloussant, et s'installe dessus comme une reine.",
        "Le lendemain matin, la petite femme noire trouve son mari les bras vides, en train de ronfler. Elle crie. Elle cherche. Elle trouve les œufs sous la poule. Elle crie encore. Puis elle revient au lit clos, les poings sur les hanches. La Futaille ouvre un œil.",
        "« La poule les couve mieux que moi, dit-il. Tu vois bien que je ne sers à rien. » Et il rit. Elle le regarde. Et elle rit aussi, malgré elle, d'un petit rire sec, aigre, qui sort comme une toux, le premier depuis l'hiver, dit la servante. Les clients, ce jour-là, viennent moins nombreux. La Futaille dort mieux."
      ],
      choices: [
        { label: "Revenir à la lande", fx: { quest: "SD" }, back: "A3o_lannoz" }
      ] },
    SD_recteur: { act: "III", title: "La couvée", place: "lannoz", ambiance: "village",
      text: [
        "Le recteur de Lannoz, dans son jardin, au milieu de ses ruches, t'écoute en riant d'abord, puis moins. Il dit qu'il est au courant. Que toute la paroisse est au courant. Qu'il y a eu plus de monde chez la Futaille dimanche qu'à la grand-messe, et qu'il commence à prendre la chose personnellement.",
        "Il descend à l'auberge. Il entre dans la salle comble. Le silence se fait. Il s'approche du lit clos. Il regarde la Futaille, raide, les bras collés au corps, les œufs. Il regarde la petite femme noire, derrière son comptoir. Il dit, de sa voix de chaire, que l'homme a été fait à l'image de Dieu, et non à celle de la poule, et qu'on ne fait pas d'un chrétien un nid.",
        "La petite femme noire rougit jusqu'aux oreilles. Elle va au lit, elle retire les œufs, un à un, avec des gestes brusques, et elle les jette dans le panier. Les clients s'en vont, un peu honteux, un peu déçus.",
        "La Futaille se gratte, longuement. Il remercie le recteur. Puis, quand le recteur est parti, il regarde la salle vide, et sa femme, qui essuie le comptoir sans le regarder, et il dit, tout bas, à toi : « C'était bien, pourtant, la salle pleine. » Son rire s'est éteint. C'est la première fois que tu le vois sans. Le soir, sa femme lui sert sa soupe sans un mot, ni fainéant ni rien. Tu ne sais pas si c'est mieux."
      ],
      choices: [
        { label: "Revenir à la lande", fx: { quest: "SD" }, back: "A3o_lannoz" }
      ] }
  },
  extras: {
    people: {
      coroller: { name: "Jean-Pierre Coroller", aka: ["la Futaille"], qui: "Aubergiste de Lannoz, le plus gros homme de la lande et le plus gai, paralysé depuis l'hiver dans le lit clos de sa salle commune." }
    },
    quests: [
      { id: "SD", act: "III", kind: "annexe", title: "La couvée", start: "SD_auberge", doit: "toine", echo: ["sd:couve", "sd:poule", "sd:recteur"] }
    ]
  }
};
