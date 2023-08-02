const express = require('express');
const test = require('../routes/test');

module.exports = function (app){
    app.use(express.json());
    app.use('/api/test', test);
}