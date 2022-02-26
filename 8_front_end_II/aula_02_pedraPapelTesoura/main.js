function computerChoose() {
  let randomNumber = Math.random();
  let result =
    randomNumber <= 0.33 ? "Pedra" : randomNumber <= 0.66 ? "Papel" : "Tesoura";
  alert("O computador escolheu " + result);
  return result;
}

function playerChoose() {
  return prompt("Insira uma Resposta: 'Pedra', 'Papel' ou 'Tesoura'");
}

// Pedra, Papel, Tesoura
let pontosUm = 0;
let pontosDois = 0;
let totalRodadas = 1;

// for( let rodadas = 0 ; rodadas <=100 || (pontosDois == 2 || pontosUm == 2); rodadas++){
do {
  let jogadorUm = playerChoose();
  let jogadorDois = computerChoose();

  console.log(`Rodada: ${totalRodadas}`);
  totalRodadas++;

  switch (true) {
    // Pedra
    case jogadorUm == "Pedra" && jogadorDois == "Tesoura":
      alert("Você Ganhou!");
      pontosUm++;
      break;

    case jogadorUm == "Pedra" && jogadorDois == "Papel":
      alert("O Computador Ganhou");
      pontosDois++;
      break;

    case jogadorUm == "Pedra" && jogadorDois == "Pedra":
      alert("Empatou!");
      break;

    // Papel
    case jogadorUm == "Papel" && jogadorDois == "Tesoura":
      alert("O Computador Ganhou");
      pontosDois++;
      break;

    case jogadorUm == "Papel" && jogadorDois == "Papel":
      alert("Empatou!");
      break;

    case jogadorUm == "Papel" && jogadorDois == "Pedra":
      alert("Você Ganhou!");
      pontosUm++;
      break;

    // Tesoura
    case jogadorUm == "Tesoura" && jogadorDois == "Tesoura":
      alert("Empatou!");
      break;

    case jogadorUm == "Tesoura" && jogadorDois == "Papel":
      alert("Você Ganhou!");
      pontosUm++;
      break;

    case jogadorUm == "Tesoura" && jogadorDois == "Pedra":
      alert("O Computador Ganhou");
      pontosDois++;
      break;

    default:
      alert("Insira um valor válido: 'Pedra', 'Papel' ou 'Tesoura'");
    }
    console.log(`Jogador com ${pontosUm} pontos. Computador com ${pontosDois} pontos.`)
} while ((pontosUm + pontosDois) <= 3);

