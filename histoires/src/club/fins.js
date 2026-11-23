// « Le Club ne se réunit pas » · the five endings: a seating left to chance, the name given, the note burned, the note
// carried to Léa on the tray, and a sunset with no answer.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  F_regards: fin("regards", "La réunion", "piscine", [
    "Tu ouvres la grille de la terrasse, et à seize heures, le Club des Inaccessibles se trouve là, par hasard, et chacun de ses membres se dirige vers le transat le plus éloigné de celui qu'il méprise le plus.",
    "Le malheur veut qu'ils méprisent tous Monsieur Orbe, qui est rond et qui le sait, et qui se dirige vers le milieu. Les quatre autres arrivent en même temps au transat de l'ouest. Ils s'y regardent. Ils se voient, de face, à trente centimètres, pour la première fois depuis la fondation du Club.",
    "Le silence qui suit dure une minute entière. La Baronne de Saindoux ouvre son éventail : *Non.* Monsieur Sorbier lève la main, et son hélicoptère démarre. Léa Valmont ôte ses lunettes, ce qui ne s'était jamais vu, et dit à voix haute, à personne : « Tiens. »",
    "Ce *Tiens* est une parole. Elle est adressée, faute d'autre destinataire, à tous. Monsieur Ferdinand, qui était monté exprès pour voir, l'inscrit au Registre comme la première réunion du Club des Inaccessibles en quarante ans. Elle sera aussi la dernière : le Club se dissout le soir même, par lettres recommandées que personne n'ouvre.",
    "On te garde, curieusement. Monsieur Ferdinand dit que tu as fait en une heure ce que la Maison essayait de faire depuis quarante ans : il ne dit pas quoi.",
  ]),
  F_expulsion: fin("expulsion", "Le transat numéro 2", "office", [
    "Monsieur Ferdinand prend le billet, le lit, le replie, et monte à la terrasse d'un pas égal, le pas d'un homme qui va annoncer un décès. Tu le suis à trois mètres, ton plateau à la main.",
    "Il se penche à l'oreille d'Hippolyte Croûte-Chrome, et dit quelque chose que personne n'entend. Le vieil homme se lève. Il ne pleure plus : c'est la première fois de l'après-midi, et c'est plus terrible que tout le reste. Il boutonne son smoking blanc, il s'incline très légèrement vers le canyon, et il s'en va par son escalier, sans se retourner, pour toujours.",
    "Personne ne le regarde partir. C'est le règlement. Au transat 1, Léa Valmont ne tourne pas la tête. Elle tire de sa petite boîte d'argent une pincée de sel, et elle la tient longtemps au-dessus de sa coupe, sans la laisser tomber.",
    "Le Club compte désormais quatre membres, et Monsieur Ferdinand note au Registre que la coïncidence de l'an prochain sera plus facile à placer. Il te fait monter en grade. Tu seras maître d'hôtel adjoint, avec un habit noir, des gants gris perle, et une montre que tu ne regarderas jamais, parce qu'il vaut mieux ne pas savoir l'heure qu'il est quand on fait ce métier-là.",
  ]),
  F_secret: fin("secret", "Ce que l'eau a mangé", "piscine", [
    "Tu approches le billet de la flamme d'une bougie de table, derrière la cabane, et l'écriture bleue se tord, noircit, s'en va en fumée vers le canyon avec les onze ans qu'elle contenait. Tu jettes les cendres par-dessus le débordement. Elles tombent six cents mètres, et personne ne les rattrape.",
    "À l'office, Monsieur Ferdinand reçoit ton rapport, *illisible, Monsieur*, avec une inclinaison de tête qui pourrait être un acquiescement ou une condoléance. Il inscrit au Registre : *Un papier mouillé. Origine inconnue. Pas de faute constatée.* Il souligne *constatée*, d'un trait si fin qu'on le voit à peine.",
    "Au coucher du soleil, les membres du Club repartent chacun par son escalier. Hippolyte Croûte-Chrome passe le dernier. Il s'arrête une seconde au bord de la piscine, regarde l'eau, à l'endroit où il a lâché son billet, et il la trouve vide. Il ne sait pas si elle l'a lu. Il ne le saura jamais. Il sourit, quand même, d'un sourire de vieux garçon qui a dit son secret au vent et que le vent a gardé.",
    "L'an prochain, il sera au transat 2. Elle sera au transat 1. Tu les placeras toi-même, sans consulter le Registre.",
  ]),
  F_reponse: fin("reponse", "Une pincée de sel", "piscine", [
    "Tu poses le billet, sec et plié, sur ton plateau d'argent, entre une coupe pleine et une serviette, et tu passes derrière le transat de l'ouest. Tu gardes le silence, les yeux sur le canyon. Tu t'arrêtes une demi-seconde de plus que nécessaire, ce qui, au Club, est un cri.",
    "Léa Valmont prend le billet sans tourner la tête, comme elle prendrait une coupe. Elle le lit derrière ses lunettes noires. Elle le lit deux fois. Puis elle ouvre sa petite boîte d'argent, en tire une pincée de sel, et la laisse tomber, non pas dans sa coupe, mais dans la coupe pleine qui reste sur ton plateau. Elle te fait signe, d'un doigt, vers l'est. Vers le transat 2.",
    "Tu portes la coupe salée à Hippolyte Croûte-Chrome. Il la prend. Il la boit. Il comprend à la première gorgée, et il se met à pleurer d'une façon entièrement nouvelle, que personne au Club n'avait jamais vue chez lui, et qui ressemble beaucoup à de la joie.",
    "Monsieur Ferdinand, en bas, attend toujours un nom, et n'en reçoit pas. Personne n'a parlé. Personne n'a écrit : le billet a été jeté à l'eau, puis repêché par le service, ce qui en fait un objet trouvé. Une pincée de sel n'est pas une parole. Le règlement le plus court du Domaine n'a rien prévu pour le sel.",
    "L'an prochain, la coïncidence onéreuse aura lieu à la même heure, au même endroit. Le transat 1 et le transat 2 seront un peu plus proches que les autres, d'une dizaine de centimètres. C'est toi qui les disposeras. Personne ne mesurera.",
  ]),
  F_coucher: fin("coucher", "Pas de faute constatée", "office", [
    "Monsieur Ferdinand t'attend à l'office, la montre à la main. Il voit ton visage, et il remet sa montre dans sa poche, sans l'avoir regardée. « Le soleil a touché le canyon, dit-il. Le billet n'a pas d'auteur. »",
    { if: { item: "billet" }, text: "Tu as encore, dans ta poche, un papier crème couvert de capitales bleues qui ne font aucun mot. Tu ne le sors pas. Il n'a rien à dire à personne, tant qu'on ne lui a pas trouvé sa clef." },
    "Il ouvre le Registre, et il écrit, de sa belle main ronde de secrétaire : *Un papier mouillé. Origine inconnue. Pas de faute constatée.* Il te regarde par-dessus le registre. « Vous apprendrez, dit-il, que la moitié de ce métier consiste à trouver, et l'autre moitié à ne pas avoir trouvé. Vous venez de faire la seconde. Je vous apprendrai la première l'an prochain. »",
    "Là-haut, les membres du Club repartent un par un, chacun par son escalier. Au transat 2, un vieil homme en smoking blanc s'attarde au bord de l'eau, regarde le fond, et repart en pleurant, comme tous les ans.",
  ]),
};
