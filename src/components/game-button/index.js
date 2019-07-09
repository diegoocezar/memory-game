const gameButton = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .game-button-${module._id} {
        width: 80px;
        height: 80px;
        position: absolute;
        border-radius: 20px;
        color: #fffcee;
        border: 3px solid #fffcee;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
        transition: opacity 600ms linear, transform 500ms linear;
      }

      .game-button-${module._id}.-start {
        bottom: 70%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #27ae60;
      }
      
      .game-button-${module._id}.-back {
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e67e22;
      }

      .game-button-${module._id}.-return:hover {
        background-color: #ff7f50;
        animation: move 800ms infinite;
      }
      
      .game-button-${module._id}.-start:hover {
        background-color: #2E8B57;
        animation: move 800ms infinite;
      }
  
      @keyframes move {
        o%   { transform: translateX(-50%);}
        50%  { transform: translateX(-50%) translateY(-10%);}
        100% { transform: translateX(-50%);}
      }

      .game-button-${module._id}.-blur {
        opacity: 0;
        animation: none;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = ($component, path, event) => {
    if (path != "undefined") {
      window.location.hash = `#/${path}`;
      window.location.reload();
    } else {
      event.preventDefault();
      const $startLayer = document.querySelector(".start-layer");
      $component.classList.remove("-button");
      const $button = document.querySelector(".-button");

      $component.classList.add("-blur");
      $button.classList.add("-blur");
      $startLayer.classList.add("-blur");
      setTimeout(() => {
        $component.remove();
        $button.remove();
        $startLayer.remove();
      }, 800);
    }
  };

  module.render = ({ buttonClass, content, path }) => {
    module._id++;
    module._style();
    return `
      <input class="game-button-${
        module._id
      } ${buttonClass} -button" type="submit" value="${content}" onClick="gameButton.handleClick(this, '${path}', event)">
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
