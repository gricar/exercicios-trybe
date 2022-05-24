require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const pingRouter = require('./routers/pingRouter');
const cepRouter = require('./routers/cepRouter');
const error = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use(error);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
