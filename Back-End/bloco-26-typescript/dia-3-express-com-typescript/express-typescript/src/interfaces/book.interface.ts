interface IBook {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export default IBook;

/* outra alternativa */

// export interface NewBook {
//   title: string;
//   price: number;
//   author: string;
//   isbn: string;
// };

// export interface Book extends NewBook {
//   id: number;
// };