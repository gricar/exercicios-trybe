import { Pool, ResultSetHeader } from 'mysql2/promise';
import IBook from '../../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IBook[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as IBook[];
  }

  public async create(book: IBook): Promise<IBook> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }

  public async getById(id: number): Promise<IBook> {
    const result = await this.connection.execute('SELECT * FROM books WHERE id=?', [id]);
    const [rows] = result;
    const [book] = rows as IBook[];
    return book;
  }

  public async update(id: number, book:IBook) {
    const { title, price, author, isbn } = book;
    await this.connection.execute(
      'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
      [title, price, author, isbn, id]
    );
  }
}
