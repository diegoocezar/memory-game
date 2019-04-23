const createMemoryCard = (src, alt, nameClass) => `
    <article class="memory-card ${nameClass}">
      <img 
          src='${src}' 
          alt= '${alt}'
          class='icon' onClick="handleClick()">
      </img> 
    <article>
  `;

const handleClick = () => console.log("Ae");
