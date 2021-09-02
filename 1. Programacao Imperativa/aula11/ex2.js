// Atividade Aula 11 -> https://br-playground.digitalhouse.com/course/717/unit/e58a7dbc-c901-4250-bb87-ef9a3cd881e7/lesson/8b17ceba-049b-44d2-9925-47dd4063532c/topic/3aca99be-79d5-4118-9efd-80f64896585c

var list = ['Homem Aranha', 'Batman', 'Vikings', 'The Last of Us', 'The 100']
var newList = []

// Exercício 02
function pasajeDeElementos(old, newList) {
  tamanhoLista= old.length
  for (let i = 0; i < tamanhoLista; i++) {
    newList.unshift(old.pop().toUpperCase())
  }
}

console.log('==== Valor Inicial ====')
console.log(list)
pasajeDeElementos(list, newList)
console.log('==== Valor Final ====')
console.log(newList)