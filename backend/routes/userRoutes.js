const express = require('express');
const _ = require('lodash');
const User = require('../models/User');
const { checkToken } = require('../middleware/checkToken');

const router = express.Router();

router.get('/', checkToken, (req, res) => {
  res.status(200).send(req.user);
});

router.put('/', checkToken, async ({ body, user }, res) => {
  const {
    email,
    address,
    phone,
  } = body;

  try {
    const foundUser = await User.findById(user.id).exec();

    await foundUser.replaceOne({
      ..._.omit(foundUser.toJSON(), ['id']),
      email: email || foundUser.email,
      address: address || foundUser.address,
      phone: phone || foundUser.phone,
    });

    return res.status(200).send({ message: 'User updated' });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
});

module.exports = router;