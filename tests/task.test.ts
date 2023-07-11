import fs from "fs";
import { ToDoList } from "../src/task";

jest.mock("fs");

describe("ToDoList", () => {
  let todoList: ToDoList;

  beforeEach(() => {
    todoList = new ToDoList();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("loadTasksFromJSON", () => {
    test("should load tasks from JSON file", () => {
      const data =
        '[{"id":"1","name":"Task 1","description":"Description of Task 1","completed":false}]';

      jest.spyOn(fs, "readFileSync").mockReturnValue(data);

      todoList.loadTasksFromJSON();

      expect(todoList["tasks"].length).toBe(1);
      expect(todoList["tasks"][0].id).toBe("1");
      expect(todoList["tasks"][0].name).toBe("Task 1");
      expect(todoList["tasks"][0].description).toBe("Description of Task 1");
      expect(todoList["tasks"][0].completed).toBe(false);
    });
  });

  describe("addTask", () => {
    test("should add a task", () => {
      const data =
        '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';

      jest.spyOn(fs, "readFileSync").mockReturnValue(data);
      const writeFile = jest.spyOn(fs, "writeFile");

      todoList.loadTasksFromJSON();

      todoList.addTask("Task 2", "Description of Task 2");

      expect(todoList["tasks"].length).toBe(2);
      expect(todoList["tasks"][1].id).toBe("1");
      expect(todoList["tasks"][1].name).toBe("Task 2");
      expect(todoList["tasks"][1].description).toBe("Description of Task 2");
      expect(todoList["tasks"][1].completed).toBe(false);
    });
  });

  describe("completeTask", () => {
    test("should complete a task", () => {
      const data =
        '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';

      jest.spyOn(fs, "readFileSync").mockReturnValue(data);

      todoList.loadTasksFromJSON();

      todoList.completeTask("Task 1");

      expect(todoList["tasks"][0].completed).toBe(true);
    });
  });
  describe("deleteTask", () => {
    test("should delete a task", () => {
      const data =
        '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';

      jest.spyOn(fs, "readFileSync").mockReturnValue(data);

      todoList.loadTasksFromJSON();

      todoList.deleteTask("Task 1");

      expect(todoList["tasks"].length).toBe(0);
    });
  });

  describe("showTaskList", () => {
    test("should show the task list", () => {
      const data =
        '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';

      jest.spyOn(fs, "readFileSync").mockReturnValue(data);
      const consoleSpy = jest.spyOn(console, "log");

      todoList.loadTasksFromJSON();

      todoList.showTaskList();

      expect(consoleSpy).toHaveBeenCalledWith(
        "Task 0: Task 1  Description of Task 1 (Incomplete)"
      );
    });
  });
});
