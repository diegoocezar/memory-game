const buttonCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode {
        margin-top: 45px;
        font-size: .9rem;
        font-weight: bold;
        color: #fff;
        background-color: #f25a70;
        border-radius: 24px;
        width: 100%;
        height: 48px;
        text-transform: uppercase;
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = content => {
    module._style();

    return `<input class="button-collabcode" type="submit" value="${content}">`;
  };

  return {
    render: module.render
  };
})();
