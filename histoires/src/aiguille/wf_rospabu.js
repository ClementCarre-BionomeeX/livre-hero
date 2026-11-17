// L'Île Folle-Aiguille · side story « Les bûches comptées » (owes its question to Eugénie Grandet: what does a miser's
// house make of the love that lives in it, and who pays for it?). Act I, the same night: maître Rospabu, the richest
// farmer of the Varnèse moor, counts the logs; his wife is dying of a pleurisy in a cold room; the bark that would save
// her costs a gold piece. His daughter Agathe, twenty-eight, unmarried, slips Victorine the purse her father has given
// her one coin at a time on every birthday since she was born. Victorine takes the girl's gold (wf:or), faces the
// father before the rector (wf:pere), or pays for the bark herself, with the money she owes Hector's creditors
// (wf:offre). Wired in A1v_soir.
module.exports = {
  passages: {
    WF_appel: { act: "I", title: "Les bûches comptées", place: "varnese_maison", ambiance: "nuit",
      fx: { meet: "agathe" },
      text: [
        "On gratte à la porte du cabinet. C'est un valet de ferme, un garçon maigre, trempé, qui tient son bonnet à deux mains et n'ose pas entrer, de peur de mouiller le carrelage. Il vient de chez maître Rospabu, à la Grande-Lande. C'est la maîtresse. Elle tousse, elle a la fièvre, elle a mal au côté, elle ne mange plus. Il a couru une lieue. C'est la demoiselle qui l'envoie. Il ajoute, en baissant la voix, que le maître ne le sait pas.",
        "Victorine connaît maître Rospabu. Tout le pays le connaît. C'est l'homme le plus riche de la lande, et il en a l'air d'un pauvre : une veste de droguet qu'il porte depuis la naissance de sa fille, des sabots qu'il ressemelle lui-même, une voix basse, douce, qui bégaie un peu quand il parle d'argent, ce qui lui arrive chaque fois qu'il parle. On dit qu'il a des terres jusqu'à la mer, des créances sur la moitié des fermes de Varnèse, et des tonneaux d'or dans sa cave. On dit aussi qu'il compte les bûches, le soir, avant de se coucher, et qu'il connaît le nombre exact de grains de sel dans le saloir.",
        "Elle prend sa sacoche. Monsieur Prosper, sur son crochet, la regarde partir avec l'air entendu d'un squelette qui en a vu d'autres.",
      ],
      choices: [{ label: "Courir à la Grande-Lande", to: "WF_chambre" }] },
    WF_chambre: { act: "I", title: "Les bûches comptées", place: "hameau", ambiance: "nuit",
      text: [
        "La maison est grande, belle, solide, en granit gris, avec des fenêtres étroites comme des meurtrières, et il y fait plus froid que dehors. Le froid y est chez lui. Il habite les murs, il dort dans les lits, il s'assied à table. Dans la chambre de la malade, la cheminée est éteinte, et le bois est rangé à côté, en pile carrée, parfaite, avec une marque à la craie sur la bûche du dessus.",
        "Madame Rospabu est une petite femme grise, si mince sous ses couvertures qu'on la cherche des yeux. Elle respire vite, court, en grimaçant à chaque inspiration. Victorine l'ausculte, l'oreille contre son dos : à droite, en bas, le bruit de la soie froissée, et plus bas encore, un silence mat, plein d'eau. Une pleurésie. Pas encore perdue. Il faudrait du feu, nuit et jour, et du bouillon gras, et surtout de l'écorce des fièvres, la poudre rouge des forêts du Couchant, qui coupe la fièvre et qui coûte, chez l'apothicaire de Varnèse, une pièce d'or l'once.",
        "Maître Rospabu est debout au pied du lit. Il écoute, les mains jointes. Il dit, doucement, en bégayant à peine, que le feu, la nuit, c'est beaucoup de bois, que le bois c'est de l'argent, que l'argent c'est la sueur de toute une vie, et qu'une femme de son âge, Dieu le sait, a vécu sa part. Il dit que l'écorce, il en a entendu parler, que c'est une drogue de charlatans, et que sa mère est morte sans, à quatre-vingts ans. Il dit tout cela avec une tristesse sincère. C'est le plus terrible.",
        "Il raccompagne Victorine jusqu'à la porte, une chandelle à la main, une seule, qu'il souffle dès qu'elle a passé le seuil.",
      ],
      choices: [{ label: "Attendre un instant dans la cour obscure", to: "WF_agathe" }] },
    WF_agathe: { act: "I", title: "Les bûches comptées", place: "hameau", ambiance: "nuit",
      text: [
        "Elle sort de l'ombre de la grange, comme un fantôme qui aurait de bonnes manières. Agathe Rospabu a vingt-huit ans. Elle est grande, pâle, belle d'une beauté que personne n'a jamais regardée, parce que tout le pays sait qu'on n'épousera pas la fille Rospabu avant la mort du père, et que le père n'a pas l'intention de mourir. Elle a des mains rouges de fermière et des yeux de religieuse. Elle tient contre elle une bourse de cuir, petite, lourde, qu'elle tend à Victorine dans le noir.",
        "« Vingt-huit pièces, dit-elle. Une par anniversaire, depuis que je suis née. Il me les donne le matin, devant ma mère, et il me les fait compter devant lui. Le soir, il me demande à les voir. Chaque année, il me demande à les voir. » Elle a un petit rire qui ne ressemble pas du tout à un rire. « Il sait le compte. Il le saura demain. Prenez-les. Achetez l'écorce, et du bois, et faites mettre le bois sur le compte de qui vous voudrez. »",
        "Victorine pèse la bourse dans sa main. Elle pense à ce que dira le vieil homme, demain matin, quand sa fille ouvrira devant lui une bourse vide. Elle pense aussi, très précisément, à sa propre bourse à elle, dans le tiroir du bureau, sous le portrait retourné d'Hector : quarante écus, mis de côté depuis un an, sou par sou, pour le premier des créanciers de son mari, qui passe à la fin du mois. Il y en aurait assez pour l'écorce. Il y en aurait juste assez.",
      ],
      choices: [
        { label: "Prendre la bourse d'Agathe", fx: { flag: "wf:or" }, to: "WF_or" },
        { label: "Rendre la bourse, et aller réveiller le recteur pour faire honte au père", fx: { flag: "wf:pere" }, to: "WF_pere" },
        { label: "Rendre la bourse, et payer l'écorce avec l'argent des créanciers d'Hector", fx: { flag: "wf:offre" }, to: "WF_offre" },
      ] },
    WF_or: { act: "I", title: "Les bûches comptées", place: "hameau", ambiance: "nuit",
      text: [
        "Elle prend la bourse. Elle réveille l'apothicaire de Varnèse à coups de poing dans ses volets, et il lui vend l'écorce, en bonnet de nuit, avec la mine d'un homme qui fait la charité à des heures indues. À l'aube, le feu brûle dans la chambre de Madame Rospabu, avec du bois acheté au charbonnier, et la malade boit sa première tasse de poudre rouge en grimaçant, parce que c'est amer comme le péché.",
        "La fièvre tombe le troisième jour. L'eau quittera le poumon plus lentement, mais un matin la malade demande une soupe, et dans une maison pareille, une soupe demandée vaut un miracle. Victorine apprend la suite par la femme du sacristain, qui l'a apprise par le valet. Le matin même où la malade a demandé sa soupe, maître Rospabu a demandé à sa fille de lui montrer sa bourse. Elle a dit qu'elle n'en avait plus. Il ne l'a pas battue. Il n'a pas crié. Il s'est assis. Il est resté assis toute la journée, sur une chaise, dans la cuisine froide, à regarder ses mains, comme un homme qui aurait reçu la nouvelle d'un décès.",
        "Depuis, dit la femme du sacristain, il ne parle plus à sa fille, et le valet parie qu'il n'en reparlera jamais. Il mange à l'autre bout de la table. Agathe le soigne, le sert, le lave quand il est malade, comme avant, avec ses mains rouges et ses yeux de religieuse. Elle a sauvé sa mère. Elle a perdu son père, qui est vivant, et assis en face d'elle, chaque soir. Elle ne s'en plaint à personne.",
      ],
      choices: [{ label: "Regagner Varnèse, à l'aube", fx: { quest: "WF" }, back: "A1v_soir" }] },
    WF_pere: { act: "I", title: "Les bûches comptées", place: "hameau", ambiance: "nuit",
      text: [
        "Elle rend la bourse. Agathe la reprend sans un mot, avec un regard que Victorine ne comprend pas tout de suite : une sorte de soulagement honteux. Puis la médecin fait une lieue dans la nuit, jusqu'au presbytère de Varnèse, et tire l'abbé Morisseau de son lit, et le ramène, en soutane et en sabots, maugréant, à la Grande-Lande, à trois heures du matin.",
        "Ce qui se passe dans la cuisine froide, entre l'abbé, la médecin et l'homme le plus riche de la lande, Victorine s'en souviendra comme d'une des scènes les plus humiliantes de sa vie, et elle n'est pas sûre de savoir pour qui. L'abbé parle de l'âme, de la charité, du jugement dernier, de l'aiguille et du chameau. Rospabu écoute, les mains jointes, hochant la tête, approuvant tout, bégayant des amen. Puis il demande combien coûte exactement l'once d'écorce, et si l'on ne pourrait pas en prendre une demi-once, et si le feu ne pourrait pas brûler seulement la nuit.",
        "On obtient une demi-once et le feu la nuit. La malade guérit à moitié : la fièvre tombe, la toux reste, et elle vivra encore trois ans, à tousser, dans une chambre chauffée de six heures du soir à six heures du matin, exactement. Le dimanche suivant, à la sortie de la messe, Agathe salue Victorine d'une inclinaison de tête très polie. Victorine sait qu'elle lui a épargné le regard de son père. Elle se demande parfois si c'était cela qu'Agathe voulait, ou si elle avait choisi de payer, et si personne ne lui a laissé le droit de payer.",
      ],
      choices: [{ label: "Regagner Varnèse, à l'aube", fx: { quest: "WF" }, back: "A1v_soir" }] },
    WF_offre: { act: "I", title: "Les bûches comptées", place: "hameau", ambiance: "nuit",
      text: [
        "Elle rend la bourse. Elle dit à Agathe de la garder, et de la montrer à son père demain, et après-demain, et le jour de sa mort. Puis elle refait la lieue jusqu'à Varnèse, ouvre le tiroir sous le portrait retourné d'Hector, prend les quarante écus, et réveille l'apothicaire. Il lui vend l'écorce. Elle achète du bois au charbonnier, qui la livre à l'aube, en jurant contre les médecins qui ne dorment jamais.",
        "Madame Rospabu guérit, lentement. Maître Rospabu remercie Victorine avec une émotion sincère et un bégaiement redoublé. Il ne lui demande pas combien elle a payé. Il ne le lui rembourse pas. Il lui envoie, le surlendemain, un panier de pommes ridées et une motte de beurre rance, avec ses compliments. Agathe, elle, garde le silence. Elle vient, un soir, frapper à la porte du cabinet, et elle reste une heure, assise près du feu, avec Monsieur Prosper, sans parler. Elle revient le soir suivant. Elle reviendrait toutes les semaines, si on la laissait faire, et si la médecin restait à Varnèse.",
        "Le premier créancier d'Hector doit passer à la fin du mois. Victorine n'aura rien à lui donner, et il fera dresser un papier par un huissier de Morlenc, puis un autre, qu'elle rangera dans le tiroir, sous le portrait, à la place des écus. Elle le sait. Elle dort mal. Elle ne regrette rien. Ces deux choses vont très bien ensemble, découvre-t-elle, comme le chaud et le froid dans une maison de granit.",
      ],
      choices: [{ label: "Regagner Varnèse, à l'aube", fx: { quest: "WF" }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      agathe: { name: "Agathe Rospabu", aka: ["la demoiselle de la Grande-Lande"], f: true, qui: "Fille de maître Rospabu, le plus riche fermier de la lande de Varnèse." },
    },
    quests: [
      { id: "WF", act: "I", kind: "annexe", title: "Les bûches comptées", start: "WF_appel", doit: "eugeniegrandet", echo: ["wf:or", "wf:pere", "wf:offre"] },
    ],
  },
};
