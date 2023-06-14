const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
  user_name: {
    type: String,
    minlength: [3, 'Minimum user name length is 3 characters'],
    maxlength: [12, 'Maximum user name length is 12 characters'],
    required: [true, 'Please enter a user name'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
}, { timestamps: true });

// fire a function before doc saved to db
UsersSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
UsersSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;