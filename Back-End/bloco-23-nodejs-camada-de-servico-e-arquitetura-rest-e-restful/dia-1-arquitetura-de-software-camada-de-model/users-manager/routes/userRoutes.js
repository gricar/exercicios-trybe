const express = require('express');

const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.get('/', middlewares.getAllUsers);
userRoutes.get('/:id', middlewares.findUserById);
userRoutes.post('/', middlewares.createUser);
userRoutes.put('/:id', middlewares.updateUser);

module.exports = userRoutes;
