function polegadaParaCentimetro(polegadas) {
  // 1 polegada = 2,54 centimentros
  return polegadas * 2.54
}
function converterEmUrl(string,dominio){
  return `http://www.${string}${dominio}`
}
function adicionaExclamacao(string){
  return string +'!'
}
function idadeCachoro(anos){
  const idadeHumano = 7
  return anos * idadeHumano
}
function salarioHora(salario,cargaMensal = 160){
  return salario / cargaMensal
}
function transformaMaiusculo(string){
  return string.toUpperCase()
}
function tipoDado(dado){
  return typeof(dado)
}
function circunferencia(raio){
  return 2 * Math.PI * raio
}

