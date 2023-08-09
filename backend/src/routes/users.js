const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const router = express.Router();
const {User, userValidate} = require("../models/user");

router.post('/sign-up', async (req, res) => {
    const {error} = userValidate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user) return res.status(400).send('User already registered.');

    user = await User.build(_.pick(req.body, ['name', 'lastName', 'email', 'phoneNumber', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res.cookie('x-auth-token', token, { httpOnly: true });
    res.send(user);
});

module.exports = router;