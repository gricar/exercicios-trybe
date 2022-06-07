const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

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

const getByAuthor = async (author) => {
  const booksByAuthor = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return booksByAuthor;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
