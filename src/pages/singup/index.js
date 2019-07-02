(function() {
  const $root = document.querySelector("#root");

  const $signButton = flatButton.render("login");
  const $backButton = flatButton.render("sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  // const $gameLogo = gameLogo.render("Welcome!");

  $root.insertAdjacentHTML("beforeend", $signButton);
  $root.insertAdjacentHTML("beforeend", $backButton);
  // $root.insertAdjacentHTML("beforeend", $gameLogo);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  // $root.insertAdjacentHTML("beforeend", $titleCollabcode);
})();
