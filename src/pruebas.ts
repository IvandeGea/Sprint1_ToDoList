import { ToDoList } from "./task";

const todoList = new ToDoList();

// Añadir tareas de ejemplo
todoList.addTask("Tarea 1", "Descripción de la tarea 1");
todoList.addTask("Tarea 2", "Descripción de la tarea 2");
todoList.addTask("Tarea 1", "Descripción de la tarea 1");
todoList.addTask("Tarea 2", "Descripción de la tarea 2");
todoList.addTask("Tarea 1", "Descripción de la tarea 1");
todoList.addTask("Tarea 2", "Descripción de la tarea 2");
todoList.addTask("Tarea 1", "Descripción de la tarea 1");
todoList.addTask("Tarea 2", "Descripción de la tarea 2");

// Mostrar la lista de tareas
console.log("Lista de tareas:");
todoList.showTaskList();

// Completar una tarea
todoList.completeTask("Tarea 1");

todoList.addTask("Tarea 3", "Descripción de la tarea 3");
// Mostrar la lista de tareas actualizada
console.log("Lista de tareas actualizada:");
todoList.showTaskList();

// Mostrar la lista de tareas final
console.log("Lista de tareas final:");
todoList.showTaskList();
