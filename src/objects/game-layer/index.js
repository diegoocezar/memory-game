// Arquivo não está sendo utilizado no momento.

// const gameLayer = (function() {
//   const module = {};

//   module.handleClick = $component => {
//     // Seleciona os filhos do gameLayer e cria um array
//     const $children = $component.querySelectorAll("*");

//     // Adiciona a classe -blur em cada filho do gameLayer
//     $children.forEach($item => $item.classList.add("-blur"));
//   };

//   module.handleTransitionEnd = (event, $component) => {
//     if (event.target.classList.contains("start-layer")) $component.remove();
//   };

//   module.render = content => {
//     const $gameButton = gameButton.render(content);
//     const $startLayer = startLayer.render();

//     return `
//       <div class="game-layer" onClick="gameLayer.handleClick(this)" onTransitionEnd="gameLayer.handleTransitionEnd(event, this)">
//       ${$startLayer}
//       ${$gameButton}
//       </div>
//     `;
//   };

//   return {
//     render: module.render,
//     handleClick: module.handleClick,
//     handleTransitionEnd: module.handleTransitionEnd
//   };
// })();
