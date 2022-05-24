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

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';

  // Executamos a query, selecionando o primeiro resultado, caso exista e assumindo `null`, caso contrário
  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));
  
  if (!result) return null;  // Caso nenhum resultado seja encontrado, retornamos `null`

  return getNewCep(result);
};

const registerNewCep = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');

  const query = `
    INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;
  
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAddressByCep,
  registerNewCep,
};
