const btnSomarReference = document.querySelector("#somar");
const btnSubtrairReference = document.querySelector("#subtrair");
const btnDividirReference = document.querySelector("#dividir");
const btnMultiplicarReference = document.querySelector("#multiplicar");

const firstNumberReference = document.querySelector("#number1");
const secondNumberReference = document.querySelector("#number2");
const resultReference = document.querySelector("#resultado");

btnSomarReference.addEventListener("click", () => {
  resultReference.innerHTML =
    parseInt(firstNumberReference.value) +
    parseInt(secondNumberReference.value);
});

btnSubtrairReference.addEventListener("click", () => {
  resultReference.innerHTML =
    parseInt(firstNumberReference.value) -
    parseInt(secondNumberReference.value);
});

btnDividirReference.addEventListener("click", () => {
  resultReference.innerHTML =
    parseInt(firstNumberReference.value) /
    parseInt(secondNumberReference.value);
});

btnMultiplicarReference.addEventListener("click", () => {
  resultReference.innerHTML =
    parseInt(firstNumberReference.value) *
    parseInt(secondNumberReference.value);
});

function checkNumbers() {
  if (firstNumberReference.value == 0 || secondNumberReference == 0) {
    console.log("test");
  }
}
