// Act I · one more sight for Hylas's afternoon in Pallanche (Hylas leads, "tu" masculine, old and blind), off HY_V_ville:
// the hundred bells at vespers, counted on a bench, and the one he cannot place (hylas:muette); and one more for Corbe's
// day in the lower town (Corbe leads, "tu" feminine), off CO_V_ville: the showman's bear Bertrand, bought from the
// Raven as a cub, who growls his clan name in his sleep (corbe:ours=nomme|chaine).
function P(base) { return function (o) { return Object.assign({ act: "I", noLead: true, place: "pallanche" }, base, o); }; }
var HY = P({}), CO = P({});
var HY_BACK = [{ label: "Reprendre ta canne, et marcher", to: "HY_V_ville" }], CO_BACK = [{ back: "CO_V_ville" }];
module.exports = {
  HY_V_cloches: HY({ title: "Les cent cloches",
    text: [
      "Tu t'assieds sur un banc de pierre, place des Carmes, au moment où l'on commence à sonner vêpres. Tu connais les cent cloches de Pallanche comme d'autres connaissent les visages de leur rue. Saint-Gilles, grave, avec son bourdon qui fait trembler les vitres. Saint-Aubin, aigre. Les Carmes, deux notes. La petite fêlée des Teinturiers, qui arrive toujours en retard. Tu les comptes, de mémoire, à mesure qu'elles entrent.",
      "Quatre-vingt-dix-huit. Quatre-vingt-dix-neuf. Il en manque une. Tu recomptes. Il en manque toujours une. Et le pire, c'est d'ignorer laquelle manque. Tu as beau chercher, il y a un trou dans ta liste, à la place d'un son que tu as dû entendre dix mille fois.",
    ],
    choices: [
      { label: "Demander à un passant quelle cloche ne sonne plus", fx: { flag: "hylas:muette", ep: ["perso", 400] }, to: "HY_V_cloches_muette" },
      { label: "Recompter, encore, jusqu'à trouver toi-même", test: { dom: "savoir", label: "Les cent cloches", help: [{ if: { has: "hylas:page" }, v: 10 }] },
        win: { fx: { flag: "hylas:muette", ep: ["perso", 600] }, to: "HY_V_cloches_trouve" }, lose: { to: "HY_V_cloches_trou" } },
    ] }),
  HY_V_cloches_muette: HY({ title: "La Muette",
    text: ["Un gamin passe en courant. Tu l'arrêtes de ta canne. Il réfléchit, en sautant d'un pied sur l'autre. « La Muette, maître ! Celle de votre tour, là-haut, la chapelle des Greffiers. Elle ne sonne plus depuis que je suis né. Depuis avant. On dit qu'elle est fendue. » Il repart. Tu restes sur le banc. La chapelle de ta propre tour. Tu y as entendu la messe chaque matin pendant soixante ans. Elle s'est tue un jour, il y a vingt ans peut-être, à peu près l'année où le noir est venu sur tes yeux, et tu ne t'en es pas aperçu. Tu te demandes ce que tu n'as pas remarqué d'autre."],
    choices: HY_BACK }),
  HY_V_cloches_trouve: HY({ title: "Le trou dans la liste",
    text: ["Tu recomptes, quartier par quartier, en suivant le son comme on suit un mur dans le noir. Et tu trouves. Au nord-est, là où il devrait y avoir une petite note claire, juste après les Carmes : rien. La chapelle des Greffiers. Ta tour. La cloche que tu entendais chaque matin, en descendant à la messe, depuis l'âge de quatorze ans. Elle s'est tue. Quand ? Cela t'a échappé. Tu restes assis sur le banc jusqu'à la fin de vêpres, les mains sur ta canne, à écouter le silence qu'elle fait."],
    choices: HY_BACK }),
  HY_V_cloches_trou: HY({ title: "Quatre-vingt-dix-neuf",
    text: ["Tu recomptes. Tu recomptes encore. Vêpres s'achève avant que tu aies trouvé. Les cloches se taisent une à une, et la dernière, la petite fêlée des Teinturiers, en retard comme toujours. Il en manquait une. Tu ne sauras pas laquelle aujourd'hui. Tu te relèves. Il reste dans ta tête un endroit vide, de la taille exacte d'un son, et tu l'emportes avec toi."],
    choices: HY_BACK }),
  CO_V_ours: CO({ title: "L'ours du montreur",
    text: [
      "Sur une placette, devant une taverne, un cercle de badauds. Au milieu, un homme maigre, à l'accent du sud, et au bout de sa chaîne, un ours. Petit, brun, pelé aux coudes, un collier de cuir rouge, une cicatrice en croix sur le museau. « Bertrand ! L'ours le plus savant des trois royaumes ! » L'ours fait sa révérence. On rit. On jette des sous.",
      "Tu t'approches. L'ours tourne la tête vers toi. Il renifle. Il sent la fumée de genévrier, le renne, la graisse du camp sur tes peaux. Il s'arrête au milieu de son numéro. Il grogne, très bas, deux syllabes, toujours les mêmes. Le montreur tire sur la chaîne. Toi, tu as compris. C'est un nom. Un nom du Corbeau, de ceux qu'on donne aux oursons qu'on élève une saison avant de les rendre à la montagne. *Hjalti.*",
    ],
    choices: [
      { label: "Lui dire son nom, à voix haute, dans la langue du clan", fx: { flag: ["corbe:ours", "corbe:ours=nomme"], ep: ["perso", 600] }, to: "CO_V_ours_nom" },
      { label: "Revenir cette nuit, et couper sa chaîne", test: { dom: "discretion", label: "La chaîne", help: [{ if: { has: "corbe:renne_ville" }, v: 10 }] },
        win: { fx: { flag: ["corbe:ours", "corbe:ours=chaine"], ep: ["perso", 800] }, to: "CO_V_ours_libre" }, lose: { to: "CO_V_ours_rate" } },
    ] }),
  CO_V_ours_nom: CO({ title: "Hjalti",
    text: ["« Hjalti », dis-tu. L'ours se fige. Puis il se laisse tomber sur ses quatre pattes, d'un coup, au milieu de la révérence, et il vient vers toi, aussi loin que la chaîne le permet, et il pose son museau dans ta main. Les badauds rient, ils croient que c'est un tour. Le montreur ne rit pas. Il te regarde. « C'est ça qu'il dit, la nuit, dit-il, à voix basse. Je l'ai toujours su. » Il le garde pour lui : c'est son pain. Mais ce soir-là, quand il range sa chaîne, tu l'entends appeler l'ours, une fois, en se trompant d'accent : *Hjalti*."],
    choices: CO_BACK }),
  CO_V_ours_libre: CO({ takes: "night", title: "La chaîne",
    text: ["Tu reviens à minuit. L'ours dort dans la cour de la taverne, attaché à un anneau. Le montreur ronfle sur la paille, à côté. Tu as ton couteau. La chaîne est vieille ; c'est le collier qui cède. L'ours se réveille. Il te regarde. Tu lui dis son nom, tout bas, et tu lui montres le nord. Il hésite. Il regarde le montreur endormi. Puis il passe le portail, au trot, en silence, et il disparaît dans la rue, vers les portes. Il ne connaît pas le chemin. Il le trouvera. Les ours trouvent toujours le nord."],
    choices: CO_BACK }),
  CO_V_ours_rate: CO({ takes: "night", title: "Le chien de la taverne",
    text: ["Tu reviens à minuit. Le chien de la taverne aboie avant que tu aies franchi le portail. Une fenêtre s'éclaire. Tu fuis par les toits. Le lendemain, en passant, tu vois le montreur qui a doublé la chaîne. L'ours te regarde passer. Il ne grogne pas. Il attend, comme il attend depuis six ans."],
    choices: CO_BACK }),
};
