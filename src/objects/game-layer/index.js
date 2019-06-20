const gameLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .game-layer {
        background-color: #000;
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 1;
        opacity: 0.5;
        transition: opacity 1s;
      }

      .game-layer.-blur {
        opacity: 0;
      }

      .game-layer.-clicked {
        display: none;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <section class="game-layer"></section>
    `;
  };

  return {
    render: module.render
  };
})();
