const logoCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-collabcode {
        background-color: white;
        display: inline-block;
        
        border: solid 5vw white;
        border-radius: 50%;
      }

      .logo-collabcode > .logo {
        width: 30vw;
      }

    `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();
    return `
    <figure class="logo-collabcode">
      <img class="logo" src="img/icon-collabcode.png" alt="Gueio, mascote da collab code">
    </figure>`;
  };
  return {
    render: module.render
  };
})();
