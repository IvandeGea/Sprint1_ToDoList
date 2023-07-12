import * as fs from "fs";

export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export class ToDoList {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }
  filePath = "./src/tasks.json";

  loadTasksFromJSON(): void {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, "[]", "utf8");
    }

    try {
      const data = fs.readFileSync("./src/tasks.json", "utf8");

      const parsedData = JSON.parse(data);

      this.tasks = Array.isArray(parsedData) ? parsedData : [];
    } catch (err) {
      console.log(err);
      this.tasks = [];
    }
  }

  saveTasksToJSON() {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(
        "./tasks.json",
        JSON.stringify(this.tasks),
        "utf8",
        (err) => {
          if (err) {
            console.log("Error saving task list:", err);
            reject(err);
          } else {
            console.log("Task list saved successfully!");
            resolve();
          }
        }
      );
    });
  }

  public async addTask(name: string, description: string): Promise<void> {
    this.loadTasksFromJSON();

    const task: Task = {
      id: this.tasks.length.toString(),
      name: name,
      description: description,
      completed: false,
    };
    this.tasks.push(task);

    try {
      await this.saveTasksToJSON();
      console.log("Task added successfully!");
    } catch (err) {
      console.log("Error adding task:", err);
    }
  }

  public async completeTask(taskName: string) {
    this.loadTasksFromJSON();
    const task = this.tasks.find(
      (task: Task) =>
        task.name.trim().toLowerCase() === taskName.trim().toLowerCase()
    );
    if (task) {
      task.completed = true;

      try {
        await this.saveTasksToJSON();
        console.log("Task completed successfully!");
      } catch (err) {
        console.log("Error completing task:", err);
      }
    }
  }

  public async deleteTask(taskName: string) {
    this.loadTasksFromJSON();
    this.tasks = this.tasks.filter((task: Task) => task.name !== taskName);

    try {
      await this.saveTasksToJSON();
      console.log("Task deleted successfully!");
    } catch (err) {
      console.log("Error deleting task:", err);
    }
  }

  public showTaskList() {
    this.loadTasksFromJSON();
    this.tasks.forEach((task: Task) => {
      console.log(
        `Task ${task.id}: ${task.name}  ${task.description} (${
          task.completed ? "Completed" : "Incomplete"
        })`
      );
    });
  }
}
