const express = require("express");
const app = express();

let port = 3000;

app.get("/", (req, res) => {
    res.send('This is a roott path')
    console.log("root request")
});

app.get("/search", (req, res) => {
    console.log("Search request")
    res.send("Let's search")
});

app.get("/contact", (req, res) => {
    console.log("Connect request")
    res.send("Let's connect")
});

app.get("/user/:username/:id" , (req , res) => {
    let{ username, id } = req.params;
    res.send(`welcome ${username}! Your id is ${id}`);
    console.log("request recieved")
    console.log(req.params)
});

app.get("*", (req, res) => { // Default only works when the path is incorrect.
    res.send("This path does not exist")
    console.log("invalid path")
});

app.use((req, res,next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.send("Hello ji, Sanskar Over hereeeee");
    next();
});

app.listen(3000, () => {
        console.log(`app is listening on ${port}`);
});