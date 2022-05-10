// 1) 🚀 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.

/* const peso = 85;
const altura = 1.85;
const calculaImc = (peso, altura) => peso / (Math.pow(altura,2));

// A função main é o ponto de partida do nosso programa
const main = () => {
	const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

// Executar o script utilizando node imc.js e certificar-se de que os valores retornados estão corretos.

// 2) 🚀 Agora, permita que o script seja executado através do comando npm run imc
// Alterado package.json
// Executar o script através do comando npm run imc e garantir que tudo continua funcionando corretamente.
*/


/* -------------------------------------------------------------------------------------- */

// 3) 🚀 Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

const readline = require('readline-sync');

const calculaImc = (peso, altura) => peso / (Math.pow(altura,2));

// A função main é o ponto de partida do nosso programa
const main = () => {
	const peso = readline.questionInt('Qual o seu peso? (em kg)');
  const altura = readline.questionFloat('Qual a sua altura? (em m)');
	
	const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();
