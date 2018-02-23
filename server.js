const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const requireLogin = require('./middleware/requireLogin');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const privates = require('./config/privates');
const seedProducts = require('./seeds/products');

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect(privates.mongoDBURI);

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
  Product.find({})
    .then((foundProduct) => {
      res.send(foundProduct);
    });
});

app.get('/api/logged_user', (req, res) => {
  res.send(req.user);
});

app.post('/api/account', (req, res) => {
  User.findById(req.user)
    .then((foundUser) => {
      foundUser.email = req.body.email;
      foundUser.address = req.body.address;
      foundUser.phone = req.body.phone;
      foundUser.save()
        .then(() => res.redirect('/account'));
    });
});

// CART ROUTES

// show route
app.get('/api/cart', requireLogin, (req, res) => {
  Cart.findOne({ user: req.user.id })
    .populate('items.product')
    .exec((err, cart) => res.send(cart));
});

// create route
app.post('/api/cart', requireLogin, (req, res) => {

  const user = req.body.user;
  const item = {
    product: req.body.product,
    amount: req.body.amount
  };

  Cart.findOne({ user: user })
    .then((foundCart) => {
      if(foundCart) {
        let products = foundCart.items.map((item) => item.product + '');
        if(products.includes(item.product)) {
          Cart.findOneAndUpdate({
            user: user,
            items: {
              $elemMatch: { product: item.product }
            }},
            {
              $inc: { 'items.$.amount': item.amount }
            }).exec();
        } else {
          foundCart.items.push(item);
          foundCart.save();
        }
      } else {
        Cart.create({
          user: user,
          items: [item]
        });
      }
  });
});

// update route
app.put('/api/cart', (req, res) => {
  Cart.findById(req.query.cartId)
    .then((foundCart) => {
      foundCart.items = foundCart.items.filter((item) => item._id != req.query.itemId);
      foundCart.save(() => res.end());
    });
});

// destroy route
app.delete('/api/cart', (req, res) => {
  Cart.findByIdAndRemove(req.query.id)
    .then(() => res.end());
});

// AUTH ROUTES

app.post('/auth/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone
  };

  User.register(newUser, req.body.password, () => {
      passport.authenticate('local')(req, res, () => res.redirect('/'));
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