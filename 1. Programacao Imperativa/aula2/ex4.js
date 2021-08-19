var cliente = {
  nome: 'Filipe',
  sobrenome: 'Custódio',
  idade: 22,
  peso: 95,
  altura: 1.70,
  plano: 'Ouro',
  imc: 
    function(){return this.peso / (this.altura**2)},
  resultado: 
    function(){return console.log(`${this.nome} tem ${this.idade} e seu índice de massa corporal é de ${this.imc()}.`)}
  }

cliente.resultado()