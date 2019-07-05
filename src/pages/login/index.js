(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({ content: "login", active: true });
  const $signUpButton = flatButton.render({ content: "Sign up" });

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();
