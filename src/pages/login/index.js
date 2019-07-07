const login = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({
    content: "login",
    active: true,
    path: "login"
  });
  const $signUpButton = flatButton.render({
    content: "Sign up",
    path: "signup"
  });

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
