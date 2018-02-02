const productsArr = require('../testData');

module.exports = {
  isLogged: false,
  products: productsArr,
  productsFilters: {
    price: '',
    brand: '',
    color: '',
    OS: '',
    internalMemory: '',
    RAM: '',
    displaySize: '',
    displayResolution: '',
    camera: '',
    CPU: ''
  }
};