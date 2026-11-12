// Act I · two more corners: for Pie in the low quarters of Pallanche (Pie leads, "tu" masculine), the wash-house of the
// Teinturiers where his mother Jeanne beat linen, and where old Guillemette kept her paddle (pie:battoir); for Corbe in
// the camp of the Raven (Corbe leads, "tu" feminine), her friend Embla who braids her hair for the rite and asks to
// keep one braid until she comes back (corbe:tresse, read in IV_clan_retour).
function P(base) { return function (o) { return Object.assign({ act: "I", noLead: true }, base, o); }; }
var PI = P({ place: "pallanche" }), CO = P({ place: "corbeau" });
var PI_BACK = [{ label: "Revenir dans les bas-quartiers", to: "PI_ville" }], CO_BACK = [{ label: "Revenir au camp", to: "CO_camp" }];
module.exports = {
  PI_k_lavoir: PI({ title: "Le lavoir des Teinturiers",
    text: [
      "Au bout de la rue des Teinturiers, là où le ruisseau sort bleu, rouge ou jaune selon le jour, il y a le lavoir. Un toit de tuiles sur quatre poteaux, une pierre inclinée, et dix femmes à genoux qui battent le linge en parlant fort. Tu n'y es pas revenu depuis la pluie, et la fosse commune des quais. Linette avait quatre ans.",
      "Les femmes se taisent quand tu passes sous le toit. Puis la plus vieille, Guillemette, qui a des bras comme des cuisses et pas une dent de devant, se relève en s'appuyant sur son battoir. « Le petit de Jeanne, dit-elle. Regardez-moi ça. Il est devenu voleur, à ce qu'on dit. Ta mère aurait eu honte. » Elle te prend la figure entre ses mains mouillées. « Elle aurait eu honte et elle t'aurait donné à manger. Viens là. »",
    ],
    choices: [
      { label: "Lui parler de Linette", fx: { flag: "pie:battoir", ep: ["perso", 500] }, to: "PI_k_lavoir_battoir" },
      { label: "Te mettre à genoux à la place de ta mère, et battre le linge avec elles", fx: { ep: ["perso", 300], pv: 1 }, to: "PI_k_lavoir_linge" },
    ] }),
  PI_k_lavoir_battoir: PI({ title: "Le battoir de Jeanne",
    text: [
      "Tu dis tout. La Fosse, Corneille, les quatre écus, le registre, la tour. Les femmes se sont arrêtées de battre. Guillemette ne dit rien jusqu'à la fin. Puis elle va au fond du lavoir, sous la pierre, là où on range les seaux, et elle revient avec un battoir de bois, noirci, usé en creux par une main qui n'est pas la sienne. Sur le manche, au couteau : un *J*.",
      "« Je l'ai gardé, dit-elle. Pour la petite. Je me disais : quand elle sera grande, elle viendra laver ici, et elle aura celui de sa mère. » Elle te le met dans les mains. « Tu le lui donneras. Quand tu l'auras sortie de là. Tu lui diras que sa mère chantait faux et qu'elle tapait plus fort que nous toutes. Elle ne s'en souviendra pas. Tu lui diras quand même. »",
    ],
    choices: PI_BACK }),
  PI_k_lavoir_linge: PI({ title: "La pierre du lavoir",
    text: ["Tu te mets à genoux, à la troisième place, celle de ta mère, que personne n'a prise. Guillemette te donne un drap et un battoir. Tu tapes. Tu tapes mal. Les femmes rient, et elles te montrent : le poignet, pas le bras, et tu frappes en chantant, sinon ça ne va pas. Elles chantent. Une chanson de lavandières, que tu connais par cœur sans l'avoir jamais apprise, parce que tu l'as entendue tous les jours de ta vie, avant la pluie. Tu chantes avec elles. Faux. Comme ta mère."],
    choices: PI_BACK }),
  CO_k_tresses: CO({ title: "Les tresses",
    text: [
      "Devant ta tente, Embla t'attend, un peigne d'os dans une main et un pot de graisse de renne dans l'autre. Embla, avec qui tu as appris à poser des collets, à mentir aux anciens, à grimper aux sapins pour voir le sud. On tresse les cheveux de la Bouche la veille du rite, sept tresses, une pour chaque génération qui a attendu. C'est elle qui l'a demandé.",
      "Elle te fait asseoir. Elle peigne, elle graisse, elle tresse, sans parler, ce qui ne lui ressemble pas. À la sixième tresse, elle s'arrête. « Je veux en garder une, dit-elle. Je la coupe, et je la garde. Si tu reviens sans ton nom, je te la rendrai, et tu sauras que c'était à toi. » Elle a les yeux secs. Elle a les mains qui tremblent.",
    ],
    choices: [
      { label: "Lui laisser couper la septième tresse", fx: { flag: "corbe:tresse", ep: ["perso", 500] }, to: "CO_k_tresses_coupe" },
      { label: "Lui dire que tu reviendras avec ton nom, et qu'elle n'en aura pas besoin", to: "CO_k_tresses_non" },
    ] }),
  CO_k_tresses_coupe: CO({ title: "La septième",
    text: ["Elle tresse la septième, plus serrée que les autres. Elle la noue avec un fil rouge. Puis elle prend son couteau et elle la coupe, d'un coup, au ras de la nuque. Tu sens le froid sur ta peau, là où elle était. Elle enroule la tresse, la met dans une petite bourse de cuir, et la bourse sous sa chemise, contre elle. « Six, dit-elle. Ça fera six. Personne ne comptera. » Personne ne compte. Le soir, près des feux, tu sens ce vide sur ta nuque, et c'est la seule chose qui ne te fait pas peur."],
    choices: CO_BACK }),
  CO_k_tresses_non: CO({ title: "Sept",
    text: ["« Je reviendrai avec, dis-tu. Tu n'en auras pas besoin. » Embla te regarde. Elle ne te croit pas. Elle ne le dit pas. Elle tresse la septième, la noue avec un fil rouge, et elle te pose les mains sur les épaules, un moment, par derrière, sans que tu puisses voir son visage. « Bien sûr », dit-elle. Puis elle ramasse son peigne et son pot, et elle s'en va, très droite, sans courir."],
    choices: CO_BACK }),
};
