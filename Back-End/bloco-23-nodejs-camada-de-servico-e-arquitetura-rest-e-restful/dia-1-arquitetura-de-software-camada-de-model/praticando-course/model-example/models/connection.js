require('dotenv').config();
const mysql = require('mysql2/promise');

console.log(process.env.DATABASE_HOST);

const connection = mysql.createPool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,  // de acordo com a suas credenciais criadas para acessar o BD
	password: process.env.DATABASE_PWD, // de acordo com a suas credenciais criadas para acessar o BD
	database: process.env.DATABASE_NAME
});

module.exports = connection;
