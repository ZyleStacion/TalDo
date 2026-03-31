import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

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