// L'Île Folle-Aiguille · side story « La dame du grenier » (owes its question to Jane Eyre: who decides that a wife is
// mad, and what is she owed once it is decided?). At Lannoz, Monsieur de Kerangal, lord of the only manor, asks the
// doctor of the ship for a certificate: his wife, Gwenola, kept in the attic for four years, must be sent to the asylum
// of Morlenc, so that the marriage may be annulled. Victorine climbs to the attic. She finds a woman who is ill, and
// fed laudanum. She signs (zn:signe), refuses and tells him why to his face (zn:refuse), or signs a certificate that
// says the truth and gives it to the rector, who has the parish behind him (zn:recteur). Wired in A3x_lannoz.
module.exports = {
  passages: {
    ZN_manoir: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "chateau",
      fx: { meet: ["kerangal", "gwenola"] },
      text: [
        "Le manoir de Kerangal est la seule maison de Lannoz qui ait un étage et une girouette. Il se tient au fond d'une vallée humide, au milieu de hêtres noirs, avec une tour carrée, un colombier vide et des fenêtres étroites où l'on a remplacé les vitres cassées par du papier huilé. On entre par une cour pavée où l'herbe pousse entre les pavés, et où un chien attaché, maigre, regarde passer les visiteurs sans aboyer, comme s'il avait perdu l'habitude d'en voir.",
        "Monsieur de Kerangal reçoit Victorine dans une bibliothèque où il n'y a plus de livres, rien que les rayons. C'est un homme de cinquante ans, beau encore, l'air las et courtois, en habit démodé de bonne coupe, avec cette politesse un peu trop soignée des hommes qui vivent seuls depuis longtemps. Il lui offre un verre de vin d'Espagne, s'excuse de l'état de la maison, parle du temps, de la tourbe, du recteur qui fait du miel.",
        "Puis il en vient au fait, avec une simplicité désarmante. Sa femme est folle. Depuis quatre ans. Elle vit au grenier, sous la garde d'une servante. Il a fait ce qu'il fallait, il a fait venir des médecins, il a prié. Il voudrait, aujourd'hui, qu'elle soit soignée par des gens dont c'est le métier, à l'asile de Morlenc. Pour cela il faut un certificat, signé d'un médecin. Le seul médecin de Lannoz est mort l'an dernier.",
        "« Il y a aussi, dit-il en baissant les yeux, une demoiselle de Varnèse, que je voudrais épouser. L'Église annule un mariage pour cause de folie, si la folie est prouvée. Je ne vous le cache pas. Je ne veux rien vous cacher, docteur. » Il pose sur la table une plume, un encrier, et une bourse. « Montez la voir. Vous jugerez. »",
      ],
      choices: [{ label: "Monter au grenier", to: "ZN_grenier" }] },
    ZN_grenier: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "chateau",
      text: [
        "Le grenier occupe tout le haut de la maison, sous une charpente de chêne énorme, noire, qui ressemble à la carcasse renversée d'un navire. Il y fait sombre ; une seule lucarne, grillagée. Au fond, derrière une cloison de planches, une chambre : un lit, une chaise, une table, un pot de chambre, un crucifix, et, sur la table, des dizaines de petits bateaux de papier, pliés avec un soin extraordinaire, rangés en flotte.",
        "Gwenola de Kerangal est assise sur la chaise, devant la lucarne. Elle a trente-cinq ans peut-être, des cheveux noirs défaits, une robe de chambre propre, un visage gonflé, cireux, et des yeux aux pupilles minuscules, deux têtes d'épingle. Elle tourne la tête vers Victorine avec une lenteur d'eau. Elle sourit. Elle dit, d'une voix pâteuse, qu'elle attendait le navire.",
        "La servante, une vieille aux lèvres minces, reste sur le seuil. Victorine la fait sortir. Elle examine Gwenola. Le pouls est lent. La peau est moite. La langue est chargée. Sous la table, dans un panier, des fioles vides, une douzaine, toutes pareilles, avec l'étiquette d'un apothicaire de Varnèse : *Laudanum de Sydenham. Vingt gouttes au coucher.* À la quantité de fioles, ce n'est pas vingt gouttes. C'est la fiole entière, chaque jour.",
        "Pendant une heure, à mesure que Victorine lui parle, quelque chose remonte, par moments, à la surface de ces yeux noyés. Gwenola dit qu'elle a perdu deux enfants, l'un après l'autre, la cinquième et la sixième année. Qu'après le deuxième elle ne sortait plus de son lit. Qu'elle pleurait. Qu'elle a crié, une fois, à table, devant des invités. Qu'on l'a montée ici le lendemain. Qu'on lui donne ses gouttes pour qu'elle dorme, parce que quand elle ne dort pas elle pleure, et que ses pleurs s'entendent dans toute la maison.",
        "Elle prend un bateau de papier et le tend à Victorine. « Pour le grand navire, dit-elle. Vous le mettrez à l'eau. Moi je ne peux pas descendre. »",
      ],
      choices: [{ label: "Descendre retrouver Monsieur de Kerangal, à la bibliothèque", to: "ZN_choix" }] },
    ZN_choix: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "chateau",
      text: [
        "Victorine connaît cette maladie. Elle l'a vue à Varnèse, chez des paysannes qui avaient enterré trop d'enfants, chez une meunière qui avait passé un hiver au lit sans parler, les yeux ouverts, et qui s'était relevée au printemps pour faire son pain comme si rien n'était. Elle sait qu'on en guérit, souvent, lentement. Elle sait aussi que quatre ans de laudanum à pleine fiole fabriquent, chez n'importe qui, exactement la femme qui l'attend là-haut, avec ses bateaux de papier.",
        "L'asile de Morlenc, elle le connaît aussi. Elle y a fait ses visites, étudiante, sous son nom d'homme. Des salles basses, de la paille, des chaînes pour les agitées, des douches froides pour les tristes. On n'en sort guère. On y meurt en trois ou quatre ans, de la poitrine.",
        "Monsieur de Kerangal attend, debout, devant la cheminée froide. La plume est sur la table. La bourse aussi. Il la regarde entrer et lit sur son visage qu'elle a compris, et une lassitude immense lui passe sur les traits. « Je sais ce que vous pensez, docteur. Vous n'avez pas vécu ici, ces quatre ans. Vous n'avez pas entendu les cris. Moi, si. Je suis un homme. Je ne suis pas un saint. »",
      ],
      choices: [
        { label: "Signer le certificat, et partir sans toucher à la bourse", fx: { flag: "zn:signe" }, to: "ZN_signe" },
        { label: "Refuser, et lui dire en face ce qu'il a fait de sa femme", fx: { flag: "zn:refuse" }, to: "ZN_refuse" },
        { label: "Écrire un certificat qui dit la vérité, et le porter au recteur", fx: { flag: "zn:recteur" }, to: "ZN_recteur" },
      ] },
    ZN_signe: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "chateau",
      text: [
        "Elle s'assied. Elle écrit. *Je soussignée, médecin, certifie avoir examiné ce jour…* Elle écrit les mots qu'il faut, ceux qu'on lui a appris, *mélancolie profonde, accès d'agitation, incapacité à se conduire*, et chacun est vrai, d'une certaine façon, et le tout est faux. Elle signe de son nom. Elle se rend compte, en signant, que c'est la première fois qu'elle signe un certificat de son propre nom, et que celui-là, la Faculté l'acceptera, parce qu'il arrange un homme.",
        "Monsieur de Kerangal le prend, le lit, le plie, la remercie avec une émotion vraie. Il lui pousse la bourse. Elle la laisse sur la table. Il ne comprend pas. Il insiste. Elle sort.",
        "Dans la cour, le chien maigre la regarde passer. Elle a, dans sa poche, un petit bateau de papier, qu'elle a pris sans réfléchir, là-haut, et qu'elle découvre en cherchant son mouchoir. Le soir, de la Cormorane, elle le pose sur l'eau de l'anse. Il flotte un moment, très droit, puis l'eau le gagne, et il s'enfonce, lentement, comme tous les bateaux.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "ZN" }, back: "A3x_lannoz" }] },
    ZN_refuse: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "chateau",
      text: [
        "Elle le lui dit. Tout. Les enfants morts, la tristesse, la honte d'un mari devant des invités, le grenier, les gouttes, la fiole entière tous les jours, achetée à Varnèse, pendant quatre ans, par qui ? Elle dit que sa femme n'est pas folle, qu'elle est empoisonnée, lentement, poliment, par un homme qui voulait seulement qu'elle se taise. Elle le dit avec une précision clinique, sans élever la voix, et elle voit le beau visage las se défaire.",
        "Il ne nie rien. Il s'assied, très lentement, dans le fauteuil devant la cheminée froide, et il regarde la cheminée. Au bout d'un long moment, il dit, d'une voix blanche : « C'est l'apothicaire qui m'a conseillé les gouttes. La première année. Pour qu'elle dorme. Après… après, c'était plus simple. Elle était calme. Moi aussi. » Il lève les yeux. « Qu'est-ce que je fais, maintenant ? »",
        "Victorine lui dit ce qu'il fait. On diminue les gouttes, cinq de moins chaque semaine, pas davantage, sinon elle se tord dans son lit en hurlant. On ouvre la lucarne. On la fait descendre au jardin, au soleil, chaque jour, même si elle pleure, surtout si elle pleure. On renvoie la vieille aux lèvres minces. Et on écrit à la demoiselle de Varnèse.",
        "Elle repart sans savoir s'il le fera. Elle sait seulement qu'il l'a écoutée jusqu'au bout, et qu'à la fin il ne lui a pas offert la bourse.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "ZN" }, back: "A3x_lannoz" }] },
    ZN_recteur: { act: "III", title: "La dame du grenier", place: "lannoz", ambiance: "nature",
      text: [
        "Elle écrit, devant Monsieur de Kerangal, qui la regarde faire sans comprendre. *Je soussignée, médecin, certifie avoir examiné ce jour Madame Gwenola de Kerangal, et l'avoir trouvée atteinte d'une mélancolie consécutive à deux deuils, guérissable, aggravée par l'usage prolongé et excessif du laudanum, dont la cessation progressive est nécessaire. Je certifie qu'elle n'est pas folle.* Elle signe. Elle plie. Elle garde le papier.",
        "Le recteur de Lannoz la reçoit au milieu de ses ruches, un voile de tulle sur la tête, un enfumoir à la main. Il lit le certificat sous le voile. Il le relit. Il ôte le voile. Il a soixante-dix ans, une figure de pomme ridée, et des yeux qui viennent de se durcir comme deux cailloux. « Quatre ans, dit-il. Je l'ai crue folle, moi aussi. Il me l'a dit. Je ne suis jamais monté. » Il plie le certificat dans son bréviaire. « Je monterai. Demain. Après la messe. Avec la moitié de la paroisse, s'il le faut, et les deux bedeaux. »",
        "Il lui serre la main, de sa main poisseuse de miel. « Vous savez ce que vous avez fait, docteur ? Vous avez remis cette femme dans les mains d'une paroisse. C'est lourd, une paroisse. Ça surveille. Ça cancane. Ça ne lâche jamais. » Il sourit, d'un sourire dur. « Lui non plus ne la lâchera plus. Mais il devra la descendre à la messe, chaque dimanche, et tout le monde regardera ses yeux. »",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "ZN" }, back: "A3x_lannoz" }] },
  },
  extras: {
    people: {
      kerangal: { name: "Monsieur de Kerangal", aka: ["le seigneur du manoir"], qui: "Seigneur du seul manoir de Lannoz, au fond d'une vallée de hêtres." },
      gwenola: { name: "Gwenola de Kerangal", aka: ["la dame du grenier"], f: true, qui: "La femme de Monsieur de Kerangal, gardée au grenier depuis quatre ans." },
    },
    quests: [
      { id: "ZN", act: "III", kind: "annexe", title: "La dame du grenier", start: "ZN_manoir", doit: "janeeyre", echo: ["zn:signe", "zn:refuse", "zn:recteur"] },
    ],
  },
};
