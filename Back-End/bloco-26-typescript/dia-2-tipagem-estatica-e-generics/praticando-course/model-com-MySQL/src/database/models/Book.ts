//Implementando um model como uma classe
import { Pool, ResultSetHeader } from "mysql2/promise";

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> { //especificamos que o resultado da função é uma Promise que encapsula um array de objetos do tipo Book. Precisamos fazer isso, pois por se tratar de uma função assíncrona, o retorno imediato dessa função é uma Promise. 
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];  //usamos a palavra reservada as que faz uma adaptação (cast) do objeto rows, que originalmente é um objeto do tipo RowDataPacket[], mas que agora passa a esperar uma array de objetos da interface Book.
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}