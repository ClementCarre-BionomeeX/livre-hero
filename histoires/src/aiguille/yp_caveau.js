// L'Île Folle-Aiguille · side story « Le caveau des Moines » (owes its question to Moonfleet: what does one owe to those
// who protect you outside the law?). Under the chapel Sainte-Anne lies the vault of the drowned of the Moines rocks,
// whose coffins the coast's smugglers use as a cellar. The child goes down after a light at night, is shut in when the
// men come with the kegs, and is saved from the knife by the chapel's keeper, the widow Kerdudo, who runs them. The
// child keeps the secret (yp:tu), tells the brigadier Fouques (yp:fouques), or asks for a place on the next run
// (yp:part). Wired in A1_jours.
var PASSEUR = { voie: "passeur" };
module.exports = {
  passages: {
    YP_lueur: { act: "I", title: "Le caveau des Moines", place: "chapelle", ambiance: "nuit",
      fx: { meet: "kerdudo" },
      text: [
        "Tu ne dors pas. Le vent a tourné au nord dans la soirée, et le Fanal grince de partout, comme un vieux navire à l'ancre. Par la lucarne de ta soupente, tu vois la lande, noire, et au bout de la lande, sur sa butte, la chapelle Sainte-Anne. Et sous la chapelle, au ras du sol, là où il n'y a ni porte ni fenêtre, une lumière.",
        "Elle bouge. Elle passe, s'éteint, revient, comme une lanterne qu'on porterait le long d'un couloir de pierre. Tu connais cette chapelle depuis ton baptême. Il n'y a rien sous elle. Rien que le caveau des Moines, où l'on a mis, il y a quarante ans, les noyés d'un naufrage qu'on n'avait pas pu rendre à leurs familles, et dont la grille est rouillée et fermée depuis avant ta naissance.",
        "Tu t'habilles sans bruit. Tu passes devant la chambre de ton père, qui dort, ou fait semblant. Tu sors par la porte de la cuisine.",
      ],
      choices: [{ label: "Traverser la lande", to: "YP_grille" }] },
    YP_grille: { act: "I", title: "Le caveau des Moines", place: "chapelle", ambiance: "nuit",
      text: [
        "La grille du caveau est au chevet de la chapelle, au fond d'une fosse à demi comblée de ronces, en bas de six marches couvertes de mousse. Elle n'est plus rouillée. On l'a graissée, et le cadenas est ouvert, pendu à l'anneau, comme un oiseau mort.",
        "Tu descends. L'air est froid et immobile, et il sent la cire, le salpêtre et, par-dessous, une odeur que tu ne t'attendais pas à trouver chez les morts : l'eau-de-vie. Le caveau est une longue salle voûtée, basse, taillée dans le roc, où les cercueils des noyés sont posés sur des tréteaux de pierre, en deux rangées, comme des barques renversées dans un hangar. Il y en a vingt-deux. Sur chacun, une plaque de cuivre verdie : *Inconnu, homme, environ trente ans. Inconnu, homme, environ vingt ans. Inconnu, mousse.*",
        "La lumière s'est éteinte. Tu allumes ta chandelle. Le couvercle du premier cercueil est mal posé, de travers. Tu le soulèves d'un doigt. Dedans, il n'y a plus d'os. Il y a quatre petits barils, rangés tête-bêche, avec la marque d'une distillerie de l'autre côté de la Manche-des-Brumes, et de la paille autour, bien sèche.",
        { if: PASSEUR, text: "Tu reconnais les barils. Tu en as porté de pareils, sur ton dos, par le sentier des douaniers, à minuit, pour des gens qui paient bien et parlent peu. Tu ne t'étais jamais demandé où ils dormaient, entre deux nuits." },
        "Derrière toi, en haut des marches, la grille grince.",
      ],
      choices: [{ label: "Souffler la chandelle et te glisser derrière un cercueil", to: "YP_cache" }] },
    YP_cache: { act: "I", title: "Le caveau des Moines", place: "chapelle", ambiance: "souterrain",
      text: [
        "Ils sont cinq. Tu les vois par la fente entre deux cercueils : des hommes en vareuse, la figure noircie au bouchon brûlé, qui descendent avec des barils sur l'épaule et une lanterne sourde. Ils ouvrent les cercueils un par un, avec l'aisance de gens qui font ça depuis longtemps, et y couchent les barils, et remettent les couvercles, en jurant à mi-voix. L'un d'eux s'assied sur le cercueil marqué *Inconnu, mousse* pour reprendre son souffle.",
        "Puis le dernier descend. Il a un nez qui se met à flairer. « Chandelle, dit-il. Ça sent la mèche chaude. Il y a quelqu'un. »",
        "Ils se taisent tous. La lanterne sourde se rouvre et promène un rond jaune sur les voûtes, sur les tréteaux, sur les plaques de cuivre. L'homme au nez approche. Tu entends un couteau qu'on tire. Le rond jaune s'arrête sur ta figure.",
        "« L'enfant de l'auberge, dit l'homme au nez. » Il ne sourit pas. « Ça a vu. Ça ira le dire au brigadier pour une pièce de dix sous. On met ça dans le cercueil vide du fond, avec les autres. Personne ne relève jamais les morts des Moines. »",
        { if: PASSEUR, text: "Tu ouvres la bouche pour dire que tu es des leurs, que tu as porté leurs barils. L'homme au nez te met le plat du couteau sur les lèvres. « On sait. C'est bien pour ça. Un porteur qui voit la cave, il en sait trop pour un porteur. »" },
        "Une voix de femme, en haut des marches, coupe la sienne en deux. « Personne ne met personne nulle part, Gloaguen. Range ça. »",
      ],
      choices: [{ label: "Lever les yeux vers la voix", to: "YP_veuve" }] },
    YP_veuve: { act: "I", title: "La gardienne", place: "chapelle", ambiance: "souterrain",
      text: [
        "C'est la veuve Kerdudo. Tu la connais depuis toujours : elle garde les clefs de Sainte-Anne, fleurit l'autel, change les cierges, balaie la nef le samedi et chasse les enfants qui grimpent aux ex-voto. Elle a soixante ans, des sabots, une coiffe de dentelle amidonnée, et un chapelet de buis à la ceinture. Elle descend les marches avec une lanterne. Les cinq hommes s'écartent devant elle, et l'homme au nez remet son couteau dans sa ceinture comme un enfant cache une bêtise.",
        "« C'est l'enfant de Lazare Hersant, dit-elle. On ne touche pas aux enfants du hameau. On n'a jamais touché aux enfants du hameau, c'est pour ça que le hameau se tait. » Elle t'éclaire la figure, longuement. « Ton père a été douanier, avant l'auberge. Tu le savais ? Il fermait les yeux. Il savait sur quoi. On lui doit bien ça. »",
        "Elle s'assied sur un tréteau, entre deux noyés, et pose sa lanterne à côté d'elle. « Ces hommes-là, dit-elle en montrant les cercueils, je les ai lavés moi-même, il y a quarante ans, sur la grève, quand la mer les a rendus. Personne n'est venu les chercher. Personne n'a payé leurs messes. Alors ils paient eux-mêmes, maintenant. Chaque baril qui dort chez eux paie un cierge, et le reste nourrit les veuves de la Pointe, qui n'ont pas de pension, parce que l'Amirauté n'en donne qu'aux veuves de ses propres marins. » Elle te regarde. « Les morts ne sont pas fâchés. Je leur ai demandé. »",
        "Elle se tait. Les cinq hommes attendent. L'homme au nez aussi, la main sur sa ceinture. « Alors, petit{e}. Qu'est-ce que tu vas faire de ce que tu as vu ? »",
      ],
      choices: [
        { label: "« Rien. Je n'ai rien vu. Les morts non plus. »", fx: { flag: "yp:tu" }, to: "YP_tu" },
        { label: "« Je veux porter, la prochaine fois. Pour les veuves. »", fx: { flag: "yp:part" }, to: "YP_part" },
        { label: "Promettre de te taire, et aller le dire au brigadier dès l'aube", fx: { flag: "yp:fouques" }, to: "YP_fouques" },
      ] },
    YP_tu: { act: "I", title: "La gardienne", place: "chapelle", ambiance: "nuit",
      text: [
        "La veuve Kerdudo hoche la tête. Elle se lève, prend ta chandelle éteinte, la rallume à sa lanterne, et te la rend. « Rentre par la lande, pas par le chemin. Le brigadier fait sa ronde par le chemin, le mardi, pour qu'on sache où il est. »",
        "En remontant les marches, tu te retournes une fois. Elle a reposé le couvercle du cercueil du mousse inconnu, bien droit, et elle passe la main dessus, doucement, comme on borde un enfant.",
        "Le dimanche suivant, à la messe du recteur, il y a vingt-deux cierges neufs devant l'autel de Sainte-Anne. Personne ne sait qui les a payés. Tout le monde le sait.",
      ],
      choices: [{ label: "Rentrer au Fanal avant l'aube", fx: { quest: "YP" }, back: "A1_jours" }] },
    YP_part: { act: "I", title: "La gardienne", place: "chapelle", ambiance: "nuit",
      text: [
        "Les hommes rient, sauf la veuve. Elle te regarde longtemps, avec ses petits yeux de buis.",
        { if: PASSEUR, text: "« Tu portes déjà, dit-elle. Pour des gens qui te paient mal et qui gardent la différence. À partir de maintenant, tu porteras pour moi, et tu seras payé{e} juste. C'est la seule chose que je promets : juste. »" },
        { if: { not: PASSEUR }, text: "« Tu ne sais pas ce que c'est, dit-elle. Tu crois que c'est une aventure. C'est des nuits froides, un baril sur le dos qui te scie l'épaule, et la peur d'un coup de fusil à chaque bruit de bruyère. » Elle soupire. « Une fois. Le mois prochain. Après, on verra si tu as les épaules. »" },
        "Elle te met dans la main une pièce d'argent, pour sceller l'affaire. C'est une pièce étrangère, épaisse, usée, comme tu en vois beaucoup ces temps-ci. « Ton père en a plein une boîte de fer, à ce qu'on dit, lâche Gloaguen. Il devrait nous en vendre quelques-unes. » La veuve lui jette un regard qui le fait taire.",
      ],
      choices: [{ label: "Rentrer au Fanal avant l'aube", fx: { quest: "YP", gold: 5 }, back: "A1_jours" }] },
    YP_fouques: { act: "I", title: "Le brigadier", place: "fanal_salle", ambiance: "village",
      text: [
        "Tu promets. La veuve te croit ; elle a la bonne foi des gens qui n'ont jamais eu besoin de mentir à un enfant. Tu rentres par la lande. Au matin, tu vas à Varnèse, au poste, et tu demandes le brigadier Fouques.",
        "Il t'écoute en lissant sa moustache, avec la gravité d'un homme à qui l'on annonce une guerre. Quand tu as fini, il se lève, ferme la porte du poste, et se rassoit.",
        "« Le caveau des Moines, dit-il. Je le sais depuis douze ans. » Il te regarde avec une sorte de tristesse. « Si je descends là-dessous avec mes hommes, je trouve vingt barils, cinq pêcheurs de la Pointe que je connais par leur nom, et la veuve Kerdudo. Je les envoie aux galères de Morlenc. Et l'hiver prochain, les veuves de la Pointe mangent de l'herbe. » Il soupire. « Ce que tu m'as dit, je ne l'ai pas entendu. Ce que tu as fait, eux, l'entendront. Ici, tout se sait. »",
        "Le dimanche suivant, à la messe, la veuve Kerdudo ne te regarde pas. Elle fleurit l'autel, change les cierges, balaie la nef. Quand tu passes devant elle, elle se signe.",
      ],
      choices: [{ label: "Rentrer au Fanal", fx: { quest: "YP" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      kerdudo: { name: "La veuve Kerdudo", aka: ["la gardienne de Sainte-Anne", "la veuve"], f: true,
        qui: "Elle garde les clefs de la chapelle Sainte-Anne, fleurit l'autel et règne sur le caveau des Moines." },
    },
    quests: [
      { id: "YP", act: "I", kind: "annexe", title: "Le caveau des Moines", start: "YP_lueur", doit: "moonfleet", echo: ["yp:tu", "yp:part", "yp:fouques"] },
    ],
  },
};
