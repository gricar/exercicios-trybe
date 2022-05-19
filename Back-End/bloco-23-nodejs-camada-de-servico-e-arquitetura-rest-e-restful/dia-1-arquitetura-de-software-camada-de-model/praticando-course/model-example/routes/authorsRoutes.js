const express = require('express');

const Author = require('../models/Author');

const AuthorsRoutes = express.Router();

AuthorsRoutes.get('/', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

AuthorsRoutes.get('/:id', async (req, res) => {
	const { id } = req.params;
	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Author not found' });

	res.status(200).json(author);
});

module.exports = AuthorsRoutes;
