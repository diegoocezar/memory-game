const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        font-size: 1.1rem;
        line-height: 20px;
        height: 20px;
        color: #3a4042;
        padding: 12px 0;
        width: 100%;
        border-bottom: 2px solid rgba(58, 64, 66, .5);
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (inputType, inputName, inputId, inputPlaceHolder) => {
    module._style();
    return `<input class="input-collabcode" type="${inputType}" name="${inputName}" id="${inputId}" placeholder="${inputPlaceHolder}" />`;
  };

  return {
    render: module.render
  };
})();
