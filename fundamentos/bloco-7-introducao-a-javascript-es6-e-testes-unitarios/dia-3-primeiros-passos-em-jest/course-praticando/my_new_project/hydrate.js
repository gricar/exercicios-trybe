/* Exercício 6 - Criar uma função baseado nos testes já fornecidos */
//recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca

const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};

//console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); //7 copos de água
//console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')); //3 copos de água

module.exports = hydrate;