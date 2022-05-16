const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');


const validateProductName = require('./middlewares/validateProductName');
const validateInfos = require('./middlewares/validateInfos');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarrantyPeriod = require('./middlewares/validateWarranty');

const app = express();

app.use(bodyParser.json());

app.post('/sales',
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
  (req, res) => {
  res.status(201).json({ message: 'Venda cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }

    const token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3225, () => console.log("Ouvindo na porta 3225"));

//const { productName, infos: { saleDate, warrantyPeriod } } = req.body;