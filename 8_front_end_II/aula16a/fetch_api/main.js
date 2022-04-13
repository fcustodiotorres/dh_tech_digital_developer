const cepReference = document.querySelector("#cep");
const resultReference = document.querySelector("#result");
const buttonReference = document.querySelector("#btn");

buttonReference.addEventListener("click", (event) => {
  event.preventDefault();
  let cepValue = cepReference.value;

  fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
});
