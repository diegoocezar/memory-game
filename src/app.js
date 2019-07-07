(function() {
  const { hash } = window.location;
  const path = [];
  path[""] = login;
  path["#/login"] = login;
  path["#/signup"] = signup;
  // path["#/"] = page404;
  path["#/game"] = game;

  path[hash]();
})();
