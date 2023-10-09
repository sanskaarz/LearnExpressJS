const express = require("express");
const app = express();

let port = 3000;

app.use((req, res,next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send('This is a roott path')
    console.log("root request")
});

app.get("/find", (req, res) => {
    console.log("Search request")
    res.send("What to find")
});

app.get("/contact", (req, res) => {
    console.log("Connect request")
    res.send("Let's connect")
    console.log(req.params)
});

app.get("/user/:username/:id" , (req , res) => {
    let{ username, id } = req.params;
    res.send(`welcome ${username}! Your id is ${id}`);
    console.log("request recieved")
});

app.get("/search" , (req,res) =>{
    let {q} = req.query
    console.log(req.query)
    if(!q){
        res.send("No Search Query")
    }

    res.send(`These are the results for your query: ${q}`)
});

app.get("*", (req, res) => { // Default only works when the path is incorrect.
    res.send("This path does not exist")
    console.log("invalid path")
});

app.listen(8080, () => {
        console.log(`app is listening on ${port}`);
});
