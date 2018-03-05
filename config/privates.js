const privatesDev = require('./dev');
const privatesProd = require('./prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = privatesProd;
} else {
  module.exports = privatesDev;
}