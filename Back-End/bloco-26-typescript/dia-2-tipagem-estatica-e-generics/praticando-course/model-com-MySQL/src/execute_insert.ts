import readline from 'readline-sync';
import connection from './database/models/connection';
import BookModel, { Book } from "./database/models/Book";


const main = async () => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o título do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title , price , author , isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook)
}

export default main;
