const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .game-button {
        width: 80px;
        height: 80px;
        position: absolute;
        border-radius: 20px;
        color: #fffcee;
        border: 3px solid #fffcee;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
        transition: opacity 600ms linear, transform 500ms linear;
      }

      .game-button.-start {
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ed573;
      }

      // Em breve aplicarei  novo botão
      // .game-button.-restart {
      //   display: none;
      //   top: 2px;
      //   left: 5px;
      //   width: 100px;
      //   height: 40px;
      //   font-size: 1rem;
      //   background-color: #e67e22;
      // }
      
      .game-button.-start:hover {
        background-color: #2E8B57;
        animation: move 800ms infinite;
      }
  
      @keyframes move {
        o%   { bottom: 50%;}
        50%  { bottom: 52%;}
        100% { bottom: 50%;}
      }

      .game-button.-blur {
        opacity: 0;
        animation: none;
        transform: translate(-50%, -10%) scale(1.5);
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = $component => {
    const $startLayer = document.querySelector(".start-layer");
    $component.classList.add("-blur");
    $startLayer.classList.add("-blur");
    setTimeout(() => {
      $component.remove();
      $startLayer.remove();
    }, 800);
  };

  module.render = (typeOfButton, content) => {
    module._style();
    return `
      <button class="game-button ${typeOfButton}" onClick="gameButton.handleClick(this)">${content}</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
