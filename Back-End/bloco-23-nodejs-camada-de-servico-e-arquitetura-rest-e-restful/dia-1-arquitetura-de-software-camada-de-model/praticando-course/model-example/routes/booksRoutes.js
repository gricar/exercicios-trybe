const express = require('express');

const Book = require('../models/Book');

const booksRoutes = express.Router();

booksRoutes.get('/', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});
// localhost:3000/books?author_id=2

booksRoutes.post('/', async (req, res) => {
	try {
		const { title, author_id } = req.body;

		if (!Book.isValid(title, author_id)) {
			return res.status(400).json({ message: 'Dados inválidos' });
		}
	
		await Book.create(title, author_id);
	
		res.status(201).json({ message: 'Livro criado com sucesso! '});
	} catch (err) {
		res.status(500).end();
	}
});

booksRoutes.get('/:id', async (req, res) => {
	const { id } = req.params;

	const book = await Book.getById(id);

	if (!book) return res.status(400).json({ message: 'Book not found' });

	return res.status(200).json(book);
});
// localhost:3000/books/7

module.exports = booksRoutes;
