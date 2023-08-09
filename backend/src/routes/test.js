const express = require('express');
const router = express.Router();
const {User} = require("../models/user");

router.get("/", (req, res) => {
    res.send("Hello express !!");
});
router.get("/sync", (req, res) => {
    User.sync({ force: true })
        .then(() => res.send("Table created!"))
        .catch((err) => res.status(500).send("Error: " + err));
});

module.exports = router;