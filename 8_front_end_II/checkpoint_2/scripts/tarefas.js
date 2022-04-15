// Referências do HTML
const usernameReference = document.querySelector("#username");
const closeAppReference = document.querySelector("#closeApp");
const skeletonReference = document.querySelector("#skeleton");

const taskPendingReference = document.querySelector(".tarefas-pendentes");
const taskCompletedReference = document.querySelector(".tarefas-terminadas");
const submitButtonReference = document.querySelector("#submit");
const newTaskTextReference = document.querySelector("#novaTarea");

// Variáveis
let jwtAuth = window.localStorage.getItem("jwt");

// Security Validator
document.addEventListener("DOMContentLoaded", () => {
  if (jwtAuth === "" || jwtAuth === null) {
    window.alert("Por favor, efetue o login!");
    window.location.href = "./index.html";
    console.log("Sem jwt");
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
      skeletonReference.innerHTML = "";
      skeletonReference.style.display = "none";

      data.forEach((task) => {
        let taskDate = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(new Date(task.createdAt));

        let taskPattern = {
          pending: `
        <li class="tarefa">
          <div class="not-done" onclick='updateTask(${task.id}, completed = true)'></div>
            <div class="descricao">
            <p class="nome">${task.description}</p>
            <div class='meta'>
              <p class="timestamp">Criada em: ${taskDate}</p>
              <div class='task-options'>
              <img src='https://img.icons8.com/fluency/344/checkmark.png' class='icon' onclick='updateTask(${task.id}, completed = "true")'>
              <img src='https://img.icons8.com/color/344/delete-forever.png' class='icon' onclick='deleteTask(${task.id})'>
              <img src='https://img.icons8.com/office/344/edit.png' class='icon' onclick='editTask(${task.id}, completed = "false")'>
              </div>
            </div>
            
          </div>
          
        </li>`,

          completed: `
        <li class="tarefa">
          <div class="not-done" onclick='updateTask(${task.id}, completed = false)'></div>
          <div class="descricao">
          <p class="nome">${task.description}</p>
          <div class='meta'>
            <p class="task-id">Id: ${task.id}</p>
            <p class="timestamp">Criada em: ${taskDate}</p>
            <div class='task-options'>
              <img src='https://img.icons8.com/plasticine/344/return.png' class='icon' onclick='updateTask(${task.id}, completed = false)'>
              <img src='https://img.icons8.com/color/344/delete-forever.png' class='icon' onclick='deleteTask(${task.id})'>
              </div>
          </div>
          </div>
          <div class='task-options'>
          </div>
        </li>`,
        };

        if (task.completed) {
          taskCompletedReference.innerHTML += taskPattern.completed;
        } else {
          taskPendingReference.innerHTML += taskPattern.pending;
        }
      });
    });
  });
}

// POST New Task
async function postNewTask() {
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
        window.location.reload();
      });
  }
  getUserTasks();
}
// UPDATE Task
async function updateTask(id, completed = "true", description) {
  let bodyConfiguration = {
    completed: completed,
    description: description,
  };
  let requestConfiguration = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtAuth,
    },
    body: JSON.stringify(bodyConfiguration),
  };
  await fetch(
    `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`,
    requestConfiguration
  );

  window.location.reload();
}

// Delete Task
async function deleteTask(id) {
  let requestConfiguration = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtAuth,
    },
  };
  await fetch(
    `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`,
    requestConfiguration
  );
  window.location.reload();
}

// Edit Task
async function editTask(id, completed, description){
  let newDescription = window.prompt('Insira a nova descrição')
  updateTask(id, completed = "false", description = newDescription)
}

submitButtonReference.addEventListener("click", (e) => {
  e.preventDefault();
  postNewTask();
});

getUserInformation();
getUserTasks();

// Finalizar Sessão
closeAppReference.addEventListener("click", () => {
  window.localStorage.removeItem("jwt");
  window.location.href = "./index.html";
});
