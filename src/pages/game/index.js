const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da Collabcode"
);
const $memoryCardTurned = createMemoryCard(
  "img/icon-c.png",
  "Ícone de um livro da linguagem c++",
  "-turned"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTurned);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTurned);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
