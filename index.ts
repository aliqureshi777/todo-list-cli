#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

    
while (condition)
{
    let task = await inquirer.prompt(
    [
        {
            message: "What you want to add?",
            type: "input",
            name: "todo",
        },
        {
            message: "Do you want to add more?",
            type: "confirm",
            name: "AddMore",
            default: "false",
        }
    ]);

todos.push(task.todo);
condition = task.AddMore
console.log(todos)
}

