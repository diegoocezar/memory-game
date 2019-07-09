const buttonBar = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .button-bar-${module._id} {
        width: 80px;
        height: 2rem;
        border-radius: 20px;
        color: #fffcee;
        border: 3px solid #fffcee;
        font-size: .8rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        
      }

      .button-bar-${module._id}.-exit {
        position: absolute;
        top: 7px;
        left: 5px;
        background-color: #c0392b;
      }

      .button-bar-${module._id}.-restart {
        position: absolute;
        top: 7px;
        left: 95px;
        background-color: #2980b9;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (path, event) => {
    if (path != "undefined") {
      window.location.hash = `#/${path}`;
      window.location.reload();
    } else {
      event.preventDefault();
      const $memoryCards = document.querySelectorAll(".memory-card");
      $memoryCards.forEach($card => {
        $card.classList.remove("-active", "-right");
        store.score = 0;
        scoreBar.score();
      });
    }
  };

  module.render = ({ content, buttonClass, path }) => {
    module._id++;
    module._style();

    return `<input class="button-bar-${
      module._id
    } ${buttonClass}" type="submit" value="${content}" 
    onclick="buttonBar.handleClick('${path}', event)">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
