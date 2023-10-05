const express = require("express");
const app = express();

let port = 3000;

// app.use((req, res,) => {
//     console.log(`Request received: ${req.method} ${req.url}`);
//     res.send("Hello ji, Sanskar Over hereeeee")
//   });

app.get("/", (req, res) => {
    res.send('Hello World!')
  })
app.get("/search", (req, res) => {
    res.send("Let's search")
}) 
app.get("/contact", (req, res) => {
    res.send("Let's connect")
})
app.get("*", (req, res) => {
    res.send("This path does not exist")
})

app.listen(port, () => {
        console.log(`app is listening on ${port}`);
})


    