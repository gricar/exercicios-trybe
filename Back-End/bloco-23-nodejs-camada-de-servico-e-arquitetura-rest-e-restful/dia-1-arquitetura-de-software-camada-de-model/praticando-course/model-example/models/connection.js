const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'gricardo',  // de acordo com a suas credenciais criadas para acessar o BD
	password: 'Corinthians531', // de acordo com a suas credenciais criadas para acessar o BD
	database: 'model_example' });

module.exports = connection;
