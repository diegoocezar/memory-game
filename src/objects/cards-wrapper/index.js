function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  
  .cards-wrapper > .memory-card {
    margin-top: 14px;
  }`;

  $head.insertBefore($style, null);

  return $cardsWrapper;
}
