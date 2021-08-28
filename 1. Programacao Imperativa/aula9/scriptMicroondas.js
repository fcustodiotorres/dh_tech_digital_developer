/* Primeiro Checkpoint:
  https://docs.google.com/forms/d/e/1FAIpQLScTNhfzdgAxGSz_m3imceCw4ClsaPN8zEX8LuHG50-x0T8xZg/viewform?usp=send_form 
  
  Turma 2 , Sala 3
  Participantes: 
  - Filipe Custódio
  - Guilherme de Menezes
  - José Lucas Souza
  - Hebert Silva 
  - Louise Nascimento
  - Jeferson Oliveira
*/

function startMicro(option,timeSec){
  let standartTime = 0
  let resultado = ""

  switch(option){
    case "Pipoca": standartTime = 10; break;
    case "Macarrão": standartTime = 8; break;
    case "Carne": standartTime = 15; break;
    case "Feijão": standartTime = 12; break;
    case "Brigadeiro": standartTime = 8; break;
  }

  let time2 = standartTime * 2;
  let time3 = standartTime * 3;

resultado = 
  timeSec >= time3 ? 'Kabummm'                  : 
  timeSec >= time2 ? 'Comida Queimou'           : 
  timeSec < standartTime ? 'Tempo Insuficiente' : 'Prato pronto, bom apetite !!!';

console.log(resultado);
  }

startMicro("Brigadeiro",15)
