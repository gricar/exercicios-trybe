const cepModel = require('../models/cepModel');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (cep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  if (!CEP_REGEX.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  };

  const cepNumber = await cepModel.findAddressByCep(cep);

  if (!cepNumber) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return cepNumber;
};

module.exports = {
  findAddressByCep,
}
