import connection from '../database/models/connection';
import BookModel from '../database/models/book.model';
import IBook from '../interfaces/book.interface';

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
}

export default BookService;