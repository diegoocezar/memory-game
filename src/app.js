(function() {
  const { hash } = window.location;
  const path = [];
  path[""] = login;
  path["#/login"] = login;
  path["#/signup"] = signup;
  path["#/game"] = game;
  path["#/404"] = page404;

  //Testa se o hash é true ou false, se for undefined retorna false e vai
  //para o erro
  path[hash] ? path[hash]() : path["#/404"]();

  //Voltar para página anterior com botão do browser e do celular
  window.onpopstate = () => {
    location.reload(true);
  };
})();
