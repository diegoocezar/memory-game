const scoreBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .score-bar {
        background-color: #3a4042;
        height: 40px;
        width: 70vw;
        margin-right: auto;
        margin-left: auto;
        
        border-radius: 0 0 20px 20px;

        text-align: center;
        font-family: 'Comfortaa', sans-serif;
      }

      .score-bar > .score {
        line-height: 40px;
        color: #fff;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.updateScore = () => {
    const $score = document.querySelector(".score");
    $score.textContent = store.score;
  };

  module.create = () => {
    module._style();
    return `
     <header class="score-bar">
      <span class="score">0</span>
     </header>
    `;
  };

  return {
    create: module.create,
    score: module.updateScore
  };
})();
