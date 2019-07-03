const labelCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode {
        font-size: 1rem;
        color: #3a4042;
        opacity: .5;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = (labelTitle, content) => {
    module._style();
    return `<label class="label-collabcode" for="${labelTitle}">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
