(function() {
  const $root = document.querySelector("#root");

  const $signButton = flatButton.render("login");
  const $backButton = flatButton.render("sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");

  const $labelCollabcode = labelCollabcode.render("email", "E-mail");
  const $inputCollabcode = inputCollabcode.render(
    "email",
    "email",
    "email",
    "example@email.com"
  );

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  // const $gameLogo = gameLogo.render("Welcome!");

  $root.insertAdjacentHTML("beforeend", $signButton);
  $root.insertAdjacentHTML("beforeend", $backButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelCollabcode);
  $root.insertAdjacentHTML("beforeend", $inputCollabcode);
})();
