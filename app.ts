import express from "express";

// Source - https://stackoverflow.com/a/64383997
// Posted by adlopez15
// Retrieved 2026-03-31, License - CC BY-SA 4.0
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path  from "path";
import { body, validationResult } from "express-validator";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const tasks: { task: any; category: any; priority: any; }[] = [];

app.get("/", (req, res) => {
    res.status(500);
    res.render('index', { tasks: tasks });
})

app.post("/add-task", (req, res) =>{
    // TODO: Use a unique ID instead of unique names
    
    // Store the task as a JSON object
    const { task, category, priority } = req.body;
    tasks.push({ task, category, priority });
    console.log(tasks);

    // Redirect back to index (now with tasks)
    res.redirect('/');
})

app.post("/complete-task", (req, res) => {
    console.log("Completed task!");

    // Render alert

    // Update task list
})

app.post("/delete-task", (req, res) => {
    console.log("Delete task");
    // Remove the task from the array
    const { taskRemove, category, priority }  = req.body;
    console.log("Task to remove: ", taskRemove);
    const index = tasks.findIndex(task => task.task == taskRemove);
    
    if (index != -1) {
        tasks.splice(index, 1);
    }
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("The server is running on port:", PORT);
    }
    else {
        console.log("Error occured, server can't start", error);
    }
})