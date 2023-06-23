const User = require("../models/Users");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      if (properties.path === 'password') {
        errors.password = properties.message;
      } else {
        errors[properties.path] = properties.message;
      }
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

// Packages
const path = require("path");

// controller actions
module.exports.signup_get = (req, res) => {
  res.sendFile(path.join(__dirname, "../signup.html"));
}

module.exports.login_get = (req, res) => {
  res.sendFile(path.join(__dirname, "../login.html"));
}

// Create a new user 
module.exports.signup_post = async (req, res) => {
  const { username, email, password1, password2 } = req.body;
  const image_url = "https://res.cloudinary.com/dt2tgkzda/image/upload/v1686811626/atnny5s7szxcaleyomi6.jpg";
  console.log({ username, email, password1, password2 });
  console.log(image_url);

  try {
    if (password1 === password2) {
      const user = await User.create({ user_name: username, email: email, password: password1, image_url: image_url }); // let user to uplaod img and store in image_url later
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user._id, token: token });
      console.log('Server/authController.js : Create user with id ' + user._id);
    }
    if (password1 !== password2) {
      let error = {
        password: 'Passwords do not match, please re-enter.'
      }
      res.status(400).json({ error: error });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, token: token });

    // Access the Set-Cookie header
    const setCookieHeader = res.get('Set-Cookie');
    console.log('Set-Cookie header:', setCookieHeader);
    // Extract the value of the jwt cookie
    const jwtCookieValue = setCookieHeader.split(';')[0].split('=')[1];
    console.log('jwt cookie value:', jwtCookieValue);

    console.log('Server/authController.js: User login with id ' + user._id);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};


module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

let jwt_secret = "net ninja secret";
module.exports.forgot_password_post = async (req, res, next) => {
  const { email } = req.body;
  const verified = await User.exists({ email: email });
  let oldUser = await User.find({ email: email });
  // check if whether user exists in database
  try {
    if (verified) {
      // Create a one-time link that valid for 15 minutes
      const secret = jwt_secret + oldUser[0].password;
      const payload = {
        email: oldUser[0].email,
        id: oldUser[0]._id
      }
      res.status(200).json({ payload: payload });
      const token = jwt.sign(payload, secret, { expiresIn: '15m' });
      const link = `http://localhost:8080/resetPassword/${oldUser[0]._id}/${token}`;
      let subject = "Atomic Account Password Reset";
      let message = "Dear user,\n\nKindly please click on the below link to reset your password. The link will be expired in 15 minutes. Thank you.\n\n" + link;
      sendEmail_reset_password(email, subject, message);
    }
    else {
      let error = "Email Not Found"
      await res.status(400).json({ error: error });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports.reset_password_get = async (req, res, next) => {
  const { id, token } = req.params;
  console.log({ id, token });
  try {
    // check if whether user exists in database
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid user ID");
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      console.log("User not found");
      return res.status(404).json({ error: 'User not found' });
    }
    const secret = jwt_secret + oldUser.password;
    const payload = jwt.verify(token, secret);
    const query = {
      email: payload.email,
      status: "Not verified."
    };
    console.log("Query" + query);
    res.status(200).json({ query: query });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error });
  }
}

module.exports.reset_password_post = async (req, res, next) => {
  // extract from the url
  const { password1, password2, email } = req.body;
  try {
    if (password1 === password2) {
      // Hash the password
      const salt = await bcrypt.genSalt();
      const encryptedPassword = await bcrypt.hash(password2, salt);
      // Check password1 and password2 whether if they are matched
      // Update in database with new password
      const status = await User.findOneAndUpdate({ email: email }, { password: encryptedPassword });
      res.status(200).json({ status: status });
    }
    if (password1 !== password2) {
      let error = {
        password: 'Passwords do not match, please re-enter.'
      }
      res.status(400).json({ error: error });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error });
  }
}

async function sendEmail_reset_password(to, subject, message) {
  // Set up the SMTP transport configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server host
    port: 587, // Replace with the SMTP server port
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user: 'junbin147102@gmail.com', // Replace with your email address
      pass: 'mpnyebsilujbhrjy', // Replace with your email password
    }
  });
  // Set up the email options
  const mailOptions = {
    from: "junbin147102@gmail.com", // Sender address
    to, // Recipient address
    subject,
    text: message,
  };
  // Send the email
  await transporter.sendMail(mailOptions)
}