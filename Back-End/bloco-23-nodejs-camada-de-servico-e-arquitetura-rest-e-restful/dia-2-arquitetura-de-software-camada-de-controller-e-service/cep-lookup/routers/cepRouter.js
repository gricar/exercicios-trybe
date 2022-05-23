const express = require('express');
const rescue = require('express-rescue');

const cepController = require('../controllers/cepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', rescue(cepController.findAddressByCep));

module.exports = cepRouter;
