// L'Île Folle-Aiguille · act V, chapter V.3 followed by the child: the last morning on the beach, before looking at the
// anchorage. A5o_debut becomes a hub (backName « la plage »). Alone at the end of the beach, the child takes something
// of the island home, for the mother's grave (yw:sable) or for the father (yw:graine); a child of the Doux brings a
// wooden bird, and the child promises to come back (yw:promesse) or says that nobody does (yw:verite); for the writer
// of the hamlet, the men line up to dictate letters home (yw:lettres). Wired in A5o_debut.
module.exports = {
  passages: {
    YW_pointe: { act: "V", title: "Le bout de la plage", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu marches jusqu'au bout de la plage, là où le sable devient roche, et la roche, plus loin, falaise. Personne ne te suit. Derrière toi, le camp s'éveille, des voix, un feu qu'on ranime, un juron. Devant toi, la mer du matin, d'un vert de verre bouteille, si transparente sur les fonds qu'on voit les ombres des poissons passer sur le sable comme des nuages sur un champ.",
        "Tu t'assieds. Tu penses à ta mère. Ça te prend sans prévenir, comme toujours : une odeur, une lumière, et elle est là. Six ans. Tu avais dix ans ; elle avait la fièvre ; elle a duré quatre jours, et le quatrième, elle t'a demandé de lui chanter quelque chose, et tu n'as pas su quoi, et tu as chanté une chanson à boire du Fanal, la seule que tu savais par cœur, et elle a ri. C'est la dernière fois que tu l'as entendue rire. Tu as cru, longtemps, que c'était ta faute, la chanson. Tu sais maintenant que ce n'était pas la chanson.",
        "Elle n'a jamais vu la mer d'ici. Elle n'a jamais rien vu, que la Pointe, Varnèse, et Morlenc une fois, pour ses noces. Elle disait qu'elle irait aux îles quand tu serais grand{e}, pour voir si les oranges y poussent vraiment sur des arbres, ou si les marins mentaient encore.",
        "Tu as les mains vides. Tu veux rapporter quelque chose. Tu ne sais pas encore à qui.",
      ],
      choices: [
        { label: "Remplir ta tabatière de sable blanc, pour la tombe de ta mère, à Sainte-Anne", fx: { flag: "yw:sable" }, to: "YW_pointe_fin" },
        { label: "Garder les pépins de l'orange de ton déjeuner, pour le jardin de ton père", fx: { flag: "yw:graine" }, to: "YW_pointe_fin" },
      ] },
    YW_pointe_fin: { act: "V", title: "Le bout de la plage", place: "anse_morte", ambiance: "mer",
      text: [
        { if: { has: "yw:sable" }, text: "Tu as une vieille tabatière de corne, trouvée dans le coffre du Gabier, qui sent encore le tabac. Tu la vides, tu la rinces à la mer, et tu la remplis du sable de l'île, blanc, fin, mêlé d'éclats de coquillages roses. Tu la refermes. Elle pèse dans ta poche le poids d'une petite pierre. Tu le verseras au pied de la croix de Sainte-Anne, un jour de vent, et le vent fera le reste." },
        { if: { has: "yw:graine" }, text: "Tu fouilles tes poches. Il te reste une orange de l'île, à moitié mangée, que tu finis là, assis{e} sur la roche, en crachant les pépins dans ta main. Il y en a sept. Tu les roules dans un coin de ton mouchoir, et tu fais un nœud. Ton père a un jardin derrière le Fanal, où rien ne pousse que les choux et le vent. Il plantera ça. Ça ne poussera pas. Il le plantera quand même." },
        "Tu te relèves. Le rocher chante toujours, à l'ouest. On t'appelle, du camp.",
      ],
      choices: [{ label: "Revenir vers le camp", back: "A5o_debut" }] },
    YW_sureau: { act: "V", title: "L'oiseau de bois", place: "anse_morte", ambiance: "nature",
      fx: { meet: "sureau" },
      text: [
        "Il sort de la forêt au moment où tu remontes de la plage, et il t'attend au pied d'un cocotier, en se tenant sur un pied, l'autre posé sur le genou, comme les hérons. C'est un garçon du Haut-Verger, dix ans, peut-être, maigre, doré, avec des cheveux couleur de paille et une couronne de fleurs fanées de la veille. Les Doux l'appellent Sureau. Tu l'as vu danser, là-haut, et rire de tout, et oublier aussitôt de quoi il riait.",
        "Il te tend quelque chose, à deux mains, comme on tend une offrande. C'est un oiseau de bois, gros comme le poing, taillé au couteau dans un bois rouge, avec des ailes ouvertes et un bec de perroquet. Il est très mal fait. Tu vois qu'on a mis des jours à le faire.",
        "« Pour toi, dit-il. Pour que tu reviennes. Les gens du bateau, ceux d'avant, ils ne sont jamais revenus. Mère Aubépine dit que c'est parce qu'on ne leur avait rien donné. » Il te regarde avec ses yeux clairs, sans inquiétude, avec une confiance absolue. « Tu reviendras quand ? Demain ? »",
        "Derrière lui, la forêt. Devant toi, l'anse, le navire, six semaines de mer, Morlenc, la Pointe. Tu tiens l'oiseau de bois rouge dans ta main.",
      ],
      choices: [
        { label: "« Je reviendrai. Garde-moi une place à la danse. »", fx: { flag: "yw:promesse" }, to: "YW_sureau_fin" },
        { label: "« Je ne sais pas. Ceux qui partent ne reviennent presque jamais. »", fx: { flag: "yw:verite" }, to: "YW_sureau_fin" },
      ] },
    YW_sureau_fin: { act: "V", title: "L'oiseau de bois", place: "anse_morte", ambiance: "nature",
      text: [
        { if: { has: "yw:promesse" }, text: "Il rit, très content, d'un rire d'oiseau. « Demain, alors. » Il ne sait pas ce que c'est, six semaines de mer ; il ne sait pas non plus, tout à fait, ce que c'est qu'hier. Il repart vers la forêt en sautant d'un pied sur l'autre. Au bord des arbres, il se retourne, et crie : « Demain ! » Puis les arbres le prennent. Tu gardes l'oiseau dans ta main. Tu sais que tu as menti. Tu sais aussi que ce mensonge-là, tu passeras peut-être ta vie à essayer de le rendre vrai." },
        { if: { has: "yw:verite" }, text: "Il te regarde, la tête penchée. Il ne comprend pas. Puis il comprend, d'un coup, et ses yeux clairs se remplissent de larmes, et il pleure, sans bruit, debout sur un pied. Tu ne sais pas quoi faire. Au bout d'un moment, il essuie ses yeux avec sa couronne de fleurs, et il sourit de nouveau, comme si rien ne s'était passé. Il a déjà oublié, ou il fait semblant, à la façon des Doux. « Garde l'oiseau quand même, dit-il. Il ne sait pas ce que tu as dit. » Et il repart vers la forêt, sans se retourner." },
      ],
      choices: [{ label: "Revenir vers le camp, l'oiseau dans ta poche", back: "A5o_debut" }] },
    YW_lettres: { act: "V", title: "Les lettres", place: "anse_morte", ambiance: "mer",
      text: [
        "Ça commence par un seul, un matelot de la bordée de tribord, qui vient s'asseoir à côté de toi sur un tonneau, en tournant son bonnet dans ses mains, et qui te demande, à voix basse, si tu veux bien lui écrire un mot pour sa sœur, puisque tu es écrivain{e}, à ce qu'on dit, et qu'on rentre. Puis un deuxième se met derrière lui. Puis un troisième. À la fin, ils sont sept, en file sur le sable, comme devant un confessionnal, et tu as sur les genoux une planche, l'encrier du bord et le dernier cahier des vivres.",
        "Tu écris. C'est comme au hameau, sur la table du Fanal, avec les pêcheurs et les veuves : ils disent une chose, et tu entends l'autre, celle qu'ils ne disent pas. Un gabier dicte une lettre à sa mère sur la qualité des oranges, et tu entends qu'il a eu peur de mourir et qu'il voudrait qu'elle le sache sans qu'il le dise. Un matelot dicte à une fille de Lannoz une lettre si brève qu'elle tient en deux lignes, et tu entends qu'il ne sait pas si elle l'attend.",
        "Le dernier est le plus vieux. Il dicte une lettre à sa femme, à Morlenc, pour lui dire qu'il rentre, et qu'il a de l'argent, et que tout va bien. Puis il s'arrête, et ajoute, très bas, en regardant la mer : « Écris-lui aussi que je l'ai trompée, à Lannoz, l'an dernier. Non. N'écris pas ça. » Il se tait. « Écris ce que tu veux. Tu sais mieux que moi. »",
      ],
      choices: [
        { label: "Écrire seulement qu'il rentre, et qu'il pense à elle", fx: { flag: "yw:lettres" }, to: "YW_lettres_fin" },
        { label: "Écrire qu'il a quelque chose à lui dire, qu'il lui dira lui-même, en arrivant", fx: { flag: "yw:lettres" }, to: "YW_lettres_fin" },
      ] },
    YW_lettres_fin: { act: "V", title: "Les lettres", place: "anse_morte", ambiance: "mer",
      text: [
        "Il ne sait pas lire. Il prend la lettre, la plie, la met dans son bonnet, et te remercie avec une gravité de notaire. Les sept lettres partiront avec le navire. Elles arriveront avant ceux qui les ont dictées, peut-être, ou bien en même temps, ou bien jamais ; c'est le sort des lettres de marins.",
        "Tu fermes l'encrier. Tu as mal au poignet. Tu as l'impression, absurde, d'avoir sauvé quelque chose, sans savoir quoi.",
      ],
      choices: [{ label: "Revenir au feu, l'encrier sous le bras", back: "A5o_debut" }] },
  },
  extras: {
    people: {
      sureau: { name: "Sureau", aka: ["le petit Doux", "l'enfant du Haut-Verger"],
        qui: "Un garçon du Haut-Verger, dix ans, qui danse, rit de tout et taille un oiseau de bois pour qu'on revienne." },
    },
  },
};
