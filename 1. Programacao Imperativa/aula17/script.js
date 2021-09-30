// Aula 17 -> Filter, Map, Reduce, forEach/Looping For Of
// Leia Notes.MD

let numeros = [1, 5, 6, 10, 30, 50]
console.log('=== Valor Original ===')
console.log(numeros)

// Usando forEach
console.log('=== Resultado forEach ===')
numeros.forEach(function (elemento, indice) {
  console.log('Elemento: ' + elemento + ' Índice: ' + indice)
})

// Usando Filter
//var newArray = arr.filter(callback[, thisArg])
let useFilter = numeros.filter((element, index) => element >= 5)
/* let useFilter = numeros.filter(function (element, index) {
  return element >= 5
}) */
console.log('=== Resultado Filter >=5 ===')
console.log(useFilter)

//Usando Map
//arr.map(callback[, thisArg])
let useMap = numeros.map((currentValue, index) => currentValue + 10)
console.log('=== Resultado Map: current Value + 10 ===')
console.log(useMap)

//Usando Reduce
//array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
var useReduce = numeros.reduce((acumulador, currentValue) => 
{return acumulador += currentValue})
console.log('=== Resultado Reduce: Acumulador ===')
console.log(useReduce)




//Podemos percorrer este Array de 3 formas:

//1
/*   for(let i = 0 ; i < numeros.length ; i ++){
          const numero = numeros[i];
          console.log(numero)
        } */

//2
/* for(let numero of numeros){ //numeros.reverse para ir ao contrário
        console.log(numero);
      } */

//3