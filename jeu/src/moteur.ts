// The book's engine, unchanged: livre-hero/src/moteur.js is a plain script that exports itself on `module`. The game
// runs it as is, so a story plays here exactly as in the book (Clément's rule: the engine guarantees the story).
import code from "../../src/moteur.js?raw";

const mod: { exports: any } = { exports: {} };
// eslint-disable-next-line no-new-func
new Function("module", "self", code)(mod, {});

export const M: any = mod.exports;
export const K: any = M.combatKit;
