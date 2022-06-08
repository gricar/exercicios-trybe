const express = require('express');

const booksRoute = express.Router();

const BooksController = require('../controllers/BooksController');

booksRoute.get('/', BooksController.getAll);
booksRoute.post('/', BooksController.create);
booksRoute.get('/:id', BooksController.getById);
booksRoute.put('/:id', BooksController.update);
booksRoute.delete('/:id', BooksController.remove);

module.exports = booksRoute;
