// L'Île Folle-Aiguille · side story « Les fleurs de la rue des Juges » (owes its question to The Lady of the Camellias:
// may one ask a woman to give up what she loves for the honour of a family that despises her?). Act II, Morlenc:
// Albane, a courtesan of the Haute-Ville, twenty-four, is consumptive. Victorine treats her. The father of her young
// lover, the alderman Kervégan, comes to ask Victorine to tell his son that the disease is contagious, so that he
// leaves her and marries the shipowner's daughter he is promised to. Victorine lies to the son (va:ment), refuses the
// father (va:refuse), or tells Albane what the father asked, and lets her decide (va:dit). Wired in A2v_jours.
module.exports = {
  passages: {
    VA_albane: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      fx: { meet: "albane" },
      text: [
        "L'appartement est au deuxième étage d'un bel hôtel de la rue des Juges, tendu de soie couleur de cendre de rose, rempli de fleurs blanches, de miroirs, de pendules qui sonnent toutes à des heures différentes, comme si l'on avait voulu que le temps, ici, ne soit jamais d'accord avec lui-même. On paie cher pour y entrer. Victorine y entre par l'escalier de service, avec sa sacoche, sur un billet porté par une femme de chambre qui avait l'air d'avoir pleuré.",
        "Albane a vingt-quatre ans. Elle est couchée dans un lit trop grand, sous un ciel de mousseline, et elle est si belle que Victorine, qui en a vu d'autres, s'arrête une seconde sur le seuil, comme on s'arrête devant un tableau. Puis elle voit les pommettes trop roses, les yeux trop brillants, le mouchoir de dentelle roulé dans la main, avec ses taches. Elle n'a pas besoin de l'ausculter pour savoir. Elle l'ausculte quand même, longtemps, parce que la jeune femme la regarde faire avec une curiosité amusée, comme un jeu.",
        "« Combien ? » demande Albane, quand elle a fini. Victorine dit qu'on ne sait jamais. Albane rit, et tousse. « Vous êtes la première qui ne me ment pas, docteur. Les autres me disent que c'est l'air de la mer. » Elle regarde la fenêtre. « Il y a un garçon qui vient tous les soirs. Il croit que je vais guérir. Il veut m'emmener à la campagne. Je le laisse croire. C'est la première fois de ma vie que quelqu'un m'aime gratuitement. Je n'ai pas envie qu'il arrête avant moi. »",
      ],
      choices: [{ label: "Redescendre l'escalier de service", to: "VA_pere" }] },
    VA_jeunesse: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        "La question tombe dans le fiacre comme une pièce dans un puits. Monsieur de Kervégan ne répond pas tout de suite. Il retire un gant, doigt par doigt, avec une lenteur d'homme qui gagne du temps, et il le pose sur son genou. Dehors, la pluie fine de Morlenc ruisselle sur la vitre et fait trembler les réverbères.",
        "Il dit que oui. Il avait vingt et un ans. Elle s'appelait d'un nom de fleur, comme toutes celles de cette rue, et elle chantait faux, et elle riait de chanter faux. Son père à lui, le vieux Kervégan, est venu le chercher un soir, dans un fiacre semblable à celui-ci, et il lui a parlé une heure. Il ne se rappelle plus ce qu'il a dit. Il se rappelle qu'il pleuvait, et qu'il a obéi.",
        "Il dit qu'il a épousé, l'année suivante, la fille d'un armateur, qui lui a donné la rosette, l'hôtel, la place au Conseil et trois enfants, et qu'il n'a jamais eu à s'en plaindre. Il dit qu'il ne sait pas ce qu'est devenue la fille au nom de fleur. Il dit qu'il ne l'a pas cherché. Il remet son gant, doigt par doigt.",
        "Puis il dit, avec un sourire qui n'a rien de gai, que les Kervégan ont une tradition, dans la famille, et que c'est la seule dont il soit tout à fait sûr. Il dit que son fils la trouvera absurde, et qu'il la perpétuera, comme lui. Il dit cela sans honte, ni orgueil, du ton d'un homme qui annonce le temps qu'il fera demain. Victorine se dit qu'elle n'a jamais entendu un aveu aussi tranquille d'une défaite aussi complète.",
      ],
      choices: [
        { back: "VA_pere", label: "Revenir à la question qu'il lui a posée" }
      ] },
    VA_doute: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        "Victorine se tait, et elle réfléchit, en médecin, ce qui est une façon de réfléchir assez peu commode dans un fiacre où l'on vous demande de mentir. La phtisie. La maladie de poitrine. Elle en a vu cent cas, peut-être deux cents. Elle en a vu mourir des gens de toutes les conditions, des forts, des faibles, des riches, des pauvres, ceux-ci beaucoup plus que ceux-là.",
        "Ses maîtres ne s'accordaient pas. Le vieux Lescop, à l'hôpital, jurait que la maladie venait du sang, de l'humeur, du tempérament, de la mélancolie, et qu'on la portait en soi comme la couleur de ses yeux. Un autre, plus jeune, mort à trente-quatre ans d'avoir ausculté trop de poitrines, affirmait qu'elle se donnait comme un rhume, de bouche à bouche, d'un mouchoir à l'autre. Les deux avaient des preuves. Les deux avaient tort quelque part.",
        "Elle pense à des maris de phtisiques, qu'elle a vus tousser à leur tour, un an après l'enterrement. Elle pense à d'autres, qui ont vécu trente ans à côté d'une malade sans jamais avoir mal à la gorge. Elle pense au mouchoir d'Albane, ce matin, et à sa couleur, et au jeune homme qui le lui tenait en lui baisant les doigts.",
        "Elle comprend alors ce qui la trouble le plus dans la demande du père. Ce qu'on lui demande de dire est peut-être vrai. Elle n'en sait rien. Personne n'en sait rien. Et un mensonge qui a des chances d'être vrai est le plus commode de tous, celui qu'on se pardonne le mieux, et donc le plus dangereux. Elle relève la tête. Monsieur de Kervégan attend toujours.",
      ],
      choices: [
        { back: "VA_pere", label: "Revenir à la question du père" }
      ] },
    VA_pere: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        { first: true, text: "Il l'attend en bas, dans un fiacre fermé, au coin de la rue. Un homme de soixante ans, grand, sec, en noir, avec une rosette d'échevin et des gants gris perle. Il se présente : Monsieur de Kervégan. Elle l'a vu au dîner de l'hôtel Clavières, il ne lui avait pas adressé la parole. Il lui adresse la parole à présent, avec une politesse parfaite, dans la pénombre du fiacre qui sent le cuir et la violette." },
        { first: true, text: "Son fils Maxence a vingt-deux ans. Il est promis depuis l'enfance à la fille d'un armateur de la place du Change, une alliance qui fera la fortune des deux maisons. Il a rompu ses fiançailles il y a un mois. Il passe ses nuits rue des Juges. Il veut partir à la campagne avec *cette personne*. Le père ne dit jamais son nom. Il a essayé l'argent, la menace, le sermon, la mère en larmes. Le fils a ri. Il ne reste qu'une chose. « Dites-lui, docteur, que c'est contagieux. Que s'il continue, il mourra comme elle. Il vous croira. On croit les médecins. Il partira. Elle mourra de toute façon, n'est-ce pas ? Vous le savez mieux que moi. »" },
        { first: true, text: "Il pose sur la banquette, entre eux, une bourse. Puis il la reprend, en voyant le regard de Victorine, avec une rapidité de joueur, et il dit qu'il s'excuse, que c'était maladroit, qu'il est un père, rien de plus. Il dit que c'est pour le garçon. Il dit qu'il ne veut pas voir son fils pleurer sur une tombe, à vingt-deux ans, une tombe qu'on ne pourra même pas fleurir en public. Il le dit avec une sincérité que Victorine reconnaît, et qui ne rachète rien." },
        { again: true, text: "Dans la pénombre du fiacre, Monsieur de Kervégan attend, ses gants gris perle croisés sur le pommeau de sa canne." }
      ],
      choices: [
        { label: "Demander au père s'il a connu, lui aussi, la rue des Juges", to: "VA_jeunesse", hide: { seen: "VA_jeunesse" } },
        { label: "Se demander ce qu'elle sait vraiment de la contagion", to: "VA_doute", hide: { seen: "VA_doute" } },
        { label: "Attendre le fils, ce soir, et lui dire que c'est contagieux", fx: { flag: "va:ment" }, to: "VA_ment" },
        { label: "Refuser, et descendre du fiacre", fx: { flag: "va:refuse" }, to: "VA_refuse" },
        { label: "Monter chez Albane, et lui dire ce que le père a demandé", fx: { flag: "va:dit" }, to: "VA_dit" },
      ] },
    VA_ment: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle l'attend au pied de l'escalier, à la nuit. C'est un grand garçon blond, au visage d'enfant, avec un bouquet de fleurs blanches à la main. Elle lui parle sous le porche. Elle emploie des mots de médecin, les plus froids qu'elle connaisse : phtisie galopante, contagion, haleine, sang. Elle dit qu'il porte peut-être déjà le mal. Elle dit qu'il doit partir, cette nuit, et ne pas revenir, et faire bouillir ses draps. Elle s'entend parler comme on entend parler un inconnu derrière une porte.",
        "Il pâlit. Il regarde l'escalier. Il regarde ses fleurs. Elle voit la peur entrer en lui, et c'est une peur saine, animale, honnête, la peur d'un jeune homme qui veut vivre, et elle voit l'amour reculer devant elle pas à pas, comme une marée. Il pose les fleurs sur la première marche. Il dit, très bas : « Dites-lui… » Il ne finit pas sa phrase. Il s'en va, en courant presque, et ne se retourne pas.",
        "Le lendemain, la femme de chambre la fait demander. Albane est assise dans son lit, avec le bouquet de la veille sur les genoux, que quelqu'un a ramassé sur la marche. Elle sait. Elle ne dit pas comment. Elle dit, en souriant : « Vous avez bien fait, docteur. C'était la seule chose qu'on pouvait lui dire pour qu'il parte, et c'était à moitié vrai. » Puis elle ajoute : « L'autre moitié, c'est que j'aurais voulu choisir le jour. » Elle tousse. Victorine lui tient le front. Elle ne reviendra pas rue des Juges ; la Cormorane appareille avant. Elle ne saura jamais la fin.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "VA" }, back: "A2v_jours" }] },
    VA_refuse: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle dit qu'elle ne mentira pas à un homme sur une maladie. C'est la seule règle de son métier qu'elle n'ait jamais enfreinte, et elle n'a pas l'intention de commencer pour la commodité d'un échevin. Elle descend du fiacre. Monsieur de Kervégan la regarde partir sans un mot. Il retire un de ses gants gris perle, lentement, un doigt après l'autre, comme on se prépare à quelque chose de long.",
        "Le lendemain, à la Faculté, un professeur qu'elle connaît à peine lui demande, avec une gêne visible, si elle a bien ses diplômes en règle, pour exercer à Morlenc. Le surlendemain, le propriétaire du Cormoran lui fait savoir que sa chambre est retenue, à partir de la fin de la semaine, par un voyageur qui paie d'avance. Le soir, au dîner du baron, deux dames de l'échevinage changent de place pour ne pas être assises à côté d'elle. Elle comprend comment se règlent les affaires dans la Haute-Ville : sans un mot plus haut que l'autre.",
        "Elle retourne rue des Juges, le dernier soir, par l'escalier de service. Albane est assise près de la fenêtre, avec le garçon blond qui lui tient la main, et qui lit à voix haute, mal, un roman sentimental qui les fait rire tous les deux. Albane voit Victorine dans le miroir. Elle lui fait un petit signe, de sa main libre, sans interrompre la lecture. Victorine redescend sans entrer. Elle pense que, de tout ce qu'elle a fait à Morlenc, c'est peut-être la seule chose qui en valait la peine, et que personne ne le saura jamais, et qu'elle a perdu une chambre pour ça.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "VA" }, back: "A2v_jours" }] },
    VA_dit: { act: "II", title: "Les fleurs de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle remonte. Elle lui dit tout : le fiacre, les gants, la bourse, la demande. Albane l'écoute, couchée, les yeux au plafond de mousseline. Quand Victorine a fini, elle reste longtemps silencieuse. Puis elle dit : « Il a raison, le vieux. » Elle tourne la tête vers la fenêtre. « Maxence me pleurera deux ans. Ensuite, il épousera la fille du Change, et il aura des enfants, et une rosette d'échevin, et il aura honte de moi, un peu, le soir, devant son eau-de-vie. C'est ce qui peut lui arriver de mieux. Je le sais. Je l'ai toujours su. »",
        "Elle dit qu'elle ne veut pas qu'on mente pour elle, ni qu'on mente pour lui. Elle demande à Victorine de rester, ce soir, assise dans le fauteuil près du lit, comme on garde un témoin. Le garçon arrive à neuf heures, avec ses fleurs blanches. Il s'étonne de trouver la médecin. Albane le fait asseoir. Puis elle lui dit tout, d'une voix calme, sans une larme : le fiacre, les gants gris perle, la demande de son père, la bourse ; et la maladie, son nom, ce qu'elle fait, ce qu'elle fera, et le temps qu'il reste, à peu près, d'après la médecin, ici présente, qui ne ment pas.",
        "« Tu peux partir, dit-elle. Ce soir. Je ne t'en voudrai pas. Ton père a raison sur tout, sauf sur une chose : il croit que tu ne sais pas compter. » Le garçon regarde Victorine. Victorine hoche la tête. Il regarde Albane. Il pose ses fleurs sur le lit. Il ne part pas. Il dit qu'il a compté. Il dit qu'il restera jusqu'au bout, et qu'ensuite il fera ce qu'il voudra de sa vie, et que ce ne sera plus l'affaire de son père. Albane ferme les yeux. Victorine voit qu'elle avait parié sur le contraire, et qu'elle est heureuse d'avoir perdu, et que ça lui fait plus peur que tout le reste.",
        "En partant, à minuit, Victorine trouve le fiacre fermé au coin de la rue, qui attend toujours. Elle s'approche de la portière. Elle dit à Monsieur de Kervégan, à travers la vitre, que son fils sait tout, qu'il a choisi, et qu'il le lui rendra dans un an, peut-être moins, plus vieux de dix ans. L'échevin la regarde longtemps, sans répondre. Puis il frappe au plafond du fiacre avec sa canne, et le fiacre s'en va. Elle ne sait pas si elle a gagné quelque chose. Elle sait qu'elle a vu, ce soir, trois personnes se dire la vérité dans une même pièce, à Morlenc, ce qui ne doit pas arriver souvent.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "VA" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      albane: { name: "Albane", aka: ["la dame de la rue des Juges"], f: true, qui: "Courtisane de la Haute-Ville de Morlenc, malade de la poitrine." },
    },
    quests: [
      { id: "VA", act: "II", kind: "annexe", title: "Les fleurs de la rue des Juges", start: "VA_albane", doit: "damecamelias", echo: ["va:ment", "va:refuse", "va:dit"] },
    ],
  },
};
