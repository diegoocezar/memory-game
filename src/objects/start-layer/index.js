const startLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .start-layer {
        background-color: #000;
        width: 100vw;
        height: 100vh;
        bottom: 0;
        position: absolute;
        opacity: 0.5;
        transition: opacity 500ms 500ms linear;
      }

      .start-layer.-blur {
        opacity: 0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <div class="start-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();
