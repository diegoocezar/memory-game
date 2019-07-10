const buttonCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode {
        margin-top: 45px;
        font-size: .9rem;
        font-weight: bold;
        color: #fff;
        background-color: #f25a70;
        border-radius: 24px;
        width: 100%;
        height: 48px;
        text-transform: uppercase;
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._validateEmail = () => {
    const $email = document.querySelector("input[type=email]").value;
    const $messageCollabcode = document.querySelectorAll(".message-collabcode");

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if ($email == 0 || !regex.test($email)) {
      $messageCollabcode[0].classList.add("-active");
      return false;
    } else {
      $messageCollabcode[0].classList.remove("-active");
      return true;
    }
  };

  module._validatePassword = () => {
    const $password = document.querySelector("input[id=password]").value;
    const $messageCollabcode = document.querySelectorAll(".message-collabcode");

    if ($password.length < 6) {
      $messageCollabcode[1].classList.add("-active");
      return false;
    } else {
      $messageCollabcode[1].classList.remove("-active");
      return true;
    }
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    //Teste para validar apenas o login
    if (path == "game") {
      module._validateEmail();
      module._validatePassword();
      if (module._validateEmail() && module._validatePassword()) {
        window.location.hash = `#/${path}`;
        window.location.reload();
      }
    } else {
      window.location.hash = `#/${path}`;
      window.location.reload();
    }
  };
  module.render = ({ content = "", path }) => {
    module._style();

    return `<input class="button-collabcode" 
            type="submit" value="${content}"
            onclick="buttonCollabcode.handleClick(event, '${path}')">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
