const express = require('express');

const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.get('/', middlewares.getAllUsers);
userRoutes.post('/', middlewares.createUser);

module.exports = userRoutes;
