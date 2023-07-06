import { Command } from "commander";
import { ToDoList, Task } from "./task";

const todoList = new ToDoList();

const program = new Command();

program
  .command("add <name> <description>")
  .description("Add a new task")
  .action((name, description) => {
    todoList.addTask(name, description);
    console.log("Task added successfully!");
  });

program
  .command("complete <taskId>")
  .description("Mark a task as completed")
  .action((taskId) => {
    todoList.completeTask(taskId);
    console.log("Task completed successfully!");
  });

program
  .command("delete <taskId>")
  .description("Delete a task")
  .action((taskId) => {
    todoList.deleteTask(taskId);
    console.log("Task deleted successfully!");
  });

program
  .command("list")
  .description("Show the task list")
  .action(() => {
    todoList.showTaskList();
  });

program.parse(process.argv);
