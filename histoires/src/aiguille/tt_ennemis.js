// L'Île Folle-Aiguille · side story « La berline » (owes its question to Chekhov's Enemies: when a doctor is dragged out
// at night for a false alarm, whose misery has the right to her night?). Act I, Victorine at Varnèse, the evening of
// the letter: a squire bursts in, his wife is dying, the carriage is waiting. At the manor, the bedroom is empty: the
// wife has gone with another man, and the feigned fit was the pretext to send her husband off for the doctor. He
// weeps, rages, demands that she witness, that she pursue. She stays with him through the night (tt:reste), takes his
// carriage after the runaways at the coaching inn (tt:poursuit), or leaves, because this is not medicine (tt:part).
// Wired in A1v_soir.
module.exports = {
  passages: {
    TT_berline: { act: "I", title: "La berline", place: "varnese_maison", ambiance: "nuit",
      fx: { meet: "kergoat" },
      text: [
        "On tambourine à la porte du cabinet avec les deux poings, et une voix d'homme crie son nom à travers le bois, comme on crie au feu. Elle ouvre. Un homme de trente-cinq ans, grand, blond, en habit de soirée trempé, sans chapeau, les cheveux collés au front, se jette presque à ses pieds.",
        "« Madame. Docteur. Je vous en supplie. Ma femme. Elle est tombée, d'un coup, à table, une crise, elle ne respire plus. Ma berline est là. Une heure de route. Je vous en supplie. »",
        "Il s'appelle Mériadec de Kergoat, du manoir de Kerazan, à deux lieues dans les terres. Elle le connaît de nom : un hobereau de bonne famille et de petite fortune, qui chasse, qui lit, et qui a épousé, l'an dernier, une jeune femme de Morlenc dont on dit qu'elle s'ennuie à la campagne. Victorine prend sa sacoche. Elle monte dans la berline. Il pleut à verse. Il lui tient la main tout le long du chemin, sans s'en rendre compte, et elle la lui laisse, parce qu'elle a vu des hommes trembler ainsi au chevet de leur femme, et qu'elle sait ce que ça vaut."
      ],
      choices: [
        { label: "Arriver au manoir", to: "TT_chambre" }
      ] },
    TT_chambre: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        { first: true, text: "Le manoir de Kerazan est une longue maison de granit au fond d'une allée de hêtres, avec toutes ses fenêtres éclairées dans la pluie. Il saute de la berline avant qu'elle s'arrête. Il court. Elle le suit, dans le vestibule, dans l'escalier, jusqu'à la chambre." },
        { first: true, text: "La chambre est vide. Le lit est fait. La bougie brûle sur la table de chevet. Sur l'oreiller, un billet plié." },
        { first: true, text: "Il le lit debout. Victorine voit son visage changer, morceau par morceau, comme un mur qui s'écroule par pans. Il lui tend le billet sans rien dire." },
        { first: true, text: "Quatre lignes, d'une écriture ronde de pensionnaire. *Pardonne-moi. Il fallait que tu partes pour que je puisse partir. La crise était fausse. Paul m'attend au relais de la Croix-Blanche, la diligence de Morlenc passe à minuit. Ne me cherche pas. Clotilde.*" },
        { first: true, text: "Une servante, sur le palier, explique en pleurant que Madame s'est relevée dès que la berline a tourné l'allée, qu'elle a pris une valise préparée sous le lit, et qu'un cabriolet l'attendait au bout du parc. Il y a de cela une heure et demie." },
        { again: true, text: "La chambre, le lit fait, la bougie. Il relit le billet, assis sur le bord du lit, comme on relit une addition fausse." }
      ],
      choices: [
        { label: "Descendre interroger la servante, pendant qu'il relit le billet", to: "TT_servante", hide: { seen: "TT_servante" } },
        { label: "Regarder la coiffeuse de la jeune femme", to: "TT_coiffeuse", hide: { seen: "TT_coiffeuse" } },
        { label: "Rester dans la chambre, avec lui", to: "TT_colere" }
      ] },
    TT_servante: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "La servante s'appelle Jeannette. Elle a seize ans, des joues rouges et un tablier trempé de larmes. Elle s'assied sur la dernière marche de l'escalier de service et parle à toute vitesse, comme on vide un seau, soulagée que quelqu'un demande.",
        "Madame s'ennuyait. Madame s'ennuyait depuis le premier jour. Elle restait des heures à la fenêtre du salon, à regarder l'allée de hêtres comme on regarde la mer. Monsieur lui lisait des livres, le soir, à voix haute, des livres d'histoire, des batailles, des rois, et Madame faisait semblant d'écouter, en brodant toujours le même coussin, qu'elle défaisait le lendemain. Le cousin Paul venait le dimanche. Il était drôle. Il chantait. Madame riait. Monsieur riait aussi, il était content qu'elle rie.",
        "« Je portais les lettres, dit Jeannette en baissant la tête. Depuis la Toussaint. Une par semaine. Madame me donnait un ruban à chaque fois. » Elle sort de sa poche une poignée de rubans de couleur, chiffonnés, et les regarde comme des pièces à conviction. « Je ne savais pas que c'était mal. Si, je le savais. Mais elle était si triste. »",
        "Victorine lui dit de garder les rubans. Elle remonte l'escalier en se disant que la moitié des drames de province tiennent dans le tablier d'une servante de seize ans, et que personne ne les y cherche."
      ],
      choices: [
        { label: "Remonter dans la chambre", back: "TT_chambre" }
      ] },
    TT_coiffeuse: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "La coiffeuse est sous la fenêtre, en bois de rose, avec un miroir ovale. Tout y est rangé avec un soin de pensionnaire : les brosses alignées, les flacons par taille, les épingles piquées dans une pelote en forme de cœur. Il manque le peigne d'écaille, le flacon de lavande, et la petite boîte à bijoux, dont on voit la place, plus claire, sur le bois.",
        "Dans le tiroir, il reste un livre. Un roman, un de ces romans qu'on vend sous le manteau aux jeunes femmes de Morlenc, avec une héroïne qui s'enfuit en diligence par une nuit d'orage et des pages cornées aux bons endroits. Entre deux pages, une fleur séchée, une violette, aplatie comme un papillon.",
        "Et sous le livre, plié en quatre, un papier couvert d'une écriture d'homme, tout en chiffres. Un compte. Le prix de deux places de diligence pour Morlenc, le prix d'une chambre à l'hôtel des Voyageurs, le prix d'un passage pour les Îles, en seconde classe. Au bas, en dessous du total, de la même écriture : *Nous y arriverons.*",
        "Victorine remet le papier sous le livre. Elle pense qu'on s'enfuit rarement par amour seul, et presque toujours avec un compte."
      ],
      choices: [
        { label: "Revenir près de lui", back: "TT_chambre" }
      ] },
    TT_colere: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "Il s'assied sur le lit fait. Il rit, d'abord, un rire affreux, aigu, qui ne lui ressemble pas. Puis il pleure. Puis il se lève, et la colère monte, et c'est contre elle, Victorine, qu'elle se tourne, parce qu'elle est là, et que la colère a besoin d'un visage.",
        "« Vous saviez ? Les médecins savent toujours. Elle vous a consultée, peut-être. Pour ses nerfs. Vous lui avez donné des gouttes, et un conseil. Les femmes se parlent. »",
        "Elle dit que non. Elle ne connaissait pas sa femme.",
        "Il ne l'entend pas. Il marche de la fenêtre à la porte. Il dit qu'il va prendre son fusil. Il dit qu'il va prendre la berline et rattraper la diligence, et tuer Paul, qui est son cousin, qui a dîné ici dimanche. Il dit qu'elle doit venir avec lui, elle, la médecin, comme témoin, pour qu'on sache qu'il était dans son droit. Il dit qu'elle doit rester, pour qu'il ne fasse pas de bêtise. Il dit qu'elle doit s'en aller, et que tous les médecins sont des charognards qui vivent du malheur des autres.",
        "La pendule du vestibule sonne onze heures. La diligence passe à minuit. Victorine pense, malgré elle, à sa sacoche intacte, à la pluie, à la lettre au beau papier, chez elle, à deux lieues d'ici, et au fait qu'elle s'est levée à cinq heures ce matin pour un accouchement. Elle pense qu'on l'a tirée de chez elle pour rien. Elle a honte d'y penser. Elle y pense quand même."
      ],
      choices: [
        { label: "Rester avec lui jusqu'au jour, et le laisser crier", fx: { flag: "tt:reste" }, to: "TT_reste" },
        { label: "Prendre la berline et aller elle-même au relais de la Croix-Blanche", fx: { flag: "tt:poursuit" }, to: "TT_relais" },
        { label: "Lui dire que ce n'est pas un cas de médecine, et demander qu'on la ramène", fx: { flag: "tt:part" }, to: "TT_part" }
      ] },
    TT_reste: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "Elle reste. Elle enlève son manteau mouillé. Elle s'assied dans le fauteuil, près de la cheminée de la chambre, et elle le laisse crier.",
        "Il crie longtemps. Il casse un vase, puis un deuxième, puis il s'arrête au troisième, parce que c'était celui de sa mère. Il prend son fusil, le charge, le pose sur le lit fait. Il ne sort pas. La pendule sonne minuit. Il regarde le fusil. Elle le regarde le regarder. Elle ne dit rien. La diligence passe, quelque part, à deux lieues, sous la pluie, avec Clotilde et Paul dedans, et le moment passe avec elle.",
        "Vers deux heures, il s'assied par terre, le dos contre le lit, et il parle, autrement, d'une voix d'enfant. Il raconte le mariage, la robe, les promenades, l'ennui de sa femme qu'il voyait sans le comprendre, les livres qu'il lui lisait et qu'elle n'écoutait pas. Victorine écoute. Elle a son mot à dire, parfois, sur l'ennui, et sur les maris qui lisent à voix haute. Elle le garde pour elle.",
        "À l'aube, il dort, par terre, la tête sur le bord du lit. Elle décharge le fusil, range les balles dans sa sacoche, et demande au cocher de la ramener. Elle n'envoie pas de note d'honoraires. Elle pense, dans la berline, que c'est la nuit la plus inutile et la plus utile de sa carrière, et qu'aucune faculté ne lui apprendra jamais la différence."
      ],
      choices: [
        { label: "Rentrer chez elle, à l'aube", fx: { quest: "TT" }, back: "A1v_soir" }
      ] },
    TT_relais: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "Elle lui prend le fusil des mains, d'un geste si naturel qu'il la laisse faire. Elle le pose sur l'armoire. Elle dit qu'elle va au relais, seule, et qu'il restera ici. Il proteste. Elle répète, du ton qu'elle prend pour les amputations. Il se tait.",
        "La berline file sous la pluie. Le relais de la Croix-Blanche est une auberge basse, au carrefour de la grand-route, avec une lanterne qui grince. La diligence est déjà là, les chevaux fument. Dans la salle, près du feu, une jeune femme en manteau de voyage, très pâle, très belle, avec des yeux trop grands, et un jeune homme brun qui tient sa main et qui regarde la porte.",
        "Victorine s'assied à leur table, sans y être invitée. Elle se présente. Elle dit qu'elle n'est pas venue la reprendre. Qu'elle vient de passer une heure avec un homme qui charge un fusil. Qu'il ne la poursuivra pas cette nuit, parce qu'elle a le fusil sur son armoire, et qu'il pleure trop pour viser. Qu'il fallait que quelqu'un le leur dise, et qu'elle a mal aux jambes, et qu'elle prendrait volontiers un vin chaud.",
        "Clotilde de Kergoat pleure. Le jeune homme brun ne lâche pas sa main. Ils boivent le vin chaud avec elle, en silence, tous les trois, jusqu'à ce que le postillon crie. Alors Clotilde se lève, embrasse Victorine sur les deux joues, comme une sœur, et lui donne pour son mari une bague qu'elle ôte de son doigt. Puis la diligence part, dans la nuit, vers Morlenc.",
        "Victorine rapporte la bague au manoir à deux heures. Il la prend. Il la regarde. Il dit merci. Il dit que c'est la première fois de sa vie qu'un médecin lui annonce une mort qui n'en est pas une."
      ],
      choices: [
        { label: "Rentrer chez elle, à l'aube", fx: { quest: "TT" }, back: "A1v_soir" }
      ] },
    TT_part: { act: "I", title: "La berline", place: "varnese", ambiance: "nuit",
      text: [
        "Elle se lève. Elle lui dit, calmement, qu'elle est désolée, qu'elle comprend, et que ce n'est pas un cas de médecine. Qu'elle soigne les corps, et que le sien va bien. Qu'il y a, dans la région, un curé, un notaire et un juge, et qu'il trouvera chez eux ce qu'elle n'a pas dans sa sacoche. Elle demande qu'on la ramène.",
        "Il la regarde comme si elle l'avait giflé. Puis il ricane. « Vous êtes bien tous les mêmes. Vous venez quand on meurt, et quand on ne meurt pas assez, vous repartez. » Il appelle le cocher d'un hurlement. Il ne la raccompagne pas.",
        "Dans la berline, sous la pluie, sur le chemin du retour, elle se répète qu'elle avait raison. Qu'elle s'est levée à cinq heures. Qu'elle avait le droit de rentrer. Qu'un homme qui pleure sa femme enfuie n'a pas besoin d'une médecin, mais d'un ami, et qu'elle n'est pas son amie.",
        "À un carrefour, la berline croise la diligence de minuit, qui file dans l'autre sens, toutes lanternes allumées. Victorine voit, une seconde, derrière une vitre, une jeune femme pâle qui regarde la nuit, et qui ne la voit pas. Elle pense au fusil, sur le lit fait. Elle ne fait pas arrêter la berline. Elle rentre. Le sommeil la fuit jusqu'au jour."
      ],
      choices: [
        { label: "Rentrer chez elle", fx: { quest: "TT" }, back: "A1v_soir" }
      ] }
  },
  extras: {
    people: {
      kergoat: { name: "Mériadec de Kergoat", aka: ["le hobereau de Kerazan"], qui: "Petit hobereau du manoir de Kerazan, à deux lieues de Varnèse, dont la jeune femme s'est enfuie un soir de pluie." }
    },
    quests: [
      { id: "TT", act: "I", kind: "annexe", title: "La berline", start: "TT_berline", doit: "ennemis", echo: ["tt:reste", "tt:poursuit", "tt:part"] }
    ]
  }
};
