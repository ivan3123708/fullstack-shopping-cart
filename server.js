const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const privates = require('./config/privates');
const seedProducts = require('./seeds/products');

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect(privates.mongoDBURI);

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
  secret: privates.sessionSecret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// seed catalog data
// seedProducts();

app.get('/api/catalog', (req, res) => {
  Product.find({}, (err, foundProduct) => {
    if(err) {
      console.log(err);
    } else {
      console.log('CATALOG INITIALIZED');
      res.send(foundProduct);
    }
  });
});

app.get('/api/logged_user', (req, res) => {
  res.send(req.user);
});

// AUTH ROUTES

app.post('/auth/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone
  };

  User.register(newUser, req.body.password, (err, user) => {
    if(err) {
      console.log(err);
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  });
});

app.post('/auth/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/');
});

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log('SERVER NOW RUNNING...'));