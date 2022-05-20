const connection = require('../db');
const Joi = require('joi');

const userSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()}).messages({
	'any.required': 'O campo {{: id="label" }} é obrigatório',
	'string.min': 'O campo {{: id="label" }} deve ter, pelo menos, {{: id="limit" }} caracteres',
	'string.email': 'Informe um email válido no campo {{: id="label" }}'});

/* const isValid = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
  return true;
};
 */
function isValid(userData) {
  return userSchema.validate(userData);
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

const findAll = () => {
	return connection.execute('SELECT * from users;')
  .then(([results]) => results.map(formatUser));  // Passamos cada resultado pela função de formatação
};

const findById = (id)=>  {
	return connection.execute('SELECT * FROM users WHERE id = ?', [id])
		.then(([results]) => {
		if (results[0]) return formatUser(results[0]);  // caso encontre o usuário pelo id, ele será o 1º item no result. assim podemos formatá-lo e retornar os dados
		
		return null;  // caso contrário retorne nulo
		});
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
	const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

	await connection.execute(query, [firstName, lastName, email, password, id]);
	
	return findById(id);  // Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos.
};

module.exports = {
  isValid,
  formatUser,
  create,
  findAll,
  findById,
  updateUser,
};
