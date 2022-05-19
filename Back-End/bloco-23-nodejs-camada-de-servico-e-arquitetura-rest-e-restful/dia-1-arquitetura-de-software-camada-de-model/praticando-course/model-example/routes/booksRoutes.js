const express = require('express');

const Book = require('../models/Book');

const booksRoutes = express.Router();

booksRoutes.get('/', async(req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});
// localhost:3000/books?author_id=2

module.exports = booksRoutes;
