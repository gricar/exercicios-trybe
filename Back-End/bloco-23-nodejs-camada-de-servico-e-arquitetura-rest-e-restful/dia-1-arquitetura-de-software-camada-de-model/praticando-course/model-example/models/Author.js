const connection = require('./connection');

// 3 - Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {
	const fullName = [firstName, middleName, lastName]
		.filter(Boolean)  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false. Caso, middle_name for `undefined` ou uma string vazia o retorno será `false`
		.join(' ');

	return {
	id,
	firstName,
	middleName,
	lastName,
	fullName,
	};
};

// 2- Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// 1- Busca todas as pessoas autoras do banco.
const getAll = async () => {    //faz uma query mysql
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
	const [ authorData ] = await connection.execute(query, [id]);  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.

	if (authorData.length === 0) return null;

	const { firstName, middleName, lastName } = authorData.map(serialize)[0];

	return getNewAuthor({
		id,
		firstName,
		middleName,
		lastName,
	});
};

module.exports = {
	getAll,
	findById,
};
