const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);
/* Estamos utilizando um Array para passar mais de um middleware para uma mesma rota.
Poderíamos passar cada middleware como um parâmetro, mas um Array deixa mais explícita
a intenção de, realmente, utilizarmos vários middlewares numa mesma rota. */

app.use(errorMiddleware);
app.listen(3002);