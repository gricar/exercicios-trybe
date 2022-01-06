// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const names = books.reduce( (acc, currObj, index, array) => {
    if (index === array.length -1) return `${acc} ${currObj.author.name}.`;
    return `${acc} ${currObj.author.name},`;
    }, ''); // valor inicial necessário para não ser array e sim string
  return names.trim(); // trim remove os espaços em branco dos dois lados de uma string -> neste caso era o espaço vazio inicial.
};

console.log(reduceNames());

/* ------------------------------------------------------------------------------ */

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult3 = 43;

function averageAge() {
  const sumAges = books.reduce((acc, currObj) => (
  acc + (currObj.releaseYear - currObj.author.birthYear)
  ), 0);
  return sumAges / books.length;
};

console.log(averageAge());

// outra solução utilizando map e reduce
function averageAgeMapReduce() {
  const arrayDeltaAge = books.map(book => book.releaseYear - book.author.birthYear);
  const sum = arrayDeltaAge.reduce((acc, val) => acc + val);
  return sum / arrayDeltaAge.length;
};

//console.log(averageAgeMapReduce());

/* ------------------------------------------------------------------------------ */

// 4 - Encontre o livro com o maior nome.
const expectedResult4 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((biggestBook, currObjBook) => {
    if (biggestBook.name.length > currObjBook.name.length) {
      return biggestBook;
    }
    return currObjBook;
  })
};

console.log(longestNamedBook());
