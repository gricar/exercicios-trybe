require('dotenv').config();
const mysql = require('mysql2/promise');  // // Importamos o driver do banco

const connection = mysql.createPool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PWD,
	database: process.env.DATABASE_NAME
});

module.exports = connection;
