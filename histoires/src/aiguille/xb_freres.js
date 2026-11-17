// L'Île Folle-Aiguille · side story « Les deux frères » (owes its question to The Master of Ballantrae: what does a
// brother owe the brother who let himself be believed dead?). Part one, act II, the doctor at the ball of the Exchange:
// Alexis Quémeneur, « the Chevalier », believed dead for eight years, walks in and offers his glove to Benoît, the
// younger, who inherited the name, the land and the fiancée. Part two (act IV, on the island) is in xb_ile.js.
module.exports = {
  passages: {
    XB_bal: { act: "II", title: "Le bal de la Bourse", place: "haute_ville", ambiance: "chateau",
      fx: { meet: ["benoit", "heloise"] },
      text: [
        "Le baron la fait danser une fois, par politesse, avec une adresse d'homme qui a appris la danse avant la lecture. Puis il l'abandonne aux frères Varembert, qui la font danser à tour de rôle en finissant chacun les pas de l'autre. Victorine s'échappe vers un pilier, avec un verre de vin d'Espagne, et regarde.",
        "Elle regarde Benoît Quémeneur, le second de la Cormorane, qui ne danse pas. Il se tient près d'une fenêtre, en habit de drap brun parmi les soies, raide comme un mât de rechange, et il couve des yeux sa femme, Héloïse, qui danse avec un échevin. Une jolie femme blonde, gaie, légère, qui rit en tournant ; elle cherche son mari du regard à chaque tour, et chaque fois qu'elle le trouve, il sourit, et chaque fois qu'il sourit, il a l'air plus triste.",
        "Puis la musique s'arrête au milieu d'une mesure. Les violons se taisent l'un après l'autre, comme des oiseaux qui sentent l'orage.",
        "Un homme vient d'entrer.",
        "Il est jeune encore, trente-quatre ou trente-cinq ans, beau comme un portrait de maître, en habit de velours noir, une cascade de dentelle au jabot, des cheveux noirs noués d'un ruban de soie rouge. Il sourit. Il a le sourire le plus charmant que Victorine ait jamais vu, et des yeux qui ne participent pas.",
        "Un murmure court le long des murs, de bouche en bouche, jusqu'au pilier de Victorine : « Alexis Quémeneur. Le Chevalier. On le disait mort aux Indes. »",
      ],
      choices: [{ label: "Regarder Benoît", to: "XB_bal_gant" }] },
    XB_bal_gant: { act: "II", title: "Le gant", place: "haute_ville", ambiance: "chateau",
      text: [
        "Benoît Quémeneur est devenu gris. Héloïse s'est arrêtée au milieu du parquet, les mains sur la bouche. Son éventail est tombé ; personne ne le ramasse.",
        "Le Chevalier traverse la salle sans se presser, entre les danseurs qui s'écartent. Il s'incline devant Héloïse, très bas, lui baise la main, qu'elle n'a pas tendue. « Ma fiancée, dit-il avec tendresse. Vous n'avez pas changé. Moi, si : je suis mort, il paraît. On ne s'en remet jamais tout à fait. »",
        "Puis il se tourne vers son frère.",
        "« Mon petit Benoît. Tu portes bien mon nom. Tu portes bien mon domaine. Tu portes bien ma femme. » Il tire un gant de sa ceinture, un gant de daim gris perle, et le laisse tomber aux pieds de Benoît, avec une grâce parfaite, comme on laisse tomber un mouchoir. « Je te les reprends quand tu veux. L'aube, au Pré-aux-Mouettes ? À l'épée, bien sûr. Tu as toujours été meilleur au pistolet. Je ne veux pas d'injustice entre nous. »",
        "Benoît regarde le gant. Il ne se baisse pas. Il dit, d'une voix sourde, lente, qui porte dans toute la salle :",
        "« Je ne me bats pas avec un mort, Alexis. Je l'ai enterré il y a huit ans. J'ai payé ses dettes. J'ai consolé sa fiancée. Le mort n'a plus rien à me demander. »",
        "Le Chevalier rit. Un rire clair, charmant, qui s'arrête net. Puis il gifle son frère, du revers de la main, devant cinq cents personnes, et la gifle claque sous les lustres comme un coup de pistolet.",
      ],
      choices: [
        { label: "Courir à Héloïse, qui s'évanouit", to: "XB_heloise" },
        { label: "Te planter devant le Chevalier", to: "XB_chevalier" },
        { label: "Retenir Benoît, qui lève le poing", to: "XB_benoit" },
      ] },
    XB_heloise: { act: "II", title: "Héloïse", place: "haute_ville", ambiance: "chateau",
      text: [
        "Héloïse s'effondre dans les bras de Victorine avant de toucher le parquet. On les fait passer dans un petit salon, sur un sofa, avec des sels, de l'eau, des éventails, et trop de monde. Victorine renvoie tout le monde, dégrafe le corset, fait respirer les sels.",
        "Héloïse revient à elle et pleure. Elle pleure longtemps, sans bruit, comme une enfant qui ne veut pas qu'on l'entende. Puis elle parle, à cette inconnue en robe grise, parce que c'est une inconnue.",
        "« J'avais dix-neuf ans. Il était si beau, si drôle. Il avait des dettes partout ; il jouait, il se battait. Un jour, il est parti pour les Indes, sur un navire de la Compagnie, pour faire fortune, et on a appris qu'il était mort de la fièvre, à Pondichéry. On me l'a dit. On me l'a écrit. On m'a envoyé sa montre. » Elle serre les mains de Victorine. « Benoît a payé ses dettes, toutes. Il a vendu ses chevaux. Il ne m'a jamais rien demandé. Au bout de trois ans, c'est moi qui ai demandé. » Elle lève vers Victorine des yeux noyés. « Et lui, il est vivant. Il nous a laissés le croire mort. Huit ans. Pourquoi ? »",
      ],
      choices: [
        { label: "« Parce que les morts n'ont pas de créanciers. »", fx: { flag: "freres:heloise", regard: { heloise: "redevable" } }, to: "XB_bal_fin" },
        { label: "« Je ne sais pas, madame. Votre mari, lui, est bien vivant. »", fx: { flag: "freres:heloise", regard: { heloise: "cordial" } }, to: "XB_bal_fin" },
      ] },
    XB_chevalier: { act: "II", title: "Le Chevalier", place: "haute_ville", ambiance: "chateau",
      fx: { meet: "chevalier" },
      text: [
        "Victorine se plante entre les deux frères, son verre de vin d'Espagne à la main, et dit au Chevalier, de sa voix de médecin, sèche et précise :",
        "« Vous saignez, monsieur. »",
        "C'est vrai. En giflant son frère, il s'est écorché la main à un bouton d'habit. Une goutte de sang perle sur sa dentelle. Il la regarde, surpris. Puis il regarde Victorine, et pour la première fois, ses yeux s'intéressent à quelque chose.",
        "« Vous êtes la médecin de Clavières, dit-il. On m'a parlé de vous. La veuve Davrigny. Une femme qui connaît la mer, les morts et les créanciers. » Il sourit. « Nous allons nous revoir, Madame. Là-bas. Les îles sont petites, et la mer, très grande, ne mène jamais qu'aux mêmes endroits. »",
        "Il s'incline, essuie sa main à la dentelle, et s'en va comme il est venu, entre les danseurs qui s'écartent, en riant. À la porte, il se retourne et lance à son frère, gaiement : « À bientôt, Benoît ! Embrasse ma femme pour moi ! »",
      ],
      choices: [{ label: "Le regarder partir", fx: { flag: ["freres:soufflet", "chevalier:connu"] }, to: "XB_bal_fin" }] },
    XB_benoit: { act: "II", title: "Benoît", place: "haute_ville", ambiance: "chateau",
      text: [
        "Benoît a levé le poing. Un poing de marin, énorme, qui pourrait abattre un bœuf. Victorine le saisit au poignet, des deux mains, et pèse de tout son poids.",
        "« Non, dit-elle. C'est ce qu'il veut. »",
        "Benoît la regarde sans la voir. Puis il baisse le bras, lentement, et elle sent sous ses doigts la force qui reflue, comme une marée qui descend. Le Chevalier les regarde tous deux en souriant, déçu, comme un enfant à qui l'on a confisqué un jouet.",
        "« Toujours aussi sage, mon petit frère, dit-il. Tu as trouvé une gouvernante. » Il s'en va en riant. Benoît le regarde partir, les dents serrées, le visage marqué de rouge.",
        "« Merci, Madame, dit-il enfin, sans la regarder. Vous m'avez empêché de faire ce que je n'aurais jamais pu défaire. » Il va chercher sa femme. Victorine reste seule avec le gant gris perle, par terre, entre ses pieds. Personne ne l'a ramassé.",
      ],
      choices: [{ label: "Ramasser le gant", fx: { item: "gant_chevalier", flag: "freres:retenu", regard: { benoit: "redevable" } }, to: "XB_bal_fin" }] },
    XB_bal_fin: { act: "II", title: "Le bal de la Bourse", place: "haute_ville", ambiance: "chateau",
      text: [
        "L'orchestre reprend. On danse de nouveau, plus vite, plus fort, pour oublier, et l'on parle de l'incident derrière les éventails jusqu'au matin. Benoît Quémeneur emmène sa femme sans saluer personne. Le baron Clavières, qui n'a rien perdu de la scène depuis la galerie, retrouve Victorine près du vestiaire.",
        "« Le Chevalier, dit-il, pâle. Ce garçon est un fléau. Il a une lettre de course de je ne sais quel prince, un navire rapide et trente coupe-jarrets. » Il se tait, puis ajoute, comme pour lui-même : « Et il est à Morlenc la veille de notre départ. Ce n'est jamais un hasard, avec lui. »",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { flag: "freres:soufflet" }, to: "A2vv_nuit" }] },
  },
  extras: {
    people: {
      heloise: { name: "Héloïse Quémeneur", aka: ["Héloïse"], f: true,
        face: { age: "adulte", skin: "clair", hair: "blond", coif: "chignon", beard: "sans", eyes: "ronds", iris: "bleu", nose: "retrousse", lips: "pleines", shape: "ovale", marks: [] },
        desc: "L'épouse de Benoît Quémeneur.", qui: "La femme de Benoît, autrefois fiancée de son frère.",
        aspect: { allure: "légère, gaie, qui cherche son mari des yeux", visage: "blonde, rieuse" } },
      chevalier: { name: "Alexis Quémeneur", aka: ["le Chevalier", "Alexis", "Alexis Quémeneur"], f: false,
        face: { age: "adulte", skin: "clair", hair: "noir", coif: "long", beard: "sans", eyes: "amande", iris: "noir", nose: "fin", lips: "pleines", shape: "ovale", marks: [] },
        desc: "Corsaire, frère aîné de Benoît, qu'on disait mort aux Indes.", qui: "Le Chevalier, le frère qu'on croyait mort.",
        aspect: { allure: "beau comme un portrait, à son aise partout", visage: "cheveux noirs noués de rouge, sourire charmant", habits: "velours noir, cascade de dentelle", voix: "claire, rieuse, qui s'arrête net" } },
    },
    items: {
      gant_chevalier: { name: "Un gant gris perle", kind: "divers", keep: true, price: 0, desc: "Le gant de daim que le Chevalier a jeté aux pieds de son frère, au bal de la Bourse." },
    },
    quests: [
      { id: "XB", act: "IV", kind: "annexe", title: "Les deux frères", start: "XB_bal", doit: "ballantrae", echo: ["freres:duel_benoit", "freres:duel_alexis", "freres:reconcilies", "freres:trahison"] },
    ],
  },
};
