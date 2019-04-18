const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();

// createMemoryCard();
// createMemoryCard();
// createMemoryCard();
// createMemoryCard();
// createMemoryCard();

// creatememoryCardTurned();
const $memoryCardTurned = creatememoryCardTurned();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTurned);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTurned);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
