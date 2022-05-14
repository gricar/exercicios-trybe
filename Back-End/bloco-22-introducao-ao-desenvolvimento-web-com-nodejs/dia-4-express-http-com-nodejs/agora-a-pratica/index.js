const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 1) Crie uma rota GET /ping
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// 2) Crie uma rota POST /hello -> deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
app.post('/hello', (req, res) => {
	const { name } = req.body;
	return res.status(201).json({ "message": `Hello, ${name}!` });
});

app.listen(3224, () => {
  console.log('Aplicação ouvindo na porta 3324');
});
