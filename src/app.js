(function() {
  const { hash } = window.location;
  const path = [];
  path[""] = login;
  path["#/signup"] = signup;
  // path["#/game"] = game;

  path[hash]();
})();
