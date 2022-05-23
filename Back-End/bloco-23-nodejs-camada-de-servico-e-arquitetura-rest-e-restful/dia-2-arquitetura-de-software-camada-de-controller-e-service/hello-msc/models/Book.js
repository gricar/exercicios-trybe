const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const getBybookId = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE book_id=?;'
  const [books] = await connection.execute(query, [bookId]);

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return {
    id: book[0].id,
    title: book[0].title,
    authorId: book[0].author_id,
  };
}

const createBook = async (title, bookId) => {
  const [book] = await connection.execute(
    'INSERT INTO model_example.books (title, book_id) VALUES (?,?)',
  [title, bookId],
  );
  return ({ id: book.insertId, title, bookId });
};

module.exports = {
  getAll,
  getById,
  createBook,
};
