(function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();

  const $createMemoryCard = memoryCard.create();

  let $memoryCard = [];

  const $memoryCardC = $createMemoryCard({
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem c++",
    nameClass: "-turned"
  });

  const $memoryCardJS = $createMemoryCard({
    src: "img/icon-js.png",
    alt: "Ícone de um livro da linguagem JS",
    nameClass: "-turned"
  });

  const $memoryCardJava = $createMemoryCard({
    src: "img/icon-java.png",
    alt: "Ícone de um livro da linguagem Java",
    nameClass: "-turned"
  });

  const $memorycardSettings = $createMemoryCard({
    src: "img/icon-settings.png",
    alt: "Ícone de Settings",
    nameClass: "-turned"
  });
  for (var i = 0; i < 2; i++) {
    $memoryCard.push($memoryCardC);
    $memoryCard.push($memorycardSettings);
    $memoryCard.push($memoryCardJS);
    $memoryCard.push($memoryCardJava);
  }

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard.join(""));
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memorycardSettings);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memorycardSettings);

  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
