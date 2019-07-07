const signup = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({ content: "login", path: "login" });
  const $signUpButton = flatButton.render({
    content: "sign up",
    active: true,
    path: "signup"
  });

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
};
