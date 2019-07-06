const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        background-image: url(img/eye-slash.svg);
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        text-indent: -9999px;
        width: 30px;
        height: 20px;
        opacity: .5;
        margin-left: 87%;
        transform: translateY(-160%);

      }

      .eye-collabcode.-active {
        
        background-image: url(img/eye.svg);

        
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = function() {
    const $attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${$attrFor}`);

    if ($input.getAttribute("type") == "password") {
      $input.setAttribute("type", "text");
      this.classList.add("-active");
    } else {
      $input.setAttribute("type", "password");
      this.classList.remove("-active");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();
    return `<label 
              for="${attrFor}"
              class="eye-collabcode" 
              onclick="eyeCollabcode.handleClick.bind(this)()">Mostrar senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
