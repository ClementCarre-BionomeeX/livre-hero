// L'Île Folle-Aiguille · side story « Le garçon du Haut-Verger » (owes its question to Paul and Virginia: can a child
// raised by an island live in the towns of men?). On the last morning, Muguet, a boy of the Doux, fourteen or so, who
// chews the bark like all of them and keeps only the present morning, comes down to the beach and asks the child to take
// him. He has asked it before, he says, he thinks, but he has forgotten the answer. The child tells him what towns are
// (zq:vrai), tells them beautiful (zq:beau), or gives him a way to keep one thing (zq:garde). Wired in A5o_debut, once the
// child has been to the Haut-Verger.
module.exports = {
  passages: {
    ZQ_sable: { act: "V", title: "Le garçon du Haut-Verger", place: "anse_morte", ambiance: "mer",
      fx: { meet: "muguet" },
      text: [
        "Il est descendu du Haut-Verger à l'aube, seul, ce que les Doux ne font jamais, et il s'est assis à côté de toi dans le sable mouillé, les genoux sous le menton, avec ce sourire égal qu'ils ont tous, doux, poli, un peu absent, comme un soleil derrière une vitre. Un garçon de quatorze ans peut-être, mince, doré, une fleur de frangipanier derrière l'oreille, une ceinture de lianes tressées, et des lèvres brunes de l'écorce qu'il mâche.",
        "Il s'appelle Muguet. Il te le dit deux fois, la deuxième avec un petit air d'excuse, parce qu'il ne se souvient plus de te l'avoir dit la première.",
        "« Je veux partir avec vous, dit-il. Sur le grand canot. Je crois que je te l'ai déjà demandé. Hier, ou avant. » Il fronce les sourcils, comme quelqu'un qui cherche un mot sur le bout de sa langue. « Je ne sais plus ce que tu as répondu. Je sais seulement que je l'ai demandé. Il me reste ça. Ça reste, quand on demande souvent. »",
        "Il regarde la mer. « Là-bas, les gens se souviennent ? Ils se souviennent de tout ? D'hier, et d'avant, et d'avant encore ? »",
      ],
      choices: [{ label: "Chercher quoi lui répondre", to: "ZQ_choix" }] },
    ZQ_choix: { act: "V", title: "Le garçon du Haut-Verger", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu penses à Morlenc, que tu as vue six semaines, en décembre, sous la pluie. Les quais, les mâts serrés comme une forêt sans feuilles, les cloches, les volets peints. Les mendiants sous les porches, les pendus à la Croix-des-Marées, les enfants qui dorment sous les étals, et les dames en manteau de velours qui les enjambent. Tout le monde, là-bas, se souvient. C'est même la seule chose que les gens font tous, les riches et les pauvres : ils se souviennent, des dettes, des injures, des morts, des prix d'avant.",
        "Tu penses aussi à ta mère. À la fièvre, il y a six ans. À ce que tu donnerais, certains soirs, pour une lanière d'écorce. À ce que tu ne donnerais pour rien au monde.",
        "Muguet attend. Il a les yeux clairs, très doux, dans lesquels il y a ce matin, la mer, toi, et rien d'autre. Il ignore ce qu'est une rue, ce qu'est une dette, et qu'il a eu une mère. Ce que tu vas lui dire, il l'aura peut-être oublié ce soir. Ou bien c'est la seule chose qui lui restera, parce qu'il l'aura demandée trop souvent.",
      ],
      choices: [
        { label: "« Oui. De tout. Du bon et du mauvais. Ça fait mal, souvent. »", fx: { flag: "zq:vrai" }, to: "ZQ_vrai" },
        { label: "« Oui. Des cloches, des fêtes, des gens qu'on aime. »", fx: { flag: "zq:beau" }, to: "ZQ_beau" },
        { label: "Lui mettre un galet dans la main, et lui dire de le garder", fx: { flag: "zq:garde" }, to: "ZQ_garde" },
      ] },
    ZQ_vrai: { act: "V", title: "Le garçon du Haut-Verger", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu lui dis. De tout. Qu'on garde tout, là-bas, le bon et le mauvais, mélangés, sans pouvoir choisir. Qu'on se souvient des gens qu'on a aimés et qui sont morts, et que ça fait mal, tous les jours, un peu moins chaque année, mais jamais plus du tout. Qu'on se souvient de ce qu'on a fait de mal. Que la nuit, quelquefois, on ne dort pas, à cause de ce qu'on se rappelle.",
        "Il écoute, avec une attention immense, comme on écoute une langue étrangère dont on reconnaît, par moments, un mot. Puis il dit, lentement : « Tous les jours ? Même quand on ne veut pas ? » Tu dis oui. Il réfléchit. Il ôte de sa bouche la chique d'écorce brune, et il la regarde, dans sa paume, longtemps.",
        "Il la garde dans sa main fermée, ni jetée ni remâchée, et il se lève, et il remonte vers le Haut-Verger, lentement, sans se retourner. Au bord des arbres, il s'arrête, et tu le vois ouvrir la main, et regarder encore. Puis il disparaît. Tu ne sauras jamais ce qu'il a choisi. Tu sais que, pour la première fois peut-être, il a eu à choisir.",
      ],
      choices: [{ label: "Regarder la mer encore un peu", fx: { quest: "ZQ" }, back: "A5o_debut" }] },
    ZQ_beau: { act: "V", title: "Le garçon du Haut-Verger", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu lui dis les cloches, d'abord. Toutes les cloches de Morlenc qui sonnent ensemble, le dimanche matin, et qu'on se rappelle toute sa vie, d'un dimanche à l'autre, si bien qu'on les entend même quand elles se taisent. Les fêtes de la Saint-Jean, les feux sur la grève, qu'on attend toute l'année parce qu'on se souvient de la dernière. Les gens qu'on aime, dont on garde la voix dans la tête, même loin, même morts.",
        "Il sourit. Son sourire change : il cesse d'être égal. Il devient le sourire d'un garçon de quatorze ans à qui l'on promet une fête. « On garde la voix ? dit-il. La voix des gens ? » Tu dis oui. Tu dis que tu as gardé celle de ta mère. Il te demande de la lui faire entendre. Tu essaies. Tu n'y arrives pas tout à fait, à voix haute. Il dit que ça ne fait rien, qu'il a compris.",
        "Il repart vers le Haut-Verger en courant, en sautant d'un pied sur l'autre. Tu sais ce que tu as fait : tu as choisi, comme on choisit les plus belles coquilles sur une grève, en laissant les cassées, les vides, les puantes. Tout ce que tu as dit est vrai. Il le découvrira un jour, si jamais il quitte l'île : les cloches sonnent aussi pour les pendus. Ce jour-là, tu espères qu'il aura oublié qui le lui a promis.",
      ],
      choices: [{ label: "Regarder la mer encore un peu", fx: { quest: "ZQ" }, back: "A5o_debut" }] },
    ZQ_garde: { act: "V", title: "Le garçon du Haut-Verger", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu ne réponds pas à sa question. Tu te penches, tu ramasses dans le sable mouillé un galet noir de l'île, lisse, rond, avec une veine blanche qui en fait le tour comme une ceinture, et tu le lui mets dans la main, et tu lui fermes les doigts dessus.",
        "« Garde-le, dis-tu. Toujours sur toi. Et chaque matin, quand tu le trouves dans ta ceinture et que tu ne sais plus pourquoi il est là, tu te dis : c'est quelqu'un de la mer qui me l'a donné, le jour où le rocher chantait. Rien d'autre. Juste ça. Une seule chose. »",
        "Il serre le galet. Il ferme les yeux. Il répète, à mi-voix, en articulant : *quelqu'un de la mer, le jour où le rocher chantait.* Il le répète trois fois. Puis il glisse le galet dans sa ceinture de lianes, et il tape dessus, deux fois, pour vérifier qu'il y est, et il te regarde avec une gravité nouvelle, qui lui va mal et qui lui va bien.",
        "« Demain, dit-il, je ne saurai plus ton nom. » Tu dis que ce n'est pas grave. « Mais je saurai qu'il y avait quelqu'un. » Il remonte vers le Haut-Verger, la main sur sa ceinture. Le rocher chante toujours, à l'ouest. Tu te dis que c'est peut-être tout ce qu'on peut faire, pour les gens, partout, sur l'île ou ailleurs : leur laisser un caillou, et une phrase pour s'en souvenir.",
      ],
      choices: [{ label: "Regarder la mer encore un peu", fx: { quest: "ZQ" }, back: "A5o_debut" }] },
  },
  extras: {
    people: {
      muguet: { name: "Muguet", aka: ["le garçon du Haut-Verger"], qui: "Un garçon des Doux, qui mâche l'écorce comme les autres et ne garde que le matin présent." },
    },
    quests: [
      { id: "ZQ", act: "V", kind: "annexe", title: "Le garçon du Haut-Verger", start: "ZQ_sable", doit: "pauletvirginie", echo: ["zq:vrai", "zq:beau", "zq:garde"] },
    ],
  },
};
