// L'Île Folle-Aiguille · side story « La mule du gouverneur » (owes its question to Voltaire's Zadig: is it wise to
// show what one knows, when knowing looks so much like being guilty?). Act III, the mousse at Brisegrève: the
// governor's mule, which carries his wine up from the anchorage, has vanished with two kegs. The child, who walked the
// rock that morning, describes her so exactly to the sergeant, without having seen her, that the garrison takes the
// child for the thief. The child explains the reasoning (vx:explique), plays the fool and denies everything
// (vx:ignore), or leads the soldiers to where the mule must be (vx:mene). Wired in A3m_brisegreve.
module.exports = {
  passages: {
    VX_traces: { act: "III", title: "La mule du gouverneur", place: "brisegreve", ambiance: "mer",
      fx: { meet: "quillevere" },
      text: [
        "Tu as fait, le matin, le tour de la roche par le sentier des douaniers, pour rien, pour marcher, pour sentir sous tes pieds quelque chose qui ne tangue pas. Le sentier longe la falaise côté large, entre les touffes d'ajonc nain et les plaques de lichen gris, et l'on n'y croise personne. Tu y as vu, sans y penser, ce qu'on voit quand on n'a rien d'autre à regarder.",
        "À midi, en redescendant vers le bourg, tu tombes sur un sergent hors d'haleine, rouge, la vareuse ouverte, un petit homme rond aux moustaches tombantes, qui interroge tout le monde avec la voix d'un homme qui va perdre ses galons. Le sergent Quillévéré. Il cherche la mule du gouverneur. La Duchesse. Elle monte chaque matin, de l'anse au fort, deux petits barils du vin de Monsieur le gouverneur, un vin de prix, qu'il fait venir de très loin et qu'il ne partage avec personne. Ce matin, la Duchesse n'est pas arrivée au fort. Ni les barils. Le muletier dormait.",
        "« Tu l'as vue, toi, une mule ? » Tu réfléchis. Tu dis que non, tu ne l'as pas vue. Mais tu demandes, par curiosité, si c'est une petite mule grise, vieille, qui boite de l'antérieur gauche, à qui il manque un fer, qui est borgne de l'œil droit, et dont le baril de gauche fuit un peu, un vin rouge foncé, presque noir, qui sent la violette.",
        "Le sergent te regarde. Les soldats qui l'accompagnent te regardent. Le sergent dit, lentement : « C'est elle. C'est exactement elle. » Puis il dit : « Et tu ne l'as pas vue. » Puis il fait signe aux soldats.",
      ],
      choices: [{ label: "Te laisser emmener au fort, entre deux soldats", to: "VX_fort" }] },
    VX_fort: { act: "III", title: "La mule du gouverneur", place: "brisegreve", ambiance: "chateau",
      text: [
        "On te fait monter l'escalier des forçats, deux cents marches, un soldat devant, un soldat derrière, et l'on t'amène dans une salle voûtée où le gouverneur Lebihan, en robe de chambre de soie puce, déjeune seul devant une carafe vide. Il a le teint d'un homme privé de son vin depuis l'aube. Le sergent fait son rapport. Le gouverneur t'écoute répéter ta description, mot pour mot, et à chaque détail, il pâlit d'un degré, comme si tu lui décrivais une maîtresse.",
        "« Le fer, dit-il. Elle a perdu le fer mardi. Personne ne le sait, hormis le maréchal. La violette. Personne n'a goûté ce vin, hormis moi. » Il pose sa serviette. « Mon enfant, vous avez volé ma mule, vous avez bu mon vin, et vous avez l'aplomb de venir me la décrire. J'admire. Je vous ferai pendre avec une certaine estime. »",
        "Il ne plaisante qu'à moitié. Sur une île où l'on garde des prisonniers d'État, un gouverneur s'ennuie, et un procès est une distraction. Le sergent, derrière toi, renifle, partagé entre le soulagement d'avoir un coupable et la vague conscience qu'il en tient peut-être un mauvais. Le greffier du fort taille déjà sa plume.",
      ],
      choices: [
        { label: "Expliquer, point par point, comment tu sais", fx: { flag: "vx:explique" }, to: "VX_explique" },
        { label: "Faire l'idiot{e} : tu as tout inventé, par jeu", fx: { flag: "vx:ignore" }, to: "VX_ignore" },
        { label: "Proposer de les mener à la mule, sur-le-champ", fx: { flag: "vx:mene" }, to: "VX_mene" },
      ] },
    VX_explique: { act: "III", title: "La mule du gouverneur", place: "brisegreve", ambiance: "chateau",
      text: [
        "Tu expliques. Sur le sentier des douaniers, il y avait des traces de sabots, petits, des sabots de mule, et l'un des quatre ne marquait pas de fer, et appuyait moins : l'antérieur gauche. Aux ajoncs, à hauteur de ta hanche, des poils gris, longs, rêches, de vieille bête. Le lichen était brouté à droite du sentier seulement, jamais à gauche, contre la falaise : une bête qui ne voit pas de l'œil droit broute du côté où elle voit, et longe le vide sans le savoir. Et tous les vingt pas, sur la pierre, une goutte, sombre, presque noire, qui sentait la violette quand tu t'es penché{e}.",
        "Le gouverneur écoute. Le greffier a cessé d'écrire. Le sergent a la bouche ouverte. Quand tu as fini, il y a un long silence. Puis Lebihan dit, d'un ton infiniment déçu : « Vous ne l'avez donc pas volée. » Il paraît le regretter. Il envoie des hommes sur le sentier. Ils reviennent au bout d'une heure avec la Duchesse, qu'ils ont trouvée sur une corniche, au-dessus du vide, borgne, boiteuse, tranquille, en train de brouter, avec un baril qui fuyait. L'autre est tombé à la mer.",
        "Tu crois l'affaire finie. Le gouverneur, lui, ne la croit pas finie. Il dit que tu es innocent{e} du vol, soit, mais que tu as menti au sergent en disant que tu n'avais pas vu la mule, puisque tu la connaissais mieux que son muletier. Le greffier, ravi, trouve un article. Tu es condamné{e} à une amende de deux livres, pour fausse déclaration, et à la perte du baril tombé à la mer, que tu ne peux pas payer et dont le gouverneur te fait grâce, avec magnanimité.",
        "Maître Gobert paie l'amende, en jurant. En redescendant l'escalier, il te dit que la prochaine fois que tu sauras quelque chose, tu le garderas pour toi, et que c'est la seule leçon qui vaille sur une île à gouverneur. Puis il ajoute, plus bas, qu'il n'avait jamais entendu un raisonnement pareil, et qu'il aimerait que tu lui apprennes à regarder un sentier. Il dit ça en regardant ailleurs.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "VX" }, back: "A3m_brisegreve" }] },
    VX_ignore: { act: "III", title: "La mule du gouverneur", place: "brisegreve", ambiance: "chateau",
      text: [
        "Tu prends ton air le plus bête, celui que tu réserves à Maître Gobert quand il demande qui a renversé le seau. Tu dis que tu as tout inventé. Que tu as décrit une mule comme on décrit une mule, au hasard, pour faire le malin devant les soldats. Que toutes les mules sont grises et que toutes les vieilles boitent. Le gouverneur te regarde longtemps. « Et la violette ? » Tu dis que tu aimes les violettes. Que c'est la première fleur qui t'est venue.",
        "C'est si absurde que ça passe. Le gouverneur, déçu de perdre un procès, se rabat sur le muletier, qui dormait, et qui est mis aux fers pour deux jours. Le sergent te reconduit à la porte du fort, l'air soulagé et un peu méprisant, comme on raccompagne un simple d'esprit. Tu as la gorge serrée. Tu sais où est la mule. Tu sais qu'elle broute au bord du vide, sur une corniche, du côté où elle ne voit pas le précipice.",
        "Tu fais le tour par le sentier, seul{e}, à la fin de l'après-midi. Elle est là, sur sa corniche. Tu la tires par la bride jusqu'au chemin, en lui parlant. Elle te suit, docile. Tu la laisses devant la porte de l'écurie du fort, avec son baril qui fuit, et tu redescends en courant avant qu'on te voie. Le lendemain, on dit au bourg que la Duchesse est rentrée seule, la nuit, et que c'est un miracle, et l'aumônier du fort en fait un sermon. Le muletier est libéré. Personne ne sait rien.",
        "Tu gardes pour toi que tu sais regarder un sentier. Tu découvres que c'est une chose qu'il vaut mieux savoir que montrer, et tu n'aimes pas l'avoir découvert, parce que ça ressemble à ce que disent les vieux, et que tu n'as que seize ans.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "VX" }, back: "A3m_brisegreve" }] },
    VX_mene: { act: "III", title: "La mule du gouverneur", place: "brisegreve", ambiance: "mer",
      text: [
        "Tu dis que tu ne peux pas expliquer, que ce serait trop long, mais que tu peux les mener à la mule. Le gouverneur hésite, puis se lève : il veut voir. On te fait marcher devant, le sergent derrière, avec la main sur ton col, le gouverneur en robe de chambre de soie puce sur un âne de réquisition, le greffier, deux soldats, et, comme le bruit s'est répandu, la moitié du bourg, qui suit à distance pour voir pendre quelqu'un ou retrouver une mule, selon.",
        "Tu suis les traces. Le fer manquant. Les poils dans l'ajonc. Le lichen brouté à droite. Les gouttes de violette sur la pierre. Tu marches lentement, en regardant le sol, et derrière toi, le cortège se tait peu à peu, parce qu'il commence à comprendre ce que tu fais. Au bout d'une demi-lieue, le sentier se perd sur une corniche, au-dessus d'un vide de cent pieds. La Duchesse est au bout. Elle broute. Elle lève vers vous son œil valide, sans curiosité.",
        "On la ramène. Un baril est tombé à la mer ; l'autre est à moitié vide. Le gouverneur goûte au fond du baril, avec ses doigts, et ferme les yeux. Puis il te regarde, et il dit, assez haut pour que tout le cortège entende, que si tu sais suivre une mule comme ça, tu saurais suivre un homme, et que les évadés de Brisegrève ne vont pas très loin, mais qu'on les cherche longtemps. Il t'offre une place au fort. Pisteur. Une solde, un uniforme, une chambre.",
        "Tu refuses, poliment. Il insiste, moins poliment. Maître Gobert, qui est monté entre-temps, te tire en arrière par le bras et dit au gouverneur que tu es inscrit{e} au rôle de la Cormorane, et que la Cormorane part demain. En redescendant, il te dit que tu as eu de la chance. Que le talent, sur une île de prisonniers, il vaut mieux le montrer à ceux qui partent qu'à ceux qui restent. Le soir, un soldat t'apporte à bord, de la part du gouverneur, une petite fiole. Du vin. Il sent la violette.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "VX" }, back: "A3m_brisegreve" }] },
  },
  extras: {
    people: {
      quillevere: { name: "Le sergent Quillévéré", aka: ["le sergent"], qui: "Sergent de la garnison de Brisegrève, chargé, ce matin-là, de retrouver la mule du gouverneur." },
    },
    quests: [
      { id: "VX", act: "III", kind: "annexe", title: "La mule du gouverneur", start: "VX_traces", doit: "zadig", echo: ["vx:explique", "vx:ignore", "vx:mene"] },
    ],
  },
};
