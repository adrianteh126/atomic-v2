// Packages
const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express();
app.use(express.urlencoded({ extended: true }));

// Handle CORS + middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
  res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// database 
const uri = "mongodb+srv://admin:admin@cluster0.kz0vhkq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/login.html", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
})

app.get("/dashboard.html", function (req, res) {
    res.sendFile(path.join(__dirname, "dashboard.html"));
})

app.get("/settings.html", function (req, res) {
    res.sendFile(path.join(__dirname, "settings.html"));
})

// Retrive and calculate from POST method 
// app.post("/calculator", function (req, res) {
//     var a = parseFloat(req.body.a);
//     var b = parseFloat(req.body.b);
//     var sum = a + b;
//     res.send(a + " + " + b + " = " + sum);

// })
// routes
const TodosRoute = require('./routes/Todos');
  app.use('/todos', TodosRoute)

const UsersRoute = require('./routes/Users');
  app.use('/users', UsersRoute)

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