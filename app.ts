import express from "express";

// Source - https://stackoverflow.com/a/64383997
// Posted by adlopez15
// Retrieved 2026-03-31, License - CC BY-SA 4.0

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path  from "path";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.status(500);
    res.render('index');
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("The server is running on port:", PORT);
    }
    else {
        console.log("Error occured, server can't start", error);
    }
})