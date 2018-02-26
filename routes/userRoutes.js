const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  res.send(req.user);
});

router.post('/', (req, res) => {
  User.findById(req.user)
  .then((foundUser) => {
    foundUser.email = req.body.email;
    foundUser.address = req.body.address;
    foundUser.phone = req.body.phone;
    foundUser.save()
    .then(() => res.redirect('/account'));
  });
});

module.exports = router;