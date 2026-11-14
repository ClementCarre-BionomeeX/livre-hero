// Act III · two more sights of Ellerune, the hamlet in the black forest (the child leads, "tu" masculine), off
// III_e_hameau: a boy on a roof who has watched the southern path since "this morning" (twenty years, up there) for
// Maëra's little one, and expects a child of two (iii:guetteur); and the windowsill of the empty house, where twenty
// villagers each carved an animal that same morning, still fresh (iii:jouets).
var A = { act: "III", noLead: true, place: "enfance" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_e_hameau" }];
module.exports = {
  III_el_guetteur: P({ title: "Le guetteur",
    text: [
      "Sur le toit de chaume de la maison la plus haute, un garçon est assis, les genoux sous le menton, une corne de bœuf en bandoulière. Il regarde le sentier du sud, celui par lequel tu es arrivé. Il ne te regarde pas, toi. Il regarde derrière toi, plus loin, au bout du sentier, là où les arbres noirs se referment.",
      "Tu lui demandes ce qu'il guette. « Le petit de Maëra, dit-il, sans quitter le sentier des yeux. On l'a emmené par là, ce matin. Un homme des villes, avec une lanterne, l'a pris dans ses bras. Je suis monté ici pour le voir revenir. Quand il reviendra, je sonnerai la corne. » Il a dix ans. Pour lui, c'était ce matin. Là-haut, ce matin dure depuis vingt ans. Il guette un enfant de deux ans dans les bras d'un homme.",
    ],
    choices: [
      { label: "« C'est moi. Le petit de Maëra. »", fx: { flag: "iii:guetteur", ep: ["perso", 800] }, to: "III_el_guetteur_moi" },
      { label: "Le laisser guetter", to: "III_el_guetteur_laisser" },
    ] }),
  III_el_guetteur_moi: P({ title: "La corne",
    text: [
      "Il tourne la tête vers toi, enfin. Il te regarde de haut en bas, longtemps, avec une méfiance de petit garçon à qui on a déjà fait des farces. « Tu es trop grand », dit-il. Tu dis que ça arrive, quand on part un matin et qu'on revient vingt ans après. Il réfléchit. Il regarde le sentier. Il te regarde. Il regarde tes yeux, qui sont les yeux de Maëra.",
      "Il porte la corne à sa bouche, et il sonne. Une note longue, rauque, qui fait lever la tête à tout le hameau. Les gens sortent sur les seuils. Ils ne savent pas pourquoi la corne sonne. Elle n'a jamais sonné. Le garçon redescend du toit, en glissant sur le chaume, et il atterrit devant toi, et il te tend la corne. « Tiens, dit-il. Je n'en ai plus besoin. Je vais jouer, maintenant. »",
    ],
    choices: BACK }),
  III_el_guetteur_laisser: P({ title: "Le sentier du sud",
    text: ["Tu te tais. Il ne te reconnaîtrait pas : tu n'as plus deux ans, et personne ne te porte. Tu le laisses sur son toit, la corne contre lui, les yeux sur le sentier. En partant, tu te retournes. Il n'a pas bougé. Il guettera jusqu'à ce que quelqu'un d'autre lui dise que c'est fini, ou jusqu'à ce que le monde se souvienne de lui assez fort pour qu'il ait le droit de grandir. Ce n'est pas à toi de le lui dire. Ou c'est à toi, et tu ne l'as pas fait."],
    choices: BACK }),
  III_el_jouets: P({ title: "Le rebord de la fenêtre",
    text: [
      "Sur le rebord de la fenêtre de la maison vide, celle du berceau, une rangée de petits animaux de bois, sculptés au couteau. Un renard. Une chouette. Un lièvre. Un ours. Un cerf. Vingt, alignés. Ils sont tous blonds, frais, ils sentent la sève et le copeau, comme s'ils sortaient du couteau. Vingt mains différentes : on le voit à la façon de faire les oreilles.",
      "Une femme passe, un fagot sur l'épaule. Elle voit que tu regardes. « Ce matin, dit-elle. Quand on l'a vu partir, chacun est rentré chez soi et en a taillé un. Pour le petit de Maëra. Pour quand il reviendra, ce soir. Il faut bien qu'il ait des jouets. » Elle s'éloigne. Elle ne t'a pas reconnu. Tu as vingt ans de trop pour qu'on te reconnaisse. Les jouets n'ont pas pris une ride.",
    ],
    choices: [
      { label: "Prendre le dernier, le plus clair, et le garder", fx: { flag: "iii:jouets", ep: ["perso", 600] }, to: "III_el_jouets_dernier" },
      { label: "Les compter, un par un, et les laisser où ils sont", fx: { ep: ["perso", 300] }, to: "III_el_jouets_compter" },
    ] }),
  III_el_jouets_dernier: P({ title: "Le vingtième",
    text: ["Tu prends le dernier de la rangée. Un loir, roulé en boule, qui dort, la queue sur le nez. Il tient dans le creux de ta main. Il est encore un peu collant de sève. Tu le mets dans ta poche, contre ta cuisse. Sur le rebord, il reste dix-neuf animaux, et une place vide au bout de la rangée. Ce soir, quelqu'un verra la place vide. Il croira qu'un enfant de deux ans est passé, et qu'il a choisi le loir. Il n'aura pas tort."],
    choices: BACK }),
  III_el_jouets_compter: P({ title: "Vingt",
    text: ["Tu les comptes, de la main, sans les toucher tout à fait. Vingt. Vingt mains. Vingt personnes qui se sont assises, le matin où tu es parti, avec un couteau et un bout de bois, et qui ont pensé à toi assez longtemps pour en faire un renard. Tu ne prends rien. Ils sont à toi, déjà. Ils sont mieux là, sur le rebord, à t'attendre, que dans ta poche. Tu as appris ça, au moins, depuis Sauvelune : il y a des choses qui servent à attendre."],
    choices: BACK }),
};
