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
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
    
  }
  
  .cards-wrapper > .memory-card .card {
    margin-bottom: 14px;
  }`;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    store.qtdMemoryCardActive = $cardsWrapper.querySelectorAll(
      ".memory-card.-active:not(.-right)"
    ).length;
  });

  return $cardsWrapper;
}
