const express = require('express');

const booksRoute = express.Router();

const BooksController = require('../controllers/BooksController');

booksRoute.get('/', BooksController.getAll);
booksRoute.get('/:id', BooksController.getById);
booksRoute.post('/', BooksController.create);
booksRoute.put('/:id', BooksController.update);


module.exports = booksRoute;
