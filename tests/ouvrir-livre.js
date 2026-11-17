// Intent: book(Page, title) -> Locator = the card of a book of the library. In the « Carnet » look (11.9) the books
// stand on shelves, spine out, and the card opens when the spine is touched; the « Classique » look shows the cards.
module.exports = async function book(pg, title) {
  var spine = pg.locator(".spine", { hasText: title }).first();
  if (await spine.count() && await spine.getAttribute("aria-expanded") !== "true") await spine.click();
  return pg.locator("article.card").filter({ hasText: title }).first();
};
