"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const task_1 = require("./task");
const todoList = new task_1.ToDoList();
const program = new commander_1.Command();
program
    .command("add <name> <description>")
    .description("Add a new task")
    .action((name, description) => {
    todoList.addTask(name, description);
    console.log("Task added successfully!");
});
program
    .command("complete <name>")
    .description("Mark a task as completed")
    .action((taskName) => {
    todoList.completeTask(taskName);
    console.log("Task completed successfully!");
});
program
    .command("delete <name>")
    .description("Delete a task")
    .action((taskName) => {
    todoList.deleteTask(taskName);
    console.log("Task deleted successfully!");
});
program
    .command("list")
    .description("Show the task list")
    .action(() => {
    todoList.showTaskList();
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map