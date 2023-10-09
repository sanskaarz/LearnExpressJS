const express = require("express");
const app = express();

let port = 3000;

app.use((req, res,) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.send("Hello ji, Sanskar Over hereeeee")
});
    
app.get("/", (req, res) => {
    res.send('This is a roott path')
});


app.get("/search", (req, res) => {
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


app.listen(port, () => {
        console.log(`app is listening on ${port}`);
});


const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment with skipped elements
const [first, , third] = numbers;

console.log(first);  // Outputs: 1
console.log(third);  // Outputs: 3