const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.status(200).json(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
