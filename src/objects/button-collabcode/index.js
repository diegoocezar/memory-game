const buttonCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode {
        margin-top: 15px;
        font-size: .9rem;
        font-weight: bold;
        color: #fff;
        background-color: #f25a70;
        border-radius: 24px;
        width: 302px;
        height: 48px;
        text-transform: uppercase;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = content => {
    module._style();

    return `<button class="button-collabcode">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
