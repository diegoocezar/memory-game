const page404 = function() {
  const $root = document.querySelector("#root");

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("404 error");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  $root.insertAdjacentHTML("beforeend", $logoWrapper);
};
