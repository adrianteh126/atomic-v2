const express = require('express');
const Todo = require('../models/Todos');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Get All Todo route
app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create new Todo
app.post('/new', async (req, res) => {
  // Generate a new ObjectId
  const newTodo = new Todo({
    //user_id: '60a8c2aeed439d001f28cadd', // Replace with the actual user ID

    t_name: 'Complete assignment',
    t_description: 'Finish the programming task',
    t_progress: 0,
    t_due_date: new Date('2023-06-15'), // Replace with the actual due date
    t_priority: 'High',
    t_status: 'To do',
  });
  
  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
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
});

module.exports = app