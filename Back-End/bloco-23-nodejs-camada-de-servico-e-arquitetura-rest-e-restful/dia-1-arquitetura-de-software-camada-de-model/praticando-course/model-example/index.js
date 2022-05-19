const express = require('express');

const app = express();

const authorsRoute = require('./routes/authorsRoutes');
const booksRoutes = require('./routes/booksRoutes');

app.use('/authors', authorsRoute);
app.use('/books', booksRoutes);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
