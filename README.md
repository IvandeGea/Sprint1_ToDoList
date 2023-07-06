# Task To-Do List CLI

This is a command-line interface (CLI) for managing a task to-do list. It allows you to add, complete, delete, and list tasks using simple commands. Follow the instructions below to execute the CLI.

## Installation

1. Make sure you have Node.js installed on your machine. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

2. Clone the repository or download the source code files to your local machine.

3. Open a terminal or command prompt and navigate to the directory where the source code files are located.

4. Run the following command to install the required dependencies:

   ```shell
   npm install
   ```

## Usage

To use the Task To-Do List CLI, follow the instructions below:

Open a terminal or command prompt and navigate to the directory where the source code files are located.

Run the following command to execute the CLI:

Copy code

```shell
node cli.js [command] [arguments]
```

Replace [command] with one of the available commands: #add, complete, delete, or list.

For the add command, provide the name and description of the task as arguments:

Copy code

```shell
node cli.js add "Task Name" "Task Description"
```

For the complete command, provide the name of the task as an argument:

Copy code

```shell
node cli.js complete "Task Name"
```

For the delete command, provide the ID of the task as an argument:

Copy code

```shell
node cli.js delete "Task Name"
```

For the list command, no additional arguments are required:

Copy code

```shell
node cli.js list
```

The CLI will execute the specified command and provide the corresponding output or success message.

You can use the available commands to manage your task to-do list efficiently.

Enjoy using the Task To-Do List CLI!
