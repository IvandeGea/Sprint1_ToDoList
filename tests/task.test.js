"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var task_1 = require("../src/task");
jest.mock("fs");
describe("ToDoList", function () {
    var todoList;
    beforeEach(function () {
        todoList = new task_1.ToDoList();
    });
    afterEach(function () {
        jest.restoreAllMocks();
    });
    describe("loadTasksFromJSON", function () {
        test("should load tasks from JSON file", function () {
            var data = '[{"id":"1","name":"Task 1","description":"Description of Task 1","completed":false}]';
            jest.spyOn(fs, "readFileSync").mockReturnValue(data);
            todoList.loadTasksFromJSON();
            expect(todoList["tasks"].length).toBe(1);
            expect(todoList["tasks"][0].id).toBe("1");
            expect(todoList["tasks"][0].name).toBe("Task 1");
            expect(todoList["tasks"][0].description).toBe("Description of Task 1");
            expect(todoList["tasks"][0].completed).toBe(false);
        });
    });
    describe("addTask", function () {
        test("should add a task", function () {
            var data = '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';
            jest.spyOn(fs, "readFileSync").mockReturnValue(data);
            var writeFile = jest.spyOn(fs, "writeFile");
            todoList.loadTasksFromJSON();
            todoList.addTask("Task 2", "Description of Task 2");
            expect(todoList["tasks"].length).toBe(2);
            expect(todoList["tasks"][1].id).toBe("1");
            expect(todoList["tasks"][1].name).toBe("Task 2");
            expect(todoList["tasks"][1].description).toBe("Description of Task 2");
            expect(todoList["tasks"][1].completed).toBe(false);
        });
    });
    describe("completeTask", function () {
        test("should complete a task", function () {
            var data = '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';
            jest.spyOn(fs, "readFileSync").mockReturnValue(data);
            todoList.loadTasksFromJSON();
            todoList.completeTask("Task 1");
            expect(todoList["tasks"][0].completed).toBe(true);
        });
    });
    describe("deleteTask", function () {
        test("should delete a task", function () {
            var data = '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';
            jest.spyOn(fs, "readFileSync").mockReturnValue(data);
            todoList.loadTasksFromJSON();
            todoList.deleteTask("Task 1");
            expect(todoList["tasks"].length).toBe(0);
        });
    });
    describe("showTaskList", function () {
        test("should show the task list", function () {
            var data = '[{"id":"0","name":"Task 1","description":"Description of Task 1","completed":false}]';
            jest.spyOn(fs, "readFileSync").mockReturnValue(data);
            var consoleSpy = jest.spyOn(console, "log");
            todoList.loadTasksFromJSON();
            todoList.showTaskList();
            expect(consoleSpy).toHaveBeenCalledWith("Task 0: Task 1  Description of Task 1 (Incomplete)");
        });
    });
});
