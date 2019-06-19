const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .game-button {
        position: absolute;
        bottom: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        right: 0;
        background-color: #3CB371;
        color: #FFF;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        text-transform: uppercase;
      }

      .game-button:hover {
        background-color: #2E8B57;
      }

      .game-button.-clicked {
        display: none;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = $component => {
    $component.classList.add("-clicked");
  };

  module.create = () => {
    module._style();
    return `
      <button class="game-button" onclick="gameButton.handleClick(this)">Start</button>
    `;
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
