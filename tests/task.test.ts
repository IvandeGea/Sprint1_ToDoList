import { ToDoList, Task } from "../src/task";

describe("ToDoList", () => {
  let todoList: ToDoList;

  beforeEach(() => {
    todoList = new ToDoList();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("añadir una tarea", () => {
    const name = "Tarea 1";
    const description = "Descripción de la tarea 1";
    todoList.addTask(name, description);

    todoList.loadTasksFromJSON();

    expect(todoList["tasks"].length).toBe(1);

    const addedTask = todoList["tasks"][0];
    expect(addedTask.name).toBe(name);
    expect(addedTask.description).toBe(description);
    expect(addedTask.completed).toBe(false);
  });

  test("marcar una tarea como completada", () => {
    const task: Task = {
      id: "1",
      name: "Tarea 1",
      description: "Descripción de la tarea 1",
      completed: false,
    };
    todoList["tasks"] = [task];

    todoList.completeTask(task.name);

    todoList.loadTasksFromJSON(); // Cargar tareas desde el archivo

    const completedTask = todoList["tasks"][0];
    expect(completedTask.completed).toBe(true);
  });

  test("eliminar una tarea", () => {
    const task: Task = {
      id: "1",
      name: "Tarea 1",
      description: "Descripción de la tarea 1",
      completed: false,
    };
    todoList["tasks"] = [task];

    todoList.deleteTask(task.name);

    todoList.loadTasksFromJSON(); // Cargar tareas desde el archivo

    expect(todoList["tasks"].length).toBe(0);
  });

  test("mostrar la lista de tareas", () => {
    const task1: Task = {
      id: "1",
      name: "Tarea 1",
      description: "Descripción de la tarea 1",
      completed: false,
    };
    const task2: Task = {
      id: "2",
      name: "Tarea 2",
      description: "Descripción de la tarea 2",
      completed: true,
    };
    todoList["tasks"] = [task1, task2];

    const consoleSpy = jest.spyOn(console, "log");
    todoList.showTaskList();

    expect(consoleSpy).toHaveBeenCalledWith(
      `Task ${task1.id}: ${task1.name}  ${task1.description} (Incomplete)`
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      `Task ${task2.id}: ${task2.name}  ${task2.description} (Completed)`
    );
  });
});
