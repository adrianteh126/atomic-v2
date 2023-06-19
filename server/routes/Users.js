const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/get/:id', async (req, res) => {
  try {
    const t = await User.findById({ _id: req.params.id });
    if (!t) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('server/routes/Users.js: Get user by id ' + t._id); // Log the _id value
    res.json(t);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const tDelete = await User.findByIdAndDelete({ _id: req.params.id });
    if (!tDelete) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Server/Users.js: Delete user by id ' + tDelete._id); // Log the _id value
    res.json(tDelete);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/update/:id', async (req, res) => {

  try {
    const { user_name, email, password, image_url } = req.body;
    const updates = {};

    if (user_name) {
      updates.user_name = user_name;
    }

    if (email) {
      updates.email = email;
    }

    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      updates.password = hashedPassword;
    }

    if (image_url) {
      updates.image_url = image_url;
    }

    const tUpdate = await User.updateOne(
      { _id: req.params.id },
      updates
    );

    if (tUpdate.n === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('Server/Users.js: Update user by id ' + req.params.id); // Log the _id value
    res.json(tUpdate);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app