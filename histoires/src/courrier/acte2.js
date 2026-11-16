// Acte II · Vèze : la halte de la porte (les cartes de route y sont refusées), puis la salle du conseil et les fins.
// Le dénouement lit les fils : un cavalier encore en course t'a devancé ; un pli dont on sait qui l'a ouvert se remet
// autrement ; un retard de deux fois fait arriver après le vote.
function fin(id) { return { flag: "fin:" + id, quest: "pli", ep: ["histoire", 1200] }; }

module.exports = {
  H3_porte: { act: "II", title: "La porte de Vèze", halte: { id: "porte", nom: "la porte de Vèze", suite: "Z_conseil", types: ["rencontre", "obstacle", "detour", "revelation", "allie", "trahison"] },
    text: [
      "La porte de Vèze est une gueule de pierre sous une herse à demi levée, et la file avance dedans par saccades, comme une soupe dans un gosier. Les gardes portent la livrée verte de la ville et l'air excédé des gens qui ont vu passer trop de monde. Au-dessus de la voûte, une niche abrite un saint de bois dont la pluie a mangé le visage.",
      "Les vêpres sonneront bientôt. Le conseil siège ce soir.",
    ] },

  Z_conseil: { act: "II", branch: [
    { if: { fil: "rival" }, to: "Z_devance" },
    { if: { clock: "retard", min: 2 }, to: "Z_tard" },
    { to: "Z_salle" },
  ] },

  Z_devance: { act: "II", title: "Un autre courrier", fx: { meet: "fremond" },
    text: [
      "Dans la salle du conseil, sous les poutres peintes, douze conseillers sont assis en fer à cheval, et le prévôt Aubertin trône au milieu, dans une robe noire qui pourrait abriter une famille. Devant lui, debout, l'homme au manteau gris. Ancel Frémond tient un pli à la main, cacheté de rouge, et il parle avec l'aisance d'un acteur qui connaît son rôle.",
      "« … de la part de Madame la margrave d'Orbec, qui prie le conseil de voter selon sa conscience, et de s'abstenir. »",
      "Le prévôt soupèse le pli. Tu sens contre ta poitrine le poids du tien.",
    ],
    choices: [
      { label: "Comparer les deux cachets devant le conseil", if: { fil: "secret", is: "noue" }, fx: { fil: { noue: "rival" }, ep: ["perso", 400] }, to: "Z_salle" },
      { label: "Démasquer le cavalier devant le conseil", test: { dom: "social", label: "Social" },
        win: { fx: { fil: { noue: "rival" }, ep: ["perso", 300] }, to: "Z_salle" }, lose: { to: "F_devance" } },
    ] },

  Z_tard: { act: "II", title: "La salle vide",
    text: [
      "Tu entres dans la salle du conseil au moment où les valets éteignent les chandelles. Douze fauteuils vides en fer à cheval, une odeur de suif et de laine mouillée, et sur la table, l'urne renversée, encore pleine de fèves. Les blanches sont cinq, les noires sept.",
      "Le prévôt Aubertin enfile son manteau dans un coin. Il te regarde, il regarde le cachet d'Orbec, et il soupire avec la satisfaction d'un homme qui n'aura pas à se décider.",
    ],
    choices: [{ label: "Lui tendre le pli quand même", to: "F_tard" }] },

  Z_salle: { act: "II", title: "La salle du conseil", fx: { meet: "aubertin" },
    text: [
      "La salle du conseil a des poutres peintes de feuillages et de vertus, et des conseillers peints de la même façon : beaucoup de dorure, et peu de couleurs vraies. Le prévôt Aubertin préside au centre du fer à cheval. Il a une voix de chantre, et il s'en sert pour dire les choses les plus simples, comme un homme qui chante la messe pour commander son dîner.",
      { noue: "rival", text: "Les gardes ont emmené Ancel Frémond par la petite porte. Sa cravache est restée sur les dalles, et personne ne la ramasse." },
      { fil: "secret", text: "Tu sens le pli contre toi, avec sa double cire. Tu ignores qui l'a ouvert, et ce qu'on y a lu." },
      "« Courrier d'Orbec ? » chante le prévôt. « Approche. Le conseil t'écoute, et la margrave aussi, sans doute, par quelque moyen que la Providence lui a donné. »",
    ],
    choices: [
      { label: "Remettre le pli au prévôt, devant témoins", to: "F_livre" },
      { label: "Remettre le pli, et dire au conseil qui l'a ouvert sur la route", if: { fil: "secret", is: "noue" }, to: "F_verite" },
    ] },

  F_livre: { act: "II", title: "Le pli remis", end: true, epilogue: true, fx: fin("livre"),
    text: [
      "Le prévôt brise la cire et lit. Il lit deux fois. Puis il plie la lettre, la pose sur la table, et regarde ses douze conseillers avec l'œil d'un berger qui recompte son troupeau.",
      "On vote aux fèves. Sept noires pour Orbec, cinq blanches contre. La margrave a ses sept voix.",
      { fil: "secret", text: "Pendant le vote, tu observes un conseiller aux mains fines qui ne quitte pas la lettre des yeux. Il vote blanc. Il était peut-être le lecteur de la première cire ; tu ne le sauras pas ce soir." },
      "On te donne une chambre au-dessus de l'écurie de la ville, un souper chaud, et un reçu signé du prévôt, de sa plus belle écriture.",
    ] },

  F_verite: { act: "II", title: "La cire et la vérité", end: true, epilogue: true, fx: fin("verite"),
    text: [
      "Tu poses le pli sur la table, et tu montres la double cire au conseil. Puis tu dis ce que tu as appris sur la route : la main qui a ouvert la lettre, et le nom de celui qui l'avait payée.",
      "Le silence qui suit est de ceux qu'on entend. Un conseiller aux mains fines se lève, se rassied, se relève, et quitte la salle sans demander la permission. Le prévôt le regarde partir avec la sérénité d'un homme qui vient de gagner un siège à bon compte.",
      "Le vote a lieu quand même. Huit noires pour Orbec. Le prévôt te serre la main à deux mains, comme un notaire serre un héritage.",
    ] },

  F_tard: { act: "II", title: "Trop tard pour le vote", end: true, epilogue: true, fx: fin("tard"),
    text: [
      "Le prévôt prend le pli, le soupèse, et le glisse dans sa manche sans l'ouvrir. « Le conseil a voté. Je le lirai demain, par politesse pour Madame la margrave. »",
      "Tu repars le lendemain avec un reçu en bonne forme et la certitude que la margrave lira, sur ton visage, le compte exact de tes heures perdues.",
    ] },

  F_devance: { act: "II", title: "Le courrier devancé", end: true, epilogue: true, fx: fin("devance"),
    text: [
      "Tu parles trop vite, trop fort, avec la boue de deux jours sur tes bottes. Le cavalier, lui, parle doucement, avec des gants propres. Le conseil croit les gants.",
      "On te reconduit à la porte. Derrière toi, le prévôt brise la cire du faux pli, et le conseil vote l'abstention, comme le faux pli le lui demande.",
      "Tu gardes le vrai pli. Il pèse plus lourd, à présent, qu'à Orbec.",
    ] },
};
