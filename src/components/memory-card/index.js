const createMemoryCard = () => `
  <article class="memory-card">
    <img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon' onClick="handleClick()">
    </img> 
  <article>
`;

const creatememoryCardTurned = () => `
  <article class="memory-card -turned">
    <img 
        src='img/icon-c.png' 
        alt='Ícone de um livro da linguagem c++' 
        class='icon' onClick="handleClick()">
    </img> 
  <article>
`;

const handleClick = () => console.log("Ae");
