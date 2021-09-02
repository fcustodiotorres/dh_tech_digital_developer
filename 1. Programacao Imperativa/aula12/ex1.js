// Exercício Aula 12
// https://br-playground.digitalhouse.com/course/717/unit/e58a7dbc-c901-4250-bb87-ef9a3cd881e7/lesson/d3ec037f-e61c-4123-83ba-77fd57063fc2/topic/fea85c5f-5311-4efe-a849-fe589dc99278

// Ex1)

const alicia = [10, 25, 75,20,40,50,123]
const bob = [25, 3, 85,42,125,6,1]

function encontrarGanhador(a, b) {
  let pontosA = 0
  let pontosB = 0

  for (let i = 0; i < a.length; i++) {
    a[i] == b[i] ? null :
    a[i] > b[i] ? (pontosA ++) : (pontosB ++)
    console.log(`==== RODADA ${i+1} ====`)
    console.log(`Jogador A está com ${pontosA} pontos`)
    console.log(`Jogador B está com ${pontosB} pontos\n`)
  }

 console.log(jogadorGanhador = pontosA == pontosB ? 'Empate!' : pontosA > pontosB ? 'Jogador A Ganhou!' : 'Jogador B Ganhou!!')
  
}

encontrarGanhador(alicia,bob)
