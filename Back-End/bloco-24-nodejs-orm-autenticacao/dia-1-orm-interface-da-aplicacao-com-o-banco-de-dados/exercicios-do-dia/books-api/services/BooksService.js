const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = (id) => Book.findByPk(id);

const create = async ({ title, author, pageQuantity, publisher }) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [bookUpdated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher
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
