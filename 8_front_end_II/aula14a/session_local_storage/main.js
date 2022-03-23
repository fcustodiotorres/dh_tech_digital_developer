let userName = window.localStorage.getItem("userName");
const h1Reference = document.querySelector("h1");

if (userName === null) {
  let newName = window.prompt("Insira seu nome");
  window.localStorage.setItem("userName", newName);
  userName = window.localStorage.getItem("userName");
}

h1Reference.innerHTML += ` ${userName}`;


// Pode-se usra localStorage ou sessionStorage