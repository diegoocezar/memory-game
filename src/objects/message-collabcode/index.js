const messageCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .message-collabcode {
        color: red;
        position: absolute;
        transform: translateY(300%);
        display: none;
      }

      .message-collabcode.-active {
        display:inline;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = message => {
    module._style();
    return `
      <p class="message-collabcode">${message}</p>
    `;
  };

  return {
    render: module.render
  };
})();
