const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./utils/fs-utils');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(bodyParser.json());

// Bonus
// 1) Adicione autenticação a todos os endpoints.
// deve ser enviado através do header Authorization E ter exatamente 16 caracteres.
app.use(authMiddleware);

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

// 7) Crie um endpoint GET /simpsons/:id 🚀
app.get('/simpsons/:id', async (req, res) => {
	try {
		const { id } = req.params;

    const simpsons = await getSimpsons();
		const simpson = simpsons.find((s) => s.id === id);
		if (!simpson) {
			return res.status(404).json({ message: 'simpson not found' });
		}
    return res.status(202).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
});

// 8) Crie um endpoint POST /simpsons 🚀 -> O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
app.post('/simpsons', async (req, res) => {
	try {
		const { id, name } = req.body;

    const simpsons = await getSimpsons();
		const simpson = simpsons.find((s) => s.id === id);
		if (simpson) {
			return res.status(409).json({ message: 'id already exists' }); // status 409 -> conflict
		}
		
		simpsons.push({ id, name });

		await setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
	
});

app.listen(3224, () => {
  console.log('Aplicação ouvindo na porta 3324');
});
