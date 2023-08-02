const express = require('express');
const test = require('../routes/test');
const error = require('../middlewares/error');

module.exports = function (app){
    app.use(express.json());
    app.use('/api/test', test);
    // another routes
    app.use(error);
}