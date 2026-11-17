// L'Île Folle-Aiguille · side story « La lettre de Madame de Pérignac » (owes its question to The Purloined Letter: where
// does one hide what everybody is looking for?). Madame de Pérignac calls the doctor for her « vapeurs », and confesses:
// the échevin Saint-Brice holds a letter she wrote to her sister, which says the Pérignac sugar house is bankrupt, and
// buys her husband's vote with it. Saint-Brice's servants have searched nothing, the police nothing; the doctor, called
// for his gout, sees it at once, crumpled and turned inside out, in the card rack on the mantelpiece. She burns it there
// (ys:brulee), gives it back to the lady (ys:rendue), or keeps it in her bag (ys:gardee). Wired in A2v_jours.
module.exports = {
  passages: {
    YS_vapeurs: { act: "II", title: "Les vapeurs", place: "haute_ville", ambiance: "ville",
      text: [
        "Madame de Pérignac reçoit Victorine dans un boudoir tendu de satin jaune paille, où tout est jaune, les rideaux, les coussins, le chien, et jusqu'au teint de la dame, qui est couchée sur une méridienne avec un flacon de sels dans une main et un mouchoir dans l'autre, dans la pose exacte qu'on voit aux gravures de mode intitulées *La Migraine*.",
        "Elle a des vapeurs, dit-elle. Victorine prend le pouls, regarde la langue, écoute le cœur. Le pouls est celui d'une femme qui a peur ; la langue, celle d'une femme qui ne dort plus ; le cœur bat vite et bien. Il n'y a pas de vapeurs. Il y a autre chose, et Victorine attend, en rangeant sa montre à secondes avec une lenteur exagérée, que l'autre chose sorte.",
        "Elle sort au moment où Victorine boucle sa trousse. « Docteur. Vous êtes médecin. Vous êtes tenue au secret. » Madame de Pérignac se redresse sur sa méridienne, et laisse tomber les sels. « Et vous êtes la seule personne de Morlenc qui n'ait aucun intérêt dans cette ville. Je l'ai vu au dîner du baron. Vous les regardiez tous comme on regarde des malades. »",
        "Alors elle raconte. Une lettre, à sa sœur, à Lannoz, il y a trois mois. Une lettre de femme qui pleure : la raffinerie de Pérignac est en faillite depuis un an, on vit à crédit, elle a mis en gage les diamants de sa belle-mère et les a fait copier en strass, et elle les porte à tous les dîners. La lettre n'est jamais arrivée à Lannoz. Elle est arrivée chez Monsieur de Saint-Brice.",
        "« Il me l'a montrée, chez moi, dans ce boudoir. Un coin seulement, pour que je reconnaisse mon écriture. Depuis, mon mari vote comme Saint-Brice le veut, au Conseil, sans savoir pourquoi, parce que je le lui demande en pleurant. » Elle tord son mouchoir. « Mon mari a fait fouiller sa maison deux fois, par des gens à lui, la nuit, sous prétexte de cambriolage. Ils ont démonté les meubles, sondé les murs, décousu les coussins. Rien. Il ne la porte pas sur lui ; on l'a fait détrousser une fois, au sortir de l'Opéra, pour s'en assurer. Rien. » Elle lève vers Victorine des yeux mouillés, avec une sorte d'espoir déraisonnable. « Il a la goutte, docteur. Son médecin est mort à la Saint-Martin. Il en cherche un. »",
      ],
      choices: [{ label: "Accepter la goutte de Monsieur de Saint-Brice", to: "YS_goutte" }] },
    YS_goutte: { act: "II", title: "La goutte", place: "haute_ville", ambiance: "ville",
      text: [
        "Monsieur de Saint-Brice reçoit Victorine dans son cabinet de travail, le pied droit posé sur un tabouret, enveloppé de flanelle comme un nouveau-né, avec la figure résignée d'un homme qui a beaucoup mangé et qui le paie en détail. Il a soixante ans, un ventre de chanoine, et de petits yeux noirs, très vifs, qui ne s'arrêtent sur rien et voient tout.",
        "« On m'a parlé de vous, docteur, dit-il. Une femme médecin. Les Varembert disent que c'est une monstruosité. Ils disent la même chose des ballons à air chaud. » Il sourit. « Moi, j'aime les monstruosités. Elles sont rares, et on en apprend toujours quelque chose. »",
        "Victorine déroule la flanelle. L'orteil est rouge, gonflé, luisant. Elle prescrit le colchique, le régime, l'eau de source, l'abstinence de vin de la Côte, qu'il accueille comme une condamnation à mort. Pendant ce temps, elle regarde le cabinet, sans en avoir l'air. Elle sait ce que les hommes de Pérignac ont fouillé : les tiroirs, les livres, les pieds des chaises, les doublures, les lattes du parquet. Ils ont cherché une chose cachée.",
        "Sur la cheminée, entre deux chandeliers et une pendule en bronze doré qui représente Diane chassant, il y a un porte-cartes en carton bouilli, de quatre sous, crasseux, de ceux qu'on trouve chez les marchands de journaux, bourré de cartes de visite, d'invitations, de factures. Au milieu, déchirée à moitié, chiffonnée, salie de doigts, une lettre pliée à l'envers, l'adresse en dedans, qu'on a l'air d'avoir oubliée là depuis des mois. Du coin, sous la crasse, dépasse une écriture fine, penchée, très féminine, à l'encre violette.",
        "Victorine finit de rouler la flanelle. Monsieur de Saint-Brice la regarde faire, avec ses petits yeux noirs. Il n'a pas regardé la cheminée une seule fois. C'est la seule chose de la pièce qu'il n'ait pas regardée.",
      ],
      choices: [{ label: "Lui demander un verre d'eau, pour la fièvre", to: "YS_verre" }] },
    YS_verre: { act: "II", title: "La goutte", place: "haute_ville", ambiance: "ville",
      text: [
        "Il sonne. Personne ne vient. Il jure, avec une élégance de magistrat, se lève en geignant sur son pied de flanelle, et passe dans l'antichambre en clopinant, pour secouer lui-même un valet endormi. Il y a dix pas jusqu'à la porte, dix pas pour revenir, et un valet à réveiller. Victorine a peut-être une minute.",
        "Elle prend la lettre dans le porte-cartes. C'est bien elle : *Ma chère Clotilde*, l'encre violette, les larmes qui ont fait des fleurs sur le papier, la raffinerie, le strass. Une femme qui pleure, écrite à plat, pour qu'un homme s'en serve.",
        "Dans la cheminée, un feu de bois bas. Dans sa trousse, une poche intérieure, sous les lancettes. Et dans l'antichambre, la voix de Saint-Brice qui gronde le valet, et qui va revenir.",
      ],
      choices: [
        { label: "La jeter au feu, ici même, et la regarder brûler", fx: { flag: "ys:brulee" }, to: "YS_brulee" },
        { label: "La glisser dans ta trousse, pour la rendre à Madame de Pérignac", fx: { flag: "ys:rendue" }, to: "YS_rendue" },
        { label: "La glisser dans ta trousse, et la garder pour toi", fx: { flag: "ys:gardee" }, to: "YS_gardee" },
      ] },
    YS_brulee: { act: "II", title: "La lettre", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle la jette sur les bûches. Le papier se tord, noircit sur les bords, et l'encre violette prend feu la première, avec une petite flamme bleue, comme une lampe à esprit-de-vin. Quand Saint-Brice rentre avec le valet et le verre d'eau, il ne reste dans l'âtre qu'une feuille de cendre, légère, qui garde encore la forme des lignes, et que le courant d'air de la porte fait s'envoler en flocons noirs dans la cheminée.",
        "Il voit le porte-cartes. Il voit l'âtre. Il comprend tout, en une seconde, et Victorine le voit comprendre. Puis il s'assied, remet son pied sur le tabouret, et lui tend le verre d'eau avec un sourire d'une politesse parfaite.",
        "« Vous avez soif, docteur ? Buvez. » Il la regarde boire. « Je vous paierai votre visite le double. Vous êtes un excellent médecin, et je ne veux pas d'autre ennemi que ceux que j'ai déjà. » Il prend une prise. « Madame de Pérignac a de la chance. Monsieur de Pérignac votera ce qu'il voudra, désormais. C'est-à-dire n'importe quoi. Je regretterai mes certitudes. »",
      ],
      choices: [{ label: "Rentrer au Cormoran", back: "A2v_jours" }] },
    YS_rendue: { act: "II", title: "La lettre", place: "haute_ville", ambiance: "ville",
      text: [
        "La lettre est dans la trousse, sous les lancettes, quand Saint-Brice rentre avec le verre d'eau. Il le lui tend. Il ne regarde pas la cheminée. Il ne la regardera pas avant le soir, peut-être pas avant le lendemain ; il est de ces hommes qui ne regardent jamais ce qu'ils savent être à sa place.",
        "Le soir même, Victorine monte au boudoir jaune. Madame de Pérignac prend la lettre à deux mains, la reconnaît, la serre contre elle, et éclate en sanglots, si longtemps que le chien jaune se met à hurler. Puis elle sonne, fait apporter un coffret de maroquin, et le tend à Victorine.",
        "« Les vrais, dit-elle. Il en reste un. J'avais gardé celui-là. » C'est une broche, une seule pierre, petite, très claire. « Pour vos dettes, docteur. On m'a dit que vous en aviez. Tout Morlenc le sait. » Victorine la regarde. Elle pense à la banque Clavières, à trois mille quatre cents livres, à une petite pierre très claire. Elle referme le coffret et le rend. « Gardez-la pour le jour où la raffinerie ne se relèvera pas, madame. Ce jour-là, vous en aurez plus besoin que moi. »",
        "Madame de Pérignac la regarde partir avec une stupeur absolue. Personne, à Morlenc, n'a jamais refusé un diamant.",
      ],
      choices: [{ label: "Rentrer au Cormoran", back: "A2v_jours" }] },
    YS_gardee: { act: "II", title: "La lettre", place: "haute_ville", ambiance: "ville",
      text: [
        "La lettre est dans la trousse, sous les lancettes, quand Saint-Brice rentre avec le verre d'eau. Il le lui tend. Elle boit. Elle lui souhaite une bonne guérison, et s'en va.",
        "Dans la rue, elle s'arrête sous un réverbère, et sent le poids de la lettre à travers le cuir, contre sa hanche. Une feuille. Ça ne pèse rien. Pourtant, ce soir, elle tient le vote d'un échevin, la fortune d'une famille, et l'honneur d'une femme qui pleure sur une méridienne jaune. Elle n'a jamais rien tenu de pareil. Hector, lui, aurait su quoi en faire tout de suite ; c'était son seul talent.",
        "Elle ne monte pas au boudoir jaune. Elle rentre au Cormoran, et range la lettre au fond de sa malle, sous les robes grises. Elle se dit qu'elle la rendra demain. Elle se dit qu'on ne sait jamais, quand on part avec un baron pour une île dont personne ne veut dire le nom, de quoi on aura besoin au retour.",
        "Le lendemain, Monsieur de Saint-Brice fait savoir, par un billet très courtois, qu'il a trouvé un autre médecin.",
      ],
      choices: [{ label: "Rentrer au Cormoran", back: "A2v_jours" }] },
  },
  extras: {
    quests: [
      { id: "YS", act: "II", kind: "annexe", title: "La lettre de Madame de Pérignac", start: "YS_vapeurs", doit: "lettrevolee", echo: ["ys:brulee", "ys:rendue", "ys:gardee"] },
    ],
  },
};
