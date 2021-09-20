// Aula 17 -> Filter, Map, Reduce, forEach/Looping For Of
// Leia Notes.MD

let numeros = [10, 20, 40, 20]
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

numeros.forEach(function (elemento, indice) {
  console.log('Elemento: ' + elemento + ' Índice: ' + indice)
})
