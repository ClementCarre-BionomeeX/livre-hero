// La Super Retraite · the confessions: what each hero tells the other on the nights they spend together (the casting
// at the forge, the stairs of the Salle des Fêtes). {autre} names the other hero.
module.exports = {
  S_aveu_billet: { title: "Le billet de cinquante francs", back: true,
    text: [
      "Tu sors de ta poche un billet de cinquante francs, plié en quatre, et tu le déplies devant {autre}. Il a un coin déchiré. Au dos, dans l'angle, il y a la trace d'un pouce enfariné.",
      "« Je l'ai versé à la Caisse vendredi, dis-tu. Ma cotisation, et celle de Mie. Le lendemain, il était dans l'enveloppe de mon père. Sa Super Retraite. Mon billet, avec ma farine dessus. » Tu le replies. « Mon père est payé avec mon argent. Et il remercie Sorbier pour ça, tous les samedis, avec une rose. »",
      { if: { place: "forge" }, text: "Le creuset ronronne dans le feu. {autre} regarde le billet longtemps, puis le feu, puis toi, et dit seulement : « Garde-le. Un jour, ça vaudra plus que cinquante francs. »" },
      { if: { place: "salle" }, text: "De l'autre côté du mur, l'orchestre attaque une valse. {autre} prend le billet, le regarde à la lumière qui passe sous la porte, et te le rend. « Garde-le. À minuit, il vaudra plus que cinquante francs. »" },
    ] },
  S_aveu_fournil: { title: "Le fournil hypothéqué", back: true,
    text: [
      "Tu le dis d'une traite, sans respirer, comme on avale un remède. Cet automne, pour payer la farine de l'hiver, tu as signé un papier à la Banque Sorbier. Trois cents francs. Le fournil en garantie. Le four, le pétrin, la table à façonner, l'enseigne peinte par ton grand-père. Échéance : le 1er janvier 1900.",
      "« Si je ne gagne pas, dis-tu, la Caisse prend le fournil après-demain. Et si la Caisse est vide, comme je le crois, elle le prend quand même. On peut être ruiné par une banque qui n'a pas un sou. C'est même ce qu'elle fait le mieux. »",
      { if: { place: "forge" }, text: "{autre} reste silencieux, le marteau à la main. Puis {autre} pose le marteau sur l'enclume, très doucement, comme on pose une main sur une épaule." },
      { if: { place: "salle" }, text: "Sous l'escalier, dans le noir, {autre} ne répond pas tout de suite. Puis une main noire de forge serre la tienne, une seconde, et la lâche." },
    ] },
  S_aveu_coffre: { title: "Ce qu'il y a dans le coffre", back: true,
    text: [
      "Tu racontes la cave de la Banque. L'escalier de marbre, la lampe, la vieille porte de fonte qu'il fallait remplacer. Et derrière la porte, quand l'employé l'a ouverte pour que tu prennes les mesures : une chaise. Un encrier. Et un courant d'air qui venait d'on ne sait où, et qui faisait danser la flamme de la lampe.",
      "« Pas un sac, dis-tu. Pas une pièce. Les quatre murs, la chaise et l'encrier. Sorbier m'a demandé une porte de trois tonnes pour garder une chaise. » Tu regardes tes mains. « Je l'ai forgée quand même. Il payait d'avance. »",
      { if: { place: "forge" }, text: "Le métal chante dans le creuset. {autre} s'assoit sur le tas de charbon, la tête entre les mains, et reste ainsi jusqu'à ce que le métal soit prêt." },
      { if: { place: "salle" }, text: "De l'autre côté du mur, on entend un bouchon de champagne, puis des applaudissements. {autre} dit tout bas : « Ils fêtent une chaise. »" },
    ] },
  S_aveu_bail: { title: "Le bail de la forge", back: true,
    text: [
      "La forge appartenait à ton père, et avant lui à son père, et tu croyais qu'elle t'appartenait. Le lendemain de l'enterrement, un employé de la Caisse est venu avec un papier timbré. Ton père avait emprunté. La forge est à la Caisse, et tu en es la locataire.",
      "« Sorbier m'a dit que le bail serait déchiré, si je me taisais sur le coffre, dis-tu. Un toit contre un silence. C'est le seul prix honnête qu'il m'ait jamais proposé : il me disait exactement ce qu'il achetait. »",
      { if: { place: "forge" }, text: "{autre} regarde autour de soi, les murs noircis, l'enclume, le fauteuil de Mémé Chrome, comme on regarde une maison qu'on vient d'apprendre à aimer et qui est déjà vendue." },
      { if: { place: "salle" }, text: "Sous l'escalier, {autre} reste immobile. Puis : « Alors on est deux à loger chez lui. Ça fait de nous des colocataires. »" },
    ] },
};
