// Packages
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Handle CORS + middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");  // If using .fetch and not axios
  res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(cookieParser());

// Database 
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
app.use(authRoutes);
// app.get('*', checkUser);

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// })

// app.get("/login", function (req, res) {
//   res.sendFile(path.join(__dirname, "login.html"));
// })

// app.get("/dashboard", requireAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "dashboard.html"));
// })

// app.get("/settings", requireAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "settings.html"));
// })

// app.get("/statistic", requireAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "statistic.html"));
// })

// cookies
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get('/set-cookies', (req, res) => {

//   // res.setHeader('Set-Cookie', 'newUser=true');
  
//   res.cookie('newUser', false);
//   res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

//   res.send('you got the cookies!');

// });

// app.get('/read-cookies', (req, res) => {

//   const cookies = req.cookies;
//   console.log(cookies.newUser);

//   res.json(cookies);

// });

// Retrive and calculate from POST method 
// app.post("/calculator", function (req, res) {
//     var a = parseFloat(req.body.a);
//     var b = parseFloat(req.body.b);
//     var sum = a + b;
//     res.send(a + " + " + b + " = " + sum);
// })

// routes
// modify the route name after integrate with frontend
const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute)

// const UsersRoute = require('./routes/Users');
// app.use('/users', UsersRoute)

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send('<h1>404 Error: Page Not Found</h1>');
});

// App listening on port 3000
// Can be access by localhost:3000 on browser
app.listen(3000, function () {
  console.log("Server started on port 3000");
})