const inputCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode-${module._id} {
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

      .label-collabcode-${module._id + 1} {
        margin-top: 35px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({
    id = "",
    type = "text",
    placeholder = "",
    required = "false"
  }) => {
    module._id++;
    module._style();

    return `<input 
            id="${id}"
            class="input-collabcode-${module._id}" 
            type="${type}" 
            placeholder="${placeholder}"
            required="${required}" />`;
  };

  return {
    render: module.render
  };
})();
