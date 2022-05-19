const express = require('express');

const Author = require('../models/Author');

const AuthorsRoutes = express.Router();

AuthorsRoutes.get('/', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

module.exports = AuthorsRoutes;
