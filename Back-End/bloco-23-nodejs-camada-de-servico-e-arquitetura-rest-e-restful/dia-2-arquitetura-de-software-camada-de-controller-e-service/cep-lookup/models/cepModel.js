const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;  // Regex que identifica um CEP já formatado

// Função que formata um CEP
const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;  // Caso o CEP já esteja formatado, retorna o próprio CEP
  
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');  // Caso não esteja formatado, utiliza regex para adicionar a formatação
};

// Formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const findAddressByCep = async (cep) => {
  const treatedCep = cep.replace('-', '');  // Removemos todos os traços, pois armazenamos o CEP puro

  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep=?';
  const cepNumber = await connection.execute(query, cep);

  return getNewCep(cepNumber);
};

module.exports = {
  findAddressByCep,
}
