const express = require('express');

const app = express(); // Criar uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); //quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
}

// node index.js
// acessar a url http://localhost:3001/hello