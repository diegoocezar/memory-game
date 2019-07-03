(function() {
  const $root = document.querySelector("#root");

  const $signButton = flatButton.render("login");
  const $backButton = flatButton.render("sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");

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

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  // const $gameLogo = gameLogo.render("Welcome!");

  $root.insertAdjacentHTML("beforeend", $signButton);
  $root.insertAdjacentHTML("beforeend", $backButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelUsername);
  $root.insertAdjacentHTML("beforeend", $inputUsername);
  $root.insertAdjacentHTML("beforeend", $labelEmail);
  $root.insertAdjacentHTML("beforeend", $inputEmail);
  $root.insertAdjacentHTML("beforeend", $labelPassword);
  $root.insertAdjacentHTML("beforeend", $inputPassword);
  $root.insertAdjacentHTML("beforeend", $labelConfirmPassword);
  $root.insertAdjacentHTML("beforeend", $inputConfirmPassword);
})();
