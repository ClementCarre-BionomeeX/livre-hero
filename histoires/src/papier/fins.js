// « Le Papier chromé » · the five endings, all at six in the morning: the page signed as it is, the true page
// swapped in, the hand caught on the marble, the true page given to Vélin, and the refusal to sign.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  F_conforme: fin("conforme", "Conforme à l'épreuve", "atelier", [
    "Tu signes. L'encre argentée brille un instant sur le papier, puis elle sèche, et la page du Paravent devient vraie, au sens où l'entend la Maison : imprimée.",
    "Gaspard serre les quatre vis. La Vieille s'ébroue, tousse, tourne, et tire trois cent douze fois la même page, avec un bruit de cœur énorme et régulier. À sept heures, les Catalogues montent au Domaine, sous papier de soie. À huit heures, le Domaine les lit au lit.",
    "Le premier jour de l'hiver, trois cent douze paravents de chrome se dressent au bord de trois cent douze terrasses. Les familles du Domaine s'y contemplent, ravies, dans leurs plus beaux habits. Elles prennent des poses. Elles ne se sont jamais trouvées aussi belles.",
    "De l'autre côté, en bas, le Bas-Quartier a sorti ses chaises.",
    { if: { has: "citron:lu" }, text: "Tu y es aussi, au troisième rang, sur une chaise à deux euros. Tu savais. Tu as signé quand même. Le spectacle est très bon. Tu ne sais pas encore si tu as honte, ou si tu as simplement très bien fait ton métier ; au Catalogue, c'est souvent la même chose." },
    { if: { not: { has: "citron:lu" } }, text: "Tu le découvres le soir même, en traversant le Bas-Quartier à moto : des rangées de chaises, des gens qui rient, qui mangent des marrons, et qui regardent, sur quatre mètres de haut, une dame en chapeau se recoiffer en croyant être seule. Une vieille femme en tablier de cuir, au premier rang, boit un thé au citron. Elle ne te voit pas. Elle regarde le spectacle avec l'attention d'une typographe qui relit une page où elle n'a trouvé aucune faute." },
  ]),
  F_vraie: fin("vraie", "Sans une coquille", "atelier", [
    "Pendant que Monsieur Vélin rajuste son nœud de cravate devant une rame de papier chromé, tu poses la main sur le marbre, et tu fais ce que Madame Plomb faisait mieux que personne : tu ranges. Sa forme à la place de l'autre, d'un seul geste, sans un bruit. Puis tu signes le bon à tirer, à l'encre argentée.",
    "Gaspard serre la forme qu'on lui donne, signée. Il ne regarde pas laquelle. La Vieille tire trois cent douze fois la vraie page. À huit heures, le Domaine la lit au lit.",
    "Tu t'attends à un scandale. Le Domaine, qui ne fait jamais ce qu'on attend, est enchanté. Être regardé par le Bas-Quartier, sur quatre mètres de haut, à deux euros la place : c'est le seul luxe qu'il n'avait pas encore. Le premier jour de l'hiver, les familles se montrent sur leurs terrasses comme sur une scène, en costume, avec des musiciens. Elles jouent. Elles saluent. Le Bas-Quartier, en bas, applaudit, et commente, très fort, et ne s'est jamais autant amusé.",
    "Le Catalogue doit être réimprimé deux fois, ce qui ne s'était jamais vu. Monsieur Vélin est nommé typographe, en remplacement de lui-même. Madame Plomb est rappelée à la direction du Catalogue, à la condition expresse de ne jamais rien écrire au citron.",
    "Elle te fait monter dans la cage de verre, le premier jour, et te sert un thé. « Une page vraie, dit-elle, c'est une page que tout le monde peut lire des deux côtés. » Elle regarde par la vitre l'atelier, en bas, où Monsieur Vélin cherche le W dans une casse. « Et maintenant, relis tout, petit correcteur. Surtout ce qui n'a pas de fautes. »",
  ]),
  F_surpris: fin("surpris", "La main sur le marbre", "atelier", [
    "Ta main est sur le marbre, la forme de Madame Plomb à moitié glissée sous l'autre, quand un gant de chevreau gris se pose sur ton poignet. Monsieur Vélin ne crie pas. Il a vu Madame Plomb faire exactement le même geste, hier, et il a appris.",
    "« Ainsi, dit-il, on vous a laissé un message. » Il prend la petite forme, la soupèse, la lit à l'envers en fronçant les sourcils, ce qu'il fait mal. Puis il te tend son stylo. « Signez l'autre. »",
    "Gaspard attend, les quatre vis à la main. Il serre la forme qu'on lui donne, signée. Il ne regarde pas laquelle. Il regarde, pour la première fois depuis que tu le connais, quelqu'un : toi.",
    "Tu ne signes pas. Monsieur Vélin signe à ta place, à l'encre argentée, et te renvoie sur-le-champ pour insolence typographique, le même motif, mot pour mot, que la veille. La Vieille tire.",
    "Le premier jour de l'hiver, au Bas-Quartier, une vieille femme en tablier de cuir t'attend devant le premier paravent, avec deux chaises. « Les deux meilleures places, dit Madame Plomb. Je les ai payées avec mes indemnités. » Elle te tend une tasse de thé au citron. « Il nous reste une petite presse à bras, dans ma cave. Et j'ai gardé une épreuve. » Le spectacle commence. Vous ne le regardez pas. Vous composez.",
  ]),
  F_velin: fin("velin", "Une page déjà vendue", "atelier", [
    "Tu tends la vraie page à Monsieur Vélin. Il la lit debout, en entier, une fois. Il sourit d'un sourire de typographe, qui apprécie un bel ouvrage. « Elle compose très bien, dit-il. Elle a toujours très bien composé. C'est bien le problème. »",
    "Il prend la petite forme de plomb, descend à la fonderie, et la jette dans le creuset. La vraie page fond en quatre secondes, et redevient du plomb, qui ne dit rien. Il remonte, se lave les mains, et te tend son stylo.",
    "« On ne change pas une page déjà vendue, dit-il. Mais on peut changer de correcteur. » Il te nomme typographe, à la place de Madame Plomb, avec son tablier, sa casse et son pupitre. Tu signes. La Vieille tire.",
    "Le premier jour de l'hiver, les paravents se dressent, le Domaine se contemple, le Bas-Quartier regarde, et tu composes déjà le Catalogue de l'an prochain, au pupitre de Madame Plomb, avec sa tasse à côté de toi. Tu y bois du thé, sans citron. Le cassetin du W reste vide. Tu le laisses ainsi.",
  ]),
  F_refus: fin("refus", "Insolence typographique", "atelier", [
    "« Je ne signe pas », dis-tu. Tu gardes tes raisons pour toi, comme Madame Plomb gardait toujours les siennes.",
    "Monsieur Vélin te regarde avec l'étonnement d'un homme à qui son stylo aurait répondu. Puis il signe lui-même, à l'encre argentée, d'un grand paraphe, et te renvoie sur-le-champ, pour insolence typographique. La Vieille tire trois cent douze fois la page du Paravent.",
    "Le premier jour de l'hiver, tu descends au Bas-Quartier, puisque tu n'as plus rien à faire en haut. Les rues sont pleines de chaises, alignées face au Domaine, et de gens qui ont payé deux euros pour s'y asseoir. Sur quatre mètres de haut, derrière le chrome, une dame en chapeau se recoiffe en croyant être seule.",
    "Au premier rang, une vieille femme en tablier de cuir boit un thé au citron. Elle te fait signe, et te montre la chaise à côté d'elle. « Tu n'as pas signé, dit Madame Plomb. Je le savais. Je t'ai gardé une place. » Elle hésite entre rire et pleurer devant le spectacle. Toi aussi. Vous restez jusqu'à la fin.",
    { if: { item: "vraie_page" }, text: "Dans ta poche, sa petite forme de plomb, et sa vraie page, sans une coquille. Elle les voit dépasser. Elle sourit. « Garde-les. Les pages vraies, ça se réimprime. »" },
  ]),
};
