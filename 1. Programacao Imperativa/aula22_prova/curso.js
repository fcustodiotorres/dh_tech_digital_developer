let alunos = require("./aluno");

let curso = {
  curso: String,
  notaAprovacao: 7,
  maxFaltas: 4,
  listaEstudantes: alunos.listaAlunos,
  adicionarAluno: function (nome, faltas, notas) {
    this.listaEstudantes.push(new alunos.ConstrutorAluno(nome, faltas, notas));
  },
  resultadoaprovacao: function (aluno) {
    let objetoAluno = this.listaEstudantes.filter((x) => x.nome == aluno);
    let media = objetoAluno[0].calcularMedia();
    let faltas = objetoAluno[0].faltas;
    /* console.log('Nota Aprova: ' + this.notaAprovacao);
    console.log('Nota Real: ' + media);
    console.log('Faltas Aprova: ' + this.maxFaltas);
    console.log('Faltas Real: ' + faltas);
 */
    if (faltas == this.maxFaltas) {
      media > this.notaAprovacao * 1.1 ? true : false;
    } else if (media >= this.notaAprovacao && faltas < this.maxFaltas) {
      return true;
    }
    return false;
  },
  listaAprovados: () => {
    let tamanhoLista = curso.listaEstudantes.length;
    let listaBoolean = []
    for(let i = 0 ; i < tamanhoLista ; i++){
      let alunoAtual = curso.listaEstudantes[i].nome;
      listaBoolean.push(curso.resultadoaprovacao(alunoAtual))
    };
    console.log(listaBoolean)
  },
};
// Teste Adicionar Aluno
//console.log(curso.listaEstudantes);
curso.adicionarAluno('Novo Aluno',3,[8,4,10]);
//console.log(curso.listaEstudantes);

// Teste Aprovação
//curso.resultadoaprovacao("Filipe Custódio");

/* Teste arrayResultados */
curso.listaAprovados()
