function memoryCard() {
  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
  .memory-card{
    width: 121px;
    height: 121px;
    position: relative;
    margin-bottom: 10px;

    
  }
  .memory-card .card {
    width: 121px;
    height: 121px;
    background-color: #f25a70;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
    position: absolute;
  }
  
  .memory-card .card.-turned {
    background-color: #fff;
  
  }

  .memory-card.-active .card {
    display: none;
  }
  
  .memory-card.-active .card.-turned {
    display: flex;
  }

  .card.-turned::before {
    content: "";
    width: 90px;
    height: 90px;
    position: absolute;
    background-color: #d4d4d4;
    border-radius: 50%;
  }
  
  .card > .icon {
    width: 90px;
    position: absolute;
  }
  .card.-turned > .icon {
    position: absolute;
    transform: translateY(-14px);
  }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
    <div class="memory-card -active" onClick="handleClick(this)">
      <article class="card -turned">
        <img 
            src='${src}' 
            alt= '${alt}'
            class='icon' >
        </img> 
      </article>
      <article class="card">
      <img 
          src='img/icon-collabcode.png' 
          alt= 'Mascote da CollabCode'
          class='icon' ">
      </img> 
    </article>
    </div>
  `;
}

const handleClick = $component => {
  $component.classList.toggle("-active");
};
