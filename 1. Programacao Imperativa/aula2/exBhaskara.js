// Exercício Bhaskara
// Delta = b² - 4 . a . c
// X = -b +- Raiz(Delta) / 2 * a
let a = 3
let b = 4
let c = 2

function Bhaskara(a,b,c){
  let Delta = Math.pow(b,2) - 4 * a * c
  let x1 = ((b*-1) + Math.sqrt(Delta)) / (2 * a)
  let x2 = ((b*-1) - Math.sqrt(Delta)) / (2 * a)
  return 'O valor de Delta é ' + Delta + '. O valor de x1 é ' + x1 + '. O valor de x2 é ' + x2
 }
let result = Bhaskara(2,12,-14)
console.log(result)