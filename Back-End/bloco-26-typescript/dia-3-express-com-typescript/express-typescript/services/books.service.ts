import connection from '../database/models/connection';
import BookModel from '../database/models/book.model';
import IBook from '../interfaces/book.interface';
import { NotFoundError } from 'restify-errors';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<IBook[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<IBook> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: IBook): Promise<IBook> {
    return this.model.create(book);
  }

  public async update(id: number, book: IBook): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found :/');
    }

    return this.model.update(id, book);
  }
}

export default BookService;