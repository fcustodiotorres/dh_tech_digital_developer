// Referências do HTML
const usernameReference = document.querySelector("#username");
const closeAppReference = document.querySelector("#closeApp");

const skeletonReference = document.querySelector("#skeleton");
const taskPendingReference = document.querySelector(".tarefas-pendentes");
const taskCompletedReference = document.querySelector(".titulo-terminadas");
const submitButtonReference = document.querySelector("#submit");
const newTaskTextReference = document.querySelector("#novaTarea");

// Variáveis
let jwtAuth = window.localStorage.getItem("jwt");

// Security Validator
document.addEventListener("DOMContentLoaded", () => {
  if(jwtAuth === '' || jwtAuth === null){
    window.alert('Por favor, efetue o login!');
    window.location.href = './index.html'
    console.log("Sem jwt")
  }
});

// GET User Informations
// Contain: id, firstName, lastName, email
function getUserInformation() {
  let requestConfiguration = {
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtAuth,
    },
  };

  fetch(
    "https://ctd-todo-api.herokuapp.com/v1/users/getMe",
    requestConfiguration
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      usernameReference.innerHTML = `${data.firstName} ${data.lastName} (#${data.id})`;
    });
}

// GET User Tasks
function getUserTasks() {
  let requestConfiguration = {
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtAuth,
    },
  };

  fetch(
    "https://ctd-todo-api.herokuapp.com/v1/tasks",
    requestConfiguration
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);
      skeletonReference.remove();

      data.forEach((task) => {
        let taskDate = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(new Date(task.createdAt));

        if (task.taskCompleted) {
          taskCompletedReference.innerHTML += "taskElement";
        } else {
          taskPendingReference.innerHTML += `
        <li class="tarefa">
          <div class="not-done"></div>
          <div class="descricao">
          <p class="nome">${task.description}</p>
          <div>
            <p class="task-id">Id: ${task.id}</p>
            <p class="timestamp">Criada em: ${taskDate}</p>
          </div>
          </div>
        </li>
        
        `;
        }
      });
    });
  });
}

// POST New Task
function postNewTask() {
  // debugger
  let newTask = newTaskTextReference.value;

  if (newTask === "") {
    console.log("Task Empty");
  } else {
    let bodyConfiguration = {
      description: newTask,
      completed: false,
    };
    let requestConfiguration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtAuth,
      },
      body: JSON.stringify(bodyConfiguration),
    };

    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", requestConfiguration)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  getUserTasks();
}

// GET Task ID
function getTaskIdONClick() {
  debugger;
  const taskList = document.querySelectorAll("li");
  console.log(taskList);
}

// UPDATE Task
function updateTask() {}

submitButtonReference.addEventListener("click", postNewTask);
// Update Task
/* function updateTask() {

  let bodyConfiguration = {
    description: 'Atualizando Tarefa!',
    completed: true
  }
  let requestConfiguration = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      authorization: jwtAuth
    },
    body: JSON.stringify(bodyConfiguration)
  }
  fetch('https://ctd-todo-api.herokuapp.com/v1/5241', requestConfiguration)

}
updateTask() */

getUserInformation();
getUserTasks();
// postNewTask();

// Finalizar Sessão
closeAppReference.addEventListener("click", () => {
  window.localStorage.removeItem("jwt");
  window.location.href = "./index.html";
});
