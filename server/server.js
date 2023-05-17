const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/login.html");
})

app.get("/dashboard.html", function (req, res) {
    res.sendFile(__dirname + "/dashboard.html");
})

app.get("/settings.html", function (req, res) {
    res.sendFile(__dirname + "/settings.html");
})

// Retrive and calculate from POST method 
// app.post("/calculator", function (req, res) {
//     var a = parseFloat(req.body.a);
//     var b = parseFloat(req.body.b);
//     var sum = a + b;
//     res.send(a + " + " + b + " = " + sum);

// })

// 404 Error Handler
app.use((req, res, lanjiao) => {
    res.status(404).send('<h1>404 Error: Page Not Found</h1>');
});

// // Retrive data 
// app.post("/", function (req, res) {
//     var a = req.body.a; //retrieve a from POST method made
// })

app.listen(3000, function () {
    console.log("Server started on port 3000");
})