/* Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
a maior e a menor altura do grupo;
a média de altura das mulheres;
o número de homens.
 */

function Pessoa(_altura, _sexo, _nome) {
  this.altura = _altura;
  this.sexo = _sexo;
  this.nome = _nome;
}

const pessoa1 = new Pessoa(1.8, "M", "Pessoa M 1");
const pessoa2 = new Pessoa(1.7, "F", "Pessoa F 1");
const pessoa3 = new Pessoa(1.6, "M", "Pessoa M 2");
const pessoa4 = new Pessoa(1.93, "M", "Pessoa M 3");
const pessoa5 = new Pessoa(1.75, "F", "Pessoa F 2");
const pessoa6 = new Pessoa(1.53, "F", "Pessoa F 3");
const pessoa7 = new Pessoa(1.85, "F", "Pessoa F 4");
const pessoa8 = new Pessoa(1.52, "F", "Pessoa F 5");
const pessoa9 = new Pessoa(1.64, "F", "Pessoa F 6");

const pessoas = [
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4,
  pessoa5,
  pessoa6,
  pessoa7,
  pessoa8,
  pessoa9,
];

var funcoes = {
  pessoas: pessoas,
  listaMulheresOrdenada: () => {
    let listaMulheres = pessoas
      .filter((a) => a.sexo == "F")
      .sort((a, b) => a.altura - b.altura);

    let listaHomens = pessoas
      .filter( a => a.sexo == "M")
      .sort(( a , b ) => a.altura - b.altura);

    let mulherMenor = listaMulheres[0];
    let mulherMaior = listaMulheres[listaMulheres.length - 1];
    let alturaMediaMulheres = listaMulheres.reduce( (acc, b) => acc + b.altura,0)
    let contagemHomens = listaHomens.length

    console.log(
      `A ${mulherMenor.nome} é a menor mulher, com ${mulherMenor.altura} de altura.`
    );
    console.log(
      `A ${mulherMaior.nome} é a maior mulher, com ${mulherMaior.altura} de altura.`
    );
    console.log(`A altura média das mulheres é de ${alturaMediaMulheres}`);
    console.log(`Há ${contagemHomens} homens na lista.`)
  },
};

funcoes.listaMulheresOrdenada();
