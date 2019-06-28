(function() {
  const $root = document.querySelector("#root");

  const $signButton = flatButton.render("login");

  const $backButton = flatButton.render("signup", true);

  $root.insertAdjacentHTML("beforeend", $signButton);
  $root.insertAdjacentHTML("beforeend", $backButton);
})();
