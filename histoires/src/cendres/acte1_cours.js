// Act I · one more corner in three of the opening hubs: the forge of Brenne, where the smith is told to make irons
// for Hautvent (Ysolde leads, "tu" feminine); the queen's seamstress, who embroiders a name inside every hem (Lisandre
// leads, "tu" feminine); the old women who grind the paints for the rite (Corbe leads, "tu" feminine).
function P(base) { return function (o) { return Object.assign({ act: "I", noLead: true }, base, o); }; }
var YS = P({ place: "brenne" }), LI = P({ place: "vasselin" }), CO = P({ place: "corbeau" });
module.exports = {
  // ---------------------------------------------------------------- Brenne : la forge
  YS_Q_forge: YS({ title: "La forge",
    fx: { questSeen: "YS_Q_forge" },
    text: [
      "La forge est adossée au mur nord, sous la tour du Loup. Hugues y travaille depuis le temps de ton père : un homme large comme une porte, avec un tablier de cuir brûlé et des avant-bras sans un poil. Aujourd'hui, il ne ferre pas de chevaux.",
      "Sur l'enclume, et par terre autour, des fers. Des anneaux, des chaînes courtes, des menottes, une pile qui monte jusqu'au genou. Il en forge une paire pendant que tu regardes, sans lever la tête, et la jette sur la pile.",
      "« Ordre du frère Sévrin, dit-il. Cent vingt paires. Pour Hautvent. Il a dit que c'était votre ordre, capitaine. » Il trempe une menotte. La vapeur monte. « J'ai dit que je voulais l'entendre de vous. »",
    ],
    choices: [
      { label: "« Fais-les. »", fx: { flag: "ysolde:fers=faits" }, to: "YS_Q_forge_oui" },
      { label: "« Arrête. Une corde suffira. »", fx: { flag: "ysolde:fers=corde", ep: ["perso", 600] }, to: "YS_Q_forge_corde" },
      { label: "« Fais-en de mauvais. Qui cassent. »", test: { dom: "social", label: "Hugues", help: [{ if: { seen: "YS_gautier" }, v: 10 }, { if: { has: "YS:chambre" }, v: 10 }] },
        win: { fx: { flag: "ysolde:fers=mauvais", ep: ["perso", 1000] }, to: "YS_Q_forge_mauvais" }, lose: { to: "YS_Q_forge_refus" } },
    ] }),
  YS_Q_forge_oui: YS({ title: "Cent vingt paires",
    text: [
      "Hugues hoche la tête. Il reprend son marteau. Il ne dit rien. Il ne te regarde plus. Le bruit du marteau te suit dans la cour, régulier, jusqu'au soir, et le soir encore, quand tu essaies de dormir.",
      "Tu as donné des ordres plus durs. Tu en as donné, sur la Lisse, que tu ne te rappelles plus. Celui-là, tu te le rappelleras. Tu le sais en sortant de la forge.",
    ],
    choices: [{ label: "Retourner dans la cour", fx: { quest: "YS_Q_forge" }, to: "YS_cour" }] }),
  YS_Q_forge_corde: YS({ title: "La corde",
    text: [
      "Hugues pose son marteau. Il regarde la pile de fers. Puis il prend la pile à bras-le-corps, et il la verse dans le bac à charbon, d'un coup, avec un bruit de cloche qui tombe.",
      "« Une corde, dit-il. C'est plus long à défaire, une corde. Mais ça ne marque pas les poignets. » Il s'essuie les mains. « Votre père aurait dit pareil. » Tu ne sais pas si c'est vrai. Tu ne lui demandes pas.",
    ],
    choices: [{ label: "Retourner dans la cour", fx: { quest: "YS_Q_forge" }, to: "YS_cour" }] }),
  YS_Q_forge_mauvais: YS({ title: "Le fer aigre",
    text: [
      "Hugues te regarde, longtemps. Puis il sourit, pour la première fois depuis que tu es entrée, un sourire de travers dans la barbe noire. « Du fer aigre, dit-il. Trempé trop vite. Ça a l'air de tenir. Ça casse au premier coup de pierre. » Il reprend son marteau. « Je ne sais pas faire de mauvais fers, capitaine. Mais pour vous, je vais apprendre. »",
      "Le soir, il en dépose une paire sur ta table, sans un mot. Tu la prends. Tu la frappes sur le bord de la table. Elle se brise net, en deux, comme du sucre.",
    ],
    choices: [{ label: "Retourner dans la cour", fx: { quest: "YS_Q_forge" }, to: "YS_cour" }] }),
  YS_Q_forge_refus: YS({ title: "Le métier",
    text: ["« Non, dit Hugues. Un mauvais fer, c'est un fer qui casse au mauvais moment. Sur un cheval, sur une herse. Je ne fais pas ça. Pas même pour vous. » Il te regarde. « Si vous ne voulez pas de fers, dites-le. Mais dites-le, capitaine. Ne me demandez pas de mentir à votre place. » Il attend. Tu ne dis rien. Il reprend son marteau."],
    choices: [{ label: "Retourner dans la cour", fx: { quest: "YS_Q_forge", flag: "ysolde:fers=faits" }, to: "YS_cour" }] }),

  // ---------------------------------------------------------------- Vasselin : la couturière
  LI_Q_ourlet: LI({ title: "La couturière de la reine",
    fx: { questSeen: "LI_Q_ourlet" },
    text: [
      "Dans la lingerie du palais, sous les toits, Dame Héloïse coud ta robe pour la Fête. Une robe de soie grise et argent, choisie par la reine elle-même, avec des manches qui traînent. Elle te la fait essayer, piquée d'épingles, et tourne autour de toi en marmonnant.",
      "Puis elle s'agenouille, retourne l'ourlet, et sort une aiguille plus fine, avec un fil rouge. « Le nom, dit-elle. Quel nom je couds ? »",
      "Tu ne comprends pas. Elle soupire, comme devant une enfant. « Au palais, on coud un nom dans l'ourlet de chaque robe de fête. Celui de quelqu'un qu'on aime. Pour qu'il danse avec vous, même s'il n'est pas là. Ça se fait depuis la vieille reine. Vous ne saviez pas ? »",
    ],
    choices: [
      { label: "« Le mien. »", fx: { flag: "lisandre:ourlet=sien" }, to: "LI_Q_ourlet_sien" },
      { label: "« Ilan. »", fx: { flag: "lisandre:ourlet=ilan" }, to: "LI_Q_ourlet_ilan" },
      { label: "« Le vôtre. »", fx: { flag: "lisandre:ourlet=heloise", ep: ["perso", 500] }, to: "LI_Q_ourlet_heloise" },
    ] }),
  LI_Q_ourlet_sien: LI({ title: "Lisandre",
    text: [
      "Elle lève les yeux. « Le vôtre ? Ça ne se fait pas. » Puis elle réfléchit, l'aiguille en l'air. « Mais vous êtes chanteuse. Une chanteuse, ça a besoin de se rappeler qui chante. » Elle coud. Huit lettres, en rouge, à l'envers de la soie, là où personne ne les verra.",
      "Tu les sens, après, quand tu marches. Un petit relief contre ta cheville. Tu n'y penses pas. Tu y penseras.",
    ],
    choices: [{ label: "Redescendre à la cour", fx: { quest: "LI_Q_ourlet" }, to: "LI_cour" }] }),
  LI_Q_ourlet_ilan: LI({ title: "Ilan",
    text: [
      "Elle ne demande pas qui c'est. Elle coud. Quatre lettres. Elle fait un nœud, coupe le fil avec les dents, et dit, sans te regarder : « C'est un nom de Corvanne. » Tu ne réponds pas. Elle lisse l'ourlet. « Je ne l'ai pas cousu. Je n'ai rien vu. Mais il est là. »",
    ],
    choices: [{ label: "Redescendre à la cour", fx: { quest: "LI_Q_ourlet" }, to: "LI_cour" }] }),
  LI_Q_ourlet_heloise: LI({ title: "Héloïse",
    text: [
      "Elle s'arrête. Personne ne lui a jamais demandé ça. Elle a cousu des milliers de noms dans des milliers d'ourlets, depuis quarante ans, des noms d'amants, d'enfants morts, de rois, et jamais le sien.",
      "Elle coud. Lentement. *Héloïse.* Puis elle reste agenouillée, l'aiguille à la main, à regarder les lettres rouges, et elle dit : « Je ne savais pas que c'était si joli, écrit. »",
      "Quand tu pars, elle t'appelle depuis la porte. « Mademoiselle ! Si vous dansez, à la Fête, dansez bien. Je serai là. »",
    ],
    choices: [{ label: "Redescendre à la cour", fx: { quest: "LI_Q_ourlet" }, to: "LI_cour" }] }),

  // ---------------------------------------------------------------- Le camp : les couleurs
  CO_k_couleurs: CO({ title: "Les couleurs du rite",
    text: [
      "Derrière la tente des anciennes, trois vieilles femmes broient les couleurs pour le rite. L'ocre, sur une pierre plate, avec une pierre ronde. La suie, mêlée de graisse de renne, dans un crâne de bouquetin. Et le blanc, la craie du lac, qu'on ne sort que pour la Bouche.",
      "« Assieds-toi, dit la plus vieille, sans lever la tête. C'est ta figure qu'on va peindre. Autant que tu saches avec quoi. » Elle te tend la pierre ronde. Tu broies. C'est long. Ça fait mal aux poignets. Elles chantent en broyant, une chanson à trois notes qui n'a pas de paroles.",
    ],
    choices: [
      { label: "Leur demander ce que veut dire le blanc", fx: { flag: "corbe:blanc", ep: ["perso", 500] }, to: "CO_k_couleurs_blanc" },
      { label: "Broyer en silence, jusqu'au soir", fx: { ep: ["perso", 300], pv: 2 }, to: "CO_camp" },
    ] }),
  CO_k_couleurs_blanc: CO({ title: "Le blanc",
    text: [
      "Les trois vieilles se regardent. La plus vieille arrête de broyer. « Le blanc, c'est pour ce qu'on n'a pas encore dit, dit-elle. On peint ton nom en ocre et en suie. Et autour, le blanc. Tout ce qui reste. »",
      "« Quand une Bouche mange un nom, dit la deuxième, elle le mange avec du blanc autour. Sinon il ne passe pas. » Elle rit, sans dents. « Personne ne sait plus pourquoi. On le fait, c'est tout. »",
      "La troisième, qui n'avait rien dit, ajoute, très bas, en regardant le nord : « Ma grand-mère disait que le blanc, ce n'était pas une couleur. C'était un pays. »",
    ],
    choices: [{ label: "Revenir au camp", to: "CO_camp" }] }),
};
