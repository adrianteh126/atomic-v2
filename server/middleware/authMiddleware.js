const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        console.log('middleware/authMiddleware.js : checkUser invalid ');
        res.status(401).json({ error: 'Invalid token' });
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        console.log('middleware/authMiddleware.js : checkUser valid - ' + user._id);
        res.json({ _id: user._id });
      }
    });
  } else {
    res.locals.user = null;
    res.status(404).json({ error: 'No token is passed' })
  }
};


module.exports = { requireAuth, checkUser };