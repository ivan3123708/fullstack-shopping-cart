const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.get('/api/hello', (req, res) => {
  console.log('HELLO WORLDS!!!');
  res.send('Added to cart');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log('SERVER NOW RUNNING...'));