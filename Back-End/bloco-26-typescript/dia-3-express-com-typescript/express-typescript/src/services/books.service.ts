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

  public async getById(id: number): Promise<IBook | null> {  //retorno pode ter dois tipos (generics) caso exista no DB
    const book = await this.model.getById(id);

    return book || null;  //podemos especificar o retorno com null, caso não haja livros com esse id. entretando no controller já vai pegar como undefined. entao é opcional esse retorno.
  }

  public async create(book: IBook): Promise<IBook> {
    return this.model.create(book);
  }

  public async update(id: number, book: IBook): Promise<void> { //indica que o retorno da função é vazio -> void
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found :/');
    }

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found :/');
    }

    return this.model.remove(id);
  }
}

export default BookService;