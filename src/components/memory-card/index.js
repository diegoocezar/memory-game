function memoryCard() {
  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
  .memory-card {
    width: 150px;
    height: 150px;
    background-color: #f25a70;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
  }
  
  .memory-card.-turned {
    background-color: #fff;
  }
  
  .memory-card.-turned::before {
    content: "";
    width: 90px;
    height: 90px;
    position: absolute;
    background-color: #d4d4d4;
    border-radius: 50%;
  }
  
  .memory-card > .icon {
    width: 90px;
    position: absolute;
  }
  .memory-card.-turned > .icon {
    position: absolute;
    transform: translateY(-14px);
  }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
    <article class="memory-card ${nameClass}">
      <img 
          src='${src}' 
          alt= '${alt}'
          class='icon' onClick="handleClick()">
      </img> 
    <article>
  `;
}
