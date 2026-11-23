// « Le Coffre du kilomètre 66 » · the dawn at six, and the six endings. Z_aube reads what the night left on the counter:
// the invoice of the Sorbier sale, a litre sold to the inspector, a pump that works, or nothing.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  Z_aube: { act: "I", title: "Six heures", place: "boutique",
    branch: [
      { if: { has: "coffre:facture" }, to: "F_facture" },
      { if: { has: "debit:achete" }, to: "F_plein" },
      { if: { has: "pompe:marche" }, to: "F_selle" },
      { to: "F_ensable" },
    ] },

  F_facture: fin("facture", "Facture n° 1", "boutique", [
    "Le camion de la Maison s'arrête devant la boutique à six heures précises, dans un nuage rose. C'est un fourgon blanc à l'ange doré, avec un hayon et deux livreurs en livrée qui descendent en même temps, comme les deux aiguilles d'une horloge à midi. Monsieur Débit ouvre son carnet à souches. « Article douze, dit-il. Je constate. »",
    "Mademoiselle Ghislaine pose la facture n° 1 sur le comptoir, devant lui, bien à plat, et la tourne d'un quart de tour pour qu'il puisse la lire sans se pencher. Elle a remis ses deux gants.",
    "Monsieur Débit lit. Il lit une deuxième fois, ce qui, chez un inspecteur, est un aveu. Il dit : « Le coffre a été ouvert. » Mademoiselle Ghislaine dit : « La combinaison était fournie à l'intérieur. » Il cherche une réponse, et la porte du coffre la lui donne, gravée en capitales : il l'a sous les yeux.",
    { if: { has: "telegramme:lu" }, text: "Tu poses à côté de la facture le ticket de caisse où tu as recopié son télégramme, déchiffré, de ta main. *Que personne n'ouvre le coffre : il contient la vente Sorbier. Le Kit sera revendu.* Monsieur Débit regarde le ticket. Il regarde le fauteuil où il a dormi. Il dit, sans colère, avec une sorte de respect professionnel : « Vous avez lu mon courrier. Avec mon nom. » Il referme son carnet. « Je constaterai la facture. Le reste, nous l'oublierons, vous et moi, la Maison comprise. C'est la forme la plus haute de l'accord commercial. »" },
    { if: { not: { has: "telegramme:lu" } }, text: "Monsieur Débit replie la facture avec soin, la lui rend, et note quelque chose dans son carnet, longuement, de sa petite écriture serrée. À en juger par sa bouche, c'est une chose qu'il écrit à contrecœur." },
    { if: { has: "debit:achete" }, text: "« Deux ventes, ajoute Mademoiselle Ghislaine en désignant la caisse dorée, où son ticket de cette nuit est encore piqué. Le Kit de Monsieur Sorbier, il y a onze ans, et votre litre d'essence, cette nuit. » Monsieur Débit ferme les yeux une seconde, comme un homme qui reçoit une deuxième facture le même jour." },
    "« L'article douze ne s'applique pas, dit-il enfin. La boutique du kilomètre 66 demeure. Le Kit demeure en dépôt, propriété du client. » Il fait signe aux deux livreurs, qui remontent dans le fourgon en même temps, comme ils en étaient descendus. « Bonne journée, Mademoiselle. Vous avez onze ans d'avance sur vos objectifs. »",
    { if: { has: "pompe:marche" }, text: "Tu repars à sept heures, sur une route lavée par le vent, le réservoir plein d'une essence qui sent la vanille. Dans ton rétroviseur, la boutique rapetisse, blanche et nette sur le sable rose." },
    { if: { not: { has: "pompe:marche" } }, text: "Avant ton départ, Mademoiselle Ghislaine te demande la clef dorée, ouvre la pompe, tourne les quatre vannes sans hésiter, comme si elle l'avait toujours su, et remplit ton réservoir. Tu repars à sept heures, sur une route lavée par le vent." },
    "Au moment où tu passes la borne du kilomètre 67, tu crois voir, derrière la vitre, une silhouette dorée qui décroche une carte postale du mur, et qui la lit. De près, cette fois.",
  ]),

  F_plein: fin("plein", "Un litre", "boutique", [
    "Le camion de la Maison s'arrête devant la boutique à six heures précises, dans un nuage rose, et deux livreurs en livrée en descendent en même temps. Monsieur Débit les arrête d'un geste du parapluie. « Le coffre reste, dit-il. Une vente a été constatée cette nuit. » Il le dit comme on annonce un décès dans la famille d'un collègue : avec la tristesse qu'il convient, et pas davantage.",
    "Il monte à l'arrière de sa limousine, qui a bu son litre d'Essence Privilège™. Anselme, le valet, s'installe au volant, pour la première fois du voyage, et il a l'air d'un homme qu'on vient de décorer. La limousine démarre. Elle avance. Toute seule. Anselme garde les mains sur le volant à dix heures dix, et des larmes dans les yeux.",
    "Mademoiselle Ghislaine regarde la limousine disparaître vers l'ouest. Puis elle retourne à son comptoir, où le ticket de la caisse dorée est toujours piqué sur sa pointe : *6 666 €. Essence Privilège™. Un litre.* Elle le laisse. Il y restera longtemps, peut-être toujours. Il y a des boutiques qui encadrent leur premier billet ; elle, elle gardera son premier ticket, et l'essuiera tous les matins.",
    "Le coffre, lui, reste fermé derrière elle, avec ses quatre molettes et sa promesse sur la porte. Il gardera son secret encore un peu. Il a l'habitude.",
    { if: { has: "pompe:marche" }, text: "Tu repars à sept heures, le réservoir plein, sur une route que le vent a lavée. Au kilomètre 67, tu jettes un œil dans le rétroviseur. La boutique est toujours là, blanche sur le sable rose, éclairée en plein jour, ouverte. C'est la première fois que tu vois une boutique de la Maison qui a l'air d'attendre quelqu'un." },
  ]),

  F_selle: fin("selle", "La selle arrière", "auvent", [
    "Le camion de la Maison s'arrête devant la boutique à six heures précises, et deux livreurs en livrée en descendent en même temps. Ils traversent la boutique sans un regard pour les vitrines, sanglent le coffre fermé sur un diable, et le roulent jusqu'au hayon. Monsieur Débit tamponne son carnet. Le bruit du tampon est le bruit le plus fort de la matinée.",
    "Mademoiselle Ghislaine éteint les lumières des vitrines, une par une, de gauche à droite. Le Pot d'Échappement Tartineur™ cesse de flotter. Le Beurre de Passage™ cesse de luire. Puis elle ôte ses gants de soie, les plie, les pose sur le comptoir, et elle sort, sans fermer la porte. Le carillon joue ses cinq notes derrière elle. La dernière est toujours fausse.",
    "Ta moto attend sous l'auvent, le réservoir plein d'Essence Privilège™. Tu tapotes la selle arrière. Elle te regarde, puis la selle, puis la route, avec l'air de quelqu'un à qui l'on propose un objet dont elle ne connaît pas le prix. « Combien ? » demande-t-elle. Tu dis : rien. Elle réfléchit. « C'est très cher », dit-elle, et elle monte.",
    "Vous partez vers l'ouest, vers Mirevaux, sur une route lavée par le vent. Elle se tient très droite, les mains sur tes épaules, le chignon platine défait au bout de trois kilomètres. Au kilomètre 70, tu l'entends rire, une fois, très bref, dans ton dos, sans savoir pourquoi. Tu ne te retournes pas. Il y a des choses qu'on ne regarde pas de près.",
    { if: { has: "telegramme:lu" }, text: "Dans ta poche, tu gardes le ticket du télégramme. *Le Kit sera revendu.* Quelque part au Domaine, un client paiera bientôt quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf euros pour un coffret qu'il ne verra jamais, et que quelqu'un d'autre a déjà payé. Tu racontes l'histoire à Mama Salée, le soir même. Elle sale son café, et ne dit rien pendant très longtemps." },
  ]),

  F_ensable: fin("ensable", "Deux qui ne vendent rien", "boutique", [
    "Le camion de la Maison s'arrête devant la boutique à six heures précises. Deux livreurs en livrée sanglent le coffre fermé sur un diable et le roulent jusqu'au hayon, avec ses quatre molettes, sa clef de pompe, et ce qu'il garde d'autre, que personne ne saura. Monsieur Débit tamponne son carnet. « Article douze, dit-il. Je constate. »",
    "Puis il monte dans le camion, entre deux cartons de gants de soie, et sa limousine reste sous l'auvent, sèche, contre la pompe fermée. Anselme le suit, ses escarpins à la main. Le camion repart vers l'est. Personne ne se retourne.",
    "Mademoiselle Ghislaine reste derrière son comptoir. La boutique est fermée, mais personne n'a pensé à la fermer à clef, ni à éteindre les vitrines, ni à lui dire de partir. Elle regarde la porte. Tu regardes ta moto, sèche, ensablée jusqu'aux moyeux.",
    "« Vous pourriez rester, dit-elle au bout d'un moment. Le camion de ravitaillement passera dans trois semaines. Il apporte des gants et de la cire. Il pourra vous emmener. » Elle réfléchit. « En attendant, il y a deux comptoirs. Je pourrais vous apprendre les prix. »",
    "Tu restes. Le soir, quand le vent se lève, vous vous tenez debout, chacun derrière son comptoir, dans une boutique fermée qui ne sait pas qu'elle l'est. Les motards de passage collent leur nez à la vitrine, lisent les prix, et repartent. Mademoiselle Ghislaine dit que c'est très beau. Au bout de trois semaines, tu commences à penser qu'elle a raison, et cela t'inquiète beaucoup.",
  ]),

  F_nuit: fin("nuit", "La route de nuit", "route", [
    "Tu pars dans la nuit, à la lueur de ton phare, sur une route que le vent efface à mesure. Derrière toi, la lumière blanche de la boutique rapetisse, carrée, immobile, jusqu'à n'être plus qu'un point, puis plus rien.",
    "Au matin, au kilomètre 112, tu t'arrêtes pour boire. Le vent est tombé. Le désert est rose et lisse. Il est six heures, et quelque part derrière toi, un camion blanc à l'ange doré s'arrête devant une boutique de marbre, et deux livreurs en descendent en même temps.",
    "Ce qui s'est passé à six heures restera derrière toi. Tu le devineras, en un sens, chaque fois que tu passeras au kilomètre 66, et que tu verras, ou que tu ne verras pas, une lumière blanche au bord de la route.",
    { if: { has: "coffre:facture" }, text: "Dans ta poche, il y a la facture n° 1. Tu l'as emportée sans y penser. Tu y penses maintenant, au kilomètre 112, longtemps." },
  ]),

  F_kit: fin("kit", "Sans facture", "route", [
    "Tu pars dans la nuit, le Kit Complet de Survie™ n° 1 sanglé sur ton porte-bagages, et la lumière blanche de la boutique rapetisse dans ton rétroviseur jusqu'à n'être plus rien.",
    "Au clan, on te fait fête. Le Kit passe de main en main autour du feu. On ouvre le compartiment *Le kilomètre*, on ouvre *La frontière*, on mange avec révérence la Tartine de Raid™ en modèle réduit, qui casse une dent au plus vieux frère du clan. Quand on arrive au compartiment *Le doute*, tout le monde se tait. Mama Salée le regarde longtemps, vide, et dit : « Celui-là, garde-le. Il est à toi. »",
    "Trois semaines plus tard, un avis paraît sur les bornes de la grande route, imprimé sur papier crème à liseré d'or : *Vol au kilomètre 66. Le Kit Complet de Survie™ n° 1, propriété de Monsieur Sorbier, a quitté la boutique sans facture. La boutique est fermée. La vendeuse a été rappelée au Domaine pour une enquête. Récompense : le droit de mépriser le voleur.*",
    "Tu relis l'avis plusieurs fois. *La vendeuse a été rappelée.* Tu revois une femme debout derrière un comptoir, qui regardait ailleurs, très précisément, vers le kilomètre 67. Elle ne t'a rien vendu. Tu lui as quand même coûté très cher.",
  ]),
};
