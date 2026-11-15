// Corlay, the scenes added: the barometer of the hall, Dame Hesdin at her forges, Pernelle's account, the sergeant on
// the bridge who stops the carriage of the man who gave the order, and Aude at midnight.
var A = "I";
module.exports = {
  C_balcon: { act: A, title: "Le baromètre du vestibule", place: "hauteville", fx: { flag: "corlay:barometre", time: 0.25 },
    text: [
      "Tu t'excuses et tu sors fumer sur le balcon du vestibule. Le vent te prend le cigare des doigts à la première bouffée. Tu le regardes tomber dans le noir de la rue Haute, petit point rouge.",
      "Au mur du vestibule, il y a le baromètre que ton père a rapporté de Lyon, en noyer et en cuivre. Tu tapotes le verre, par habitude. L'aiguille tombe d'un cran. Elle est sur *Tempête*. Tu ne l'as jamais vue là.",
      "Au bout de la vallée, sur la digue, la petite lumière de la Maison des Vannes. Le vieux Vellard a un baromètre, lui aussi. Il le regarde, ce soir, et il voit la même aiguille que toi.",
    ],
    choices: [{ label: "Rentrer à table", back: "C_souper" }] },
  C_hesdin: { act: A, title: "La dame des forges", place: "hauteville", fx: { flag: "corlay:hesdin", time: 0.75 },
    text: [
      "Tu laisses tes invités au dessert et tu fais atteler. La maison Hesdin est au bout de la rue Haute, contre le rempart : une maison de maître de forges, grande, sans ornements, avec une enclume de fer sur le linteau.",
      "Dame Bérangère Hesdin te reçoit dans son bureau, en robe noire, devant un feu de bois de chêne. Elle a soixante-dix ans et un regard de fondeur. Elle te laisse debout.",
      "« Votre pâté était excellent, Corlay. Mes chiens l'ont dit. »",
      "Tu parles. Tu parles bien : la stabilité, les tisserands, la Charge en de bonnes mains, la digue reprise dans les règles. Elle t'écoute jusqu'au bout.",
      "« Une seule question, dit-elle. Vous êtes descendu dans la galerie, vous ? Une fois, dans votre vie ? »",
      "Tu ouvres la bouche. Elle lève la main. « Ne répondez pas. Je vote ce que je vois, Corlay. Montrez-moi quelque chose. »",
    ],
    choices: [{ label: "Rentrer chez toi", to: "C_cabinet", via: "hesdin" }] },
  C_pernelle: { act: A, title: "Les comptes de Pernelle", place: "hauteville", fx: { flag: "corlay:pernelle" },
    text: [
      "« Pernelle. Qu'en pensez-vous ? »",
      "Elle lève les yeux de son pupitre. En douze ans, tu ne lui as jamais posé cette question. Elle prend le temps de nettoyer sa plume.",
      "« Ce soir, Monsieur, vous avez payé le capitaine Rambert, maître Tassin, le teinturier Cosson et le fils Vellard. J'ai tout noté. » Elle referme son registre. « Vous payez beaucoup de gens pour qu'ils vous disent ce que vous voulez entendre. Moi, vous me payez pour tenir les comptes. Les comptes disent que le garde-vannes est le seul, cette semaine, à ne vous avoir rien coûté. »",
    ],
    choices: [{ label: "Revenir à la clé", back: "C_cabinet" }] },

  // ------------------------------------------------------------------ the bridge, from the other side
  C_pont_odon: { act: A, title: "Ordre du capitaine", place: "pont", fx: { time: 0.25 },
    text: [
      "Au milieu du pont des Moulins, une hallebarde plantée entre deux pavés, une lanterne, et un sergent large d'épaules qui lève la main devant tes chevaux.",
      "« Halte. Ordre du capitaine Rambert : rien ne monte vers la digue cette nuit. »",
      "Pernelle Daguet, à côté de toi, étouffe quelque chose qui pourrait être un rire. Le sergent lève sa lanterne vers la voiture, voit ton visage, ta pelisse, la couronne brodée sur la portière. Il blêmit.",
      "C'est toi qui as donné cet ordre, il y a quatre heures, par la bouche de Rambert.",
    ],
    choices: [
      { label: "« Je suis Corlay. Écartez-vous. »", to: "C_pied", via: "ordre", fx: { flag: "foulons:leves" } },
      { label: "Lui dire la vérité : pourquoi tu montes, et pourquoi il gardait ce pont", to: "C_pied", via: "verite", fx: { flag: ["foulons:leves", "corlay:odon"] } },
    ] },
  C_aude: { act: A, title: "Aude", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Tu te retournes vers elle dans le noir.",
      "« Il y a trois ans, le vieux Vellard est venu au Conseil avec ses mesures. Une fissure dans la galerie. Il fallait vider le lac. On a voté de se taire. J'ai présidé. On a payé les dettes de son fils pour qu'il se taise aussi. » Tu respires. « Ce soir, il a voulu ouvrir la vanne. J'ai fait saisir la clé. Elle est dans le coffre. »",
      "Aude garde le silence un long moment. Puis elle se lève, allume la bougie, et commence à s'habiller.",
      "« Fais atteler, dit-elle. Tu vas aller voir. Moi, je vais réveiller Pernelle. »",
      "« Il est une heure du matin. »",
      "« Il était une heure du matin il y a trois ans aussi, Enguerrand. Ça fait trois ans qu'il est une heure du matin. »",
    ],
    choices: [
      { label: "Prendre la clé au coffre, et faire atteler", to: "C_route", fx: { time: 0.25 } },
      { label: "Lui dire de se recoucher, et te recoucher aussi", to: "C_vote", fx: { time: 2.5 } },
    ] },
};
