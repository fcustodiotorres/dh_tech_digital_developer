/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
 */

function Espectador(_nome, _idade, _opniao) {
  this.nome = _nome;
  this.idade = _idade;
  this.opniao = _opniao;
}

let espec1 = new Espectador("Espectador 1", 21, "Ótimo");
let espec2 = new Espectador("Espectador 2", 12, "Ótimo");
let espec3 = new Espectador("Espectador 3", 24, "Bom");
let espec4 = new Espectador("Espectador 4", 63, "Regular");
let espec5 = new Espectador("Espectador 5", 46, "Bom");
let espec6 = new Espectador("Espectador 6", 31, "Regular");
let espec7 = new Espectador("Espectador 7", 45, "Ótimo");
let espec8 = new Espectador("Espectador 8", 54, "Regular");
let espec9 = new Espectador("Espectador 9", 71, "Bom");
let espec10 = new Espectador("Espectador 10", 82, "Ótimo");

let espectadores = [
  espec1,
  espec2,
  espec3,
  espec4,
  espec5,
  espec6,
  espec7,
  espec8,
  espec9,
  espec10,
];

let functions = {
  lista: espectadores,
  idadeMedOtimo: () => {
    let lista = espectadores.filter( a => a.opniao == "Ótimo");
    let contagem = lista.length;
    let somaIdades = lista.reduce( (a,b) => {
        return b.idade
    })
    let idadeMedia = somaIdades / contagem
    console.log(`A idade média de quem opniou por Ótimo é ${idadeMedia} anos.`)
},
}

functions.idadeMedOtimo()
