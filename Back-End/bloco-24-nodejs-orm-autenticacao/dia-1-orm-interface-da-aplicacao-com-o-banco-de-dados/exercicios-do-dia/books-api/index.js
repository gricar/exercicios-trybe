require('dotenv').config();
const express = require('express');

const BooksController = require('./controllers/BooksController');

const app = express();

app.use(express.json());

app.get('/books', BooksController.getAll);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
