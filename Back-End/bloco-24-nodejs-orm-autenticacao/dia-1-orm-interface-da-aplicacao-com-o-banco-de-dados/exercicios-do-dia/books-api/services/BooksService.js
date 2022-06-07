const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = (id) => Book.findByPk(id);

module.exports = {
  getAll,
  getById,
};
