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
                <img src='https://img.icons8.com/fluency/344/checkmark.png' class='icon' onclick='updateTask(${task.id}, completed = true)'>
                <img src='https://img.icons8.com/color/344/delete-forever.png' class='icon' onclick='deleteTask(${task.id})'>
                <img src='https://img.icons8.com/office/344/edit.png' class='icon' onclick=''>
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

export default getUserTasks;
