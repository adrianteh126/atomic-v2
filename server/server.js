// Packages
const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
})

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "register.html"));
})

app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "dashboard.html"));
})

app.get("/statistic", function (req, res) {
    res.sendFile(path.join(__dirname, "statistic.html"));
})

app.get("/settings", function (req, res) {
    res.sendFile(path.join(__dirname, "settings.html"));
})

// Retrive and calculate from POST method 
// app.post("/calculator", function (req, res) {
//     var a = parseFloat(req.body.a);
//     var b = parseFloat(req.body.b);
//     var sum = a + b;
//     res.send(a + " + " + b + " = " + sum);

// })

// 404 Error Handler
app.use((req, res) => {
    res.status(404).send('<h1>404 Error: Page Not Found</h1>');
});

// // Way to retrive data 
// app.post("/", function (req, res) {
//     var a = req.body.a; //retrieve a from POST method made
// })

// App listening on port 3000
// Can be access by localhost:3000 on browser
app.listen(3000, function () {
    console.log("Server started on port 3000");
})