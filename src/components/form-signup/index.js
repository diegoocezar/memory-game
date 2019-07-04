const formSignup = (function() {
  const module = {};

  module._children = () => {
    const $labelUsername = labelCollabcode.render("Username");
    const $inputUsername = inputCollabcode.render({
      inputType: "text",
      inputPlaceHolder: "Name-example"
    });

    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render({
      inputType: "email",
      inputPlaceHolder: "example@email.com"
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      inputType: "password",
      inputPlaceHolder: "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
    });

    const $labelConfirmPassword = labelCollabcode.render("Confirm password");
    const $inputConfirmPassword = inputCollabcode.render({
      inputType: "password",
      inputPlaceHolder: "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
    });

    const $buttonCollabcode = buttonCollabcode.render("submit");

    return `
      ${$labelUsername}
      ${$inputUsername}

      ${$labelEmail}
      ${$inputEmail}

      ${$labelPassword}
      ${$inputPassword}

      ${$labelConfirmPassword}
      ${$inputConfirmPassword}

      ${$buttonCollabcode}
    `;
  };
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 35px;
        
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
