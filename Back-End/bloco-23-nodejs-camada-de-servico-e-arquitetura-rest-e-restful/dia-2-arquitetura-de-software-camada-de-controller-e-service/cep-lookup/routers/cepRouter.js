const express = require('express');
const rescue = require('express-rescue');

const cepController = require('../controllers/cepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', rescue(cepController.findAddressByCep));
cepRouter.post('/', rescue(cepController.registerNewCep));

module.exports = cepRouter;
