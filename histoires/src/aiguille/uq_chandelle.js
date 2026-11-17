// L'Île Folle-Aiguille · side story « La chandelle du professeur » (owes its question to Balzac's The Atheist's Mass: may
// a man who believes in nothing keep up, for love, the rites of someone who believed?). Act III, Victorine in the calm:
// at night, in the hold, she finds the professor Gaudrémont, loud scorner of priests, kneeling before a crate with a
// candle on a tin plate, reading a prayer badly out of a borrowed missal. It is the anniversary of the death of Mathias
// Coatanéa, the sacristan of his village, who paid for his schooling out of his savings and believed in everything. The
// professor asks the physician whether he is a hypocrite. Victorine tells him it is superstition (uq:superstition),
// kneels and holds the candle with him (uq:tient), or tells him to write to the sacristan's family (uq:lettre).
// Wired in A3w_jours.
module.exports = {
  passages: {
    UQ_cale: { act: "III", title: "La chandelle du professeur", place: "cormorane", ambiance: "nuit",
      text: [
        "La chaleur, la nuit, est pire que le jour, parce qu'on l'attend moins. Victorine ne dort pas. Elle descend dans la cale chercher une bouteille d'eau de mélisse rangée avec les caisses de la pharmacie, une lanterne sourde à la main, en marchant doucement pour ne pas réveiller les hamacs. La cale sent le goudron, le rat, la saumure chaude et l'eau croupie. Les barriques suent. Le navire, immobile, ne craque même plus.",
        "Une lumière, au fond, derrière les caisses du professeur. Une petite flamme jaune, droite, qui ne tremble pas, faute de vent. Victorine s'approche. Elle reconnaît d'abord le dos, large comme une porte de grange, puis la barbe, puis la voix, qui murmure. Le professeur Gaudrémont est à genoux devant une caisse de spécimens. Sur la caisse, une chandelle de suif plantée dans une assiette d'étain. Entre ses grosses mains, un petit livre noir.",
        "Il lit. Il lit mal, en butant, avec l'accent rocailleux d'un homme qui a appris le latin dans les livres et jamais dans une église. C'est une prière des morts. Victorine la reconnaît : sa mère la disait. Le professeur se trompe dans les répons, revient en arrière, recommence, et jure à mi-voix quand il se trompe encore, d'un juron de charretier, avant de reprendre, humblement, au début du verset.",
      ],
      choices: [{ label: "Tousser, pour qu'il sache qu'elle est là", to: "UQ_sacristain" }] },
    UQ_sacristain: { act: "III", title: "La chandelle du professeur", place: "cormorane", ambiance: "nuit",
      text: [
        "Il se retourne d'un bloc, comme un ours surpris dans une ruche. Il devient rouge, d'un rouge qui monte du col jusqu'au crâne. Il ferme le livre. Il le cache derrière son dos, ce qui est absurde, vu la taille du dos et celle du livre. Puis il comprend que c'est absurde, et il le ramène devant lui, et il le pose sur la caisse, à côté de la chandelle, et il dit, de sa voix de tonnerre réduite à un grondement : « Eh bien. Vous l'avez vu. »",
        "Victorine s'assied sur une barrique. Elle attend. Le professeur, qui ne sait pas se taire, parle. Il est né à Ploubrennec, un village de schiste au fond d'une vallée, fils d'un sabotier qui buvait. Le sacristain du village, un petit homme pâle nommé Mathias Coatanéa, l'a remarqué à l'âge de huit ans parce qu'il comptait les cloches à l'envers. Il lui a appris à lire dans le missel. Il l'a envoyé au collège avec ses économies de quarante ans. Il est mort l'année où Gaudrémont a soutenu sa thèse, sans l'avoir lue, parce qu'il ne lisait que le latin d'église.",
        "« Il croyait à tout, dit le professeur. Aux saints, aux reliques, à la résurrection de la chair, aux âmes du purgatoire qu'on soulage avec des messes. Il croyait que les fossiles étaient les bêtes du déluge. Je lui ai écrit une lettre, à seize ans, pour lui démontrer qu'il se trompait. Il m'a répondu qu'il prierait pour moi. Il l'a fait. Pendant vingt ans. Tous les soirs. Il me l'a dit. »",
        "Il dit qu'il ne croit à rien de tout ça. Il dit que l'âme est une hypothèse inutile, la prière une gymnastique respiratoire, et le purgatoire une invention comptable. Il dit que, chaque année, le jour de la mort de Coatanéa, il fait dire une messe à Ploubrennec, et qu'il paie, et que, s'il n'y a pas d'église, il la dit lui-même, mal, à genoux, devant n'importe quoi. Il le fait depuis vingt-deux ans. Il ne l'a jamais dit à personne.",
        "Il regarde Victorine de ses petits yeux de sanglier, où il y a une chose qu'elle ne lui a jamais vue : de la peur. Il demande, à la médecin, à la femme de science, s'il est un hypocrite. Il dit qu'il voudrait une réponse honnête, et qu'il la redoute, et qu'il a toujours su que le jour où quelqu'un le surprendrait, ce serait quelqu'un comme elle.",
      ],
      choices: [
        { label: "Lui dire, franchement, que c'est une superstition, et qu'il le sait", fx: { flag: "uq:superstition" }, to: "UQ_superstition" },
        { label: "S'agenouiller à côté de lui, et tenir le livre pendant qu'il lit", fx: { flag: "uq:tient" }, to: "UQ_tient" },
        { label: "Lui dire d'écrire à la famille du sacristain, plutôt qu'au ciel", fx: { flag: "uq:lettre" }, to: "UQ_lettre" },
      ] },
    UQ_superstition: { act: "III", title: "La chandelle du professeur", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine dit que oui. Elle dit qu'un homme qui ne croit pas à l'âme et qui dit des messes pour une âme accomplit un geste magique, comme un matelot qui cloue un fer à cheval au mât, et qu'il le sait mieux que personne, puisqu'il a passé sa vie à se moquer des matelots. Elle le dit sans méchanceté. Elle le dit parce qu'il a demandé une réponse honnête, et qu'elle respecte trop sa science pour lui en donner une autre.",
        "Le professeur l'écoute sans l'interrompre, ce qui est un événement. Puis il hoche la tête, lentement. Il dit qu'elle a raison. Il dit qu'il le savait. Il souffle la chandelle, d'un coup, et la cale tombe dans le noir, sauf la lanterne sourde de Victorine. Il dit, dans le noir, qu'il a été un imbécile pendant vingt-deux ans, et que c'est une bonne chose d'apprendre qu'on est un imbécile, pour un savant : ça arrive rarement, et ça fait progresser.",
        "Il remonte. Le lendemain, il est comme toujours, tonnant, contredisant tout le monde, assommant le baron d'une conférence sur les coraux. Il ne reparle jamais de la cale. Mais Victorine remarque qu'il ne se moque plus des matelots qui touchent du bois. Il les regarde faire, en silence, avec une drôle d'expression, un peu jalouse.",
        "Des semaines plus tard, en fouillant les caisses de la pharmacie, Victorine trouve, glissée entre deux flacons, une chandelle de suif neuve, enveloppée dans une page arrachée d'un carnet, où quelqu'un a écrit, d'une grosse écriture : « Pour l'an prochain. On ne sait jamais. » Elle la remet à sa place. Elle n'en dit rien. Elle pense qu'elle a eu raison, la nuit de la cale, et qu'avoir raison n'a pas suffi à un homme qui aimait.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "UQ" }, back: "A3w_jours" }] },
    UQ_tient: { act: "III", title: "La chandelle du professeur", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine ne répond pas à la question. Elle quitte sa barrique, elle s'agenouille sur les planches, à côté de lui, et elle prend le livre. Elle cherche la page. Elle la tient ouverte, sous la chandelle, et elle dit, à mi-voix, le premier répons, celui où il s'est trompé. Le professeur la regarde, stupéfait. Puis il reprend le verset. Elle répond. Ils disent la prière des morts jusqu'au bout, lui en grondant, elle à voix basse, dans la cale d'un navire immobile, entre une caisse de coraux et une barrique de lard.",
        "Quand c'est fini, ils restent un moment à genoux. La chandelle brûle droit. Le professeur dit qu'il ne savait pas qu'elle connaissait les répons. Elle dit que sa mère les disait, pour son père, tous les ans, et qu'elle les a dits pour Hector, une fois, la première année, et jamais plus, parce qu'elle avait honte de ne pas y croire. Elle dit qu'elle ne sait pas si elle y croit. Elle dit que ce soir, ça n'a pas d'importance.",
        "Le professeur dit que c'est la première fois en vingt-deux ans que quelqu'un répond. Il dit que Coatanéa répondait, autrefois, quand il servait la messe avec lui, à huit ans, et que c'était exactement ce bruit-là : une voix qui en attend une autre. Il dit qu'il comprend, maintenant, pourquoi les gens vont à l'église. Il dit qu'il n'a toujours pas compris pourquoi ils y croient. Il dit que c'est peut-être secondaire. Il se mouche, très fort.",
        "En remontant l'échelle, il s'arrête, la tête déjà dans l'écoutille, et il dit, sans se retourner : l'an prochain, au même jour, à neuf heures du soir, où qu'ils soient l'un et l'autre, il dira la prière des morts. Il demande si elle répondra. Victorine dit oui. Il dit qu'il répond mal. Elle dit qu'elle le sait. Elle reste seule un moment dans la cale, devant la chandelle, à la regarder brûler jusqu'au bout. Elle se dit qu'elle vient de promettre une prière à un homme qui ne croit à rien, et que c'est la chose la plus proche d'une foi qu'elle ait jamais eue.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "UQ" }, back: "A3w_jours" }] },
    UQ_lettre: { act: "III", title: "La chandelle du professeur", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine dit qu'elle ne sait pas s'il est un hypocrite. Elle dit qu'elle sait une chose : il a dit vingt-deux messes à un homme qui ne peut plus les entendre, et il n'a jamais dit merci à ceux qui le peuvent encore. Elle demande si Coatanéa avait une famille. Le professeur dit qu'il avait une sœur, veuve, et des neveux, à Ploubrennec. Il ne les a jamais revus. Il leur envoie de l'argent, pour la messe. Il ne leur écrit pas. Il ne saurait pas quoi dire.",
        "Elle lui dit de leur écrire ce qu'il vient de lui raconter. Le collège, les cloches comptées à l'envers, les économies de quarante ans, la thèse, la lettre de seize ans, la réponse. Tout. Elle dit que les morts n'ont peut-être pas besoin de messes, mais que les vivants ont besoin de savoir à quoi a servi la vie de leur frère et de leur oncle. Elle dit qu'un savant devrait savoir ça : on publie les résultats, ou l'expérience ne sert à rien.",
        "Le professeur la regarde longtemps. Puis il souffle la chandelle. Il dit que c'est une idée détestable, et juste. Il passe les trois nuits suivantes, dans la grand-chambre, à écrire. Il couvre quatorze pages de sa grosse écriture. Il en rature la moitié. Il demande à Victorine de les relire, pour l'orthographe, dit-il, ce qui est un mensonge : il n'a jamais fait une faute de sa vie. Elle les relit. Elle pleure à la page neuf. Elle ne lui dit pas laquelle.",
        "Le dernier soir, il lui lit la lettre, dans la grand-chambre, à voix basse, pendant que le baron dort sur son fauteuil. Il la cachette devant elle avec la cire du livre de bord. Il dit qu'il la mettra à la poste au premier port. Il dit que c'est la première chose qu'il écrit depuis trente ans qui ne cherche à convaincre personne. Il dit qu'il ne sait pas si c'est de la science. Victorine dit que c'est un compte rendu. Il dit que ça lui va.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "UQ" }, back: "A3w_jours" }] },
  },
  extras: {
    quests: [
      { id: "UQ", act: "III", kind: "annexe", title: "La chandelle du professeur", start: "UQ_cale", doit: "messeathee", echo: ["uq:superstition", "uq:tient", "uq:lettre"] },
    ],
  },
};
