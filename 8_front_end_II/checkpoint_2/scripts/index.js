const emailReference = document.querySelector("#inputEmail");
const passwordReference = document.querySelector("#inputPassword");
const submitButtonReference = document.querySelector("#submitButton");
const errorsReference = document.querySelector("#errors");

function isEmpty(element) {
  return element.value === "";
}

//   Executar API de login
function loginAPI(email, password) {
  window.localStorage.removeItem("jwt");

  let bodyConfiguration = {
    email: email,
    password: password,
  };

  fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyConfiguration),
  })
    .then((response) => {
        if(!response.ok){
            errorsReference.innerHTML = `Usuário ou Senha incorreta.`
            throw Error(`${response.status}-${response.statusText}`)
        }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.localStorage.setItem("jwt", data.jwt);
      window.location.href = './tarefas.html'
    })
    .catch((err) => {
      console.log(err);
    });
}
// Submit Execution
function handleLogin(event) {
  event.preventDefault();

  let emailValue = emailReference.value;
  let passwordValue = passwordReference.value;

  errorsReference.innerHTML = "";
  if (isEmpty(emailReference) || isEmpty(passwordReference)) {
    errorsReference.innerHTML = `*Preencha os campos corretamente.`;
    return;
  }

  loginAPI(emailValue, passwordValue);
}

submitButtonReference.addEventListener("click", handleLogin);
