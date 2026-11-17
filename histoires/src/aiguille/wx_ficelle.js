// L'Île Folle-Aiguille · side story « Le bout de ficelle » (owes its question to La Ficelle: once a small community has
// decided you are guilty, is there any way to be believed?). Act I: on the Varnèse road, on a market Thursday, the child
// stoops to pick up a bit of tarred cord, good for a snare. That same morning, the miller Rannou loses his purse on the
// same road. The harness-maker Malandre, who has a grudge against the Fanal, saw the child stoop. By noon, all of
// Varnèse knows. The child tells everyone the whole story again and again (wx:explique), lets the father answer
// (wx:pere), or keeps silent and waits for the truth to come by itself (wx:tait). Wired in A1_jours.
module.exports = {
  passages: {
    WX_route: { act: "I", title: "Le bout de ficelle", place: "route_varnese", ambiance: "route",
      text: [
        "Le jeudi, Zélie est malade, et c'est toi qu'on envoie au marché de Varnèse avec le panier d'œufs, le beurre et la liste. La route monte entre les talus d'ajoncs, boueuse, creusée d'ornières, pleine de charrettes, de vaches, de femmes en coiffe qui portent des paniers sur la tête et des opinions sur tout. Au tournant de la Croix-Rouge, dans l'ornière, tu vois un bout de ficelle goudronnée, long comme le bras, solide, presque neuf. Ça fera un collet pour les lapins de la lande. Tu te baisses, tu le ramasses, tu le roules, tu le mets dans ta poche.",
        "En te relevant, tu croises le regard de maître Malandre, le bourrelier, assis sur le seuil de son atelier, en face, avec un harnais sur les genoux et une alène à la main. Malandre déteste le Fanal. Il a voulu épouser ta mère, il y a dix-huit ans, et ta mère a épousé ton père, et Malandre a épousé une femme qui lui a fait sept filles et aucun sourire. Il te regarde te relever avec une attention de chat. Il ne dit rien. Tu le salues. Il ne te rend pas ton salut.",
        "À midi, au marché, sous les halles, le meunier Rannou monte sur une caisse et crie qu'il a perdu sa bourse sur la route, ce matin, une bourse de cuir rouge avec quarante écus dedans, le prix de sa farine de la semaine. Il promet une récompense. Il pleure presque. Tu vends tes œufs. Une demi-heure plus tard, le brigadier Fouques te pose la main sur l'épaule.",
      ],
      choices: [{ label: "Suivre le brigadier sous les halles", to: "WX_halles" }] },
    WX_halles: { act: "I", title: "Le bout de ficelle", place: "route_varnese", ambiance: "village",
      text: [
        "Il y a foule. Le meunier, rouge, furieux. Malandre, l'air grave et désolé d'un témoin qui fait son devoir à contrecœur. Le brigadier, sanglé dans son habit vert, qui se lisse la moustache. Malandre explique : il t'a vu{e}, ce matin, au tournant de la Croix-Rouge, ramasser quelque chose dans l'ornière, regarder autour de toi, et le cacher dans ta poche. Il est désolé. Il connaît ton père. Il ne voudrait pas. Mais un honnête homme ne peut pas se taire.",
        "Tu sors la ficelle de ta poche. Tu la montres. Tout le monde regarde la ficelle. Quelqu'un rit. Le meunier dit qu'on ne lui fera pas croire qu'un enfant de seize ans se baisse dans la boue pour un bout de ficelle. Tu dis que c'est pour un collet. On te fouille. On ne trouve rien, que tes sous de la vente des œufs. Le brigadier, embarrassé, dit qu'il n'y a pas de preuve. Malandre dit, doucement, qu'on a pu passer la bourse à un complice, ou la cacher dans un talus, en revenant.",
        "On te laisse partir. Mais en traversant le marché, avec ton panier vide, tu sens les regards. Les femmes en coiffe se penchent les unes vers les autres. Un enfant te montre du doigt. La marchande de fil, qui te donne toujours un sucre d'orge, regarde ailleurs. Il est deux heures de l'après-midi, et tout Varnèse sait que l'enfant du Fanal a trouvé la bourse du meunier Rannou, et qu'il a été assez malin pour s'en débarrasser.",
      ],
      choices: [
        { label: "Raconter ta matinée à tous ceux que tu croises, avec la ficelle à la main", fx: { flag: "wx:explique" }, to: "WX_explique" },
        { label: "Aller au Fanal, et laisser ton père répondre pour toi", fx: { flag: "wx:pere" }, to: "WX_pere" },
        { label: "Ne rien dire à personne, et attendre que la vérité arrive toute seule", fx: { flag: "wx:tait" }, to: "WX_tait" },
      ] },
    WX_explique: { act: "I", title: "Le bout de ficelle", place: "route_varnese", ambiance: "village",
      text: [
        "Tu expliques. Tu reviens sur tes pas, tu arrêtes les gens, tu leur montres la ficelle, tu leur racontes la Croix-Rouge, l'ornière, le collet, les lapins. On t'écoute, poliment, en hochant la tête. Puis on sourit. Tu vois, à chaque sourire, que ton explication est devenue une preuve de plus : l'enfant du Fanal se donne bien du mal pour un bout de ficelle. Un vieux te tape sur l'épaule et dit : « Bien joué, petit{e}. »",
        "Le lendemain, un valet de ferme de Kerlouarn rapporte la bourse au meunier Rannou. Il l'a trouvée dans le fossé, à une demi-lieue de la Croix-Rouge, tombée d'une charrette. Les quarante écus sont dedans. Le meunier le récompense. Tu crois que c'est fini. Tu racontes à tout le monde qu'on a retrouvé la bourse. On t'écoute, poliment. Et l'on dit, à mi-voix, que le valet de Kerlouarn est un ami du Fanal, et que l'enfant a été bien malin de la faire rapporter par un autre, quand ça a commencé à sentir le roussi.",
        "Tu expliques encore. Tu expliques pendant des jours, à tous, au marché, à l'église, sur la grève. Plus tu expliques, plus on sourit. Tu finis par te réveiller la nuit en expliquant, à voix haute, dans ton lit, à des gens qui ne sont pas là. Ton père, un soir, te prend le bout de ficelle des mains, doucement, et le jette au feu. Il dit : « On ne gagne pas ce genre de procès. On le perd moins en se taisant. » Tu le regardes brûler. Il brûle mal, à cause du goudron, en faisant une fumée noire qui sent la corde des pendus.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "WX" }, back: "A1_jours" }] },
    WX_pere: { act: "I", title: "Le bout de ficelle", place: "fanal_salle", ambiance: "village",
      text: [
        "Tu rentres. Tu racontes tout à ton père, au comptoir, d'une traite, en pleurant de rage. Il t'écoute en essuyant une chope. Il ne dit rien. Puis il pose la chope, ôte son tablier, prend sa canne, et il part pour Varnèse, à pied, en boitant, une lieue, sans un mot. Tu le suis de loin. Tu ne l'as jamais vu marcher aussi vite avec sa jambe raide.",
        "Il va droit à l'atelier de Malandre. Tu restes au coin de la rue. Tu ne sais pas ce qu'il lui dit. Ça dure cinq minutes. Il ne crie pas. Malandre, sur son seuil, devient blanc, puis rouge, puis blanc. Quand ton père ressort, Malandre reste assis, l'alène à la main, sans bouger, à regarder le harnais sur ses genoux comme s'il ne savait plus ce que c'était.",
        "Le lendemain, on retrouve la bourse, tombée d'une charrette dans un fossé. On ne parle plus de toi. On a peur de ton père, voilà tout, d'une peur que tu ne comprends pas, toi qui le connais, et que les gens de Varnèse ont l'air de comprendre très bien. Tu lui demandes, le soir, ce qu'il a dit à Malandre. Il dit : « Je lui ai rappelé quelque chose qu'il avait oublié. » Puis il ajoute : « Tu sauras un jour ce qu'on peut faire d'un passé, quand on en a un. Le plus tard possible. »",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "WX" }, back: "A1_jours" }] },
    WX_tait: { act: "I", title: "Le bout de ficelle", place: "route_varnese", ambiance: "village",
      text: [
        "Tu te tais. Tu rentres au Fanal avec ton panier vide. Tu ne dis rien à ton père, rien à Zélie. Le jeudi suivant, tu retournes au marché, avec les œufs, la tête haute, et tu vends tes œufs, et tu ne réponds à rien, ni aux sourires, ni aux chuchotements. Tu as décidé que la vérité était comme une marée : qu'il suffisait de l'attendre.",
        "Elle arrive. Un valet de ferme rapporte la bourse au meunier, trouvée dans un fossé, tombée d'une charrette. Le meunier, honteux, vient lui-même au Fanal, un dimanche, en habit, s'excuser auprès de toi et de ton père, et payer une tournée à toute la salle. Il te donne un écu. Malandre ne vient pas. Malandre ne viendra jamais.",
        "Mais quelque chose reste. Tu le sens, au marché, les jeudis suivants : un léger retard dans le sourire de la marchande de fil, un regard qui s'attarde sur tes mains quand tu rends la monnaie, un *tiens, le voilà* chuchoté derrière toi. La bourse est retrouvée. Le soupçon, lui, est resté au marché, sous les halles, et personne ne viendra le rapporter. Tu apprends à vivre avec. C'est une leçon de seize ans. Tu en auras besoin plus tard, avec d'autres gens, sur d'autres quais.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "WX" }, back: "A1_jours" }] },
  },
  extras: {
    quests: [
      { id: "WX", act: "I", kind: "annexe", title: "Le bout de ficelle", start: "WX_route", doit: "ficelle", echo: ["wx:explique", "wx:pere", "wx:tait"] },
    ],
  },
};
