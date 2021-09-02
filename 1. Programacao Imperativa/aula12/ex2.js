/* Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
você deve exibir a string Digital; em vez do número.
● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
você deve exibir a string House em vez disso.
● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
deve exibir a string Digital House; em vez do número */

function digitalHouse(a, b) {
  let limite = 51
  let listaMultiplosA = []
  let listaMultiplosB = []
  let listaMultiplosAB = []
  let listaValida = []

  for (let i = 0; i < limite; i++) {
    if (i % a == 0) {
      listaMultiplosA.push(i)
    }
    if (i % b == 0) {
      listaMultiplosB.push(i)
    }
    if ((i % b == 0) & (i % a == 0)) {
      listaMultiplosAB.push(i)
    } 
    if(i % a != 0 && i % b != 0){
      listaValida.push(i)
    }
  }
  console.log(`Os Multiplos de ${a} são: ${listaMultiplosA}`)
  console.log(`Os Multiplos de ${b} são: ${listaMultiplosB}`)
  console.log(`Os Multiplos de ${a} e ${b} são: ${listaMultiplosAB}`)
  console.log(`Os Valor Únicos são: ${listaValida}`)
}

digitalHouse(5, 10)
