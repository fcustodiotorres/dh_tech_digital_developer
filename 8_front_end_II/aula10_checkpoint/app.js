const nomeReference = document.querySelector("#nome");
const universoReference = document.querySelector("#universo");
const descricaoReference = document.querySelector("#descricao");
const imagemReference = document.querySelector("#urlImagem");
const buttonReference = document.querySelector("#btnSubmit");
const heroiListReference = document.querySelector("#heroiList");
const areaPersonagensReference = document.querySelector("#areaPersonagens");

buttonReference.addEventListener("click", cadastrarHeroi);

function cadastrarHeroi(event) {
  event.preventDefault();
  console.log("teste");

  // Capturar os itens dos inputs, ex: nomeReference.value
  // Inserir os valores capturados dentro do HTML

  areaPersonagensReference.innerHTML += `
    Adicionar o código HTML aqui usando \${referencia}\
    `;
}
