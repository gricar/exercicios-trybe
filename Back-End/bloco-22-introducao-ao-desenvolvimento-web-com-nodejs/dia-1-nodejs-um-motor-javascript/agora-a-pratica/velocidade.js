const readline = require('readline-sync');

const calculaVelocidade = (distancia, tempo) => distancia / tempo;

const main = () => {
	const distancia = readline.questionInt('Distância percorrida (m): ');
	const tempo = readline.questionInt('Tempo gasto (s): ');

	const veloMedia = calculaVelocidade(distancia, tempo);
	console.log(`Velocidade média: ${veloMedia.toFixed(2)} m/s`);
}

main();
