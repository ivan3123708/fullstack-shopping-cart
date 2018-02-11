const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  info: {
    name: String,
    dimensions: String,
    weight: String,
    displayType: String,
    displaySize: String,
    displayResolution: String,
    os: String,
    cpu: String,
    internalMemory: String,
    ram: String,
    camera: String,
    batery: String,
    color: String,
    price: Number,
    photo: String
  },
  tags: {
    priceRange: String,
    brand: String,
    color: String,
    os: String,
    internalMemory: String,
    ram: String,
    displaySize: String,
    displayResolution: String,
    camera: String,
    cpu: String
  }
});

module.exports = mongoose.model('Product', productSchema);