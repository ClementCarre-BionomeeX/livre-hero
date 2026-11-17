// « L'Île Folle-Aiguille ». Merges the story base (base.js) with the writing lots, in the order of LOTS. Each lot exports
// { passages: {...}, extras: {...} }; extras may add people, items, enemies, clues, mysteries, quests, places, routes,
// regions, events, shops, companions, escales, puzzles, battles, banter, epilogue, glossary. A key declared twice is an
// error, so a later lot cannot overwrite an earlier one by mistake.
var base = require("./base.js");
base.passages = base.passages || {};
var LOTS = ["p_fanal", "a1_fanal", "wb_katell", "wc_lannoz", "wd_tourbiere", "we_vareuse", "wf_rospabu", "wg_tour", "wh_muet", "zz_lettre", "zb_domaine", "yp_caveau", "xa_fanal", "a1_nuit", "a1_victorine", "zk_ollivier", "xl_varnese", "a1_depart", "xk_parchemin", "xk_plus", "a2_carrefour", "a2_mousse", "zu_treteaux", "zo_gourves", "yr_greve", "yn_revenant", "ye_marais", "a2_victorine", "zv_directeur", "zf_cresson", "ys_lettre", "yi_soeur", "yc_pharaon", "xg_morlenc", "a2_veille", "a2_fargue", "xr_fargue", "zj_clerc", "yt_pere", "xc_chien", "xj_chirurgien", "xe_vendu", "xe_oncle", "xb_freres", "xb_plus", "a3_carrefour", "a3_mousse1", "zm_libere", "yz_lettres", "yj_canon", "yg_scribe", "xi_invisible", "xm_prisonnier", "esc_brisegreve", "a3_victorine1", "zc_malade", "yy_condamne", "yh_portrait", "xj_bord", "xj_plus", "xv_bord", "ya_marque", "xn_bord", "a3_mousse2", "zl_plongeur", "zh_eloge", "za_gouffre", "ym_quart", "xo_baleine", "a3_victorine2", "zw_negrier", "yf_canot", "yb_albatros", "a3_fargue", "zs_charpentier", "yx_partie", "xh_fargue", "xp_pierre", "esc_ecueil", "zi_canot", "xf_faconneur", "xf_plus", "esc_ilot", "a3_lannoz", "zt_montre", "zn_grenier", "ze_ferme", "yv_arsenic", "xe_lannoz", "esc_lannoz", "a4_carrefour", "a4_mousse1", "a4_victorine1", "a4_mousse2", "yl_calendrier", "xi_ile", "xc_ile", "xu_cloche", "xd_peuples", "xd_peuples2", "xt_plateau", "xt_plateau2", "a4_victorine2", "wa_cabane", "zy_parapet", "zg_veillee", "zd_mort", "yo_canonniere", "yd_statue", "xs_proscrits", "xs_proscrits2", "xy_ile", "a4_fargue", "zp_tablier", "yq_loi", "yk_lettre", "a4_mousse3", "xb_ile", "a5_carrefour", "a5_mousse1", "xw_croix", "a5_victorine1", "a5_mousse2", "a5_victorine2", "a5_fargue", "a5_mousse3", "zx_passager", "zq_muguet", "yw_matin", "a5_victorine3", "zr_fondeuse", "xz_nef", "fins", "destins"];
var DICTS = ["people", "items", "enemies", "clues", "mysteries", "shops", "achievements", "companions", "escales", "puzzles", "battles", "lenses", "veils", "duels", "wounds", "stocks", "promises", "trouvailles", "keywords", "savoirs", "endings"];
var WORLD_DICTS = ["places", "regions", "events"];
LOTS.forEach(function (f) {
  var m;
  try { m = require("./" + f + ".js"); } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f + ".js") >= 0) return;
    throw e;
  }
  var ps = m.passages || {}, ex = m.extras || {};
  Object.keys(ps).forEach(function (k) {
    if (base.passages[k]) throw new Error("passage en double : " + k + " (" + f + ")");
    base.passages[k] = ps[k];
  });
  DICTS.forEach(function (d) {
    Object.keys(ex[d] || {}).forEach(function (k) {
      base[d] = base[d] || {};
      if (base[d][k]) throw new Error(d + " en double : " + k + " (" + f + ")");
      base[d][k] = ex[d][k];
    });
  });
  WORLD_DICTS.forEach(function (d) {
    Object.keys(ex[d] || {}).forEach(function (k) {
      if (base.world[d][k]) throw new Error("world." + d + " en double : " + k + " (" + f + ")");
      base.world[d][k] = ex[d][k];
    });
  });
  (ex.routes || []).forEach(function (r) {
    if (base.world.routes.some(function (x) { return x.id === r.id; })) throw new Error("route en double : " + r.id + " (" + f + ")");
    base.world.routes.push(r);
  });
  (ex.quests || []).forEach(function (q) {
    if (base.quests.some(function (x) { return x.id === q.id; })) throw new Error("quête en double : " + q.id + " (" + f + ")");
    base.quests.push(q);
  });
  ["banter", "epilogue", "fates", "dreams", "vigils"].forEach(function (k) { (ex[k] || []).forEach(function (b) { base[k] = base[k] || []; base[k].push(b); }); });
  Object.keys(ex.glossary || {}).forEach(function (k) { base.glossary[k] = ex.glossary[k]; });
  Object.keys(ex.lore || {}).forEach(function (k) { base.lore.names[k] = ex.lore[k]; });
});
module.exports = base;
