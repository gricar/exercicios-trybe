const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);
app.use(middlewares.error);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

const PORT = process.env.PORT || 3231;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
