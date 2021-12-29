/* Bloco 8 - Higher Order Functions do JavaScript ES6
Exercícios Course */

//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

/* minha solução */
const validateAnswers = (gabarito, studentAnswer) => {
  let pontuacao = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === studentAnswer[i]) {
      //console.log('acertou', studentAnswer[i]);
      pontuacao += 1;
    } else if (gabarito[i] !== studentAnswer[i] && studentAnswer[i] !== 'N.A') {
      //console.log(studentAnswer[i]);
      pontuacao -= 0.5;
    }
  }
  return `Resultado final: ${pontuacao} corretas`;
};

console.log(validateAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));

/* gabarito - callback */
const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
