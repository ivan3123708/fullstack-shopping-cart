const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const privates = require('./config/privates');

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect(privates.mongoDBURI);

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone
  };

  User.create(newUser, (err, result) => {
    if(err) console.log(err);
    else res.redirect('/');
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log('SERVER NOW RUNNING...'));