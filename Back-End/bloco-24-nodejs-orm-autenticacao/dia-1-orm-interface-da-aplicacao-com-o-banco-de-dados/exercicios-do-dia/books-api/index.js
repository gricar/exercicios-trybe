require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.use('/books', require('./routes/booksRoute'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
