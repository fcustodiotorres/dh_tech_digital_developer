const firstNameReference = document.querySelector("#firstName");
const lastNameReference = document.querySelector("#lastName");
const emailReference = document.querySelector("#email");
const passwordReference = document.querySelector("#password");
const password2Reference = document.querySelector("#password2");
const submitBtnReference = document.querySelector("#submitButton");
const errorsReference = document.querySelector("#errors");

submitBtnReference.addEventListener("click", userRegister);

let formInputs = [
  firstNameReference,
  lastNameReference,
  emailReference,
  passwordReference,
  password2Reference,
];

function isEmpty(element) {
  return element.value === "";
}

function emptyFieldValidator(elementsArray) {
  // Verifica se há algum campo vazio em um array de inputs
  let isValid = true;

  elementsArray.forEach((e) => {
    if (isEmpty(e)) {
      isValid = false;
    }
  });
  return isValid;
}

function fetchUserRegister() {
  let bodyConfiguration = {
    firstName: firstNameReference.value,
    lastName: lastNameReference.value,
    email: emailReference.value,
    password: passwordReference.value,
  };

  let headerConfiguration = {
    "Content-Type": "application/json",
  };

  let requestConfiguration = {
    method: "POST",
    body: JSON.stringify(bodyConfiguration),
    headers: headerConfiguration,
  };

  fetch("https://ctd-todo-api.herokuapp.com/v1/users", requestConfiguration)
    .then((response) => {
      if (!response.ok) {
        throw Error(`${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      window.localStorage.clear("jwt");
      window.localStorage.setItem("jwt", data.jwt);
      window.location.href = "./tarefas.html";
    })
    .catch((err) => {
      errorsReference.innerHTML = `*Ocorreu um problema!\n${err}`;
    });
}

function userRegister(event) {
  event.preventDefault();
  if (!emptyFieldValidator(formInputs)) {
    errorsReference.innerHTML = `*Preencha todos os campos`;
  } else if (passwordReference.value !== password2Reference.value) {
    errorsReference.innerHTML = `*As senhas não conferem`;
  } else {
    fetchUserRegister();
  }
}
