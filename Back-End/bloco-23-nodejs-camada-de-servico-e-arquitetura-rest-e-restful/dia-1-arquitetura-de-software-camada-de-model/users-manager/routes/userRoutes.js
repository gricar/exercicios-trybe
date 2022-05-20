const express = require('express');

const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.post('/', middlewares.createUser);

module.exports = userRoutes;
