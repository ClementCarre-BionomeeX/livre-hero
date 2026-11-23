// « Le Catalogue de 1899 » · the five endings: sold as it is, the page read aloud, the page given to Madame Vernis,
// the sale suspended, and the page used to drive up the price.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  F_adjuge: fin("adjuge", "Adjugé", "salle", [
    "Tu signes le certificat : *complet et conforme*. Maître Gratin le lit, le tamponne, et ouvre la vente. Un million. Deux. Cinq. Monsieur Sorbier lève un doigt à chaque palier, sans lever la tête, comme on chasse une mouche. À douze millions, la salle se tait. Le marteau d'ivoire tombe. *Adjugé.*",
    "Le lendemain, le premier Catalogue de la Maison part dans un fourgon blindé, vers un coffre, dans une cave, sous une montagne. Personne ne le lira plus jamais. Monsieur Sorbier a obtenu exactement ce qu'il voulait : il possède désormais la seule chose de la Maison qui ait jamais servi, et elle ne sert plus.",
    { if: { item: "page4" }, text: "La dernière page, elle, est restée dans ta poche. Elle n'est plus reliée. Elle n'engage plus personne. Elle dit encore ce qu'elle dit, à qui la lit." },
    { if: { all: [{ has: "page:lue" }, { item: "page4" }] }, text: "Le dimanche suivant, tu prends le train pour Mirevaux, et tu la glisses sous la porte de la boulangerie sans farine, en face de la forge sans charbon. Tu ne sais pas ce qu'on en fera. Toi, tu as fini de la lire." },
    { if: { not: { item: "page4" } }, text: "Dans le dos de la reliure, sous une toile un peu trop épaisse, une page pliée en quatre s'en va sous la montagne avec le reste, sans que personne l'ait lue. Elle avait été cousue là pour durer. Elle durera." },
  ]),
  F_pain: fin("pain", "Le pain ordinaire", "salle", [
    "Tu montes sur l'estrade, à côté de Maître Gratin, et tu lis la dernière page à voix haute, lentement, comme on lit un testament : *Le pain ordinaire. Comestible. Un sou. Pour chaque objet inutile vendu par la Maison, cent pains ordinaires seront donnés au quartier, tant que la Maison vendra. Cette page fait partie de chaque vente.*",
    "Le silence est total. Douze rangées de riches se tournent, d'un même mouvement, vers Madame Vernis. Elle a refermé son stylo. Elle prend la page, la lit, la retourne, l'approche de la lampe, et elle dit, d'une voix parfaitement neutre, la phrase qu'elle a passé sa vie à écrire en petit : « Cette mention engage la Maison. »",
    "Maître Gratin ôte sa loupe. Il calcule à mi-voix, puis il s'arrête, parce que les nombres qu'il obtient ressemblent à des distances entre les étoiles. La Maison doit du pain au quartier depuis cent vingt-sept ans. Elle a vendu, pendant ce temps, à peu près tout.",
    "Le Domaine réagit comme il réagit toujours devant une chose qu'il ne comprend pas : il l'achète. Avant la fin de la soirée, le *Pain ordinaire, comestible, un sou* devient le produit le plus convoité de la Maison, le seul qu'on puisse manger, le seul qu'aucun riche n'ait jamais possédé. On se l'arrache à un million la pièce. Chaque vente oblige la Maison à cent pains de plus.",
    "Un mois plus tard, à Mirevaux, la boulangerie sans farine rallume son four, et la forge d'en face rallume le sien, pour forger les moules. Les deux cheminées fument l'une en face de l'autre, comme deux vieux époux qui se sont remis à se parler. Tu y vas un matin. Tu achètes une baguette. Elle coûte un sou. Elle rassit le soir même. C'est la plus belle chose que la Maison ait vendue.",
  ]),
  F_vernis: fin("vernis", "En petits caractères", "salle", [
    "Tu glisses le feuillet plié à Madame Vernis, discrètement, pendant que Maître Gratin règle son marteau. Elle le lit sans bouger, d'un seul regard, comme elle lit tout. Puis elle le plie, et le range dans son dossier, derrière les autres contrats.",
    "« Je cherche cette page depuis vingt ans, dit-elle à voix basse, sans te regarder. Ma grand-mère était déjà aux Mentions légales. Elle l'a coupée en 1931, d'un coup de ciseaux, pendant une crise. Elle me l'a dit sur son lit de mort, sans me dire où était l'autre moitié. » Elle rouvre son stylo d'or. « L'autre moitié était cousue dans le dos. Évidemment. Ernestine était forgeronne : elle doublait tout. »",
    "La vente a lieu. Monsieur Sorbier achète le Catalogue, sans sa dernière page, pour onze millions, et l'emporte sous sa montagne. Madame Vernis ne dit rien. Le lendemain, elle ne dit toujours rien.",
    "Mais la semaine suivante, sous chaque produit du nouveau Catalogue, une ligne nouvelle apparaît, en caractères de six points, au milieu des mentions légales, entre *non comestible* et *émotions vendues séparément* : *Cent pains ordinaires offerts au quartier. Comestibles.* Personne, au Domaine, ne lit les mentions légales. Au Bas-Quartier, le pain arrive le lundi, par camion, sans un mot d'explication. On le mange.",
  ]),
  F_suspendu: fin("suspendu", "Vente suspendue", "salle", [
    "Maître Gratin pose son marteau sur le coussin, de la manière la plus lente du monde, comme on couche un enfant. « La vente est suspendue, dit-il. Le lot n° 1 est incomplet. » Un murmure parcourt les douze rangées, le murmure le plus cher du Domaine : celui de gens riches qui découvrent qu'il existe une chose qu'ils ne pourront pas acheter ce soir.",
    "Monsieur Sorbier se lève, remet ses lunettes de soleil, qu'il n'avait pas ôtées, et s'en va sans un mot. Madame Vernis te regarde longuement, son stylo refermé. Tu ne sais pas si c'est de la colère ou du soulagement. Chez elle, c'est la même expression.",
    "Le Catalogue retourne aux archives, au sous-sol, où personne ne descend. On t'en confie la garde, puisque tu as l'air de savoir ce qu'il contient.",
    { if: { item: "page4" }, text: "Le soir, seul{e} au sous-sol, tu recouds la dernière page dans le dos de la reliure, au fil de lin, en trois points, d'une couture de boulangère. Là où elle était. Là où elle attendra le prochain lecteur." },
    { if: { not: { item: "page4" } }, text: "Le soir, seul{e} au sous-sol, tu poses la lampe de Wood sur l'onglet, et tu regardes longtemps cette bande de papier qui brille à peine, contre la couture, et la toile un peu trop épaisse en dessous. Tu as le temps. Le Catalogue ne bougera plus." },
  ]),
  F_sorbier: fin("sorbier", "Douze millions et cent pains", "salle", [
    "Tu sors le feuillet plié de ta poche, juste assez pour qu'on le voie, et tu le tiens contre ta poitrine, comme une carte qu'on refuse de montrer. Monsieur Sorbier ôte ses lunettes de soleil. C'est la première fois qu'on lui voit les yeux. Ils sont gris, petits, et très avides.",
    "« Le lot est complet, Maître, dis-tu. Avec sa dernière page. Inédite. Jamais lue. » Maître Gratin comprend instantanément, comme tous les commissaires-priseurs devant une chose que personne n'a vue : il relève la mise à prix de moitié.",
    "La vente monte jusqu'à vingt-quatre millions, ce qui ne s'était jamais vu pour un livre de quatre pages. Monsieur Sorbier l'emporte, avec la dernière page, qu'il ne lira pas, et le tout part sous sa montagne.",
    "La page, pourtant, faisait partie de la vente. Le lundi suivant, Madame Vernis, qui a tout lu par-dessus ton épaule, fait livrer cent pains ordinaires au Bas-Quartier, pour cette vente-là, et pour elle seule. Ils sont comestibles. Ils coûtent à la Maison un sou pièce. C'est, à ce jour, la plus petite somme qu'elle ait jamais déboursée, et la seule dont elle ait honte.",
  ]),
};
