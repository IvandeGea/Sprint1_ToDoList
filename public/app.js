"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var taskList = [];
var list = document.getElementById("lista");
var data = fs.readFileSync("tasks.json", "utf8");
var tasks = JSON.parse(data);
taskList = tasks;
console.log(data);

function showList() {
    var message = "";
    for (var _i = 0, taskList_1 = taskList; _i < taskList_1.length; _i++) {
        var task = taskList_1[_i];
        message += "".concat(task.id, ".- ").concat(task.name, ". Completed: ").concat(task.completed ? "true" : "false", " <br>");
    }
    if (list != null) {
        list.innerHTML = message;
    }
}
function addButton() {
    var id = "";
    if (taskList.length != 0) {
        id = (parseInt(taskList[taskList.length - 1].id) + 1).toString();
    }
    var name = prompt("Introduce la tarea que quieres añadir");
    if (name != null) {
        var newTask = {
            id: id,
            name: name,
            description: "",
            completed: false,
        };
        taskList.push(newTask);
    }
    else {
        alert("No has especificado ninguna tarea");
    }
}
function removeButton() {
    var id = prompt("Introduce la id de la tarea a eliminar");
    if (id != null) {
        var index = taskList.findIndex(function (task) { return task.id === id; });
        if (index !== -1) {
            taskList.splice(index, 1);
        }
        else {
            alert("Id no válida");
        }
    }
    else {
        alert("Id no válida");
    }
}
function completeTaskButton() {
    var id = prompt("Introduce la id de la tarea a marcar como completada");
    if (id != null) {
        var task = taskList.find(function (task) { return task.id === id; });
        if (task) {
            task.completed = true;
        }
        else {
            alert("Id no válida");
        }
    }
    else {
        alert("Id no válida");
    }
}
window.addEventListener("load", function () {
    showList();
});
(_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    addButton();
    showList();
});
(_b = document.getElementById("remove")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    removeButton();
    showList();
});
(_c = document.getElementById("complete")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    completeTaskButton();
    showList();
});
