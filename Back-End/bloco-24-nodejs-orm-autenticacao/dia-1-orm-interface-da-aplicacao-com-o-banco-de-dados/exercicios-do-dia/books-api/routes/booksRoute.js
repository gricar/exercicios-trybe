const express = require('express');

const booksRoute = express.Router();

const BooksController = require('../controllers/BooksController');

booksRoute.get('/', BooksController.getAll);
booksRoute.get('/:id', BooksController.getById);
booksRoute.post('/', BooksController.create);


module.exports = booksRoute;
