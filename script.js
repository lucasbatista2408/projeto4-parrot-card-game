/*
function qtdCards(){
  let qtd = prompt("Quantas cartas? (2,4,8,12,16)");
  let x = 0;
  let cards = document.querySelector(".cards");
  console.log("ok1")
  
  while(qtd%2 != 0){
    qtd = prompt("Somente numeros pares de 2 à 16:");
  }

  console.log("ok2")
  if (qtd%2 == 0){
    while(x < qtd){
    cards.innerHTML += `<div class="parrot">
      <img src="/images/front.png" alt="">
    </div>`;
    x++  
    }
  }
} 
qtdCards()