const Joi = require('joi');
const cepService = require('../services/cepService');

const findAddressByCep = async (req, res, next) => {
  const { cep } = req.params;
  console.log(cep);

  const address = await cepService.findAddressByCep(cep);
  console.log(address);

  if (!address.error) return next(address.error);

  return res.status(200).json(address);
};

const registerNewCep = async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newAddress = await cepService.registerNewCep(req.body);

  if (newAddress.error) return next(newAddress.error);

  return res.status(201).json(newAddress);
};

module.exports = {
  findAddressByCep,
  registerNewCep,
};
