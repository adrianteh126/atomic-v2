const express = require('express');
const Todo = require('../models/Todos');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Get All Todo route
app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
  console.log('Route : Get all todos');
});

// Create new Todo
app.post('/new', async (req, res) => {
  // Generate a new ObjectId
  const newTodo = new Todo(
    req.body 
    //user_id: '60a8c2aeed439d001f28cadd', // Replace with the actual user ID
    // t_name: 'Complete assignment',
    // t_description: 'Finish the programming task',
    // t_progress: 0,
    // t_due_date: new Date('2023-06-15'), // Replace with the actual due date
    // t_priority: 'High',
    // t_status: 'To do',

    // Modify the data for testing
    // user_id: '6475eb01d50eda4ae0e7bb31',
    // t_name: 'Test',
    // t_description: 'Test',
    // t_progress: 5,
    // t_due_date: new Date('2023-06-10'), // Replace with the actual due date
    // t_priority: 'Log',
    // t_status: 'To do',
  );

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
    console.log('Route : Create todo ' + savedTodo._id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create new todo' });
  }
});

// Getter by id
app.get('/get/:id', async (req, res) => {
  const t = await Todo.findById(req.params.id);
  res.json(t);
});

// Delete a todo by id
app.delete('/delete/:id', async (req, res) => {
  const tDelete = await Todo.findByIdAndDelete(req.params.id);
  res.json(tDelete);
  console.log('Route : Delete todo by id ' + req.params.id);
});

// Update a todo by id
app.put('/update/:id', async (req, res) => {
  const tUpdate = await Todo.updateOne(
    { _id: req.params.id },
    // { $set: req.body }
    {
      t_name: 'Testing assignment',
      t_description: 'Finish the testing task',
      t_progress: 5,
      t_due_date: new Date('2023-07-15'), // Replace with the actual due date
      t_priority: 'Low',
      t_status: 'DONE',
    }
  );
  res.json(tUpdate);
  console.log("Route : Update todo by id " + req.params.id);
});

module.exports = app
