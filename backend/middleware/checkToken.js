const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];

  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];

    jwt.verify(token, process.env.PRIVATE_KEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        User.findOne({ username: data }).exec((err, user) => {
          req.user = user;
          next();
        });
      }
    })
  } else {
    res.sendStatus(403);
  }
}

module.exports = {
  checkToken,
}
