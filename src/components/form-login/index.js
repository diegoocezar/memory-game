const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 35px;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("Username ou e-mail");
    const $inputEmail = inputCollabcode.render({
      placeholder: "example@email.com"
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      type: "password",
      placeholder: "* * * * *"
    });

    const $linkCollabcode = linkCollabcode.render({
      href: "#",
      content: "Forget password ?"
    });

    const $buttonLogin = buttonCollabcode.render("login");

    return `
      ${$labelEmail}
      ${$inputEmail}

      ${$labelPassword}
      ${$inputPassword}

      ${$linkCollabcode}

      ${$buttonLogin}
    `;
  };
  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="GET">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
