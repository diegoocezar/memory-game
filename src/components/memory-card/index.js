function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `<img 
                    src='img/icon-collabcode.png' 
                    alt='Gueio mascote da Collabcode' 
                    class='icon'></img>`;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function creatememoryCardTurned() {
  const $memoryCardTurned = document.createElement("article");

  const $iconC = `<img 
                  src="img/icon-c.png" 
                  alt="Ícone de um livro da linguagem c++" 
                  class="icon"></img>`;

  $memoryCardTurned.classList.add("memory-card", "-turned");

  $wrapCards.insertBefore($memoryCardTurned, null);

  $memoryCardTurned.insertAdjacentHTML("afterbegin", $iconC);
}
