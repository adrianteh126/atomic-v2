const express = require('express');
const User = require('../models/Users');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Create a new static user data
app.post('/new', async (req, res) => {
    // Static user data for testing
    const staticUser = {
      user_name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    };
  
    try {
      const newUser = new User(staticUser);
      const savedUser = await newUser.save();
    //   return saved User Data
      res.json(savedUser);

     //   return saved User id
    //   const userId = savedUser._id;
    //   res.json({ userId });
    } catch (error) {
      console.error('Failed to create user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
});

// Getter by id
app.get('/get/:id', async (req, res) => {
    const t = await User.findById({ _id : req.params.id })
    res.json(t)
  })

// Delete a user by id
app.delete('/delete/:id', async (req, res) => {
    const tDelete = await User.findByIdAndDelete({ _id : req.params.id })
    res.json(tDelete)
})
  
// Update a user by id
app.put('/update/:id', async (req, res) => {
const tUpdate = await User.updateOne(
    { _id: req.params.id }, 
    
    // { $set: req.body }
    {
        user_name: 'Adam',
        email: 'adam@example.com',
        password: 'adam123',
    } 
)
res.json(tUpdate)
})
module.exports = app