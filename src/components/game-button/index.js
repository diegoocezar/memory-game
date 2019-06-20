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
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background-color: #2ed573;
        color: #fffcee;
        border: 3px solid #fffcee;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
        transition: opacity 1.5s;
        z-index: 2;
      }

      .game-button:hover {
        background-color: #2E8B57;
        animation: move 1s infinite;
        
      }

      @keyframes move {
        o%   { bottom: 20px;}
        50%  { bottom: 30px;}
        100% { bottom: 20px;}
      }

      .game-button.-blur {
        opacity: 0;
      }

      .game-button.-clicked {
        display: none;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._blur = ($layer, $button) => {
    $layer.classList.add("-clicked");
    $button.classList.add("-clicked");
  };

  module.handleClick = $component => {
    $component.classList.add("-blur");
    const $layer = document.querySelector(".game-layer");
    setInterval(() => {
      $component.classList.add("-clicked");
      $layer.classList.add("-blur");
    }, 1000);

    setInterval(() => $layer.classList.add("-clicked"), 1500);
  };

  module.render = () => {
    module._style();
    return `
      <button class="game-button" onclick="gameButton.handleClick(this)">Start</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
