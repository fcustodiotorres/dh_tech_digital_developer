import somar from "./funcoes/somar.mjs";
import dividir from "./funcoes/dividir.mjs";
import multiplicar from "./funcoes/multiplicar.mjs";
import subtrair from "./funcoes/subtrair.mjs";

// Soma, Subtração, Multiplicação e Divisão

var a = 10;
var b = 6;

console.log(somar(a, b));
console.log(subtrair(a, b));
console.log(multiplicar(a, b));
console.log(dividir(a, b));

var result = document.querySelector("#result")
result.textContent = '10'