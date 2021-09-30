//Estrutura:

let carros = {
  modelo: 'civic',
  ano: 2021,
  //pode receber funções
  imprimirNome: function () {
    return `O modelo é: ${this.modelo.toUpperCase()}`
  },
  //recebe também métodos, quando uma propriedade armazena uma função:
  ligar: function(){
    console.log(`O carro ${this.modelo} está Ligado`)
  },
}

// Para executar:
console.log(carros.imprimirNome())
carros.ligar()

