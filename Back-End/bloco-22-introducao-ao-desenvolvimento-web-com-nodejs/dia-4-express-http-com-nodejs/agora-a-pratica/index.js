const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./utils/fs-utils');

const app = express();
app.use(bodyParser.json());

// 1) Crie uma rota GET /ping
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// 2) Crie uma rota POST /hello -> deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
app.post('/hello', (req, res) => {
	const { name } = req.body;
	return res.status(201).json({ "message": `Hello, ${name}!` });
});

// 3) Crie uma rota POST /greetings -> valida a idade
app.post('/greetings', (req, res) => {
	const { name, age } = req.body;
	if (parseInt(age) > 17) {
		return res.status(200).json({ "message": `Hello, ${name}!` });
	}
	return res.status(401).json({ "message": "Unauthorized" });
});

// 4) Crie uma rota PUT /users/:name/:age
app.put('/users/:name/:age', (req, res) => {
	const { name, age } = req.params;
	return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 6) Crie um endpoint GET /simpsons 🚀
app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});



app.listen(3224, () => {
  console.log('Aplicação ouvindo na porta 3324');
});
