const express = require("express");
const app = express();

let port = 3000;

// app.use((req, res,) => {
    //     console.log(`Request received: ${req.method} ${req.url}`);
    //     res.send("Hello ji, Sanskar Over hereeeee")
    //   });
    
app.get("/", (req, res) => {
    res.send('This is a roott path')
})
// app.get("/search", (req, res) => {
    //     res.send("Let's search")
    // }) 
app.get("/contact", (req, res) => {
    console.log("Connect request")
    res.send("Let's connect")
})
// app.get("*", (req, res) => { // Default only works when the path is incorrect.
//     res.send("This path does not exist")
// })

// app.get("/:username", (req, res) => {
//     console.log(req.params)
//     let {username}= req.params;
// })

app.get("/:username", (req, res) => {
    console.log(req.params)
    let { username } = req.params;
    res.send(`welcome ${username}`)
});


// app.get("/:username/:id" , (req , res) => {
//     let{ username, id } = req.params;
//     res.send(`hello, Sanskar Over here${username}`);
//     console.log("request recieved")
// });


app.listen(port, () => {
        console.log(`app is listening on ${port}`);
})