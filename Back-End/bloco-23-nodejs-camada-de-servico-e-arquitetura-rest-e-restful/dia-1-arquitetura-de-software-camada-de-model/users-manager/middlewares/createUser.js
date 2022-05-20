const rescue = require('express-rescue');
const UserModel = require('../models/User');


// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
(req, res, next) => {
	const { error } = UserModel.isValid(req.body);
	if (error) return next(error);  // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.

	next();  // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
	},
	rescue(async (req, res, next) => {

		const { firstName, lastName, email, password } = req.body; 	// Extraimos os dados da requisição
		
		const newUser = await UserModel.create({ firstName, lastName, email, password }); // Caso os dados sejam válidos, pedimos pro model criar o usuário

		res.status(201).json(newUser);
	}),
];
