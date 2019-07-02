const gameLogo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .game-logo {
      position: absolute;
      text-align: center;
      top: 102px;
      left: 50%;
      transform: translateX(-50%);
    }

    .logo-background {
      background: #fff;
      width: 252px;
      height: 252px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .gueio {
      width: 171px;
      height: 175px;
    }

    .header {
      color: #f25a70;
      text-transform: uppercase;
    }
    
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
    <section class="game-logo">
      <div class="logo-background">
        <img class="gueio" src="img/icon-collabcode.png" alt="Gueio, mascote da collab code">
      </div>
      <h1 class="header">${content}</h1>
    </section>
    <p>asdoiuhasodfih</p>
    `;
  };

  return {
    render: module.render
  };
})();
