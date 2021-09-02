// Atividade Aula 11 -> https://br-playground.digitalhouse.com/course/717/unit/e58a7dbc-c901-4250-bb87-ef9a3cd881e7/lesson/8b17ceba-049b-44d2-9925-47dd4063532c/topic/3aca99be-79d5-4118-9efd-80f64896585c

// Exercício 01
let peliculas = [
  'star wars',
  ' totoro',
  'rocky',
  'pulp fiction',
  'la vida es bela'
]

function converterMaisculas(array) {
  console.log('==== Valor Inicial ====')
  console.log(array)
  for (let i = 0; i < peliculas.length; i++) {
    array[i] = array[i].toUpperCase()
  }
  console.log('\n==== Valor Final ====')
  console.log(array)
}

converterMaisculas(peliculas)