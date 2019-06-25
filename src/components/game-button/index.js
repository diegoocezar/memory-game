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
        transition: opacity 600ms linear, transform 500ms linear;
        
      }

      .game-button:hover {
        background-color: #2E8B57;
        animation: move 500ms infinite;
      }

      @keyframes move {
        o%   { bottom: 20px;}
        50%  { bottom: 30px;}
        100% { bottom: 20px;}
      }

      .game-button.-blur {
        opacity: 0;
        animation: none;
        transform: translate(-50%, -10%) scale(1.5);
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <button class="game-button">${content}</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
