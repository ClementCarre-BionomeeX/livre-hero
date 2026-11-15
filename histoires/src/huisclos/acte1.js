// Act I, the first night: the arrival in the snow, the threshold, the people in the hall, your mother on her bed, and the
// supper where everyone keeps quiet about the same things. The vigil of the first night is Mariette's (gens.js).
module.exports = {
  A_arrivee: {
    act: "I", title: "La première neige", place: "cour", ambiance: "neige", fx: { meet: "germain" },
    text: [
      "Le cocher de Saint-Amans t'a laissé{e} au pied de la côte, avec ta malle, parce que ses chevaux refusaient la neige. Tu as monté le dernier quart de lieue à pied, la malle sur l'épaule, et la neige est tombée tout le long, de plus en plus épaisse, comme un rideau qu'on tire derrière toi.",
      "Te voici dans la cour. La maison est là, plus petite que dans ta mémoire, et plus haute à la fois. Toutes les fenêtres du rez-de-chaussée sont éclairées ; à l'étage, une seule brille, celle de la chambre de ta mère, où la lumière tremble, jaune, comme celle des cierges.",
      "Un homme sort de la grange avec une lanterne : grand, large d'épaules, en manteau de drap fin. Il lève sa lanterne vers ton visage. « Ah, dit-il. Te voilà. Germain Rouvière. Le mari d'Odile. » Il tend la main vers ta malle. « Tu arrives un jour trop tard, je suis désolé de te le dire comme ça. Elle est morte avant-hier dans la nuit. »",
      "Derrière vous, au bas de la côte, tu entends le cocher qui fait tourner ses chevaux, et le bruit des grelots qui s'éloigne vers Saint-Amans. Demain, la route sera fermée.",
    ],
    choices: [
      { label: "Lui laisser la malle et marcher vers la porte", to: "A_seuil" },
      { label: "Garder ta malle, et rester un instant dans la cour à regarder la fenêtre éclairée", fx: { angoisse: 1, trait: { aveu: -1 } }, to: "A_seuil" },
    ],
    silence: { who: "germain", to: "A_seuil" },
  },
  A_seuil: {
    act: "I", title: "Le seuil", place: "cour", devant: "odile", fx: { meet: "odile" },
    text: [
      "La porte de la cuisine s'ouvre avant que tu aies frappé. Odile se tient dans l'encadrement, en robe noire, un tablier blanc par-dessus, les manches retroussées. Elle a trente-quatre ans ; tu lui en donnerais quarante. Elle te regarde comme on regarde une lettre arrivée en retard.",
      "« Tu arrives tard », dit-elle.",
      "Derrière elle, tu vois la cuisine, le fourneau, et une vieille femme qui reste tournée vers lui.",
    ],
    choices: [
      { label: "Lui dire que la diligence a mis six jours", fx: { trait: { aveu: 1 } }, to: "A_entree" },
      { label: "La prendre dans tes bras", fx: { attache: { odile: 1 }, trait: { coeur: 1 } }, to: "A_seuil_bras" },
    ],
    silence: { who: "odile", to: "A_entree", via: "silence" },
  },
  A_seuil_bras: {
    act: "I", title: "Le seuil", place: "cour",
    text: [
      "Tu la prends dans tes bras sur le seuil, dans la neige. Elle se raidit comme un piquet, mais te laisse faire. Elle attend que tu aies fini, les bras le long du corps, et quand tu la lâches, elle a les yeux humides et la bouche dure.",
      "« Entre, dit-elle. Tu fais entrer le froid. »",
    ],
    choices: [{ label: "Entrer", to: "A_entree" }],
  },
  A_entree: {
    act: "I", title: "Ceux qui sont là", place: "salle", fx: { meet: ["mariette", "fabre", "jeanne"], recit: "v_fabre_nuit" },
    text: [
      { via: "silence", text: "Tu ne réponds pas. Odile hoche la tête, comme si c'était la réponse qu'elle attendait, et s'efface pour te laisser passer." },
      "Dans la cuisine, Mariette se retourne enfin, une louche à la main. Elle te regarde, et pose la louche. Elle vient vers toi, te prend le visage entre ses deux mains rêches, très fort, une seconde, et retourne à son fourneau sans un mot.",
      "Dans la grande salle, un homme âgé, en gilet noir, se lève d'un fauteuil près du feu avec un verre à la main : le docteur Fabre, de Saint-Amans. « Mes condoléances, dit-il. Je suis monté constater, et la neige m'a gardé. Le cœur, ajoute-t-il, sans que personne ait rien demandé. Il était usé depuis deux ans. Elle s'est endormie vers minuit et ne s'est pas réveillée. C'est une belle mort. »",
      "Près de la fenêtre, une jeune femme pose l'ouvrage qu'elle cousait. Tu la reconnais avant de la reconnaître : la façon de pencher la tête, les taches de rousseur. Jeanne Pradel. Elle était à la cabane, autrefois, chaque soir de cet hiver-là.",
      { tendre: true, text: "Elle ne s'approche pas. Elle dit seulement ton prénom, très bas, et ton prénom, dans sa bouche, a encore le même son.", else: "Elle ne s'approche pas. Elle te fait un petit signe de tête, très poli." },
      "« Jeanne est l'institutrice, maintenant, dit Odile derrière toi. Elle est montée m'aider pour la toilette. Elle a épousé Paulin Gerbaud, le meunier. » Elle te prend ta veste mouillée. « Monte la voir. Elle t'a attendu{e}. »",
    ],
    choices: [
      { label: "Monter voir ta mère", to: "A_lit" },
      { label: "Dire que tu monteras tout à l'heure, et t'approcher du feu", fx: { angoisse: 1 }, to: "H_salle" },
    ],
  },
  A_lit: {
    act: "I", title: "Ta mère", place: "chambre", seul: true, fx: { clue: "e_engelures" },
    text: [
      "Tu montes l'escalier, et la troisième latte craque comme avant. La chambre de ta mère est au fond du couloir : quatre cierges, les volets clos, le froid voulu.",
      "Ta mère est couchée sur le lit, en robe noire, les mains jointes sur un chapelet. Elle est petite. Elle n'a jamais été petite. Ses cheveux, presque blancs, sont nattés et roulés autour de sa tête comme une couronne. Quelqu'un les a nattés avec beaucoup de soin.",
      "Jeanne a laissé, sur la chaise, une manche de dentelle qu'elle allait coudre au poignet de la robe. Le poignet est nu. Tu vois l'avant-bras de ta mère, jusqu'au coude : la peau est couverte de cicatrices blanches, lisses, brillantes, des poignets jusqu'aux coudes, comme une brûlure très ancienne. Tu ne les as jamais vues. Elle portait des manches longues.",
      "Tu restes debout près du lit. Tu attends quelque chose : de la peine, de la colère, une prière. Il vient seulement une grande fatigue, et l'envie absurde de lui dire bonsoir.",
    ],
    choices: [
      { label: "Lui dire bonsoir, à voix basse", fx: { trait: { aveu: 1 }, angoisse: -1 }, to: "H_chambre" },
      { label: "Toucher sa main", fx: { angoisse: 1, trait: { coeur: 1 } }, to: "A_lit_main" },
      { label: "Quitter la chambre sans rien dire", fx: { trait: { aveu: -1 } }, to: "H_etage" },
    ],
  },
  A_lit_main: {
    act: "I", title: "Ta mère", place: "chambre", seul: true,
    text: [
      "Tu poses tes doigts sur les siens. Ils sont froids d'un froid que tu ne connaissais pas, un froid de pierre, sans rien dessous. Les jointures sont grosses comme des noix, les doigts tordus vers l'extérieur comme des racines.",
      "Tu te souviens de ces mains sur ta tête, la dernière fois. Le jour de ton départ, elle ne t'a pas touché{e}. Tu viens de t'en souvenir.",
    ],
    choices: [{ label: "Retirer ta main", to: "H_chambre" }],
  },
  A_souper: {
    act: "I", title: "Le souper", place: "salle", fx: { quest: "I_retour" }, devant: ["odile", "germain"],
    text: [
      "À sept heures, Mariette sonne la cloche du souper, comme toujours, et tout le monde descend, comme toujours. On mange dans la grande salle, à un bout de la longue table, sous la pendule arrêtée : une soupe, du lard, des pommes de terre. Personne n'a faim, et tout le monde mange.",
      "Germain parle pour tous : de la neige, de la route, du curé qui montera dès qu'on pourra passer, du prix du sapin à Saint-Amans. Le docteur boit. Jeanne coupe son pain en petits carrés qu'elle laisse sur l'assiette. Mariette fait le service debout, malgré Odile qui lui demande deux fois de s'asseoir.",
      { calme: true, text: "Odile, en face de toi, tend la main vers le sel. Sur le bord de sa manche gauche, une tache ronde, raide, brun-jaune, que le savon n'a pas enlevée." },
      { trouble: true, text: "Odile, en face de toi, tend la main vers le sel. Sur le bord de sa manche gauche, une tache sombre, presque noire. Du sang, penses-tu, et ton cœur bondit. Tu regardes de nouveau : la tache est toujours là, et tu ne sais plus de quelle couleur elle est." },
      "Au dessert, Germain se tourne vers toi, très aimable. « Et tu restes jusqu'à quand, alors ? Après l'enterrement, il faudra parler un peu des affaires. Rien de pressé. Le bois, la scierie, les papiers. »",
      "Toute la table attend ta réponse, et même Mariette, debout près du buffet, la cruche à la main.",
    ],
    choices: [
      { label: "Dire que tu repartiras dès que la route sera ouverte", fx: { set: { sejour: "court" }, trait: { aveu: 1 } }, to: "A_souper_fin" },
      { label: "Dire que tu ne sais pas encore", fx: { set: { sejour: "flou" } }, to: "A_souper_fin" },
      { label: "Demander pourquoi personne, à cette table, ne parle de Lucien", fx: { set: { sejour: "lucien" }, angoisse: 1, trait: { aveu: 1 } }, to: "A_souper_lucien" },
    ],
    silence: { who: "germain", fx: { set: { sejour: "tu" } }, to: "A_souper_fin" },
  },
  A_souper_lucien: {
    act: "I", title: "Le souper", place: "salle",
    text: [
      "Le prénom tombe sur la table comme un verre qu'on casse. Le docteur s'arrête de boire, Jeanne baisse les yeux, et Germain ouvre la bouche, puis la referme.",
      "Odile pose sa cuiller. « On ne parle pas de Lucien, dit-elle, parce que maman ne voulait pas qu'on en parle. Pendant douze ans. Tu étais parti{e}, toi, tu ne pouvais pas savoir. » Elle se lève. « Elle est encore là-haut. Ce n'est pas le soir pour lui désobéir. »",
      "Elle sort. Mariette la suit des yeux, puis te regarde, toi, et c'est un regard que tu n'arrives pas à lire.",
    ],
    choices: [{ label: "Finir ton assiette en silence", to: "A_souper_fin" }],
  },
  A_souper_fin: {
    act: "I", title: "Après le souper", place: "salle",
    text: [
      { if: { is: { sejour: "court" } }, text: "Germain hoche la tête, satisfait. « Bien sûr. Ta vie est là-bas, maintenant. On fera vite les papiers. »" },
      { if: { is: { sejour: "flou" } }, text: "Germain sourit. « On a le temps, on a le temps. La neige, elle, ne se presse pas. »" },
      { if: { is: { sejour: "tu" } }, text: "Tu ne réponds pas. Germain attend, puis il rit, un peu trop fort, et parle d'autre chose. Odile t'a regardé{e} pendant tout ce temps." },
      "On débarrasse. Mariette couvre le feu de la cuisine et monte prendre la première veille, avec son chapelet et sa chaufferette. Le docteur se ressert un verre. Germain sort fumer dans la cour. Jeanne monte se coucher dans la chambre de couture, sans souhaiter le bonsoir à personne.",
      "La maison est à toi, pour la nuit, si tu la veux.",
    ],
    choices: [{ label: "Te lever de table", to: "H_salle" }],
  },
};
