const connection = require('../db');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
  return true;
};

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const create = ({ firstName, lastName, email, password }) => {

  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return connection.execute(query, [firstName, lastName, email, password])
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email })); // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido - insertId
};

module.exports = {
  isValid,
  formatUser,
  create,
};
