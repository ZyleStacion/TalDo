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
    // Store the task as a JSON object
    const { task, category, priority } = req.body;
    tasks.push({ task, category, priority });
    console.log(tasks);

    // Render the tasks in a new div
    res.status(201);
    res.render('index', { tasks: tasks });
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("The server is running on port:", PORT);
    }
    else {
        console.log("Error occured, server can't start", error);
    }
})