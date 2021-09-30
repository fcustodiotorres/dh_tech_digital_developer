/* Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */
let arrayPares = [2,4,6,8,10,12]
let arrayImpares = arrayPares.map( n => n-1)
console.log(arrayImpares)

/* Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */
let arrayNomes = ['Maria','José','Filipe','Gabriela','Maria']
var arrayNomesFilter = arrayNomes.filter(n => n == 'Maria')
console.log(arrayNomesFilter)

/* Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
 */
let arrayNumeros = [1,5,9,3,7]
var arrayNumerosFormatados = arrayNumeros.reduce((acumulador, currentValue) => {
    return acumulador.toString() + ' - ' + currentValue.toString()})
console.log(arrayNumerosFormatados)

/* Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
 */
let arrayAnimais = ['Cachorro','Gato','Pato','Vaca']
arrayAnimais.forEach((x) => console.log(`O animal é ${x}`))
console.log('\n=== forEach com let x of')
for(let x of arrayAnimais){
    console.log(`O animal é ${x}`)}
