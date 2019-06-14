const memoryCard = (function() {
  const module = {};
  module.create = () => {
    const $head = document.querySelector("head");

    const $style = document.createElement("style");
    $style.textContent = `
  .memory-card{
    width: 100px;
    height: 100px;
    position: relative;
    margin-bottom: 10px;

    
  }
  .memory-card .card {
    width: 100px;
    height: 100px;
    background-color: #f25a70;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
    position: absolute;
  }
  
  .memory-card .card.-turned {
    background-color: #fff;
  
  }

  .memory-card.-active .card {
    display: none;
  }
  
  .memory-card.-active .card.-turned {
    display: flex;
  }

  .card.-turned::before {
    content: "";
    width: 90px;
    height: 90px;
    position: absolute;
    background-color: #d4d4d4;
    border-radius: 50%;
  }
  
  .card > .icon {
    width: 80px;
    position: absolute;
  }
  .card.-turned > .icon {
    position: absolute;
    transform: translateY(-14px);
  }
  `;

    $head.insertBefore($style, null);

    return ({ src, alt }) => `
    <div class="memory-card" onClick="memoryCard.handleClick(this)">
      <article class="card -turned">
        <img 
            src='${src}' 
            alt= '${alt}'
            class='icon' >
        </img> 
      </article>
      <article class="card">
      <img 
          src='img/icon-collabcode.png' 
          alt= 'Mascote da CollabCode'
          class='icon' ">
      </img> 
    </article>
    </div>
  `;
  };

  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._isRight();
    }
  };

  module._activeMemoryCard = $component => {
    store.qtdMemoryCardActive < 2 ? $component.classList.add("-active") : "";
  };

  module._isRight = () => {
    if (store.qtdMemoryCardActive === 1) {
      let $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active:not(.-right)"
      );

      if (
        $activeMemoryCards[0]
          .querySelector(".-turned .icon")
          .getAttribute("src") ===
        $activeMemoryCards[1]
          .querySelector(".-turned .icon")
          .getAttribute("src")
      ) {
        $activeMemoryCards[0].classList.add("-right");
        $activeMemoryCards[1].classList.add("-right");
        store.score++;

        console.log("pontuação: ", store.score);
      } else {
        setTimeout(() => {
          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          store.qtdMemoryCardActive = 0;
        }, 1100);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
/* Mantive como principal a forma de criar um objeto chamado module que contém todas as funções da minha IIFE (Immediately Invoked Function Expressions) e as funções que preciso expor para fora do escopo são passadas no return, as que deveriam ser privadas estão com um "underline" na frente para deixar mais declarativo que são funções privadas (essa forma de declaração pode varia de time para time) 


Outra forma de fazer o return é criando as funcões e atribuindo a uma constante e depois retornando as constantes que queremos que estejam disponíveis para serem acessadas em outros escopos

 const create = () => {
    .
    . Conteúdo da função create
    .
  };

  const handleClick = $component => {
    .
    . Conteúdo da função handleClick
    .
  };

  const activeMemoryCard = $component => {
    .
    . Conteúdo da função activeMemoryCard
    .
  };

  const isRight = () => {
    .
    . Conteúdo da função isRight
    .
  };

  return {
    create,
    handleClick
  };



 Outra forma de fazer o return é colocando a função diretamente no objeto JSON
  
  return {
    create: () => {
      .
      . Conteúdo da função create
      .
    },
    handleClick: () => {
      .
      . Conteúdo da função handleClick
      .
    }
  }
  */
