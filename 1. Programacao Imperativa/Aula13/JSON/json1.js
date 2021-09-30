let pessoa = {
  nome: 'Filipe',
  idade: 21,
  altura: 1.69
}

let jsonStringfy = JSON.stringify(pessoa);
let jsonParse = JSON.parse(jsonStringfy);


console.log('\n=== Texto Original ==== ')
console.log(pessoa)

console.log('\n=== Uso Stringfy ==== Converte em JSON')
console.log(jsonStringfy); //{"nome":"Filipe","idade":21,"altura":1.69}

console.log('\n=== Uso Parse ==== Converte para Array');
console.log(jsonParse)