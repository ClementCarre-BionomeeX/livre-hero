// L'Île Folle-Aiguille · side story « Le petit berger qui comptait » (owes its question to Maupassant's In the Country:
// may poor parents give up a child to the rich, for his own good, and will he thank them or hate them?). Act III,
// Victorine at Lannoz: the baron Clavières, ashore for a day, has noticed a shepherd boy of nine, Paol Le Calvez, who
// counts a flock of three hundred sheep at a glance and multiplies in his head faster than a clerk. The baron offers to
// take him to Morlenc, have him schooled, make a man of business of him, and to pay the parents four hundred livres for
// the trouble. The mother, Katell, comes to the physician at night, because she does not know whom else to ask. Victorine
// tells her to accept (ux:accepte), to refuse (ux:refuse), or to let the child choose himself (ux:paol).
// Wired in A3x_lannoz.
module.exports = {
  passages: {
    UX_mere: { act: "III", title: "Le petit berger qui comptait", place: "lannoz", ambiance: "nuit",
      fx: { meet: "lecalvez" },
      text: [
        "Elle frappe à la coque du canot de garde, à la nuit, et demande la médecin. On la fait monter. C'est une femme de trente ans qui en paraît cinquante, en coiffe de laine, avec des mains crevassées de lavandière et un manteau de berger d'homme jeté sur les épaules. Elle s'assied au bord de la couchette, dans le petit réduit de Victorine, et elle ne dit rien pendant un long moment. Puis elle dit qu'elle n'est pas malade.",
        "Elle s'appelle Katell Le Calvez. Son mari garde les moutons du recteur, sur la colline du cairn. Ils ont quatre enfants. L'aîné, Paol, a neuf ans. Ce matin, le baron Clavières, qui se promenait sur la lande avec son fusil et son valet, a croisé Paol et le troupeau. Le baron a demandé, pour plaisanter, combien il y avait de bêtes. Paol a répondu : trois cent sept, dont onze noires et deux qui boitent. Le baron a fait compter par son valet. Il y en avait trois cent sept.",
        "Le baron s'est amusé. Il a demandé combien faisaient trois cent sept fois dix-neuf. Paol a répondu, après avoir regardé le ciel deux secondes. Le baron a sorti son carnet, il a fait le calcul, il a mis longtemps. C'était juste. Il a posé d'autres questions, plus difficiles. Toutes justes. Le baron ne s'amusait plus. Il est allé voir les parents, le soir même, dans leur maison de tourbe.",
      ],
      choices: [{ label: "Lui demander ce que veut le baron", to: "UX_offre" }] },
    UX_offre: { act: "III", title: "Le petit berger qui comptait", place: "lannoz", ambiance: "nuit",
      text: [
        "Le baron veut Paol. Il l'a dit poliment, assis sur le seul tabouret, son chapeau sur les genoux, avec la courtoisie qu'il a pour les gens dont il veut quelque chose. Il enverra l'enfant à Morlenc dès demain, par le caboteur qui y porte la laine, avec une lettre pour son intendant. Il le mettra au collège des Frères, puis chez un maître de comptes, puis dans ses bureaux. Il en fera un homme de négoce, un commis, peut-être un associé un jour, qui sait, s'il continue à compter comme ça. Il paiera tout. Et il donnera aux parents, pour le dérangement, quatre cents livres.",
        "Katell dit le chiffre comme on dit le nom d'une ville lointaine. Quatre cents livres. Son mari gagne trente livres par an, et la laine. Quatre cents livres, c'est un toit d'ardoise, une vache, des souliers pour les trois autres, l'école du recteur pour les deux filles, et l'hiver sans faim pendant dix ans. Le baron a dit qu'on pourrait voir Paol une fois par an, quand le navire de Morlenc fait escale. Le baron a dit que l'enfant deviendrait un monsieur. Il a dit cela gentiment.",
        "Son mari a dit oui tout de suite. Puis il a dit non. Puis il est sorti marcher sur la lande, et il n'est pas rentré. Paol, lui, dort. On ne lui a rien dit. Il compte en dormant, dit sa mère : on l'entend murmurer des chiffres dans le noir. Elle dit qu'elle ne sait pas si c'est un don ou une maladie. Elle dit qu'elle est venue voir la médecin pour qu'on lui dise lequel.",
        "Victorine sait ce qu'est un collège de Frères pour un berger de neuf ans qui parle à peine la langue de la ville. Elle sait aussi ce que sont dix hivers de faim sur une lande. Elle sait que le baron tient ses promesses, à sa manière, comme on tient un registre. Elle regarde la mère, qui attend, les mains serrées sur son manteau d'homme. Elle comprend que Katell a déjà choisi, dans un sens ou dans l'autre, et qu'elle est venue chercher quelqu'un qui porte le choix avec elle.",
      ],
      choices: [
        { label: "Lui dire d'accepter, pour Paol et pour les trois autres", fx: { flag: "ux:accepte" }, to: "UX_accepte" },
        { label: "Lui dire de refuser : un enfant ne se vend pas, même à un collège", fx: { flag: "ux:refuse" }, to: "UX_refuse" },
        { label: "Lui dire de réveiller Paol, et de le lui demander à lui", fx: { flag: "ux:paol" }, to: "UX_paol" },
      ] },
    UX_accepte: { act: "III", title: "Le petit berger qui comptait", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine dit qu'il faut accepter. Elle le dit sans détour, parce que la mère a besoin d'une phrase nette. Elle dit qu'un don comme celui de Paol, sur une lande, se perd dans les moutons, et qu'à Morlenc il peut nourrir une famille entière, et la sienne avec. Elle dit que les trois autres ont droit à des souliers. Elle dit que le collège sera dur, et que Paol pleurera, et qu'il survivra. Elle dit qu'elle-même a quitté sa mère à douze ans pour une école, et qu'elle a pleuré tout un hiver.",
        "Katell l'écoute en hochant la tête, les yeux fermés. Puis elle dit merci, et elle redescend dans le canot, et elle rentre sur la lande. Le lendemain, Victorine voit, depuis la lisse, le baron qui revient de la colline, suivi de son valet, et d'un petit garçon en sabots, qui porte un baluchon et qui ne pleure pas. On le mène au caboteur de la laine, amarré au bout de la cale. Le petit garçon regarde les mâts, les vergues, les cordages, avec une attention avide, et Victorine devine qu'il est en train de les compter.",
        "Le baron lui a donné, pour le voyage, un livre de comptes de la Compagnie Clavières. Paol l'a lu en une heure, assis sur un ballot de laine. Il y a trouvé deux erreurs. Victorine monte à bord du caboteur, avant qu'il largue, pour lui donner une écharpe. L'enfant est seul, appuyé au plat-bord, et regarde l'eau. Il lui dit qu'il essaie de compter les vagues, et qu'il n'y arrive pas, parce qu'elles ne s'arrêtent pas.",
        "Elle lui demande s'il est content. Il réfléchit longtemps, comme il ne réfléchit jamais pour les chiffres. Il dit qu'il ne sait pas. Il dit que sa mère lui a dit que c'était pour son bien, et que la médecin l'avait dit aussi. Il dit que sa mère avait les yeux mouillés en le disant. Il dit qu'il a compté les moutons, la dernière fois, avant de partir, et qu'il en manquait un, le noir qui boite, et qu'il n'a pas pu le chercher. Victorine sent qu'elle portera, avec la mère, le poids de ce mouton-là.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "UX" }, back: "A3x_lannoz" }] },
    UX_refuse: { act: "III", title: "Le petit berger qui comptait", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine dit de refuser. Elle dit qu'un enfant qu'on paie aux parents est un enfant qu'on achète, quel que soit le collège au bout, et qu'un enfant acheté le sait toujours, un jour ou l'autre. Elle dit que le baron Clavières est un homme qui achète, et qu'il ne fera jamais de Paol un associé : il en fera un instrument, très bien entretenu. Elle dit que le don de Paol ne s'usera pas sur la lande. Il attendra. Il trouvera son chemin. Les dons de cette force-là trouvent toujours leur chemin.",
        "Elle n'en est pas sûre. Elle le dit quand même, avec assurance, parce que la mère a besoin d'assurance. Katell la regarde longtemps, puis elle se lève, très droite, et elle dit qu'elle refusera. Elle dit qu'elle le savait. Elle dit qu'elle avait besoin qu'une dame instruite le lui dise, pour pouvoir le dire à son mari, qui a déjà dépensé les quatre cents livres trois fois dans sa tête.",
        "Le baron prend le refus avec une parfaite bonne grâce, et Victorine le déteste un peu pour ça. Il dit qu'il comprend. Il dit que les gens de la terre sont attachés à leurs enfants, ce qui est touchant et peu pratique. Il laisse aux Le Calvez, en partant, une pièce d'or pour l'enfant, et un abaque de bois d'ébène, de ceux dont se servent les marchands des ports lointains. Il dit que c'est pour que le petit s'amuse. Victorine comprend que c'est pour que le petit se souvienne de ce qu'il a perdu.",
        "Le dernier jour, elle monte sur la colline du cairn. Paol garde le troupeau, assis sur une pierre, l'abaque sur les genoux. Il fait glisser les boules d'ébène, très vite, avec une jubilation sérieuse. Il lui dit qu'il a compris comment ça marche, tout seul, en une nuit. Il lui dit qu'il a compté les étoiles, cette nuit, du côté du nord, et qu'il y en a quatre mille deux cent douze, à peu près. Elle lui demande s'il aurait aimé partir. Il dit que oui. Il dit qu'il aime aussi les moutons. Il dit que les moutons, au moins, on peut les compter jusqu'au bout. Victorine redescend sans savoir si elle a protégé un enfant, ou si elle l'a enfermé sur une colline avec un abaque et des étoiles.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "UX" }, back: "A3x_lannoz" }] },
    UX_paol: { act: "III", title: "Le petit berger qui comptait", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine dit à la mère qu'elle n'a pas à choisir seule, ni avec une médecin. Elle dit que la personne la plus intelligente de cette affaire a neuf ans, et qu'on ne lui a rien demandé. Elle dit qu'un enfant qui calcule trois cent sept fois dix-neuf en regardant le ciel sait sans doute aussi ce qu'il veut. Katell la regarde comme si elle avait proposé de demander leur avis aux moutons. Puis elle dit : venez avec moi.",
        "Elles marchent sur la lande, dans la nuit, jusqu'à la maison de tourbe. Paol dort sur une paillasse, entre ses deux sœurs, et murmure des chiffres. Sa mère le réveille. Il s'assied, les yeux pleins de sommeil, et écoute. Sa mère lui explique tout : le baron, la ville, le collège, les quatre cents livres, la visite une fois par an. Elle lui demande ce qu'il veut. L'enfant la regarde, puis regarde Victorine, puis regarde le toit de tourbe, longtemps.",
        "Puis il pose une question. Une seule. Il demande si les quatre cents livres seront pour la famille même s'il revient un jour. Sa mère dit qu'elle ne sait pas. Victorine dit qu'elle le fera écrire dans le contrat. Paol hoche la tête. Il dit qu'alors, il part. Il dit qu'il a calculé : avec quatre cents livres, ses sœurs iront à l'école du recteur, et son petit frère aura des souliers avant l'hiver, et sa mère ne lavera plus le linge des autres. Il dit qu'il a fait le compte, et que lui, il ne coûte qu'un enfant.",
        "Il le dit sans tristesse, avec une rigueur de comptable, et sa mère se met à pleurer. Victorine fait écrire le contrat le lendemain, par le greffier du port, avec une clause que le baron signe en riant : l'enfant pourra revenir à Lannoz quand il voudra, sans rien rendre. Paol part avec le caboteur de la laine. Il ne pleure pas. Il dit à Victorine, sur la cale, qu'il a choisi, et que c'est plus facile que d'être choisi. Elle pense qu'il a raison. Elle pense aussi qu'aucun enfant de neuf ans ne devrait avoir à faire ce calcul-là, et qu'elle vient de lui en donner les moyens.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "UX" }, back: "A3x_lannoz" }] },
  },
  extras: {
    people: {
      lecalvez: { name: "Paol Le Calvez", aka: ["le petit berger", "Paol"], qui: "Berger de neuf ans de la lande de Lannoz, qui compte un troupeau de trois cents bêtes d'un coup d'œil." },
    },
    quests: [
      { id: "UX", act: "III", kind: "annexe", title: "Le petit berger qui comptait", start: "UX_mere", doit: "auxchamps", echo: ["ux:accepte", "ux:refuse", "ux:paol"] },
    ],
  },
};
