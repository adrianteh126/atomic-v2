const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("Token: " + token);

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log("Error: " + err.message);
        res.status(400).json({ err });
      } else {
        console.log("Decoded Token: " + decodedToken);
        res.status(200).json({ decodedToken: decodedToken });
      }
    });
  } else {
    res.redirect('http://localhost:8080/');
    console.log("No token!!!");
  }
};

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

module.exports = { requireAuth, checkUser };