const labelCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode-${module._id} {
        font-size: 1rem;
        color: #3a4042;
        opacity: .5;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = content => {
    module._id++;
    module._style();

    return `<label class="label-collabcode-${module._id}">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
