const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        background: ${active ? "#f25a70" : "#eae6da"};
        color: #F2F2F2;
        font-size: 20px;
        font-weight: bold;
        width: 50vw;
        height: 15vh;
        text-transform: uppercase;
        border: none;
        box-sizing: border-box;
        padding-bottom: 1.5rem;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = path => {
    console.log(path);
    window.location.hash = `#/${path}`;
    window.location.reload();
  };

  module.render = ({ content = "", active = false, path = "login" }) => {
    module._id++;
    module._style(active);
    return `<button 
            class="flat-button-${module._id}"
            onclick="flatButton.handleClick('${path}')"
            >${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
