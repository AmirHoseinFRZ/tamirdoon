const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next){
    const token = req.cookies.token;

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, config.get('jwtPrivateKey'), (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
}