# MERN stack shopping cart

<img src="githubImg/mobile_shop.jpg"/>

## Description

Shopping cart app build with MERN stack and using RESTful API design. Responsive front-end design done with Material-UI, Passport used for authentication, database hosted on mLab. Deployed on Heroku.

You can get and view the list of all products from the API, register, add products to cart, remove specific product or empty entire cart, make order...

View demo <a href="http://ij-mobile-shop.herokuapp.com/">here</a> or go to "Installation and Usage" and follow the instructions to install and use.

## Technologies & Tools

### Front-end:

* React
* Redux
* Material-UI
* Webpack
* Axios

### Backend:

* Node/Express
* MongoDB/Mongoose
* Passport

## Installation and Usage

### Requirements:

* Node.js installed
* MongoDB connection

### Steps:
1. Clone repo on your local machine:
```
$ git clone https://github.com/ivan3123708/fullstack-shopping-cart.git
```
2. Install server-side dependencies:
```
$ cd fullstack-shopping-cart
$ npm install
```
3. Install client-side dependencies:
```
$ cd client
$ npm install
```
4. In server.js:<br/>

remove line 14,<br/>
replace mongoDB connection URI with your own, on line 20:<br/>
```
mongoose.connect(privates.mongoDBURI); --> to --> mongoose.connect(<Insert your mongoDB connection string here>);
```
replace express-session secret on line 27:<br/>
```
secret: privates.sessionSecret, --> to --> secret: <Insert your secret string here>,
```
6. Build the app
```
$ npm run build
```
7. Execute the app:<br/>
```
$ cd ..
$ npm run start
```
8. App now running on localhost:5000
