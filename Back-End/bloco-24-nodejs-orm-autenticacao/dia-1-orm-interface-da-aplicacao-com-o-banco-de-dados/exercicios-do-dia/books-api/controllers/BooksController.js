const BookService = require('../services/BooksService');

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' })

  return res.status(200).json(book);
};

const create = async (req, res) => {
  const book = await BookService.create(req.body);

  return res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;

  const updatedUser = await BookService.update(id, req.body);

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: "Book updated" });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
