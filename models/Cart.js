const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [
    {
      number: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      amount: Number
    }
  ]
});

module.exports = mongoose.model('Cart', cartSchema);