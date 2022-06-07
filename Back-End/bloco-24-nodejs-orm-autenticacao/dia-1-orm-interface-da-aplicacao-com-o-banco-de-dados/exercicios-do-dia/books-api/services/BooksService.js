const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = (id) => Book.findByPk(id);

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [bookUpdated] = await Book.update(
    {
      title,
      author,
      pageQuantity
    },
    { where: { id } },
  );

  return bookUpdated;
};

const remove = (id) => Book.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
