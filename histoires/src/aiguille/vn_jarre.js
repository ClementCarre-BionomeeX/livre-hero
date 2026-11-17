// L'Île Folle-Aiguille · side story « Le raccommodeur dans la jarre » (owes its question to La Jarre: when a man and
// a thing are stuck together, which one does the law protect?). Act I, a farm near Varnèse: maître Caradec, the richest
// and stingiest farmer of the coast, had a giant new oil jar cracked by the frost. A travelling mender, Squiban, has
// riveted it from the inside and, being fat and clever, cannot get out through the neck. Caradec wants the jar intact;
// Squiban wants out; the whole parish watches. The child, sent for cider, is asked to judge. The child has the jar
// broken and pays for it (vn:casse), goes for the justice of the peace (vn:juge), or lets the two men fight it out
// until night (vn:attend). Wired in A1_jours.
module.exports = {
  passages: {
    VN_ferme: { act: "I", title: "Le raccommodeur dans la jarre", place: "hameau", ambiance: "village",
      fx: { meet: "squiban" },
      text: [
        "Ton père t'envoie chez maître Caradec chercher le cidre de la saison, qu'il paie toujours trop cher et toujours en retard. La ferme Caradec est la plus grosse de la côte : quatre charrues, dix vaches, deux puits, un fils notaire et une avarice si célèbre qu'on dit à Varnèse, d'un homme qui compte les grains de sel dans sa soupe, qu'il « caradèque ». Tu arrives au milieu de l'après-midi. Il y a foule dans la cour. Toute la paroisse, semble-t-il, autour d'une jarre.",
        "C'est une jarre à huile énorme, une jarre des pays chauds, ventrue, haute comme un homme, que Caradec a fait venir à grands frais par mer l'automne dernier, et qui s'est fendue au premier gel, du col au pied. Il a fait venir un raccommodeur, un ambulant, un nommé Squiban, petit, gras, chauve, malin, avec une colle de sa composition et des agrafes de fer. Squiban est entré dans la jarre pour la coudre par l'intérieur. Il l'a cousue. C'est du beau travail. Seulement, il est rond, et le col est étroit, et il ne peut plus sortir.",
        "Sa tête dépasse du col, rouge, furieuse, éloquente. Il exige qu'on casse la jarre. Caradec, à côté, en sabots, exige qu'on ne la casse pas : elle lui a coûté soixante livres, elle est réparée, elle est à lui, et l'homme qui est dedans n'a qu'à maigrir. Le curé est venu. Les enfants grimpent sur le mur pour voir. Une vieille femme vend des galettes. Quand tu entres dans la cour, Squiban t'aperçoit, voit ta cruche, et crie : « Voilà quelqu'un du Fanal ! Le Fanal est neutre ! Qu'il juge ! » Et toute la cour se tourne vers toi.",
      ],
      choices: [{ label: "Écouter les deux parties, puisqu'on te le demande", to: "VN_proces" }] },
    VN_proces: { act: "I", title: "Le raccommodeur dans la jarre", place: "hameau", ambiance: "village",
      text: [
        "Caradec plaide le premier, les pouces dans la ceinture. La jarre est à lui. Il l'a payée. Il a payé le raccommodeur pour la réparer, pas pour s'y installer. Si quelqu'un doit payer, c'est celui qui a eu la sottise de s'enfermer dans le bien d'autrui. Il cite la loi, qu'il connaît par son fils notaire. Il dit que s'il casse sa jarre pour en tirer un homme, demain on lui demandera de casser sa maison pour en tirer un voleur. La moitié de la cour approuve. C'est la moitié qui possède quelque chose.",
        "Squiban plaide ensuite, du fond de la jarre, en faisant des gestes avec la seule main qui passe par le col. Il dit qu'un homme vaut plus qu'une jarre, ce qui est vrai, et qu'il a fait son travail, ce qui est vrai aussi, et que la jarre ne tient debout que grâce à lui, et que si on le libère en la cassant, elle redevient ce qu'elle était avant son travail, c'est-à-dire de la terre fendue, ce qui est un raisonnement si beau que le curé applaudit. Il ajoute qu'il a faim. Il ajoute qu'il aurait besoin, dans un moment, de sortir pour une raison qu'il ne précisera pas devant des dames.",
        "Le soleil baisse. Caradec a fait apporter une chaise et du cidre, pour lui seul. Squiban a fait demander, par-dessus le col, une galette à la vieille femme, à crédit. Tout le monde te regarde. Tu as seize ans. Tu as dans ta poche les sous du cidre de ton père. Et tu as, pour la première fois de ta vie, une paroisse entière qui attend que tu dises ce qui est juste.",
      ],
      choices: [
        { label: "Faire casser la jarre, et la payer avec l'argent du cidre", fx: { flag: "vn:casse" }, to: "VN_casse" },
        { label: "Dire qu'un enfant ne juge pas, et courir chercher le juge de paix à Varnèse", fx: { flag: "vn:juge" }, to: "VN_juge" },
        { label: "Dire qu'ils n'ont qu'à s'entendre, et attendre la nuit", fx: { flag: "vn:attend" }, to: "VN_attend" },
      ] },
    VN_casse: { act: "I", title: "Le raccommodeur dans la jarre", place: "hameau", ambiance: "village",
      text: [
        "Tu dis que l'homme sort. Tu dis que la jarre sera payée. Tu poses sur la table de Caradec tout l'argent du cidre, en comptant à voix haute, pour que la paroisse entende. Il manque quarante livres pour faire soixante. Caradec le fait remarquer. Le curé, à la surprise générale, sort de sa soutane une bourse et ajoute dix livres. La vieille aux galettes en ajoute deux. Un valet, cinq. La paroisse se cotise en riant, sou par sou, pour libérer un raccommodeur, et Caradec, qui ne peut décemment pas refuser l'argent d'un curé, compte, recompte, et dit oui.",
        "On casse la jarre à coups de maillet. Elle éclate comme une coquille d'œuf, et Squiban en sort, rouge, ankylosé, couvert de colle, salué par une ovation. Il s'incline. Il remercie la cour. Il te remercie, toi, en t'appelant « Votre Seigneurie ». Puis il ramasse les morceaux de la jarre, les examine en connaisseur, et annonce qu'avec ses agrafes, il peut en faire six pots à beurre de belle taille, qu'il vendra au marché, à un sou pièce de moins que chez Caradec.",
        "Tu rentres au Fanal sans cidre et sans argent. Tu racontes tout à ton père. Il t'écoute, sans rien dire. Puis il éclate de rire, d'un rire que tu ne lui connaissais pas, si fort qu'il doit s'asseoir. Il dit que c'est le cidre le plus cher qu'il ait jamais payé, et le mieux employé. Le lendemain, Caradec fait livrer le cidre au Fanal, gratuitement, avec un mot de son fils notaire, rédigé dans les formes, qui dit que c'est « pour solde de tout compte ». Personne ne sait de quel compte il s'agit. Tout le monde le comprend.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VN" }, back: "A1_jours" }] },
    VN_juge: { act: "I", title: "Le raccommodeur dans la jarre", place: "hameau", ambiance: "village",
      text: [
        "Tu dis qu'un enfant ne juge pas, et que c'est très bien ainsi. Tu cours jusqu'à Varnèse, une lieue, et tu ramènes, à la nuit tombante, sur sa mule, le juge de paix, maître Le Guellec, un vieil homme maigre en habit noir, qui a laissé sa soupe pour ça et qui le fait savoir. Il examine la jarre. Il examine Squiban. Il examine le contrat, qui n'existe pas. Il demande une chandelle. Il demande un code. On n'a pas de code. Il récite de mémoire.",
        "Il rend son jugement à minuit, devant la paroisse au complet, qui a apporté des lanternes. La jarre sera cassée, puisqu'un homme ne saurait être retenu par une chose. Squiban paiera la jarre, puisqu'il s'y est enfermé par sa propre faute. Caradec paiera la réparation, puisque la jarre était réparée au moment où on l'a cassée. Les deux sommes étant égales, à peu de chose près, elles s'annulent, et chacun garde son argent. Le juge de paix réclame ses frais aux deux parties, par moitié, plus la soupe.",
        "On casse la jarre. Squiban sort. Caradec et lui se regardent, ruinés de la même somme, d'un air si exactement pareil que la paroisse éclate de rire. Le juge remonte sur sa mule. En passant devant toi, il te dit, sans sourire : « Tu as bien fait de venir me chercher. C'est pour ça qu'on a inventé les juges : pour que personne n'ait raison, et que tout le monde soit content d'avoir tort à moitié. » Tu ne sais pas si c'est une plaisanterie. Tu y penses longtemps.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VN" }, back: "A1_jours" }] },
    VN_attend: { act: "I", title: "Le raccommodeur dans la jarre", place: "hameau", ambiance: "nuit",
      text: [
        "Tu dis qu'ils sont deux hommes faits, que juger les regarde, et qu'ils n'ont qu'à s'entendre. La paroisse, déçue, se disperse peu à peu, avec les galettes. Caradec rentre chez lui en claquant la porte. Squiban reste dans la jarre, au milieu de la cour, seul, avec la nuit qui tombe et les étoiles qui s'allument au-dessus du col. Tu restes aussi, assis{e} sur le mur, avec ta cruche, parce que tu ne sais pas très bien comment partir.",
        "Vers dix heures, un bruit monte de la jarre. Un petit bruit régulier, patient, grinçant, comme une souris qui ronge une poutre. Squiban a sorti de sa poche une lime de raccommodeur, et il lime le col, de l'intérieur, à la lueur des étoiles, en sifflotant entre ses dents. Il lime toute la nuit. Il lime avec un art d'orfèvre, en tournant, en arrondissant, en polissant, et il s'arrête de temps en temps pour mesurer l'ouverture avec ses épaules, comme un tailleur essaie un habit.",
        "À l'aube, il sort. Par le haut, tranquillement, par un col deux fois plus large, parfaitement rond, lisse comme une coupe. La jarre est intacte. Il en fait le tour, l'admire, et quand Caradec sort en chemise, il lui présente sa note : réparation d'une fente, tant ; transformation d'une jarre à col étroit en jarre à large col, pour puiser plus commodément, tant. Caradec hurle. Squiban s'incline et s'en va dans le brouillard, son sac sur l'épaule. Tu rentres au Fanal avec ta cruche vide, en te disant que le droit appartient quelquefois à celui qui a une lime et toute une nuit devant lui. Tu soupçonnes que c'est une leçon. Tu soupçonnes aussi que c'est une injustice.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VN" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      squiban: { name: "Squiban", aka: ["le raccommodeur"], qui: "Raccommodeur ambulant, petit, gras, chauve et très éloquent." },
    },
    quests: [
      { id: "VN", act: "I", kind: "annexe", title: "Le raccommodeur dans la jarre", start: "VN_ferme", doit: "jarre", echo: ["vn:casse", "vn:juge", "vn:attend"] },
    ],
  },
};
