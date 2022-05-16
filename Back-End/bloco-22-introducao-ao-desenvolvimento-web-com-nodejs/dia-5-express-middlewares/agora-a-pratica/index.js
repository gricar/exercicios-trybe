const express = require('express');
const bodyParser = require('body-parser');

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
})

app.listen(3225, () => console.log("Ouvindo na porta 3225"));

//const { productName, infos: { saleDate, warrantyPeriod } } = req.body;