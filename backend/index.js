// Load environment variables from the .env file
require('dotenv').config();

// Import necessary libraries
const express = require('express');  // Express.js is a web application framework for Node.js
const path = require('path');  // Node.js module for working with file paths
const bodyParser = require('body-parser');  // Middleware to parse incoming request bodies
const cors = require('cors');  // Middleware for enabling Cross-Origin Resource Sharing
const mongoose = require('mongoose');  // Mongoose is an ODM library for MongoDB
const authRoutes = require('./routes/authRoutes');  // Import authentication routes
const catalogRoutes = require('./routes/catalogRoutes');  // Import catalog-related routes
const userRoutes = require('./routes/userRoutes');  // Import user-related routes
const cartRoutes = require('./routes/cartRoutes');  // Import shopping cart routes
const orderRoutes = require('./routes/orderRoutes');  // Import order-related routes

// Set the public path for serving static files
const publicPath = path.join(__dirname, '..', 'frontend', 'public');
const port = process.env.PORT || 5000;

// Create an instance of the Express application
const app = express();

let connectionRetries = 0;

// Function to connect to the MongoDB database with retry mechanism
const connectWithRetry = () => {
  console.log('CONNECTING TO DB...');

  mongoose.connect(process.env.MONGODB_URI, {
    auth: { authSource: 'admin' },
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  }).then(() => {
    console.log('CONNECTED TO DB!');
    clearTimeout(connectWithRetry);
  }).catch((err) => {
    console.log(err);

    connectionRetries++;

    // Retry connection with a delay if the number of retries is within a limit
    if (connectionRetries <= 4) {
      setTimeout(connectWithRetry, 5000);
    } else {
      clearTimeout(connectWithRetry);
    }
  });
};

// Initial database connection attempt
connectWithRetry();

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.json({
    limit: '10MB',
    type: 'application/json',
  }),
);
app.use(express.static(publicPath));  // Serve static files

// Define routes for different modules
app.use('/api/auth', authRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`SERVER NOW RUNNING ON PORT ${port}...`));
