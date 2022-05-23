require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
//const rescue = require('express-rescue');

// const Author = require('./controllers/Author');
const pingRouter = require('./routers/pingRouter');
const error = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

// app.get('/authors', rescue(Author.getAll));
app.use('/ping', pingRouter);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.use(error);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
