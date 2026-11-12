// Act V · one more sight of Pallanche on the last night (the child leads, "tu" masculine), off V_ville: a masked ball
// in a town house where the guests, hidden behind their masks and false names since before the snow, are still dancing,
// because the snow could not find whom to take (v:bal=danse|masques).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_ville" }];
module.exports = {
  V_v_bal: P({ title: "Le bal masqué",
    text: [
      "Rue des Chanoines, un hôtel particulier, toutes fenêtres éclairées, et de la musique. Une vraie musique, vivante, des violons, un hautbois, des rires. La seule de la ville. La neige tombe sur la cour, sur les voitures arrêtées, sur les cochers qui sourient dans le vide. Mais derrière les fenêtres, on danse.",
      "Tu entres. Personne ne t'arrête. Dans la grande salle, cent invités masqués tournent en cadence, loups de velours, visages de carton doré, becs d'oiseaux, et chacun s'est donné un nom pour la soirée : la Colombine, le Grand Turc, la Dame de Pique. Ils les ont annoncés à l'entrée, avant la neige. La neige est entrée, elle aussi, elle a cherché. Elle n'a trouvé que des masques. Elle est ressortie.",
    ],
    choices: [
      { label: "Danser une ronde avec eux, sous ton nom à toi", test: { dom: "social", label: "Le bal", help: [{ if: { present: "lisandre" }, v: 20 }, { if: { has: "iv:violons=appris" }, v: 10 }, { if: { has: "tess:bal" }, v: 10 }] },
        win: { fx: { flag: ["v:bal", "v:bal=danse"], ep: ["perso", 1000] }, to: "V_v_bal_danse" }, lose: { to: "V_v_bal_mur" } },
      { label: "Leur dire ce qui se passe dehors", fx: { flag: ["v:bal", "v:bal=masques"], ep: ["perso", 600] }, to: "V_v_bal_dire" },
    ] }),
  V_v_bal_danse: P({ title: "La ronde",
    text: ["Une Colombine te prend la main. Un Grand Turc prend l'autre. La ronde tourne. Ils te demandent ton nom, comme on le demande au bal, pour rire. Tu le dis. Le vrai. Ils le répètent, en chœur, en tournant, comme une chanson, et ils rient, et le nom fait le tour de la salle de main en main. Personne ne sait qui tu es. Tout le monde sait comment tu t'appelles. Quand tu t'en vas, la Dame de Pique te glisse à l'oreille, sans ôter son masque : « Le mien, c'est Hortense. Ne le dis à personne avant demain. »"],
    choices: BACK }),
  V_v_bal_mur: P({ title: "Contre le mur",
    text: ["Tu essaies. Tu ne connais pas les pas. On te bouscule, gentiment. Tu finis contre le mur, entre deux tentures, à regarder. Ils tournent. Ils rient. Personne ne sait qui est qui, et c'est pour ça qu'ils sont encore là. Tu les regardes longtemps. Tu te dis que tu as passé un an à vouloir qu'on se souvienne de ton nom, et que ce soir, dans cette salle, c'est de ne pas en avoir qui protège. Tu ne sais pas quoi faire de cette idée. Tu la gardes pour plus tard."],
    choices: BACK }),
  V_v_bal_dire: P({ title: "Ne pas les démasquer",
    text: ["Tu montes sur une chaise. Tu dis la neige, la queue, la tour, la ville qui oublie. Les violons s'arrêtent. Cent masques se tournent vers toi. Un Arlequin lève la main vers le ruban de son loup, pour l'ôter, pour mieux te voir. Tu cries : « Non ! » Il s'arrête. Ils ont compris. Personne n'ôte son masque. Les violons reprennent, plus doucement. Ils danseront jusqu'à l'aube, masqués, sans savoir si dehors il reste quelqu'un pour les reconnaître. C'est déjà mieux que dehors."],
    choices: BACK }),
};
