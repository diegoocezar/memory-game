let qtdMemoryCardActive = 0;
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
    padding-top: 10px;
    width: 100vw;
  }
  
  .cards-wrapper > .memory-card .card {
    margin-bottom: 14px;
  }`;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    qtdMemoryCardActive = $cardsWrapper.querySelectorAll(".memory-card.-active")
      .length;
  });

  return $cardsWrapper;
}
