// Construtor
function Pessoa(xNome,xIdade,xProfissao = null){
  this.nome = xNome,
  this.idade = xIdade,
  this.profissao = xProfissao,
  this.saudar = function(){
    console.log(`O usuário ${xNome} está com ${xIdade} anos e trabalha como ${xProfissao}!`)
  }
}

// Instanciando
let cadastro1 = new Pessoa('Filipe',21,'Tecnology Manager')
console.table(cadastro1)
cadastro1.saudar()

