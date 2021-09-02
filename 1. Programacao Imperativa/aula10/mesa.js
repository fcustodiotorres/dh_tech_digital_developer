// Mesa de Trabalho: https://docs.google.com/document/d/1wUMuBww0N6Zk_ckgHL1hLBFVryrqFpRoK6Iom1LKzAE/edit

let meuArray = ['Preto','Branco','Amarelo','Azul','Laranja','Violeta','Rosa']
console.log('==== Array Original ====')
console.table(meuArray)

// Array Invertido
function imprimirInverso(array){
  console.log('==== Resultado Reverso 1 ====')
  console.log(array.reverse())
}
imprimirInverso(meuArray)

function inverter(array){
  console.log('==== Resultado Reverso 2 ====')
  var novoArrayInvertido = array.reverse();
  console.log(novoArrayInvertido);
}
inverter([1,2,3])

// Somar Array
function somarArray(array){
  for(let i = 0; i < array.length ; i++){
    var result = 0
    result = result + array[i]
    return console.log(result)
  }
}
somarArray(1,2,3)