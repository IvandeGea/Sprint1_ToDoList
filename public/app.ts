import * as fs from "fs";

interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

let taskList: Task[] = [];
const list = document.getElementById("lista");

const data = fs.readFileSync("../src/tasks.json", "utf8");
const tasks: Task[] = JSON.parse(data);

taskList = tasks;

console.log(taskList);

function showList() {
  let message: string = "";

  for (const task of taskList) {
    message += `${task.id}.- ${task.name}. Completed: ${
      task.completed ? "true" : "false"
    } <br>`;
  }

  if (list != null) {
    list.innerHTML = message;
  }
}

function addButton() {
  let id: string = "";

  if (taskList.length != 0) {
    id = (parseInt(taskList[taskList.length - 1].id) + 1).toString();
  }

  const name: string | null = prompt("Introduce la tarea que quieres añadir");

  if (name != null) {
    const newTask: Task = {
      id: id,
      name: name,
      description: "",
      completed: false,
    };
    taskList.push(newTask);
  } else {
    alert("No has especificado ninguna tarea");
  }
}

function removeButton() {
  const id: string | null = prompt("Introduce la id de la tarea a eliminar");

  if (id != null) {
    const index = taskList.findIndex((task) => task.id === id);
    if (index !== -1) {
      taskList.splice(index, 1);
    } else {
      alert("Id no válida");
    }
  } else {
    alert("Id no válida");
  }
}

function completeTaskButton() {
  const id: string | null = prompt(
    "Introduce la id de la tarea a marcar como completada"
  );

  if (id != null) {
    const task = taskList.find((task) => task.id === id);
    if (task) {
      task.completed = true;
    } else {
      alert("Id no válida");
    }
  } else {
    alert("Id no válida");
  }
}

window.addEventListener("load", function () {
  showList();
});

document.getElementById("add")?.addEventListener("click", function () {
  addButton();
  showList();
});

document.getElementById("remove")?.addEventListener("click", function () {
  removeButton();
  showList();
});

document.getElementById("complete")?.addEventListener("click", function () {
  completeTaskButton();
  showList();
});
