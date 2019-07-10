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
    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render({
      type: "email",
      placeholder: "example@email.com",
      required: "true"
    });

    const $labelPassword = labelCollabcode.render("Password");

    const $inputPassword = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "your password",
      required: "true"
    });

    const $eyeCollabcode = eyeCollabcode.render({
      attrFor: "password"
    });

    const $linkCollabcode = linkCollabcode.render({
      href: "#",
      content: "Forget password ?"
    });

    const $buttonLogin = buttonCollabcode.render({
      content: "login",
      path: "game"
    });

    const $invalidEmail = messageCollabcode.render("type a valid email");
    const $invalidPassword = messageCollabcode.render("min 6 digits");

    return `
      ${$labelEmail}
      ${$invalidEmail}
      ${$inputEmail}
      
      ${$labelPassword}
      ${$invalidPassword}
      ${$inputPassword}
      ${$eyeCollabcode}

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
