// L'Île Folle-Aiguille · side story « Le cocher de la côte des Hollandes » (owes its question to Chekhov's Misery:
// who listens to a man's grief, and what does it cost to let him finish?). Act II, Fargue in Morlenc: under the rain,
// Fargue takes a cab up to the Haute-Ville to carry the baron his list of stores. The cabman, old Yaouen Hamonic,
// turns round at every corner to speak: his son died last week, at nineteen, at the hospice. Fargue listens to the end
// (vp:ecoute), cuts him short (vp:coupe), or answers with his own dead, Annette, and the cough that eats Lisette
// (vp:raconte). Wired in XR_jours.
module.exports = {
  passages: {
    VP_pluie: { act: "II", title: "Le cocher de la côte des Hollandes", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "hamonic" },
      text: [
        "Il pleut sur Morlenc depuis l'aube, une pluie fine, grise, obstinée, qui ne tombe pas mais qui flotte, et qui entre partout, sous les cols, dans les bottes, dans les pensées. Fargue doit monter à l'hôtel Clavières porter au baron la liste des vivres, avec les prix, pour qu'il signe. Une demi-lieue de côte, sous cette eau. Il a quarante-huit ans, et la côte est raide. Il prend un fiacre, au bas de la côte des Hollandes, le premier de la file.",
        "Le cheval est vieux, maigre, la tête basse, couvert d'une bâche qui ruisselle. Le cocher aussi : un petit vieux tout blanc, sous un chapeau de toile cirée, ramassé sur son siège comme un tas de linge mouillé, qui ne bouge pas quand Fargue monte, et qu'il faut appeler deux fois. Il s'appelle Yaouen Hamonic, c'est écrit sur la portière. Il fouette le cheval, qui démarre en trébuchant.",
        "Au premier tournant, le cocher se retourne. Il a des yeux rouges, de vieux yeux d'eau. Il ouvre la bouche. Il dit : « Mon fils, monsieur… » Puis le fiacre cahote, et un charretier crie, et il se retourne vers la route. Au deuxième tournant, il se retourne encore. « Mon fils est mort, monsieur, cette semaine. Mardi. » Il attend. Fargue, sous la capote, sa liste de vivres sur les genoux, le regarde.",
      ],
      choices: [{ label: "Laisser le silence durer un peu", to: "VP_tournant" }] },
    VP_tournant: { act: "II", title: "Le cocher de la côte des Hollandes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Le cocher prend le silence pour une invitation. Il raconte, par morceaux, entre deux tournants, en se retournant à chaque fois, au risque de verser. Perig. Dix-neuf ans. Il conduisait le fiacre, l'hiver, quand le vieux avait trop mal aux mains. Une fièvre, dix jours, à l'hospice de la Marine, et puis rien. Il dit qu'il est allé le voir chaque soir, après sa journée, et que Perig lui demandait toujours si le cheval avait mangé. Il dit qu'il n'a raconté ça à personne. Les autres cochers ont leurs affaires. Sa logeuse n'écoute pas. Il a essayé avec un client, hier. Le client lui a dit de regarder la route.",
        "Fargue l'écoute. Il pense à Annette, dans la fosse des pauvres, au deuxième ou au troisième rang, dont il n'a jamais parlé à personne non plus, en onze ans, pas même à Lisette, qui était trop petite, puis trop grande. Il pense à Lisette, là-bas, à la fenêtre des Sœurs, qui tousse en cousant. Il pense à la liste des vivres, au baron, à tout ce qu'il prépare, qui n'a pas de place pour un cocher. Il a des choses à faire, beaucoup, et peu de jours.",
        "Le fiacre arrive en haut de la côte. Il reste encore la rue des Juges à monter. Le cocher se retourne une dernière fois. Il dit : « Il avait les mêmes mains que moi, monsieur. Vous voyez ? » Et il montre ses mains, déformées, nouées, tenant les rênes. Il veut qu'on regarde. Il veut seulement qu'on regarde.",
      ],
      choices: [
        { label: "Regarder ses mains, et le laisser finir, jusqu'au bout", fx: { flag: "vp:ecoute" }, to: "VP_ecoute" },
        { label: "« Regardez la route, l'ami. J'ai à faire. »", fx: { flag: "vp:coupe" }, to: "VP_coupe" },
        { label: "Lui parler d'Annette, et de la toux de Lisette", fx: { flag: "vp:raconte" }, to: "VP_raconte" },
      ] },
    VP_ecoute: { act: "II", title: "Le cocher de la côte des Hollandes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Il regarde les mains. Il dit qu'elles sont belles, des mains de travail. Le cocher arrête le fiacre au bord du trottoir, sous la pluie, devant l'hôtel Clavières, et il continue de parler, assis sur son siège, sans se retourner cette fois, comme on parle à la pluie. Il dit tout : le premier mot de Perig, le premier fouet, la mère morte jeune, le cheval acheté ensemble, les dettes, l'hospice, les sœurs qui priaient trop fort, le dernier soir, et le cheval qui n'avait pas mangé, et qu'il a menti, et qu'il a dit que si. Fargue ne descend pas. La liste du baron se mouille sur ses genoux.",
        "Quand le vieux a fini, il y a un long silence, avec la pluie dedans. Puis il dit, très surpris : « Vous m'avez laissé finir. » Il le dit comme on constate un miracle mineur, une pièce trouvée dans la rue. Fargue descend. Il paie, le double. Le cocher refuse le double. Il prend le simple. Il dit qu'on ne paie pas pour ça. Il dit merci. Il repart, au pas, vers le bas de la côte, et Fargue remarque qu'il se tient un peu plus droit sur son siège, à peine, d'un pouce, ce qui n'est rien et ce qui est beaucoup.",
        "Le baron le fait attendre une heure dans le vestibule, parce qu'il est en retard et mouillé. Fargue ne s'en aperçoit pas. Il pense à ce que le cocher a dit. Il pense qu'il ne lui a rien coûté d'écouter, qu'une heure, une liste mouillée et la mauvaise humeur d'un baron, et qu'il n'a jamais trouvé personne pour lui accorder cette heure-là, à lui, en onze ans. Il pense qu'il ne l'a jamais demandée. Il range cette pensée avec les autres, dans l'endroit où il range ce qu'il ne veut pas regarder, et qui commence à être plein.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VP" }, back: "XR_jours" }] },
    VP_coupe: { act: "II", title: "Le cocher de la côte des Hollandes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Il le dit sans méchanceté, d'une voix de quartier-maître, celle qui fait tourner les têtes vers l'avant. Le vieux se retourne vers la route. Il ne dit plus rien. Il conduit jusqu'à l'hôtel Clavières, très droit, très raide, très exactement. Fargue paie. Le cocher prend l'argent sans un mot, sans le regarder, et touche son chapeau, et repart. Le fiacre disparaît au bas de la rue des Juges, sous la pluie, avec la bâche du cheval qui ruisselle.",
        "Il porte sa liste au baron. Il la discute, ligne à ligne, avec une âpreté qui fait sourire le baron et rougir son secrétaire. Il gagne vingt livres sur le lard, quinze sur le vinaigre. En redescendant, il cherche le fiacre de Yaouen Hamonic dans la file, au bas de la côte. Il ne le trouve pas. Il demande aux autres cochers. On lui dit que le vieux est rentré, qu'il ne travaille plus l'après-midi depuis mardi. On lui dit ça en haussant les épaules. On a ses affaires.",
        "Le soir, il monte voir Lisette, chez les Sœurs. Elle coud à la fenêtre aux géraniums, et elle tousse, et elle sourit. Il s'assied. Il reste longtemps sans parler. Puis il lui parle de sa mère. Pour la première fois en onze ans. Il lui raconte Annette, sa voix, sa façon de chanter faux la berceuse, le dernier hiver, la fosse. Lisette pose son ouvrage. Elle écoute jusqu'au bout. Elle ne l'interrompt pas une fois. Quand il a fini, elle lui prend la main, et il comprend qu'il a payé ce soir, à sa fille, la dette d'un cocher qu'il ne reverra pas.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VP" }, back: "XR_jours" }] },
    VP_raconte: { act: "II", title: "Le cocher de la côte des Hollandes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Il dit, sous la capote, sans élever la voix : « Ma femme est morte il y a onze ans. Dans une chambre de la Basse-Fosse. D'une toux. » Le cocher se retourne. Fargue continue. Annette, la fosse des pauvres, le mur couvert de noms, Lisette qui tousse aujourd'hui de la même toux, dans la maison des Sœurs, à la fenêtre aux géraniums. Il ne sait pas pourquoi il le dit. Il le dit à un inconnu, à un vieux cocher mouillé, comme on jette par-dessus bord quelque chose qui pèse trop.",
        "Le cocher arrête le cheval, au milieu de la côte, sans se soucier des charretiers qui jurent derrière. Il descend de son siège. Il ouvre la portière. Il monte à côté de Fargue, sous la capote, ruisselant, et sort de sa poche une petite bouteille d'eau-de-vie. Il la tend. Ils boivent, chacun leur tour, en silence, pendant que la pluie tambourine sur la capote et que le cheval, devant, attend, la tête basse, avec une patience de cheval.",
        "Ils parlent une heure. De Perig, d'Annette, de Lisette, des hospices, des sœurs, des fièvres, du prix des cercueils, qui est une honte. Puis le vieux remonte sur son siège et le conduit jusqu'à l'hôtel Clavières, et refuse d'être payé. Fargue insiste. Le cocher dit : « Vous m'avez donné la vôtre. On est quittes. » Le baron, en voyant arriver son maître-coq mouillé, en retard et sentant l'eau-de-vie, fronce les sourcils. Fargue lui tend la liste des vivres, détrempée, illisible aux deux tiers. Il dit qu'il la recopiera. Il se sent plus léger qu'il ne l'a été depuis longtemps, et il s'en méfie.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VP" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      hamonic: { name: "Yaouen Hamonic", aka: ["le vieux cocher"], qui: "Cocher de fiacre au bas de la côte des Hollandes, à Morlenc." },
    },
    quests: [
      { id: "VP", act: "II", kind: "annexe", title: "Le cocher de la côte des Hollandes", start: "VP_pluie", doit: "toska", echo: ["vp:ecoute", "vp:coupe", "vp:raconte"] },
    ],
  },
};
