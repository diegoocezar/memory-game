const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .logo-wrapper {
          text-align: center;
          transform: translateY(-25%);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <div class="logo-wrapper">${$children.join("")}</div>
    `;
  };

  return {
    render: module.render
  };
})();
